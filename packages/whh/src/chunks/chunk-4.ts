import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhUserfilterIcon],svg[whh-userfilter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m992.226 256l-380 468l-36 236q0 27-18.5 45.5t-45.5 18.5t-45.5-18.5t-18.5-45.5l-36-236l-380-468l-23-32q-9-15-9-32q0-26 19-45t45-19h256q0 119 16 163q-80 47-80 167q0 13 11.5 23t35.5 15.5t46 9t57 4.5t54 1.5t52 .5t52-.5t54-1.5t57-4.5t46-9t35.5-15.5t11.5-23q0-120-80-167q16-44 16-163h256q27 0 45.5 19t18.5 45q0 17-9 32zm-416 17v53q56 11 91.5 37t36.5 58q0 27-192 27t-192-27q1-32 36.5-58t91.5-37v-55q-64-41-64-166q0-52 36-78.5t92-26.5t92 26.5t36 78.5q0 131-64 168"></svg:path>`,
})
export class WhhUserfilterIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhUsfootballIcon],svg[whh-usfootball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M352 1024q-132 0-288-64Q0 804 0 672q0-144 50.5-269t139-213.5T403 50.5T672 0q132 0 288 64q64 156 64 288q0 144-50.5 269t-139 213.5t-213.5 139t-269 50.5M78 517q-14 68-14 135q0 51 15 118q71 104 175 175q67 15 118 15q67 0 135-14q-164-37-278-151T78 517m380.5-186.5Q448 341 448 355.5t11 25.5l67 67l-77 77l-68-67q-10-11-25-11t-25.5 11t-10.5 25.5t11 25.5l67 67l-77 77l-68-67q-10-11-25-11t-25.5 11t-10.5 25.5t11 25.5l67 67l-3 3q-10 10-10 25t10.5 25.5t25 10.5t25.5-11l3-2l67 66q10 11 25 11t25.5-10.5T449 796t-11-25l-67-67l78-77l67 67q10 10 25 10t25.5-10.5T577 668t-11-25l-67-67l78-77l67 67q10 10 25 10t25.5-10.5T705 540t-11-25l-67-67l77-78l68 68q10 10 25 10t25.5-10.5T833 412t-11-25l-67-67l3-4q11-10 11-25t-10.5-25.5T733 255t-25 11l-4 3l-67-67q-10-10-25-10t-25.5 10.5t-10.5 25t11 25.5l67 67l-78 77l-67-67q-10-10-25-10t-25.5 10.5M945 254Q874 150 770 79q-67-15-118-15q-67 0-135 14q164 37 278 151t151 278q14-68 14-135q0-51-15-118"></svg:path>`,
})
export class WhhUsfootballIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhVIcon],svg[whh-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 625q0 39-17 55l-326 326q-18 18-41 18t-41-18L17 680Q0 663 0 630V64q0-26 19-45T64.5 0T110 19t19 45h-1v553l256 256l256-256V64q0-26 19-45t45.5-19t45 19T768 64z"></svg:path>`,
})
export class WhhVIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhVUpperCaseIcon],svg[whh-v-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 625q0 39-17 55l-326 326q-18 18-41 18t-41-18L17 680Q0 663 0 630V64q0-26 19-45T64.5 0T110 19t19 45h-1v553l256 256l256-256V64q0-26 19-45t45.5-19t45 19T768 64z"></svg:path>`,
})
export class WhhVUpperCaseIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhVanillacmsIcon],svg[whh-vanillacms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M800 192q-35 0-85.5 43t-95 104.5t-76 136.5T512 608q0 160 128 416q-70 0-147.5-30t-147-79T212 800T101.5 664t-74-143.5T0 384q0-61 30-106t73-65.5t89-20.5v128q0 78 21 152t60 138.5t80.5 116T448 832q-64-142-64-256q0-76 27.5-161T482 258.5t92-131T671 34t81-34q53 0 98.5 48.5T896 128q0 18-7.5 31T872 178.5t-24.5 9.5t-24.5 3.5t-23 .5"></svg:path>`,
})
export class WhhVanillacmsIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhVaultthreeIcon],svg[whh-vaultthree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.553 960h-64v32q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-32h-448v32q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-32h-64q-27 0-45.5-19t-18.5-45v-64h-32q-13 0-22.5-9.5T.553 800V608q0-13 9.5-22.5t22.5-9.5h32V448h-32q-13 0-22.5-9.5T.553 416V224q0-13 9.5-22.5t22.5-9.5h32V64q0-26 18.5-45t45.5-19h832q27 0 45.5 19t18.5 45v832q0 27-19 45.5t-45 18.5m-256-480q0-30-12-60l121-120q18-19 18-45t-18.5-44.5t-44.5-18.5t-45 18l-121 121q-29-11-58-11q-30 0-59 11l-121-121q-19-18-45-18t-44.5 18.5t-18.5 44.5t18 45l121 121q-11 29-11 59q0 29 11 58l-121 121q-18 19-18 45t18.5 44.5t44.5 18.5t45-18l120-121q30 12 60 12t59-12l120 121q18 18 44.5 18t45-18.5t18.5-44.5t-18-45l-121-120q12-29 12-59m256-64q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v128q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5zm-416 160q-40 0-68-28t-28-68t28-68t68-28t68 28t28 68t-28 68t-68 28"></svg:path>`,
})
export class WhhVaultthreeIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhVectorIcon],svg[whh-vector-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.356 1024h-64q-27 0-45.5-19t-18.5-45v-64q0-27 18.5-45.5t45.5-18.5q0-111-73.5-192.5t-182.5-93.5v30q0 26-18.5 45t-45.5 19h-128q-27 0-45.5-19t-18.5-45v-34q-135-12-227.5-112.5T64.356 192q-26 0-45-19t-19-45V64q0-27 19-45.5t45-18.5h64q27 0 45.5 18.5t18.5 45.5v64q0 26-19 45t-45 19q0 111 73.5 192.5t182.5 93.5v-30q0-27 18.5-45.5t45.5-18.5h128q27 0 45.5 18.5t18.5 45.5v34q135 12 227.5 112.5t92.5 237.5q26 0 45 18.5t19 45.5v64q0 27-19 45.5t-45 18.5m-448.5-576q-26.5 0-45 19t-18.5 45.5t18.5 45t45 18.5t45.5-18.5t19-45t-19-45.5t-45.5-19"></svg:path>`,
})
export class WhhVectorIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhVectoraltIcon],svg[whh-vectoralt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 832q-47 0-88-6l70 70h50q13 0 22.5 9.5T640 928v64q0 13-9.5 22.5T608 1024h-64q-13 0-22.5-9.5T512 992v-50L399 830q-8 2-15 2H256q-27 0-45.5-18.5T192 768V640q0-7 2-15L81 512H32q-13 0-22.5-9.5T0 480v-64q0-13 9.5-22.5T32 384h64q13 0 22.5 9.5T128 416v50l70 70q-6-41-6-88q0-49 23.5-115.5t64-132T382 79T512 0v64q-63 31-122.5 98T293 307t-37 141q0 69 18 128h110q27 0 45.5 19t18.5 45v110q59 18 128 18q63 0 141-37t145-96.5T960 512h64q-23 68-79 130T823.5 744.5t-132 64T576 832M319.5 640q-26.5 0-45 19T256 704.5t18.5 45t45 18.5t45.5-18.5t19-45t-19-45.5t-45.5-19"></svg:path>`,
})
export class WhhVectoraltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhVendettaIcon],svg[whh-vendetta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M805 704q-25 60-77 120.5t-108 103T509 997t-90 27q-49 0-124.5-45t-149-120.5T32 704Q0 640 0 256q0-64 33-114t91.5-80.5t133-46T419.5 0t161 15.5t130.5 46t89 80.5t32 114q0 384-27 448M416 960q11 0 18.5-21t10-54t3-50.5t.5-34.5q0-13-9.5-22.5T416 768t-22.5 9.5T384 800q0 17 .5 34.5t3 50.5t10 54t18.5 21M192 192q-53 0-90.5 24.5T64 275q0 3 2 11q6-23 42.5-42.5T192 224q36 0 78.5 11.5T347 270t36 50l.5-1.5l.5-1.5q0-39-34-69t-76.5-43t-81.5-13m-64 160q0 13 28 22.5t68 9.5t68-9.5t28-22.5t-28-22.5t-68-9.5t-68 9.5t-28 22.5m288 224q-33 0-58.5-13.5T323 528q-3 9-3 16q0 20 17.5 36.5T383 604q-43 36-111 36q-52 0-92-22.5T131 561q-3 9-3 15q0 46 45 71t115 25q78 0 128-27q50 27 128 27q70 0 115-25t45-71q0-6-3-15q-9 34-49 56.5T560 640q-68 0-111-36q28-7 45.5-23.5T512 544q0-7-3-16q-9 21-34.5 34.5T416 576m288-224q0-13-28-22.5t-68-9.5t-68 9.5t-28 22.5t28 22.5t68 9.5t68-9.5t28-22.5m-64-160q-39 0-81.5 13T482 248t-34 69l.5 1.5l.5 1.5q2-27 36-50t76.5-34.5T640 224q47 0 83.5 19.5T766 286q2-8 2-11q0-34-37.5-58.5T640 192"></svg:path>`,
})
export class WhhVendettaIcon {
  readonly viewBox = input("0 0 832 1024")
  readonly width = input("0.82em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhVersionsIcon],svg[whh-versions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 1024H448q-27 0-45.5-18.5T384 960V64q0-27 18.5-45.5T448 0h512q27 0 45.5 18.5T1024 64v896q0 27-18.5 45.5T960 1024m0-960H448v896h512zM192 832V192q0-27 18.5-45.5T256 128h64v64h-64v640h64v64h-64q-27 0-45.5-18.5T192 832M0 704V320q0-26 18.5-45T64 256h64v64H64v384h64v64H64q-27 0-45.5-18.5T0 704"></svg:path>`,
})
export class WhhVersionsIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhVerticalborderIcon],svg[whh-verticalborder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 960v-64h64v64zm0-192h64v64h-64zm0-128h64v64h-64zm0-128h64v64h-64zm-64-64h64v64h-64zm128-64v64h-64v-64zm-64-128h64v64h-64zm0-128h64v64h-64zm0-128h64v64h-64zM768 0h64v64h-64zm0 512h-64v-64h64zM640 0h64v64h-64zm0 512h-64v-64h64zm-128-64v448h64v64H384v-64h64V64h-64V0h192v64h-64zm-128 64h-64v-64h64zM256 0h64v64h-64zm0 512h-64v-64h64zM128 0h64v64h-64zm0 512H64v-64h64zM0 576v-64h64v64zm0-192h64v64H0zm0-128h64v64H0zm0-128h64v64H0zM0 0h64v64H0zm64 704H0v-64h64zm0 128H0v-64h64zm0 128H0v-64h64zm128-64v64h-64v-64zm128 64h-64v-64h64zm384 0h-64v-64h64zm128 0h-64v-64h64z"></svg:path>`,
})
export class WhhVerticalborderIcon {
  readonly viewBox = input("0 0 960 960")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhVialIcon],svg[whh-vial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 64h-32v768q0 80-56 136t-136 56t-136-56t-56-136V64H32q-13 0-22.5-9.5T0 32T9.5 9.5T32 0h448q13 0 22.5 9.5T512 32t-9.5 22.5T480 64M288 832q13 0 22.5-9.5T320 800t-9.5-22.5T288 768t-22.5 9.5T256 800t9.5 22.5T288 832m-96.5-128q26.5 0 45.5-19t19-45.5t-19-45t-45.5-18.5t-45 18.5t-18.5 45t18.5 45.5t45 19M384 64H128v320h256zm-32 448q-13 0-22.5 9.5T320 544t9.5 22.5T352 576t22.5-9.5T384 544t-9.5-22.5T352 512"></svg:path>`,
})
export class WhhVialIcon {
  readonly viewBox = input("0 0 512 1024")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhViberIcon],svg[whh-viber-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M904 790q-69 61-200 87.5T434 893l-176 132V860q-87-27-136-70q-58-51-90-146.5t-32-195t32-195t90.5-147t167.5-79T513 0t223 27.5t167.5 79t90.5 147t32 195t-32 195T904 790M639 545l65 11q-8-120-92.5-205T407 258l11 65q86 11 148 73t73 149M429 390l12 72q40 20 59 59l72 12q-12-53-51-91.5T429 390m-107 59v-64q0-17-12.5-34T283 326.5t-21-1.5l-46 47q-39 39-11.5 121.5t105 160t160 105T590 747l47-47q7-6-.5-20.5T612 653t-34-12h-64l-37 32q-44-12-109.5-77.5T290 485zm64-320l10 65q100 2 185 52.5t135 135T769 566l65 11q0-91-35.5-174T703 260t-143-95.5T386 129"></svg:path>`,
})
export class WhhViberIcon {
  readonly viewBox = input("0 0 1026 1025")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhVideoIcon],svg[whh-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 960v-64H192v64H0V0h192v64h640V0h192v960zM128 64H64v64h64zm0 128H64v64h64zm0 128H64v64h64zm0 128H64v64h64zm0 128H64v64h64zm0 128H64v64h64zm0 128H64v64h64zm704-704H192v704h640zm128-64h-64v64h64zm0 128h-64v64h64zm0 128h-64v64h64zm0 128h-64v64h64zm0 128h-64v64h64zm0 128h-64v64h64zm0 128h-64v64h64z"></svg:path>`,
})
export class WhhVideoIcon {
  readonly viewBox = input("0 0 1024 960")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhVideocamerathreeIcon],svg[whh-videocamerathree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M985 571L768 386v126q0 53-37.5 90.5T640 640H128q-53 0-90.5-37.5T0 512V128q0-53 37.5-90.5T128 0h512q53 0 90.5 37.5T768 128v126L985 69q16-13 39 7v488q-23 20-39 7M576.5 128q-26.5 0-45.5 18.5t-19 45t19 45.5t45.5 19t45-19t18.5-45.5t-18.5-45t-45-18.5"></svg:path>`,
})
export class WhhVideocamerathreeIcon {
  readonly viewBox = input("0 0 1024 640")
  readonly width = input("1.6em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhVikingIcon],svg[whh-viking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M888 435q8 38 8 77q0 1-.5 2.5l-.5 1.5q18-4 31-4q34 0 34 97q0 39-59.5 76t-164 60T512 768t-224.5-23t-164-60T64 609q0-97 37-97q11 0 28 4q-1-1-1-2v-2q0-39 8-77Q0 349 0 160q0-26 1-40.5t6.5-38T27 38T64 0q0 188 142 281q53-71 133.5-112T512 128t172.5 41T818 281Q960 188 960 0q23 18 37 38t19.5 43.5t6.5 38t1 40.5q0 189-136 275M512 256q-16 0-40 10t-24 22v347q33 5 64 5t64-5V288q0-12-24-22t-40-10"></svg:path>`,
})
export class WhhVikingIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhVimeoIcon],svg[whh-vimeo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 1024q-46 0-84-25.5T332 927t-45.5-99.5t-33.5-119T229.5 588T210 474t-18-90q-2-7-5.5-27t-7-35t-10-31.5t-17-25.5t-24.5-9q-15 0-45 19t-51 45L0 256Q144 0 288 0q50 0 82 42.5T416 160q8 42 22.5 126.5t25 141.5T488 546.5t28 93.5t28 32q30 0 76.5-58t81-135T736 352q0-55-22.5-75.5T649 256q-41 0-73 28q1-70 30-135t81-107T800 0q224 0 224 256q0 74-40.5 177.5t-105 204t-137 189t-144 143T480 1024"></svg:path>`,
})
export class WhhVimeoIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhVineappIcon],svg[whh-vineapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 512v125q-35 3-64 3h-32q-35 74-81.5 140.5t-89 109T547 964t-65.5 46t-33.5 14q-9 0-36-15.5t-68.5-49t-87-81t-91.5-118T82.5 609T23 419T0 192h128q0 92 17 176.5t43.5 147T248 632t66 89.5t62.5 61.5t48 37.5T448 832q12 0 43.5-22t64.5-53.5t58.5-73T640 608q-4-2-11-6t-27-19.5t-38-34.5t-40-52t-38-70t-27-90t-11-112q0-62 36.5-115T572 28T672 0q103 0 163.5 55.5T896 192q0 192-32 256H736q32-128 32-224q0-41-28-68.5T672 128q-41 0-68.5 26T576 224q0 38 8.5 75t31 76.5t57 69t92 48.5T896 512"></svg:path>`,
})
export class WhhVineappIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhVineappaltIcon],svg[whh-vineappalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-128-512q-25 0-49.5-4t-51-15t-46.5-28.5t-32.5-46.5t-12.5-66q0-29 21-62.5t43-33.5q23 0 43.5 19.5t20.5 44.5q0 86-14 128h63q15-46 15-136q0-51-34.5-85.5t-93.5-34.5q-45 0-86.5 41t-41.5 99q0 50 13 94t32 70t38 45.5t32 26.5l13 8q0 17-28 56.5t-59.5 71.5t-40.5 32q-4 0-24-18t-48.5-55.5t-55-85t-45.5-116.5t-19-141h-64q0 101 24.5 190.5t59.5 146t73 98t64.5 59.5t34.5 18q7 0 36.5-22.5t64.5-56.5t63-83.5t28-93.5q40 3 64 0z"></svg:path>`,
})
export class WhhVineappaltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhVinylIcon],svg[whh-vinyl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-704q-80 0-136 56.5t-56 136T376 648t135.5 56t136-56T704 512.5t-56-136T512 320m0 320q-53 0-90.5-37.5T384 512t37.5-90.5T512 384t90.5 37.5T640 512t-37.5 90.5T512 640m-.5-192q-26.5 0-45 19T448 512.5t18.5 45t45 18.5t45.5-18.5t19-45t-19-45.5t-45.5-19"></svg:path>`,
})
export class WhhVinylIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhViolinIcon],svg[whh-violin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M937.06 929q-96-115-104-207l-18-18l16-16l-47-48l-144 144l48 48l16-16l9 9q93 14 211 116q-55 50-131 70.5t-148.5 6.5t-118.5-60q-19-19-39-51q25-34 25-75q0-53-37.5-90.5t-90.5-37.5q-19 0-40 7q-9-7-11-10q-60-59-73.5-156.5t31.5-178.5l-154-188q-15 14-36 14t-36-15l-50-50q-15-16-15-37.5t15-36.5l37-37q16-16 37.5-16t36.5 16l51 50q14 14 14.5 35t-13.5 36l188 154q80-45 177.5-31.5t157.5 73.5q2 3 10 11q-7 21-7 40q0 53 37 90.5t90 37.5q42 0 76-25q33 20 52 39q46 47 60 121t-8 151t-74 131m-505-577l-80 80l80 80l80-80zm48 304l80 80l48-48l-80-80zm176-176l-48 48l80 80l48-48z"></svg:path>`,
})
export class WhhViolinIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhVirusIcon],svg[whh-virus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 576h-70q-14 87-65 158l52 52q19 18 19 45t-19 46t-46 19t-46-19l-51-52q-72 51-158 65v70q0 27-19 45.5t-45.5 18.5t-45-18.5T448 960v-70q-87-14-158-65l-53 52q-18 19-45 19t-46-19t-19-46t19-45l52-53q-50-71-64-157H64q-27 0-45.5-18.5T0 512.5T18.5 467T64 448h70q14-86 65-158l-53-52q-19-19-19-46t19-46t46-19t45 19l53 53q72-51 158-65V64q0-26 18.5-45t45-19T557 19t19 45v70q86 14 157 64l52-52q19-19 46-19t46 19t19 46t-19 45l-52 53q51 71 65 158h70q26 0 45 19t19 45.5t-19 45t-45 18.5M256 384q0 24 3 53t9 62t19.5 55t32.5 22q23 0 43-2.5t40.5-9t32.5-20t12-32.5zm160 320q-13 0-22.5 9.5T384 736t9.5 22.5T416 768h192q13 0 22.5-9.5T640 736t-9.5-22.5T608 704zm160-192q0 19 12 32.5t32.5 20t40.5 9t43 2.5q19 0 32.5-22t19.5-55t9-62t3-53z"></svg:path>`,
})
export class WhhVirusIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhVisaIcon],svg[whh-visa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.31 768h-896q-26 0-45-18.5T.31 704V576h1024v128q0 27-18.5 45.5t-45.5 18.5M.31 64q0-26 18.5-45t45.5-19h896q27 0 45.5 19t18.5 45v64H.31zm329 448l52-320h83l-52 320zm529-320h67l67 320h-77l-19-32h-96l-18 32h-87l124-296l1-2.5l4-6l7-7l11-6zm38 224l-29-137l-35 137zm-338 96q-25 0-49-4.5t-34-8.5l-11-4l12-70q17 14 50 19.5t60.5-1t27.5-26.5q0-13-18-25.5t-40-21.5t-40-29t-18-47q0-29 15.5-51t39.5-32t45-14.5t40-4.5q17 0 36 3.5t29 6.5l10 3l-12 67q-26-16-71.5-14.5t-45.5 25.5q0 12 18.5 23.5t40.5 21t40 30.5t18 48q0 36-24.5 61.5t-55.5 35t-63 9.5m-456-320q16 0 25.5 7.5t11.5 14.5l2 7l28 144l10 47l79-220h90l-133 320h-87l-72-278q-22-13-56-24v-18z"></svg:path>`,
})
export class WhhVisaIcon {
  readonly viewBox = input("0 0 1025 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhVisitorIcon],svg[whh-visitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 1024H64q-27 0-45.5-18.5T0 960V320q0-26 18.5-45T64 256h320v64q0 65 35.5 96.5T512 448q56 0 92-33t36-95v-64h320q26 0 45 19t19 45v640q0 27-18.5 45.5T960 1024M352 806v-18q96-39 96-212q0-63-44.5-95.5t-115-32.5T173 480.5T128 576q0 168 96 210v20q-69 12-114 45t-46 75q0 12 21.5 19.5t63 10.5t68.5 3.5t71 .5t71-.5t68.5-3.5t63-10.5T512 926q-1-42-45.5-75T352 806m512-230H608q-13 0-22.5 9.5T576 608t9.5 22.5T608 640h256q13 0 22.5-9.5T896 608t-9.5-22.5T864 576M576 736q0 13 9.5 22.5T608 768h128q13 0 22.5-9.5T768 736t-9.5-22.5T736 704H608q-13 0-22.5 9.5T576 736m288 96H608q-13 0-22.5 9.5T576 864t9.5 22.5T608 896h256q13 0 22.5-9.5T896 864t-9.5-22.5T864 832M576 128v192q0 27-19 45.5T511.5 384t-45-18.5T448 320V128q-27 0-45.5-18.5t-18.5-45T402.5 19T448 0h128q26 0 45 19t19 45.5t-18.5 45T576 128"></svg:path>`,
})
export class WhhVisitorIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhVkIcon],svg[whh-vk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M772 323q65 48 158.5 139.5T1024 576q0 27-15.5 45.5T960 640H854q-30 0-54-25q-60-64-123-123t-101-84v200q0 13-9.5 22.5T544 640H416q-23 0-66.5-35T256 512q-72-83-164-242T0 64q0-35 15.5-49.5T64 0h106q14 0 29.5 12T223 40q2 5 20 42.5t23 47.5l21 42l24.5 46.5L334 256l26 39l24 29V32q0-13 9.5-22.5T416 0h128q13 0 22.5 9.5T576 32v228q102-69 224-235q8-10 23.5-17.5T854 0h106q35 0 49.5 16t14.5 48q0 44-81.5 122.5T772 323"></svg:path>`,
})
export class WhhVkIcon {
  readonly viewBox = input("0 0 1024 640")
  readonly width = input("1.6em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhVoiceIcon],svg[whh-voice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 826v70h128q26 0 45 18.5t19 45t-18.5 45.5t-45.5 19H192q-27 0-45.5-19T128 959.5t18.5-45T192 896h128v-70Q183 803 91.5 696.5T0 448q0-26 18.5-45T64 384t45.5 19t18.5 45q0 106 75 181t181 75t181-75t75-181q0-26 19-45t45.5-19t45 19t18.5 45q0 142-91.5 248.5T448 826m-64-186q-80 0-136-56t-56-136V192q0-80 56-136T384 0t136 56t56 136v256q0 80-56 136t-136 56"></svg:path>`,
})
export class WhhVoiceIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhVoltageIcon],svg[whh-voltage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M315 832h133l-192 192L64 832h123l142-256H0L192 0h128L171 448h341z"></svg:path>`,
})
export class WhhVoltageIcon {
  readonly viewBox = input("0 0 512 1024")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhVolumedownIcon],svg[whh-volumedown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m794 761l-45-45q84-85 84-204.5T749 308l45-45q49 48 76 112.5T897 512t-27 136t-76 113m-229 251L320 768V255L565 12q30-30 76 15v970q-45 45-76 15M256 768H64q-26 0-45-18.5T0 704V319q0-26 19-45t45-19h192z"></svg:path>`,
})
export class WhhVolumedownIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhVolumeupIcon],svg[whh-volumeup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m874 873l-45-45q62-62 96.5-143.5t34.5-173t-34.5-173T829 195l45-46q71 71 110.5 164.5t39.5 198t-39.5 198T874 873M761 760l-45-45q84-84 84-203.5T716 308l45-45q49 48 76 112.5t27 136t-27 136T761 760m-196 251L320 768V256L565 12q30-30 75 16v968q-45 45-75 15M256 768H64q-27 0-45.5-19T0 704V319q0-26 18.5-45T64 255h192z"></svg:path>`,
})
export class WhhVolumeupIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhVpsIcon],svg[whh-vps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 384h-320v128h384q27 0 45.5 19t18.5 45.5t-18.5 45t-45.5 18.5h-896q-26 0-45-18.5t-19-45t19-45.5t45-19h384V384h-320q-53 0-90.5-37.5T.428 256V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v128q0 53-37.5 90.5t-90.5 37.5m-704-256q-27 0-45.5 19t-18.5 45.5t18.5 45t45 18.5t45.5-18.5t19-45t-18.5-45.5t-45.5-19m640 0h-384q-26 0-45 19t-19 45.5t19 45t45 18.5h384q27 0 45.5-18.5t18.5-45t-18.5-45.5t-45.5-19m-320 640q104 0 192.5 17t140 46.5t51.5 64.5t-51.5 64.5t-140 46.5t-192.5 17t-192.5-17t-140-46.5t-51.5-64.5t51.5-64.5t140-46.5t192.5-17"></svg:path>`,
})
export class WhhVpsIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhVtigerIcon],svg[whh-vtiger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M800 576q-54 0-100.5-24T622 487q-53 25-110 25q-106 0-181-75t-75-181q0-13 2-27q37 10 63 39q4 76 59.5 128T512 448q78 0 134-55q14 52 56.5 85.5T800 512q66 0 113-47t47-113t-47-113t-113-47q-54 0-98 35q-11-70-64.5-116.5T512 64q-45 0-84 19.5T362 137q-28-18-59-28q35-51 90-80T512 0q73 0 133.5 37.5T738 137q31-9 62-9q93 0 158.5 65.5T1024 352t-65.5 158.5T800 576M402 217q53-25 110-25q106 0 181 75t75 181q0 13-2 27q-37-10-63-39q-4-76-59.5-128T512 256q-78 0-134 55q-14-52-56.5-85.5T224 192q-66 0-113 47T64 352t47 113t113 47q54 0 98-35q11 70 64.5 116.5T512 640q45 0 84-19.5t66-53.5q28 18 59 28q-35 51-90 80t-119 29q-73 0-133.5-37.5T286 567q-31 9-62 9q-93 0-158.5-65.5T0 352t65.5-158.5T224 128q54 0 100.5 24t77.5 65"></svg:path>`,
})
export class WhhVtigerIcon {
  readonly viewBox = input("0 0 1024 704")
  readonly width = input("1.46em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWIcon],svg[whh-w-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 72v696q0 106-75 181t-181 75H256q-106 0-181-75T0 768V64q0-26 19-45T64.5 0T110 19t19 45q0 1-.5 3t-.5 3v698q0 53 37.5 90.5T256 896h32q13 0 22.5-9.5T320 864V64q0-26 19-45t45.5-19t45 19T448 64v800q0 13 9.5 22.5T480 896h32q53 0 90.5-37.5T640 768V64q0-26 19-45t45.5-19T750 19t19 45q0 2-1 8"></svg:path>`,
})
export class WhhWIcon {
  readonly viewBox = input("0 0 769 1024")
  readonly width = input("0.76em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWUpperCaseIcon],svg[whh-w-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 72v696q0 106-75 181t-181 75H256q-106 0-181-75T0 768V64q0-26 19-45T64.5 0T110 19t19 45q0 1-.5 3t-.5 3v698q0 53 37.5 90.5T256 896h32q13 0 22.5-9.5T320 864V64q0-26 19-45t45.5-19t45 19T448 64v800q0 13 9.5 22.5T480 896h32q53 0 90.5-37.5T640 768V64q0-26 19-45t45.5-19T750 19t19 45q0 2-1 8"></svg:path>`,
})
export class WhhWUpperCaseIcon {
  readonly viewBox = input("0 0 769 1024")
  readonly width = input("0.76em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWacomIcon],svg[whh-wacom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1004 119L866 257h29q53 0 90.5 37.5T1023 385v511q0 53-37.5 90.5T895 1024H128q-53 0-90.5-37.5T0 896V385q0-53 37.5-90.5T128 257h541L905 20q21-20 49.5-20t49 20.5t20.5 49t-20 49.5M192 353q0-14-9.5-23t-22.5-9H96q-13 0-22.5 9T64 353v192q0 13 9.5 22t22.5 9h64q13 0 22.5-9t9.5-22zm0 383q0-13-9.5-22.5T160 704H96q-13 0-22.5 9.5T64 736v192q0 13 9.5 22.5T96 960h64q13 0 22.5-9.5T192 928zm128-415q-27 0-45.5 18.5T256 385v511q0 27 18.5 45.5T320 960h575q26 0 45-18.5t19-45.5V385q0-27-18.5-45.5T895 321h-93L516 606q-12 12-45 21t-60 11l-28 3q1-12 3-30.5t11-54.5t21-48l187-187z"></svg:path>`,
})
export class WhhWacomIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWalleIcon],svg[whh-walle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512q0-104 40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m320-384H352q-13 0-22.5-9.5T320 608t9.5-22.5T352 576h416V448H352q-13 0-22.5-9.5T320 416t9.5-22.5T352 384h480V256H320q-53 0-90.5 37.5T192 384v256q0 53 37.5 90.5T320 768h512z"></svg:path>`,
})
export class WhhWalleIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWalletIcon],svg[whh-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.56 895h-576q-53 0-90.5-37.5t-37.5-90.5h-64q-53 0-90.5-37.5T.56 639V127q0-53 37.5-90t90.5-37h768q53 0 90.5 37t37.5 90v640q0 53-37.5 90.5t-90.5 37.5m-480-256q96 0 96-96t-96-96t-96 96t96 96m448-512h-647q-37 0-63 25t-26 61v341q0 29 18 51.5t46 29.5V319q0-53 37.5-90.5t90.5-37.5h544q13 0 22.5-9t9.5-22.5t-9.5-23t-22.5-9.5"></svg:path>`,
})
export class WhhWalletIcon {
  readonly viewBox = input("0 0 1025 895")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWalletaltIcon],svg[whh-walletalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.428 768h-256q-27 0-45.5-19t-18.5-45v-64q0-27 18.5-45.5t45.5-18.5h256q26 0 45 18.5t19 45.5v64q0 26-19 45t-45 19m-128-256h-128q-53 0-90.5 37.5t-37.5 90.5v64q0 53 37.5 90.5t90.5 37.5h256v64q0 53-37.5 90.5t-90.5 37.5h-704q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q26 0 45 18.5t19 45t-19 45.5t-45 19h-736q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h672q53 0 90.5 37.5t37.5 90.5v192zm0 448q26 0 45-19t19-45h-64zm-128 0h64v-64h-64zm-128 0h64v-64h-64zm-448-704q-26 0-45 18.5t-19 45.5h64zm0 128h-64v64h64zm0 128h-64v64h64zm0 128h-64v64h64zm0 128h-64v64h64zm0 128h-64q0 26 19 45t45 19zm128-640h-64v64h64zm0 640h-64v64h64zm128-640h-64v64h64zm0 640h-64v64h64zm128-640h-64v64h64zm0 640h-64v64h64zm128-640h-64v64h64zm128 0h-64v64h64zm64 0v64h64q0-27-18.5-45.5t-45.5-18.5m64 128h-64v64h64z"></svg:path>`,
})
export class WhhWalletaltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWarcraftIcon],svg[whh-warcraft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M959.998 760v168q0 13-9.5 22.5t-22.5 9.5h-168q-116 64-248 64t-248-64h-168q-13 0-22.5-9.5t-9.5-22.5V760q-64-116-64-248t64-248V96q0-13 9.5-22.5t22.5-9.5h168q116-64 248-64t248 64h168q13 0 22.5 9.5t9.5 22.5v168q64 116 64 248t-64 248m-448-632q-84 0-158 34t-128 94h158l-51 51l75 303l104-290l103 290l76-303l-51-51h158q-54-60-128-94t-158-34m315 165l-6 6l-106 426l21 43h-192l19-38l-51-154l-51 154l19 38h-192l21-43l-106-426l-6-6q-69 100-69 219q0 104 51.5 192.5t140 140t192.5 51.5t192.5-51.5t140-140t51.5-192.5q0-119-69-219"></svg:path>`,
})
export class WhhWarcraftIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWarmedalIcon],svg[whh-warmedal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m879.417 425l-94 94q-31-56-81-100V0h128q27 0 45.5 19t18.5 45v320q0 24-17 41m-431 599q-87 0-160.5-43t-116.5-116.5t-43-160.5t43-160.5t116.5-116.5t160.5-43t160.5 43t116.5 116.5t43 160.5t-43 160.5t-116.5 116.5t-160.5 43m81-418l-81-168l-81 168l-188 23l138 127l-35 182l166-90l166 90l-35-182l138-127zm47-606h64v372q-31-17-64-29zm-320 0h64v343q-34 12-64 29zm-145 519l-94-94q-17-17-17-41V64q0-26 19-45t45-19h128v419q-50 44-81 100"></svg:path>`,
})
export class WhhWarmedalIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWarmedalaltIcon],svg[whh-warmedalalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M766 384q-5 17-16 28L622 540l-45-12V0h127q27 0 45.5 19T768 64v320zm-414-64l-96 192V0h257v512l-96-192zM18 412Q7 401 2 384H1v-6q-2-10 0-21V64q0-26 18.5-45T65 0h127v528l-46 12zm270 187l96-214l96 214l225 41l-165 151l42 233l-198-114l-197 114l42-233L64 640z"></svg:path>`,
})
export class WhhWarmedalaltIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWarningsignIcon],svg[whh-warningsign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 832q0 26-18.5 45T960 896H64q-27 0-45.5-19T0 832q0-17 9-32L448 64q8-18 11.5-24t12-18.5t18-17T512 0q17 0 29.5 10t19 21.5T576 64l439 736q9 15 9 32M576 320q0-27-18.5-45.5T512 256t-45.5 18.5T448 320v192q0 26 19 45t45 19t45-19t19-45zm-64.5 320q-26.5 0-45 18.5t-18.5 45t19 45.5t45 19t45-19t19-45.5t-19-45t-45.5-18.5"></svg:path>`,
})
export class WhhWarningsignIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWasherIcon],svg[whh-washer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832.417 1024h-768q-26 0-45-19t-19-45V320q0-26 19-45t45-19h768q27 0 45.5 19t18.5 45v640q0 27-18.5 45.5t-45.5 18.5m-384-640q-106 0-181 75t-75 181t75 181t181 75t181-75t75-181t-75-181t-181-75m0 448q-80 0-136-56t-56-136t56-136t136-56t136 56t56 136t-56 136t-136 56m384-640h-768q-26 0-45-19t-19-45V64q0-26 19-45t45-19h768q27 0 45.5 19t18.5 45v64q0 27-18.5 45.5t-45.5 18.5m-608-128h-64q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m128 0q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m128 0q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5"></svg:path>`,
})
export class WhhWasherIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWatchIcon],svg[whh-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1020.82 855l-165 165q-12 12-23 0l-219-218l-25 25q-6 6-14.5 6t-14.5-6l-58-58q-99-5-168.5-75t-74.5-168l-59-59q-6-6-6-14.5t6-14.5l25-25l-218-219q-12-11 0-23l165-165q12-12 23 0l219 218l25-25q6-6 14.5-6t14.5 6l59 59q98 5 168 74.5t75 168.5l58 58q6 6 6 14.5t-6 14.5l-25 25l218 219q12 11 0 23m-506.5-534q-79.5 0-136 56.5t-56.5 136t56.5 135.5t136 56t135.5-56t56-135.5t-56-136t-135.5-56.5m22.5 278q-9 10-23 10t-24-10l-94-93q-10-10-10-23.5t9.5-23.5t23.5-10t24 10l71 70l71-70q9-10 23-10t24 10t10 23.5t-10 23.5z"></svg:path>`,
})
export class WhhWatchIcon {
  readonly viewBox = input("0 0 1027 1026")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWatermelonIcon],svg[whh-watermelon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M808 809Q686 931 534.5 986.5t-294 33T0 899L898 0q98 98 120.5 241t-33 294.5T808 809m88-713L96 896q64 64 160 64q102 0 240-60.5T736 736q105-104 164.5-240.5T960 256q0-49-18.5-91.5T896 96m-31.5 160q-13.5 0-23-9.5t-9.5-23t9.5-22.5t23-9t22.5 9t9 22.5t-9 23t-22.5 9.5m-64 128q-13.5 0-23-9.5T768 352t9.5-22.5T800 320t22.5 9.5T832 352t-9 22.5t-22.5 9.5M736 576q-13 0-22.5-9.5T704 544t9.5-22.5T736 512t22.5 9.5T768 544t-9.5 22.5T736 576m-64-128q-13 0-22.5-9.5T640 416t9.5-22.5T672 384t22.5 9.5T704 416t-9.5 22.5T672 448m-64 128q-13 0-22.5-9.5T576 544t9.5-22.5T608 512t22.5 9.5T640 544t-9.5 22.5T608 576m-64 128q-13 0-22.5-9.5T512 672t9.5-22.5T544 640t22.5 9.5T576 672t-9.5 22.5T544 704m-64-64q-13 0-22.5-9.5T448 608t9.5-22.5T480 576t22.5 9.5T512 608t-9.5 22.5T480 640m-64 128q-13 0-22.5-9.5T384 736t9.5-22.5T416 704t22.5 9.5T448 736t-9.5 22.5T416 768m-128 64q-13 0-22.5-9t-9.5-22.5t9.5-23T288 768t22.5 9.5t9.5 23t-9.5 22.5t-22.5 9m-64.5 64q-13.5 0-22.5-9t-9-22.5t9-23t22.5-9.5t23 9.5t9.5 23t-9.5 22.5t-23 9M416 832q13 0 22.5 9.5t9.5 23t-9.5 22.5t-22.5 9t-22.5-9t-9.5-22.5t9.5-23T416 832m128-64q13 0 22.5 9.5t9.5 23t-9.5 22.5t-22.5 9t-22.5-9.5T512 800t9.5-22.5T544 768m128-128q13 0 22.5 9.5T704 672t-9.5 22.5T672 704t-22.5-9.5T640 672t9.5-22.5T672 640m192.5-192q13.5 0 22.5 9.5t9 22.5t-9 22.5t-22.5 9.5t-23-9.5T832 480t9.5-22.5t23-9.5"></svg:path>`,
})
export class WhhWatermelonIcon {
  readonly viewBox = input("0 0 1025 1026")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWebcamIcon],svg[whh-webcam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 768q-104 0-192.5-51.5t-140-140T0 384t51.5-192.5t140-140T384 0t192.5 51.5t140 140T768 384t-51.5 192.5t-140 140T384 768m0-640q-106 0-181 75t-75 181t75 181t181 75t181-75t75-181t-75-181t-181-75m0 256q-53 0-90.5-28T256 288t37.5-68t90.5-28t90.5 28t37.5 68t-37.5 68t-90.5 28M240 821q68 11 144 11t144-11q50 38 81 92t31 111H128q0-57 31-111.5t81-91.5"></svg:path>`,
})
export class WhhWebcamIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWebcamaltIcon],svg[whh-webcamalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M449 830V701q108-12 182-93.5T705 415t-74-193t-182-94V0q106 8 194 65t139 149.5T833 415t-51 200.5T643 765t-194 65m128-543q0 40-47 68t-113.5 28T303 355t-47-68t47-68t113.5-28T530 219t47 68M128 415q0 111 74 192.5T385 701v129q-107-8-195-65T51 615.5T0 415t51-200.5T190 65T385 0v128q-109 12-183 94t-74 193m0 417q23 22 56.5 36.5T263 888t74.5 6.5T417 896t79-1.5t74.5-6.5t78.5-19.5t56-36.5q22 21 32.5 34t21 38.5T769 960q0 12-9 21t-28 15.5t-38.5 11.5t-51 8t-55 4.5t-60.5 2.5t-56.5 1h-108l-56.5-1l-60-2.5l-55-4.5l-51.5-8l-38.5-11.5L73 981l-9-21q0-30 10.5-55.5T96 866t32-34"></svg:path>`,
})
export class WhhWebcamaltIcon {
  readonly viewBox = input("0 0 833 1024")
  readonly width = input("0.82em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWebhostinghubIcon],svg[whh-webhostinghub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 704q-42 0-82-19q-105 83-238 83q-39 0-78-8q-75 72-178 72q-106 0-181-75T0 576q0-70 35-129.5t95-92.5q7-98 59.5-179t138-128T512 0q144 0 252 95t128 235q58 20 95 69.5t37 112.5q0 80-56 136t-136 56M512 64q-117 0-205.5 75T197 327q30-7 59-7q106 0 181 75t75 181q0 67-33 126q17 2 33 2q101 0 183-58q-55-56-55-134t54-133.5T826 321q-23-111-111-184T512 64m32 256q-40 0-68-28t-28-68t28-68t68-28t68 28t28 68t-28 68t-68 28"></svg:path>`,
})
export class WhhWebhostinghubIcon {
  readonly viewBox = input("0 0 1024 832")
  readonly width = input("1.24em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWebinstaIcon],svg[whh-webinsta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1011 298L785 715q-18 33-53.5 44T641 770q-27 0-49.5-11T557 732L395 440q-16-28-7-59.5t37.5-48.5t60-9t47.5 36l96 174l189-350q23-39 67-50.5t83.5 12t52 68.5t-9.5 85m-498-41q-53 0-90.5-37.5t-37.5-91t37.5-91T513 0t90.5 37.5t37.5 91t-37.5 91T513 257M391 754.5q-40 23.5-83.5 12T241 715L15 298q-22-40-9.5-85t52-68.5t83.5-12t67 50.5l226 418q22 40 9.5 85T391 754.5"></svg:path>`,
})
export class WhhWebinstaIcon {
  readonly viewBox = input("0 0 1026 771")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWebmailIcon],svg[whh-webmail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m667 512l276-276q81 127 81 276t-81 276zM119 184q72-86 174.5-135T512 0t218.5 49T905 184L512 577zM81 788Q0 661 0 512t81-276l276 276zm321-231l71 72q6 5 15.5 8t16.5 3h7q26 1 39-11l71-72l283 283q-72 86-174.5 135T512 1024t-218.5-49T119 840z"></svg:path>`,
})
export class WhhWebmailIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWebpageIcon],svg[whh-webpage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.06 1024h-512q-27 0-45.5-19t-18.5-45V448q0-27 18.5-45.5t45.5-18.5h512q27 0 45.5 18.5t18.5 45.5v512q0 27-18.5 45.5t-45.5 18.5m-64-480q0-13-9.5-22.5t-22.5-9.5h-320q-13 0-22.5 9.5t-9.5 22.5v320q0 13 9.5 22.5t22.5 9.5h320q13 0 22.5-9.5t9.5-22.5zm64-224h-512q-27 0-45.5-19t-18.5-45V64q0-26 18.5-45t45.5-19h512q27 0 45.5 19t18.5 45v192q0 27-18.5 45.5t-45.5 18.5m-704 704h-192q-26 0-45-19t-19-45V64q0-26 19-45t45-19h192q27 0 45.5 19t18.5 45v896q0 27-18.5 45.5t-45.5 18.5"></svg:path>`,
})
export class WhhWebpageIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWebplatformIcon],svg[whh-webplatform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M987.996 986q-38 37-91 37q-4 0-16-2h-8q-41-8-70-40l-290-289l-290 289q-29 32-70 40h-8q-12 2-16 2q-53 0-91-37q-41-42-37-102V128q0-53 37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5v457l164-164q38-38 92-37q54-1 92 37l164 164V128q0-53 37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5v756q4 60-37 102m-858.5-922q-26.5 0-45.5 18.5t-19 45t19 45.5t45.5 19t45-19t18.5-45.5t-18.5-45t-45-18.5m0 767q-26.5 0-45.5 19t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45t-18.5-45.5t-45-19m383-384q-26.5 0-45 19t-18.5 45.5t18.5 45t45 18.5t45.5-18.5t19-45t-19-45.5t-45.5-19m384-383q-26.5 0-45 18.5t-18.5 45t18.5 45.5t45 19t45.5-19t19-45.5t-19-45t-45.5-18.5m0 767q-26.5 0-45 19t-18.5 45.5t18.5 45t45 18.5t45.5-18.5t19-45t-19-45.5t-45.5-19"></svg:path>`,
})
export class WhhWebplatformIcon {
  readonly viewBox = input("0 0 1026 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWebsiteIcon],svg[whh-website-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M881 321q-10-2-15-2q-37 0-64 25q-61-27-114-44q-87-28-182-46q-9-24-27-40Q504 96 546 0q126 9 231.5 73T948 241q-37 40-67 80M417 191q-26 0-49 14q-81-60-163-102Q329 9 483 0q-39 87-63 191zM70 253q34-57 86-108q68 35 141 86q-129-3-227 22m251 40q2 31 21.5 54.5T391 379q-6 70-6 133q0 44 3 101q-22 7-39 24q-54-21-104-48q11-22 11-45q0-40-28-68t-68-28q-44 0-73 34q-42-38-75-79q9-43 27-85q122-34 282-25M65 552q3 37 30.5 62.5T160 640q11 0 24-4q64 37 137 64v4q0 39 26.5 66.5T413 800q25 122 70 223q-100-6-189-48.5T140.5 864T38 704T0 512q0-1 1-27q28 35 64 67m436 197q72 13 145 17q7 20 22 37q-23 105-28 204q-51 13-94 16q-47-107-73-242q18-12 28-32m310 48q13-16 18-34q73-6 141-19q-48 94-132 163q-9-52-27-110m-163-95q-70-4-138-18q-11-50-57-69q-4-59-4-103q0-66 6-137q2 0 5-2t4-2q39 38 68 70q87 96 148 218q-22 17-32 43m89 130q2 0 11-1q17 61 25 121q-29 17-70 34q7-78 24-155q8 1 10 1m-5-239q-1 2-2.5 6t-2.5 6q-63-114-148-207q-31-35-74-76q1 0 1.5-1.5l.5-1.5q84 17 161 42q47 15 103 40q-2 10-2 15q0 30 18 55q-33 63-55 122m47 58q12-35 12-36q20-50 50-107q13 4 25 4q34 0 61-23q49 34 96 76q-6 57-24 110q-82 17-173 24q-13-32-47-48m183-236q0-33-22-60q21-27 42-49q36 82 42 169q-33-25-64-45q2-9 2-15"></svg:path>`,
})
export class WhhWebsiteIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWebsitebuilderIcon],svg[whh-websitebuilder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 256q-3 104-77.5 180T768 512q-29 0-60-8q8 31 33.5 51.5T800 576l96 96l82 85q46 46 46 110.5t-46 110t-110.5 45.5T757 978l-85-82l-96-96q0-40-28-68t-68-28l-7-7v-1l-247 319q-10 9-86.5 9t-85.5-9L9 971q-9-10-9-86.5T9 798l420-325l-216-217H96L0 64L64 0l192 96v116l222 223l66-51q0-1 1-1h1q-34-60-34-127q0-104 75.5-179T768 0v38l-82 78q-46 46-46 110.5T686 337t111 46t111-46l77-81zM128 832q-27 0-45.5 18.5t-18.5 45T82.5 941t45.5 19t45.5-19t18.5-45.5t-18.5-45T128 832"></svg:path>`,
})
export class WhhWebsitebuilderIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWeightIcon],svg[whh-weight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M942 1024H82q-31 0-50-13T6.5 978.5t-6-45t5.5-47T18 844l90-490q14-47 55-72.5t89-25.5h80q-12-33-12-64q0-80 56-136T512 0t136 56t56 136q0 31-12 64h80q48 0 89 25.5t55 72.5l90 490q7 21 12 42.5t5.5 47t-6 45T992 1011t-50 13M512 128q-27 0-45.5 18.5t-18.5 45t18.5 45.5t45.5 19t45.5-19t18.5-45.5t-18.5-45T512 128m96 640h-32q-24 0-44-21t-20-43v-64h32q13 0 22.5-9.5T576 608t-9.5-22.5T544 576h-32v-96q0-13-9.5-22.5T480 448t-22.5 9.5T448 480v96h-32q-13 0-22.5 9.5T384 608t9.5 22.5T416 640h32v64q0 48 40 88t88 40h32q13 0 22.5-9.5T640 800t-9.5-22.5T608 768"></svg:path>`,
})
export class WhhWeightIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWeightscaleIcon],svg[whh-weightscale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M971.23 904q-3 50-43 84.5t-93 34.5h-640q-53 0-93-34.5t-44-84.5l-57-748q-4-64 36-110t102-46h747q62 0 102.5 46t36.5 110zm-458-776q-100 0-186.5 49.5T193.23 320l218 87l-81-161q-9-10-9-23t9.5-22.5t22.5-9.5t22 10l161 184q46 4 76 23l221-88q-47-93-133.5-142.5T513.23 128"></svg:path>`,
})
export class WhhWeightscaleIcon {
  readonly viewBox = input("0 0 1026 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWesternunionIcon],svg[whh-westernunion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 1024q-134 0-195-56.5T512 800V576h-32l-96-192l-96 192H128L0 0h160l96 288L320 0h128l64 288L608 0h160L668 448h36v352q0 31 24.5 63.5T768 896q23 0 43.5-29.5T832 800V448h192v352q0 112-59 168t-197 56"></svg:path>`,
})
export class WhhWesternunionIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWetfloorIcon],svg[whh-wetfloor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m960.428 896l-576-128q-44-8-64-32l-96-160l-32 256q0 26-18.5 45t-45.5 19t-45.5-18.5t-18.5-45.5l54-377q14-75 42-103q9-8 52.5-46t52.5-47l119-99V64q0-25 18-44.5t46-19.5q29 0 46.5 19t17.5 45v128q-1 4-6.5 15.5t-14 27t-11.5 21.5l-117 95q-2 3 3.5 11t11.5 15l6 7l128 160l135-127q6-11 10-16q19-18 44.5-18t43.5 18l197 196q18 19 18 44.5t-18.5 44t-44 18.5t-43.5-18l-150-150l-160 136l416 96q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19m-832-640q-53 0-90.5-37.5T.428 128t37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5m160 640h192q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5m320 64h320q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-320q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5"></svg:path>`,
})
export class WhhWetfloorIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWhatsappIcon],svg[whh-whatsapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M544 960q-124 0-233-60L0 1024l124-311Q64 604 64 480q0-98 38-186.5t102.5-153T357.5 38T544 0t186.5 38t153 102.5t102.5 153t38 186.5t-38 186.5t-102.5 153t-153 102.5T544 960m160-384h-64l-36 32q-45-12-110.5-77.5T416 420l32-36v-64q0-17-12-34t-26.5-24.5T389 260l-47 47q-39 39-11.5 121.5t105 160t160 105T717 682l47-47q6-6-1.5-20.5T738 588t-34-12"></svg:path>`,
})
export class WhhWhatsappIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWhatsappaltIcon],svg[whh-whatsappalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M544 960q-124 0-233-60L0 1024l124-311Q64 604 64 480q0-98 38-186.5t102.5-153T357.5 38T544 0t186.5 38t153 102.5t102.5 153t38 186.5t-38 186.5t-102.5 153t-153 102.5T544 960m0-832q-96 0-177 47T239 303t-47 177t47 177t128 128t177 47t177-47t128-128t47-177t-47-177t-128-128t-177-47m173 554q-39 39-121.5 11.5t-160-105t-105-160T342 307l47-47q6-6 20.5 1.5T436 286t12 34v64l-32 36q12 45 77.5 110.5T604 608l36-32h64q17 0 34 12t24.5 26.5T764 635z"></svg:path>`,
})
export class WhhWhatsappaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWheelIcon],svg[whh-wheel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024M133 450q-5 34-5 62q0 142 91.5 248.5T448 890V698q-84-17-138-68.5T256 512q0-10 2-21q-78-15-125-41m379-322q-108 0-198.5 55.5T173 331q119 53 339 53t339-53q-50-92-140.5-147.5T512 128m254 363q2 11 2 21q0 66-54 118t-138 68v192q137-23 228.5-129.5T896 512q0-28-5-62q-46 26-125 41"></svg:path>`,
})
export class WhhWheelIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWheelchairIcon],svg[whh-wheelchair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1006 875l-63 64q-1 0-1 .5t-1 1.5l-1.5 1l-2.5 1q-4 4-7 5q-18 12-40.5 10.5T851 941L678 767H384q-26 0-45-18.5T320 704V384q0-27 19-45.5t45.5-18.5t45 18.5T448 384v256h249q7-1 16 1q4 0 7 1q7 2 9 3q12 5 22 15l145 145l20-20q19-19 45.5-19t45 19t18.5 45.5t-19 44.5M384 256q-53 0-90-37.5T257 128t37-90.5T384 0t90.5 37.5T512 128t-37.5 90.5T384 256m146 593l3 3q19-18 45.5-18t45 18.5t18.5 45t-18 45.5q-10 10-26 15q-74 50-161.5 62t-173-16T113 911T20 760.5t-16-173T66 426q5-16 15-26q19-19 45.5-19t45 19t18.5 45.5t-18 45.5l3 3q-53 74-45.5 167t74 159.5t159.5 74T530 849"></svg:path>`,
})
export class WhhWheelchairIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWhistleIcon],svg[whh-whistle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m960 256l-345 69q25 59 25 123q0 87-43 160.5T480.5 725T320 768t-160.5-43T43 608.5T0 448q0-116 74-204q-33-16-53.5-47T0 128q0-53 37.5-90.5T128 0t90.5 37.5T256 128q0 1-.5 3.5t-.5 3.5q32-7 65-7h640q17 0 25.5.5t19 3.5t15 10t4.5 18v32q0 23-19 40t-45 24M128 64q-27 0-45.5 18.5T64 128t18.5 45.5t45 18.5t45.5-18.5t19-45.5t-18.5-45.5T128 64"></svg:path>`,
})
export class WhhWhistleIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWhmcsIcon],svg[whh-whmcs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M874 384H733q-34-58-92.5-93T512 256q-106 0-181 75t-75 181t75 181t181 75q70 0 128.5-35t92.5-93h141l-1 1l101 90q-16 33-34 61l-132-35q-22 26-49 49l39 131q-25 17-62 35l-93-99q-33 11-67 17l-35 133q-25 1-29 1q-16 0-42-2l-27-132q-30-6-60-17l-90 101q-34-16-61-34l35-132q-26-22-49-49L87 798q-17-26-35-62l99-93q-11-33-17-67L1 541q-1-25-1-29q0-16 2-42l132-27q6-30 17-60L50 293q16-34 34-61l132 35q22-26 49-49L226 87q26-17 62-35l93 99q33-11 67-17L483 1q26-1 29-1q16 0 42 2l27 132q30 6 60 17l90-101q34 16 61 34l-35 132q26 22 49 49l131-39q17 25 35 62l-99 93v2z"></svg:path>`,
})
export class WhhWhmcsIcon {
  readonly viewBox = input("0 0 974 1024")
  readonly width = input("0.96em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWifiIcon],svg[whh-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.33 255q-20 0-66-20t-97-44t-130-44t-155-20t-155 20t-130 44t-97 44t-66 20q-27 0-45.5-18T.33 192q0-12 13.5-30t34.5-32q214-130 464-130t464 130q48 24 48 62q0 27-18.5 45t-45.5 18m-791 101q158-100 343-100t343 100q41 26 41 60q0 26-19.5 44.5t-44.5 19.5v-1q-9 0-41.5-15t-70.5-33t-95.5-33t-112.5-15t-112.5 15t-95.5 33t-70.5 33t-41.5 15q-27 0-45.5-18t-18.5-45q0-34 41-60m343 155q41 0 93 18t91.5 48.5t39.5 62.5q0 27-19 45.5t-45 18.5t-48-10t-35-22t-33.5-22.5t-43.5-10.5q-24 0-44.5 10.5t-33 22.5t-34.5 22t-48 10t-45-18.5t-19-45.5q0-32 39.5-62.5t91.5-48.5t93-18m0 257q53 0 90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5t-90.5-37.5t-37.5-90.5t37.5-90.5t90.5-37.5"></svg:path>`,
})
export class WhhWifiIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWindIcon],svg[whh-wind-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 512H64q-26 0-45-19T0 447.5t19-45T64 384h192q27 0 45.5-19t18.5-45.5t-18.5-45t-45-18.5t-45.5-19t-19-45.5t19-45t45-18.5q6 0 13 1q75 5 127 60t52 131q0 31-12 64h332q53 0 90.5-37.5T896 256t-37.5-90.5T768 128t-90.5 37.5T640 256q0 26-18.5 45t-45 19t-45.5-19t-19-45q0-106 75-181T768 0t181 75t75 181t-75 181t-181 75M64 576h320q4 0 11 1q11-1 21-1q93 0 158.5 65.5T640 800q0 48-13.5 87.5T584 958t-79.5 48.5T384 1024q-27 0-45.5-19T320 959.5t19-45t45-18.5q31 0 53.5-3t36.5-10.5t22-14t11.5-20.5t4-22.5t.5-25.5q0-40-28-68t-68-28H64q-26 0-45-19T0 639.5t18.5-45T64 576"></svg:path>`,
})
export class WhhWindIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWindleftIcon],svg[whh-windleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m981.356 426l-548 79q-15 10-30 4l-19 3v-14l-256-153v615q0 26-18.5 45t-45 19t-45.5-19t-19-45V64q0-27 19-45.5T64.856 0t45 18.5t18.5 45.5v103l256-153V0l19 3q15-6 30 4l548 79q18 2 30.5 15.5t12.5 31.5v246q0 18-12.5 31.5t-30.5 15.5m-853-184v28l256 152V90zm384-137l-64-9v320l64-9zm256 34l-128-17v268l128-17zm192 57q0-14-9.5-24t-23.5-12l-31-4v200l31-4q14-2 23.5-12t9.5-24z"></svg:path>`,
})
export class WhhWindleftIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWindmillIcon],svg[whh-windmill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M683 356q14 32 21 60l18 157l165 137q9 9 9 22t-9 22L759 882l9 78q0 20-17 42t-41 22H186q-26 0-42-19t-16-45l9-78L9 754q-9-9-9-22t9-22l164-137l19-157q7-28 21-60L9 186q-9-9-9-22t9-22L142 9q9-9 22-9t22 9l167 200q43-17 95-17t95 17L710 9q9-9 22-9t22 9l133 133q9 9 9 22t-9 22zM204 865l-12 95h128V800q0-13 9.5-22.5T352 768h192q13 0 22.5 9.5T576 800v160h128l-12-95l-203-243q-9-10-9-23t9-22l22-22l-46-46q-9 3-17 3t-17-3l-46 46l22 22q9 9 9 22t-9 23zm137-480l-22 22q-10 9-22.5 9t-22.5-9l-5-4q-8 23-13 45l-8 63l26-22q10-9 22.5-9t22.5 9l22 22l46-46q-3-9-3-17t3-17zm148-111l9-11q-26-7-50-7t-50 7l9 11q9 10 9 22.5t-9 22.5l-22 22l45 46q10-3 18-3t17 3l46-46l-22-22q-9-10-9-22.5t9-22.5m151 174q-5-22-13-45l-5 4q-10 9-23 9t-22-9l-22-22l-46 46q3 9 3 17t-3 17l46 46l22-22q9-9 22-9t23 9l26 22z"></svg:path>`,
})
export class WhhWindmillIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWindmillaltIcon],svg[whh-windmillalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 345q17 31 32.5 60.5t34 66.5t31 68t21.5 59.5t9 47t-11 24.5q-12 7-35-8.5t-51-49t-54-69.5t-54-79q13 171 13 528q0 13-9.5 22.5T416 1025h-64q-13 0-22.5-9.5T320 993q0-373 14-544h-46q-13 0-22.5-9.5T256 417v-36Q0 368 0 321.5T256 261v-36q0-13 9.5-22.5T288 193h158q60-90 110-146.5T629 3q11 6 11 25t-9 47t-21.5 59.5t-31 68t-34 66.5t-32.5 61z"></svg:path>`,
})
export class WhhWindmillaltIcon {
  readonly viewBox = input("0 0 640 1025")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWindowsIcon],svg[whh-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 1024V576h448v448zM576 0h448v448H576zM0 576h448v448H0zM0 0h448v448H0z"></svg:path>`,
})
export class WhhWindowsIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWindowseightIcon],svg[whh-windowseight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M478 922V546h546v478zm0-819L1024 0v478H478zm-68 375H0V205l410-90zm0 431L0 819V546h410z"></svg:path>`,
})
export class WhhWindowseightIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWindrightIcon],svg[whh-windright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.888 1024q-27 0-45.5-19t-18.5-45V345l-256 153v14l-19-3q-15 6-30-4l-548-79q-18-2-30.5-15.5T.888 379V133q0-18 12.5-32t30.5-15l548-79q15-10 30-4l19-3v14l256 153V64q0-27 18.5-45.5t45-18.5t45.5 18.5t19 45.5v896q0 26-18.5 45t-45.5 19m-832-868l-31 4q-14 2-23.5 12t-9.5 24v120q0 14 9.5 24t23.5 12l31 4zm256-34l-128 17v234l128 17zm192-26l-64 9v302l64 9zm64-6v332l256-152v-28z"></svg:path>`,
})
export class WhhWindrightIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWineIcon],svg[whh-wine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 632v264h128q26 0 45 18.5t19 45t-19 45.5t-45 19H128q-27 0-45.5-19T64 959.5t18.5-45T128 896h128V632Q145 605 72.5 499.5T0 256Q0 110 82 0h476q82 110 82 256q0 138-73 243.5T384 632M524 64H116q-52 86-52 192q0 67 21 128h469q22-61 22-128q0-106-52-192"></svg:path>`,
})
export class WhhWineIcon {
  readonly viewBox = input("0 0 640 1024")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWineglassIcon],svg[whh-wineglass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M901 576q-99 99-227.5 122T449 659L278 830l88 88q18 18 18 43.5t-18 43.5t-43.5 18t-43.5-18L18 745Q0 727 0 701.5T18 658t43.5-18t43.5 18l88 88l171-171q-61-96-38.5-224.5T447 123Q551 20 687 0q59 58 115 114t120 120.5T1024 337q-20 136-123 239M674 68q-95 23-169 97q-47 47-74 104t-31 115h545q8-22 11-34z"></svg:path>`,
})
export class WhhWineglassIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWizardIcon],svg[whh-wizard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1004.075 1005q-19 19-45 20t-44-17l-642-643q-18-18-17-44t20-45t45-20t44 17l642 643q18 18 17 44t-20 45m-60-749l-80-46l-79 46l17-93l-66-65l90-12l38-86l39 86l90 12l-66 65zm-798-17l-129-130q-18-18-17-44t20-45t45-20t44 17l129 130q18 18 17 44t-20 45t-45 20t-44-17m-25 231l39-86l38 86l90 12l-66 65l17 94l-79-46l-80 46l17-94l-65-65zm256 385l39-86l38 86l90 11l-66 66l17 93l-79-46l-79 46l17-93l-66-66z"></svg:path>`,
})
export class WhhWizardIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWizardaltIcon],svg[whh-wizardalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1004.774 1006q-19 19-45 20t-44-17l-449-450q-18-18-17-44t20-45t45-20t44 17l449 450q18 18 17 44t-20 45m-363-620l-128 32l-148-143q-17-18-43-17t-45 20t-20 45t17 44l143 147l-32 128q-2 3-5.5 8t-5.5 8t-5 6.5t-5.5 5t-6 1.5t-6.5-3l-126-154h-192q-16-5-26-13t-6-19l128-192l-65-193q0-13 9.5-22.5t22.5-9.5l193 65l192-128q11-4 19 6t13 26v192l153 126q3 3 3 6.5t-1.5 6t-5 6t-6.5 5.5t-8 5t-7 5"></svg:path>`,
})
export class WhhWizardaltIcon {
  readonly viewBox = input("0 0 1025 1026")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWizardhatIcon],svg[whh-wizardhat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 1024H64q-26 0-45-19T0 959.5t19-45T64 896h192l142-615l-142 39h-32q-13 0-22.5-9.5T192 288t9.5-22.5T224 256L512 0q26 0 45 19t19 45l192 832h192q27 0 45.5 18.5T1024 960t-18.5 45.5T960 1024"></svg:path>`,
})
export class WhhWizardhatIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWomanaltIcon],svg[whh-womanalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 416L320 608l128 224q0 10-38.5 26T320 885v107q0 13-9.5 22.5T288 1024H160q-13 0-22.5-9.5T128 992V884q-51-10-89.5-26.5T0 832l32.5-57L97 662.5l31-54.5q1 1-12-18.5l-32-48L46 485l-32.5-48.5L0 416q0-13 63.5-35T192 354v-34H0q7-11 17.5-28.5T46 231t18-71q0-66 47-113T224 0t113 47t47 113q0 28 16 68t32 66l16 26H256v34q65 5 128.5 26.5T448 416"></svg:path>`,
})
export class WhhWomanaltIcon {
  readonly viewBox = input("0 0 448 1024")
  readonly width = input("0.44em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWomenIcon],svg[whh-women-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M737 663.5q-23 13.5-48.5 6.5T650 640l-73-127v127l119 159q14 23 7 49t-30 39q-15 9-32 9h-64v64q0 26-19 45t-45.5 19t-45-19t-18.5-45v-64H321v64q0 26-19 45t-45.5 19t-45-19t-18.5-45v-64h-64q-17 0-32-9q-23-13-30-39t7-49l119-159V513l-73 127q-13 23-38.5 30T33 663.5T3 624t7-49l128-223q17-31 55-31v-1h128v-49q-16-10-28-27q-34 23-68 3q-23-13-30-39t7-49l62-92q12-33 44.5-50T385 0t76.5 17T506 67l62 92q14 23 7 49t-30 39q-33 19-66-2q-12 17-30 28v47h128v1q38 0 55 31l128 223q14 23 7 49t-30 39.5"></svg:path>`,
})
export class WhhWomenIcon {
  readonly viewBox = input("0 0 770 1024")
  readonly width = input("0.76em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWordpressIcon],svg[whh-wordpress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 192q0 14 1 24.5t4.5 21t6 17t10 17t10.5 15t14.5 18.5t16.5 19q22 28 28.5 45.5T861 410q-7 34-16 60l-77 202l-83-188q-9-22-37-117.5T620 264q0-14 10-21q22-18 42-19v-32H384v32q9 1 14 6t9.5 11.5t7.5 9.5q14 12 33 58l32 107l-64 256l-132-349q-20-51-20-62t11-19q24-18 45-18v-32H113q71-90 175.5-141T512 0q95 0 182 33.5T850 128q-39 0-60.5 16T768 192M66 261q25 29 60 123l194 512h64l128-384l160 384h64l151-390q6-17 24-53.5t30.5-70T957 322q3-40 3-58q64 116 64 248q0 139-68.5 257T769 955.5T512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512q0-134 66-251"></svg:path>`,
})
export class WhhWordpressIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWorkshirtIcon],svg[whh-workshirt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 1024H128q-53 0-90.5-37.5T0 896V256q0-53 37.5-90.5T128 128h64l64-96Q274 0 384 0h256q110 0 128 32l64 96h64q53 0 90.5 37.5T1024 256v640q0 53-37.5 90.5T896 1024M320 64l-64 96l96 96l96-128zm81 237q-25 19-49 19q-32 0-64-32l-64-64q-13-13-22-32h-74q-26 0-45 18.5T64 256v640q0 27 18.5 45.5T128 960h192l129-617zM704 64l-128 64l96 128l96-96zm256 192q0-27-19-45.5T896 192h-75q-8 19-21 32l-64 64q-32 32-64 32q-24 0-49-19l-49 43l130 616h192q26 0 45-18.5t19-45.5z"></svg:path>`,
})
export class WhhWorkshirtIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWorldIcon],svg[whh-world-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5M293 293l-48-42q-11 0-26 2.5t-27 2.5q-1-1-18-37Q64 346 64 512q0 3 .5 8t.5 7q6 6 29.5 22.5T128 576h64q3-2 5.5-3t5.5-2q-10-11-29.5-32.5T144 507q4-23 11-69.5t10-69.5q86-36 128-53zm201-163q-14-6-26-11q-3-8-4-12q-6 19-19 57q4 1 11.5 2t11.5 2h26zm-4 471q-5 5-7 8q-12 21-34 64t-33 64q14 21 42.5 64t42.5 64q130 8 197 12q2 25 16 34q91-46 154-127.5T951 601q-19-4-41.5-11t-32.5-9.5t-39.5-5T776 579q-12 1-15.5-15.5t-3.5-34t-4-18.5q-22-4-89 7.5t-89 7.5q-13 12-85 75m59-501q-3 20-10.5 60T527 221q5-1 16.5-2.5T560 217q-3-2-7-4q15-5 22-8q-17-70-26-105m116-9q-2 11-2 31t-10 53q1 2 4 4q20-2 67-7q0-21 21-42q-38-23-80-39m125 70q-2 4-7 11q19 3 25 5q-12-11-18-16m27 24q-3 6-9.5 18t-9.5 18q-29 1-78 3l-4-34q-2 1-7 2.5t-8 1.5v49q-21 2-64.5 6t-64.5 6q-7 10-15 22q27 58 41 87q-20 5-82 22v34q0 2 1.5 6t2.5 6q17 8 53 24t54 25l22-27q-1-10-5-31.5t-6-32.5q3-2 9.5-5.5t9.5-5.5q27-8 41-11q13 21 36.5 60t29.5 49q9-8 25-24.5t24-24.5q-54-38-71-49q1-8 4-23h37q56 48 115 98q1 0 2-1.5t2-1.5q-4-8-26-49q0-1 3-4l4-4h41q1-1 17-9q-34-116-124-200"></svg:path>`,
})
export class WhhWorldIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWrenchIcon],svg[whh-wrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1015 798q9 10 9 86.5t-9 86.5l-44 44q-10 9-86.5 9t-86.5-9L383 480v-1l-1-1q-59 34-126 34q-105 0-179-73T0 262v-6h38l83 83q45 45 108.5 45T338 339t45-109t-45-109l-82-82V0h6q104 3 176.5 77.5T511 256q0 68-33 127l1 1zM895.5 960q26.5 0 45-19t18.5-45.5t-18.5-45t-45-18.5t-45.5 18.5t-19 45t19 45.5t45.5 19"></svg:path>`,
})
export class WhhWrenchIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWrenchaltIcon],svg[whh-wrenchalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M257 512q57 0 122-37l169 168l1 1q-37 66-37 123q0 104 76 179t180 78v-40l-82-77q-46-45-46-110t46-111t111-46t110 46l77 82h40q-3-104-78-180t-179-76q-57 0-123 37L476 381l-1-1q37-66 37-123q0-104-76-179T256 0v40l82 77q46 45 46 110t-46 111t-111 46t-110-46l-77-82H0q3 104 78 180t179 76"></svg:path>`,
})
export class WhhWrenchaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhWwfIcon],svg[whh-wwf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M848 243q-53-71-142-100q6-34 32.5-56.5T800 64q40 0 68 28t28 68q0 26-13 48t-35 35m-80 141v8q0 19-.5 30t-3 27t-9.5 23.5t-19 7.5q-26 0-61-35t-35-61.5t19-45t45.5-18.5t45 19t18.5 45M576 640q-27 0-45.5-9.5T512 608t19-22.5t45.5-9.5t45 9.5T640 608t-18.5 22.5T576 640M416 480q-12 0-19-7.5t-9.5-23.5t-3-27t-.5-30v-8q0-27 19-45.5t45.5-18.5t45 18.5T512 384t-34.5 61.5T416 480m-96-160v64q0 75 44.5 136.5T481 614q7 24 44.5 57t66.5 33q25 0 57-25.5t48-51.5q87-25 138.5-67T896 448q0 147-21 261t-65 182.5T704 960q-26 0-45-19t-19-45q0-102-60-182q-68 64-68 118q0 21 10 38t22 26t22 26t10 38q0 26-19 45t-45 19q-10 0-34-11.5t-56.5-35t-63.5-54t-57.5-73.5t-37.5-88q-21 6-39 6q11 11 16 17t10.5 19t5.5 28q0 27-18.5 45.5T192 896q-62 0-106-59.5t-65-159T0 448q0-121 55-212.5T192 128q-55 40-91.5 111.5T64 384q0 98 49.5 170.5T236 637q-44-84-44-189q0-101 40-182.5T336 149q-16-24-16-53q0-40 28-68t68-28t68 28t28 68q0 16-6 33q-75 3-126.5 52.5T320 320"></svg:path>`,
})
export class WhhWwfIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhXIcon],svg[whh-x-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m462 512l286 401q21 28 21 47q0 27-19 45.5t-45 18.5q-7 0-13.5-1t-11.5-3.5t-8.5-4.5t-8-6t-5.5-5.5t-5-6.5l-4-5l-265-370l-264 370l-4 5l-5 6.5l-5.5 5.5l-8 6l-9 4.5L77 1023l-13 1q-26 0-45-18.5T0 960q0-19 21-47l286-401L16 105q-1-1-4-5.5T7.5 93T4 86.5t-2.5-10T1 64q0-26 18.5-45T65 0q38 0 56 34l263 369L648 34q18-34 56-34q27 0 45.5 19T768 64q0 7-.5 12.5t-2.5 10t-3.5 6.5t-4.5 6.5t-4 5.5z"></svg:path>`,
})
export class WhhXIcon {
  readonly viewBox = input("0 0 769 1024")
  readonly width = input("0.76em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhXUpperCaseIcon],svg[whh-x-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m462 512l286 401q21 28 21 47q0 27-19 45.5t-45 18.5q-7 0-13.5-1t-11.5-3.5t-8.5-4.5t-8-6t-5.5-5.5t-5-6.5l-4-5l-265-370l-264 370l-4 5l-5 6.5l-5.5 5.5l-8 6l-9 4.5L77 1023l-13 1q-26 0-45-18.5T0 960q0-19 21-47l286-401L16 105q-1-1-4-5.5T7.5 93T4 86.5t-2.5-10T1 64q0-26 18.5-45T65 0q38 0 56 34l263 369L648 34q18-34 56-34q27 0 45.5 19T768 64q0 7-.5 12.5t-2.5 10t-3.5 6.5t-4.5 6.5t-4 5.5z"></svg:path>`,
})
export class WhhXUpperCaseIcon {
  readonly viewBox = input("0 0 769 1024")
  readonly width = input("0.76em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhXboxIcon],svg[whh-xbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 832q-11-5-30.5-14.5t-79-42t-118-67.5T659 618T512 507q-68 56-146 110.5T226 709t-115 66t-81.5 43T0 832q10-9 28-25.5T96.5 739t96-101T292 518.5T383 389Q213 218 70 9l-6-9q8 8 23.5 22.5t64 54t98.5 73t122 71T512 279q68-21 139-57t124-73.5T871.5 77T937 22l23-22q-15 23-43 62T805.5 204T641 389q37 60 90 128t102.5 122t93.5 98.5t70.5 69.5z"></svg:path>`,
})
export class WhhXboxIcon {
  readonly viewBox = input("0 0 1024 832")
  readonly width = input("1.24em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhXmenIcon],svg[whh-xmen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m0-192q78 0 148-36L512 648L364 796q70 36 148 36M228 660l148-148l-148-148q-36 70-36 148t36 148m284-468q-78 0-148 36l148 148l148-148q-70-36-148-36m284 172L648 512l148 148q36-70 36-148t-36-148"></svg:path>`,
})
export class WhhXmenIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhXoopsIcon],svg[whh-xoops-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M873 435q23 69 23 141q0 91-35.5 174T765 893t-143 95.5t-174 35.5t-174-35.5T131 893T35.5 750T0 576t35.5-174T131 259t143-95.5T448 128q72 0 141 23q23-67 81-109T800 0q93 0 158.5 65.5T1024 224q0 72-42 130t-109 81m-161-68q18 10 39 14.5t35 1.5t14-11q0-16-17-33t-47-17q-14 0-38-16.5T657 273l-17-17q0 26 21.5 60t50.5 51M64 640q0 50 43.5 116.5T207 854q38 21 80 29.5t69.5 3T384 864q0-31-34-63.5T256 768q-57 0-180-117zm448-416q0-7 1-23q-41-9-87-9q-56 0-110.5 27t-89 70t-34.5 86q0 59 53 98t155 39q41 0 68.5-6.5t42.5-17t25.5-21.5t25.5-22t35-17q-85-84-85-204M758 64q-44 0-81 29t-37 62q0 30 26.5 49.5T745 224q24 0 39-4.5t22.5-11.5t14-13.5t20-11.5t34.5-5q24 0 22-25q-3-35-44-63q-40-26-95-26"></svg:path>`,
})
export class WhhXoopsIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhYIcon],svg[whh-y-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 67v701q0 106-75 181t-181 75H192q-27 0-45.5-19T128 960t18.5-45t45.5-19h320q53 0 90.5-37.5T640 768V605q-60 35-128 35H256q-106 0-181-75T0 384V64q0-26 18.5-45t45-19T109 19t19 45v320q0 53 37.5 90.5T256 512h256q53 0 90.5-37.5T640 384V64q0-26 18.5-45t45-19T749 19t19 45z"></svg:path>`,
})
export class WhhYIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhYUpperCaseIcon],svg[whh-y-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 67v701q0 106-75 181t-181 75H192q-27 0-45.5-19T128 960t18.5-45t45.5-19h320q53 0 90.5-37.5T640 768V605q-60 35-128 35H256q-106 0-181-75T0 384V64q0-26 18.5-45t45-19T109 19t19 45v320q0 53 37.5 90.5T256 512h256q53 0 90.5-37.5T640 384V64q0-26 18.5-45t45-19T749 19t19 45z"></svg:path>`,
})
export class WhhYUpperCaseIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhYahooIcon],svg[whh-yahoo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M991.998 256h-119l-297 328v312h96q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-384q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h96V591l-262-461v-2h-90q-13 0-22.5-9.5T-.002 96V32q0-13 9.5-22.5t22.5-9.5h384q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-126l212 367l218-239h-112q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h384q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5"></svg:path>`,
})
export class WhhYahooIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhYelpIcon],svg[whh-yelp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m754 511l-272 66q-18-4-27.5-18t-4.5-29l155-185q6-17 30-22.5t39 15.5l80 111q26 39 0 62M487 641l247 127q19 0 29.5 19.5T757 826L633 951q-20 16-39 5.5T574 927L448 681q-1-17 11-28.5t28-11.5m-170 378l-168-67q-24-13-21-36.5t21-29.5l168-166q22-23 44.5-11t22.5 44v232q0 25-21 35.5t-46-1.5m0-521L85 140q-18-6-21-29.5T85 74L317 7q25-12 46-1.5T384 41v424q0 32-22.5 44T317 498m-13 74q16 15 16 37t-16 37L76 757q-11 11-29 12t-32.5-10.5T0 725V493q0-22 14.5-33.5T47 449t29 12z"></svg:path>`,
})
export class WhhYelpIcon {
  readonly viewBox = input("0 0 768 1026")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhYenIcon],svg[whh-yen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M751 105L448 408v104h128q27 0 45.5 19t18.5 45.5t-18.5 45T576 640H448v64h128q27 0 45.5 19t18.5 45.5t-18.5 45T576 832H448v128q0 27-18.5 45.5t-45 18.5t-45-18.5T321 960V832H193q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45.5-19h128v-64H193q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45.5-19h128V408L18 105Q0 87 0 61.5T18 18T61.5 0T105 18l279 279L664 18q18-18 43.5-18T751 18t18 43.5t-18 43.5"></svg:path>`,
})
export class WhhYenIcon {
  readonly viewBox = input("0 0 769 1024")
  readonly width = input("0.76em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhYenaltIcon],svg[whh-yenalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1023q-104 0-199-40.5t-163.5-109T40.5 710T0 511t40.5-198.5t109-163T313 40.5T512 0t199 40.5t163.5 109t109 163T1024 511t-40.5 199t-109 163.5t-163.5 109t-199 40.5m302-814q-18-18-43.5-18T727 209L512 371L296 209q-18-18-43.5-18T209 209t-18 43.5t18 43.5l239 180v35h-96q-13 0-22.5 9.5t-9.5 23t9.5 22.5t22.5 9h96v64h-96q-13 0-22.5 9.5T320 671t9.5 22.5T352 703h96v128q0 27 18.5 45.5t45 18.5t45.5-18.5t19-45.5V703h96q13 0 22.5-9.5T704 671t-9.5-22.5T672 639h-96v-64h96q13 0 22.5-9t9.5-22.5t-9.5-23T672 511h-96v-35l238-180q18-18 18-43.5T814 209"></svg:path>`,
})
export class WhhYenaltIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhYensquareIcon],svg[whh-yensquare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-81.5-815q-18.5-18-44-18t-43.5 18l-215 163l-216-163q-18-18-43.5-18t-43.5 18t-18 43.5t18 43.5l239 181v35h-96q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h96v64h-96q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h96v128q0 27 18.5 45.5t45 18.5t45.5-18.5t19-45.5V704h96q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-96v-64h96q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-96v-35l239-181q18-18 18-43.5t-18.5-43.5"></svg:path>`,
})
export class WhhYensquareIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhYiiframeworkIcon],svg[whh-yiiframework-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768.488 640q-32-128-64-192q-21-43-32-67.5t-21.5-68t-10.5-88.5q0-57 14.5-102t38-70.5t51-38.5t56.5-13q46 0 83.5 37.5t57 95.5t19.5 123q0 92-54 196t-138 188m-352 384q-4-7-9-21.5t-14-64t-9-106.5q0-50 44-127t102-147q-138-76-274-110q-53-13-95-34.5t-68-43.5t-45-52t-28-52.5t-14-53.5t-5.5-46t-.5-38q0-28 46.5-46t145.5-18q74 0 151 41.5t140 108.5t114 147t79 162.5t28 148.5q0 64-24 122.5t-59 99t-75.5 71t-75 45t-54.5 14.5"></svg:path>`,
})
export class WhhYiiframeworkIcon {
  readonly viewBox = input("0 0 961 1024")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhYinyangIcon],svg[whh-yinyang-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1025q-104 0-199-40.5t-163.5-109T40.5 712T0 512.5t40.5-199t109-163T313 41T512 0t199 41t163.5 109.5t109 163t40.5 199T983.5 712t-109 163.5t-163.5 109t-199 40.5m0-768q-26 0-45 18.5t-19 45t18.5 45.5t45.5 19t45.5-19t18.5-45.5t-19-45t-45-18.5m0 256q-80 0-136-56.5t-56-136T376 185t136-56q-104 0-192.5 51t-140 139.5t-51.5 193t51.5 193t140 140T512 897q80 0 136-56.5t56-136T648 569t-136-56m.5 256q-26.5 0-45.5-19t-19-45.5t19-45t45.5-18.5t45 18.5t18.5 45t-18.5 45.5t-45 19"></svg:path>`,
})
export class WhhYinyangIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhYoutubeIcon],svg[whh-youtube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928 736q-222 32-416 32q-86 0-190-8t-165-16l-61-8q-27-5-47.5-37.5t-30-78.5t-14-86T0 461V307Q0 52 96 32Q318 0 512 0q86 0 190 8t165 16l61 8q29 4 49.5 36.5T1007 148t13 86t4 73v154q0 36-3 73t-12 85t-30 80t-51 37M693 359L431 199q-11-10-29-5.5T384 208v352q0 11 18 15t29-6l262-160q11-10 11-25t-11-25"></svg:path>`,
})
export class WhhYoutubeIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhYuiIcon],svg[whh-yui-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 960q-95 0-197.5-34.5T256 832q12-34 29-71q-104-68-157-121q14-24 34-54Q78 526 0 448q75-125 229.5-227T593 59.5T1024 0Q640 480 640 960m-64-64q0-173 79-381t209-387q-38 26-109.5 97.5T603.5 391t-151 206.5T352 800q62 48 113.5 72T576 896M96 448q52 48 103 82q202-297 441-429q-94 27-185 72t-160 94t-119 95.5T96 448m128 192q32 32 87 66q88-174 231.5-347.5T822 87q-75 23-152 71.5T530 264T406.5 391T303 520.5T224 640"></svg:path>`,
})
export class WhhYuiIcon {
  readonly viewBox = input("0 0 1024 960")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhZIcon],svg[whh-z-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M736 128L188 896h516q27 0 45.5 19t18.5 45.5t-18.5 45T704 1024H64q-27 0-45.5-18.5T0 960q0-24 32-64l548-768H64q-27 0-45.5-19T0 63.5t18.5-45T64 0h640q27 0 45.5 18.5T768 64q0 26-32 64"></svg:path>`,
})
export class WhhZIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhZUpperCaseIcon],svg[whh-z-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M736 128L188 896h516q27 0 45.5 19t18.5 45.5t-18.5 45T704 1024H64q-27 0-45.5-18.5T0 960q0-24 32-64l548-768H64q-27 0-45.5-19T0 63.5t18.5-45T64 0h640q27 0 45.5 18.5T768 64q0 26-32 64"></svg:path>`,
})
export class WhhZUpperCaseIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhZeldaIcon],svg[whh-zelda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1013 896H525q-20-18-7-31l232-410q8-7 19-7t19 7l232 410q13 12-7 31M269 448q-20-18-7-31L494 7q8-7 19-7t19 7l232 410q13 12-7 31zm239 417q13 12-7 31H13q-20-18-7-31l232-410q8-7 19-7t19 7z"></svg:path>`,
})
export class WhhZeldaIcon {
  readonly viewBox = input("0 0 1026 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhZencartIcon],svg[whh-zencart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928 607q-18 0-25-43.5t-7-84.5q0-57-21.5-111.5t-55.5-95t-72-70t-75-43.5q-45-17-70.5-42.5T576 63q0-26 18.5-44.5T640 0q39 0 89 18t101.5 54.5t95 85.5t71 116.5T1024 416q0 45-17.5 91t-40 73t-38.5 27M640 223q0 32-64 32q-51 0-105 21t-98.5 52t-87.5 71.5t-72.5 75.5t-52.5 69l-9 13.5l-12.5 18.5l-13 17.5l-15.5 18L95.5 625L79 636l-15 3q-27 0-45.5-18.5T0 575q0-38 28-88.5T107 385t113.5-95T361 218.5T512 191q21 0 32 .5t29 1t27.5 3t20 5.5t15 9t4.5 13m-96 160q21 0 31.5 10.5t2.5 26t-34 27.5q-98 46-161 131.5T320 767q0 38 16 85.5t32 85.5t16 54q0 15-5.5 24t-21.5 7t-40-20q-50-37-87.5-113T192 735q0-95 47-176t128-128.5T544 383m96 32.5q0-39.5 28-68t68-28.5t68 28.5t28 68t-28 67.5t-68 28t-68-28t-28-67.5M544 511q22 0 27 15.5t5 48.5q0 93 65.5 158.5T800 799q28 0 85.5-23t98-38.5t40.5-2.5q0 36-21.5 76T947 883.5t-82 54t-97 21.5q-71 0-145-33.5t-124.5-94T448 704q0-87 33-140t63-53"></svg:path>`,
})
export class WhhZencartIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhZendframeworkIcon],svg[whh-zendframework-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M745 256H0q1-5 3-14.5t11.5-36T36 155t35-54t50.5-51t69-35.5T279 0h745q-1 5-3 14.5t-11.5 36T988 101t-35 53.5t-50.5 51t-69 36T745 256m-466 64h425q-1 5-3 14.5t-11.5 36T668 421t-35 53.5t-50.5 51t-69 36T425 576H0q1-5 3-14.5t11.5-36T36 475t35-54t50.5-51t69-35.5T279 320m0 320h169q-1 5-3 14.5t-11.5 36T412 741t-35 53.5t-50.5 51t-69 36T169 896H0q1-5 3-14.5t11.5-36T36 795t35-54t50.5-51t69-35.5T279 640"></svg:path>`,
})
export class WhhZendframeworkIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhZenphotoIcon],svg[whh-zenphoto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832.59 705h-64v160q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5V353q0-13 9.5-22.5t22.5-9.5h160q80 0 136 56t56 135.5t-56 136t-136 56.5m0-256h-64v128h64q27 0 45.5-19t18.5-45.5t-18.5-45t-45.5-18.5m-256-416v-2zm-492 800h460q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-511q-12 2-22.5-8.5T.59 864q-1-15 6-28l486-771h-460q-13 0-22.5-9.5T.59 33t9.5-22.5T32.59 1h511q12-2 22.5 8.5t10.5 23.5q-1 21-6 29zm492-802"></svg:path>`,
})
export class WhhZenphotoIcon {
  readonly viewBox = input("0 0 1025 898")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhZerplyIcon],svg[whh-zerply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 768q0 5-.5 14.5t-3.5 36t-8.5 50.5t-17.5 53.5t-28 51t-42.5 36T608 1024q-63 0-118-20t-95.5-48t-79-56t-86.5-48t-101-20q-77 0-102.5-5T0 800q0-48 54.5-131.5t122-159.5T328 337.5T448 192q-42 21-60.5 29.5T328 243t-72 13q-52 0-90-40t-38-88q0-26 6.5-49t16-36.5t19-24T185 4l7-4q1 3 3.5 7T207 22t19.5 19.5t27 15.5t34.5 7q76 0 140-10t97-22t64-22t51-10q23 0 37 5t19.5 16t6.5 19t1 24q0 35-55.5 112.5t-126 155t-155 175T242 662q57 20 140 64.5t148.5 75T640 832q79 0 124-58z"></svg:path>`,
})
export class WhhZerplyIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhZikulaIcon],svg[whh-zikula-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1000 619L833 736q-22 16-80 31l-255 68l118 82q20 15 24 39t-11 43.5t-40 23.5t-45-10L346 874q-11-8-36-32.5T278 808L150 623l-33 104q-8 24-30 35.5T42 766T7.5 735.5T4 689l73-230q8-24 20-42l162-224h-66q-26 0-45-19t-19-45.5t19-45T193 65h256q22 0 96 32l186 65l-23-82q-8-23 3.5-45.5T746 4t45 3.5T821 43l73 263q3 9 3 47v192l31-22q20-14 45-10t40 23.5t11 44t-24 38.5M769 358l-108 84q-11 8-24.5 6T615 434.5t-5.5-26T623 386l116-90l-258-103q-5-2-11-4q-1 1-4 1t-4 1l49 150q5 13-1.5 25.5T490 383t-25.5-2t-16.5-19l-51-155l-161 242h117q13 0 22.5 9t9.5 22.5t-9.5 23T353 513H216l156 221l44-134q4-13 16.5-19.5t25.5-2t19.5 16.5t1.5 25l-34 107l246-67l-69-53q-11-8-13-22t6-26t21-14t24 6l109 84z"></svg:path>`,
})
export class WhhZikulaIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhZipIcon],svg[whh-zip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h320v64h-32q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h32v64h-32q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h32v64h-32q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h32v64h-32q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h32v64q-27 0-45.5 19t-18.5 45v192q0 27 18.5 45.5t45.5 18.5h128q27 0 45.5-18.5t18.5-45.5V640q0-26-18.5-45t-45.5-19h32q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-32v-64h32q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-32v-64h32q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-32v-64h32q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-32V64h32q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h288q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-384-192q-26 0-45-18.5t-19-45t18.5-45.5t45.5-19t45.5 19t18.5 45.5t-19 45t-45 18.5"></svg:path>`,
})
export class WhhZipIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhZodiacaquariusIcon],svg[whh-zodiacaquarius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M905 352L761 161L564 359l-.5.5l-.5.5l-7 6l-1 1l-1.5 1.5l-3.5 3.5l-5 4q-4 2-10 4q-10 4-21 4h-5q-8 0-16-3q-7-2-15-7q-4-3-5-3.5t-3.5-2t-3.5-2.5q-10-10-15-26l-89-177l-253 203q-19 19-45.5 19t-45-19T0 320.5T19 276L340 18q19-18 45-18t45 18q3 3 9 14l1 1l1 1q3 8 4 8l85 170L723 18q19-18 45.5-18T814 18q3 3 9 14v.5l1 .5l191 255q14 23 7 48.5t-30 39t-48.5 6.5t-38.5-30M340 530q19-19 45-19t45 19q3 3 9 14h.5l.5 1l1 1q3 7 4 8l85 170l194-194q18-19 44.5-19t45.5 19q3 3 9 14l1 1l191 254q14 23 7 49t-30 39t-48.5 6.5T905 864L761 673L564 870l-1 1l-7 6q0 1-1 1.5t-1.5 1L550 883l-5 4q-4 2-10 4q-10 4-21 4q-3 1-5 1q-7-1-16-3q-7-3-15-8q-4-2-5-3t-3.5-2.5t-3.5-2.5q-10-9-15-25l-89-178l-253 203q-19 19-45.5 19t-45-18.5t-18.5-45T19 787z"></svg:path>`,
})
export class WhhZodiacaquariusIcon {
  readonly viewBox = input("0 0 1025 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhZodiacariesIcon],svg[whh-zodiacaries-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.232 320q-24 0-44-20t-20-44q0-56-32.5-92t-95.5-36q-31 0-77 51.5t-80.5 121t-34.5 115.5v544q0 26-18.5 45t-45 19t-45.5-19t-19-45V416q0-46-34.5-115.5t-80.5-121t-77-51.5q-63 0-95.5 36t-32.5 92q0 24-20 44t-44 20t-44-20t-20-44q0-109 70-182.5t186-73.5q32 0 68.5 21t70.5 56.5t62 73t55 79.5q27-42 55-79.5t62-73t70.5-56.5t68.5-21q116 0 186 73.5t70 182.5q0 24-20 44t-44 20"></svg:path>`,
})
export class WhhZodiacariesIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhZodiaccancerIcon],svg[whh-zodiaccancer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M544 960q32-64 32-160q92-53 161.5-129.5T847 499q-39 13-79 13q-106 0-181-75t-75-181t75-181T768 0t181 75t75 181q0 100-28.5 198.5T919 634T809.5 783t-130 113T544 960m224-832q-53 0-90.5 37.5T640 256t37.5 90.5T768 384t90.5-37.5T896 256t-37.5-90.5T768 128M177 525q38-13 79-13q106 0 181 75t75 181t-75 181t-181 75t-181-75T0 768q0-100 28.5-198.5T105 390t109.5-149t130-113T480 64q-32 64-32 160q-92 53-161.5 129.5T177 525m-49 243q0 53 37.5 90.5T256 896t90.5-37.5T384 768t-37.5-90.5T256 640t-90.5 37.5T128 768"></svg:path>`,
})
export class WhhZodiaccancerIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhZodiaccapricornIcon],svg[whh-zodiaccapricorn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M800.43 960q-92 0-160-65q-94 129-256 129q-26 0-45-19t-19-45.5t19-45t45-18.5q21 0 32.5-.5t31-4t33-11.5t31-21.5t33-36.5t31.5-54l-55-611q-58 62-97.5 224t-39.5 323q0 26-18.5 45t-45 19t-45.5-19t-19-45q0-129-25.5-261.5T160.43 219t-96-91q-26 0-45-19t-19-45.5t19-45t45-18.5q50 0 99.5 48t87.5 122t69 169q42-130 99.5-221T541.43 6q12-6 25-6q1 0 2.5.5t2 0t2.5-.5h3v1q50 5 64 63l45 492q56-44 115-44q93 0 158.5 65.5t65.5 158.5t-65.5 158.5t-158.5 65.5m0-320q-37 0-66.5 41t-29.5 74q0 30 28.5 53.5t67.5 23.5q40 0 68-28t28-68t-28-68t-68-28"></svg:path>`,
})
export class WhhZodiaccapricornIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhZodiacgeminiIcon],svg[whh-zodiacgemini-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.12 128h-128q-7 22-17.5 59t-28.5 138.5t-18 186.5q0 54 6.5 113t16 105.5t19 84.5t16 60t6.5 21h128q26 0 45 18.5t19 45t-18.5 45.5t-45.5 19h-896q-26 0-45-19t-19-45.5t18.5-45t45.5-18.5h128q7-22 17.5-59t28.5-138.5t18-186.5q0-54-6.5-113t-16-105.5t-19-84.5t-16-60t-6.5-21h-128q-26 0-45-18.5t-19-45T18.62 19t45.5-19h896q26 0 45 19t19 45.5t-18.5 45t-45.5 18.5m-632 0q6 22 15.5 59t25 138.5t15.5 186.5q0 181-54 378l-2 6h368q-6-22-15.5-59t-25-138.5t-15.5-186.5q0-181 54-378l2-6z"></svg:path>`,
})
export class WhhZodiacgeminiIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhZodiacleoIcon],svg[whh-zodiacleo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M864 1024q-93 0-158.5-84.5T640 736q0-11 1-28.5t9-60.5t22-71q32-64 32-160v-64q0-93-65.5-158.5T480 128t-158.5 65.5T256 352q0 52 22.5 97.5T341 527q76 27 123.5 92.5T512 768q0 106-75 181t-181 75t-181-75T0 768q0-83 48.5-149.5T174 526q-46-81-46-174q0-96 47-177T303 47T480 0t177 47t128 128t47 177v96q0 33-32 114.5T768 672v64q0 66 28 113t68 47q43 0 96-44v150q-51 22-96 22M128 768q0 53 37.5 90.5T256 896t90.5-37.5T384 768t-37.5-90.5T256 640t-90.5 37.5T128 768"></svg:path>`,
})
export class WhhZodiacleoIcon {
  readonly viewBox = input("0 0 960 1024")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhZodiaclibraIcon],svg[whh-zodiaclibra-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 768H640q-27 0-45.5-19T576 703.5t18.5-45T640 640q15 0 46.5-50T743 477.5t25-93.5q0-106-75-181t-181-75t-181 75t-75 181q0 31 25 93.5T337.5 590t46.5 50q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19H64q-27 0-45.5-19T0 703.5t18.5-45T64 640h151q-39-61-63-131t-24-125q0-104 51.5-192.5t140-140T512 0t192.5 51.5t140 140T896 384q0 55-24 125t-63 131h151q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19M64 896h896q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19H64q-27 0-45.5-19T0 959.5t18.5-45T64 896"></svg:path>`,
})
export class WhhZodiaclibraIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhZodiacpiscesIcon],svg[whh-zodiacpisces-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.43 128q-192 47-192 384t192 384q26 0 45 18.5t19 45t-19 45.5t-45 19q-96-16-166.5-80t-106.5-157t-45-211h-260q-9 118-45 211t-106.5 157t-166.5 80q-26 0-45-19t-19-45.5t19-45t45-18.5q192-47 192-384t-192-384q-26 0-45-19t-19-45.5t19-45t45-18.5q96 16 166.5 80t106.5 157t45 211h260q9-118 45-211t106.5-157t166.5-80q26 0 45 18.5t19 45.5t-18.5 45.5t-45.5 18.5"></svg:path>`,
})
export class WhhZodiacpiscesIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhZodiacsagitariusIcon],svg[whh-zodiacsagitarius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.5 576q-26.5 0-45.5-19t-19-45V218L475 640l146 146q19 19 19 45.5T621 877t-45.5 19t-45.5-19L383 731l-273 273q-19 19-45.5 19T19 1004T0 958.5T19 913l273-273l-145-146q-19-19-19-45.5t19-45.5t45.5-19t45.5 19l146 145l420-420H512q-26 0-44.5-19T449 63.5t18.5-45T512 0h448q27 0 45.5 18.5T1024 64v448q0 26-18.5 45t-45 19"></svg:path>`,
})
export class WhhZodiacsagitariusIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhZodiacscorpioIcon],svg[whh-zodiacscorpio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1018.06 913l-92 104q-6 7-15 7t-15-7v-58q-64-5-120.5-27t-96-66t-39.5-102V224q0-40-28-68t-68-28t-68 28t-28 68v608q0 27-18.5 45.5t-45 18.5t-45.5-18.5t-19-45.5V224q0-40-28-68t-68-28t-68 28t-28 68v608q0 27-18.5 45.5t-45 18.5t-45.5-18.5t-19-45.5V64q0-26 19-45t45-19q23 0 40.5 14.5t22.5 36.5q55-51 129-51q49 0 91 23.5t68 63.5q27-40 69-63.5t92-23.5q76 0 131 52t60 127q1 7 1 13v504q0 34 13 60t34.5 40.5t40.5 21.5t40 11v-54q6-7 15-7t15 7l92 104q6 7 6 17t-6 17"></svg:path>`,
})
export class WhhZodiacscorpioIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhZodiactaurusIcon],svg[whh-zodiactaurus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.754 192q-12 0-22-10t-10-22q0-13-21-22.5t-43-9.5q-16 0-31 6.5t-29.5 21.5t-26.5 30t-26.5 41.5t-24.5 45.5t-24 53.5t-22 54t-23 56.5q66 44 104.5 114.5t38.5 152.5q0 87-43 160.5T673.254 981t-160.5 43t-160.5-43t-116.5-116.5t-43-160.5q0-82 38.5-152.5t104.5-114.5q-15-37-23-56.5t-22-54t-24-53.5t-24.5-45.5t-26.5-41.5t-26.5-30t-29.5-21.5t-31-6.5q-22 0-43 9.5t-21 22.5q0 12-10 22t-22 10t-22-10t-10-22q0-70 32.5-115t95.5-45q37 0 71.5 16.5t61.5 40.5t53 61.5t43.5 70t35.5 76t27 69t20 58.5q37-8 72-8t72 8q11-33 20-58.5t27-69t35.5-76t43.5-70t53-61.5t61.5-40.5t71.5-16.5q63 0 95.5 45t32.5 115q0 12-10 22t-22 10m-672 512q0 80 56.5 136t136 56t135.5-56t56-136t-56-136t-135.5-56t-136 56t-56.5 136"></svg:path>`,
})
export class WhhZodiactaurusIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhZodiacvirgoIcon],svg[whh-zodiacvirgo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M920.046 778q-28 59-75 107l18 21q23 13 30 38t-6.5 47.5t-39.5 29.5t-50-6q-24-19-54-50q-47 29-93.5 43.5t-73.5 14.5t-45.5-18.5t-18.5-45t18.5-45.5t45.5-19q40 0 93-28q-29-55-29-104V223q0-39-28.5-67t-68-28t-67.5 28t-28 67v608q0 27-19 45.5t-45.5 18.5t-45-18.5t-18.5-45.5V223q0-39-28-67t-68-28t-68 28t-28 67v608q0 27-19 45.5t-45.5 18.5t-45-18.5T.046 831V64q0-27 18.5-45.5T64.046 0q23 0 40.5 14.5t22.5 36.5q55-51 129-51q49 0 91 23.5t68 63.5q26-40 68.5-63.5t92.5-23.5q64 0 114.5 38.5t67.5 98.5q46-41 105-41q65 0 111 46t49 112v1q0 3 .5 32.5t.5 49t-2 59t-5.5 70.5t-11.5 75t-18.5 80.5t-27.5 78.5t-39 78m-89-586q-64 0-64 95v408q0 35 14 75q32-41 53-86q43-95 61-225V287q0-95-64-95"></svg:path>`,
})
export class WhhZodiacvirgoIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhZoominIcon],svg[whh-zoomin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1005 1005q-19 19-45.5 19t-45.5-19L716 807q-120 89-268 89q-91 0-174-35.5T131 765T35.5 622T0 448t35.5-174T131 131t143-95.5T448 0t174 35.5T765 131t95.5 143T896 448q0 148-89 268l198 198q19 19 19 45.5t-19 45.5M448 128q-87 0-160.5 43T171 287.5T128 448t43 161t116.5 116.5T448 768t160.5-42.5T725 609t43-161t-43-160.5T608.5 171T448 128m128 384h-64v64q0 27-19 45.5T447.5 640t-45-18.5T384 576v-64h-64q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45.5-19h64v-64q0-26 18.5-45t45-19t45.5 19t19 45v64h64q26 0 45 19t19 45.5t-19 45t-45 18.5"></svg:path>`,
})
export class WhhZoominIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhZoomoutIcon],svg[whh-zoomout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1005 1005q-19 19-45.5 19t-45.5-19L716 807q-120 89-268 89q-91 0-174-35.5T131 765T35.5 622T0 448t35.5-174T131 131t143-95.5T448 0t174 35.5T765 131t95.5 143T896 448q0 148-89 268l198 198q19 19 19 45.5t-19 45.5M448 128q-87 0-160.5 43T171 287.5T128 448t43 161t116.5 116.5T448 768t160.5-42.5T725 609t43-161t-43-160.5T608.5 171T448 128m128 384H320q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45.5-19h256q26 0 45 19t19 45.5t-19 45t-45 18.5"></svg:path>`,
})
export class WhhZoomoutIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhZurmoIcon],svg[whh-zurmo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 896v128L320 896H0V768h640v128zM0 576l384-448H0V0h640v128L256 576h384v128H0z"></svg:path>`,
})
export class WhhZurmoIcon {
  readonly viewBox = input("0 0 640 1024")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAddcommentIcon],svg[whh-addcomment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 896q-66 0-134-16q-34 40-69.5 69.5t-60 43.5t-47.5 21.5t-30.5 8.5t-10.5 1q26-57 30-124.5T177 786Q94 723 47 635T0 448q0-91 40.5-174t109-143T313 35.5T512 0t199 35.5T874.5 131t109 143t40.5 174t-40.5 174t-109 143T711 860.5T512 896m256-480q0-13-9.5-22.5T736 384H576V224q0-13-9.5-22.5T544 192h-64q-13 0-22.5 9.5T448 224v160H288q-13 0-22.5 9.5T256 416v64q0 13 9.5 22.5T288 512h160v160q0 13 9.5 22.5T480 704h64q13 0 22.5-9.5T576 672V512h160q13 0 22.5-9.5T768 480z"></svg:path>`,
})
export class WhhAddcommentIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
