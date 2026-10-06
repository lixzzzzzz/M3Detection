# M3Detection 网页发布说明

目标地址建议：

`https://lixzzzzzz.github.io/M3Detection/`

## 一、发布前先本地预览

在 Mac 终端进入本文件夹，例如文件夹放在桌面：

```bash
cd ~/Desktop/M3Detection
python3 -m http.server 8000
```

浏览器打开：

`http://localhost:8000/`

确认标题、图片、按钮和排版均正常后，终端按 `Control + C` 停止本地服务器。

## 二、在 GitHub 新建网页仓库

1. 登录 GitHub。
2. 右上角 `+` → `New repository`。
3. Repository name 填：`M3Detection`。
4. 选择 `Public`。
5. **不要勾选** `Add a README file`、`.gitignore` 或 License，保持仓库为空，避免第一次推送冲突。
6. 点击 `Create repository`。

## 三、用终端上传网页文件

假设网页文件夹为：

`~/Desktop/M3Detection`

依次执行：

```bash
cd ~/Desktop/M3Detection

git init
git branch -M main
git add .
git commit -m "Initial M3Detection project page"
git remote add origin https://github.com/lixzzzzzz/M3Detection.git
git push -u origin main
```

执行完成后刷新 GitHub 仓库页面，应看到：

- `index.html`
- `README.md`
- `PUBLISH_CN.md`
- `static/`

其中最关键的是 `index.html` 必须位于仓库根目录。

## 四、开启 GitHub Pages

进入仓库：

`Settings` → `Pages`

在 `Build and deployment` 中设置：

- Source：`Deploy from a branch`
- Branch：`main`
- Folder：`/(root)`
- 点击 `Save`

等待通常 1–3 分钟，然后刷新该页面。

成功后会显示：

`https://lixzzzzzz.github.io/M3Detection/`

第一次开启后如果暂时出现 404，通常再等待几十秒到几分钟即可。

## 五、以后修改网页后如何更新

每次修改 `index.html`、CSS 或其他文件后，在仓库文件夹执行：

```bash
cd ~/Desktop/M3Detection
git add .
git commit -m "Update M3Detection project page"
git push
```

GitHub Pages 会自动重新部署，无需再次配置 Pages。

## 六、代码仓库公开后添加 Code 按钮

`index.html` 顶部按钮区域已经预留了 Code 按钮，但当前被 HTML 注释隐藏。

找到：

```html
<!-- When the code repository is public, enable this button and replace the URL.
...
-->
```

删除开头的 `<!--` 和结尾的 `-->`，然后把：

```text
https://github.com/lixzzzzzz/YOUR-M3-CODE-REPOSITORY
```

改成真实代码仓库地址即可。

修改后执行：

```bash
git add index.html
git commit -m "Add code repository link"
git push
```

## 七、如果你希望图片完全放在自己的仓库

目前网页与 SFGFusion 一样，论文图直接引用 arXiv 的公开图片 URL。这样可以直接发布，而且仓库很小。

如果以后希望完全独立、不依赖 arXiv，可以把以下图片下载到 `static/images/`：

- `Existing_Methods_Comparsion.png`
- `Model_Architecture.png`
- `Globla_Feature_Aggregation.png`
- `Local_Feature_Aggregation.png`
- `Multi_Frame_Spatiotemporal_Reasoning.png`
- `vod-result-vis.png`
- `tj4d-result-vis.png`

然后把 `index.html` 里的：

```html
src="https://arxiv.org/html/2510.27166v1/xxx.png"
```

改成：

```html
src="static/images/xxx.png"
```

即可。
