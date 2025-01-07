export interface CanvasFingerPrint {
    dataURL: string;
    hash: string;
}
export interface FingerPrintInfo {
    browserName: string;
    browserVersion: string;
    device: string;
    ip: string;
    os: string;
    osVersion: string;
    visitorId: string;
    userAgent: string;
}

export type GetRealIpAddressCallback = (ip: IpAddresses) => void;
export interface IpAddresses {
    ipv4: string;
    ipv6: string;
}
