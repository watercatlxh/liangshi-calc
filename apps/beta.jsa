const _path = process.cwd()

export class beta extends plugin {
  constructor () {
    super({
      name: '测试角色极限面板',
      dsc: '测试角色极限面板',
      event: 'message',
      priority: -1,
      rule: [
        // 每个角色已分开，不需要此功能或不需要的角色请将对应的注释，非图片版请切换至team分支
        {
          reg: '^#?((极限|极限面板)?(丝|思|厮|四|司|寺|祀|似|私|s|S)(刻|可|柯|克|科|客|课|壳|咳|k|K)(刻|可|柯|克|科|客|课|壳|咳|k|K)(极限面板|面板100000000))$',
          fnc: 'beta_a'
        },
        {
          reg: '^#?((极限|极限面板)?(塔利雅|塔莉娅|塔莉雅|塔利亚|塔莉亚|塔利班)(极限面板|面板100000000))$',
          fnc: 'beta_b'
        }
      ]
    })
  }

  async beta_a () {
    this.e.reply(segment.image(`file:///${_path}/plugins/liangshi-calc/resources/1.jpeg`))
    return true
  }

  async beta_b () {
    this.e.reply(segment.image(`file:///${_path}/plugins/liangshi-calc/resources/2.jpeg`))
    return true
  }

}
