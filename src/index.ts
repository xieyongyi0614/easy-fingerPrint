import { FingerPrintInfo } from './types';
import { canvasFingerPrint, getAgentInfo } from './utils';
import { getRealIpAddress } from './utils/getRealIpAddress';

export const generateFingerprint = (): Promise<FingerPrintInfo> => {
    return new Promise((resolve, reject) => {
        canvasFingerPrint()
            .then((fp) =>
                getRealIpAddress((ip) => resolve({ ...fp, ...getAgentInfo(), visitorId: fp.hash, ip: ip.ipv4 ? ip.ipv4 : ip.ipv6 }))
            )
            .catch((err) => reject(err));
    });
};
