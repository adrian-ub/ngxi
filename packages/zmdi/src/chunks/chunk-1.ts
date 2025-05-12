import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiNotificationsNoneIcon],svg[zmdi-notifications-none-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M181.5 429q-17.5 0-30-12.5T139 387h85q0 17-12.5 29.5t-30 12.5M320 301l43 43v21H0v-21l43-43V184q0-49 30-86.5T149 49V35q0-14 9.5-23t23-9t22.5 9t9 23v14q47 11 77 48.5t30 86.5zm-43 22V184q0-40-28-68t-68-28t-68 28t-28 68v139z"></svg:path>`,
})
export class ZmdiNotificationsNoneIcon {
  readonly viewBox = input("0 0 368 432")
  readonly width = input("0.86em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiNotificationsOffIcon],svg[zmdi-notifications-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M181.5 429q-17.5 0-30-12.5T139 387h85q0 17-12.5 29.5t-30 12.5M320 184v79L118 61q17-8 31-12V35q0-14 9.5-23t23-9t22.5 9t9 23v14q47 11 77 48.5t30 86.5m-6 181H0v-21l43-43V184q0-38 19-71L0 51l27-27l357 357l-27 27z"></svg:path>`,
})
export class ZmdiNotificationsOffIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiNotificationsPausedIcon],svg[zmdi-notifications-paused-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M181.5 429q-17.5 0-30-12.5T139 387h85q0 17-12.5 29.5t-30 12.5M320 301l43 43v21H0v-21l43-43V184q0-49 30-86.5T149 49V35q0-14 9.5-23t23-9t22.5 9t9 23v14q47 11 77 48.5t30 86.5zm-85-132v-38H128v38h60l-60 73v38h107v-38h-60z"></svg:path>`,
})
export class ZmdiNotificationsPausedIcon {
  readonly viewBox = input("0 0 368 432")
  readonly width = input("0.86em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiOdnoklassnikiIcon],svg[zmdi-odnoklassniki-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 219q-45 0-76.5-32T28 110.5t31.5-76T136 3t76.5 31.5t31.5 76t-31.5 76.5t-76.5 32m0-161q-22 0-37.5 15.5T83 111t15.5 37.5T136 164t37.5-15.5T189 111t-15.5-37.5T136 58m124 174q8 15 1 24.5T232 281q-27 17-75 22l81 81q7 7 7 17.5t-7 17.5l-3 3q-8 7-18 7t-17-7q-12-11-64-64l-63 64q-7 7-17.5 7T38 422l-3-3q-7-7-7-17.5t7-17.5l63-63l18-18q-48-4-76-22q-22-15-29-24.5t1-24.5q5-11 16-13.5t29 8.5q14 11 33.5 17t32.5 6l13 1q49 0 79-24q18-11 29-8.5t16 13.5"></svg:path>`,
})
export class ZmdiOdnoklassnikiIcon {
  readonly viewBox = input("0 0 272 432")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiOpenInBrowserIcon],svg[zmdi-open-in-browser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 21q18 0 30.5 12.5T384 64v256q0 18-12.5 30.5T341 363h-85v-43h85V107H43v213h85v43H43q-18 0-30.5-12.5T0 320V64q0-18 12.5-30.5T43 21zM192 149l85 86h-64v128h-42V235h-64z"></svg:path>`,
})
export class ZmdiOpenInBrowserIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiOpenInNewIcon],svg[zmdi-open-in-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 341V192h43v149q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0h149v43H43v298zM235 0h149v149h-43V73L132 282l-30-30L311 43h-76z"></svg:path>`,
})
export class ZmdiOpenInNewIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiOutlookIcon],svg[zmdi-outlook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M267 93h145q4 0 9.5 5t5.5 12l-127 85h-4l-29-18zm0 115l27 18q2 1 4 1h3l1-1q-2 1 29-19.5t64-41.5l32-21v153q0 12-6.5 18t-16.5 6H267zm-139-39q13 0 20.5 12.5T156 216t-7.5 34t-21.5 12q-13 0-21-12.5T98 216t8-34t22-13M0 51L251 3v426L0 377zm168 218q16-21 16-54t-15.5-53.5T128 141q-26 0-42 21t-16 56q0 32 16 52t41 20t41-21"></svg:path>`,
})
export class ZmdiOutlookIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPaletteIcon],svg[zmdi-palette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 0q80 0 136 50t56 121q0 44-31.5 75T277 277h-37q-14 0-23 9.5t-9 22.5q0 12 8 21q8 10 8 22q0 13-9.5 22.5T192 384q-80 0-136-56T0 192T56 56T192 0M74.5 192q13.5 0 23-9.5T107 160t-9.5-22.5t-23-9.5t-22.5 9.5t-9 22.5t9 22.5t22.5 9.5m64-85q13.5 0 23-9.5t9.5-23t-9.5-22.5t-23-9t-22.5 9t-9 22.5t9 23t22.5 9.5m107 0q13.5 0 22.5-9.5t9-23t-9-22.5t-22.5-9t-23 9t-9.5 22.5t9.5 23t23 9.5m64 85q13.5 0 22.5-9.5t9-22.5t-9-22.5t-22.5-9.5t-23 9.5T277 160t9.5 22.5t23 9.5"></svg:path>`,
})
export class ZmdiPaletteIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPanoramaHorizontalIcon],svg[zmdi-panorama-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 76q-84 25-171 24q-87 0-170-24v232q83-24 170-24t171 24zm31-55q12 0 12 14v314q0 14-12 14q-4 0-7-2q-94-35-195-35T19 361q-4 2-7 2q-12 0-12-14V35q0-14 12-14q3 0 7 2q94 35 194 35q101 0 195-35q3-2 7-2"></svg:path>`,
})
export class ZmdiPanoramaHorizontalIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPanoramaVerticalIcon],svg[zmdi-panorama-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m340 411l2 6q0 12-14 12H13q-13 0-13-12q0-3 1-6q35-95 35-195T1 21q-1-3-1-6Q0 3 13 3h315q13 0 13 12q0 3-1 6q-35 95-35 195q0 101 35 195M54 387h233q-25-84-25-171t25-171H54q25 84 25 171T54 387"></svg:path>`,
})
export class ZmdiPanoramaVerticalIcon {
  readonly viewBox = input("0 0 344 432")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPanoramaWideAngleIcon],svg[zmdi-panorama-wide-angle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.5 64Q138 64 58 78q-15 57-15 114t15 114q80 14 155.5 14T369 306q15-57 15-114T369 78q-80-14-155.5-14m-.5-43q83 0 170 16l20 3l5 19q19 67 19 133t-19 133l-5 19l-20 3q-87 16-170 16T44 347l-20-3l-5-19Q0 258 0 192T19 59l5-19l20-3q87-16 169-16"></svg:path>`,
})
export class ZmdiPanoramaWideAngleIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiParkingIcon],svg[zmdi-parking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149 0q53 0 90.5 37.5T277 128t-37.5 90.5T149 256H85v128H0V0zm5 171q17 0 29.5-12.5T196 128t-12.5-30.5T154 85H85v86z"></svg:path>`,
})
export class ZmdiParkingIcon {
  readonly viewBox = input("0 0 280 384")
  readonly width = input("0.73em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPauseIcon],svg[zmdi-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 341V43h85v298zM171 43h85v298h-85z"></svg:path>`,
})
export class ZmdiPauseIcon {
  readonly viewBox = input("0 0 256 384")
  readonly width = input("0.67em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPauseCircleIcon],svg[zmdi-pause-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3M192 301V131h-43v170zm85 0V131h-42v170z"></svg:path>`,
})
export class ZmdiPauseCircleIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPauseCircleOutlineIcon],svg[zmdi-pause-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149 301V131h43v170zM213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3m0 384q70.5 0 120.5-50t50-121t-50-121t-120.5-50T93 95T43 216t50 121t120.5 50m21.5-86V131h42v170z"></svg:path>`,
})
export class ZmdiPauseCircleOutlineIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPaypalIcon],svg[zmdi-paypal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M237 3q79 0 112 39q30 35 20 99q-23 146-175 146h-49q-8 0-14 5t-7 13l-17 106q-1 8-7 13t-14 5H13q-6 0-10-4.5T0 415L62 21q2-8 7.5-13T83 3zm18 144q4-29-8-43q-6-8-18-11.5t-21.5-4T180 88h-11q-11 0-12 11l-17 103h23q17 0 25.5-.5t22-3.5t21-8.5t14-16.5t9.5-26"></svg:path>`,
})
export class ZmdiPaypalIcon {
  readonly viewBox = input("0 0 376 432")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPaypalAltIcon],svg[zmdi-paypal-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M225 108q0-34-52-34h-15q-7 0-13 4.5T138 90l-14 60v3q0 5 3.5 8.5t8.5 3.5h12q15 0 28-3t24.5-9t18-17.5T225 108m131 33q0 58-48 93q-47 35-133 35h-13q-7 0-13 4.5t-7 11.5l-16 69q-2 7-9 12.5t-15 5.5H56q-7 0-11.5-4T40 357q0-2 3-14h32q8 0 14.5-5t7.5-12l16-69q2-7 8.5-12t13.5-5h13q85 0 132-35t47-92q0-28-11-44q40 20 40 72m-40-40q0 57-48 93q-47 35-133 35h-13q-7 0-13 4.5t-7 11.5l-16 68q-2 8-8.5 13.5T62 332H16q-7 0-11.5-4T0 317v-4L66 30q1-7 8-12.5T89 12h97q14 0 26.5.5t26.5 3t24.5 6.5t21 11t17 16T312 71.5t4 29.5"></svg:path>`,
})
export class ZmdiPaypalAltIcon {
  readonly viewBox = input("0 0 360 384")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPhoneIcon],svg[zmdi-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M77 166q47 93 141 141l47-47q9-10 22-5q36 12 76 12q8 0 14.5 6t6.5 15v75q0 8-6.5 14.5T363 384q-99 0-182.5-48.5t-132-132T0 21q0-8 6.5-14.5T21 0h75q9 0 15 6.5t6 14.5q0 40 12 76q4 13-5 22z"></svg:path>`,
})
export class ZmdiPhoneIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPhoneBluetoothIcon],svg[zmdi-phone-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m250 187l-15-15l59-60l-59-60l15-15l49 49V5h10l61 61l-46 46l46 46l-61 61h-10v-81zm70-141v40l20-20zm0 92v40l20-20zm43 177q8 0 14.5 6t6.5 15v75q0 8-6.5 14.5T363 432q-99 0-182.5-48.5t-132-132T0 69q0-8 6.5-14.5T21 48h75q9 0 15 6.5t6 14.5q0 40 12 76q4 13-5 22l-47 47q47 93 141 141l47-47q9-9 22-5q36 12 76 12"></svg:path>`,
})
export class ZmdiPhoneBluetoothIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPhoneEndIcon],svg[zmdi-phone-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 128q-51 0-98 15v66q0 14-12 20q-31 15-57 39q-6 6-15 6t-15-6L6 215q-6-6-6-15t6-15Q111 85 256 85t250 100q6 6 6 15t-6 15l-53 53q-6 6-15 6t-15-6q-25-23-57-39q-12-6-12-19v-66q-47-16-98-16"></svg:path>`,
})
export class ZmdiPhoneEndIcon {
  readonly viewBox = input("0 0 512 384")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPhoneForwardedIcon],svg[zmdi-phone-forwarded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 219v-64h-85V69h85V5l107 107zm43 96q8 0 14.5 6t6.5 15v75q0 8-6.5 14.5T363 432q-99 0-182.5-48.5t-132-132T0 69q0-8 6.5-14.5T21 48h75q9 0 15 6.5t6 14.5q0 40 12 76q4 13-5 22l-47 47q47 93 141 141l47-47q9-9 22-5q36 12 76 12"></svg:path>`,
})
export class ZmdiPhoneForwardedIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPhoneInTalkIcon],svg[zmdi-phone-in-talk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M363 267q8 0 14.5 6t6.5 15v75q0 8-6.5 14.5T363 384q-99 0-182.5-48.5t-132-132T0 21q0-8 6.5-14.5T21 0h75q9 0 15 6.5t6 14.5q0 40 12 76q4 13-5 22l-47 47q47 93 141 141l47-47q9-9 22-5q36 12 76 12m-22-75q0-62-43.5-105.5T192 43V0q80 0 136 56t56 136zm-85 0q0-27-18.5-45.5T192 128V85q44 0 75.5 31.5T299 192z"></svg:path>`,
})
export class ZmdiPhoneInTalkIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPhoneLockedIcon],svg[zmdi-phone-locked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M363 315q8 0 14.5 6t6.5 15v75q0 8-6.5 14.5T363 432q-99 0-182.5-48.5t-132-132T0 69q0-8 6.5-14.5T21 48h75q9 0 15 6.5t6 14.5q0 40 12 76q4 13-5 22l-47 47q47 93 141 141l47-47q9-9 22-5q36 12 76 12m0-246q8 0 14.5 6.5T384 91v85q0 9-6.5 15t-14.5 6H256q-9 0-15-6t-6-15V91q0-9 6-15.5t15-6.5V59q0-22 15.5-38T309 5t38 16t16 38zm-17 0V59q0-15-11-26t-26-11t-25.5 11T273 59v10z"></svg:path>`,
})
export class ZmdiPhoneLockedIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPhoneMissedIcon],svg[zmdi-phone-missed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M139 53v75h-32V0h128v32h-75l96 96L384 0l21 21l-149 150zm367 239q6 6 6 15t-6 15l-53 53q-6 6-15 6t-15-6q-27-24-57-40q-12-5-12-19v-66q-47-15-98-15t-98 15v66q0 14-12 20q-32 16-57 39q-6 6-15 6t-15-6L6 322q-6-6-6-15t6-15q105-100 250-100t250 100"></svg:path>`,
})
export class ZmdiPhoneMissedIcon {
  readonly viewBox = input("0 0 512 384")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPhoneMsgIcon],svg[zmdi-phone-msg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M363 267q8 0 14.5 6t6.5 15v75q0 8-6.5 14.5T363 384q-99 0-182.5-48.5t-132-132T0 21q0-8 6.5-14.5T21 0h75q9 0 15 6.5t6 14.5q0 40 12 76q4 13-5 22l-47 47q47 93 141 141l47-47q9-9 22-5q36 12 76 12M192 0h192v149H256l-64 64z"></svg:path>`,
})
export class ZmdiPhoneMsgIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPhonePausedIcon],svg[zmdi-phone-paused-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 0v149h-43V0zm64 267q8 0 14.5 6t6.5 15v75q0 8-6.5 14.5T363 384q-99 0-182.5-48.5t-132-132T0 21q0-8 6.5-14.5T21 0h75q9 0 15 6.5t6 14.5q0 40 12 76q4 13-5 22l-47 47q47 93 141 141l47-47q9-9 22-5q36 12 76 12M341 0h43v149h-43z"></svg:path>`,
})
export class ZmdiPhonePausedIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPhoneRingIcon],svg[zmdi-phone-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M506 316q6 6 6 15t-6 15l-53 53q-6 6-15 6t-15-6q-26-24-57-40q-12-5-12-19v-66q-47-15-98-15t-98 15v66q0 14-12 20q-32 16-57 39q-6 6-15 6t-15-6L6 346q-6-6-6-15t6-15q105-100 250-100t250 100M451 94l-76 75l-30-30l76-76zM277 3v106h-42V3zM137 169Q63 94 61 94l30-31l76 76z"></svg:path>`,
})
export class ZmdiPhoneRingIcon {
  readonly viewBox = input("0 0 512 408")
  readonly width = input("1.26em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPhoneSettingIcon],svg[zmdi-phone-setting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213 128v43h-42v-43zm86 0v43h-43v-43zm64 139q8 0 14.5 6t6.5 15v75q0 8-6.5 14.5T363 384q-99 0-182.5-48.5t-132-132T0 21q0-8 6.5-14.5T21 0h75q9 0 15 6.5t6 14.5q0 40 12 76q4 13-5 22l-47 47q47 93 141 141l47-47q9-9 22-5q36 12 76 12m-22-139h43v43h-43z"></svg:path>`,
})
export class ZmdiPhoneSettingIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPhoneSipIcon],svg[zmdi-phone-sip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 0v107h-22V0zm-43 43v64h-64V85h43V64h-43V0h64v21h-43v22zm64-43h64v64h-43v43h-21zm43 43V21h-22v22zm0 224q8 0 14.5 6t6.5 15v75q0 8-6.5 14.5T363 384q-99 0-182.5-48.5t-132-132T0 21q0-8 6.5-14.5T21 0h75q9 0 15 6.5t6 14.5q0 40 12 76q4 13-5 22l-47 47q48 93 141 141l47-47q9-9 22-5q36 12 76 12"></svg:path>`,
})
export class ZmdiPhoneSipIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPhotoSizeSelectLargeIcon],svg[zmdi-photo-size-select-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 256h42v43h-42zm0-85h42v42h-42zm42 170q0 16-13 29.5T427 384v-43zM256 0h43v43h-43zm171 85h42v43h-42zm0-85q16 0 29 13.5T469 43h-42zM0 85h43v43H0zM341 0h43v43h-43zm0 341h43v43h-43zM43 0v43H0q0-16 13.5-29.5T43 0m128 0h42v43h-42zM85 0h43v43H85zM0 171h299v213H43q-18 0-30.5-12.5T0 341zm43 170h213l-68-91l-54 69l-38-46z"></svg:path>`,
})
export class ZmdiPhotoSizeSelectLargeIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPhotoSizeSelectSmallIcon],svg[zmdi-photo-size-select-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469 256v43h-42v-43zm0-85v42h-42v-42zm0 170q0 16-13 29.5T427 384v-43zM299 0v43h-43V0zm170 85v43h-42V85zM427 0q16 0 29 13.5T469 43h-42zM43 384q-18 0-30.5-12.5T0 341v-85h213v128zm0-299v43H0V85zm256 256v43h-43v-43zM384 0v43h-43V0zm0 341v43h-43v-43zM43 0v43H0q0-16 13.5-29.5T43 0m0 171v42H0v-42zM213 0v43h-42V0zm-85 0v43H85V0z"></svg:path>`,
})
export class ZmdiPhotoSizeSelectSmallIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPictureInPictureIcon],svg[zmdi-picture-in-picture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 85v128H213V85zm43-85q17 0 29.5 12.5T469 43v298q0 18-12.5 30.5T427 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zm0 342V42H43v300z"></svg:path>`,
})
export class ZmdiPictureInPictureIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPinIcon],svg[zmdi-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149 3q62 0 106 43.5T299 152q0 31-15.5 71.5t-37.5 75t-44 65t-37 48.5l-16 17q-6-6-16-18t-35.5-46.5t-45.5-67T16 224T0 152Q0 90 43.5 46.5T149 3m0 202q22 0 38-15.5t16-37.5t-16-37.5T149 99t-37.5 15.5T96 152t15.5 37.5T149 205"></svg:path>`,
})
export class ZmdiPinIcon {
  readonly viewBox = input("0 0 304 432")
  readonly width = input("0.71em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPinAccountIcon],svg[zmdi-pin-account-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 3q18 0 30.5 12.5T384 45v299q0 18-12.5 30.5T341 387h-85l-64 64l-64-64H43q-18 0-30.5-12.5T0 344V45q0-17 12.5-29.5T43 3zM192 73q-24 0-41 17t-17 41t17 40.5t41 16.5t41-16.5t17-40.5t-17-41t-41-17m128 228v-19q0-20-23.5-35.5t-52.5-23t-52-7.5t-52 7.5t-52.5 23T64 282v19z"></svg:path>`,
})
export class ZmdiPinAccountIcon {
  readonly viewBox = input("0 0 384 456")
  readonly width = input("0.85em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPinAssistantIcon],svg[zmdi-pin-assistant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 3q18 0 30.5 12.5T384 45v299q0 18-12.5 30.5T341 387h-85l-64 64l-64-64H43q-18 0-30.5-12.5T0 344V45q0-17 12.5-29.5T43 3zM232 235l88-40l-88-40l-40-88l-40 88l-88 40l88 40l40 88z"></svg:path>`,
})
export class ZmdiPinAssistantIcon {
  readonly viewBox = input("0 0 384 456")
  readonly width = input("0.85em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPinDropIcon],svg[zmdi-pin-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M277 131q0 27-13 61t-32 63t-37.5 55t-31.5 40l-14 15q-5-5-13.5-15T105 311t-39-56.5t-31-62T21 131q0-53 37.5-90.5T149 3t90.5 37.5T277 131m-170-.5q0 17.5 12.5 30t30 12.5t30-12.5t12.5-30t-12.5-30t-30-12.5t-30 12.5t-12.5 30M0 387h299v42H0z"></svg:path>`,
})
export class ZmdiPinDropIcon {
  readonly viewBox = input("0 0 304 432")
  readonly width = input("0.71em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPinHelpIcon],svg[zmdi-pin-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 3q18 0 30.5 12.5T384 45v299q0 18-12.5 30.5T341 387h-85l-64 64l-64-64H43q-18 0-30.5-12.5T0 344V45q0-17 12.5-29.5T43 3zM213 344v-43h-42v43zm44-165q20-20 20-48q0-36-25-61t-60-25t-60 25t-25 61h42q0-18 12.5-30.5T192 88t30.5 12.5T235 131q0 17-13 30l-26 27q-25 25-25 60v11h42q0-22 6-34.5t19-26.5z"></svg:path>`,
})
export class ZmdiPinHelpIcon {
  readonly viewBox = input("0 0 384 456")
  readonly width = input("0.85em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPinOffIcon],svg[zmdi-pin-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213 99q-23 0-39 18l-68-68Q150 3 213 3q62 0 106 43.5T363 152q0 48-37 117l-77-78q18-16 18-39q0-22-16-37.5T213 99m94 204l77 78l-27 27l-72-71q-16 23-34 46.5T223 418l-10 11q-6-6-16-18t-35.5-46.5t-45.5-67T80 224t-16-72q0-16 4-33L0 51l27-27l178 178l3 3z"></svg:path>`,
})
export class ZmdiPinOffIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPinterestIcon],svg[zmdi-pinterest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M99 166q0-27 14-46t34-19q17 0 25.5 11t8.5 27q0 10-3 25q-4 14-10 34q-6 19-9 31q-5 20 7.5 34.5T199 278q35 0 57.5-39.5T279 143q0-43-27.5-70T174 46q-56 0-90.5 35.5T49 167q0 29 17 50q6 6 4 14q-2 5-5 20q-2 5-5.5 6.5t-7.5.5q-26-11-39-37T0 161q0-22 7-44t22-42.5T65 38t51-25.5T181 3t65.5 12t51 32t32 46.5T341 148q0 75-38 124t-98 49q-20 0-37.5-9T143 290q-15 58-18 69q-8 30-36 70H72q-6-51 2-84l33-138q-8-17-8-41"></svg:path>`,
})
export class ZmdiPinterestIcon {
  readonly viewBox = input("0 0 344 432")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPinterestBoxIcon],svg[zmdi-pinterest-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235 306q53 0 82-35t29-82q0-52-39-89.5T213.5 62T120 99.5T81 189q0 34 18 63q6 11 18 11q9 0 15.5-6.5T139 242q0-5-4-11q-11-20-11-42q0-35 26-59.5t63-24.5t63.5 24.5T303 189q0 30-16.5 51.5T235 262q-12 0-20-8.5t-8-20.5q0-9 9.5-28.5T226 169q0-28-31-28q-14 0-24.5 11.5T160 189q0 8 1 16t2 12l1 3l-39 119l-1 4v3q0 10 6.5 17t16.5 7q14 0 20-12l1 1l1-4l20-69q19 20 46 20M384 3q18 0 30.5 12.5T427 45v342q0 17-12.5 29.5T384 429H43q-18 0-30.5-12.5T0 387V45q0-17 12.5-29.5T43 3z"></svg:path>`,
})
export class ZmdiPinterestBoxIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPizzaIcon],svg[zmdi-pizza-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 3q56 0 105.5 22.5T384 88L192 429L0 88q36-40 86-62.5T192 3M85 109.5q0 17.5 12.5 30t30 12.5t30-12.5t12.5-30t-12.5-30t-30-12.5t-30 12.5t-12.5 30M191.5 280q17.5 0 30-12.5t12.5-30t-12.5-30t-30-12.5t-30 12.5t-12.5 30t12.5 30t30 12.5"></svg:path>`,
})
export class ZmdiPizzaIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPlasterIcon],svg[zmdi-plaster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m336 216l86 85q6 7 6 15.5t-6 14.5l-93 93q-6 6-15 6t-15-6l-85-85l-85 85q-6 6-15 6t-15-6L6 331q-6-6-6-14.5T6 301l85-85l-85-84q-6-7-6-15.5T6 101L99 9q6-6 14.5-6T129 9l85 85l85-85q6-6 15-6t15 6l92 92q7 7 7 15.5t-7 15.5zm-122-64q-9 0-15 6.5t-6 15t6 15t15 6.5t15.5-6.5t6.5-15t-6.5-15T214 152m-100 42l77-78l-77-77l-78 78zm57.5 43q8.5 0 15-6t6.5-15t-6.5-15t-15-6t-15 6t-6.5 15t6.5 15t15 6m42.5 43q9 0 15.5-6.5t6.5-15t-6.5-15T214 237t-15 6.5t-6 15t6 15t15 6.5m43-85q-9 0-15 6t-6 15t6 15t15 6t15-6t6-15t-6-15t-15-6m57 199l77-78l-77-77l-78 78z"></svg:path>`,
})
export class ZmdiPlasterIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPlayIcon],svg[zmdi-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 43l235 149L0 341z"></svg:path>`,
})
export class ZmdiPlayIcon {
  readonly viewBox = input("0 0 240 384")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPlayCircleIcon],svg[zmdi-play-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3M171 312l128-96l-128-96z"></svg:path>`,
})
export class ZmdiPlayCircleIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPlayCircleOutlineIcon],svg[zmdi-play-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171 312V120l128 96zM213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3m0 384q70.5 0 120.5-50t50-121t-50-121t-120.5-50T93 95T43 216t50 121t120.5 50"></svg:path>`,
})
export class ZmdiPlayCircleOutlineIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPlayForWorkIcon],svg[zmdi-play-for-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M107 43h42v119h75l-96 96l-96-96h75zM0 235h43q0 35 25 60t60 25t60-25t25-60h43q0 53-37.5 90.5T128 363t-90.5-37.5T0 235"></svg:path>`,
})
export class ZmdiPlayForWorkIcon {
  readonly viewBox = input("0 0 256 384")
  readonly width = input("0.67em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPlaylistAudioIcon],svg[zmdi-playlist-audio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 64v43H0V64zm0 85v43H0v-43zM0 277v-42h171v42zM299 64h106v43h-64v192q0 26-18.5 45t-45 19t-45.5-19t-19-45.5t19-45t45-18.5q11 0 22 4z"></svg:path>`,
})
export class ZmdiPlaylistAudioIcon {
  readonly viewBox = input("0 0 408 384")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPlaylistPlusIcon],svg[zmdi-playlist-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 149v43H0v-43zm0-85v43H0V64zm85 171h86v42h-86v86h-42v-86h-86v-42h86v-86h42zM0 277v-42h171v42z"></svg:path>`,
})
export class ZmdiPlaylistPlusIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPlaystationIcon],svg[zmdi-playstation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M426 263q2 9-6.5 18T392 296l-2 1l-64-20l17-6q21-7 21-13q-2-10-37-4l-36 12l-61 21v22l96-32l64 20l-99 34l-61 21v-1v1l-69-22v-39v19q-40 14-84 6q-3 0-11-1.5t-12-2t-11-1.5t-11.5-2.5t-10-3t-8.5-3t-6.5-4t-5-5T0 288q-2-25 34-37l59 18l-15 6q-15 5-6 13q9 9 25 4l64-22v-44l-27-8l27-9V32l88 23q91 24 90 95q-1 90-82 67V100q0-6-7-9t-13.5-1t-6.5 9v148l6-2q58-20 104-17q80 6 86 35M34 251h2l98-33l27 8v19l-68 24z"></svg:path>`,
})
export class ZmdiPlaystationIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPlusIcon],svg[zmdi-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 213H171v128h-43V213H0v-42h128V43h43v128h128z"></svg:path>`,
})
export class ZmdiPlusIcon {
  readonly viewBox = input("0 0 304 384")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPlus1Icon],svg[zmdi-plus-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 85v86h85v42h-85v86H85v-86H0v-42h85V85zm213 235h-42V93l-64 22V79l100-36h6z"></svg:path>`,
})
export class ZmdiPlus1Icon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPlus2Icon],svg[zmdi-plus-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M300 284h127v36H243v-32l89-97q10-11 18-22q7-8 12-18q4-7 6-14q2-8 2-14q0-9-3-18q-3-8-8-13q-5-7-12-10t-17-3q-12 0-21 4t-14 10q-6 8-9 16q-2 9-3 19h-45q0-17 6-32q6-16 17.5-28T291 49q17-6 39-6q20 0 37 5q16 6 27 15q10 10 16 24t6 31q0 13-4 25t-12 25q-7 13-17 25q-13 15-22 25zM128 85v86h85v42h-85v86H85v-86H0v-42h85V85z"></svg:path>`,
})
export class ZmdiPlus2Icon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPlusCircleIcon],svg[zmdi-plus-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3M320 237v-42h-85v-86h-43v86h-85v42h85v86h43v-86z"></svg:path>`,
})
export class ZmdiPlusCircleIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPlusCircleOIcon],svg[zmdi-plus-circle-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235 109v86h85v42h-85v86h-43v-86h-85v-42h85v-86zM213 3q88 0 151 62.5T427 216t-63 150.5T213 429T62.5 366.5T0 216T62.5 65.5T213 3m.5 384q70.5 0 120.5-50t50-121t-50-121t-120.5-50T93 95T43 216t50 121t120.5 50"></svg:path>`,
})
export class ZmdiPlusCircleOIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPlusCircleODuplicateIcon],svg[zmdi-plus-circle-o-duplicate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 107v64h64v42h-64v64h-42v-64h-64v-42h64v-64zM43 192q0 44 23.5 80.5T128 327v46q-56-20-92-69.5T0 192T36 80.5T128 11v46q-38 18-61.5 54.5T43 192M320 0q79 0 135.5 56.5T512 192t-56.5 135.5T320 384t-135.5-56.5T128 192t56.5-135.5T320 0m0 341q62 0 105.5-43.5T469 192T425.5 86.5T320 43T214.5 86.5T171 192t43.5 105.5T320 341"></svg:path>`,
})
export class ZmdiPlusCircleODuplicateIcon {
  readonly viewBox = input("0 0 512 384")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPlusSquareIcon],svg[zmdi-plus-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 0q18 0 30.5 12.5T384 43v298q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zm-42 213v-42h-86V85h-42v86H85v42h86v86h42v-86z"></svg:path>`,
})
export class ZmdiPlusSquareIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPocketIcon],svg[zmdi-pocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 52v112q0 39-10 69q-18 60-68 102q-53 44-121 48q-70 5-129-32q-54-35-80-93q-15-33-18-66q-1-18-1-75V42q0-14 7.5-25T28 2q8-2 16-2h169q25 0 75.5.5T364 1q27 0 35 2q14 4 22 17q6 9 6 32m-85 97q5-15-6-27q-10-13-27-10q-5 0-9.5 3t-7 5t-8 7.5L278 134q-56 55-64 62q-2-1-56-53q-7-7-15-14q-11-11-14-13q-13-9-27-2q-15 6-17.5 21.5T93 162q1 0 58 56l28 26q1 2 5.5 6.5t7 6.5t7 5t8.5 4q15 3 27-8q4-4 9-8.5t11-10.5l9-9q52-50 58-55l5.5-5.5l6.5-6.5l5-6z"></svg:path>`,
})
export class ZmdiPocketIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPolymerIcon],svg[zmdi-polymer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m395 21l96 171l-96 171h-86l96-171l-55-99l-169 270H96L0 192L96 21h85L85 192l56 99L309 21z"></svg:path>`,
})
export class ZmdiPolymerIcon {
  readonly viewBox = input("0 0 496 384")
  readonly width = input("1.3em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPortableWifiIcon],svg[zmdi-portable-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.5 171q17.5 0 30 12.5t12.5 30t-12.5 30t-30 12.5t-30-12.5t-12.5-30t12.5-30t30-12.5M341 213q0 35-17 64.5T277 324l-21-37q43-25 43-74q0-35-25-60t-60.5-25t-60.5 25t-25 60q0 49 43 74l-22 37q-29-17-46.5-46.5T85 213q0-53 37.5-90.5T213 85t90.5 37.5T341 213M213.5 0q88.5 0 151 62.5T427 213q0 59-29 108t-78 77l-21-37q39-23 62-62t23-86q0-70-50-120T213.5 43T93 93T43 213q0 47 23 86t62 62l-22 37q-48-28-77-77T0 213q0-88 62.5-150.5T213.5 0"></svg:path>`,
})
export class ZmdiPortableWifiIcon {
  readonly viewBox = input("0 0 432 400")
  readonly width = input("1.08em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPortableWifiChangesIcon],svg[zmdi-portable-wifi-changes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M364 65q63 63 63 151t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213 3h22v176q21 12 21 37q0 18-12.5 30.5t-30 12.5t-30-12.5T171 216q0-24 21-37v-45q-28 7-46 30t-18 52q0 35 25 60t60.5 25t60.5-25t25-60t-25-60l30-30q37 37 37 90t-37.5 90.5T213 344t-90.5-37.5T85 216q0-47 30.5-82.5T192 90V47q-64 8-106.5 56T43 216q0 71 50 121t120.5 50T334 337t50-121q0-70-50-121z"></svg:path>`,
})
export class ZmdiPortableWifiChangesIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPortableWifiOffIcon],svg[zmdi-portable-wifi-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m332 264l-34-35q1-7 1-13q0-35-25-60t-61-25q-4 0-13 1l-34-35q23-9 47-9q53 0 90.5 37.5T341 216q0 25-9 48M213 45q-42 0-80 20l-31-31Q154 3 213 3q89 0 151.5 62.5T427 216q0 60-32 111l-31-31q20-38 20-80q0-71-50-121T213 45M27 13l21 22l357 357l-27 27l-160-161l-5 1q-17 0-29.5-12.5T171 216v-4l-34-34q-9 19-9 38q0 49 43 74l-22 37q-29-17-46.5-46.5T85 216q0-38 21-69l-31-31q-32 44-32 100q0 47 23 86t62 62l-22 37q-48-29-77-78T0 216q0-73 45-131L0 40z"></svg:path>`,
})
export class ZmdiPortableWifiOffIcon {
  readonly viewBox = input("0 0 432 424")
  readonly width = input("1.02em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPowerIcon],svg[zmdi-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213 0v213h-42V0zm103 46q68 58 68 146q0 80-56 136t-136 56t-136-56T0 192q0-88 68-146l30 30q-55 45-55 116q0 62 43.5 105.5T192 341t105.5-43.5T341 192q0-71-55-115z"></svg:path>`,
})
export class ZmdiPowerIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPowerInputIcon],svg[zmdi-power-input-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 128h405v43H0zm0 128v-43h107v43zm149 0v-43h107v43zm150 0v-43h106v43z"></svg:path>`,
})
export class ZmdiPowerInputIcon {
  readonly viewBox = input("0 0 408 384")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPowerSettingIcon],svg[zmdi-power-setting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 472v-43h43v43zm85 0v-43h43v43zM192 3v213h-43V3zm76 52q34 23 53.5 60t19.5 80q0 70-50 120t-120.5 50T50 315T0 195q0-43 19.5-80T73 55l31 30q-28 18-44.5 47T43 195q0 53 37.5 90.5T171 323t90.5-37.5T299 195q0-34-17-63t-45-46zm-33 417v-43h42v43z"></svg:path>`,
})
export class ZmdiPowerSettingIcon {
  readonly viewBox = input("0 0 344 472")
  readonly width = input("0.73em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPresentToAllIcon],svg[zmdi-present-to-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 0q17 0 29.5 12.5T469 43v298q0 18-12.5 30.5T427 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zm0 342V42H43v300zM192 192h-43l86-85l85 85h-43v85h-85z"></svg:path>`,
})
export class ZmdiPresentToAllIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPrintIcon],svg[zmdi-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M363 107q26 0 45 18.5t19 45.5v128h-86v85H85v-85H0V171q0-27 18.5-45.5T64 107zm-64 234V235H128v106zm63.5-149q8.5 0 15-6.5t6.5-15t-6.5-15t-15-6.5t-15 6.5t-6.5 15t6.5 15t15 6.5M341 0v85H85V0z"></svg:path>`,
})
export class ZmdiPrintIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiPuzzlePieceIcon],svg[zmdi-puzzle-piece-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M395 219q22 0 37.5 15.5T448 272t-15.5 37.5T395 325h-32v86q0 17-12.5 29.5T320 453h-81v-32q0-24-17-40.5T181 364t-40.5 16.5T124 421v32H43q-18 0-30.5-12.5T0 411v-81h32q24 0 41-17t17-41t-17-41t-41-17H0v-81q0-17 12.5-29.5T43 91h85V59q0-22 15.5-38T181 5t38 16t16 38v32h85q18 0 30.5 12.5T363 133v86z"></svg:path>`,
})
export class ZmdiPuzzlePieceIcon {
  readonly viewBox = input("0 0 448 456")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiQuoteIcon],svg[zmdi-quote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 299l43-86H0V85h128v128l-43 86zm171 0l43-86h-64V85h128v128l-43 86z"></svg:path>`,
})
export class ZmdiQuoteIcon {
  readonly viewBox = input("0 0 304 384")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiRadioIcon],svg[zmdi-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 115L296 5l15 36l-177 71h250q18 0 30.5 12.5T427 155v256q0 17-12.5 29.5T384 453H43q-18 0-30.5-12.5T0 411V155q0-14 7.5-24.5T26 115m80.5 296q26.5 0 45.5-19t19-45.5t-19-45t-45.5-18.5t-45 18.5t-18.5 45T61.5 392t45 19M384 240v-85H43v85h256v-43h42v43z"></svg:path>`,
})
export class ZmdiRadioIcon {
  readonly viewBox = input("0 0 432 456")
  readonly width = input("0.95em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiRailwayIcon],svg[zmdi-railway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 315V91q0-27 12.5-45t38-26.5t53-11.5t67-3t67 3t53 11.5t38 26.5T341 91v224q0 31-21.5 52.5T267 389l32 32v11H43v-11l32-32q-31 0-53-21.5T0 315m170.5 32q17.5 0 30-12.5T213 304t-12.5-30.5t-30-12.5t-30 12.5T128 304t12.5 30.5t30 12.5M299 197V91H43v106z"></svg:path>`,
})
export class ZmdiRailwayIcon {
  readonly viewBox = input("0 0 344 432")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiReaderIcon],svg[zmdi-reader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 192h149v32H256zm0-21h149zm0 106h149zM427 21q17 0 29.5 12.5T469 64v277q0 18-12.5 30.5T427 384H43q-18 0-30.5-12.5T0 341V64q0-18 12.5-30.5T43 21zm0 320V64H235v277z"></svg:path>`,
})
export class ZmdiReaderIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiReceiptIcon],svg[zmdi-receipt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 323v-43H64v43zm0-86v-42H64v42zm0-85v-43H64v43zM0 429V3l32 32L64 3l32 32l32-32l32 32l32-32l32 32l32-32l32 32l32-32l32 32l32-32v426l-32-32l-32 32l-32-32l-32 32l-32-32l-32 32l-32-32l-32 32l-32-32l-32 32l-32-32z"></svg:path>`,
})
export class ZmdiReceiptIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiRedditIcon],svg[zmdi-reddit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 189q0 28-27 39q2 9 2 19q0 51-55.5 87.5t-134 36.5t-134-36.5T23 247q0-10 2-20q-25-11-25-38q0-18 12.5-30.5T42 146q19 0 32 15q52-36 129-39l35-104q3-7 10-5l83 20q1 0 3 1q8-20 30-20q13 0 23 10t10 23.5T387 71t-23 10q-14 0-23.5-9.5T331 48q-2 1-3 0l-77-18l-31 92q79 2 132 40q13-16 33-16q17 0 29.5 12.5T427 189m-311 33.5q0 12.5 9 21.5t21.5 9t21.5-9t9-21.5t-9-22t-21.5-9.5t-21.5 9.5t-9 22M282 307q4-3 .5-6.5t-7.5-.5q-18 19-62 19t-62-19q-3-3-6.5.5t-.5 6.5q21 22 70 22q47 0 68-22m-1.5-54q12.5 0 21.5-9t9-21.5t-9-22t-21.5-9.5t-22 9.5t-9.5 22t9.5 21.5t22 9"></svg:path>`,
})
export class ZmdiRedditIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiRedoIcon],svg[zmdi-redo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m360 162l76-77v192H244l78-77q-48-40-110-40q-56 0-100.5 33T50 277L0 261q22-68 80.5-111T212 107q84 0 148 55"></svg:path>`,
})
export class ZmdiRedoIcon {
  readonly viewBox = input("0 0 440 384")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiRefreshIcon],svg[zmdi-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171 112q-53 0-90.5 37.5T43 240q0 32 15 60l-32 31Q0 289 0 240q0-71 50-121t121-50V5l85 86l-85 85zm144 37q26 42 26 91q0 71-50 121t-120 50v64l-86-86l86-85v64q53 0 90.5-37.5T299 240q0-31-15-60z"></svg:path>`,
})
export class ZmdiRefreshIcon {
  readonly viewBox = input("0 0 344 480")
  readonly width = input("0.72em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiRefreshAltIcon],svg[zmdi-refresh-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m384 107l85 85h-64q0 71-50 121t-120 50q-49 0-91-27l31-31q27 15 60 15q53 0 90.5-37.5T363 192h-64zm-277 85h64l-86 85l-85-85h64q0-71 50-121t121-50q49 0 91 27l-32 31q-27-15-59-15q-53 0-90.5 37.5T107 192"></svg:path>`,
})
export class ZmdiRefreshAltIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiRefreshSyncIcon],svg[zmdi-refresh-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171 69q70 0 120 50t50 121q0 49-26 91l-31-31q15-28 15-60q0-53-37.5-90.5T171 112v64L85 91l86-86zm0 299v-64l85 85l-85 86v-64q-71 0-121-50T0 240q0-49 26-91l32 31q-15 28-15 60q0 53 37.5 90.5T171 368"></svg:path>`,
})
export class ZmdiRefreshSyncIcon {
  readonly viewBox = input("0 0 344 480")
  readonly width = input("0.72em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiRefreshSyncAlertIcon],svg[zmdi-refresh-sync-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 192q0-59 36-105t92-60v44q-38 14-61.5 47T43 192q0 53 37 90l48-47v128H0l50-51Q0 262 0 192m171 107v-43h42v43zM384 21l-50 51q50 50 50 120q0 59-36 105t-92 60v-44q38-14 61.5-47t23.5-74q0-53-37-90l-48 47V21zM171 213V85h42v128z"></svg:path>`,
})
export class ZmdiRefreshSyncAlertIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiRefreshSyncOffIcon],svg[zmdi-refresh-sync-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M152 71q-5 2-16 8l-31-32q22-14 47-20zM0 51l27-27l335 336l-27 27l-50-50q-22 14-48 20v-44q7-3 17-8L81 133q-14 28-14 59q0 53 38 90l47-47v128H24l51-51q-51-50-51-120q0-49 26-90zm366-30l-51 51q51 50 51 120q0 49-26 90l-32-31q15-28 15-59q0-53-38-90l-47 47V21z"></svg:path>`,
})
export class ZmdiRefreshSyncOffIcon {
  readonly viewBox = input("0 0 368 392")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiRemoteControlIcon],svg[zmdi-remote-control-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M230 192q9 0 15 6.5t6 14.5v256q0 9-6 15.5t-15 6.5H102q-9 0-15-6.5T81 469V213q0-8 6-14.5t15-6.5zm-64 128q18 0 30.5-12.5t12.5-30t-12.5-30T166 235t-30.5 12.5t-12.5 30t12.5 30T166 320M60 129q44-44 106-44t106 44l-31 30q-31-31-75-31t-76 31zM166 0q98 0 166 69l-30 30q-56-56-136-56q-79 0-136 56L0 69Q69 0 166 0"></svg:path>`,
})
export class ZmdiRemoteControlIcon {
  readonly viewBox = input("0 0 336 496")
  readonly width = input("0.68em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiRemoteControlAltIcon],svg[zmdi-remote-control-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M59 135q44-44 106.5-44T272 135l-31 30q-31-31-75.5-31T89 165zM165.5 5Q262 5 331 74l-30 30q-56-56-135.5-56T30 104L0 74Q69 5 165.5 5M226 198q10 0 17.5 7t6.5 17v207q0 10-7 17t-17 7H104q-10 0-17-7t-7-17V222q0-10 7-17.5t17-7.5zm3 213V240H101v171z"></svg:path>`,
})
export class ZmdiRemoteControlAltIcon {
  readonly viewBox = input("0 0 336 456")
  readonly width = input("0.74em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiRepeatIcon],svg[zmdi-repeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85 109v86H43V67h256V3l85 85l-85 85v-64zm214 214v-86h42v128H85v64L0 344l85-85v64z"></svg:path>`,
})
export class ZmdiRepeatIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiRepeatOneIcon],svg[zmdi-repeat-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85 109v86H43V67h256V3l85 85l-85 85v-64zm214 214v-86h42v128H85v64L0 344l85-85v64zm-86-43h-32v-85h-32v-22l43-21h21z"></svg:path>`,
})
export class ZmdiRepeatOneIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiReplayIcon],svg[zmdi-replay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171 91q70 0 120 50t50 120.5T291 382t-120.5 50T50 382T0 261h43q0 53 37.5 90.5T171 389t90.5-37.5T299 261t-37.5-90.5T171 133v86L64 112L171 5z"></svg:path>`,
})
export class ZmdiReplayIcon {
  readonly viewBox = input("0 0 344 432")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiReplay10Icon],svg[zmdi-replay-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M239 284q0 20-8 30t-23 10t-23-10t-8-29v-17q0-19 8-29t23-10t23 10t8 28zm-18-18q0-12-3-17t-10-5t-10 5t-3 15v23q0 11 3 16.5t10 5.5t10-5t3-16zm-74 57h-19v-71l-22 7v-15l39-14h2zm24-235q70 0 120 50t50 120.5T291 379t-120.5 50T50 379T0 259h43q0 52 37.5 90t90 38t90.5-38t38-90.5t-38-90t-90-37.5v85L64 109L171 3z"></svg:path>`,
})
export class ZmdiReplay10Icon {
  readonly viewBox = input("0 0 344 432")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiReplay30Icon],svg[zmdi-replay-30-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M239 285q0 20-8 30t-23.5 10t-23.5-10t-8-29v-17q0-20 8-30t23.5-10t23.5 10t8 29zm-18-19q0-11-3.5-16.5t-10-5.5t-9.5 5t-3 16v23q0 11 3 16.5t10 5.5t10-5t3-16zm-101 3h10q7 0 10-3.5t3-9.5t-3-9t-9-3t-9.5 3t-3.5 8h-18q0-8 4-13.5t11-9t15-3.5q15 0 23.5 7t8.5 20q0 6-4 11.5t-10 8.5q8 3 11.5 8.5T163 298q0 12-9 19.5t-24 7.5q-14 0-23-7t-9-20h19q0 6 4 9t10 3t10-3.5t4-8.5q0-14-16-14h-9zm51-181q70 0 120 50t50 120.5T291 379t-120.5 50T50 379T0 259h43q0 52 37.5 90t90 38t90.5-38t38-90.5t-38-90t-90-37.5v85L64 109L171 3z"></svg:path>`,
})
export class ZmdiReplay30Icon {
  readonly viewBox = input("0 0 344 432")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiReplay5Icon],svg[zmdi-replay-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m142 277l5-46h51v15h-36l-2 20q6-4 13-4q13 0 20.5 8t7.5 23q0 8-4 15t-10.5 11t-16.5 4q-8 0-15-3.5t-11-9.5t-4-13h18q0 5 3.5 8t8.5 3q6 0 9.5-4t3.5-12t-4-12t-11-4q-6 0-10 3l-2 2zm29-189q70 0 120 50t50 120.5T291 379t-120.5 50T50 379T0 259h43q0 52 37.5 90t90 38t90.5-38t38-90.5t-38-90t-90-37.5v85L64 109L171 3z"></svg:path>`,
})
export class ZmdiReplay5Icon {
  readonly viewBox = input("0 0 344 432")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiRollerIcon],svg[zmdi-roller-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 45h64v171H192v192q0 9-6.5 15t-14.5 6h-43q-9 0-15-6t-6-15V173h213V88h-21v21q0 9-6.5 15.5T277 131H21q-8 0-14.5-6.5T0 109V24q0-9 6.5-15T21 3h256q9 0 15.5 6t6.5 15z"></svg:path>`,
})
export class ZmdiRollerIcon {
  readonly viewBox = input("0 0 368 432")
  readonly width = input("0.86em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiRotateCcwIcon],svg[zmdi-rotate-ccw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m138 126l139 138l-139 139L0 264zM60 264l78 78l78-78l-78-78zm334-133q57 56 57 135.5T394 402q-56 56-135 56q-49 0-93-24l32-31q29 13 61 13q62 0 105.5-44T408 266.5T364.5 161T259 117v69l-91-90l91-90v69q79 0 135 56"></svg:path>`,
})
export class ZmdiRotateCcwIcon {
  readonly viewBox = input("0 0 456 464")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiRotateCwIcon],svg[zmdi-rotate-cw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m312 126l139 138l-139 139l-138-139zm78 138l-78-78l-78 78l78 78zM56 131q56-56 136-56V6l90 90l-90 90v-69q-62 0-105.5 44T43 266.5T86.5 372T192 416q31 0 60-13l32 31q-43 24-92 24q-80 0-136-56T0 266.5T56 131"></svg:path>`,
})
export class ZmdiRotateCwIcon {
  readonly viewBox = input("0 0 456 464")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiRotateLeftIcon],svg[zmdi-rotate-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M65 166q-17 24-22 53H0q6-46 35-83zm-22 95q5 28 22 53l-30 30Q6 307 0 261zm22 114l30-31q24 17 53 22v43q-46-5-83-34M191 71q63 8 106 56t43 113t-43 113t-106 56v-43q45-8 75.5-43.5T297 240t-30.5-82.5T191 114v83l-98-95l98-97z"></svg:path>`,
})
export class ZmdiRotateLeftIcon {
  readonly viewBox = input("0 0 344 432")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiRotateRightIcon],svg[zmdi-rotate-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m246 102l-97 95v-83q-45 8-75.5 43.5T43 240t30.5 82.5T149 366v43q-63-8-106-56T0 240t43-113t106-56V5zm94 117h-43q-5-29-22-53l30-30q29 37 35 83M192 366q28-5 52-22l31 31q-37 28-83 34zm83-52q17-24 22-53h43q-6 46-35 83z"></svg:path>`,
})
export class ZmdiRotateRightIcon {
  readonly viewBox = input("0 0 344 432")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiRouterIcon],svg[zmdi-router-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M367 62q-40-36-90-36t-89 36l-17-17Q215 0 277 0t107 45zm-19 17l-17 17q-22-21-54-21t-53 21l-17-17q30-30 70.5-30T348 79m-7 134q18 0 30.5 12.5T384 256v85q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341v-85q0-18 12.5-30.5T43 213h213v-85h43v85zM107 320v-43H64v43zm74 0v-43h-42v43zm75 0v-43h-43v43z"></svg:path>`,
})
export class ZmdiRouterIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiRssIcon],svg[zmdi-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M47 269q19 0 33 13.5t14 33T80 349t-33 14t-33-14t-14-33.5t14-33T47 269M0 146q90 0 153.5 63.5T217 363h-62q0-64-45.5-109.5T0 208zM0 21q93 0 171.5 46t124 124.5T341 363h-62q0-116-81.5-198T0 83z"></svg:path>`,
})
export class ZmdiRssIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiRulerIcon],svg[zmdi-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 64q17 0 29.5 12.5T469 107v170q0 18-12.5 30.5T427 320H43q-18 0-30.5-12.5T0 277V107q0-18 12.5-30.5T43 64zm0 213V107h-43v85h-43v-85h-42v85h-43v-85h-43v85h-42v-85h-43v85H85v-85H43v170z"></svg:path>`,
})
export class ZmdiRulerIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiRunIcon],svg[zmdi-run-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M226.5 85Q209 85 196 72.5t-13-30t13-30T226.5 0t30 12.5t12.5 30t-12.5 30t-30 12.5M149 381L0 352l9-43l104 21l34-173l-38 15v73H66V145l111-47q3 0 8.5-1t8.5-1q22 0 36 21l22 34q13 23 37.5 37t53.5 14v43q-71 0-117-53l-13 64l45 42v160h-43V330l-44-42z"></svg:path>`,
})
export class ZmdiRunIcon {
  readonly viewBox = input("0 0 344 464")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSatelliteIcon],svg[zmdi-satellite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 0q18 0 30.5 12.5T384 43v298q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zM43 42v65q26 0 45-19t19-46zm0 150q62 0 105.5-44T192 42h-43q0 45-31 76t-75 31zm0 128h298l-96-128l-74 96l-54-64z"></svg:path>`,
})
export class ZmdiSatelliteIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiScannerIcon],svg[zmdi-scanner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M358 164q11 3 18.5 14.5T384 203v117q0 18-12.5 30.5T341 363H43q-18 0-30.5-12.5T0 320v-85q0-18 12.5-30.5T43 192h268L11 83l15-40zM85 299v-43H43v43zm256 0v-43H128v43z"></svg:path>`,
})
export class ZmdiScannerIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiScissorsIcon],svg[zmdi-scissors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m163 123l264 264v21h-64L213 259l-50 50q8 17 8 35q0 35-25 60t-60.5 25T25 404T0 344t25-60t60-25q19 0 35 7l51-50l-51-50q-16 7-35 7q-35 0-60-25T0 88t25-60T85.5 3T146 28t25 60q0 18-8 35m-77.5 8q17.5 0 30-12.5T128 88t-12.5-30.5t-30-12.5t-30 12.5T43 88t12.5 30.5t30 12.5m0 256q17.5 0 30-12.5T128 344t-12.5-30.5t-30-12.5t-30 12.5T43 344t12.5 30.5t30 12.5m128-160q10.5 0 10.5-11t-10.5-11t-10.5 11t10.5 11M363 24h64v21L277 195l-42-43z"></svg:path>`,
})
export class ZmdiScissorsIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiScreenRotationIcon],svg[zmdi-screen-rotation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m351 54l-29 28l-81-81l14-1q100 0 173.5 68T510 235h-32q-6-60-40.5-108T351 54M217 37l257 257q9 9 9 22.5t-9 22.5L338 475q-9 9-22.5 9t-22.5-9L36 218q-9-9-9-22.5t9-22.5L172 37q9-9 22.5-9t22.5 9m98 415l136-136L195 60L59 196zm-156 6l29-28l81 81l-14 1q-100 0-173.5-68T0 277h32q6 60 40 108t87 73"></svg:path>`,
})
export class ZmdiScreenRotationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiScreenRotationLockIcon],svg[zmdi-screen-rotation-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M475 272q9 10 9 23t-9 23L339 453q-9 10-22.5 10T294 453L37 197q-9-9-9-22.5t9-22.5L173 16q9-9 22.5-9t22.5 9l53 52l-31 30l-44-44L75 174l241 242l121-121l-47-47l30-30zM159 437l29-28l81 81l-14 1q-100 0-173.5-68T0 256h32q6 60 40 108t87 73m161-245q-9 0-15-6.5t-6-14.5V85q0-8 6-14.5t15-6.5V53q0-22 15.5-37.5T373 0t38 15.5T427 53v11q8 0 14.5 6.5T448 85v86q0 8-6.5 14.5T427 192zm17-139v11h73V53q0-15-11-25.5T373 17t-25.5 10.5T337 53"></svg:path>`,
})
export class ZmdiScreenRotationLockIcon {
  readonly viewBox = input("0 0 488 496")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSearchIcon],svg[zmdi-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m267 235l106 106l-32 32l-106-106v-17l-6-6q-39 33-90 33q-58 0-98.5-40.5T0 138.5t40.5-98t98-40.5t98 40.5T277 139q0 51-33 90l6 6zm-128 0q40 0 68-28t28-68t-28-68t-68-28t-68 28t-28 68t28 68t68 28"></svg:path>`,
})
export class ZmdiSearchIcon {
  readonly viewBox = input("0 0 376 384")
  readonly width = input("0.98em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSearchForIcon],svg[zmdi-search-for-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m320 235l107 106l-32 32l-107-107v-16l-6-6q-39 33-90 33q-38 0-70-19l31-31q19 8 39 8q40 0 68-28.5t28-68T260 71t-68-28t-68 28t-28 68h75l-89 85l-82-85h54q0-57 40.5-98T192 0q58 0 98.5 40.5T331 139q0 51-34 90l6 6z"></svg:path>`,
})
export class ZmdiSearchForIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSearchInFileIcon],svg[zmdi-search-in-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m341 378l-81-82q17-27 17-59q0-44-31-75t-75-31t-75.5 31T64 237t31.5 75.5T171 344q31 0 59-18l94 95q-12 8-25 8H42q-17 0-29.5-12.5T0 387V45q0-17 12.5-29.5T43 3h170l128 128zM107 237.5q0-26.5 18.5-45.5t45-19t45.5 19t19 45.5t-19 45t-45.5 18.5t-45-18.5t-18.5-45"></svg:path>`,
})
export class ZmdiSearchInFileIcon {
  readonly viewBox = input("0 0 344 432")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSearchInPageIcon],svg[zmdi-search-in-page-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M203 128q22 0 37.5 15.5T256 181t-15.5 38t-37.5 16t-38-16t-16-38t16-37.5t38-15.5M384 21q18 0 30.5 12.5T427 64v256q0 18-12.5 30.5T384 363H43q-18 0-30.5-12.5T0 320V64q0-18 12.5-30.5T43 21zm-68 303l30-30l-62-62q15-23 15-51q0-40-28-68t-68-28t-68 28t-28 68t28 68t67 28q28 0 51-15z"></svg:path>`,
})
export class ZmdiSearchInPageIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSearchReplaceIcon],svg[zmdi-search-replace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M149 64q-38 0-67.5 24.5T45 149H2q8-54 49.5-91T149 21q62 0 106 44l44-44v128H171l54-54q-32-31-76-31m121 195l103 104l-32 31l-103-103q-40 29-89 29q-62 0-105-44L0 320V192h128l-54 54q31 31 75 31q39 0 68-24t37-61h43q-5 37-27 67"></svg:path>`,
})
export class ZmdiSearchReplaceIcon {
  readonly viewBox = input("0 0 376 400")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSeatIcon],svg[zmdi-seat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 320v-64h341v128h-64v-64H107v64H43zm320-171h64v64h-64zM0 149h64v64H0zm320 64H107V43q0-18 12.5-30.5T149 0h128q18 0 30.5 12.5T320 43z"></svg:path>`,
})
export class ZmdiSeatIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSec10Icon],svg[zmdi-sec-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 101l101-37h6v256H64V115L0 137zm507 142q5 8 5 21t-5 23q-6 11-15 18q-10 7-24 11q-13 4-30 4q-20 0-34.5-5T379 301q-9-9-14.5-20t-5.5-22h41q0 8 3 14q4 6 9 9q5 4 12 5q6 2 14 2q16 0 24.5-6t8.5-17q0-4-1-8q-2-4-6-7q-5-4-12-6q-8-3-20-6q-16-3-28-8t-20-11q-9-6-14-15t-5-21t5-21q5-11 14-18.5t23-12.5q13-4 29-4q18 0 32 5t23 12q10 8 15 19t5 23h-42q0-4-2-10t-6-9q-5-4-10-6q-7-3-14.5-3t-13.5 2t-10 5q-3 3-6 8q-1 4-1 8.5t1.5 8t5.5 6.5t12 5q8 3 19 5q15 4 28 8q12 5 22 12q9 6 13 16M295 86q11 13 16 34q6 21 6 51v41q0 30-6 51q-5 21-16 34q-11 14-26 19q-15 6-34 6q-18 0-34-6q-15-5-26-19q-11-12-17-34q-6-20-6-51v-41q0-29 6-51q6-21 16.5-34t26-18.5T235 62t34 5.5T295 86m-20 132v-54q0-18-2-32q-3-13-8-21t-13-11.5t-17-3.5q-10 0-18 3q-7 4-12.5 12t-8.5 21q-2 13-2 33v53q0 20 2 33q3 13 9 21q5 9 12.5 12.5T235 288t17.5-3.5t12.5-12t7.5-22T275 218"></svg:path>`,
})
export class ZmdiSec10Icon {
  readonly viewBox = input("0 0 512 384")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSec3Icon],svg[zmdi-sec-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M158 213q5 7 8 16q2 9 2 18q0 18-6.5 32T144 302q-12 10-27 15q-16 5-34 5q-16 0-31-4.5T25 304T7 281q-7-13-7-31h42q0 9 3 16t8.5 12t13.5 7q7 3 17 3q20 0 31-10q11-11 11-31q0-10-3-18t-10-13q-5-5-14-8q-9-2-20-2H54v-33h25q11 0 19-3t13-8q6-5 8.5-12t2.5-16q0-18-9-28q-10-10-29-10q-9 0-16 2.5T56 105q-5 5-8 11.5T45 131H2q0-15 7-27q5-12 16-22t26-15q14-5 32-5t32.5 4T141 79.5t17 22.5q6 14 6 32q0 8-2 15t-8 15q-4 7-12 14q-6 6-17 11q12 4 20 10t13 14m198 30q4 8 5 21q0 13-5 23q-6 11-16 18q-9 7-23 11t-31 4q-19 0-33.5-5T228 301t-15-20t-5-22h40q0 8 4 14t9 9q5 4 12 5q6 2 13 2q17 0 25.5-6t8.5-17q0-4-2-8q-1-4-5-7q-5-4-13-6q-8-3-20-6q-15-3-27-8q-13-5-21-11q-9-7-14-15q-4-10-4-21q0-12 4-21q6-11 15-18.5t22-12.5q13-4 30-4q18 0 31 5q14 5 23 12q10 8 15 19t5 23h-41q0-4-2-10q-3-6-7-9q-4-4-10-6q-6-3-14-3t-13.5 2t-9.5 5t-6 8q-2 4-2 8.5t1.5 8t6 6.5t11.5 5q9 3 19 5q15 4 29 8q12 5 21 12q9 6 14 16"></svg:path>`,
})
export class ZmdiSec3Icon {
  readonly viewBox = input("0 0 368 384")
  readonly width = input("0.96em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSelectAllIcon],svg[zmdi-select-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 43q0-18 12.5-30.5T43 0v43zm0 170v-42h43v42zm85 171v-43h43v43zM0 128V85h43v43zM213 0v43h-42V0zm128 0q18 0 30.5 12.5T384 43h-43zM43 384q-18 0-30.5-12.5T0 341h43zM0 299v-43h43v43zM128 0v43H85V0zm43 384v-43h42v43zm170-171v-42h43v42zm0 171v-43h43q0 18-12.5 30.5T341 384m0-256V85h43v43zm0 171v-43h43v43zm-85 85v-43h43v43zm0-341V0h43v43zM85 299V85h214v214zm43-171v128h128V128z"></svg:path>`,
})
export class ZmdiSelectAllIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSettingsIcon],svg[zmdi-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m366 237l45 35q7 6 3 14l-43 74q-4 8-13 4l-53-21q-18 13-36 21l-8 56q-1 9-11 9h-85q-9 0-11-9l-8-56q-19-8-36-21l-53 21q-9 3-13-4L1 286q-4-8 3-14l45-35q-1-12-1-21t1-21L4 160q-7-6-3-14l43-74q5-8 13-4l53 21q18-13 36-21l8-56q2-9 11-9h85q10 0 11 9l8 56q19 8 36 21l53-21q9-3 13 4l43 74q4 8-3 14l-45 35q2 12 2 21t-2 21m-158.5 54q30.5 0 52.5-22t22-53t-22-53t-52.5-22t-52.5 22t-22 53t22 53t52.5 22"></svg:path>`,
})
export class ZmdiSettingsIcon {
  readonly viewBox = input("0 0 416 432")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSettingsSquareIcon],svg[zmdi-settings-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M192 149q18 0 30.5 12.5T235 192t-12.5 30.5T192 235t-30.5-12.5T149 192t12.5-30.5T192 149M341 0q18 0 30.5 12.5T384 43v298q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zm-37 192q0-7-1-15l32-24q4-5 1-10l-30-52q-3-5-9-3l-37 15q-12-9-25-15l-6-39q-1-6-7-6h-60q-6 0-7 6l-6 40q-14 5-25 14L87 88q-6-2-9 4l-30 51q-3 6 1 10l32 24q-1 8-1 15t1 15l-32 24q-4 5-1 10l30 52q3 5 9 3l37-15q12 9 25 15l6 39q1 6 7 6h60q6 0 7-6l6-40q14-5 25-14l37 15q6 2 9-4l30-51q3-6-1-10l-32-24q1-8 1-15"></svg:path>`,
})
export class ZmdiSettingsSquareIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiShapeIcon],svg[zmdi-shape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M79 0h164q16-2 29.5 9T287 37v111l36-59q30 47 84 135.5T474 335H233q-29 30-52 39q-42 18-88 4t-71-53q-27-39-21-89t41-82V48q-2-18 8.5-33T79 0m12 53v72q40-13 82 1t65 49V53zm40 114q-30 1-51 18.5T49 233q-8 34 13 65.5t56 36.5q34 6 64-17t32-58q5-36-21-65t-62-28m192 16l-62 102h125z"></svg:path>`,
})
export class ZmdiShapeIcon {
  readonly viewBox = input("0 0 480 384")
  readonly width = input("1.25em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiShareIcon],svg[zmdi-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 303q26 0 44 18.5t18 44t-18 44t-44 18.5t-44-18.5t-18-44.5q0-6 1-14l-151-88q-19 17-44 17q-27 0-45.5-18.5T0 216t18.5-45.5T64 152q25 0 44 17l150-87q-2-9-2-15q0-27 18.5-45.5T320 3t45.5 18.5t18.5 45t-18.5 45.5t-45.5 19q-25 0-44-18l-150 88q2 9 2 15t-2 15l152 88q18-16 42-16"></svg:path>`,
})
export class ZmdiShareIcon {
  readonly viewBox = input("0 0 384 432")
  readonly width = input("0.89em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiShieldCheckIcon],svg[zmdi-shield-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m192 5l192 86v128q0 89-55 162.5T192 475q-82-20-137-93.5T0 219V91zm-43 342l171-171l-30-30l-141 140l-55-55l-30 30z"></svg:path>`,
})
export class ZmdiShieldCheckIcon {
  readonly viewBox = input("0 0 384 480")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiShieldSecurityIcon],svg[zmdi-shield-security-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m192 5l192 86v128q0 89-55 162.5T192 475q-82-20-137-93.5T0 219V91zm0 235V52L43 118v122zv191q59-19 100-72t49-119z"></svg:path>`,
})
export class ZmdiShieldSecurityIcon {
  readonly viewBox = input("0 0 384 480")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiShoppingBasketIcon],svg[zmdi-shopping-basket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M346 152h102q9 0 15 6.5t6 14.5v6l-54 198q-4 13-15.5 22t-26.5 9H96q-15 0-26-9t-15-22L1 179q-1-2-1-6q0-8 6.5-14.5T21 152h103l93-140q6-9 17.5-9t17.5 9zm-175 0h128l-64-94zm63.5 171q17.5 0 30-12.5T277 280t-12.5-30.5t-30-12.5t-30 12.5T192 280t12.5 30.5t30 12.5"></svg:path>`,
})
export class ZmdiShoppingBasketIcon {
  readonly viewBox = input("0 0 472 408")
  readonly width = input("1.16em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiShoppingCartIcon],svg[zmdi-shopping-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 344q18 0 30.5 12.5t12.5 30t-12.5 30T128 429t-30-12.5t-12-30t12-30t30-12.5M0 3h70l20 42h315q9 0 15.5 6.5T427 67q0 5-3 10l-76 138q-12 22-38 22H151l-19 35v3q0 5 5 5h247v43H128q-18 0-30.5-12.5T85 280q0-11 6-20l28-53L43 45H0zm341.5 341q17.5 0 30 12.5t12.5 30t-12.5 30t-30 12.5t-30-12.5t-12.5-30t12.5-30t30-12.5"></svg:path>`,
})
export class ZmdiShoppingCartIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiShoppingCartPlusIcon],svg[zmdi-shopping-cart-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213 176v-64h-64V69h64V5h43v64h64v43h-64v64zm-85 192q18 0 30.5 12.5t12.5 30t-12.5 30T128 453t-30-12.5t-12-30t12-30t30-12.5m213.5 0q17.5 0 30 12.5t12.5 30t-12.5 30t-30 12.5t-30-12.5t-12.5-30t12.5-30t30-12.5M132 299q0 5 5 5h247v43H128q-18 0-30.5-12.5T85 304q0-11 6-20l28-53L43 69H0V27h70l20 42l20 43l48 101l3 6h149l59-107l24-43l37 21l-82 149q-12 22-38 22H151l-19 35z"></svg:path>`,
})
export class ZmdiShoppingCartPlusIcon {
  readonly viewBox = input("0 0 432 456")
  readonly width = input("0.95em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiShuffleIcon],svg[zmdi-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m141 132l-31 30L0 51l30-30zm83-111h117v118l-43-44L30 363L0 333L268 65zm7 201l67 67l43-44v118H224l44-44l-67-67z"></svg:path>`,
})
export class ZmdiShuffleIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSignInIcon],svg[zmdi-sign-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m151 269l55-56H0v-42h206l-55-56l30-30l107 107l-107 107zM341 0q18 0 30.5 12.5T384 43v298q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341v-85h43v85h298V43H43v85H0V43q0-18 12.5-30.5T43 0z"></svg:path>`,
})
export class ZmdiSignInIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSkipNextIcon],svg[zmdi-skip-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 320V64l181 128zM213 64h43v256h-43z"></svg:path>`,
})
export class ZmdiSkipNextIcon {
  readonly viewBox = input("0 0 256 384")
  readonly width = input("0.67em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSkipPreviousIcon],svg[zmdi-skip-previous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 64h43v256H0zm75 128L256 64v256z"></svg:path>`,
})
export class ZmdiSkipPreviousIcon {
  readonly viewBox = input("0 0 256 384")
  readonly width = input("0.67em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSkypeIcon],svg[zmdi-skype-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M414 261q13 25 13 52q0 48-34.5 82T309 429q-30 0-56-13q-19 3-37 3q-85 0-144.5-59T12 218q0-20 4-40q-16-27-16-59q0-48 34.5-82T118 3q34 0 63 18q17-3 35-3q84 0 143.5 58.5T419 218q0 22-5 43m-95.5 52.5Q333 294 333 269q0-21-8.5-35.5T301 210q-14-10-34-16q-21-6-45-12q-20-4-29-7q-8-2-16-6t-12-9t-4-12q0-11 12-19q14-8 36-8q23 0 34 7q10 8 18 23q6 11 12 16t18 5t20.5-8.5T320 144t-6.5-22.5t-20-22t-33.5-17t-47-6.5q-35 0-60 10q-26 9-39.5 27T100 153q0 24 13 41q13 16 35 25q21 9 53 16q23 4 37 9q14 4 22 11q8 8 8 20q0 14-15 25q-16 10-41 10q-18 0-29.5-5T165 292t-11-21q-5-11-12-17q-8-6-18-6q-13 0-21.5 8T94 275q0 18 13 36t34 29q28 15 72 15q37 0 64-11t41.5-30.5"></svg:path>`,
})
export class ZmdiSkypeIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSlideshareIcon],svg[zmdi-slideshare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M153 132q21 0 35.5 14t14.5 33.5t-14.5 33T153 226t-36-13.5t-15-33t15-33.5t36-14m119 0q21 0 35.5 13.5t14.5 33t-14.5 33.5t-35.5 14t-36-14t-15-33.5t15-33t36-13.5m131 74q10-7 15-.5t-1 15.5q-29 36-88 60q26 89-22 131q-32 27-64 14q-27-10-26-42q0 1-.5-24.5T216 306l-4-1l-7-2v81q1 36-32 44q-36 9-65-23q-40-43-16-124q-60-25-89-60q-6-9-1-15.5t14 .5l4 3V44q0-17 12.5-29T61 3h300q16 0 26 12t10 29v165q2 0 6-3m-27 16V63q0-22-6.5-30.5T345 24H79q-20 0-26.5 8.5T46 63v160q23 14 51 19.5t46 4.5t34 0q15-1 22 6q1 0 1.5 1l.5 1q9 8 15 12q1-22 27-20q16-1 34 0t46-5t53-20"></svg:path>`,
})
export class ZmdiSlideshareIcon {
  readonly viewBox = input("0 0 424 432")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSlideshowIcon],svg[zmdi-slideshow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m149 107l107 85l-107 85zM341 0q18 0 30.5 12.5T384 43v298q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zm0 341V43H43v298z"></svg:path>`,
})
export class ZmdiSlideshowIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSmartphoneIcon],svg[zmdi-smartphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 6q18 0 30.5 12T299 48v384q0 18-12.5 30.5T256 475H43q-18 0-30.5-12.5T0 432V48q0-18 12.5-30.5T43 5zm0 383V91H43v298z"></svg:path>`,
})
export class ZmdiSmartphoneIcon {
  readonly viewBox = input("0 0 304 480")
  readonly width = input("0.64em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSmartphoneAndroidIcon],svg[zmdi-smartphone-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235 5q26 0 45 19t19 45v342q0 26-19 45t-45 19H64q-27 0-45.5-19T0 411V69q0-26 18.5-45T64 5zm-43 427v-21h-85v21zm69-64V69H37v299z"></svg:path>`,
})
export class ZmdiSmartphoneAndroidIcon {
  readonly viewBox = input("0 0 304 480")
  readonly width = input("0.64em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSmartphoneDownloadIcon],svg[zmdi-smartphone-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 6q18 0 30.5 12T299 48v384q0 18-12.5 30.5T256 475H43q-18 0-30.5-12.5T0 432V48q0-18 12.5-30.5T43 5zm0 383V91H43v298zm-21-128l-86 86l-85-86h64V155h43v106z"></svg:path>`,
})
export class ZmdiSmartphoneDownloadIcon {
  readonly viewBox = input("0 0 304 480")
  readonly width = input("0.64em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSmartphoneEraseIcon],svg[zmdi-smartphone-erase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213 159l-85 85l85 86l-21 21l-85-85l-86 85l-21-21l85-86l-85-85l21-21l86 85l85-85zM341 5q18 0 30.5 12.5T384 48v384q0 18-12.5 30.5T341 475H128q-18 0-30.5-12.5T85 432v-64h43v43h213V69H128v43H85V48q0-18 12.5-30.5T128 5z"></svg:path>`,
})
export class ZmdiSmartphoneEraseIcon {
  readonly viewBox = input("0 0 384 480")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSmartphoneInfoIcon],svg[zmdi-smartphone-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171 133v43h-43v-43zm0 86v128h-43V219zM256 6q18 0 30.5 12T299 48v384q0 18-12.5 30.5T256 475H43q-18 0-30.5-12.5T0 432V48q0-18 12.5-30.5T43 5zm0 383V91H43v298z"></svg:path>`,
})
export class ZmdiSmartphoneInfoIcon {
  readonly viewBox = input("0 0 304 480")
  readonly width = input("0.64em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSmartphoneIphoneIcon],svg[zmdi-smartphone-iphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 5q22 0 37.5 16T277 59v362q0 22-15.5 38T224 475H53q-22 0-37.5-16T0 421V59q0-22 15.5-38T53 5zm-85.5 448q13.5 0 23-9t9.5-22.5t-9.5-23t-23-9.5t-22.5 9.5t-9 23t9 22.5t22.5 9m96.5-85V69H43v299z"></svg:path>`,
})
export class ZmdiSmartphoneIphoneIcon {
  readonly viewBox = input("0 0 280 480")
  readonly width = input("0.59em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSmartphoneLandscapeIcon],svg[zmdi-smartphone-landscape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 85q0-17 12.5-29.5T43 43h384q17 0 29.5 12.5T469 85v214q0 17-12.5 29.5T427 341H43q-18 0-30.5-12.5T0 299zm384 0H85v214h299z"></svg:path>`,
})
export class ZmdiSmartphoneLandscapeIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSmartphoneLandscapeLockIcon],svg[zmdi-smartphone-landscape-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 43q17 0 29.5 12.5T469 85v214q0 17-12.5 29.5T427 341H43q-18 0-30.5-12.5T0 299V85q0-17 12.5-29.5T43 43zm-43 256V85H85v214zm-192-22q-9 0-15-6t-6-15v-64q0-9 6-15t15-6v-22q0-17 12.5-29.5t30-12.5t30 12.5T277 149v22q9 0 15.5 6t6.5 15v64q0 9-6.5 15t-15.5 6zm17-128v22h51v-22q0-10-7.5-17.5t-18-7.5t-18 7.5T209 149"></svg:path>`,
})
export class ZmdiSmartphoneLandscapeLockIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSmartphoneLockIcon],svg[zmdi-smartphone-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 5q18 0 30.5 12.5T363 48v384q0 18-12.5 30.5T320 475H107q-18 0-30.5-12.5T64 432v-64h43v43h213V69H107v43H64V48q0-18 12.5-30.5T107 5zM145 219q10 0 18 8t8 19v75q0 10-8.5 18t-19.5 8H26q-10 0-18-8.5T0 319v-75q0-9 8-17t18-8v-32q0-22 18-38t41-16t41.5 16t18.5 38zm-28 0v-32q0-13-9-20.5T85.5 159t-23 7.5T53 187v32z"></svg:path>`,
})
export class ZmdiSmartphoneLockIcon {
  readonly viewBox = input("0 0 368 480")
  readonly width = input("0.77em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSmartphonePortraitLockIcon],svg[zmdi-smartphone-portrait-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M107 325q-9 0-15.5-6T85 304v-64q0-9 6.5-15t15.5-6v-22q0-17 12.5-29.5t30-12.5t30 12.5T192 197v22q9 0 15 6t6 15v64q0 9-6 15t-15 6zm17-128v22h51v-22q0-10-7.5-17.5t-18-7.5t-18 7.5T124 197M256 5q18 0 30.5 12.5T299 48v384q0 18-12.5 30.5T256 475H43q-18 0-30.5-12.5T0 432V48q0-18 12.5-30.5T43 5zm0 384V91H43v298z"></svg:path>`,
})
export class ZmdiSmartphonePortraitLockIcon {
  readonly viewBox = input("0 0 304 480")
  readonly width = input("0.64em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSmartphoneRingIcon],svg[zmdi-smartphone-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M386 148q40 39 40 92t-40 90l-21-22q29-30 29-70t-29-68zm-45 45q20 21 20 47t-20 45l-21-22q18-24 0-49zM256 5q18 0 30.5 12.5T299 48v384q0 18-12.5 30.5T256 475H43q-18 0-30.5-12.5T0 432V48q0-18 12.5-30.5T43 5zm0 406V69H43v342z"></svg:path>`,
})
export class ZmdiSmartphoneRingIcon {
  readonly viewBox = input("0 0 432 480")
  readonly width = input("0.9em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSmartphoneSettingIcon],svg[zmdi-smartphone-setting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 512v-43h43v43zm86 0v-43h42v43zm85 0v-43h43v43zM213 0q18 0 30.5 12.5T256 43v341q0 18-12.5 30.5T213 427H43q-18 0-30.5-12.5T0 384V43q0-18 12.5-30.5T43 0zm0 341V85H43v256z"></svg:path>`,
})
export class ZmdiSmartphoneSettingIcon {
  readonly viewBox = input("0 0 256 512")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSmartphoneSetupIcon],svg[zmdi-smartphone-setup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m189 251l23 19q4 4 2 6l-21 37q-2 2-7 2l-27-11q-13 9-19 11l-5 27q-4 5-6 5H86q-2 0-3.5-1.5T82 342l-4-27q-7-2-20-11l-29 9q-3 2-7-3L1 274q0-4 2-8l23-17v-22L3 210q-4-4-2-6l21-37q2-2 7-2l27 11q13-9 20-11l4-27q4-5 6-5h43q6 0 6 5l5 27q6 2 19 11l27-9q3-2 7 3l21 36q0 4-2 6l-23 17zm-81.5 32q17.5 0 30-12.5T150 240t-12.5-30.5t-30-12.5t-30 12.5T65 240t12.5 30.5t30 12.5M342 5q18 0 30.5 12.5T385 48v384q0 18-12.5 30.5T342 475H129q-18 0-30.5-12.5T86 432v-64h43v43h213V69H129v43H86V48q0-18 12.5-30.5T129 5z"></svg:path>`,
})
export class ZmdiSmartphoneSetupIcon {
  readonly viewBox = input("0 0 392 480")
  readonly width = input("0.82em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSortAmountAscIcon],svg[zmdi-sort-amount-asc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 64h128v43H0zm0 256v-43h384v43zm0-149h256v42H0z"></svg:path>`,
})
export class ZmdiSortAmountAscIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSortAmountDescIcon],svg[zmdi-sort-amount-desc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 320v-43h128v43zM0 64h384v43H0zm0 149v-42h256v42z"></svg:path>`,
})
export class ZmdiSortAmountDescIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSortAscIcon],svg[zmdi-sort-asc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M282 76H135l74-73zM135 420h147l-73 73zM70 283h81l-41-111zm23-158h35l93 246h-38l-20-53H57l-19 53H0zm192 212h132v34H233v-28l128-183H234v-35h179v27z"></svg:path>`,
})
export class ZmdiSortAscIcon {
  readonly viewBox = input("0 0 424 496")
  readonly width = input("0.86em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSortDescIcon],svg[zmdi-sort-desc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M282 76H135l74-73zM135 420h147l-73 73zm131-137h81l-40-111zm24-158h34l93 246h-38l-19-53H254l-20 53h-38zM52 337h132v34H0v-28l128-183H1v-35h179v27z"></svg:path>`,
})
export class ZmdiSortDescIcon {
  readonly viewBox = input("0 0 424 496")
  readonly width = input("0.86em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSoundcloudIcon],svg[zmdi-soundcloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 260H0v-51h9zm21 17h-9v-81h9zm17 4h-9v-94h9zm17 4h-9v-94h9zm21 0h-8V162h8zm17 0h-8V145h8zm22 0h-9V136h9zm17 0h-9V132h9zm21 0h-8V136h8zm17 0h-8V140h8zm17 0h-8V123h8zm22 0h-9V110h9zm156-1H228q-6 0-6-6V111q0-4 5-6q17-6 34-6q36 0 62.5 24.5T354 183q9-4 20-4q22 0 37.5 15.5T427 232t-15.5 37t-37.5 15"></svg:path>`,
})
export class ZmdiSoundcloudIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSpaceBarIcon],svg[zmdi-space-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 128h42v128H0V128h43v85h256z"></svg:path>`,
})
export class ZmdiSpaceBarIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSpeakerIcon],svg[zmdi-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 3q18 0 30.5 12.5T299 45v342q0 17-12.5 29.5T256 429H43q-18 0-30.5-12.5T0 387V45q0-17 12.5-29.5T43 3zM149.5 45q-17.5 0-30 12.5T107 88t12.5 30.5t30 12.5t30-12.5T192 88t-12.5-30.5t-30-12.5m-.5 342q44 0 75.5-31.5T256 280t-31.5-75.5T149 173t-75 31.5T43 280t31 75.5t75 31.5m.5-171q26.5 0 45 18.5T213 280t-18.5 45.5t-45 18.5t-45.5-18.5T85 280t19-45.5t45.5-18.5"></svg:path>`,
})
export class ZmdiSpeakerIcon {
  readonly viewBox = input("0 0 304 432")
  readonly width = input("0.71em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSpellcheckIcon],svg[zmdi-spellcheck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213 277l-24-64H68l-23 64H0L109 0h40l109 277zM85 171h88L129 53zm323 12l30 30l-202 203l-109-109l30-30l79 79z"></svg:path>`,
})
export class ZmdiSpellcheckIcon {
  readonly viewBox = input("0 0 440 416")
  readonly width = input("1.06em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSpinnerIcon],svg[zmdi-spinner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212.5 7Q231 7 244 20.5T257 52t-13 31.5T212.5 97T181 83.5T168 52t13-31.5T212.5 7M337 54q22 0 37.5 16t15.5 37.5t-15.5 37.5t-37.5 16t-38-16t-16-37.5T299 70t38-16M91.5 64q16.5 0 28 12t11.5 28.5t-11.5 28.5t-28 12T63 133t-12-28.5T63 76t28.5-12M34 198q14 0 24 10t10 24t-10 24t-24 10t-24-10t-10-24t10-24t24-10m355 0q14 0 24 10t10 24t-10 24t-24 10t-24-10t-10-24t10-24t24-10M85 325q14 0 24 10t10 24t-10 24t-24 10t-24-10t-10-24t10-24t24-10m255 0q14 0 24 10t10 24t-10 24t-24 10t-24-10t-10-24t10-24t24-10m-128 47q14 0 24.5 10.5T247 407t-10.5 24t-24.5 10t-24-10t-10-24t10-24.5t24-10.5"></svg:path>`,
})
export class ZmdiSpinnerIcon {
  readonly viewBox = input("0 0 424 448")
  readonly width = input("0.95em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSquareDownIcon],svg[zmdi-square-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m235 288l-86-85h64V11h43v192h64zM427 11q17 0 29.5 12.5T469 53v299q0 18-12.5 30.5T427 395H43q-18 0-30.5-12.5T0 352V53q0-17 12.5-29.5T43 11h128v42H43v299h384V53H299V11z"></svg:path>`,
})
export class ZmdiSquareDownIcon {
  readonly viewBox = input("0 0 472 400")
  readonly width = input("1.18em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSquareOIcon],svg[zmdi-square-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 43H43v298h298zm0-43q18 0 30.5 12.5T384 43v298q0 18-12.5 30.5T341 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0z"></svg:path>`,
})
export class ZmdiSquareOIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSquareRightIcon],svg[zmdi-square-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 0q17 0 29.5 12.5T469 43v299q0 17-12.5 29.5T427 384H43q-18 0-30.5-12.5T0 342v-86h43v86h384V42H43v86H0V43q0-18 12.5-30.5T43 0zM213 277v-64H0v-42h213v-64l86 85z"></svg:path>`,
})
export class ZmdiSquareRightIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiStackoverflowIcon],svg[zmdi-stackoverflow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M245 395V250h34v179H0V251l32 1l-1 143zM52 335h167v35H52zm5-63l168 16l-4 36l-168-16zm15-73l163 46l-10 35l-163-46zm40-82l144 87l-19 32l-144-87zm150 81L164 61l30-21l98 137zM272 9l36-6l28 166l-36 6z"></svg:path>`,
})
export class ZmdiStackoverflowIcon {
  readonly viewBox = input("0 0 336 432")
  readonly width = input("0.78em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiStarIcon],svg[zmdi-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213 328L81 408l35-150L0 157l153-13L213 3l60 141l154 13l-117 101l35 150z"></svg:path>`,
})
export class ZmdiStarIcon {
  readonly viewBox = input("0 0 432 408")
  readonly width = input("1.06em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiStarCircleIcon],svg[zmdi-star-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3M304 344l-24-103l79-69l-105-9l-41-96l-41 97l-105 8l80 69l-24 103l90-54z"></svg:path>`,
})
export class ZmdiStarCircleIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiStarHalfIcon],svg[zmdi-star-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 160L310 261l35 150l-132-80l-132 80l35-150L0 160l153-13L213 5l60 142zM213 291l81 49l-22-91l71-62l-93-8l-37-86z"></svg:path>`,
})
export class ZmdiStarHalfIcon {
  readonly viewBox = input("0 0 432 416")
  readonly width = input("1.04em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiStarOutlineIcon],svg[zmdi-star-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 157L310 258l35 150l-132-80l-132 80l35-150L0 157l153-13L213 3l60 141zM213 289l81 48l-22-91l71-62l-93-8l-37-86l-36 86l-93 8l70 62l-21 91z"></svg:path>`,
})
export class ZmdiStarOutlineIcon {
  readonly viewBox = input("0 0 432 408")
  readonly width = input("1.06em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSteamIcon],svg[zmdi-steam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M372 119q0 26-18 44.5T310 182t-44.5-18.5T247 119t18.5-44.5T310 56t44 18.5t18 44.5M0 319V209l65 26q20-12 45-12h9l73-105q0-48 34.5-82T309 2q49 0 83.5 34.5t34.5 83t-34.5 83T309 237l-112 82q-3 34-28 56.5T110 398q-32 0-56-19.5T24 329zM309.5 40Q277 40 254 63.5t-23 56t23 55.5t55.5 23t55.5-23t23-55.5t-23-56T309.5 40M110 246q-7 0-14 2l27 10q19 8 27.5 27.5t.5 39.5t-27.5 28t-39.5 1q-6-3-16.5-7.5T53 341q18 34 57 34q26 0 45-19t19-45.5t-19-45.5t-45-19"></svg:path>`,
})
export class ZmdiSteamIcon {
  readonly viewBox = input("0 0 432 400")
  readonly width = input("1.08em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSteamSquareIcon],svg[zmdi-steam-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M355 153q0-23-16.5-39t-39-16t-39 16t-16.5 39t16.5 39t39 16t39-16t16.5-39M181 321q0 24-17 40t-40 16q-16 0-29.5-8T74 347q15 6 28 12q17 6 34-1t25-25q6-17-1-34t-25-24l-23-9q6-2 12-2q23 0 40 16.5t17 40.5M439 87v274q0 34-24 58t-58 24H82q-34 0-58-24T0 361v-44l49 20q6 26 27 43.5t48 17.5q30 0 52-20t25-50l98-72q43 0 73-30t30-73q0-42-30-72.5T299 50q-42 0-72 30t-31 72l-64 92h-8q-21 0-39 11L0 221V87q0-34 24-58T82 5h275q34 0 58 24t24 58m-71 66q0 29-20 49t-48.5 20t-49-20t-20.5-48.5t20.5-49T299 84q29 0 49 20.5t20 48.5"></svg:path>`,
})
export class ZmdiSteamSquareIcon {
  readonly viewBox = input("0 0 440 448")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiStopIcon],svg[zmdi-stop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 64h256v256H0z"></svg:path>`,
})
export class ZmdiStopIcon {
  readonly viewBox = input("0 0 256 384")
  readonly width = input("0.67em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiStorageIcon],svg[zmdi-storage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 363v-86h427v86zm43-64v42h42v-42zM0 21h427v86H0zm85 64V43H43v42zM0 235v-86h427v86zm43-64v42h42v-42z"></svg:path>`,
})
export class ZmdiStorageIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiStoreIcon],svg[zmdi-store-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M363 21v43H21V21zm21 214h-21v128h-43V235h-85v128H21V235H0v-43L21 85h342l21 107zm-192 85v-85H64v85z"></svg:path>`,
})
export class ZmdiStoreIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiStore24Icon],svg[zmdi-store-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M363 85h64v278H256v-86h-85v86H0V85h64V21h299zm-171 64V85h-64v22h43v21h-43v64h64v-21h-43v-22zm107 43V85h-22v43h-21V85h-21v64h42v43z"></svg:path>`,
})
export class ZmdiStore24Icon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSubwayIcon],svg[zmdi-subway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170.5 3q39.5 0 67 3t53 11.5t38 26T341 88v203q0 31-21.5 52.5T267 365l32 32v11H43v-11l32-32q-31 0-53-21.5T0 291V88q0-27 12.5-44.5t38-26t53-11.5t67-3m-96 320q13.5 0 23-9.5t9.5-23t-9.5-22.5t-23-9t-22.5 9t-9 22.5t9 23t22.5 9.5M149 195V88H43v107zm117.5 128q13.5 0 23-9.5t9.5-23t-9.5-22.5t-23-9t-22.5 9t-9 22.5t9 23t22.5 9.5M299 195V88H192v107z"></svg:path>`,
})
export class ZmdiSubwayIcon {
  readonly viewBox = input("0 0 344 408")
  readonly width = input("0.85em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSunIcon],svg[zmdi-sun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m123 95l-30 30l-39-38l30-30zM64 216v43H0v-43zM256 4v63h-43V4zm159 83l-38 38l-30-30l38-38zm-69 292l30-29l39 38l-30 30zm59-163h64v43h-64zM235 109q53 0 90.5 37.5T363 237t-37.5 90.5T235 365t-90.5-37.5T107 237t37.5-90.5T235 109m-22 362v-63h43v63zM54 388l39-39l30 30l-39 39z"></svg:path>`,
})
export class ZmdiSunIcon {
  readonly viewBox = input("0 0 472 472")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSurroundSoundIcon],svg[zmdi-surround-sound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 21q18 0 30.5 12.5T427 64v256q0 18-12.5 30.5T384 363H43q-18 0-30.5-12.5T0 320V64q0-18 12.5-30.5T43 21zM123 282q-38-37-38-90t38-91L93 71q-50 50-50 121t50 121zm90.5-5q35.5 0 60.5-25t25-60t-25-60t-60.5-25t-60.5 25t-25 60t25 60t60.5 25M334 313q50-50 50-121T334 71l-30 31q37 37 37 90t-37 91zM213.5 149q17.5 0 30 12.5T256 192t-12.5 30.5t-30 12.5t-30-12.5T171 192t12.5-30.5t30-12.5"></svg:path>`,
})
export class ZmdiSurroundSoundIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSwapIcon],svg[zmdi-swap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85 171v64h150v42H85v64L0 256zm299-43l-85 85v-64H149v-42h150V43z"></svg:path>`,
})
export class ZmdiSwapIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSwapAltIcon],svg[zmdi-swap-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m341 21l86 86h-64v149q0 35-25 60t-60.5 25t-60.5-25t-25-60V107q0-18-12.5-30.5t-30-12.5t-30 12.5T107 107v149h64l-86 85l-85-85h64V107q0-36 25-61t60.5-25T210 46t25 61v149q0 18 12.5 30.5t30 12.5t30-12.5T320 256V107h-64z"></svg:path>`,
})
export class ZmdiSwapAltIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSwapVerticalIcon],svg[zmdi-swap-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235 299h64l-86 85l-85-85h64V149h43zM85 0l86 85h-64v150H64V85H0z"></svg:path>`,
})
export class ZmdiSwapVerticalIcon {
  readonly viewBox = input("0 0 304 384")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiSwapVerticalCircleIcon],svg[zmdi-swap-vertical-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3M96 152h53v85h43v-85h53l-74-75zm235 128h-54v-85h-42v85h-54l75 75z"></svg:path>`,
})
export class ZmdiSwapVerticalCircleIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiTabIcon],svg[zmdi-tab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 0q17 0 29.5 12.5T469 43v298q0 18-12.5 30.5T427 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zm0 341V128H256V43H43v298z"></svg:path>`,
})
export class ZmdiTabIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiTabUnselectedIcon],svg[zmdi-tab-unselected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 128V85h43v43zm0 85v-42h43v42zM0 43q0-18 12.5-30.5T43 0v43zm171 341v-43h42v43zM0 299v-43h43v43zm43 85q-18 0-30.5-12.5T0 341h43zM427 0q17 0 29.5 12.5T469 43v85H256V0zm0 299v-43h42v43zM171 43V0h42v43zM85 384v-43h43v43zm0-341V0h43v43zm342 341v-43h42q0 18-12.5 30.5T427 384m0-171v-42h42v42zM256 384v-43h43v43zm85 0v-43h43v43z"></svg:path>`,
})
export class ZmdiTabUnselectedIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiTabletIcon],svg[zmdi-tablet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 21q17 0 29.5 12.5T469 64v256q0 18-12.5 30.5T427 363H43q-18 0-30.5-12.5T0 320V64q0-18 12.5-30.5T43 21zm-43 299V64H85v256z"></svg:path>`,
})
export class ZmdiTabletIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiTabletAndroidIcon],svg[zmdi-tablet-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 0q27 0 45.5 18.5T384 64v384q0 27-18.5 45.5T320 512H64q-27 0-45.5-18.5T0 448V64q0-27 18.5-45.5T64 0zm-85 469v-21h-86v21zm112-64V64H37v341z"></svg:path>`,
})
export class ZmdiTabletAndroidIcon {
  readonly viewBox = input("0 0 384 512")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiTabletMacIcon],svg[zmdi-tablet-mac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M352 0q22 0 37.5 15.5T405 53v406q0 22-15.5 37.5T352 512H53q-22 0-37.5-15.5T0 459V53q0-22 15.5-37.5T53 0zM202.5 491q13.5 0 23-9.5t9.5-23t-9.5-22.5t-23-9t-22.5 9t-9 22.5t9 23t22.5 9.5M363 405V64H43v341z"></svg:path>`,
})
export class ZmdiTabletMacIcon {
  readonly viewBox = input("0 0 408 512")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiTagIcon],svg[zmdi-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469 0q18 0 30.5 12.5T512 43v298q0 18-12.5 30.5T469 384H149q-21 0-34-19L0 192L115 19q13-19 34-19z"></svg:path>`,
})
export class ZmdiTagIcon {
  readonly viewBox = input("0 0 512 384")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiTagCloseIcon],svg[zmdi-tag-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469 0q18 0 30.5 12.5T512 43v298q0 18-12.5 30.5T469 384H149q-21 0-34-19L0 192L115 19q13-19 34-19zm-64 269l-76-77l76-77l-30-30l-76 77l-77-77l-30 30l77 77l-77 77l30 30l77-77l76 77z"></svg:path>`,
})
export class ZmdiTagCloseIcon {
  readonly viewBox = input("0 0 512 384")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiTagMoreIcon],svg[zmdi-tag-more-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M469 0q18 0 30.5 12.5T512 43v298q0 18-12.5 30.5T469 384H151q-23 0-36-19L0 192L115 19q13-19 34-19zM192 224q13 0 22.5-9.5T224 192t-9.5-22.5T192 160t-22.5 9.5T160 192t9.5 22.5T192 224m106.5 0q13.5 0 23-9.5T331 192t-9.5-22.5t-23-9.5t-22.5 9.5t-9 22.5t9 22.5t22.5 9.5m107 0q13.5 0 22.5-9.5t9-22.5t-9-22.5t-22.5-9.5t-23 9.5T373 192t9.5 22.5t23 9.5"></svg:path>`,
})
export class ZmdiTagMoreIcon {
  readonly viewBox = input("0 0 512 384")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiTapAndPlayIcon],svg[zmdi-tap-and-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 325q62 0 105.5 44T149 475h-42q0-44-31.5-75.5T0 368zm0 86q27 0 45.5 18.5T64 475H0zm0-171q97 0 166 68.5T235 475h-43q0-80-56-136T0 283zM320 6q18 0 30.5 12T363 48v363q0 17-12.5 29.5T320 453h-44q-4-45-21-85h65V91H107v128q-20-8-43-14V48q0-18 12.5-30.5T107 5z"></svg:path>`,
})
export class ZmdiTapAndPlayIcon {
  readonly viewBox = input("0 0 368 480")
  readonly width = input("0.77em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiTextFormatIcon],svg[zmdi-text-format-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 299h299v42H0zm96-90l-19 47H32L133 21h32l102 235h-45l-19-47zm53-145l-40 107h80z"></svg:path>`,
})
export class ZmdiTextFormatIcon {
  readonly viewBox = input("0 0 304 384")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiTextureIcon],svg[zmdi-texture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M352 2q24 6 31 30L32 382q-11-3-19-11T2 352zM189 0h61L0 250v-61zM43 0h42L0 85V43q0-18 12.5-30.5T43 0m298 384h-42l85-85v42q0 18-13 30q-12 13-30 13m-207 0l250-250v61L195 384z"></svg:path>`,
})
export class ZmdiTextureIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiThumbDownIcon],svg[zmdi-thumb-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 0q17 0 29.5 12.5T341 43v213q0 18-12 30L188 427l-22-23q-10-9-10-22l1-7l20-98H43q-18 0-30.5-12.5T0 235v-43q0-8 3-16L67 26Q78 0 107 0zm85 0h85v256h-85z"></svg:path>`,
})
export class ZmdiThumbDownIcon {
  readonly viewBox = input("0 0 472 432")
  readonly width = input("1.1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiThumbUpIcon],svg[zmdi-thumb-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 432V176h85v256zm469-235v43q0 8-3 16l-64 150q-11 26-39 26H171q-18 0-30.5-12.5T128 389V176q0-18 13-30L281 5l23 23q9 9 9 22l-1 7l-20 98h135q17 0 29.5 12.5T469 197"></svg:path>`,
})
export class ZmdiThumbUpIcon {
  readonly viewBox = input("0 0 472 432")
  readonly width = input("1.1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiThumbUpDownIcon],svg[zmdi-thumb-up-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 128v27q0 6-2 11l-49 113q-8 20-29 20H32q-13 0-22.5-9.5T0 267V128q0-13 9-23L115 0l17 17q7 7 7 17l-1 5l-14 68h111q8 0 14.5 6t6.5 15m224 85q13 0 22.5 9.5T512 245v139q0 13-9 23L397 512l-17-17q-7-7-7-17l1-5l14-68H277q-8 0-14.5-6t-6.5-15v-27q0-6 2-11l49-113q8-20 29-20z"></svg:path>`,
})
export class ZmdiThumbUpDownIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiTicketStarIcon],svg[zmdi-ticket-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 192q0 18 12.5 30.5T427 235v85q0 18-12.5 30.5T384 363H43q-18 0-30.5-12.5T0 320v-85q18 0 30.5-12.5T43 192t-12.5-30.5T0 149V64q0-18 12.5-30.5T43 21h341q18 0 30.5 12.5T427 64v85q-18 0-30.5 12.5T384 192m-94 102l-24-87l71-58l-91-5l-33-84l-33 84l-90 5l70 58l-23 87l76-49z"></svg:path>`,
})
export class ZmdiTicketStarIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiTimeIcon],svg[zmdi-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3m0 384q70.5 0 120.5-50t50-121t-50-121t-120.5-50T93 95T43 216t50 121t120.5 50M224 109v112l96 57l-16 27l-112-68V109z"></svg:path>`,
})
export class ZmdiTimeIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiTimeCountdownIcon],svg[zmdi-time-countdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M171 298.5q0-8.5 6-15t15-6.5t15 6.5t6 15t-6 15t-15 6.5t-15-6.5t-6-15M171 0h21q80 0 136 56t56 136t-56 136t-136 56t-136-56T0 192q0-46 20.5-86.5T77 39v-1l145 145l-30 30L76 98q-33 41-33 94q0 62 43.5 105.5T192 341t105.5-43.5T341 192q0-56-36.5-98T213 44v41h-42zm149 192q0 9-6.5 15t-15 6t-15-6t-6.5-15t6.5-15t15-6t15 6t6.5 15m-256 0q0-9 6.5-15t15-6t15 6t6.5 15t-6.5 15t-15 6t-15-6t-6.5-15"></svg:path>`,
})
export class ZmdiTimeCountdownIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiTimeIntervalIcon],svg[zmdi-time-interval-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M303.5 125.5Q341 163 341 216t-37.5 90.5T213 344t-90-38l90-90V88q53 0 90.5 37.5M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3m0 384q70.5 0 120.5-50t50-121t-50-121t-120.5-50T93 95T43 216t50 121t120.5 50"></svg:path>`,
})
export class ZmdiTimeIntervalIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiTimeRestoreIcon],svg[zmdi-time-restore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 0q80 0 136 56t56 136t-56 136t-136 56q-79 0-136-56l31-31q43 44 105 44t105.5-43.5T405 192T361.5 86.5T256 43T150.5 86.5T107 192h64l-87 86l-1-3l-83-83h64q0-80 56-136T256 0m-21 107h32v90l74 45l-15 26l-91-55z"></svg:path>`,
})
export class ZmdiTimeRestoreIcon {
  readonly viewBox = input("0 0 448 384")
  readonly width = input("1.17em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiTimeRestoreSettingIcon],svg[zmdi-time-restore-setting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 192q0 18-12.5 30.5T256 235t-30.5-12.5T213 192t12.5-30.5T256 149t30.5 12.5T299 192M256 0q80 0 136 56t56 136t-56 136t-136 56q-65 0-117-40l30-30q40 27 87 27q62 0 105.5-43.5T405 192T361.5 86.5T256 43T150.5 86.5T107 192h64l-86 85l-85-85h64q0-80 56-136T256 0"></svg:path>`,
})
export class ZmdiTimeRestoreSettingIcon {
  readonly viewBox = input("0 0 448 384")
  readonly width = input("1.17em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiTimerIcon],svg[zmdi-timer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 5v43H128V5zm-85 278V155h42v128zm171-141q42 52 42 119q0 80-56 136t-136 56t-136-56T0 261.5t56-136T192 69q67 0 120 43l30-31q16 13 30 30zM192 411q62 0 105.5-44T341 261t-43.5-105.5T192 112T86.5 155.5T43 261t43.5 106T192 411"></svg:path>`,
})
export class ZmdiTimerIcon {
  readonly viewBox = input("0 0 384 456")
  readonly width = input("0.85em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiTimerOffIcon],svg[zmdi-timer-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m369 81l30 30l-30 31q42 52 42 119q0 58-32 106l-31-31q20-35 20-75q0-62-43.5-105.5T219 112q-40 0-75 20l-31-31q48-32 106-32q67 0 120 42zM283 5v43H155V5zm-86 180v-30h43v73zM27 69l214 214l164 165l-27 27l-53-54q-48 32-106 32q-80 0-136-56T27 261q0-58 32-106L0 96zm192 342q40 0 75-21L90 186q-21 35-21 75q0 62 44 106t106 44"></svg:path>`,
})
export class ZmdiTimerOffIcon {
  readonly viewBox = input("0 0 416 480")
  readonly width = input("0.87em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiTollIcon],svg[zmdi-toll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M298.5 21Q369 21 419 71t50 121t-50 121t-120.5 50T178 313t-50-121t50-121t120.5-50m.5 299q53 0 90.5-37.5T427 192t-37.5-90.5T299 64t-90.5 37.5T171 192t37.5 90.5T299 320M43 192q0 41 23.5 74t61.5 47v44q-56-14-92-60T0 192T36 87t92-60v44q-38 14-61.5 47T43 192"></svg:path>`,
})
export class ZmdiTollIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiTonalityIcon],svg[zmdi-tonality-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3M192 385V47q-64 8-106.5 56T43 216t43 113t106 56m43-338v20h61q-29-16-61-20m0 62v22h126q-7-12-15-22zm0 64v22h148q-2-9-5-22zm0 212q32-4 61-20h-61zm111-62q8-10 15-22H235v22zm32-64q3-13 5-22H235v22z"></svg:path>`,
})
export class ZmdiTonalityIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiToysIcon],svg[zmdi-toys-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M235 240q0-48 34.5-82.5T352 123t82.5 34.5T469 240zm0 0q0 48-35 82.5T117 357t-82.5-34.5T0 240zm0 0q-48 0-83-34.5T117 123t35-83t83-35zm0 0q48 0 82.5 34.5T352 357t-34.5 83t-82.5 35z"></svg:path>`,
})
export class ZmdiToysIcon {
  readonly viewBox = input("0 0 472 480")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiTrafficIcon],svg[zmdi-traffic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 149q0 30-18 52.5T277 232v24h64q0 29-18 52t-46 30v25q0 8-6 14.5t-15 6.5H85q-8 0-14.5-6.5T64 363v-25q-28-7-46-30T0 256h64v-24q-28-8-46-30.5T0 149h64v-24q-28-7-46-30T0 43h64V21q0-8 6.5-14.5T85 0h171q9 0 15 6.5t6 14.5v22h64q0 29-18 52t-46 30v24zM170.5 341q17.5 0 30-12.5t12.5-30t-12.5-30t-30-12.5t-30 12.5t-12.5 30t12.5 30t30 12.5m0-106q17.5 0 30-12.5T213 192t-12.5-30.5t-30-12.5t-30 12.5T128 192t12.5 30.5t30 12.5m0-107q17.5 0 30-12.5t12.5-30t-12.5-30t-30-12.5t-30 12.5t-12.5 30t12.5 30t30 12.5"></svg:path>`,
})
export class ZmdiTrafficIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiTransformIcon],svg[zmdi-transform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 368h-86v43h43l-64 64l-64-64h43v-43H128q-18 0-30.5-12.5T85 325V155H0v-43h85V69H43l64-64l64 64h-43v256h299zM171 155v-43h128q17 0 29.5 12.5T341 155v128h-42V155z"></svg:path>`,
})
export class ZmdiTransformIcon {
  readonly viewBox = input("0 0 432 480")
  readonly width = input("0.9em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiTranslateIcon],svg[zmdi-translate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m253 281l-16 44l-66-66L64 365l-30-30l108-107q-40-44-63-97h42q20 39 50 71q45-50 67-114H0V45h149V3h43v42h149v43h-62q-24 78-79 139l-1 1zm120-108l96 256h-42l-24-64H301l-24 64h-42l96-256zm-56 150h70l-35-93z"></svg:path>`,
})
export class ZmdiTranslateIcon {
  readonly viewBox = input("0 0 472 432")
  readonly width = input("1.1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiTrendingDownIcon],svg[zmdi-trending-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m299 320l49-49l-105-104l-85 85L0 94l30-30l128 128l85-85l135 134l49-49v128z"></svg:path>`,
})
export class ZmdiTrendingDownIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiTrendingFlatIcon],svg[zmdi-trending-flat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m405 192l-85 85v-64H0v-42h320v-64z"></svg:path>`,
})
export class ZmdiTrendingFlatIcon {
  readonly viewBox = input("0 0 408 384")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiTrendingUpIcon],svg[zmdi-trending-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M299 64h128v128l-49-49l-135 134l-85-85L30 320L0 290l158-158l85 85l105-104z"></svg:path>`,
})
export class ZmdiTrendingUpIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiTriangleDownIcon],svg[zmdi-triangle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213 306L350 87H77zm0 80L0 45h427z"></svg:path>`,
})
export class ZmdiTriangleDownIcon {
  readonly viewBox = input("0 0 432 392")
  readonly width = input("1.11em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiTriangleUpIcon],svg[zmdi-triangle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213 102L77 320h273zm0-81l214 342H0z"></svg:path>`,
})
export class ZmdiTriangleUpIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiTruckIcon],svg[zmdi-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m405 107l64 85v107h-42q0 26-19 45t-45.5 19t-45-19t-18.5-45H171q0 26-19 45t-45.5 19t-45-19T43 299H0V64q0-18 12.5-30.5T43 21h298v86zM106.5 331q13.5 0 23-9.5t9.5-23t-9.5-22.5t-23-9t-22.5 9t-9 22.5t9 23t22.5 9.5M395 139h-54v53h95zm-32.5 192q13.5 0 23-9.5t9.5-23t-9.5-22.5t-23-9t-22.5 9t-9 22.5t9 23t22.5 9.5"></svg:path>`,
})
export class ZmdiTruckIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiTumblrIcon],svg[zmdi-tumblr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 177v-60q25-8 43-23.5T72 57T87 3h61v108h102v66H148v110q0 37 4 47.5t15 16.5q14 9 33 9q32 0 65-21v67q-28 13-50.5 18t-48.5 5q-29 0-51.5-7T76 401t-22.5-29.5T47 327V178H0z"></svg:path>`,
})
export class ZmdiTumblrIcon {
  readonly viewBox = input("0 0 272 432")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiTuneIcon],svg[zmdi-tune-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 299h128v42H0zM0 43h213v42H0zm213 341h-42V256h42v43h171v42H213zM85 128h43v128H85v-43H0v-42h85zm299 85H171v-42h213zm-128-85V0h43v43h85v42h-85v43z"></svg:path>`,
})
export class ZmdiTuneIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiTurningSignIcon],svg[zmdi-turning-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M420 201q7 6 7 15t-7 15L228 423q-6 6-15 6t-15-6L6 231q-6-6-6-15t6-15L198 9q6-6 15-6t15 6zm-164 68l75-74l-75-75v53H149q-9 0-15 6.5t-6 15.5v85h43v-64h85z"></svg:path>`,
})
export class ZmdiTurningSignIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiTvIcon],svg[zmdi-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 0q17 0 29.5 12.5T469 43v256q0 17-12.5 29.5T427 341H320v43H149v-43H43q-18 0-30.5-12.5T0 299V43q0-18 12.5-30.5T43 0zm0 299V43H43v256z"></svg:path>`,
})
export class ZmdiTvIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiTvAltPlayIcon],svg[zmdi-tv-alt-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 88q17 0 29.5 12.5T469 131v256q0 17-12.5 29.5T427 429H43q-18 0-30.5-12.5T0 387V131q0-18 12.5-30.5T43 88h162l-71-70l15-15l86 85l85-85l15 15l-70 70zm0 299V131H43v256zM171 173l149 86l-149 85z"></svg:path>`,
})
export class ZmdiTvAltPlayIcon {
  readonly viewBox = input("0 0 472 432")
  readonly width = input("1.1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiTvListIcon],svg[zmdi-tv-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 0q17 0 29.5 12.5T469 43v256q0 17-12.5 29.5T427 341H320v43H149v-43H43q-18 0-30.5-12.5T0 299V43q0-18 12.5-30.5T43 0zm0 299V43H43v256zm-43-192v42H149v-42zm0 85v43H149v-43zm-256-85v42H85v-42zm0 85v43H85v-43z"></svg:path>`,
})
export class ZmdiTvListIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiTvPlayIcon],svg[zmdi-tv-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 0q17 0 29.5 12.5T469 43v256q0 17-12.5 29.5T427 341H320v43H149v-43H43q-18 0-30.5-12.5T0 299V43q0-18 12.5-30.5T43 0zm0 299V43H43v256zM320 171l-149 85V85z"></svg:path>`,
})
export class ZmdiTvPlayIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiTwitchIcon],svg[zmdi-twitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M296 374h-83l-56 55h-55v-55H0V77L28 3h379v259zm74-130V40H65v269h83v55l56-55h102zM269 114h37v111h-37zM167 225V114h37v111z"></svg:path>`,
})
export class ZmdiTwitchIcon {
  readonly viewBox = input("0 0 408 432")
  readonly width = input("0.95em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiTwitterIcon],svg[zmdi-twitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M383 105v11q0 45-16.5 88.5t-47 79.5t-79 58.5T134 365q-73 0-134-39q10 1 21 1q61 0 109-37q-29-1-51.5-18T48 229q8 2 16 2q12 0 23-4q-30-6-50-30t-20-55v-1q19 10 40 11q-39-27-39-73q0-24 12-44q33 40 79.5 64T210 126q-2-10-2-20q0-36 25.5-61.5T295 19q38 0 64 27q30-6 56-21q-10 31-39 48q27-3 51-13q-18 26-44 45"></svg:path>`,
})
export class ZmdiTwitterIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiTwitterBoxIcon],svg[zmdi-twitter-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M335 159q22-18 28-30q-13 6-31 9q18-13 24-32q-20 11-37 14q-12-14-31-16.5t-35.5 5t-26.5 25t-5 38.5q-67-4-118-59q-11 20-4.5 43.5T120 189q-11-1-24-7q1 43 44 57q-12 3-24 1q12 36 53 40q-15 13-39 19.5T85 303q45 28 92 26q70-3 113.5-49.5T335 159M384 3q18 0 30.5 12.5T427 45v342q0 17-12.5 29.5T384 429H43q-18 0-30.5-12.5T0 387V45q0-17 12.5-29.5T43 3z"></svg:path>`,
})
export class ZmdiTwitterBoxIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiUndoIcon],svg[zmdi-undo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M224 107q73 0 131.5 43T437 261l-51 16q-17-51-61.5-84T224 160q-61 0-109 40l77 77H0V85l77 77q64-55 147-55"></svg:path>`,
})
export class ZmdiUndoIcon {
  readonly viewBox = input("0 0 440 384")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiUnfoldLessIcon],svg[zmdi-unfold-less-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 333l98-98l98 98l-30 30l-68-68l-68 68zM196 51l-98 98L0 51l30-30l68 68l68-68z"></svg:path>`,
})
export class ZmdiUnfoldLessIcon {
  readonly viewBox = input("0 0 200 384")
  readonly width = input("0.53em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiUnfoldMoreIcon],svg[zmdi-unfold-more-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m98 60l-68 68L0 98L98 0l98 98l-30 30zm0 264l68-68l30 30l-98 98l-98-98l30-30z"></svg:path>`,
})
export class ZmdiUnfoldMoreIcon {
  readonly viewBox = input("0 0 200 384")
  readonly width = input("0.53em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiUngroupIcon],svg[zmdi-ungroup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3h85v21h150V3h85v85h-21v64h42v-21h86v85h-22v128h22v85h-86v-21H213v21h-85v-85h21v-43H85v22H0v-86h21V88H0zm341 213v-21h-42v42h21v86h-85v-22h-43v43h21v21h128v-21h22V216zM235 88V67H85v21H64v149h21v22h64v-43h-21v-85h85v21h43V88zm-22 128h-21v43h43v-22h21v-42h-43z"></svg:path>`,
})
export class ZmdiUngroupIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiUploadIcon],svg[zmdi-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 21h299v43H0zm0 214L149 85l150 150h-86v128H85V235z"></svg:path>`,
})
export class ZmdiUploadIcon {
  readonly viewBox = input("0 0 304 384")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiUsbIcon],svg[zmdi-usb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M218 133h85v86h-21v42q0 18-12.5 30.5T239 304h-64v65q26 13 26 42q0 19-14 33t-33.5 14t-33-14t-13.5-33q0-29 25-42v-65H68q-17 0-29.5-12.5T26 261v-44Q0 204 0 176q0-19 14-33t33-14t33 14t14 33q0 28-26 41v44h64V91H90l64-86l64 86h-43v170h64v-42h-21z"></svg:path>`,
})
export class ZmdiUsbIcon {
  readonly viewBox = input("0 0 304 464")
  readonly width = input("0.66em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiVibrationIcon],svg[zmdi-vibration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 256V128h43v128zm64 43V85h43v214zm405-171h43v128h-43zm-64 171V85h43v214zM352 0q13 0 22.5 9.5T384 32v320q0 13-9.5 22.5T352 384H160q-13 0-22.5-9.5T128 352V32q0-13 9.5-22.5T160 0zm-11 341V43H171v298z"></svg:path>`,
})
export class ZmdiVibrationIcon {
  readonly viewBox = input("0 0 512 384")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiVideocamIcon],svg[zmdi-videocam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m299 160l85-85v234l-85-85v75q0 8-6.5 14.5T277 320H21q-8 0-14.5-6.5T0 299V85q0-8 6.5-14.5T21 64h256q9 0 15.5 6.5T299 85z"></svg:path>`,
})
export class ZmdiVideocamIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiVideocamOffIcon],svg[zmdi-videocam-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M405 99v228L167 88h132q8 0 14.5 6.5T320 109v75zM27 3l378 378l-27 27l-68-68q-6 4-11 4H43q-9 0-15.5-6.5T21 323V109q0-8 6.5-14.5T43 88h15L0 30z"></svg:path>`,
})
export class ZmdiVideocamOffIcon {
  readonly viewBox = input("0 0 408 408")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiVideocamSwitchIcon],svg[zmdi-videocam-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m341 139l86-86v278l-86-86v75q0 9-6 15t-15 6H21q-8 0-14.5-6T0 320V64q0-9 6.5-15T21 43h299q9 0 15 6t6 15zM235 267l74-75l-74-75v54H107v-54l-75 75l75 75v-54h128z"></svg:path>`,
})
export class ZmdiVideocamSwitchIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiViewAgendaIcon],svg[zmdi-view-agenda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 213q9 0 15 6.5t6 15.5v128q0 8-6 14.5t-15 6.5H21q-8 0-14.5-6.5T0 363V235q0-9 6.5-15.5T21 213zm0-213q9 0 15 6.5t6 14.5v128q0 9-6 15.5t-15 6.5H21q-8 0-14.5-6.5T0 149V21q0-8 6.5-14.5T21 0z"></svg:path>`,
})
export class ZmdiViewAgendaIcon {
  readonly viewBox = input("0 0 408 384")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiViewArrayIcon],svg[zmdi-view-array-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 320V43h64v277zM299 43h64v277h-64zM85 320V43h192v277z"></svg:path>`,
})
export class ZmdiViewArrayIcon {
  readonly viewBox = input("0 0 368 384")
  readonly width = input("0.96em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiViewCarouselIcon],svg[zmdi-view-carousel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M107 341V21h213v320zM0 299V64h85v235zM341 64h86v235h-86z"></svg:path>`,
})
export class ZmdiViewCarouselIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiViewColumnIcon],svg[zmdi-view-column-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 320V43h107v277zM0 320V43h107v277zM256 43h107v277H256z"></svg:path>`,
})
export class ZmdiViewColumnIcon {
  readonly viewBox = input("0 0 368 384")
  readonly width = input("0.96em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiViewComfyIcon],svg[zmdi-view-comfy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 128V43h85v85zm0 107v-86h85v86zm107 0v-86h85v86zm106 0v-86h86v86zM107 128V43h85v85zm106-85h86v85h-86zm107 192v-86h85v86zM0 341v-85h85v85zm107 0v-85h85v85zm106 0v-85h86v85zm107 0v-85h85v85zm0-298h85v85h-85z"></svg:path>`,
})
export class ZmdiViewComfyIcon {
  readonly viewBox = input("0 0 408 384")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiViewCompactIcon],svg[zmdi-view-compact-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 341V192h128v149zm149 0V192h256v149zM0 43h405v128H0z"></svg:path>`,
})
export class ZmdiViewCompactIcon {
  readonly viewBox = input("0 0 408 384")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiViewDashboardIcon],svg[zmdi-view-dashboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 213V0h171v213zm0 171V256h171v128zm213 0V171h171v213zm0-384h171v128H213z"></svg:path>`,
})
export class ZmdiViewDashboardIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiViewDayIcon],svg[zmdi-view-day-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 384v-64h405v64zm384-277q9 0 15 6t6 15v128q0 9-6 15t-15 6H21q-8 0-14.5-6T0 256V128q0-9 6.5-15t14.5-6zM0 0h405v64H0z"></svg:path>`,
})
export class ZmdiViewDayIcon {
  readonly viewBox = input("0 0 408 384")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiViewHeadlineIcon],svg[zmdi-view-headline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 256v-43h341v43zm0 85v-42h341v42zm0-170v-43h341v43zM0 43h341v42H0z"></svg:path>`,
})
export class ZmdiViewHeadlineIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiViewListIcon],svg[zmdi-view-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 235v-86h85v86zm0 106v-85h85v85zm0-213V43h85v85zm107 107v-86h256v86zm0 106v-85h256v85zm0-298h256v85H107z"></svg:path>`,
})
export class ZmdiViewListIcon {
  readonly viewBox = input("0 0 368 384")
  readonly width = input("0.96em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiViewListAltIcon],svg[zmdi-view-list-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 213v-42h43v42zm0 86v-43h43v43zm0-171V85h43v43zm85 85v-42h299v42zm0 86v-43h299v43zm0-214h299v43H85z"></svg:path>`,
})
export class ZmdiViewListAltIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiViewModuleIcon],svg[zmdi-view-module-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 171V43h107v128zm0 149V192h107v128zm128 0V192h107v128zm128 0V192h107v128zM128 171V43h107v128zM256 43h107v128H256z"></svg:path>`,
})
export class ZmdiViewModuleIcon {
  readonly viewBox = input("0 0 368 384")
  readonly width = input("0.96em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiViewQuiltIcon],svg[zmdi-view-quilt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 320V192h107v128zM0 320V43h107v277zm256 0V192h107v128zM128 43h235v128H128z"></svg:path>`,
})
export class ZmdiViewQuiltIcon {
  readonly viewBox = input("0 0 368 384")
  readonly width = input("0.96em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiViewStreamIcon],svg[zmdi-view-stream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 320V192h363v128zM0 43h363v128H0z"></svg:path>`,
})
export class ZmdiViewStreamIcon {
  readonly viewBox = input("0 0 368 384")
  readonly width = input("0.96em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiViewSubtitlesIcon],svg[zmdi-view-subtitles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 21q18 0 30.5 12.5T427 64v256q0 18-12.5 30.5T384 363H43q-18 0-30.5-12.5T0 320V64q0-18 12.5-30.5T43 21zM43 192v43h85v-43zm213 128v-43H43v43zm128 0v-43h-85v43zm0-85v-43H171v43z"></svg:path>`,
})
export class ZmdiViewSubtitlesIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiViewTocIcon],svg[zmdi-view-toc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 128V85h299v43zm0 85v-42h299v42zm0 86v-43h299v43zm341 0v-43h43v43zm0-214h43v43h-43zm0 128v-42h43v42z"></svg:path>`,
})
export class ZmdiViewTocIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiViewWebIcon],svg[zmdi-view-web-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 21q18 0 30.5 12.5T427 64v256q0 18-12.5 30.5T384 363H43q-18 0-30.5-12.5T0 320V64q0-18 12.5-30.5T43 21zM277 320v-85H43v85zm0-107v-85H43v85zm107 107V128h-85v192z"></svg:path>`,
})
export class ZmdiViewWebIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiViewWeekIcon],svg[zmdi-view-week-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M85 43q9 0 15.5 6t6.5 15v256q0 9-6.5 15T85 341H21q-8 0-14.5-6T0 320V64q0-9 6.5-15T21 43zm299 0q9 0 15 6t6 15v256q0 9-6 15t-15 6h-64q-9 0-15-6t-6-15V64q0-9 6-15t15-6zm-149 0q8 0 14.5 6t6.5 15v256q0 9-6.5 15t-14.5 6h-64q-9 0-15.5-6t-6.5-15V64q0-9 6.5-15t15.5-6z"></svg:path>`,
})
export class ZmdiViewWeekIcon {
  readonly viewBox = input("0 0 408 384")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiVignetteIcon],svg[zmdi-vignette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M427 0q17 0 29.5 12.5T469 43v298q0 18-12.5 30.5T427 384H43q-18 0-30.5-12.5T0 341V43q0-18 12.5-30.5T43 0zM234.5 320q70.5 0 120.5-37.5t50-90.5t-50-90.5T234.5 64T114 101.5T64 192t50 90.5T234.5 320"></svg:path>`,
})
export class ZmdiVignetteIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiVimeoIcon],svg[zmdi-vimeo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M276 100q-15 0-32 7Q276 4 364 6q66 2 62 86q-2 63-87 172q-87 114-147 114q-37 0-63-70q-18-66-34-127q-19-69-41-69q-5 0-34 20L0 106q33-29 62-56q42-36 63-38q50-5 62 68q12 80 17 99q14 65 32 65q13 0 40-42.5t29-64.5q3-37-29-37"></svg:path>`,
})
export class ZmdiVimeoIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiVkIcon],svg[zmdi-vk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M548 85q7 18-43 84q-7 9-18 24q-23 28-26 37q-5 12 4 23q5 6 23 24h1v1q41 37 55 63l2 4l2 7.5v9.5l-7 7.5l-17 3.5l-73 2q-7 1-16.5-2t-14.5-6l-6-4q-9-6-20-18t-19.5-22t-17.5-16.5t-16-4.5q-1 0-2.5 1t-5 4.5t-6 8.5t-4.5 14.5t-2 22.5q0 4-1 7.5t-2 5.5l-1 1q-6 6-16 6h-32q-21 2-42.5-4T189 353.5t-29-19t-20-16.5l-7-7q-3-2-8-8t-20.5-26T74 234t-35-60.5T2 96q-2-5-2-8t1-5l1-1q4-6 16-6h79q3 0 6 1.5l5 2.5l1 1q5 3 7 9q6 14 13.5 29.5T141 143l4 8q9 17 16.5 29.5T175 200t12 11t10 4t8-1l1-1.5l3.5-6.5l4-13l2.5-23v-36q-1-11-3-20.5t-4-13.5l-1-3q-7-10-25-13q-3 0 2-7q5-5 11-8q15-8 68-7q23 0 39 4q5 1 9 3.5t6 7t3 9t1 13V114q-1 8-1 20v24q0 3-.5 12t-.5 14t1 11.5t3.5 11t6.5 6.5q2 1 4.5 1.5t7.5-3t11-10t15-19.5t19-30q17-30 31-65q1-2 2.5-4.5T425 79h1l1-1l4-1h6l82-1q11-1 18.5 1t8.5 5z"></svg:path>`,
})
export class ZmdiVkIcon {
  readonly viewBox = input("0 0 552 384")
  readonly width = input("1.44em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiVoicemailIcon],svg[zmdi-voicemail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M394.5 64q48.5 0 83 34.5t34.5 83t-34.5 83T395 299H117q-48 0-82.5-34.5T0 181.5t34.5-83t83-34.5t83 34.5T235 181q0 43-27 75h96q-27-32-27-75q0-48 34.5-82.5t83-34.5M117 256q31 0 53-22t22-53t-22-52.5t-53-21.5t-52.5 21.5T43 181t21.5 53t52.5 22m278 0q31 0 52.5-22t21.5-53t-21.5-52.5T395 107t-53 21.5t-22 52.5t22 53t53 22"></svg:path>`,
})
export class ZmdiVoicemailIcon {
  readonly viewBox = input("0 0 512 384")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiVolumeDownIcon],svg[zmdi-volume-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 192q0 28-14.5 51T235 278V106q24 12 38.5 35t14.5 51M0 128h85L192 21v342L85 256H0z"></svg:path>`,
})
export class ZmdiVolumeDownIcon {
  readonly viewBox = input("0 0 288 384")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiVolumeMuteIcon],svg[zmdi-volume-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 128h85L192 21v342L85 256H0z"></svg:path>`,
})
export class ZmdiVolumeMuteIcon {
  readonly viewBox = input("0 0 192 384")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiVolumeOffIcon],svg[zmdi-volume-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 192q0 6-1 13l-52-52v-47q24 12 38.5 35t14.5 51m53 0q0-50-30-89.5T235 49V5q64 15 106.5 67T384 192q0 47-22 89l-32-33q11-27 11-56M27 0l165 165l192 192l-27 27l-44-44q-35 29-78 39v-44q25-8 48-25l-91-91v144L85 256H0V128h101L0 27zm165 21v90l-45-45z"></svg:path>`,
})
export class ZmdiVolumeOffIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiVolumeUpIcon],svg[zmdi-volume-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 128h85L192 21v342L85 256H0zm288 64q0 28-14.5 51T235 278V106q24 12 38.5 35t14.5 51M235 5q64 15 106.5 67T384 192t-42.5 120T235 379v-44q46-14 76-53.5t30-89.5t-30-89.5T235 49z"></svg:path>`,
})
export class ZmdiVolumeUpIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiWalkIcon],svg[zmdi-walk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 85q-18 0-30.5-12.5t-12.5-30t12.5-30T160 0t30.5 12.5t12.5 30t-12.5 30T160 85m-79 73L21 459h45l39-171l44 43v128h43V299l-45-43l13-64q46 53 117 53v-42q-29 0-53.5-14.5T186 151l-22-34q-14-21-36-21q-3 0-8.5 1t-8.5 1L0 145v100h43v-72z"></svg:path>`,
})
export class ZmdiWalkIcon {
  readonly viewBox = input("0 0 280 464")
  readonly width = input("0.61em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiWallpaperIcon],svg[zmdi-wallpaper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43 45v150H0V45q0-17 12.5-29.5T43 3h149v42zm128 192l63 79l43-57l64 85H85zm149-95.5q0 13.5-9.5 22.5t-22.5 9t-22.5-9t-9.5-22.5t9.5-23T288 109t22.5 9.5t9.5 23M384 3q18 0 30.5 12.5T427 45v150h-43V45H235V3zm0 384V237h43v150q0 17-12.5 29.5T384 429H235v-42zM43 237v150h149v42H43q-18 0-30.5-12.5T0 387V237z"></svg:path>`,
})
export class ZmdiWallpaperIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiWashingMachineIcon],svg[zmdi-washing-machine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m110 319l121-121q25 25 25 60.5T231 319t-60.5 25t-60.5-25M299 3q17 0 29.5 12.5T341 45v342q0 17-12.5 29.5T299 429H43q-18 0-30.5-12.5T0 387V45q0-17 12.5-29.5T43 3zM128 45q-9 0-15 6.5t-6 15t6 15t15 6.5t15-6.5t6-15t-6-15t-15-6.5m-64 0q-9 0-15 6.5t-6 15t6 15T64 88t15-6.5t6-15t-6-15T64 45m107 342q53 0 90.5-37.5T299 259t-37.5-90.5T171 131t-90.5 37.5T43 259t37.5 90.5T171 387"></svg:path>`,
})
export class ZmdiWashingMachineIcon {
  readonly viewBox = input("0 0 344 432")
  readonly width = input("0.8em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiWatchIcon],svg[zmdi-watch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 256q0 40-17 75t-48 59l-20 122H85L65 390Q0 339 0 256t65-134L85 0h171l20 122q31 24 48 59t17 75m-298 0q0 53 37.5 90.5T171 384t90.5-37.5T299 256t-37.5-90.5T171 128t-90.5 37.5T43 256"></svg:path>`,
})
export class ZmdiWatchIcon {
  readonly viewBox = input("0 0 344 512")
  readonly width = input("0.68em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiWbAutoIcon],svg[zmdi-wb-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m146 206l25-78l24 78zM469 85h39l-44 192h-37l-32-130l-32 130h-38l-2-9q-21 43-62 69t-90 26q-71 0-121-50T0 192T50 71t121-50q81 0 133 64h16l26 135l32-135h34l32 135zM220 277h40L192 85h-43L81 277h41l15-42h68z"></svg:path>`,
})
export class ZmdiWbAutoIcon {
  readonly viewBox = input("0 0 512 384")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiWhatsappIcon],svg[zmdi-whatsapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M364.5 65Q427 127 427 214.5T364.5 364T214 426q-54 0-101-26L0 429l30-109Q2 271 2 214q0-87 62-149T214 3t150.5 62M214 390q73 0 125-51.5T391 214T339 89.5T214 38T89.5 89.5T38 214q0 51 27 94l4 6l-18 65l67-17l6 3q42 25 90 25m97-132q9 5 10 7q4 6-3 25q-3 8-15 15.5t-21 9.5q-18 2-33-2q-17-6-30-11q-8-4-15.5-8.5t-14.5-9t-13-9.5t-11.5-10t-10.5-10.5t-8.5-9.5t-7-8.5t-5.5-7t-3.5-5L128 222q-22-29-22-55q0-24 19-44q6-7 14-7q6 0 10 1q8 0 12 9q2 3 6 13l7 17.5l3 8.5q3 5 1 9q-3 7-5 9l-3 3l-3 3.5l-2 2.5q-6 6-3 11q13 22 30 37q13 11 43 26q7 3 11-1q12-15 17-21q4-6 12-3q6 3 36 17"></svg:path>`,
})
export class ZmdiWhatsappIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiWidgetsIcon],svg[zmdi-widgets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213 245h171v171H213zM0 416V245h171v171zM0 32h171v171H0zM291 4l121 121l-121 120l-120-120z"></svg:path>`,
})
export class ZmdiWidgetsIcon {
  readonly viewBox = input("0 0 416 416")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiWifiIcon],svg[zmdi-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m249 394l-1 1v-1L0 85Q113 0 248.5 0T497 85zM68 170q82-63 180.5-63T429 170L249 394l-1 1v-1z"></svg:path>`,
})
export class ZmdiWifiIcon {
  readonly viewBox = input("0 0 504 400")
  readonly width = input("1.26em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiWifiAltIcon],svg[zmdi-wifi-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 128q64-64 149.5-86.5t171 0T469 128l-42 43q-80-80-192.5-80T43 171zm171 171q26-27 63.5-27t64.5 27l-64 64zm-86-86q62-61 149.5-61T384 213l-43 43q-44-44-106.5-44T128 256z"></svg:path>`,
})
export class ZmdiWifiAltIcon {
  readonly viewBox = input("0 0 472 384")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiWifiAlt2Icon],svg[zmdi-wifi-alt-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M249 42Q142 41 59 97l43 53q49-29 107-38q108-15 187 38l42-53q-83-56-189-55m-.5-39Q387 3 497 88L249 397L0 88Q110 3 248.5 3"></svg:path>`,
})
export class ZmdiWifiAlt2Icon {
  readonly viewBox = input("0 0 504 400")
  readonly width = input("1.26em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiWifiInfoIcon],svg[zmdi-wifi-info-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 0q136 0 256 91L256 405L0 90Q119 0 256 0m21 277V149h-42v128zm-42-170h42V64h-42z"></svg:path>`,
})
export class ZmdiWifiInfoIcon {
  readonly viewBox = input("0 0 512 408")
  readonly width = input("1.26em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiWifiLockIcon],svg[zmdi-wifi-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M482 277q8 0 14.5 7t6.5 15v85q0 8-6.5 14.5T482 405H375q-8 0-14.5-6.5T354 384v-85q0-8 6.5-15t14.5-7v-32q0-22 15.5-37.5t38-15.5t38 15.5T482 245zm-21 0v-32q0-12-9.5-22T429 213t-22.5 10t-9.5 22v32zm-139-32v56l-75 94L0 85Q114 0 247.5 0T495 85l-45 56q-6-2-21-2q-45 0-76 31t-31 75"></svg:path>`,
})
export class ZmdiWifiLockIcon {
  readonly viewBox = input("0 0 504 408")
  readonly width = input("1.24em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiWifiOffIcon],svg[zmdi-wifi-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M497 125L380 270L160 50q44-10 88-10q136 0 249 85M356 301l74 74l-27 27l-71-71l-83 103l-1 1v-1L0 125q35-27 79-47L35 34L62 7z"></svg:path>`,
})
export class ZmdiWifiOffIcon {
  readonly viewBox = input("0 0 504 440")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiWifiOutlineIcon],svg[zmdi-wifi-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M249 42Q144 42 59 97l190 237L438 97q-84-55-189-55m-.5-39q49.5 0 96 11T425 43.5t47 27T497 88L249 397L0 88q12-9 25-17.5t47.5-27T153 14t95.5-11"></svg:path>`,
})
export class ZmdiWifiOutlineIcon {
  readonly viewBox = input("0 0 504 400")
  readonly width = input("1.26em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiWikipediaIcon],svg[zmdi-wikipedia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40 104Q23 75 2 67l-2-1V51h110v15q-13 1-21.5 7T83 90q14 33 40.5 94t38.5 89l46-87q-7-14-23-51.5T158 76q-7-10-36-11V51h102l1 14q-6 1-10 2t-7 4.5t-2 8.5l29 64q28-60 28-61q3-11-5-14.5T237 65l-1-14h92v14q-24 2-33 15q-14 20-46 89q23 53 43 95l78-180q-6-13-29-19l-1-14l87 1v14q-6 1-11 3q-11 5-18 17L291 333h-18l-52-120l-62 120h-18q-16-33-48-111T40 104"></svg:path>`,
})
export class ZmdiWikipediaIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiWindowMaximizeIcon],svg[zmdi-window-maximize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 21h341v342H0zm43 86v213h256V107z"></svg:path>`,
})
export class ZmdiWindowMaximizeIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiWindowMinimizeIcon],svg[zmdi-window-minimize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M341 363H0v-86h341z"></svg:path>`,
})
export class ZmdiWindowMinimizeIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiWindowRestoreIcon],svg[zmdi-window-restore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 107h85V21h256v256h-85v86H0zm256 0v128h43V64H128v43zM43 192v128h170V192z"></svg:path>`,
})
export class ZmdiWindowRestoreIcon {
  readonly viewBox = input("0 0 344 384")
  readonly width = input("0.9em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiWindowsIcon],svg[zmdi-windows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 192V80l128-28v138zM363 0v187l-214 3V47zM0 213l128 2v146L0 336zm363 6v186l-214-40V215z"></svg:path>`,
})
export class ZmdiWindowsIcon {
  readonly viewBox = input("0 0 368 408")
  readonly width = input("0.91em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiWrapTextIcon],svg[zmdi-wrap-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 341v-42h128v42zM341 43v42H0V43zm-64 128q36 0 61 25t25 60t-25 60t-61 25h-42v43l-64-64l64-64v43h48q17 0 29.5-12.5T325 256t-12.5-30.5T283 213H0v-42z"></svg:path>`,
})
export class ZmdiWrapTextIcon {
  readonly viewBox = input("0 0 368 384")
  readonly width = input("0.96em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiWrenchIcon],svg[zmdi-wrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 389q6 5 6 14.5t-8 15.5l-49 49q-7 7-15.5 7t-14.5-7L189 274q-37 15-77.5 6.5T41 242q-31-32-39-75.5T14 84l94 92l64-64l-92-92q38-18 82-10.5T238 48q30 30 38.5 70.5T270 195z"></svg:path>`,
})
export class ZmdiWrenchIcon {
  readonly viewBox = input("0 0 472 480")
  readonly width = input("0.99em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiXboxIcon],svg[zmdi-xbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213 85q-24-18-47-27.5T127.5 47t-28 0T81 51l-6 3Q134 3 213 3t139 51q-3-1-7-3t-17.5-4t-28.5 0t-38.5 11T213 85m-56 41q-39 40-65 78t-34.5 63.5t-12 44.5t-1.5 28l3 9Q0 291 0 216q0-84 57-145q38 16 100 55m270 90q0 75-47 133q1-3 2.5-9t-1.5-27.5t-12-45.5t-34.5-62.5T269 126q28-17 53-31t36-19l11-5q58 61 58 145m-215-44q38 27 67.5 57t45 53t26 42t13.5 29l3 10q-62 66-153.5 66T59 363q2-4 5-11.5t15-30t28-44.5t44-51t61-54"></svg:path>`,
})
export class ZmdiXboxIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiYahooIcon],svg[zmdi-yahoo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M414 113q-5 0-49 10q-10 3-62.5 45.5T246 224q-2 10-2 27l-1 15q0 9 4 39q4 1 32 1t32 1l-1 20q-6-1-105-1q-6 0-44 1t-49 1l4-19h15.5l27-2l15.5-6q1-1 1.5-2t1-2.5t.5-3V252q0-17-1-27q-3-10-51.5-69.5T59 83q-3-1-28.5-4T1 75L0 57q2-1 17.5-1t35.5.5t44-.5q23 0 61 .5t45 .5l-3 16q-4 1-30.5 2.5T138 79q16 24 50 68.5t39 51.5q2-3 41.5-36t40.5-43q-38-7-54-7l-3-20h89q72 0 86 2z"></svg:path>`,
})
export class ZmdiYahooIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiYoutubeIcon],svg[zmdi-youtube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M170 184q18 0 57.5 1t59.5 2q15 0 26 3q28 6 34 40q5 35 5 59q0 39-3 87q-1 12-7 25q-11 24-43 25q-103 3-152 3q-17 0-47.5-1T59 427t-22-4q-20-5-29-26q-6-17-8-52q-1-41 2-94q1-15 5-31q9-31 42-33q31 0 121-3m32 191q4 3 13 9q9 5 17.5 1t10.5-15q2-9 2-14v-60q0-8-3-15q-3-13-12-16.5t-20 4.5q-2 1-4.5 3.5L202 276v-50h-21v158h21q-1-4 0-9m-40 9V266h-22v83q0 8-6 12q-4 5-9 3q-3-1-3-7v-91h-22v99q0 3 1 9q4 16 20 11q4-1 13-7q2-1 6-6v12zm161-55q0-4 .5-11t.5-12.5t-1-10.5q-1-14-9-22t-21-9q-14-1-23.5 6.5T259 292q-3 33 0 67q2 15 14 22.5t28 3.5q13-3 19.5-15.5T323 343h-22q0 10-1 14q-1 9-9 9t-9-8q-1-9-2-30q16 1 43 1m-220-80v-23H29v23h24v135h25V249zM247 44v93q0 6 4 7q3 1 7-2q7-5 7-14V44h22v119h-22v-12l-5 5q-8 6-11 7q-8 4-14.5.5T226 152q-1-4-1-7V45q7-1 22-1M66 3h22q2 0 4 4q10 34 14 51q0 1 2 3q4-18 9-32q1-3 3-10.5T123 7q1-3 4-4h22q0 1-1 4q-1 1-1 2q-4 14-13 42t-13 42q-2 6-2 10v59H96q0-3-.5-8.5T95 144t1-8q2-36-13-78q-9-27-17-55m142 101v11l-.5 13l-1.5 11q-1 11-10 18.5t-21 7.5t-20-7.5t-11-18.5q-1-7-1-21q0-38 1-49q4-27 31-27q26 0 31 27q0 1 .5 2.5t.5 2.5q0 5 .5 15t.5 15m-41-1v28q0 6 1 8q4 5 8 5t8-5q1-2 1-8V70q-1-7-9-7q-7 0-9 7q-1 2-1 6t.5 13t.5 14m39 222v-31q0-9 11-9q8 0 8 7v67q-1 7-8 7q-11-1-11-9q-1-16 0-32m93-14h-20q0-4 .5-10.5t.5-10.5q1-6 9-6q7 0 8 6q2 10 2 21"></svg:path>`,
})
export class ZmdiYoutubeIcon {
  readonly viewBox = input("0 0 352 432")
  readonly width = input("0.82em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiYoutubePlayIcon],svg[zmdi-youtube-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M422 107q5 35 5 69v32l-5 69q-4 29-17 42q-14 14-42 18q-27 2-64.5 3t-61.5 1h-24q-111-1-145-4l-8-1l-13-2l-12.5-5l-13-10l-10-16.5L6 284l-2-7q-4-35-4-69v-32l4-69q4-29 17-42q14-15 43-18q27-2 64-3t61-1h24q90 0 150 4q28 3 42 18q4 4 7 9.5t5 11t3 10.5t2 8zm-151 88l14-7l-115-60v120z"></svg:path>`,
})
export class ZmdiYoutubePlayIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiZeroIcon],svg[zmdi-zero-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M177 203q0 32-6.5 54t-18 36t-28 20.5T89 320q-20 0-37-6q-16-7-27-21q-12-14-19-36q-6-22-6-54v-44q0-32 6.5-54t18-36t28-20t36-6t36 6t28 20t18 36t6.5 54zm-45-51q0-19-3-34q-3-14-8-23q-6-8-14-12t-18-4q-11 0-19 4T57 95q-6 9-9 22.5T45 152v57q0 20 3 35q3 13 9 23q5 9 13 13t19 4t19-4t13-13t8-23t3-35z"></svg:path>`,
})
export class ZmdiZeroIcon {
  readonly viewBox = input("0 0 184 384")
  readonly width = input("0.48em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiZoomInIcon],svg[zmdi-zoom-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m267 235l106 106l-32 32l-106-106v-17l-6-6q-39 33-90 33q-58 0-98.5-40.5T0 138.5t40.5-98t98-40.5t98 40.5T277 139q0 51-33 90l6 6zm-128 0q40 0 68-28t28-68t-28-68t-68-28t-68 28t-28 68t28 68t68 28m53-86h-43v43h-21v-43H85v-21h43V85h21v43h43z"></svg:path>`,
})
export class ZmdiZoomInIcon {
  readonly viewBox = input("0 0 376 384")
  readonly width = input("0.98em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[zmdiZoomOutIcon],svg[zmdi-zoom-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m267 235l106 106l-32 32l-106-106v-17l-6-6q-39 33-90 33q-58 0-98.5-40.5T0 138.5t40.5-98t98-40.5t98 40.5T277 139q0 51-33 90l6 6zm-128 0q40 0 68-28t28-68t-28-68t-68-28t-68 28t-28 68t28 68t68 28M85 128h107v21H85z"></svg:path>`,
})
export class ZmdiZoomOutIcon {
  readonly viewBox = input("0 0 376 384")
  readonly width = input("0.98em")
  readonly height = input("1em")
}
