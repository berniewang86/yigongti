const navItemsByRole = {
  manager: [
    { id: "dashboard", label: "运行驾驶舱", icon: "总", count: "" },
    { id: "referralHub", label: "转诊管理", icon: "转", count: "43" },
    { id: "careHub", label: "专病监管", icon: "专", count: "14" },
    { id: "doctors", label: "医生协同监管", icon: "医", count: "12" },
    { id: "collaboration", label: "协作结算", icon: "协", count: "18" },
    { id: "performance", label: "绩效医保", icon: "绩", count: "" },
    { id: "systemHub", label: "数据治理", icon: "数", count: "9" },
  ],
  doctor: [
    { id: "doctorHome", label: "我的工作台", icon: "工", count: "17" },
    { id: "doctorReferralHub", label: "我的转诊", icon: "转", count: "9" },
    { id: "doctorConsults", label: "会诊协作", icon: "会", count: "6" },
    { id: "doctorPatientHub", label: "我的患者", icon: "患", count: "128" },
    { id: "doctorLearning", label: "下沉带教", icon: "教", count: "4" },
    { id: "doctorCompensation", label: "协作服务", icon: "协", count: "5" },
  ],
  patient: [
    { id: "patientHome", label: "我的首页", icon: "首", count: "" },
    { id: "patientReferral", label: "我的转诊", icon: "转", count: "1" },
    { id: "patientAppointments", label: "预约就医", icon: "约", count: "2" },
    { id: "patientReports", label: "报告费用", icon: "报", count: "12" },
    { id: "patientFamilyDoctor", label: "家庭医生", icon: "家", count: "" },
    { id: "patientChronic", label: "慢病随访", icon: "慢", count: "3" },
    { id: "patientConsent", label: "知情授权", icon: "授", count: "1" },
  ],
};

const defaultPageByRole = {
  manager: "dashboard",
  doctor: "doctorHome",
  patient: "patientHome",
};

const navIconById = {
  dashboard: "gauge",
  referralHub: "send",
  careHub: "heart-pulse",
  systemHub: "database",
  referrals: "send",
  rules: "clipboard-shield",
  diseaseCatalog: "clipboard-list",
  referralStandards: "shield-check",
  chronic: "heart-pulse",
  doctors: "user-round-check",
  data: "database",
  emergency: "ambulance",
  performance: "chart-no-axes-combined",
  collaboration: "handshake",
  access: "shield-check",
  doctorHome: "briefcase-medical",
  doctorReferralHub: "send",
  doctorPatientHub: "users-round",
  doctorReferrals: "send",
  doctorRules: "clipboard-list",
  doctorConsults: "messages-square",
  doctorPatients: "users-round",
  doctorFollowups: "calendar-check",
  doctorLearning: "graduation-cap",
  doctorCompensation: "hand-coins",
  patientHome: "house",
  patientReferral: "send",
  patientAppointments: "calendar-days",
  patientReports: "file-text",
  patientFamilyDoctor: "stethoscope",
  patientChronic: "heart-pulse",
  patientConsent: "file-check-2",
};

const navIconPaths = {
  ambulance: '<path d="M10 17h4"/><path d="M3 17V8a2 2 0 0 1 2-2h8v11"/><path d="M13 9h5l3 4v4h-2"/><path d="M6 17H4"/><circle cx="7.5" cy="17.5" r="2.5"/><circle cx="16.5" cy="17.5" r="2.5"/><path d="M8 8v4"/><path d="M6 10h4"/>',
  "briefcase-medical": '<path d="M12 11v4"/><path d="M10 13h4"/><path d="M8 6V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1"/><path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',
  "calendar-check": '<path d="M8 2v4"/><path d="M16 2v4"/><path d="M3 10h18"/><path d="M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/><path d="m9 15 2 2 4-4"/>',
  "calendar-days": '<path d="M8 2v4"/><path d="M16 2v4"/><path d="M3 10h18"/><path d="M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/>',
  "chart-no-axes-combined": '<path d="M4 20V10"/><path d="M9 20V4"/><path d="M14 20v-7"/><path d="M19 20V7"/><path d="m4 10 5-6 5 9 5-6"/>',
  "clipboard-list": '<path d="M9 5h6"/><path d="M9 3h6a2 2 0 0 1 2 2v1H7V5a2 2 0 0 1 2-2Z"/><path d="M6 6H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-1"/><path d="M9 12h6"/><path d="M9 16h6"/><path d="M7 12h.01"/><path d="M7 16h.01"/>',
  "clipboard-shield": '<path d="M9 5h6"/><path d="M9 3h6a2 2 0 0 1 2 2v1H7V5a2 2 0 0 1 2-2Z"/><path d="M6 6H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h7"/><path d="M18 11 22 13v3c0 3-2 5-4 6-2-1-4-3-4-6v-3Z"/>',
  database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
  "file-check-2": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="m9 15 2 2 4-4"/>',
  "file-text": '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/><path d="M8 13h8"/><path d="M8 17h5"/>',
  gauge: '<path d="M3 13a9 9 0 1 1 18 0"/><path d="M5 19h14"/><path d="m13 11 4-4"/><circle cx="12" cy="12" r="1"/>',
  "graduation-cap": '<path d="M22 10 12 5 2 10l10 5Z"/><path d="M6 12v5c3 2 9 2 12 0v-5"/><path d="M22 10v6"/>',
  "hand-coins": '<path d="M11 15h2a2 2 0 0 0 0-4h-3c-.6 0-1.1.2-1.5.6L5 15"/><path d="m2 14 6 6 4-4"/><path d="M16 6.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/><path d="M20 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>',
  handshake: '<path d="m11 17 2 2a3 3 0 0 0 4 0l4-4"/><path d="m14 14 2 2"/><path d="m3 15 4 4a3 3 0 0 0 4 0l1-1"/><path d="M7 13h4l3-3a2 2 0 0 1 3 0l1 1"/><path d="M2 9l4-4 4 4"/><path d="M22 9l-4-4-4 4"/>',
  "heart-pulse": '<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z"/><path d="M3.2 12H8l2-3 3 6 2-3h5.8"/>',
  house: '<path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10"/><path d="M9 20v-6h6v6"/>',
  "messages-square": '<path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/><path d="M8 8h8"/><path d="M8 12h5"/>',
  send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  "shield-check": '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/>',
  stethoscope: '<path d="M6 3v6a4 4 0 0 0 8 0V3"/><path d="M10 13v3a4 4 0 0 0 8 0v-2"/><circle cx="20" cy="12" r="2"/><path d="M4 3h4"/><path d="M12 3h4"/>',
  "user-round-check": '<circle cx="10" cy="8" r="4"/><path d="M2 21a8 8 0 0 1 12.4-6.7"/><path d="m16 19 2 2 4-4"/>',
  "users-round": '<path d="M18 21a6 6 0 0 0-12 0"/><circle cx="12" cy="8" r="4"/><path d="M22 21a4.5 4.5 0 0 0-4-4.5"/><path d="M16 4.1a4 4 0 0 1 0 7.8"/><path d="M2 21a4.5 4.5 0 0 1 4-4.5"/><path d="M8 4.1a4 4 0 0 0 0 7.8"/>',
};

function navIcon(id, fallback) {
  const iconName = navIconById[id];
  const paths = navIconPaths[iconName];
  if (!paths) {
    return fallback;
  }
  return `<svg class="nav-svg" viewBox="0 0 24 24" aria-hidden="true">${paths}</svg>`;
}

const metrics = [
  { label: "县域内就诊率", value: "87.6%", detail: "较上月提升 3.2 个百分点", tone: "blue", icon: "内" },
  { label: "县外转诊率", value: "6.8%", detail: "不合理外转下降 18.4%", tone: "green", icon: "外" },
  { label: "今日基层上转", value: "126", detail: "县医院已接诊 93 人", tone: "amber", icon: "转" },
  { label: "慢病规范管理率", value: "78.4%", detail: "高血压、糖尿病重点覆盖", tone: "teal", icon: "管" },
];

const leaderKpis = [
  ["县域内就诊率", "87.6%", "年度目标 90%", "较上月 +3.2%", "县人民医院医共体运营中心", "持续提升基层首诊和县医院专科承接能力", "blue"],
  ["县外转诊率", "6.8%", "年度目标 ≤6%", "较上月 -1.4%", "转诊运营中心", "复核青山片区外转异常病种和转诊原因", "green"],
  ["基层规范上转率", "76.3%", "年度目标 85%", "较上月 +6.8%", "基层管理办公室", "完善病种规则和资料完整性校验", "amber"],
  ["慢病规范管理率", "78.4%", "年度目标 88%", "较上月 +4.1%", "慢病共管中心", "优先治理高危高血压和糖尿病随访断档", "teal"],
  ["医保费用控制率", "94.1%", "年度目标 ≥95%", "较上月 +1.2%", "医保协同办公室", "压降重复检查和不合理外转费用", "violet"],
];

const leaderActions = [
  ["青山片区外转异常", "县外转诊同比上升 12%，集中在神经内科和骨科。", "转诊运营中心", "本周完成病种复核", "red"],
  ["康宁养老中心资料缺项", "慢阻肺会诊材料缺少血气分析和既往用药。", "医生协同中心", "48 小时内完成补录", "amber"],
  ["重复胸部 CT 预警", "呼吸科 14 名患者 7 日内重复检查。", "质控科 / 医保办", "下周质控会复盘", "amber"],
  ["高危慢病随访断档", "38 名高危患者超过 30 天未随访。", "慢病共管中心", "今日下发基层任务", "red"],
];

const referralRules = [
  {
    disease: "胸痛 / 急性冠脉综合征风险",
    category: "必须上转",
    channel: "急救绿色通道",
    department: "心内科 / 胸痛中心",
    trigger: "持续胸痛、心电图 ST-T 改变、肌钙蛋白异常、休克或严重心律失常。",
    materials: "心电图、血压心率、发作时间、既往用药、肌钙蛋白或快速检测结果。",
    compensation: "可申请转诊前病情评估、资料整理上传、急症转诊衔接服务。",
    tone: "red",
  },
  {
    disease: "短暂性脑缺血发作 / 卒中风险",
    category: "必须上转",
    channel: "卒中绿色通道",
    department: "神经内科 / 卒中中心",
    trigger: "单侧肢体无力、言语不清、口角歪斜、短暂黑蒙、症状反复或 NIHSS 异常。",
    materials: "发病时间、FAST 评估、血压血糖、既往抗凝药、头颅 CT 如已完成。",
    compensation: "可申请风险评估、资料上传、绿色通道衔接服务。",
    tone: "red",
  },
  {
    disease: "糖尿病足风险",
    category: "会诊后上转",
    channel: "专病门诊优先",
    department: "内分泌科 / 血管外科",
    trigger: "足部破溃、感染、皮温降低、血糖控制差，基层处理 48 小时无改善。",
    materials: "伤口照片、血糖趋势、足背动脉情况、感染指标、既往用药。",
    compensation: "可申请病历整理、远程会诊协作、转诊衔接服务。",
    tone: "amber",
  },
  {
    disease: "慢阻肺急性加重",
    category: "会诊后上转",
    channel: "远程会诊优先",
    department: "呼吸与危重症医学科",
    trigger: "血氧持续低于 92%、呼吸困难加重、发热脓痰、合并心衰或意识改变。",
    materials: "SpO2、呼吸频率、血气分析、胸片或 CT、抗感染用药记录。",
    compensation: "可申请会诊协作和资料补全服务；急重症可转绿色通道。",
    tone: "amber",
  },
  {
    disease: "稳定高血压 / 2 型糖尿病",
    category: "留基层管理",
    channel: "家庭医生随访",
    department: "基层全科 / 慢病共管中心",
    trigger: "指标稳定、无急性并发症、无靶器官损害新发风险。",
    materials: "血压血糖记录、用药依从性、生活方式干预、年度检查结果。",
    compensation: "可申请慢病共管服务，不作为上转补偿。",
    tone: "green",
  },
  {
    disease: "脑卒中出院康复",
    category: "下转康复",
    channel: "基层康复随访",
    department: "康复医学科 / 家庭医生团队",
    trigger: "县医院急性期治疗完成，病情稳定，需要持续康复训练和用药管理。",
    materials: "出院小结、康复方案、用药清单、复诊计划、风险预警指标。",
    compensation: "可申请院后随访衔接和康复随访服务。",
    tone: "teal",
  },
];

const ruleStats = [
  ["必须上转病种", "8", "胸痛、卒中、创伤、危重孕产妇等"],
  ["会诊后上转病种", "12", "慢阻肺、糖尿病足、复杂感染等"],
  ["留基层管理病种", "26", "稳定慢病、普通感冒、轻症康复等"],
  ["资料完整率", "86%", "低于 80% 不进入协作服务结算"],
];

const referralDiseaseCatalog = [
  {
    code: "D-ACS-01",
    disease: "胸痛 / 急性冠脉综合征风险",
    layer: "急危重症",
    level: "一级",
    upward: "持续胸痛、心电图 ST-T 改变、肌钙蛋白异常，直接上转胸痛中心。",
    stay: "短暂胸闷且生命体征平稳，基层完成心电图和 2 小时复评。",
    downward: "PCI 或急性期评估完成后，下转家庭医生随访血压、用药和复诊。",
    materials: ["心电图", "血压心率", "发作时间", "既往用药", "肌钙蛋白"],
    performance: "2 小时到院、资料完整率 ≥90%，缺知情或心电图不入账。",
    owner: "心内科 / 胸痛中心",
    status: "启用",
    tone: "red",
  },
  {
    code: "D-STK-02",
    disease: "短暂性脑缺血发作 / 卒中风险",
    layer: "急危重症",
    level: "一级",
    upward: "FAST 阳性、NIHSS 异常或发病 6 小时内，进入卒中绿色通道。",
    stay: "症状已完全缓解且 CT 排除急症，可留基层观察并 24 小时复评。",
    downward: "急性期稳定后下转康复医学科和家庭医生团队执行康复计划。",
    materials: ["发病时间", "FAST 评估", "血压血糖", "抗凝用药", "头颅 CT"],
    performance: "绿色通道预审 ≤5 分钟，康复随访 48 小时内接续。",
    owner: "神经内科 / 卒中中心",
    status: "启用",
    tone: "red",
  },
  {
    code: "D-DFT-03",
    disease: "糖尿病足风险",
    layer: "慢病并发症",
    level: "二级",
    upward: "足部破溃感染、皮温降低或基层处理 48 小时无改善，会诊后上转。",
    stay: "轻度皮损且血糖可控，由基层换药、控糖和 72 小时照片复评。",
    downward: "专科清创或控感染稳定后，下转基层换药和血糖趋势管理。",
    materials: ["伤口照片", "血糖趋势", "足背动脉", "感染指标", "用药清单"],
    performance: "先会诊后上转；资料完整率 <80% 自动退回补充。",
    owner: "内分泌科 / 血管外科",
    status: "启用",
    tone: "amber",
  },
  {
    code: "D-COPD-04",
    disease: "慢阻肺急性加重",
    layer: "慢病急性加重",
    level: "二级",
    upward: "SpO2 低于 92%、血气异常、意识改变或合并心衰，会诊后上转。",
    stay: "轻中度咳痰加重且血氧稳定，基层氧疗、抗感染并远程复评。",
    downward: "急性期缓解后下转基层执行吸入药、氧疗和呼吸康复。",
    materials: ["SpO2", "呼吸频率", "血气分析", "胸片或 CT", "抗感染记录"],
    performance: "血气缺项不得结算会诊后上转服务；养老机构需护理记录。",
    owner: "呼吸与危重症医学科",
    status: "启用",
    tone: "amber",
  },
  {
    code: "D-HTN-05",
    disease: "稳定高血压 / 2 型糖尿病",
    layer: "基层首诊慢病",
    level: "三级",
    upward: "连续 7 日明显异常、出现靶器官损害或用药调整失败，专科评估。",
    stay: "指标稳定、无急性并发症，留基层家庭医生随访和慢病共管。",
    downward: "县医院完成方案调整后，回基层执行随访、用药教育和复查提醒。",
    materials: ["7 日指标", "用药依从性", "年度检查", "生活方式干预"],
    performance: "留基层管理不计上转补偿，按慢病规范管理质量计分。",
    owner: "基层全科 / 慢病共管中心",
    status: "启用",
    tone: "green",
  },
  {
    code: "D-RHB-06",
    disease: "脑卒中出院康复",
    layer: "院后康复",
    level: "三级",
    upward: "康复中出现吞咽风险、跌倒、血压异常或神经功能恶化，回流评估。",
    stay: "病情稳定，基层执行康复训练、用药核对和家庭照护指导。",
    downward: "县医院急性期治疗完成后，按康复方案下转基层连续管理。",
    materials: ["出院小结", "康复方案", "用药清单", "复诊计划", "预警指标"],
    performance: "下转 48 小时内建随访任务，7 日内完成首次康复记录。",
    owner: "康复医学科 / 家庭医生团队",
    status: "启用",
    tone: "teal",
  },
  {
    code: "D-OBS-07",
    disease: "危重孕产妇风险",
    layer: "重点人群",
    level: "一级",
    upward: "高血压、出血、胎动异常、重度贫血或早产风险，必须上转。",
    stay: "低风险孕产妇按公卫规范基层产检，异常指标触发上级复核。",
    downward: "产后稳定后回基层做产后访视、母乳喂养指导和心理筛查。",
    materials: ["孕周", "血压", "胎心胎动", "产检记录", "既往妊娠史"],
    performance: "高危标识必须同步妇幼专线；未上传产检记录不得关闭。",
    owner: "妇产科 / 妇幼保健科",
    status: "试运行",
    tone: "red",
  },
  {
    code: "D-TRA-08",
    disease: "创伤 / 疑似骨折",
    layer: "急诊创伤",
    level: "二级",
    upward: "开放伤、神经血管损伤、复合伤或影像提示复杂骨折，上转骨科。",
    stay: "单纯软组织损伤或稳定闭合骨折，基层固定、止痛并预约复查。",
    downward: "术后稳定后下转基层换药、功能训练和伤口感染预警。",
    materials: ["受伤时间", "影像资料", "神经血管评估", "处理记录"],
    performance: "影像互认优先；重复检查需说明，否则进入医保复核。",
    owner: "骨科 / 急诊医学科",
    status: "启用",
    tone: "amber",
  },
];

const referralStandardConfigs = [
  {
    name: "必须上转标准",
    scope: "急危重症、重点人群、绿色通道病种",
    trigger: "红色风险分层命中任一硬指标，系统不允许改为普通会诊。",
    path: "基层识别 → 资料快传 → 患者知情 → 转诊中心 5 分钟预审 → 县医院接收",
    materials: "生命体征、关键检查、发病时间、既往用药和联系人必须齐全。",
    performance: "到院时效、接收时效、资料完整率共同计分；诱导或缺项扣减。",
    owner: "转诊运营中心",
    status: "启用",
    tone: "red",
  },
  {
    name: "会诊后上转标准",
    scope: "慢病急性加重、临界病例、基层处理后未改善",
    trigger: "先由县医院专科回复会诊意见；专家建议上转后生成转诊草稿。",
    path: "基层申请会诊 → 专科回复 → 补齐资料 → 患者确认 → 专病门诊或住院接收",
    materials: "趋势数据、照片或影像、初步处理记录、专科会诊意见必带。",
    performance: "无会诊意见不得计入会诊后上转补偿；重复退回计入机构质控。",
    owner: "医务科 / 专科质控组",
    status: "启用",
    tone: "amber",
  },
  {
    name: "留基层管理标准",
    scope: "稳定慢病、轻症康复、普通门诊可处理病种",
    trigger: "风险分层为绿色或蓝色，且无急性并发症、无上转硬指标。",
    path: "基层首诊 → 家庭医生管理 → 指标复评 → 异常预警再进入会诊或上转",
    materials: "随访记录、用药依从性、年度检查或复评数据要结构化留痕。",
    performance: "不作为上转绩效；按规范管理率、复评及时率和患者满意度计分。",
    owner: "基层管理办公室",
    status: "启用",
    tone: "green",
  },
  {
    name: "下转康复标准",
    scope: "卒中、术后、心衰、慢阻肺、骨科康复等稳定出院患者",
    trigger: "县医院确认急性期结束，给出可执行的基层康复或随访方案。",
    path: "县医院回传方案 → 基层接收 → 48 小时随访 → 7 日康复记录 → 异常回流",
    materials: "出院小结、康复处方、用药清单、复诊计划和风险预警指标。",
    performance: "48 小时接续率、7 日首访率、方案执行率进入绩效；断档扣分。",
    owner: "康复医学科 / 家庭医生团队",
    status: "启用",
    tone: "teal",
  },
  {
    name: "资料完整性阈值",
    scope: "所有转诊、会诊、下转和协作服务申请",
    trigger: "系统提交前按病种清单自动校验，低于阈值进入待补资料。",
    path: "清单匹配 → 缺项提示 → 补录上传 → 再校验 → 通过后进入预审",
    materials: "急症 ≥90%，普通上转 ≥85%，会诊后上转 ≥80%，下转康复 ≥80%。",
    performance: "资料缺项不得进入结算；反复缺项纳入机构月度通报。",
    owner: "数据治理中心 / 转诊中心",
    status: "启用",
    tone: "blue",
  },
  {
    name: "绩效合规红线",
    scope: "协作服务、机构绩效、医保费用复核",
    trigger: "病种不匹配、患者未知情、短期高频、费用异常或投诉即触发复核。",
    path: "规则命中 → 风险预警 → 运营复核 → 退回/通过 → 绩效结算留痕",
    materials: "服务记录、转诊依据、患者授权、接收回执和闭环结果必须齐全。",
    performance: "不按人头和费用提成；只按真实服务、质量结果和闭环完成结算。",
    owner: "医保协同办公室 / 绩效办",
    status: "启用",
    tone: "violet",
  },
];

const upwardReferralPathways = [
  {
    id: "diabeticFoot",
    title: "基层普通上转",
    patient: "王志强",
    source: "西河社区卫生服务中心",
    doctor: "宋雨",
    target: "县人民医院内分泌科",
    disease: "糖尿病足风险",
    rule: "会诊后上转 / 专病门诊优先",
    priority: "中",
    compensation: "转诊前病情评估 + 病历资料整理上传",
    score: [20, 18, 20, 18, 16],
    requiredMaterials: ["伤口照片", "血糖趋势", "用药清单", "足背动脉情况", "感染指标"],
    steps: [
      ["基层识别", "乡镇卫生院发现足部破溃、血糖控制差，判断存在糖尿病足风险。"],
      ["规则匹配", "系统匹配糖尿病足规则：建议先会诊，符合条件后上转内分泌专病门诊。"],
      ["填写申请", "基层医生填写转诊申请，录入病情摘要、既往用药和初步处理情况。"],
      ["资料校验", "上传伤口照片、血糖趋势、用药清单和感染指标，资料完整率 92%。"],
      ["知情确认", "患者端确认转诊原因、可选机构和资料共享授权。"],
      ["转诊预审", "转诊中心审核病种规则、资料完整性和患者知情记录。"],
      ["科室接收", "县医院内分泌科接收，安排明日 10:30 糖尿病足专病门诊。"],
      ["闭环入账", "到诊后回传结果，基层医生获得规范协作服务绩效。"],
    ],
  },
  {
    id: "chestPain",
    title: "急症绿色通道",
    patient: "刘桂英",
    source: "城东镇卫生院",
    doctor: "周建国",
    target: "县人民医院心内科 / 胸痛中心",
    disease: "胸痛、冠心病风险",
    rule: "必须上转 / 急救绿色通道",
    priority: "急",
    compensation: "急症病情评估 + 绿色通道衔接",
    score: [20, 20, 20, 20, 18],
    requiredMaterials: ["心电图", "血压心率", "发作时间", "既往用药", "肌钙蛋白"],
    steps: [
      ["基层识别", "基层发现胸闷胸痛伴心电图 ST-T 改变，系统提示胸痛高风险。"],
      ["规则匹配", "系统匹配胸痛规则：必须上转，进入胸痛中心绿色通道。"],
      ["急症申请", "基层医生发起急症上转，标记绿色通道和预计到院时间。"],
      ["资料校验", "上传心电图、血压心率、发病时间、既往用药，资料完整率 96%。"],
      ["知情确认", "患者或家属确认急症转诊和病历资料共享。"],
      ["转诊预审", "转诊中心 5 分钟内预审，通知急诊、心内科和检查资源准备。"],
      ["科室接收", "心内科 / 胸痛中心接收，安排急诊优先评估和肌钙蛋白复查。"],
      ["到院确认", "患者到院后系统自动确认，急症上转闭环进入质控和绩效台账。"],
    ],
  },
  {
    id: "copd",
    title: "会诊后上转",
    patient: "赵国平",
    source: "康宁养老中心",
    doctor: "李松",
    target: "县人民医院呼吸与危重症医学科",
    disease: "慢阻肺急性加重",
    rule: "会诊后上转 / 远程会诊优先",
    priority: "高",
    compensation: "远程会诊协作 + 资料补全服务",
    score: [18, 20, 16, 14, 18],
    requiredMaterials: ["SpO2", "呼吸频率", "血气分析", "胸片或 CT", "抗感染用药记录"],
    steps: [
      ["机构识别", "养老机构发现患者 SpO2 90%、咳痰加重，触发慢阻肺加重预警。"],
      ["规则匹配", "系统匹配慢阻肺规则：先远程会诊，血气或意识异常时上转。"],
      ["发起会诊", "养老机构医生提交会诊申请，上传生命体征和护理记录。"],
      ["资料校验", "系统提示缺少血气分析，先进入待补充材料状态。"],
      ["专家会诊", "县医院呼吸科专家回复氧疗、抗感染和血气复查建议。"],
      ["复评决策", "血气结果异常，专家建议上转呼吸科住院评估。"],
      ["科室接收", "呼吸与危重症医学科接收，预留床位并同步转运建议。"],
      ["回传随访", "治疗后回传养老机构照护方案，进入院后随访和服务补偿审核。"],
    ],
  },
  {
    id: "chronicAlert",
    title: "慢病异常上转",
    patient: "张秀兰",
    source: "城东家庭医生团队",
    doctor: "周建国 / 村医刘敏",
    target: "县人民医院心内科 + 内分泌科联合评估",
    disease: "血压血糖连续异常",
    rule: "慢病恶化预警 / 专科评估",
    priority: "中",
    compensation: "慢病共管服务 + 异常上报评估",
    score: [18, 18, 20, 20, 20],
    requiredMaterials: ["7 日血压", "7 日血糖", "用药依从性", "症状记录", "家庭医生随访记录"],
    steps: [
      ["随访发现", "家庭医生连续 7 日发现血压、血糖异常，村医补充上门测量记录。"],
      ["规则匹配", "系统匹配慢病恶化规则：先基层干预，连续异常触发县医院专科评估。"],
      ["异常上报", "家庭医生提交慢病异常上报，附带血压血糖趋势和用药情况。"],
      ["资料校验", "系统校验 7 日指标、用药依从性和症状记录，资料完整率 95%。"],
      ["患者确认", "患者端确认同意专科评估和资料共享，家属同步收到提醒。"],
      ["专科预审", "转诊中心分配心内科和内分泌科联合评估。"],
      ["科室接收", "县医院专科接收，安排联合门诊并给出用药调整建议。"],
      ["基层共管", "方案回传家庭医生团队，继续随访并计入慢病共管服务绩效。"],
    ],
  },
];

const referrals = [
  {
    id: "R20260531091",
    patient: "刘桂英",
    sex: "女",
    age: 72,
    source: "城东镇卫生院",
    doctor: "周建国",
    target: "县人民医院心内科",
    disease: "胸闷、冠心病风险",
    priority: "急",
    status: "待接收",
    stage: "pending",
    time: "09:18",
    phone: "138****6721",
    insurance: "城乡居民医保",
    signs: "血压 168/96 mmHg，心电图 ST-T 改变",
    suggestion: "建议 2 小时内到县医院心内科绿色通道评估，优先安排心电图复查和肌钙蛋白。",
    bed: "心内科 18 床可用",
    timeline: [
      ["09:18", "基层医生发起上转", "城东镇卫生院上传心电图、既往用药和病情摘要。"],
      ["09:23", "转诊中心预审", "系统识别为胸痛高风险，进入急诊绿色通道候选。"],
      ["09:31", "待县医院确认", "等待心内科接诊医生确认接收。"],
    ],
  },
  {
    id: "R20260531084",
    patient: "王志强",
    sex: "男",
    age: 58,
    source: "西河社区卫生服务中心",
    doctor: "宋雨",
    target: "县人民医院内分泌科",
    disease: "糖尿病足风险",
    priority: "中",
    status: "已安排",
    stage: "arranged",
    time: "08:42",
    phone: "159****1038",
    insurance: "职工医保",
    signs: "空腹血糖 11.8 mmol/L，足背皮温低，伤口 1.6cm",
    suggestion: "明日 10:30 内分泌专病门诊，必要时血管外科联合评估。",
    bed: "门诊优先号源 1 个",
    timeline: [
      ["08:42", "基层医生发起上转", "上传血糖趋势和伤口照片。"],
      ["08:50", "县医院接收", "内分泌科确认接诊。"],
      ["09:05", "预约完成", "已锁定明日 10:30 专病门诊。"],
    ],
  },
  {
    id: "R20260531073",
    patient: "陈美兰",
    sex: "女",
    age: 66,
    source: "青山镇中心卫生院",
    doctor: "田敏",
    target: "县人民医院神经内科",
    disease: "短暂性脑缺血发作",
    priority: "急",
    status: "已接诊",
    stage: "accepted",
    time: "07:56",
    phone: "136****3409",
    insurance: "城乡居民医保",
    signs: "右侧肢体麻木 15 分钟缓解，既往高血压 12 年",
    suggestion: "已进入卒中中心评估，完成头颅 CT 和颈动脉彩超预约。",
    bed: "神经内科观察床",
    timeline: [
      ["07:56", "基层医生发起上转", "系统触发卒中风险提示。"],
      ["08:03", "县医院接收", "神经内科接诊医生确认。"],
      ["08:44", "患者到院", "卒中中心完成分诊。"],
    ],
  },
  {
    id: "R20260531061",
    patient: "赵国平",
    sex: "男",
    age: 81,
    source: "康宁养老中心",
    doctor: "李松",
    target: "县人民医院呼吸与危重症医学科",
    disease: "慢阻肺急性加重",
    priority: "高",
    status: "会诊中",
    stage: "consulting",
    time: "07:22",
    phone: "137****8816",
    insurance: "城乡居民医保",
    signs: "SpO2 90%，咳痰加重，夜间憋醒",
    suggestion: "先远程会诊评估氧疗和抗感染方案，必要时上转住院。",
    bed: "呼吸科 7 床可用",
    timeline: [
      ["07:22", "养老机构发起协同", "上传生命体征和护理记录。"],
      ["07:35", "呼吸科远程会诊", "专家建议氧疗、血气分析和炎症指标复查。"],
      ["08:10", "待复评", "根据血气结果决定是否上转。"],
    ],
  },
];

// AI pre-computed analysis per referral (keyed by referral ID)
const aiReferralData = {
  "R20260531091": {
    pathway: "急症绿色通道", confidence: 94,
    basis: "持续胸痛 >2h + ECG ST-T 改变 + 血压 168/96 mmHg，符合必须上转硬指标",
    extracted: [["患者","刘桂英 · 72 岁 · 女"],["主诉","胸闷约 2 小时，持续不缓解"],["血压","168/96 mmHg（收缩压超阈值）"],["心电图","ST-T 改变（已上传）"],["既往","高血压 5 年，阿司匹林 + 氨氯地平"]],
    materials: [
      { name:"心电图",         ok:true,  note:"09:32 已上传" },
      { name:"血压心率",       ok:true,  note:"168/96 mmHg" },
      { name:"既往用药",       ok:true,  note:"已确认" },
      { name:"肌钙蛋白",       ok:false, note:"未检测，急症先行可补传" },
      { name:"发病精确时间",   ok:false, note:"仅记录「约 2 小时」，需精确" },
    ],
    completeness: 60,
    suggestion: "资料完整率 60%，符合急症先行条件。建议立即提交预审，同时安排补传肌钙蛋白。急诊接诊时效优先，资料可边走边补。",
  },
  "R20260531084": {
    pathway: "会诊后上转", confidence: 88,
    basis: "糖尿病足伤口 1.6cm + 足背皮温低 + 血糖 11.8，需内分泌科专科评估",
    extracted: [["患者","王志强 · 58 岁 · 男"],["主诉","糖尿病足，伤口 1.6cm"],["血糖","空腹 11.8 mmol/L（7 天趋势上升）"],["伤口照片","今日已上传"],["既往","2 型糖尿病 8 年，胰岛素治疗"]],
    materials: [
      { name:"伤口照片",     ok:true,  note:"今日已上传" },
      { name:"血糖趋势",     ok:true,  note:"近 7 天数据完整" },
      { name:"用药清单",     ok:true,  note:"胰岛素方案已记录" },
      { name:"足背动脉检查", ok:false, note:"未记录，影响血管外科评估" },
      { name:"感染指标",     ok:false, note:"缺 CRP/WBC，无法判断感染程度" },
    ],
    completeness: 60,
    suggestion: "建议先申请内分泌科远程会诊，补充足背动脉和感染指标后再提交上转预审，可提高接收成功率。",
  },
  "R20260531073": {
    pathway: "急症绿色通道", confidence: 96,
    basis: "TIA 发作 + 高血压史 12 年，发病 6 小时内，FAST 评估阳性",
    extracted: [["患者","陈美兰 · 66 岁 · 女"],["主诉","右侧肢体麻木 15 分钟，已缓解"],["血压","既往高血压 12 年"],["FAST","评估阳性（已记录）"],["既往","高血压，规律服药"]],
    materials: [
      { name:"FAST 评估",   ok:true,  note:"已记录" },
      { name:"血压血糖",    ok:true,  note:"已测量" },
      { name:"发病时间",    ok:true,  note:"07:56 精确记录" },
      { name:"头颅 CT",     ok:false, note:"基层未做，县医院接诊后优先安排" },
      { name:"抗凝用药",    ok:false, note:"未确认当前用药情况" },
    ],
    completeness: 60,
    suggestion: "已达卒中绿色通道标准，头颅 CT 可到院后立即安排。建议立即提交，时间窗口关键。",
  },
  "R20260531061": {
    pathway: "会诊后上转", confidence: 82,
    basis: "慢阻肺急性加重 + SpO2 90%，当前正在会诊评估中",
    extracted: [["患者","赵国平 · 81 岁 · 男"],["主诉","咳痰加重，SpO2 90%，夜间憋醒"],["血氧","SpO2 90%（触发上转指征）"],["护理记录","养老机构已记录"],["既往","慢阻肺，长期氧疗"]],
    materials: [
      { name:"SpO2 记录",     ok:true,  note:"持续监测 90%" },
      { name:"护理记录",      ok:true,  note:"养老机构已上传" },
      { name:"血气分析",      ok:false, note:"会诊专家已要求补充" },
      { name:"既往抗感染方案", ok:false, note:"用药记录不完整" },
      { name:"胸片或 CT",     ok:false, note:"基层未做" },
    ],
    completeness: 40,
    suggestion: "资料完整率较低，当前会诊专家已要求补充血气分析，建议等会诊回复后决定是否上转。",
  },
};

// AI chronic disease risk analysis (pre-computed scores)
const aiChronicRisk = [
  { name:"张秀兰", disease:"高血压合并糖尿病", score:89, level:"high", eta:"预计 2 周内恶化",
    reason:"血压连续 5 天 ≥160，用药依从率仅 60%，血糖控制欠佳",
    action:"今日安排随访，评估是否需要调整降压方案，联系家庭医生上门测量" },
  { name:"孙桂芝", disease:"慢阻肺", score:85, level:"high", eta:"血氧预警",
    reason:"间歇性 SpO2 <90%，夜间症状加重，已触发上转指征",
    action:"联系呼吸科安排远程会诊，评估是否需要紧急上转" },
  { name:"马建军", disease:"冠心病术后", score:61, level:"mid", eta:"复查窗口期",
    reason:"术后第 45 天，进入 6 周关键复查期，尚未预约复诊",
    action:"确认下周复诊预约，核对抗血小板药物依从性" },
  { name:"周德明", disease:"脑卒中康复", score:52, level:"mid", eta:"康复评估缺录",
    reason:"康复评估记录缺失 10 天，无法判断当前功能状态",
    action:"联系村医补录康复打卡数据，安排本周评估" },
  { name:"李文华", disease:"2 型糖尿病", score:18, level:"low", eta:"指标稳定",
    reason:"近 30 天血糖达标率 89%，用药规律，无并发症预警",
    action:"按计划管理，下次随访按周期安排" },
];

// AI pre-computed consult drafts (keyed by "科室-患者")
const aiConsultDrafts = {
  "心内科-刘桂英": {
    recommendation: "建议上转",
    urgency: "高",
    draft: "患者刘桂英，72岁女性，持续胸闷约2小时，心电图ST-T改变，血压168/96mmHg，既往高血压5年规律用药。符合急性冠脉综合征高危标准，建议立即进入急症绿色通道上转心内科/胸痛中心，携带心电图原件，优先安排肌钙蛋白检测。",
    keyPoints: ["ST-T改变已确认", "血压超标（168/96）", "发病2小时内", "肌钙蛋白待检"],
  },
  "呼吸科-赵国平": {
    recommendation: "先留观待血气",
    urgency: "中",
    draft: "患者赵国平，81岁男性，慢阻肺基础，当前SpO2持续90%，咳痰加重，夜间憋醒。属AECOPD中度加重，建议先氧疗（鼻导管2-3L/min）联合广谱抗感染，24小时内复查血气。若PaO2<60mmHg或PaCO2升高，立即安排上转呼吸与危重症医学科。",
    keyPoints: ["SpO2 90%（临界）", "养老机构条件有限", "须血气后决策", "高龄转运风险需评估"],
  },
  "内分泌科-王志强": {
    recommendation: "专病门诊上转",
    urgency: "中",
    draft: "患者王志强，58岁男性，2型糖尿病8年，足部破溃1.6cm，血糖11.8mmol/L控制不佳，足背皮温低。初步判断糖尿病足Wagner II级，建议转内分泌科专病门诊，必要时联合血管外科评估动脉血流。转诊前请补充足背动脉触诊记录和CRP/WBC感染指标。",
    keyPoints: ["Wagner II级", "联合血管外科评估", "血糖需进一步控制", "感染指标仍缺失"],
  },
  "神经内科-陈美兰": {
    recommendation: "继续基层随访",
    urgency: "低",
    draft: "患者陈美兰TIA急性期处理完成，已接诊并稳定。建议回传基层执行院后方案：①启动阿司匹林100mg/日抗血小板治疗；②血压目标<140/90mmHg；③48小时内基层随访用药依从性；④1个月后复查颈动脉彩超。",
    keyPoints: ["急性期处理完成", "抗血小板方案已给出", "血压控制目标明确", "1月后颈动脉复查"],
  },
};

// AI pre-computed referral anomaly detections
const aiReferralAnomalies = [
  {
    id: "anom-1", level: "high",
    title: "城东镇卫生院胸痛转诊异常集中",
    detail: "本周胸痛转诊12单，较历史基线（周均4.3单）增长179%，超出2.3倍标准差",
    institution: "城东镇卫生院", disease: "胸痛 / 冠心病风险",
    baseline: "周均 4.3 单", current: "本周 12 单", changeRate: "+179%",
    riskType: "疑似季节性高峰或诱导转诊",
    action: "建议复核病种匹配率和患者知情记录", supervisable: true,
  },
  {
    id: "anom-2", level: "mid",
    title: "糖尿病足转诊资料缺项率偏高",
    detail: "近30天糖尿病足上转中，55%缺少足背动脉触诊记录，影响血管外科接收决策",
    institution: "多机构", disease: "糖尿病足",
    baseline: "目标缺项率 <15%", current: "实际55%", changeRate: "+40个百分点",
    riskType: "资料质量缺陷，影响接收效率",
    action: "建议开展基层糖尿病足资料采集培训", supervisable: false,
  },
  {
    id: "anom-3", level: "mid",
    title: "康宁养老中心重复会诊率偏高",
    detail: "同一患者30天内会诊≥3次的比例达38%，远高于全县12%均值",
    institution: "康宁养老中心", disease: "慢阻肺 / 复合慢病",
    baseline: "全县均值 12%", current: "38%", changeRate: "+26个百分点",
    riskType: "会诊路径不规范或处置能力不足",
    action: "建议安排专科下沉带教，提升机构首次处置能力", supervisable: true,
  },
];

// P2-1: Patient-friendly status explanations
const aiStatusExplanations = {
  "09:18": {
    plain: "您的家庭医生已帮您发起转诊，心电图和用药记录已一起发过去了。",
    next: "不需要您做任何事，等待县医院确认接收即可。",
    tone: "blue",
  },
  "09:23": {
    plain: "转诊中心审核了您的病情，认为需要尽快处理，已进入优先通道。",
    next: "等待心内科医生确认接收，通常在 15 分钟内完成。",
    tone: "amber",
  },
  "09:31": {
    plain: "心内科医生已确认接收您，已经知道您要来了。",
    next: "今日 10:20 前到院，直接前往急诊胸痛中心，报您的姓名即可，不需要排队挂号。",
    tone: "green",
  },
  "10:20": {
    plain: "这是您到院就诊的步骤。",
    next: "携带医保电子凭证（手机即可）、身份证和现用药，告诉门口导诊「转诊来的」。",
    tone: "green",
  },
  "出院后": {
    plain: "就诊完成后，医生的诊疗方案会发回给您的家庭医生，继续跟踪您的情况。",
    next: "家庭医生会联系您安排复诊或用药调整，您不需要主动联系。",
    tone: "teal",
  },
};

// P2-2: BP trend data for chronic feedback
const bpTrendHistory = [
  { date: "5天前", val: "156/94" },
  { date: "4天前", val: "152/90" },
  { date: "3天前", val: "148/88" },
  { date: "2天前", val: "144/87" },
  { date: "昨日",  val: "142/86" },
  { date: "今日",  val: "138/84" },
];

// P2-3: Missing data source map for inference
const aiMissingSourceMap = {
  "肌钙蛋白":       { source: "县人民医院 LIS 可同步", priority: "high",  impact: "影响急症转诊合规结算" },
  "血气分析":       { source: "县人民医院检验科 LIS",   priority: "high",  impact: "影响会诊后上转资格审核" },
  "足背动脉触诊":   { source: "基层医生补录",           priority: "mid",   impact: "影响糖尿病足转诊接收率" },
  "足背动脉情况":   { source: "基层医生补录",           priority: "mid",   impact: "影响糖尿病足转诊接收率" },
  "FAST 评估":      { source: "基层护理记录补录",       priority: "high",  impact: "影响卒中绿色通道预审" },
  "下肢血管彩超":   { source: "基层检查或县医院互认",   priority: "mid",   impact: "影响血管外科接收决策" },
  "动态心电图":     { source: "县人民医院心电室",       priority: "mid",   impact: "影响心内科会诊结论" },
  "营养评分":       { source: "养老机构护理团队录入",   priority: "mid",   impact: "影响老年医学会诊质量" },
  "康复评估记录":   { source: "村医上门评估录入",       priority: "low",   impact: "影响院后随访绩效计算" },
  "晚间血糖":       { source: "患者自报或家属代录",     priority: "low",   impact: "影响慢病共管数据质量" },
  "家属知情确认":   { source: "患者端或家属微信确认",   priority: "high",  impact: "影响会诊后上转知情合规" },
  "患者端知情确认": { source: "患者端授权页面",         priority: "high",  impact: "影响转诊知情合规结算" },
  "震颤评分":       { source: "村医随访录入",           priority: "low",   impact: "影响慢病随访质量得分" },
};


const institutionScores = [
  ["城东镇卫生院", "34", "92%", "87%", "96%", "91"],
  ["西河社区卫生服务中心", "28", "88%", "91%", "94%", "89"],
  ["青山镇中心卫生院", "31", "85%", "78%", "92%", "83"],
  ["康宁养老中心", "9", "76%", "69%", "88%", "74"],
  ["仁和民营医院", "17", "81%", "72%", "90%", "78"],
];

const integrations = [
  ["县人民医院 HIS/EMR", "门诊、住院、诊断、医嘱", "97", "已接入"],
  ["县人民医院 LIS/PACS", "检验、影像、心电报告", "94", "已接入"],
  ["基层公卫系统", "慢病档案、随访、家医签约", "82", "清洗中"],
  ["医保结算系统", "费用、病种、基金支出", "88", "联调中"],
  ["民营机构门诊系统", "就诊记录、转诊回执", "71", "分批接入"],
  ["养老机构照护系统", "护理记录、生命体征", "69", "试点中"],
];

const doctorTodo = [
  ["09:20", "刘桂英", "胸闷、冠心病风险", "待县医院确认接收", "red"],
  ["10:30", "王志强", "糖尿病足风险", "已安排专病门诊", "green"],
  ["11:00", "赵国平", "慢阻肺急性加重", "呼吸科会诊待复评", "amber"],
  ["14:30", "张秀兰", "高血压合并糖尿病", "今日随访待完成", "teal"],
];

const doctorPatients = [
  ["刘桂英", "72 岁", "胸痛上转", "城东镇卫生院", "本次转诊授权", "急"],
  ["王志强", "58 岁", "糖尿病足风险", "西河社区卫生服务中心", "慢病共管授权", "中"],
  ["陈美兰", "66 岁", "短暂性脑缺血发作", "青山镇中心卫生院", "卒中通道授权", "急"],
  ["张秀兰", "70 岁", "高血压合并糖尿病", "西河社区卫生服务中心", "家庭医生签约", "高危"],
  ["李文华", "62 岁", "2 型糖尿病", "青山镇中心卫生院", "慢病随访授权", "稳定"],
];

const patientDatabase = [
  {
    id: "P001",
    name: "刘桂英",
    sex: "女",
    age: 72,
    phone: "138****6721",
    idMasked: "3426**********2147",
    township: "城东镇",
    institution: "城东镇卫生院",
    sourceLevel: "乡镇卫生院",
    familyDoctor: "周建国",
    countyDoctor: "王强",
    disease: "胸闷、冠心病风险",
    targetDept: "县人民医院心内科 / 胸痛中心",
    referralType: "急症绿色通道",
    status: "待县医院接收",
    stage: "pending",
    risk: "急",
    priority: "急",
    taskGroup: "急症上转",
    taskTitle: "待县医院确认接收",
    queueTime: "09:20",
    waitMinutes: 12,
    followupStatus: "待完成",
    consultStatus: "已回复",
    consent: "已授权",
    insurance: "城乡居民医保",
    materials: ["心电图", "血压心率", "既往用药", "病情摘要"],
    missing: ["肌钙蛋白"],
    lastAction: "基层已上传心电图和血压记录，系统匹配胸痛规则。",
    nextAction: "心内科确认接收，基层补传快速肌钙蛋白结果。",
    vitals: "BP 168/96 mmHg，胸闷 2 小时，ST-T 改变",
    summary: "急症上转患者，县医院应优先确认胸痛中心绿色通道。",
    workbench: true,
    timeline: ["09:18 发起上转", "09:23 转诊中心预审", "09:31 等待心内科接收"],
  },
  {
    id: "P002",
    name: "王志强",
    sex: "男",
    age: 58,
    phone: "159****1038",
    idMasked: "3426**********9812",
    township: "西河社区",
    institution: "西河社区卫生服务中心",
    sourceLevel: "社区卫生服务中心",
    familyDoctor: "宋雨",
    countyDoctor: "陈静",
    disease: "糖尿病足风险",
    targetDept: "县人民医院内分泌科",
    referralType: "基层普通上转",
    status: "已安排专病门诊",
    stage: "arranged",
    risk: "中",
    priority: "中",
    taskGroup: "规范上转",
    taskTitle: "已安排专病门诊",
    queueTime: "10:30",
    waitMinutes: 0,
    followupStatus: "待完成",
    consultStatus: "已回复",
    consent: "已授权",
    insurance: "职工医保",
    materials: ["伤口照片", "血糖趋势", "用药清单", "感染指标"],
    missing: ["足背动脉情况"],
    lastAction: "内分泌科已确认明日 10:30 专病门诊。",
    nextAction: "基层补齐足背动脉触诊记录，患者按预约到院。",
    vitals: "空腹血糖 11.8 mmol/L，足部破溃 1.6cm",
    summary: "糖尿病足风险上转，已进入专病门诊闭环。",
    workbench: true,
    timeline: ["08:42 发起上转", "08:50 县医院接收", "09:05 门诊预约完成"],
  },
  {
    id: "P003",
    name: "赵国平",
    sex: "男",
    age: 81,
    phone: "137****8816",
    idMasked: "3426**********3301",
    township: "城北街道",
    institution: "康宁养老中心",
    sourceLevel: "养老机构",
    familyDoctor: "李松",
    countyDoctor: "何磊",
    disease: "慢阻肺急性加重",
    targetDept: "县人民医院呼吸与危重症医学科",
    referralType: "会诊后上转",
    status: "会诊中",
    stage: "consulting",
    risk: "高",
    priority: "高",
    taskGroup: "会诊复评",
    taskTitle: "呼吸科会诊待复评",
    queueTime: "11:00",
    waitMinutes: 18,
    followupStatus: "待完成",
    consultStatus: "待复评",
    consent: "已授权",
    insurance: "城乡居民医保",
    materials: ["SpO2", "呼吸频率", "护理记录", "胸片"],
    missing: ["血气分析", "抗感染用药记录"],
    lastAction: "养老机构发起远程会诊，呼吸科建议补做血气分析。",
    nextAction: "补齐血气后由县医院呼吸科决定是否上转住院。",
    vitals: "SpO2 90%，呼吸困难加重，夜间憋醒",
    summary: "养老机构高危患者，先会诊再决定上转，避免盲目转运。",
    workbench: true,
    timeline: ["07:22 发起会诊", "07:35 专家初步回复", "08:10 等待血气复评"],
  },
  {
    id: "P004",
    name: "张秀兰",
    sex: "女",
    age: 70,
    phone: "136****7950",
    idMasked: "3426**********4276",
    township: "西河社区",
    institution: "城东家庭医生团队",
    sourceLevel: "家庭医生团队",
    familyDoctor: "刘敏",
    countyDoctor: "陈静 / 王强",
    disease: "高血压合并糖尿病",
    targetDept: "县人民医院心内科 + 内分泌科",
    referralType: "慢病异常上转",
    status: "专科评估待确认",
    stage: "pending",
    risk: "高危",
    priority: "中",
    taskGroup: "慢病异常",
    taskTitle: "今日随访待完成",
    queueTime: "14:30",
    waitMinutes: 25,
    followupStatus: "待完成",
    consultStatus: "无",
    consent: "待确认",
    insurance: "城乡居民医保",
    materials: ["7 日血压", "7 日血糖", "用药记录", "随访记录"],
    missing: ["患者端知情确认"],
    lastAction: "家庭医生发现连续 7 日血压血糖异常。",
    nextAction: "完成患者知情后提交县医院联合专科评估。",
    vitals: "晨间血压 162/94 mmHg，空腹血糖 10.9 mmol/L",
    summary: "慢病异常触发上转评估，重点是持续共管而不是一次性转诊。",
    workbench: true,
    timeline: ["连续 7 日异常", "村医上门复测", "待患者确认授权"],
  },
  {
    id: "P005",
    name: "陈美兰",
    sex: "女",
    age: 66,
    phone: "136****3409",
    idMasked: "3426**********8842",
    township: "青山镇",
    institution: "青山镇中心卫生院",
    sourceLevel: "乡镇中心卫生院",
    familyDoctor: "田敏",
    countyDoctor: "赵凯",
    disease: "短暂性脑缺血发作",
    targetDept: "县人民医院神经内科 / 卒中中心",
    referralType: "急症绿色通道",
    status: "已接诊",
    stage: "accepted",
    risk: "急",
    priority: "急",
    taskGroup: "院后回传",
    taskTitle: "48 小时随访待确认",
    queueTime: "08:10",
    waitMinutes: 0,
    followupStatus: "已完成",
    consultStatus: "已回复",
    consent: "已授权",
    insurance: "城乡居民医保",
    materials: ["FAST 评估", "血压血糖", "头颅 CT", "既往用药"],
    missing: [],
    lastAction: "卒中中心已接诊并回传观察结果。",
    nextAction: "基层完成 48 小时随访和用药依从性确认。",
    vitals: "右侧肢体麻木 15 分钟缓解，血压 156/90 mmHg",
    summary: "卒中风险患者已接诊，基层端主要承接院后随访。",
    workbench: true,
    timeline: ["07:56 发起上转", "08:03 神经内科接收", "08:44 患者到院"],
  },
  {
    id: "P006",
    name: "马建军",
    sex: "男",
    age: 64,
    phone: "139****5208",
    idMasked: "3426**********7763",
    township: "城东镇",
    institution: "城东镇卫生院",
    sourceLevel: "乡镇卫生院",
    familyDoctor: "周建国",
    countyDoctor: "王强",
    disease: "冠心病术后胸闷",
    targetDept: "县人民医院心内科",
    referralType: "基层普通上转",
    status: "待县医院接收",
    stage: "pending",
    risk: "中",
    priority: "中",
    taskGroup: "规范上转",
    taskTitle: "待心内科接收",
    queueTime: "09:45",
    waitMinutes: 21,
    followupStatus: "待完成",
    consultStatus: "无",
    consent: "已授权",
    insurance: "职工医保",
    materials: ["心电图", "用药清单", "血压记录"],
    missing: ["肌钙蛋白"],
    lastAction: "基层评估后发起心内科上转。",
    nextAction: "补传肌钙蛋白并提醒心内科接收。",
    vitals: "胸闷间断发作，心率 96 次/分",
    summary: "普通上转待接收，当前主要阻塞点是检验资料缺项。",
    workbench: true,
    timeline: ["09:45 发起申请", "09:52 资料校验", "10:01 等待接收"],
  },
  {
    id: "P007",
    name: "孙桂芝",
    sex: "女",
    age: 76,
    phone: "158****4490",
    idMasked: "3426**********0915",
    township: "城北街道",
    institution: "康宁养老中心",
    sourceLevel: "养老机构",
    familyDoctor: "李松",
    countyDoctor: "何磊",
    disease: "慢阻肺血氧异常",
    targetDept: "县人民医院呼吸与危重症医学科",
    referralType: "会诊后上转",
    status: "会诊后建议上转",
    stage: "consulting",
    risk: "高",
    priority: "高",
    taskGroup: "会诊复评",
    taskTitle: "待家属确认转运",
    queueTime: "10:10",
    waitMinutes: 8,
    followupStatus: "待完成",
    consultStatus: "已回复",
    consent: "家属待确认",
    insurance: "城乡居民医保",
    materials: ["SpO2", "胸片", "用药记录", "护理记录"],
    missing: ["家属知情确认"],
    lastAction: "呼吸科专家建议上转住院评估。",
    nextAction: "养老机构联系家属确认并安排转运。",
    vitals: "SpO2 88%-91%，咳痰黄稠",
    summary: "会诊后转诊，重点是家属知情和转运安全。",
    workbench: true,
    timeline: ["10:10 会诊提交", "10:18 专家回复", "10:26 待家属确认"],
  },
  {
    id: "P008",
    name: "李文华",
    sex: "男",
    age: 62,
    phone: "151****6820",
    idMasked: "3426**********6032",
    township: "青山镇",
    institution: "青山镇中心卫生院",
    sourceLevel: "乡镇中心卫生院",
    familyDoctor: "田敏",
    countyDoctor: "陈静",
    disease: "2 型糖尿病",
    targetDept: "基层慢病共管",
    referralType: "留基层管理",
    status: "基层管理中",
    stage: "followup",
    risk: "稳定",
    priority: "低",
    taskGroup: "慢病随访",
    taskTitle: "本周随访已完成",
    queueTime: "10:40",
    waitMinutes: 0,
    followupStatus: "已完成",
    consultStatus: "无",
    consent: "已授权",
    insurance: "城乡居民医保",
    materials: ["血糖记录", "用药依从性", "生活方式记录"],
    missing: [],
    lastAction: "家庭医生完成本周随访。",
    nextAction: "下周复测空腹血糖并继续基层管理。",
    vitals: "空腹血糖 7.2 mmol/L，餐后血糖 9.1 mmol/L",
    summary: "稳定慢病患者，系统不鼓励不必要上转。",
    workbench: true,
    timeline: ["本周随访完成", "用药依从性良好", "下周复测"],
  },
  {
    id: "P009",
    name: "周德明",
    sex: "男",
    age: 69,
    phone: "135****2391",
    idMasked: "3426**********1169",
    township: "城北村",
    institution: "城北村卫生室",
    sourceLevel: "村卫生室",
    familyDoctor: "刘敏",
    countyDoctor: "赵凯",
    disease: "脑卒中出院康复",
    targetDept: "基层康复随访",
    referralType: "下转康复",
    status: "待基层随访",
    stage: "followup",
    risk: "中",
    priority: "中",
    taskGroup: "院后随访",
    taskTitle: "康复评估待录入",
    queueTime: "13:30",
    waitMinutes: 0,
    followupStatus: "待完成",
    consultStatus: "无",
    consent: "已授权",
    insurance: "城乡居民医保",
    materials: ["出院小结", "康复方案", "用药清单"],
    missing: ["康复评估记录"],
    lastAction: "县医院神经内科回传康复方案。",
    nextAction: "村医上门评估并录入肌力、吞咽和用药情况。",
    vitals: "左侧肢体乏力，需康复训练",
    summary: "下转康复闭环，基层随访质量将反向计入绩效。",
    workbench: true,
    timeline: ["出院方案回传", "随访任务生成", "待村医上门"],
  },
  {
    id: "P010",
    name: "胡玉梅",
    sex: "女",
    age: 73,
    phone: "152****8196",
    idMasked: "3426**********5098",
    township: "青山镇",
    institution: "仁和民营医院",
    sourceLevel: "民营医院",
    familyDoctor: "顾晓",
    countyDoctor: "赵凯",
    disease: "头晕伴短暂言语不清",
    targetDept: "县人民医院神经内科",
    referralType: "会诊后上转",
    status: "资料补充中",
    stage: "pending",
    risk: "高",
    priority: "高",
    taskGroup: "待补资料",
    taskTitle: "补充 FAST 评估和血糖",
    queueTime: "11:20",
    waitMinutes: 15,
    followupStatus: "待完成",
    consultStatus: "待回复",
    consent: "已授权",
    insurance: "城乡居民医保",
    materials: ["血压", "病情摘要"],
    missing: ["FAST 评估", "血糖", "既往用药"],
    lastAction: "民营医院提交会诊申请，系统提示资料不足。",
    nextAction: "补齐卒中风险资料后进入神经内科预审。",
    vitals: "头晕 1 小时，言语不清短暂缓解",
    summary: "疑似卒中风险，资料缺项导致接收延迟。",
    workbench: true,
    timeline: ["11:20 提交申请", "11:24 资料校验未通过", "待补充资料"],
  },
  {
    id: "P011",
    name: "郑小军",
    sex: "男",
    age: 55,
    phone: "157****0642",
    idMasked: "3426**********2455",
    township: "白沙镇",
    institution: "白沙镇卫生院",
    sourceLevel: "乡镇卫生院",
    familyDoctor: "韩晓东",
    countyDoctor: "陈静",
    disease: "血糖持续升高伴酮症风险",
    targetDept: "县人民医院内分泌科",
    referralType: "基层普通上转",
    status: "待县医院接收",
    stage: "pending",
    risk: "中",
    priority: "中",
    taskGroup: "规范上转",
    taskTitle: "待内分泌科接收",
    queueTime: "12:05",
    waitMinutes: 14,
    followupStatus: "待完成",
    consultStatus: "无",
    consent: "已授权",
    insurance: "职工医保",
    materials: ["血糖趋势", "尿酮", "用药清单"],
    missing: [],
    lastAction: "基层按糖尿病急性并发症风险发起上转。",
    nextAction: "内分泌科确认门诊或住院评估路径。",
    vitals: "随机血糖 18.6 mmol/L，尿酮 ±",
    summary: "资料完整但等待科室接收，适合催办县医院端。",
    workbench: true,
    timeline: ["12:05 发起上转", "12:11 资料完整", "待科室接收"],
  },
  {
    id: "P012",
    name: "何秀琴",
    sex: "女",
    age: 78,
    phone: "150****7714",
    idMasked: "3426**********7628",
    township: "南桥镇",
    institution: "南桥镇卫生院",
    sourceLevel: "乡镇卫生院",
    familyDoctor: "曹丽",
    countyDoctor: "何磊",
    disease: "肺部感染伴基础慢阻肺",
    targetDept: "县人民医院呼吸与危重症医学科",
    referralType: "会诊后上转",
    status: "待县医院接收",
    stage: "pending",
    risk: "高",
    priority: "高",
    taskGroup: "规范上转",
    taskTitle: "待呼吸科接收",
    queueTime: "12:40",
    waitMinutes: 19,
    followupStatus: "待完成",
    consultStatus: "无",
    consent: "已授权",
    insurance: "城乡居民医保",
    materials: ["胸片", "SpO2", "血常规", "用药记录"],
    missing: [],
    lastAction: "基层抗感染 48 小时效果不佳后申请上转。",
    nextAction: "呼吸科确认床位并给出转运注意事项。",
    vitals: "T 38.2℃，SpO2 91%，咳脓痰",
    summary: "高龄慢阻肺合并感染，县医院床位和转运建议是关键。",
    workbench: true,
    timeline: ["12:40 上转申请", "12:47 规则匹配", "等待呼吸科接收"],
  },
  {
    id: "P013",
    name: "冯建国",
    sex: "男",
    age: 61,
    phone: "133****6450",
    idMasked: "3426**********0371",
    township: "白沙镇",
    institution: "白沙镇卫生院",
    sourceLevel: "乡镇卫生院",
    familyDoctor: "韩晓东",
    countyDoctor: "孟浩",
    disease: "下肢动脉硬化闭塞风险",
    targetDept: "县人民医院血管外科",
    referralType: "基层普通上转",
    status: "资料补充中",
    stage: "pending",
    risk: "中",
    priority: "中",
    taskGroup: "待补资料",
    taskTitle: "补充下肢血管彩超",
    queueTime: "13:05",
    waitMinutes: 33,
    followupStatus: "无",
    consultStatus: "无",
    consent: "已授权",
    insurance: "职工医保",
    materials: ["足背动脉触诊", "血糖", "伤口照片"],
    missing: ["下肢血管彩超"],
    lastAction: "基层提交血管外科上转，县医院要求补充彩超。",
    nextAction: "完成检查互认上传后重新提交预审。",
    vitals: "间歇性跛行，足背动脉弱",
    summary: "资料缺项患者，不应进入接收队列，先补齐检查。",
    workbench: true,
    timeline: ["13:05 提交", "13:12 退回补充", "待上传彩超"],
  },
  {
    id: "P014",
    name: "杨秀英",
    sex: "女",
    age: 67,
    phone: "182****7605",
    idMasked: "3426**********6085",
    township: "青山镇",
    institution: "青山镇中心卫生院",
    sourceLevel: "乡镇中心卫生院",
    familyDoctor: "田敏",
    countyDoctor: "赵凯",
    disease: "头痛伴血压急升",
    targetDept: "县人民医院神经内科",
    referralType: "基层普通上转",
    status: "待县医院接收",
    stage: "pending",
    risk: "中",
    priority: "中",
    taskGroup: "规范上转",
    taskTitle: "待神经内科接收",
    queueTime: "13:45",
    waitMinutes: 11,
    followupStatus: "待完成",
    consultStatus: "无",
    consent: "已授权",
    insurance: "城乡居民医保",
    materials: ["血压记录", "头痛评分", "既往病史"],
    missing: [],
    lastAction: "基层降压观察后仍头痛明显，申请神经内科评估。",
    nextAction: "神经内科确认是否需头颅 CT 优先检查。",
    vitals: "BP 184/102 mmHg，头痛评分 7 分",
    summary: "中高风险普通上转，已满足资料要求，等待接收。",
    workbench: true,
    timeline: ["13:45 发起申请", "13:50 资料校验通过", "待科室接收"],
  },
  {
    id: "P015",
    name: "陆建华",
    sex: "男",
    age: 74,
    phone: "188****2913",
    idMasked: "3426**********4261",
    township: "南桥镇",
    institution: "南桥镇卫生院",
    sourceLevel: "乡镇卫生院",
    familyDoctor: "曹丽",
    countyDoctor: "孟浩",
    disease: "髋关节术后康复",
    targetDept: "基层康复随访",
    referralType: "下转康复",
    status: "已回基层随访",
    stage: "followup",
    risk: "中",
    priority: "中",
    taskGroup: "院后随访",
    taskTitle: "术后疼痛评估完成",
    queueTime: "15:00",
    waitMinutes: 0,
    followupStatus: "已完成",
    consultStatus: "无",
    consent: "已授权",
    insurance: "城乡居民医保",
    materials: ["出院小结", "康复计划", "用药清单"],
    missing: [],
    lastAction: "基层已完成术后疼痛和伤口评估。",
    nextAction: "按康复计划每周复评，异常疼痛回流骨科。",
    vitals: "术后第 5 天，伤口干燥，疼痛 3 分",
    summary: "院后随访闭环已完成，可计入基层协作服务。",
    workbench: true,
    timeline: ["出院方案回传", "48 小时随访完成", "继续康复训练"],
  },
  {
    id: "P016",
    name: "魏淑芬",
    sex: "女",
    age: 69,
    phone: "186****5042",
    idMasked: "3426**********1197",
    township: "城东镇",
    institution: "城东镇卫生院",
    sourceLevel: "乡镇卫生院",
    familyDoctor: "周建国",
    countyDoctor: "陈静",
    disease: "糖尿病用药调整后复查",
    targetDept: "基层慢病随访",
    referralType: "慢病共管",
    status: "今日随访待完成",
    stage: "followup",
    risk: "中",
    priority: "中",
    taskGroup: "慢病随访",
    taskTitle: "晚间血糖待录入",
    queueTime: "16:20",
    waitMinutes: 0,
    followupStatus: "待完成",
    consultStatus: "无",
    consent: "已授权",
    insurance: "城乡居民医保",
    materials: ["血糖记录", "用药调整方案"],
    missing: ["晚间血糖"],
    lastAction: "县医院调整降糖方案后回传基层。",
    nextAction: "家庭医生录入晚间血糖并确认低血糖症状。",
    vitals: "空腹血糖 8.6 mmol/L，偶有头晕",
    summary: "用药调整后的慢病随访，重点防低血糖和复诊提醒。",
    workbench: true,
    timeline: ["方案回传", "上午电话随访", "待晚间指标"],
  },
  {
    id: "P017",
    name: "高明",
    sex: "男",
    age: 47,
    phone: "189****3374",
    idMasked: "3426**********5804",
    township: "仁和街道",
    institution: "仁和民营医院",
    sourceLevel: "民营医院",
    familyDoctor: "顾晓",
    countyDoctor: "王强",
    disease: "心律失常复评",
    targetDept: "县人民医院心内科",
    referralType: "会诊后上转",
    status: "会诊复评中",
    stage: "consulting",
    risk: "中",
    priority: "中",
    taskGroup: "会诊复评",
    taskTitle: "等待动态心电图判读",
    queueTime: "16:50",
    waitMinutes: 27,
    followupStatus: "无",
    consultStatus: "待回复",
    consent: "已授权",
    insurance: "职工医保",
    materials: ["心电图", "症状记录", "既往用药"],
    missing: ["动态心电图"],
    lastAction: "民营医院提交心内科会诊，专家要求补动态心电图。",
    nextAction: "上传动态心电图后判断是否县医院门诊评估。",
    vitals: "心悸间断发作，静息心率 112 次/分",
    summary: "会诊未定转诊，先补检查再进入上转判断。",
    workbench: true,
    timeline: ["16:50 会诊提交", "17:05 要求补检查", "待动态心电图"],
  },
  {
    id: "P018",
    name: "杜爱华",
    sex: "女",
    age: 68,
    phone: "181****0732",
    idMasked: "3426**********7708",
    township: "白沙镇",
    institution: "白沙镇卫生院",
    sourceLevel: "乡镇卫生院",
    familyDoctor: "韩晓东",
    countyDoctor: "陈静",
    disease: "高血压合并肾功能异常",
    targetDept: "县人民医院肾内科",
    referralType: "基层普通上转",
    status: "已安排复诊",
    stage: "arranged",
    risk: "中",
    priority: "中",
    taskGroup: "慢病随访",
    taskTitle: "复诊提醒已发送",
    queueTime: "09:00",
    waitMinutes: 0,
    followupStatus: "已完成",
    consultStatus: "无",
    consent: "已授权",
    insurance: "城乡居民医保",
    materials: ["血压记录", "肾功能", "尿常规"],
    missing: [],
    lastAction: "县医院肾内科安排复诊号源。",
    nextAction: "基层提醒患者复诊并携带用药清单。",
    vitals: "eGFR 58，血压 150/88 mmHg",
    summary: "慢病合并症复诊已安排，随访闭环完成。",
    workbench: false,
    timeline: ["复诊号源锁定", "随访完成"],
  },
  {
    id: "P019",
    name: "罗春梅",
    sex: "女",
    age: 59,
    phone: "180****4418",
    idMasked: "3426**********3190",
    township: "南桥镇",
    institution: "南桥镇卫生院",
    sourceLevel: "乡镇卫生院",
    familyDoctor: "曹丽",
    countyDoctor: "赵凯",
    disease: "眩晕症复评",
    targetDept: "县人民医院耳鼻喉科",
    referralType: "基层普通上转",
    status: "已完成闭环",
    stage: "closed",
    risk: "低",
    priority: "低",
    taskGroup: "普通转诊",
    taskTitle: "闭环完成",
    queueTime: "09:15",
    waitMinutes: 0,
    followupStatus: "已完成",
    consultStatus: "无",
    consent: "已授权",
    insurance: "城乡居民医保",
    materials: ["病情摘要", "既往检查"],
    missing: [],
    lastAction: "县医院回传诊疗建议。",
    nextAction: "基层按医嘱继续观察。",
    vitals: "生命体征平稳",
    summary: "普通转诊闭环完成，进入随访观察。",
    workbench: false,
    timeline: ["县医院就诊", "方案回传", "基层随访完成"],
  },
  {
    id: "P020",
    name: "蒋守义",
    sex: "男",
    age: 82,
    phone: "183****6294",
    idMasked: "3426**********0174",
    township: "城北街道",
    institution: "康宁养老中心",
    sourceLevel: "养老机构",
    familyDoctor: "李松",
    countyDoctor: "何磊",
    disease: "反复肺部感染",
    targetDept: "基层照护 + 呼吸科支持",
    referralType: "慢病共管",
    status: "基层照护中",
    stage: "followup",
    risk: "高",
    priority: "高",
    taskGroup: "院后随访",
    taskTitle: "护理记录复核",
    queueTime: "09:25",
    waitMinutes: 0,
    followupStatus: "已完成",
    consultStatus: "无",
    consent: "已授权",
    insurance: "城乡居民医保",
    materials: ["护理记录", "SpO2", "体温记录"],
    missing: [],
    lastAction: "养老机构完成护理记录上传。",
    nextAction: "持续观察体温和血氧，异常触发会诊。",
    vitals: "SpO2 94%，体温 36.8℃",
    summary: "高龄照护患者，重点是连续监测与异常预警。",
    workbench: false,
    timeline: ["护理记录上传", "随访完成"],
  },
  {
    id: "P021",
    name: "钱桂兰",
    sex: "女",
    age: 71,
    phone: "177****9351",
    idMasked: "3426**********5429",
    township: "西河社区",
    institution: "西河社区卫生服务中心",
    sourceLevel: "社区卫生服务中心",
    familyDoctor: "宋雨",
    countyDoctor: "王强",
    disease: "高血压药物调整",
    targetDept: "基层慢病随访",
    referralType: "慢病共管",
    status: "基层管理中",
    stage: "followup",
    risk: "中",
    priority: "中",
    taskGroup: "慢病随访",
    taskTitle: "用药依从性确认",
    queueTime: "09:35",
    waitMinutes: 0,
    followupStatus: "已完成",
    consultStatus: "无",
    consent: "已授权",
    insurance: "城乡居民医保",
    materials: ["血压记录", "用药清单"],
    missing: [],
    lastAction: "家庭医生完成用药依从性电话随访。",
    nextAction: "3 天后复测血压。",
    vitals: "BP 138/82 mmHg",
    summary: "稳定慢病患者，继续基层管理。",
    workbench: false,
    timeline: ["电话随访完成", "复测提醒生成"],
  },
  {
    id: "P022",
    name: "许国栋",
    sex: "男",
    age: 63,
    phone: "176****2856",
    idMasked: "3426**********9071",
    township: "青山镇",
    institution: "青山镇中心卫生院",
    sourceLevel: "乡镇中心卫生院",
    familyDoctor: "田敏",
    countyDoctor: "孟浩",
    disease: "膝关节置换术后",
    targetDept: "基层康复随访",
    referralType: "下转康复",
    status: "已回基层随访",
    stage: "followup",
    risk: "中",
    priority: "中",
    taskGroup: "院后随访",
    taskTitle: "康复打卡完成",
    queueTime: "09:45",
    waitMinutes: 0,
    followupStatus: "已完成",
    consultStatus: "无",
    consent: "已授权",
    insurance: "职工医保",
    materials: ["出院小结", "康复计划"],
    missing: [],
    lastAction: "患者完成康复训练打卡。",
    nextAction: "一周后骨科线上复评。",
    vitals: "膝关节活动度 80°",
    summary: "康复下转闭环进行中。",
    workbench: false,
    timeline: ["出院回传", "康复打卡完成"],
  },
  {
    id: "P023",
    name: "韩桂芳",
    sex: "女",
    age: 77,
    phone: "178****4265",
    idMasked: "3426**********1388",
    township: "城东镇",
    institution: "城东镇卫生院",
    sourceLevel: "乡镇卫生院",
    familyDoctor: "周建国",
    countyDoctor: "何磊",
    disease: "慢阻肺稳定期",
    targetDept: "基层慢病随访",
    referralType: "留基层管理",
    status: "基层管理中",
    stage: "followup",
    risk: "中",
    priority: "中",
    taskGroup: "慢病随访",
    taskTitle: "吸入药使用确认",
    queueTime: "10:05",
    waitMinutes: 0,
    followupStatus: "已完成",
    consultStatus: "无",
    consent: "已授权",
    insurance: "城乡居民医保",
    materials: ["SpO2", "用药记录"],
    missing: [],
    lastAction: "随访确认吸入药使用规范。",
    nextAction: "出现血氧下降时触发呼吸科会诊。",
    vitals: "SpO2 95%，无发热",
    summary: "稳定慢阻肺，继续基层照护。",
    workbench: false,
    timeline: ["随访完成", "预警阈值已设置"],
  },
  {
    id: "P024",
    name: "白玉珍",
    sex: "女",
    age: 74,
    phone: "175****3198",
    idMasked: "3426**********4642",
    township: "白沙镇",
    institution: "白沙镇卫生院",
    sourceLevel: "乡镇卫生院",
    familyDoctor: "韩晓东",
    countyDoctor: "陈静",
    disease: "糖尿病视网膜筛查",
    targetDept: "县人民医院眼科",
    referralType: "专病筛查上转",
    status: "已安排检查",
    stage: "arranged",
    risk: "中",
    priority: "中",
    taskGroup: "普通转诊",
    taskTitle: "检查预约提醒",
    queueTime: "10:20",
    waitMinutes: 0,
    followupStatus: "已完成",
    consultStatus: "无",
    consent: "已授权",
    insurance: "城乡居民医保",
    materials: ["血糖记录", "眼底照片"],
    missing: [],
    lastAction: "眼科检查已预约。",
    nextAction: "检查后报告回传基层。",
    vitals: "糖化血红蛋白 7.8%",
    summary: "糖尿病并发症筛查，已安排检查。",
    workbench: false,
    timeline: ["筛查上转", "检查预约"],
  },
  {
    id: "P025",
    name: "田国胜",
    sex: "男",
    age: 57,
    phone: "173****6037",
    idMasked: "3426**********2053",
    township: "南桥镇",
    institution: "南桥镇卫生院",
    sourceLevel: "乡镇卫生院",
    familyDoctor: "曹丽",
    countyDoctor: "王强",
    disease: "心衰出院后随访",
    targetDept: "基层院后随访",
    referralType: "下转随访",
    status: "已回基层随访",
    stage: "followup",
    risk: "高",
    priority: "高",
    taskGroup: "院后随访",
    taskTitle: "体重和水肿评估完成",
    queueTime: "10:35",
    waitMinutes: 0,
    followupStatus: "已完成",
    consultStatus: "无",
    consent: "已授权",
    insurance: "职工医保",
    materials: ["出院小结", "用药清单", "复诊计划"],
    missing: [],
    lastAction: "基层完成心衰 48 小时随访。",
    nextAction: "异常体重增加自动回流心内科。",
    vitals: "体重较出院 +0.3kg，无下肢水肿",
    summary: "心衰院后随访已完成，继续风险监测。",
    workbench: false,
    timeline: ["方案回传", "48 小时随访完成"],
  },
  {
    id: "P026",
    name: "任志远",
    sex: "男",
    age: 60,
    phone: "172****5190",
    idMasked: "3426**********3466",
    township: "仁和街道",
    institution: "仁和民营医院",
    sourceLevel: "民营医院",
    familyDoctor: "顾晓",
    countyDoctor: "孟浩",
    disease: "腰椎间盘突出",
    targetDept: "县人民医院骨科",
    referralType: "基层普通上转",
    status: "已接收",
    stage: "accepted",
    risk: "低",
    priority: "低",
    taskGroup: "普通转诊",
    taskTitle: "骨科门诊已接收",
    queueTime: "10:50",
    waitMinutes: 0,
    followupStatus: "已完成",
    consultStatus: "无",
    consent: "已授权",
    insurance: "职工医保",
    materials: ["影像报告", "病情摘要"],
    missing: [],
    lastAction: "骨科门诊已接收。",
    nextAction: "到院后完成体格检查。",
    vitals: "生命体征平稳",
    summary: "低风险普通转诊，已完成接收。",
    workbench: false,
    timeline: ["民营医院发起", "骨科接收"],
  },
  {
    id: "P027",
    name: "姚淑琴",
    sex: "女",
    age: 83,
    phone: "171****8872",
    idMasked: "3426**********6793",
    township: "城北街道",
    institution: "安泰养老机构",
    sourceLevel: "养老机构",
    familyDoctor: "陈露",
    countyDoctor: "何磊",
    disease: "吞咽困难伴营养不良",
    targetDept: "县人民医院老年医学科",
    referralType: "会诊后上转",
    status: "会诊中",
    stage: "consulting",
    risk: "高",
    priority: "高",
    taskGroup: "会诊复评",
    taskTitle: "营养评估待补充",
    queueTime: "11:05",
    waitMinutes: 16,
    followupStatus: "已完成",
    consultStatus: "待回复",
    consent: "已授权",
    insurance: "城乡居民医保",
    materials: ["护理记录", "吞咽筛查"],
    missing: ["营养评分"],
    lastAction: "养老机构提交老年医学会诊。",
    nextAction: "补充营养评分后专家回复。",
    vitals: "体重下降 3kg/月",
    summary: "老年照护会诊，暂未进入正式上转。",
    workbench: false,
    timeline: ["会诊提交", "待补营养评分"],
  },
  {
    id: "P028",
    name: "秦海波",
    sex: "男",
    age: 52,
    phone: "170****7364",
    idMasked: "3426**********7744",
    township: "西河社区",
    institution: "西河社区卫生服务中心",
    sourceLevel: "社区卫生服务中心",
    familyDoctor: "宋雨",
    countyDoctor: "王强",
    disease: "高血压初诊",
    targetDept: "基层慢病建档",
    referralType: "留基层管理",
    status: "基层建档中",
    stage: "followup",
    risk: "中",
    priority: "中",
    taskGroup: "慢病随访",
    taskTitle: "建档完成",
    queueTime: "11:20",
    waitMinutes: 0,
    followupStatus: "已完成",
    consultStatus: "无",
    consent: "已授权",
    insurance: "城乡居民医保",
    materials: ["血压记录", "生活方式评估"],
    missing: [],
    lastAction: "完成慢病建档和首次用药指导。",
    nextAction: "一周后复测血压。",
    vitals: "BP 148/90 mmHg",
    summary: "基层可管理患者，不纳入上转。",
    workbench: false,
    timeline: ["建档完成", "复测提醒"],
  },
  {
    id: "P029",
    name: "沈丽萍",
    sex: "女",
    age: 65,
    phone: "169****0451",
    idMasked: "3426**********1861",
    township: "白沙镇",
    institution: "白沙镇卫生院",
    sourceLevel: "乡镇卫生院",
    familyDoctor: "韩晓东",
    countyDoctor: "赵凯",
    disease: "短暂眩晕复诊",
    targetDept: "基层复诊",
    referralType: "留基层管理",
    status: "基层复诊中",
    stage: "followup",
    risk: "低",
    priority: "低",
    taskGroup: "慢病随访",
    taskTitle: "复诊完成",
    queueTime: "11:40",
    waitMinutes: 0,
    followupStatus: "已完成",
    consultStatus: "无",
    consent: "已授权",
    insurance: "城乡居民医保",
    materials: ["复诊记录"],
    missing: [],
    lastAction: "基层复诊未见急症风险。",
    nextAction: "症状反复时再发起会诊。",
    vitals: "生命体征平稳",
    summary: "低风险患者，留基层观察。",
    workbench: false,
    timeline: ["复诊完成", "继续观察"],
  },
  {
    id: "P030",
    name: "梁成",
    sex: "男",
    age: 45,
    phone: "168****6127",
    idMasked: "3426**********0492",
    township: "青山镇",
    institution: "青山镇中心卫生院",
    sourceLevel: "乡镇中心卫生院",
    familyDoctor: "田敏",
    countyDoctor: "孟浩",
    disease: "外伤后伤口感染",
    targetDept: "县人民医院普外科",
    referralType: "基层普通上转",
    status: "已接收",
    stage: "accepted",
    risk: "中",
    priority: "中",
    taskGroup: "普通转诊",
    taskTitle: "普外科已接收",
    queueTime: "11:55",
    waitMinutes: 0,
    followupStatus: "已完成",
    consultStatus: "无",
    consent: "已授权",
    insurance: "职工医保",
    materials: ["伤口照片", "血常规", "抗感染用药"],
    missing: [],
    lastAction: "普外科接收并安排清创评估。",
    nextAction: "到院后完成清创。",
    vitals: "T 37.8℃，局部红肿",
    summary: "普通上转已接收，资料完整。",
    workbench: false,
    timeline: ["上转申请", "普外科接收"],
  },
  {
    id: "P031",
    name: "傅国梁",
    sex: "男",
    age: 79,
    phone: "167****2704",
    idMasked: "3426**********6260",
    township: "南桥镇",
    institution: "南桥镇卫生院",
    sourceLevel: "乡镇卫生院",
    familyDoctor: "曹丽",
    countyDoctor: "赵凯",
    disease: "帕金森病用药随访",
    targetDept: "基层慢病随访",
    referralType: "慢病共管",
    status: "基层管理中",
    stage: "followup",
    risk: "中",
    priority: "中",
    taskGroup: "慢病随访",
    taskTitle: "震颤评分待更新",
    queueTime: "12:10",
    waitMinutes: 0,
    followupStatus: "待完成",
    consultStatus: "无",
    consent: "已授权",
    insurance: "城乡居民医保",
    materials: ["用药记录"],
    missing: ["震颤评分"],
    lastAction: "县医院神经内科回传用药建议。",
    nextAction: "基层更新震颤评分并观察不良反应。",
    vitals: "步态不稳，夜间翻身困难",
    summary: "慢病随访待完成，暂无上转必要。",
    workbench: false,
    timeline: ["方案回传", "待评分更新"],
  },
  {
    id: "P032",
    name: "石秀梅",
    sex: "女",
    age: 56,
    phone: "166****0149",
    idMasked: "3426**********5338",
    township: "城东镇",
    institution: "城东镇卫生院",
    sourceLevel: "乡镇卫生院",
    familyDoctor: "周建国",
    countyDoctor: "陈静",
    disease: "甲状腺结节复查",
    targetDept: "县人民医院内分泌科",
    referralType: "专科复查",
    status: "已安排复查",
    stage: "arranged",
    risk: "低",
    priority: "低",
    taskGroup: "普通转诊",
    taskTitle: "复查预约完成",
    queueTime: "12:30",
    waitMinutes: 0,
    followupStatus: "无",
    consultStatus: "无",
    consent: "已授权",
    insurance: "职工医保",
    materials: ["超声报告", "甲功"],
    missing: [],
    lastAction: "县医院内分泌科复查预约完成。",
    nextAction: "复查报告回传基层。",
    vitals: "生命体征平稳",
    summary: "专科复查患者，非急症。",
    workbench: false,
    timeline: ["基层申请", "复查预约"],
  },
  {
    id: "P033",
    name: "潘玉莲",
    sex: "女",
    age: 88,
    phone: "165****9366",
    idMasked: "3426**********9481",
    township: "城北街道",
    institution: "安泰养老机构",
    sourceLevel: "养老机构",
    familyDoctor: "陈露",
    countyDoctor: "何磊",
    disease: "压疮风险",
    targetDept: "基层照护 + 普外会诊",
    referralType: "远程会诊",
    status: "照护方案已回传",
    stage: "followup",
    risk: "高",
    priority: "高",
    taskGroup: "院后随访",
    taskTitle: "换药记录待审核",
    queueTime: "12:45",
    waitMinutes: 0,
    followupStatus: "待完成",
    consultStatus: "已回复",
    consent: "已授权",
    insurance: "城乡居民医保",
    materials: ["压疮照片", "护理记录"],
    missing: ["换药记录"],
    lastAction: "县医院普外科回传换药建议。",
    nextAction: "养老机构补传换药记录，必要时上转。",
    vitals: "骶尾部 I-II 期压疮",
    summary: "远程会诊后留机构照护，仍需闭环记录。",
    workbench: false,
    timeline: ["照片上传", "专家回复", "待换药记录"],
  },
  {
    id: "P034",
    name: "钟建平",
    sex: "男",
    age: 67,
    phone: "164****5823",
    idMasked: "3426**********3125",
    township: "白沙镇",
    institution: "白沙镇卫生院",
    sourceLevel: "乡镇卫生院",
    familyDoctor: "韩晓东",
    countyDoctor: "王强",
    disease: "房颤抗凝随访",
    targetDept: "基层慢病随访",
    referralType: "慢病共管",
    status: "基层管理中",
    stage: "followup",
    risk: "中",
    priority: "中",
    taskGroup: "慢病随访",
    taskTitle: "INR 待复测",
    queueTime: "13:00",
    waitMinutes: 0,
    followupStatus: "待完成",
    consultStatus: "无",
    consent: "已授权",
    insurance: "职工医保",
    materials: ["用药清单", "出血风险评估"],
    missing: ["INR"],
    lastAction: "心内科回传抗凝用药建议。",
    nextAction: "基层复测 INR 并确认出血风险。",
    vitals: "心率 82 次/分",
    summary: "慢病随访待完成，异常时回流心内科。",
    workbench: false,
    timeline: ["方案回传", "待 INR 复测"],
  },
  {
    id: "P035",
    name: "谢小芳",
    sex: "女",
    age: 49,
    phone: "163****2718",
    idMasked: "3426**********8396",
    township: "西河社区",
    institution: "西河社区卫生服务中心",
    sourceLevel: "社区卫生服务中心",
    familyDoctor: "宋雨",
    countyDoctor: "陈静",
    disease: "妊娠糖尿病产后随访",
    targetDept: "基层慢病随访",
    referralType: "慢病共管",
    status: "基层管理中",
    stage: "followup",
    risk: "中",
    priority: "中",
    taskGroup: "慢病随访",
    taskTitle: "产后血糖待复测",
    queueTime: "13:15",
    waitMinutes: 0,
    followupStatus: "待完成",
    consultStatus: "无",
    consent: "已授权",
    insurance: "城乡居民医保",
    materials: ["产后记录", "血糖记录"],
    missing: ["复测血糖"],
    lastAction: "家庭医生发送产后复测提醒。",
    nextAction: "完成血糖复测并评估长期糖尿病风险。",
    vitals: "产后 42 天",
    summary: "慢病风险随访，仍在基层闭环。",
    workbench: false,
    timeline: ["产后提醒", "待复测"],
  },
  {
    id: "P036",
    name: "范永强",
    sex: "男",
    age: 72,
    phone: "162****9054",
    idMasked: "3426**********2674",
    township: "青山镇",
    institution: "青山镇中心卫生院",
    sourceLevel: "乡镇中心卫生院",
    familyDoctor: "田敏",
    countyDoctor: "孟浩",
    disease: "骨质疏松骨折风险",
    targetDept: "基层慢病随访",
    referralType: "留基层管理",
    status: "基层管理中",
    stage: "followup",
    risk: "中",
    priority: "中",
    taskGroup: "慢病随访",
    taskTitle: "跌倒风险评估完成",
    queueTime: "13:35",
    waitMinutes: 0,
    followupStatus: "已完成",
    consultStatus: "无",
    consent: "已授权",
    insurance: "城乡居民医保",
    materials: ["跌倒评估", "用药记录"],
    missing: [],
    lastAction: "基层完成跌倒风险评估。",
    nextAction: "县医院骨科下沉门诊复查骨密度。",
    vitals: "近期无跌倒",
    summary: "基层管理中，等待下沉门诊。",
    workbench: false,
    timeline: ["评估完成", "下沉门诊提醒"],
  },
  {
    id: "P037",
    name: "卢新民",
    sex: "男",
    age: 54,
    phone: "161****4489",
    idMasked: "3426**********7259",
    township: "仁和街道",
    institution: "仁和民营医院",
    sourceLevel: "民营医院",
    familyDoctor: "顾晓",
    countyDoctor: "王强",
    disease: "胸痛复诊后观察",
    targetDept: "基层随访",
    referralType: "院后随访",
    status: "已完成闭环",
    stage: "closed",
    risk: "中",
    priority: "中",
    taskGroup: "院后随访",
    taskTitle: "胸痛复发教育完成",
    queueTime: "14:00",
    waitMinutes: 0,
    followupStatus: "已完成",
    consultStatus: "无",
    consent: "已授权",
    insurance: "职工医保",
    materials: ["出院小结", "心电图"],
    missing: [],
    lastAction: "基层完成胸痛复发识别宣教。",
    nextAction: "胸痛复发直接走绿色通道。",
    vitals: "无胸痛复发",
    summary: "闭环完成，纳入复发预警。",
    workbench: false,
    timeline: ["出院回传", "随访完成", "闭环归档"],
  },
  {
    id: "P038",
    name: "邵红梅",
    sex: "女",
    age: 66,
    phone: "160****3147",
    idMasked: "3426**********1994",
    township: "南桥镇",
    institution: "南桥镇卫生院",
    sourceLevel: "乡镇卫生院",
    familyDoctor: "曹丽",
    countyDoctor: "陈静",
    disease: "糖尿病肾病风险",
    targetDept: "县人民医院肾内科",
    referralType: "会诊后上转",
    status: "会诊建议基层强化管理",
    stage: "consulting",
    risk: "中",
    priority: "中",
    taskGroup: "会诊复评",
    taskTitle: "三个月后复评",
    queueTime: "14:20",
    waitMinutes: 0,
    followupStatus: "已完成",
    consultStatus: "已回复",
    consent: "已授权",
    insurance: "城乡居民医保",
    materials: ["尿微量白蛋白", "肾功能", "血糖记录"],
    missing: [],
    lastAction: "肾内科建议暂留基层强化管理。",
    nextAction: "三个月后复查尿微量白蛋白。",
    vitals: "尿微量白蛋白轻度升高",
    summary: "会诊后未上转，体现分级诊疗约束。",
    workbench: false,
    timeline: ["会诊提交", "专家回复", "基层管理"],
  },
  {
    id: "P039",
    name: "袁德海",
    sex: "男",
    age: 80,
    phone: "159****7729",
    idMasked: "3426**********5916",
    township: "城北街道",
    institution: "安泰养老机构",
    sourceLevel: "养老机构",
    familyDoctor: "陈露",
    countyDoctor: "赵凯",
    disease: "认知障碍照护",
    targetDept: "基层照护 + 神经内科支持",
    referralType: "慢病共管",
    status: "照护中",
    stage: "followup",
    risk: "高",
    priority: "高",
    taskGroup: "院后随访",
    taskTitle: "照护风险评估待完成",
    queueTime: "14:40",
    waitMinutes: 0,
    followupStatus: "待完成",
    consultStatus: "无",
    consent: "家属已授权",
    insurance: "城乡居民医保",
    materials: ["护理记录", "用药清单"],
    missing: ["跌倒风险评估"],
    lastAction: "养老机构录入照护记录。",
    nextAction: "完成跌倒风险和走失风险评估。",
    vitals: "夜间躁动，近期无跌倒",
    summary: "养老照护患者，重点在连续记录和风险预警。",
    workbench: false,
    timeline: ["照护记录上传", "待风险评估"],
  },
  {
    id: "P040",
    name: "孔祥瑞",
    sex: "男",
    age: 68,
    phone: "158****4201",
    idMasked: "3426**********0416",
    township: "西河社区",
    institution: "西河社区卫生服务中心",
    sourceLevel: "社区卫生服务中心",
    familyDoctor: "宋雨",
    countyDoctor: "王强",
    disease: "高血压合并冠心病",
    targetDept: "基层慢病共管",
    referralType: "慢病共管",
    status: "基层管理中",
    stage: "followup",
    risk: "中",
    priority: "中",
    taskGroup: "慢病随访",
    taskTitle: "家庭血压上传完成",
    queueTime: "15:05",
    waitMinutes: 0,
    followupStatus: "无",
    consultStatus: "无",
    consent: "已授权",
    insurance: "城乡居民医保",
    materials: ["家庭血压", "用药清单"],
    missing: [],
    lastAction: "患者端上传家庭血压。",
    nextAction: "家庭医生每周复核趋势。",
    vitals: "BP 136/80 mmHg",
    summary: "基层慢病共管患者，指标稳定。",
    workbench: false,
    timeline: ["家庭血压上传", "趋势复核"],
  },
];

const doctorDatabase = [
  { id: "D001", name: "王强", role: "县医院接诊医生", institution: "县人民医院", department: "心内科 / 胸痛中心", specialty: "胸痛、冠心病、心衰", phone: "139****0101", scope: "接收胸痛绿色通道、回复心内会诊、回传院后方案", todayTasks: 11, referralCount: 7, consultCount: 5, followupCount: 6, qualityScore: 96, status: "在线接诊" },
  { id: "D002", name: "陈静", role: "县医院专科医生", institution: "县人民医院", department: "内分泌科", specialty: "糖尿病足、血糖异常、内分泌慢病", phone: "139****0102", scope: "接收糖尿病足上转、审核慢病共管方案", todayTasks: 9, referralCount: 5, consultCount: 4, followupCount: 8, qualityScore: 94, status: "在线会诊" },
  { id: "D003", name: "赵凯", role: "县医院专科医生", institution: "县人民医院", department: "神经内科 / 卒中中心", specialty: "卒中、TIA、认知障碍", phone: "139****0103", scope: "卒中绿色通道、神经康复回传、病例复盘", todayTasks: 8, referralCount: 4, consultCount: 3, followupCount: 5, qualityScore: 95, status: "门诊中" },
  { id: "D004", name: "何磊", role: "县医院专科医生", institution: "县人民医院", department: "呼吸与危重症医学科", specialty: "慢阻肺、肺部感染、呼吸衰竭", phone: "139****0104", scope: "呼吸会诊、养老机构复评、住院接收", todayTasks: 10, referralCount: 4, consultCount: 6, followupCount: 4, qualityScore: 92, status: "在线会诊" },
  { id: "D005", name: "孟浩", role: "县医院专科医生", institution: "县人民医院", department: "骨科 / 普外科协同", specialty: "术后康复、创伤、伤口感染", phone: "139****0105", scope: "术后下转、康复方案回传、普通上转接收", todayTasks: 7, referralCount: 3, consultCount: 2, followupCount: 7, qualityScore: 91, status: "查房中" },
  { id: "D006", name: "周建国", role: "基层全科医生", institution: "城东镇卫生院", department: "全科医学科", specialty: "胸痛识别、高血压、院后随访", phone: "139****0201", scope: "城东镇签约患者、本人发起转诊、县医院回传随访", todayTasks: 17, referralCount: 9, consultCount: 3, followupCount: 24, qualityScore: 93, status: "工作台在线" },
  { id: "D007", name: "宋雨", role: "社区全科医生", institution: "西河社区卫生服务中心", department: "家庭医生团队", specialty: "糖尿病、家庭医生签约、慢病异常上报", phone: "139****0202", scope: "西河社区签约患者、慢病共管、内分泌会诊", todayTasks: 12, referralCount: 6, consultCount: 2, followupCount: 18, qualityScore: 90, status: "随访中" },
  { id: "D008", name: "田敏", role: "基层全科医生", institution: "青山镇中心卫生院", department: "全科医学科", specialty: "卒中识别、糖尿病、康复随访", phone: "139****0203", scope: "青山片区转诊发起、卒中通道、下转康复", todayTasks: 14, referralCount: 8, consultCount: 3, followupCount: 16, qualityScore: 88, status: "门诊中" },
  { id: "D009", name: "李松", role: "养老机构医生", institution: "康宁养老中心", department: "医养照护室", specialty: "慢阻肺、压疮照护、高龄综合评估", phone: "139****0204", scope: "养老机构入住老人、呼吸会诊、照护记录上传", todayTasks: 9, referralCount: 3, consultCount: 5, followupCount: 12, qualityScore: 82, status: "照护巡诊" },
  { id: "D010", name: "刘敏", role: "村医", institution: "城北村卫生室", department: "村卫生室", specialty: "上门随访、血压血糖采集、患者知情协助", phone: "139****0205", scope: "城北村居民、家庭医生协同、村级随访任务", todayTasks: 11, referralCount: 2, consultCount: 1, followupCount: 20, qualityScore: 86, status: "上门随访" },
  { id: "D011", name: "韩晓东", role: "基层全科医生", institution: "白沙镇卫生院", department: "全科医学科", specialty: "糖尿病、房颤抗凝、基层首诊", phone: "139****0206", scope: "白沙镇签约患者、普通上转、慢病随访", todayTasks: 13, referralCount: 7, consultCount: 2, followupCount: 15, qualityScore: 89, status: "工作台在线" },
  { id: "D012", name: "曹丽", role: "基层全科医生", institution: "南桥镇卫生院", department: "全科医学科", specialty: "呼吸慢病、心衰随访、康复下转", phone: "139****0207", scope: "南桥镇患者、院后随访、呼吸科协同", todayTasks: 10, referralCount: 5, consultCount: 2, followupCount: 17, qualityScore: 87, status: "随访中" },
  { id: "D013", name: "顾晓", role: "民营机构医生", institution: "仁和民营医院", department: "门诊部", specialty: "普通门诊、会诊申请、检查互认", phone: "139****0208", scope: "仁和民营医院就诊患者、规范上转、资料整理", todayTasks: 8, referralCount: 4, consultCount: 3, followupCount: 5, qualityScore: 81, status: "门诊中" },
  { id: "D014", name: "陈露", role: "养老机构护士长", institution: "安泰养老机构", department: "护理照护室", specialty: "护理记录、跌倒风险、压疮管理", phone: "139****0209", scope: "安泰养老机构入住老人、照护协同、家属授权协助", todayTasks: 7, referralCount: 1, consultCount: 2, followupCount: 14, qualityScore: 84, status: "照护中" },
  { id: "D015", name: "林悦", role: "转诊中心护士", institution: "县人民医院", department: "转诊运营中心", specialty: "转诊预审、资料校验、绿色通道衔接", phone: "139****0301", scope: "全县转诊单预审、资料完整性校验、科室催办", todayTasks: 26, referralCount: 22, consultCount: 0, followupCount: 0, qualityScore: 97, status: "在线预审" },
  { id: "D016", name: "杜航", role: "转诊中心医生", institution: "县人民医院", department: "转诊运营中心", specialty: "病种规则复核、急症分级、外转审核", phone: "139****0302", scope: "全县急症预审、病种规则判断、异常转诊复核", todayTasks: 21, referralCount: 18, consultCount: 4, followupCount: 0, qualityScore: 95, status: "在线预审" },
  { id: "D017", name: "罗洁", role: "医保质控专员", institution: "县人民医院", department: "医保协同办公室", specialty: "重复检查、费用预警、结算审核", phone: "139****0303", scope: "协作服务审核、医保费用风险、异常转诊预警", todayTasks: 18, referralCount: 0, consultCount: 0, followupCount: 0, qualityScore: 93, status: "审核中" },
  { id: "D018", name: "魏娜", role: "公卫慢病专员", institution: "县人民医院医共体运营中心", department: "慢病共管中心", specialty: "高血压、糖尿病、随访质控", phone: "139****0304", scope: "慢病任务分发、基层随访质控、异常上报审核", todayTasks: 19, referralCount: 0, consultCount: 0, followupCount: 38, qualityScore: 92, status: "质控中" },
  { id: "D019", name: "黄志鹏", role: "急救中心调度", institution: "县急救中心", department: "120 调度中心", specialty: "急救派车、绿色通道、转运衔接", phone: "139****0305", scope: "胸痛、卒中、创伤等急症转运与到院预通知", todayTasks: 12, referralCount: 6, consultCount: 0, followupCount: 0, qualityScore: 90, status: "调度在线" },
  { id: "D020", name: "沈青", role: "县医院药师", institution: "县人民医院", department: "药学部", specialty: "抗凝、降糖、慢病用药审核", phone: "139****0306", scope: "院后用药方案审核、基层用药咨询、患者用药教育", todayTasks: 9, referralCount: 0, consultCount: 3, followupCount: 9, qualityScore: 94, status: "在线咨询" },
];

const consultationQueue = [
  ["心内科", "刘桂英", "基层心电图 ST-T 改变，胸闷 2 小时", "县医院王主任", "需上转"],
  ["呼吸科", "赵国平", "养老机构血氧 90%，慢阻肺急性加重", "县医院李主任", "先会诊"],
  ["内分泌科", "王志强", "糖尿病足伤口照片复评", "县医院陈主任", "专病门诊"],
  ["神经内科", "陈美兰", "短暂性脑缺血发作，卒中风险筛查", "县医院赵主任", "已接诊"],
];

const followupTasks = [
  ["48 小时出院随访", "脑卒中康复患者 6 人", "县医院已回传方案，基层今日完成", "amber"],
  ["慢病指标复测", "高危高血压患者 18 人", "血压、用药、复诊计划需录入", "red"],
  ["用药依从性确认", "糖尿病患者 21 人", "村医电话或上门确认", "teal"],
  ["康复训练打卡", "骨科术后患者 9 人", "异常疼痛需回流县医院", "green"],
];

const patientProgress = [
  ["09:18", "基层医生提交转诊", "城东镇卫生院上传心电图、血压、既往用药。"],
  ["09:23", "县医院转诊中心预审", "系统识别胸痛风险，进入绿色通道候选。"],
  ["09:31", "心内科确认接收", "接诊医生已确认，建议 10:20 前到院。"],
  ["10:20", "到院接诊", "请携带医保电子凭证，前往急诊胸痛中心。"],
  ["出院后", "基层继续随访", "诊疗方案将回传家庭医生团队。"],
];

const patientReports = [
  ["心电图", "县人民医院", "今日 09:42", "已出具"],
  ["肌钙蛋白", "县人民医院检验科", "今日 10:12", "待审核"],
  ["血糖趋势", "城东镇卫生院", "昨日 15:30", "已互认"],
  ["用药清单", "家庭医生团队", "长期", "持续更新"],
];

const permissionRows = [
  ["县域运行指标", "全县汇总、机构排行", "仅本科室/本人相关", "不可见"],
  ["患者病历资料", "脱敏监管和质控授权", "授权患者可见", "仅本人和授权家属"],
  ["转诊单", "全流程监管、督办", "发起、接收、会诊、回传", "查看进度和通知"],
  ["慢病随访", "统计、预警、考核", "执行随访、录入结果", "填报指标、确认提醒"],
  ["绩效医保", "配置规则、查看台账", "查看个人相关绩效", "仅看本人费用"],
  ["数据接入", "接口、质量、审计", "不管理接口", "不涉及"],
];

const serviceCatalog = [
  ["转诊前病情评估", "基层医生完成病情评估、转诊指征判断、患者知情说明", "每例服务 60 元", "需病历摘要和知情确认"],
  ["病历资料整理上传", "整理基层病历、检查检验、用药清单、生命体征并结构化提交", "每例服务 40 元", "资料完整率需达标"],
  ["远程会诊协作", "基层医生发起会诊并完成会诊后处置记录", "每次服务 80 元", "需县医院专家回复"],
  ["院后随访衔接", "县医院出院方案回传后，基层医生完成 48 小时随访", "每例服务 50 元", "需随访结果和患者确认"],
  ["慢病共管服务", "对高危慢病患者完成指标采集、用药提醒和异常上报", "按月服务包", "按管理质量结算"],
];

const settlementRows = [
  ["S20260531021", "城东镇卫生院 · 周建国", "转诊前病情评估", "刘桂英", "待审核", "60 元", "amber"],
  ["S20260531018", "西河社区卫生服务中心 · 宋雨", "病历资料整理上传", "王志强", "已通过", "40 元", "green"],
  ["S20260531013", "康宁养老中心 · 李松", "远程会诊协作", "赵国平", "待补充", "80 元", "red"],
  ["S20260530096", "青山镇中心卫生院 · 田敏", "院后随访衔接", "陈美兰", "已结算", "50 元", "blue"],
  ["S20260530071", "城北村卫生室 · 刘敏", "慢病共管服务", "张秀兰", "已通过", "120 元", "green"],
];

const riskWarnings = [
  ["异常转诊集中", "城东片区心内科转诊 7 日内增长 32%，需复核病种和转诊指征。", "red"],
  ["资料缺项偏高", "康宁养老中心会诊材料缺少血气分析和既往用药清单。", "amber"],
  ["患者知情未确认", "3 笔服务补偿申请缺少患者端知情授权记录。", "red"],
  ["结算台账待复核", "本月 18 笔协作服务待运营中心审核。", "blue"],
];

const complianceSteps = [
  ["服务发生", "基层医生完成评估、资料整理、会诊协作或院后随访。"],
  ["规则校验", "系统匹配病种规则、转诊路径、必填资料和服务项目。"],
  ["患者知情", "患者端确认转诊原因、可选机构、资料共享和院后服务。"],
  ["县医院确认", "接诊、会诊回复或出院回传形成医疗服务闭环。"],
  ["质量审核", "运营中心审核资料完整、指征合理、投诉和异常预警。"],
  ["合规结算", "通过后进入机构结算台账，个人或机构结算按协议留痕。"],
];

const auditEvidence = [
  ["病种规则依据", "必须匹配病种目录和转诊路径", "已校验"],
  ["服务记录", "病情评估、资料上传、会诊回复或随访记录", "已留痕"],
  ["患者知情授权", "患者端确认可选机构和资料共享", "待补 3 笔"],
  ["县医院接收结果", "接诊、会诊或回传结果可追踪", "已同步"],
  ["异常风险", "高频转诊、投诉、费用异常触发复核", "4 条预警"],
];

const doctorServiceRecords = [
  ["转诊前病情评估", "刘桂英", "待审核", "病情摘要、心电图、血压记录已提交", "60 元", "amber"],
  ["病历资料整理上传", "王志强", "已通过", "伤口照片、血糖趋势、用药清单完整", "40 元", "green"],
  ["远程会诊协作", "赵国平", "待补充", "需补充血气分析和既往抗感染方案", "80 元", "red"],
  ["院后随访衔接", "陈美兰", "已结算", "48 小时随访、复诊提醒、用药确认完成", "50 元", "blue"],
  ["慢病共管服务", "张秀兰", "已通过", "本月血压记录完整，异常值已上报", "120 元", "green"],
];

const consentRows = [
  ["转诊原因", "基层医生根据胸闷、血压升高、心电图异常，建议到县人民医院心内科进一步评估。"],
  ["可选机构", "患者可选择县人民医院、上级医院或其他具备相应能力的医疗机构。"],
  ["推荐理由", "县人民医院具备胸痛中心、心内科专家和绿色通道，可在县域内完成优先评估。"],
  ["资料共享", "同意将本次转诊相关病历、检查结果、用药清单共享给接诊医生和家庭医生团队。"],
  ["院后服务", "同意出院后由城东家庭医生团队继续随访和慢病管理。"],
];

const referralLifecycleSteps = [
  {
    id: "initiate",
    title: "基层医生发起上转",
    shortTitle: "发起上转",
    owner: "基层医生 / 村医 / 养老机构医生",
    status: "医生端",
    tone: "amber",
    desc: "基层医生从患者工作台发起结构化转诊单，填写病情摘要、生命体征、初步诊断、拟转科室和转诊理由。",
    inputs: ["患者基本信息", "主诉和现病史", "生命体征", "初步诊断", "拟转科室", "基层处理记录"],
    system: ["生成转诊草稿", "读取患者授权状态", "绑定来源机构和责任医生", "提示对应病种资料清单"],
    output: "形成可校验的结构化转诊单，而不是自由文本申请。",
    next: "进入病种规则自动匹配。",
  },
  {
    id: "ruleMatch",
    title: "系统匹配病种规则",
    shortTitle: "规则匹配",
    owner: "系统规则引擎 / 转诊中心",
    status: "自动校验",
    tone: "blue",
    desc: "系统根据诊断、主诉、风险指标和检查结果，判断是必须上转、会诊后上转、留基层管理还是下转康复。",
    inputs: ["病种目录", "触发条件", "风险等级", "目标科室", "急症绿色通道规则"],
    system: ["判断转诊必要性", "匹配目标科室", "识别是否需要先会诊", "生成必带资料清单"],
    output: "给出路径建议：必须上转、会诊后上转、留基层或下转康复。",
    next: "进入资料校验和患者知情授权。",
  },
  {
    id: "consent",
    title: "患者知情授权",
    shortTitle: "知情授权",
    owner: "患者 / 家属 / 基层医生协助",
    status: "患者端",
    tone: "teal",
    desc: "患者端展示转诊原因、推荐机构、可选机构、资料共享范围和院后服务安排，确认后形成授权留痕。",
    inputs: ["转诊原因", "可选机构", "共享资料范围", "家属代办选项", "院后随访说明"],
    system: ["生成知情确认记录", "写入资料共享授权", "同步给接诊医生和转诊中心", "支持家属代办授权"],
    output: "形成患者知情、自愿、可选择、可追溯的授权记录。",
    next: "授权完成后进入转诊中心预审。",
  },
  {
    id: "receive",
    title: "县医院接收",
    shortTitle: "县院接收",
    owner: "转诊中心 / 县医院科室",
    status: "县医院端",
    tone: "green",
    desc: "转诊中心先预审病种规则、资料完整和患者授权；科室再确认是否接收，并匹配医生、号源、床位或绿色通道。",
    inputs: ["转诊单", "病种规则结果", "资料完整率", "患者授权", "科室资源"],
    system: ["预审转诊合理性", "分配接诊科室", "匹配号源和床位", "向基层和患者回传接收结果"],
    output: "患者、基层医生和县医院科室同时看到接收状态、到院时间和下一步安排。",
    next: "若资料完整则到院诊疗，若资料缺项则退回补充。",
  },
  {
    id: "materialReturn",
    title: "资料缺项退回",
    shortTitle: "缺项退回",
    owner: "转诊中心 / 县医院科室",
    status: "待补资料",
    tone: "red",
    desc: "资料不完整时，系统不只显示退回，而是明确缺什么、为什么缺、如何补、补齐后是否自动重提。",
    inputs: ["必填资料清单", "已上传资料", "缺项原因", "补充时限"],
    system: ["标记必填和选填", "退回基层补充", "影响协作服务审核", "补齐后重新提交预审"],
    output: "基层医生收到可执行的补充清单，避免反复沟通和无效等待。",
    next: "补齐后回到转诊中心预审和县医院接收。",
  },
  {
    id: "consultDecision",
    title: "会诊后决定是否上转",
    shortTitle: "会诊决策",
    owner: "县医院专科医生 / 基层医生",
    status: "会诊协作",
    tone: "teal",
    desc: "会诊用于过滤无序上转。专家回复后，系统把结论转成留基层、补检查复评、规范上转或立即绿色通道。",
    inputs: ["会诊申请", "基层检查资料", "专家回复", "复评结果"],
    system: ["沉淀会诊意见", "生成下一步任务", "必要时转为正式转诊单", "保留协作服务证据"],
    output: "能留基层的继续基层治疗，必须上转的进入规范上转或急症通道。",
    next: "进入县医院接收或基层继续随访。",
  },
  {
    id: "dischargeReturn",
    title: "出院后回传基层",
    shortTitle: "出院回传",
    owner: "县医院接诊科室 / 基层家庭医生",
    status: "闭环回传",
    tone: "green",
    desc: "县医院诊疗结束后，回传诊断、用药建议、康复计划、复诊时间和风险预警指标，系统自动生成基层随访任务。",
    inputs: ["出院小结", "门诊诊疗建议", "用药方案", "康复计划", "复诊计划"],
    system: ["回传基层医生", "生成 48 小时随访", "同步患者端提醒", "异常指标自动回流县医院"],
    output: "患者不在县医院治疗结束后断档，而是回到家庭医生和基层机构继续管理。",
    next: "基层完成随访并回写结果。",
  },
  {
    id: "compensation",
    title: "协作补偿审核",
    shortTitle: "协作补偿",
    owner: "运营中心 / 医保质控 / 机构管理员",
    status: "合规审核",
    tone: "blue",
    desc: "补偿真实医疗协作服务，不补偿转诊人头，不按患者消费金额提成。服务记录、患者知情、资料完整和闭环结果共同作为审核依据。",
    inputs: ["病情评估记录", "资料整理上传", "会诊协作记录", "患者授权", "接收或回传结果"],
    system: ["匹配可补偿服务项目", "校验规则与资料", "识别异常转诊", "生成结算审核台账"],
    output: "只有真实发生、资料完整、患者知情、闭环完成的协作服务进入结算。",
    next: "进入管理端监管和异常复核。",
  },
  {
    id: "supervision",
    title: "管理端全过程监管",
    shortTitle: "监管闭环",
    owner: "医共体运营中心 / 卫健局 / 医保办",
    status: "管理端",
    tone: "violet",
    desc: "管理端从全局指标下钻到机构、病种、医生和单张转诊单，定位无序上转、接收超时、资料缺项、随访断档和异常补偿。",
    inputs: ["转诊全流程数据", "机构排行", "病种分布", "接收时效", "随访闭环", "结算审核"],
    system: ["指标监测", "问题定位", "责任到人", "督办整改", "复盘规则"],
    output: "形成可汇报、可追责、可优化的县域医共体转诊运营闭环。",
    next: "持续优化病种规则、基层能力和县医院承接能力。",
  },
];

const singlePatientDemoStages = [
  {
    lifecycleId: "initiate",
    title: "基层医生发起上转",
    status: "草稿已生成",
    owner: "城东镇卫生院 · 周建国",
    time: "09:18",
    action: "填写结构化转诊单",
    result: "刘桂英胸闷 2 小时，心电图 ST-T 改变，基层判断需走胸痛绿色通道。",
    materials: ["患者基本信息", "胸痛主诉", "血压心率", "基层心电图", "既往用药"],
    doctorView: "基层医生看到发起表单、必填资料和拟转心内科。",
    patientView: "患者暂时收到基层医生解释，还未进入正式授权确认。",
    managerView: "管理端看到草稿数量，但不纳入正式上转统计。",
    evidence: ["基层医生实名发起", "来源机构自动绑定", "患者主索引已匹配"],
  },
  {
    lifecycleId: "ruleMatch",
    title: "系统匹配病种规则",
    status: "规则命中",
    owner: "系统规则引擎",
    time: "09:20",
    action: "命中胸痛 / 急性冠脉综合征风险",
    result: "系统判断为必须上转，建议进入县人民医院心内科 / 胸痛中心绿色通道。",
    materials: ["胸痛规则", "ST-T 改变", "血压 168/96", "发作时间", "急症标识"],
    doctorView: "医生端显示必须上转、目标科室和必带资料。",
    patientView: "患者端准备展示为什么建议转诊和可选择机构。",
    managerView: "管理端看到胸痛规则命中，纳入急症上转监管。",
    evidence: ["病种规则版本 V1.0", "绿色通道触发", "目标科室自动匹配"],
  },
  {
    lifecycleId: "materialReturn",
    title: "资料校验与缺项提示",
    status: "待补肌钙蛋白",
    owner: "转诊中心预审",
    time: "09:22",
    action: "校验心电图、生命体征和检验资料",
    result: "资料完整率 80%，可先走急症预审，但提示补传快速肌钙蛋白结果。",
    materials: ["已传心电图", "已传血压心率", "已传既往用药", "缺肌钙蛋白", "缺发作时间精确记录"],
    doctorView: "基层医生看到缺项清单和补齐按钮。",
    patientView: "患者端不显示内部缺项，只看到正在预审。",
    managerView: "管理端看到资料缺项会影响接收效率和协作服务审核。",
    evidence: ["资料完整率 80%", "缺项原因已记录", "允许急症先行"],
  },
  {
    lifecycleId: "consent",
    title: "患者知情授权",
    status: "已授权",
    owner: "刘桂英 / 家属",
    time: "09:25",
    action: "确认转诊原因、可选机构和资料共享",
    result: "患者同意将本次胸痛相关资料共享给县医院心内科和城东家庭医生团队。",
    materials: ["转诊原因", "可选机构", "资料共享范围", "院后随访授权", "家属通知"],
    doctorView: "医生端看到患者已授权，可提交县医院接收。",
    patientView: "患者看到去哪儿、找谁、带什么、授权给谁。",
    managerView: "管理端看到患者知情已留痕，满足合规审核前置条件。",
    evidence: ["患者端确认时间 09:25", "资料共享授权", "院后随访授权"],
  },
  {
    lifecycleId: "receive",
    title: "县医院接收",
    status: "心内科已接收",
    owner: "县人民医院心内科 / 转诊中心",
    time: "09:31",
    action: "转诊中心预审，心内科确认接收",
    result: "县医院锁定胸痛中心绿色通道，建议 10:20 前到院，心内科接诊医生已确认。",
    materials: ["转诊单", "病种规则结果", "患者授权", "心电图", "科室资源"],
    doctorView: "基层医生看到已接收、到院时间、接诊科室和补传要求。",
    patientView: "患者端显示县医院已接收、到院地点和携带材料。",
    managerView: "管理端看到接收耗时 13 分钟，符合急症响应要求。",
    evidence: ["转诊中心预审通过", "心内科接收回执", "绿色通道已锁定"],
  },
  {
    lifecycleId: "consultDecision",
    title: "会诊 / 到院诊疗决策",
    status: "到院诊疗中",
    owner: "胸痛中心接诊医生",
    time: "10:20",
    action: "复查心电图与肌钙蛋白",
    result: "患者到达胸痛中心，进入急诊评估；如结果支持 ACS，转入住院或介入评估。",
    materials: ["到院签到", "复查心电图", "肌钙蛋白", "接诊记录", "处置建议"],
    doctorView: "县医院医生看到基层资料和接诊记录，基层医生看到到院状态。",
    patientView: "患者端显示已到院、正在接诊和下一检查地点。",
    managerView: "管理端看到到院确认，急症闭环未断档。",
    evidence: ["患者到院确认", "检查复查记录", "急诊处置留痕"],
  },
  {
    lifecycleId: "dischargeReturn",
    title: "出院后回传基层",
    status: "方案已回传",
    owner: "县医院心内科 / 城东家庭医生团队",
    time: "出院当日",
    action: "回传诊断、用药和复诊计划",
    result: "心内科将诊疗方案、用药建议、复诊时间和风险预警指标回传给基层。",
    materials: ["诊断结果", "出院小结", "用药方案", "复诊计划", "风险预警指标"],
    doctorView: "基层医生收到 48 小时随访任务和用药确认任务。",
    patientView: "患者端看到出院后谁继续管、什么时候复诊、哪些症状要回院。",
    managerView: "管理端看到县医院已回传，等待基层随访闭环。",
    evidence: ["出院小结回传", "随访任务生成", "患者端提醒发送"],
  },
  {
    lifecycleId: "compensation",
    title: "协作补偿审核",
    status: "待运营审核",
    owner: "医共体运营中心 / 医保质控",
    time: "随访后",
    action: "校验真实服务、授权和闭环结果",
    result: "可申请转诊前病情评估、资料整理上传、急症转诊衔接、院后随访衔接等服务补偿。",
    materials: ["病情评估记录", "资料上传记录", "患者授权", "县医院接收回执", "随访结果"],
    doctorView: "医生端看到本人可提交的协作服务记录和退回原因。",
    patientView: "患者端不显示补偿金额，只可评价转诊和随访体验。",
    managerView: "管理端审核服务是否真实、转诊是否合理、患者是否知情。",
    evidence: ["不按人头结算", "不按消费金额提成", "服务证据链完整"],
  },
  {
    lifecycleId: "supervision",
    title: "管理端全过程监管",
    status: "闭环完成",
    owner: "医共体运营中心",
    time: "月度复盘",
    action: "纳入指标、质控和机构复盘",
    result: "该病例进入急症上转闭环、接收时效、资料完整、患者满意度和协作服务审核台账。",
    materials: ["接收时效", "资料完整率", "到院确认", "随访闭环", "患者评价"],
    doctorView: "医生端看到个人服务质量反馈和病例复盘建议。",
    patientView: "患者端可评价服务、查询授权和后续复诊提醒。",
    managerView: "管理端可从指标下钻到本病例，形成督办和规则优化依据。",
    evidence: ["闭环完成", "指标入库", "质控复盘"],
  },
];

const state = {
  page: "dashboard",
  role: "manager",
  theme: localStorage.getItem("hmis-theme") || "auto",
  referralStage: "all",
  referralTab: "referrals",
  careTab: "chronic",
  systemTab: "data",
  doctorReferralTab: "doctorReferrals",
  doctorPatientTab: "doctorPatients",
  selectedReferralId: referrals[0].id,
  selectedPathwayId: "chestPain",
  disease: "hypertension",
  demoStepIndex: 0,
  consentConfirmed: false,
  consultPatientId: null,
  selectedSettlementId: null,
  emergencyDemoStep: null,
  supervisedInstitutions: [],
  aiReferralStep: 0,    // 0=hidden  1=scanning  2=results
  chronicAIOpen: false,
  consultDraftIdx: null,
  referralAnomalyOpen: false,
  followupRiskSort: false,
  bpFeedbackOpen: false,
  missingAIOpen: false,
  patientFilter: "all",
  chronicDone: [],
  bookedSlot: null,
  familyMsgSent: {},
  searchKeyword: "",
  completedFollowups: [],
  enrolledSchedules: {},
  repliedConsults: {},
  settingsOpen: false,
  notifOpen: false,
  readNotifs: false,
  settings: {
    // 通知与预警
    alertEmergency: true,
    alertMaterials: true,
    alertConsent: true,
    alertFrequency: false,
    // 数据展示
    showPhone: true,
    showAmount: true,
    showScore: true,
    // 角色权限
    doctorSeeAllPatients: false,
    patientSeeAmount: true,
    managerCanExport: true,
  },
};

const pageTitles = {
  dashboard: "县域运行驾驶舱",
  referralHub: "转诊管理",
  careHub: "专病监管",
  systemHub: "数据治理",
  referrals: "转诊监管中心",
  rules: "病种转诊规则",
  diseaseCatalog: "转诊病种目录",
  referralStandards: "转诊标准配置",
  chronic: "慢病监管中心",
  doctors: "医生协同监管",
  data: "数据治理中心",
  emergency: "急救与随访监管",
  performance: "绩效与医保协同",
  collaboration: "协作激励与合规结算",
  access: "三端权限与规则",
  doctorHome: "我的医共体工作台",
  doctorReferralHub: "我的转诊",
  doctorPatientHub: "我的患者",
  doctorReferrals: "我的转诊工作台",
  doctorRules: "转诊规则速查",
  doctorConsults: "会诊协作",
  doctorPatients: "授权患者",
  doctorFollowups: "随访任务",
  doctorLearning: "下沉带教",
  doctorCompensation: "我的协作服务",
  patientHome: "我的县域健康服务",
  patientReferral: "我的转诊进度",
  patientAppointments: "预约就医",
  patientReports: "报告与费用",
  patientFamilyDoctor: "家庭医生",
  patientChronic: "慢病随访",
  patientConsent: "转诊知情与授权",
};

const roleLabels = {
  manager: "医共体管理端",
  doctor: "基层与县医院医生端",
  patient: "居民患者端",
};

const searchPlaceholders = {
  manager: "搜索机构、转诊单、病种、指标",
  doctor: "搜索我的患者、转诊单、会诊、随访任务",
  patient: "搜索我的预约、报告、家庭医生",
};

const $ = (selector) => document.querySelector(selector);
const systemThemeQuery = window.matchMedia("(prefers-color-scheme: dark)");

function getEffectiveTheme() {
  if (state.theme === "auto") {
    return systemThemeQuery.matches ? "dark" : "light";
  }
  return state.theme;
}

function applyTheme() {
  document.documentElement.dataset.theme = getEffectiveTheme();
  document.documentElement.dataset.themeChoice = state.theme;
  document.querySelectorAll("button[data-theme-choice]").forEach((button) => {
    button.classList.toggle("active", button.dataset.themeChoice === state.theme);
  });
}

function init() {
  applyTheme();
  renderNav();
  bindEvents();
  render();
}

function bindEvents() {
  $("#mainNav").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-page]");
    if (!button) return;
    state.page = button.dataset.page;
    render();
  });

  document.querySelector(".role-switch").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-role]");
    if (!button) return;
    state.role = button.dataset.role;
    state.page = defaultPageByRole[state.role];
    state.searchKeyword = "";
    state.demoStepIndex = 0;
    $("#searchInput").value = "";
    render();
    showToast(`已切换到${roleLabels[state.role]}。`);
  });

  $("#settingsButton").addEventListener("click", () => {
    closeNotif();
    if (state.settingsOpen) closeOverlay(); else openSettings();
  });

  $("#notifButton").addEventListener("click", () => {
    closeOverlay();
    if (state.notifOpen) closeNotif(); else openNotif();
  });

  $("#overlayBackdrop").addEventListener("click", () => {
    closeOverlay();
    closeNotif();
  });

  // Load persisted settings
  try {
    const saved = localStorage.getItem("hmis-settings");
    if (saved) Object.assign(state.settings, JSON.parse(saved));
  } catch (_) {}

  document.querySelector(".theme-switch").addEventListener("click", (event) => {
    const button = event.target.closest("button[data-theme-choice]");
    if (!button) return;
    state.theme = button.dataset.themeChoice;
    localStorage.setItem("hmis-theme", state.theme);
    applyTheme();
    const labels = { light: "白天视图", dark: "夜间视图", auto: "跟随系统" };
    showToast(`已切换为${labels[state.theme]}。`);
  });

  systemThemeQuery.addEventListener("change", () => {
    if (state.theme !== "auto") return;
    applyTheme();
  });

  $("#commandButton").addEventListener("click", () => {
    if (state.role === "manager") {
      state.page = "referrals";
      render();
      showToast("已进入转诊监管中心，可查看全县上转、接诊和闭环情况。");
      return;
    }
    if (state.role === "doctor") {
      state.page = "doctorReferrals";
      render();
      showToast("已进入我的转诊工作台，可发起上转、补充资料或查看接收状态。");
      return;
    }
    state.page = "patientAppointments";
    render();
    showToast("已进入预约就医，可查看县医院、基层门诊和专科下沉号源。");
  });

  $("#searchInput").addEventListener("input", (event) => {
    state.searchKeyword = event.target.value.trim();
    render();
  });

  $("#searchInput").addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.target.value = "";
      state.searchKeyword = "";
      render();
    }
  });

  $("#content").addEventListener("click", handleContentClick);

  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-close-detail]") || event.target.id === "detailBackdrop") {
      closeDetail();
      return;
    }

    const drawerGoPage = event.target.closest("#detailDrawer [data-go-page]");
    if (drawerGoPage) {
      state.page = drawerGoPage.dataset.goPage;
      closeDetail();
      render();
      return;
    }

    const drawerAction = event.target.closest("#detailDrawer [data-drawer-action]");
    if (drawerAction) {
      showToast(drawerAction.dataset.message || "操作已记录到当前业务流程。");
    }

    // Settings panel — event delegation (× close, toggle, save, reset)
    if (event.target.closest("[data-close-settings]")) {
      closeOverlay();
      return;
    }
    const toggleBtn = event.target.closest("[data-toggle-setting]");
    if (toggleBtn) {
      const key = toggleBtn.dataset.toggleSetting;
      state.settings[key] = !state.settings[key];
      refreshSettingsPanel();
      render();
      return;
    }
    if (event.target.closest("[data-save-settings]")) {
      localStorage.setItem("hmis-settings", JSON.stringify(state.settings));
      closeOverlay();
      showToast("设置已保存，下次访问自动加载。");
      return;
    }
    if (event.target.closest("[data-reset-settings]")) {
      state.settings = {
        alertEmergency: true, alertMaterials: true, alertConsent: true, alertFrequency: false,
        showPhone: true, showAmount: true, showScore: true,
        doctorSeeAllPatients: false, patientSeeAmount: true, managerCanExport: true,
      };
      refreshSettingsPanel();
      render();
      showToast("已恢复默认设置。");
      return;
    }

    // Notification panel — navigate on item click
    const notifItem = event.target.closest("[data-notif-page]");
    if (notifItem) {
      const targetPage = notifItem.dataset.notifPage;
      if (targetPage) {
        state.page = targetPage;
        render();
      }
      closeNotif();
      return;
    }
    if (event.target.closest("[data-close-notif]")) {
      closeNotif();
      return;
    }
    if (event.target.closest("[data-clear-notif]")) {
      state.readNotifs = true;
      closeNotif();
      updateNotifBadge();
      showToast("所有通知已标为已读。");
      return;
    }
  });
}

function handleContentClick(event) {
  const searchResult = event.target.closest("[data-search-page]");
  if (searchResult) {
    const targetPage = searchResult.dataset.searchPage;
    const referralId = searchResult.dataset.searchReferral;
    if (referralId) state.selectedReferralId = referralId;
    state.page = targetPage;
    state.searchKeyword = "";
    $("#searchInput").value = "";
    render();
    return;
  }

  const goPageButton = event.target.closest("[data-go-page]");
  if (goPageButton) {
    state.page = goPageButton.dataset.goPage;
    render();
    return;
  }

  const referralButton = event.target.closest("button[data-referral]");
  if (referralButton) {
    state.selectedReferralId = referralButton.dataset.referral;
    const selectedReferral = referrals.find((item) => item.id === state.selectedReferralId);
    const matchedPathway = upwardReferralPathways.find((item) => item.patient === selectedReferral?.patient);
    if (matchedPathway) state.selectedPathwayId = matchedPathway.id;
    render();
    return;
  }

  const pathwayCard = event.target.closest("[data-pathway]");
  if (pathwayCard) {
    state.selectedPathwayId = pathwayCard.dataset.pathway;
    const selectedPathway = upwardReferralPathways.find((item) => item.id === state.selectedPathwayId);
    const matchedReferral = referrals.find((item) => item.patient === selectedPathway?.patient);
    if (matchedReferral) state.selectedReferralId = matchedReferral.id;
    render();
    showToast(`已选择路径：${selectedPathway?.title || "上转路径"}`);
    return;
  }

  const hubTab = event.target.closest("button[data-hub-tab]");
  if (hubTab) {
    const hubId = hubTab.dataset.hub;
    const cfg = hubConfigs[hubId];
    if (cfg) {
      state[cfg.stateKey] = hubTab.dataset.hubTab;
      state.page = hubId;
      render();
    }
    return;
  }

  const tab = event.target.closest("button[data-stage]");
  if (tab) {
    state.referralStage = tab.dataset.stage;
    render();
    return;
  }

  const disease = event.target.closest("button[data-disease]");
  if (disease) {
    state.disease = disease.dataset.disease;
    render();
    return;
  }

  const demoStep = event.target.closest("button[data-demo-step]");
  if (demoStep) {
    state.demoStepIndex = Number(demoStep.dataset.demoStep);
    render();
    showToast(`已切换到单病例流程：${singlePatientDemoStages[state.demoStepIndex].title}`);
    return;
  }

  const demoAction = event.target.closest("button[data-demo-action]");
  if (demoAction) {
    if (demoAction.dataset.demoAction === "next") {
      state.demoStepIndex = Math.min(singlePatientDemoStages.length - 1, state.demoStepIndex + 1);
      render();
      showToast(`刘桂英病例推进到：${singlePatientDemoStages[state.demoStepIndex].title}`);
      return;
    }
    if (demoAction.dataset.demoAction === "prev") {
      state.demoStepIndex = Math.max(0, state.demoStepIndex - 1);
      render();
      showToast(`已回到：${singlePatientDemoStages[state.demoStepIndex].title}`);
      return;
    }
    if (demoAction.dataset.demoAction === "reset") {
      state.demoStepIndex = 0;
      render();
      showToast("单病例流程已重置到基层医生发起上转。");
      return;
    }
  }

  const detailTarget = event.target.closest("[data-detail]");
  if (detailTarget && !event.target.closest("button[data-action]")) {
    openDetail(detailTarget);
    return;
  }

  const action = event.target.closest("button[data-action]");
  if (!action) return;

  if (action.dataset.action === "open-referrals") {
    state.page = state.role === "doctor" ? "doctorReferrals" : "referrals";
    render();
    showToast("已进入转诊中心。");
    return;
  }

  if (action.dataset.action === "supplement") {
    const sel = referrals.find((r) => r.id === state.selectedReferralId);
    if (sel) {
      sel.status = "待补充资料";
      sel.timeline.push(["刚刚", "缺项补充请求", "基层医生已收到提示：请补充检查结果、生命体征和病情摘要。"]);
      render();
    }
    showToast("已提示基层医生补充检查结果、生命体征和病情摘要。");
    return;
  }

  if (action.dataset.action === "consult") {
    state.consultPatientId = state.selectedReferralId;
    state.page = "doctorConsults";
    render();
    const sel = referrals.find((r) => r.id === state.selectedReferralId);
    const name = sel ? sel.patient : "当前患者";
    showToast(`已进入会诊协作，${name} 的会诊申请已置顶。`);
    return;
  }

  if (action.dataset.action === "confirm-followup") {
    if (state.role === "patient") {
      const allReady = state.chronicDone.includes("bp") && state.chronicDone.includes("drug");
      if (!allReady) {
        showToast("请先完成血压填报和用药确认，再提交今日随访。");
        return;
      }
      if (!state.chronicDone.includes("followup")) {
        state.chronicDone = [...state.chronicDone, "followup"];
      }
      render();
      showToast("今日随访已完成，血压和用药记录已同步给家庭医生团队。");
    } else {
      const sel = referrals.find((r) => r.id === state.selectedReferralId);
      if (sel) {
        sel.status = "随访完成";
        sel.stage = "followup";
        sel.timeline.push(["刚刚", "基层随访确认", "随访结果已同步给县医院和家庭医生团队。"]);
        render();
      }
      showToast("随访结果已确认，任务将同步到县医院和家庭医生团队。");
    }
    return;
  }

  if (action.dataset.action === "book") {
    showToast("已模拟预约：县人民医院心内科明日 10:30 专病门诊。");
    return;
  }

  if (action.dataset.action === "authorize-family") {
    showToast("已模拟授权家属代办，有效期 30 天，可随时取消。");
    return;
  }

  if (action.dataset.action === "approve-service") {
    let count = 0;
    settlementRows.forEach((row, i) => {
      if (row[4] === "待审核") {
        settlementRows[i] = [row[0], row[1], row[2], row[3], "已通过", row[5], "green"];
        count++;
      }
    });
    doctorServiceRecords.forEach((row, i) => {
      if (row[2] === "待审核") {
        doctorServiceRecords[i] = [row[0], row[1], "已通过", row[3], row[4], "green"];
      }
    });
    render();
    showToast(`已批量通过 ${count || "全部"} 笔协作服务，进入机构结算台账。`);
    return;
  }

  if (action.dataset.action === "reject-service") {
    const idx = settlementRows.findIndex((row) => row[4] === "待审核");
    if (idx !== -1) {
      const row = settlementRows[idx];
      settlementRows[idx] = [row[0], row[1], row[2], row[3], "退回补充", row[5], "red"];
      render();
      showToast(`${row[1]} 的服务记录已退回，原因将同步给协作医生和机构管理员。`);
    } else {
      showToast("当前无待审核记录可退回。");
    }
    return;
  }

  if (action.dataset.action === "submit-service") {
    const sel = referrals.find((r) => r.id === state.selectedReferralId);
    const patient = sel ? sel.patient : "当前患者";
    const newId = "S" + Date.now().toString().slice(-10);
    const doctorName = sel ? sel.doctor : "当前医生";
    const sourceName = sel ? sel.source : "基层机构";
    // 同步写入医生端记录
    doctorServiceRecords.unshift(["新协作服务记录", patient, "待审核", "服务已提交，等待运营中心校验病历和闭环结果", "--", "amber"]);
    // 同步写入管理端结算台账
    settlementRows.unshift([newId, `${sourceName} · ${doctorName}`, "新协作服务记录", patient, "待审核", "--", "amber"]);
    render();
    showToast("服务记录已提交审核，已同步到管理端结算台账，等待运营中心复核。");
    return;
  }

  if (action.dataset.action === "submit-consent") {
    state.consentConfirmed = true;
    const sel = referrals.find((r) => r.id === state.selectedReferralId);
    if (sel) {
      sel.timeline.push(["刚刚", "患者知情授权完成", "转诊授权、资料共享和院后随访授权已留痕。"]);
    }
    render();
    showToast("知情确认已完成，转诊授权、资料共享和院后随访授权已留痕。");
    return;
  }

  if (action.dataset.action === "start-referral") {
    const pathway = getSelectedPathway();
    const sel = referrals.find((r) => r.id === state.selectedReferralId);
    if (sel) {
      sel.status = "草稿已提交";
      sel.timeline.push(["刚刚", `按「${pathway.title}」发起上转`, "转诊单已生成，下一步校验资料清单。"]);
      render();
    }
    showToast(`已按「${pathway.title}」生成转诊草稿，下一步校验资料清单。`);
    return;
  }

  if (action.dataset.action === "check-materials") {
    const pathway = getSelectedPathway();
    const sel = referrals.find((r) => r.id === state.selectedReferralId);
    if (sel) {
      sel.status = "待补充资料";
      sel.timeline.push(["刚刚", "资料清单校验", `${pathway.disease} 清单已校验，缺项已标注，请补充后提交。`]);
      render();
    }
    showToast(`${pathway.disease} 资料清单已校验，缺项会进入"待补充资料"。`);
    return;
  }

  if (action.dataset.action === "submit-preaudit") {
    const sel = referrals.find((r) => r.id === state.selectedReferralId);
    if (sel) {
      sel.status = "预审中";
      sel.stage = "consulting";
      sel.timeline.push(["刚刚", "提交转诊中心预审", "系统同步病种规则、患者知情状态和绩效预估。"]);
      render();
    }
    showToast("已提交转诊中心预审，系统同步病种规则、患者知情和绩效预估。");
    return;
  }

  if (action.dataset.action === "clear-search") {
    state.searchKeyword = "";
    $("#searchInput").value = "";
    render();
    return;
  }

  if (action.dataset.action === "publish-rule") {
    showToast("已模拟发布，启用规则将同步到医生端、转诊预审和绩效校验。");
    return;
  }

  // 患者端：报告费用
  if (action.dataset.action === "download-report") {
    showToast(`${action.dataset.name} 报告下载中，将保存为 PDF，仅限本人查看。`);
    return;
  }

  if (action.dataset.action === "urge-report") {
    const idx = Number(action.dataset.idx);
    if (patientReports[idx]) {
      patientReports[idx][3] = "审核中";
      render();
      showToast(`${action.dataset.name} 催审已发送，预计 2 小时内出具结果。`);
    }
    return;
  }

  if (action.dataset.action === "dispute-report") {
    showToast(`${action.dataset.name} 异议申请已提交，医院质控部门将在 3 个工作日内答复。`);
    return;
  }

  if (action.dataset.action === "request-recognition") {
    showToast("报告互认申请已发送：本人报告将推送给县医院接诊医生，避免重复检查。");
    return;
  }

  // 患者端：家庭医生
  if (action.dataset.action === "send-message-family") {
    const key = action.dataset.key;
    state.familyMsgSent = { ...state.familyMsgSent, [key]: true };
    render();
    showToast(`消息已发送给 ${action.dataset.label}，通常在工作日 2 小时内回复。`);
    return;
  }

  if (action.dataset.action === "renew-contract") {
    showToast("续签申请已提交，城东家庭医生团队将在下次随访时确认续签意愿。");
    return;
  }

  // 患者端：慢病随访
  if (action.dataset.action === "submit-bp") {
    if (!state.chronicDone.includes("bp")) {
      state.chronicDone = [...state.chronicDone, "bp"];
    }
    render();
    showToast("血压记录已提交：收缩压 138 / 舒张压 84 mmHg，家庭医生已收到数据。");
    return;
  }

  if (action.dataset.action === "confirm-drug") {
    if (!state.chronicDone.includes("drug")) {
      state.chronicDone = [...state.chronicDone, "drug"];
    }
    render();
    showToast("用药已确认：早晚各 1 次，按方案服药，如有不适请联系家庭医生。");
    return;
  }

  // 患者端：预约就医
  if (action.dataset.action === "book-slot") {
    state.bookedSlot = action.dataset.key;
    render();
    showToast(`${action.dataset.time} ${action.dataset.dept} 预约成功，请提前携带医保凭证和转诊单。`);
    return;
  }

  if (action.dataset.action === "cancel-booking") {
    state.bookedSlot = null;
    render();
    showToast("预约已取消，号源已释放，如需重新预约请选择可用时段。");
    return;
  }

  if (action.dataset.action === "settle-select") {
    const id = action.dataset.id;
    state.selectedSettlementId = state.selectedSettlementId === id ? null : id;
    render();
    return;
  }

  if (action.dataset.action === "settle-clear") {
    state.selectedSettlementId = null;
    render();
    return;
  }

  if (action.dataset.action === "approve-row") {
    const idx = settlementRows.findIndex((r) => r[0] === action.dataset.id);
    if (idx !== -1) {
      const row = settlementRows[idx];
      settlementRows[idx] = [row[0], row[1], row[2], row[3], "已通过", row[5], "green"];
      state.selectedSettlementId = row[0];
      render();
      showToast(`${row[0]} 已通过质量审核，进入合规结算阶段。`);
    }
    return;
  }

  if (action.dataset.action === "reject-row") {
    const idx = settlementRows.findIndex((r) => r[0] === action.dataset.id);
    if (idx !== -1) {
      const row = settlementRows[idx];
      settlementRows[idx] = [row[0], row[1], row[2], row[3], "退回补充", row[5], "red"];
      state.selectedSettlementId = row[0];
      render();
      showToast(`${row[0]} 已退回，补充要求已通知协作医生和机构管理员。`);
    }
    return;
  }

  // 医生协同监管
  if (action.dataset.action === "urge-consult") {
    const idx = Number(action.dataset.idx);
    if (consultationQueue[idx]) {
      consultationQueue[idx][4] = "已催办";
      render();
      showToast(`${consultationQueue[idx][0]} 会诊已催办，通知已发送给 ${consultationQueue[idx][3]}。`);
    }
    return;
  }

  if (action.dataset.action === "add-schedule") {
    showToast("新增排班功能：选择科室、医生、机构和时间后保存，将自动同步到医生工作台。");
    return;
  }

  // 急救随访监管
  if (action.dataset.action === "emergency-start") {
    state.emergencyDemoStep = 0;
    render();
    showToast("演练开始：模拟基层识别急症触发预警，点击「下一步」推进。");
    return;
  }

  if (action.dataset.action === "emergency-next") {
    if (state.emergencyDemoStep !== null && state.emergencyDemoStep < 4) {
      state.emergencyDemoStep++;
      const stepNames = ["急救中心派车", "县医院预接诊", "康复回基层", "全部完成"];
      render();
      if (state.emergencyDemoStep < 4) {
        showToast(`演练推进：${stepNames[state.emergencyDemoStep - 1]}`);
      } else {
        showToast("演练完成：全程四步闭环，患者已康复回基层。");
      }
    }
    return;
  }

  if (action.dataset.action === "emergency-reset") {
    state.emergencyDemoStep = null;
    render();
    showToast("演练已结束，流程恢复常态展示。");
    return;
  }

  // 绩效医保
  if (action.dataset.action === "supervise-institution") {
    const name = action.dataset.name;
    if (!state.supervisedInstitutions.includes(name)) {
      state.supervisedInstitutions.push(name);
      render();
      showToast(`${name} 督办通知已发出，整改要求同步给机构负责人和县医院运营中心。`);
    }
    return;
  }

  if (action.dataset.action === "export-ledger") {
    showToast("台账导出中：包含本月各机构规范上转、闭环、慢病、满意度和总分，将生成 Excel 报表。");
    return;
  }

  if (action.dataset.action === "generate-report") {
    showToast("季报生成中：汇总本季度转诊指标、费用控制、慢病管理和患者满意度，将生成 PDF 报告。");
    return;
  }

  // 数据治理
  if (action.dataset.action === "sync-integration") {
    const idx = Number(action.dataset.idx);
    if (integrations[idx]) {
      const row = integrations[idx];
      const newHealth = Math.min(99, Number(row[2]) + 8);
      integrations[idx] = [row[0], row[1], String(newHealth), "同步中"];
      render();
      showToast(`${row[0]} 数据同步已触发，健康度从 ${row[2]}% 提升至 ${newHealth}%。`);
    }
    return;
  }

  if (action.dataset.action === "export-missing") {
    const count = patientDatabase.filter((p) => p.missing && p.missing.length > 0).length;
    showToast(`缺项清单已导出：共 ${count} 名患者存在资料缺项，已按机构和缺项类型分类。`);
    return;
  }

  if (action.dataset.action === "remind-missing") {
    const name = action.dataset.patient;
    const patient = patientDatabase.find((p) => p.name === name);
    const missing = patient && patient.missing ? patient.missing.join("、") : "相关资料";
    render();
    showToast(`已向 ${name} 的责任医生发送补录提醒：请补充 ${missing}。`);
    return;
  }

  // 医生端：随访任务
  if (action.dataset.action === "complete-followup-task") {
    const idx = Number(action.dataset.idx);
    if (!state.completedFollowups.includes(idx)) {
      state.completedFollowups = [...state.completedFollowups, idx];
    }
    render();
    showToast(`${action.dataset.title} 随访已完成，结果已同步给县医院和家庭医生团队。`);
    return;
  }

  // AI 辅助转诊分析
  if (action.dataset.action === "ai-scan") {
    state.aiReferralStep = 1;
    render();
    window.setTimeout(() => {
      state.aiReferralStep = 2;
      render();
    }, 1600);
    return;
  }

  if (action.dataset.action === "ai-referral-close") {
    state.aiReferralStep = 0;
    render();
    return;
  }

  if (action.dataset.action === "ai-confirm-referral") {
    const sel = referrals.find((r) => r.id === state.selectedReferralId);
    if (sel) {
      sel.status = "草稿已提交";
      sel.timeline.push(["刚刚", "AI 辅助转诊发起", "已根据 AI 分析结果生成转诊草稿，下一步校验资料清单。"]);
    }
    state.aiReferralStep = 0;
    render();
    showToast("已按 AI 建议路径发起转诊，资料缺项已标注，请补充后提交预审。");
    return;
  }

  // 授权患者快速筛选
  if (action.dataset.action === "patient-filter") {
    state.patientFilter = action.dataset.filter;
    render();
    return;
  }

  // P1-2: 会诊意见草稿
  if (action.dataset.action === "consult-draft-open") {
    state.consultDraftIdx = Number(action.dataset.idx);
    render();
    return;
  }

  if (action.dataset.action === "consult-draft-close") {
    state.consultDraftIdx = null;
    render();
    return;
  }

  if (action.dataset.action === "consult-draft-confirm") {
    const idx = Number(action.dataset.idx);
    state.repliedConsults = { ...state.repliedConsults, [idx]: "已回复" };
    if (consultationQueue[idx]) consultationQueue[idx][4] = "已回复";
    state.consultDraftIdx = null;
    render();
    const row = consultationQueue[idx] || [];
    showToast(`${row[0] || "科室"} 会诊意见已按 AI 草稿发送给基层医生，已记录留痕。`);
    return;
  }

  // P1-3: 随访任务风险排序
  if (action.dataset.action === "toggle-followup-sort") {
    state.followupRiskSort = !state.followupRiskSort;
    render();
    showToast(state.followupRiskSort ? "随访任务已按 AI 风险评分排序，高风险优先。" : "已恢复按默认顺序排列。");
    return;
  }

  // P2-3: 缺项来源推断
  if (action.dataset.action === "missing-ai-open") {
    state.missingAIOpen = true;
    render();
    return;
  }

  if (action.dataset.action === "missing-ai-close") {
    state.missingAIOpen = false;
    render();
    return;
  }

  if (action.dataset.action === "batch-remind-missing") {
    const count = patientDatabase.filter((p) => p.missing && p.missing.length > 0).length;
    state.missingAIOpen = false;
    render();
    showToast(`已向 ${count} 名患者的责任医生批量发送补录提醒，按优先级分组推送。`);
    return;
  }

  // P1-4: 异常转诊检测
  if (action.dataset.action === "referral-anomaly-open") {
    state.referralAnomalyOpen = true;
    render();
    return;
  }

  if (action.dataset.action === "referral-anomaly-close") {
    state.referralAnomalyOpen = false;
    render();
    return;
  }

  if (action.dataset.action === "generate-supervision") {
    const anom = aiReferralAnomalies.find((a) => a.id === action.dataset.id);
    if (anom) showToast(`督办通知已生成：${anom.institution} · ${anom.title}，已推送给机构负责人和县医院运营中心。`);
    return;
  }

  if (action.dataset.action === "export-anomaly-report") {
    showToast("异常分析报告生成中，包含机构、病种、频次趋势和 AI 识别依据，将生成 PDF。");
    return;
  }

  // AI 慢病风险分层
  if (action.dataset.action === "chronic-ai-open") {
    state.chronicAIOpen = true;
    render();
    return;
  }

  if (action.dataset.action === "chronic-ai-close") {
    state.chronicAIOpen = false;
    render();
    return;
  }

  if (action.dataset.action === "ai-chronic-tasks") {
    const highRisk = aiChronicRisk.filter((p) => p.level === "high");
    highRisk.forEach((p) => {
      if (!followupTasks.some((t) => t[0].includes(p.name))) {
        followupTasks.unshift([`${p.name} · AI 高风险`, p.disease, p.action, "red"]);
      }
    });
    state.chronicAIOpen = false;
    render();
    showToast(`已为 ${highRisk.length} 名高风险患者生成优先随访任务，已置顶排列。`);
    return;
  }

  // 医生端：下沉带教
  if (action.dataset.action === "enroll-schedule") {
    const key = action.dataset.key;
    state.enrolledSchedules = { ...state.enrolledSchedules, [key]: true };
    render();
    showToast(`已成功申请参加 ${action.dataset.desc} 下沉带教，排班确认后将收到通知。`);
    return;
  }

  if (action.dataset.action === "submit-case-review") {
    showToast("病例复盘已提交，将纳入本月带教质量考核，县医院导师将在 3 个工作日内反馈。");
    return;
  }

  // 医生端：会诊协作回复
  if (action.dataset.action === "reply-consult") {
    const idx = Number(action.dataset.idx);
    state.repliedConsults = { ...state.repliedConsults, [idx]: "已回复" };
    if (consultationQueue[idx]) {
      consultationQueue[idx][4] = "已回复";
    }
    render();
    showToast(`${action.dataset.dept} 会诊意见已发送给 ${action.dataset.patient} 的基层医生，建议进入转诊流程或继续观察。`);
    return;
  }

  if (action.dataset.action === "toggle-standard") {
    const item = referralStandardConfigs.find((c) => c.name === action.dataset.name);
    if (item) {
      item.status = item.status === "启用" ? "停用" : "启用";
      render();
      showToast(`${item.name} 已${item.status}，下次发布后生效。`);
    }
    return;
  }

  if (action.dataset.action === "toggle-catalog") {
    const item = referralDiseaseCatalog.find((entry) => entry.code === action.dataset.code);
    if (item) {
      const prev = item.status;
      item.status = prev === "启用" ? "停用" : "启用";
      render();
      showToast(`${item.disease} 已${item.status}，下次发布后同步到医生端和转诊预审。`);
    }
    return;
  }

  const selected = referrals.find((item) => item.id === state.selectedReferralId);
  if (action.dataset.action === "accept") {
    selected.status = "已接收";
    selected.stage = "accepted";
    selected.timeline.push(["刚刚", "县医院确认接收", "已锁定接诊医生、号源和检查优先级。"]);
    showToast(`${selected.patient} 的转诊已被县医院接收，基层医生已收到回执。`);
  }
  if (action.dataset.action === "arrange") {
    selected.status = "已安排";
    selected.stage = "arranged";
    selected.timeline.push(["刚刚", "绿色通道安排完成", "已同步患者小程序和基层医生工作台。"]);
    showToast("接诊时间、科室和床位资源已同步。");
  }
  if (action.dataset.action === "return") {
    selected.status = "待基层随访";
    selected.stage = "followup";
    selected.timeline.push(["刚刚", "出院方案回传基层", "康复计划、用药建议和随访任务已下发。"]);
    showToast("院后随访任务已进入基层医生待办。");
  }
  render();
}

function renderNav() {
  const navItems = navItemsByRole[state.role];
  $("#mainNav").innerHTML = navItems
    .map(
      (item) => `
        <button type="button" data-page="${item.id}" class="${state.page === item.id ? "active" : ""}">
          <span class="nav-icon">${navIcon(item.id, item.icon)}</span>
          <span class="nav-label">${item.label}</span>
          ${item.count ? `<span class="nav-count">${item.count}</span>` : ""}
        </button>
      `,
    )
    .join("");
}

function render() {
  // 旧的独立页面（转诊四页、慢病/急救、数据/权限）已合并进各 hub，旧入口跳转时自动切到对应 Tab。
  const legacy = hubLegacyPages[state.page];
  if (legacy) {
    const [hubId, stateKey] = legacy;
    state[stateKey] = state.page;
    state.page = hubId;
  }
  if (!navItemsByRole[state.role].some((item) => item.id === state.page)) {
    state.page = defaultPageByRole[state.role];
  }
  renderNav();
  $("#pageTitle").textContent = pageTitles[state.page];
  $("#viewLabel").textContent = roleLabels[state.role];
  $("#searchInput").setAttribute("placeholder", searchPlaceholders[state.role]);
  applyTheme();
  document.querySelectorAll(".role-switch button").forEach((button) => {
    button.classList.toggle("active", button.dataset.role === state.role);
  });

  const command = getCommandConfig();
  const commandButton = $("#commandButton");
  if (command) {
    commandButton.hidden = false;
    commandButton.innerHTML = `${command.icon}<span>${command.label}</span>`;
  } else {
    commandButton.hidden = true;
    commandButton.innerHTML = "";
  }

  const renderers = {
    dashboard: renderDashboard,
    referralHub: () => renderHub("referralHub"),
    careHub: () => renderHub("careHub"),
    systemHub: () => renderHub("systemHub"),
    referrals: renderReferrals,
    rules: renderRules,
    diseaseCatalog: renderDiseaseCatalog,
    referralStandards: renderReferralStandards,
    chronic: renderChronic,
    doctors: renderDoctors,
    data: renderData,
    emergency: renderEmergency,
    performance: renderPerformance,
    collaboration: renderCollaboration,
    access: renderAccess,
    doctorHome: renderDoctorHome,
    doctorReferralHub: () => renderHub("doctorReferralHub"),
    doctorPatientHub: () => renderHub("doctorPatientHub"),
    doctorReferrals: renderDoctorReferrals,
    doctorRules: renderDoctorRules,
    doctorConsults: renderDoctorConsults,
    doctorPatients: renderDoctorPatients,
    doctorFollowups: renderDoctorFollowups,
    doctorLearning: renderDoctorLearning,
    doctorCompensation: renderDoctorCompensation,
    patientHome: renderPatientHome,
    patientReferral: renderPatientReferral,
    patientAppointments: renderPatientAppointments,
    patientReports: renderPatientReports,
    patientFamilyDoctor: renderPatientFamilyDoctor,
    patientChronic: renderPatientChronic,
    patientConsent: renderPatientConsent,
  };

  if (state.searchKeyword.length >= 2) {
    $("#pageTitle").textContent = `搜索：${state.searchKeyword}`;
    $("#content").innerHTML = renderSearchResults(state.searchKeyword);
    updateNotifBadge();
    return;
  }

  $("#content").innerHTML = renderers[state.page]();
  updateNotifBadge();
}

function getCommandConfig() {
  // 管理端没有“创建”动作，全局主按钮留给真正发起业务的医生端和患者端。
  if (state.role === "doctor") {
    return {
      icon: '<svg class="topbar-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"/><path d="M12 5v14"/></svg>',
      label: "发起转诊",
    };
  }
  if (state.role === "patient") {
    return {
      icon: '<svg class="topbar-svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 2v4"/><path d="M16 2v4"/><path d="M3 10h18"/><path d="M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/></svg>',
      label: "预约就医",
    };
  }
  return null;
}

function getSelectedPathway() {
  return upwardReferralPathways.find((item) => item.id === state.selectedPathwayId) || upwardReferralPathways[0];
}

function getPatientById(id) {
  return patientDatabase.find((item) => item.id === id);
}

function getPatientByName(name) {
  return patientDatabase.find((item) => item.name === name);
}

function getDoctorById(id) {
  return doctorDatabase.find((item) => item.id === id);
}

function getDoctorByName(name) {
  return doctorDatabase.find((item) => item.name === name);
}

function getWorkbenchPatients() {
  return patientDatabase.filter((item) => item.workbench);
}

function getAwaitingCountyPatients() {
  return patientDatabase.filter((item) => item.status === "待县医院接收");
}

function getFollowupPatients() {
  const completed = patientDatabase.filter((item) => item.followupStatus === "已完成").slice(0, 18);
  const pending = patientDatabase.filter((item) => item.followupStatus && item.followupStatus !== "无" && item.followupStatus !== "已完成").slice(0, 7);
  return [...completed, ...pending];
}

function getConsultPatients() {
  return patientDatabase.filter((item) => item.consultStatus && item.consultStatus !== "无").slice(0, 6);
}

function getDoctorWorkbenchStats() {
  const todo = getWorkbenchPatients();
  const awaiting = getAwaitingCountyPatients();
  const followups = getFollowupPatients();
  const completedFollowups = followups.filter((item) => item.followupStatus === "已完成");
  const consults = getConsultPatients();
  const answeredConsults = consults.filter((item) => item.consultStatus === "已回复");
  return {
    todo,
    awaiting,
    followups,
    completedFollowups,
    consults,
    answeredConsults,
    followupRate: Math.round((completedFollowups.length / followups.length) * 100),
  };
}

function getToneByRisk(risk, priority = "") {
  if (risk === "急" || risk === "高" || risk === "高危" || priority === "急" || priority === "高") return "red";
  if (risk === "中" || priority === "中") return "amber";
  return "green";
}

function getToneByStatus(status) {
  if (/待县医院|待补|待确认|会诊中|待回复|待复评|资料补充/.test(status)) return "amber";
  if (/急|高危/.test(status)) return "red";
  if (/完成|已接收|已接诊|已安排|已回复|已授权/.test(status)) return "green";
  return "blue";
}

function getMissingText(patient) {
  return patient.missing.length ? patient.missing.join("、") : "无缺项";
}

function renderDoctorMetric(item) {
  return `
    <article class="metric-card" ${detailAttrs("医生指标", item.label, `${item.value}，${item.detail}`, "doctorHome", item.detailId)}>
      <div class="metric-head">
        <span>${item.label}</span>
        <b class="metric-icon tone-${item.tone}">${item.icon}</b>
      </div>
      <strong>${item.value}</strong>
      <p>${item.detail}</p>
    </article>
  `;
}

function renderDoctorQueueItem(patient, index) {
  const tone = getToneByRisk(patient.risk, patient.priority);
  return `
    <article class="task-item doctor-queue-item" ${detailAttrs("今日患者", `${patient.name} · ${patient.disease}`, `${patient.queueTime}，${patient.taskTitle}，下一步：${patient.nextAction}`, "doctorPatients", `patient.${patient.id}`)}>
      <b class="task-icon tone-${tone}">${String(index + 1).padStart(2, "0")}</b>
      <div class="task-main">
        <strong>${patient.name} · ${patient.disease}</strong>
        <span>${patient.queueTime} · ${patient.taskTitle}</span>
        <span>${patient.institution} → ${patient.targetDept}</span>
      </div>
      <span class="badge ${tone}">${patient.status}</span>
    </article>
  `;
}

function renderDoctorActionCard(action) {
  return `
    <article class="task-item doctor-action-card" ${detailAttrs("医生操作", action.title, action.desc, action.page, action.detailId)}>
      <b class="task-icon tone-${action.tone}">${action.icon}</b>
      <div class="task-main">
        <strong>${action.title}</strong>
        <span>${action.desc}</span>
        <span>${action.rule}</span>
      </div>
      <span class="badge ${action.tone}">${action.tag}</span>
    </article>
  `;
}

function renderPatientDatabaseRow(patient) {
  const tone = getToneByRisk(patient.risk, patient.priority);
  return `
    <tr ${detailAttrs("患者主索引", `${patient.name} · ${patient.disease}`, `${patient.institution}，${patient.status}，${patient.nextAction}`, "data", `patient.${patient.id}`)}>
      <td><strong>${patient.name}</strong><br><span>${patient.sex} · ${patient.age} 岁</span></td>
      <td>${patient.institution}<br><span>${patient.sourceLevel}</span></td>
      <td>${patient.disease}<br><span>${patient.referralType}</span></td>
      <td><span class="badge ${tone}">${patient.risk}</span></td>
      <td>${patient.familyDoctor}<br><span>${patient.countyDoctor}</span></td>
      <td><span class="badge ${getToneByStatus(patient.status)}">${patient.status}</span></td>
    </tr>
  `;
}

function renderDoctorDatabaseRow(doctor) {
  const tone = doctor.qualityScore >= 94 ? "green" : doctor.qualityScore >= 88 ? "blue" : "amber";
  return `
    <tr ${detailAttrs("医生目录", `${doctor.name} · ${doctor.role}`, `${doctor.institution}，${doctor.department}，${doctor.scope}`, "data", `doctor.${doctor.id}`)}>
      <td><strong>${doctor.name}</strong><br><span>${doctor.role}</span></td>
      <td>${doctor.institution}<br><span>${doctor.department}</span></td>
      <td>${doctor.specialty}</td>
      <td>${doctor.todayTasks} 项<br><span>转诊 ${doctor.referralCount} · 会诊 ${doctor.consultCount}</span></td>
      <td><span class="badge ${tone}">${doctor.qualityScore}</span></td>
      <td>${doctor.status}</td>
    </tr>
  `;
}

function escapeAttr(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function detailAttrs(kind, title, desc = "", page = "", detailId = "") {
  const detailIdAttr = detailId ? ` data-detail-id="${escapeAttr(detailId)}"` : "";
  return `data-detail="true"${detailIdAttr} data-detail-kind="${escapeAttr(kind)}" data-detail-title="${escapeAttr(title)}" data-detail-desc="${escapeAttr(desc)}" data-detail-page="${escapeAttr(page)}" role="button" tabindex="0"`;
}

function inferDetailPage(title, kind) {
  const text = `${title} ${kind}`;
  if (/转诊|上转|接诊|胸痛|糖尿病足|慢阻肺|血压|血糖|路径/.test(text)) return state.role === "doctor" ? "doctorReferrals" : "referrals";
  if (/规则配置|标准配置|绩效约束|阈值/.test(text)) return state.role === "doctor" ? "doctorRules" : "referralStandards";
  if (/病种|目录|规则|资料/.test(text)) return state.role === "doctor" ? "doctorRules" : "diseaseCatalog";
  if (/协作|补偿|结算|绩效|医保|费用/.test(text)) return state.role === "doctor" ? "doctorCompensation" : "collaboration";
  if (/慢病|随访|高血压|糖尿病/.test(text)) return state.role === "patient" ? "patientChronic" : "chronic";
  if (/医生|会诊|下沉|带教/.test(text)) return state.role === "doctor" ? "doctorConsults" : "doctors";
  if (/报告|检查|检验|数据|接口|互认/.test(text)) return state.role === "patient" ? "patientReports" : "data";
  if (/急救|绿色通道|胸痛中心|卒中/.test(text)) return "emergency";
  if (/家庭医生|签约|家属|授权|知情/.test(text)) return state.role === "patient" ? "patientFamilyDoctor" : "access";
  return state.page;
}

function openDetail(element) {
  const kind = element.dataset.detailKind || "业务对象";
  const title = element.dataset.detailTitle || element.textContent.trim().slice(0, 24) || "详情";
  const desc = element.dataset.detailDesc || "该对象已纳入县域医共体业务闭环，可继续查看关联流程、责任人和下一步动作。";
  const page = element.dataset.detailPage || inferDetailPage(title, kind);
  const detailId = element.dataset.detailId || "";

  $("#detailKind").textContent = kind;
  $("#detailTitle").textContent = title;
  $("#detailBody").innerHTML = renderDetailContent(kind, title, desc, page, detailId);
  $("#detailBackdrop").hidden = false;
  $("#detailDrawer").hidden = false;
  requestAnimationFrame(() => {
    $("#detailBackdrop").classList.add("show");
    $("#detailDrawer").classList.add("show");
  });
}

function closeDetail() {
  $("#detailBackdrop").classList.remove("show");
  $("#detailDrawer").classList.remove("show");
  window.setTimeout(() => {
    $("#detailBackdrop").hidden = true;
    $("#detailDrawer").hidden = true;
  }, 160);
}

function renderDetailContent(kind, title, desc, page, detailId = "") {
  const deepDetail = renderDeepDetail(detailId, title, desc, page);
  if (deepDetail) return deepDetail;

  const pathway = upwardReferralPathways.find((item) => title.includes(item.disease) || title.includes(item.patient));
  const referral = referrals.find((item) => title.includes(item.patient) || desc.includes(item.patient));
  const relatedPage = pageTitles[page] || "当前模块";
  const evidence = pathway
    ? [
        ["病种规则", pathway.rule],
        ["目标科室", pathway.target],
        ["资料清单", pathway.requiredMaterials.join("、")],
        ["绩效预估", `${pathway.score.reduce((sum, value) => sum + value, 0)} / 100`],
      ]
    : referral
      ? [
          ["转诊单", referral.id],
          ["来源机构", referral.source],
          ["目标科室", referral.target],
          ["当前状态", referral.status],
        ]
      : [
          ["归属模块", relatedPage],
          ["当前端口", roleLabels[state.role]],
        ];

  return `
    <section class="detail-section">
      <h3>业务说明</h3>
      <p>${desc}</p>
    </section>

    <section class="detail-section">
      <h3>关联证据</h3>
      <div class="detail-evidence">
        ${evidence.map(([label, value]) => `
          <article>
            <span>${label}</span>
            <strong>${value}</strong>
          </article>
        `).join("")}
      </div>
    </section>

    <section class="detail-section">
      <h3>下一步动作</h3>
      <div class="detail-actions-grid">
        <button class="primary-button" type="button" data-go-page="${page}">进入${relatedPage}</button>
        <button class="secondary-button" type="button" data-drawer-action="audit" data-message="${title} 已加入待复核清单。">加入复核</button>
        <button class="ghost-button" type="button" data-drawer-action="assign" data-message="${title} 已模拟分配给责任团队。">分配责任人</button>
      </div>
    </section>

    <section class="detail-section">
      <h3>联动关系</h3>
      <div class="detail-link-map">
        ${renderDetailLink("病种目录", state.role === "doctor" ? "doctorRules" : "diseaseCatalog")}
        ${state.role === "manager" ? renderDetailLink("标准配置", "referralStandards") : ""}
        ${renderDetailLink("转诊闭环", state.role === "doctor" ? "doctorReferrals" : "referrals")}
        ${renderDetailLink("协作结算", state.role === "doctor" ? "doctorCompensation" : "collaboration")}
        ${renderDetailLink("权限留痕", state.role === "patient" ? "patientConsent" : "access")}
      </div>
    </section>
  `;
}

function renderDetailLink(label, page) {
  return `<button class="secondary-button" type="button" data-go-page="${page}">${label}</button>`;
}

function renderDeepDetail(detailId, title, desc, page) {
  if (!detailId) return "";

  if (detailId.startsWith("lifecycle.")) {
    return renderLifecycleDeepDetail(referralLifecycleSteps.find((item) => item.id === detailId.replace("lifecycle.", "")));
  }

  if (detailId.startsWith("patient.")) {
    return renderPatientDeepDetail(getPatientById(detailId.replace("patient.", "")));
  }

  if (/^doctor\.D\d+/.test(detailId)) {
    return renderDoctorDeepDetail(getDoctorById(detailId.replace("doctor.", "")));
  }

  if (detailId.startsWith("catalog.")) {
    const item = referralDiseaseCatalog.find((entry) => entry.code === detailId.replace("catalog.", ""));
    if (!item) return "";
    return `
      <section class="detail-section">
        <h3>${item.disease}</h3>
        <p>${item.layer} · ${item.level} · ${item.status}。责任科室：${item.owner}。</p>
      </section>
      <section class="detail-section">
        <h3>转诊判断</h3>
        <div class="detail-evidence">
          ${renderEvidenceItem("上转规则", item.upward)}
          ${renderEvidenceItem("留基层规则", item.stay)}
          ${renderEvidenceItem("下转规则", item.downward)}
          ${renderEvidenceItem("绩效约束", item.performance)}
        </div>
      </section>
      ${renderDrawerStepSection("必带资料", item.materials)}
      ${renderDrawerActionButtons([["查看病种目录", "diseaseCatalog"], ["进入标准配置", "referralStandards"]])}
    `;
  }

  if (detailId.startsWith("standard.")) {
    const item = referralStandardConfigs.find((entry) => entry.name === detailId.replace("standard.", ""));
    if (!item) return "";
    return `
      <section class="detail-section">
        <h3>${item.name}</h3>
        <p>${item.scope}。责任部门：${item.owner}，当前状态：${item.status}。</p>
      </section>
      <section class="detail-section">
        <h3>配置内容</h3>
        <div class="detail-evidence">
          ${renderEvidenceItem("触发条件", item.trigger)}
          ${renderEvidenceItem("执行路径", item.path)}
          ${renderEvidenceItem("必带资料", item.materials)}
          ${renderEvidenceItem("绩效约束", item.performance)}
        </div>
      </section>
      ${renderDrawerActionButtons([["进入标准配置", "referralStandards"], ["查看病种目录", "diseaseCatalog"]])}
    `;
  }

  const stats = getDoctorWorkbenchStats();
  const pendingFollowups = stats.followups.filter((item) => item.followupStatus !== "已完成");

  const detailMap = {
    "doctor.identity": () => `
      <section class="detail-section">
        <h3>身份与权限</h3>
        <p>当前模拟为基层全科医生，同时拥有县医院协同医生授权。能看本人负责、本人机构、本人会诊、患者授权范围内的数据；不能看全县无关病历和他人绩效。</p>
      </section>
      <section class="detail-section">
        <h3>可操作边界</h3>
        <div class="drawer-kpi-grid">
          ${renderDrawerKpi("可发起", "规范上转、会诊、慢病异常上报")}
          ${renderDrawerKpi("可接收", "县医院回传方案、随访任务")}
          ${renderDrawerKpi("可查看", "授权患者病历、检查、随访记录")}
          ${renderDrawerKpi("不可见", "全县绩效、无关患者、他人收益")}
        </div>
      </section>
      ${renderDrawerStepSection("医生端审计留痕", ["查看患者病历需有业务原因", "发起转诊自动记录病种规则与资料清单", "协作服务只按真实服务审核，不按转诊人头结算"])}
    `,
    "doctor.focus": () => `
      <section class="detail-section">
        <h3>今日工作拆解</h3>
        <p>今日重点不是一个总数，而是四类队列：急症上转先处理、普通上转看接收、会诊后看复评、慢病随访看异常回流。</p>
      </section>
      <section class="detail-section">
        <h3>队列分布</h3>
        <div class="drawer-kpi-grid">
          ${renderDrawerKpi("转诊", `${patientDatabase.filter((item) => /上转|转诊/.test(item.referralType)).length} 人`)}
          ${renderDrawerKpi("待县医院接收", `${stats.awaiting.length} 人`)}
          ${renderDrawerKpi("会诊", `${stats.consults.length} 单`)}
          ${renderDrawerKpi("随访", `${stats.completedFollowups.length}/${stats.followups.length} 人`)}
        </div>
      </section>
      ${renderDrawerPatientList(stats.todo.slice(0, 8), "今天应优先处理")}
      ${renderDrawerActionButtons([
        ["进入转诊台", "doctorReferrals"],
        ["进入会诊协作", "doctorConsults"],
        ["进入随访任务", "doctorFollowups"],
      ])}
    `,
    "doctor.metric.todo": () => `
      <section class="detail-section">
        <h3>我的待办不是单一列表</h3>
        <p>系统按患者风险、当前阻塞点和责任人拆成四个工作队列。点击患者可继续看病种规则、资料缺项、授权和下一步动作。</p>
      </section>
      <section class="detail-section">
        <h3>待办构成</h3>
        <div class="drawer-kpi-grid">
          ${renderDrawerKpi("急症上转", `${stats.todo.filter((item) => item.taskGroup === "急症上转").length} 单`)}
          ${renderDrawerKpi("待补资料", `${stats.todo.filter((item) => item.taskGroup === "待补资料").length} 单`)}
          ${renderDrawerKpi("会诊复评", `${stats.todo.filter((item) => item.taskGroup === "会诊复评").length} 单`)}
          ${renderDrawerKpi("慢病/院后", `${stats.todo.filter((item) => /慢病|院后/.test(item.taskGroup)).length} 单`)}
        </div>
      </section>
      ${renderDrawerPatientList(stats.todo, "17 项待办明细")}
      ${renderDrawerStepSection("处理顺序", ["急症绿色通道立即催办县医院接收", "资料缺项先补齐再提交预审", "会诊复评根据专家意见决定是否上转", "院后与慢病任务完成后回写随访结果"])}
    `,
    "doctor.metric.awaiting": () => `
      <section class="detail-section">
        <h3>待县医院接收</h3>
        <p>这里只显示已经通过基层提交、正在等待县医院科室确认的转诊单，和“我的待办”不是一回事。</p>
      </section>
      <section class="detail-section">
        <h3>接收阻塞点</h3>
        <div class="drawer-kpi-grid">
          ${renderDrawerKpi("等待接收", `${stats.awaiting.length} 单`)}
          ${renderDrawerKpi("平均等待", `${Math.round(stats.awaiting.reduce((sum, item) => sum + item.waitMinutes, 0) / stats.awaiting.length)} 分钟`)}
          ${renderDrawerKpi("资料完整", `${stats.awaiting.filter((item) => item.missing.length === 0).length} 单`)}
          ${renderDrawerKpi("需补资料", `${stats.awaiting.filter((item) => item.missing.length > 0).length} 单`)}
        </div>
      </section>
      ${renderDrawerAwaitingList(stats.awaiting)}
      ${renderDrawerActionButtons([
        ["进入我的转诊", "doctorReferrals"],
        ["查看病种规则", "doctorRules"],
      ])}
    `,
    "doctor.metric.followups": () => `
      <section class="detail-section">
        <h3>随访完成率</h3>
        <p>随访队列来自县医院回传、慢病异常、康复下转和用药调整，不和上转接收队列混在一起。</p>
      </section>
      <section class="detail-section">
        <h3>今日完成情况</h3>
        <div class="drawer-kpi-grid">
          ${renderDrawerKpi("已完成", `${stats.completedFollowups.length} 人`)}
          ${renderDrawerKpi("待完成", `${pendingFollowups.length} 人`)}
          ${renderDrawerKpi("完成率", `${stats.followupRate}%`)}
          ${renderDrawerKpi("异常需回流", `${pendingFollowups.filter((item) => item.risk === "高" || item.risk === "高危").length} 人`)}
        </div>
      </section>
      ${renderDrawerPatientList(pendingFollowups, "待完成随访")}
      ${renderDrawerPatientList(stats.completedFollowups.slice(0, 8), "已完成随访样例")}
      ${renderDrawerActionButtons([["进入随访任务", "doctorFollowups"]])}
    `,
    "doctor.metric.consults": () => `
      <section class="detail-section">
        <h3>会诊响应</h3>
        <p>会诊队列用于先判断“能不能留基层”，只有确实需要县医院处理的患者才转入上转通道。</p>
      </section>
      <section class="detail-section">
        <h3>响应状态</h3>
        <div class="drawer-kpi-grid">
          ${renderDrawerKpi("会诊总数", `${stats.consults.length} 单`)}
          ${renderDrawerKpi("专家已回复", `${stats.answeredConsults.length} 单`)}
          ${renderDrawerKpi("待回复/复评", `${stats.consults.length - stats.answeredConsults.length} 单`)}
          ${renderDrawerKpi("建议上转", `${stats.consults.filter((item) => /上转|接收/.test(item.status)).length} 单`)}
        </div>
      </section>
      ${renderDrawerConsultList(stats.consults)}
      ${renderDrawerActionButtons([
        ["进入会诊协作", "doctorConsults"],
        ["按规则发起上转", "doctorReferrals"],
      ])}
    `,
    "doctor.action.startReferral": () => renderActionDeepDetail(
      "发起规范上转",
      "从患者病情出发，不是简单填一张转诊单。系统必须先匹配病种规则，再校验资料、患者知情和目标科室。",
      ["选择患者并读取授权范围", "匹配病种规则：必须上转、会诊后上转、留基层或下转康复", "上传病情摘要、检查结果、生命体征和用药清单", "患者端确认转诊原因、可选机构和资料共享", "县医院接收后生成回执并进入协作服务审核"],
      "doctorReferrals",
    ),
    "doctor.action.consult": () => renderActionDeepDetail(
      "申请远程会诊",
      "用于疑难病例和临界病例。会诊不是转诊的附属功能，而是避免无序上转的重要过滤器。",
      ["基层填写主诉、生命体征和已处理措施", "县医院专科医生回复处置建议", "系统把结果分为留基层、补检查复评、规范上转、急救绿色通道", "会诊回复自动进入患者病历和协作服务证据链"],
      "doctorConsults",
    ),
    "doctor.action.return": () => renderActionDeepDetail(
      "接收县医院回传",
      "县医院治疗后把出院小结、用药建议、康复计划和复诊时间回传给基层，基层医生继续承接。",
      ["县医院出院或门诊后上传方案", "系统生成基层随访任务", "家庭医生或村医完成 48 小时随访", "异常指标自动回流县医院专科评估"],
      "doctorFollowups",
    ),
    "doctor.action.permission": () => renderActionDeepDetail(
      "按授权查看患者",
      "医生端必须以患者授权和业务闭环为边界。能看是为了诊疗协同，不是为了全域检索。",
      ["本人负责、机构负责、会诊参与、患者授权四类入口", "查看病历、报告、随访记录均留痕", "无关患者不能直接检索明细", "患者可在患者端查看授权范围和撤回非必要授权"],
      "doctorPatients",
    ),
    "database.patientIndex": () => renderDatabaseDeepDetail("患者主索引库", "40 名模拟患者已统一到主索引，覆盖乡镇卫生院、社区、村卫生室、民营医院和养老机构。", patientDatabase, "patient"),
    "database.doctorDirectory": () => renderDatabaseDeepDetail("医生机构目录", "20 名模拟医护与协同角色已纳入统一目录，包含县医院专科、基层全科、村医、养老机构、转诊中心和医保质控。", doctorDatabase, "doctor"),
    "database.quality": () => `
      <section class="detail-section">
        <h3>数据质量问题</h3>
        <p>模拟库把“资料缺项、授权缺失、接口未接入、重复身份”作为数据治理重点，直接影响转诊接收效率和协作服务审核。</p>
      </section>
      <section class="detail-section">
        <h3>当前预警</h3>
        <div class="drawer-kpi-grid">
          ${renderDrawerKpi("资料缺项患者", `${patientDatabase.filter((item) => item.missing.length > 0).length} 人`)}
          ${renderDrawerKpi("授权待确认", `${patientDatabase.filter((item) => /待|家属/.test(item.consent)).length} 人`)}
          ${renderDrawerKpi("待县医院接收", `${getAwaitingCountyPatients().length} 单`)}
          ${renderDrawerKpi("医生目录", `${doctorDatabase.length} 人`)}
        </div>
      </section>
      ${renderDrawerStepSection("治理动作", ["统一患者主索引，解决跨机构同人识别", "统一医生目录，明确科室、权限和服务范围", "病种资料清单结构化，提交前自动校验缺项", "访问、授权、回传、结算全流程留痕"])}
      ${renderDrawerActionButtons([["查看数据治理", "data"], ["查看权限规则", "access"]])}
    `,
    "chronic.register": () => {
      const diseaseLabel = { hypertension: "高血压", diabetes: "糖尿病", stroke: "脑卒中", copd: "慢阻肺", ckd: "慢性肾病" }[state.disease] || "慢病";
      const institutions = ["城东镇卫生院", "西河社区卫生服务中心", "青山镇中心卫生院", "康宁养老中心", "仁和民营医院"];
      const doctors = ["王芳·城东团队", "李明·西河团队", "张伟·青山团队", "赵霞·康宁团队"];
      return `
        <section class="detail-section">
          <h3>新建${diseaseLabel}档案</h3>
          <p>填写患者基本信息，提交后系统自动完成风险预分层并生成首次随访计划。</p>
        </section>
        <section class="detail-section">
          <h3>患者信息</h3>
          <div class="detail-evidence">
            ${renderEvidenceItem("患者姓名", "请输入真实姓名")}
            ${renderEvidenceItem("身份证号", "用于主索引关联")}
            ${renderEvidenceItem("联系电话", "家庭医生随访通知")}
            ${renderEvidenceItem("性别年龄", "请选择")}
          </div>
        </section>
        <section class="detail-section">
          <h3>管理归属</h3>
          <div class="detail-evidence">
            ${renderEvidenceItem("责任机构", institutions[0])}
            ${renderEvidenceItem("签约家庭医生", doctors[0])}
            ${renderEvidenceItem("主要诊断", diseaseLabel)}
            ${renderEvidenceItem("建档来源", "基层主动建档")}
          </div>
        </section>
        <section class="detail-section">
          <h3>建档操作</h3>
          <div class="detail-actions-grid">
            <button class="primary-button" type="button" data-drawer-action="register" data-message="已模拟建档成功。患者已进入主索引，首次随访计划将在 1 个工作日内由家庭医生确认。">提交建档</button>
            <button class="secondary-button" type="button" data-go-page="data">查看患者库</button>
          </div>
        </section>
      `;
    },
    "chronic.stratify": () => {
      const criteria = {
        hypertension: [
          ["低危", "1 级高血压（140-159/90-99），无其他危险因素"],
          ["中危", "2 级高血压，或合并 1-2 个心血管危险因素"],
          ["高危", "3 级高血压，或靶器官损害，或合并糖尿病"],
          ["极高危", "合并临床疾病或既往心脑血管事件"],
        ],
        diabetes: [
          ["稳定期", "HbA1c ≤7%，无并发症，血糖达标稳定"],
          ["高危", "HbA1c 7%-9%，或存在微血管并发症风险"],
          ["极高危", "HbA1c >9%，或大血管并发症，或肾功能异常"],
          ["急症预警", "血糖 >16.7 mmol/L 或低血糖发作，需急诊上转"],
        ],
        stroke: [
          ["低危（mRS 0-1）", "无残疾或极轻微残疾，独立生活能力完整"],
          ["中危（mRS 2-3）", "轻中度残疾，需部分协助，康复随访每月一次"],
          ["高危（mRS 4-5）", "重度残疾，日常依赖他人，需住院或机构康复"],
          ["复发高危", "房颤、颈动脉狭窄>70% 或已停抗血栓药物"],
        ],
        copd: [
          ["GOLD 1（轻度）", "FEV1 ≥80%，症状轻微，随访每年一次"],
          ["GOLD 2（中度）", "FEV1 50%-79%，活动受限，每半年随访"],
          ["GOLD 3（重度）", "FEV1 30%-49%，生活质量明显下降，每季度随访"],
          ["GOLD 4（极重度）", "FEV1 <30%，急性加重高风险，每月随访及血氧监测"],
        ],
        ckd: [
          ["G1-G2 / A1（低危）", "eGFR ≥60，蛋白尿阴性或微量，每年随访一次"],
          ["G3a-G3b / A2（中危）", "eGFR 30-59，中等蛋白尿，每季度随访，控压达标"],
          ["G4 / A3（高危）", "eGFR 15-29，大量蛋白尿，每月随访，启动替代治疗教育"],
          ["G5（肾衰竭）", "eGFR <15，需评估透析或肾移植时机，立即肾内科转诊"],
        ],
      }[state.disease] || [];
      const diseaseLabel = { hypertension: "高血压", diabetes: "糖尿病", stroke: "脑卒中", copd: "慢阻肺", ckd: "慢性肾病" }[state.disease] || "慢病";
      return `
        <section class="detail-section">
          <h3>${diseaseLabel}风险分层标准</h3>
          <p>专科医生依据检查结果和既往病史完成分层，分层结果驱动随访频率和干预方案。</p>
        </section>
        <section class="detail-section">
          <h3>分层规则</h3>
          <div class="detail-evidence">
            ${criteria.map(([level, rule]) => renderEvidenceItem(level, rule)).join("")}
          </div>
        </section>
        <section class="detail-section">
          <h3>操作</h3>
          <div class="detail-actions-grid">
            <button class="primary-button" type="button" data-drawer-action="stratify" data-message="已提交分层评估申请，县医院专科医生将在 24 小时内完成评估并回传结果。">发起分层评估</button>
            <button class="secondary-button" type="button" data-go-page="diseaseCatalog">查看病种目录</button>
          </div>
        </section>
      `;
    },
    "chronic.followup": () => {
      const d = chronicDiseaseData[state.disease] || chronicDiseaseData.hypertension;
      const pendingPatients = d.patients.filter(([, , , , task]) => !/已完成/.test(task));
      return `
        <section class="detail-section">
          <h3>待随访患者清单</h3>
          <p>来自本病种任务池，家庭医生和村医需在本周内完成随访并提交记录。</p>
        </section>
        <section class="detail-section">
          <h3>待处理（${pendingPatients.length} 人）</h3>
          <div class="detail-evidence">
            ${pendingPatients.map(([name, disease, risk, org, task, tone]) =>
              renderEvidenceItem(`${name}·${risk}`, `${org} / ${task}`)
            ).join("")}
          </div>
        </section>
        <section class="detail-section">
          <h3>操作</h3>
          <div class="detail-actions-grid">
            <button class="primary-button" type="button" data-drawer-action="followup" data-message="已向 ${pendingPatients.length} 名患者的责任机构下发随访任务，截止时间：本周五。">下发随访任务</button>
            <button class="secondary-button" type="button" data-go-page="doctors">进入协作管理</button>
          </div>
        </section>
      `;
    },
    "chronic.escalate": () => {
      const thresholds = {
        hypertension: [
          ["血压预警阈值", "收缩压 ≥180 或舒张压 ≥110 mmHg，连续 3 次"],
          ["靶器官损害", "血肌酐升高、心电图异常或眼底检查阳性"],
          ["症状预警", "头痛、视物模糊、胸痛或意识改变"],
          ["上转时限", "高危预警触发后 2 小时内联系县医院"],
        ],
        diabetes: [
          ["高血糖阈值", "空腹血糖 >16.7 mmol/L 或出现酮症症状"],
          ["低血糖阈值", "血糖 <3.9 mmol/L 且有症状"],
          ["并发症预警", "肌酐倍增、眼底出血或足部溃疡"],
          ["上转时限", "急性代谢紊乱 1 小时内，并发症 24 小时内"],
        ],
        stroke: [
          ["复发预警", "新发肢体无力、言语障碍或意识改变（FAST 阳性）"],
          ["血压预警", "收缩压 >180 mmHg 持续存在"],
          ["用药预警", "连续 3 天未服抗血栓药物"],
          ["上转时限", "FAST 阳性立即拨打 120，争取 4.5 小时溶栓窗"],
        ],
        copd: [
          ["血氧预警", "指脉氧 SpO₂ <90%，持续 5 分钟"],
          ["呼吸困难", "mMRC 评分较基线加重 2 级以上"],
          ["急性加重", "痰量增多、颜色变黄或出现发热"],
          ["上转时限", "血氧低于阈值后 1 小时内转县医院呼吸科"],
        ],
        ckd: [
          ["eGFR 快速下降", "3 个月内 eGFR 下降 >25%，或绝对值 <15 mL/min"],
          ["蛋白尿加重", "尿蛋白 / 肌酐比值较基线翻倍或 >3.5 g/g"],
          ["血压失控", "收缩压持续 >140 mmHg（合并蛋白尿者 >130 mmHg）"],
          ["上转时限", "高危预警 24 小时内联系肾内科，G5 期立即转诊"],
        ],
      }[state.disease] || [];
      const diseaseLabel = { hypertension: "高血压", diabetes: "糖尿病", stroke: "脑卒中", copd: "慢阻肺", ckd: "慢性肾病" }[state.disease] || "慢病";
      return `
        <section class="detail-section">
          <h3>${diseaseLabel}异常上转阈值</h3>
          <p>患者端或随访系统采集到以下指标异常时，自动触发会诊申请或绿色通道转诊。</p>
        </section>
        <section class="detail-section">
          <h3>预警规则</h3>
          <div class="detail-evidence">
            ${thresholds.map(([label, rule]) => renderEvidenceItem(label, rule)).join("")}
          </div>
        </section>
        <section class="detail-section">
          <h3>操作</h3>
          <div class="detail-actions-grid">
            <button class="primary-button" type="button" data-go-page="referrals">进入转诊中心</button>
            <button class="secondary-button" type="button" data-drawer-action="escalate" data-message="已模拟触发异常上转，转诊申请已发送至县医院运营中心，预计 15 分钟内响应。">模拟触发上转</button>
          </div>
        </section>
      `;
    },
  };

  return detailMap[detailId]?.() || "";
}

function renderPatientDeepDetail(patient) {
  if (!patient) return "";
  const relatedDoctor = getDoctorByName(patient.familyDoctor);
  return `
    <section class="detail-section">
      <h3>患者主档</h3>
      <div class="drawer-kpi-grid">
        ${renderDrawerKpi("患者", `${patient.name} · ${patient.sex} · ${patient.age} 岁`)}
        ${renderDrawerKpi("来源", `${patient.institution}`)}
        ${renderDrawerKpi("风险", `${patient.risk}`)}
        ${renderDrawerKpi("授权", `${patient.consent}`)}
      </div>
    </section>
    <section class="detail-section">
      <h3>当前业务</h3>
      <p>${patient.summary}</p>
      <div class="detail-evidence" style="margin-top:10px;">
        ${renderEvidenceItem("病种 / 路径", `${patient.disease} · ${patient.referralType}`)}
        ${renderEvidenceItem("目标科室", patient.targetDept)}
        ${renderEvidenceItem("当前状态", patient.status)}
        ${renderEvidenceItem("资料缺项", getMissingText(patient))}
        ${renderEvidenceItem("下一步", patient.nextAction)}
      </div>
    </section>
    <section class="detail-section">
      <h3>责任链</h3>
      <div class="drawer-meta-list">
        <span>基层医生：${patient.familyDoctor}${relatedDoctor ? ` · ${relatedDoctor.institution}` : ""}</span>
        <span>县医院支持：${patient.countyDoctor}</span>
        <span>医保类型：${patient.insurance}</span>
        <span>联系电话：${state.settings.showPhone ? patient.phone : "***-****-****"}</span>
      </div>
    </section>
    ${renderDrawerStepSection("流程留痕", patient.timeline)}
    ${renderDrawerActionButtons([
      ["进入转诊台", "doctorReferrals"],
      ["查看授权患者", "doctorPatients"],
      ["查看协作服务", "doctorCompensation"],
    ])}
  `;
}

function renderDoctorDeepDetail(doctor) {
  if (!doctor) return "";
  return `
    <section class="detail-section">
      <h3>医生目录档案</h3>
      <div class="drawer-kpi-grid">
        ${renderDrawerKpi("姓名", doctor.name)}
        ${renderDrawerKpi("角色", doctor.role)}
        ${renderDrawerKpi("机构", doctor.institution)}
        ${renderDrawerKpi("质控分", doctor.qualityScore)}
      </div>
    </section>
    <section class="detail-section">
      <h3>服务范围</h3>
      <p>${doctor.scope}</p>
      <div class="detail-evidence" style="margin-top:10px;">
        ${renderEvidenceItem("科室", doctor.department)}
        ${renderEvidenceItem("专长", doctor.specialty)}
        ${renderEvidenceItem("今日任务", `${doctor.todayTasks} 项`)}
        ${renderEvidenceItem("当前状态", doctor.status)}
      </div>
    </section>
    <section class="detail-section">
      <h3>协作量</h3>
      <div class="drawer-kpi-grid">
        ${renderDrawerKpi("转诊", `${doctor.referralCount} 单`)}
        ${renderDrawerKpi("会诊", `${doctor.consultCount} 单`)}
        ${renderDrawerKpi("随访", `${doctor.followupCount} 人`)}
        ${renderDrawerKpi("联系电话", doctor.phone)}
      </div>
    </section>
    ${renderDrawerActionButtons([["查看医生协同", "doctors"], ["查看权限规则", "access"]])}
  `;
}

function renderLifecycleDeepDetail(step) {
  if (!step) return "";
  return `
    <section class="detail-section">
      <h3>${step.title}</h3>
      <p>${step.desc}</p>
    </section>
    <section class="detail-section">
      <h3>责任与状态</h3>
      <div class="drawer-kpi-grid">
        ${renderDrawerKpi("责任端", step.owner)}
        ${renderDrawerKpi("当前状态", step.status)}
        ${renderDrawerKpi("系统输出", step.output)}
        ${renderDrawerKpi("下一步", step.next)}
      </div>
    </section>
    ${renderDrawerStepSection("需要录入 / 读取", step.inputs)}
    ${renderDrawerStepSection("系统自动动作", step.system)}
    <section class="detail-section">
      <h3>关联模块</h3>
      <div class="detail-link-map">
        ${renderDetailLink("我的转诊", state.role === "doctor" ? "doctorReferrals" : "referrals")}
        ${renderDetailLink("病种目录", state.role === "doctor" ? "doctorRules" : "diseaseCatalog")}
        ${state.role === "manager" ? renderDetailLink("标准配置", "referralStandards") : ""}
        ${renderDetailLink("患者授权", state.role === "patient" ? "patientConsent" : "access")}
        ${renderDetailLink("协作结算", state.role === "doctor" ? "doctorCompensation" : "collaboration")}
      </div>
    </section>
  `;
}

function renderActionDeepDetail(title, desc, steps, page) {
  return `
    <section class="detail-section">
      <h3>${title}</h3>
      <p>${desc}</p>
    </section>
    ${renderDrawerStepSection("业务步骤", steps)}
    <section class="detail-section">
      <h3>系统联动</h3>
      <div class="detail-evidence">
        ${renderEvidenceItem("患者库", "读取患者授权、既往病历和当前任务")}
        ${renderEvidenceItem("规则库", "校验病种路径、触发条件和必带资料")}
        ${renderEvidenceItem("医生目录", "匹配县医院科室、接诊医生和会诊专家")}
        ${renderEvidenceItem("审计台账", "记录提交、接收、回传、审核和患者确认")}
      </div>
    </section>
    ${renderDrawerActionButtons([["进入相关模块", page]])}
  `;
}

function renderDatabaseDeepDetail(title, desc, rows, type) {
  const highRiskPatients = type === "patient" ? rows.filter((item) => ["急", "高", "高危"].includes(item.risk)).length : 0;
  return `
    <section class="detail-section">
      <h3>${title}</h3>
      <p>${desc}</p>
    </section>
    <section class="detail-section">
      <h3>数据概览</h3>
      <div class="drawer-kpi-grid">
        ${renderDrawerKpi("记录数", `${rows.length} 条`)}
        ${type === "patient" ? renderDrawerKpi("高危/急症", `${highRiskPatients} 人`) : renderDrawerKpi("县医院医生", `${rows.filter((item) => item.institution === "县人民医院").length} 人`)}
        ${type === "patient" ? renderDrawerKpi("待接收", `${getAwaitingCountyPatients().length} 单`) : renderDrawerKpi("基层/机构", `${rows.filter((item) => item.institution !== "县人民医院").length} 人`)}
        ${type === "patient" ? renderDrawerKpi("资料缺项", `${rows.filter((item) => item.missing.length > 0).length} 人`) : renderDrawerKpi("平均质控", `${Math.round(rows.reduce((sum, item) => sum + item.qualityScore, 0) / rows.length)} 分`)}
      </div>
    </section>
    ${type === "patient" ? renderDrawerPatientList(rows.slice(0, 12), "患者样例") : renderDrawerDoctorList(rows.slice(0, 12), "医生样例")}
    ${renderDrawerActionButtons([["进入数据治理", "data"]])}
  `;
}

function renderDrawerKpi(label, value) {
  return `
    <article class="drawer-kpi">
      <span>${label}</span>
      <strong>${value}</strong>
    </article>
  `;
}

function renderEvidenceItem(label, value) {
  return `
    <article>
      <span>${label}</span>
      <strong>${value}</strong>
    </article>
  `;
}

function renderDrawerStepSection(title, steps) {
  return `
    <section class="detail-section">
      <h3>${title}</h3>
      <div class="drawer-step-list">
        ${steps.map((step, index) => `
          <article>
            <b>${index + 1}</b>
            <span>${step}</span>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderDrawerPatientList(patients, title) {
  return `
    <section class="detail-section">
      <h3>${title}</h3>
      <div class="drawer-list">
        ${patients.map((patient) => `
          <article class="drawer-card">
            <header>
              <div>
                <strong>${patient.name} · ${patient.disease}</strong>
                <span>${patient.institution} · ${patient.familyDoctor}</span>
              </div>
              <b class="badge ${getToneByRisk(patient.risk, patient.priority)}">${patient.risk}</b>
            </header>
            <p>${patient.status}。${patient.nextAction}</p>
            <div class="drawer-chip-row">
              <span>${patient.referralType}</span>
              <span>${patient.targetDept}</span>
              <span>缺项：${getMissingText(patient)}</span>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderDrawerAwaitingList(patients) {
  return `
    <section class="detail-section">
      <h3>待接收明细</h3>
      <div class="drawer-list">
        ${patients.map((patient) => `
          <article class="drawer-card">
            <header>
              <div>
                <strong>${patient.name} · 等待 ${patient.waitMinutes} 分钟</strong>
                <span>${patient.institution} → ${patient.targetDept}</span>
              </div>
              <b class="badge ${patient.missing.length ? "amber" : "green"}">${patient.missing.length ? "需补资料" : "资料完整"}</b>
            </header>
            <p>${patient.lastAction}</p>
            <div class="drawer-chip-row">
              <span>必补：${getMissingText(patient)}</span>
              <span>下一步：${patient.nextAction}</span>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderDrawerConsultList(patients) {
  return `
    <section class="detail-section">
      <h3>会诊明细</h3>
      <div class="drawer-list">
        ${patients.map((patient) => `
          <article class="drawer-card">
            <header>
              <div>
                <strong>${patient.name} · ${patient.disease}</strong>
                <span>${patient.targetDept}</span>
              </div>
              <b class="badge ${getToneByStatus(patient.consultStatus)}">${patient.consultStatus}</b>
            </header>
            <p>${patient.summary}</p>
            <div class="drawer-chip-row">
              <span>${patient.institution}</span>
              <span>${patient.nextAction}</span>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderDrawerDoctorList(doctors, title) {
  return `
    <section class="detail-section">
      <h3>${title}</h3>
      <div class="drawer-list">
        ${doctors.map((doctor) => `
          <article class="drawer-card">
            <header>
              <div>
                <strong>${doctor.name} · ${doctor.role}</strong>
                <span>${doctor.institution} · ${doctor.department}</span>
              </div>
              <b class="badge ${doctor.qualityScore >= 90 ? "green" : "amber"}">${doctor.qualityScore}</b>
            </header>
            <p>${doctor.scope}</p>
            <div class="drawer-chip-row">
              <span>今日任务 ${doctor.todayTasks}</span>
              <span>转诊 ${doctor.referralCount}</span>
              <span>会诊 ${doctor.consultCount}</span>
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function renderDrawerActionButtons(actions) {
  return `
    <section class="detail-section">
      <h3>可继续办理</h3>
      <div class="detail-actions-grid">
        ${actions.map(([label, targetPage], index) => `
          <button class="${index === 0 ? "primary-button" : "secondary-button"}" type="button" data-go-page="${targetPage}">${label}</button>
        `).join("")}
      </div>
    </section>
  `;
}

function renderSinglePatientFlowDemo(mode) {
  const patient = getPatientById("P001");
  const stage = singlePatientDemoStages[state.demoStepIndex];
  const progress = Math.round(((state.demoStepIndex + 1) / singlePatientDemoStages.length) * 100);
  const lifecycleTone = referralLifecycleSteps.find((item) => item.id === stage.lifecycleId)?.tone || "blue";
  const badgeTone = lifecycleTone === "violet" ? "blue" : lifecycleTone;
  const modeTitle = {
    doctor: "医生端单病例全流程演示",
    manager: "管理端单病例监管演示",
    patient: "患者端转诊进度演示",
  }[mode] || "单病例全流程演示";
  const modeDesc = {
    doctor: "以刘桂英胸痛上转为例，从基层医生发起一直跑到协作补偿审核。",
    manager: "以同一张转诊单监管全流程，查看每一步责任人、证据和是否闭环。",
    patient: "患者只看到和本人就医相关的进度、授权、到院和随访信息。",
  }[mode] || "一张转诊单从头跑到尾。";

  // Use CSS variables so colors adapt to light/dark theme automatically
  const accentColor = `var(--${badgeTone === "blue" ? "brand" : badgeTone}, var(--brand))`;

  return `
    <section class="panel single-demo-panel" style="margin-top:16px;">
      <div class="panel-header">
        <div class="panel-title">
          <h2>${modeTitle}</h2>
          <p>${modeDesc}</p>
        </div>
        <div class="detail-actions">
          <button class="ghost-button" type="button" data-demo-action="reset">重置</button>
          <button class="secondary-button" type="button" data-demo-action="prev" ${state.demoStepIndex === 0 ? "disabled" : ""}>上一步</button>
          <button class="primary-button" type="button" data-demo-action="next" ${state.demoStepIndex === singlePatientDemoStages.length - 1 ? "disabled" : ""}>下一步</button>
        </div>
      </div>

      <div style="
        display:flex; align-items:center; gap:12px; flex-wrap:wrap;
        padding:12px 20px;
        background:color-mix(in srgb,${accentColor} 8%,transparent);
        border-bottom:2px solid ${accentColor};
      ">
        <b class="badge ${badgeTone}" style="font-size:13px;padding:3px 10px;">
          步骤 ${state.demoStepIndex + 1} / ${singlePatientDemoStages.length}
        </b>
        <strong style="font-size:15px;">${stage.title}</strong>
        <span class="badge ${badgeTone}" style="margin-left:4px;">${stage.status}</span>
        <span style="margin-left:auto;font-size:12px;opacity:.7;">${stage.time} &nbsp;·&nbsp; 责任：${stage.owner} &nbsp;·&nbsp; 动作：${stage.action}</span>
      </div>

      <div class="panel-body">
        <div class="demo-case-hero">
          <div>
            <span>演示病例</span>
            <strong>${patient.name} · ${patient.age} 岁 · ${patient.disease}</strong>
            <p>${patient.institution} 发起，目标：${patient.targetDept}</p>
          </div>
          <div class="demo-case-status">
            <span>当前进度</span>
            <strong>${state.demoStepIndex + 1} / ${singlePatientDemoStages.length}</strong>
            <i><b style="width:${progress}%;background:${accentColor};"></b></i>
          </div>
        </div>

        <div class="demo-stepper" aria-label="单病例流程步骤">
          ${singlePatientDemoStages.map((item, index) => {
            const isDone   = index < state.demoStepIndex;
            const isActive = index === state.demoStepIndex;
            return `
            <button type="button" data-demo-step="${index}"
              class="${isDone ? "done" : isActive ? "active" : ""}"
              style="${isActive ? `outline:2px solid ${accentColor};outline-offset:2px;font-weight:700;` : ""}">
              <b style="${isDone ? `background:var(--green,#16a34a);color:#fff;` : isActive ? `background:${accentColor};color:#fff;` : ""}">${isDone ? "✓" : index + 1}</b>
              <span>${item.title}</span>
            </button>`;
          }).join("")}
        </div>

        <div class="demo-current-grid">
          <article class="demo-current-card" style="border-left:3px solid ${accentColor};">
            <header>
              <span>${stage.time}</span>
              <b class="badge ${badgeTone}">${stage.status}</b>
            </header>
            <h3 style="font-size:15px;margin:6px 0 8px;">${stage.title}</h3>
            <p>${stage.result}</p>
            <div class="demo-current-meta">
              <span>责任：${stage.owner}</span>
              <span>动作：${stage.action}</span>
            </div>
            <button class="secondary-button" type="button" ${detailAttrs("转诊主流程", stage.title, stage.result, mode === "doctor" ? "doctorReferrals" : "referrals", `lifecycle.${stage.lifecycleId}`)}>查看这个环节</button>
          </article>

          <article class="demo-current-card">
            <header>
              <span>三端看到的不一样</span>
              <b class="badge blue">权限视角</b>
            </header>
            <div class="demo-role-grid">
              ${renderDemoRoleView("医生端", stage.doctorView, mode === "doctor", accentColor)}
              ${renderDemoRoleView("患者端", stage.patientView, mode === "patient", accentColor)}
              ${renderDemoRoleView("管理端", stage.managerView, mode === "manager", accentColor)}
            </div>
          </article>
        </div>

        <div class="demo-evidence-grid">
          <article>
            <h3>本步骤资料</h3>
            <div class="demo-chip-list">
              ${stage.materials.map((item) => `<span>${item}</span>`).join("")}
            </div>
          </article>
          <article>
            <h3>留痕证据</h3>
            <div class="demo-chip-list">
              ${stage.evidence.map((item) => `<span>${item}</span>`).join("")}
            </div>
          </article>
        </div>
      </div>
    </section>
  `;
}

function renderDemoRoleView(title, text, active, accentColor) {
  const color = accentColor || "#3b82f6";
  return `
    <div class="demo-role-view ${active ? "active" : ""}"
         style="${active ? `border:2px solid ${color};border-radius:8px;padding:10px;background:color-mix(in srgb,${color} 6%,transparent);` : "opacity:0.6;"}">
      <strong style="${active ? `color:${color};` : ""}">
        ${active ? "▶ " : ""}${title}${active ? "（当前）" : ""}
      </strong>
      <span>${text}</span>
    </div>
  `;
}

function renderReferralLifecycleSection(mode) {
  const isDoctor = mode === "doctor";
  const primaryAction = isDoctor
    ? `<button class="primary-button" type="button" data-action="start-referral">按流程发起上转</button>`
    : `<button class="primary-button" type="button" data-go-page="referrals">进入转诊监管台</button>`;
  const secondaryPage = isDoctor ? "doctorRules" : "diseaseCatalog";
  const title = isDoctor ? "转诊主流程工作台" : "转诊全过程监管";
  const desc = isDoctor
    ? "把基层发起、规则匹配、患者授权、县医院接收、资料退回、会诊决策、出院回传、协作补偿全部放在一条可执行流程里。"
    : "管理端从这条主流程下钻到每个机构、病种、患者和责任人，监管每一步是否超时、缺项、断档或异常。";

  return `
    <section class="panel referral-lifecycle-panel" style="margin-top:16px;">
      <div class="panel-header">
        <div class="panel-title">
          <h2>${title}</h2>
          <p>${desc}</p>
        </div>
        <div class="detail-actions">
          ${primaryAction}
          <button class="secondary-button" type="button" data-go-page="${secondaryPage}">${isDoctor ? "查看病种规则" : "查看病种目录"}</button>
        </div>
      </div>
      <div class="panel-body">
        <div class="lifecycle-state-strip">
          <span>草稿</span>
          <span>规则匹配</span>
          <span>资料校验</span>
          <span>患者授权</span>
          <span>预审接收</span>
          <span>到院诊疗</span>
          <span>回传随访</span>
          <span>补偿审核</span>
          <span>监管复盘</span>
        </div>
        <div class="lifecycle-grid">
          ${referralLifecycleSteps.map((step, index) => renderLifecycleCard(step, index, mode)).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderLifecycleCard(step, index, mode) {
  const actionLabel = mode === "doctor"
    ? index < 6 ? "医生处理" : index === 6 ? "接收回传" : "查看规则"
    : index < 7 ? "监管节点" : index === 7 ? "审核节点" : "督办复盘";

  return `
    <article class="lifecycle-card" ${detailAttrs("转诊主流程", step.title, `${step.owner}，${step.output}`, mode === "doctor" ? "doctorReferrals" : "referrals", `lifecycle.${step.id}`)}>
      <header>
        <b class="tone-${step.tone}">${String(index + 1).padStart(2, "0")}</b>
        <span class="badge ${step.tone === "violet" ? "blue" : step.tone}">${step.status}</span>
      </header>
      <strong>${step.shortTitle}</strong>
      <p>${step.desc}</p>
      <footer>
        <span>${step.owner}</span>
        <em>${actionLabel}</em>
      </footer>
    </article>
  `;
}

function renderDoctorHome() {
  const stats = getDoctorWorkbenchStats();
  const urgentCount = stats.todo.filter((item) => item.priority === "急" || item.priority === "高").length;
  const followupPending = stats.followups.length - stats.completedFollowups.length;
  const actionItems = [
    {
      icon: "转",
      title: "发起规范上转",
      desc: "上传病情摘要、检查结果、生命体征和用药清单，系统先匹配病种规则再提交。",
      rule: "适用：胸痛、卒中、糖尿病足、慢阻肺等符合上转指征患者。",
      tone: "amber",
      tag: "可操作",
      page: "doctorReferrals",
      detailId: "doctor.action.startReferral",
    },
    {
      icon: "会",
      title: "申请远程会诊",
      desc: "疑难病例先由县医院专科评估，能留基层的不盲目上转，必须上转的直接进通道。",
      rule: "适用：慢阻肺、糖尿病足、老年照护、心律失常等临界病例。",
      tone: "teal",
      tag: "可操作",
      page: "doctorConsults",
      detailId: "doctor.action.consult",
    },
    {
      icon: "回",
      title: "接收县医院回传",
      desc: "出院诊疗方案、用药建议和康复计划进入基层随访任务，形成院后闭环。",
      rule: "适用：卒中康复、术后康复、心衰出院、慢病用药调整。",
      tone: "green",
      tag: "闭环",
      page: "doctorFollowups",
      detailId: "doctor.action.return",
    },
    {
      icon: "限",
      title: "按授权查看患者",
      desc: "只看本人负责、机构负责、会诊参与或患者授权范围内的数据，访问全程留痕。",
      rule: "适用：医生日常诊疗、转诊资料整理、随访和会诊协作。",
      tone: "blue",
      tag: "权限",
      page: "doctorPatients",
      detailId: "doctor.action.permission",
    },
  ];

  return `
    <div class="role-brief">
      <article class="role-brief-card" ${detailAttrs("医生身份", "基层全科医生 / 县医院协同医生", "医生端按照本人负责、机构负责、会诊参与和患者授权四类边界开放数据。", "access", "doctor.identity")}>
        <span>当前身份</span>
        <strong>基层全科医生 / 县医院协同医生</strong>
        <p>只能处理本人、本人机构、本人会诊或已授权患者，不能查看全县绩效和无关病历。</p>
      </article>
      <article class="role-brief-card" ${detailAttrs("今日重点", "转诊、会诊、随访工作量", "今日工作台按患者闭环排序，优先处理急症、待接收、会诊复评和高危慢病。", "doctorHome", "doctor.focus")}>
        <span>今日重点</span>
        <strong>待办 ${stats.todo.length} 项 · 会诊 ${stats.consults.length} 单 · 随访 ${stats.followups.length} 人</strong>
        <p>工作台按患者闭环排序，急危重症、县医院回传和高危慢病优先。</p>
      </article>
    </div>

    <div class="dashboard-grid">
      ${renderDoctorMetric({ label: "我的待办", value: stats.todo.length, detail: `急症/高风险 ${urgentCount} 单，待补资料 ${stats.todo.filter((item) => item.taskGroup === "待补资料").length} 单`, tone: "amber", icon: "办", detailId: "doctor.metric.todo" })}
      ${renderDoctorMetric({ label: "待县医院接收", value: stats.awaiting.length, detail: `平均等待 ${Math.round(stats.awaiting.reduce((sum, item) => sum + item.waitMinutes, 0) / stats.awaiting.length)} 分钟，资料完整 ${stats.awaiting.filter((item) => item.missing.length === 0).length} 单`, tone: "red", icon: "转", detailId: "doctor.metric.awaiting" })}
      ${renderDoctorMetric({ label: "今日随访完成", value: `${stats.followupRate}%`, detail: `${stats.completedFollowups.length} / ${stats.followups.length} 人已完成，待随访 ${followupPending} 人`, tone: "green", icon: "访", detailId: "doctor.metric.followups" })}
      ${renderDoctorMetric({ label: "会诊响应", value: stats.consults.length, detail: `县医院专家已回复 ${stats.answeredConsults.length} 单，待回复 ${stats.consults.length - stats.answeredConsults.length} 单`, tone: "teal", icon: "会", detailId: "doctor.metric.consults" })}
    </div>

    <div class="section-grid">
      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>我的今日患者队列</h2>
            <p>按急危重症、县医院回传、慢病高危自动排序</p>
          </div>
          <button class="secondary-button" type="button" data-go-page="doctorReferrals">转诊台</button>
        </div>
        <div class="panel-body task-list">
          ${stats.todo.slice(0, 7).map(renderDoctorQueueItem).join("")}
        </div>
      </section>

      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>医生端可操作事项</h2>
            <p>围绕患者完成发起、接收、会诊、回传、随访</p>
          </div>
        </div>
        <div class="panel-body task-list">
          ${actionItems.map(renderDoctorActionCard).join("")}
        </div>
      </section>
    </div>

    <section class="panel" style="margin-top: 16px;">
      <div class="panel-header">
        <div class="panel-title">
          <h2>授权患者概览</h2>
          <p>医生端看到的是具体患者和任务，不是全县管理指标</p>
        </div>
      </div>
      <div class="panel-body">
        <table class="table">
          <thead>
            <tr>
              <th>患者</th>
              <th>标签</th>
              <th>责任机构</th>
              <th>授权范围</th>
              <th>风险</th>
            </tr>
          </thead>
          <tbody>
            ${patientDatabase.slice(0, 12).map((patient) => `
              <tr ${detailAttrs("授权患者", `${patient.name} · ${patient.disease}`, `${patient.institution}，${patient.consent}，风险：${patient.risk}`, "doctorPatients", `patient.${patient.id}`)}>
                <td><strong>${patient.name}</strong><br><span style="color:var(--muted);font-size:12px;">${patient.sex} · ${patient.age} 岁</span></td>
                <td>${patient.disease}</td>
                <td>${patient.institution}</td>
                <td>${patient.consent}</td>
                <td><span class="badge ${getToneByRisk(patient.risk, patient.priority)}">${patient.risk}</span></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderDoctorReferrals() {
  const selected = referrals.find((item) => item.id === state.selectedReferralId) || referrals[0];
  const selectedPathway = upwardReferralPathways.find((item) => item.patient === selected.patient) || getSelectedPathway();
  return `
    <div class="dashboard-grid">
      ${renderMetric({ label: "我发起的上转", value: "9", detail: "急症 3 单，普通 6 单", tone: "amber", icon: "上" })}
      ${renderMetric({ label: "县医院已接收", value: "6", detail: "心内、神内、内分泌优先", tone: "green", icon: "接" })}
      ${renderMetric({ label: "待补充资料", value: "2", detail: "缺少检验或影像结果", tone: "red", icon: "补" })}
      ${renderMetric({ label: "已回基层随访", value: "11", detail: "诊疗方案已回传", tone: "teal", icon: "回" })}
    </div>

    ${renderSinglePatientFlowDemo("doctor")}

    ${renderReferralLifecycleSection("doctor")}

    <section class="panel" style="margin-top:16px;">
      <div class="panel-header">
        <div class="panel-title">
          <h2>发起上转的四类路径</h2>
          <p>医生端在原有转诊工作台内选择路径，不单独进入试跑中心</p>
        </div>
        <button class="secondary-button" type="button" data-go-page="doctorRules">规则速查</button>
      </div>
      <div class="panel-body pathway-grid">
        ${upwardReferralPathways.map(renderPathwayCard).join("")}
      </div>
    </section>

    ${renderPathwayDetail(selectedPathway, "doctor")}

    ${renderAIReferralPanel(selected)}

    <div class="referral-layout">
      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>我的转诊单</h2>
            <p>医生端只显示本人或本人机构相关患者</p>
          </div>
          <button class="primary-button" type="button" data-action="open-referrals">＋ 新建</button>
        </div>
        <div class="panel-body">
          <div class="tabs">
            ${renderStageTab("all", "全部")}
            ${renderStageTab("pending", "待接收")}
            ${renderStageTab("consulting", "会诊中")}
            ${renderStageTab("accepted", "已接诊")}
            ${renderStageTab("arranged", "已安排")}
            ${renderStageTab("followup", "待随访")}
          </div>
          <div class="case-list" style="margin-top: 14px;">
            ${referrals.map((item) => renderCaseRow(item, item.id === selected.id)).join("")}
          </div>
        </div>
      </section>

      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>${selected.patient} · ${selected.disease}</h2>
            <p>${selected.source} · 责任医生 ${selected.doctor}</p>
          </div>
          <span class="badge ${priorityTone(selected.priority)}">${selected.status}</span>
        </div>
        <div class="panel-body">
          <div class="detail-actions" style="justify-content:flex-start;margin-bottom:14px;">
            <button class="primary-button" type="button" data-action="consult">申请会诊</button>
            <button class="secondary-button" type="button" data-action="supplement">补充资料</button>
            <button class="ghost-button" type="button" data-action="confirm-followup">确认随访</button>
            ${(selected.stage === "accepted" || selected.stage === "arranged")
              ? `<button class="ghost-button" type="button" data-action="return"
                   title="急性期处理完成，回传基层执行康复随访">↙ 回传基层</button>`
              : ""}
            <button class="secondary-button" type="button" data-action="ai-scan"
              style="background:color-mix(in srgb,var(--brand) 8%,var(--panel));border-color:color-mix(in srgb,var(--brand) 25%,transparent);color:var(--brand);"
              ${state.aiReferralStep > 0 ? "disabled" : ""}>
              🤖 AI 辅助分析
            </button>
          </div>
          <div class="detail-grid">
            ${renderMini("医生可见资料", selected.signs)}
            ${renderMini("县医院反馈", selected.suggestion)}
            ${renderMini("下一步任务", selected.stage === "followup" ? "按出院方案完成基层随访" : "跟踪县医院接收和患者到院")}
          </div>
          ${selectedPathway ? `
            <div class="performance-strip">
              <div>
                <span>可计入协作服务</span>
                <strong>${selectedPathway.compensation}</strong>
              </div>
              <div>
                <span>提交前必须补齐</span>
                <strong>${selectedPathway.requiredMaterials.join("、")}</strong>
              </div>
              <div>
                <span>绩效预估</span>
                <strong>${selectedPathway.score.reduce((sum, value) => sum + value, 0)} / 100</strong>
              </div>
            </div>
          ` : ""}
          <div class="timeline">
            ${selected.timeline.map(([time, title, desc]) => renderTimeline(time, title, desc)).join("")}
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderDoctorRules() {
  return `
    <div class="role-brief">
      <article class="role-brief-card">
        <span>医生速查</span>
        <strong>先按规则判断，再发起转诊或会诊</strong>
        <p>医生端展示的是可操作版本：转诊路径、触发条件、必须资料、县医院接收科室和可申请的协作服务。</p>
      </article>
      <article class="role-brief-card">
        <span>当前提醒</span>
        <strong>资料不完整会影响接诊效率和协作服务审核</strong>
        <p>系统会在提交前自动校验必填材料，缺项会提示补充。</p>
      </article>
    </div>

    <section class="panel">
      <div class="panel-header">
        <div class="panel-title">
          <h2>常用病种规则</h2>
          <p>基层医生、县医院医生、村医和养老机构人员共用同一套规则</p>
        </div>
      </div>
      <div class="panel-body rule-grid">
        ${referralRules.map(renderRuleCard).join("")}
      </div>
    </section>
  `;
}

function renderDoctorConsults() {
  const consultRef = state.consultPatientId
    ? referrals.find((r) => r.id === state.consultPatientId)
    : null;
  return `
    ${consultRef ? `
    <section class="panel" style="border:2px solid var(--accent);margin-bottom:16px;">
      <div class="panel-header">
        <div class="panel-title">
          <h2>📋 当前会诊申请：${consultRef.patient} · ${consultRef.disease}</h2>
          <p>${consultRef.source} · ${consultRef.doctor} 发起 · ${consultRef.signs}</p>
        </div>
        <span class="badge ${priorityTone(consultRef.priority)}">${consultRef.status}</span>
      </div>
      <div class="panel-body">
        <div class="detail-actions" style="justify-content:flex-start;">
          <button class="primary-button" type="button" data-action="supplement">发送会诊意见</button>
          <button class="ghost-button" type="button" data-action="start-referral">建议上转</button>
        </div>
        <div class="timeline">
          ${consultRef.timeline.map(([time, title, desc]) => renderTimeline(time, title, desc)).join("")}
        </div>
      </div>
    </section>
    ` : ""}
    <div class="section-grid">
      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>我的会诊队列</h2>
            <p>基层医生发起，县医院专科医生回复，必要时转入上转通道</p>
          </div>
        </div>
        ${renderConsultDraftPanel()}
        <div class="panel-body doctor-grid">
          ${consultationQueue.map(([dept, patient, desc, owner, status], idx) => {
            const replied = state.repliedConsults[idx];
            const isDraftOpen = state.consultDraftIdx === idx;
            return `
              <article class="doctor-row" ${detailAttrs("会诊协作", `${dept} · ${patient}`, `${desc}，${owner}，${replied || status}`)}>
                <div>
                  <strong>${dept} · ${patient}</strong>
                  <span>${desc}</span>
                </div>
                <footer>
                  <span>${owner}</span>
                  <span class="badge ${replied ? "green" : "blue"}">${replied || status}</span>
                  ${!replied ? `
                    <button class="secondary-button" type="button" style="padding:2px 8px;font-size:12px;margin-left:4px;"
                         data-action="consult-draft-open" data-idx="${idx}">🤖 AI 草稿</button>
                    <button class="ghost-button" type="button" style="padding:2px 8px;font-size:12px;"
                         data-action="reply-consult" data-idx="${idx}" data-patient="${patient}" data-dept="${dept}">直接回复</button>
                  ` : ""}
                </footer>
              </article>`;
          }).join("")}
        </div>
      </section>

      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>会诊后分流</h2>
            <p>避免无序上转，把“留基层、上县级、转急救”分清楚</p>
          </div>
        </div>
        <div class="panel-body chart-grid">
          ${renderBar("基层继续诊疗", 42)}
          ${renderBar("转县医院专科", 36)}
          ${renderBar("急救绿色通道", 14)}
          ${renderBar("补充检查后复评", 8)}
        </div>
      </section>
    </div>
  `;
}

function renderDoctorPatients() {
  const allPatients = state.settings.doctorSeeAllPatients
    ? patientDatabase
    : patientDatabase.filter((item) => item.consent === "已授权" || item.consent === "家属已授权" || item.workbench);

  // Quick filter by risk level or followup status
  const filter = state.patientFilter || "all";
  const visiblePatients = filter === "all"       ? allPatients
    : filter === "high"     ? allPatients.filter((p) => ["高危","高","急"].includes(p.risk))
    : filter === "followup" ? allPatients.filter((p) => p.followupStatus === "待完成")
    : filter === "missing"  ? allPatients.filter((p) => p.missing && p.missing.length > 0)
    : allPatients;

  return `
    <section class="panel">
      <div class="panel-header">
        <div class="panel-title">
          <h2>授权患者列表</h2>
          <p>${state.settings.doctorSeeAllPatients ? "已开启全部患者查看权限，" : "按授权显示，"}共 ${allPatients.length} 人</p>
        </div>
        <div style="display:flex;gap:6px;flex-wrap:wrap;">
          ${[["all","全部"],["high","高危优先"],["followup","待随访"],["missing","资料缺项"]].map(([v, label]) => `
            <button type="button" data-action="patient-filter" data-filter="${v}"
              class="${filter === v ? "primary-button" : "ghost-button"}"
              style="padding:3px 10px;font-size:12px;">${label}</button>`).join("")}
        </div>
      </div>
      <div class="panel-body compact-grid">
        ${visiblePatients.slice(0, 18).map((patient) => {
          const riskTone = {"高危":"red","高":"red","急":"red","中危":"amber","中":"amber","稳定":"green","低":"green"}[patient.risk] || "blue";
          const hasMissing = patient.missing && patient.missing.length > 0;
          return `
          <article class="patient-row" ${detailAttrs("授权患者", `${patient.name} · ${patient.disease}`, `${patient.institution}，${patient.consent}，风险：${patient.risk}`, "doctorPatients", `patient.${patient.id}`)}>
            <div>
              <strong>${patient.name} · ${patient.age} 岁</strong>
              <span>${patient.disease}</span>
            </div>
            <div class="patient-summary">
              <span>${patient.institution}</span>
              <span class="badge ${riskTone}" style="font-size:11px;padding:1px 7px;">${patient.risk}</span>
              ${hasMissing ? `<span style="font-size:11px;color:var(--red);">缺项</span>` : ""}
              <span style="font-size:11px;color:var(--muted);">${patient.followupStatus}</span>
            </div>
          </article>`;
        }).join("")}
        ${visiblePatients.length === 0 ? `<p style="color:var(--muted);font-size:13px;padding:12px;">当前筛选条件下无患者。</p>` : ""}
      </div>
    </section>

    <div class="section-grid equal">
      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>隐私边界</h2>
            <p>医生端不做全县患者池，只做授权患者池</p>
          </div>
        </div>
        <div class="panel-body task-list">
          ${renderTask("本", "本人负责患者", "本人首诊、本人转诊、本人随访的患者可查看。", "blue", "允许")}
          ${renderTask("科", "本科室相关患者", "县医院接诊、会诊、住院期间按科室授权查看。", "teal", "允许")}
          ${renderTask("禁", "无关患者病历", "不属于业务闭环的患者，医生端不能随意检索病历。", "red", "限制")}
        </div>
      </section>

      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>患者闭环状态</h2>
            <p>医生端更关注“下一步该谁做”</p>
          </div>
        </div>
        <div class="panel-body chart-grid">
          ${renderBar("待县医院接收", 28)}
          ${renderBar("县医院诊疗中", 34)}
          ${renderBar("待基层随访", 24)}
          ${renderBar("已完成闭环", 62)}
        </div>
      </section>
    </div>
  `;
}

function renderDoctorFollowups() {
  const done = state.completedFollowups;
  const doneCount = 18 + done.length;
  const total = 24;

  // Build risk-sorted task list for P1-3
  const riskScoreByName = Object.fromEntries(aiChronicRisk.map((p) => [p.name, p.score]));
  const tasksWithRisk = followupTasks.map((t, idx) => {
    // Match AI risk patient names in the task title
    const match = aiChronicRisk.find((p) => t[0].includes(p.name));
    return { task: t, idx, riskScore: match ? match.score : 0, riskLevel: match ? match.level : null, riskPatient: match || null };
  });
  const sortedTasks = state.followupRiskSort
    ? [...tasksWithRisk].sort((a, b) => b.riskScore - a.riskScore)
    : tasksWithRisk;

  const top3 = aiChronicRisk.filter((p) => p.level === "high").slice(0, 3);

  return `
    <div class="dashboard-grid">
      ${renderMetric({ label: "今日随访任务", value: String(total), detail: "高危患者 8 人", tone: "amber", icon: "访" })}
      ${renderMetric({ label: "已完成", value: String(doneCount), detail: `完成率 ${Math.round(doneCount / total * 100)}%`, tone: "green", icon: "完" })}
      ${renderMetric({ label: "异常回流", value: "3", detail: "需县医院复评", tone: "red", icon: "警" })}
      ${renderMetric({ label: "村医协同", value: "11", detail: "上门或电话随访", tone: "teal", icon: "村" })}
    </div>

    ${top3.length ? `
    <div class="ai-panel" style="margin-top:16px;">
      <div class="ai-panel-header">
        <span>🤖</span>
        <strong>今日最高风险 ${top3.length} 人 · AI 随访要点</strong>
        <span class="ai-badge">风险优先</span>
      </div>
      <div class="ai-panel-body" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:10px;">
        ${top3.map((p) => `
          <div style="padding:10px 12px;border-radius:var(--radius);border:1.5px solid color-mix(in srgb,var(--red) 35%,transparent);background:var(--surface);">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
              <span class="ai-risk-score high" style="font-size:18px;font-weight:800;">${p.score}</span>
              <div>
                <strong style="font-size:13px;">${p.name} · ${p.disease}</strong>
                <span style="font-size:11px;display:block;color:var(--muted);">${p.eta}</span>
              </div>
            </div>
            <p style="font-size:12px;color:var(--muted);margin:0 0 4px;">重点询问：${p.action}</p>
          </div>`).join("")}
      </div>
    </div>` : ""}

    <section class="panel" style="margin-top:16px;">
      <div class="panel-header">
        <div class="panel-title">
          <h2>随访任务池</h2>
          <p>${state.followupRiskSort ? "当前按 AI 风险评分排序" : "出院、慢病、康复和用药提醒统一形成待办"}</p>
        </div>
        <div style="display:flex;gap:8px;align-items:center;">
          <button class="${state.followupRiskSort ? "primary-button" : "secondary-button"}" type="button" data-action="toggle-followup-sort"
            style="${state.followupRiskSort ? "" : "background:color-mix(in srgb,var(--brand) 8%,var(--panel));border-color:color-mix(in srgb,var(--brand) 25%,transparent);color:var(--brand);"}">
            ${state.followupRiskSort ? "⬆ 风险优先" : "⬆ 风险排序"}
          </button>
          <button class="secondary-button" type="button" data-action="chronic-ai-open"
            style="background:color-mix(in srgb,var(--brand) 8%,var(--panel));border-color:color-mix(in srgb,var(--brand) 25%,transparent);color:var(--brand);"
            ${state.chronicAIOpen ? "disabled" : ""}>
            🤖 AI 风险分层
          </button>
        </div>
      </div>
      ${renderChronicAIPanel()}
      <div class="panel-body task-list">
        ${sortedTasks.map(({ task: [title, desc, note, tone], idx, riskScore, riskLevel, riskPatient }) => {
          const isDone = done.includes(idx);
          return `
            <article class="follow-item" ${detailAttrs("随访任务", title, `${desc}。${note}`, "doctorFollowups")}>
              <div class="follow-left">
                <b class="task-icon tone-${isDone ? "green" : tone}">${isDone ? "✓" : "访"}</b>
                <div>
                  <strong style="${isDone ? "opacity:0.6;text-decoration:line-through;" : ""}">${title}</strong>
                  <span>${desc}</span>
                  <span style="opacity:0.6;font-size:12px;">${note}</span>
                  ${riskLevel && !isDone ? `<span style="font-size:11px;font-weight:700;color:${riskLevel === "high" ? "var(--red)" : "var(--amber)"};">⚠ AI风险 ${riskScore}</span>` : ""}
                </div>
              </div>
              ${isDone
                ? `<span class="badge green">已完成</span>`
                : `<button class="secondary-button" type="button" style="padding:4px 12px;font-size:13px;white-space:nowrap;"
                     data-action="complete-followup-task" data-idx="${idx}" data-title="${title}">完成随访</button>`}
            </article>`;
        }).join("")}
      </div>
    </section>
  `;
}

function renderDoctorLearning() {
  const enrolled = state.enrolledSchedules;
  const schedules = [
    { key: "mon-heart",   time: "周一上午", dept: "心内科",   desc: "城东镇卫生院 · 胸痛识别与高血压规范用药" },
    { key: "tue-endo",    time: "周二下午", dept: "内分泌科", desc: "西河社区 · 糖尿病足筛查和伤口照片质控" },
    { key: "wed-neuro",   time: "周三上午", dept: "神经内科", desc: "青山镇中心卫生院 · 卒中风险识别" },
    { key: "fri-resp",    time: "周五下午", dept: "呼吸科",   desc: "康宁养老中心 · 慢阻肺照护查房" },
  ];
  return `
    <div class="section-grid">
      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>专科下沉与带教</h2>
            <p>县医院专家下沉到乡镇，基层医生参与联合门诊和病例复盘</p>
          </div>
        </div>
        <div class="panel-body schedule-list">
          ${schedules.map((s) => `
            <article class="schedule-item" ${detailAttrs("排班/预约", `${s.time} · ${s.dept}`, s.desc)}>
              <div>
                <strong>${s.time}</strong>
                <span>${s.dept}</span>
                <p>${s.desc}</p>
              </div>
              ${enrolled[s.key]
                ? `<span class="badge green">已报名</span>`
                : `<button class="secondary-button" type="button" style="padding:4px 12px;font-size:13px;"
                     data-action="enroll-schedule" data-key="${s.key}" data-desc="${s.dept} ${s.time}">申请参加</button>`}
            </article>
          `).join("")}
        </div>
      </section>
      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>质控反馈</h2>
            <p>每一次转诊和会诊都反向提升基层能力</p>
          </div>
          <button class="ghost-button" type="button" data-action="submit-case-review">提交病例复盘</button>
        </div>
        <div class="panel-body task-list">
          ${renderTask("准", "转诊资料完整率", "本周 86%，主要缺项为既往用药和基层检验结果。", "amber", "改进")}
          ${renderTask("快", "急症识别及时率", "胸痛、卒中绿色通道识别率 92%。", "green", "良好")}
          ${renderTask("学", "病例复盘完成", "本月完成 14 场病例复盘，覆盖 9 家基层机构。", "blue", "带教")}
        </div>
      </section>
    </div>
  `;
}

function renderDoctorCompensation() {
  return `
    <div class="role-brief">
      <article class="role-brief-card">
        <span>医生端口径</span>
        <strong>我的协作服务，不是转诊提成</strong>
        <p>医生端展示本人完成的评估、会诊、资料整理、院后随访等服务，系统按服务记录、质量和闭环结果审核。</p>
      </article>
      <article class="role-brief-card">
        <span>本月服务记录</span>
        <strong>已提交 23 项 · 通过 19 项 · 待补充 2 项</strong>
        <p>被退回的服务会显示原因，补齐资料后可再次提交。</p>
      </article>
    </div>

    <div class="dashboard-grid">
      ${renderMetric({ label: "已提交服务", value: "23", detail: "评估、会诊、随访等", tone: "blue", icon: "服" })}
      ${renderMetric({ label: "待审核", value: "5", detail: "运营中心复核中", tone: "amber", icon: "审" })}
      ${renderMetric({ label: "待补充", value: "2", detail: "需补血气或用药清单", tone: "red", icon: "补" })}
      ${renderMetric({ label: "本月通过", value: "19", detail: "质量达标后计入结算", tone: "green", icon: "过" })}
    </div>

    <div class="section-grid">
      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>我的协作服务记录</h2>
            <p>仅展示本人或本人机构提交的服务，不显示他人收益排行</p>
          </div>
          <button class="primary-button" type="button" data-action="submit-service">提交服务记录</button>
        </div>
        <div class="panel-body service-card-list">
          ${doctorServiceRecords.map(([service, patient, status, desc, amount, tone]) => `
            <article class="service-card" ${detailAttrs("协作服务", `${service} · ${patient}`, `${status}，${desc}，${amount}`, "doctorCompensation")}>
              <div>
                <span>${service}</span>
                <strong>${patient}</strong>
                <p>${desc}</p>
              </div>
              <footer>
                <span class="badge ${tone}">${status}</span>
                <b>${state.settings.showAmount ? amount : "***"}</b>
              </footer>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>提交前校验</h2>
            <p>把合规要求变成医生端的清单</p>
          </div>
        </div>
        <div class="panel-body task-list">
          ${renderTask("病", "病情摘要完整", "主诉、现病史、生命体征、既往用药需要结构化填写。", "blue", "必填")}
          ${renderTask("检", "检查资料齐全", "影像、心电、检验、照片等材料按病种目录上传。", "teal", "必填")}
          ${renderTask("知", "患者知情确认", "患者端确认转诊原因、可选机构和资料共享授权。", "green", "必填")}
          ${renderTask("闭", "服务闭环完成", "转诊接收、会诊回复或院后随访结果要形成闭环。", "amber", "审核")}
        </div>
      </section>
    </div>

    <div class="section-grid equal">
      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>被退回原因</h2>
            <p>帮助医生补齐资料，而不是简单扣分</p>
          </div>
        </div>
        <div class="panel-body task-list">
          ${renderFollow("赵国平 · 远程会诊协作", "缺少血气分析和既往抗感染方案，补齐后可重新提交。", "red")}
          ${renderFollow("张秀兰 · 慢病共管服务", "本月有 2 次血压记录缺失，村医补录后可复核。", "amber")}
        </div>
      </section>
      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>医生端不展示</h2>
            <p>防止服务补偿被理解成转诊买量</p>
          </div>
        </div>
        <div class="panel-body task-list">
          ${renderTask("隐", "不展示患者消费金额", "医生端不显示住院费、手术费、检查费分成。", "red", "禁止")}
          ${renderTask("隐", "不展示转诊拉新排行", "不做患者数量竞赛，不鼓励非必要上转。", "red", "禁止")}
          ${renderTask("质", "展示服务质量结果", "展示资料完整率、闭环完成率、患者确认和审核状态。", "green", "保留")}
        </div>
      </section>
    </div>
  `;
}

function renderPatientHome() {
  return `
    <div class="section-grid">
      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>我的健康服务卡</h2>
            <p>患者端只展示本人服务，不展示内部监管和医生绩效</p>
          </div>
          <button class="primary-button" type="button" data-go-page="patientAppointments">预约</button>
        </div>
        <div class="panel-body">
          <div class="patient-service-grid">
            ${renderQuick("转诊进度", "心内科已接收")}
            ${renderQuick("预约就医", "明日 10:30")}
            ${renderQuick("报告查询", "12 份报告")}
            ${renderQuick("家庭医生", "城东团队")}
            ${renderQuick("慢病随访", "今日待确认")}
            ${renderQuick("医保费用", "仅看本人")}
          </div>
        </div>
      </section>

      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>今日提醒</h2>
            <p>去哪儿、找谁、带什么、后续谁负责</p>
          </div>
        </div>
        <div class="panel-body task-list">
          ${renderTask("到", "10:20 前到县人民医院", "前往急诊胸痛中心，带医保电子凭证和现用药。", "red", "重要")}
          ${renderTask("报", "心电图报告已同步", "医生可查看报告，患者端仅展示本人结果。", "blue", "报告")}
          ${renderTask("访", "出院后基层随访", "城东家庭医生团队会继续跟进用药和复诊。", "green", "后续")}
        </div>
      </section>
    </div>
  `;
}

function renderPatientReferral() {
  const currentStep = patientProgress[patientProgress.length - 1];
  const currentKey  = currentStep ? currentStep[0] : "";
  const explain     = aiStatusExplanations[currentKey] || null;

  return `
    ${renderSinglePatientFlowDemo("patient")}

    <div class="section-grid">
      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>刘桂英 · 心内科转诊</h2>
            <p>患者端不显示内部预审细节，只显示清楚的服务进度</p>
          </div>
          <span class="badge green">县医院已接收</span>
        </div>
        <div class="panel-body">
          <div class="timeline">
            ${patientProgress.map(([time, title, desc]) => renderTimeline(time, title, desc)).join("")}
          </div>

          <div class="ai-panel" style="margin-top:14px;">
            <div class="ai-panel-header">
              <span>🤖</span>
              <strong>每一步对您意味着什么？</strong>
              <span class="ai-badge">AI 解释</span>
            </div>
            <div class="ai-panel-body" style="display:flex;flex-direction:column;gap:8px;">
              ${patientProgress.map(([time, title]) => {
                const ex = aiStatusExplanations[time];
                if (!ex) return "";
                return `
                  <div style="padding:10px 14px;border-radius:var(--radius);background:var(--surface);border:1px solid var(--border);">
                    <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;">
                      <span style="font-size:11px;font-weight:700;color:var(--muted);">${time}</span>
                      <strong style="font-size:13px;">${title}</strong>
                    </div>
                    <p style="font-size:13px;color:var(--ink);margin:0 0 4px;">${ex.plain}</p>
                    <p style="font-size:12px;color:var(--brand);margin:0;">→ ${ex.next}</p>
                  </div>`;
              }).join("")}
            </div>
          </div>
        </div>
      </section>

      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>到院信息</h2>
            <p>患者端重点减少不确定感</p>
          </div>
        </div>
        <div class="panel-body task-list">
          ${renderTask("科", "接诊科室", "县人民医院心内科 / 急诊胸痛中心。", "blue", "地点")}
          ${renderTask("时", "建议到院时间", "今日 10:20 前到院，转诊窗口会自动识别。", "amber", "时间")}
          ${renderTask("带", "携带材料", "医保电子凭证、身份证、现用药、基层医生转诊单。", "teal", "材料")}
          ${renderTask("授", "家属代办", "可授权家属查看进度、报告和预约提醒。", "green", "可办")}
          <button class="secondary-button" type="button" data-action="authorize-family">授权家属代办</button>
        </div>
      </section>
    </div>
  `;
}

function renderPatientAppointments() {
  const slots = [
    { time: "明日 10:30", dept: "县人民医院心内科", desc: "转诊绿色通道号源 · 已预留", key: "heart-tmr" },
    { time: "周三 09:00", dept: "城东镇卫生院",     desc: "家庭医生复诊 · 可预约",     key: "gp-wed" },
    { time: "周五 14:30", dept: "心内科下沉门诊",   desc: "县医院专家到城东镇坐诊",   key: "heart-fri" },
    { time: "下周一 08:40", dept: "检验检查复查",   desc: "血脂、肝肾功能 · 可预约",  key: "lab-mon" },
  ];
  const booked = state.bookedSlot;
  return `
    ${booked ? `
    <section class="panel" style="border:2px solid var(--accent,#3b82f6);margin-bottom:16px;">
      <div class="panel-header">
        <div class="panel-title">
          <h2>✓ 预约已确认</h2>
          <p>${slots.find((s) => s.key === booked)?.time} · ${slots.find((s) => s.key === booked)?.dept}</p>
        </div>
        <span class="badge green">已预约</span>
      </div>
      <div class="panel-body task-list">
        ${renderTask("带", "携带材料", "医保电子凭证、基层转诊单、现用药清单。", "blue", "必带")}
        ${renderTask("到", "就诊地点", "县人民医院急诊胸痛中心 · 转诊窗口直接登记。", "green", "地点")}
        ${renderTask("评", "就医后评价", "就诊后可在「我的转诊」评价本次服务。", "teal", "反馈")}
        <button class="ghost-button" type="button" data-action="cancel-booking">取消预约</button>
      </div>
    </section>
    ` : ""}
    <div class="section-grid equal">
      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>可预约服务</h2>
            <p>县医院专家号、基层门诊号、专科下沉门诊统一呈现</p>
          </div>
        </div>
        <div class="panel-body schedule-list">
          ${slots.map((s) => `
            <article class="schedule-item ${booked === s.key ? "active" : ""}" ${detailAttrs("排班/预约", `${s.time} · ${s.dept}`, s.desc)}>
              <div>
                <strong>${s.time}</strong>
                <span>${s.dept}</span>
                <p>${s.desc}</p>
              </div>
              ${booked === s.key
                ? `<span class="badge green">已预约</span>`
                : `<button class="secondary-button" type="button" style="padding:4px 12px;font-size:13px;"
                     data-action="book-slot" data-key="${s.key}" data-time="${s.time}" data-dept="${s.dept}">预约</button>`}
            </article>
          `).join("")}
        </div>
      </section>
      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>预约规则</h2>
            <p>患者端只做服务确认，不暴露床位调度和绩效规则</p>
          </div>
        </div>
        <div class="panel-body task-list">
          ${renderTask("优", "转诊患者优先", "基层规范转诊后，县医院优先匹配专科号源和检查。", "green", "优先")}
          ${renderTask("回", "复诊回基层", "稳定后可预约家庭医生或乡镇卫生院复诊。", "teal", "下沉")}
          ${renderTask("评", "服务评价", "就医后可评价转诊、接诊和随访体验。", "blue", "反馈")}
        </div>
      </section>
    </div>
  `;
}

function renderPatientReports() {
  return `
    <section class="panel">
      <div class="panel-header">
        <div class="panel-title">
          <h2>我的报告与费用</h2>
          <p>只展示本人报告、本人费用和可公开说明</p>
        </div>
        <button class="ghost-button" type="button" data-action="request-recognition">申请互认</button>
      </div>
      <div class="panel-body data-stack">
        ${patientReports.map(([name, org, time, status], idx) => `
          <article class="data-row" ${detailAttrs("报告", name, `${org}，${time}，${status}`, "patientReports")}>
            <div>
              <strong>${name}</strong>
              <span>${org}</span>
            </div>
            <span>${time}</span>
            <span class="badge ${status === "待审核" ? "amber" : status === "已互认" ? "green" : "blue"}">${status}</span>
            <span class="detail-actions" style="gap:4px;">
              ${status === "待审核"
                ? `<button class="ghost-button" type="button" style="padding:2px 8px;font-size:12px;" data-action="urge-report" data-idx="${idx}" data-name="${name}">催审</button>`
                : `<button class="ghost-button" type="button" style="padding:2px 8px;font-size:12px;" data-action="download-report" data-name="${name}">下载</button>`}
              <button class="ghost-button" type="button" style="padding:2px 8px;font-size:12px;color:var(--red,#e53e3e);" data-action="dispute-report" data-name="${name}">异议</button>
            </span>
          </article>
        `).join("")}
      </div>
    </section>
    <div class="section-grid equal">
      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>报告互认</h2>
            <p>基层已做的检查，县医院可按规则查看和复用</p>
          </div>
        </div>
        <div class="panel-body chart-grid">
          ${renderBar("心电图互认", 94)}
          ${renderBar("检验结果互认", 78)}
          ${renderBar("影像结果互认", 69)}
        </div>
      </section>
      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>费用信息</h2>
            <p>患者端展示本人费用，不展示医保监管分析</p>
          </div>
        </div>
        <div class="panel-body task-list">
          ${state.settings.patientSeeAmount
            ? `${renderTask("费", "本次预估费用", "医保报销前预估 320 元，实际以结算为准。", "amber", "本人")}
               ${renderTask("保", "医保电子凭证", "到院后可直接扫码或刷脸完成医保身份识别。", "green", "可用")}`
            : renderTask("保", "医保电子凭证", "到院后可直接扫码或刷脸完成医保身份识别。", "green", "可用")}
        </div>
      </section>
    </div>
  `;
}

function renderPatientFamilyDoctor() {
  const members = [
    { icon: "医", label: "责任医生：周建国", desc: "城东镇卫生院全科医生，负责日常随访和复诊提醒。", tone: "blue", tag: "基层", key: "zhoujguo" },
    { icon: "村", label: "协同村医：刘敏",   desc: "负责上门测量、用药提醒和异常情况上报。",          tone: "teal", tag: "村医", key: "liumin" },
    { icon: "专", label: "县医院专科支持",   desc: "心内科医生提供用药方案和复诊指导。",              tone: "green", tag: "县级", key: "specialist" },
  ];
  return `
    <div class="section-grid">
      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>城东家庭医生团队</h2>
            <p>签约后基层医生能承接随访、复诊和慢病管理</p>
          </div>
          <div class="detail-actions">
            <span class="badge green">已签约</span>
            <button class="ghost-button" type="button" data-action="renew-contract">申请续签</button>
          </div>
        </div>
        <div class="panel-body task-list">
          ${members.map((m) => `
            <article class="task-item" ${detailAttrs("家庭医生", m.label, m.desc, "patientFamilyDoctor")}>
              <b class="task-icon tone-${m.tone}">${m.icon}</b>
              <div class="task-main">
                <strong>${m.label}</strong>
                <span>${m.desc}</span>
              </div>
              <span class="badge ${m.tone}">${m.tag}</span>
              <button class="ghost-button" type="button"
                style="padding:2px 10px;font-size:12px;margin-left:6px;${state.familyMsgSent[m.key] ? "opacity:0.5;" : ""}"
                data-action="send-message-family" data-key="${m.key}" data-label="${m.label}"
                ${state.familyMsgSent[m.key] ? "disabled" : ""}>
                ${state.familyMsgSent[m.key] ? "已留言" : "发消息"}
              </button>
            </article>
          `).join("")}
        </div>
      </section>
      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>签约服务</h2>
            <p>不是只签字，而是和转诊、随访、慢病共管联动</p>
          </div>
        </div>
        <div class="panel-body split-list">
          ${renderFollow("慢病随访", "血压、血糖、用药、复诊计划持续跟进。", "green")}
          ${renderFollow("转诊协助", "需要县医院时由家庭医生协助规范上转。", "blue")}
          ${renderFollow("院后回访", "出院方案回传后由基层团队继续管理。", "teal")}
          ${renderFollow("家属代办", "老人可授权家属查看提醒和报告。", "amber")}
        </div>
      </section>
    </div>
  `;
}

function renderPatientChronic() {
  const done = state.chronicDone;
  const bpDone       = done.includes("bp");
  const drugDone     = done.includes("drug");
  const followupDone = done.includes("followup");
  const allDone = bpDone && drugDone;

  // P2-2: trend analysis shown after BP submitted
  const trendFeedback = bpDone ? (() => {
    const prev = bpTrendHistory[bpTrendHistory.length - 2].val;
    const curr = bpTrendHistory[bpTrendHistory.length - 1].val;
    const prevSys = parseInt(prev);
    const currSys = parseInt(curr);
    const improving = currSys < prevSys;
    return {
      improving,
      msg: improving
        ? `今日 ${curr}，较昨日（${prev}）下降 ${prevSys - currSys} mmHg，继续保持用药规律。`
        : `今日 ${curr}，较昨日（${prev}）升高，请确认今日用药是否按时服用。`,
      trend: bpTrendHistory,
    };
  })() : null;

  // Simulated consecutive-anomaly alert (for demo: triggered when bp submitted and 3+ days above 150)
  const showAlert = bpDone && bpTrendHistory.slice(0, 3).every((d) => parseInt(d.val) >= 140);

  return `
    <div class="dashboard-grid">
      ${renderMetric({ label: "今日血压", value: bpDone ? "138/84" : "142/86", detail: bpDone ? "已填报，较昨日下降" : "待填报", tone: bpDone ? "green" : "amber", icon: "压" })}
      ${renderMetric({ label: "用药打卡", value: drugDone ? "已确认" : "待确认", detail: "早晚各 1 次", tone: drugDone ? "green" : "amber", icon: "药" })}
      ${renderMetric({ label: "复诊提醒", value: "3 天后", detail: "城东镇卫生院", tone: "blue", icon: "诊" })}
      ${renderMetric({ label: "随访状态", value: followupDone ? "今日已完成" : allDone ? "可提交" : "待操作", detail: followupDone ? "结果已同步给家庭医生" : "完成血压填报和用药确认后提交", tone: followupDone ? "green" : allDone ? "teal" : "amber", icon: "访" })}
    </div>
    ${trendFeedback ? `
    <div class="ai-panel" style="margin-top:16px;">
      <div class="ai-panel-header">
        <span>🤖</span>
        <strong>血压趋势分析</strong>
        <span class="ai-badge">${trendFeedback.improving ? "持续改善 ✓" : "请留意"}</span>
      </div>
      <div class="ai-panel-body">
        <p style="font-size:14px;font-weight:600;color:var(--ink);margin:0 0 10px;">${trendFeedback.msg}</p>
        <div style="display:flex;align-items:flex-end;gap:6px;margin-bottom:10px;">
          ${trendFeedback.trend.map((d, i) => {
            const sys = parseInt(d.val);
            const h = Math.max(20, Math.min(60, (sys - 120) * 2));
            const isToday = i === trendFeedback.trend.length - 1;
            return `
              <div style="display:flex;flex-direction:column;align-items:center;gap:3px;flex:1;">
                <span style="font-size:10px;color:var(--muted);">${sys}</span>
                <div style="width:100%;height:${h}px;border-radius:4px 4px 0 0;background:${isToday ? "var(--brand)" : "color-mix(in srgb,var(--brand) 30%,var(--surface))"};">
                </div>
                <span style="font-size:10px;color:var(--muted);white-space:nowrap;">${d.date}</span>
              </div>`;
          }).join("")}
        </div>
        ${showAlert ? `
          <div style="padding:10px 14px;border-radius:var(--radius);background:color-mix(in srgb,var(--amber) 10%,var(--surface));border:1px solid color-mix(in srgb,var(--amber) 40%,transparent);margin-top:4px;">
            <strong style="font-size:13px;color:var(--amber);">⚠ 近5天血压连续偏高</strong>
            <p style="font-size:12px;color:var(--ink);margin:4px 0 0;">建议今天联系您的家庭医生，检查是否需要调整用药方案。</p>
          </div>` : ""}
      </div>
    </div>` : ""}

    <section class="panel" style="margin-top:16px;">
      <div class="panel-header">
        <div class="panel-title">
          <h2>慢病随访任务</h2>
          <p>患者端负责确认和填报，不替代医生诊疗判断</p>
        </div>
        ${followupDone ? `<span class="badge green">今日已完成</span>` : ""}
      </div>
      <div class="panel-body task-list">
        <article class="task-item" ${detailAttrs("随访任务", "填写今日血压", "建议早晚各测一次，异常时家庭医生会收到提醒。", "patientChronic")}>
          <b class="task-icon tone-${bpDone ? "green" : "amber"}">${bpDone ? "✓" : "填"}</b>
          <div class="task-main">
            <strong>填写今日血压</strong>
            <span>${bpDone ? "已填报：收缩压 138 / 舒张压 84 mmHg，家庭医生已收到数据。" : "建议早晚各测一次，异常时家庭医生会收到提醒。"}</span>
          </div>
          <span class="badge ${bpDone ? "green" : "amber"}">${bpDone ? "已填报" : "待填"}</span>
          ${!bpDone && !followupDone
            ? `<button class="secondary-button" type="button" style="padding:2px 10px;font-size:12px;margin-left:6px;" data-action="submit-bp">提交血压</button>`
            : ""}
        </article>

        <article class="task-item" ${detailAttrs("随访任务", "确认用药", "按县医院回传方案服药，如不适请联系家庭医生。", "patientChronic")}>
          <b class="task-icon tone-${drugDone ? "green" : "blue"}">${drugDone ? "✓" : "药"}</b>
          <div class="task-main">
            <strong>确认用药</strong>
            <span>${drugDone ? "已确认：早晚各 1 次，按方案服药中。" : "按县医院回传方案服药，如不适请联系家庭医生。"}</span>
          </div>
          <span class="badge ${drugDone ? "green" : "blue"}">${drugDone ? "已确认" : "待确认"}</span>
          ${!drugDone && !followupDone
            ? `<button class="secondary-button" type="button" style="padding:2px 10px;font-size:12px;margin-left:6px;" data-action="confirm-drug">确认用药</button>`
            : ""}
        </article>

        ${renderTask("复", "复诊提醒", "3 天后到城东镇卫生院复诊，必要时再上转县医院。", "blue", "提醒")}

        ${followupDone
          ? `<button class="primary-button" type="button" disabled>✓ 今日随访已完成</button>`
          : `<button class="primary-button" type="button" data-action="confirm-followup"
               ${!allDone ? 'title="请先完成血压填报和用药确认"' : ""}>
               确认今日随访${!allDone ? "（需先完成上方 2 项）" : ""}
             </button>`}
      </div>
    </section>
  `;
}

function renderPatientConsent() {
  const confirmed = state.consentConfirmed;
  return `
    <div class="role-brief">
      <article class="role-brief-card">
        <span>患者端原则</span>
        <strong>知情、自愿、可选择、可撤回</strong>
        <p>患者端不展示医生补偿金额，只展示转诊原因、可选机构、资料共享范围和院后服务安排。</p>
      </article>
      <article class="role-brief-card">
        <span>当前授权状态</span>
        <strong>${confirmed ? "已授权 · 心内科转诊 · 资料共享授权" : "待确认 · 心内科转诊 · 资料共享授权"}</strong>
        <p>${confirmed ? "授权已完成，审计记录已同步给转诊中心、接诊医生和家庭医生团队。" : "确认后会形成审计记录，同步给转诊中心、接诊医生和家庭医生团队。"}</p>
      </article>
    </div>

    <div class="section-grid">
      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>本次转诊知情确认</h2>
            <p>患者看到的是服务选择和授权范围，不是内部结算规则</p>
          </div>
          <span class="badge ${confirmed ? "green" : "amber"}">${confirmed ? "已授权" : "待确认"}</span>
        </div>
        <div class="panel-body consent-list">
          ${consentRows.map(([title, desc]) => `
            <article class="consent-item" ${detailAttrs("知情授权", title, desc, "patientConsent")}>
              <b>✓</b>
              <div>
                <strong>${title}</strong>
                <span>${desc}</span>
              </div>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>授权范围</h2>
            <p>明确谁能看、看什么、用于什么服务</p>
          </div>
        </div>
        <div class="panel-body task-list">
          ${renderTask("县", "县医院接诊医生", "查看本次转诊相关病历、检查、用药和基层评估。", "blue", "允许")}
          ${renderTask("基", "基层家庭医生", "接收县医院回传方案，继续随访、复诊提醒和慢病管理。", "green", "允许")}
          ${renderTask("家", "授权家属", "可代看进度、预约提醒和本人报告，有效期 30 天。", "teal", "可选")}
          ${renderTask("撤", "授权可撤回", "非治疗必需的授权可撤回，撤回后不影响已发生诊疗记录留存。", "amber", "权利")}
          ${confirmed
            ? `<button class="primary-button" type="button" disabled>✓ 已确认授权</button>`
            : `<button class="primary-button" type="button" data-action="submit-consent">确认知情并授权</button>`}
          <button class="ghost-button" type="button" data-action="authorize-family">授权家属代办</button>
        </div>
      </section>
    </div>

    <div class="section-grid equal">
      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>患者可选择</h2>
            <p>避免让转诊看起来像单向指定</p>
          </div>
        </div>
        <div class="panel-body schedule-list">
          ${renderSchedule("县人民医院", "心内科绿色通道", "县域内优先评估，报告互认，院后回基层随访")}
          ${renderSchedule("上级医院", "市级 / 省级医院", "疑难重症或患者自愿外转时可选择")}
          ${renderSchedule("继续基层观察", "家庭医生随访", "症状稳定且无急症风险时可先基层处理")}
          ${renderSchedule("其他医疗机构", "患者自主选择", "患者可选择符合诊疗能力的其他机构")}
        </div>
      </section>

      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>投诉与评价</h2>
            <p>把患者感受纳入协作服务质量评价</p>
          </div>
        </div>
        <div class="panel-body task-list">
          ${renderTask("评", "转诊服务评价", "评价基层说明是否充分、县医院接诊是否顺畅。", "blue", "评价")}
          ${renderTask("诉", "不合理转诊投诉", "如认为被诱导或解释不清，可提交投诉并触发审核。", "red", "投诉")}
          ${renderTask("查", "授权记录查询", "可查看何时授权、授权给谁、授权哪些资料。", "green", "透明")}
        </div>
      </section>
    </div>
  `;
}

function renderAccess() {
  return `
    <section class="panel">
      <div class="panel-header">
        <div class="panel-title">
          <h2>三端权限边界</h2>
          <p>同一份数据，三类角色看到的粒度和可操作事项不同</p>
        </div>
      </div>
      <div class="panel-body">
        <table class="table">
          <thead>
            <tr>
              <th>数据 / 功能</th>
              <th>管理端</th>
              <th>医生端</th>
              <th>患者端</th>
            </tr>
          </thead>
          <tbody>
            ${permissionRows.map(([item, manager, doctor, patient]) => `
              <tr>
                <td><strong>${item}</strong></td>
                <td>${manager}</td>
                <td>${doctor}</td>
                <td>${patient}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>

    <div class="section-grid equal">
      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>管理端规则</h2>
            <p>管全局、管流程、管质量，但患者明细需要业务授权</p>
          </div>
        </div>
        <div class="panel-body task-list">
          ${renderTask("全", "全县汇总可见", "县域就诊率、外转率、机构排行、医保费用按管理权限可见。", "blue", "允许")}
          ${renderTask("审", "患者明细审计", "转诊、质控、医保核查等场景查看患者明细需要留痕。", "amber", "留痕")}
          <article class="task-item" ${detailAttrs("规则配置", "转诊标准配置", "可配置转诊病种目录、绩效指标、数据接入和预警阈值。", "referralStandards")}>
            <b class="task-icon tone-green">配</b>
            <div class="task-main">
              <strong>规则配置</strong>
              <span>可配置转诊病种目录、绩效指标、数据接入和预警阈值。</span>
            </div>
            <button class="secondary-button compact-button" type="button" data-go-page="referralStandards">进入配置</button>
          </article>
        </div>
      </section>
      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>患者授权规则</h2>
            <p>让服务连续，但不让数据失控</p>
          </div>
        </div>
        <div class="panel-body task-list">
          ${renderTask("本", "本人查看", "患者只能看本人报告、费用、转诊进度和随访任务。", "green", "本人")}
          ${renderTask("家", "家属代办", "需要患者授权，可设置范围和有效期。", "teal", "授权")}
          ${renderTask("医", "医生访问", "医生只能看当前业务闭环内的授权患者。", "blue", "限定")}
        </div>
      </section>
    </div>
  `;
}

function renderDashboard() {
  return `
    <div class="leader-hero">
      <div>
        <span>领导驾驶舱</span>
        <h2>县域医共体运行总览</h2>
        <p>围绕县域内就诊率、外转率、基层规范上转、慢病管理和医保费用五个目标，形成“指标监测、问题定位、责任到人、整改闭环”。</p>
      </div>
      <div class="leader-hero-actions">
        <button class="primary-button" type="button" data-go-page="diseaseCatalog">病种目录</button>
        <button class="secondary-button" type="button" data-go-page="referralStandards">标准配置</button>
        <button class="secondary-button" type="button" data-go-page="collaboration">协作结算审核</button>
      </div>
    </div>

    <div class="leader-kpi-grid">
      ${leaderKpis.map(([name, value, target, trend, owner, action, tone]) => renderLeaderKpi(name, value, target, trend, owner, action, tone)).join("")}
    </div>

    <div class="section-grid equal">
      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>重点问题督办</h2>
            <p>领导驾驶舱不只看数，还要看到谁负责、何时完成</p>
          </div>
        </div>
        <div class="panel-body task-list">
          ${leaderActions.map(([title, desc, owner, deadline, tone]) => renderLeaderAction(title, desc, owner, deadline, tone)).join("")}
        </div>
      </section>

      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>目标达成趋势</h2>
            <p>用于月度例会、卫健局汇报和医共体运营复盘</p>
          </div>
        </div>
        <div class="panel-body chart-grid">
          ${renderBar("县域内就诊率", 88)}
          ${renderBar("基层规范上转率", 76)}
          ${renderBar("转诊接诊成功率", 91)}
          ${renderBar("慢病规范管理率", 78)}
          ${renderBar("医保费用控制率", 94)}
        </div>
      </section>
    </div>

    <div class="dashboard-grid">
      ${metrics.map(renderMetric).join("")}
    </div>

    <div class="section-grid">
      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>县乡村服务网络</h2>
            <p>一院牵头、三级协同、六大中心统一运营</p>
          </div>
          <span class="badge blue">实时</span>
        </div>
        <div class="panel-body county-map">
          ${renderMapNode("上级三甲", "疑难会诊、技术帮扶、专科联盟", ["会诊 18", "外转管控"], "tone-violet")}
          ${renderMapNode("县人民医院", "医共体总院、转诊运营中心、数据中心", ["1300 床", "三甲"], "core")}
          ${renderMapNode("二级及专科机构", "区域协同、康复承接、专科补充", ["7 家", "互认 82%"], "tone-teal")}
          ${renderMapNode("乡镇与社区", "基层首诊、上转入口、慢病管理", ["18 家", "上转 126"], "tone-green")}
          ${renderMapNode("村医诊所养老", "随访提醒、健康监测、照护协同", ["246 个", "随访 418"], "tone-amber")}
        </div>
      </section>

      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>今日协同任务</h2>
            <p>转诊、会诊、随访、预警统一进入运营台账</p>
          </div>
          <button class="secondary-button" type="button" data-action="open-referrals">查看</button>
        </div>
        <div class="panel-body task-list">
          ${renderTask("转", "待接收急诊上转", "城东镇卫生院提交胸痛患者，心内科待确认。", "red", "9 分钟")}
          ${renderTask("会", "远程会诊待复核", "康宁养老中心慢阻肺患者血氧异常。", "amber", "18 分钟")}
          ${renderTask("随", "院后随访待完成", "今日出院患者 64 人，基层已完成 47 人。", "green", "73%")}
          ${renderTask("检", "检查互认提醒", "基层上传影像 28 份，县医院已审核 21 份。", "blue", "75%")}
        </div>
      </section>
    </div>

    <div class="section-grid equal">
      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>重点预警</h2>
            <p>围绕无序转诊、重复检查、慢病断档和医保费用</p>
          </div>
        </div>
        <div class="panel-body split-list">
          ${renderFollow("县外转诊异常", "青山片区本周外转同比上升 12%，需复核病种和去向。", "red")}
          ${renderFollow("重复检查风险", "呼吸科 14 名患者 7 日内重复胸部 CT，待质控审核。", "amber")}
          ${renderFollow("慢病随访断档", "高危慢病患者 38 人超过 30 天未完成随访。", "red")}
          ${renderFollow("医保费用波动", "糖尿病足病种次均费用较基线高 8.7%。", "amber")}
        </div>
      </section>

      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>本月运营抓手</h2>
            <p>从数据问题直接落到建设动作</p>
          </div>
        </div>
        <div class="panel-body task-list">
          ${renderTask("则", "发布首批 20 个病种规则", "明确必须上转、会诊后转、留基层、下转康复和资料清单。", "blue", "本周")}
          ${renderTask("审", "上线协作服务合规审核", "补偿真实服务，校验患者知情、资料完整和闭环结果。", "green", "已上线")}
          ${renderTask("督", "建立片区整改台账", "对外转异常、随访断档、重复检查形成机构级督办。", "amber", "月度")}
        </div>
      </section>
    </div>
  `;
}

// 多页面合并入口（hub）：一个菜单项 + 页内顶部 Tab，子页内容来自原有渲染函数。
const hubConfigs = {
  referralHub: {
    stateKey: "referralTab",
    tabs: [
      { id: "referrals", label: "监管台账", desc: "全县上转、接诊、闭环工单", render: renderReferrals },
      { id: "diseaseCatalog", label: "病种目录", desc: "病种分层、责任科室、启停", render: renderDiseaseCatalog },
      { id: "referralStandards", label: "标准配置", desc: "阈值、必带资料、绩效约束", render: renderReferralStandards },
      { id: "rules", label: "规则说明", desc: "规则库与转诊/结算闭环", render: renderRules },
    ],
  },
  careHub: {
    stateKey: "careTab",
    tabs: [
      { id: "chronic", label: "慢病共管", desc: "高血压/糖尿病/卒中/慢阻肺/慢性肾病", render: renderChronic },
      { id: "emergency", label: "急救随访", desc: "急救协同与院后康复", render: renderEmergency },
    ],
  },
  systemHub: {
    stateKey: "systemTab",
    tabs: [
      { id: "data", label: "数据资产", desc: "患者/医生主索引、数据质量", render: renderData },
      { id: "access", label: "权限规则", desc: "三端权限边界与管理规则", render: renderAccess },
    ],
  },
  doctorReferralHub: {
    stateKey: "doctorReferralTab",
    tabs: [
      { id: "doctorReferrals", label: "转诊单", desc: "我的转诊单与上转路径", render: renderDoctorReferrals },
      { id: "doctorRules", label: "规则速查", desc: "常用病种转诊规则", render: renderDoctorRules },
    ],
  },
  doctorPatientHub: {
    stateKey: "doctorPatientTab",
    tabs: [
      { id: "doctorPatients", label: "授权患者", desc: "我管的患者清单与闭环", render: renderDoctorPatients },
      { id: "doctorFollowups", label: "随访任务", desc: "随访任务池与高危提醒", render: renderDoctorFollowups },
    ],
  },
};

// 旧页面 id → [hubId, 状态字段]，用于把历史跨模块跳转归一化到对应 Tab。
const hubLegacyPages = Object.fromEntries(
  Object.entries(hubConfigs).flatMap(([hubId, cfg]) =>
    cfg.tabs.map((tab) => [tab.id, [hubId, cfg.stateKey]]),
  ),
);

function renderHub(hubId) {
  const cfg = hubConfigs[hubId];
  const tabIds = cfg.tabs.map((tab) => tab.id);
  const activeId = tabIds.includes(state[cfg.stateKey]) ? state[cfg.stateKey] : tabIds[0];
  const activeTab = cfg.tabs.find((tab) => tab.id === activeId);
  const tabBar = cfg.tabs
    .map(
      (tab) => `
        <button type="button" data-hub="${hubId}" data-hub-tab="${tab.id}" class="${activeId === tab.id ? "active" : ""}">
          <span class="hub-tab-label">${tab.label}</span>
          <span class="hub-tab-desc">${tab.desc}</span>
        </button>
      `,
    )
    .join("");
  return `
    <div class="hub-tabs" data-cols="${cfg.tabs.length}">${tabBar}</div>
    <div class="hub-tab-panel">${activeTab.render()}</div>
  `;
}

function renderReferrals() {
  const filtered = state.referralStage === "all"
    ? referrals
    : referrals.filter((item) => item.stage === state.referralStage);
  const selected = referrals.find((item) => item.id === state.selectedReferralId) || filtered[0] || referrals[0];
  const selectedPathway = upwardReferralPathways.find((item) => item.patient === selected.patient) || getSelectedPathway();

  return `
    <div class="dashboard-grid">
      ${renderMetric({ label: "今日上转申请", value: "126", detail: "其中急危重症 17 人", tone: "amber", icon: "上" })}
      ${renderMetric({ label: "县医院接诊成功率", value: "91.2%", detail: "接诊平均响应 14 分钟", tone: "green", icon: "接" })}
      ${renderMetric({ label: "下转康复任务", value: "48", detail: "基层已确认 36 人", tone: "teal", icon: "康" })}
      ${renderMetric({ label: "转诊绩效入账", value: "83", detail: "规范闭环后自动计入", tone: "blue", icon: "绩" })}
    </div>

    ${renderSinglePatientFlowDemo("manager")}

    ${renderReferralLifecycleSection("manager")}

    <section class="panel" style="margin-top:16px;">
      <div class="panel-header">
        <div class="panel-title">
          <h2>四类上转路径</h2>
          <p>转诊流程直接嵌入监管中心：普通上转、急症绿色通道、会诊后上转、慢病异常上转</p>
        </div>
        <button class="secondary-button" type="button" data-go-page="diseaseCatalog">查看病种目录</button>
      </div>
      <div class="panel-body pathway-grid">
        ${upwardReferralPathways.map(renderPathwayCard).join("")}
      </div>
    </section>

    ${renderPathwayDetail(selectedPathway, "manager")}

    ${renderReferralAnomalyPanel()}

    <div class="referral-layout">
      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>基层上转队列</h2>
            <p>每一笔转诊都有来源、病种、接收和反馈</p>
          </div>
          <button class="secondary-button" type="button" data-action="referral-anomaly-open"
            style="background:color-mix(in srgb,var(--brand) 8%,var(--panel));border-color:color-mix(in srgb,var(--brand) 25%,transparent);color:var(--brand);"
            ${state.referralAnomalyOpen ? "disabled" : ""}>
            🤖 AI 异常检测
          </button>
        </div>
        <div class="panel-body">
          <div class="tabs">
            ${renderStageTab("all", "全部")}
            ${renderStageTab("pending", "待接收")}
            ${renderStageTab("consulting", "会诊中")}
            ${renderStageTab("accepted", "已接诊")}
            ${renderStageTab("arranged", "已安排")}
            ${renderStageTab("followup", "待随访")}
          </div>
          <div class="case-list" style="margin-top: 14px;">
            ${filtered.map((item) => renderCaseRow(item, item.id === selected.id)).join("") || `<div class="empty-state">暂无该状态转诊单</div>`}
          </div>
        </div>
      </section>

      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>${selected.patient} · ${selected.disease}</h2>
            <p>${selected.source} 发起，目标科室：${selected.target}</p>
          </div>
          <span class="badge ${priorityTone(selected.priority)}">${selected.status}</span>
        </div>
        <div class="panel-body">
          <div class="detail-hero">
            <div>
              <div class="patient-summary">
                <span>${selected.sex} · ${selected.age} 岁</span>
                <span>${state.settings.showPhone ? selected.phone : "***-****-****"}</span>
                <span>${selected.insurance}</span>
                <span>转诊单 ${selected.id}</span>
              </div>
            </div>
            <div class="detail-actions">
              <button class="primary-button" type="button" data-action="accept">✓ 接收</button>
              <button class="secondary-button" type="button" data-action="arrange">↗ 安排绿色通道</button>
              <button class="ghost-button" type="button" data-action="return">↙ 回传基层</button>
            </div>
          </div>

          <div class="detail-grid">
            ${renderMini("病情摘要", selected.signs)}
            ${renderMini("系统建议", selected.suggestion)}
            ${renderMini("资源匹配", selected.bed)}
          </div>

          ${selectedPathway ? `
            <div class="performance-strip">
              <div>
                <span>绩效规则</span>
                <strong>${selectedPathway.compensation}</strong>
              </div>
              <div>
                <span>资料清单</span>
                <strong>${selectedPathway.requiredMaterials.join("、")}</strong>
              </div>
              <div>
                <span>当前评分</span>
                <strong>${selectedPathway.score.reduce((sum, value) => sum + value, 0)} / 100</strong>
              </div>
            </div>
          ` : ""}

          <div class="timeline">
            ${selected.timeline.map(([time, title, desc]) => renderTimeline(time, title, desc)).join("")}
          </div>
        </div>
      </section>
    </div>
  `;
}

function renderRules() {
  return `
    <div class="role-brief">
      <article class="role-brief-card">
        <span>规则定位</span>
        <strong>把“该不该转、怎么转、带什么资料、是否补偿”标准化</strong>
        <p>病种规则同时服务管理端监管、医生端操作和协作补偿审核，是避免无序转诊和合规风险的核心依据。</p>
      </article>
      <article class="role-brief-card">
        <span>当前版本</span>
        <strong>首批 20 个病种 · 覆盖急症、慢病、康复和专病门诊</strong>
        <p>规则每月由县医院专科、基层代表、医保和质控共同复盘更新。</p>
      </article>
    </div>

    <div class="leader-hero compact-hero" style="margin-top:16px;">
      <div>
        <span>规则配置入口</span>
        <h2>目录管病种，标准管执行</h2>
        <p>管理端把病种分层、上转/留基层/下转规则、资料清单和绩效约束拆成两个可配置页面，便于运营、医务、医保和基层共同维护。</p>
      </div>
      <div class="leader-hero-actions">
        <button class="primary-button" type="button" data-go-page="diseaseCatalog">转诊病种目录</button>
        <button class="secondary-button" type="button" data-go-page="referralStandards">转诊标准配置</button>
      </div>
    </div>

    <div class="dashboard-grid">
      ${ruleStats.map(([label, value, detail], index) => renderMetric({ label, value, detail, tone: ["red", "amber", "green", "blue"][index], icon: label.slice(0, 1) })).join("")}
    </div>

    <section class="panel" style="margin-top:16px;">
      <div class="panel-header">
        <div class="panel-title">
          <h2>病种转诊规则库</h2>
          <p>必须上转、会诊后上转、留基层、下转康复、绿色通道一张表讲清楚</p>
        </div>
      </div>
      <div class="panel-body rule-grid">
        ${referralRules.map(renderRuleCard).join("")}
      </div>
    </section>

    <div class="section-grid equal">
      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>规则如何进入转诊审核</h2>
            <p>基层提交后，系统先按病种规则校验，再进入县医院接收</p>
          </div>
        </div>
        <div class="panel-body compliance-flow">
          ${renderFlowStep("1", "识别病种", "根据诊断、主诉、生命体征、检查结果匹配病种规则。")}
          ${renderFlowStep("2", "判断路径", "必须上转、会诊后上转、留基层或下转康复。")}
          ${renderFlowStep("3", "校验资料", "检查必填材料，不完整则退回补充。")}
          ${renderFlowStep("4", "形成闭环", "接收、治疗、回传、随访和协作服务审核联动。")}
        </div>
      </section>

      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>规则如何约束协作补偿</h2>
            <p>没有规则依据、资料不完整、患者未知情，不进入结算</p>
          </div>
        </div>
        <div class="panel-body task-list">
          ${renderTask("准", "符合病种指征", "补偿申请必须对应病种目录和转诊路径。", "green", "必需")}
          ${renderTask("全", "资料完整达标", "资料完整率低于 80% 不进入结算。", "amber", "校验")}
          ${renderTask("知", "患者知情授权", "患者端确认后，服务补偿才可进入审核。", "blue", "留痕")}
          ${renderTask("异", "异常转诊预警", "短期高频、同病种异常、投诉等触发复核。", "red", "风控")}
        </div>
      </section>
    </div>
  `;
}

function renderDiseaseCatalog() {
  const activeCount = referralDiseaseCatalog.filter((item) => item.status === "启用").length;
  const requiredCount = referralDiseaseCatalog.filter((item) => item.level === "一级").length;
  return `
    <div class="role-brief">
      <article class="role-brief-card">
        <span>目录定位</span>
        <strong>按病种分层决定“必须上转、先会诊、留基层或下转康复”</strong>
        <p>每个病种都绑定责任科室、必带资料、绩效约束和启停状态，基层提交转诊时自动匹配。</p>
      </article>
      <article class="role-brief-card">
        <span>维护机制</span>
        <strong>运营中心维护目录，专科和基层共同复核</strong>
        <p>启用规则进入医生端和转诊预审；试运行规则只提示不拦截，停用规则保留历史留痕。</p>
      </article>
    </div>

    <div class="dashboard-grid">
      ${renderMetric({ label: "目录病种", value: `${referralDiseaseCatalog.length}`, detail: "覆盖急症、慢病、康复和重点人群", tone: "blue", icon: "目" })}
      ${renderMetric({ label: "一级必须上转", value: `${requiredCount}`, detail: "胸痛、卒中、危重孕产妇等", tone: "red", icon: "上" })}
      ${renderMetric({ label: "启用中", value: `${activeCount}`, detail: "已进入预审和医生端校验", tone: "green", icon: "启" })}
      ${renderMetric({ label: "试运行", value: `${referralDiseaseCatalog.filter((item) => item.status === "试运行").length}`, detail: "提示但暂不强拦截", tone: "amber", icon: "试" })}
    </div>

    <section class="panel" style="margin-top:16px;">
      <div class="panel-header">
        <div class="panel-title">
          <h2>转诊病种目录</h2>
          <p>重点展示病种分层、上转/留基层/下转规则、必带资料、绩效约束、启停状态和责任科室</p>
        </div>
        <div class="detail-actions">
          <button class="primary-button" type="button" data-go-page="referralStandards">配置转诊标准</button>
          <button class="ghost-button" type="button" data-action="publish-rule">发布目录</button>
        </div>
      </div>
      <div class="panel-body disease-catalog-list">
        ${referralDiseaseCatalog.map(renderDiseaseCatalogCard).join("")}
      </div>
    </section>

    <section class="panel" style="margin-top:16px;">
      <div class="panel-header">
        <div class="panel-title">
          <h2>目录启停与责任分工</h2>
          <p>启停不只影响页面展示，还影响预审拦截、医生端提示和绩效入账</p>
        </div>
      </div>
      <div class="panel-body">
        <table class="table">
          <thead>
            <tr>
              <th>病种编码</th>
              <th>病种 / 分层</th>
              <th>责任科室</th>
              <th>启停状态</th>
              <th>绩效约束</th>
            </tr>
          </thead>
          <tbody>
            ${referralDiseaseCatalog.map((item) => `
              <tr ${detailAttrs("转诊病种目录", item.disease, `${item.layer}，${item.owner}，${item.performance}`, "diseaseCatalog", `catalog.${item.code}`)}>
                <td><strong>${item.code}</strong></td>
                <td>${item.disease}<br><span>${item.level} · ${item.layer}</span></td>
                <td>${item.owner}</td>
                <td>
                  <span class="badge ${item.status === "启用" ? "green" : item.status === "试运行" ? "amber" : "red"}">${item.status}</span>
                  <button
                    class="ghost-button"
                    type="button"
                    style="margin-left:8px;padding:2px 8px;font-size:12px;"
                    data-action="toggle-catalog"
                    data-code="${item.code}"
                  >${item.status === "启用" ? "停用" : item.status === "停用" ? "启用" : "正式启用"}</button>
                </td>
                <td>${item.performance}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderReferralStandards() {
  return `
    <div class="role-brief">
      <article class="role-brief-card">
        <span>配置定位</span>
        <strong>把目录里的判断变成转诊审核、资料校验和绩效结算规则</strong>
        <p>标准配置决定系统什么时候拦截、什么时候提示、哪些资料必填、哪些情况触发复核。</p>
      </article>
      <article class="role-brief-card">
        <span>合规边界</span>
        <strong>绩效只奖励真实服务和闭环质量，不按患者人头或费用提成</strong>
        <p>病种不匹配、资料缺项、患者未知情和异常高频都会进入运营复核。</p>
      </article>
    </div>

    <div class="dashboard-grid">
      ${renderMetric({ label: "标准策略", value: `${referralStandardConfigs.length}`, detail: "覆盖上转、留基层、下转和结算", tone: "blue", icon: "标" })}
      ${renderMetric({ label: "资料阈值", value: "80%-90%", detail: "按路径和病种自动校验", tone: "amber", icon: "料" })}
      ${renderMetric({ label: "预审时限", value: "5 分钟", detail: "绿色通道必须快速响应", tone: "red", icon: "时" })}
      ${renderMetric({ label: "合规红线", value: "6 类", detail: "高频、缺项、未知情等复核", tone: "green", icon: "合" })}
    </div>

    <section class="panel" style="margin-top:16px;">
      <div class="panel-header">
        <div class="panel-title">
          <h2>转诊标准配置</h2>
          <p>按路径配置触发条件、执行流程、必带资料、绩效约束、启停状态和责任部门</p>
        </div>
        <div class="detail-actions">
          <button class="primary-button" type="button" data-action="publish-rule">发布标准</button>
          <button class="secondary-button" type="button" data-go-page="diseaseCatalog">查看病种目录</button>
        </div>
      </div>
      <div class="panel-body standard-config-grid">
        ${referralStandardConfigs.map(renderStandardConfigCard).join("")}
      </div>
    </section>

    <div class="section-grid equal">
      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>审核拦截顺序</h2>
            <p>先判断病种和路径，再看资料、知情、科室和绩效风险</p>
          </div>
        </div>
        <div class="panel-body compliance-flow">
          ${renderFlowStep("1", "目录匹配", "根据诊断、主诉、风险分层匹配病种目录。")}
          ${renderFlowStep("2", "路径判定", "必须上转、会诊后上转、留基层管理或下转康复。")}
          ${renderFlowStep("3", "资料校验", "按路径读取必带资料清单，未达阈值退回补充。")}
          ${renderFlowStep("4", "绩效复核", "符合真实服务、患者知情和闭环质量后才入账。")}
        </div>
      </section>

      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>配置责任</h2>
            <p>规则发布前需要临床、基层、医保和运营共同确认</p>
          </div>
        </div>
        <div class="panel-body task-list">
          ${renderTask("医", "专科审核", "确认上转指征、下转条件和必带资料是否符合临床路径。", "blue", "责任")}
          ${renderTask("基", "基层复核", "确认留基层规则可执行，避免把基层无法完成的动作写入标准。", "green", "共建")}
          ${renderTask("保", "医保校验", "检查重复检查、异常费用和结算红线。", "amber", "风控")}
          ${renderTask("运", "运营发布", "灰度发布、启停留痕、月度复盘和异常机构督办。", "teal", "发布")}
        </div>
      </section>
    </div>
  `;
}

const chronicDiseaseData = {
  hypertension: {
    title: "高血压",
    subtitle: "县医院定方案，基层做随访，村医做提醒和血压数据采集",
    stats: [
      ["高危预警", "1,286", "血压持续偏高或靶器官损害风险", "red"],
      ["本周待随访", "3,842", "基层医生和村医任务池", "amber"],
      ["规范管理率", "78.4%", "较上月提升 4.1 个百分点", "green"],
    ],
    patients: [
      ["张秀兰", "高血压合并糖尿病", "高危", "西河社区", "今日待随访", "red"],
      ["马建军", "冠心病术后高血压", "中危", "城东镇", "3 天后复诊", "amber"],
      ["王桂芳", "原发性高血压 2 级", "高危", "青山镇", "血压异常预警", "red"],
      ["刘明远", "高血压合并肾病", "中危", "城北村卫生室", "下周复查肌酐", "amber"],
      ["陈淑华", "老年高血压", "稳定", "康宁养老中心", "本周已完成", "green"],
    ],
    loop: [
      ["筛", "基层筛查建档", "乡镇卫生院、公卫系统、村医测压统一进入主索引。", "blue", "入口", "chronic.register"],
      ["分", "血压风险分层", "专科医生按 JNC 标准给出低危/中危/高危分层方案。", "teal", "规则", "chronic.stratify"],
      ["访", "基层用药随访", "家庭医生按任务池完成用药核查、复诊和生活方式干预。", "green", "执行", "chronic.followup"],
      ["警", "血压异常上转", "连续 3 次超阈值或靶器官损害指标异常时自动触发会诊。", "red", "闭环", "chronic.escalate"],
    ],
  },
  diabetes: {
    title: "糖尿病",
    subtitle: "血糖监测、用药管理、并发症筛查三位一体共管",
    stats: [
      ["高危预警", "847", "血糖失控或并发症风险预警", "red"],
      ["本周待随访", "2,103", "包含糖尿病肾病和足部评估", "amber"],
      ["规范管理率", "71.2%", "较上月提升 2.6 个百分点", "green"],
    ],
    patients: [
      ["张秀兰", "高血压合并糖尿病", "高危", "西河社区", "血糖监测待提交", "red"],
      ["李文华", "2 型糖尿病", "稳定", "青山镇", "本周已完成", "green"],
      ["赵国强", "糖尿病并发症", "高危", "城东镇", "足部评估待录入", "red"],
      ["吴晓燕", "2 型糖尿病", "中危", "西河社区", "今日待随访", "amber"],
      ["林建国", "糖尿病肾病", "高危", "康宁养老中心", "用药复核待完成", "red"],
    ],
    loop: [
      ["筛", "血糖筛查建档", "空腹血糖、糖化血红蛋白检测结果统一录入慢病档案。", "blue", "入口", "chronic.register"],
      ["分", "并发症风险分层", "肾功能、眼底、神经、足部评估结果驱动高危分层。", "teal", "规则", "chronic.stratify"],
      ["访", "用药与饮食随访", "家庭医生按任务池完成血糖打卡、用药确认和饮食记录。", "green", "执行", "chronic.followup"],
      ["警", "血糖异常上转", "连续血糖超标或并发症指标触发专科会诊或住院绿色通道。", "red", "闭环", "chronic.escalate"],
    ],
  },
  stroke: {
    title: "脑卒中",
    subtitle: "急性期绿色通道、恢复期康复随访、复发风险预警三级联动",
    stats: [
      ["高危预警", "193", "复发风险高或康复进展异常", "red"],
      ["本周待随访", "418", "含功能评估和用药依从性核查", "amber"],
      ["规范管理率", "65.8%", "较上月提升 5.3 个百分点", "green"],
    ],
    patients: [
      ["周德明", "脑卒中康复期", "中危", "城北村卫生室", "康复评估待录入", "amber"],
      ["许月华", "脑梗死恢复期", "高危", "城东镇", "血压管理预警", "red"],
      ["韩志远", "出血性脑卒中", "中危", "青山镇", "3 天后复诊", "amber"],
      ["沈美玲", "脑卒中后遗症", "稳定", "西河社区", "本周已完成", "green"],
      ["钱宝国", "短暂性脑缺血", "高危", "康宁养老中心", "今日待随访", "red"],
    ],
    loop: [
      ["筛", "卒中高危筛查", "FAST 评估、颈动脉超声、房颤筛查结果统一建档。", "blue", "入口", "chronic.register"],
      ["分", "康复功能分层", "神经专科根据 mRS 评分给出居家/基层/住院康复方案。", "teal", "规则", "chronic.stratify"],
      ["访", "康复与用药随访", "家庭医生按任务池完成功能锻炼记录、抗栓用药核查。", "green", "执行", "chronic.followup"],
      ["警", "复发预警上转", "血压骤升、新发神经症状或用药中断时自动触发绿色通道。", "red", "闭环", "chronic.escalate"],
    ],
  },
  copd: {
    title: "慢阻肺",
    subtitle: "肺功能分级管理、急性加重预防、吸入用药全程随访",
    stats: [
      ["高危预警", "312", "血氧下降或急性加重风险预警", "red"],
      ["本周待随访", "956", "含肺功能复查和吸入技术核查", "amber"],
      ["规范管理率", "69.1%", "较上月提升 3.8 个百分点", "green"],
    ],
    patients: [
      ["孙桂芝", "慢阻肺", "高危", "康宁养老中心", "血氧异常预警", "red"],
      ["胡大明", "慢阻肺急性加重", "高危", "城东镇", "今日待随访", "red"],
      ["朱丽萍", "慢阻肺稳定期", "中危", "青山镇", "肺功能复查待安排", "amber"],
      ["石贵宝", "慢阻肺合并肺心病", "高危", "西河社区", "血氧监测预警", "red"],
      ["金翠花", "慢阻肺康复期", "稳定", "城北村卫生室", "本周已完成", "green"],
    ],
    loop: [
      ["筛", "肺功能筛查建档", "基层肺功能仪检测结果统一录入，GOLD 分级自动标注。", "blue", "入口", "chronic.register"],
      ["分", "急性加重风险分层", "专科根据 FEV1、血氧、既往急性加重次数给出分层方案。", "teal", "规则", "chronic.stratify"],
      ["访", "吸入用药随访", "家庭医生核查吸入技术、用药依从性和症状记录。", "green", "执行", "chronic.followup"],
      ["警", "急性加重预警上转", "血氧低于阈值或呼吸困难评分异常时触发急诊绿色通道。", "red", "闭环", "chronic.escalate"],
    ],
  },
  ckd: {
    title: "慢性肾病",
    subtitle: "肾功能分期管理、蛋白尿监测、延缓进展与替代治疗准备",
    stats: [
      ["高危预警", "428", "eGFR 快速下降或蛋白尿持续加重", "red"],
      ["本周待随访", "1,134", "含肌酐复查、血压达标和用药核查", "amber"],
      ["规范管理率", "63.7%", "较上月提升 2.9 个百分点", "green"],
    ],
    patients: [
      ["刘明远", "高血压合并肾病 CKD 3b 期", "高危", "城北村卫生室", "肌酐复查待安排", "red"],
      ["林建国", "糖尿病肾病 CKD 4 期", "高危", "康宁养老中心", "今日待随访", "red"],
      ["方玉梅", "慢性肾炎 CKD 2 期", "中危", "青山镇", "尿蛋白监测待录入", "amber"],
      ["郑洪波", "高尿酸肾病 CKD 3a 期", "中危", "城东镇", "3 天后复诊", "amber"],
      ["秦晓燕", "慢性肾病稳定期", "稳定", "西河社区", "本周已完成", "green"],
    ],
    loop: [
      ["筛", "肾功能筛查建档", "血肌酐、尿蛋白、eGFR 检测结果统一录入，CKD 分期自动标注。", "blue", "入口", "chronic.register"],
      ["分", "CKD 分期风险分层", "肾内科根据 eGFR 和蛋白尿分级（G1-G5/A1-A3）给出管理方案。", "teal", "规则", "chronic.stratify"],
      ["访", "延缓进展随访", "家庭医生按任务池完成血压达标核查、低蛋白饮食指导和用药依从性。", "green", "执行", "chronic.followup"],
      ["警", "肾功能恶化上转", "eGFR 快速下降或 CKD 4 期进入替代治疗准备时触发肾内科专科转诊。", "red", "闭环", "chronic.escalate"],
    ],
  },
};

function renderChronic() {
  const d = chronicDiseaseData[state.disease] || chronicDiseaseData.hypertension;

  return `
    <div class="section-grid">
      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>${d.title}共管人群</h2>
            <p>${d.subtitle}</p>
          </div>
        </div>
        <div class="panel-body">
          <div class="disease-tabs">
            ${renderDiseaseTab("hypertension", "高血压")}
            ${renderDiseaseTab("diabetes", "糖尿病")}
            ${renderDiseaseTab("stroke", "脑卒中")}
            ${renderDiseaseTab("copd", "慢阻肺")}
            ${renderDiseaseTab("ckd", "慢性肾病")}
          </div>

          <div class="risk-board">
            ${d.stats.map(([label, value, desc, tone]) => renderRisk(label, value, desc, tone)).join("")}
          </div>

          <table class="table" style="margin-top: 16px;">
            <thead>
              <tr>
                <th>患者</th>
                <th>疾病标签</th>
                <th>风险</th>
                <th>责任机构</th>
                <th>当前任务</th>
              </tr>
            </thead>
            <tbody>
              ${d.patients.map(([name, disease, risk, org, task, tone]) => `
                <tr ${detailAttrs("慢病患者", `${name} · ${disease}`, `${org}，${risk}，${task}`, "chronic")}>
                  <td><strong>${name}</strong></td>
                  <td>${disease}</td>
                  <td><span class="badge ${tone}">${risk}</span></td>
                  <td>${org}</td>
                  <td>${task}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </section>

      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>${d.title}共管闭环</h2>
            <p>筛查、建档、分层、干预、随访、预警</p>
          </div>
        </div>
        <div class="panel-body task-list">
          ${d.loop.map(([icon, title, desc, tone, tag, detailId]) => `
            <article class="task-item" ${detailAttrs("慢病管理", title, desc, "chronic", detailId)}>
              <b class="task-icon tone-${tone}">${icon}</b>
              <div class="task-main">
                <strong>${title}</strong>
                <span>${desc}</span>
              </div>
              <span class="badge ${tone}">${tag}</span>
            </article>
          `).join("")}
        </div>
      </section>
    </div>
  `;
}

function renderDoctors() {
  return `
    <div class="dashboard-grid">
      ${renderMetric({ label: "今日远程会诊", value: "42", detail: "县医院专家已响应 35 单", tone: "teal", icon: "会" })}
      ${renderMetric({ label: "专科下沉排班", value: "18", detail: "覆盖 9 家乡镇卫生院", tone: "green", icon: "下" })}
      ${renderMetric({ label: "基层病例讨论", value: "26", detail: "其中 11 例转入绿色通道", tone: "amber", icon: "例" })}
      ${renderMetric({ label: "培训质控完成率", value: "84%", detail: "心内、内分泌、神内优先", tone: "blue", icon: "训" })}
    </div>

    <div class="section-grid">
      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>远程会诊与病例协作</h2>
            <p>基层医生发起，县医院专家接收，必要时直接转诊</p>
          </div>
          <button class="secondary-button" type="button" data-go-page="referrals">查看转诊</button>
        </div>
        <div class="panel-body doctor-grid">
          ${consultationQueue.map(([dept, patient, desc, owner, status], idx) => `
            <article class="doctor-row" ${detailAttrs("医生协作", `${dept} · ${patient}`, `${desc}，${owner}，${status}`)}>
              <div>
                <strong>${dept} · ${patient}</strong>
                <span>${desc}</span>
              </div>
              <footer>
                <span>${owner}</span>
                <span class="badge ${status === "已催办" || status === "已接诊" ? "green" : "blue"}">${status}</span>
                ${status !== "已催办" ? `<button class="ghost-button" type="button" style="padding:2px 8px;font-size:12px;margin-left:4px;" data-action="urge-consult" data-idx="${idx}">催办</button>` : ""}
              </footer>
            </article>
          `).join("")}
        </div>
      </section>

      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>专科下沉计划</h2>
            <p>专家坐诊、联合查房、带教培训、质控指导</p>
          </div>
          <button class="ghost-button" type="button" data-action="add-schedule">＋ 新增排班</button>
        </div>
        <div class="panel-body schedule-list">
          ${renderSchedule("周一上午", "心内科", "城东镇卫生院 · 高血压与胸痛门诊")}
          ${renderSchedule("周二下午", "内分泌科", "西河社区 · 糖尿病足筛查")}
          ${renderSchedule("周三上午", "神经内科", "青山镇中心卫生院 · 卒中随访")}
          ${renderSchedule("周五下午", "呼吸科", "康宁养老中心 · 慢阻肺照护查房")}
        </div>
      </section>
    </div>
  `;
}

function renderPatient() {
  return `
    <div class="section-grid">
      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>居民统一服务小程序</h2>
            <p>挂号、转诊进度、报告查询、签约、慢病提醒统一入口</p>
          </div>
        </div>
        <div class="panel-body">
          <div class="phone-shell">
            <div class="phone-screen">
              <div class="phone-top">
                <strong>县域健康服务</strong>
                <p>刘桂英，您的心内科绿色通道已接收，请 10:20 前到县人民医院急诊胸痛中心。</p>
              </div>
              <div class="phone-content">
                <div class="quick-grid">
                  ${renderQuick("转诊进度", "已接收")}
                  ${renderQuick("检查报告", "12 份")}
                  ${renderQuick("家庭医生", "城东团队")}
                  ${renderQuick("慢病随访", "今日待确认")}
                </div>
                <div class="phone-card" style="margin-top: 12px;">
                  <strong>本次转诊</strong>
                  <span>城东镇卫生院发起，县人民医院心内科接收。携带医保电子凭证，到院后直接进入转诊窗口。</span>
                </div>
                <div class="phone-card">
                  <strong>院后服务</strong>
                  <span>出院后随访任务将自动回到城东镇卫生院，由家庭医生继续管理用药和复诊。</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>患者侧服务闭环</h2>
            <p>县医院、基层机构、家庭医生和患者家属信息同步</p>
          </div>
        </div>
        <div class="panel-body task-list">
          ${renderTask("约", "统一预约挂号", "县医院专家号、基层门诊号、专科下沉门诊统一展示。", "blue", "入口")}
          ${renderTask("转", "转诊进度可查", "患者和家属实时看到申请、接收、预约、到院、回基层状态。", "amber", "透明")}
          ${renderTask("签", "家庭医生签约", "签约团队可直接联动县医院专科资源。", "green", "服务")}
          ${renderTask("访", "院后随访提醒", "用药、复诊、康复、慢病指标异常自动提醒。", "teal", "连续")}
          ${renderTask("评", "满意度评价", "转诊、接诊、基层随访均可评价并进入绩效。", "violet", "反馈")}
        </div>
      </section>
    </div>
  `;
}

function renderData() {
  const missingPatients = patientDatabase.filter((item) => item.missing.length > 0);
  const authorizedPatients = patientDatabase.filter((item) => item.consent === "已授权" || item.consent === "家属已授权");
  const countyDoctors = doctorDatabase.filter((item) => item.institution === "县人民医院");
  return `
    <div class="dashboard-grid">
      ${renderMetric({ label: "患者数据库", value: `${patientDatabase.length} 人`, detail: `已授权 ${authorizedPatients.length} 人，资料缺项 ${missingPatients.length} 人`, tone: "blue", icon: "患", page: "data", detailId: "database.patientIndex" })}
      ${renderMetric({ label: "医生数据库", value: `${doctorDatabase.length} 人`, detail: `县医院 ${countyDoctors.length} 人，基层与机构 ${doctorDatabase.length - countyDoctors.length} 人`, tone: "green", icon: "医", page: "data", detailId: "database.doctorDirectory" })}
      ${renderMetric({ label: "检查检验互认", value: "69%", detail: "影像、心电、检验优先", tone: "teal", icon: "互", page: "data", detailId: "database.quality" })}
      ${renderMetric({ label: "数据质量预警", value: missingPatients.length, detail: "资料缺项、授权待确认、诊断编码缺失", tone: "amber", icon: "质", page: "data", detailId: "database.quality" })}
    </div>

    <div class="section-grid">
      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>患者主索引数据库</h2>
            <p>模拟 40 名患者，覆盖转诊、会诊、慢病、院后随访和养老照护场景</p>
          </div>
          <div class="detail-actions">
            <span class="badge blue">${patientDatabase.length} 人</span>
            <button class="secondary-button" type="button" data-action="missing-ai-open"
              style="background:color-mix(in srgb,var(--brand) 8%,var(--panel));border-color:color-mix(in srgb,var(--brand) 25%,transparent);color:var(--brand);"
              ${state.missingAIOpen ? "disabled" : ""}>
              🤖 AI 推断缺项来源
            </button>
            ${state.settings.managerCanExport ? `<button class="ghost-button" type="button" data-action="export-missing">导出缺项清单</button>` : ""}
          </div>
        </div>
        ${renderMissingSourcePanel()}
        <div class="panel-body">
          <table class="table database-table">
            <thead>
              <tr>
                <th>患者</th>
                <th>来源机构</th>
                <th>病种 / 路径</th>
                <th>风险</th>
                <th>责任医生</th>
                <th>状态</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              ${patientDatabase.slice(0, 14).map((patient) => {
                const tone = getToneByRisk(patient.risk, patient.priority);
                const hasMissing = patient.missing && patient.missing.length > 0;
                return `
                  <tr ${detailAttrs("患者主索引", `${patient.name} · ${patient.disease}`, `${patient.institution}，${patient.status}，${patient.nextAction}`, "data", `patient.${patient.id}`)}>
                    <td><strong>${patient.name}</strong><br><span>${patient.sex} · ${patient.age} 岁</span></td>
                    <td>${patient.institution}<br><span>${patient.sourceLevel}</span></td>
                    <td>${patient.disease}<br><span>${patient.referralType}</span></td>
                    <td><span class="badge ${tone}">${patient.risk}</span></td>
                    <td>${patient.familyDoctor}<br><span>${patient.countyDoctor}</span></td>
                    <td><span class="badge ${getToneByStatus(patient.status)}">${patient.status}</span></td>
                    <td>${hasMissing
                      ? `<button class="ghost-button" type="button" style="padding:2px 8px;font-size:12px;color:var(--red,#e53e3e);"
                           data-action="remind-missing" data-patient="${patient.name}">补录</button>`
                      : `<span style="opacity:0.4;font-size:12px;">—</span>`}
                    </td>
                  </tr>`;
              }).join("")}
            </tbody>
          </table>
        </div>
      </section>

      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>医生机构目录数据库</h2>
            <p>模拟 20 名医生与协同角色，用于转诊接收、会诊、随访、质控和结算审核</p>
          </div>
          <span class="badge green">${doctorDatabase.length} 人</span>
        </div>
        <div class="panel-body">
          <table class="table database-table">
            <thead>
              <tr>
                <th>医生</th>
                <th>机构科室</th>
                <th>专长</th>
                <th>今日任务</th>
                <th>质控</th>
                <th>状态</th>
              </tr>
            </thead>
            <tbody>
              ${doctorDatabase.slice(0, 12).map(renderDoctorDatabaseRow).join("")}
            </tbody>
          </table>
        </div>
      </section>
    </div>

    <div class="section-grid">
      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>系统接入与数据健康度</h2>
            <p>不要求基层换系统，通过数据中台统一连接</p>
          </div>
        </div>
        <div class="panel-body data-stack">
          ${integrations.map(([name, scope, health, status], idx) => `
            <article class="data-row" ${detailAttrs("数据接入", name, `${scope}，健康度 ${health}%，${status}`)}>
              <div>
                <strong>${name}</strong>
                <span>${scope}</span>
              </div>
              <div class="health-bar" aria-label="数据健康度 ${health}%">
                <i style="width:${health}%"></i>
              </div>
              <span class="badge ${Number(health) > 90 ? "green" : Number(health) > 78 ? "amber" : "red"}">${status}</span>
              ${Number(health) < 90
                ? `<button class="ghost-button" type="button" style="padding:2px 8px;font-size:12px;margin-left:4px;"
                     data-action="sync-integration" data-idx="${idx}">触发同步</button>`
                : `<span style="opacity:0;font-size:12px;">—</span>`}
            </article>
          `).join("")}
        </div>
      </section>

      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>县域数据中台</h2>
            <p>统一主索引、目录、交换、质控和运营分析</p>
          </div>
        </div>
        <div class="panel-body task-list">
          <article class="task-item" ${detailAttrs("数据能力", "患者主索引", "统一居民身份、就诊卡、医保凭证、联系电话等多源标识。", "data", "database.patientIndex")}>
            <b class="task-icon tone-blue">主</b>
            <div class="task-main"><strong>患者主索引</strong><span>统一居民身份、就诊卡、医保凭证、联系电话等多源标识。</span></div>
            <span class="badge blue">MPI</span>
          </article>
          <article class="task-item" ${detailAttrs("数据能力", "机构医生目录", "统一管理机构、科室、医生、服务能力和转诊权限。", "data", "database.doctorDirectory")}>
            <b class="task-icon tone-green">目</b>
            <div class="task-main"><strong>机构医生目录</strong><span>统一管理机构、科室、医生、服务能力和转诊权限。</span></div>
            <span class="badge green">目录</span>
          </article>
          <article class="task-item" ${detailAttrs("数据能力", "数据交换平台", "对接 HIS、EMR、LIS、PACS、医保、公卫、养老照护系统。", "data", "database.quality")}>
            <b class="task-icon tone-teal">交</b>
            <div class="task-main"><strong>数据交换平台</strong><span>对接 HIS、EMR、LIS、PACS、医保、公卫、养老照护系统。</span></div>
            <span class="badge teal">接口</span>
          </article>
          <article class="task-item" ${detailAttrs("数据能力", "质量与审计", "数据完整性、时效性、异常访问和转诊闭环审计。", "data", "database.quality")}>
            <b class="task-icon tone-amber">控</b>
            <div class="task-main"><strong>质量与审计</strong><span>数据完整性、时效性、异常访问和转诊闭环审计。</span></div>
            <span class="badge amber">合规</span>
          </article>
        </div>
      </section>
    </div>
  `;
}

function renderEmergency() {
  const demoStep = state.emergencyDemoStep;
  const eSteps = [
    ["基层快速识别", "乡镇卫生院、村医、养老机构按胸痛、卒中、创伤等标准触发预警。"],
    ["急救中心派车", "同步患者定位、生命体征、初步诊断和转运目的地。"],
    ["县医院预接诊", "急诊、专科、检查、床位提前准备，缩短到院等待。"],
    ["康复回基层",   "出院方案自动回传，基层承接康复和慢病随访。"],
  ];
  return `
    <section class="panel">
      <div class="panel-header">
        <div class="panel-title">
          <h2>急救协同流程</h2>
          <p>${demoStep !== null ? `演练中 — 当前步骤：${demoStep + 1} / ${eSteps.length}` : "基层识别、急救转运、县医院接诊、院后康复一体联动"}</p>
        </div>
        <div class="detail-actions">
          ${demoStep === null
            ? `<button class="secondary-button" type="button" data-action="emergency-start">▶ 开始演练</button>`
            : `<button class="primary-button" type="button" data-action="emergency-next" ${demoStep >= eSteps.length ? "disabled" : ""}>下一步 →</button>
               <button class="ghost-button" type="button" data-action="emergency-reset">结束演练</button>`
          }
        </div>
      </div>
      <div class="panel-body emergency-board">
        ${eSteps.map(([title, desc], i) => {
          const isDone    = demoStep !== null && i < demoStep;
          const isCurrent = demoStep !== null && i === demoStep;
          const style = demoStep === null ? "" : !isDone && !isCurrent ? "opacity:0.4;" : isCurrent ? "outline:2px solid var(--accent,#3b82f6);outline-offset:2px;" : "";
          const badge = isDone ? "badge green" : isCurrent ? "badge amber" : "";
          const num   = isDone ? "✓" : String(i + 1);
          return `
            <article class="emergency-step" style="${style}" ${detailAttrs("急救流程", title, desc, "emergency")}>
              <b class="${badge}">${num}</b>
              <strong>${title}</strong>
              <span>${desc}</span>
            </article>`;
        }).join("")}
      </div>
    </section>

    <div class="section-grid equal">
      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>院后随访任务池</h2>
            <p>出院即生成任务，责任到机构、医生和时间</p>
          </div>
        </div>
        <div class="panel-body split-list">
          ${renderFollow("今日出院", "64 人，已自动分配基层随访任务。", "blue")}
          ${renderFollow("48 小时随访", "待完成 17 人，其中高危 5 人。", "amber")}
          ${renderFollow("康复下转", "脑卒中、骨科术后患者 13 人。", "green")}
          ${renderFollow("异常回流", "3 人触发复诊提醒，待县医院确认。", "red")}
        </div>
      </section>

      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>重点病种绿色通道</h2>
            <p>胸痛、卒中、创伤、孕产妇、儿童急症优先建设</p>
          </div>
        </div>
        <div class="panel-body chart-grid">
          ${renderBar("胸痛中心", 92)}
          ${renderBar("卒中中心", 89)}
          ${renderBar("创伤中心", 81)}
          ${renderBar("危重孕产妇", 76)}
          ${renderBar("儿童急症", 73)}
        </div>
      </section>
    </div>
  `;
}

function renderPerformance() {
  return `
    <div class="dashboard-grid">
      ${renderMetric({ label: "医保费用增速", value: "3.9%", detail: "低于目标线 1.6 个百分点", tone: "green", icon: "费" })}
      ${renderMetric({ label: "重复检查下降", value: "21%", detail: "影像、心电贡献最大", tone: "teal", icon: "降" })}
      ${renderMetric({ label: "规范转诊绩效", value: "83 单", detail: "完成闭环后自动计入", tone: "blue", icon: "绩" })}
      ${renderMetric({ label: "患者满意度", value: "94.2", detail: "转诊和随访评价入库", tone: "amber", icon: "满" })}
    </div>

    <section class="panel" style="margin-top: 16px;">
      <div class="panel-header">
        <div class="panel-title">
          <h2>机构绩效台账</h2>
          <p>把转诊、随访、慢病、费用、满意度纳入同一套评价</p>
        </div>
        <div class="detail-actions">
          ${state.settings.managerCanExport ? `<button class="secondary-button" type="button" data-action="export-ledger">导出台账</button>` : ""}
          <button class="ghost-button" type="button" data-action="generate-report">生成季报</button>
        </div>
      </div>
      <div class="panel-body">
        <div class="institution-row header" style="grid-template-columns:1.5fr repeat(5,1fr) auto;">
          <span>机构</span>
          <span>规范上转</span>
          <span>接诊闭环</span>
          <span>慢病管理</span>
          <span>满意度</span>
          <span>总分</span>
          <span>操作</span>
        </div>
        ${institutionScores.map(([name, transfer, closed, chronic, satisfaction, score]) => {
          const supervised = state.supervisedInstitutions.includes(name);
          const lowScore = Number(score) < 85;
          return `
          <div class="institution-row" style="grid-template-columns:1.5fr repeat(5,1fr) auto;"
               ${detailAttrs("机构绩效", name, `规范上转 ${transfer}，闭环 ${closed}，慢病 ${chronic}，总分 ${score}`, "performance")}>
            <div>
              <strong>${name}</strong>
              <span>医共体成员单位${supervised ? " · 已督办" : ""}</span>
            </div>
            <span>${transfer}</span>
            <span>${closed}</span>
            <span>${chronic}</span>
            <span>${satisfaction}</span>
            <span class="score ${lowScore ? "badge red" : ""}">${state.settings.showScore ? score : "—"}</span>
            <span>
              <button class="ghost-button" type="button"
                style="padding:2px 8px;font-size:12px;${supervised ? "opacity:0.5;" : ""}"
                data-action="supervise-institution"
                data-name="${name}"
                ${supervised ? "disabled" : ""}
              >${supervised ? "已督办" : "督办"}</button>
            </span>
          </div>`;
        }).join("")}
      </div>
    </section>

    <div class="section-grid equal">
      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>医保协同方向</h2>
            <p>总额预算、结余留用、合理超支分担</p>
          </div>
        </div>
        <div class="panel-body task-list">
          ${renderTask("控", "不合理外转管控", "按病种、机构、医生、患者流向识别异常外转。", "green", "控费")}
          ${renderTask("省", "重复检查治理", "优先推动影像、心电、检验互认和临床质控。", "teal", "互认")}
          ${renderTask("绩", "绩效分配依据", "规范转诊、随访闭环和慢病质量进入绩效分配。", "blue", "分配")}
        </div>
      </section>

      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>领导驾驶舱指标</h2>
            <p>项目成效用可量化指标持续呈现</p>
          </div>
        </div>
        <div class="panel-body chart-grid">
          ${renderBar("县域内就诊率", 88)}
          ${renderBar("县外转诊下降", 74)}
          ${renderBar("基层服务能力", 69)}
          ${renderBar("医保控费效果", 64)}
          ${renderBar("群众满意度", 94)}
        </div>
      </section>
    </div>
  `;
}

function renderCollaboration() {
  return `
    <div class="role-brief">
      <article class="role-brief-card">
        <span>合规口径</span>
        <strong>补偿真实医疗协作服务，不按患者人头或消费金额提成</strong>
        <p>对病情评估、资料整理、会诊协作、转诊衔接、院后随访等服务进行审核结算，所有记录留痕可追溯。</p>
      </article>
      <article class="role-brief-card">
        <span>本月结算概览</span>
        <strong>待审核 18 笔 · 通过率 92.6% · 拟结算 38600 元</strong>
        <p>异常转诊、资料缺项、知情确认缺失、患者投诉会自动进入风险预警。</p>
      </article>
    </div>

    <div class="dashboard-grid">
      ${renderMetric({ label: "协作服务申请", value: "186", detail: "本月累计提交", tone: "blue", icon: "服" })}
      ${renderMetric({ label: "待审核", value: "18", detail: "需运营中心复核", tone: "amber", icon: "审" })}
      ${renderMetric({ label: "合规通过率", value: "92.6%", detail: "较上月提升 4.8%", tone: "green", icon: "合" })}
      ${renderMetric({ label: "异常预警", value: "4", detail: "知情缺失、资料缺项等", tone: "red", icon: "警" })}
    </div>

    <section class="panel" style="margin-top:16px;">
      <div class="panel-header">
        <div class="panel-title">
          <h2>协作补偿合规闭环</h2>
          <p>${state.selectedSettlementId
            ? (() => {
                const row = settlementRows.find((r) => r[0] === state.selectedSettlementId);
                return row ? `当前记录：${row[0]} · ${row[1]} · <span class="badge ${row[6]}">${row[4]}</span>` : "服务发生、规则校验、患者知情、县医院确认、质量审核、合规结算一条线闭环";
              })()
            : "服务发生、规则校验、患者知情、县医院确认、质量审核、合规结算一条线闭环"
          }</p>
        </div>
        ${state.selectedSettlementId ? `<button class="ghost-button" type="button" data-action="settle-clear">收起</button>` : ""}
      </div>
      <div class="panel-body compliance-flow wide">
        ${(() => {
          const row = state.selectedSettlementId
            ? settlementRows.find((r) => r[0] === state.selectedSettlementId)
            : null;
          if (!row) {
            return complianceSteps.map(([title, desc], i) => renderFlowStep(String(i + 1), title, desc)).join("");
          }
          return complianceSteps.map(([title, desc], i) => renderComplianceStepLive(i, title, desc, row[4])).join("");
        })()}
      </div>
    </section>

    <div class="section-grid">
      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>协作服务项目配置</h2>
            <p>按真实服务动作和质量结果补偿，不设置患者介绍费</p>
          </div>
        </div>
        <div class="panel-body">
          <table class="table">
            <thead>
              <tr>
                <th>服务项目</th>
                <th>服务内容</th>
                <th>参考标准</th>
                <th>审核条件</th>
              </tr>
            </thead>
            <tbody>
              ${serviceCatalog.map(([name, content, standard, audit]) => `
                <tr ${detailAttrs("服务项目", name, `${content}，${standard}，${audit}`, "collaboration")}>
                  <td><strong>${name}</strong></td>
                  <td>${content}</td>
                  <td>${standard}</td>
                  <td>${audit}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </section>

      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>审核证据链</h2>
            <p>每笔补偿都要能说清楚依据、过程和结果</p>
          </div>
        </div>
        <div class="panel-body evidence-list">
          ${auditEvidence.map(([name, desc, status]) => `
            <article class="evidence-row" ${detailAttrs("审核证据", name, `${desc}，${status}`, "collaboration")}>
              <div>
                <strong>${name}</strong>
                <span>${desc}</span>
              </div>
              <b>${status}</b>
            </article>
          `).join("")}
        </div>
      </section>
    </div>

    <section class="panel" style="margin-top:16px;">
      <div class="panel-header">
        <div class="panel-title">
          <h2>风险预警</h2>
          <p>避免诱导转诊、异常集中、资料不完整和患者未知情</p>
        </div>
      </div>
      <div class="panel-body split-list">
        ${riskWarnings.map(([title, desc, tone]) => renderFollow(title, desc, tone)).join("")}
      </div>
    </section>

    <section class="panel" style="margin-top:16px;">
      <div class="panel-header">
        <div class="panel-title">
          <h2>协作服务结算台账</h2>
          <p>审核依据包括服务记录、转诊指征、患者知情、闭环结果和审计留痕</p>
        </div>
        <div class="detail-actions">
          <button class="primary-button"   type="button" data-action="approve-service">批量通过</button>
          <button class="ghost-button"     type="button" data-action="reject-service">退回补充</button>
          ${state.settings.managerCanExport
            ? `<button class="secondary-button" type="button" data-action="export-ledger">导出台账</button>`
            : ""}
        </div>
      </div>
      <div class="panel-body">
        <div class="institution-row header service-ledger-header" style="grid-template-columns:1fr 1.5fr 1.2fr 0.8fr 0.8fr 0.6fr auto;">
          <span>单号</span>
          <span>协作医生 / 机构</span>
          <span>服务项目</span>
          <span>关联患者</span>
          <span>状态</span>
          <span>金额</span>
          <span>操作</span>
        </div>
        ${settlementRows.map(([id, doctor, service, patient, status, amount, tone]) => `
          <div class="institution-row service-ledger-row ${state.selectedSettlementId === id ? "active" : ""}"
               style="grid-template-columns:1fr 1.5fr 1.2fr 0.8fr 0.8fr 0.6fr auto;"
               ${detailAttrs("结算单", `${id} · ${service}`, `${doctor}，关联患者 ${patient}，${status}，${amount}`, "collaboration")}>
            <strong>${id}</strong>
            <span>${doctor}</span>
            <span>${service}</span>
            <span>${patient}</span>
            <span class="badge ${tone}">${status}</span>
            <span class="score">${state.settings.showAmount ? amount : "***"}</span>
            <span class="detail-actions" style="gap:4px;">
              <button class="ghost-button" type="button" style="padding:2px 8px;font-size:12px;"
                data-action="settle-select" data-id="${id}">
                ${state.selectedSettlementId === id ? "收起" : "进度"}
              </button>
              ${status === "待审核" ? `
                <button class="secondary-button" type="button" style="padding:2px 8px;font-size:12px;"
                  data-action="approve-row" data-id="${id}">通过</button>
                <button class="ghost-button" type="button" style="padding:2px 8px;font-size:12px;color:var(--red,#e53e3e);"
                  data-action="reject-row" data-id="${id}">退回</button>
              ` : ""}
            </span>
          </div>
        `).join("")}
      </div>
    </section>

    <div class="section-grid equal">
      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>审核规则</h2>
            <p>每一笔补偿都要回答“服务是否真实、转诊是否合理、患者是否知情”</p>
          </div>
        </div>
        <div class="panel-body task-list">
          ${renderTask("真", "真实服务记录", "必须有病历摘要、检查资料、会诊意见或随访结果。", "blue", "必需")}
          ${renderTask("合", "符合转诊指征", "系统校验病种目录、风险分层和接诊结果。", "green", "必需")}
          ${renderTask("知", "患者知情自愿", "患者端确认转诊原因、可选机构和资料共享授权。", "teal", "必需")}
          ${renderTask("审", "全流程留痕", "提交、审核、退回、结算、异常预警全链路可追溯。", "amber", "审计")}
        </div>
      </section>

      <section class="panel">
        <div class="panel-header">
          <div class="panel-title">
            <h2>禁止项</h2>
            <p>把合规红线写进系统规则，避免把协作补偿变成转诊回扣</p>
          </div>
        </div>
        <div class="panel-body task-list">
          ${renderTask("禁", "不按患者人头结算", "不能设置转来一名患者给固定介绍费。", "red", "禁止")}
          ${renderTask("禁", "不按消费金额提成", "不能按住院费、检查费、手术费、药品金额分成。", "red", "禁止")}
          ${renderTask("禁", "不鼓励诱导转诊", "患者必须基于病情需要和知情自愿选择。", "red", "禁止")}
        </div>
      </section>
    </div>
  `;
}

function renderMetric(item) {
  const attrs = item.detailId
    ? detailAttrs("指标", item.label, item.detail, item.page || "", item.detailId)
    : item.page
      ? `data-go-page="${escapeAttr(item.page)}" role="button" tabindex="0"`
      : "";
  return `
    <article class="metric-card" ${attrs}>
      <div class="metric-head">
        <span>${item.label}</span>
        <b class="metric-icon tone-${item.tone}">${item.icon}</b>
      </div>
      <strong>${item.value}</strong>
      <p>${item.detail}</p>
    </article>
  `;
}

function renderLeaderKpi(name, value, target, trend, owner, action, tone) {
  const actualMatch = value.match(/([\d.]+)%/);
  const targetMatch = target.match(/([\d.]+)%/);
  let progress = 0.85;
  if (actualMatch && targetMatch) {
    const actual = parseFloat(actualMatch[1]);
    const targetVal = parseFloat(targetMatch[1]);
    const lowerBetter = target.includes("≤");
    progress = Math.min(1, lowerBetter ? targetVal / actual : actual / targetVal);
  }
  const r = 48;
  const circ = +(2 * Math.PI * r).toFixed(1);
  const offset = +(circ * (1 - progress)).toFixed(1);
  const isDown = trend.includes("-");
  const trendArrow = isDown ? "▼" : "▲";
  const trendClass = isDown ? "down" : "up";
  const targetDisplay = target.replace("年度", "");
  return `
    <article class="leader-kpi-card" ${detailAttrs("领导指标", name, `${value}，${target}，责任部门：${owner}，动作：${action}`)}>
      <div class="kpi-ring-wrap tone-${tone}">
        <svg width="120" height="120" viewBox="0 0 120 120" aria-hidden="true">
          <circle cx="60" cy="60" r="${r}" fill="none" stroke="currentColor" stroke-width="9" stroke-opacity="0.18"/>
          <circle cx="60" cy="60" r="${r}" fill="none" stroke="currentColor" stroke-width="9"
            stroke-dasharray="${circ}" stroke-dashoffset="${offset}"
            stroke-linecap="round" transform="rotate(-90 60 60)"/>
        </svg>
        <div class="kpi-ring-value">${value}</div>
      </div>
      <div class="kpi-card-name">${name}</div>
      <div class="kpi-card-target">${targetDisplay}</div>
      <div class="kpi-card-trend ${trendClass}">${trendArrow} ${trend}</div>
    </article>
  `;
}

function renderLeaderAction(title, desc, owner, deadline, tone) {
  return `
    <article class="task-item" ${detailAttrs("督办任务", title, `${desc} 责任：${owner}，时限：${deadline}`)}>
      <b class="task-icon tone-${tone}">督</b>
      <div class="task-main">
        <strong>${title}</strong>
        <span>${desc}</span>
        <span style="margin-top:4px;">责任：${owner} · 时限：${deadline}</span>
      </div>
      <span class="badge ${tone}">督办</span>
    </article>
  `;
}

function renderDoctorTodo(time, patient, disease, task, tone) {
  return `
    <article class="task-item" ${detailAttrs("医生待办", `${patient} · ${disease}`, `${time}，${task}`)}>
      <b class="task-icon tone-${tone}">${time.slice(0, 2)}</b>
      <div class="task-main">
        <strong>${patient} · ${disease}</strong>
        <span>${time} · ${task}</span>
      </div>
      <span class="badge ${tone}">处理</span>
    </article>
  `;
}

function renderReportRow(name, org, time, status) {
  const tone = status === "待审核" ? "amber" : status === "已互认" ? "green" : "blue";
  return `
    <article class="data-row" ${detailAttrs("报告", name, `${org}，${time}，${status}`, "patientReports")}>
      <div>
        <strong>${name}</strong>
        <span>${org}</span>
      </div>
      <span>${time}</span>
      <span class="badge ${tone}">${status}</span>
    </article>
  `;
}

function renderRuleCard(rule) {
  return `
    <article class="rule-card" ${detailAttrs("病种规则", rule.disease, `${rule.category}，${rule.channel}，${rule.materials}`)}>
      <header>
        <div>
          <span>${rule.department}</span>
          <strong>${rule.disease}</strong>
        </div>
        <b class="badge ${rule.tone}">${rule.category}</b>
      </header>
      <dl>
        <dt>转诊路径</dt>
        <dd>${rule.channel}</dd>
        <dt>触发条件</dt>
        <dd>${rule.trigger}</dd>
        <dt>必带资料</dt>
        <dd>${rule.materials}</dd>
        <dt>协作服务</dt>
        <dd>${rule.compensation}</dd>
      </dl>
    </article>
  `;
}

function renderDiseaseCatalogCard(item) {
  return `
    <article class="disease-catalog-card" ${detailAttrs("转诊病种目录", item.disease, `${item.layer}，${item.owner}，${item.performance}`, "diseaseCatalog", `catalog.${item.code}`)}>
      <header>
        <div>
          <span>${item.code} · ${item.layer}</span>
          <strong>${item.disease}</strong>
        </div>
        <div class="status-stack">
          <b class="badge ${item.tone}">${item.level}</b>
          <b class="badge ${item.status === "启用" ? "green" : item.status === "试运行" ? "amber" : "red"}">${item.status}</b>
        </div>
      </header>
      <div class="catalog-rule-grid">
        <div>
          <span>上转规则</span>
          <strong>${item.upward}</strong>
        </div>
        <div>
          <span>留基层规则</span>
          <strong>${item.stay}</strong>
        </div>
        <div>
          <span>下转规则</span>
          <strong>${item.downward}</strong>
        </div>
      </div>
      <div class="material-chips">
        ${item.materials.map((material) => `<span>${material}</span>`).join("")}
      </div>
      <footer>
        <div>
          <span>绩效约束</span>
          <strong>${item.performance}</strong>
        </div>
        <div>
          <span>责任科室</span>
          <strong>${item.owner}</strong>
        </div>
        <button
          class="${item.status === "启用" ? "ghost-button" : "secondary-button"}"
          type="button"
          data-action="toggle-catalog"
          data-code="${item.code}"
        >${item.status === "启用" ? "停用" : item.status === "停用" ? "重新启用" : "正式启用"}</button>
      </footer>
    </article>
  `;
}

function renderStandardConfigCard(item) {
  return `
    <article class="standard-config-card" ${detailAttrs("转诊标准配置", item.name, `${item.scope}，${item.trigger}，${item.performance}`, "referralStandards", `standard.${item.name}`)}>
      <header>
        <div>
          <span>${item.scope}</span>
          <strong>${item.name}</strong>
        </div>
        <div class="status-stack">
          <b class="badge ${item.status === "启用" ? "green" : item.status === "试运行" ? "amber" : "red"}">${item.status}</b>
          <button class="${item.status === "启用" ? "ghost-button" : "secondary-button"}" type="button"
            style="padding:2px 8px;font-size:12px;"
            data-action="toggle-standard" data-name="${item.name}">
            ${item.status === "启用" ? "停用" : item.status === "停用" ? "重新启用" : "正式启用"}
          </button>
        </div>
      </header>
      <dl>
        <dt>触发条件</dt>
        <dd>${item.trigger}</dd>
        <dt>执行路径</dt>
        <dd>${item.path}</dd>
        <dt>必带资料</dt>
        <dd>${item.materials}</dd>
        <dt>绩效约束</dt>
        <dd>${item.performance}</dd>
        <dt>责任部门</dt>
        <dd>${item.owner}</dd>
      </dl>
    </article>
  `;
}

function renderPathwayCard(pathway) {
  const score = pathway.score.reduce((sum, value) => sum + value, 0);
  const tone = pathway.priority === "急" ? "red" : pathway.priority === "高" ? "amber" : "blue";
  const active = pathway.id === state.selectedPathwayId;
  const shortSteps = [
    pathway.steps[0]?.[0],
    pathway.steps[1]?.[0],
    pathway.steps[3]?.[0],
    pathway.steps[4]?.[0],
    pathway.steps[6]?.[0],
    pathway.steps[7]?.[0],
  ].filter(Boolean);

  return `
    <article class="pathway-card ${active ? "active" : ""}" data-pathway="${pathway.id}" role="button" tabindex="0">
      <header>
        <div>
          <span>${pathway.title}</span>
          <strong>${pathway.disease}</strong>
          <p>${pathway.source} → ${pathway.target}</p>
        </div>
        <b class="badge ${tone}">${pathway.priority}</b>
      </header>
      <div class="pathway-rule">
        <span>规则</span>
        <strong>${pathway.rule}</strong>
      </div>
      <div class="pathway-steps">
        ${shortSteps.map((step) => `<span>${step}</span>`).join("")}
      </div>
      <footer>
        <span>${pathway.compensation}</span>
        <b>${score}/100</b>
      </footer>
    </article>
  `;
}

function renderPathwayDetail(pathway, mode) {
  const scoreLabels = ["病情评估", "资料完整", "规则匹配", "接诊闭环", "院后随访"];
  const total = pathway.score.reduce((sum, value) => sum + value, 0);
  const actionButtons = mode === "doctor"
    ? `
      <button class="primary-button"   type="button" data-action="start-referral">按此路径发起</button>
      <button class="secondary-button" type="button" data-action="check-materials">校验资料</button>
      <button class="ghost-button"     type="button" data-action="submit-preaudit">提交预审</button>
    `
    : `
      <button class="primary-button"   type="button" data-go-page="referrals">查看该路径转诊单</button>
      <button class="secondary-button" type="button" data-go-page="collaboration">查看结算台账</button>
      <button class="ghost-button"     type="button" data-go-page="diseaseCatalog">病种目录</button>
    `;

  return `
    <section class="panel" style="margin-top:16px;">
      <div class="panel-header">
        <div class="panel-title">
          <h2>${pathway.title} · ${pathway.disease}</h2>
          <p>${pathway.source} 发起，目标：${pathway.target}</p>
        </div>
        <div class="detail-actions">${actionButtons}</div>
      </div>
      <div class="panel-body referral-workflow">
        <div class="workflow-column">
          <h3>流程闭环</h3>
          <div class="workflow-timeline">
            ${pathway.steps.map(([title, desc], index) => `
              <article class="workflow-step" ${detailAttrs("转诊流程节点", title, desc, state.role === "doctor" ? "doctorReferrals" : "referrals")}>
                <b>${index + 1}</b>
                <div>
                  <strong>${title}</strong>
                  <span>${desc}</span>
                </div>
              </article>
            `).join("")}
          </div>
        </div>

        <div class="workflow-side">
          <h3>资料清单</h3>
          <div class="material-list">
            ${pathway.requiredMaterials.map((item, index) => `
              <article>
                <b>${index < 3 ? "✓" : "!"}</b>
                <span>${item}</span>
              </article>
            `).join("")}
          </div>

          <h3 style="margin-top:16px;">绩效评分</h3>
          <div class="score-board">
            ${pathway.score.map((value, index) => `
              <div class="score-row">
                <span>${scoreLabels[index]}</span>
                <div class="bar-track"><div class="bar-fill" style="width:${value * 5}%"></div></div>
                <b>${value}</b>
              </div>
            `).join("")}
          </div>
          <div class="score-total">
            <span>综合评分</span>
            <strong>${total}/100</strong>
          </div>

          <div class="workflow-note">
            <strong>协作服务</strong>
            <span>${pathway.compensation}</span>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderFlowStep(index, title, desc) {
  return `
    <article class="flow-step" ${detailAttrs("流程节点", title, desc)}>
      <b>${index}</b>
      <strong>${title}</strong>
      <span>${desc}</span>
    </article>
  `;
}

// Returns "done" | "current" | "rejected" | "pending" for a given step index
// given the settlement row status. stepIdx is 0-based.
function getSettlementStepStatus(rowStatus, stepIdx) {
  // currentStep = the index of the step in progress / just acted on
  const map = {
    "待审核":   { current: 4, rejected: false },
    "退回补充": { current: 4, rejected: true  },
    "待补充":   { current: 1, rejected: true  },
    "已通过":   { current: 5, rejected: false },
    "已结算":   { current: 5, rejected: false, done: true },
  };
  const cfg = map[rowStatus] || { current: -1, rejected: false };
  if (cfg.done && stepIdx <= 5) return "done";
  if (stepIdx < cfg.current) return "done";
  if (stepIdx === cfg.current && cfg.rejected) return "rejected";
  if (stepIdx === cfg.current) return "current";
  return "pending";
}

function renderComplianceStepLive(stepIdx, title, desc, rowStatus) {
  const st = getSettlementStepStatus(rowStatus, stepIdx);
  const iconMap  = { done: "✓", current: String(stepIdx + 1), rejected: "✗", pending: String(stepIdx + 1) };
  const toneMap  = { done: "green", current: "amber", rejected: "red", pending: "" };
  const tone = toneMap[st];
  return `
    <article class="flow-step" style="${st === "pending" ? "opacity:0.45;" : ""}" ${detailAttrs("流程节点", title, desc)}>
      <b class="${tone ? "badge " + tone : "badge"}">${iconMap[st]}</b>
      <strong>${title}</strong>
      <span>${desc}</span>
    </article>
  `;
}

function renderMapNode(title, desc, stats, tone) {
  const className = tone === "core" ? "map-node core" : `map-node ${tone}`;
  return `
    <article class="${className}">
      <div>
        <h3>${title}</h3>
        <p>${desc}</p>
      </div>
      <div class="node-stat">
        ${stats.map((item) => `<span>${item}</span>`).join("")}
      </div>
    </article>
  `;
}

function renderTask(icon, title, desc, tone, tag) {
  return `
    <article class="task-item" ${detailAttrs("任务", title, `${desc} 状态：${tag}`)}>
      <b class="task-icon tone-${tone}">${icon}</b>
      <div class="task-main">
        <strong>${title}</strong>
        <span>${desc}</span>
      </div>
      <span class="badge ${tone}">${tag}</span>
    </article>
  `;
}

function renderFollow(title, desc, tone) {
  return `
    <article class="follow-row" ${detailAttrs("预警", title, desc)}>
      <div>
        <strong>${title}</strong>
        <span>${desc}</span>
      </div>
      <span class="badge ${tone}">关注</span>
    </article>
  `;
}

function renderBar(label, value) {
  return `
    <div class="bar-row">
      <span class="bar-label">${label}</span>
      <div class="bar-track"><div class="bar-fill" style="width: ${value}%"></div></div>
      <span class="bar-value">${value}%</span>
    </div>
  `;
}

function renderStageTab(stage, label) {
  return `<button type="button" data-stage="${stage}" class="${state.referralStage === stage ? "active" : ""}">${label}</button>`;
}

function renderDiseaseTab(disease, label) {
  return `<button type="button" data-disease="${disease}" class="${state.disease === disease ? "active" : ""}">${label}</button>`;
}

function renderCaseRow(item, active) {
  return `
    <button type="button" class="case-row ${active ? "active" : ""}" data-referral="${item.id}">
      <div class="case-main">
        <strong>${item.patient} · ${item.disease}</strong>
        <span>${item.source} · ${item.doctor} 发起 · ${item.time}</span>
        <div class="case-meta">
          <span class="badge ${priorityTone(item.priority)}">${item.priority}</span>
          <span class="badge blue">${item.status}</span>
        </div>
      </div>
      <span class="case-target">${item.target.replace("县人民医院", "")}</span>
    </button>
  `;
}

function renderMini(label, value) {
  return `
    <article class="mini-panel">
      <span>${label}</span>
      <strong>${value}</strong>
    </article>
  `;
}

function renderTimeline(time, title, desc) {
  return `
    <article class="timeline-item" ${detailAttrs("流程节点", title, `${time}，${desc}`)}>
      <time>${time}</time>
      <div>
        <strong>${title}</strong>
        <span style="display:block;color:var(--muted);font-size:13px;margin-top:4px;">${desc}</span>
      </div>
      <span class="badge green">已记录</span>
    </article>
  `;
}

function renderRisk(title, value, desc, tone) {
  return `
    <article class="risk-card" ${detailAttrs("风险分层", title, `${value}，${desc}`)}>
      <span>${title}</span>
      <strong>${value}</strong>
      <p>${desc}</p>
      <span class="badge ${tone}" style="margin-top: 10px;">${title}</span>
    </article>
  `;
}

function renderDoctorCard(title, desc, owner, status) {
  return `
    <article class="doctor-row" ${detailAttrs("医生协作", title, `${desc}，${owner}，${status}`)}>
      <div>
        <strong>${title}</strong>
        <span>${desc}</span>
      </div>
      <footer>
        <span>${owner}</span>
        <span class="badge blue">${status}</span>
      </footer>
    </article>
  `;
}

function renderSchedule(time, dept, desc) {
  return `
    <article class="schedule-item" ${detailAttrs("排班/预约", `${time} · ${dept}`, desc)}>
      <strong>${time} · ${dept}</strong>
      <span>${desc}</span>
    </article>
  `;
}

function renderQuick(title, value) {
  return `
    <div class="quick-tile">
      <b>${title}</b>
      <span>${value}</span>
    </div>
  `;
}

function renderDataRow(name, scope, health, status) {
  return `
    <article class="data-row" ${detailAttrs("数据接入", name, `${scope}，健康度 ${health}% ，${status}`)}>
      <div>
        <strong>${name}</strong>
        <span>${scope}</span>
      </div>
      <div class="health-bar" aria-label="数据健康度 ${health}%">
        <i style="width: ${health}%"></i>
      </div>
      <span class="badge ${health > 90 ? "green" : health > 78 ? "amber" : "red"}">${status}</span>
    </article>
  `;
}

function renderEmergencyStep(step, title, desc) {
  return `
    <article class="emergency-step" ${detailAttrs("急救流程", title, desc, "emergency")}>
      <b>${step}</b>
      <strong>${title}</strong>
      <span>${desc}</span>
    </article>
  `;
}

function priorityTone(priority) {
  if (priority === "急" || priority === "高") return "red";
  if (priority === "中") return "amber";
  return "green";
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 2600);
}

// ─── Settings panel ──────────────────────────────────────────────────────────

function settingToggleHTML(key, label, desc) {
  const on = state.settings[key];
  return `
    <div class="settings-row">
      <div class="settings-row-text">
        <strong>${label}</strong>
        <span>${desc}</span>
      </div>
      <button type="button" class="settings-toggle"
              data-toggle-setting="${key}"
              aria-checked="${on}" role="switch" aria-label="${label}">
        <span class="settings-toggle-knob"></span>
      </button>
    </div>`;
}

function renderSettingsPanelContent() {
  function section(icon, title, content) {
    return `<p class="settings-section-label">${icon} ${title}</p>${content}`;
  }
  return (
    section("🔔", "通知与预警",
      settingToggleHTML("alertEmergency", "急症绿色通道预警", "胸痛、卒中等急危重症触发时推送提醒") +
      settingToggleHTML("alertMaterials", "资料缺项提醒",     "基层提交时资料不完整自动发出通知") +
      settingToggleHTML("alertConsent",   "知情授权缺失预警", "协作服务中患者未知情时触发警告") +
      settingToggleHTML("alertFrequency", "异常高频转诊预警", "7 日内同机构同病种转诊量异常增长")
    ) +
    section("🖥", "数据展示",
      settingToggleHTML("showPhone",  "显示患者联系方式", "患者卡片中展示手机号末四位") +
      settingToggleHTML("showAmount", "显示结算金额",     "台账和服务记录中显示补偿金额") +
      settingToggleHTML("showScore",  "显示绩效评分",     "机构绩效台账中展示各维度总分")
    ) +
    section("🔑", "角色权限",
      settingToggleHTML("doctorSeeAllPatients", "医生端查看全部患者", "开启后不限于授权患者，显示全部 40 人") +
      settingToggleHTML("patientSeeAmount",     "患者端显示费用信息", "开启后报告费用页面展示预估金额") +
      settingToggleHTML("managerCanExport",     "管理端可导出台账",   "开启后绩效、数据模块显示导出按钮")
    )
  );
}

function refreshSettingsPanel() {
  const body = document.querySelector("#settingsPanel .settings-body");
  if (body) body.innerHTML = renderSettingsPanelContent();
  // Keep size/position — only content changes
}

function openSettings() {
  state.settingsOpen = true;
  const panel = $("#settingsPanel");
  const btn   = $("#settingsButton");
  const rect  = btn.getBoundingClientRect();

  panel.className = "overlay-panel";
  panel.innerHTML = `
    <div class="overlay-panel-header">
      <strong>⚙ 系统设置</strong>
      <button type="button" class="overlay-panel-close" data-close-settings aria-label="关闭">×</button>
    </div>
    <div class="overlay-panel-body settings-body" style="max-height:calc(80vh - 114px);">
      ${renderSettingsPanelContent()}
    </div>
    <div class="overlay-panel-footer">
      <button class="primary-button" type="button" data-save-settings style="flex:1;">保存设置</button>
      <button class="ghost-button"   type="button" data-reset-settings>恢复默认</button>
    </div>`;

  Object.assign(panel.style, {
    top: (rect.bottom + 8) + "px",
    right: "12px",
    width: "320px",
    maxHeight: "80vh",
    transform: "scale(.95)",
    opacity: "0",
  });
  panel.hidden = false;
  $("#overlayBackdrop").hidden = false;
  requestAnimationFrame(() => {
    panel.style.transform = "scale(1)";
    panel.style.opacity   = "1";
  });
}

function closeOverlay() {
  state.settingsOpen = false;
  const panel = $("#settingsPanel");
  panel.style.transform = "scale(.95)";
  panel.style.opacity   = "0";
  setTimeout(() => { panel.hidden = true; }, 150);
  $("#overlayBackdrop").hidden = true;
}

// ─── Notification panel ───────────────────────────────────────────────────────

function generateNotifications() {
  const notifs = [];
  // Pending referrals
  referrals.filter((r) => r.stage === "pending").forEach((r) => {
    notifs.push({ icon: "转", tone: "amber", title: `${r.patient} 转诊待接收`, msg: `${r.source}，${r.disease}，${r.priority}级`, time: r.time, page: state.role === "doctor" ? "doctorReferrals" : "referrals" });
  });
  // Risk warnings (respect alertFrequency setting)
  riskWarnings.forEach(([title, desc, tone]) => {
    if (!title.includes("高频") || state.settings.alertFrequency) {
      notifs.push({ icon: "警", tone, title, msg: desc, time: "今日", page: "collaboration" });
    }
  });
  // Doctor followup tasks
  if (state.role === "doctor") {
    followupTasks.forEach((t, idx) => {
      if (!state.completedFollowups.includes(idx)) {
        notifs.push({ icon: "访", tone: t[3], title: t[0], msg: t[1], time: "今日", page: "doctorFollowups" });
      }
    });
  }
  // Missing data patients
  if (state.role === "manager" && state.settings.alertMaterials) {
    const missing = patientDatabase.filter((p) => p.missing && p.missing.length > 0).slice(0, 2);
    missing.forEach((p) => {
      notifs.push({ icon: "料", tone: "amber", title: `${p.name} 资料缺项`, msg: `缺少：${p.missing.slice(0,2).join("、")}`, time: "今日", page: "data" });
    });
  }
  return notifs.slice(0, 8);
}

function updateNotifBadge() {
  const badge = $("#notifBadge");
  if (!badge) return;
  const count = state.readNotifs ? 0 : generateNotifications().length;
  badge.textContent = count;
  badge.style.display = count > 0 ? "grid" : "none";
}

function openNotif() {
  state.notifOpen = true;
  state.readNotifs = false;
  const panel  = $("#notifPanel");
  const btn    = $("#notifButton");
  const rect   = btn.getBoundingClientRect();
  const notifs = generateNotifications();

  panel.className = "overlay-panel";
  panel.innerHTML = `
    <div class="overlay-panel-header">
      <strong>🔔 通知</strong>
      <div style="display:flex;gap:4px;align-items:center;">
        <button type="button" class="ghost-button" data-clear-notif
                style="padding:4px 10px;font-size:12px;min-height:unset;">全部已读</button>
        <button type="button" class="overlay-panel-close" data-close-notif aria-label="关闭">×</button>
      </div>
    </div>
    <div style="overflow-y:auto;max-height:calc(80vh - 60px);">
      ${notifs.length === 0
        ? `<div class="notif-empty"><p class="notif-empty-icon">🎉</p><p>暂无新通知</p></div>`
        : notifs.map((n) => `
            <div class="notif-item" data-notif-page="${n.page}">
              <b class="task-icon tone-${n.tone}" style="flex-shrink:0;margin-top:2px;">${n.icon}</b>
              <div class="notif-item-text">
                <strong>${n.title}</strong>
                <span>${n.msg}</span>
              </div>
              <span class="notif-item-time">${n.time}</span>
            </div>`).join("")}
    </div>`;

  Object.assign(panel.style, {
    top:       (rect.bottom + 8) + "px",
    right:     "12px",
    width:     "340px",
    maxHeight: "80vh",
    transform: "translateY(-8px)",
    opacity:   "0",
  });
  panel.hidden = false;
  requestAnimationFrame(() => {
    panel.style.transform = "translateY(0)";
    panel.style.opacity   = "1";
  });
  updateNotifBadge();
}

function closeNotif() {
  state.notifOpen = false;
  const panel = $("#notifPanel");
  panel.style.transform = "translateY(-8px)";
  panel.style.opacity   = "0";
  setTimeout(() => { panel.hidden = true; }, 150);
}

// ─── AI Feature 1: Referral smart form assistance ────────────────────────────

function renderAIReferralPanel(selected) {
  if (state.aiReferralStep === 0) return "";

  if (state.aiReferralStep === 1) {
    return `
      <div class="ai-panel">
        <div class="ai-panel-header">
          <span>🤖</span>
          <strong>AI 正在分析患者档案和病种规则…</strong>
          <span class="ai-badge">AI 辅助</span>
        </div>
        <div class="ai-scanning">
          <div class="ai-scanning-dots">
            <span></span><span></span><span></span>
          </div>
          <span>正在提取 ${selected.patient} 的病历数据，匹配病种目录和资料清单…</span>
        </div>
      </div>`;
  }

  // Step 2: results
  const ai = aiReferralData[selected.id] || {
    pathway: "普通上转", confidence: 76,
    basis: `${selected.disease}，基于现有资料综合判断`,
    extracted: [["患者", `${selected.patient} · ${selected.age} 岁`],["主诉", selected.disease],["来源", selected.source]],
    materials: selected.timeline.slice(0, 3).map((t, i) => ({ name: t[1], ok: i < 2, note: t[2].substring(0, 24) })),
    completeness: 55,
    suggestion: "已提取基本资料，建议补充关键检验结果后提交预审。",
  };

  const okCount = ai.materials.filter((m) => m.ok).length;

  return `
    <div class="ai-panel">
      <div class="ai-panel-header">
        <span>🤖</span>
        <strong>AI 分析完成：${selected.patient} · ${selected.disease}</strong>
        <span class="ai-badge">AI 辅助</span>
        <button type="button" class="overlay-panel-close" data-action="ai-referral-close" style="margin-left:auto;">×</button>
      </div>
      <div class="ai-panel-body">

        <div style="display:flex;align-items:flex-start;gap:14px;margin-bottom:14px;flex-wrap:wrap;">
          <div style="flex:1;min-width:200px;">
            <p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--brand);margin:0 0 6px;">推荐转诊路径</p>
            <div style="display:flex;align-items:center;gap:10px;">
              <strong style="font-size:16px;">${ai.pathway}</strong>
              <span class="badge ${ai.confidence >= 90 ? "green" : "amber"}">${ai.confidence}% 置信度</span>
            </div>
            <div class="ai-confidence-row" style="margin-top:6px;">
              <div class="ai-confidence-bar"><div class="ai-confidence-fill" style="width:${ai.confidence}%;"></div></div>
              <span style="font-size:12px;color:var(--muted);white-space:nowrap;">${ai.confidence}%</span>
            </div>
            <p style="font-size:12px;color:var(--muted);margin:6px 0 0;">${ai.basis}</p>
          </div>
          <div style="flex:1;min-width:200px;">
            <p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--brand);margin:0 0 6px;">自动提取数据</p>
            <dl class="ai-extracted-grid">
              ${ai.extracted.map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join("")}
            </dl>
          </div>
        </div>

        <p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--brand);margin:0 0 8px;">资料完整性校验 · ${okCount}/${ai.materials.length} 项已满足</p>
        <div class="ai-materials-grid">
          ${ai.materials.map((m) => `
            <div class="ai-material-item ${m.ok ? "ok" : "miss"}">
              <div class="ai-mat-icon">${m.ok ? "✓" : "✗"}</div>
              <div class="ai-mat-text">
                <strong>${m.name}</strong>
                <span>${m.note}</span>
              </div>
            </div>`).join("")}
        </div>

        <div style="margin-top:12px;padding:10px 14px;border-radius:var(--radius);background:color-mix(in srgb,var(--brand) 6%,var(--panel));border:1px solid color-mix(in srgb,var(--brand) 20%,transparent);">
          <strong style="font-size:12px;">💡 AI 建议</strong>
          <p style="font-size:13px;margin:4px 0 0;color:var(--ink);">${ai.suggestion}</p>
        </div>
      </div>
      <div class="ai-panel-footer">
        <button class="primary-button" type="button" data-action="ai-confirm-referral" style="flex:1;">确认并发起转诊</button>
        <button class="secondary-button" type="button" data-action="check-materials">先补充资料</button>
        <button class="ghost-button" type="button" data-action="ai-referral-close">关闭</button>
      </div>
    </div>`;
}

// ─── AI Feature 2: Chronic disease risk stratification ───────────────────────

function renderChronicAIPanel() {
  if (!state.chronicAIOpen) return "";

  const highRisk = aiChronicRisk.filter((p) => p.level === "high");
  const midRisk  = aiChronicRisk.filter((p) => p.level === "mid");

  return `
    <div class="ai-panel" style="margin-bottom:16px;">
      <div class="ai-panel-header">
        <span>🤖</span>
        <strong>AI 风险预测 · 基于近 30 天随访数据、用药依从性和生命体征趋势</strong>
        <span class="ai-badge">AI 分析</span>
        <button type="button" class="overlay-panel-close" data-action="chronic-ai-close" style="margin-left:auto;">×</button>
      </div>
      <div class="ai-panel-body">
        <p style="font-size:13px;color:var(--muted);margin:0 0 12px;">
          共分析 <strong style="color:var(--ink);">${aiChronicRisk.length}</strong> 名患者 ·
          <span style="color:var(--red);">⚠️ ${highRisk.length} 名高风险</span> ·
          <span style="color:var(--amber);">⚠ ${midRisk.length} 名中风险需关注</span>
        </p>

        ${aiChronicRisk.map((p) => `
          <div class="ai-risk-row ${p.level}">
            <div class="ai-risk-row-header">
              <span class="ai-risk-score ${p.level}">${p.score}</span>
              <div class="ai-risk-info">
                <strong>${p.name} · ${p.disease}</strong>
                <span>${p.eta}</span>
              </div>
              <div class="ai-confidence-bar" style="width:120px;">
                <div class="ai-confidence-fill" style="width:${p.score}%;background:${p.level === "high" ? "var(--red)" : p.level === "mid" ? "var(--amber)" : "var(--green)"};"></div>
              </div>
            </div>
            <p class="ai-risk-reason">主要风险因素：${p.reason}</p>
            <p class="ai-risk-action">→ 建议操作：${p.action}</p>
          </div>`).join("")}

        <p style="font-size:11px;color:var(--muted);margin:10px 0 0;">* AI 预测基于历史随访数据，仅供参考，不替代临床判断。</p>
      </div>
      <div class="ai-panel-footer">
        <button class="primary-button"   type="button" data-action="ai-chronic-tasks" style="flex:1;">生成跟进任务</button>
        <button class="secondary-button" type="button" data-action="generate-report">导出分析报告</button>
        <button class="ghost-button"     type="button" data-action="chronic-ai-close">关闭</button>
      </div>
    </div>`;
}

// ─── P2-3: Missing Data Source Inference Panel ───────────────────────────────

function renderMissingSourcePanel() {
  if (!state.missingAIOpen) return "";
  const patientsWithMissing = patientDatabase.filter((p) => p.missing && p.missing.length > 0);

  // Flatten all missing items with patient context + source inference
  const allItems = [];
  patientsWithMissing.forEach((p) => {
    p.missing.forEach((item) => {
      const inferred = aiMissingSourceMap[item] || { source: "需人工核实", priority: "mid", impact: "影响数据完整性" };
      allItems.push({ patient: p.name, institution: p.institution, item, ...inferred });
    });
  });

  const byPriority = (p) => ({ high: 0, mid: 1, low: 2 }[p] ?? 3);
  allItems.sort((a, b) => byPriority(a.priority) - byPriority(b.priority));

  const highItems = allItems.filter((i) => i.priority === "high");
  const midItems  = allItems.filter((i) => i.priority === "mid");
  const lowItems  = allItems.filter((i) => i.priority === "low");

  const renderGroup = (items, label, tone) => items.length === 0 ? "" : `
    <p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);margin:10px 0 6px;">${label}（${items.length}）</p>
    ${items.map((row) => `
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:6px 12px;padding:8px 12px;border-radius:var(--radius);background:var(--surface);border-left:3px solid var(--${tone});margin-bottom:4px;font-size:12px;">
        <span><strong>${row.patient}</strong> · ${row.item}</span>
        <span style="color:var(--muted);">📍 ${row.source}</span>
        <span style="color:var(--${tone});">${row.impact}</span>
      </div>`).join("")}`;

  return `
    <div class="ai-panel" style="margin-bottom:16px;">
      <div class="ai-panel-header">
        <span>🤖</span>
        <strong>AI 缺项来源推断 · 按影响优先级排序</strong>
        <span class="ai-badge">AI 分析</span>
        <button type="button" class="overlay-panel-close" data-action="missing-ai-close" style="margin-left:auto;">×</button>
      </div>
      <div class="ai-panel-body">
        <p style="font-size:13px;color:var(--muted);margin:0 0 4px;">
          共 <strong style="color:var(--ink);">${allItems.length}</strong> 条缺项 ·
          <span style="color:var(--red);">${highItems.length} 条影响合规结算</span> ·
          <span style="color:var(--amber);">${midItems.length} 条影响接收质量</span> ·
          <span style="color:var(--muted);">${lowItems.length} 条影响绩效得分</span>
        </p>
        <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:4px 12px;padding:6px 12px;font-size:11px;font-weight:700;color:var(--muted);border-bottom:1px solid var(--border);margin-bottom:2px;">
          <span>患者 · 缺项</span><span>推断来源</span><span>影响</span>
        </div>
        ${renderGroup(highItems, "优先级 1 — 影响合规结算", "red")}
        ${renderGroup(midItems,  "优先级 2 — 影响接收和会诊质量", "amber")}
        ${renderGroup(lowItems,  "优先级 3 — 影响绩效得分", "green")}
        <p style="font-size:11px;color:var(--muted);margin:10px 0 0;">* 推断来源基于接入系统目录，实际可用性需与数据中台确认。</p>
      </div>
      <div class="ai-panel-footer">
        <button class="primary-button"   type="button" data-action="batch-remind-missing" style="flex:1;">批量发送补录提醒</button>
        <button class="secondary-button" type="button" data-action="export-missing">导出缺项清单</button>
        <button class="ghost-button"     type="button" data-action="missing-ai-close">关闭</button>
      </div>
    </div>`;
}

// ─── P1-4: Referral Anomaly Detection Panel ──────────────────────────────────

function renderReferralAnomalyPanel() {
  if (!state.referralAnomalyOpen) return "";
  const high = aiReferralAnomalies.filter((a) => a.level === "high");
  const mid  = aiReferralAnomalies.filter((a) => a.level === "mid");
  return `
    <div class="ai-panel" style="margin-bottom:16px;">
      <div class="ai-panel-header">
        <span>🤖</span>
        <strong>AI 异常转诊检测 · 基于近 30 天机构、病种与频次数据</strong>
        <span class="ai-badge">AI 分析</span>
        <button type="button" class="overlay-panel-close" data-action="referral-anomaly-close" style="margin-left:auto;">×</button>
      </div>
      <div class="ai-panel-body">
        <p style="font-size:13px;color:var(--muted);margin:0 0 12px;">
          共识别 <strong style="color:var(--ink);">${aiReferralAnomalies.length}</strong> 条异常模式 ·
          <span style="color:var(--red);">⚠️ ${high.length} 条高风险</span> ·
          <span style="color:var(--amber);">⚠ ${mid.length} 条中风险需关注</span>
        </p>
        ${aiReferralAnomalies.map((a) => `
          <div class="ai-risk-row ${a.level}" style="margin-bottom:10px;">
            <div class="ai-risk-row-header">
              <div class="ai-risk-info" style="flex:1;">
                <strong>${a.title}</strong>
                <span style="font-size:12px;color:var(--muted);">${a.institution} · ${a.disease}</span>
              </div>
              <div style="text-align:right;min-width:80px;">
                <span class="badge ${a.level === "high" ? "red" : "amber"}">${a.changeRate}</span>
              </div>
            </div>
            <p class="ai-risk-reason" style="margin:4px 0 2px;">${a.detail}</p>
            <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-top:6px;font-size:12px;color:var(--muted);">
              <span>基线：${a.baseline}</span>
              <span>·</span>
              <span>当前：${a.current}</span>
              <span>·</span>
              <span style="color:var(--ink);">${a.riskType}</span>
            </div>
            <p class="ai-risk-action">→ ${a.action}</p>
            ${a.supervisable ? `
              <button class="secondary-button" type="button" data-action="generate-supervision" data-id="${a.id}"
                style="margin-top:6px;font-size:12px;padding:3px 10px;">
                生成督办通知
              </button>` : ""}
          </div>`).join("")}
        <p style="font-size:11px;color:var(--muted);margin:10px 0 0;">* AI 检测基于统计基线，异常模式仅供参考，需结合业务背景复核。</p>
      </div>
      <div class="ai-panel-footer">
        <button class="primary-button"   type="button" data-action="export-anomaly-report" style="flex:1;">导出异常分析报告</button>
        <button class="ghost-button"     type="button" data-action="referral-anomaly-close">关闭</button>
      </div>
    </div>`;
}

// ─── P1-2: Consult Draft Panel ───────────────────────────────────────────────

function renderConsultDraftPanel() {
  if (state.consultDraftIdx === null) return "";
  const row = consultationQueue[state.consultDraftIdx];
  if (!row) return "";
  const [dept, patient] = row;
  const key = `${dept}-${patient}`;
  const draft = aiConsultDrafts[key] || {
    recommendation: "待专家进一步评估",
    urgency: "中",
    draft: `${patient} 的病情已收到，正在综合评估。建议基层继续监测生命体征，补充检查结果后由专科给出正式意见。`,
    keyPoints: ["资料待补充", "继续观察生命体征"],
  };
  const urgencyTone = { "高": "red", "中": "amber", "低": "green" }[draft.urgency] || "blue";
  return `
    <div class="ai-panel" style="margin-bottom:16px;">
      <div class="ai-panel-header">
        <span>🤖</span>
        <strong>AI 会诊草稿：${dept} · ${patient}</strong>
        <span class="ai-badge">AI 辅助</span>
        <button type="button" class="overlay-panel-close" data-action="consult-draft-close" style="margin-left:auto;">×</button>
      </div>
      <div class="ai-panel-body">
        <div style="display:flex;gap:10px;align-items:center;margin-bottom:12px;flex-wrap:wrap;">
          <span style="font-size:12px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.05em;">推荐意见</span>
          <strong style="font-size:15px;">${draft.recommendation}</strong>
          <span class="badge ${urgencyTone}">紧急度：${draft.urgency}</span>
        </div>
        <div style="background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:12px 14px;margin-bottom:12px;">
          <p style="font-size:12px;font-weight:600;color:var(--muted);margin:0 0 6px;text-transform:uppercase;letter-spacing:.05em;">草稿意见（可直接发送或修改）</p>
          <p style="font-size:13px;line-height:1.65;margin:0;color:var(--ink);">${draft.draft}</p>
        </div>
        <p style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:var(--muted);margin:0 0 6px;">关键临床要点</p>
        <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:4px;">
          ${draft.keyPoints.map((pt) => `<span style="padding:3px 10px;border-radius:99px;font-size:12px;background:color-mix(in srgb,var(--brand) 10%,var(--panel));color:var(--brand);border:1px solid color-mix(in srgb,var(--brand) 20%,transparent);">${pt}</span>`).join("")}
        </div>
        <p style="font-size:11px;color:var(--muted);margin:10px 0 0;">* AI 草稿仅供参考，发送前请专科医生审核确认。</p>
      </div>
      <div class="ai-panel-footer">
        <button class="primary-button" type="button" data-action="consult-draft-confirm" data-idx="${state.consultDraftIdx}" style="flex:1;">确认并发送会诊意见</button>
        <button class="ghost-button"   type="button" data-action="consult-draft-close">关闭</button>
      </div>
    </div>`;
}

// ─── P1-1: Natural Language Search ───────────────────────────────────────────

function parseNLQuery(kw) {
  const rules = [
    {
      pattern: /高危.*(未|没有|没|缺).*随访|随访.*(断|断档|缺失)|高危.*未访/,
      interpretation: '高危患者中随访状态为「待完成」的名单',
      exec: () => patientDatabase.filter((p) => (p.risk === "高危" || p.risk === "高") && p.followupStatus === "待完成"),
      page: (role) => role === "doctor" ? "doctorFollowups" : "chronic",
      label: (p) => `${p.name} · ${p.disease}`,
      sub: (p) => `${p.institution} · 风险：${p.risk} · ${p.followupStatus}`,
    },
    {
      pattern: /资料完整率.*(最差|最低)|完整率.*(差|低)|机构.*(补录|缺项)/,
      interpretation: "资料完整率最低的机构排名",
      exec: () => [...institutionScores].sort((a, b) => parseFloat(a[2]) - parseFloat(b[2])),
      page: () => "performance",
      label: ([name, , completeness]) => `${name} · 完整率 ${completeness}`,
      sub: ([, , , followup, , score]) => `规范随访 ${followup} · 综合评分 ${score}`,
    },
    {
      pattern: /待接收|未接收|待审.*转诊|转诊.*待/,
      interpretation: '当前状态为「待接收」的转诊单',
      exec: () => referrals.filter((r) => r.stage === "pending"),
      page: (role) => role === "doctor" ? "doctorReferrals" : "referrals",
      label: (r) => `${r.patient} · ${r.disease}`,
      sub: (r) => `${r.source} · ${r.id} · ${r.status}`,
      referralId: (r) => r.id,
    },
    {
      pattern: /会诊中|正在会诊|会诊.*待/,
      interpretation: '当前状态为「会诊中」的转诊单',
      exec: () => referrals.filter((r) => r.stage === "consulting"),
      page: (role) => role === "doctor" ? "doctorReferrals" : "referrals",
      label: (r) => `${r.patient} · ${r.disease}`,
      sub: (r) => `${r.source} · ${r.id} · ${r.status}`,
      referralId: (r) => r.id,
    },
    {
      pattern: /高风险患者|高危患者|重点患者|风险.*高/,
      interpretation: "当前高危或急症风险等级患者",
      exec: () => patientDatabase.filter((p) => ["高危", "高", "急"].includes(p.risk)),
      page: (role) => role === "doctor" ? "doctorPatients" : "data",
      label: (p) => `${p.name} · ${p.disease}`,
      sub: (p) => `${p.institution} · 风险：${p.risk}`,
    },
    {
      pattern: /缺项|资料.*缺|缺.*资料|未完整|补录/,
      interpretation: "存在资料缺项的患者",
      exec: () => patientDatabase.filter((p) => p.missing && p.missing.length > 0),
      page: () => "data",
      label: (p) => `${p.name} · ${p.disease}`,
      sub: (p) => `缺：${p.missing.slice(0, 2).join("、")} · ${p.institution}`,
    },
    {
      pattern: /高血压.*患者|高血压.*名单/,
      interpretation: "高血压相关患者",
      exec: () => patientDatabase.filter((p) => p.disease.includes("高血压")),
      page: (role) => role === "doctor" ? "doctorPatients" : "chronic",
      label: (p) => `${p.name} · ${p.disease}`,
      sub: (p) => `${p.institution} · 风险：${p.risk}`,
    },
    {
      pattern: /糖尿病.*患者|糖尿病.*名单/,
      interpretation: "糖尿病相关患者",
      exec: () => patientDatabase.filter((p) => p.disease.includes("糖尿病")),
      page: (role) => role === "doctor" ? "doctorPatients" : "chronic",
      label: (p) => `${p.name} · ${p.disease}`,
      sub: (p) => `${p.institution} · 风险：${p.risk}`,
    },
  ];
  for (const rule of rules) {
    if (rule.pattern.test(kw)) return rule;
  }
  return null;
}

function buildSearchResults(kw) {
  const groups = [];

  // Patients — all roles
  const patients = patientDatabase.filter((p) =>
    p.name.includes(kw) || p.disease.includes(kw) || p.institution.includes(kw)
  ).slice(0, 6);
  if (patients.length) {
    const pg = state.role === "doctor" ? "doctorPatients" : state.role === "patient" ? "patientHome" : "data";
    groups.push({
      title: "患者",
      items: patients.map((p) => ({
        label: `${p.name} · ${p.disease}`,
        sub: `${p.institution} · 风险：${p.risk}`,
        page: pg,
      })),
    });
  }

  // Referrals — all roles
  const matchedRefs = referrals.filter((r) =>
    r.patient.includes(kw) || r.disease.includes(kw) || r.id.includes(kw) || r.source.includes(kw)
  ).slice(0, 4);
  if (matchedRefs.length) {
    const pg = state.role === "doctor" ? "doctorReferrals" : state.role === "patient" ? "patientReferral" : "referrals";
    groups.push({
      title: "转诊单",
      items: matchedRefs.map((r) => ({
        label: `${r.patient} · ${r.disease}`,
        sub: `${r.id} · ${r.source} · ${r.status}`,
        page: pg,
        referralId: r.id,
      })),
    });
  }

  // Disease catalog — manager / doctor
  if (state.role !== "patient") {
    const diseases = referralDiseaseCatalog.filter((d) =>
      d.disease.includes(kw) || d.code.includes(kw) || d.layer.includes(kw)
    ).slice(0, 4);
    if (diseases.length) {
      groups.push({
        title: "病种目录",
        items: diseases.map((d) => ({
          label: `${d.code} · ${d.disease}`,
          sub: `${d.layer} · ${d.status}`,
          page: state.role === "doctor" ? "doctorRules" : "diseaseCatalog",
        })),
      });
    }
  }

  // Institutions — manager only
  if (state.role === "manager") {
    const insts = institutionScores.filter(([name]) => name.includes(kw)).slice(0, 4);
    if (insts.length) {
      groups.push({
        title: "机构绩效",
        items: insts.map(([name, transfer, closed, , sat, score]) => ({
          label: name,
          sub: `规范上转 ${transfer} · 总分 ${score}`,
          page: "performance",
        })),
      });
    }

    const docs = doctorDatabase.filter((d) =>
      d.name.includes(kw) || d.specialty.includes(kw) || d.department.includes(kw)
    ).slice(0, 4);
    if (docs.length) {
      groups.push({
        title: "医生目录",
        items: docs.map((d) => ({
          label: `${d.name} · ${d.role}`,
          sub: `${d.institution} · ${d.department}`,
          page: "data",
        })),
      });
    }

    // Settlement records
    const settled = settlementRows.filter(([id, doctor, service, patient]) =>
      id.includes(kw) || doctor.includes(kw) || service.includes(kw) || patient.includes(kw)
    ).slice(0, 4);
    if (settled.length) {
      groups.push({
        title: "结算台账",
        items: settled.map(([id, doctor, service, patient, status]) => ({
          label: `${id} · ${service}`,
          sub: `${doctor} · ${patient} · ${status}`,
          page: "collaboration",
        })),
      });
    }
  }

  // Reports — patient only
  if (state.role === "patient") {
    const reports = patientReports.filter(([name, org]) =>
      name.includes(kw) || org.includes(kw)
    ).slice(0, 4);
    if (reports.length) {
      groups.push({
        title: "我的报告",
        items: reports.map(([name, org, time, status]) => ({
          label: name,
          sub: `${org} · ${time} · ${status}`,
          page: "patientReports",
        })),
      });
    }

    // Family doctor — patient keyword hints
    if ("家庭医生周建国签约城东".split("").some((c) => kw.includes(c) && kw.length >= 2)) {
      groups.push({
        title: "家庭医生",
        items: [{ label: "城东家庭医生团队 · 周建国", sub: "已签约 · 城东镇卫生院", page: "patientFamilyDoctor" }],
      });
    }
  }

  return groups;
}

function renderSearchResults(kw) {
  const nlRule = parseNLQuery(kw);
  let nlBanner = "";

  if (nlRule) {
    const results = nlRule.exec();
    const pg = nlRule.page(state.role);
    const nlItems = results.slice(0, 8).map((item) => ({
      label: nlRule.label(item),
      sub: nlRule.sub(item),
      page: pg,
      referralId: nlRule.referralId ? nlRule.referralId(item) : undefined,
    }));
    nlBanner = `
      <div class="ai-panel" style="margin-bottom:16px;">
        <div class="ai-panel-header">
          <span>🤖</span>
          <strong>AI 解析：${nlRule.interpretation}</strong>
          <span class="ai-badge">自然语言查询</span>
        </div>
        <div class="ai-panel-body">
          <p style="font-size:13px;color:var(--muted);margin:0 0 10px;">
            共匹配 <strong style="color:var(--ink);">${results.length}</strong> 条结果，点击跳转对应模块
          </p>
          ${nlItems.map((item) => `
            <div class="institution-row" style="cursor:pointer;padding:9px 14px;border-radius:6px;margin-bottom:3px;display:grid;grid-template-columns:1fr auto;"
                 data-search-page="${item.page}"
                 ${item.referralId ? `data-search-referral="${item.referralId}"` : ""}>
              <div>
                <strong style="display:block;font-size:14px;">${item.label}</strong>
                <span style="font-size:12px;opacity:0.6;">${item.sub}</span>
              </div>
              <span style="font-size:12px;opacity:0.4;align-self:center;">→</span>
            </div>`).join("")}
          ${results.length === 0 ? `<p style="font-size:13px;color:var(--muted);">当前数据中未找到匹配记录。</p>` : ""}
        </div>
      </div>`;
  }

  const groups = buildSearchResults(kw);
  const total = groups.reduce((sum, g) => sum + g.items.length, 0);

  const header = `
    ${nlBanner}
    <section class="panel">
      <div class="panel-header">
        <div class="panel-title">
          <h2>${nlRule ? "精确匹配" : "搜索结果"}</h2>
          <p>${total > 0 ? `找到 ${total} 条与「${kw}」相关的内容，点击跳转对应模块` : `未找到与「${kw}」相关的精确匹配`}</p>
        </div>
        <button class="ghost-button" type="button" data-action="clear-search">× 清除</button>
      </div>`;

  if (total === 0) return header + "</section>";

  const body = `
      <div class="panel-body">
        ${groups.map((group) => `
          <div style="margin-bottom:20px;">
            <p style="font-size:12px;font-weight:600;opacity:0.55;text-transform:uppercase;letter-spacing:0.06em;margin-bottom:6px;">
              ${group.title}（${group.items.length}）
            </p>
            ${group.items.map((item) => `
              <div class="institution-row" style="cursor:pointer;padding:10px 14px;border-radius:6px;margin-bottom:3px;display:grid;grid-template-columns:1fr auto;"
                   data-search-page="${item.page}"
                   ${item.referralId ? `data-search-referral="${item.referralId}"` : ""}>
                <div>
                  <strong style="display:block;font-size:14px;">${item.label}</strong>
                  <span style="font-size:12px;opacity:0.6;">${item.sub}</span>
                </div>
                <span style="font-size:12px;opacity:0.4;align-self:center;">→</span>
              </div>
            `).join("")}
          </div>
        `).join("")}
      </div>
    </section>`;

  return header + body;
}

init();
