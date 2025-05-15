import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSnapchatIcon],svg[fa-snapchat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1279 1020q0-22-22-27q-67-15-118-59t-80-108q-7-19-7-25q0-15 19.5-26t43-17t43-20.5T1177 701q0-19-18.5-31.5T1120 657q-12 0-32 8t-31 8q-4 0-12-2q5-95 5-114q0-79-17-114q-36-78-103-121.5T778 278q-199 0-275 165q-17 35-17 114q0 19 5 114q-4 2-14 2q-12 0-32-7.5t-30-7.5q-21 0-38.5 12T359 702q0 21 19.5 35.5t43 20.5t43 17t19.5 26q0 6-7 25q-64 138-198 167q-22 5-22 27q0 46 137 68q2 5 6 26t11.5 30.5t23.5 9.5q12 0 37.5-4.5t39.5-4.5q35 0 67 15t54 32.5t57.5 32.5t76.5 15q43 0 79-15t57.5-32.5T957 1160t67-15q14 0 39.5 4t38.5 4q16 0 23-10t11-30t6-25q137-22 137-68m257-252q0 209-103 385.5T1153.5 1433T768 1536t-385.5-103T103 1153.5T0 768t103-385.5T382.5 103T768 0t385.5 103T1433 382.5T1536 768"></svg:path>`,
})
export class FaSnapchatIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSnapchatGhostIcon],svg[fa-snapchat-ghost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M848 0q134-1 240.5 68.5T1252 261q27 58 27 179q0 47-9 191q14 7 28 7q18 0 51-13.5t51-13.5q29 0 56 18t27 46q0 32-31.5 54t-69 31.5t-69 29T1282 837q0 15 12 43q37 82 102.5 150t144.5 101q28 12 80 23q28 6 28 35q0 70-219 103q-7 11-11 39t-14 46.5t-33 18.5q-20 0-62-6.5t-64-6.5q-37 0-62 5q-32 5-63 22.5t-58 38t-58 40.5t-76 33.5t-99 13.5q-52 0-96.5-13.5t-75-33.5t-57.5-40.5t-58-38t-62-22.5q-26-5-63-5q-24 0-65.5 7.5T294 1398q-25 0-35-18.5t-14-47.5t-11-40q-219-33-219-103q0-29 28-35q52-11 80-23q78-32 144.5-101T370 880q12-28 12-43q0-28-31.5-47.5T281 760t-69.5-31.5T180 676q0-27 26-45.5t55-18.5q15 0 48 13t53 13q18 0 32-7q-9-142-9-190q0-122 27-180q64-137 172-198T848 0"></svg:path>`,
})
export class FaSnapchatGhostIcon {
  readonly viewBox = input("0 0 1664 1536")
  readonly width = input("1.09em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSnapchatSquareIcon],svg[fa-snapchat-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1280 1020q0-22-22-27q-67-14-118-58t-80-109q-7-14-7-25q0-15 19.5-26t42.5-17t42.5-20.5T1177 701q0-19-18.5-31.5T1120 657q-11 0-31 8t-32 8q-4 0-12-2q5-63 5-115q0-78-17-114q-36-78-102.5-121.5T778 277q-198 0-275 165q-18 38-18 115q0 38 6 114q-10 2-15 2q-11 0-31.5-8t-30.5-8q-20 0-37.5 12.5T359 702q0 21 19.5 35.5T421 758t42.5 17t19.5 26q0 11-7 25q-64 138-198 167q-22 5-22 27q0 47 138 69q2 5 6 26t11 30.5t23 9.5q13 0 38.5-5t38.5-5q35 0 67.5 15t54.5 32.5t57.5 32.5t76.5 15q43 0 79-15t57.5-32.5t54-32.5t67.5-15q13 0 39 4.5t39 4.5q15 0 22.5-9.5t11.5-31t5-24.5q138-22 138-69m256-732v960q0 119-84.5 203.5T1248 1536H288q-119 0-203.5-84.5T0 1248V288Q0 169 84.5 84.5T288 0h960q119 0 203.5 84.5T1536 288"></svg:path>`,
})
export class FaSnapchatSquareIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSnowflakeOIcon],svg[fa-snowflake-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1534 1117l-167 33l186 107q23 13 29.5 38.5t-6.5 48.5q-14 23-39 29.5t-48-6.5l-186-106l55 160q13 38-12 63.5t-60.5 20.5t-48.5-42l-102-300l-271-156v313l208 238q16 18 17 39t-11 36.5t-28.5 25t-37 5.5t-36.5-22l-112-128v214q0 26-19 45t-45 19t-45-19t-19-45v-214l-112 128q-16 18-36.5 22t-37-5.5t-28.5-25t-11-36.5t17-39l208-238v-313l-271 156l-102 300q-13 37-48.5 42t-60.5-20.5t-12-63.5l55-160l-186 106q-23 13-48 6.5T24 1344q-13-23-6.5-48.5T47 1257l186-107l-167-33q-29-6-42-29t-8.5-46.5t25.5-40T91 991l310 62l271-157l-271-157l-310 62q-4 1-13 1q-27 0-44-18t-19-40t11-43t40-26l167-33L47 535q-23-13-29.5-38.5T24 448t39-30t48 7l186 106l-55-160q-13-38 12-63.5t60.5-20.5t48.5 42l102 300l271 156V472L528 234q-16-18-17-39t11-36.5t28.5-25t37-5.5t36.5 22l112 128V64q0-26 19-45t45-19t45 19t19 45v214l112-128q16-18 36.5-22t37 5.5t28.5 25t11 36.5t-17 39L864 472v313l271-156l102-300q13-37 48.5-42t60.5 20.5t12 63.5l-55 160l186-106q23-13 48-6.5t39 29.5q13 23 6.5 48.5T1553 535l-186 107l167 33q27 5 40 26t11 43t-19 40t-44 18q-9 0-13-1l-310-62l-271 157l271 157l310-62q29-6 50 10.5t25.5 40t-8.5 46.5t-42 29"></svg:path>`,
})
export class FaSnowflakeOIcon {
  readonly viewBox = input("0 0 1600 1792")
  readonly width = input("0.9em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSortIcon],svg[fa-sort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 896q0 26-19 45l-448 448q-19 19-45 19t-45-19L19 941Q0 922 0 896t19-45t45-19h896q26 0 45 19t19 45m0-384q0 26-19 45t-45 19H64q-26 0-45-19T0 512t19-45L467 19q19-19 45-19t45 19l448 448q19 19 19 45"></svg:path>`,
})
export class FaSortIcon {
  readonly viewBox = input("0 0 1024 1408")
  readonly width = input("0.73em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSortAlphaAscIcon],svg[fa-sort-alpha-asc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1159 408h177l-72-218l-12-47q-2-16-2-20h-4l-3 20q0 1-3.5 18t-7.5 29zM704 1440q0 12-10 24l-319 319q-10 9-23 9q-12 0-23-9L9 1463q-15-16-7-35q8-20 30-20h192V32q0-14 9-23t23-9h192q14 0 23 9t9 23v1376h192q14 0 23 9t9 23m836 119v233H956v-90l369-529q12-18 21-27l11-9v-3q-2 0-6.5.5t-7.5.5q-12 3-30 3h-232v115H961v-229h567v89l-369 530q-6 8-21 26l-11 11v2l14-2q9-2 30-2h248v-119zm89-897v106h-288V662h75l-47-144h-243l-47 144h75v106H867V662h70L1167 0h162l230 662z"></svg:path>`,
})
export class FaSortAlphaAscIcon {
  readonly viewBox = input("0 0 1632 1792")
  readonly width = input("0.92em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSortAlphaDescIcon],svg[fa-sort-alpha-desc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1159 1432h177l-72-218l-12-47q-2-16-2-20h-4l-3 20q0 1-3.5 18t-7.5 29zm-455 8q0 12-10 24l-319 319q-10 9-23 9q-12 0-23-9L9 1463q-15-16-7-35q8-20 30-20h192V32q0-14 9-23t23-9h192q14 0 23 9t9 23v1376h192q14 0 23 9t9 23m925 246v106h-288v-106h75l-47-144h-243l-47 144h75v106H867v-106h70l230-662h162l230 662zm-89-1151v233H956v-90l369-529q12-18 21-27l11-9v-3q-2 0-6.5.5t-7.5.5q-12 3-30 3h-232v115H961V0h567v89l-369 530q-6 8-21 26l-11 10v3l14-3q9-1 30-1h248V535z"></svg:path>`,
})
export class FaSortAlphaDescIcon {
  readonly viewBox = input("0 0 1632 1792")
  readonly width = input("0.92em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSortAmountAscIcon],svg[fa-sort-amount-asc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 1440q0 12-10 24l-319 319q-10 9-23 9q-12 0-23-9L9 1463q-15-16-7-35q8-20 30-20h192V32q0-14 9-23t23-9h192q14 0 23 9t9 23v1376h192q14 0 23 9t9 23m1056 128v192q0 14-9 23t-23 9H896q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h832q14 0 23 9t9 23m-192-512v192q0 14-9 23t-23 9H896q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h640q14 0 23 9t9 23m-192-512v192q0 14-9 23t-23 9H896q-14 0-23-9t-9-23V544q0-14 9-23t23-9h448q14 0 23 9t9 23M1184 32v192q0 14-9 23t-23 9H896q-14 0-23-9t-9-23V32q0-14 9-23t23-9h256q14 0 23 9t9 23"></svg:path>`,
})
export class FaSortAmountAscIcon {
  readonly viewBox = input("0 0 1760 1792")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSortAmountDescIcon],svg[fa-sort-amount-desc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1184 1568v192q0 14-9 23t-23 9H896q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h256q14 0 23 9t9 23m-480-128q0 12-10 24l-319 319q-10 9-23 9q-12 0-23-9L9 1463q-15-16-7-35q8-20 30-20h192V32q0-14 9-23t23-9h192q14 0 23 9t9 23v1376h192q14 0 23 9t9 23m672-384v192q0 14-9 23t-23 9H896q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h448q14 0 23 9t9 23m192-512v192q0 14-9 23t-23 9H896q-14 0-23-9t-9-23V544q0-14 9-23t23-9h640q14 0 23 9t9 23m192-512v192q0 14-9 23t-23 9H896q-14 0-23-9t-9-23V32q0-14 9-23t23-9h832q14 0 23 9t9 23"></svg:path>`,
})
export class FaSortAmountDescIcon {
  readonly viewBox = input("0 0 1760 1792")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSortAscIcon],svg[fa-sort-asc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 512q0 26-19 45t-45 19H64q-26 0-45-19T0 512t19-45L467 19q19-19 45-19t45 19l448 448q19 19 19 45"></svg:path>`,
})
export class FaSortAscIcon {
  readonly viewBox = input("0 0 1024 1344")
  readonly width = input("0.77em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSortNumericAscIcon],svg[fa-sort-numeric-asc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1314 1313q0-63-44-116t-103-53q-52 0-83 37t-31 94t36.5 95t104.5 38q50 0 85-27t35-68m-610 127q0 12-10 24l-319 319q-10 9-23 9q-12 0-23-9L9 1463q-15-16-7-35q8-20 30-20h192V32q0-14 9-23t23-9h192q14 0 23 9t9 23v1376h192q14 0 23 9t9 23m750-69q0 62-13 121.5t-41 114t-68 95.5t-98.5 65.5T1106 1792q-62 0-108-16q-24-8-42-15l39-113q15 7 31 11q37 13 75 13q84 0 134.5-58.5T1302 1468h-2q-21 23-61.5 37t-84.5 14q-106 0-173-71.5T914 1275q0-105 72-178t181-73q123 0 205 94.5t82 252.5m-30-717v114H955V654h167V222q0-7 .5-19t.5-17v-16h-2l-7 12q-8 13-26 31l-62 58l-82-86L1136 0h123v654z"></svg:path>`,
})
export class FaSortNumericAscIcon {
  readonly viewBox = input("0 0 1472 1792")
  readonly width = input("0.83em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSortNumericDescIcon],svg[fa-sort-numeric-desc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1314 289q0-63-44-116t-103-53q-52 0-83 37t-31 94t36.5 95t104.5 38q50 0 85-27t35-68M704 1440q0 12-10 24l-319 319q-10 9-23 9q-12 0-23-9L9 1463q-15-16-7-35q8-20 30-20h192V32q0-14 9-23t23-9h192q14 0 23 9t9 23v1376h192q14 0 23 9t9 23m720 238v114H955v-114h167v-432q0-7 .5-19t.5-17v-16h-2l-7 12q-8 13-26 31l-62 58l-82-86l192-185h123v654zm30-1331q0 62-13 121.5t-41 114t-68 95.5t-98.5 65.5T1106 768q-62 0-108-16q-24-8-42-15l39-113q15 7 31 11q37 13 75 13q84 0 134.5-58.5T1302 444h-2q-21 23-61.5 37t-84.5 14q-106 0-173-71.5T914 251q0-105 72-178t181-73q123 0 205 94.5t82 252.5"></svg:path>`,
})
export class FaSortNumericDescIcon {
  readonly viewBox = input("0 0 1472 1792")
  readonly width = input("0.83em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSoundcloudIcon],svg[fa-soundcloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m784 1116l16-241l-16-523q-1-10-7.5-17t-16.5-7q-9 0-16 7t-7 17l-14 523l14 241q1 10 7.5 16.5t15.5 6.5q22 0 24-23m296-29l11-211l-12-586q0-16-13-24q-8-5-16-5t-16 5q-13 8-13 24l-1 6l-10 579q0 1 11 236v1q0 10 6 17q9 11 23 11q11 0 20-9q9-7 9-20zM35 747l20 128l-20 126q-2 9-9 9t-9-9L0 875l17-128q2-9 9-9t9 9m86-79l26 207l-26 203q-2 9-10 9q-9 0-9-10L79 875l23-207q0-9 9-9q8 0 10 9m92-38l25 245l-25 237q0 11-11 11q-10 0-12-11l-21-237l21-245q2-12 12-12q11 0 11 12m94-7l23 252l-23 244q-2 13-14 13q-13 0-13-13l-21-244l21-252q0-13 13-13q12 0 14 13m94 18l21 234l-21 246q-2 16-16 16q-6 0-10.5-4.5T370 1121l-20-246l20-234q0-6 4.5-10.5T385 626q14 0 16 15m94-146l21 380l-21 246q0 7-5 12.5t-12 5.5q-16 0-18-18l-18-246l18-380q2-18 18-18q7 0 12 5.5t5 12.5m94-86l19 468l-19 244q0 8-5.5 13.5T570 1140q-18 0-20-19l-16-244l16-468q2-19 20-19q8 0 13.5 5.5T589 409m98-40l18 506l-18 242q-2 21-22 21q-19 0-21-21l-16-242l16-506q0-9 6.5-15.5T665 347q9 0 15 6.5t7 15.5m194-4l15 510l-15 239q0 10-7.5 17.5T856 1139t-17-7t-8-18l-14-239l14-510q0-11 7.5-18t17.5-7t17.5 7t7.5 18m99 19l14 492l-14 236q0 11-8 19t-19 8t-19-8t-9-19l-12-236l12-492q1-12 9-20t19-8t18.5 8t8.5 20m212 492l-14 231q0 13-9 22t-22 9t-22-9t-10-22l-6-114l-6-117l12-636v-3q2-15 12-24q9-7 20-7q8 0 15 5q14 8 16 26zm1112-19q0 117-83 199.5t-200 82.5h-786q-13-2-22-11t-9-22V207q0-23 28-33q85-34 181-34q195 0 338 131.5T1911 595q53-22 110-22q117 0 200 83t83 201"></svg:path>`,
})
export class FaSoundcloudIcon {
  readonly viewBox = input("0 0 2304 1280")
  readonly width = input("1.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSpaceShuttleIcon],svg[fa-space-shuttle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M620 864q-110 64-268 64H224v-64h-64q-13 0-22.5-23.5T128 784q0-24 7-49q-58-2-96.5-10.5T0 704t38.5-20.5T135 673q-7-25-7-49q0-33 9.5-56.5T160 544h64v-64h128q158 0 268 64h1113q42 7 106.5 18t80.5 14q89 15 150 40.5t83.5 47.5t22.5 40t-22.5 40t-83.5 47.5t-150 40.5q-16 3-80.5 14T1733 864zm1119-252q53 36 53 92t-53 92l81 30q68-48 68-122t-68-122zM625 880h1015q-217 38-456 80q-57 0-113 24t-83 48l-28 24l-288 288q-26 26-70.5 45t-89.5 19h-96l-93-464h29q157 0 273-64M352 464h-29L416 0h96q46 0 90 19t70 45l288 288q4 4 11 10.5t30.5 23t48.5 29t61.5 23T1184 448l456 80H625q-116-64-273-64"></svg:path>`,
})
export class FaSpaceShuttleIcon {
  readonly viewBox = input("0 0 2176 1408")
  readonly width = input("1.55em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSpinnerIcon],svg[fa-spinner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M462 1394q0 53-37.5 90.5T334 1522q-52 0-90-38t-38-90q0-53 37.5-90.5T334 1266t90.5 37.5T462 1394m498 206q0 53-37.5 90.5T832 1728t-90.5-37.5T704 1600t37.5-90.5T832 1472t90.5 37.5T960 1600M256 896q0 53-37.5 90.5T128 1024t-90.5-37.5T0 896t37.5-90.5T128 768t90.5 37.5T256 896m1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5T1202 1394t37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5M494 398q0 66-47 113t-113 47t-113-47t-47-113t47-113t113-47t113 47t47 113m1170 498q0 53-37.5 90.5T1536 1024t-90.5-37.5T1408 896t37.5-90.5T1536 768t90.5 37.5T1664 896m-640-704q0 80-56 136t-136 56t-136-56t-56-136t56-136T832 0t136 56t56 136m530 206q0 93-66 158.5T1330 622q-93 0-158.5-65.5T1106 398q0-92 65.5-158t158.5-66q92 0 158 66t66 158"></svg:path>`,
})
export class FaSpinnerIcon {
  readonly viewBox = input("0 0 1664 1728")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSpoonIcon],svg[fa-spoon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 528q0 145-57 243.5T431 907l45 821q2 26-16 45t-44 19H224q-26 0-44-19t-16-45l45-821q-95-37-152-135.5T0 528q0-128 42.5-249.5T160 78.5T320 0t160 78.5t117.5 200T640 528"></svg:path>`,
})
export class FaSpoonIcon {
  readonly viewBox = input("0 0 640 1792")
  readonly width = input("0.36em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSpotifyIcon],svg[fa-spotify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1127 1082q0-32-30-51q-193-115-447-115q-133 0-287 34q-42 9-42 52q0 20 13.5 34.5T370 1051q5 0 37-8q132-27 243-27q226 0 397 103q19 11 33 11q19 0 33-13.5t14-34.5m96-215q0-40-35-61q-237-141-548-141q-153 0-303 42q-48 13-48 64q0 25 17.5 42.5T349 831q7 0 37-8q122-33 251-33q279 0 488 124q24 13 38 13q25 0 42.5-17.5T1223 867m108-248q0-47-40-70q-126-73-293-110.5T655 401q-204 0-364 47q-23 7-38.5 25.5T237 522q0 31 20.5 52t51.5 21q11 0 40-8q133-37 307-37q159 0 309.5 34t253.5 95q21 12 40 12q29 0 50.5-20.5T1331 619m205 149q0 209-103 385.5T1153.5 1433T768 1536t-385.5-103T103 1153.5T0 768t103-385.5T382.5 103T768 0t385.5 103T1433 382.5T1536 768"></svg:path>`,
})
export class FaSpotifyIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSquareIcon],svg[fa-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1536 288v960q0 119-84.5 203.5T1248 1536H288q-119 0-203.5-84.5T0 1248V288Q0 169 84.5 84.5T288 0h960q119 0 203.5 84.5T1536 288"></svg:path>`,
})
export class FaSquareIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSquareOIcon],svg[fa-square-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1120 128H288q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113V288q0-66-47-113t-113-47m288 160v832q0 119-84.5 203.5T1120 1408H288q-119 0-203.5-84.5T0 1120V288Q0 169 84.5 84.5T288 0h832q119 0 203.5 84.5T1408 288"></svg:path>`,
})
export class FaSquareOIcon {
  readonly viewBox = input("0 0 1408 1408")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faStackExchangeIcon],svg[fa-stack-exchange-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1259 997v66q0 85-57.5 144.5T1063 1267h-57l-260 269v-269H217q-81 0-138.5-59.5T21 1063v-66zm0-326v255H21V671zm0-328v255H21V343zm0-140v67H21v-67q0-84 57.5-143.5T217 0h846q81 0 138.5 59.5T1259 203"></svg:path>`,
})
export class FaStackExchangeIcon {
  readonly viewBox = input("0 0 1280 1536")
  readonly width = input("0.84em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faStackOverflowIcon],svg[fa-stack-overflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1289 1632H171v-480H11v640h1438v-640h-160zm-942-524l33-157l783 165l-33 156zm103-374l67-146l725 339l-67 145zm201-356l102-123l614 513l-102 123zM1048 0l477 641l-128 96L920 96zM330 1471v-159h800v159z"></svg:path>`,
})
export class FaStackOverflowIcon {
  readonly viewBox = input("0 0 1536 1792")
  readonly width = input("0.86em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faStarIcon],svg[fa-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1664 615q0 22-26 48l-363 354l86 500q1 7 1 20q0 21-10.5 35.5T1321 1587q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46"></svg:path>`,
})
export class FaStarIcon {
  readonly viewBox = input("0 0 1664 1600")
  readonly width = input("1.04em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faStarHalfIcon],svg[fa-star-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 0v1339l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41"></svg:path>`,
})
export class FaStarHalfIcon {
  readonly viewBox = input("0 0 832 1600")
  readonly width = input("0.52em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faStarHalfEmptyIcon],svg[fa-star-half-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1186 925l257-250l-356-52l-66-10l-30-60l-159-322v963l59 31l318 168l-60-355l-12-66zm452-262l-363 354l86 500q5 33-6 51.5t-34 18.5q-17 0-40-12l-449-236l-449 236q-23 12-40 12q-23 0-34-18.5t-6-51.5l86-500L25 663q-32-32-23-59.5T56 569l502-73L783 41q20-41 49-41q28 0 49 41l225 455l502 73q45 7 54 34.5t-24 59.5"></svg:path>`,
})
export class FaStarHalfEmptyIcon {
  readonly viewBox = input("0 0 1664 1600")
  readonly width = input("1.04em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faStarOIcon],svg[fa-star-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1137 972l306-297l-422-62l-189-382l-189 382l-422 62l306 297l-73 421l378-199l377 199zm527-357q0 22-26 48l-363 354l86 500q1 7 1 20q0 50-41 50q-19 0-40-12l-449-236l-449 236q-22 12-40 12q-21 0-31.5-14.5T301 1537q0-6 2-20l86-500L25 663Q0 636 0 615q0-37 56-46l502-73L783 41q19-41 49-41t49 41l225 455l502 73q56 9 56 46"></svg:path>`,
})
export class FaStarOIcon {
  readonly viewBox = input("0 0 1664 1600")
  readonly width = input("1.04em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSteamIcon],svg[fa-steam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1582 454q0 101-71.5 172.5T1338 698t-172.5-71.5T1094 454t71.5-172.5T1338 210t172.5 71.5T1582 454m-770 742q0-104-73-177t-177-73q-27 0-54 6l104 42q77 31 109.5 106.5T723 1252q-31 77-107 109t-152 1q-21-8-62-24.5t-61-24.5q32 60 91 96.5t130 36.5q104 0 177-73t73-177m830-741q0-126-89.5-215.5T1337 150q-127 0-216.5 89.5T1031 455q0 127 89.5 216t216.5 89q126 0 215.5-89t89.5-216m150 0q0 189-133.5 322T1337 910l-437 319q-12 129-109 218t-229 89q-121 0-214-76t-118-192L0 1176V747l389 157q79-48 173-48q13 0 35 2l284-407q2-187 135.5-319T1337 0q188 0 321.5 133.5T1792 455"></svg:path>`,
})
export class FaSteamIcon {
  readonly viewBox = input("0 0 1792 1536")
  readonly width = input("1.17em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSteamSquareIcon],svg[fa-steam-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1242 519q0-80-57-136.5T1048 326t-136.5 57T855 519q0 80 56.5 136.5T1048 712t137-56.5t57-136.5m-610 588q0 83-58 140.5T434 1305q-56 0-103-29t-72-77q52 20 98 40q60 24 120-1.5t85-86.5q24-60-1.5-120T474 947l-82-33q22-5 42-5q82 0 140 57.5t58 140.5m904-819v960q0 119-84.5 203.5T1248 1536H288q-119 0-203.5-84.5T0 1248v-153l172 69q20 92 93.5 152t168.5 60q104 0 181-70t87-173l345-252q150 0 255.5-105.5T1408 521q0-150-105.5-255.5T1047 160q-148 0-253 104.5T687 517L462 839q-9-1-28-1q-75 0-137 37L0 756V288Q0 169 84.5 84.5T288 0h960q119 0 203.5 84.5T1536 288m-247 233q0 100-71 170.5T1047 762t-170.5-70.5T806 521t70.5-171t170.5-71q101 0 171.5 70.5T1289 521"></svg:path>`,
})
export class FaSteamSquareIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faStepBackwardIcon],svg[fa-step-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M979 13q19-19 32-13t13 32v1472q0 26-13 32t-32-13L269 813q-9-9-13-19v678q0 26-19 45t-45 19H64q-26 0-45-19t-19-45V64q0-26 19-45T64 0h128q26 0 45 19t19 45v678q4-10 13-19z"></svg:path>`,
})
export class FaStepBackwardIcon {
  readonly viewBox = input("0 0 1024 1536")
  readonly width = input("0.67em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faStethoscopeIcon],svg[fa-stethoscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1280 576q0-26-19-45t-45-19t-45 19t-19 45t19 45t45 19t45-19t19-45m128 0q0 62-35.5 111t-92.5 70v395q0 159-131.5 271.5T832 1536t-316.5-112.5T384 1152v-132q-164-20-274-128T0 640V128q0-26 19-45t45-19q6 0 16 2q17-30 47-48t65-18q53 0 90.5 37.5T320 128t-37.5 90.5T192 256q-33 0-64-18v402q0 106 94 181t226 75t226-75t94-181V238q-31 18-64 18q-53 0-90.5-37.5T576 128t37.5-90.5T704 0q35 0 65 18t47 48q10-2 16-2q26 0 45 19t19 45v512q0 144-110 252t-274 128v132q0 106 94 181t226 75t226-75t94-181V757q-57-21-92.5-70T1024 576q0-80 56-136t136-56t136 56t56 136"></svg:path>`,
})
export class FaStethoscopeIcon {
  readonly viewBox = input("0 0 1408 1536")
  readonly width = input("0.92em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faStickyNoteIcon],svg[fa-sticky-note-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 1120v416H96q-40 0-68-28t-28-68V96q0-40 28-68T96 0h1344q40 0 68 28t28 68v928h-416q-40 0-68 28t-28 68m128 32h381q-15 82-65 132l-184 184q-50 50-132 65z"></svg:path>`,
})
export class FaStickyNoteIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faStickyNoteOIcon],svg[fa-sticky-note-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1400 1152h-248v248q29-10 41-22l185-185q12-12 22-41m-280-128h288V128H128v1280h896v-288q0-40 28-68t68-28m416-928v1024q0 40-20 88t-48 76l-184 184q-28 28-76 48t-88 20H96q-40 0-68-28t-28-68V96q0-40 28-68T96 0h1344q40 0 68 28t28 68"></svg:path>`,
})
export class FaStickyNoteOIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faStopIcon],svg[fa-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1536 64v1408q0 26-19 45t-45 19H64q-26 0-45-19t-19-45V64q0-26 19-45T64 0h1408q26 0 45 19t19 45"></svg:path>`,
})
export class FaStopIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faStopCircleIcon],svg[fa-stop-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1088 1056V480q0-14-9-23t-23-9H480q-14 0-23 9t-9 23v576q0 14 9 23t23 9h576q14 0 23-9t9-23m448-288q0 209-103 385.5T1153.5 1433T768 1536t-385.5-103T103 1153.5T0 768t103-385.5T382.5 103T768 0t385.5 103T1433 382.5T1536 768"></svg:path>`,
})
export class FaStopCircleIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faStopCircleOIcon],svg[fa-stop-circle-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 0q209 0 385.5 103T1433 382.5T1536 768t-103 385.5t-279.5 279.5T768 1536t-385.5-103T103 1153.5T0 768t103-385.5T382.5 103T768 0m0 1312q148 0 273-73t198-198t73-273t-73-273t-198-198t-273-73t-273 73t-198 198t-73 273t73 273t198 198t273 73m-288-224q-14 0-23-9t-9-23V480q0-14 9-23t23-9h576q14 0 23 9t9 23v576q0 14-9 23t-23 9z"></svg:path>`,
})
export class FaStopCircleOIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faStreetViewIcon],svg[fa-street-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1408 1504q0 63-61.5 113.5t-164 81t-225 46T704 1760t-253.5-15.5t-225-46t-164-81T0 1504q0-49 33-88.5t91-66.5t118-44.5t131-29.5q26-5 48 10.5t26 41.5q5 26-10.5 48t-41.5 26q-58 10-106 23.5t-76.5 25.5t-48.5 23.5t-27.5 19.5t-8.5 12q3 11 27 26.5t73 33t114 32.5t160.5 25t201.5 10t201.5-10t160.5-25t114-33t73-33.5t27-27.5q-1-4-8.5-11t-27.5-19t-48.5-23.5t-76.5-25t-106-23.5q-26-4-41.5-26t-10.5-48q4-26 26-41.5t48-10.5q71 12 131 29.5t118 44.5t91 66.5t33 88.5m-384-896v384q0 26-19 45t-45 19h-64v384q0 26-19 45t-45 19H576q-26 0-45-19t-19-45v-384h-64q-26 0-45-19t-19-45V608q0-53 37.5-90.5T512 480h384q53 0 90.5 37.5T1024 608m-96-384q0 93-65.5 158.5T704 448t-158.5-65.5T480 224t65.5-158.5T704 0t158.5 65.5T928 224"></svg:path>`,
})
export class FaStreetViewIcon {
  readonly viewBox = input("0 0 1408 1760")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faStrikethroughIcon],svg[fa-strikethrough-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1760 768q14 0 23 9t9 23v64q0 14-9 23t-23 9H32q-14 0-23-9t-9-23v-64q0-14 9-23t23-9zM483 704q-28-35-51-80q-48-98-48-188q0-181 134-309Q651 0 911 0q50 0 167 19q66 12 177 48q10 38 21 118q14 123 14 183q0 18-5 45l-12 3l-84-6l-14-2q-50-149-103-205q-88-91-210-91q-114 0-182 59q-67 58-67 146q0 73 66 140t279 129q69 20 173 66q58 28 95 52zm507 256h411q7 39 7 92q0 111-41 212q-23 56-71 104q-37 35-109 81q-80 48-153 66q-80 21-203 21q-114 0-195-23l-140-40q-57-16-72-28q-8-8-8-22v-13q0-108-2-156q-1-30 0-68l2-37v-44l102-2q15 34 30 71t22.5 56t12.5 27q35 57 80 94q43 36 105 57q59 22 132 22q64 0 139-27q77-26 122-86q47-61 47-129q0-84-81-157q-34-29-137-71"></svg:path>`,
})
export class FaStrikethroughIcon {
  readonly viewBox = input("0 0 1792 1536")
  readonly width = input("1.17em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faStumbleuponIcon],svg[fa-stumbleupon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1062 552V434q0-42-30-72t-72-30t-72 30t-30 72v612q0 175-126 299t-303 124q-178 0-303.5-125.5T0 1040V774h328v262q0 43 30 72.5t72 29.5t72-29.5t30-72.5V416q0-171 126.5-292T960 3q176 0 302 122t126 294v136l-195 58zm530 222h328v266q0 178-125.5 303.5T1491 1469q-177 0-303-124.5T1062 1044V776l131 61l195-58v270q0 42 30 71.5t72 29.5t72-29.5t30-71.5z"></svg:path>`,
})
export class FaStumbleuponIcon {
  readonly viewBox = input("0 0 1920 1472")
  readonly width = input("1.31em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faStumbleuponCircleIcon],svg[fa-stumbleupon-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m866 711l90-27v-62q0-79-58-135t-138-56t-138 55.5T564 621v283q0 20-14 33.5T517 951t-32.5-13.5T471 904V784H320v122q0 82 57.5 139t139.5 57q81 0 138.5-56.5T713 909V629q0-19 13.5-33t33.5-14q19 0 32.5 14t13.5 33v54zm333 195V784h-150v126q0 20-13.5 33.5T1002 957q-19 0-32.5-14T956 910V787l-90 26l-60-28v123q0 80 58 137t139 57t138.5-57t57.5-139m337-138q0 209-103 385.5T1153.5 1433T768 1536t-385.5-103T103 1153.5T0 768t103-385.5T382.5 103T768 0t385.5 103T1433 382.5T1536 768"></svg:path>`,
})
export class FaStumbleuponCircleIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSubscriptIcon],svg[fa-subscript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M897 1113v167H649l-159-252l-24-42q-8-9-11-21h-3q-1 3-2.5 6.5t-3.5 8t-3 6.5q-10 20-25 44l-155 250H5v-167h128l197-291l-185-272H8V382h276l139 228q2 4 23 42q8 9 11 21h3q3-9 11-21l25-42l140-228h257v168H768L584 817l204 296zm639 217v206h-514l-4-27q-3-45-3-46q0-64 26-117t65-86.5t84-65t84-54.5t65-54t26-64q0-38-29.5-62.5T1265 935q-51 0-97 39q-14 11-36 38l-105-92q26-37 63-66q80-65 188-65q110 0 178 59.5t68 158.5q0 66-34.5 118.5t-84 86t-99.5 62.5t-87 63t-41 73h232v-80z"></svg:path>`,
})
export class FaSubscriptIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSubwayIcon],svg[fa-subway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1088 0q185 0 316.5 93.5T1536 320v896q0 130-125.5 222t-305.5 97l213 202q16 15 8 35t-30 20H240q-22 0-30-20t8-35l213-202q-180-5-305.5-97T0 1216V320Q0 187 131.5 93.5T448 0zM288 1312q66 0 113-47t47-113t-47-113t-113-47t-113 47t-47 113t47 113t113 47m416-544V256H160v512zm544 544q66 0 113-47t47-113t-47-113t-113-47t-113 47t-47 113t47 113t113 47m160-544V256H832v512z"></svg:path>`,
})
export class FaSubwayIcon {
  readonly viewBox = input("0 0 1536 1792")
  readonly width = input("0.86em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSuitcaseIcon],svg[fa-suitcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 256h512V128H640zm-352 0v1280h-64q-92 0-158-66T0 1312V480q0-92 66-158t158-66zm1120 0v1280H384V256h128V96q0-40 28-68t68-28h576q40 0 68 28t28 68v160zm384 224v832q0 92-66 158t-158 66h-64V256h64q92 0 158 66t66 158"></svg:path>`,
})
export class FaSuitcaseIcon {
  readonly viewBox = input("0 0 1792 1536")
  readonly width = input("1.17em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSunOIcon],svg[fa-sun-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1440 896q0-117-45.5-223.5t-123-184t-184-123T864 320t-223.5 45.5t-184 123t-123 184T288 896t45.5 223.5t123 184t184 123T864 1472t223.5-45.5t184-123t123-184T1440 896m276 277q-4 15-20 20l-292 96v306q0 16-13 26q-15 10-29 4l-292-94l-180 248q-10 13-26 13t-26-13l-180-248l-292 94q-14 6-29-4q-13-10-13-26v-306l-292-96q-16-5-20-20q-5-17 4-29l180-248L16 648q-9-13-4-29q4-15 20-20l292-96V197q0-16 13-26q15-10 29-4l292 94L838 13q9-12 26-12t26 12l180 248l292-94q14-6 29 4q13 10 13 26v306l292 96q16 5 20 20q5 16-4 29l-180 248l180 248q9 12 4 29"></svg:path>`,
})
export class FaSunOIcon {
  readonly viewBox = input("0 0 1728 1792")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSuperpowersIcon],svg[fa-superpowers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1473 929q7-118-33-226.5t-113-189t-177-131T929 325q-116-7-225.5 32t-192 110.5t-135 175T317 863q-7 118 33 226.5t113 189t177.5 131T862 1467q155 9 293-59t224-195.5t94-283.5M1792 0l-349 348q120 117 180.5 272t50.5 321q-11 183-102 339t-241 255.5T999 1660L0 1792l347-347q-120-116-180.5-271.5T116 852q11-184 102-340t241.5-255.5T792 132q167-22 500-66t500-66"></svg:path>`,
})
export class FaSuperpowersIcon {
  readonly viewBox = input("0 0 1792 1792")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faSuperscriptIcon],svg[fa-superscript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M897 1241v167H649l-159-252l-24-42q-8-9-11-21h-3q-1 3-2.5 6.5t-3.5 8t-3 6.5q-10 20-25 44l-155 250H5v-167h128l197-291l-185-272H8V510h276l139 228q2 4 23 42q8 9 11 21h3q3-9 11-21l25-42l140-228h257v168H768L584 945l204 296zm637-679v206h-514l-3-27q-4-28-4-46q0-64 26-117t65-86.5t84-65t84-54.5t65-54t26-64q0-38-29.5-62.5T1263 167q-51 0-97 39q-14 11-36 38l-105-92q26-37 63-66q83-65 188-65q110 0 178 59.5t68 158.5q0 56-24.5 103t-62 76.5T1354 477t-82 50.5t-65.5 51.5t-30.5 63h232v-80z"></svg:path>`,
})
export class FaSuperscriptIcon {
  readonly viewBox = input("0 0 1536 1408")
  readonly width = input("1.1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faTableIcon],svg[fa-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1248v-192q0-14-9-23t-23-9H160q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23m0-384V672q0-14-9-23t-23-9H160q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23m512 384v-192q0-14-9-23t-23-9H672q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23M512 480V288q0-14-9-23t-23-9H160q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23m512 384V672q0-14-9-23t-23-9H672q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23m512 384v-192q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23m-512-768V288q0-14-9-23t-23-9H672q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23m512 384V672q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23m0-384V288q0-14-9-23t-23-9h-320q-14 0-23 9t-9 23v192q0 14 9 23t23 9h320q14 0 23-9t9-23m128-320v1088q0 66-47 113t-113 47H160q-66 0-113-47T0 1248V160Q0 94 47 47T160 0h1344q66 0 113 47t47 113"></svg:path>`,
})
export class FaTableIcon {
  readonly viewBox = input("0 0 1664 1408")
  readonly width = input("1.19em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faTabletIcon],svg[fa-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 1280q0-26-19-45t-45-19t-45 19t-19 45t19 45t45 19t45-19t19-45m384-160V160q0-13-9.5-22.5T992 128H160q-13 0-22.5 9.5T128 160v960q0 13 9.5 22.5t22.5 9.5h832q13 0 22.5-9.5t9.5-22.5m128-960v1088q0 66-47 113t-113 47H160q-66 0-113-47T0 1248V160Q0 94 47 47T160 0h832q66 0 113 47t47 113"></svg:path>`,
})
export class FaTabletIcon {
  readonly viewBox = input("0 0 1152 1408")
  readonly width = input("0.82em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faTagIcon],svg[fa-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 320q0-53-37.5-90.5T320 192t-90.5 37.5T192 320t37.5 90.5T320 448t90.5-37.5T448 320m1067 576q0 53-37 90l-491 492q-39 37-91 37q-53 0-90-37L91 762q-38-37-64.5-101T0 544V128q0-52 38-90t90-38h416q53 0 117 26.5T763 91l715 714q37 39 37 91"></svg:path>`,
})
export class FaTagIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faTagsIcon],svg[fa-tags-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 320q0-53-37.5-90.5T320 192t-90.5 37.5T192 320t37.5 90.5T320 448t90.5-37.5T448 320m1067 576q0 53-37 90l-491 492q-39 37-91 37q-53 0-90-37L91 762q-38-37-64.5-101T0 544V128q0-52 38-90t90-38h416q53 0 117 26.5T763 91l715 714q37 39 37 91m384 0q0 53-37 90l-491 492q-39 37-91 37q-36 0-59-14t-53-45l470-470q37-37 37-90q0-52-37-91L923 91q-38-38-102-64.5T704 0h224q53 0 117 26.5T1147 91l715 714q37 39 37 91"></svg:path>`,
})
export class FaTagsIcon {
  readonly viewBox = input("0 0 1920 1536")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faTasksIcon],svg[fa-tasks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 1280h640v-128h-640zM640 768h1024V640H640zm640-512h384V128h-384zm512 832v256q0 26-19 45t-45 19H64q-26 0-45-19t-19-45v-256q0-26 19-45t45-19h1664q26 0 45 19t19 45m0-512v256q0 26-19 45t-45 19H64q-26 0-45-19T0 832V576q0-26 19-45t45-19h1664q26 0 45 19t19 45m0-512v256q0 26-19 45t-45 19H64q-26 0-45-19T0 320V64q0-26 19-45T64 0h1664q26 0 45 19t19 45"></svg:path>`,
})
export class FaTasksIcon {
  readonly viewBox = input("0 0 1792 1408")
  readonly width = input("1.28em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faTelegramIcon],svg[fa-telegram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1189 1307l147-693q9-44-10.5-63t-51.5-7L410 877q-29 11-39.5 25t-2.5 26.5t32 19.5l221 69l513-323q21-14 32-6q7 5-4 15l-415 375l-16 228q23 0 45-22l108-104l224 165q64 36 81-38m603-411q0 182-71 348t-191 286t-286 191t-348 71t-348-71t-286-191t-191-286T0 896t71-348t191-286T548 71T896 0t348 71t286 191t191 286t71 348"></svg:path>`,
})
export class FaTelegramIcon {
  readonly viewBox = input("0 0 1792 1792")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faTelevisionIcon],svg[fa-television-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 1120V160q0-13-9.5-22.5T1760 128H160q-13 0-22.5 9.5T128 160v960q0 13 9.5 22.5t22.5 9.5h1600q13 0 22.5-9.5t9.5-22.5m128-960v960q0 66-47 113t-113 47h-736v128h352q14 0 23 9t9 23v64q0 14-9 23t-23 9H544q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h352v-128H160q-66 0-113-47T0 1120V160Q0 94 47 47T160 0h1600q66 0 113 47t47 113"></svg:path>`,
})
export class FaTelevisionIcon {
  readonly viewBox = input("0 0 1920 1536")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faTencentWeiboIcon],svg[fa-tencent-weibo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M810 572q0 80-57 136.5T617 765q-60 0-111-35q-62 67-115 146q-247 371-202 859q1 22-12.5 38.5T142 1792h-5q-20 0-35-13.5T85 1745q-14-126-3.5-247.5t29.5-217t54-186T234 939t74-125q61-90 132-165q-16-35-16-77q0-80 56.5-136.5T617 379t136.5 56.5T810 572m381 11q0 158-78 292t-212.5 212t-292.5 78q-64 0-131-14q-21-5-32.5-23.5T438 1088q5-20 23-31.5t39-7.5q51 13 108 13q97 0 186-38t153-102t102-153t38-186t-38-186t-102-153t-153-102t-186-38t-186 38t-153 102t-102 153t-38 186q0 114 52 218q10 20 3.5 40T159 871t-39.5 3T89 848Q25 725 25 583q0-119 46.5-227T196 170T382 46T608 0q158 0 292.5 78T1113 290.5t78 292.5"></svg:path>`,
})
export class FaTencentWeiboIcon {
  readonly viewBox = input("0 0 1216 1792")
  readonly width = input("0.68em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faTerminalIcon],svg[fa-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m585 727l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393L23 311q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23m1079 457v64q0 14-9 23t-23 9H672q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h960q14 0 23 9t9 23"></svg:path>`,
})
export class FaTerminalIcon {
  readonly viewBox = input("0 0 1664 1280")
  readonly width = input("1.3em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faTextHeightIcon],svg[fa-text-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1744 1280q33 0 42 18.5t-11 44.5l-126 162q-20 26-49 26t-49-26l-126-162q-20-26-11-44.5t42-18.5h80V256h-80q-33 0-42-18.5t11-44.5l126-162q20-26 49-26t49 26l126 162q20 26 11 44.5t-42 18.5h-80v1024zM81 1l54 27q12 5 211 5q44 0 132-2t132-2q36 0 107.5.5T825 30h293q6 0 21 .5t20.5 0t16-3t17.5-9T1208 1l42-1q4 0 14 .5t14 .5q2 112 2 336q0 80-5 109q-39 14-68 18q-25-44-54-128q-3-9-11-48t-14.5-73.5t-7.5-35.5q-6-8-12-12.5t-15.5-6t-13-2.5t-18-.5t-16.5.5q-17 0-66.5-.5T904 157t-64 2t-71 6q-9 81-8 136q0 94 2 388t2 455q0 16-2.5 71.5t0 91.5t12.5 69q40 21 124 42.5t120 37.5q5 40 5 50q0 14-3 29l-34 1q-76 2-218-8t-207-10q-50 0-151 9t-152 9q-3-51-3-52v-9q17-27 61.5-43t98.5-29t78-27q19-42 19-383q0-101-3-303t-3-303V270q0-2 .5-15.5t.5-25t-1-25.5t-3-24t-5-14q-11-12-162-12q-33 0-93 12t-80 26q-19 13-34 72.5t-31.5 111T56 429q-42-26-56-44V2z"></svg:path>`,
})
export class FaTextHeightIcon {
  readonly viewBox = input("0 0 1792 1536")
  readonly width = input("1.17em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faTextWidthIcon],svg[fa-text-width-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m81 1l54 27q12 5 211 5q44 0 132-2t132-2q70 0 246.5-1t304.5-.5t247 4.5q33 1 56-31l42-1q4 0 14 .5t14 .5q2 112 2 336q0 80-5 109q-39 14-68 18q-25-44-54-128q-3-9-11-47.5t-15-73.5t-7-36q-10-13-27-19q-5-2-66-2q-30 0-93-1t-103-1t-94 2t-96 7q-9 81-8 136l1 152v-52q0 55 1 154t1.5 180t.5 153q0 16-2.5 71.5t0 91.5t12.5 69q40 21 124 42.5t120 37.5q5 40 5 50q0 14-3 29l-34 1q-76 2-218-8t-207-10q-50 0-151 9t-152 9q-3-51-3-52v-9q17-27 61.5-43t98.5-29t78-27q7-16 11.5-74t6-145.5t1.5-155t-.5-153.5t-.5-89q0-7-2.5-21.5T635 459q0-7 .5-44t1-73t0-76.5t-3-67.5t-6.5-32q-11-12-162-12q-41 0-163 13.5T164 192q-19 12-34 71.5T98.5 375T56 429q-42-26-56-44V2zm1229 1282q12 0 42 19.5t57.5 41.5t59.5 49t36 30q26 21 26 49t-26 49q-4 3-36 30t-59.5 49t-57.5 41.5t-42 19.5q-13 0-20.5-10.5t-10-28.5t-2.5-33.5t1.5-33t1.5-19.5H256q0 2 1.5 19.5t1.5 33t-2.5 33.5t-10 28.5T226 1661q-12 0-42-19.5t-57.5-41.5t-59.5-49t-36-30q-26-21-26-49t26-49q4-3 36-30t59.5-49t57.5-41.5t42-19.5q13 0 20.5 10.5t10 28.5t2.5 33.5t-1.5 33t-1.5 19.5h1024q0-2-1.5-19.5t-1.5-33t2.5-33.5t10-28.5t20.5-10.5"></svg:path>`,
})
export class FaTextWidthIcon {
  readonly viewBox = input("0 0 1536 1664")
  readonly width = input("0.93em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faThIcon],svg[fa-th-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1120v192q0 40-28 68t-68 28H96q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68m0-512v192q0 40-28 68t-68 28H96q-40 0-68-28T0 800V608q0-40 28-68t68-28h320q40 0 68 28t28 68m640 512v192q0 40-28 68t-68 28H736q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68M512 96v192q0 40-28 68t-68 28H96q-40 0-68-28T0 288V96q0-40 28-68T96 0h320q40 0 68 28t28 68m640 512v192q0 40-28 68t-68 28H736q-40 0-68-28t-28-68V608q0-40 28-68t68-28h320q40 0 68 28t28 68m640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68M1152 96v192q0 40-28 68t-68 28H736q-40 0-68-28t-28-68V96q0-40 28-68t68-28h320q40 0 68 28t28 68m640 512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68V608q0-40 28-68t68-28h320q40 0 68 28t28 68m0-512v192q0 40-28 68t-68 28h-320q-40 0-68-28t-28-68V96q0-40 28-68t68-28h320q40 0 68 28t28 68"></svg:path>`,
})
export class FaThIcon {
  readonly viewBox = input("0 0 1792 1408")
  readonly width = input("1.28em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faThLargeIcon],svg[fa-th-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 896v384q0 52-38 90t-90 38H128q-52 0-90-38t-38-90V896q0-52 38-90t90-38h512q52 0 90 38t38 90m0-768v384q0 52-38 90t-90 38H128q-52 0-90-38T0 512V128q0-52 38-90t90-38h512q52 0 90 38t38 90m896 768v384q0 52-38 90t-90 38h-512q-52 0-90-38t-38-90V896q0-52 38-90t90-38h512q52 0 90 38t38 90m0-768v384q0 52-38 90t-90 38h-512q-52 0-90-38t-38-90V128q0-52 38-90t90-38h512q52 0 90 38t38 90"></svg:path>`,
})
export class FaThLargeIcon {
  readonly viewBox = input("0 0 1664 1408")
  readonly width = input("1.19em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faThListIcon],svg[fa-th-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1120v192q0 40-28 68t-68 28H96q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h320q40 0 68 28t28 68m0-512v192q0 40-28 68t-68 28H96q-40 0-68-28T0 800V608q0-40 28-68t68-28h320q40 0 68 28t28 68m1280 512v192q0 40-28 68t-68 28H736q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h960q40 0 68 28t28 68M512 96v192q0 40-28 68t-68 28H96q-40 0-68-28T0 288V96q0-40 28-68T96 0h320q40 0 68 28t28 68m1280 512v192q0 40-28 68t-68 28H736q-40 0-68-28t-28-68V608q0-40 28-68t68-28h960q40 0 68 28t28 68m0-512v192q0 40-28 68t-68 28H736q-40 0-68-28t-28-68V96q0-40 28-68t68-28h960q40 0 68 28t28 68"></svg:path>`,
})
export class FaThListIcon {
  readonly viewBox = input("0 0 1792 1408")
  readonly width = input("1.28em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faThemeisleIcon],svg[fa-themeisle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M852 309q0 29-17 52.5T790 385t-45-23.5t-17-52.5t17-52.5t45-23.5t45 23.5t17 52.5M688 1685v-114q0-30-20.5-51.5T617 1498t-50 21.5t-20 51.5v114q0 30 20.5 52t49.5 22q30 0 50.5-22t20.5-52m172 0v-114q0-30-20-51.5t-50-21.5t-50.5 21.5T719 1571v114q0 30 20.5 52t50.5 22q29 0 49.5-22t20.5-52m174 0v-114q0-30-20.5-51.5T963 1498t-50.5 21.5T892 1571v114q0 30 20.5 52t50.5 22t50.5-22t20.5-52m174 0v-114q0-30-20.5-51.5T1137 1498t-50.5 21.5t-20.5 51.5v114q0 30 20.5 52t50.5 22t50.5-22t20.5-52m268-684q-84 160-232 259.5T921 1360q-123 0-229.5-51.5t-178.5-137T400 974t-41-232q0-88 21-174q-104 175-104 390q0 162 65 312t185 251q30-57 91-57q56 0 86 50q32-50 87-50q56 0 86 50q32-50 87-50t87 50q30-50 86-50q28 0 52.5 15.5t37.5 40.5q112-94 177-231.5t73-287.5m-150-29q0-75-72-75q-17 0-47 6q-95 19-149 19q-226 0-226-243q0-86 30-204q-83 127-83 275q0 150 89 260.5t235 110.5q111 0 210-70q13-48 13-79M884 313q0-50-32-89.5T771 184t-81 39.5t-32 89.5q0 51 31.5 90.5T771 443t81.5-39.5T884 313m629 339q0-96-37.5-179t-113-137t-173.5-54q-77 0-149 35t-127 94q-48 159-48 268q0 104 45.5 157t147.5 53q53 0 142-19q36-6 53-6q51 0 77.5 28t26.5 80q0 26-4 46q75-68 117.5-165.5T1513 652m279 217q0 111-33.5 249.5T1665 1323q-58 64-195 142.5T1242 1570l-4 1v114q0 43-29.5 75t-72.5 32q-56 0-86-50q-32 50-87 50t-87-50q-30 50-86 50q-55 0-87-50q-30 50-86 50q-47 0-75-33.5t-28-81.5q-90 68-198 68q-118 0-211-80q54-1 106-20q-113-31-182-127q32 7 71 7q89 0 164-46q-192-192-240-306q-24-56-24-160q0-57 9-125.5T40.5 741t55-141T182 495t120-42q59 0 81 52q19-29 42-54q2-3 12-13t13-16q10-15 23-38t25-42t28-39q87-111 211.5-177T998 60q35 0 62 4q59-64 146-64q83 0 140 57q5 5 5 12q0 5-6 13.5t-12.5 16t-16 17L1306 126q17 6 36 18t19 24q0 6-16 25q157 138 197 378q25-30 60-30q45 0 100 49q90 80 90 279"></svg:path>`,
})
export class FaThemeisleIcon {
  readonly viewBox = input("0 0 1792 1792")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faThermometerIcon],svg[fa-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 1344q0 80-56 136t-136 56t-136-56t-56-136q0-60 35-110t93-71V256h128v907q58 21 93 71t35 110m128 0q0-77-34-144t-94-112V320q0-80-56-136t-136-56t-136 56t-56 136v768q-60 45-94 112t-34 144q0 133 93.5 226.5T448 1664t226.5-93.5T768 1344m128 0q0 185-131.5 316.5T448 1792t-316.5-131.5T0 1344q0-182 128-313V320q0-133 93.5-226.5T448 0t226.5 93.5T768 320v711q128 131 128 313m128-576v128H832V768zm0-256v128H832V512zm0-256v128H832V256z"></svg:path>`,
})
export class FaThermometerIcon {
  readonly viewBox = input("0 0 1024 1792")
  readonly width = input("0.58em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faThermometer0Icon],svg[fa-thermometer-0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 1344q0 80-56 136t-136 56t-136-56t-56-136q0-79 56-135.5t136-56.5t136 56.5t56 135.5m128 0q0-77-34-144t-94-112V320q0-80-56-136t-136-56t-136 56t-56 136v768q-60 45-94 112t-34 144q0 133 93.5 226.5T448 1664t226.5-93.5T768 1344m128 0q0 185-131.5 316.5T448 1792t-316.5-131.5T0 1344q0-182 128-313V320q0-133 93.5-226.5T448 0t226.5 93.5T768 320v711q128 131 128 313m128-576v128H832V768zm0-256v128H832V512zm0-256v128H832V256z"></svg:path>`,
})
export class FaThermometer0Icon {
  readonly viewBox = input("0 0 1024 1792")
  readonly width = input("0.58em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faThermometer1Icon],svg[fa-thermometer-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 1344q0 80-56 136t-136 56t-136-56t-56-136q0-60 35-110t93-71v-139h128v139q58 21 93 71t35 110m128 0q0-77-34-144t-94-112V320q0-80-56-136t-136-56t-136 56t-56 136v768q-60 45-94 112t-34 144q0 133 93.5 226.5T448 1664t226.5-93.5T768 1344m128 0q0 185-131.5 316.5T448 1792t-316.5-131.5T0 1344q0-182 128-313V320q0-133 93.5-226.5T448 0t226.5 93.5T768 320v711q128 131 128 313m128-576v128H832V768zm0-256v128H832V512zm0-256v128H832V256z"></svg:path>`,
})
export class FaThermometer1Icon {
  readonly viewBox = input("0 0 1024 1792")
  readonly width = input("0.58em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faThermometer2Icon],svg[fa-thermometer-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 1344q0 80-56 136t-136 56t-136-56t-56-136q0-60 35-110t93-71V768h128v395q58 21 93 71t35 110m128 0q0-77-34-144t-94-112V320q0-80-56-136t-136-56t-136 56t-56 136v768q-60 45-94 112t-34 144q0 133 93.5 226.5T448 1664t226.5-93.5T768 1344m128 0q0 185-131.5 316.5T448 1792t-316.5-131.5T0 1344q0-182 128-313V320q0-133 93.5-226.5T448 0t226.5 93.5T768 320v711q128 131 128 313m128-576v128H832V768zm0-256v128H832V512zm0-256v128H832V256z"></svg:path>`,
})
export class FaThermometer2Icon {
  readonly viewBox = input("0 0 1024 1792")
  readonly width = input("0.58em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faThermometer3Icon],svg[fa-thermometer-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 1344q0 80-56 136t-136 56t-136-56t-56-136q0-60 35-110t93-71V512h128v651q58 21 93 71t35 110m128 0q0-77-34-144t-94-112V320q0-80-56-136t-136-56t-136 56t-56 136v768q-60 45-94 112t-34 144q0 133 93.5 226.5T448 1664t226.5-93.5T768 1344m128 0q0 185-131.5 316.5T448 1792t-316.5-131.5T0 1344q0-182 128-313V320q0-133 93.5-226.5T448 0t226.5 93.5T768 320v711q128 131 128 313m128-576v128H832V768zm0-256v128H832V512zm0-256v128H832V256z"></svg:path>`,
})
export class FaThermometer3Icon {
  readonly viewBox = input("0 0 1024 1792")
  readonly width = input("0.58em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faThumbTackIcon],svg[fa-thumb-tack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 736V288q0-14-9-23t-23-9t-23 9t-9 23v448q0 14 9 23t23 9t23-9t9-23m672 352q0 26-19 45t-45 19H659l-51 483q-2 12-10.5 20.5T577 1664h-1q-27 0-32-27l-76-485H64q-26 0-45-19t-19-45q0-123 78.5-221.5T256 768V256q-52 0-90-38t-38-90t38-90t90-38h640q52 0 90 38t38 90t-38 90t-90 38v512q99 0 177.5 98.5T1152 1088"></svg:path>`,
})
export class FaThumbTackIcon {
  readonly viewBox = input("0 0 1152 1664")
  readonly width = input("0.7em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faThumbsDownIcon],svg[fa-thumbs-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 320q0 26-19 45t-45 19q-27 0-45.5-19T128 320q0-27 18.5-45.5T192 256q26 0 45 18.5t19 45.5m160 512V192q0-26-19-45t-45-19H64q-26 0-45 19T0 192v640q0 26 19 45t45 19h288q26 0 45-19t19-45m1129-149q55 61 55 149q-1 78-57.5 135t-134.5 57h-277q4 14 8 24t11 22t10 18q18 37 27 57t19 58.5t10 76.5q0 24-.5 39t-5 45t-12 50t-24 45t-40 40.5t-60 26T992 1536q-26 0-45-19q-20-20-34-50t-19.5-52t-12.5-61q-9-42-13.5-60.5T850 1245t-31-48q-33-33-101-120q-49-64-101-121t-76-59q-25-2-43-20.5T480 833V192q0-26 19-44.5t45-19.5q35-1 158-44q77-26 120.5-39.5t121.5-29T1088 0h129q133 2 197 78q58 69 49 181q39 37 54 94q17 61 0 117q46 61 43 137q0 32-15 76"></svg:path>`,
})
export class FaThumbsDownIcon {
  readonly viewBox = input("0 0 1600 1536")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faThumbsOUpIcon],svg[fa-thumbs-o-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 1344q0-26-19-45t-45-19t-45 19t-19 45t19 45t45 19t45-19t19-45m1152-576q0-51-39-89.5t-89-38.5H928q0-58 48-159.5t48-160.5q0-98-32-145t-128-47q-26 26-38 85t-30.5 125.5T736 448q-22 23-77 91q-4 5-23 30t-31.5 41t-34.5 42.5t-40 44t-38.5 35.5t-40 27t-35.5 9h-32v640h32q13 0 31.5 3t33 6.5t38 11t35 11.5t35.5 12.5t29 10.5q211 73 342 73h121q192 0 192-167q0-26-5-56q30-16 47.5-52.5t17.5-73.5t-18-69q53-50 53-119q0-25-10-55.5t-25-47.5q32-1 53.5-47t21.5-81m128-1q0 89-49 163q9 33 9 69q0 77-38 144q3 21 3 43q0 101-60 178q1 139-85 219.5t-227 80.5H960q-96 0-189.5-22.5T554 1576q-116-40-138-40H128q-53 0-90.5-37.5T0 1408V768q0-53 37.5-90.5T128 640h274q36-24 137-155q58-75 107-128q24-25 35.5-85.5T712 145t62-108q39-37 90-37q84 0 151 32.5T1117 134t35 186q0 93-48 192h176q104 0 180 76t76 179"></svg:path>`,
})
export class FaThumbsOUpIcon {
  readonly viewBox = input("0 0 1536 1664")
  readonly width = input("0.93em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faThumbsUpIcon],svg[fa-thumbs-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 1216q0-26-19-45t-45-19q-27 0-45.5 19t-18.5 45q0 27 18.5 45.5T192 1280q26 0 45-18.5t19-45.5m160-512v640q0 26-19 45t-45 19H64q-26 0-45-19t-19-45V704q0-26 19-45t45-19h288q26 0 45 19t19 45m1184 0q0 86-55 149q15 44 15 76q3 76-43 137q17 56 0 117q-15 57-54 94q9 112-49 181q-64 76-197 78h-129q-66 0-144-15.5t-121.5-29T702 1452q-123-43-158-44q-26-1-45-19.5t-19-44.5V703q0-25 18-43.5t43-20.5q24-2 76-59t101-121q68-87 101-120q18-18 31-48t17.5-48.5T881 182q7-39 12.5-61T913 69t34-50q19-19 45-19q46 0 82.5 10.5t60 26t40 40.5t24 45t12 50t5 45t.5 39q0 38-9.5 76t-19 60t-27.5 56q-3 6-10 18t-11 22t-8 24h277q78 0 135 57t57 135"></svg:path>`,
})
export class FaThumbsUpIcon {
  readonly viewBox = input("0 0 1600 1536")
  readonly width = input("1.05em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faTicketIcon],svg[fa-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m992 420l316 316l-572 572l-316-316zm-211 979l618-618q19-19 19-45t-19-45l-362-362q-18-18-45-18t-45 18L329 947q-19 19-19 45t19 45l362 362q18 18 45 18t45-18m889-637l-907 908q-37 37-90.5 37t-90.5-37l-126-126q56-56 56-136t-56-136t-136-56t-136 56L59 1146q-37-37-37-90.5T59 965L966 59q37-37 90.5-37t90.5 37l125 125q-56 56-56 136t56 136t136 56t136-56l126 125q37 37 37 90.5t-37 90.5"></svg:path>`,
})
export class FaTicketIcon {
  readonly viewBox = input("0 0 1728 1728")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faTimesCircleIcon],svg[fa-times-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1149 994q0-26-19-45L949 768l181-181q19-19 19-45q0-27-19-46l-90-90q-19-19-46-19q-26 0-45 19L768 587L587 406q-19-19-45-19q-27 0-46 19l-90 90q-19 19-19 46q0 26 19 45l181 181l-181 181q-19 19-19 45q0 27 19 46l90 90q19 19 46 19q26 0 45-19l181-181l181 181q19 19 45 19q27 0 46-19l90-90q19-19 19-46m387-226q0 209-103 385.5T1153.5 1433T768 1536t-385.5-103T103 1153.5T0 768t103-385.5T382.5 103T768 0t385.5 103T1433 382.5T1536 768"></svg:path>`,
})
export class FaTimesCircleIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faTimesCircleOIcon],svg[fa-times-circle-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1097 951l-146 146q-10 10-23 10t-23-10L768 960l-137 137q-10 10-23 10t-23-10L439 951q-10-10-10-23t10-23l137-137l-137-137q-10-10-10-23t10-23l146-146q10-10 23-10t23 10l137 137l137-137q10-10 23-10t23 10l146 146q10 10 10 23t-10 23L960 768l137 137q10 10 10 23t-10 23m215-183q0-148-73-273t-198-198t-273-73t-273 73t-198 198t-73 273t73 273t198 198t273 73t273-73t198-198t73-273m224 0q0 209-103 385.5T1153.5 1433T768 1536t-385.5-103T103 1153.5T0 768t103-385.5T382.5 103T768 0t385.5 103T1433 382.5T1536 768"></svg:path>`,
})
export class FaTimesCircleOIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faTimesRectangleIcon],svg[fa-times-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1175 1193l146-146q10-10 10-23t-10-23l-233-233l233-233q10-10 10-23t-10-23l-146-146q-10-10-23-10t-23 10L896 576L663 343q-10-10-23-10t-23 10L471 489q-10 10-10 23t10 23l233 233l-233 233q-10 10-10 23t10 23l146 146q10 10 23 10t23-10l233-233l233 233q10 10 23 10t23-10m617-1033v1216q0 66-47 113t-113 47H160q-66 0-113-47T0 1376V160Q0 94 47 47T160 0h1472q66 0 113 47t47 113"></svg:path>`,
})
export class FaTimesRectangleIcon {
  readonly viewBox = input("0 0 1792 1536")
  readonly width = input("1.17em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faTimesRectangleOIcon],svg[fa-times-rectangle-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1257 983l-146 146q-10 10-23 10t-23-10L896 960l-169 169q-10 10-23 10t-23-10L535 983q-10-10-10-23t10-23l169-169l-169-169q-10-10-10-23t10-23l146-146q10-10 23-10t23 10l169 169l169-169q10-10 23-10t23 10l146 146q10 10 10 23t-10 23l-169 169l169 169q10 10 10 23t-10 23M256 1280h1280V256H256zM1792 160v1216q0 66-47 113t-113 47H160q-66 0-113-47T0 1376V160Q0 94 47 47T160 0h1472q66 0 113 47t47 113"></svg:path>`,
})
export class FaTimesRectangleOIcon {
  readonly viewBox = input("0 0 1792 1536")
  readonly width = input("1.17em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faTintIcon],svg[fa-tint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1088q0-36-20-69q-1-1-15.5-22.5t-25.5-38t-25-44t-21-50.5q-4-16-21-16t-21 16q-7 23-21 50.5t-25 44t-25.5 38T276 1019q-20 33-20 69q0 53 37.5 90.5T384 1216t90.5-37.5T512 1088m512-128q0 212-150 362t-362 150t-362-150T0 960q0-145 81-275q6-9 62.5-90.5t101-151t99.5-178T427 64q9-30 34-47t51-17t51.5 17T597 64q28 93 83 201.5t99.5 178t101 151T943 685q81 127 81 275"></svg:path>`,
})
export class FaTintIcon {
  readonly viewBox = input("0 0 1024 1472")
  readonly width = input("0.7em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faToggleOffIcon],svg[fa-toggle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1152 640q0-104-40.5-198.5T1002 278T838.5 168.5T640 128t-198.5 40.5T278 278T168.5 441.5T128 640t40.5 198.5T278 1002t163.5 109.5T640 1152t198.5-40.5T1002 1002t109.5-163.5T1152 640m768 0q0-104-40.5-198.5T1770 278t-163.5-109.5T1408 128h-386q119 90 188.5 224t69.5 288t-69.5 288t-188.5 224h386q104 0 198.5-40.5T1770 1002t109.5-163.5T1920 640m128 0q0 130-51 248.5t-136.5 204t-204 136.5t-248.5 51H640q-130 0-248.5-51t-204-136.5T51 888.5T0 640t51-248.5t136.5-204T391.5 51T640 0h768q130 0 248.5 51t204 136.5t136.5 204t51 248.5"></svg:path>`,
})
export class FaToggleOffIcon {
  readonly viewBox = input("0 0 2048 1280")
  readonly width = input("1.6em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faToggleOnIcon],svg[fa-toggle-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 640q0-130 51-248.5t136.5-204T391.5 51T640 0h768q130 0 248.5 51t204 136.5t136.5 204t51 248.5t-51 248.5t-136.5 204t-204 136.5t-248.5 51H640q-130 0-248.5-51t-204-136.5T51 888.5T0 640m1408 512q104 0 198.5-40.5T1770 1002t109.5-163.5T1920 640t-40.5-198.5T1770 278t-163.5-109.5T1408 128t-198.5 40.5T1046 278T936.5 441.5T896 640t40.5 198.5T1046 1002t163.5 109.5T1408 1152"></svg:path>`,
})
export class FaToggleOnIcon {
  readonly viewBox = input("0 0 2048 1280")
  readonly width = input("1.6em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faTrademarkIcon],svg[fa-trademark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M857 288v117q0 13-9.5 22t-22.5 9H527v812q0 13-9 22.5t-22 9.5H361q-13 0-22.5-9t-9.5-23V436H32q-13 0-22.5-9T0 405V288q0-14 9-23t23-9h793q13 0 22.5 9.5T857 288m1038-3l77 961q1 13-8 24q-10 10-23 10h-134q-12 0-21-8.5t-10-20.5l-46-588l-189 425q-8 19-29 19h-120q-20 0-29-19l-188-427l-45 590q-1 12-10 20.5t-21 8.5H964q-13 0-23-10q-9-10-9-24l78-961q1-12 10-20.5t21-8.5h142q20 0 29 19l220 520q10 24 20 51q3-7 9.5-24.5T1472 795l221-520q9-19 29-19h141q13 0 22 8.5t10 20.5"></svg:path>`,
})
export class FaTrademarkIcon {
  readonly viewBox = input("0 0 1984 1280")
  readonly width = input("1.55em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faTrainIcon],svg[fa-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1088 0q185 0 316.5 93.5T1536 320v896q0 130-125.5 222t-305.5 97l213 202q16 15 8 35t-30 20H240q-22 0-30-20t8-35l213-202q-180-5-305.5-97T0 1216V320Q0 187 131.5 93.5T448 0zM768 1344q80 0 136-56t56-136t-56-136t-136-56t-136 56t-56 136t56 136t136 56m576-576V256H192v512z"></svg:path>`,
})
export class FaTrainIcon {
  readonly viewBox = input("0 0 1536 1792")
  readonly width = input("0.86em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faTransgenderAltIcon],svg[fa-transgender-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1280 32q0-14 9-23t23-9h288q26 0 45 19t19 45v288q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23V218l-254 255q126 158 126 359q0 221-147.5 384.5T896 1404v132h96q14 0 23 9t9 23v64q0 14-9 23t-23 9h-96v96q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-96h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h96v-132q-217-24-364.5-187.5T256 832q0-201 126-359l-52-53l-101 111q-9 10-22 10.5t-23-7.5l-48-44q-10-8-10.5-21.5T134 445l105-115l-111-112v134q0 14-9 23t-23 9H32q-14 0-23-9t-9-23V64q0-26 19-45T64 0h288q14 0 23 9t9 23v64q0 14-9 23t-23 9H219l106 107l86-94q9-10 22-10.5t23 7.5l48 44q10 8 10.5 21.5T506 227l-90 99l57 56q158-126 359-126t359 126l255-254h-134q-14 0-23-9t-9-23zM832 1280q185 0 316.5-131.5T1280 832t-131.5-316.5T832 384T515.5 515.5T384 832t131.5 316.5T832 1280"></svg:path>`,
})
export class FaTransgenderAltIcon {
  readonly viewBox = input("0 0 1664 1792")
  readonly width = input("0.93em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faTrashIcon],svg[fa-trash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1248V544q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23m256 0V544q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23m256 0V544q0-14-9-23t-23-9h-64q-14 0-23 9t-9 23v704q0 14 9 23t23 9h64q14 0 23-9t9-23M480 256h448l-48-117q-7-9-17-11H546q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5H288q-66 0-113-58.5T128 1336V384H32q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23"></svg:path>`,
})
export class FaTrashIcon {
  readonly viewBox = input("0 0 1408 1536")
  readonly width = input("0.92em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faTrashOIcon],svg[fa-trash-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 608v576q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23V608q0-14 9-23t23-9h64q14 0 23 9t9 23m256 0v576q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23V608q0-14 9-23t23-9h64q14 0 23 9t9 23m256 0v576q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23V608q0-14 9-23t23-9h64q14 0 23 9t9 23m128 724V384H256v948q0 22 7 40.5t14.5 27t10.5 8.5h832q3 0 10.5-8.5t14.5-27t7-40.5M480 256h448l-48-117q-7-9-17-11H546q-10 2-17 11zm928 32v64q0 14-9 23t-23 9h-96v948q0 83-47 143.5t-113 60.5H288q-66 0-113-58.5T128 1336V384H32q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h309l70-167q15-37 54-63t79-26h320q40 0 79 26t54 63l70 167h309q14 0 23 9t9 23"></svg:path>`,
})
export class FaTrashOIcon {
  readonly viewBox = input("0 0 1408 1536")
  readonly width = input("0.92em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faTreeIcon],svg[fa-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1472 1472q0 26-19 45t-45 19H946q1 17 6 87.5t5 108.5q0 25-18 42.5t-43 17.5H576q-25 0-43-17.5t-18-42.5q0-38 5-108.5t6-87.5H64q-26 0-45-19t-19-45t19-45l402-403H192q-26 0-45-19t-19-45t19-45l402-403H352q-26 0-45-19t-19-45t19-45L691 19q19-19 45-19t45 19l384 384q19 19 19 45t-19 45t-45 19H923l402 403q19 19 19 45t-19 45t-45 19h-229l402 403q19 19 19 45"></svg:path>`,
})
export class FaTreeIcon {
  readonly viewBox = input("0 0 1472 1792")
  readonly width = input("0.83em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faTrelloIcon],svg[fa-trello-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 1216V192q0-14-9-23t-23-9H192q-14 0-23 9t-9 23v1024q0 14 9 23t23 9h480q14 0 23-9t9-23m672-384V192q0-14-9-23t-23-9H864q-14 0-23 9t-9 23v640q0 14 9 23t23 9h480q14 0 23-9t9-23m160-768v1408q0 26-19 45t-45 19H64q-26 0-45-19t-19-45V64q0-26 19-45T64 0h1408q26 0 45 19t19 45"></svg:path>`,
})
export class FaTrelloIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faTripadvisorIcon],svg[fa-tripadvisor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M651 805q0 39-27.5 66.5T558 899q-39 0-66.5-27.5T464 805q0-38 27.5-65.5T558 712q38 0 65.5 27.5T651 805m1154-1q0 39-27.5 66.5T1711 898t-66.5-27.5T1617 804t27.5-66t66.5-27t66.5 27t27.5 66m-1040 1q0-79-56.5-136T572 612t-136.5 56.5T379 805t56.5 136.5T572 998t136.5-56.5T765 805m1153-1q0-80-56.5-136.5T1725 611q-79 0-136 56.5T1532 804t56.5 136.5T1725 997t136.5-56.5T1918 804m-1068 1q0 116-81.5 197.5T572 1084q-116 0-197.5-82T293 805t82-196.5T572 527t196.5 81.5T850 805m1154-1q0 115-81.5 196.5T1725 1082q-115 0-196.5-81.5T1447 804t81.5-196.5T1725 526q116 0 197.5 81.5T2004 804m-964 3q0-191-135.5-326.5T578 345q-125 0-231 62T179 575.5T117 807t62 231.5T347 1207t231 62q191 0 326.5-135.5T1040 807m668-573q-254-111-556-111q-319 0-573 110q117 0 223 45.5T984.5 401t122 183t45.5 223q0-115 43.5-219.5t118-180.5T1491 284t217-50m479 573q0-191-135-326.5T1726 345t-326.5 135.5T1264 807t135.5 326.5T1726 1269t326-135.5T2187 807m-266-566h383q-44 51-75 114.5T2189 470q110 151 110 337q0 156-77 288t-209 208.5t-287 76.5q-133 0-249-56t-196-155q-47 56-129 179q-11-22-53.5-82.5T1024 1168q-80 99-196.5 155.5T578 1380q-155 0-287-76.5T82 1095T5 807q0-186 110-337q-9-51-40-114.5T0 241h365Q514 141 720 84.5T1152 28q224 0 421 56t348 157"></svg:path>`,
})
export class FaTripadvisorIcon {
  readonly viewBox = input("0 0 2304 1408")
  readonly width = input("1.64em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faTrophyIcon],svg[fa-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M458 755q-74-162-74-371H128v96q0 78 94.5 162T458 755m1078-275v-96h-256q0 209-74 371q141-29 235.5-113t94.5-162m128-128v128q0 71-41.5 143t-112 130t-173 97.5T1122 895q-42 54-95 95q-38 34-52.5 72.5T960 1152q0 54 30.5 91t97.5 37q75 0 133.5 45.5T1280 1440v64q0 14-9 23t-23 9H416q-14 0-23-9t-9-23v-64q0-69 58.5-114.5T576 1280q67 0 97.5-37t30.5-91q0-51-14.5-89.5T637 990q-53-41-95-95q-113-5-215.5-44.5t-173-97.5t-112-130T0 480V352q0-40 28-68t68-28h288v-96q0-66 47-113T544 0h576q66 0 113 47t47 113v96h288q40 0 68 28t28 68"></svg:path>`,
})
export class FaTrophyIcon {
  readonly viewBox = input("0 0 1664 1536")
  readonly width = input("1.09em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faTruckIcon],svg[fa-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 1152q0-52-38-90t-90-38t-90 38t-38 90t38 90t90 38t90-38t38-90M192 640h384V384H418q-13 0-22 9L201 588q-9 9-9 22zm1280 512q0-52-38-90t-90-38t-90 38t-38 90t38 90t90 38t90-38t38-90M1728 64v1024q0 15-4 26.5t-13.5 18.5t-16.5 11.5t-23.5 6t-22.5 2t-25.5 0t-22.5-.5q0 106-75 181t-181 75t-181-75t-75-181H704q0 106-75 181t-181 75t-181-75t-75-181h-64q-3 0-22.5.5t-25.5 0t-22.5-2t-23.5-6t-16.5-11.5T4 1114.5T0 1088q0-26 19-45t45-19V704q0-8-.5-35t0-38t2.5-34.5t6.5-37t14-30.5t22.5-30l198-198q19-19 50.5-32t58.5-13h160V64q0-26 19-45t45-19h1024q26 0 45 19t19 45"></svg:path>`,
})
export class FaTruckIcon {
  readonly viewBox = input("0 0 1728 1408")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faTryIcon],svg[fa-try-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1152 704q0 191-94.5 353T801 1313.5T448 1408H288q-14 0-23-9t-9-23V765L41 831q-3 1-9 1q-10 0-19-6q-13-10-13-26V672q0-23 23-31l233-71v-93L41 543q-3 1-9 1q-10 0-19-6q-13-10-13-26V384q0-23 23-31l233-71V32q0-14 9-23t23-9h160q14 0 23 9t9 23v181L855 97q15-5 28 5t13 26v128q0 23-23 31L480 408v93l375-116q15-5 28 5t13 26v128q0 23-23 31L480 696v487q188-13 318-151t130-328q0-14 9-23t23-9h160q14 0 23 9t9 23"></svg:path>`,
})
export class FaTryIcon {
  readonly viewBox = input("0 0 1152 1408")
  readonly width = input("0.82em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faTtyIcon],svg[fa-tty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 1184v192q0 14-9 23t-23 9H224q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h192q14 0 23 9t9 23M256 800v192q0 14-9 23t-23 9H32q-14 0-23-9t-9-23V800q0-14 9-23t23-9h192q14 0 23 9t9 23m576 384v192q0 14-9 23t-23 9H608q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h192q14 0 23 9t9 23M640 800v192q0 14-9 23t-23 9H416q-14 0-23-9t-9-23V800q0-14 9-23t23-9h192q14 0 23 9t9 23M66 640q-28 0-47-19T0 575V446h514v129q0 27-19 46t-46 19zm1150 544v192q0 14-9 23t-23 9H992q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h192q14 0 23 9t9 23m-192-384v192q0 14-9 23t-23 9H800q-14 0-23-9t-9-23V800q0-14 9-23t23-9h192q14 0 23 9t9 23m576 384v192q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23v-192q0-14 9-23t23-9h192q14 0 23 9t9 23m-192-384v192q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23V800q0-14 9-23t23-9h192q14 0 23 9t9 23m384-408v13h-514v-10q0-104-382-102q-382 1-382 102v10H0v-13q0-17 8.5-43t34-64t65.5-75.5t110.5-76t160-67.5t224-47.5T896 0t293 18.5T1413 66t160.5 67.5t110.5 76t65.5 75.5t34 64t8.5 43m0 408v192q0 14-9 23t-23 9h-192q-14 0-23-9t-9-23V800q0-14 9-23t23-9h192q14 0 23 9t9 23m0-354v129q0 27-19 46t-46 19h-384q-27 0-46-19t-19-46V446z"></svg:path>`,
})
export class FaTtyIcon {
  readonly viewBox = input("0 0 1792 1408")
  readonly width = input("1.28em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faTumblrIcon],svg[fa-tumblr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m880 1329l80 237q-23 35-111 66t-177 32q-104 2-190.5-26T339 1564t-95-106t-55.5-120t-16.5-118V676H4V461q72-26 129-69.5t91-90t58-102t34-99T331 12q1-5 4.5-8.5T343 0h244v424h333v252H586v518q0 30 6.5 56t22.5 52.5t49.5 41.5t81.5 14q78-2 134-29"></svg:path>`,
})
export class FaTumblrIcon {
  readonly viewBox = input("0 0 960 1664")
  readonly width = input("0.58em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faTumblrSquareIcon],svg[fa-tumblr-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1136 1333l-62-183q-44 22-103 22q-36 1-62-10.5t-38.5-31.5t-17.5-40.5t-5-43.5V648h257V454H849V128H661q-8 0-9 10q-5 44-17.5 87t-39 95t-77 95T400 483v165h130v418q0 57 21.5 115t65 111t121 85.5T914 1408q69-1 136.5-25t85.5-50m400-1045v960q0 119-84.5 203.5T1248 1536H288q-119 0-203.5-84.5T0 1248V288Q0 169 84.5 84.5T288 0h960q119 0 203.5 84.5T1536 288"></svg:path>`,
})
export class FaTumblrSquareIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faTwitchIcon],svg[fa-twitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M800 434v434H655V434zm398 0v434h-145V434zm0 760l253-254V145H257v1049h326v217l217-217zM1596 0v1013l-434 434H836l-217 217H402v-217H4V289L113 0z"></svg:path>`,
})
export class FaTwitchIcon {
  readonly viewBox = input("0 0 1600 1664")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faTwitterIcon],svg[fa-twitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1588 152q-67 98-162 167q1 14 1 42q0 130-38 259.5T1273.5 869T1089 1079.5t-258 146t-323 54.5q-271 0-496-145q35 4 78 4q225 0 401-138q-105-2-188-64.5T189 777q33 5 61 5q43 0 85-11q-112-23-185.5-111.5T76 454v-4q68 38 146 41q-66-44-105-115T78 222q0-88 44-163q121 149 294.5 238.5T788 397q-8-38-8-74q0-134 94.5-228.5T1103 0q140 0 236 102q109-21 205-78q-37 115-142 178q93-10 186-50"></svg:path>`,
})
export class FaTwitterIcon {
  readonly viewBox = input("0 0 1600 1280")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faTwitterSquareIcon],svg[fa-twitter-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1280 482q-56 25-121 34q68-40 93-117q-65 38-134 51q-61-66-153-66q-87 0-148.5 61.5T755 594q0 29 5 48q-129-7-242-65T326 422q-29 50-29 106q0 114 91 175q-47-1-100-26v2q0 75 50 133.5T461 885q-29 8-51 8q-13 0-39-4q21 63 74.5 104t121.5 42q-116 90-261 90q-26 0-50-3q148 94 322 94q112 0 210-35.5t168-95t120.5-137t75-162T1176 618q0-18-1-27q63-45 105-109m256-194v960q0 119-84.5 203.5T1248 1536H288q-119 0-203.5-84.5T0 1248V288Q0 169 84.5 84.5T288 0h960q119 0 203.5 84.5T1536 288"></svg:path>`,
})
export class FaTwitterSquareIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faUmbrellaIcon],svg[fa-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 764v580q0 104-76 180t-180 76t-180-76t-76-180q0-26 19-45t45-19t45 19t19 45q0 50 39 89t89 39t89-39t39-89V764q33-11 64-11t64 11m768 27q0 13-9.5 22.5T1632 823q-11 0-23-10q-49-46-93-69t-102-23q-68 0-128 37t-103 97q-7 10-17.5 28t-14.5 24q-11 17-28 17q-18 0-29-17q-4-6-14.5-24t-17.5-28q-43-60-102.5-97T832 721t-127.5 37T602 855q-7 10-17.5 28T570 907q-11 17-29 17q-17 0-28-17q-4-6-14.5-24T481 855q-43-60-103-97t-128-37q-58 0-102 23t-93 69q-12 10-23 10q-13 0-22.5-9.5T0 791q0-5 1-7q45-183 172.5-319.5t298-204.5T832 192q140 0 274.5 40T1353 345.5t194.5 187T1663 784q1 2 1 7M896 64v98q-42-2-64-2t-64 2V64q0-26 19-45t45-19t45 19t19 45"></svg:path>`,
})
export class FaUmbrellaIcon {
  readonly viewBox = input("0 0 1664 1600")
  readonly width = input("1.04em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faUnderlineIcon],svg[fa-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M48 95q-37-2-45-4L0 3q13-1 40-1q60 0 112 4q132 7 166 7q86 0 168-3q116-4 146-5q56 0 86-2l-1 14l2 64v9q-60 9-124 9q-60 0-79 25q-13 14-13 132q0 13 .5 32.5t.5 25.5l1 229l14 280q6 124 51 202q35 59 96 92q88 47 177 47q104 0 191-28q56-18 99-51q48-36 65-64q36-56 53-114q21-73 21-229q0-79-3.5-128t-11-122.5T1244 268l-4-59q-5-67-24-88q-34-35-77-34l-100 2l-14-3l2-86h84l205 10q76 3 196-10l18 2q6 38 6 51q0 7-4 31q-45 12-84 13q-73 11-79 17q-15 15-15 41q0 7 1.5 27t1.5 31q8 19 22 396q6 195-15 304q-15 76-41 122q-38 65-112 123q-75 57-182 89q-109 33-255 33q-167 0-284-46q-119-47-179-122q-61-76-83-195q-16-80-16-237V347q0-188-17-213q-25-36-147-39m1488 1409v-64q0-14-9-23t-23-9H32q-14 0-23 9t-9 23v64q0 14 9 23t23 9h1472q14 0 23-9t9-23"></svg:path>`,
})
export class FaUnderlineIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faUniversalAccessIcon],svg[fa-universal-access-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1374 657q-6-26-28.5-39.5T1297 610q-261 62-401 62t-401-62q-26-6-48.5 7.5T418 657t7.5 48.5T465 734q194 46 303 58q-2 158-15.5 269T726 1216.5T685 1332l-9 21q-10 25 1 49t36 34q9 4 23 4q44 0 60-41l8-20q54-139 71-259h42q17 120 71 259l8 20q16 41 60 41q14 0 23-4q25-10 36-34t1-49l-9-21q-28-71-41-115.5t-26.5-155.5t-15.5-269q109-12 303-58q26-6 39.5-28.5t7.5-48.5m-350-145q0-53-37.5-90.5T896 384t-90.5 37.5T768 512t37.5 90.5T896 640t90.5-37.5T1024 512m576 384q0 143-55.5 273.5t-150 225t-225 150T896 1600t-273.5-55.5t-225-150t-150-225T192 896t55.5-273.5t150-225t225-150T896 192t273.5 55.5t225 150t150 225T1600 896M896 128q-156 0-298 61T353 353T189 598t-61 298t61 298t164 245t245 164t298 61t298-61t245-164t164-245t61-298t-61-298t-164-245t-245-164t-298-61m896 768q0 182-71 348t-191 286t-286 191t-348 71t-348-71t-286-191t-191-286T0 896t71-348t191-286T548 71T896 0t348 71t286 191t191 286t71 348"></svg:path>`,
})
export class FaUniversalAccessIcon {
  readonly viewBox = input("0 0 1792 1792")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faUnlockIcon],svg[fa-unlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1664 448v256q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45V448q0-106-75-181t-181-75t-181 75t-75 181v192h96q40 0 68 28t28 68v576q0 40-28 68t-68 28H96q-40 0-68-28t-28-68V736q0-40 28-68t68-28h672V448q0-185 131.5-316.5T1216 0t316.5 131.5T1664 448"></svg:path>`,
})
export class FaUnlockIcon {
  readonly viewBox = input("0 0 1664 1408")
  readonly width = input("1.19em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faUnlockAltIcon],svg[fa-unlock-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1056 768q40 0 68 28t28 68v576q0 40-28 68t-68 28H96q-40 0-68-28t-28-68V864q0-40 28-68t68-28h32V448q0-185 131.5-316.5T576 0t316.5 131.5T1024 448q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75t-181 75t-75 181v320z"></svg:path>`,
})
export class FaUnlockAltIcon {
  readonly viewBox = input("0 0 1152 1536")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faUploadIcon],svg[fa-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1280 1408q0-26-19-45t-45-19t-45 19t-19 45t19 45t45 19t45-19t19-45m256 0q0-26-19-45t-45-19t-45 19t-19 45t19 45t45 19t45-19t19-45m128-224v320q0 40-28 68t-68 28H96q-40 0-68-28t-28-68v-320q0-40 28-68t68-28h427q21 56 70.5 92t110.5 36h256q61 0 110.5-36t70.5-92h427q40 0 68 28t28 68m-325-648q-17 40-59 40h-256v448q0 26-19 45t-45 19H704q-26 0-45-19t-19-45V576H384q-42 0-59-40q-17-39 14-69L787 19q18-19 45-19t45 19l448 448q31 30 14 69"></svg:path>`,
})
export class FaUploadIcon {
  readonly viewBox = input("0 0 1664 1600")
  readonly width = input("1.04em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faUsbIcon],svg[fa-usb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2288 677q16 8 16 27t-16 27l-320 192q-8 5-16 5q-9 0-16-4q-16-10-16-28V768h-858q37 58 83 165q16 37 24.5 55t24 49t27 47t27 34t31.5 26t33 8h96v-96q0-14 9-23t23-9h320q14 0 23 9t9 23v320q0 14-9 23t-23 9h-320q-14 0-23-9t-9-23v-96h-96q-32 0-61-10t-51-23.5t-45-40.5t-37-46t-33.5-57t-28.5-57.5t-28-60.5q-23-53-37-81.5t-36-65t-44.5-53.5t-46.5-17H504q-22 84-91 138t-157 54q-106 0-181-75T0 704t75-181t181-75q88 0 157 54t91 138h104q24 0 46.5-17t44.5-53.5t36-65t37-81.5q19-41 28-60.5t28.5-57.5t33.5-57t37-46t45-40.5t51-23.5t61-10h107q21-57 70-92.5T1344 0q80 0 136 56t56 136t-56 136t-136 56q-62 0-111-35.5t-70-92.5h-107q-17 0-33 8t-31.5 26t-27 34t-27 47t-24 49t-24.5 55q-46 107-83 165h1114V512q0-18 16-28t32 1z"></svg:path>`,
})
export class FaUsbIcon {
  readonly viewBox = input("0 0 2304 1408")
  readonly width = input("1.64em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faUserIcon],svg[fa-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1280 1271q0 109-62.5 187t-150.5 78H213q-88 0-150.5-78T0 1271q0-85 8.5-160.5t31.5-152t58.5-131t94-89T327 704q131 128 313 128t313-128q76 0 134.5 34.5t94 89t58.5 131t31.5 152t8.5 160.5m-256-887q0 159-112.5 271.5T640 768T368.5 655.5T256 384t112.5-271.5T640 0t271.5 112.5T1024 384"></svg:path>`,
})
export class FaUserIcon {
  readonly viewBox = input("0 0 1280 1536")
  readonly width = input("0.84em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faUserCircleIcon],svg[fa-user-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1523 1339q-22-155-87.5-257.5T1251 963q-67 74-159.5 115.5T896 1120t-195.5-41.5T541 963q-119 16-184.5 118.5T269 1339q106 150 271 237.5t356 87.5t356-87.5t271-237.5m-243-699q0-159-112.5-271.5T896 256T624.5 368.5T512 640t112.5 271.5T896 1024t271.5-112.5T1280 640m512 256q0 182-71 347.5t-190.5 286T1245 1721t-349 71q-182 0-348-71t-286-191t-191-286T0 896t71-348t191-286T548 71T896 0t348 71t286 191t191 286t71 348"></svg:path>`,
})
export class FaUserCircleIcon {
  readonly viewBox = input("0 0 1792 1792")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faUserCircleOIcon],svg[fa-user-circle-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 0q182 0 348 71t286 191t191 286t71 348q0 181-70.5 347T1531 1529t-286 191.5t-349 71.5t-349-71t-285.5-191.5t-190.5-286T0 896t71-348t191-286T548 71T896 0m619 1351q149-205 149-455q0-156-61-298t-164-245t-245-164t-298-61t-298 61t-245 164t-164 245t-61 298q0 250 149 455q66-327 306-327q131 128 313 128t313-128q240 0 306 327m-235-647q0-159-112.5-271.5T896 320T624.5 432.5T512 704t112.5 271.5T896 1088t271.5-112.5T1280 704"></svg:path>`,
})
export class FaUserCircleOIcon {
  readonly viewBox = input("0 0 1792 1792")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faUserMdIcon],svg[fa-user-md-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 1216q0 26-19 45t-45 19t-45-19t-19-45t19-45t45-19t45 19t19 45m1024 61q0 121-73 190t-194 69H267q-121 0-194-69T0 1277q0-68 5.5-131t24-138T77 875.5t81-103T278 712q-22 52-22 120v203q-58 20-93 70t-35 111q0 80 56 136t136 56t136-56t56-136q0-61-35.5-111t-92.5-70V832q0-62 25-93q132 104 295 104t295-104q25 31 25 93v64q-106 0-181 75t-75 181v89q-32 29-32 71q0 40 28 68t68 28t68-28t28-68q0-42-32-71v-89q0-52 38-90t90-38t90 38t38 90v89q-32 29-32 71q0 40 28 68t68 28t68-28t28-68q0-42-32-71v-89q0-68-34.5-127.5T1152 931q0-10 .5-42.5t0-48t-2.5-41.5t-7-47t-13-40q68 15 120 60.5t81 103t47.5 132.5t24 138t5.5 131m-320-893q0 159-112.5 271.5T704 768T432.5 655.5T320 384t112.5-271.5T704 0t271.5 112.5T1088 384"></svg:path>`,
})
export class FaUserMdIcon {
  readonly viewBox = input("0 0 1408 1536")
  readonly width = input("0.92em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faUserOIcon],svg[fa-user-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1201 784q47 14 89.5 38t89 73t79.5 115.5t55 172t22 236.5q0 154-100 263.5T1195 1792H341q-141 0-241-109.5T0 1419q0-131 22-236.5t55-172T156.5 895t89-73t89.5-38q-79-125-79-272q0-104 40.5-198.5T406 150T569.5 40.5T768 0t198.5 40.5T1130 150t109.5 163.5T1280 512q0 147-79 272M768 128q-159 0-271.5 112.5T384 512t112.5 271.5T768 896t271.5-112.5T1152 512t-112.5-271.5T768 128m427 1536q88 0 150.5-71.5T1408 1419q0-239-78.5-377T1104 897q-145 127-336 127T432 897q-147 7-225.5 145T128 1419q0 102 62.5 173.5T341 1664z"></svg:path>`,
})
export class FaUserOIcon {
  readonly viewBox = input("0 0 1536 1792")
  readonly width = input("0.86em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faUserPlusIcon],svg[fa-user-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 768q-159 0-271.5-112.5T320 384t112.5-271.5T704 0t271.5 112.5T1088 384T975.5 655.5T704 768m960 128h352q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5h-352v352q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-352h-352q-13 0-22.5-9.5t-9.5-22.5V928q0-13 9.5-22.5t22.5-9.5h352V544q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5zm-736 224q0 52 38 90t90 38h256v238q-68 50-171 50H267q-121 0-194-69T0 1277q0-53 3.5-103.5t14-109T44 956t43-97.5t62-81t85.5-53.5T346 704q19 0 39 17q79 61 154.5 91.5T704 843t164.5-30.5T1023 721q20-17 39-17q132 0 217 96h-223q-52 0-90 38t-38 90z"></svg:path>`,
})
export class FaUserPlusIcon {
  readonly viewBox = input("0 0 2048 1536")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faUserSecretIcon],svg[fa-user-secret-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m576 1536l96-448l-96-128l-128-64zm256 0l128-640l-128 64l-96 128zM992 526q-2-4-4-6q-10-8-96-8q-70 0-167 19q-7 2-21 2t-21-2q-97-19-167-19q-86 0-96 8q-2 2-4 6q2 18 4 27q2 3 7.5 6.5T435 570q2 4 7.5 20.5t7 20.5t7.5 17t8.5 17t9 14t12 13.5t14 9.5t17.5 8t20.5 4t24.5 2q36 0 59-12.5t32.5-30T669 619t11.5-29.5T698 577h12q11 0 17.5 12.5T739 619t14.5 34.5t32.5 30t59 12.5q13 0 24.5-2t20.5-4t17.5-8t14-9.5t12-13.5t9-14t8.5-17t7.5-17t7-20.5T973 570q2-7 7.5-10.5t7.5-6.5q2-9 4-27m416 879q0 121-73 190t-194 69H267q-121 0-194-69T0 1405q0-61 4.5-118t19-125.5T61 1038t63.5-103.5T218 860l-90-220h214q-22-64-22-128q0-12 2-32q-194-40-194-96q0-57 210-99q17-62 51.5-134T460 37q32-37 76-37q30 0 84 31t84 31t84-31t84-31q44 0 76 37q36 42 70.5 114t51.5 134q210 42 210 99q0 56-194 96q7 81-20 160h214l-82 225q63 33 107.5 96.5T1371 1105t29 151.5t8 148.5"></svg:path>`,
})
export class FaUserSecretIcon {
  readonly viewBox = input("0 0 1408 1664")
  readonly width = input("0.85em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faUserTimesIcon],svg[fa-user-times-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 768q-159 0-271.5-112.5T320 384t112.5-271.5T704 0t271.5 112.5T1088 384T975.5 655.5T704 768m1077 320l249 249q9 9 9 23q0 13-9 22l-136 136q-9 9-22 9q-14 0-23-9l-249-249l-249 249q-9 9-23 9q-13 0-22-9l-136-136q-9-9-9-22q0-14 9-23l249-249l-249-249q-9-9-9-23q0-13 9-22l136-136q9-9 22-9q14 0 23 9l249 249l249-249q9-9 23-9q13 0 22 9l136 136q9 9 9 22q0 14-9 23zm-498 0l-181 181q-37 37-37 91q0 53 37 90l83 83q-21 3-44 3H267q-121 0-194-69T0 1277q0-53 3.5-103.5t14-109T44 956t43-97.5t62-81t85.5-53.5T346 704q19 0 39 17q154 122 319 122t319-122q20-17 39-17q28 0 57 6q-28 27-41 50t-13 56q0 54 37 91z"></svg:path>`,
})
export class FaUserTimesIcon {
  readonly viewBox = input("0 0 2048 1536")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faVenusIcon],svg[fa-venus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1152 576q0 221-147.5 384.5T640 1148v260h224q14 0 23 9t9 23v64q0 14-9 23t-23 9H640v224q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-224H288q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h224v-260q-150-16-271.5-103t-186-224T2 529q11-134 80.5-249t182-188T510 4q170-19 319 54t236 212t87 306m-1024 0q0 185 131.5 316.5T576 1024t316.5-131.5T1024 576T892.5 259.5T576 128T259.5 259.5T128 576"></svg:path>`,
})
export class FaVenusIcon {
  readonly viewBox = input("0 0 1152 1792")
  readonly width = input("0.65em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faVenusDoubleIcon],svg[fa-venus-double-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1790 529q12 155-52.5 292t-186 224t-271.5 103v260h224q14 0 23 9t9 23v64q0 14-9 23t-23 9h-224v224q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-224H640v224q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-224H288q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h224v-260q-150-16-271.5-103t-186-224T2 529q17-206 164.5-356.5T519 3q206-21 377 94q171-115 377-94q205 19 352.5 169.5T1790 529M896 889q128-131 128-313T896 263Q768 394 768 576t128 313m-320 135q115 0 218-57q-154-165-154-391q0-224 154-391q-103-57-218-57q-185 0-316.5 131.5T128 576t131.5 316.5T576 1024m576 384v-260q-137-15-256-94q-119 79-256 94v260zm64-384q185 0 316.5-131.5T1664 576t-131.5-316.5T1216 128q-115 0-218 57q154 167 154 391q0 226-154 391q103 57 218 57"></svg:path>`,
})
export class FaVenusDoubleIcon {
  readonly viewBox = input("0 0 1792 1792")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faVenusMarsIcon],svg[fa-venus-mars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1664 32q0-14 9-23t23-9h288q26 0 45 19t19 45v288q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23V218l-254 255q76 95 107.5 214t9.5 247q-32 180-164.5 310T1305 1401q-223 34-409-90q-117 78-256 93v132h96q14 0 23 9t9 23v64q0 14-9 23t-23 9h-96v96q0 14-9 23t-23 9h-64q-14 0-23-9t-9-23v-96h-96q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h96v-132q-155-17-279.5-109.5T45.5 1057T6 750q25-187 159.5-322.5T486 263q224-34 410 90q146-97 320-97q201 0 359 126l255-254h-134q-14 0-23-9t-9-23zM896 1145q128-131 128-313T896 519Q768 650 768 832t128 313M128 832q0 185 131.5 316.5T576 1280q117 0 218-57q-154-167-154-391t154-391q-101-57-218-57q-185 0-316.5 131.5T128 832m1088 448q185 0 316.5-131.5T1664 832t-131.5-316.5T1216 384q-117 0-218 57q154 167 154 391t-154 391q101 57 218 57"></svg:path>`,
})
export class FaVenusMarsIcon {
  readonly viewBox = input("0 0 2048 1792")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faViacoinIcon],svg[fa-viacoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1536 0l-192 448h192v192h-274l-55 128h329v192h-411l-357 832l-357-832H0V768h329l-55-128H0V448h192L0 0h256l323 768h378L1280 0zM768 1216l108-256H660z"></svg:path>`,
})
export class FaViacoinIcon {
  readonly viewBox = input("0 0 1536 1792")
  readonly width = input("0.86em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faViadeoIcon],svg[fa-viadeo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1050 978q0 215-147 374q-148 161-378 161q-232 0-378-161Q0 1193 0 978q0-147 68-270.5T257 511t268-73q96 0 182 31q-32 62-39 126q-66-28-143-28q-167 0-280.5 123T131 981q0 170 112.5 288.5T525 1388t281-118.5T918 981q0-89-32-166q66-13 123-49q41 98 41 212M846 789q0 192-79.5 345T528 1387l-14 1q-29 0-62-5q83-32 146.5-102.5T698 1126t58.5-189t30-192.5T794 566q0-69-3-103q55 160 55 326m-55-328v2Q718 249 585 23q88 59 142.5 186.5T791 461m244 203q-83 0-160-75q218-120 290-247q19-37 21-56q-42 94-139.5 166.5T842 550q-35-54-35-113q0-37 17-79t43-68q46-44 157-74q59-16 106-58.5T1204 57q74 105 74 253q0 109-24 170q-32 77-88.5 130.5T1035 664"></svg:path>`,
})
export class FaViadeoIcon {
  readonly viewBox = input("0 0 1280 1536")
  readonly width = input("0.84em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faViadeoSquareIcon],svg[fa-viadeo-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1050 913q0-78-28-147q-41 25-85 34q22 50 22 114q0 117-77 198.5T689 1194t-193.5-81.5T418 914q0-115 78-199.5T689 630q53 0 98 19q4-43 27-87q-60-21-125-21q-154 0-257.5 108.5T328 913t103.5 261T689 1280t257.5-106.5T1050 913M872 558q2 24 2 71q0 63-5 123t-20.5 132.5t-40.5 130t-68.5 106T639 1191q21 3 42 3h10q219-139 219-411q0-116-38-225m0 0q-4-80-44-171.5T730 256q92 156 142 302m335-105q0-102-51-174q-41 86-124 109q-69 19-109 53.5T883 541q0 40 24 77q74-17 140.5-67t95.5-115q-4 52-74.5 111.5T930 645q52 52 110 52q51 0 90-37t60-90q17-42 17-117m329-165v960q0 119-84.5 203.5T1248 1536H288q-119 0-203.5-84.5T0 1248V288Q0 169 84.5 84.5T288 0h960q119 0 203.5 84.5T1536 288"></svg:path>`,
})
export class FaViadeoSquareIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faVideoCameraIcon],svg[fa-video-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 96v1088q0 42-39 59q-13 5-25 5q-27 0-45-19l-403-403v166q0 119-84.5 203.5T992 1280H288q-119 0-203.5-84.5T0 992V288Q0 169 84.5 84.5T288 0h704q119 0 203.5 84.5T1280 288v165l403-402q18-19 45-19q12 0 25 5q39 17 39 59"></svg:path>`,
})
export class FaVideoCameraIcon {
  readonly viewBox = input("0 0 1792 1280")
  readonly width = input("1.4em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faVimeoIcon],svg[fa-vimeo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1645 326q-10 236-332 651q-333 431-562 431q-142 0-240-263q-44-160-132-482q-72-262-157-262q-18 0-127 76l-77-98q24-21 108-96.5T256 167Q412 29 497 21q95-9 153 55.5T731 280q44 287 66 373q55 249 120 249q51 0 154-161q101-161 109-246q13-139-109-139q-57 0-121 26Q1070-11 1409 0q251 8 236 326"></svg:path>`,
})
export class FaVimeoIcon {
  readonly viewBox = input("0 0 1664 1408")
  readonly width = input("1.19em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faVimeoSquareIcon],svg[fa-vimeo-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1292 510q10-216-161-222q-231-8-312 261q44-19 82-19q85 0 74 96q-4 57-74 167T796 903q-43 0-82-169q-13-54-45-255q-30-189-160-177q-59 7-164 100l-81 72l-81 72l52 67q76-52 87-52q57 0 107 179q15 55 45 164.5t45 164.5q68 179 164 179q157 0 383-294q220-283 226-444m244-222v960q0 119-84.5 203.5T1248 1536H288q-119 0-203.5-84.5T0 1248V288Q0 169 84.5 84.5T288 0h960q119 0 203.5 84.5T1536 288"></svg:path>`,
})
export class FaVimeoSquareIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faVineIcon],svg[fa-vine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1465 827v198q-101 23-198 23q-65 136-165.5 271T920 1534.5T792 1641q-80 45-162-3q-28-17-60.5-43.5t-85-83.5T382 1382.5t-107.5-184t-105.5-244T77.5 640T7 250h283q26 218 70 398.5t104.5 317T586 1201t140 195q169-169 287-406q-142-72-223-220t-81-333q0-192 104-314.5T1097 0q178 0 273 105.5t95 297.5q0 159-58 286q-7 1-19.5 3t-46 2t-63-6t-62-25.5T1166 611q31-103 31-184q0-87-29-132t-79-45q-53 0-85 49.5T972 440q0 186 105 293.5T1344 841q62 0 121-14"></svg:path>`,
})
export class FaVineIcon {
  readonly viewBox = input("0 0 1472 1664")
  readonly width = input("0.89em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faVkIcon],svg[fa-vk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1949 264q23 64-150 294q-24 32-65 85q-40 51-55 72t-30.5 49.5t-12 42t13 34.5t32.5 43t57 53q4 2 5 4q141 131 191 221q3 5 6.5 12.5t7 26.5t-.5 34t-25 27.5t-59 12.5l-256 4q-24 5-56-5t-52-22l-20-12q-30-21-70-64t-68.5-77.5t-61-58t-56.5-15.5q-3 1-8 3.5t-17 14.5t-21.5 29.5t-17 52t-6.5 77.5q0 15-3.5 27.5t-7.5 18.5l-4 5q-18 19-53 22H971q-71 4-146-16.5t-131.5-53t-103-66T520 1082l-25-24q-10-10-27.5-30T396 937T290 786T167.5 575T37 303q-6-16-6-27t3-16l4-6q15-19 57-19l274-2q12 2 23 6.5t16 8.5l5 3q16 11 24 32q20 50 46 103.5t41 81.5l16 29q29 60 56 104t48.5 68.5T686 708t34 14t27-5q2-1 5-5t12-22t13.5-47t9.5-81t0-125q-2-40-9-73t-14-46l-6-12q-25-34-85-43q-13-2 5-24q16-19 38-30q53-26 239-24q82 1 135 13q20 5 33.5 13.5t20.5 24t10.5 32t3.5 45.5t-1 55t-2.5 70.5t-1.5 82.5q0 11-1 42t-.5 48t3.5 40.5t11.5 39T1189 715q8 2 17 4t26-11t38-34.5t52-67t68-107.5q60-104 107-225q4-10 10-17.5t11-10.5l4-3l5-2.5l13-3l20-.5l288-2q39-5 64 2.5t31 16.5z"></svg:path>`,
})
export class FaVkIcon {
  readonly viewBox = input("0 0 1952 1280")
  readonly width = input("1.53em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faVolumeControlPhoneIcon],svg[fa-volume-control-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M617 1689q0-11-13-58t-31-107t-20-69q-1-4-5-26.5t-8.5-36T526 1371q-15-14-51-14q-23 0-70 5.5t-71 5.5q-34 0-47-11q-6-5-11-15.5t-7.5-20t-6.5-24t-5-18.5q-37-128-37-255t37-255q1-4 5-18.5t6.5-24t7.5-20t11-15.5q13-11 47-11q24 0 71 5.5t70 5.5q36 0 51-14q9-8 13.5-21.5t8.5-36t5-26.5q2-9 20-69t31-107t13-58q0-22-43.5-52.5T498 264q-20-8-45-8q-34 0-98 18q-57 17-96.5 40.5t-71 66t-46 70T96 545q-6 12-9 19q-49 107-68 216T0 1024t19 244t68 216q56 122 83 161q63 91 179 127l6 2q64 18 98 18q25 0 45-8q32-12 75.5-42.5T617 1689m159-913q-26 0-45-19t-19-45.5t19-45.5q37-37 37-90q0-52-37-91q-19-19-19-45t19-45t45-19t45 19q75 75 75 181t-75 181q-21 19-45 19m181 181q-27 0-45-19q-19-19-19-45t19-45q112-114 112-272T912 304q-19-19-19-45t19-45t45-19t45 19q150 150 150 362t-150 362q-18 19-45 19m181 181q-27 0-45-19q-19-19-19-45t19-45q90-91 138.5-208t48.5-245t-48.5-245T1093 123q-19-19-19-45t19-45t45-19t45 19q109 109 167 249t58 294t-58 294t-167 249q-18 19-45 19"></svg:path>`,
})
export class FaVolumeControlPhoneIcon {
  readonly viewBox = input("0 0 1408 1792")
  readonly width = input("0.79em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faVolumeDownIcon],svg[fa-volume-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 96v1088q0 26-19 45t-45 19t-45-19L326 896H64q-26 0-45-19T0 832V448q0-26 19-45t45-19h262L659 51q19-19 45-19t45 19t19 45m384 544q0 76-42.5 141.5T997 875q-10 5-25 5q-26 0-45-18.5T908 816q0-21 12-35.5t29-25t34-23t29-36t12-56.5t-12-56.5t-29-36t-34-23t-29-25t-12-35.5q0-27 19-45.5t45-18.5q15 0 25 5q70 27 112.5 93t42.5 142"></svg:path>`,
})
export class FaVolumeDownIcon {
  readonly viewBox = input("0 0 1152 1280")
  readonly width = input("0.9em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faVolumeOffIcon],svg[fa-volume-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 96v1088q0 26-19 45t-45 19t-45-19L326 896H64q-26 0-45-19T0 832V448q0-26 19-45t45-19h262L659 51q19-19 45-19t45 19t19 45"></svg:path>`,
})
export class FaVolumeOffIcon {
  readonly viewBox = input("0 0 768 1280")
  readonly width = input("0.6em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faVolumeUpIcon],svg[fa-volume-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 192v1088q0 26-19 45t-45 19t-45-19L326 992H64q-26 0-45-19T0 928V544q0-26 19-45t45-19h262l333-333q19-19 45-19t45 19t19 45m384 544q0 76-42.5 141.5T997 971q-10 5-25 5q-26 0-45-18.5T908 912q0-21 12-35.5t29-25t34-23t29-36t12-56.5t-12-56.5t-29-36t-34-23t-29-25t-12-35.5q0-27 19-45.5t45-18.5q15 0 25 5q70 27 112.5 93t42.5 142m256 0q0 153-85 282.5T1098 1207q-13 5-25 5q-27 0-46-19t-19-45q0-39 39-59q56-29 76-44q74-54 115.5-135.5T1280 736t-41.5-173.5T1123 427q-20-15-76-44q-39-20-39-59q0-26 19-45t45-19q13 0 26 5q140 59 225 188.5t85 282.5m256 0q0 230-127 422.5T1199 1442q-13 5-26 5q-26 0-45-19t-19-45q0-36 39-59q7-4 22.5-10.5t22.5-10.5q46-25 82-51q123-91 192-227t69-289t-69-289t-192-227q-36-26-82-51q-7-4-22.5-10.5T1148 148q-39-23-39-59q0-26 19-45t45-19q13 0 26 5q211 91 338 283.5T1664 736"></svg:path>`,
})
export class FaVolumeUpIcon {
  readonly viewBox = input("0 0 1664 1472")
  readonly width = input("1.14em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faWechatIcon],svg[fa-wechat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M580 429q0-41-25-66t-66-25q-43 0-76 25.5T380 429q0 39 33 64.5t76 25.5q41 0 66-24.5t25-65.5m743 507q0-28-25.5-50t-65.5-22q-27 0-49.5 22.5T1160 936q0 28 22.5 50.5t49.5 22.5q40 0 65.5-22t25.5-51m-236-507q0-41-24.5-66T997 338q-43 0-76 25.5T888 429q0 39 33 64.5t76 25.5q41 0 65.5-24.5T1087 429m635 507q0-28-26-50t-65-22q-27 0-49.5 22.5T1559 936q0 28 22.5 50.5t49.5 22.5q39 0 65-22t26-51m-266-397q-31-4-70-4q-169 0-311 77T851.5 820.5T770 1108q0 78 23 152q-35 3-68 3q-26 0-50-1.5t-55-6.5t-44.5-7t-54.5-10.5t-50-10.5l-253 127l72-218Q0 933 0 646q0-169 97.5-311t264-223.5T725 30q176 0 332.5 66t262 182.5T1456 539m592 561q0 117-68.5 223.5T1794 1517l55 181l-199-109q-150 37-218 37q-169 0-311-70.5T897.5 1364T816 1100t81.5-264T1121 644.5t311-70.5q161 0 303 70.5t227.5 192T2048 1100"></svg:path>`,
})
export class FaWechatIcon {
  readonly viewBox = input("0 0 2048 1728")
  readonly width = input("1.19em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faWeiboIcon],svg[fa-weibo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M675 1124q21-34 11-69t-45-50q-34-14-73-1t-60 46q-22 34-13 68.5t43 50.5t74.5 2.5T675 1124m94-121q8-13 3.5-26.5T755 958q-14-5-28.5.5T705 977q-17 31 13 45q14 5 29-.5t22-18.5m174 107q-45 102-158 150t-224 12q-107-34-147.5-126.5T420 958q47-93 151.5-139T782 800q111 29 158.5 119.5T943 1110m312-160q-9-96-89-170T957.5 671T683 650q-223 23-369.5 141.5T181 1056q9 96 89 170t208.5 109t274.5 21q223-23 369.5-141.5T1255 950m308 4q0 68-37 139.5t-109 137t-168.5 117.5t-226 83t-270.5 31t-275-33.5t-240.5-93t-171.5-151T0 985q0-115 69.5-245T267 482q169-169 341.5-236t246.5 7q65 64 20 209q-4 14-1 20t10 7t14.5-.5T912 485l6-2q139-59 246-59t153 61q45 63 0 178q-2 13-4.5 20t4.5 12.5t12 7.5t17 6q57 18 103 47t80 81.5t34 116.5m-74-624q42 47 54.5 108.5T1537 556q-8 23-29.5 34t-44.5 4q-23-8-34-29.5t-4-44.5q20-63-24-111t-107-35q-24 5-45-8t-25-37q-5-24 8-44.5t37-25.5q60-13 119 5.5t101 65.5m181-163q87 96 112.5 222.5T1769 631q-9 27-34 40t-52 4t-40-34t-5-52q28-82 10-172t-80-158q-62-69-148-95.5t-173-8.5q-28 6-52-9.5t-30-43.5t9.5-51.5T1218 21q123-26 244 11.5T1670 167"></svg:path>`,
})
export class FaWeiboIcon {
  readonly viewBox = input("0 0 1792 1472")
  readonly width = input("1.22em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faWhatsappIcon],svg[fa-whatsapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M985 878q13 0 97.5 44t89.5 53q2 5 2 15q0 33-17 76q-16 39-71 65.5T984 1158q-57 0-190-62q-98-45-170-118T476 793q-72-107-71-194v-8q3-91 74-158q24-22 52-22q6 0 18 1.5t19 1.5q19 0 26.5 6.5T610 448q8 20 33 88t25 75q0 21-34.5 57.5T599 715q0 7 5 15q34 73 102 137q56 53 151 101q12 7 22 7q15 0 54-48.5t52-48.5m-203 530q127 0 243.5-50t200.5-134t134-200.5t50-243.5t-50-243.5T1226 336t-200.5-134T782 152t-243.5 50T338 336T204 536.5T154 780q0 203 120 368l-79 233l242-77q158 104 345 104m0-1382q153 0 292.5 60T1315 247t161 240.5t60 292.5t-60 292.5t-161 240.5t-240.5 161t-292.5 60q-195 0-365-94L0 1574l136-405Q28 991 28 780q0-153 60-292.5T249 247T489.5 86T782 26"></svg:path>`,
})
export class FaWhatsappIcon {
  readonly viewBox = input("0 0 1536 1600")
  readonly width = input("0.96em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faWheelchairIcon],svg[fa-wheelchair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1023 1155l102 204q-58 179-210 290t-339 111q-156 0-288.5-77.5t-210-210T0 1184q0-181 104.5-330T379 643l17 131q-122 54-195 165.5T128 1184q0 185 131.5 316.5T576 1632q126 0 232.5-65t165-175.5T1023 1155m548 100l58 114l-256 128q-13 7-29 7q-40 0-57-35l-239-477H576q-24 0-42.5-16.5T512 935l-96-779q-2-17 6-42q14-51 57-82.5T576 0q66 0 113 47t47 113q0 69-52 117.5T564 319l37 289h423v128H617l16 128h455q40 0 57 35l228 455z"></svg:path>`,
})
export class FaWheelchairIcon {
  readonly viewBox = input("0 0 1632 1760")
  readonly width = input("0.93em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faWheelchairAltIcon],svg[fa-wheelchair-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1374 813q34 35 29 82l-44 551q-4 42-34.5 70t-71.5 28q-6 0-9-1q-44-3-72.5-36.5T1146 1429l35-429l-143 8q55 113 55 240q0 216-148 372l-137-137q91-101 91-235q0-145-102.5-248T549 897q-134 0-236 92L176 851q120-114 284-141l264-300l-149-87l-181 161q-33 30-77 27.5T244 476t-26.5-77t34.5-73l239-213q26-23 60-26.5t64 14.5l488 283q36 21 48 68q17 67-26 117L920 801l371-20q49-3 83 32m-198-457q-74 0-126-52t-52-126t52-126t126-52t126.5 52t52.5 126t-52.5 126t-126.5 52M549 1598q106 0 196-61l139 139q-146 116-335 116q-148 0-273.5-73T77 1521T4 1248q0-188 116-336l139 139q-60 88-60 197q0 145 102.5 247.5T549 1598"></svg:path>`,
})
export class FaWheelchairAltIcon {
  readonly viewBox = input("0 0 1408 1792")
  readonly width = input("0.79em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faWifiIcon],svg[fa-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 1395q-20 0-93-73.5t-73-93.5q0-32 62.5-54t103.5-22t103.5 22t62.5 54q0 20-73 93.5t-93 73.5m270-271q-2 0-40-25t-101.5-50t-128.5-25t-128.5 25t-101 50t-40.5 25q-18 0-93.5-75T553 956q0-13 10-23q78-77 196-121t233-44t233 44t196 121q10 10 10 23q0 18-75.5 93t-93.5 75m273-272q-11 0-23-8q-136-105-252-154.5T992 640q-85 0-170.5 22t-149 53T559 777t-79 53t-31 22q-17 0-92-75t-75-93q0-12 10-22q132-132 320-205t380-73t380 73t320 205q10 10 10 22q0 18-75 93t-92 75m271-271q-11 0-22-9q-179-157-371.5-236.5T992 256t-420.5 79.5T200 572q-11 9-22 9q-17 0-92.5-75T10 413q0-13 10-23q187-186 445-288T992 0t527 102t445 288q10 10 10 23q0 18-75.5 93t-92.5 75"></svg:path>`,
})
export class FaWifiIcon {
  readonly viewBox = input("0 0 1984 1408")
  readonly width = input("1.41em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faWikipediaWIcon],svg[fa-wikipedia-w-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1494 1511l-295-695q-25 49-158.5 305.5T842 1511q-1 1-27.5.5T788 1510q-82-193-255.5-587T273 327q-21-50-66.5-107.5T103 119T1 76q0-5-.5-24T0 25h583v50q-39 2-79.5 16T437 134t-10 64q26 59 216.5 499T879 1237q31-61 140-266.5T1150 723q-19-39-126-281T888 147q-38-69-201-71V26l513 1v47q-60 2-93.5 25t-12.5 69q33 70 87 189.5t86 187.5q110-214 173-363q24-55-10-79.5T1301 76q1-7 1-25V27q64 0 170.5-.5t180-1t92.5-.5v49q-62 2-119 33t-90 81l-213 442q13 33 127.5 290t121.5 274l441-1017q-14-38-49.5-62.5t-65-31.5t-55.5-8V25l460 4l1 2l-1 44q-139 4-201 145q-526 1216-559 1291z"></svg:path>`,
})
export class FaWikipediaWIcon {
  readonly viewBox = input("0 0 2304 1536")
  readonly width = input("1.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faWindowMaximizeIcon],svg[fa-window-maximize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 1280h1280V512H256zM1792 160v1216q0 66-47 113t-113 47H160q-66 0-113-47T0 1376V160Q0 94 47 47T160 0h1472q66 0 113 47t47 113"></svg:path>`,
})
export class FaWindowMaximizeIcon {
  readonly viewBox = input("0 0 1792 1536")
  readonly width = input("1.17em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faWindowMinimizeIcon],svg[fa-window-minimize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1792 1056v192q0 66-47 113t-113 47H160q-66 0-113-47T0 1248v-192q0-66 47-113t113-47h1472q66 0 113 47t47 113"></svg:path>`,
})
export class FaWindowMinimizeIcon {
  readonly viewBox = input("0 0 1792 1408")
  readonly width = input("1.28em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faWindowRestoreIcon],svg[fa-window-restore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 1536h768v-512H256zm1024-512h512V256h-768v256h96q66 0 113 47t47 113zm768-864v960q0 66-47 113t-113 47h-608v352q0 66-47 113t-113 47H160q-66 0-113-47T0 1632V672q0-66 47-113t113-47h608V160q0-66 47-113T928 0h960q66 0 113 47t47 113"></svg:path>`,
})
export class FaWindowRestoreIcon {
  readonly viewBox = input("0 0 2048 1792")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faWindowsIcon],svg[fa-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M682 878v651L0 1435V878zm0-743v659H0V229zm982 743v786l-907-125V878zm0-878v794H757V125z"></svg:path>`,
})
export class FaWindowsIcon {
  readonly viewBox = input("0 0 1664 1664")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faWordpressIcon],svg[fa-wordpress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M127 896q0-163 67-313l367 1005q-196-95-315-281T127 896m1288-39q0 19-2.5 38.5t-10 49.5t-11.5 44t-17.5 59t-17.5 58l-76 256l-278-826q46-3 88-8q19-2 26-18.5t-2.5-31T1085 465l-205 10q-75-1-202-10q-12-1-20.5 5T646 485t-1.5 18.5t9 16.5t19.5 8l80 8l120 328l-168 504l-280-832q46-3 88-8q19-2 26-18.5t-2.5-31T508 465l-205 10q-7 0-23-.5t-26-.5q105-160 274.5-253.5T896 127q147 0 280.5 53T1415 329h-10q-55 0-92 40.5t-37 95.5q0 12 2 24t4 21.5t8 23t9 21t12 22.5t12.5 21t14.5 24t14 23q63 107 63 212M909 963l237 647q1 6 5 11q-126 44-255 44q-112 0-217-32zm661-436q95 174 95 369q0 209-104 385.5T1282 1560l235-678q59-169 59-276q0-42-6-79M896 0q182 0 348 71t286 191t191 286t71 348t-71 348t-191 286t-286 191t-348 71t-348-71t-286-191t-191-286T0 896t71-348t191-286T548 71T896 0m0 1751q173 0 331.5-68t273-182.5t182.5-273t68-331.5t-68-331.5t-182.5-273t-273-182.5T896 41t-331.5 68t-273 182.5t-182.5 273T41 896t68 331.5t182.5 273t273 182.5t331.5 68"></svg:path>`,
})
export class FaWordpressIcon {
  readonly viewBox = input("0 0 1792 1792")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faWpbeginnerIcon],svg[fa-wpbeginner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 800h160V576H384zm837 332v-92q-104 36-243 38q-135 1-259.5-46.5T498 909l1 96q88 80 212 128.5t272 47.5q129 0 238-49M640 800h640V576H640zm1152-32q0 187-99 352q89 102 89 229q0 157-129.5 268T1339 1728q-122 0-225-52.5T953 1535q-19 1-57 1t-57-1q-58 88-161 140.5T453 1728q-184 0-313.5-111T10 1349q0-127 89-229Q0 955 0 768q0-209 120-385.5T446.5 103T896 0t449.5 103T1672 382.5T1792 768"></svg:path>`,
})
export class FaWpbeginnerIcon {
  readonly viewBox = input("0 0 1792 1728")
  readonly width = input("1.04em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faWpexplorerIcon],svg[fa-wpexplorer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m948 1028l163 329h-51l-175-350l-171 350h-49l179-374l-78-33l21-49l240 102l-21 50zM563 436l304 130l-130 304l-304-130zm344 185l240 103l-103 239l-239-102zm281 150l191 81l-82 190l-190-81zm492 125q0-159-62-304t-167.5-250.5T1200 174t-304-62t-304 62t-250.5 167.5T174 592t-62 304t62 304t167.5 250.5T592 1618t304 62t304-62t250.5-167.5T1618 1200t62-304m112 0q0 182-71 348t-191 286t-286 191t-348 71t-348-71t-286-191t-191-286T0 896t71-348t191-286T548 71T896 0t348 71t286 191t191 286t71 348"></svg:path>`,
})
export class FaWpexplorerIcon {
  readonly viewBox = input("0 0 1792 1792")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faWpformsIcon],svg[fa-wpforms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M515 783v128H263V783zm0-255v127H263V528zm758 511v128H932v-128zm0-256v128H601V783zm0-255v127H601V528zm135 860V148q0-8-6-14t-14-6h-32L978 384L768 213L558 384L180 128h-32q-8 0-14 6t-6 14v1240q0 8 6 14t14 6h1240q8 0 14-6t6-14M553 278l185-150H332zm430 0l221-150H798zm553-130v1240q0 62-43 105t-105 43H148q-62 0-105-43T0 1388V148Q0 86 43 43T148 0h1240q62 0 105 43t43 105"></svg:path>`,
})
export class FaWpformsIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faWrenchIcon],svg[fa-wrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 1344q0-26-19-45t-45-19t-45 19t-19 45t19 45t45 19t45-19t19-45m644-420l-682 682q-37 37-90 37q-52 0-91-37L59 1498q-38-36-38-90q0-53 38-91l681-681q39 98 114.5 173.5T1028 924m634-435q0 39-23 106q-47 134-164.5 217.5T1216 896q-185 0-316.5-131.5T768 448t131.5-316.5T1216 0q58 0 121.5 16.5T1445 63q16 11 16 28t-16 28l-293 169v224l193 107q5-3 79-48.5t135.5-81T1630 454q15 0 23.5 10t8.5 25"></svg:path>`,
})
export class FaWrenchIcon {
  readonly viewBox = input("0 0 1664 1664")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faXingIcon],svg[fa-xing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M597 667q-10 18-257 456q-27 46-65 46H36q-21 0-31-17t0-36l253-448q1 0 0-1L97 388q-12-22-1-37q9-15 32-15h239q40 0 66 45zm806-642q11 16 0 37L875 996v1l336 615q11 20 1 37q-10 15-32 15H941q-42 0-66-45L536 997q18-32 531-942q25-45 64-45h241q22 0 31 15"></svg:path>`,
})
export class FaXingIcon {
  readonly viewBox = input("0 0 1408 1664")
  readonly width = input("0.85em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faXingSquareIcon],svg[fa-xing-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M685 637q0-1-126-222q-21-34-52-34H323q-18 0-26 11q-7 12 1 29l125 216v1L227 984q-9 14 0 28q8 13 24 13h185q31 0 50-36zm624-497q-7-12-24-12h-187q-30 0-49 35L638 892q1 2 262 481q20 35 52 35h184q18 0 25-12q8-13-1-28L900 892v-1l409-723q8-16 0-28m227 148v960q0 119-84.5 203.5T1248 1536H288q-119 0-203.5-84.5T0 1248V288Q0 169 84.5 84.5T288 0h960q119 0 203.5 84.5T1536 288"></svg:path>`,
})
export class FaXingSquareIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faYCombinatorIcon],svg[fa-y-combinator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m809 876l266-499H963L806 689q-24 48-44 92l-42-92l-155-312H445l263 493v324h101zM1536 0v1536H0V0z"></svg:path>`,
})
export class FaYCombinatorIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faYahooIcon],svg[fa-yahoo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m763 957l13 707q-62-11-105-11q-41 0-105 11l13-707q-40-69-168.5-295.5T194 287T13 0q58 15 108 15q44 0 111-15q63 111 133.5 229.5t167 276.5T671 733q37-61 109.5-177.5t117.5-190t105-176T1110 0q54 14 107 14q56 0 114-14q-28 39-60 88.5t-49.5 78.5t-56.5 96t-49 84Q970 595 763 957"></svg:path>`,
})
export class FaYahooIcon {
  readonly viewBox = input("0 0 1344 1664")
  readonly width = input("0.81em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faYelpIcon],svg[fa-yelp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M709 1319v127q-1 292-6 305q-12 32-51 40q-54 9-181.5-38T308 1664q-13-15-17-36q-1-12 4-26q4-10 34-47t181-216q1 0 60-70q15-19 39.5-24.5t49.5 3.5q24 10 37.5 29t12.5 42m-149-251q-3 55-52 70l-120 39q-275 88-292 88q-35-2-54-36q-12-25-17-75q-8-76 1-166.5T56 863t56-32q13 0 202 77q71 29 115 47l84 34q23 9 35.5 30.5T560 1068m826 297q-7 54-91.5 161T1159 1653q-37 14-63-7q-14-10-184-287l-47-77q-14-21-11.5-46t19.5-46q35-43 83-26q1 1 119 40q203 66 242 79.5t47 20.5q28 22 22 61M714 733q5 102-54 122q-58 17-114-71L168 186q-8-35 19-62q41-43 207.5-89.5T619 3q40 10 49 45q3 18 22 305.5T714 733m662 108q3 39-26 59q-15 10-329 86q-67 15-91 23l1-2q-23 6-46-4t-37-32q-30-47 0-87q1-1 75-102q125-171 150-204t34-39q28-19 65-2q48 23 123 133.5t81 167.5z"></svg:path>`,
})
export class FaYelpIcon {
  readonly viewBox = input("0 0 1408 1792")
  readonly width = input("0.79em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faYoastIcon],svg[fa-yoast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M339 218h691l-26 72H339q-110 0-188.5 79T72 558v771q0 95 60.5 169.5T286 1592q23 5 98 5v72h-45q-140 0-239.5-100T0 1329V558q0-140 99.5-240T339 218M1190 0h247L955 1294q-23 61-40.5 103.5t-45 98t-54 93.5t-64.5 78.5t-79.5 65t-95.5 41t-116 18.5v-195q163-26 220-182q20-52 20-105q0-54-20-106L395 471h228l187 585zm474 558v1111H869q37-55 45-73h678V558q0-85-49.5-155T1413 304l25-67q101 34 163.5 123.5T1664 558"></svg:path>`,
})
export class FaYoastIcon {
  readonly viewBox = input("0 0 1664 1792")
  readonly width = input("0.93em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faYoutubeIcon],svg[fa-youtube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M971 1244v211q0 67-39 67q-23 0-45-22v-301q22-22 45-22q39 0 39 67m338 1v46h-90v-46q0-68 45-68t45 68m-966-218h107v-94H138v94h105v569h100zm288 569h89v-494h-89v378q-30 42-57 42q-18 0-21-21q-1-3-1-35v-364h-89v391q0 49 8 73q12 37 58 37q48 0 102-61zm429-148v-197q0-73-9-99q-17-56-71-56q-50 0-93 54V933h-89v663h89v-48q45 55 93 55q54 0 71-55q9-27 9-100m338-10v-13h-91q0 51-2 61q-7 36-40 36q-46 0-46-69v-87h179v-103q0-79-27-116q-39-51-106-51q-68 0-107 51q-28 37-28 116v173q0 79 29 116q39 51 108 51q72 0 108-53q18-27 21-54q2-9 2-58M790 525V315q0-69-43-69t-43 69v210q0 70 43 70t43-70m719 751q0 234-26 350q-14 59-58 99t-102 46q-184 21-555 21t-555-21q-58-6-102.5-46T53 1626q-26-112-26-350q0-234 26-350q14-59 58-99t103-47q183-20 554-20t555 20q58 7 102.5 47t57.5 99q26 112 26 350M511 0h102L492 399v271H392V399q-14-74-61-212Q294 84 266 0h106l71 263zm370 333v175q0 81-28 118q-38 51-106 51q-67 0-105-51q-28-38-28-118V333q0-80 28-117q38-51 105-51q68 0 106 51q28 37 28 117m335-162v499h-91v-55q-53 62-103 62q-46 0-59-37q-8-24-8-75V171h91v367q0 33 1 35q3 22 21 22q27 0 57-43V171z"></svg:path>`,
})
export class FaYoutubeIcon {
  readonly viewBox = input("0 0 1536 1792")
  readonly width = input("0.86em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faYoutubePlayIcon],svg[fa-youtube-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m711 872l484-250l-484-253zM896 10q168 0 324.5 4.5T1450 24l73 4q1 0 17 1.5t23 3t23.5 4.5t28.5 8t28 13t31 19.5t29 26.5q6 6 15.5 18.5t29 58.5t26.5 101q8 64 12.5 136.5T1792 532v176q1 145-18 290q-7 55-25 99.5t-32 61.5l-14 17q-14 15-29 26.5t-31 19t-28 12.5t-28.5 8t-24 4.5t-23 3t-16.5 1.5q-251 19-627 19q-207-2-359.5-6.5T336 1256l-49-4l-36-4q-36-5-54.5-10t-51-21t-56.5-41q-6-6-15.5-18.5t-29-58.5T18 998q-8-64-12.5-136.5T0 748V572q-1-145 18-290q7-55 25-99.5T75 121l14-17q14-15 29-26.5T149 58t28-13t28.5-8t23.5-4.5t23-3t17-1.5q251-18 627-18"></svg:path>`,
})
export class FaYoutubePlayIcon {
  readonly viewBox = input("0 0 1792 1280")
  readonly width = input("1.4em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faYoutubeSquareIcon],svg[fa-youtube-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M919 1175v-157q0-50-29-50q-17 0-33 16v224q16 16 33 16q29 0 29-49m184-122h66v-34q0-51-33-51t-33 51zM532 787v70h-80v423h-74V857h-78v-70zm201 126v367h-67v-40q-39 45-76 45q-33 0-42-28q-6-17-6-54V913h66v270q0 24 1 26q1 15 15 15q20 0 42-31V913zm252 111v146q0 52-7 73q-12 42-53 42q-35 0-68-41v36h-67V787h67v161q32-40 68-40q41 0 53 42q7 21 7 74m251 129v9q0 29-2 43q-3 22-15 40q-27 40-80 40q-52 0-81-38q-21-27-21-86v-129q0-59 20-86q29-38 80-38t78 38q21 29 21 86v76h-133v65q0 51 34 51q24 0 30-26q0-1 .5-7t.5-16.5V1153zM785 329v156q0 51-32 51t-32-51V329q0-52 32-52t32 52m533 713q0-177-19-260q-10-44-43-73.5t-76-34.5q-136-15-412-15q-275 0-411 15q-44 5-76.5 34.5T238 782q-20 87-20 260q0 176 20 260q10 43 42.5 73t75.5 35q137 15 412 15t412-15q43-5 75.5-35t42.5-73q20-84 20-260M563 391l90-296h-75l-51 195l-53-195h-78q7 23 23 69l24 69q35 103 46 158v201h74zm289 81V342q0-58-21-87q-29-38-78-38q-51 0-78 38q-21 29-21 87v130q0 58 21 87q27 38 78 38q49 0 78-38q21-27 21-87m181 120h67V222h-67v283q-22 31-42 31q-15 0-16-16q-1-2-1-26V222h-67v293q0 37 6 55q11 27 43 27q36 0 77-45zm503-304v960q0 119-84.5 203.5T1248 1536H288q-119 0-203.5-84.5T0 1248V288Q0 169 84.5 84.5T288 0h960q119 0 203.5 84.5T1536 288"></svg:path>`,
})
export class FaYoutubeSquareIcon {
  readonly viewBox = input("0 0 1536 1536")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[faAngleDoubleUpIcon],svg[fa-angle-double-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1011 1056q0 13-10 23l-50 50q-10 10-23 10t-23-10L512 736l-393 393q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23m0-384q0 13-10 23l-50 50q-10 10-23 10t-23-10L512 352L119 745q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l466 466q10 10 10 23"></svg:path>`,
})
export class FaAngleDoubleUpIcon {
  readonly viewBox = input("0 0 1024 1280")
  readonly width = input("0.8em")
  readonly height = input("1em")
}
