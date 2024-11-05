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
4. 把本地仓库提交到远程仓库
   > 1. 建立本地仓库和远程仓库的连接
   - git remote -v ==> (查看本地仓库和那些远程仓库保持连接)
   - git remote add origin [仓库地址] ==> (添加远程仓库地址)(origin 可以修改不是固定的)
   - git remote rm origin ==> 删除关联信息(origin 创建关联时取的名称)
   - git pull origin master ==> 提交之前先拉取代码(origin 连接的 master 分支代码)
   - git push origin master ==> 把本地代码提交到远程仓库(origin 连接的 master 分支代码)(可能需要输入用户名密码)
   - git config --global http.sslVerify false ==> (unable to get local issuer certificate)
   - git reset --hard [bb4687170ed295daa5471238fb03159dfabfa4f9(提交节点 ID)] ==> 代码回退到那个节点
   - (OpenSSL SSL_read: SSL_ERROR_SYSCALL, errno 0) 连接失败 ==> (watt toolkit)安装加速器
   - git clone [远程 git 仓库地址] [别名：可以不设置，默认仓库名] ==> 克隆项目到本地
