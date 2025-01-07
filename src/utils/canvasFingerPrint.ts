import { CanvasFingerPrint } from '../types';
import { MD5 } from 'crypto-js';

export const canvasFingerPrint = (): Promise<CanvasFingerPrint> => {
    return new Promise((resolve, reject) => {
        const result = { dataURL: '', hash: '' };
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = 200;
        canvas.height = 200;
        if (ctx === null) {
            console.error('Failed to get 2D context for canvas.');
            reject(result);
            return;
        }

        // 绘制矩形
        ctx.fillStyle = '#FF5733';
        ctx.fillRect(10, 10, 50, 50);

        // 绘制圆形
        ctx.beginPath();
        ctx.arc(100, 50, 25, 0, Math.PI * 2, true);
        ctx.fillStyle = '#33FF57';
        ctx.fill();

        // 绘制三角形
        ctx.beginPath();
        ctx.moveTo(150, 10);
        ctx.lineTo(180, 60);
        ctx.lineTo(120, 60);
        ctx.closePath();
        ctx.fillStyle = '#3357FF';
        ctx.fill();

        // 绘制文本
        ctx.font = '16pt Arial';
        ctx.fillStyle = '#000000';
        ctx.fillText('Canvas FingerPrint Arial', 10, 100);

        ctx.font = '16pt no-real-font-123';
        ctx.fillText('Canvas FingerPrint no-real-font', 10, 130);

        if (canvas.toDataURL) {
            result.dataURL = canvas.toDataURL();
            result.hash = MD5(result.dataURL).toString();
        }

        resolve(result);
    });
};
