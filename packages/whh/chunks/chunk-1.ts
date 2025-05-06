import { Component, input } from '@angular/core'

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

@Component({
  standalone: true,
  selector: 'svg[whhControllersnesIcon],svg[whh-controllersnes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 568q-96 0-169-64H425q-73 64-169 64q-106 0-181-75T0 312t75-181t181-75h512q106 0 181 75t75 181t-75 181t-181 75M384 248h-64v-64q0-27-19-45.5T255.5 120t-45 18.5T192 184v64h-64q-27 0-45.5 19T64 312t18.5 45t45.5 19h64v64q0 27 18.5 45.5t45 18.5t45.5-18.5t19-45.5v-64h64q26 0 45-19t19-45.5t-19-45t-45-18.5m319.5 64q-26.5 0-45 19T640 376.5t18.5 45t45 18.5t45.5-18.5t19-45t-19-45.5t-45.5-19m128-128q-26.5 0-45 19T768 248.5t18.5 45t45 18.5t45.5-18.5t19-45t-19-45.5t-45.5-19"></svg:path>`,
})
export class WhhControllersnesIcon {
  readonly viewBox = input("0 0 1024 614")
  readonly width = input("1.67em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhControlpanelIcon],svg[whh-controlpanel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-576-704q0-27-19-45.5t-45-18.5v-64q0-27-19-45.5t-45.5-18.5t-45 18.5t-18.5 45.5v64q-27 0-45.5 18.5t-18.5 45.5v128q0 27 18.5 45.5t45.5 18.5v320q0 27 18.5 45.5t45 18.5t45.5-18.5t19-45.5V512q26 0 45-18.5t19-45.5zm320 384q0-26-19-45t-45-19V192q0-27-19-45.5t-45.5-18.5t-45 18.5t-18.5 45.5v448q-27 0-45.5 19t-18.5 45v128q0 27 18.5 45.5t45.5 18.5h128q26 0 45-18.5t19-45.5zm320-256q0-26-18.5-45t-45.5-19V192q0-27-18.5-45.5t-45-18.5t-45.5 18.5t-19 45.5v192q-27 0-45.5 19t-18.5 45v128q0 26 18.5 45t45.5 19v192q0 27 19 45.5t45.5 18.5t45-18.5t18.5-45.5V640q27 0 45.5-19t18.5-45zm-96 128h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-320 256h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-320-384h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5"></svg:path>`,
})
export class WhhControlpanelIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhControlpanelaltIcon],svg[whh-controlpanelalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-384-160q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5v-64q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5zm-384 0q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5v-64q0-13-9.5-22.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 22.5zm736-672h-352q0-27-18.5-45.5t-45.5-18.5h-128q-26 0-45 18.5t-19 45.5h-96q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h96q0 26 19 45t45 19h128q27 0 45.5-18.5t18.5-45.5h352q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m0 320h-96q0-27-19-45.5t-45-18.5h-128q-26 0-45 18.5t-19 45.5h-352q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h352q0 27 19 45.5t45 18.5h128q26 0 45-18.5t19-45.5h96q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m32 288q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm-224-224h-64q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m-256-320h-64q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5"></svg:path>`,
})
export class WhhControlpanelaltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCoolingIcon],svg[whh-cooling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-767.5-64q26.5 0 45-19t18.5-45.5t-18.5-45t-45.5-18.5t-45.5 18.5t-18.5 45t19 45.5t45.5 19m-.5-896q-27 0-45.5 18.5t-18.5 45t18.5 45.5t45.5 19t45.5-19t18.5-45.5t-18.5-45t-45.5-18.5m384 64q-104 0-192.5 51.5t-140 140t-51.5 192.5t51.5 192.5t140 140t192.5 51.5t192.5-51.5t140-140t51.5-192.5t-51.5-192.5t-140-140t-192.5-51.5m384-64q-27 0-45.5 18.5t-18.5 45t18.5 45.5t45.5 19t45.5-19t18.5-45.5t-18.5-45t-45.5-18.5m0 768q-27 0-45.5 18.5t-18.5 45t18.5 45.5t45.5 19t45.5-19t18.5-45.5t-18.5-45t-45.5-18.5m-256-320q0 30-15 59q58 12 105.5 33.5t69.5 43.5q-54 112-160 152q0-71-11.5-115t-37.5-73q-35 28-79 28q-30 0-59-15q-12 58-33.5 105.5t-43.5 69.5q-112-54-152-160q71 0 115-11.5t73-37.5q-28-35-28-79q0-30 15-59q-58-12-105.5-33.5t-69.5-43.5q54-112 160-152q0 71 11.5 115t37.5 73q35-28 79-28q30 0 59 15q12-58 33.5-105.5t43.5-69.5q112 54 152 160q-71 0-115 11.5t-73 37.5q28 35 28 79"></svg:path>`,
})
export class WhhCoolingIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCoppermineIcon],svg[whh-coppermine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 768H256q-106 0-181-75T0 512V256Q0 150 75 75T256 0h512q106 0 181 75t75 181v256q0 106-75 181t-181 75m128-352q0-13-9.5-22.5T864 384H736q-13 0-22.5 9.5T704 416t9.5 22.5T736 448h96v64h-64q-53 0-90.5-37.5T640 384t37.5-90.5T768 256h96q13 0 22.5-9.5T896 224t-9.5-22.5T864 192h-96q-86 0-144 67q-17-31-46.5-49T512 192h-96q-13 0-22.5 9.5T384 224v288h-64q-53 0-90.5-37.5T192 384q0-58 23-93t73-35q13 0 22.5-9.5T320 224t-9.5-22.5T288 192q-76 0-118 54.5T128 384q0 80 56 136t136 56h96q13 0 22.5-9.5T448 544v-96h64q38 0 69-21q15 65 67 107t120 42h96q13 0 22.5-9.5T896 544zm-384-32h-64V256h64q26 0 45 19t19 45.5t-18.5 45T512 384"></svg:path>`,
})
export class WhhCoppermineIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCopyIcon],svg[whh-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.193 1024h-512q-27 0-45.5-18.5t-18.5-45.5V768h224q31 0 55.5-18t34.5-46h166q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-160V512h160q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-160V320h256q26 0 45 19t19 45v576q0 26-18.5 45t-45.5 19m-96-192h-320q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h320q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m-288-128h-512q-27 0-45.5-18.5T.193 640V64q0-26 18.5-45t45.5-19h512q27 0 45.5 19t18.5 45v576q0 27-19 45.5t-45 18.5m-96-576h-320q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h320q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m0 192h-320q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h320q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m0 192h-320q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h320q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5"></svg:path>`,
})
export class WhhCopyIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCopyappIcon],svg[whh-copyapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m832 448l192 384q-179-12-329-38q-57-10-118-27l-129 65l-30-76l-66 44l-161-437l-173 58l-18-37l145-145l-17-47l74 25l-10-25l96 32l118 245q51-38 73-50l65-35q26 8 57 18L896 0L796 449z"></svg:path>`,
})
export class WhhCopyappIcon {
  readonly viewBox = input("0 0 1024 832")
  readonly width = input("1.24em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCopyrightIcon],svg[whh-copyright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m0-896q-104 0-192.5 51.5t-140 140T128 512t51.5 192.5t140 140T512 896t192.5-51.5t140-140T896 512t-51.5-192.5t-140-140T512 128m222 304q-6 21-23 34.5T672 480q-8 0-16-3t-13-6t-11.5-10t-9-10t-7-10.5t-5.5-8.5q-39-48-98-48q-53 0-90.5 37.5T384 512t37.5 90.5T512 640q59 0 98-48q2-2 9.5-13.5t12.5-17t16-11.5t24-6q22 0 39 13.5t23 34.5q1 4 2 11t-3.5 23.5T714 656q-37 50-90 81t-112 31q-106 0-181-75t-75-181t75-181t181-75q61 0 114.5 31.5T717 371q12 11 16 26.5t2 25.5z"></svg:path>`,
})
export class WhhCopyrightIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCounterIcon],svg[whh-counter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.585 448q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-32v128q0 27-18.5 45.5t-45.5 18.5h-832q-27 0-45.5-18.5T.585 704V64q0-27 18.5-45.5T64.585 0h832q26 0 45 19t19 45v128h32q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-32v128zm-224-320h-64v32q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5zm128 32q0-13-9.5-22.5t-22.5-9.5h-32v64q0 27-18.5 45.5t-45.5 18.5h-64q-27 0-45.5-19t-18.5-45v-64h-544q-13 0-22.5 9.5t-9.5 22.5v448q0 13 9.5 22.5t22.5 9.5h672v-64h-64q-27 0-45.5-18.5t-18.5-45.5V384q0-27 18.5-45.5t45.5-18.5h64q26 0 45 18.5t19 45.5v256h32q13 0 22.5-9.5t9.5-22.5zm-128 320v-64q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5m-224 96q-13 0-22.5-9.5t-9.5-22.5v-96h-64q-27 0-45.5-18.5t-18.5-45.5V224q0-13 9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5v128q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5V224q0-13 9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5v320q0 13-9.5 22.5t-22.5 9.5m-288 0h-64q-27 0-45.5-18.5t-18.5-45.5V256q0-27 18.5-45.5t45.5-18.5h64q27 0 45.5 18.5t18.5 45.5v256q0 27-18.5 45.5t-45.5 18.5m0-288q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5z"></svg:path>`,
})
export class WhhCounterIcon {
  readonly viewBox = input("0 0 1025 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCounteraltIcon],svg[whh-counteralt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.585 448q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-32v128q0 27-18.5 45.5t-45.5 18.5h-832q-27 0-45.5-18.5T.585 704V64q0-27 18.5-45.5T64.585 0h832q27 0 45.5 18.5t18.5 45.5v128h32q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-32v128zm-672-192q0-26-18.5-45t-45.5-19h-64q-26 0-45 19t-19 45v256q0 27 18.5 45.5t45.5 18.5h64q27 0 45.5-18.5t18.5-45.5zm256-32q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v128q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5V224q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v160q0 26 18.5 45t45.5 19h64v96q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5zm256-32h-64v32q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5v-32h-64v64q0 27 18.5 45.5t45.5 18.5h64q27 0 45.5-18.5t18.5-45.5zm0 256q0-27-18.5-45.5t-45.5-18.5h-64q-27 0-45.5 18.5t-18.5 45.5v128h192zm-128 96v-64q0-13 9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5m-480-32q-13 0-22.5-9.5t-9.5-22.5V288q0-13 9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5"></svg:path>`,
})
export class WhhCounteraltIcon {
  readonly viewBox = input("0 0 1025 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCouponIcon],svg[whh-coupon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m896.428 896l11 8q-11 10-11 24q0 13 9.5 22.5t22.5 9.5h53l17 13q-39 51-102 51h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q63 0 102 51l-17 13h-53q-13 0-22.5 9.5t-9.5 22.5q0 14 11 24l-11 8l128 96l-128 96l128 96l-128 96l128 96l-128 96l128 96zm-352 64h64q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5m160-192q53 0 90.5-37.5t37.5-90.5t-37.5-90.5t-90.5-37.5t-90.5 37.5t-37.5 90.5t37.5 90.5t90.5 37.5m-352 192h64q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5m-192 0h64q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5m-96-128q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5v-64q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5zm0-192q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5v-64q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5zm0-192q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5v-64q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5zm32-288q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5v-64q0-13-9.5-22.5t-22.5-9.5m128-96h-64q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m192 0h-64q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m-32 192q-53 0-90.5 37.5t-37.5 90.5t37.5 90.5t90.5 37.5t90.5-37.5t37.5-90.5t-37.5-90.5t-90.5-37.5m224-192h-64q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m81.5 196.5q-10.5-6.5-22.5-3.5t-19 15l-260 449q-6 11-3 24t14 19.5t23 3t18-14.5l261-450q6-11 2.5-23.5t-14-19M800.428 64h-64q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m0 832h-64q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m-415.5-448q-26.5 0-45.5-19t-19-45.5t19-45t45.5-18.5t45 18.5t18.5 45t-18.5 45.5t-45 19m320 128q26.5 0 45 18.5t18.5 45t-18.5 45.5t-45 19t-45.5-19t-19-45.5t19-45t45.5-18.5"></svg:path>`,
})
export class WhhCouponIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCowIcon],svg[whh-cow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M822 508q-17 101-43 152q-3 13-23 53.5T720 802t-16 94q0 67-42.5 97.5T512 1024t-149.5-30.5T320 896q0-46-16-94t-36-88.5t-23-53.5q-26-51-43-152q-12 3-25 3.5t-29.5-.5t-28-2t-31.5-5t-28.5-5.5T28 492t-28-6q22-30 33.5-43.5t32.5-30t46.5-22.5t60.5-6q5 0 20 3q1-30 9-53q-11-37-10-72q0-26 .5-40.5t4-43.5t11.5-50t21.5-46.5t36.5-46T320 0q-37 73-37 131q0 50 17 97q78-36 212-36t212 36q17-47 17-97q0-58-37-131q31 15 54 35.5t36.5 46T816 128t11.5 50t4 43.5t.5 40.5q1 34-10 72q8 23 9 53q15-3 20-3q35 0 60.5 6t46.5 22.5t32.5 30T1024 486q-5 1-28 6t-31.5 6.5T936 504t-31.5 5t-28 2t-29.5.5t-25-3.5M512 320q-79 0-135.5 29.5T320 421q0 33 18.5 71t53.5 56q12 6 18.5 12t17 21.5T443 628t5 76q0 43-10 75t-22 47t-22 36.5t-10 46.5q0 23 43 37t85 14t85-14t43-37q0-25-10-46.5T608 826t-22-47t-10-75q0-45 5.5-76t16-47t17-21.5T632 548q34-18 53-56.5t19-70.5q0-42-56.5-71.5T512 320"></svg:path>`,
})
export class WhhCowIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCpanelIcon],svg[whh-cpanel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 512q0 27-19 45.5T960 576H576v384q0 27-18.5 45.5T512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257m-896 0q0 142 91.5 248.5T448 890V134q-137 23-228.5 129.5T128 512m448-378v314h314q-20-121-107-207.5T576 134"></svg:path>`,
})
export class WhhCpanelIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCplusplusIcon],svg[whh-cplusplus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.694 576h-96v96q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5v-96h-96q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h96v-96q0-13 9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5v96h96q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m-384 0h-96v96q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5v-96h-96q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h96v-96q0-13 9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5v96h96q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m-159.5-320q-26.5 0-45.5-18.5t-19-45.5q0-19-6-31.5t-14-19t-25.5-9.5t-29-3.5t-36.5-.5h-17q-53 0-90.5 37.5t-37.5 90.5v512q0 53 37.5 90.5t90.5 37.5h53.5l29-3.5l25.5-10l14-19l6-31.5q0-26 19-45t45.5-19t45 19t18.5 45v6q-1 50-21.5 86.5t-56 58t-79.5 31.5t-99 10q-106 0-181-75t-75-181V256q0-106 75-181t181-75q55 0 99 10.5t79.5 31.5t56 58t21.5 87v5q0 27-18.5 45.5t-45 18.5"></svg:path>`,
})
export class WhhCplusplusIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCpuIcon],svg[whh-cpu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928 640h-96v-64h96q13 0 22.5 9.5T960 608t-9.5 22.5T928 640m0-128h-96v-64h96q13 0 22.5 9.5T960 480t-9.5 22.5T928 512m0-128h-96v-64h96q13 0 22.5 9.5T960 352t-9.5 22.5T928 384m0-128h-96v-64h96q13 0 22.5 9.5T960 224t-9.5 22.5T928 256M736 960q-13 0-22.5-9.5T704 928v-96h64v96q0 13-9.5 22.5T736 960m-32-192H256q-26 0-45-19t-19-45V256q0-26 19-45t45-19h448q27 0 45.5 18.5T768 256v448q0 27-18.5 45.5T704 768m0-736q0-13 9.5-22.5T736 0t22.5 9.5T768 32v96h-64zm-128 0q0-13 9.5-22.5T608 0t22.5 9.5T640 32v96h-64zm-128 0q0-13 9.5-22.5T480 0t22.5 9.5T512 32v96h-64zm-128 0q0-13 9.5-22.5T352 0t22.5 9.5T384 32v96h-64zm-128 0q0-13 9.5-22.5T224 0t22.5 9.5T256 32v96h-64zM0 736q0-13 9.5-22.5T32 704h96v64H32q-13 0-22.5-9.5T0 736m0-128q0-13 9.5-22.5T32 576h96v64H32q-13 0-22.5-9.5T0 608m0-128q0-13 9.5-22.5T32 448h96v64H32q-13 0-22.5-9.5T0 480m0-128q0-13 9.5-22.5T32 320h96v64H32q-13 0-22.5-9.5T0 352m0-128q0-13 9.5-22.5T32 192h96v64H32q-13 0-22.5-9.5T0 224m256 704q0 13-9.5 22.5T224 960t-22.5-9.5T192 928v-96h64zm128 0q0 13-9.5 22.5T352 960t-22.5-9.5T320 928v-96h64zm128 0q0 13-9.5 22.5T480 960t-22.5-9.5T448 928v-96h64zm128 0q0 13-9.5 22.5T608 960t-22.5-9.5T576 928v-96h64zm320-192q0 13-9.5 22.5T928 768h-96v-64h96q13 0 22.5 9.5T960 736"></svg:path>`,
})
export class WhhCpuIcon {
  readonly viewBox = input("0 0 960 960")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCpualtIcon],svg[whh-cpualt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 768h-96V640h96q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5T992 768m0-192h-96V448h96q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5T992 576m0-192h-96V256h96q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5T992 384M768 832H256q-26 0-45-19t-19-45V256q0-26 18.5-45t45.5-19h512q27 0 45.5 19t18.5 45v512q0 27-18.5 45.5T768 832M640 32q0-13 9.5-22.5T672 0h64q13 0 22.5 9.5T768 32v96H640zm-192 0q0-13 9.5-22.5T480 0h64q13 0 22.5 9.5T576 32v96H448zm-192 0q0-13 9.5-22.5T288 0h64q13 0 22.5 9.5T384 32v96H256zM0 736v-64q0-13 9.5-22.5T32 640h96v128H32q-13 0-22.5-9.5T0 736m0-192v-64q0-13 9.5-22.5T32 448h96v128H32q-13 0-22.5-9.5T0 544m0-192v-64q0-13 9.5-22.5T32 256h96v128H32q-13 0-22.5-9.5T0 352m384 640q0 13-9.5 22.5T352 1024h-64q-13 0-22.5-9.5T256 992v-96h128zm192 0q0 13-9.5 22.5T544 1024h-64q-13 0-22.5-9.5T448 992v-96h128zm192 0q0 13-9.5 22.5T736 1024h-64q-13 0-22.5-9.5T640 992v-96h128z"></svg:path>`,
})
export class WhhCpualtIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCputhreeIcon],svg[whh-cputhree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024.794 320v704h-832l-192-192V320q26 0 45-19t19-45.5t-19-45t-45-18.5V0h1024v192q-27 0-45.5 18.5t-18.5 45t18.5 45.5t45.5 19m-128-96q0-40-28-68t-68-28h-576q-40 0-68 28t-28 68v576q0 40 28 68t68 28h576q40 0 68-28t28-68zm-96 608h-576q-13 0-22.5-9.5t-9.5-22.5V224q0-13 9.5-22.5t22.5-9.5h576q13 0 22.5 9.5t9.5 22.5v576q0 13-9.5 22.5t-22.5 9.5"></svg:path>`,
})
export class WhhCputhreeIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCrackedeggIcon],svg[whh-crackedegg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 512L512 640L320 512L192 640L11 519q11-69 31.5-139t54-139t74-122T267 33T384 0q56 0 107 27t90 72.5T652.5 203t55 123T744 453.5T764 574zM192 704l128-128l192 128l128-128l128 64q0 104-51.5 192.5t-140 140T384 1024t-192.5-51.5t-140-140T0 640q0-25 3-62z"></svg:path>`,
})
export class WhhCrackedeggIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCrayonIcon],svg[whh-crayon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m965.975 1020l-124-71q-18 12-39.5 10t-37.5-18l-746-746q-18-18-18-44t18-44l89-88q18-19 44-19t44 19l746 746q15 15 17 36.5t-9 39.5l71 124q11 33-5.5 49.5t-49.5 5.5m-689-826l-83 82l44 43l82-82zm96 96l-83 82l235 235l82-83zm287 287l-82 82l43 44l82-83z"></svg:path>`,
})
export class WhhCrayonIcon {
  readonly viewBox = input("0 0 1026 1025")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCreatefileIcon],svg[whh-createfile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M831.973 1024h-767q-27 0-45.5-18.5T.973 960V65q0-26 19-45t45-19h448v352q0 13 9 22.5t23 9.5h351v574q0 27-18.5 45.5t-45.5 18.5zm-255-384h-128V512q0-26-19-44.5t-45.5-18.5t-45 18.5t-18.5 44.5v128h-128q-27 0-45.5 19t-18.5 45t18.5 44.5t45.5 18.5h128v128q0 27 18.5 45.5t45 18.5t45.5-18.5t19-45.5V767h128q26 0 45-18.5t19-44.5t-19-45t-45-19m0-640q21 0 44 19l256 257q19 19 19 46h-319z"></svg:path>`,
})
export class WhhCreatefileIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCreatefolderIcon],svg[whh-createfolder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.678 896h-64v64q0 27-18.5 45.5t-45.5 18.5h-128q-26 0-45-18.5t-19-45.5v-64h-448q-53 0-90.5-37.5T.678 768V256q0-26 19-45t45-19h480l46-84q9-16 30-30t42-14h240q24 0 45 12.5t28 31.5q49 67 49 84v576q0 53-37.5 90.5t-90.5 37.5m0-256h-128V512q0-26-19-45t-45.5-19t-45 19t-18.5 45v128h-128q-27 0-45.5 19t-18.5 45.5t18.5 45t45.5 18.5h128v128q0 27 18.5 45.5t45 18.5t45.5-18.5t19-45.5V768h128q26 0 45-18.5t19-45t-19-45.5t-45-19m-850-596q7-19 28-31.5t44-12.5h240q24 0 45 12.5t29 31.5l48 84h-480z"></svg:path>`,
})
export class WhhCreatefolderIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCreativecommonsIcon],svg[whh-creativecommons-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m0-896q-104 0-192.5 51.5t-140 140T128 512t51.5 192.5t140 140T512 896t192.5-51.5t140-140T896 512t-51.5-192.5t-140-140T512 128m128 320q-27 0-45.5 18.5T576 512t18.5 45.5T640 576h110q-17 29-46 46.5T640 640q-53 0-90.5-37.5T512 512t37.5-90.5T640 384q35 0 64 17.5t46 46.5zm-320 64q0 26 19 45t45 19h110q-17 29-46 46.5T384 640q-53 0-90.5-37.5T256 512t37.5-90.5T384 384q35 0 64 17.5t46 46.5H384q-26 0-45 19t-19 45"></svg:path>`,
})
export class WhhCreativecommonsIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCreditcardIcon],svg[whh-creditcard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.31 768h-896q-27 0-45.5-18.5T.31 704V256h1024v448q0 27-18.5 45.5t-45.5 18.5m-800-128h256q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-256q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5m128-256h-128q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h128q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m192 0h-64q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m32 224q0 13 9.5 22.5t22.5 9.5h256q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-256q-13 0-22.5 9.5t-9.5 22.5m160-224h-64q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m192 0h-64q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5M.31 64q0-26 18.5-45t45.5-19h896q27 0 45.5 19t18.5 45v64H.31z"></svg:path>`,
})
export class WhhCreditcardIcon {
  readonly viewBox = input("0 0 1025 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCreeperIcon],svg[whh-creeper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m0-832h-256v256h-256V192h-256v256h256v128h-128v256h128V704h256v128h128V576h-128V448h256z"></svg:path>`,
})
export class WhhCreeperIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCricketIcon],svg[whh-cricket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.556 256q-53 0-90.5-37.5t-37.5-90.5t37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5m108 653l-95 95q-19 20-47 20t-48-20l-474-474q-20-20-20-48t20-47l9-9l-150-150l-177-96q-22-21-22-52t22-53l53-53q22-22 53-22t52 22l96 177l150 150l9-9q19-20 47-20t48 20l474 474q20 20 20 48t-20 47"></svg:path>`,
})
export class WhhCricketIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCroisantIcon],svg[whh-croisant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1023 288q0 8-1 14t-5 9.5t-6.5 5.5t-10 2.5t-11.5.5h-30q-12 0-27-10t-27-21.5t-31-21.5t-40-11l43-154q45 31 76 62l49 49q8 8 13 15t6.5 16t2 13t0 15.5t-.5 15.5m-319-32h-67q-31-54-83-123.5T455 10q189-35 361 54l-55 192zM552 371L371 552q-19 18-26 21t-32 3q-31 0-131-72T27 377q-17-17-24-47t2-56q35-92 106-163.5T274 5q26-9 56-2t47 23q55 56 127 156t72 131q0 25-3 32t-21 26M256 834q1 21 11 40t21.5 31t21.5 27t10 27q0 33-6.5 48.5T288 1023q-4 0-15.5.5t-15.5 0t-13-2t-16-6.5t-15-13l-49-49q-31-31-62-75zM64 816q-89-172-54-361q53 47 122.5 99T256 638v123z"></svg:path>`,
})
export class WhhCroisantIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCropIcon],svg[whh-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M890.585 221q6 20 6 36v512h64q26 0 45 18.5t19 45t-18.5 45.5t-45.5 19h-64v64q0 27-19 45.5t-45.5 18.5t-45-18.5t-18.5-45.5v-64h-512q-53 0-90.5-37.5t-37.5-90.5V257h-64q-26 0-45-18.5t-19-45.5t18.5-45.5t45.5-18.5h64V65q0-26 18.5-45t45.5-19t45.5 19t18.5 45v64h512q16 0 35 5l116-116q18-18 43.5-18t43.5 18t18 43.5t-18 43.5zm-122 122l-426 426h426zm-512-86v424l424-424z"></svg:path>`,
})
export class WhhCropIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCrownIcon],svg[whh-crown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.585 192h-2l2 444v4q0 26-19 45t-45 19h-768q-27 0-45.5-19t-18.5-45v-4l2-444h-2q-27 0-45.5-18.5T.585 128t18.5-45.5t45-18.5t45.5 18.5t19 45.5q0 33-27 52l219 310l166-368q-17-7-27.5-23t-10.5-35q0-27 18.5-45.5t45-18.5t45.5 18.5t19 45.5q0 19-10.5 35t-27.5 23l166 368l219-310q-27-19-27-52q0-27 18.5-45.5t45-18.5t45.5 18.5t19 45.5t-19 45.5t-45 18.5m-896 576h896q26 0 45 18.5t19 45t-19 45.5t-45 19h-896q-26 0-45-19t-19-45.5t18.5-45t45.5-18.5"></svg:path>`,
})
export class WhhCrownIcon {
  readonly viewBox = input("0 0 1025 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCsharpIcon],svg[whh-csharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.694 448h-32v128h32q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-32v32q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5v-32h-128v32q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5v-32h-32q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h32V448h-32q-13 0-22.5-9t-9.5-22.5t9.5-23t22.5-9.5h32v-32q0-13 9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5v32h128v-32q0-13 9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5v32h32q13 0 22.5 9.5t9.5 23t-9.5 22.5t-22.5 9m-224 0v128h128V448zm-319.5 320q26.5 0 45 19t18.5 45v6q-1 50-21.5 86.5t-56 58t-79.5 31.5t-99 10q-106 0-181-75t-75-181V256q0-106 75-181t181-75q115 0 185.5 58.5t70.5 133.5q0 27-18.5 45.5t-45 18.5t-45.5-18.5t-19-45.5q0-19-6-31.5t-14-19t-25.5-9.5t-29-3.5t-36.5-.5h-17q-53 0-90.5 37.5t-37.5 90.5v512q0 53 37.5 90.5t90.5 37.5h53.5l29-3.5l25.5-10l14-19l6-31.5q0-26 19-45t45.5-19"></svg:path>`,
})
export class WhhCsharpIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCssthreeIcon],svg[whh-cssthree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m832 896l-384 128L64 896L0 0h896zM128 128l12 128h436v128H151l12 128h413v192l-128 32l-128-32V576H169l23 256l256 64l256-64l64-704z"></svg:path>`,
})
export class WhhCssthreeIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCubeIcon],svg[whh-cube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1007V559l448-239v448zM0 256L480 0l480 256l-480 256zm448 751L0 768V320l448 239z"></svg:path>`,
})
export class WhhCubeIcon {
  readonly viewBox = input("0 0 960 1007")
  readonly width = input("0.96em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCuckooclockIcon],svg[whh-cuckooclock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1005.5 556q-18.5 19-45 19T916 556l-30-29l-54 444q-4 22-23 37t-43 15H258q-24 0-43-15t-23-37l-54-444l-30 29q-18 19-44.5 19t-45-19T0 511t19-45L467 18q19-19 45-18q27 0 45 18l448 448q19 19 19 45t-18.5 45M512 383q-106 0-181 75t-75 181t75 181t181 75t181-75t75-181t-75-181t-181-75m21 279q-9 9-21.5 9t-21.5-9l-98-98q-9-9-9-22t9-22t22-9t22 9l76 77l108-109q9-9 21.5-9t21.5 9t9 22t-9 22z"></svg:path>`,
})
export class WhhCuckooclockIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCupcakeIcon],svg[whh-cupcake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 640q-139 0-257-34.5T68.5 512T0 384q0-80 89-144.5T322 146q7 74 61.5 124T512 320t128.5-50T702 146q144 29 233 93.5t89 144.5q0 69-68.5 128T769 605.5T512 640m0-384q-53 0-90.5-37.5T384 128t37.5-90.5T512 0t90.5 37.5T640 128t-37.5 90.5T512 256M220 979q-92-36-92-83L64 576q53 53 130 84zm39-298q56 14 125 20v316q-52-7-98-18zm317 22v319q-34 2-64 2t-64-2V703q25 1 64 1q40 0 64-1m162 296q-46 11-98 18V701q69-6 125-20zm222-423l-64 320q0 47-92 83l26-319q77-31 130-84"></svg:path>`,
})
export class WhhCupcakeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCurlingIcon],svg[whh-curling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 864q0 28-34.5 53T765 960H259q-62-18-96.5-43T128 864L0 800V384l128-64q0-28 34.5-53t96.5-43h320l-96-96H192q-27 0-45.5-19T128 63.5t18.5-45T192 0h320q1 0 3 .5l2 .5q7 0 14 2t15 7q2 1 3 2q10 7 11 7l205 205q62 18 96.5 43t34.5 53l128 64v416zm-704-32q0 37 109 64h422q109-27 109-64l128-68V510q-67 30-186.5 48T512 576t-261.5-18T64 510v254zm656-448h-4q-51 29-139 46.5T512 448t-193-17.5T180 384h-4L64 434v12q66 30 185.5 48T512 512t262.5-18T960 446v-12z"></svg:path>`,
})
export class WhhCurlingIcon {
  readonly viewBox = input("0 0 1024 960")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCurrencyIcon],svg[whh-currency-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.127 672q-13 0-22.5-9.5t-9.5-22.5v-1q-1-30-38.5-46.5t-89.5-16.5q-64 0-99 64h67q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-89q-7 31-7 64h96q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-89q11 55 41 91.5t80 36.5q52 0 89.5-16.5t38.5-46.5v-1q0-13 9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5q0 64-52 96t-140 32q-83 0-129-53.5t-58-138.5h-37q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h32q0-32 5-64h-37q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h52q46-128 172-128q88 0 140 32t52 96q0 13-9.5 22.5t-22.5 9.5m-64-288h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13-9.5-22.5t-22.5-9.5h-96v57q-10 7-23 7t-23-7l-136-104q-10-7-10-17t10-17l136-104q10-7 23-7t23 7v57h96q72 0 116 44t44 116v64q0 13-9.5 22.5t-22.5 9.5m-562 569q-10 7-23 7t-23-7v-57h-96q-72 0-116-44t-44-116v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h96v-57q10-7 23-7t23 7l136 104q10 7 10 17t-10 17zm-142-697q224 0 224 128q0 118-192 127v33q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5v-33q-192-9-192-127q0-13 9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5v1q1 31 46.5 47t113.5 16q69 0 114.5-16.5t45.5-47.5t-45.5-47.5t-114.5-16.5q-224 0-224-128q0-118 192-127V32q0-13 9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5v33q192 9 192 127q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5v-1q-1-31-46.5-47t-113.5-16q-69 0-114.5 16.5t-45.5 47.5t45.5 47.5t114.5 16.5"></svg:path>`,
})
export class WhhCurrencyIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCurrentsIcon],svg[whh-currents-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5M299 906q99 54 213 54q122 0 225-61t162-163q-48 46-115 71t-144 25q-150 0-235-85t-85-235q0-68 45-122q-81 39-127 111.5T192 672q0 59 28 122.5T299 906m213-266q53 0 90.5-37.5T640 512t-37.5-90.5T512 384t-90.5 37.5T384 512t37.5 90.5T512 640M125 288q48-46 115-71t144-25q150 0 235 85t85 235q0 68-45 122q81-39 127-111.5T832 352q0-59-28-122.5T725 118q-99-54-213-54q-122 0-225 61T125 288"></svg:path>`,
})
export class WhhCurrentsIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCursorIcon],svg[whh-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M622 637H368l142 296q12 24 3 48.5t-33.5 36t-49.5 2.5t-37-32L257 703L65 895q-27 0-46-19T0 831V24Q0 9 17.5 3T58 3t39 21l516 516q13 13 21.5 36t6 42t-18.5 19"></svg:path>`,
})
export class WhhCursorIcon {
  readonly viewBox = input("0 0 642 1024")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCutIcon],svg[whh-cut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 833q-37 0-68-19.5T781 761l-38-17l17 38q32 16 52 47t20 68q0 53-37.5 90.5T704 1025t-90.5-37.5T576 897q0-34 17-63t45-46l-50-113l-76-34Q224 480 102 389.5T4 258l508 255L257 4q41-24 130.5 97.5T640 513l34 76l113 50q17-28 46-45t63-17q53 0 90.5 37.5T1024 705t-37.5 90.5T896 833m-256 64.5q0 26.5 19 45t45.5 18.5t45-18.5t18.5-45t-18.5-45.5t-45-19t-45.5 19t-19 45.5M896.5 641q-26.5 0-45.5 19t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45t-18.5-45.5t-45-19"></svg:path>`,
})
export class WhhCutIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhCuthereIcon],svg[whh-cuthere-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.013 1024v-64h128v64zm-460-512l441 384h-160q-212-122-340-236q7 22 7 44q0 54-25 113t-71 101t-96 42q-80 0-136-56t-56-136t56-136t136-56q4 0 21 1q6-32 34-74q-16-30-20-56q-19 1-35 1q-80 0-136-56t-56-136t56-136t136-56q50 0 96 42t71 101t25 113q0 26-10 50q146-120 358.5-245t291.5-125zm-244-384q-53 0-90.5 37.5t-37.5 90.5t37.5 90.5t90.5 37.5h17q24 0 36-.5t29.5-3.5t25.5-9.5t14-19t6-31.5q0-36-16.5-80.5t-47.5-78t-64-33.5m0 512q-53 0-90.5 37.5t-37.5 90.5t37.5 90.5t90.5 37.5q33 0 64-33.5t47.5-78t16.5-80.5q0-19-6-31.5t-14-19t-25.5-9.5t-29.5-3.5t-36-.5zm256 384h-128v-64h128zm192 0h-128v-64h128zm192 0h-128v-64h128z"></svg:path>`,
})
export class WhhCuthereIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDIcon],svg[whh-d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024H64q-27 0-45.5-18.5T0 960V64q0-26 18.5-45T64 0h448q106 0 181 75t75 181v512q0 106-75 181t-181 75m128-768q0-53-37.5-90.5T512 128H160q-13 0-22.5 9.5T128 160v704q0 13 9.5 22.5T160 896h352q53 0 90.5-37.5T640 768z"></svg:path>`,
})
export class WhhDIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDUpperCaseIcon],svg[whh-d-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024H64q-27 0-45.5-18.5T0 960V64q0-26 18.5-45T64 0h448q106 0 181 75t75 181v512q0 106-75 181t-181 75m128-768q0-53-37.5-90.5T512 128H160q-13 0-22.5 9.5T128 160v704q0 13 9.5 22.5T160 896h352q53 0 90.5-37.5T640 768z"></svg:path>`,
})
export class WhhDUpperCaseIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDaggerIcon],svg[whh-dagger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1014.957 963l-51 51q-10 10-24.5 10t-25.5-10l-328-329l-77 78q-6 5-14 5t-13-5l-28-27q-5-6-5-14t5-14l29-29l-226-199q-75-75-161-229.5T.957 0q11 13 27 29t37.5 36.5t31.5 30.5q73 73 154 123.5t99 32.5l.5-.5l.5-1.5l281 281l13-14q6-5 14-5t14 5l27 28q6 5 6 13t-6 14l-13 13l328 328q10 11 10 25.5t-10 24.5"></svg:path>`,
})
export class WhhDaggerIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDangerIcon],svg[whh-danger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m882 566l142 160l-174 47l46 122l-165-46l-59 174l-158-105l-74 105l-67-128H192l16-116H52l73-173L0 536l95-76L1 324l191-47V128l87 57L324 0l161 135L633 0l32 115l115-64l28 170l152-29l-68 154l131 93zM576 288q0-14-9.5-23t-22.5-9h-64q-13 0-22.5 9t-9.5 23v256q0 13 9.5 22.5T480 576h64q13 0 22.5-9.5T576 544zm0 384q0-14-9.5-23t-22.5-9h-64q-13 0-22.5 9t-9.5 23v63q0 14 9.5 23t22.5 9h64q13 0 22.5-9t9.5-23z"></svg:path>`,
})
export class WhhDangerIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDartIcon],svg[whh-dart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m849.236 757l-75-75l33-34q21 6 55 15t53.5 14.5t40 14.5t31.5 19q42 43 36 104zm-144-6l46-46q37 41 84 99.5t76 96.5l28 38q-140-101-234-188m-470-310q-43-43-43-103.5t42.5-103t103-42.5t103.5 42.5t295 373.5l-128 128q-330-252-373-295M.236 0q14 9 37 24t79 58t95 82l-47 47q-41-41-81.5-93.5t-62-85T.236 0m757 849l58 174q-61 6-104-36q-10-11-19-31.5t-14.5-40t-14.5-53.5t-15-55l34-33z"></svg:path>`,
})
export class WhhDartIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDarthvaderIcon],svg[whh-darthvader-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M872 461q-29-48-82-66q-68-41-150-60V45q117 25 186.5 95T896 320q0 93-6 168q-5-12-18-27M448 324V32q0-13 9.5-22.5T480 0h64q13 0 22.5 9.5T576 32v292q-34-4-63.5-4t-64.5 4M152 460q-13 16-18 28q-6-75-6-168q0-108 70-178t186-96v289q-82 19-150 60q-53 18-82 65m136 181q-40 0-68-28.5t-28-68t28-67.5t68-28t68 28t28 67.5t-28 68t-68 28.5m352-96.5q0-39.5 28-67.5t68-28t68 28t28 67.5t-28 68t-68 28.5t-68-28.5t-28-68M288 705q66 0 113-47t47-113q0-48-25.5-86.5T356 400q78-16 156-16q77 0 156 16q-42 20-67 59t-25 86q0 66 47 113t113 47q65 0 111.5-45.5T896 550l128 411q-17 0-54.5-9t-102-26.5T757 897q-56 63-128 95.5T512 1025t-117-32.5T267 897q-46 11-110 28.5T55 952t-55 9l128-411q2 64 48.5 109.5T288 705m64 192h320q13 0 22.5-9.5T704 865q-3-7-8-14L576 641H448L328 851l-8 14q0 13 9.5 22.5T352 897m192-192l64 128H416l64-128z"></svg:path>`,
})
export class WhhDarthvaderIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDatabaseIcon],svg[whh-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512.59 1024q-139 0-257-17T69.094 960.5T.59 896V768q0-8 6-19q62 37 202.5 60t303.5 23t303.5-23t202.5-60q6 11 6 19v128q0 35-68.5 64.5t-186.5 46.5t-257 17m0-256q-139 0-257-17T69.094 704.5T.59 640V512q0-8 6-19q62 37 202.5 60t303.5 23t303.5-23t202.5-60q6 11 6 19v128q0 35-68.5 64.5T769.59 751t-257 17m0-256q-139 0-257-17T69.094 448.5T.59 384V256q0-8 6-19q62 37 202.5 60t303.5 23t303.5-23t202.5-60q6 11 6 19v128q0 35-68.5 64.5T769.59 495t-257 17m0-256q-139 0-257-17T69.094 192.5T.59 128t68.5-64.5T255.59 17t257-17t257 17t186.5 46.5t68.5 64.5t-68.5 64.5t-186.5 46.5t-257 17"></svg:path>`,
})
export class WhhDatabaseIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDatabaseaddIcon],svg[whh-databaseadd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024.591 768v128q.002 48-123.998 83.5t-310 42.5q-7 2-14 2h-128q-7 0-14-2q-186-7-310-42.5T.593 896V768q0-8 6-19q62 37 201 60q-15-18-15-41v-28q-89-18-140.5-44t-51.5-56V512q0-8 6-18q49 28 150.5 49t227.5 29v-64q-167-11-275.5-45.5T.59 384V256q0-8 6-18q62 36 202.5 59t303.5 23t303.5-23t202.5-59q6 10 6 18v128q0 44-108.5 78.5T640.59 508v64q126-8 227.5-29t150.5-49q6 10 6 18v128q0 30-51 56t-141 44v28q0 23-15 41q139-23 201-60q6 11 6 19zM704.593 640h-128V512q0-26-19-45t-45-19t-45 19t-19 45v128h-128q-26 0-45 19t-19 45.5t19 45t45 18.5h128v128q0 27 19 45.5t45 18.5t45-18.5t19-45.5V768h128q26 0 45-18.5t19-45t-19-45.5t-45-19m-192-384q-139 0-257-17t-186.5-46.5T.593 128t68.5-64.5t186.5-46.5t257-17t257 17t186.5 46.5t68.5 64.5t-68.5 64.5t-186.5 46.5t-257 17"></svg:path>`,
})
export class WhhDatabaseaddIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDatabasedeleteIcon],svg[whh-databasedelete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M793.59 812q158-23 225-63q6.002 11 6.002 19v128q0 35-68.5 64.5t-186.5 46.5t-257 17t-257-17t-186.5-46.5T.592 896V768q0-8 6-19q67 40 224 63q5-11 12-19l39-39q-127-16-204-46.5t-77-67.5V512q0-8 6-18q66 38 220 61q5-19 16-31l28-27q-123-17-196.5-47t-73.5-66V256q0-8 6-18q62 36 202.5 59t303.5 23t303.5-23t202.5-59q6 10 6 18v128q0 36-74 66.5t-196 46.5l27 27q11 12 16 32q155-23 221-62q6 10 6 18v128q0 37-77.5 67.5T742.59 754l39 39q7 8 12 19m-107-196q18-18 18-43.5t-18-43.5t-43.5-18t-43.5 18l-88 87l-87-87q-17.998-18-43.498-18t-43.5 18t-18 43.5t18 43.5l87 88l-87 87q-18 18-18 43.5t18 43.5t43.5 18t43.5-18l87-87l88 87q18 18 43.5 18t43.5-18t18-43.5t-18-43.5l-87-87zm-174-360q-139 0-257-17T69.094 192.5T.59 128t68.5-64.5T255.59 17t257-17t257 17t186.5 46.5t68.5 64.5t-68.5 64.5t-186.5 46.5t-257 17"></svg:path>`,
})
export class WhhDatabasedeleteIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDavidstarIcon],svg[whh-davidstar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M897 768H608l-160 256l-160-256H0l128-256L0 256h288L448 0l160 256h289L768 512zm-97-64l-67-135l-85 135zM448 896l86-128H363zM96 704h152l-84-135zm0-384l68 135l84-135zm352-192l-85 128h171zm128 192H320L192 512l128 192h256l128-192zm224 0H648l85 135z"></svg:path>`,
})
export class WhhDavidstarIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDayIcon],svg[whh-day-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 374q-97 62-96 137q2 78 96 137q-255 12-137 238q-227-118-238 137q-62-97-137-96q-77 2-137 96q-11-255-238-137Q255 660 0 648q97-62 96-137q-2-77-96-137q255-11 137-237Q364 254 375 0q60 93 137 95q75 2 137-95q11 254 238 137q-118 226 137 237M512 191q-87 0-161 43T234.5 350.5T192 511t42.5 161T351 788.5T512 831t161-42.5T789.5 672T832 511t-42.5-160.5T673 234t-161-43m0 576q-106 0-181-75t-75-181t75-181t181-75t181 75t75 181t-75 181t-181 75"></svg:path>`,
})
export class WhhDayIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDcsourceIcon],svg[whh-dcsource-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 192h-96v96q0 13-9.5 22.5T864 320t-22.5-9.5T832 288v-96h-96q-13 0-22.5-9.5T704 160t9.5-22.5T736 128h96V32q0-13 9.5-22.5T864 0t22.5 9.5T896 32v96h96q13 0 22.5 9.5t9.5 22.5t-9.5 22.5T992 192m32 256q0 27-18.5 45.5T960 512H640v256q0 27-19 45.5T575.5 832t-45-18.5T512 768V128q0-27 18.5-45.5t45-18.5T621 82.5t19 45.5v256h320q27 0 45.5 18.5T1024 448M319.5 640q-26.5 0-45-18.5T256 576v-64H64q-27 0-45.5-18.5T0 448.5T18.5 403T64 384h192v-64q0-27 18.5-45.5t45-18.5t45.5 19t19 45v256q0 27-19 45.5T319.5 640"></svg:path>`,
})
export class WhhDcsourceIcon {
  readonly viewBox = input("0 0 1024 832")
  readonly width = input("1.24em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDeathstarIcon],svg[whh-deathstar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1010 629q-202 75-498 75T14 629Q0 569 0 512q0-104 40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199q0 57-14 117M443 143.5Q389 115 323.5 137t-103 81.5T195 341t66 91.5t119.5 6.5t103-81.5T509 235t-66-91.5M352 320q-13 0-22.5-9.5T320 288t9.5-22.5T352 256t22.5 9.5T384 288t-9.5 22.5T352 320m650 341q-49 160-184 261.5T512 1024T206 922.5T22 661q203 107 490 107t490-107"></svg:path>`,
})
export class WhhDeathstarIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDeathstarbuildingIcon],svg[whh-deathstarbuilding-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 576H768v64h128v23q-167 41-384 41q-137 0-256-17v-47H128v-64H64v64H46q-24-8-32-11Q0 569 0 512q0-104 40.5-199t109-163.5T313 40.5T512 0q95 0 182 33.5T850 128H704v64h128v64h64v64H768v64h128v64h124q4 33 4 64H896zM443 143.5Q389 115 323.5 137t-103 81.5T195 341t66 91.5t119.5 6.5t103-81.5T509 235t-66-91.5M352 320q-13 0-22.5-9.5T320 288t9.5-22.5T352 256t22.5 9.5T384 288t-9.5 22.5T352 320M128 708v60h384q219 0 384-60v60h-64v64H704v64h64v58l-6 3l-5 3h-53v26q-93 38-192 38q-159 0-288-88.5T38 704h79q2 1 5.5 2t5.5 2"></svg:path>`,
})
export class WhhDeathstarbuildingIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDebugIcon],svg[whh-debug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1016.554 974l-41 41q-9 8-21 8t-20-8l-151-151q-53 31-111 31q-93 0-158.5-65.5t-65.5-158.5q0-65 35-119.5t93-81.5v-86h-32q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v99q23-3 32-3q91 0 157 64h3V384h-32q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v160h32q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-54q22 47 22 95q0 59-31 112l151 150q8 9 8 20.5t-8 20.5m-344-462q-66 0-113 46.5t-47 113t47 113t113 46.5t113-46.5t47-113t-47-113t-113-46.5m256-256h-128q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5m-32-160q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5zm-224 160h-128q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h32V64h-32q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v160h32q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m-256 320h-128q-13 0-22.5-9.5t-9.5-22.5V352q0-13 9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5m-32-160q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5zm32-160h-128q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h32V64h-32q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v160h32q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m-256 640h-128q-13 0-22.5-9.5T.554 864V672q0-13 9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5m-32-160q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5zm32-160h-128q-13 0-22.5-9.5T.554 544t9.5-22.5t22.5-9.5h32V384h-32q-13 0-22.5-9.5T.554 352t9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v160h32q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m0-320h-128q-13 0-22.5-9.5T.554 224V32q0-13 9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5m-32-160q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5zm160 608q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v160h32q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-128q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h32V704z"></svg:path>`,
})
export class WhhDebugIcon {
  readonly viewBox = input("0 0 1025 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDedicatedserverIcon],svg[whh-dedicatedserver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024.428 832v64q0 53-37.5 90.5t-90.5 37.5h-64v-64h-640v64h-64q-53 0-90.5-37.5T.428 896v-64h64V192h-64v-64q0-53 37.5-90.5t90.5-37.5h64v64h640V0h64q53 0 90.5 37.5t37.5 90.5v64h-64v640zm-832-544q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5zm128 0q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5zm-96 352q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m224-352q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5zm192 0q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5zm128 0q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5zm128 0q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5zm-32 352h-448q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h448q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m0 128h-448q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h448q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5"></svg:path>`,
})
export class WhhDedicatedserverIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDefragmentIcon],svg[whh-defragment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 192V64h128v128zm64 192H832V256h128zM704 0h128v128H704zm0 256v128h-64v128H512V384h64V256zm-64 448h128v-64H640V512h128v-64h128v448q0 53-37.5 90.5T768 1024H256q-53 0-90.5-37.5T128 896v-64h128v-64H128V640h128v64h256v-64h128zM512 832h128v-64H512zM384 640v-64H256V448h128v64h128v128zm64-256H320V256h128zm0-320h128v128H448zM192 0h128v128H192zm0 320H64V192h128zm-64 256H0V448h128z"></svg:path>`,
})
export class WhhDefragmentIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDeleteIcon],svg[whh-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.865 192h-896q-26 0-45-18.5t-19-45t18.5-45.5t45.5-19h320q0-26 18.5-45t45.5-19h128q27 0 45.5 19t18.5 45h320q26 0 45 19t19 45.5t-19 45t-45 18.5m0 704q0 53-37.5 90.5t-90.5 37.5h-640q-53 0-90.5-37.5t-37.5-90.5V256h896zm-640-448q0-26-19-45t-45.5-19t-45 19t-18.5 45v384q0 27 18.5 45.5t45 18.5t45.5-18.5t19-45.5zm256 0q0-26-19-45t-45.5-19t-45 19t-18.5 45v384q0 27 18.5 45.5t45 18.5t45.5-18.5t19-45.5zm256 0q0-26-19-45t-45.5-19t-45 19t-18.5 45v384q0 27 18.5 45.5t45 18.5t45.5-18.5t19-45.5z"></svg:path>`,
})
export class WhhDeleteIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDeletealarmIcon],svg[whh-deletealarm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M983.557 320h-3q-11 1-27-2q-85-145-238-211q-6-23-8.5-36.5t-2-28.5t7.5-23t22-13.5t40-5.5q104 0 177 73.5t73 176.5q0 67-41 70m-23 256q0 91-35.5 174t-95.5 143t-143 95.5t-174 35.5t-174-35.5t-143-95.5t-95.5-143t-35.5-174t35.5-174t95.5-143t143-95.5t174-35.5t174 35.5t143 95.5t95.5 143t35.5 174m-448-320q-87 0-160.5 43t-116.5 116.5t-43 160.5t43 160.5t116.5 116.5t160.5 43t160.5-43t116.5-116.5t43-160.5t-43-160.5t-116.5-116.5t-160.5-43m224 384h-448q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h448q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-665-322q-15 3-27 2h-3q-41-3-41-70q0-103 73-176.5t177-73.5q25 0 40 5.5t22 13.5t7.5 23t-2 28.5t-8.5 36.5q-153 66-238 211"></svg:path>`,
})
export class WhhDeletealarmIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDeletecommentIcon],svg[whh-deletecomment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 896q-66 0-134-16q-103 121-201 142l-17 2q26-57 30-124.5T176 786Q94 723 47 635T0 448q0-91 40.5-174t109-143T313 35.5T512 0t199 35.5T874.5 131t109 143t40.5 174t-40.5 174t-109 143T711 860.5T512 896m256-480q0-13-9.5-22.5T736 384H288q-13 0-22.5 9.5T256 416v64q0 13 9.5 22.5T288 512h448q13 0 22.5-9.5T768 480z"></svg:path>`,
})
export class WhhDeletecommentIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDeletefileIcon],svg[whh-deletefile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M831.405 1024h-767q-27 0-45.5-18.5T.405 960V65q0-27 18.5-45.5T64.405 1h448v352q0 13 9 22.5t23 9.5h351v575q0 27-18.5 45.5t-45.5 18.5m-242-439q18-18 18-43.5t-18-43.5t-43.5-18t-43.5 18l-119 119l-119-119q-18-18-43.5-18t-43.5 18t-18 43.5t18 43.5l119 119l-119 119q-18 18-18 43.5t18 43.5t43.5 18t43.5-18l119-119l119 119q18 18 43.5 18t43.5-18t18-43.5t-18-43.5l-119-119zm-13-585q26 0 44 18l256 257q19 19 19 46h-319z"></svg:path>`,
})
export class WhhDeletefileIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDeletefolderIcon],svg[whh-deletefolder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M988.94 855q9 35-15 60l-90 89q-25 25-61 16q-36 9-61-16l-89-89l-90 89q-25 25-61 16q-36 9-61-16l-90-89q-7-8-12-19h-230q-53 0-90.5-37.5T.94 768V256q0-27 19-45.5t45-18.5h480l46-85q9-16 30-29.5t42-13.5h240q24 0 45 12.5t28 30.5q49 68 49 85v576q0 49-36 87m-110-239q18-18 18-43.5t-18-43.5t-43.5-18t-43.5 18l-119 119l-120-119q-18-18-43.5-18t-43.5 18t-18 43.5t18 43.5l119 119l-119 119q-18 18-18 43.5t18 43.5t43.5 18t43.5-18l120-119l119 119q18 18 43.5 18t43.5-18t18-43.5t-18-43.5l-119-119zm-832-573q7-18 28-30.5t44-12.5h240q24 0 45 12.5t29 30.5l48 85H.94z"></svg:path>`,
})
export class WhhDeletefolderIcon {
  readonly viewBox = input("0 0 1025 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDeletefolderaltIcon],svg[whh-deletefolderalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.232 896h-896q-27 0-45.5-19t-18.5-45V256h1024v576q0 26-19 45t-45 19m-64-352q0-13-9.5-22.5t-22.5-9.5h-320q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h320q13 0 22.5-9.5t9.5-22.5zM.232 64q0-27 18.5-45.5T64.232 0h384q27 0 45.5 18.5t18.5 45.5t18.5 45.5t45.5 18.5h384q27 0 45.5 19t18.5 45H.232z"></svg:path>`,
})
export class WhhDeletefolderaltIcon {
  readonly viewBox = input("0 0 1025 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDeliciousIcon],svg[whh-delicious-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m64-896q0-27-18.5-45.5t-45.5-18.5h-384v448h-448v384q0 27 19 45.5t45 18.5h384V512h448z"></svg:path>`,
})
export class WhhDeliciousIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDesignIcon],svg[whh-design-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m692.43 487l65 65l-81 81q-9 9 0 18l17 17q9 9 18 0l81-81l125 125l-81 81q-9 9 0 17l17 18q9 9 18 0l81-81l63 63q9 9 9 22t-9 23l-160 160q-10 9-23 9t-22-9l-323-323l-188 188q-16 16-39 16t-39-16l-76-77q-16-16-16-38.5t16-38.5l188-188l-324-324q-9-9-9-22t9-22l160-161q10-9 23-9t22 9l63 63l-81 81q-9 9 0 18l17 17q9 9 18 0l81-81l125 125l-81 81q-9 9 0 18l17 17q9 9 18 0l81-81l65 66l317-317q16-16 38.5-16t38.5 16l77 77q16 16 16 38.5t-16 38.5zm-626 321q2 8 7 13l130 130q5 5 13 7q-5 10-8 12l-176 54q-24 0-28-4t-4-28l54-176q2-2 12-8"></svg:path>`,
})
export class WhhDesignIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDesigncontestIcon],svg[whh-designcontest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M913 326L658 580L401 325q-15-15-36.5-15T328 325t-15 36.5t15 36.5l367 363q46 46 46 110t-46 109t-110.5 45T475 980L107 616q-69-69-94-162t0-185.5t94.5-162t163.5-94t187.5 0T622 107l36 36l47-46q21-21 57-29.5t78.5 2T913 110q47 47 47.5 109T913 326m-240-5L545 193q-62-62-130-84t-129-4.5T173 174q-50 50-68 112.5t-3 122T161 513l384 384q32 32 64 0t0-64L238 461q-46-46-46-111t46-112q30-29 71.5-40t79-3.5T449 225l160 160q15 15 32 15t32-15q32-32 0-64"></svg:path>`,
})
export class WhhDesigncontestIcon {
  readonly viewBox = input("0 0 961 1025")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDesklampIcon],svg[whh-desklamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 576q-128-93-128-223q0-50 17-97l-18-18l-267 267l206 391h254q26 0 45 19t19 45.5t-19 45t-45 18.5H64q-26 0-45-18.5t-19-45T19 915t45-19h186L68 553l-13 13q-9 10-22.5 10t-23-9.5t-9.5-23T9 521l28-28l-32-61q-7-11-3.5-24t15-20t24-3.5T60 400l24 46l256-255q-24-36-20-80t35-75q36-36 87-36t87 36l46 46q48-17 97-17q131 0 224 128z"></svg:path>`,
})
export class WhhDesklampIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDetailsIcon],svg[whh-details-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.488 768h-448q-27 0-45.5-18.5t-18.5-45.5t18.5-45.5t45.5-18.5h448q27 0 45.5 18.5t18.5 45.5t-18.5 45.5t-45.5 18.5m0-384h-448q-27 0-45.5-19t-18.5-45.5t18.5-45t45.5-18.5h448q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19m0-256h-448q-27 0-45.5-19t-18.5-45.5t18.5-45t45.5-18.5h448q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19m-640 896h-256q-27 0-45.5-18.5T.488 960V704q0-27 18.5-45.5t45.5-18.5h256q26 0 45 18.5t19 45.5v256q0 27-19 45.5t-45 18.5m0-640h-256q-27 0-45.5-19t-18.5-45V64q0-27 18.5-45.5T64.488 0h256q26 0 45 18.5t19 45.5v256q0 26-19 45t-45 19m192 512h448q27 0 45.5 18.5t18.5 45.5t-19 45.5t-45 18.5h-448q-27 0-45.5-18.5t-18.5-45.5t18.5-45.5t45.5-18.5"></svg:path>`,
})
export class WhhDetailsIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDetailsaltIcon],svg[whh-detailsalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.193 896h-576q-27 0-45.5-19t-18.5-45.5t18.5-45t45.5-18.5h576q27 0 45.5 18.5t18.5 45t-19 45.5t-45 19m32-256h-640q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h640q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m-32-128h-576q-27 0-45.5-18.5t-18.5-45.5t18.5-45.5t45.5-18.5h576q27 0 45.5 19t18.5 45.5t-19 45t-45 18.5m32-256h-640q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h640q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m-32-128h-576q-27 0-45.5-18.5t-18.5-45.5t18.5-45.5t45.5-18.5h576q27 0 45.5 18.5t18.5 45.5t-19 45.5t-45 18.5m-768 896h-128q-27 0-45.5-18.5T.193 960V832q0-27 18.5-45.5t45.5-18.5h128q27 0 45.5 18.5t18.5 45.5v128q0 27-18.5 45.5t-45.5 18.5m0-384h-128q-27 0-45.5-19t-18.5-45V448q0-27 18.5-45.5t45.5-18.5h128q26 0 45 19t19 45v128q0 27-18.5 45.5t-45.5 18.5m0-384h-128q-27 0-45.5-18.5T.193 192V64q0-26 18.5-45t45.5-19h128q27 0 45.5 19t18.5 45v128q0 27-19 45.5t-45 18.5m160 704h640q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-640q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5"></svg:path>`,
})
export class WhhDetailsaltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDeviantartIcon],svg[whh-deviantart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-768-64h768q27 0 45.5-18.5t18.5-45.5V613l-320 91l-160-256h160l68 101l219-58q-155-107-351-107q-94 0-183 27l183 325l-512 122v38q0 27 19 45.5t45 18.5m238-319l-96-181q-48 24-78.5 47.5t-43.5 47.5t-16.5 41.5t-3.5 43.5q0 29 2 63zm530-577h-768q-26 0-45 18.5t-19 45.5v271q70-45 136-71l-72-136h128l61 97q128-33 259-33q203 0 384 76V128q0-27-18.5-45.5t-45.5-18.5"></svg:path>`,
})
export class WhhDeviantartIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDialpadIcon],svg[whh-dialpad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M887.62 751h-136q-28 0-48-20t-20-48v-69q0-28 20-48t48-20h136q29 0 49 20t20 48v69q0 28-20 48t-49 20m0-273h-136q-28 0-48-20t-20-48v-69q0-28 20-48t48-20h136q29 0 49 20t20 48v69q0 28-20 48t-49 20m0-273h-136q-28 0-48-20t-20-48V68q0-28 20-48t48-20h136q29 0 49 20t20 48v69q0 28-20 48t-49 20m-341 819h-136q-29 0-49-20t-20-48v-69q0-28 20-48t49-20h136q28 0 48 20t20 48v69q0 28-20 48t-48 20m0-273h-136q-29 0-49-20t-20-48v-69q0-28 20-48t49-20h136q28 0 48 20t20 48v69q0 28-20 48t-48 20m0-273h-136q-29 0-49-20t-20-48v-69q0-28 20-48t49-20h136q28 0 48 20t20 48v69q0 28-20 48t-48 20m0-273h-136q-29 0-49-20t-20-48V68q0-28 20-48t49-20h136q28 0 48 20t20 48v69q0 28-20 48t-48 20m-341 546h-137q-28 0-48-20t-20-48v-69q0-28 20-48t48-20h137q28 0 48 20t20 48v69q0 28-20 48t-48 20m0-273h-137q-28 0-48-20t-20-48v-69q0-28 20-48t48-20h137q28 0 48 20t20 48v69q0 28-20 48t-48 20m0-273h-137q-28 0-48-20t-20-48V68q0-28 20-48t48-20h137q28 0 48 20t20 48v69q0 28-20 48t-48 20"></svg:path>`,
})
export class WhhDialpadIcon {
  readonly viewBox = input("0 0 957 1024")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDiamondIcon],svg[whh-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m896 0l128 256H768zM576 0h256L704 256zM384 256L512 0l128 256zM192 0h256L320 256zM0 256L128 0l128 256zm448 640L0 320h256zm256-576L512 896L320 320zm320 0L576 896l192-576z"></svg:path>`,
})
export class WhhDiamondIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDiamondsIcon],svg[whh-diamonds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 512q14-7 39-21t92.5-64T256 320q36-36 68.5-82t54-86.5t38-75.5T440 21l8-21q2 8 7 21.5T478 75t38.5 77.5t54 84.5t69.5 83q56 57 120 105t100 67l35 20q-14 7-39 21.5t-92.5 64T640 704q-36 36-69 82t-54.5 86.5t-38 75.5t-23.5 55l-7 21q-3-8-8-21.5T417 949t-38.5-77.5T325 787t-69-83q-57-57-121.5-105T36 531.5T0 512"></svg:path>`,
})
export class WhhDiamondsIcon {
  readonly viewBox = input("0 0 895 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDiceIcon],svg[whh-dice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 959H128q-53 0-90.5-37.5T0 831V127q0-53 37.5-90T128 0h704q53 0 90.5 37t37.5 90v704q0 53-37.5 90.5T832 959M224 127q-40 0-68 28.5t-28 68t28 67.5t68 28t68-28t28-67.5t-28-68t-68-28.5m0 512q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m256-256q-40 0-68 28.5t-28 68t28 67.5t68 28t68-28t28-67.5t-28-68t-68-28.5m256-256q-40 0-68 28.5t-28 68t28 67.5t68 28t68-28t28-67.5t-28-68t-68-28.5m0 512q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28"></svg:path>`,
})
export class WhhDiceIcon {
  readonly viewBox = input("0 0 960 959")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDiefiveIcon],svg[whh-diefive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 959H128q-53 0-90.5-37.5T0 831V127q0-52 37.5-89.5T128 0h704q53 0 90.5 37t37.5 90v704q0 53-37.5 90.5T832 959M224 127q-40 0-68 28.5t-28 68t28 67.5t68 28t68-28t28-67.5t-28-68t-68-28.5m0 512q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m256-256q-40 0-68 28.5t-28 68t28 67.5t68 28t68-28t28-67.5t-28-68t-68-28.5m256-256q-40 0-68 28.5t-28 68t28 67.5t68 28t68-28t28-67.5t-28-68t-68-28.5m0 512q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28"></svg:path>`,
})
export class WhhDiefiveIcon {
  readonly viewBox = input("0 0 960 959")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDiefourIcon],svg[whh-diefour-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 959H128q-53 0-90.5-37.5T0 831V127q0-52 37.5-89.5T128 0h704q53 0 90.5 37t37.5 90v704q0 53-37.5 90.5T832 959M224 127q-40 0-68 28.5t-28 68t28 67.5t68 28t68-28t28-67.5t-28-68t-68-28.5m0 512q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m512-512q-40 0-68 28.5t-28 68t28 67.5t68 28t68-28t28-67.5t-28-68t-68-28.5m0 512q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28"></svg:path>`,
})
export class WhhDiefourIcon {
  readonly viewBox = input("0 0 960 959")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDieoneIcon],svg[whh-dieone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 959H128q-53 0-90.5-37.5T0 831V127q0-53 37.5-90T128 0h704q53 0 90.5 37.5T960 127v704q0 53-37.5 90.5T832 959M480 383q-40 0-68 28.5t-28 68t28 67.5t68 28t68-28t28-67.5t-28-68t-68-28.5"></svg:path>`,
})
export class WhhDieoneIcon {
  readonly viewBox = input("0 0 960 959")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDiesixIcon],svg[whh-diesix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 959H128q-53 0-90.5-37.5T0 831V127q0-53 37.5-90T128 0h704q53 0 90.5 37t37.5 90v704q0 53-37.5 90.5T832 959M224 831q40 0 68-28t28-68t-28-68t-68-28t-68 28t-28 68t28 68t68 28m0-704q-40 0-68 28.5t-28 68t28 67.5t68 28t68-28t28-67.5t-28-68t-68-28.5m0 256q-40 0-68 28.5t-28 68t28 67.5t68 28t68-28t28-67.5t-28-68t-68-28.5m512-256q-40 0-68 28.5t-28 68t28 67.5t68 28t68-28t28-67.5t-28-68t-68-28.5m-96 352.5q0 39.5 28 67.5t68 28t68-28t28-67.5t-28-68t-68-28.5t-68 28.5t-28 68M736 639q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28"></svg:path>`,
})
export class WhhDiesixIcon {
  readonly viewBox = input("0 0 960 959")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDiethreeIcon],svg[whh-diethree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 959H128q-53 0-90.5-37.5T0 831V128q0-53 37.5-90.5T128 0h704q53 0 90.5 37.5T960 128v703q0 53-37.5 90.5T832 959M224 128q-40 0-68 28t-28 67.5t28 67.5t68 28t68-28t28-67.5t-28-67.5t-68-28m256 255q-40 0-68 28.5t-28 68t28 67.5t68 28t68-28t28-67.5t-28-68t-68-28.5m256 256q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28"></svg:path>`,
})
export class WhhDiethreeIcon {
  readonly viewBox = input("0 0 960 959")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDietwoIcon],svg[whh-dietwo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 959H128q-53 0-90.5-37.5T0 831V128q0-53 37.5-90.5T128 0h704q53 0 90.5 37.5T960 128v703q0 53-37.5 90.5T832 959M224 128q-40 0-68 28t-28 67.5t28 67.5t68 28t68-28t28-67.5t-28-67.5t-68-28m512 511q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28"></svg:path>`,
})
export class WhhDietwoIcon {
  readonly viewBox = input("0 0 960 959")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDiggIcon],svg[whh-digg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832.56 960h-704q-53 0-90.5-37.5T.56 832V128q0-53 37.5-90.5T128.56 0h704q53 0 90.5 37.5t37.5 90.5v704q0 53-37.5 90.5t-90.5 37.5m-576-608V224q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v96h-96q-13 0-22.5 9.5t-9.5 22.5v256q0 13 9.5 22.5t22.5 9.5h128q13 0 22.5-9.5t9.5-22.5zm96-160q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m32 160q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v256q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5zm256 256V352q0-13-9.5-22.5t-22.5-9.5h-128q-13 0-22.5 9.5t-9.5 22.5v256q0 13 9.5 22.5t22.5 9.5h96v64h-96q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h128q13 0 22.5-9.5t9.5-22.5zm256-256q0-13-9.5-22.5t-22.5-9.5h-128q-13 0-22.5 9.5t-9.5 22.5v256q0 13 9.5 22.5t22.5 9.5h96v64h-96q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h128q13 0 22.5-9.5t9.5-22.5zm-128 32h64v192h-64zm-256 0h64v192h-64zm-384 0h64v192h-64z"></svg:path>`,
})
export class WhhDiggIcon {
  readonly viewBox = input("0 0 961 960")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDiodeIcon],svg[whh-diode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 385H832v192q0 26-19 45t-45 19t-45-19t-19-45V385h-10L296 634q-17 17-40-8V385H64q-26 0-45-19T0 320.5t19-45T64 257h192V15q24-25 40-8l399 250h9V65q0-27 18.5-45.5T768 1t45.5 18.5T832 65v192h128q26 0 45 18.5t19 45t-19 45.5t-45 19M320 129v384l320-192z"></svg:path>`,
})
export class WhhDiodeIcon {
  readonly viewBox = input("0 0 1024 641")
  readonly width = input("1.6em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDirectionsIcon],svg[whh-directions-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 1024L320 896L0 1024V879q34-14 62-36l-46-46q-6 5-16 10V128L320 0l384 128L1024 0v896zM64 736l64 32q57-73 64-128h-65q-3 13-13.5 30.5T85 710t-21 26m128-288q-57 73-64 128h65q2-13 13-30.5t29-39t21-26.5zm192-128q-70 9-126 52l46 47q37-26 80-34zm64 0v65q44 8 80 34l46-47q-56-43-126-52m441 0q6-6 6-14.5t-6-14.5l-29-30q-6-6-15-6t-15 6l-94 95l-95-95q-6-6-14.5-6t-15.5 6l-29 30q-6 6-6 14.5t6 14.5l95 96l-95 95q-6 6-6 14.5t6 14.5l29 30q6 6 15 6t15-6l95-95l94 95q6 6 15 6t15-6l29-30q6-6 6-14.5t-6-14.5l-95-95z"></svg:path>`,
})
export class WhhDirectionsIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDirectorIcon],svg[whh-director-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 448v64q26 0 45 19t19 45.5t-19 45t-45 18.5h-2q-4 17-14 27L482 799l207 133q16 16 16 38t-16 38t-38.5 16t-37.5-16L384 862l-229 146q-16 16-38 16t-38-16t-16-38t16-38l207-133L80 667q-10-10-14-27h-2q-27 0-45.5-18.5T0 576.5T18.5 531T64 512v-64q-27 0-45.5-18.5T0 384V128q0-26 18.5-45T64 64q0-26 19-45t45.5-19t45 19T192 64h384q0-26 19-45t45.5-19t45 19T704 64q27 0 45.5 19t18.5 45v256q0 27-19 45.5T704 448M384 737l151-97H232zM192 448v64h384v-64z"></svg:path>`,
})
export class WhhDirectorIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDiskspaceIcon],svg[whh-diskspace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768.338 1024h-640q-53 0-90.5-37.5T.338 896V128q0-53 37.5-90.5t90.5-37.5h640q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m0-288q0-32-19-57t-49-34q68-87 68-197q0-87-43-160.5T608.838 171t-160.5-43t-160.5 43t-116.5 116.5t-43 160.5q0 110 68 197q-30 9-49 34t-19 57v64q0 40 28 68t68 28h448q40 0 68-28t28-68zm-139-107l-136-136q-19 19-45.5 19t-45-18.5t-18.5-45t18.5-45.5t45.5-19V192q106 0 181 75t75 181t-75 181"></svg:path>`,
})
export class WhhDiskspaceIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDistributehorizontalcentersIcon],svg[whh-distributehorizontalcenters-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 768h-64v192q0 26-18.5 45t-45 19t-45.5-19t-19-45V768h-64q-27 0-45.5-19T512 704V320q0-27 18.5-45.5T576 256h64V64q0-26 19-45t45.5-19t45 19T768 64v192h64q27 0 45.5 18.5T896 320v384q0 27-18.5 45.5T832 768m-64-352q0-13-9.5-22.5T736 384h-64q-13 0-22.5 9.5T640 416v192q0 13 9.5 22.5T672 640h64q13 0 22.5-9.5T768 608zM320 896h-64v64q0 26-18.5 45t-45 19t-45.5-19t-19-45v-64H64q-26 0-45-19T0 832V192q0-27 19-45.5T64 128h64V64q0-26 19-45t45.5-19t45 19T256 64v64h64q27 0 45.5 18.5T384 192v640q0 27-18.5 45.5T320 896"></svg:path>`,
})
export class WhhDistributehorizontalcentersIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDistributeverticalcentersIcon],svg[whh-distributeverticalcenters-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 256H768v64q0 27-19 45.5T704 384H320q-27 0-45.5-18.5T256 320v-64H64q-26 0-45-18.5t-19-45T18.5 147T64 128h192V64q0-26 18.5-45T320 0h384q26 0 45 19t19 45v64h192q26 0 45 19t19 45.5t-19 45t-45 18.5m-320-96q0-13-9.5-22.5T608 128H416q-13 0-22.5 9.5T384 160v64q0 13 9.5 22.5T416 256h192q13 0 22.5-9.5T640 224zM64 640h64v-64q0-27 19-45.5t45-18.5h640q26 0 45 19t19 45v64h64q26 0 45 18.5t19 45.5t-18.5 45.5T960 768h-64v64q0 26-19 45t-45 19H192q-26 0-45-19t-19-45v-64H64q-26 0-45-18.5T0 704t19-45.5T64 640"></svg:path>`,
})
export class WhhDistributeverticalcentersIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDivideIcon],svg[whh-divide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 640H64q-27 0-45.5-19T0 576V448q0-27 19-45.5T64 384h896q27 0 45.5 18.5T1024 448v128q0 26-18.5 45T960 640M576 256H448q-27 0-45.5-19T384 192V64q0-27 19-45.5T448 0h128q27 0 45.5 18.5T640 64v128q0 26-18.5 45T576 256M448 768h128q27 0 45.5 18.5T640 832v128q0 27-19 45.5t-45 18.5H448q-27 0-45.5-19T384 960V832q0-27 19-45.5t45-18.5"></svg:path>`,
})
export class WhhDivideIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDnaIcon],svg[whh-dna-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M728.488 479q-75-37-151-63q33-17 61-32h-252q21 11 126 64q64 21 127.5 50t135 76.5t125 101.5t89 128.5t35.5 155.5q0 26-18.5 45t-45 19t-45.5-19t-19-45h-768q0 26-19 45t-45.5 19t-45-19t-18.5-45q0-68 24-131.5t67.5-114.5t93.5-92t111-77q75 37 151 63q-33 17-61 32h252q-21-11-126-64q-64-21-127.5-50.5t-135-76.5t-125-101t-89-128.5T.488 64q0-27 18.5-45.5t45-18.5t45.5 18.5t19 45.5h768q0-27 19-45.5t45.5-18.5t45 18.5t18.5 45.5q0 68-24 131t-67.5 114.5t-93.5 92.5t-111 77m-592 417h751q-8-32-26-64h-698q-19 32-27 64m149-192q-47 34-75 64h603q-31-33-73-64zm-1-384h455q47-34 74-64h-602q31 33 73 64m-147-192q8 32 26 64h698q19-32 27-64z"></svg:path>`,
})
export class WhhDnaIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDnszoneIcon],svg[whh-dnszone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-896q-104 0-192.5 51.5t-140 140T128 512q0 84 34 158t94 128V320q0-27 19-45.5t45.5-18.5t45 18.5T384 320v554q63 22 128 22q104 0 192.5-51.5t140-140T896 512t-51.5-192.5t-140-140T512 128m192 448L512 704q-26 0-45-19t-19-45V384q0-27 19-45.5t45-18.5l192 128q1 0 12.5 6t15 8.5T744 471t13 11.5t7.5 13.5t3.5 16q0 6-1.5 12t-4 10.5t-7.5 9.5l-8 8l-10.5 7l-10 5.5l-11.5 6z"></svg:path>`,
})
export class WhhDnszoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDocumentIcon],svg[whh-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832.417 1024h-768q-26 0-45-18.5t-19-45.5V64q0-26 19-45t45-19h768q27 0 45.5 19t18.5 45v896q0 27-18.5 45.5t-45.5 18.5m-416-192h64q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5m-256 0h128q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-128q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5m0-192h320q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-320q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5m0-192h128q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-128q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5m256-256h-256q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h256q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m320 0h-192q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m0 192h-320q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h320q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m0 192h-128q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h128q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m0 192h-128q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h128q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5"></svg:path>`,
})
export class WhhDocumentIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDogIcon],svg[whh-dog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.423 1024q-29 0-56.5-12t-40.5-23t-31-29q-64 64-192 64h-480q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5q12 0 28.5-22.5t31.5-57t25.5-82.5t10.5-94q0-26-6.5-44t-16-31t-19-28.5t-16-46t-6.5-74.5q0-26 6.5-42.5t16-25t19-17.5t16-27.5t6.5-47.5q0-64-64-64q-45 0-86.5-34.5T.423 160q0-23 21.5-43.5t42.5-20.5q17 0 31.5-10t27.5-24t28.5-28t42-24t62.5-10q47 0 76.5 11t44 28.5t23.5 49t12.5 62.5t12.5 79t23 90q19 57 89.5 145.5t102.5 110.5q128 85 128 256q0 49 57 88.5t135 39.5q26 0 61-10q-9 35-44 54.5t-81 19.5m-576-320q-3 16-8 41.5t-21.5 77.5t-34.5 73h128q0-43-10-74.5t-22-45.5t-22-32.5t-10-39.5"></svg:path>`,
})
export class WhhDogIcon {
  readonly viewBox = input("0 0 1022 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDoghouseIcon],svg[whh-doghouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1004.5 555.5Q985 575 957.5 575T911 556l-15-15v418q0 27-18.5 45.5T832 1023H704V767q0-79-56-135t-135.5-56T377 632t-56 135v256H192q-27 0-45.5-18.5T128 959V541l-15 15q-19 19-46.5 19t-47-19.5t-19.5-47T19 462L463 19q20-20 49-19q29-1 49 19l444 443q19 19 19 46.5t-19.5 47"></svg:path>`,
})
export class WhhDoghouseIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDollarIcon],svg[whh-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M703.5 384q-26.5 0-45-18.5T640 320q0-34-37.5-64T506 209t-122-17t-122 17t-96.5 47t-37.5 64t37.5 64t96.5 47t122 17q104 0 192.5 34.5t140 93T768 704q0 94-91.5 165.5T448 956v4q0 27-19 45.5t-45.5 18.5t-45-18.5T320 960v-4q-137-15-228.5-86.5T0 704q0-26 18.5-45t45-19t45.5 19t19 45q0 34 37.5 64t96.5 47t122 17t122-17t96.5-47t37.5-64t-37.5-64t-96.5-47t-122-17q-104 0-192.5-34t-140-93T0 320q0-94 91.5-165.5T320 68v-4q0-26 18.5-45t45-19T429 19t19 45v4q137 15 228.5 86.5T768 320q0 27-19 45.5T703.5 384"></svg:path>`,
})
export class WhhDollarIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDollaraltIcon],svg[whh-dollaralt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1023q-104 0-199-40.5t-163.5-109T40.5 710T0 511t40.5-198.5t109-163T313 40.5T512 0t199 40.5t163.5 109t109 163T1024 511t-40.5 199t-109 163.5t-163.5 109t-199 40.5M320 383q0-65 53-96.5T512 255t139 23t53 73q0 27 18.5 45.5t45 18.5t45.5-18.5t19-45.5q0-52-38.5-99t-96-77T575 134q1-4 1-7q0-26-19-44.5T511.5 64t-45 18.5T448 127v5q-49 8-93 26t-81.5 47.5T214 281t-22 102q0 94 86 143t234 49h25q31 0 46 .5t38.5 2t35 5.5t24.5 11t18 18t5 27q0 66-53 97t-139 31q-87 0-139.5-23T320 671q0-26-19-45t-45.5-19t-45 19t-18.5 45q0 53 38.5 99.5t96 76.5T448 889v6q0 27 18.5 45.5t45 18.5t45.5-18.5t19-45.5q0-1-.5-2.5t-.5-2.5q50-7 94-25t81.5-47.5T810 742t22-103q0-93-86-142.5T512 447h-26q-30 1-45 .5t-38.5-2t-35-5.5t-24.5-11t-18-18.5t-5-27.5"></svg:path>`,
})
export class WhhDollaraltIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDollarsquareIcon],svg[whh-dollarsquare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-576-640q0-66 53-97t139-31q87 0 139.5 23t52.5 73q0 27 19 45.5t45.5 18.5t45-18.5t18.5-45.5q0-52-38.5-99t-96-77t-122.5-42l.5-2.5l.5-3.5q0-26-19-45t-45.5-19t-45 19t-18.5 45v5q-49 7-93 25.5t-81.5 48t-59.5 75.5t-22 102q0 94 86 143t234 49h71l38.5 1.5l35 6l24.5 11l18 18l5 27.5q0 66-53 97t-139 31q-87 0-139.5-23t-52.5-73q0-26-19-45t-45.5-19t-45 19t-18.5 45q0 52 38 99t96 77t122 42v6q0 27 18.5 45.5t45 18.5t45.5-18.5t19-45.5q0-1-.5-3l-.5-2q50-7 94-25t81.5-48t59.5-75.5t22-102.5q0-94-86-143t-234-49h-71l-38.5-1.5l-35-5.5l-24.5-11l-18-18.5z"></svg:path>`,
})
export class WhhDollarsquareIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDolphinIcon],svg[whh-dolphin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M805.193 888q17 33 24 63.5t.5 51.5t-29.5 21q-61-82-119-180q-28-20-85-50.5t-102-55.5t-103-74t-103-110q0 12-8 22.5t-16 25t-8 38.5v8q0 16-.5 23t-3 16.5t-9.5 13t-19 3.5q-25 0-60.5-50t-35.5-78q0-54 19-121.5t43-70.5q-32-58-42-78q-24-39-65-100t-62-95t-21-47q0-26 18.5-45t45.5-19t45.5 19t18.5 45q0 7 5 32q46-32 123-32q48 0 132.5 69t123.5 123q0 1 1 2l1 1q55 9 113 36.5t99.5 69.5t41.5 83v1q-15 1-59.5-.5t-67.5-1.5q20 36 31 65q13 36 22 86q8 4 10 10q18 44 57.5 88t83 78t85 66t68 63t26.5 57l-34-10l-88.5-28z"></svg:path>`,
})
export class WhhDolphinIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDolphinsoftwareIcon],svg[whh-dolphinsoftware-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M883 159q67 70 104.5 161t37.5 192q0 146-78 270q30 40 78 44q-33 38-82 38q-44 0-77-40t-33-88q0-20 5-64.5t6-65.5q-33-73-105.5-128.5T580 398q-35 15-78 49t-77 66t-77.5 63t-80.5 42q-99 29-176.5 19T2 583q-7-31 23.5-67t88.5-68q-2-2-4.5-6.5T106 436q53 12 119 12q53 0 97-17.5t69-47.5q25-2 41.5-20t16.5-43q0-26-18.5-45t-45-19t-45.5 19t-19 45q0 22 15 40q-51 24-111 24q-38 0-59-1t-46.5-5.5T76 364q-10-41-11-76q-1-49 14-87t50-73q64-63 169-95.5T513 0q129 0 242 61Q809 0 888 0q82 0 137 66q-45 4-82 29t-60 64M180 702q50 88 139 141t194 53q147 0 257-99q7 68 58 118q-139 109-315 109q-159 0-288-89T38 703q27 1 59 1q48 0 83-2"></svg:path>`,
})
export class WhhDolphinsoftwareIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDomainIcon],svg[whh-domain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M858 758q31-94 39-194h127q-13 102-66 194zm0-517h100q53 92 66 194H897q-8-100-39-194M750 42q55 29 102 70h-52q-24-40-50-70M577 435V241h158q27 91 33 194zm0-435q59 30 105 112H577zM289 758q-27-91-33-194h191v194zm0-517h158v194H256q6-103 33-194M447 0v112H342Q388 30 447 0M172 112q47-41 102-70q-26 30-50 70zM0 435q13-102 66-194h100q-31 94-39 194zm166 323H66Q13 666 0 564h127q8 100 39 194m58 129q24 40 50 70q-55-29-102-70zm223 0v112q-59-31-105-112zm130-323h191q-6 103-33 194H577zm105 323q-46 81-105 112V887zm170 0q-46 41-102 70q26-30 50-70z"></svg:path>`,
})
export class WhhDomainIcon {
  readonly viewBox = input("0 0 1024 999")
  readonly width = input("1.03em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDomainaddonIcon],svg[whh-domainaddon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 832q0 27-18.5 45.5T960 896h-64v64q0 27-18.5 45.5T832 1024H704q-28 0-47-21q-72 21-145 21q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257q0 74-21 145q21 19 21 47zM890 448q-19-16-54.5-47T783 356h-37q-3 17-4 23q30 21 71 49q-24 24-48 49q-23-37-67-109q-19 5-41 11q-4 2-10.5 6t-8.5 5q3 13 7 37t5 27q-15 18-23 27q-12-6-49.5-23T520 432q0-1-4-12v-34q26-7 82-22l-41-87q3-4 8-12t7-11q21-1 64.5-5t65.5-6v-49q2-1 7-2t7-2q2 13 4 34q1 0 44-2q-33-28-68-47q-14 1-39 4l-4-4q3-10 5-18q-48-20-101-26q3 12 9 37t9 38q-4 1-12 3.5t-10 3.5l8 4q-33 4-34 4q3-18 9.5-52.5T544 130q-20-2-32-2q-2 0-21 1q2 1 3 1v38h-26q-4-1-22-4q2-7 10-31q-133 19-225 118h14l24 21l24 21v22q-25 10-72 29.5T165 368q0 5-8.5 58T144 507q19 20 59 64q-2 1-7.5 4.5T187 581h-52q24 136 130.5 225.5T512 896q20 0 45-3q-22-7-35-26q-3-1-10-1t-11-1q-14-21-42.5-64T416 737q23-45 67-128q2-3 7-8q14-12 42.5-37t42.5-38q13 1 18.5 1.5T615 526t23.5-3t24.5-4t25-5q9-2 16-2q33-4 49-1q1 0 1 .5v.5h78q21 0 38 12.5t23 32.5q3-25 3-45q0-30-6-64m6 256h-64v-64q0-26-19-45t-45.5-19t-45 18.5T704 640v64h-64q-26 0-45 19t-19 45.5t19 45t45 18.5h64v64q0 27 19 45.5t45 18.5t45-18.5t19-45.5v-64h64q27 0 45.5-18.5t18.5-45t-18.5-45.5t-45.5-19"></svg:path>`,
})
export class WhhDomainaddonIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDominoIcon],svg[whh-domino-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1007 741l-266 266q-17 17-41 17t-42-17L17 366Q0 348 0 324t17-41L283 17q17-17 41-17t42 17l641 641q17 18 17 42t-17 41M160.5 321q-13.5 0-22.5 9t-9 22.5t9 23t22.5 9.5t23-9.5t9.5-23t-9.5-22.5t-23-9m192-192q-13.5 0-22.5 9t-9 22.5t9 23t22.5 9.5t23-9.5t9.5-23t-9.5-22.5t-23-9m0 192q-13.5 0-22.5 9t-9 22.5t9 23t22.5 9.5t23-9.5t9.5-23t-9.5-22.5t-23-9m0 191q-13.5 0-22.5 9.5t-9 23t9 22.5t22.5 9t23-9t9.5-22.5t-9.5-23t-23-9.5m192-191q-13.5 0-23 9t-9.5 22.5t9.5 23t23 9.5t22.5-9.5t9-23t-9-22.5t-22.5-9m128 127q-13.5 0-23 9.5t-9.5 23t9.5 22.5t23 9t22.5-9t9-22.5t-9-23t-22.5-9.5m0 192q-13.5 0-23 9.5t-9.5 23t9.5 22.5t23 9t22.5-9t9-22.5t-9-23t-22.5-9.5m0 192q-13.5 0-23 9.5t-9.5 23t9.5 22.5t23 9t22.5-9t9-22.5t-9-23t-22.5-9.5"></svg:path>`,
})
export class WhhDominoIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDominoeightIcon],svg[whh-dominoeight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832.56 960h-704q-53 0-90.5-37.5T.56 832V128q0-53 37.5-90.5T128.56 0h704q53 0 90.5 37.5t37.5 90.5v704q0 53-37.5 90.5t-90.5 37.5m-672-896q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m0 320q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m0 320q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m320-640q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m0 640q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m320-640q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m0 320q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m0 320q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28"></svg:path>`,
})
export class WhhDominoeightIcon {
  readonly viewBox = input("0 0 961 960")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDominofiveIcon],svg[whh-dominofive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832.56 960h-704q-53 0-90.5-37.5T.56 832V128q0-53 37.5-90.5T128.56 0h704q53 0 90.5 37.5t37.5 90.5v704q0 53-37.5 90.5t-90.5 37.5m-672-896q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m0 640q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m320-320q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m320-320q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m0 640q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28"></svg:path>`,
})
export class WhhDominofiveIcon {
  readonly viewBox = input("0 0 961 960")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDominofourIcon],svg[whh-dominofour-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832.56 960h-704q-53 0-90.5-37.5T.56 832V128q0-53 37.5-90.5T128.56 0h704q53 0 90.5 37.5t37.5 90.5v704q0 53-37.5 90.5t-90.5 37.5m-672-896q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m0 640q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m640-640q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m0 640q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28"></svg:path>`,
})
export class WhhDominofourIcon {
  readonly viewBox = input("0 0 961 960")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDominonineIcon],svg[whh-dominonine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832.56 960h-704q-53 0-90.5-37.5T.56 832V128q0-53 37.5-90.5T128.56 0h704q53 0 90.5 37.5t37.5 90.5v704q0 53-37.5 90.5t-90.5 37.5m-672-896q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m0 320q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m0 320q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m320-640q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m0 320q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m0 320q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m320-640q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m0 320q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m0 320q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28"></svg:path>`,
})
export class WhhDominonineIcon {
  readonly viewBox = input("0 0 961 960")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDominooneIcon],svg[whh-dominoone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832.56 960h-704q-53 0-90.5-37.5T.56 832V128q0-53 37.5-90.5T128.56 0h704q53 0 90.5 37.5t37.5 90.5v704q0 53-37.5 90.5t-90.5 37.5m-352-576q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28"></svg:path>`,
})
export class WhhDominooneIcon {
  readonly viewBox = input("0 0 961 960")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDominosevenIcon],svg[whh-dominoseven-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832.56 960h-704q-53 0-90.5-37.5T.56 832V128q0-53 37.5-90.5T128.56 0h704q53 0 90.5 37.5t37.5 90.5v704q0 53-37.5 90.5t-90.5 37.5m-672-896q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m0 320q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m0 320q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m320-640q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m320 0q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m0 320q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m0 320q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28"></svg:path>`,
})
export class WhhDominosevenIcon {
  readonly viewBox = input("0 0 961 960")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDominosixIcon],svg[whh-dominosix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832.56 960h-704q-53 0-90.5-37.5T.56 832V128q0-53 37.5-90.5T128.56 0h704q53 0 90.5 37.5t37.5 90.5v704q0 53-37.5 90.5t-90.5 37.5m-672-896q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m0 320q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m0 320q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m640-640q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m0 320q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m0 320q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28"></svg:path>`,
})
export class WhhDominosixIcon {
  readonly viewBox = input("0 0 961 960")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDominothreeIcon],svg[whh-dominothree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832.56 960h-704q-53 0-90.5-37.5T.56 832V128q0-53 37.5-90.5T128.56 0h704q53 0 90.5 37.5t37.5 90.5v704q0 53-37.5 90.5t-90.5 37.5m-672-256q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m320-320q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m320-320q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28"></svg:path>`,
})
export class WhhDominothreeIcon {
  readonly viewBox = input("0 0 961 960")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDominotwoIcon],svg[whh-dominotwo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832.56 960h-704q-53 0-90.5-37.5T.56 832V128q0-53 37.5-90.5T128.56 0h704q53 0 90.5 37.5t37.5 90.5v704q0 53-37.5 90.5t-90.5 37.5m-672-256q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m640-640q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28"></svg:path>`,
})
export class WhhDominotwoIcon {
  readonly viewBox = input("0 0 961 960")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDonotdisturbIcon],svg[whh-donotdisturb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1005.655 641q19 19 19 45.5t-19 45.5l-273 273q-19 19-45.5 19t-45.5-19l-292-292q-93-92-93-169q0-34 9.5-64.5t27-56t29.5-39t30-32.5q32-32 32-96q0-52-36-90t-92-38q-51 0-89.5 38.5t-38.5 88.5q0 28 10 50t22 33t22 23t10 23q0 32-18 48t-46 16q-15 0-36-12.5t-42-35t-35.5-61T.655 256q0-49 19.5-96.5t55.5-84.5q76-75 182.5-75t182.5 75z"></svg:path>`,
})
export class WhhDonotdisturbIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDonutIcon],svg[whh-donut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-704q-80 0-136 56t-56 136t56 136t136 56t136-56t56-136t-56-136t-136-56m352 255q-36 0-62.5 17T768 640q0 64 30 101q2 14 2 27q0 20-30.5 42T704 832q-36 0-66-20.5T608 768q0-6 2-19q-47 19-98 19q-2 0-16-1q16 34 16 65q0 20-30.5 42T416 896q-36 0-66-20.5T320 832q0-29 15-77q20-11 33-31q-78-54-103-145q-32 7-52.5 33T192 671q0 11 3 22q-1 0-1.5.5l-.5.5l6 9q19 27 28.5 42t19 40t9.5 47q0 9-8.5 13.5T222 854q126 106 290 106q155 0 276-95.5T946 622q-13-21-34.5-34T864 575"></svg:path>`,
})
export class WhhDonutIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDotclearIcon],svg[whh-dotclear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M736 1024q-119 0-203.5-84.5T448 736t84.5-203.5T736 448q87 0 160 49v82q-66-67-160-67q-93 0-158.5 65.5T512 736t65.5 158.5T736 960t158.5-65.5T960 736V192h64v544q0 119-84.5 203.5T736 1024M419 391q-44 29-81 43t-82 14q-54 0-96-32q-10 11-79.5 44.5T0 512v-64q37-43 160-96q71-30 110-47t96-43t87.5-42t63-34.5t46-32.5t13.5-25q-64 32-160 64q-39 13-80.5 31T227 273.5T128 320q0-43 10-78t22-50q27-35 74-56t100.5-30.5t108-19T551 56t89-56q0 96-23.5 165T547 286T419 391"></svg:path>`,
})
export class WhhDotclearIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDotlistIcon],svg[whh-dotlist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.428 576h-512q-27 0-45.5-19t-18.5-45.5t18.5-45t45.5-18.5h512q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19m0-384h-512q-27 0-45.5-19t-18.5-45.5t18.5-45t45.5-18.5h512q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19m-832 832q-53 0-90.5-37.5T.428 896t37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5m0-384q-53 0-90.5-37.5T.428 512t37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5m0-384q-53 0-90.5-37.5T.428 128t37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5m320 576h512q27 0 45.5 18.5t18.5 45.5t-18.5 45.5t-45.5 18.5h-512q-27 0-45.5-18.5t-18.5-45.5t18.5-45.5t45.5-18.5"></svg:path>`,
})
export class WhhDotlistIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDotprojectIcon],svg[whh-dotproject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M864 320q-66 0-113-47t-47-113t47-113T864 0t113 47t47 113t-47 113t-113 47M384 0h256v1024H384zM160 1024q-66 0-113-47T0 864t47-113t113-47t113 47t47 113t-47 113t-113 47"></svg:path>`,
})
export class WhhDotprojectIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDoubletapIcon],svg[whh-doubletap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 1024H384q-21 0-51.5-34.5t-53.5-81t-23-77.5q-1-24-16.5-81.5T208 618t-16-138v-32q0-27 18.5-45.5T256 384q22 0 39 13.5t22 33.5q3-28 3-47q0-58 2-112.5t8-122T350 41t34-41q45 0 54.5 45.5T448 256q0 38 6.5 65t16 38.5t19 18T505 384h7q0-27 18.5-45.5T576 320q64 0 64 128q0-27 18.5-45.5t45-18.5t45.5 18.5t19 45.5v64q0-27 18.5-45.5t45-18.5t45.5 18.5t19 45.5v288q0 46-7.5 83t-18 59.5t-25 39.5t-27 24.5t-25.5 12t-17.5 5t-7.5.5m-74-736q10-44 10-87q0-91-38-170l57-31q45 93 45 201q0 61-15 119zm-120-66q2-17 2-30q0-54-19-100l53-30q30 64 30 139q0 27-4 54zm-380 0l-62 33q-4-27-4-54q0-75 30-139l53 30q-19 46-19 100q0 13 2 30M74 288l-59 32Q0 262 0 201Q0 93 46 0l56 31q-38 79-38 170q0 43 10 87"></svg:path>`,
})
export class WhhDoubletapIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDownleftIcon],svg[whh-downleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 193h128q26 0 45 18.5t19 45.5v325L822 19q19-19 46-19t46 19l91 90q19 19 19 45.5t-19 45.5L433 768h335q26 0 45 18.5t19 44.5v128q0 27-19 45.5t-45 18.5H64q-27 0-45.5-18.5T0 959V257q0-27 18.5-45.5T64 193"></svg:path>`,
})
export class WhhDownleftIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDownloadIcon],svg[whh-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m364-512H641V192q0-27-19-45.5T577 128H448q-26 0-45 18.5T384 192v320H148q-15 0-18.5 6t8.5 19l342 345q13 14 32.5 14t32.5-14l342-345q12-13 8-19t-19-6"></svg:path>`,
})
export class WhhDownloadIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDownloadaltIcon],svg[whh-downloadalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 1024H128q-53 0-90.5-37.5T0 896v-96q0-26 18.5-45t45-19t45.5 19t19 45v32q0 27 18.5 45.5T192 896h640q26 0 45-18.5t19-45.5v-32q0-26 18.5-45t45-19t45.5 19t19 45v96q0 53-37.5 90.5T896 1024M545 754q-14 14-33 14t-33-14L138 409q-12-13-8.5-19t18.5-6h236V64q0-27 18.5-45.5T448 0h128q27 0 45.5 18.5T640 64v320h235q15 0 19 6t-8 19z"></svg:path>`,
})
export class WhhDownloadaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDownrightIcon],svg[whh-downright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.63 193h-128q-26 0-45 18.5t-19 45.5v324l-567-562q-18-19-45-19t-46 19l-91 90q-19 19-19 45.5t19 45.5l572 568h-335q-26 0-45 18.5t-19 44.5v128q0 27 19 45.5t45 18.5h704q27 0 45.5-18.5t18.5-45.5V256q0-26-18.5-44.5t-45.5-18.5"></svg:path>`,
})
export class WhhDownrightIcon {
  readonly viewBox = input("0 0 1025 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDraftIcon],svg[whh-draft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.85 1024h-896q-27 0-45.5-19T.85 960V704q0-27 18.5-45.5t45.5-18.5h128q20 0 38.5 8.5t25.5 23.5l33.5 100.5l30.5 91.5q8 20 24 26t45 6h249q29 0 43.5-6t22.5-26q51-154 64-192q13-32 64-32h128q26 0 45 18.5t19 45.5v256q0 26-18.5 45t-45.5 19m-304-243q-9 21-32.5 36t-49.5 15h-121q-26 0-50-15t-33-36l-71-205h-235V64q0-27 18.5-45.5T128.85 0h768q27 0 45.5 18.5t18.5 45.5v512h-235zm-432-333h128q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-128q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5m256-256h-256q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h256q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m320 0h-192q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m32 224q0-13-9.5-22.5t-22.5-9.5h-320q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h320q13 0 22.5-9.5t9.5-22.5"></svg:path>`,
})
export class WhhDraftIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDrawerIcon],svg[whh-drawer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832.417 1024h-768q-26 0-45-18.5t-19-45.5V64q0-26 19-45t45-19h768q27 0 45.5 19t18.5 45v896q0 27-18.5 45.5t-45.5 18.5m-64-864q0-13-9.5-22.5t-22.5-9.5h-576q-13 0-22.5 9.5t-9.5 22.5v256q0 13 9.5 22.5t22.5 9.5h576q13 0 22.5-9.5t9.5-22.5zm0 448q0-13-9.5-22.5t-22.5-9.5h-576q-13 0-22.5 9.5t-9.5 22.5v256q0 13 9.5 22.5t22.5 9.5h576q13 0 22.5-9.5t9.5-22.5zm-320.5 224q-26.5 0-45-19t-18.5-45t18.5-45t45-19t45.5 19t19 45t-19 45t-45.5 19m0-448q-26.5 0-45-18.5t-18.5-45.5t18.5-45.5t45-18.5t45.5 19t19 45.5t-19 45t-45.5 18.5"></svg:path>`,
})
export class WhhDrawerIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDreamweaverIcon],svg[whh-dreamweaver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-448-640q0-53-37.5-90.5t-90.5-37.5h-160q-13 0-22.5 9.5t-9.5 22.5v448q0 13 9.5 22.5t22.5 9.5h160q53 0 90.5-37.5t37.5-90.5zm416-128q-13 0-22.5 9.5t-9.5 22.5v352q0 14-12 30t-24 25l-12 9q-7 0-11.5-4.5t-4.5-11.5V288q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v400q0 7-4.5 11.5t-11.5 4.5q-5-4-13-10t-21.5-23t-13.5-31V288q0-13-9-22.5t-22.5-9.5t-23 9.5t-9.5 22.5v352q0 53 37.5 90.5t90.5 37.5h64q53 0 90.5-37.5t37.5-90.5V288q0-13-9.5-22.5t-22.5-9.5m-544 448h-112q-7 0-11.5-4.5t-4.5-11.5V336q0-7 4.5-11.5t11.5-4.5h112q26 0 45 18.5t19 45.5v256q0 26-19 45t-45 19"></svg:path>`,
})
export class WhhDreamweaverIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDribbbleIcon],svg[whh-dribbble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m353-362q-67-21-130-21q-10 0-37 4q19 93 20 190q100-64 147-173M604 884q2-102-18-206q-30 15-55 33q-108 76-142 164q60 21 123 21q45 0 92-12M130 478q-2 19-2 34q0 93 41.5 173.5T283 819q51-131 163-210q53-37 106-60q-16-45-32-82q-96 46-200 45q-95-1-190-34m176-289q-96 61-143 164q80 31 157 31q71 0 138-32q-67-105-152-163m206-61q-45 0-94 13q74 58 136 150q78-61 108-132q-72-31-150-31m252 95q-48 111-144 184q24 52 44 110q37-5 71-5q77 1 159 24q2-23 2-24q0-85-35-160t-97-129"></svg:path>`,
})
export class WhhDribbbleIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDribbblealtIcon],svg[whh-dribbblealt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 512q-71 0-145 14q-27-77-61-144q93-44 165.5-111T842 121q85 72 133.5 174t48.5 217q0 19-2 45q-122-45-254-45M531 326Q424 141 276 58Q387 0 512 0q151 0 278 82q-38 78-104.5 141T531 326m-58 22q-105 36-217 36q-116 0-227-40Q82 192 212 97q152 68 261 251M256 448q130 0 248-43q32 64 58 136q-142 41-247.5 132T161 884Q85 813 42.5 716.5T0 512q0-54 11-107q121 43 245 43m325 154q56 190 58 405q-64 17-127 17q-164 0-298-97q38-114 135.5-200T581 602m62-14q63-12 125-12q126 0 244 46q-27 124-109.5 221T703 987q-5-213-60-399"></svg:path>`,
})
export class WhhDribbblealtIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDrillIcon],svg[whh-drill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 192h-96v32q0 13-9.5 22.5T864 256H750q-17 29-46 46.5T640 320H512v78q0 21-13.5 35.5T466 448h-44l-38 192h128q27 0 45.5 18.5T576 704v256q0 26-19 45t-45 19H64q-27 0-45.5-19T0 960V704q0-27 18.5-45.5T64 640l64-512q0-53 37.5-90.5T256 0h384q35 0 64 17.5T750 64h114q13 0 22.5 9.5T896 96v32h96q13 0 22.5 9.5t9.5 22.5t-9.5 22.5T992 192M160 704q-13 0-22.5 9.5T128 736t9.5 22.5T160 768h256q13 0 22.5-9.5T448 736t-9.5-22.5T416 704zM608 64H288q-13 0-22.5 9.5T256 96t9.5 22.5T288 128h320q13 0 22.5-9.5T640 96t-9.5-22.5T608 64"></svg:path>`,
})
export class WhhDrillIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDrmanhattanIcon],svg[whh-drmanhattan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 544q0 98-38 186.5t-102.5 153t-153 102.5t-186.5 38t-186.5-38t-153-102.5T38 730.5T0 544q0-174 110-306T387 73q8-32 34-52.5T480 0t59 20.5T573 73q167 33 277 165t110 306M566 137q-11 25-34.5 40T480 192t-51.5-15t-34.5-40q-143 30-236.5 144T64 544q0 113 55.5 209T271 904.5T480 960t209-55.5T840.5 753T896 544q0-149-93.5-263T566 137m-86 503q-40 0-68-28t-28-68t28-68t68-28t68 28t28 68t-28 68t-68 28"></svg:path>`,
})
export class WhhDrmanhattanIcon {
  readonly viewBox = input("0 0 960 1024")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDropboxIcon],svg[whh-dropbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 576L832 683v85L512 960L192 768v-85L0 576l192-192L0 192L320 0l192 192L704 0l320 192l-192 192zM512 243L235 410l277 166l277-166z"></svg:path>`,
})
export class WhhDropboxIcon {
  readonly viewBox = input("0 0 1024 960")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDropmenuIcon],svg[whh-dropmenu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-640q-53 0-90.5-37.5t-37.5-90.5V384q-53 0-90.5-37.5T.428 256V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-12-928h-296q-8 0-11 14.5t5 23.5l135 177q8 9 19 9t19-9l135-177q8-9 5-23.5t-11-14.5m12 288h-640v128h640zm0 192h-640v128h640zm0 192h-640v96q0 13 9.5 22.5t22.5 9.5h576q13 0 22.5-9.5t9.5-22.5z"></svg:path>`,
})
export class WhhDropmenuIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDrupalIcon],svg[whh-drupal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 1024q-122-1-225-59.5t-163-159T0 587q0-127 69-231.5T252 194q39-20 69.5-45t47-47.5t25.5-44t8.5-36.5T395 0q48 43 62 59q32 40 77.5 72T664 205q105 53 168.5 159T896 593q0 118-60 217.5t-163 157t-225 56.5m32-64q52 0 106-21t54-43q0-24-4-28t-28-4q-18 0-59 16t-69 16q-21 0-50.5-16T384 864q-9 0-13.5.5T361 868t-7 9.5t-2 18.5q0 18 39.5 41t88.5 23m160-192q0-21-24-42.5T544 704q-46 0-70.5 19T449 768q0 24 4 28t28 4q13 0 19-5t7.5-11t10.5-11t26-5q21 0 35 16t29 16q10 0 14-.5t9-3.5t7-9.5t2-18.5m135-256q-44 0-81 9t-57.5 20.5t-45 22T545 577l-.5-.5l-.5-.5q-17 0-44.5-10t-55-22t-72.5-22t-92-10q-56 0-103.5 45.5T129 656t33 82.5t89 29.5q41 0 86.5-20t78.5-44t68.5-44t59.5-20q22-3 43 9.5t38.5 31.5t34.5 39t36.5 34t38.5 14q35 0 66-53.5T832 606q0-35-14.5-64.5T775 512"></svg:path>`,
})
export class WhhDrupalIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDrwhoIcon],svg[whh-drwho-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M871 174v673q0 13 27 32q17 11 9 16l-4 2l-332 120q-34 14-59 4.5T487 984V43q0-28 25-38t59 3l44 16v777q0 13 9.5 22.5T647 833t22.5-9.5T679 801V48l64 23v666q0 13 9.5 22.5T775 769t22.5-9.5T807 737V94l96 35q13 5-2 14q-26 15-29 25q-1 3-1 6m-532 843L7 897q-13-6 3-17q25-18 28-27q1-3 1-6V174q0-14-27-29q-16-10-9-14l4-2L339 8q34-13 59-3t25 38v941q0 27-25 37t-59-4M231 225q0-13-9.5-22.5T199 193t-22.5 9.5T167 225v576q0 13 9.5 22.5T199 833t22.5-9.5T231 801z"></svg:path>`,
})
export class WhhDrwhoIcon {
  readonly viewBox = input("0 0 910 1026")
  readonly width = input("0.89em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhDuckyIcon],svg[whh-ducky-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 192q19-2 35.5-2t42.5 1t50 1q0 16-6.5 29.5T998 244t-24.5 15t-31 11t-28 6.5T888 281q-7 26-31.5 82.5T832 448q0 17 13 38t32 43.5t38 47t32 58t13 69.5q0 94-58.5 167.5T741 984.5T512 1024q-78 0-151.5-22.5t-139-70t-115-114.5t-78-162T0 448q0 43 39.5 72.5t103 42.5T288 576q47 0 116-21.5t120.5-52T576 448q0-21-20-48.5T512 348t-44-58t-20-66q0-93 65.5-158.5T672 0q64 0 117.5 34t81.5 89q38-8 82-25.5t71-33.5q0 15-7 30t-16 25.5t-25.5 23T949 161t-29 17t-24 14m-160-64q-13 0-22.5 19t-9.5 45.5t9.5 45T736 256t22.5-18.5t9.5-45t-9.5-45.5t-22.5-19"></svg:path>`,
})
export class WhhDuckyIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEIcon],svg[whh-e-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 128H160q-13 0-22.5 9.5T128 160v256q0 13 9.5 22.5T160 448h416q26 0 45 19t19 45.5t-19 45t-45 18.5H160q-13 0-22.5 9.5T128 608v256q0 13 9.5 22.5T160 896h544q26 0 45 19t19 45.5t-19 45t-45 18.5H64q-27 0-45.5-18.5T0 960V64q0-26 18.5-45T64 0h640q26 0 45 19t19 45.5t-19 45t-45 18.5"></svg:path>`,
})
export class WhhEIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEUpperCaseIcon],svg[whh-e-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 128H160q-13 0-22.5 9.5T128 160v256q0 13 9.5 22.5T160 448h416q26 0 45 19t19 45.5t-19 45t-45 18.5H160q-13 0-22.5 9.5T128 608v256q0 13 9.5 22.5T160 896h544q26 0 45 19t19 45.5t-19 45t-45 18.5H64q-27 0-45.5-18.5T0 960V64q0-26 18.5-45T64 0h640q26 0 45 19t19 45.5t-19 45t-45 18.5"></svg:path>`,
})
export class WhhEUpperCaseIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEarbudsIcon],svg[whh-earbuds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704.94 736q-86 42-139 121t-53 167h-64q0-88-53-167t-139-121q-115-47-185.5-142.5T.94 384V128q0-26 18.5-45t45.5-19q23 0 41 15t22 37q57-44 129-51v-1q0-27 19-45.5T321.44 0t45 18.5t18.5 45.5v320q0 27-19 45.5t-45 18.5t-45-18.5t-19-45.5v-2q-72-10-128-50v52q0 24-16 42t-40 21q17 71 65.5 131t118.5 94q76 31 134 85.5t90 123.5q32-69 90-123.5t134-85.5q70-34 118.5-94t65.5-131q-24-3-40-21t-16-42v-52q-55 40-128 50v2q0 27-18.5 45.5t-45 18.5t-45.5-18.5t-19-45.5V64q0-27 19-45.5T641.44 0t45 18.5t18.5 45.5v1q72 7 129 51q5-22 22.5-37t40.5-15q27 0 45.5 19t18.5 45v256q0 114-70.5 209.5T704.94 736"></svg:path>`,
})
export class WhhEarbudsIcon {
  readonly viewBox = input("0 0 961 1024")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEarbudsaltIcon],svg[whh-earbudsalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.407 1024q-13 0-22.5-9.5t-9.5-22.5v-64q0-26-10-46t-24-29t-28-14t-24-6l-10-1h-512q-66 0-113-47t-47-113V506q-28-10-46-34.5t-18-55.5V288q0-40 28-68t68-28t68 28t28 68v128q0 31-18 55.5t-46 34.5v166q0 40 28 68t68 28h385q-33-43-33-96V506q-28-10-46-34.5t-18-55.5V288q0-40 28-68t68-28t68 28t28 68v128q0 31-18 55.5t-46 34.5v166q0 27 10 46.5t24 28.5t28 14.5t24 5.5l10 1q66 0 113 47t47 113v64q0 13-9.5 22.5t-22.5 9.5m-96-736q0-66-47-113t-113-47t-113 47t-47 113v92q-64-65-64-156q0-93 65.5-158.5T736.407 0t158.5 65.5t65.5 158.5q0 91-64 156zm-512 0q0-66-47-113t-113-47t-113 47t-47 113v92q-64-65-64-156q0-93 65.5-158.5T224.407 0t158.5 65.5t65.5 158.5q0 91-64 156z"></svg:path>`,
})
export class WhhEarbudsaltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEditIcon],svg[whh-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1023h-768q-53 0-90.5-37.5T.428 895V127q0-53 37.5-90t90.5-37h576l-128 127h-384q-27 0-45.5 19t-18.5 45v640q0 27 19 45.5t45 18.5h640q27 0 45.5-18.5t18.5-45.5V447l128-128v576q0 53-37.5 90.5t-90.5 37.5m-576-464l144 144l-208 64zm208 96l-160-159l479-480q17-16 40.5-16t40.5 16l79 80q16 16 16.5 39.5t-16.5 40.5z"></svg:path>`,
})
export class WhhEditIcon {
  readonly viewBox = input("0 0 1025 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEditaltIcon],svg[whh-editalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 1024H192q-26 0-45-18.5T128 960V600l279 278q18 19 46 17h123q26 0 45-18.5t19-45.5V704q0-23-19-41L128 170V65q0-27 19-45.5T192 1h448v352q0 13 9 22.5t23 9.5h351v575q0 27-18.5 45.5T960 1024M704 0q26 0 44 18l256 257q19 19 19 46H704zM79 444l-68-67Q0 365 0 349t11-27l55-55q11-11 27.5-11t27.5 11l67 67zm497 291v64q0 14-9.5 23t-22.5 9h-64q-14 0-26-11L130 496l110-110l324 324q12 12 12 25"></svg:path>`,
})
export class WhhEditaltIcon {
  readonly viewBox = input("0 0 1023 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEggIcon],svg[whh-egg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 0q61 0 117 32.5t96.5 86.5t74 121.5t54 139.5T757 518.5T768 640q0 104-51.5 192.5t-140 140T384 1024t-192.5-51.5t-140-140T0 640q0-55 11-121.5T42.5 380t54-139.5t74-121.5T267 32.5T384 0"></svg:path>`,
})
export class WhhEggIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEggplantIcon],svg[whh-eggplant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 64q-41 0-86 55q54 48 54 105q0 72-23 159.5t-64 176T772 732T643 880.5t-153.5 104T320 1024q-87 0-160.5-43T43 864.5T0 704t43-160.5T159.5 427T320 384q45 0 87.5-17t72-41.5t52-52T565 224t11-32q0-42 30.5-72T679 77t89-13q34 0 72 14q24-26 59.5-45T958 7t31-7q15 0 25 9.5t10 23t-9 22.5t-23 9"></svg:path>`,
})
export class WhhEggplantIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEgyptpyramidIcon],svg[whh-egyptpyramid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 384L672 160l96-96l256 320zM0 640L480 0l480 640z"></svg:path>`,
})
export class WhhEgyptpyramidIcon {
  readonly viewBox = input("0 0 1024 640")
  readonly width = input("1.6em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEightballIcon],svg[whh-eightball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m-96-896q-119 0-203.5 84.5T128 416t84.5 203.5T416 704t203.5-84.5T704 416t-84.5-203.5T416 128m94 303q7 48-19.5 88T417 572q-51 13-97-13.5T260 481q-11-43 6.5-83t55.5-61q-7-48 19.5-88t73.5-53q51-13 97 13.5t60 77.5q11 43-6.5 83T510 431m-143-45q-25 7-38.5 30t-6.5 48.5t30 39t48.5 6.5t39-30t6.5-49q-2-7-6.5-9t-11.5-2.5t-12-3.5t-14.5-12.5t-18-14.5t-16.5-3m143-83q-7-25-30-38.5t-49-6.5q-22 6-35 24.5T384 324q23 4 64 28q23 13 34 22q17-11 25-30.5t3-40.5"></svg:path>`,
})
export class WhhEightballIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEjectIcon],svg[whh-eject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 511q-40-37-13-62L474 14q15-14 37.5-14T550 14l463 435q27 26-13 62zm104 256h768q53 0 90.5 37.5T1024 895t-37.5 90.5T896 1023H128q-53 0-90.5-37.5T0 895t37.5-90.5T128 767"></svg:path>`,
})
export class WhhEjectIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhElementaryosIcon],svg[whh-elementaryos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m0-64q91 0 174-35.5T829 829t95.5-143T960 512q0-3-.5-8t-.5-7q-31 56-78.5 113T774 717.5T645.5 800T512 832q-55 0-109.5-21.5T303 748q-53 36-126 61q63 71 150 111t185 40M320 672q10 0 45.5-24t81.5-64t89.5-86.5T610 400t30-90q0-51-39.5-84.5T496 192q-105 0-172.5 76T256 451q0 162 55 214zM512 64q-91 0-174 35.5T195 195T99.5 338T64 512q0 134 74 246q69-18 118-54q-64-83-64-224q0-166 87-259t233-93q80 0 136 47t56 113q0 56-24 113t-60 103.5t-82.5 89t-89 72T367 715q69 53 145 53q58 0 126-37.5t126.5-95t106-124.5T941 384q-42-140-160.5-230T512 64"></svg:path>`,
})
export class WhhElementaryosIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhElevatorIcon],svg[whh-elevator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M800.857 256h-32v736q0 13-9.5 22.5t-22.5 9.5h-640q-13 0-22.5-9.5t-9.5-22.5V256h-32q-13 0-22.5-9.5T.857 224V32q0-13 9.5-22.5t22.5-9.5h768q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5m-416 704h64V256h-64zm32-896q-66 0-113 37.5t-47 90.5h320q0-53-47-90.5t-113-37.5"></svg:path>`,
})
export class WhhElevatorIcon {
  readonly viewBox = input("0 0 833 1024")
  readonly width = input("0.82em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhElggIcon],svg[whh-elgg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 832q122 0 212.5-71T832 576q0-40 28-68t68-28t68 28t28 68q0 93-44.5 177.5t-116 143t-164 93T512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0q134 0 256 72t192 184q13 24 16.5 46t-8 44.5T928 384L462 628q-34 19-72 9t-57.5-42.5t-9-69T367 470l371-183q-94-95-226-95q-87 0-160.5 43T235 351.5T192 512t43 160.5T351.5 789T512 832"></svg:path>`,
})
export class WhhElggIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhElipseIcon],svg[whh-elipse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-960q-91 0-174 35.5T195 195T99.5 338T64 512t35.5 174T195 829t143 95.5T512 960t174-35.5T829 829t95.5-143T960 512t-35.5-174T829 195T686 99.5T512 64"></svg:path>`,
})
export class WhhElipseIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEmailaltIcon],svg[whh-emailalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512.5 384L.5 125V64q0-27 19-45.5T64.5 0h896q26 0 45 18.5t19 45.5v61zm-32 64h64l480-249v505q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45V199z"></svg:path>`,
})
export class WhhEmailaltIcon {
  readonly viewBox = input("0 0 1025 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEmailexportIcon],svg[whh-emailexport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1017 989L667 640l350-349q7 14 7 29v640q0 15-7 29M63 256h135q23-111 111-183.5T512 0t203 72.5T826 256h135L512 705zm513 224V320h120q8-10 8-23t-8-23L512 128L327 274q-8 10-8 23t8 23h121v160q0 13 9.5 22.5T480 512h64q13 0 22.5-9.5T576 480M7 989q-7-14-7-29V320q0-15 7-29l350 349zm466-233q6 6 15.5 9t16.5 3h7q26 1 39-12l71-71l339 339H63l339-339z"></svg:path>`,
})
export class WhhEmailexportIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEmailforwardIcon],svg[whh-emailforward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1017 989L667 640l350-349q7 14 7 29v640q0 15-7 29M63 256h135q23-110 111-183T512 0t203 73t111 183h135L512 705zm495 248l146-184l-146-185q-10-8-23-8t-23 8v121H352q-13 0-22.5 9.5T320 288v64q0 13 9.5 22.5T352 384h160v120q10 8 23 8t23-8M7 989q-7-14-7-29V320q0-15 7-29l350 349zm466-233q6 6 15.5 9t16.5 3h7q26 1 39-12l71-71l339 339H63l339-339z"></svg:path>`,
})
export class WhhEmailforwardIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEmailforwardersIcon],svg[whh-emailforwarders-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1017.64 733l-350-349l350-350q7 15 7 30v640q0 15-7 29M63.64 0h898l-449 449zm-56 733q-7-14-7-29V64q0-15 7-30l350 350zm466-233q6 6 15.5 9t16.5 3h7q26 1 39-12l71-71l339 339h-1v2l.5 4l-.5 6l-2.5 7.5l-4.5 8.5l-8 10l-243 208q-8 7-28.5 8.5t-42-3.5t-38.5-18.5t-17-32.5v-72h-192q-26 0-45-19t-19-45v-64h-257l339-339zm-25 332h192v81q26 25 43 8l149-129q10-10 10-24t-10-24l-149-129q-17-17-43 8v81h-192q-27 0-45.5 18.5t-18.5 45t19 45.5t45 19"></svg:path>`,
})
export class WhhEmailforwardersIcon {
  readonly viewBox = input("0 0 1025 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEmailimportIcon],svg[whh-emailimport-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1017 989L667 640l350-349q7 14 7 29v640q0 15-7 29M63 256h135q23-111 111-183.5T512 0t203 72.5T826 256h135L512 705zm633 110q8-10 8-23t-8-23H576V160q0-13-9.5-22.5T544 128h-64q-13 0-22.5 9.5T448 160v160H327q-8 10-8 23t8 23l185 146zM7 989q-7-14-7-29V320q0-15 7-29l350 349zm466-233q6 6 15.5 9t16.5 3h7q26 1 39-12l71-71l339 339H63l339-339z"></svg:path>`,
})
export class WhhEmailimportIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEmailrefreshIcon],svg[whh-emailrefresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m667 640l350-349q7 14 7 29v640q0 15-7 29zM63 256h135q23-111 111-183.5T512 0t203 72.5T826 256h135L512 705zm449-128q-45 0-84 20t-66 54l-10-10q-13 0-22.5 9.5T320 224v64q0 13 9.5 22.5T352 320h64q13 0 22.5-9.5T448 288l-41-41q18-25 45.5-40t59.5-15q37 0 67.5 19.5T626 263l57-29q-24-48-70-77t-101-29m150 310l10 10q13 0 22.5-9.5T704 416v-64q0-13-9.5-22.5T672 320h-64q-13 0-22.5 9.5T576 352l41 41q-39 55-105 55q-37 0-67.5-19.5T398 377l-57 29q24 48 70 77t101 29q45 0 84-20t66-54M7 989q-7-14-7-29V320q0-15 7-29l350 349zm395-304l71 71q6 6 15.5 9t16.5 3h7q26 1 39-12l71-71l339 339H63z"></svg:path>`,
})
export class WhhEmailrefreshIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEmailtraceIcon],svg[whh-emailtrace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1017.084 734l-59-59q2-19 2-35q0-110-67.5-196t-171.5-113l296-296q7 14 7 29v640q0 15-7 30m-377-414q-106 0-192 65l-385-385h898l-320 320zm-633 414q-7-15-7-30V64q0-15 7-29l350 349zm313-94q0 67 27 128h-284l325-324q-68 87-68 196m320-256q106 0 181 75t75 181q0 75-41 138l161 160q8 8 8 19.5t-8 19.5l-39 39q-8 8-19.5 8t-19.5-8l-160-160q-64 40-138 40q-106 0-181-75t-75-181t75-181t181-75m0 384q53 0 90.5-37.5t37.5-90.5t-37.5-90.5t-90.5-37.5t-90.5 37.5t-37.5 90.5t37.5 90.5t90.5 37.5"></svg:path>`,
})
export class WhhEmailtraceIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEmergencyIcon],svg[whh-emergency-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m0-576q0-27-18.5-45.5t-45.5-18.5h-192V192q0-27-18.5-45.5t-45.5-18.5h-128q-27 0-45.5 18.5t-18.5 45.5v192h-192q-26 0-45 18.5t-19 45.5v128q0 27 19 45.5t45 18.5h192v192q0 27 19 45.5t45 18.5h128q27 0 45.5-18.5t18.5-45.5V640h192q27 0 45.5-18.5t18.5-45.5z"></svg:path>`,
})
export class WhhEmergencyIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEmojiangryIcon],svg[whh-emojiangry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m-73-662l-195-98q-9-9-21.5-9t-21.5 9t-9 22t9 21l173 77l-173 76q-9 9-9 21.5t9 21.5t21.5 9t21.5-9l195-98q9-9 9-21.5t-9-21.5M256 805q0 11 7.5 19t18.5 8h460q11 0 18.5-8t7.5-19q-31-93-91-129t-165-36t-165 36t-91 129m567-498q9-9 9-21.5t-9-21.5t-21.5-9t-21.5 9l-195 98q-9 9-9 21.5t9 21.5l195 98q9 9 21.5 9t21.5-9t9-21.5t-9-21.5l-173-76z"></svg:path>`,
})
export class WhhEmojiangryIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEmojiconfusedIcon],svg[whh-emojiconfused-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5M288 256q-66 0-113 47t-47 113t47 113t113 47t113-47t47-113t-47-113t-113-47m128 512q-13 0-22.5 9.5T384 800t9.5 22.5T416 832h192q13 0 22.5-9.5T640 800t-9.5-22.5T608 768zm320-512q-66 0-113 47t-47 113t47 113t113 47t113-47t47-113t-47-113t-113-47m-31.5 256q-26.5 0-45.5-19t-19-45.5t19-45t45.5-18.5t45 18.5T768 448t-18.5 45.5t-45 18.5m-384 0q-26.5 0-45.5-19t-19-45.5t19-45t45.5-18.5t45 18.5T384 448t-18.5 45.5t-45 18.5"></svg:path>`,
})
export class WhhEmojiconfusedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEmojicryIcon],svg[whh-emojicry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M895 851q-7-211-95-211q-20 0-28-69q-19 5-36 5q-9 0-24-3q18 131 88 131q32 0 32 192h18q-69 61-156 94.5T512 1024t-182-33.5T174 896h18q0-192 32-192q70 0 88-131q-15 3-24 3q-17 0-36-5q-8 69-28 69q-88 0-95 211q-61-70-95-156.5T0 512q0-104 40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199q0 96-34 183t-95 156M288 256q-40 0-68 37.5T192 384t28 90.5t68 37.5t68-37.5t28-90.5t-28-90.5t-68-37.5m32 544q0 13 9.5 22.5T352 832t22.5-9.5T384 800q0-8 4.5-13.5t15-9t20-5.5t27.5-3t29-1h64l29 1l27.5 3l20 5.5l15 9L640 800q0 13 9.5 22.5T672 832t22.5-9.5T704 800q0-96-192-96t-192 96m416-544q-40 0-68 37.5T640 384t28 90.5t68 37.5t68-37.5t28-90.5t-28-90.5t-68-37.5"></svg:path>`,
})
export class WhhEmojicryIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEmojideadIcon],svg[whh-emojidead-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5M374 377q9-10 9-24t-9.5-24t-23.5-10t-24 10l-39 39l-38-39q-10-10-24-10t-24 10t-10 24t10 24l39 38l-39 39q-10 10-10 24t10 23.5t24 9.5t24-9l38-39l39 39q10 9 24 9t23.5-9.5T383 478t-9-24l-39-39zm138 327q-53 0-90.5 28T384 800t37.5 68t90.5 28t90.5-28t37.5-68t-37.5-68t-90.5-28m310-327q9-10 9-24t-9.5-24t-23.5-10t-24 10l-39 39l-38-39q-10-10-24-10t-24 10t-10 24t10 24l39 38l-39 39q-10 10-10 24t10 23.5t24 9.5t24-9l38-39l39 39q10 9 24 9t23.5-9.5T831 478t-9-24l-39-39z"></svg:path>`,
})
export class WhhEmojideadIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEmojidevilIcon],svg[whh-emojidevil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M969.032 282q55 110 55 231q0 104-40.5 199t-109 163.5t-163.5 109t-199 40.5t-199-40.5t-163.5-109t-109-163.5t-40.5-199q0-121 55-231l-48-218q-14-38 2-54.5t54-2.5l147 93q135-99 301.5-99t302.5 99l147-93q37-14 53.5 2.5t2.5 54.5zm-329 103q0 53 28 90.5t68 37.5t68-37.5t28-90.5q0-47-24-84zm-128 512q67 0 139.5-19t126.5-57.5t54-83.5q0-13-9.5-22.5t-22.5-9.5h-576q-13 0-22.5 9.5t-9.5 22.5q0 45 54 83.5t126.5 57.5t139.5 19m-224-384q40 0 68-37.5t28-90.5l-168-84q-24 37-24 84q0 53 28 90.5t68 37.5"></svg:path>`,
})
export class WhhEmojidevilIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEmojigrinIcon],svg[whh-emojigrin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m-73-628l-98-131q-8-9-21-9t-22 9l-97 131q-9 9-9 21.5t9 21.5t21.5 9t21.5-9l76-109l76 109q9 9 21.5 9t21.5-9t9-21.5t-9-21.5m384 0l-97-131q-9-9-22-9t-22 9l-97 131q-9 9-9 21.5t9 21.5t21.5 9t21.5-9l76-109l76 109q9 9 21.5 9t21.5-9t9-21.5t-9-21.5m-23 244H224q-13 0-22.5 9.5T192 672q0 45 54 83.5T372.5 813T512 832t139.5-19.5T778 755t54-83q0-13-9.5-22.5T800 640"></svg:path>`,
})
export class WhhEmojigrinIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEmojigrinaltIcon],svg[whh-emojigrinalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m-73-662l-195-98q-9-9-21.5-9t-21.5 9t-9 22t9 21l173 77l-173 76q-9 9-9 21.5t9 21.5t21.5 9t21.5-9l195-98q9-9 9-21.5t-9-21.5m384-55q9-9 9-21.5t-9-21.5t-21.5-9t-21.5 9l-195 98q-9 9-9 21.5t9 21.5l195 98q9 9 21.5 9t21.5-9t9-21.5t-9-21.5l-173-76zm-23 333H224q-13 0-22.5 9.5T192 672q0 45 54 83.5T372.5 813T512 832t139.5-19.5T778 755t54-83q0-13-9.5-22.5T800 640"></svg:path>`,
})
export class WhhEmojigrinaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEmojisleepIcon],svg[whh-emojisleep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M926 192h66q13 0 22.5 9.5t9.5 22.5t-9.5 22.5T992 256H864q-13 0-22.5-9.5T832 224t10-23l88-137h-66q-13 0-22.5-9T832 32.5t9.5-23T864 0h128q12 0 22 11.5t10 20.5t-8 22zm-158 64q0 25 19.5 44.5T832 320h154q38 93 38 192q0 104-40.5 199t-109 163.5t-163.5 109t-199 40.5t-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0q177 0 317 111l-29 49q-11 11-21.5 37.5T768 256M320 448q-53 0-90.5 28T192 544q0 15 8 32q13-28 46-46t74-18t74 18t46 46q8-16 8-32q0-40-37.5-68T320 448m64 384.5q0 26.5 37.5 45T512 896t90.5-18.5t37.5-45t-37.5-45.5t-90.5-19t-90.5 19t-37.5 45.5M576 544q0 16 8 32q13-28 46-46t74-18t74 18t46 46q8-16 8-32q0-40-37.5-68T704 448t-90.5 28t-37.5 68"></svg:path>`,
})
export class WhhEmojisleepIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEmojismileIcon],svg[whh-emojismile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m-73-629l-89-118q-1-1-3.5-4t-3.5-3.5t-3-3t-3-3.5t-3-2.5t-3.5-2t-3.5-1.5t-4-1.5t-4-.5q-12 0-30 24l-88 117q-9 9-9 21.5t9 21.5t22 9t22-9l75-100l75 100q9 9 22 9t22-9t9-22t-9-22m384 0l-89-118q-15-21-31-22q-12 0-30 24l-88 117q-9 9-9 21.5t9 21.5t22 9t22-9l75-100l75 100q9 9 22 9t22-9t9-22t-9-22m-23 245q-13 0-22.5 9.5T768 672q-14 20-28.5 35.5t-27 25.5t-31.5 17t-32.5 10.5t-40 5t-43.5 2t-53 .5t-53-.5t-43.5-2t-40-5T343 750t-31.5-17t-27-25.5T256 672q0-13-9.5-22.5T224 640t-22.5 9.5T192 672q24 73 110 116.5T512 832t210-43.5T832 672q0-13-9.5-22.5T800 640"></svg:path>`,
})
export class WhhEmojismileIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEmojisorryIcon],svg[whh-emojisorry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 512q0 104-40.5 199t-109 163.5t-163.5 109t-199 40.5t-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0q157 0 286 87l66-87l113 151q39 42 45.5 101.5T1001 361q23 74 23 151m-585 11l-89-118q-1-1-3.5-4t-3.5-3.5t-3-3t-3-3t-3-2.5t-3.5-2.5t-3.5-1.5t-4-1t-4-1q-12 0-30 24l-88 117q-9 9-9 21.5t9 21.5t22 9t22-9l75-100l75 100q9 9 22 9t22-9t9-22t-9-22m-23 245q-13 0-22.5 9.5T384 800t9.5 22.5T416 832h192q13 0 22.5-9.5T640 800t-9.5-22.5T608 768zm257-361l-88 117q-9 9-9 21.5t9 21.5t22 9t22-9l75-100l75 100q9 9 22 9t22-9t9-22t-9-22l-89-118q-15-21-31-22q-12 0-30 24m259-193l-68-86l-68 86q-28 29-28 70.5t28 70.5t68 29t68-29t28-70.5t-28-70.5"></svg:path>`,
})
export class WhhEmojisorryIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEmojisurpriseIcon],svg[whh-emojisurprise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5M288 256q-40 0-68 37.5T192 384t28 90.5t68 37.5t68-37.5t28-90.5t-28-90.5t-68-37.5m224 448q-53 0-90.5 28T384 800t37.5 68t90.5 28t90.5-28t37.5-68t-37.5-68t-90.5-28m224-448q-40 0-68 37.5T640 384t28 90.5t68 37.5t68-37.5t28-90.5t-28-90.5t-68-37.5"></svg:path>`,
})
export class WhhEmojisurpriseIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEmojiwinkIcon],svg[whh-emojiwink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m-96-640H224q-13 0-22.5 9.5T192 416t9.5 22.5T224 448h192q13 0 22.5-9.5T448 416t-9.5-22.5T416 384m320-128q-40 0-68 37.5T640 384t28 90.5t68 37.5t68-37.5t28-90.5t-28-90.5t-68-37.5m64 384q-13 0-22.5 9.5T768 672q-14 20-28.5 35.5t-27 25.5t-31.5 17t-32.5 10.5t-40 5t-43.5 2t-53 .5t-53-.5t-43.5-2t-40-5T343 750t-31.5-17t-27-25.5T256 672q0-13-9.5-22.5T224 640t-22.5 9.5T192 672q24 73 110 116.5T512 832t210-43.5T832 672q0-13-9.5-22.5T800 640"></svg:path>`,
})
export class WhhEmojiwinkIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEmptycartIcon],svg[whh-emptycart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 513H64q-27 0-45.5-18.5T0 449.5T18.5 404T64 385h56q20 30 51.5 47t68.5 17t68.5-17t51.5-47h304q20 30 51.5 47t68.5 17t68.5-17t51.5-47h56q27 0 45.5 19t18.5 45.5t-19 45t-45 18.5M806 379q-19 11-40 5t-32-25L583 81q-11-19-5.5-40.5T602 8t40-5t32 25l151 278q11 19 5.5 40.5T806 379m-516-20q-11 19-32 25t-40-5t-24.5-32.5T199 306L350 28q11-19 32-25t40 5t24.5 32.5T441 81zm606 602q-8 40-29.5 52t-65.5 12H227q-45 0-68-12t-31-52L64 577h896zM736 769H480q-13 0-22.5 9.5T448 801t9.5 22.5T480 833h256q13 0 22.5-9.5T768 801t-9.5-22.5T736 769"></svg:path>`,
})
export class WhhEmptycartIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEmptystarIcon],svg[whh-emptystar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M900 565q-46 46-88 78q7 36 12 71q8 68 9 113.5t-7.5 77T800 949t-48 11.5t-71.5-16.5t-99.5-44q-35-18-69-39q-32 20-69 39q-59 29-99.5 44T272 960.5T224 949t-25.5-44.5t-7.5-77t9-113.5q5-35 12-71q-43-32-88-78q-48-48-76.5-83.5T7.5 416T3 365t35-39t72.5-30.5T225 270q49-8 91-12q18-42 42-87q32-59 57-95.5t50-56T512 0t47 19.5t50 56t57 95.5q25 46 42 87q42 4 91 12q70 13 114.5 25.5T986 326t35 39t-4.5 51t-40 65.5T900 565M750 390q-68-6-117-5q-10-43-33-97q-27-66-47-96.5T512 161t-41 30.5t-47 96.5q-22 54-32 97q-50-1-118 5q-39 4-67 8t-45.5 9.5t-26.5 11t-6.5 14t9 16t25 19.5t38 23t49.5 28q72 38 106 49q-18 43-26 121q-1 6-3 19q-3 28-4.5 40.5t-2 31t-1 25T322 820t4.5 10.5t10 2.5t13.5-2t19.5-9.5t24-12T424 792l15-9q46-26 73-45q27 19 73 45q5 3 14 9q22 12 31.5 17.5t24 12T674 831t13.5 2t10-2.5T702 820t2.5-15.5t-1-25t-2-31T697 707q-2-12-2-18q-9-79-27-122q35-11 106-48q30-17 49.5-28t38-23t25-19.5t9-16t-6.5-14t-26.5-11T817 398t-67-8"></svg:path>`,
})
export class WhhEmptystarIcon {
  readonly viewBox = input("0 0 1024 961")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEnterIcon],svg[whh-enter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 1024H448q-53 0-90.5-37.5T320 896v-64q0-27 19-45.5t45.5-18.5t45 18.5t18.5 45t19 45.5t45 19h320q27 0 45.5-19t18.5-45V192q0-27-18.5-45.5T832 128H512q-26 0-45 18.5t-19 45t-18.5 45.5t-45 19t-45.5-19t-19-45v-64q0-53 37.5-90.5T448 0h448q53 0 90.5 37.5T1024 128v768q0 53-37.5 90.5T896 1024M430 555L267 755q-12 12-30 12.5t-32-7.5t-14-19V640H64q-27 0-45.5-18.5T0 576V448q0-27 18.5-45.5T64 384h127V284q0-12 14-20t32-7.5t30 12.5l163 199q17 18 17 43.5T430 555"></svg:path>`,
})
export class WhhEnterIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEnteraltIcon],svg[whh-enteralt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 1024H448q-53 0-90.5-37.5T320 896v-64q0-27 19-45.5t45.5-18.5t45 18.5t18.5 45t19 45.5t45 19h256q27 0 45.5-19t18.5-45V192q0-27-18.5-45.5T768 128H512q-26 0-45 18.5t-19 45t-18.5 45.5t-45 19t-45.5-19t-19-45v-64q0-53 37.5-90.5T448 0h448q53 0 90.5 37.5T1024 128v768q0 53-37.5 90.5T896 1024M512 284q0-12 13.5-20t32-7.5T587 269l163 199q17 19 17 44t-17 43L587 755q-11 12-29.5 12.5t-32-7.5t-13.5-19V640H64q-27 0-45.5-18.5T0 576V448q0-27 18.5-45.5T64 384h448z"></svg:path>`,
})
export class WhhEnteraltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEnvelopeIcon],svg[whh-envelope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m512.426 449l-449-449h898zm-505 284q-7-14-7-29V64q0-15 7-29l350 349zm466-232q6 5 15.5 8t16.5 3h7q26 1 39-11l71-72l339 339h-898l339-339zm544-466q7 14 7 29v640q0 15-7 29l-350-349z"></svg:path>`,
})
export class WhhEnvelopeIcon {
  readonly viewBox = input("0 0 1025 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEqualizerIcon],svg[whh-equalizer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.85 704h-192q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-160-640q0-27 18.5-45.5T896.85 0t45.5 18.5t18.5 45.5v448h-128zm-224 320h-192q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-160-320q0-27 19-45.5t45-18.5t45 18.5t19 45.5v128h-128zm-224 768h-192q-13 0-22.5-9.5T.85 800v-64q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-160-768q0-27 18.5-45.5T128.85 0t45.5 18.5t18.5 45.5v576h-128zm128 896q0 26-18.5 45t-45.5 19t-45.5-19t-18.5-45v-64h128zm384 0q0 26-19 45t-45 19t-45-19t-19-45V448h128zm384 0q0 26-19 45t-45.5 19t-45-19t-18.5-45V768h128z"></svg:path>`,
})
export class WhhEqualizerIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEqualizeraltIcon],svg[whh-equalizeralt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.232 704h-128q-27 0-45.5-19t-18.5-45.5t18.5-45t45.5-18.5h128q26 0 45 18.5t19 45t-19 45.5t-45 19m0-192h-128q-27 0-45.5-19t-18.5-45.5t18.5-45t45.5-18.5h128q26 0 45 18.5t19 45t-19 45.5t-45 19m0-192h-128q-27 0-45.5-18.5t-18.5-45.5t18.5-45.5t45.5-18.5h128q26 0 45 18.5t19 45t-19 45.5t-45 19m-384 576h-128q-27 0-45.5-19t-18.5-45.5t18.5-45t45.5-18.5h128q27 0 45.5 18.5t18.5 45t-19 45.5t-45 19m0-192h-128q-27 0-45.5-19t-18.5-45.5t18.5-45t45.5-18.5h128q27 0 45.5 18.5t18.5 45t-19 45.5t-45 19m0-192h-128q-27 0-45.5-19t-18.5-45.5t18.5-45t45.5-18.5h128q27 0 45.5 18.5t18.5 45t-19 45.5t-45 19m-384 384h-128q-27 0-45.5-19t-18.5-45.5t18.5-45t45.5-18.5h128q27 0 45.5 18.5t18.5 45t-19 45.5t-45 19m0-192h-128q-27 0-45.5-19t-18.5-45.5t18.5-45t45.5-18.5h128q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19m0-192h-128q-27 0-45.5-19t-18.5-45.5t18.5-45t45.5-18.5h128q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19m0-192h-128q-27 0-45.5-18.5T.232 256t18.5-45.5t45.5-18.5h128q27 0 45.5 18.5t18.5 45.5t-18.5 45.5t-45.5 18.5m0-192h-128q-27 0-45.5-18.5T.232 64t18.5-45.5T64.232 0h128q27 0 45.5 18.5t18.5 45t-19 45.5t-45 19m640 640h128q26 0 45 18.5t19 45t-19 45.5t-45 19h-128q-27 0-45.5-19t-18.5-45.5t18.5-45t45.5-18.5"></svg:path>`,
})
export class WhhEqualizeraltIcon {
  readonly viewBox = input("0 0 1025 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEqualizerthreeIcon],svg[whh-equalizerthree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 1024H32q-13 0-22.5-9.5T0 992t9.5-22.5T32 960h960q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m-64-128h-64q-13 0-22.5-9.5T832 864v-64q0-13 9.5-22.5T864 768h64q13 0 22.5 9.5T960 800v64q0 13-9.5 22.5T928 896m0-192h-64q-13 0-22.5-9.5T832 672v-64q0-13 9.5-22.5T864 576h64q13 0 22.5 9.5T960 608v64q0 13-9.5 22.5T928 704m0-192h-64q-13 0-22.5-9.5T832 480v-64q0-13 9.5-22.5T864 384h64q13 0 22.5 9.5T960 416v64q0 13-9.5 22.5T928 512M736 896h-64q-13 0-22.5-9.5T640 864v-64q0-13 9.5-22.5T672 768h64q13 0 22.5 9.5T768 800v64q0 13-9.5 22.5T736 896m0-192h-64q-13 0-22.5-9.5T640 672v-64q0-13 9.5-22.5T672 576h64q13 0 22.5 9.5T768 608v64q0 13-9.5 22.5T736 704m0-192h-64q-13 0-22.5-9.5T640 480v-64q0-13 9.5-22.5T672 384h64q13 0 22.5 9.5T768 416v64q0 13-9.5 22.5T736 512m0-192h-64q-13 0-22.5-9.5T640 288v-64q0-13 9.5-22.5T672 192h64q13 0 22.5 9.5T768 224v64q0 13-9.5 22.5T736 320m0-192h-64q-13 0-22.5-9.5T640 96V32q0-13 9.5-22.5T672 0h64q13 0 22.5 9.5T768 32v64q0 13-9.5 22.5T736 128M544 896h-64q-13 0-22.5-9.5T448 864v-64q0-13 9.5-22.5T480 768h64q13 0 22.5 9.5T576 800v64q0 13-9.5 22.5T544 896m0-192h-64q-13 0-22.5-9.5T448 672v-64q0-13 9.5-22.5T480 576h64q13 0 22.5 9.5T576 608v64q0 13-9.5 22.5T544 704m0-192h-64q-13 0-22.5-9.5T448 480v-64q0-13 9.5-22.5T480 384h64q13 0 22.5 9.5T576 416v64q0 13-9.5 22.5T544 512m0-192h-64q-13 0-22.5-9.5T448 288v-64q0-13 9.5-22.5T480 192h64q13 0 22.5 9.5T576 224v64q0 13-9.5 22.5T544 320M352 896h-64q-13 0-22.5-9.5T256 864v-64q0-13 9.5-22.5T288 768h64q13 0 22.5 9.5T384 800v64q0 13-9.5 22.5T352 896m0-192h-64q-13 0-22.5-9.5T256 672v-64q0-13 9.5-22.5T288 576h64q13 0 22.5 9.5T384 608v64q0 13-9.5 22.5T352 704M160 896H96q-13 0-22.5-9.5T64 864v-64q0-13 9.5-22.5T96 768h64q13 0 22.5 9.5T192 800v64q0 13-9.5 22.5T160 896m0-192H96q-13 0-22.5-9.5T64 672v-64q0-13 9.5-22.5T96 576h64q13 0 22.5 9.5T192 608v64q0 13-9.5 22.5T160 704m0-192H96q-13 0-22.5-9.5T64 480v-64q0-13 9.5-22.5T96 384h64q13 0 22.5 9.5T192 416v64q0 13-9.5 22.5T160 512m0-192H96q-13 0-22.5-9.5T64 288v-64q0-13 9.5-22.5T96 192h64q13 0 22.5 9.5T192 224v64q0 13-9.5 22.5T160 320"></svg:path>`,
})
export class WhhEqualizerthreeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEqualsIcon],svg[whh-equals-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.585 768h-896q-27 0-45.5-19t-18.5-45V576q0-27 18.5-45.5t45.5-18.5h896q27 0 45.5 18.5t18.5 45.5v128q0 27-18.5 45.5t-45.5 18.5m0-512h-896q-27 0-45.5-19t-18.5-45V64q0-27 18.5-45.5T64.585 0h896q27 0 45.5 18.5t18.5 45.5v128q0 26-18.5 45t-45.5 19"></svg:path>`,
})
export class WhhEqualsIcon {
  readonly viewBox = input("0 0 1025 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEraserIcon],svg[whh-eraser-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 1024H65q-27 0-45.5-18.5T1 960.5T19.5 915T65 896h895q27 0 45.5 19t18.5 45.5t-18.5 45T960 1024M827 793q-2 2-8.5 9T808 813t-11 9t-14 7.5t-15 2.5H512q-7 0-14.5-3t-15-8.5t-12-9.5t-10.5-10.5t-7-7.5L17 357Q0 339 0 314.5T17 273l130.5-130.5L273 17q17-17 41.5-17T357 17l585 586q18 17 18 41.5T942 687q-5 6-52 48t-63 58M544 372L372 544l160 160h217l64-64z"></svg:path>`,
})
export class WhhEraserIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhErroraltIcon],svg[whh-erroralt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m0-896q-104 0-192.5 51.5t-140 140T128 512t51.5 192.5t140 140T512 896t192.5-51.5t140-140T896 512t-51.5-192.5t-140-140T512 128m.5 512q-26.5 0-45.5-19t-19-45l-64-256q0-53 37.5-90.5T512 192t90.5 37.5T640 320l-64 256q0 26-18.5 45t-45 19m-.5 64q27 0 45.5 18.5t18.5 45t-19 45.5t-45.5 19t-45-19t-18.5-45.5t18.5-45T512 704"></svg:path>`,
})
export class WhhErroraltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEscalatorIcon],svg[whh-escalator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 320h-83L368 765l-7.5 7.5l-8.5 8.5l-9 8.5l-10.5 9l-11 8l-12 8.5l-12 7l-13.5 5.5l-13.5 3L256 832H128q-53 0-90.5-37.5T0 704t37.5-90.5T128 576h81l175-175V256q0-27 19-45.5t45.5-18.5t45 18.5T512 256v17l147-147q17-17 29-27.5T723.5 76T768 64h128q53 0 90.5 37.5T1024 192t-37.5 90.5T896 320m0-192H768q-26 0-50 18L224 640h-96q-27 0-45.5 18.5t-18.5 45T82.5 749t45.5 19h128q25 0 49-20l493-492h98q27 0 45.5-19t18.5-45.5t-18.5-45T896 128m-447.5 0q-26.5 0-45.5-19t-19-45.5t19-45T448.5 0t45 18.5t18.5 45t-18.5 45.5t-45 19"></svg:path>`,
})
export class WhhEscalatorIcon {
  readonly viewBox = input("0 0 1024 832")
  readonly width = input("1.24em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEtanoIcon],svg[whh-etano-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1019.5 432q-6.5 11-19.5 14.5t-24-2.5L768 340v197l124 247q6 11 3 24t-14.5 19.5t-24.5 3t-20-14.5L736 616L636 816q-7 11-20 14.5t-24-3t-14.5-19.5t2.5-24l124-247V343L528 444q-8 4-16 4q-5 0-16-4L320 343v194l124 247q6 11 3 24t-14.5 19.5t-24.5 3t-20-14.5L288 616L188 816q-7 11-20 14.5t-24.5-3T129 808t3-24l124-247V340L48 444q-11 6-24 2.5T4.5 432t-3-24T16 388l255-128q8-4 17-4t16 4l208 119l208-119q8-4 16-4q10 0 17 4l255 128q11 7 14.5 20t-3 24M736 192q-40 0-68-28t-28-68t28-68t68-28t68 28t28 68t-28 68t-68 28m-448 0q-40 0-68-28t-28-68t28-68t68-28t68 28t28 68t-28 68t-68 28"></svg:path>`,
})
export class WhhEtanoIcon {
  readonly viewBox = input("0 0 1024 832")
  readonly width = input("1.24em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEuroIcon],svg[whh-euro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832.5 384q-26.5 0-45.5-18.5T768 320q-21-83-94-137.5T512 128q-88 0-157 54t-91 138h184q27 0 45.5 19t18.5 45.5t-18.5 45T448 448H256v128h192q27 0 45.5 19t18.5 45.5t-18.5 45T448 704H264q22 84 91 138t157 54q89 0 162-54.5T768 704q0-26 19-45t45.5-19t45 19t18.5 45q0 23-15 41q-35 122-137 200.5T512 1024q-142 0-248.5-91.5T134 704H64q-27 0-45.5-18.5T0 640.5T18.5 595T64 576h64V448H64q-27 0-45.5-18.5T0 384.5T18.5 339T64 320h70q23-137 129.5-228.5T512 0q130 0 232 78.5T881 279q15 18 15 41q0 27-18.5 45.5t-45 18.5"></svg:path>`,
})
export class WhhEuroIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEuroaltIcon],svg[whh-euroalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 759v8l-4-2q-67 118-185.5 188T512 1023q-104 0-199-40.5t-163.5-109T40.5 710T0 511t40.5-198.5t109-163T313 40.5T512 0q140 0 258.5 70T956 258l4-3v9q64 115 64 247t-64 248m-512-56q27 0 45.5-18.5t18.5-45t-18.5-45.5t-45.5-19H327q-7-32-7-64q0-31 7-64h121q26 0 45-18.5t19-45t-18.5-45.5t-45.5-19h-52q64-64 148-64q61 0 112.5 35t80.5 93h-1q7 15 25.5 23.5T800 415q27 0 45.5-18.5T864 351q0-34-28-53q-49-78-125.5-124.5T544 127q-96 0-177 52.5T239 319h-47q-26 0-45 19t-19 45.5t19 45t45 18.5h5q-5 34-5 64t5 64h-5q-26 0-45 19t-19 45.5t19 45t45 18.5h47q47 88 128 140t177 52q90 0 166.5-46T836 724q28-19 28-53q0-26-18.5-45T800 607q-20 0-38.5 8.5T736 639l1 1q-29 58-80.5 92.5T544 767q-84 0-148-64z"></svg:path>`,
})
export class WhhEuroaltIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEurosquareIcon],svg[whh-eurosquare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-448-320q27 0 45.5-18.5t18.5-45.5t-18.5-45.5t-45.5-18.5h-121q-7-32-7-64q0-31 7-64h121q27 0 45.5-19t18.5-45.5t-18.5-45t-45.5-18.5h-52q64-64 148-64q61 0 112.5 34.5t81.5 92.5l5-3q8 16 23.5 26t33.5 10q27 0 45.5-19t18.5-45q0-34-28-53q-49-79-125.5-125t-166.5-46q-96 0-177 52t-128 140h-47q-27 0-45.5 18.5t-18.5 45t18.5 45.5t45.5 19h5q-5 34-5 64t5 64h-5q-27 0-45.5 18.5t-18.5 45t18.5 45.5t45.5 19h47q47 88 128 140t177 52q90 0 166.5-46t125.5-125q28-19 28-53q0-27-18.5-45.5t-45.5-18.5q-18 0-33.5 10t-23.5 26l-5-3q-30 58-81.5 92.5t-112.5 34.5q-84 0-148-64z"></svg:path>`,
})
export class WhhEurosquareIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEventIcon],svg[whh-event-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.5 960h-896q-27 0-45.5-18.5T.5 896V384h1024v512q0 27-18.5 45.5T960.5 960m-192-384h-256v192h256zM.5 192q0-27 19-45.5t45-18.5h64V64q0-26 19-45T193 0t45 19t18.5 45v64h512V64q0-26 19-45T833 0t45 19t18.5 45v64h64q27 0 45.5 19t18.5 45v128H.5z"></svg:path>`,
})
export class WhhEventIcon {
  readonly viewBox = input("0 0 1025 960")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEventumIcon],svg[whh-eventum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1024V0h1024v1024zM960 64H64v896h896zM832 320H384v128h256v128H384v128h448v128H192V192h640z"></svg:path>`,
})
export class WhhEventumIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEvernoteIcon],svg[whh-evernote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M897 641q0 177-24 259t-80 96q-3 1-22 6.5t-31 8t-33.5 6.5t-45.5 6t-52 2q-104 0-128-32q-10-14-21-45t-11-51q0-67 28.5-97.5T577 769q64 0 64 32q0 1-7 8.5T611 825t-34 8q-14 0-39 20.5T513 897q0 21 26 42.5t70 21.5q19 0 31-1t26-4.5t21.5-10T700 927t5-30V769q0-14-2-24.5t-5-17.5t-9.5-11.5t-11.5-7t-15-3.5t-16-1t-18 .5t-19 .5q-102 0-128-32l-4.5-5.5l-7.5-9.5l-7-11l-7.5-17l-5.5-21q0 30-31.5 69T348 743t-59 26h-96q-30 0-76.5-36.5t-81-83T1 577V321q0-27 17-45.5T65 257h128q20 0 42-23t22-41V65q0-29 25.5-46.5T360 1q58 0 108 19t77 45q71 1 110 3t84 9t62 20q27 21 41 33.5t29 31.5t20.5 42t5.5 53zM705.5 385q-26.5 0-45.5 19t-19 45l103 51q25-19 25-51q0-26-18.5-45t-45-19M161 193H2l-1-1q-2-4 27-43t54-67q24-26 62-55t47-26l2 4v156q0 13-9 22.5t-23 9.5"></svg:path>`,
})
export class WhhEvernoteIcon {
  readonly viewBox = input("0 0 897 1025")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhExclamationsignIcon],svg[whh-exclamationsign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m0-192q27 0 45.5-18.5t18.5-45t-19-45.5t-45-19t-45 19t-19 45.5t18.5 45T512 832m0-640q-53 0-90.5 37.5T384 320l64 256q0 27 19 45.5t45 18.5t45-18.5t19-45.5l64-256q0-53-37.5-90.5T512 192"></svg:path>`,
})
export class WhhExclamationsignIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhExcludeshapeIcon],svg[whh-excludeshape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-512q-53 0-90.5-37.5t-37.5-90.5V768h-128q-53 0-90.5-37.5T.428 640V128q0-53 37.5-90.5t90.5-37.5h512q53 0 90.5 37.5t37.5 90.5v128h128q53 0 90.5 37.5t37.5 90.5v512q0 53-37.5 90.5t-90.5 37.5m-256-640h-224q-13 0-22.5 9.5t-9.5 22.5v224h224q13 0 22.5-9.5t9.5-22.5z"></svg:path>`,
})
export class WhhExcludeshapeIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhExitIcon],svg[whh-exit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1006.428 555l-163 200q-11 12-29.5 12.5t-32-7.5t-13.5-19V640h-128q-26 0-45-18.5t-19-45.5V448q0-27 19-45.5t45-18.5h128V284q0-12 13.5-20t32-7.5t29.5 12.5l163 199q18 18 18 43.5t-18 43.5m-365.5-299q-26.5 0-45.5-19t-19-45.5t-18.5-45t-45.5-18.5h-320q-26 0-45 18.5t-19 45.5v640q0 26 19 45t45 19h320q27 0 45.5-19t18.5-45.5t19-45t45.5-18.5t45 18.5t18.5 45.5v64q0 53-37.5 90.5t-90.5 37.5h-448q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h448q53 0 90.5 37.5t37.5 90.5v64q0 26-18.5 45t-45 19"></svg:path>`,
})
export class WhhExitIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhExitaltIcon],svg[whh-exitalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 1025H448q-53 0-90.5-37.5T320 897v-64q0-27 18.5-45.5t45-18.5t45.5 18.5t19 45t18.5 45.5t45.5 19h256q26 0 45-19t19-45V192q0-26-19-45t-45-19H512q-27 0-45.5 19T448 192.5T429 238t-45.5 19t-45-19t-18.5-46v-64q0-53 37.5-90.5T448 0h448q53 0 90.5 37.5T1024 128v769q0 53-37.5 90.5T896 1025M704 384q26 0 45 19t19 45v129q0 26-19 45t-45 19H256v101q0 11-13.5 19t-32 7t-29.5-12L18 556Q0 538 0 512.5T18 469l163-200q11-11 29.5-11.5t32 7.5t13.5 20v99z"></svg:path>`,
})
export class WhhExitaltIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhExplorerwindowIcon],svg[whh-explorerwindow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-448-832h-256q-26 0-45 19t-19 45v576q0 27 18.5 45.5t45.5 18.5h256zm448 64q0-26-19-45t-45-19h-320v704h320q26 0 45-18.5t19-45.5zm-672 512h128q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-128q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5m128-64h-128q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m0-128h-128q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m0-128h-128q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m0-128h-128q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5"></svg:path>`,
})
export class WhhExplorerwindowIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhExportIcon],svg[whh-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 384q-27 0-45.5-19T896 320V215L553 558q-18 18-43.5 18T466 558t-18-43.5t18-43.5l343-343H704q-27 0-45.5-19T640 63.5t18.5-45T704 0h256q27 0 45.5 18.5T1024 64v256q0 26-18.5 45T960 384M512 128q-104 0-192.5 51.5t-140 140T128 512t51.5 192.5t140 140T512 896t192.5-51.5t140-140T896 512q0-27 18.5-45.5T960 448t45.5 18.5T1024 512q0 104-40.5 199t-109 163.5t-163.5 109t-199 40.5t-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0q27 0 45.5 18.5t18.5 45t-19 45.5t-45 19"></svg:path>`,
})
export class WhhExportIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhExportfileIcon],svg[whh-exportfile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 1024H256q-26 0-45-18.5T192 960v-11Q27 789 26 787Q0 763 0 709.5T26 631l166-160V64q0-26 19-45t45-19h384v352q0 14 9.5 23t22.5 9h351q1 1 1 2v574q0 27-18.5 45.5T960 1024M640 639q0-26-18.5-45T576 575H384v-58q4-30-17-51q-18-19-43.5-19T280 466L82 663q-18 18-18 43.5T82 750q12 12 96.5 93.5T280 942q18 18 43.5 18t43.5-18q21-21 17-52v-59h192q27 0 45.5-18.5T640 767zM704 0q26 0 44 18l257 257q19 19 18 45H704z"></svg:path>`,
})
export class WhhExportfileIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhExposureIcon],svg[whh-exposure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-448-768h-64v-64q0-27-19-45.5t-45.5-18.5t-45 18.5t-18.5 45.5v64h-64q-27 0-45.5 19t-18.5 45.5t18.5 45t45.5 18.5h64v64q0 26 18.5 45t45 19t45.5-19t19-45v-64h64q26 0 45-18.5t19-45t-19-45.5t-45-19m448 0q0-53-37-91l-694 694q38 37 91 37h512q53 0 90.5-37.5t37.5-90.5zm-128 512h-256q-27 0-45.5-19t-18.5-45.5t18.5-45t45.5-18.5h256q26 0 45 18.5t19 45t-18.5 45.5t-45.5 19"></svg:path>`,
})
export class WhhExposureIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhExtinguisherIcon],svg[whh-extinguisher-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m814 60l-242 99q-5 18-14 33h242q13 0 22.5 9.5T832 224t-9.5 22.5T800 256H512v72q84 22 138 91t54 157v384q0 27-19 45.5t-45 18.5H256q-27 0-45.5-18.5T192 960V576q0-88 54-157t138-91v-72H256q-53 0-90.5 37.5T128 384v512q0 27-18.5 45.5t-45 18.5T19 941.5T0 896V384q0-106 75-181t181-75h64q0-53 37.5-90.5T448 0q42 0 75.5 25T570 90L778 4q13-6 27.5-2.5T827 16t3.5 24T814 60"></svg:path>`,
})
export class WhhExtinguisherIcon {
  readonly viewBox = input("0 0 832 1024")
  readonly width = input("0.82em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhExtjsIcon],svg[whh-extjs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 448v128l-145 48q-10 32-28 67l68 138l-45 45l-136-136q45-44 69.5-102.5T832 512q0-87-43-160.5T672.5 235T512 192t-160.5 43T235 351.5T192 512q0 133 94 226L150 874l-45-45l68-138q-18-35-28-67L0 576V448l145-48q10-32 28-67l-68-138l90-90l138 68q35-19 67-28L448 0h128l48 145q32 9 67 28l138-68l90 90l-68 138q18 35 28 67zm-128 576H128l384-384z"></svg:path>`,
})
export class WhhExtjsIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEyeIcon],svg[whh-eye-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 768q-122 0-231-50T97.5 580T0 384q23-108 97.5-196T281 50T512 0t231 50t183.5 138t97.5 196q-23 108-97.5 196T743 718t-231 50M266 180q-78 35-131 88T64 384q18 64 71.5 117T266 589q-74-89-74-205t74-204m246 76q-53 0-90.5 37.5T384 384t37.5 90.5T512 512t90.5-37.5T640 384t-37.5-90.5T512 256m246-76q74 88 74 204t-74 205q78-35 131-88t71-117q-18-63-71-116.5T758 180"></svg:path>`,
})
export class WhhEyeIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEyecloseIcon],svg[whh-eyeclose-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M110 1004q-19 19-45.5 19T19 1004T0 958.5T19 913l122-122Q30 671 1 512q23-126 97-228.5t183-161T512 64q145 0 272 84L913 19q19-19 46-19t45.5 18.5T1023 64t-19 46zm402-812q-131 0-245 64h-11v6q-73 44-123.5 108.5T65 512q28 125 141 214l85-86q-35-59-35-128q0-60 28-114l57 28q-21 42-21 86q0 43 19 81l50-50q-5-17-5-31q0-29 14-57l53 26l30-31l-26-52q28-14 57-14q14 0 32 4l50-50q-39-18-82-18t-85 21l-29-58q54-27 114-27q69 0 129 35l61-61q-92-38-190-38m255 347q-10 90-74 153.5T540 766zM512 831q162 0 289.5-91T960 512q-14-60-50-116l53-53q45 80 61 169q-23 126-97.5 228.5T743 901t-231 58q-72 0-143-22l107-107q20 1 36 1"></svg:path>`,
})
export class WhhEyecloseIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEyedropperIcon],svg[whh-eyedropper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1001.625 1000.5q-22.5 22.5-54.5 22.5t-54-23l-56-55l-165-50q-51-2-87-38l-252-251l-43 43q-22 22-54 22t-54.5-22.5t-22.5-54t23-54.5l5-5l-115-115q-72-72-72-174t72-174t174-72t174 72l115 115l5-5q22-23 54-23t54.5 22.5t22.5 54.5t-22 55l-42 42l251 251q37 36 37 88l49 162l58 58q22 22 22 54t-22.5 54.5M745.125 636l-220-220l-110 109l220 221q23 23 55 23t54.5-23t22.5-55t-22-55"></svg:path>`,
})
export class WhhEyedropperIcon {
  readonly viewBox = input("0 0 1025 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEyeopenIcon],svg[whh-eyeopen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 896q-122 0-231-58.5t-183.5-161T0 448q23-126 97.5-228.5T281 58.5T512 0t231 58.5t183.5 161T1024 448q-23 126-97.5 228.5T743 837.5T512 896m0-768q-162 0-289.5 91.5T64 448q31 138 158.5 229T512 768t289.5-91T960 448q-31-137-158.5-228.5T512 128m0 576q-106 0-181-75t-75-181q0-60 27-114l58 29q-21 42-21 85q0 80 56 136t135.5 56t136-56T704 448.5t-56.5-136T512 256q-44 0-86 21l-28-57q54-28 114-28q106 0 181 75t75 181t-75 181t-181 75m-57-370q28-14 57-14q53 0 90.5 37.5T640 448t-37.5 90.5T512 576t-90.5-37.5T384 448q0-29 14-57l114 57z"></svg:path>`,
})
export class WhhEyeopenIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhEyeosIcon],svg[whh-eyeos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 512q0-53 37.5-90.5T512 384t90.5 37.5T640 512t-37.5 90.5T512 640t-90.5-37.5T384 512m544 128q-40 0-68-28t-28-68q0-50-13.5-108T783 342q-43-69-115-109.5T512 192q-87 0-160.5 43T235 351.5T192 512t43 160.5T351.5 789T512 832q40 0 78.5-10t62.5-22t47.5-22t35.5-10q40 0 68 28t28 68q0 28-10 49.5T802 942l-9 8q-1 0-1 .5t-1 .5q-125 73-279 73q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0q173 0 309.5 104T1004 371q20 69 20 173q0 40-28 68t-68 28"></svg:path>`,
})
export class WhhEyeosIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFIcon],svg[whh-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M705 128H160q-13 0-22.5 9.5T128 160v256q0 13 9.5 22.5T160 448h416q27 0 46 19t19 45.5t-19 45t-46 18.5H160q-13 0-22.5 9.5T128 608v352q0 27-18.5 45.5T64 1024t-45.5-18.5T0 960V64q0-26 18.5-45T64 0h641q26 0 45 19t19 45.5t-19 45t-45 18.5"></svg:path>`,
})
export class WhhFIcon {
  readonly viewBox = input("0 0 769 1024")
  readonly width = input("0.76em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFUpperCaseIcon],svg[whh-f-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M705 128H160q-13 0-22.5 9.5T128 160v256q0 13 9.5 22.5T160 448h416q27 0 46 19t19 45.5t-19 45t-46 18.5H160q-13 0-22.5 9.5T128 608v352q0 27-18.5 45.5T64 1024t-45.5-18.5T0 960V64q0-26 18.5-45T64 0h641q26 0 45 19t19 45.5t-19 45t-45 18.5"></svg:path>`,
})
export class WhhFUpperCaseIcon {
  readonly viewBox = input("0 0 769 1024")
  readonly width = input("0.76em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFacebookIcon],svg[whh-facebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 448q26 0 45 18.5t19 45.5v64q0 27-19 45.5T512 640H320v320q0 26-19 45t-45 19h-64q-27 0-45.5-19T128 960V640H64q-27 0-45.5-18.5T0 576v-64q0-27 18.5-45.5T64 448h64V256q0-106 75-181T384 0h128q27 0 45.5 18.5T576 64v64q0 27-18.5 45.5T512 192H384q-27 0-45.5 18.5T320 256v192z"></svg:path>`,
})
export class WhhFacebookIcon {
  readonly viewBox = input("0 0 576 1024")
  readonly width = input("0.57em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFacebookaltIcon],svg[whh-facebookalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-768-192.5q0 26.5 19 45.5t45 19h256V768h-256q-26 0-45 18.5t-19 45m704-340.5q0-18-18.5-30.5t-45.5-12.5h-128V320q0-27 19-45.5t45-18.5h64q27 0 45.5-12.5t18.5-30.5v-42q0-18-18.5-30.5t-45.5-12.5h-64q-106 0-149 43t-43 149v128h-64q-26 0-45 12.5t-19 30.5v42q0 18 19 30.5t45 12.5h64v256q0 26 12.5 45t30.5 19h42q18 0 30.5-19t12.5-45V576h128q27 0 45.5-12.5t18.5-30.5zm0 277h-128v128h128q27 0 45.5-19t18.5-45.5t-19-45t-45-18.5"></svg:path>`,
})
export class WhhFacebookaltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFacetimevideoIcon],svg[whh-facetimevideo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024.004 768v8q0 16-.5 23t-3 16.5t-9.5 13t-19 3.5l-224-149v149q0 26-19 45t-45 19h-576q-27 0-45.5-18.5t-18.5-45.5V448q0-26 18.5-45t45.5-19h576q26 0 45 19t19 45v149l224-149q12 0 19 3.5t9.5 13t3 16.5t.5 23zM.004 192.5q0-79.5 56-136T191.504 0t136 56t56.5 136t-56.5 136t-136 56t-135.5-56t-56-135.5m448 0q0-79.5 56-136T639.504 0t136 56t56.5 136t-56.5 136t-136 56t-135.5-56t-56-135.5"></svg:path>`,
})
export class WhhFacetimevideoIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFactoryIcon],svg[whh-factory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.356 1024h-896q-27 0-45.5-19t-18.5-45V64q0-27 19-45.5t45-18.5h128q26 0 45 18.5t19 45.5v422l192-155q26-16 45-10t19 30v135l192-155q26-16 45-10t19 30v135l192-155q27-16 45.5-10t18.5 30v609q0 27-19 45.5t-45 18.5"></svg:path>`,
})
export class WhhFactoryIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFallingstarIcon],svg[whh-fallingstar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m401 602l-14-5l-31-67q50-124 159.5-237.5t243.5-190T1024 0v192q-176 35-347 146T401 602m107 140L384 861v145q-2 9-9.5 14.5T358 1023l-121-75l-149 50q-10 1-17.5-5.5T62 975l30-153L2 697q-4-10 0-19t13-13l152-20l90-127q7-7 17-6t17 9l64 140l146 47q8 6 10 16t-3 18"></svg:path>`,
})
export class WhhFallingstarIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFanIcon],svg[whh-fan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M830 526q62 34 95.5 83t36 101T951 810t-39 90q-33 54-80 86.5t-101.5 37T619 998q-13-7-21.5-20.5t-13-28t-6-39T577 869t.5-50t.5-51q-1-78-13-139q-25 11-51 11q-24 0-47-9q-64 74-106 101q-52 33-104.5 35.5t-94-21t-73-57.5T35 613Q7 560 1.5 506.5t15-100.5T84 329q16-7 31-8t38 7.5t43 19.5t46.5 27.5t50 31.5t51.5 30.5t52 25.5q10-24 29-43q-39-114-39-176q0-53 18-95.5T451.5 79t68-45.5t77-26T674 0q96 0 160 48.5T898 183q0 29-33 59t-75.5 53T688 351.5T594 413q27 22 39 53q136 26 197 60m-316.5-78q-26.5 0-45 19T450 512.5t18.5 45t45 18.5t45.5-18.5t19-45t-19-45.5t-45.5-19"></svg:path>`,
})
export class WhhFanIcon {
  readonly viewBox = input("0 0 962 1025")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFantasticoIcon],svg[whh-fantastico-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024M376 403.5Q364 364 338.5 340T290 321t-31 37t4.5 71t38 63t48.5 19t30.5-36.5t-4.5-71m320-64Q684 300 658.5 276T610 257t-31 36.5t4.5 71t38 63.5t48.5 19t30.5-36.5t-4.5-71M566 748q-43 7-88 12t-90.5 6.5t-73.5 2t-71.5 0t-50.5-.5q18 30 83 48.5t158.5 18T615 811q66-17 121-47t89-63t52.5-65.5T896 576q-34 28-57 45t-69 46.5t-97.5 50T566 748"></svg:path>`,
})
export class WhhFantasticoIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFaqIcon],svg[whh-faq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M160.338 192h672q26 0 45 18.5t19 45.5v640q0 49-66.5 88.5t-125.5 39.5h-576q-53 0-90.5-37.5T.338 896V128q0-53 37.5-90.5t90.5-37.5h704q26 0 45 19t19 45.5t-19 45t-45 18.5h-672q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5m224 736q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5v-64q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5zm-192-416q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5q0-27 37.5-45.5t90.5-18.5t90.5 19t37.5 45q0 27-37.5 45.5t-90.5 18.5q-26 0-45 19t-19 45v96q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5v-38q84-16 138-68t54-118q0-80-75-136t-181-56q-51 0-99.5 13.5t-82 33.5t-54 42t-20.5 39z"></svg:path>`,
})
export class WhhFaqIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFastbackwardIcon],svg[whh-fastbackward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m962.488 1013l-386-443v430q-38 40-62 13l-386-442v389q0 26-19 45t-45.5 19t-45-19t-18.5-45V64q0-27 18.5-45.5t45-18.5t45.5 18.5t19 45.5v390l386-443q25-27 62 13v431l386-444q25-27 62 13v976q-37 40-62 13"></svg:path>`,
})
export class WhhFastbackwardIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFastdownIcon],svg[whh-fastdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M557.976 590q-18 18-45 18t-45-18l-448-452q-19-19-19-46t19-45l26-28q19-19 45.5-19t45.5 19l376 379l376-379q19-19 45.5-19t45.5 19l26 28q19 18 19 45t-19 46zm-512-155q19-19 45.5-19t45.5 19l376 379l376-379q19-19 45.5-19t45.5 19l26 27q19 19 19 45.5t-19 45.5l-448 452q-18 19-45 19t-45-19l-448-452q-19-19-19-45.5t19-45.5z"></svg:path>`,
})
export class WhhFastdownIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFastforwardIcon],svg[whh-fastforward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M961.12 1024q-26.5 0-45.5-19t-19-45V571l-386 442q-24 27-62-13V570l-386 443q-25 27-62-13V24q37-40 62-13l386 444V24q37-40 62-13l386 443V64q0-27 19-45.5T961.12 0t45 18.5t18.5 45.5v896q0 26-18.5 45t-45 19"></svg:path>`,
})
export class WhhFastforwardIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFastleftIcon],svg[whh-fastleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M435 467q-19 18-19 44.5t19 45.5l451 448q19 19 46 19t46-19l27-27q19-18 19-44.5t-19-45.5L626 512l379-376q19-19 19-45.5T1005 45l-27-26Q959 0 932 0t-46 19zm154 511q19-18 19-44.5T589 888L210 512l379-376q19-19 19-45.5T589 45l-27-26Q543 0 516.5 0T471 19L19 467Q0 485 0 511.5T19 557l452 448q19 19 45.5 19t45.5-19z"></svg:path>`,
})
export class WhhFastleftIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFastrightIcon],svg[whh-fastright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M589.49 467q19 18 19 44.5t-19 45.5l-451 448q-19 19-46 19t-46-19l-27-27q-19-18-19-44.5t19-45.5l379-376l-379-376q-19-19-19-45.5t19-45.5l27-26q19-19 46-19t46 19zm-154 511q-19-18-19-44.5t19-45.5l379-376l-379-376q-19-19-19-45.5t19-45.5l27-26q19-19 45.5-19t45.5 19l452 448q19 18 19 44.5t-19 45.5l-452 448q-19 19-45.5 19t-45.5-19z"></svg:path>`,
})
export class WhhFastrightIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFastupIcon],svg[whh-fastup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M467 435q18-19 45-19t45 19l448 451q19 19 19 46t-19 46l-26 27q-19 19-45.5 19t-45.5-19L512 626l-376 379q-19 19-45.5 19T45 1005l-26-27Q0 959 0 932t19-46zm512 155q-19 19-45.5 19T888 590L512 210L136 590q-19 19-45.5 19T45 590l-26-28Q0 543 0 516.5T19 471L467 19q18-19 45-19t45 19l448 452q19 19 19 45.5t-19 45.5z"></svg:path>`,
})
export class WhhFastupIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFatarrowdownIcon],svg[whh-fatarrowdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1023.996 640q0 41-39 70l-378 284q-39 29-94.5 29t-94.5-29l-378-284q-39-29-39-70h-1V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5z"></svg:path>`,
})
export class WhhFatarrowdownIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFatarrowleftIcon],svg[whh-fatarrowleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 1025H383v-1q-41 0-70-39L29 607Q0 567 0 512t29-94L313 39q29-38 70-39h513q53 0 90.5 37.5T1024 128v769q0 53-37.5 90.5T896 1025"></svg:path>`,
})
export class WhhFatarrowleftIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFatarrowrightIcon],svg[whh-fatarrowright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m995.86 607l-284 378q-29 39-71 39l-512 1q-53 0-90.5-37.5T.86 897V128q0-53 37.5-90.5T128.86 0h512q42 0 71 39l284 378q29 40 29 95t-29 95"></svg:path>`,
})
export class WhhFatarrowrightIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFatarrowupIcon],svg[whh-fatarrowup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 383v512q0 53-37.5 90.5T896 1023H128q-53 0-90.5-37.5T0 895V383h1q0-41 39-70L418 29q39-29 94.5-29T607 29l378 284q39 29 39 70"></svg:path>`,
})
export class WhhFatarrowupIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFatredoIcon],svg[whh-fatredo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1022 454q0 21-12 39t-29 19H541q-31 1-30-46l157-156q-69-54-156-54q-106 0-181 75t-75 181t75 180.5T512 767q58 0 109-24t87-67l201 157q-71 89-175 139.5T512 1023q-104 0-199-40.5t-163.5-109T40.5 710T0 511t40.5-198.5t109-163T313 40.5T512 0q95 0 182 33.5T850 128L978 0q47-1 46 30z"></svg:path>`,
})
export class WhhFatredoIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFatundoIcon],svg[whh-fatundo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512.526 1023q-118 0-222-50.5t-175-139.5l201-157q36 43 87 67t109 24q106 0 181-74.5t75-180.5t-75-181t-181-75q-87 0-156 54l157 156q2 47-30 46h-440q-17-1-29-19t-12-39l-2-424q-1-31 46-30l128 128q69-61 156-94.5t182-33.5q104 0 199 40.5t163.5 109t109 163t40.5 199t-40.5 199t-109 163t-163.5 109t-199 40.5"></svg:path>`,
})
export class WhhFatundoIcon {
  readonly viewBox = input("0 0 1025 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFavoriteIcon],svg[whh-favorite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1020 400L818 624l29 297q-3 20-19 31.5t-36 7.5L513 841L234 960q-20 4-36-8t-19-31l29-297L6 400q-9-17-2.5-36T27 336l298-64L479 14q14-14 34-14t34 14l154 258l298 64q17 9 23.5 28t-2.5 36"></svg:path>`,
})
export class WhhFavoriteIcon {
  readonly viewBox = input("0 0 1026 962")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFavoritealtIcon],svg[whh-favoritealt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1020 400L818 624l29 297q-3 20-19 31.5t-36 7.5L513 841L234 960q-20 4-36-7.5T179 921l29-297L6 400q-9-17-2.5-36T27 336l298-64L479 14q14-14 34-14t34 14l154 258l298 64q17 9 23.5 28t-2.5 36m-174-5l-204-45l-106-180q-10-10-23.5-10T489 170L383 350l-205 45q-12 7-16 20t2 25l141 160l-16 200q2 15 10.5 25t20.5 8l192-84l192 84q13 2 21.5-8t10.5-25l-16-201l141-159q6-12 1.5-25T846 395"></svg:path>`,
})
export class WhhFavoritealtIcon {
  readonly viewBox = input("0 0 1026 962")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFavoritefileIcon],svg[whh-favoritefile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832.27 1024h-768q-26 0-45-18.5T.27 960V65q0-27 19-45.5t45-18.5h448v352q0 13 9.5 22.5t22.5 9.5h352v575q0 27-18.5 45.5t-45.5 18.5m-435-404l-77-172l-77 172l-179 24l132 130l-34 186l158-91l158 91l-34-186l132-130zm179-620q26 0 44 18l257 257q19 19 19 46h-320z"></svg:path>`,
})
export class WhhFavoritefileIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFavoritefolderIcon],svg[whh-favoritefolder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.678 896v128h-96l-128-64l-128 64h-96V896h-320q-53 0-90.5-37.5T.678 768V256q0-26 19-45t45-19h960v576q0 53-37.5 90.5t-90.5 37.5m-147-276l-77-172l-77 172l-179 24l132 130l-34 186l158-92l158 92l-34-186l132-130zm-159-512q7-19 28-31.5t44-12.5h240q24 0 45 12.5t29 31.5l48 84h-480zm-544-64q7-19 28-31.5t44-12.5h240q24 0 45 12.5t29 31.5l48 84h-480z"></svg:path>`,
})
export class WhhFavoritefolderIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFbdislikeIcon],svg[whh-fbdislike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928 0H576l-64 64H320V0H0v576h320v-64h64l96 96l160 352h192V800l-64-96v-64h160l96-64V64zM256 512H64V64h192zm704 21l-64 43H704v160l64 96v64h-79L544 576L416 448h-96V128h224l64-64h288l64 43z"></svg:path>`,
})
export class WhhFbdislikeIcon {
  readonly viewBox = input("0 0 1024 960")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFblikeIcon],svg[whh-fblike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928 960H576l-64-64H320v64H0V384h320v64h64l96-96L640 0h192v160l-64 96v64h160l96 64v512zM256 448H64v448h192zm704-21l-64-43H704V224l64-96V64h-79L544 384L416 512h-96v320h224l64 64h288l64-43z"></svg:path>`,
})
export class WhhFblikeIcon {
  readonly viewBox = input("0 0 1024 960")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFeatheraltIcon],svg[whh-featheralt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M532.56 410q-66-66-165.5-149.5T201.56 127l-67-51q-12-12-29-12t-29 12q-3 3-4 7t.5 9t4 8.5t7.5 9t8 9t8.5 8.5t7.5 7q25 18 65.5 49t139.5 114t167 151q42 42 111.5 111t119.5 119t89 90q58 61 111 118t77 83.5l24 26.5q12 12 12 13t-12 13q-10 11-71.5-32.5t-82.5-64.5q-60-61-162-164q-71-18-175.5-76t-195.5-122.5t-158-116.5t-85-70q-26-26-51-91.5t-30.5-131T26.56 51q47-48 132-50.5t154 37.5q76 43 172 131.5t176 187t130 196.5t40 156q-147-148-298-299"></svg:path>`,
})
export class WhhFeatheraltIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFedoraIcon],svg[whh-fedora-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 480q0 27-41 65t-107.5 73.5t-165 60.5T512 704t-198-25t-165-60.5T41 545T0 480q0-53 170-77q9-62 22-122.5T224 152t44.5-110T320 0q28 0 94.5 32T512 64q27 0 52-10t42-22t43-22t55-10q28 0 73 135t74 267q173 24 173 78"></svg:path>`,
})
export class WhhFedoraIcon {
  readonly viewBox = input("0 0 1024 704")
  readonly width = input("1.46em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFeedlyIcon],svg[whh-feedly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M633 559L358 832H250l-67-67q-7-7-7-17t7-17l312-310q7-7 17-7t17 7l104 103q7 7 7 17.5t-7 17.5m0-414L204 576H56L7 528q-7-7-7-17.5T7 493L495 7q7-7 17-7t17 7l104 104q7 7 7 17t-7 17M391 938l104-104q7-7 17-7t17 7l104 104q7 7 7 17t-7 17l-52 52H443l-52-52q-7-7-7-17t7-17"></svg:path>`,
})
export class WhhFeedlyIcon {
  readonly viewBox = input("0 0 640 1024")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFeedlyaltIcon],svg[whh-feedlyalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-198-814l-78-77q-5-5-12.5-5t-12.5 5l-334 332q-6 6-6 13.5t6 13.5l59 52h64l314-308q6-5 6-12.5t-6-13.5m0 311l-78-78q-5-5-12.5-5t-12.5 5l-202 201q-6 5-6 12.5t6 13.5l55 66h64l186-189q6-6 6-13.5t-6-12.5m0 304l-78-84q-5-6-12.5-6t-13.5 6l-78 84q-5 6-5 14.5t5 13.5l60 43h64l58-43q6-5 6-13.5t-6-14.5"></svg:path>`,
})
export class WhhFeedlyaltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFemaleIcon],svg[whh-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 634v134h64q26 0 45 19t19 45.5t-19 45t-45 18.5h-64v64q0 27-19 45.5t-45.5 18.5t-45-18.5T256 960v-64h-64q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45.5-19h64V634Q145 611 72.5 523T0 320q0-87 43-160.5T159.5 43T320 0t160.5 43T597 159.5T640 320q0 115-73 203T384 634m-64.5-506Q240 128 184 184.5t-56 136T184 456t135.5 56t136-56T512 320.5t-56.5-136t-136-56.5"></svg:path>`,
})
export class WhhFemaleIcon {
  readonly viewBox = input("0 0 640 1024")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFenceIcon],svg[whh-fence-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 768q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5T992 896h-32v96q0 13-9.5 22.5T928 1024H800q-13 0-22.5-9.5T768 992v-96H640v96q0 13-9.5 22.5T608 1024H480q-13 0-22.5-9.5T448 992v-96H320v96q0 13-9.5 22.5T288 1024H160q-13 0-22.5-9.5T128 992v-96H32q-13 0-22.5-9.5T0 864v-64q0-13 9.5-22.5T32 768h96V384H32q-13 0-22.5-9.5T0 352v-64q0-13 9.5-22.5T32 256h96v-96q0-40 5-50L211 7q5-7 12.5-7T237 7l77 103q6 8 6 50v96h128v-96q0-37 5-50L531 7q5-7 12.5-7T557 7l78 103q5 8 5 50v96h128v-96q0-43 5-50L851 7q5-7 12.5-7T877 7l77 103q6 11 6 50v96h32q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5T992 384h-32v384zM448 384H320v384h128zm320 0H640v384h128z"></svg:path>`,
})
export class WhhFenceIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFengofficeIcon],svg[whh-fengoffice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m979 767l-282 89l193-445l127 269q13 27 2 52.5T979 767M411 134L680 7q27-13 52.5-2T767 45l89 282zM134 613L7 344q-13-27-2-52.5T45 257l282-89zm479 277l-269 127q-27 13-52.5 2T257 979l-89-282z"></svg:path>`,
})
export class WhhFengofficeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFileIcon],svg[whh-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M831.405 1024h-767q-27 0-45.5-18.5T.405 960V65q0-27 18.5-45.5T64.405 1h448v352q0 13 9 22.5t23 9.5h351v575q0 27-18.5 45.5t-45.5 18.5m-255-1024q25 0 44 18l256 257q19 19 19 46h-319z"></svg:path>`,
})
export class WhhFileIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFilemanagerIcon],svg[whh-filemanager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024.526 768q0 53-37.5 90.5t-90.5 37.5h-768q-53 0-90.5-37.5T.526 768V256q0-26 18.5-45t45.5-19h480q0-12 11.5-33t22.5-36l12-16q7-18 28-30.5t44-12.5h240q24 0 45 12.5t28 30.5q49 58 49 85zm-978-725q7-18 28-30.5t44-12.5h240q24 0 45 12.5t29 30.5l48 85h-480z"></svg:path>`,
})
export class WhhFilemanagerIcon {
  readonly viewBox = input("0 0 1025 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFilmIcon],svg[whh-film-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.232 960v-32q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v32h-640v-32q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v32q-27 0-45.5-19t-18.5-45V64q0-27 18.5-45.5T64.232 0v32q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5V0h640v32q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5V0q26 0 45 18.5t19 45.5v832q0 26-19 45t-45 19m-768-800q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm0 192q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm0 192q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm0 192q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm768-576q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm0 192q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm0 192q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm0 192q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5z"></svg:path>`,
})
export class WhhFilmIcon {
  readonly viewBox = input("0 0 1025 960")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFilmstripIcon],svg[whh-filmstrip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64.59 832V256h960v576zm736-64q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5m0-448q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m128 0q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m32 160q0-13-9.5-22.5t-22.5-9.5h-128q-13 0-22.5 9.5t-9.5 22.5v128q0 13 9.5 22.5t22.5 9.5h128q13 0 22.5-9.5t9.5-22.5zm-32 224q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m-128-512h-768q-13 0-22.5-9.5T.59 160V96q0-13 9.5-22.5t22.5-9.5h288V32q0-13 9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5v32h288q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-768 704h768q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-768q-13 0-22.5-9.5T.59 992v-64q0-13 9.5-22.5t22.5-9.5"></svg:path>`,
})
export class WhhFilmstripIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFilterIcon],svg[whh-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m992.06 128l-355 439l-61 393q0 27-18.5 45.5t-45 18.5t-45.5-18.5t-19-45.5l-61-393l-355-439l-23-32q-9-15-9-32q0-26 19-45t45-19h896q27 0 45.5 19t18.5 45q0 17-9 32z"></svg:path>`,
})
export class WhhFilterIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFinanceIcon],svg[whh-finance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m0-960h-768q-27 0-45.5 18.5t-18.5 45.5v512l128-128l192 128l192-320l192 128l192-247v-73q0-27-18.5-45.5t-45.5-18.5"></svg:path>`,
})
export class WhhFinanceIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFinderIcon],svg[whh-finder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.268 896h-391q15 62 39 128h-64q-27-38-45-128h-499q-13 0-22.5-9.5T.268 864V160q0-13 9.5-22.5t22.5-9.5h488q36-59 88-128h64q-11 18-38.5 61t-42.5 67h401q13 0 22.5 9.5t9.5 22.5v704q0 13-9.5 22.5t-22.5 9.5m-928-704v640h457q-4-32-7-64h-2q-150 0-320-64v-64q156 64 320 64q0-62 40-128h-136q-13 0-22.5-9.5t-9.5-22.5q0-169 99-352zm896 0h-407q-95 170-104 320h159q13 0 22.5 9.5t9.5 22.5q0 23-23 30q-39 63-41 127q134-11 256-61v64q-132 50-253 61q3 35 8 67h373zm-224 256q-13 0-22.5-9.5t-9.5-22.5V288q0-13 9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5v128q0 13-9.5 22.5t-22.5 9.5m-448 0q-13 0-22.5-9.5t-9.5-22.5V288q0-13 9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5v128q0 13-9.5 22.5t-22.5 9.5"></svg:path>`,
})
export class WhhFinderIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFindfriendsIcon],svg[whh-findfriends-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1005 1005q-19 19-45.5 19t-45.5-19L716 807q-120 89-268 89q-91 0-174-35.5T131 765T35.5 622T0 448t35.5-174T131 131t143-95.5T448 0t174 35.5T765 131t95.5 143T896 448q0 148-89 268l198 198q19 19 19 45.5t-19 45.5M448 128q-87 0-160.5 43T171 287.5T128 448q0 121 81 212q56-33 143-46v-31q-96-58-96-240q0-74 54-112.5T448.5 192t138 38.5T640 343q0 190-96 243v28q87 12 144 46q80-91 80-212q0-87-43-160.5T608.5 171T448 128"></svg:path>`,
})
export class WhhFindfriendsIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFirefoxIcon],svg[whh-firefox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512q0-104 40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5M233 162q4 6 15 14q10 8 29.5 7.5t30.5.5q25-31 53-47q16-10 39.5-16t38.5-7l15-2q-6 7-15.5 18.5T412 174t-20 60q4 4 28.5 10.5T448 256h64q13 0 18 23t-3 37q-5 1-25.5 13T451 359t-43 25q-2 4-3 5q-2 4 3.5 33.5T406 472q-1 2-4.5.5T391 467t-12-6q-8-4-17.5-5t-9.5 0q-11 15-17 28q3 17 5 21q13 27 38 50.5t57 27.5q18 2 36.5-7.5t32-22.5t31.5-24t33-10q37 0 61 12.5t24 34.5q0 6-6 11l.5.5l1.5.5q-3 3-9 5t-10.5 3t-13 1.5t-10.5.5q-12 2-30 24.5T544 640q-17 6-41 24.5T457.5 695t-41.5 9q5 6 2 7q-1 0 4 5q43 32 117 31q-17 10-48 13q19 8 39 13q76 5 123-11t84-57q-4 26-20 49q7-3 15-8q49-50 69-93t18-91v-5q0-8-1-13q15 18 21 42q3-117-24-164q39 23 61 64q1-118-37-194q29 20 51 46q-19-85-80-159Q683 64 512 64q-156 0-279 98"></svg:path>`,
})
export class WhhFirefoxIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFireplaceIcon],svg[whh-fireplace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 448h-32v544q0 13-9.5 22.5T928 1024H96q-13 0-22.5-9.5T64 992V448H32q-13 0-22.5-9.5T0 416V288q0-13 9.5-22.5T32 256h139l85-128V32q0-13 9.5-22.5T288 0h448q13 0 22.5 9.5T768 32v96l85 128h139q13 0 22.5 9.5t9.5 22.5v128q0 13-9.5 22.5T992 448M419 960h166q7-25 7-64q0-21-18-61t-36-70l-18-29q0 5-2 13t-9 30.5t-16 42t-25.5 41T432 896q-25 16-13 64M256 448v512h99q-35-37-35-80q0-32 18-67t48-61q35-31 51-67.5t14-66t-9.5-54T425 526l-9-14q7 3 17.5 8t41.5 21.5t58.5 35.5t59.5 48t53 60q29 41 44.5 90.5T704 864q-2 40-49 96h113V448z"></svg:path>`,
})
export class WhhFireplaceIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFirewallIcon],svg[whh-firewall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M957.06 923q-38 38-84 69.5t-73 31.5q36-57 38-141.5t-38-114.5q-32-21-53.5-56t-29.5-70.5t-11.5-67.5t-2.5-52l1-21q-6 8-17 20.5t-38.5 50t-48.5 72t-38.5 78.5t-17.5 78q0 74 22.5 123t73.5 101q-47 0-98.5-19t-86.5-56q-21-22-45-90t-26-123q-3-67 22.5-149.5t73.5-156.5q36-53 85-104t94-85t85-61t64-39l24-13q-3 4-7 12.5t-13 34.5t-13.5 53t-3.5 67t12 78.5t38.5 85t69.5 89.5q50 50 79.5 109.5t29.5 114.5q0 34-16.5 75.5t-50.5 75.5m-445-731V64q0-26 19-45t45-19h256q21 0 39 14q-163 92-317 238q-19-7-30.5-23.5t-11.5-36.5m-182 419q-10-16-10-35V384q0-26 19-45t45-19h102q-39 41-70 78q-61 74-86 213m54-355h-320q-26 0-45-18.5T.06 192V64q0-26 19-45t45-19h320q27 0 45.5 19t18.5 45v128q0 27-18.5 45.5t-45.5 18.5m-320 64h128q27 0 45.5 19t18.5 45v192q0 27-18.5 45.5t-45.5 18.5h-128q-26 0-45-18.5T.06 576V384q0-26 19-45t45-19m0 384h256q-1 23 0 40q2 56 26.5 136t44.5 101q13 14 31 30q-17 13-38 13h-320q-26 0-45-18.5T.06 960V768q0-26 19-45t45-19"></svg:path>`,
})
export class WhhFirewallIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFirewireIcon],svg[whh-firewire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1014.358 197l-178 177q-9 10-23 10t-24-10l-140-140q-10-9-10-23t10-23l178-178q10-10 23.5-10t23.5 10l140 140q10 10 10 23.5t-10 23.5m-310 251.5q0 79.5-56.5 135.5t-135.5 56t-135.5-56t-56.5-135.5t56.5-136t135.5-56.5t135.5 56.5t56.5 136m-191.5-64.5q-26.5 0-45.5 19t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45t-18.5-45.5t-45-19m-275.5-10q-9 10-22.5 10t-22.5-10l-46-45q-9-10-9-23t9-23l137-136q9-10 22.5-10t23.5 10l45 45q10 10 10 23t-10 23zm-136-136q-10 9-23.5 9t-22.5-9l-46-46q-9-9-9-22.5t9-22.5l137-137q10-10 23-10t23 10l45 45q10 10 10 23t-10 23zm315 466h192q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5m0 192h192q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5"></svg:path>`,
})
export class WhhFirewireIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFirstaidIcon],svg[whh-firstaid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 1024H128q-53 0-90.5-37.5T0 896V384q0-53 37.5-90.5T128 256h128v-64q0-80 56-136T448 0h128q80 0 136 56t56 136v64h128q53 0 90.5 37.5T1024 384v512q0 53-37.5 90.5T896 1024M640 192q0-27-19-45.5T576 128H448q-27 0-45.5 18.5T384 192v64h256zm64 384H576V448q0-27-19-45.5T511.5 384t-45 18.5T448 448v128H320q-27 0-45.5 18.5t-18.5 45t18.5 45.5t45.5 19h128v128q0 26 18.5 45t45 19t45.5-19t19-45V704h128q27 0 45.5-19t18.5-45.5t-18.5-45T704 576"></svg:path>`,
})
export class WhhFirstaidIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFishIcon],svg[whh-fish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M812 636q-44-114-44-252t44-252q91 16 151.5 87t60.5 165t-60.5 165T812 636m52-316q-13 0-22.5 9.5T832 352t9.5 22.5T864 384t22.5-9.5T896 352t-9.5-22.5T864 320M286 454q-26 8-48 30.5t-38.5 48T165 583t-43.5 41T64 640q-31 0-47.5-19T0 576q0-68 43-114.5T158 396q2-7 2-12t-2-12q-72-19-115-65.5T0 192q0-25 18-44.5T64 128q32 0 57.5 16t43.5 41t34.5 50.5t38.5 48t48 30.5q40-47 128-90t177.5-67T747 129q-43 119-43 255t43 255q-66-4-155.5-28T414 544t-128-90M544 0q40 0 68 28t28 68q-64 0-164.5 39T288 224q26-48 81-102t105-88t70-34M402 608q80 39 174 65q-18 43-57 69t-86 26q-25 0-36.5-7.5t-12-23.5t3-33.5l9-45L402 609z"></svg:path>`,
})
export class WhhFishIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFishboneIcon],svg[whh-fishbone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 568q-34-34-47.5-81.5T769 376h-65v160q0 13-9.5 22.5T672 568t-22.5-9.5T640 536V376h-64v160q0 13-9.5 22.5T544 568t-22.5-9.5T512 536V376h-64v96q0 13-9.5 22.5T416 504t-22.5-9.5T384 472v-96h-64v32q0 13-9.5 22.5T288 440t-22.5-9.5T256 408v-32h-78q-20 53-58.5 98.5T32 536q-1-5-16.5-15.5T0 504q0-79 30.5-125t97.5-60v-14q-67-14-97.5-60T0 120q0-6 15.5-16.5T32 88q49 16 87.5 61.5T178 248h78v-32q0-13 9.5-22.5T288 184t22.5 9.5T320 216v32h64v-96q0-13 9.5-22.5T416 120t22.5 9.5T448 152v96h64V88q0-13 9.5-22.5T544 56t22.5 9.5T576 88v160h64V88q0-13 9.5-22.5T672 56t22.5 9.5T704 88v160h65q2-63 15.5-110.5T832 56q88 15 140 87t52 169t-52 169t-140 87m32-320q-13 0-22.5 9.5T832 280t9.5 22.5T864 312t22.5-9.5T896 280t-9.5-22.5T864 248"></svg:path>`,
})
export class WhhFishboneIcon {
  readonly viewBox = input("0 0 1024 614")
  readonly width = input("1.67em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFlagIcon],svg[whh-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M864 448q-44 0-85 13t-74 32l-66 38l-74 32l-85 13q-97 0-160-81V64q18 23 36.5 37t40.5 19.5t36 6.5t39 1h8q44 0 85-13t74-32l66-38l74-32l85-13q40 0 81.5 24t78.5 72v416q-23-23-43.5-37T939 455.5t-35-6.5t-40-1M384 960.5q0 26.5-18.5 45T320 1024H64q-26 0-45-18.5t-19-45T19 915t45-19h64V64q0-26 18.5-45T192 0t45.5 18.5T256 64v832h64q27 0 45.5 19t18.5 45.5"></svg:path>`,
})
export class WhhFlagIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFlagaltIcon],svg[whh-flagalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 64L768 319l256 256q0 27-19 45.5T960 639H384q-27 0-45.5-18.5T320 575V63q0-26 18.5-44.5T384 0h576q26 0 45 18.5t19 44.5zM384 959.5q0 26.5-18.5 45T320 1023H64q-27 0-45.5-18.5T0 959.5T18.5 914T64 895h64V63q0-26 19-44.5T192.5 0t45 18.5T256 63v832h64q27 0 45.5 19t18.5 45.5"></svg:path>`,
})
export class WhhFlagaltIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFlagtriangleIcon],svg[whh-flagtriangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 447L384 767q-27 0-45.5-18.5T320 703V64q0-27 18.5-45.5T384 0l576 319q2 1 5 3q14 6 21.5 10.5t17.5 12t15 17.5t5 21q0 13-5 23t-16 18t-19.5 12.5T960 447M384 959.5q0 26.5-18.5 45T320 1023H64q-27 0-45.5-18.5T0 959.5T18.5 914T64 895h64V64q0-27 18.5-45.5T192 0t45.5 18.5T256 64v831h64q27 0 45.5 19t18.5 45.5"></svg:path>`,
})
export class WhhFlagtriangleIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFlameIcon],svg[whh-flame-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M641 928q-97 96-193 96q56-54 76-109.5T544 768q0-42-35.5-121.5T437 506t-36-58q-2 10-5.5 26t-18 61t-32.5 84t-50.5 82t-70.5 67q-31 20-33 66.5t17 96t48 93.5q-54 0-176-116q-41-38-60.5-86T0 736q0-64 35.5-133.5T131 480q51-46 82.5-97t40.5-96.5t7.5-89.5t-13.5-79t-24-62t-22-41L192 0q13 5 34.5 15t83 44T426 130t120 95.5T653 345q58 84 88.5 182.5T769 704q-2 40-29 90t-52 80.5t-47 53.5"></svg:path>`,
})
export class WhhFlameIcon {
  readonly viewBox = input("0 0 770 1024")
  readonly width = input("0.76em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFlashIcon],svg[whh-flash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-480-768h-192q-13 0-22.5 9.5t-9.5 22.5v448q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5V592q0-7 4.5-11.5t11.5-4.5h80q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-80q-7 0-11.5-4.5t-4.5-11.5V336q0-7 4.5-11.5t11.5-4.5h144q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m384 448h-160V288q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v448q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5"></svg:path>`,
})
export class WhhFlashIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFlashlightIcon],svg[whh-flashlight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1005 885l-120 120q-19 19-46 19t-46-19L365 576H192q-26 0-45-18.5T128 512l384-383q27 0 45.5 18.5T576 192v173l429 428q19 19 19 46t-19 46M750 663L617 530q-18-18-43.5-18T530 530t-18 43.5t18 43.5l133 133q18 18 43.5 18t43.5-18t18-43.5t-18-43.5M88 433q-15 15-36.5 15T15 433T0 397t15-36L361 15q15-15 36-15t36 15t15 36.5T433 88z"></svg:path>`,
})
export class WhhFlashlightIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFlashlightaltIcon],svg[whh-flashlightalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1005 885l-120 120q-19 19-46 19t-46-19L365 576H192q-18 0-74-48T15 433Q0 418 0 397t15-36L361 15q15-15 36-15t36 15q51 51 97 105.5t46 71.5v173l429 428q19 19 19 46t-19 46M407 104q-9-9-21.5-9t-21.5 9L104 364q-9 9-9 21.5t9 21.5t22 9t22-9l259-259q9-9 9-22t-9-22m512 708L564 457q-9-9-21.5-9t-21.5 9t-9 22t9 21l355 355q9 9 21.5 9t21.5-9t9-21.5t-9-21.5M780 503l-67-67q-9-8-9-21t9-22t22-9t22 9l66 67q9 9 9 21.5t-9 21.5t-21.5 9t-21.5-9"></svg:path>`,
})
export class WhhFlashlightaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFlashplayerIcon],svg[whh-flashplayer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M864 192h-32q-46 0-88 23.5T668.5 279T611 360t-45 88h170q13 0 22.5 9.5T768 480v128q0 13-9.5 22.5T736 640H498q-9 19-21.5 50t-21 53t-22.5 51.5t-27 51t-32 47t-39.5 43.5t-49 35.5T225 1000t-73 17.5t-88 6.5H32q-13 0-22.5-9.5T0 992V864q0-13 9.5-22.5T32 832h32q50 0 99-31.5t86-80.5t63.5-103.5T352 512q8-33 19.5-69t33.5-88t48.5-98.5t65.5-95t83.5-83t104-56.5T832 0h32q13 0 22.5 9.5T896 32v128q0 13-9.5 22.5T864 192"></svg:path>`,
})
export class WhhFlashplayerIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFlaskIcon],svg[whh-flask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M964 756q43 63 56.5 124.5T1012 983t-78 41H92q-56 0-78-41T5.5 880.5T62 756l259-328V128h-64q-26 0-45-18.5t-19-45T212 19t45-19h512q26 0 45 19t19 45.5t-19 45t-45 18.5h-64v300zM577 448V128H449v320L206 760q-32 33-44.5 63.5T165 875t64 21h568q47 0 63.5-21t4-51.5T819 760z"></svg:path>`,
})
export class WhhFlaskIcon {
  readonly viewBox = input("0 0 1026 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFlaskfullIcon],svg[whh-flaskfull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M964 756q43 63 56.5 124.5T1012 983t-78 41H92q-56 0-78-41T5.5 880.5T62 756l259-328V128h-64q-26 0-45-18.5t-19-45T212 19t45-19h512q26 0 45 19t19 45.5t-19 45t-45 18.5h-64v300zM577 448V128H449v320L300 640h426z"></svg:path>`,
})
export class WhhFlaskfullIcon {
  readonly viewBox = input("0 0 1026 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFlickrIcon],svg[whh-flickr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M800 568q-93 0-158.5-65.5T576 344t65.5-158.5T800 120t158.5 65.5T1024 344t-65.5 158.5T800 568m-576 0q-93 0-158.5-65.5T0 344t65.5-158.5T224 120t158.5 65.5T448 344t-65.5 158.5T224 568"></svg:path>`,
})
export class WhhFlickrIcon {
  readonly viewBox = input("0 0 1024 614")
  readonly width = input("1.67em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFlickraltIcon],svg[whh-flickralt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-640.5-704q-79.5 0-135.5 56t-56 135.5t56 136t135.5 56.5t136-56.5t56.5-136t-56.5-135.5t-136-56m512.5 0q-80 0-136 56t-56 135.5t56 136t135.5 56.5t136-56.5t56.5-136t-56-135.5t-136-56"></svg:path>`,
})
export class WhhFlickraltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFlickrthreeIcon],svg[whh-flickrthree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M800 504q-93 0-158.5-65.5T576 280t65.5-158.5T800 56t158.5 65.5T1024 280t-65.5 158.5T800 504m0-384q-66 0-113 47t-47 113t47 113t113 47t113-47t47-113t-47-113t-113-47M224 504q-93 0-158.5-65.5T0 280t65.5-158.5T224 56t158.5 65.5T448 280t-65.5 158.5T224 504"></svg:path>`,
})
export class WhhFlickrthreeIcon {
  readonly viewBox = input("0 0 1024 614")
  readonly width = input("1.67em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFlipboardIcon],svg[whh-flipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M927.998 320h-288v288q0 13-9.5 22.5t-22.5 9.5h-288v288q0 13-9.5 22.5t-22.5 9.5h-256q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h896q13 0 22.5 9.5t9.5 22.5v256q0 13-9.5 22.5t-22.5 9.5"></svg:path>`,
})
export class WhhFlipboardIcon {
  readonly viewBox = input("0 0 960 960")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFliphorizontalIcon],svg[whh-fliphorizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 1024V0h64l384 960v64zM0 960L384 0h64v1024H0zm384 0V160L64 960z"></svg:path>`,
})
export class WhhFliphorizontalIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFlipverticalIcon],svg[whh-flipvertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M64 1024H0V576h1024v64zM0 0h64l960 384v64H0zm64 384h800L64 64z"></svg:path>`,
})
export class WhhFlipverticalIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFloppyIcon],svg[whh-floppy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.06 1024h-64V576q0-26-19-45t-45-19h-640q-27 0-45.5 19t-18.5 45v448h-64q-26 0-45-19t-19-45V64q0-26 19-45t45-19h832l128 128v832q0 26-19 45t-45 19m-192-960h-640v256q0 27 18.5 45.5t45.5 18.5h512q26 0 45-18.5t19-45.5zm-256 64h128v192h-128zm-288 448h576q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-576q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5m0 192h576q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-576q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5m0 192h576q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-576q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5"></svg:path>`,
})
export class WhhFloppyIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFlowdownIcon],svg[whh-flowdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1012 259L818 440q-20 24-49-11V321H640q-26 0-45 18.5T576 385v192q0 70-19.5 120.5T501 777t-81 42.5T320 833H0V641h320q27 0 45.5-19t18.5-45V385q0-70 20-121t55.5-79.5t80.5-42T640 129h129V21q29-34 49-11l194 182q12 14 12 33.5t-12 33.5"></svg:path>`,
})
export class WhhFlowdownIcon {
  readonly viewBox = input("0 0 1024 833")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFlowerIcon],svg[whh-flower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M925 595q-27 11-69.5 9.5T759 584q10-35 10-71q0-110-80-186q33-38 65-61t71-35h3q45-14 83 4t47 57q11 48-21 100q32 10 55.5 32t30.5 47q10 38-18.5 74T926 595zM513 257q-78 0-142 43q-32-49-41-87t-9-85q0-53 28-90.5T417 0q25 0 51.5 15.5T513 57q18-26 44.5-41.5T609 0q40 0 68 37.5t28 90.5q0 47-9 85t-41 87q-64-43-142-43M257 512q0 37 10 72q-55 19-97 20.5t-70-9.5q-50-14-78.5-50T3 471q7-25 30.5-47T89 392q-32-52-21-100q9-39 47-57t83-4h3q39 12 71 35t65 61q-80 76-80 185M150 754v-1q1-1 2-3.5t2-4t2.5-3.5t1.5-3q23-38 51.5-63t74.5-49q30 60 86.5 98T496 768q-5 58-10 97q1 34-12 68q1 8-8 18q3-4 7-16q-5 11-7 16q-25 46-66 65t-74-1q-22-14-36.5-44T274 907q-28 18-61.5 20.5T157 917q-28-15-28.5-68t20.5-94zm171-241.5q0-79.5 56-135.5t135.5-56t136 56T705 512.5t-56.5 136t-136 56.5T377 648.5t-56-136M742 627q46 24 74.5 49t50.5 63q1 1 2.5 3t2.5 3.5t2 4.5t2 3v1l1 1q21 40 20.5 93.5T869 917q-22 13-55.5 10.5T752 907q-1 34-15.5 64t-36.5 44q-33 20-74 1t-66-66q-1-3-7-15q4 12 7 15q-9-9-8-17q-13-34-12-68q-5-39-10-97q69-5 125.5-43t86.5-98"></svg:path>`,
})
export class WhhFlowerIcon {
  readonly viewBox = input("0 0 1026 1026")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFlowernewIcon],svg[whh-flowernew-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 640h-82l45 46q37 36 37 86.5t-36.5 87t-87 36.5t-87.5-36l-45-46v82q0 53-37.5 90.5T512 1024t-90.5-37.5T384 896v-83l-46 47q-37 36-87.5 36t-87-36.5t-36.5-87t37-86.5l45-46h-81q-53 0-90.5-37.5T0 512t37.5-90.5T128 384h82l-46-46q-36-36-36-87t36-87t87-36t87 36l46 46v-82q0-53 37.5-90.5T512 0t90.5 37.5T640 128v81l46-46q36-36 86.5-36t87 36.5t36.5 87t-36 87.5l-47 46h83q53 0 90.5 37.5T1024 512t-37.5 90.5T896 640M512 320q-80 0-136 56t-56 136t56.5 136t136 56T648 647.5t56-136T648 376t-136-56m0 320q-53 0-90.5-37.5T384 512t37.5-90.5T512 384t90.5 37.5T640 512t-37.5 90.5T512 640"></svg:path>`,
})
export class WhhFlowernewIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFlowerpotIcon],svg[whh-flowerpot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M625.944 320q-27-1-54-15q-2-1-4-3t-3-2q-45 31-80.5 72t-35.5 76q0 21 21 64h267q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-32l-77 357q-3 11-12 19t-20 8h-293q-12 0-21-8t-12-19l-77-357h-32q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h216q8-34 8-64q0-38-14-82q-42-49-102-76q-65 53-138 12q-24-13-43-27t-32.5-31.5t-23-31.5t-15.5-36.5t-9.5-37.5t-4.5-43t-1.5-44.5T.944 0q22 25 56 36t68 13t68 6.5t65 24.5t50 58q13 25 13 56q0 25-10 47q47 27 74 47q20 15 40 46q26-55 94-96v-1q-25-91 54-136q31-17 58.5-26.5t56-9.5t49.5 2.5t52 16t50 23t58 30.5q-33 6-59 28.5t-44.5 48.5t-39.5 51.5t-53 41t-75 13.5"></svg:path>`,
})
export class WhhFlowerpotIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFlowupIcon],svg[whh-flowup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1012 574L818 392q-20-23-49 12v108H640q-26 0-45-19t-19-45V256q0-70-19.5-121T501 55t-80.5-42T320 0H0v192h320q27 0 45.5 18.5T384 256v192q0 70 20 120.5t55.5 79.5t80.5 42.5T640 704h129v107q29 35 49 12l194-182q12-14 12-33.5t-12-33.5"></svg:path>`,
})
export class WhhFlowupIcon {
  readonly viewBox = input("0 0 1024 833")
  readonly width = input("1.23em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFluxbbIcon],svg[whh-fluxbb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M672 960h-64q-13 0-22.5-9.5T576 928v-64q0-13 9.5-22.5T608 832h32V192h-32q-13 0-22.5-9.5T576 160V96q0-13 9.5-22.5T608 64h64q40 0 68 28t28 68v704q0 40-28 68t-68 28m-256 64h-64q-13 0-22.5-9.5T320 992V32q0-13 9.5-22.5T352 0h64q13 0 22.5 9.5T448 32v960q0 13-9.5 22.5T416 1024m-256-64H96q-40 0-68-28T0 864V160q0-40 28-68t68-28h64q13 0 22.5 9.5T192 96v64q0 13-9.5 22.5T160 192h-32v640h32q13 0 22.5 9.5T192 864v64q0 13-9.5 22.5T160 960"></svg:path>`,
})
export class WhhFluxbbIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFolderaltIcon],svg[whh-folderalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.232 896h-896q-26 0-45-19t-19-45V256h1024v576q0 26-19 45t-45 19m-960-704V64q0-27 18.5-45.5T64.232 0h384q26 0 45 18.5t19 45.5t18.5 45.5t45.5 18.5h384q26 0 45 19t19 45z"></svg:path>`,
})
export class WhhFolderaltIcon {
  readonly viewBox = input("0 0 1025 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFolderopenIcon],svg[whh-folderopen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M630 192q-23 0-44 12.5T558 235l-46 85H56q-16 0-23 .5t-16.5 3t-13 9.5T0 352v32v-256l49-85q7-18 28-30.5T122 0h240q23 0 44 12.5T434 43l46 85h480q26 0 45 18.5t19 45.5zM64 384h512l32-96q7-18 19-25t35-7h266q51 0 64 32l32 96v256q0 53-37.5 90.5T896 768H128q-53 0-90.5-37.5T0 640V448q0-27 18.5-45.5T64 384"></svg:path>`,
})
export class WhhFolderopenIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFoldertreeIcon],svg[whh-foldertree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M639.998 736q0-13 9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5v32h160q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5h-320q-13 0-22.5-9.5t-9.5-22.5v-32h-416q-13 0-22.5-9.5t-9.5-22.5V384h-160q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v32h160q13 0 22.5 9.5t9.5 22.5v256q0 13-9.5 22.5t-22.5 9.5h-160v128h384V352q0-13 9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5v32h160q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5h-320q-13 0-22.5-9.5t-9.5-22.5v-32h-384v320h384z"></svg:path>`,
})
export class WhhFoldertreeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFontIcon],svg[whh-font-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.56 320q-26.5 0-45.5-19t-19-45q0-53-37.5-90.5t-90.5-37.5h-64q-26 0-45 18.5t-19 45.5v640q0 26 19 45t45.5 19t45 18.5t18.5 45t-18.5 45.5t-45.5 19h-384q-26 0-45-18.5t-19-45.5t19-45.5t45.5-18.5t45-19t18.5-45V192q0-27-18.5-45.5t-45.5-18.5h-64q-53 0-90.5 37.5t-37.5 90.5q0 26-18.5 45t-45 19t-45.5-19t-19-45V64q0-26 19-45t45-19h896q26 0 45 19t19 45v192q0 27-18.5 45.5t-45 18.5"></svg:path>`,
})
export class WhhFontIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFontcaligraphyIcon],svg[whh-fontcaligraphy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928 128q-24 0-37 .5t-34 3.5t-34.5 9.5T794 161t-26 31q-9 26-27 71t-55 127t-78 162.5t-96.5 168t-110 153t-118.5 108t-123 42.5q-66 0-113-47T0 864q0-42 16-69t48-27q28 0 46 16.5t18 47.5q0 28-16 55.5t-16 41t22 22.5t42 9t43-13t48-40t49.5-57t52.5-75t51-83t51.5-92t47.5-91t45-91t38.5-80.5T620 267q14-31 20-43q-26 21-69.5 58.5t-74 62t-70.5 51t-82.5 39.5t-87.5 13q-93 0-142.5-49.5T64 256Q64 0 416 0q48 0 110.5 18.5t125.5 43T740 92Q835 0 928 0q40 0 68 19t28 45.5t-28 45t-68 18.5M416 64q-96 0-160 53t-64 130q0 59 24 98t72 39q39 0 187-101t186-134q-14-6-68.5-31.5T495 78t-79-14"></svg:path>`,
})
export class WhhFontcaligraphyIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFontcaseIcon],svg[whh-fontcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M979 1023h-31q-26 0-50.5-18.5T864 959l-21-64H566l-21 64q-8 27-32.5 45.5T462 1023h-31q-27 0-39.5-18.5T388 959l188-575q8-27 32.5-45.5T659 320h91q26 0 50.5 18.5T834 384l188 575q8 27-4.5 45.5T979 1023M705 471l-97 296h194zM353 172L246 576h204l-42 127H212l-50 192q-9 27-33.5 45.5T78 959H47q-26 0-38.5-18.5T4 895L224 64q9-26 33.5-45T308 0h91q26 0 50.5 19T482 64l61 229l-87 266z"></svg:path>`,
})
export class WhhFontcaseIcon {
  readonly viewBox = input("0 0 1026 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFontcomicIcon],svg[whh-fontcomic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M864 256H569q-10 88-33.5 224t-51 282T448 960q-33 17-101 40.5t-91 23.5q2-15 15-90.5t15.5-92t13-80.5t13.5-87t10.5-77.5t10-85.5t7-78.5t6.5-89t3-86.5q-57 4-137 20T83 306l-51 14L0 64q172-16 384-32q86-6 214-14T811 5l85-5z"></svg:path>`,
})
export class WhhFontcomicIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFontgothicIcon],svg[whh-fontgothic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 192v676q135-49 192-164q0 150-103.5 235T480 1024q-113 0-209-55.5T119.5 817T64 608q0-127 67-264.5T301 129q-26-1-45-1q-128 0-256 128q0-64 51-123t140.5-96T384 0q72 0 126.5 10T592 32t64.5 22T736 64q36 0 79.5-17.5T896 0q0 26-12.5 57.5t-35 62.5t-61 51.5T704 192m-320-55q-25-3-33-4q-73 57-116 148.5T192 480q0 104 40.5 193.5T342 820l42-52zm64 663q-21 21-51 58q71 38 147 38q46 0 96-10V188q-42-6-128-26v478q0 4-.5 11t-4 27t-9.5 38.5t-19 42t-31 41.5"></svg:path>`,
})
export class WhhFontgothicIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFonthandwritingIcon],svg[whh-fonthandwriting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M800 192q-77 0-301 54q-19 198-51 400t-64 282q-15 36-44 66t-52 30q-11 0-18.5-12t-10-35t-3-39t-.5-42q0-42 8-136t24-251t22-218q-137 29-214 29q-41 0-68.5-41T0 195q0-36 25-51.5T96 128q70 0 228-23v-9v8h2q7-44 23-74t38-30q126 0 125 64v14q196-25 297-5q20 4 28.5 6t22.5 7t20 10t11 14.5t5 21.5q0 31-27.5 45.5T800 192"></svg:path>`,
})
export class WhhFonthandwritingIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFontroundedIcon],svg[whh-fontrounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M736.992 192h-224v736q0 40-28 68t-68 28t-68-28t-28-68V192h-224q-40 0-68-28t-28-68t28-68t68-28h640q40 0 68 28t28 68t-28 68t-68 28"></svg:path>`,
})
export class WhhFontroundedIcon {
  readonly viewBox = input("0 0 833 1024")
  readonly width = input("0.82em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFontsansserifIcon],svg[whh-fontsansserif-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 192v832H320V192H0V0h832v192z"></svg:path>`,
})
export class WhhFontsansserifIcon {
  readonly viewBox = input("0 0 832 1024")
  readonly width = input("0.82em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFontserifIcon],svg[whh-fontserif-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 192q0-53-28-90.5T736 64H608q-40 0-68 37.5T512 192v672q0 40 37.5 68t90.5 28v64H256v-64q53 0 90.5-28t37.5-68V192q0-53-28-90.5T288 64H160q-40 0-68 37.5T64 192H0V0h896v192z"></svg:path>`,
})
export class WhhFontserifIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFontstencilIcon],svg[whh-fontstencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M769.113 256q-12 0-27-16.5t-30-39t-43.5-52.5t-60.5-51q-11-8-21.5-29.5t-10.5-34.5q0-14 9.5-23t22.5-9q16 0 79.5-.5t81.5-.5q15 0 31 16t24 32l9 16v128q0 26-19 45t-45 19m-129 704q0 27-18.5 45.5t-45.5 18.5h-320q-26 0-45-18.5t-19-45.5q0-11 20-25.5t44-27.5t44-33t20-42V64q0-36 25.5-50t71-14t70.5 14t25 50v768q0 22 20 42t44 33t44 27.5t20 25.5m-416-864q-32 22-60 52t-43 52.5t-30 39t-27 16.5q-27 0-45.5-19t-18.5-45V64q3-7 9-17.5t22.5-28.5t32.5-18h160q14 0 23 9.5t9 22.5q0 14-10.5 35.5t-21.5 28.5"></svg:path>`,
})
export class WhhFontstencilIcon {
  readonly viewBox = input("0 0 834 1024")
  readonly width = input("0.82em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFonttypewriterIcon],svg[whh-fonttypewriter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832.053 384q-26.5 0-45-18.5t-18.5-45.5V128h-256v768h128q26 0 45 19t19 45.5t-19 45t-45 18.5h-384q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45.5-19h128V128h-256v192q0 27-19 45.5t-45.5 18.5t-45-18.5T.553 320V64q0-26 18.5-45t45.5-19h768q23 0 23 5q19 7 30 23t11 36v256q0 27-19 45.5t-45.5 18.5"></svg:path>`,
})
export class WhhFonttypewriterIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFoodtrayIcon],svg[whh-foodtray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 640H32q-13 0-22.5-9.5T0 608q0-188 116.5-320.5T416 128q13 0 22.5-9.5T448 96t-9.5-22.5T416 64t-22.5-9.5T384 32t9.5-22.5T416 0h192q13 0 22.5 9.5T640 32t-9.5 22.5T608 64t-22.5 9.5T576 96t9.5 22.5T608 128q183 27 299.5 159.5T1024 608q0 13-9.5 22.5T992 640M32 704h960q13 0 22.5 9.5t9.5 22.5t-9.5 22.5T992 768H32q-13 0-22.5-9.5T0 736t9.5-22.5T32 704"></svg:path>`,
})
export class WhhFoodtrayIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFootballIcon],svg[whh-football-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m354-785q-69-90-175-137l-179 90l-179-90q-106 47-176 137l35 17v192L66 543q8 123 79 225h175l64 160v13q63 19 128 19t128-19v-13l64-160h175q71-102 79-225l-126-95V256zM413 639l-61-177l160-110l160 110l-61 177z"></svg:path>`,
})
export class WhhFootballIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhForbiddenIcon],svg[whh-forbidden-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1023q-104 0-199-40.5t-163.5-109T40.5 710T0 511t40.5-198.5t109-163T313 40.5T512 0t199 40.5t163.5 109t109 163T1024 511t-40.5 199t-109 163.5t-163.5 109t-199 40.5m222-199L512 602L290 824q100 71 222 71t222-71M128 511q0 122 70 221l222-222l-221-221q-71 100-71 222m163-313l221 220l221-220q-100-71-221-71t-221 71m534 91L604 510l222 222q70-99 70-221t-71-222"></svg:path>`,
})
export class WhhForbiddenIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhForestIcon],svg[whh-forest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M865 823q-13 7-31 8l-1 1H577v128q0 26-18.5 45t-45.5 19H385q-26 0-45-19t-19-45V832H65q0-1-1-1q-18-1-31-8q-23-13-30-38t7-48l149-225h-30v-2q-19 1-32-7q-23-13-30-38t7-48L394 32q0-1 4-5l5.5-5.5l5.5-5l6.5-5l7-4.5l8-4l8.5-2l10-1l10 1l8.5 2l8 4l7 4.5l6.5 5l5.5 5L500 27l5 5l320 385q13 23 6 48t-30 38q-13 8-32 7v2h-30l150 225q13 23 6 48t-30 38"></svg:path>`,
})
export class WhhForestIcon {
  readonly viewBox = input("0 0 898 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhForestaltIcon],svg[whh-forestalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 448q0 62-36 111t-93 69l.5 4.5l.5 7.5q0 53-37.5 90.5T512 768v192q0 26-19 45t-45 19H320q-27 0-45.5-19T256 960V768q-53 0-90.5-37.5T128 640q-53 0-90.5-37.5T0 512q0-36 18.5-65.5T67 400Q0 343 0 256q0-80 56-136t136-56q3 0 7.5.5t6.5.5Q287 0 384 0q101 0 184 70q22-6 40-6q66 0 113 47t47 113q0 60-41 106q41 52 41 118"></svg:path>`,
})
export class WhhForestaltIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhForkIcon],svg[whh-fork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M990.5 988.5q-25.5 25.5-58.5 32t-70.5-9.5t-72.5-54L499 617q-64 30-136.5 17.5T237 569L16 347Q0 332 0 309.5T16 271t38.5-16T92 271l234 234q38-9 73-30L144 220q-16-16-16-38.5t16-38.5t38-16t38 16l256 255q21-34 30-72L272 92q-16-16-16-38.5t15.5-38t38-15.5T348 16l223 220q52 53 64.5 126T618 499l340 288q38 34 54.5 72t10 71t-32 58.5"></svg:path>`,
})
export class WhhForkIcon {
  readonly viewBox = input("0 0 1025 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhForkcmsIcon],svg[whh-forkcms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M897 253v67h32q13 0 22.5 9.5T961 352t-9.5 22.5T929 384h-32v480q0 13-9.5 22.5T865 896t-22.5-9.5T833 864V384h-64q-25 0-128-78v366q0 93-84.5 158.5t-204 65.5T149 830.5T65 672v-3q-20-6-38-24q-17-17-23.5-36T6 581t27.5-2.5T70 603q15 15 22 32q10-19 31-32q10-6 14.5-9t12-7.5t12-6t10-3t9-.5t6.5 4q9 9 3 28t-24 36q-6 6-19 20.5T129 686q34 18 64 18q46 0 81.5-37t43.5-93L136 432q-7-7-7-17t7-17l185-142V0h64v64h64V0h64v64h64V0h64v225q130 95 156 95h36v-67q-55-12-91.5-56T705 96V32q0-14 9.5-23T737 0t22.5 9t9.5 23v64q0 31 18 55.5t46 34.5V32q0-14 9.5-23T865 0t22.5 9t9.5 23v154q28-10 46-34.5T961 96V32q0-14 9.5-23T993 0t22.5 9t9.5 23v64q0 57-36.5 101T897 253m-576 91l-96 72l96 72z"></svg:path>`,
})
export class WhhForkcmsIcon {
  readonly viewBox = input("0 0 1025 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhForkliftIcon],svg[whh-forklift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 576q-76 3-134 60t-58 132v64h-64v-64q0-75-60.5-133.5T448 576H256v224q0 12-7.5 20.5T230 831q-2 1-6 1H32q-13 0-22.5-9.5T0 800t9.5-22.5T32 768h160V32q0-13 9.5-22.5T224 0t22.5 9.5T256 32v480h128L512 64q0-26 18.5-45T576 0h384q26 0 45 19t19 45v512zm0-412q0-15-11.5-25.5T858 128H627q-16 0-27 10.5T589 164l-77 248q0 15 11.5 25.5T550 448h90q0-27 19-45.5t45-18.5h64V224q0-13 9.5-22.5T800 192t22.5 9.5T832 224v160h64zM448 640q53 0 90.5 37.5T576 768t-37.5 90.5T448 896t-90.5-37.5T320 768t37.5-90.5T448 640m448 0q53 0 90.5 37.5T1024 768t-37.5 90.5T896 896t-90.5-37.5T768 768t37.5-90.5T896 640"></svg:path>`,
})
export class WhhForkliftIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFormIcon],svg[whh-form-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 768h-768q-53 0-90.5-37.5T.428 640V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v512q0 53-37.5 90.5t-90.5 37.5m0-576q0-26-19-45t-45-19h-640q-27 0-45.5 19t-18.5 45v128q0 26 18.5 45t45.5 19h640q27 0 45.5-19t18.5-45zm-64 320h-640q-27 0-45.5 18.5t-18.5 45.5t18.5 45.5t45.5 18.5h640q27 0 45.5-19t18.5-45.5t-18.5-45t-45.5-18.5m-576 384h192q26 0 45 18.5t19 45t-19 45.5t-45 19h-192q-27 0-45.5-19t-18.5-45.5t18.5-45t45.5-18.5m384 0h256q26 0 45 18.5t19 45t-19 45.5t-45 19h-256q-27 0-45.5-19t-18.5-45.5t18.5-45t45.5-18.5"></svg:path>`,
})
export class WhhFormIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhForrstIcon],svg[whh-forrst-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-32-256l-288-576q-23-64-64-64q-6 0-12.5 2t-11 4.5t-9.5 8t-8 8.5t-7 10.5t-5.5 10.5l-5.5 11l-5 9l-288 576q-1 2-16.5 27t-15.5 37q0 26 19 45t45 19h256V747l-119-118q-9-9-9-22t9-22t22-9t22 9l75 76v-53q0-13 9.5-22.5t22.5-9.5h53l54-55q9-9 22-9t22 9t9 22t-9 22l-55 54v106l75-76q9-9 22-9t22 9t9 22t-9 22l-119 118v85h256q26 0 45-19t19-45q0-9-6-21.5t-15-26z"></svg:path>`,
})
export class WhhForrstIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFortIcon],svg[whh-fort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 1024H640V896q0-53-37.5-90.5T512 768t-90.5 37.5T384 896v128H32q-13 0-22.5-9.5T0 992V384h64v32q0 13 9.5 22.5T96 448t22.5-9.5T128 416v-32h64v32q0 13 9.5 22.5T224 448t22.5-9.5T256 416v-32h64V192h-32q-13 0-22.5-9.5T256 160V32q0-13 9.5-22.5T288 0h32v32q0 13 9.5 22.5T352 64t22.5-9.5T384 32V0h64v32q0 13 9.5 22.5T480 64h64q13 0 22.5-9.5T576 32V0h64v32q0 13 9.5 22.5T672 64t22.5-9.5T704 32V0h32q13 0 22.5 9.5T768 32v128q0 13-9.5 22.5T736 192h-32v192h64v32q0 13 9.5 22.5T800 448t22.5-9.5T832 416v-32h64v32q0 13 9.5 22.5T928 448t22.5-9.5T960 416v-32h64v608q0 13-9.5 22.5T992 1024M256 640q0-26-19-45t-45.5-19t-45 19t-18.5 45v64h128zm320-384q0-26-19-45t-45.5-19t-45 19t-18.5 45v64h128zm320 384q0-26-19-45t-45.5-19t-45 19t-18.5 45v64h128z"></svg:path>`,
})
export class WhhFortIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhForumsaltIcon],svg[whh-forumsalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928.784 832h-32v192l-192-192h-416q-53 0-82-46l146-146h384q66 0 113-47t47-113V256h32q40 0 68 28t28 68v384q0 40-28 68t-68 28m-192-256h-416l-192 192V576h-32q-40 0-68-28t-28-68V96q0-40 28-68t68-28h640q40 0 68 28t28 68v384q0 40-28 68t-68 28"></svg:path>`,
})
export class WhhForumsaltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhForwardIcon],svg[whh-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1009.62 550l-435 463q-25 27-62-13V24q37-40 62-13l435 463q15 16 15 38.5t-15 37.5m-947 463q-25 27-62-13V24q37-40 62-13l435 463q15 16 15 38.5t-15 37.5z"></svg:path>`,
})
export class WhhForwardIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFountainIcon],svg[whh-fountain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 576h-32q0 80-79 145t-205 93q-50 25-75 43.5T576 896q0 27 18.5 45.5T640 960h32q13 0 22.5 9.5T704 992t-9.5 22.5t-22.5 9.5H352q-13 0-22.5-9.5T320 992t9.5-22.5T352 960h32q26 0 45-19t19-45q0-20-25-38.5T348 814q-126-28-205-93T64 576H32q-13 0-22.5-9.5T0 544t9.5-22.5T32 512h416V384q0-27 19-45.5t45.5-18.5t45 18.5T576 384v128h416q13 0 22.5 9.5t9.5 22.5t-9.5 22.5T992 576m-64-192q-13 0-22.5-9.5T896 352t9.5-22.5T928 320t22.5 9.5T960 352t-9.5 22.5T928 384m0-128q-13 0-22.5-9.5T896 224t9.5-22.5T928 192t22.5 9.5T960 224t-9.5 22.5T928 256m-64-128q-13 0-22.5-9.5T832 96t9.5-22.5T864 64t22.5 9.5T896 96t-9.5 22.5T864 128M736 64q-13 0-22.5-9.5T704 32t9.5-22.5T736 0t22.5 9.5T768 32t-9.5 22.5T736 64m-128 64q-13 0-22.5-9.5T576 96t9.5-22.5T608 64t22.5 9.5T640 96t-9.5 22.5T608 128M480 256q13 0 22.5 9.5T512 288t-9.5 22.5T480 320t-22.5-9.5T448 288t9.5-22.5T480 256m64 0q13 0 22.5 9.5T576 288t-9.5 22.5T544 320t-22.5-9.5T512 288t9.5-22.5T544 256m0-64q-13 0-22.5-9.5T512 160t9.5-22.5T544 128t22.5 9.5T576 160t-9.5 22.5T544 192m-64 0q-13 0-22.5-9.5T448 160t9.5-22.5T480 128t22.5 9.5T512 160t-9.5 22.5T480 192m-64-64q-13 0-22.5-9.5T384 96t9.5-22.5T416 64t22.5 9.5T448 96t-9.5 22.5T416 128M288 64q-13 0-22.5-9.5T256 32t9.5-22.5T288 0t22.5 9.5T320 32t-9.5 22.5T288 64m-128 64q-13 0-22.5-9.5T128 96t9.5-22.5T160 64t22.5 9.5T192 96t-9.5 22.5T160 128M96 320q13 0 22.5 9.5T128 352t-9.5 22.5T96 384t-22.5-9.5T64 352t9.5-22.5T96 320m0-64q-13 0-22.5-9.5T64 224t9.5-22.5T96 192t22.5 9.5T128 224t-9.5 22.5T96 256"></svg:path>`,
})
export class WhhFountainIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFourgIcon],svg[whh-fourg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.226 832h-384q-26 0-45-18.5t-19-45.5V64q0-26 19-45t45-19h384q27 0 45.5 19t18.5 45v64q0 27-18.5 45.5t-45.5 18.5h-256v448h128V512q-26 0-45-18.5t-19-45.5v-64q0-26 19-45t45-19h128q27 0 45.5 19t18.5 45v384q0 27-18.5 45.5t-45.5 18.5m-576 0h-64q-26 0-45-18.5t-19-45.5V512h-192q-26 0-45-18.5t-19-45.5V64q0-26 19-45t45-19h64q27 0 45.5 19t18.5 45v256h64V64q0-26 19-45t45-19h64q27 0 45.5 19t18.5 45v704q0 27-18.5 45.5t-45.5 18.5"></svg:path>`,
})
export class WhhFourgIcon {
  readonly viewBox = input("0 0 1025 832")
  readonly width = input("1.24em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFourimagesIcon],svg[whh-fourimages-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-64V832h192v64q0 53-37.5 90.5t-90.5 37.5m-64-1024h64q53 0 90.5 37.5t37.5 90.5v512h-192zm-572 623q-4 7-5 19.5t0 20.5l1 9v128q0 13 9.5 22.5t22.5 9.5h352v192h-512q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h479zm206 17l174-311v311z"></svg:path>`,
})
export class WhhFourimagesIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFourohfourIcon],svg[whh-fourohfour-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5M320 416q0-13-9.5-22.5T288 384t-22.5 9.5T256 416v96h-64v-96q0-13-9.5-22.5T160 384t-22.5 9.5T128 416v128q0 12 7.5 20.5T154 575q2 1 6 1h96v96q0 13 9.5 22.5T288 704t22.5-9.5T320 672zm320 32q0-26-19-45t-45-19H448q-26 0-45 19t-19 45v192q0 27 19 45.5t45 18.5h128q26 0 45-18.5t19-45.5zm224-64q-13 0-22.5 9.5T832 416v96h-64v-96q0-13-9.5-22.5T736 384t-22.5 9.5T704 416v128q0 12 7.5 20.5T730 575q2 1 6 1h96v96q0 13 9.5 22.5T864 704t22.5-9.5T896 672V416q0-13-9.5-22.5T864 384m-416 64h128v192H448z"></svg:path>`,
})
export class WhhFourohfourIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFoursquareIcon],svg[whh-foursquare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M998 327L824 485l58 58q14 14 14 34t-14 34L545 947q-14 14-33.5 14T478 947L163 632q-72-21-117.5-80T0 417q0-92 65.5-158T224 193q54 0 100.5 24t77.5 66l76-76q14-14 33.5-14t33.5 14l137 136L998 5q13-14 22 15q4 11 4 21v226q0 13-7.5 30.5T998 327m-458-58q-12-12-28.5-12T484 269l-57 56q21 45 21 92q0 37-14 76l54 57l161-172zm249 248L514 766q-7 6-20 1.5T469 754l-12-8l-131-130q-41 21-88 24l246 245q11 12 27.5 12t28.5-12l280-280q12-12 12-28t-12-28z"></svg:path>`,
})
export class WhhFoursquareIcon {
  readonly viewBox = input("0 0 1024 961")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFoursquarealtIcon],svg[whh-foursquarealt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1009 287L543 753q-15 15-36 15t-36-15L303 575q-15-15-15-36t15-36l72-72q15-15 36-15t36 15l65 64l352-352q15-15 36.5-15t36.5 15l72 72q15 15 15 36.5t-15 35.5m-530 95q-30-30-72.5-30T334 382l-81 80q-30 30-30 72.5t30 72.5l177 195q30 30 72.5 30t72.5-30l390-389l29 29q29 29 29 69.5T994 580L581 994q-29 29-69.5 29T443 994L29 580Q0 552 0 511.5T29 442L443 29q28-29 68.5-29T581 29l158 158l-227 227z"></svg:path>`,
})
export class WhhFoursquarealtIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFreewayIcon],svg[whh-freeway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 448h-32v160q0 13-9.5 22.5T928 640t-22.5-9.5T896 608V448H128v160q0 13-9.5 22.5T96 640t-22.5-9.5T64 608V448H32q-13 0-22.5-9.5T0 416v-64q0-13 9.5-22.5T32 320h960q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5T992 448M576 32q0-13 9.5-22.5T608 0h64q13 0 22.5 9.5T704 32l45 224H576zm-256 0q0-13 9.5-22.5T352 0h64q13 0 22.5 9.5T448 32v224H275zm128 480v480q0 13-9.5 22.5T416 1024H160q-13 0-22.5-9.5T128 992l96-480zm448 480q0 13-9.5 22.5T864 1024H608q-13 0-22.5-9.5T576 992V512h224z"></svg:path>`,
})
export class WhhFreewayIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFridgeIcon],svg[whh-fridge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 960h-64v32q0 13-9.5 22.5T480 1024t-22.5-9.5T448 992v-32H192v32q0 13-9.5 22.5T160 1024t-22.5-9.5T128 992v-32H64q-26 0-45-19T0 896V448q0-27 18.5-45.5T64 384h512q27 0 45.5 18.5T640 448v448q0 26-18.5 45T576 960M128 480q0-13-9.5-22.5T96 448t-22.5 9.5T64 480v64q0 13 9.5 22.5T96 576t22.5-9.5T128 544zm448-160H64q-26 0-45-19T0 256V64q0-27 19-45.5T64 0h512q27 0 45.5 18.5T640 64v192q0 26-18.5 45T576 320M128 160q0-13-9.5-22.5T96 128t-22.5 9.5T64 160v64q0 13 9.5 22.5T96 256t22.5-9.5T128 224z"></svg:path>`,
})
export class WhhFridgeIcon {
  readonly viewBox = input("0 0 640 1024")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFriendsIcon],svg[whh-friends-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 586q0 10-8.5 18t-26 13.5t-36 9.5t-47 6.5t-50 3.5t-54.5 2t-50.5 1H576V512h-1q-1-46-18-80q27-7 51-10v-31q-96-58-96-240q0-75 53.5-113T704 0t138.5 38T896 151q0 189-96 243v28q101 14 162 56t62 108M416 778v28q101 14 162 56.5T640 970q0 10-8.5 18t-26 13.5t-36 9.5t-47 6.5t-50 4t-54.5 2t-50.5.5h-95l-50.5-.5l-54.5-2l-50-4l-47-6.5l-36-9.5l-26-13.5L0 970q1-65 62-107.5T224 806v-31q-96-58-96-240q0-75 53.5-113T320 384t138.5 38T512 535q0 189-96 243"></svg:path>`,
})
export class WhhFriendsIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFriesIcon],svg[whh-fries-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 461L920 973q-3 21-25 35.5t-49 14.5H188q-27 0-49-14.5T113 973L2 461q-5-26 6.5-47T43 383q62 27 190.5 45.5T514 447q151 0 278.5-18T982 383q23 10 34.5 31t7.5 47M833 95l128-32v264q-49 18-128 31zM642 0l127 64v304q-61 7-127 11zM450 382V32L578 0v382q-38 1-64.5 1t-63.5-1M258 32L386 0v379q-67-3-128-11zM66 127l128-64v295q-79-13-128-30z"></svg:path>`,
})
export class WhhFriesIcon {
  readonly viewBox = input("0 0 1026 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFtpIcon],svg[whh-ftp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.678 768h-320v128h128q26 0 45 19t19 45.5t-19 45t-45 18.5h-384q-27 0-45.5-18.5t-18.5-45t19-45.5t45-19h128V768h-320q-53 0-90.5-37.5T.678 640V256q0-26 19-45t45-19h480l46-84q7-19 28-31.5t44-12.5h240q24 0 45 12.5t28 31.5l49 84v448q0 53-37.5 90.5t-90.5 37.5m-454-294l-135-145q-8-9-19-9t-19 9l-135 145q-8 9-5 23.5t11 14.5h52v96q0 13 9.5 22.5t22.5 9.5h128q13 0 22.5-9.5t9.5-22.5v-96h52q8 0 11-14.5t-5-23.5m442-26h-52v-96q0-13-9.5-22.5t-22.5-9.5h-128q-13 0-22.5 9.5t-9.5 22.5v96h-52q-8 0-11 14.5t5 23.5l135 145q8 9 19 9t19-9l135-145q8-9 5-23.5t-11-14.5m-838-404q7-19 28-31.5t44-12.5h240q24 0 45 12.5t29 31.5l48 84h-480z"></svg:path>`,
})
export class WhhFtpIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFtpaccountsIcon],svg[whh-ftpaccounts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.678 768h-320v128h128q26 0 45 19t19 45.5t-19 45t-45 18.5h-384q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45.5-19h128V768h-320q-53 0-90.5-37.5T.678 640V256q0-26 19-45t45-19h480q0-8 11.5-29t22.5-38l12-17q7-19 28-31.5t44-12.5h240q24 0 45 12.5t28 31.5l49 84v448q0 53-37.5 90.5t-90.5 37.5m-320-186v-53q64-37 64-168q0-52-36-78.5t-92-26.5t-92 26.5t-36 78.5q0 125 64 166v55q-56 11-91.5 37t-36.5 58q0 27 192 27t192-27q-1-32-36.5-58t-91.5-37m-530-538q7-19 28-31.5t44-12.5h240q24 0 45 12.5t29 31.5l48 84h-480z"></svg:path>`,
})
export class WhhFtpaccountsIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFtpsessionIcon],svg[whh-ftpsession-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.678 768h-320v128h128q26 0 45 19t19 45.5t-19 45t-45 18.5h-384q-26 0-45-18.5t-19-45t18.5-45.5t45.5-19h128V768h-320q-53 0-90.5-37.5T.678 640V256q0-26 19-45t45-19h480l46-85q7-18 28-30.5t44-12.5h240q24 0 45 12.5t28 30.5q49 58 49 85v448q0 53-37.5 90.5t-90.5 37.5m-384-512q-87 0-160.5 43t-116.5 116.5t-43 160.5q0 33 6 64h66q-8-32-8-64q0-96 64-169v9l131 177q5 21 22 34t39 13q24 0 41.5-15t21.5-38l65-107v-32h-32l-93 57l-163-121h-9q73-64 169-64q106 0 181 75t75 181q0 31-8 64h66q6-32 6-64q0-87-43-160.5T673.178 299t-160.5-43m-466-212q7-19 28-31.5t44-12.5h240q24 0 45 12.5t29 31.5l48 84h-480z"></svg:path>`,
})
export class WhhFtpsessionIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFuelphpIcon],svg[whh-fuelphp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 1024q-32 0-64-6q-32 6-64 6q-87 0-160.5-43T43 864.5T0 704q0-72 34.5-173T111 347t97.5-174t77-123T320 0q27 38 64 96l64-96q13 18 34.5 50T559 173t97.5 174t77 184T768 704q0 87-43 160.5T608.5 981T448 1024M320 96q-10 16-27.5 43.5t-61.5 105t-78 147t-61.5 152T64 680q0 116 75 198t181 82t181-82t75-198q0-54-26.5-134.5t-64-156t-75.5-143t-63.5-109T320 96m96 51q224 365 224 557q0 71-29 133.5T530 945q77-28 125.5-101T704 680q0-54-26.5-134.5t-64-156t-75-143T474 137l-26-41q-13 20-32 51"></svg:path>`,
})
export class WhhFuelphpIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFullbordersIcon],svg[whh-fullborders-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 960V0h960v960zm64-64h384V512H64zm0-832v384h384V64zm832 0H512v384h384zm0 448H512v384h384z"></svg:path>`,
})
export class WhhFullbordersIcon {
  readonly viewBox = input("0 0 960 960")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFullscreenIcon],svg[whh-fullscreen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.356 1024h-896q-26 0-45-18.5t-19-45.5V64q0-27 19-45.5t45-18.5h896q27 0 45.5 18.5t18.5 45.5v896q0 27-18.5 45.5t-45.5 18.5m0-960h-896v896h896zm-800 64h256q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-68l165 165l164-165h-69q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h256q13 0 22.5 9.5t9.5 22.5v256q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-69l-164 165l164 163v-67q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v256q0 13-9.5 22.5t-22.5 9.5h-256q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h71l-165-165l-165 165h67q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-256q-13 0-22.5-9.5t-9.5-22.5V608q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v71l166-167l-166-165v69q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5V160q0-13 9.5-22.5t22.5-9.5"></svg:path>`,
})
export class WhhFullscreenIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFullstarIcon],svg[whh-fullstar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M900 565q-46 46-88 78q7 36 12 71q8 68 9 113.5t-7.5 77T800 949t-48 11.5t-71.5-16.5t-99.5-44q-35-18-69-39q-32 20-69 39q-59 29-99.5 44T272 960.5T224 949t-25.5-44.5t-7.5-77t9-113.5q5-34 12-71q-42-32-88-78q-48-48-76.5-83.5T7.5 416T3 365t35-39t72.5-30.5T225 270q49-8 91-12q17-41 42-87q32-59 57-95.5t50-56T512 0t47 19.5t50 56t57 95.5q25 46 42 87q42 4 91 12q70 13 114.5 25.5T986 326t35 39t-4.5 51t-40 65.5T900 565"></svg:path>`,
})
export class WhhFullstarIcon {
  readonly viewBox = input("0 0 1024 961")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhFxIcon],svg[whh-fx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 768H128q-53 0-90.5-37.5T0 640V128q0-53 37.5-90.5T128 0h768q53 0 90.5 37.5T1024 128v512q0 53-37.5 90.5T896 768M448 160q0-13-9.5-22.5T416 128H96q-13 0-22.5 9.5T64 160v448q0 13 9.5 22.5T96 640h64q13 0 22.5-9.5T192 608V448h96q13 0 22.5-9.5T320 416v-64q0-13-9.5-22.5T288 320h-96v-64h224q13 0 22.5-9.5T448 224zm507 0q8-13 3-22.5t-19-9.5h-67q-14 0-29 9.5T821 160l-53 99l-53-99q-7-13-22-22.5t-29-9.5h-67q-14 0-19 9.5t3 22.5l120 224l-120 224q-8 13-3 22.5t19 9.5h67q14 0 29-9.5t22-22.5l53-99l53 99q7 13 22 22.5t29 9.5h67q14 0 19-9.5t-3-22.5L835 384z"></svg:path>`,
})
export class WhhFxIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGIcon],svg[whh-g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 640q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45.5-19h256q26 0 45 19t19 45v192q0 106-75 181t-181 75H256q-106 0-181-75T0 768V256Q0 150 75 75T256 0h256q106 0 181 75t75 181q0 27-19 45.5T703.5 320t-45-18.5T640 256q0-53-37.5-90.5T512 128H256q-53 0-90.5 37.5T128 256v512q0 53 37.5 90.5T256 896h256q53 0 90.5-37.5T640 768V640z"></svg:path>`,
})
export class WhhGIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGUpperCaseIcon],svg[whh-g-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 640q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45.5-19h256q26 0 45 19t19 45v192q0 106-75 181t-181 75H256q-106 0-181-75T0 768V256Q0 150 75 75T256 0h256q106 0 181 75t75 181q0 27-19 45.5T703.5 320t-45-18.5T640 256q0-53-37.5-90.5T512 128H256q-53 0-90.5 37.5T128 256v512q0 53 37.5 90.5T256 896h256q53 0 90.5-37.5T640 768V640z"></svg:path>`,
})
export class WhhGUpperCaseIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGalaxyIcon],svg[whh-galaxy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 896q-104 0-192.5-51.5t-140-140T192 512q0-106 75-181t181-75q34 0 78 19t79 57.5t35 83.5q0 59-11 84q33-15 54-46.5t21-69.5q0-106-75-181t-181-75q-87 0-160.5 43T171 287.5T128 448q0 125 37.5 228T256 832Q117 786 58.5 693T0 448q0-91 35.5-174T131 131t143-95.5T448 0q104 0 192.5 51.5t140 140T832 384q0 106-75 181t-181 75q-34 0-78-19t-79-57.5t-35-83.5q0-59 11-84q-33 15-54 46.5T320 512q0 106 75 181t181 75q87 0 160.5-43T853 608.5T896 448q0-124-37.5-227.5T768 64q139 46 197.5 139t58.5 245q0 91-35.5 174T893 765t-143 95.5T576 896"></svg:path>`,
})
export class WhhGalaxyIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGalaxyaltIcon],svg[whh-galaxyalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 896q-104 0-192.5-51.5t-140-140T192 512q0-64 32-122.5t92-96T448 256q50 0 89 45.5T576 416q-2-4-6-10.5t-16.5-23t-26.5-29t-35.5-23T448 320q-52 0-90 50.5T320 512q0 106 75 181t181 75q87 0 160.5-43T853 608.5T896 448q0-125-37.5-228T768 64q139 46 197.5 139t58.5 245q0 91-35.5 174T893 765t-143 95.5T576 896m0-256q-50 0-89-45.5T448 480q2 4 6 10.5t16.5 23t26.5 29t35.5 23T576 576q52 0 90-50.5T704 384q0-106-75-181t-181-75q-87 0-160.5 43T171 287.5T128 448q0 125 37.5 228T256 832Q117 786 58.5 693T0 448q0-91 35.5-174T131 131t143-95.5T448 0q104 0 192.5 51.5t140 140T832 384q0 64-32 122.5t-92 96T576 640"></svg:path>`,
})
export class WhhGalaxyaltIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGalleryIcon],svg[whh-gallery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 1024V128h896v896zm832-832H192v640h768zm-576 64q53 0 90.5 37.5T512 384t-37.5 90.5T384 512t-90-37.5t-38-90.5v-1q1-53 38-90t90-37m47 337l174 175H256v-93l82-82q18-18 46.5-18t46.5 18m259-128q18-18 46.5-18t46.5 18l113 113v190H695L542 615zM64 896H0V0h896v64H64z"></svg:path>`,
})
export class WhhGalleryIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGameboyIcon],svg[whh-gameboy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M544 1024H64q-26 0-45-19T0 960V64q0-27 18.5-45.5T64 0h640q27 0 45.5 18.5T768 64v736q0 93-65.5 158.5T544 1024m-31.5-128q26.5 0 45-19t18.5-45.5t-18.5-45t-45-18.5t-45.5 18.5t-19 45t19 45.5t45.5 19M64 720v32q0 7 4.5 11.5T80 768h48v48q0 7 4.5 11.5T144 832h32q7 0 11.5-4.5T192 816v-48h48q7 0 11.5-4.5T256 752v-32q0-7-4.5-11.5T240 704h-48v-48q0-7-4.5-11.5T176 640h-32q-7 0-11.5 4.5T128 656v48H80q-7 0-11.5 4.5T64 720m576-560q0-13-9.5-22.5T608 128H160q-13 0-22.5 9.5T128 160v320q0 13 9.5 22.5T160 512h448q13 0 22.5-9.5T640 480zm.5 480q-26.5 0-45.5 18.5t-19 45t19 45.5t45.5 19t45-19t18.5-45.5t-18.5-45t-45-18.5"></svg:path>`,
})
export class WhhGameboyIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGamecursorIcon],svg[whh-gamecursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 704H704v256q0 26-19 45t-45 19H384q-27 0-45.5-19T320 960V704H64q-27 0-45.5-19T0 640V384q0-27 19-45.5T64 320h256V64q0-27 19-45.5T384 0h256q27 0 45.5 18.5T704 64v256h256q27 0 45.5 18.5T1024 384v256q0 26-19 45t-45 19M192 384L64 512l128 128zM512 64L384 192h256zm-64 447.5q0 26.5 19 45.5t45.5 19t45-19t18.5-45.5t-19-45t-45-18.5t-45 18.5t-19 45M384 832l128 128l128-128zm448-448v256l128-128z"></svg:path>`,
})
export class WhhGamecursorIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGarageIcon],svg[whh-garage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.59 128h-960q-13 0-22.5-9.5T.59 96V32q0-13 9.5-22.5T32.59 0h960q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-960 704h32V192h896v640h32q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-960q-13 0-22.5-9.5T.59 864t9.5-22.5t22.5-9.5m160-32q0 13 9.5 22.5t22.5 9.5h576q13 0 22.5-9.5t9.5-22.5V288q0-13-9.5-22.5t-22.5-9.5h-576q-13 0-22.5 9.5t-9.5 22.5zm96-480h448q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-448q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5m0 192h448q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-448q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5m0 192h448q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-448q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5"></svg:path>`,
})
export class WhhGarageIcon {
  readonly viewBox = input("0 0 1025 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGasstationIcon],svg[whh-gasstation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.405 127h-64q-26 0-45 19t-19 45v448q0 53-37.5 90.5t-90.5 37.5h-64v128q27 0 45.5 19t18.5 45.5t-18.5 45t-45.5 18.5h-576q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45.5-19V64q0-27 18.5-45.5t45.5-18.5h448q26 0 45 18.5t19 45.5v575q27 0 45.5-18.5t18.5-45.5V127q0-53 37.5-90t90.5-37h128q27 0 45.5 18.5t18.5 45t-18.5 45t-45.5 18.5m-384 64q0-26-18.5-45t-45.5-19h-320q-26 0-45 19t-19 45v128q0 27 18.5 45.5t45.5 18.5h320q27 0 45.5-18.5t18.5-45.5z"></svg:path>`,
})
export class WhhGasstationIcon {
  readonly viewBox = input("0 0 1025 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGavelIcon],svg[whh-gavel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M959.998 320h-512v128h32q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-384q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h32V64h-32q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h384q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-32v128h512q26 0 45 18.5t19 45.5t-19 45.5t-45 18.5m-704-224q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5zm0 256q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5zm256 352q0 22 10 39.5t22 26t22 17t10 13.5v64q0 13-9.5 22.5t-22.5 9.5h-512q-13 0-22.5-9.5t-9.5-22.5v-64q0-5 10-13.5t22-17t22-26t10-39.5z"></svg:path>`,
})
export class WhhGavelIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGearaltIcon],svg[whh-gearalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 576H890q-14 87-66 159l63 64q9 9 9 22t-9 22l-44 44q-9 9-22 9t-22-9l-64-63q-72 52-159 66v102q0 13-9.5 22.5T544 1024h-64q-13 0-22.5-9.5T448 992V890q-87-14-159-66l-64 63q-9 9-22 9t-22-9l-44-44q-9-9-9-22t9-22l63-64q-52-72-66-159H32q-13 0-22.5-9.5T0 544v-64q0-13 9.5-22.5T32 448h102q14-86 66-159l-63-63q-9-9-9-22t9-22l44-45q9-9 22-9t22 9l64 64q72-52 159-67V32q0-13 9.5-22.5T480 0h64q13 0 22.5 9.5T576 32v102q87 15 159 67l64-64q9-9 22-9t22 9l44 45q9 9 9 22t-9 22l-63 63q52 73 66 159h102q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5T992 576M512 256q-106 0-181.5 75T255 512t75.5 181T512 768t181.5-75T769 512t-75.5-181T512 256"></svg:path>`,
})
export class WhhGearaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGearfourIcon],svg[whh-gearfour-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 576H890q-6 36-18 70l88 51q11 6 14.5 19t-3.5 24l-32 56q-6 11-19 14.5t-24-3.5l-88-50q-23 28-51 51l50 88q7 11 3.5 24T796 939l-56 32q-11 7-24 3.5T697 960l-51-88q-34 12-70 18v102q0 13-9.5 22.5T544 1024h-64q-13 0-22.5-9.5T448 992V890q-36-6-70-18l-51 88q-6 11-19 14.5t-24-3.5l-56-32q-11-6-14.5-19t3.5-24l50-88q-28-23-51-51l-88 50q-11 7-24 3.5T85 796l-32-56q-7-11-3.5-24T64 697l88-51q-12-34-18-70H32q-13 0-22.5-9.5T0 544v-64q0-13 9.5-22.5T32 448h102q6-36 18-70l-88-51q-11-6-14.5-19t3.5-24l32-56q6-11 19-14.5t24 3.5l88 50q23-28 51-51l-50-88q-7-11-3.5-24T228 85l56-32q11-7 24-3.5T327 64l51 88q34-12 70-18V32q0-13 9.5-22.5T480 0h64q13 0 22.5 9.5T576 32v102q36 6 70 18l51-88q6-11 19-14.5t24 3.5l56 32q11 6 14.5 19t-3.5 24l-50 88q28 23 51 51l88-50q11-7 24-3.5t19 14.5l32 56q7 11 3.5 24T960 327l-88 51q12 34 18 70h102q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5T992 576M512 832q96 0 176-53l-94-94q-40 19-82 19t-82-19l-94 94q80 53 176 53m128-320q0-53-37.5-90.5T512 384t-90.5 37.5T384 512t37.5 90.5T512 640t90.5-37.5T640 512M245 336q-53 80-53 176t53 176l94-94q-19-40-19-82t19-82zm267-144q-96 0-176 53l94 94q40-19 82-19t82 19l94-94q-80-53-176-53m267 144l-94 94q19 40 19 82t-19 82l94 94q53-80 53-176t-53-176"></svg:path>`,
})
export class WhhGearfourIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGearsIcon],svg[whh-gears-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 737H884q-12 35-38 64l47 83q6 12 2.5 24T882 927l-53 31q-11 6-23 3t-18-15l-48-84q-20 4-36 4t-36-4l-48 84q-6 12-18 15t-23-3l-53-31q-10-7-13.5-19t2.5-24l47-83q-26-29-38-64H416q-13 0-22.5-9t-9.5-23v-64q0-13 9.5-22.5T416 609h108q12-34 38-63l-47-83q-6-12-2.5-24t13.5-19l53-31q11-6 23-3t18 14l48 85q20-4 36-4t36 4l48-85q6-11 18-14t23 3l53 31q10 7 13.5 19t-2.5 24l-47 83q26 29 38 63h108q13 0 22.5 9.5t9.5 22.5v64q0 14-9.5 23t-22.5 9M704 609q-27 0-45.5 19T640 673.5t18.5 45T704 737t45.5-18.5t18.5-45t-18.5-45.5t-45.5-19m-96-256H500q-12 35-38 64l47 83q6 11 2.5 23.5T498 543l-53 31q-11 6-23 2.5T404 562l-48-84q-19 3-36 3t-36-3l-48 84q-6 11-18 14.5t-23-2.5l-53-31q-10-7-13.5-19.5T131 500l47-83q-26-29-38-64H32q-13 0-22.5-9T0 321v-64q0-13 9.5-22.5T32 225h108q12-34 38-64l-47-83q-6-11-2.5-23.5T142 36l53-31q11-7 23-3.5T236 16l48 85q20-4 36-4t36 4l48-85q6-11 18-14.5T445 5l53 31q10 6 13.5 18.5T509 78l-47 83q26 30 38 64h108q13 0 22.5 9.5T640 257v64q0 14-9.5 23t-22.5 9M320 225q-27 0-45.5 19T256 289.5t18.5 45T320 353t45.5-18.5t18.5-45t-18.5-45.5t-45.5-19"></svg:path>`,
})
export class WhhGearsIcon {
  readonly viewBox = input("0 0 1024 962")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGearsaltIcon],svg[whh-gearsalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1022.075 641q2 18 2 32t-2 32h-64q-3 24-9 48l59 25q-9 29-24 59l-60-25q-11 21-27 41l45 45q-20 25-45 45l-45-45q-20 16-41 27l25 59q-30 16-59 25l-25-59q-24 6-48 9v64q-18 2-32 2t-32-2v-64q-24-3-48-9l-24 59q-30-9-60-25l25-59q-21-11-40-27l-46 45q-25-20-45-45l45-45q-15-20-27-41l-59 25q-16-30-25-59l60-25q-7-24-10-48h-64q-2-18-2-32t2-32h64q3-24 10-48l-60-25q9-29 25-59l59 25q12-21 27-41l-45-45q20-25 45-45l46 45q19-16 40-27l-25-60q30-15 60-24l24 59q24-7 48-9v-64q18-2 32-2t32 2v64q24 2 48 9l25-59q29 9 59 24l-25 60q21 12 41 27l45-45q25 20 45 45l-45 45q16 20 27 41l60-25q15 30 24 59l-59 25q6 24 9 48zm-350-128q-66 0-113 47t-47 113t47 113t113 47t113-47t47-113t-47-113t-113-47m-225-214l-12 31q-3 6-9.5 9t-12.5 0l-57-23q-17 24-41 40l24 57q3 7 0 13t-9 9l-31 13q-6 3-12.5 0t-9.5-9l-24-57q-16 3-29 3q-12 0-28-3l-24 57q-2 6-8.5 9t-13.5 0l-30-13q-7-2-9.5-8.5t-.5-13.5l24-56q-24-17-41-41l-57 24q-6 2-12.5-.5t-9.5-8.5l-12-31q-3-7-.5-13.5t9.5-8.5l56-24q-3-16-3-29q0-12 3-29l-57-23q-6-3-8.5-9t-.5-13l13-31q3-6 9-9t13 0l57 23q16-24 40-40l-23-57q-3-7-.5-13t9.5-9l31-13q6-3 12.5 0t9.5 9l23 57q16-3 29-3t29 3l23-57q3-7 9.5-9.5t12.5.5l31 13q7 2 9.5 8.5t-.5 12.5l-23 57q24 17 41 41l56-24q7-2 13.5.5t8.5 8.5l13 31q3 7 .5 13.5t-9.5 8.5l-57 24q3 16 3 29t-3 29l57 23q7 3 9.5 9t-.5 13m-222.5-170q-39.5 0-68 28t-28.5 68t28.5 68t68 28t67.5-28t28-68t-28-68t-67.5-28"></svg:path>`,
})
export class WhhGearsaltIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGenderIcon],svg[whh-gender-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1009 512L864 961q-14 26-40 44.5t-58 19.5q-28-1-56-20.5T672 961L527 512q-23-58-9.5-93t49.5-35h402q36 0 49.5 35t-9.5 93m-246 513h6zM576 192q0-80 56.5-136t136-56T904 56t56 136t-56 136t-135.5 56t-136-56T576 192m-119 833H54q-35 0-48.5-35t8.5-93l176-525q-56-21-91.5-70T63 192q0-80 56.5-136t136-56t136 56T448 192q0 62-36.5 111.5T318 373l179 524q23 58 9 93t-49 35"></svg:path>`,
})
export class WhhGenderIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGhostIcon],svg[whh-ghost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M854 1011q-9 13-21.5 13t-21.5-13l-95-115h-23l-95 115q-9 13-21.5 13t-21.5-13l-95-115h-23l-95 115q-9 13-21.5 13t-21.5-13l-95-115h-23l-95 115q-9 13-21.5 13T43 1011L0 959V448q0-91 35.5-174T131 131t143-95.5T448 0t174 35.5T765 131t95.5 143T896 448v512zM448 320q0-27-18.5-45.5T384 256H192q-26 0-45 18.5T128 320v192q0 26 19 45t45 19h192q27 0 45.5-19t18.5-45zm384 0q0-27-18.5-45.5T768 256H576q-26 0-45 18.5T512 320v192q0 26 19 45t45 19h192q27 0 45.5-19t18.5-45zm-96 192h-64q-13 0-22.5-9.5T640 480v-64q0-13 9.5-22.5T672 384h64q13 0 22.5 9.5T768 416v64q0 13-9.5 22.5T736 512m-384 0h-64q-13 0-22.5-9.5T256 480v-64q0-13 9.5-22.5T288 384h64q13 0 22.5 9.5T384 416v64q0 13-9.5 22.5T352 512"></svg:path>`,
})
export class WhhGhostIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGiftIcon],svg[whh-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 448H576V320h416q13 0 22.5 9t9.5 23v64q0 13-9.5 22.5T992 448M640 256H320q-53 0-90.5-37.5T192 128t37.5-90.5T320 0q54 0 80.5 13.5t33.5 40t9.5 56T462 180t50 76v-43.5l1-40.5l3.5-40l6.5-35.5l10.5-33l16-25.5L572 17l30-12l38-5q53 0 90.5 37.5T768 128t-37.5 90.5T640 256M319.5 64q-26.5 0-45 18.5t-18.5 45t18.5 45.5t45 19t45.5-19t19-45.5t-19-45T319.5 64m320 0q-26.5 0-45 18.5t-18.5 45t19 45.5t45 19t45-19t19-45.5t-19-45T639.5 64M448 448H32q-13 0-22.5-9.5T0 416v-64q0-14 9.5-23t22.5-9h416zm0 576H128q-27 0-45.5-19T64 960V512h384zm512-512v448q0 26-18.5 45t-45.5 19H576V512z"></svg:path>`,
})
export class WhhGiftIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGithubIcon],svg[whh-github-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 416q0 111-26 187t-86 128.5T754 808t-242 24t-242-24t-158-76.5T26 603T0 416q0-149 78-231Q64 83 64 32q0-13 9.5-22.5T96 0q12 0 84 33t98 52q98-21 234-21q118 0 209 16q31-20 97.5-50T896 0q13 0 22.5 9.5T928 32q0 35-10 127q106 83 106 257M512 256q-20 0-58-1q-46-2-88 .5t-78.5 7.5t-66 22t-50 44t-32 73T128 512q0 122 97.5 189T512 768t286.5-67T896 512q0-64-11.5-110t-32-73t-50-44t-66-22t-78.5-7.5t-88-.5q-38 1-58 1m192 320q-27 0-45.5-28T640 480t19-68t45-28t45 28t19 68t-18.5 68t-45.5 28M544 704h-64q-13 0-22.5-9.5T448 672t9.5-22.5T480 640h64q13 0 22.5 9.5T576 672t-9.5 22.5T544 704M320.5 576q-26.5 0-45.5-28t-19-68t19-68t45.5-28t45 28t18.5 68t-18.5 68t-45 28"></svg:path>`,
})
export class WhhGithubIcon {
  readonly viewBox = input("0 0 1024 832")
  readonly width = input("1.24em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGlassIcon],svg[whh-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576.914 575v320h128q27 0 45.5 19t18.5 45.5t-18.5 45t-45.5 18.5h-384q-26 0-45-18.5t-19-45t19-45.5t45-19h128V575l-439-479q-9-16-9-32q0-27 19-45.5t45-18.5h896q26 0 45 18.5t19 45.5q0 16-9 32zm-512-511l239 255h87l7-13l-73-131q-6-12-2.5-24.5t15-19t24-3t19.5 14.5l66 119q18-7 34-7q31 0 55.5 18t34.5 46h151l239-255z"></svg:path>`,
})
export class WhhGlassIcon {
  readonly viewBox = input("0 0 1025 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGlassesIcon],svg[whh-glasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1025 513q0 70-14.5 115.5T965 697t-68.5 31.5T801 737t-95.5-8.5T637 697t-45.5-68.5T577 513q0-26-18.5-45t-45-19t-45.5 19t-19 45q0 70-14.5 115.5T389 697t-68.5 31.5T225 737t-95.5-8.5T61 697t-45.5-68.5T1 513q0-57 8-89q-16-28-1-55L225 27q11-19 31.5-24.5t39 5.5t24 32.5T314 81L158 326q42-5 99-5q75 0 114.5 11t56.5 37q51 16 85 16t85-16q17-26 56.5-37T769 321q57 0 99 5L712 81q-11-19-5.5-40.5t24-32.5t39-5.5T801 27l217 342q15 27-1 55q8 32 8 89M248 385q-60 0-96 6.5t-55.5 24t-25.5 40t-6 62.5q0 49 10.5 80t32.5 47.5t49 22t68 5.5t68-5.5t49.5-22T375 598t10-80v-28l-1-23.5l-2.5-21l-5-16.5l-8.5-14.5l-12.5-11L338 395l-23-5l-29.5-4zm530 0q-21 0-37 1t-29.5 4t-23.5 5t-17.5 8.5t-12.5 11t-8.5 15t-5 16.5t-2.5 20.5t-1 23.5v28q0 49 10.5 80t32.5 47.5t49 22t68 5.5t68-5.5t49.5-22T951 598t10-80q0-40-6-62.5t-25.5-40t-55.5-24t-96-6.5m-9 128q-30 0-47-9t-17-23t17-23t47-9q96 0 96 32t-96 32m-576 0q-30 0-47-9t-17-23t17-23t47-9q96 0 96 32t-96 32"></svg:path>`,
})
export class WhhGlassesIcon {
  readonly viewBox = input("0 0 1026 737")
  readonly width = input("1.4em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGlassesaltIcon],svg[whh-glassesalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1025 528q0 76-14.5 124.5T965 726t-68.5 34t-95.5 9t-95.5-9t-68.5-34t-45.5-73.5T577 528v-15q0-26-19-45t-45-19t-45 19t-19 45v15q0 76-14.5 124.5T389 726t-68.5 34t-95.5 9t-95.5-9T61 726t-45.5-73.5T1 528q0-65 10-101q-20-28-3-58L225 27q11-19 31.5-24.5t39 5.5t24 32.5T314 81L158 326q42-5 99-5q72 0 111 11t57 35q53 18 88 18t88-18q18-24 57-35t111-11q57 0 99 5L712 81q-11-19-5.5-40.5t24-32.5t39-5.5T801 27l217 342q17 30-3 58q10 36 10 101M225 705q56 0 90-13.5t52-50.5H83q18 37 52 50.5t90 13.5m23-320q-81 0-120 14.5T76 449h304q-7-35-35.5-49.5T248 385m137 128H65v20q0 23 2 44h316q2-21 2-44zm416 192q56 0 90-13.5t52-50.5H659q18 37 52 50.5t90 13.5m-23-320q-68 0-96.5 14.5T645 449h305q-13-35-52-49.5T778 385m183 128H641v20q0 23 2 44h316q2-21 2-44z"></svg:path>`,
})
export class WhhGlassesaltIcon {
  readonly viewBox = input("0 0 1026 769")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGlobeIcon],svg[whh-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m364-622q1 2 3.5 6.5t3.5 7.5q0-1-1.5-7.5T879 398zM491 129q1 0 1.5.5t1.5.5v38h-26q-16-3-23-4q2-5 5.5-15.5T456 133q-133 19-225 118h14l24 21l24 21v22q-22 9-65 27t-63 26q-3 23-10 69.5T144 507q58 63 59 64q-3 2-9 5.5t-7 4.5h-52q24 136 130.5 225.5T512 896q65 0 129-23q-51-3-140-8q-14-21-42.5-64T416 737q11-21 33-63.5t33-64.5q1 0 3.5-3t4.5-5q54-48 85-75q22 4 89-7.5t89-7.5q4 1 4 18.5t3.5 34T776 579q71-7 113 5q7-37 7-72q0-30-6-64q-71-61-107-92h-37q-1 8-4 23q40 28 71 49l-24.5 24.5L764 477q-8-14-31-51.5T698 368q-7 2-21 5.5t-20 5.5q-3 2-9.5 6t-9.5 5q2 12 6 34.5t5 29.5q-4 6-12.5 16t-9.5 11q-33-15-107-49l-4-12v-33q14-4 41-11.5t41-11.5q-2-3-41-87q8-12 15-22q4-1 54-5t75-7v-49q12-3 15-4q1 6 2 17.5t2 16.5q29-1 43-2q-32-28-67-47q-32 3-39 4l-4-4q3-10 5-18q-48-20-101-26q3 14 9.5 39.5T575 206q-17 6-22 7q5 3 7 4q-1 0-13.5 1.5T527 221q3-18 9.5-52.5T544 130q-20-2-32-2q-3 0-21 1"></svg:path>`,
})
export class WhhGlobeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGlobealtIcon],svg[whh-globealt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M746 746Q623 868 450 891v69h96q13 0 22.5 9.5T578 992t-9.5 22.5t-22.5 9.5H226q-13 0-22.5-9.5T194 992t9.5-22.5T226 960h96v-69Q147 870 23 746L0 723l92-92Q3 524 3 385q0-104 51-192.5t139.5-140T386 1q139 0 246 90l91-91l23 23q98 98 133 229.5t0 263T746 746M722 91q-13 14-45 45q92 108 92 249q0 104-51 192.5T578.5 717T386 768q-141 0-249-92q-8 8-45 46q86 75 196.5 99.5t220-7t192-114t114-192t7-220T722 91"></svg:path>`,
})
export class WhhGlobealtIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGlueIcon],svg[whh-glue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 928q-3 36-32.5 66t-63.5 30H160q-34 0-63.5-30T64 928L0 512q0-49 28-88.5T96 384h57q-25-47-25-64q0-14 37-33t91-36q2-40 18.5-97.5t47-105.5T384 0t62.5 48t47 105.5T512 251q54 17 91 36t37 33q0 17-25 64h57q40 0 68 39.5t28 88.5z"></svg:path>`,
})
export class WhhGlueIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGmailIcon],svg[whh-gmail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.585 768h-896q-26 0-45-19t-19-45V64q0-27 18.5-45.5T64.585 0h896q27 0 45.5 18.5t18.5 45.5v640q0 26-18.5 45t-45.5 19m0-672q0-13-9.5-22.5t-22.5-9.5h-64q-20 0-31.5 1.5t-30 11t-37.5 28.5l-253 253l-253-253q-19-19-37.5-28.5t-29.5-11t-32-1.5h-64q-13 0-22.5 9.5t-9.5 22.5v576q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5v-33l211-210l74 74q15 15 35 7q20 8 35-7l74-74l211 210v33q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm-128 453l-166-166l166-165zm-640-331l166 165l-166 166z"></svg:path>`,
})
export class WhhGmailIcon {
  readonly viewBox = input("0 0 1025 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGolfIcon],svg[whh-golf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-30T68.5 912.5T0 800t69.5-112.5T256 606v194q0 40 28 68t68 28t68-28t28-68V578q37-2 64-2q139 0 257 30t186.5 81.5T1024 800t-68.5 112.5T769 994t-257 30m128-256q-27 0-45.5 19T576 832.5t18.5 45t45 18.5t45.5-18.5t19-45.5t-18.5-45.5T640 768m99-544L477 384q-12 0-20.5-9.5T448 352V32q0-13 8.5-22.5T477 0l262 160q1 1 5 3t5.5 3t5 3t4.5 3.5t3.5 4t3.5 4.5t1.5 5t.5 6q0 12-7 18t-22 14M352 832q-13 0-22.5-9.5T320 800V32q0-13 9.5-22.5T352 0t22.5 9.5T384 32v768q0 13-9.5 22.5T352 832"></svg:path>`,
})
export class WhhGolfIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGoogleIcon],svg[whh-google-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-384-896q-95 0-159.5 56t-64.5 136t61 136t147 56q5 0 16-1v1q0 18 3.5 31t8 19t9 9.5t8.5 4.5h3h-64q-48 0-100 21t-88 59t-36 80q0 77 59.5 118.5t196.5 41.5q100 0 146-44t46-116q0-29-13-56.5t-32-47t-38-36.5t-32-30.5t-13-21.5q0-28 7-50q54-23 87.5-70t33.5-104q0-74-47-128h47l64-64zm0 320q-44 0-78.5-36.5t-46.5-91.5q-11-52 18-90t75-38q44 0 78.5 36.5t46.5 91.5q11 52-18 90t-75 38m128 288q0 40-42 68t-102 28t-102-28t-42-68q0-39 59-67.5t133-28.5q28 0 62 29.5t34 66.5"></svg:path>`,
})
export class WhhGoogleIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGoogledriveIcon],svg[whh-googledrive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m376 13l8-13h256l346 576H701zM143 845L0 640L335 81l123 213zm199-205h682L846 896H194z"></svg:path>`,
})
export class WhhGoogledriveIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGoogleglassIcon],svg[whh-googleglass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m704 1024l-63-84q-87 20-193 20q-122 0-225-34.5t-163-93T0 704q0-114 31.5-258T117 170l50 18q-48 118-75.5 248T64 668q0 46 20 84t55.5 64t80.5 43t100 27v-22q0-13 9.5-22.5T352 832t22.5 9.5T384 864v29q34 3 64 3q32 0 64-2v-30q0-13 9.5-22.5T544 832t22.5 9.5T576 864v22q65-10 118-29q73-38 105.5-81T832 668q0-87-20.5-197T754 254q-21-5-44.5-29.5T668 163q-7-14-12-25t-10.5-28.5T639 79t3-28t14.5-25T687 8.5T736 0q78 160 119 390.5T896 868q0 21-12.5 47t-35 51t-61 41.5T704 1024"></svg:path>`,
})
export class WhhGoogleglassIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGoogleplusIcon],svg[whh-googleplus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-416q64-68 64-160q0-111-76-181q-13-12-29.5-25t-35.5-27t-27-20v-1q-24-13-24-66q0-14 21.5-33t42.5-31q24-13 44-57.5t20-102.5q0-56-18.5-108.5t-54.5-83.5h73l64-64h-314q-156 0-230 78v-14q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m32-768h-96v-96q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v96h-96q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h96v96q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5v-96h96q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m-736-128q78 0 135 56.5t57 135.5q0 76-45.5 118t-114.5 42q-65 0-112.5-56.5T64.428 288q0-67 40.5-113.5t87.5-46.5m0 416v32q0 22 8 46t16 37l8 13q-134 0-224 52V481q67 61 192 63m-192 297q22-55 93.5-80t162.5-25q42 0 85.5 19.5t75 57.5t31.5 83q0 38-22.5 71.5t-60.5 56.5h-237q-53 0-90.5-37.5T.428 896z"></svg:path>`,
})
export class WhhGoogleplusIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGoogleplusoldIcon],svg[whh-googleplusold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-288q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h288V608q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v288q0 53-37.5 90.5t-90.5 37.5m96-576h-64q-13 0-22.5-9.5t-9.5-22.5V128h-288q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h288q53 0 90.5 37.5t37.5 90.5v288q0 13-9.5 22.5t-22.5 9.5m-416 0h160q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-160v160q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5V576h-160q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h160V288q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zm-160-320h-288v288q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5T.428 416V128q0-53 37.5-90.5t90.5-37.5h288q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-384 448h64q13 0 22.5 9.5t9.5 22.5v288h288q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-288q-53 0-90.5-37.5T.428 896V608q0-13 9.5-22.5t22.5-9.5"></svg:path>`,
})
export class WhhGoogleplusoldIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGooglewalletIcon],svg[whh-googlewallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 1024q-53 0-90.5-37.5T704 896q-9-81-40.5-169T576 576q-5 76-21.5 155.5T512 864q-24 48-58 72t-70 24q-53 0-90.5-37.5T256 832q0-60-30-132.5t-71-126T81 503q-36-15-58.5-47T0 384q0-51 31.5-89.5T96 256q35 0 74 15.5t65 43.5q14 15 30 37.5t44 64.5t43 64q0-87-8-148t-16-93t-8-48q0-53 37.5-90.5T448 64q38 0 68.5 20t46.5 53q67 69 202 282q-7-122-31-210q-30-36-30-81q0-53 37.5-90.5T832 0q33 0 55.5 16.5T928 64q4 7 10.5 20t23 57t29 92.5t23 124.5t10.5 154q0 144-18.5 249.5T960 928q-43 96-128 96"></svg:path>`,
})
export class WhhGooglewalletIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGpsaltIcon],svg[whh-gpsalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 576q-27 0-45.5-18.5T896 512q0-104-51.5-192.5t-140-140T512 128q-26 0-45-18.5t-19-45T467 19t45-19q104 0 199 40.5t163.5 109t109 163.5t40.5 199q0 27-18.5 45.5T960 576m-191.5 0q-26.5 0-45.5-18.5T704 512q0-80-56-136t-136-56q-26 0-45-18.5t-19-45t19-45.5t45-19q87 0 160.5 43T789 351.5T832 512q0 27-18.5 45.5t-45 18.5M640 512q0 66-54 104l227 228q19 18 19 44.5T813 934q-34 35-99 56t-121 27.5t-113 6.5q-55 0-112-10t-125-40.5T128 896T51 781T10.5 655.5T0 544q0-58 6-114t27.5-120.5T90 210q19-19 45.5-19t44.5 19l228 228q38-54 104-54q53 0 90.5 37.5T640 512"></svg:path>`,
})
export class WhhGpsaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGpsoffIcon],svg[whh-gpsoff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 576h-70q-20 120-106.5 207T576 890v70q0 26-18.5 45t-45 19t-45.5-19t-19-45v-70q-121-20-207.5-107T134 576H64q-26 0-45-18.5T0 512t19-45.5T64 448h70q20-120 106.5-207T448 134V64q0-26 19-45t45.5-19t45 19T576 64v70q121 20 207.5 107T890 448h70q26 0 45 18.5t19 45.5t-19 45.5t-45 18.5M512 256q-106 0-181 75t-75 181t75 181t181 75t181-75t75-181t-75-181t-181-75"></svg:path>`,
})
export class WhhGpsoffIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGpsonIcon],svg[whh-gpson-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 576h-70q-20 120-106.5 207T576 890v70q0 26-18.5 45t-45.5 19t-45.5-19t-18.5-45v-70q-121-20-207.5-107T134 576H64q-26 0-45-18.5T0 512t18.5-45.5T64 448h70q20-120 106.5-207T448 134V64q0-26 19-45t45.5-19t45 19T576 64v70q121 20 207.5 107T890 448h70q26 0 45 18.5t19 45.5t-18.5 45.5T960 576M512 256q-106 0-181 75t-75 181t75 181t181 75t181-75t75-181t-75-181t-181-75m.5 448q-79.5 0-136-56T320 512.5t56.5-136t136-56.5T648 376.5t56 136T648 648t-135.5 56"></svg:path>`,
})
export class WhhGpsonIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGradientIcon],svg[whh-gradient-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-192-256h-64v-64h64v-64h-64v-64h64v-64h-64v-64h64v-64h-64v-64h64v-64h-64v-64h64v-64h-64v64h-64v-64h-64v64h-64v-64h-288q-13 0-22.5 9.5t-9.5 22.5v704q0 13 9.5 22.5t22.5 9.5h224v-64h64v64h64v-64h64v64h64v-64h64zm-128 64v-64h64v64zm0-192h64v64h-64zm0-128h64v64h-64zm0-128h64v64h-64zm0-128h64v64h-64zm-64 0v-64h64v64zm-128 0v-64h64v64zm128 512v64h-64v-64zm0-64h64v64h-64zm0-128h64v64h-64zm0-128h64v64h-64zm0-128h64v64h-64zm-64 0v-64h64v64zm64 128h-64v-64h64zm0 128h-64v-64h64zm0 128h-64v-64h64zm-128 64v-64h64v64zm0-128v-64h64v64zm0-128v-64h64v64zm0-128v-64h64v64z"></svg:path>`,
})
export class WhhGradientIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGrailsIcon],svg[whh-grails-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5M202 384H64q0 60 37 116t91 71v135q-28 3-46 11.5T128 736q0 13 28 22.5t68 9.5t68-9.5t28-22.5q0-10-18-18.5T256 706V571q37-10 69-44q-94-54-123-143m54-64q0 66 54 117.5T448 505v272q-29 8-46.5 23T384 832q0 26 37.5 45t90.5 19t90.5-19t37.5-45q0-17-17.5-32T576 777V505q84-16 138-67.5T768 320zm566 64q-29 89-123 143q32 34 69 44v135q-28 3-46 11.5T704 736q0 13 28 22.5t68 9.5t68-9.5t28-22.5q0-10-18-18.5T832 706V571q54-15 91-71t37-116z"></svg:path>`,
})
export class WhhGrailsIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGramophoneIcon],svg[whh-gramophone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 192h-32v416q0 1-.5 3t-.5 2.5v4.5l-56 253q-2 7-7 12v45q0 13-9.5 22.5T864 960h-64q-13 0-22.5-9.5T768 928v-64q0-15 82-85l46-203V192h-32q-13 0-22.5-9.5T832 160V32q0-13 9.5-22.5T864 0h128q13 0 22.5 9.5T1024 32v128q0 13-9.5 22.5T992 192M416 960q-113 0-209-55.5T55.5 753T0 544t55.5-209T207 183.5T416 128t209 55.5T776.5 335T832 544t-55.5 209T625 904.5T416 960m0-576q-66 0-113 47t-47 113t47 113t113 47t113-47t47-113t-47-113t-113-47m0 192q-13 0-22.5-9.5T384 544t9.5-22.5T416 512t22.5 9.5T448 544t-9.5 22.5T416 576"></svg:path>`,
})
export class WhhGramophoneIcon {
  readonly viewBox = input("0 0 1024 960")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGrapesIcon],svg[whh-grapes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 192q-4-1-11-1.5t-27 0t-39.5 4.5t-44 16.5T826 244L697 374q-10 9-24 9t-24-9.5t-10-23.5t10-24q28-27 66-65q-11-22-11-69q0-22 9.5-40.5t21-29t22-26T768 64q0-5-7-18.5t-15.5-28T736 0q40 0 84 41t44 87q0 6-3 21q30-10 62.5-15.5T974 128h18q14 0 23 8.5t9 23.5q0 16-9 24t-23 8M512 448q-53 0-90.5-37.5T384 320t37.5-90.5T512 192t90.5 37.5T640 320t-37.5 90.5T512 448m-256 64q-53 0-90.5-37.5T128 384t37.5-90.5T256 256t90.5 37.5T384 384t-37.5 90.5T256 512m64 128q0 53-37.5 90.5T192 768t-90.5-37.5T64 640t37.5-90.5T192 512t90.5 37.5T320 640m-64 256q0 53-37.5 90.5T128 1024t-90.5-37.5T0 896t37.5-90.5T128 768t90.5 37.5T256 896m128-192q53 0 90.5 37.5T512 832t-37.5 90.5T384 960t-90.5-37.5T256 832t37.5-90.5T384 704m256-64q53 0 90.5 37.5T768 768t-37.5 90.5T640 896t-90.5-37.5T512 768t37.5-90.5T640 640m-192 64q-53 0-90.5-37.5T320 576t37.5-90.5T448 448t90.5 37.5T576 576t-37.5 90.5T448 704m128-192q0-53 37.5-90.5T704 384t90.5 37.5T832 512t-37.5 90.5T704 640t-90.5-37.5T576 512"></svg:path>`,
})
export class WhhGrapesIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGraphicscardIcon],svg[whh-graphicscard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M991.998 896h-32v96q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5v-96h-64v96q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5v-96h-64v96q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5v-96h-64v96q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5v-96h-64v96q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5v-96h-64v96q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5v-96h-64V192h800q13 0 22.5 9.5t9.5 22.5v640q0 13-9.5 22.5t-22.5 9.5m-32-576q0-26-18.5-45t-45.5-19h-448q-26 0-45 19t-19 45v384q0 27 19 45.5t45 18.5h448q27 0 45.5-18.5t18.5-45.5zm-96 384h-384q-13 0-22.5-9.5t-9.5-22.5V352q0-13 9.5-22.5t22.5-9.5h384q13 0 22.5 9.5t9.5 22.5v320q0 13-9.5 22.5t-22.5 9.5m-160-320q-53 0-90.5 37.5t-37.5 90.5t37.5 90.5t90.5 37.5t90.5-37.5t37.5-90.5t-37.5-90.5t-90.5-37.5m.5 192q-26.5 0-45.5-18.5t-19-45t19-45.5t45.5-19t45 18.5t18.5 45.5t-18.5 45.5t-45 18.5m-576.5 320v96q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5V64h-32q-13 0-22.5-9.5T-.002 32t9.5-22.5t22.5-9.5h64q4 0 6 1q11 2 18.5 10.5t7.5 20.5z"></svg:path>`,
})
export class WhhGraphicscardIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGraveIcon],svg[whh-grave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 1024H0q0-66 108.5-118T384 838V512H160q-13 0-22.5-9.5T128 480V288q0-13 9.5-22.5T160 256h224V32q0-13 9.5-22.5T416 0h192q13 0 22.5 9.5T640 32v224h224q13 0 22.5 9.5T896 288v192q0 13-9.5 22.5T864 512H640v326q167 16 275.5 68t108.5 118"></svg:path>`,
})
export class WhhGraveIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGravefourIcon],svg[whh-gravefour-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 1024H0q0-47 56.5-87.5T210 869l-82-549q0-30 82.5-109T387 66T512 0t125 66t176.5 145T896 320l-82 549q97 27 153.5 67.5t56.5 87.5"></svg:path>`,
})
export class WhhGravefourIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGravethreeIcon],svg[whh-gravethree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 1024H0q0-45 51.5-84T192 874V320q0-87 43-160.5T351.5 43T512 0t160.5 43T789 159.5T832 320v554q89 27 140.5 66t51.5 84"></svg:path>`,
})
export class WhhGravethreeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGravetwoIcon],svg[whh-gravetwo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 1024H0q0-60 90-108.5T325 845l109-378l-274 109q-13 0-22.5-9.5T128 544V224q0-13 9.5-22.5T160 192l267 107L320 32q0-13 9.5-22.5T352 0h320q13 0 22.5 9.5T704 32L597 299l267-107q13 0 22.5 9.5T896 224v320q0 13-9.5 22.5T864 576L590 467l109 378q145 22 235 70.5t90 108.5"></svg:path>`,
})
export class WhhGravetwoIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGreekcolumnIcon],svg[whh-greekcolumn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 256q-53 0-90.5-37.5t-37.5-90.5h-512q0 53-37.5 90.5t-90.5 37.5t-90.5-37.5T.428 128t37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5m-608 448q-13 0-22.5-9.5t-9.5-22.5V224q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v448q0 13-9.5 22.5t-22.5 9.5zm192 0q-13 0-22.5-9.5t-9.5-22.5V224q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v448q0 13-9.5 22.5t-22.5 9.5zm192 0q-13 0-22.5-9.5t-9.5-22.5V224q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v448q0 13-9.5 22.5t-22.5 9.5zm-416 64h512q0 36 13 64t32 43t38 25.5t32 17t13 10.5v64q0 13-9.5 22.5t-22.5 9.5h-704q-13 0-22.5-9.5t-9.5-22.5v-64q0-4 13-10.5t32-17t38-25.5t32-43t13-64"></svg:path>`,
})
export class WhhGreekcolumnIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGreenhostingIcon],svg[whh-greenhosting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M324.808 450q55 31 156 76.5t186.5 88t140.5 82.5q159 117 217 199l-128 128q-64-128-138-216q-186 153-394 38q-77-42-135-91.5t-96.5-94t-64.5-112t-39.5-114.5t-20-134.5t-7.5-139.5t-1-160q46 51 109 81t128 40.5t135.5 16t139 16t131.5 32t120 72.5t98 129q35 69 35 157q0 57-19 108q-80-48-210.5-112t-241-120t-169.5-100q-54-40-108-111q-15-19-18-12q-2 7-2 59q0 31 51 79t145 115"></svg:path>`,
})
export class WhhGreenhostingIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGreenlanternIcon],svg[whh-greenlantern-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M590 128q107 49 174.5 156T832 512t-67.5 228T590 896h242l64 128H0l64-128h242q-107-49-174.5-156T64 512t67.5-228T306 128H64L0 0h896l-64 128zM192 512q0 106 75 181t181 75t181-75t75-181t-75-181t-181-75t-181 75t-75 181"></svg:path>`,
})
export class WhhGreenlanternIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGreenlightbulbIcon],svg[whh-greenlightbulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M719 391L147 639q-26 8-49.5-6.5T67 591t6.5-51.5T113 507l572-248q27-7 50 7t30.5 41.5t-6.5 52t-40 31.5m-64-192L83 447q-26 8-49.5-6.5T3 399t6.5-51.5T49 316L621 67q27-7 50 7t30.5 41.5t-6.5 52t-40 31.5m-352-64l-156 56q-26 8-49.5-6T67 143.5t6.5-52T113 60L270 3q26-7 49.5 7T350 51.5t-6.5 52T303 135m-21 513q10-9 23-13l316-120q27-7 50 7t30.5 41.5t-6.5 52t-40 31.5L385 750q-1 13-1 19h64q27 0 45.5 19t18.5 45.5t-18.5 45T448 897H320q-6 0-12-1q-49-5-82.5-41.5T192 769q0-42 25-75.5t65-45.5m102 377q-53 0-90.5-18.5T256 961h256q0 27-37.5 45.5T384 1025"></svg:path>`,
})
export class WhhGreenlightbulbIcon {
  readonly viewBox = input("0 0 769 1025")
  readonly width = input("0.76em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGridIcon],svg[whh-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.356 1024h-128q-26 0-45-19t-19-45V832q0-26 19-45t45-19h128q26 0 45 19t19 45v128q0 27-18.5 45.5t-45.5 18.5m0-384h-128q-26 0-45-18.5t-19-45.5V448q0-27 19-45.5t45-18.5h128q26 0 45 18.5t19 45.5v128q0 27-18.5 45.5t-45.5 18.5m0-384h-128q-26 0-45-19t-19-45V64q0-27 19-45.5t45-18.5h128q26 0 45 18.5t19 45.5v128q0 26-18.5 45t-45.5 19m-384 768h-128q-27 0-45.5-19t-18.5-45V832q0-26 19-45t45-19h128q27 0 45.5 19t18.5 45v128q0 27-18.5 45.5t-45.5 18.5m0-384h-128q-27 0-45.5-18.5t-18.5-45.5V448q0-27 19-45.5t45-18.5h128q27 0 45.5 18.5t18.5 45.5v128q0 27-18.5 45.5t-45.5 18.5m0-384h-128q-27 0-45.5-19t-18.5-45V64q0-27 19-45.5t45-18.5h128q27 0 45.5 18.5t18.5 45.5v128q0 26-18.5 45t-45.5 19m-384 768h-128q-26 0-45-19t-19-45V832q0-26 19-45t45-19h128q26 0 45 19t19 45v128q0 27-18.5 45.5t-45.5 18.5m0-384h-128q-26 0-45-18.5t-19-45.5V448q0-27 19-45.5t45-18.5h128q26 0 45 18.5t19 45.5v128q0 27-18.5 45.5t-45.5 18.5m0-384h-128q-26 0-45-19t-19-45V64q0-27 19-45.5t45-18.5h128q26 0 45 18.5t19 45.5v128q0 26-18.5 45t-45.5 19"></svg:path>`,
})
export class WhhGridIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGroovesharkIcon],svg[whh-grooveshark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m0-896q-70 0-140.5 33.5T248 248t-86.5 123.5T128 512q0 36 7.5 62t16.5 38.5t25 19t24.5 7.5t22.5 1q35 0 67.5-36t60.5-92q14-28 22-92t9-114l1-50q14 7 39 21.5t92.5 64T640 448q22 22 60.5 75t70 85t58.5 32q14 0 21-1t17.5-7.5t15.5-19t9-38t4-62.5q0-70-33.5-140.5T776 248t-123.5-86.5T512 128"></svg:path>`,
})
export class WhhGroovesharkIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGuitarIcon],svg[whh-guitar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M932.408 932q-85 85-199 91.5t-189-68.5q-26-27-41-46.5t-23-44.5q0-25-13-57.5t-37-57.5q-30-30-62.5-44.5t-55.5-10.5q-49-57-53.5-144.5t38.5-156.5l-141-141q-40 12-69-16l-67-67q-20-21-20-50t20-49l50-49q20-21 49-21t50 21l67 66q28 29 16 69l141 141q69-43 156.5-38.5t144.5 53.5q-4 23 10.5 55.5t44.5 62.5q25 24 57.5 37t57.5 13q25 8 44.5 23t46.5 41q75 75 68.5 189t-91.5 199m-388-484q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m314 256l-154 154l38 38l154-154z"></svg:path>`,
})
export class WhhGuitarIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhGunIcon],svg[whh-gun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 128q-7 0-19-2l-47 47q31 19 66 19q1 0 3-.5l2-.5l59 545q1 13-7 22.5t-21 9.5H807q-13 0-23-9.5T773 736l-24-224H608q-70 0-115-50t-45-142H96q-13 0-22.5-9.5T64 288v-32H32q-13 0-22.5-9.5T0 224V96q0-13 9.5-22.5T32 64h32V32q0-13 9.5-22.5T96 0t22.5 9.5T128 32v32h704q0 35 19 66l56-57q14-13 32-7q13-2 21-2q27 0 45.5 9.5T1024 96t-18.5 22.5T960 128M728 320h-24q0 38-17 71.5T640 447V320H518q-6 16-6 32q0 40 28 68t68 28h134z"></svg:path>`,
})
export class WhhGunIcon {
  readonly viewBox = input("0 0 1025 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHIcon],svg[whh-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704.5 1024q-26.5 0-45-18.5T641 960V608q0-13-9.5-22.5T609 576H160q-13 0-22.5 9.5T128 608v352q0 27-18.5 45.5T64 1024t-45.5-18.5T0 960V64q0-26 18.5-45T64 0t45.5 19T128 64v352q0 13 9.5 22.5T160 448h449q13 0 22.5-9.5T641 416V64q0-26 18.5-45t45-19T750 18.5T769 64v896q0 27-19 45.5t-45.5 18.5"></svg:path>`,
})
export class WhhHIcon {
  readonly viewBox = input("0 0 769 1024")
  readonly width = input("0.76em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHUpperCaseIcon],svg[whh-h-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704.5 1024q-26.5 0-45-18.5T641 960V608q0-13-9.5-22.5T609 576H160q-13 0-22.5 9.5T128 608v352q0 27-18.5 45.5T64 1024t-45.5-18.5T0 960V64q0-26 18.5-45T64 0t45.5 19T128 64v352q0 13 9.5 22.5T160 448h449q13 0 22.5-9.5T641 416V64q0-26 18.5-45t45-19T750 18.5T769 64v896q0 27-19 45.5t-45.5 18.5"></svg:path>`,
})
export class WhhHUpperCaseIcon {
  readonly viewBox = input("0 0 769 1024")
  readonly width = input("0.76em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHalflifeIcon],svg[whh-halflife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-896q-104 0-192.5 51.5t-140 140T128 512t51.5 192.5t140 140T512 896t192.5-51.5t140-140T896 512t-51.5-192.5t-140-140T512 128m96 640l-93-298l-163 298h-96l228-398l-16-50h-84v-64h160l143 400l81-16l32 64z"></svg:path>`,
})
export class WhhHalflifeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHalfstarIcon],svg[whh-halfstar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M900 565q-46 46-88 78q7 36 12 71q8 68 9 113.5t-7.5 77T800 949t-48 11.5t-71.5-16.5t-99.5-44q-35-18-69-39q-32 20-69 39q-59 29-99.5 44T272 960.5T224 949t-25.5-44.5t-7.5-77t9-113.5q5-35 12-71q-43-32-88-78q-48-48-76.5-83.5T7.5 416T3 365t35-39t72.5-30.5T225 270q49-8 91-12q17-42 42-87q32-59 57-95.5t50-56T512 0t47 19.5t50 56t57 95.5q25 46 42 87q42 4 91 12q70 13 114.5 25.5T986 326t35 39t-4.5 51t-40 65.5T900 565M750 390q-68-6-117-5q-10-43-33-97q-27-66-48-97t-40-31v578q27 19 73 45l15 9q21 12 30.5 17.5t24 12T674 831t13.5 2t10-2.5T702 820t2.5-15.5t-1-25t-2-31T697 708q-2-13-2-19q-9-79-27-122q35-11 106-48q30-17 49.5-28t38-23t25-19.5t9-16t-6.5-14t-26.5-11T817 398t-67-8"></svg:path>`,
})
export class WhhHalfstarIcon {
  readonly viewBox = input("0 0 1024 961")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHaloIcon],svg[whh-halo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M570 384h38q13 0 22.5 9.5T640 416t-9.5 22.5T608 448h-38q-10 28-34.5 46T480 512q-40 0-68-28t-28-68t28-68t68-28q31 0 55.5 18t34.5 46m422 64h-34q-9 101-71.5 186.5T725 772t-213 59v33q0 13-9.5 22.5T480 896t-22.5-9.5T448 864v-98q-106-8-192-59v-76q97 73 224 73q74 0 137-15.5t111.5-46t76-80.5T832 448q0-87-47-160.5T657 171t-177-43t-177 43t-128 116.5T128 448H32q-13 0-22.5-9.5T0 416t9.5-22.5T32 384h38q18-98 85-175.5T320 94V41Q412 0 512 0q116 0 215.5 51t161 139T958 384h34q13 0 22.5 9.5t9.5 22.5t-9.5 22.5T992 448"></svg:path>`,
})
export class WhhHaloIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHamburgerIcon],svg[whh-hamburger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 448H64q-26 0-45-18.5T0 384t19-45.5T64 320h896q26 0 45 18.5t19 45.5t-19 45.5t-45 18.5m-64-192H128q-27 0-45.5-18.5T64 192q0-82 121-137T512 0t327 55t121 137q0 27-19 45.5T896 256M64 512h896q26 0 45 18.5t19 45t-19 45.5t-45 19H64q-26 0-45-19T0 575.5t18.5-45T64 512m64 192h768q26 0 45 18.5t19 45.5q0 46-72 55t-376 9t-376-9t-72-55q0-26 18.5-45t45.5-19"></svg:path>`,
})
export class WhhHamburgerIcon {
  readonly viewBox = input("0 0 1024 832")
  readonly width = input("1.24em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHammerIcon],svg[whh-hammer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.5 928.5Q961 960 916.5 960T840 928L607 695q-37-37-30-90L298 326L198 429q-18 19-44.5 19T108 429l-89-92Q0 317 0 290.5T19 244L256 0h269q19 19 19 46t-19 46L388 233l281 280q53-7 90 30l233 233q32 32 32 76.5t-31.5 76"></svg:path>`,
})
export class WhhHammerIcon {
  readonly viewBox = input("0 0 1024 960")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHammeraltIcon],svg[whh-hammeralt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.5 992.5q-31.5 31.5-76 31.5T841 993L608 760q-38-38-30-91L389 480q-76 61-165 96Q77 500 0 352q48-120 140.5-212T353 0q147 77 224 224q-36 90-97 165l189 189q53-8 91 30l233 233q31 31 31 75.5t-31.5 76"></svg:path>`,
})
export class WhhHammeraltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHandcuffsIcon],svg[whh-handcuffs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 1024q-69 0-127.5-34T548 898q28-62 28-130t-28-130q34-58 92-92V416q0-13 9.5-22.5T672 384h96q0-87-34.5-160.5T640 107T511.5 64T383 107t-93 116.5T256 384h96q13 0 22.5 9.5T384 416v131q58 33 93 92t35 129q0 106-75 181t-181 75t-181-75T0 768q0-70 35-129t93-92V416q0-13 9.5-22.5T160 384h32q0-104 43-192.5t116.5-140T512 0t160.5 51.5t116.5 140T832 384h32q13 0 22.5 9.5T896 416v131q58 33 93 92t35 129q0 106-75 181t-181 75M128 768q0 53 37.5 90.5T256 896t90.5-37.5T384 768t-37.5-90.5T256 640t-90.5 37.5T128 768m640-128q-53 0-90.5 37.5T640 768t37.5 90.5T768 896t90.5-37.5T896 768t-37.5-90.5T768 640"></svg:path>`,
})
export class WhhHandcuffsIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHanddownIcon],svg[whh-handdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 0h384q21 0 51.5 34.5t53.5 81t23 77.5q1 24 16.5 81.5T688 406t16 138v32q0 27-18.5 45.5T640 640q-22 0-39-13.5T579 593q-3 29-3 47q0 58-2 112.5t-8 122T546 983t-34 41q-45 0-54.5-45.5T448 768q0-38-6.5-65t-16-38.5t-19-18T391 640h-7q0 26-18.5 45T320 704q-64 0-64-128q0 27-18.5 45.5t-45 18.5t-45.5-19t-19-45v-64q0 27-18.5 45.5t-45 18.5T19 557T0 512V224q0-46 7-83t18.5-59.5t25-39.5t27-24.5t25-12T121 0z"></svg:path>`,
})
export class WhhHanddownIcon {
  readonly viewBox = input("0 0 704 1024")
  readonly width = input("0.69em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHanddragIcon],svg[whh-handdrag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M892 277q-31 80-43 173q-16 126-16 190v32q0 45-13.5 97.5t-32 96T750 946t-32 57l-13 21H321q-6-5-14.5-14T276 975.5T237 927t-30.5-50t-13.5-45q0-38-43.5-122T62 561l-43-65Q0 477 0 449.5t19-47T64.5 383t45.5 20q3 3 7 9.5t16.5 24.5t24.5 34t28 36t28.5 34.5t24 24.5t18.5 10q-2-32 0-32l-64-405q-4-26 10.5-48T242 65t43.5 11.5T309 119l40 237q36 113 36 28V64q0-26 18.5-45t45-19T494 19t19 45v384q7-2 14.5-10.5T538 416l50-297q4-27 24-42.5T656 65t38 26t10 48q-3 16-8.5 41.5t-14 90.5t-8.5 113q0 32 8 64t16 48l8 16q4-10 12-22l64-257q9-25 32-36t46-2t33 33t0 49"></svg:path>`,
})
export class WhhHanddragIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHandexpandIcon],svg[whh-handexpand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 1024H512q-30 0-110.5-59.5T288 864q-35-45-88-81t-95.5-53T31 697.5T0 672q0-45 29-70.5T96 576q20 0 52.5 9.5T208 606t80 34q7 3 42 33.5t54 30.5q21 0 67.5-22t85.5-53.5t39-52.5v-64q0-87-10-158t-22-106.5t-22-68t-10-51.5q0-3-.5-18t0-23.5t1-23.5t2.5-24.5t5.5-19T530 5t14-5q53 0 78 42t71 180q7 22 11 34q14 42 30 74t25 43l9 11q14 7 37 19.5t75 46.5t80 62q19 19 41.5 76t22.5 84v128q0 46-7.5 83t-18 59.5t-25 39.5t-27 24.5t-25.5 12t-17.5 5t-7.5.5M416 256q-7 0-21-14t-25-29l-11-14l-224 224q57 42 57 57q0 13-9.5 22.5T160 512H32q-13 0-22.5-9.5T0 480V352q0-13 9.5-22.5T32 320q16 0 56 56l224-224q-56-40-56-56q0-13 9.5-22.5T288 64h128q13 0 22.5 9.5T448 96v128q0 13-9.5 22.5T416 256"></svg:path>`,
})
export class WhhHandexpandIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHandleftIcon],svg[whh-handleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 576V192q0-21-34.5-51.5t-81-53.5T831 64q-24-1-81.5-16.5T618 16T480 0h-32q-27 0-45.5 18.5T384 64q0 22 13.5 39t33.5 22q-28 3-47 3q-58 0-112.5 2t-122 8T41 158T0 192q0 45 45.5 54.5T256 256q38 0 65 6.5t38.5 16t18 19T384 313v7q-27 0-45.5 18.5T320 384q0 64 128 64q-27 0-45.5 18.5t-18.5 45t18.5 45.5t45.5 19h64q-27 0-45.5 18.5t-18.5 45t18.5 45.5t45.5 19h288q169 0 213-90q11-21 11-38"></svg:path>`,
})
export class WhhHandleftIcon {
  readonly viewBox = input("0 0 1024 704")
  readonly width = input("1.46em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHandpinchIcon],svg[whh-handpinch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 1023H512q-30 0-110.5-59.5T288 863q-35-45-88-81t-95-53t-73-32.5T1 671q0-45 28.5-70.5T97 575q20 0 52.5 10t59 20.5T288 639q8 3 42.5 33.5T384 703q22 0 68-22t85-53.5t39-52.5v-64q0-87-10-158t-22-106.5t-22-67.5t-10-51V86l.5-23.5l3-24L521 19l9-14.5L544 0q53 0 78 41.5T693 222q7 22 11 33q14 42 30 74t25 43l9 11q15 8 38 20t74.5 46t79.5 62q19 19 41.5 76t22.5 84v128q0 46-7 83t-18.5 59.5t-25 39.5t-27 24.5t-25 12t-18.5 5.5zM448 223q0 14-9 23t-23 9H288q-13 0-22.5-9t-9.5-23V96q0-14 9.5-23t22.5-9q7 0 21 14t25 27l10 14l47-46q10-10 23.5-10T438 73t10 23.5t-10 23.5l-47 47q0-1 14.5 10.5T434 203t14 20M161 511q-7 0-21.5-14T115 469l-11-15l-47 47q-10 10-23.5 10T10 501T0 477.5T10 454l46-47q-6-4-15-11t-24.5-22.5T1 351q0-13 9-22.5t23-9.5h127q14 0 23 9.5t9 22.5v128q0 14-9 23t-22 9"></svg:path>`,
})
export class WhhHandpinchIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHandrightIcon],svg[whh-handright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 576V192q0-21 34.5-51.5t81-53.5T193 64q24-1 81.5-16.5T406 16T544 0h32q26 0 45 18.5T640 64q0 22-13.5 39T593 125q28 3 47 3q58 0 112.5 2t122 8T983 158t41 34q0 45-45.5 54.5T768 256q-38 0-65 6.5t-38.5 16t-18 19T640 313v7q27 0 45.5 18.5T704 384q0 64-128 64q26 0 45 18.5t19 45t-19 45.5t-45 19h-64q26 0 45 18.5t19 45t-19 45.5t-45 19H224q-169 0-213-90q-11-21-11-38"></svg:path>`,
})
export class WhhHandrightIcon {
  readonly viewBox = input("0 0 1024 704")
  readonly width = input("1.46em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHandswipeIcon],svg[whh-handswipe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.664 1025h-384q-21 0-51.5-34.5t-53.5-81t-23-77.5q-1-24-16.5-81.5t-31.5-131.5t-16-138v-32q0-27 18.5-45.5t45.5-18.5q22 0 39 13.5t22 33.5q3-28 3-47q0-58 2-112.5t8-122t20-108.5t34-41q45 0 54.5 45.5t9.5 210.5q0 37 6.5 64t16 39t19 18.5t15.5 6.5h7q0-27 18.5-45.5t45.5-18.5q64 0 64 128q0-27 18.5-45.5t45.5-18.5t45.5 18.5t18.5 45.5v64q0-27 18.5-45.5t45.5-18.5t45.5 18.5t18.5 45.5v288q0 46-7.5 83t-18 59.5t-25 39.5t-27 24.5t-25.5 12t-17.5 5t-7.5.5m-41-708q-9 9-23-4V193h-160q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h160V8q14-12 23-4l163 145q6 5 6 12t-6 12zm-503-124h-160v120q-14 13-23 4l-164-144q-5-5-5-12t5-12l164-145q9-8 23 4v121h160q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5"></svg:path>`,
})
export class WhhHandswipeIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHandtwofingersIcon],svg[whh-handtwofingers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024H128q-30 0-61-51T18 862T0 768V512q0-26 19-45t45-19q19 0 36 12L64 70q-2-28 15-48.5T122 0t46 17.5T189 63l35 321q5 11 14.5 21.5T256 416l35-353q1-27 20.5-45.5T357 0t43.5 21.5T416 70q-32 186-32 378q0-26 18.5-45t45-19t45.5 19t19 45v64q0-26 18.5-45t45-19t45.5 19t19 45v224q0 63-13 115.5t-32 83t-38 52t-32 29.5z"></svg:path>`,
})
export class WhhHandtwofingersIcon {
  readonly viewBox = input("0 0 640 1024")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHandupIcon],svg[whh-handup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 1024H192q-21 0-51.5-34.5t-53.5-81T64 831q-1-24-16.5-81.5T16 618T0 480v-32q0-27 18.5-45.5T64 384q22 0 39 13.5t22 33.5q3-28 3-47q0-58 2-112.5t8-122T158 41t34-41q45 0 54.5 45.5T256 256q0 38 6.5 65t16 38.5t19 18T313 384h7q0-27 18.5-45.5T384 320q64 0 64 128q0-27 18.5-45.5t45-18.5t45.5 18.5t19 45.5v64q0-26 18.5-45t45-19t45.5 19t19 45v288q0 46-7 83t-18.5 59.5t-25 39.5t-27 24.5t-25 12t-18.5 5.5z"></svg:path>`,
})
export class WhhHandupIcon {
  readonly viewBox = input("0 0 704 1024")
  readonly width = input("0.69em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHangerIcon],svg[whh-hanger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 640v8q167 22 275.5 91T1024 896q0 26-28 45t-68 19t-68-19t-28-45q0-35-43-64.5T672.5 785T512 768t-160.5 17T235 831.5T192 896q0 26-28 45t-68 19t-68-19t-28-45q0-89 108.5-157.5T384 648v-8q0-26 19-45t45-19V448q0-26 19-45t45-19q53 0 90.5-37.5T640 256t-37.5-90.5T512 128t-90.5 37.5T384 256q0 26-18.5 45t-45 19t-45.5-19t-19-45q0-106 75-181T512 0t181 75t75 181q0 88-54 157t-138 91v72q27 0 45.5 19t18.5 45"></svg:path>`,
})
export class WhhHangerIcon {
  readonly viewBox = input("0 0 1024 960")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHangoutIcon],svg[whh-hangout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.428 768h-262l-154 256l-154-256h-198q-26 0-45-18.5t-19-45.5V192q0-26 19-45t45-19h768q26 0 45 19t19 45v512q0 27-19 45.5t-45 18.5m-64-494q0-18-32-18l-160 160V288q0-13-9.5-22.5t-22.5-9.5h-384q-13 0-22.5 9.5t-9.5 22.5v320q0 13 9.5 22.5t22.5 9.5h384q13 0 22.5-9.5t9.5-22.5V480l160 160q32 0 32-17zm-832-82v448q-27 0-45.5-18.5T.428 576V128q0-53 37.5-90.5t90.5-37.5h704q26 0 45 19t19 45h-704q-53 0-90.5 37.5t-37.5 90.5"></svg:path>`,
})
export class WhhHangoutIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHangoutsIcon],svg[whh-hangouts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 1024V830q-106-8-194-65T51 616T0 416q0-113 55.5-209T207 55.5T416 0t209 55.5T776.5 207T832 416q0 67-15.5 130.5T775 661t-59.5 97.5T645 841t-74 66.5t-71 51.5t-59.5 36t-41.5 22zm0-730q0-16-11-27t-26-11H229q-15 0-26 11t-11 27v122q0 32 32 32h96q0 64-64 64v64q51 0 89.5-34t38.5-88zm256 0q0-16-11-27t-26-11H485q-15 0-26 11t-11 27v122q0 32 32 32h96q0 64-64 64v64q51 0 89.5-34t38.5-88z"></svg:path>`,
})
export class WhhHangoutsIcon {
  readonly viewBox = input("0 0 832 1024")
  readonly width = input("0.82em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHappyIcon],svg[whh-happy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5M288 256q-40 0-68 37.5T192 384t28 90.5t68 37.5t68-37.5t28-90.5t-28-90.5t-68-37.5m448 0q-40 0-68 37.5T640 384t28 90.5t68 37.5t68-37.5t28-90.5t-28-90.5t-68-37.5m64 416q-13 0-22.5 9.5T768 704h-1q-53 41-102.5 52.5t-153 11.5t-153-11.5T256 704q0-13-9.5-22.5T224 672t-22.5 9.5T192 704q1 2 3 5q23 58 108 90.5T511 832h1q118 0 201.5-30T824 718l8-14q0-13-9.5-22.5T800 672"></svg:path>`,
})
export class WhhHappyIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHarddiskIcon],svg[whh-harddisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768.338 1024h-640q-53 0-90.5-37.5T.338 896V128q0-53 37.5-90.5t90.5-37.5h640q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m0-288q0-32-19-57t-49-34q68-87 68-197q0-87-43-160.5T608.838 171t-160.5-43t-160.5 43t-116.5 116.5t-43 160.5q0 110 68 197q-30 9-49 34t-19 57v64q0 40 28 68t68 28h448q40 0 68-28t28-68zm-320-160q-53 0-90.5-37.5t-37.5-90.5t37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5"></svg:path>`,
})
export class WhhHarddiskIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHarddrivealtIcon],svg[whh-harddrivealt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 1024H128q-53 0-90.5-37.5T0 896V736q0-33 28.5-210t68-351.5T160 0h704q24 0 63.5 174.5t68 351.5t28.5 210v160q0 53-37.5 90.5T896 1024m64-256q0-26-19-45t-45-19H128q-27 0-45.5 18.5T64 768v128q0 27 19 45.5t45 18.5h768q27 0 45.5-18.5T960 896zM192 896q-27 0-45.5-19T128 831.5t18.5-45T192 768t45.5 18.5t18.5 45t-18.5 45.5t-45.5 19"></svg:path>`,
})
export class WhhHarddrivealtIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHarrypotterIcon],svg[whh-harrypotter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1000 886H27q-43-40-15-66L472 15q17-15 41-15t40 15l460 805q29 27-13 66M82 818h239q-50-40-79.5-97T207 598zm193-239.5q0 89.5 58.5 156T479 814V344q-87 12-145.5 78.5t-58.5 156M375 305q49-25 104-31V123zm173-180v149q54 6 102 31zm0 219v470q87-13 145.5-79.5t58.5-156t-58.5-156T548 344m271 256q-4 65-34 121.5T706 818h238z"></svg:path>`,
})
export class WhhHarrypotterIcon {
  readonly viewBox = input("0 0 1025 886")
  readonly width = input("1.16em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHashtagIcon],svg[whh-hashtag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 640q26 0 45 18.5t19 45.5v64q0 26-19 45t-45 19h-82l18 128q0 26-18.5 45t-45.5 19h-64q-26 0-45-19t-19-45l-18-128H430l18 128q0 26-19 45t-45 19h-64q-27 0-45.5-19T256 960l-18-128H64q-27 0-45.5-19T0 768v-64q0-27 18.5-45.5T64 640h146l-36-256H64q-27 0-45.5-19T0 320v-64q0-27 18.5-45.5T64 192h82L128 64q0-27 18.5-45.5T192 0h64q26 0 45 18.5T320 64l18 128h256L576 64q0-27 19-45.5T640 0h64q27 0 45.5 18.5T768 64l18 128h174q26 0 45 18.5t19 45.5v64q0 26-19 45t-45 19H814l36 256zM622 384H366l36 256h256z"></svg:path>`,
})
export class WhhHashtagIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHateIcon],svg[whh-hate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M736.528 576q-4 0-10.5.5t-23 4t-29 9.5t-23 19t-10.5 31q0 21 10 39.5t22 32.5t22 45.5t10 74.5v128q0 27-18.5 45.5t-45.5 18.5t-45.5-18.5t-18.5-45.5v-32q0-33-21.5-67.5t-49.5-60t-64.5-62t-56.5-66.5q-7-11-21-27t-44-40.5t-64.5-44t-85.5-34t-105-14.5q-3 0-4-1q-23-4-41.5-48t-18.5-79V128q0-31 18-47.5t46-16.5q32 0 128-32t128-32h512q26 0 45 18.5t19 45t-19 45.5t-45 19h64q26 0 45 18.5t19 45t-19 45.5t-45 19q26 0 45 18.5t19 45t-18.5 45.5t-45.5 19h64q27 0 45.5 18.5t18.5 45.5q0 49-85.5 88.5t-202.5 39.5"></svg:path>`,
})
export class WhhHateIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHdtvIcon],svg[whh-hdtv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640.585 703v65h96q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-448q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h96v-65q-384-7-384-95V64q0-27 18.5-45.5T64.585 0h896q26 0 45 18.5t19 45.5v544q0 88-384 95m320-639h-896v512h896zm-832 448V128h576z"></svg:path>`,
})
export class WhhHdtvIcon {
  readonly viewBox = input("0 0 1025 832")
  readonly width = input("1.24em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHdvideoIcon],svg[whh-hdvideo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 768H128q-53 0-90.5-37.5T0 640V128q0-53 37.5-90.5T128 0h768q53 0 90.5 37.5T1024 128v512q0 53-37.5 90.5T896 768M448 160q0-13-9.5-22.5T416 128h-64q-13 0-22.5 9.5T320 160v160H192V160q0-13-9.5-22.5T160 128H96q-13 0-22.5 9.5T64 160v448q0 13 9.5 22.5T96 640h64q13 0 22.5-9.5T192 608V448h128v160q0 13 9.5 22.5T352 640h64q13 0 22.5-9.5T448 608zm512 160q0-80-56.5-136T768 128H608q-13 0-22.5 9.5T576 160v448q0 13 9.5 22.5T608 640h160q79 0 135.5-56T960 448zM768 512h-64V256h64q26 0 45 19t19 45v128q0 26-19 45t-45 19"></svg:path>`,
})
export class WhhHdvideoIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHeadphonesIcon],svg[whh-headphones-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 768q0 106-75 181t-181 75V512q31 0 64 8v-72q0-148-82.5-234T512 128t-237.5 86T192 448v72q33-8 64-8v512q-106 0-181-75T0 768q0-96 64-169V448q0-91 35.5-174T195 131t143-95.5T512 0t174 35.5T829 131t95.5 143T960 448v151q64 73 64 169"></svg:path>`,
})
export class WhhHeadphonesIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHeadphonesaltIcon],svg[whh-headphonesalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 832h-96q-13 0-22.5-9.5T768 800V480q0-13 9.5-22.5T800 448h32q0-148-82.5-234T512 128t-237.5 86T192 448h32q13 0 22.5 9.5T256 480v320q0 13-9.5 22.5T224 832h-32q0 53 37.5 90.5T320 960h64q0-27 18.5-45.5T448 896h64q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19H320q-80 0-136-56t-56-136q-53 0-90.5-56T0 640q0-52 17.5-96T64 475v-27q0-91 35.5-174T195 131t143-95.5T512 0t174 35.5T829 131t95.5 143T960 448v27q29 25 46.5 69t17.5 96q0 80-37.5 136T896 832"></svg:path>`,
})
export class WhhHeadphonesaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHeadphonesthreeIcon],svg[whh-headphonesthree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 759q0 78-11 98l-30 58q-8 15-50 44.5t-87 49.5t-59 12l-52-34q-22-13-28.5-39.5T649 897l151-288q13-23 37-30.5t46 6.5l52 33q5 3 9 12q16-59 16-118q0-87-32-166t-89-140l-71 18q-100-96-256-96t-256 96l-71-18q-57 61-89 140T64 512q0 59 16 118q4-9 9-12l52-33q22-14 46-6.5t37 30.5l151 288q13 24 6.5 50.5T353 987l-52 34q-14 8-59-12t-87-49.5t-50-44.5l-30-58q-11-20-11-98Q0 644 0 512q0-104 40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199q0 132-64 247"></svg:path>`,
})
export class WhhHeadphonesthreeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHeartIcon],svg[whh-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m805.694 724l-293 300l-294-300q-119-122-168.5-231T.694 256q0-106 75-181t181-75t181 75t75 181q0-106 75-181t181-75t181 75t75 181q0 127-49.5 236.5T805.695 724z"></svg:path>`,
})
export class WhhHeartIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHeartarrowIcon],svg[whh-heartarrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m951 119l73 73l-163 41q35 55 35 119q0 111-43.5 207T705 761l-257 263l-201-205l-66 66l75 75l-256 64l64-256l72 72l66-67l-12-12Q86 655 43 559.5T0 352q0-93 65.5-158.5T224 128t158.5 65.5T448 352q0-93 65.5-158.5T672 128q64 0 119 35L832 0l73 73l59-58q9-10 22.5-10t23 9.5t9.5 23t-10 22.5z"></svg:path>`,
})
export class WhhHeartarrowIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHeartemptyIcon],svg[whh-heartempty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m805.694 724l-293 300l-294-300q-119-122-168.5-231T.694 256q0-106 75-181t181-75t181 75t75 181q0-106 75-181t181-75t181 75t75 181q0 127-49.5 236.5T805.695 724zm91-468q0-53-37.5-90.5t-90.5-37.5t-90.5 37.5t-37.5 90.5v1q0 17-40 40t-88 23q-50 0-89-22t-39-42q0-53-37.5-90.5t-90.5-37.5t-90.5 37.5t-37.5 90.5v1q0 106 36 190.5t127 190.5l221 226l220-226q92-107 128-191t36-191"></svg:path>`,
})
export class WhhHeartemptyIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHeartsIcon],svg[whh-hearts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512.694 1024q0-20-17.5-43t-47-47t-68-52t-81-62.5t-85-74.5t-81-91.5t-68-109t-47-132T.694 256q0-106 75-181t181-75t181 75t75 181q0-106 75-181t181-75t181 75t75 181q0 82-17.5 156.5t-47 132t-68 109t-81 91.5t-85 74.5t-81 62.5t-68 52t-47 47t-17.5 43"></svg:path>`,
})
export class WhhHeartsIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHeartsparkleIcon],svg[whh-heartsparkle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M864.694 660q-13-17-20.5-29t-12-25t-7-21t1-22t6.5-21.5t15-25.5t20.5-30t28.5-38q-30 22-42.5 32t-33.5 21.5t-27.5 14.5t-24.5 3t-24.5-3t-27.5-14.5t-33.5-21.5t-42.5-32q22 30 32 42.5t21.5 33.5t14.5 27.5t3 24.5t-3 24.5t-14.5 27.5t-21.5 33.5t-32 42.5q26-20 38-28.5t30-20.5t26-15t21.5-6.5t21.5-1t21.5 7t25.5 12.5t29 20q-27 31-48 52l-294 300l-293-300q-119-122-168.5-231T.694 256q0-106 75-181t181-75t181 75t75 181q0-106 75-181t181-75t181 75t75 181q0 111-37 207t-123 197m-480-404q-30 23-42.5 32.5t-33.5 21t-27.5 14.5t-24.5 3t-24.5-3t-27.5-14.5t-33.5-21t-42.5-32.5q23 30 32.5 42.5t21 33.5t14.5 27.5t3 24.5t-3 24.5t-14.5 27.5t-21 33.5t-32.5 42.5q30-23 42.5-32.5t33.5-21t27.5-14.5t24.5-3t24.5 3t27.5 14.5t33.5 21t42.5 32.5q-22-30-32-42.5t-21.5-33.5t-14.5-27.5t-3-24.5t3-24.5t14.5-27.5t21.5-33.5t32-42.5"></svg:path>`,
})
export class WhhHeartsparkleIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHeavymetalIcon],svg[whh-heavymetal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M700 148q-31 208-43 301q-17 126-17 190v97q0 176-97 265q-17 16-31 23H128q-30 0-61-51.5T18 861T0 767V512q0-26 18.5-45T64 448q19 0 36 12L64 70q-2-28 15-48.5T122 0t46 17.5T189 63q35 321 35 353q1-4 3.5-10.5T239 382t20-30t29-23t38-9q24 1 41 20t17 46v-2q0-26 19-45t45-19t45 19t19 45v-1q5-10 12-22l65-257q9-25 32-36t46-2t32.5 33t.5 49M384 384"></svg:path>`,
})
export class WhhHeavymetalIcon {
  readonly viewBox = input("0 0 705 1024")
  readonly width = input("0.69em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHelicopterIcon],svg[whh-helicopter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 384v32q0 12-2 18.5t-7.5 9.5t-9.5 3.5t-13 .5q-32 0-39-10l-57-54l-235 124q-32 31-77.5 49.5T500 576h-52v64h224q13 0 22.5 9.5T704 672t-9.5 22.5T672 704H96q-27 0-61.5-34.5T0 608q0-12 3.5-19t13-9.5t16.5-3t23-.5h8q0 27 18.5 45.5T128 640h64v-64h-19q-42 0-71-21.5t-36.5-64T92 384l68-128q18-29 58.5-46.5T298 192h86v-64H96q-13 0-22.5-9.5T64 96t9.5-22.5T96 64h288V32q0-13 9.5-22.5T416 0t22.5 9.5T448 32v32h288q13 0 22.5 9.5T768 96t-9.5 22.5T736 128H448v64h113q37 0 68.5 19.5T671 260l20 95l205-99l57-113q7-15 39-15q9 0 13 .5t9.5 3.5t7.5 9.5t2 18.5v32q-27 0-45.5 28T960 288t18.5 68t45.5 28M256 640h128v-64H256zm192-320q0-27-19-45.5T383 256h-63q-46 0-66 32l-56 96q-13 37 1 50.5t55 13.5h129q27 0 46-19t19-45z"></svg:path>`,
})
export class WhhHelicopterIcon {
  readonly viewBox = input("0 0 1024 704")
  readonly width = input("1.46em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHexagonIcon],svg[whh-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 897H256L0 449L256 0h512l256 449zM736 64H288L64 449l224 384h448l224-384z"></svg:path>`,
})
export class WhhHexagonIcon {
  readonly viewBox = input("0 0 1024 897")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHistoryIcon],svg[whh-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320.9 704v-32l131-177q5-20 22-33.5t39-13.5q21 0 38 12.5t23 32.5l195 243v32h-32l-225-181l-159 117zm192 320q-104 0-197.5-39.5T150.9 874l91-90q53 53 123 82.5t148 29.5q104 0 192.5-51.5t140-140T896.9 512t-51.5-192.5t-140-140T512.9 128q-94 0-175 43t-135 116l54 54q0 18-12.5 30.5T214.9 384h-171q-18 0-30.5-12.5T.9 341V171q0-17 12.5-29.5T43.9 129l68 67q71-91 176-143.5T512.9 0q104 0 199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5"></svg:path>`,
})
export class WhhHistoryIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHockeyIcon],svg[whh-hockey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m992.57 769l-311-31q-7 1-9-1l-642-642q-22-22-28-50.5t5-36.5q8-11 36.5-5t51.5 28l604 605l293-59q13 0 22.5 9.5t9.5 22.5v128q0 13-9.5 22.5t-22.5 9.5m-512 128q40 0 68 19t28 45.5t-28 45t-68 18.5t-68-18.5t-28-45t28-45.5t68-19"></svg:path>`,
})
export class WhhHockeyIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHomeIcon],svg[whh-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1004.5 556.5Q985 576 957.5 576T911 557l-15-15v419q0 26-18.5 45t-45.5 19H640V737q0-13-9.5-22.5T608 705H416q-13 0-22.5 9.5T384 737v288H192q-27 0-45.5-19T128 961V542l-15 15q-19 19-46.5 19t-47-19.5t-19.5-47T19 463L463 19q20-20 49-19q29-1 49 19l444 444q19 19 19 46.5t-19.5 47"></svg:path>`,
})
export class WhhHomeIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHomealtIcon],svg[whh-homealt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1004.5 556.5Q985 576 957.5 576T911 557l-15-15v419q0 26-18.5 45t-45.5 19H192q-27 0-45.5-19T128 961V542l-15 15q-19 19-46.5 19t-47-19.5t-19.5-47T19 463L463 19Q479 3 501.5.5T543 10q8 0 18 9l444 444q19 19 19 46.5t-19.5 47M768 414L512 158L256 414v483h512z"></svg:path>`,
})
export class WhhHomealtIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHoneycombIcon],svg[whh-honeycomb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 689v224l-192 112l-160-93l-160 93l-160-93l-160 93L0 913V689l192-112V449L0 337V113L192 0l160 94L512 0l160 94L832 0l192 113v224l-128 74v203zM384 881l128 80l128-80V721l-110-69l-146 85zM192 641L64 721v160l128 80l128-80V721zm128-496L192 65L64 145v160l128 80l128-80zm-64 288v160l128 80l128-80V433l-128-80zm384-288L512 65l-128 80v144l146 85l110-69zm-64 288v160l128 80l128-80V433l-128-80zm384-128V145L832 65l-128 80v144l146 85zM850 652l-146 85v144l128 80l128-80V721z"></svg:path>`,
})
export class WhhHoneycombIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHorizontalborderIcon],svg[whh-horizontalborder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 960v-64h64v64zm0-192h64v64h-64zm0-128h64v64h-64zm0-128H64v64H0V384h64v64h832v-64h64v192h-64zm0-256h64v64h-64zm0-128h64v64h-64zm0-128h64v64h-64zM768 0h64v64h-64zM640 0h64v64h-64zM512 384h-64v-64h64zm-64-192h64v64h-64zm0-64V64h64v64zM384 0h64v64h-64zm128 0h64v64h-64zM256 0h64v64h-64zM128 0h64v64h-64zM0 256h64v64H0zm0-128h64v64H0zM0 0h64v64H0zm64 704H0v-64h64zm0 128H0v-64h64zm0 128H0v-64h64zm128 0h-64v-64h64zm128 0h-64v-64h64zm128-384h64v64h-64zm64 192h-64v-64h64zm0 64v64h-64v-64zm64 128h-64v-64h64zm-128 0h-64v-64h64zm256 0h-64v-64h64zm128 0h-64v-64h64z"></svg:path>`,
})
export class WhhHorizontalborderIcon {
  readonly viewBox = input("0 0 960 960")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHorizontalcontractIcon],svg[whh-horizontalcontract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 576H768v104l-2 4l-4 8l-6.5 8l-9 4l-10.5-4l-160-124v384q0 27-18.5 45.5t-45 18.5t-45.5-18.5t-19-45.5V576L288 700q-9 6-16.5 2T260 689l-4-9V576H64q-27 0-45.5-19T0 511.5t18.5-45T64 448h192V345q1-1 2-3.5t4-8.5t6.5-8t9-4t10.5 4l160 123V64q0-27 19-45.5T512.5 0t45 19T576 64v384l160-123q10-7 17-2.5t11 13.5l4 9v103h192q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19"></svg:path>`,
})
export class WhhHorizontalcontractIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHorizontalexpandIcon],svg[whh-horizontalexpand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1004 558q-8 9-84 71t-88 71q-9 6-16.5 2T804 689l-4-9V576H576v384q0 27-19 45.5t-45.5 18.5t-45-18.5T448 960V576H224v104l-2 4l-4 8l-6.5 8l-9 4l-10.5-4q-12-9-88-71t-84-71Q0 538 0 511.5T19 466q5-4 86.5-70t86.5-71q9-7 16.5-2.5T220 336l4 9v103h224V64q0-27 18.5-45.5t45-18.5T557 18.5T576 64v384h224V345q0-1 1-3.5t4.5-8.5t7-8t9-4t10.5 4q5 5 86.5 70.5T1005 466q19 19 19 46t-20 46"></svg:path>`,
})
export class WhhHorizontalexpandIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHospitalIcon],svg[whh-hospital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m0-832q0-27-18.5-45.5t-45.5-18.5h-128q-26 0-45 18.5t-19 45.5v192h-256V192q0-27-18.5-45.5t-45.5-18.5h-128q-26 0-45 18.5t-19 45.5v640q0 27 19 45.5t45 18.5h128q27 0 45.5-18.5t18.5-45.5V640h256v192q0 27 19 45.5t45 18.5h128q27 0 45.5-18.5t18.5-45.5z"></svg:path>`,
})
export class WhhHospitalIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHotIcon],svg[whh-hot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M416 1024q-113 0-209-55.5T55.5 817T0 608q0-44 13-79.5T45 465t38-61t32-87t13-125q0 10 10.5 19.5t25 19t32 33.5t28.5 56q16 49 52 88.5t76 39.5q52 0 88.5-59t54-159T512 0q15 44 46 92t65.5 87t72.5 89t67.5 97.5t49 111T832 608q0 113-55.5 209T625 968.5T416 1024m128-640q-51 136-96 192q-19 24-47.5 43t-52 30.5t-45.5 26t-34.5 37T256 768q0 61 47.5 94.5T416 896q96 0 160-50.5T640 708q0-67-11-115.5t-25-72t-32-60t-28-76.5"></svg:path>`,
})
export class WhhHotIcon {
  readonly viewBox = input("0 0 832 1024")
  readonly width = input("0.82em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHotdogIcon],svg[whh-hotdog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1008.342 743l-727-727q12-12 40.5-14.5t61.5 4.5t68.5 25t60.5 43l438 438q25 25 43 62t25.5 70.5t5 61.5t-15.5 37m-20 245q-36 36-87 36t-87-36l-778-778q-36-36-36-87t36-87t87-36t87 36l778 778q36 36 36 87t-36 87m-245 19q-9 14-37 16.5t-61.5-5t-70.5-25.5t-62-43l-437-438q-25-25-43.5-62t-25.5-71t-4.5-61.5t15.5-37.5z"></svg:path>`,
})
export class WhhHotdogIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHotlinkprotectionIcon],svg[whh-hotlinkprotection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1004 748q-19 19-45 20t-44-17L794 630l-38 38q-35 35-84.5 35T587 668l-69-69l-108 107l13 13q25 24 25 58.5T423 837l-162 163q-25 24-59.5 24t-58.5-24L24 882Q0 857 0 822.5T24 763l163-162q25-25 59.5-25t58.5 25l14 13l107-107l-72-72q-35-35-35-84t35-84l39-39l-120-119q-17-18-16.5-44T276 20t45-20t44 17l120 119l38-38q35-35 84.5-35T692 98l233 233q35 35 35 84.5T925 499l-39 39l121 121q18 18 17 44t-20 45m-704-24q-19-19-45-19.5T211 721l-65 66q-18 18-17 44t20 45t45 19.5t43-16.5l66-66q18-18 17-44t-20-45m512-356L654 210q-19-19-46.5-19T560 210l-1 2q17 17 16.5 43T556 300t-45 20t-43-17l-1 1q-20 19-20 46.5t20 47.5l34 34l30-31q18-18 44-17t45 20t20 45t-17 44l-30 31l32 32q19 19 46.5 19t46.5-19l2-2q-16-18-15-43t19.5-43t43.5-19.5t43 14.5l1-1q19-20 19-47t-19-47"></svg:path>`,
})
export class WhhHotlinkprotectionIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHourglassIcon],svg[whh-hourglass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.988 128h-64v64q0 99-46.5 183t-125.5 137q79 53 125.5 137.5t46.5 182.5v64h64q26 0 45 18.5t19 45.5t-19 45.5t-45 18.5h-896q-26 0-45-18.5t-19-45t19-45.5t45-19h64v-64q0-98 46.5-182.5t125.5-137.5q-79-53-125.5-137t-46.5-183v-64h-64q-26 0-45-18.5t-19-45t19-45.5t45-19h896q26 0 45 19t19 45.5t-19 45t-45 18.5m-704 704v64h512q2-9 2-19.5t-1-24t-1-20.5q0-106-75-181t-181-75t-181 75t-75 181m512-704h-512v64q0 106 75 181t181 75t181-75t75-181z"></svg:path>`,
})
export class WhhHourglassIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHourglassaltIcon],svg[whh-hourglassalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.356 128h-64v64q0 99-46.5 183t-125.5 137q79 53 125.5 137.5t46.5 182.5v64h64q26 0 45 18.5t19 45.5t-19 45.5t-45 18.5h-896q-26 0-45-18.5t-19-45t19-45.5t45-19h64v-64q0-98 46.5-182.5t125.5-137.5q-79-53-125.5-137t-46.5-183v-64h-64q-26 0-45-18.5T.356 64t19-45.5t45-18.5h896q26 0 45 18.5t19 45.5t-19 45.5t-45 18.5m-384 456v192l192 120v-64q0-88-54-157t-138-91m-320 248v64l192-120V584q-84 22-138 91t-54 157m512-704h-512v64q0 68 35 128h442q35-60 35-128z"></svg:path>`,
})
export class WhhHourglassaltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHouseIcon],svg[whh-house-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1004.5 555.5Q985 575 957.5 575T911 555l-15-14v418h96q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5H33q-13 0-22.5-9.5T1 991t9.5-22.5T33 959h95V541l-15 14q-19 20-46.5 20t-47-19.5t-19.5-47T19 462L463 19q20-20 49-19q29-1 49 19l443 443q20 19 20 46.5t-19.5 47M448 671q0-13-9.5-22.5T416 639H288q-13 0-22.5 9.5T256 671v288h192zm320 0q0-13-9.5-22.5T736 639H608q-13 0-22.5 9.5T576 671v128q0 13 9.5 22.5T608 831h128q13 0 22.5-9.5T768 799z"></svg:path>`,
})
export class WhhHouseIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHryvniaIcon],svg[whh-hryvnia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 448H676q-41 34-100 64q-50 28-107 64h363q26 0 45 18.5t19 45t-19 45.5t-45 19H298q-42 41-42 64q0 53 37.5 90.5T384 896q85 0 147.5-10t88.5-22t48-22t36-10q26 0 45 18.5t19 45.5q0 34-29 53l-11 12q-75 59-345 63h-31q-48 0-87.5-13.5t-70.5-42t-48.5-79.5T128 768q0-30 9-64H64q-26 0-45-18.5t-19-45T19 595t45-19h156q41-34 100-64q50-28 107-64H64q-26 0-45-19T0 383.5t19-45T64 320h534q42-41 42-64q0-53-37.5-90.5T512 128q-85 0-147.5 10T276 160t-48 22t-36 10q-26 0-45-19t-19-45q0-34 29-53q1-3 5.5-8T192 49t63-23T369 8t175-8q48 0 87.5 13.5t70.5 42t48.5 79.5T768 256q0 31-9 64h73q26 0 45 18.5t19 45t-19 45.5t-45 19"></svg:path>`,
})
export class WhhHryvniaIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHryvniaaltIcon],svg[whh-hryvniaalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m352-640H760q8-27 8-64q0-58-15.5-97.5t-44-59t-60-27.5t-72.5-8q-213 0-285 63l-12 14q-23 19-23 54q0 26 20.5 43.5T320 320q25 0 45.5-10t35-22t52-22t91.5-10q96 0 96 64q0 28-39 64H160q-13 0-22.5 9.5T128 416t9.5 22.5T160 448h354q-92 60-98 64q-16 11-53.5 31.5T309 576H160q-13 0-22.5 9.5T128 608t9.5 22.5T160 640h104q-8 27-8 64q0 58 15.5 97.5t44 59t60 27.5t72.5 8q72 0 129-8t87-19t50-22.5t25-19.5l6-8q23-19 23-54q0-26-20.5-43.5T704 704q-25 0-45.5 10t-35 22t-52 22t-91.5 10q-96 0-96-64q0-28 39-64h441q13 0 22.5-9.5T896 608t-9.5-22.5T864 576H510q92-60 98-64q16-11 53.5-31.5T715 448h149q13 0 22.5-9.5T896 416t-9.5-22.5T864 384"></svg:path>`,
})
export class WhhHryvniaaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHryvniasquareIcon],svg[whh-hryvniasquare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-288-512q71-46 92-64h164q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-115q19-42 19-96q0-58-16-102t-43-70t-61-39t-72-13q-213 0-285 63l-12 14q-23 19-23 54q0 26 20.5 43.5t43.5 17.5q25 0 45.5-10t35-22t52-22t91.5-10q96 0 96 96q0 36-62 96h-418q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h343q-32 25-87 64q-71 46-92 64h-164q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h115q-19 41-19 96q0 58 16 102.5t43.5 70t61 38.5t71.5 13q72 0 129-8t87-19t50-23t25.5-18.5t5.5-8.5q23-19 23-54q0-26-20.5-43.5t-43.5-17.5q-25 0-45.5 10t-35 22t-52 22t-91.5 10q-96 0-96-96q0-36 62-96h418q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-343q33-25 87-64"></svg:path>`,
})
export class WhhHryvniasquareIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHtmlIcon],svg[whh-html-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1006 555L808 815q-18 17-43.5 17T721 814.5t-18-43t18-43.5l165-216l-165-216q-18-18-18-43t18-43t43.5-18t43.5 18l198 259q18 18 18 43t-18 43M512 961q-1 3-3 11.5t-3 11.5l-3.5 10.5l-5 10.5l-7.5 8l-10.5 7l-13.5 3.5l-18 1.5q-24 0-46-25t-16-48L512 64q17-64 96-64q22 0 29.5 23.5T638 73zM303 814.5Q285 832 259.5 832T216 815L18 555Q0 537 0 512t18-43l198-259q18-18 43.5-18t43.5 18t18 43t-18 43L138 512l165 216q18 18 18 43.5t-18 43"></svg:path>`,
})
export class WhhHtmlIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHtmlfileIcon],svg[whh-htmlfile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M831.405 1024h-767q-27 0-45.5-18.5T.405 960V65q0-27 18.5-45.5T64.405 1h448v352q0 13 9 22.5t23 9.5h351v575q0 27-18.5 45.5t-45.5 18.5m-459-440q12-12 12-30t-12-30.5t-29-12.5t-29 13l-175 149q-12 13-12 30.5t12 30.5l175 149q12 13 29 13t29-12.5t12-30.5t-12-30l-146-119zm384 89l-174-149q-12-13-29-13t-29 12.5t-12 30.5t12 30l145 120l-145 119q-12 12-12 30t12 30.5t29 12.5t29-13l174-149q13-13 13-30.5t-13-30.5m-180-673q26 0 44 18l256 257q19 19 19 46h-319z"></svg:path>`,
})
export class WhhHtmlfileIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHtmlfiveIcon],svg[whh-htmlfive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m832 896l-384 128L64 896L0 0h896zM128 128l35 384h413v192l-128 32l-128-32V576H169l23 256l256 64l256-64l41-448H320V256h436l12-128z"></svg:path>`,
})
export class WhhHtmlfiveIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhHydrantIcon],svg[whh-hydrant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M800 768q-13 0-22.5-9.5T768 736v-32h-64v192q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19H192q-26 0-45-19t-19-45.5t19-45t45-18.5V704h-64v32q0 13-9.5 22.5T96 768q-40 0-68-37.5T0 640t28-90.5T96 512q13 0 22.5 9.5T128 544v32h64V448q-26 0-45-19t-19-45.5t19-45t45-18.5q0-89 54-157.5T384 72v-8q0-27 19-45.5T448.5 0t45 18.5T512 64v8q84 22 138 91t54 157q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19v128h64v-32q0-13 9.5-22.5T800 512q40 0 68 37.5t28 90.5t-28 90.5t-68 37.5"></svg:path>`,
})
export class WhhHydrantIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhIIcon],svg[whh-i-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 128h-63v768h63q27 0 45.5 19t18.5 45.5t-18.5 45T320 1024H64q-26 0-45-18.5t-19-45T19 915t45-19h65V128H64q-26 0-45-18.5t-19-45T19 19T64 0h256q27 0 45.5 19T384 64.5t-18.5 45T320 128"></svg:path>`,
})
export class WhhIIcon {
  readonly viewBox = input("0 0 384 1024")
  readonly width = input("0.38em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhIUpperCaseIcon],svg[whh-i-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 128h-63v768h63q27 0 45.5 19t18.5 45.5t-18.5 45T320 1024H64q-26 0-45-18.5t-19-45T19 915t45-19h65V128H64q-26 0-45-18.5t-19-45T19 19T64 0h256q27 0 45.5 19T384 64.5t-18.5 45T320 128"></svg:path>`,
})
export class WhhIUpperCaseIcon {
  readonly viewBox = input("0 0 384 1024")
  readonly width = input("0.38em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhIcecreamIcon],svg[whh-icecream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M608 320H32q-13 0-22.5-9.5T0 288q0-34 15-53.5T64 192q3-78 59.5-135T256 0q73 0 127 49t63 121q23-10 50-10q61 0 102.5 35t41.5 93q0 13-9.5 22.5T608 320M64 384h512q26 0 45 19t19 45L384 960q0 26-19 45t-45.5 19t-45-19t-18.5-45L0 448q0-26 19-45t45-19"></svg:path>`,
})
export class WhhIcecreamIcon {
  readonly viewBox = input("0 0 640 1024")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhIcecreamaltIcon],svg[whh-icecreamalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 704H64q-27 0-45.5-19T0 640V256Q0 150 75 75T256 0t181 75t75 181v384q0 27-19 45.5T448 704M320 960q0 26-19 45t-45.5 19t-45-19t-18.5-45V768h128z"></svg:path>`,
})
export class WhhIcecreamaltIcon {
  readonly viewBox = input("0 0 512 1024")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhIcecreamthreeIcon],svg[whh-icecreamthree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M736 576q0 27-18.5 45.5T672 640h-11l-53 320q0 27-18.5 45.5T544 1024H224q-27 0-45.5-18.5T160 960l-53-320H96q-27 0-45.5-18.5T32 576L0 448q0-27 18.5-45.5T64 384h640q27 0 45.5 18.5T768 448zm-64-256H96q-13 0-22.5-9.5T64 288q0-86 43.5-152.5t116-101T384.5 0t161 34.5t115.5 101T704 288q0 13-9.5 22.5T672 320"></svg:path>`,
})
export class WhhIcecreamthreeIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhIdeaIcon],svg[whh-idea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 511q-63 67-95.5 121.5T448 736q0 13-9.5 22.5T416 768H224q-13 0-22.5-9.5T192 736q0-49-32.5-103.5T64 511Q0 426 0 320q0-87 43-160.5T159.5 43T320 0t160.5 43T597 159.5T640 320q0 106-64 191M224 832h192q13 0 22.5 9.5T448 864t-9.5 22.5T416 896H224q-13 0-22.5-9.5T192 864t9.5-22.5T224 832m96 192q-53 0-90.5-19T192 960h256q0 26-37.5 45t-90.5 19"></svg:path>`,
})
export class WhhIdeaIcon {
  readonly viewBox = input("0 0 640 1024")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhIllustratorIcon],svg[whh-illustrator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-384-640q0-53-37.5-90.5t-90.5-37.5h-64q-53 0-90.5 37.5t-37.5 90.5v352q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5V592q0-7 4.5-11.5t11.5-4.5h160q7 0 11.5 4.5t4.5 11.5v144q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5zm288-64q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-128q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h32v384h-32q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h128q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-32V320zm-368 192h-160q-7 0-11.5-4.5t-4.5-11.5V384q0-26 18.5-45t45.5-19h64q26 0 45 19t19 45v112q0 7-4.5 11.5t-11.5 4.5"></svg:path>`,
})
export class WhhIllustratorIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhImacIcon],svg[whh-imac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.046 832h-384v127h96q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-320q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h96V832h-384q-27 0-45.5-19t-18.5-45V64q0-27 18.5-45.5T64.046 0h896q27 0 45.5 18.5t18.5 45.5v704q0 26-18.5 45t-45.5 19m0-768h-896v576h896zm-832 511V127h640z"></svg:path>`,
})
export class WhhImacIcon {
  readonly viewBox = input("0 0 1025 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhImageIcon],svg[whh-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1025V0h1024v1025zM960 64H64v769h896zm-704 64q53 0 90.5 37.5T384 256t-37.5 90.5T256 384t-90.5-37t-37.5-90v-1q0-53 37.5-90.5T256 128m111 402l238 239H128v-93l146-146q18-18 46.5-18t46.5 18m323-192q18-19 46.5-19t46.5 19l113 113v318H692q0-1-1.5-3.5T688 761L477 551z"></svg:path>`,
})
export class WhhImageIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhImportIcon],svg[whh-import-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M663 448h105q26 0 45 18.5t19 45t-19 45.5t-45 19H512q-27 0-45.5-19T448 512V256q0-27 18.5-45.5t45-18.5t45.5 18.5t19 45.5v105L919 18q18-18 43.5-18t43.5 18t18 43.5t-18 43.5zM512 128q-104 0-192.5 51.5t-140 140T128 512t51.5 192.5t140 140T512 896t192.5-51.5t140-140T896 512q0-27 18.5-45.5T960 448t45.5 18.5T1024 512q0 104-40.5 199t-109 163.5t-163.5 109t-199 40.5t-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0q26 0 45 18.5t19 45t-19 45.5t-45 19"></svg:path>`,
})
export class WhhImportIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhImportcontactsIcon],svg[whh-importcontacts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 1024H64q-26 0-45-18.5T0 960V320q0-26 19-45t45-19h192q0-26 19-45t45-19h64V64q0-26 19-45t45-19h128q27 0 45.5 19T640 64v128h64q27 0 45.5 19t18.5 45h192q27 0 45.5 19t18.5 45v640q0 27-18.5 45.5T960 1024M288 384q-71 0-115.5 32.5T128 512q0 168 96 211v19q-69 12-114 45t-46 75q0 12 21.5 19.5t63 10.5t68.5 3.5t71 .5t71-.5t68.5-3.5t63-10.5T512 862q-1-42-45.5-75T352 742v-18q96-39 96-212v-3L293 384zm408-128H576V96q0-13-9.5-22.5T544 64h-64q-13 0-22.5 9.5T448 96v160H327q-8 10-8 23t8 23l185 146l184-146q8-10 8-23t-8-23m232 192H672q-13 0-22.5 9.5T640 480t9.5 22.5T672 512h256q13 0 22.5-9.5T960 480t-9.5-22.5T928 448M640 672q0 13 9.5 22.5T672 704h128q13 0 22.5-9.5T832 672t-9.5-22.5T800 640H672q-13 0-22.5 9.5T640 672m288 160H672q-13 0-22.5 9.5T640 864t9.5 22.5T672 896h256q13 0 22.5-9.5T960 864t-9.5-22.5T928 832"></svg:path>`,
})
export class WhhImportcontactsIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhImportfileIcon],svg[whh-importfile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 1025H256q-27 0-45.5-18.5T192 961v-65H91q-38 0-64.5-28T0 800V608q0-39 26.5-67.5T91 512h101V65q0-26 18.5-45T256 1h384v352q0 13 9.5 22.5T672 385h351l1 1v575q0 27-18.5 45.5T960 1025M622 664L424 466q-18-18-43.5-18T337 466q-19 19-17 48v62H128q-26 0-45 19t-19 45v128q0 27 19 45.5t45 18.5h192v63q-2 29 17 48q18 18 43.5 18t43.5-18l182-182q11-5 16-10q18-18 18-43.5T622 664M704 0q26 0 44 19l257 257q19 19 18 45H704z"></svg:path>`,
})
export class WhhImportfileIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhImpresscmsIcon],svg[whh-impresscms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928 320q-40 0-68 18.5T832 384v384H704V416q0-40-28-68t-68-28t-68 28t-28 68v352H384V256l64-64h64v50q55-50 128-50q49 0 91.5 23t68.5 63q26-40 68.5-63t91.5-23q32 0 64 11v135q-34-18-96-18m-736-64l-64 64v-72q-57-13-92.5-46T0 128q0-53 56-90.5T192 0t136 37.5t56 90.5t-56.5 90.5T192 256m64 64v448H128V384l64-64z"></svg:path>`,
})
export class WhhImpresscmsIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhImpresspagesIcon],svg[whh-impresspages-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832.63 384q-80 0-136-56t-56-135.5t56-136t136-56.5t136 56.5t56 136t-56 135.5t-136 56m-320 320l-192-192l192-192l192 192zm-319.5-320q-79.5 0-136-56T.63 192.5t56-136t136-56.5t136 56.5t56 136t-56 135.5t-135.5 56m0 256q79.5 0 135.5 56.5t56 136t-56 135.5t-135.5 56t-136-56T.63 832.5t56.5-136t136-56.5m639.5 0q80 0 136 56.5t56 136t-56 135.5t-136 56t-136-56t-56-136t56-136t136-56"></svg:path>`,
})
export class WhhImpresspagesIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhInboxIcon],svg[whh-inbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024.428 896v64q0 26-19 45t-45 19h-896q-27 0-45.5-19t-18.5-45V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5zm-128-640q0-53-37.5-90.5t-90.5-37.5h-512q-53 0-90.5 37.5t-37.5 90.5v384q0 27 18.5 45.5t45.5 18.5h32q20 0 38 8.5t26 23.5q5 17 16.5 66t15.5 62q8 20 23.5 26t45.5 6h249q29 0 43.5-6t22.5-26q18-90 32-128q13-32 64-32h32q26 0 45-18.5t19-45.5zm-192 320h-384q-27 0-45.5-18.5t-18.5-45.5t18.5-45.5t45.5-18.5h384q26 0 45 19t19 45t-19 45t-45 19m0-192h-384q-27 0-45.5-19t-18.5-45.5t18.5-45t45.5-18.5h384q26 0 45 18.5t19 45t-19 45.5t-45 19"></svg:path>`,
})
export class WhhInboxIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhInboxaltIcon],svg[whh-inboxalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.428 1024h-896q-26 0-45-19t-19-45V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v832q0 26-18.5 45t-45.5 19m-64-768q0-53-37.5-90.5t-90.5-37.5h-512q-53 0-90.5 37.5t-37.5 90.5v384q0 27 18.5 45.5t45.5 18.5h32q20 0 38.5 8.5t25.5 23.5q5 17 16.5 66t15.5 62q8 20 23.5 26t45.5 6h249q29 0 43.5-6t22.5-26q18-90 32-128q13-32 64-32h32q26 0 45-18.5t19-45.5zm-352 434q-13 14-32 14t-33-14l-214-217q-12-13-8-19t19-6h108V320q0-27 18.5-45.5t45.5-18.5h128q27 0 45.5 18.5t18.5 45.5v128h107q15 0 19 6t-8 19z"></svg:path>`,
})
export class WhhInboxaltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhIncomingcallIcon],svg[whh-incomingcall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1006 105L790 321h106q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19H640q-26 0-45-19t-19-45V129q0-27 19-45.5T640.5 65t45 18.5T704 129v104L919 18q18-18 43.5-18t43.5 18t18 43.5t-18 43.5M648 805l87-87q15-14 52.5-12t76.5 12t63 22q56 26 82 65.5t4 62.5L906 974q-44 44-117.5 49.5t-159-23t-182-90.5T264 761T115 578T24.5 396t-23-159T51 120L157 14q21-21 55.5 4T286 99q18 27 29 96.5t-8 95.5l-87 87q18 65 95 160t172 172.5T648 805"></svg:path>`,
})
export class WhhIncomingcallIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhIncomingcallaltIcon],svg[whh-incomingcallalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 576H832v119q-15 15-25 5L582 526q-6-6-6-14.5t6-13.5l225-174q10-10 25 5v119h160q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5T992 576m-544 448h-64q-80 0-149.5-35.5t-122-100t-82.5-162T0 512t30-214.5t82.5-162t122-100T384 0h64q27 0 45.5 18.5T512 64v192q0 26-18.5 45T448 320h-64q-24 0-42-15.5T321 265q-129 40-129 247t129 247q3-24 21-39.5t42-15.5h64q27 0 45.5 18.5T512 768v192q0 26-19 45t-45 19"></svg:path>`,
})
export class WhhIncomingcallaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhIndentleftIcon],svg[whh-indentleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 384H512q-26 0-45-18.5t-19-45t19-45.5t45-19h448q26 0 45 19t19 45.5t-19 45t-45 18.5M768 192H512q-27 0-45.5-18.5T448 128t18.5-45.5T512 64h256q26 0 45 19t19 45.5t-18.5 45T768 192m-416 832q-13 0-22.5-9.5T320 992V32q0-13 9.5-22.5T352 0t22.5 9.5T384 32v960q0 13-9.5 22.5T352 1024M159 633q-7 7-15.5 7t-15.5-7v-57H32q-13 0-22.5-9.5T0 544v-64q0-13 9.5-22.5T32 448h96v-57q7-8 15.5-8t15.5 8l155 103q6 7 6 17.5t-6 17.5zm353-185h320q26 0 45 18.5t19 45.5t-19 45.5t-45 18.5H512q-27 0-45.5-19T448 511.5t18.5-45T512 448m0 192h384q26 0 45 18.5t19 45t-19 45.5t-45 19H512q-26 0-45-19t-19-45.5t18.5-45T512 640m0 192h128q26 0 45 18.5t19 45t-19 45.5t-45 19H512q-26 0-45-19t-19-45.5t18.5-45T512 832"></svg:path>`,
})
export class WhhIndentleftIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhIndentleftaltIcon],svg[whh-indentleftalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M904 640H568q-50 0-85-37.5T448 512t35-90.5t85-37.5h336q50 0 85 37.5t35 90.5t-35 90.5t-85 37.5m0-384H248q-50 0-85-37.5T128 128t35-90.5T248 0h656q50 0 85 37.5t35 90.5t-35 90.5t-85 37.5m-712 70v122h160q13 0 22.5 9.5T384 480v64q0 13-9.5 22.5T352 576H192v121q-7 7-15.5 7t-15.5-7L6 529q-6-7-6-17.5T6 494l155-168q7-7 15.5-7t15.5 7m56 442h656q50 0 85 37.5t35 90.5t-35 90.5t-85 37.5H248q-50 0-85-37.5T128 896t35-90.5t85-37.5"></svg:path>`,
})
export class WhhIndentleftaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhIndentrightIcon],svg[whh-indentright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.232 576h-96v57q-7 7-15.5 7t-15.5-7l-155-104q-6-7-6-17t6-18l155-103q7-8 15.5-8t15.5 8v57h96q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m-320 448q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5v960q0 13-9.5 22.5t-22.5 9.5m-160-640h-448q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45.5-19h448q26 0 45 19t19 45.5t-19 45t-45 18.5m-192-192h-256q-27 0-45.5-18.5T.232 128t18.5-45.5t45.5-18.5h256q26 0 45 19t19 45.5t-19 45t-45 18.5m-256 256h320q26 0 45 19t19 45t-19 45t-45 19h-320q-27 0-45.5-18.5T.232 512t18.5-45.5t45.5-18.5m0 192h384q26 0 45 18.5t19 45t-19 45.5t-45 19h-384q-27 0-45.5-19t-18.5-45.5t18.5-45t45.5-18.5m0 192h128q26 0 45 18.5t19 45t-19 45.5t-45 19h-128q-27 0-45.5-19t-18.5-45.5t18.5-45t45.5-18.5"></svg:path>`,
})
export class WhhIndentrightIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhIndentrightaltIcon],svg[whh-indentrightalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M904 640H568q-50 0-85-37.5T448 512t35-90.5t85-37.5h336q50 0 85 37.5t35 90.5t-35 90.5t-85 37.5m0-384H248q-50 0-85-37.5T128 128t35-90.5T248 0h656q50 0 85 37.5t35 90.5t-35 90.5t-85 37.5m-712 71q7-8 15.5-8t15.5 8l155 167q6 8 6 18t-6 17L223 697q-7 7-15.5 7t-15.5-7V576H32q-13 0-22.5-9.5T0 544v-64q0-13 9.5-22.5T32 448h160zm56 441h656q50 0 85 37.5t35 90.5t-35 90.5t-85 37.5H248q-50 0-85-37.5T128 896t35-90.5t85-37.5"></svg:path>`,
})
export class WhhIndentrightaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhIndexmanagerIcon],svg[whh-indexmanager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.488 1024h-896q-27 0-45.5-18.5T.488 960V64q0-27 18.5-45.5T64.488 0h896q27 0 45.5 19t18.5 45v896q0 27-18.5 45.5t-45.5 18.5m0-896q0-27-18.5-45.5t-45.5-18.5h-768q-27 0-45.5 18.5t-18.5 45.5v256l37-85q5-18 22-30.5t36-12.5h128q18 0 35 12.5t23 30.5l10 21h509q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-800v448l37-85q5-18 22-30.5t36-12.5h128q18 0 35 12.5t23 30.5l10 21h605zm-571 491q5-18 22-30.5t36-12.5h128q18 0 35 12.5t23 30.5l10 21h221q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-512zm288-128q5-18 22-30.5t36-12.5h128q18 0 35 12.5t23 30.5l39 85h-320zm-101 21h-416q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h416q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m-416 64h128q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-128q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5m704-320h-512l37-85q5-18 22-30.5t36-12.5h128q18 0 35 12.5t23 30.5l10 21h221q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m-576-64h-128q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5"></svg:path>`,
})
export class WhhIndexmanagerIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhInfinityIcon],svg[whh-infinity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 568q-97 0-256-153q-159 153-256 153q-106 0-181-75T0 312t75-181t181-75q98 0 256 153Q671 56 768 56q106 0 181 75t75 181t-75 181t-181 75M256 184q-57 0-92.5 37T128 312t35.5 91t92.5 37q22 0 46.5-13t44-32t35.5-38t25-32l9-13q-3-5-9-13.5t-24.5-31t-36.5-39t-43-30.5t-47-14m512 0q-22 0-46.5 13t-44 32t-35.5 38t-25 32l-9 13q3 5 9 14t24.5 31t36.5 38.5t43 30.5t47 14q57 0 92.5-37t35.5-91t-35.5-91t-92.5-37"></svg:path>`,
})
export class WhhInfinityIcon {
  readonly viewBox = input("0 0 1024 614")
  readonly width = input("1.67em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhInfinityaltIcon],svg[whh-infinityalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M736 632q-119 0-203.5-84.5T448 344q0-66-47-113t-113-47t-113 47t-47 113t47 113t113 47q67 0 114-48q22 63 64 114q-78 62-178 62q-119 0-203.5-84.5T0 344t84.5-203.5T288 56t203.5 84.5T576 344q0 66 47 113t113 47t113-47t47-113t-47-113t-113-47q-67 0-114 48q-22-63-64-114q78-62 178-62q119 0 203.5 84.5T1024 344t-84.5 203.5T736 632"></svg:path>`,
})
export class WhhInfinityaltIcon {
  readonly viewBox = input("0 0 1024 632")
  readonly width = input("1.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhInfographicIcon],svg[whh-infographic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M915 826L730 641q37-61 37-131q0-89-54.5-158T574 261V0q126 16 228.5 87t162 182.5T1024 510q0 176-109 316M262 445H0q22-174 146.5-298.5T445 0v261q-67 18-116.5 67.5T262 445m-1 129q22 84 91 138.5T510 767q70 0 131-37l185 185q-140 109-316 109q-129 0-240.5-59.5T87 802.5T0 574z"></svg:path>`,
})
export class WhhInfographicIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhInfosignIcon],svg[whh-infosign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m32-896q-40 0-68 28t-28 67.5t28 68t68 28.5t68-28.5t28-68t-28-67.5t-68-28m129 530q-60 63-88 81.5T530 758q-15 0-25.5-13.5T494 710q0-43 82-326l-155-29Q320 604 320 745q0 65 31 108t76 43q81 0 246-162z"></svg:path>`,
})
export class WhhInfosignIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhIngressIcon],svg[whh-ingress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480 1024L0 768V256L480 0l480 256v512zm416-736L512 81v175h-64V81L64 288v397l146-85l28 50l-161 93l403 217l404-217l-162-93l29-50l145 85zm-768 32h704L480 896zm352 174l174-110H307zm-189-51l157 270V544zm221 101v169l158-270z"></svg:path>`,
})
export class WhhIngressIcon {
  readonly viewBox = input("0 0 960 1024")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhInkIcon],svg[whh-ink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M923 1024H40q-28 0-36.5-29t7.5-68l148-515q4-11 17.5-19.5T205 384h116v-64h-96q-13 0-22.5-9.5T193 288V32q0-13 9.5-22.5T225 0h512q14 0 23 9.5t9 22.5v256q0 13-9 22.5t-23 9.5h-96v64h113q14 0 27.5 8t18.5 20l151 515q16 39 8 68t-36 29M321 96q0-13-9-22.5T289.5 64t-23 9.5T257 96v128q0 13 9.5 22.5t23 9.5t22.5-9.5t9-22.5zm128 0q0-13-9-22.5T417.5 64t-23 9.5T385 96v128q0 13 9.5 22.5t23 9.5t22.5-9.5t9-22.5zm128 0q0-13-9-22.5T545.5 64t-23 9.5T513 96v128q0 13 9.5 22.5t23 9.5t22.5-9.5t9-22.5zm96.5 160q13.5 0 22.5-9.5t9-22.5V96q0-13-9-22.5T673.5 64t-23 9.5T641 96v128q0 13 9.5 22.5t23 9.5M705 448H257l-55 222q58 34 119 34q35 0 68.5-13t60-32t52-38t53.5-32t54-13q85 0 140 45z"></svg:path>`,
})
export class WhhInkIcon {
  readonly viewBox = input("0 0 962 1024")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhInkpenIcon],svg[whh-inkpen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832.757 384h85l107 576l-256-256v-64q0-53-37.5-90.5t-90.5-37.5t-90.5 37.5t-37.5 90.5t37.5 90.5t90.5 37.5h64l256 256l-576-107v-85q0-176-79-324q-55 8-108-9t-93-58l-34-33q-70-70-70-169t70-169t169.5-70t169.5 70l33 33q41 41 58 94.5t9 108.5q148 78 323 78"></svg:path>`,
})
export class WhhInkpenIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhInnerbordersIcon],svg[whh-innerborders-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 960v-64h64v64zm0-192h64v64h-64zm0-128h64v64h-64zm0-128H512v384h64v64H384v-64h64V512H64v64H0V384h64v64h384V64h-64V0h192v64h-64v384h384v-64h64v192h-64zm0-256h64v64h-64zm0-128h64v64h-64zm0-128h64v64h-64zM768 0h64v64h-64zM640 0h64v64h-64zM256 0h64v64h-64zM128 0h64v64h-64zM0 256h64v64H0zm0-128h64v64H0zM0 0h64v64H0zm64 704H0v-64h64zm0 128H0v-64h64zm0 128H0v-64h64zm128 0h-64v-64h64zm128 0h-64v-64h64zm384 0h-64v-64h64zm128 0h-64v-64h64z"></svg:path>`,
})
export class WhhInnerbordersIcon {
  readonly viewBox = input("0 0 960 960")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhInsertbarchartIcon],svg[whh-insertbarchart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M991.998 832q13 0 22.5 9.5t9.5 22.5v128q0 13-9.5 22.5t-22.5 9.5h-128q-13 0-22.5-9.5t-9.5-22.5v-32h-640v32q0 13-9.5 22.5t-22.5 9.5h-128q-13 0-22.5-9.5t-9.5-22.5V864q0-13 9.5-22.5t22.5-9.5h32V192h-32q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5v32h640V32q0-13 9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5v128q0 13-9.5 22.5t-22.5 9.5h-32v640zm-928 112q0 7 4.5 11.5t11.5 4.5h32q7 0 11.5-4.5t4.5-11.5v-32q0-7-4.5-11.5t-11.5-4.5h-32q-7 0-11.5 4.5t-4.5 11.5zm64-864q0-7-4.5-11.5t-11.5-4.5h-32q-7 0-11.5 4.5t-4.5 11.5v32q0 7 4.5 11.5t11.5 4.5h32q7 0 11.5-4.5t4.5-11.5zm704 80v-32h-640v32q0 13-9.5 22.5t-22.5 9.5h-32v640h32q13 0 22.5 9.5t9.5 22.5v32h640v-32q0-13 9.5-22.5t22.5-9.5h32V192h-32q-13 0-22.5-9.5t-9.5-22.5m128-80q0-7-4.5-11.5t-11.5-4.5h-32q-7 0-11.5 4.5t-4.5 11.5v32q0 7 4.5 11.5t11.5 4.5h32q7 0 11.5-4.5t4.5-11.5zm-16 816h-32q-7 0-11.5 4.5t-4.5 11.5v32q0 7 4.5 11.5t11.5 4.5h32q7 0 11.5-4.5t4.5-11.5v-32q0-7-4.5-11.5t-11.5-4.5m-208-128h-64q-13 0-22.5-9.5t-9.5-22.5V416q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v320q0 13-9.5 22.5t-22.5 9.5m-192 0h-64q-13 0-22.5-9.5t-9.5-22.5V544q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5m-192 0h-64q-13 0-22.5-9.5t-9.5-22.5V288q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v448q0 13-9.5 22.5t-22.5 9.5"></svg:path>`,
})
export class WhhInsertbarchartIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhInsertpictureIcon],svg[whh-insertpicture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M991.998 832q13 0 22.5 9.5t9.5 22.5v128q0 13-9.5 22.5t-22.5 9.5h-128q-13 0-22.5-9.5t-9.5-22.5v-32h-640v32q0 13-9.5 22.5t-22.5 9.5h-128q-13 0-22.5-9.5t-9.5-22.5V864q0-13 9.5-22.5t22.5-9.5h32V192h-32q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5v32h640V32q0-13 9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5v128q0 13-9.5 22.5t-22.5 9.5h-32v640zm-928 112q0 7 4.5 11.5t11.5 4.5h32q7 0 11.5-4.5t4.5-11.5v-32q0-7-4.5-11.5t-11.5-4.5h-32q-7 0-11.5 4.5t-4.5 11.5zm64-864q0-7-4.5-11.5t-11.5-4.5h-32q-7 0-11.5 4.5t-4.5 11.5v32q0 7 4.5 11.5t11.5 4.5h32q7 0 11.5-4.5t4.5-11.5zm704 80v-32h-640v32q0 13-9.5 22.5t-22.5 9.5h-32v640h32q13 0 22.5 9.5t9.5 22.5v32h640v-32q0-13 9.5-22.5t22.5-9.5h32V192h-32q-13 0-22.5-9.5t-9.5-22.5m128-80q0-7-4.5-11.5t-11.5-4.5h-32q-7 0-11.5 4.5t-4.5 11.5v32q0 7 4.5 11.5t11.5 4.5h32q7 0 11.5-4.5t4.5-11.5zm-16 816h-32q-7 0-11.5 4.5t-4.5 11.5v32q0 7 4.5 11.5t11.5 4.5h32q7 0 11.5-4.5t4.5-11.5v-32q0-7-4.5-11.5t-11.5-4.5m-467-281l149-150q18-18 46.5-18t46.5 18l49 49v254h-140zm-125-167q-40 0-68-28t-28-68t28-68t68-28t68 28t28 68t-28 68t-68 28m15 146l173 174h-284V612l18-18q18-19 46.5-19t46.5 19"></svg:path>`,
})
export class WhhInsertpictureIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhInsertpicturecenterIcon],svg[whh-insertpicturecenter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.59 192h-960q-13 0-22.5-9.5T.59 160t9.5-22.5t22.5-9.5h960q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m-192-128h-768q-13 0-22.5-9.5T.59 32t9.5-22.5T32.59 0h768q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m-480 640q-26 0-45-18.5t-19-45.5V320q0-26 19-45t45-19h384q27 0 45.5 19t18.5 45v320q0 27-18.5 45.5t-45.5 18.5zm-288 64h896q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-896q-13 0-22.5-9.5T.59 800t9.5-22.5t22.5-9.5m0 128h768q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-768q-13 0-22.5-9.5T.59 928t9.5-22.5t22.5-9.5"></svg:path>`,
})
export class WhhInsertpicturecenterIcon {
  readonly viewBox = input("0 0 1025 960")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhInsertpictureleftIcon],svg[whh-insertpictureleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.94 320h-384q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h384q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m-384-192h256q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-256q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5m384-64h-384q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h384q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m-544 384h-384q-27 0-45.5-19T.94 384V64q0-26 18.5-45t45.5-19h384q26 0 45 19t19 45v320q0 26-19 45t-45 19m160 0q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h320q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5zm-576 64h960q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-960q-13 0-22.5-9.5T.94 544t9.5-22.5t22.5-9.5m0 128h832q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-832q-13 0-22.5-9.5T.94 672t9.5-22.5t22.5-9.5m0 128h896q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-896q-13 0-22.5-9.5T.94 800t9.5-22.5t22.5-9.5m0 128h768q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-768q-13 0-22.5-9.5T.94 928t9.5-22.5t22.5-9.5"></svg:path>`,
})
export class WhhInsertpictureleftIcon {
  readonly viewBox = input("0 0 1025 960")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhInsertpicturerightIcon],svg[whh-insertpictureright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.59 448h-384q-26 0-45-19t-19-45V64q0-26 19-45t45-19h384q26 0 45 19t19 45v320q0 26-19 45t-45 19m-544-128h-384q-13 0-22.5-9.5T.59 288t9.5-22.5t22.5-9.5h384q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m-384-192h256q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-256q-13 0-22.5-9.5T.59 160t9.5-22.5t22.5-9.5m384-64h-384q-13 0-22.5-9.5T.59 32t9.5-22.5T32.59 0h384q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m-384 320h320q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-320q-13 0-22.5-9.5T.59 416t9.5-22.5t22.5-9.5m0 128h960q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-960q-13 0-22.5-9.5T.59 544t9.5-22.5t22.5-9.5m0 128h832q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-832q-13 0-22.5-9.5T.59 672t9.5-22.5t22.5-9.5m0 128h896q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-896q-13 0-22.5-9.5T.59 800t9.5-22.5t22.5-9.5m0 128h768q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-768q-13 0-22.5-9.5T.59 928t9.5-22.5t22.5-9.5"></svg:path>`,
})
export class WhhInsertpicturerightIcon {
  readonly viewBox = input("0 0 1025 960")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhInsertpiechartIcon],svg[whh-insertpiechart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M991.998 832q13 0 22.5 9.5t9.5 22.5v128q0 13-9.5 22.5t-22.5 9.5h-128q-13 0-22.5-9.5t-9.5-22.5v-32h-640v32q0 13-9.5 22.5t-22.5 9.5h-128q-13 0-22.5-9.5t-9.5-22.5V864q0-13 9.5-22.5t22.5-9.5h32V192h-32q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5v32h640V32q0-13 9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5v128q0 13-9.5 22.5t-22.5 9.5h-32v640zm-928 112q0 7 4.5 11.5t11.5 4.5h32q7 0 11.5-4.5t4.5-11.5v-32q0-7-4.5-11.5t-11.5-4.5h-32q-7 0-11.5 4.5t-4.5 11.5zm64-864q0-7-4.5-11.5t-11.5-4.5h-32q-7 0-11.5 4.5t-4.5 11.5v32q0 7 4.5 11.5t11.5 4.5h32q7 0 11.5-4.5t4.5-11.5zm704 80v-32h-640v32q0 13-9.5 22.5t-22.5 9.5h-32v640h32q13 0 22.5 9.5t9.5 22.5v32h640v-32q0-13 9.5-22.5t22.5-9.5h32V192h-32q-13 0-22.5-9.5t-9.5-22.5m128-80q0-7-4.5-11.5t-11.5-4.5h-32q-7 0-11.5 4.5t-4.5 11.5v32q0 7 4.5 11.5t11.5 4.5h32q7 0 11.5-4.5t4.5-11.5zm-16 816h-32q-7 0-11.5 4.5t-4.5 11.5v32q0 7 4.5 11.5t11.5 4.5h32q7 0 11.5-4.5t4.5-11.5v-32q0-7-4.5-11.5t-11.5-4.5m-368-704q106 0 181 75t75 181h-256zm-64 576q-106 0-181-75t-75-181t75-181t181-75v256h256q0 106-75 181t-181 75"></svg:path>`,
})
export class WhhInsertpiechartIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhInstagramIcon],svg[whh-instagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-384-640q-53 0-90.5 37.5t-37.5 90.5t37.5 90.5t90.5 37.5t90.5-37.5t37.5-90.5t-37.5-90.5t-90.5-37.5m384-224q0-13-9.5-22.5t-22.5-9.5h-128q-13 0-22.5 9.5t-9.5 22.5v128q0 13 9.5 22.5t22.5 9.5h128q13 0 22.5-9.5t9.5-22.5zm0 320q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v32q0 106-75 181t-181 75t-181-75t-75-181v-32q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v384q0 13 9.5 22.5t22.5 9.5h704q13 0 22.5-9.5t9.5-22.5z"></svg:path>`,
})
export class WhhInstagramIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhInstagramfourIcon],svg[whh-instagramfour-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320.428 512q0-80 56-136t136-56t136 56t56 136t-56 136t-136 56t-136-56t-56-136m704-64v448q0 53-37.5 90.5t-90.5 37.5h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v192h-256q-45-59-112-93.5t-144-34.5t-144 34.5t-112 93.5h-256v128h198q-6 32-6 64q0 87 43 160.5t116.5 116.5t160.5 43t160.5-43t116.5-116.5t43-160.5q0-32-6-64z"></svg:path>`,
})
export class WhhInstagramfourIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhInstagramthreeIcon],svg[whh-instagramthree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-768-960q-26 0-45 18.5t-19 45.5v192h64zm384 832q87 0 160.5-43t116.5-116.5t43-160.5t-43-160.5t-116.5-116.5t-160.5-43t-160.5 43t-116.5 116.5t-43 160.5t43 160.5t116.5 116.5t160.5 43m448-768q0-27-18.5-45.5t-45.5-18.5h-640v226q110-98 256-98q84 0 158 34t128 94h162zm-192 96v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5m-256 160q80 0 136 56t56 136t-56 136t-136 56t-136-56t-56-136t56-136t136-56"></svg:path>`,
})
export class WhhInstagramthreeIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhInstagramtwoIcon],svg[whh-instagramtwo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-640-960h-128v256h128zm256 320q-80 0-136 56t-56 136t56 136t136 56t136-56t56-136t-56-136t-136-56m384-224q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm64 224h-192q64 86 64 192q0 87-43 160.5T672.928 853t-160.5 43t-160.5-43t-116.5-116.5t-43-160.5q0-106 64-192h-192v512q0 27 18.5 45.5t45.5 18.5h768q26 0 45-18.5t19-45.5z"></svg:path>`,
})
export class WhhInstagramtwoIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhInstallIcon],svg[whh-install-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1001 663q23 50 23 104q0 106-75 181t-181 75q-54 0-104-22q-74 23-152 23q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199q0 77-23 151M512 896q15 0 34-2q-34-59-34-127q0-72 38-133q-21 6-38 6q-45 0-81-29L269 809q106 87 243 87m64-383.5q0-26.5-19-45.5t-45-19t-45 19t-19 45t19 45t45 19q27 0 45.5-18.5t18.5-45m-448-.5q0 137 87 243l198-162q-29-36-29-81q0-26 10-50L159 361q-31 72-31 151m384-384q-79 0-151 31l101 235q23-10 50-10q45 0 81 29l162-198q-106-87-243-87m297 141L611 431q29 36 29 81q0 17-6 37q62-38 134-38q67 0 126 34q2-20 2-33q0-137-87-243m142 434H832v-64q0-26-19-45t-45.5-19t-45 19t-18.5 45v64H585q-9 0-9.5 14t7.5 22l148 141q15 15 37 15t37-15l148-141q8-8 7-22t-9-14"></svg:path>`,
})
export class WhhInstallIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhIntelIcon],svg[whh-intel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 836V670q60-49 94-115t34-139q0-125-91-224.5T576 64V0q125 14 227.5 76.5t161.5 161t59 210.5q0 122-69.5 225T768 836m-288-68q-40 0-68-28t-28-68V288q0-13 9.5-22.5T416 256h64q13 0 22.5 9.5T512 288v448q0 13-9.5 22.5T480 768m0-640h-64q-13 0-22.5-9.5T384 96V32q0-13 9.5-22.5T416 0h64q13 0 22.5 9.5T512 32v64q0 13-9.5 22.5T480 128M64 480q0 113 55.5 209T271 840.5T480 896q121 0 224-66v156q-93 38-192 38q-139 0-257-68.5T68.5 769T0 512q0-142 72.5-261.5T265 64h55v64q-119 49-187.5 138T64 480"></svg:path>`,
})
export class WhhIntelIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhIntersectionIcon],svg[whh-intersection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 384H576v64h258q34 1 43 10l137 94q10 10 10 24t-10 24l-137 94q-10 10-45 10H576v256q0 26-18.5 45t-45.5 19t-45.5-19t-18.5-45V704H64q-26 0-45-19T0 640V512q0-26 19-45t45-19h384v-64H192q-35 0-45-10L10 280Q0 270 0 256t10-24l137-94q9-10 43-10h258V64q0-26 18.5-45T512 0t45.5 19T576 64v64h384q26 0 45 18.5t19 45.5v128q0 27-19 45.5T960 384"></svg:path>`,
})
export class WhhIntersectionIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhIntersectshapeIcon],svg[whh-intersectshape-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-512q-53 0-90.5-37.5t-37.5-90.5V768h-128q-53 0-90.5-37.5T.428 640V128q0-53 37.5-90.5t90.5-37.5h512q53 0 90.5 37.5t37.5 90.5v128h128q53 0 90.5 37.5t37.5 90.5v512q0 53-37.5 90.5t-90.5 37.5m-256-864q0-13-9.5-22.5t-22.5-9.5h-448q-13 0-22.5 9.5t-9.5 22.5v448q0 13 9.5 22.5t22.5 9.5h96V384q0-53 37.5-90.5t90.5-37.5h256zm256 256q0-13-9.5-22.5t-22.5-9.5h-96v256q0 53-37.5 90.5t-90.5 37.5h-256v96q0 13 9.5 22.5t22.5 9.5h448q13 0 22.5-9.5t9.5-22.5z"></svg:path>`,
})
export class WhhIntersectshapeIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhInvertIcon],svg[whh-invert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m0-768q0-53-38-91l-120 121q-44-45-102.5-69.5t-123.5-24.5q-87 0-160.5 43t-116.5 116.5t-43 160.5q0 65 24.5 123.5t69.5 102.5l-121 121q38 37 91 37h512q53 0 90.5-37.5t37.5-90.5zm-384 576q-133 0-226-94l452-452q45 44 69.5 102.5t24.5 123.5q0 87-43 160.5T672.928 789t-160.5 43"></svg:path>`,
})
export class WhhInvertIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhInvoiceIcon],svg[whh-invoice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m832.417 960l-64 64l-64-64l-64 64l-64-64l-64 64l-64-64l-64 64l-64-64l-64 64l-64-64l-64 64l-64-64l-64 64V64q0-26 19-45t45-19h768q26 0 45 19t19 45v960zm-672-128h192q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5m608-672q0-13-9.5-22.5t-22.5-9.5h-576q-13 0-22.5 9.5t-9.5 22.5v384q0 13 9.5 22.5t22.5 9.5h352v96q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5zm-192 416h128v64h-128zm0-128h128v64h-128zm0-128h128v64h-128zm0-128h128v64h-128zm-384 256h320v64h-320zm0-128h320v64h-320zm0-128h320v64h-320z"></svg:path>`,
})
export class WhhInvoiceIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhIpcontrolIcon],svg[whh-ipcontrol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-64q-26 0-45-19t-19-45.5t19-45t45-18.5h32q13 0 22.5-9.5t9.5-22.5v-32q0-27 18.5-45.5t45-18.5t45.5 18.5t19 45.5v64q0 53-37.5 90.5t-90.5 37.5m64-768q-27 0-45.5-19t-18.5-45v-32q0-13-9.5-22.5t-22.5-9.5h-32q-26 0-45-18.5t-19-45.5t19-45.5t45-18.5h64q53 0 90.5 37.5t37.5 90.5v64q0 27-18.5 45.5t-45.5 18.5m-128 192q0 80-56 136t-136 56h-64v64q0 27-18.5 45.5t-45 18.5t-45.5-19t-19-45V320q0-27 19-45.5t45-18.5h128q80 0 136 56t56 136m-192-64h-64v128h64q26 0 45-19t19-45.5t-18.5-45t-45.5-18.5m-383.5 384q-26.5 0-45.5-19t-19-45V320q0-27 19-45.5t45-18.5t45 18.5t19 45.5v384q0 27-18.5 45.5t-45 18.5m-64.5-640h-32q-13 0-22.5 9.5t-9.5 22.5v32q0 27-18.5 45.5t-45 18.5t-45.5-19t-19-45v-64q0-53 37.5-90.5t90.5-37.5h64q26 0 45 18.5t19 45t-18.5 45.5t-45.5 19m-127.5 640q26.5 0 45 18.5t18.5 45.5v32q0 13 9.5 22.5t22.5 9.5h32q26 0 45 18.5t19 45t-19 45.5t-45 19h-64q-53 0-90.5-37.5T.428 896v-64q0-27 19-45.5t45.5-18.5"></svg:path>`,
})
export class WhhIpcontrolIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhIphoneIcon],svg[whh-iphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 1024H128q-53 0-90.5-37.5T0 896V128q0-53 37.5-90.5T128 0h512q53 0 90.5 37.5T768 128v768q0 53-37.5 90.5T640 1024m-255.5-64q26.5 0 45-18.5t18.5-45t-18.5-45.5t-45-19t-45.5 19t-19 45.5t19 45t45.5 18.5M704 128H64v640h640zM128 704V191h384z"></svg:path>`,
})
export class WhhIphoneIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhIpodIcon],svg[whh-ipod-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024H128q-53 0-90.5-37.5T0 896V128q0-53 37.5-90.5T128 0h384q53 0 90.5 37.5T640 128v768q0 53-37.5 90.5T512 1024m64-896q0-26-18.5-45T512 64H128q-27 0-45.5 19T64 128v192q0 27 18.5 45.5T128 384h384q26 0 45-18.5t19-45.5zM320 448q-106 0-181 75T64 704t75 181t181 75t181-75t75-181t-75-181t-181-75m0 448q-80 0-136-56t-56-136t56-136t136-56t136 56t56 136t-56 136t-136 56m0-256q-27 0-45.5 19T256 704.5t18.5 45T320 768t45.5-18.5T384 704t-18.5-45.5T320 640"></svg:path>`,
})
export class WhhIpodIcon {
  readonly viewBox = input("0 0 640 1024")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhIronmanIcon],svg[whh-ironman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M773 832q-24 52-73 102t-109 90H241q-56-37-103.5-88T64 832Q0 704 0 320q0-35 11-96.5T32 128l160-96Q291 0 419 0q121 0 221 32l160 96q10 34 21 95.5t11 96.5q0 384-59 512M271 960h294q88-61 139-160l-64 32h-64l-48-64H304l-48 64h-64l-64-32q43 90 143 160m497-768L606 92q-33-11-65-17l-29 117q-7 27-23 45.5T448 256h-64q-24 0-40.5-19.5T320 192L291 76q-30 6-60 16L64 192v224q0 55 16 137.5T96 672q0 24 6 51l125 62l61-81h256l61 81l125-62q6-28 6-51q0-34 16-118.5T768 416zM512 416l192-32v64l-192 64zm-384-32l192 32v96l-192-64z"></svg:path>`,
})
export class WhhIronmanIcon {
  readonly viewBox = input("0 0 832 1024")
  readonly width = input("0.82em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhIslamIcon],svg[whh-islam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 128q-104 0-192.5 51.5t-140 140T256 512t51.5 192.5t140 140T640 896q95 0 183-43t148-115q-64 129-187 207.5T512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0q149 0 272 78.5T971 286q-60-72-148-115t-183-43m146 323l46-131l46 131l146-1l-118 89l39 133l-113-78l-113 78l39-133l-118-89z"></svg:path>`,
})
export class WhhIslamIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhIslandIcon],svg[whh-island-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 896q0 31-27 54t-71.5 37t-112 22.5t-139 11.5t-162.5 3q-110 0-200-8t-161.5-24.5t-111-45T0 880q0-42 51-87.5t139.5-83T384 654v-78q0-107-40-206q-18 19-46 58t-49 67.5t-53 53t-65 27.5q-3-14-3-29.5t1.5-36T131 479q0-65 30.5-123T243 256h-19q-69 0-118.5 53T32 448q-9-9-20.5-31.5T0 372q0-112 64.5-178T224 128q105 0 154 54q18-79 81.5-130.5T605 0q96 0 161.5 50T832 192q-73-64-192-64q-49 0-75.5 19.5T523 205q41-13 83-13q94 0 160 51t66 123q0 45-27.5 83.5T730 512q-17-85-75-133.5T513 322q10 20 21 50.5T560.5 481T576 640v1q105 6 211 48.5T958.5 789t65.5 107"></svg:path>`,
})
export class WhhIslandIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhIssueIcon],svg[whh-issue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-896q-104 0-192.5 51.5t-140 140T128 512t51.5 192.5t140 140T512 896t192.5-51.5t140-140T896 512t-51.5-192.5t-140-140T512 128m32 704h-64q-13 0-22.5-9.5T448 800v-64q0-13 9.5-22.5T480 704h64q13 0 22.5 9.5T576 736v64q0 13-9.5 22.5T544 832m0-192h-64q-13 0-22.5-9.5T448 608V224q0-13 9.5-22.5T480 192h64q13 0 22.5 9.5T576 224v384q0 13-9.5 22.5T544 640"></svg:path>`,
})
export class WhhIssueIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhIssueclosedIcon],svg[whh-issueclosed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 384v-64h64l64 64l192-192h64v64L768 512zm-96 256h-64q-13 0-22.5-9.5T448 608V224q0-13 9.5-22.5T480 192h64q13 0 22.5 9.5T576 224v384q0 13-9.5 22.5T544 640m32 160q0 13-9.5 22.5T544 832h-64q-13 0-22.5-9.5T448 800v-64q0-13 9.5-22.5T480 704h64q13 0 22.5 9.5T576 736zm-64-672q-104 0-192.5 51.5t-140 140T128 512t51.5 192.5t140 140T512 896t192.5-51.5t140-140T896 512q0-6-1-24l110-111q19 68 19 135q0 104-40.5 199t-109 163.5t-163.5 109t-199 40.5t-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0q109 0 206 43t168 120l-90 91q-54-59-127.5-92.5T512 128"></svg:path>`,
})
export class WhhIssueclosedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhIssuereopenedIcon],svg[whh-issuereopened-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.76 576q-27 0-45.5-18.5t-18.5-45.5q0-104-51.5-192.5t-140-140t-192.5-51.5q-141 0-249 92l57 57q0 18-12.5 30.5t-29.5 12.5h-172q-17 0-29.5-12.5T64.76 277V107q0-18 12.5-30.5t29.5-12.5l66 66q69-62 156.5-96t183.5-34q104 0 199 40.5t163.5 109t109 163.5t40.5 199q-.002 27-18.502 45.5t-45.5 18.5zm-416 64h-64q-13 0-22.5-9.5t-9.5-22.5V224q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v384q0 13-9.5 22.5t-22.5 9.5m32 160q0 13-9.5 22.5t-22.5 9.5h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5zm-448-288q0 104 51.5 192.5t140 140t192.5 51.5q141 0 249-92l-57-57q0-18 12.5-30.5t29.5-12.5h172q17 0 29.5 12.5t12.5 30.5v170q0 18-12.5 30.5t-29.5 12.5l-66-66q-69 62-156.5 96t-183.5 34q-104 0-199-40.5t-163.5-109t-109-163.5T.76 512q0-26 19-45t45-19t45 19t19 45"></svg:path>`,
})
export class WhhIssuereopenedIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhItalicIcon],svg[whh-italic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 128h-78L275 896h45q26 0 45 18.5t19 45t-19 45.5t-45 19H64q-27 0-45.5-19T0 959.5t18.5-45T64 896h80l223-768h-47q-27 0-45.5-18.5t-18.5-45T274.5 19T320 0h256q26 0 45 19t19 45.5t-19 45t-45 18.5"></svg:path>`,
})
export class WhhItalicIcon {
  readonly viewBox = input("0 0 640 1024")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhJIcon],svg[whh-j-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 768q0 106-75 181t-181 75H256q-106 0-181-75T0 768q0-26 19-45t45.5-19t45 18.5T128 768q0 53 37.5 90.5T256 896h256q53 0 90.5-37.5T640 768V64q0-26 19-45t45.5-19t45 19T768 64z"></svg:path>`,
})
export class WhhJIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhJUpperCaseIcon],svg[whh-j-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 768q0 106-75 181t-181 75H256q-106 0-181-75T0 768q0-26 19-45t45.5-19t45 18.5T128 768q0 53 37.5 90.5T256 896h256q53 0 90.5-37.5T640 768V64q0-26 19-45t45.5-19t45 19T768 64z"></svg:path>`,
})
export class WhhJUpperCaseIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhJarIcon],svg[whh-jar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 1024H128q-53 0-90.5-37.5T0 896V512q0-63 18.5-122.5T67 293t61-37q27 0 45.5-18.5t18.5-45t-15-66.5q-21-5-35-22.5T128 64q0-26 19-45t45-19h512q26 0 45 19t19 45q0 22-14 39.5T719 126q-15 40-15 66q0 27 18.5 45.5T768 256q31 0 61 37t48.5 96.5T896 512v384q0 53-37.5 90.5T768 1024m0-469q0-72-16-121.5T704 384q-39 0-83.5-34.5T576 288V128H320v160q0 27-44.5 61.5T192 384q-32 0-48 50t-16 121v256q0 35 27 60t64 25h458q37 0 64-25t27-60z"></svg:path>`,
})
export class WhhJarIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhJasonIcon],svg[whh-jason-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M773 768q-36 80-97.5 139.5t-127.5 88t-129 28.5t-129-28t-128-87.5T64 768Q0 625 0 320q0-87 57-160.5T210.5 43T419 0t207.5 43T777 159.5T832 320v73.5l-.5 46l-2 53.5l-4.5 54.5l-7.5 58.5l-10.5 55.5l-14.5 56zM224 320q-30 0-55.5 17.5T128 384q15 29 40.5 46.5T224 448t55.5-17.5T320 384q-15-29-40.5-46.5T224 320m128-192q-13 0-22.5 9.5T320 160t9.5 22.5T352 192t22.5-9.5T384 160t-9.5-22.5T352 128m0 448q-13 0-22.5 9.5T320 608t9.5 22.5T352 640t22.5-9.5T384 608t-9.5-22.5T352 576m0 128q-13 0-22.5 9.5T320 736t9.5 22.5T352 768t22.5-9.5T384 736t-9.5-22.5T352 704m0 128q-13 0-22.5 9.5T320 864t9.5 22.5T352 896t22.5-9.5T384 864t-9.5-22.5T352 832m128 64q13 0 22.5-9.5T512 864t-9.5-22.5T480 832t-22.5 9.5T448 864t9.5 22.5T480 896m0-128q13 0 22.5-9.5T512 736t-9.5-22.5T480 704t-22.5 9.5T448 736t9.5 22.5T480 768m0-128q13 0 22.5-9.5T512 608t-9.5-22.5T480 576t-22.5 9.5T448 608t9.5 22.5T480 640m0-512q-13 0-22.5 9.5T448 160t9.5 22.5T480 192t22.5-9.5T512 160t-9.5-22.5T480 128m128 192q-30 0-55.5 17.5T512 384q15 29 40.5 46.5T608 448t55.5-17.5T704 384q-15-29-40.5-46.5T608 320"></svg:path>`,
})
export class WhhJasonIcon {
  readonly viewBox = input("0 0 832 1024")
  readonly width = input("0.82em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhJavaIcon],svg[whh-java-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M942 767q-24 0-49.5-18T850 702q9 1 14 1q40 0 68-19t28-45q0-25-25-43t-62-21q-41 28-139.5 46T512 639q-159 0-271.5-28.5T128 543q0-30 66-54q14 36 114 61t236 25q113 0 203-18t128-46q12 9 17 18q26-18 50-18q34 0 58 37.5t24 90.5t-24 90.5t-58 37.5M576 318q0 33 10 59t22 41t22 39.5t10 53.5q-5-3-13.5-8t-31-23.5t-39-39T526 387t-14-69q0-33 31.5-69.5t74.5-62t85-42.5t65-16q-18 0-63.5 31t-87 78t-41.5 81m-192 33q0 35 16 75t32 63l16 23q-48 0-88-51t-40-110q0-26 20-52.5t48-48t56-40.5t48-37.5t20-32.5q0-28-3-49t-16.5-48T454 0q62 7 92 44.5t30 95.5q0 32-20 57t-48 41t-56 31t-48 35.5t-20 46.5m128 480q147 0 221-32q35 15 35 32q0 26-75 45t-181 19t-181-19t-75-45q0-17 35-32q74 32 221 32M192 703q0-17 43-32q93 32 277 32t277-32q43 15 43 32q0 26-94 45t-226.5 19t-226-19t-93.5-45m-64 128q0 35 51.5 64.5t140 46.5T512 959t192.5-17t140-46.5T896 831q0-11-6-22q134 36 134 86q0 35-68.5 64.5T769 1006t-257 17t-257-17t-186.5-46.5T0 895q0-50 134-86q-6 11-6 22"></svg:path>`,
})
export class WhhJavaIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhJcoreIcon],svg[whh-jcore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1016 64L899 281q4 17 11 27t13 11l6 1q13 0 22.5 9.5T961 352t-9.5 22.5T929 384q-2 0-7 .5t-19.5 4.5t-28.5 10.5t-33 21t-35 34.5l-65 121q-14 27-43 45.5T643 640H39q-26 0-35-18.5t6-45.5l117-218q-4-16-11-26t-13-11l-6-1q-13 0-22.5-9.5T65 288t9.5-22.5T97 256q3 0 7.5-.5t18.5-4t28-10t33-21t35-34.5l66-122q14-27 43-45.5T383 0h604q26 0 35 18.5t-6 45.5M385 448q-11 23-22.5 37t-25 19.5T315 511t-26 1v64h66q44 0 88-37.5t74-90.5l139-256H526zM595 64l-34 64h130l34-64z"></svg:path>`,
})
export class WhhJcoreIcon {
  readonly viewBox = input("0 0 1026 640")
  readonly width = input("1.61em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhJcowIcon],svg[whh-jcow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 256H768q0 192-14 316t-46.5 196T629 868t-117 28q-64 0-123-17t-96-47t-37-64q0-26 .5-39t3.5-35t9.5-35t19.5-27.5t31-23.5q-6-27-25.5-87.5t-29-119.5t-9.5-145H128q-61 0-94.5-13.5T0 192q0-43 39-85.5T128 64q29 0 67.5 15.5T266 119q22-52 90-85.5T512 0t156 33.5t90 85.5q32-24 70.5-39.5T896 64q50 0 89 42.5t39 85.5q0 37-33.5 50.5T896 256M480 64q-32 0-52 4.5T399 83t-12 19.5t-3 25.5q0 19 10 43t22 52t22 104t10 185q0 42-10.5 81.5T416 640q-96 47-96 96q0 43 64.5 69.5T533 832q5-4 12-11.5t19-32.5t12-52q0-99 16-242t32-250t16-116q0-27-47-45.5T480 64"></svg:path>`,
})
export class WhhJcowIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhJerseyIcon],svg[whh-jersey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M769 889q0 23-18 46.5T707 969q-155 55-323 55T61 969q-25-10-43-33.5T0 889V519q0-45 10-88.5t22-70t22-55T64 256V0h128v64q0 80 56.5 136t136 56T520 200t56-136V0h129q-1 169 0 256q0 21 10 49.5t22 55t22 70t10 88.5zM320 480q0-13-9-22.5t-23-9.5h-64q-13 0-22.5 9.5t-9.5 23t9.5 22.5t22.5 9h32v225q0 13 9.5 22.5t23 9.5t22.5-9.5t9-22.5zm192 0q0-13-9-22.5t-23-9.5h-64q-13 0-22.5 9.5t-9.5 23t9.5 22.5t22.5 9h32v225q0 13 9.5 22.5t23 9.5t22.5-9.5t9-22.5z"></svg:path>`,
})
export class WhhJerseyIcon {
  readonly viewBox = input("0 0 769 1024")
  readonly width = input("0.76em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhJoomlaIcon],svg[whh-joomla-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928.784 192q-40 0-68-28t-28-68t28-68t68-28t68 28t28 68t-28 68t-68 28m-85 267l-75-75q20-21 17-60.5t-24-60.5t-60.5-24t-60.5 17l-193 192l-75-75l187-187q58-58 139.5-58t139.5 58q56 56 57.5 135.5t-52.5 137.5m-580-196q-21 21-24 60.5t17 60.5l192 192l-76 75l-186-186q-58-58-58-139.5t58-139.5q56-56 135.5-57.5t137.5 52.5l-75 75q-21-20-60.5-17t-60.5 24m-167-71q-40 0-68-28t-28-68t28-68t68-28t68 28t28 68t-28 68t-68 28m0 640q40 0 68 28t28 68t-28 68t-68 28t-68-28t-28-68t28-68t68-28m84-266l75 75q-20 21-17 60.5t24 60.5t60.5 24t60.5-17l192-192l75 76l-186 186q-58 58-139.5 58t-139.5-58q-56-56-57.5-135.5t52.5-137.5m582 196q21-21 24-60.5t-17-60.5l-192-193l75-75l187 187q58 58 58 139.5t-58 139.5q-56 56-135.5 57.5t-137.5-52.5l75-75q21 20 60.5 17t60.5-24m166 70q40 0 68 28t28 68t-28 68t-68 28t-68-28t-28-68t28-68t68-28"></svg:path>`,
})
export class WhhJoomlaIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhJoystickarcadeIcon],svg[whh-joystickarcade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 1024H64q-26 0-45-19T0 960V832q0-26 19-45t45-19h256q0-26 18.5-45t45.5-19h64V372q-57-20-92.5-69T320 192q0-79 56-135.5T512 0t136 56t56 136q0 62-35.5 111T576 372v332h64q27 0 45.5 19t18.5 45h256q26 0 45 19t19 45v128q0 27-19 45.5t-45 18.5M128 640h64q26 0 45 19t19 45H64q0-26 18.5-45t45.5-19"></svg:path>`,
})
export class WhhJoystickarcadeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
