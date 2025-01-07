import { GetRealIpAddressCallback } from '../types';

const ipv4Regex = /\b((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\b/;
const ipv6Regex = /\b([0-9a-fA-F]{1,4}:){7}([0-9a-fA-F]{1,4}|:)|(::([0-9a-fA-F]{1,4}:){0,6}([0-9a-fA-F]{1,4})?)\b/;
const isIPv4 = (ip: string) => ipv4Regex.test(ip);
const isIPv6 = (ip: string) => ipv6Regex.test(ip);

export const getRealIpAddress = (callback: GetRealIpAddressCallback) => {
    const rtcPeerConn = new RTCPeerConnection({ iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] });
    rtcPeerConn.createDataChannel('');
    rtcPeerConn.createOffer().then((offer) => rtcPeerConn.setLocalDescription(offer));

    const ip = { ipv4: '', ipv6: '' };

    rtcPeerConn.onicecandidate = function (event) {
        if (event.candidate && (ip.ipv4 === '' || ip.ipv6 === '')) {
            const parts = event.candidate?.candidate?.split(' ');
            const ipAddress = event.candidate?.address || parts[4];

            if (isIPv4(ipAddress) && ip.ipv4 === '') {
                ip.ipv4 = ipAddress;
            } else if (isIPv6(ipAddress) && ip.ipv6 === '') {
                ip.ipv6 = ipAddress;
            }
            if (ip.ipv4 || ip.ipv6) {
                callback(ip);
            }
        }
    };
};
