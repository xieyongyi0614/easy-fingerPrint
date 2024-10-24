import { CanvasFingerPrint, FingerPrintInfo } from './types';
import { canvasFingerPrint, getAgentInfo } from './utils';

export const generateFingerprint = async (): Promise<FingerPrintInfo> => {
  const fp = await canvasFingerPrint();
  return { ...fp, ...getAgentInfo(), visitorId: fp.hash, ip: '' };
};
