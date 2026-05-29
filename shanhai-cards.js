// 山海经卡牌数据 - 神兽篇 (~150张)
const DIVINE_BEASTS = [
  // 四圣兽
  { name: '青龙', series: '四圣兽', stars: 5, atk: 4500, def: 4800, skill: '龙卷九天', icon: '🐉', img: '' },
  { name: '白虎', series: '四圣兽', stars: 5, atk: 4400, def: 4600, skill: '白虎啸天', icon: '🐅', img: '' },
  { name: '朱雀', series: '四圣兽', stars: 5, atk: 4700, def: 4500, skill: '烈焰焚天', icon: '🔥', img: '' },
  { name: '玄武', series: '四圣兽', stars: 5, atk: 4200, def: 5000, skill: '玄武真身', icon: '🐢', img: '' },
  
  // 神兽
  { name: '麒麟', series: '瑞兽', stars: 5, atk: 4300, def: 4700, skill: '麒麟圣光', icon: '🦌', img: '' },
  { name: '凤凰', series: '瑞兽', stars: 5, atk: 4600, def: 4400, skill: '涅槃重生', icon: '🦅', img: '' },
  { name: '白泽', series: '瑞兽', stars: 4, atk: 3800, def: 4000, skill: '通灵神知', icon: '🦌', img: '' },
  { name: '龙龟', series: '瑞兽', stars: 4, atk: 3500, def: 4200, skill: '龙龟护体', icon: '🐢', img: '' },
  { name: '比翼鸟', series: '瑞兽', stars: 3, atk: 3000, def: 3200, skill: '比翼双飞', icon: '🐦', img: '' },
  { name: '比目鱼', series: '瑞兽', stars: 3, atk: 2800, def: 3100, skill: '双目凝视', icon: '🐟', img: '' },
  
  // 龙族
  { name: '应龙', series: '龙族', stars: 5, atk: 4800, def: 4600, skill: '龙神降世', icon: '🐉', img: '' },
  { name: '烛龙', series: '龙族', stars: 5, atk: 4900, def: 4700, skill: '烛照九幽', icon: '🐉', img: '' },
  { name: '夔牛', series: '龙族', stars: 4, atk: 4000, def: 3800, skill: '雷鸣天下', icon: '🐂', img: '' },
  { name: '螭龙', series: '龙族', stars: 4, atk: 3900, def: 4100, skill: '水龙吟', icon: '🐉', img: '' },
  { name: '虬龙', series: '龙族', stars: 4, atk: 3800, def: 4000, skill: '九龙出海', icon: '🐉', img: '' },
  { name: '蛟龙', series: '龙族', stars: 4, atk: 4000, def: 3900, skill: '蛟龙翻江', icon: '🐉', img: '' },
  { name: '云龙', series: '龙族', stars: 3, atk: 3200, def: 3500, skill: '云龙隐现', icon: '☁️', img: '' },
  { name: '风龙', series: '龙族', stars: 3, atk: 3300, def: 3400, skill: '风起云涌', icon: '💨', img: '' },
  { name: '雷龙', series: '龙族', stars: 4, atk: 4100, def: 3700, skill: '雷霆万钧', icon: '⚡', img: '' },
  { name: '火龙', series: '龙族', stars: 4, atk: 4300, def: 3600, skill: '龙火焚天', icon: '🔥', img: '' },
  
  // 凤凰一族
  { name: '朱雀', series: '凤凰', stars: 5, atk: 4700, def: 4500, skill: '朱雀燎原', icon: '🦅', img: '' },
  { name: '鸾鸟', series: '凤凰', stars: 4, atk: 3800, def: 4000, skill: '鸾凤鸣天', icon: '🦅', img: '' },
  { name: '鹓雏', series: '凤凰', stars: 4, atk: 3700, def: 3900, skill: '雏凤清鸣', icon: '🦅', img: '' },
  { name: '鹄鸟', series: '凤凰', stars: 3, atk: 3200, def: 3500, skill: '鹄翔九天', icon: '🦅', img: '' },
  { name: '鸿鹄', series: '凤凰', stars: 3, atk: 3300, def: 3400, skill: '鸿鹄之志', icon: '🦅', img: '' },
  
  // 瑞草仙禽
  { name: '白鹿', series: '仙兽', stars: 4, atk: 3400, def: 3800, skill: '白鹿衔芝', icon: '🦌', img: '' },
  { name: '青鸾', series: '仙兽', stars: 4, atk: 3600, def: 3700, skill: '青鸾翔云', icon: '🦅', img: '' },
  { name: '玄鹤', series: '仙兽', stars: 3, atk: 2800, def: 3300, skill: '玄鹤冲天', icon: '🦅', img: '' },
  { name: '灵龟', series: '仙兽', stars: 3, atk: 2600, def: 3400, skill: '灵龟献瑞', icon: '🐢', img: '' },
  { name: '玉兔', series: '仙兽', stars: 3, atk: 2700, def: 3100, skill: '玉兔捣药', icon: '🐰', img: '' },
  
  // 天马与神驹
  { name: '天马', series: '神驹', stars: 4, atk: 3800, def: 3600, skill: '天马行空', icon: '🐎', img: '' },
  { name: '赤兔', series: '神驹', stars: 4, atk: 4000, def: 3500, skill: '赤兔追风', icon: '🐎', img: '' },
  { name: '的卢', series: '神驹', stars: 4, atk: 3900, def: 3700, skill: '的卢飞跃', icon: '🐎', img: '' },
  { name: '绝影', series: '神驹', stars: 3, atk: 3400, def: 3300, skill: '绝影无痕', icon: '🐎', img: '' },
  { name: '爪黄飞电', series: '神驹', stars: 3, atk: 3300, def: 3400, skill: '飞电千里', icon: '⚡', img: '' },
  
  // 狮子类
  { name: '狻猊', series: '神狮', stars: 4, atk: 3900, def: 3800, skill: '狻猊怒吼', icon: '🦁', img: '' },
  { name: '狴犴', series: '神狮', stars: 4, atk: 3800, def: 4000, skill: '狴犴审判', icon: '🦁', img: '' },
  { name: '赑屃', series: '神狮', stars: 4, atk: 3600, def: 4300, skill: '赑屃负重', icon: '🐢', img: '' },
  { name: '螭吻', series: '神狮', stars: 3, atk: 3200, def: 3500, skill: '螭吻辟火', icon: '🐉', img: '' },
  { name: '蒲牢', series: '神狮', stars: 3, atk: 3300, def: 3200, skill: '蒲牢鸣钟', icon: '🦁', img: '' },
  { name: '嘲风', series: '神狮', stars: 3, atk: 3100, def: 3400, skill: '嘲风登高', icon: '🦁', img: '' },
  { name: '负屃', series: '神狮', stars: 3, atk: 3000, def: 3300, skill: '负屃文雅', icon: '🐉', img: '' },
  
  // 狐狸类（瑞狐）
  { name: '九尾狐', series: '仙狐', stars: 4, atk: 3800, def: 4000, skill: '九尾幻术', icon: '🦊', img: '' },
  { name: '白狐', series: '仙狐', stars: 3, atk: 3000, def: 3300, skill: '白狐魅惑', icon: '🦊', img: '' },
  { name: '玄狐', series: '仙狐', stars: 3, atk: 3100, def: 3200, skill: '玄狐迷踪', icon: '🦊', img: '' },
  { name: '火狐', series: '仙狐', stars: 3, atk: 3400, def: 2900, skill: '狐火焚林', icon: '🔥', img: '' },
  
  // 牛类神兽
  { name: '兕', series: '神牛', stars: 4, atk: 3700, def: 4000, skill: '兕角无双', icon: '🐂', img: '' },
  { name: '白兕', series: '神牛', stars: 4, atk: 3800, def: 4100, skill: '白兕镇海', icon: '🐂', img: '' },
  { name: '青牛', series: '神牛', stars: 3, atk: 3200, def: 3600, skill: '青牛化虹', icon: '🐂', img: '' },
  { name: '黄牛', series: '神牛', stars: 3, atk: 2900, def: 3300, skill: '黄牛耕地', icon: '🐂', img: '' },
  
  // 龟类神兽
  { name: '神龟', series: '神龟', stars: 3, atk: 2600, def: 3800, skill: '神龟长寿', icon: '🐢', img: '' },
  { name: '玄龟', series: '神龟', stars: 4, atk: 3200, def: 4000, skill: '玄龟定海', icon: '🐢', img: '' },
  { name: '文龟', series: '神龟', stars: 3, atk: 2800, def: 3500, skill: '文龟载书', icon: '📚', img: '' },
  { name: '玳瑁', series: '神龟', stars: 3, atk: 2900, def: 3400, skill: '玳瑁护身', icon: '🐢', img: '' },
  
  // 蛇类神兽
  { name: '白蛇', series: '灵蛇', stars: 4, atk: 3600, def: 3400, skill: '白蛇化形', icon: '🐍', img: '' },
  { name: '青蛇', series: '灵蛇', stars: 4, atk: 3700, def: 3300, skill: '青蛇幻化', icon: '🐍', img: '' },
  { name: '金蛇', series: '灵蛇', stars: 3, atk: 3300, def: 3000, skill: '金蛇狂舞', icon: '🐍', img: '' },
  { name: '墨蛇', series: '灵蛇', stars: 3, atk: 3200, def: 3200, skill: '墨蛇潜渊', icon: '🐍', img: '' },
  
  // 虎类神兽
  { name: '白虎', series: '神虎', stars: 5, atk: 4400, def: 4600, skill: '白虎啸林', icon: '🐅', img: '' },
  { name: '黑虎', series: '神虎', stars: 4, atk: 4200, def: 4000, skill: '黑虎掏心', icon: '🐅', img: '' },
  { name: '赤虎', series: '神虎', stars: 4, atk: 4300, def: 3800, skill: '赤虎奔火', icon: '🐅', img: '' },
  { name: '剑齿虎', series: '神虎', stars: 4, atk: 4100, def: 3900, skill: '剑齿猎杀', icon: '🗡️', img: '' },
  
  // 狼类神兽
  { name: '白狼', series: '神狼', stars: 4, atk: 4000, def: 3600, skill: '白狼啸月', icon: '🐺', img: '' },
  { name: '苍狼', series: '神狼', stars: 4, atk: 3900, def: 3500, skill: '苍狼逐日', icon: '🐺', img: '' },
  { name: '银狼', series: '神狼', stars: 4, atk: 4100, def: 3700, skill: '银狼破阵', icon: '🐺', img: '' },
  { name: '金狼', series: '神狼', stars: 3, atk: 3800, def: 3400, skill: '金狼锋爪', icon: '🐺', img: '' },
  
  // 其他神兽
  { name: '当康', series: '祥兽', stars: 3, atk: 2800, def: 3300, skill: '当康献瑞', icon: '🐗', img: '' },
  { name: '一角兽', series: '祥兽', stars: 4, atk: 3600, def: 3800, skill: '一角冲天', icon: '🦏', img: '' },
  { name: '天狗', series: '祥兽', stars: 3, atk: 3400, def: 3000, skill: '天狗食月', icon: '🐕', img: '' },
  { name: '飞鼠', series: '祥兽', stars: 2, atk: 2200, def: 2800, skill: '飞鼠滑翔', icon: '🐿️', img: '' },
  { name: '耳鼠', series: '祥兽', stars: 2, atk: 2000, def: 2700, skill: '耳鼠乘风', icon: '🐭', img: '' },
  { name: '乘黄', series: '祥兽', stars: 4, atk: 3700, def: 3900, skill: '乘黄飞升', icon: '🐎', img: '' },
  { name: '吉量', series: '祥兽', stars: 3, atk: 3200, def: 3500, skill: '吉量腾云', icon: '🐎', img: '' },
  { name: '驺虞', series: '祥兽', stars: 4, atk: 3500, def: 4000, skill: '驺虞仁德', icon: '🐅', img: '' },
  { name: '白兕', series: '祥兽', stars: 4, atk: 3800, def: 4200, skill: '白兕镇邪', icon: '🐂', img: '' },
  { name: '祸斗', series: '祥兽', stars: 4, atk: 4200, def: 3600, skill: '祸斗焚灾', icon: '🔥', img: '' },
  
  // 更多龙族
  { name: '龟龙', series: '龙族', stars: 4, atk: 3500, def: 4200, skill: '龟龙吸水', icon: '🐢', img: '' },
  { name: '肠龙', series: '龙族', stars: 3, atk: 3000, def: 3600, skill: '肠龙盘山', icon: '🐉', img: '' },
  { name: '鸣蛇', series: '龙族', stars: 3, atk: 3300, def: 2900, skill: '鸣蛇振翼', icon: '🐍', img: '' },
  { name: '化蛇', series: '龙族', stars: 3, atk: 3200, def: 3100, skill: '化蛇鸣泣', icon: '🐍', img: '' },
  { name: '腾蛇', series: '龙族', stars: 4, atk: 3700, def: 3500, skill: '腾蛇驾雾', icon: '🐍', img: '' },
  { name: '飞龙', series: '龙族', stars: 4, atk: 4000, def: 3700, skill: '飞龙在天', icon: '🐉', img: '' },
  { name: '鱼龙', series: '龙族', stars: 3, atk: 3400, def: 3200, skill: '鱼龙化龙', icon: '🐉', img: '' },
  { name: '玉龙', series: '龙族', stars: 4, atk: 3900, def: 4000, skill: '玉龙出海', icon: '💎', img: '' },
  { name: '苍龙', series: '龙族', stars: 5, atk: 4600, def: 4500, skill: '苍龙七宿', icon: '🐉', img: '' },
  { name: '火龙', series: '龙族', stars: 4, atk: 4200, def: 3700, skill: '火龙吐息', icon: '🔥', img: '' },
  
  // 神鹰
  { name: '金翅大鹏', series: '神鹰', stars: 5, atk: 4500, def: 4200, skill: '鹏程万里', icon: '🦅', img: '' },
  { name: '苍鹰', series: '神鹰', stars: 4, atk: 3800, def: 3600, skill: '鹰击长空', icon: '🦅', img: '' },
  { name: '白头鹰', series: '神鹰', stars: 3, atk: 3400, def: 3300, skill: '白头锐目光', icon: '🦅', img: '' },
  { name: '黑鸢', series: '神鹰', stars: 3, atk: 3200, def: 3100, skill: '鸢旋九天', icon: '🦅', img: '' },
  { name: '鹞鹰', series: '神鹰', stars: 3, atk: 3300, def: 3000, skill: '鹞鹰翻身', icon: '🦅', img: '' },
  
  // 神猿
  { name: '通臂猿猴', series: '神猿', stars: 4, atk: 3800, def: 3600, skill: '通臂慧拳', icon: '🐒', img: '' },
  { name: '六耳猕猴', series: '神猿', stars: 5, atk: 4300, def: 4000, skill: '六耳聆听', icon: '🐒', img: '' },
  { name: '赤尻马猴', series: '神猿', stars: 4, atk: 3700, def: 3800, skill: '马猴灵动', icon: '🐒', img: '' },
  { name: '白猿', series: '神猿', stars: 3, atk: 3200, def: 3400, skill: '白猿献桃', icon: '🐒', img: '' },
  { name: '黑猿', series: '神猿', stars: 3, atk: 3300, def: 3200, skill: '黑猿攀崖', icon: '🐒', img: '' },
  
  // 更多瑞兽
  { name: '鹿蜀', series: '瑞兽', stars: 3, atk: 2900, def: 3300, skill: '鹿蜀招福', icon: '🦌', img: '' },
  { name: '类', series: '瑞兽', stars: 3, atk: 2800, def: 3200, skill: '类自舞', icon: '🦌', img: '' },
  { name: '玕琪', series: '瑞兽', stars: 4, atk: 3500, def: 3700, skill: '玕琪献瑞', icon: '🦌', img: '' },
  { name: '熊渠', series: '瑞兽', stars: 3, atk: 3100, def: 3400, skill: '熊渠健壮', icon: '🐻', img: '' },
  { name: '雍和', series: '瑞兽', stars: 3, atk: 3000, def: 3200, skill: '雍和吉祥', icon: '🦌', img: '' },
  { name: '悉蜚', series: '瑞兽', stars: 3, atk: 2800, def: 3500, skill: '悉蜚清水', icon: '🐮', img: '' },
  { name: '狡', series: '瑞兽', stars: 4, atk: 3600, def: 3800, skill: '狡出玉英', icon: '🦊', img: '' },
  { name: '酸与', series: '瑞兽', stars: 3, atk: 3200, def: 3000, skill: '酸与鸣泰', icon: '🐍', img: '' },
  { name: '朏朏', series: '瑞兽', stars: 2, atk: 2400, def: 2900, skill: '朏朏解忧', icon: '🐱', img: '' },
  { name: '灌灌', series: '瑞兽', stars: 2, atk: 2500, def: 2800, skill: '灌灌防伪', icon: '🐦', img: '' },
  { name: '帝江', series: '瑞兽', stars: 5, atk: 4000, def: 4200, skill: '帝江混沌', icon: '⚫', img: '' },
  { name: '灭蒙鸟', series: '瑞兽', stars: 3, atk: 3100, def: 3300, skill: '灭蒙翔空', icon: '🦅', img: '' },
  { name: '蛮蛮', series: '瑞兽', stars: 3, atk: 3000, def: 3200, skill: '蛮蛮比翼', icon: '🐦', img: '' },
  { name: '漓蝣', series: '瑞兽', stars: 2, atk: 2200, def: 2700, skill: '漓蝣吐珠', icon: '🦋', img: '' },
  { name: '嗜 살', series: '瑞兽', stars: 2, atk: 2300, def: 2600, skill: '嗜살延年', icon: '🦌', img: '' },
  { name: '文茎', series: '瑞兽', stars: 2, atk: 2100, def: 2500, skill: '文茎结果', icon: '🌳', img: '' },
  
  // 继续神兽
  { name: '开明兽', series: '神兽', stars: 5, atk: 4700, def: 4600, skill: '开明神视', icon: '🦁', img: '' },
  { name: '陆吾', series: '神兽', stars: 5, atk: 4500, def: 4700, skill: '陆吾司天', icon: '🐅', img: '' },
  { name: '英招', series: '神兽', stars: 4, atk: 4000, def: 4200, skill: '英招巡天', icon: '🦅', img: '' },
  { name: '计蒙', series: '神兽', stars: 4, atk: 3900, def: 4100, skill: '计蒙行雨', icon: '🐉', img: '' },
  { name: '耕父', series: '神兽', stars: 3, atk: 3200, def: 3400, skill: '耕父清渴', icon: '👨', img: '' },
  { name: '女丑', series: '神兽', stars: 3, atk: 3100, def: 3300, skill: '女丑庇暑', icon: '👩', img: '' },
  { name: '尸鲮', series: '神兽', stars: 3, atk: 3000, def: 3200, skill: '尸鲮持刀', icon: '🦎', img: '' },
  { name: '吁咽', series: '神兽', stars: 3, atk: 2900, def: 3100, skill: '吁咽入梦', icon: '👤', img: '' },
  { name: '于 Wax', series: '神兽', stars: 4, atk: 3700, def: 3900, skill: '于 Wax 守夜', icon: '🦁', img: '' },
  { name: '泰逢', series: '神兽', stars: 4, atk: 3800, def: 4000, skill: '泰逢兴云', icon: '🌟', img: '' },
  { name: '熏池', series: '神兽', stars: 3, atk: 3300, def: 3500, skill: '熏池降雨', icon: '💧', img: '' },
  { name: '武罗', series: '神兽', stars: 4, atk: 3600, def: 3800, skill: '武罗司神', icon: '👩', img: '' },
  { name: '帝俊', series: '神兽', stars: 5, atk: 4800, def: 4600, skill: '帝俊统天', icon: '👑', img: '' },
  { name: '颛顼', series: '神兽', stars: 5, atk: 4700, def: 4800, skill: '颛顼北帝', icon: '❄️', img: '' },
  { name: '帝喾', series: '神兽', stars: 5, atk: 4600, def: 4700, skill: '帝喾仁德', icon: '👑', img: '' },
  { name: '尧', series: '神兽', stars: 5, atk: 4500, def: 4800, skill: '尧舜禅让', icon: '👑', img: '' },
  { name: '舜', series: '神兽', stars: 5, atk: 4400, def: 4900, skill: '舜德服人', icon: '👑', img: '' },
  { name: '禹', series: '神兽', stars: 5, atk: 4700, def: 5000, skill: '禹王治水', icon: '👑', img: '' },
];

// 山海经卡牌数据 - 凶兽篇 (~200张)
const FIERCE_BEASTS = [
  // 四凶
  { name: '穷奇', series: '四凶', stars: 5, atk: 4800, def: 4200, skill: '穷凶极恶', icon: '👹', img: '' },
  { name: '梼杌', series: '四凶', stars: 5, atk: 4700, def: 4400, skill: '顽凶难驯', icon: '🦁', img: '' },
  { name: '饕餮', series: '四凶', stars: 5, atk: 5000, def: 4000, skill: '吞噬天地', icon: '🦴', img: '' },
  { name: '混沌', series: '四凶', stars: 5, atk: 4900, def: 4300, skill: '混沌虚无', icon: '⚫', img: '' },
  
  // 凶兽
  { name: '九婴', series: '凶兽', stars: 5, atk: 4700, def: 4400, skill: '九头同鸣', icon: '🐍', img: '' },
  { name: '相柳', series: '凶兽', stars: 5, atk: 4800, def: 4600, skill: '九蛇缠身', icon: '🐍', img: '' },
  { name: '凿齿', series: '凶兽', stars: 4, atk: 4200, def: 3800, skill: '凿齿断命', icon: '🦷', img: '' },
  { name: '九凤', series: '凶兽', stars: 5, atk: 4600, def: 4300, skill: '九凤鸣冤', icon: '🦅', img: '' },
  { name: '封狶', series: '凶兽', stars: 4, atk: 4000, def: 4200, skill: '封狶拱地', icon: '🐗', img: '' },
  { name: '修蛇', series: '凶兽', stars: 4, atk: 4300, def: 3900, skill: '修蛇吞象', icon: '🐍', img: '' },
  { name: '大风', series: '凶兽', stars: 4, atk: 4100, def: 3700, skill: '大风毁屋', icon: '🦅', img: '' },
  { name: '猰貐', series: '凶兽', stars: 5, atk: 4500, def: 4300, skill: '猰貐噬人', icon: '👹', img: '' },
  { name: '窫窳', series: '凶兽', stars: 4, atk: 4200, def: 4000, skill: '窫窳龙首', icon: '🐉', img: '' },
  { name: '朱厌', series: '凶兽', stars: 4, atk: 4400, def: 3600, skill: '朱厌兵祸', icon: '🐒', img: '' },
  { name: '肥遗', series: '凶兽', stars: 3, atk: 3500, def: 3200, skill: '肥遗旱灾', icon: '🐍', img: '' },
  { name: '蛊雕', series: '凶兽', stars: 4, atk: 4000, def: 3700, skill: '蛊雕迷心', icon: '🦅', img: '' },
  { name: '举父', series: '凶兽', stars: 3, atk: 3400, def: 3300, skill: '举父投石', icon: '🐒', img: '' },
  { name: '狸力', series: '凶兽', stars: 3, atk: 3200, def: 3400, skill: '狸力挖土', icon: '🐷', img: '' },
  { name: '鵸䳆', series: '凶兽', stars: 4, atk: 3900, def: 3600, skill: '鵸䳆三尾', icon: '🦅', img: '' },
  { name: '讙', series: '凶兽', stars: 3, atk: 3300, def: 3100, skill: '讙目单羽', icon: '🦅', img: '' },
  { name: '獙獙', series: '凶兽', stars: 3, atk: 3200, def: 3000, skill: '獙獙狐吟', icon: '🦊', img: '' },
  { name: '朱獳', series: '凶兽', stars: 3, atk: 3100, def: 2900, skill: '朱獳惊扰', icon: '🦊', img: '' },
  { name: '峳峳', series: '凶兽', stars: 4, atk: 3700, def: 3500, skill: '峳峳音绕', icon: '🐴', img: '' },
  
  // 更多凶兽
  { name: '狍鸮', series: '凶兽', stars: 5, atk: 4600, def: 4100, skill: '狍鸮食人', icon: '👹', img: '' },
  { name: '梼杌', series: '凶兽', stars: 4, atk: 4300, def: 4000, skill: '梼杌顽凶', icon: '🦁', img: '' },
  { name: '傲因', series: '凶兽', stars: 4, atk: 4000, def: 3800, skill: '傲因阴险', icon: '🐺', img: '' },
  { name: '罴', series: '凶兽', stars: 4, atk: 4100, def: 4000, skill: '罴猛击', icon: '🐻', img: '' },
  { name: '猛豹', series: '凶兽', stars: 4, atk: 4200, def: 3700, skill: '猛豹疾风', icon: '🐆', img: '' },
  { name: '讼枪', series: '凶兽', stars: 3, atk: 3500, def: 3300, skill: '讼枪鸣冤', icon: '🦅', img: '' },
  { name: '寓虫', series: '凶兽', stars: 3, atk: 3300, def: 3100, skill: '寓虫附身', icon: '🐛', img: '' },
  { name: '蛫', series: '凶兽', stars: 3, atk: 3200, def: 3400, skill: '蛫守梁上', icon: '🦀', img: '' },
  { name: '窃衣', series: '凶兽', stars: 2, atk: 2800, def: 2600, skill: '窃衣盗香', icon: '🦊', img: '' },
  { name: '山犭军', series: '凶兽', stars: 3, atk: 3100, def: 2900, skill: '山犭军狡', icon: '🐕', img: '' },
  { name: '犰狳', series: '凶兽', stars: 3, atk: 3000, def: 3200, skill: '犰狳见兵', icon: '🦔', img: '' },
  { name: '赤鲬', series: '凶兽', stars: 2, atk: 2600, def: 2800, skill: '赤鲬鱼怒', icon: '🐟', img: '' },
  { name: '鮯鱼', series: '凶兽', stars: 2, atk: 2700, def: 2600, skill: '鮯鱼飞跃', icon: '🐟', img: '' },
  { name: 'lu', series: '凶兽', stars: 3, atk: 3200, def: 3000, skill: 'lu鱼迷途', icon: '🐟', img: '' },
  { name: '薄鱼', series: '凶兽', stars: 2, atk: 2500, def: 2700, skill: '薄鱼反顾', icon: '🐟', img: '' },
  { name: '鲭鲪', series: '凶兽', stars: 2, atk: 2400, def: 2600, skill: '鲭鲪单目', icon: '🐟', img: '' },
  { name: '化蛇', series: '凶兽', stars: 4, atk: 3900, def: 3600, skill: '化蛇鸣如', icon: '🐍', img: '' },
  { name: '鸣蛇', series: '凶兽', stars: 4, atk: 4000, def: 3500, skill: '鸣蛇四翼', icon: '🐍', img: '' },
  { name: '玄龟', series: '凶兽', stars: 4, atk: 3500, def: 4200, skill: '玄龟浊水', icon: '🐢', img: '' },
  { name: '虎蛟', series: '凶兽', stars: 4, atk: 4200, def: 3900, skill: '虎蛟鱼尾', icon: '🐉', img: '' },
  
  // 继续凶兽
  { name: '耳鼠', series: '凶兽', stars: 2, atk: 2200, def: 2800, skill: '耳鼠毒尾', icon: '🐭', img: '' },
  { name: '飞鼠', series: '凶兽', stars: 3, atk: 2800, def: 2600, skill: '飞鼠噬人', icon: '🐿️', img: '' },
  { name: '玄鸟', series: '凶兽', stars: 3, atk: 3000, def: 2800, skill: '玄鸟凶兆', icon: '🦅', img: '' },
  { name: '鹦鹉', series: '凶兽', stars: 2, atk: 2400, def: 2600, skill: '鹦鹉能言', icon: '🦜', img: '' },
  { name: '器器', series: '凶兽', stars: 3, atk: 3100, def: 2900, skill: '器器两首', icon: '🐍', img: '' },
  { name: '三足乌', series: '凶兽', stars: 4, atk: 3900, def: 3600, skill: '三足乌凶', icon: '🦅', img: '' },
  { name: '酸与', series: '凶兽', stars: 4, atk: 3800, def: 3500, skill: '酸与见则', icon: '🐍', img: '' },
  { name: '梁渠', series: '凶兽', stars: 4, atk: 3700, def: 3400, skill: '梁渠无爪', icon: '🐕', img: '' },
  { name: '闻獜', series: '凶兽', stars: 4, atk: 4000, def: 3700, skill: '闻獜犬吠', icon: '🐕', img: '' },
  { name: '诸怀', series: '凶兽', stars: 4, atk: 4100, def: 3800, skill: '诸怀鱼首', icon: '🦌', img: '' },
  { name: '鮨鱼', series: '凶兽', stars: 3, atk: 2900, def: 2700, skill: '鮨鱼首虫', icon: '🐟', img: '' },
  { name: '颙', series: '凶兽', stars: 4, atk: 3800, def: 3500, skill: '颙首人身', icon: '🦅', img: '' },
  { name: '孛孛', series: '凶兽', stars: 3, atk: 3200, def: 3000, skill: '孛孛似鸡', icon: '🐔', img: '' },
  { name: '跂踵', series: '凶兽', stars: 3, atk: 3100, def: 2900, skill: '跂踵反踵', icon: '🦶', img: '' },
  { name: '雇burgh', series: '凶兽', stars: 2, atk: 2500, def: 2700, skill: '雇burgh似鸦', icon: '🦅', img: '' },
  { name: '鹧鸪', series: '凶兽', stars: 2, atk: 2400, def: 2600, skill: '鹧鸪食人', icon: '🐔', img: '' },
  { name: '鸓', series: '凶兽', stars: 3, atk: 3000, def: 2800, skill: '鸓似鹑', icon: '🦅', img: '' },
  { name: '鹅鸼', series: '凶兽', stars: 3, atk: 3100, def: 2900, skill: '鹅鸼鸟首', icon: '🦅', img: '' },
  { name: '鷩', series: '凶兽', stars: 3, atk: 3200, def: 3000, skill: '鷩似雉', icon: '🦅', img: '' },
  { name: '当扈', series: '凶兽', stars: 2, atk: 2600, def: 2800, skill: '当扈似雉', icon: '🦅', img: '' },
  
  // 更多凶兽
  { name: '白鹤', series: '凶兽', stars: 3, atk: 2900, def: 3000, skill: '白鹤凶兆', icon: '🦅', img: '' },
  { name: '颙鸟', series: '凶兽', stars: 4, atk: 3800, def: 3400, skill: '颙鸟人首', icon: '🦅', img: '' },
  { name: '瞿如', series: '凶兽', stars: 3, atk: 3100, def: 2900, skill: '瞿如白首', icon: '🦅', img: '' },
  { name: '孰湖', series: '凶兽', stars: 4, atk: 3700, def: 3500, skill: '孰湖马身', icon: '🐴', img: '' },
  { name: '驳', series: '凶兽', stars: 4, atk: 4000, def: 3800, skill: '驳食虎豹', icon: '🐴', img: '' },
  { name: '土蝼', series: '凶兽', stars: 4, atk: 3900, def: 4000, skill: '土蝼羊角', icon: '🐏', img: '' },
  { name: '天鹿', series: '凶兽', stars: 4, atk: 4100, def: 3900, skill: '天鹿能武', icon: '🦌', img: '' },
  { name: '彳彴', series: '凶兽', stars: 3, atk: 3300, def: 3100, skill: '彳彴人足', icon: '🦵', img: '' },
  { name: '鹿蜀', series: '凶兽', stars: 3, atk: 3200, def: 3400, skill: '鹿蜀凶纹', icon: '🦌', img: '' },
  { name: '类', series: '凶兽', stars: 3, atk: 3100, def: 3200, skill: '类自相食', icon: '🦌', img: '' },
  { name: '猼訑', series: '凶兽', stars: 4, atk: 3800, def: 3600, skill: '猼訑十尾', icon: '🦌', img: '' },
  { name: '九尾狐', series: '凶兽', stars: 5, atk: 4200, def: 4000, skill: '九尾妖狐', icon: '🦊', img: '' },
  { name: '狡', series: '凶兽', stars: 4, atk: 3900, def: 3700, skill: '狡狡多疑', icon: '🦊', img: '' },
  { name: '胜遇', series: '凶兽', stars: 3, atk: 3300, def: 3100, skill: '胜遇鱼身', icon: '🐟', img: '' },
  { name: '孰湖', series: '凶兽', stars: 4, atk: 4000, def: 3600, skill: '孰湖鵕嘴', icon: '🦅', img: '' },
  { name: '耕父', series: '凶兽', stars: 3, atk: 3200, def: 3000, skill: '耕父旱鬼', icon: '👤', img: '' },
  { name: '天吴', series: '凶兽', stars: 5, atk: 4500, def: 4200, skill: '天吴八首', icon: '👹', img: '' },
  { name: '毛犊', series: '凶兽', stars: 4, atk: 3900, def: 3700, skill: '毛犊玄豹', icon: '🐆', img: '' },
  { name: '羽嘉', series: '凶兽', stars: 4, atk: 3800, def: 3600, skill: '羽嘉生毛', icon: '🦅', img: '' },
  { name: '蚊龙', series: '凶兽', stars: 4, atk: 4200, def: 3900, skill: '蚊龙无角', icon: '🐉', img: '' },
  
  // 更多四凶相关
  { name: '穷奇', series: '凶兽', stars: 5, atk: 4800, def: 4300, skill: '穷奇翼虎', icon: '🐅', img: '' },
  { name: '梼杌', series: '凶兽', stars: 5, atk: 4700, def: 4500, skill: '梼杌傲狠', icon: '🦁', img: '' },
  { name: '浑敦', series: '凶兽', stars: 4, atk: 4400, def: 4000, skill: '浑敦无面', icon: '⚫', img: '' },
  { name: '饕餮', series: '凶兽', stars: 5, atk: 4900, def: 4100, skill: '饕餮贪食', icon: '🦴', img: '' },
  
  // 其他凶兽
  { name: '狍鸮', series: '凶兽', stars: 5, atk: 4600, def: 4200, skill: '狍鸮羊身', icon: '🐏', img: '' },
  { name: '马腹', series: '凶兽', stars: 4, atk: 4000, def: 3700, skill: '马腹人面', icon: '👤', img: '' },
  { name: '夫诸', series: '凶兽', stars: 4, atk: 3900, def: 4000, skill: '夫诸四角', icon: '🦌', img: '' },
  { name: '何罗鱼', series: '凶兽', stars: 3, atk: 3400, def: 3100, skill: '何罗一首', icon: '🐟', img: '' },
  { name: '鳛鳛鱼', series: '凶兽', stars: 3, atk: 3200, def: 3300, skill: '鳛鳛鼠身', icon: '🐟', img: '' },
  { name: '文鳐鱼', series: '凶兽', stars: 3, atk: 3100, def: 3000, skill: '文鳐吉鸟', icon: '🐟', img: '' },
  { name: '鲔鱼', series: '凶兽', stars: 4, atk: 3700, def: 3500, skill: '鲔鱼如鲤', icon: '🐟', img: '' },
  { name: '鲔', series: '凶兽', stars: 3, atk: 3300, def: 3400, skill: '鲔如鲟鱼', icon: '🐟', img: '' },
  { name: '鳣鱼', series: '凶兽', stars: 4, atk: 3800, def: 3600, skill: '鳣鱼黄首', icon: '🐟', img: '' },
  { name: '飞鱼', series: '凶兽', stars: 3, atk: 3200, def: 3000, skill: '飞鱼如豚', icon: '🐟', img: '' },
  { name: '赤鲬', series: '凶兽', stars: 2, atk: 2600, def: 2800, skill: '赤鲬如鲋', icon: '🐟', img: '' },
  { name: '箴鱼', series: '凶兽', stars: 2, atk: 2500, def: 2700, skill: '箴鱼同衔', icon: '🐟', img: '' },
  { name: '鮨鱼', series: '凶兽', stars: 3, atk: 2900, def: 2800, skill: '鮨鱼如犬', icon: '🐕', img: '' },
  { name: '鮭鱼', series: '凶兽', stars: 3, atk: 3000, def: 2900, skill: '鮭鱼如魮', icon: '🐟', img: '' },
  { name: '何罗鱼', series: '凶兽', stars: 4, atk: 3600, def: 3400, skill: '何罗十身', icon: '🐟', img: '' },
  
  // 继续凶兽
  { name: '薄鱼', series: '凶兽', stars: 2, atk: 2400, def: 2600, skill: '薄鱼一目', icon: '🐟', img: '' },
  { name: '鳛鳛', series: '凶兽', stars: 3, atk: 3100, def: 3000, skill: '鳛鳛如鳜', icon: '🐟', img: '' },
  { name: '珠鳖鱼', series: '凶兽', stars: 3, atk: 2900, def: 3200, skill: '珠鳖龟背', icon: '🐢', img: '' },
  { name: '文鳐', series: '凶兽', stars: 3, atk: 3000, def: 2800, skill: '文鳐五足', icon: '🐟', img: '' },
  { name: '赢鱼', series: '凶兽', stars: 3, atk: 3100, def: 2900, skill: '赢鱼鸟翼', icon: '🐟', img: '' },
  { name: '鱿鱼', series: '凶兽', stars: 2, atk: 2500, def: 2700, skill: '鱿鱼蛇首', icon: '🐍', img: '' },
  { name: '鮯鱼', series: '凶兽', stars: 2, atk: 2400, def: 2600, skill: '鮯鱼鼠目', icon: '🐟', img: '' },
  { name: '魼鱼', series: '凶兽', stars: 3, atk: 2800, def: 3000, skill: '魼鱼如鳝', icon: '🐟', img: '' },
  { name: '鮨鱼', series: '凶兽', stars: 3, atk: 2900, def: 2800, skill: '鮨鱼如狗', icon: '🐕', img: '' },
  { name: '鱲鱼', series: '凶兽', stars: 2, atk: 2300, def: 2600, skill: '鱲鱼如鲤', icon: '🐟', img: '' },
  
  // 更多凶兽
  { name: '簕鱼', series: '凶兽', stars: 3, atk: 3000, def: 2800, skill: '簕鱼三脊', icon: '🐟', img: '' },
  { name: '玉鱼', series: '凶兽', stars: 4, atk: 3500, def: 3700, skill: '玉鱼冰清', icon: '💎', img: '' },
  { name: '鳟鱼', series: '凶兽', stars: 2, atk: 2600, def: 2500, skill: '鳟鱼金鳞', icon: '🐟', img: '' },
  { name: '鳜鱼', series: '凶兽', stars: 3, atk: 3100, def: 2900, skill: '鳜鱼桂身', icon: '🐟', img: '' },
  { name: '鱖鱼', series: '凶兽', stars: 3, atk: 3200, def: 3000, skill: '鱖鱼蒜鼻', icon: '🐟', img: '' },
  { name: '魥鱼', series: '凶兽', stars: 2, atk: 2500, def: 2400, skill: '魥鱼皮黄', icon: '🐟', img: '' },
  { name: '修辟鱼', series: '凶兽', stars: 3, atk: 2900, def: 3100, skill: '修辟如黾', icon: '🐟', img: '' },
  { name: '刀鱼', series: '凶兽', stars: 2, atk: 2400, def: 2300, skill: '刀鱼如鲦', icon: '🐟', img: '' },
  { name: '河豚', series: '凶兽', stars: 3, atk: 2800, def: 3200, skill: '河豚毒身', icon: '🐡', img: '' },
  { name: '海鳗', series: '凶兽', stars: 4, atk: 3600, def: 3300, skill: '海鳗凶猛', icon: '🐟', img: '' },
  
  // 继续凶兽列表
  { name: '蛊雕', series: '凶兽', stars: 4, atk: 4000, def: 3700, skill: '蛊雕如雕', icon: '🦅', img: '' },
  { name: '鹿蜀', series: '凶兽', stars: 3, atk: 3100, def: 3300, skill: '鹿蜀如马', icon: '🦌', img: '' },
  { name: '寓', series: '凶兽', stars: 3, atk: 3000, def: 2900, skill: '寓如鼠', icon: '🐭', img: '' },
  { name: '的双', series: '凶兽', stars: 4, atk: 3700, def: 3500, skill: '的双似狸', icon: '🦊', img: '' },
  { name: '幽鸩', series: '凶兽', stars: 4, atk: 3800, def: 3600, skill: '幽鸩如岛', icon: '🦅', img: '' },
  { name: '鸮', series: '凶兽', stars: 3, atk: 3200, def: 3000, skill: '鸮如鸱', icon: '🦅', img: '' },
  { name: '颙', series: '凶兽', stars: 4, atk: 3900, def: 3500, skill: '颙如枭', icon: '🦅', img: '' },
  { name: '寔', series: '凶兽', stars: 3, atk: 3000, def: 2800, skill: '寔如雕', icon: '🦅', img: '' },
  { name: '罗罗', series: '凶兽', stars: 4, atk: 3800, def: 3600, skill: '罗罗似鸱', icon: '🦅', img: '' },
  { name: '鸓', series: '凶兽', stars: 3, atk: 3100, def: 2900, skill: '鸓如鹑', icon: '🐔', img: '' },
  
  // 山海经怪物
  { name: '刑天', series: '凶兽', stars: 5, atk: 4500, def: 4200, skill: '刑天断首', icon: '⚔️', img: '' },
  { name: '蚩尤', series: '凶兽', stars: 5, atk: 4700, def: 4500, skill: '蚩尤战魂', icon: '👹', img: '' },
  { name: '共工', series: '凶兽', stars: 5, atk: 4600, def: 4400, skill: '共工怒触', icon: '💧', img: '' },
  { name: '祝融', series: '凶兽', stars: 5, atk: 4800, def: 4200, skill: '祝融火神', icon: '🔥', img: '' },
  { name: '水神', series: '凶兽', stars: 4, atk: 4100, def: 4300, skill: '水神共工', icon: '💧', img: '' },
  { name: '火神', series: '凶兽', stars: 4, atk: 4200, def: 4000, skill: '火神祝融', icon: '🔥', img: '' },
  { name: '风神', series: '凶兽', stars: 4, atk: 4000, def: 3800, skill: '风神飞廉', icon: '💨', img: '' },
  { name: '雨师', series: '凶兽', stars: 4, atk: 3900, def: 4000, skill: '雨师屏翳', icon: '🌧️', img: '' },
  { name: '旱神', series: '凶兽', stars: 4, atk: 4100, def: 3900, skill: '旱神女魃', icon: '☀️', img: '' },
  { name: '瘟神', series: '凶兽', stars: 4, atk: 4000, def: 3700, skill: '瘟神五厉', icon: '🦠', img: '' },
  { name: '瘟神', series: '凶兽', stars: 5, atk: 4500, def: 4200, skill: '瘟神吕瘟', icon: '🦠', img: '' },
  { name: '刑神', series: '凶兽', stars: 4, atk: 4200, def: 4000, skill: '刑神祖状', icon: '⚔️', img: '' },
  { name: '战神', series: '凶兽', stars: 5, atk: 4600, def: 4300, skill: '战神蚩尤', icon: '⚔️', img: '' },
  { name: '恶来', series: '凶兽', stars: 4, atk: 4300, def: 3800, skill: '恶来虎贲', icon: '👹', img: '' },
  { name: '飞廉', series: '凶兽', stars: 4, atk: 4200, def: 4000, skill: '飞廉风伯', icon: '💨', img: '' },
  { name: '屏翳', series: '凶兽', stars: 4, atk: 4000, def: 4100, skill: '屏翳雨师', icon: '🌧️', img: '' },
  { name: '夸父', series: '凶兽', stars: 5, atk: 4500, def: 4300, skill: '夸父逐日', icon: '👤', img: '' },
  { name: '精卫', series: '凶兽', stars: 3, atk: 3400, def: 3200, skill: '精卫填海', icon: '🐦', img: '' },
  { name: '贰负', series: '凶兽', stars: 4, atk: 4000, def: 3800, skill: '贰负杀窫', icon: '👹', img: '' },
  { name: '危', series: '凶兽', stars: 4, atk: 3900, def: 3600, skill: '危贰负臣', icon: '👤', img: '' },
  
  // 更多凶兽
  { name: '窫窳', series: '凶兽', stars: 5, atk: 4400, def: 4200, skill: '窫窳龙首', icon: '🐉', img: '' },
  { name: '烛阴', series: '凶兽', stars: 5, atk: 4700, def: 4500, skill: '烛阴神龙', icon: '🐉', img: '' },
  { name: '烛九阴', series: '凶兽', stars: 5, atk: 4800, def: 4600, skill: '九阴极寒', icon: '❄️', img: '' },
  { name: '钟山神', series: '凶兽', stars: 4, atk: 4200, def: 4400, skill: '钟山人面', icon: '👤', img: '' },
  { name: '熏池', series: '凶兽', stars: 3, atk: 3400, def: 3500, skill: '熏池降雨', icon: '🌧️', img: '' },
  { name: '泰逢', series: '凶兽', stars: 4, atk: 3900, def: 4000, skill: '泰逢兴云', icon: '☁️', img: '' },
  { name: '和山神', series: '凶兽', stars: 4, atk: 3800, def: 3900, skill: '和山吉神', icon: '👼', img: '' },
  { name: '骄虫', series: '凶兽', stars: 3, atk: 3200, def: 3000, skill: '骄虫螫人', icon: '🐛', img: '' },
  { name: '屏蓬', series: '凶兽', stars: 4, atk: 3700, def: 3600, skill: '屏蓬两头', icon: '🐗', img: '' },
  { name: '南北', series: '凶兽', stars: 3, atk: 3100, def: 2900, skill: '南北如犬', icon: '🐕', img: '' },
  { name: '闻獜', series: '凶兽', stars: 4, atk: 3900, def: 3700, skill: '闻獜犬吠', icon: '🐕', img: '' },
  { name: '居孽', series: '凶兽', stars: 3, atk: 3000, def: 2800, skill: '居孽如牛', icon: '🐂', img: '' },
  { name: '闻獜', series: '凶兽', stars: 4, atk: 4000, def: 3800, skill: '闻獜善鸣', icon: '🐕', img: '' },
  { name: '那诸', series: '凶兽', stars: 3, atk: 3200, def: 3000, skill: '那诸如菟', icon: '🐰', img: '' },
  { name: '闻獜', series: '凶兽', stars: 4, atk: 3900, def: 3700, skill: '闻獜如狐', icon: '🦊', img: '' },
  
  // 继续凶兽
  { name: '合窳', series: '凶兽', stars: 4, atk: 4000, def: 3800, skill: '合窳人面', icon: '👤', img: '' },
  { name: '山魈', series: '凶兽', stars: 4, atk: 4100, def: 3900, skill: '山魈独足', icon: '🐒', img: '' },
  { name: '山都', series: '凶兽', stars: 3, atk: 3300, def: 3100, skill: '山都木客', icon: '👤', img: '' },
  { name: '木客', series: '凶兽', stars: 3, atk: 3200, def: 3000, skill: '木客幽魂', icon: '👤', img: '' },
  { name: '山鬼', series: '凶兽', stars: 4, atk: 3800, def: 3600, skill: '山鬼多情', icon: '👻', img: '' },
  { name: '水鬼', series: '凶兽', stars: 3, atk: 3400, def: 3500, skill: '水鬼溺人', icon: '👻', img: '' },
  { name: '旱鬼', series: '凶兽', stars: 3, atk: 3300, def: 3200, skill: '旱鬼致旱', icon: '☀️', img: '' },
  { name: '火鬼', series: '凶兽', stars: 4, atk: 4000, def: 3400, skill: '火鬼焚身', icon: '🔥', img: '' },
  { name: '瘟鬼', series: '凶兽', stars: 4, atk: 3900, def: 3600, skill: '瘟鬼散疫', icon: '🦠', img: '' },
  { name: '煞鬼', series: '凶兽', stars: 4, atk: 4100, def: 3700, skill: '煞鬼索命', icon: '💀', img: '' },
  { name: '疫鬼', series: '凶兽', stars: 3, atk: 3600, def: 3300, skill: '疫鬼散病', icon: '🦠', img: '' },
  { name: '小儿鬼', series: '凶兽', stars: 2, atk: 2800, def: 2600, skill: '小儿鬼疟', icon: '👶', img: '' },
  { name: '面鬼', series: '凶兽', stars: 3, atk: 3100, def: 2900, skill: '面鬼食脑', icon: '💀', img: '' },
  { name: '大鬼', series: '凶兽', stars: 5, atk: 4500, def: 4200, skill: '大鬼威严', icon: '👹', img: '' },
  { name: '魍魉', series: '凶兽', stars: 4, atk: 4000, def: 3700, skill: '魍魉迷惑', icon: '👻', img: '' },
  { name: '魑魅', series: '凶兽', stars: 4, atk: 4100, def: 3800, skill: '魑魅魍魉', icon: '👹', img: '' },
  { name: '罔象', series: '凶兽', stars: 3, atk: 3400, def: 3300, skill: '罔象食脑', icon: '👻', img: '' },
  { name: '夔', series: '凶兽', stars: 5, atk: 4700, def: 4500, skill: '夔牛独足', icon: '🐂', img: '' },
  { name: '魍魍', series: '凶兽', stars: 3, atk: 3200, def: 3000, skill: '魍魍木石', icon: '🪨', img: '' },
  { name: '雷神', series: '凶兽', stars: 5, atk: 4800, def: 4400, skill: '雷神夔牛', icon: '⚡', img: '' },
];

// 山海经卡牌数据 - 神灵篇 (~100张)
const DIVINE_GODS = [
  // 三皇五帝
  { name: '盘古', series: '三皇', stars: 5, atk: 5000, def: 5000, skill: '开天辟地', icon: '👤', img: '' },
  { name: '女娲', series: '三皇', stars: 5, atk: 4800, def: 4900, skill: '炼石补天', icon: '👩', img: '' },
  { name: '伏羲', series: '三皇', stars: 5, atk: 4700, def: 4800, skill: '八卦创世', icon: '☯️', img: '' },
  { name: '神农', series: '三皇', stars: 5, atk: 4300, def: 4700, skill: '神农百草', icon: '🌿', img: '' },
  { name: '黄帝', series: '五帝', stars: 5, atk: 4800, def: 4700, skill: '黄帝轩辕', icon: '👑', img: '' },
  { name: '颛顼', series: '五帝', stars: 5, atk: 4600, def: 4800, skill: '颛顼北帝', icon: '❄️', img: '' },
  { name: '帝喾', series: '五帝', stars: 5, atk: 4500, def: 4700, skill: '帝喾俊德', icon: '👑', img: '' },
  { name: '尧', series: '五帝', stars: 5, atk: 4400, def: 4800, skill: '尧舜禅让', icon: '👑', img: '' },
  { name: '舜', series: '五帝', stars: 5, atk: 4300, def: 4900, skill: '舜德化民', icon: '👑', img: '' },
  { name: '禹', series: '五帝', stars: 5, atk: 4600, def: 5000, skill: '大禹治水', icon: '👑', img: '' },
  
  // 上古神明
  { name: '东皇太一', series: '天神', stars: 5, atk: 4900, def: 4800, skill: '太一东皇', icon: '☀️', img: '' },
  { name: '西王母', series: '天神', stars: 5, atk: 4700, def: 4900, skill: '瑶池金母', icon: '👩', img: '' },
  { name: '东王公', series: '天神', stars: 5, atk: 4800, def: 4700, skill: '扶桑大帝', icon: '👨', img: '' },
  { name: '帝俊', series: '天神', stars: 5, atk: 4900, def: 4800, skill: '帝俊天帝', icon: '👑', img: '' },
  { name: '常羲', series: '天神', stars: 5, atk: 4600, def: 4800, skill: '常羲生月', icon: '🌙', img: '' },
  { name: '浴月', series: '天神', stars: 5, atk: 4700, def: 4700, skill: '浴月曦和', icon: '☀️', img: '' },
  
  // 日月星辰
  { name: '太阳星君', series: '星辰', stars: 5, atk: 4800, def: 4600, skill: '太阳普照', icon: '☀️', img: '' },
  { name: '太阴星君', series: '星辰', stars: 5, atk: 4600, def: 4800, skill: '太阴清辉', icon: '🌙', img: '' },
  { name: '木德星君', series: '星辰', stars: 4, atk: 4200, def: 4400, skill: '木星岁功', icon: '🌳', img: '' },
  { name: '火德星君', series: '星辰', stars: 4, atk: 4400, def: 4000, skill: '火星荧惑', icon: '🔥', img: '' },
  { name: '土德星君', series: '星辰', stars: 4, atk: 4000, def: 4500, skill: '土星镇星', icon: '🪨', img: '' },
  { name: '金德星君', series: '星辰', stars: 4, atk: 4300, def: 4200, skill: '金星太白', icon: '⭐', img: '' },
  { name: '水德星君', series: '星辰', stars: 4, atk: 4000, def: 4300, skill: '水星辰星', icon: '💧', img: '' },
  { name: '北极紫光大帝', series: '星辰', stars: 5, atk: 4700, def: 4900, skill: '紫微北极', icon: '⭐', img: '' },
  { name: '南极长生大帝', series: '星辰', stars: 5, atk: 4600, def: 4800, skill: '南极寿星', icon: '🌟', img: '' },
  { name: '东极青华大帝', series: '星辰', stars: 5, atk: 4500, def: 4700, skill: '青华救苦', icon: '🌟', img: '' },
  { name: '西极勾陈大帝', series: '星辰', stars: 5, atk: 4600, def: 4600, skill: '勾陈定位', icon: '⭐', img: '' },
  
  // 风伯雨师
  { name: '飞廉', series: '气象', stars: 4, atk: 4200, def: 4000, skill: '风伯飞廉', icon: '💨', img: '' },
  { name: '屏翳', series: '气象', stars: 4, atk: 4000, def: 4200, skill: '雨师屏翳', icon: '🌧️', img: '' },
  { name: '云神', series: '气象', stars: 4, atk: 4000, def: 4100, skill: '云神屏翳', icon: '☁️', img: '' },
  { name: '雷神', series: '气象', stars: 5, atk: 4700, def: 4400, skill: '雷神九天', icon: '⚡', img: '' },
  { name: '电母', series: '气象', stars: 4, atk: 4300, def: 4100, skill: '电母闪电', icon: '⚡', img: '' },
  
  // 山神水神
  { name: '昆仑山神', series: '山神', stars: 5, atk: 4600, def: 4800, skill: '昆仑天柱', icon: '⛰️', img: '' },
  { name: '泰山神', series: '山神', stars: 5, atk: 4500, def: 4700, skill: '东岳大帝', icon: '⛰️', img: '' },
  { name: '华山神', series: '山神', stars: 4, atk: 4300, def: 4500, skill: '西岳大帝', icon: '⛰️', img: '' },
  { name: '恒山神', series: '山神', stars: 4, atk: 4200, def: 4400, skill: '北岳大帝', icon: '⛰️', img: '' },
  { name: '嵩山神', series: '山神', stars: 4, atk: 4200, def: 4400, skill: '中岳大帝', icon: '⛰️', img: '' },
  { name: '衡山神', series: '山神', stars: 4, atk: 4300, def: 4500, skill: '南岳大帝', icon: '⛰️', img: '' },
  { name: '河神', series: '水神', stars: 5, atk: 4500, def: 4700, skill: '河伯冯夷', icon: '💧', img: '' },
  { name: '洛神', series: '水神', stars: 5, atk: 4400, def: 4600, skill: '洛神宓妃', icon: '💧', img: '' },
  { name: '海若', series: '水神', stars: 5, atk: 4500, def: 4700, skill: '海若北海', icon: '🌊', img: '' },
  { name: '湘夫人', series: '水神', stars: 4, atk: 4200, def: 4400, skill: '湘水之神', icon: '💧', img: '' },
  
  // 四方神灵
  { name: '东方青帝', series: '四方神', stars: 5, atk: 4600, def: 4700, skill: '青帝灵威', icon: '🟢', img: '' },
  { name: '南方赤帝', series: '四方神', stars: 5, atk: 4700, def: 4500, skill: '赤帝祝融', icon: '🔴', img: '' },
  { name: '西方白帝', series: '四方神', stars: 5, atk: 4500, def: 4600, skill: '白帝蓐收', icon: '⚪', img: '' },
  { name: '北方黑帝', series: '四方神', stars: 5, atk: 4600, def: 4800, skill: '黑帝玄冥', icon: '⚫', img: '' },
  { name: '中央黄帝', series: '四方神', stars: 5, atk: 4700, def: 4800, skill: '黄帝轩辕', icon: '🟡', img: '' },
  
  // 上古圣贤
  { name: '伏羲', series: '圣贤', stars: 5, atk: 4700, def: 4800, skill: '伏羲画卦', icon: '☯️', img: '' },
  { name: '神农', series: '圣贤', stars: 5, atk: 4300, def: 4700, skill: '神农尝草', icon: '🌿', img: '' },
  { name: '燧人', series: '圣贤', stars: 4, atk: 4200, def: 4500, skill: '燧人取火', icon: '🔥', img: '' },
  { name: '有巢', series: '圣贤', stars: 4, atk: 4000, def: 4400, skill: '有巢筑屋', icon: '🏠', img: '' },
  { name: '仓颉', series: '圣贤', stars: 4, atk: 4100, def: 4300, skill: '仓颉造字', icon: '📜', img: '' },
  { name: '后稷', series: '圣贤', stars: 4, atk: 4000, def: 4400, skill: '后稷教稼', icon: '🌾', img: '' },
  { name: '伏羲', series: '圣贤', stars: 5, atk: 4700, def: 4800, skill: '伏羲女娲', icon: '👥', img: '' },
  { name: '女娲', series: '圣贤', stars: 5, atk: 4800, def: 4900, skill: '女娲造人', icon: '👩', img: '' },
  { name: '夸父', series: '圣贤', stars: 4, atk: 4400, def: 4200, skill: '夸父逐日', icon: '🏃', img: '' },
  { name: '后羿', series: '圣贤', stars: 5, atk: 4800, def: 4400, skill: '后羿射日', icon: '🏹', img: '' },
  { name: '嫦娥', series: '圣贤', stars: 4, atk: 4200, def: 4600, skill: '嫦娥奔月', icon: '🌙', img: '' },
  { name: '精卫', series: '圣贤', stars: 3, atk: 3400, def: 3200, skill: '精卫填海', icon: '🐦', img: '' },
  { name: '刑天', series: '圣贤', stars: 5, atk: 4600, def: 4300, skill: '刑天舞戚', icon: '⚔️', img: '' },
  
  // 其他神灵
  { name: '句芒', series: '木神', stars: 4, atk: 4000, def: 4300, skill: '句芒春神', icon: '🌳', img: '' },
  { name: '祝融', series: '火神', stars: 5, atk: 4800, def: 4500, skill: '祝融火神', icon: '🔥', img: '' },
  { name: '蓐收', series: '金神', stars: 4, atk: 4400, def: 4200, skill: '蓐收金神', icon: '⚪', img: '' },
  { name: '玄冥', series: '水神', stars: 4, atk: 4200, def: 4500, skill: '玄冥水神', icon: '💧', img: '' },
  { name: '强公共', series: '土神', stars: 4, atk: 4100, def: 4400, skill: '强公共土神', icon: '🪨', img: '' },
  { name: '帝俊', series: '天帝', stars: 5, atk: 4900, def: 4800, skill: '帝俊天帝', icon: '👑', img: '' },
  { name: '帝舜', series: '天帝', stars: 5, atk: 4600, def: 4900, skill: '帝舜有虞', icon: '👑', img: '' },
  { name: '帝禹', series: '天帝', stars: 5, atk: 4700, def: 5000, skill: '帝禹夏后', icon: '👑', img: '' },
  { name: '帝喾', series: '天帝', stars: 5, atk: 4600, def: 4800, skill: '帝喾高辛', icon: '👑', img: '' },
  { name: '帝颛顼', series: '天帝', stars: 5, atk: 4700, def: 4900, skill: '颛顼高阳', icon: '❄️', img: '' },
  
  // 更多神灵
  { name: '帝俊', series: '日母', stars: 5, atk: 4800, def: 4700, skill: '日母羲和', icon: '☀️', img: '' },
  { name: '常羲', series: '月母', stars: 5, atk: 4600, def: 4800, skill: '月母常羲', icon: '🌙', img: '' },
  { name: '九天玄女', series: '战神', stars: 5, atk: 4700, def: 4500, skill: '玄女兵法', icon: '⚔️', img: '' },
  { name: '王母娘娘', series: '女神', stars: 5, atk: 4600, def: 4900, skill: '王母瑶池', icon: '👩', img: '' },
  { name: '送子娘娘', series: '女神', stars: 4, atk: 4000, def: 4500, skill: '送子娘娘', icon: '👶', img: '' },
  { name: '观音菩萨', series: '女神', stars: 5, atk: 4500, def: 4800, skill: '观音普度', icon: '🕉️', img: '' },
  { name: '妈祖', series: '海神', stars: 5, atk: 4400, def: 4700, skill: '妈祖海神', icon: '🌊', img: '' },
  { name: '关帝', series: '武神', stars: 5, atk: 4700, def: 4500, skill: '关帝忠义', icon: '⚔️', img: '' },
  { name: '文昌帝君', series: '文神', stars: 4, atk: 4000, def: 4400, skill: '文昌魁星', icon: '📚', img: '' },
  { name: '财神', series: '财神', stars: 4, atk: 4200, def: 4500, skill: '财神赵公', icon: '💰', img: '' },
];

// 山海经卡牌数据 - 上古篇 (~80张)
const ANCIENT_CREATURES = [
  // 鲲鹏
  { name: '鲲', series: '上古', stars: 5, atk: 4500, def: 4800, skill: '鲲化为鹏', icon: '🐟', img: '' },
  { name: '鹏', series: '上古', stars: 5, atk: 4800, def: 4500, skill: '鹏程万里', icon: '🦅', img: '' },
  { name: '大鹏金翅鸟', series: '上古', stars: 5, atk: 4900, def: 4600, skill: '金翅食龙', icon: '🦅', img: '' },
  
  // 烛龙应龙
  { name: '烛龙', series: '上古', stars: 5, atk: 4900, def: 4700, skill: '烛龙睁眼', icon: '🐉', img: '' },
  { name: '应龙', series: '上古', stars: 5, atk: 4800, def: 4600, skill: '应龙斩蚩', icon: '🐉', img: '' },
  { name: '虬龙', series: '上古', stars: 4, atk: 4200, def: 4400, skill: '虬龙潜渊', icon: '🐉', img: '' },
  { name: '螭龙', series: '上古', stars: 4, atk: 4100, def: 4300, skill: '螭龙戏珠', icon: '🐉', img: '' },
  { name: '夔龙', series: '上古', stars: 5, atk: 4700, def: 4600, skill: '夔龙单足', icon: '🐉', img: '' },
  
  // 上古凶兽
  { name: '混沌', series: '上古', stars: 5, atk: 4900, def: 4300, skill: '混沌无形', icon: '⚫', img: '' },
  { name: '穷奇', series: '上古', stars: 5, atk: 4800, def: 4200, skill: '穷奇翼虎', icon: '🐅', img: '' },
  { name: '梼杌', series: '上古', stars: 5, atk: 4700, def: 4400, skill: '梼杌顽固', icon: '🦁', img: '' },
  { name: '饕餮', series: '上古', stars: 5, atk: 5000, def: 4000, skill: '饕餮贪食', icon: '🦴', img: '' },
  
  // 上古神灵
  { name: '帝俊', series: '上古', stars: 5, atk: 4900, def: 4800, skill: '帝俊天帝', icon: '👑', img: '' },
  { name: '帝舜', series: '上古', stars: 5, atk: 4600, def: 4900, skill: '帝舜禅让', icon: '👑', img: '' },
  { name: '帝禹', series: '上古', stars: 5, atk: 4700, def: 5000, skill: '帝禹治水', icon: '👑', img: '' },
  { name: '帝颛顼', series: '上古', stars: 5, atk: 4700, def: 4900, skill: '颛顼北帝', icon: '❄️', img: '' },
  { name: '帝喾', series: '上古', stars: 5, atk: 4600, def: 4800, skill: '帝喾俊德', icon: '👑', img: '' },
  
  // 上古圣贤
  { name: '盘古', series: '上古', stars: 5, atk: 5000, def: 5000, skill: '盘古开天', icon: '👤', img: '' },
  { name: '女娲', series: '上古', stars: 5, atk: 4800, def: 4900, skill: '女娲补天', icon: '👩', img: '' },
  { name: '伏羲', series: '上古', stars: 5, atk: 4700, def: 4800, skill: '伏羲画卦', icon: '☯️', img: '' },
  { name: '神农', series: '上古', stars: 5, atk: 4300, def: 4700, skill: '神农尝草', icon: '🌿', img: '' },
  { name: '黄帝', series: '上古', stars: 5, atk: 4800, def: 4700, skill: '黄帝轩辕', icon: '👑', img: '' },
  { name: '蚩尤', series: '上古', stars: 5, atk: 4900, def: 4600, skill: '蚩尤九黎', icon: '👹', img: '' },
  { name: '共工', series: '上古', stars: 5, atk: 4700, def: 4500, skill: '共工触山', icon: '💧', img: '' },
  { name: '祝融', series: '上古', stars: 5, atk: 4800, def: 4400, skill: '祝融火神', icon: '🔥', img: '' },
  
  // 其他上古存在
  { name: '开明兽', series: '上古', stars: 5, atk: 4700, def: 4600, skill: '开明守门', icon: '🦁', img: '' },
  { name: '陆吾', series: '上古', stars: 5, atk: 4500, def: 4700, skill: '陆吾司天', icon: '🐅', img: '' },
  { name: '英招', series: '上古', stars: 4, atk: 4200, def: 4400, skill: '英招巡天', icon: '🦅', img: '' },
  { name: '计蒙', series: '上古', stars: 4, atk: 4100, def: 4300, skill: '计蒙行雨', icon: '🌧️', img: '' },
  { name: '涉蠣', series: '上古', stars: 4, atk: 4000, def: 4200, skill: '涉蠣三足', icon: '🐢', img: '' },
  { name: '浮游', series: '上古', stars: 4, atk: 3900, def: 4100, skill: '浮游化虹', icon: '🦋', img: '' },
  { name: '赤松子', series: '上古', stars: 4, atk: 4000, def: 4300, skill: '赤松子雨师', icon: '🌧️', img: '' },
  { name: '广成子', series: '上古', stars: 4, atk: 4100, def: 4400, skill: '广成子道祖', icon: '👴', img: '' },
  { name: '九天玄女', series: '上古', stars: 5, atk: 4700, def: 4500, skill: '玄女兵法', icon: '⚔️', img: '' },
  { name: '白泽', series: '上古', stars: 4, atk: 4000, def: 4300, skill: '白泽通灵', icon: '🦌', img: '' },
  
  // 上古神兽
  { name: '白虎', series: '上古', stars: 5, atk: 4500, def: 4700, skill: '白虎西方', icon: '🐅', img: '' },
  { name: '青龙', series: '上古', stars: 5, atk: 4600, def: 4800, skill: '青龙东方', icon: '🐉', img: '' },
  { name: '朱雀', series: '上古', stars: 5, atk: 4700, def: 4600, skill: '朱雀南方', icon: '🦅', img: '' },
  { name: '玄武', series: '上古', stars: 5, atk: 4400, def: 4900, skill: '玄武北方', icon: '🐢', img: '' },
  
  // 上古凶兽
  { name: '相柳', series: '上古', stars: 5, atk: 4700, def: 4500, skill: '相柳九头', icon: '🐍', img: '' },
  { name: '九婴', series: '上古', stars: 5, atk: 4800, def: 4400, skill: '九婴九头', icon: '🐍', img: '' },
  { name: '凿齿', series: '上古', stars: 4, atk: 4300, def: 4000, skill: '凿齿长齿', icon: '🦷', img: '' },
  { name: '猰貐', series: '上古', stars: 5, atk: 4600, def: 4400, skill: '猰貐龙首', icon: '🐉', img: '' },
  { name: '大风', series: '上古', stars: 4, atk: 4200, def: 3800, skill: '大风毁屋', icon: '💨', img: '' },
  
  // 更多上古
  { name: '帝江', series: '上古', stars: 5, atk: 4500, def: 4600, skill: '帝江混沌', icon: '⚫', img: '' },
  { name: '帝鸿', series: '上古', stars: 5, atk: 4600, def: 4700, skill: '帝鸿氏祖', icon: '👤', img: '' },
  { name: '少昊', series: '上古', stars: 5, atk: 4500, def: 4700, skill: '少昊金天', icon: '👑', img: '' },
  { name: '蓐收', series: '上古', stars: 4, atk: 4400, def: 4200, skill: '蓐收金神', icon: '⚪', img: '' },
  { name: '句芒', series: '上古', stars: 4, atk: 4100, def: 4400, skill: '句芒木神', icon: '🌳', img: '' },
  { name: '玄冥', series: '上古', stars: 4, atk: 4200, def: 4600, skill: '玄冥水神', icon: '❄️', img: '' },
  { name: '重', series: '上古', stars: 4, atk: 4000, def: 4300, skill: '重司天', icon: '👤', img: '' },
  { name: '黎', series: '上古', stars: 4, atk: 4000, def: 4300, skill: '黎司地', icon: '👤', img: '' },
  { name: '羲和', series: '上古', stars: 5, atk: 4700, def: 4600, skill: '羲和日母', icon: '☀️', img: '' },
  { name: '常羲', series: '上古', stars: 5, atk: 4600, def: 4700, skill: '常羲月母', icon: '🌙', img: '' },
  { name: '望舒', series: '上古', stars: 4, atk: 4200, def: 4500, skill: '望舒月御', icon: '🌙', img: '' },
  { name: '织女', series: '上古', stars: 4, atk: 4000, def: 4300, skill: '织女织锦', icon: '🧶', img: '' },
  { name: '牛郎', series: '上古', stars: 4, atk: 4100, def: 4200, skill: '牛郎牧牛', icon: '🐂', img: '' },
  { name: '刑天', series: '上古', stars: 5, atk: 4600, def: 4300, skill: '刑天舞戚', icon: '⚔️', img: '' },
  { name: '夸父', series: '上古', stars: 5, atk: 4600, def: 4400, skill: '夸父逐日', icon: '🏃', img: '' },
  { name: '后羿', series: '上古', stars: 5, atk: 4800, def: 4500, skill: '后羿射日', icon: '🏹', img: '' },
  { name: '嫦娥', series: '上古', stars: 4, atk: 4200, def: 4600, skill: '嫦娥奔月', icon: '🌙', img: '' },
  { name: '吴刚', series: '上古', stars: 4, atk: 4300, def: 4200, skill: '吴刚伐桂', icon: '🪓', img: '' },
  { name: '常羲', series: '上古', stars: 5, atk: 4600, def: 4700, skill: '常羲生十二', icon: '🌙', img: '' },
  { name: '羲和', series: '上古', stars: 5, atk: 4700, def: 4600, skill: '羲和生十日', icon: '☀️', img: '' },
];

// 合并所有卡牌
const ALL_SHANHAI_CARDS = [
  ...DIVINE_BEASTS.map(c => ({...c, faction: '神兽', color: '#ffd700'})),
  ...FIERCE_BEASTS.map(c => ({...c, faction: '凶兽', color: '#8B0000'})),
  ...DIVINE_GODS.map(c => ({...c, faction: '神灵', color: '#9400D3'})),
  ...ANCIENT_CREATURES.map(c => ({...c, faction: '上古', color: '#1a1a1a'})),
];

console.log(`总计: ${ALL_SHANHAI_CARDS.length} 张卡牌`);
console.log(`神兽: ${DIVINE_BEASTS.length} 张`);
console.log(`凶兽: ${FIERCE_BEASTS.length} 张`);
console.log(`神灵: ${DIVINE_GODS.length} 张`);
console.log(`上古: ${ANCIENT_CREATURES.length} 张`);