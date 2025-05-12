import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whh0Icon],svg[whh-0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024H256q-106 0-181-75T0 768V256Q0 150 75 75T256 0h256q106 0 181 75t75 181v512q0 106-75 181t-181 75M256 896h256q31 0 61-16L128 267v501q0 53 37.5 90.5T256 896m256-768H256q-32 0-61 16l445 613V256q0-53-37.5-90.5T512 128"></svg:path>`,
})
export class Whh0Icon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whh1Icon],svg[whh-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 1024H64q-26 0-45-18.5t-19-45T19 915t45-19h128V256q0-53-37-90t-89-38h-2q-27 0-45.5-18.5T0 64.5T18.5 19T64 0v1v-1q106 0 181 75t75 181v640h128q27 0 45.5 19t18.5 45.5t-19 45t-45 18.5"></svg:path>`,
})
export class Whh1Icon {
  readonly viewBox = input("0 0 512 1024")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whh2Icon],svg[whh-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 640H256q-53 0-90.5 37.5T128 768v96q0 13 9.5 22.5T160 896h545q26 0 45 19t19 45.5t-19 45t-45 18.5H64q-26 0-45-18.5T0 960V768q0-106 75-181t181-75h256q53 0 91-37.5t38-90.5V256q0-53-37.5-90.5T512 128H256q-53 0-90.5 37.5T128 256q0 27-18.5 45.5t-45 18.5T19 301.5T0 256Q0 150 75 75T256 0h256q107 0 182 75t75 181v128q0 106-75 181t-182 75"></svg:path>`,
})
export class Whh2Icon {
  readonly viewBox = input("0 0 769 1024")
  readonly width = input("0.76em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whh3Icon],svg[whh-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 704v64q0 106-75 181t-181 75H256q-106 0-181-75T0 768q0-26 18.5-45t45-19t45.5 19t19 45q0 53 37.5 90.5T256 896h256q53 0 90.5-37.5T640 768v-64q0-53-37.5-90.5T512 576h-64q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45.5-19h64q53 0 90.5-37.5T640 320v-64q0-53-37.5-90.5T512 128H256q-53 0-90.5 37.5T128 256q0 27-19 45.5T63.5 320t-45-18.5T0 256Q0 150 75 75T256 0h256q106 0 181 75t75 181v64q0 56-23.5 106T681 512q40 36 63.5 86T768 704"></svg:path>`,
})
export class Whh3Icon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whh4Icon],svg[whh-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M703.5 1024q-26.5 0-45-18.5T640 960V605q-60 35-128 35H256q-106 0-181-75T0 384V64q0-26 18.5-45t45-19T109 19t19 45v320q0 53 37.5 90.5T256 512h256q53 0 90.5-37.5T640 384V64q0-26 18.5-45t45-19T749 19t19 45v896q0 26-19 45t-45.5 19"></svg:path>`,
})
export class Whh4Icon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whh5Icon],svg[whh-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 352q0 13 9.5 22.5T160 384h352q106 0 181 75t75 181v128q0 106-75 181t-181 75H256q-106 0-181-75T0 768q0-27 19-45.5T64.5 704t45 18.5T128 768q0 53 37.5 90.5T256 896h256q53 0 90.5-37.5T640 768V640q0-53-37.5-90.5T512 512H128q-53 0-90.5-37.5T0 384V64q0-27 18.5-45.5T64 0h640q26 0 45 18.5t19 45t-19 45t-45 18.5H160q-13 0-22.5 9.5T128 160z"></svg:path>`,
})
export class Whh5Icon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whh6Icon],svg[whh-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 384h256q107 0 182 75t75 181v128q0 106-75 181t-182 75H256q-106 0-181-75T0 768V256Q0 150 75 75T256 0h256q107 0 182 75t75 181q0 27-19 45.5T704.5 320t-45-18.5T641 256q0-53-37.5-90.5T512 128H256q-53 0-90.5 37.5T128 256v163q60-35 128-35M128 768q0 53 37.5 90.5T256 896h256q54 0 91.5-37.5T641 768V640q0-53-37.5-90.5T512 512H256q-53 0-90.5 37.5T128 640z"></svg:path>`,
})
export class Whh6Icon {
  readonly viewBox = input("0 0 769 1024")
  readonly width = input("0.76em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whh7Icon],svg[whh-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M736 416L448 960q-1 1-4 7t-5 9.5l-6 10.5l-7 11l-8.5 9.5l-10 8.5l-11 5.5l-12.5 2.5q-27 0-45.5-15T320 960q0-20 32-64q139-262 261-511q12-24 18.5-56.5T639 276l1-20q0-53-37.5-90.5T512 128H64q-27 0-45.5-18.5T0 64.5T18.5 19T64 0h448q106 0 181 75t75 181q0 40-11 90t-21 70"></svg:path>`,
})
export class Whh7Icon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whh8Icon],svg[whh-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 704v64q0 106-75 181t-181 75H256q-106 0-181-75T0 768v-64q0-56 23-106t64-86q-41-36-64-86T0 320v-64Q0 150 75 75T256 0h256q106 0 181 75t75 181v64q0 56-23.5 106T681 512q40 36 63.5 86T768 704M640 256q0-53-37.5-90.5T512 128H256q-53 0-90.5 37.5T128 256v64q0 53 37.5 90.5T256 448h256q53 0 90.5-37.5T640 320zm0 448q0-53-37.5-90.5T512 576H256q-53 0-90.5 37.5T128 704v64q0 53 37.5 90.5T256 896h256q53 0 90.5-37.5T640 768z"></svg:path>`,
})
export class Whh8Icon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whh9Icon],svg[whh-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024H256q-106 0-181-75T0 768q0-26 19-45t45.5-19t45 19t18.5 45q0 53 37.5 90.5T256 896h256q53 0 91-37.5t38-90.5V605q-60 35-129 35H256q-106 0-181-75T0 384V256Q0 150 75 75T256 0h256q107 0 182 75t75 181v512q0 106-75 181t-182 75m129-768q0-53-37.5-90.5T512 128H256q-53 0-90.5 37.5T128 256v128q0 53 37.5 90.5T256 512h256q53 0 91-37.5t38-90.5z"></svg:path>`,
})
export class Whh9Icon {
  readonly viewBox = input("0 0 769 1024")
  readonly width = input("0.76em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAUpperCaseIcon],svg[whh-a-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M703.5 1024q-26.5 0-45-18.5T640 960V672q0-13-9.5-22.5T608 640H160q-13 0-22.5 9.5T128 672v288q0 27-19 45.5T64 1024t-45-18.5T0 960V256Q0 150 75 75T256 0h256q106 0 181 75t75 181v704q0 27-19 45.5t-45.5 18.5M640 256q0-53-37.5-90.5T512 128H256q-53 0-90.5 37.5T128 256v224q0 13 9.5 22.5T160 512h448q13 0 22.5-9.5T640 480z"></svg:path>`,
})
export class WhhAUpperCaseIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAaabatteryIcon],svg[whh-aaabattery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m993.567 807l-186 186q-31 31-74.5 31t-74.5-31l-627-627q-31-31-31-74.5t31-74.5l28-28l-47-47q-12-12-12-29t12-29l72-72q12-12 29-12t29 12l47 47l28-28q31-31 74.5-31t74.5 31l627 627q31 31 31 74.5t-31 74.5m-609-567l-48-48l-48 48l-48-48l-48 48l48 48l-48 48l48 48l48-48l48 48l48-48l-48-48zm553 447l-373-373l-251 250l374 373q24 22 57 19t57-27l128-128q23-24 26.5-57t-18.5-57m-297 98l145-145l48 49l-145 144z"></svg:path>`,
})
export class WhhAaabatteryIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAIcon],svg[whh-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M703.5 1024q-26.5 0-45-18.5T640 960V672q0-13-9.5-22.5T608 640H160q-13 0-22.5 9.5T128 672v288q0 27-19 45.5T64 1024t-45-18.5T0 960V256Q0 150 75 75T256 0h256q106 0 181 75t75 181v704q0 27-19 45.5t-45.5 18.5M640 256q0-53-37.5-90.5T512 128H256q-53 0-90.5 37.5T128 256v224q0 13 9.5 22.5T160 512h448q13 0 22.5-9.5T640 480z"></svg:path>`,
})
export class WhhAIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAbacusIcon],svg[whh-abacus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.268 512h-35q-10 64-61 64t-61-64h-134q-10 64-61 64t-61-64h-198q-10 64-61 64t-61-64h-70q-10 64-61 64t-61-64h-35q-13 0-22.5-9.5T.268 480t9.5-22.5t22.5-9.5h35q10-64 61-64t61 64h70q10-64 61-64t61 64h198q10-64 61-64t61 64h134q10-64 61-64t61 64h35q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m0-384h-35q-10 64-61 64t-61-64h-262q-10 64-61 64t-61-64h-70q-10 64-61 64t-61-64h-70q-10 64-61 64t-61-64h-35q-13 0-22.5-9.5T.268 96t9.5-22.5t22.5-9.5h35q10-64 61-64t61 64h70q10-64 61-64t61 64h70q10-64 61-64t61 64h262q10-64 61-64t61 64h35q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m-960 704h355q10-64 61-64t61 64h134q10-64 61-64t61 64h70q10-64 61-64t61 64h35q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-35q-10 64-61 64t-61-64h-70q-10 64-61 64t-61-64h-134q-10 64-61 64t-61-64h-355q-13 0-22.5-9.5T.268 864t9.5-22.5t22.5-9.5"></svg:path>`,
})
export class WhhAbacusIcon {
  readonly viewBox = input("0 0 1025 960")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAccountfilterIcon],svg[whh-accountfilter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m992.226 256l-380 468l-36 236q0 27-18.5 45.5t-45.5 18.5t-45.5-18.5t-18.5-45.5l-36-236l-380-468l-23-32q-9-15-9-32q0-26 19-45t45-19h192v256q0 53 37.5 90.5t90.5 37.5h256q53 0 90.5-37.5t37.5-90.5V128h192q27 0 45.5 19t18.5 45q0 17-9 32zm-481-32l187-187q6 13 6 27v320q0 14-6 27zm-131-224h264l-132 133zm260 448h-260l132-133l132 133zm-180-263q-6 6-9 15.5t-3 16.5v7q-1 26 12 39l7 7l-141 141q-6-13-6-27V64q0-14 6-27l141 141z"></svg:path>`,
})
export class WhhAccountfilterIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAcsourceIcon],svg[whh-acsource-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-896q-104 0-192.5 51.5t-140 140T128 512t51.5 192.5t140 140T512 896t192.5-51.5t140-140T896 512t-51.5-192.5t-140-140T512 128m128 576q-58 0-97.5-42T480 512q-21-49-47.5-88.5T384 384q-15 0-25 18.5t-21 56t-18 53.5h-64q0-27 7-57.5t21-62t40-52t60-20.5q58 0 97.5 42T544 512q21 49 47.5 88.5T640 640q15 0 25-18.5t21-56t18-53.5h64q0 27-7 57.5t-21 62t-40 52t-60 20.5"></svg:path>`,
})
export class WhhAcsourceIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAcornIcon],svg[whh-acorn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928 129q-35 0-65.5 46.5T826 272q122 132 173 254.5t2 171.5q-45 45-122 71q-15-63-85-163.5t-172.5-203t-203-172T255 145q26-76 72-121q46-44 152.5-5.5T708 160q2-2 16.5-13.5t19-14.5t19-13.5t22.5-14t22.5-12t26-11.5t27-7.5T892 67t33-2q14 0 24.5 9.5t10 23.5t-9 22.5T928 129M576 449q156 156 237 311q-36 49-80 93q-60 60-130.5 98.5t-132.5 54t-129 17.5t-114-4t-93-18t-61-17.5t-23-9.5q-4-8-9.5-22.5t-17.5-61t-18-93T1 684t17.5-129T73 422.5T171 292q45-44 93-80q156 81 312 237"></svg:path>`,
})
export class WhhAcornIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAddalarmIcon],svg[whh-addalarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M983.557 320h-3q-11 1-27-2q-85-145-238-211q-6-23-8.5-36.5t-2.5-28.5t7.5-23t22.5-13.5t40-5.5q104 0 177 73.5t73 176.5q0 67-41 70m-23 256q0 91-35.5 174t-95.5 143t-143 95.5t-174 35.5t-174-35.5t-143-95.5t-95.5-143t-35.5-174t35.5-174t95.5-143t143-95.5t174-35.5t174 35.5t143 95.5t95.5 143t35.5 174m-448-320q-87 0-160.5 43t-116.5 116.5t-43 160.5t43 160.5t116.5 116.5t160.5 43t160.5-43t116.5-116.5t43-160.5t-43-160.5t-116.5-116.5t-160.5-43m224 384h-160v160q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5V640h-160q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h160V352q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v160h160q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-665-322q-15 3-27 2h-3q-41-3-41-70q0-103 73-176.5t177-73.5q25 0 40 5.5t22 13.5t7.5 23t-2 28.5t-8.5 36.5q-153 66-238 211"></svg:path>`,
})
export class WhhAddalarmIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAddfolderaltIcon],svg[whh-addfolderalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.94 896h-896q-27 0-45.5-19T.94 832V256h1024v576q0 26-19 45t-45 19m-64-352q0-13-9.5-22.5t-22.5-9.5h-96v-96q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v96h-96q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h96v96q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5v-96h96q13 0 22.5-9.5t9.5-22.5zM.94 64q0-26 18.5-45t45.5-19h384q27 0 45.5 18.5t18.5 45.5t18.5 45.5t45.5 18.5h384q26 0 45 19t19 45H.94z"></svg:path>`,
})
export class WhhAddfolderaltIcon {
  readonly viewBox = input("0 0 1025 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAddfriendIcon],svg[whh-addfriend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 896h-64v64q0 27-19 45.5t-45.5 18.5t-45-18.5T768 960v-64h-64q-27 0-45.5-19T640 831.5t18.5-45T704 768h64v-64q0-27 18.5-45.5t45-18.5t45.5 18.5t19 45.5v64h64q26 0 45 18.5t19 45t-19 45.5t-45 19M710 640q-32 26-70 42v28q-28 10-46 34.5T576 800v64q0 40 28 68t68 28h32v62q-70 2-192 2h-76l-81-1l-87-2.5l-80-4.5l-75.5-8.5l-57.5-12L13.5 979L0 957q2-88 110-155.5T384 712v-33q-52-23-90-65t-60-98.5t-32-121T192 256q0-65 25-114.5t69-80t101-46T512 0t125 15.5t101 46t69 80T832 256q0 220-75 330q-34 18-47 54"></svg:path>`,
})
export class WhhAddfriendIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAddressIcon],svg[whh-address-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.5 768h-896q-26 0-45-19t-19-45V64q0-27 19-45.5T64.5 0h896q26 0 45 18.5t19 45.5v640q0 26-19 45t-45 19m-800-128h256q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-256q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5m320-320h-320q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h320q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m0 128h-320q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h320q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m416-288q0-13-9.5-22.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5z"></svg:path>`,
})
export class WhhAddressIcon {
  readonly viewBox = input("0 0 1025 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAddshapeIcon],svg[whh-addshape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-512q-53 0-90.5-37.5t-37.5-90.5V768h-128q-53 0-90.5-37.5T.428 640V128q0-53 37.5-90.5t90.5-37.5h512q53 0 90.5 37.5t37.5 90.5v128h128q53 0 90.5 37.5t37.5 90.5v512q0 53-37.5 90.5t-90.5 37.5"></svg:path>`,
})
export class WhhAddshapeIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAddtagsIcon],svg[whh-addtags-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1006.06 681l-325 324q-18 19-44.5 19t-44.5-19l-144-144v-61q0-40-28-68t-68-28h-32v-32q0-40-28-68t-68-28h-62l-144-144q-18-18-18-80V64q0-26 19-45t45-19h288q62 0 80 19l574 573q18 18 18 44.5t-18 44.5m-750-553q-53 0-90.5 37.5t-37.5 90.5t37.5 90.5t90.5 37.5t90.5-37.5t37.5-90.5t-37.5-90.5t-90.5-37.5m-192 640h64v-64q0-27 18.5-45.5t45-18.5t45.5 18.5t19 45.5v64h64q26 0 45 18.5t19 45.5t-19 45.5t-45 18.5h-64v64q0 26-19 45t-45.5 19t-45-19t-18.5-45v-64h-64q-27 0-45.5-18.5T.06 832t18.5-45.5t45.5-18.5"></svg:path>`,
})
export class WhhAddtagsIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAddtocartIcon],svg[whh-addtocart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 513H64q-26 0-45-18.5t-19-45T18.5 404T64 385h56q20 30 51.5 47t68.5 17t68.5-17t51.5-47h304q20 30 51.5 47t68.5 17t68.5-17t51.5-47h56q27 0 45.5 19t18.5 45.5t-19 45t-45 18.5M806 379q-19 11-40 5t-32-25L583 81q-11-19-5.5-40.5T602 8t40-5t32 25l151 278q11 19 5.5 40.5T806 379m-516-20q-11 19-32 25t-40-5t-24.5-32.5T199 306L350 28q11-19 32-25t40 5t24.5 32.5T441 81zm606 602q-8 40-29.5 52t-65.5 12H227q-45 0-68-12t-31-52L64 577h896zM736 769h-96v-96q0-13-9.5-22.5T608 641t-22.5 9.5T576 673v96h-96q-13 0-22.5 9.5T448 801t9.5 22.5T480 833h96v96q0 13 9.5 22.5T608 961t22.5-9.5T640 929v-96h96q13 0 22.5-9.5T768 801t-9.5-22.5T736 769"></svg:path>`,
})
export class WhhAddtocartIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAddtolistIcon],svg[whh-addtolist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 1024H128q-53 0-90.5-37.5T0 896V256q0-53 37.5-90.5T128 128h64q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19h-32q-13 0-22.5 9.5T128 288v192q0 13 9.5 22.5T160 512h704q13 0 22.5-9.5T896 480V288q0-13-9.5-22.5T864 256h-32q-26 0-45-19t-19-45.5t19-45t45-18.5h64q53 0 90.5 37.5T1024 256v640q0 53-37.5 90.5T896 1024m0-384H128v32q0 13 9.5 22.5T160 704h704q13 0 22.5-9.5T896 672zm0 192H128v32q0 13 9.5 22.5T160 896h704q13 0 22.5-9.5T896 864zM640 256h-64v64q0 26-18.5 45T512 384t-45.5-19t-18.5-45v-64h-64q-27 0-45.5-19T320 191.5t19-45t45-18.5h64V64q0-27 19-45.5T512.5 0t45 18.5T576 64v64h64q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19"></svg:path>`,
})
export class WhhAddtolistIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAdduseraltIcon],svg[whh-adduseralt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 800q0 93-65.5 158.5T800 1024H436l-81-1l-87-2.5l-80-4.5l-75.5-8.5l-57.5-12L13.5 979L0 957q2-88 110-155.5T384 712v-33q-52-23-90-65t-60-98.5t-32-121T192 256q0-65 25-114.5t69-80t101-46T512 0t125 15.5t101 46t69 80T832 256q0 214-71 324q23-4 39-4q93 0 158.5 65.5T1024 800M768 273q0-103-71.5-156T512 64t-184.5 53T256 273q0 68 10 125.5T298 505t60 82t90 46v138q-60 6-117.5 21T232 825.5t-72.5 38T112 898t-16 22q0 14 38 23t114 12t126.5 4t137.5 1q85 0 131-1q-67-66-67-159q0-6 3-28q-1-1-2-1h-1V633q192-41 192-360m0 399v96h-96q-13 0-22.5 9.5T640 800t9.5 22.5T672 832h96v96q0 13 9.5 22.5T800 960t22.5-9.5T832 928v-96h96q13 0 22.5-9.5T960 800t-9.5-22.5T928 768h-96v-96q0-13-9.5-22.5T800 640t-22.5 9.5T768 672"></svg:path>`,
})
export class WhhAdduseraltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAdjustIcon],svg[whh-adjust-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-896q-104 0-192.5 51.5t-140 140T128 512t51.5 192.5t140 140T512 896z"></svg:path>`,
})
export class WhhAdjustIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAdobeIcon],svg[whh-adobe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 320L352 704h160l82 192H0L384 0h256l384 896H759z"></svg:path>`,
})
export class WhhAdobeIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAdsIcon],svg[whh-ads-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.193 640h-64v256h32q50 0 73 35t23 93h-384q0-58 23-93t73-35h32V640h-512v256h32q50 0 73 35t23 93h-384q0-58 23-93t73-35h32V640h-64q-26 0-45-18.5t-19-45.5V64q0-26 18.5-45t45.5-19h192v128h-32q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h128q13 0 22.5-9.5t9.5-22.5v-64q0-13-9.5-22.5t-22.5-9.5h-32V0h384v128h-32q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h128q13 0 22.5-9.5t9.5-22.5v-64q0-13-9.5-22.5t-22.5-9.5h-32V0h192q26 0 45 19t19 45v512q0 27-19 45.5t-45 18.5"></svg:path>`,
})
export class WhhAdsIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAefIcon],svg[whh-aef-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M312 683q82-36 301.5-101T928 480q21-9 45-17t37-12l14-3q-41 41-154.5 125.5T647 736.5t-207 161T320 1024q0-43 51.5-115T488 772.5T619 656q-88 28-221.5 57T227 754q-23 14-35 14q5-10 15-21q49-82 49-235q0-9-7-32Q76 594 0 640q0-245 35.5-412T129 0Q64 231 64 522q143-98 268-150t180-52q0 79-60.5 180.5T312 683"></svg:path>`,
})
export class WhhAefIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAffiliateIcon],svg[whh-affiliate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024.594 478q0 12-21.5 19.5t-63 10.5t-68.5 3.5t-71 .5t-71-.5t-68.5-3.5t-63-10.5t-21.5-19.5q1-42 46-75t114-45v-20q-96-42-96-210q0-63 45-95.5T801.094 0t115 32.5t44.5 95.5q0 173-96 211v19q70 12 114.5 45t45.5 75m-800 34q-44 0-71-.5t-68.5-3.5t-63-10.5T.594 478q1-42 45.5-75t114.5-45v-20q-96-42-96-210q0-63 44.5-95.5t115-32.5t115.5 32.5t45 95.5q0 173-96 211v19q69 12 114 45t46 75q0 12-21.5 19.5t-63 10.5t-68.5 3.5t-71 .5m-32.5 64q26.5 0 45.5 18.5t19 45.5v224q0 13 9.5 22.5t22.5 9.5h448q13 0 22.5-9.5t9.5-22.5V640q0-27 19-45.5t45.5-18.5t45 18.5t18.5 45.5v256q0 53-37.5 90.5t-90.5 37.5h-512q-53 0-90.5-37.5t-37.5-90.5V640q0-27 18.5-45.5t45-18.5"></svg:path>`,
})
export class WhhAffiliateIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAjaxIcon],svg[whh-ajax-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m758 460l-42 43q-9 9-21.5 9t-21.5-9l-33-33v362q0 80-56.5 136T448 1024H320q-80 0-136-56t-56-136h128q0 27 18.5 45.5T320 896h128q26 0 45-18.5t19-45.5V470l-33 33q-9 9-21.5 9t-21.5-9l-43-43q-9-9-9-21.5t9-21.5l152-152q9-9 31-9q21 0 31 10l152 151q8 9 8 21.5t-9 21.5M448 128H320q-27 0-45.5 19T256 192v362l32-33q9-9 21.5-9t21.5 9l43 43q9 9 9 21.5t-9 21.5L223 759q-9 9-31 9t-32-10L9 607q-9-9-9-21.5T9 564l43-43q9-9 21.5-9t21.5 9l33 33V192q0-80 56-136T320 0h128q79 0 135.5 56T640 192H512q0-26-19-45t-45-19"></svg:path>`,
})
export class WhhAjaxIcon {
  readonly viewBox = input("0 0 767 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAlarmIcon],svg[whh-alarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1004.694 320h-18q-39-96-112.5-169.5T704.694 39V20q15-20 64-20q106 0 181 75t75 181q0 49-20 64m-44 256q0 154-95 276l95 131l-41 41l-131-95q-122 95-276 95t-276-95l-131 95l-41-41l95-131q-95-122-95-276q0-91 35.5-174t95.5-143t143-95.5t174-35.5t174 35.5t143 95.5t95.5 143t35.5 174m-448-320q-87 0-160.5 43t-116.5 116.5t-43 160.5t43 160.5t116.5 116.5t160.5 43t160.5-43t116.5-116.5t43-160.5t-43-160.5t-116.5-116.5t-160.5-43m160 192l-98 143q-5 21-22.5 35t-39.5 14t-39-13t-22-34l-131-177v-32h32l161 119l127-87h32zm-634-128h-18q-20-15-20-64q0-106 75-181t181-75q49 0 64 20v19q-96 39-169.5 112t-112.5 169"></svg:path>`,
})
export class WhhAlarmIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAlarmaltIcon],svg[whh-alarmalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.585 961h-64q0 26-18.5 45t-45 19t-45.5-19t-19-45h-512q0 26-19 45t-45.5 19t-45-19t-18.5-45h-64q-27 0-45.5-19t-18.5-45V193q0-27 18.5-45.5t45.5-18.5h64V65q0-27 18.5-46t45.5-19h128q27 0 45.5 19t18.5 46v64h256V65q0-27 19-46t45-19h128q27 0 45.5 19t18.5 46v64h64q27 0 45.5 18.5t18.5 45.5v704q0 26-18.5 45t-45.5 19m0-640q0-27-18.5-45.5t-45.5-18.5h-768q-27 0-45.5 18.5t-18.5 45.5v448q0 26 18.5 45t45.5 19h768q27 0 45.5-19t18.5-45zm-96 384h-128q-13 0-22.5-9.5t-9.5-22.5V417q0-14 9.5-23t22.5-9h128q13 0 22.5 9t9.5 23v256q0 13-9.5 22.5t-22.5 9.5m-32-256h-64v192h64zm-192 96q0 13-9.5 22.5t-22.5 9.5h-32v64h32q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5V545q0-13 9.5-22.5t22.5-9.5h32v-64h-32q-13 0-22.5-9.5t-9.5-23t9.5-22.5t22.5-9h64q13 0 22.5 9t9.5 23zm-224 96q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m0-128q-13 0-22.5-9.5t-9.5-23t9.5-22.5t22.5-9t22.5 9t9.5 22.5t-9.5 23t-22.5 9.5m-128 192q-13 0-22.5-9.5t-9.5-22.5v-96h-96q-13 0-22.5-9.5t-9.5-22.5V417q0-14 9.5-23t22.5-9t22.5 9t9.5 23v96h64v-96q0-14 9.5-23t22.5-9t22.5 9t9.5 23v256q0 13-9.5 22.5t-22.5 9.5"></svg:path>`,
})
export class WhhAlarmaltIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAlarmclockIcon],svg[whh-alarmclock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M983.557 320h-3q-11 1-27-2q-85-145-238-211q-6-23-8.5-36.5t-2-28.5t7.5-23t22-13.5t40-5.5q104 0 177 73.5t73 176.5q0 67-41 70m-23 256q0 91-35.5 174t-95.5 143t-143 95.5t-174 35.5t-174-35.5t-143-95.5t-95.5-143t-35.5-174t35.5-174t95.5-143t143-95.5t174-35.5t174 35.5t143 95.5t95.5 143t35.5 174m-448-320q-87 0-160.5 43t-116.5 116.5t-43 160.5t43 160.5t116.5 116.5t160.5 43t160.5-43t116.5-116.5t43-160.5t-43-160.5t-116.5-116.5t-160.5-43m-441 62q-15 3-27 2h-3q-41-3-41-70q0-103 73-176.5t177-73.5q25 0 40 5.5t22 13.5t7.5 23t-2 28.5t-8.5 36.5q-153 66-238 211"></svg:path>`,
})
export class WhhAlarmclockIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAlbumIcon],svg[whh-album-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.193 1024h-896q-27 0-45.5-19t-18.5-45V64q0-26 18.5-45t45.5-19h896q26 0 45 19t19 45v896q0 27-19 45.5t-45 18.5m0-896q0-26-19-45t-45-19h-704q-27 0-45.5 18.5t-18.5 45.5v768q0 27 18.5 45.5t45.5 18.5h704q26 0 45-18.5t19-45.5zm-416 768q-96 0-177-47t-128-128t-47-177t47-177t128-128t177-47t177 47t128 128t47 177t-47 177t-128 128t-177 47m0-512q-66 0-113 47t-47 113t47 113t113 47t113-47t47-113t-47-113t-113-47m0 256q-40 0-68-28t-28-68t28-68t68-28t68 28t28 68t-28 68t-68 28"></svg:path>`,
})
export class WhhAlbumIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAlertaltIcon],svg[whh-alertalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 576h-64q-27 0-45.5-18.5T832 512t19-45.5t45-18.5h64q26 0 45 18.5t19 45t-18.5 45.5t-45.5 19M837 270q-18 18-42.5 18T753 270.5t-17-42t17-42.5l42-41q17-18 41.5-18t42 17.5t17.5 42t-17 41.5zm-69 530q0 13-9.5 22.5T736 832H288q-13 0-22.5-9.5T256 800V512q0-106 75-181t181-75t181 75t75 181zM512.5 192q-26.5 0-45.5-19t-19-45V64q0-27 18.5-45.5T512 0t45.5 18.5T576 64v64q0 26-18.5 45t-45 19M187 270l-41-42q-18-17-18-41.5t17.5-42t42-17.5t41.5 18l42 41q17 18 17 42.5T271 270t-41.5 17t-42.5-17m5 241.5q0 26.5-18.5 45.5T128 576H64q-26 0-45-19T0 511.5t19-45T64 448h64q27 0 45.5 18.5t18.5 45M64 896h896q26 0 45 18.5t19 45.5t-19 45.5t-45 18.5H64q-26 0-45-18.5T0 960t19-45.5T64 896"></svg:path>`,
})
export class WhhAlertaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAlertpayIcon],svg[whh-alertpay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1013 737l-174 23q-34 2-57-32q-24-34-57-83l-271 45l1 83q-5 49-37 56l-223 30q-14 3-21.5-10.5T172 812L366 44q6-23 15-34t20-9t23 11.5T451 40l559 640q10 12 13.5 25.5t0 22.5t-10.5 9M508 329q-13-16-35.5-4.5T450 353q0 25 2 226l208-29Q521 345 508 329M102 959l272-36q15-3 25-11v15q-6 54-41 61l-285 37q-34 7-56-23.5T3 942l218-797q10-36 27.5-55T288 74L69 891q-7 25 5.5 48.5T102 959m599-128q27 40 66 37l192-32q-2 23-15.5 46.5T920 906l-195 25q-48 3-72-32q-18-34-46-84l-91 31q-1-33-1-57l127-19q14 21 29 36t22 20z"></svg:path>`,
})
export class WhhAlertpayIcon {
  readonly viewBox = input("0 0 1026 1027")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAlgorhythmIcon],svg[whh-algorhythm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1015 565L896 684v244q0 13-9.5 22.5T864 960H481q-30 29-81 46.5T288 1024q-93 0-158.5-37.5T64 896q0-48 55-83.5T256 770V640H64q-26 0-45-19T0 576V448q0-27 19-45.5T64 384h192V254q-82-7-137-42.5T64 128q0-53 65.5-90.5T288 0t158.5 37.5T512 128q0 48-55 83.5T320 254v130h192q27 0 45.5 18.5T576 448v64h146l120-120q9-9 21.5-9t21.5 9l130 130q9 9 9 21.5t-9 21.5m-503 75H320v130q82 7 137 42.5t55 83.5h320V685L723 576H576q0 26-18.5 45T512 640"></svg:path>`,
})
export class WhhAlgorhythmIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAlienshipIcon],svg[whh-alienship-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 640q-139 0-257-21.5T68.5 560T0 479.5t69.5-80T256 342v-86q0-106 75-181T512 0t181 75t75 181v86q117 21 186.5 57.5t69.5 80t-68.5 80.5T769 618.5T512 640m192-367q0-86-56-147.5T512 64t-136 61.5T320 273v68q90 43 192 43t192-43zm254 349q-15 62-143 104t-303 42t-303-42T66 622q67 38 186 60t260 22t260-22t186-60"></svg:path>`,
})
export class WhhAlienshipIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAlienwareIcon],svg[whh-alienware-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 1024q-39 0-89-28.5T193.5 913t-95-123t-71-159.5T0 448q0-97 24.5-178T96 128.5T216.5 34T384 0t167.5 34T672 128.5T743.5 270T768 448q0 92-27.5 182.5t-71 159.5t-95 123T473 995.5t-89 28.5M256 640q-37-47-89-71.5T64 544q0 47 28 110.5T160 768q19 23 36.5 37t40 19.5T274 831t46 1q0-112-64-192m256 0q-64 80-64 192q31 0 46-1t37.5-6.5t40-19.5t36.5-37q40-50 68-113.5T704 544q-51 0-103 24.5T512 640"></svg:path>`,
})
export class WhhAlienwareIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAlignbottomedgeIcon],svg[whh-alignbottomedge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.553 1024h-896q-26 0-45-19t-19-45.5t19-45t45-18.5h896q26 0 45 18.5t19 45t-19 45.5t-45 19m-64-256h-256q-27 0-45.5-19t-18.5-45V320q0-27 18.5-45.5t45.5-18.5h256q26 0 45 18.5t19 45.5v384q0 27-19 45.5t-45 18.5m-64-352q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm-448 352h-256q-27 0-45.5-19t-18.5-45V64q0-26 18.5-45t45.5-19h256q26 0 45 19t19 45v640q0 27-19 45.5t-45 18.5"></svg:path>`,
})
export class WhhAlignbottomedgeIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAligncenterIcon],svg[whh-aligncenter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 320H64q-27 0-45.5-18.5T0 256.5T18.5 211T64 192h896q26 0 45 19t19 45.5t-19 45t-45 18.5M832 128H192q-27 0-45.5-18.5t-18.5-45T146.5 19T192 0h640q26 0 45 19t19 45.5t-19 45t-45 18.5M128 512q-27 0-45.5-18.5t-18.5-45T82.5 403t45.5-19h768q26 0 45 19t19 45.5t-19 45t-45 18.5zm-64 64h896q26 0 45 19t19 45.5t-19 45t-45 18.5H64q-27 0-45.5-18.5T0 640t18.5-45.5T64 576m256 192h384q26 0 45 19t19 45.5t-19 45t-45 18.5H320q-27 0-45.5-18.5T256 832t18.5-45.5T320 768"></svg:path>`,
})
export class WhhAligncenterIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAlignhorizontalcenterIcon],svg[whh-alignhorizontalcenter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 960H448q0 26-18.5 45t-45 19t-45.5-19t-19-45H64q-26 0-45-18.5T0 896V640q0-26 19-45t45-19h256V448H192q-26 0-45-18.5T128 384V128q0-26 19-45t45-19h128q0-26 19-45t45.5-19t45 19T448 64h128q27 0 45.5 19t18.5 45v256q0 27-18.5 45.5T576 448H448v128h256q27 0 45.5 19t18.5 45v256q0 27-18.5 45.5T704 960M480 320q13 0 22.5-9.5T512 288v-64q0-13-9.5-22.5T480 192H288q-13 0-22.5 9.5T256 224v64q0 13 9.5 22.5T288 320z"></svg:path>`,
})
export class WhhAlignhorizontalcenterIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAlignjustifyIcon],svg[whh-alignjustify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.865 512h-896q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45.5-19h896q26 0 45 19t19 45.5t-19 45t-45 18.5m0-192h-896q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45.5-19h896q26 0 45 19t19 45.5t-19 45t-45 18.5m0-192h-896q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45.5-19h896q26 0 45 19t19 45.5t-19 45t-45 18.5m-896 448h896q26 0 45 19t19 45.5t-19 45t-45 18.5h-896q-27 0-45.5-18.5T.865 640t18.5-45.5t45.5-18.5m0 192h384q26 0 45 19t19 45.5t-19 45t-45 18.5h-384q-27 0-45.5-18.5T.865 832t18.5-45.5t45.5-18.5"></svg:path>`,
})
export class WhhAlignjustifyIcon {
  readonly viewBox = input("0 0 1025 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAlignleftIcon],svg[whh-alignleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.865 320h-896q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45.5-19h896q26 0 45 19t19 45.5t-19 45t-45 18.5m-192-192h-704q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45.5-19h704q26 0 45 19t19 45.5t-18.5 45t-45.5 18.5m-704 256h768q26 0 45 19t19 45.5t-19 45t-45 18.5h-768q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45.5-19m0 192h832q27 0 45.5 19t18.5 45.5t-18.5 45t-45.5 18.5h-832q-27 0-45.5-18.5T.865 640t18.5-45.5t45.5-18.5m0 192h384q26 0 45 19t19 45.5t-19 45t-45 18.5h-384q-27 0-45.5-18.5T.865 832t18.5-45.5t45.5-18.5"></svg:path>`,
})
export class WhhAlignleftIcon {
  readonly viewBox = input("0 0 1025 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAlignleftedgeIcon],svg[whh-alignleftedge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.193 960h-640q-27 0-45.5-18.5t-18.5-45.5V640q0-26 18.5-45t45.5-19h640q26 0 45 19t19 45v256q0 27-19 45.5t-45 18.5m-256-512h-384q-27 0-45.5-18.5t-18.5-45.5V128q0-26 18.5-45t45.5-19h384q26 0 45 19t19 45v256q0 27-19 45.5t-45 18.5m-64-224q0-13-9.5-22.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5zm-576 800q-27 0-45.5-19t-18.5-45V64q0-26 18.5-45t45.5-19t45.5 19t18.5 45v896q0 27-18.5 45.5t-45.5 18.5"></svg:path>`,
})
export class WhhAlignleftedgeIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAlignrightIcon],svg[whh-alignright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 704H128q-27 0-45.5-18.5t-18.5-45T82.5 595t45.5-19h832q26 0 45 19t19 45.5t-19 45t-45 18.5m0-192H192q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45.5-19h768q26 0 45 19t19 45.5t-19 45t-45 18.5m0-192H64q-27 0-45.5-18.5T0 256.5T18.5 211T64 192h896q26 0 45 19t19 45.5t-19 45t-45 18.5m0-192H256q-27 0-45.5-18.5t-18.5-45T210.5 19T256 0h704q26 0 45 19t19 45.5t-19 45t-45 18.5M576 768h384q26 0 45 19t19 45.5t-19 45t-45 18.5H576q-27 0-45.5-18.5T512 832t18.5-45.5T576 768"></svg:path>`,
})
export class WhhAlignrightIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAlignrightedgeIcon],svg[whh-alignrightedge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M959.5 1024q-26.5 0-45-19T896 960V64q0-26 18.5-45t45-19t45.5 19t19 45v896q0 27-19 45.5t-45.5 18.5M704 960H64q-27 0-45.5-18.5T0 896V640q0-26 18.5-45T64 576h640q26 0 45 19t19 45v256q0 27-19 45.5T704 960m0-512H320q-27 0-45.5-18.5T256 384V128q0-26 18.5-45T320 64h384q26 0 45 19t19 45v256q0 27-19 45.5T704 448m-64-224q0-13-9.5-22.5T608 192H416q-13 0-22.5 9.5T384 224v64q0 13 9.5 22.5T416 320h192q13 0 22.5-9.5T640 288z"></svg:path>`,
})
export class WhhAlignrightedgeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAligntopedgeIcon],svg[whh-aligntopedge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.12 128h-896q-26 0-45-18.5t-19-45T18.62 19t45.5-19h896q26 0 45 19t19 45.5t-18.5 45t-45.5 18.5m-832 128h256q27 0 45.5 18.5t18.5 45.5v640q0 26-18.5 45t-45.5 19h-256q-26 0-45-19t-19-45V320q0-27 19-45.5t45-18.5m512 0h256q27 0 45.5 18.5t18.5 45.5v384q0 26-18.5 45t-45.5 19h-256q-26 0-45-19t-19-45V320q0-27 19-45.5t45-18.5m64 352q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5V416q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5z"></svg:path>`,
})
export class WhhAligntopedgeIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAlignverticalcenterIcon],svg[whh-alignverticalcenter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 448v128q0 27-19 45.5T896 640H640q-26 0-45-18.5T576 576V448H448v256q0 27-18.5 45.5T384 768H128q-26 0-45-18.5T64 704V448q-26 0-45-18.5t-19-45T19 339t45-19V64q0-26 19-45t45-19h256q27 0 45.5 19T448 64v256h128V192q0-26 19-45t45-19h256q26 0 45 19t19 45v128q26 0 45 19t19 45.5t-18.5 45T960 448M832 288q0-13-9.5-22.5T800 256h-64q-13 0-22.5 9.5T704 288v192q0 13 9.5 22.5T736 512h64q13 0 22.5-9.5T832 480z"></svg:path>`,
})
export class WhhAlignverticalcenterIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAmazonIcon],svg[whh-amazon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 961v-96q0-72-8-84t-56-12H768q3-3 16-13t19-14.5t19.5-13t23-12.5t23.5-7.5t27-3.5q96 0 112 20t16 140q0 25-10 40.5T985.5 936T960 961M610 700q-46 46-107 73.5T378 801q-116 0-182.5-64T129 575q0-65 30-116t85-78t158-47q127-25 174-45v-32q0-53-37-90.5T448 129q-45 0-86.5 41.5T320 257l-160-64q15-54 35-82.5T254 54Q328 0 474 0q147 0 198 33q52 32 74 94t22 162v224q0 53 21 95.5t43 64.5l-160 96q-8-12-33-36.5T610 700m-34-283q-62 21-102 30q-154 33-154 130q0 64 128 64q45 0 86.5-26.5T576 545zm288 416q32 0 32 32q-195 160-448 160T0 865q0-32 32-32q93 64 193.5 96T448 961t222.5-32T864 833"></svg:path>`,
})
export class WhhAmazonIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAmdIcon],svg[whh-amd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1015.697 1015l-247-247V288q0-13-9.5-22.5t-22.5-9.5h-480L9.697 9q10-9 23-9h960q13 0 22.5 9.5t9.5 22.5v960q0 13-9 23m-759-279q0 13 9.5 22.5t22.5 9.5h416l-256 256h-416q-13 0-22.5-9.5T.697 992V576l256-256z"></svg:path>`,
})
export class WhhAmdIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAnalogdownIcon],svg[whh-analogdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m659 843l30-50q10-12 10.5-33T689 722t-32-17l-418-1q-20 0-31.5 17t-11 38t10.5 34l31 50Q130 786 65 680T0 448q0-91 35.5-174T131 131t143-95.5T448 0t174 35.5T765 131t95.5 143T896 448q0 126-64.5 231.5T659 843m-60-75q9 13 9 31t-9 30l-129 182q-9 13-21.5 13t-21.5-13L297 829q-8-13-8-30.5t8-30.5z"></svg:path>`,
})
export class WhhAnalogdownIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAnalogleftIcon],svg[whh-analogleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 896q-126 0-232-65T181 658l50 31q13 10 34 10.5t38-11t17-31.5l-1-418q0-21-17-32t-38-10.5t-33 10.5l-50 30q58-108 163.5-172.5T576 0q91 0 174 35.5T893 131t95.5 143t35.5 174t-35.5 174T893 765t-143 95.5T576 896M256 297v302q-13 9-30.5 9t-30.5-9L13 469q-13-9-13-21.5T13 426l182-129q12-9 30-9t31 9"></svg:path>`,
})
export class WhhAnalogleftIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAnalogrightIcon],svg[whh-analogright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1011 469L829 599q-13 9-30.5 9t-30.5-9V297q13-9 31-9t30 9l182 129q13 9 13 21.5t-13 21.5M704 239v418q0 20 17 31.5t38 11t34-10.5l50-31q-57 108-163 173t-232 65q-91 0-174-35.5T131 765T35.5 622T0 448t35.5-174T131 131t143-95.5T448 0q126 0 231.5 64.5T843 237l-50-30q-12-10-33-10.5T721.5 207T704 239"></svg:path>`,
})
export class WhhAnalogrightIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAnalogupIcon],svg[whh-analogup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 1024q-91 0-174-35.5T131 893T35.5 750T0 576q0-126 65-232t173-163l-31 50q-10 13-10.5 34t11 38t31.5 17l418-1q21 0 32-17t10.5-38t-10.5-33l-30-50q108 58 172.5 163.5T896 576q0 91-35.5 174T765 893t-143 95.5t-174 35.5M297 256q-9-13-9-30.5t9-30.5L427 13q9-13 21.5-13T470 13l129 182q9 12 9 30t-9 31z"></svg:path>`,
})
export class WhhAnalogupIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAnalyticsIcon],svg[whh-analytics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 448V0q91 0 174 35.5T893 131t95.5 143t35.5 174zm-128 576q-91 0-174-35.5T131 893T35.5 750T0 576t35.5-174T131 259t143-95.5T448 128v448h448q0 91-35.5 174T765 893t-143 95.5t-174 35.5"></svg:path>`,
})
export class WhhAnalyticsIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAnalyticsaltIcon],svg[whh-analyticsalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024M128 512h384V128q-159 0-271.5 112.5T128 512m448 64H134q23 137 129.5 228.5T512 896q78 0 148-29.5T784 784z"></svg:path>`,
})
export class WhhAnalyticsaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAnchorIcon],svg[whh-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m992 896l-74-74q-71 94-177.5 148T512 1024t-228.5-54T106 822l-74 74q-13 0-22.5-9.5T0 864V672q0-13 9.5-22.5T32 640h192q13 0 22.5 9.5T256 672l-59 59q44 63 109 104.5T448 890V576h-64q-26 0-45-18.5t-19-45t19-45.5t45-19h64v-76q-57-20-92.5-69T320 192q0-80 56-136T512 0t136 56.5T704 192q0 62-35.5 111T576 372v76h64q27 0 45.5 19t18.5 45.5t-18.5 45T640 576h-64v314q77-13 142-54.5T827 731l-59-59q0-13 9.5-22.5T800 640h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5T992 896M511.5 128q-26.5 0-45 18.5t-18.5 45t18.5 45.5t45 19t45.5-19t19-45t-19-45t-45.5-19"></svg:path>`,
})
export class WhhAnchorIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAndroidIcon],svg[whh-android-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 128q-8 0-18-3L752 252q123 65 197.5 186t74.5 266q0 27-19 45.5T960 768H64q-26 0-45-18.5T0 704q0-145 74.5-266T272 252L146 125q-10 3-18 3q-27 0-45.5-18.5T64 64.5T83 19t45-19t45 19t19 45q0 8-3 18l144 143q88-33 179-33t179 33L835 82q-3-10-3-18q0-26 18.5-45t45-19T941 19t19 45.5t-19 45t-45 18.5M256 448q-26 0-45 19t-19 45.5t19 45t45 18.5t45-18.5t19-45t-19-45.5t-45-19m511.5 128q26.5 0 45.5-18.5t19-45t-19-45.5t-45-19t-45 19t-19 45.5t18.5 45t45 18.5"></svg:path>`,
})
export class WhhAndroidIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAngleIcon],svg[whh-angle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.06 1024h-896q-26 0-45-18.5T.06 960V64q0-26 19-45t45.5-19t45 19t18.5 45v832h832q27 0 45.5 19t18.5 45.5t-18.5 45t-45.5 18.5m-768-885V74q194 28 357 133t268 268t133 357h-65q-27-176-123.5-324.5t-245-245T192.06 139"></svg:path>`,
})
export class WhhAngleIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAngrybirdsIcon],svg[whh-angrybirds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1025 640q0 109-68 203q9 53-9 49q-5-1-13-9q-1-1-3.5-3t-2.5-3q-63 69-155 108t-197 39q-157 0-278-83T142 730q-81-14-124-32q-10-5-14.5-10t-2-12T7 663.5T18 648l5-5q1-1 5.5-7.5T34 628t5.5-6t6-6l6-4l7-3l7-.5l9 .5l9.5 4q15 6 45 25q0-16 2-32q-26-23-53.5-54T40 506q-3-4-4.5-7.5T33 492t0-6t1.5-5t3.5-4.5t4-3.5t5.5-3.5t6-3t7.5-3t7-3.5q2-1 8.5-4t8-3.5t7-2.5t7.5-2t6.5-.5t7 1t6 3t6.5 5t6 8.5q8 12 23 42q36-100 116.5-180.5T454 212q-22-6-53.5-6t-52.5-2t-27-12q-3-5-4.5-8.5t-1.5-7v-6l2.5-5.5l3.5-4.5l6-4.5l7-4.5l9-5l9-4.5q25-13 54-14t58 9t55 23.5t51 31.5h7q6 0 34 2l-2-2q-13-26-38-51.5T529.5 97T513 64q0-26 19-45t45-19q33 0 63 19.5t51 48t38 63t25.5 62T767 241q104 55 174 153l20-10l64 96l-31 12q31 76 31 148M897 800q0-14-45-55t-59-41q-21 0-54.5 9.5T705 736q0 11 5 18t16.5 10t19.5 3.5t23 .5q33 0 100 29q28 13 28 3m-120 96q24 0 79-55q-25-8-55.5-15.5t-69-15T680 800q14 30 48 63t49 33m132-373l-133 51q-7 17-7 34q0-17-7-34l-133-51q-24 13-38 35.5T577 608q0 40 28 68t68 28t68-28t28-68q0 40 28 68t68 28t68-28t28-68q0-27-14-49.5T909 523m-44 117q-13 0-22.5-9.5T833 608t9.5-22.5T865 576t22.5 9.5T897 608t-9.5 22.5T865 640m-192 0q-13 0-22.5-9.5T641 608t9.5-22.5T673 576t22.5 9.5T705 608t-9.5 22.5T673 640"></svg:path>`,
})
export class WhhAngrybirdsIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAntennaIcon],svg[whh-antenna-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m865.417 119l-353 467v374q0 26-18.5 45t-45.5 19t-45.5-19t-18.5-45V586l-353-467q-31-19-31-55q0-26 19-45t45-19h768q27 0 45.5 19t18.5 45q0 36-31 55m-153 9h-200v265zm-328 0h-200l200 265z"></svg:path>`,
})
export class WhhAntennaIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAntivirusIcon],svg[whh-antivirus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024.68 1024h-43l-188-188l-46 46q-14 14-33.5 14t-33.5-14l-410-410q-14-14-14-34t14-34l46-45l-163-163l-46 46q-14 14-33.5 14t-33.5-14l-26-26q-14-14-14-34t14-34l134-134q14-14 34-14t34 14l26 26q14 14 14 33.5t-14 33.5l-46 46l163 162l45-45q14-14 34-14t34 14l410 410q14 14 14 33.5t-14 33.5l-46 46l188 188z"></svg:path>`,
})
export class WhhAntivirusIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAntivirusaltIcon],svg[whh-antivirusalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M934 934q-90 90-217 90t-216-90L90 523Q0 434 0 307T90 90T307 0t216 90l411 411q90 89 90 216t-90 217m-94-365L624 353L353 624l216 216q56 56 135.5 56T840 840t56-135.5T840 569"></svg:path>`,
})
export class WhhAntivirusaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhApacheIcon],svg[whh-apache-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M991.998 1024q-25 0-52-1q-414-11-637.5-176t-236.5-460q-66-171-66-355q0-13 9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5v6q-9 15-4 32q2 15 8 40q4 42 11 84q2 0 5 1t4 1q78 322 168 412q60 61 110 106t112.5 91.5t127.5 78t130 44.5h64q-11-6-29.5-16.5t-75-47t-111.5-78t-128.5-107t-135.5-135.5q-79-89-151-307q45 34 87 83q92 108 246 257.5t299.5 266t190.5 116.5q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5"></svg:path>`,
})
export class WhhApacheIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhApertureIcon],svg[whh-aperture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M725 654q6-10 9-14l221-384q69 119 69 256q0 28-4 63zm38-192l-4-16L645 18q165 44 270 179zM654 299q-11-7-14-9L256 69Q375 0 512 0q28 0 63 4zm-192-38l-16 4L18 379q44-165 179-270zM299 370q-7 11-9 14L69 768Q0 649 0 512q0-28 4-63zm-38 192q3 13 4 16l114 428q-165-44-270-179zm109 163q11 7 14 9l384 221q-119 69-256 69q-28 0-63-4zm192 38q14-3 16-4l428-114q-44 165-179 270z"></svg:path>`,
})
export class WhhApertureIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAppleIcon],svg[whh-apple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640.674 1024q-32 0-51-5t-25-11t-18.5-11t-33.5-5t-33.5 5t-18.5 11t-25 11t-51 5q-38 0-89-29t-102-80.5t-94.5-115t-71-140T.674 512q0-68 19.5-122.5t51-89.5t75-59t88.5-35t94-13q-61-36-78-46q-39-20-69.5-55.5t-41.5-61.5l-11-25q5-1 12.5-2t31-2t45.5.5t51.5 9t54.5 20.5q45 24 104.5 75.5t92.5 95.5q13-106 56-170q2-3 6.5-10.5t7-11t7.5-7t11-3.5q13 0 22.5 9.5t9.5 22.5q0 19-51 185q35-25 83-25q51 0 98.5 9t94.5 32.5t81.5 58.5t56 92t21.5 128t-27.5 147.5t-71 140t-94.5 115t-102 80.5t-89 29m-320-192q0-32-32-96t-32-96q0-35 32-104t32-88v-6q0-24-.5-36.5t-3.5-32t-9.5-29t-19-17t-31.5-7.5q-31 0-61 36t-48.5 87.5t-18.5 97.5q0 60 25.5 127.5t59 115.5t64 80t43.5 32q14 0 14-5.5t-7-23.5t-7-35"></svg:path>`,
})
export class WhhAppleIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAppointmentIcon],svg[whh-appointment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M800.712 1024q-93 0-158.5-65.5t-65.5-158.5t65.5-158.5t158.5-65.5t158.5 65.5t65.5 158.5t-65.5 158.5t-158.5 65.5m128-256h-96v-96q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v128q0 12 7.5 20.5t18.5 10.5q2 1 6 1h128q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m-448 64h-192q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m-192-192h192q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5m320-64h-320q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h320q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m128-128h-448q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h448q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m0-256h-448q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h448q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m0 128h-448q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h448q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m96-224q0-13-9.5-22.5t-22.5-9.5h-640q-13 0-22.5 9.5t-9.5 22.5v32q27 0 45.5 18.5t18.5 45.5t-18.5 45.5t-45.5 18.5v64q27 0 45.5 18.5t18.5 45.5t-18.5 45.5t-45.5 18.5v64q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19v64q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19v32q0 13 9.5 22.5t22.5 9.5h416v64h-448q-26 0-45-19t-19-45v-64q-26 0-45-19t-19-45.5t19-45t45-18.5v-64q-26 0-45-19t-19-45.5t19-45t45-18.5v-64q-26 0-45-18.5t-19-45.5t19-45.5t45-18.5v-64q-26 0-45-18.5t-19-45.5t19-45.5t45-18.5V64q0-27 19-45.5t45-18.5h704q26 0 45 18.5t19 45.5v448h-64z"></svg:path>`,
})
export class WhhAppointmentIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhArchIcon],svg[whh-arch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 832V704h192v128zm0-320v-3l187-64q5 38 5 67v128H832zm-46-165l138-138q58 79 83 173l-182 62q-11-51-39-97M651 224l59-184q98 41 173 120L747 296q-41-45-96-72m-139-32q-39 0-79 10L374 19Q444 0 512 0t137 19l-58 183q-40-10-79-10M277 296L141 160q75-79 173-120l59 184q-55 27-96 72m-78 148L17 382q25-94 83-173l138 138q-28 46-39 97m-7 68v128H0V512q0-29 5-67l187 64zm0 320H0V704h192zm0 64v128H0V896zm832 0v128H832V896z"></svg:path>`,
})
export class WhhArchIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhArchiveIcon],svg[whh-archive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-630-359l213 217q14 14 33 14t33-14l213-217q12-13 8-19t-19-6h-107V512q0-27-18.5-45.5t-45.5-18.5h-128q-27 0-45.5 18.5t-18.5 45.5v128h-108q-15 0-18.5 6t8.5 19m630-505q0-13-9.5-22.5t-22.5-9.5h-704q-13 0-22.5 9.5t-9.5 22.5v128q0 13 9.5 22.5t22.5 9.5h704q13 0 22.5-9.5t9.5-22.5z"></svg:path>`,
})
export class WhhArchiveIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhArchlinuxIcon],svg[whh-archlinux-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 640q17 17 63 61t83.5 82t69.5 76q80 141 104 165q-51-51-153.5-105.5T640 843V730q0-64-37.5-109T512 576t-90.5 45T384 730v113q-128 21-230.5 75.5T0 1024q33-33 155.5-257.5T375 329q67 49 137 119q-37-74-122-151Q477 102 502 0h20q28 115 124.5 324.5T855 742q-82-68-151-102"></svg:path>`,
})
export class WhhArchlinuxIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhArrowdownIcon],svg[whh-arrowdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M467 1004L19 553Q0 534 0 507t19-45l90-92q19-19 45.5-19t45.5 19l184 185V64q0-26 18.5-45T448 0h127q27 0 45.5 19T639 64v492l185-186q19-19 45.5-19t45.5 19l90 92q19 18 19 45t-19 46l-448 451q-18 19-45 19t-45-19"></svg:path>`,
})
export class WhhArrowdownIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhArrowleftIcon],svg[whh-arrowleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 468L471 19q19-19 45.5-19T562 19l92 91q19 19 19 45.5T654 201L468 385h492q27 0 45.5 18.5T1024 449v128q0 26-18.5 45T960 641H467l187 185q19 18 19 45t-19 45l-92 91q-19 19-45.5 19t-45.5-19L19 559Q0 540 0 513.5T19 468"></svg:path>`,
})
export class WhhArrowleftIcon {
  readonly viewBox = input("0 0 1024 1026")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhArrowrightIcon],svg[whh-arrowright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1005 558l-452 448q-19 19-45.5 19t-45.5-19l-92-91q-19-18-19-45t19-45l186-184H64q-27 0-45.5-19T0 577V449q0-27 18.5-45.5T64 385h493L370 200q-19-19-19-45.5t19-45.5l92-91q19-18 45.5-18T553 18l452 449q19 19 19 45.5t-19 45.5"></svg:path>`,
})
export class WhhArrowrightIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhArrowupIcon],svg[whh-arrowup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m557 19l448 452q19 19 19 45.5t-19 45.5l-90 91q-19 19-45.5 19T824 653L640 468v491q0 27-18.5 45.5T576 1023H449q-27 0-45.5-18.5T385 959V467L200 653q-19 19-45.5 19T109 653l-90-91Q0 543 0 516.5T19 471L467 19q18-19 45-19t45 19"></svg:path>`,
})
export class WhhArrowupIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAsteriskIcon],svg[whh-asterisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m981 549l-249 36l185 190q15 21 11 47t-24 41l-196 149q-20 15-44.5 11T624 998L513 765L402 998q-15 21-39.5 25t-44.5-11L122 863q-20-15-24-41t11-47l185-190l-249-36q-25-8-37-31t-4-47l79-236q8-25 31.5-36.5T163 195l197 99l-39-230q0-26 19-45t45-19h256q26 0 45 19t19 45l-39 230l197-99q25-8 48.5 3.5T943 235l79 236q8 24-4 47t-37 31"></svg:path>`,
})
export class WhhAsteriskIcon {
  readonly viewBox = input("0 0 1026 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAsteroidIcon],svg[whh-asteroid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M566 503q-9 9-22.5 9t-22.5-9t-9-22.5t9-22.5L970 9q9-9 22-9t22.5 9.5T1024 32t-9 22zm-192-64q-9 9-22.5 9t-22.5-9t-9-22.5t9-22.5L714 9q9-9 22-9t22.5 9.5T768 32t-9 22zm138 329q0 106-75 181t-181 75t-181-75T0 768t75-181t181-75t181 75t75 181m458-503q9-9 22-9t22.5 9.5t9.5 22.5t-9 22L630 695q-9 9-22.5 9t-22.5-9t-9-22.5t9-22.5z"></svg:path>`,
})
export class WhhAsteroidIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAstronautIcon],svg[whh-astronaut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.424 622q-4 210-109 306t-339 96t-339-96t-109-306q-29-16-46.5-45.5T.424 512V384q0-35 17.5-64t46.5-46V32q0-13 9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5v186q60-100 162-159t222-59q133 0 242 71t163 187q46 8 76.5 43.5t30.5 82.5v128q0 35-17.5 64.5t-46.5 45.5m-448-558q-104 0-192.5 51.5t-140 140t-51.5 192.5t51.5 192.5t140 140t192.5 51.5t192.5-51.5t140-140t51.5-192.5t-51.5-192.5t-140-140t-192.5-51.5m-320 384q0-87 43-160.5t116.5-116.5t160.5-43t160.5 43t116.5 116.5t43 160.5q0 37-9 66t-23.5 49t-38.5 34.5t-48.5 22.5t-60 12.5t-66.5 6t-74 1.5t-74-1.5t-66.5-6t-60-12.5t-48.5-22.5t-38.5-34.5t-23.5-49t-9-66m315-237.5q-12-18.5-46.5-18t-72.5 19.5t-56.5 45t-6.5 44.5t46.5 18t72.5-19.5t56.5-45t6.5-44.5"></svg:path>`,
})
export class WhhAstronautIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAtIcon],svg[whh-at-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 704q-29 64-96 64H736q-25 0-43-16.5T673 711q-71 57-161 57q-106 0-181-75t-75-181t75-181t181-75q99 0 173 67q10-3 19-3q27 0 45.5 19t18.5 45v256h105q23-64 23-128q0-104-51.5-192.5t-140-140T512 128t-192.5 51.5t-140 140T128 512t51.5 192.5t140 140T512 896h192q27 0 45.5 18.5T768 960t-18.5 45.5T704 1024H512q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199q0 62-6.5 105T992 704M512 384q-53 0-90.5 37.5T384 512t37.5 90.5T512 640t90.5-37.5T640 512t-37.5-90.5T512 384"></svg:path>`,
})
export class WhhAtIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAtariIcon],svg[whh-atari-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 896q-103 0-184.5-52T683 705t-43-193V32q0-13 9.5-22.5T672 0t22.5 9.5T704 32v352q0 73 20.5 137.5t53 108.5t71.5 76t76 47t67 15q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5T992 896m-448 0h-64q-13 0-22.5-9.5T448 864V32q0-13 9.5-22.5T480 0h64q13 0 22.5 9.5T576 32v832q0 13-9.5 22.5T544 896m-512 0q-13 0-22.5-9.5T0 864v-64q0-13 9.5-22.5T32 768q30 0 67-15t76-47t71.5-76t53-108.5T320 384V32q0-13 9.5-22.5T352 0t22.5 9.5T384 32v480q0 106-43 193T216.5 844T32 896"></svg:path>`,
})
export class WhhAtariIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAtomIcon],svg[whh-atom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M879 754q-26 45-86.5 64.5T649 830q-36 91-88.5 142.5t-112 51.5t-112-52T248 830q-83 8-143.5-11.5T18 754Q-9 705 5.5 643T73 512Q20 443 5.5 381T18 270q26-45 87-64.5T248 194q36-91 88.5-142.5T448.5 0t112 51.5T649 194q83-8 143.5 11.5T879 270q28 48 13 110.5T824 512q53 69 68 131t-13 111m-58-36q36-60-37-159q-40 43-88 81q-8 66-26 127q117 7 151-49M273 333q26-17 51-31q5-2 38-19q-39-12-73-18q-10 34-16 68m84 26q-50 28-96 61q-4 45-4 92q0 41 4 93q47 33 96 60q43 24 91 44q52-22 93-44q50-28 96-61q4-46 4-92q0-40-5-93q-47-33-95-60q-44-24-92-44q-52 22-92 44M194 473q-20 17-41 39q20 21 41 39q-1-29-1-39q0-16 1-39m431 218q-28 17-52 31l-38 19q38 12 73 18q10-34 17-68m79-140q20-18 40-39q-19-20-41-39q2 33 2 39q0 10-1 39M449 960q40 0 76-36.5T587 822q-66-13-139-41q-72 28-138 41q27 65 63 101.5t76 36.5m-88-219q-23-11-37-19q-23-13-51-31q7 40 16 68q31-5 72-18M76 718q35 56 151 49q-17-59-26-127q-48-38-88-80q-72 99-37 158m0-412q-35 60 37 158q40-42 88-80q8-66 26-127q-116-7-151 49M449 64q-40 0-76 36.5T310 202q67 13 139 41q73-28 138-41q-27-65-62.5-101.5T449 64m88 219q21 11 36 19q22 13 51 31q-7-39-15-68q-30 5-72 18m284 23q-34-56-151-49q17 59 26 127q48 38 88 80q72-98 37-158"></svg:path>`,
})
export class WhhAtomIcon {
  readonly viewBox = input("0 0 898 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAtozIcon],svg[whh-atoz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M741 959h251q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5H672q-13 0-22.5-9t-9.5-23q0-6 4-12.5t6.5-8T661 961l263-322H672q-13 0-22.5-9t-9.5-22.5t9.5-23T672 575h320q11 0 21.5 9.5T1024 607q0 10-20 30zm251-511q-13 0-22.5-9.5T960 416v-80q0-7-4.5-11.5T944 320H720q-6 0-11 4.5t-5 11.5v80q0 13-9 22.5t-22.5 9.5t-23-9.5T640 416V128q0-53 37.5-90.5T768 0h128q53 0 90.5 37.5T1024 128v288q0 13-9.5 22.5T992 448m-32-320q0-27-19-45.5T896 64H768q-26 0-45 18.5T704 128v112q0 6 5 11t11 5h224q7 0 11.5-5t4.5-11zm-742 887q-11 8-26 8t-26-8L11 808q-11-8-11-20t11-20h118V64q0-27 18.5-45.5t45-18.5T238 18.5T257 64v704h116q11 8 11 20t-11 20z"></svg:path>`,
})
export class WhhAtozIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAuthenticationIcon],svg[whh-authentication-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M641.325 1024q-104.5 0-193-51.5T308.825 833t-51-193q0-82 35-159h-67V321h-62l-34-35v-61h-61l-3-3v-61h-57q-8-16-6-33h-2V0h128v2q28-3 47 15l284 285q85-45 181-45q105 0 193 51t139.5 139.5t51.5 193t-51.5 192.5t-139.5 139.5t-192.5 51.5M98.825 33l-33 33l319 319l33-33zm606 543q-53 0-90.5 37.5t-37.5 90.5t37.5 90.5t90.5 37.5t90.5-37.5t37.5-90.5t-37.5-90.5t-90.5-37.5"></svg:path>`,
})
export class WhhAuthenticationIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAutoflashIcon],svg[whh-autoflash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M853.428 768h171l-352 256l-160-256h149l64-192h-341l192-576h192l-149 448h341zm-565-256q-13 0-22.5-9.5t-9.5-22.5V336q0-7-5-11.5t-11-4.5h-160q-7 0-11.5 4.5t-4.5 11.5v144q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5V128q0-53 37.5-90.5t90.5-37.5h64q53 0 90.5 37.5t37.5 90.5v352q0 13-9.5 22.5t-22.5 9.5m-32-384q0-27-19-45.5t-45-18.5h-64q-27 0-45.5 18.5t-18.5 45.5v112q0 7 4.5 11.5t11.5 4.5h160q6 0 11-4.5t5-11.5z"></svg:path>`,
})
export class WhhAutoflashIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAutomobileIcon],svg[whh-automobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 750v82q0 27-18.5 45.5t-45 18.5t-45.5-18.5t-19-45.5v-64H192v64q0 27-18.5 45.5t-45 18.5T83 877.5T64 832v-82q-29-17-46.5-46T0 640V448q0-28 23-64.5T81 314l47-186q0-53 37.5-90.5T256 0h512q53 0 90.5 37.5T896 128l47 186q35 33 58 69.5t23 64.5v192q0 35-17.5 64T960 750M128 576.5q0 26.5 18.5 45t45 18.5t45.5-18.5t19-45t-19-45.5t-45.5-19t-45 19t-18.5 45.5M800 192q0-26-18.5-45T736 128H288q-26 0-45 19t-19 45l-32 128q0 27 18.5 45.5T256 384h512q27 0 45.5-18.5T832 320zm32.5 320q-26.5 0-45.5 19t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45t-18.5-45.5t-45-19"></svg:path>`,
})
export class WhhAutomobileIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAutorespondIcon],svg[whh-autorespond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M855.048 768h-87l-256 256V768h-343q-57 0-113-57t-56-115V172q0-58 56-115t113-57h686q57 0 113 57t56 115v424q0 58-56 115t-113 57m-343-640q-92 0-164 60l-60-60q-13 0-22.5 9.5t-9.5 22.5v128q0 13 9.5 22.5t22.5 9.5h128q13 0 22.5-9.5t9.5-22.5l-54-54q52-42 118-42q80 0 136 56.5t56 136t-56.5 135.5t-135.5 56q-55 0-101-29t-70-77l-58 28q32 64 93.5 103t135.5 39q106 0 181-75t75-181t-75-181t-181-75"></svg:path>`,
})
export class WhhAutorespondIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAvatarIcon],svg[whh-avatar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1024V0h1024v1024zM960 64H64v768h896zM448 547v-13q-67-22-97.5-90T320 279q0-74 53.5-112.5T512 128t138.5 38.5T704 279q0 217-128 256v12q113 10 183.5 53T832 714q0 10-8.5 18t-26 13.5t-36 9.5t-47 6.5t-50 4t-54.5 2t-50.5.5h-95l-50.5-.5l-54.5-2l-50-4l-47-6.5l-36-9.5l-26-13.5l-8.5-18q2-71 72.5-114T448 547"></svg:path>`,
})
export class WhhAvatarIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAvataraltIcon],svg[whh-avataralt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024v-64q0-62-24-109t-68.5-76.5t-101-46.5t-126.5-22v-16q81-34 136.5-137.5t55.5-215.5q0-103-71.5-156t-184.5-53t-184.5 53t-71.5 156q0 109 57 212t135 139v18q-70 5-126.5 22t-101 46.5t-68.5 76.5t-24 109v64q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5"></svg:path>`,
})
export class WhhAvataraltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAvengersIcon],svg[whh-avengers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m64-134V768H320l-29 58q100 70 221 70q30 0 64-6M384 640h192V256zM128 512q0 109 58 203l293-585q-148 12-249.5 122T128 512m576-332v664q88-51 140-139t52-193t-52-193t-140-139"></svg:path>`,
})
export class WhhAvengersIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAvocadoIcon],svg[whh-avocado-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M386 1028q-81 0-150.5-21T113 946.5T30 844T0 702q0-60 17-127t38.5-118T109 329t51-134q28-82 88.5-138.5T385 0t136.5 56.5T610 195q19 56 51.5 134t54 129.5T754 577t17 126q0 104-52.5 179T580 992.5T386 1028m192-739q-11-36-30-73t-43.5-72t-56-57.5t-63-22.5t-63 22t-56.5 57t-43.5 72.5T193 289q-20 61-55 145.5t-54.5 142T64 679q0 91 44 156.5t115.5 97t162 31.5t162-31t115-96.5T707 679q0-45-19-102t-54.5-142.5T578 289M385.5 899q-79.5 0-136-56.5T193 706q0-54 25.5-113t71-101.5t96-42.5t96.5 42.5T553 593t25 113q0 80-56.5 136.5t-136 56.5"></svg:path>`,
})
export class WhhAvocadoIcon {
  readonly viewBox = input("0 0 771 1028")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAwstatsIcon],svg[whh-awstats-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 1024H64q-26 0-45-18.5T0 960t19-45.5T64 896h896q26 0 45 18.5t19 45t-19 45.5t-45 19m-32-192H64l176-330q5-9 16-12.5t21 .5v-1q-4-3-3-3q2 0 9 6q8 6 11 15l35 35l185-263q2-9 7-14q9-9 23-9q13 0 23 9q0 1 1 2.5l1 1.5l89 72L898 22q8-22 30-22h1q13 0 22 9t9 22v769q0 13-9.5 22.5T928 832"></svg:path>`,
})
export class WhhAwstatsIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhAxeIcon],svg[whh-axe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1014 963l-51 51q-10 10-24.5 10t-25.5-10L336 436q-16 37-16 76q0 59 34 108q-48 20-98 20q-106 0-181-75T0 384q0-49 20-97q49 33 108 33q40 0 76-16L74 175q-10-11-10-25.5T74 125l51-51q10-10 24.5-10T175 74l129 130q16-37 16-76q0-59-33-108q47-20 97-20q106 0 181 75t75 181q0 50-20 98q-49-34-108-34q-39 0-76 16l578 577q10 11 10 25.5t-10 24.5"></svg:path>`,
})
export class WhhAxeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBIcon],svg[whh-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 704v64q0 106-75 181t-181 75H64q-27 0-45.5-18.5T0 960V64q0-26 18.5-45T64 0h448q106 0 181 75t75 181v64q0 56-23.5 106T681 512q40 36 63.5 86T768 704M640 256q0-53-37.5-90.5T512 128H160q-13 0-22.5 9.5T128 160v256q0 13 9.5 22.5T160 448h352q53 0 90.5-37.5T640 320zm0 448q0-53-37.5-90.5T512 576H160q-13 0-22.5 9.5T128 608v256q0 13 9.5 22.5T160 896h352q53 0 90.5-37.5T640 768z"></svg:path>`,
})
export class WhhBIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBUpperCaseIcon],svg[whh-b-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 704v64q0 106-75 181t-181 75H64q-27 0-45.5-18.5T0 960V64q0-26 18.5-45T64 0h448q106 0 181 75t75 181v64q0 56-23.5 106T681 512q40 36 63.5 86T768 704M640 256q0-53-37.5-90.5T512 128H160q-13 0-22.5 9.5T128 160v256q0 13 9.5 22.5T160 448h352q53 0 90.5-37.5T640 320zm0 448q0-53-37.5-90.5T512 576H160q-13 0-22.5 9.5T128 608v256q0 13 9.5 22.5T160 896h352q53 0 90.5-37.5T640 768z"></svg:path>`,
})
export class WhhBUpperCaseIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBabyIcon],svg[whh-baby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M751.5 622.5Q734 640 709.5 640T667 622L513 467v173H257V467L102 622q-18 18-42.5 18t-42-17.5T0 580t17-42l144-154q64-64 224-64t224 64l143 154q17 17 17 42t-17.5 42.5M384.5 256q-53.5 0-91-37.5T256 128t37.5-90.5t91-37.5t91 37.5T513 128t-37.5 90.5t-91 37.5M82 785q3-2 13-8l118-100l125 90l-112 74l76 77q18 18 18 43.5t-18 44t-44 18.5t-44-18L82 874q-18-19-18-44.5T82 785m385 133l76-77l-112-74l125-90l118 100q10 6 13 8q18 19 18 44.5T687 874l-132 132q-18 18-44 18t-44-18t-18-44t18-44"></svg:path>`,
})
export class WhhBabyIcon {
  readonly viewBox = input("0 0 769 1024")
  readonly width = input("0.76em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBackupIcon],svg[whh-backup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.712 1024h-832q-26 0-45-19t-19-45v-64h-32q-13 0-22.5-9.5T.712 864V672q0-13 9.5-22.5t22.5-9.5h32V384h-32q-13 0-22.5-9.5T.712 352V160q0-13 9.5-22.5t22.5-9.5h32V64q0-27 19-45.5t45-18.5h832q26 0 45 18.5t19 45.5v896q0 26-19 45t-45 19m-64-832q0-27-18.5-45.5t-45.5-18.5h-576q-27 0-45.5 19t-18.5 45v640q0 26 18.5 45t45.5 19h576q26 0 45-19t19-45zm-128 640h-448q-27 0-45.5-19t-18.5-45V256q0-26 18.5-45t45.5-19h448q26 0 45 19t19 45v512q0 27-19 45.5t-45 18.5m-192-448q-53 0-90.5 37.5t-37.5 90.5t37.5 90.5t90.5 37.5t90.5-37.5t37.5-90.5t-37.5-90.5t-90.5-37.5m-.5 192q-26.5 0-45-18.5t-18.5-45t18.5-45.5t45-19t45.5 18.5t19 45.5t-19 45.5t-45.5 18.5"></svg:path>`,
})
export class WhhBackupIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBackupaltIcon],svg[whh-backupalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.06 1024h-896q-26 0-45-19t-19-45V64q0-26 19-45t45-19h896q27 0 45.5 19t18.5 45v896q0 27-18.5 45.5t-45.5 18.5m-64-832q0-27-18.5-45.5t-45.5-18.5h-640q-26 0-45 18.5t-19 45.5v64h-32q-13 0-22.5 9.5t-9.5 22.5v128q0 13 9.5 22.5t22.5 9.5h32v128h-32q-13 0-22.5 9.5t-9.5 22.5v128q0 13 9.5 22.5t22.5 9.5h32v64q0 27 19 45.5t45 18.5h640q27 0 45.5-18.5t18.5-45.5zm-128 640h-512q-26 0-45-19t-19-45h96q13 0 22.5-9.5t9.5-22.5V608q0-13-9.5-22.5t-22.5-9.5h-96V448h96q13 0 22.5-9.5t9.5-22.5V288q0-13-9.5-22.5t-22.5-9.5h-96q0-27 19-45.5t45-18.5h512q27 0 45.5 19t18.5 45v512q0 27-18.5 45.5t-45.5 18.5m-192-448q-53 0-90.5 37.5t-37.5 90.5t37.5 90.5t90.5 37.5t90.5-37.5t37.5-90.5t-37.5-90.5t-90.5-37.5m.5 192q-26.5 0-45.5-19t-19-45t19-45t45.5-19t45 18.5t18.5 45.5t-18.5 45.5t-45 18.5m-320.5-224q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5m-96 288h64q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5"></svg:path>`,
})
export class WhhBackupaltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBackupwizardIcon],svg[whh-backupwizard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1004.504 1005q-19 19-45 20t-44-17l-193-194q-18-18-17-44t20-45t45-20t44 17l193 194q18 18 17 44t-20 45m-428-748v228l-193-194l33-33l-89-12l-25-53h210q27 0 45.5 18.5t18.5 45.5m-320-64h18l-24 53l-58 8q1-26 19.5-43.5t44.5-17.5m0 384q-26 0-45-19t-19-45V290l34 33l-17 94l73-43l202 203zm384-384q0-27-18.5-46t-45.5-19h-384q-26 0-45 19t-19 46v384q0 26 19 45t45 19h356l128 128h-612q-26 0-45-19t-19-45V64q0-26 19-45t45-19h640q27 0 45.5 19t18.5 45v613l-128-128z"></svg:path>`,
})
export class WhhBackupwizardIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBackwardIcon],svg[whh-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M962 1014L527 551q-15-16-15-38.5t15-37.5L962 11q25-26 62 14v977q-37 39-62 12m-512 0L15 551Q0 535 0 512.5T15 475L450 11q25-26 62 14v977q-37 39-62 12"></svg:path>`,
})
export class WhhBackwardIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBaconIcon],svg[whh-bacon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 832q-3-22-24-74.5T902 692q-47-46-96.5-79.5t-83.5-48t-68-32t-53-36.5q-45-45-74.5-91.5T475 318t-51-68q-44-44-67.5-66t-58-51T236 89t-54-19l70-70q27 4 55 19t62.5 44t58 51.5T495 180q29 28 51 68t51.5 86.5T672 426q22 22 69 51t109.5 73.5T972 654q14 13 31.5 57.5T1024 778zM566 531q18 19 52 36.5t68 32t84 48t96 79.5q8 8 16 35.5t17.5 64T918 883l-36 36q-1-12-16-29.5T826 850t-27-24q-78-77-163.5-158.5T530 566q-57-57-133-136T290 320q-29-28-55.5-63t-41-56.5t-36-38.5t-46.5-22l35-35q27 5 55 19.5t62.5 43.5t58 51.5T389 285q28 28 50.5 68t52 86.5T566 531m-71 70q19 19 104.5 101T764 861q2 3 26.5 24.5t40 39T847 954l-71 70q-3-23-20.5-67T725 900q-59-59-121.5-103.5T494 723t-70-52q-45-44-74-91t-51.5-86.5T248 426q-79-78-138-122.5T0 250l75-75q26 5 47.5 22t35.5 38.5t41 56.5t55 64q32 31 108 110t133 135"></svg:path>`,
})
export class WhhBaconIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBagIcon],svg[whh-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 1025h-64V257h64q27 0 45.5 18.5T1024 321v640q0 26-18.5 45t-45.5 19m-128 0H192V257h64v-64q0-80 56-136.5T448 0h128q80 0 136 56.5T768 193v64h64zM640 193q0-27-19-45.5T576 129H448q-27 0-45.5 18.5T384 193v64h256zM0 961V321q0-27 18.5-45.5T64 257h64v768H64q-27 0-45.5-19T0 961"></svg:path>`,
})
export class WhhBagIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBaitIcon],svg[whh-bait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M855 599q-57 58-126.5 97.5t-135.5 56T466 767t-107-24q-39 62-39 89q0 31 3 54t10.5 36.5t14 21.5t20.5 11.5t22.5 4t25.5.5q36 0 96-64q0 47-52.5 87.5T352 1024q-66 0-113-47t-47-113q0-17 5-37q-20 5-37 5q-66 0-113-47T0 672q0-55 40.5-107.5T128 512q-64 60-64 96q0 17 .5 25.5t4 22.5T80 676.5t21.5 14T138 701t54 3q27 0 89-40q-22-45-24-106t15-127t56.5-135.5T425 169q75-75 166-118.5T768 0v192q0 27 18.5 45.5T832 256h192q-7 86-50.5 177T855 599M575.5 256q-26.5 0-45 18.5T512 320t18.5 45.5t45 18.5t45.5-18.5t19-45.5t-19-45.5t-45.5-18.5"></svg:path>`,
})
export class WhhBaitIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBaloonIcon],svg[whh-baloon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M412 891q76 77 95 133H261q19-56 94-133q-49-13-111.5-67t-116-125.5T37 541T0 384q0-104 51.5-192.5t140-140T384 0t192.5 51.5t140 140T768 384q0 71-37 157t-90.5 157.5t-116 125.5T412 891M255 195q-38-11-74 16t-48 76q-14 48-5 168.5T160 576q14 0 23-32.5t18.5-73.5t22.5-54q5-5 20-19.5t23.5-23.5t20-21.5t18.5-24t9-22.5q23-87-60-110"></svg:path>`,
})
export class WhhBaloonIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBambooIcon],svg[whh-bamboo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M864 512h-32v320h32q13 0 22.5 9.5T896 864t-9.5 22.5T864 896h-32v128H576V896h-32q-13 0-22.5-9.5T512 864t9.5-22.5T544 832h32V512h-32q-13 0-22.5-9.5T512 480t9.5-22.5T544 448h32v-64q0-49 20.5-99t48-83t53-53.5T736 128q12 0 28.5 20.5t31.5 54t25.5 82.5t10.5 99v64h32q13 0 22.5 9.5T896 480t-9.5 22.5T864 512M736 224q-7 0-22 10.5t-32 27t-29.5 41T640 352q0 50 17.5 73t46.5 23q27 0 45.5-37.5T768 320q0-49-9.5-72.5T736 224M352 704q13 0 22.5 9.5T384 736t-9.5 22.5T352 768h-32v256H64V768H32q-13 0-22.5-9.5T0 736t9.5-22.5T32 704h32V384H32q-13 0-22.5-9.5T0 352t9.5-22.5T32 320h32v-64q0-50 10.5-99T100 74.5t31.5-54T160 0q13 0 38.5 20.5t53 53.5t48 83t20.5 99v64h32q13 0 22.5 9.5T384 352t-9.5 22.5T352 384h-32v320zM160 96q-14 0-23 23.5t-9 72.5q0 53 18.5 90.5T192 320q29 0 46.5-23t17.5-73q0-25-12.5-49.5t-29.5-41t-32-27T160 96"></svg:path>`,
})
export class WhhBambooIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBananaIcon],svg[whh-banana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M859 839q-41 52-81 90.5t-70 58t-55 28.5t-40.5 8t-23.5-8q-12-11-12.5-45.5T587 896t30-66q77-100 128-227q-65 80-140 137.5T458 818q-63 16-121 14.5T237.5 819T192 791q-4-14 38-50t96-68.5t83-40.5q22-6 66-51q-122 59-219 59q-46 0-94-10.5T79.5 604t-57-31.5T0 544q0-23 102.5-59.5T256 448q31 0 112.5-52.5T538 266t134-138q24-32 79-30q20-58 20-98h61q0 34-1 64v1l.5-.5l.5-.5q45 22 74 65h1l1 1q71 32 98.5 119t14 191T964 652T859 839"></svg:path>`,
})
export class WhhBananaIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBancircleIcon],svg[whh-bancircle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1025q-104 0-199-40.5t-163.5-109T40.5 712T0 513t40.5-199t109-163.5T313 41T512 0t199 41t163.5 109.5t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5M128 513q0 104 51.5 192.5t140 140T512 897q122 0 222-71L199 291q-71 100-71 222m384-384q-121 0-221 70l535 535q70-100 70-221q0-105-51.5-193.5T704.5 180T512 129"></svg:path>`,
})
export class WhhBancircleIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBandwidthIcon],svg[whh-bandwidth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-128q26 0 45-18.5t19-45t-19-45.5t-45-19t-45 19t-19 45.5t19 45t45 18.5m270-451q-12 6-25 0t-18.5-19.5t0-27.5t18.5-19l95-43q-56-109-164-165l-43 96q-5 13-19 18.5t-27.5 0T579 267t0-26l43-97q-54-16-110-16t-110 16l43 97q6 13 0 26t-19.5 18.5t-27.5 0t-19-18.5l-43-96q-107 55-164 165l95 42q12 6 17.5 19.5t0 27.5t-18 19.5t-25.5-.5l-97-42q-16 54-16 110t16 110l97-42q13-6 25.5-.5t18 19.5t0 27.5T267 646l-96 42q22 43 56 80q96-54 240-62l194-317q9-2 17-5q7-1 13.5 2.5T699 397l5 16l-111 296q121 13 204 59q34-37 56-80l-96-43q-13-5-18.5-19t0-27.5T757 579t26 0l97 43q16-54 16-110t-16-110z"></svg:path>`,
})
export class WhhBandwidthIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBankIcon],svg[whh-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.654 257h-896q-27 0-45.5-19t-18.5-45.5t18.5-45t45.5-18.5l448-129l448 129q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19m-832 576q-27 0-45.5-19t-18.5-45V385q0-27 18.5-45.5t45.5-18.5h128q27 0 45.5 18.5t18.5 45.5v384q0 26-19 45t-45 19zm320 0q-27 0-45.5-19t-18.5-45V385q0-27 19-45.5t45-18.5h128q27 0 45.5 18.5t18.5 45.5v384q0 26-18.5 45t-45.5 19zm320 0q-26 0-45-19t-19-45V385q0-27 19-45.5t45-18.5h128q27 0 45.5 18.5t18.5 45.5v384q0 26-18.5 45t-45.5 19zm-704 64h896q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19h-896q-27 0-45.5-19t-18.5-45.5t18.5-45t45.5-18.5"></svg:path>`,
})
export class WhhBankIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBanuserIcon],svg[whh-banuser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M800 1024q-93 0-158.5-65.5T576 800t65.5-158.5T800 576t158.5 65.5T1024 800t-65.5 158.5T800 1024m160-224q0-50-29-91L709 931q41 29 91 29q66 0 113-47t47-113m-320 0q0 50 29 91l222-222q-41-29-91-29q-66 0-113 47t-47 113m-128 0q0 66 28.5 124.5T619 1024H436l-81-1l-87-2.5l-80-4.5l-75.5-8.5l-57.5-12L13.5 979L0 957q2-88 110-155.5T384 712v-33q-52-23-90-65t-60-98.5t-32-121T192 256q0-65 25-114.5t69-80t101-46T512 0t125 15.5t101 46t69 80T832 256q0 156-37 256q-118 2-200.5 86T512 800"></svg:path>`,
})
export class WhhBanuserIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBanuseraltIcon],svg[whh-banuseralt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 800q0 93-65.5 158.5T800 1024H436l-81-1l-87-2.5l-80-4.5l-75.5-8.5l-57.5-12L13.5 979L0 957q2-88 110-155.5T384 712v-33q-52-23-90-65t-60-98.5t-32-121T192 256q0-65 25-114.5t69-80t101-46T512 0t125 15.5t101 46t69 80T832 256q0 214-71 324q23-4 39-4q93 0 158.5 65.5T1024 800m-64 0q0-50-29-91L709 931q41 29 91 29q66 0 113-47t47-113M768 273q0-103-71.5-156T512 64t-184.5 53T256 273q0 68 10 125t32 106.5t60 82.5t90 46v138q-60 6-117.5 21T232 825.5t-72.5 38T112 898t-16 22q0 14 38 23t114 12t126.5 4t137.5 1q85 0 131-1q-67-66-67-159q0-6 3-28q-1-1-2-1h-1V633q192-41 192-360M640 800q0 50 29 91l222-222q-41-29-91-29q-66 0-113 47t-47 113"></svg:path>`,
})
export class WhhBanuseraltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBarchartIcon],svg[whh-barchart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 959.5q0 26.5-19 45.5t-45 19H64q-27 0-45.5-18.5T0 960t18.5-45.5T64 896V576q0-27 18.5-45.5T128 512h128q26 0 45 18.5t19 45.5v320h64V64q0-27 18.5-45.5T448 0h128q27 0 45.5 18.5T640 64v832h64V320q0-27 19-45.5t45-18.5h128q27 0 45.5 18.5T960 320v576q27 0 45.5 18.5t18.5 45"></svg:path>`,
})
export class WhhBarchartIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBarchartaltIcon],svg[whh-barchartalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.193 1024h-64q-27 0-45.5-19t-18.5-45V64q0-26 18.5-45t45.5-19h64q26 0 45 19t19 45v896q0 26-19 45t-45 19m-256 0h-64q-27 0-45.5-19t-18.5-45V320q0-26 18.5-45t45.5-19h64q26 0 45 19t19 45v640q0 26-19 45t-45 19m-256 0h-64q-27 0-45.5-19t-18.5-45V576q0-27 18.5-45.5t45.5-18.5h64q26 0 45 18.5t19 45.5v384q0 26-19 45t-45 19m-256-256q26 0 45 19t19 45.5t-19 45t-45 18.5h-64v64q0 26-19 45t-45.5 19t-45-19t-18.5-45V64q0-26 18.5-45t45.5-19h128q26 0 45 19t19 45.5t-19 45t-45 18.5h-64v128h64q26 0 45 19t19 45.5t-19 45t-45 18.5h-64v128h64q26 0 45 18.5t19 45t-19 45.5t-45 19h-64v128z"></svg:path>`,
})
export class WhhBarchartaltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBarchartascIcon],svg[whh-barchartasc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M993 1025H801q-13 0-22.5-9.5T769 993V289q0-14 9.5-23t22.5-9h192q13 0 22.5 9t9.5 23v704q0 13-9.5 22.5T993 1025m-320 0H481q-14 0-23-9.5t-9-22.5V545q0-14 9-23t23-9h192q13 0 22.5 9t9.5 23v448q0 13-9.5 22.5T673 1025m0-704L561 209L117 564q-23 15-52.5 12.5t-48-21t-15-42.5T27 474l445-355l-87-87q0-13 9-22.5T417 0h256q13 0 22.5 9.5T705 32v257q0 13-9.5 22.5T673 321M160 705h193q13 0 22.5 9.5T385 737v256q0 13-9.5 22.5T353 1025H160q-13 0-22.5-9.5T128 993V737q0-13 9.5-22.5T160 705"></svg:path>`,
})
export class WhhBarchartascIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBarchartdescIcon],svg[whh-barchartdesc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 577H736q-13 0-22.5-9.5T704 545l87-87l-444-354q-23-15-26-39t15.5-43T384 .5T436 14l445 354l111-111q13 0 22.5 9.5t9.5 22.5v256q0 13-9.5 22.5T992 577m-640-64h192q13 0 22.5 9.5T576 545v448q0 13-9.5 22.5T544 1025H352q-13 0-22.5-9.5T320 993V545q0-13 9.5-22.5T352 513m-128 512H32q-13 0-22.5-9.5T0 993V289q0-13 9.5-22.5T32 257h192q13 0 22.5 9.5T256 289v704q0 13-9.5 22.5T224 1025m448-320h192q13 0 22.5 9.5T896 737v256q0 13-9.5 22.5T864 1025H672q-13 0-22.5-9.5T640 993V737q0-13 9.5-22.5T672 705"></svg:path>`,
})
export class WhhBarchartdescIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBarcodeIcon],svg[whh-barcode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.546 1023q-26.5 0-45.5-18.5t-19-45.5V64q0-27 19-45.5t45.5-18.5t45 18.5t18.5 45.5v895q0 27-18.5 45.5t-45 18.5m-160.5 0q-13 0-22.5-9.5t-9.5-22.5V32q0-14 9.5-23t22.5-9t22.5 9t9.5 23v959q0 13-9.5 22.5t-22.5 9.5m-159.5 0q-26.5 0-45.5-18.5t-19-45.5V64q0-27 18.5-45.5t45.5-18.5t45.5 18.5t18.5 45.5v895q0 27-18.5 45.5t-45 18.5m-224.5 0q-13 0-22.5-9.5t-9.5-22.5V32q0-14 9.5-23t22.5-9t22.5 9t9.5 23v959q0 13-9.5 22.5t-22.5 9.5m-159.5 0q-26.5 0-45.5-18.5t-19-45.5V64q0-27 19-45.5t45-18.5t45 18.5t19 45.5v895q0 27-18.5 45.5t-45 18.5m-192 0q-26.5 0-45.5-18.5t-19-45.5V64q0-27 18.5-45.5T64.046 0t45.5 18.5t18.5 45.5v895q0 27-18.5 45.5t-45 18.5"></svg:path>`,
})
export class WhhBarcodeIcon {
  readonly viewBox = input("0 0 1025 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBarrelIcon],svg[whh-barrel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M800.857 640q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-32v256h32q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-768q-13 0-22.5-9.5T.857 992t9.5-22.5t22.5-9.5h32V704h-32q-13 0-22.5-9.5T.857 672t9.5-22.5t22.5-9.5h32V384h-32q-13 0-22.5-9.5T.857 352t9.5-22.5t22.5-9.5h32V64h-32q-13 0-22.5-9.5T.857 32t9.5-22.5t22.5-9.5h768q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-32v256h32q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-32v256zm-271-233l-113-151l-113 151q-47 51-47 123t47 123t113 51t113-51t47-123t-47-123"></svg:path>`,
})
export class WhhBarrelIcon {
  readonly viewBox = input("0 0 833 1024")
  readonly width = input("0.82em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBasecampIcon],svg[whh-basecamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 896q-111 0-200-13.5t-161-42T39.5 761T0 640q0-76 25.5-164.5t73.5-172t110-152t141.5-110T512 0t161.5 41.5t141.5 110t110 152t73.5 172T1024 640q0 70-39.5 121T873 840.5t-161 42T512 896m128-704q-20 0-52 45t-60.5 99t-60.5 99t-51 45q-21 0-42-15t-36-33t-37-33t-45-15q-47 0-87.5 60T128 576q0 52 29.5 90.5t83.5 60T362 758t150 10t150-10t121-31.5t83.5-60T896 576q0-68-43-159.5t-104-158T640 192"></svg:path>`,
})
export class WhhBasecampIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBasketballIcon],svg[whh-basketball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M685 641L557 512l338-339q62 70 95.5 156.5T1024 512q-96 0-182.5 34T685 641M383 339q62-70 95.5-156.5T512 0q96 0 182.5 34T851 129L512 467zM174 129Q292 24 448 5q-2 164-110 288zm119 209Q169 446 4 448q20-156 125-274zm174 174L129 851q-61-70-95-156.5T0 512q96 0 182.5-33.5T339 383zm174 173q-62 70-95.5 156.5T512 1024q-96 0-182.5-33.5T173 895l339-338zm209 210q-118 105-274 125q2-164 110-289zm170-319q-20 156-125 274L731 686q124-108 289-110"></svg:path>`,
})
export class WhhBasketballIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBatIcon],svg[whh-bat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1005.594 881l-125 125q-19 19-46 19t-46.5-19t-19.5-46.5t19-46.5l18-18l-149-149q-38-38-107-76.5t-130.5-70t-83.5-53.5l-320-320q-23-22-12-80t47.5-94.5t94.5-47.5t80 12l320 320q22 22 53.5 83.5t70 130.5t76.5 107l149 149l18-18q19-19 46.5-19t46.5 19.5t19 46.5t-19 46"></svg:path>`,
})
export class WhhBatIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBathtubIcon],svg[whh-bathtub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 576H32q-13 0-22.5-9.5T0 544t9.5-22.5T32 512h800V160q0-40-28-68t-68-28t-68 28t-28 68v32l64 64H512l64-64v-32q0-66 47-113T736 0t113 47t47 113v352h96q13 0 22.5 9.5t9.5 22.5t-9.5 22.5T992 576m-32 192q0 61-58 112t-134 71v41q0 13-9.5 22.5T736 1024t-22.5-9.5T704 992v-32H320v32q0 13-9.5 22.5T288 1024t-22.5-9.5T256 992v-41q-76-20-134-71T64 768V640h896z"></svg:path>`,
})
export class WhhBathtubIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBatmanIcon],svg[whh-batman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768.424 896q-49 49-154 88.5t-194 39.5q-91 0-199-39.5t-157-88.5q-64-64-64-512V32q0-13 9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5l37 149q60-54 143.5-85.5t175.5-31.5q91 0 172 31t139 84l37-147q0-13 9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5v352q0 448-64 512m-512-448q-26 0-65.5-20t-53.5-46q-9 17-9 34q0 43 23 69.5t73 26.5q48 0 68.5-14t27.5-50zm439-66q-14 27-52.5 46.5t-66.5 19.5h-64q7 36 27.5 50t68.5 14q50 0 73-26.5t23-69.5q0-17-9-34m-279 322l-352-128q0 218 54 273q41 42 133 76.5t168 34.5q75 0 164-34t131-77q54-55 54-273z"></svg:path>`,
})
export class WhhBatmanIcon {
  readonly viewBox = input("0 0 833 1024")
  readonly width = input("0.82em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBatteryaltchargingIcon],svg[whh-batteryaltcharging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 1024H128q-53 0-90.5-37.5T0 896V256q0-53 37.5-90.5T128 128h192V32q0-13 9.5-22.5T352 0h192q13 0 22.5 9.5T576 32v96h192q53 0 90.5 37.5T896 256v640q0 53-37.5 90.5T768 1024m0-709q0-25-17-42t-41-17H186q-24 0-41 17t-17 42v522q0 25 17 42t41 17h524q24 0 41-17t17-42zM448 832L320 512h128V320l128 320H448z"></svg:path>`,
})
export class WhhBatteryaltchargingIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBatteryaltfullIcon],svg[whh-batteryaltfull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 1024H128q-53 0-90.5-37.5T0 896V256q0-53 37.5-90.5T128 128h192V32q0-13 9.5-22.5T352 0h192q13 0 22.5 9.5T576 32v96h192q53 0 90.5 37.5T896 256v640q0 53-37.5 90.5T768 1024m0-709q0-25-17-42t-41-17H186q-24 0-41 17t-17 42v522q0 25 17 42t41 17h524q24 0 41-17t17-42zm-96 517H224q-13 0-22.5-9.5T192 800v-64q0-13 9.5-22.5T224 704h448q13 0 22.5 9.5T704 736v64q0 13-9.5 22.5T672 832m0-192H224q-13 0-22.5-9.5T192 608v-64q0-13 9.5-22.5T224 512h448q13 0 22.5 9.5T704 544v64q0 13-9.5 22.5T672 640m0-192H224q-13 0-22.5-9.5T192 416v-64q0-13 9.5-22.5T224 320h448q13 0 22.5 9.5T704 352v64q0 13-9.5 22.5T672 448"></svg:path>`,
})
export class WhhBatteryaltfullIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBatteryaltsixtyIcon],svg[whh-batteryaltsixty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 1024H128q-53 0-90.5-37.5T0 896V256q0-53 37.5-90.5T128 128h192V32q0-13 9.5-22.5T352 0h192q13 0 22.5 9.5T576 32v96h192q53 0 90.5 37.5T896 256v640q0 53-37.5 90.5T768 1024m0-709q0-25-17-42t-41-17H186q-24 0-41 17t-17 42v522q0 25 17 42t41 17h524q24 0 41-17t17-42zm-96 517H224q-13 0-22.5-9.5T192 800v-64q0-13 9.5-22.5T224 704h448q13 0 22.5 9.5T704 736v64q0 13-9.5 22.5T672 832m0-192H224q-13 0-22.5-9.5T192 608v-64q0-13 9.5-22.5T224 512h448q13 0 22.5 9.5T704 544v64q0 13-9.5 22.5T672 640"></svg:path>`,
})
export class WhhBatteryaltsixtyIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBatteryaltthirdIcon],svg[whh-batteryaltthird-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 1024H128q-53 0-90.5-37.5T0 896V256q0-53 37.5-90.5T128 128h192V32q0-13 9.5-22.5T352 0h192q13 0 22.5 9.5T576 32v96h192q53 0 90.5 37.5T896 256v640q0 53-37.5 90.5T768 1024m0-709q0-25-17-42t-41-17H186q-24 0-41 17t-17 42v522q0 25 17 42t41 17h524q24 0 41-17t17-42zm-96 517H224q-13 0-22.5-9.5T192 800v-64q0-13 9.5-22.5T224 704h448q13 0 22.5 9.5T704 736v64q0 13-9.5 22.5T672 832"></svg:path>`,
})
export class WhhBatteryaltthirdIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBatterychargedIcon],svg[whh-batterycharged-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 512h-96v128q0 53-37.5 90.5T768 768H128q-53 0-90.5-37.5T0 640V128q0-53 37.5-90.5T128 0h640q53 0 90.5 37.5T896 128v128h96q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5T992 512M512 384V256L192 384h192v128l320-128z"></svg:path>`,
})
export class WhhBatterychargedIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBatterychargingIcon],svg[whh-batterycharging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 512h-96v128q0 53-37.5 90.5T768 768H128q-53 0-90.5-37.5T0 640V128q0-53 37.5-90.5T128 0h640q53 0 90.5 37.5T896 128v128h96q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5T992 512M768 186q0-24-17-41t-42-17H187q-25 0-42 17t-17 41v396q0 24 17 41t42 17h522q25 0 42-17t17-41zM384 384H192l320-128v128h192L384 512z"></svg:path>`,
})
export class WhhBatterychargingIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBatteryeightyIcon],svg[whh-batteryeighty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 512h-96v128q0 53-37.5 90.5T768 768H128q-53 0-90.5-37.5T0 640V128q0-53 37.5-90.5T128 0h640q53 0 90.5 37.5T896 128v128h96q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5T992 512M768 186q0-24-17-41t-42-17h-10q-25 0-42 17t-17 41v396q0 24 17 41t42 17h10q25 0 42-17t17-41z"></svg:path>`,
})
export class WhhBatteryeightyIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBatteryemptyIcon],svg[whh-batteryempty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 512h-96v128q0 53-37.5 90.5T768 768H128q-53 0-90.5-37.5T0 640V128q0-53 37.5-90.5T128 0h640q53 0 90.5 37.5T896 128v128h96q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5T992 512M768 186q0-24-17-41t-42-17H187q-25 0-42 17t-17 41v396q0 24 17 41t42 17h522q25 0 42-17t17-41z"></svg:path>`,
})
export class WhhBatteryemptyIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBatteryfortyIcon],svg[whh-batteryforty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 512h-96v128q0 53-37.5 90.5T768 768H128q-53 0-90.5-37.5T0 640V128q0-53 37.5-90.5T128 0h640q53 0 90.5 37.5T896 128v128h96q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5T992 512M768 186q0-24-17-41t-42-17H443q-25 0-42 17t-17 41v396q0 24 17 41t42 17h266q25 0 42-17t17-41z"></svg:path>`,
})
export class WhhBatteryfortyIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBatteryfullIcon],svg[whh-batteryfull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 512h-96v128q0 53-37.5 90.5T768 768H128q-53 0-90.5-37.5T0 640V128q0-53 37.5-90.5T128 0h640q53 0 90.5 37.5T896 128v128h96q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5T992 512"></svg:path>`,
})
export class WhhBatteryfullIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBatterysixtyIcon],svg[whh-batterysixty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 512h-96v128q0 53-37.5 90.5T768 768H128q-53 0-90.5-37.5T0 640V128q0-53 37.5-90.5T128 0h640q53 0 90.5 37.5T896 128v128h96q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5T992 512M768 186q0-24-17-41t-42-17H571q-25 0-42 17t-17 41v396q0 24 17 41t42 17h138q25 0 42-17t17-41z"></svg:path>`,
})
export class WhhBatterysixtyIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBatterytwentyIcon],svg[whh-batterytwenty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 512h-96v128q0 53-37.5 90.5T768 768H128q-53 0-90.5-37.5T0 640V128q0-53 37.5-90.5T128 0h640q53 0 90.5 37.5T896 128v128h96q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5T992 512M768 186q0-24-17-41t-42-17H315q-25 0-42 17t-17 41v396q0 24 17 41t42 17h394q25 0 42-17t17-41z"></svg:path>`,
})
export class WhhBatterytwentyIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBbpressIcon],svg[whh-bbpress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-960q-91 0-174 35.5T195 195T99.5 338T64 512t35.5 174T195 829t143 95.5T512 960t174-35.5T829 829t95.5-143T960 512t-35.5-174T829 195T686 99.5T512 64m64 384q64 0 64 96q0 78-19 124q-13 35-44.5 66T512 768q-21 2-44-.5t-31-8.5l46-179q8-22 12-33.5t14-33.5t18.5-33.5T549 458t27-10m-64 448q-146 0-255-98q57-5 95-30q21-14 40-41l-8 27q56 46 109 45q68 0 115-31q41-27 69-97.5T704 537q0-41-5.5-67t-10-33t-16.5-21q-27-32-64-32q-17 0-28.5 2t-20.5 9t-14 12t-15.5 18.5L512 448l64-192H448v32q28 0 39 28t4 54l-43 155q-1-36-6.5-59t-10-30t-15.5-20q-27-32-64-32q-17 0-28.5 2t-20.5 9t-14 12t-15.5 19t-17.5 22l64-192h-94q54-60 128-94t158-34q104 0 192.5 51.5t140 140T896 512t-51.5 192.5t-140 140T512 896M235 369l-79 286q-28-70-28-143q0-123 71-223q24 5 33 31.5t3 48.5m85 79q64 0 64 96q0 78-19 124q-13 35-44.5 66T256 768q-13 1-29 1q-21-23-37-48l37-141q8-22 12-33.5t14-33.5t18.5-33.5T293 458t27-10"></svg:path>`,
})
export class WhhBbpressIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBeakerIcon],svg[whh-beaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M991.998 64h-32v832q0 53-37.5 90.5t-90.5 37.5h-576q-53 0-90.5-37.5t-37.5-90.5V192l-128-160q0-13 9.5-22.5t22.5-9.5h960q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5"></svg:path>`,
})
export class WhhBeakerIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBeakeraltIcon],svg[whh-beakeralt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M991.998 64h-32v832q0 53-37.5 90.5t-90.5 37.5h-576q-53 0-90.5-37.5t-37.5-90.5V192l-128-160q0-13 9.5-22.5t22.5-9.5h960q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m-96 0h-776l72 96v32h96q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-96v64h32q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-32v64h96q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-96v64h32q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-32v64h96q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-96v64h32q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-32q0 27 18.5 45.5t45.5 18.5h576q27 0 45.5-18.5t18.5-45.5z"></svg:path>`,
})
export class WhhBeakeraltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBedIcon],svg[whh-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.936 512h-896q-27 0-45.5-18.5T.936 448V320q0-27 18.5-45.5t45.5-18.5h896q26 0 45 18.5t19 45.5v128q0 26-19 45t-45 19m-640-320h-256q-27 0-45.5-18.5T.936 128V96q0-50 35-73t93-23q38 0 97 16.5t109 47.5t50 64q0 27-18.5 45.5t-45.5 18.5m-64 384v128q0 27-19 45.5t-45.5 18.5t-45-18.5t-18.5-45.5V576zm640 0v128q0 27-19 45.5t-45.5 18.5t-45-18.5t-18.5-45.5V576z"></svg:path>`,
})
export class WhhBedIcon {
  readonly viewBox = input("0 0 1025 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBeerIcon],svg[whh-beer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 896q-31 0-64-12v12q0 53-37.5 90.5T512 1024H128q-53 0-90.5-37.5T0 896V192q0-7 2-16q-2-11-2-16q0-36 23-62.5T81 66q17-30 46.5-48T192 0q27 0 52 11q21-11 44-11q44 0 73 34q37-34 87-34q35 0 64.5 18T559 66q35 5 58 31.5t23 62.5q0 5-2 16q2 9 2 16v76q33-12 64-12q80 0 136 56t56 136v256q0 80-56 136t-136 56M64 832q0 27 19 45.5t45 18.5h384q27 0 45.5-18.5T576 832V384H64zm704-363q0-35-28-60t-68-25q-16 0-32 5v374q17 5 32 5q40 0 68-25t28-60z"></svg:path>`,
})
export class WhhBeerIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBeeraltIcon],svg[whh-beeralt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 896q-31 0-64-12v12q0 53-37.5 90.5T576 1024H192q-53 0-90.5-37.5T64 896V302q-29-17-46.5-46T0 192q0-43 26-76.5T92 70q22-32 57-51t75-19q53 0 96 33q33-33 80-33q28 0 54 14q28-14 58-14q35 0 64.5 18T623 66q13-2 17-2q53 0 90.5 37.5T768 192q0 35-19 66q16-2 19-2q80 0 136 56t56 136v256q0 80-56.5 136T768 896M640 128q-21 0-39 13q-10-13-25-13q0-26-19-45t-45.5-19t-45 19t-18.5 45q0-36-12.5-50T400 64q-24 0-52 27.5T320 160q0-40-28-68t-68-28q-31 0-55.5 18T134 129q-1 0-3-.5t-3-.5q-27 0-45.5 19T64 192.5t18.5 45T128 256q24 0 42-16q25 16 54 16q16 0 33-6q-1 4-1 6q0 10 4 17q-4 8-4 15q0 13 9.5 22.5T288 320t22.5-9.5T320 288q26 0 67-15q5 21 22 34t39 13q26 0 45-18.5t19-45.5q0-14 16-30t32-25l16-9q0 27 18.5 45.5t45 18.5t45.5-18.5t19-45t-19-45.5t-45-19m192 341q0-35-28-60t-68-25q-15 0-32 5v374q17 5 32 5q40 0 68-25t28-60zM448 128v5z"></svg:path>`,
})
export class WhhBeeraltIcon {
  readonly viewBox = input("0 0 960 1024")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBehanceIcon],svg[whh-behance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 64h320v64H640zm160.5 128q104.5 0 164 73t59.5 183H640q0 85 40.5 138.5T800 640q63 0 101-35t52-93h65q-16 86-72.5 139T800 704q-104 0-164-73t-60-183t60-183t164.5-73M953 384q-13-59-51.5-93.5t-101-34.5t-101 34.5T647 384zM512 512q0 79-62.5 135.5T298 704H0V0h261q77 0 132 56t55 136q0 81-51 140q49 21 82 70.5T512 512M264 64H64v256h200q50 0 85-37.5t35-90.5t-35-90.5T264 64m40 320H64v256h240q59 0 101.5-37.5T448 512t-42.5-90.5T304 384"></svg:path>`,
})
export class WhhBehanceIcon {
  readonly viewBox = input("0 0 1024 704")
  readonly width = input("1.46em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBellIcon],svg[whh-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 960H622q-17 29-46 46.5t-64 17.5t-64-17.5t-46-46.5H64q-27 0-45.5-19T0 896v-64q53 0 90.5-75T128 576V448q0-142 91.5-248.5T448 70v-6q0-27 19-45.5T512 0t45 18.5T576 64v6q137 23 228.5 129.5T896 448v128q0 106 37.5 181t90.5 75v64q0 26-18.5 45T960 960"></svg:path>`,
})
export class WhhBellIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBellaltIcon],svg[whh-bellalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m352.37 1024l-64-64q0-54-46.5-152.5T128.37 643l-22-22q-89-89-103.5-213t47.5-228q-22-13-36-35t-14-49q0-39 28.5-67.5T96.37 0q27 0 49.5 14t34.5 37q104-62 228-47t212 103l22 22q66 66 165.5 112.5t152.5 46.5l64 64q0 129-56 253t-147.5 215.5T605.37 968t-253 56m561-625q-31-29-104.5-2t-161.5 98q26 15 41.5 40.5t15.5 56.5q0 47-32.5 79.5t-79.5 32.5q-31 0-56.5-15.5t-40.5-41.5q-71 88-98 161.5t2 104.5q37 37 138-12t208-156t156-208t12-138"></svg:path>`,
})
export class WhhBellaltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBeltIcon],svg[whh-belt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1005.35 870l-135 135q-19 19-45.5 19t-45.5-19l-259-259l-2 3q-20 19-47 19t-46-19l-214-214q-19-19-19-46t19-47l3-2l-195-195q-19-19-19-45.5t19-45.5l135-135q19-19 45.5-19t45.5 19l195 195l3-3q19-20 46-20t46 20l214 214q19 19 19 46t-19 46l-3 3l259 259q19 19 19 45.5t-19 45.5m-332.5-166q13.5 0 22.5-9t9-22.5t-9-23t-22.5-9.5t-23 9.5t-9.5 23t9.5 22.5t23 9m-448-511q-13.5 0-22.5 9t-9 22.5t9 23t22.5 9.5t23-9.5t9.5-23t-9.5-22.5t-23-9m264.5 63l-92 93l105 105q10 10 10 24t-10 24t-24 10t-24-10l-105-105l-92 92l215 216l233-233zm311.5 512q-13.5 0-23 9.5t-9.5 23t9.5 22.5t23 9t22.5-9t9-22.5t-9-23t-22.5-9.5"></svg:path>`,
})
export class WhhBeltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBigaceIcon],svg[whh-bigace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-896q0 17-16.5 36.5T452 203t-61.5 43.5T320 296t-70.5 59t-61.5 70t-43.5 83.5T128 608q0 76 54 118t138 42q39 0 69-16.5t59-47.5q0 32-1 49.5t-6.5 45t-19.5 51t-37 46.5h256q-23-23-37-46.5t-19.5-51t-6.5-45t-1-49.5q29 31 59 47.5t69 16.5q83 0 137.5-42T896 608q0-59-21-112t-55-92.5t-75-74.5t-82-62.5t-75-51t-55-46t-21-41.5"></svg:path>`,
})
export class WhhBigaceIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBiggerIcon],svg[whh-bigger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m960.56 685l-896 330q-27 15-45.5 6T.56 985V856q0-27 18.5-56t45.5-44l661-244l-661-244q-27-14-45.5-43.5T.56 169V39q0-27 18.5-35.5t45.5 6.5l896 330q26 15 45 44t19 56v145q0 27-19 56t-45 44"></svg:path>`,
})
export class WhhBiggerIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBillIcon],svg[whh-bill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.31 768h-896q-26 0-45-18.5T.31 704V64q0-26 18.5-45t45.5-19h896q26 0 45 19t19 45v640q0 27-18.5 45.5t-45.5 18.5m0-512h-64q-53 0-90.5-37.5t-37.5-90.5V64h-512v64q0 53-37.5 90.5t-90.5 37.5h-64v256h64q53 0 90.5 37.5t37.5 90.5v64h512v-64q0-53 37.5-90.5t90.5-37.5h64zm-448 384q-80 0-136-75t-56-181t56-181t136-75t136 75t56 181t-56 181t-136 75"></svg:path>`,
})
export class WhhBillIcon {
  readonly viewBox = input("0 0 1025 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBinaryIcon],svg[whh-binary-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.158 768h-384q-26 0-45-18.5t-19-45.5V64q0-26 19-45t45-19h384q26 0 45 19t19 45v640q0 27-18.5 45.5t-45.5 18.5m-64-640h-256v512h256zm-512 640h-320q-26 0-45-18.5t-19-45.5t19-45.5t45-18.5h64V128h-64q-26 0-45-18.5t-19-45t19-45.5t45-19h128q27 0 45.5 19t18.5 45v576h64v-64q0-27 19-45.5t45.5-18.5t45 19t18.5 45v128q0 27-18.5 45.5t-45.5 18.5"></svg:path>`,
})
export class WhhBinaryIcon {
  readonly viewBox = input("0 0 1025 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBingIcon],svg[whh-bing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M511.998 1024q-139 0-257-47t-186.5-128t-68.5-177V32q0-13 9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5v365q141-77 320-77q139 0 257 47t186.5 128t68.5 177t-68.5 177t-186.5 128t-257 47m0-576q-87 0-160.5 30t-116.5 81.5t-43 112.5t43 112.5t116.5 81.5t160.5 30t160.5-30t116.5-81.5t43-112.5t-43-112.5t-116.5-81.5t-160.5-30"></svg:path>`,
})
export class WhhBingIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBinocularsIcon],svg[whh-binoculars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024.343 640v256q0 53-37.5 90.5t-90.5 37.5h-128q-53 0-90.5-37.5t-37.5-90.5V512h-64q0 27-18.5 45.5t-45.5 18.5t-45.5-18.5t-18.5-45.5h-64v384q0 53-37.5 90.5t-90.5 37.5h-128q-53 0-90.5-37.5T.343 896V640q0-41 16.5-129.5t48-171.5t63.5-83V128q-26 0-45-18.5t-19-45t19-45.5t45-19h192q27 0 45.5 19t18.5 45.5t-18.5 45t-45.5 18.5v146q29 17 46.5 46t17.5 64h64q0-27 18.5-45.5t45.5-18.5t45.5 19t18.5 45h64q0-35 17.5-64t46.5-46V128q-26 0-45-18.5t-19-45t19-45.5t45-19h192q27 0 45.5 19t18.5 45.5t-18.5 45t-45.5 18.5v128q32 0 63.5 83t48 171.5t16.5 129.5"></svg:path>`,
})
export class WhhBinocularsIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBiohazardIcon],svg[whh-biohazard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M912 510q-69-40-147-33q3 20 3 35q0 86-51 153.5T586 757q24 96 102 142q90 52 272-3q-32 33-94.5 51T729 960t-131-37q-51-29-86-75q-35 46-87 75q-56 32-130.5 37T158 947t-95-51q28 9 56.5 16t67.5 11.5t78.5-1.5t69.5-23q78-46 103-142q-80-24-131-91.5T256 512q0-15 2-35q-78-7-147 33q-48 28-79.5 84T0 694q-1-169 142-249q55-32 121-36q-35-62-35-133q0-116 62.5-196T448 0q-53 0-108 67.5T285 221q0 65 36 120q36-40 85.5-62.5t105-22.5t105 22.5T702 341q37-55 37-120q0-86-55.5-153.5T576 0q95 0 157 80t62 196q0 71-34 133q65 4 121 36q72 40 107 102.5t35 156.5q0-51-31.5-108.5T912 510m-208 2l-2-20q-61 26-94 84q-29 51-30 116q56-21 91-70t35-110m-384 0q0 61 34.5 110t90.5 70q-1-66-29-116q-34-58-94-84q-2 18-2 20m192-192q-88 0-147 69q65 53 146.5 53T658 389q-58-69-146-69"></svg:path>`,
})
export class WhhBiohazardIcon {
  readonly viewBox = input("0 0 1024 962")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBirdhouseIcon],svg[whh-birdhouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1004.5 555.5Q985 575 957.5 575T911 555l-27-27l-84 431q-3 21-23.5 42.5T736 1023H289q-20 0-40.5-21.5T225 959l-84-432l-28 28q-19 20-46.5 20t-47-19.5t-19.5-47T19 462L463 19q20-20 49-19q29-1 49 19l444 443q19 19 19 46.5t-19.5 47M512.5 895q26.5 0 45-18.5t18.5-45t-18.5-45.5t-45-19t-45 19t-18.5 45.5t18.5 45t45 18.5m.5-512q-53 0-90.5 37.5T385 511t37.5 90.5T513 639t90-37.5t37-90.5t-37-90.5t-90-37.5"></svg:path>`,
})
export class WhhBirdhouseIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBirthdayIcon],svg[whh-birthday-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 1024H32q-13 0-22.5-9.5T0 992t9.5-22.5T32 960h32V576q0-53 37.5-90.5T192 448h640q53 0 90.5 37.5T960 576v384h32q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5M800 192q13 0 22.5 9.5T832 224v160H704V224q0-13 9.5-22.5T736 192zm-21-32q21-19 21-40q0-7-7.5-19.5T778 79l-7-9q-7 37-30 50q-7 6-4.5 17.5T747 160q-9 0-30-18q-13-12-13-27q0-22 22-40q10-9 13-27.5t0-33.5l-3-14q52 20 77 54q20 28 19 56q-1 31-5 35q-7 6-22.5 10.5T779 160m-235 32q13 0 22.5 9.5T576 224v160H448V224q0-13 9.5-22.5T480 192zm-21-32q21-19 21-40q0-7-7.5-19.5T522 79l-7-9q-7 37-30 50q-7 6-4.5 17.5T491 160q-9 0-30-18q-13-12-13-27q0-22 22-40q10-9 13-27.5t0-33.5l-3-14q52 20 77 54q20 28 19 56q-1 31-5 35q-7 6-22.5 10.5T523 160m-235 32q13 0 22.5 9.5T320 224v160H192V224q0-13 9.5-22.5T224 192zm-21-32q21-19 21-40q0-7-7.5-19.5T266 79l-7-9q-7 37-30 50q-7 6-4.5 17.5T235 160q-9 0-30-18q-13-12-13-27q0-22 22-40q10-9 12.5-27.5T227 14l-3-14q52 20 77 54q20 28 19 56q-1 31-5 35q-7 6-22.5 10.5T267 160"></svg:path>`,
})
export class WhhBirthdayIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBishopIcon],svg[whh-bishop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 1024H64q-26 0-45-18.5T0 960v-64q0-26 19-45t45-19q60 0 108-56t70-147q-53-9-83.5-23T128 576q0-24 64-42q-64-85-64-182q0-50 31-114t73-115.5t85-87T384 0t67 35.5t85 87T609 238t31 114q0 97-64 182q64 18 64 42q0 16-30.5 30T526 629q22 91 70 147t108 56q27 0 45.5 19t18.5 45v64q0 27-18.5 45.5T704 1024M384 128q-16 0-46.5 39t-56 95.5T256 358q0 64 37.5 109t90.5 45t90.5-45T512 358q0-39-25.5-95.5t-56-95.5t-46.5-39"></svg:path>`,
})
export class WhhBishopIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBitcoinIcon],svg[whh-bitcoin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 672q0 93-65.5 158.5T480 896h-32v64q0 27-18.5 45.5T384 1024t-45.5-18.5T320 960v-64h-64v64q0 27-18.5 45.5T192 1024t-45.5-18.5T128 960v-64H64q-27 0-45.5-18.5T0 832t18.5-45.5T64 768h64V256H64q-27 0-45.5-18.5T0 192t18.5-45.5T64 128h64V64q0-26 18.5-45T192 0t45.5 19T256 64v64h64V64q0-26 18.5-45t45-19T429 19t19 45v67q82 11 137 74t55 147q0 70-42 130q48 30 77 80.5T704 672M416 256H256v192h160q40 0 68-28t28-68t-28-68t-68-28m64 320H256v192h224q40 0 68-28t28-68t-28-68t-68-28"></svg:path>`,
})
export class WhhBitcoinIcon {
  readonly viewBox = input("0 0 704 1024")
  readonly width = input("0.69em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBitcoinaltIcon],svg[whh-bitcoinalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m320-640q0-80-56-136t-136-56q0-27-18.5-45.5t-45-18.5t-45.5 18.5t-19 45.5h-64q0-27-18.5-45.5t-45-18.5t-45.5 18.5t-19 45.5h-64q-26 0-45 18.5T192 256t19 45.5t45 18.5h64v384h-64q-27 0-45.5 19T192 768.5t18.5 45T256 832h64q0 27 19 45.5t45.5 18.5t45-18.5T448 832h64q0 27 19 45.5t45.5 18.5t45-18.5T640 832q80 0 136-56t56-136q0-73-50-128q50-55 50-128M640 704H448V576h192q27 0 45.5 19t18.5 45.5t-18.5 45T640 704m0-256H448V320h192q27 0 45.5 18.5T704 384t-18.5 45.5T640 448"></svg:path>`,
})
export class WhhBitcoinaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBitcoinsquareIcon],svg[whh-bitcoinsquare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-64-640q0-80-56-136t-136-56q0-27-18.5-45.5t-45-18.5t-45.5 18.5t-19 45.5h-64q0-27-18.5-45.5t-45-18.5t-45.5 18.5t-19 45.5h-64q-26 0-45 18.5t-19 45.5t19 45.5t45 18.5h64v384h-64q-26 0-45 19t-19 45.5t19 45t45 18.5h64q0 27 19 45.5t45.5 18.5t45-18.5t18.5-45.5h64q0 27 19 45.5t45.5 18.5t45-18.5t18.5-45.5q80 0 136-56t56-136q0-73-50-128q50-55 50-128m-192 320h-192V576h192q27 0 45.5 19t18.5 45.5t-18.5 45t-45.5 18.5m0-256h-192V320h192q27 0 45.5 18.5t18.5 45.5t-18.5 45.5t-45.5 18.5"></svg:path>`,
})
export class WhhBitcoinsquareIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBlackberryIcon],svg[whh-blackberry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1019.5 287.5q-12.5 39.5-49 68T894 384H735l64-192h154q40 0 59.5 28t7 67.5M607 192H447L511 0h155q39 0 58.5 28t7.5 68t-48.5 68t-76.5 28m-5 64q39 0 58.5 28t7.5 67.5t-48.5 67.5t-76.5 28H383l64-191zm-378-64H64L128 0h154q40 0 59.5 28t7.5 68t-49 68t-76 28m-6 64q40 0 59.5 28t7.5 67.5t-49 67.5t-76 28H0l64-191zm320 255q39 0 58.5 28t7.5 68t-48.5 68t-76.5 28H319l64-192zm351-64q40 0 59.5 28.5t7.5 68t-49 67.5t-76 28H671l64-192z"></svg:path>`,
})
export class WhhBlackberryIcon {
  readonly viewBox = input("0 0 1025 703")
  readonly width = input("1.46em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBlankstareIcon],svg[whh-blankstare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024M288 256q-40 0-68 37.5T192 384t28 90.5t68 37.5t68-37.5t28-90.5t-28-90.5t-68-37.5m0 448q-13 0-22.5 9.5T256 736t9.5 22.5T288 768h448q13 0 22.5-9.5T768 736t-9.5-22.5T736 704zm448-448q-40 0-68 37.5T640 384t28 90.5t68 37.5t68-37.5t28-90.5t-28-90.5t-68-37.5"></svg:path>`,
})
export class WhhBlankstareIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBloggerIcon],svg[whh-blogger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 1024H320q-87 0-160.5-43T43 864.5T0 704V320q0-87 43-160.5T159.5 43T320 0h192q87 0 160.5 43T789 159.5T832 320q0 26 18.5 45t45.5 19h64q26 0 45 18.5t19 45.5v256q0 87-43 160.5T864.5 981T704 1024M512 256H320q-27 0-45.5 18.5t-18.5 45t18.5 45.5t45.5 19h192q27 0 45.5-19t18.5-45.5t-19-45t-45-18.5m192 384H320q-27 0-45.5 18.5t-18.5 45t18.5 45.5t45.5 19h384q26 0 45-19t19-45.5t-19-45t-45-18.5"></svg:path>`,
})
export class WhhBloggerIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBluetoothIcon],svg[whh-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M750 335q-11 11-30 15L471 513l279 183q18 18 18 43.5T750 783q-13 13-35 16l-347 205q-3 1-10 5.5t-11.5 7.5t-11 5.5t-13.5 2.5q-28 2-48.5-18T257 956V653l-152 99q-18 18-43.5 18T18 752T0 708.5T18 665l232-152L18 361Q0 343 0 317.5T18 274t43.5-18t43.5 18l152 99V70q-4-31 16.5-51T322 1q5 0 10 1t10 4t8 4.5t9.5 6T368 23l382 225q18 18 18 43.5T750 335M385 855l205-120l-205-134zm0-684v254l205-134z"></svg:path>`,
})
export class WhhBluetoothIcon {
  readonly viewBox = input("0 0 768 1026")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBluetoothconnectedIcon],svg[whh-bluetoothconnected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 612q0 12-7 21q-13 14-33 0l-136-93q-16-9-16-26.5t16.5-30T899 448t59-40l26-17q21-14 33 0q7 9 7 21zM848 349L599 512l279 182q18 18 18 43.5T878 781q-13 14-35 17l-347 203q-19 21-46 22q-29 2-48-17t-17-48V651l-152 99q-18 18-43.5 18T146 750t-18-43.5t18-43.5l232-151l-232-151q-18-18-18-43.5t18-43.5t43.5-18t43.5 18l152 98V65q-2-28 17-47t48-17q27 1 46 21l382 225q18 18 18 43.5T878 334q-11 11-30 15M512 854l205-121l-205-133zm0-684v254l205-133zM176 540L40 633q-20 14-33 0q-7-9-7-21V412q0-13 7-21q12-14 33 0q99 65 135 93q17 12 17 29.5T176 540"></svg:path>`,
})
export class WhhBluetoothconnectedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBoardgameIcon],svg[whh-boardgame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 960q0 27-19 45.5t-45 18.5H64q-26 0-45-18.5T0 960q0-53 20-101t48-85.5l56-75l48-85.5l20-101q0-18-4-37q-57-34-90.5-92.5T64 256q0-106 75-181T320 0t181 75t75 181q0 68-33.5 126.5T452 475q-4 18-4 37q0 53 20 101t48 85.5l56 75l48 85.5z"></svg:path>`,
})
export class WhhBoardgameIcon {
  readonly viewBox = input("0 0 640 1024")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBoatIcon],svg[whh-boat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 704H704q-27 0-45.5-19T640 640V128q0-27 18.5-45.5T704 64l256 576q0 26-18.5 45T896 704m-128 320H256q-55 0-116-43.5t-100.5-104T0 768h512V32q0-14 9.5-23T544 0t22.5 9t9.5 23v736h448q0 48-39.5 108.5T884 980.5T768 1024M384 704H128q-26 0-45-19t-19-45L384 64q27 0 45.5 18.5T448 128v512q0 26-18.5 45T384 704"></svg:path>`,
})
export class WhhBoatIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBoldIcon],svg[whh-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 704v64q0 106-75 181t-181 75H64q-27 0-45.5-19T0 960V64q0-26 18.5-45T64 0h448q106 0 181 75t75 181v32q0 56-23.5 106T681 480q38 34 62.5 99T768 704M480 192H224q-13 0-22.5 9.5T192 224v128q0 13 9.5 22.5T224 384h256q39 0 67.5-28t28.5-68t-28.5-68t-67.5-28m-32 384H224q-13 0-22.5 9.5T192 608v192q0 13 9.5 22.5T224 832h224q53 0 90.5-37.5T576 704t-37.5-90.5T448 576"></svg:path>`,
})
export class WhhBoldIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBombIcon],svg[whh-bomb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M878 232q18 18 18 43.5T878 320l-39 38q57 102 57 218q0 91-35.5 174T765 893t-143 95.5t-174 35.5t-174-35.5T131 893T35.5 750T0 576t35.5-174T131 259t143-95.5T448 128q116 0 217 56l38-39q19-18 44.5-18t43.5 18l25 25q16-18 16-42q0-26-19-45t-45-19q-13 0-22.5-9.5T736 32t9.5-22.5T768 0q53 0 90.5 37.5T896 128q0 50-35 88zm-379.5 36.5Q443 213 351.5 226T186 313.5T99 480t42.5 147.5t147 42.5T454 582.5T541 416t-42.5-147.5"></svg:path>`,
})
export class WhhBombIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBoneIcon],svg[whh-bone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928 832q-72 0-84 12t-12 84q0 40-28 68t-68 28t-68-28t-28-68q1-6 1-16.5t-1.5-40t-7-56t-20-58T576 704L448 576L320 448q-31-31-74.5-47T173 382.5t-57-.5q-10 2-20 2q-40 0-68-28T0 288t28-68t68-28q72 0 84-12t12-84q0-40 28-68t68-28t68 28t28 68q0 10-2 19q-2 28 .5 57t18.5 73t47 75q27 26 80 79.5t96.5 97L704 576q21 21 50.5 35.5t55 20.5t53.5 8t41 1.5t22-1.5h2q40 0 68 28t28 68t-28 68t-68 28"></svg:path>`,
})
export class WhhBoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBookIcon],svg[whh-book-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832.338 192q27 0 45.5 18.5t18.5 45.5v640q0 49-66.5 88.5t-125.5 39.5h-576q-53 0-90.5-37.5T.338 896V128q0-53 37.5-90.5t90.5-37.5h704q26 0 45 19t19 45.5t-19 45t-45 18.5h-672q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h224v288q0 12 11 22t21 10l96-96l96 96q10 0 21-10t11-22V192z"></svg:path>`,
})
export class WhhBookIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBookaltIcon],svg[whh-bookalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160 192q-13 0-22.5-9.5T128 160t9.5-22.5T160 128h704q13 0 22.5 9.5T896 160t-9.5 22.5T864 192zm672 832H160q-66 0-113-47T0 864V160Q0 94 47 47T160 0h704q13 0 22.5 9.5T896 32t-9.5 22.5T864 64H160q-40 0-68 28t-28 68t28 68t68 28h736v704q0 27-18.5 45.5T832 1024"></svg:path>`,
})
export class WhhBookaltIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBookmarkIcon],svg[whh-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 1024L384 800L64 1024q-27 0-45.5-19T0 960V128q0-53 37.5-90.5T128 0h512q53 0 90.5 37.5T768 128v832q0 26-18.5 45t-45.5 19M461 332l-77-172l-77 172l-179 24l132 129l-34 187l158-92l158 92l-34-187l132-129z"></svg:path>`,
})
export class WhhBookmarkIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBookmarkaltIcon],svg[whh-bookmarkalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 1024L384 800L64 1024q-27 0-45.5-18.5T0 960V128q0-53 37.5-90.5T128 0h512q53 0 90.5 37.5T768 128v832q0 26-19 45t-45 19"></svg:path>`,
})
export class WhhBookmarkaltIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBookmarkfourIcon],svg[whh-bookmarkfour-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M991 703H703v288q0 22-27 30.5t-40-5.5L26 406Q0 380 0 343t26-63L280 26q26-26 63-26t63 26l610 610q14 13 5.5 40T991 703M448 224l-89 68l-108-41l41 108l-68 89l115-1l77 96V416h127l-96-77z"></svg:path>`,
})
export class WhhBookmarkfourIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBookmarkthreeIcon],svg[whh-bookmarkthree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M991 703H703v288q0 22-27 30.5t-40-5.5L26 406Q0 380 0 343t26-63L280 26q26-26 63-26t63 26l610 610q14 13 6 40t-31 27"></svg:path>`,
})
export class WhhBookmarkthreeIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBookthreeIcon],svg[whh-bookthree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M997.295 826q-28 12-185 72t-209 89q-8 4-28 12q-3 11-11.5 18.5t-19.5 7.5h-64q-11 0-19.5-7.5t-11.5-18.5q-20-8-28-12q-52-29-209.5-89t-184.5-72q-11-5-19-17.5t-8-25.5V88q0-14 8-20t19-1q51 22 115 58.5t97.5 58t117.5 76.5q30 20 91 32v-3q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v3q61-12 91-32q84-55 117.5-76.5t97.5-58t115-58.5q11-5 19 1t8 20v695q0 13-8 25.5t-19 17.5m-389-633h-6q136-120 271-190q10-5 16.5 1t6.5 20v28q-131 61-262 155q-10-14-26-14m-218 14q-131-94-262-155V24q0-14 6.5-20t16.5-1q135 70 271 190h-6q-16 0-26 14"></svg:path>`,
})
export class WhhBookthreeIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBoomboxIcon],svg[whh-boombox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 896H64q-26 0-45-19T0 832V320q0-26 18.5-45T64 256h64V64q0-26 19-45t45-19h640q26 0 45 19t19 45v192h64q26 0 45 19t19 45v512q0 26-19 45t-45 19M768 160q0-13-9.5-22.5T736 128H288q-13 0-22.5 9.5T256 160v96h512zm0 224q-80 0-136 56t-56 136q0 73 50 128H398q50-55 50-128q0-80-56-136t-136-56t-136 56t-56 136t56 136t136 56h512q80 0 136-56t56-136t-56-136t-136-56m0 320q-53 0-90.5-37.5T640 576t37.5-90.5T768 448t90.5 37.5T896 576t-37.5 90.5T768 704M128 576q0-53 37.5-90.5T256 448t90.5 37.5T384 576t-37.5 90.5T256 704t-90.5-37.5T128 576"></svg:path>`,
})
export class WhhBoomboxIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBottleIcon],svg[whh-bottle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 960q-5 26-21.5 45t-42.5 19H128q-26 0-42-18.5T64 960L0 576V448q0-29 19.5-48T77 362.5t47-24.5q40-28 72-66t47-80h-19q-13 0-22.5-9.5T192 160V32q0-13 9.5-22.5T224 0h192q13 0 22.5 9.5T448 32v128q0 13-9.5 22.5T416 192h-19q30 81 111 140q11 9 50 28t60.5 39t21.5 49v128z"></svg:path>`,
})
export class WhhBottleIcon {
  readonly viewBox = input("0 0 640 1024")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBottomborderIcon],svg[whh-bottomborder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 960v-64h448v-64h64v64h448v64zm896-192h64v64h-64zm0-128h64v64h-64zm0-128h64v64h-64zm-64-64h64v64h-64zm128-64v64h-64v-64zm-64-128h64v64h-64zm0-128h64v64h-64zm0-128h64v64h-64zM768 512h-64v-64h64zm0-512h64v64h-64zM640 512h-64v-64h64zm0-512h64v64h-64zM448 192h64v64h-64zm0 128h64v64h-64zm0 128h64v64h-64zm64 320h-64v-64h64zm-64-192h64v64h-64zm-64-64h-64v-64h64zm64-384V64h64v64zM384 0h64v64h-64zm128 0h64v64h-64zM256 0h64v64h-64zm0 512h-64v-64h64zM128 0h64v64h-64zm0 512H64v-64h64zM0 576v-64h64v64zm0-192h64v64H0zm0-128h64v64H0zm0-128h64v64H0zM0 0h64v64H0zm64 704H0v-64h64zm0 128H0v-64h64z"></svg:path>`,
})
export class WhhBottomborderIcon {
  readonly viewBox = input("0 0 960 960")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBowIcon],svg[whh-bow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M895.998 768q14 0 28 14l100 100v14h-96q-13 0-22.5 9.5t-9.5 22.5v96h-14l-100-100q-14-14-14-28v-84l-256-256l-454 453q-9 15-26 15q-13 0-22.5-9.5t-9.5-22.5v-32q0-187 68.5-355.5t191.5-300.5l-186-186l-42 42q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h96q13 0 22.5 9.5t9.5 22.5l-43 43l187 186q131-124 300-192.5t356-68.5h32q13 0 22.5 9.5t9.5 22.5q0 17-15 26l-454 454l256 256zm-829 146l401-402l-121-121q-117 122-192.5 259.5T66.998 914m847-847q-126 12-263.5 87.5T389.998 347l122 122z"></svg:path>`,
})
export class WhhBowIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBowlIcon],svg[whh-bowl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 993q0 13-9.5 22.5T864 1025H160q-13 0-22.5-9.5T128 993q0-32-13-62.5t-32-58t-38-58T13 739T0 641V417q0-13 9.5-22.5T32 385h594L836 17q7-12 20-15.5t24 3T894.5 24T892 49L700 385h22l247-247q9-10 22.5-10t23 9.5t9.5 23t-10 22.5L812 385h180q13 0 22.5 9.5t9.5 22.5v224q0 53-13 98.5T979 816t-38 58.5t-32 57.5t-13 61"></svg:path>`,
})
export class WhhBowlIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBowlingIcon],svg[whh-bowling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024M191.5 384q-26.5 0-45 18.5t-18.5 45t18.5 45.5t45 19t45.5-19t19-45.5t-19-45t-45.5-18.5M384 128q-27 0-45.5 18.5t-18.5 45t18.5 45.5t45 19t45.5-19t19-45.5t-18.5-45T384 128m128 256q-27 0-45.5 18.5t-18.5 45t19 45.5t45 19t45-19t19-45.5t-18.5-45T512 384"></svg:path>`,
})
export class WhhBowlingIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBowlingpinsIcon],svg[whh-bowlingpins-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M793 256q-25-40-25-96q0-46 25.5-71T864 64t70.5 25t25.5 71q0 56-25 96zm34 128q5-18 5-32q0-17-4-32h72q-4 15-4 32q0 13 5 32zm-26 64h126q8 16 39 73t44.5 91t13.5 60q0 45-1 74t-5.5 77t-16.5 82.5t-30 54.5H758q10-103 10-268q0-77-18-147q2-4 22-41t29-56m-417 576q-22-22-36.5-65.5t-19.5-103t-6.5-95T320 672q0-30 14-65t45-88t40-71h186q9 17 40 70.5t45 88.5t14 65q0 53-1.5 88.5t-6.5 95t-19.5 103T640 1024zm34-768q-11-19-17-32t-11.5-39t-5.5-57q0-53 37.5-90.5T512 0t90.5 37.5T640 128q0 31-5.5 57T623 224t-17 32zM266 960H53q-18-20-30-54.5T6.5 823T1 746t-1-74q0-26 13.5-60T58 521t39-73h126q7 14 15.5 30t19 36t16.5 31q-18 70-18 147q0 166 10 268M123 384q5-18 5-32q0-17-4-32h72q-4 15-4 32q0 14 5 32zM89 256q-25-40-25-96q0-46 25.5-71T160 64t70.5 25t25.5 71q0 56-25 96zm355 128q4-18 4-32q0-17-3-32h134q-3 15-3 32q0 14 4 32z"></svg:path>`,
})
export class WhhBowlingpinsIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBowtieIcon],svg[whh-bowtie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 493q0 26-13 46t-41 28t-72-15q-7-8-20.5-21T827 487t-71-51q-32-18-73-38q21-41 21-86q0-82-59-138q32-25 62-43q37-21 85-36t77-19l29-5q44-22 72-13.5t41 28.5t13 46q-7 10-17.5 28T978 226.5T960 316q0 40 16 84t32 69zm-512-53q-53 0-90.5-37.5T384 312t37.5-90.5T512 184t90.5 37.5T640 312t-37.5 90.5T512 440m-171-42q-41 20-73 38q-34 20-69.5 49T145 533l-19 19q-44 23-72 15t-41-28t-13-46q7-10 17.5-27T46 402t18-86q0-41-16-87t-32-71L0 132q0-26 13-46t41-28.5T126 71q12 2 32 5t71 18.5t88 36.5q30 17 62 42q-59 57-59 139q0 45 21 86"></svg:path>`,
})
export class WhhBowtieIcon {
  readonly viewBox = input("0 0 1024 614")
  readonly width = input("1.67em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBoxIcon],svg[whh-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.06 1024h-896q-26 0-45-18.5T.06 960V64q0-26 19-45t45-19h896q26 0 45 19t19 45v896q0 27-19 45.5t-45 18.5m-569-256h57v96q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5v-96h57q7-8 7-19t-7-19l-104-83q-7-8-17.5-8t-17.5 8l-103 83q-8 7-8 18.5t8 19.5m249-704h-256v256q0 27 19 45.5t45 18.5h128q27 0 45.5-18.5t18.5-45.5zm256 608q0-13-9.5-22.5t-22.5-9.5h-128q-13 0-22.5 9.5t-9.5 22.5q0 31 18 55.5t46 34.5v70h-32q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h128q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-32v-70q28-10 46-34.5t18-55.5"></svg:path>`,
})
export class WhhBoxIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBoxbillingIcon],svg[whh-boxbilling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m960 768l-448 256L64 768L0 192L512 0l512 192zM512 192L256 320l32 256l224 128l224-128l32-256z"></svg:path>`,
})
export class WhhBoxbillingIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBoxingIcon],svg[whh-boxing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M551 612q9-25 14.5-38.5t16-33.5t19-31t22.5-24.5t29.5-20.5t37-11.5T736 448q66 0 113 47t47 113q0 74-51 136.5T704 846v114q0 27-75 45.5T448 1024t-181-18.5t-75-45.5V815q-89-62-140.5-158.5T0 448q0-91 35.5-174T131 131t143-95.5T448 0q75 0 141.5 13t122 38.5t88 70T832 224q0 45-15.5 78.5t-41 50t-51 24T672 384q-51 0-105.5 54T512 544q0 40 39 68"></svg:path>`,
})
export class WhhBoxingIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBoxtrapperIcon],svg[whh-boxtrapper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 1024H128q-53 0-90.5-37.5T0 896V128q0-53 37.5-90.5T128 0h576q53 0 90.5 37.5T832 128v768q0 53-37.5 90.5T704 1024m0-576q0-26-19-45t-45-19H512V160q0-13-9.5-22.5T480 128H352q-13 0-22.5 9.5T320 160v224H192q-27 0-45.5 19T128 448v384q0 27 18.5 45.5T192 896h192v32q0 13 9.5 22.5T416 960t22.5-9.5T448 928v-32h192q27 0 45.5-18.5T704 832zm-96 384H448V512h192v288q0 13-9.5 22.5T608 832m-224 0H224q-13 0-22.5-9.5T192 800V512h192z"></svg:path>`,
})
export class WhhBoxtrapperIcon {
  readonly viewBox = input("0 0 832 1024")
  readonly width = input("0.82em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBracesIcon],svg[whh-braces-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M959.5 576q-26.5 0-45 37.5T896 704v192q0 53-37.5 90.5T768 1024h-64q-27 0-45.5-19T640 959.5t19-45t45-18.5h32q13 0 22.5-9.5T768 864V640q0-53 37.5-90.5T896 512q-53 0-90.5-37.5T768 384V160q0-13-9.5-22.5T736 128h-32q-27 0-45.5-19T640 63.5t19-45T704 0h64q53 0 90.5 37.5T896 128v192q0 53 19 90.5t45 37.5t45 19t19 45t-19 45t-45.5 19M256 640v224q0 13 9.5 22.5T288 896h32q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19h-64q-53 0-90.5-37.5T128 896V704q0-53-18.5-90.5t-45-37.5T19 557T0 512t19-45t45.5-19t45-37.5T128 320V128q0-53 37.5-90.5T256 0h64q27 0 45.5 18.5T384 64t-18.5 45.5T320 128h-32q-13 0-22.5 9.5T256 160v224q0 53-37.5 90.5T128 512q53 0 90.5 37.5T256 640"></svg:path>`,
})
export class WhhBracesIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBrailleaIcon],svg[whh-braillea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640q-53 0-90.5-37.5T512 512t37.5-90.5T640 384t90.5 37.5T768 512t-37.5 90.5T640 640m-.5-192q-26.5 0-45 19T576 512.5t18.5 45T640 576t45.5-18.5T704 512t-19-45.5t-45.5-18.5m.5-192q-53 0-90.5-37.5T512 128t37.5-90.5T640 0t90.5 37.5T768 128t-37.5 90.5T640 256m-.5-192q-26.5 0-45 19T576 128.5t18.5 45T640 192t45.5-18.5t18.5-45T685 83t-45.5-19M128 1024q-53 0-90.5-37.5T0 896t37.5-90.5T128 768t90.5 37.5T256 896t-37.5 90.5T128 1024m.5-192Q102 832 83 851t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45t-18.5-45.5t-45-19m-.5-192q-53 0-90.5-37.5T0 512t37.5-90.5T128 384t90.5 37.5T256 512t-37.5 90.5T128 640m.5-192Q102 448 83 467t-19 45.5t19 45t45.5 18.5t45-18.5T192 512t-18.5-45.5t-45-18.5m-.5-192q-53 0-90.5-37.5T0 128t37.5-90.5T128 0t90.5 37.5T256 128t-37.5 90.5T128 256m512 512q53 0 90.5 37.5T768 896t-37.5 90.5T640 1024t-90.5-37.5T512 896t37.5-90.5T640 768m-.5 192q26.5 0 45.5-19t19-45.5t-19-45t-45.5-18.5t-45 18.5T576 896t18.5 45.5t45 18.5"></svg:path>`,
})
export class WhhBrailleaIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBraillebIcon],svg[whh-brailleb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640q-53 0-90.5-37.5T512 512t37.5-90.5T640 384t90.5 37.5T768 512t-37.5 90.5T640 640m-.5-192q-26.5 0-45 19T576 512.5t18.5 45T640 576t45.5-18.5T704 512t-19-45.5t-45.5-18.5m.5-192q-53 0-90.5-37.5T512 128t37.5-90.5T640 0t90.5 37.5T768 128t-37.5 90.5T640 256m-.5-192q-26.5 0-45 19T576 128.5t18.5 45T640 192t45.5-18.5t18.5-45T685 83t-45.5-19M128 1024q-53 0-90.5-37.5T0 896t37.5-90.5T128 768t90.5 37.5T256 896t-37.5 90.5T128 1024m.5-192Q102 832 83 851t-19 45.5t18.5 45T128 960t45.5-18.5t18.5-45t-18.5-45.5t-45-19m-.5-192q-53 0-90.5-37.5T0 512t37.5-90.5T128 384t90.5 37.5T256 512t-37.5 90.5T128 640m0-384q-53 0-90.5-37.5T0 128t37.5-90.5T128 0t90.5 37.5T256 128t-37.5 90.5T128 256m512 512q53 0 90.5 37.5T768 896t-37.5 90.5T640 1024t-90.5-37.5T512 896t37.5-90.5T640 768m-.5 192q26.5 0 45.5-19t19-45.5t-19-45t-45.5-18.5t-45 18.5T576 896t18.5 45.5t45 18.5"></svg:path>`,
})
export class WhhBraillebIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBraillecIcon],svg[whh-braillec-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640q-53 0-90.5-37.5T512 512t37.5-90.5T640 384t90.5 37.5T768 512t-37.5 90.5T640 640m0-192q-27 0-45.5 19T576 512.5t18.5 45t45 18.5t45.5-18.5t19-45.5t-18.5-45.5T640 448m0-192q-53 0-90.5-37.5T512 128t37.5-90.5T640 0t90.5 37.5T768 128t-37.5 90.5T640 256m-512 768q-53 0-90.5-37.5T0 896t37.5-90.5T128 768t90.5 37.5T256 896t-37.5 90.5T128 1024m.5-192Q102 832 83 851t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45t-18.5-45.5t-45-19m-.5-192q-53 0-90.5-37.5T0 512t37.5-90.5T128 384t90.5 37.5T256 512t-37.5 90.5T128 640m.5-192Q102 448 83 467t-19 45.5t19 45t45.5 18.5t45-18.5T192 512t-18.5-45.5t-45-18.5m-.5-192q-53 0-90.5-37.5T0 128t37.5-90.5T128 0t90.5 37.5T256 128t-37.5 90.5T128 256m512 512q53 0 90.5 37.5T768 896t-37.5 90.5T640 1024t-90.5-37.5T512 896t37.5-90.5T640 768m-.5 192q26.5 0 45.5-19t19-45.5t-18.5-45T640 832t-45.5 18.5T576 896t18.5 45.5t45 18.5"></svg:path>`,
})
export class WhhBraillecIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBrailledIcon],svg[whh-brailled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640q-53 0-90.5-37.5T512 512t37.5-90.5T640 384t90.5 37.5T768 512t-37.5 90.5T640 640m0-384q-53 0-90.5-37.5T512 128t37.5-90.5T640 0t90.5 37.5T768 128t-37.5 90.5T640 256m-512 768q-53 0-90.5-37.5T0 896t37.5-90.5T128 768t90.5 37.5T256 896t-37.5 90.5T128 1024m.5-192Q102 832 83 851t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45t-18.5-45.5t-45-19m-.5-192q-53 0-90.5-37.5T0 512t37.5-90.5T128 384t90.5 37.5T256 512t-37.5 90.5T128 640m.5-192Q102 448 83 467t-19 45.5t19 45t45.5 18.5t45-18.5T192 512t-18.5-45.5t-45-18.5m-.5-192q-53 0-90.5-37.5T0 128t37.5-90.5T128 0t90.5 37.5T256 128t-37.5 90.5T128 256m512 512q53 0 90.5 37.5T768 896t-37.5 90.5T640 1024t-90.5-37.5T512 896t37.5-90.5T640 768m-.5 192q26.5 0 45.5-19t19-45.5t-19-45t-45.5-18.5t-45 18.5T576 896t18.5 45.5t45 18.5"></svg:path>`,
})
export class WhhBrailledIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBrailleeIcon],svg[whh-braillee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640q-53 0-90.5-37.5T512 512t37.5-90.5T640 384t90.5 37.5T768 512t-37.5 90.5T640 640m0-384q-53 0-90.5-37.5T512 128t37.5-90.5T640 0t90.5 37.5T768 128t-37.5 90.5T640 256m-.5-192q-26.5 0-45 19T576 128.5t18.5 45T640 192t45.5-18.5t18.5-45T685 83t-45.5-19M128 1024q-53 0-90.5-37.5T0 896t37.5-90.5T128 768t90.5 37.5T256 896t-37.5 90.5T128 1024m.5-192Q102 832 83 851t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45t-18.5-45.5t-45-19m-.5-192q-53 0-90.5-37.5T0 512t37.5-90.5T128 384t90.5 37.5T256 512t-37.5 90.5T128 640m.5-192Q102 448 83 467t-19 45.5t19 45t45.5 18.5t45-18.5T192 512t-18.5-45.5t-45-18.5m-.5-192q-53 0-90.5-37.5T0 128t37.5-90.5T128 0t90.5 37.5T256 128t-37.5 90.5T128 256m512 512q53 0 90.5 37.5T768 896t-37.5 90.5T640 1024t-90.5-37.5T512 896t37.5-90.5T640 768m-.5 192q26.5 0 45.5-19t19-45.5t-19-45t-45.5-18.5t-45 18.5T576 896t18.5 45.5t45 18.5"></svg:path>`,
})
export class WhhBrailleeIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBrailleeightIcon],svg[whh-brailleeight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640q-53 0-90.5-37.5T512 512t37.5-90.5T640 384t90.5 37.5T768 512t-37.5 90.5T640 640m.5-192q-26.5 0-45.5 19t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45t-18.5-45.5t-45-19m-.5-192q-53 0-90.5-37.5T512 128t37.5-90.5T640 0t90.5 37.5T768 128t-37.5 90.5T640 256m.5-192Q614 64 595 83t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45T685.5 83t-45-19M128 1024q-53 0-90.5-37.5T0 896t37.5-90.5T128 768t90.5 37.5T256 896t-37.5 90.5T128 1024m0-384q-53 0-90.5-37.5T0 512t37.5-90.5T128 384t90.5 37.5T256 512t-37.5 90.5T128 640m0-384q-53 0-90.5-37.5T0 128t37.5-90.5T128 0t90.5 37.5T256 128t-37.5 90.5T128 256m.5-192Q102 64 83 83t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45T173.5 83t-45-19M640 768q53 0 90.5 37.5T768 896t-37.5 90.5T640 1024t-90.5-37.5T512 896t37.5-90.5T640 768"></svg:path>`,
})
export class WhhBrailleeightIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBraillefIcon],svg[whh-braillef-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640q-53 0-90.5-37.5T512 512t37.5-90.5T640 384t90.5 37.5T768 512t-37.5 90.5T640 640m-.5-192q-26.5 0-45 19T576 512.5t18.5 45t45 18.5t45.5-18.5t19-45.5t-19-45.5t-45.5-18.5m.5-192q-53 0-90.5-37.5T512 128t37.5-90.5T640 0t90.5 37.5T768 128t-37.5 90.5T640 256m-512 768q-53 0-90.5-37.5T0 896t37.5-90.5T128 768t90.5 37.5T256 896t-37.5 90.5T128 1024m-.5-192q-26.5 0-45 19T64 896.5t18.5 45t45 18.5t45.5-18.5t19-45t-19-45.5t-45.5-19m.5-192q-53 0-90.5-37.5T0 512t37.5-90.5T128 384t90.5 37.5T256 512t-37.5 90.5T128 640m0-384q-53 0-90.5-37.5T0 128t37.5-90.5T128 0t90.5 37.5T256 128t-37.5 90.5T128 256m512 512q53 0 90.5 37.5T768 896t-37.5 90.5T640 1024t-90.5-37.5T512 896t37.5-90.5T640 768m-.5 192q26.5 0 45.5-19t19-45.5t-19-45t-45.5-18.5t-45 18.5T576 896t18.5 45.5t45 18.5"></svg:path>`,
})
export class WhhBraillefIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBraillefiveIcon],svg[whh-braillefive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640q-53 0-90.5-37.5T512 512t37.5-90.5T640 384t90.5 37.5T768 512t-37.5 90.5T640 640m-.5-192q-26.5 0-45 19T576 512.5t18.5 45t45 18.5t45.5-18.5t19-45t-19-45.5t-45.5-19m.5-192q-53 0-90.5-37.5T512 128t37.5-90.5T640 0t90.5 37.5T768 128t-37.5 90.5T640 256m-.5-192q-26.5 0-45 19T576 128.5t18.5 45t45 18.5t45.5-18.5t19-45T685 83t-45.5-19M128 1024q-53 0-90.5-37.5T0 896t37.5-90.5T128 768t90.5 37.5T256 896t-37.5 90.5T128 1024m-.5-192q-26.5 0-45 19T64 896.5t18.5 45t45 18.5t45.5-18.5t19-45t-19-45.5t-45.5-19m.5-192q-53 0-90.5-37.5T0 512t37.5-90.5T128 384t90.5 37.5T256 512t-37.5 90.5T128 640m0-384q-53 0-90.5-37.5T0 128t37.5-90.5T128 0t90.5 37.5T256 128t-37.5 90.5T128 256m-.5-192q-26.5 0-45 19T64 128.5t18.5 45t45 18.5t45.5-18.5t19-45T173 83t-45.5-19M640 768q53 0 90.5 37.5T768 896t-37.5 90.5T640 1024t-90.5-37.5T512 896t37.5-90.5T640 768"></svg:path>`,
})
export class WhhBraillefiveIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBraillefourIcon],svg[whh-braillefour-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640q-53 0-90.5-37.5T512 512t37.5-90.5T640 384t90.5 37.5T768 512t-37.5 90.5T640 640m0-384q-53 0-90.5-37.5T512 128t37.5-90.5T640 0t90.5 37.5T768 128t-37.5 90.5T640 256m-.5-192q-26.5 0-45 19T576 128.5t18.5 45t45 18.5t45.5-18.5t19-45T685 83t-45.5-19M128 1024q-53 0-90.5-37.5T0 896t37.5-90.5T128 768t90.5 37.5T256 896t-37.5 90.5T128 1024m-.5-192q-26.5 0-45 19T64 896.5t18.5 45t45 18.5t45.5-18.5t19-45t-19-45.5t-45.5-19m.5-192q-53 0-90.5-37.5T0 512t37.5-90.5T128 384t90.5 37.5T256 512t-37.5 90.5T128 640m0-384q-53 0-90.5-37.5T0 128t37.5-90.5T128 0t90.5 37.5T256 128t-37.5 90.5T128 256m-.5-192q-26.5 0-45 19T64 128.5t18.5 45t45 18.5t45.5-18.5t19-45T173 83t-45.5-19M640 768q53 0 90.5 37.5T768 896t-37.5 90.5T640 1024t-90.5-37.5T512 896t37.5-90.5T640 768"></svg:path>`,
})
export class WhhBraillefourIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBraillegIcon],svg[whh-brailleg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640q-53 0-90.5-37.5T512 512t37.5-90.5T640 384t90.5 37.5T768 512t-37.5 90.5T640 640m0-384q-53 0-90.5-37.5T512 128t37.5-90.5T640 0t90.5 37.5T768 128t-37.5 90.5T640 256m-512 768q-53 0-90.5-37.5T0 896t37.5-90.5T128 768t90.5 37.5T256 896t-37.5 90.5T128 1024m-.5-192q-26.5 0-45 19T64 896.5t18.5 45t45 18.5t45.5-18.5t19-45t-19-45.5t-45.5-19m.5-192q-53 0-90.5-37.5T0 512t37.5-90.5T128 384t90.5 37.5T256 512t-37.5 90.5T128 640m0-384q-53 0-90.5-37.5T0 128t37.5-90.5T128 0t90.5 37.5T256 128t-37.5 90.5T128 256m512 512q53 0 90.5 37.5T768 896t-37.5 90.5T640 1024t-90.5-37.5T512 896t37.5-90.5T640 768m-.5 192q26.5 0 45.5-19t19-45.5t-19-45t-45.5-18.5t-45 18.5T576 896t18.5 45.5t45 18.5"></svg:path>`,
})
export class WhhBraillegIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBraillehIcon],svg[whh-brailleh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640q-53 0-90.5-37.5T512 512t37.5-90.5T640 384t90.5 37.5T768 512t-37.5 90.5T640 640m0-384q-53 0-90.5-37.5T512 128t37.5-90.5T640 0t90.5 37.5T768 128t-37.5 90.5T640 256m-.5-192q-26.5 0-45 19T576 128.5t18.5 45t45 18.5t45.5-18.5t19-45T685 83t-45.5-19M128 1024q-53 0-90.5-37.5T0 896t37.5-90.5T128 768t90.5 37.5T256 896t-37.5 90.5T128 1024m-.5-192q-26.5 0-45 19T64 896.5t18.5 45t45 18.5t45.5-18.5t19-45t-19-45.5t-45.5-19m.5-192q-53 0-90.5-37.5T0 512t37.5-90.5T128 384t90.5 37.5T256 512t-37.5 90.5T128 640m0-384q-53 0-90.5-37.5T0 128t37.5-90.5T128 0t90.5 37.5T256 128t-37.5 90.5T128 256m512 512q53 0 90.5 37.5T768 896t-37.5 90.5T640 1024t-90.5-37.5T512 896t37.5-90.5T640 768m-.5 192q26.5 0 45.5-19t19-45.5t-19-45t-45.5-18.5t-45 18.5T576 896t18.5 45.5t45 18.5"></svg:path>`,
})
export class WhhBraillehIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBrailleiIcon],svg[whh-braillei-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640q-53 0-90.5-37.5T512 512t37.5-90.5T640 384t90.5 37.5T768 512t-37.5 90.5T640 640m0-192q-27 0-45.5 19T576 512.5t18.5 45t45 18.5t45.5-18.5t19-45.5t-18.5-45.5T640 448m0-192q-53 0-90.5-37.5T512 128t37.5-90.5T640 0t90.5 37.5T768 128t-37.5 90.5T640 256m-512 768q-53 0-90.5-37.5T0 896t37.5-90.5T128 768t90.5 37.5T256 896t-37.5 90.5T128 1024m0-192q-27 0-45.5 19T64 896.5t18.5 45t45 18.5t45.5-18.5t19-45t-18.5-45.5t-45.5-19m0-192q-53 0-90.5-37.5T0 512t37.5-90.5T128 384t90.5 37.5T256 512t-37.5 90.5T128 640m0-384q-53 0-90.5-37.5T0 128t37.5-90.5T128 0t90.5 37.5T256 128t-37.5 90.5T128 256m0-192q-27 0-45.5 19T64 128.5t19 45t45 18.5t45-18.5t19-45T173.5 83T128 64m512 704q53 0 90.5 37.5T768 896t-37.5 90.5T640 1024t-90.5-37.5T512 896t37.5-90.5T640 768m-.5 192q26.5 0 45.5-19t19-45.5t-19-45t-45.5-18.5t-45 18.5T576 896t18.5 45.5t45 18.5"></svg:path>`,
})
export class WhhBrailleiIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBraillejIcon],svg[whh-braillej-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640q-53 0-90.5-37.5T512 512t37.5-90.5T640 384t90.5 37.5T768 512t-37.5 90.5T640 640m0-384q-53 0-90.5-37.5T512 128t37.5-90.5T640 0t90.5 37.5T768 128t-37.5 90.5T640 256m-512 768q-53 0-90.5-37.5T0 896t37.5-90.5T128 768t90.5 37.5T256 896t-37.5 90.5T128 1024m-.5-192q-26.5 0-45 19T64 896.5t18.5 45t45 18.5t45.5-18.5t19-45t-19-45.5t-45.5-19m.5-192q-53 0-90.5-37.5T0 512t37.5-90.5T128 384t90.5 37.5T256 512t-37.5 90.5T128 640m0-384q-53 0-90.5-37.5T0 128t37.5-90.5T128 0t90.5 37.5T256 128t-37.5 90.5T128 256m0-192q-27 0-45.5 19T64 128.5t19 45t45 18.5t45-18.5t19-45T173.5 83T128 64m512 704q53 0 90.5 37.5T768 896t-37.5 90.5T640 1024t-90.5-37.5T512 896t37.5-90.5T640 768m-.5 192q26.5 0 45.5-19t19-45.5t-19-45t-45.5-18.5t-45 18.5T576 896t18.5 45.5t45 18.5"></svg:path>`,
})
export class WhhBraillejIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBraillekIcon],svg[whh-braillek-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640q-53 0-90.5-37.5T512 512t37.5-90.5T640 384t90.5 37.5T768 512t-37.5 90.5T640 640m-.5-192q-26.5 0-45 19T576 512.5t18.5 45t45 18.5t45.5-18.5t19-45.5t-19-45.5t-45.5-18.5m.5-192q-53 0-90.5-37.5T512 128t37.5-90.5T640 0t90.5 37.5T768 128t-37.5 90.5T640 256m-.5-192q-26.5 0-45 19T576 128.5t18.5 45t45 18.5t45.5-18.5t19-45T685 83t-45.5-19M128 1024q-53 0-90.5-37.5T0 896t37.5-90.5T128 768t90.5 37.5T256 896t-37.5 90.5T128 1024m0-384q-53 0-90.5-37.5T0 512t37.5-90.5T128 384t90.5 37.5T256 512t-37.5 90.5T128 640m-.5-192q-26.5 0-45 19T64 512.5t18.5 45t45 18.5t45.5-18.5t19-45.5t-19-45.5t-45.5-18.5m.5-192q-53 0-90.5-37.5T0 128t37.5-90.5T128 0t90.5 37.5T256 128t-37.5 90.5T128 256m512 512q53 0 90.5 37.5T768 896t-37.5 90.5T640 1024t-90.5-37.5T512 896t37.5-90.5T640 768m-.5 192q26.5 0 45.5-19t19-45.5t-19-45t-45.5-18.5t-45 18.5T576 896t18.5 45.5t45 18.5"></svg:path>`,
})
export class WhhBraillekIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBraillelIcon],svg[whh-braillel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640q-53 0-90.5-37.5T512 512t37.5-90.5T640 384t90.5 37.5T768 512t-37.5 90.5T640 640m-.5-192q-26.5 0-45 19T576 512.5t18.5 45t45 18.5t45.5-18.5t19-45.5t-19-45.5t-45.5-18.5m.5-192q-53 0-90.5-37.5T512 128t37.5-90.5T640 0t90.5 37.5T768 128t-37.5 90.5T640 256m-.5-192q-26.5 0-45 18.5T576 128t18.5 45.5t45 18.5t45.5-18.5t19-45T685 83t-45.5-19M128 1024q-53 0-90.5-37.5T0 896t37.5-90.5T128 768t90.5 37.5T256 896t-37.5 90.5T128 1024m0-384q-53 0-90.5-37.5T0 512t37.5-90.5T128 384t90.5 37.5T256 512t-37.5 90.5T128 640m0-384q-53 0-90.5-37.5T0 128t37.5-90.5T128 0t90.5 37.5T256 128t-37.5 90.5T128 256m512 512q53 0 90.5 37.5T768 896t-37.5 90.5T640 1024t-90.5-37.5T512 896t37.5-90.5T640 768m-.5 192q26.5 0 45.5-19t19-45.5t-19-45t-45.5-18.5t-45 18.5T576 896t18.5 45.5t45 18.5"></svg:path>`,
})
export class WhhBraillelIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBraillemIcon],svg[whh-braillem-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640q-53 0-90.5-37.5T512 512t37.5-90.5T640 384t90.5 37.5T768 512t-37.5 90.5T640 640m-.5-192q-26.5 0-45 19T576 512.5t18.5 45t45 18.5t45.5-18.5t19-45.5t-19-45.5t-45.5-18.5m.5-192q-53 0-90.5-37.5T512 128t37.5-90.5T640 0t90.5 37.5T768 128t-37.5 90.5T640 256m-512 768q-53 0-90.5-37.5T0 896t37.5-90.5T128 768t90.5 37.5T256 896t-37.5 90.5T128 1024m0-384q-53 0-90.5-37.5T0 512t37.5-90.5T128 384t90.5 37.5T256 512t-37.5 90.5T128 640m-.5-192q-26.5 0-45 19T64 512.5t18.5 45t45 18.5t45.5-18.5t19-45.5t-19-45.5t-45.5-18.5m.5-192q-53 0-90.5-37.5T0 128t37.5-90.5T128 0t90.5 37.5T256 128t-37.5 90.5T128 256m512 512q53 0 90.5 37.5T768 896t-37.5 90.5T640 1024t-90.5-37.5T512 896t37.5-90.5T640 768m-.5 192q26.5 0 45.5-19t19-45.5t-19-45t-45.5-18.5t-45 18.5T576 896t18.5 45.5t45 18.5"></svg:path>`,
})
export class WhhBraillemIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBraillenIcon],svg[whh-braillen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640q-53 0-90.5-37.5T512 512t37.5-90.5T640 384t90.5 37.5T768 512t-37.5 90.5T640 640m0-384q-53 0-90.5-37.5T512 128t37.5-90.5T640 0t90.5 37.5T768 128t-37.5 90.5T640 256m-512 768q-53 0-90.5-37.5T0 896t37.5-90.5T128 768t90.5 37.5T256 896t-37.5 90.5T128 1024m0-384q-53 0-90.5-37.5T0 512t37.5-90.5T128 384t90.5 37.5T256 512t-37.5 90.5T128 640m.5-192Q102 448 83 467t-19 45.5t19 45t45.5 18.5t45-18.5T192 512t-18.5-45.5t-45-18.5m-.5-192q-53 0-90.5-37.5T0 128t37.5-90.5T128 0t90.5 37.5T256 128t-37.5 90.5T128 256m512 512q53 0 90.5 37.5T768 896t-37.5 90.5T640 1024t-90.5-37.5T512 896t37.5-90.5T640 768m-.5 192q26.5 0 45.5-19t19-45.5t-19-45t-45.5-18.5t-45 18.5T576 896t18.5 45.5t45 18.5"></svg:path>`,
})
export class WhhBraillenIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBraillenineIcon],svg[whh-braillenine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640q-53 0-90.5-37.5T512 512t37.5-90.5T640 384t90.5 37.5T768 512t-37.5 90.5T640 640m0-384q-53 0-90.5-37.5T512 128t37.5-90.5T640 0t90.5 37.5T768 128t-37.5 90.5T640 256m.5-192Q614 64 595 83t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45T685.5 83t-45-19M128 1024q-53 0-90.5-37.5T0 896t37.5-90.5T128 768t90.5 37.5T256 896t-37.5 90.5T128 1024m0-384q-53 0-90.5-37.5T0 512t37.5-90.5T128 384t90.5 37.5T256 512t-37.5 90.5T128 640m.5-192Q102 448 83 467t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45t-18.5-45.5t-45-19m-.5-192q-53 0-90.5-37.5T0 128t37.5-90.5T128 0t90.5 37.5T256 128t-37.5 90.5T128 256m.5-192Q102 64 83 83t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45T173.5 83t-45-19M640 768q53 0 90.5 37.5T768 896t-37.5 90.5T640 1024t-90.5-37.5T512 896t37.5-90.5T640 768m.5 192q26.5 0 45-18.5t18.5-45t-18.5-45.5t-45-19t-45.5 19t-19 45.5t19 45t45.5 18.5"></svg:path>`,
})
export class WhhBraillenineIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBrailleoIcon],svg[whh-brailleo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640q-53 0-90.5-37.5T512 512t37.5-90.5T640 384t90.5 37.5T768 512t-37.5 90.5T640 640m0-384q-53 0-90.5-37.5T512 128t37.5-90.5T640 0t90.5 37.5T768 128t-37.5 90.5T640 256m0-192q-27 0-45.5 18.5T576 128t18.5 45.5t45 18.5t45.5-18.5t19-45T685.5 83T640 64m-512 960q-53 0-90.5-37.5T0 896t37.5-90.5T128 768t90.5 37.5T256 896t-37.5 90.5T128 1024m0-384q-53 0-90.5-37.5T0 512t37.5-90.5T128 384t90.5 37.5T256 512t-37.5 90.5T128 640m.5-192Q102 448 83 467t-19 45.5t19 45t45.5 18.5t45-18.5T192 512t-18.5-45.5t-45-18.5m-.5-192q-53 0-90.5-37.5T0 128t37.5-90.5T128 0t90.5 37.5T256 128t-37.5 90.5T128 256m512 512q53 0 90.5 37.5T768 896t-37.5 90.5T640 1024t-90.5-37.5T512 896t37.5-90.5T640 768m-.5 192q26.5 0 45.5-19t19-45.5t-19-45t-45.5-18.5t-45 18.5T576 896t18.5 45.5t45 18.5"></svg:path>`,
})
export class WhhBrailleoIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBrailleoneIcon],svg[whh-brailleone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640q-53 0-90.5-37.5T512 512t37.5-90.5T640 384t90.5 37.5T768 512t-37.5 90.5T640 640m-.5-192q-26.5 0-45 19T576 512.5t18.5 45t45 18.5t45.5-18.5t19-45t-19-45.5t-45.5-19m.5-192q-53 0-90.5-37.5T512 128t37.5-90.5T640 0t90.5 37.5T768 128t-37.5 90.5T640 256m-.5-192q-26.5 0-45 19T576 128.5t18.5 45t45 18.5t45.5-18.5t19-45T685 83t-45.5-19M128 1024q-53 0-90.5-37.5T0 896t37.5-90.5T128 768t90.5 37.5T256 896t-37.5 90.5T128 1024m0-192q-27 0-45.5 19T64 896.5t18.5 45t45 18.5t45.5-18.5t19-45t-18.5-45.5t-45.5-19m0-192q-53 0-90.5-37.5T0 512t37.5-90.5T128 384t90.5 37.5T256 512t-37.5 90.5T128 640m0-384q-53 0-90.5-37.5T0 128t37.5-90.5T128 0t90.5 37.5T256 128t-37.5 90.5T128 256m-.5-192q-26.5 0-45 19T64 128.5t18.5 45t45 18.5t45.5-18.5t19-45T173 83t-45.5-19M640 768q53 0 90.5 37.5T768 896t-37.5 90.5T640 1024t-90.5-37.5T512 896t37.5-90.5T640 768m-.5 192q26.5 0 45.5-18.5t19-45t-19-45.5t-45.5-19t-45 19t-18.5 45.5t18.5 45t45 18.5"></svg:path>`,
})
export class WhhBrailleoneIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBraillepIcon],svg[whh-braillep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640q-53 0-90.5-37.5T512 512t37.5-90.5T640 384t90.5 37.5T768 512t-37.5 90.5T640 640m-.5-192q-26.5 0-45 19T576 512.5t18.5 45t45 18.5t45.5-18.5t19-45.5t-19-45.5t-45.5-18.5m.5-192q-53 0-90.5-37.5T512 128t37.5-90.5T640 0t90.5 37.5T768 128t-37.5 90.5T640 256m-512 768q-53 0-90.5-37.5T0 896t37.5-90.5T128 768t90.5 37.5T256 896t-37.5 90.5T128 1024m0-384q-53 0-90.5-37.5T0 512t37.5-90.5T128 384t90.5 37.5T256 512t-37.5 90.5T128 640m0-384q-53 0-90.5-37.5T0 128t37.5-90.5T128 0t90.5 37.5T256 128t-37.5 90.5T128 256m512 512q53 0 90.5 37.5T768 896t-37.5 90.5T640 1024t-90.5-37.5T512 896t37.5-90.5T640 768m-.5 192q26.5 0 45.5-19t19-45.5t-19-45t-45.5-18.5t-45 18.5T576 896t18.5 45.5t45 18.5"></svg:path>`,
})
export class WhhBraillepIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBrailleqIcon],svg[whh-brailleq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640q-53 0-90.5-37.5T512 512t37.5-90.5T640 384t90.5 37.5T768 512t-37.5 90.5T640 640m0-384q-53 0-90.5-37.5T512 128t37.5-90.5T640 0t90.5 37.5T768 128t-37.5 90.5T640 256m-512 768q-53 0-90.5-37.5T0 896t37.5-90.5T128 768t90.5 37.5T256 896t-37.5 90.5T128 1024m0-384q-53 0-90.5-37.5T0 512t37.5-90.5T128 384t90.5 37.5T256 512t-37.5 90.5T128 640m0-384q-53 0-90.5-37.5T0 128t37.5-90.5T128 0t90.5 37.5T256 128t-37.5 90.5T128 256m512 512q53 0 90.5 37.5T768 896t-37.5 90.5T640 1024t-90.5-37.5T512 896t37.5-90.5T640 768m-.5 192q26.5 0 45.5-19t19-45.5t-19-45t-45.5-18.5t-45 18.5T576 896t18.5 45.5t45 18.5"></svg:path>`,
})
export class WhhBrailleqIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBraillerIcon],svg[whh-brailler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640q-53 0-90.5-37.5T512 512t37.5-90.5T640 384t90.5 37.5T768 512t-37.5 90.5T640 640m0-384q-53 0-90.5-37.5T512 128t37.5-90.5T640 0t90.5 37.5T768 128t-37.5 90.5T640 256m-.5-192q-26.5 0-45 18.5T576 128t18.5 45.5t45 18.5t45.5-18.5t19-45T685 83t-45.5-19M128 1024q-53 0-90.5-37.5T0 896t37.5-90.5T128 768t90.5 37.5T256 896t-37.5 90.5T128 1024m0-384q-53 0-90.5-37.5T0 512t37.5-90.5T128 384t90.5 37.5T256 512t-37.5 90.5T128 640m0-384q-53 0-90.5-37.5T0 128t37.5-90.5T128 0t90.5 37.5T256 128t-37.5 90.5T128 256m512 512q53 0 90.5 37.5T768 896t-37.5 90.5T640 1024t-90.5-37.5T512 896t37.5-90.5T640 768m-.5 192q26.5 0 45.5-19t19-45.5t-19-45t-45.5-18.5t-45 18.5T576 896t18.5 45.5t45 18.5"></svg:path>`,
})
export class WhhBraillerIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBraillesIcon],svg[whh-brailles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640q-53 0-90.5-37.5T512 512t37.5-90.5T640 384t90.5 37.5T768 512t-37.5 90.5T640 640m-.5-192q-26.5 0-45 19T576 512.5t18.5 45t45 18.5t45.5-18.5t19-45.5t-19-45.5t-45.5-18.5m.5-192q-53 0-90.5-37.5T512 128t37.5-90.5T640 0t90.5 37.5T768 128t-37.5 90.5T640 256m-512 768q-53 0-90.5-37.5T0 896t37.5-90.5T128 768t90.5 37.5T256 896t-37.5 90.5T128 1024m0-384q-53 0-90.5-37.5T0 512t37.5-90.5T128 384t90.5 37.5T256 512t-37.5 90.5T128 640m0-384q-53 0-90.5-37.5T0 128t37.5-90.5T128 0t90.5 37.5T256 128t-37.5 90.5T128 256m-.5-192q-26.5 0-45 18.5T64 128t18.5 45.5t45 18.5t45.5-18.5t19-45T173 83t-45.5-19M640 768q53 0 90.5 37.5T768 896t-37.5 90.5T640 1024t-90.5-37.5T512 896t37.5-90.5T640 768m-.5 192q26.5 0 45.5-19t19-45.5t-19-45t-45.5-18.5t-45 18.5t-18.5 45t18.5 45.5t45 19"></svg:path>`,
})
export class WhhBraillesIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBraillesevenIcon],svg[whh-brailleseven-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640q-53 0-90.5-37.5T512 512t37.5-90.5T640 384t90.5 37.5T768 512t-37.5 90.5T640 640m0-384q-53 0-90.5-37.5T512 128t37.5-90.5T640 0t90.5 37.5T768 128t-37.5 90.5T640 256m.5-192Q614 64 595 83t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45T685.5 83t-45-19M128 1024q-53 0-90.5-37.5T0 896t37.5-90.5T128 768t90.5 37.5T256 896t-37.5 90.5T128 1024m0-384q-53 0-90.5-37.5T0 512t37.5-90.5T128 384t90.5 37.5T256 512t-37.5 90.5T128 640m0-384q-53 0-90.5-37.5T0 128t37.5-90.5T128 0t90.5 37.5T256 128t-37.5 90.5T128 256m.5-192Q102 64 83 83t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45T173.5 83t-45-19M640 768q53 0 90.5 37.5T768 896t-37.5 90.5T640 1024t-90.5-37.5T512 896t37.5-90.5T640 768"></svg:path>`,
})
export class WhhBraillesevenIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBraillesixIcon],svg[whh-braillesix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640q-53 0-90.5-37.5T512 512t37.5-90.5T640 384t90.5 37.5T768 512t-37.5 90.5T640 640m0-384q-53 0-90.5-37.5T512 128t37.5-90.5T640 0t90.5 37.5T768 128t-37.5 90.5T640 256m-.5-192q-26.5 0-45 19T576 128.5t18.5 45t45 18.5t45.5-18.5t19-45T685 83t-45.5-19M128 1024q-53 0-90.5-37.5T0 896t37.5-90.5T128 768t90.5 37.5T256 896t-37.5 90.5T128 1024m0-384q-53 0-90.5-37.5T0 512t37.5-90.5T128 384t90.5 37.5T256 512t-37.5 90.5T128 640m0-384q-53 0-90.5-37.5T0 128t37.5-90.5T128 0t90.5 37.5T256 128t-37.5 90.5T128 256m-.5-192q-26.5 0-45 19T64 128.5t18.5 45t45 18.5t45.5-18.5t19-45T173 83t-45.5-19M640 768q53 0 90.5 37.5T768 896t-37.5 90.5T640 1024t-90.5-37.5T512 896t37.5-90.5T640 768m-.5 192q26.5 0 45.5-18.5t19-45t-19-45.5t-45.5-19t-45 19t-18.5 45.5t18.5 45t45 18.5"></svg:path>`,
})
export class WhhBraillesixIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBraillespaceIcon],svg[whh-braillespace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640q-53 0-90.5-37.5T512 512t37.5-90.5T640 384t90.5 37.5T768 512t-37.5 90.5T640 640m0-192q-27 0-45.5 19T576 512.5t18.5 45t45 18.5t45.5-18.5t19-45.5t-18.5-45.5T640 448m0-192q-53 0-90.5-37.5T512 128t37.5-90.5T640 0t90.5 37.5T768 128t-37.5 90.5T640 256m0-192q-27 0-45.5 19T576 128.5t18.5 45t45 18.5t45.5-18.5t19-45T685.5 83T640 64m-512 960q-53 0-90.5-37.5T0 896t37.5-90.5T128 768t90.5 37.5T256 896t-37.5 90.5T128 1024m.5-192Q102 832 83 851t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45t-18.5-45.5t-45-19m-.5-192q-53 0-90.5-37.5T0 512t37.5-90.5T128 384t90.5 37.5T256 512t-37.5 90.5T128 640m.5-192Q102 448 83 467t-19 45.5t19 45t45.5 18.5t45-18.5T192 512t-18.5-45.5t-45-18.5m-.5-192q-53 0-90.5-37.5T0 128t37.5-90.5T128 0t90.5 37.5T256 128t-37.5 90.5T128 256m.5-192Q102 64 83 83t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45T173.5 83t-45-19M640 768q53 0 90.5 37.5T768 896t-37.5 90.5T640 1024t-90.5-37.5T512 896t37.5-90.5T640 768m-.5 192q26.5 0 45.5-19t19-45.5t-18.5-45T640 832t-45.5 18.5T576 896t18.5 45.5t45 18.5"></svg:path>`,
})
export class WhhBraillespaceIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBrailletIcon],svg[whh-braillet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640q-53 0-90.5-37.5T512 512t37.5-90.5T640 384t90.5 37.5T768 512t-37.5 90.5T640 640m0-384q-53 0-90.5-37.5T512 128t37.5-90.5T640 0t90.5 37.5T768 128t-37.5 90.5T640 256m-512 768q-53 0-90.5-37.5T0 896t37.5-90.5T128 768t90.5 37.5T256 896t-37.5 90.5T128 1024m0-384q-53 0-90.5-37.5T0 512t37.5-90.5T128 384t90.5 37.5T256 512t-37.5 90.5T128 640m0-384q-53 0-90.5-37.5T0 128t37.5-90.5T128 0t90.5 37.5T256 128t-37.5 90.5T128 256m0-192q-27 0-45.5 19T64 128.5t18.5 45T128 192t45.5-18.5t18.5-45T173.5 83T128 64m512 704q53 0 90.5 37.5T768 896t-37.5 90.5T640 1024t-90.5-37.5T512 896t37.5-90.5T640 768m0 192q27 0 45.5-18.5t18.5-45t-18.5-45.5t-45.5-19t-45.5 19t-18.5 45.5t18.5 45T640 960"></svg:path>`,
})
export class WhhBrailletIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBraillethreeIcon],svg[whh-braillethree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640q-53 0-90.5-37.5T512 512t37.5-90.5T640 384t90.5 37.5T768 512t-37.5 90.5T640 640m0-384q-53 0-90.5-37.5T512 128t37.5-90.5T640 0t90.5 37.5T768 128t-37.5 90.5T640 256m-.5-192q-26.5 0-45 18.5t-18.5 45t19 45.5t45 19t45-19t19-45.5t-19-45T639.5 64M128 1024q-53 0-90.5-37.5T0 896t37.5-90.5T128 768t90.5 37.5T256 896t-37.5 90.5T128 1024m-.5-192q-26.5 0-45 19T64 896.5t18.5 45t45 18.5t45.5-18.5t19-45t-19-45.5t-45.5-19m.5-192q-53 0-90.5-37.5T0 512t37.5-90.5T128 384t90.5 37.5T256 512t-37.5 90.5T128 640m0-384q-53 0-90.5-37.5T0 128t37.5-90.5T128 0t90.5 37.5T256 128t-37.5 90.5T128 256m-.5-192q-26.5 0-45 18.5t-18.5 45T82.5 173t45 19t45.5-19t19-45.5t-19-45T127.5 64M640 768q53 0 90.5 37.5T768 896t-37.5 90.5T640 1024t-90.5-37.5T512 896t37.5-90.5T640 768m-.5 192q26.5 0 45.5-18.5t19-45t-18.5-45.5t-45.5-19t-45.5 19t-18.5 45.5t18.5 45t45 18.5"></svg:path>`,
})
export class WhhBraillethreeIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBrailletwoIcon],svg[whh-brailletwo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640q-53 0-90.5-37.5T512 512t37.5-90.5T640 384t90.5 37.5T768 512t-37.5 90.5T640 640m0-192q-27 0-45.5 19T576 512.5t19 45t45.5 18.5t45-18.5t18.5-45t-18.5-45.5t-45.5-19m0-192q-53 0-90.5-37.5T512 128t37.5-90.5T640 0t90.5 37.5T768 128t-37.5 90.5T640 256m0-192q-27 0-45.5 19T576 128.5t19 45t45.5 18.5t45-18.5t18.5-45T685.5 83T640 64m-512 960q-53 0-90.5-37.5T0 896t37.5-90.5T128 768t90.5 37.5T256 896t-37.5 90.5T128 1024m0-384q-53 0-90.5-37.5T0 512t37.5-90.5T128 384t90.5 37.5T256 512t-37.5 90.5T128 640m0-384q-53 0-90.5-37.5T0 128t37.5-90.5T128 0t90.5 37.5T256 128t-37.5 90.5T128 256m0-192q-27 0-45.5 19T64 128.5t19 45t45.5 18.5t45-18.5t18.5-45T173.5 83T128 64m512 704q53 0 90.5 37.5T768 896t-37.5 90.5T640 1024t-90.5-37.5T512 896t37.5-90.5T640 768m.5 192q26.5 0 45-18.5t18.5-45t-18.5-45.5t-45.5-19t-45.5 19t-18.5 45.5t19 45t45.5 18.5"></svg:path>`,
})
export class WhhBrailletwoIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBrailleuIcon],svg[whh-brailleu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640q-53 0-90.5-37.5T512 512t37.5-90.5T640 384t90.5 37.5T768 512t-37.5 90.5T640 640m-.5-192q-26.5 0-45 19T576 512.5t18.5 45t45 18.5t45.5-18.5t19-45t-19-45.5t-45.5-19m.5-192q-53 0-90.5-37.5T512 128t37.5-90.5T640 0t90.5 37.5T768 128t-37.5 90.5T640 256m-.5-192q-26.5 0-45 19T576 128.5t18.5 45t45 18.5t45.5-18.5t19-45T685 83t-45.5-19M128 1024q-53 0-90.5-37.5T0 896t37.5-90.5T128 768t90.5 37.5T256 896t-37.5 90.5T128 1024m0-384q-53 0-90.5-37.5T0 512t37.5-90.5T128 384t90.5 37.5T256 512t-37.5 90.5T128 640m-.5-192q-26.5 0-45 19T64 512.5t18.5 45t45 18.5t45.5-18.5t19-45t-19-45.5t-45.5-19m.5-192q-53 0-90.5-37.5T0 128t37.5-90.5T128 0t90.5 37.5T256 128t-37.5 90.5T128 256m512 512q53 0 90.5 37.5T768 896t-37.5 90.5T640 1024t-90.5-37.5T512 896t37.5-90.5T640 768"></svg:path>`,
})
export class WhhBrailleuIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBraillevIcon],svg[whh-braillev-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640q-53 0-90.5-37.5T512 512t37.5-90.5T640 384t90.5 37.5T768 512t-37.5 90.5T640 640m.5-192q-26.5 0-45.5 19t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45t-18.5-45.5t-45-19m-.5-192q-53 0-90.5-37.5T512 128t37.5-90.5T640 0t90.5 37.5T768 128t-37.5 90.5T640 256m.5-192Q614 64 595 83t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45T685.5 83t-45-19M128 1024q-53 0-90.5-37.5T0 896t37.5-90.5T128 768t90.5 37.5T256 896t-37.5 90.5T128 1024m0-384q-53 0-90.5-37.5T0 512t37.5-90.5T128 384t90.5 37.5T256 512t-37.5 90.5T128 640m0-384q-53 0-90.5-37.5T0 128t37.5-90.5T128 0t90.5 37.5T256 128t-37.5 90.5T128 256m512 512q53 0 90.5 37.5T768 896t-37.5 90.5T640 1024t-90.5-37.5T512 896t37.5-90.5T640 768"></svg:path>`,
})
export class WhhBraillevIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBraillewIcon],svg[whh-braillew-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640q-53 0-90.5-37.5T512 512t37.5-90.5T640 384t90.5 37.5T768 512t-37.5 90.5T640 640m0-384q-53 0-90.5-37.5T512 128t37.5-90.5T640 0t90.5 37.5T768 128t-37.5 90.5T640 256m-512 768q-53 0-90.5-37.5T0 896t37.5-90.5T128 768t90.5 37.5T256 896t-37.5 90.5T128 1024m.5-192Q102 832 83 851t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45t-18.5-45.5t-45-19m-.5-192q-53 0-90.5-37.5T0 512t37.5-90.5T128 384t90.5 37.5T256 512t-37.5 90.5T128 640m0-384q-53 0-90.5-37.5T0 128t37.5-90.5T128 0t90.5 37.5T256 128t-37.5 90.5T128 256m.5-192Q102 64 83 83t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45T173.5 83t-45-19M640 768q53 0 90.5 37.5T768 896t-37.5 90.5T640 1024t-90.5-37.5T512 896t37.5-90.5T640 768"></svg:path>`,
})
export class WhhBraillewIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBraillexIcon],svg[whh-braillex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640q-53 0-90.5-37.5T512 512t37.5-90.5T640 384t90.5 37.5T768 512t-37.5 90.5T640 640m.5-192q-26.5 0-45.5 19t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45t-18.5-45.5t-45-19m-.5-192q-53 0-90.5-37.5T512 128t37.5-90.5T640 0t90.5 37.5T768 128t-37.5 90.5T640 256m-512 768q-53 0-90.5-37.5T0 896t37.5-90.5T128 768t90.5 37.5T256 896t-37.5 90.5T128 1024m0-384q-53 0-90.5-37.5T0 512t37.5-90.5T128 384t90.5 37.5T256 512t-37.5 90.5T128 640m.5-192Q102 448 83 467t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45t-18.5-45.5t-45-19m-.5-192q-53 0-90.5-37.5T0 128t37.5-90.5T128 0t90.5 37.5T256 128t-37.5 90.5T128 256m512 512q53 0 90.5 37.5T768 896t-37.5 90.5T640 1024t-90.5-37.5T512 896t37.5-90.5T640 768"></svg:path>`,
})
export class WhhBraillexIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBrailleyIcon],svg[whh-brailley-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640q-53 0-90.5-37.5T512 512t37.5-90.5T640 384t90.5 37.5T768 512t-37.5 90.5T640 640m0-384q-53 0-90.5-37.5T512 128t37.5-90.5T640 0t90.5 37.5T768 128t-37.5 90.5T640 256m-512 768q-53 0-90.5-37.5T0 896t37.5-90.5T128 768t90.5 37.5T256 896t-37.5 90.5T128 1024m0-384q-53 0-90.5-37.5T0 512t37.5-90.5T128 384t90.5 37.5T256 512t-37.5 90.5T128 640m.5-192Q102 448 83 467t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45t-18.5-45.5t-45-19m-.5-192q-53 0-90.5-37.5T0 128t37.5-90.5T128 0t90.5 37.5T256 128t-37.5 90.5T128 256m512 512q53 0 90.5 37.5T768 896t-37.5 90.5T640 1024t-90.5-37.5T512 896t37.5-90.5T640 768"></svg:path>`,
})
export class WhhBrailleyIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBraillezIcon],svg[whh-braillez-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640q-53 0-90.5-37.5T512 512t37.5-90.5T640 384t90.5 37.5T768 512t-37.5 90.5T640 640m0-384q-53 0-90.5-37.5T512 128t37.5-90.5T640 0t90.5 37.5T768 128t-37.5 90.5T640 256m-.5-192q-26.5 0-45 19T576 128.5t18.5 45t45 18.5t45.5-18.5t19-45T685 83t-45.5-19M128 1024q-53 0-90.5-37.5T0 896t37.5-90.5T128 768t90.5 37.5T256 896t-37.5 90.5T128 1024m0-384q-53 0-90.5-37.5T0 512t37.5-90.5T128 384t90.5 37.5T256 512t-37.5 90.5T128 640m-.5-192q-26.5 0-45 19T64 512.5t18.5 45t45 18.5t45.5-18.5t19-45t-19-45.5t-45.5-19m.5-192q-53 0-90.5-37.5T0 128t37.5-90.5T128 0t90.5 37.5T256 128t-37.5 90.5T128 256m512 512q53 0 90.5 37.5T768 896t-37.5 90.5T640 1024t-90.5-37.5T512 896t37.5-90.5T640 768"></svg:path>`,
})
export class WhhBraillezIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBraillezeroIcon],svg[whh-braillezero-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640q-53 0-90.5-37.5T512 512t37.5-90.5T640 384t90.5 37.5T768 512t-37.5 90.5T640 640m0-384q-53 0-90.5-37.5T512 128t37.5-90.5T640 0t90.5 37.5T768 128t-37.5 90.5T640 256m-.5-192q-26.5 0-45 19T576 128.5t18.5 45t45 18.5t45.5-18.5t19-45T685 83t-45.5-19M128 1024q-53 0-90.5-37.5T0 896t37.5-90.5T128 768t90.5 37.5T256 896t-37.5 90.5T128 1024m0-384q-53 0-90.5-37.5T0 512t37.5-90.5T128 384t90.5 37.5T256 512t-37.5 90.5T128 640m-.5-192q-26.5 0-45 19T64 512.5t18.5 45t45 18.5t45.5-18.5t19-45t-19-45.5t-45.5-19m.5-192q-53 0-90.5-37.5T0 128t37.5-90.5T128 0t90.5 37.5T256 128t-37.5 90.5T128 256m-.5-192q-26.5 0-45 19T64 128.5t18.5 45t45 18.5t45.5-18.5t19-45T173 83t-45.5-19M640 768q53 0 90.5 37.5T768 896t-37.5 90.5T640 1024t-90.5-37.5T512 896t37.5-90.5T640 768"></svg:path>`,
})
export class WhhBraillezeroIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBrainIcon],svg[whh-brain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928 512q-12 0-47-16t-76-32t-69-16q-26 0-58 16.5t-64 40t-66.5 47t-77.5 40t-86 16.5q-52 0-90-25.5T256 512q0-33 21.5-57.5t52-37.5t72.5-20.5t75-9.5t67-2v-1q-13 0-22.5-9.5T512 352t9.5-22.5T544 320q-182 0-273 63q-3 2-22 15.5T225 415t-22.5 12t-30 12t-33 6t-43.5 3q-45 0-70.5-38T0 320q0-70 44-131T160 87.5t164-64T512 0q139 0 257 51.5t186.5 140T1024 384q0 45-26 86.5T928 512M462 640l114-32q0-25 65-60.5t95-35.5q66 0 113 33t47 63q0 25-65 60.5T736 704q-22 0-27 48t-5 208h-64q0-50-59-141T472 704q-12-6-19.5-21.5t-5-29T462 640"></svg:path>`,
})
export class WhhBrainIcon {
  readonly viewBox = input("0 0 1024 960")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBranchIcon],svg[whh-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 1024H800q-13 0-22.5-9.5T768 992V800q0-13 9.5-22.5T800 768h32v-64q0-26-16.5-49T768 613t-60.5-34t-70-33t-61.5-30v252h32q13 0 22.5 9.5T640 800v192q0 13-9.5 22.5T608 1024H416q-13 0-22.5-9.5T384 992V800q0-13 9.5-22.5T416 768h32V521q-22 12-61.5 29.5T317 582t-60.5 32.5t-47.5 41t-17 48.5v64h32q13 0 22.5 9.5T256 800v192q0 13-9.5 22.5T224 1024H32q-13 0-22.5-9.5T0 992V800q0-13 9.5-22.5T32 768h32V640q0-30 28.5-60t71-53.5t92.5-50t92.5-49.5t71-51t28.5-56v-64h-32q-13 0-22.5-9.5T384 224V32q0-13 9.5-22.5T416 0h192q13 0 22.5 9.5T640 32v192q0 13-9.5 22.5T608 256h-32v64q0 27 28.5 54.5t71 50.5t92.5 50t92.5 51t71 54t28.5 60v128h32q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5T992 1024"></svg:path>`,
})
export class WhhBranchIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBreadIcon],svg[whh-bread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M769.07 629q18 17 67 8t90-39q50 79 74.5 148.5t23.502 119.5t-13.5 84.5t-35.5 56.5q-46 47-145.5-30.5T500.07 668l-72-72q-241-241-289-292q-137-149-139-212q-1-25 17-43q21-21 53-33.5t77.5-15t109 17T392.07 78q-8 11-11 14q-26 30-60.5 54t-63.5 35q11 9 33.5 10.5t48.5-5t53.5-22t47.5-37.5q0-1 9-13q93 62 197 159q-1 0-4 4.5t-5 6.5q-27 30-61 54t-63 35q11 9 33.5 10.5t48-5t53-22t47.5-36.5l2.5 2.5l2.5 2.5q113 113 189 219q-59 63-120 85"></svg:path>`,
})
export class WhhBreadIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBreakableIcon],svg[whh-breakable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 698v198h128q26 0 45 18.5t19 45t-19 45.5t-45 19H192q-27 0-45.5-19T128 959.5t18.5-45T192 896h128V698Q183 672 91.5 554.5T0 282Q0 121 98 0h222l64 192l-192 64l192 320l-64-256l192-64L448 0h221q99 121 99 282q0 155-91.5 272.5T448 698"></svg:path>`,
})
export class WhhBreakableIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBriefcaseIcon],svg[whh-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 1024H64q-26 0-45-19T0 960V576h384v64q0 26 19 45t45 19h128q27 0 45.5-19t18.5-45v-64h384v384q0 27-19 45.5t-45 18.5M576 575.5q0 26.5-18.5 45.5t-45 19t-45.5-19t-19-45.5t19-45t45.5-18.5t45 18.5t18.5 45m0-127.5H448q-26 0-45 18.5T384 512H0V320q0-27 18.5-45.5T64 256h192v-64q0-80 56-136T448 0h128q80 0 136 56t56 136v64h192q26 0 45 18.5t19 45.5v192H640q0-27-18.5-45.5T576 448m64-256q0-27-18.5-45.5T576 128H448q-26 0-45 18.5T384 192v64h256z"></svg:path>`,
})
export class WhhBriefcaseIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBriefcasethreeIcon],svg[whh-briefcasethree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 1024H128q-53 0-90.5-37.5T0 896V576q0-27 18.5-45.5T64 512h64v64q0 26 18.5 45t45.5 19h128q27 0 45.5-19t18.5-45v-64h256v64q0 26 18.5 45t45.5 19h128q27 0 45.5-19t18.5-45v-64h64q27 0 45.5 18.5T1024 576v320q0 53-37.5 90.5T896 1024m-96-576q13 0 22.5 9.5T832 480v64q0 13-9.5 22.5T800 576h-64q-13 0-22.5-9.5T704 544v-64q0-13 9.5-22.5T736 448zm-512 0q13 0 22.5 9.5T320 480v64q0 13-9.5 22.5T288 576h-64q-13 0-22.5-9.5T192 544v-64q0-13 9.5-22.5T224 448zm672 0h-64q0-27-18.5-45.5T832 384H704q-27 0-45.5 18.5T640 448H384q0-27-19-45.5T320 384H192q-27 0-45.5 18.5T128 448H64q-27 0-45.5-19T0 384q0-7 1-13q5-49 41.5-82t85.5-33h128v-64q0-80 56-136T448 0h128q80 0 136 56t56 136v64h128q49 0 85.5 33t41.5 82q1 6 1 13q0 26-18.5 45T960 448M640 192q0-27-19-45.5T576 128H448q-27 0-45.5 18.5T384 192v64h256z"></svg:path>`,
})
export class WhhBriefcasethreeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBriefcasetwoIcon],svg[whh-briefcasetwo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 1024H64q-26 0-45-18.5T0 960V448h192v64h-64q0 27 18.5 45.5T192 576h128q27 0 45.5-18.5T384 512h-64v-64h384v64h-64q0 27 19 45.5t45 18.5h128q27 0 45.5-18.5T896 512h-64v-64h192v512q0 27-18.5 45.5T960 1024M832 320H704q-26 0-45 19t-19 45H384q0-26-19-45t-45-19H192q-27 0-45.5 19T128 384H0V256q0-26 19-45t45-19h192v-64q0-53 37.5-90.5T384 0h256q53 0 90.5 37.5T768 128v64h192q26 0 45 19t19 45v128H896q0-26-18.5-45T832 320M576 128H448q-26 0-45 18.5T384 192h256q0-26-18.5-45T576 128"></svg:path>`,
})
export class WhhBriefcasetwoIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBrightnessIcon],svg[whh-brightness-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M959.5 576q-26.5 0-45-18.5t-18.5-45t18.5-45.5t45-19t45.5 19t19 45.5t-19 45t-45.5 18.5m-127-320q-26.5 0-45.5-18.5t-19-45t19-45.5t45.5-19t45 19t18.5 45.5t-18.5 45t-45 18.5M512 832q-87 0-160.5-43T235 672.5T192 512t43-160.5T351.5 235T512 192t160.5 43T789 351.5T832 512t-43 160.5T672.5 789T512 832m0-512q-80 0-136 56.5t-56 136T376 648t136 56t136-56t56-135.5t-56-136T512 320m0-192q-26 0-45-18.5t-19-45T467 19t45-19t45 19t19 45.5t-19 45t-45 18.5M191.5 256q-26.5 0-45-18.5t-18.5-45t18.5-45.5t45-19t45.5 19t19 45.5t-19 45t-45.5 18.5m-127 320Q38 576 19 557.5t-19-45T19 467t45.5-19t45 19t18.5 45.5t-18.5 45t-45 18.5m127 192q26.5 0 45.5 19t19 45.5t-19 45t-45.5 18.5t-45-18.5t-18.5-45t18.5-45.5t45-19m320 128q26.5 0 45.5 19t19 45.5t-18.5 45T512 1024t-45.5-18.5t-18.5-45t18.5-45.5t45-19M832 768q27 0 45.5 19t18.5 45.5t-19 45t-45 18.5t-45-18.5t-19-45t18.5-45.5t45.5-19"></svg:path>`,
})
export class WhhBrightnessIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBrightnessaltIcon],svg[whh-brightnessalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m884 419l140 93l-140 93q0 2-1.5 6t-2.5 5l75 152l-169 11q-1 1-3.5 4t-3.5 4l-11 168l-151-74q-2 0-6 1.5t-6 1.5l-93 140l-93-140q-2 0-6-1.5t-6-1.5l-151 74l-11-169q-1-1-4-3.5t-4-3.5L69 768l74-152q0-1-1.5-5t-1.5-6L0 512l140-93q0-2 1.5-6t2.5-5L69 256l169-11q1-1 3.5-4t3.5-4l11-168l151 74q2 0 6-1.5t6-2.5L512 0l93 139q2 1 6 2.5t6 1.5l151-74l11 169q1 1 4 3.5t4 3.5l168 11l-75 151q1 2 2.5 6t1.5 6M512 256q-106 0-181 75t-75 181t75 181t181 75t181-75t75-181t-75-181t-181-75"></svg:path>`,
})
export class WhhBrightnessaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBrightnessaltautoIcon],svg[whh-brightnessaltauto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m884 419l140 93l-140 93q0 2-1.5 6t-1.5 5l74 152l-169 11q-1 1-3.5 4t-3.5 4l-11 168l-151-74q-2 0-6 1.5t-6 1.5l-93 140l-93-140q-2 0-6-1.5t-6-1.5l-151 74l-11-169q-1-1-4-3.5t-4-3.5L69 768l74-152q0-1-1.5-5t-1.5-6L0 512l140-93q0-2 1.5-6t2.5-5L69 256l169-11q1-1 3.5-4t3.5-4l11-168l151 74q2 0 6-1.5t6-2.5L512 0l93 139q2 1 6 2.5t6 1.5l151-75l11 170q1 1 4 3.5t4 3.5l168 11l-74 151q0 2 1.5 6t1.5 6M512 256q-106 0-181 75t-75 181q0 88 54 157t138 91v8h128v-8q84-22 138-91t54-157q0-106-75-181t-181-75m96 384q-13 0-22.5-9.5T576 608v-32H448v32q0 13-9.5 22.5T416 640t-22.5-9.5T384 608V448q0-27 18.5-45.5T448 384h128q26 0 45 18.5t19 45.5v160q0 13-9.5 22.5T608 640m-32-192H448v64h128z"></svg:path>`,
})
export class WhhBrightnessaltautoIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBrightnessaltfullIcon],svg[whh-brightnessaltfull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m884 419l140 93l-140 93q0 2-1.5 6t-2.5 5l75 152l-169 11q-1 1-3.5 4t-3.5 4l-11 168l-151-74q-2 0-6 1.5t-6 1.5l-93 140l-93-140q-2 0-6-1.5t-6-1.5l-151 74l-11-169q-1-1-4-3.5t-4-3.5L69 768l75-152q-1-1-2.5-5t-1.5-6L0 512l140-93q0-2 1.5-6t2.5-5L69 256l169-11q1-1 3.5-4t3.5-4l11-168l151 74q2 0 6-1.5t6-2.5L512 0l93 139q2 1 6 2.5t6 1.5l151-74l11 169q1 1 4 3.5t4 3.5l168 11l-75 151q1 2 2.5 6t1.5 6M512 256q-106 0-181 75t-75 181t75 181t181 75t181-75t75-181t-75-181t-181-75m0 448q-80 0-136-56.5t-56-136T376 376t136-56t136 56t56 135.5t-56 136T512 704"></svg:path>`,
})
export class WhhBrightnessaltfullIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBrightnessalthalfIcon],svg[whh-brightnessalthalf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m884 419l140 93l-140 93q0 2-1.5 6t-2.5 5l75 152l-169 11q-1 1-3.5 4t-3.5 4l-11 168l-151-74q-2 0-6 1.5t-6 1.5l-93 140l-93-140q-2 0-6-1.5t-6-1.5l-151 74l-11-169q-1-1-4-3.5t-4-3.5L69 768l75-152q-1-1-2.5-5t-1.5-6L0 512l140-93q0-2 1.5-6t2.5-5L69 256l169-11q1-1 3.5-4t3.5-4l11-168l151 74q2 0 6-1.5t6-2.5L512 0l93 139q2 1 6 2.5t6 1.5l151-74l11 169q1 1 4 3.5t4 3.5l168 11l-74 151q0 2 1.5 6t1.5 6M512 256q-106 0-181 75t-75 181t75 181t181 75t181-75t75-181t-75-181t-181-75M320 511.5q0-79.5 56-135.5t136-56v384q-80 0-136-56.5t-56-136"></svg:path>`,
})
export class WhhBrightnessalthalfIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBrightnessfullIcon],svg[whh-brightnessfull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 576q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45-19t45.5 19t19 45.5t-18.5 45T960 576M832.5 256q-26.5 0-45.5-18.5t-19-45t19-45.5t45.5-19t45 19t18.5 45.5t-18.5 45t-45 18.5M512 832q-87 0-160.5-43T235 672.5T192 512t43-160.5T351.5 235T512 192t160.5 43T789 351.5T832 512t-43 160.5T672.5 789T512 832m0-704q-26 0-45-18.5t-19-45T467 19t45-19t45 19t19 45.5t-19 45t-45 18.5M191.5 256q-26.5 0-45-18.5t-18.5-45t18.5-45.5t45-19t45.5 19t19 45.5t-19 45t-45.5 18.5M64 576q-26 0-45-18.5t-19-45T19 467t45.5-19t45 19t18.5 45.5t-19 45T64 576m127.5 192q26.5 0 45.5 19t19 45.5t-19 45t-45.5 18.5t-45-18.5t-18.5-45t18.5-45.5t45-19M512 896q26 0 45 19t19 45.5t-19 45t-45.5 18.5t-45-18.5t-18.5-45t19-45.5t45-19m320.5-128q26.5 0 45 19t18.5 45.5t-19 45t-45 18.5t-45-18.5t-19-45t19-45.5t45.5-19"></svg:path>`,
})
export class WhhBrightnessfullIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBrightnesshalfIcon],svg[whh-brightnesshalf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M959.5 576q-26.5 0-45-18.5t-18.5-45t18.5-45.5t45-19t45.5 19t19 45.5t-19 45t-45.5 18.5m-127-320q-26.5 0-45.5-18.5t-19-45t19-45.5t45.5-19t45 19t18.5 45.5t-18.5 45t-45 18.5M512 832q-87 0-160.5-43T235 672.5T192 512t43-160.5T351.5 235T512 192t160.5 43T789 351.5T832 512t-43 160.5T672.5 789T512 832m0-512v384q80 0 136-56t56-135.5t-56-136T512 320m0-192q-26 0-45-18.5t-19-45T467 19t45-19t45 19t19 45.5t-19 45t-45 18.5M191.5 256q-26.5 0-45-18.5t-18.5-45t18.5-45.5t45-19t45.5 19t19 45.5t-19 45t-45.5 18.5m-127 320Q38 576 19 557.5t-19-45T19 467t45.5-19t45 19t18.5 45.5t-18.5 45t-45 18.5m127 192q26.5 0 45.5 19t19 45.5t-19 45t-45.5 18.5t-45-18.5t-18.5-45t18.5-45.5t45-19m320 128q26.5 0 45.5 19t19 45.5t-18.5 45T512 1024t-45.5-18.5t-18.5-45t18.5-45.5t45-19M832 768q27 0 45.5 19t18.5 45.5t-19 45t-45 18.5t-45-18.5t-19-45t18.5-45.5t45.5-19"></svg:path>`,
})
export class WhhBrightnesshalfIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBringforwardIcon],svg[whh-bringforward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.488 1024h-512q-27 0-45.5-18.5t-18.5-45.5V704h64v256h512V448h-256v-64h256q27 0 45.5 18.5t18.5 45.5v512q0 27-18.5 45.5t-45.5 18.5m-384-384h-512q-27 0-45.5-18.5T.488 576V64q0-27 18.5-45.5T64.488 0h512q27 0 45.5 18.5t18.5 45.5v512q0 27-18.5 45.5t-45.5 18.5"></svg:path>`,
})
export class WhhBringforwardIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBringtofrontIcon],svg[whh-bringtofront-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.193 1024h-384q-27 0-45.5-18.5t-18.5-45.5v-64h64v64h384V576h-64v-64h64q26 0 45 19t19 45v384q0 27-19 45.5t-45 18.5m-192-192h-512q-27 0-45.5-18.5t-18.5-45.5V256q0-26 18.5-45t45.5-19h512q27 0 45.5 19t18.5 45v512q0 27-19 45.5t-45 18.5m-320-768h-384v384h64v64h-64q-27 0-45.5-18.5T.193 448V64q0-26 18.5-45t45.5-19h384q27 0 45.5 19t18.5 45v64h-64z"></svg:path>`,
})
export class WhhBringtofrontIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBrokenheartIcon],svg[whh-brokenheart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m805.694 724l-293 300l-294-300q-119-122-168.5-231T.694 256q0-106 75-181t181-75q64 0 119.5 29.5t90.5 80.5l46 274l-128 64l128 384V480l128-64l-90-293q34-57 92-90t126-33q106 0 181 75t75 181q0 127-49.5 236.5T805.695 724z"></svg:path>`,
})
export class WhhBrokenheartIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBrokenlinkIcon],svg[whh-brokenlink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M948.21 948.5q-76.5 76.5-185 76.5t-184.5-77l-52-51l113-64l25 24q39 40 95.5 40t96.5-40t40-96.5t-40-95.5l-188-189l76-101l203 204q77 76 77 184.5t-76.5 185M231.71 392l345 121l-32 128l-350-130q-105-27-159-120t-26-197t122-157.5t199-26.5l214 87l-32 128l-211-94q-54-14-103 14t-64 82t13.5 102.5t83.5 62.5"></svg:path>`,
})
export class WhhBrokenlinkIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBroomIcon],svg[whh-broom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1005 110L697 418q19 51-9 79t-79 9l-1 1q29 47 30.5 95T621 689t-54 73q-89 89-128 262q-46-23-101-60q-11-50 4-99t52-83q-46 15-79 50t-45 81q-49-39-85-74q-2-2-5.5-6t-4.5-6q34-34 48-77q-35 31-78 45q-31-35-55-67q44-14 78-46.5t48-77.5q-32 36-78 51.5T44 663q-27-43-44-78q173-40 262-128q34-35 73-54t87-17.5t95 30.5l1-1q-19-51 9-79t79-9L914 19q19-19 45.5-19t45.5 19t19 45.5t-19 45.5"></svg:path>`,
})
export class WhhBroomIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBrowserIcon],svg[whh-browser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-640-864q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm192 0q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm448 0q0-13-9.5-22.5t-22.5-9.5h-320q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h320q13 0 22.5-9.5t9.5-22.5zm0 192q0-13-9.5-22.5t-22.5-9.5h-704q-13 0-22.5 9.5t-9.5 22.5v512q0 13 9.5 22.5t22.5 9.5h704q13 0 22.5-9.5t9.5-22.5z"></svg:path>`,
})
export class WhhBrowserIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBrushIcon],svg[whh-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M862.965 1020q-59 16-142.5-13.5t-145.5-87.5t-62-115q0-34 5-66q42-1 84.5-19t70.5-46q47-48 61-106q62 2 99 45q20 23 31.5 56.5t14.5 64t10.5 62t19 54t41 37t75.5 14.5q6 23-48 63.5t-114 56.5m-466-392q-27-28-96.5-116t-145-193.5T32.965 121t-25-114t113.5 25.5t196 123.5t192.5 145.5t115 97.5q47 47 47 114t-47 114.5t-114 47.5t-114-47m147-254q-2 81-46.5 126t-124.5 46q4 6 44.5 49t44.5 48q84 1 131.5-47t46.5-132q-5-4-47.5-44.5t-48.5-45.5"></svg:path>`,
})
export class WhhBrushIcon {
  readonly viewBox = input("0 0 1026 1026")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBtwoevolutionIcon],svg[whh-btwoevolution-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.232 320h-32v128l-128-128v448q0 27-18.5 45.5t-45.5 18.5h-64v192l-192-192h-256q-27 0-45.5-18.5t-18.5-45.5V576h-128q-27 0-45.5-18.5T.232 512V128q0-27 18.5-45.5t45.5-18.5h384q27 0 45.5 18.5t18.5 45.5v64h128V32q0-13 9.5-22.5t22.5-9.5h320q13 0 22.5 9.5t9.5 22.5v256q0 13-9.5 22.5t-22.5 9.5m-544-160q0-13-9.5-22.5t-22.5-9.5h-320q-13 0-22.5 9.5t-9.5 22.5v320q0 13 9.5 22.5t22.5 9.5h96V256q0-26 18.5-45t45.5-19h192zm512-64q0-13-9.5-22.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 22.5v96h64q26 0 45 18.5t19 45.5h96q13 0 22.5-9.5t9.5-22.5z"></svg:path>`,
})
export class WhhBtwoevolutionIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBucketIcon],svg[whh-bucket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M996 990q-28 33-68 33t-68-33t-28-79t28-79l36-51V584q0 26-17 43L517 990q-34 33-81 33t-81-33L33 668Q0 634 0 587t33-81l287-286v100q0 53 37.5 90.5T448 448t90.5-37.5T576 320v-76l268 268h52q27 0 45.5 18.5T960 576v205l36 51q28 33 28 79t-28 79M448.5 384q-26.5 0-45.5-19t-19-45V64q0-27 19-45.5T448.5 0t45 18.5T512 64v256q0 26-18.5 45t-45 19"></svg:path>`,
})
export class WhhBucketIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBugIcon],svg[whh-bug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.512 448q26 0 45 19t19 45.5t-18.5 45t-45.5 18.5h-67q-5 53-19 106l101 26q37 10 46 45q6 14 0 32q-2 10-9 19q-50 156-52 156q-24 0-44-19t-20-45v-77l-68-18q-53 103-136 163t-180 60t-180-60t-136-163l-68 18v77q0 26-20 45t-44 19q-2 0-52-156q-7-9-9-19q-6-18 0-32q10-35 46-45l101-26q-14-53-19-106h-67q-26 0-45-18.5t-19-45t19-45.5t45-19h67q5-53 19-106l-101-26q-37-9-46-45q-6-14 0-32q2-10 9-19q50-156 52-156q24 0 44 19t20 45v78l68 17q53-103 136-163t180-60t180 60t136 163l68-17v-78q0-26 20-45t44-19q1 0 52 156q7 9 9 19q6 18 0 32q-10 36-46 45l-101 26q14 54 19 106zm-319.5 448q26.5 0 45-18.5t18.5-45t-18.5-45.5t-45-19t-45.5 19t-19 45.5t19 45t45.5 18.5m-256 0q26.5 0 45-18.5t18.5-45t-18.5-45.5t-45-19t-45.5 19t-19 45.5t19 45t45.5 18.5m-64-256q26.5 0 45-18.5t18.5-45t-18.5-45.5t-45-19t-45.5 19t-19 45.5t19 45t45.5 18.5m191.5-512q-62 0-122 45t-97 112.5t-37 130.5q10 5 21 9.5t20.5 7.5t24.5 5.5t23.5 4t27 2.5t26 2t28.5 1h85q65 0 97.5-1t79-8.5t79.5-22.5q0-63-36.5-130.5t-97-112.5t-122.5-45m192.5 384q-26.5 0-45.5 19t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45t-18.5-45.5t-45-19"></svg:path>`,
})
export class WhhBugIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBuildingIcon],svg[whh-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 1024H32q-13 0-22.5-9.5T0 992t9.5-22.5T32 960h32q27 0 45.5-19t18.5-45V64q0-26 19-45t45-19h640q27 0 45.5 19T896 64v832q0 27 19 45.5t45 18.5h32q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5M384 160q0-13-9.5-22.5T352 128h-64q-13 0-22.5 9.5T256 160v64q0 13 9.5 22.5T288 256h64q13 0 22.5-9.5T384 224zm0 192q0-13-9.5-22.5T352 320h-64q-13 0-22.5 9.5T256 352v64q0 13 9.5 22.5T288 448h64q13 0 22.5-9.5T384 416zm0 192q0-13-9.5-22.5T352 512h-64q-13 0-22.5 9.5T256 544v64q0 13 9.5 22.5T288 640h64q13 0 22.5-9.5T384 608zm192-384q0-13-9.5-22.5T544 128h-64q-13 0-22.5 9.5T448 160v64q0 13 9.5 22.5T480 256h64q13 0 22.5-9.5T576 224zm0 192q0-13-9.5-22.5T544 320h-64q-13 0-22.5 9.5T448 352v64q0 13 9.5 22.5T480 448h64q13 0 22.5-9.5T576 416zm0 192q0-13-9.5-22.5T544 512h-64q-13 0-22.5 9.5T448 544v64q0 13 9.5 22.5T480 640h64q13 0 22.5-9.5T576 608zm32 224H416q-13 0-22.5 9.5T384 800v128q0 13 9.5 22.5T416 960h192q13 0 22.5-9.5T640 928V800q0-13-9.5-22.5T608 768m160-608q0-13-9.5-22.5T736 128h-64q-13 0-22.5 9.5T640 160v64q0 13 9.5 22.5T672 256h64q13 0 22.5-9.5T768 224zm0 192q0-13-9.5-22.5T736 320h-64q-13 0-22.5 9.5T640 352v64q0 13 9.5 22.5T672 448h64q13 0 22.5-9.5T768 416zm0 192q0-13-9.5-22.5T736 512h-64q-13 0-22.5 9.5T640 544v64q0 13 9.5 22.5T672 640h64q13 0 22.5-9.5T768 608z"></svg:path>`,
})
export class WhhBuildingIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBulletIcon],svg[whh-bullet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1014.188 764l-250 250q-11 10-25.5 10t-25-10.5t-10.5-25t11-24.5l250-250q10-11 24.5-11t25 10.5t10.5 25t-10 25.5m-322 155q-9 9-22.5 9t-22.5-9l-317-317q-10-10-10-23t10-23l226-226q10-10 23-10t22 10l318 317q9 9 9 22.5t-9 22.5zm-91-493q-9-10-22-10t-23 10l-25 25l244 244q9 9 22.5 9t22.5-9l25-26zm-272 74q-12 12-28.5 12t-28.5-12l-86-85q-29-30-55.5-67.5t-45.5-74.5t-35.5-76t-26-71t-16.5-60.5t-7-43.5t2-20q5-1 20-1.5t43.5 7t60.5 16.5t71 25.5t76 35.5t74.5 45.5t66.5 56.5l86 85q12 12 12 28.5t-12 28.5zm22-250q-75-74-197-127q44 79 96 132l86 85q12 12 28.5 12t28.5-12l24-23z"></svg:path>`,
})
export class WhhBulletIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBullhornIcon],svg[whh-bullhorn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M949 1011L657 768H256v192q0 27-19 45.5t-45 18.5h-64q-27 0-45.5-18.5T64 960V768q-27 0-45.5-18.5T0 704V320q0-27 18.5-45.5T64 256h593L949 13Q960 1 978.5.5t32 7.5t13.5 20v969q0 12-13.5 20t-32 7t-29.5-13M480 256H352q13 0 22.5 9.5T384 288v448q0 13-9.5 22.5T352 768h128q-14 0-23-9.5t-9-22.5V288q0-13 9-22.5t23-9.5"></svg:path>`,
})
export class WhhBullhornIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBurstmodeIcon],svg[whh-burstmode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.268 768h-704q-13 0-22.5-9.5t-9.5-22.5v-32h704V256h32q13 0 22.5 9.5t9.5 22.5v448q0 13-9.5 22.5t-22.5 9.5m-128-128h-704q-13 0-22.5-9.5t-9.5-22.5v-32h704V128h32q13 0 22.5 9.5t9.5 22.5v448q0 13-9.5 22.5t-22.5 9.5m-128-128h-704q-13 0-22.5-9.5T.268 480V32q0-13 9.5-22.5t22.5-9.5h704q13 0 22.5 9.5t9.5 22.5v448q0 13-9.5 22.5t-22.5 9.5m-32-448h-640v384h640z"></svg:path>`,
})
export class WhhBurstmodeIcon {
  readonly viewBox = input("0 0 1025 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBusIcon],svg[whh-bus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.356 896v64q0 26-19 45t-45.5 19t-45-19t-18.5-45v-64h-640v64q0 26-19 45t-45.5 19t-45-19t-18.5-45v-64q-26 0-45-19t-19-45V64q0-27 19-45.5t45-18.5h896q26 0 45 18.5t19 45.5v768q0 26-18.5 45t-45.5 19m-768-128h64q27 0 45.5-19t18.5-45.5t-18.5-45t-45.5-18.5h-64q-26 0-45 18.5t-19 45t19 45.5t45 19m704-576q0-27-19-45.5t-45-18.5h-640q-27 0-45.5 18.5t-18.5 45.5v256q0 26 18.5 45t45.5 19h640q26 0 45-19t19-45zm-64 448h-64q-26 0-45 18.5t-19 45t19 45.5t45 19h64q27 0 45.5-19t18.5-45.5t-18.5-45t-45.5-18.5"></svg:path>`,
})
export class WhhBusIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBusaltIcon],svg[whh-busalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 632h-64q0-53-37.5-90.5T768 504t-90.5 37.5T640 632H384q0-53-37.5-90.5T256 504t-90.5 37.5T128 632H64q-27 0-45.5-18.5T0 568V344q0-119 37.5-203.5T128 56h832q27 0 45.5 19t18.5 45v448q0 27-18.5 45.5T960 632M192 216q0-13-9.5-22.5T160 184h-32q-13 0-38.5 25.5T64 248v32q0 13 9.5 22.5T96 312h64q13 0 22.5-9.5T192 280zm192 0q0-13-9.5-22.5T352 184h-64q-13 0-22.5 9.5T256 216v64q0 13 9.5 22.5T288 312h64q13 0 22.5-9.5T384 280zm192 0q0-13-9.5-22.5T544 184h-64q-13 0-22.5 9.5T448 216v64q0 13 9.5 22.5T480 312h64q13 0 22.5-9.5T576 280zm192 0q0-13-9.5-22.5T736 184h-64q-13 0-22.5 9.5T640 216v64q0 13 9.5 22.5T672 312h64q13 0 22.5-9.5T768 280zm192 0q0-13-9.5-22.5T928 184h-64q-13 0-22.5 9.5T832 216v64q0 13 9.5 22.5T864 312h64q13 0 22.5-9.5T960 280zM255.5 568q26.5 0 45.5 18.5t19 45t-19 45.5t-45.5 19t-45-18.5T192 632t18.5-45.5t45-18.5m512.5 0q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19t-45.5-18.5T704 632t18.5-45.5T768 568"></svg:path>`,
})
export class WhhBusaltIcon {
  readonly viewBox = input("0 0 1024 696")
  readonly width = input("1.48em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBusinessIcon],svg[whh-business-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M377 61L253 204l121 570q6 16 8 22.5t.5 14.5t-8.5 15l-156 187q-10 11-25.5 11t-26.5-11L11 826q-10-13-9.5-21.5T11 774l121-571L9 61Q-4 49 2.5 24.5T31 0h325q22 0 27.5 24.5T377 61"></svg:path>`,
})
export class WhhBusinessIcon {
  readonly viewBox = input("0 0 386 1024")
  readonly width = input("0.38em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBusinesscardIcon],svg[whh-businesscard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.226 768h-896q-26 0-45-19t-19-45V64q0-26 19-45t45-19h896q26 0 45 19t19 45v640q0 27-19 45.5t-45 18.5m-608-282v-17q96-38 96-213q0-63-44.5-95.5t-115.5-32.5t-115.5 32.5t-44.5 95.5q0 170 96 212v18q-70 12-114.5 45t-45.5 75q0 12 21.5 19.5t63 10.5t68.5 3.5t71 .5t71-.5t68.5-3.5t63-10.5t21.5-19.5q-1-42-46-75t-114-45m576-358h-256q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h256q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m-288 224q0 13 9.5 22.5t22.5 9.5h128q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-128q-13 0-22.5 9.5t-9.5 22.5m288 160h-256q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h256q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5"></svg:path>`,
})
export class WhhBusinesscardIcon {
  readonly viewBox = input("0 0 1025 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhBusinesscardaltIcon],svg[whh-businesscardalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 896H64q-26 0-45-19T0 832V192q0-27 18.5-45.5T64 128h64v64q0 65 35.5 96.5T256 320q56 0 92-33t36-95v-64h256v64q0 65 35.5 96.5T768 320t92.5-31.5T896 192v-64h64q27 0 45.5 18.5T1024 192v640q0 27-18.5 45.5T960 896M384 710v-53q64-37 64-168q0-52-36-78.5T320 384t-92 26.5t-36 78.5q0 125 64 166v55q-56 11-91.5 37T128 805q0 27 192 27t192-27q-1-32-36.5-58T384 710m544-262H672q-13 0-22.5 9.5T640 480t9.5 22.5T672 512h256q13 0 22.5-9.5T960 480t-9.5-22.5T928 448M640 608q0 13 9.5 22.5T672 640h128q13 0 22.5-9.5T832 608t-9.5-22.5T800 576H672q-13 0-22.5 9.5T640 608m288 96H672q-13 0-22.5 9.5T640 736t9.5 22.5T672 768h256q13 0 22.5-9.5T960 736t-9.5-22.5T928 704M768 256q-26 0-45-19t-19-45V64q0-27 18.5-45.5T768 0t45.5 18.5T832 64v128q0 27-18.5 45.5T768 256m-512 0q-26 0-45-19t-19-45V64q0-27 18.5-45.5T256 0t45.5 18.5T320 64v128q0 27-18.5 45.5T256 256"></svg:path>`,
})
export class WhhBusinesscardaltIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhButterflyIcon],svg[whh-butterfly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M814.695 581q65 64 105.5 144.5t40.5 170.5q0 21-.5 32t-2 29t-5.5 27.5t-11 20t-18.5 15t-26.5 4.5q-38 0-78-20t-75-51t-66.5-63t-64.5-63.5t-57-44.5q-21 242-43 242t-43-242q-24 13-57 44.5t-64.5 63.5t-66.5 63t-75 51t-78 20q-16 0-27-4.5t-18-15t-11-20t-5.5-27.5t-2-29t-.5-32q0-90 40-170.5t106-144.5q-92-84-151-185.5T.695 192q0-79 56-135.5t136-56.5q39 0 93 44.5t99.5 106t72.5 120.5q9-57 26-86q-35-18-35-57q0-7 2-15l-57-56q-9-10-9-24t9.5-23.5t23.5-9.5t23 10l57 56q8-2 15-2t15 2l57-56q9-10 23-10t23.5 9.5t9.5 23.5t-9 24l-57 56q2 8 2 15q0 39-35 57q17 29 26 86q27-59 72.5-120.5t99.5-106t93-44.5q80 0 136 56.5t56 135.5q0 102-59.5 203.5T814.695 581"></svg:path>`,
})
export class WhhButterflyIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhButterflyaltIcon],svg[whh-butterflyalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M814.695 581q65 64 105.5 144.5t40.5 170.5q0 21-.5 32t-2 29t-5.5 27.5t-11 20t-18.5 15t-26.5 4.5q-38 0-78-20t-75-51t-66.5-63t-64.5-63.5t-57-44.5q-21 242-43 242t-43-242q-24 13-57 44.5t-64.5 63.5t-66.5 63t-75 51t-78 20q-16 0-27-4.5t-18-15t-11-20t-5.5-27.5t-2-29t-.5-32q0-90 40.5-170.5t105.5-144.5q-92-84-151-185.5T.695 192q0-79 56-135.5t136-56.5q39 0 93 44.5t99.5 106t72.5 120.5q9-57 26-86q-35-18-35-57q0-7 2-15l-57-56q-9-10-9-24t9.5-23.5t23.5-9.5t23 10l57 56q8-2 15-2t15 2l57-56q9-10 23-10t23.5 9.5t9.5 23.5t-9 24l-57 56q2 8 2 15q0 39-35 57q17 29 26 86q27-59 72.5-120.5t99.5-106t93-44.5q80 0 136 56.5t56 135.5q0 102-59.5 203.5T814.695 581m-365-149q0-1-.5-7t-.5-9q0-38-45.5-123t-108-157t-102.5-72q-61 0-94.5 43t-33.5 109q0 51 21.5 104.5t57.5 101t77 87t87 73.5q-71 41-125 115.5t-54 162.5q0 8-.5 21t-.5 21v18l2 16.5l5.5 12.5l10 8.5l15.5 2.5q12 0 70-56t128-119.5t105-76.5q-11-152-14-276m383-368q-40 0-102.5 72t-108 157t-45.5 123q0 3-.5 9t-.5 7q-3 122-14 276q35 13 105 76.5t128 119.5t70 56q9 0 15.5-2.5t10-8.5t5.5-12.5t2-16.5v-18l-.5-21l-.5-21q0-88-54-162.5t-125-115.5q46-34 87-73.5t77-87t57.5-101t21.5-104.5q0-66-33.5-109t-94.5-43"></svg:path>`,
})
export class WhhButterflyaltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhButtonaIcon],svg[whh-buttona-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m311-282L571 229q-21-37-59-37q-37 0-55 30L201 742q-14 22-7 46t30 36t48.5 6t38.5-28l49-98h304l49 98q13 22 38.5 28t48.5-6t30-36t-7-46M423 576l89-181l89 181z"></svg:path>`,
})
export class WhhButtonaIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhButtonbIcon],svg[whh-buttonb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m166-546q26-45 26-94q0-80-56-136t-136-56H320q-26 0-45 19t-19 45v512q0 26 19 45t45 19h256q80 0 136-56t56-136q0-50-24-93t-66-69M576 704H384V576h192q27 0 45.5 19t18.5 45.5t-19 45t-45 18.5m-64-256H384V320h128q26 0 45 19t19 45.5t-18.5 45T512 448"></svg:path>`,
})
export class WhhButtonbIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhButtonxIcon],svg[whh-buttonx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m247-746q14-20 7-43t-30-35t-48.5-6t-38.5 27L512 408L375 221q-13-21-38.5-27t-48.5 6t-30 35t7 43l171 234l-171 234q-14 20-7 43t30 35t48.5 6t38.5-27l137-187l137 187q13 21 38.5 27t48.5-6t30-35t-7-43L588 512z"></svg:path>`,
})
export class WhhButtonxIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhButtonyIcon],svg[whh-buttony-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m224-824q-23-12-48.5-6T649 221L512 412L375 221q-13-21-38.5-27t-48.5 6t-30 35t7 43l183 257v233q0 26 19 45t45 19t45-19t19-45V535l183-257q14-20 7-43t-30-35"></svg:path>`,
})
export class WhhButtonyIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCIcon],svg[whh-c-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704.5 320q-26.5 0-45-18.5T641 256q0-53-37.5-90.5T512 128H256q-53 0-90.5 37.5T128 256v512q0 53 37.5 90.5T256 896h256q54 0 91.5-37.5T641 768q0-27 18.5-45.5t45-18.5t45.5 19t19 45q0 106-75 181t-182 75H256q-106 0-181-75T0 768V256Q0 150 75 75T256 0h256q107 0 182 75t75 181q0 27-19 45.5T704.5 320"></svg:path>`,
})
export class WhhCIcon {
  readonly viewBox = input("0 0 769 1024")
  readonly width = input("0.76em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCUpperCaseIcon],svg[whh-c-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704.5 320q-26.5 0-45-18.5T641 256q0-53-37.5-90.5T512 128H256q-53 0-90.5 37.5T128 256v512q0 53 37.5 90.5T256 896h256q54 0 91.5-37.5T641 768q0-27 18.5-45.5t45-18.5t45.5 19t19 45q0 106-75 181t-182 75H256q-106 0-181-75T0 768V256Q0 150 75 75T256 0h256q107 0 182 75t75 181q0 27-19 45.5T704.5 320"></svg:path>`,
})
export class WhhCUpperCaseIcon {
  readonly viewBox = input("0 0 769 1024")
  readonly width = input("0.76em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCactusIcon],svg[whh-cactus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640H512v352q0 13-9.5 22.5T480 1024H352q-13 0-22.5-9.5T320 992V768H192q-79 0-135.5-56T0 576V416q0-40 28-68t68-28t68 28t28 68v160h128V100q0-42 28-71t68-29t68 29t28 71v348h128V224q0-40 28-68t68-28t68 28t28 68v224q0 79-56 135.5T640 640"></svg:path>`,
})
export class WhhCactusIcon {
  readonly viewBox = input("0 0 832 1024")
  readonly width = input("0.82em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCalcdivideIcon],svg[whh-calcdivide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-448-288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5v-64q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5zm128-448q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm192 192q0-13-9.5-22.5t-22.5-9.5h-448q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h448q13 0 22.5-9.5t9.5-22.5z"></svg:path>`,
})
export class WhhCalcdivideIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCalcequalsIcon],svg[whh-calcequals-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-128-672q0-13-9.5-22.5t-22.5-9.5h-448q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h448q13 0 22.5-9.5t9.5-22.5zm0 256q0-13-9.5-22.5t-22.5-9.5h-448q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h448q13 0 22.5-9.5t9.5-22.5z"></svg:path>`,
})
export class WhhCalcequalsIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCalcminusIcon],svg[whh-calcminus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-128-544q0-13-9.5-22.5t-22.5-9.5h-448q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h448q13 0 22.5-9.5t9.5-22.5z"></svg:path>`,
})
export class WhhCalcminusIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCalcmultiplyIcon],svg[whh-calcmultiply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-137-671q9-9 9-22t-9-22l-44-44q-10-9-22.5-9t-22.5 9l-158 159l-159-159q-9-9-22-9t-22 9l-44 44q-9 9-9 22t9 22l158 159l-158 158q-9 10-9 22.5t9 22.5l44 44q9 9 22 9t22-9l159-159l158 159q10 9 22.5 9t22.5-9l44-44q9-10 9-22.5t-9-22.5l-159-158z"></svg:path>`,
})
export class WhhCalcmultiplyIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCalcplusIcon],svg[whh-calcplus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-128-544q0-13-9.5-22.5t-22.5-9.5h-160V288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v160h-160q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h160v160q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5V576h160q13 0 22.5-9.5t9.5-22.5z"></svg:path>`,
})
export class WhhCalcplusIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCalculatorIcon],svg[whh-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1023h-768q-53 0-90.5-37.5T.428 895V127q0-53 37.5-90t90.5-37h768q53 0 90.5 37t37.5 90v768q0 53-37.5 90.5t-90.5 37.5m-384-160q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5v-64q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5zm0-256q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9t9.5-23v-64q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5zm-192 256q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5v-64q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5zm0-256q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9t9.5-23v-64q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5zm-192 256q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5v-64q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5zm0-256q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9t9.5-23v-64q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5zm768-416q0-26-18.5-45t-45.5-19h-640q-27 0-45.5 19t-18.5 45v128q0 27 18.5 45.5t45.5 18.5h640q27 0 45.5-18.5t18.5-45.5zm0 352q0-13-9.5-22.5t-22.5-9.5h-128q-13 0-22.5 9.5t-9.5 22.5v64q0 14 9.5 23t22.5 9h128q13 0 22.5-9t9.5-23zm0 192q0-13-9.5-22.5t-22.5-9.5h-128q-13 0-22.5 9.5t-9.5 22.5v128q0 13 9.5 22.5t22.5 9.5h128q13 0 22.5-9.5t9.5-22.5z"></svg:path>`,
})
export class WhhCalculatorIcon {
  readonly viewBox = input("0 0 1025 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCalculatoraltIcon],svg[whh-calculatoralt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-480-768h-96v-96q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v96h-96q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h96v96q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5v-96h96q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m24.5 327.5q-7.5-7.5-18.5-7.5t-19 7l-115 115l-115-115q-8-7-19-7t-18.5 7.5t-7.5 18.5t7 19l115 115l-114 114q-8 8-8 19t8 19t19 8t19-8l114-114l114 114q8 8 19 8t19-8t8-19t-8-19l-114-114l115-115q7-8 7-19t-7.5-18.5m423.5-327.5h-256q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h256q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m0 384h-256q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h256q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m0 128h-256q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h256q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5"></svg:path>`,
})
export class WhhCalculatoraltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCalendarIcon],svg[whh-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.585 1024h-896q-27 0-45.5-19t-18.5-45V192q0-27 18.5-45.5t45.5-18.5h64v128q0 64 35.5 96t92.5 32q56 0 92-33t36-95V128h256v128q0 64 35.5 96t92.5 32t92.5-32t35.5-96V128h64q27 0 45.5 18.5t18.5 45.5v768q0 26-18.5 45t-45.5 19m-768-256h128q53 0 90.5-37.5t37.5-90.5v-64q0-53-37.5-90.5t-90.5-37.5h-128q-53 0-90.5 37.5t-37.5 90.5q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5q0-27 18.5-45.5t45.5-18.5h128q27 0 45.5 18.5t18.5 45.5v64q0 26-18.5 45t-45.5 19h-128q-53 0-90.5 37.5t-37.5 90.5v96q0 13 9.5 22.5t22.5 9.5h320q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-272q-7 0-11.5-4.5t-4.5-11.5v-48q0-27 18.5-45.5t45.5-18.5m769-192q0-53-38-90.5t-91-37.5h-128q-53 0-90.5 37.5t-37.5 90.5v64q0 53 37.5 90.5t90.5 37.5h128q35 0 64-17v81q0 26-18.5 45t-45.5 19h-128q-26 0-45-19t-19-45q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5q0 53 37.5 90.5t90.5 37.5h128q53 0 91-37.5t38-90.5zm-129 128h-128q-26 0-45-19t-19-45v-64q0-27 19-45.5t45-18.5h128q27 0 45.5 18.5t18.5 45.5v64q0 26-18.5 45t-45.5 19m-63.5-384q-26.5 0-45.5-19t-19-45V64q0-27 19-45.5t45.5-18.5t45 18.5t18.5 45.5v192q0 26-18.5 45t-45 19m-512.5 0q-27 0-45.5-19t-18.5-45V64q0-27 19-45.5t45.5-18.5t45 18.5t18.5 45.5v192q0 26-18.5 45t-45.5 19"></svg:path>`,
})
export class WhhCalendarIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCalendaraltIcon],svg[whh-calendaralt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.85 1024h-896q-27 0-45.5-19T.85 960V320q0-27 19-45.5t45-18.5h896q27 0 45.5 18.5t18.5 45.5v640q0 27-18.5 45.5t-45.5 18.5m-768-608q0-14-9.5-23t-22.5-9h-64q-13 0-22.5 9t-9.5 23v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm0 192q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm192 0q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm0 192q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm192-384q0-14-9.5-23t-22.5-9h-64q-13 0-22.5 9t-9.5 23v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm0 192q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm192-192q0-14-9.5-23t-22.5-9h-64q-13 0-22.5 9t-9.5 23v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm0 192q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm0 192q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm192-384q0-14-9.5-23t-22.5-9h-64q-13 0-22.5 9t-9.5 23v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm0 384q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm-63.5-608q-26.5 0-45.5-19t-19-45V64q0-27 19-45.5T897.35 0t45 18.5t18.5 45.5v64q0 26-18.5 45t-45 19m-192 0q-26.5 0-45.5-19t-19-45V64q0-27 19-45.5T705.35 0t45 18.5t18.5 45.5v64q0 26-18.5 45t-45 19m-193 0q-26.5 0-45-19t-18.5-45V64q0-27 18.5-45.5t45-18.5t45.5 18.5t19 45.5v64q0 26-19 45t-45.5 19m-192 0q-26.5 0-45-19t-18.5-45V64q0-27 18.5-45.5t45-18.5t45.5 18.5t19 45.5v64q0 26-19 45t-45.5 19m-192 0q-26.5 0-45-19t-18.5-45V64q0-27 18.5-45.5t45-18.5t45.5 18.5t19 45.5v64q0 26-19 45t-45.5 19"></svg:path>`,
})
export class WhhCalendaraltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCalendarthreeIcon],svg[whh-calendarthree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 1024H128q-53 0-90.5-37.5T0 896V256q0-53 37.5-90.5T128 128V64q0-26 18.5-45t45-19T237 19t19 45v64h64V64q0-26 18.5-45t45-19T429 19t19 45v64h64V64q0-26 18.5-45t45-19T621 19t19 45v64h64V64q0-26 18.5-45t45-19T813 19t19 45v64q53 0 90.5 37.5T960 256v640q0 53-37.5 90.5T832 1024m64-768q0-26-19-45t-45-19H128q-27 0-45.5 19T64 256v640q0 27 18.5 45.5T128 960h704q26 0 45-18.5t19-45.5zm-96 384h-64q-13 0-22.5-9.5T704 608v-64q0-13 9.5-22.5T736 512h64q13 0 22.5 9.5T832 544v64q0 13-9.5 22.5T800 640m0-192h-64q-13 0-22.5-9.5T704 416v-64q0-13 9.5-22.5T736 320h64q13 0 22.5 9.5T832 352v64q0 13-9.5 22.5T800 448M608 832h-64q-13 0-22.5-9.5T512 800v-64q0-13 9.5-22.5T544 704h64q13 0 22.5 9.5T640 736v64q0 13-9.5 22.5T608 832m0-192h-64q-13 0-22.5-9.5T512 608v-64q0-13 9.5-22.5T544 512h64q13 0 22.5 9.5T640 544v64q0 13-9.5 22.5T608 640m0-192h-64q-13 0-22.5-9.5T512 416v-64q0-13 9.5-22.5T544 320h64q13 0 22.5 9.5T640 352v64q0 13-9.5 22.5T608 448M416 832h-64q-13 0-22.5-9.5T320 800v-64q0-13 9.5-22.5T352 704h64q13 0 22.5 9.5T448 736v64q0 13-9.5 22.5T416 832m0-192h-64q-13 0-22.5-9.5T320 608v-64q0-13 9.5-22.5T352 512h64q13 0 22.5 9.5T448 544v64q0 13-9.5 22.5T416 640m0-192h-64q-13 0-22.5-9.5T320 416v-64q0-13 9.5-22.5T352 320h64q13 0 22.5 9.5T448 352v64q0 13-9.5 22.5T416 448M224 832h-64q-13 0-22.5-9.5T128 800v-64q0-13 9.5-22.5T160 704h64q13 0 22.5 9.5T256 736v64q0 13-9.5 22.5T224 832m0-192h-64q-13 0-22.5-9.5T128 608v-64q0-13 9.5-22.5T160 512h64q13 0 22.5 9.5T256 544v64q0 13-9.5 22.5T224 640"></svg:path>`,
})
export class WhhCalendarthreeIcon {
  readonly viewBox = input("0 0 960 1024")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCaligraphyIcon],svg[whh-caligraphy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 704q-53 0-90.5 37.5T704 832q0 80-56 136t-136 56q-106 0-181-75t-75-181t75-181t181-75q53 0 90.5-37.5T640 384q0-80-65.5-136T416 192q-95 0-159.5 44.5T192 352q0 40-28 68t-68 28t-68-28t-28-68q0-104 52-185T191 43T384 0q104 0 192.5 51.5t140 140T768 384q0 106-75 181t-181 75q-53 0-90.5 47T384 800t37.5 113t90.5 47t90.5-37.5T640 832q0-80 56-136t136-56t136 56t56 136q-4-4-18.5-19T986 793.5t-18-17t-19-17.5l-18-15l-19.5-14l-18.5-10.5l-20-9l-19.5-4.5z"></svg:path>`,
})
export class WhhCaligraphyIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCallIcon],svg[whh-call-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m308 288l-88 87q18 65 95 160.5T487.5 708T649 803l87-87q15-15 53-12.5t76.5 12T929 737q56 27 82 66.5t3 61.5L907 972q-43 44-117 49.5t-160-23T448 908T265 759T115.5 575.5T24.5 393t-23-159.5T51 117L158 10q21-21 55 4.5T286 95q19 27 30 97t-8 96"></svg:path>`,
})
export class WhhCallIcon {
  readonly viewBox = input("0 0 1025 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCallaltIcon],svg[whh-callalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m884 884l-91-91q49-53 76-126t27-155t-27-155t-76-126l91-91q66 72 103 168t37 204t-37 204t-103 168M748 748l-90-90q46-58 46-146t-46-146l90-90q40 45 62 106t22 130t-22 130t-62 106m-300 276h-64q-80 0-149.5-35.5t-122-100t-82.5-162T0 512t30-214.5t82.5-162t122-100T384 0h64q27 0 45.5 18.5T512 64v192q0 26-18.5 45T448 320h-64q-24 0-42-15.5T321 265q-129 40-129 247t129 247q3-24 21-39.5t42-15.5h64q26 0 45 18.5t19 45.5v192q0 26-19 45t-45 19"></svg:path>`,
})
export class WhhCallaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCamcorderIcon],svg[whh-camcorder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928.428 640h-320q-40 0-68-28t-28-68v-32h-64v384q0 53-37.5 90.5t-90.5 37.5h-192q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h192q53 0 90.5 37.5t37.5 90.5v192h64v-32q0-40 28-68t68-28h320q40 0 68 28t28 68v256q0 40-28 68t-68 28m-832-64q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5m128-448q-66 0-113 47t-47 113t47 113t113 47t113-47t47-113t-47-113t-113-47m0 256q-40 0-68-28t-28-68t28-68t68-28t68 28t28 68t-28 68t-68 28"></svg:path>`,
})
export class WhhCamcorderIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCamelIcon],svg[whh-camel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 513q0 40-5 56.5T992 609q-12 12-24-23q-8-23-8-41V417q0-19-14-3q-11 13-18 35q-6 20-14 65.5t-4 62.5q1 3 4 16.5t4.5 20.5t3 18t.5 18t-5 11q-5 6-5.5 9.5t1 5.5t6.5 7t8 10q3 3 4 7t0 8t-2 7t-3.5 7.5t-4 7.5t-5.5 8t-5 7q-5 7-8.5 25.5T896 811t-4 27q-3 13 4 36.5t16 34.5q3 5 0 11t-10 13.5t-14 13.5t-12.5 10l-5.5 4h-51q-2-37 6-52q1-2 28-51q15-26 19-92q2-10 .5-20T862 724q-6-12-4.5-24t5.5-28t4-21q-3-28-23-42q-10-8-15-40t-6-35q-7-18-8-64q-50 78-71 117q-7 13-7.5 41t3.5 33q0 1 2 4.5t2.5 5t1.5 5t.5 5.5t-2.5 5.5t-6 6.5q-12 9-101 112q39 27 42 33q7 11 6 25.5t-9 25.5q-8 10-22.5 5.5T639 879q1-17-27-45q-10 14-13.5 27t3.5 18q5 3 2 8t-9 8l-7 4h-62q-18 4-24-10q-3-6 5-11t24-10.5t22-8.5q15-9 42-40q-15-13-65-55t-59-50q-12-13-10.5-37.5T474 640q4-3 7-8t4.5-8.5t2.5-9.5t1-9v-17q1-6 6-16l8.5-17l.5-10q-6-4-29 0t-35 11q-7 4-7.5 14t2.5 23t3 16q-1 15-27 42q-9 8-14.5 31t-.5 32q4 7 6 15.5t.5 16t-8.5 9.5q-10 3-25.5 43.5T353 859q-2 56-15 61q-9 3-10.5 10t10.5 10q11 3 11 20H225q-1 1-3.5 1t-5.5-2t-3-9q0-9 24-18.5t39-11.5q9-2 27.5-38t25.5-64q3-27 2-45.5t-5.5-50T321 683q-6-111 4-127q8-9 6-23.5T314 513q-13-3-29.5 14.5T262 545q-7 0-13.5-2.5T239 537l-3-2q-7 2-25 0q-8-1-14.5-6.5T188 518l-2-5q-25-13-38-21q-6-4-9-9.5t-3-8.5v-4q-23-10-38-21q-8-6-13-20.5T73 406t-8.5-30t-.5-50t0-37q-2-30 5.5-63T96 193H0v-6.5L2 171l5-19.5l9.5-15.5l15.5-7h96q5-7 12-17t24-28t28-19q16-2 49-.5t47 9.5q9 5 12 16t2 20l-2 9q15 9 25 33q3 17 1.5 25t-8 26t-8.5 27q-3 13-16 51.5T281 329q-1 8 9 13.5t19 7.5l10 1q-4-44 2-66q2-9 14.5-23t29.5-30.5t23-23.5q21-24 94-67q7-4 12-7.5t7.5-6.5t6-8.5t5-8T518 99t6-14q18-40 161-79q76-21 142 45q14 14 24 57t22 56q17 18 37.5 55.5T943 285q7 19 36 48t35 40q10 17 10 140m-393 32q-5 7-7.5 27.5T616 598q-3 3-5 6.5t-3.5 8.5t-2.5 8t-2 9.5t-2 9.5q-2 12-24.5 28.5T535 693q-4 1-6.5 3t-3.5 4.5t-1.5 4t1 4.5t2.5 4.5t3.5 5.5t3.5 5q13 20 83 68q11-17 25.5-44.5T666 701l9-19q-7-56-9-73q0-6-1-37.5t-2-49.5q-24 13-32 23"></svg:path>`,
})
export class WhhCamelIcon {
  readonly viewBox = input("0 0 1024 961")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCameraIcon],svg[whh-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 960H128q-53 0-90.5-37.5T0 832V320q0-53 37.5-90.5T128 192h93l42-94q11-42 55-70t98-28h192q54 0 98 28t54 70l43 94h93q53 0 90.5 37.5T1024 320v512q0 53-37.5 90.5T896 960M512 256q-87 0-160.5 43T235 415.5T192 576t43 160.5T351.5 853T512 896t160.5-43T789 736.5T832 576t-43-160.5T672.5 299T512 256m0 576q-106 0-181-75t-75-181t75-181t181-75t181 75t75 181t-75 181t-181 75m0-448q-80 0-136 56t-56 136t56 136t136 56t136-56t56-136t-56-136t-136-56"></svg:path>`,
})
export class WhhCameraIcon {
  readonly viewBox = input("0 0 1024 960")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCameraflashIcon],svg[whh-cameraflash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m640 768l-352 256l-160-256h149l64-192H0L192 0h192L235 448h341L469 768z"></svg:path>`,
})
export class WhhCameraflashIcon {
  readonly viewBox = input("0 0 640 1024")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCampfireIcon],svg[whh-campfire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M998 756L59 1021q-16 4-32-10T4 973t-1-44t23-24l939-265q16-4 32 10t23 38t1 44t-23 24M832 602q-1 11-4 27l-192 54q4-27 4-44q0-156-160-256q0 2-3 18t-5 25t-7 28t-10 32.5t-12 33t-16 34.5t-20 31.5t-25 30t-30 23.5t-26 35l-90-25q-1 0-1.5.5l-.5.5l1-1l-41-12q4-34 33-93.5t29-96.5q0-47-6.5-93.5t-15.5-79t-18.5-58.5t-16.5-39l-6-13q97 41 200 116q1-4 5.5-16t6-15.5T409 235t4-15t2-13t1-16q0-46-16-94t-32-73L353 0q10 4 28 12.5T450.5 50t97 61t99 82T735 295l1 1q24-31 64-57t68-37l27-11q-3 4-9.5 11t-23 30t-29.5 47t-24.5 60.5T795 411q40 105 37 191m-598 48l-6 11q0-2 6-11m-33 156L26 756q-17-4-23-24t1-44t23-38t32-10l364 103zm797 99q17 4 23 24t-1 44t-23 38t-32 10L585 914l222-63z"></svg:path>`,
})
export class WhhCampfireIcon {
  readonly viewBox = input("0 0 1024 1022")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCampingIcon],svg[whh-camping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 1025H704q-27 0-45.5-19T640 961V705q0-27-19-45.5T576 641H448q-27 0-45.5 18.5T384 705v256q0 26-19 45t-45 19H63q-23 0-43-19.5T0 962q0-18 9-33l425-596L265 97q-14-23-7-48.5T288 10t48.5-6.5T375 33l137 191L648 32q13-22 39-29t48.5 6T765 47.5T759 96L590 333l425 597q9 16 9 31q0 24-19.5 44t-44.5 20"></svg:path>`,
})
export class WhhCampingIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCandleIcon],svg[whh-candle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 1024H64q-27 0-45.5-19T0 959.5t18.5-45T64 896h896q26 0 45 18.5t19 45t-18.5 45.5t-45.5 19M320 832V480q0-13 9.5-22.5T352 448h320q13 0 22.5 9.5T704 480v352zm213-448q22-24 32.5-45t10.5-51q0-16-14.5-46T532 190l-15-22q-1 10-4.5 25.5t-18.5 48t-35 46.5q-11 7-11.5 24.5t5.5 36t16 35.5q-18 0-59-43q-26-29-26-65q0-53 43-96q22-21 27-66t-1-80l-5-34q4 2 11.5 5.5t28 16.5T526 49t39.5 36t35.5 44q20 32 30 69t9 66q0 5-.5 19.5t-1 21.5t-1.5 17t-3 16.5t-5 9.5q-13 15-44.5 25.5T533 384"></svg:path>`,
})
export class WhhCandleIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCandyIcon],svg[whh-candy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 768q-96 48-152 104t-104 152q0-16-1.5-32.5t-5.5-36t-7-33.5t-10-36.5t-9.5-32t-10.5-34t-10-29.5q-170 119-384.5-95.5T234 310q-4-1-29-9.5t-34.5-11t-32-9.5t-36.5-10t-33.5-7t-36-5.5T0 256q96-48 152-104T256 0q0 16 1.5 32.5t5.5 36t7 33.5t10 36.5t9.5 32t11 34.5t9.5 29q170-119 384.5 95.5T790 714q5 1 29.5 9.5t34 11t32 9.5t36.5 10t33.5 7t36 5.5t32.5 1.5"></svg:path>`,
})
export class WhhCandyIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCandycaneIcon],svg[whh-candycane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M712.5 1004q-20.5 20-49 20t-48.5-20L107 499l68 67l147-48l-55-55l446 444q20 20 20 48.5t-20.5 48.5M419 615l-146 49l73 73l147-49zm171 170l-146 49l73 73l147-49zm-36.5-517q-17.5 17-41 18T470 273l-2 2l-24-25l49-145l-25-25l98 97l-7 8q14 18 13 42t-18.5 41M370 178q-32-33-80-39L222 5q104-19 195 35zm-235 87L0 231q14-88 77-151q21-21 53-40l62 123q-11 9-17 14q-36 36-40 88m113 180l-146 48l-25-24Q18 410 2 329l173 43z"></svg:path>`,
})
export class WhhCandycaneIcon {
  readonly viewBox = input("0 0 733 1024")
  readonly width = input("0.72em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCanisterIcon],svg[whh-canister-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 960q0 27-19 45.5t-45 18.5H64q-27 0-45.5-18.5T0 960V192q0-27 18.5-45.5T64 128h128q-26 0-45-18.5T128 64t19-45.5T192 0h192q27 0 45.5 18.5T448 64t-19 45.5t-45 18.5h128q40 0 78 23q56-29 137-22.5T848 175q39 40 46 120t-21 137q23 38 23 80zM585 513q-6-1-9-1H320q-3 0-9 1l-71-61q-11-6-24-2.5T196.5 464t-3 24t14.5 20l49 57q-1 7-1 11v192q0 4 1 10l-49 58q-11 7-14.5 19.5t3 24t19.5 15t24-2.5l71-61q6 1 9 1h256q2 0 9-1l71 61q11 6 24 2.5t19.5-15t3-24T688 836l-49-58q1-6 1-10V576q0-4-1-11l49-57q11-7 14.5-20t-3-24t-19.5-14.5t-24 2.5zm204-278q-29-29-68.5-39t-74.5 2l180 180q11-35 1.5-74.5T789 235M544 768H352q-13 0-22.5-9.5T320 736V608q0-13 9.5-22.5T352 576h192q13 0 22.5 9.5T576 608v128q0 13-9.5 22.5T544 768"></svg:path>`,
})
export class WhhCanisterIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCannonIcon],svg[whh-cannon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m960 320l-242 40q50 68 50 152q0 106-75 181t-181 75q-85 0-152-49.5T268 590l-82 145q-15 26-45 32q-6 1-11 1H64q-26 0-45-19T0 703.5t19-45T64 640h26l111-194l-9 2q-73 4-132.5-55T0 256q0-79 54-137.5T180 64h12V32q0-13 9.5-22.5T224 0t22.5 9.5T256 32v32h704q27 0 45.5 37.5T1024 192q0 51-18 85t-46 43m-448 64q-53 0-90.5 37.5T384 512t37.5 90.5T512 640t90.5-37.5T640 512t-37.5-90.5T512 384m-.5 192q-26.5 0-45-19T448 511.5t18.5-45t45-18.5t45.5 18.5t19 45t-19 45.5t-45.5 19"></svg:path>`,
})
export class WhhCannonIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCanvasIcon],svg[whh-canvas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.816 768h-166l93 161q14 23 7 48t-30 38.5t-48.5 6.5t-38.5-30l-131-224h-70v192q0 26-19 45t-45.5 19t-45-19t-18.5-45V768h-70l-131 224q-13 23-38.5 30t-48.5-6.5t-30-38.5t7-48l93-161h-166q-26 0-45-18.5t-19-45.5V128q0-26 19-45t45-19h384q0-26 19-45t45-19t45 19t19 45h384q26 0 45 19t19 45v576q0 27-19 45.5t-45 18.5"></svg:path>`,
})
export class WhhCanvasIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCanvasrulersIcon],svg[whh-canvasrulers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.06 1024h-640q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h608V352q0-13 9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5v640q0 13-9.5 22.5t-22.5 9.5m-32-800q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v32h-64v-96q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v96h-64v-32q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v32h-64v-96q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v96h-64v-32q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v32h-64v-96q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v96h-96q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h96v64h-32q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h32v64h-96q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h96v64h-32q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h32v64h-96q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h96v64h-32q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h32v64h-192q-26 0-45-18.5T.06 960V64q0-26 19-45t45-19h896q26 0 45 19t19 45v192h-64z"></svg:path>`,
})
export class WhhCanvasrulersIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCapacitatorIcon],svg[whh-capacitator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 384H704v192q0 26-19 45t-45.5 19t-45-19t-18.5-45V64q0-26 18.5-45t45-19T685 19t19 45v192h256q26 0 45 18.5t19 45t-19 45.5t-45 19M383.5 640q-26.5 0-45-19T320 576V384H64q-27 0-45.5-19T0 319.5t18.5-45T64 256h256V64q0-26 18.5-45t45-19T429 19t19 45v512q0 26-19 45t-45.5 19"></svg:path>`,
})
export class WhhCapacitatorIcon {
  readonly viewBox = input("0 0 1024 640")
  readonly width = input("1.6em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCapslockIcon],svg[whh-capslock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M869 513H703v191q0 27-18.5 45.5T640 768H256q-26 0-45-18.5T192 704V513H28q-12 0-20-13t-7-31t13-30L403 19q18-19 45-19t46 19l388 420q12 12 13.5 30t-6.5 31t-20 13M256 831h384q26 0 44.5 19t18.5 45v65q0 26-18.5 45t-44.5 19H256q-26 0-45-18.5T192 960v-65q0-26 19-45t45-19"></svg:path>`,
})
export class WhhCapslockIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCaptainamericaIcon],svg[whh-captainamerica-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m0-960q-91 0-174 35.5T195 195T99.5 338T64 512t35.5 174T195 829t143 95.5T512 960t174-35.5T829 829t95.5-143T960 512t-35.5-174T829 195T686 99.5T512 64m188 707l-65-219l181-139q16 49 16 99q0 78-35.5 146T700 771M588 407l-76-215q105 0 189 62t115 159zm-380 6q31-97 115-159t189-62l-76 215zm181 139l-65 219q-61-45-96.5-113T192 512q0-50 16-99zm123 89l188 130q-84 61-188 61t-188-61z"></svg:path>`,
})
export class WhhCaptainamericaIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCarbatteryIcon],svg[whh-carbattery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 768H64q-27 0-45.5-18.5T0 704V256q0-27 18.5-45.5T64 192h896q27 0 45.5 18.5T1024 256v448q0 27-18.5 45.5T960 768M288 448H160q-13 0-22.5 9.5T128 480t9.5 22.5T160 512h128q13 0 22.5-9.5T320 480t-9.5-22.5T288 448m576 0h-32v-32q0-13-9.5-22.5T800 384t-22.5 9.5T768 416v32h-32q-13 0-22.5 9.5T704 480t9.5 22.5T736 512h32v32q0 13 9.5 22.5T800 576t22.5-9.5T832 544v-32h32q13 0 22.5-9.5T896 480t-9.5-22.5T864 448M704 64q0-27 18.5-45.5T768 0h64q26 0 45 18.5T896 64v64H704zm-576 0q0-27 18.5-45.5T192 0h64q26 0 45 18.5T320 64v64H128z"></svg:path>`,
})
export class WhhCarbatteryIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCarrotIcon],svg[whh-carrot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1017.5 1017.5q-21.5 21.5-113-26T698.5 862T467 689T270.5 532T176 452q-22-24-14-66.5t42-90.5q-85-39-204-39v-64q94 0 170 25L0 47L47 0l170 171Q192 94 192 0h64q0 119 39 204q48-34 90.5-42t66.5 14q14 15 80 94.5T689 467t173 231.5t129.5 206t26 113"></svg:path>`,
})
export class WhhCarrotIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCartaltIcon],svg[whh-cartalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M959.998 832h-128v6q28 10 46 34.5t18 55.5q0 40-28 68t-68 28t-68-28t-28-68q0-31 18-55.5t46-34.5v-6h-320v6q28 10 46 34.5t18 55.5q0 40-28 68t-68 28t-68-28t-28-68q0-31 18-55.5t46-34.5v-6h-128q-27 0-45.5-18.5t-18.5-45.5V128q0-26-19-45t-45-19h-96q-13 0-22.5-9.5T-.002 32t9.5-22.5t22.5-9.5h96q53 0 90.5 37.5t37.5 90.5v64h704q27 0 45.5 18.5t18.5 45.5v512q0 27-19 45.5t-45 18.5m-640-576h-64v64h64zm0 128h-64v64h64zm0 128h-64v64h64zm0 128h-64v64h64zm128-384h-64v64h64zm0 128h-64v64h64zm0 128h-64v64h64zm0 128h-64v64h64zm128-384h-64v64h64zm0 128h-64v64h64zm0 128h-64v64h64zm0 128h-64v64h64zm128-384h-64v64h64zm0 128h-64v64h64zm0 128h-64v64h64zm0 128h-64v64h64zm128-384h-64v64h64zm0 128h-64v64h64zm0 128h-64v64h64zm0 128h-64v64h64zm128-384h-64v64h64zm0 128h-64v64h64zm0 128h-64v64h64zm0 128h-64v64h64z"></svg:path>`,
})
export class WhhCartaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCashIcon],svg[whh-cash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 832H64q-26 0-45-9.5T0 800V288q0-1 3-10L117 25q3-10 20-17.5T174 0h682q21 0 37.5 7.5T914 25l108 253q2 6 2 10v512q0 13-19 22.5t-45 9.5M320 64h-15q-13 24-45.5 44T192 128h-57l-26 64h83q51 0 64.5 8.5T265 239l-3 17h58zm0 256H64v48q0 7 9.5 11.5T96 384h224zm0 128H64v48q0 7 9.5 11.5T96 512h224zm0 128H64v48q0 7 9.5 11.5T96 640h224zm0 128H64v48q0 7 9.5 11.5T96 768h224zm320-160q0-13-9.5-22.5T608 512H448v-64h160q20 0 29-18q-6-20-23-33t-38-13v-32q0-13-9.5-22.5T544 320t-22.5 9.5T512 352v32h-64q-26 0-45 19t-19 45v96q0 13 9.5 22.5T416 576h160v64H416q-20 0-29 19q7 20 23.5 32.5T448 704v32q0 13 9.5 22.5T480 768t22.5-9.5T512 736v-32h64q27 0 45.5-18.5T640 640zm250-416h-58q-35 0-65.5-19.5T724 64h-20v192h59l-2-17q-5-29 21-38t82-9h51zm70 192H704v64h224q13 0 22.5-4.5T960 368zm0 128H704v64h224q13 0 22.5-4.5T960 496zm0 128H704v64h224q13 0 22.5-4.5T960 624zm0 128H704v64h224q13 0 22.5-4.5T960 752z"></svg:path>`,
})
export class WhhCashIcon {
  readonly viewBox = input("0 0 1024 832")
  readonly width = input("1.24em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCashregisterIcon],svg[whh-cashregister-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 1024H64q-27 0-45.5-19T0 960V832q0-27 18.5-45.5T64 768h832q26 0 45 18.5t19 45.5v128q0 26-19 45t-45 19M512 832h-64q-27 0-45.5 18.5t-18.5 45t18.5 45.5t45.5 19h64q26 0 45-19t19-45.5t-19-45t-45-18.5m384-128H64q-27 0-45.5-19T0 640V320q0-27 50.5-77.5T128 192V64q0-27 18.5-45.5T192 0h576q26 0 45 18.5T832 64v128q26 0 77 50.5t51 77.5v320q0 26-19 45t-45 19m-384-96q0 13 9.5 22.5T544 640h64q13 0 22.5-9.5T640 608v-64q0-13-9.5-22.5T608 512h-64q-13 0-22.5 9.5T512 544zm0-192q0 13 9.5 22.5T544 448h64q13 0 22.5-9.5T640 416v-64q0-13-9.5-22.5T608 320h-64q-13 0-22.5 9.5T512 352zM320 608q0 13 9.5 22.5T352 640h64q13 0 22.5-9.5T448 608v-64q0-13-9.5-22.5T416 512h-64q-13 0-22.5 9.5T320 544zm0-192q0 13 9.5 22.5T352 448h64q13 0 22.5-9.5T448 416v-64q0-13-9.5-22.5T416 320h-64q-13 0-22.5 9.5T320 352zM128 608q0 13 9.5 22.5T160 640h64q13 0 22.5-9.5T256 608v-64q0-13-9.5-22.5T224 512h-64q-13 0-22.5 9.5T128 544zm96-288h-64q-13 0-22.5 9.5T128 352v64q0 13 9.5 22.5T160 448h64q13 0 22.5-9.5T256 416v-64q0-13-9.5-22.5T224 320m480-160q0-13-9.5-22.5T672 128H288q-13 0-22.5 9.5T256 160v64q0 13 9.5 22.5T288 256h384q13 0 22.5-9.5T704 224zm128 192q0-13-9.5-22.5T800 320h-64q-13 0-22.5 9.5T704 352v64q0 13 9.5 22.5T736 448h64q13 0 22.5-9.5T832 416zm0 192q0-13-9.5-22.5T800 512h-64q-13 0-22.5 9.5T704 544v64q0 13 9.5 22.5T736 640h64q13 0 22.5-9.5T832 608z"></svg:path>`,
})
export class WhhCashregisterIcon {
  readonly viewBox = input("0 0 960 1024")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCassetteIcon],svg[whh-cassette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.226 768h-896q-26 0-45-19t-19-45V64q0-26 19-45t45-19h896q27 0 45.5 19t18.5 45v640q0 26-18.5 45t-45.5 19m-352-64q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5m-512 0q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5m0-640q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m160.5 128q-79.5 0-136 56t-56.5 136t56.5 136t136 56t135.5-56t56-136t-56-136t-135.5-56m159.5 448q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m512-576q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m-160 128q-80 0-136 56t-56 136t56 136t136 56t136-56t56-136t-56-136t-136-56m160 448q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m-159.5-192q-26.5 0-45.5-18.5t-19-45.5t19-45.5t45.5-18.5t45 18.5t18.5 45.5t-18.5 45.5t-45 18.5m-512 0q-26.5 0-45.5-18.5t-19-45.5t19-45.5t45.5-18.5t45 18.5t18.5 45.5t-18.5 45.5t-45 18.5"></svg:path>`,
})
export class WhhCassetteIcon {
  readonly viewBox = input("0 0 1025 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCassettealtIcon],svg[whh-cassettealt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.585 768h-128v-64q0-53-37.5-90.5t-90.5-37.5h-384q-53 0-90.5 37.5t-37.5 90.5v64h-128q-27 0-45.5-19t-18.5-45V64q0-27 18.5-45.5T64.585 0h896q26 0 45 18.5t19 45.5v640q0 26-19 45t-45 19m0-672q0-13-9.5-22.5t-22.5-9.5h-832q-13 0-22.5 9.5t-9.5 22.5v384q0 13 9.5 22.5t22.5 9.5h832q13 0 22.5-9.5t9.5-22.5zm-832 32h768v320h-768zm608 256q40 0 68-28t28-68t-28-68t-68-28t-68 28t-28 68t28 68t68 28m-448 0q40 0 68-28t28-68t-28-68t-68-28t-68 28t-28 68t28 68t68 28m0-128q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5m448 0q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5m-416 384h384q26 0 45 18.5t19 45.5v64h-512v-64q0-27 18.5-45.5t45.5-18.5"></svg:path>`,
})
export class WhhCassettealtIcon {
  readonly viewBox = input("0 0 1025 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCatIcon],svg[whh-cat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 512q0 32 32 128t32 128q0 65-19.5 123t-57 95.5T736 1024H288q-13 0-22.5-9.5T256 992t9.5-22.5T288 960q14 0 23-9t9-23q0-26-20-60.5t-48-71t-56-75.5t-48-86t-20-91q0-75 60-124q-12-36-60-36q-29 0-60.5-20.5t-49.5-43T0 288q0-13 9.5-22.5T32 256q8 0 17-14t20.5-35T96 164.5t40-40T192 99V0q23 0 54 35.5t40 73.5q48 20 73 69.5T384 288q0 29 12.5 55t35.5 46.5t37.5 31T506 444q4 3 6 4q58 33 96 64q69 57 114.5 143T768 800q0 4 1 9t9 14t22 9t23-15.5t9-48.5q0-35-13-70t-32-66.5t-38-65.5t-32-81.5T704 384q0-48 40-88t88-40q27 0 45.5 18.5T896 320q0 16-6 28.5t-15.5 23T864 384q-32 53-32 128"></svg:path>`,
})
export class WhhCatIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCatfaceIcon],svg[whh-catface-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-92 0-175.5-34.5T193 899T88.5 775T22 639T0 512q0-69 67-142q3-73 37.5-221.5T160 0q19 0 97 68t140 134q59-10 115-10t115 10q62-66 140-134t97-68q21 0 55.5 148.5T957 370q67 73 67 142q0 59-22 127t-66.5 136T831 899t-143.5 90.5T512 1024M320 384q-53 0-90.5 37.5T192 512t37.5 90.5T320 640t90.5-37.5T448 512t-37.5-90.5T320 384m384 0q-53 0-90.5 37.5T576 512t37.5 90.5T704 640t90.5-37.5T832 512t-37.5-90.5T704 384m64 128q0 53-18.5 90.5t-45 37.5t-45.5-37.5t-19-90.5t19-90.5t45.5-37.5t45 37.5T768 512m-384 0q0 53-19 90.5T319.5 640t-45-37.5T256 512t18.5-90.5t45-37.5t45.5 37.5t19 90.5"></svg:path>`,
})
export class WhhCatfaceIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCctvIcon],svg[whh-cctv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M868 472L617 624q-26 15-60.5 16.5T500 629l-73-44q-18 26-45.5 41T321 641v64q0 80-56 136t-136 56v64q0 26-18.5 45t-45 19t-45.5-19t-19-45V769q0-26 19-45t45.5-19t45 19t18.5 45v64q53 0 90.5-37.5T257 705v-82q-29-17-46.5-46T193 513q0-30 15-59L33 349q-23-13-30-39.5T9 260L135 34q14-24 39-31t47 7l655 392q23 13 20.5 33.5T868 472m14 70q11 6 14 18.5t-3 23.5l-61 106q-6 11-18 14.5t-23-3.5l-111-64l179-108z"></svg:path>`,
})
export class WhhCctvIcon {
  readonly viewBox = input("0 0 897 1025")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCdIcon],svg[whh-cd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-128q79 0 151-31L562 630q-24 10-50 10q-45 0-81-29L269 809q106 87 243 87m64-383.5q0-26.5-19-45.5t-45-19t-45 19t-19 45.5t19 45t45 18.5t45-18.5t19-45m-448-.5q0 137 87 243l198-162q-29-36-29-81q0-26 10-50L159 361q-31 72-31 151m384-384q-79 0-151 31l101 236q24-11 50-11q45 0 81 30l162-199q-106-87-243-87m297 141L611 431q29 36 29 81q0 26-10 51l235 100q31-72 31-151q0-137-87-243"></svg:path>`,
})
export class WhhCdIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCeilinglightIcon],svg[whh-ceilinglight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M736 64H576v512h128l320 448H0l320-448h128V64H288q-13 0-22.5-9.5T256 32t9.5-22.5T288 0h448q13 0 22.5 9.5T768 32t-9.5 22.5T736 64"></svg:path>`,
})
export class WhhCeilinglightIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCellIcon],svg[whh-cell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1023q-103 0-199-50.5t-164-131t-108.5-185T0 448t40-189t109.5-141.5t162.5-87T512 0q111 0 200 36t146 94.5T953 269t54.5 163t16.5 172q0 109-26 185.5t-86 130T753.5 998T512 1023m-1-959q-93 0-174 27t-142 76t-96 123.5T64 456t35.5 182t95 162t143 115T511 959q125 0 211.5-22t139-69t75-113.5T959 593q0-79-14-151.5T897.5 299T814 178T686 95.5T511 64m352 384q-13 0-22.5-9.5t-9.5-23t9.5-22.5t22.5-9t22.5 9t9.5 22.5t-9.5 23T863 448m-95.5-64q-26.5 0-45.5-9.5t-19-23t19-22.5t45.5-9t45 9t18.5 22.5t-18.5 23t-45 9.5M575 320q-69 0-130-10t-61-22q0-14 46.5-23t112.5-9q43 0 76.5-10t50-22t34-22t31.5-10t23 9.5t9 22.5q0 10-28.5 32.5t-75.5 43t-88 20.5m-32-128q-69 0-130-9.5T352 160t46.5-22.5T512 128h95q14 0 23 9.5t9 22.5q0 10-5 16t-27 11t-64 5m-96.5 199.5q7.5 13.5-15 39.5T370 480t-72.5 30t-41-6.5t15-39.5t62-49t72.5-30t40.5 6.5m-191-7.5q-26.5 0-45-19T192 319.5t18.5-45t45-18.5t45.5 18.5t19 45t-19 45.5t-45.5 19M160 575q-13 0-22.5-9t-9.5-22.5t9.5-23T160 511t22.5 9.5t9.5 23t-9.5 22.5t-22.5 9m124.5 99.5Q308 698 316 723t-3.5 37t-36.5 3.5t-48.5-32t-32-48.5t3.5-36.5t37-3.5t48.5 31.5m67-99.5q13.5 0 23 9.5t9.5 23t-9.5 22.5t-23 9t-22.5-9t-9-22.5t9-23t22.5-9.5m32 192q26.5 0 45.5 19t19 45.5t-19 45t-45.5 18.5t-45-18.5t-18.5-45t18.5-45.5t45-19M639 448q56 0 94 14t57 32.5t29 54t11 58t1 64.5q0 77-54 118.5T639 831q-51 0-96-34t-70-85.5T448 607q0-90 45.5-124.5T639 448m-63.5 191q26.5 0 45-18.5t18.5-45t-18.5-45.5t-45-19t-45.5 19t-19 45.5t19 45t45.5 18.5m-32 192q13.5 0 22.5 9.5t9 22.5t-9 22.5t-22.5 9.5t-22.5-9.5t-9-22.5t9-22.5t22.5-9.5"></svg:path>`,
})
export class WhhCellIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCertificateIcon],svg[whh-certificate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1024 389l-91 122l91 121q-4 18-7 29l-140 60l17 151q-9 10-20 21l-151-18l-61 140l-28 7l-122-91l-122 91q-18-4-28-7l-61-140l-151 18q-7-8-20-21l17-151L7 661q-3-10-7-29l91-121L0 389q4-17 7-28l140-60l-17-151q9-10 20-21l151 18L362 7q9-3 28-7l122 90L634 0q18 4 28 7l61 140l151-18q10 10 20 21l-17 151l140 60z"></svg:path>`,
})
export class WhhCertificateIcon {
  readonly viewBox = input("0 0 1024 1022")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCertificatealtIcon],svg[whh-certificatealt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m673 384l96 103l-135 42l32 137l-127-29l102 325q0 33-28 52l-52-52l-62 62q-22-5-36-22.5T449 962l-65-206l-64 206q0 22-14 39.5t-36 22.5l-62-62l-52 52q-28-19-28-52l102-325l-127 29l32-137L0 487l96-103L0 281l135-41l-32-137l137 32L281 0l103 96L487 0l42 135l137-32l-32 137l135 41zM384.5 192q-79.5 0-136 56.5t-56.5 136t56.5 136t136 56.5t136-56.5t56.5-136t-56.5-136t-136-56.5"></svg:path>`,
})
export class WhhCertificatealtIcon {
  readonly viewBox = input("0 0 769 1024")
  readonly width = input("0.76em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCertificatethreeIcon],svg[whh-certificatethree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m485 594l91 366l-128 64l-86-387q-23 3-42 3t-42-3l-86 387l-128-64l91-366Q84 551 42 478.5T0 320q0-87 43-160.5T159.5 43T320 0t160.5 43T597 159.5T640 320q0 86-42 158.5T485 594"></svg:path>`,
})
export class WhhCertificatethreeIcon {
  readonly viewBox = input("0 0 640 1024")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCgiIcon],svg[whh-cgi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 129H673l328 67q12 3 18.5 14.5t3.5 24t-14.5 19T985 256l-221-44l243 113q12 7 15.5 20t-3.5 24.5t-20 15t-25-3.5L702 253l322 516q0 27-19 45.5T960 833H64q-27 0-45.5-18.5T0 769l271-437L94 441q-23 13-47.5 6T9 417t-6.5-48.5T32 330L419 93l46-74q19-19 45.5-19T555 19l29 46h408q13 0 22.5 9.5t9.5 23t-9.5 22.5t-22.5 9M512 97L96 769h832z"></svg:path>`,
})
export class WhhCgiIcon {
  readonly viewBox = input("0 0 1024 833")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCgicenterIcon],svg[whh-cgicenter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.338 1024h-704q-53 0-90.5-37.5t-37.5-90.5v-64q-26 0-45-18.5t-19-45.5V512q0-26 19-45t45-19V128q0-53 37.5-90.5t90.5-37.5h704q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-800-512q-13 0-22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5h576q13 0 22.5-9.5t9.5-22.5V544q0-13-9.5-22.5t-22.5-9.5zm864-352q0-13-9.5-22.5t-22.5-9.5h-768q-13 0-22.5 9.5t-9.5 22.5v288h576q27 0 45.5 18.5t18.5 45.5v256q0 26-18.5 45t-45.5 19h-576v32q0 13 9.5 22.5t22.5 9.5h768q13 0 22.5-9.5t9.5-22.5zm-128 160q-27 0-45.5-18.5t-18.5-45.5t18.5-45.5t45-18.5t45.5 18.5t19 45.5t-18.5 45.5t-45.5 18.5m-192 0q-27 0-45.5-18.5t-18.5-45.5t18.5-45.5t45.5-18.5t45.5 18.5t18.5 45.5t-18.5 45.5t-45.5 18.5m-192 0h-192q-26 0-45-18.5t-19-45.5t19-45.5t45-18.5h192q27 0 45.5 18.5t18.5 45.5t-18.5 45.5t-45.5 18.5m128.5 384q-26.5 0-45.5-18.5t-19-45t19-45.5t45.5-19t45 19t18.5 45.5t-18.5 45t-45 18.5m-192 0q-26.5 0-45.5-18.5t-19-45t19-45.5t45.5-19t45 19t18.5 45.5t-18.5 45t-45 18.5m-192 0q-26.5 0-45.5-18.5t-19-45t19-45.5t45.5-19t45 19t18.5 45.5t-18.5 45t-45 18.5"></svg:path>`,
})
export class WhhCgicenterIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhChairIcon],svg[whh-chair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928 832q-40 0-68-28t-28-68V416q0-42 45-101t83-59q19 0 32.5 17t19.5 44t9 51.5t3 47.5v320q0 40-28 68t-68 28M704 384H320q-27 0-45.5-19T256 320L192 64q0-27 18.5-45.5T256 0h512q26 0 45 19t19 45l-64 256q0 26-19 45t-45 19M192 736q0 40-28 68t-68 28t-68-28t-28-68V416q0-23 2.5-47.5t9-51.5t20-44T64 256q38 0 83 59t45 101zm128-288h384q26 0 45 18.5t19 45t-19 45.5t-45 19H320q-27 0-45.5-19T256 511.5t18.5-45T320 448m0 192h384q26 0 45 18.5t19 45.5v64q0 26-19 45t-45 19H320q-27 0-45.5-19T256 768v-64q0-27 18.5-45.5T320 640"></svg:path>`,
})
export class WhhChairIcon {
  readonly viewBox = input("0 0 1024 832")
  readonly width = input("1.24em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhChandelierIcon],svg[whh-chandelier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M957 827q-10 84-73 140.5T736 1024q-84 0-146.5-55T515 832h-6q-12 82-74.5 137T288 1024q-85 0-148-56.5T67 827q-30-9-48.5-34T0 736q0-29 12.5-81t36-97.5T96 512q29 0 54 57.5T187 692q101-40 172.5-198T445 120q-27-11-44-34.5T384 32q0-16 6-32h244q6 16 6 32q0 30-17 53.5T579 120q14 216 85.5 374T837 692q12-65 37-122.5t54-57.5q24 0 47.5 45.5t36 97.5t12.5 81q0 32-18.5 57T957 827M96 608q-12 0-22 37t-10 65q0 24 9.5 41T96 768t22.5-17t9.5-41q0-28-10-65t-22-37m352-172q-44 128-111.5 213T189 758q-12 49-58 67q9 58 53.5 96.5T288 960q66 0 113-47t47-113zm388 322q-81-24-148.5-109T576 436v364q0 66 47 113t113 47q59 0 103.5-38.5T894 825q-47-18-58-67m92-150q-12 0-22 37t-10 65q0 24 9.5 41t22.5 17t22.5-17t9.5-41q0-28-10-65t-22-37"></svg:path>`,
})
export class WhhChandelierIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCharliechaplinIcon],svg[whh-charliechaplin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 512q0 35-68.5 64.5T769 623t-257 17t-257-17t-186.5-46.5T0 512q0-48 129-85q-1-22-1-27q0-109 51.5-201t140-145.5T512 0t192.5 53.5t140 145.5T896 400q0 5-1 27q129 37 129 85M576 896l64 128H384l64-128z"></svg:path>`,
})
export class WhhCharliechaplinIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhChatIcon],svg[whh-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 832v192q-7-4-20-12t-54-44t-82-84q-49 12-100 12q-73 0-134.5-15T405 844t-66.5-49t-39-50t-11.5-41h96q129 0 229.5-45T773 526t59-206q192 97 192 272q0 143-128 240M384 640q-51 0-100-12q-41 48-80 83t-58 46l-18 11V576Q0 479 0 336q0-91 51.5-168.5T191.5 45t193-45t193 45T717 167.5T768 336t-52 161t-139 106.5T384 640m0-576q-87 0-160.5 34T107 191T64 319.5T107 448t116.5 93.5T384 576t160.5-34.5T661 448t43-128.5T661 191T544.5 98T384 64"></svg:path>`,
})
export class WhhChatIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCheckboxIcon],svg[whh-checkbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1023h-768q-53 0-90.5-37.5T.428 895V127q0-53 37.5-90t90.5-37h768q27 0 53 11l-117 116h-640q-26 0-45 19t-19 45v640q0 27 18.5 45.5t45.5 18.5h640q26 0 45-18.5t19-45.5V447l128-128v576q0 53-37.5 90.5t-90.5 37.5m-338-339q-19 19-47 18q-29 1-48-19l-188-187q-19-20-19-47.5t19.5-46.5t46.5-19t47 19l144 144l488-491q23 33 23 72v68q-8 31-20 42z"></svg:path>`,
})
export class WhhCheckboxIcon {
  readonly viewBox = input("0 0 1025 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCheckboxaltIcon],svg[whh-checkboxalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1023h-768q-53 0-90.5-37.5T.428 895V127q0-53 37.5-90t90.5-37h768q53 0 90.5 37t37.5 90v768q0 53-37.5 90.5t-90.5 37.5m0-832q0-26-18.5-45t-45.5-19h-640q-27 0-45.5 19t-18.5 45v640q0 27 18.5 45.5t45.5 18.5h640q27 0 45.5-18.5t18.5-45.5zm-290 320l142 142q20 20 20 47.5t-19.5 46.5t-47 19t-47.5-19l-142-142l-142 143q-20 19-47 19t-46.5-19.5t-19.5-47t19-46.5l143-143l-144-143q-19-20-19-47.5t19-46.5t46.5-19t47.5 19l143 144l144-144q19-19 46.5-19t47 19.5t19.5 47t-20 46.5z"></svg:path>`,
})
export class WhhCheckboxaltIcon {
  readonly viewBox = input("0 0 1025 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCheckinIcon],svg[whh-checkin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m657 679l-272 345l-272-345q-73-76-99.5-178.5t0-205T113 116q56-57 127.5-86.5T385 0t144.5 29.5T657 116q73 77 99.5 179.5t0 205T657 679M385.5 129Q279 129 204 204t-75 181t75 180.5T385.5 640T567 565.5T642 385t-75-181t-181.5-75m.5 383q-53 0-90.5-37.5T258 384t37.5-90.5T386 256t90.5 37.5T514 384t-37.5 90.5T386 512"></svg:path>`,
})
export class WhhCheckinIcon {
  readonly viewBox = input("0 0 770 1024")
  readonly width = input("0.76em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCheckinaltIcon],svg[whh-checkinalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M764 765q-14 20-28 35l-289 224l-287-224q-14-15-28-35q-62-62-97-144T0 448t35.5-174T131 131t143-95.5T448 0t174 35.5T765 131t95.5 143T896 448t-35 173t-97 144M448 128q-87 0-160.5 43T171 287.5T128 448t43 160.5t116.5 116T448 767t160.5-42.5t116.5-116T768 448t-43-160.5T608.5 171T448 128m-.5 512Q368 640 312 583.5t-56-136T312 312t135.5-56t136 56T640 447.5t-56.5 136t-136 56.5"></svg:path>`,
})
export class WhhCheckinaltIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCheckmarkIcon],svg[whh-checkmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1006 195L387 813q-18 18-53 17q-32-1-49-17L18 546Q0 528 0 502t18-44l89-89q18-18 44-18t44 18l141 141L829 18q18-18 44-18t44 18l89 88q18 19 18 44.5t-18 44.5"></svg:path>`,
})
export class WhhCheckmarkIcon {
  readonly viewBox = input("0 0 1024 830")
  readonly width = input("1.24em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhChefIcon],svg[whh-chef-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M958 446q-15 16-31 34t-40.5 48t-39.5 60t-15 52q0 27-93.5 45.5T512 704t-226.5-18.5T192 640q0-29-27-72.5t-50.5-70T68 448Q0 382 0 288q0-93 65.5-158.5T224 64q23 0 48 5q-16 41-16 91q0 107 66 178q-2-54-2-114q0-93 56-158.5T512 0t136 65.5T704 224q0 61-2 114q66-71 66-178q0-50-16-91q25-5 48-5q93 0 158.5 65.5T1024 288t-66 158M511.5 768Q644 768 738 749t94-45v256q0 26-94 45t-226.5 19t-226-19t-93.5-45V704q0 27 93.5 45.5t226 18.5"></svg:path>`,
})
export class WhhChefIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCherryIcon],svg[whh-cherry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M831.856 768q-79.5 0-135.5-56.5t-56-135.5q0-13 3-32q-314-113-495-315q42 235 174 422q33-11 62-11q80 0 136 56t56 135.5t-56 136t-136 56.5t-136-56t-56-136q0-88 69-147q-152-212-188-494q-6 1-9 1q-26 0-45-19t-19-45V64q0-27 19-45.5T64.856 0t45 18.5t18.5 45.5q0 7 3 37q182 247 536 378q25-43 69-69t96-26q80 0 136 56t56 135.5t-56.5 136t-136 56.5"></svg:path>`,
})
export class WhhCherryIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCherryaltIcon],svg[whh-cherryalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M800 1024q-93 0-158.5-65.5T576 800q0-81 51-142.5T756 580q-25-160-91-286T512 128q-87 40-153 166t-91 286q78 16 129 77.5T448 800q0 93-65.5 158.5T224 1024T65.5 958.5T0 800q0-85 56.5-148T197 579q13-142 64-259.5T390 128h-6q-27 0-45.5-19T320 63.5t18.5-45T384 0h256q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19h-6q78 74 129 191.5T827 579q84 10 140.5 73t56.5 148q0 93-65.5 158.5T800 1024"></svg:path>`,
})
export class WhhCherryaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhChevrondownIcon],svg[whh-chevrondown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m577 608l426-434q21-21 21-51t-21-51l-51-51Q931 0 901 0t-51 21L512 359L174 21Q153 0 123 0T72 21L21 72Q0 93 0 123t21 51l428 434q32 32 64 32t64-32"></svg:path>`,
})
export class WhhChevrondownIcon {
  readonly viewBox = input("0 0 1024 640")
  readonly width = input("1.6em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhChevronleftIcon],svg[whh-chevronleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m32 577l434 426q21 21 51 21t51-21l51-51q21-21 21-51t-21-51L281 512l338-338q21-21 21-51t-21-51l-51-51Q547 0 517 0t-51 21L32 449Q0 481 0 513t32 64"></svg:path>`,
})
export class WhhChevronleftIcon {
  readonly viewBox = input("0 0 640 1024")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhChevronrightIcon],svg[whh-chevronright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m608 577l-434 426q-21 21-51 21t-51-21l-51-51Q0 931 0 901t21-51l338-338L21 174Q0 153 0 123t21-51l51-51Q93 0 123 0t51 21l434 428q32 32 32 63.5T608 577"></svg:path>`,
})
export class WhhChevronrightIcon {
  readonly viewBox = input("0 0 640 1024")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhChevronsIcon],svg[whh-chevrons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M736 1024H576l288-512L576 0h160l288 512zm-448 0L0 512L288 0h160L160 512l288 512z"></svg:path>`,
})
export class WhhChevronsIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhChevronupIcon],svg[whh-chevronup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m577 32l426 434q21 21 21 51t-21 51l-51 51q-21 21-51 21t-51-21L512 281L174 619q-21 21-51 21t-51-21l-51-51Q0 547 0 517t21-51L449 32q32-32 64-32t64 32"></svg:path>`,
})
export class WhhChevronupIcon {
  readonly viewBox = input("0 0 1024 640")
  readonly width = input("1.6em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhChickenIcon],svg[whh-chicken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 896q-12 0-50-34q-33-11-46 2t-2 46q34 38 34 50q0 26-19 45t-45.5 19t-45-19t-18.5-45q0-12-4-27.5T745 885t-25-52.5t-39-79.5l-72-68q1-2 7-12t11.5-18t12.5-15t14.5-12.5t17-11T684 609l69 72q59 29 79.5 39t52.5 25t47.5 19t27.5 4q26 0 45 19t19 45.5t-19 45t-45 18.5M608 608q-12 12-21.5 30t-18 26t-24.5 8q-44 0-83.5-10t-65-23.5t-65-32T256 576Q110 527 55 466.5T0 288Q0 169 84.5 84.5T288 0q118 0 178.5 55T576 256q14 41 40.5 92.5t41 95T672 544q0 15-8.5 23.5t-26.5 19t-29 21.5"></svg:path>`,
})
export class WhhChickenIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhChickenaltIcon],svg[whh-chickenalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M982 155q-15 0-41.5 12.5T850 215l-35 38q17 11 17 24q0 38-9.5 67T795 407.5T768 469q-32 98-72.5 134.5T576 640q-80 0-136-56t-56-136q0-79 36.5-119.5T555 256q26-9 60.5-26.5t64-27.5t67.5-10l38-42q38-87 38-108q0-17 10.5-29.5t26-12.5t26 12.5T896 42q0 7-15 27q9 21 15 27q9 9 44 0q33-32 41-32q18 0 30.5 13.5T1024 110t-12.5 32t-29.5 13M320 457q0 102 72.5 174.5T567 704q101 0 153-47t94-172q11-36 41-95q79 70 124 151.5t45 162.5q0 62-70 106t-183.5 65T512 896q-91 0-162.5-6t-139-23t-112-45T27 748T0 640q0-73 27.5-144t71-124.5t95-95t101.5-63t89-21.5q64 0 140 19q-103 42-153.5 100T320 457"></svg:path>`,
})
export class WhhChickenaltIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhChocolateIcon],svg[whh-chocolate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 768H586q36 18 48 38.5t3 39t-22.5 34.5t-23.5 31t-6 23q-15 26-31 26q-7 0-35.5-25.5t-67-58T389 832H64q-26 0-45-19T0 768V192q0-27 18.5-45.5T64 128h256q44 0 86.5-20t68-44t46-44T545 0q8 0 13.5 1T570 9.5t6 22.5q-31 54-31 128q0 13 2 32h413q26 0 45 18.5t19 45.5v448q0 27-18.5 45.5T960 768M435 192H64v576h371q-6-5-14.5-13.5T398 721t-14-49q0-25 9.5-44t41.5-52q14-15 14-37t-10-46.5t-22.5-48.5t-22.5-49.5t-10-42.5q0-37 12.5-77t25.5-61zm237 64H544q-13 0-22.5 9.5T512 288v128q0 13 9.5 22.5T544 448t22.5-9.5T576 416v-96h96q13 0 22.5-9.5T704 288t-9.5-22.5T672 256m0 256H544q-13 0-22.5 9.5T512 544v128q0 13 9.5 22.5T544 704t22.5-9.5T576 672v-96h96q13 0 22.5-9.5T704 544t-9.5-22.5T672 512m256-256H800q-13 0-22.5 9.5T768 288v128q0 13 9.5 22.5T800 448t22.5-9.5T832 416v-96h96q13 0 22.5-9.5T960 288t-9.5-22.5T928 256m0 256H800q-13 0-22.5 9.5T768 544v128q0 13 9.5 22.5T800 704t22.5-9.5T832 672v-96h96q13 0 22.5-9.5T960 544t-9.5-22.5T928 512"></svg:path>`,
})
export class WhhChocolateIcon {
  readonly viewBox = input("0 0 1024 960")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhChristiancrossIcon],svg[whh-christiancross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 512H512v448q0 26-18.5 45t-45.5 19H320q-26 0-45-19t-19-45V512H64q-26 0-45-19T0 448V320q0-27 18.5-45.5T64 256h192V64q0-27 19-45.5T320 0h128q27 0 45.5 18.5T512 64v192h192q27 0 45.5 18.5T768 320v128q0 26-18.5 45T704 512"></svg:path>`,
})
export class WhhChristiancrossIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhChristmasstreeIcon],svg[whh-christmasstree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M897 769q0 5-1 10v1l-1 1q-1 5-3 11v1q-2 4-5 9l-1 2q-3 3-6 7l-3 3l-4 4q-4 2-7 4l-.5.5l-.5.5h-1q-11 6-23 8q-7 1-8 1H577v128q0 26-19 45t-45 19H384q-26 0-45-19t-19-45V832H64q-1 0-8-1q-12-2-23-8h-1l-.5-.5l-.5-.5q-3-1-7-4q-2-3-4-4l-3-3q-3-4-6-7l-.5-1l-.5-1q-3-5-5-9v-1q-2-6-3-11q-1 0-1-1v-1q-1-5-1-10v-4q1-4 1-7q1-4 2-9v-1q4-12 13-22l104-157q92 90 256.5 144T737 767q78 0 159-10v1q0 3 1 7zm-737-66q-13 0-22.5 9.5t-9.5 23t9.5 22.5t22.5 9t22.5-9t9.5-22.5t-9.5-23T160 703m128.5 0q-13.5 0-23 9.5t-9.5 23t9.5 22.5t23 9t22.5-9t9-22.5t-9-23t-22.5-9.5M159 511h-39q-12-2-23-8q-1 0-1-.5t-.5-.5H95q-3-2-6-5q-4-2-5-3t-3-4q-3-3-5-6l-1.5-1.5l-.5-.5q-3-5-5-9v-2q-2-5-3-10l-.5-1l-.5-1q-1-5-1-10v-5q1-4 1-6q1-4 2-9v-1q6-19 22-31l73-88q65 110 233.5 183T780 574l84 126q-50 3-95 3q-192 0-354-52T159 511m65.5-64q-13.5 0-23 9.5T192 479t9.5 22.5t23 9.5t22.5-9.5t9-22.5t-9-22.5t-22.5-9.5m128 64q-13.5 0-23 9.5T320 543t9.5 22.5t23 9.5t22.5-9.5t9-22.5t-9-22.5t-22.5-9.5m192 64q-13.5 0-22.5 9.5t-9 22.5t9 22.5t22.5 9.5t23-9.5T577 607t-9.5-22.5t-23-9.5M832 459l-1 2q-1 5-3 10v2q-2 4-5 9l-.5.5l-.5 1.5l-6 6q-2 3-3 4t-5 3q-3 3-6 5h-.5l-.5 1h-1q-4 2-16 5q-200-12-356-80T204 259l113-137q62 76 177 132t262 80l52 63q16 12 22 31v1q1 5 2 9q0 2 1 6v5q0 5-1 10M416.5 255q-13.5 0-23 9t-9.5 22.5t9.5 23t23 9.5t23-9.5t9.5-23t-9.5-22.5t-23-9m128 64q-13.5 0-22.5 9.5t-9 22.5t9 22.5t22.5 9.5t23-9.5T577 351t-9.5-22.5t-23-9.5M673 383q-13 0-22.5 9.5T641 415t9.5 22.5T673 447t22.5-9.5T705 415t-9.5-22.5T673 383M393 31q0-1 .5-1.5t1.5-.5q5-9 14-16q1-1 3-2q0-1 2-2t3-2q1 0 3.5-.5T424 5q7-3 13-4q4-1 11.5-1T461 1t12 4q1 1 3.5 1.5t4 1T484 10q1 0 1 1l3 2q9 7 15 16l.5.5l.5 1.5l180 216Q467 189 360 70z"></svg:path>`,
})
export class WhhChristmasstreeIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhChromeIcon],svg[whh-chrome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m512 1024l224-384q32-55 32-128q0-56-23-106t-64-86h305q38 93 38 192q0 139-68.5 257T769 955.5T512 1024M261 461L109 197q71-91 176.5-144T512 0q140 0 257.5 69.5T955 256H512q-92 0-162.5 58.5T261 461m251-141q80 0 136 56t56 136t-56 136t-136 56t-136-56t-56-136t56-136t136-56M288 640q34 58 94 93t130 35q42 0 82-14l-153 265q-123-18-224-88.5t-159-181T0 512q0-137 69-256z"></svg:path>`,
})
export class WhhChromeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhChurchIcon],svg[whh-church-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1017 576H449v64h480q13 0 22.5 9.5T961 672v320q0 13-9.5 22.5T929 1024H257V864q0-13-9.5-22.5T225 832t-22.5 9.5T193 864v160H33q-13 0-22.5-9.5T1 992V482q-1-16 8-27l184-177v-86H97q-13 0-22.5-9.5T65 160t9.5-22.5T97 128h96V32q0-13 9.5-22.5T225 0t22.5 9.5T257 32v96h96q13 0 22.5 9.5T385 160t-9.5 22.5T353 192h-96v86l177 170h476q16 0 27 16l84 96q5 7 3.5 11.5t-7.5 4.5M833 864q0 13 9.5 22.5T865 896t22.5-9.5T897 864v-64q0-13-9.5-22.5t-23-9.5t-22.5 9.5t-9 22.5zm-128 0q0 13 9.5 22.5T737 896t22.5-9.5T769 864v-64q0-13-9.5-22.5T737 768t-22.5 9.5T705 800zm-128 0q0 13 9.5 22.5T609 896t22.5-9.5T641 864v-64q0-13-9.5-22.5T609 768t-22.5 9.5T577 800z"></svg:path>`,
})
export class WhhChurchIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhChyrpIcon],svg[whh-chyrp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-446-647q-37 34-70 91t-51.5 107.5t-38.5 98t-34 62.5q-33 32-64.5 69t-48.5 60t-15 25q13 12 33.5 1t50.5-44.5t61.5-72.5t80.5-96t94-102q46-46 88-86.5t62-60.5t42-45q29-26 77-62t51-34q5 4-23 45.5t-91 117t-142 157.5q-95 100-192 192q37-9 69-25t63-40.5t54.5-46.5t60.5-58.5t64-60.5q53-49 100-112t76-118.5t50.5-104t29.5-77.5l9-29q-42 39-102.5 69t-112.5 48.5t-116.5 52.5t-114.5 79"></svg:path>`,
})
export class WhhChyrpIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCigarIcon],svg[whh-cigar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1011.27 955q-7 6-18 17.5t-20.5 20.5t-17.5 18q-12 12-46 13t-62-14q-241-154-491-411l36-36q28 13 56 13q53 0 90.5-37.5t37.5-90.5q0-28-13-56l36-36q257 249 411 491q15 28 14 62t-13 46m-563-635q-53 0-90.5 37.5t-37.5 90.5q0 28 13 56l-35 35q-174-189-284-362q-15-28-14-62t13-46l56-56q12-12 46-13t62 14q174 111 362 284l-35 35q-28-13-56-13"></svg:path>`,
})
export class WhhCigarIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCigaretteIcon],svg[whh-cigarette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928.365 512q0 36 9 83q1 5 16.5 35.5t27 73.5t11.5 96l-64-64q-8-65-32-96q-23-24-27.5-47.5t-4.5-80.5q0-80 37.5-136t90.5-56q15 0 32 7q-42 16-69 67.5t-27 117.5m-192-307q0 38 9 89q55 61 55 167v147l-64-64q1-7 1-23t-.5-35.5t-.5-24.5q0-77-9-89q-55-62-55-167q0-85 37.5-145t90.5-60q14 0 32 7q-42 18-69 72.5t-27 125.5m278 764l-45 45q-10 10-23.5 10t-22.5-10l-658-657q-9-9-9-22.5t9-23.5l46-46q10-9 23.5-9t22.5 9l658 658q9 9 9 22.5t-10 23.5m-758-745l-32 32q-3 3-7.5 8.5t-7.5 9t-7 6.5t-8 2.5t-7-3.5l-177-178q-10-9-10-22.5t10-23.5l45-46q10-9 23.5-9t22.5 9l178 178q3 3 3.5 7t-2.5 8t-6.5 7t-9 7.5t-8.5 7.5"></svg:path>`,
})
export class WhhCigaretteIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCircleaIcon],svg[whh-circlea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m192-640q0-53-37.5-90.5T576 256H448q-53 0-90.5 37.5T320 384v352q0 13 9.5 22.5T352 768t22.5-9.5T384 736V592q0-6 4.5-11t11.5-5h224q7 0 11.5 5t4.5 11v144q0 13 9.5 22.5T672 768t22.5-9.5T704 736zm-80 128H400q-7 0-11.5-4.5T384 496V384q0-26 19-45t45-19h128q27 0 45.5 19t18.5 45v112q0 7-4.5 11.5T624 512"></svg:path>`,
})
export class WhhCircleaIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCircleaddIcon],svg[whh-circleadd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m256-576H576V256q0-26-19-45t-45.5-19t-45 19t-18.5 45v192H256q-27 0-45.5 19T192 512.5t18.5 45T256 576h192v192q0 27 18.5 45.5t45 18.5t45.5-18.5t19-45.5V576h192q27 0 45.5-18.5t18.5-45t-19-45.5t-45-19"></svg:path>`,
})
export class WhhCircleaddIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclearrowdownIcon],svg[whh-circlearrowdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m237-493q-19-19-46-19t-46 19l-82 81V256q0-27-18.5-45.5t-45-18.5t-45 18.5T448 256v356l-82-81q-19-19-46-19t-46 19t-19 46t19 46l190 190q8 8 23 13q1 0 3 1q2 0 2.5.5t2 1l1.5.5q3 1 6 1h3q32 4 54-17l190-190q19-19 19-46t-19-46"></svg:path>`,
})
export class WhhCirclearrowdownIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclearrowleftIcon],svg[whh-circlearrowleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m256-576H411l82-82q19-19 19-46t-19-46t-46-19t-46 19L210 465q-8 8-13 22q0 1-2 6l-.5 1.5l-.5 2.5q0 2-1 5v4q-4 32 17 53l191 191q19 19 46 19t46-19t19-46t-19-46l-82-82h357q26 0 45-19t19-45t-18.5-45t-45.5-19"></svg:path>`,
})
export class WhhCirclearrowleftIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclearrowrightIcon],svg[whh-circlearrowright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m319-518v-4q0-3-1-5q0-1-.5-2.5t-1-2t-1-2.5t-.5-3q-5-14-13-22L623 274q-19-19-46-19t-46 19t-19 46t19 46l82 82H256q-26 0-45 19t-19 45t19 45t45 19h357l-82 82q-19 19-19 46t19 46t46 19t46-19l191-191q21-21 17-53"></svg:path>`,
})
export class WhhCirclearrowrightIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclearrowupIcon],svg[whh-circlearrowup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m237-623L559 211q-22-21-54-17h-3q-3 0-6 1l-1.5.5l-2.5.5l-2 1l-3 1q-15 5-23 13L274 401q-19 19-19 46t19 46t46 19t46-19l82-81v356q0 27 18.5 45.5t45 18.5t45-18.5T575 768V412l82 81q19 19 46 19t46-19t19-46t-19-46"></svg:path>`,
})
export class WhhCirclearrowupIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclebIcon],svg[whh-circleb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m192-448q0-57-44-96q44-38 44-96q0-53-37.5-90.5T576 256H352q-13 0-22.5 9.5T320 288v448q0 13 9.5 22.5T352 768h224q53 0 90.5-37.5T704 640zM576 704H400q-7 0-11.5-4.5T384 688V528q0-6 4.5-11t11.5-5h176q26 0 45 19t19 45v64q0 27-19 45.5T576 704m0-256H400q-7 0-11.5-4.5T384 432v-96q0-6 4.5-11t11.5-5h176q26 0 45 19t19 45.5t-19 45t-45 18.5"></svg:path>`,
})
export class WhhCirclebIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclebackwardIcon],svg[whh-circlebackward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m-64-756q-18-20-31-7L200 493q-8 8-8 19t8 19l217 232q13 13 31-7zm320 0q-18-20-31-7L520 493q-8 8-8 19t8 19l217 232q13 13 31-7z"></svg:path>`,
})
export class WhhCirclebackwardIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclebackwardemptyIcon],svg[whh-circlebackwardempty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-960q-91 0-174 35.5T195 195T99.5 338T64 512t35.5 174T195 829t143 95.5T512 960t174-35.5T829 829t95.5-143T960 512t-35.5-174T829 195T686 99.5T512 64m225 699L520 531q-8-8-8-19t8-19l217-232q13-13 31 7v488q-18 20-31 7m-320 0L200 531q-8-8-8-19t8-19l217-232q13-13 31 7v488q-18 20-31 7"></svg:path>`,
})
export class WhhCirclebackwardemptyIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclecIcon],svg[whh-circlec-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m-64-704h128q26 0 45 19t19 45q0 13 9.5 22.5T672 416t22.5-9.5T704 384q0-53-37.5-90.5T576 256H448q-54 0-91.5 37.5T319 384v256q0 53 38 90.5t91 37.5h128q53 0 90.5-37.5T704 640q0-13-9.5-22.5T672 608t-22.5 9.5T640 640q0 27-19 45.5T576 704H448q-27 0-46-18.5T383 640V384q0-26 19-45t46-19"></svg:path>`,
})
export class WhhCirclecIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclecallincomingIcon],svg[whh-circlecallincoming-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m246-708q10-10 10-25t-10.5-25t-25-10t-24.5 10L576 398V288q0-13-9.5-22.5T544 256t-22.5 9.5T512 288v192q0 13 9.5 22.5T544 512h192q13 0 22.5-9.5T768 480t-9.5-22.5T736 448H626zm10 324H640l-64 64q-64-17-151.5-105T320 448l64-64V256q-24-34-52-53t-42-5l-67 67q-55 55-16 173t150 229t229 150t173-16l67-67q14-14-4.5-46T768 640"></svg:path>`,
})
export class WhhCirclecallincomingIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclecallmissedIcon],svg[whh-circlecallmissed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m246-708q10-10 10-25t-10.5-25t-25-10t-24.5 10l-68 68l-68-68q-10-10-24.5-10t-25 10t-10.5 25t10 25l68 68l-68 68q-10 10-10 25t10.5 25t25 10t24.5-10l68-68l68 68q10 10 24.5 10t25-10t10.5-25t-10-25l-68-68zm10 324H640l-64 64q-64-17-151.5-105T320 448l64-64V256q-24-34-52-53t-42-5l-67 67q-55 55-16 173t150 229t229 150t173-16l67-67q14-14-4.5-46T768 640"></svg:path>`,
})
export class WhhCirclecallmissedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclecalloutgoingIcon],svg[whh-circlecalloutgoing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m256-736q0-13-9.5-22.5T736 256H544q-13 0-22.5 9.5T512 288t9.5 22.5T544 320h110L522 452q-10 10-10 25t10.5 25t25 10t24.5-10l132-132v110q0 13 9.5 22.5T736 512t22.5-9.5T768 480zm0 352H640l-64 64q-64-17-151.5-105T320 448l64-64V256q-24-34-52-53t-42-5l-67 67q-55 55-16 173t150 229t229 150t173-16l67-67q14-14-4.5-46T768 640"></svg:path>`,
})
export class WhhCirclecalloutgoingIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCircledIcon],svg[whh-circled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m191-640q0-53-37.5-90.5T575 256H352q-14 0-23 9.5t-9 22.5v448q0 13 9 22.5t23 9.5h223q53 0 90.5-37.5T703 640zM575 704H400q-7 0-11.5-4.5T384 688V336q0-6 4.5-11t11.5-5h175q27 0 45.5 19t18.5 45v256q0 27-18.5 45.5T575 704"></svg:path>`,
})
export class WhhCircledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCircledeleteIcon],svg[whh-circledelete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m236-655q20-19 20-47t-19.5-47.5T701 255t-47 20L511 417L369 275q-19-20-47-20t-47.5 19.5T255 322t20 47l142 143l-142 142q-20 19-20 47t19.5 47.5T322 768t47-20l142-142l143 142q19 20 47 20t47.5-19.5T768 701t-20-47L606 512z"></svg:path>`,
})
export class WhhCircledeleteIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCircledownIcon],svg[whh-circledown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-896q-104 0-192.5 51.5t-140 140T128 512t51.5 192.5t140 140T512 896t192.5-51.5t140-140T896 512t-51.5-192.5t-140-140T512 128m62 532q-4 17-14 27q-19 19-48 16q-28 3-47-16q-10-10-15-28L273 482q-17-17-17-41t17-41t41-17t41 17l157 158l158-158q17-17 41-17t41 17t17 41t-17 41z"></svg:path>`,
})
export class WhhCircledownIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCircledownloadIcon],svg[whh-circledownload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512q0-104 40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199q0 139-68.5 257T769 955.5T512 1024M352 832h320q13 0 22.5-9.5T704 800t-9.5-22.5T672 768H352q-13 0-22.5 9.5T320 800t9.5 22.5T352 832m446-448H641V256q0-27-19-45.5T577 192H448q-26 0-45 18.5T384 256v128H226q-23 0-31 25t6 39l280 242q13 14 31.5 14t31.5-14l279-242q14-14 6-39t-31-25"></svg:path>`,
})
export class WhhCircledownloadIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCircledribbbleIcon],svg[whh-circledribbble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m309-429q-62-19-149-19q-25 0-55 9q19 109 23 220q66-29 114-84t67-126M575 826q-3-100-24-212l-39 26q-53 38-83.5 77T388 807q59 25 124 25q32 0 63-6M192 512q0 79 36 147.5T326 772q38-116 134-184q38-27 76-44q-9-37-19-66q-75 35-155 34q-88-1-168-34q-2 18-2 34m16-101q78 37 144 37q62 0 138-34q-54-111-157-166q-91 61-125 163m304-219q-57 0-114 22q103 54 154 163q92-66 113-146q-71-39-153-39m205 74q-39 107-130 171l-9 6q12 34 24 78q42-9 84-9q72 1 144 25q2-24 2-25q0-73-30.5-137T717 266"></svg:path>`,
})
export class WhhCircledribbbleIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCircleeIcon],svg[whh-circlee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5M400 512h208q13 0 22.5-9.5T640 480t-9.5-22.5T608 448H400q-7 0-11.5-4.5T384 432v-96q0-7 4.5-11.5T400 320h272q13 0 22.5-9.5T704 288t-9.5-22.5T672 256H352q-14 0-23 9.5t-9 22.5v448q0 13 9 22.5t23 9.5h320q13 0 22.5-9.5T704 736t-9.5-22.5T672 704H400q-7 0-11.5-4.5T384 688V528q0-6 4.5-11t11.5-5"></svg:path>`,
})
export class WhhCircleeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCircleeightIcon],svg[whh-circleeight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m192-448q0-57-43-96q43-38 43-96q0-53-37.5-90.5T576 256H448q-53 0-90.5 37.5T320 384q0 58 43 96q-43 39-43 96v64q0 53 37.5 90.5T448 768h128q53 0 90.5-37.5T704 640zM576 704H448q-27 0-45.5-18.5T384 640v-64q0-26 18.5-45t45.5-19h128q27 0 45.5 19t18.5 45v64q0 27-18.5 45.5T576 704m0-256H448q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45.5-19h128q27 0 45.5 19t18.5 45.5t-18.5 45T576 448"></svg:path>`,
})
export class WhhCircleeightIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclefIcon],svg[whh-circlef-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m160-768H351q-13 0-22.5 9.5T319 288v448q0 13 9.5 22.5t23 9.5t22.5-9.5t9-22.5V528q0-6 5-11t11-5h209q13 0 22.5-9.5T640 480t-9.5-22.5T608 448H399q-6 0-11-4.5t-5-11.5v-96q0-6 5-11t11-5h273q13 0 22.5-9.5T704 288t-9.5-22.5T672 256"></svg:path>`,
})
export class WhhCirclefIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclefacebookIcon],svg[whh-circlefacebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 1007V704h64q27 0 45.5-12.5T768 661v-42q0-18-18.5-30.5T704 576h-64V448q0-27 19-45.5t45.5-18.5t45-12.5T768 341v-42q0-18-18.5-30.5T704 256q-106 0-149 43t-43 149v128q-26 0-45 12.5T448 619v42q0 18 19 30.5t45 12.5v320q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199q0 177-108.5 314.5T640 1007"></svg:path>`,
})
export class WhhCirclefacebookIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclefiveIcon],svg[whh-circlefive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m192-448q0-53-37.5-90.5T576 448H400q-7 0-11.5-4.5T384 432v-96q0-6 4.5-11t11.5-5h272q13 0 22.5-9.5T704 288t-9.5-22.5T672 256H352q-13 0-22.5 9.5T320 288v160q0 27 18.5 45.5T384 512h192q27 0 45.5 19t18.5 45v64q0 27-18.5 45.5T576 704H448q-27 0-45.5-18.5T384 640q0-13-9.5-22.5T352 608t-22.5 9.5T320 640q0 53 37.5 90.5T448 768h128q53 0 90.5-37.5T704 640z"></svg:path>`,
})
export class WhhCirclefiveIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCircleforkIcon],svg[whh-circlefork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M929 808L719 631q23-49 13.5-103.5T684 433L581 332q-31-31-64-50t-51-22l-18-4q0 4 2 11.5t18.5 32.5t43.5 52l106 132q8 5 6.5 25T608 544L480 416q-23-23-55-39t-52-20l-21-5q1 8 4 22t19.5 48t40.5 58l128 128q-16 16-34.5 18t-25.5-8L352 512q-29-29-53-45t-33-17l-10-2q1 7 4 20t22 48t50 65l102 102q39 40 93.5 49.5T630 719l179 210q-134 95-297 95q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199q0 163-95 296"></svg:path>`,
})
export class WhhCircleforkIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCircleforwardIcon],svg[whh-circleforward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m-7-531L287 262q-13-14-31 6v488q18 20 31 7l218-232q7-7 7-18.5t-7-19.5m320 0L607 262q-12-14-31 6v488q19 20 31 7l218-232q7-7 7-18.5t-7-19.5"></svg:path>`,
})
export class WhhCircleforwardIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCircleforwardemptyIcon],svg[whh-circleforwardempty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-960q-91 0-174 35.5T195 195T99.5 338T64 512t35.5 174T195 829t143 95.5T512 960t174-35.5T829 829t95.5-143T960 512t-35.5-174T829 195T686 99.5T512 64m313 467L607 763q-12 13-31-7V268q19-20 31-6l218 231q7 8 7 19.5t-7 18.5M287 763q-12 13-31-7V268q18-20 31-6l218 231q7 8 7 19.5t-7 18.5z"></svg:path>`,
})
export class WhhCircleforwardemptyIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclefourIcon],svg[whh-circlefour-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m192-736q0-13-9.5-22.5T672 256t-22.5 9.5T640 288v160q0 27-18.5 45.5T576 512H448q-26 0-45-18.5T384 448V288q0-13-9.5-22.5T352 256t-22.5 9.5T320 288v160q0 53 37.5 90.5T448 576h128q34 0 64-17v177q0 13 9.5 22.5T672 768t22.5-9.5T704 736z"></svg:path>`,
})
export class WhhCirclefourIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclegIcon],svg[whh-circleg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m191-480q0-13-9-22.5t-23-9.5H543q-13 0-22.5 9.5T511 544t9.5 22.5T543 576h96v64q0 27-18.5 45.5T575 704H447q-26 0-44.5-18.5T384 640V384q0-26 18.5-45t44.5-19h128q27 0 45.5 19t18.5 45q0 13 9.5 22.5t23 9.5t22.5-9.5t9-22.5q0-53-37.5-90.5T575 256H447q-53 0-90 37.5T320 384v256q0 53 37 90.5t90 37.5h128q53 0 90.5-37.5T703 640z"></svg:path>`,
})
export class WhhCirclegIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclegithubIcon],svg[whh-circlegithub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M639 1007q0-1 .5-3.5t.5-4.5q0-85-19.5-171T566 701q130-11 198-76.5T832 455q0-91-64-140v-91q0-11-11-21.5T736 192q-12 0-119 70q-47-6-105-6q-57 0-105 6q-107-70-119-70q-10 0-21 11t-11 21q0 9-2 44t-3 51q-59 48-59 136q0 104 68 169.5T458 701q-5 7-14 20q-43 47-124 47q-16 0-32-13.5t-31.5-32T224 685t-42-32t-54-13q0 8 9.5 20t26.5 33t28 43q26 50 54 73t74 23q48 0 87-14q-23 88-23 181v4l1 4q-168-43-276.5-180.5T0 512q0-105 40.5-199.5t109-163T313 40.5T512 0t199 40.5t163.5 109t109 163T1024 512q0 177-108.5 314.5T639 1007"></svg:path>`,
})
export class WhhCirclegithubIcon {
  readonly viewBox = input("0 0 1024 1007")
  readonly width = input("1.02em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclegoogleplusIcon],svg[whh-circlegoogleplus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-4 0-30-2q62-67 62-158q0-62-14.5-95T480 704q-16-15-54.5-34T376 642q-18-10-37-30t-19-36t11-31.5t31-30t29-20t25-14.5q25-14 44.5-58T480 320q0-56-18.5-108.5T407 128h73l65-64H265Q380 0 512 0q104 0 199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m353-768h-96v-96q0-14-9.5-23t-23-9t-22.5 9t-9 23v96h-96q-14 0-23 9t-9 22.5t9 23t23 9.5h96v96q0 13 9 22.5t22.5 9.5t23-9.5T769 416v-96h96q13 0 22.5-9.5t9.5-23t-9.5-22.5t-22.5-9M256 640q-121 0-221 56Q0 606 0 512q0-4 2-30q66 59 191 62v32q0 13 6.5 25t14.5 18.5t19 11.5t15.5 6.5zm128-320q0 76-45.5 118T224 480q-65 0-112.5-56.5T64 288q0-12 3-29q41-72 104-128q12-3 21-3q79 0 135.5 56T384 320M256 704q91 0 142 57t51 135q0 64-61 112q-104-26-188-90.5T64 760q81-56 192-56"></svg:path>`,
})
export class WhhCirclegoogleplusIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclehIcon],svg[whh-circleh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m192-736q0-13-9.5-22.5T672 256t-22.5 9.5T640 288v208q0 7-5 11.5t-11 4.5H399q-6 0-11-4.5t-5-11.5V288q0-13-9-22.5t-22.5-9.5t-23 9.5T319 288v448q0 13 9.5 22.5t23 9.5t22.5-9.5t9-22.5V592q0-6 5-11t11-5h225q6 0 11 5t5 11v144q0 13 9.5 22.5T672 768t22.5-9.5T704 736z"></svg:path>`,
})
export class WhhCirclehIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclehammerIcon],svg[whh-circlehammer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928 809L825 704q-28-29-68-23L547 466l102-108q4-4-.5-10t-16-15.5T617 320H415L270 475q-14 14-14 35t14 35l67 71q14 15 33.5 15t33.5-15l75-79l210 214q-6 41 22 70l102 104q-135 99-301 99q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199q0 164-96 297"></svg:path>`,
})
export class WhhCirclehammerIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCircleiIcon],svg[whh-circlei-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m32-704q13 0 22.5-9.5T576 288t-9.5-22.5T544 256H416q-13 0-22.5 9.5T384 288t9.5 22.5T416 320h32v384h-32q-13 0-22.5 9.5T384 736t9.5 22.5T416 768h128q13 0 22.5-9.5T576 736t-9.5-22.5T544 704h-32V320z"></svg:path>`,
})
export class WhhCircleiIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCircleinstagramIcon],svg[whh-circleinstagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m256-704q0-26-18.5-45T704 256H320q-26 0-45 19t-19 45v64h114q58-64 142-64t142 64h114zM384 512q0 53 37.5 90.5T512 640t90.5-37.5T640 512t-37.5-90.5T512 384t-90.5 37.5T384 512m384-64h-76q12 33 12 64q0 80-56 136t-136 56t-136-56t-56-136q0-31 12-64h-76v256q0 27 18.5 45.5T320 768h384q27 0 45.5-18.5T768 704z"></svg:path>`,
})
export class WhhCircleinstagramIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclejIcon],svg[whh-circlej-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m160-768q-13 0-22.5 9.5T640 288v352q0 27-19 45.5T576 704H448q-27 0-45.5-18.5T384 640q0-13-9.5-22.5T352 608t-22.5 9.5T320 640q0 53 37.5 90.5T448 768h128q53 0 90.5-37.5T704 640V288q0-13-9.5-22.5T672 256"></svg:path>`,
})
export class WhhCirclejIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclekIcon],svg[whh-circlek-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m192-448q0-58-43-96q43-38 43-96v-96q0-13-9-22.5t-22.5-9.5t-23 9.5T640 288v96q0 27-18.5 45.5T576 448H384V288q0-13-9.5-22.5T352 256t-22.5 9.5T320 288v448q0 13 9.5 22.5T352 768t22.5-9.5T384 736V512h192q27 0 45.5 19t18.5 45v160q0 13 9.5 22.5t23 9.5t22.5-9.5t9-22.5z"></svg:path>`,
})
export class WhhCirclekIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCircleknifeIcon],svg[whh-circleknife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928 810Q673 608 528 480q-69-60-122.5-114T333 289l-19-24q-10-9-23.5-9t-22.5 9q-13 12-14.5 34.5t8 53.5t32 72t56 87.5t83 101.5T542 727q9 8 22 8t23-8l21-23l200 225q-133 95-296 95q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199q0 164-96 298"></svg:path>`,
})
export class WhhCircleknifeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclelIcon],svg[whh-circlel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m160-320H384V288q0-13-9-22.5t-22.5-9.5t-23 9.5T320 288v448q0 13 9.5 22.5T352 768h320q13 0 22.5-9.5T704 736t-9.5-22.5T672 704"></svg:path>`,
})
export class WhhCirclelIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCircleleftIcon],svg[whh-circleleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-896q-104 0-192.5 51.5t-140 140T128 512t51.5 192.5t140 140T512 896t192.5-51.5t140-140T896 512t-51.5-192.5t-140-140T512 128m112 623q-17 17-41 17t-41-17L365 574q-18-5-28-15q-19-19-16-47q-3-29 16-48q10-10 27-14l178-178q17-17 41-17t41 17t17 41t-17 41L467 512l157 157q17 17 17 41t-17 41"></svg:path>`,
})
export class WhhCircleleftIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCircleloaderemptyIcon],svg[whh-circleloaderempty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 896q122 0 225-60t163-163t60-225t-60-225T673 60T448 0T223 60T60 223T0 448t60 225t163 163t225 60m0-832q104 0 192.5 51.5t140 140T832 448t-51.5 192.5t-140 140T448 832t-192.5-51.5t-140-140T64 448t51.5-192.5t140-140T448 64"></svg:path>`,
})
export class WhhCircleloaderemptyIcon {
  readonly viewBox = input("0 0 896 896")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCircleloaderfiveIcon],svg[whh-circleloaderfive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 1024q-104 0-197.5-39.5T86 874l45-45q-62-62-96.5-144T0 512t35.5-174T131 195t143-95.5T448 64V0q104 0 199 40.5t163.5 109t109 163.5T960 512t-40.5 199t-109 163.5t-163.5 109t-199 40.5M64 512q0 78 29.5 148T176 784l46-46q44 45 102.5 69.5T448 832q87 0 160.5-43T725 672.5T768 512t-43-160.5T608.5 235T448 192v-64q-104 0-192.5 51.5t-140 140T64 512"></svg:path>`,
})
export class WhhCircleloaderfiveIcon {
  readonly viewBox = input("0 0 960 1024")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCircleloaderfourIcon],svg[whh-circleloaderfour-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 1024v-64q-91 0-174-35.5T131 829T35.5 686T0 512t35.5-174T131 195t143-95.5T448 64V0q104 0 199 40.5t163.5 109t109 163.5T960 512t-40.5 199t-109 163.5t-163.5 109t-199 40.5M64 512q0 104 51.5 192.5t140 140T448 896v-64q87 0 160.5-43T725 672.5T768 512t-43-160.5T608.5 235T448 192v-64q-104 0-192.5 51.5t-140 140T64 512"></svg:path>`,
})
export class WhhCircleloaderfourIcon {
  readonly viewBox = input("0 0 960 1024")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCircleloaderfullIcon],svg[whh-circleloaderfull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-832q-87 0-160.5 43T235 351.5T192 512t43 160.5T351.5 789T512 832t160.5-43T789 672.5T832 512t-43-160.5T672.5 235T512 192"></svg:path>`,
})
export class WhhCircleloaderfullIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCircleloaderoneIcon],svg[whh-circleloaderone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 512q0 91-35.5 174T765 829t-143 95.5T448 960t-174-35.5T131 829T35.5 686T0 512t35.5-174T131 195t143-95.5T448 64V0q104 0 197.5 39.5T810 150l-45 45q62 62 96.5 144T896 512m-832 0q0 104 51.5 192.5t140 140T448 896t192.5-51.5t140-140T832 512q0-78-29.5-148T720 240l-46 46q-44-45-102.5-69.5T448 192v-64q-104 0-192.5 51.5t-140 140T64 512"></svg:path>`,
})
export class WhhCircleloaderoneIcon {
  readonly viewBox = input("0 0 896 960")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCircleloadersevenIcon],svg[whh-circleloaderseven-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512q0-104 39.5-197.5T150 150l45 45q62-62 144-96.5T512 64V0q104 0 199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5M240 240l46 46q-45 44-69.5 102.5T192 512q0 87 43 160.5T351.5 789T512 832t160.5-43T789 672.5T832 512t-43-160.5T672.5 235T512 192v-64q-78 0-148 29.5T240 240"></svg:path>`,
})
export class WhhCircleloadersevenIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCircleloadersixIcon],svg[whh-circleloadersix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512h64q0-91 35.5-174T195 195t143-95.5T512 64V0q104 0 199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5M128 512h64q0 87 43 160.5T351.5 789T512 832t160.5-43T789 672.5T832 512t-43-160.5T672.5 235T512 192v-64q-104 0-192.5 51.5t-140 140T128 512"></svg:path>`,
})
export class WhhCircleloadersixIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCircleloaderthreeIcon],svg[whh-circleloaderthree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m810 874l-45-45q-62 62-144 96.5T448 960t-174-35.5T131 829T35.5 686T0 512t35.5-174T131 195t143-95.5T448 64V0q104 0 199 40.5t163.5 109t109 163.5T960 512t-39.5 197.5T810 874M64 512q0 104 51.5 192.5t140 140T448 896q78 0 148-29.5T720 784l-46-46q45-44 69.5-102.5T768 512q0-87-43-160.5T608.5 235T448 192v-64q-104 0-192.5 51.5t-140 140T64 512"></svg:path>`,
})
export class WhhCircleloaderthreeIcon {
  readonly viewBox = input("0 0 960 960")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCircleloadertwoIcon],svg[whh-circleloadertwo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 512q0 91-35.5 174T765 829t-143 95.5T448 960t-174-35.5T131 829T35.5 686T0 512t35.5-174T131 195t143-95.5T448 64V0q104 0 199 40.5t163.5 109t109 163.5T960 512zm-832 0q0 104 51.5 192.5t140 140T448 896t192.5-51.5t140-140T832 512h-64q0-87-43-160.5T608.5 235T448 192v-64q-104 0-192.5 51.5t-140 140T64 512"></svg:path>`,
})
export class WhhCircleloadertwoIcon {
  readonly viewBox = input("0 0 960 960")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclemIcon],svg[whh-circlem-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m192-735q0-14-10-23.5t-22-9.5q-16 0-27 16L512 458L380 272q-12-16-28-16q-13 0-22.5 9.5T320 289v447q0 13 9.5 22.5T352 768t22.5-9.5T384 736V388l100 140q11 15 28 15q16 0 28-15l100-140v348q0 13 9.5 22.5T672 768t22.5-9.5T704 736z"></svg:path>`,
})
export class WhhCirclemIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclenIcon],svg[whh-circlen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m192-736q0-13-9.5-22.5T672 256t-22.5 9.5T640 288v349L380 272q-12-16-28-16q-11 0-21.5 9T320 289v447q0 13 9.5 22.5T352 768t22.5-9.5T384 736V387l260 365q12 16 28 16t24-9.5t8-22.5z"></svg:path>`,
})
export class WhhCirclenIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclenextIcon],svg[whh-circlenext-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m-64-704q0-26-18.5-45T384 256h-64q-27 0-45.5 19T256 320v384q0 27 18.5 45.5T320 768h64q27 0 45.5-18.5T448 704zm377 173L607 262q-13-14-31 6v488q18 20 31 7l218-232q7-7 7-18.5t-7-19.5"></svg:path>`,
})
export class WhhCirclenextIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclenextemptyIcon],svg[whh-circlenextempty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-960q-91 0-174 35.5T195 195T99.5 338T64 512t35.5 174T195 829t143 95.5T512 960t174-35.5T829 829t95.5-143T960 512t-35.5-174T829 195T686 99.5T512 64m313 468L607 763q-12 13-31-7V268q18-20 31-6l218 231q7 8 7 19.5t-7 19.5M384 768h-64q-26 0-45-18.5T256 704V320q0-26 19-45t45-19h64q27 0 45.5 19t18.5 45v384q0 27-18.5 45.5T384 768"></svg:path>`,
})
export class WhhCirclenextemptyIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclenineIcon],svg[whh-circlenine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m192-640q0-53-37.5-90.5T576 256H448q-53 0-90.5 37.5T320 384v64q0 53 37.5 90.5T448 576h128q34 0 64-17v81q0 26-18.5 45T576 704H448q-26 0-45-19t-19-45q0-13-9.5-22.5T352 608t-22.5 9.5T320 640q0 53 37.5 90.5T448 768h128q53 0 90.5-37.5T704 640zM576 512H448q-26 0-45-19t-19-45v-64q0-27 19-45.5t45-18.5h128q27 0 45.5 18.5T640 384v64q0 26-18.5 45T576 512"></svg:path>`,
})
export class WhhCirclenineIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCircleoIcon],svg[whh-circleo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m192-640q0-53-37.5-90.5T576 256H448q-53 0-90.5 37.5T320 384v256q0 53 37.5 90.5T448 768h128q53 0 90.5-37.5T704 640zM576 704H448q-27 0-45.5-18.5T384 640V384q0-26 19-45t45-19h128q26 0 45 19t19 45v256q0 27-19 45.5T576 704"></svg:path>`,
})
export class WhhCircleoIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCircleoneIcon],svg[whh-circleone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m96-320h-32V384q0-65-42.5-96.5T416 256q-13 0-22.5 9.5T384 288t9.5 22.5T416 320h1q43 0 69 18.5t26 45.5v320h-96q-13 0-22.5 9.5T384 736t9.5 22.5T416 768h192q13 0 22.5-9.5T640 736t-9.5-22.5T608 704"></svg:path>`,
})
export class WhhCircleoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclepIcon],svg[whh-circlep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m192-640q0-53-37.5-90.5T576 256H352q-13 0-22.5 9.5T320 288v448q0 13 9.5 22.5T352 768t22.5-9.5T384 736V576h192q53 0 90.5-37.5T704 448zM576 512H384V320h192q27 0 45.5 19t18.5 45v64q0 27-18.5 45.5T576 512"></svg:path>`,
})
export class WhhCirclepIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclepathIcon],svg[whh-circlepath-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-768q-50 0-94.5 13T336 307.5t-58.5 70T256 480q0 65 40 120l43-43q-7-11-13-38t-6-39q0-67 60.5-113.5T512 320q68 0 130 40.5t62 87.5q0 51-34.5 89.5T576 576q-19 0-27.5-.5t-19-3.5t-14-9.5T512 544v-96q0-13-9.5-22.5T480 416t-22.5 9.5T448 448v224q0 11-4.5 18.5t-15 10t-18 3t-22.5.5h-4q-14 0-22 8t-9 16l-1 8q0 12 3.5 19t13 9.5t16.5 3t23 .5h40q26 0 45-18.5t19-45.5v-96q0 12 21.5 22t42.5 10q92 0 142-54t50-138q0-61-38-106t-95-65.5T512 256"></svg:path>`,
})
export class WhhCirclepathIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclepauseIcon],svg[whh-circlepause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m-64-704q0-26-18.5-45T384 256h-64q-26 0-45 19t-19 45v384q0 27 19 45.5t45 18.5h64q27 0 45.5-18.5T448 704zm320 0q0-26-18.5-45T704 256h-64q-26 0-45 19t-19 45v384q0 27 19 45.5t45 18.5h64q27 0 45.5-18.5T768 704z"></svg:path>`,
})
export class WhhCirclepauseIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclepauseemptyIcon],svg[whh-circlepauseempty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-960q-91 0-174 35.5T195 195T99.5 338T64 512t35.5 174T195 829t143 95.5T512 960t174-35.5T829 829t95.5-143T960 512t-35.5-174T829 195T686 99.5T512 64m192 704h-64q-26 0-45-18.5T576 704V320q0-26 19-45t45-19h64q27 0 45.5 19t18.5 45v384q0 27-18.5 45.5T704 768m-320 0h-64q-26 0-45-18.5T256 704V320q0-26 19-45t45-19h64q27 0 45.5 19t18.5 45v384q0 27-18.5 45.5T384 768"></svg:path>`,
})
export class WhhCirclepauseemptyIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclepencilIcon],svg[whh-circlepencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 760L556 356L356 556l404 404q-116 64-248 64q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257q0 133-64 248M256 256l34 112q57-21 78-78zm153 47q-12 38-40 66t-66 40l33 107l180-180z"></svg:path>`,
})
export class WhhCirclepencilIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCircleplayIcon],svg[whh-circleplay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m248-531L351 261q-12-13-31 7v488q18 20 31 7l409-232q8-8 8-19t-8-19"></svg:path>`,
})
export class WhhCircleplayIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCircleplayemptyIcon],svg[whh-circleplayempty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-960q-91 0-174 35.5T195 195T99.5 338T64 512t35.5 174T195 829t143 95.5T512 960t174-35.5T829 829t95.5-143T960 512t-35.5-174T829 195T686 99.5T512 64M351 763q-13 13-31-7V268q19-20 31-7l409 232q8 8 8 19t-8 19z"></svg:path>`,
})
export class WhhCircleplayemptyIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclepreviousIcon],svg[whh-circleprevious-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m-64-756q-18-20-31-6L199 493q-7 8-7 19.5t7 18.5l218 232q13 13 31-7zm320 52q0-26-18.5-45T704 256h-64q-26 0-45 19t-19 45v384q0 27 19 45.5t45 18.5h64q27 0 45.5-18.5T768 704z"></svg:path>`,
})
export class WhhCirclepreviousIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclepreviousemptyIcon],svg[whh-circlepreviousempty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-960q-91 0-174 35.5T195 195T99.5 338T64 512t35.5 174T195 829t143 95.5T512 960t174-35.5T829 829t95.5-143T960 512t-35.5-174T829 195T686 99.5T512 64m192 704h-64q-27 0-45.5-18.5T576 704V320q0-26 18.5-45t45.5-19h64q26 0 45 19t19 45v384q0 27-19 45.5T704 768m-287-5L199 531q-7-7-7-18.5t7-19.5l218-231q13-14 31 6v488q-19 20-31 7"></svg:path>`,
})
export class WhhCirclepreviousemptyIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCircleqIcon],svg[whh-circleq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m192-384V384q0-53-37.5-90.5T576 256H448q-53 0-90.5 37.5T320 384v256q0 53 37.5 90.5T448 768h128q35 0 66-18l9 9q9 9 22 9t22-9t9-21.5t-9-22.5l-9-9q18-31 18-66m-140-55q-9-9-21.5-9t-21.5 9t-9 21.5t9 21.5l73 73q-10 3-18 3H448q-26 0-45-18.5T384 640V384q0-26 19-45t45-19h128q26 0 45 19t19 45v256q0 8-3 18z"></svg:path>`,
})
export class WhhCircleqIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclequoraIcon],svg[whh-circlequora-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m256-544q0-119-75-203.5T512 192t-181 84.5T256 480t75 203.5T512 768q63 0 118-33q21 14 52 23.5t54 9.5q13 0 22.5-9.5T768 736t-9.5-22.5T736 704q-25 0-44-19q76-85 76-205m-224 96q-13 0-22.5 9.5T512 608t9.5 22.5T544 640q24 0 44 19q-34 45-76 45q-53 0-90.5-65.5T384 480t37.5-158.5T512 256t90.5 65.5T640 480q0 60-18 114q-42-18-78-18"></svg:path>`,
})
export class WhhCirclequoraIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclerIcon],svg[whh-circler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m192-640q0-53-37.5-90.5T576 256H352q-13 0-22.5 9.5T320 288v448q0 13 9.5 22.5T352 768t22.5-9.5T384 736V576h192q27 0 45.5 19t18.5 45v96q0 13 9.5 22.5T672 768t22.5-9.5T704 736v-96q0-58-43-96q43-38 43-96zM576 512H384V320h192q27 0 45.5 19t18.5 45v64q0 27-18.5 45.5T576 512"></svg:path>`,
})
export class WhhCirclerIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclerecordIcon],svg[whh-circlerecord-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-768q-106 0-181 75t-75 181t75 181t181 75t181-75t75-181t-75-181t-181-75"></svg:path>`,
})
export class WhhCirclerecordIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclerecordemptyIcon],svg[whh-circlerecordempty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-960q-91 0-174 35.5T195 195T99.5 338T64 512.5t35.5 174T195 829t143 95.5T512 960t174-35.5T829 829t95.5-142.5t35.5-174T924.5 338T829 195T686 99.5T512 64m0 704q-106 0-181-75t-75-181t75-181t181-75t181 75t75 181t-75 181t-181 75"></svg:path>`,
})
export class WhhCirclerecordemptyIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclerightIcon],svg[whh-circleright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-896q-104 0-192.5 51.5t-140 140T128 512t51.5 192.5t140 140T512 896t192.5-51.5t140-140T896 512t-51.5-192.5t-140-140T512 128m175 431q-10 10-28 15L482 751q-17 17-41 17t-41-17t-17-41t17-41l158-157l-158-158q-17-17-17-41t17-41t41-17t41 17l178 178q17 4 27 14q19 19 16 48q3 28-16 47"></svg:path>`,
})
export class WhhCirclerightIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclesIcon],svg[whh-circles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m64-768H448q-53 0-90.5 37.5T320 384t37.5 90.5T448 512h128q26 0 45 19t19 45v64q0 27-19 45.5T576 704H448q-26 0-45-18.5T384 640q0-13-9.5-22.5T352 608t-22.5 9.5T320 640q0 53 37.5 90.5T448 768h128q53 0 90.5-37.5T704 640v-64q0-53-37.5-90.5T576 448H448q-26 0-45-18.5t-19-45t19-45.5t45-19h128q27 0 45.5 19t18.5 45q0 13 9.5 22.5T672 416t22.5-9.5T704 384q0-53-37.5-90.5T576 256"></svg:path>`,
})
export class WhhCirclesIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclescrewdriverIcon],svg[whh-circlescrewdriver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928 704q-51 0-73.5-22.5T832 608l-8-12q-15-15-30-17.5t-28 5t-30 24.5l-32 32l-256-256v-64l-144-64l-48 48l64 144h64l256 256l-32 32q-17 17-24.5 30.5t-5 28T597 825l11 7q52 0 74 23t22 73l40 40q-110 56-232 56q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199q0 122-56 232z"></svg:path>`,
})
export class WhhCirclescrewdriverIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCircleselectIcon],svg[whh-circleselect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m300.5-685.5Q793 319 765 319t-47 20L447 609L305 467q-19-20-47-20t-47.5 19.5T191 514t20 47l187 187q20 21 50 20q29 1 49-20l315-315q20-19 20-47t-19.5-47.5"></svg:path>`,
})
export class WhhCircleselectIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCircleselectionIcon],svg[whh-circleselection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M894 447q-15-86-67-159l92-92q88 112 105 251zM577 130V0q139 17 251 105l-92 92q-73-52-159-67m-381-25Q308 17 447 0v130q-86 15-159 67zm1 183q-52 73-67 159H0q17-139 105-251zm0 448l-92 92Q17 716 0 577h130q15 86 67 159m250 158v130q-139-17-251-105l92-92q73 52 159 67m381 25q-112 88-251 105V894q86-15 159-67zm66-342h130q-17 139-105 251l-92-92q52-73 67-159"></svg:path>`,
})
export class WhhCircleselectionIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclesevenIcon],svg[whh-circleseven-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m64-768H352q-13 0-22.5 9.5T320 288t9.5 22.5T352 320h224q27 0 45.5 19t18.5 45q4 43-16 80q-28 52-128 240q-16 22-16 32q0 12 10 22t22 10q13 0 22.5-9.5T544 736l144-272q16-30 16-80q0-53-37.5-90.5T576 256"></svg:path>`,
})
export class WhhCirclesevenIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclesixIcon],svg[whh-circlesix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m192-448q0-53-37.5-90.5T576 448H448q-34 0-64 17v-81q0-26 18.5-45t45.5-19h128q26 0 45 19t19 45q0 13 9.5 22.5T672 416t22.5-9.5T704 384q0-53-37.5-90.5T576 256H448q-53 0-90.5 37.5T320 384v256q0 53 37.5 90.5T448 768h128q53 0 90.5-37.5T704 640zM576 704H448q-27 0-45.5-18.5T384 640v-64q0-26 18.5-45t45.5-19h128q26 0 45 19t19 45v64q0 27-19 45.5T576 704"></svg:path>`,
})
export class WhhCirclesixIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclespoonIcon],svg[whh-circlespoon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M929 808L651 573q19-30 21-93q2-71-56-129q-71-71-168-90t-154 33q-53 58-33.5 155T351 617q55 55 129 55q59 0 93-20l236 277q-134 95-297 95q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199q0 163-95 296"></svg:path>`,
})
export class WhhCirclespoonIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclestopIcon],svg[whh-circlestop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m256-704q0-26-18.5-45T704 256H320q-26 0-45 19t-19 45v384q0 27 19 45.5t45 18.5h384q27 0 45.5-18.5T768 704z"></svg:path>`,
})
export class WhhCirclestopIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclestopemptyIcon],svg[whh-circlestopempty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-960q-91 0-174 35.5T195 195T99.5 338T64 512t35.5 174T195 829t143 95.5T512 960t174-35.5T829 829t95.5-143T960 512t-35.5-174T829 195T686 99.5T512 64m192 704H320q-26 0-45-18.5T256 704V320q0-26 19-45t45-19h384q27 0 45.5 19t18.5 45v384q0 27-18.5 45.5T704 768"></svg:path>`,
})
export class WhhCirclestopemptyIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCircletIcon],svg[whh-circlet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m96-768H352q-13 0-22.5 9.5T320 288t9.5 22.5T352 320h96v416q0 13 9.5 22.5T480 768t22.5-9.5T512 736V320h96q13 0 22.5-9.5T640 288t-9.5-22.5T608 256"></svg:path>`,
})
export class WhhCircletIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclethreeIcon],svg[whh-circlethree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m192-448q0-57-44-96q44-38 44-96q0-53-37.5-90.5T576 256H448q-53 0-90.5 37.5T320 384q0 13 9.5 22.5T352 416t22.5-9.5T384 384q0-26 18.5-45t45.5-19h128q26 0 45 19t19 45.5t-19 45t-45 18.5h-32q-13 0-22.5 9.5T512 480t9.5 22.5T544 512h32q26 0 45 19t19 45v64q0 27-19 45.5T576 704H448q-27 0-45.5-18.5T384 640q0-13-9.5-22.5T352 608t-22.5 9.5T320 640q0 53 37.5 90.5T448 768h128q53 0 90.5-37.5T704 640z"></svg:path>`,
})
export class WhhCirclethreeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCircletwitterIcon],svg[whh-circletwitter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m301-768q-6 3-18 11l-19.5 13l-18.5 10l-21 7q-37-41-91-41q-117 0-117 98v59q-161-8-247-118q-25 26-25 57q0 66 49 100q-6 0-17 1t-17.5 0t-14.5-5q0 46 24.5 76.5T348 564q-10 12-28 12q-16 0-28-9q0 39 37.5 60.5T414 650q-18 27-52.5 40.5T288 704q-14 0-38.5-7t-25.5-7q16 32 65.5 55T415 768q67 0 125-23.5t99-62.5t70.5-89t44-103.5T768 384q0-2 12-8.5t28-17.5t24-23q-54 0-72 2q35-21 53-81"></svg:path>`,
})
export class WhhCircletwitterIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCircletwoIcon],svg[whh-circletwo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m-64-448h128q53 0 90.5-37.5T704 448v-64q0-53-37.5-90.5T576 256H448q-53 0-90.5 37.5T320 384q0 13 9.5 22.5T352 416t22.5-9.5T384 384q0-26 18.5-45t45.5-19h128q27 0 45.5 19t18.5 45v64q0 27-18.5 45.5T576 512H448q-53 0-90.5 37.5T320 640v96q0 13 9.5 22.5T352 768h320q13 0 22.5-9.5T704 736t-9.5-22.5T672 704H400q-7 0-11.5-4.5T384 688v-48q0-26 18.5-45t45.5-19"></svg:path>`,
})
export class WhhCircletwoIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCircleuIcon],svg[whh-circleu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m192-736q0-13-9-22.5t-22.5-9.5t-23 9.5T640 288v352q0 27-19 45.5T576 704H448q-26 0-45-19t-19-45V288q0-13-9-22.5t-22.5-9.5t-23 9.5T320 288v352q0 53 37.5 90.5T448 768h128q53 0 90.5-37.5T704 640z"></svg:path>`,
})
export class WhhCircleuIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCircleupIcon],svg[whh-circleup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-896q-104 0-192.5 51.5t-140 140T128 512t51.5 192.5t140 140T512 896t192.5-51.5t140-140T896 512t-51.5-192.5t-140-140T512 128m158 496L512 467L355 624q-17 17-41 17t-41-17t-17-41t17-41l177-177q5-18 15-28q19-19 47-16q29-3 48 16q10 10 14 27l178 178q17 17 17 41t-17 41t-41 17t-41-17"></svg:path>`,
})
export class WhhCircleupIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCircleuploadIcon],svg[whh-circleupload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5M352 832h320q13 0 22.5-9.5T704 800t-9.5-22.5T672 768H352q-13 0-22.5 9.5T320 800t9.5 22.5T352 832m471-384L544 206q-13-14-31.5-14T481 206L201 448q-14 14-6 39t31 25h158v128q0 27 19 45.5t45 18.5h129q26 0 45-18.5t19-45.5V512h157q23 0 31-25t-6-39"></svg:path>`,
})
export class WhhCircleuploadIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclevIcon],svg[whh-circlev-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m192-736q0-13-9-22.5t-22.5-9.5t-23 9.5T640 288v277L512 693L384 565V288q0-13-9-22.5t-22.5-9.5t-23 9.5T320 288v288q0 12 9 20l155 155q14 17 28 17q11 0 28-17l155-155q9-8 9-20z"></svg:path>`,
})
export class WhhCirclevIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclevimeoIcon],svg[whh-circlevimeo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m144-768q-46 0-78.5 43.5T544 398q16-14 36-14q21 0 32.5 10.5T624 432q0 25-17.5 63.5T566 563t-38 29q-7 0-14-16t-14-47t-12-59t-12.5-70.5T464 336q-15-80-64-80q-72 0-144 128l16 32q11-13 26-22.5t22-9.5t12.5 4.5t8.5 13t5 15.5t3.5 17t2.5 14q4 18 12 66t16.5 86t22.5 79.5t37.5 65T496 768q39 0 104.5-68.5T717 538t51-154q0-128-112-128"></svg:path>`,
})
export class WhhCirclevimeoIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclevineIcon],svg[whh-circlevine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m256-512q-25 0-49.5-4t-51-15t-46-28.5T589 418t-13-66q0-29 21-62.5t43-33.5q23 0 43.5 19.5T704 320q0 86-14 128h63q15-46 15-136q0-51-34.5-85.5T640 192q-45 0-86.5 41T512 332q0 50 14 94t30.5 69.5T595 542t31 26t14 8q0 17-28 56.5T552.5 704T512 736q-4 0-24-18t-48.5-55.5t-55-85T339 461t-19-141h-64q0 101 24.5 190.5t59.5 146t73 98t64.5 59.5t34.5 18q7 0 36.5-22.5T613 753t63-83.5t28-93.5q41 3 64 0z"></svg:path>`,
})
export class WhhCirclevineIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclewIcon],svg[whh-circlew-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m192-736q0-13-9-22.5t-22.5-9.5t-23 9.5T640 288v352q0 27-18.5 45.5T576 704h-48q-7 0-11.5-4.5T512 688V288q0-13-9.5-22.5T480 256t-22.5 9.5T448 288v400q0 7-4.5 11.5T432 704h-48q-26 0-45-19t-19-45V288q0-13-9-22.5t-22.5-9.5t-23 9.5T256 288v352q0 53 37.5 90.5T384 768h192q53 0 90.5-37.5T704 640z"></svg:path>`,
})
export class WhhCirclewIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclexIcon],svg[whh-circlex-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m181-713q11-11 11-23q0-13-9.5-22.5T672 256q-7 0-15.5 5.5T644 272L512 457L379 272q-11-16-27-16q-15 0-23.5 10.5T320 288q0 13 9 23l144 201l-144 201q-9 10-9 23q0 11 8.5 21.5T352 768q16 0 27-16l133-185l132 185q4 5 12.5 10.5T672 768q13 0 22.5-9.5T704 736q0-12-11-24L551 512z"></svg:path>`,
})
export class WhhCirclexIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCircleyahooIcon],svg[whh-circleyahoo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512q0-104 40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199q0 139-68.5 257T769 955.5T512 1024m320-688q0-7-4.5-11.5T816 320H592q-7 0-11.5 4.5T576 336v32q0 7 4.5 11.5T592 384h56L520 525L401 320h95q7 0 11.5-4.5T512 304v-32q0-7-4.5-11.5T496 256H272q-7 0-11.5 4.5T256 272v32q0 7 4.5 11.5T272 320h45v1l131 230v153h-48q-7 0-11.5 4.5T384 720v32q0 7 4.5 11.5T400 768h224q7 0 11.5-4.5T640 752v-32q0-7-4.5-11.5T624 704h-48V548l149-164h91q7 0 11.5-4.5T832 368z"></svg:path>`,
})
export class WhhCircleyahooIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclezIcon],svg[whh-circlez-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m192-736q0-13-9.5-22.5T672 256t-22.5 9.5T640 288v160q0 27-19 45.5T576 512H448q-26 0-45-18.5T384 448V288q0-13-9.5-22.5T352 256t-22.5 9.5T320 288v160q0 53 37.5 90.5T448 576h128q34 0 64-17v81q0 27-19 45.5T576 704H416q-13 0-22.5 9.5T384 736t9.5 22.5T416 768h160q53 0 90.5-37.5T704 640z"></svg:path>`,
})
export class WhhCirclezIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclezeroIcon],svg[whh-circlezero-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m192-640q0-53-37.5-90.5T576 256H448q-53 0-90.5 37.5T320 384v256q0 53 37.5 90.5T448 768h128q53 0 90.5-37.5T704 640zm-256-64h128q27 0 45.5 19t18.5 45v234L428 324q11-4 20-4m128 384H448q-26 0-45-18.5T384 640V384q0-2 1-8l228 316q-17 12-37 12"></svg:path>`,
})
export class WhhCirclezeroIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCirclezerplyIcon],svg[whh-circlezerply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512q0-104 40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199q0 139-68.5 257T769 955.5T512 1024m171-324q-29 0-66-23t-83.5-55t-85.5-46q277-264 277-340q0-11-.5-16.5t-4.5-13t-13-11t-24-3.5q-13 0-34 10t-43 22t-64.5 22t-93.5 10q-19 0-35-16t-22-32l-7-16q-2 1-4.5 3t-10 9.5t-13 16.5t-10.5 25t-5 34q0 32 20 52t55 20t85-9.5t75-22.5q-31 34-93.5 90.5t-108 97.5t-82 89t-36.5 81q0 15 17 18.5t68 3.5q35 0 67 13.5t58 33t53 39t63.5 33T661 832q22 0 39.5-10t28.5-24.5t19-35t11.5-37t6-35T768 666v-10q-3 5-9 12.5T731 688t-48 12"></svg:path>`,
})
export class WhhCirclezerplyIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCityIcon],svg[whh-city-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 1024H32q-13 0-22.5-9.5T0 992V288q0-13 9.5-22.5T32 256h224V32q0-13 9.5-22.5T288 0h192q13 0 22.5 9.5T512 32v288h64v-96q0-13 9.5-22.5T608 192h32q0-31 18-55.5t47-34.5q2-44 11-73t20-29t20 29t11 73q29 10 47 34.5t18 55.5h32q13 0 22.5 9.5T896 224v288h96q13 0 22.5 9.5t9.5 22.5v448q0 13-9.5 22.5T992 1024M128 320H64v64h64zm0 128H64v64h64zm0 256H64v64h64zm128-384h-64v64h64zm0 256h-64v64h64zm64 320h64v-64h-64zm0-128h64v-64h-64zm64-704h-64v64h64zm64 128h-64v64h64zm0 128h-64v64h64zm0 256h-64v64h64zm128-192h-64v64h64zm0 128h-64v64h64zm0 256h-64v64h64zm128-448h-64v64h64zm0 128h-64v64h64zm0 320h-64v64h64zm128-384h-64v64h64zm0 256h-64v64h64zm0 192h-64v64h64zm128-256h-64v64h64zm0 128h-64v64h64zm0 128h-64v64h64z"></svg:path>`,
})
export class WhhCityIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhClearformattingIcon],svg[whh-clearformatting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1015 754L905 864l109 109q9 9 9 21.5t-8.5 21t-21 8.5t-21.5-9L863 906l-109 109q-9 9-21.5 9t-21-8.5t-8.5-21t9-21.5l109-109l-110-110q-9-9-9-21.5t9-21t21-8.5t21 9l110 110l110-110q9-9 21.5-9t21 8.5t8.5 21t-9 21.5M894 64l-21 128q-4 26-25.5 45T800 256t-41-19t-11-45q4-13 2.5-25t-9.5-20.5t-34-13.5t-71-5q-26 0-47.5 18.5T563 192l-74 384q-4 28 5.5 46t32.5 18q24 0 38 18.5t10 45t-24 45.5t-44 19H247q-28 0-44-19t-11.5-45.5t27.5-45t50-18.5q29 0 60-19.5t36-44.5l73-384q5-27-10.5-45.5T387 128q-37 0-62 3.5t-38 8t-20.5 15t-9.5 17t-4 20.5q-4 26-25.5 45T180 256t-41-19t-11-45l22-128q4-27 25.5-45.5T222 0h620q26 0 41 18.5T894 64M703 864.5q0 13.5-9.5 22.5t-22.5 9H32q-13 0-22.5-9T0 864.5T9.5 842t22.5-9h639q13 0 22.5 9t9.5 22.5"></svg:path>`,
})
export class WhhClearformattingIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhClipboardIcon],svg[whh-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832.488 1024h-768q-26 0-45-19t-19-45V128q0-27 18.5-46t45.5-19h128v128q0 27 19 45.5t45 18.5h384q27 0 45.5-18.5t18.5-45.5V63h128q27 0 45.5 19t18.5 46v832q0 26-18.5 45t-45.5 19m-256-832h-256q-26 0-45-19t-19-45q0-27 19-45.5t45-18.5q0-27 19-45.5t45-18.5h128q27 0 45.5 18.5t18.5 45.5q27 0 45.5 18.5t18.5 45.5q0 26-18.5 45t-45.5 19"></svg:path>`,
})
export class WhhClipboardIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhClipboardaltIcon],svg[whh-clipboardalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832.356 1024h-768q-26 0-45-19t-19-45V128q0-27 19-45.5t45-18.5h128v64h-128v832h768V128h-128V64h128q27 0 45.5 18.5t18.5 45.5v832q0 26-18.5 45t-45.5 19m-544-576q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h320q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5zm384 320q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-448q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5zm-544-160q0-13 9.5-22.5t22.5-9.5h576q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-576q-13 0-22.5-9.5t-9.5-22.5m448-416h-256q-26 0-45-19t-19-45.5t19-45t45-18.5q0-27 19-45.5t45-18.5h128q27 0 45.5 18.5t18.5 45.5q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19"></svg:path>`,
})
export class WhhClipboardaltIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhClockIcon],svg[whh-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1025q-104 0-199-40.5t-163.5-109T40.5 712T0 513t40.5-199t109-163.5T313 41T512 0t199 41t163.5 109.5t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-896q-104 0-192.5 51t-140 139.5t-51.5 193t51.5 193t140 140T512 897t192.5-51.5t140-140t51.5-193t-51.5-193t-140-139.5T512 129m192 224L573 530q-5 20-22 33.5T512 577q-21 0-38-13t-23-32L256 289v-32h32l225 181l159-117h32z"></svg:path>`,
})
export class WhhClockIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhClockaltIcon],svg[whh-clockalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m256-576H576V192q0-27-19-45.5T511.5 128t-45 18.5T448 192v320q0 27 18.5 45.5T512 576h256q26 0 45-19t19-45.5t-18.5-45T768 448"></svg:path>`,
})
export class WhhClockaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhClosetabIcon],svg[whh-closetab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.214 1024h-768q-53 0-90.5-37.5T.214 896V256l48-156q14-43 58.5-71.5t95.5-28.5h364q51 0 95.5 28.5t58.5 71.5l48 156h128q53 0 90.5 37.5t37.5 90.5v512q0 53-37.5 90.5t-90.5 37.5m0-608q0-13-9.5-22.5t-22.5-9.5h-704q-13 0-22.5 9.5t-9.5 22.5v448q0 13 9.5 22.5t22.5 9.5h704q13 0 22.5-9.5t9.5-22.5zm-256 288h-256q-27 0-45.5-18.5t-18.5-45.5t18.5-45.5t45.5-18.5h256q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19"></svg:path>`,
})
export class WhhClosetabIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhClosewindowIcon],svg[whh-closewindow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-640-864q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm192 0q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm448 0q0-13-9.5-22.5t-22.5-9.5h-320q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h320q13 0 22.5-9.5t9.5-22.5zm0 192q0-13-9.5-22.5t-22.5-9.5h-704q-13 0-22.5 9.5t-9.5 22.5v512q0 13 9.5 22.5t22.5 9.5h704q13 0 22.5-9.5t9.5-22.5zm-256 352h-256q-27 0-45.5-18.5t-18.5-45.5t18.5-45.5t45.5-18.5h256q26 0 45 18.5t19 45t-19 45.5t-45 19"></svg:path>`,
})
export class WhhClosewindowIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCloudIcon],svg[whh-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 768H224q-93 0-158.5-65.5T0 544q0-57 27-106t73-80q34 69 96.5 116.5T336 537q-66-38-105-104t-39-145q0-119 84.5-203.5T480 0q88 0 159.5 48T744 174q-68 22-118 73.5T556 369q35-52 91-82.5T768 256q106 0 181 75t75 181t-75 181t-181 75"></svg:path>`,
})
export class WhhCloudIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCloudaltIcon],svg[whh-cloudalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 768H224q-93 0-158.5-65.5T0 544q0-84 55-147t137-74v-3q0-87 43-160.5T351.5 43T512 0q100 0 180.5 56T809 202q94 24 154.5 101.5T1024 480q0 111-74 193.5T768 768"></svg:path>`,
})
export class WhhCloudaltIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCloudaltdownloadIcon],svg[whh-cloudaltdownload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 768H224q-93 0-158.5-65.5T0 544q0-84 55-147t137-74v-3q0-87 43-160.5T351.5 43T512 0q100 0 180.5 56T809 202q94 24 154.5 101.5T1024 480q0 111-74 193.5T768 768m-76-320H576V288q0-13-9.5-22.5T544 256h-64q-13 0-22.5 9.5T448 288v160H332q-8 0-11 14.5t5 23.5l167 145q8 9 19 9t19-9l167-145q8-9 5-23.5T692 448"></svg:path>`,
})
export class WhhCloudaltdownloadIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCloudaltprivateIcon],svg[whh-cloudaltprivate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 766v2H224q-93 0-158.5-65.5T0 544q0-84 55-147t137-74v-3q0-87 43-160.5T351.5 43T512 0q100 0 180.5 56T809 202q94 24 154.5 101.5T1024 480q0 111-73.5 192.5T768 766M640 384q0-53-37.5-90.5T512 256t-90.5 37.5T384 384v224q0 13 9.5 22.5T416 640h192q13 0 22.5-9.5T640 608zm-192 64v-64q0-27 19-45.5t45.5-18.5t45 18.5T576 384v64z"></svg:path>`,
})
export class WhhCloudaltprivateIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCloudaltsyncIcon],svg[whh-cloudaltsync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 768H224q-93 0-158.5-65.5T0 544q0-84 55-147t137-74v-3q0-87 43-160.5T351.5 43T512 0q100 0 180.5 56T809 202q94 24 154.5 101.5T1024 480q0 111-74 193.5T768 768M320 576l29-29q26 42 69 67.5t94 25.5q80 0 136-56l-45-46q-38 38-91 38q-38 0-69.5-21T396 500l52-52H320zm384-256l-29 29q-26-43-69-68t-94-25q-79 0-136 56l45 45q38-37 91-37q38 0 69.5 21t46.5 55l-52 52h128z"></svg:path>`,
})
export class WhhCloudaltsyncIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCloudaltuploadIcon],svg[whh-cloudaltupload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 768H224q-93 0-158.5-65.5T0 544q0-84 55-147t137-74v-3q0-87 43-160.5T351.5 43T512 0q100 0 180.5 56T809 202q94 24 154.5 101.5T1024 480q0 111-74 193.5T768 768m-70-358L531 265q-8-9-19-9t-19 9L326 410q-8 9-5 23.5t11 14.5h116v160q0 13 9.5 22.5T480 640h64q13 0 22.5-9.5T576 608V448h116q8 0 11-14.5t-5-23.5"></svg:path>`,
})
export class WhhCloudaltuploadIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhClouddownloadIcon],svg[whh-clouddownload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m844 757l-249 258q-8 9-51 9t-51-9L255 768h-31q-93 0-158.5-65.5T0 544q0-57 27-106t73-80q34 70 96.5 117.5T336 538q-66-39-105-105t-39-145q0-119 84.5-203.5T480 0q88 0 159.5 48T744 174q-68 22-118 74t-70 121q35-52 91-82t121-30q106 0 181 75t75 181q0 85-50.5 152T844 757m-88-52H640V576q0-26-18.5-45T576 512h-64q-27 0-45.5 19T448 576v129H332q-8 0-11 14t5 23l199 209q8 9 19 9t19-9l199-209q8-9 5-23t-11-14"></svg:path>`,
})
export class WhhClouddownloadIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhClouderrorIcon],svg[whh-clouderror-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 768q0 106-75 181t-181 75t-181-75t-75-181h-32q-93 0-158.5-65.5T0 544q0-57 27-106t73-80q34 69 96.5 116.5T336 537q-66-38-105-104t-39-145q0-119 84.5-203.5T480 0q88 0 159.5 48T744 174q-68 22-118 73.5T556 369q35-52 91-82.5T768 256q106 0 181 75t75 181t-75 181t-181 75m-136-80q8-8 8-20t-8-20t-20-8t-20 8l-80 80l-80-80q-8-8-20-8t-20 8t-8 20t8 20l80 80l-80 80q-8 8-8 20t8 20t20 8t20-8l80-80l80 80q8 8 20 8t20-8t8-20t-8-20l-80-80z"></svg:path>`,
})
export class WhhClouderrorIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCloudhostingIcon],svg[whh-cloudhosting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 1024H128q-53 0-90.5-37.5T0 896t37.5-90.5T128 768h768q53 0 90.5 37.5T1024 896t-37.5 90.5T896 1024M191.5 832q-26.5 0-45 18.5t-18.5 45t18.5 45.5t45 19t45.5-18.5t19-45.5t-19-45.5t-45.5-18.5m640.5 0H448q-27 0-45.5 18.5t-18.5 45t18.5 45.5t45.5 19h384q26 0 45-18.5t19-45.5t-19-45.5t-45-18.5m-96-128H256q-80 0-136-56T64 512q0-57 30.5-103.5T175 338q34 54 87.5 90T380 475q-57-34-90.5-92T256 256q0-106 75-181T512 0q81 0 146 45.5T751 164q-103 18-171 98t-68 186q0 11 1 22q4-89 68.5-151.5T736 256q93 0 158.5 65.5T960 480t-65.5 158.5T736 704"></svg:path>`,
})
export class WhhCloudhostingIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCloudsyncIcon],svg[whh-cloudsync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m875 744l21 80q0 20-11 46t-24 26h-64q-33 58-92 93t-129 35q-80 0-144.5-44.5T338 863q-12-2-19-10l-52-52q-14-13-10-33h-33q-93 0-158.5-65.5T0 544q0-57 27-106t73-80q34 69 96.5 116.5T336 537q-66-38-105-104t-39-145q0-119 84.5-203.5T480 0q88 0 159.5 48T744 174q-68 22-118 74t-70 121q35-52 91-82.5T768 256q106 0 181 75t75 181q0 76-41 138.5T875 744M576 576q-62 0-111 36t-69 93h-65q-11 12-11 29t11 29l53 69q6 6 14 9h1q12 5 26 2.5t23-11.5l53-69q11-12 11-29t-11-29h-36q17-30 46.5-47.5T576 640q10 0 22 2l41-54q-33-12-63-12m245 198l-53-70q-6-6-15-9q-12-5-26.5-2.5T704 704l-53 70q-11 12-11 29t11 29h35q-17 29-46 46.5T576 896q-10 0-22-2l-41 55q32 11 63 11q62 0 111-35.5t69-92.5h65q11-12 11-29t-11-29"></svg:path>`,
})
export class WhhCloudsyncIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhClouduploadIcon],svg[whh-cloudupload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 768h-64v64q0 53-37.5 90.5T576 960h-64q-53 0-90.5-37.5T384 832v-64H224q-93 0-158.5-65.5T0 544q0-57 27-106t73-80q34 69 96.5 116.5T336 537q-66-38-105-104t-39-145q0-119 84.5-203.5T480 0q88 0 159.5 48T744 174q-68 22-118 74t-70 121q35-52 91-82.5T768 256q106 0 181 75t75 181t-75 181t-181 75m-6-102L563 457q-8-9-19-9t-19 9L326 666q-8 9-5 23.5t11 14.5h116v128q0 27 18.5 45.5T512 896h64q27 0 45.5-18.5T640 832V704h116q8 0 11-14.5t-5-23.5"></svg:path>`,
})
export class WhhClouduploadIcon {
  readonly viewBox = input("0 0 1024 960")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCloverIcon],svg[whh-clover-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M791 485q149 54 202 105q14 14 22.5 38t8.5 55t-17 67.5t-51 70.5q-45 44-100.5 62.5t-96 12.5t-53.5-28q-25-42-72-114t-84-131q10 92 18 203t8 135q0 27-18.5 45.5t-45 18.5t-45.5-18.5t-19-45.5q0-25 8-140.5T475 613q-38 58-86 128.5T317 852q-11 16-36.5 28T222 896t-73.5-9.5t-75-45.5t-53-73t-20-77t6-65T28 584q31-29 99.5-60.5T279 466q-43-15-96.5-30t-91-27.5T22 377Q6 367 2.5 336T8 266t33-84t58-80.5t77.5-60t81-34t68-6.5T368 18q83 102 142 291q46-132 136-286q9-17 44-20t79 6.5t93.5 34T947 102q34 34 53.5 77t22 80t-4.5 66.5t-21 43.5q-57 56-206 116"></svg:path>`,
})
export class WhhCloverIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCloveraltIcon],svg[whh-cloveralt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 512q53 0 90.5 37.5T1024 640t-37.5 90.5T896 768q-46 0-83-10t-45-22L576 544q-19-19-19-32t19-32l192-192q10-11 47-21.5t81-10.5q53 0 90.5 37.5T1024 384t-37.5 90.5T896 512m-352-64q-19 19-32 19t-32-19L288 256q-11-10-21.5-47T256 128q0-53 37.5-90.5T384 0t90.5 37.5T512 128q0-53 37.5-90.5T640 0t90.5 37.5T768 128q0 46-10 83t-22 45zm-96 96L256 736q-8 12-45 22t-83 10q-53 0-90.5-37.5T0 640t37.5-90.5T128 512q-53 0-90.5-37.5T0 384t37.5-90.5T128 256q44 0 81 10.5t47 21.5l192 192q19 19 19 32t-19 32m32 32q19-19 32-19t32 19l192 192q12 8 22 45t10 83q0 53-37.5 90.5T640 1024t-90.5-37.5T512 896q0 53-37.5 90.5T384 1024t-90.5-37.5T256 896q0-44 10.5-81t21.5-47z"></svg:path>`,
})
export class WhhCloveraltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhClubsIcon],svg[whh-clubs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 896q-112 0-188-83q7 94 23.5 152.5T640 1024H384q20 0 36.5-58.5T444 813q-76 83-188 83q-106 0-181-75T0 640t75-181t181-75q14 0 37 3q-37-61-37-131q0-106 75-181T512 0t181 75t75 181q0 70-37 131q23-3 37-3q106 0 181 75t75 181t-75 181t-181 75"></svg:path>`,
})
export class WhhClubsIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCmdIcon],svg[whh-cmd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M800.407 448h-96v128h96q93 0 158.5 65.5t65.5 158.5t-65.5 158.5t-158.5 65.5t-158.5-65.5t-65.5-158.5v-96h-128v96q0 93-65.5 158.5t-158.5 65.5t-158.5-65.5T.407 800t65.5-158.5t158.5-65.5h96V448h-96q-93 0-158.5-65.5T.407 224t65.5-158.5T224.407 0t158.5 65.5t65.5 158.5v96h128v-96q0-93 65.5-158.5T800.407 0t158.5 65.5t65.5 158.5t-65.5 158.5t-158.5 65.5m-96 352q0 40 28 68t68 28t68-28t28-68t-28-68t-68-28h-64q-13 0-22.5 9.5t-9.5 22.5zm-384-576q0-40-28-68t-68-28t-68 28t-28 68t28 68t68 28h64q13 0 22.5-9.5t9.5-22.5zm0 512q0-13-9.5-22.5t-22.5-9.5h-64q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68zm256-288h-128v128h128zm224-320q-40 0-68 28t-28 68v64q0 13 9.5 22.5t22.5 9.5h64q40 0 68-28t28-68t-28-68t-68-28"></svg:path>`,
})
export class WhhCmdIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCmsIcon],svg[whh-cms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.826 768V640q0-14-9.5-23t-22.5-9h-94q-9-17-20-33l46-80q6-11 3-24t-15-20l-164-96q-12-6-24.5-2.5t-19.5 14.5l-46 82q-2 0-8-.5t-9.5-.5t-10 .5t-8.5.5l-46-82q-7-11-19.5-14.5t-24.5 2.5l-164 96q-12 7-15 20t3 24l46 80q-11 16-19 33h-95q-13 0-22.5 9t-9.5 23v128q-53 0-90.5-37.5T.826 640V256q0-27 18.5-45.5t45.5-18.5h480l46-85q7-18 28-30.5t44-12.5h240q24 0 45 12.5t28 30.5l49 85v448q0 53-37.5 90.5t-90.5 37.5m-850-725q7-18 28-30.5t44-12.5h240q24 0 45 12.5t29 30.5l48 85h-480zm178 629h108q12-35 38-64l-46-83q-7-11-3.5-23.5t14.5-19.5l52-31q11-6 23-2.5t18 14.5l48 84q20-3 36-3q17 0 36 3l48-84q6-11 18-14.5t23 2.5l53 31q10 7 13.5 19.5t-2.5 23.5l-47 83q26 29 38 64h108q13 0 22.5 9t9.5 23v64q0 13-9.5 22.5t-22.5 9.5h-108q-12 34-38 63l47 83q6 12 2.5 24t-13.5 19l-53 31q-11 6-23 3t-18-15l-48-84q-19 4-35.5 4t-36.5-4l-48 84q-6 12-18 15t-23-3l-52-31q-11-7-14.5-19t3.5-24l46-83q-26-29-38-63h-108q-13 0-22.5-9.5t-9.5-22.5v-64q0-14 9.5-23t22.5-9m288.5 128q26.5 0 45-19t18.5-45.5t-18.5-45t-45-18.5t-45.5 18.5t-19 45t19 45.5t45.5 19"></svg:path>`,
})
export class WhhCmsIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCmsmadesimpleIcon],svg[whh-cmsmadesimple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m128-800q45 0 75 6t53 26q-6-59-51-93.5T608 128q-56 0-99.5 35T453 251q-45-59-110-59q-62 0-106.5 56.5T192 384q0 31 9 64q14-49 45-82.5t72-42.5q-62 56-62 125v64q26-2 51.5-17.5t42-33.5t39-43.5T425 379q23 83 23 165v64q0 27 19 45.5t45.5 18.5t45-18.5T576 608v-61q0-94-19-160q113 15 139 104q33-18 52.5-46t19.5-61q0-53-47-90.5T608 256q-23 0-48 6q24-38 80-38m0 352v32q0 53-37.5 90.5T512 736q-52 0-89.5-37T384 610q-84 25-138 59.5T192 736q0 52 69.5 74T480 832q97 0 193-17t159.5-47t63.5-64q0-23-4.5-39t-20-33.5t-42.5-28t-74.5-18T640 576"></svg:path>`,
})
export class WhhCmsmadesimpleIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCocktailIcon],svg[whh-cocktail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M766.5 99q-4.5 16-20 24t-32.5 4L567 84l-28 108h5q13 0 22.5 9.5T576 224v736q0 27-19 45.5t-45 18.5H256q-27 0-45.5-19T192 960V384q-80 0-136-56T0 192T56 56T192 0t136 56t56 136h73l42-160q4-12 11-18.5t18-9t17-3t21-.5l170 50q18 4 26.5 18t4 30M256 302q29-17 46-46h-46zM192 64q-53 0-90.5 37.5T64 192t37.5 90.5T192 320v-96q0-13 9.5-22.5T224 192h96q0-53-37.5-90.5T192 64m180 192q-14 41-44.5 71.5T256 372v76h133l51-192zm140 38l-41 154h41z"></svg:path>`,
})
export class WhhCocktailIcon {
  readonly viewBox = input("0 0 769 1024")
  readonly width = input("0.76em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCodeIcon],svg[whh-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1006 428L744 751q-18 18-43.5 18T657 751t-18-43t18-43l227-280l-227-280q-18-18-18-43.5T657 18t43.5-18T744 18l262 323q18 18 18 43.5t-18 43.5M367 751q-18 18-43.5 18T280 751L18 428Q0 410 0 384.5T18 341L280 18q18-18 43.5-18T367 18t18 43.5t-18 43.5L140 385l227 280q18 18 18 43t-18 43"></svg:path>`,
})
export class WhhCodeIcon {
  readonly viewBox = input("0 0 1024 769")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCodeigniterIcon],svg[whh-codeigniter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 1024q22-15 36-36.5t19.5-48.5t7-46t1.5-49q0-38-20.5-77.5t-52-70t-62-52.5t-57.5-36q-54-27-91-68.5T384 448q-17 0-40.5 29.5T320 544q0 18 19.5 39t42.5 38t42 41t19 48q0 49-23 85.5T352 832t-70.5-38t-25.5-90q-18 9-31 23.5t-19.5 28T196 791t-3.5 35t-.5 38q0 114 64 160q-65-12-112.5-36t-75-52.5t-43-69T5 789t-5-85q0-90 93.5-231.5T288 256q5-5 28-22.5t42.5-36T400 151t35-67t13-84q13 0 33.5 12t42 31.5t37 51T576 160q0 32-10 61t-22 47t-22 40.5t-10 43.5q0 40 28 68t68 28q35 0 61.5-17t34.5-47q88 64 140 151t52 169q0 46-8 90t-27 86.5t-47.5 73.5t-73 50.5T640 1024"></svg:path>`,
})
export class WhhCodeigniterIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCoffeeIcon],svg[whh-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M678 832H346q-47-33-89-76q-34 12-65 12q-80 0-136-56.5T0 576q0-63 37-112.5t95-69.5q1-6 1-10h758q5 35 5 128q0 45-21 94t-55 91t-69.5 75.5T678 832M128 512q0-15 1-47q-30 17-47.5 46.5T64 576q0 53 37.5 90.5T192 704q4 0 16-2q-80-101-80-190m448-320q0 23 9 55q39 28 51 73h-64q-2-14-5-24q-55-38-55-104q0-53 37.5-90.5T640 64q15 0 32 4q-42 11-69 45t-27 79m-192-64q0 23 9 55q55 39 55 105q0 14-5 32h-63q4-18 4-32q0-24-9-56q-55-38-55-104q0-53 37.5-90.5T448 0q15 0 32 4q-42 11-69 45t-27 79m384 896H256q-55 0-116-21.5t-100.5-52T0 896h1024q0 24-39.5 54.5t-100.5 52t-116 21.5"></svg:path>`,
})
export class WhhCoffeeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCoffeealtIcon],svg[whh-coffeealt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 256L704 960q-4 24-21.5 44t-42.5 20H256q-25 0-42.5-20T192 960L64 256q-27 0-45.5-19T0 191.5t18.5-45T64 128V64q0-27 18.5-45.5T128 0h640q26 0 45 18.5T832 64v64q26 0 45 18.5t19 45t-19 45.5t-45 19"></svg:path>`,
})
export class WhhCoffeealtIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCoffeebeanIcon],svg[whh-coffeebean-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928 909q-9-45-111-171T564.5 461.5T288 209T117 98q84-78 209.5-94T587 38.5t242.5 158t158 242.5t34.5 260.5T928 909M461.5 564.5Q612 715 738 817t171 111q-84 78-209.5 94T439 987.5t-242.5-158T38.5 587T4 326.5T98 117q9 45 111 171t252.5 276.5"></svg:path>`,
})
export class WhhCoffeebeanIcon {
  readonly viewBox = input("0 0 1026 1026")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCoffeecupaltIcon],svg[whh-coffeecupalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 256h-6l-26 320H573q-11-55-55-91.5T416 448t-102 36.5t-55 91.5H96L70 256h-6q-27 0-45.5-18.5T0 192.5T18.5 147T64 128V64q0-27 18.5-45.5T128 0h576q26 0 45 18.5T768 64v64q26 0 45 19t19 45.5t-19 45t-45 18.5M259 640q11 55 55 91.5T416 768t102-36.5t55-91.5h158l-27 320q-4 24-21.5 44t-42.5 20H192q-25 0-42.5-20T128 960l-27-320z"></svg:path>`,
})
export class WhhCoffeecupaltIcon {
  readonly viewBox = input("0 0 832 1024")
  readonly width = input("0.82em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCogIcon],svg[whh-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M891 451q5 31 5 61t-5 61l129 124q5 5 3.5 15.5T1015 734l-69 107q-7 11-17 17.5t-16 5.5l-165-49q-46 35-98 55l-39 138q-2 6-13 11t-25 5H436q-14 0-24.5-5t-12.5-11l-36-142q-44-19-87-52l-164 50q-7 1-17-5.5T78 841L9 734q-7-11-8.5-21.5T4 697l129-124q-5-31-5-61t5-61L4 327q-5-5-3.5-15.5T9 290l69-107q7-11 17-17.5t17-5.5l164 50q45-36 98-56l39-138q2-6 13-11t25-5h137q14 0 25 5t12 11l36 142q45 19 87 52l165-50q7-1 16.5 5.5T946 183l69 107q7 11 8.5 21.5T1020 327zM512 320q-80 0-136 56.5t-56 136T376 648t136 56t136-56t56-135.5t-56-136T512 320"></svg:path>`,
})
export class WhhCogIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCoinsIcon],svg[whh-coins-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 640q-154 0-274-27t-158-68q136 31 304 31q123 0 233.5-17T860 512t68-64v-64h32q29 6 46.5 24.5T1024 448v64q0 35-60 64.5T801 623t-225 17m-64-256q-97 0-178-10.5t-129-25t-81.5-31T77 289t-13-17v-39q51 38 176 62.5T512 320t272-24.5T960 233v23q0 34-60 63.5t-163 47T512 384m0-128q-122 0-225-17.5t-163-47t-60-64t60-64T287 17T512 0t225 17t163 46.5t60 64t-60 64t-163 47T512 256M32 320q0 34 68 64t178.5 47T512 448q112 0 214-14.5T896 394q-1 2-3.5 6.5T877 417t-31.5 23t-54 25t-80 23.5T598 505t-150 7q-122 0-225-17.5t-163-47T0 384v-64q0-24 32-47zm0 337v47q0 34 68 64t178.5 47T512 832q110 0 211.5-14T894 779q-15 50-143 83.5T448 896q-122 0-225-17T60 832.5T0 768v-64q0-24 32-47m544 47q111 0 212.5-14.5T958 650q-14 50-142 84t-304 34q-122 0-225-17t-163-46.5T64 640v-64q0-22 29-45q15 5 26 8q-19 19-19 37q0 34 67 64t177 47t232 17m352 128v-47q32 23 32 47v64q0 35-60 64.5T737 1007t-225 17q-176 0-304-34T66 906q68 25 169.5 39.5T448 960q123 0 233.5-17T860 896t68-64"></svg:path>`,
})
export class WhhCoinsIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCoinsaltIcon],svg[whh-coinsalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.59 768h-64q13 0 22.5 9.5t9.5 22.5v128q0 13-9.5 22.5t-22.5 9.5h-832q-13 0-22.5-9.5t-9.5-22.5V800q0-13 9.5-22.5t22.5-9.5h64q-13 0-22.5-9.5t-9.5-22.5V608q0-13 9.5-22.5t22.5-9.5h-128q-13 0-22.5-9.5T.59 544V416q0-13 9.5-22.5t22.5-9.5h64q-13 0-22.5-9.5t-9.5-22.5V224q0-13 9.5-22.5t22.5-9.5h-64q-13 0-22.5-9.5T.59 160V32q0-13 9.5-22.5T32.59 0h832q13 0 22.5 9.5t9.5 22.5v128q0 13-9.5 22.5t-22.5 9.5h64q13 0 22.5 9.5t9.5 22.5v128q0 13-9.5 22.5t-22.5 9.5h-64q13 0 22.5 9.5t9.5 22.5v128q0 13-9.5 22.5t-22.5 9.5h128q13 0 22.5 9.5t9.5 22.5v128q0 13-9.5 22.5t-22.5 9.5m-480 128h64v-64h-64zm-192-256v64h192v-64zm192-128v-64h-64v64zm-256-192h192v-64h-192zm-64 128v64h192v-64zm64 448h192v-64h-192zm0-256h-64v64h64zm-128 192v64h64v-64zm-64-384v64h64v-64zm64-384h-64v64h64zm0 256h64v-64h-64zm256-256h-192v64h192zm128 0h-64v64h64zm64 192h-64v64h64zm64 384h-64v64h64z"></svg:path>`,
})
export class WhhCoinsaltIcon {
  readonly viewBox = input("0 0 1025 960")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCollabtiveIcon],svg[whh-collabtive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 340v24h-25q-1 6-4 13l22 13l-12 20l-22-12q-4 5-9 9l12 22l-20 12l-13-22q-6 3-13 4v25h-24v-25q-6-1-13-4l-13 22l-20-12l12-22q-5-4-9-9l-22 12l-12-20l22-13q-3-6-4-13h-25v-24h25q1-6 4-13l-22-13l12-20l22 12q4-5 9-9l-12-22l20-12l13 22q6-3 13-4v-25h24v25q6 1 13 4l13-22l20 12l-12 22q5 4 9 9l22-12l12 20l-22 13q3 7 4 13zm-96-36q-20 0-34 14t-14 34t14 34t34 14t34-14t14-34t-14-34t-34-14M647 562l43 25l-24 42l-43-25q-9 10-19 19l25 43l-42 24l-25-43q-13 5-26 7v50h-48v-50q-12-2-26-7l-25 43l-42-24l26-43q-11-9-19-19l-44 25l-24-42l43-25q-5-13-7-26h-50v-48h50q2-12 7-26l-43-25l24-42l44 26q8-11 19-19l-26-44l42-24l25 43q13-5 26-7v-50h48v50q12 2 26 7l25-43l42 24l-25 44q9 8 19 19l43-26l24 42l-43 25q5 13 7 26h50v48h-50q-2 12-7 26M512 416q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m0-160q-106 0-181 75t-75 181t75 181t181 75q53 0 101-21l50 117q-44 19-87 26v134H448V890q-32-5-69-19l-68 116l-110-64l67-116q-27-23-51-51l-116 67l-64-110l115-67q-12-35-18-70H0V448h134q6-35 18-70L37 311l64-110l116 67q24-28 51-51l-67-116l110-64l68 116q37-14 69-19V0h128v134q44 7 87 26l-50 117q-48-21-101-21"></svg:path>`,
})
export class WhhCollabtiveIcon {
  readonly viewBox = input("0 0 960 1024")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhColocationIcon],svg[whh-colocation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.56 960h-768q-53 0-90.5-37.5T.56 832V128q0-53 37.5-90.5T128.56 0h768q53 0 90.5 37.5t37.5 90.5v704q0 53-37.5 90.5t-90.5 37.5m0-768q0-26-19-45t-45-19h-640q-27 0-45.5 18.5t-18.5 45.5v64q0 27 18.5 45.5t45.5 18.5v-64q0-26 18.5-45t45-19t45.5 19t19 45v64h512q26 0 45-18.5t19-45.5zm0 256q0-26-19-45t-45-19h-640q-27 0-45.5 18.5t-18.5 45.5v64q0 27 18.5 45.5t45.5 18.5v-64q0-26 18.5-45t45-19t45.5 19t19 45v64h512q26 0 45-18.5t19-45.5zm0 256q0-26-19-45t-45-19h-640q-27 0-45.5 18.5t-18.5 45.5v64q0 27 18.5 45.5t45.5 18.5v-64q0-26 18.5-45t45-19t45.5 19t19 45v64h512q26 0 45-18.5t19-45.5zm-96 64h-384q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h384q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m0-256h-384q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h384q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m0-256h-384q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h384q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5"></svg:path>`,
})
export class WhhColocationIcon {
  readonly viewBox = input("0 0 1025 960")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhColocationaltIcon],svg[whh-colocationalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m0-832q0-26-19-45t-45-19h-640q-27 0-45.5 19t-18.5 45v640q0 27 18.5 45.5t45.5 18.5h640q26 0 45-18.5t19-45.5zm-128 640h-512q-27 0-45.5-19t-18.5-45V640q0-26 18.5-45t45.5-19h512q26 0 45 19t19 45v128q0 27-19 45.5t-45 18.5m-448.5-192q-26.5 0-45 19t-18.5 45.5t18.5 45t45 18.5t45.5-18.5t19-45t-19-45.5t-45.5-19m416.5 64h-256q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h256q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m32-256h-512q-27 0-45.5-18.5t-18.5-45.5V256q0-26 18.5-45t45.5-19h512q26 0 45 19t19 45v128q0 27-19 45.5t-45 18.5m-448.5-192q-26.5 0-45 19t-18.5 45.5t18.5 45t45 18.5t45.5-18.5t19-45t-19-45.5t-45.5-19m416.5 64h-256q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h256q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5"></svg:path>`,
})
export class WhhColocationaltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhColorsIcon],svg[whh-colors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 640q0 87-43 160.5T864.5 917T704 960q-106 0-192-64q-86 64-192 64q-87 0-160.5-43T43 800.5T0 640q0-97 53.5-176.5T193 346q-1-16-1-26q0-87 43-160.5T351.5 43T512 0t160.5 43T789 159.5T832 320q0 2-2 26h1q86 38 139.5 117.5T1024 640m-960 0q0 106 75 181t181 75q79 0 144-45q-80-91-80-211q0-7 2-26h-1q61 26 127 26t126-26q-5-70-38.5-129.5T512 385q-54 40-87.5 100T385 614v-1q-64-28-111.5-80.5T206 412q-64 32-103 93T64 640M512 64q-106 0-181 75t-75 181v3l1 3q32-6 63-6q107 0 192 64q85-64 192-64q32 0 64 6v-6q0-106-75-181T512 64m306 348q-20 68-67.5 121T639 614h-1q2 19 2 26q0 120-80 211q65 45 144 45q106 0 181-75t75-181q0-74-39-135t-103-93"></svg:path>`,
})
export class WhhColorsIcon {
  readonly viewBox = input("0 0 1024 960")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhComedyIcon],svg[whh-comedy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-145-36-262-135.5T66.5 646T0 347V64Q290 0 512 0t512 64v283q0 156-66.5 299T774 888.5T512 1024M320 192q-53 0-90.5 19T192 256.5t37.5 45T320 320t90.5-18.5t37.5-45t-37.5-45.5t-90.5-19m384 0q-53 0-90.5 19T576 256.5t37.5 45T704 320t90.5-18.5t37.5-45t-37.5-45.5t-90.5-19M512 640q-60 0-171-68q-82-50-104-56q-43-7-45 49q0 37 49.5 85T368 733t144 35t144-35t126.5-83t49.5-85q0-52-31-51q-24 0-103 49q-104 64-157 74q-15 3-29 3"></svg:path>`,
})
export class WhhComedyIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCommentIcon],svg[whh-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 896q-66 0-134-16q-34 40-69.5 69.5t-60 43.5t-47.5 21.5t-30.5 8.5t-10.5 1q26-57 30-124.5T176 786Q94 723 47 635T0 448q0-91 40.5-174t109-143T313 35.5T512 0t199 35.5T874.5 131t109 143t40.5 174t-40.5 174t-109 143T711 860.5T512 896"></svg:path>`,
})
export class WhhCommentIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCommentloveIcon],svg[whh-commentlove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 896q-66 0-134-16q-103 121-201 142l-17 2q26-57 30-124.5T177 786Q94 723 47 635T0 448q0-91 40.5-174t109-143T313 35.5T512 0t199 35.5T874.5 131t109 143t40.5 174t-40.5 174t-109 143T711 860.5T512 896m128-640q-53 0-90.5 37.5T512 384q0-53-37.5-90.5T384 256t-90.5 37.5T256 384v1q0 53 26 114t83 119l147 86l147-86q59-61 84-115.5T768 385v-1q0-53-37.5-90.5T640 256M512 384"></svg:path>`,
})
export class WhhCommentloveIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCommentoutIcon],svg[whh-commentout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M855.048 768h-215l-256 256V768h-215q-57 0-113-57t-56-115V172q0-58 56-115t113-57h686q57 0 113 57t56 115v424q0 58-56 115t-113 57m-474-611q6-12 .5-20.5t-19.5-8.5h-68q-14 0-28 8.5t-20 20.5l-115 230q-3 6-3 13t3 13l115 198q6 12 20 20.5t28 8.5h68q14 0 19.5-8.5t-.5-20.5l-117-212zm195 3q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v256q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm0 384q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm320 0q0-13-9.5-22.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5z"></svg:path>`,
})
export class WhhCommentoutIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCommentroundIcon],svg[whh-commentround-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-161 0-293-93q-35 43-93 68T0 1024q25 0 43.5-76.5T64 759Q0 644 0 512q0-139 68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024"></svg:path>`,
})
export class WhhCommentroundIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCommentroundemptyIcon],svg[whh-commentroundempty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-161 0-293-93q-35 43-93 68T0 1024q25 0 43.5-76.5T64 759Q0 644 0 512q0-104 40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-896q-104 0-192.5 51.5t-140 140T128 512t51.5 192.5t140 140T512 896t192.5-51.5t140-140T896 512t-51.5-192.5t-140-140T512 128"></svg:path>`,
})
export class WhhCommentroundemptyIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCommentroundtypingIcon],svg[whh-commentroundtyping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-161 0-293-93q-35 43-93 68T0 1024q25 0 43.5-76.5T64 759Q0 644 0 512q0-139 68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024M320.5 448q-26.5 0-45.5 18.5T256 512t19 45.5t45.5 18.5t45-19t18.5-45t-18.5-45t-45-19m192 0q-26.5 0-45.5 18.5t-19 45t19 45.5t45.5 19t45-18.5T576 512t-18.5-45.5t-45-18.5m192 0q-26.5 0-45.5 19t-19 45t19 45t45.5 19t45-19t18.5-45t-18.5-45t-45-19"></svg:path>`,
})
export class WhhCommentroundtypingIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCommentroundtypingemptyIcon],svg[whh-commentroundtypingempty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-161 0-293-93q-35 43-93 68T0 1024q25 0 43.5-76.5T64 759Q0 644 0 512q0-139 68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m0-896q-104 0-192.5 51.5t-140 140T128 512t51.5 192.5t140 140T512 896t192.5-51.5t140-140T896 512t-51.5-192.5t-140-140T512 128m192.5 448q-26.5 0-45.5-19t-19-45t19-45t45.5-19t45 19t18.5 45t-18.5 45t-45 19m-192 0q-26.5 0-45.5-19t-19-45t19-45t45-19t45 19t19 45.5t-18.5 45t-45 18.5m-192 0q-26.5 0-45.5-18.5T256 512t19-45.5t45.5-18.5t45 19t18.5 45.5t-18.5 45t-45 18.5"></svg:path>`,
})
export class WhhCommentroundtypingemptyIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCommentsmileyIcon],svg[whh-commentsmiley-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 896q-66 0-134-16q-34 40-69.5 69.5t-60 43.5t-47.5 21.5t-30.5 8.5t-10.5 1q26-57 30-124.5T177 786Q94 723 47 635T0 448q0-91 40.5-174t109-143T313 35.5T512 0t199 35.5T874.5 131t109 143t40.5 174t-40.5 174t-109 143T711 860.5T512 896m-64-608q0-13-9.5-22.5T416 256h-64q-13 0-22.5 9.5T320 288v64q0 13 9.5 22.5T352 384h64q13 0 22.5-9.5T448 352zm0 256q0-13-9.5-22.5T416 512h-64q-13 0-22.5 9.5T320 544v64q0 13 9.5 22.5T352 640h64q13 0 22.5-9.5T448 608zm192-352h-64q23 23 37 49t19.5 63.5T639 368t1 80t-1 80t-6.5 63.5T613 655t-37 49h64q26-26 39-39.5t33-40.5t30-49.5t18-56t8-70.5t-8-70.5t-18-56t-30-49t-33-40.5t-39-40"></svg:path>`,
})
export class WhhCommentsmileyIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCommenttypingIcon],svg[whh-commenttyping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 896q-66 0-134-16q-34 40-69.5 69.5t-60 43.5t-47.5 21.5t-30 8.5t-11 1q26-57 30-124.5T177 786Q94 723 47 635T0 448q0-91 40.5-174t109-143T313 35.5T512 0t199 35.5T874.5 131t109 143t40.5 174t-40.5 174t-109 143T711 860.5T512 896M255.5 384q-26.5 0-45 18.5t-18.5 45t18.5 45.5t45 19t45.5-19t19-45.5t-19-45t-45.5-18.5m256 0q-26.5 0-45 18.5t-18.5 45t18.5 45.5t45 19t45.5-19t19-45.5t-19-45t-45.5-18.5m256 0q-26.5 0-45 18.5t-18.5 45t18.5 45.5t45 19t45.5-19t19-45.5t-19-45t-45.5-18.5"></svg:path>`,
})
export class WhhCommenttypingIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCommitIcon],svg[whh-commit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 384H826q-23 110-111 183t-203 73t-203-73t-111-183H64q-27 0-45.5-19T0 319.5t18.5-45T64 256h134q23-111 111-183.5T512 0t203 72.5T826 256h134q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19M512 128q-80 0-136 56t-56 136t56 136t136 56t136-56t56-136t-56-136t-136-56"></svg:path>`,
})
export class WhhCommitIcon {
  readonly viewBox = input("0 0 1024 640")
  readonly width = input("1.6em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCommunityIcon],svg[whh-community-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-896q-104 0-192.5 51.5t-140 140T128 512q0 146 98 256h126q40 0 68 28t28 68v26q34 6 64 6t64-6v-26q0-40 28-68t68-28h126q98-110 98-256q0-104-51.5-192.5t-140-140T512 128m224 576q-53 0-90.5-37.5T608 576t37.5-90.5T736 448t90.5 37.5T864 576t-37.5 90.5T736 704M512 448q-53 0-90.5-37.5T384 320t37.5-90.5T512 192t90.5 37.5T640 320t-37.5 90.5T512 448m-64 128q0 53-37.5 90.5T320 704t-90.5-37.5T192 576t37.5-90.5T320 448t90.5 37.5T448 576"></svg:path>`,
})
export class WhhCommunityIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCommunitysmallIcon],svg[whh-communitysmall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-960q-91 0-174 35.5T195 195T99.5 338T64 512t35.5 174T195 829t143 95.5T512 960t174-35.5T829 829t95.5-143T960 512t-35.5-174T829 195T686 99.5T512 64m192 704q-53 0-90.5-37.5T576 640t37.5-90.5T704 512t90.5 37.5T832 640t-37.5 90.5T704 768M512 448q-53 0-90.5-37.5T384 320t37.5-90.5T512 192t90.5 37.5T640 320t-37.5 90.5T512 448m-64 192q0 53-37.5 90.5T320 768t-90.5-37.5T192 640t37.5-90.5T320 512t90.5 37.5T448 640"></svg:path>`,
})
export class WhhCommunitysmallIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCompassIcon],svg[whh-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-896q-104 0-192.5 51t-140 139.5t-51.5 193t51.5 193t140 140T512 896t192.5-51.5t140-140t51.5-193t-51.5-193t-140-139.5T512 128m0 448q-35 0-54-30L224 416l288 32q35 0 54 30l234 130z"></svg:path>`,
})
export class WhhCompassIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCompileIcon],svg[whh-compile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1013 588l-456 419q-18 18-43.5 18t-43.5-18L13 588Q2 577 1 558.5t7-32T28 513h229v-64h128v-64H257V257h128v64h128v-64H385v-65H257V64h128v64h64V0h128v128h-64v129h128V128h64V0h129v128h-65v129H641v64h129v192h228q11 0 19.5 13.5t7.5 32t-12 29.5M641 385H513v64h128z"></svg:path>`,
})
export class WhhCompileIcon {
  readonly viewBox = input("0 0 1026 1025")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCompressIcon],svg[whh-compress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 192H800q-2 0 38 41t81 81t41 38v262q0 11-7.5 18.5T934 640h58q13 0 22.5 9.5t9.5 22.5t-9.5 22.5T992 704H832q0 26-18.5 45T768 768H320v64h32q13 0 22.5 9.5T384 864v32h96q13 0 22.5 9.5T512 928t-9.5 22.5T480 960h-96v32q0 13-9.5 22.5T352 1024H160q-13 0-22.5-9.5T128 992v-32H32q-13 0-22.5-9.5T0 928t9.5-22.5T32 896h96v-32q0-13 9.5-22.5T160 832h32V64q0-27 18.5-45.5t45-18.5T301 18.5T320 64h448q27 0 45.5 18.5T832 128h160q13 0 22.5 9.5t9.5 22.5t-9.5 22.5T992 192m-390 0H320v448h282q-11 0-18.5-7.5T576 614V218q0-11 7.5-18.5T602 192m166 64H640v320h256V384H768z"></svg:path>`,
})
export class WhhCompressIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhConcretefiveIcon],svg[whh-concretefive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M415 1024q-95 0-176-34t-128.5-93T63 768t47.5-128.5t128.5-93T415 512q33 0 73 5t83 15t71.5 30t28.5 46q0 40-24.5 68T575 704q-19 0-44-16t-55-32t-61-16q-71 0-115.5 30T255 768q0 17 9.5 37.5t27 41.5t50 35t73.5 14q59 0 159-54t161-138q3-4 12.5-17t12-16.5t11.5-12t16-11t18.5-5T831 640q64 0 64 96q0 22-23 57.5t-67.5 75t-101 74.5t-133.5 58t-155 23m288-576q-7 20-22.5 24t-28.5-4.5t-13-19.5V128q0-26 27.5-47.5t53-14.5t39 29t6.5 46q-2 6-10.5 64t-22 129T703 448m-224 0q-21 0-36-51.5t-20-131t-6.5-122.5t-1.5-79q0-26 19-45t45.5-19t45 19T543 64q0 1 .5 22t.5 41t-.5 52t-2 60t-4.5 60t-8 57.5t-11.5 47t-16 33T479 448m-224 0q-15-41-29-112t-22.5-130t-9.5-65q-7-24 6.5-46t39-29T292 80.5t27 47.5v320q0 13-12 22t-27.5 4.5T255 448m-96 64q-17 0-37-19t-38-50t-32.5-58.5T24 327T8 293q-12-24-5.5-51t28-40.5T76 195t37 31q17 32 42.5 159t3.5 127"></svg:path>`,
})
export class WhhConcretefiveIcon {
  readonly viewBox = input("0 0 895 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhConeIcon],svg[whh-cone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 1024H64q-27 0-45.5-19T0 959.5t18.5-45T64 896h64l49-128h670l49 128h64q26 0 45 18.5t19 45t-19 45.5t-45 19M423 128l25-64q22-64 64-64q45 0 64 64l25 64zm276 256H325l49-128h276zM276 512h472l50 128H226z"></svg:path>`,
})
export class WhhConeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhConnectedIcon],svg[whh-connected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 704H704q0 27-18.5 45.5T640 768H384q-27 0-45.5-18.5T320 704H64q-27 0-45.5-19T0 640V512q0-27 18.5-45.5T64 448h256q0-27 18.5-45.5T384 384V64q0-27 18.5-45.5T448 0h128q27 0 45.5 18.5T640 64v320q27 0 45.5 18.5T704 448h256q27 0 45.5 18.5T1024 512v128q0 26-18.5 45T960 704M320 512H96q-13 0-22.5 9.5T64 544t9.5 22.5T96 576h224zM512 96q0-13-9.5-22.5T480 64t-22.5 9.5T448 96v288h64zm128 352H384v256h256zm288 64H704v64h224q13 0 22.5-9.5T960 544t-9.5-22.5T928 512"></svg:path>`,
})
export class WhhConnectedIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhConnectedpcIcon],svg[whh-connectedpc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 960H704q0 27-18.5 45.5T640 1024H384q-26 0-45-19t-19-45H64q-26 0-45-19T0 896V768q0-27 19-45.5T64 704h256q0-27 19-45.5t45-18.5v-64H192q-26 0-45-19t-19-45V64q0-27 19-45.5T192 0h640q27 0 45.5 18.5T896 64v448q0 27-18.5 45.5T832 576H640v64q27 0 45.5 18.5T704 704h256q27 0 45.5 19t18.5 45v128q0 26-18.5 45T960 960M320 768H96q-13 0-22.5 9.5T64 800t9.5 22.5T96 832h224zm512-320V64H192v384zM448 576v64h64v-64zm192 128H384v256h256zm288 64H704v64h224q13 0 22.5-9.5T960 800t-9.5-22.5T928 768"></svg:path>`,
})
export class WhhConnectedpcIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhConstellationIcon],svg[whh-constellation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m951 189l-47 332q25 11 40.5 34.5T960 608q0 40-28 68t-68 28q-29 0-54-16L505 893q7 17 7 35q0 40-28 68t-68 28t-68-28t-28-68q0-18 7-35L131 697q-17 7-35 7q-40 0-68-28T0 608t28-68t68-28q22 0 43 10l186-204q-5-16-5-30q0-40 28-68t68-28q44 0 73 35L833 89q2-37 29.5-63T928 0q40 0 68 28t28 68q0 33-20.5 59T951 189M365 369L183 568q9 20 9 40q0 24-13 47l190 190q23-13 47-13q25 0 48 13l309-208q-5-15-5-29q0-11 3-23L480 359q-28 25-64 25q-27 0-51-15m146-66l295 229q15-12 35-17l47-332q-25-12-41-35L511 282q0 1 .5 3t.5 3q0 5-1 15"></svg:path>`,
})
export class WhhConstellationIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhConstructionIcon],svg[whh-construction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024.585 64v192q0 27-18.5 45.5t-45.5 18.5h-64v480q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5V576h-512v224q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5V320h-64q-27 0-45.5-18.5T.585 256V64q0-27 18.5-45.5T64.585 0h896q27 0 45.5 18.5t18.5 45.5m-768 448h512V320h-512zm-192-448v64l64-64zm0 192h128l192-192h-128zm448-192l-192 192h128l192-192zm256 0l-192 192h128l192-192zm192 64l-128 128h128z"></svg:path>`,
})
export class WhhConstructionIcon {
  readonly viewBox = input("0 0 1025 832")
  readonly width = input("1.24em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhContaoIcon],svg[whh-contao-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-89q82-70 123.5-172.5t25.5-208.5q-42 10-126 31t-126 30q0 95-33 143.5t-95 48.5q-128 0-160-128q-5-21-35.5-131t-45.5-185t-15-132q0-53 45-90.5t115-37.5q49 0 98.5 40t61.5 88q38-8 76.5-19t85-25.5t62.5-19.5q-26-88-89.5-154.5T626.428 0h270q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-828-580q33 192 85 379q35 119 140 201h-165q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h187q-123 55-195.5 181t-51.5 263"></svg:path>`,
})
export class WhhContaoIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhControllernesIcon],svg[whh-controllernes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 568H64q-26 0-45-19T0 504V120q0-26 19-45t45-19h896q26 0 45 19t19 45v384q0 27-18.5 45.5T960 568M384 248h-64v-64q0-26-18.5-45t-45-19t-45.5 19t-19 45v64h-64q-26 0-45 19t-19 45.5t19 45t45 18.5h64v64q0 27 19 45.5t45.5 18.5t45-18.5T320 440v-64h64q27 0 45.5-18.5t18.5-45t-18.5-45.5t-45.5-19m320.5 64q-26.5 0-45.5 19t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45t-18.5-45.5t-45-19m192 0q-26.5 0-45.5 19t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45t-18.5-45.5t-45-19"></svg:path>`,
})
export class WhhControllernesIcon {
  readonly viewBox = input("0 0 1024 614")
  readonly width = input("1.67em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhControllerpsIcon],svg[whh-controllerps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 512q0 50-5 94t-16 81.5t-30.5 59T928 768q-51 0-97-38t-63-90q-43-128-256-128T256 640q-17 52-63 90t-97 38q-25 0-44.5-21.5t-30.5-59T5 606t-5-94q0-46 9.5-101.5t30-118.5t60-116.5T192 96V64q0-27 18.5-45.5T256 0h64q26 0 45 18.5T384 64h256q0-27 19-45.5T704 0h64q26 0 45 18.5T832 64v32q53 26 92.5 79.5t60 116.5t30 118.5T1024 512M288 256h-32v-32q0-13-9.5-22.5T224 192t-22.5 9.5T192 224v32h-32q-13 0-22.5 9.5T128 288t9.5 22.5T160 320h32v32q0 13 9.5 22.5T224 384t22.5-9.5T256 352v-32h32q13 0 22.5-9.5T320 288t-9.5-22.5T288 256m416 64q-26 0-45 18.5t-19 45t19 45.5t45.5 19t45-19t18.5-45.5t-19-45t-45-18.5m64-64.5q0 26.5 18.5 45.5t45 19t45.5-19t19-45.5t-19-45t-45.5-18.5t-45 18.5t-18.5 45"></svg:path>`,
})
export class WhhControllerpsIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}
