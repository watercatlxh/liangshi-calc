# liangshi-calc

## 为角色面板功能提供全方位拓展
使用说明（需要安装Miao-Plugin才能使用）

打开Yunzai-Bot 根目录输入

<details><summary>更新状态与进度</summary>

---
### 原神 - gs

已支持：107 (100%) | 已重置：107 (100%) | 已完成：0 (0%)

###### 当前维护状态 (Ke_Akatsuki)

Ke_Akatsuki (2024.10.06 - 当前)

liangshi (2023.5.10 - 2025.1.15)

---
### 鸣潮 - mc
已支持：1 (2.56%) | 已重置：1 (2.56%) | 已完成：1 (2.56%)

###### 当前维护状态 (liangshi)

liangshi (2025.5.27 - 当前)

---
### 星铁 - sr
已支持：66 (88%)| 已重置：24 (32%)| 已完成：0 (0%)

###### 当前维护状态 (无)

liangshi (2023.6.14 - 2025.3.5)

> 当前无人维护，建议在设置中关闭liangshi-calc的星铁计算，使用miao-plugin本身的计算或安装其他星铁计算
---

</details>

##### gitee
~~~~~~~~~~
git clone --depth=1 https://gitee.com/liangshi233/liangshi-calc.git ./plugins/liangshi-calc/
~~~~~~~~~~
##### github
~~~~~~~~~~
git clone --depth=1 https://github.com/liangshi233/liangshi-calc.git ./plugins/liangshi-calc/
~~~~~~~~~~
   > 如果你的网络环境较差，无法连接到 Github，推荐使用文件代理加速下载服务
   >
   > ```
   > git clone --depth=1 https://git.090708.xyz/https://github.com/liangshi233/liangshi-calc.git ./plugins/liangshi-calc/
   > ```

重启Bot后即可启用插件

### 设置
设置请在本插件目录下`config/config.yaml` 修改
>若设置出现问题可删除`config/config.yaml`，重启后会重新生成

###### 计算/评分基础设置
~~~~~~~~~~YAML
calcLiang: true #liangshicalc 基础
calcLiangQ: false #liangshicalc 超全
calcLi: false #liangshicalc 大爷
artisLiang: false #liangshicalc普通评分
artisLiangZ: false #liangshicalc自适应评分
~~~~~~~~~~
###### 其他设置
~~~~~~~~~~YAML
autoRefresh: true #重启后会自动刷新极限、平民等预设面板，默认开启，不需要则改为 false
panelmodel: 1 #自动刷新预设面板的版本，默认使用liangshi，需要自定义请修改为 0
~~~~~~~~~~

！独立角色排行设置移至`liangshi-calc\config\ranking.js`,设置内容与原先保持一致

更多设置内容请 [点击](config/system/config.md)🤔

### 功能
~~~~~~~~~~
现有的角色更多类型的伤害计算条目
现有的角色提供预设面板以供查看
支持深度对计算条目场景进行自定义
支持自定义排行目标条目
支持自定义条目显示名称
支持安装他人伤害计算与评分
~~~~~~~~~~
！希诺宁及往后计算未经实机检验正确性，有问题请在issues中提出
！通用计算，面板数据组队计算需要更新至最新版miao-plugin才可正常使用

默认支持内容查询 [点击](damage/liangshi-gs/README.md)🤔

<details><summary>安装他人的计算-仅供参考</summary>

> 参考用的仓库被封了，示例仅供展示

###### 步骤1

使用链接安装示例 - 仅供参考，具体步骤请按对应计算说明中写明方法
~~~~~~~~~~
#更新 + '主页链接' + '游戏名字' + '仓库名字' + 伤害计算

#更新https://gitee.com/liangshi233星铁liangshi伤害计算
~~~~~~~~~~

使用名字安装/更新示例 - 仅供参考，具体步骤请按对应计算说明中写明方法
~~~~~~~~~~
#更新 + '仓库名字' + '游戏名字' + 伤害计算

#更新liangshi星铁伤害计算
~~~~~~~~~~

手动安装示例 - 仅供参考，具体步骤请按对应计算说明中写明方法

~~~~~~~~~~
git clone --depth=1 https://gitee.com/liangshi233/liangshi-sr.git ./plugins/liangshi-calc/damage/liangshi-sr/
~~~~~~~~~~

###### 步骤2

在设置中手动添加-仅供参考，具体步骤请按对应计算说明中的方法
~~~~~~~~~~YAML
calcmodel: liangshi #你安装计算的名字（例如abc-gs，就填abc）
~~~~~~~~~~

###### 步骤3

重启Bot

</details>

---

> 其他资源位置

无鸣潮版：Nmc分支

组队修正版：team分支

|     名称      |                         gitee                         |                         github                          |
|:-----------:|:-----------------------------------------------------:|:-------------------------------------------------------:|
| Yunzai-Bot  |     [gitee](https://gitee.com/le-niao/Yunzai-Bot)     |     [github](https://github.com/le-niao/Yunzai-Bot)     |
| Yunzai-Miao | [gitee](https://gitee.com/yoimiya-kokomi/Yunzai-Bot)  | [github](https://github.com/yoimiya-kokomi/Yunzai-Bot)  |
| Miao-Yunzai | [gitee](https://gitee.com/yoimiya-kokomi/Miao-Yunzai) | [github](https://github.com/yoimiya-kokomi/Miao-Yunzai) |
| Miao-Plugin | [gitee](https://gitee.com/yoimiya-kokomi/miao-plugin) | [github](https://github.com/yoimiya-kokomi/miao-plugin) |
