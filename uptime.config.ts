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
      id: 'aicnn_api_monitor',
      name: 'AICNN API Monitor',
      method: 'GET',
      target: 'https://api.aicnn.cn/v1/',
      tooltip: 'AICNN API Status',
      statusPageLink: 'https://api.aicnn.cn/v1/',
      expectedCodes: [200, 201, 204], // 接受这些状态码表示正常
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare Monitor',
      },
    }
  ],
  notification: {
    // 如果你需要通知，请取消注释下面的配置并填入正确的值
    // appriseApiServer: "https://your-apprise-server.com/notify",
    // recipientUrl: "tgram://bottoken/ChatID",
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
