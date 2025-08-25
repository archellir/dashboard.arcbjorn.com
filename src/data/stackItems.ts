import { AnsibleIcon } from "../components/icons/AnsibleIcon";
import { DockerIcon } from "../components/icons/DockerIcon";
import { PortainerIcon } from "../components/icons/PortainerIcon";
import { GithubActionsIcon } from "../components/icons/GithubActionsIcon";
import { LockIcon } from "../components/icons/LockIcon";
import { DenoIcon } from "../components/icons/DenoIcon";
import { CloudflareIcon } from "../components/icons/CloudflareIcon";
import { KubernetesIcon } from "../components/icons/KubernetesIcon";

export const stackItems = [
  {
    name: "Portainer",
    icon: PortainerIcon,
    url: "https://portainer.io/",
  },
  {
    name: "Github Actions",
    icon: GithubActionsIcon,
    url: "https://github.com/features/actions",
  },
  {
    name: "Caddy v2",
    icon: LockIcon,
    url: "https://caddyserver.com/",
  },
  {
    name: "Docker",
    icon: DockerIcon,
    url: "https://www.docker.com/",
  },
  {
    name: "Ansible",
    icon: AnsibleIcon,
    url: "https://www.ansible.com/",
  },
  {
    name: "Cloudflare",
    icon: CloudflareIcon,
    url: "https://www.cloudflare.com/",
  },
  {
    name: "Deno Deploy",
    icon: DenoIcon,
    url: "https://deno.com/deploy",
  },
  {
    name: "Kubernetes",
    icon: KubernetesIcon,
    url: "https://kubernetes.io/",
  },
];
