import { Scenario, WorkflowStep } from './types';

export const SCENARIOS: Scenario[] = [
  {
    id: 'db-crash',
    title: 'DB Password Missing',
    errorCode: 'CrashLoopBackOff',
    description: 'The PostgreSQL pod keeps restarting because it cannot authenticate.',
    logSnippet: `[ERROR] FATAL:  password authentication failed for user "postgres"
[ERROR] detail:  Connection matched pg_hba.conf line 1: "host all all 0.0.0.0/0 md5"
panic: failed to connect to database`,
    aiAnalysis: `Analysis: The logs indicate a "password authentication failed" error. The pod is entering a crash loop because the application cannot connect to the database.
Likely Cause: The environment variable 'DB_PASSWORD' is missing or incorrect in the Deployment manifest.`,
    solution: `Action: Inject the missing Kubernetes Secret 'db-secret' into the Deployment env vars.`
  },
  {
    id: 'image-pull',
    title: 'Image Tag Typo',
    errorCode: 'ImagePullBackOff',
    description: 'Deployment fails to pull the specified container image.',
    logSnippet: `Failed to pull image "my-app:v1.0.22": rpc error: code = Unknown desc = Error response from daemon: manifest for my-app:v1.0.22 not found: manifest unknown: manifest unknown
Error: ErrImagePull
Error: ImagePullBackOff`,
    aiAnalysis: `Analysis: The container runtime cannot find the image tag 'v1.0.22' in the registry. 
Likely Cause: Typo in the image tag. The latest available tag in the registry is 'v1.0.2'.`,
    solution: `Action: Update the Deployment image tag to 'v1.0.2' and restart the rollout.`
  },
  {
    id: 'cpu-stress',
    title: 'CPU Overload',
    errorCode: 'HighCPUUsage',
    description: 'Unexpected traffic spike causing CPU throttling.',
    logSnippet: `[WARN] CPU usage at 98% (Limit: 500m)
[WARN] Throttling request processing
[ALERT] Prometheus Rule: HighCPUUsage triggered for pod frontend-7b8c9d`,
    aiAnalysis: `Analysis: The 'frontend' pod is consistently hitting its CPU limit of 500m. Response times have degraded by 400%.
Likely Cause: Unexpected load surge exceeding current resource limits.`,
    solution: `Action: Horizontal Pod Autoscaler (HPA) triggered. Scaling replicas from 2 to 5.`
  }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    id: 1,
    title: 'Detect',
    description: 'Prometheus Alert Manager detects anomaly in K3s cluster.',
    tool: 'Prometheus',
    iconName: 'Activity'
  },
  {
    id: 2,
    title: 'Collect',
    description: 'n8n triggers workflow, fetching K8s logs via API.',
    tool: 'n8n',
    iconName: 'Database'
  },
  {
    id: 3,
    title: 'Analyze',
    description: 'Logs sent via tunnel to School GPU Server for inference.',
    tool: 'Ollama (Llama 3)',
    iconName: 'Brain'
  },
  {
    id: 4,
    title: 'Diagnose',
    description: 'AI identifies root cause and generates patch suggestion.',
    tool: 'AI Core',
    iconName: 'FileText'
  },
  {
    id: 5,
    title: 'Action',
    description: 'Alert sent to Slack. Operator approves auto-fix.',
    tool: 'Slack / K8s',
    iconName: 'CheckCircle'
  }
];