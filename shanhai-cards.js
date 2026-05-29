// 山海经卡牌数据 - 神兽篇 (~150张)
const DIVINE_BEASTS = [
  // 四圣兽
  { name: '青龙', series: '四圣兽', stars: 5, atk: 4500, def: 4800, skill: '龙卷九天', icon: '🐉', img: '', desc: '东方之神，青色鳞甲，鳞片如金，能呼风唤雨，守护东方七宿。' },
  { name: '白虎', series: '四圣兽', stars: 5, atk: 4400, def: 4600, skill: '白虎啸天', icon: '🐅', img: '', desc: '西方之神，白色皮毛黑纹，性凶猛，能驱邪避灾，守护西方七宿。' },
  { name: '朱雀', series: '四圣兽', stars: 5, atk: 4700, def: 4500, skill: '烈焰焚天', icon: '🔥', img: '', desc: '南方之神，浴火重生，羽毛赤红，能涅槃不死，守护南方七宿。' },
  { name: '玄武', series: '四圣兽', stars: 5, atk: 4200, def: 5000, skill: '玄武真身', icon: '🐢', img: '', desc: '北方之神，龟蛇合体，玄甲坚壳，能镇守北方，寿与天齐。' },
  
  // 神兽
  { name: '麒麟', series: '瑞兽', stars: 5, atk: 4300, def: 4700, skill: '麒麟圣光', icon: '🦌', img: '', desc: '仁兽也，麋身牛尾，鱼鳞爪，音如雷鸣。王者至仁则出。' },
  { name: '凤凰', series: '瑞兽', stars: 5, atk: 4600, def: 4400, skill: '涅槃重生', icon: '🦅', img: '', desc: '鸟之王也，五色备举。火鸟也，凤凰涅槃，浴火重生。' },
  { name: '白泽', series: '瑞兽', stars: 4, atk: 3800, def: 4000, skill: '通灵神知', icon: '🦌', img: '', desc: '神兽也，能言语，通万物之情，帝乃令白泽画之。' },
  { name: '龙龟', series: '瑞兽', stars: 4, atk: 3500, def: 4200, skill: '龙龟护体', icon: '🐢', img: '', desc: '龙首龟身，负载石碑，千年不坏，象征长寿与稳重。' },
  { name: '比翼鸟', series: '瑞兽', stars: 3, atk: 3000, def: 3200, skill: '比翼双飞', icon: '🐦', img: '', desc: '南方之鸟，一目一翼，须相比乃飞。不比不飞。' },
  { name: '比目鱼', series: '瑞兽', stars: 3, atk: 2800, def: 3100, skill: '双目凝视', icon: '🐟', img: '', desc: '状如牛脾，身青色一目，两相较合乃行。' },
  
  // 龙族
  { name: '应龙', series: '龙族', stars: 5, atk: 4800, def: 4600, skill: '龙神降世', icon: '🐉', img: '', desc: '有翼之龙也，助黄帝斩蚩尤，功勋卓著，入于四海。' },
  { name: '烛龙', series: '龙族', stars: 5, atk: 4900, def: 4700, skill: '烛照九幽', icon: '🐉', img: '', desc: '人面龙身，赤色。睁眼为昼，闭眼为夜，吹为冬，呼为夏。' },
  { name: '夔牛', series: '龙族', stars: 4, atk: 4000, def: 3800, skill: '雷鸣天下', icon: '🐂', img: '', desc: '状如牛，苍身而无角，一足。出入水则必风雨，其声如雷。' },
  { name: '螭龙', series: '龙族', stars: 4, atk: 3900, def: 4100, skill: '水龙吟', icon: '🐉', img: '', desc: '无角曰螭，性好风雨，能潜渊戏水。' },
  { name: '虬龙', series: '龙族', stars: 4, atk: 3800, def: 4000, skill: '九龙出海', icon: '🐉', img: '', desc: '有角曰虬，小龙也，角初生者。潜于深渊。' },
  { name: '蛟龙', series: '龙族', stars: 4, atk: 4000, def: 3900, skill: '蛟龙翻江', icon: '🐉', img: '', desc: '龙属也，能害人者。入水则激射，修广十里。' },
  { name: '云龙', series: '龙族', stars: 3, atk: 3200, def: 3500, skill: '云龙隐现', icon: '☁️', img: '', desc: '龙乘云气，游于九天，隐现无常。' },
  { name: '风龙', series: '龙族', stars: 3, atk: 3300, def: 3400, skill: '风起云涌', icon: '💨', img: '', desc: '御风而行，驾风升天，风雨随之。' },
  { name: '雷龙', series: '龙族', stars: 4, atk: 4100, def: 3700, skill: '雷霆万钧', icon: '⚡', img: '', desc: '龙之精魄，雷部正神，掌天雷之权。' },
  { name: '火龙', series: '龙族', stars: 4, atk: 4300, def: 3600, skill: '龙火焚天', icon: '🔥', img: '', desc: '龙之血脉，吐火焚林，赤地千里。' },
  
  // 凤凰一族
  { name: '朱雀', series: '凤凰', stars: 5, atk: 4700, def: 4500, skill: '朱雀燎原', icon: '🦅', img: '', desc: '南方之火鸟，五色备举，浴火而生。' },
  { name: '鸾鸟', series: '凤凰', stars: 4, atk: 3800, def: 4000, skill: '鸾凤鸣天', icon: '🦅', img: '', desc: '赤色凤皇类也，音声感人。' },
  { name: '鹓雏', series: '凤凰', stars: 4, atk: 3700, def: 3900, skill: '雏凤清鸣', icon: '🦅', img: '', desc: '凤凰之稚鸟也，鸣声清越。' },
  { name: '鹄鸟', series: '凤凰', stars: 3, atk: 3200, def: 3500, skill: '鹄翔九天', icon: '🦅', img: '', desc: '似雁而大，白色，翔于云际。' },
  { name: '鸿鹄', series: '凤凰', stars: 3, atk: 3300, def: 3400, skill: '鸿鹄之志', icon: '🦅', img: '', desc: '鹄也，鸿雁之大者。志在千里。' },
  
  // 瑞草仙禽
  { name: '白鹿', series: '仙兽', stars: 4, atk: 3400, def: 3800, skill: '白鹿衔芝', icon: '🦌', img: '', desc: '瑞兽也，食则衔芝。王者孝则至。' },
  { name: '青鸾', series: '仙兽', stars: 4, atk: 3600, def: 3700, skill: '青鸾翔云', icon: '🦅', img: '', desc: '赤色凤皇之属，青羽翔云。' },
  { name: '玄鹤', series: '仙兽', stars: 3, atk: 2800, def: 3300, skill: '玄鹤冲天', icon: '🦅', img: '', desc: '鹤之黑者，寿千岁，翔于云霄。' },
  { name: '灵龟', series: '仙兽', stars: 3, atk: 2600, def: 3400, skill: '灵龟献瑞', icon: '🐢', img: '', desc: '神龟也，寿千岁而灵，能知吉凶。' },
  { name: '玉兔', series: '仙兽', stars: 3, atk: 2700, def: 3100, skill: '玉兔捣药', icon: '🐰', img: '', desc: '月中玉兔也，捣药捣霜，因献于常娥。' },
  
  // 天马与神驹
  { name: '天马', series: '神驹', stars: 4, atk: 3800, def: 3600, skill: '天马行空', icon: '🐎', img: '', desc: '腾雾乘云，披星戴月。天马行空，无所羁绊。' },
  { name: '赤兔', series: '神驹', stars: 4, atk: 4000, def: 3500, skill: '赤兔追风', icon: '🐎', img: '', desc: '赤兔马也，日行千里，吕布所乘。' },
  { name: '的卢', series: '神驹', stars: 4, atk: 3900, def: 3700, skill: '的卢飞跃', icon: '🐎', img: '', desc: '额有白斑之马，刘备所乘，跃檀溪救主。' },
  { name: '绝影', series: '神驹', stars: 3, atk: 3400, def: 3300, skill: '绝影无痕', icon: '🐎', img: '', desc: '曹操坐骑，奔跑无影，日行万里。' },
  { name: '爪黄飞电', series: '神驹', stars: 3, atk: 3300, def: 3400, skill: '飞电千里', icon: '⚡', img: '', desc: '爪黄四蹄，正白色，号曰飞电。' },
  
  // 狮子类
  { name: '狻猊', series: '神狮', stars: 4, atk: 3900, def: 3800, skill: '狻猊怒吼', icon: '🦁', img: '', desc: '狮子也，食虎豹，威震百兽。喜烟火。' },
  { name: '狴犴', series: '神狮', stars: 4, atk: 3800, def: 4000, skill: '狴犴审判', icon: '🦁', img: '', desc: '似虎而有翼，名曰狴犴。性好讼。' },
  { name: '赑屃', series: '神狮', stars: 4, atk: 3600, def: 4300, skill: '赑屃负重', icon: '🐢', img: '', desc: '似龟，好负重。碑下龟也。' },
  { name: '螭吻', series: '神狮', stars: 3, atk: 3200, def: 3500, skill: '螭吻辟火', icon: '🐉', img: '', desc: '龙之九子也，口阔好吞，故用于殿脊。' },
  { name: '蒲牢', series: '神狮', stars: 3, atk: 3300, def: 3200, skill: '蒲牢鸣钟', icon: '🦁', img: '', desc: '龙之九子也，性畏鲸。击钟连板。' },
  { name: '嘲风', series: '神狮', stars: 3, atk: 3100, def: 3400, skill: '嘲风登高', icon: '🦁', img: '', desc: '龙之九子也，性好险，故用于殿角。' },
  { name: '负屃', series: '神狮', stars: 3, atk: 3000, def: 3300, skill: '负屃文雅', icon: '🐉', img: '', desc: '龙之九子也，好文。碑上文。' },
  
  // 狐狸类（瑞狐）
  { name: '九尾狐', series: '仙狐', stars: 4, atk: 3800, def: 4000, skill: '九尾幻术', icon: '🦊', img: '', desc: '青丘国有兽，其状如狐而九尾。声如婴儿。' },
  { name: '白狐', series: '仙狐', stars: 3, atk: 3000, def: 3300, skill: '白狐魅惑', icon: '🦊', img: '', desc: '白狐也，寿千岁，能变化魅人。' },
  { name: '玄狐', series: '仙狐', stars: 3, atk: 3100, def: 3200, skill: '玄狐迷踪', icon: '🦊', img: '', desc: '玄狐也，黑毛，灵性高。' },
  { name: '火狐', series: '仙狐', stars: 3, atk: 3400, def: 2900, skill: '狐火焚林', icon: '🔥', img: '', desc: '火狐也，尾有火，能燃林。' },
  
  // 牛类神兽
  { name: '兕', series: '神牛', stars: 4, atk: 3700, def: 4000, skill: '兕角无双', icon: '🐂', img: '', desc: '似牛而青，独角，力能触人。' },
  { name: '白兕', series: '神牛', stars: 4, atk: 3800, def: 4100, skill: '白兕镇海', icon: '🐂', img: '', desc: '白牛也，青色，一角，镇海。' },
  { name: '青牛', series: '神牛', stars: 3, atk: 3200, def: 3600, skill: '青牛化虹', icon: '🐂', img: '', desc: '青牛也，老子出关乘之。' },
  { name: '黄牛', series: '神牛', stars: 3, atk: 2900, def: 3300, skill: '黄牛耕地', icon: '🐂', img: '', desc: '黄牛也，性驯，助农事。' },
  
  // 龟类神兽
  { name: '神龟', series: '神龟', stars: 3, atk: 2600, def: 3800, skill: '神龟长寿', icon: '🐢', img: '', desc: '龟之老者，寿万岁，能通灵。' },
  { name: '玄龟', series: '神龟', stars: 4, atk: 3200, def: 4000, skill: '玄龟定海', icon: '🐢', img: '', desc: '玄色龟也，能定海镇波。' },
  { name: '文龟', series: '神龟', stars: 3, atk: 2800, def: 3500, skill: '文龟载书', icon: '📚', img: '', desc: '龟甲有文，载书之器。' },
  { name: '玳瑁', series: '神龟', stars: 3, atk: 2900, def: 3400, skill: '玳瑁护身', icon: '🐢', img: '', desc: '似龟，甲有斑文，可为饰。' },
  
  // 蛇类神兽
  { name: '白蛇', series: '灵蛇', stars: 4, atk: 3600, def: 3400, skill: '白蛇化形', icon: '🐍', img: '', desc: '白蛇也，寿千年，能化人形。' },
  { name: '青蛇', series: '灵蛇', stars: 4, atk: 3700, def: 3300, skill: '青蛇幻化', icon: '🐍', img: '', desc: '青蛇也，性灵，能幻化。' },
  { name: '金蛇', series: '灵蛇', stars: 3, atk: 3300, def: 3000, skill: '金蛇狂舞', icon: '🐍', img: '', desc: '金蛇也，鳞如金，能舞。' },
  { name: '墨蛇', series: '灵蛇', stars: 3, atk: 3200, def: 3200, skill: '墨蛇潜渊', icon: '🐍', img: '', desc: '墨蛇也，潜于深渊。' },
  
  // 虎类神兽
  { name: '白虎', series: '神虎', stars: 5, atk: 4400, def: 4600, skill: '白虎啸林', icon: '🐅', img: '', desc: '白毛黑纹虎，西方之神。啸声震林。' },
  { name: '黑虎', series: '神虎', stars: 4, atk: 4200, def: 4000, skill: '黑虎掏心', icon: '🐅', img: '', desc: '黑虎也，勇猛异常，能掏人心。' },
  { name: '赤虎', series: '神虎', stars: 4, atk: 4300, def: 3800, skill: '赤虎奔火', icon: '🐅', img: '', desc: '赤虎也，毛赤如火，奔如闪电。' },
  { name: '剑齿虎', series: '神虎', stars: 4, atk: 4100, def: 3900, skill: '剑齿猎杀', icon: '🗡️', img: '', desc: '巨齿虎，上古猛兽，齿如剑。' },
  
  // 狼类神兽
  { name: '白狼', series: '神狼', stars: 4, atk: 4000, def: 3600, skill: '白狼啸月', icon: '🐺', img: '', desc: '白狼也，祥瑞之兽，啸月而嚎。' },
  { name: '苍狼', series: '神狼', stars: 4, atk: 3900, def: 3500, skill: '苍狼逐日', icon: '🐺', img: '', desc: '苍狼也，逐日而奔，永不停歇。' },
  { name: '银狼', series: '神狼', stars: 4, atk: 4100, def: 3700, skill: '银狼破阵', icon: '🐺', img: '', desc: '银狼也，毛如银，能破军阵。' },
  { name: '金狼', series: '神狼', stars: 3, atk: 3800, def: 3400, skill: '金狼锋爪', icon: '🐺', img: '', desc: '金狼也，爪如金，锋利无比。' },
  
  // 其他神兽
  { name: '当康', series: '祥兽', stars: 3, atk: 2800, def: 3300, skill: '当康献瑞', icon: '🐗', img: '', desc: '见则岁熟，自鸣其名。' },
  { name: '一角兽', series: '祥兽', stars: 4, atk: 3600, def: 3800, skill: '一角冲天', icon: '🦏', img: '', desc: '一角之兽，寿千岁，能知吉凶。' },
  { name: '天狗', series: '祥兽', stars: 3, atk: 3400, def: 3000, skill: '天狗食月', icon: '🐕', img: '', desc: '状如狸，白首，可以御凶。' },
  { name: '飞鼠', series: '祥兽', stars: 2, atk: 2200, def: 2800, skill: '飞鼠滑翔', icon: '🐿️', img: '', desc: '状如鼠，飞于林间。' },
  { name: '耳鼠', series: '祥兽', stars: 2, atk: 2000, def: 2700, skill: '耳鼠乘风', icon: '🐭', img: '', desc: '状如鼠，兔首麋身，以尾飞。' },
  { name: '乘黄', series: '祥兽', stars: 4, atk: 3700, def: 3900, skill: '乘黄飞升', icon: '🐎', img: '', desc: '状如狐，背有角，寿二千岁。乘之寿二千。' },
  { name: '吉量', series: '祥兽', stars: 3, atk: 3200, def: 3500, skill: '吉量腾云', icon: '🐎', img: '', desc: '马也，文马，寿千岁。' },
  { name: '驺虞', series: '祥兽', stars: 4, atk: 3500, def: 4000, skill: '驺虞仁德', icon: '🐅', img: '', desc: '仁兽也，白毛黑文，尾长于身。' },
  { name: '祸斗', series: '祥兽', stars: 4, atk: 4200, def: 3600, skill: '祸斗焚灾', icon: '🔥', img: '', desc: '状如犬而食火粪，能致火灾。' },
  
  // 更多龙族
  { name: '龟龙', series: '龙族', stars: 4, atk: 3500, def: 4200, skill: '龟龙吸水', icon: '🐢', img: '', desc: '龟身龙首，能吸水。' },
  { name: '肠龙', series: '龙族', stars: 3, atk: 3000, def: 3600, skill: '肠龙盘山', icon: '🐉', img: '', desc: '龙也，盘于山间。' },
  { name: '鸣蛇', series: '龙族', stars: 3, atk: 3300, def: 2900, skill: '鸣蛇振翼', icon: '🐍', img: '', desc: '状如蛇而四翼，见则大旱。' },
  { name: '化蛇', series: '龙族', stars: 3, atk: 3200, def: 3100, skill: '化蛇鸣泣', icon: '🐍', img: '', desc: '状如人面而豺身，鸟翼而蛇行。' },
  { name: '腾蛇', series: '龙族', stars: 4, atk: 3700, def: 3500, skill: '腾蛇驾雾', icon: '🐍', img: '', desc: '龙也，能腾云驾雾。' },
  { name: '飞龙', series: '龙族', stars: 4, atk: 4000, def: 3700, skill: '飞龙在天', icon: '🐉', img: '', desc: '龙也，能飞于天。' },
  { name: '鱼龙', series: '龙族', stars: 3, atk: 3400, def: 3200, skill: '鱼龙化龙', icon: '🐉', img: '', desc: '鱼化龙也，能登天。' },
  { name: '玉龙', series: '龙族', stars: 4, atk: 3900, def: 4000, skill: '玉龙出海', icon: '💎', img: '', desc: '玉色龙也，出海则雨。' },
  { name: '苍龙', series: '龙族', stars: 5, atk: 4600, def: 4500, skill: '苍龙七宿', icon: '🐉', img: '', desc: '东方之龙，掌七宿。' },
  { name: '火龙', series: '龙族', stars: 4, atk: 4200, def: 3700, skill: '火龙吐息', icon: '🔥', img: '', desc: '龙之精，能吐火。' },
  
  // 神鹰
  { name: '金翅大鹏', series: '神鹰', stars: 5, atk: 4500, def: 4200, skill: '鹏程万里', icon: '🦅', img: '', desc: '金翅鸟也，食龙。展翅万里。' },
  { name: '苍鹰', series: '神鹰', stars: 4, atk: 3800, def: 3600, skill: '鹰击长空', icon: '🦅', img: '', desc: '苍鹰也，击于长空。' },
  { name: '白头鹰', series: '神鹰', stars: 3, atk: 3400, def: 3300, skill: '白头锐目光', icon: '🦅', img: '', desc: '白头鹰，目光如电。' },
  { name: '黑鸢', series: '神鹰', stars: 3, atk: 3200, def: 3100, skill: '鸢旋九天', icon: '🦅', img: '', desc: '黑鸢也，旋于九天。' },
  { name: '鹞鹰', series: '神鹰', stars: 3, atk: 3300, def: 3000, skill: '鹞鹰翻身', icon: '🦅', img: '', desc: '鹞鹰也，翻身击敌。' },
  
  // 神猿
  { name: '通臂猿猴', series: '神猿', stars: 4, atk: 3800, def: 3600, skill: '通臂慧拳', icon: '🐒', img: '', desc: '通臂猿猴也，能通百兽。' },
  { name: '六耳猕猴', series: '神猿', stars: 5, atk: 4300, def: 4000, skill: '六耳聆听', icon: '🐒', img: '', desc: '六耳猕猴也，能听万物。' },
  { name: '赤尻马猴', series: '神猿', stars: 4, atk: 3700, def: 3800, skill: '马猴灵动', icon: '🐒', img: '', desc: '赤尻猴也，极其灵动。' },
  { name: '白猿', series: '神猿', stars: 3, atk: 3200, def: 3400, skill: '白猿献桃', icon: '🐒', img: '', desc: '白猿也，寿千岁，献桃。' },
  { name: '黑猿', series: '神猿', stars: 3, atk: 3300, def: 3200, skill: '黑猿攀崖', icon: '🐒', img: '', desc: '黑猿也，攀崖如飞。' },
  
  // 更多瑞兽
  { name: '鹿蜀', series: '瑞兽', stars: 3, atk: 2900, def: 3300, skill: '鹿蜀招福', icon: '🦌', img: '', desc: '状如马而白首，其音如谣。佩之宜子孙。' },
  { name: '类', series: '瑞兽', stars: 3, atk: 2800, def: 3200, skill: '类自舞', icon: '🦌', img: '', desc: '状如狸而有发，其名曰类。自为牝牡。' },
  { name: '玕琪', series: '瑞兽', stars: 4, atk: 3500, def: 3700, skill: '玕琪献瑞', icon: '🦌', img: '', desc: '神兽也，赤色，其状如狸。' },
  { name: '熊渠', series: '瑞兽', stars: 3, atk: 3100, def: 3400, skill: '熊渠健壮', icon: '🐻', img: '', desc: '熊之壮者，渠有力。' },
  { name: '雍和', series: '瑞兽', stars: 3, atk: 3000, def: 3200, skill: '雍和吉祥', icon: '🦌', img: '', desc: '状如赤豹，五尾其一。音如呼声。' },
  { name: '狡', series: '瑞兽', stars: 4, atk: 3600, def: 3800, skill: '狡出玉英', icon: '🦊', img: '', desc: '有兽焉，状如犬而豹文，其角如牛，其名曰狡。见则其国大穰。' },
  { name: '酸与', series: '瑞兽', stars: 3, atk: 3200, def: 3000, skill: '酸与鸣泰', icon: '🐍', img: '', desc: '状如蛇而四翼，见则天下大恐。' },
  { name: '朏朏', series: '瑞兽', stars: 2, atk: 2400, def: 2900, skill: '朏朏解忧', icon: '🐱', img: '', desc: '状如狸而六尾，其音如采声。佩之可以解忧。' },
  { name: '灌灌', series: '瑞兽', stars: 2, atk: 2500, def: 2800, skill: '灌灌防伪', icon: '🐦', img: '', desc: '鸟也，佩之可以不惑。' },
  { name: '帝江', series: '瑞兽', stars: 5, atk: 4000, def: 4200, skill: '帝江混沌', icon: '⚫', img: '', desc: '状如黄囊，赤如丹火，六足四翼，浑敦无面目。是识歌舞。' },
  { name: '灭蒙鸟', series: '瑞兽', stars: 3, atk: 3100, def: 3300, skill: '灭蒙翔空', icon: '🦅', img: '', desc: '青鸟也，灭蒙之鸟。' },
  { name: '蛮蛮', series: '瑞兽', stars: 3, atk: 3000, def: 3200, skill: '蛮蛮比翼', icon: '🐦', img: '', desc: '比翼鸟也，一翼一目，相得乃飞。' },
  { name: '漓蝣', series: '瑞兽', stars: 2, atk: 2200, def: 2700, skill: '漓蝣吐珠', icon: '🦋', img: '', desc: '蝴蝶之属，吐珠光。' },
  
  // 继续神兽
  { name: '开明兽', series: '神兽', stars: 5, atk: 4700, def: 4600, skill: '开明神视', icon: '🦁', img: '', desc: '状如虎而九首皆人面，开明东向。' },
  { name: '陆吾', series: '神兽', stars: 5, atk: 4500, def: 4700, skill: '陆吾司天', icon: '🐅', img: '', desc: '状虎身而九尾，人面而虎爪。是司天之九部。' },
  { name: '英招', series: '神兽', stars: 4, atk: 4000, def: 4200, skill: '英招巡天', icon: '🦅', img: '', desc: '状马而人面，虎纹鸟翼，司天之神。' },
  { name: '计蒙', series: '神兽', stars: 4, atk: 3900, def: 4100, skill: '计蒙行雨', icon: '🐉', img: '', desc: '状龙而人首，恒游于渊。能致风雨。' },
  { name: '耕父', series: '神兽', stars: 3, atk: 3200, def: 3400, skill: '耕父清渴', icon: '👨', img: '', desc: '神也，游于江渊。处常出入，御之袄。' },
  { name: '武罗', series: '神兽', stars: 4, atk: 3600, def: 3800, skill: '武罗司神', icon: '👩', img: '', desc: '神也，状人面而豹文，小腰白齿。司神。' },
  { name: '帝俊', series: '神兽', stars: 5, atk: 4800, def: 4600, skill: '帝俊统天', icon: '👑', img: '', desc: '俊者，帝俊也。上帝也。' },
  { name: '颛顼', series: '神兽', stars: 5, atk: 4700, def: 4800, skill: '颛顼北帝', icon: '❄️', img: '', desc: '北方之帝也，水德王。' },
  { name: '帝喾', series: '神兽', stars: 5, atk: 4600, def: 4700, skill: '帝喾仁德', icon: '👑', img: '', desc: '高辛氏也，仁德之帝。' },
  { name: '尧', series: '神兽', stars: 5, atk: 4500, def: 4800, skill: '尧舜禅让', icon: '👑', img: '', desc: '尧也，圣明之帝。' },
  { name: '舜', series: '神兽', stars: 5, atk: 4400, def: 4900, skill: '舜德服人', icon: '👑', img: '', desc: '舜也，孝德之帝。' },
  { name: '禹', series: '神兽', stars: 5, atk: 4700, def: 5000, skill: '禹王治水', icon: '👑', img: '', desc: '禹也，治水之王。' },
];

// 山海经卡牌数据 - 凶兽篇 (~200张)
const FIERCE_BEASTS = [
  // 四凶
  { name: '穷奇', series: '四凶', stars: 5, atk: 4800, def: 4200, skill: '穷凶极恶', icon: '👹', img: '', desc: '状如虎而有翼，食人从首始。所食被脊。' },
  { name: '梼杌', series: '四凶', stars: 5, atk: 4700, def: 4400, skill: '顽凶难驯', icon: '🦁', img: '', desc: '状如虎而毛高三尺，健于人を讼。' },
  { name: '饕餮', series: '四凶', stars: 5, atk: 5000, def: 4000, skill: '吞噬天地', icon: '🦴', img: '', desc: '羊身人面，目在腋下，虎齿人手。其肠大，贪食。' },
  { name: '混沌', series: '四凶', stars: 5, atk: 4900, def: 4300, skill: '混沌虚无', icon: '⚫', img: '', desc: '状如犬，六足四翼，无面目。知声而不知名。' },
  
  // 凶兽
  { name: '九婴', series: '凶兽', stars: 5, atk: 4700, def: 4400, skill: '九头同鸣', icon: '🐍', img: '', desc: '水火之怪，九头蛇，能喷水火。' },
  { name: '相柳', series: '凶兽', stars: 5, atk: 4800, def: 4600, skill: '九蛇缠身', icon: '🐍', img: '', desc: '九首蛇身，共工之臣也。九首皆食于九山。' },
  { name: '凿齿', series: '凶兽', stars: 4, atk: 4200, def: 3800, skill: '凿齿断命', icon: '🦷', img: '', desc: '有兽焉，齿长三尺，凿啮人。' },
  { name: '九凤', series: '凶兽', stars: 5, atk: 4600, def: 4300, skill: '九凤鸣冤', icon: '🦅', img: '', desc: '九凤也，九首鸟，能辨冤屈。' },
  { name: '封狶', series: '凶兽', stars: 4, atk: 4000, def: 4200, skill: '封狶拱地', icon: '🐗', img: '', desc: '大猪也，能拱地。' },
  { name: '修蛇', series: '凶兽', stars: 4, atk: 4300, def: 3900, skill: '修蛇吞象', icon: '🐍', img: '', desc: '大蛇也，能吞象。' },
  { name: '大风', series: '凶兽', stars: 4, atk: 4100, def: 3700, skill: '大风毁屋', icon: '💨', img: '', desc: '风伯也，所过破坏屋舍。' },
  { name: '猰貐', series: '凶兽', stars: 5, atk: 4500, def: 4300, skill: '猰貐噬人', icon: '👹', img: '', desc: '状如牛而赤身，人面马足，音如婴儿。食人。' },
  { name: '窫窳', series: '凶兽', stars: 4, atk: 4200, def: 4000, skill: '窫窳龙首', icon: '🐉', img: '', desc: '龙首也，状如牛，赤身，食人。' },
  { name: '朱厌', series: '凶兽', stars: 4, atk: 4400, def: 3600, skill: '朱厌兵祸', icon: '🐒', img: '', desc: '状如猿而白首，赤足。见则大兵。' },
  { name: '肥遗', series: '凶兽', stars: 3, atk: 3500, def: 3200, skill: '肥遗旱灾', icon: '🐍', img: '', desc: '六足四翼，见则大旱。' },
  { name: '蛊雕', series: '凶兽', stars: 4, atk: 4000, def: 3700, skill: '蛊雕迷心', icon: '🦅', img: '', desc: '状如雕而黑纹，独角，能迷人心智。' },
  { name: '举父', series: '凶兽', stars: 3, atk: 3400, def: 3300, skill: '举父投石', icon: '🐒', img: '', desc: '状如鼠而虎纹，善投。' },
  { name: '狸力', series: '凶兽', stars: 3, atk: 3200, def: 3400, skill: '狸力挖土', icon: '🐷', img: '', desc: '状如鼠，疣猪，能挖土。见则其县多土功。' },
  { name: '峳峳', series: '凶兽', stars: 4, atk: 3700, def: 3500, skill: '峳峳音绕', icon: '🐴', img: '', desc: '状如马而羊角，四足一目。见则其县多风雨。' },
  { name: '狍鸮', series: '凶兽', stars: 5, atk: 4600, def: 4100, skill: '狍鸮食人', icon: '👹', img: '', desc: '状如羊身人面，目在腋下，虎齿人手。贪食。' },
  { name: '傲因', series: '凶兽', stars: 4, atk: 4000, def: 3800, skill: '傲因阴险', icon: '🐺', img: '', desc: '状如狼，赤首赤足，能阴害人。' },
  { name: '罴', series: '凶兽', stars: 4, atk: 4100, def: 4000, skill: '罴猛击', icon: '🐻', img: '', desc: '人熊也，猛击。' },
  { name: '猛豹', series: '凶兽', stars: 4, atk: 4200, def: 3700, skill: '猛豹疾风', icon: '🐆', img: '', desc: '状如豹而大，健走。' },
  { name: '山犭军', series: '凶兽', stars: 3, atk: 3100, def: 2900, skill: '山犭军狡', icon: '🐕', img: '', desc: '状如犬而人面，能狡善走。' },
  { name: '犰狳', series: '凶兽', stars: 3, atk: 3000, def: 3200, skill: '犰狳见兵', icon: '🦔', img: '', desc: '状如兔而鸟喙，見则县有螽斯之疾。' },
  { name: '化蛇', series: '凶兽', stars: 4, atk: 3900, def: 3600, skill: '化蛇鸣如', icon: '🐍', img: '', desc: '状如人面而豺身，鸟翼蛇行。鸣如叱呼。' },
  { name: '鸣蛇', series: '凶兽', stars: 4, atk: 4000, def: 3500, skill: '鸣蛇四翼', icon: '🐍', img: '', desc: '状如蛇而四翼，见则其县大旱。' },
  { name: '玄龟', series: '凶兽', stars: 4, atk: 3500, def: 4200, skill: '玄龟浊水', icon: '🐢', img: '', desc: '状如龟而鸟首，能浊水。' },
  { name: '虎蛟', series: '凶兽', stars: 4, atk: 4200, def: 3900, skill: '虎蛟鱼尾', icon: '🐉', img: '', desc: '状似虎而鱼尾，能游泳。' },
  { name: '耳鼠', series: '凶兽', stars: 2, atk: 2200, def: 2800, skill: '耳鼠毒尾', icon: '🐭', img: '', desc: '状如鼠，兔首麋身，以尾飞。尾有毒。' },
  { name: '飞鼠', series: '凶兽', stars: 3, atk: 2800, def: 2600, skill: '飞鼠噬人', icon: '🐿️', img: '', desc: '状如鼠，飞于树间，能噬人。' },
  { name: '三足乌', series: '凶兽', stars: 4, atk: 3900, def: 3600, skill: '三足乌凶', icon: '🦅', img: '', desc: '三足乌也，日中之鸟。凶兆。' },
  { name: '酸与', series: '凶兽', stars: 4, atk: 3800, def: 3500, skill: '酸与见则', icon: '🐍', img: '', desc: '状如蛇而四翼，见则天下大恐。' },
  { name: '梁渠', series: '凶兽', stars: 4, atk: 3700, def: 3400, skill: '梁渠无爪', icon: '🐕', img: '', desc: '状如狗而无爪，能害人马。' },
  { name: '闻獜', series: '凶兽', stars: 4, atk: 4000, def: 3700, skill: '闻獜犬吠', icon: '🐕', img: '', desc: '状如犬而鱼目，音如犬吠。能行千里。' },
  { name: '诸怀', series: '凶兽', stars: 4, atk: 4100, def: 3800, skill: '诸怀鱼首', icon: '🦌', img: '', desc: '状如牛而四角，人目彘耳，音如猨吺。能害人。' },
  { name: '颙', series: '凶兽', stars: 4, atk: 3800, def: 3500, skill: '颙首人身', icon: '🦅', img: '', desc: '状如枭，人面四目而有耳。见则天下大旱。' },
  { name: '孰湖', series: '凶兽', stars: 4, atk: 3700, def: 3500, skill: '孰湖马身', icon: '🐴', img: '', desc: '状如马而鸟翼，人面蛇尾。能载人。' },
  { name: '驳', series: '凶兽', stars: 4, atk: 4000, def: 3800, skill: '驳食虎豹', icon: '🐴', img: '', desc: '状如马而白首，一目，纹如虎。能食虎豹。' },
  { name: '土蝼', series: '凶兽', stars: 4, atk: 3900, def: 4000, skill: '土蝼羊角', icon: '🐏', img: '', desc: '状如羊，四角，齿利。能穿地。' },
  { name: '天鹿', series: '凶兽', stars: 4, atk: 4100, def: 3900, skill: '天鹿能武', icon: '🦌', img: '', desc: '状如犬而一角，能武。' },
  { name: '猼訑', series: '凶兽', stars: 4, atk: 3800, def: 3600, skill: '猼訑十尾', icon: '🦌', img: '', desc: '状如羊，九尾四耳，目在背。佩之不恐。' },
  { name: '九尾狐', series: '凶兽', stars: 5, atk: 4200, def: 4000, skill: '九尾妖狐', icon: '🦊', img: '', desc: '青丘国有兽，其状如狐而九尾。声如婴儿，食人。' },
  { name: '狡', series: '凶兽', stars: 4, atk: 3900, def: 3700, skill: '狡狡多疑', icon: '🦊', img: '', desc: '状如犬而豹文，其角如牛。其名曰狡。见则其国大穰。' },
  { name: '天吴', series: '凶兽', stars: 5, atk: 4500, def: 4200, skill: '天吴八首', icon: '👹', img: '', desc: '八首八面，八足八尾，青黄。' },
  { name: '毛犊', series: '凶兽', stars: 4, atk: 3900, def: 3700, skill: '毛犊玄豹', icon: '🐆', img: '', desc: '玄豹也，能变化。' },
  { name: '蚊龙', series: '凶兽', stars: 4, atk: 4200, def: 3900, skill: '蚊龙无角', icon: '🐉', img: '', desc: '无角龙也，能致雨。' },
  { name: '马腹', series: '凶兽', stars: 4, atk: 4000, def: 3700, skill: '马腹人面', icon: '👤', img: '', desc: '状如马而人面，能食人。' },
  { name: '夫诸', series: '凶兽', stars: 4, atk: 3900, def: 4000, skill: '夫诸四角', icon: '🦌', img: '', desc: '状如牛而四角，奔见则天下大水。' },
  { name: '刑天', series: '凶兽', stars: 5, atk: 4500, def: 4200, skill: '刑天断首', icon: '⚔️', img: '', desc: '刑天与帝至此争神，帝断其首，葬之常羊之山。乃以乳为目，以脐为口，操干戚以舞。' },
  { name: '蚩尤', series: '凶兽', stars: 5, atk: 4700, def: 4500, skill: '蚩尤战魂', icon: '👹', img: '', desc: '蚩尤作兵伐黄帝。黄帝乃令应龙攻之冀州之野。与姜姓三国。' },
  { name: '共工', series: '凶兽', stars: 5, atk: 4600, def: 4400, skill: '共工怒触', icon: '💧', img: '', desc: '共工触不周山，天柱折，地维绝。' },
  { name: '祝融', series: '凶兽', stars: 5, atk: 4800, def: 4200, skill: '祝融火神', icon: '🔥', img: '', desc: '祝融兽身人面，乘两龙。火神也。' },
  { name: '夸父', series: '凶兽', stars: 5, atk: 4500, def: 4300, skill: '夸父逐日', icon: '🏃', img: '', desc: '夸父与日逐走，入日。渴欲得饮，饮于河渭。' },
  { name: '烛阴', series: '凶兽', stars: 5, atk: 4700, def: 4500, skill: '烛阴神龙', icon: '🐉', img: '', desc: '钟山之神也，人面龙身，一目。吹为冬，呼为夏。' },
  { name: '烛九阴', series: '凶兽', stars: 5, atk: 4800, def: 4600, skill: '九阴极寒', icon: '❄️', img: '', desc: '人面蛇身，赤色。睁眼为昼，闭眼为夜。' },
  { name: '钟山神', series: '凶兽', stars: 4, atk: 4200, def: 4400, skill: '钟山人面', icon: '👤', img: '', desc: '人面蛇身，遍体赤色。守钟山。' },
  { name: '夔', series: '凶兽', stars: 5, atk: 4700, def: 4500, skill: '夔牛独足', icon: '🐂', img: '', desc: '状如牛，苍身而无角，一足。出入水则必风雨，其声如雷。' },
  { name: '雷神', series: '凶兽', stars: 5, atk: 4800, def: 4400, skill: '雷神九天', icon: '⚡', img: '', desc: '雷泽中有雷神，龙首人头，鼓其腹而雷。' },
];

// 山海经卡牌数据 - 神灵篇 (~100张)
const DIVINE_GODS = [
  // 三皇五帝
  { name: '盘古', series: '三皇', stars: 5, atk: 5000, def: 5000, skill: '开天辟地', icon: '👤', img: '', desc: '天地混沌如鸡子，盘古生其中。万八千岁，天地开辟。阳清为天，阴浊为地。' },
  { name: '女娲', series: '三皇', stars: 5, atk: 4800, def: 4900, skill: '炼石补天', icon: '👩', img: '', desc: '女娲人头蛇身，一日七十变。炼五色石以补苍天。' },
  { name: '伏羲', series: '三皇', stars: 5, atk: 4700, def: 4800, skill: '八卦创世', icon: '☯️', img: '', desc: '伏羲人头蛇身，与女娲同具。始画八卦，造书契。' },
  { name: '神农', series: '三皇', stars: 5, atk: 4300, def: 4700, skill: '神农百草', icon: '🌿', img: '', desc: '神农人身牛首。始教民播种五谷，尝百草。' },
  { name: '黄帝', series: '五帝', stars: 5, atk: 4800, def: 4700, skill: '黄帝轩辕', icon: '👑', img: '', desc: '黄帝姓公孙，名轩辕。有土德之瑞，故号黄帝。' },
  { name: '颛顼', series: '五帝', stars: 5, atk: 4600, def: 4800, skill: '颛顼北帝', icon: '❄️', img: '', desc: '颛顼产子曰穷蝉。北方水德之帝。' },
  { name: '帝喾', series: '五帝', stars: 5, atk: 4500, def: 4700, skill: '帝喾俊德', icon: '👑', img: '', desc: '帝喾高辛者，黄帝之曾孙也。仁而惠。' },
  { name: '尧', series: '五帝', stars: 5, atk: 4400, def: 4800, skill: '尧舜禅让', icon: '👑', img: '', desc: '帝尧者，放勋。其仁如天，其知如神。' },
  { name: '舜', series: '五帝', stars: 5, atk: 4300, def: 4900, skill: '舜德服人', icon: '👑', img: '', desc: '帝舜名重华。父瞽叟顽，母嚚，弟象傲。能孝。' },
  { name: '禹', series: '五帝', stars: 5, atk: 4600, def: 5000, skill: '大禹治水', icon: '👑', img: '', desc: '禹鲧之子，名曰文命。身九尺二寸。治水十三年。' },
  
  // 上古神明
  { name: '东皇太一', series: '天神', stars: 5, atk: 4900, def: 4800, skill: '太一东皇', icon: '☀️', img: '', desc: '天神也，贵者太一。祠在楚东，故称东皇。' },
  { name: '西王母', series: '天神', stars: 5, atk: 4700, def: 4900, skill: '瑶池金母', icon: '👩', img: '', desc: '西王母其状如人，豹尾虎齿而善啸，蓬发戴胜。' },
  { name: '东王公', series: '天神', stars: 5, atk: 4800, def: 4700, skill: '扶桑大帝', icon: '👨', img: '', desc: '东王公也，木帝之精。居扶桑。' },
  { name: '帝俊', series: '天神', stars: 5, atk: 4900, def: 4800, skill: '帝俊天帝', icon: '👑', img: '', desc: '帝俊也，妻羲和、常羲。生十日十二月。' },
  { name: '常羲', series: '天神', stars: 5, atk: 4600, def: 4800, skill: '常羲生月', icon: '🌙', img: '', desc: '常羲也，帝俊之妻。月御。' },
  { name: '羲和', series: '天神', stars: 5, atk: 4700, def: 4700, skill: '羲和日母', icon: '☀️', img: '', desc: '羲和也，帝俊之妻。日之御。' },
  
  // 日月星辰
  { name: '太阳星君', series: '星辰', stars: 5, atk: 4800, def: 4600, skill: '太阳普照', icon: '☀️', img: '', desc: '太阳星君也，主照临六合。' },
  { name: '太阴星君', series: '星辰', stars: 5, atk: 4600, def: 4800, skill: '太阴清辉', icon: '🌙', img: '', desc: '太阴星君也，主清凉肃静。' },
  { name: '北极紫光大帝', series: '星辰', stars: 5, atk: 4700, def: 4900, skill: '紫微北极', icon: '⭐', img: '', desc: '紫微大帝也，执天经地纬。' },
  { name: '南极长生大帝', series: '星辰', stars: 5, atk: 4600, def: 4800, skill: '南极寿星', icon: '🌟', img: '', desc: '南极大帝也，主人寿。' },
  
  // 风伯雨师
  { name: '飞廉', series: '气象', stars: 4, atk: 4200, def: 4000, skill: '风伯飞廉', icon: '💨', img: '', desc: '飞廉也，风伯也。鹿身雀首，能致风气。' },
  { name: '屏翳', series: '气象', stars: 4, atk: 4000, def: 4200, skill: '雨师屏翳', icon: '🌧️', img: '', desc: '雨师也，屏翳。能兴云雨。' },
  { name: '雷神', series: '气象', stars: 5, atk: 4700, def: 4400, skill: '雷神九天', icon: '⚡', img: '', desc: '雷神也，乘龙行雨。' },
  { name: '电母', series: '气象', stars: 4, atk: 4300, def: 4100, skill: '电母闪电', icon: '⚡', img: '', desc: '电母也，掌闪电。' },
  
  // 山神水神
  { name: '河神', series: '水神', stars: 5, atk: 4500, def: 4700, skill: '河伯冯夷', icon: '💧', img: '', desc: '河神也，名冯夷。乘两龙。' },
  { name: '洛神', series: '水神', stars: 5, atk: 4400, def: 4600, skill: '洛神宓妃', icon: '💧', img: '', desc: '宓妃也，伏羲之女。溺于洛水。' },
  
  // 四方神灵
  { name: '东方青帝', series: '四方神', stars: 5, atk: 4600, def: 4700, skill: '青帝灵威', icon: '🟢', img: '', desc: '东方之帝也，青帝也。木德之帝。' },
  { name: '南方赤帝', series: '四方神', stars: 5, atk: 4700, def: 4500, skill: '赤帝祝融', icon: '🔴', img: '', desc: '南方之帝也，赤帝祝融。火德之帝。' },
  { name: '西方白帝', series: '四方神', stars: 5, atk: 4500, def: 4600, skill: '白帝蓐收', icon: '⚪', img: '', desc: '西方之帝也，白帝蓐收。金德之帝。' },
  { name: '北方黑帝', series: '四方神', stars: 5, atk: 4600, def: 4800, skill: '黑帝玄冥', icon: '⚫', img: '', desc: '北方之帝也，黑帝玄冥。水德之帝。' },
  { name: '中央黄帝', series: '四方神', stars: 5, atk: 4700, def: 4800, skill: '黄帝轩辕', icon: '🟡', img: '', desc: '中央之帝也，黄帝轩辕。土德之帝。' },
  
  // 上古圣贤
  { name: '后羿', series: '圣贤', stars: 5, atk: 4800, def: 4400, skill: '后羿射日', icon: '🏹', img: '', desc: '羿也，帝俊之臣。射九日。' },
  { name: '嫦娥', series: '圣贤', stars: 4, atk: 4200, def: 4600, skill: '嫦娥奔月', icon: '🌙', img: '', desc: '羿妻也，窃药奔月。' },
  { name: '精卫', series: '圣贤', stars: 3, atk: 3400, def: 3200, skill: '精卫填海', icon: '🐦', img: '', desc: '女娃也，帝之女。溺于东海，化为精卫。' },
  { name: '句芒', series: '木神', stars: 4, atk: 4000, def: 4300, skill: '句芒春神', icon: '🌳', img: '', desc: '木神也，司春。鸟身人面，乘两龙。' },
  { name: '祝融', series: '火神', stars: 5, atk: 4800, def: 4500, skill: '祝融火神', icon: '🔥', img: '', desc: '火神也，兽身人面，乘两龙。' },
  { name: '蓐收', series: '金神', stars: 4, atk: 4400, def: 4200, skill: '蓐收金神', icon: '⚪', img: '', desc: '金神也，左耳有蛇，乘两龙。司秋。' },
  { name: '玄冥', series: '水神', stars: 4, atk: 4200, def: 4500, skill: '玄冥水神', icon: '💧', img: '', desc: '水神也，龟背玄色。司冬。' },
  { name: '九天玄女', series: '战神', stars: 5, atk: 4700, def: 4500, skill: '玄女兵法', icon: '⚔️', img: '', desc: '玄女也，天女。授黄帝兵法。' },
  { name: '妈祖', series: '海神', stars: 5, atk: 4400, def: 4700, skill: '妈祖海神', icon: '🌊', img: '', desc: '海神也，林氏女。能保航行。' },
];

// 山海经卡牌数据 - 上古篇 (~80张)
const ANCIENT_CREATURES = [
  // 鲲鹏
  { name: '鲲', series: '上古', stars: 5, atk: 4500, def: 4800, skill: '鲲化为鹏', icon: '🐟', img: '', desc: '北冥有鱼，其名为鲲。鲲之大，不知其几千里也。' },
  { name: '鹏', series: '上古', stars: 5, atk: 4800, def: 4500, skill: '鹏程万里', icon: '🦅', img: '', desc: '化而为鸟，其名为鹏。鹏之背，不知其几千里也。怒而飞，其翼若垂天之云。' },
  { name: '大鹏金翅鸟', series: '上古', stars: 5, atk: 4900, def: 4600, skill: '金翅食龙', icon: '🦅', img: '', desc: '金翅鸟也，一日食龙五百。' },
  
  // 烛龙应龙
  { name: '烛龙', series: '上古', stars: 5, atk: 4900, def: 4700, skill: '烛龙睁眼', icon: '🐉', img: '', desc: '钟山之神也，烛龙。人面龙身，赤色。一目。吹为冬，呼为夏。' },
  { name: '应龙', series: '上古', stars: 5, atk: 4800, def: 4600, skill: '应龙斩蚩', icon: '🐉', img: '', desc: '应龙也，有翼龙。助黄帝斩蚩尤。' },
  { name: '夔龙', series: '上古', stars: 5, atk: 4700, def: 4600, skill: '夔龙单足', icon: '🐉', img: '', desc: '夔也，似龙而一足。' },
  
  // 上古凶兽
  { name: '混沌', series: '上古', stars: 5, atk: 4900, def: 4300, skill: '混沌无形', icon: '⚫', img: '', desc: '混沌也，状如犬，无面目。知声而不知名。' },
  { name: '穷奇', series: '上古', stars: 5, atk: 4800, def: 4200, skill: '穷奇翼虎', icon: '🐅', img: '', desc: '穷奇也，状如虎而有翼，食人。' },
  { name: '梼杌', series: '上古', stars: 5, atk: 4700, def: 4400, skill: '梼杌顽固', icon: '🦁', img: '', desc: '梼杌也，状如虎而毛高三尺，顽凶。' },
  { name: '饕餮', series: '上古', stars: 5, atk: 5000, def: 4000, skill: '饕餮贪食', icon: '🦴', img: '', desc: '饕餮也，羊身人面，目在腋下，贪食。' },
  
  // 上古神灵
  { name: '帝俊', series: '上古', stars: 5, atk: 4900, def: 4800, skill: '帝俊天帝', icon: '👑', img: '', desc: '帝俊也，天帝。上帝。' },
  { name: '帝舜', series: '上古', stars: 5, atk: 4600, def: 4900, skill: '帝舜禅让', icon: '👑', img: '', desc: '帝舜有虞也，禅让之圣帝。' },
  { name: '帝禹', series: '上古', stars: 5, atk: 4700, def: 5000, skill: '帝禹治水', icon: '👑', img: '', desc: '帝禹夏后也，治水之圣。' },
  
  // 上古圣贤
  { name: '盘古', series: '上古', stars: 5, atk: 5000, def: 5000, skill: '盘古开天', icon: '👤', img: '', desc: '盘古也，开天辟地之神。' },
  { name: '女娲', series: '上古', stars: 5, atk: 4800, def: 4900, skill: '女娲补天', icon: '👩', img: '', desc: '女娲也，补天造人之神。' },
  { name: '伏羲', series: '上古', stars: 5, atk: 4700, def: 4800, skill: '伏羲画卦', icon: '☯️', img: '', desc: '伏羲也，画卦造字之神。' },
  { name: '神农', series: '上古', stars: 5, atk: 4300, def: 4700, skill: '神农尝草', icon: '🌿', img: '', desc: '神农也，尝草播种之神。' },
  { name: '黄帝', series: '上古', stars: 5, atk: 4800, def: 4700, skill: '黄帝轩辕', icon: '👑', img: '', desc: '黄帝也，统一中华之神。' },
  { name: '蚩尤', series: '上古', stars: 5, atk: 4900, def: 4600, skill: '蚩尤九黎', icon: '👹', img: '', desc: '蚩尤也，九黎之君，勇猛善战。' },
  { name: '共工', series: '上古', stars: 5, atk: 4700, def: 4500, skill: '共工触山', icon: '💧', img: '', desc: '共工也，水神，触不周山。' },
  
  // 其他上古存在
  { name: '开明兽', series: '上古', stars: 5, atk: 4700, def: 4600, skill: '开明守门', icon: '🦁', img: '', desc: '开明兽也，九首人面，守昆仑之门。' },
  { name: '陆吾', series: '上古', stars: 5, atk: 4500, def: 4700, skill: '陆吾司天', icon: '🐅', img: '', desc: '陆吾也，人面虎爪，司天之九部。' },
  { name: '英招', series: '上古', stars: 4, atk: 4200, def: 4400, skill: '英招巡天', icon: '🦅', img: '', desc: '英招也，人面马身虎纹，巡天。' },
  { name: '计蒙', series: '上古', stars: 4, atk: 4100, def: 4300, skill: '计蒙行雨', icon: '🌧️', img: '', desc: '计蒙也，龙首人身，行雨。' },
  
  // 上古神兽
  { name: '白虎', series: '上古', stars: 5, atk: 4500, def: 4700, skill: '白虎西方', icon: '🐅', img: '', desc: '白虎也，西方之神。' },
  { name: '青龙', series: '上古', stars: 5, atk: 4600, def: 4800, skill: '青龙东方', icon: '🐉', img: '', desc: '青龙也，东方之神。' },
  { name: '朱雀', series: '上古', stars: 5, atk: 4700, def: 4600, skill: '朱雀南方', icon: '🦅', img: '', desc: '朱雀也，南方之火鸟。' },
  { name: '玄武', series: '上古', stars: 5, atk: 4400, def: 4900, skill: '玄武北方', icon: '🐢', img: '', desc: '玄武也，北方之龟蛇。' },
  
  // 上古凶兽
  { name: '相柳', series: '上古', stars: 5, atk: 4700, def: 4500, skill: '相柳九头', icon: '🐍', img: '', desc: '相柳也，九首蛇身，食于九山。' },
  { name: '九婴', series: '上古', stars: 5, atk: 4800, def: 4400, skill: '九婴九头', icon: '🐍', img: '', desc: '九婴也，水火之怪，九头。' },
  { name: '凿齿', series: '上古', stars: 4, atk: 4300, def: 4000, skill: '凿齿长齿', icon: '🦷', img: '', desc: '凿齿也，齿长三尺，啮人。' },
  { name: '猰貐', series: '上古', stars: 5, atk: 4600, def: 4400, skill: '猰貐龙首', icon: '👹', img: '', desc: '猰貐也，人面马足龙首，食人。' },
  
  // 更多上古
  { name: '帝江', series: '上古', stars: 5, atk: 4500, def: 4600, skill: '帝江混沌', icon: '⚫', img: '', desc: '帝江也，浑敦无面目，六足四翼。' },
  { name: '少昊', series: '上古', stars: 5, atk: 4500, def: 4700, skill: '少昊金天', icon: '👑', img: '', desc: '少昊也，金天氏。' },
  { name: '重', series: '上古', stars: 4, atk: 4000, def: 4300, skill: '重司天', icon: '👤', img: '', desc: '重也，司天之官。' },
  { name: '黎', series: '上古', stars: 4, atk: 4000, def: 4300, skill: '黎司地', icon: '👤', img: '', desc: '黎也，司地之官。' },
  { name: '羲和', series: '上古', stars: 5, atk: 4700, def: 4600, skill: '羲和日母', icon: '☀️', img: '', desc: '羲和也，日母，驾车。' },
  { name: '常羲', series: '上古', stars: 5, atk: 4600, def: 4700, skill: '常羲月母', icon: '🌙', img: '', desc: '常羲也，月母。' },
  { name: '夸父', series: '上古', stars: 5, atk: 4600, def: 4400, skill: '夸父逐日', icon: '🏃', img: '', desc: '夸父也，与日逐走。' },
  { name: '后羿', series: '上古', stars: 5, atk: 4800, def: 4500, skill: '后羿射日', icon: '🏹', img: '', desc: '后羿也，射九日。' },
  { name: '嫦娥', series: '上古', stars: 4, atk: 4200, def: 4600, skill: '嫦娥奔月', icon: '🌙', img: '', desc: '嫦娥也，奔月。' },
  { name: '刑天', series: '上古', stars: 5, atk: 4600, def: 4300, skill: '刑天舞戚', icon: '⚔️', img: '', desc: '刑天也，断首而舞。' },
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