import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPsupIcon],svg[whh-psup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M338 973L75 677q-24-23-49.5-72T0 526V150Q0 88 44 44T149 0h598q62 0 105.5 44T896 150v376q0 31-25 82.5T822 677L558 973q-47 51-110 51t-110-51"></svg:path>`,
})
export class WhhPsupIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPsxIcon],svg[whh-psx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m246.5-758.5Q748 255 733 255t-25 10L512 461L317 266q-10-10-25-10t-25.5 10.5t-10.5 25t11 25.5l194 195l-194 194q-11 11-11 26t10.5 25.5T292 768t26-11l194-194l195 194q10 11 25 11t25.5-10.5T768 732t-11-25L563 512l195-196q11-10 11-25t-10.5-25.5"></svg:path>`,
})
export class WhhPsxIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPullIcon],svg[whh-pull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M767 1024H64q-27 0-45.5-18.5T0 960V65q0-27 18.5-45.5T64 1h384v352q0 13 9 22.5t23 9.5h351v575q0 27-18.5 45.5T767 1024M596 640h-84V480q0-14-9.5-23t-22.5-9H352q-13 0-22.5 9t-9.5 23v160h-87q-23 0-35 26.5t-2 37.5l89 89l85 84q17 18 42 18t42-18l179-173q14-14 1-39t-38-25M512 0q26 0 44 18l256 257q19 19 19 46H512z"></svg:path>`,
})
export class WhhPullIcon {
  readonly viewBox = input("0 0 831 1024")
  readonly width = input("0.82em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPullaltIcon],svg[whh-pullalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512.59 512q-139 0-257-17T69.094 448.5T.59 384V256q0-8 6-18q62 36 202.5 59t303.5 23t303.5-23t202.5-59q6 10 6 18v128q0 35-68.5 64.5T769.59 495t-257 17m0-256q-139 0-257-17T69.094 192.5T.59 128t68.5-64.5T255.59 17t257-17t257 17t186.5 46.5t68.5 64.5t-68.5 64.5t-186.5 46.5t-257 17m-142 527l78.002 62V640q0-26 18.5-45t45.5-19t45.5 19t18.5 45v204l77-61q20-16 47.5-16t47 16t19.5 38t-19 37l-189 150q-20 16-47.5 16t-47.5-16l-189-150q-19-15-19-37t19.5-38t47-16t47.5 16z"></svg:path>`,
})
export class WhhPullaltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPullrequestIcon],svg[whh-pullrequest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768.338 1024q-53 0-90.5-37.5t-37.5-90.5q0-35 17.5-64t46.5-46V384q0-80-56-136t-136-56v64l-192-128l192-128v64q87 0 160.5 43t116.5 116.5t43 160.5v402q29 17 46.5 46t17.5 64q0 53-37.5 90.5t-90.5 37.5m-.5-192q-26.5 0-45 18.5t-18.5 45t18.5 45.5t45 19t45.5-19t19-45.5t-19-45t-45.5-18.5m-511.5 64q0 53-37.5 90.5t-90.5 37.5t-90.5-37.5T.338 896q0-35 17.5-64t46.5-46V238q-29-17-46.5-46t-17.5-64q0-53 37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5q0 35-17.5 64t-46.5 46v548q29 17 46.5 46t17.5 64m-128.5-832q-26.5 0-45 18.5t-18.5 45t18.5 45.5t45 19t45.5-19t19-45.5t-19-45t-45.5-18.5m0 768q-26.5 0-45 18.5t-18.5 45t18.5 45.5t45 19t45.5-19t19-45.5t-19-45t-45.5-18.5"></svg:path>`,
})
export class WhhPullrequestIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPumpjackIcon],svg[whh-pumpjack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.054 1024h-960q-13 0-22.5-9.5T.054 992v-64q0-13 9.5-22.5t22.5-9.5h160l210-590l-183-18l-27 192q0 13-9.5 22.5t-22.5 9.5q-26 0-47.5-5t-37-12t-28-21t-20-26t-13-33t-8.5-35t-4.5-40.5t-1.5-41V256q0-61 36-122t88-97.5t100-36.5q13 0 22.5 9.5t9.5 22.5l-24 167l167 17q19-24 49-24q38 0 56 34l364 37q12 1 21 25.5t7 38.5v569h96q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-359-128l-23-64h-207l115 64zm-347-64l-23 64h140l-115-64zm23-64h241l-201-112zm258-55l-26-73h-106zm-119-332l-26 71l65 39zm-44 124l-26 71h140l-1-4zm428-156l-335-33l207 580h128z"></svg:path>`,
})
export class WhhPumpjackIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPunbbIcon],svg[whh-punbb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M995 581L581 995q-29 29-69 29t-69-29L29 581Q0 552 0 512t29-69L443 29q29-29 69-29t69 29l414 414q29 29 29 69t-29 69m-95-139l-71-71q-29-29-70-29t-71 29L583 477q-29 29-29 70t29 71l70 70q8 7 4.5 20.5T643 734L541 836q-12 11-25.5 14t-20.5-4L319 670q334-333 334-334q29-29 29-70t-29-71l-70-70q-29-29-70.5-29T442 125L125 442q-29 29-29 70t29 70l71 71l246 246q29 29 70.5 29t70.5-29l123-123q29-29 29-70.5T706 635l-70-70q-8-7-4.5-20.5T646 519l85-84q11-12 24.5-15t21.5 4l138 138q17-28 13-62t-28-58M248 600l-68-68l-2-2q-7-8-4-21.5t14-24.5l296-296q12-11 25.5-14.5T530 178l70 70q8 7 5 20.5T590 294L294 589q-12 12-25 15t-21-4"></svg:path>`,
})
export class WhhPunbbIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPunisherIcon],svg[whh-punisher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M741 577q27 25 27 63q0 95-128 134v218q0 13-9.5 22.5T608 1024t-22.5-9.5T576 992V788l-1 .5l-1 .5q-8-21-30-21q-12 0-21 8t-10 20h-1v196q0 13-9.5 22.5T480 1024t-22.5-9.5T448 992V800q0-14-9.5-23t-22.5-9t-22.5 9t-9.5 23v192q0 13-9.5 22.5T352 1024t-22.5-9.5T320 992V796h-1q-1-12-10-20t-21-8q-22 0-30 21h-1l-1-1v204q0 13-9.5 22.5T224 1024t-22.5-9.5T192 992V774Q64 735 64 640q0-38 27-63Q0 482 0 352q0-72 30.5-137T115 103t132-75T416 0t169 28t132 75t84.5 112T832 352q0 130-91 225M192 352q0-13-9.5-22.5T160 320t-22.5 9.5T128 352q0 71 37 115.5t91 44.5q64 0 64-32q-128-64-128-128m160 224q-13 0-22.5 9.5T320 608t9.5 22.5T352 640q24 0 28-4t4-28t-4-28t-28-4m128 0q-24 0-28 4t-4 28t4 28t28 4q13 0 22.5-9.5T512 608t-9.5-22.5T480 576m192-256q-13 0-22.5 9.5T640 352q0 64-128 128q0 32 64 32q54 0 91-44.5T704 352q0-13-9.5-22.5T672 320"></svg:path>`,
})
export class WhhPunisherIcon {
  readonly viewBox = input("0 0 832 1024")
  readonly width = input("0.82em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPurseIcon],svg[whh-purse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 960q-46 23-98 37t-117 19.5t-109.5 6.5t-123.5 1q-81 0-123-1.5t-108.5-6.5T162 997t-98-37q-31-16-47.5-53T0 832q0-53 41.5-205.5T128 384q12-25 28-41t26-19l10-4q22 0 64 11v-11q0-87 34.5-160.5t93-116.5T512 0t129 43t93 116.5T768 320v11q43-11 64-11q19 0 33 15t31 49q45 90 86.5 242.5T1024 832q1 96-64 128M320 448q-27 0-45.5 18.5t-18.5 45t18.5 45.5t45.5 19t45.5-19t18.5-45.5t-18.5-45T320 448M512 63q-53 0-90.5 70.5T384 304q0 29 5 64q70 16 123 16t123-16q5-35 5-64q0-100-37.5-170.5T512 63m192 385q-27 0-45.5 18.5t-18.5 45t18.5 45.5t45.5 19t45.5-19t18.5-45.5t-18.5-45T704 448"></svg:path>`,
})
export class WhhPurseIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPushIcon],svg[whh-push-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 1024H64q-27 0-45.5-18.5T0 960V65q0-27 18.5-45.5T64 1h384v352q0 13 9 22.5t23 9.5h351v575q0 27-18.5 45.5T768 1024M633 640L454 466q-17-18-42-18t-43 18l-85 85l-88 89q-11 10 1.5 37t34.5 27h88v159q0 14 9 23t23 9h128q13 0 22.5-9t9.5-23V704h84q25 0 38-25.5t-1-38.5M512 0q25 0 44 18l256 257q19 19 19 46H512z"></svg:path>`,
})
export class WhhPushIcon {
  readonly viewBox = input("0 0 831 1024")
  readonly width = input("0.82em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPushaltIcon],svg[whh-pushalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512.59 512q-139 0-257-17T69.094 448.5T.59 384V256q0-8 6-19q62 37 202.5 60t303.5 23t303.5-23t202.5-60q6 11 6 19v128q0 35-68.5 64.5T769.59 495t-257 17m0-256q-139 0-257-17T69.094 192.5T.59 128t68.5-64.5T255.59 17t257-17t257 17t186.5 46.5t68.5 64.5t-68.5 64.5t-186.5 46.5t-257 17m-48 335q20.002-16 47.502-16t47.5 16l189 150q19 16 19 38t-19.5 37.5t-47 15.5t-47.5-16l-77-61v205q0 26-18.5 45t-45 19t-45.5-19t-19-45V754l-78 62q-20 16-47.5 16t-47-15.5t-19.5-37.5t19-38z"></svg:path>`,
})
export class WhhPushaltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPushbulletIcon],svg[whh-pushbullet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640.5 768q-27 0-45.5-18.5T576.5 704V64q0-27 18.5-45.5T640.5 0q104 0 192.5 51.5t140 140t51.5 192.5T973 576.5t-140 140T640.5 768m-192 0h-384q-26 0-45-19t-19-45V64q0-27 19-45.5T64.5 0h384q27 0 45.5 18.5T512.5 64v640q0 27-18.5 45.5T448.5 768"></svg:path>`,
})
export class WhhPushbulletIcon {
  readonly viewBox = input("0 0 1025 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPyrocmsIcon],svg[whh-pyrocms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M555 927q-64 64-149.5 86.5t-170.5 0T86 927q-46-47-67.5-108T.5 691.5t21.5-132T73 427L321 0l248 427q32 67 50.5 132.5t22 132T623 819t-68 108M432 485q-13 19-14.5 37t4.5 30.5t11.5 26.5t8 25t-6.5 26q-11 17-28.5 27T380 676.5t-9 31.5q0 17 8 28.5t17 17t15.5 15T415 792q-4 21-36 54q7-22 7-45q0-17-10-27t-22.5-14t-24.5-14.5t-15-27.5q-2-16 11.5-37t31-38.5T385 598t3.5-55t-21.5-42t-27-15.5t-24.5-6.5t-15.5-17t1.5-27.5t12-28.5t3.5-36t-20-50q9 21 1 42.5t-19.5 34t-27.5 40t-23 60.5q-6 31-1 46t18.5 25t28 14.5t26.5 15t14 26.5q3 20-6 39t-23 32.5t-29 36.5t-21 47q-8 33-8 51q-19-23-22-39q-3-14 3-24t15.5-15t17.5-17t8-29t-4.5-26.5t-11-13.5t-18-13.5T195 629t-6.5-32t9.5-32t6-36.5t-17-44.5q5 28 1.5 43T175 555t-20 21.5t-18 22.5t-8 31q0 25 2.5 32.5t9 18T153 713q5 19 .5 32T142 765t-9.5 22.5T138 824q10 30 56.5 48t86 22t50.5 2q18-2 36-5t43.5-10.5t45-21.5t26.5-33q8-22 5.5-37t-10-22t-11.5-20.5t1-32.5q4-18 12.5-27.5T495 675t12.5-11.5T513 636t-10-32t-24-24t-26.5-21.5t-19-30T432 485"></svg:path>`,
})
export class WhhPyrocmsIcon {
  readonly viewBox = input("0 0 642 1025")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPythonIcon],svg[whh-python-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 768H544q-13 0-22.5 9.5T512 800t9.5 22.5T544 832h192q13 0 22.5 9.5T768 864v32q0 53-37.5 90.5T640 1024H448q-53 0-90.5-37.5T320 896V672q0-53 21.5-74.5T416 576h256q53 0 106.5-53.5T832 416V256h64q53 0 90.5 37.5T1024 384v192q0 73-59.5 132.5T832 768M576 944q0 7 4.5 11.5T592 960h32q7 0 11.5-4.5T640 944v-32q0-7-4.5-11.5T624 896h-32q-7 0-11.5 4.5T576 912zm64-432H384q-53 0-90.5 37.5T256 640v128H128q-53 0-90.5-37.5T0 640V448q0-73 59.5-132.5T192 256h288q13 0 22.5-9.5T512 224t-9.5-22.5T480 192H288q-13 0-22.5-9.5T256 160v-32q0-53 37.5-90.5T384 0h256q53 0 90.5 37.5T768 128v256q0 53-37.5 90.5T640 512M448 80q0-7-4.5-11.5T432 64h-32q-7 0-11.5 4.5T384 80v32q0 7 4.5 11.5T400 128h32q7 0 11.5-4.5T448 112z"></svg:path>`,
})
export class WhhPythonIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhQIcon],svg[whh-q-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M750 919q18 18 18 43.5t-18 43.5t-43.5 18t-43.5-18l-19-19q-61 37-132 37H256q-106 0-181-75T0 768V256Q0 150 75 75T256 0h256q106 0 181 75t75 181v512q0 71-37 132zM640 768V256q0-53-37.5-90.5T512 128H256q-53 0-90.5 37.5T128 256v512q0 53 37.5 90.5T256 896h256q16 0 35-6L401 744q-18-18-18-43.5t18-43.5t43.5-18t43.5 18l146 146q6-19 6-35"></svg:path>`,
})
export class WhhQIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhQUpperCaseIcon],svg[whh-q-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M750 919q18 18 18 43.5t-18 43.5t-43.5 18t-43.5-18l-19-19q-61 37-132 37H256q-106 0-181-75T0 768V256Q0 150 75 75T256 0h256q106 0 181 75t75 181v512q0 71-37 132zM640 768V256q0-53-37.5-90.5T512 128H256q-53 0-90.5 37.5T128 256v512q0 53 37.5 90.5T256 896h256q16 0 35-6L401 744q-18-18-18-43.5t18-43.5t43.5-18t43.5 18l146 146q6-19 6-35"></svg:path>`,
})
export class WhhQUpperCaseIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhQrcodeIcon],svg[whh-qrcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M991.998 896q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m0-256q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m0-256h-32v32q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5v-32h-128v32q0 13-9.5 22.5t-22.5 9.5h-32v32q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5V256h-96q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h96V64h-64v32q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h448q13 0 22.5 9.5t9.5 22.5v320q0 13-9.5 22.5t-22.5 9.5m-32-288q0-13-9.5-22.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5zm-96 160h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-352 64h32q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-96v32q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5v-32h-192v64h64v-32q0-13 9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5v96h32q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-32h-96q-13 0-22.5-8.5t-9.5-20.5v-99h-64v35q0 12-9.5 20.5t-22.5 8.5t-22.5-8.5t-9.5-20.5v-60q0-2 1-4q0-1-.5-1.5t-.5-1.5V32q0-13 9.5-22.5t22.5-9.5h320q13 0 22.5 9.5t9.5 22.5v32h32q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-32v64h32q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-32v64h64v-32q0-13 9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5zm-192-224q0-13-9.5-22.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5zm-96 160h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-192 256q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5m448 64q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m64-128q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5m224 32q0-13 9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5m-736 160h96v-32q0-13 9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5v32h160q13 0 22.5 9.5t9.5 22.5v-64q0-13 9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5v64h128v-64q0-13 9.5-22.5t22.5-9.5h224v-32q0-13 9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5v160h32q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-32v96q0 13-9.5 22.5t-22.5 9.5h-96v96q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5v-96h-64v32q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5v-32h-32q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h32v-96h-192v160h32q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-32v32q0 13-9.5 22.5t-22.5 9.5h-320q-13 0-22.5-9.5t-9.5-22.5V672q0-13 9.5-22.5t22.5-9.5m640 192h128q13 0 22.5-9.5t9.5-22.5V672q0-13-9.5-22.5t-22.5-9.5h-128q-13 0-22.5 9.5t-9.5 22.5v128q0 13 9.5 22.5t22.5 9.5m-608 96q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5V736q0-13-9.5-22.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 22.5zm96-160h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5m576-64q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5m-256 64q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5m64 192q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5m320 0h32v-32q0-13 9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5v32h32q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-128q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5"></svg:path>`,
})
export class WhhQrcodeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhQuakeIcon],svg[whh-quake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 700v196l-64 128l-64-128V700q-107-14-195-67T50.5 497.5T0 320q0-56 20.5-116T86 87T192 0Q64 157 64 240q0 124 91.5 217.5T384 571V448l64-128l64 128v123q137-20 228.5-113.5T832 240q0-83-128-240q61 30 106 87t65.5 117T896 320q0 95-50.5 177.5T707 633t-195 67"></svg:path>`,
})
export class WhhQuakeIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhQueenIcon],svg[whh-queen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 192L768 640q-5 17-50 36.5T608 704q26 61 68 94.5t92 33.5q27 0 45.5 19t18.5 45v64q0 27-18.5 45.5T768 1024H128q-26 0-45-18.5T64 960v-64q0-26 19-45t45-19q50 0 92-33.5t68-94.5q-67-8-111-26.5T128 640L0 192l192 165V64l154 256L448 0l102 320L704 64v293z"></svg:path>`,
})
export class WhhQueenIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhQueryIcon],svg[whh-query-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 1025H448v-1q-26 0-45-18.5T384 960V838q85-37 138.5-110T576 576q0-69-43-128t-116.5-93.5T256 320q-26 0-45-18.5T192 256V65q0-26 19-45t45-19h384v352q0 13 9.5 22.5T672 385h351q1 1 1 2v574q0 27-18.5 45.5T960 1025M704 0q26 1 44 19l257 257q19 19 18 45H704zM512 576q0 67-54 118.5T320 762v38q0 14-9.5 23t-22.5 9h-64q-13 0-22.5-9t-9.5-23v-96q0-26 19-45t45-19q53 0 90.5-18.5t37.5-45t-37.5-45.5t-90.5-19t-90.5 19t-37.5 45q0 14-9.5 23T96 608H32q-13 0-22.5-9T0 576v-64q0-15 17.5-36T66 434t81.5-35.5T256 384q106 0 181 56.5T512 576M224 896h64q13 0 22.5 9.5T320 928v64q0 14-9.5 23t-22.5 9h-64q-13 0-22.5-9t-9.5-23v-64q0-13 9.5-22.5T224 896"></svg:path>`,
})
export class WhhQueryIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhQuestionsignIcon],svg[whh-questionsign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m.5-128q26.5 0 45-18.5t18.5-45t-18.5-45.5t-45-19t-45.5 19t-19 45.5t19 45t45.5 18.5m-.5-768q-106 0-181 75t-75 181q0 27 18.5 45.5t45 18.5t45.5-18.5t19-45.5q0-53 37.5-90.5T512 256t90.5 37.5T640 384t-37.5 90.5T512 512q-26 0-45 39.5T448 640q0 27 18.5 45.5T512 704t45.5-18.5T576 640v-8q84-22 138-91t54-157q0-106-75-181t-181-75"></svg:path>`,
})
export class WhhQuestionsignIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhQuoraIcon],svg[whh-quora-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M708 871q26 25 60 25q27 0 45.5 19t18.5 45.5t-18.5 45T768 1024q-43 0-96-25t-89-61q-66 22-135 22q-91 0-174-38T131 819.5t-95.5-153T0 480t35.5-186.5t95.5-153T274 38T448 0t174 38t143 102.5t95.5 153T896 480q0 119-50.5 221.5T708 871M448 128q-70 0-128.5 47t-93 128T192 480t34.5 177t93 128T448 832q41 0 80-18q-29-46-80-46q-26 0-45-18.5t-19-45t19-45.5t45-19q43 0 95.5 24.5T632 725q72-102 72-245q0-96-34-177t-93-128t-129-47"></svg:path>`,
})
export class WhhQuoraIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhQuoteIcon],svg[whh-quote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M855.048 768h-87l-256 256V768h-343q-57 0-113-57t-56-115V172q0-58 56-115t113-57h686q57 0 113 57t56 115v424q0 58-56 115t-113 57m-407-384q0-27-18.5-45.5t-45.5-18.5h-64v-64h32q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-96q-26 0-45 19t-19 45v256q0 26 19 45t45 19h128q26 0 45-19t19-45zm384 0q0-27-19-45.5t-45-18.5h-64v-64h32q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-96q-27 0-45.5 19t-18.5 45v256q0 26 18.5 45t45.5 19h128q26 0 45-18.5t19-45.5z"></svg:path>`,
})
export class WhhQuoteIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhQuotedownIcon],svg[whh-quotedown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 768H704q-53 0-90.5-37.5T576 640V448q0-53 37.5-90.5T704 320h128V192q0-26-18.5-45t-45-19t-45.5-18.5t-19-45T723 19t45-19h128q31 0 61 32t48.5 77t18.5 83v448q0 53-37.5 90.5T896 768m-576 0H128q-53 0-90.5-37.5T0 640V448q0-53 37.5-90.5T128 320h128V192q0-26-19-45t-45.5-19t-45-18.5t-18.5-45T146.5 19T192 0h128q30 0 60.5 32t49 77t18.5 83v448q0 53-37.5 90.5T320 768"></svg:path>`,
})
export class WhhQuotedownIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhQuoteupIcon],svg[whh-quoteup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 448H768v128q0 27 18.5 45.5t45 18.5t45.5 19t19 45.5t-19 45t-45 18.5H704q-31 0-61-32t-48.5-77t-18.5-83V128q0-53 37.5-90.5T704 0h192q53 0 90.5 37.5T1024 128v192q0 53-37.5 90.5T896 448m-576 0H192v128q0 27 18.5 45.5T256 640t45.5 19t18.5 45.5t-18.5 45T256 768H128q-30 0-60.5-32t-49-77T0 576V128q0-53 37.5-90.5T128 0h192q53 0 90.5 37.5T448 128v192q0 53-37.5 90.5T320 448"></svg:path>`,
})
export class WhhQuoteupIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRIcon],svg[whh-r-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M681 576q41 36 64 86t23 106v192q0 27-18.5 45.5t-45 18.5t-45.5-18.5t-19-45.5V768q0-53-37.5-90.5T512 640H128v320q0 27-19 45.5T63.5 1024t-45-18.5T0 960V64q0-26 18.5-45T64 0h448q106 0 181 75t75 181v128q0 56-23 106t-64 86m-41-320q0-53-37.5-90.5T512 128H128v384h384q53 0 90.5-37.5T640 384z"></svg:path>`,
})
export class WhhRIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRUpperCaseIcon],svg[whh-r-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M681 576q41 36 64 86t23 106v192q0 27-18.5 45.5t-45 18.5t-45.5-18.5t-19-45.5V768q0-53-37.5-90.5T512 640H128v320q0 27-19 45.5T63.5 1024t-45-18.5T0 960V64q0-26 18.5-45T64 0h448q106 0 181 75t75 181v128q0 56-23 106t-64 86m-41-320q0-53-37.5-90.5T512 128H128v384h384q53 0 90.5-37.5T640 384z"></svg:path>`,
})
export class WhhRUpperCaseIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRabbitIcon],svg[whh-rabbit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M767 1025H288q-13 0-22.5-9.5T256 993t9.5-22.5T288 961q14 0 23-9t9-23q0-43-23-97t-71-136.5T160 577q-18-35-41-55.5T76 495t-38-9.5t-28-11T0 449q0-43 44.5-101.5T140 251q-12-88-12-153q0-36 24-66t40-30q11 0 19.5 20.5T223 74q9-33 38-55t44-18q13 4 14.5 32.5T311 98q-12 44-64 142q17 12 24.5 38t17.5 56.5t31 51.5t72.5 37.5t103 26t103 26T671 513q65 64 112.5 163.5T831 833v21q33-21 64-21q27 0 45.5 19t18.5 45q0 30-34.5 61t-79.5 49t-78 18"></svg:path>`,
})
export class WhhRabbitIcon {
  readonly viewBox = input("0 0 959 1025")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRaceflagIcon],svg[whh-raceflag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024.488 704q-8-8-23-17q-1-1-7-4q-11-6-22-11q-6-3-8-3q-31-13-68-21V515q73 10 128 61zm-204-192q-23 0-52 3V387q29-3 52-3q50 0 76 3v128q-25-3-76-3m-52-253V131q29-3 52-3q51 0 76 3v128q-25-3-76-3q-23 0-52 3m-256 79V210q95-39 128-50v128q-31 10-128 50m-177 46q-38 0-79-8V248q41 8 79 8q22 0 49-5v128q-27 5-49 5m-207-64q43 39 128 56v128q-86-17-128-56v128q43 39 128 56v133q-14-2-29-6q-2 0-5-1t-3-2q-11-3-21-7q-6-2-10-4q-10-5-21-12q-8-5-9-5q-17-12-30-24v256q0 26-19 45t-45.5 19t-45-19t-18.5-45V64q0-27 18.5-45.5t45-18.5t45.5 18.5t19 45.5q9 9 24 18q1 0 2.5 1l3 2l2.5 1q10 6 21 11q5 2 8 4q15 5 28 9l3 1q17 5 36 9v128q-85-17-128-56zm207 192q22 0 49-5v128q-27 5-49 5q-38 0-79-8V504q41 8 79 8m305-96v128q-32 11-128 50V466q95-39 128-50m0-128q67-22 128-29v128q-61 7-128 29zm-256 219V379q48-8 128-41v128q-80 33-128 41m384 136q-62 6-128 28V544q67-22 128-29zm-256 78q-15 6-28 11q-3 1-7 3q-11 4-25 9l-6 2q-17 6-30 9q-17 5-32 8V635q48-8 128-41zm-128-598q40-7 95-28l1-.5l2-.5q16-6 30-12v128q-80 33-128 41zm256-91q67-22 128-29v128q-61 7-128 29zm285-23q2 0 4.5 1t3.5 1q11 3 22 8q4 2 9 4q10 5 21 12q8 5 9 5q17 12 30 24v128q-55-51-128-61V3q14 2 29 6m99 311v128q-55-51-128-61V259q73 10 128 61m-204-320h2z"></svg:path>`,
})
export class WhhRaceflagIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRacquetIcon],svg[whh-racquet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1007.5 1007.5q-17.5 17.5-42 17.5t-42.5-17L754 839q-19-20-16-50l-37-37q-13-14-23-22t-29-16.5t-40-8.5H431q-79 4-159-28.5T128 579Q54 506 22 413T5.5 232t77-149.5T232 5.5T413 22t166 106q65 64 97.5 144T705 431v178q0 46 47 92l37 37q30-3 50 16l168 169q18 18 18 42.5t-17.5 42M538 169Q446 77 327 66.5T132 132T66.5 327T169 538t211 102.5T575 575t65.5-195T538 169"></svg:path>`,
})
export class WhhRacquetIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRadarIcon],svg[whh-radar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m292-761l-46 45q52 62 67.5 141T819 602q13 17 13 38q0 27-19 45.5T768 704q-16 20-30 34q-74 74-177.5 90T368 798q-19-5-32-20q-2-1-7-4t-8-5q-15-11-40-43.5T256 672q0-13 9.5-22.5T288 640t22.5 9.5T320 672q2 11 14 24q20-24 50-24q27 0 45.5 19t18.5 45q0 11-4 23q63 18 131 1t118-67q4-4 19-23q-8-14-8-30q0-24 15.5-42t39.5-21q15-56 3-115.5T712 354l-45 46q41 55 36 126t-55 122q-2 2-5.5 4.5T638 656q-6 21-23 34.5T576 704q-12 0-24-5q-72 15-135-20q-34-19-65.5-55T320 544q0-13 9.5-22.5T352 512t22.5 9.5T384 544q0 21 30.5 49.5T461 630q24 10 51 10q0-27 19-45.5t45-18.5q21 0 38 13q24-32 25.5-71T621 445l-48 48q3 10 3 19q0 27-18.5 45.5t-45 18.5t-45.5-18.5t-19-45t19-45.5t45-19q8 0 17 3l231-232q-107-91-248-91q-104 0-192.5 51.5t-140 140T128 512t51.5 192.5t140 140T512 896t192.5-51.5t140-140T896 512q0-142-92-249"></svg:path>`,
})
export class WhhRadarIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRadioIcon],svg[whh-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.56 448h-32v256q0 53-37.5 90.5t-90.5 37.5v32q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-32h-448v32q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-32q-53 0-90.5-37.5T.56 704V128q0-53 37.5-90.5T128.56 0h704q53 0 90.5 37.5t37.5 90.5v64h32q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5m-672 320q80 0 136-56t56-136t-56-136t-136-56t-136 56t-56 135.5t56 136t136 56.5m512-608q0-13-9.5-22.5t-22.5-9.5h-640q-13 0-22.5 9.5t-9.5 22.5v128q0 13 9.5 22.5t22.5 9.5h96l96-128l96 128h352q13 0 22.5-9.5t9.5-22.5zm-512 352q27 0 45.5 18.5t18.5 45.5t-18.5 45.5t-45 18.5t-45.5-18.5t-19-45.5t18.5-45.5t45.5-18.5"></svg:path>`,
})
export class WhhRadioIcon {
  readonly viewBox = input("0 0 1025 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRadioactiveIcon],svg[whh-radioactive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1023q-104 0-199-40.5t-163.5-109T40.5 710T0 511t40.5-198.5t109-163T313 40.5T512 0t199 40.5t163.5 109t109 163T1024 511t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-128V639q-34 0-63-17t-46-45L183 709q51 85 138.5 135.5T512 895m0-768q-103 0-190.5 51T183 314l220 132q17-29 46-46t63-17zm-.5 320q-26.5 0-45 19T448 511.5t18.5 45t45 18.5t45.5-18.5t19-45t-19-45.5t-45.5-19M841 314L621 446q19 31 19 65t-18 64l222 128q52-89 52-192q0-106-55-197"></svg:path>`,
})
export class WhhRadioactiveIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRadiobuttonIcon],svg[whh-radiobutton-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1023h-768q-53 0-90.5-37.5T.428 895V127q0-53 37.5-90t90.5-37h768q53 0 90.5 37t37.5 90v768q0 53-37.5 90.5t-90.5 37.5m0-832q0-26-18.5-45t-45.5-19h-640q-27 0-45.5 19t-18.5 45v640q0 27 18.5 45.5t45.5 18.5h640q27 0 45.5-18.5t18.5-45.5zm-384.5 512q-79.5 0-135.5-56t-56-135.5t56-136t135.5-56.5t136 56.5t56.5 136t-56.5 135.5t-136 56"></svg:path>`,
})
export class WhhRadiobuttonIcon {
  readonly viewBox = input("0 0 1025 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRailroadIcon],svg[whh-railroad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M703.5 1024q-26.5 0-45-18.5T640 960H128q0 26-19 45t-45.5 19t-45-18.5T0 960L192 32q0-6 .5-10.5t2-8t2-5.5t3-3.5T203 2t5-1.5t5-.5h22l5 .5l5 1.5l3.5 2.5l3 3.5l2 5.5l2 8L256 32l-4 32h264l-4-32q0-6 .5-10.5t1.5-8t2-5.5t3.5-3.5T523 2t5-1.5t5-.5h22l5 .5l5 1.5l3.5 2.5l3 3.5l2 5.5l2 8L576 32l192 928q0 27-19 45.5t-45.5 18.5M234 192l-18 128h336l-18-128zm335 256H199l-18 128h406zm36 256H163l-17 128h476z"></svg:path>`,
})
export class WhhRailroadIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRailtunnelIcon],svg[whh-railtunnel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M736 640q-13 0-22.5-9.5T704 608V384q0-87-43-160.5T544.5 107T384 64t-160.5 43T107 223.5T64 384v224q0 13-9.5 22.5T32 640t-22.5-9.5T0 608V384q0-104 51.5-192.5t140-140T384 0t192.5 51.5t140 140T768 384v224q0 13-9.5 22.5T736 640m-576 0q-13 0-22.5-9.5T128 608V384q0-106 75-181t181-75t181 75t75 181v224q0 13-9.5 22.5T608 640h-32l96 384H96l96-384zm369 128H239l-9 64h308zm26 192l-9-64H222l-9 64zM247 704h274l-9-64H256z"></svg:path>`,
})
export class WhhRailtunnelIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRainIcon],svg[whh-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 768H192q-84-9-138-73T0 544q0-57 27-106t73-80q34 69 96.5 116.5T336 537q-66-38-105-104t-39-145q0-119 84.5-203.5T480 0q88 0 159.5 48T744 174q-68 22-118 74t-70 121q35-52 91-82.5T768 256q106 0 181 75t75 181q0 88-55 160.5T832 768m-659 64h122l-62 160q-12 23-34.5 30t-42.5-6.5t-26-39t6-49.5zm256 0h122l-62 160q-12 23-34.5 30t-42.5-6.5t-26-39t6-49.5zm256 0h122l-63 160q-11 23-33.5 30t-42.5-6.5t-26-39t5-49.5z"></svg:path>`,
})
export class WhhRainIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRamIcon],svg[whh-ram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 768H128q-53 0-90.5-37.5T0 640V384q0-53 37.5-90.5T128 256h704q53 0 90.5 37.5T960 384v256q0 53-37.5 90.5T832 768M256 416q0-13-9.5-22.5T224 384H96q-13 0-22.5 9.5T64 416v192q0 13 9.5 22.5T96 640t22.5-9.5T128 608v-32h64v32q0 13 9.5 22.5T224 640t22.5-9.5T256 608v-32h-32q-13 0-22.5-9.5T192 544t9.5-22.5T224 512h32zm256 0q0-13-9.5-22.5T480 384H352q-13 0-22.5 9.5T320 416v192q0 13 9.5 22.5T352 640t22.5-9.5T384 608v-32h64v32q0 13 9.5 22.5T480 640t22.5-9.5T512 608zm384 0q0-13-9.5-22.5T864 384H608q-13 0-22.5 9.5T576 416v192q0 13 9.5 22.5T608 640t22.5-9.5T640 608V448h64v160q0 13 9.5 22.5T736 640t22.5-9.5T768 608V448h64v160q0 13 9.5 22.5T864 640t22.5-9.5T896 608zm-512 32h64v64h-64zm-256 0h64v64h-64zM768 32q0-13 9.5-22.5T800 0t22.5 9.5T832 32v160h-64zm-128 0q0-13 9.5-22.5T672 0t22.5 9.5T704 32v160h-64zm-128 0q0-13 9.5-22.5T544 0t22.5 9.5T576 32v160h-64zm-128 0q0-13 9.5-22.5T416 0t22.5 9.5T448 32v160h-64zm-128 0q0-13 9.5-22.5T288 0t22.5 9.5T320 32v160h-64zm-128 0q0-13 9.5-22.5T160 0t22.5 9.5T192 32v160h-64zm64 960q0 13-9.5 22.5T160 1024t-22.5-9.5T128 992V832h64zm128 0q0 13-9.5 22.5T288 1024t-22.5-9.5T256 992V832h64zm128 0q0 13-9.5 22.5T416 1024t-22.5-9.5T384 992V832h64zm128 0q0 13-9.5 22.5T544 1024t-22.5-9.5T512 992V832h64zm128 0q0 13-9.5 22.5T672 1024t-22.5-9.5T640 992V832h64zm128 0q0 13-9.5 22.5T800 1024t-22.5-9.5T768 992V832h64z"></svg:path>`,
})
export class WhhRamIcon {
  readonly viewBox = input("0 0 960 1024")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRandomIcon],svg[whh-random-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M766 501q-25 27-62-13V322q-123 10-197 52q-15-61-70-110q112-72 267-73V23q37-39 62-12l243 207q15 16 15 38t-15 38zm-318 75q0 46 72.5 81T704 701V535q37-39 62-12l243 207q15 16 15 38t-15 38l-243 207q-25 27-62-13V832q-104 0-192.5-34.5t-140-93.5T320 576V448q0-47-72.5-82T64 322v-2q-26 0-45-19T0 255.5T19 210t45-19q104 0 192.5 34.5t140 93.5T448 448zM64 704v-3q123-10 197-52q15 60 70 110q-112 73-267 73q-26 0-45-19T0 767.5t19-45T64 704"></svg:path>`,
})
export class WhhRandomIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRaphaelIcon],svg[whh-raphael-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M962 662L662 962q-62 62-150 62t-150-62L62 662Q0 600 0 512t62-150L362 62Q424 0 512 0t150 62l300 300q62 62 62 150t-62 150m-187 37q-121 20-232-37T354 470q-51-87-41-193q-57 110-57 235t55 223.5T454 885q42 17 89 7.5t82-43.5zM512 128q-53 0-90.5 37.5T384 256t37.5 90.5T512 384t90.5-37.5T640 256t-37.5-90.5T512 128M175 625l36 35q-19-70-19-148q0-74 19-149l-36 37q-47 46-47 112t47 113m674-225L704 254v2q0 80-56 136t-136 56q-65 0-118-41q8 18 15 31q43 74 100.5 121.5t118 64.5t122 11T869 601q31-46 26-103.5T849 400"></svg:path>`,
})
export class WhhRaphaelIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRarIcon],svg[whh-rar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.11 960h-256V814q29-17 46.5-46t17.5-64h192q26 0 45 19t19 45v128q0 27-19 45.5t-45 18.5m0-320h-192V384h192q26 0 45 19t19 45v128q0 27-19 45.5t-45 18.5m0-320h-192q0-35-17.5-64t-46.5-46V64h256q26 0 45 19t19 45v128q0 27-19 45.5t-45 18.5m-256 384q0 27-19 45.5t-45 18.5v192q0 27-18.5 45.5t-45.5 18.5h-128q-27 0-45.5-18.5t-18.5-45.5V768q-27 0-45.5-18.5t-18.5-45.5V320q0-26 19-45t45-19V64q0-27 18.5-45.5T448.11 0h128q27 0 45.5 18.5t18.5 45.5v192q27 0 45.5 18.5t18.5 45.5zm-64-320q0-26-18.5-45t-45.5-19v128q0 27-18.5 45.5t-45.5 18.5t-45.5-18.5t-18.5-45.5V320q-27 0-45.5 19t-18.5 45v256q0 27 18.5 45.5t45.5 18.5h128q27 0 45.5-18.5t18.5-45.5zm-384-64h-192q-26 0-45-18.5T.11 256V128q0-27 19-45.5t45-18.5h256v146q-29 17-46.5 46t-17.5 64m-192 64h192v256h-192q-26 0-45-18.5T.11 576V448q0-26 18.5-45t45.5-19m0 320h192q0 35 17.5 64t46.5 46v146h-256q-26 0-45-18.5T.11 896V768q0-26 18.5-45t45.5-19"></svg:path>`,
})
export class WhhRarIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRaspberryIcon],svg[whh-raspberry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 449q0 48-31.5 84T914 575q46 39 46 98q0 53-37.5 90.5T832 801h-5q5 17 5 32q0 53-37.5 90.5T704 961q-39 0-72-22q-13 38-46 62t-74 24t-74-24t-46-62q-33 22-72 22q-53 0-90.5-37.5T192 833q0-15 5-32h-5q-53 0-90.5-37.5T64 673q0-59 46-98q-47-6-78.5-42T0 449q0-53 37.5-90.5T128 321q6 0 19 2q-19-31-19-66q0-53 37.5-90.5T256 129q16 0 32 5q8-3 17-4q-49-43-49-110Q285 1 319 .5T384 19q28 18 45 50q0-1 1.5-3.5T432 62q18-31 50.5-46.5T553 1q26 39 22 82q9 5 11 7q17-47 54-70Q671 0 705 .5T768 20q0 68-50 111q29 4 50 16q31-18 64-18q53 0 90.5 37.5T960 257q0 39-22 72q38 13 62 46t24 74M832.5 705q26.5 0 45-18.5t18.5-45t-18.5-45.5t-45-19t-45.5 19t-19 45.5t19 45t45.5 18.5m-128 192q26.5 0 45-18.5t18.5-45t-18.5-45.5t-45-19t-45.5 19t-19 45.5t19 45t45.5 18.5M640 641.5q0-26.5-18.5-45.5T576 577t-45.5 19t-18.5 45.5t19 45t45.5 18.5t45-18.5t18.5-45M512.5 961q26.5 0 45-18.5t18.5-45t-18.5-45.5t-45-19t-45.5 19t-19 45.5t19 45t45.5 18.5M448 641.5q0-26.5-18.5-45.5t-45-19t-45.5 19t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45M320.5 897q26.5 0 45-18.5t18.5-45t-18.5-45.5t-45-19t-45.5 19t-19 45.5t19 45t45.5 18.5m-128-192q26.5 0 45-18.5t18.5-45t-18.5-45.5t-45-19t-45.5 19t-19 45.5t19 45t45.5 18.5m-64-320Q102 385 83 404t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45t-18.5-45.5t-45-19m128-192q-26.5 0-45.5 19t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45t-18.5-45.5t-45-19m64 192q-26.5 0-45.5 19t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45t-18.5-45.5t-45-19m128-192q-26.5 0-45.5 19t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45t-18.5-45.5t-45-19m64 192q-26.5 0-45.5 19t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45t-18.5-45.5t-45-19m128-128q-26.5 0-45.5 19t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45t-18.5-45.5t-45-19m64 192q-26.5 0-45.5 19t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45t-18.5-45.5t-45-19m128-256q-26.5 0-45.5 19t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45t-18.5-45.5t-45-19M896 385q-27 0-45.5 19T832 449.5t18.5 45T896 513t45.5-18.5t18.5-45t-18.5-45.5t-45.5-19"></svg:path>`,
})
export class WhhRaspberryIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRaspberrypiIcon],svg[whh-raspberrypi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 608q0 44-17.5 80.5T768 746q3 83-64 149q-60 60-137 64q-16 28-57.5 46.5T416 1024t-93.5-18.5T265 959q-77-4-137-64q-67-66-64-149q-29-21-46.5-57.5T0 608q0-45 19-83t50-58q-11-37 2-80t47-77q30-29 69-44q-48-25-81.5-73.5T64 91q28-42 74.5-66.5T240 0t101.5 24.5T416 91q28-42 74.5-66.5T592 0t101.5 24.5T768 91q-8 53-41.5 101.5T644 266q40 15 70 44q34 34 47 77t2 80q31 20 50 58t19 83M570 892q49-10 86-45q31-29 41.5-54t4.5-44t-26-38q-15-13-33-23l-1 1l-2 1q-13 7-32 11v3q0 80-57 136q13 31 19 52m50-378q-23-38-66.5-56.5t-74-2.5t-31.5 64.5t27 72.5q41 36 79.5 45.5T612 628q26-24 28-50t-20-64M416 960q40 0 68-18.5t28-45.5q0-11-7-23q-43 23-89 23t-89-23q-7 12-7 23q0 27 28 45.5t68 18.5m0-128q51 0 89.5-31t38.5-65q0-16-6-38q-77-20-122-89q-45 69-122 89q-6 21-6 38q0 34 38.5 65t89.5 31m-63.5-377q-30.5-16-74 2.5T212 514q-22 38-20 64t28 50q19 19 57.5 9.5T357 592q28-24 27-72.5T352.5 455M176 847q37 35 86 45q6-21 19-52q-57-56-57-136v-3q-18-4-32-11q-1 0-2-1l-1-1q-18 10-33 23q-20 19-26 38t4.5 44t41.5 54M64 608q0 41 18 74q7-10 13-16q18-18 49-23q-32-59-2-130q-10-1-14-1q-29 0-46.5 23T64 608m106-246q-38 38-42 86q24 0 47 12q44-54 107-70q-25-31-26-69q-48 4-86 41m76-298q-32 0-69 10t-49 22q8 45 48 86.5t89 41.5q19 0 37-4q-8-15-19.5-30.5t-26-30.5t-23.5-24.5t-24-23T192 96q51 7 97 32t77 62q12-10 18-18v-1q0-45-40.5-76T246 64m170 192q-40 0-68 28t-28 68q0 16 6 32q32 0 58 14q17 8 32 25q15-17 32-25q26-14 58-14q6-17 6-32q0-40-28-68t-68-28M704 96q-12-12-49-22t-68-10q-58 0-98.5 31T448 171v1q6 8 18 18q31-37 77-62t97-32q-2 2-17 15.5t-24 23t-23.5 24.5t-26 30.5T530 220q18 4 37 4q49 0 89-41.5T704 96m-42 266q-38-37-86-41q0 38-26 69q63 16 107 70q23-12 47-12q-4-48-42-86m42 150q-4 0-14 1q30 71-2 130q31 5 49 23q6 5 13 16q18-33 18-74q0-96-64-96"></svg:path>`,
})
export class WhhRaspberrypiIcon {
  readonly viewBox = input("0 0 832 1024")
  readonly width = input("0.82em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRawaccesslogsIcon],svg[whh-rawaccesslogs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m895.85 639l-799 1q-13 0-22.5 9.5t-9.5 23t9.5 22.5t22.5 9h416v64h-416q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h416v191h-448q-27 0-45.5-18.5T.85 959V64q0-27 18.5-45.5T64.85 0h767q27 0 45.5 18.5t18.5 45.5zm-96-510h-703q-13 0-22.5 9t-9.5 22.5t9.5 23t22.5 9.5h703q14 0 23-9.5t9-23t-9-22.5t-23-9m0 128h-703q-13 0-22.5 9t-9.5 22.5t9.5 23t22.5 9.5h703q14 0 23-9.5t9-23t-9-22.5t-23-9m0 127h-703q-13 0-22.5 9.5t-9.5 23t9.5 22.5t22.5 9h703q14 0 23-9t9-22.5t-9-23t-23-9.5m0 128h-703q-13 0-22.5 9.5t-9.5 23t9.5 22.5t22.5 9h703q14 0 23-9t9-22.5t-9-23t-23-9.5m77 237l-256 257q-18 18-44 18V703h319q0 27-19 46"></svg:path>`,
})
export class WhhRawaccesslogsIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRazorIcon],svg[whh-razor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 651q-11-11-27-11t-27 11t-11 26.5t11 26.5l59 58l-203 203l-58-58q-11-11-26.5-11t-27 11t-11.5 26t11 26l19 19l-46 46L0 401l46-46l18 18q11 11 27 11t27-11t11-26.5t-11-26.5l-59-58L262 59l58 58q11 11 26.5 11t26.5-11t11-26.5T373 64l-18-18l46-46l623 623l-46 46zm-136 60.5q-8-7.5-19-7.5t-18 8l-20 19l-90-90l19-20q8-8 8-19t-8-18.5t-19-7.5t-18 8l-20 19l-68-68q5-11 5-23q0-26-18.5-45T512 448q-12 0-23 5l-68-68l19-20q8-7 8-18t-7.5-19t-18.5-8t-19 8l-19 19l-91-90l20-19q7-8 7-19t-7.5-19t-18.5-8t-19 8l-75 75q-8 8-8 19t8 18.5t19 7.5t19-7l19-20l90 90l-19 20q-8 8-8 19t8 18.5t19 7.5t18-8l20-19l68 68q-5 11-5 23q0 27 19 45.5t45 18.5q12 0 23-4l68 67l-19 20q-8 7-8 18t7.5 19t18.5 8t19-8l20-19l90 90l-19 20q-8 7-8 18t7.5 19t18.5 8t19-8l75-75q8-8 8-19t-8-18.5"></svg:path>`,
})
export class WhhRazorIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRdioIcon],svg[whh-rdio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M889 371q7 41 7 77q0 91-35.5 174T765 765t-143 95.5T448 896t-174-35.5T131 765T35.5 622T0 448t35.5-174T131 131t143-95.5T448 0q63 0 128 19v259q-38-22-96-22q-52 0-104.5 33.5t-86 86T256 480q0 160 160 160q52 0 104.5-33.5t86-86T640 416V44q99 47 165 134q117 78 219 78q0 34-39 66t-96 49"></svg:path>`,
})
export class WhhRdioIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhReademailIcon],svg[whh-reademail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1017.713 989l-350-349l349-349q8 14 8 29v640q0 15-7 29m-120-669h-1v1l-256 256v-1h-256v1l-256-256v-1h-1l-63-63V64q0-27 19-45.5t45-18.5h768q27 0 45.5 18.5t18.5 45.5v193zm-540 320l-350 349q-7-14-7-29V320q0-15 8-29zm220 0l384 384h-898l384-384z"></svg:path>`,
})
export class WhhReademailIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhReademailaltIcon],svg[whh-reademailalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.428 1024h-896q-27 0-45.5-18.5T.428 960V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v832q0 27-18.5 45.5t-45.5 18.5m-64-768q0-53-37.5-90.5t-90.5-37.5h-512q-53 0-90.5 37.5t-37.5 90.5v384q0 26 19 45t45 19h32q21 0 39 8.5t25 23.5q5 17 16.5 66t15.5 62q8 20 24 26t45 6h249q29 0 43.5-6t22.5-26q19-90 32-128q13-32 64-32h32q27 0 45.5-19t18.5-45zm-385 372q-1 12-9 19l-45 45q-10 10-25 9q-15 1-25-9l-45-45q-5-5-7-11l-90-88q-9-9-9-22.5t9-22.5l46-46q9-9 22.5-9t23.5 9l71 71l239-263q10-9 23.5-9t22.5 9l46 46q9 9 9 22.5t-9 22.5z"></svg:path>`,
})
export class WhhReademailaltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRecordIcon],svg[whh-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 0q139 0 257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024t-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0"></svg:path>`,
})
export class WhhRecordIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRectangleIcon],svg[whh-rectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1024V0h1024v1024zM960 64H64v896h896z"></svg:path>`,
})
export class WhhRectangleIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRectangleselectionIcon],svg[whh-rectangleselection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-32q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5t22.5-9.5t9.5-22.5t9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v32q0 53-37.5 90.5t-90.5 37.5m96-320h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m0-256h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m0-256h-64q-13 0-22.5-9.5t-9.5-22.5t-9.5-22.5t-22.5-9.5t-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h32q53 0 90.5 37.5t37.5 90.5v32q0 13-9.5 22.5t-22.5 9.5m-320 832h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m0-896h-64q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-256 896h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m0-896h-64q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-256 896h-32q-53 0-90.5-37.5T.428 896v-32q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5t9.5 22.5t22.5 9.5t22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m0-896q-13 0-22.5 9.5t-9.5 22.5t-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5T.428 160v-32q0-53 37.5-90.5t90.5-37.5h32q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-128 192h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5T.428 416v-64q0-13 9.5-22.5t22.5-9.5m0 256h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5T.428 672v-64q0-13 9.5-22.5t22.5-9.5"></svg:path>`,
})
export class WhhRectangleselectionIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRecycleIcon],svg[whh-recycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 896h-65v41q-15 21-38 23h-10q-23-2-39-23l-86-113q-18-23-18-56t18-56l86-113q18-24 43.5-24t43.5 24v41h95l-74-140l248-143l52 91zm126-567q-12 27-44 43t-64 12H640q-35-4-52.5-19t-5.5-40l38-23L512 96l-92 176l-246-129L256 0h512l90 157l48-29q32 4 46.5 25.5T954 201zm-576-18l60 128q13 26-1.5 47.5T330 512l-29-15l-75 143h222v256H256L0 448l46-80l-40-21q-13-26 6.5-56.5T64 256h146q32-4 64 12t44 43"></svg:path>`,
})
export class WhhRecycleIcon {
  readonly viewBox = input("0 0 1024 960")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRedaxscriptIcon],svg[whh-redaxscript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640.81 1024v-64h32q32-33 32-64q0-19-25.5-54t-69-86.5t-65.5-83.5q-28-40-67-76q-34 36-61 76q-5 7-24.5 35t-33 48t-26 43.5t-12.5 33.5q0 16 8 32t16 24l8 8h32v64H.81v-64h32q9-7 25-20t56.5-56t72.5-91q24-36 49.5-90.5t39.5-90.5l13-36q-5-19-14.5-49t-36.5-97t-51-103q-20-30-43.5-55t-42-39t-35-24t-24.5-13.5t-9-3.5h-32V64h384v64h-32q-17 38 0 64q7 11 45 59.5t51 68.5q5 7 10 15t11 17t10 14q19-25 33-46q21-30 57-75t53.5-71.5t17.5-45.5q0-14-8-30t-16-25l-8-9h-32V0h384v64h-32q-9 7-25 20t-56.5 56t-72.5 91q-24 36-57.5 106.5T661.81 460l-21 52q144 200 198 281q67 101 151 165l3 2h32v64z"></svg:path>`,
})
export class WhhRedaxscriptIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRedditIcon],svg[whh-reddit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M940 504q20 51 20 104q0 96-60 177T737 913t-225 47t-225-47t-163-128t-60-177q0-53 20-104q-37-14-60.5-46.5T0 384q0-53 37.5-90.5T128 256q37 0 67.5 19.5T242 327q102-60 229-69q2-11 6.5-28.5t14-54.5t16-61.5L514 89q12-25 30-25h166q10-28 34.5-46T800 0q40 0 68 28t28 68t-28 68t-68 28q-31 0-55.5-18T710 128H569l-33 129q137 6 246 70q16-32 46.5-51.5T896 256q53 0 90.5 37.5T1024 384q0 41-23.5 73.5T940 504M127.5 320q-26.5 0-45 18.5T64 384t18.5 45.5t45 18.5t45.5-18.5t19-45.5t-19-45.5t-45.5-18.5m192 128q-26.5 0-45 19T256 512.5t18.5 45t45 18.5t45.5-18.5t19-45t-19-45.5t-45.5-19M512 768q-54 0-81.5-6.5T384 736q0-13-9.5-22.5T352 704t-22.5 9.5T320 736q0 7 3 13q10 33 63 58t126 25q74 0 127-24.5t62-58.5q3-7 3-13q0-13-9.5-22.5T672 704t-22.5 9.5T640 736q-32 32-128 32m191.5-320q-26.5 0-45 19T640 512.5t18.5 45t45 18.5t45.5-18.5t19-45t-19-45.5t-45.5-19m192-128q-26.5 0-45 18.5T832 384t18.5 45.5T896 448t45.5-18.5T960 384t-19-45.5t-45.5-18.5"></svg:path>`,
})
export class WhhRedditIcon {
  readonly viewBox = input("0 0 1024 960")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRedirectIcon],svg[whh-redirect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 768q0 106-75 181t-181 75q-55 0-105-23q-74 23-151 23q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257q0 77-23 151q23 50 23 105M890 448q-19-16-54.5-47T783 356h-37q-1 4-2 11.5t-2 11.5q14 9 39.5 27t31.5 22q-33 33-48 49q-12-18-34-54.5T698 368q-19 5-41 11q-4 2-10.5 6t-8.5 5q3 13 7 37t5 27q-15 18-23 27q-12-6-49.5-23T520 432q0-1-4-12v-34q26-7 82-22q-1-2-41-87q7-10 15-23q21-1 64.5-5t65.5-6v-49q2 0 7-1.5t7-2.5q3 23 4 34q1 0 44-2q-33-28-68-47q-17 2-39 4l-4-4q3-10 5-18q-48-20-101-26q3 12 9 37t9 38q-4 1-12 3.5t-10 3.5l8 4l-34 4q3-18 9.5-52.5T544 130q-20-2-32-2q-2 0-21 1q1 0 2 1h1v38h-26q-5-1-22-4q1-5 4.5-15.5T456 133q-133 19-225 118h14l24 21l24 21v22q-22 9-65 27t-63 26q-3 23-10 69.5T144 507q30 32 59 64q-14 9-16 10h-52q24 136 130.5 225.5T512 896q17 0 34-1q-9-15-14-28q-5 0-15.5-.5T501 865q-14-20-42.5-63T416 737q19-37 67-128q2-3 7-8q14-12 42.5-37.5T575 526q22 4 89-7.5t89-7.5q1 0 1 1l1 1q9-1 13-1q67 0 126 34q2-18 2-34q0-30-6-64M768 576q-62 0-111 36t-69 92h-65q-11 12-11 29t11 29l53 70q6 6 15 9q12 5 26 2.5t23-11.5l53-70q11-12 11-29t-11-29h-35q16-29 45.5-46.5T768 640q53 0 90.5 37.5T896 768t-37.5 90.5T768 896q-9 0-21-2l-52 51q35 15 73 15q80 0 136-56.5t56-136T904 632t-136-56"></svg:path>`,
})
export class WhhRedirectIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRefreshIcon],svg[whh-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M990 1L856 135q-69-63-157.5-98.5T512 1Q353 1 223.5 90.5T37 323l119 48q43-108 139.5-175T512 129q145 0 254 97L640 353q-1 14 8.5 23.5T672 385h309q14 0 27.5-13.5T1023 344l1-320q1-24-34-23M512 897q-145 0-254-96l126-127q1-14-8.5-23.5T352 641H43q-14 1-27.5 14.5T1 683l-1 320q-1 24 34 23l134-134q69 63 157.5 98t186.5 35q159 0 288.5-89T987 703l-119-47q-43 108-139.5 174.5T512 897"></svg:path>`,
})
export class WhhRefreshIcon {
  readonly viewBox = input("0 0 1024 1027")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRefreshaltIcon],svg[whh-refreshalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 897v110q-30 30-50 10L268 861q-12-12-12-28.5t12-28.5l194-156q20-20 50 10v111q114 0 216.5-29.5t167-81.5T960 545q0-13 9.5-22.5T992 513t22.5 9.5t9.5 22.5q0 81-42 149T868.5 805.5T705 873t-193 24m50-519q-20 20-50-10V257q-114 0-216.5 29t-167 81.5T64 481q0 13-9.5 22.5T32 513t-22.5-9.5T0 481q0-82 42-149.5t113.5-111T319 153t193-24V18q30-29 50-9l194 156q12 12 12 28.5T756 222z"></svg:path>`,
})
export class WhhRefreshaltIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhReliabilityIcon],svg[whh-reliability-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.193 384h-384q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45.5-19h384q26 0 45 19t19 45.5t-19 45t-45 18.5m-576 640h-320q-27 0-45.5-18.5T.193 960V640q0-26 18.5-45t45.5-19h320q35 0 54 30l-230 231l-54-54q-15-16-37-16t-37.5 15.5t-15.5 37.5t15 38l86 86q17 17 43 14q26 3 43-14l197-197v213q0 27-19 45.5t-45 18.5m0-576h-320q-27 0-45.5-18.5T.193 384V64q0-26 18.5-45t45.5-19h320q35 0 54 30l-230 231l-54-54q-15-16-37-16t-37.5 15.5t-15.5 37.5t15 38l86 86q17 17 43 14q26 3 43-14l197-197v213q0 27-19 45.5t-45 18.5m192 320h384q26 0 45 19t19 45.5t-19 45t-45 18.5h-384q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45.5-19"></svg:path>`,
})
export class WhhReliabilityIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRemoteIcon],svg[whh-remote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-640-695q-8-9-20-9t-21 9l-143 161q-8 9-8 22t8 22l143 161q9 9 21 9t20-9zm439-114l-161-143q-9-8-22-8t-22 8l-161 143q-9 8-9 20.5t9 20.5h366q9-8 9-20.5t-9-20.5m-375 297q0 80 56 136t136 56t136-56.5t56-136t-56-135.5t-136-56t-136 56t-56 136m375 255h-366q-9 8-9 20.5t9 20.5l161 143q9 8 22 8t22-8l161-143q9-8 9-20.5t-9-20.5m257-277l-143-161q-9-9-21-9t-20 9v366q8 9 20 9t21-9l143-161q8-9 8-22t-8-22"></svg:path>`,
})
export class WhhRemoteIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRemotemysqlIcon],svg[whh-remotemysql-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 132v605l64 64q-145 95-318 95q-137 0-261-63l-6 12q73 74 73 179H0q0-106 75-181t181-75q30 0 62 8l11-21q-94-81-147.5-194.5T128 318q0-173 95-318l65 64h602l49-50q15-14 35-14t34.5 14.5T1023 49t-14 35zm-609-4l238 237l237-237zm545 68L658 435l238 238z"></svg:path>`,
})
export class WhhRemotemysqlIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRemovecircleIcon],svg[whh-removecircle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-896q-104 0-192.5 51.5t-140 140T128 512t51.5 192.5t140 140T512 896t192.5-51.5t140-140T896 512t-51.5-192.5t-140-140T512 128m175 559q-17 17-41 17t-41-17l-94-94l-93 94q-17 17-41 17t-41-17t-17-41t17-41l93-94l-93-93q-17-17-17-41t17-41t41-17t41 17l93 94l94-94q17-17 41-17t41 17t17 41t-17 41l-94 93l94 94q17 17 17 41t-17 41"></svg:path>`,
})
export class WhhRemovecircleIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRemovefolderaltIcon],svg[whh-removefolderalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.11 896h-896q-26 0-45-19t-19-45V256h1024v576q0 26-19 45t-45 19m-82-407q18-18 18-43.5t-18-43.5t-43.5-18t-43.5 18l-87 87l-87-87q-18-18-43.5-18t-43.5 18t-18 43.5t18 43.5l87 87l-87 87q-18 18-18 43.5t18 43.5t43.5 18t43.5-18l87-87l87 87q18 18 43.5 18t43.5-18t18-43.5t-18-43.5l-87-87zM.11 64q0-27 19-45.5t45-18.5h384q27 0 45.5 18.5t18.5 45.5t18.5 45.5t45.5 18.5h384q26 0 45 19t19 45H.11z"></svg:path>`,
})
export class WhhRemovefolderaltIcon {
  readonly viewBox = input("0 0 1025 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRemovefriendIcon],svg[whh-removefriend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 896H704q-27 0-45.5-19T640 831.5t18.5-45T704 768h256q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19M710 640q-32 26-70 42v28q-28 10-46 34.5T576 800v64q0 40 28 68t68 28h32v62q-70 2-192 2h-76l-81-1l-87-2.5l-80-4.5l-75.5-8.5l-57.5-12L13.5 979L0 957q2-88 110-155.5T384 712v-33q-52-23-90-65t-60-98.5t-32-121T192 256q0-65 25-114.5t69-80t101-46T512 0t125 15.5t101 46t69 80T832 256q0 220-75 330q-34 18-47 54"></svg:path>`,
})
export class WhhRemovefriendIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRemovesignIcon],svg[whh-removesign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m247-670q9-10 9-23t-9-22l-44-44q-10-9-22.5-9t-22.5 9L512 424L353 265q-9-9-22-9t-22 9l-44 44q-9 9-9 22t9 23l158 158l-158 158q-9 10-9 23t9 22l44 44q9 9 22 9t22-9l159-159l158 159q10 9 22.5 9t22.5-9l44-44q9-9 9-22t-9-23L600 512z"></svg:path>`,
})
export class WhhRemovesignIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRemovetagsIcon],svg[whh-removetags-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1006.914 680l-325 325q-18 18-44.5 18t-44.5-18l-144-144v-62q0-40-28-68t-68-28h-62l-272-272q-18-18-18-79V64q0-27 19-45.5t45-18.5h288q62 0 80 18l574 573q18 19 18 45t-18 44m-750-552q-53 0-90.5 37.5t-37.5 90.5t37.5 90.5t90.5 37.5t90.5-37.5t37.5-90.5t-37.5-90.5t-90.5-37.5m-192 639h256q26 0 45 19t19 45.5t-19 45t-45 18.5h-256q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45.5-19"></svg:path>`,
})
export class WhhRemovetagsIcon {
  readonly viewBox = input("0 0 1025 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRemoveuseraltIcon],svg[whh-removeuseralt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 800q0 93-65.5 158.5T800 1024H436l-81-1l-87-2.5l-80-4.5l-75.5-8.5l-57.5-12L13.5 979L0 957q2-88 110-155.5T384 712v-33q-52-23-90-65t-60-98.5t-32-121T192 256q0-65 25-114.5t69-80t101-46T512 0t125 15.5t101 46t69 80T832 256q0 214-71 324q23-4 39-4q93 0 158.5 65.5T1024 800M768 273q0-103-71.5-156T512 64t-184.5 53T256 273q0 68 10 125.5T298 505t60 82t90 46v138q-60 6-117.5 21T232 825.5t-72.5 38T112 898t-16 22q0 14 38 23t114 12t126.5 4t137.5 1q85 0 131-1q-67-66-67-159q0-6 3-29h-3V633q192-41 192-360m-96 495q-13 0-22.5 9.5T640 800t9.5 22.5T672 832h256q13 0 22.5-9.5T960 800t-9.5-22.5T928 768z"></svg:path>`,
})
export class WhhRemoveuseraltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRepeatIcon],svg[whh-repeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1023 342q-1 15-9.5 29T992 385H662q-24 1-23-34l126-126q-109-96-253-96q-104 0-192.5 51.5t-140 140t-51.5 193T179.5 706t140 139.5T512 897q88 0 165.5-37.5T809 756l101 79q-72 89-176 139.5T512 1025q-104 0-199-40.5t-163.5-109T40.5 712T0 513t40.5-198.5t109-163T313 42.5T512 2q97 0 185.5 35T856 135L990 1q35-1 34 23z"></svg:path>`,
})
export class WhhRepeatIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRepeatoneIcon],svg[whh-repeatone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 704q0 53-37.5 90.5T896 832H128q-53 0-90.5-37.5T0 704V320q0-53 37.5-90.5T128 192h128V24q37-40 62-13l243 207q15 16 15 38.5T561 294L318 502q-25 26-62-14V320h-64q-26 0-45 18.5T128 384v256q0 26 19 45t45 19h640q27 0 45.5-19t18.5-45V384q0-27-18.5-45.5T832 320h-64q-26 0-45-19t-19-45.5t19-45t45-18.5h128q53 0 90.5 37.5T1024 320z"></svg:path>`,
})
export class WhhRepeatoneIcon {
  readonly viewBox = input("0 0 1024 832")
  readonly width = input("1.24em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhReportIcon],svg[whh-report-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832.27 1024h-768q-26 0-45-18.5T.27 960V65q0-27 19-45.5t45-18.5h448v352q0 13 9.5 22.5t22.5 9.5h352v575q0 27-18.5 45.5t-45.5 18.5m-96-192h-32V608q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v224h-64V480q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v352h-64V672q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v160h-32q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h576q14 0 23-9.5t9-22.5t-9.5-22.5t-22.5-9.5m-160-832q26 0 44 18l257 257q19 19 19 46h-320z"></svg:path>`,
})
export class WhhReportIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhResellerhostingIcon],svg[whh-resellerhosting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 1024H128q-53 0-90.5-37.5T0 896t37.5-90.5T128 768h320v-38q-84-16-138-68t-54-118q0-26 18.5-45t45-19t45.5 19t19 45t17.5 48t46.5 35V442q-84-16-138-68t-54-118t54-118t138-68v-6q0-26 18.5-45t45-19T557 19t19 45v6q84 16 138 68t54 118q0 27-19 45.5T703.5 320t-45-19t-18.5-45t-17.5-48t-46.5-35v185q84 16 138 68t54 118t-54 118t-138 68v38h320q53 0 90.5 37.5T1024 896t-37.5 90.5T896 1024M448 173q-29 13-46.5 35T384 256t17.5 48t46.5 35zM191.5 832q-26.5 0-45 19T128 896.5t18.5 45t45 18.5t45.5-18.5t19-45t-19-45.5t-45.5-19M640 544q0-26-17.5-48T576 461v166q29-13 46.5-35t17.5-48m192 288H448q-27 0-45.5 19T384 896.5t18.5 45T448 960h384q26 0 45-18.5t19-45t-19-45.5t-45-19"></svg:path>`,
})
export class WhhResellerhostingIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhResidentevilIcon],svg[whh-residentevil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 1024H320L0 704V320L320 0h384l320 320v384zM448 512L64 335v354zM335 960h354L512 576zm177-512L689 64H335zm64 64l384 177V335z"></svg:path>`,
})
export class WhhResidentevilIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhResistorIcon],svg[whh-resistor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 376H818l-47 168q-3 12-13 18.5t-22 5.5q-12 1-22-5.5T701 544l-93-335l-93 335q-3 12-13 18.5t-22 5.5q-12 1-22-5.5T445 544l-93-335l-32 167H64q-26 0-45-18.5t-19-45T19 267t45-19h206l47-168q3-11 13-17.5t22-5.5q12-1 22 5.5T387 80l93 336l93-336q3-11 13-17.5t22-5.5q12-1 22 5.5T643 80l93 336l32-168h192q27 0 45.5 19t18.5 45.5t-18.5 45T960 376"></svg:path>`,
})
export class WhhResistorIcon {
  readonly viewBox = input("0 0 1024 614")
  readonly width = input("1.67em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhResizeIcon],svg[whh-resize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-128q-26 0-45-19t-19-45.5t19-45t45-18.5h73q23 0 39-16t16-39v-73q0-26 18.5-45t45-19t45.5 19t19 45v128q0 53-37.5 90.5t-90.5 37.5m63.5-704q-26.5 0-45-18.5t-18.5-45.5v-73q0-23-16-39t-39-16h-73q-26 0-45-18.5t-19-45t19-45.5t45-19h128q53 0 90.5 37.5t37.5 90.5v128q0 27-19 45.5t-45.5 18.5m-703.5-192h-73q-23 0-39 16t-16 39v73q0 27-19 45.5t-45.5 18.5t-45-18.5T.428 256V128q0-53 37.5-90.5t90.5-37.5h128q26 0 45 19t19 45.5t-18.5 45t-45.5 18.5m-64 640V256q0-26 18.5-45t45.5-19h512q26 0 45 19t19 45v512q0 27-19 45.5t-45 18.5h-512q-27 0-45.5-18.5t-18.5-45.5m128-96q0 13 9.5 22.5t22.5 9.5h320q13 0 22.5-9.5t9.5-22.5V352q0-13-9.5-22.5t-22.5-9.5h-320q-13 0-22.5 9.5t-9.5 22.5zm-256.5 32q26.5 0 45.5 19t19 45v73q0 23 16 39t39 16h73q26 0 45 18.5t19 45t-19 45.5t-45 19h-128q-53 0-90.5-37.5T.428 896V768q0-27 18.5-45.5t45-18.5"></svg:path>`,
})
export class WhhResizeIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhResizedownleftIcon],svg[whh-resizedownleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M991.998 1024h-128q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h32v-32q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v128q0 13-9.5 22.5t-22.5 9.5m0-256h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m0-192h-512q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h512q13 0 22.5 9.5t9.5 22.5v512q0 13-9.5 22.5t-22.5 9.5m-512 320h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5m-128 128h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m0-896h-64q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-192 896h-128q-13 0-22.5-9.5t-9.5-22.5V864q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v32h32q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m0-896h-32v32q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-128 128h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5m0 192h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5m0 192h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5m640 256h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5"></svg:path>`,
})
export class WhhResizedownleftIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhResizedownrightIcon],svg[whh-resizedownright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M991.998 1024h-128q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h32v-32q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v128q0 13-9.5 22.5t-22.5 9.5m0-256h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m0-192h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m0-192h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m0-192h-64q-13 0-22.5-9.5t-9.5-22.5v-32h-32q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5v128q0 13-9.5 22.5t-22.5 9.5m-256 832h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m0-896h-64q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-192 896h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m0-448h-512q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h512q13 0 22.5 9.5t9.5 22.5v512q0 13-9.5 22.5t-22.5 9.5m-512 64h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5m0 192h64q13 0 22.5 9.5t9.5 22.5v32h32q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-128q-13 0-22.5-9.5t-9.5-22.5V864q0-13 9.5-22.5t22.5-9.5m256 64h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5"></svg:path>`,
})
export class WhhResizedownrightIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhResizefullIcon],svg[whh-resizefull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.356 1024h-383q-27 0-45.5-18.5t-18.5-45.5l135-135l-149-145q-18-19-18-45.5t18-45.5l92-91q18-18 45-18t46 18l147 145l131-130q27 0 45.5 18.5t18.5 45.5v383q0 27-18.5 45.5t-45.5 18.5m-526-498q-19 19-45.5 19t-45.5-19l-148-145l-131 131q-26 0-45-19t-19-45V64q0-27 19-45.5t45-18.5h384q27 0 45.5 18.5t18.5 45.5l-135 135l149 146q19 18 19 45t-19 45z"></svg:path>`,
})
export class WhhResizefullIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhResizehorizontalIcon],svg[whh-resizehorizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1015 343L736 632q-9 9-21.5 9t-21.5-9l-44-46q-9-9-9-22.5t9-22.5l151-156H224l151 156q9 9 9 22.5t-9 22.5l-44 46q-9 9-21.5 9t-21.5-9L9 343q-9-9-9-22.5T9 298L288 9q9-9 21.5-9T331 9l44 46q9 9 9 22.5t-9 22.5L223 257h578L649 100q-9-9-9-22.5t9-22.5l44-46q9-9 21.5-9T736 9l279 289q9 9 9 22.5t-9 22.5"></svg:path>`,
})
export class WhhResizehorizontalIcon {
  readonly viewBox = input("0 0 1024 641")
  readonly width = input("1.6em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhResizehorizontalaltIcon],svg[whh-resizehorizontalalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1005 558q-5 5-86.5 71T832 700q-9 7-16.5 2.5T804 689l-4-9V576H640v416q0 13-9.5 22.5T608 1024t-22.5-9.5T576 992V32q0-13 9.5-22.5T608 0t22.5 9.5T640 32v416h160V344l2-4l4-8l6.5-8l9-4l10.5 4q12 10 88 72t84 70q20 20 20 46.5t-19 45.5m-589 466q-13 0-22.5-9.5T384 992V576H224v104q-1 1-2 3.5t-4 8.5t-6.5 8t-9 4t-10.5-4q-5-5-86.5-71T19 558Q0 539 0 512.5T20 466q8-8 83-69.5t89-72.5q9-6 16.5-2t11.5 13l4 9v104h160V32q0-13 9.5-22.5T416 0t22.5 9.5T448 32v960q0 13-9.5 22.5T416 1024"></svg:path>`,
})
export class WhhResizehorizontalaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhResizesmallIcon],svg[whh-resizesmall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1005.856 822q19 19 19 46t-19 46l-91 92q-19 19-45.5 19t-45.5-19l-114-114l-133 133q-27 0-45.5-19t-18.5-45V576q0-26 18.5-45t45.5-19h384q26 0 45 19t19 45l-133 133zm-557-310h-383q-27 0-45.5-18.5T1.856 448l132-132l-114-113q-19-19-19-46t19-46l91-92q19-19 46-19t46 19l114 114l132-132q27 0 45.5 18.5t18.5 45.5v383q0 27-19 45.5t-45 18.5"></svg:path>`,
})
export class WhhResizesmallIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhResizeupleftIcon],svg[whh-resizeupleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M991.998 1024h-512q-13 0-22.5-9.5t-9.5-22.5V480q0-13 9.5-22.5t22.5-9.5h512q13 0 22.5 9.5t9.5 22.5v512q0 13-9.5 22.5t-22.5 9.5m0-640h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m0-192h-64q-13 0-22.5-9.5t-9.5-22.5v-32h-32q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5v128q0 13-9.5 22.5t-22.5 9.5m-256-64h-64q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-192 0h-64q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-192 896h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m0-896h-64q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-192 896h-128q-13 0-22.5-9.5t-9.5-22.5V864q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v32h32q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m0-896h-32v32q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-128 128h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5m0 192h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5m0 192h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5"></svg:path>`,
})
export class WhhResizeupleftIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhResizeuprightIcon],svg[whh-resizeupright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M991.998 1024h-128q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h32v-32q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v128q0 13-9.5 22.5t-22.5 9.5m0-256h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m0-192h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m0-192h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m0-192h-64q-13 0-22.5-9.5t-9.5-22.5v-32h-32q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5v128q0 13-9.5 22.5t-22.5 9.5m-256 832h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m0-896h-64q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-192 0h-64q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-192 0h-64q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-192 0h-32v32q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-128 128h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5m0 192h512q13 0 22.5 9.5t9.5 22.5v512q0 13-9.5 22.5t-22.5 9.5h-512q-13 0-22.5-9.5t-9.5-22.5V480q0-13 9.5-22.5t22.5-9.5"></svg:path>`,
})
export class WhhResizeuprightIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhResizeverticalIcon],svg[whh-resizevertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M298 1015L9 736q-9-9-9-21.5T9 693l46-44q9-9 22.5-9t22.5 9l156 151V224L100 375q-9 9-22.5 9T55 375L9 331q-9-9-9-21.5T9 288L298 9q9-9 22.5-9T343 9l289 279q9 9 9 21.5t-9 21.5l-46 44q-9 9-22.5 9t-22.5-9L384 223v578l157-152q9-9 22.5-9t22.5 9l46 44q9 9 9 21.5t-9 21.5l-289 279q-9 9-22.5 9t-22.5-9"></svg:path>`,
})
export class WhhResizeverticalIcon {
  readonly viewBox = input("0 0 641 1024")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhResizeverticalaltIcon],svg[whh-resizeverticalalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 448H32q-13 0-22.5-9.5T0 416t9.5-22.5T32 384h416V224H344l-4-2l-8-4l-8-6.5l-4-9l4-10.5q12-14 73-89t69-83q20-20 46.5-20T558 19q5 5 71 86.5t71 86.5q7 9 2.5 16.5T689 220l-9 4H576v160h416q13 0 22.5 9.5t9.5 22.5t-9.5 22.5T992 448M32 576h960q13 0 22.5 9.5t9.5 22.5t-9.5 22.5T992 640H576v160h104q1 1 3.5 1.5t8.5 4t8 7t4 9t-4 10.5q-5 5-71 86.5t-71 86.5q-19 19-45.5 19t-46.5-20q-8-8-69-83t-73-89q-6-9-2-16.5t13-11.5l9-4h104V640H32q-13 0-22.5-9.5T0 608t9.5-22.5T32 576"></svg:path>`,
})
export class WhhResizeverticalaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRestartIcon],svg[whh-restart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 576H832q-26 0-45-18.5T768 512t19-45.5t45-18.5h128q27 0 45.5 18.5T1024 512t-18.5 45.5T960 576M786 329q-19 19-46 19t-46-19t-19-46t19-46l92-91q18-19 45-19t46 19t19 46t-19 45zm-274 695q-27 0-45.5-18.5T448 960V832q0-26 19-45t45.5-19t45 19t18.5 45v128q0 27-18.5 45.5T512 1024m.5-768q-26.5 0-45.5-19t-19-45V64q0-27 19-45.5T512 0t45 18.5T576 64v128q0 27-18.5 45.5t-45 18.5M237 877q-18 19-45 19t-46-19t-19-46t19-45l91-92q19-19 46-19t46 19t19 46t-19 46zm0-548l-91-92q-19-18-19-45t19-46t46-19t45 19l92 91q19 19 19 46t-19 46t-46 19t-46-19m19 183.5q0 26.5-19 45T192 576H64q-27 0-45.5-18.5T0 512t18.5-45.5T64 448h128q26 0 45 19t19 45.5M786 694l91 92q19 18 19 45t-19 46t-46 19t-45-19l-92-91q-19-19-19-46t19-46t46-19t46 19"></svg:path>`,
})
export class WhhRestartIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRestaurantmenuIcon],svg[whh-restaurantmenu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768.338 896h-64v19q0 53-29.5 84.5t-71.5 22.5l-502-99q-42-8-71.5-51t-29.5-96V128q0-53 37.5-90.5t90.5-37.5h640q53 0 90.5 37.5t37.5 90.5v640q0 53-37.5 90.5t-90.5 37.5m-640-479q0 46 30 84q4 6 21.5 19t31 27.5t13.5 28.5v128q0 15 31.5 27.5t96.5 28.5q39 10 67.5 7.5t44.5-11.5t16-20V608q0-14 13.5-26.5t32-22.5t21.5-13q5-4 14.5-9t12-10.5t2.5-19.5q0-45-29-83t-69-46q-25-5-47 5q-30-51-79.5-61t-78.5 29q-23-18-47-23q-41-8-69.5 18t-28.5 71m704-243q0-46-32.5-78t-77.5-32h-465l346 68q42 9 71.5 52t29.5 95v553h18q45 0 77.5-32.5t32.5-77.5z"></svg:path>`,
})
export class WhhRestaurantmenuIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRestoreIcon],svg[whh-restore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 640h-64V512q27 0 45.5-19t18.5-45V192q0-27-18.5-45.5T832 128H448q-27 0-45.5 18.5T384 192v128H256V128q0-53 37.5-90.5T384 0h512q53 0 90.5 37.5T1024 128v384q0 53-37.5 90.5T896 640M768 512v384q0 53-37.5 90.5T640 1024H128q-53 0-90.5-37.5T0 896V512q0-53 37.5-90.5T128 384h512q53 0 90.5 37.5T768 512m-192 0H192q-27 0-45.5 18.5T128 576v256q0 26 18.5 45t45.5 19h384q27 0 45.5-19t18.5-45V576q0-27-18.5-45.5T576 512"></svg:path>`,
})
export class WhhRestoreIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRestrictedIcon],svg[whh-restricted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M724 1024H300L0 724V300L300 0h424l300 300v424zm172-671L671 128H353L128 353v318l225 225h318l225-225z"></svg:path>`,
})
export class WhhRestrictedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRetweetIcon],svg[whh-retweet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 384L832 640L640 384h128V128H384L288 0h608v384zM256 256v256h384l96 128H128V256H0L192 0l192 256z"></svg:path>`,
})
export class WhhRetweetIcon {
  readonly viewBox = input("0 0 1024 640")
  readonly width = input("1.6em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRightborderIcon],svg[whh-rightborder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 960V512h-64v-64h64V0h64v960zM768 0h64v64h-64zm0 512h-64v-64h64zM640 0h64v64h-64zm0 512h-64v-64h64zM448 128V64h64v64zM384 0h64v64h-64zm128 0h64v64h-64zM384 512h-64v-64h64zM256 0h64v64h-64zm0 512h-64v-64h64zM128 0h64v64h-64zm0 512H64v-64h64zM0 576v-64h64v64zm0-192h64v64H0zm0-128h64v64H0zm0-128h64v64H0zM0 0h64v64H0zm64 704H0v-64h64zm0 128H0v-64h64zm0 128H0v-64h64zm128 0h-64v-64h64zm128 0h-64v-64h64zm192-192h-64v-64h64zm0-128h-64v-64h64zm0-128h-64v-64h64zm-64-320h64v64h-64zm64 192h-64v-64h64zm0 448v64h-64v-64zm64 128h-64v-64h64zm-128 0h-64v-64h64zm256 0h-64v-64h64zm128 0h-64v-64h64z"></svg:path>`,
})
export class WhhRightborderIcon {
  readonly viewBox = input("0 0 960 960")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRimIcon],svg[whh-rim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512q0-104 40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m94-206q69-21 124-72q-51-63-84-83q-29-16-62-26q-8 33-8 67q0 38 30 114m-188 0q30-76 30-114q0-33-8-67q-34 10-62 26q-33 19-84 83q55 51 124 72M192 512q0 32 9 72q80-12 113-31q30-18 54-40q-25-25-54-42q-33-19-113-31q-9 40-9 72m226-306q-69 21-124 72q51 63 84 83q30 17 62 27q8-33 8-68q0-38-30-114m94 242q-27 0-45.5 19T448 512.5t18.5 45T512 576t45.5-18.5t18.5-45t-18.5-45.5t-45.5-19m94-242q-30 76-30 114q0 33 9 67q31-9 61-26q33-20 84-83q-55-51-124-72m217 234q-80 12-113 31q-28 17-54 42q25 22 54 40q33 19 113 31q9-40 9-72t-9-72"></svg:path>`,
})
export class WhhRimIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRingIcon],svg[whh-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 576q0 91-35.5 174T765 893t-143 95.5t-174 35.5t-174-35.5T131 893T35.5 750T0 576q0-163 103.5-286.5T364 136L256 64L384 0h128l128 64l-108 72q157 30 260.5 153.5T896 576M448 256q-87 0-160.5 43T171 415.5T128 576t43 160.5T287.5 853T448 896t160.5-43T725 736.5T768 576t-43-160.5T608.5 299T448 256"></svg:path>`,
})
export class WhhRingIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRoadIcon],svg[whh-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M864 1024H544q-13 0-22.5-9.5T512 992v-32H384v32q0 13-9.5 22.5T352 1024H32q-13 0-22.5-9.5T0 992L192 32q0-13 9.5-22.5T224 0h128q13 0 22.5 9.5T384 32v32h128V32q0-13 9.5-22.5T544 0h128q13 0 22.5 9.5T704 32l192 960q0 13-9.5 22.5T864 1024M512 192H384v256h128zM384 576v256h128V576z"></svg:path>`,
})
export class WhhRoadIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRoadsignleftIcon],svg[whh-roadsignleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 512H576v448q0 26-18.5 45t-45.5 19t-45.5-19t-18.5-45V512H256q-15 0-23-8q-9-3-12-7L15 355Q0 340 0 319.5T15 284l206-142q4-4 14-7q7-7 21-7h14q18-1 37 0h141V64q0-26 18.5-45T512 0t45.5 19T576 64v64h384q26 0 45 19t19 45v256q0 27-19 45.5T960 512"></svg:path>`,
})
export class WhhRoadsignleftIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRoadsignrightIcon],svg[whh-roadsignright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1009.31 355l-206 142q-4 4-13 7q-7 8-22 8h-192v448q0 26-19 45t-45.5 19t-45-19t-18.5-45V512h-384q-27 0-45.5-18.5T.31 448V192q0-26 18.5-45t45.5-19h384V64q0-26 18.5-45t45-19t45.5 19t19 45v64h141q19-1 37 0h14q14 0 21 7q10 3 14 7l206 142q15 15 15 35.5t-15 35.5"></svg:path>`,
})
export class WhhRoadsignrightIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRoadtunnelIcon],svg[whh-roadtunnel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M736 640q-13 0-22.5-9.5T704 608V384q0-87-43-160.5T544.5 107T384 64t-160.5 43T107 223.5T64 384v224q0 13-9.5 22.5T32 640t-22.5-9.5T0 608V384q0-104 51.5-192.5t140-140T384 0t192.5 51.5t140 140T768 384v224q0 13-9.5 22.5T736 640m-576 0q-13 0-22.5-9.5T128 608V384q0-106 75-181t181-75t181 75t75 181v224q0 13-9.5 22.5T608 640h-32l96 384H96l96-384zm266 128h-84l-7 64h98zm22 192l-8-64H328l-8 64zm-99-256h70l-3-64h-64z"></svg:path>`,
})
export class WhhRoadtunnelIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRobocopIcon],svg[whh-robocop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 576h-10q-15 116-49 192q-36 80-97.5 139.5t-127.5 88t-129 28.5t-129-28t-128-87.5T128 768q-34-75-50-192H64q-26 0-45-18.5T0 512V320q0-27 19-45.5T64 256h9q29-110 145-183T483 0t262.5 72.5T888 256h8q26 0 45 18.5t19 45.5v192q0 27-19 45.5T896 576M183 736q14 32 26 55.5t29.5 50T277 882t43 14q27 0 55.5-16t55-32t49.5-16q22 0 49 16t55.5 32t55.5 16q39 0 76.5-48T782 736q28-63 40-160H142q14 97 41 160m617-352H160q-13 0-22.5 9.5T128 416t9.5 22.5T160 448h640q13 0 22.5-9.5T832 416t-9.5-22.5T800 384"></svg:path>`,
})
export class WhhRobocopIcon {
  readonly viewBox = input("0 0 960 1024")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRookIcon],svg[whh-rook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 1024H64q-26 0-45-18.5T0 960v-64q0-26 19-45t45-19h6q76-4 129-75t57-181q-27-8-45.5-28T192 512q0-14 20-35t44-29q-15-74-53.5-133T128 256q-26 0-45-18.5T64 192V64q0-26 19-45t45.5-19t45 19T192 64v32q0 13 9.5 22.5T224 128t22.5-9.5T256 96V64q0-26 19-45t45-19h128q27 0 45.5 19T512 64v32q0 13 9.5 22.5T544 128t22.5-9.5T576 96V64q0-26 19-45t45.5-19t45 19T704 64v128q0 27-18.5 45.5T640 256q-36 0-74.5 59T512 448q24 8 44 29t20 35q0 16-18.5 36T512 576q4 110 57 181t129 75h6q27 0 45.5 19t18.5 45v64q0 27-18.5 45.5T704 1024"></svg:path>`,
})
export class WhhRookIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRootIcon],svg[whh-root-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M961 128H622L319 977q-7 25-30 38.5t-49 6.5q-18-5-30-18t-15-30L3 463q-7-25 6.5-47.5t39-29T97 393t29 38l122 366L514 52q5-22 22.5-37T577 0h384q27 0 45.5 19t18.5 45.5t-18.5 45T961 128"></svg:path>`,
})
export class WhhRootIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRorschachIcon],svg[whh-rorschach-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1007.06 137h-109q-26 1-43.5 11t-36.5 29q-3 9-11 28t-11 29q-11 43-21 57q-9 12-34.5 20t-31.5 13q-13 10-29 36t-20 32q-6 7-9.5 10.5t-11.5 6t-19 1.5q-27-3-52-72t-20-135q1-9 10-16t20.5-11t22.5-13t15-21q5-19 3-25t-8.5-13.5t-7.5-12.5q-1-3 4.5-10t5.5-26q0-13 8-29.5T643.56 2t35.5 15q8 9 20.5 15.5t32.5 13.5t28 11q11 5 19 21q67 25 119 25q16 0 39-28t32-31q31-11 49 30q15 35 2 56q-4 7-13 7m-344 340q2-7 1-13.5t.5-12t6.5-6.5q11-2 34.5 9.5t30.5 27.5q6 15-18 46q-10 13-2 18.5t20-.5q15-7 34-26.5t34-32t28-9.5q22 5 46 25t36 51q9 22 9.5 53.5t-11.5 48.5q-16 17-58.5 20.5t-50.5 6.5q-22 10-36 25t-22 26t-18 14q-17 4-33 4.5t-25.5-.5t-28.5-4.5t-28-4.5q-32-4-45.5-32t-1.5-56q4-11 14-21t15-16t2-11t-21-4t-22-3q-14-19 2-58q9-20 33.5-30t47-16.5t27.5-18.5m-233 130q-3 5 2 11t15 16t14 21q12 28-1.5 56t-45.5 32q-9 1-28 4.5t-28.5 4.5t-25.5 0t-33-4q-10-3-18-14t-22-26t-36-25q-8-3-50.5-6.5t-57.5-20.5q-13-17-12.5-48.5t9.5-53.5q12-31 36-51t46-25q13-3 28 9.5t34 32t34 26.5q12 6 20 1t-2-19q-24-31-18-46q7-16 30.5-27.5t34.5-9.5q6 1 7 6.5t0 12t1 13.5q5 12 28 18t47 16.5t33 30.5q16 39 2 58q-3 4-21.5 3t-21.5 4m-24-197q-15 2-23-2.5t-17-15.5q-4-6-20-32t-29-36q-6-5-31.5-13t-34.5-20q-10-14-21-57q-3-10-11-29t-11-28q-19-19-36.5-29t-43.5-11h-109q-21 0-18-35q3-40 28-55q13-8 28-3q9 3 32 31t39 28q52 0 119-25q8-16 19-21q8-4 28-11t32.5-13.5t20.5-15.5q21-22 35.5-15t22.5 23.5t8 29.5q0 19 5.5 26t4.5 10q-1 6-7.5 13t-8.5 13t3 25q4 12 15 21t22.5 13.5t20.5 11t10 15.5q5 66-20 135t-52 72m-268.5-68q28.5 0 48.5 10t20 24.5t-20 24.5t-48.5 10t-48.5-10t-20-24.5t20-24.5t48.5-10m135.5 480q11-4 28 10t30 12q8-1 17.5-5.5t18.5-3.5q7 0 15 13t17.5 24.5t22.5 8.5q34-6 53 8q8 5-1.5 30.5t-28.5 49t-34.5 23t-25-7t-12-10t-14.5.5q-11 5-11 9.5t5.5 8t10.5 8t2 8.5q-4 9-21.5 13t-28.5 3q-19-1-47.5-24t-36.5-28q-29-15-26-105q0-13 11-22.5t21-13.5t29-9q4-1 6-1m331 59q10 2 18.5-4.5t13.5-15.5t11-17.5t12-8.5q9-1 18.5 3.5t17.5 5.5q13 2 30-12t28-10q2 0 6 1q19 5 29 9t21 13.5t11 22.5q3 90-26 105q-8 5-36.5 28t-47.5 24q-11 1-28.5-3.5t-21.5-12.5q-2-4 1-7.5t7.5-6t8-5.5t1.5-7t-11-8q-12-4-14.5-.5t-12 10t-25 7t-34.5-23t-28.5-49t-1.5-30.5q19-14 53-8m216-504.5q0-14.5 20-24.5t48.5-10t48.5 10t20 24.5t-20 24.5t-48.5 10t-48.5-10t-20-24.5"></svg:path>`,
})
export class WhhRorschachIcon {
  readonly viewBox = input("0 0 1027 1026")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRotateclockwiseIcon],svg[whh-rotateclockwise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.488 1024h-576q-27 0-45.5-19t-18.5-45V832q0-27 18.5-45.5t45.5-18.5h576q27 0 45.5 18.5t18.5 45.5v128q0 26-18.5 45t-45.5 19m-64-192h-448q-26 0-45 18.5t-19 45t19 45.5t45 19h448q27 0 45.5-19t18.5-45.5t-18.5-45t-45.5-18.5m-38-138q-11 10-26 10t-26-10l-155-200q-11-10-11-23t11-23h109q-22-84-90.5-138t-157.5-54h-64q-26 0-45-19t-19-45.5t19-45t45-18.5h64q142 0 248.5 91.5t129.5 228.5h123q11 10 11 23t-11 23zm-666 10h-128q-27 0-45.5-19t-18.5-45V64q0-27 18.5-45.5T64.488 0h128q26 0 45 18.5t19 45.5v576q0 27-18.5 45.5t-45.5 18.5"></svg:path>`,
})
export class WhhRotateclockwiseIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRotatecounterclockwiseIcon],svg[whh-rotatecounterclockwise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 704H832q-26 0-45-19t-19-45V64q0-26 19-45t45-19h128q27 0 45.5 19t18.5 45v576q0 27-18.5 45.5T960 704m-320 320H64q-26 0-45-19T0 960V832q0-27 19-45.5T64 768h576q27 0 45.5 18.5T704 832v128q0 26-18.5 45t-45.5 19m-64-192H128q-26 0-45 18.5T64 896t19 45.5t45 18.5h448q27 0 45.5-18.5T640 896t-18.5-45.5T576 832m0-576h-64q-89 0-157.5 54.5T264 448h109q11 10 11 23t-11 23L218 694q-11 10-26 10t-26-10L11 494Q0 484 0 471t11-23h123q23-137 129.5-228.5T512 128h64q27 0 45.5 18.5T640 192t-18.5 45.5T576 256"></svg:path>`,
})
export class WhhRotatecounterclockwiseIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRoubleIcon],svg[whh-rouble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M447 640H255v64h192q27 0 45.5 19t18.5 45.5t-18.5 45T447 832H255v128q0 27-18.5 45.5t-45 18.5t-45-18.5T128 960V832H64q-27 0-45.5-18.5T0 768.5T18.5 723T64 704h64v-64H64q-27 0-45.5-18.5T0 576.5T18.5 531T64 512h64V64q0-26 18.5-45T191 0h256q87 0 161 43t116.5 116.5T767 320t-42.5 160.5T608 597t-161 43m0-512H255v384h192q80 0 136-56.5t56-136T583 184t-136-56"></svg:path>`,
})
export class WhhRoubleIcon {
  readonly viewBox = input("0 0 767 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRoublealtIcon],svg[whh-roublealt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m96-896H384q-26 0-45 19t-19 45v256h-64q-26 0-45 19t-19 45.5t19 45t45 18.5h64v64h-64q-26 0-45 19t-19 45.5t19 45t45 18.5h64v64q0 27 18.5 45.5t45 18.5t45.5-18.5t19-45.5v-64h128q26 0 45-18.5t19-45t-19-45.5t-45-19H448v-64h160q93 0 158.5-65.5T832 352t-65.5-158.5T608 128m0 320H448V256h160q40 0 68 28t28 68t-28 68t-68 28"></svg:path>`,
})
export class WhhRoublealtIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRoublesquareIcon],svg[whh-roublesquare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-288-896h-224q-26 0-45 19t-19 45v256h-64q-26 0-45 19t-19 45.5t19 45t45 18.5h64v64h-64q-26 0-45 19t-19 45.5t19 45t45 18.5h64v64q0 27 18.5 45.5t45 18.5t45.5-18.5t19-45.5v-64h128q26 0 45-18.5t19-45t-19-45.5t-45-19h-128v-64h160q93 0 158.5-65.5t65.5-158.5t-65.5-158.5t-158.5-65.5m0 320h-160V256h160q40 0 68 28t28 68t-28 68t-68 28"></svg:path>`,
})
export class WhhRoublesquareIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRoundcubeIcon],svg[whh-roundcube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M736 1024L0 704V448l193-110q16-144 116-241T544 0q136 0 236.5 98T895 341l129 43v256zM544 64q-112 0-194.5 77.5T256 333q0 25 40 52t108 45t140 18t140-18t108-45t40-52q-11-114-93.5-191.5T544 64"></svg:path>`,
})
export class WhhRoundcubeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRoundrectangleIcon],svg[whh-roundrectangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768.694 1024h-512q-106 0-181-75t-75-181V256q0-106 75-181t181-75h512q106 0 181 75t75 181v512q0 106-75 181t-181 75m192-768q0-80-56-136t-136-56h-512q-80 0-136 56t-56 136v512q0 80 56 136t136 56h512q80 0 136-56t56-136z"></svg:path>`,
})
export class WhhRoundrectangleIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRouteIcon],svg[whh-route-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768.665 64q106 0 181-18.5t75-45.5v256H.665V0q0 27 75 45.5t181 18.5t181-18.5t75-45.5q0 27 75 45.5t181 18.5m-256 960q-94-27-168.5-65.5t-125-78.5t-88.5-97t-59.5-104t-36.5-116.5t-21.5-118T.665 320h1024q-6 76-12.5 124.5t-21.5 118t-36.5 116.5t-59.5 104t-88.5 97t-125 78.5t-168.5 65.5"></svg:path>`,
})
export class WhhRouteIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRouterIcon],svg[whh-router-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 1024H128q-53 0-90.5-37.5T0 896V768q0-53 37.5-90.5T128 640h128V430q-29-17-46.5-46T192 320q0-53 37.5-90.5T320 192t90.5 37.5T448 320q0 35-17.5 64T384 430v210h512q53 0 90.5 37.5T1024 768v128q0 53-37.5 90.5T896 1024M192.5 768q-26.5 0-45.5 19t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45t-18.5-45.5t-45-19m256 0q-26.5 0-45.5 19t-19 45.5t18.5 45T448 896t45.5-18.5t18.5-45t-18.5-45.5t-45-19m383.5 0H704q-27 0-45.5 19T640 832.5t18.5 45T704 896h128q26 0 45-18.5t19-45t-19-45.5t-45-19M576 320q-27 0-45.5-18.5T512 256q-19-56-73.5-92T320 128t-118.5 36t-73.5 92q0 27-19 45.5T64 320t-45-18.5T0 256q0-61 50.5-121.5t125-97.5T320 0t144.5 37t125 97.5T640 256q0 27-18.5 45.5T576 320"></svg:path>`,
})
export class WhhRouterIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRouteraltIcon],svg[whh-routeralt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.615 704h-128l182-660q4-15 16.5-30.5t25.5-12.5q15 3 24.5 14t7.5 23zM.615 38q-1-12 8-23t24-14q13-3 25.5 12.5t16.5 30.5l182 660h-128zm128 730h768q53 0 90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5h-768q-53 0-90.5-37.5T.615 896t37.5-90.5t90.5-37.5m639.5 192q26.5 0 45.5-18.5t19-45t-19-45.5t-45.5-19t-45 19t-18.5 45.5t18.5 45t45 18.5m-255.5 0q26 0 45-18.5t19-45t-19-45.5t-45.5-19t-45 19t-18.5 45.5t19 45t45 18.5m-255.5 0q26.5 0 45-18.5t18.5-45t-18.5-45.5t-45-19t-45.5 19t-19 45.5t19 45t45.5 18.5"></svg:path>`,
})
export class WhhRouteraltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRssIcon],svg[whh-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928.784 1024q-40 0-68-28t-28-68q0-150-58.5-286t-157-234.5t-234.5-157t-286-58.5q-40 0-68-28t-28-68t28-68t68-28q126 0 246.5 33.5t222 93t187.5 145.5t145.5 187.5t93 222t33.5 246.5q0 40-28 68t-68 28m-832-640q111 0 211.5 43t173.5 116t116 173.5t43 211.5q0 40-28 68t-68 28t-68-28t-28-68q0-151-100.5-251.5T96.784 576q-40 0-68-28t-28-68t28-68t68-28m32 384q53 0 90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5t-90.5-37.5T.784 896t37.5-90.5t90.5-37.5"></svg:path>`,
})
export class WhhRssIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRubberstampIcon],svg[whh-rubberstamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 833H64q-27 0-45.5-19T0 769v-64q0-27 18.5-45.5T64 641h346q38-49 38-128q0-73-28-133.5T345 286q-25-44-25-93q0-80 56-136.5T512 0t136 56.5T704 193q0 49-25 93q-47 33-75 93.5T576 513q0 79 38 128h346q27 0 45.5 18.5T1024 705v64q0 26-18.5 45T960 833m0 128q0 26-18.5 45t-45.5 19H128q-27 0-45.5-19T64 961v-64h896z"></svg:path>`,
})
export class WhhRubberstampIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRubyIcon],svg[whh-ruby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m192 1024l1-1q-88-4-138-54Q5 920 1 832H0V512h1q0-72 46.5-162T177 177T350 47.5T512 1V0h320v1q88 4 137 54q50 50 54 138l1-1v832zm768-64L736 736L448 960zM675 713L320 576l-54 376q95-19 202.5-81T675 713M64 864q2 5 8.5 19.5t12.5 27T96 928q29 29 53 33.5t77-3.5Q68 635 64 626zM548.5 91.5q-47.5-47.5-148-14t-195 128t-128 195t14 148t148 14t195-128t128-195t-14-148M713 675q95-99 157-206.5T951 266l-375 54zM926 96q-5-5-17-11t-27-12.5t-19-8.5H626l330 160q8-52 3.5-76T926 96"></svg:path>`,
})
export class WhhRubyIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRubyaltIcon],svg[whh-rubyalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 896L0 320L256 0h512l256 320zM736 64H288L96 320l416 480l416-480zM512 704V128h190l130 192z"></svg:path>`,
})
export class WhhRubyaltIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRudderIcon],svg[whh-rudder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 576h-70q-14 86-66 158l50 50q19 18 19 44.5T874 874t-45.5 19t-44.5-19l-50-50q-72 52-158 66v70q0 26-18.5 45t-45.5 19t-45.5-19t-18.5-45v-70q-86-14-158-66l-50 50q-18 19-44.5 19T150 874t-19-45.5t19-44.5l50-50q-52-72-66-158H64q-26 0-45-19T0 511.5t18.5-45T64 448h70q14-86 66-158l-50-50q-19-18-19-44.5t19-45.5t45.5-19t44.5 19l50 49q73-51 158-65V64q0-27 18.5-45.5T512 0t45.5 18.5T576 64v70q86 14 158 65l50-49q18-19 44.5-19t45.5 19t19 45.5t-19 44.5l-50 50q52 72 66 158h70q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19M576 826q58-12 112-48l-95-94q-1 0-7 3.5t-10 4.5zm-128 0V692q-4-1-10-4.5t-7-3.5l-95 94q54 36 112 48M246 688l94-94l-4-8l-5-10H199q12 58 47 112m0-352q-36 54-47 112h132l5-10l4-8zm202-138q-59 12-112 48l95 94q1 0 7-3.5t10-4.5zm64 250q-27 0-45.5 18.5t-18.5 45t18.5 45.5t45.5 19t45.5-19t18.5-45.5t-18.5-45T512 448m64-250v134q4 1 10 4.5t7 3.5l95-94q-53-36-112-48m202 138l-94 94l4 8l5 10h132q-12-59-47-112m-85 240l-5 10l-4 8l94 94q35-54 47-112z"></svg:path>`,
})
export class WhhRudderIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhRulerIcon],svg[whh-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1015.43 855l-160 160q-10 9-23 9t-22-9l-63-63l81-81q9-9 0-17l-17-18q-9-9-18 0l-81 81l-125-125l81-81q9-9 0-17l-17-18q-9-9-18 0l-81 81l-125-125l81-81q9-9 0-17l-17-18q-9-9-18 0l-81 81l-125-125l81-81q9-9 0-17l-17-18q-9-9-18 0l-81 81l-125-125l81-81q9-9 0-17l-17-18q-9-9-18 0l-81 81l-63-63q-9-9-9-22t9-23l160-160q10-9 23-9t22 9l801 801q9 9 9 22t-9 23"></svg:path>`,
})
export class WhhRulerIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSIcon],svg[whh-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704.5 320q-26.5 0-45.5-18.5T640 256q0-53-37.5-90.5T512 128H257q-53 0-90.5 37.5T129 256v64q0 53 37.5 90.5T257 448h255q106 0 181 75t75 181v64q0 106-75 181t-181 75H256q-106 0-181-75T0 768q0-26 18.5-45t45-19t45.5 19t19 45q0 53 37.5 90.5T256 896h256q53 0 90.5-37.5T640 768v-64q0-53-37.5-90.5T512 576H256q-106 0-180.5-75T1 320v-64Q1 150 76 75T257 0h255q106 0 181 75t75 181q0 27-18.5 45.5t-45 18.5"></svg:path>`,
})
export class WhhSIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSUpperCaseIcon],svg[whh-s-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704.5 320q-26.5 0-45.5-18.5T640 256q0-53-37.5-90.5T512 128H257q-53 0-90.5 37.5T129 256v64q0 53 37.5 90.5T257 448h255q106 0 181 75t75 181v64q0 106-75 181t-181 75H256q-106 0-181-75T0 768q0-26 18.5-45t45-19t45.5 19t19 45q0 53 37.5 90.5T256 896h256q53 0 90.5-37.5T640 768v-64q0-53-37.5-90.5T512 576H256q-106 0-180.5-75T1 320v-64Q1 150 76 75T257 0h255q106 0 181 75t75 181q0 27-18.5 45.5t-45 18.5"></svg:path>`,
})
export class WhhSUpperCaseIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSadIcon],svg[whh-sad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5M288 256q-40 0-68 37.5T192 384t28 90.5t68 37.5t68-37.5t28-90.5t-28-90.5t-68-37.5m448 0q-40 0-68 37.5T640 384t28 90.5t68 37.5t68-37.5t28-90.5t-28-90.5t-68-37.5m93 507q-22-58-107.5-90.5T512 640t-209.5 32.5T195 763l-3 5q0 13 9.5 22.5T224 800t22.5-9.5T256 768q53-41 102.5-52.5T512 704t153.5 11.5T768 768q0 13 9.5 22.5T800 800t22.5-9.5T832 768q-1-2-3-5"></svg:path>`,
})
export class WhhSadIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSafetygogglesIcon],svg[whh-safetygoggles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M800 568q-224 0-224-160q-2-8-4.5-13.5t-7.5-9t-8-5.5t-10.5-3t-10-1H488l-10 1l-10 3l-8 5.5l-7.5 9L448 408q0 160-224 160T0 408V184q0-27 18.5-45.5T64 120h896q27 0 45.5 18.5T1024 184v224q0 160-224 160m160-384H64v224q0 26 8.5 44T94 480t35.5 15.5t43 7T224 504t51-1.5t42.5-7t36-15.5t22-28t8.5-44q16-96 128-96t128 96q0 26 8.5 44t21.5 28t35.5 15.5t43 7T800 504t51-1.5t42.5-7t36-15.5t22-28t8.5-44z"></svg:path>`,
})
export class WhhSafetygogglesIcon {
  readonly viewBox = input("0 0 1024 614")
  readonly width = input("1.67em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSafetypinIcon],svg[whh-safetypin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M951.816 951q-73 73-175.5 73t-175.5-73l-527-527q-73-73-73-175.5t73-175.5t175.5-73t175.5 73l527 527q73 73 73 175.5t-73 175.5m-439-695q-26 0-70-1t-60-1t-38 4.5t-37 15.5q-21-29-21-70.5t-12-51.5q-25-25-60.5-25t-61 25.5t-25.5 61t25 60.5q12 11 31 11t43.5 2.5t46.5 19.5q-10 15-15 36t-5 37.5t1.5 59.5t1.5 72l256 264v-8q0-106 75-181t181-75h8zm256.5 320q-79.5 0-136 56.5t-56.5 136t56.5 135.5t136 56t135.5-56t56-135.5t-56-136t-135.5-56.5"></svg:path>`,
})
export class WhhSafetypinIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSaleIcon],svg[whh-sale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m896 512l128 128l-160 64l32 192l-192-32l-64 160l-128-128l-128 128l-64-160l-192 32l32-192L0 640l128-128L0 384l160-64l-32-192l192 32L384 0l128 128L640 0l64 160l192-32l-32 192l160 64zM352 256q-40 0-68 37.5T256 384t28 90.5t68 37.5t68-37.5t28-90.5t-28-90.5t-68-37.5m320 0h-32q-4 0-7.5 1.5T627 260t-5.5 5.5t-4.5 6t-4.5 8t-4.5 8.5L325 736q-7 12 3 22t24 10h32q4 0 6.5-.5t5.5-2.5t4.5-3.5t4-5.5t3.5-6t4-7t4-7l283-448q7-12-3-22t-24-10m0 256q-40 0-68 37.5T576 640t28 90.5t68 37.5t68-37.5t28-90.5t-28-90.5t-68-37.5m0 192q-13 0-22.5-19t-9.5-45.5t9.5-45T672 576t22.5 18.5t9.5 45t-9.5 45.5t-22.5 19M352 448q-13 0-22.5-19t-9.5-45.5t9.5-45T352 320t22.5 18.5t9.5 45t-9.5 45.5t-22.5 19"></svg:path>`,
})
export class WhhSaleIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSalealtIcon],svg[whh-salealt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M998 1023h-64q-14 0-25-9.5T895 991l-44-224H467l44 224q3 13-4.5 22.5T485 1023h-64q-13 0-24-9.5T383 991L193 32q-3-14 4.5-23T219 0h586q12 0 19 7.5t7 18.5q0 1 1 2.5t1 2.5l190 960q3 13-4.5 22.5T998 1023M576 319q-49 0-88.5-18.5T448 255q0-26 25.5-45t70.5-19q48 0 60 4t36 28q4 5 9 14t10 13.5t13 4.5q14 0 24.5-9.5T704 223q-12-49-36.5-68.5T576 127q0-17-.5-25.5t-3.5-19t-10-15t-18-4.5t-18 5t-10 16t-3.5 19.5t-.5 23.5q-71 9-99.5 34.5T384 255t52.5 98T576 383q49 0 88.5 19t39.5 45t-25.5 45t-70.5 19q-48 0-60-4t-36-28q-4-4-9-13t-10-14t-13-5q-14 0-24.5 10t-7.5 22q12 50 36.5 69.5T576 575q0 18 .5 26t3.5 18.5t9.5 15t18 4.5t18.5-5t10-16t3.5-19t.5-24q71-8 99.5-33.5T768 447q0-67-52.5-97.5T576 319M173 767l-44 224q-3 13-14 22.5t-25 9.5H26q-13 0-20.5-9.5T1 991l159-803l115 579zm500 64l-32 160q-3 13-14 22.5t-24 9.5h-28l-37-159l7-33z"></svg:path>`,
})
export class WhhSalealtIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSatelliteIcon],svg[whh-satellite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M913.857 377q-7 7-17 7q0 10-7 17l-104 104q-7 7-17 7t-18-7l-90-91l-33 33l257 257q24 24-3 70l138 65q13 12-5 47.5t-55 72.5t-72.5 55t-47.5 5l-65-138q-46 27-70 3l-257-257l-33 33l91 90q7 8 7 18t-7 17l-104 104q-7 7-17 7q0 10-7 17l-104 104q-7 7-17 7t-17-7l-91-91l-23 23q-10 10-24.5 10t-25-10t-10.5-25t11-25l22-23l-91-91q-7-7-7-17t7-18l104-103q7-7 17-7q0-10 7-17l104-104q7-7 17-7t17 7l92 91l32-32l-193-194q-33-32 27-103l-96-96q-19 8-38 8q-40 0-68-28.5t-28-68t28-67.5t67.5-28t67.5 28t28 68q0 19-7 38l96 96q71-60 103-27l193 193l33-32l-91-92q-7-7-7-17t7-17l103-104q8-7 18-7q0-10 7-17l103-104q8-7 18-7t17 7l91 91l24-23q10-11 24.5-11t25 10.5t10.5 25t-10 24.5l-24 24l91 91q7 7 7 17t-7 17z"></svg:path>`,
})
export class WhhSatelliteIcon {
  readonly viewBox = input("0 0 1026 1025")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSaurusIcon],svg[whh-saurus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m864 288l-77 179l-147-147l-77 179l-115-115l-103 154l-121-122l-94 169q-58-99-94-203T0 192q0-61 38-106t95-65.5T256 0q102 0 229 12.5t250 35t206 61t83 83.5q0 108-29 227zM233 521l119 119l102-154l122 122l93-163l131 131l93-163l81 81q-46 146-110 210q-41 41-135.5 71.5t-185 43.5T384 832q-43 0-101.5-52.5T166 642z"></svg:path>`,
})
export class WhhSaurusIcon {
  readonly viewBox = input("0 0 1024 832")
  readonly width = input("1.24em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSavetodriveIcon],svg[whh-savetodrive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 1024H128q-53 0-90.5-37.5T0 896V736q0-33 28.5-210t68-351.5T160 0h288v256H283q-18 0-24.5 20t4.5 31l224 194q11 11 25.5 11t25.5-11l223-194q11-11 4.5-31T741 256H577V0h287q24 0 63.5 174.5t68 351.5t28.5 210v160q0 53-37.5 90.5T896 1024m64-256q0-26-18.5-45T896 704H128q-27 0-45.5 19T64 768v128q0 27 18.5 45.5T128 960h768q27 0 45.5-18.5T960 896zM191.5 896q-26.5 0-45-18.5t-18.5-45t18.5-45.5t45-19t45.5 19t19 45.5t-19 45t-45.5 18.5"></svg:path>`,
})
export class WhhSavetodriveIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhScalesIcon],svg[whh-scales-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 704q0 18-15 27q-20 17-59 27t-86 10t-86-10t-59-27q-15-10-15-27q0-6 1-8l116-568H576v769q111 5 183.5 22.5T832 960q0 26-18.5 45t-45.5 19H256q-27 0-45.5-19T192 960q0-23 72.5-40.5T448 897V128H203l116 568q1 2 1 8q0 18-15 27q-20 17-59 27t-86 10t-86-10t-59-27Q0 721 0 704q0-7 1-8L125 88q7-22 32-23l1-.5l2-.5h288q0-27 18.5-45.5T512 0t45.5 18.5T576 64h288q1 0 3 1q25 1 32 23l124 608q1 2 1 8M79 649q38-9 81-9t81 9l-81-396zm785-396l-81 396q38-9 81-9t81 9z"></svg:path>`,
})
export class WhhScalesIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhScissorsaltIcon],svg[whh-scissorsalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m436.004 512l588 512q-56 0-181.5-61.5T587.004 816t-210-156q7 22 7 44q0 54-25 113t-71 101t-96 42q-80 0-136-56t-56-136t56-136t136-56q4 0 21 1q6-32 34-73q-15-31-21-57q-18 1-34 1q-80 0-136-56t-56-135.5t56-136t136-56.5q50 0 96 42t71 101t25 113q0 26-10 50q146-120 358.5-245t291.5-125zm-244-384q-53 0-90.5 37.5t-37.5 90.5t37.5 90.5t90.5 37.5h17q24 0 36-.5t29.5-3.5t25.5-9.5t14-19t6-31.5q0-36-16.5-80.5t-47.5-78t-64-33.5m0 512q-53 0-90.5 37.5t-37.5 90.5t37.5 90.5t90.5 37.5q33 0 64-33.5t47.5-78t16.5-80.5q0-19-6-31.5t-14-19t-25.5-9.5t-29.5-3.5t-36-.5z"></svg:path>`,
})
export class WhhScissorsaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhScopeIcon],svg[whh-scope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m64-891v125q0 26-18.5 45T512 322t-45.5-19t-18.5-45V133q-120 20-207 107T134 448h122q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19H134q20 120 107 207t207 107V768q0-26 18.5-44.5T512 705t45.5 18.5T576 768v122q120-20 207-107t107-207H767q-26 0-44.5-19T704 511.5t18.5-45T767 448h123q-20-121-107-208T576 133"></svg:path>`,
})
export class WhhScopeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhScopealtIcon],svg[whh-scopealt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m64-101q134-21 230-117t117-230H792q-18 81-77 139.5T576 793zm0-475h117q-15-41-45.5-71.5T576 331zm117 128H576v116q41-14 71.5-45t45.5-71m-245 0H331q15 40 45.5 71t71.5 45zm0 347V793q-81-19-139.5-77.5T232 576H101q21 134 117 230t230 117m0-822q-134 21-230 117T101 448h131q18-81 76.5-140T448 231zM331 448h117V331q-41 15-71.5 45.5T331 448m245-347v130q80 18 139 77t77 140h131q-21-134-117-230T576 101"></svg:path>`,
})
export class WhhScopealtIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhScreenshotIcon],svg[whh-screenshot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.428 832h-128v128q0 27-18.5 45.5t-45.5 18.5t-45.5-18.5t-18.5-45.5V832h-128q-26 0-45-18.5t-19-45t19-45.5t45-19h128V576q0-26 19-45t45-19t45 19t19 45v128h128q26 0 45 19t19 45.5t-19 45t-45 18.5m-160-448h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m0-192h-64q-13 0-22.5-9.5t-9.5-22.5t-9.5-22.5t-22.5-9.5t-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h32q53 0 90.5 37.5t37.5 90.5v32q0 13-9.5 22.5t-22.5 9.5m-256-64h-64q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-192 704h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m0-704h-64q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-192 704h-32q-53 0-90.5-37.5T.428 704v-32q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5t9.5 22.5t22.5 9.5t22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m0-704q-13 0-22.5 9.5t-9.5 22.5t-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5T.428 160v-32q0-53 37.5-90.5t90.5-37.5h32q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-128 128h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5T.428 352v-64q0-13 9.5-22.5t22.5-9.5m0 192h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5T.428 544v-64q0-13 9.5-22.5t22.5-9.5"></svg:path>`,
})
export class WhhScreenshotIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhScrewIcon],svg[whh-screw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 256h-64l-64 64l-192-64H192l384 128l64 64l-64 64l-384-128l-64-64l64-64H64q-26 0-45-19T0 192V64q0-27 19-45.5T64 0h640q27 0 45.5 18.5T768 64v128q0 26-18.5 45T704 256M576 576l64 64l-64 64l-384-128l-64-64l64-64zm0 192l64 64l-64 64l-384-128l-64-64l64-64zm0 192l-64 64H384l-192-64l-64-64l64-64z"></svg:path>`,
})
export class WhhScrewIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhScrewdriverIcon],svg[whh-screwdriver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M978 978.5q-46 45.5-110.5 45.5T757 978l-85-82l-96-96q0-39-28-67.5T480 704l-7-7q-47-47-4-91l47-47l-303-303H96L0 64L64 0l192 96v117l303 303l47-46q43-44 91 4l7 7q1 40 29 67.5t67 27.5l96 96l82 85q46 46 46 111t-46 110.5"></svg:path>`,
})
export class WhhScrewdriverIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhScrewdriveraltIcon],svg[whh-screwdriveralt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M948.5 948.5q-75.5 75.5-183 75.5T583 948L480 845q-1-70-50.5-120T309 672q-16-20-21-42v-35q7-26 32-51l224-224q25-25 51-32h35q21 5 42 21q2 71 52.5 120.5T845 480l103 103q76 75 76 182.5t-75.5 183m-427-235q-9.5 9.5-9.5 23t10 23.5l222 222q9 10 23 10t23.5-9.5T800 959t-10-23L568 714q-10-10-23.5-10t-23 9.5M664 618q-10-10-23.5-10t-23 9.5t-9.5 23t10 23.5l254 254q9 10 23 10t23.5-9.5T928 895t-10-23zm96-96q-10-10-23.5-10t-23 9.5t-9.5 23t10 23.5l222 222q9 10 23 10t23.5-9.5T992 767t-10-23zm-408-74L192 288H96L0 96L96 0l192 96v96l160 160z"></svg:path>`,
})
export class WhhScrewdriveraltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhScriptIcon],svg[whh-script-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.77 1024q-39-25-51.5-68.5T832.77 843v-69q0-29 19-49.5t45-20.5h64q27 0 45.5 20.5t18.5 49.5v69q0 53-38 100.5t-90 80.5m-96 0h-608q-67 0-127.5-57.5T1.77 832q0-49 22.5-111t50-110t69.5-118.5t62-108.5h371q53 0 90.5-37.5t37.5-90.5v-64q0-39 34.5-85.5t80-76.5t77.5-30q46 0 85.5 63t42.5 129q0 54-26.5 121t-64 130.5t-75 125.5t-64 123.5t-26.5 107.5q5 106 32 224m-160-832v64q0 26-18.5 45t-45.5 19h-512q-26 0-45-19t-19-45v-64q0-51 34-96t85.5-70.5T224.77 0h544q-13 0-34.5 15.5T691.77 56t-36 62t-15 74"></svg:path>`,
})
export class WhhScriptIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhScriptaltIcon],svg[whh-scriptalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768.694 1024h-512q-45 0-75-29t-41.5-70.5t-11.5-92.5V320h-64q-26 0-45-18.5t-19-45.5q0-106 75-181t181-75h512q48 0 88 40t40 88v576h64q27 0 45.5 19t18.5 45q0 106-75 181t-181 75m-640-910q-64 58-64 142h64zm704 54q0-50-27.5-77t-68.5-27h-544v792q0 75 87 96q34-15 59-46.5t37-73.5h-87q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h96q0-26 19-45t45-19h384zm-384 600q0 111-72 192h392q80 0 136-56t56-136zm-192-160q0-13 9.5-22.5t22.5-9.5h448q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-448q-13 0-22.5-9.5t-9.5-22.5m480-160h-448q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h448q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m0-192h-448q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h448q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5"></svg:path>`,
})
export class WhhScriptaltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSdIcon],svg[whh-sd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 641v256q0 53-37.5 90.5T768 1025H128q-53 0-90.5-37.5T0 897V641q26 0 45-18.5t19-45T45 532T0 513V257q0-28 20-48L209 20q21-21 53-19h570q26 0 45 19t19 45v448q-27 0-45.5 19T832 577.5t18.5 45T896 641M192 225q0-13-9.5-22.5T160 193t-22.5 9.5T128 225v128q0 13 9.5 22.5T160 385t22.5-9.5T192 353zm128-64q0-13-9.5-22.5T288 129t-22.5 9.5T256 161v128q0 14 9.5 23t22.5 9t22.5-9t9.5-23zm128 0q0-13-9.5-22.5T416 129t-22.5 9.5T384 161v128q0 14 9.5 23t22.5 9t22.5-9t9.5-23zm128 0q0-13-9.5-22.5T544 129t-22.5 9.5T512 161v128q0 14 9.5 23t22.5 9t22.5-9t9.5-23zm128 0q0-13-9.5-22.5T672 129t-22.5 9.5T640 161v128q0 14 9.5 23t22.5 9t22.5-9t9.5-23zm128 0q0-13-9.5-22.5T800 129t-22.5 9.5T768 161v128q0 14 9.5 23t22.5 9t22.5-9t9.5-23z"></svg:path>`,
})
export class WhhSdIcon {
  readonly viewBox = input("0 0 896 1025")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSdvideoIcon],svg[whh-sdvideo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 768H128q-53 0-90.5-37.5T0 640V128q0-53 37.5-90.5T128 0h768q53 0 90.5 37.5T1024 128v512q0 53-37.5 90.5T896 768M224 256h220q-13-55-66-91.5T256 128q-80 0-136 47T64 288t56 113t136 47h32q13 0 22.5 9.5T320 480t-9.5 22.5T288 512H68q13 55 66 91.5T256 640q80 0 136-47t56-113t-56-113t-136-47h-32q-13 0-22.5-9.5T192 288t9.5-22.5T224 256m736 64q0-80-56-136t-136-56H608q-13 0-22.5 9.5T576 160v448q0 13 9.5 22.5T608 640h160q80 0 136-56t56-136zM768 512h-64V256h64q26 0 45 18.5t19 45.5v128q0 27-18.5 45.5T768 512"></svg:path>`,
})
export class WhhSdvideoIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSeaIcon],svg[whh-sea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.684 526q-53-18-118-15t-125.5 20.5t-130 39t-132 40.5t-132.5 25.5t-130-5.5q-54-11-91-35.5t-37-52.5t38-42t90-4q43 19 103 16t121-20.5t133-39t139-41t139-26t133 5.5q54 11 91 35.5t37 51.5q0 30-39.5 46t-88.5 1m0-384q-53-18-118-15t-125.5 20.5t-130 39t-132 40.5t-132.5 25.5t-130-5.5q-54-11-91-35.5t-37-52.5t38-42t90-4q43 19 103 16t121-20.5t133-39t139-41t139-26t133 5.5q54 11 91 35.5t37 51.5q0 30-39.5 46t-88.5 1m-768 739q43 19 103 16t121-20.5t133-39t139-41t139-26t133 5.5q54 11 91 35.5t37 51.5q0 30-39.5 46t-88.5 1q-53-18-118-15t-125.5 20.5t-130 39t-132 40.5t-132.5 25.5t-130-5.5q-54-11-91-35.5t-37-52.5t38-42t90-4"></svg:path>`,
})
export class WhhSeaIcon {
  readonly viewBox = input("0 0 1025 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSeaaltIcon],svg[whh-seaalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.77 960q-52 0-93-26t-67-70q-36-32-80-32t-80 32q-25 43-74 69.5t-102 26.5t-102-26.5t-74-69.5q-36-32-80-32t-80 32q-19 34-64 60V824q61-56 144-56q53 0 102 26.5t74 69.5q36 32 80 32t80-32q25-43 74-69.5t102-26.5t102 26.5t74 69.5q2 2 8.5 8t8.5 7.5t7 5.5t8.5 5t8.5 3t10.5 2.5t12.5.5q25 0 52.5-9t43.5-23h32v60q-62 36-128 36m-160-352q-36-32-80-32t-80 32q-25 43-74 69.5t-102 26.5t-102-26.5t-74-69.5q-36-32-80-32t-80 32q-19 34-64 60V568q61-56 144-56q53 0 102 26.5t74 69.5q36 32 80 32t80-32q25-43 74-69.5t102-26.5t102 26.5t74 69.5q3 2 9 7.5t8 7.5t7 6t8.5 5t8.5 3t10.5 2.5t12.5.5q25 0 52.5-9t43.5-23h32v60q-62 36-128 36q-52 0-93-25.5t-67-70.5m0-256q-36-32-80-32t-80 32q-25 43-74 69.5t-102 26.5t-102-26.5t-74-69.5q-36-32-80-32t-80 32q-19 34-64 60V312q61-56 144-56q53 0 102 26.5t74 69.5q36 32 80 32t80-32q25-43 74-69.5t102-26.5t102 26.5t74 69.5q2 2 8.5 8t8.5 7.5t7 5.5t8.5 5t8.5 3t10.5 2.5t12.5.5q25 0 52.5-9t43.5-23h32v60q-62 36-128 36q-52 0-93-25.5t-67-70.5m0-256q-36-32-80-32t-80 32q-25 43-74 69.5t-102 26.5t-102-26.5t-74-69.5q-36-32-80-32t-80 32q-19 34-64 60V56q61-56 144-56q53 0 102 26.5t74 69.5q36 32 80 32t80-32q25-43 74-69.5t102-26.5t102 26.5t74 69.5q3 2 9 7.5t8 7.5t7 6t8.5 5t8.5 3t10.5 2.5t12.5.5q25 0 52.5-9t43.5-23h32v60q-62 36-128 36q-52 0-93-25.5t-67-70.5"></svg:path>`,
})
export class WhhSeaaltIcon {
  readonly viewBox = input("0 0 1025 960")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSearchdocumentIcon],svg[whh-searchdocument-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832.27 1024h-768q-26 0-45-18.5T.27 960V65q0-27 19-45.5t45-18.5h448v352q0 13 9.5 22.5t22.5 9.5h352v575q0 27-18.5 45.5t-45.5 18.5m-261-185l-92-92q33-48 33-107q0-80-56-136t-135.5-56t-136 56t-56.5 136t56.5 136t135.5 56q59 0 107-33l92 92q5 5 12.5 5t13.5-5l26-26q5-6 5-13.5t-5-12.5m-251-71q-53 0-90.5-37.5t-37.5-90.5t37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5m256-768q26 0 44 18l257 257q19 19 19 46h-320z"></svg:path>`,
})
export class WhhSearchdocumentIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSearchfolderIcon],svg[whh-searchfolder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.38 896h-768q-53 0-90.5-37.5T.38 768V256q0-26 19-45t45-19h960v576q0 53-37.5 90.5t-90.5 37.5m-198-185l-91-92q33-48 33-107q0-79-56-135.5t-136-56.5t-136 56.5t-56 136t56 135.5t136 56q59 0 107-33l92 92q5 5 12.5 5t13.5-5l25-26q6-6 6-13.5t-6-12.5m-250-71q-53 0-90.5-37.5t-37.5-90.5t37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5m142-532q7-19 28-31.5t44-12.5h240q24 0 45 12.5t29 31.5l48 84h-480zm-544-64q7-19 28-31.5t44-12.5h240q24 0 45 12.5t29 31.5l48 84H.38z"></svg:path>`,
})
export class WhhSearchfolderIcon {
  readonly viewBox = input("0 0 1025 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSecurityIcon],svg[whh-security-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512.278 1024q-76-38-138.5-76t-111.5-80.5t-86.5-78t-65-86t-46.5-86t-31-97t-19-99t-10-111.5t-3.5-116t-.5-130q244-64 512-64q267 0 512 64q0 88-.5 130.5t-3.5 116t-10 111.5t-19 99t-31 96.5t-46.5 86t-65 86t-86.5 78t-111.5 80.5t-138.5 76m-384-850q0 89 1 131.5t8 112.5t21.5 107t41.5 90t68 89.5t102 78.5t142 81q81-39 142-81t102-78.5t68-89.5t41.5-90t21.5-107t8-112.5t1-131.5q-183-46-384-46t-384 46"></svg:path>`,
})
export class WhhSecurityIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSecurityaltIcon],svg[whh-securityalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512.95 1024q-84-42-152-89t-119-90t-89.5-102t-64-102.5T45.95 526t-26-116.5T6.45 279t-5-133T.95 0q0 26 75 45t181 19t181-19t75-45q0 26 75 45t181 19t181-19t75-45q0 98-.5 146t-5 133t-13.5 130.5t-26 116.5t-42.5 114.5t-64 102.5t-89.5 102t-119 90t-152 89m0-896q0 26-56.5 45t-135.5 19q-54 0-107-9t-85-24q0 79 2 127t9.5 114.5t22.5 109.5t43 97t68.5 94t100.5 83t138 80zm0-128"></svg:path>`,
})
export class WhhSecurityaltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSelectionaddIcon],svg[whh-selectionadd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-32q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5t22.5-9.5t9.5-22.5t9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v32q0 53-37.5 90.5t-90.5 37.5m96-320h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m0-256h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m0-256h-64q-13 0-22.5-9.5t-9.5-22.5t-9.5-22.5t-22.5-9.5t-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h32q53 0 90.5 37.5t37.5 90.5v32q0 13-9.5 22.5t-22.5 9.5m-288 384h-128v128q0 26-18.5 45t-45.5 19t-45.5-19t-18.5-45V576h-128q-27 0-45.5-19t-18.5-45.5t18.5-45t45.5-18.5h128V320q0-27 18.5-45.5t45.5-18.5t45.5 18.5t18.5 45.5v128h128q26 0 45 18.5t19 45t-18.5 45.5t-45.5 19m-32-448h-64q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-256 0h-64q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-256 896h-32q-53 0-90.5-37.5T.428 896v-32q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5t9.5 22.5t22.5 9.5t22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m0-896q-13 0-22.5 9.5t-9.5 22.5t-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5T.428 160v-32q0-53 37.5-90.5t90.5-37.5h32q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-128 192h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5T.428 416v-64q0-13 9.5-22.5t22.5-9.5m0 256h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5T.428 672v-64q0-13 9.5-22.5t22.5-9.5m320 320h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5m256 0h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5"></svg:path>`,
})
export class WhhSelectionaddIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSelectionintersectIcon],svg[whh-selectionintersect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-32q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5t22.5-9.5t9.5-22.5t9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v32q0 53-37.5 90.5t-90.5 37.5m96-320h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m0-256h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m0-256h-64q-13 0-22.5-9.5t-9.5-22.5t-9.5-22.5t-22.5-9.5t-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h32q53 0 90.5 37.5t37.5 90.5v32q0 13-9.5 22.5t-22.5 9.5m-320 832h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m0-896h-64q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-256 0h-64q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m8 209l88 88l87-87q18-18 43.5-18t43.5 18t18 43.5t-18 43.5l-87 87l87 87q18 18 18 43.5t-18 43.5t-43.5 18t-43.5-18l-87-87l-87 87q-18 18-43.5 18t-43.5-18t-18-43.5t18-43.5l87-87l-88-88q-18-18-18-43.5t18-43.5t43.5-18t43.5 18m-264 687h-32q-53 0-90.5-37.5T.428 896v-32q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5t9.5 22.5t22.5 9.5t22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m0-896q-13 0-22.5 9.5t-9.5 22.5t-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5T.428 160v-32q0-53 37.5-90.5t90.5-37.5h32q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-128 192h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5T.428 416v-64q0-13 9.5-22.5t22.5-9.5m0 256h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5T.428 672v-64q0-13 9.5-22.5t22.5-9.5m320 320h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5"></svg:path>`,
})
export class WhhSelectionintersectIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSelectionremoveIcon],svg[whh-selectionremove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-32q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5t22.5-9.5t9.5-22.5t9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v32q0 53-37.5 90.5t-90.5 37.5m96-320h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m0-256h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m0-256h-64q-13 0-22.5-9.5t-9.5-22.5t-9.5-22.5t-22.5-9.5t-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h32q53 0 90.5 37.5t37.5 90.5v32q0 13-9.5 22.5t-22.5 9.5m-288 384h-384q-27 0-45.5-19t-18.5-45.5t18.5-45t45.5-18.5h384q26 0 45 18.5t19 45.5t-18.5 45.5t-45.5 18.5m-32-448h-64q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-256 0h-64q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-256 896h-32q-53 0-90.5-37.5T.428 896v-32q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5t9.5 22.5t22.5 9.5t22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m0-896q-13 0-22.5 9.5t-9.5 22.5t-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5T.428 160v-32q0-53 37.5-90.5t90.5-37.5h32q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-128 192h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5T.428 416v-64q0-13 9.5-22.5t22.5-9.5m0 256h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5T.428 672v-64q0-13 9.5-22.5t22.5-9.5m320 320h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5m256 0h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5"></svg:path>`,
})
export class WhhSelectionremoveIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSelectionsymbolIcon],svg[whh-selectionsymbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M453 709q-14 15-32 25q27 46 27 98q0 80-56 136t-136 56t-136-56t-56-136q0-22 7-48l121 48q0 26 18.5 45t45 19t45.5-18.5t19-45.5q0-28-16.5-45t-52-38t-59.5-45L64 576q-31-31-47.5-63.5T0 448q0-77 58-134q14-14 32-26q-26-44-26-96q0-80 56-136T256 0t136 56t56 136q0 22-7 48l-121-48q0-27-19-45.5T255.5 128t-45 18.5T192 192q0 28 16.5 45t52.5 38.5t59 44.5l128 128q35 35 49.5 61.5T512 576q0 74-59 133m-89-183L241 403q-20-20-47.5-20t-47 19.5t-19.5 47t20 47.5l123 123q20 20 47.5 20t46.5-19.5t19-47t-19-47.5"></svg:path>`,
})
export class WhhSelectionsymbolIcon {
  readonly viewBox = input("0 0 512 1024")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSendbackwardIcon],svg[whh-sendbackward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.193 1024h-512q-26 0-45-18.5t-19-45.5V640h-320q-27 0-45.5-18.5T.193 576V64q0-26 18.5-45t45.5-19h512q26 0 45 19t19 45v320h320q26 0 45 19t19 45v512q0 27-19 45.5t-45 18.5m0-576h-512v512h512z"></svg:path>`,
})
export class WhhSendbackwardIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSendtobackIcon],svg[whh-sendtoback-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.193 1024h-384q-27 0-45.5-18.5t-18.5-45.5V832h-256q-27 0-45.5-18.5t-18.5-45.5V512h-128q-27 0-45.5-18.5T.193 448V64q0-26 18.5-45t45.5-19h384q26 0 45 19t19 45v128h256q26 0 45 19t19 45v256h128q26 0 45 19t19 45v384q0 27-19 45.5t-45 18.5m-512-960h-384v384h384zm512 512h-384v384h384z"></svg:path>`,
})
export class WhhSendtobackIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSeoIcon],svg[whh-seo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1014.86 967l-47 48q-10 9-24 9t-24-9l-151-152q-60 34-128 34q-106 0-181-75t-75-181t75-181t181-75t181 75t75 181q0 68-34 127l152 152q10 10 10 23.5t-10 23.5m-373.5-518q-79.5 0-136 56t-56.5 135.5t56.5 136t136 56.5t135.5-56.5t56-136t-56-135.5t-135.5-56m63.5-122v-6q0-27 19-45.5t45-18.5h128q27 0 46 18.5t19 45.5v320h-1q0-115-72.5-203.5T704.86 327m-320 122V193q0-27 19-45.5t45-18.5h128q27 0 45.5 18.5t18.5 45.5v128q-77 0-144 34.5t-112 93.5m0 383q45 60 112 94.5t144 34.5h64q0 26-18.5 45t-45.5 19h-576q-26 0-45-19t-19-45.5t18.5-45t45.5-18.5V64q0-26 19-45t45-19h128q27 0 45.5 19t18.5 45v833h64z"></svg:path>`,
})
export class WhhSeoIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhServerIcon],svg[whh-server-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 1024H64q-26 0-45-18.5T0 960V64q0-27 19-45.5T64 0h512q27 0 45.5 18.5T640 64v896q0 27-18.5 45.5T576 1024M320.5 896q26.5 0 45-18.5t18.5-45t-18.5-45.5t-45-19t-45.5 19t-19 45.5t19 45t45.5 18.5M576 96q0-13-9.5-22.5T544 64H96q-13 0-22.5 9.5T64 96v64q0 13 9.5 22.5T96 192h448q13 0 22.5-9.5T576 160zm0 192q0-13-9.5-22.5T544 256H96q-13 0-22.5 9.5T64 288v64q0 13 9.5 22.5T96 384h448q13 0 22.5-9.5T576 352zm0 192q0-13-9.5-22.5T544 448H96q-13 0-22.5 9.5T64 480v64q0 13 9.5 22.5T96 576h448q13 0 22.5-9.5T576 544z"></svg:path>`,
})
export class WhhServerIcon {
  readonly viewBox = input("0 0 640 1024")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhServersIcon],svg[whh-servers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.193 1024h-320q-27 0-45.5-19t-18.5-45V64q0-26 18.5-45t45.5-19h320q26 0 45 19t19 45v896q0 27-18.5 45.5t-45.5 18.5m-320-191.5q0 26.5 18.5 45t45 18.5t45.5-18.5t19-45t-19-45.5t-45-19t-45 19t-19 45.5m320-736.5q0-13-9.5-22.5t-22.5-9.5h-256q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h256q13 0 22.5-9.5t9.5-22.5zm0 192q0-13-9.5-22.5t-22.5-9.5h-256q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h256q13 0 22.5-9.5t9.5-22.5zm0 192q0-13-9.5-22.5t-22.5-9.5h-256q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h256q13 0 22.5-9.5t9.5-22.5zm-576 544h-320q-27 0-45.5-19t-18.5-45V64q0-26 18.5-45t45.5-19h320q27 0 45.5 19t18.5 45v896q0 27-18.5 45.5t-45.5 18.5m-320-191.5q0 26.5 18.5 45t45.5 18.5t45.5-18.5t18.5-45t-18.5-45.5t-45-19t-45.5 19t-19 45.5m320-736.5q0-13-9.5-22.5t-22.5-9.5h-256q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h256q13 0 22.5-9.5t9.5-22.5zm0 192q0-13-9.5-22.5t-22.5-9.5h-256q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h256q13 0 22.5-9.5t9.5-22.5zm0 192q0-13-9.5-22.5t-22.5-9.5h-256q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h256q13 0 22.5-9.5t9.5-22.5z"></svg:path>`,
})
export class WhhServersIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSettingsandroidIcon],svg[whh-settingsandroid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.305 576h-320q0 26-19 45t-45 19h-128q-27 0-45.5-19t-18.5-45h-320q-27 0-45.5-19t-18.5-45.5t18.5-45t45.5-18.5h320q0-27 18.5-45.5t45.5-18.5h128q27 0 45.5 18.5t18.5 45.5h320q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19m-384-128h-128v128h128zm384-256h-64q0 26-19 45t-45 19h-128q-27 0-45.5-19t-18.5-45h-576q-27 0-45.5-19t-18.5-45.5t18.5-45t45.5-18.5h576q0-27 18.5-45.5t45.5-18.5h128q27 0 45.5 18.5t18.5 45.5h64q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19m-128-128h-128v128h128zm-768 768h64q0-27 18.5-45.5t45.5-18.5h128q26 0 45 18.5t19 45.5h576q27 0 45.5 18.5t18.5 45t-19 45.5t-45 19h-576q0 27-19 45.5t-45 18.5h-128q-27 0-45.5-19t-18.5-45h-64q-27 0-45.5-19t-18.5-45.5t18.5-45t45.5-18.5m128 128h128V832h-128z"></svg:path>`,
})
export class WhhSettingsandroidIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSextantIcon],svg[whh-sextant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 832q-192 192-448 192T64 832q-7-7-22.5-20.5t-22-20.5t-13-21.5T0 736q0-40 28-68t68-28q15 0 32 6l261-262H99q-8 0-14.5-2.5t-10-9.5t-6-13t-3.5-18.5t-1-20.5v-39q0-24 .5-36t3.5-26.5T78.5 198t20.5-6h302q-17-30-17-64q0-53 37.5-90.5T512 0t90.5 37.5T640 128q0 34-17 64h209q6 0 11 1.5t8 5t5.5 6.5t4 9.5T863 226t1 14v96l-1 14l-2.5 11.5l-4 9.5l-5.5 6.5l-8 5l-11 1.5H635l261 262q17-6 32-6q40 0 68 28t28 68q0 19-6.5 33.5t-13 21.5t-22 20.5T960 832M448 507L300 655q65 57 148 74zm0 287q-110-18-193-94l-74 74q116 99 267 118zm128-287v222q83-17 148-74zm193 193q-83 75-193 94v98q151-19 267-118zm159-316q-13 0-22.5-9.5T896 352V224q0-13 9.5-22.5T928 192t22.5 9.5T960 224v128q0 13-9.5 22.5T928 384"></svg:path>`,
})
export class WhhSextantIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhShapesIcon],svg[whh-shapes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M736 897q-119 0-203.5-84.5T448 609q0-15 2-32h302q10-11 14.5-64t-4.5-64l-68-125q23-3 42-3q119 0 203.5 84.5T1024 609t-84.5 203.5T736 897m-42-384H169q-10-10-10-25t10-26L409 11q9-11 22.5-11T454 11l240 451q10 11 9.5 26t-9.5 25m-310 96q0 81 34 151.5T512 881v112q0 13-9.5 22.5T480 1025H32q-13 0-22.5-9.5T0 993V545q0-13 9.5-22.5T32 513h65q4 53 14 64h275q-2 24-2 32"></svg:path>`,
})
export class WhhShapesIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhShareIcon],svg[whh-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h448v128h-384q-27 0-45.5 19t-18.5 45v640q0 27 18.5 45.5t45.5 18.5h640q27 0 45.5-18.5t18.5-45.5V530l128-107v473q0 53-37.5 90.5t-90.5 37.5m-200-457q-13 13-34.5 8t-21.5-19V384q-224 0-384 320v-64q0-116 30-204t83-140t121-78t150-26V22q0-14 21.5-19.5t34.5 7.5l314 246q13 13 13 32t-13 33z"></svg:path>`,
})
export class WhhShareIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSharealtIcon],svg[whh-sharealt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 384q-44 0-83-19.5T683 312L377 462q7 27 7 50t-7 50l306 150q28-34 66.5-53t82.5-19q80 0 136 56t56 135.5t-56 136t-136 56.5q-79 0-135-56t-57-135L303 668q-50 36-111 36q-80 0-136-56.5t-56-136T56 376t136-56q61 0 111 35l337-164q1-79 57-135T832 0q80 0 136 56t56 135.5t-56 136T832 384"></svg:path>`,
})
export class WhhSharealtIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSharedfileIcon],svg[whh-sharedfile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 1025H64q-27 0-45.5-18.5T0 961t18.5-45.5T64 897h384V769H256q-27 0-45.5-18.5T192 705V65q0-27 18.5-45.5T256 1h256v288q0 13 9.5 22.5T544 321h287l1 1v383q0 27-19 45.5T768 769H576v128h384q27 0 45.5 19t18.5 45.5t-18.5 45T960 1025M576 0q26 0 44 18l193 194q19 18 18 45H576z"></svg:path>`,
})
export class WhhSharedfileIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSharedhostingIcon],svg[whh-sharedhosting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 640q53 0 90.5 37.5T1024 768v128q0 53-37.5 90.5T896 1024H128q-53 0-90.5-37.5T0 896V768q0-53 37.5-90.5T128 640h320V512H128q-53 0-90.5-37.5T0 384V256q0-53 37.5-90.5T128 128h320V64q0-27 18.5-45.5t45-18.5T557 18.5T576 64v64h320q53 0 90.5 37.5T1024 256v128q0 53-37.5 90.5T896 512H576v128zM191.5 768q-26.5 0-45 19T128 832.5t18.5 45t45 18.5t45.5-18.5t19-45t-19-45.5t-45.5-19m0-512q-26.5 0-45 19T128 320.5t18.5 45t45 18.5t45.5-18.5t19-45t-19-45.5t-45.5-19M832 384q26 0 45-18.5t19-45t-19-45.5t-45-19H448q-27 0-45.5 19T384 320.5t18.5 45T448 384zM448 768q-27 0-45.5 19T384 832.5t18.5 45T448 896h384q26 0 45-18.5t19-45t-19-45.5t-45-19z"></svg:path>`,
})
export class WhhSharedhostingIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSharethreeIcon],svg[whh-sharethree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 512h-86q-40 113-139 184.5T512 768t-223-71.5T150 512h141q33 58 92 93t129 35q106 0 181-75t75-181h192q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19M640 384q0 53-37.5 90.5T512 512t-90.5-37.5T384 384t37.5-90.5T512 256t90.5 37.5T640 384M512 128q-106 0-181 75t-75 181H64q-26 0-45-18.5t-19-45T19 275t45-19h86q40-113 139-184.5T512 0t223 71.5T874 256H734q-34-58-93-93t-129-35"></svg:path>`,
})
export class WhhSharethreeIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSharetronixIcon],svg[whh-sharetronix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 128q-87 0-160.5 34.5t-116.5 93T64 384q0 63 50.5 122.5t133 96.5T416 640q13 0 22.5 9.5T448 672t-9.5 22.5T416 704q-105 0-201-47T59.5 528T0 352q0-96 51.5-177t140-128T384 0q108 0 223 45.5T768 160l-128 96q-35-59-101.5-93.5T384 128m0 768q87 0 160.5-34.5t116.5-93T704 640q0-63-50.5-122.5t-133-96.5T352 384q-13 0-22.5-9.5T320 352t9.5-22.5T352 320q105 0 201 47t155.5 129T768 672q0 96-51.5 177t-140 128t-192.5 47q-108 0-223-45.5T0 864l128-96q35 59 101.5 93.5T384 896"></svg:path>`,
})
export class WhhSharetronixIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSharetwoIcon],svg[whh-sharetwo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h256q26 0 45 19t19 45.5t-19 45t-45 18.5h-192q-26 0-45 19t-19 45v640q0 27 18.5 45.5t45.5 18.5h640q26 0 45-18.5t19-45.5V640q0-26 18.5-45t45-19t45.5 19t19 45v256q0 53-37.5 90.5t-90.5 37.5m63.5-512q-26.5 0-45-18.5t-18.5-45.5V210l-413 413q-17 17-41 17t-41-17t-17-41t17-41l413-413h-238q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45.5-19h384q26 0 45 19t19 45v384q0 27-19 45.5t-45.5 18.5"></svg:path>`,
})
export class WhhSharetwoIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSheepIcon],svg[whh-sheep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 512q-27 1-90 0t-104-9q-5 101-30 201q-10 42-23.5 76T740 849t-53 58t-74.5 38T512 960t-100.5-15t-74.5-38t-53-58t-36.5-69t-23.5-76q-25-100-30-201q-41 8-104 9t-90 0q13-35 21.5-52.5T45 420t37-36t53-23q-7-22-7-41q0-36 18-65.5t48-45.5q-2-13-2-17q0-53 37.5-90.5T320 64q4 0 17 1q17-30 46.5-47.5T448 0q57 0 96 44q39-44 96-44q53 0 90.5 37.5T768 128v3q55 11 91.5 55T896 288q0 36-16 70q27 7 48.5 19t34.5 23.5t25.5 32.5t18.5 35.5t17 43.5M736 192q-37 0-44-27q12-17 12-37q0-27-18.5-45.5t-45-18.5T595 82.5T576 128q-34 0-65 9q1-7 1-9q0-27-18.5-45.5T448 64t-45.5 18.5T384 128v64q0-27-19-45.5T319.5 128t-45 18.5T256 192q0 19 11 35t28 24q-2 6-4 15q-16-10-35-10q-27 0-45.5 18.5t-18.5 45t18.5 45.5t45.5 19q37 0 56-34q29 34 72 34q25 0 48-14q23 14 48 14q37 0 66.5-22t29.5-42q0 24 28.5 44t67.5 20q16 0 32-6q17 6 32 6q40 0 68-28.5t28-68t-28-67.5t-68-28"></svg:path>`,
})
export class WhhSheepIcon {
  readonly viewBox = input("0 0 1024 960")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhShellIcon],svg[whh-shell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 541Q793 674 617 778q-39 55-105 55q-54 0-92-39q-46-26-113-68.5T189.5 649t-103-69.5T32 542q-21-14-28-51t-1.5-76T21 350q14-29 45.5-56t61.5-34q-3-42 25-93.5T214 92t82.5-26.5T378 87q16-36 57.5-61.5T512 0t76.5 26T646 87q32-25 81.5-22T811 92q33 23 61 74t25 93q30 8 61 34.5t45 55.5q13 27 18.5 65.5t-1.5 76t-28 50.5m-681-83q-66-65-119-105t-62.5-30.5T160 385t105 119q39 38 78 72q15-23 35-46q-31-35-67-72m79.5-265.5Q378 196 386 264t32 161q6 27 15 56q30-21 56-28q-6-27-11-45q-23-93-49-156t-38.5-59.5m243 0Q621 189 595 252t-49 156q-5 18-11 45q26 7 56 28q9-29 15-56q24-93 32-161t-4.5-71.5m261 130Q885 313 832 353T714 458q-36 36-68 72q20 23 35 46q39-33 78-73q65-65 105-118t30.5-62.5M128 769q-27 0-45.5-19T64 705v-78q120 79 226 142zm832-64q0 26-18.5 45T896 769H734q108-65 226-142z"></svg:path>`,
})
export class WhhShellIcon {
  readonly viewBox = input("0 0 1024 833")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSheriffIcon],svg[whh-sheriff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M831.5 384q-26.5 0-44.5-19L640 512l147 147q18-19 44.5-19t45.5 19t19 45t-19 45t-45.5 19t-45-19t-18.5-45H602L481 905q31 19 31 55q0 27-19 45.5t-45.5 18.5t-45-18.5T384 960q0-36 31-55L294 704H128q0 26-18.5 45t-45 19T19 749T0 703.5t19-45T64.5 640t44.5 19l147-147l-147-147q-18 19-44.5 19T19 365T0 319.5t19-45T64.5 256t45 18.5T128 320h166l121-201q-31-19-31-55q0-26 18.5-45t45-19T493 19t19 45q0 36-31 55l121 201h166q0-27 18.5-45.5t45-18.5t45.5 18.5t19 45.5t-19 45.5t-45.5 18.5"></svg:path>`,
})
export class WhhSheriffIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhShippingIcon],svg[whh-shipping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 640h-82q18 31 18 64q0 53-37.5 90.5T768 832t-90.5-37.5T640 704q0-33 18-64H366q18 31 18 64q0 53-37.5 90.5T256 832t-90.5-37.5T128 704q0-33 18-64H64q-26 0-45-18.5T0 576V322q-1-29 19-50l125-125q22-21 53-19h187V64q0-27 19-45.5T448 0h512q26 0 45 19t19 45v512q0 26-18.5 45T960 640M384 224q0-13-9.5-22.5T352 192H195L64 323v93q0 13 9.5 22.5T96 448h256q13 0 22.5-9.5T384 416z"></svg:path>`,
})
export class WhhShippingIcon {
  readonly viewBox = input("0 0 1024 832")
  readonly width = input("1.24em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhShirtbuttonIcon],svg[whh-shirtbutton-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5M352 576q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m320-320q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28"></svg:path>`,
})
export class WhhShirtbuttonIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhShirtbuttonaltIcon],svg[whh-shirtbuttonalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5M352 256q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m0 320q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m320-320q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m0 320q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28"></svg:path>`,
})
export class WhhShirtbuttonaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhShirtbuttonthreeIcon],svg[whh-shirtbuttonthree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-896q-104 0-192.5 51.5t-140 140T128 512t51.5 192.5t140 140T512 896t192.5-51.5t140-140T896 512t-51.5-192.5t-140-140T512 128m0 704q-87 0-160.5-43T235 672.5T192 512t43-160.5T351.5 235T512 192t160.5 43T789 351.5T832 512t-43 160.5T672.5 789T512 832M319.5 448q-26.5 0-45 19T256 512.5t18.5 45t45 18.5t45.5-18.5t19-45.5t-19-45.5t-45.5-18.5m192-192q-26.5 0-45 19T448 320.5t18.5 45T512 384t45.5-18.5t18.5-45t-19-45.5t-45.5-19m0 384q-26.5 0-45 18.5T448 704t18.5 45.5T512 768t45.5-18.5T576 704t-19-45.5t-45.5-18.5m192-192q-26.5 0-45 19T640 512.5t18.5 45t45 18.5t45.5-18.5t19-45.5t-19-45.5t-45.5-18.5"></svg:path>`,
})
export class WhhShirtbuttonthreeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhShoeboxIcon],svg[whh-shoebox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.268 192h-960q-13 0-22.5-9.5T.268 160V32q0-13 9.5-22.5t22.5-9.5h960q13 0 22.5 9.5t9.5 22.5v128q0 13-9.5 22.5t-22.5 9.5m-896 64h832q13 0 22.5 9.5t9.5 22.5v448q0 13-9.5 22.5t-22.5 9.5h-832q-13 0-22.5-9.5t-9.5-22.5V288q0-13 9.5-22.5t22.5-9.5m224 352q0 13 9.5 22.5t22.5 9.5h320q13 0 22.5-9.5t9.5-22.5V416q0-13-9.5-22.5t-22.5-9.5h-320q-13 0-22.5 9.5t-9.5 22.5z"></svg:path>`,
})
export class WhhShoeboxIcon {
  readonly viewBox = input("0 0 1025 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhShoppingIcon],svg[whh-shopping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 513H64q-27 0-45.5-18.5T0 449.5T18.5 404T64 385h56q20 30 51.5 47t68.5 17t68.5-17t51.5-47h304q20 30 51.5 47t68.5 17t68.5-17t51.5-47h56q27 0 45.5 19t18.5 45.5t-18.5 45T960 513M806 379q-19 11-40 5t-32-25L583 81q-11-19-5.5-40.5T602 8t40-5t32 25l151 278q11 19 5.5 40.5T806 379m-516-20q-11 19-32 25t-40-5t-24.5-32.5T199 306L350 28q11-19 32-25t40 5t24.5 32.5T441 81zm606 602q-8 40-29.5 52t-65.5 12H227q-45 0-68-12t-31-52L64 577h896z"></svg:path>`,
})
export class WhhShoppingIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhShoppingbagIcon],svg[whh-shoppingbag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 1023H64q-27 0-45.5-18.5T0 959V319q0-26 18.5-45T64 255h128V127L320 0v255h384V0l128 127v128h128q26 0 45 19t19 45v640q0 27-18.5 45.5T960 1023M384 0h256v127H384z"></svg:path>`,
})
export class WhhShoppingbagIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhShoppingcartIcon],svg[whh-shoppingcart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M961 128h-76L763 723q-5 19-21.5 32T707 768H160q-19 0-35.5-13T103 723L5 346q-10-36 3-63t40-27l709-123l18-89q5-18 21.5-31T831 0h130q27 0 45.5 18.5t18.5 45t-19 45.5t-45 19M289 832q40 0 68 28t28 68t-28 68t-68 28t-68-28t-28-68t28-68t68-28m320 0q40 0 68 28t28 68t-28 68t-68 28t-68-28t-28-68t28-68t68-28"></svg:path>`,
})
export class WhhShoppingcartIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhShoppingcartaltIcon],svg[whh-shoppingcartalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M961 128h-32L767 724q-4 18-23.5 31T705 768H225q-23 0-40-12.5T163 724L5 348q-10-37 3-64.5T49 256h19q19 0 35.5 13.5T125 302l132 338h416L844 45q5-19 20-32t33-13h64q27 0 45.5 19t18.5 45.5t-18.5 45T961 128M641.5 384q-26.5 0-45.5-18.5t-19-45t19-45.5t45.5-19t45 19t18.5 45.5t-18.5 45t-45 18.5m-.5 128.5q0 26.5-18.5 45t-45 18.5t-45.5-18.5t-19-45t19-45.5t45.5-19t45 19t18.5 45.5M513.5 192q-26.5 0-45.5-18.5t-19-45T468 83t45.5-19t45 19t18.5 45.5t-18.5 45t-45 18.5m-.5 128.5q0 26.5-18.5 45t-45 18.5t-45.5-18.5t-19-45t19-45.5t45.5-19t45 19t18.5 45.5m-64 192q0 26.5-18.5 45t-45 18.5t-45.5-18.5t-19-45t19-45.5t45.5-19t45 19t18.5 45.5M321.5 192q-26.5 0-45.5-18.5t-19-45T276 83t45.5-19t45 19t18.5 45.5t-18.5 45t-45 18.5m-.5 128.5q0 26.5-18.5 45t-45 18.5t-45.5-18.5t-19-45t19-45.5t45.5-19t45 19t18.5 45.5M294 832q40 0 68 28t28 68t-28 68t-68 28t-68-28t-28-68t28-68t68-28m319.5 0q39.5 0 68 28t28.5 68t-28.5 68t-68 28t-67.5-28t-28-68t28-68t67.5-28"></svg:path>`,
})
export class WhhShoppingcartaltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhShortcutIcon],svg[whh-shortcut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m0-832q0-26-19-45t-45-19h-448q-16 0-32 8t-24 16l-8 8l143 144q-64 35-122.5 84t-107 108.5t-77 130.5t-28.5 141q0 7-.5 20.5t-.5 24t1 19.5q0 27 18.5 45.5t45 18.5t45.5-18.5t19-45.5q19-85 85-148t159-96.5t206-41.5l158 158q1 0 8.5-8t15.5-24t8-32z"></svg:path>`,
})
export class WhhShortcutIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhShovelIcon],svg[whh-shovel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M994 994q-43 37-113.5 29T738 981t-113-74l-94-94q-19-20-19-47.5t19-46.5l48-48l-387-388l-82 82q-19 19-45.5 19T19 365T0 319.5T19 274L274 19q19-19 45.5-19T365 19t19 45.5t-19 45.5l-82 82l388 387l48-48q19-19 46.5-19t47.5 19l94 94q40 41 74 113t42 142.5T994 994"></svg:path>`,
})
export class WhhShovelIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhShredderIcon],svg[whh-shredder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 768V640q0-27-19-45.5T768 576H192q-26 0-45 18.5T128 640v128q-53 0-90.5-37.5T0 640V384q0-53 37.5-90.5T128 256v128q0 27 19 45.5t45 18.5h576q26 0 45-18.5t19-45.5V256q53 0 90.5 37.5T960 384v256q0 53-37.5 90.5T832 768m-96-384H224q-13 0-22.5-9.5T192 352V32q0-13 9.5-22.5T224 0h512q13 0 22.5 9.5T768 32v320q0 13-9.5 22.5T736 384M224 640q13 0 22.5 9t9.5 22v321q0 13-9.5 22.5T224 1024t-22.5-9.5T192 992V671q0-13 9.5-22t22.5-9m128 0q14 0 23 9t9 22v257q0 13-9 22.5t-23 9.5t-23-9.5t-9-22.5V671q0-13 9-22t23-9m128 0q13 0 22.5 9t9.5 22v193q0 13-9.5 22t-22.5 9t-22.5-9t-9.5-22V671q0-13 9.5-22t22.5-9m128 0q14 0 23 9t9 22v321q0 13-9 22.5t-23 9.5t-23-9.5t-9-22.5V671q0-13 9-22t23-9m128 0q13 0 22.5 9t9.5 22v257q0 13-9.5 22.5T736 960t-22.5-9.5T704 928V671q0-13 9.5-22t22.5-9"></svg:path>`,
})
export class WhhShredderIcon {
  readonly viewBox = input("0 0 960 1024")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhShutdownIcon],svg[whh-shutdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m0-896q-104 0-192.5 51.5t-140 140T128 512t51.5 192.5t140 140T512 896t192.5-51.5t140-140T896 512t-51.5-192.5t-140-140T512 128m0 640q-26 0-45-18.5T448 704V320q0-26 19-45t45-19t45 19t19 45v384q0 27-19 45.5T512 768"></svg:path>`,
})
export class WhhShutdownIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhShuttleIcon],svg[whh-shuttle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m910 386l-12 12q-27 51-46.5 122.5T832 673v224q0 26-50.5 77t-77.5 51L473 823l-58 58q-11 11-23.5 14.5t-27.5-2t-27.5-12t-33-24.5t-32.5-30l-36.5-36.5L198 754l-30-32.5l-24.5-33l-12-27.5l-2-27.5L144 610l58-58L0 321q0-27 51-77.5t77-50.5h224q81 0 152.5-19.5T627 127l12-12q26-26 97-60T883 5t117 20q36 41 20 117t-50 147t-60 97M768 129q-15 0-36 29.5T704 193q48 24 76 52t52 76q5-7 34.5-28t29.5-36q0-53-37.5-90.5T768 129M160 801q44-1 54.5 9.5T224 865q-1 47-62.5 103.5T32 1025H0v-32q0-68 56.5-129.5T160 801"></svg:path>`,
})
export class WhhShuttleIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSidebarIcon],svg[whh-sidebar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-768-160q0 13 9.5 22.5t22.5 9.5h352V448h-384zm384-736h-352q-13 0-22.5 9.5t-9.5 22.5v160h384zm384 32q0-13-9.5-22.5t-22.5-9.5h-224v768h224q13 0 22.5-9.5t9.5-22.5z"></svg:path>`,
})
export class WhhSidebarIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSiduIcon],svg[whh-sidu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M596 320q79 53 125.5 137.5T768 640q0 104-51.5 192.5t-140 140T384 1024t-192.5-51.5t-140-140T0 640q0-99 46.5-183T172 320Q93 267 46.5 182.5T0 0q124 0 223 71.5T362 257q19-1 22-1t22 1q40-114 139-185.5T768 0q0 98-46.5 182.5T596 320m-212 64q-106 0-181 75t-75 181t75 181t181 75t181-75t75-181t-75-181t-181-75"></svg:path>`,
})
export class WhhSiduIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSignalIcon],svg[whh-signal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832.5 1024q-26.5 0-45.5-18.5T768 960V64q0-26 19-45t45.5-19t45 18.5T896 64v896q0 27-18.5 45.5t-45 18.5m-256 0q-26.5 0-45.5-18.5T512 960V320q0-27 19-45.5t45.5-18.5t45 19t18.5 45v640q0 27-18.5 45.5t-45 18.5m-256 0q-26.5 0-45.5-18.5T256 960V576q0-27 19-45.5t45.5-18.5t45 18.5T384 576v384q0 27-18.5 45.5t-45 18.5M64 1024q-27 0-45.5-18.5T0 960V832q0-27 18.5-45.5T64 768t45.5 18.5T128 832v128q0 27-18.5 45.5T64 1024"></svg:path>`,
})
export class WhhSignalIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSilverstripeIcon],svg[whh-silverstripe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M909 783L690 926l-146 96q-42-58-28-127t74-108l86-57l133-87q31-20 37.5-54.5t-14-63.5t-56.5-35t-67 13l-146 64q-19-27-21-58.5t10.5-59.5t27-49t29.5-36h-1h1q91-60 199-40.5T978.5 430t42 190T909 783M436 235l-86 56l-133 88q-31 20-37.5 54.5t14 63t57 35T317 519l146-64q19 27 21 58.5T473.5 573T447 622t-30 36q-91 60-199 40.5T47.5 592t-42-190.5T117 239L336 96L482 0q42 58 28.5 127T436 235"></svg:path>`,
})
export class WhhSilverstripeIcon {
  readonly viewBox = input("0 0 1026 1022")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSimIcon],svg[whh-sim-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768.338 1024h-64q-26 0-45-18.5t-19-45.5V832q0-26 19-45t45-19h128q27 0 45.5 19t18.5 45v64q0 53-37.5 90.5t-90.5 37.5m64-320h-128q-26 0-45-18.5t-19-45.5V384q0-26 19-45t45-19h128q27 0 45.5 19t18.5 45v256q0 27-18.5 45.5t-45.5 18.5m0-448h-128q-26 0-45-18.5t-19-45.5V64q0-26 19-45t45-19h64q53 0 90.5 37.5t37.5 90.5v64q0 27-18.5 45.5t-45.5 18.5m-320 768h-128q-26 0-45-18.5t-19-45.5V832q0-27 19-45.5t45-18.5h128q27 0 45.5 19t18.5 45v128q0 27-18.5 45.5t-45.5 18.5m0-320h-128q-26 0-45-18.5t-19-45.5V384q0-26 19-45t45-19h128q27 0 45.5 19t18.5 45v256q0 27-18.5 45.5t-45.5 18.5m0-448h-128q-26 0-45-18.5t-19-45.5V64q0-26 19-45t45-19h128q27 0 45.5 19t18.5 45v128q0 27-18.5 45.5t-45.5 18.5m-320 768h-64q-53 0-90.5-37.5T.338 896v-64q0-27 18.5-45.5t45.5-18.5h128q27 0 45.5 19t18.5 45v128q0 27-18.5 45.5t-45.5 18.5m0-320h-128q-27 0-45.5-18.5T.338 640V384q0-26 18.5-45t45.5-19h128q27 0 45.5 19t18.5 45v256q0 27-18.5 45.5t-45.5 18.5m0-448h-128q-27 0-45.5-18.5T.338 192v-64q0-53 37.5-90.5t90.5-37.5h64q27 0 45.5 19t18.5 45v128q0 27-18.5 45.5t-45.5 18.5"></svg:path>`,
})
export class WhhSimIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSimaltIcon],svg[whh-simalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 1025H64q-27 0-45.5-18.5T0 961V65q0-26 18.5-45T64 1h442q32-2 53 19l189 189q20 20 20 48v704q0 27-19 45.5t-45 18.5M192 417q0-13-9.5-22.5T160 385h-32q-27 0-45.5 18.5T64 449v32q0 13 9.5 22.5T96 513h64q13 0 22.5-9.5T192 481zm0 192q0-13-9.5-22.5T160 577H96q-13 0-22.5 9.5T64 609v128q0 13 9.5 22.5T96 769h64q13 0 22.5-9.5T192 737zm0 256q0-13-9.5-22.5T160 833H96q-13 0-22.5 9.5T64 865v32q0 27 18.5 45.5T128 961h32q13 0 22.5-9.5T192 929zm192-448q0-13-9.5-22.5T352 385h-64q-13 0-22.5 9.5T256 417v64q0 13 9.5 22.5T288 513h64q13 0 22.5-9.5T384 481zm0 192q0-13-9.5-22.5T352 577h-64q-13 0-22.5 9.5T256 609v128q0 13 9.5 22.5T288 769h64q13 0 22.5-9.5T384 737zm0 256q0-13-9.5-22.5T352 833h-64q-13 0-22.5 9.5T256 865v64q0 13 9.5 22.5T288 961h64q13 0 22.5-9.5T384 929zm192-416q0-27-19-45.5T512 385h-32q-13 0-22.5 9.5T448 417v64q0 13 9.5 22.5T480 513h64q13 0 22.5-9.5T576 481zm0 160q0-13-9.5-22.5T544 577h-64q-13 0-22.5 9.5T448 609v128q0 13 9.5 22.5T480 769h64q13 0 22.5-9.5T576 737zm0 256q0-13-9.5-22.5T544 833h-64q-13 0-22.5 9.5T448 865v64q0 13 9.5 22.5T480 961h32q26 0 45-18.5t19-45.5z"></svg:path>`,
})
export class WhhSimaltIcon {
  readonly viewBox = input("0 0 768 1025")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSimcardthreeIcon],svg[whh-simcardthree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m877 448l-558 558q-18 18-43.5 18t-42.5-18L0 774V465L448 18q17-18 42.5-18T534 18l343 344q18 17 18 42.5T877 448m-125-55L567 207q-16-15-37.5-15T492 207L270 430q-15 15-15 36.5t15 37.5l185 185q16 15 37.5 15t37.5-15l222-222q15-16 15-37.5T752 393M520 569q-7 7-18 7t-19-7l-92-93q-8-8-8-18.5t8-18.5l111-111q8-8 18.5-8t18.5 8l93 93q7 7 7 18t-7 19zm51-135l-46-46q-9-9-19 0l-55 56q-9 9 0 18l46 46q9 9 19 0l55-55q9-9 0-19"></svg:path>`,
})
export class WhhSimcardthreeIcon {
  readonly viewBox = input("0 0 895 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSimplepieIcon],svg[whh-simplepie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M608.687 6q84 0 159.5 24t132.5 68t90.5 111t33.5 149q0 60-16 111.5t-54 96.5t-95.5 76.5t-146 49.5t-200.5 18q-93 0-175.5-28.5t-143-78t-105-114.5t-66.5-139.5t-22-151.5V6q0-13 13 4q41 52 54 65q60 59 125 59q42 0 96.5-20t99.5-44t105.5-44t114.5-20"></svg:path>`,
})
export class WhhSimplepieIcon {
  readonly viewBox = input("0 0 1025 710")
  readonly width = input("1.45em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSixteentonineIcon],svg[whh-sixteentonine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.5 768h-896q-26 0-45-19t-19-45V64q0-27 19-45.5T64.5 0h896q27 0 45.5 18.5t18.5 45.5v640q0 26-18.5 45t-45.5 19m-768-608q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5T64.5 160t9.5 22.5t22.5 9.5h32v416q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5zm320 288q0-53-37.5-90.5T384.5 320q-34 0-64 18v-82q0-27 18.5-45.5t45.5-18.5t45.5 18.5t18.5 45.5q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5q0-53-37.5-90.5T384.5 128T294 165.5T256.5 256v256q0 53 37.5 90.5t90.5 37.5t90.5-37.5t37.5-90.5zm96-192q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m0 192q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m352-192q0-53-37.5-90.5T832.5 128T742 165.5T704.5 256v64q0 53 37.5 90.5t90.5 37.5q34 0 64-18v82q0 27-18.5 45.5T833 576t-45.5-18.5t-19-45.5q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5q0 53 37.5 90.5t90.5 37.5t90.5-37.5t37.5-90.5zM833 384q-26.5 0-45.5-18.5t-19-45.5v-64q0-26 19-45t45.5-19t45 19t18.5 45v64q0 27-18.5 45.5T833 384M384.5 576q-27 0-45.5-19t-18.5-45v-64q0-27 18.5-45.5t45.5-18.5t45.5 18.5t18.5 45.5v64q0 26-18.5 45t-45.5 19"></svg:path>`,
})
export class WhhSixteentonineIcon {
  readonly viewBox = input("0 0 1025 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSizzleIcon],svg[whh-sizzle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1020 480q-11 84-60.5 161.5t-120 133t-157 88.5T512 896q-91 0-163-10t-106-22t-65-22t-50-10q105-21 137-45q-135-57-247-147h462l-32 128l384-256l-256-256l-32 128H0q26-26 82.5-58t116-66.5T292 193q-1 0-2-.5t-2-.5q-36 0-59-13t-30.5-32t-9.5-37.5t0-32t3-13.5q18 18 30.5 28.5t40.5 23t57 12.5t85-26.5T469 73q-10-16-15-34t-6-28V0q23 23 47 37t52 19.5t45.5 6.5t47.5 1q84 0 159.5 33t128 88.5t78.5 133t14 161.5"></svg:path>`,
})
export class WhhSizzleIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSkitchIcon],svg[whh-skitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 1024q-64 0-141-20.5t-155-57T256 856T125.5 740t-91-138.5T0 448q0-141 55.5-230.5T192 128q84 0 142 64q-4 11-20 43t-24.5 62.5T284 361q55-149 186.5-255T736 0q119 0 203.5 84.5T1024 288q0 71-17.5 130.5t-46 102.5t-62.5 83t-68 81t-62.5 86.5t-46 110T704 1024"></svg:path>`,
})
export class WhhSkitchIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSkrillIcon],svg[whh-skrill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-236q101-44 168.5-129.5t67.5-179.5q0-66-24-124t-70-104t-121-73t-169-28v-1q-20 0-32.5-.5t-32.5-4t-32-9.5t-21.5-19t-9.5-31q0-23 21.5-38.5t48.5-20.5t58-5q193 0 320 64V64q-37-37-131-64h195q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-768-714q0 66 24 124.5t70 104.5t121 73t169 28q20 0 32.5.5t32.5 4t32 9.5t21.5 19t9.5 31q0 23-21.5 38.5t-48.5 20.5t-58 5q-193 0-320-64v256q37 37 131 64h-195q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h236q-101 44-168.5 130t-67.5 180"></svg:path>`,
})
export class WhhSkrillIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSkullIcon],svg[whh-skull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 806v122q0 40-28 68t-68 28t-68-28t-28-68q0 40-28 68t-68 28t-68-28t-28-68q0 40-28 68t-68 28t-68-28t-28-68V806q-89-63-140.5-156.5T0 448q0-91 38-174t102.5-143t153-95.5T480 0t186.5 35.5t153 95.5T922 274t38 174q0 108-51.5 202T768 806M288 320q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m96 384h192l-96-128zm288-384q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28"></svg:path>`,
})
export class WhhSkullIcon {
  readonly viewBox = input("0 0 960 1024")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSkypeIcon],svg[whh-skype-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024.695 768q0 106-75 181t-181 75q-103 0-177-71q-41 7-79 7q-91 0-174-35.5t-143-95.5t-95.5-143t-35.5-174q0-37 7-79q-71-74-71-177q0-106 75-181t181-75q103 0 177 71q41-7 79-7q91 0 174 35.5t143 95.5t95.5 143t35.5 174q0 38-7 79q71 74 71 177m-512-448q53 0 90.5 18.5t37.5 45t19 45.5t45.5 19t45-19t18.5-45q0-80-75-136t-181-56t-181 56t-75 136t75 136t181 56q53 0 90.5 18.5t37.5 45.5t-37.5 45.5t-90.5 18.5t-90.5-19t-37.5-45.5t-18.5-45t-45-18.5t-45.5 18.5t-19 45.5q0 80 75 136t181 56t181-56t75-136t-75-136t-181-56q-53 0-90.5-19t-37.5-45.5t37.5-45t90.5-18.5"></svg:path>`,
})
export class WhhSkypeIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSkypeawayIcon],svg[whh-skypeaway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024.695 768q0 106-75 181t-181 75q-103 0-177-71q-41 7-79 7q-91 0-174-35.5t-143-95.5t-95.5-143t-35.5-174q0-38 7-79q-71-74-71-177q0-106 75-181t181-75q103 0 177 71q41-7 79-7q91 0 174 35.5t143 95.5t95.5 143t35.5 174q0 38-7 79q71 74 71 177m-290-190l-158-103V320q0-26-19-45t-45.5-19t-45 19t-18.5 45v194q-1 41 34 60l185 121q24 14 51 7t41-31.5t6.5-51.5t-31.5-41"></svg:path>`,
})
export class WhhSkypeawayIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSkypebusyIcon],svg[whh-skypebusy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024.695 768q0 106-75 181t-181 75q-103 0-177-71q-41 7-79 7q-91 0-174-35.5t-143-95.5t-95.5-143t-35.5-174q0-38 7-79q-71-74-71-177q0-106 75-181t181-75q103 0 177 71q41-7 79-7q91 0 174 35.5t143 95.5t95.5 143t35.5 174q0 38-7 79q71 74 71 177m-320-320h-384q-27 0-45.5 19t-18.5 45t18.5 45t45.5 19h384q26 0 45-19t19-45t-19-45t-45-19"></svg:path>`,
})
export class WhhSkypebusyIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSkypeofflineIcon],svg[whh-skypeoffline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024.695 768q0 106-75 181t-181 75q-103 0-177-71q-41 7-79 7q-91 0-174-35.5t-143-95.5t-95.5-143t-35.5-174q0-37 7-79q-71-74-71-177q0-106 75-181t181-75q103 0 177 71q41-7 79-7q91 0 174 35.5t143 95.5t95.5 143t35.5 174q0 38-7 79q71 74 71 177m-128-256q0-104-51.5-192.5t-140-140t-192.5-51.5q-51 0-102 14q-27-36-67.5-57t-86.5-21q-80 0-136 56.5t-56 135.5q0 46 21 86.5t57 67.5q-14 51-14 102q0 104 51.5 192.5t140 140t192.5 51.5q51 0 102-14q27 36 67 57t87 21q79 0 135.5-56t56.5-136q0-46-21-86.5t-57-67.5q14-51 14-102"></svg:path>`,
})
export class WhhSkypeofflineIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSkypeonlineIcon],svg[whh-skypeonline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024.695 768q0 106-75 181t-181 75q-103 0-177-71q-41 7-79 7q-91 0-174-35.5t-143-95.5t-95.5-143t-35.5-174q0-38 7-79q-71-74-71-177q0-106 75-181t181-75q103 0 177 71q41-7 79-7q91 0 174 35.5t143 95.5t95.5 143t35.5 174q0 38-7 79q71 74 71 177m-275.5-428.5q-19.5-19.5-46.5-19.5t-47 19l-207 208l-79-80q-20-19-47-19t-46.5 19.5t-19.5 46.5t19 47l123 123q20 20 50 19q30 1 50-19l251-251q19-20 19-47t-19.5-46.5"></svg:path>`,
})
export class WhhSkypeonlineIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSleepIcon],svg[whh-sleep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M734 448h258q13 0 22.5 9.5t9.5 22.5t-9.5 22.5T992 512H672q-13 0-22.5-9.5T640 480q0-14 10-23L930 64H672q-13 0-22.5-9.5T640 32t9.5-22.5T672 0h320q12 0 22 11.5t10 20.5t-8 21zM576 800q0 13-9.5 22.5T544 832H288q-13 0-22.5-9.5T256 800q0-14 10-23l216-265H288q-13 0-22.5-9.5T256 480t9.5-22.5T288 448h256q12 0 22 11.5t10 20.5t-8 21L350 768h194q13 0 22.5 9.5T576 800M192 992q0 13-9.5 22.5T160 1024H32q-13 0-22.5-9.5T0 992q0-14 10-23l88-137H32q-13 0-22.5-9.5T0 800t9.5-22.5T32 768h128q12 0 22 11.5t10 20.5t-8 21L94 960h66q13 0 22.5 9.5T192 992"></svg:path>`,
})
export class WhhSleepIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSliderascIcon],svg[whh-sliderasc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M991.998 1024h-192q-13 0-22.5-9.5t-9.5-22.5V800q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5m-32-448h-256V448h256q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19m0-384h-640V64h640q27 0 45.5 18.5t18.5 45.5t-18.5 45.5t-45.5 18.5m-736 64h-192q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5m-160 192h256v128h-256q-26 0-45-19t-19-45.5t19-45t45-18.5m352 192q-13 0-22.5-9.5t-9.5-22.5V416q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5zm-352 192h640v128h-640q-26 0-45-19t-19-45.5t19-45t45-18.5"></svg:path>`,
})
export class WhhSliderascIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSlideronefullIcon],svg[whh-slideronefull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.743 576h-640V448h640q27 0 45.5 19t18.5 45.5t-18.5 45t-45.5 18.5m32-320h-192q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5m-992-127.5q0-26.5 19-45.5t45-19h640v128h-640q-26 0-45-18.5t-19-45m32 255.5h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5T.743 608V416q0-13 9.5-22.5t22.5-9.5m0 384h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5T.743 992V800q0-13 9.5-22.5t22.5-9.5m992 128.5q0 26.5-18.5 45t-45.5 18.5h-640V832h640q27 0 45.5 19t18.5 45.5"></svg:path>`,
})
export class WhhSlideronefullIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSlidersdescIcon],svg[whh-slidersdesc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.743 576h-256V448h256q27 0 45.5 19t18.5 45.5t-18.5 45t-45.5 18.5m32-320h-192q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5m-992-127.5q0-26.5 19-45.5t45-19h640v128h-640q-26 0-45-18.5t-19-45m64 319.5h256v128h-256q-26 0-45-18.5t-19-45t19-45.5t45-19m-32 320h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5T.743 992V800q0-13 9.5-22.5t22.5-9.5m384-128q-13 0-22.5-9.5t-9.5-22.5V416q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5zm608 256.5q0 26.5-18.5 45t-45.5 18.5h-640V832h640q27 0 45.5 19t18.5 45.5"></svg:path>`,
})
export class WhhSlidersdescIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSlidersfullIcon],svg[whh-slidersfull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.232 1024h-192q-13 0-22.5-9.5t-9.5-22.5V800q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5m0-384h-192q-13 0-22.5-9.5t-9.5-22.5V416q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5m0-384h-192q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5m-992 640q0-27 18.5-45.5t45.5-18.5h640v128h-640q-27 0-45.5-18.5T.232 896m0-384q0-27 18.5-45.5t45.5-18.5h640v128h-640q-27 0-45.5-18.5T.232 512m0-384q0-27 18.5-45.5t45.5-18.5h640v128h-640q-27 0-45.5-18.5T.232 128"></svg:path>`,
})
export class WhhSlidersfullIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSlidersmiddleIcon],svg[whh-slidersmiddle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.305 576h-256V448h256q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19m0-384h-256V64h256q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19m-352 832h-192q-13 0-22.5-9.5t-9.5-22.5V800q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5m0-384h-192q-13 0-22.5-9.5t-9.5-22.5V416q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5m0-384h-192q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5m-608 639.5q0-26.5 18.5-45t45.5-18.5h256v128h-256q-27 0-45.5-19t-18.5-45.5m0-384q0-26.5 18.5-45t45.5-18.5h256v128h-256q-27 0-45.5-19t-18.5-45.5m0-384q0-26.5 18.5-45t45.5-18.5h256v128h-256q-27 0-45.5-19t-18.5-45.5m1024 768q0 26.5-18.5 45.5t-45.5 19h-256V832h256q27 0 45.5 18.5t18.5 45"></svg:path>`,
})
export class WhhSlidersmiddleIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSlidersoffIcon],svg[whh-slidersoff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M959.998 576h-640V448h640q26 0 45 19t19 45t-19 45t-45 19m0-384h-640V64h640q26 0 45 19t19 45.5t-19 45t-45 18.5m-736 832h-192q-13 0-22.5-9.5t-9.5-22.5V800q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5m0-384h-192q-13 0-22.5-9.5t-9.5-22.5V416q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5m0-384h-192q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5m800 640q0 26-19 45t-45 19h-640V832h640q26 0 45 19t19 45"></svg:path>`,
})
export class WhhSlidersoffIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSliderthreefullIcon],svg[whh-sliderthreefull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M991.998 1024h-192q-13 0-22.5-9.5t-9.5-22.5V800q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5m-32-448h-640V448h640q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19m0-384h-640V64h640q27 0 45.5 18.5t18.5 45.5t-18.5 45.5t-45.5 18.5m-736 448h-192q-13 0-22.5-9.5t-9.5-22.5V416q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5m0-384h-192q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5m-160 576h640v128h-640q-26 0-45-19t-19-45.5t19-45t45-18.5"></svg:path>`,
})
export class WhhSliderthreefullIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSlidertwofullIcon],svg[whh-slidertwofull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M991.998 640h-192q-13 0-22.5-9.5t-9.5-22.5V416q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5m-32-448h-640V64h640q27 0 45.5 19t18.5 45.5t-18.5 45t-45.5 18.5m-736 64h-192q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5m-160 192h640v128h-640q-26 0-45-18.5t-19-45t19-45.5t45-19m-32 320h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5V800q0-13 9.5-22.5t22.5-9.5m992 128.5q0 26.5-18.5 45t-45.5 18.5h-640V832h640q27 0 45.5 19t18.5 45.5"></svg:path>`,
})
export class WhhSlidertwofullIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSmallerIcon],svg[whh-smaller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 855v129q0 27-18.5 36t-45.5-6L64 684q-27-15-45.5-44T0 584V439q0-26 18.5-55.5T64 340L960 10q27-15 45.5-6.5T1024 39v129q0 27-18.5 56.5T960 268L299 512l661 244q27 14 45.5 43t18.5 56"></svg:path>`,
})
export class WhhSmallerIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSmartyIcon],svg[whh-smarty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 618q-138 16-197 103t-59 239q-62-50-138-73q-10 9-22 9H416q-12 0-22-9q-76 23-138 73q0-152-59-239T0 618q235-173 101-428Q389 259 512 0q123 259 411 190q-134 255 101 428M512 256q-106 0-181 80.5T256 530q0 15 3 29.5t6 24.5t11.5 24t12.5 20t15.5 22.5T320 672q21 24 58.5 57t53.5 55t16 48h128q0-26 16.5-48t53.5-55t58-57q4-5 15.5-21.5T735 628t12.5-20t11.5-24t6-24.5t3-29.5q0-113-75-193.5T512 256m-96 640h192q13 0 22.5 9.5T640 928t-9.5 22.5T608 960q0 29-23 46.5t-73 17.5t-73-17.5t-23-46.5q-13 0-22.5-9.5T384 928t9.5-22.5T416 896"></svg:path>`,
})
export class WhhSmartyIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSmfIcon],svg[whh-smf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.157 64h-80q-7 0-11.5 4.5t-4.5 11.5v96q0 6 4.5 11t11.5 5h80q13 0 22.5 9t9.5 22.5t-9.5 23t-22.5 9.5h-80q-7 0-11.5 4.5t-4.5 11.5v208q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5V32q0-14 9-23t23-9h128q13 0 22.5 9t9.5 22.5t-9.5 23t-22.5 9.5m-256 448q-13 0-22.5-9.5t-9.5-22.5V131l-100 141q-9 16-28 16t-28-16l-100-141v349q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5q18 0 28 16l132 186l132-186q10-16 28-16q13 0 22.5 9.5t9.5 22.5v448q0 13-9.5 22.5t-22.5 9.5m-262 73l59 82l408-89q26-7 49.5 6t30.5 38t-6.5 47.5t-39.5 29.5l-362 79l148 204q17 17-8 42l-616-1q-10-10-10-24t10-24l79-111l-133 29q-26 7-49.5-6t-30.5-38t6.5-47.5t39.5-29.5l276-60l91-127q10-10 29-10t29 10m-90 182.5q0 26.5 19 45.5t45.5 19t45-19t18.5-45.5t-18.5-45t-45-18.5t-45.5 18.5t-19 45m-96-639.5q-13 0-22.5-9.5t-9.5-22.5q0-12-3.5-19t-13-9.5t-16.5-3.5t-22 0h-73q-26 0-45 18.5t-19 45t19 45.5t45 19h64q53 0 90.5 37.5t37.5 90.5v64q0 53-37.5 90.5t-90.5 37.5h-64q-58 0-93-23t-35-73q0-14 9.5-23t22.5-9t22.5 9t9.5 23q0 11 3.5 18t13 10t16.5 3.5t23 .5h72q26 0 45-19t19-45v-64q0-27-19-45.5t-45-18.5h-64q-53 0-90.5-37.5T.157 128t37.5-90.5t90.5-37.5h64q58 0 93 23t35 73q0 13-9.5 22.5t-22.5 9.5"></svg:path>`,
})
export class WhhSmfIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSmileIcon],svg[whh-smile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5M288 256q-40 0-68 37.5T192 384t28 90.5t68 37.5t68-37.5t28-90.5t-28-90.5t-68-37.5m448 0q-40 0-68 37.5T640 384t28 90.5t68 37.5t68-37.5t28-90.5t-28-90.5t-68-37.5m64 384H224q-13 0-22.5 9.5T192 672q40 113 117.5 168.5T511 896t202.5-55.5T832 672q0-13-9.5-22.5T800 640M511 832q-166 0-223-114q0-6 5.5-10t13.5-4h410q8 0 13.5 4t5.5 10q-57 114-225 114"></svg:path>`,
})
export class WhhSmileIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSnaptodotIcon],svg[whh-snaptodot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.32 576h-160l32-256q0-83-38.5-121.5T704.32 160t-121.5 38.5t-38.5 121.5l32 256h-160l-32-256q0-87 43-161t116.5-116.5T704.32 0t160.5 42.5T981.32 159t43 161zm-592 384h32q7 0 11.5 4.5t4.5 11.5v32q0 7-4.5 11.5t-11.5 4.5h-32q-7 0-11.5-4.5t-4.5-11.5v-32q0-7 4.5-11.5t11.5-4.5m-96 64h-32q-7 0-11.5-4.5t-4.5-11.5v-32q0-7 4.5-11.5t11.5-4.5h32q7 0 11.5 4.5t4.5 11.5v32q0 7-4.5 11.5t-11.5 4.5m0-256h-32q-7 0-11.5-4.5t-4.5-11.5v-32q0-7 4.5-11.5t11.5-4.5h32q7 0 11.5 4.5t4.5 11.5v32q0 7-4.5 11.5t-11.5 4.5m0-256h-32q-7 0-11.5-5t-4.5-11v-32q0-7 4.5-11.5t11.5-4.5h32q7 0 11.5 4.5t4.5 11.5v32q0 6-4.5 11t-11.5 5m0-256h-32q-7 0-11.5-5t-4.5-11v-32q0-7 4.5-11.5t11.5-4.5h32q7 0 11.5 4.5t4.5 11.5v32q0 6-4.5 11t-11.5 5m-128 768h-32q-7 0-11.5-4.5t-4.5-11.5v-32q0-7 4.5-11.5t11.5-4.5h32q7 0 11.5 4.5t4.5 11.5v32q0 7-4.5 11.5t-11.5 4.5m-128 0h-32q-7 0-11.5-4.5T.32 1008v-32q0-7 4.5-11.5t11.5-4.5h32q7 0 11.5 4.5t4.5 11.5v32q0 7-4.5 11.5t-11.5 4.5m0-128h-32q-7 0-11.5-4.5T.32 880v-32q0-7 4.5-11.5t11.5-4.5h32q7 0 11.5 4.5t4.5 11.5v32q0 7-4.5 11.5t-11.5 4.5m0-128h-32q-7 0-11.5-4.5T.32 752v-32q0-7 4.5-11.5t11.5-4.5h32q7 0 11.5 4.5t4.5 11.5v32q0 7-4.5 11.5t-11.5 4.5m0-128h-32q-7 0-11.5-4.5T.32 624v-32q0-7 4.5-11.5t11.5-4.5h32q7 0 11.5 4.5t4.5 11.5v32q0 7-4.5 11.5t-11.5 4.5m0-128h-32q-7 0-11.5-4.5T.32 496v-32q0-7 4.5-11.5t11.5-4.5h32q7 0 11.5 4.5t4.5 11.5v32q0 7-4.5 11.5t-11.5 4.5m0-128h-32q-7 0-11.5-5t-4.5-11v-32q0-7 4.5-11.5t11.5-4.5h32q7 0 11.5 4.5t4.5 11.5v32q0 6-4.5 11t-11.5 5m0-128h-32q-7 0-11.5-5t-4.5-11v-32q0-7 4.5-11.5t11.5-4.5h32q7 0 11.5 4.5t4.5 11.5v32q0 6-4.5 11t-11.5 5m0-128h-32q-7 0-11.5-5t-4.5-11V80q0-7 4.5-11.5t11.5-4.5h32q7 0 11.5 4.5t4.5 11.5v32q0 6-4.5 11t-11.5 5m480 576h32q7 0 11.5 4.5t4.5 11.5v32q0 7-4.5 11.5t-11.5 4.5h-32q-7 0-11.5-4.5t-4.5-11.5v-32q0-7 4.5-11.5t11.5-4.5m0 256h32q7 0 11.5 4.5t4.5 11.5v32q0 7-4.5 11.5t-11.5 4.5h-32q-7 0-11.5-4.5t-4.5-11.5v-32q0-7 4.5-11.5t11.5-4.5m128 0h32q7 0 11.5 4.5t4.5 11.5v32q0 7-4.5 11.5t-11.5 4.5h-32q-7 0-11.5-4.5t-4.5-11.5v-32q0-7 4.5-11.5t11.5-4.5m128-256h32q7 0 11.5 4.5t4.5 11.5v32q0 7-4.5 11.5t-11.5 4.5h-32q-6 0-11-4.5t-5-11.5v-32q0-7 5-11.5t11-4.5m0 256h32q7 0 11.5 4.5t4.5 11.5v32q0 7-4.5 11.5t-11.5 4.5h-32q-6 0-11-4.5t-5-11.5v-32q0-7 5-11.5t11-4.5m128 0h32q7 0 11.5 4.5t4.5 11.5v32q0 7-4.5 11.5t-11.5 4.5h-32q-7 0-11.5-4.5t-4.5-11.5v-32q0-7 5-11.5t11-4.5"></svg:path>`,
})
export class WhhSnaptodotIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSnaptogridIcon],svg[whh-snaptogrid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1007 751h-34q-7 0-12-5t-5-12v-34q0-7 5-12t12-5h34q7 0 12 5t5 12v34q0 7-5 12t-12 5m0-410h-34q-7 0-12-5t-5-12v-34q0-7 5-12t12-5h34q7 0 12 5t5 12v34q0 7-5 12t-12 5M870 751h-34q-7 0-12-5t-5-12v-34q0-7 5-12t12-5h34q7 0 12 5t5 12v34q0 7-5 12t-12 5m0-410h-34q-7 0-12-5t-5-12v-34q0-7 5-12t12-5h34q7 0 12 5t5 12v34q0 7-5 12t-12 5m-136 683h-34q-7 0-12-5t-5-12v-34q0-7 5-12t12-5h34q7 0 12 5t5 12v34q0 7-5 12t-12 5m0-137h-34q-7 0-12-5t-5-12v-34q0-7 5-12t12-5h34q7 0 12 5t5 12v34q0 7-5 12t-12 5m0-136H290q-7 0-12-5t-5-12V290q0-7 5-12t12-5h444q7 0 12 5t5 12v444q0 7-5 12t-12 5m-51-410H341v342h342zm51-136h-34q-7 0-12-5t-5-12v-34q0-7 5-12t12-5h34q7 0 12 5t5 12v34q0 7-5 12t-12 5m0-137h-34q-7 0-12-5t-5-12V17q0-7 5-12t12-5h34q7 0 12 5t5 12v34q0 7-5 12t-12 5M324 205h-34q-7 0-12-5t-5-12v-34q0-7 5-12t12-5h34q7 0 12 5t5 12v34q0 7-5 12t-12 5m0-137h-34q-7 0-12-5t-5-12V17q0-7 5-12t12-5h34q7 0 12 5t5 12v34q0 7-5 12t-12 5M188 751h-34q-7 0-12-5t-5-12v-34q0-7 5-12t12-5h34q7 0 12 5t5 12v34q0 7-5 12t-12 5m0-410h-34q-7 0-12-5t-5-12v-34q0-7 5-12t12-5h34q7 0 12 5t5 12v34q0 7-5 12t-12 5M51 751H17q-7 0-12-5t-5-12v-34q0-7 5-12t12-5h34q7 0 12 5t5 12v34q0 7-5 12t-12 5m0-410H17q-7 0-12-5t-5-12v-34q0-7 5-12t12-5h34q7 0 12 5t5 12v34q0 7-5 12t-12 5m239 478h34q7 0 12 5t5 12v34q0 7-5 12t-12 5h-34q-7 0-12-5t-5-12v-34q0-7 5-12t12-5m0 137h34q7 0 12 5t5 12v34q0 7-5 12t-12 5h-34q-7 0-12-5t-5-12v-34q0-7 5-12t12-5"></svg:path>`,
})
export class WhhSnaptogridIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSnewsIcon],svg[whh-snews-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M842.5 532Q790 562 735 571.5t-95-2.5q10-42 45.5-83t88.5-71q193-110 250-93q-10 41-69.5 110.5t-112 99.5M583 384q-12-31-4.5-78.5T613 207Q710 23 763 0q12 32-.5 111T723 240.5T658.5 329T583 384M256 640q106 0 181 56t75 135.5t-75 136t-181 56.5t-181-56T0 832h128q0 26 37.5 45t90.5 19t90.5-19t37.5-45.5t-37.5-45T256 768q-106 0-181-56.5t-75-136T75 440t181-56t181 56t75 136H384q0-27-37.5-45.5T256 512t-90.5 18.5t-37.5 45t37.5 45.5t90.5 19m135-400q-12-52-3.5-130T415 0q44 23 89 207q12 52 7 98t-25 79q-31-17-56.5-55T391 240"></svg:path>`,
})
export class WhhSnewsIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSnoozeIcon],svg[whh-snooze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M983.557 320h-3q-11 1-27-2q-85-145-238-211q-6-23-8.5-36.5t-2-28.5t7.5-23t22-13.5t40-5.5q104 0 177 73.5t73 176.5q0 67-41 70m-23 256q0 91-35.5 174t-95.5 143t-143 95.5t-174 35.5t-174-35.5t-143-95.5t-95.5-143t-35.5-174t35.5-174t95.5-143t143-95.5t174-35.5t174 35.5t143 95.5t95.5 143t35.5 174m-448-320q-87 0-160.5 43t-116.5 116.5t-43 160.5t43 160.5t116.5 116.5t160.5 43t160.5-43t116.5-116.5t43-160.5t-43-160.5t-116.5-116.5t-160.5-43m160 512h-288v-1q-9-2-15-7l-41-41q-8-8-8-20t8-21l166-166h-142q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h288v1q9 2 15 8l41 40q8 9 8 21t-8 20l-166 166h142q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-601-450q-15 3-27 2h-3q-41-3-41-70q0-103 73-176.5t177-73.5q24 0 39.5 5.5t22.5 13.5t7.5 23t-2 28.5t-9.5 36.5q-152 66-237 211"></svg:path>`,
})
export class WhhSnoozeIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSnowIcon],svg[whh-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M893 463q-6 12-17 16t-21-3l-101-68l-50 29v150l50 29l101-68q10-7 21-3t17 16t3 25t-13 20l-68 46l50 29q23 13 29.5 38.5T888 768t-38.5 30t-48.5-7l-32-19v60q0 13-9.5 22.5t-23 9.5t-22.5-9.5t-9-22.5v-97l-70-40l-123 69v89l81 47q11 7 14.5 20t-3 24t-19 14.5T562 956l-50-30v34q0 26-18.5 45t-45 19t-45.5-19t-19-45v-34l-49 30q-11 6-23.5 2.5t-19-14.5t-3-24t14.5-20l80-47v-89l-122-69l-70 40v97q0 13-9 22.5t-22.5 9.5t-23-9.5T128 832v-60l-32 19q-23 14-48.5 7T9 768t-6.5-48.5T32 681l50-29l-68-46q-10-7-13-20t3-25t17-16t21 3l101 68l50-29V437l-50-29l-101 68q-10 7-21 3T4 463t-3-25t13-20l68-46l-50-29Q9 330 2.5 304.5T9 256t38.5-30t48.5 7l32 19v-60q0-13 9.5-22.5t23-9.5t22.5 9.5t9 22.5v97l70 40l122-69v-89l-80-47q-11-7-14.5-20t3-24t19-14.5T335 68l49 30V64q0-26 19-45t45.5-19t45 19T512 64v34l50-30q11-6 23.5-2.5t19 15t3 24T593 124l-81 47v89l123 69l70-40v-97q0-13 9-22.5t22.5-9.5t23 9.5T769 192v60l32-19q23-14 48.5-7t38.5 30t6.5 48.5T865 343l-50 29l68 46q10 7 13 20t-3 25m-317-15l-128-64l-127 64v128l127 64l128-64z"></svg:path>`,
})
export class WhhSnowIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSnowmanIcon],svg[whh-snowman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M817 316L633 425q7 29 7 55q0 69-39 127q47 53 75 123.5T704 869q0 38-8.5 65.5t-29.5 44t-39.5 26.5t-57 13.5t-62.5 4.5t-74 1h-34q-49 0-73.5-1t-62.5-4.5t-57-13.5t-40-26.5t-29.5-44T128 869q0-68 28-138.5T232 607q-40-58-40-127q0-26 7-55L16 316q-12-7-15-20t3.5-24T23 257.5t24 2.5l177 106q33-55 89-85q-57-48-57-121q0-66 47-113T416.5 0t113 47T576 160q0 73-56 121q56 30 89 85l177-106q11-6 23.5-2.5t19 14.5t3 24t-14.5 20M416.5 640q13.5 0 22.5-9.5t9-22.5t-9-22.5t-22.5-9.5t-23 9.5T384 608t9.5 22.5t23 9.5m0-128q13.5 0 22.5-9.5t9-22.5t-9-22.5t-22.5-9.5t-23 9.5T384 480t9.5 22.5t23 9.5m-64-384q-13.5 0-23 9.5T320 160t9.5 22.5t23 9.5t22.5-9.5t9-22.5t-9-22.5t-22.5-9.5m64 192q-13.5 0-23 9.5T384 352t9.5 22.5t23 9.5t22.5-9.5t9-22.5t-9-22.5t-22.5-9.5M480 128q-13 0-22.5 9.5T448 160t9.5 22.5T480 192t22.5-9.5T512 160t-9.5-22.5T480 128"></svg:path>`,
})
export class WhhSnowmanIcon {
  readonly viewBox = input("0 0 833 1024")
  readonly width = input("0.82em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSocialnetworkIcon],svg[whh-socialnetwork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 1024q-87 0-161-34.5T426.5 896T384 767.5T426.5 639T543 546t161-34q36 0 73 7q21-34 50.5-68t49.5-50l19-17v179q59 36 93.5 89.5T1024 768q0 69-43 128t-116.5 93.5T704 1024m-32-576q-133 0-214 52T343 639q-44-4-88-18q-21 37-53 74t-53 55l-21 18V559q-60-45-94-107T0 320q0-87 51.5-160.5T191.5 43t193-43t193 43T717 159.5T768 320q0 68-32 129q-30-1-64-1"></svg:path>`,
})
export class WhhSocialnetworkIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSodacupIcon],svg[whh-sodacup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m576 384l-64 576q-5 24-20 44t-36 20H184q-21 0-36.5-20T128 960L64 384q-26 0-45-18.5t-19-45T19 275t45-19h315l56-224q4-17 18-26t30-4.5t24 20t4 32.5l-50 202h115q26 0 45 19t19 45.5t-19 45t-45 18.5"></svg:path>`,
})
export class WhhSodacupIcon {
  readonly viewBox = input("0 0 640 1024")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSoftwareIcon],svg[whh-software-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1015.476 158l-119 200v603q0 27-18.5 45.5t-45.5 18.5h-640q-27 0-45.5-19t-18.5-45V358l-119-200q-14-22-7-47t30-38t48.5-6t38.5 29l95 160h596l95-160q13-22 38.5-29t48.5 6t30 38t-7 47m-311 420h-12q-11-30-34-58l6-10q13-22 6-47t-30-37.5t-48.5-6t-38.5 28.5l-6 10q-19-4-35-4t-35 4l-6-10q-13-22-38.5-28.5t-48.5 6t-30 37.5t6 47l7 10q-24 28-35 58h-12q-27 0-45.5 18.5t-18.5 44t18.5 44t45.5 18.5h12q11 31 35 58l-7 10q-13 22-6 47t30 38t48.5 6t38.5-29l6-9q19 3 35 3t35-3l6 9q13 22 38.5 29t48.5-6t30-38t-6-47l-6-10q23-27 34-58h12q27 0 45.5-18.5t18.5-44t-18.5-44t-45.5-18.5m-192 127q-26 0-45-19t-19-45t19-45t45-19t45 19t19 45t-19 45t-45 19m-320-641q0-27 18.5-45.5t45.5-18.5h512q27 0 45.5 19t18.5 45v128h-640z"></svg:path>`,
})
export class WhhSoftwareIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSolarpanelIcon],svg[whh-solarpanel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M990.86 703h-281l58 288q3 16-7 24t-25 8h-448q-15 0-24.5-8t-7.5-24l58-288h-281q-16 0-25.5-7.5T.86 671l127-639q2-12 8.5-22t15.5-10h709q10 0 21.5 11t13.5 21l127 639q3 17-6.5 24.5t-25.5 7.5m-159-639h-640l-96 575h831zm-484 320l-28 191h-160l41-191zm264 0l28 191h-256l27-191zm210 0l42 191h-160l-28-191zm-155-64l-27-192h128l41 192zm-246 0l27-192h128l27 192zm-206 0l41-192h128l-27 192z"></svg:path>`,
})
export class WhhSolarpanelIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSolarsystemIcon],svg[whh-solarsystem-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512.56 1024q-104 0-199-40.5t-163.5-109t-109-163.5T.56 512q0-114 50-219q-50-39-50-101q0-53 37.5-90.5t90.5-37.5q48 0 85 33q134-97 299-97q104 0 199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-960q-145 0-263 86q7 22 7 42q0 53-37.5 90.5t-90.5 37.5q-7 0-19-2q-45 93-45 194q0 91 35.5 174t95.5 143t143 95.5t174 35.5t174-35.5t143-95.5t95.5-143t35.5-174t-35.5-174t-95.5-143t-143-95.5t-174-35.5m293 575q-37 87-116.5 140t-176.5 53q-87 0-160.5-43t-116.5-116.5t-43-160.5t43-160.5T352.06 235t160.5-43q116 0 204.5 74t109.5 186q31 9 50.5 34t19.5 58q0 38-26.5 65.5t-64.5 29.5m-293-383q-106 0-181 75t-75 181t75 181t181 75q76 0 138-40.5t93-106.5q-39-29-39-77q0-29 16-53t42-35q-20-87-89.5-143.5T512.56 256m0 384q-53 0-90.5-37.5t-37.5-90.5t37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5"></svg:path>`,
})
export class WhhSolarsystemIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSortbynameascendingIcon],svg[whh-sortbynameascending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1003 61L741 384h251q13 0 22.5 9t9.5 22.5t-9.5 22.5t-22.5 9H672q-13 0-22.5-8.5T640 415q0-6 4-12t6.5-8t10.5-9L924 64H672q-13 0-22.5-9.5T640 32t9.5-22.5T672 0h320q11 0 21.5 9t10.5 22q0 10-21 30m-785 953q-11 9-26 9t-26-9L11 808q-11-8-11-20t11-20h118V64q0-27 18.5-45.5t45-18.5T238 18.5T257 64v704h117q10 8 10 20t-10 20zm550-439h128q53 0 90.5 37.5T1024 703v288q0 13-9.5 22.5T992 1023t-22.5-9.5T960 991v-80q0-7-4.5-11.5T944 895H720q-6 0-11 4.5t-5 11.5v80q0 13-9 22.5t-22.5 9.5t-23-9.5T640 991V703q0-53 37.5-90.5T768 575m-64 240q0 7 5 11.5t11 4.5h224q7 0 11.5-4.5T960 815V703q0-26-19-45t-45-19H768q-26 0-45 19t-19 45z"></svg:path>`,
})
export class WhhSortbynameascendingIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSortbysizeascendingIcon],svg[whh-sortbysizeascending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 959H576q-26 0-45-18.5t-19-45t19-45.5t45-19h384q27 0 45.5 19t18.5 45.5t-18.5 45T960 959M832 703H576q-26 0-45-18.5t-19-45t19-45t45-18.5h256q27 0 45.5 18.5t18.5 45t-18.5 45T832 703M704 448H576q-26 0-45-19t-19-45.5t19-45t45-18.5h128q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19M576.5 192q-26.5 0-45.5-19t-19-45.5t19-45T576.5 64t45 19t18.5 45t-18.5 45t-45 19M218 1015q-11 8-26 8t-26-8L11 808q-11-8-11-20t11-20h118V64q0-26 18.5-45t45-19T238 19t19 45v704h117q10 8 10 20t-10 20z"></svg:path>`,
})
export class WhhSortbysizeascendingIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSortbysizedescendingIcon],svg[whh-sortbysizedescending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 192H576q-26 0-45-19t-19-45.5t19-45T576 64h384q27 0 45.5 19t18.5 45t-18.5 45t-45.5 19m-742 823q-11 8-26 8t-26-8L11 808q-11-8-11-20t11-20h118V64q0-26 18.5-45t45-19T238 19t19 45v704h117q10 8 10 20t-10 20zm358-695h256q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19H576q-26 0-45-19t-19-45.5t19-45t45-18.5m0 256h128q27 0 45.5 18.5t18.5 45t-18.5 45T704 703H576q-26 0-45-18.5t-19-45t19-45t45-18.5m.5 255q26.5 0 45 19t18.5 45.5t-18.5 45t-45 18.5t-45.5-18.5t-19-45t19-45.5t45.5-19"></svg:path>`,
})
export class WhhSortbysizedescendingIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSoundcloudIcon],svg[whh-soundcloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M864 576H512V49Q567 0 640 0q80 0 136 56t56 136q0 37-14 71q25-7 46-7q66 0 113 47t47 113t-47 113t-113 47m-416 0h-64V132q35 7 64 29zM256 161q28-22 64-29v444h-64zM128 573V259q16-3 32-3q15 0 32 4v316h-32q-16 0-32-3M64 289v254q-30-22-47-55.5T0 416t17-71.5T64 289"></svg:path>`,
})
export class WhhSoundcloudIcon {
  readonly viewBox = input("0 0 1024 622")
  readonly width = input("1.65em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSoundleftIcon],svg[whh-soundleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 767H800q-13 0-22.5-9t-9.5-23V287q0-13 9.5-22.5T800 255t22.5 9.5T832 287v416h160q13 0 22.5 9.5t9.5 23t-9.5 22.5t-22.5 9m-427 244L324 768h-4V255h4L565 12q30-30 75 16v968q-45 46-75 15M0 704V319q0-26 18.5-45T64 255h192v513H64q-27 0-45.5-19T0 704"></svg:path>`,
})
export class WhhSoundleftIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSoundrightIcon],svg[whh-soundright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m960 575l54 135q9 10 9 23.5t-9.5 23.5t-23.5 10t-24-10l-70-182h-64v160q0 14-9.5 23t-22.5 9t-22.5-9t-9.5-23V288q0-14 9.5-23.5T800 255h96q53 0 90.5 37.5T1024 383v65q0 38-18.5 73T960 575m0-192q0-26-19-45t-45-19h-64v192h64q26 0 45-18.5t19-45.5zm-395 628L324 768h-4V255h4L565 12q30-30 75 16v968q-45 46-75 15M0 704V319q0-26 18.5-45T64 255h192v513H64q-27 0-45.5-19T0 704"></svg:path>`,
})
export class WhhSoundrightIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSoundwaveIcon],svg[whh-soundwave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 576v96q0 13-9.5 22.5T928 704t-22.5-9.5T896 672v64q0 13-9.5 22.5T864 768t-22.5-9.5T832 736V608q0 13-9.5 22.5T800 640t-22.5-9.5T768 608v256q0 13-9.5 22.5T736 896t-22.5-9.5T704 864v64q0 13-9.5 22.5T672 960t-22.5-9.5T640 928V608q0 13-9.5 22.5T608 640t-22.5-9.5T576 608v128q0 13-9.5 22.5T544 768t-22.5-9.5T512 736v64q0 13-9.5 22.5T480 832t-22.5-9.5T448 800v192q0 13-9.5 22.5T416 1024t-22.5-9.5T384 992V864q0 13-9.5 22.5T352 896t-22.5-9.5T320 864V672q0 13-9.5 22.5T288 704t-22.5-9.5T256 672v64q0 13-9.5 22.5T224 768t-22.5-9.5T192 736v-64q0 13-9.5 22.5T160 704t-22.5-9.5T128 672v-64q0 13-9.5 22.5T96 640t-22.5-9.5T64 608v-32q-27 0-45.5-19T0 511.5t18.5-45T64 448v-32q0-13 9.5-22.5T96 384t22.5 9.5T128 416v-64q0-13 9.5-22.5T160 320t22.5 9.5T192 352v-64q0-13 9.5-22.5T224 256t22.5 9.5T256 288v64q0-13 9.5-22.5T288 320t22.5 9.5T320 352V160q0-13 9.5-22.5T352 128t22.5 9.5T384 160V32q0-13 9.5-22.5T416 0t22.5 9.5T448 32v192q0-13 9.5-22.5T480 192t22.5 9.5T512 224v64q0-13 9.5-22.5T544 256t22.5 9.5T576 288v128q0-13 9.5-22.5T608 384t22.5 9.5T640 416V96q0-13 9.5-22.5T672 64t22.5 9.5T704 96v64q0-13 9.5-22.5T736 128t22.5 9.5T768 160v256q0-13 9.5-22.5T800 384t22.5 9.5T832 416V288q0-13 9.5-22.5T864 256t22.5 9.5T896 288v64q0-13 9.5-22.5T928 320t22.5 9.5T960 352v96q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19"></svg:path>`,
})
export class WhhSoundwaveIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSoupIcon],svg[whh-soup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M609 448q0 35 9 83q1 5 16.5 35.5t27 73.5t11.5 96h-64q0-1-1.5-18t-4-35.5t-6-40t-8.5-40t-12-26.5q-23-24-27.5-47.5T545 448q0-80 37.5-136t90.5-56q15 0 32 6q-42 17-69 68t-27 118M417 204q0 38 9 89q55 62 55 168q0 175-32 243q-32-145-32-243q0-77-9-89q-55-62-55-168q0-84 37.5-144T481 0q15 0 32 7q-42 17-69 72t-27 125m429 697q-21 50-54.5 86.5T721 1024H305q-37 0-71-37t-55-88q-17-10-51-29t-51-29t-38-24.5t-30-26T1 768h1024q0 15-9 29t-29.5 28t-38.5 23.5t-50.5 26T846 901"></svg:path>`,
})
export class WhhSoupIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSpaceinvadersIcon],svg[whh-spaceinvaders-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 704V512H832v192h-64v-64H256v64h-64V512H64v192H0V448h64V320h128V192h128v-64h64v64h256v-64h64v64h128v128h128v128h64v256zM384 320H256v128h128zm384 0H640v128h128zM576 768v-64h192v64zm-128 0H256v-64h192zM256 64h64v64h-64zM128 0h128v64H128zm640 64v64h-64V64zM896 0v64H768V0z"></svg:path>`,
})
export class WhhSpaceinvadersIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSpadesIcon],svg[whh-spades-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 896q-112 0-188-83q7 94 23.5 152.5T640 1024H384q20 0 36.5-58.5T444 813q-76 83-188 83q-106 0-181-75T0 640q0-78 28-149t73.5-124t100-99.5t109-83.5t100-68T484 55t28-55q0 25 28 55t73.5 61t100 68t109 83.5t100 99.5T996 491t28 149q0 106-75 181t-181 75"></svg:path>`,
})
export class WhhSpadesIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSpamIcon],svg[whh-spam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512.59 1024q-139 0-257-17T69.094 960.5T.59 896V233q73 39 210 63t302 24t302-24t210-63v663q0 35-68.5 64.5t-186.5 46.5t-257 17m384-638q-60 28-162 45t-222 17t-222-17t-161.998-45v414q0 40 112.5 68t271.5 28t271.5-28t112.5-68V386zm-320 446h-128q-20.998 0-37.998-12.5t-23-32.5q9-19 29-19h128q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-128q-13 0-22.5-9.5t-9.5-22.5v-96q0-26 19-45t45-19h128q21 0 38 12.5t23 32.5q-9 19-29 19h-128q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h128q13 0 22.5 9.5t9.5 22.5v96q0 27-18.5 45.5t-45.5 18.5zm-64-576q-139 0-257-17T69.094 192.5T.59 128t68.5-64.5T255.59 17t257-17t257 17t186.5 46.5t68.5 64.5t-68.5 64.5t-186.5 46.5t-257 17"></svg:path>`,
})
export class WhhSpamIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSpamaltIcon],svg[whh-spamalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M724 1024H300L0 724V300L300 0h424l300 300v424zM576 160q0-13-9.5-22.5T544 128h-64q-13 0-22.5 9.5T448 160v448q0 13 9.5 22.5T480 640h64q13 0 22.5-9.5T576 608zm0 640q0-13-9.5-22.5T544 768h-64q-13 0-22.5 9.5T448 800v64q0 13 9.5 22.5T480 896h64q13 0 22.5-9.5T576 864z"></svg:path>`,
})
export class WhhSpamaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSpawnIcon],svg[whh-spawn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m-42-356q-38-6-62-22.5T384 608q0-20 23.5-36.5T469 548q-20-63-71-135.5T288 283q68-31 110.5-88T445 70q-107 16-194 78T114 306T64 512q0 115 54 214t147.5 160.5T472 958q-19-2-38-5q-24-71-87-119q40-30 74-73t49-93M579 70q4 68 46.5 125T736 283q-59 57-110 129.5T555 548q38 7 61.5 23.5T640 608q0 21-24 37.5T554 668q15 50 49 93t74 73q-63 48-87 119q-19 3-38 5q113-10 206.5-71.5T906 726t54-214q0-110-50-206T773 148T579 70m125 634q16-6 30-13.5t22.5-13t20.5-16t17-15t19-19t19-19.5q15-15 23.5-47t8.5-49q11 0 21.5 19.5T896 576q0 92-61 115q-33 13-131 13M128 576q0-25 10.5-44.5T160 512q0 17 8.5 49t23.5 47q5 5 19 19.5t18.5 19t17 15t21 16t22.5 13t30 13.5h-34l-30-1l-28.5-2.5L203 696l-22.5-8l-18-12l-15.5-16.5l-10-21.5l-7-27.5z"></svg:path>`,
})
export class WhhSpawnIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSpeakerIcon],svg[whh-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 1024H64q-26 0-45-19T0 960V64q0-26 18.5-45T64 0h640q27 0 45.5 18.5T768 64v896q0 27-19 45.5t-45 18.5M384 64q-53 0-90.5 37.5T256 192t37.5 90.5T384 320t90.5-37.5T512 192t-37.5-90.5T384 64m0 384q-106 0-181 75t-75 181t75 181t181 75t181-75t75-181t-75-181t-181-75m0 384q-53 0-90.5-37.5T256 704t37.5-90.5T384 576t90.5 37.5T512 704t-37.5 90.5T384 832m0-576q-26 0-45-18.5t-19-45t19-45.5t45.5-19t45 19t18.5 45.5t-19 45t-45 18.5"></svg:path>`,
})
export class WhhSpeakerIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSpeakeraltIcon],svg[whh-speakeralt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M948.428 779q34 16 55 47.5t21 69.5q0 53-37.5 90.5t-90.5 37.5q-38 0-69.5-21t-47.5-55q-123 76-267 76t-267-76q-16 34-47.5 55t-69.5 21q-53 0-90.5-37.5T.428 896q0-38 21-69.5t55-47.5q-76-123-76-267t76-267q-34-16-55-47.5t-21-69.5q0-53 37.5-90.5t90.5-37.5q38 0 69.5 21t47.5 55q123-76 267-76t267 76q16-34 47.5-55t69.5-21q53 0 90.5 37.5t37.5 90.5q0 38-21 69.5t-55 47.5q76 123 76 267t-76 267m-852-715q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m0 832q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m416-704q-87 0-160.5 43t-116.5 116.5t-43 160.5t43 160.5t116.5 116.5t160.5 43t160.5-43t116.5-116.5t43-160.5t-43-160.5t-116.5-116.5t-160.5-43m448-96q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5m-32 800q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m-416-256q-53 0-90.5-37.5t-37.5-90.5t37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5"></svg:path>`,
})
export class WhhSpeakeraltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSpeedIcon],svg[whh-speed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M421.5 602.5Q384 565 384 512t38-91L966 59L603 603q-37 37-90.5 37t-91-37.5M512 62q-91 0-174.5 36T194 194T98.5 337T63 511q0 106 48 202l-56 28Q0 632 0 512q0-105 40.5-199.5t109-163T313 40.5T512 0q161 0 293 92l-57 38Q639 62 512 62m421 158q91 132 91 292q0 120-55 229l-56-29q48-95 48-201q0-125-66-234z"></svg:path>`,
})
export class WhhSpeedIcon {
  readonly viewBox = input("0 0 1024 741")
  readonly width = input("1.39em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSpeedaltIcon],svg[whh-speedalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5M340 509l87 228q-43 38-43 95q0 53 37.5 90.5T512 960t90.5-37.5T640 832q0-50-34-86.5T522 705L407 476q-1-2-4-7q-9-19-15-30.5T371.5 410T351 387t-18 0q-12 9-13 33t5.5 47.5T340 509M512 64q-91 0-174 35.5T195 195T99.5 338T64 512h2q8-106 65-194t149-139t200-51t200 51t149 139t65 194h66q0-91-35.5-174T829 195T686 99.5T512 64"></svg:path>`,
})
export class WhhSpeedaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSphereIcon],svg[whh-sphere-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m106.5-808.5Q576 142 478 130t-195.5 44.5T146 323t3.5 165.5T290 574t195.5-44.5T622 381t-3.5-165.5M829 790q-5-13-13.5-18.5t-25-1.5t-38.5 22q-32 28-42 46.5t-3 35.5q5 13 13.5 18.5T746 894t38-22q32-28 42-46.5t3-35.5"></svg:path>`,
})
export class WhhSphereIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSpiderIcon],svg[whh-spider-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 640q0 43-.5 65.5t-4 61.5t-11.5 66t-21.5 61.5T886 961t-54 63q29-88 44.5-159t17.5-98.5t2-62.5q0-23-14.5-43t-37-33.5t-43-22.5t-40.5-15q7 22 7 50q0 30-.5 49t-4 56t-12 63.5T730 866t-36 55t-54 39q30-59 45-115t17-84t2-71q0-47-18-71.5T633 584q-11 69-35.5 140t-57 121.5T480 896t-60.5-50.5t-57-121.5T327 584q-35 10-53 34.5T256 690q0 43 2 71t17 84t45 115q-31-15-54-39t-36-55t-21.5-57.5t-12-63.5t-4-56t-.5-49q0-28 7-50q-20 6-40.5 15t-43 22.5t-37 33.5T64 704q0 35 2 62.5T83.5 865t44.5 159q-36-36-62-82.5T27.5 857t-19-87T1 698t-1-58q0-27 11.5-47.5t34.5-34T96.5 536t66-14t74.5-7t83-3q-51-1-87-4t-70-11t-54.5-21.5T76 439t-12-55q0-35 1-58t7.5-72t19-86.5T130 83t62-83q-64 192-64 359q0 55 71 75q-7-22-7-50q0-30 .5-49t4-56t12-63.5T230 158t36-55t54-39q-30 59-45 115t-17 84t-2 71q0 54 23.5 78.5T349 444q24-27 60.5-43.5T480 384t70.5 16.5T611 444q46-7 69.5-31.5T704 334q0-43-2-71t-17-84t-45-115q31 15 54 39t36 55t21.5 57.5t12 63.5t4 56t.5 49q0 28-7 50q71-20 71-75q0-167-64-359q31 31 54 63t36.5 66.5T880 191t11.5 66t4 61.5t.5 65.5q0 32-12 55t-32.5 36.5T797 497t-70 11t-87 4q47 1 83 3t74.5 7t66 14t50.5 22.5t34.5 34T960 640M384 288q0-40 28-68t68-28t68 28t28 68t-28 68t-68 28t-68-28t-28-68"></svg:path>`,
})
export class WhhSpiderIcon {
  readonly viewBox = input("0 0 960 1024")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSpidermanIcon],svg[whh-spiderman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M798 710q-81 67-212 101L454 574l198-357q106 23 179 58q4 25 4 45v85.5l-1 52l-3.5 63.5l-6.5 61l-10.5 67zM657 461q-47 21-95 54.5T514 564q0 19 5.5 32.5t18 21.5t23.5 13t31 7t31.5 2.5t33.5.5q114 0 114-257q0 1-12.5 12.5t-41 31T657 461m62-364q70 57 99 131q-56-40-136-65zm-269 31V0q119 6 215 61l-47 85q-78-16-168-18M284 881q52 13 101 16v127q-75-10-149-57zm101-183v134q-37-2-70-7zm0-506v258L250 205q69-11 135-13M171 63Q267 8 385 0v128q-90 3-168 19zm-54 36l36 64q-80 25-135 64q29-72 99-128m264 475L249 812q-125-32-205-97Q0 576 0 320q0-20 5-45q73-35 178-57zM64 384q0 257 114 257q22 0 33.5-.5T243 638t31-6.5t23.5-13t18-22T321 564q0-15-48-48.5T178 461q-32-14-60.5-33.5T77 396zm120 545q-74-63-115-151q64 52 152 84zm266-479V192q67 2 136 13zm0 383V698l70 127q-36 6-70 8m150 136q-76 47-150 55V897q49-3 101-16zm53-38l-39-70q95-34 162-91q-43 94-123 161"></svg:path>`,
})
export class WhhSpidermanIcon {
  readonly viewBox = input("0 0 835 1024")
  readonly width = input("0.82em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSpiderwebIcon],svg[whh-spiderweb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1015.14 118l-54 53l63 373l-63 373l53 52q9 10 9 23t-9.5 22t-22.5 9t-22-9l-52-52l-373 62l-373-62l-52 52q-10 9-23 9t-22-9t-9-22t9-23l52-52l-57-341h-37q-13 0-22.5-9.5T.14 544t9.5-22.5t22.5-9.5h37l57-341l-53-53q-9-9-9-22t9-22.5t22-9.5t23 9l53 54l341-57V32q0-13 9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5v38l341 57l53-54q9-9 22.5-9t22.5 9.5t9 22.5t-9 22m-439 837l286-48l-73-72l-213 53zm0-628l117 23l45-45l-162-41zm121 185l-12-64l-64 64zm-76 64l64 64l12-64zm117-181l23 117h63l-41-162zm23 181l-23 117l45 46l41-163zm-185 248l162-41l-45-45l-117 24zm0-126l64-13l-64-64zm0-231l64-64l-64-12zm-250 45l24-117l-46-45l-40 162zm-62 64l41 163l45-46l-24-117zm85 207l163 41v-62l-117-24zm118-271l-64-64l-13 64zm-77 64l13 64l64-64zm58 109l64 13v-77zm64-218v-76l-64 12zm0 488v-67l-214-53l-72 72zm-331-93l72-72l-53-214h-67zm-48-350h67l53-213l-72-73zm379-378l-286 47l72 73l214-54zm-163 171l46 45l117-23v-63zm227-171v66l213 54l73-73zm331 92l-73 73l54 213h66zm-19 350l-54 214l73 72l47-286z"></svg:path>`,
})
export class WhhSpiderwebIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSplitIcon],svg[whh-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1006.83 238q-18 18-43.5 18t-43.5-18l-24-24v170q0 55-10 100t-32 80.5t-60 55.5t-89 20q-53 0-90.5 37t-37.5 90v192q0 27-19 45.5t-45 18.5t-45-18.5t-19-45.5V767q0-53-37.5-90t-90.5-37q-51 0-89-20t-60-55.5t-32-80.5t-10-100V214l-24 24q-18 18-43.5 18t-43.5-18t-18-43.5t18-43.5l120-120q6-11 9-13q18-19 46-18q27-1 45 18q6 5 11 14l118 119q18 18 18 43.5t-18 43.5t-43.5 18t-43.5-18l-24-24v170q0 58 23 93t73 35h32q53 0 90.5 37.5t37.5 90.5q0-53 37.5-90.5t90.5-37.5h32q50 0 73-35t23-93V214l-24 24q-18 18-43.5 18t-43.5-18t-18-43.5t18-43.5l120-120q6-11 9-13q18-19 46-18q27-1 45 18q6 5 11 14l118 119q18 18 18 43.5t-18 43.5"></svg:path>`,
})
export class WhhSplitIcon {
  readonly viewBox = input("0 0 1025 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSplitaltIcon],svg[whh-splitalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1007.045 257l-88-53l-164 292q78 91 78 209q0 87-43 160.5T673.545 982t-160.5 43t-160.5-43t-116.5-116.5t-43-160.5q0-118 78-209l-164-292l-88 53q-5 3-12.5-5t-5.5-16l66-218q3-9 10.5-14t16.5-2l215 50q8 2 11 12.5t-2 13.5l-100 60l156 279q66-32 138.5-32t139.5 32l156-279l-100-60q-5-3-2-13.5t11-12.5l215-50q9-3 16.5 2t10.5 14l66 218q2 8-5.5 16t-12.5 5m-494 256q-79 0-135.5 56.5t-56.5 136t56.5 135.5t136 56t135.5-56t56-135.5t-56.5-136t-135.5-56.5"></svg:path>`,
})
export class WhhSplitaltIcon {
  readonly viewBox = input("0 0 1026 1025")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSplitthreeIcon],svg[whh-splitthree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1021 856l-116 163q-4 5-9.5 5t-9.5-5L770 856q-6-10 4-24h58V704q0-26-16.5-52.5T768 600t-60.5-45.5t-70-46.5t-61.5-43v367h58q10 14 3 24l-116 163q-3 5-9 5t-10-5L387 856q-7-10 3-24h58V470q-22 16-61.5 41.5T317 557t-60.5 44.5T209 652t-17 52v128h58q10 14 3 24l-115 163q-4 5-10 5t-9-5L3 856q-7-10 3-24h58V640q0-30 28.5-64.5t71-65.5t92.5-65.5t92.5-64.5t71-63t28.5-61V64q0-26 19-45t45.5-19t45 19T576 64v192q0 27 28.5 59.5t71 62.5t92.5 65t92.5 66t71 66t28.5 65v192h58q10 14 3 24"></svg:path>`,
})
export class WhhSplitthreeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSpockIcon],svg[whh-spock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m765 213l-60 491q-6 54-18 106.5T662 900t-25 66t-20 44t-8 14H257q-5-5-13.5-14t-31-34.5t-39-48.5t-30.5-50t-14-45q0-38-27.5-122T46 561l-27-65Q0 477 0 449.5t19-47T65 383t46 20q0 2 1.5 6t5 15.5t7.5 23t9.5 27t11 29t12 27.5t12.5 23.5t12 15.5t11 6l-64-437q-4-26 10.5-48T178 65q17-1 34.5 0t31 17t13.5 46V64q0-27 19-45.5T321.5 0t45 18.5T385 64l64 384q7-2 15-10.5t11-21.5l50-297q4-27 23.5-42.5t44-11.5T631 91t10 48v53q23-64 64-64q37 0 53.5 28.5T765 213"></svg:path>`,
})
export class WhhSpockIcon {
  readonly viewBox = input("0 0 769 1025")
  readonly width = input("0.76em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSpoonIcon],svg[whh-spoon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M991.613 989.5q-25.5 25.5-58.5 32t-70.5-9.5t-72.5-54l-358-419q-46 29-95.5 35.5t-103-13.5t-103.5-70q-62-62-97.5-145.5t-31.5-164T53.613 53t129-52t164 31.5t145.5 97.5q49 49 69.5 103t13.5 103t-36 96l420 356q38 34 54.5 72t10 71t-32 58.5"></svg:path>`,
})
export class WhhSpoonIcon {
  readonly viewBox = input("0 0 1026 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSpotifyIcon],svg[whh-spotify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M775 951q-52-84-138.5-133.5T448 768q-81 0-154 32.5T168 890Q89 818 44.5 720T0 512q0-104 40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199q0 138-67.5 254T775 951M316 658q67-18 132-18q120 0 229 54l28-57q-122-61-257-61q-73 0-148 20zm-49-186q92-24 181-24q165 0 315 75l28-57q-163-82-343-82q-98 0-198 27zm181-280q-126 0-247 32l16 63q117-31 231-31q210 0 400 95l29-58Q675 192 448 192m208 811q-72 21-144 21q-126 0-238-59q74-69 174-69q63 0 117.5 29t90.5 78"></svg:path>`,
})
export class WhhSpotifyIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSprayIcon],svg[whh-spray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 192q-13 0-22.5-9.5T960 160t9.5-22.5T992 128t22.5 9.5t9.5 22.5t-9.5 22.5T992 192M928 64q-13 0-22.5-9.5T896 32t9.5-22.5T928 0t22.5 9.5T960 32t-9.5 22.5T928 64m-64 128q-13 0-22.5-9.5T832 160t9.5-22.5T864 128t22.5 9.5T896 160t-9.5 22.5T864 192m-64-96q-13 0-22.5-9.5T768 64t9.5-22.5T800 32t22.5 9.5T832 64t-9.5 22.5T800 96m-64 96q-13 0-22.5-9.5T704 160t9.5-22.5T736 128t22.5 9.5T768 160t-9.5 22.5T736 192m-64-64q-13 0-22.5-9.5T640 96t9.5-22.5T672 64t22.5 9.5T704 96t-9.5 22.5T672 128m-64 64q-13 0-22.5-9.5T576 160t9.5-22.5T608 128t22.5 9.5T640 160t-9.5 22.5T608 192m-128 0q-13 0-22.5-9.5T448 160t9.5-22.5T480 128t22.5 9.5T512 160t-9.5 22.5T480 192m142 212q18 18 18 44v448q0 53-37.5 90.5T512 1024H128q-53 0-90.5-37.5T0 896V450q-1-27 17-46l175-174V64q0-26 19-45t45-19h128q27 0 45.5 19T448 64v167zm50-212q13 0 22.5 9.5T704 224t-9.5 22.5T672 256t-22.5-9.5T640 224t9.5-22.5T672 192m128 32q13 0 22.5 9.5T832 256t-9.5 22.5T800 288t-22.5-9.5T768 256t9.5-22.5T800 224m128 32q13 0 22.5 9.5T960 288t-9.5 22.5T928 320t-22.5-9.5T896 288t9.5-22.5T928 256"></svg:path>`,
})
export class WhhSprayIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSpreadsheetIcon],svg[whh-spreadsheet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-64-64h96q13 0 22.5-9.5t9.5-22.5v-32h-128zm0-128h128v-64h-128zm0-128h128v-64h-128zm0-128h128v-64h-128zm128-128v-64h-128v64zm-320 512h128v-64h-128zm0-128h128v-64h-128zm0-128h128v-64h-128zm0-128h128v-64h-128zm128-128v-64h-128v64zm-320 512h128v-64h-128zm0-128h128v-64h-128zm0-128h128v-64h-128zm0-128h128v-64h-128zm128-128v-64h-128v64zm-320 480q0 13 9.5 22.5t22.5 9.5h96v-64h-128zm0-96h128v-64h-128zm0-128h128v-64h-128zm0-128h128v-64h-128zm128-128v-64h-128v64zm0-320h-96q-13 0-22.5 9.5t-9.5 22.5v32h128zm-128 128v64h128v-64zm320-128h-128v64h128zm-128 128v64h128v-64zm320-128h-128v64h128zm-128 128v64h128v-64zm320-96q0-13-9.5-22.5t-22.5-9.5h-96v64h128zm0 96h-128v64h128z"></svg:path>`,
})
export class WhhSpreadsheetIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSputnikIcon],svg[whh-sputnik-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1015 246L503 701q9 33 9 67q0 5-1 13t-1 9l467-274q11-6 23.5-2.5t19 15t3 24T1008 572L486 878q-19 38-42 64q-116-39-219.5-142.5T82 580q26-23 63-42L452 16q7-11 19.5-14.5t24 3t15 19T508 47L234 514q1 0 9-1t13-1q33 0 67 9L778 9q9-9 22-9t22.5 9.5T832 32t-9 22L385 547q58 34 92 92l493-438q9-9 22-9t22.5 9.5t9.5 22.5t-9 22M426 959q-73 65-170 65q-106 0-181-75T0 768q0-97 65-170q8 146 111.5 249.5T426 959"></svg:path>`,
})
export class WhhSputnikIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquareaIcon],svg[whh-squarea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-192-640q0-53-37.5-90.5t-90.5-37.5h-128q-53 0-90.5 37.5t-37.5 90.5v352q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5V592q0-6 4.5-11t11.5-5h224q7 0 11.5 4.5t4.5 11.5v144q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5zm-80 128h-224q-7 0-11.5-4.5t-4.5-11.5V384q0-26 19-45t45-19h128q27 0 45.5 19t18.5 45v112q0 7-4.5 11.5t-11.5 4.5"></svg:path>`,
})
export class WhhSquareaIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquareappIcon],svg[whh-squareapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832.955 1024h-640q-80 0-136-56.5T.955 832V192q0-80 56-136t136-56h640q79 0 135.5 56t56.5 136v640q0 79-56.5 135.5t-135.5 56.5m0-800q0-13-9.5-22.5t-22.5-9.5h-576q-13 0-22.5 9.5t-9.5 22.5v576q0 13 9.5 22.5t22.5 9.5h576q13 0 22.5-9.5t9.5-22.5zm-224 416h-192q-13 0-22.5-9.5t-9.5-22.5V416q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5"></svg:path>`,
})
export class WhhSquareappIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquarebIcon],svg[whh-squareb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-192-448q0-58-44-96q44-38 44-96q0-53-37.5-90.5t-90.5-37.5h-224q-13 0-22.5 9.5t-9.5 22.5v448q0 13 9.5 22.5t22.5 9.5h224q53 0 90.5-37.5t37.5-90.5zm-128 128h-176q-7 0-11.5-4.5t-4.5-11.5V528q0-7 4.5-11.5t11.5-4.5h176q26 0 45 19t19 45v64q0 27-19 45.5t-45 18.5m0-256h-176q-7 0-11.5-4.5t-4.5-11.5v-96q0-6 4.5-11t11.5-5h176q26 0 45 19t19 45.5t-19 45t-45 18.5"></svg:path>`,
})
export class WhhSquarebIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquarebackIcon],svg[whh-squareback-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-448-756q-19-20-31-6l-218 232q-7 7-7 18.5t7 19.5l218 231q12 13 31-7zm320 0q-18-20-31-6l-218 232q-7 7-7 18.5t7 19.5l218 231q13 13 31-7z"></svg:path>`,
})
export class WhhSquarebackIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquarebookmarkIcon],svg[whh-squarebookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-192-752q0-33-23-56.5t-55-23.5h-228q-32 0-55 23.5t-23 56.5v520q0 15 11 27.5t21 12.5l160-128l160 128q10 0 21-12.5t11-27.5z"></svg:path>`,
})
export class WhhSquarebookmarkIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquarebracketsIcon],svg[whh-squarebrackets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-128q-26 0-45-19t-19-45.5t19-45t45-18.5h96q13 0 22.5-9.5t9.5-22.5V160q0-13-9.5-22.5t-22.5-9.5h-96q-26 0-45-18.5t-19-45t19-45.5t45-19h128q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-736-128h96q26 0 45 18.5t19 45t-19 45.5t-45 19h-128q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h128q26 0 45 19t19 45.5t-19 45t-45 18.5h-96q-13 0-22.5 9.5t-9.5 22.5v704q0 13 9.5 22.5t22.5 9.5"></svg:path>`,
})
export class WhhSquarebracketsIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquarecIcon],svg[whh-squarec-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-448-704h128q26 0 45 19t19 45q0 13 9 22.5t22.5 9.5t23-9.5t9.5-22.5q0-53-37.5-90.5t-90.5-37.5h-128q-53 0-91 37.5t-38 90.5v256q0 53 38 90.5t91 37.5h128q53 0 90.5-37.5t37.5-90.5q0-13-9.5-22.5t-23-9.5t-22.5 9.5t-9 22.5q0 27-19 45.5t-45 18.5h-128q-27 0-45.5-18.5t-18.5-45.5V384q0-26 18.5-45t45.5-19"></svg:path>`,
})
export class WhhSquarecIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquarecommentIcon],svg[whh-squarecomment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-384-832q-87 0-160.5 38.5t-116.5 105t-43 144.5q0 59 25.5 112.5t70.5 93.5q-3 37-12.5 80t-19.5 66h1q34 0 80.5-21.5t76.5-56.5q48 14 98 14q87 0 160.5-38.5t116.5-105t43-144.5t-43-144.5t-116.5-105t-160.5-38.5"></svg:path>`,
})
export class WhhSquarecommentIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquaredIcon],svg[whh-squared-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-193-640q0-53-37.5-90.5t-90.5-37.5h-223q-14 0-23 9.5t-9 22.5v448q0 13 9 22.5t23 9.5h223q53 0 90.5-37.5t37.5-90.5zm-128 320h-175q-7 0-11.5-4.5t-4.5-11.5V336q0-6 4.5-11t11.5-5h175q27 0 45.5 19t18.5 45v256q0 27-18.5 45.5t-45.5 18.5"></svg:path>`,
})
export class WhhSquaredIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquaredribbbleIcon],svg[whh-squaredribbble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-75-429q-62-19-149-19q-25 0-56 9q20 109 24 220q66-29 113.5-84t67.5-126m-246 231q-3-101-24-212q-19 12-39 26q-53 38-83.5 77t-40.5 90q59 25 124 25q32 0 63-6m-383-314q0 79 36 147.5t98 112.5q38-116 134-184q38-27 76-44q-9-38-19-66q-75 35-155 34q-88-1-168-34q-2 18-2 34m16-100q78 36 144 36q62 0 138-34q-54-111-157-166q-91 61-125 164m304-220q-57 0-114 22q103 54 155 163q91-66 112-146q-71-39-153-39m205 74q-39 107-130 171q-1 1-9 6q12 34 24 78q42-9 84-9q72 1 144 25q2-23 2-25q0-73-30.5-137t-84.5-109"></svg:path>`,
})
export class WhhSquaredribbbleIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquareeIcon],svg[whh-squaree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-496-512h208q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-208q-7 0-11.5-4.5t-4.5-11.5v-96q0-7 4.5-11.5t11.5-4.5h272q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-320q-13 0-22.5 9.5t-9.5 22.5v448q0 13 9.5 22.5t22.5 9.5h320q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-272q-7 0-11.5-4.5t-4.5-11.5V528q0-7 4.5-11.5t11.5-4.5"></svg:path>`,
})
export class WhhSquareeIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquareeightIcon],svg[whh-squareeight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-192-448q0-58-43-96q43-38 43-96q0-53-37.5-90.5t-90.5-37.5h-128q-53 0-90.5 37.5t-37.5 90.5q0 58 43 96q-43 38-43 96v64q0 53 37.5 90.5t90.5 37.5h128q53 0 90.5-37.5t37.5-90.5zm-128 128h-128q-27 0-45.5-18.5t-18.5-45.5v-64q0-26 18.5-45t45.5-19h128q27 0 45.5 19t18.5 45v64q0 27-18.5 45.5t-45.5 18.5m0-256h-128q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45.5-19h128q27 0 45.5 19t18.5 45.5t-18.5 45t-45.5 18.5"></svg:path>`,
})
export class WhhSquareeightIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquarefIcon],svg[whh-squaref-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-224-768h-321q-13 0-22.5 9.5t-9.5 22.5v448q0 13 9.5 22.5t23 9.5t22.5-9.5t9-22.5V528q0-7 5-11.5t11-4.5h209q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-209q-6 0-11-4.5t-5-11.5v-96q0-7 5-11.5t11-4.5h273q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5"></svg:path>`,
})
export class WhhSquarefIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquarefiveIcon],svg[whh-squarefive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-192-448q0-53-37.5-90.5t-90.5-37.5h-176q-7 0-11.5-4.5t-4.5-11.5v-96q0-6 4.5-11t11.5-5h272q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-320q-13 0-22.5 9.5t-9.5 22.5v160q0 27 18.5 45.5t45.5 18.5h192q27 0 45.5 19t18.5 45v64q0 27-18.5 45.5t-45.5 18.5h-128q-27 0-45.5-18.5t-18.5-45.5q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5q0 53 37.5 90.5t90.5 37.5h128q53 0 90.5-37.5t37.5-90.5z"></svg:path>`,
})
export class WhhSquarefiveIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquareforwardIcon],svg[whh-squareforward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-391-531l-218-231q-13-14-31 6v488q18 20 31 7l218-232q7-7 7-18.5t-7-19.5m320 0l-218-231q-12-14-31 6v488q19 20 31 7l218-232q7-7 7-18.5t-7-19.5"></svg:path>`,
})
export class WhhSquareforwardIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquarefourIcon],svg[whh-squarefour-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-192-736q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v160q0 27-18.5 45.5t-45.5 18.5h-128q-26 0-45-18.5t-19-45.5V288q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v160q0 53 37.5 90.5t90.5 37.5h128q34 0 64-17v177q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5z"></svg:path>`,
})
export class WhhSquarefourIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquaregIcon],svg[whh-squareg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-193-480q0-13-9-22.5t-23-9.5h-127q-14 0-23.5 9.5t-9.5 22.5t9.5 22.5t23.5 9.5h95v64q0 27-18.5 45.5t-45.5 18.5h-128q-26 0-44.5-18.5t-18.5-45.5V384q0-26 18.5-45t44.5-19h128q27 0 45.5 19t18.5 45q0 13 9.5 22.5t23 9.5t22.5-9.5t9-22.5q0-53-37.5-90.5t-90.5-37.5h-128q-53 0-90 37.5t-37 90.5v256q0 53 37 90.5t90 37.5h128q53 0 90.5-37.5t37.5-90.5z"></svg:path>`,
})
export class WhhSquaregIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquaregithubIcon],svg[whh-squaregithub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-258q2-13 2-25q0-85-19.5-170.5t-54.5-127.5q130-11 198-76.5t68-169.5q0-91-64-140v-91q0-10-11-21t-21-11q-12 0-119 70q-47-6-105-6t-105 6q-107-70-119-70q-10 0-21 11t-11 21q0 9-2 44t-3 51q-59 49-59 136q0 104 68 169.5t198 76.5q-5 7-14 21q-43 46-124 46q-16 0-32-13t-31.5-32t-32.5-38t-42-32t-54-13q0 8 10 20.5t26.5 33t27.5 42.5q26 51 54 73.5t74 22.5q48 0 87-14q-23 88-23 181q0 12 2 25h-258q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5"></svg:path>`,
})
export class WhhSquaregithubIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquarehIcon],svg[whh-squareh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-192-736q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v208q0 7-5 11.5t-11 4.5h-224q-7 0-12-4.5t-5-11.5V288q0-13-9-22.5t-22.5-9.5t-23 9.5t-9.5 22.5v448q0 13 9.5 22.5t23 9.5t22.5-9.5t9-22.5V592q0-7 5-11.5t12-4.5h224q6 0 11 4.5t5 11.5v144q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5z"></svg:path>`,
})
export class WhhSquarehIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquareheartIcon],svg[whh-squareheart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-224-832q-66 0-113 47t-47 113q0-66-47-113t-113-47t-113 47t-47 113q0 80 31 148.5t105 143.5l184 188l183-188q75-76 106-144t31-148q0-66-47-113t-113-47"></svg:path>`,
})
export class WhhSquareheartIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquareiIcon],svg[whh-squarei-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-352-704q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-128q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h32v384h-32q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h128q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-32V320z"></svg:path>`,
})
export class WhhSquareiIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquarejIcon],svg[whh-squarej-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-224-768q-13 0-22.5 9.5t-9.5 22.5v352q0 27-19 45.5t-45 18.5h-128q-27 0-45.5-18.5t-18.5-45.5q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5q0 53 37.5 90.5t90.5 37.5h128q53 0 90.5-37.5t37.5-90.5V288q0-13-9.5-22.5t-22.5-9.5"></svg:path>`,
})
export class WhhSquarejIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquarekIcon],svg[whh-squarek-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-192-448q0-58-43-96q43-38 43-96v-96q0-13-9-22.5t-22.5-9.5t-23 9.5t-9.5 22.5v96q0 27-18.5 45.5t-45.5 18.5h-192V288q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v448q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5V512h192q27 0 45.5 19t18.5 45v160q0 13 9.5 22.5t23 9.5t22.5-9.5t9-22.5z"></svg:path>`,
})
export class WhhSquarekIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquarelIcon],svg[whh-squarel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-224-320h-288V288q0-13-9-22.5t-22.5-9.5t-23 9.5t-9.5 22.5v448q0 13 9.5 22.5t22.5 9.5h320q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5"></svg:path>`,
})
export class WhhSquarelIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquarelikeIcon],svg[whh-squarelike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-244-552q-3 0-7-.5t-14-2.5t-18-5.5t-14.5-12t-6.5-19.5q0-13 7.5-23.5t16.5-17.5t16.5-25.5t7.5-45.5v-64q0-27-15-45.5t-33-18.5q-17 0-28.5 11.5t-11.5 28.5v20q0 21-13.5 42.5t-31 37.5t-40.5 38.5t-35 41.5q-7 9-20 22.5t-38 32.5t-62.5 32t-79.5 13q-2 0-3 1q-14 2-25.5 29.5t-11.5 49.5v160q0 19 11 29.5t29 10.5q20 0 80 20t80 20h320q16 0 28-12t12-28.5t-12-28t-28-11.5h40q17 0 28.5-12t11.5-28.5t-11.5-28t-28.5-11.5q17 0 28.5-12t11.5-28.5t-11.5-28t-28.5-11.5h40q17 0 28.5-12t11.5-28q0-31-53.5-55.5t-126.5-24.5"></svg:path>`,
})
export class WhhSquarelikeIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquaremIcon],svg[whh-squarem-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-192-735q0-14-10-23.5t-22-9.5q-16 0-27 16l-133 186l-132-186q-12-16-28-16q-13 0-22.5 9.5t-9.5 23.5v447q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5V388l100 140q11 15 28 15q16 0 28-15l100-140v348q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5z"></svg:path>`,
})
export class WhhSquaremIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquarenIcon],svg[whh-squaren-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-192-736q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v349l-260-365q-12-16-28-16q-11 0-21.5 9t-10.5 24v447q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5V387l260 365q12 16 28 16t24-9.5t8-22.5z"></svg:path>`,
})
export class WhhSquarenIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquarenextIcon],svg[whh-squarenext-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-448-704q0-26-18.5-45t-45.5-19h-64q-26 0-45 19t-19 45v384q0 27 19 45.5t45 18.5h64q27 0 45.5-18.5t18.5-45.5zm377 173l-218-231q-13-14-31 6v488q19 20 31 7l218-231q7-8 7-19.5t-7-19.5"></svg:path>`,
})
export class WhhSquarenextIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquarenineIcon],svg[whh-squarenine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-192-640q0-53-37.5-90.5t-90.5-37.5h-128q-53 0-90.5 37.5t-37.5 90.5v64q0 53 37.5 90.5t90.5 37.5h128q34 0 64-17v81q0 26-19 45t-45 19h-128q-26 0-45-19t-19-45q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5q0 53 37.5 90.5t90.5 37.5h128q53 0 90.5-37.5t37.5-90.5zm-128 128h-128q-26 0-45-19t-19-45v-64q0-27 19-45.5t45-18.5h128q27 0 45.5 18.5t18.5 45.5v64q0 26-18.5 45t-45.5 19"></svg:path>`,
})
export class WhhSquarenineIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquareoIcon],svg[whh-squareo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-192-640q0-53-37.5-90.5t-90.5-37.5h-128q-53 0-90.5 37.5t-37.5 90.5v256q0 53 37.5 90.5t90.5 37.5h128q53 0 90.5-37.5t37.5-90.5zm-128 320h-128q-26 0-45-18.5t-19-45.5V384q0-26 19-45t45-19h128q27 0 45.5 19t18.5 45v256q0 27-18.5 45.5t-45.5 18.5"></svg:path>`,
})
export class WhhSquareoIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquareoneIcon],svg[whh-squareone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-288-320h-32V384q0-65-42.5-96.5t-117.5-31.5q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h1q43 0 69 18.5t26 45.5v320h-96q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5"></svg:path>`,
})
export class WhhSquareoneIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquarepIcon],svg[whh-squarep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-192-640q0-53-37.5-90.5t-90.5-37.5h-224q-13 0-22.5 9.5t-9.5 22.5v448q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5V576h192q53 0 90.5-37.5t37.5-90.5zm-128 128h-192V320h192q27 0 45.5 19t18.5 45v64q0 27-18.5 45.5t-45.5 18.5"></svg:path>`,
})
export class WhhSquarepIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquarepauseIcon],svg[whh-squarepause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-448-704q0-26-18.5-45t-45.5-19h-64q-26 0-45 19t-19 45v384q0 27 19 45.5t45 18.5h64q27 0 45.5-18.5t18.5-45.5zm320 0q0-26-18.5-45t-45.5-19h-64q-26 0-45 19t-19 45v384q0 27 19 45.5t45 18.5h64q27 0 45.5-18.5t18.5-45.5z"></svg:path>`,
})
export class WhhSquarepauseIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquareplayIcon],svg[whh-squareplay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-136-531l-409-232q-12-13-31 7v488q18 20 31 7l409-232q8-8 8-19t-8-19"></svg:path>`,
})
export class WhhSquareplayIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquarepreviousIcon],svg[whh-squareprevious-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-448-756q-18-20-31-6l-218 231q-7 8-7 19.5t7 18.5l218 232q12 13 31-7zm320 52q0-26-19-45t-45-19h-64q-27 0-45.5 19t-18.5 45v384q0 27 18.5 45.5t45.5 18.5h64q26 0 45-18.5t19-45.5z"></svg:path>`,
})
export class WhhSquarepreviousIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquareqIcon],svg[whh-squareq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-192-384V384q0-53-37.5-90.5t-90.5-37.5h-128q-53 0-90.5 37.5t-37.5 90.5v256q0 53 37.5 90.5t90.5 37.5h128q35 0 66-18l9 9q9 9 22 9t22-9t9-22t-9-22l-9-9q18-31 18-66m-140-55q-9-9-21.5-9t-21.5 9t-9 21.5t9 21.5l73 73q-10 3-18 3h-128q-26 0-45-18.5t-19-45.5V384q0-26 19-45t45-19h128q26 0 45 19t19 45v256q0 8-3 18z"></svg:path>`,
})
export class WhhSquareqIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquarequoraIcon],svg[whh-squarequora-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-128-544q0-119-75-203.5t-181-84.5t-181 84.5t-75 203.5t75 203.5t181 84.5q63 0 118-33q21 14 52 23.5t54 9.5q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5q-24 0-44-19q76-85 76-205m-224 96q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5q24 0 44 19q-34 45-76 45q-53 0-90.5-65.5t-37.5-158.5t37.5-158.5t90.5-65.5t90.5 65.5t37.5 158.5q0 60-18 114q-42-18-78-18"></svg:path>`,
})
export class WhhSquarequoraIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquarerIcon],svg[whh-squarer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-192-640q0-53-37.5-90.5t-90.5-37.5h-224q-13 0-22.5 9.5t-9.5 22.5v448q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5V576h192q27 0 45.5 19t18.5 45v96q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5v-96q0-58-43-96q43-38 43-96zm-128 128h-192V320h192q27 0 45.5 19t18.5 45v64q0 27-18.5 45.5t-45.5 18.5"></svg:path>`,
})
export class WhhSquarerIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquarerecordIcon],svg[whh-squarerecord-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-384-768q-106 0-181 75t-75 181t75 181t181 75t181-75t75-181t-75-181t-181-75"></svg:path>`,
})
export class WhhSquarerecordIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquaresIcon],svg[whh-squares-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-320-768h-128q-53 0-90.5 37.5t-37.5 90.5t37.5 90.5t90.5 37.5h128q26 0 45 19t19 45v64q0 27-19 45.5t-45 18.5h-128q-27 0-45.5-18.5t-18.5-45.5q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5q0 53 37.5 90.5t90.5 37.5h128q53 0 90.5-37.5t37.5-90.5v-64q0-53-37.5-90.5t-90.5-37.5h-128q-26 0-45-18.5t-19-45t19-45.5t45-19h128q27 0 45.5 19t18.5 45q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5q0-53-37.5-90.5t-90.5-37.5"></svg:path>`,
})
export class WhhSquaresIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquaresearchIcon],svg[whh-squaresearch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-76-261l-110-110q58-77 58-173q0-119-84.5-203.5t-203.5-84.5t-203.5 84.5t-84.5 203.5t84.5 203.5t203.5 84.5q96 0 173-58l110 110q12 12 28.5 12t28.5-12t12-28.5t-12-28.5m-340-59q-93 0-158.5-65.5t-65.5-158.5t65.5-158.5t158.5-65.5t158.5 65.5t65.5 158.5t-65.5 158.5t-158.5 65.5"></svg:path>`,
})
export class WhhSquaresearchIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquaresettingsIcon],svg[whh-squaresettings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-128-512q0-23-6-51l68-65q7-6-3-23l-44-67q-10-16-21-14l-85 26q-36-31-77-46l-17-70q-3-10-24-10h-85q-21 0-24 10l-19 67q-45 15-84 49l-85-26q-11-2-21 14l-44 67q-10 17-2 23l67 65q-6 28-6 51t6 51l-67 65q-8 6 2 23l44 67q10 16 21 14l85-26q36 31 77 46l17 70q3 10 24 10h85q21 0 24-10l19-67q45-15 84-49l85 26q11 2 21-14l44-67q10-17 3-23l-68-65q6-28 6-51m-256 128q-53 0-90.5-37.5t-37.5-90.5t37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5"></svg:path>`,
})
export class WhhSquaresettingsIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquaresevenIcon],svg[whh-squareseven-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-320-768h-224q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h224q27 0 45.5 19t18.5 45q4 43-16 80q-33 61-128 240q-16 22-16 32q0 12 10 22t22 10q13 0 22.5-9.5t9.5-22.5l144-272q16-30 16-80q0-53-37.5-90.5t-90.5-37.5"></svg:path>`,
})
export class WhhSquaresevenIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquaresixIcon],svg[whh-squaresix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-192-448q0-53-37.5-90.5t-90.5-37.5h-128q-34 0-64 17v-81q0-26 18.5-45t45.5-19h128q26 0 45 19t19 45q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5q0-53-37.5-90.5t-90.5-37.5h-128q-53 0-90.5 37.5t-37.5 90.5v256q0 53 37.5 90.5t90.5 37.5h128q53 0 90.5-37.5t37.5-90.5zm-128 128h-128q-26 0-45-18.5t-19-45.5v-64q0-26 19-45t45-19h128q26 0 45 19t19 45v64q0 27-19 45.5t-45 18.5"></svg:path>`,
})
export class WhhSquaresixIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquarestarIcon],svg[whh-squarestar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-80-620l-186-40l-96-163q-9-9-21.5-9t-21.5 9l-97 163l-186 40q-11 6-14.5 18t1.5 23l129 144l-15 182q2 13 9.5 22t19.5 7l174-76l175 76q11 2 19-7t10-22l-15-182l128-144q6-11 2-23t-15-18"></svg:path>`,
})
export class WhhSquarestarIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquarestopIcon],svg[whh-squarestop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-128-704q0-26-18.5-45t-45.5-19h-384q-26 0-45 19t-19 45v384q0 27 19 45.5t45 18.5h384q27 0 45.5-18.5t18.5-45.5z"></svg:path>`,
})
export class WhhSquarestopIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquaretIcon],svg[whh-squaret-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-288-768h-256q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h96v416q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5V320h96q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5"></svg:path>`,
})
export class WhhSquaretIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquarethreeIcon],svg[whh-squarethree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-192-448q0-57-44-96q44-38 44-96q0-53-37.5-90.5t-90.5-37.5h-128q-53 0-90.5 37.5t-37.5 90.5q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5q0-26 18.5-45t45.5-19h128q26 0 45 19t19 45.5t-19 45t-45 18.5h-32q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h32q26 0 45 19t19 45v64q0 27-19 45.5t-45 18.5h-128q-27 0-45.5-18.5t-18.5-45.5q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5q0 53 37.5 90.5t90.5 37.5h128q53 0 90.5-37.5t37.5-90.5z"></svg:path>`,
})
export class WhhSquarethreeIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquaretwitterIcon],svg[whh-squaretwitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-83-768q-6 3-18 11.5t-19.5 13t-18.5 9.5t-21 7q-37-41-91-41q-117 0-117 98v60q-161-9-247-119q-25 26-25 57q0 66 49 100q-7 0-17.5 1t-17 0t-14.5-5q0 46 24.5 76.5t67.5 39.5q-10 12-28 12q-16 0-28-9q0 39 37.5 60.5t84.5 22.5q-18 27-52.5 40.5t-73.5 13.5q-14 0-38.5-7t-25.5-7q16 32 65.5 55t125.5 23q67 0 125-23.5t99-62.5t70.5-89t44-103.5t14.5-105.5q0-2 12-8.5t28-17t24-23.5q-54 0-72 2q35-21 53-81"></svg:path>`,
})
export class WhhSquaretwitterIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquaretwoIcon],svg[whh-squaretwo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-448-448h128q53 0 90.5-37.5t37.5-90.5v-64q0-53-37.5-90.5t-90.5-37.5h-128q-53 0-90.5 37.5t-37.5 90.5q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5q0-26 18.5-45t45.5-19h128q27 0 45.5 19t18.5 45v64q0 27-18.5 45.5t-45.5 18.5h-128q-53 0-90.5 37.5t-37.5 90.5v96q0 13 9.5 22.5t22.5 9.5h320q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-272q-7 0-11.5-4.5t-4.5-11.5v-48q0-26 18.5-45t45.5-19"></svg:path>`,
})
export class WhhSquaretwoIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquareuIcon],svg[whh-squareu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-192-736q0-13-9-22.5t-22.5-9.5t-23 9.5t-9.5 22.5v352q0 27-19 45.5t-45 18.5h-128q-26 0-45-19t-19-45V288q0-13-9-22.5t-22.5-9.5t-23 9.5t-9.5 22.5v352q0 53 37.5 90.5t90.5 37.5h128q53 0 90.5-37.5t37.5-90.5z"></svg:path>`,
})
export class WhhSquareuIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquarevIcon],svg[whh-squarev-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-192-736q0-13-9-22.5t-22.5-9.5t-23 9.5t-9.5 22.5v277l-128 128l-128-128V288q0-13-9-22.5t-22.5-9.5t-23 9.5t-9.5 22.5v288q0 12 9 20l155 155q14 17 28 17q11 0 28-17l156-155q8-8 8-20z"></svg:path>`,
})
export class WhhSquarevIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquareviberIcon],svg[whh-squareviber-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-576-640v-96q0-27-16.5-53t-36.5-37t-31-1l-73 74q-30 30-34 80.5t15.5 110t62.5 126t103 126.5t126.5 103t126 63t110 16t80.5-34l74-74q10-10-1-30.5t-37-37t-53-16.5h-96l-65 40q-45-12-111-65t-119-119t-65-111zm382 160l65 11q-8-120-93-205t-204-93l10 65q87 11 149 73t73 149m-210-155l12 72q39 19 59 59l72 12q-13-53-51.5-91.5t-91.5-51.5m-44-261l11 65q100 2 184.5 52.5t135 135t52.5 184.5l65 11q0-91-35.5-174t-95.5-143t-143-95.5t-174-35.5"></svg:path>`,
})
export class WhhSquareviberIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquarevimeoIcon],svg[whh-squarevimeo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-240-768q-46 0-78.5 43.5t-33.5 98.5q16-14 36-14q21 0 32.5 10.5t11.5 37.5q0 25-17.5 63.5t-40.5 67.5t-38 29q-7 0-14-16t-14-47t-12-59t-12.5-70.5t-11.5-63.5q-15-80-64-80q-72 0-144 128l16 32q11-13 26-22.5t22-9.5t12.5 4.5t8.5 13t5 15.5t3.5 17t2.5 14q4 18 12 66t16.5 86t22.5 79.5t37.5 65t55.5 23.5q39 0 104.5-68.5t116.5-161.5t51-154q0-128-112-128"></svg:path>`,
})
export class WhhSquarevimeoIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquarevoiceIcon],svg[whh-squarevoice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-257-704q0-53-37.5-90.5t-90.5-37.5t-90.5 37.5t-37.5 90.5v128q0 53 37.5 90.5t90.5 37.5t90.5-37.5t37.5-90.5zm65 128q0 80-56.5 136t-136 56t-135.5-56t-56-136h-64q0 89 54 157.5t138 90.5v72h-32q-14 0-23 9.5t-9 22.5t9 22.5t23 9.5h191q14 0 23-9.5t9-22.5t-9-22.5t-23-9.5h-31v-72q83-22 137.5-90.5t54.5-157.5z"></svg:path>`,
})
export class WhhSquarevoiceIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquarewIcon],svg[whh-squarew-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-192-736q0-13-9-22.5t-22.5-9.5t-23 9.5t-9.5 22.5v352q0 27-18.5 45.5t-45.5 18.5h-48q-6 0-11-4.5t-5-11.5V288q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v400q0 7-4.5 11.5t-11.5 4.5h-48q-26 0-45-19t-19-45V288q0-13-9-22.5t-22.5-9.5t-23 9.5t-9.5 22.5v352q0 53 37.5 90.5t90.5 37.5h192q53 0 90.5-37.5t37.5-90.5z"></svg:path>`,
})
export class WhhSquarewIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquarexIcon],svg[whh-squarex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-203-713q11-12 11-23q0-13-9.5-22.5t-22.5-9.5q-7 0-15.5 5.5t-12.5 10.5l-132 185l-132-185q-12-16-28-16q-15 0-23.5 10t-8.5 22q0 13 9 23l144 201l-144 201q-9 10-9 23q0 11 8.5 21.5t23.5 10.5q16 0 28-16l132-185l132 185q4 5 12.5 10.5t15.5 5.5q13 0 22.5-9.5t9.5-22.5q0-12-11-23l-142-201z"></svg:path>`,
})
export class WhhSquarexIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquareyIcon],svg[whh-squarey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-192-736q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v160q0 27-18.5 45.5t-45.5 18.5h-128q-26 0-45-18.5t-19-45.5V288q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v160q0 53 37.5 90.5t90.5 37.5h128q34 0 64-17v81q0 27-18.5 45.5t-45.5 18.5h-160q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h160q53 0 90.5-37.5t37.5-90.5z"></svg:path>`,
})
export class WhhSquareyIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquarezIcon],svg[whh-squarez-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-200-714q8-13 8-22t-10-20.5t-22-11.5h-320q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h258l-280 393q-10 9-10 23q0 13 9.5 22.5t22.5 9.5h320q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-258z"></svg:path>`,
})
export class WhhSquarezIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquarezeroIcon],svg[whh-squarezero-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-192-640q0-53-37.5-90.5t-90.5-37.5h-128q-53 0-90.5 37.5t-37.5 90.5v256q0 53 37.5 90.5t90.5 37.5h128q53 0 90.5-37.5t37.5-90.5zm-256-64h128q26 0 45 19t19 45v234l-212-294q11-4 20-4m128 384h-128q-27 0-45.5-18.5t-18.5-45.5V384q0-2 1-9l228 317q-17 12-37 12"></svg:path>`,
})
export class WhhSquarezeroIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSquarezerplyIcon],svg[whh-squarezerply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-213-324q-29 0-66-23t-83.5-55t-85.5-46q277-264 277-340q0-11-.5-16.5t-4-13t-13-11t-24.5-3.5q-13 0-34 10t-43 22t-64.5 22t-93.5 10q-19 0-35-16t-22-32l-7-16q-2 1-5 3t-10 9.5t-12.5 16.5t-10.5 25t-5 34q0 32 20 52t55 20t85-9.5t75-22.5q-31 34-93.5 90.5t-108 97.5t-82 89t-36.5 81q0 15 17 18.5t68 3.5q35 0 67 13.5t58 33t53 39t63.5 33t78.5 13.5q22 0 39.5-10t28.5-24.5t19-35t11.5-37t6-35t2.5-24.5v-10q-3 5-9 12.5t-28 19.5t-48 12"></svg:path>`,
})
export class WhhSquarezerplyIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSshIcon],svg[whh-ssh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 768H800q-13 0-22.5-9.5T768 736t9.5-22.5T800 704h192q13 0 22.5 9.5t9.5 22.5t-9.5 22.5T992 768M736 640h-32v32q0 12-7.5 20.5T678 703q-2 1-6 1h-32v96q0 13-9.5 22.5T608 832h-64q-13 0-22.5-9.5T512 800v-96h-32q-4 0-6-1q-11-2-18.5-10.5T448 672v-32h-32q-13 0-22.5-9.5T384 608v-64q0-13 9.5-22.5T416 512h64q13 0 22.5 9.5T512 544v96h128V448H480q-4 0-6-1q-11-2-18.5-10.5T448 416v-32h-32q-13 0-22.5-9.5T384 352V224q0-13 9.5-22.5T416 192h32v-32q0-12 7.5-20.5T474 129q2-1 6-1h32V32q0-13 9.5-22.5T544 0h64q13 0 22.5 9.5T640 32v96h32q4 0 6 1q11 2 18.5 10.5T704 160v32h32q13 0 22.5 9.5T768 224v64q0 13-9.5 22.5T736 320h-64q-13 0-22.5-9.5T640 288v-96H512v192h160q4 0 6 1q11 2 18.5 10.5T704 416v32h32q13 0 22.5 9.5T768 480v128q0 13-9.5 22.5T736 640M288 512h-32v32q0 12-7.5 20.5T230 575q-2 1-6 1h-32v32q0 12-7.5 20.5T166 639q-2 1-6 1h-32v32q0 11-7.5 20T102 703q-2 1-6 1H32q-13 0-22.5-9.5T0 672t9.5-22.5T32 640h32v-32q0-12 7.5-20.5T90 577q2-1 6-1h32v-32q0-12 7.5-20.5T154 513q2-1 6-1h32v-64h-32q-4 0-6-1q-11-2-18.5-10.5T128 416v-32H96q-4 0-6-1q-11-2-18.5-10.5T64 352v-32H32q-13 0-22.5-9.5T0 288t9.5-22.5T32 256h64q4 0 6 1q11 2 18.5 10.5T128 288v32h32q4 0 6 1q11 2 18.5 10.5T192 352v32h32q4 0 6 1q11 2 18.5 10.5T256 416v32h32q13 0 22.5 9.5T320 480t-9.5 22.5T288 512"></svg:path>`,
})
export class WhhSshIcon {
  readonly viewBox = input("0 0 1024 832")
  readonly width = input("1.24em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSslmanagerIcon],svg[whh-sslmanager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 1024q-104 0-192.5-51.5t-140-140T0 640q0-116 64-212V320q0-87 43-160.5T223.5 43T384 0t160.5 43T661 159.5T704 320v108q64 96 64 212q0 104-51.5 192.5t-140 140T384 1024m0-896q-76 0-131 52t-60 127q89-51 191-51t191 51q-5-75-60-127t-131-52m0 256q-106 0-181 75t-75 181t75 181t181 75t181-75t75-181t-75-181t-181-75m0 384q-53 0-90.5-37.5T256 640q0-64 52-102l76-153l76 153q52 38 52 102q0 53-37.5 90.5T384 768"></svg:path>`,
})
export class WhhSslmanagerIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhStacksIcon],svg[whh-stacks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.488 1024h-512q-27 0-45.5-18.5t-18.5-45.5v-64h-64q-27 0-45.5-19t-18.5-45v-64h-64q-27 0-45.5-19t-18.5-45v-64h-64q-27 0-45.5-19t-18.5-45V64q0-27 18.5-45.5T64.488 0h512q27 0 45.5 18.5t18.5 45.5v64h64q27 0 45.5 18.5t18.5 45.5v64h64q26 0 45 18.5t19 45.5v64h64q27 0 45.5 18.5t18.5 45.5v512q0 26-18.5 45t-45.5 19m-384-960h-512v512h64V192q0-27 18.5-45.5t45.5-18.5h384zm128 128h-512v512h64V320q0-27 18.5-45.5t45.5-18.5h384zm128 128h-512v512h64V448q0-27 18.5-45.5t45.5-18.5h384zm128 128h-512v512h512z"></svg:path>`,
})
export class WhhStacksIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhStadiumIcon],svg[whh-stadium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 960H64q-26 0-45-18.5T0 896V64q0-26 19-45T64 0h576q26 0 45 19t19 45v832q0 27-18.5 45.5T640 960m-384-64h192V768H256zM448 64H256v128h192zm192 0H512v192H192V64H64v384h131q11-55 55-91.5T352 320t102 36.5t55 91.5h131zM256 480q0 40 28 68t68 28t68-28t28-68t-28-68t-68-28t-68 28t-28 68m384 32H509q-11 55-55 91.5T352 640t-102-36.5t-55-91.5H64v384h128V704h320v192h128z"></svg:path>`,
})
export class WhhStadiumIcon {
  readonly viewBox = input("0 0 704 960")
  readonly width = input("0.74em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhStairsdownIcon],svg[whh-stairsdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 512H672q-13 0-22.5-9.5T640 480v-64q0-13 9.5-22.5T672 384h135L521 100q-9-9-9-22.5t9-22.5l46-46q9-9 22.5-9T613 9l283 282V160q0-13 9.5-22.5T928 128h64q13 0 22.5 9.5t9.5 22.5v320q0 13-9.5 22.5T992 512m-353 90q1 2 1 6v160h160q12 0 20.5 7.5T831 794q1 2 1 6v160h160q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5H800q-12 0-20.5-7.5T769 998q-1-2-1-6V832H608q-12 0-20.5-7.5T577 806q-1-2-1-6V640H416q-12 0-20.5-7.5T385 614q-1-2-1-6V448H224q-12 0-20.5-7.5T193 422q-1-2-1-6V256H32q-13 0-22.5-9.5T0 224t9.5-22.5T32 192h192q12 0 20.5 7.5T255 218q1 2 1 6v160h160q12 0 20.5 7.5T447 410q1 2 1 6v160h160q12 0 20.5 7.5T639 602"></svg:path>`,
})
export class WhhStairsdownIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhStairsupIcon],svg[whh-stairsup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.857 256h-160v160q0 4-1 6q-2 11-10.5 18.5t-20.5 7.5h-160v160q0 4-1 6q-2 11-10.5 18.5t-20.5 7.5h-160v160q0 4-1 6q-2 11-10.5 18.5t-20.5 7.5h-160v160q0 4-1 6q-2 11-10.5 18.5t-20.5 7.5h-192q-13 0-22.5-9.5T.857 992t9.5-22.5t22.5-9.5h160V800q0-4 1-6q2-11 11-18.5t20-7.5h160V608q0-4 1-6q2-11 11-18.5t20-7.5h160V416q0-3 1-6q2-11 11-18.5t20-7.5h160V224q0-4 1-6q2-11 10.5-18.5t20.5-7.5h192q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m-512 128h-64q-13 0-22.5-9.5t-9.5-22.5V221l-283 282q-10 9-23.5 9t-22.5-9l-46-46q-9-9-9-22.5t9-22.5l286-284h-135q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h320q13 0 22.5 9.5t9.5 22.5v320q0 13-9.5 22.5t-22.5 9.5"></svg:path>`,
})
export class WhhStairsupIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhStampIcon],svg[whh-stamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 832v64q-27 0-45.5 18.5T896 960h-64q0-27-18.5-45.5t-45-18.5t-45.5 18.5t-19 45.5h-64q0-27-18.5-45.5T576 896t-45.5 18.5T512 960h-64q0-27-18.5-45.5T384 896t-45.5 18.5T320 960h-64q0-27-19-45.5T191.5 896t-45 18.5T128 960H64q0-27-18.5-45.5T0 896v-64q26 0 45-19t19-45.5t-18.5-45T0 704v-64q27 0 45.5-19T64 575.5t-18.5-45T0 512v-64q26 0 45-19t19-45.5t-18.5-45T0 320v-64q26 0 45-19t19-45.5t-19-45T0 128V64q27 0 45.5-19T64 0h64q0 26 18.5 45t45 19T237 45t19-45h64q0 26 18.5 45T384 64t45.5-19T448 0h64q0 26 18.5 45T576 64t45.5-19T640 0h64q0 26 19 45t45.5 19t45-19T832 0h64q0 26 18.5 45T960 64v64q-26 0-45 18.5t-19 45t19 45.5t45 19v64q-27 0-45.5 18.5t-18.5 45t19 45.5t45 19v64q-27 0-45.5 18.5t-18.5 45t18.5 45.5t45.5 19v64q-27 0-45.5 18.5t-18.5 45t19 45.5t45 19M832 160q0-13-9.5-22.5T800 128H160q-13 0-22.5 9.5T128 160v640q0 13 9.5 22.5T160 832h640q13 0 22.5-9.5T832 800zm-90 608H218q-11 0-18.5-7.5T192 742V218q0-11 7.5-18.5T218 192h524q11 0 18.5 7.5T768 218v524q0 11-7.5 18.5T742 768"></svg:path>`,
})
export class WhhStampIcon {
  readonly viewBox = input("0 0 960 960")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhStampaltIcon],svg[whh-stampalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 832v64q-26 0-45 18.5T896 960h-64q0-26-18.5-45t-45-19t-45.5 18.5t-19 45.5h-64q0-27-18.5-45.5t-45-18.5t-45.5 19t-19 45h-64q0-27-18.5-45.5t-45-18.5t-45.5 18.5t-19 45.5h-64q0-26-18.5-45t-45-19t-45.5 18.5t-19 45.5H64q0-27-18.5-45.5T0 896v-64q27 0 45.5-18.5t18.5-45T45.5 723T0 704v-64q27 0 45.5-18.5t18.5-45T45.5 531T0 512v-64q27 0 45.5-19T64 383.5t-18.5-45T0 320v-64q27 0 45.5-19T64 191.5t-18.5-45T0 128V64q27 0 45.5-18.5T64 0h64q0 27 19 45.5T192.5 64t45-19T256 0h64q0 27 19 45.5T384.5 64t45-18.5T448 0h64q0 26 19 45t45.5 19t45-18.5T640 0h64q0 27 19 45.5T768.5 64t45-19T832 0h64q0 27 19 45.5T960 64v64q-26 0-45 18.5t-19 45t19 45.5t45 19v64q-26 0-45 18.5t-19 45t19 45.5t45 19v64q-26 0-45 19t-19 45.5t19 45t45 18.5v64q-26 0-45 19t-19 45.5t19 45t45 18.5M832 160q0-13-9.5-22.5T800 128H160q-13 0-22.5 9.5T128 160v640q0 13 9.5 22.5T160 832h640q13 0 22.5-9.5T832 800z"></svg:path>`,
})
export class WhhStampaltIcon {
  readonly viewBox = input("0 0 960 960")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhStatisticsIcon],svg[whh-statistics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-576-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v128q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm256-256q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v384q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm256-320q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v704q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5z"></svg:path>`,
})
export class WhhStatisticsIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSteakIcon],svg[whh-steak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M963 978q-39 40-106.5 47.5t-150.5-22T545 911q-39-32-89-49t-95.5-21.5t-89.5-8t-82.5-15T127 782Q47 701 16.5 576.5t-3.5-249T120 122T322.5 13.5t245 3.5T770 130q49 49 98.5 135t87 188t57.5 202t8.5 187.5T963 978M737 193q-56-57-131.5-91T449 65q-78-2-153 26t-127 80Q58 284 65 449q2 68 25 140.5T143 716q15 26 53 38t87.5 15t101.5 6t105 17t87 42q71 58 132.5 88T822 953.5t85-33.5q41-42 51-117t-8-160.5T899.5 470t-76-160T737 193M577 770q-36-30-99-45t-118.5-17.5t-104.5-10t-62-24.5q-59-74-64-212q-6-142 89-240q44-45 108.5-69.5T458 129q69 2 134 32t113 79q71 72 131.5 226T897 738q0 49-5.5 77.5T865 866q-76 77-288-96M353 257q-40 0-68 28.5t-28 68t28 67.5t68 28t68-28t28-67.5t-28-68t-68-28.5"></svg:path>`,
})
export class WhhSteakIcon {
  readonly viewBox = input("0 0 1026 1028")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSteamIcon],svg[whh-steam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M703.928 128q79.5 0 136 56.5t56.5 136t-56.5 135.5t-136 56t-135.5-56t-56-135.5t56-136t135.5-56.5m.5 320q53 0 90.5-37.5t37.5-90.5t-37.5-90.5t-90.5-37.5t-90.5 37.5t-37.5 90.5t37.5 90.5t90.5 37.5m-339.5 300.5q19.5-19.5 19.5-47t-20-47.5l-99-65q27-13 55-13q53 0 90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5t-90.5-37.5t-37.5-90.5q0-2 .5-5.5t.5-4.5l78 54q19 20 46.5 20t47-19.5m531.5 275.5h-768q-53 0-90.5-37.5T.428 896V560l136 94q-8 27-8 50q0 80 56.5 136t136 56t135.5-56t56-136q0-3-2-22l157-109q21 3 37 3q106 0 180.5-75t74.5-181t-74.5-181t-180.5-75t-181 75t-75 181q0 16 3 37l-108 157q-20-2-23-2q-62 0-113 38l-207-137V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5"></svg:path>`,
})
export class WhhSteamIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhStepbackwardIcon],svg[whh-stepbackward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 1025q-53 0-90.5-37.5T768 897V128q0-53 37.5-90.5T896 0t90.5 37.5T1024 128v769q0 53-37.5 90.5T896 1025m-446-11L15 551Q0 535 0 513t15-38L450 12q25-27 62 12v977q-37 40-62 13"></svg:path>`,
})
export class WhhStepbackwardIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhStepforwardIcon],svg[whh-stepforward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1009.86 551l-435 463q-25 27-62-13V24q37-39 62-12l435 463q15 16 15 38t-15 38m-881 474q-53 0-90.5-37.5T.86 897V128q0-53 37.5-90.5T128.86 0t90.5 37.5t37.5 90.5v769q0 53-37.5 90.5t-90.5 37.5"></svg:path>`,
})
export class WhhStepforwardIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhStickerIcon],svg[whh-sticker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 448q0 21-1 33t-8.5 30t-22.5 33L544 992q-15 15-33 22.5t-30 8.5t-33 1v-5q-125-15-227.5-86T59 751T0 512q0-104 40.5-199t109-163.5T313 40.5T512 0q128 0 239 59t182 161.5t86 227.5zM512 64q-91 0-174 35.5T195 195T99.5 338T64 512q0 111 50.5 207.5T253 878t195 77q1-103 41.5-196T598 598t161-108.5T955 448q-15-107-77-195T719.5 114.5T512 64"></svg:path>`,
})
export class WhhStickerIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhStickynoteIcon],svg[whh-stickynote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1023 576q0 48-34 82L658 989q-34 34-82 34v1H0V0h1024v576zm-447 0v378q26-9 44-27l307-307q18-18 27-44z"></svg:path>`,
})
export class WhhStickynoteIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhStickynotealtIcon],svg[whh-stickynotealt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1023 576q0 48-34 82L658 989q-34 34-82 34v1H0V0h1024v576zM621 928l307-307q18-18 26-45H576v378q27-8 45-26M960 64H64v896h448V512h448z"></svg:path>`,
})
export class WhhStickynotealtIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhStilettoIcon],svg[whh-stiletto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M946 404q-50 180-50 300v192h-64V640q0-127-42-175q-23 18-49 59.5t-47.5 88t-49.5 98t-55 92t-64 67t-77 26.5q-102 0-201.5-10t-173-33T0 800q0-26 65-79t142-97t113-48q18 18 30.5 28.5t40.5 23t57 12.5q23 0 87-82.5t129.5-189t116.5-215T832 0q80 0 136 65.5t56 158.5q0 54-21 101t-57 79"></svg:path>`,
})
export class WhhStilettoIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhStockdownIcon],svg[whh-stockdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m0-768q0-53-37.5-90.5t-90.5-37.5h-512q-53 0-90.5 37.5t-37.5 90.5v512q0 53 37.5 90.5t90.5 37.5h512q53 0 90.5-37.5t37.5-90.5zm-111 448h-186q-16 0-19.5-9.5t-3.5-30.5v-6l61-61l-158-158l-54 55q-18 18-43.5 18t-43.5-18q0-1-7-11l-122-122q-18-18-18-43.5t18-43.5t43.5-18t43.5 18l88 88l55-56q18-18 43.5-18t43.5 18q5 5 10 16l189 188l60-60h7q14 0 21 1t13 6t6 16v185q0 19-13.5 32.5t-33.5 13.5"></svg:path>`,
})
export class WhhStockdownIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhStocksIcon],svg[whh-stocks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m990.193 384l-70-69l-284 285q-5 14-14 23q-20 20-49 16q-26 1-44-17q-9-8-13-21l-37-37q-2 3-54.5 60.5t-57.5 62.5q-20 20-50 16q-26 1-44-17q-9-8-13-21l-5-5l-122 122q-1 1-2.5 2t-2.5 2v110h832q26 0 45 19t19 45.5t-19 45t-45 18.5h-896q-27 0-45.5-18.5T.193 960V64q0-26 18.5-45t45-19t45.5 19t19 45v555l68-68q4-12 13-21q18-18 44-17q29-3 49 16q9 9 14 24l3 3l101-101q4-12 13-21q18-18 44-17q30-3 49 16q9 9 14 24l35 35l261-261l-68-68q-1-36 22-35h202q14 1 22.5 9.5t9.5 22.5v202q1 24-34 22"></svg:path>`,
})
export class WhhStocksIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhStockupIcon],svg[whh-stockup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m0-768q0-53-37.5-90.5t-90.5-37.5h-512q-53 0-90.5 37.5t-37.5 90.5v512q0 53 37.5 90.5t90.5 37.5h512q53 0 90.5-37.5t37.5-90.5zm-111 318l-60-60l-188 188q-6 11-11 16q-18 18-43.5 18t-43.5-18l-55-55l-88 87q-18 18-43.5 18t-43.5-18t-18-43.5t18-43.5l122-122q7-10 7-11q18-18 43.5-18t43.5 18l54 55l158-158l-61-61v-6q0-14 .5-21t6-13t16.5-6h186q20 0 33.5 13.5t13.5 32.5v185q0 11-6 16.5t-13 6t-21 .5z"></svg:path>`,
})
export class WhhStockupIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhStomachIcon],svg[whh-stomach-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 960q-65 0-125.5-30T227 855.5T192 768q0-30-16-42.5t-32 0t-16 42.5v192q0 21-21.5 42.5T64 1024t-42.5-21.5T0 960V768q0-38 2.5-64t10-52T34 610.5t37.5-25T128 576q34 0 62 10t43.5 22t38.5 22t48 10q27 0 42-.5t42.5-3t45-8.5t38.5-16t34.5-27.5T544 544q15-45 22.5-99.5T575 355t1-99q-48 0-88-40t-40-88V64q0-21 21.5-42.5T512 0t42.5 21.5T576 64v32q0 32 128 32q17 0 33.5-10T767 96t39-22t58-10q75 0 117.5 94.5T1024 410q0 131-45 236.5T855.5 820T673 924t-225 36"></svg:path>`,
})
export class WhhStomachIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhStopIcon],svg[whh-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128.428 0h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5"></svg:path>`,
})
export class WhhStopIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhStopwatchIcon],svg[whh-stopwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1014.857 199l-47 47q-10 10-24 10t-23-10l-36-35l-52 52q60 62 93.5 143t33.5 170q0 91-35 174t-95 143t-143 95.5t-174 35.5t-174-35.5t-143-95.5t-95.5-143t-35.5-174q0-89 34-170t94-143l-52-52l-36 35q-9 10-23 10t-24-10l-47-47q-10-10-10-24t10-23l142-142q9-10 23-10t24 10l47 47q10 10 10 24t-10 23l-35 36l59 60q82-53 179-67v-4h-33q-13 0-22.5-9.5t-9.5-22.5V33q0-14 9.5-23t22.5-9h192q13 0 22.5 9t9.5 23v64q0 13-9.5 22.5t-22.5 9.5h-32v4q96 14 178 67l59-60l-35-36q-10-9-10-23t10-24l47-47q10-10 24-10t23 10l142 142q10 9 10 23t-10 24m-502 57q-87 0-160.5 43t-116.5 116.5t-43 160.5t43 160.5t116.5 116.5t160.5 43t160.5-43t116.5-116.5t43-160.5t-43-160.5t-116.5-116.5t-160.5-43m64 320q0 27-18.5 45.5t-45.5 18.5q-26 0-45-18.5t-19-45t19-45.5t45-19q3 0 10 1l150-128v-1h32v32l-129 151q1 7 1 9"></svg:path>`,
})
export class WhhStopwatchIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhStoreIcon],svg[whh-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 512q-53 0-90.5-37.5T768 384q0 53-37.5 90.5T640 512t-90.5-37.5T512 384q0 53-37.5 90.5T384 512t-90.5-37.5T256 384q0 53-37.5 90.5T128 512t-90.5-37.5T0 384q0-34 32-96l92-239q7-21 26-35t38-14h652q20 0 38.5 14T904 49l88 239q2 5 9.5 21.5t11.5 26t7.5 23.5t3.5 25q0 53-37.5 90.5T896 512M64 896V640q0-27 19-45.5t45-18.5t45 18.5t19 45.5v256h192V640q0-27 18.5-45.5T448 576h128q27 0 45.5 18.5T640 640v256h192V640q0-27 19-45.5t45-18.5t45 18.5t19 45.5v256q26 0 45 18.5t19 45t-19 45.5t-45 19H64q-26 0-45-19T0 959.5t19-45T64 896"></svg:path>`,
})
export class WhhStoreIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhStormIcon],svg[whh-storm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M817 763L704 480q0-13-9.5-22.5T672 448h-64q-13 0-22.5 9.5T576 480v160H448l-64-160q0-13-9.5-22.5T352 448h-64q-22 0-30 22q-66-80-66-182q0-119 84.5-203.5T480 0q88 0 159.5 48T744 174q-68 22-118 74t-70 121q35-52 91-82.5T768 256q106 0 181 75t75 181q0 93-59 163.5T817 763M256 640h-96q-13 0-22.5 9.5T128 672v74q-58-28-93-82T0 544q0-57 27-106t73-80q51 103 156 153zm64-128l128 320H320v192L192 704h128zm320 0l128 320H640v192L512 704h128z"></svg:path>`,
})
export class WhhStormIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhStoveIcon],svg[whh-stove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.06 1024h-896q-26 0-45-19t-19-45V64q0-26 19-45t45-19h896q26 0 45 18.5t19 45.5v896q0 27-19 45.5t-45 18.5m-672-896q-66 0-113 47t-47 113t47 113t113 47t113-47t47-113t-47-113t-113-47m0 448q-66 0-113 47t-47 113t47 113t113 47t113-47t47-113t-47-113t-113-47m448-448q-66 0-113 47t-47 113t47 113t113 47t113-47t47-113t-47-113t-113-47m0 448q-66 0-113 47t-47 113t47 113t113 47t113-47t47-113t-47-113t-113-47m0 256q-40 0-68-28t-28-68t28-68t68-28t68 28t28 68t-28 68t-68 28m0-448q-40 0-68-28t-28-68t28-68t68-28t68 28t28 68t-28 68t-68 28m-448 448q-40 0-68-28t-28-68t28-68t68-28t68 28t28 68t-28 68t-68 28m0-448q-40 0-68-28t-28-68t28-68t68-28t68 28t28 68t-28 68t-68 28"></svg:path>`,
})
export class WhhStoveIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhStrawberryIcon],svg[whh-strawberry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M958 911q-39 40-106 47t-137-9.5T557 897t-154-68.5T262 756t-103-51q-209-95 46-380Q98 344 69 452q-13-55 13-107q-57 32-77 107q-14-63 19-118t95-72h2.5l2.5-1q-73-22-124 8q34-56 94.5-72T210 214Q153 119 65 62l63-61q81 81 126 134q-3-41 13.5-76.5T320 1q0 81 6 115q17-61 71-93T512 5Q399 36 385 155q62-46 118.5-68.5t120.5-20T753 103q49 24 96 83t83 134.5T992 483t30.5 167.5T1013 801t-55 110m-349.5-78q13.5 0 22.5-9.5t9-22.5t-9-22.5t-22.5-9.5t-23 9.5T576 801t9.5 22.5t23 9.5m-384-384q-13.5 0-23 9.5T192 481t9.5 22.5t23 9.5t22.5-9.5t9-22.5t-9-22.5t-22.5-9.5m64 128q-13.5 0-23 9.5T256 609t9.5 22.5t23 9.5t22.5-9.5t9-22.5t-9-22.5t-22.5-9.5m64-256q-13.5 0-23 9.5T320 353t9.5 22.5t23 9.5t22.5-9.5t9-22.5t-9-22.5t-22.5-9.5m0 128q-13.5 0-23 9.5T320 481t9.5 22.5t23 9.5t22.5-9.5t9-22.5t-9-22.5t-22.5-9.5m64 256q-13.5 0-23 9.5T384 737t9.5 22.5t23 9.5t22.5-9.5t9-22.5t-9-22.5t-22.5-9.5m64-448q-13.5 0-23 9.5T448 289t9.5 22.5t23 9.5t22.5-9.5t9-22.5t-9-22.5t-22.5-9.5m0 192q-13.5 0-23 9.5T448 481t9.5 22.5t23 9.5t22.5-9.5t9-22.5t-9-22.5t-22.5-9.5m0 128q-13.5 0-23 9.5T448 609t9.5 22.5t23 9.5t22.5-9.5t9-22.5t-9-22.5t-22.5-9.5m128-384q-13.5 0-23 9.5T576 225t9.5 22.5t23 9.5t22.5-9.5t9-22.5t-9-22.5t-22.5-9.5m0 128q-13.5 0-23 9.5T576 353t9.5 22.5t23 9.5t22.5-9.5t9-22.5t-9-22.5t-22.5-9.5m0 192q-13.5 0-23 9.5T576 545t9.5 22.5t23 9.5t22.5-9.5t9-22.5t-9-22.5t-22.5-9.5m64 128q-13.5 0-23 9.5T640 673t9.5 22.5t23 9.5t22.5-9.5t9-22.5t-9-22.5t-22.5-9.5m64-384q-13.5 0-23 9.5T704 289t9.5 22.5t23 9.5t22.5-9.5t9-22.5t-9-22.5t-22.5-9.5m0 192q-13.5 0-23 9.5T704 481t9.5 22.5t23 9.5t22.5-9.5t9-22.5t-9-22.5t-22.5-9.5m0 320q-13.5 0-23 9.5T704 801t9.5 22.5t23 9.5t22.5-9.5t9-22.5t-9-22.5t-22.5-9.5m128-384q-13.5 0-23 9.5T832 417t9.5 22.5t23 9.5t22.5-9.5t9-22.5t-9-22.5t-22.5-9.5m0 192q-13.5 0-23 9.5T832 609t9.5 22.5t23 9.5t22.5-9.5t9-22.5t-9-22.5t-22.5-9.5m0 128q-13.5 0-23 9.5T832 737t9.5 22.5t23 9.5t22.5-9.5t9-22.5t-9-22.5t-22.5-9.5"></svg:path>`,
})
export class WhhStrawberryIcon {
  readonly viewBox = input("0 0 1025 961")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhStrikethroughIcon],svg[whh-strikethrough-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 576h-99q34 60 34 128v64q0 106-74.5 181T640 1024H384q-106 0-181-75t-75-181q0-27 18.5-45.5t45-18.5t45.5 18.5t19 45.5q0 53 37.5 90.5T384 896h256q53 0 90.5-37.5T768 768v-64q0-53-37.5-90.5T640 576H64q-27 0-45.5-18.5T0 512t18.5-45.5T64 448h99q-34-60-34-128v-64q0-106 74.5-181T384 0h256q106 0 181 75t75 181q0 27-18.5 45.5t-45 18.5t-45.5-19t-19-45q0-53-37.5-90.5T640 128H384q-53 0-90.5 37.5T256 256v64q0 53 37.5 90.5T384 448h576q26 0 45 19t19 45t-19 45t-45 19"></svg:path>`,
})
export class WhhStrikethroughIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhStrollerIcon],svg[whh-stroller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 512H684L504 691l118 141h99q17-29 46.5-46.5T832 768q53 0 90.5 37.5T960 896t-37.5 90.5T832 1024t-90.5-37.5T704 896h-96q-18 0-27-16L460 736l-95 95q19 31 19 65q0 53-37.5 90.5T256 1024t-90.5-37.5T128 896t37.5-90.5T256 768q34 0 65 18l99-99l-146-175h-82l-33-117L9 244q-9-9-9-21.5T9 201t21.5-9t21.5 9l119 119h405L512 0q164 0 313 78t199 178zm-64.5 448q26.5 0 45.5-19t19-45.5t-19-45t-45.5-18.5t-45 18.5t-18.5 45t18.5 45.5t45 19m-576-128q-26.5 0-45 18.5t-18.5 45t18.5 45.5t45 19t45.5-19t19-45.5t-19-45t-45.5-18.5M355 512l109 131l132-131z"></svg:path>`,
})
export class WhhStrollerIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhStudentIcon],svg[whh-student-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 736q0 13-9.5 22.5T992 768t-22.5-9.5T960 736V315L607 492q-40 20-95 20t-95-20L39 303Q0 283 0 255.5T39 209L417 20q40-20 95-20t95 20l378 189q34 17 38 42q1 1 1 4zM639 556l193-97v141q0 43-93.5 73.5T512 704t-226.5-30.5T192 600V459l193 97q40 20 127 20t127-20"></svg:path>`,
})
export class WhhStudentIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhStumbleuponIcon],svg[whh-stumbleupon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m171-649q0-70-50-120t-121-50t-121 50t-50 120v205q0 14-10 24t-24 10t-24-10t-10-24V478H136v102q0 71 50 121t121 50t121-50t50-121V375q0-14 10-24t24-10t24 10t10 24v35l68 68l69-68zm68 103v102q0 14-10 24t-24 10t-24-10t-10-24V478l-69 68l-68-68v102q0 71 50 121t120.5 50T837 701t50-121V478z"></svg:path>`,
})
export class WhhStumbleuponIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhStyleIcon],svg[whh-style-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m64-848q0-46-33-79t-79-33h-672q-46 0-79 33t-33 79v158l.5.5l1.5 1.5q-2 9-2 16q0 40 28 68t68 28q96 0 96-98q-1-40-29-67q-3-16-3-27q0-21 30.5-42.5t65.5-21.5q36 0 66 20.5t30 43.5q0 13-2 27q-30 28-30 69q0 40 28 68t68 28q30 0 54-16.5t35-43.5q38 10 69 49t49 89q-21 13-34 34.5t-13 47.5q0 40 28 68t68 28t68-28t28-68q0-26-12.5-47.5t-34.5-34.5q25-60 74-101t101-41z"></svg:path>`,
})
export class WhhStyleIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSubdomainIcon],svg[whh-subdomain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 704q0 87-43 160.5T864.5 981T704 1024q-77 0-144-34.5T448 896q-91 0-174-35.5T131 765T35.5 622T0 448t35.5-174T131 131t143-95.5T448 0t174 35.5T765 131t95.5 143T896 448q59 45 93.5 112t34.5 144M512 448q-15-7-23.5-31.5T465 385q-2-6-4-9q0-5-6.5-28t-6.5-28q11-3 32 0t32 0q-6-12-8-33.5t-8-34.5q2-3 6-9.5t6-9.5q19-2 34.5-4.5T576 224v-32h64q-64-48-143-60q3 10 7.5 29.5T511 190q-8 3-18 7q1 0 3 1.5t3 1.5q-5 1-25.5-4t-25.5-4q2-8 1-32.5t4-31.5h-5q-111 0-198 69q32 53 38 59q-8-4-16 11t-12 31.5t-4 21.5q-18 8-45 5.5t-45 4.5q-3 20-19 59t-19 59q6 5 17 5t22-3t18.5 4t6.5 26q-2 2-4 17.5t-4 16.5h-49q20 95 89.5 163T390 763q-6-31-6-59q0-119 77-208.5T654 388q-42-61-46-68q-6 2-16 0t-16 0q-3 2-6 15t-5 15q6 39 9 55q-3 4-31 21.5T512 448m233-118q-4-6-9-10h-64q0 3 .5 16t-.5 16q10 7 32 16t32 16l-1 .5l-1 .5q13 2 28 5q-5-32-17-60m-40.5 182q-79.5 0-136 56T512 704t56.5 136t136 56T840 840t56-136t-56-136t-135.5-56"></svg:path>`,
})
export class WhhSubdomainIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSubmarineIcon],svg[whh-submarine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 615q0 11-9 18t-23 7t-26.5-7t-18.5-18l-41-29q-43 16-124.5 75T684 730l-30 80q-4 9-16 15.5t-26 6.5H348q-14 0-26-6.5T306 810l-16-42h-34q-106 0-181-75T0 512q0-91 56.5-160.5T200 262l42-112q4-9 16-15.5t26-6.5h36V96q0-13-9.5-22.5T288 64h-32V0h64q26 0 45 19t19 45v64h36q14 0 26 6.5t16 15.5l40 106h74q36 0 80 22.5t80 51t82.5 60.5t81.5 45l47-90q6-11 18.5-18t26.5-7t23 7t9 18zM192.5 448q-26.5 0-45.5 19t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45t-18.5-45.5t-45-19m192 0q-26.5 0-45.5 19t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45t-18.5-45.5t-45-19m192 0q-26.5 0-45.5 19t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45t-18.5-45.5t-45-19"></svg:path>`,
})
export class WhhSubmarineIcon {
  readonly viewBox = input("0 0 1024 832")
  readonly width = input("1.24em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSubrionIcon],svg[whh-subrion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 384q-87 0-160.5 43T491 543.5T448 704q0 85 43 160q-69 18-130 47.5t-94.5 53t-70 41.5t-68.5 18q-56 0-92-50T0 832q0-61 33-134t92-141q-28-17-44.5-46T64 448q0-81 92-151.5T392 202q-8-23-8-42q0-66 56-113T576 0q90 0 171 41.5t139.5 111t94.5 163t42 195.5q-45-59-111.5-93T768 384m0 64q106 0 181 75t75 181t-75 181t-181 75t-181-75t-75-181t75-181t181-75m64.5 256q26.5 0 45-18.5t18.5-45t-18.5-45.5t-45-19t-45.5 19t-19 45.5t19 45t45.5 18.5"></svg:path>`,
})
export class WhhSubrionIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSubscriptIcon],svg[whh-subscript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.31 896h-160v64h160q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-192q-12 0-20.5-7.5t-10.5-18.5V858q2-11 10.5-18.5t20.5-7.5h160v-64h-160q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h192q12 0 20.5 7.5t10.5 18.5v140q-2 11-10.5 18.5t-20.5 7.5m-369.5-145.5q-16.5 16.5-39.5 16.5t-40-16l-223-278l-224 278q-16 16-39.5 16t-40-16.5T.31 711t17-40l231-287l-231-288q-17-16-17-39.5t16.5-40t40-16.5t39.5 17l224 277l223-277q17-17 40-17t39.5 16.5t16.5 40t-16 39.5l-231 288l231 287q16 17 16 40t-16.5 39.5"></svg:path>`,
})
export class WhhSubscriptIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSubtitlesIcon],svg[whh-subtitles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 768H128q-53 0-90.5-37.5T0 640V128q0-53 37.5-90.5T128 0h768q53 0 90.5 37.5T1024 128v512q0 53-37.5 90.5T896 768M255.5 256q26.5 0 45.5 19t19 45h128q0-80-56-136t-136-56t-136 56t-56 136v128q0 80 56 136t136 56t136-56t56-136H320q0 27-19 45.5T255.5 512t-45-18.5T192 448V320q0-26 18.5-45t45-19m512 0q26.5 0 45.5 19t19 45h128q0-80-56-136t-136-56t-136 56t-56 136v128q0 80 56 136t136 56t136-56t56-136H832q0 27-19 45.5T767.5 512t-45-18.5T704 448V320q0-26 18.5-45t45-19"></svg:path>`,
})
export class WhhSubtitlesIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSubtitlesoffIcon],svg[whh-subtitlesoff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m933 891l-97-135q55-21 89.5-69.5T960 577H832q0 27-18.5 45.5T768 641q-7 0-15-2l-49-68V449q0-26 19-45t45-19t45 19t19 45h128q0-79-56-135.5T768 257q-66 0-117.5 40.5T583 401L389 129h507q53 0 90.5 37.5T1024 257v512q0 43-25.5 76.5T933 891m-56 115q-19 19-46 19t-45-19L146 111q-19-19-19-46t19-46t46-19t45 19l640 896q19 19 19 45.5t-19 45.5M256.5 641q-26.5 0-45.5-18.5T192 577V449q0-26 19-45t45-19q7 0 15 2l136 190h-87q0 27-18.5 45.5t-45 18.5M64 449v128q0 80 56 136t136 56q66 0 117.5-40.5T441 625l194 272H128q-53 0-90.5-37.5T0 769V257q0-43 25.5-76.5T91 135l97 135q-55 21-89.5 70T64 449"></svg:path>`,
})
export class WhhSubtitlesoffIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSubtractshapeIcon],svg[whh-subtractshape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-512q-53 0-90.5-37.5t-37.5-90.5V768h-128q-53 0-90.5-37.5T.428 640V128q0-53 37.5-90.5t90.5-37.5h512q53 0 90.5 37.5t37.5 90.5v128h128q53 0 90.5 37.5t37.5 90.5v512q0 53-37.5 90.5t-90.5 37.5m0-608q0-13-9.5-22.5t-22.5-9.5h-448q-13 0-22.5 9.5t-9.5 22.5v448q0 13 9.5 22.5t22.5 9.5h448q13 0 22.5-9.5t9.5-22.5z"></svg:path>`,
})
export class WhhSubtractshapeIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSumIcon],svg[whh-sum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 128H187l252 353q18 31 1 62q-2 3-65 91.5t-125 175L188 896h516q27 0 45.5 19t18.5 45.5t-18.5 45T704 1024H64q-27 0-45.5-18.5T0 960q0-18 20-46l286-401Q17 108 8 95Q0 80 0 64q0-27 19-45.5T64 0h640q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19"></svg:path>`,
})
export class WhhSumIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSunglassesIcon],svg[whh-sunglasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1025 513q0 70-14.5 115.5T965 697t-68.5 31.5T801 737t-95.5-8.5T637 697t-45.5-68.5T577 513q0-26-19-45t-45.5-19t-45 19t-18.5 45q0 70-14.5 115.5T389 697t-68.5 31.5T225 737t-95.5-8.5T61 697t-45.5-68.5T1 513q0-57 8-89q-16-28-1-55L225 27q11-19 31.5-24.5t39 5.5t24 32.5T314 81L158 326q42-5 99-5q75 0 114.5 11t56.5 37q51 16 85 16t85-16q17-26 56.5-37T769 321q56 0 99 5L712 81q-11-19-5.5-40.5t24-32.5t39-5.5T801 27l217 342q15 27-1 55q8 32 8 89M129 385q-30 0-47 18t-17 46t17 46t47 18q53 0 90.5-18.5T257 449t-37.5-45.5T129 385m576 0q-30 0-47 18t-17 46t17 46t47 18q53 0 90.5-18.5T833 449t-37.5-45.5T705 385"></svg:path>`,
})
export class WhhSunglassesIcon {
  readonly viewBox = input("0 0 1026 737")
  readonly width = input("1.4em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSunnysideupIcon],svg[whh-sunnysideup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 683q0 160-31.5 250.5T768 1024q-45 0-91.5-10t-84-25.5t-80.5-33t-80.5-32.5t-84-25.5T256 887q-63 0-114-37t-81-97.5t-45.5-131T0 478q0-30 19.5-66T61 350t55-61.5t44-49.5q17-22 40.5-67T242 91.5T289.5 28T352 0q53 0 137 20.5t176 58t173 83t133.5 103T1024 375q0 48-13 91t-32 72.5t-38 55t-32 48t-13 41.5M384 64q-29 0-57 24.5t-45.5 55t-40 71T204 273q-10 12-39 43.5t-48 54t-36 54T64 482q0 64 13.5 124.5t40 112T188 801t100 31q46 0 94 13t89 32l82 38l89 32l94 13q28 0 47.5-24t30-70t14.5-99.5t4-126.5q0-16 13-33.5t32-36.5t38-42t32-58.5t13-76.5q0-47-47.5-97.5t-119-90.5t-151-72.5T493 82T384 64m64 640q-80 0-136-56t-56-136t56-136t136-56t136 56t56 136t-56 136t-136 56"></svg:path>`,
})
export class WhhSunnysideupIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSunriseIcon],svg[whh-sunrise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 759q-97 62-96 137q1 36 4 55q92 33 92 73H0q0-40 93-74q3-27 3-54q-2-77-96-137q255-11 137-237q227 117 238-138q60 94 137 96q75 2 137-96q11 255 238 138q-118 226 137 237M512 576q-87 0-161 43T234.5 735.5T192 896q0 12 1 28q30-6 64-11q-1-15-1-17q0-106 75-181t181-75t181 75t75 181q0 3-1 17q34 5 64 11q1-17 1-28q0-87-42.5-160.5T673 619t-161-43m64-384v96q0 13-9.5 22.5T544 320h-64q-13 0-22.5-9.5T448 288v-96H335q-25-22-8-37L489 9q9-9 23-9t24 9l162 146q16 15-9 37z"></svg:path>`,
})
export class WhhSunriseIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSunsetIcon],svg[whh-sunset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 759q-97 62-96 137q1 36 4 55q92 33 92 73H0q0-40 93-74q3-28 3-54q-2-77-96-137q255-11 137-237q227 117 238-138q60 94 137 96q75 2 137-96q11 255 238 138q-118 226 137 237M512 576q-87 0-161 43T234.5 735.5T192 896q0 12 1 28q30-6 64-11q-1-15-1-17q0-106 75-181t181-75t181 75t75 181q0 2-1 17q34 5 64 11q1-17 1-28q0-87-43-160.5T672.5 619T512 576m24-265q-10 9-24 9t-23-9L327 165q-17-15 8-37h113V32q0-13 9.5-22.5T480 0h64q13 0 22.5 9.5T576 32v96h113q25 22 9 37z"></svg:path>`,
})
export class WhhSunsetIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSupermanIcon],svg[whh-superman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1005 237L557 749q-18 19-44.5 19T467 749L19 237Q0 219 0 192.5T19 147L147 19q19-19 45-19h640q26 0 45 19l128 128q19 18 19 45t-19 45M512 704l115-131q-20 3-39 3h-92q-59 0-105-10zM288 448h96q0 32 28.5 48t67.5 16h64q57 0 76.5-13t19.5-51q0-29-31-46.5T512 384q-77 0-120-1t-96.5-7.5T208 357zM192 64L64 192l65 74l-.5-4l-.5-6q0-47 45-92.5T282 91t122-27zm352 0q138 0 182 70l42-70zm325 37l-69 91H672q0-22-23-37t-51-21t-54-6h-96q-62 0-95 14.5T320 192q0 26 60 45t132 19q73 0 125 10.5t79.5 29.5t39.5 40.5t12 47.5q0 10-2 30l194-222z"></svg:path>`,
})
export class WhhSupermanIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSuperscriptIcon],svg[whh-superscript-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 192H832v64h160q13 0 22.5 9.5t9.5 22.5t-9.5 22.5T992 320H800q-12 0-20.5-7.5T769 294V154q2-11 10.5-18.5T800 128h160V64H800q-13 0-22.5-9.5T768 32t9.5-22.5T800 0h192q12 0 20.5 7.5T1023 26v140q-2 11-10.5 18.5T992 192m-369.5 814.5Q606 1023 583 1023t-40-17L320 729L96 1006q-16 17-39.5 17t-40-16.5t-16.5-40T17 927l231-288L17 352Q0 335 0 312t16.5-39.5t40-16.5T96 272l224 278l223-278q17-16 40-16t39.5 16.5T639 312t-16 40L392 639l231 288q16 16 16 39.5t-16.5 40"></svg:path>`,
})
export class WhhSuperscriptIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSupportIcon],svg[whh-support-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 896q-66 0-134-16q-34 40-69.5 69.5t-60 43.5t-47.5 21.5t-30 8.5t-11 1q26-57 30-124.5T176 786Q94 723 47 635T0 448q0-91 40.5-174t109-143T313 35.5T512 0t199 35.5T874.5 131t109 143t40.5 174t-40.5 174t-109 143T711 860.5T512 896m-64-160q0 13 9 22.5t23 9.5h64q13 0 22.5-9.5T576 736v-64q0-14-9.5-23t-22.5-9h-64q-14 0-23 9t-9 23zm64-608q-85 0-152 37.5T268 262l116 58q0-27 37.5-45.5T512 256t90.5 18.5t37.5 45t-37.5 45.5t-90.5 19q-27 0-45.5 18.5T448 448v96q0 13 9 22.5t23 9.5h64q13 0 22.5-9.5T576 544v-39q83-16 137.5-67.5T768 320q0-80-75-136t-181-56"></svg:path>`,
})
export class WhhSupportIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSupportaltIcon],svg[whh-supportalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m-128-83q63 19 128 19t128-19V733q-59 35-127.5 35T384 733zm-93-557H83q-19 63-19 128t19 128h208q-35-60-35-128t35-128M640 83q-63-19-128-19T384 83v208q60-35 128-35t128 35zM512 320q-80 0-136 56t-56 136t56 136t136 56t136-56t56-136t-56-136t-136-56m221 64q35 60 35 128t-35 128h208q19-63 19-128t-19-128z"></svg:path>`,
})
export class WhhSupportaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSurveyIcon],svg[whh-survey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M855.048 768h-87l-256 256V768h-344q-56 0-112-57t-56-115V172q0-58 56-115t112-57h687q57 0 113 57t56 115v424q0 58-56 115t-113 57m-471-288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm192-128q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm192-128q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v320q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5z"></svg:path>`,
})
export class WhhSurveyIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSwipedownIcon],svg[whh-swipedown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.297 1024h-384q-21 0-51.5-34.5t-53.5-81t-24-77.5q0-24-16-81.5t-31.5-131.5t-15.5-138v-32q0-27 18.5-45.5t45.5-18.5q22 0 39 13t22 34q3-28 3-47q0-59 2-113t8-122t19.5-108.5t34.5-40.5q45 0 54.5 45t9.5 211q0 37 6.5 64t16 39t19 18t15.5 7h7q0-27 18.5-45.5t45.5-18.5q64 0 64 128q0-27 18.5-45.5t45-18.5t45.5 18.5t19 45.5v64q0-27 18.5-45.5t45-18.5t45.5 18.5t19 45.5v288q0 46-7.5 83t-18 59.5t-25 39.5t-27 24.5t-25.5 12t-17.5 5t-7.5.5m-724-518q-5 6-12 6t-12-6l-145-163q-8-9 5-23h120V32q0-14 9-23t22.5-9t23 9t9.5 23v288h120q13 14 4 23z"></svg:path>`,
})
export class WhhSwipedownIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSwipeupIcon],svg[whh-swipeup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.9 1024h-384q-21 0-51.5-34.5t-53.5-81t-24-77.5q0-24-16-81.5T336.4 618t-15.5-138v-32q0-27 18.5-45.5t45.5-18.5q22 0 39 13t22 34q3-28 3-47q0-59 2-113t8-121.5T478.4 41t34.5-41q45 0 54.5 45t9.5 211q0 37 6.5 64t16 39t19 18t15.5 7h7q0-27 18.5-45.5t45.5-18.5q64 0 64 128q0-27 18.5-45.5t45-18.5t45.5 18.5t19 45.5v64q0-27 18.5-45.5t45.5-18.5t45.5 18.5t18.5 45.5v288q0 46-7 83t-18.5 59.5t-25 39.5t-27 24.5t-25 12t-18.5 5.5zm-704-832v288q0 13-9.5 22.5t-23 9.5t-22.5-9.5t-9-22.5V192H8.9q-13-14-5-24l145-163q5-5 12-5t12 5l144 163q9 10-4 24z"></svg:path>`,
})
export class WhhSwipeupIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSwitchIcon],svg[whh-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-768.5-960q-26.5 0-45 18.5t-18.5 45t18.5 45.5t45 19t45.5-19t19-45.5t-19-45t-45.5-18.5m0 768q-26.5 0-45 18.5t-18.5 45t18.5 45.5t45 19t45.5-19t19-45.5t-19-45t-45.5-18.5m576.5-576q0-27-19-45.5t-45-18.5h-256q-27 0-45.5 18.5t-18.5 45.5v512q0 26 18.5 45t45.5 19h256q26 0 45-19t19-45zm192-192q-27 0-45.5 18.5t-18.5 45t18.5 45.5t45.5 19t45.5-19t18.5-45.5t-18.5-45t-45.5-18.5m0 768q-27 0-45.5 18.5t-18.5 45t18.5 45.5t45.5 19t45.5-19t18.5-45.5t-18.5-45t-45.5-18.5m-320-64h-128q-27 0-45.5-19t-18.5-45v-64q0-27 18.5-45.5t45.5-18.5h128q26 0 45 18.5t19 45.5v64q0 26-19 45t-45 19m0-256h-128q-27 0-45.5-19t-18.5-45V320q0-27 18.5-45.5t45.5-18.5h128q26 0 45 18.5t19 45.5v128q0 26-19 45t-45 19"></svg:path>`,
})
export class WhhSwitchIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSwitchoffIcon],svg[whh-switchoff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 768H128q-53 0-90.5-37.5T0 640V128q0-53 37.5-90.5T128 0h768q53 0 90.5 37.5T1024 128v512q0 53-37.5 90.5T896 768m0-576q0-27-19-45.5T832 128H192q-27 0-45.5 18.5T128 192v384q0 26 18.5 45t45.5 19h640q26 0 45-19t19-45zM768 576H576q-27 0-45.5-19T512 512V256q0-27 18.5-45.5T576 192h192q26 0 45 18.5t19 45.5v256q0 26-19 45t-45 19"></svg:path>`,
})
export class WhhSwitchoffIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSwitchoffaltIcon],svg[whh-switchoffalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-767.5-960q-26.5 0-45.5 18.5t-19 45t19 45.5t45.5 19t45-19t18.5-45.5t-18.5-45t-45-18.5m0 768q-26.5 0-45.5 18.5t-19 45t19 45.5t45.5 19t45-19t18.5-45.5t-18.5-45t-45-18.5m639.5-512h-512q-27 0-45.5 18.5t-18.5 45.5v256q0 26 18.5 45t45.5 19h512q26 0 45-19t19-45V384q0-27-19-45.5t-45-18.5m127.5-256q-26.5 0-45 18.5t-18.5 45t18.5 45.5t45.5 19t45.5-19t18.5-45.5t-19-45t-45.5-18.5m0 768q-26.5 0-45 18.5t-18.5 45t18.5 45.5t45.5 19t45.5-19t18.5-45.5t-19-45t-45.5-18.5m-191.5-192h-128q-27 0-45.5-19t-18.5-45V448q0-27 18.5-45.5t45.5-18.5h128q27 0 45.5 18.5t18.5 45.5v128q0 26-18.5 45t-45.5 19"></svg:path>`,
})
export class WhhSwitchoffaltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSwitchonIcon],svg[whh-switchon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 768H128q-53 0-90.5-37.5T0 640V128q0-53 37.5-90.5T128 0h768q53 0 90.5 37.5T1024 128v512q0 53-37.5 90.5T896 768m0-576q0-27-19-45.5T832 128H192q-27 0-45.5 18.5T128 192v384q0 26 18.5 45t45.5 19h640q26 0 45-19t19-45zM448 576H256q-27 0-45.5-19T192 512V256q0-27 18.5-45.5T256 192h192q26 0 45 18.5t19 45.5v256q0 26-19 45t-45 19"></svg:path>`,
})
export class WhhSwitchonIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSwitchonaltIcon],svg[whh-switchonalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-768.5-960q-26.5 0-45 18.5t-18.5 45t18.5 45.5t45 19t45.5-19t19-45.5t-19-45t-45.5-18.5m.5 768q-27 0-45.5 18.5t-18.5 45t18.5 45.5t45 19t45.5-19t19-45.5t-18.5-45t-45.5-18.5m640-512h-512q-27 0-45.5 18.5t-18.5 45.5v256q0 26 18.5 45t45.5 19h512q26 0 45-19t19-45V384q0-27-18.5-45.5t-45.5-18.5m128-256q-27 0-45.5 18.5t-18.5 45t18.5 45.5t45 19t45.5-19t19-45.5t-18.5-45t-45.5-18.5m0 768q-27 0-45.5 18.5t-18.5 45t18.5 45.5t45 19t45.5-19t19-45.5t-18.5-45t-45.5-18.5m-448-192h-128q-27 0-45.5-19t-18.5-45V448q0-27 18.5-45.5t45.5-18.5h128q26 0 45 18.5t19 45.5v128q0 26-18.5 45t-45.5 19"></svg:path>`,
})
export class WhhSwitchonaltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSwordIcon],svg[whh-sword-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1013.998 963l-51 51q-10 10-24.5 10t-25.5-10l-179-180l-117 117q-9 10-23 10t-24-10l-48-48q-10-10-10-24t10-23l85-85l-591-591q-4-5-7.5-10.5t-5-9.5t-2.5-9.5t-1-8.5V32q0-13 9.5-22.5t22.5-9.5h110.5l8 1l9.5 2.5l9.5 5l10.5 7.5l591 591l85-85q9-10 23-10t24 10l48 48q10 10 10 24t-10 24l-117 116l180 179q10 11 10 25.5t-10 24.5"></svg:path>`,
})
export class WhhSwordIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSymphonyIcon],svg[whh-symphony-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 1024q-53 0-90.5-37.5T768 896t37.5-90.5T896 768t90.5 37.5T1024 896t-37.5 90.5T896 1024M288 448q5 2 16 6q33 14 49.5 20.5T399 494t43.5 22t37 23.5t34 28t25.5 32t20.5 38.5t11.5 45t5 53q0 124-83.5 206T288 1024q-59 0-103-11t-77.5-35.5T50 923T0 848l96-80q27 54 76 91t116 37q66 0 113-47t47-113q0-26-8-47t-18.5-34.5t-34.5-29t-43-24.5t-56-25q-5-2-16-6q-33-14-49.5-20.5T177 530t-43.5-22t-37-23.5t-34-28t-25.5-32T16.5 386T5 341t-5-53Q0 169 84.5 84.5T288 0q111 0 192.5 73.5T574 256H445q-11-55-55-91.5T288 128q-66 0-113 47t-47 113q0 25 12.5 47.5t37 42.5t49.5 35.5t61 34.5"></svg:path>`,
})
export class WhhSymphonyIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSyncIcon],svg[whh-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.356 1024h-384q-26 0-45-18.5t-19-45.5V640q0-27 19-45.5t45-18.5h192q0-26 19-45t45.5-19t45 19t18.5 45h64q27 0 45.5 19t18.5 45v320q0 27-18.5 45.5t-45.5 18.5m-64-288q0-13-9.5-22.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 22.5v128q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5zm-63.5-288q-26.5 0-45.5-18.5t-19-45t19-45.5t45.5-19t45 19t18.5 45.5t-18.5 45t-45 18.5m0-192q-26.5 0-45.5-18.5t-19-45.5t19-45.5t45.5-18.5t45 18.5t18.5 45.5t-18.5 45.5t-45 18.5m-192 0q-26.5 0-45.5-18.5t-19-45.5t19-45.5t45.5-18.5t45 18.5t18.5 45.5t-18.5 45.5t-45 18.5m-192.5 192h-192q0 27-18.5 45.5t-45 18.5t-45.5-18.5t-19-45.5h-64q-26 0-45-18.5t-19-45.5V64q0-27 19-45.5t45-18.5h384q27 0 45.5 18.5t18.5 45.5v320q0 27-18.5 45.5t-45.5 18.5m-64-288q0-13-9.5-22.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 22.5v128q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5zm-192.5 416q26.5 0 45.5 18.5t19 45t-19 45.5t-45 19t-45-19t-19-45.5t18.5-45t45-18.5m0 192q26.5 0 45.5 18.5t19 45.5t-19 45.5t-45 18.5t-45-18.5t-19-45.5t18.5-45.5t45-18.5m192.5 0q27 0 45.5 18.5t18.5 45.5t-18.5 45.5t-45 18.5t-45.5-18.5t-19-45.5t18.5-45.5t45.5-18.5"></svg:path>`,
})
export class WhhSyncIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSyncaltIcon],svg[whh-syncalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1012 320H897v384q0 26-18.5 44.5T833 767H705q-27 0-45.5-18.5T641 704V320H527q-9 0-12.5-18t4.5-29L747 11q9-11 22-11t22 11l228 262q8 11 5 29t-12 18m-733 693q-9 11-22 11t-22-11L7 751q-9-11-5.5-29T14 704h115V320q0-27 18.5-45.5T193 256h128q27 0 45.5 18.5T385 320v384h114q9 0 12.5 18t-4.5 29z"></svg:path>`,
})
export class WhhSyncaltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSynckeeplocalIcon],svg[whh-synckeeplocal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.694 1024h-256q-53 0-90.5-37.5t-37.5-90.5V640q0-53 37.5-90.5t90.5-37.5h256q53 0 90.5 37.5t37.5 90.5v256q0 53-37.5 90.5t-90.5 37.5m0-576q-27 0-45.5-18.5t-18.5-45t19-45.5t45.5-19t45 19t18.5 45.5t-18.5 45t-45.5 18.5m-.5-256q-26.5 0-45-18.5t-18.5-45t19-45.5t45.5-19t45 19t18.5 45.5t-19 45t-45.5 18.5m-255 0q-26.5 0-45.5-18.5t-19-45t19-45.5t45.5-19t45 19t18.5 45.5t-18.5 45t-45 18.5m-384.5 320q-106 0-181-75t-75-181t75-181t181-75t181 75t75 181t-75 181t-181 75m0-384q-53 0-90.5 37.5t-37.5 90.5t37.5 90.5t90.5 37.5t90.5-37.5t37.5-90.5t-37.5-90.5t-90.5-37.5m-128 448q27 0 45.5 19t18.5 45.5t-18.5 45t-45.5 18.5t-45.5-18.5t-18.5-45.5t18.5-45.5t45.5-18.5m0 256q27 0 45.5 19t18.5 45.5t-18.5 45t-45.5 18.5t-45.5-18.5t-18.5-45t18.5-45.5t45.5-19m256 0q27 0 45.5 19t18.5 45.5t-18.5 45t-45 18.5t-45.5-18.5t-19-45t18.5-45.5t45.5-19"></svg:path>`,
})
export class WhhSynckeeplocalIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSynckeepserverIcon],svg[whh-synckeepserver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.694 1024h-256q-53 0-90.5-37.5t-37.5-90.5V640q0-53 37.5-90.5t90.5-37.5h256q53 0 90.5 37.5t37.5 90.5v256q0 53-37.5 90.5t-90.5 37.5m0-352q0-13-9.5-22.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5zm0-224q-27 0-45.5-18.5t-18.5-45.5t19-45.5t45.5-18.5t45 19t18.5 45.5t-18.5 45t-45.5 18.5m0-256q-27 0-45.5-18.5t-18.5-45.5t19-45.5t45.5-18.5t45 18.5t18.5 45.5t-18.5 45.5t-45.5 18.5m-256 0q-27 0-45.5-18.5t-18.5-45.5t18.5-45.5t45.5-18.5t45.5 18.5t18.5 45t-18.5 45.5t-45.5 19m-384 320q-106 0-181-75t-75-181t75-181t181-75t181 75t75 181t-75 181t-181 75m-127.5 64q26.5 0 45 18.5t18.5 45.5t-18.5 45.5t-45 18.5t-45.5-18.5t-19-45.5t19-45.5t45.5-18.5m0 256q26.5 0 45 19t18.5 45.5t-18.5 45t-45 18.5t-45.5-18.5t-19-45t19-45.5t45.5-19m256 0q26.5 0 45 19t18.5 45.5t-18.5 45t-45 18.5t-45.5-18.5t-19-45t19-45.5t45.5-19"></svg:path>`,
})
export class WhhSynckeepserverIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhSystemfolderIcon],svg[whh-systemfolder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024.38 192v576q0 53-37.5 90.5t-90.5 37.5h-768q-53 0-90.5-37.5T.38 768V256q0-26 19-45t45-19h480l46-84q7-19 28-31.5t44-12.5h240q24 0 45 12.5t29 31.5zm-325 213q7-12 3.5-25.5t-16.5-20.5l-62-34q-13-7-27-3.5t-22 15.5l-30 50q-17-3-33-3t-33 3l-30-50q-8-12-22-15.5t-27 3.5l-62 34q-13 7-16.5 20.5t3.5 25.5l34 56q-17 23-27 51h-44q-13 0-22.5 9t-9.5 23v64q0 14 9.5 23.5t22.5 9.5h44q10 27 27 50l-34 56q-7 13-3.5 26.5t16.5 20.5l62 33q13 7 27 3.5t22-15.5l30-50q17 3 33 3t33-3l30 50q8 12 22 15.5t27-3.5l62-33q13-7 16.5-20.5t-3.5-26.5l-34-56q17-23 27-50h44q13 0 22.5-9.5t9.5-23.5v-64q0-14-9.5-23t-22.5-9h-44q-10-28-27-51zm-187 299q-53 0-90.5-37.5t-37.5-90.5t37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5m-466-660q7-19 28-31.5t44-12.5h240q24 0 45 12.5t29 31.5l48 84H.38z"></svg:path>`,
})
export class WhhSystemfolderIcon {
  readonly viewBox = input("0 0 1025 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTIcon],svg[whh-t-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 128H448v832q0 27-19 45.5t-45 18.5t-45-18.5t-19-45.5V128H64q-27 0-45.5-18.5T0 64.5T18.5 19T64 0h640q26 0 45 19t19 45.5t-18.5 45T704 128"></svg:path>`,
})
export class WhhTIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTUpperCaseIcon],svg[whh-t-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 128H448v832q0 27-19 45.5t-45 18.5t-45-18.5t-19-45.5V128H64q-27 0-45.5-18.5T0 64.5T18.5 19T64 0h640q26 0 45 19t19 45.5t-18.5 45T704 128"></svg:path>`,
})
export class WhhTUpperCaseIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTabletIcon],svg[whh-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 768H128q-53 0-90.5-37.5T0 640V128q0-53 37.5-90.5T128 0h768q53 0 90.5 37.5T1024 128v512q0 53-37.5 90.5T896 768m0-640H128v512h768zM192 576V192h512z"></svg:path>`,
})
export class WhhTabletIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTabletscreensizeIcon],svg[whh-tabletscreensize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.226 768h-896q-26 0-45-18.5t-19-45.5V64q0-26 19-45t45-19h896q27 0 45.5 19t18.5 45v640q0 27-18.5 45.5t-45.5 18.5m0-704h-896v640h896zm-704 128l576 320l64-64v192h-192l64-64l-576-320l-64 64V128h192z"></svg:path>`,
})
export class WhhTabletscreensizeIcon {
  readonly viewBox = input("0 0 1025 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTacoIcon],svg[whh-taco-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1015 331l-681 684q-10 9-23 9t-23-9q-83-84-123.5-187t-37-202T170 435t108-160q69-67 161-105t190.5-42t201 36T1015 286q9 9 9 22.5t-9 22.5M61 753Q-20 592 7 426.5T150 147T432 7t326 54q-78 1-143 7T476.5 90t-138 49T225 220q-52 52-86.5 114.5T88 469.5T66.5 606T61 753"></svg:path>`,
})
export class WhhTacoIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTaggedIcon],svg[whh-tagged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 256H640L512 768H192l128-512H128L0 128L128 0h896z"></svg:path>`,
})
export class WhhTaggedIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTagsIcon],svg[whh-tags-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1006.23 623l-261 264q-2 2-13 8q-10-6-12-8l-16-14l224-226q32-33 32-65q0-30-6-51.5t-11.5-29t-14.5-16.5l-448-453q-10-10-30-21t-29-11h62q28 1 45 18l478 483q18 19 18 61.5t-18 60.5m-142-9l-256 259q-19 19-48.5 19t-47.5-19l-494-501q-25-26-15-62q-3-10-3-19V65q0-27 19-46t45-19h224q9 0 18 3q37-10 62 15l496 499q18 19 18 49t-18 48m-640-485q-40 0-68 28.5t-28 69t28 68.5t68 28t68-28t28-68.5t-28-69t-68-28.5"></svg:path>`,
})
export class WhhTagsIcon {
  readonly viewBox = input("0 0 1025 895")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTagverticalIcon],svg[whh-tagvertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M641 1024H129q-53 0-90.5-37.5T1 896V393q-2-29 18-50L340 19q19-19 45-19q27 0 46 19l80 81l160 162l80 81q9 10 14 20.5t4 16.5v516q0 53-37.5 90.5T641 1024M385 192q-53 0-90.5 37.5T257 320t37.5 90.5T385 448t90.5-37.5T513 320t-37.5-90.5T385 192"></svg:path>`,
})
export class WhhTagverticalIcon {
  readonly viewBox = input("0 0 770 1024")
  readonly width = input("0.76em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTallglassIcon],svg[whh-tallglass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 1024H64q-26 0-45-19T0 960V32Q0 19 9.5 9.5T32 0h448q13 0 22.5 9.5T512 32v928q0 27-19 45.5t-45 18.5M138 810l80 22q13 3 16-10l22-80q3-13-10-16l-80-22q-13-3-16 10l-22 80q-1 5 1.5 10t8.5 6M68 570l65 65q11 11 21 0l65-65q11-10 0-21l-65-65q-10-11-21 0l-65 65q-11 11 0 21M448 64H64v256h384zm0 602l-22-80q-1-6-6-8.5t-10-1.5l-80 22q-13 3-10 16l22 80q1 6 6 8.5t10 1.5l80-22q13-3 10-16"></svg:path>`,
})
export class WhhTallglassIcon {
  readonly viewBox = input("0 0 512 1024")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTampermonkeyIcon],svg[whh-tampermonkey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-640-448q-80 0-136 56t-56 136t56 136t136 56t136-56t56-136t-56-136t-136-56m512 0q-80 0-136 56t-56 136t56 136t136 56t136-56t56-136t-56-136t-136-56"></svg:path>`,
})
export class WhhTampermonkeyIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTankIcon],svg[whh-tank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m969 439l50 128q12 29 1 51t-39 22h-70q26 29 38 64h44q13 0 22.5 9.5t9.5 22.5t-9.5 22.5T993 768h-32q0 25-9 54l25 14q12 7 15 20t-3.5 24t-19 14.5T945 892l-20-12q-9 12-23 26l23 38q7 12 3.5 24.5t-15 19T889 991t-20-15l-20-34q-39 18-80 18v32q0 13-9.5 22.5T737 1024t-22.5-9.5T705 992v-32h-64v32q0 13-9.5 22.5T609 1024t-22.5-9.5T577 992v-32h-64v32q0 13-9.5 22.5T481 1024t-22.5-9.5T449 992v-32h-64v32q0 13-9.5 22.5T353 1024t-22.5-9.5T321 992v-32h-64v32q0 13-9.5 22.5T225 1024t-22.5-9.5T193 992v-44q-21-8-37-18l-43 26q-12 6-24.5 2.5t-19-14.5t-3-24T81 900l25-14q-19-25-29-54H33q-13 0-22.5-9.5T1 800t9.5-22.5T33 768h32q0-25 9-54l-25-14q-11-7-14.5-19.5t3-24t19-15T81 644l21 12q5-8 13-16H52q-27 0-41.5-22T3 567l31-128q5-23 25-39t43-16h142q-27 0-41.5-21.5T195 311l31-127q5-24 25-40t43-16h279q19 0 38 12t31 30L927 9q23-13 49-6.5t39.5 29.5t6.5 48.5t-30 39.5L691 290l8 21q12 29 1 51t-39 22h232q23 0 45 16t31 39M257.5 704q-26.5 0-45.5 19t-19 45t19 45t45.5 19t45-19t18.5-45t-18.5-45t-45-19m256 0q-26.5 0-45.5 19t-19 45t19 45t45.5 19t45-19t18.5-45t-18.5-45t-45-19m256 0q-26.5 0-45.5 19t-19 45t19 45t45.5 19t45-19t18.5-45t-18.5-45t-45-19"></svg:path>`,
})
export class WhhTankIcon {
  readonly viewBox = input("0 0 1026 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTargetIcon],svg[whh-target-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-896q-104 0-192.5 51.5t-140 140T128 512t51.5 192.5t140 140T512 896t192.5-51.5t140-140T896 512t-51.5-192.5t-140-140T512 128m0 704q-87 0-160.5-43T235 672.5T192 512t43-160.5T351.5 235T512 192t160.5 43T789 351.5T832 512t-43 160.5T672.5 789T512 832m-.5-512Q432 320 376 376t-56 136t56 136t136 56t136-56t56-136t-56.5-136t-136-56m.5 320q-53 0-90.5-37.5T384 512t37.5-90.5T512 384t90.5 37.5T640 512t-37.5 90.5T512 640"></svg:path>`,
})
export class WhhTargetIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTaskfreakIcon],svg[whh-taskfreak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928 513q0 72-25 141l76 67q-21 49-54 93l-95-34q-47 56-110 93l16 100q-49 24-101 37l-52-87q-38 6-72 6t-72-6l-52 87q-52-13-101-37l16-100q-63-37-110-93l-95 34q-33-44-54-93l77-67q-26-69-26-141L0 478q4-55 18-107l102-2q26-69 72-124l-50-88q39-40 82-69l80 64q63-36 134-49L457 3q28-3 54.5-3T565 3l19 100q72 13 134 49l80-64q43 29 82 69l-50 88q46 55 72 124l102 2q14 51 18 107zM511 385q-53 0-90.5 37.5T383 513t37.5 90.5T511 641t90.5-37.5T639 513t-37.5-90.5T511 385"></svg:path>`,
})
export class WhhTaskfreakIcon {
  readonly viewBox = input("0 0 1022 1010")
  readonly width = input("1.02em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTasksIcon],svg[whh-tasks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 640h-768q-53 0-90.5-37.5T.428 512t37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5m0-192h-480q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h480q26 0 45-18.5t19-45t-19-45.5t-45-19m0-192h-768q-53 0-90.5-37.5T.428 128t37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5m0-192h-96q-13 0-22.5 9.5t-9.5 22.5v64q0 14 9.5 23t22.5 9h96q26 0 45-18.5t19-45t-19-45.5t-45-19m-768 704h768q53 0 90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5h-768q-53 0-90.5-37.5T.428 896t37.5-90.5t90.5-37.5m448 160q0 13 9.5 22.5t22.5 9.5h288q26 0 45-18.5t19-45t-19-45.5t-45-19h-288q-13 0-22.5 9.5t-9.5 22.5z"></svg:path>`,
})
export class WhhTasksIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTaxiIcon],svg[whh-taxi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 877v82q0 27-19 45.5t-45.5 18.5t-45-18.5T832 959v-64H192v64q0 27-18.5 45.5t-45 18.5t-45.5-18.5T64 959v-82q-29-17-46.5-46T0 767V575q0-31 27.5-71.5T95 430l33-111q0-53 37.5-90.5T256 191h512q53 0 90.5 37.5T896 319l33 111q40 33 67.5 73.5T1024 575v192q0 35-17.5 64T960 877M128 703.5q0 26.5 19 45t45.5 18.5t45-18.5t18.5-45t-18.5-45.5t-45-19t-45.5 19t-19 45.5M800 383q0-26-18.5-45T736 319H288q-27 0-45.5 19T224 383l-32 64q0 27 19 45.5t45 18.5h512q26 0 45-18.5t19-45.5zm31.5 256q-26.5 0-45 19T768 703.5t18.5 45t45 18.5t45.5-18.5t19-45t-19-45.5t-45.5-19M347 127l29-106q4-9 14-15t21-6h205q10 0 20 6t14 15l28 106z"></svg:path>`,
})
export class WhhTaxiIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTeaIcon],svg[whh-tea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M678 832H346q-47-33-89-76q-34 12-65 12q-80 0-136-56.5T0 576q0-63 37-113t95-69q1-7 1-10h379v147l-128 74l94 163l162-94l-64-111V384h315q5 35 5 128q0 45-21 94t-55 91t-69.5 75.5T678 832M128 512q0-14 1-47q-30 17-47.5 46.5T64 576q0 53 37.5 90.5T192 704q4 0 16-2q-80-101-80-190m448-320q0 23 9 55q39 27 51 73h-64q-2-14-5-24q-55-38-55-104q0-53 37.5-90.5T640 64q14 0 32 4q-42 11-69 45t-27 79m-192-64q0 23 9 55q55 39 55 105q0 14-5 32h-64q5-18 5-32q0-24-9-56q-55-38-55-104q0-53 37.5-90.5T448 0q15 0 32 4q-42 11-69 45t-27 79m384 896H256q-55 0-116-21.5t-100.5-52T0 896h1024q0 24-39.5 54.5t-100.5 52t-116 21.5"></svg:path>`,
})
export class WhhTeaIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTeamviewerIcon],svg[whh-teamviewer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-384-896q-104 0-192.5 51.5t-140 140t-51.5 192.5t51.5 192.5t140 140t192.5 51.5t192.5-51.5t140-140t51.5-192.5t-51.5-192.5t-140-140t-192.5-51.5m128 448h-256v128l-192-192l192-192v128h256V320l192 192l-192 192z"></svg:path>`,
})
export class WhhTeamviewerIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTeapotIcon],svg[whh-teapot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 320q0 128-64 128q-3 0-5 5q5 32 5 59q0 108-54.5 214.5T699 896H325q-99-71-155-197q-18 5-42 5q-34 0-64-46.5T17 545T0 416q0-160 128-160q51 0 80 22q54-70 133.5-110T512 128q97 0 181 45.5T830 297q2-6 2-9q0-66 47-113t113-47q16 0 32 3v125q-27 0-45.5 18.5T960 320m-832 0q-64 0-64 114q0 57 27.5 120.5T147 635q-19-65-19-123q0-85 37-163q-17-29-37-29M448 63.5q0-26.5 18.5-45t45-18.5T557 18.5t19 45t-19 45.5t-45.5 19t-45-19T448 63.5"></svg:path>`,
})
export class WhhTeapotIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTechnoratiIcon],svg[whh-technorati-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M706 564q-105 0-193.5-34.5t-140-93.5T321 307.5t51.5-129t140-93.5T706 51q28 0 61 3q108 62 176.5 166.5T1024 452q-53 51-137 81.5T706 564M192 307q0 105 69 193t185 139l-61 182l321-129q170 0 307-77q-40 173-179.5 285.5T513 1013q-104 0-199-40.5T150 863T40.5 699T0 500q0-181 112.5-320.5T397 0q-95 54-150 134.5T192 307"></svg:path>`,
})
export class WhhTechnoratiIcon {
  readonly viewBox = input("0 0 1024 1013")
  readonly width = input("1.02em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTectileIcon],svg[whh-tectile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 640H512q-53 0-90.5 37.5T384 768v192q0 26-18.5 45t-45.5 19H64q-26 0-45-19T0 960V704q0-26 19-45t45-19h192q53 0 90.5-37.5T384 512V64q0-26 19-45t45-19h512q27 0 45.5 19t18.5 45v512q0 27-19 45.5T960 640"></svg:path>`,
})
export class WhhTectileIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTeddybearIcon],svg[whh-teddybear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M987 283q-25 25-63 33q36 79 36 165q0 113-60 209T737 841.5T512 897t-225-55.5T124 690T64 481q0-86 36-165q-38-8-63-33q-42-42-36-108T57.5 58T174 1t109 37q27 27 34 68q93-41 195-41t195 41q8-41 34-68Q784-5 850 1t116.5 57t56.5 117t-36 108M233 87q-25-26-64.5-22t-70 34.5t-34 70T86 234q19 20 49 22q48-69 120-116q-1-33-22-53m86.5 234q-26.5 0-45 18.5t-18.5 45t18.5 45.5t45 19t45.5-19t19-45.5t-19-45t-45.5-18.5m385 0q-26.5 0-45.5 18.5t-19 45t19 45.5t45.5 19t45-19t18.5-45.5t-18.5-45t-45-18.5M512 513q-106 0-181 47t-75 113t75 113t181 47t181-47t75-113t-75-113t-181-47M925.5 99.5q-30.5-30.5-70-34T791 87q-21 21-22 53q72 47 120 116q30-2 49-22q25-25 21.5-64.5t-34-70M512 705q-32 0-80-21t-48-43q0-48 16-56t112-8t112 8t16 56q0 23-48 43.5T512 705"></svg:path>`,
})
export class WhhTeddybearIcon {
  readonly viewBox = input("0 0 1024 897")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTelescopeIcon],svg[whh-telescope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M988 988q-27 27-51 33.5t-41-1.5t-36-27L755 889q-71 26-126-30L513 742V512q0-53-38-90.5T384 384t-90.5 37.5T256 512v77L34 367Q6 339 1.5 298.5t20-92.5T100 100t106-78.5t92.5-20T367 34l304 304q49 49 25 129l163 162q54 55 29 126l105 105q19 19 27 35.5t1.5 41T988 988m-764-27h96V512q0-26 19-45t45.5-19t45 19t18.5 45v449h97q13 0 22.5 9.5T577 993t-9.5 22.5t-22.5 9.5H224q-13 0-22.5-9.5T192 993t9.5-22.5T224 961"></svg:path>`,
})
export class WhhTelescopeIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTemperatureIcon],svg[whh-temperature-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 1024q-87 0-160.5-43T43 864.5T0 704q0-77 34.5-144T128 448V197q0-81 56-139T319.5 0t136 58T512 197v251q59 45 93.5 112T640 704q0 87-43 160.5T480.5 981T320 1024m64-501V192q0-27-19-45.5T319.5 128t-45 18.5T256 192v331q-57 20-92.5 69.5T128 704q0 80 56 136t135.5 56t136-56T512 704q0-62-35.5-111.5T384 523"></svg:path>`,
})
export class WhhTemperatureIcon {
  readonly viewBox = input("0 0 640 1024")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTempleIcon],svg[whh-temple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 726v234q0 27-18.5 45.5T832 1024H576V896q0-27-18.5-45.5t-45-18.5t-45.5 18.5t-19 45.5v128H192q-26 0-45-18.5T128 960V726q-56-47-92-91.5T0 572q0-53 32-60q11 4 67.5 26t92.5 35V448q-57-35-92.5-73T64 316q0-60 32-60q14 5 57 23.5t76.5 29.5t58.5 11q27 0 54.5-18.5t54-52.5t44-62t40.5-68q-33-18-33-55q0-27 19-45.5T512.5 0t45 18.5T576 64q0 37-33 55q22 40 40 68t44.5 62t54 52.5T736 320q25 0 58.5-11t76.5-29.5t57-23.5q32 0 32 60q0 21-35.5 59T832 448v125q36-13 92.5-35t67.5-26q32 7 32 60q0 18-36 62.5T896 726"></svg:path>`,
})
export class WhhTempleIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTennisIcon],svg[whh-tennis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512q139 0 257-68.5T443.5 257T512 0q139 0 257 68.5T955.5 255t68.5 257q-139 0-257 68.5T580.5 767T512 1024M4 448q22-174 146-298T448 4q-1 120-60.5 222T226 387.5T4 448m1016 128q-22 174-146 298t-298 146q1-120 60.5-222T798 636.5t222-60.5"></svg:path>`,
})
export class WhhTennisIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTerminalIcon],svg[whh-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-448-960q-27 0-45.5 18.5t-18.5 45.5t18.5 45.5t45 18.5t45.5-18.5t19-45.5t-18.5-45.5t-45.5-18.5m192 0q-27 0-45.5 18.5t-18.5 45.5t18.5 45.5t45 18.5t45.5-18.5t19-45.5t-18.5-45.5t-45.5-18.5m192 0q-27 0-45.5 18.5t-18.5 45.5t18.5 45.5t45 18.5t45.5-18.5t19-45.5t-18.5-45.5t-45.5-18.5m64 256q0-26-19-45t-45-19h-640q-27 0-45.5 19t-18.5 45v512q0 26 18.5 45t45.5 19h640q26 0 45-19t19-45zm-160 384h-192q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m-299-136l-125 125q-10 10-24 10t-23.5-10t-9.5-23.5t10-22.5l103-103l-103-103q-10-9-10-22.5t9.5-23.5t23.5-10t24 10l125 125q4 4 3 5q7 10 6.5 22t-9.5 21"></svg:path>`,
})
export class WhhTerminalIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTerminalaltIcon],svg[whh-terminalalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-406-562l-187-188q-19-20-46.5-20t-47 19.5t-19.5 47t20 46.5l141 143l-141 142q-20 20-20 47.5t19.5 46.5t47 19t46.5-19l187-188q18-17 19-42t-14-44q2-3-5-10m278 177h-192q-26 0-45 19t-19 45.5t19 45.5t45 19h192q27 0 45.5-19t18.5-45.5t-18.5-45.5t-45.5-19"></svg:path>`,
})
export class WhhTerminalaltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTetheringIcon],svg[whh-tethering-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M874 874q-19 19-46.5 20.5T784 879q-18-17-18.5-46.5T784 784h-1q54-54 83.5-124T896 512q0-104-51.5-192.5t-140-140T512 128t-192.5 51.5t-140 140T128 512q0 78 29.5 148T240 784q19 19 18 48.5T240 879t-44 15.5t-46-20.5Q79 803 39.5 709.5T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-39.5 197.5T874 874M231 675q-21-37-32-77q-22-84 0-166.5t82.5-143t144.5-83t166 0T734.5 288T818 432q34 128-32 242v1q-28 47-80 21q-24-12-31.5-36t6.5-45q19-28 21.5-70.5T694 465q-21-77-89.5-116.5t-145.5-19T342 419t-19 145q6 22 20 46q1 3 3 6.5t4 14.5t1 21t-9.5 22.5T317 695q-24 14-48.5 8T231 675m281-291q53 0 90.5 37.5T640 512q0 35-17.5 64T576 622v338q0 27-18.5 45.5T512 1024t-45.5-18.5T448 960V622q-29-17-46.5-46T384 512q0-53 37.5-90.5T512 384"></svg:path>`,
})
export class WhhTetheringIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTetrisoneIcon],svg[whh-tetrisone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 704H384v256q0 26-18.5 45t-45.5 19H64q-26 0-45-19T0 960V64q0-26 19-45T64 0h256q27 0 45.5 19T384 64v256h256q27 0 45.5 19t18.5 45v256q0 27-18.5 45.5T640 704M320 96q0-13-9.5-22.5T288 64H96q-13 0-22.5 9.5T64 96v192q0 13 9.5 22.5T96 320h192q13 0 22.5-9.5T320 288zm0 314q0-11-7.5-18.5T294 384H90q-11 0-18.5 7.5T64 410v204q0 11 7.5 18.5T90 640h204q11 0 18.5-7.5T320 614zm0 320q0-11-7.5-18.5T294 704H90q-11 0-18.5 7.5T64 730v204q0 11 7.5 18.5T90 960h204q11 0 18.5-7.5T320 934zm320-320q0-11-7.5-18.5T614 384H410q-11 0-18.5 7.5T384 410v204q0 11 7.5 18.5T410 640h204q11 0 18.5-7.5T640 614z"></svg:path>`,
})
export class WhhTetrisoneIcon {
  readonly viewBox = input("0 0 704 1024")
  readonly width = input("0.69em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTetristhreeIcon],svg[whh-tetristhree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 1024H64q-26 0-45-19T0 960V64q0-26 18.5-45T64 0h256q27 0 45.5 19T384 64v576h256q27 0 45.5 19t18.5 45v256q0 27-18.5 45.5T640 1024M320 96q0-13-9.5-22.5T288 64H96q-13 0-22.5 9.5T64 96v192q0 13 9.5 22.5T96 320h192q13 0 22.5-9.5T320 288zm0 314q0-11-7.5-18.5T294 384H90q-11 0-18.5 7.5T64 410v204q0 11 7.5 18.5T90 640h204q11 0 18.5-7.5T320 614zm0 320q0-11-7.5-18.5T294 704H90q-11 0-18.5 7.5T64 730v204q0 11 7.5 18.5T90 960h204q11 0 18.5-7.5T320 934zm320 0q0-11-7.5-18.5T614 704H410q-11 0-18.5 7.5T384 730v204q0 11 7.5 18.5T410 960h204q11 0 18.5-7.5T640 934z"></svg:path>`,
})
export class WhhTetristhreeIcon {
  readonly viewBox = input("0 0 704 1024")
  readonly width = input("0.69em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTetristwoIcon],svg[whh-tetristwo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 704H384v256q0 26-19 45t-45 19H64q-26 0-45-19T0 960V384q0-26 19-45t45-19h256V64q0-26 18.5-45T384 0h256q26 0 45 19t19 45v576q0 27-19 45.5T640 704M320 410q0-11-7.5-18.5T294 384H90q-11 0-18.5 7.5T64 410v204q0 11 7.5 18.5T90 640h204q11 0 18.5-7.5T320 614zm0 320q0-11-7.5-18.5T294 704H90q-11 0-18.5 7.5T64 730v204q0 11 7.5 18.5T90 960h204q11 0 18.5-7.5T320 934zM640 96q0-13-9.5-22.5T608 64H416q-13 0-22.5 9.5T384 96v192q0 13 9.5 22.5T416 320h192q13 0 22.5-9.5T640 288zm0 314q0-11-7.5-18.5T614 384H410q-11 0-18.5 7.5T384 410v204q0 11 7.5 18.5T410 640h204q11 0 18.5-7.5T640 614z"></svg:path>`,
})
export class WhhTetristwoIcon {
  readonly viewBox = input("0 0 704 1024")
  readonly width = input("0.69em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTextcursorIcon],svg[whh-textcursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 128h-64q-24 0-44 47.5T320 256v512q0 33 20 80.5t44 47.5h64q26 0 45 19t19 45.5t-19 45t-45 18.5h-96q-29 0-62.5-41.5T256 896q0 45-33.5 86.5T160 1024H64q-27 0-45.5-18.5T0 960.5T18.5 915T64 896h64q24 0 44-47.5t20-80.5V256q0-33-20-80.5T128 128H64q-27 0-45.5-18.5T0 64.5T18.5 19T64 0h96q27 0 61.5 41.5T256 128q0-45 34.5-86.5T352 0h96q26 0 45 19t19 45.5t-19 45t-45 18.5"></svg:path>`,
})
export class WhhTextcursorIcon {
  readonly viewBox = input("0 0 512 1024")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTextfieldIcon],svg[whh-textfield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 576H512v64h96q13 0 22.5 9.5T640 672t-9.5 22.5T608 704H352q-13 0-22.5-9.5T320 672t9.5-22.5T352 640h96v-64H64q-27 0-45.5-18.5T0 512V192q0-26 18.5-45T64 128h384V64h-96q-13 0-22.5-9.5T320 32t9.5-22.5T352 0h256q13 0 22.5 9.5T640 32t-9.5 22.5T608 64h-96v64h448q27 0 45.5 19t18.5 45v320q0 27-19 45.5T960 576M448 192H64v320h384zm512 0H512v320h448zm-800 64q13 0 22.5 9.5T192 288v128q0 13-9.5 22.5T160 448t-22.5-9.5T128 416V288q0-13 9.5-22.5T160 256"></svg:path>`,
})
export class WhhTextfieldIcon {
  readonly viewBox = input("0 0 1024 704")
  readonly width = input("1.46em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTextheightIcon],svg[whh-textheight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.74 257q-26 0-45-19t-19-45q0-25-42.5-44.5t-84.5-19.5h-1q-26 0-45 18.5t-19 45.5v639q0 27 19 45.5t45.5 18.5t45 19t18.5 45.5t-18.5 45t-45.5 18.5h-256q-26 0-45-18.5t-19-45t19-45.5t45.5-19t45-18.5t18.5-45.5V193q0-27-18.5-45.5t-45.5-18.5q-43 0-85.5 19.5t-42.5 44.5q0 26-18.5 45t-45 19t-45.5-19t-19-45V65q0-27 19-45.5t45-18.5h640q27 0 45.5 18.5t18.5 45.5v128q0 26-19 45t-45 19m-776 640q8 8 8 19t-8 19l-66 82q-9 8-21.5 8t-21.5-8l-66-82q-9-8-9-19t9-19h56V129h-56q-9-8-9-19.5t9-19.5l66-82q9-8 21.5-8t21.5 8l66 82q8 8 8 19.5t-8 19.5h-55v768z"></svg:path>`,
})
export class WhhTextheightIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTextlayerIcon],svg[whh-textlayer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.44 962h-800v32q0 13-9.5 22.5t-22.5 9.5h-128q-13 0-22.5-9.5T.44 994V866q0-13 9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5v32h800q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m-864-48q0-7-4.5-11.5t-11.5-4.5h-32q-7 0-11.5 4.5t-4.5 11.5v32q0 7 4.5 11.5t11.5 4.5h32q7 0 11.5-4.5t4.5-11.5zm767.5-657q-26.5 0-45-19t-18.5-46t-49.5-45t-141.5-18l-1-1q-27 0-45 19t-18 46v448q0 27 18 45.5t44.5 18.5t45.5 19t19 45.5t-19 45t-45 18.5h-256q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45-19t45.5-18.5t19-45.5l1-448q0-27-19-45.5t-45-18.5l-1-1q-93 0-142.5 18.5t-49.5 45.5t-19 46t-45.5 19t-45-19t-18.5-46V64q0-26 18.5-45t45.5-19h768q26 0 45 19t19 45v128q0 27-19 46t-45.5 19"></svg:path>`,
})
export class WhhTextlayerIcon {
  readonly viewBox = input("0 0 1025 1026")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTextureIcon],svg[whh-texture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024.516 198v180q-16 6-32 6q-40 0-68-28t-28-68t28-68t68-28q15 0 32 6m-320-166q0 40-28 68t-68 28t-68-28t-28-68q0-15 6-32h180q6 17 6 32m-256 0q0 40-28 68t-68 28t-68-28t-28-68q0-15 6-32h180q6 17 6 32m-320-32h58q6 16 6 32q0 40-28 68t-68 28q-27 0-50-14t-35-38q15-34 46.5-55t70.5-21m-64 288q0 31-18 55.5t-46 34.5V198q28 10 46 34.5t18 55.5m0 512q0 31-18 55.5t-46 34.5V710q28 10 46 34.5t18 55.5m-29 183q27-23 61-23q31 0 55.5 18t34.5 46h-58q-55 0-93-41m317-23q31 0 55.5 18t34.5 46h-180q10-28 34.5-46t55.5-18m256 0q31 0 55.5 18t34.5 46h-180q10-28 34.5-46t55.5-18m288 64h-122q10-28 34.5-46t55.5-18q27 0 50 14.5t35 37.5q-26 12-53 12m128-314v180q-16 6-32 6q-40 0-68-28t-28-68t28-68t68-28q15 0 32 6m-64-166q0 40-28 68t-68 28t-68-28t-28-68t28-68t68-28t68 28t28 68m-224-352q40 0 68 28t28 68t-28 68t-68 28t-68-28t-28-68t28-68t68-28m96 608q0 40-28 68t-68 28t-68-28t-28-68t28-68t68-28t68 28t28 68m-128-256q0 40-28 68t-68 28t-68-28t-28-68t28-68t68-28t68 28t28 68m-224-352q40 0 68 28t28 68t-28 68t-68 28t-68-28t-28-68t28-68t68-28m96 608q0 40-28 68t-68 28t-68-28t-28-68t28-68t68-28t68 28t28 68m-128-256q0 40-28 68t-68 28t-68-28t-28-68t28-68t68-28t68 28t28 68m-224-352q40 0 68 28t28 68t-28 68t-68 28t-68-28t-28-68t28-68t68-28m96 608q0 40-28 68t-68 28t-68-28t-28-68t28-68t68-28t68 28t28 68m-224-352q40 0 68 28t28 68t-28 68t-68 28t-68-28t-28-68t28-68t68-28m768-320q-40 0-68-28t-28-68q0-16 6-32h122q33 0 63 17q1 9 1 15q0 40-28 68t-68 28"></svg:path>`,
})
export class WhhTextureIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTextwidthIcon],svg[whh-textwidth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1016.553 950l-82 65q-8 9-19 9t-19-9v-54h-768v54q-8 9-19 9t-19-9l-82-65q-8-9-8-21.5t8-21.5l82-66q8-8 19-8t19 8v56h768v-56q8-8 19-8t19 8l82 66q8 9 8 21.5t-8 21.5m-121-694q-26 0-45-18.5t-19-45.5t-49.5-45.5t-141.5-18.5q-27 0-45.5 19t-18.5 45v448q0 27 18.5 45.5t45 18.5t45.5 19t19 45.5t-19 45t-45 18.5h-256q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45-19t45.5-18.5t19-45.5V320v13v-141q0-26-19-45t-45-19q-92 0-142 18.5t-50 45.5t-19 45.5t-45.5 18.5t-45-18.5t-18.5-45.5V64q0-26 18.5-45t45.5-19h768q26 0 45 19t19 45v128q0 27-19 45.5t-45 18.5z"></svg:path>`,
})
export class WhhTextwidthIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTheatherIcon],svg[whh-theather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.06 1024h-896q-26 0-45-19t-19-45V64q0-26 19-45t45-19h256q0 92-11.5 169.5T272.06 313t-68.5 112.5t-103.5 68.5q86 82 129 274h566q43-192 129-274q-60-22-103.5-68.5T752.06 313t-36.5-143.5T704.06 0h256q27 0 45.5 19t18.5 45v896q0 27-18.5 45.5t-45.5 18.5m-719-192q10 67 13 128h516q3-61 13-128zm143-832h256q0 148 30 256h-316q30-108 30-256"></svg:path>`,
})
export class WhhTheatherIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhThermometeraltIcon],svg[whh-thermometeralt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M833.712 1024h-769q-26 0-45-19t-19-45V64q0-27 19-45.5t45-18.5h769q26 0 45 18.5t19 45.5v896q0 26-19 45t-45 19m-545-896h-128q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h128q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m0 128h-128q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h128q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m0 128h-128q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h128q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m0 128h-128q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h128q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m416 50V256q0-53-37.5-90.5t-90.5-37.5t-90.5 37.5t-37.5 90.5v306q-64 57-64 142q0 79 56.5 135.5t136 56.5t136-56.5t56.5-135.5q0-84-65-142m-128 270q-53 0-90.5-37.5t-37.5-90.5q0-35 17.5-64t46.5-46V384h128v210q30 17 47 46t17 64q0 53-37.5 90.5t-90.5 37.5"></svg:path>`,
})
export class WhhThermometeraltIcon {
  readonly viewBox = input("0 0 898 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhThevergeIcon],svg[whh-theverge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 896H448L0 128L64 0h896l64 128zM320 192l192 320l192-320z"></svg:path>`,
})
export class WhhThevergeIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhThinkingIcon],svg[whh-thinking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 304q0 42-18.5 78T955 443q5 20 5 37q0 66-47 113t-113 47q-35 0-69-16q-26 37-67 58.5T576 704q-53 0-97.5-27T409 604q-38 36-89 36q-53 0-90.5-37.5T192 512q-80 0-136-56T0 320t56-136t136-56q41 0 79 17q24-64 81-104.5T480 0q50 0 94 21.5T650 80q14-36 46-58t72-22q53 0 90.5 37.5T896 128q0 1-.5 3.5t-.5 3.5q57 16 93 62.5t36 106.5M192 896q27 0 45.5 18.5t18.5 45t-19 45.5t-45.5 19t-45-19t-18.5-45t18.5-45t45.5-19m160-192q40 0 68 28t28 68t-28 68t-68 28t-68-28t-28-68t28-68t68-28"></svg:path>`,
})
export class WhhThinkingIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhThissideupIcon],svg[whh-thissideup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 1024H64q-26 0-45-18.5T0 960v-64q0-26 19-45t45-19h896q27 0 45.5 19t18.5 45v64q0 27-18.5 45.5T960 1024m-64-768v384q0 27-18.5 45.5T832 704h-64q-26 0-45-18.5T704 640V256H584q-8-8-8-20t8-21L780 9q8-9 19.5-9T819 9l197 206q8 9 8 21t-8 20zm-576 0v384q0 27-18.5 45.5T256 704h-64q-26 0-45-18.5T128 640V256H8q-8-8-8-20t8-21L204 9q9-9 20-9t20 9l196 206q8 9 8 21t-8 20z"></svg:path>`,
})
export class WhhThissideupIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhThlargeIcon],svg[whh-thlarge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.356 1024h-320q-27 0-45.5-18.5t-18.5-45.5V640q0-27 18.5-45.5t45.5-18.5h320q26 0 45 18.5t19 45.5v320q0 27-19 45.5t-45 18.5m-64-288q0-13-9.5-22.5t-22.5-9.5h-128q-13 0-22.5 9.5t-9.5 22.5v128q0 13 9.5 22.5t22.5 9.5h128q13 0 22.5-9.5t9.5-22.5zm64-288h-320q-27 0-45.5-19t-18.5-45V64q0-27 18.5-45.5t45.5-18.5h320q26 0 45 18.5t19 45.5v320q0 26-19 45t-45 19m-64-288q0-13-9.5-22.5t-22.5-9.5h-128q-13 0-22.5 9.5t-9.5 22.5v128q0 13 9.5 22.5t22.5 9.5h128q13 0 22.5-9.5t9.5-22.5zm-512 864h-320q-26 0-45-18.5t-19-45.5V640q0-27 19-45.5t45-18.5h320q27 0 45.5 18.5t18.5 45.5v320q0 27-19 45.5t-45 18.5m-64-288q0-13-9.5-22.5t-22.5-9.5h-128q-13 0-22.5 9.5t-9.5 22.5v128q0 13 9.5 22.5t22.5 9.5h128q13 0 22.5-9.5t9.5-22.5zm64-288h-320q-26 0-45-19t-19-45V64q0-27 19-45.5t45-18.5h320q27 0 45.5 18.5t18.5 45.5v320q0 26-19 45t-45 19m-64-288q0-13-9.5-22.5t-22.5-9.5h-128q-13 0-22.5 9.5t-9.5 22.5v128q0 13 9.5 22.5t22.5 9.5h128q13 0 22.5-9.5t9.5-22.5z"></svg:path>`,
})
export class WhhThlargeIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhThlistIcon],svg[whh-thlist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.193 576h-512q-26 0-45-18.5t-19-45t19-45.5t45-19h512q26 0 45 19t19 45.5t-19 45t-45 18.5m0-384h-512q-26 0-45-18.5t-19-45t19-45.5t45-19h512q26 0 45 19t19 45.5t-19 45t-45 18.5m-768 832h-128q-27 0-45.5-19t-18.5-45V832q0-26 18.5-45t45.5-19h128q26 0 45 19t19 45v128q0 27-19 45.5t-45 18.5m0-384h-128q-27 0-45.5-18.5T.193 576V448q0-26 18.5-45t45.5-19h128q26 0 45 19t19 45v128q0 27-19 45.5t-45 18.5m0-384h-128q-27 0-45.5-18.5T.193 192V64q0-26 18.5-45t45.5-19h128q26 0 45 19t19 45v128q0 27-19 45.5t-45 18.5m256 576h512q26 0 45 19t19 45.5t-19 45t-45 18.5h-512q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45.5-19"></svg:path>`,
})
export class WhhThlistIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhThreecolumnsIcon],svg[whh-threecolumns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.193 1024h-64q-27 0-45.5-19t-18.5-45V64q0-26 18.5-45t45.5-19h64q26 0 45 19t19 45v896q0 26-19 45t-45 19m-320 0h-256q-53 0-90.5-37.5t-37.5-90.5V128q0-53 37.5-90.5t90.5-37.5h256q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m0-864q0-13-9.5-22.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 22.5v704q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5zm-512 864h-64q-27 0-45.5-19t-18.5-45V64q0-26 18.5-45t45.5-19h64q26 0 45 19t19 45v896q0 26-19 45t-45 19"></svg:path>`,
})
export class WhhThreecolumnsIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhThreedIcon],svg[whh-threed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 1024L0 768V256L480 0l480 256v512zm337-380L512 493V160q0-13-9.5-22.5T480 128t-22.5 9.5T448 160v333L143 644q-11 7-14.5 20t3 24t19 14.5T174 700l306-152l306 152q11 6 23.5 2.5t19-14.5t3-24t-14.5-20"></svg:path>`,
})
export class WhhThreedIcon {
  readonly viewBox = input("0 0 960 1024")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhThreegIcon],svg[whh-threeg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.31 832h-384q-26 0-45-18.5t-19-45.5V64q0-27 19-45.5t45-18.5h384q27 0 45.5 18.5t18.5 45.5v64q0 27-18.5 45.5t-45.5 18.5h-256v448h128V512q-26 0-45-18.5t-19-45.5v-64q0-26 19-45t45-19h128q27 0 45.5 19t18.5 45v384q0 27-18.5 45.5t-45.5 18.5m-576 0h-320q-27 0-45.5-18.5T.31 768v-64q0-26 18.5-45t45.5-19h192V512h-192q-26 0-45-18.5T.31 448v-64q0-26 19-45t45-19h192V192h-192q-27 0-45.5-18.5T.31 128V64q0-26 18.5-45t45.5-19h320q27 0 45.5 19t18.5 45v704q0 27-18.5 45.5t-45.5 18.5"></svg:path>`,
})
export class WhhThreegIcon {
  readonly viewBox = input("0 0 1025 832")
  readonly width = input("1.24em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhThreetofourIcon],svg[whh-threetofour-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.585 768h-896q-27 0-45.5-19t-18.5-45V64q0-27 18.5-45.5T64.585 0h896q27 0 45.5 18.5t18.5 45.5v640q0 26-18.5 45t-45.5 19m-512-288q0-57-44-96q44-39 44-96v-32q0-53-37.5-90.5t-90.5-37.5h-64q-53 0-90.5 37.5t-37.5 90.5q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5q0-27 18.5-45.5t45.5-18.5h64q26 0 45 18.5t19 45.5v32q0 26-19 45t-45 19h-32q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h32q26 0 45 18.5t19 45.5v32q0 26-19 45t-45 19h-64q-27 0-45.5-19t-18.5-45q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5q0 53 37.5 90.5t90.5 37.5h64q53 0 90.5-37.5t37.5-90.5zm96-224q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m0 192q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m352-128V160q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v160q0 26-18.5 45t-45 19t-45.5-19t-19-45V160q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v160q0 53 37.5 90.5t90.5 37.5q34 0 64-18v178q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5zm-128 64"></svg:path>`,
})
export class WhhThreetofourIcon {
  readonly viewBox = input("0 0 1025 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTicketIcon],svg[whh-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024.226 512v192q0 26-19 45t-45 19h-576v-32q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v32h-256q-26 0-45-19t-19-45V512q53 0 90.5-37.5t37.5-90.5t-37.5-90.5T.226 256V64q0-26 19-45t45-19h256v32q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5V0h576q26 0 45 19t19 45v192q-53 0-90.5 37.5t-37.5 90.5t37.5 90.5t90.5 37.5m-640-352q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5zm0 192q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5zm0 192q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5z"></svg:path>`,
})
export class WhhTicketIcon {
  readonly viewBox = input("0 0 1025 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTictactoeIcon],svg[whh-tictactoe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1015.56 55l-138 138l137 136q9 9 9 22.5t-9.5 23t-23 9.5t-22.5-10l-136-136l-136 136q-10 10-23.5 10t-23-9.5t-9.5-23t10-22.5l136-136l-137-138q-10-9-10-22.5t9.5-23t23-9.5t23.5 10l137 137l137-137q9-10 22.5-10t23 9.5t9.5 23t-9 22.5m-55 393q26 0 45 19t19 45.5t-19 45t-45 18.5h-384v384q0 27-19 45.5t-45 18.5t-45-18.5t-19-45.5V576h-384q-26 0-45-18.5t-19-45t19-45.5t45-19h384V65q0-27 19-45.5t45-18.5t45 18.5t19 45.5v383zm-767.5-64q-79.5 0-136-56T.56 192.5T57.06 57t136-56t135.5 56t56 135.5t-56 135.5t-135.5 56m-.5-319q-53 0-90.5 37.5T64.56 193t37.5 90.5t90.5 37.5t90.5-37.5t37.5-90.5t-37.5-90.5t-90.5-37.5M10.06 649.5q9.5-9.5 23-9.5t22.5 9l137 138l137-138q10-9 23.5-9t22.5 9.5t9 22.5t-9 23l-137 137l136 136q9 10 9 23.5t-9 22.5t-22.5 9t-23.5-9l-136-136l-136 136q-9 9-22.5 9t-23-9t-9.5-22.5t9-23.5l137-136l-138-137q-9-10-9-23t9.5-22.5m822-9.5q79.5 0 136 56.5t56.5 136t-56.5 135.5t-136 56t-135.5-56t-56-135.5t56-136t135.5-56.5m.5 320q53 0 90.5-37.5t37.5-90.5t-37.5-90.5t-90.5-37.5t-90.5 37.5t-37.5 90.5t37.5 90.5t90.5 37.5"></svg:path>`,
})
export class WhhTictactoeIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTidefallIcon],svg[whh-tidefall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 591q-53-18-118-15t-125.5 20.5t-130 39t-132 40.5T258 701.5T128 696q-54-11-91-35.5T0 609q0-29 38-43t90-4q43 19 103 16.5T352 558t133-39.5t139-41t139-26t133 5.5q54 11 91 35.5t37 51.5q0 30-39.5 46t-88.5 1M536 312q-10 8-24 8t-23-8L327 166q-17-16 8-38h113V32q0-13 9.5-22.5T480 0h64q13 0 22.5 9.5T576 32v96h113q25 23 9 38zM128 882q43 19 103 16t121-20.5t133-39t139-41t139-26t133 5.5q54 11 91 35.5t37 51.5q0 30-39.5 46t-88.5 1q-53-18-118-15t-125.5 20.5t-130 39t-132 40.5t-132.5 25.5t-130-5.5q-54-11-91-35.5T0 928t38-42t90-4"></svg:path>`,
})
export class WhhTidefallIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTideriseIcon],svg[whh-tiderise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 590q-53-18-118-15t-125.5 20.5t-130 39t-132 40.5T258 700.5T128 695q-54-11-91-35.5T0 608q0-29 38-43t90-4q43 19 103 16t121-20.5t133-39t139-41t139-26t133 5.5q54 11 91 35.5t37 51.5q0 30-39.5 46t-88.5 1M576 192v95q0 14-9.5 23t-22.5 9h-64q-13 0-22.5-9t-9.5-23v-95H335q-25-23-8-38L489 8q9-8 23-8t24 8l162 146q16 15-9 38zM128 881q43 19 103 16t121-20.5t133-39t139-41t139-26t133 5.5q54 11 91 35.5t37 51.5q0 30-39.5 46t-88.5 1q-53-18-118-15t-125.5 20.5t-130 39t-132 40.5t-132.5 25.5t-130-5.5q-54-11-91-35.5T0 927t38-42t90-4"></svg:path>`,
})
export class WhhTideriseIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTikiwikiIcon],svg[whh-tikiwiki-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1012 475l-68 101H832V384H672l-96 64V256h-64v384h64V520l96 120h64L614 487l58-39h96v192h132L670 980q-18 31-53.5 40.5T549 1012L44 670q-31-18-40.5-53.5T12 549l68-101h112v96q0 49 37 72.5t91 23.5v-64q-17 0-25.5-.5t-19-3.5t-15-10t-4.5-18v-96h128v192h64V384H256V189l98-145q18-31 53.5-40.5T475 12l505 342q31 18 40.5 53.5T1012 475M448 256h-64v64h64zm384 0h-64v64h64zm-640 27v101h-68z"></svg:path>`,
})
export class WhhTikiwikiIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTimelineIcon],svg[whh-timeline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1015.428 914l-137 104q-9 7-22.5 7t-22.5-7v-57h-467q-17 29-46 46.5t-64 17.5q-53 0-90.5-37.5t-37.5-90.5t37.5-90.5t90.5-37.5q35 0 64 17.5t46 46.5h467v-58q9-7 22.5-7t22.5 7l137 104q9 7 9 17.5t-9 17.5m-265-665q-9 8-22.5 8t-22.5-8v-56h-467q-17 29-46 46.5t-64 17.5q-53 0-90.5-37.5T.428 129t37.5-90.5t90.5-37.5q35 0 64 17.5t46 46.5h467V7q9-7 22.5-7t22.5 7l137 104q9 7 9 17t-9 18zm-558 136q35 0 64 17.5t46 46.5h228q17-29 46-46.5t64-17.5q53 0 90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5q-35 0-64-17.5t-46-46.5h-228q-17 29-46 46.5t-64 17.5q-53 0-90.5-37.5t-37.5-90.5t37.5-90.5t90.5-37.5m448.5 192q26.5 0 45-19t18.5-45.5t-18.5-45t-45-18.5t-45.5 18.5t-19 45t19 45.5t45.5 19"></svg:path>`,
})
export class WhhTimelineIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTimerIcon],svg[whh-timer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512q0-120 54-229l115 57q-41 82-41 172q0 104 51.5 192.5t140 140T512 896t192.5-51.5t140-140T896 512q0-122-69.5-220T647 153l45-120q147 55 239.5 186t92.5 293q0 104-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-448q-36 0-55-32q-32-34-83-93T261.5 319.5t-101-128t-32-63t63 32t128 101t131.5 113t93 82.5q32 19 32 55q0 27-18.5 45.5T512 576m0-448q-27 0-45.5-19T448 63.5t18.5-45t45-18.5T557 18.5T576 64t-18.5 45.5T512 128"></svg:path>`,
})
export class WhhTimerIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTintIcon],svg[whh-tint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M656.5 907.5Q583 984 484 1011t-198 0t-172.5-103.5t-100-179t0-204.5T113 345L385 0l272 345q73 77 99.5 179t0 204.5t-100 179M204 834q8 9 11.5 13.5T231 858t26 6q31 0 46.5-17.5T319 806q0-28-23-80.5T249.5 613T226 507q0-28 24-74.5t47-79.5l24-33h-32l-85 97q-75 93-75 208.5T204 834"></svg:path>`,
})
export class WhhTintIcon {
  readonly viewBox = input("0 0 770 1025")
  readonly width = input("0.76em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhToastIcon],svg[whh-toast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 366v530q0 53-37.5 90.5T832 1024H192q-53 0-90.5-37.5T64 896V366q-29-17-46.5-46T0 256q0-70 68.5-128.5t186.5-93T512 0t257 34.5t186.5 93T1024 256q0 35-17.5 64T960 366"></svg:path>`,
})
export class WhhToastIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhToiletbrushIcon],svg[whh-toiletbrush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.36 960q-73 0-100.5-34t-27.5-94V160q6 8 19.5 29.5t19.5 28t19 18t29.5 14.5t40.5 3q70 0 128-35v709q-55 33-128 33m-544 64q-96 0-177-17t-128-47t-47-64V224q55 42 148.5 67.5t203.5 25.5t203.5-25.5t148.5-67.5v672q0 34-47 64t-128 47t-177 17m0-768q-96 0-177-17t-128-46.5t-47-64.5t47-64.5t128-46.5t177-17t177 17t128 46.5t47 64.5t-47 64.5t-128 46.5t-177 17m0-192q-66 0-113 19t-47 45.5t47 45t113 18.5t113-18.5t47-45t-47-45.5t-113-19"></svg:path>`,
})
export class WhhToiletbrushIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTomatocartIcon],svg[whh-tomatocart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m313-579q-53 31-135.5 49T512 512t-177.5-18T199 445q0-1-1.5-1.5T196 442q18-98 109-174t207-76q41 0 83 11l6-64q-45-11-89-11q-104 0-192 49T180 314.5T128 512q0 86 36 162t99 130q-7 14-7 28q0 26 19 45t45 19q33 0 52-27q68 27 140 27t140-27q19 27 52 27q27 0 45.5-19t18.5-45q0-14-7-28q63-54 99-130t36-162q0-19-7-61t-10-52q-18 24-54 46M686 654q9-43 14-99q75-18 132-47v4q0 48-16 97q-53 29-130 45m17 114q-37 0-55 33q-3 2-19 8q23-38 40-89q63-15 116-41q-33 53-82 89m-191-96q-53 0-109-7q-9-41-14-98q61 9 123 9t123-9q-5 57-14 98q-56 7-109 7M376 801q-18-33-55-33q-49-36-82-90q53 27 116 42q17 51 40 89q-16-6-19-8M192 512v-4q57 29 132 47q5 56 14 99q-77-16-130-45q-16-49-16-97m410 219q-18 48-41 74.5T512 832t-49-26.5t-41-74.5q47 5 90 5t90-5"></svg:path>`,
})
export class WhhTomatocartIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhToolsIcon],svg[whh-tools-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m896 320l64 576q0 53-37.5 90.5T832 1024t-90.5-37.5T704 896l64-576q-31 0-61-36t-48.5-88T640 96q0-21 1-33t8.5-30T672 0h32v64q0 54 37 91t91 37t91-37t37-91V0h32q15 15 22.5 33t8.5 30t1 33q0 48-18.5 100T957 284t-61 36m-63.5 512q-26.5 0-45.5 18.5T768 896t19 45.5t45.5 18.5t45-19t18.5-45.5t-18.5-45t-45-18.5M256 608q0 40 18.5 68t45.5 28v160q0 66-47 113t-113 47t-113-47T0 864V704q27 0 45.5-28T64 608t-18.5-68T0 512q0-27 19-45.5T64 448h64V256l-64-64L96 0h128l32 192l-64 64v192h64q27 0 45.5 18.5T320 512q-26 0-45 28t-19 68"></svg:path>`,
})
export class WhhToolsIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhToothIcon],svg[whh-tooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 704v51l-1 52l-4 55l-7 49.5l-11.5 45.5l-17 34l-24 25l-31.5 8q-8 0-13.5-3.5t-9-12t-5.5-16t-3-23.5t-1-26v-47q0-62-.5-91.5t-4-75T496 663t-22-45t-36.5-33t-53.5-9t-53.5 9t-36.5 33t-22 45t-11.5 66.5t-4 75t-.5 91.5v47l-1 26l-3 23.5l-5.5 16l-9 12l-13.5 3.5q-17 0-31.5-8t-24-25t-17-34t-11.5-45.5t-7-49.5t-4-55t-1-52v-51q0-42-20-107T64 472.5T20 335T0 192q0-80 56-136T192 0q32 0 96 32t96 32t96-32t96-32q79 0 135.5 56T768 192q0 65-20 143t-44 137.5T660 597t-20 107"></svg:path>`,
})
export class WhhToothIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhToothbrushIcon],svg[whh-toothbrush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M999.46 998.5q-25 24.5-60 24.5t-59-25l-868-863q-12-12-12-29.5t12.5-30t30-12.5t29.5 12l29 29q4-7 7-10l83-83q11-11 27-11t27.5 11.5t11.5 27.5t-12 27l-82 83q-3 3-10 7l12 12q4-7 7-10l83-83q11-11 27-11t27.5 11.5t11.5 27.5t-12 27l-82 83q-3 3-10 6l12 13q4-7 7-10l83-83q11-11 27-11t27.5 11.5t11.5 27.5t-12 27l-82 83q-3 3-10 6l60 60q56 56 106.5 97.5t86.5 64t76.5 47.5t76.5 47.5t86.5 64t106.5 96.5l119 119q25 25 25 60t-25 59.5"></svg:path>`,
})
export class WhhToothbrushIcon {
  readonly viewBox = input("0 0 1025 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTopborderIcon],svg[whh-topborder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 960v-64h64v64zm0-192h64v64h-64zm0-128h64v64h-64zm0-128h64v64h-64zm-64-64h64v64h-64zm128-64v64h-64v-64zm-64-128h64v64h-64zm0-128h64v64h-64zM512 64v64h-64V64H0V0h960v64zM64 192H0v-64h64zm0 128H0v-64h64zm0 128H0v-64h64zm64 64H64v-64h64zM0 576v-64h64v64zm64 128H0v-64h64zm0 128H0v-64h64zm0 128H0v-64h64zm128 0h-64v-64h64zm64-448h-64v-64h64zm64-64h64v64h-64zm0 512h-64v-64h64zm192-192h-64v-64h64zm0-128h-64v-64h64zm0-128h-64v-64h64zm-64-320h64v64h-64zm64 192h-64v-64h64zm64 64h64v64h-64zm-64 384v64h-64v-64zm64 128h-64v-64h64zm-128 0h-64v-64h64zm256-512h64v64h-64zm0 512h-64v-64h64zm128 0h-64v-64h64z"></svg:path>`,
})
export class WhhTopborderIcon {
  readonly viewBox = input("0 0 960 960")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTophatIcon],svg[whh-tophat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 1024H32q-13 0-22.5-9.5T0 992t9.5-22.5T32 960h160L128 85q-1-24 6-40t18.5-25T186 6.5T226.5 1T276 0h472q31 0 49.5 1T838 6.5T871.5 20t19 25t5.5 40l-64 875h160q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5M243 832l13 128h512l14-128z"></svg:path>`,
})
export class WhhTophatIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTorchIcon],svg[whh-torch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m506 548l-38 64q-7 11-20 19.5t-25 8.5h-39l-64 352q0 13-9 22.5t-23 9.5h-64q-13 0-22.5-9.5T192 992l-64-352H89q-11 0-24-8.5T44 612L7 548q-9-15-5.5-25.5T19 512h475q13 0 16.5 10.5T506 548M399 448h-79q2-4 6.5-17.5T334 406t3-22q0-38-57-135q-8-9-17-19q-4 21-11 44t-28 58t-47 52q-25 16-13 64H99q-18-3-26.5-23.5T64 384q0-21 16-43.5t32-44.5t16-40q0-27-6.5-54T106 157t-18.5-32.5T71 103l-6-7q58 24 120 68q14-45 8.5-81.5T174 23L161 0q6 3 17 8t41.5 21.5t58 35.5t60 48t53.5 60q29 41 44 90.5t13 88.5q-1 40-49 96"></svg:path>`,
})
export class WhhTorchIcon {
  readonly viewBox = input("0 0 512 1024")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTorigateIcon],svg[whh-torigate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 384v128H923q37 236 37 512H832q0-269-44-512H236q-44 244-44 512H64q0-276 37-512H0V384h124q17-75 32-128H64L0 0h1024l-64 256h-92q15 52 32 128zm-760 0h184V256H301q-18 51-37 128m459-128H576v128h184q-19-76-37-128"></svg:path>`,
})
export class WhhTorigateIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTornadoIcon],svg[whh-tornado-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640.992 448q0 53 16 106.5l32 107l16 106.5q0 45-31 93.5t-73 83t-84.5 57t-67.5 22.5q7-14 17.5-39t28.5-92.5t18-124.5q0-35-26.5-76t-64-78.5l-75-75l-64-78.5l-26.5-76q0-31-11-55.5t-29-41t-41-33t-47-30.5t-47-35t-41-45t-29-61t-11-83h1024q0 52-21 96t-55 75t-75 58.5t-82 51.5t-75 48t-55 54t-21 65"></svg:path>`,
})
export class WhhTornadoIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTouchpadIcon],svg[whh-touchpad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 896H512V640h256q27 0 45.5-18.5T832 576V192q0-26-18.5-45T768 128H192q-27 0-45.5 19T128 192v384q0 27 19 45.5t45 18.5h256v256H128q-53 0-90.5-37.5T0 768V128q0-53 37.5-90.5T128 0h704q53 0 90.5 37.5T960 128v640q0 53-37.5 90.5T832 896"></svg:path>`,
})
export class WhhTouchpadIcon {
  readonly viewBox = input("0 0 960 896")
  readonly width = input("1.08em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTrafficlightIcon],svg[whh-trafficlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 384q26 0 45 18.5t19 45.5L576 576v128h128q27 0 45.5 18.5T768 768L576 896v64q0 26-18.5 45t-45.5 19H256q-26 0-45-19t-19-45v-64L0 768q0-27 19-45.5T64 704h128V576L0 448q0-27 19-45.5T64 384h128V256L0 128q0-27 19-45.5T64 64h128q0-27 19-45.5T256 0h256q27 0 45.5 18.5T576 64h128q27 0 45.5 18.5T768 128L576 256v128zM384 960q53 0 90.5-37.5T512 832t-37.5-90.5T384 704t-90.5 37.5T256 832t37.5 90.5T384 960m0-896q-53 0-90.5 37.5T256 192t37.5 90.5T384 320t90.5-37.5T512 192t-37.5-90.5T384 64m0 320q-53 0-90.5 37.5T256 512t37.5 90.5T384 640t90.5-37.5T512 512t-37.5-90.5T384 384"></svg:path>`,
})
export class WhhTrafficlightIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTragedyIcon],svg[whh-tragedy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-145-36-262-135.5T66.5 646T0 347V64Q290 0 512 0t512 64v283q0 156-66.5 299T774 888.5T512 1024M320 192q-53 0-90.5 19T192 256.5t37.5 45T320 320t90.5-18.5t37.5-45t-37.5-45.5t-90.5-19m-64 461q0 34 12.5 44.5T306 700t54-21t71.5-26t80.5-13t80.5 13t71.5 26t54 21t37.5-2.5T768 653q0-35-51.5-69.5t-110.5-53t-94-18.5t-94 18.5t-110.5 53T256 653m448-461q-53 0-90.5 19T576 256.5t37.5 45T704 320t90.5-18.5t37.5-45t-37.5-45.5t-90.5-19"></svg:path>`,
})
export class WhhTragedyIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTrailorIcon],svg[whh-trailor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 768h-86q-28-58-82-93t-120-35t-120 35t-82 93H32q-13 0-22.5-9.5T0 736t9.5-22.5T32 704h96V256q0-106 75-181T384 0h384q106 0 181 75t75 181v448q0 26-18.5 45T960 768M448 256q0-27-19-45.5T384 192h-64q-27 0-45.5 18.5T256 256v64q0 26 18.5 45t45.5 19h64q27 0 45.5-19t18.5-45zm448 0q0-27-18.5-45.5T832 192H576q-26 0-45 18.5T512 256v64q0 26 19 45t45 19h256q27 0 45.5-19t18.5-45zM672 704q66 0 113 47t47 113t-47 113t-113 47t-113-47t-47-113t47-113t113-47m0 192q13 0 22.5-9.5T704 864t-9.5-22.5T672 832t-22.5 9.5T640 864t9.5 22.5T672 896"></svg:path>`,
})
export class WhhTrailorIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTrainIcon],svg[whh-train-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M537 1024H42q-28 0-37.5-23T9 947l91-190q9-21 31-37q72 48 158.5 48T448 720q22 16 31 37l91 190q14 31 4.5 54t-37.5 23M177.5 836q-11.5-7-24.5-3.5T134 849l-32 60q-7 12-3.5 26t15 21t24.5 3.5t19-16.5l32-60q7-12 3.5-26t-15-21M322 864q0-13-9.5-22.5t-23-9.5t-22.5 9.5t-9 22.5v64q0 13 9 22.5t22.5 9.5t23-9.5T322 928zm155 45l-32-60q-6-13-19-16.5t-24.5 3.5t-15 21t3.5 26l32 60q6 13 19 16.5t24.5-3.5t15-21t-3.5-26M289.5 704q-92.5 0-158-65.5T66 480q0-84 55-147t137-74V128q-27 0-46-18.5T193 64t19-45.5T258 0h64q26 0 45 18.5T386 64t-19 45.5t-45 18.5v131q81 11 136.5 74T514 480q0 93-66 158.5T289.5 704m0-256q-13.5 0-22.5 9.5t-9 22.5t9 22.5t22.5 9.5t23-9.5T322 480t-9.5-22.5t-23-9.5"></svg:path>`,
})
export class WhhTrainIcon {
  readonly viewBox = input("0 0 579 1024")
  readonly width = input("0.57em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTransformIcon],svg[whh-transform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M927.998 768q13 0 22.5 9.5t9.5 22.5v128q0 13-9.5 22.5t-22.5 9.5h-128q-13 0-22.5-9.5t-9.5-22.5v-32h-192v32q0 13-9.5 22.5t-22.5 9.5h-128q-13 0-22.5-9.5t-9.5-22.5v-32h-192v32q0 13-9.5 22.5t-22.5 9.5h-128q-13 0-22.5-9.5t-9.5-22.5V800q0-13 9.5-22.5t22.5-9.5h32V576h-32q-13 0-22.5-9.5t-9.5-22.5V416q0-13 9.5-22.5t22.5-9.5h32V192h-32q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5v32h192V32q0-13 9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5v32h192V32q0-13 9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5v128q0 13-9.5 22.5t-22.5 9.5h-32v192h32q13 0 22.5 9.5t9.5 22.5v128q0 13-9.5 22.5t-22.5 9.5h-32v192zm-480 112q0 7 4.5 11.5t11.5 4.5h32q7 0 11.5-4.5t4.5-11.5v-32q0-7-4.5-11.5t-11.5-4.5h-32q-7 0-11.5 4.5t-4.5 11.5zm-384 0q0 7 4.5 11.5t11.5 4.5h32q7 0 11.5-4.5t4.5-11.5v-32q0-7-4.5-11.5t-11.5-4.5h-32q-7 0-11.5 4.5t-4.5 11.5zm0-384q0 7 4.5 11.5t11.5 4.5h32q7 0 11.5-4.5t4.5-11.5v-32q0-7-4.5-11.5t-11.5-4.5h-32q-7 0-11.5 4.5t-4.5 11.5zm64-416q0-7-4.5-11.5t-11.5-4.5h-32q-7 0-11.5 4.5t-4.5 11.5v32q0 7 4.5 11.5t11.5 4.5h32q7 0 11.5-4.5t4.5-11.5zm384 0q0-7-4.5-11.5t-11.5-4.5h-32q-7 0-11.5 4.5t-4.5 11.5v32q0 7 4.5 11.5t11.5 4.5h32q7 0 11.5-4.5t4.5-11.5zm256 80v-32h-192v32q0 13-9.5 22.5t-22.5 9.5h-128q-13 0-22.5-9.5t-9.5-22.5v-32h-192v32q0 13-9.5 22.5t-22.5 9.5h-32v192h32q13 0 22.5 9.5t9.5 22.5v128q0 13-9.5 22.5t-22.5 9.5h-32v192h32q13 0 22.5 9.5t9.5 22.5v32h192v-32q0-13 9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5v32h192v-32q0-13 9.5-22.5t22.5-9.5h32V576h-32q-13 0-22.5-9.5t-9.5-22.5V416q0-13 9.5-22.5t22.5-9.5h32V192h-32q-13 0-22.5-9.5t-9.5-22.5m128-80q0-7-4.5-11.5t-11.5-4.5h-32q-7 0-11.5 4.5t-4.5 11.5v32q0 7 4.5 11.5t11.5 4.5h32q7 0 11.5-4.5t4.5-11.5zm0 384q0-7-4.5-11.5t-11.5-4.5h-32q-7 0-11.5 4.5t-4.5 11.5v32q0 7 4.5 11.5t11.5 4.5h32q7 0 11.5-4.5t4.5-11.5zm-16 368h-32q-7 0-11.5 4.5t-4.5 11.5v32q0 7 4.5 11.5t11.5 4.5h32q7 0 11.5-4.5t4.5-11.5v-32q0-7-4.5-11.5t-11.5-4.5m-384-320h-32q-7 0-11.5-4.5t-4.5-11.5v-32q0-7 4.5-11.5t11.5-4.5h32q7 0 11.5 4.5t4.5 11.5v32q0 7-4.5 11.5t-11.5 4.5"></svg:path>`,
})
export class WhhTransformIcon {
  readonly viewBox = input("0 0 960 960")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTraqIcon],svg[whh-traq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 384q-31 0-67 30.5t-62.5 70t-44.5 75t-18 48.5v352q0 26-19 45t-45.5 19t-45-19t-18.5-45V320q0-27 18.5-45.5t45-18.5t45.5 18.5t19 45.5v53q92-117 192-117q26 0 45 18.5t19 45t-19 45.5t-45 19m-512 0h-64v576q0 27-19 45.5t-45.5 18.5t-45-18.5T128 960V384H64q-27 0-45.5-19T0 319.5t18.5-45T64 256h64V64q0-27 18.5-45.5t45-18.5T237 18.5T256 64v192h64q26 0 45 18.5t19 45t-19 45.5t-45 19"></svg:path>`,
})
export class WhhTraqIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTrashemptyIcon],svg[whh-trashempty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.743 192h-896q-26 0-45-18.5t-19-45t19-45.5t45-19h320q0-26 18.5-45t45.5-19h128q27 0 45.5 19t18.5 45h320q26 0 45 19t19 45.5t-19 45t-45 18.5m-832 64q27 0 45.5 19t18.5 45v512q0 27 19 45.5t45 18.5h512q26 0 45-18.5t19-45.5V320q0-26 18.5-45t45-19t45.5 19t19 45v576q0 53-37.5 90.5t-90.5 37.5h-640q-53 0-90.5-37.5t-37.5-90.5V320q0-26 18.5-45t45.5-19"></svg:path>`,
})
export class WhhTrashemptyIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTrashfullIcon],svg[whh-trashfull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.743 192h-896q-26 0-45-18.5t-19-45t19-45.5t45-19h320q0-26 18.5-45t45.5-19h128q27 0 45.5 19t18.5 45h320q26 0 45 19t19 45.5t-19 45t-45 18.5m-832 64h768q26 0 45 19t19 45v576q0 53-37.5 90.5t-90.5 37.5h-640q-53 0-90.5-37.5t-37.5-90.5V320q0-26 19-45t45-19"></svg:path>`,
})
export class WhhTrashfullIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTravelIcon],svg[whh-travel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 1024H128q-53 0-90.5-37.5T0 896V384q0-53 37.5-90.5T128 256h128v-96q0-68 51-114T416 0h192q58 0 109 46t51 114v96h128q53 0 90.5 37.5T1024 384v512q0 53-37.5 90.5T896 1024M288 448q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m352-256q0-27-18.5-45.5T576 128H448q-26 0-45 18.5T384 192v64h256zm192 448l-256 64l64 192l256-64z"></svg:path>`,
})
export class WhhTravelIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTreediagramIcon],svg[whh-treediagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 1024h-64q-27 0-45.5-18.5T768 960v-64q0-26 18.5-45t45.5-19V576H512v256q26 0 45 19t19 45v64q0 27-19 45.5t-45 18.5h-64q-27 0-45.5-18.5T384 960v-64q0-26 18.5-45t45.5-19V576H128v256q26 0 45 19t19 45v64q0 27-19 45.5t-45 18.5H64q-27 0-45.5-18.5T0 960v-64q0-26 18.5-45T64 832V544q0-13 9.5-22.5T96 512h352V320h-64q-27 0-45.5-18.5T320 256V64q0-26 18.5-45T384 0h192q26 0 45 19t19 45v192q0 27-19 45.5T576 320h-64v192h352q13 0 22.5 9.5T896 544v288q26 0 45 19t19 45v64q0 27-19 45.5t-45 18.5"></svg:path>`,
})
export class WhhTreediagramIcon {
  readonly viewBox = input("0 0 960 1024")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTreeornamentIcon],svg[whh-treeornament-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.428 352v96h-96q-13 0-22.5 9.5t-9.5 22.5v96h-96q-13 0-22.5 9.5t-9.5 22.5v96h-96q-13 0-22.5 9.5t-9.5 22.5v96h-96q-13 0-22.5 9.5t-9.5 22.5v96h-96q-1 0-2 .5t-2 .5q-118-71-176-193h52q13 0 22.5-9.5t9.5-22.5v-96h96q13 0 22.5-9.5t9.5-22.5v-96h96q13 0 22.5-9.5t9.5-22.5v-96h96q13 0 22.5-9.5t9.5-22.5v-96h96q13 0 22.5-9.5t9.5-22.5v-52q122 58 193 176q0 1-.5 2t-.5 2m-384-128v96h-96q-13 0-22.5 9.5t-9.5 22.5v96h-96q-13 0-22.5 9.5t-9.5 22.5v96h-96q-13 0-22.5 9.5t-9.5 22.5v96h-45q-19-63-19-128q0-71 22-139l-77-77q-18-18 41-105q-48-5-81-41.5t-33-85.5q0-53 37.5-90.5t90.5-37.5q49 0 85 33t42 82q87-60 105-42l77 77q68-22 139-22q65 0 128 19v45h-96q-13 0-22.5 9.5t-9.5 22.5m-447.5-160q-26.5 0-45.5 19t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45t-18.5-45.5t-45-19m379.5 943l1-1q3-7 3-14v-96h96q13 0 22.5-9.5t9.5-22.5v-96h96q13 0 22.5-9.5t9.5-22.5v-96h96q13 0 22.5-9.5t9.5-22.5v-96h96q7 0 14-3v-.5l1-.5q5-3 10-8q7 41 7 76q0 91-35.5 174t-95.5 143t-143 95.5t-174 35.5q-35 0-76-7q5-5 8-10"></svg:path>`,
})
export class WhhTreeornamentIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTreethreeIcon],svg[whh-treethree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 384q0 53-37.5 90.5T768 512q-14 0-30-4q-22 32-56 50t-74 18q-21 0-46-7q-22 31-36 69.5T512 704v128q0 53 21 122.5t43 69.5H320q22 0 43-69.5T384 832V704q0-26-13-62t-33-67q-74-7-116-67q-16 4-30 4q-53 0-90.5-37.5T64 384q0-1 .5-3t.5-3q-29-10-47-34.5T0 288q0-40 28-68t68-28q16 0 34 7q10-58 54.5-96.5T288 64q21 0 46 7q16-32 46.5-51.5T448 0q35 0 64.5 18T559 66q39 3 70 23q34-25 75-25q53 0 90.5 37.5T832 192q0 39-22 72q38 13 62 46t24 74"></svg:path>`,
})
export class WhhTreethreeIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTriangleIcon],svg[whh-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 1024h-32v-32q0-13-9.5-22.5T928 960t-22.5 9.5T896 992v32h-64v-96q0-13-9.5-22.5T800 896t-22.5 9.5T768 928v96h-64v-32q0-13-9.5-22.5T672 960t-22.5 9.5T640 992v32h-64v-96q0-13-9.5-22.5T544 896t-22.5 9.5T512 928v96h-64v-32q0-13-9.5-22.5T416 960t-22.5 9.5T384 992v32h-64v-96q0-13-9.5-22.5T288 896t-22.5 9.5T256 928v96h-64v-32q0-13-9.5-22.5T160 960t-22.5 9.5T128 992v32H32q-13 0-22.5-9.5T0 992L992 0q13 0 22.5 9.5T1024 32v960q0 13-9.5 22.5T992 1024M832 480q0-13-9.5-22.5T800 448L448 800q0 13 9.5 22.5T480 832h320q13 0 22.5-9.5T832 800z"></svg:path>`,
})
export class WhhTriangleIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTrojanIcon],svg[whh-trojan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 546v126q0 13-9.5 22.5t-23 9.5t-22.5-9.5t-9-22.5V512q0-26-19-45t-45-19v32q0 31-18 55.5T832 570v198h128q26 0 45 19t19 45.5t-19 45t-45 18.5h-64q0 53-37.5 90.5T768 1024t-90.5-37.5T640 896H384q0 53-37.5 90.5T256 1024t-90.5-37.5T128 896H64q-27 0-45.5-18.5T0 832t18.5-45.5T64 768h192V512q0-23-.5-37t-4.5-40t-11-43t-22-35t-36-27l-21 10q-52 66-132 33q-26-12-28-44.5t12-65T45 208L161 44q22-29 42.5-36.5T256 0h1q59 0 118 51t96 122.5T511 309q30 11 60 11h229q31 0 55.5 18t34.5 47q1 0 3-.5t3-.5q36 0 66.5 19t46.5 51q15 10 15 26zM256 144q0-6-4.5-11t-11.5-5h-31q-7 0-11.5 5t-4.5 11v32q0 7 4.5 11.5T209 192h31q7 0 11.5-4.5T256 176zm-.5 688q-26.5 0-45 19T192 896.5t18.5 45t45 18.5t45.5-19t19-45t-19-45t-45.5-19M384 576h-64v192h64zm256 0H448v192h192zm128 0h-64v192h64zm-.5 256q-26.5 0-45 19T704 896.5t18.5 45t45 18.5t45.5-19t19-45t-19-45t-45.5-19"></svg:path>`,
})
export class WhhTrojanIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTrolleyemptyIcon],svg[whh-trolleyempty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.43 960h-609q-22 30-55.5 47t-71.5 17q-66 0-113-47t-47-113q0-58 36.5-102t91.5-55V192q0-27-18.5-45.5t-45.5-18.5h-64q-26 0-45-19t-19-45.5t19-45t45-18.5h64q80 0 136 56t56 136v545q49 37 61 95h579q26 0 45 18.5t19 45t-18.5 45.5t-45.5 19"></svg:path>`,
})
export class WhhTrolleyemptyIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTrolleyfullIcon],svg[whh-trolleyfull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.12 960h-609q-22 30-55.5 47t-71.5 17q-66 0-113-47t-47-113q0-58 36.5-102t91.5-55V192q0-26-18.5-45t-45.5-19h-64q-26 0-45-18.5t-19-45T18.62 19t45.5-19h64q80 0 136 56t56 136v545q49 37 61 95h579q26 0 45 18.5t19 45t-19 45.5t-45 19m-96-192h-448q-13 0-22.5-9.5t-9.5-22.5V608q0-13 9.5-22.5t22.5-9.5h448q13 0 22.5 9.5t9.5 22.5v128q0 13-9.5 22.5t-22.5 9.5m-128-256h-320q-13 0-22.5-9.5t-9.5-22.5V352q0-13 9.5-22.5t22.5-9.5h320q13 0 22.5 9.5t9.5 22.5v128q0 13-9.5 22.5t-22.5 9.5m-128-256h-192q-13 0-22.5-9.5t-9.5-22.5V96q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v128q0 13-9.5 22.5t-22.5 9.5"></svg:path>`,
})
export class WhhTrolleyfullIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTrolleyloadIcon],svg[whh-trolleyload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.12 960h-609q-22 30-55.5 47t-71.5 17q-66 0-113-47t-47-113q0-58 36.5-102t91.5-55V192q0-26-18.5-45t-45.5-19h-64q-26 0-45-18.5t-19-45T18.62 19t45.5-19h64q80 0 136 56t56 136v545q49 37 61 95h579q26 0 45 18.5t19 45t-18.5 45.5t-45.5 19m-237-264q-8 7-19.5 7t-18.5-7l-232-281q-13-12 7-31h180V160q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v224h180q20 19 6 31z"></svg:path>`,
})
export class WhhTrolleyloadIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTrolleyunloadIcon],svg[whh-trolleyunload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.988 960h-609q-22 30-55.5 47t-71.5 17q-66 0-113-47t-47-113q0-58 36.5-102t91.5-55V192q0-26-18.5-45t-45.5-19h-64q-26 0-45-18.5t-19-45t19-45.5t45-19h64q80 0 136 56t56 136v545q49 37 61 95h579q26 0 45 18.5t19 45t-19 45.5t-45 19m-192-512v224q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5V448h-180q-20-19-7-31l231-281q8-7 19.5-7t19.5 7l231 281q14 12-6 31z"></svg:path>`,
})
export class WhhTrolleyunloadIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTronIcon],svg[whh-tron-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.232 256h-192q-53 0-90.5 37.5t-37.5 90.5v512q0 26-18.5 45t-45.5 19h-128q-27 0-45.5-19t-18.5-45V384q0-104 51.5-192.5t140-140T768.232 0h192q26 0 45 19t19 45v128q0 27-18.5 45.5t-45.5 18.5m0-192h-192q-85 0-159 44t-117.5 117.5t-43.5 158.5v512h128V384q0-73 60-132.5t132-59.5h192zm-640 192h-256q-26 0-45-19t-19-45V64q0-27 18.5-45.5T64.232 0h256q27 0 45.5 19t18.5 45v128q0 27-18.5 45.5t-45.5 18.5m0-192h-256v128h256z"></svg:path>`,
})
export class WhhTronIcon {
  readonly viewBox = input("0 0 1025 960")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTrophyIcon],svg[whh-trophy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 320q0 87-43 161T864.5 597.5T704 640h-32q-96 43-96 128q0 102 80 139q52 9 82 23t30 30q0 27-75 45.5T512 1024t-181-18.5t-75-45.5q0-16 30-30t82-23q80-37 80-139q0-85-96-128h-32q-87 0-160.5-42.5T43 481T0 320q0-96 52.5-166T193 54q-1-31-1-54h640q0 24-1 54q88 30 140.5 100t52.5 166M205 188q-77 43-77 132q0 77 53.5 132.5T311 511q-78-121-106-323m365 5L512 64l-58 129l-134 18l99 97l-26 140l119-68l119 68l-26-140l99-97zm249-5q-28 202-106 323q76-3 129.5-58.5T896 320q0-89-77-132"></svg:path>`,
})
export class WhhTrophyIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTruckIcon],svg[whh-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.562 893v67q0 26-19 45t-45.5 19t-45-19t-18.5-45v-64h-640v64q0 26-18.5 45t-45.5 19t-45.5-19t-18.5-45v-67q-34-5-49-27t-15-66V160q0-14 9.5-23t22.5-9t22.5 9t9.5 23v334q32-47 64-76V64q0-27 19-45.5t45-18.5h640q26 0 45 18.5t19 45.5v354q32 29 64 76V160q0-14 9.5-23t22.5-9t22.5 9t9.5 23v640q0 44-15 66t-49 27m-640-189q0 26 18.5 45t45.5 19h256q26 0 45-19t19-45V576q0-27-19-45.5t-45-18.5h-256q-27 0-45.5 18.5t-18.5 45.5zm-128.5-64q-26.5 0-45 18.5t-18.5 45t18.5 45.5t45 19t45.5-19t19-45.5t-19-45t-45.5-18.5m576.5-448q0-27-19-45.5t-45-18.5h-384q-27 0-45.5 18.5t-18.5 45.5v128q0 26 18.5 45t45.5 19h384q26 0 45-19t19-45zm63.5 448q-26.5 0-45 18.5t-18.5 45t18.5 45.5t45 19t45.5-19t19-45.5t-19-45t-45.5-18.5"></svg:path>`,
})
export class WhhTruckIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTrumpetIcon],svg[whh-trumpet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 1024q-73-89-148-176q-16 33-37 54q-58 58-139 58t-139-58L314 784q-57-58-57-139t57-139q17-17 43-32q-143-90-292-90L9 372q-9-10-9-23t9-23L326 9q10-9 23-9t23 9l13 56q0 103 46.5 212.5T578 487l152 152q40 40 113.5 104.5t127 108.5l53.5 44zM393 585q-24 25-24 60t24 59l119 119q25 25 60 25t59-25q33-33 22-79q-9-10-14-14L487 578q-3-3-8.5-8t-7.5-7q-45-10-78 22"></svg:path>`,
})
export class WhhTrumpetIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTshirtIcon],svg[whh-tshirt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1009 265l-72 72q-15 15-36.5 15T864 337l-32-31v527q0 26-18.5 45T768 897H256q-27 0-45.5-19T192 833V306l-32 31q-15 15-36.5 15T87 337l-72-72Q0 250 0 229t15-36L192 16q15-16 64-16h128q0 37 33.5 50.5T512 64t94.5-13.5T640 0h128q49 0 64 16l177 177q15 15 15 36t-15 36"></svg:path>`,
})
export class WhhTshirtIcon {
  readonly viewBox = input("0 0 1024 897")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTumblrIcon],svg[whh-tumblr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M864 1024q-66 0-113-47t-47-113t47-113t113-47t113 47t47 113t-47 113t-113 47m-480 0q-101 0-178.5-52T128 864V448H0V256q99 0 145.5-58T192 0h128v256h192v192H320v325q0 26 38.5 42.5T448 832t80-6.5t48-25.5v149q0 23-32.5 41t-75.5 26t-84 8"></svg:path>`,
})
export class WhhTumblrIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTuneinIcon],svg[whh-tunein-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 704H704V512q0-53 37.5-90.5T832 384h192v192q0 53-37.5 90.5T896 704m-384 320H320V768h320v128q0 53-37.5 90.5T512 1024M0 576V384h512q53 0 90.5 37.5T640 512v192H128q-53 0-90.5-37.5T0 576m480-256q-66 0-113-47t-47-113t47-113T480 0t113 47t47 113t-47 113t-113 47"></svg:path>`,
})
export class WhhTuneinIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTuneinaltIcon],svg[whh-tuneinalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 960H128q-53 0-90.5-37.5T0 832V128q0-53 37.5-90.5T128 0h704q53 0 90.5 37.5T960 128v704q0 53-37.5 90.5T832 960M480 128q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m96 352q0-40-29-68t-71-28H128v96q0 40 29 68t71 28h348zm0 160H384v192h96q40 0 68-28t28-68zm256-256h-96q-40 0-68 28t-28 68v96h96q40 0 68-28t28-68z"></svg:path>`,
})
export class WhhTuneinaltIcon {
  readonly viewBox = input("0 0 960 960")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTurnipIcon],svg[whh-turnip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M989 129q-75 23-106.5 66.5T861 281q99 132 99 263q0 84-32.5 151.5t-89.5 111T706 873t-162 23q-62 0-111.5 13T353 941t-55 38t-51 32t-55 13q-93 0-142.5-37.5T0 896q11 32 48 48t80 16q33 0 80.5-50t47.5-78q0-38-9-61q-56-57-87.5-132T128 480q0-87 23-162t66.5-132t111-89.5T480 64q139 0 275 109q49-55 75-139q11-34 33-34q14 0 23.5 10t9.5 24q0 21-19 77q32-22 66.5-34.5T989 64q15 0 25 9.5t10 22.5q0 23-35 33"></svg:path>`,
})
export class WhhTurnipIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTurnleftIcon],svg[whh-turnleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M995 581L581 995q-29 29-69 29t-69-29L29 581Q0 552 0 512t29-69L443 29q29-29 69-29t69 29l414 414q29 29 29 69t-29 69m-291-5q0-53-37.5-90.5T576 448h-64V335q-22-25-37-8L328 457q-8 10-8 24t8 23l147 130q14 17 37-8V512h64q26 0 45 19t19 45v64h64z"></svg:path>`,
})
export class WhhTurnleftIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTurnoffalarmIcon],svg[whh-turnoffalarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M983.557 320h-3q-11 1-27-2q-85-145-238-211q-6-23-8.5-36.5t-2-28.5t7.5-23t22-13.5t40-5.5q104 0 177 73.5t73 176.5q0 67-41 70m-23 256q0 91-35.5 174t-95.5 143t-143 95.5t-174 35.5t-174-35.5t-143-95.5t-95.5-143t-35.5-174t35.5-174t95.5-143t143-95.5t174-35.5t174 35.5t143 95.5t95.5 143t35.5 174m-448-320q-87 0-160.5 43t-116.5 116.5t-43 160.5t43 160.5t116.5 116.5t160.5 43t160.5-43t116.5-116.5t43-160.5t-43-160.5t-116.5-116.5t-160.5-43m184 463l-41 41q-9 8-20.5 8t-20.5-8l-102-102l-102 102q-8 8-20 8t-21-8l-41-41q-8-8-8-20t8-21l102-102l-102-102q-8-8-8-20t8-21l41-40q9-9 21-9t20 9l102 102l102-102q9-9 20.5-9t20.5 9l41 40q8 9 8 21t-8 20l-102 102l102 102q8 9 8 21t-8 20m-625-401q-15 3-27 2h-3q-41-3-41-70q0-103 73-176.5t177-73.5q24 0 39.5 5.5t22.5 13.5t7.5 23t-2 28.5t-9.5 36.5q-152 66-237 211"></svg:path>`,
})
export class WhhTurnoffalarmIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTurnrightIcon],svg[whh-turnright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M995 581L581 995q-29 29-69 29t-69-29L29 581Q0 552 0 512t29-69L443 29q29-29 69-29t69 29l414 414q29 29 29 69t-29 69M696 457L549 327q-15-17-37 8v113h-64q-53 0-90.5 37.5T320 576v65h64v-65q0-26 19-45t45-19h64v114q23 25 37 8l147-130q8-9 8-23t-8-24"></svg:path>`,
})
export class WhhTurnrightIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTvIcon],svg[whh-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 1024H128q-53 0-90.5-37.5T0 896V448q0-53 37.5-90.5T128 320h348L280 123q-12 5-24 5q-26 0-45-19t-19-45.5t19-45T256.5 0t45 18.5T320 64q0 12-5 24l197 196L709 88q-5-12-5-24q0-27 19-45.5T768.5 0t45 18.5t18.5 45t-18.5 45.5t-45.5 19q-12 0-24-5L548 320h348q53 0 90.5 37.5T1024 448v448q0 53-37.5 90.5T896 1024M704 621q0-165-64-173H128q-19 3-32 17t-19 29.5t-9.5 41t-3.5 39V723q0 24 2 47.5t8 53T93.5 873t34.5 23h512q15-2 27-11.5t18.5-27T696 825t5.5-38t2-34t.5-30zm224-173H800q-13 0-22.5 9.5T768 480t9.5 22.5T800 512h128q13 0 22.5-9.5T960 480t-9.5-22.5T928 448m0 128H800q-13 0-22.5 9.5T768 608t9.5 22.5T800 640h128q13 0 22.5-9.5T960 608t-9.5-22.5T928 576m0 128H800q-13 0-22.5 9.5T768 736t9.5 22.5T800 768h128q13 0 22.5-9.5T960 736t-9.5-22.5T928 704m0 128H800q-13 0-22.5 9.5T768 864t9.5 22.5T800 896h128q13 0 22.5-9.5T960 864t-9.5-22.5T928 832"></svg:path>`,
})
export class WhhTvIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTwitterIcon],svg[whh-twitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 128q-91 0-121 4q58-35 89-132q-9 6-29.5 19t-33 20.5T898 55t-36 11Q800 0 709 0q-92 0-144.5 38.5T512 160q0 4-1 27t-1 42.5t2 26.5q-134-7-237-53T96 64q-32 55-32 96q0 57 16 94.5t56 64.5q-40 1-72 1q0 152 146 181q-27 8-56 8q-20 0-39-4q19 61 76.5 97.5T320 640q-23 23-54 37t-71 19.5t-65 6.5t-66 1q-4 0-29 1.5T0 706q27 52 110.5 89T322 832q112 0 207.5-36.5t162-97.5T805 558t69-164t22-170q0-3 9.5-5.5T930 211t31.5-13.5t34-26.5t28.5-43"></svg:path>`,
})
export class WhhTwitterIcon {
  readonly viewBox = input("0 0 1024 832")
  readonly width = input("1.24em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTwocolumnsleftIcon],svg[whh-twocolumnsleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.428 1024h-192q-26 0-45-19t-19-45V64q0-26 19-45t45-19h192q26 0 45 19t19 45v896q0 26-18.5 45t-45.5 19m-448 0h-384q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h384q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m0-864q0-13-9.5-22.5t-22.5-9.5h-320q-13 0-22.5 9.5t-9.5 22.5v704q0 13 9.5 22.5t22.5 9.5h320q13 0 22.5-9.5t9.5-22.5z"></svg:path>`,
})
export class WhhTwocolumnsleftIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTwocolumnsleftaltIcon],svg[whh-twocolumnsleftalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.428 1024h-128q-27 0-45.5-19t-18.5-45V832q0-27 18.5-45.5t45.5-18.5h128q26 0 45 18.5t19 45.5v128q0 26-19 45t-45 19m0-384h-128q-27 0-45.5-18.5t-18.5-45.5V448q0-27 18.5-45.5t45.5-18.5h128q26 0 45 18.5t19 45.5v128q0 26-19 45t-45 19m0-384h-128q-27 0-45.5-19t-18.5-45V64q0-27 18.5-45.5t45.5-18.5h128q26 0 45 18.5t19 45.5v128q0 26-19 45t-45 19m-448 768h-384q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h384q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m0-864q0-13-9.5-22.5t-22.5-9.5h-320q-13 0-22.5 9.5t-9.5 22.5v704q0 13 9.5 22.5t22.5 9.5h320q13 0 22.5-9.5t9.5-22.5z"></svg:path>`,
})
export class WhhTwocolumnsleftaltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTwocolumnsrightIcon],svg[whh-twocolumnsright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.06 1024h-384q-53 0-90.5-37.5t-37.5-90.5V128q0-53 37.5-90.5T512.06 0h384q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m0-864q0-13-9.5-22.5t-22.5-9.5h-320q-13 0-22.5 9.5t-9.5 22.5v704q0 13 9.5 22.5t22.5 9.5h320q13 0 22.5-9.5t9.5-22.5zm-640 864h-192q-26 0-45-19t-19-45V64q0-26 19-45t45-19h192q26 0 45 19t19 45v896q0 26-18.5 45t-45.5 19"></svg:path>`,
})
export class WhhTwocolumnsrightIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTwocolumnsrightaltIcon],svg[whh-twocolumnsrightalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.488 1024h-384q-53 0-90.5-37.5t-37.5-90.5V128q0-53 37.5-90.5t90.5-37.5h384q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m0-864q0-13-9.5-22.5t-22.5-9.5h-320q-13 0-22.5 9.5t-9.5 22.5v704q0 13 9.5 22.5t22.5 9.5h320q13 0 22.5-9.5t9.5-22.5zm-704 864h-128q-27 0-45.5-19t-18.5-45V832q0-27 18.5-45.5t45.5-18.5h128q26 0 45 18.5t19 45.5v128q0 26-19 45t-45 19m0-384h-128q-27 0-45.5-18.5T.488 576V448q0-27 18.5-45.5t45.5-18.5h128q26 0 45 18.5t19 45.5v128q0 26-19 45t-45 19m0-384h-128q-27 0-45.5-19t-18.5-45V64q0-27 18.5-45.5T64.488 0h128q26 0 45 18.5t19 45.5v128q0 26-19 45t-45 19"></svg:path>`,
})
export class WhhTwocolumnsrightaltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTwofingerswipedownIcon],svg[whh-twofingerswipedown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.297 1025h-384q-30 0-61-51t-49-111t-18-94V513q0-27 18.5-45.5t45.5-18.5q19 0 36 11l-36-389q-2-28 15-48.5t43-22t46 17t21 46.5l35 321q5 10 14.5 21t17.5 11l34-353q2-28 21.5-46.5t45.5-17t43.5 22t15.5 48.5q-32 186-32 378q0-27 18.5-45.5t45-18.5t45.5 18.5t19 45.5v64q0-27 18.5-45.5t45.5-18.5t45.5 18.5t18.5 45.5v224q0 63-13 115.5t-32 83t-38 52t-32 29.5zm-724-518q-5 6-12 6t-12-6l-145-163q-8-9 5-23h120V33q0-14 9-23t22.5-9t23 9t9.5 23v288h121q12 14 3 23z"></svg:path>`,
})
export class WhhTwofingerswipedownIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTwofingerswipeupIcon],svg[whh-twofingerswipeup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.05 1025h-384q-30 0-61-51t-49-111t-18-94V513q0-27 18.5-45.5t45.5-18.5q19 0 36 11l-36-389q-2-28 15-48.5t43-22t46 17t21 46.5l35 321q5 10 14.5 21t17.5 11l34-353q2-28 21.5-46.5t45.5-17t43.5 22t15.5 48.5q-32 186-32 378q0-27 18.5-45.5t45-18.5t45.5 18.5t19 45.5v64q0-27 18.5-45.5t45.5-18.5t45.5 18.5t18.5 45.5v224q0 176-97 265q-17 16-31 23m-704-833v289q0 13-9.5 22.5t-23 9.5t-22.5-9.5t-9-22.5V192h-120q-13-13-5-23l145-163q5-5 12-5t12 5l144 163q9 10-4 23z"></svg:path>`,
})
export class WhhTwofingerswipeupIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTwogIcon],svg[whh-twog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.585 832h-384q-27 0-45.5-18.5t-18.5-45.5V64q0-27 18.5-45.5t45.5-18.5h384q27 0 45.5 18.5t18.5 45.5v64q0 26-18.5 45t-45.5 19h-256v448h128V512q-27 0-45.5-18.5t-18.5-45.5v-64q0-26 18.5-45t45.5-19h128q26 0 45 19t19 45v384q0 27-18.5 45.5t-45.5 18.5m-576 0h-320q-27 0-45.5-18.5T.585 768V384q0-27 18.5-45.5t45.5-18.5h192V192h-192q-27 0-45.5-18.5T.585 128V64q0-27 18.5-45.5T64.585 0h320q27 0 45.5 18.5t18.5 45.5v384q0 26-18.5 45t-45.5 19h-192v128h192q27 0 45.5 18.5t18.5 45.5v64q0 26-18.5 45t-45.5 19"></svg:path>`,
})
export class WhhTwogIcon {
  readonly viewBox = input("0 0 1025 832")
  readonly width = input("1.24em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhTypothreeIcon],svg[whh-typothree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M897 506q-14 6-26 6q-42 0-87-36.5t-81-91t-65.5-116T592 153t-16-84q0-34 18-65q78-4 174-4q140 0 198 46.5t58 145.5q0 37-35 122.5T897 506M384 128q0 40 21 110t59.5 149.5t85 151t105 118.5T768 704q2 0 12-2q-94 143-182 232.5T448 1024q-46 0-99.5-43.5t-102-112T152 716T73 550T20 398T0 288q0-48 24.5-89t64-69T185 80t114-35.5T422 21q-38 47-38 107"></svg:path>`,
})
export class WhhTypothreeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhUIcon],svg[whh-u-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 66v702q0 106-75 181t-181 75H256q-106 0-181-75T0 768V64q0-26 19-45T64.5 0T110 19t19 45l-1 1v703q0 53 37.5 90.5T256 896h256q53 0 90.5-37.5T640 768V64q0-26 19-45t45.5-19T750 19t19 45q-1 1-1 2"></svg:path>`,
})
export class WhhUIcon {
  readonly viewBox = input("0 0 769 1024")
  readonly width = input("0.76em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhUUpperCaseIcon],svg[whh-u-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 66v702q0 106-75 181t-181 75H256q-106 0-181-75T0 768V64q0-26 19-45T64.5 0T110 19t19 45l-1 1v703q0 53 37.5 90.5T256 896h256q53 0 90.5-37.5T640 768V64q0-26 19-45t45.5-19T750 19t19 45q-1 1-1 2"></svg:path>`,
})
export class WhhUUpperCaseIcon {
  readonly viewBox = input("0 0 769 1024")
  readonly width = input("0.76em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhUbuntuIcon],svg[whh-ubuntu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M828 450q-22-84-91-138.5T579 257q-34 0-69 10L412 97q83-33 167-33q31 0 67 6q-3 16-3 26q0 67 47 114t114 47q62 0 109-43q92 102 111 236zm-24-257q-40 0-68-28.5T708 96t28-68t68-28t68 28t28 68t-28 68.5t-68 28.5M399 698l-98 170q-117-92-156-233q50-16 81-58t31-95q0-47-25-86t-67-59q44-103 136-175l98 169q-77 76-77 183.5T399 698M96.5 579q-39.5 0-68-28.5T0 482t28.5-68t68-28t68 28t28.5 68t-28.5 68.5t-68 28.5M510 762q35 10 69 10q89 0 158-54.5T828 579h196q-19 134-111 236q-47-43-109-43q-67 0-114 47t-47 114q0 10 3 26q-36 6-67 6q-86 0-167-33zm294 74q40 0 68 28.5t28 68.5t-28 68t-68 28t-68-28t-28-68t28-68.5t68-28.5"></svg:path>`,
})
export class WhhUbuntuIcon {
  readonly viewBox = input("0 0 1024 1029")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhUmbrellaIcon],svg[whh-umbrella-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1002 448q-21-29-57.5-46.5t-80-17.5t-80.5 17.5t-58 46.5h-76q-26-36-74-53v437q0 79-56 135.5T384.5 1024t-136-56.5T192 832q0-27 19-45.5t45.5-18.5t45 18.5t18.5 45t19 45.5t45.5 19t45-19t18.5-45V395q-47 17-74 53h-76q-21-29-58-46.5T159.5 384t-80 17.5T22 448H0q0-96 59-179.5T220.5 132T448 67v-3q0-27 18.5-45.5T512 0t45.5 18.5T576 64v3q125 12 227.5 65T965 268t59 180z"></svg:path>`,
})
export class WhhUmbrellaIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhUnderlineIcon],svg[whh-underline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 1024H64q-26 0-45-19T0 959.5t19-45T64 896h896q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19M640 832H384q-106 0-181-75t-75-181V64q0-26 19-45t45.5-19t45 19T256 64v512q0 53 37.5 90.5T384 704h256q53 0 90.5-37.5T768 576V64q0-26 19-45t45.5-19t45 18.5T896 64v512q0 106-75 181t-181 75"></svg:path>`,
})
export class WhhUnderlineIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhUndoIcon],svg[whh-undo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512.342 1025q-118 0-222-50.5t-176-139.5l101-79q54 66 131.5 103.5t165.5 37.5q104 0 192.5-51.5t140-140t51.5-192.5t-51.5-192.5t-140-140t-192.5-51.5q-144 0-253 96l126 126q1 35-23 34h-330q-13 0-21.5-14t-9.5-29l-1-318q-1-24 34-23l134 134q70-63 158.5-98.5T512.342 1q104 0 199 41t163.5 109.5t109 163t40.5 198.5t-40.5 199t-109 163.5t-163.5 109t-199 40.5"></svg:path>`,
})
export class WhhUndoIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhUnlockIcon],svg[whh-unlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 1024H64q-26 0-45-19T0 960V512q0-27 19-45.5T64 448h576V320q0-80-56-136t-135.5-56t-136 56T256 320H128q0-87 43-160.5T287.5 43T448 0t160.5 43T725 159.5T768 320v128h64q27 0 45.5 18.5T896 512v448q0 26-18.5 45t-45.5 19M576 640q0-53-37.5-90.5T448 512t-90.5 37.5T320 640q0 40 22.5 72t58.5 47l-81 201h256l-81-201q36-15 58.5-47t22.5-72"></svg:path>`,
})
export class WhhUnlockIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhUnpackarchiveIcon],svg[whh-unpackarchive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 1024H64q-27 0-45.5-19T0 960V448q0-27 18.5-45.5T64 384h320q0-47 3-96H270q-14-13-14-32.5t14-33.5L477 15q14-15 34.5-15T546 15l207 207q15 14 15 33.5T753 288H635q4 50 5 96h320q27 0 45.5 18.5T1024 448v512q0 26-18.5 45t-45.5 19m0-576H641q-3 198-57 321q-6 13-18 22t-23 9h-54q-10 0-22.5-9T447 769q-55-123-62-321H64v512h896z"></svg:path>`,
})
export class WhhUnpackarchiveIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhUpleftIcon],svg[whh-upleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1005.488 915l-91 90q-19 19-46 19t-46-19l-566-563v325q0 27-19 45.5t-45 18.5h-128q-26 0-45-18.5t-19-45.5V64q0-27 18.5-45.5T64.488 0h704q26 0 45 18.5t19 45.5v128q0 26-19 45t-45 19h-334l571 568q19 19 19 45.5t-19 45.5"></svg:path>`,
})
export class WhhUpleftIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhUploadIcon],svg[whh-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m33-882q-13-14-32.5-14T480 142L138 487q-12 14-8.5 19.5T148 512h236v320q0 27 19 45.5t45 18.5h129q26 0 45-18.5t19-45.5V512h235q15 0 19-5.5t-8-19.5z"></svg:path>`,
})
export class WhhUploadIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhUploadaltIcon],svg[whh-uploadalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 1024H128q-53 0-90.5-37.5T0 896v-96q0-26 19-45t45-19t45 19t19 45v32q0 27 18.5 45.5T192 896h640q27 0 45.5-18.5T896 832v-32q0-26 19-45t45-19t45 19t19 45v96q0 53-37.5 90.5T896 1024m-21-640H640v320q0 27-18.5 45.5T576 768H448q-27 0-45.5-18.5T384 704V384H148q-15 0-18.5-6t8.5-19L479 14q14-14 33-14t33 14l341 345q12 13 8 19t-19 6"></svg:path>`,
})
export class WhhUploadaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhUprightIcon],svg[whh-upright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 830H832q-26 0-45-18.5T768 766V442l-567 562q-18 19-45 19t-46-19l-91-90Q0 895 0 868.5T19 823l572-567H256q-26 0-45-19t-19-45V64q0-27 19-45.5T256 0h704q27 0 45.5 18.5T1024 64v702q0 27-19 45.5T960 830"></svg:path>`,
})
export class WhhUprightIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhUptimeIcon],svg[whh-uptime-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m270-579q-12 6-25 0t-18.5-19.5t0-27.5t18.5-19l95-43q-57-109-164-165l-43 96q-5 13-19 18.5t-27.5 0T579 267t0-26l43-97q-54-16-110-16t-110 16l43 97q6 13 0 26t-19.5 18.5t-27.5 0t-19-18.5l-43-96q-107 55-164 165l95 42q12 6 17.5 19.5t0 27.5t-18 19.5t-25.5-.5l-97-42q-16 54-16 110t16 110l97-42q13-6 25.5-.5t18 19.5t0 27.5T267 646l-95 42q57 109 164 165l42-96q6-12 19.5-17.5t27.5 0t19.5 18t-.5 25.5l-42 97q54 16 110 16t110-16l-42-97q-6-13-.5-25.5t19.5-18t27.5 0T646 757l42 96q108-56 164-165l-95-43q-13-5-18.5-19t0-27.5T757 579t25 0l98 43q16-54 16-110t-16-110zM512 576q-27 0-45.5-18.5T448 512q0-21 12.5-38t32.5-23l243-195h16q7 0 11.5 4.5T768 272v16L573 531q-6 20-23 32.5T512 576"></svg:path>`,
})
export class WhhUptimeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhUsbIcon],svg[whh-usb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M672 448h-32q0 73-59.5 132.5T448 640h-64v198q28 10 46 34.5t18 55.5q0 40-28 68t-68 28t-68-28t-28-68q0-31 17.5-55.5T320 838v-70h-64q-73 0-132.5-59.5T64 576v-5q-28-10-46-35T0 480q0-39 28-67t68-28t68 28t28 67q0 31-18 55.5T128 571v5q0 53 37.5 90.5T256 704h64V192h-53q-11-10-11-25t11-26l59-130q11-11 26-11t26 11l59 130q11 11 11 26t-11 25h-53v384h64q53 0 90.5-37.5T576 448h-32q-14 0-23-9t-9-23V289q0-14 9-23t23-9h128q13 0 22.5 9t9.5 23v127q0 14-9.5 23t-22.5 9"></svg:path>`,
})
export class WhhUsbIcon {
  readonly viewBox = input("0 0 704 1024")
  readonly width = input("0.69em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhUsbaltIcon],svg[whh-usbalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832.338 1024h-704q-53 0-90.5-37.5T.338 896V128q0-53 37.5-90.5t90.5-37.5h704q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m0-736q0-13-9.5-22.5t-22.5-9.5h-128q-13 0-22.5 9.5t-9.5 22.5v128q0 13 9.5 22.5t22.5 9.5h32q0 53-37.5 90.5t-90.5 37.5h-64V256h53q11-11 11-26t-11-25l-59-131q-11-11-26-11t-26 11l-59 131q-11 10-11 25t11 26h53v384h-64q-53 0-90.5-37.5t-37.5-90.5v-6q28-10 46-34.5t18-55.5q0-40-28-68t-68-28t-68 28t-28 68q0 31 18 55.5t47 34.5q0 1-.5 3t-.5 3q0 73 59.5 132.5t132.5 59.5h64v70q-28 10-46 34.5t-18 55.5q0 40 28 68t68 28t68-28t28-68q0-31-18-55.5t-46-34.5V640h64q73 0 132.5-59.5t59.5-132.5h32q13 0 22.5-9.5t9.5-22.5z"></svg:path>`,
})
export class WhhUsbaltIcon {
  readonly viewBox = input("0 0 961 1024")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhUsbflashIcon],svg[whh-usbflash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M987 860L860 987q-32 35-94 36.5t-118-20t-85-50.5L173 563q-13-13-13-32t13-33l325-325q14-14 33-14t32 14l390 390q29 29 50.5 85t20 118t-36.5 94M0 307L307 0l154 154l-307 307zm292-138q6 6 15 6t15-6l31-31q7-6 7-15t-7-16l-31-30q-6-7-15-7t-15 7l-31 30q-6 7-6 16t6 15zM107 353q7 7 16 7t15-7l31-31q6-6 6-15t-6-15l-31-31q-6-6-15-6t-16 6l-30 31q-7 6-7 15t7 15z"></svg:path>`,
})
export class WhhUsbflashIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhUsbplugIcon],svg[whh-usbplug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 896h-64v64q0 26-19 45t-45 19H320q-26 0-45-19t-19-45v-64h-64q-17 0-64-40.5T40.5 768T0 704V384q0-26 18.5-45T64 320h640q26 0 45 19t19 45v320q0 17-40.5 64T640 855.5T576 896M64 0h640v256H64zm448 160q0 13 9.5 22.5T544 192h64q13 0 22.5-9.5T640 160V96q0-13-9.5-22.5T608 64h-64q-13 0-22.5 9.5T512 96zm-384 0q0 13 9.5 22.5T160 192h64q13 0 22.5-9.5T256 160V96q0-13-9.5-22.5T224 64h-64q-13 0-22.5 9.5T128 96z"></svg:path>`,
})
export class WhhUsbplugIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}
