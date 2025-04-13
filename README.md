# liangshi-calc

## 为角色面板功能提供全方位拓展
使用说明（需要安装Miao-Plugin才能使用）

打开Yunzai-Bot 根目录输入

<details><summary>跑路了</summary>

跑路了，有空就更新，没空就没空

![](./resources/LLQ.jpg)

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
支持部分角色使用自己面板作为队友进行组队计算
支持深度对计算条目场景进行自定义
支持自定义排行目标条目
支持自定义条目显示名称
支持安装他人伤害计算与评分
~~~~~~~~~~
！希诺宁及往后计算未经实机检验正确性，有问题请在issues中提出
！通用计算，面板数据组队计算需要更新至最新版miao-plugin才可正常使用

默认支持内容查询 [点击](damage/liangshi-gs/README.md)🤔

<details><summary>组队计算相关</summary>

##### 使用面板数据进行组队计算（以阿千艾钟为例）

> 此功能仅支持超全与组队计算

###### 使用自己的面板数据
~~~~~~~~~~
依次使用（部分队伍使用不同的顺序可能会导致实际伤害误差）
#钟离面板（建议根据上场顺序依次呼出）
#艾梅莉埃面板（一般呼出顺序为：生存位-辅助位-副输出位-主输出位）
#千织面板（部分特殊队伍中的角色可能需要多次呼出）
最后使用（如果缺少某一角色则对应角色buff将使用预设值）
#阿蕾奇诺面板（在队伍中作为主要输出的角色面板必须最后一个呼出）
~~~~~~~~~~
每次使用对应角色面板均会自动更新对应角色组队buff加成

###### 使用他人的面板数据（尚未验证）
~~~~~~~~~~
与使用自己的面板数据步骤一致
如果你需要使用他人的圣遗物只需在使用面板时更换即可
例#千织面板换XX圣遗物
不主动使用对应角色面板功能其角色组队buff加成不会变动
即使用过`#千织面板换XX圣遗物`后不使用`#千织面板`，后续组队计算buff均会使用他人圣遗物，不会自动切换为自己的圣遗物
~~~~~~~~~~

##### 注意事项
由于任何人都可以修改其他人的组队buff，伤害异常时建议使用#XX伤害查看组队buff详细并重新刷新异常的buff

</details>


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

> 由于个人时间精力有限，后续自带的计算基本不再会更新新角色，建议安装其他仓库的计算避免后续角色无计算

</details>

---

> 其他资源位置

|名称|gitee|github|
|:----:|:----:|:----:|
|Yunzai-Bot | [gitee](https://gitee.com/le-niao/Yunzai-Bot) | [github](https://github.com/le-niao/Yunzai-Bot) |
|Yunzai-Miao| [gitee](https://gitee.com/yoimiya-kokomi/Yunzai-Bot) | [github](https://github.com/yoimiya-kokomi/Yunzai-Bot) |
|Miao-Yunzai | [gitee](https://gitee.com/yoimiya-kokomi/Miao-Yunzai) | [github](https://github.com/yoimiya-kokomi/Miao-Yunzai) |
|Miao-Plugin | [gitee](https://gitee.com/yoimiya-kokomi/miao-plugin) | [github](https://github.com/yoimiya-kokomi/miao-plugin) |
