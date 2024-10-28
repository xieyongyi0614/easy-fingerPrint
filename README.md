# easy-fingerPrint

简单的浏览器指纹，通过 canvas.toDataURL() 生成唯一指纹。
在某些情况下，两台完全相同的电脑可能会生成相同的 canvas.toDataURL() 结果，尤其是在以下条件都一致的情况下：

1. 相同的操作系统和版本：确保两台电脑运行相同版本的操作系统。

2. 相同的浏览器和版本：使用相同版本的浏览器。

3. 相同的图形驱动程序：确保图形驱动程序版本一致。

4. 相同的抗锯齿和渲染设置：设置完全相同的渲染选项。

5. 相同的字体和系统设置：字体文件和系统设置完全一致。

6. 相同的显示器设置：颜色管理和显示器设置一致。

在这些条件下，生成的 canvas.toDataURL() 结果有可能会相同，但仍需考虑系统层面的微小差异。

### install

```shell
npm i easy-fingerPrint
```

### Example

```ts
import { generateFingerprint } from 'easy-fingerPrint';

generateFingerprint().then((fingerprint) => {
    console.log('fingerprint', fingerprint);
});
```
