const pageConfig = {
  title: "API Status Monitor",
  links: [
    { link: 'mailto:your@email.com', label: 'Contact', highlight: true },
  ],
}

const workerConfig = {
  kvWriteCooldownMinutes: 3,
  monitors: [
    {
      id: 'piter_api',
      name: 'PITER API',
      method: 'GET',
      target: 'https://npiter-chatmerlinapi.hf.space/hf',
      tooltip: 'AICNN API Service Status',
      statusPageLink: 'https://npiter-chatmerlinapi.hf.space/hf',
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
    }
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
}

export { pageConfig, workerConfig }
