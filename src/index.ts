import { canvasFingerPrint, getAgentInfo } from './utils';

export const generateFingerprint = async () => {
  const fp = await canvasFingerPrint();
  return { ...fp, ...getAgentInfo() };
};
