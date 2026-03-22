export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: ' FFI Integration',
    description:
      'Called Rust functions from Go via cgo (zero-copy data transfer) to accelerate CPU-intensive operations. Performance benchmarks for CPU-bound tasks (benchmarks in README). 0 memory leaks during load testing, safe memory handling',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/NYAGIN21',
    slug: 'vscode-portfolio',
  },
  {
    title: 'gRPC Microservices',
    description:
      'Microservice architecture on gRPC/Protobuf: Async server on Rust (tokio) + client on Go. Latency between services < 1ms (localhost, gRPC). Throughput: 5K+ RPS in load tests',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/NYAGIN21',
    slug: 'vscode-portfolio',
  },
  {
    title: 'Observability Stack',
    description:
      'Metrics collection from polyglot applications (Prometheus) with 15-second interval. 3 dashboards in Grafana (System, Application, Business), System health dashboards. SLI/SLO monitoring (RPS, Latency, Errors)',
    logo: '/logos/vsc.svg',
    link: 'https://github.com/NYAGIN21',
    slug: 'vscode-portfolio',
  },
  {
    title: 'Games on Solan',
    description:
      'Tic-Tac-Toe // Rock-Paper-Scissors',
    logo: '/logos/subtrackt.svg',
    link: 'https://github.com/NYAGIN21',
    slug: 'subtrackt',
  },
];
