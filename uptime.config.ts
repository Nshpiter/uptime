const pageConfig = {
  title: "API Status Monitor",
  links: [
    { link: 'mailto:npiter1@outlook.com', label: 'Contact', highlight: true },
  ],
};

const workerConfig = {
  kvWriteCooldownMinutes: 3,
  monitors: [
    {
      id: 'piterblog',
      name: 'piter的小窝',
      method: 'GET',
      target: 'https://npiter.tech',
      tooltip: 'AICNN API Service Status',
      statusPageLink: 'https://npiter.tech',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'piter',
      },
    },
    {
      id: 'nsh_asia',
      name: 'piter的个人博客',
      method: 'GET',
      target: 'https://nsh.asia',
      tooltip: 'NSH Asia Website Status',
      statusPageLink: 'https://nsh.asia',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'piter',
      },
    },
    {
      id: 'npiter_blog',
      name: 'Npiter Blog',
      method: 'GET',
      target: 'https://blog.npiter.tech/',
      tooltip: 'Npiter Blog Status',
      statusPageLink: 'https://blog.npiter.tech/',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'piter',
      },
    },
    {
      id: 'hy2',
      name: 's15',
      method: 'GET',
      target: 'https://keep.charin.serv00.net/status',
      tooltip: 'Keep Alive Service Status',
      statusPageLink: 'https://keep.charin.serv00.net/status',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'piter',
      },
    },
  ],
  notification: {
    timeZone: "Asia/Shanghai",
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      console.log(`Status changed for ${monitor.name}: ${isUp ? 'UP' : 'DOWN'}`);
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      console.log(`Ongoing incident for ${monitor.name}`);
    },
  },
};

// 导出两个配置对象
export { pageConfig, workerConfig };
