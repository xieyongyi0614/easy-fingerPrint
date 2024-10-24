export const getAgentInfo = () => {
  const userAgent = navigator.userAgent;
  const agentInfo = {
    userAgent,
    browserName: '',
    browserVersion: '',
    os: '',
    osVersion: '',
    device: '',
  };

  if (userAgent.includes('Chrome') && !userAgent.includes('Chromium')) {
    agentInfo.browserName = 'Chrome';
    agentInfo.browserVersion =
      userAgent.match(/Chrome\/(\d+\.\d+\.\d+\.\d+)/)?.[1] || 'Unknown';
  } else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
    agentInfo.browserName = 'Safari';
    agentInfo.browserVersion =
      userAgent.match(/Version\/(\d+\.\d+)/)?.[1] || 'Unknown';
  } else if (userAgent.includes('Firefox')) {
    agentInfo.browserName = 'Firefox';
    agentInfo.browserVersion =
      userAgent.match(/Firefox\/(\d+\.\d+)/)?.[1] || 'Unknown';
  }

  if (userAgent.includes('Mac OS X')) {
    agentInfo.os = 'Mac OS X';
    agentInfo.osVersion =
      userAgent.match(/Mac OS X (\d+[_.]\d+)/)?.[1].replace('_', '.') ||
      'Unknown';
  } else if (userAgent.includes('Windows')) {
    agentInfo.os = 'Windows';
    agentInfo.osVersion =
      userAgent.match(/Windows NT (\d+\.\d+)/)?.[1] || 'Unknown';
  } else if (/Android/i.test(userAgent)) {
    agentInfo.os = 'Android';
    agentInfo.osVersion =
      userAgent.match(/Android (\d+\.\d+)/)?.[1] || 'Unknown';
  } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
    agentInfo.os = 'iOS';
    agentInfo.osVersion =
      userAgent.match(/OS (\d+[_.]\d+)/)?.[1].replace('_', '.') || 'Unknown';
  }

  if (/iPhone/i.test(userAgent)) {
    agentInfo.device = 'iPhone';
  } else if (/iPad/i.test(userAgent)) {
    agentInfo.device = 'iPad';
  } else if (/Android/i.test(userAgent)) {
    agentInfo.device = 'Android';
  } else if (/Macintosh/i.test(userAgent)) {
    agentInfo.device = 'Mac';
  } else if (/Windows/i.test(userAgent)) {
    agentInfo.device = 'Windows PC';
  }

  return agentInfo;
};
