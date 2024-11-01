## 1. git 的全局配置

> 第一次安装 git，我们在全局环境下配置基本信息：
>
> - git config -l 查看配置信息
> - git config --global -l 查看全局配置信息
> - git config --global user.name 'xxx' 全局配置用户名信息
> - git config --global user.email 'xxx@xxx' 全局配置用户 email

## 2. 创建仓库完成版本控制

1. 创建 git 本地仓库
   > - git init
   > - 会生成一个隐藏的 ".git" (文件不要删，因为暂存区，历史区还有其他信息都在这里，删了就不是完整 git 仓库了)
2. 在本地编写完代码后，把一些文件提交到暂存区
   > - git add xxx 把某一个文件提交到暂存区
   > - git add . 把所有新修改的文件提交到暂存区 (git add -A )
   > - git status 查看文件状态(红色工作区，绿色暂存区，看不见东西证明所有修改的信息已提交到历史区)
3. 把暂存区内容提交到历史区
   > - git commit 提交到历史区
   > - git commit -m"描述信息：本次提交的信息" 提交到历史区(加描述信息)
   > - git log 查看历史版本
   > - git reflog 查看历史版本(包含回滚信息)
