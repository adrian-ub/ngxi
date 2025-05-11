import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhJqueryIcon],svg[whh-jquery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M807 480q-109 0-186-77t-77-186q0-64 36-121.5T672 0q-4 10-12.5 31t-13 32t-12 29.5t-11 30T616 148t-6 24.5t-2 19.5q0 95 64.5 159.5T832 416q9 0 19.5-2t24.5-6t25.5-7.5t30-11t29.5-12t32-13t31-12.5q-38 56-95.5 92T807 480m-71 160q61 0 114.5-7T992 608q-55 62-133 95t-167 33q-110 0-203-54T342 535t-54-202q0-90 33-168t95-133q-18 88-25 141.5T384 288q0 94 48 175t129 129t175 48M576 896q183 0 320-32q-70 78-170 119t-214 41q-139 0-257-68.5T68.5 769T0 512q0-114 41-214t119-170q-32 137-32 320q0 91 35.5 174T259 765t143 95.5T576 896"></svg:path>`,
})
export class WhhJqueryIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhJqueryuiIcon],svg[whh-jqueryui-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512.56 896q-111 0-200-26.5t-161-84.5t-111.5-159.5T.56 384V128q0-53 37.5-90.5T128.56 0h768q53 0 90.5 37.5t37.5 90.5v256q0 140-39.5 241.5T873.56 785t-161 84.5t-200 26.5m0-320q-43 0-75.5-11t-60-38t-42-79t-14.5-128V192h-192v192q1 84 21.5 150t54.5 109.5t83 72t104.5 40.5t120.5 12q76 0 138.5-17t115.5-53.5t86.5-100t43.5-149.5h-192q-37 128-192 128m256-448l-64 192l192 64l64-192z"></svg:path>`,
})
export class WhhJqueryuiIcon {
  readonly viewBox = input("0 0 1025 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhKIcon],svg[whh-k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 320q0 56-23 106t-64 86q41 36 64 86t23 106v256q0 27-18.5 45.5t-45 18.5t-45.5-18.5t-19-45.5V704q0-53-37.5-90.5T512 576H128v384q0 27-18.5 45.5t-45 18.5t-45.5-18.5T0 960V64q0-26 19-45T64.5 0t45 18.5T128 64v384h384q53 0 90.5-37.5T640 320V64q0-26 19-45t45.5-19t45 19T768 64z"></svg:path>`,
})
export class WhhKIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhKUpperCaseIcon],svg[whh-k-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 320q0 56-23 106t-64 86q41 36 64 86t23 106v256q0 27-18.5 45.5t-45 18.5t-45.5-18.5t-19-45.5V704q0-53-37.5-90.5T512 576H128v384q0 27-18.5 45.5t-45 18.5t-45.5-18.5T0 960V64q0-26 19-45T64.5 0t45 18.5T128 64v384h384q53 0 90.5-37.5T640 320V64q0-26 19-45t45.5-19t45 19T768 64z"></svg:path>`,
})
export class WhhKUpperCaseIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhKerningIcon],svg[whh-kerning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1001.523 639h-40q-15 0-31.5-10.5t-24.5-25.5l-30-92h-279l-30 92q-8 15-24.5 25.5t-31.5 10.5h-40q-15 0-20-10.5t3-25.5l186-567q8-15 24.5-25.5t31.5-10.5h81q15 0 31.5 10.5t24.5 25.5l186 567q8 15 3 25.5t-20 10.5m-266-552l-97 296h195zm-351 516q-8 15-24.5 25.5t-31.5 10.5h-81q-15 0-31.5-10.5t-24.5-25.5l-186-567q-8-15-3-25.5t20-10.5h40q15 0 31.5 10.5t24.5 25.5l170 516l169-516q8-15 24.5-25.5t31.5-10.5h41q15 0 19.5 10.5t-3.5 25.5zm-294 109q8-8 19-8t19 8v56h768v-56q8-8 19-8t19 8l82 66q8 9 8 21.5t-8 21.5l-82 65q-8 9-19 9t-19-9v-54h-768v54q-8 9-19 9t-19-9l-82-65q-8-9-8-21.5t8-21.5z"></svg:path>`,
})
export class WhhKerningIcon {
  readonly viewBox = input("0 0 1025 895")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhKeyIcon],svg[whh-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m955.48 852l-103 103q-69 69-167 69t-167.5-69t-69.5-167t69-167l38-38l-171-172l-83 83q-18 18-44 17t-45-20t-20-45t17-44l83-82l-101-101l-82 83q-18 18-44 17t-45-20t-20-45t17-44l82-82l-19-19q-17-18-16.5-44t19.5-45t45.5-20t43.5 17l478 477q69-51 156-44.5t149 68.5q69 69 69 167t-69 167m-91-243q-33-33-79.5-33t-79.5 33l-96 96q-33 33-33 79.5t33 79.5t80 33t80-33l95-95q33-33 33-80t-33-80"></svg:path>`,
})
export class WhhKeyIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhKeyboardIcon],svg[whh-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1008.32 512h-96q-7 0-11.5-4.5t-4.5-11.5v-96q0-7 4.5-11.5t11.5-4.5h96q7 0 11.5 4.5t4.5 11.5v96q0 7-4.5 11.5t-11.5 4.5m-64-192h-96q-7 0-11.5-4.5t-4.5-11.5v-96q0-7 4.5-11.5t11.5-4.5h96q7 0 11.5 4.5t4.5 11.5v96q0 7-4.5 11.5t-11.5 4.5m-64-192h-96q-7 0-11.5-4.5t-4.5-11.5V16q0-7 4.5-11.5t11.5-4.5h96q7 0 11.5 4.5t4.5 11.5v96q0 7-4.5 11.5t-11.5 4.5m-112 176q0 7-4.5 11.5t-11.5 4.5h-96q-7 0-11.5-4.5t-4.5-11.5v-96q0-7 4.5-11.5t11.5-4.5h96q7 0 11.5 4.5t4.5 11.5zm-80-176h-96q-7 0-11.5-4.5t-4.5-11.5V16q0-7 4.5-11.5t11.5-4.5h96q7 0 11.5 4.5t4.5 11.5v96q0 7-4.5 11.5t-11.5 4.5m-112 176q0 7-4.5 11.5t-11.5 4.5h-96q-7 0-11.5-4.5t-4.5-11.5v-96q0-7 4.5-11.5t11.5-4.5h96q7 0 11.5 4.5t4.5 11.5zm-80-176h-96q-7 0-11.5-4.5t-4.5-11.5V16q0-7 4.5-11.5t11.5-4.5h96q7 0 11.5 4.5t4.5 11.5v96q0 7-4.5 11.5t-11.5 4.5m-112 176q0 7-4.5 11.5t-11.5 4.5h-96q-7 0-11.5-4.5t-4.5-11.5v-96q0-7 4.5-11.5t11.5-4.5h96q7 0 11.5 4.5t4.5 11.5zm-80-176h-96q-7 0-11.5-4.5t-4.5-11.5V16q0-7 4.5-11.5t11.5-4.5h96q7 0 11.5 4.5t4.5 11.5v96q0 7-4.5 11.5t-11.5 4.5m-112 176q0 7-4.5 11.5t-11.5 4.5h-160q-7 0-11.5-4.5T.32 304v-96q0-7 4.5-11.5t11.5-4.5h160q7 0 11.5 4.5t4.5 11.5zm-80-176h-96q-7 0-11.5-4.5T.32 112V16q0-7 4.5-11.5T16.32 0h96q7 0 11.5 4.5t4.5 11.5v96q0 7-4.5 11.5t-11.5 4.5m-96 256h224q7 0 11.5 4.5t4.5 11.5v96q0 7-4.5 11.5t-11.5 4.5h-224q-7 0-11.5-4.5T.32 496v-96q0-7 4.5-11.5t11.5-4.5m0 384h96q7 0 11.5 4.5t4.5 11.5v96q0 7-4.5 11.5t-11.5 4.5h-96q-7 0-11.5-4.5T.32 880v-96q0-7 4.5-11.5t11.5-4.5m-16-80v-96q0-7 4.5-11.5t11.5-4.5h160q7 0 11.5 4.5t4.5 11.5v96q0 7-4.5 11.5t-11.5 4.5h-160q-7 0-11.5-4.5T.32 688m208 80h96q7 0 11.5 4.5t4.5 11.5v96q0 7-4.5 11.5t-11.5 4.5h-96q-7 0-11.5-4.5t-4.5-11.5v-96q0-7 4.5-11.5t11.5-4.5m48-80v-96q0-7 4.5-11.5t11.5-4.5h96q7 0 11.5 4.5t4.5 11.5v96q0 7-4.5 11.5t-11.5 4.5h-96q-7 0-11.5-4.5t-4.5-11.5m80-176q-7 0-11.5-4.5t-4.5-11.5v-96q0-7 4.5-11.5t11.5-4.5h96q7 0 11.5 4.5t4.5 11.5v96q0 7-4.5 11.5t-11.5 4.5zm240 80v96q0 7-4.5 11.5t-11.5 4.5h-96q-7 0-11.5-4.5t-4.5-11.5v-96q0-7 4.5-11.5t11.5-4.5h96q7 0 11.5 4.5t4.5 11.5m-48-208h96q7 0 11.5 4.5t4.5 11.5v96q0 7-4.5 11.5t-11.5 4.5h-96q-7 0-11.5-4.5t-4.5-11.5v-96q0-7 4.5-11.5t11.5-4.5m240 208v96q0 7-4.5 11.5t-11.5 4.5h-96q-7 0-11.5-4.5t-4.5-11.5v-96q0-7 4.5-11.5t11.5-4.5h96q7 0 11.5 4.5t4.5 11.5m-48-208h96q7 0 11.5 4.5t4.5 11.5v96q0 7-4.5 11.5t-11.5 4.5h-96q-7 0-11.5-4.5t-4.5-11.5v-96q0-7 4.5-11.5t11.5-4.5m-320 384h416q7 0 11.5 4.5t4.5 11.5v96q0 7-4.5 11.5t-11.5 4.5h-416q-7 0-11.5-4.5t-4.5-11.5v-96q0-7 4.5-11.5t11.5-4.5m432-176q0-7 4.5-11.5t11.5-4.5h96q7 0 11.5 4.5t4.5 11.5v96q0 7-4.5 11.5t-11.5 4.5h-96q-7 0-11.5-4.5t-4.5-11.5zm80 176h96q7 0 11.5 4.5t4.5 11.5v96q0 7-4.5 11.5t-11.5 4.5h-96q-7 0-11.5-4.5t-4.5-11.5v-96q0-7 4.5-11.5t11.5-4.5"></svg:path>`,
})
export class WhhKeyboardIcon {
  readonly viewBox = input("0 0 1025 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhKeyboardaltIcon],svg[whh-keyboardalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.857 640h-192q-13 0-22.5-9.5t-9.5-22.5V416q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5m-256-384h-192q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5m-96 160v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5V416q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5m-288-160h-192q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5m-96 160v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5T.857 608V416q0-13 9.5-22.5t22.5-9.5h192q13 0 22.5 9.5t9.5 22.5m-32 352h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5V800q0-13 9.5-22.5t22.5-9.5m384 0h192q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5t-22.5 9.5h-192q-13 0-22.5-9.5t-9.5-22.5V800q0-13 9.5-22.5t22.5-9.5"></svg:path>`,
})
export class WhhKeyboardaltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhKeyboarddeleteIcon],svg[whh-keyboarddelete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 641H320v-1q-25 1-43-17L18 364Q0 346 0 320.5T18 278L277 19q20-20 48-18h635q27 0 45.5 19t18.5 45v512q0 27-18.5 45.5T960 641m-77-440q12-13 12-30t-12-29.5t-29.5-12.5t-29.5 13L704 262L584 142q-13-13-30-13t-29.5 12.5T512 171t13 30l120 120l-120 120q-13 13-13 30t12.5 29t29.5 12t30-12l120-120l120 120q12 12 29.5 12t29.5-12t12-29t-12-30L763 321z"></svg:path>`,
})
export class WhhKeyboarddeleteIcon {
  readonly viewBox = input("0 0 1024 641")
  readonly width = input("1.6em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhKeyholeIcon],svg[whh-keyhole-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m363 488l149 472q0 27-18.5 45.5T448 1024H64q-26 0-45-18.5T0 960l149-472q-67-31-108-93.5T0 256Q0 150 75 75T256 0t181 75t75 181q0 76-41 138.5T363 488"></svg:path>`,
})
export class WhhKeyholeIcon {
  readonly viewBox = input("0 0 512 1024")
  readonly width = input("0.5em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhKidneyIcon],svg[whh-kidney-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 1024q-49 0-92.5-13.5t-81-42t-60-80T192 768q0-32 16-60.5t40-51t49-43.5t48-46t32-50q-113 16-181 85t-68 192q0 89 30 166H19Q0 881 0 798q0-122 45.5-212T170 445q-19-17-37-34q-58-57-101-124l98-95q33 73 96 134q31 30 60.5 42.5T355 383q-10-16-40-52.5T270.5 263T256 192q0-46 23.5-83.5T341 48t82.5-35.5T512 0q79 0 149.5 35.5t122 98t82 152.5T896 480q0 103-40.5 204t-104 174.5T607 978t-159 46"></svg:path>`,
})
export class WhhKidneyIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhKimaiIcon],svg[whh-kimai-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-960q-91 0-174 35.5T195 195T99.5 338T64 512t35.5 174T195 829t143 95.5T512 960t174-35.5T829 829t95.5-143T960 512t-35.5-174T829 195T686 99.5T512 64m256 448l119 83q-24 109-103.5 188T595 887l-83-119l-83 119q-109-25-188.5-104T137 595l119-83l-119-83q24-109 103.5-188T429 137l83 119l83-119q109 25 188.5 104T887 429zM384 336v352l288-176z"></svg:path>`,
})
export class WhhKimaiIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhKingIcon],svg[whh-king-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 832q26 0 45 19t19 45v64q0 27-19 45.5t-45 18.5H64q-26 0-45-18.5T0 960v-64q0-26 19-45t45-19q58 0 106-53t70-140q-101-6-170.5-79.5T0 384q0-106 75-181t181-75q32 0 64 8V64q0-26 19-45t45.5-19t45 19T448 64v72q32-8 64-8q106 0 181 75t75 181q0 102-69.5 175.5T528 639q22 87 70 140t106 53"></svg:path>`,
})
export class WhhKingIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhKissIcon],svg[whh-kiss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M608 568H416q-38 0-78-10.5T266.5 532t-71-41t-65-45.5t-67-52T0 344q38-29 95-84.5t98-97t94-74T384 56q39 0 72.5 17t55.5 47q22-30 55.5-47T640 56q44 0 97 32.5t94 74t98 97t95 84.5q-22 17-63.5 49.5t-67 52t-65 45.5t-71 41t-71.5 25.5t-78 10.5m-32-320h-96q-23 0-46.5 9t-59 27t-63.5 29h9q1 26 57 44.5T512 376t135-18.5t57-44.5h24q-24-10-55-28t-52.5-27.5T576 248"></svg:path>`,
})
export class WhhKissIcon {
  readonly viewBox = input("0 0 1024 614")
  readonly width = input("1.67em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhKiwiIcon],svg[whh-kiwi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 691v109q0 13-9.5 22.5T800 832h-64q-13 0-22.5-9.5T704 800t9.5-22.5T736 768h32v-64q-21 0-36.5-17.5T700 635q-14 47-60 63v102q0 13-9.5 22.5T608 832h-64q-13 0-22.5-9.5T512 800t9.5-22.5T544 768h32v-87q-4-8-10.5-27.5t-15-36.5t-20.5-28q-148-50-255-189q-74 48-147 48l-6-1q-31 52-44.5 93T64 640q0 13-11 38.5T32 704q-9 0-20.5-24.5T0 640q0-174 66-312q-2-26-2-72q0-53 37.5-90.5T192 128q32 0 73 14q59-66 153-104T608 0q59 0 118 15t112.5 45t95 71t66 98.5T1024 352q0 118-56 212.5T832 691"></svg:path>`,
})
export class WhhKiwiIcon {
  readonly viewBox = input("0 0 1024 832")
  readonly width = input("1.24em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhKiwifruitIcon],svg[whh-kiwifruit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-960q-91 0-174 35.5T195 195T99.5 338T64 512t35.5 174T195 829t143 95.5T512 960t174-35.5T829 829t95.5-143T960 512t-35.5-174T829 195T686 99.5T512 64m352 448q-13 0-22.5-9.5T832 480t9.5-22.5T864 448t22.5 9.5T896 480t-9.5 22.5T864 512m-64-128q-13 0-22.5-9.5T768 352t9.5-22.5T800 320t22.5 9.5T832 352t-9.5 22.5T800 384m-64 192q-13 0-22.5-9.5T704 544t9.5-22.5T736 512t22.5 9.5T768 544t-9.5 22.5T736 576M512 704q-87 0-145-68q-8 4-15 4q-13 0-22.5-9.5T320 608q0-16 14-26q-14-34-14-70q0-87 68-145q-4-8-4-15q0-13 9.5-22.5T416 320q16 0 26 14q34-14 70-14q87 0 145 68q8-4 15-4q13 0 22.5 9.5T704 416q0 16-14 26q14 34 14 70q0 80-56 136t-136 56m0-320q-53 0-90.5 37.5T384 512t37.5 90.5T512 640t90.5-37.5T640 512t-37.5-90.5T512 384m160-64q-13 0-22.5-9.5T640 288t9.5-22.5T672 256t22.5 9.5T704 288t-9.5 22.5T672 320m-128 0q-13 0-22.5-9.5T512 288t9.5-22.5T544 256t22.5 9.5T576 288t-9.5 22.5T544 320m-128-64q-13 0-22.5-9.5T384 224t9.5-22.5T416 192t22.5 9.5T448 224t-9.5 22.5T416 256M288 448q-13 0-22.5-9.5T256 416t9.5-22.5T288 384t22.5 9.5T320 416t-9.5 22.5T288 448m0-128q-13 0-22.5-9.5T256 288t9.5-22.5T288 256t22.5 9.5T320 288t-9.5 22.5T288 320m-64 192q-13 0-22.5-9.5T192 480t9.5-22.5T224 448t22.5 9.5T256 480t-9.5 22.5T224 512m0 64q13 0 22.5 9.5T256 608t-9.5 22.5T224 640t-22.5-9.5T192 608t9.5-22.5T224 576m128 128q13 0 22.5 9.5T384 736t-9.5 22.5T352 768t-22.5-9.5T320 736t9.5-22.5T352 704m64 64q13 0 22.5 9.5T448 800t-9.5 22.5T416 832t-22.5-9.5T384 800t9.5-22.5T416 768m128-64q13 0 22.5 9.5T576 736t-9.5 22.5T544 768t-22.5-9.5T512 736t9.5-22.5T544 704m128-64q13 0 22.5 9.5T704 672t-9.5 22.5T672 704t-22.5-9.5T640 672t9.5-22.5T672 640m0 128q13 0 22.5 9.5T704 800t-9.5 22.5T672 832t-22.5-9.5T640 800t9.5-22.5T672 768m128-192q13 0 22.5 9.5T832 608t-9.5 22.5T800 640t-22.5-9.5T768 608t9.5-22.5T800 576"></svg:path>`,
})
export class WhhKiwifruitIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhKnifeIcon],svg[whh-knife-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M990.824 989.5q-25.5 25.5-58.5 32t-70.5-9.5t-72.5-54l-224-263l-30 28q-13 12-31 12t-30-12q-63-57-120.5-117.5t-104.5-117t-87.5-111.5t-70.5-103.5t-51-92t-31-77t-9-57.5t13.5-35.5t31-11.5t30.5 11l372 343l511 434q38 34 54.5 71.5t10 71t-32 59"></svg:path>`,
})
export class WhhKnifeIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhKnightIcon],svg[whh-knight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M705 832q26 0 45 19t19 45v64q0 27-19 45.5t-45 18.5H65q-27 0-45.5-18.5T1 960v-64q0-26 18.5-45T65 832q52 0 96-43t70-116.5T257 512q0-3-.5-8t-.5-7l-95 81q-52 94-132 45Q2 607 .5 560.5t12-92.5T45 388L225 62q15-27 40.5-43.5T321 0h32q129 0 224 82.5T720.5 309T769 640q-131 0-192 96q56 96 128 96M321 208q0-7-5-11.5t-11-4.5h-32q-7 0-11.5 4.5T257 208v32q0 7 4.5 11.5T273 256h32q6 0 11-4.5t5-11.5z"></svg:path>`,
})
export class WhhKnightIcon {
  readonly viewBox = input("0 0 769 1024")
  readonly width = input("0.76em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhKnobIcon],svg[whh-knob-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 896L0 704L768 0l192 64l64 192l-704 768zm503-448l265-265l-55-55l-265 265zM0 512q0-104 40.5-199t109-163.5T313 40.5T512 0q80 0 157 25L10 613Q0 562 0 512m1024 0q0 104-40.5 199t-109 163.5t-163.5 109t-199 40.5q-51 0-101-10l588-659q25 77 25 157"></svg:path>`,
})
export class WhhKnobIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhKoalaIcon],svg[whh-koala-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 704q0 48-17.5 104T832 912t-71.5 80t-88.5 32h-96q-20 0-41.5-16T491 976t-43-16q-57 0-113-16t-83-32l-28-16q-18-9-25-23t-7-41q0-25 16-44.5t48-19.5q4 0 16-3q-55-35-99-100t-71-152q-5-1-6-1q-28 0-62-29.5T0 416q0-32 18.5-57T67 325q-3-38-3-69q0-44 5-93l61 30q-2 35-2 63q0 45 5 91q3 5 8.5 13t10 14t8.5 10q24 24 69.5 44t90.5 20q60 0 63-28q-52-31-87.5-85T257 233q-65-27-65-73q0-71 37-115.5T320 0q50 0 92 72q36-8 68-8q26 0 59 6q18-31 44.5-50.5T640 0q53 0 90.5 37.5T768 128q0 56-64 97q-1 59-49 124q12 12 45.5 37t63.5 51t62 63t51 89.5T896 704M175 532q28 75 69.5 126t90.5 69q21-22 35-47t14-40q0-22-65-52.5T175 532"></svg:path>`,
})
export class WhhKoalaIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhKohanaIcon],svg[whh-kohana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M738 352q-6 31-32 54.5T654.5 439t-44.5 9h-96q0 24 20 44t44 20h128l-58 480q-2 13-13 22.5t-24 9.5H414q-14 0-22.5-9.5T385 992l58-490q-4-20-11-31.5t-18-16t-18.5-5.5t-23.5-1q-9 0-15.5 1.5t-17 11T319 489l-55 375q-2 13-13 22.5t-24 9.5H30q-14 0-22.5-9.5T1 864L123 32q2-13 13-22.5T161 0h197q14 0 22 9.5t6 22.5l-33 224h1q0 13 1 22t3.5 20t9.5 16.5t18 5.5q44 0 67.5-19t28.5-45l25-160q2-13 13-22.5t25-9.5h197q14 0 22 9.5t6 22.5z"></svg:path>`,
})
export class WhhKohanaIcon {
  readonly viewBox = input("0 0 771 1024")
  readonly width = input("0.76em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLIcon],svg[whh-l-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 1024H64q-26 0-45-18.5T0 960V64q0-26 19-45T64.5 0t45 18.5T128 64v800q0 13 9.5 22.5T160 896h544q27 0 45.5 19t18.5 45.5t-18.5 45T704 1024"></svg:path>`,
})
export class WhhLIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLUpperCaseIcon],svg[whh-l-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 1024H64q-26 0-45-18.5T0 960V64q0-26 19-45T64.5 0t45 18.5T128 64v800q0 13 9.5 22.5T160 896h544q27 0 45.5 19t18.5 45.5t-18.5 45T704 1024"></svg:path>`,
})
export class WhhLUpperCaseIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLampIcon],svg[whh-lamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M859 384H575q0 43 20 97t44 97.5t44 96.5t20 93q0 57-23.5 107.5T615 962q10 2 17 10.5t7 19.5q0 13-9.5 22.5T607 1024H287q-13 0-22.5-9.5T255 992q0-11 7-19.5t18-10.5q-42-36-65.5-86.5T191 768q0-41 20-94t44-96.5t44-97t20-96.5H127v288q0 13-9.5 22.5T95 704t-22.5-9.5T63 672V384H35q-20 0-29.5-14T3 337L246 22q3-9 15-15.5T287 0h330q13 0 25 6.5T657 22l236 315q6 19-4 33t-30 14"></svg:path>`,
})
export class WhhLampIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLampaltIcon],svg[whh-lampalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 576H576v320h160q13 0 22.5 9.5T768 928v32h32q13 0 22.5 9.5T832 992t-9.5 22.5t-22.5 9.5H224q-13 0-22.5-9.5T192 992t9.5-22.5T224 960h32v-32q0-13 9.5-22.5T288 896h160V576H256v160q0 13-9.5 22.5T224 768t-22.5-9.5T192 736V576H32q-13 0-22.5-9.5T0 544q0-120 59-224.5T220.5 149T448 68v-4q0-27 19-45.5T512.5 0t45 18.5T576 64v4q125 15 227.5 81T965 319.5t59 224.5q0 13-9.5 22.5T992 576M416 128q-30 0-67 13t-76 40.5t-71.5 64.5t-53 90T128 448q5-10 14.5-27.5T183 359t63-78t78.5-61.5T416 192q13 0 22.5-9.5T448 160t-9.5-22.5T416 128"></svg:path>`,
})
export class WhhLampaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLanIcon],svg[whh-lan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.417 768h-64v64q0 27-19 45.5t-45 18.5h-64v64q0 27-18.5 45.5t-45.5 18.5h-320q-26 0-45-18.5t-19-45.5v-64h-64q-27 0-45.5-18.5t-18.5-45.5v-64h-64q-26 0-45-18.5t-19-45.5V64q0-26 19-45t45-19h832q27 0 45.5 19t18.5 45v640q0 27-18.5 45.5t-45.5 18.5m0-608q0-13-9.5-22.5t-22.5-9.5h-96v96q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5v-96h-64v96q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5v-96h-64v96q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5v-96h-64v96q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5v-96h-64v96q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5v-96h-96q-13 0-22.5 9.5t-9.5 22.5v448q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h256q13 0 22.5-9.5t9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5-9.5t9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5-9.5t9.5-22.5z"></svg:path>`,
})
export class WhhLanIcon {
  readonly viewBox = input("0 0 961 1024")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLanguageIcon],svg[whh-language-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.56 512q0-104-51.5-192.5t-140-140t-192.5-51.5q-97 0-180 45t-136 122l60 60q1 30-18 29l-202-2q-12 0-23.5-11.5T1.56 348l-1-202q-1-19 28-18l76 75q71-94 178-148.5t230-54.5q104 0 199 40.5t163.5 109t109 163.5t40.5 199zm-512 224q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5V384q0-53 37.5-90.5t90.5-37.5h128q53 0 90.5 37.5t37.5 90.5v352q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5V592q0-7-5-11.5t-11-4.5h-224q-7 0-11.5 4.5t-4.5 11.5zm16-224h224q6 0 11-4.5t5-11.5V384q0-27-19-45.5t-45-18.5h-128q-27 0-45.5 18.5t-18.5 45.5v112q0 7 4.5 11.5t11.5 4.5m112 384q97 0 180-45t136-122l-60-60q-1-30 18-29l202 2q12 0 23.5 11.5t11.5 22.5l1 201q1 20-28 19l-76-75q-71 94-178 148.5t-230 54.5q-104 0-199-40.5t-163.5-109t-109-163.5T.56 512h128q0 104 51.5 192.5t140 140t192.5 51.5"></svg:path>`,
})
export class WhhLanguageIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLaptopIcon],svg[whh-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 832H64q-26 0-45-18.5t-19-45T19 723t45-19h896q26 0 45 19t19 45.5t-19 45t-45 18.5m-64-192H128q-26 0-45-18.5T64 576V64q0-26 19-45t45-19h768q27 0 45.5 19T960 64v512q0 27-18.5 45.5T896 640m0-544q0-13-9.5-22.5T864 64H160q-13 0-22.5 9.5T128 96v384q0 13 9.5 22.5T160 512h704q13 0 22.5-9.5T896 480zm-704 31h384L192 448z"></svg:path>`,
})
export class WhhLaptopIcon {
  readonly viewBox = input("0 0 1024 832")
  readonly width = input("1.24em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLassoIcon],svg[whh-lasso-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M638 753q-5 29-25.5 50.5T563 830l-119 178q-7 12-20 15.5t-24-3t-14.5-20T388 975l106-157q-31-19-41-53q-93-10-178-51t-144.5-98t-95-127T0 352q0-95 68.5-176T255 47.5T512 0t257 47.5T955.5 176t68.5 176q0 82-49.5 164.5T835.5 663T638 753M512 64q-122 0-225 38.5t-163 105T64 352q0 55 30.5 113t82 106.5t125 84T455 701q11-27 35-44t54-17q26 0 48.5 13.5T627 690q141-35 237-135t96-203q0-78-60-144.5t-163-105T512 64"></svg:path>`,
})
export class WhhLassoIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLastfmIcon],svg[whh-lastfm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M800 64q-40 0-68 28t-28 68q0 38 42.5 67t85.5 29q80 0 136 56t56 136t-56 136t-136 56q-49 0-91-26.5T672 544q-49-129-96-224q-22-43-46-83t-37-59l-13-18q-9-29-60-62.5T320 64q-106 0-181 75T64 320t75 181t181 75t181-75l45 45q-44 45-102.5 69.5T320 640q-87 0-160.5-43T43 480.5T0 320t43-160.5T159.5 43T320 0q65 0 132 39.5t92 88.5q46 60 96 160q20 41 44 97t38 91l14 36q40 64 96 64q53 0 90.5-37.5T960 448t-37.5-90.5T832 320q-69 0-130.5-48T640 160q0-66 47-113T800 0q69 0 114.5 39t45.5 89h-64q-11-26-39-45t-57-19"></svg:path>`,
})
export class WhhLastfmIcon {
  readonly viewBox = input("0 0 1024 640")
  readonly width = input("1.6em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLaughIcon],svg[whh-laugh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5M288 256q-40 0-68 37.5T192 384t28 90.5t68 37.5t68-37.5t28-90.5t-28-90.5t-68-37.5m448 0q-40 0-68 37.5T640 384t28 90.5t68 37.5t68-37.5t28-90.5t-28-90.5t-68-37.5m64 384H224q-13 0-22.5 9.5T192 672q40 113 117.5 168.5T511 896t202.5-55.5T832 672q0-13-9.5-22.5T800 640M383 800q25-96 129-96q103 0 127 96q-15 15-38.5 22.5T560 831t-49 1t-49-1t-40.5-8.5T383 800"></svg:path>`,
})
export class WhhLaughIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLaunchIcon],svg[whh-launch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m733 1017l-93-249h-23q-8 23-24 66t-23 62H448v64q0 27-19 45.5t-45.5 18.5t-45-19t-18.5-45v-64H197q-6-19-22-62t-24-66h-23l-93 249Q0 999 0 960V768q0-27 51-77.5t77-50.5q0-136 32.5-267T252 142T384 0q73 42 132 142t91.5 231T640 640q26 0 77 50.5t51 77.5v192q0 39-35 57M384 256q-53 0-90.5 37.5T256 384t37.5 90.5T384 512t90.5-37.5T512 384t-37.5-90.5T384 256"></svg:path>`,
})
export class WhhLaunchIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLawIcon],svg[whh-law-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1006 1006q-18 18-43 18t-43-18L471 557L366 662v1q18 18 18 43.5T366 750t-43.5 18t-43.5-18L18 489Q0 471 0 445.5T18 402t43.5-18t43.5 18l1 1l297-297l-1-1q-18-18-18-43.5T402 18t43.5-18T489 18l261 261q18 18 18 43.5T750 366t-43.5 18t-43.5-18l-1-1l-105 105l449 450q18 18 18 43t-18 43M337 250l-86 87l181 181l86-86z"></svg:path>`,
})
export class WhhLawIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLayerorderIcon],svg[whh-layerorder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M985 559L607 748q-40 20-95 20t-95-20L39 559Q0 539 0 511.5T39 465l98-49l280 140q40 20 95 20t95-20l280-140l98 49q39 19 39 47t-39 47m0-256L607 492q-40 20-95 20t-95-20L39 303Q0 283 0 255.5T39 208L417 19q40-19 95-19t95 19l378 189q39 20 39 47.5T985 303M512 64L64 256l448 192l448-192zM39 721l98-49l70 35l-143 61l448 192l448-192l-143-61l70-35l98 49q39 19 39 47t-39 47l-378 189q-40 20-95 20t-95-20L39 815Q0 796 0 768t39-47"></svg:path>`,
})
export class WhhLayerorderIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLayerorderdownIcon],svg[whh-layerorderdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M985 559L607 748q-40 20-95 20t-95-20L39 559Q0 539 0 511.5T39 465l98-49l70 35l-143 61l448 192l448-192l-143-61l70-35l98 49q39 19 39 47t-39 47m0-256L607 492q-40 20-95 20t-95-20L39 303Q0 283 0 255.5T39 208L417 19q40-19 95-19t95 19l378 189q39 20 39 47.5T985 303M512 64L64 256l448 192l448-192zM39 721l98-49l280 140q40 20 95 20t95-20l280-140l98 49q39 19 39 47t-39 47l-378 189q-40 20-95 20t-95-20L39 815Q0 796 0 768t39-47"></svg:path>`,
})
export class WhhLayerorderdownIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLayerorderupIcon],svg[whh-layerorderup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M985 559L607 748q-40 20-95 20t-95-20L39 559Q0 539 0 511.5T39 464l98-48l70 35l-143 61l448 192l448-192l-143-61l70-35l98 48q39 20 39 47.5T985 559m0-256L607 492q-40 20-95 20t-95-20L39 303Q0 283 0 255.5T39 208L417 19q40-19 95-19t95 19l378 189q39 20 39 47.5T985 303M39 721l98-49l70 35l-143 61l448 192l448-192l-143-61l70-35l98 49q39 19 39 47t-39 47l-378 189q-40 20-95 20t-95-20L39 815Q0 796 0 768t39-47"></svg:path>`,
})
export class WhhLayerorderupIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLayersIcon],svg[whh-layers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M985 559L607 747q-40 20-95 20t-95-20L39 559Q0 539 0 511.5T39 464l34-17l344 173q40 19 95 19t95-19l344-173l34 17q39 20 39 47.5T985 559m0-256L607 492q-40 19-95 19t-95-19L39 303Q0 283 0 255.5T39 208L417 19q40-19 95-19t95 19l378 189q39 20 39 47.5T985 303M39 720l34-17l344 172q40 20 95 20t95-20l344-172l34 17q39 20 39 47.5T985 815l-378 188q-40 20-95 20t-95-20L39 815Q0 795 0 767.5T39 720"></svg:path>`,
})
export class WhhLayersIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLayersaltIcon],svg[whh-layersalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M985 378L607 615q-40 24-95 24t-95-24L39 378Q0 354 0 319.5T39 260L417 24q40-24 95-24t95 24l378 236q39 25 39 59.5T985 378M39 644l111-69l267 168q40 24 95 24t95-24l267-168l111 69q39 25 39 59.5T985 762L607 999q-40 24-95 24t-95-24L39 762Q0 738 0 703.5T39 644"></svg:path>`,
})
export class WhhLayersaltIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLayersthreeIcon],svg[whh-layersthree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 704H64q-27 0-45.5-18.5T0 640q95-104 171-192h93L96 640h832L760 448h93q34 40 77 88t68 76l26 28q0 27-18.5 45.5T960 704m0-320H64q-27 0-45.5-18.5T0 320Q150 156 224 64q12-15 36-31t42-25l18-8h384q7 3 18.5 8T760 30t40 34q33 42 89 106t96 107l39 43q0 27-18.5 45.5T960 384M704 64H320L96 320h832zM264 768L96 960h832L760 768h93q77 89 171 192q0 26-18.5 45t-45.5 19H64q-27 0-45.5-19T0 960q95-104 171-192z"></svg:path>`,
})
export class WhhLayersthreeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLeatherIcon],svg[whh-leather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 896q-88 0-140 38.5t-52 89.5H448q0-51-52-89.5T256 896q-25 0-65.5 21T128 960L0 832q71-37 131.5-130T192 512q0-147-128-256l64-128q7 7 19.5 17.5T194 174t62 18q59 0 104-30t66.5-73T448 0h128q0 46 21.5 89t66.5 73t104 30q28 0 60-16t50-32l18-16l64 128Q832 365 832 512q0 97 60.5 190T1024 832L896 960q-26-25-64-44.5T768 896"></svg:path>`,
})
export class WhhLeatherIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLeechprotectIcon],svg[whh-leechprotect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 896H192q-53 0-90.5-37.5T64 768V640q-26 0-45-19T0 576V320q0-27 19-45.5T64 256V128q0-53 37.5-90.5T192 0h704q53 0 90.5 37.5T1024 128v640q0 53-37.5 90.5T896 896m64-704q0-27-18.5-45.5T896 128H192q-26 0-45 18.5T128 192v64h64v-32q0-13 9.5-22.5T224 192h64q13 0 22.5 9.5T320 224v32h64v-32q0-13 9.5-22.5T416 192h64q13 0 22.5 9.5T512 224v32h64v-32q0-13 9.5-22.5T608 192h64q13 0 22.5 9.5T704 224v32h64v-32q0-13 9.5-22.5T800 192h64q13 0 22.5 9.5T896 224v32h64zm0 160q0-13-9.5-22.5T928 320H96q-13 0-22.5 9.5T64 352v192q0 13 9.5 22.5T96 576h832q13 0 22.5-9.5T960 544zm0 288h-64v32q0 13-9.5 22.5T864 704h-64q-13 0-22.5-9.5T768 672v-32h-64v32q0 13-9.5 22.5T672 704h-64q-13 0-22.5-9.5T576 672v-32h-64v32q0 13-9.5 22.5T480 704h-64q-13 0-22.5-9.5T384 672v-32h-64v32q0 13-9.5 22.5T288 704h-64q-13 0-22.5-9.5T192 672v-32h-64v64q0 27 19 45.5t45 18.5h704q27 0 45.5-18.5T960 704zM832.5 512q-26.5 0-45.5-19t-19-45.5t19-45t45.5-18.5t45 18.5t18.5 45t-18.5 45.5t-45 19m-192 0q-26.5 0-45.5-19t-19-45.5t19-45t45.5-18.5t45 18.5t18.5 45t-18.5 45.5t-45 19m-192 0q-26.5 0-45.5-19t-19-45.5t19-45t45.5-18.5t45 18.5t18.5 45t-18.5 45.5t-45 19m-192 0q-26.5 0-45.5-19t-19-45.5t19-45t45.5-18.5t45 18.5t18.5 45t-18.5 45.5t-45 19"></svg:path>`,
})
export class WhhLeechprotectIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLeftborderIcon],svg[whh-leftborder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 960v-64h64v64zm0-192h64v64h-64zm0-128h64v64h-64zm0-128h64v64h-64zm-64-64h64v64h-64zm128-64v64h-64v-64zm-64-128h64v64h-64zm0-128h64v64h-64zm0-128h64v64h-64zM768 0h64v64h-64zm0 512h-64v-64h64zM640 0h64v64h-64zm0 512h-64v-64h64zM448 128V64h64v64zM384 0h64v64h-64zm128 0h64v64h-64zM384 512h-64v-64h64zM256 0h64v64h-64zm0 512h-64v-64h64zM128 0h64v64h-64zm0 512H64v448H0V0h64v448h64zm64 448h-64v-64h64zm128 0h-64v-64h64zm192-192h-64v-64h64zm0-128h-64v-64h64zm0-128h-64v-64h64zm-64-320h64v64h-64zm64 192h-64v-64h64zm0 448v64h-64v-64zm64 128h-64v-64h64zm-128 0h-64v-64h64zm256 0h-64v-64h64zm128 0h-64v-64h64z"></svg:path>`,
})
export class WhhLeftborderIcon {
  readonly viewBox = input("0 0 960 960")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLegacyfilemanagerIcon],svg[whh-legacyfilemanager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.38 896h-768q-53 0-90.5-37.5T.38 768V256q0-26 18.5-45t45.5-19h480l46-85q7-18 28-30.5t44-12.5h240q24 0 45 12.5t28 30.5l49 85v576q0 53-37.5 90.5t-90.5 37.5m0-640q0-26-19-45t-45-19h-128q-27 0-45.5 19t-18.5 45.5t-28 45t-68 18.5h-384q-13 0-22.5 9.5t-9.5 22.5v384q0 13 9.5 22.5t22.5 9.5h704q13 0 22.5-9.5t9.5-22.5zm-850-212q7-19 28-31.5t44-12.5h240q24 0 45 12.5t29 31.5l48 84H.38z"></svg:path>`,
})
export class WhhLegacyfilemanagerIcon {
  readonly viewBox = input("0 0 1025 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLegoIcon],svg[whh-lego-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 704V256q0-27 18.5-45.5T64 192h896q26 0 45 18.5t19 45.5v448zm640-576V64q0-26 18.5-45T704 0h128q26 0 45 19t19 45v64zm-512 0V64q0-26 18.5-45T192 0h128q27 0 45.5 19T384 64v64z"></svg:path>`,
})
export class WhhLegoIcon {
  readonly viewBox = input("0 0 1024 704")
  readonly width = input("1.46em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLemonIcon],svg[whh-lemon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M819 820q-71 72-155.5 120.5t-168 69t-165 14T183 982q-6 2-28.5 13.5T122 1011t-27 9t-31 5q-25 0-44.5-20.5T0 961q0-8 1-16.5T5.5 926t5-16.5t7-19T25 874t9-18.5t8-16.5Q8 772 2 691.5T16.5 528T85 361t120-156q71-71 155.5-119.5t168-69t165-14T841 44q6-2 28.5-13.5T902 15t27-9t31-5q25 0 44.5 20.5T1024 65q0 8-1 16.5t-4 18.5t-5 16.5t-7.5 19T999 152t-9 18.5t-8 16.5q34 67 40 147.5T1007.5 498T939 665T819 820"></svg:path>`,
})
export class WhhLemonIcon {
  readonly viewBox = input("0 0 1024 1026")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLensIcon],svg[whh-lens-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M911 833L696 461q-12-44-42-77h353q17 65 17 128q0 180-113 321M512 320q-15 0-30 2L656 21q112 33 199.5 112T986 320zM333 443L159 142q70-67 161-104.5T512 0q39 0 79 6L377 377q-30 29-44 66m36 196H16Q0 577 0 512q0-180 113-321l214 370q12 43 42 78m143 65q11 0 30-3l-174 302q-113-33-200-112T37 703h469q1 0 3 .5t3 .5m179-124l174 302q-70 67-161 104.5T512 1024q-36 0-79-7l213-368q29-28 45-69"></svg:path>`,
})
export class WhhLensIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLifeemptyIcon],svg[whh-lifeempty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 288q0 58-35 154.5T895 629q-35 55-55.5 86.5t-53.5 79t-56 75.5t-53.5 61t-55.5 51t-53.5 30t-55.5 12t-55.5-12.5T403 981t-56-51.5t-54-61.5t-56-75.5t-53.5-78.5t-54.5-85q-62-95-95.5-188.5T0 288Q0 169 84.5 84.5T288 0q67 0 125 28.5t99 78.5q40-50 98.5-78.5T736 0q119 0 203.5 84.5T1024 288M736 128q-41 0-85 28.5T576 224q-3 4-11.5 18t-14 22.5t-16.5 16t-22 7.5t-22-7.5t-16.5-15.5t-14.5-22.5t-11-18.5q-31-39-75-67.5T288 128q-66 0-113 47t-47 113q-5 61 32 150t96 176q18 27 44.5 69t43 67.5T383 807t41.5 48t41.5 29t46 12t46-11.5t41-28.5t41-48t39.5-56.5T723 684l45-70q59-87 96-176t32-150q0-66-47-113t-113-47M0 288"></svg:path>`,
})
export class WhhLifeemptyIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLifefullIcon],svg[whh-lifefull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 288q0 58-35 154.5T895 629q-35 55-55.5 86.5t-53.5 79t-56 75.5t-53.5 61t-55.5 51t-53.5 30t-55.5 12t-55.5-12.5T403 981t-56-51.5t-54-61.5t-56-75.5t-53.5-78.5t-54.5-85q-62-95-95.5-188.5T0 288Q0 169 84.5 84.5T288 0q67 0 125 28.5t99 78.5q40-50 98.5-78.5T736 0q119 0 203.5 84.5T1024 288"></svg:path>`,
})
export class WhhLifefullIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLifehackerIcon],svg[whh-lifehacker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M672 1024h-64q-13 0-22.5-9.5T576 992V480q0-45-36.5-70.5T448 384q-41 0-64 14v594q0 13-9.5 22.5T352 1024h-64q-13 0-22.5-9.5T256 992V32q0-13 9.5-22.5T288 0h64q13 0 22.5 9.5T384 32v237q24-13 64-13q107 0 181.5 64.5T704 480v512q0 13-9.5 22.5T672 1024m-512 0H32q-13 0-22.5-9.5T0 992V32Q0 19 9.5 9.5T32 0h128q13 0 22.5 9.5T192 32v960q0 13-9.5 22.5T160 1024"></svg:path>`,
})
export class WhhLifehackerIcon {
  readonly viewBox = input("0 0 704 1024")
  readonly width = input("0.69em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLifehalfIcon],svg[whh-lifehalf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 288q0 58-35 154.5T895 629q-35 55-55.5 86.5t-53.5 79t-56 75.5t-53.5 61t-55.5 51t-53.5 30t-55.5 12t-55.5-12.5T403 981t-56-51.5t-54-61.5t-56-75.5t-53.5-78.5t-54.5-85q-62-95-95.5-188.5T0 288Q0 169 84.5 84.5T288 0q67 0 125 28.5t99 78.5q40-50 98.5-78.5T736 0q119 0 203.5 84.5T1024 288M736 128q-41 0-85 28.5T576 224q-3 4-11.5 18t-14 22.5t-16.5 16t-22 7.5v608q23 0 46-11.5t41-28.5t41-48t39.5-56.5T723 684l45-70q59-87 96-176t32-150q0-66-47-113t-113-47"></svg:path>`,
})
export class WhhLifehalfIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLifepreserverIcon],svg[whh-lifepreserver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024.625 512q0 105-42 202q42 53 42 118q0 80-56 136t-136 56q-65 0-118-42q-97 42-202 42t-202-42q-53 42-118 42q-80 0-136-56t-56-136q0-65 42-118q-42-97-42-202t42-202q-42-53-42-118q0-79 56.5-135.5T192.625 0q65 0 118 42q97-42 202-42t202 42q53-42 118-42q80 0 136 56.5t56 135.5q0 65-42 118q42 97 42 202m-832 448q27 0 53-12q-105-64-169-169q-12 26-12 53q0 53 37.5 90.5t90.5 37.5m0-896q-53 0-90.5 37.5t-37.5 90.5q0 27 12 53q64-105 169-169q-26-12-53-12m99 320h-208q-19 63-19 128t19 128h208q-35-60-35-128t35-128m541 576q53 0 90.5-37.5t37.5-90.5q0-27-12-53q-64 105-169 169q26 12 53 12m-99-320h208q19-63 19-128t-19-128h-208q35 60 35 128t-35 128m-349 192v109q63 19 128 19t128-19V733q-60 35-128 35t-128-35zm-64-320q0 80 56.5 136t136 56t135.5-56t56-136t-56-136t-135.5-56t-136 56t-56.5 136m320-429q-63-19-128-19t-128 19v208q60-35 128-35t128 35zm320 109q0-53-37.5-90.5t-90.5-37.5q-27 0-53 12q105 64 169 169q12-26 12-53"></svg:path>`,
})
export class WhhLifepreserverIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLighthouseIcon],svg[whh-lighthouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m768 192l256-128v320L768 256zm-64 128q0 23-15 41t-38 22l12 65H361l12-65q-23-4-38-22t-15-41V128h-64L512 0l256 128h-64zM512 160q0-13-9.5-22.5T480 128h-64q-13 0-22.5 9.5T384 160v128q0 13 9.5 22.5T416 320h64q13 0 22.5-9.5T512 288zm128 0q0-13-9.5-22.5T608 128t-22.5 9.5T576 160v128q0 13 9.5 22.5T608 320t22.5-9.5T640 288zm-384 96L0 384V64l256 128zm419 256l11 64H337l12-64zm35 192H314l12-64h372zM287 852l16-84h418l16 84q129 24 208 70t79 102H0q0-56 79-102t208-70"></svg:path>`,
})
export class WhhLighthouseIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLightningIcon],svg[whh-lightning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m576 576l448 448l-832-384l256-192L0 0l832 384z"></svg:path>`,
})
export class WhhLightningIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLightningaltIcon],svg[whh-lightningalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 1024L620 620L384 768L0 256L320 0l232 440l216-120z"></svg:path>`,
})
export class WhhLightningaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLightoffIcon],svg[whh-lightoff-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1010.01 1010.5q-14.5 14.5-34.5 14.5t-35-14l-926-927q-14-14-14-34.5t14.5-35T49.51 0t35 15l926 926q14 14 14 34.5t-14.5 35M668.51 515q72-82 108-144t20-78.5t-78 20t-144 108.5l-47-47q56-50 106.5-87.5t82.5-54.5t56-27t34-11l11-1q53 0 98.5 26t45.5 70v320q0 64-54 145zm-247 60q-72 82-108 143.5t-20 78t78-19.5t143-109l240 240q-81 53-145 53h-321q-44 0-70-45.5t-26-98.5q0-4 1.5-11t11-33t26.5-56.5t54.5-81.5t88.5-107z"></svg:path>`,
})
export class WhhLightoffIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLightonIcon],svg[whh-lighton-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M609 961H289q-44 0-70-45.5T193 817q0-5 1.5-14t15.5-42t38-72t76.5-103.5T449 449t136-124.5T689.5 248t71-38t43.5-15l13-2q53 0 98.5 26t45.5 70v320q0 51-35.5 114T838 838t-115 87.5T609 961m187.5-668Q776 273 688 332T496 495.5T333 688t-39 108.5t108-39T594 594t163.5-192.5t39-108.5M614 250.5q-19 10.5-40 5T542 232L488 76q-11-18-5.5-38T507 7.5t40.5-5T580 26l54 157q11 17 5 37t-25 30.5M301 370L143 213q-14-15-14-35t14.5-34.5T178 129t35 14l157 158q14 14 14 34.5t-14 35t-34.5 14.5t-34.5-15m-50.5 244Q240 633 220 639t-37-5L26 580Q8 569 2.5 547.5t5-40.5T38 482.5t38 5.5l156 54q18 11 23.5 32t-5 40"></svg:path>`,
})
export class WhhLightonIcon {
  readonly viewBox = input("0 0 961 961")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLikeIcon],svg[whh-like-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 640h-64q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19h-64q27 0 45.5 18.5T896 960t-18.5 45.5T832 1024H320q-32 0-128-32T64 960q-28 0-46-16.5T0 896V640q0-35 18.5-79T60 513q1-1 4-1q54 0 105-14.5t85.5-34t64.5-44t44-40.5t21-27q20-30 56.5-66.5t64.5-62t49.5-60T576 96V64q0-27 19-45.5T640 0t45 18.5T704 64v128q0 43-10 74.5T672 312t-22 32.5t-10 39.5q0 18 10 31t24 19t28 9.5t24 3.5l10 1q117 0 202.5 39.5T1024 576q0 26-18.5 45T960 640"></svg:path>`,
})
export class WhhLikeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLimesurveyIcon],svg[whh-limesurvey-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1020 39q0 2-1 7q-7 23-12.5 39T986 133t-33.5 56t-50 52t-70.5 47q-53 26-280 31q88 125 88 321q0 66-23 122t-59.5 94.5t-83 69T383 974t-87 30t-68 16t-36 4q-12 0-34-14.5T109 964t-51.5-71t-41-99T0 672q0-77 25-142t63-107t90-75t98.5-50t96.5-28q-31-22-53-46q-29-31-57.5-89.5T224 64q-58-64 0-64q27 0 95.5 34T416 96q15 15 36.5 51t38.5 74q65-84 149-125q43-21 103.5-32.5t112-19T928 27q82-39 93-20q6 10-1 32M448 320q-16 0-41.5 4.5T344 340t-74 27.5t-74.5 44.5t-66.5 62.5T82 559T64 667q0 60 20 118t46.5 94.5t51 58.5t36.5 22q9 0 36.5-8t68.5-23t84.5-42t81.5-60.5t62.5-82.5T576 640q0-60-10.5-114.5T539 435t-34-63t-33-39.5t-24-12.5"></svg:path>`,
})
export class WhhLimesurveyIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLineIcon],svg[whh-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 192h-64q-7 0-15-2L190 881q2 8 2 15v64q0 26-18.5 45t-45.5 19H64q-26 0-45-19T0 960v-64q0-27 19-45.5T64 832h64q7 0 15 2l691-691q-2-8-2-15V64q0-26 18.5-45T896 0h64q26 0 45 19t19 45v64q0 27-19 45.5T960 192"></svg:path>`,
})
export class WhhLineIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLineheightIcon],svg[whh-lineheight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.74 385h-640q-26 0-44.5-19t-18.5-45.5t18.5-45t44.5-18.5h640q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19m-192-192h-448q-26 0-44.5-19t-18.5-45.5t18.5-45t44.5-18.5h448q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19m-585 704q9 8 9 19t-9 19l-65 82q-9 8-21.5 8t-21.5-8l-66-82q-9-8-9-19t9-19h56V129h-56q-9-8-9-19.5t9-18.5l66-83q9-8 21.5-8t21.5 8l65 83q9 7 9 18.5t-9 19.5h-54v768zm137-448h512q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19h-512q-26 0-44.5-19t-18.5-45.5t18.5-45t44.5-18.5m0 192h576q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19h-576q-26 0-44.5-19t-18.5-45.5t18.5-45t44.5-18.5m0 191h320q27 0 45.5 19t18.5 45.5t-18.5 45t-45.5 18.5h-320q-26 0-44.5-18.5t-18.5-45t18.5-45.5t44.5-19"></svg:path>`,
})
export class WhhLineheightIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLinkIcon],svg[whh-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M989 820L820 989q-34 35-83.5 35T652 989L483 820q-32-32-34-77.5t26-80.5l214 215q20 19 47.5 19t46.5-19l94-94q19-19 19-46.5T877 689L662 475q35-28 80.5-26t77.5 34l169 169q35 35 35 84.5T989 820M341 341q19-19 45-20t44 17l257 258q18 17 17 43.5T684 685t-45 19.5t-44-16.5L338 430q-18-18-17-44t20-45m-6-193q-19-20-46.5-20T241 148l-93 93q-20 20-20 47.5t20 46.5l214 214q-35 28-80.5 26T204 541L35 372Q0 337 0 287.5T35 203L204 35q34-35 83.5-35T372 35l169 168q32 33 34 78.5T549 362z"></svg:path>`,
})
export class WhhLinkIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLinkaltIcon],svg[whh-linkalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M947.533 947.5q-76.5 76.5-185 76.5t-184.5-77l-51-51l113-64l24 24q40 40 96 40t96-40t40-96t-40-96l-240-241q-40-39-96.5-39t-96.5 39q-1 2-3 4q-31 31-36 53l-96-96q4-7 10-15t9.5-11.5l13-13l12.5-11.5q76-77 184.5-77t184.5 77l245 245q77 76 77 184.5t-76.5 185M360.033 168q-40-40-96-40t-96 40t-40 96t40 96l240 241q40 40 96.5 40t96.5-40q1-2 3-4q31-31 36-53l96 96q-4 7-10 15t-9.5 11.5l-13 13l-12.5 11.5q-76 77-184.5 77t-184.5-77l-245-245q-77-76-77-184.5t76.5-185t185-76.5t184.5 77l51 51l-113 64z"></svg:path>`,
})
export class WhhLinkaltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLinkedinIcon],svg[whh-linkedin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-640-864q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm0 192q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v512q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm640 160q0-80-56-136t-136-56q-44 0-96.5 14t-95.5 39v-21q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v512q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5V576q0-53 37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5z"></svg:path>`,
})
export class WhhLinkedinIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLinuxIcon],svg[whh-linux-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-352q-13 0-22.5-9.5t-9.5-22.5V864q0-13 9.5-22.5t22.5-9.5h224q26 0 45-19t19-45V256q0-27-19-45.5t-45-18.5h-512q-26 0-45 18.5t-19 45.5v32q0 13-9.5 22.5t-22.5 9.5h-128q-13 0-22.5-9.5T.428 288V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-864-640h128q13 0 22.5 9.5t9.5 22.5v352q0 26 19 45t45 19h160q13 0 22.5 9.5t9.5 22.5v128q0 13-9.5 22.5t-22.5 9.5h-288q-53 0-90.5-37.5T.428 896V416q0-13 9.5-22.5t22.5-9.5"></svg:path>`,
})
export class WhhLinuxIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLipsIcon],svg[whh-lips-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 312q-28-28-74-46t-86-18q-31 0-69 10t-71 22t-90 22T0 312q41-21 100-66.5t105-86t96-72T384 56q39 0 72.5 17t55.5 47q22-30 55.5-47T640 56q33 0 83 31.5t96 72t105 86t100 66.5q-65 0-122-10t-90-22t-71-22t-69-10q-40 0-86 18t-74 46m0 78q28-35 72-56.5t88-21.5q63 0 122 6.5t99 16t71 19t45 15.5l15 7q-40 20-94.5 56.5t-94 64.5t-85 49.5T672 568q-118 0-160-31q-42 31-160 31q-33 0-78.5-21.5t-85-49.5t-94-64.5T0 376q5-3 15-7t44-15t72-19.5t98-15.5t123-7q44 0 88 21.5t72 56.5"></svg:path>`,
})
export class WhhLipsIcon {
  readonly viewBox = input("0 0 1024 614")
  readonly width = input("1.67em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLipstickIcon],svg[whh-lipstick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M818.91 946.5q-47.5 47.5-94.5 67.5t-66 1l-457-458q-20-19 3-69l-166-166q-13-13-25.5-80T.41 128q0-28 16-60t32-50l16-18l299 330q47-20 67-1l457 457q19 19-1 66t-67.5 94.5"></svg:path>`,
})
export class WhhLipstickIcon {
  readonly viewBox = input("0 0 897 1025")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhListIcon],svg[whh-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.356 1024h-512q-27 0-45.5-19t-18.5-45V832q0-26 18.5-45t45.5-19h512q26 0 45 19t19 45v128q0 27-19 45.5t-45 18.5m0-384h-512q-27 0-45.5-18.5t-18.5-45.5V448q0-27 18.5-45.5t45.5-18.5h512q26 0 45 18.5t19 45.5v128q0 27-19 45.5t-45 18.5m0-384h-512q-27 0-45.5-19t-18.5-45V64q0-27 18.5-45.5t45.5-18.5h512q26 0 45 18.5t19 45.5v128q0 26-19 45t-45 19m-768 768h-128q-26 0-45-19t-19-45V832q0-26 19-45t45-19h128q26 0 45 19t19 45v128q0 27-18.5 45.5t-45.5 18.5m0-384h-128q-26 0-45-18.5t-19-45.5V448q0-27 19-45.5t45-18.5h128q26 0 45 18.5t19 45.5v128q0 27-18.5 45.5t-45.5 18.5m0-384h-128q-26 0-45-19t-19-45V64q0-27 19-45.5t45-18.5h128q26 0 45 18.5t19 45.5v128q0 26-18.5 45t-45.5 19"></svg:path>`,
})
export class WhhListIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhListaltIcon],svg[whh-listalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m64-768q0-26-19-45t-45-19h-768q-26 0-45 19t-19 45v640q0 27 19 45.5t45 18.5h768q26 0 45-18.5t19-45.5zm-96 640h-512q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h512q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m0-256h-512q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h512q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m0-256h-512q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h512q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m-640 512h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m0-256h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5m0-256h-64q-13 0-22.5-9.5t-9.5-22.5v-64q0-13 9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5"></svg:path>`,
})
export class WhhListaltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLivejournalIcon],svg[whh-livejournal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M609 929L28 350Q6 328 1.5 287t11-87T59 123l64-64q31-31 77-46.5t87-11T350 28l579 581l96 416zM236 285q-29 30-39 76t4 75q0 1-.5 3l-.5 2l340 340q19-22 29.5-57t11-64t-3.5-51L245 277zm90-200q-24-26-79-19t-90 42l-49 49q-35 35-42 90t19 79l46 47q9-75 56-122l64-64q47-47 122-55zm127 127q-24-25-78.5-18T285 236l-8 8l332 333q22 4 51 3.5t64-11t57-29.5zm420 421l-55-55q-36 27-85.5 44T641 640q0 42-17.5 92.5T579 819l54 54l152 29q16-46 43.5-73.5T902 785z"></svg:path>`,
})
export class WhhLivejournalIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLivejournalaltIcon],svg[whh-livejournalalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M791.762 830q-98 96-212.5 145.5t-226.5 49.5q-81 0-137-17t-89-51t-47.5-79.5t-14.5-108.5q0-91 36.5-179.5t101.5-165.5l-184-183q-23-22-17-72.5t39-83.5l44-44q33-33 83.5-39t72.5 17l121 122q46-46 87-74t106.5-47t149.5-19q67 0 122.5 21t91.5 54.5t60.5 76.5t35 85t10.5 83q0 124-62 263t-171 246m-87-765q-162 0-324 95l74 74q98-41 186-41q93 0 142.5 61.5t49.5 162.5q0 34-1.5 56t-8 55.5t-19.5 59t-38 57t-61 60.5q26-45 45-129t19-159q0-62-35-111t-93-49q-64 0-135 29l133 133l66 286l-286-66l-163-163q-59 71-93 147.5t-34 145.5q0 38 11 70.5t35.5 61t70 44.5t107.5 16q98 0 204.5-45t190.5-128q94-92 153.5-225.5t59.5-241.5q0-29-10-62.5t-31.5-68t-51-62.5t-72.5-45.5t-91-17.5"></svg:path>`,
})
export class WhhLivejournalaltIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLiverIcon],svg[whh-liver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 512q-25 0-57-23.5T648.5 425T597 322.5T576 192q0-16 1-24.5t6.5-19.5t19.5-15.5t37-4.5q43 0 94.5-20T824 64t76.5-44T960 0q29 0 46.5 17t17.5 47q0 73-20.5 144.5T952 333t-66.5 94.5t-66.5 63t-51 21.5m-64 64q0 22-27.5 52t-64 57.5t-85 69T448 832q-31 37-52.5 85.5t-30 77.5t-13.5 29q-29 0-73.5-28t-92-79t-90-113.5T27 663T0 512q0-87 47-160.5T175 235t177-43q22 0 34 .5t34.5 2T456 200t27.5 11t21.5 18.5t7 26.5q0 55 26 114t70 110q13 15 38.5 35.5T688 551t16 25"></svg:path>`,
})
export class WhhLiverIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLoadingaltIcon],svg[whh-loadingalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 576h-86q22-63 22-128h64q26 0 45 19t19 45.5t-19 45t-45 18.5m-32-233l-41 24q-13-63-48-119l26-15q23-14 48-7t38.5 30t6.5 48.5t-30 38.5M782 175q-45-45-105-73l4-6q13-23 38.5-30t48.5 6.5t30 38.5t-7 48zm9 690q14 23 7 48t-30 38.5t-48.5 6.5t-38.5-30l-65-111q63-17 116-54zm-279.5 159q-26.5 0-45-18.5T448 960V824q32 8 64 8q30 0 64-6v134q0 27-19 45.5t-45.5 18.5m.5-640q-33 0-52-27q-91 14-147.5 71.5T256 576H64q-26 0-45-18.5t-19-45T19 467t45-19h211L96 343q-23-13-30-38.5t6.5-48.5t38.5-30t48 7l176 102l-102-176q-14-23-7-48t30-38.5t48.5-6.5T343 96l105 179V64q0-26 18.5-45T512 0t45.5 19T576 64v256q0 27-19 45.5T512 384M96 681l161-94q2 68 38 125l-136 79q-23 14-48 7t-38.5-30t-6.5-48.5T96 681m214 51q41 54 101 79l-68 117q-13 23-38.5 30t-48.5-6.5t-30-38.5t7-48zm538-98l80 47q23 13 30 38.5t-6.5 48.5t-38.5 30t-48-7l-98-57q50-44 81-100"></svg:path>`,
})
export class WhhLoadingaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLoadingeightIcon],svg[whh-loadingeight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 0q139 0 257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024t-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0"></svg:path>`,
})
export class WhhLoadingeightIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLoadingfiveIcon],svg[whh-loadingfive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024M64 512q0 91 34.5 173T195 829l317-317V64q-91 0-174 35.5T195 195T99.5 338T64 512"></svg:path>`,
})
export class WhhLoadingfiveIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLoadingflowccwIcon],svg[whh-loadingflowccw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1015 608q-23-118-94-212.5t-178.5-149T512 192q-40 0-68-28t-28-68t28-68t68-28q104 0 199 40.5t163.5 109t109 163.5t40.5 199q0 47-9 96m-226 64q20-34 58.5-44.5t73 9.5t44.5 58.5t-10 72.5q-52 90-134.5 152t-176 87t-196 12.5T256 955q-41-23-78-56q84 31 173.5 28.5t170.5-31T673 810t116-138m-554 0q20 34 9.5 72.5t-45 58.5t-72.5 9.5T69 768Q17 678 4.5 575.5t12.5-196t87-176T256 69q41-24 88-40q-91 78-137.5 187T167 445.5T235 672"></svg:path>`,
})
export class WhhLoadingflowccwIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLoadingflowcwIcon],svg[whh-loadingflowcw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M955 768q-20 34-58 44.5t-72.5-9.5t-45-58.5T789 672q61-106 68-226.5T817.5 216T680 29q47 16 88 40q90 52 152 134.5t87 176t12.5 196T955 768M768 955q-90 52-192.5 64.5t-196-12.5t-176-87T69 768q-20-34-10-72.5t44.5-58.5t73-9.5T235 672q46 80 116 138t151 86.5t170.5 31T846 899q-37 33-78 56M512 192q-123 0-230.5 54.5T103 395.5T9 608q-9-49-9-96q0-104 40.5-199t109-163.5T313 40.5T512 0q40 0 68 28t28 68t-28 68t-68 28"></svg:path>`,
})
export class WhhLoadingflowcwIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLoadingfourIcon],svg[whh-loadingfour-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024M64 512q0 91 35.5 174T195 829t143 95.5T512 960V64q-91 0-174 35.5T195 195T99.5 338T64 512"></svg:path>`,
})
export class WhhLoadingfourIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLoadingoneIcon],svg[whh-loadingone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m317-829L512 512V64q-91 0-174 35.5T195 195T99.5 338T64 512t35.5 174T195 829t143 95.5T512 960t174-35.5T829 829t95.5-143T960 512t-34.5-173T829 195"></svg:path>`,
})
export class WhhLoadingoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLoadingsevenIcon],svg[whh-loadingseven-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5M195 195l317 317V64q-91 0-173 34.5T195 195"></svg:path>`,
})
export class WhhLoadingsevenIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLoadingsixIcon],svg[whh-loadingsix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024M64 512h448V64q-91 0-174 35.5T195 195T99.5 338T64 512"></svg:path>`,
})
export class WhhLoadingsixIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLoadingthreeIcon],svg[whh-loadingthree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024M64 512q0 91 35.5 174T195 829t143 95.5T512 960t173-34.5T829 829L512 512V64q-91 0-174 35.5T195 195T99.5 338T64 512"></svg:path>`,
})
export class WhhLoadingthreeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLoadingtwoIcon],svg[whh-loadingtwo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024M64 512q0 91 35.5 174T195 829t143 95.5T512 960t174-35.5T829 829t95.5-143T960 512H512V64q-91 0-174 35.5T195 195T99.5 338T64 512"></svg:path>`,
})
export class WhhLoadingtwoIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLockIcon],svg[whh-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 1024H64q-26 0-45-18.5T0 960V512q0-27 19-45.5T64 448h64V320q0-87 43-160.5T287.5 43T448 0t160.5 43T725 159.5T768 320v128h64q27 0 45.5 18.5T896 512v448q0 27-18.5 45.5T832 1024m-512-64h256l-81-201q36-15 58.5-47t22.5-72q0-53-37.5-90.5T448 512t-90.5 37.5T320 640q0 40 22.5 72t58.5 47zm320-640q0-80-56-136t-135.5-56t-136 56T256 320v128h384z"></svg:path>`,
})
export class WhhLockIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLogprogramsIcon],svg[whh-logprograms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-768-192q0 27 19 45.5t45 18.5h640q26 0 45-18.5t19-45.5V640h-160q-17 0-26-15l-134-134v246q0 13-9 22t-22 9h-1q-22 0-30-22l-165-219l-99 98q-9 15-26 15h-96zm704-704h-640q-26 0-45 19t-19 45v384h85l112-112q2-5 4-7q9-9 23-9t23 9q5 5 7 13l130 173V415q0-13 9-22t22-9h1q17 0 26 15l177 177h149V192q0-26-19-45t-45-19"></svg:path>`,
})
export class WhhLogprogramsIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLollypopIcon],svg[whh-lollypop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1007 1007q-17 17-41 17t-41-17L502 584q-82 56-181 56q-24 0-53-4l368-368q4 29 4 53q0 99-56 181l423 423q17 17 17 41t-17 41M0 465L465 0q59 26 104.5 71.5T641 176L176 641q-59-26-104.5-71.5T0 465m1-144q0-87 42.5-161T160 43.5T321 1q24 0 52 4L5 373q-4-28-4-52"></svg:path>`,
})
export class WhhLollypopIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhLungsIcon],svg[whh-lungs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 1024q-13 0-38-16.5T861.5 966T800 928q-22-11-50-23t-45-19.5t-33.5-16.5t-24-18t-7.5-19V542L512 414L384 542v290q0 10-7.5 19t-24 18t-33.5 16.5t-45 19.5t-50 23q-26 13-61.5 38t-60.5 41.5t-38 16.5q-43 0-53.5-60T0 768q0-180 33-299t95-213q43-64 100-96t92-32q27 0 45.5 19t18.5 45v162l64-64V64q0-26 19-45t45.5-19t45 19T576 64v226l64 64V192q0-26 19-45t45-19q35 0 92 32t100 96q62 94 95 213t33 299q0 47-.5 70t-2 59.5t-5.5 54t-11 37t-18 27.5t-27 8"></svg:path>`,
})
export class WhhLungsIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMIcon],svg[whh-m-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704.5 1024q-26.5 0-45.5-18.5T640 960V263L440 544q-23 32-56 32q-32 0-56-32L128 263v697q0 27-18.5 45.5t-45 18.5t-45.5-18.5T0 960V64q0-26 18.5-45T64 0q17 0 29 6t15.5 10.5T119 32l265 372L649 32q8-11 11.5-15T676 6.5T704 0q26 0 45 19t19 45v896q0 27-18.5 45.5t-45 18.5"></svg:path>`,
})
export class WhhMIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMUpperCaseIcon],svg[whh-m-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704.5 1024q-26.5 0-45.5-18.5T640 960V263L440 544q-23 32-56 32q-32 0-56-32L128 263v697q0 27-18.5 45.5t-45 18.5t-45.5-18.5T0 960V64q0-26 18.5-45T64 0q17 0 29 6t15.5 10.5T119 32l265 372L649 32q8-11 11.5-15T676 6.5T704 0q26 0 45 19t19 45v896q0 27-18.5 45.5t-45 18.5"></svg:path>`,
})
export class WhhMUpperCaseIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMacproIcon],svg[whh-macpro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.488 1024h-64q-16 0-33.5-5.5t-22.5-13.5l-67-109h-522l-67 109q-5 8-23 13.5t-33 5.5h-64q-27 0-45.5-19t-18.5-45V64q0-27 18.5-45.5T64.488 0h64q15 0 33 5.5t23 13.5l67 109h522l67-109q5-8 22.5-13.5t33.5-5.5h64q26 0 45 18.5t19 45.5v896q0 27-19 45.5t-45 18.5m-448-576q-26 0-45 19t-19 45t19 45t45 19t45-18.5t19-45.5t-19-45.5t-45-18.5"></svg:path>`,
})
export class WhhMacproIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMacroIcon],svg[whh-macro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 737q41-73 116-120q38-23 84-33.5t93.5-5.5t89.5 37t65 89q-47 0-88.5 14T864 754.5t-59 51t-52 58.5t-50 59t-53 51.5t-61.5 36T513 1024h-2q-40 0-75.5-13.5t-61.5-36t-53-51.5t-50-59t-52-58.5t-59-51T88.5 718T0 704q23-57 65-89t89.5-37t93.5 5.5t84 33.5q75 47 116 120V511q-87 5-172-48q-71-44-111-110t-37-130q47-34 117.5-31T385 234q5-80 39.5-143.5T512 0q53 27 87.5 90.5T639 234q69-39 139.5-41.5T896 223q3 64-37 130T748 463q-85 53-172 48z"></svg:path>`,
})
export class WhhMacroIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMagazineIcon],svg[whh-magazine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832.85 1024h-768q-27 0-45.5-19T.85 960V64q0-27 18.5-45.5T64.85 0h768q26 0 45 18.5t19 45.5v896q0 26-19 45t-45 19m-704-960q-27 0-45.5 18.5T64.85 128v768q0 27 18.5 45.5t45.5 18.5h448q0-60-3-98t-10.5-67t-23-45.5t-36.5-27t-55-18.5q-17-4-37-4t-36 2.5t-37.5 8t-32.5 9t-29.5 9.5t-19.5 7l543-664q-15-8-31-8zm704 64q0-21-13-39l-204 871h153q26 0 45-18.5t19-45.5z"></svg:path>`,
})
export class WhhMagazineIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMagentoIcon],svg[whh-magento-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 841V320L448 160L128 320v521L0 768V256L448 0l449 256v512zm-384 18l64 37l64-37V325l129 75v512l-193 112l-192-112V400l128-75z"></svg:path>`,
})
export class WhhMagentoIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMagnetIcon],svg[whh-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m731 768l37-256q0-133-61.5-194.5T512 256t-194.5 61.5T256 512l37 256H37L0 512q0-104 40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199l-37 256zm-429 64l18 128q0 26-37.5 45t-90.5 19t-90.5-19T64 960L46 832zm676 0l-18 128q0 26-37.5 45t-90.5 19t-90.5-19t-37.5-45l18-128z"></svg:path>`,
})
export class WhhMagnetIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMagnifierIcon],svg[whh-magnifier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1005 1004q-19 19-45.5 19t-45.5-19L716 806q-120 89-268 89q-91 0-174-35.5T131 764T35.5 621.5T0 447.5T35.5 273T131 130.5t143-95T448 0t174 35.5t143 95T860.5 273T896 447q0 149-89 268l198 198q19 19 19 45.5t-19 45.5M448 128q-87 0-160.5 42.5T171 287t-43 160.5T171 608t116.5 116.5T448 767t160.5-42.5T725 608t43-160.5T725 287T608.5 170.5T448 128"></svg:path>`,
})
export class WhhMagnifierIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMaharaIcon],svg[whh-mahara-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 768q0 70-43 128.5t-116.5 93T320 1024t-160.5-34.5t-116.5-93T0 768q0-81 70.5-188.5T226 418q-43-26-70.5-67T128 256q0-35 25.5-81.5t58.5-84t64.5-64T320 0t43.5 26.5t64.5 64t58.5 84T512 256q0 54-27.5 95T414 418q85 54 155.5 161.5T640 768M256 512q-3 2-7 6t-15 17t-19.5 27t-15.5 35t-7 43q0 31 27.5 47.5T288 704q17 0 24.5-12.5T320 640q0-29-14-60.5T277 530t-21-18m80-256q-9 0-12.5 8.5T320 299q0 19 7 40t14.5 33t10.5 12q4-4 9-11t14-29.5t9-44.5q0-21-13.5-32T336 256"></svg:path>`,
})
export class WhhMaharaIcon {
  readonly viewBox = input("0 0 640 1024")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMailboxIcon],svg[whh-mailbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 256v704q0 26-18.5 45t-45 19t-45.5-19t-19-45v-64h-64v64q0 26-18.5 45t-45.5 19H64q-27 0-45.5-19T0 960V384q0-104 51.5-192.5t140-140T384 0t192.5 51.5t140 140T768 384v384h64V64q0-27 19-45.5T896 0h64q27 0 45.5 18.5T1024 64v128q0 26-18.5 45T960 256M640 384q0-106-75-181t-181-75t-181 75t-75 181v480q0 13 9.5 22.5T160 896h448q13 0 22.5-9.5T640 864zM512 768H256q-26 0-45-19t-19-45.5t19-45t45-18.5h256q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19"></svg:path>`,
})
export class WhhMailboxIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMailinglistsIcon],svg[whh-mailinglists-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M831.405 1024h-767q-27 0-45.5-18.5T.405 960V65q0-27 18.5-45.5T64.405 1h448v255h-352q-13 0-22.5 9t-9.5 23v64q0 13 9.5 22.5t22.5 9.5l735 1v575q0 27-18.5 45.5t-45.5 18.5m-32-480q0-14-9-23t-22-9h-608q-13 0-22.5 9t-9.5 23v64q0 13 9.5 22.5t22.5 9.5h608q13 0 22-9.5t9-22.5zm0 255q0-13-9-22.5t-22-9.5h-608q-13 0-22.5 9.5t-9.5 22.5v64q0 14 9.5 23t22.5 9h608q13 0 22-9t9-23zm-223-799q26 0 44 18l256 257q19 19 19 46h-319z"></svg:path>`,
})
export class WhhMailinglistsIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMaleIcon],svg[whh-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M955.5 477q-28.5 0-48.5-20t-20-48V223L622 488q61 88 61 194q0 93-46 171.5t-124.5 124t-171 45.5T170 977.5t-124.5-124T0 682t45.5-171.5t124.5-124T341 341q107 0 194 60l266-265H614q-28 0-48-20t-20-48t20-48t48-20h342q28 0 48 20t20 48v341q0 28-20 48t-48.5 20m-614 0Q257 477 197 537t-60 145t60 145t144.5 60T486 827t60-145t-60-145t-144.5-60"></svg:path>`,
})
export class WhhMaleIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMamboIcon],svg[whh-mambo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M981 260q-41 20-109.5 41.5t-166 49.5T561 393q27 10 95 32t104.5 34.5T844 491t76 35q22 13 32.5 38t8.5 49.5t-13 42.5q-18 29-58 42t-79-6q-19-11-41-28.5T731.5 632t-45-40.5t-41.5-39t-47-46t-42-41.5q-1 11-2.5 50t-2 54.5T549 619t-4 52.5t-4.5 44.5t-6.5 46.5t-8 37.5q-11 40-52.5 68t-76 28t-59.5-28t-12-68q10-33 32.5-83t40-85t54-106.5T500 432q-29 20-95.5 69.5t-105 77.5t-89.5 61.5t-87 52.5q-45 20-79 6.5T2 657q-6-29 15-70t60-61q26-12 57-24.5t76.5-27T281 452t86.5-26.5T444 402q-13-3-48-12.5t-51-14t-45-12.5t-46-13.5t-38.5-12.5t-36.5-13.5t-27-12.5q-17-10-21-27.5t2.5-34T153 222q20-18 55.5-26.5T273 199q21 11 53.5 33t53.5 37.5t70.5 53.5t63.5 49q-1-106-1-276q0-31 23-54.5T584.5 9T631 0q28 0 53.5 17T705 58q-6 30-24 73t-57 121t-50 102q31-21 112.5-78T819 186t88-50q34-13 66-4t45 29q6 14 7 31.5t-11 37t-33 30.5"></svg:path>`,
})
export class WhhMamboIcon {
  readonly viewBox = input("0 0 1026 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhManagedhostingIcon],svg[whh-managedhosting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 992H128q-53 0-90.5-37.5T0 864t37.5-90.5T128 736h768q53 0 90.5 37.5T1024 864t-37.5 90.5T896 992M191.5 800q-26.5 0-45 19T128 864.5t18.5 45t45 18.5t45.5-18.5t19-45t-19-45.5t-45.5-19m640.5 0H448q-27 0-45.5 19T384 864.5t18.5 45T448 928h384q26 0 45-18.5t19-45t-19-45.5t-45-19m-32-384h-40q-9 35-29 68l19 19q18 18 18 43.5T750 590t-43.5 18t-43.5-18l-19-20q-33 20-68 29v41q0 27-18.5 45.5t-45 18.5t-45.5-18.5t-19-45.5v-41q-35-9-68-29l-20 20q-18 18-43.5 18T273 590t-18-43.5t18-43.5l20-20q-20-32-29-67h-40q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45.5-19h40q9-35 29-68l-20-20q-18-18-18-43.5t18-43.5t43.5-18t43.5 18l20 21q33-20 68-29V64q0-26 18.5-45t45-19T557 19t19 45v41q35 9 67 28l20-20q18-18 43.5-18t43.5 18t18 43.5t-18 43.5l-20 19q21 34 30 69h40q27 0 45.5 19t18.5 45.5t-19 45t-45 18.5M512 224q-53 0-90.5 37.5T384 352t37.5 90.5T512 480t90.5-37.5T640 352t-37.5-90.5T512 224"></svg:path>`,
})
export class WhhManagedhostingIcon {
  readonly viewBox = input("0 0 1024 992")
  readonly width = input("1.04em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhManaltIcon],svg[whh-manalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 384v43q0 15-5 34l-59 243q-7 25-24.5 44.5T320 768v224q0 13-9.5 22.5T288 1024H160q-13 0-22.5-9.5T128 992V768q-22 0-39.5-19.5T64 704L5 461q-5-19-5-35v-42q0-24 55-42t137-21v-4q-55-11-91.5-55T64 160q0-66 47-113T224 0t113 47t47 113q0 58-36.5 102T256 317v4q82 3 137 21t55 42"></svg:path>`,
})
export class WhhManaltIcon {
  readonly viewBox = input("0 0 448 1024")
  readonly width = input("0.44em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhManillaenvelopeIcon],svg[whh-manillaenvelope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M800.424 1024h-768q-13 0-22.5-9.5T.424 992V32q0-13 9.5-22.5t22.5-9.5h768q13 0 22.5 9.5t9.5 22.5v960q0 13-9.5 22.5t-22.5 9.5m-736-64h320V570q-28-10-46-34.5t-18-55.5t18-55.5t46-34.5v-70q-12 0-130-26t-190-46zm704-896h-704v120q101 28 258 61q-2-11-2-21q0-40 28-68t68-28t68 28t28 68q0 10-2 21q157-33 258-61zm0 184q-72 20-190 46t-130 26v70q28 10 46 34.5t18 55.5t-18 55.5t-46 34.5v390h320z"></svg:path>`,
})
export class WhhManillaenvelopeIcon {
  readonly viewBox = input("0 0 833 1024")
  readonly width = input("0.82em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMantisbugtrackerIcon],svg[whh-mantisbugtracker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M736.49 224q-48 48-95.5 114t-76.5 124q35 13 55.5 34.5t20.5 47.5q0 31-16.5 70.5t-45.5 63.5q22 26 38 58q5 9 9 18q23-73 47-114q1-2 23.5-42.5t39.5-69t39-66t37-58t20-20.5q27 0 46 21.5t19 74.5v6q1 116-57 232q-27 56-106 182.5t-91 122.5q-8-2 19.5-91.5t63-205.5t41.5-163q-14 32-62 141q-13 29-20 43.5t-19 38.5t-21.5 35t-17.5 11q-16 0-42.5-28.5t-47.5-67.5q-9-17-15-34q-1 0-4 1t-5 1l-1-.5l-1-.5q2 17 2 33q0 39-9.5 67.5t-22.5 28.5q-5 0-10-1t-10.5-3.5t-9.5-4.5t-10.5-6.5t-10-7.5t-11-9.5t-11-9.5t-11.5-11t-12-11q-15-14-30-29q4 6 19 30.5t28 46.5t31.5 52.5t32.5 55.5t26 48t17.5 36.5t2.5 15.5q-7 4-52.5-42t-103.5-109.5t-67-72.5q-96-96-96-192q0-13 2.5-20t9-9.5t9-2.5h11.5q35 0 107.5 51t107.5 86q2 3 9 10q1-18 4-34q-51-23-91.5-68.5t-40.5-76.5q0-26 21-47.5t57-34.5q-57-73-142-142q-172-141-256-160q0-9 12-20.5t20-11.5q28 0 99.5 33.5t156.5 94.5q55 39 104.5 89.5t74.5 102.5h13q15 0 31 1q15-69 70.5-147.5T704.49 160q74-70 165-115t123-45q8 0 20 11.5t12 20.5q-45 10-129.5 64t-158.5 128"></svg:path>`,
})
export class WhhMantisbugtrackerIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhManualshiftIcon],svg[whh-manualshift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.428 238v274q0 26-18.5 45t-45.5 19h-320v210q29 17 46.5 46t17.5 64q0 53-37.5 90.5t-90.5 37.5t-90.5-37.5t-37.5-90.5q0-35 17.5-64t46.5-46V576h-256v210q29 17 46.5 46t17.5 64q0 53-37.5 90.5t-90.5 37.5t-90.5-37.5T.428 896q0-35 17.5-64t46.5-46V238q-29-17-46.5-46t-17.5-64q0-53 37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5q0 35-17.5 64t-46.5 46v210h256V238q-29-17-46.5-46t-17.5-64q0-53 37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5q0 35-17.5 64t-46.5 46v210h256V238q-29-17-46.5-46t-17.5-64q0-53 37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5q0 35-17.5 64t-46.5 46"></svg:path>`,
})
export class WhhManualshiftIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMapIcon],svg[whh-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 1024V640l320-128v384zm0-896L1024 0v448L704 576zM384 512l256 128v384L384 896zm0-512l256 128v448L384 448zM0 640l320-128v384L0 1024zm0-512L320 0v448L0 576z"></svg:path>`,
})
export class WhhMapIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMapmarkerIcon],svg[whh-mapmarker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m657 680l-272 345l-272-345q-73-76-99.5-178.5t0-205t100-179T286 14t198 0t172.5 103.5t100 179t0 205T657 680M385.5 130Q279 130 204 205t-75 181t75 180.5T385.5 641T567 566.5T642 386t-75-181t-181.5-75"></svg:path>`,
})
export class WhhMapmarkerIcon {
  readonly viewBox = input("0 0 770 1025")
  readonly width = input("0.76em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMarkerIcon],svg[whh-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1023 961H878l-39-39l83-82l94 93q11 11 7 28M545 833l288-288l68 220l-136 136zM32 353Q0 320 0 272.5T33 192L192 33Q225 1 272.5.5T352 33l449 448l-320 320zm526 205.5q18-18.5 18-44T558 471L297 210q-18-18-43.5-18T210 210t-18 43.5t18 43.5l261 262q18 18 43.5 18t43.5-18.5"></svg:path>`,
})
export class WhhMarkerIcon {
  readonly viewBox = input("0 0 1025 961")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMarkerdownIcon],svg[whh-markerdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m507 748l-123 276l-123-276Q146 709 73 609T0 384q0-104 51.5-192.5t140-140T384 0t192.5 51.5t140 140T768 384q0 125-73 225T507 748M384 128q-106 0-181 75t-75 181t75 181t181 75t181-75t75-181t-75-181t-181-75"></svg:path>`,
})
export class WhhMarkerdownIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMarkerleftIcon],svg[whh-markerleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 768q-125 0-225-73T276 507L0 384l276-123q39-115 139-188T640 0q104 0 192.5 51.5t140 140T1024 384t-51.5 192.5t-140 140T640 768m0-640q-106 0-181 75t-75 181t75 181t181 75t181-75t75-181t-75-181t-181-75"></svg:path>`,
})
export class WhhMarkerleftIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMarkerrightIcon],svg[whh-markerright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M748 507q-39 115-139 188t-225 73q-104 0-192.5-51.5t-140-140T0 384t51.5-192.5t140-140T384 0q125 0 225 73t139 188l276 123zM384 128q-106 0-181 75t-75 181t75 181t181 75t181-75t75-181t-75-181t-181-75"></svg:path>`,
})
export class WhhMarkerrightIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMarkerupIcon],svg[whh-markerup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 1024q-104 0-192.5-51.5t-140-140T0 640q0-125 73-225t188-139L384 0l123 276q115 39 188 139t73 225q0 104-51.5 192.5t-140 140T384 1024m0-640q-106 0-181 75t-75 181t75 181t181 75t181-75t75-181t-75-181t-181-75"></svg:path>`,
})
export class WhhMarkerupIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMarvinIcon],svg[whh-marvin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 449q-114 0-266.5 14.5T0 495q3-101 45-192.5t110-158T316.5 39T512 0t195.5 39T869 144.5t110 158t45 192.5q-93-17-245.5-31.5T512 449M223 641l150-124q77-4 139-4t139 4l150 124l64-108q98 11 158 23q-11 130-81.5 237.5t-184 170T512 1026t-246-62.5t-184-170T1 556q60-12 158-23z"></svg:path>`,
})
export class WhhMarvinIcon {
  readonly viewBox = input("0 0 1024 1026")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMastercardIcon],svg[whh-mastercard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.31 768h-896q-26 0-45-18.5T.31 704V64q0-26 18.5-45t45.5-19h896q27 0 45.5 19t18.5 45v640q0 26-18.5 45t-45.5 19m-320-576q-73 0-128 50q-55-50-128-50q-80 0-136 56.5t-56 136t56 135.5t136 56q73 0 128-50q55 50 128 50q79 0 135.5-56t56.5-135.5t-56.5-136t-135.5-56.5m0 320q-53 0-90.5-37.5t-37.5-90.5t37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5"></svg:path>`,
})
export class WhhMastercardIcon {
  readonly viewBox = input("0 0 1025 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMaximizeIcon],svg[whh-maximize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m992 256l-70-70l-117 116q-17 18-42 18t-42.5-17.5T703 260t18-42l116-117l-69-69q0-26 2.5-29T800 0h160q26 0 45 19t19 45v160q0 27-3 29.5t-29 2.5M768 512v384q0 53-37.5 90.5T640 1024H128q-53 0-90.5-37.5T0 896V512q0-53 37.5-90.5T128 384h512q53 0 90.5 37.5T768 512m-128 64q0-26-19-45t-45-19H192q-27 0-45.5 19T128 576v256q0 27 18.5 45.5T192 896h384q26 0 45-18.5t19-45.5z"></svg:path>`,
})
export class WhhMaximizeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMayanpyramidIcon],svg[whh-mayanpyramid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 768H704L576 0h96q13 0 22.5 9.5T704 32v64q0 13-9.5 22.5T672 128h64q13 0 22.5 9.5T768 160v64q0 13-9.5 22.5T736 256h64q13 0 22.5 9t9.5 23v64q0 13-9.5 22.5T800 384h64q13 0 22.5 9t9.5 23v64q0 13-9.5 22.5T864 512h64q13 0 22.5 9t9.5 23v64q0 13-9.5 22.5T928 640h64q13 0 22.5 9t9.5 23v64q0 13-9.5 22.5T992 768m-608 0L448 0h128l64 768zm-352 0q-13 0-22.5-9.5T0 736v-64q0-13 9.5-22.5T32 640h64q-13 0-22.5-9.5T64 608v-64q0-13 9.5-22.5T96 512h64q-13 0-22.5-9.5T128 480v-64q0-13 9.5-22.5T160 384h64q-13 0-22.5-9.5T192 352v-64q0-13 9.5-22.5T224 256h64q-13 0-22.5-9.5T256 224v-64q0-13 9.5-22.5T288 128h64q-13 0-22.5-9.5T320 96V32q0-13 9.5-22.5T352 0h96L320 768z"></svg:path>`,
})
export class WhhMayanpyramidIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMedalIcon],svg[whh-medal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1015.717 64l-219 382q-80-87-193-114l153-268q15-26 44-45t56-19h129q27 0 36 19t-6 45m-183 641q0 87-42.5 160.5T673.717 982t-161 43t-161-43t-116.5-116.5t-42.5-160.5t42.5-161t116.5-117t161-43t161 43t116.5 117t42.5 161m-823-641q-15-26-6-45t36-19h129q27 0 56 19t44 45l153 268q-114 27-193 114z"></svg:path>`,
})
export class WhhMedalIcon {
  readonly viewBox = input("0 0 1026 1025")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMedalbronzeIcon],svg[whh-medalbronze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1015.717 64l-219 382q-79-87-193-114l153-268q15-26 44-45t56-19h129q27 0 36 19t-6 45m-183 641q0 87-42.5 160.5T673.717 982t-161 43t-161-43t-116.5-116.5t-42.5-160.5t42.5-161t116.5-117t161-43t161 43t116.5 117t42.5 161m-192-96q0-50-35-73.5t-93-23.5h-96q-13 0-22.5 9.5t-9.5 23t9.5 23t22.5 9.5h96q3 0 9-1q15 0 22 .5t16.5 3.5t13 10t3.5 18.5t-3.5 18.5t-13 10t-16.5 3.5t-22 .5h-41q-13 0-22.5 9t-9.5 22.5t9.5 23t22.5 9.5h32q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19h-96q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h96q53 0 90.5-37.5t37.5-90.5q0-58-44-96q6-5 17.5-14t15.5-13t7.5-14t3.5-23m-631-545q-15-26-6-45t36-19h129q27 0 56 19t44 45l153 268q-114 27-193 114z"></svg:path>`,
})
export class WhhMedalbronzeIcon {
  readonly viewBox = input("0 0 1026 1025")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMedalgoldIcon],svg[whh-medalgold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1015.717 64l-219 382q-79-87-193-115l153-267q15-26 44-45t56-19h129q27 0 36 19t-6 45m-183 641q0 87-42.5 160.5T673.717 982t-161 43t-161-43t-116.5-116.5t-42.5-160.5t42.5-161t116.5-117t161-43t161 43t116.5 117t42.5 161m-224 128h-32V640q0-53-37.5-90.5t-90.5-37.5v1v-1q-14 0-23 9.5t-9 23t9 23t23 9.5v-1q27 1 45.5 19.5t18.5 44.5v193h-32q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h128q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m-599-769q-15-26-6-45t36-19h129q27 0 56 19t44 45l153 267q-114 28-193 115z"></svg:path>`,
})
export class WhhMedalgoldIcon {
  readonly viewBox = input("0 0 1026 1025")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMedalsilverIcon],svg[whh-medalsilver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1015.717 64l-219 382q-79-87-193-114l153-268q15-26 44-45t56-19h129q27 0 36 19t-6 45m-183 641q0 87-42.5 160.5T673.717 982t-161 43t-161-43t-116.5-116.5t-42.5-160.5t42.5-161t116.5-117t161-43t161 43t116.5 117t42.5 161m-320 64q53 0 90.5-37.5t37.5-90.5t-37.5-91t-90.5-38t-90.5 38t-37.5 91q0 13 9 22.5t22.5 9.5t23-9.5t9.5-22.5q0-27 18.5-45.5t45-18.5t45.5 18.5t19 45t-19 45.5t-45 19q-53 0-90.5 37.5t-37.5 90.5v32q0 13 9 22.5t23 9.5h192q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-160q0-27 18.5-45.5t45.5-18.5m-503-705q-15-26-6-45t36-19h129q27 0 56 19t44 45l153 268q-114 27-193 114z"></svg:path>`,
})
export class WhhMedalsilverIcon {
  readonly viewBox = input("0 0 1026 1025")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMediarepeatIcon],svg[whh-mediarepeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 831H320v169q-37 39-62 12L15 805Q0 789 0 767t15-38l243-207q25-27 62 13v168h512q26 0 45-18.5t19-45.5V511q0-26 18.5-45t45-19t45.5 19t19 45v192q0 53-37.5 90.5T896 831M766 501q-25 27-62-13V319H192q-27 0-45.5 19T128 383v128q0 27-19 45.5T63.5 575t-45-18.5T0 511V319q0-53 37.5-90.5T128 191h576V23q37-39 62-12l243 207q15 16 15 38t-15 38z"></svg:path>`,
})
export class WhhMediarepeatIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMegaIcon],svg[whh-mega-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m0-832h-128l-256 256l-256-256h-128v640h128V384l192 192h128l192-192v448h128z"></svg:path>`,
})
export class WhhMegaIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMenIcon],svg[whh-men-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M737 663.5q-23 13.5-48.5 6.5T650 640l-73-127v447q0 26-18.5 45t-45 19t-45.5-19t-19-45V832q0-24-19.5-44T385 768q-28 0-46 17.5T321 832v128q0 26-19 45t-45.5 19t-45-19t-18.5-45V513l-73 127q-13 23-38.5 30T33 663.5T3 624t7-49l128-223q17-31 55-31v-1h128v-49q-64-41-64-166q0-52 36-78.5T385 0t92 26.5t36 78.5q0 131-64 168v47h128v1q38 0 55 31l128 223q14 23 7 49t-30 39.5"></svg:path>`,
})
export class WhhMenIcon {
  readonly viewBox = input("0 0 770 1024")
  readonly width = input("0.76em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMenuIcon],svg[whh-menu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 640h-768q-53 0-90.5-37.5T.428 512t37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5m0-384h-768q-53 0-90.5-37.5T.428 128t37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5m-768 512h768q53 0 90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5h-768q-53 0-90.5-37.5T.428 896t37.5-90.5t90.5-37.5"></svg:path>`,
})
export class WhhMenuIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMergeIcon],svg[whh-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M959.5 1024q-26.5 0-45-18.5T896 960V768q0-53-37.5-90.5T768 640H640q-53 0-90.5-37.5T512 512q0 53-37.5 90.5T384 640H256q-53 0-90.5 37.5T128 768v192q0 27-18.5 45.5t-45 18.5t-45.5-18.5T0 960V768q0-106 75-181t181-75h64q53 0 90.5-37.5T448 384V214l-24 24q-18 18-43.5 18T337 238t-18-43.5t18-43.5L458 30q6-10 8-13q19-18 46-17q27-1 46 17q2 3 8 13l121 121q18 18 18 43.5T687 238t-43.5 18t-43.5-18l-24-24v170q0 53 37.5 90.5T704 512h64q106 0 181 75t75 181v192q0 27-19 45.5t-45.5 18.5"></svg:path>`,
})
export class WhhMergeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMergecellsIcon],svg[whh-mergecells-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M758.428 333q12-12 30-13t31 7t13 20v330q0 12-13 20t-31 6.5t-30-13.5l-164-133q-19-19-19-45.5t19-45.5zm138 691h-192q-53 0-90.5-37.5t-37.5-90.5V768q0-26 19-45t45.5-19t45 19t18.5 45v96q0 13 9.5 22.5t22.5 9.5h128q13 0 22.5-9.5t9.5-22.5V160q0-13-9.5-22.5t-22.5-9.5h-128q-13 0-22.5 9.5t-9.5 22.5v96q0 27-18.5 45.5t-45 18.5t-45.5-18.5t-19-45.5V128q0-53 37.5-90.5t90.5-37.5h192q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-630-334q-12 12-30 13.5t-31-6.5t-13-20V347q0-12 13-20t31-7t30 13l164 133q19 19 19 45.5t-19 45.5zm118.5-370q-26.5 0-45.5-18.5t-19-45.5v-96q0-13-9.5-22.5t-22.5-9.5h-128q-13 0-22.5 9.5t-9.5 22.5v704q0 13 9.5 22.5t22.5 9.5h128q13 0 22.5-9.5t9.5-22.5v-96q0-26 19-45t45.5-19t45 19t18.5 45v128q0 53-37.5 90.5t-90.5 37.5h-192q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h192q53 0 90.5 37.5t37.5 90.5v128q0 27-18.5 45.5t-45 18.5"></svg:path>`,
})
export class WhhMergecellsIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMergeshapesIcon],svg[whh-mergeshapes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-512q-53 0-90.5-37.5t-37.5-90.5V768h-128q-53 0-90.5-37.5T.428 640V128q0-53 37.5-90.5t90.5-37.5h512q53 0 90.5 37.5t37.5 90.5v128h128q53 0 90.5 37.5t37.5 90.5v512q0 53-37.5 90.5t-90.5 37.5m0-352q0-13-9.5-22.5t-22.5-9.5l-72 72l-480-480l72-72q0-13-9.5-22.5t-22.5-9.5h-192q-13 0-22.5 9.5t-9.5 22.5v192q0 13 9.5 22.5t22.5 9.5l72-72l480 480l-72 72q0 13 9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5z"></svg:path>`,
})
export class WhhMergeshapesIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMergethreeIcon],svg[whh-mergethree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512.417 672v160h58q10 14 3 23l-116 164q-3 5-9 5t-10-5l-116-164q-6-9 4-23h58V672q0-32-39.5-72t-96-78t-113-76.5t-96-80.5t-39.5-77V64q0-26 19-45t45.5-19t45 19t18.5 45v160q0 26 17 52t47.5 50.5t60.5 44.5t69.5 45.5t61.5 42.5V64q0-26 19-45t45.5-19t45 19t18.5 45v399q21-16 61.5-42t70-46.5t60.5-46t47.5-52t16.5-52.5V64q0-26 19-45t45.5-19t45 19t18.5 45v224q0 35-39.5 77t-96 81t-113 77.5t-96 78t-39.5 70.5"></svg:path>`,
})
export class WhhMergethreeIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMeteorIcon],svg[whh-meteor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M886 234q33-19 59.5-29.5T982 193l10-1q-90 92-171 157q53-13 104-20t75-8l24-1Q851 433 768 512q-103 98-176.5 192T498 851q-26 76-92.5 124.5T256 1024q-106 0-181-75T0 768q0-69 34-127.5t91-92.5q38-19 82.5-60t79.5-84t66-86.5t46-67t17-26.5q-1 37-11 96q30 0 72-33t80-80t72-94t55-80l20-33q0 22-1 55.5t-9 103t-22 97.5q43-57 83-121t58-99l19-36q4 7 8 19.5t5 46t-13 62.5q38-27 86-59t77-51l29-18q-63 105-138 234M256 576q-80 0-136 56T64 768t56 136t136 56t136-56t56-136t-56-136t-136-56"></svg:path>`,
})
export class WhhMeteorIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMeteoriteIcon],svg[whh-meteorite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1003 661q33 33 15.5 97T944 879q-43 43-92 64t-87 14q-117 67-252 67q-99 0-191-38q-2 0-5.5.5t-5.5.5q-65 0-119.5-42T119 838Q2 696 2 512q0-54 11-107q-25-43-1.5-112.5T97 161q78-78 163-93Q378 0 513 0q105 0 199.5 40.5t163 109t109 163.5t40.5 199q0 76-22 149M311.5 137q-19.5-20-68.5 1t-98.5 70.5t-70 98t-1 68.5t68.5-1t98-70.5t70-98t1.5-68.5M280 704q-43 0-68 31.5T195 809q6 37 36 62t66.5 25t61.5-25t25-62q0-42-30.5-73.5T280 704m329-256q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m272.5-195q-17.5-37-44-53.5t-46.5-2t-21.5 51T785 322t43.5 53.5t46.5 2t22-51t-15.5-73.5m66 464.5q-13.5-13.5-47.5 1T832 767t-48.5 67.5t-1 47t47.5-1t68-48t48.5-67.5t1-47.5"></svg:path>`,
})
export class WhhMeteoriteIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMetroIcon],svg[whh-metro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M961.005 897h-896q-26 0-45-19t-19-45V198q-3-36 31-62l150-112q34-26 83-23h495q49-3 84 23l150 112q25 19 29 46q2 4 2 11v640q0 26-19 45t-45 19m-192-128h64q27 0 45.5-19t18.5-45.5t-18.5-45t-45.5-18.5h-64q-26 0-45 18.5t-19 45t19 45.5t45 19m-576 0h64q27 0 45.5-19t18.5-45.5t-18.5-45t-45.5-18.5h-64q-26 0-45 18.5t-19 45t19 45.5t45 19m704-512q-4-12-24-27l-112-84q-24-18-59-17h-378q-35-1-59 17l-113 84q-14 11-20 27h-3v192q0 26 19 45t45 19h640q27 0 45.5-19t18.5-45l1-192zm-704 640h64q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19h-64q-26 0-45-19t-19-45.5t19-45t45-18.5m576 0h64q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19h-64q-26 0-45-19t-19-45.5t19-45t45-18.5"></svg:path>`,
})
export class WhhMetroIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMetronomeIcon],svg[whh-metronome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m65 1024l79-550L6 242q-8-12-4-25.5T18.5 196t26-3.5T65 208l94 158l34-238L417 0l224 128l128 896zm96-192h195L200 569zm416-640L417 64L257 192l-41 271l169 283V160q0-13 9.5-22.5T417 128t22.5 9.5T449 160v672h224z"></svg:path>`,
})
export class WhhMetronomeIcon {
  readonly viewBox = input("0 0 769 1024")
  readonly width = input("0.76em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMibewIcon],svg[whh-mibew-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 320V160L896 0l128 128v480zm64 512H512V512l160-128l288 256zM384 416V160l128-96l128 128v128L480 448zm64 384l-128 96L0 576l320-96l128 32zM0 64l320 96v256L0 512z"></svg:path>`,
})
export class WhhMibewIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMickeymouseIcon],svg[whh-mickeymouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M869 436q27 68 27 140q0 104-51.5 192.5t-140 140T512 960t-192.5-51.5t-140-140T128 576q0-72 27-140q-69-22-112-80.5T0 224q0-93 65.5-158.5T224 0q86 0 149 57t72 141q36-6 67-6t67 6q9-84 72-141T800 0q93 0 158.5 65.5T1024 224q0 73-43 131.5T869 436"></svg:path>`,
})
export class WhhMickeymouseIcon {
  readonly viewBox = input("0 0 1024 960")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMicrophoneIcon],svg[whh-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1000 930l-70 71q-16 16-33.5 21t-33.5-7L351 639q115-11 196-92.5T639 350l376 513q12 16 7 33.5t-22 33.5M288 576q-119 0-203.5-84.5T0 288T84.5 84.5T288 0t203.5 84.5T576 288t-84.5 203.5T288 576M96 192q-13 0-22.5 9.5T64 224t9.5 22.5T96 256t22.5-9.5T128 224t-9.5-22.5T96 192m0 128q-13 0-22.5 9.5T64 352t9.5 22.5T96 384t22.5-9.5T128 352t-9.5-22.5T96 320M224 64q-13 0-22.5 9.5T192 96t9.5 22.5T224 128t22.5-9.5T256 96t-9.5-22.5T224 64m0 128q-13 0-22.5 9.5T192 224t9.5 22.5T224 256t22.5-9.5T256 224t-9.5-22.5T224 192m0 128q-13 0-22.5 9.5T192 352t9.5 22.5T224 384t22.5-9.5T256 352t-9.5-22.5T224 320m0 128q-13 0-22.5 9.5T192 480t9.5 22.5T224 512t22.5-9.5T256 480t-9.5-22.5T224 448M352 64q-13 0-22.5 9.5T320 96t9.5 22.5T352 128t22.5-9.5T384 96t-9.5-22.5T352 64m0 128q-13 0-22.5 9.5T320 224t9.5 22.5T352 256t22.5-9.5T384 224t-9.5-22.5T352 192m0 128q-13 0-22.5 9.5T320 352t9.5 22.5T352 384t22.5-9.5T384 352t-9.5-22.5T352 320m0 128q-13 0-22.5 9.5T320 480t9.5 22.5T352 512t22.5-9.5T384 480t-9.5-22.5T352 448m128-256q-13 0-22.5 9.5T448 224t9.5 22.5T480 256t22.5-9.5T512 224t-9.5-22.5T480 192m32 160q0-13-9.5-22.5T480 320t-22.5 9.5T448 352t9.5 22.5T480 384t22.5-9.5T512 352"></svg:path>`,
})
export class WhhMicrophoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMicrophonealtIcon],svg[whh-microphonealt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 890v70q0 27-18.5 45.5t-45 18.5t-45.5-18.5t-19-45.5v-70Q183 867 91.5 760.5T0 512q0-27 18.5-45.5T64 448t45.5 18.5T128 512q0 106 75 181t181 75t181-75t75-181q0-27 19-45.5t45.5-18.5t45 18.5T768 512q0 142-91.5 248.5T448 890m32-378h96q0 80-56 136t-135.5 56t-136-56T192 512h96q13 0 22.5-9.5T320 480t-9.5-22.5T288 448h-96v-64h96q13 0 22.5-9.5T320 352t-9.5-22.5T288 320h-96v-64h96q13 0 22.5-9.5T320 224t-9.5-22.5T288 192h-96q0-80 56.5-136t136-56T520 56t56 136h-96q-13 0-22.5 9.5T448 224t9.5 22.5T480 256h96v64h-96q-13 0-22.5 9.5T448 352t9.5 22.5T480 384h96v64h-96q-13 0-22.5 9.5T448 480t9.5 22.5T480 512"></svg:path>`,
})
export class WhhMicrophonealtIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMicrophonethreeIcon],svg[whh-microphonethree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1000.694 930l-70 70q-16 17-33.5 22t-33.5-7l-372-274l-82 82q-9 9-22.5 9t-23.5-9l-226-226q-9-10-9-23.5t9-22.5l49-49q-81-23-133.5-91T.694 256q0-106 75-181t181-75q87 0 155 52.5t91 133.5l49-49q10-9 23.5-9t22.5 9l226 226q9 10 9 23t-9 23l-81 81l273 372q12 17 7 34.5t-22 33.5m-246-544l-180-180l-368 368l180 180z"></svg:path>`,
})
export class WhhMicrophonethreeIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMicroscopeIcon],svg[whh-microscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M769 448q0 134-72.5 243.5T507 855q61 25 97.5 70t36.5 99H128q0-41 22.5-78t61.5-64q-51-13-116-50q-15-7-23.5-25T64 768q-26 0-45-19T0 703.5t19-45T64 640h256q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19q87 0 161-43t117-116.5T641 448q0-72-30.5-135.5T527 204l-55 86q0 1-1 1.5l-1 .5l9 5q24 13 31 39t-7 49L401 544q-14 23-40.5 30t-50.5-7l-116-64q-24-13-31-39t7-49l101-159q14-22 40-29t50 5L489 29q13-21 39-27t49 6t29.5 35.5T600 88l-5 7q81 63 127.5 155T769 448"></svg:path>`,
})
export class WhhMicroscopeIcon {
  readonly viewBox = input("0 0 769 1024")
  readonly width = input("0.76em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMicrosdIcon],svg[whh-microsd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 1024H128q-53 0-90.5-37.5T0 896V704q27 0 45.5-18.5T64 640v-64q0-26-18.5-45T0 512v-64q0-28 20-48l172-172V64q0-26 19-45t45-19h576q27 0 45.5 18.5T896 64v832q0 53-37.5 90.5T768 1024M320 96q0-13-9.5-22.5T288 64t-22.5 9.5T256 96v128q0 13 9.5 22.5T288 256t22.5-9.5T320 224zm128 0q0-13-9.5-22.5T416 64t-22.5 9.5T384 96v128q0 13 9.5 22.5T416 256t22.5-9.5T448 224zm128 0q0-13-9.5-22.5T544 64t-22.5 9.5T512 96v128q0 13 9.5 22.5T544 256t22.5-9.5T576 224zm128 0q0-13-9.5-22.5T672 64t-22.5 9.5T640 96v128q0 13 9.5 22.5T672 256t22.5-9.5T704 224zm128 0q0-13-9.5-22.5T800 64t-22.5 9.5T768 96v128q0 13 9.5 22.5T800 256t22.5-9.5T832 224z"></svg:path>`,
})
export class WhhMicrosdIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMicrosoftofficeIcon],svg[whh-microsoftoffice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 1024L0 832l576 64V128L192 256v512L0 832V192L576 0l320 128v768z"></svg:path>`,
})
export class WhhMicrosoftofficeIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMicrowaveIcon],svg[whh-microwave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.226 768h-64v32q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5v-32h-640v32q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5v-32h-64q-26 0-45-19t-19-45V64q0-26 19-45t45-19h896q27 0 45.5 18.5t18.5 45.5v640q0 27-18.5 45.5t-45.5 18.5m-96-256q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5m-64 64q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5m0-128q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5m-96-256q0-27-18.5-45.5t-45.5-18.5h-512q-26 0-45 18.5t-19 45.5v384q0 26 19 45t45 19h512q27 0 45.5-19t18.5-45zm256-32q0-13-9.5-22.5t-22.5-9.5h-128q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h128q13 0 22.5-9.5t9.5-22.5zm-32 224q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m0 128q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5"></svg:path>`,
})
export class WhhMicrowaveIcon {
  readonly viewBox = input("0 0 1025 832")
  readonly width = input("1.24em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMiddlefingerIcon],svg[whh-middlefinger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 1024H192q-30 0-73.5-69.5T64 831q-2-8-21-77.5T12 615T0 480v-32q0-26 19-45t45-19q27 0 45.5 15.5T128 427v-44q0-26 19-45t45.5-19t45 19t18.5 45q0-58 2-112.5t8-121.5t20-108t34-41q45 0 54.5 45.5T384 256q0 13 3.5 27t9 26t12.5 23.5t14 20.5t12.5 16t9 11l3.5 4q0-27 19-45.5t45.5-18.5t45 18.5T576 384v64q0-27 19-45.5t45.5-18.5t45 18.5T704 448v352q0 169-90 213q-21 11-38 11"></svg:path>`,
})
export class WhhMiddlefingerIcon {
  readonly viewBox = input("0 0 704 1024")
  readonly width = input("0.69em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMilkIcon],svg[whh-milk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.857 1024h-960q-13 0-22.5-9.5T.857 992V416q0-78 8-86l120-120V32q0-13 9.5-22.5t22.5-9.5h640q13 0 22.5 9.5t9.5 22.5v160l160 128q15 15 22.5 33.5t8.5 29.5t1 33v576q0 13-9.5 22.5t-22.5 9.5m-928-64h512V448h-512zm0-576h512l128-128h-512zm704-320h-576v128h576zm32 192l-128 128h288zm160 192h-320v512h320z"></svg:path>`,
})
export class WhhMilkIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMimetypeIcon],svg[whh-mimetype-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M895.405 1024h-311l8-4q11-7 14.5-19.5t-3.5-24.5l-45-80q11-16 19-33h94q14 0 23-9t9-23V640q0-14-9-23t-23-9h-94q-8-17-19-34l45-79q7-12 3.5-24.5t-14.5-19.5l-165-96q-11-6-24-2.5t-19 14.5l-47 82q-2 0-8-.5t-9.5-.5t-10 .5t-7.5.5l-47-82q-6-11-19-14.5t-24 2.5l-148 87V65q0-27 18.5-45.5t45.5-18.5h447v352q0 13 9.5 22.5t22.5 9.5h352v575q0 27-18.5 45.5t-45.5 18.5m-256-1024q26 0 45 18l256 257q19 19 19 46h-320zm-461 608l-47-83q-6-11-3-23.5t14-19.5l53-31q10-6 22.5-2.5t18.5 14.5l48 84q19-3 35.5-3t36.5 3l47-84q7-11 19-14.5t23 2.5l52 31q11 7 14 19.5t-3 23.5l-47 83q26 29 39 63h107q14 0 23 9.5t9 22.5v64q0 14-9 23t-23 9h-107q-13 35-39 64l47 83q6 11 3 23.5t-14 18.5l-52 32q-11 6-23 2.5t-19-14.5l-47-84q-20 3-36.5 3t-35.5-3l-48 84q-6 11-18 14.5t-23-2.5l-53-32q-11-6-14-18.5t3-23.5l47-83q-26-29-38-64h-108q-13 0-22.5-9t-9.5-23v-64q0-13 9.5-22.5t22.5-9.5h108q12-34 38-63m141.5 191q26.5 0 45.5-18.5t19-45t-19-45.5t-45.5-19t-45 19t-18.5 45.5t18.5 45t45 18.5"></svg:path>`,
})
export class WhhMimetypeIcon {
  readonly viewBox = input("0 0 960 1024")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMinecraftIcon],svg[whh-minecraft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024L0 768V256L512 0l512 256v512zm448-736L512 64L64 288v96h64v64h64v-64h64v64h64v64h64v-64l64 32v96h64v-64h64v64h64v-64h64v-96l64-32v64h64v-96l64-32v64h64zm-704 96"></svg:path>`,
})
export class WhhMinecraftIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMinecraftaltIcon],svg[whh-minecraftalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m0-960h-768q-26 0-45 18.5t-19 45.5v256h64v128h128V256h128V128h128v256h128V256h128v128h128V256h64V128q0-27-18.5-45.5t-45.5-18.5"></svg:path>`,
})
export class WhhMinecraftaltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMiniangryIcon],svg[whh-miniangry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M959.5 897q-26.5 0-45-19T896 833q0-49-51-93t-140.5-71.5T512 641q-102 0-192 28.5T179 742t-51 91q0 26-19 45t-45.5 19t-45-19T0 833q0-94 69-167.5t185.5-113T512 513t257.5 39.5t185.5 113t69 167.5q0 26-19 45t-45.5 19m-77-591q-13.5 15-33 15T816 306l-145-97q-11-4-18-12q-14-15-14-36.5t14-36.5q7-7 18-11l145-98q14-15 33.5-15t33 15T896 51.5T882 88l-108 73l108 72q14 15 14 36.5T882.5 306M353 209l-145 97q-14 15-33.5 15t-33-15t-13.5-36.5t14-36.5l108-72l-108-73q-14-15-14-36.5T141.5 15t33-15T208 15l145 98q11 4 18 11q14 15 14 36.5T371 197q-7 8-18 12"></svg:path>`,
})
export class WhhMiniangryIcon {
  readonly viewBox = input("0 0 1024 897")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMinibbIcon],svg[whh-minibb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928 448q-15 0-32-4v164q0 13-9.5 22.5T864 640H672q-13 0-22.5-9.5T640 608V444q-16 4-32 4q-40 0-68-19t-28-45.5t28-45t68-18.5t68 18.5t28 45.5v160q0 13 9.5 22.5T736 576h64q13 0 22.5-9.5T832 544V384q0-27 28-45.5t68-18.5t68 18.5t28 45t-28 45.5t-68 19M768 256q-53 0-90.5-37.5T640 128t37.5-90.5T768 0t90.5 37.5T896 128t-37.5 90.5T768 256M416 640q-40 0-68-18.5T320 576V416q0-13-9.5-22.5T288 384h-64q-13 0-22.5 9.5T192 416v160q0 27-28 45.5T96 640t-68-18.5T0 576t28-45.5T96 512q15 0 32 4V352q0-13 9.5-22.5T160 320h192q13 0 22.5 9.5T384 352v164q17-4 32-4q40 0 68 18.5t28 45.5t-28 45.5t-68 18.5M256 256q-53 0-90.5-37.5T128 128t37.5-90.5T256 0t90.5 37.5T384 128t-37.5 90.5T256 256m256 640q195 0 304.5-35.5T952 768q8 10 8 24q0 25-15.5 54.5T894 908t-85.5 57.5t-127.5 42t-168.5 16.5t-169-16.5t-128-42T130 908t-50.5-61.5T64 792q0-14 8-24q26 57 135.5 92.5T512 896"></svg:path>`,
})
export class WhhMinibbIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMiniconfusedIcon],svg[whh-miniconfused-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M608 384q-66 0-113-56.5t-47-136T495 56T608 0t113 56t47 135.5t-47 136T608 384m-480 0q-53 0-90.5-47T0 224t37.5-113T128 64t90.5 47T256 224t-37.5 113t-90.5 47M64 640h640q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19H64q-27 0-45.5-19T0 703.5t18.5-45T64 640"></svg:path>`,
})
export class WhhMiniconfusedIcon {
  readonly viewBox = input("0 0 768 768")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMinigrinIcon],svg[whh-minigrin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 513q0 73-35.5 141.5T889 777t-162.5 87T512 897t-214.5-33T135 777T35.5 654T0 513q0-27 19-45.5T64 449h896q26 0 45 18.5t19 45.5m-880 64q17 35 47.5 68t75 61.5T375 752t137 17q74 0 138-17t108.5-45.5t75-61T881 577zm738.5-271q-13.5 15-33 15T816 306l-145-97q-11-4-18-12q-14-15-14-36.5t14-36.5q7-7 18-11l145-98q14-15 33.5-15t33 15T896 51.5T882 88l-108 73l108 72q14 15 14 36.5T882.5 306M353 209l-145 97q-14 15-33.5 15t-33-15t-13.5-36.5t14-36.5l108-72l-108-73q-14-15-14-36.5T141.5 15t33-15T208 15l145 98q11 4 18 11q14 15 14 36.5T371 197q-7 8-18 12"></svg:path>`,
})
export class WhhMinigrinIcon {
  readonly viewBox = input("0 0 1024 897")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMinilaughIcon],svg[whh-minilaugh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 512q0 73-35.5 141.5T889 776t-162.5 87T512 896t-214.5-33T135 776T35.5 653T0 512q0-27 18.5-45.5T64 448h896q27 0 45.5 18.5T1024 512M512 768q74 0 138-17t108.5-45.5t75-61T881 576H144q17 35 47.5 68t75 61.5T375 751t137 17m256-448q-53 0-90.5-47T640 160t37.5-113T768 0t90.5 47T896 160t-37.5 113t-90.5 47m-512 0q-53 0-90.5-47T128 160t37.5-113T256 0t90.5 47T384 160t-37.5 113t-90.5 47"></svg:path>`,
})
export class WhhMinilaughIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMinimizeIcon],svg[whh-minimize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 640H384q-53 0-90.5-37.5T256 512V128q0-53 37.5-90.5T384 0h512q53 0 90.5 37.5T1024 128v384q0 53-37.5 90.5T896 640m0-448q0-27-18.5-45.5T832 128H448q-26 0-45 18.5T384 192v256q0 26 19 45t45 19h384q27 0 45.5-19t18.5-45zM704 960q0 27-18.5 45.5T640 1024H256q-26 0-45-18.5T192 960t19-45.5t45-18.5h384q27 0 45.5 18.5T704 960m-639.5 64q-26.5 0-45.5-18.5T0 960t19-45.5T64.5 896t45 18.5T128 960t-18.5 45.5t-45 18.5"></svg:path>`,
})
export class WhhMinimizeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMinisadIcon],svg[whh-minisad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M959.5 896q-26.5 0-45-19T896 832q0-49-51-93t-140.5-71.5T512 640q-102 0-192 28.5T179 741t-51 91q0 26-19 45t-45.5 19t-45-19T0 832q0-94 69-167.5t185.5-113T512 512t257.5 39.5t185.5 113t69 167.5q0 26-19 45t-45.5 19M768 320q-53 0-90.5-47T640 160q0-65 19.5-112.5T704 0q35 0 80.5 29t78.5 75t33 88q0 63-36 95.5T768 320m-512 0q-56 0-92-32.5T128 192q0-42 33-88t78.5-75T320 0q25 0 44.5 47.5T384 160q0 66-37.5 113T256 320"></svg:path>`,
})
export class WhhMinisadIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMinismileIcon],svg[whh-minismile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 576q0 94-69 167.5t-185.5 113T512 896t-257.5-39.5T69 743.5T0 576q0-27 18.5-45.5t45-18.5t45.5 18.5t19 45.5q0 47 51 91t141 72.5T512 768q103 0 192.5-27.5T845 669t51-93q0-27 18.5-45.5t45-18.5t45.5 18.5t19 45.5M768 320q-53 0-90.5-47T640 160t37.5-113T768 0t90.5 47T896 160t-37.5 113t-90.5 47m-512 0q-53 0-90.5-47T128 160t37.5-113T256 0t90.5 47T384 160t-37.5 113t-90.5 47"></svg:path>`,
})
export class WhhMinismileIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMinitongueIcon],svg[whh-minitongue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M951 731q0 122-75 207.5T695 1024t-181-85.5T439 731H73q-30 0-51.5-21T0 658.5t21.5-52T73 585h878q30 0 51.5 21.5t21.5 52t-21.5 51.5t-51.5 21m-366 0q0 61 32 104t77.5 43t78-43T805 731zm219.5-365Q744 366 701 312.5T658 183t43-129.5T804.5 0T908 53.5T951 183t-43 129.5T804.5 366m-585 0Q159 366 116 312.5T73 183t43-129.5T219.5 0T323 53.5T366 183t-43 129.5T219.5 366"></svg:path>`,
})
export class WhhMinitongueIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMinitonguealtIcon],svg[whh-minitonguealt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M951.443 732q0 122-75 207.5t-181 85.5t-181-85.5t-75-207.5h-366q-30 0-51.5-21t-21.5-51.5t21.5-52t51.5-21.5h878q30 0 51.5 21.5t21.5 52t-21.5 51.5t-51.5 21m-366 0q0 61 32 104t77.5 43t78-43t32.5-104zm350.5-383q-15.5 17-38 17t-37.5-17l-167-111q-12-4-20-13q-15-17-15-41.5t15-41.5q8-9 20-14l167-111q15-17 37.5-17t38 17.5t15.5 41.5t-16 41l-124 83l124 83q16 18 16 42t-15.5 41m-604.5-111l-167 111q-15 17-37.5 17t-38-17t-15.5-41t16-42l124-83l-124-83q-16-17-16-41t15.5-41.5t38-17.5t37.5 17l167 111q12 5 20 14q15 17 15 41.5t-15 41.5q-8 9-20 13"></svg:path>`,
})
export class WhhMinitonguealtIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMinitonguewinkIcon],svg[whh-minitonguewink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M951 731q0 122-75 207.5T695 1024t-181-85.5T439 731H73q-30 0-51.5-21T0 658.5t21.5-52T73 585h878q30 0 51.5 21.5t21.5 52t-21.5 51.5t-51.5 21m-366 0q0 61 32 104t77.5 43t78-43T805 731zm293-438H658q-30 0-51.5-21.5t-21.5-52t21.5-52T658 146h220q30 0 51.5 21.5t21.5 52t-21.5 52T878 293m-658.5 73Q159 366 116 312.5T73 183t43-129.5T219.5 0T323 53.5T366 183t-43 129.5T219.5 366"></svg:path>`,
})
export class WhhMinitonguewinkIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMiniwinkIcon],svg[whh-miniwink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 576q0 94-69 167.5t-185.5 113T512 896t-257.5-39.5T69 743.5T0 576q0-27 19-45.5T64.5 512t45 18.5T128 576q0 47 51 91t141 72.5T512 768q103 0 192.5-27.5T845 669t51-93q0-27 19-45.5t45.5-18.5t45 18.5T1024 576M832 256H640q-26 0-45-19t-19-45t19-45t45-19h192q27 0 45.5 19t18.5 45.5t-18.5 45T832 256m-576 64q-53 0-90.5-47T128 160t37.5-113T256 0t90.5 47T384 160t-37.5 113t-90.5 47"></svg:path>`,
})
export class WhhMiniwinkIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMinusIcon],svg[whh-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 248v128q0 27-19 45.5T960 440H64q-26 0-45-18.5T0 376V248q0-26 18.5-45T64 184h896q26 0 45 19t19 45"></svg:path>`,
})
export class WhhMinusIcon {
  readonly viewBox = input("0 0 1024 614")
  readonly width = input("1.67em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMinussignIcon],svg[whh-minussign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m256-544q0-13-9.5-22.5T736 448H288q-13 0-22.5 9.5T256 480v64q0 13 9.5 22.5T288 576h448q13 0 22.5-9.5T768 544z"></svg:path>`,
})
export class WhhMinussignIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMirrorIcon],svg[whh-mirror-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 1024H864q-13 0-22.5-9.5T832 992t9.5-22.5T864 960h32V544h-1q-6 132-58.5 242T698 960t-186 64t-186-64t-138.5-174T129 544h-1v416h32q13 0 22.5 9.5T192 992t-9.5 22.5t-22.5 9.5H32q-13 0-22.5-9.5T0 992t9.5-22.5T32 960h32V416q0-13 9.5-22.5T96 384t22.5 9.5T128 416v64h1q6-132 58.5-242T326 64T512 0t186 64t138.5 174T895 480h1v-64q0-13 9.5-22.5T928 384t22.5 9.5T960 416v544h32q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5M512 128q-70 0-128.5 51.5t-93 140T256 512t34.5 192.5t93 140T512 896t128.5-51.5t93-140T768 512t-34.5-192.5t-93-140T512 128M292.5 400q6.5-11 19-14.5T336 388l384 192q11 7 14.5 19.5t-3 24t-19 15T688 636L304 444q-12-7-15-20t3.5-24M656 444L400 316q-11-7-14.5-20t3-24.5t19-14.5t24.5 3l256 128q12 7 15 19.5t-3.5 24t-19 15T656 444M368 580l256 128q12 7 15 20t-3.5 24.5t-19 14.5t-24.5-3L336 636q-12-7-15-20t3.5-24t19-14.5T368 580"></svg:path>`,
})
export class WhhMirrorIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMissedcallIcon],svg[whh-missedcall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m887 224l119 119q18 18 18 43.5t-18 44t-43.5 18.5t-43.5-18L800 311L681 431q-18 18-43.5 18t-44-18.5t-18.5-44t19-43.5l119-119l-119-119q-19-18-19-43.5T593.5 18t44-18T681 18l119 119L919 18q18-18 43.5-18t43.5 18t18 43.5t-18 43.5zM648 805l87-87q15-14 52.5-12t76.5 12t63 22q56 26 82 65.5t4 62.5L906 974q-44 44-117.5 49.5t-159-23t-182-90.5T264 761T115 578T24.5 396t-23-159T51 120L157 14q21-21 55.5 4T286 99q18 27 29 96.5t-8 95.5l-87 87q18 65 95 160t172 172.5T648 805"></svg:path>`,
})
export class WhhMissedcallIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMissedcallaltIcon],svg[whh-missedcallalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m919 512l87 87q18 18 18 43.5t-18 43.5t-43.5 18t-43.5-18l-87-87l-87 87q-18 18-43.5 18T658 686t-18-43.5t18-43.5l87-87l-87-87q-18-18-18-43.5t18-43.5t43.5-18t43.5 18l87 87l87-87q18-18 43.5-18t43.5 18t18 43.5t-18 43.5zm-471 512h-64q-79 0-149-35.5t-122.5-100t-82.5-162T0 512t30-214.5t82.5-162t122-100T384 0h64q27 0 45.5 18.5T512 64v192q0 26-18.5 45T448 320h-64q-24 0-42-16t-21-39q-129 40-129 247t129 247q3-24 21-39.5t42-15.5h64q27 0 45.5 18.5T512 768v192q0 26-18.5 45t-45.5 19"></svg:path>`,
})
export class WhhMissedcallaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMiuiIcon],svg[whh-miui-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 640V0h192v640zM512 256q0-27-18.5-45.5T448 192H192v448H0V0h512q80 0 136 56t56 136v448H512zm-64 384H256V256h192z"></svg:path>`,
})
export class WhhMiuiIcon {
  readonly viewBox = input("0 0 1024 640")
  readonly width = input("1.6em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMobileIcon],svg[whh-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024H64q-26 0-45-18.5T0 960V256q0-26 19-45t45-19V64q0-26 19-45t45.5-19t45 19T192 64v128h320q27 0 45.5 19t18.5 45v704q0 27-18.5 45.5T512 1024M256 880q0 7 4.5 11.5T272 896h32q7 0 11.5-4.5T320 880v-32q0-7-4.5-11.5T304 832h-32q-7 0-11.5 4.5T256 848zm0-128q0 7 4.5 11.5T272 768h32q7 0 11.5-4.5T320 752v-32q0-7-4.5-11.5T304 704h-32q-7 0-11.5 4.5T256 720zm0-128q0 7 4.5 11.5T272 640h32q7 0 11.5-4.5T320 624v-32q0-7-4.5-11.5T304 576h-32q-7 0-11.5 4.5T256 592zM128 880q0 7 4.5 11.5T144 896h32q7 0 11.5-4.5T192 880v-32q0-7-4.5-11.5T176 832h-32q-7 0-11.5 4.5T128 848zm0-128q0 7 4.5 11.5T144 768h32q7 0 11.5-4.5T192 752v-32q0-7-4.5-11.5T176 704h-32q-7 0-11.5 4.5T128 720zm0-128q0 7 4.5 11.5T144 640h32q7 0 11.5-4.5T192 624v-32q0-7-4.5-11.5T176 576h-32q-7 0-11.5 4.5T128 592zm320-272q0-13-9.5-22.5T416 320H160q-13 0-22.5 9.5T128 352v128q0 13 9.5 22.5T160 512h256q13 0 22.5-9.5T448 480zm0 240q0-7-4.5-11.5T432 576h-32q-7 0-11.5 4.5T384 592v32q0 7 4.5 11.5T400 640h32q7 0 11.5-4.5T448 624zm0 128q0-7-4.5-11.5T432 704h-32q-7 0-11.5 4.5T384 720v32q0 7 4.5 11.5T400 768h32q7 0 11.5-4.5T448 752zm0 128q0-7-4.5-11.5T432 832h-32q-7 0-11.5 4.5T384 848v32q0 7 4.5 11.5T400 896h32q7 0 11.5-4.5T448 880z"></svg:path>`,
})
export class WhhMobileIcon {
  readonly viewBox = input("0 0 576 1024")
  readonly width = input("0.57em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhModxIcon],svg[whh-modx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 128L807 453l89 59v320L660 674l-30 45l266 177v128L571 807l-59 89H0l217-325l-89-59V384l148 99l29-45l-177-118V0l325 217l59-89z"></svg:path>`,
})
export class WhhModxIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhModxaltIcon],svg[whh-modxalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 128L807 453l89 59v320L660 674l-30 45l266 177v128L571 807l-59 89H0l217-325l-89-59V384l148 98l29-44l-177-118V0l325 217l59-89zM268 606L117 832h363l39-59zm59-89l251 167l30-44l-251-167zm429-99l151-226H544l-39 59z"></svg:path>`,
})
export class WhhModxaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMoleculeIcon],svg[whh-molecule-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M800 1024q-93 0-158.5-65.5T576 800q0-97 72-163l-59-137q-37 12-77 12t-77-12l-59 137q72 67 72 163q0 93-65.5 158.5T224 1024T65.5 958.5T0 800t65.5-158.5T224 576q23 0 48 5l61-142q-77-75-77-183q0-106 75-181T512 0t181 75t75 181q0 107-77 183l61 142q25-5 48-5q93 0 158.5 65.5T1024 800t-65.5 158.5T800 1024M191.5 640q-26.5 0-45 19T128 704t18.5 45t45 19t45.5-18.5t19-45.5t-19-45.5t-45.5-18.5m256-512q-26.5 0-45 18.5T384 192t18.5 45.5t45 18.5t45.5-18.5t19-45.5t-19-45.5t-45.5-18.5m320 512q-26.5 0-45 18.5t-18.5 45t18.5 45.5t45 19t45.5-18.5t19-45.5t-19-45.5t-45.5-18.5"></svg:path>`,
})
export class WhhMoleculeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMoleskineIcon],svg[whh-moleskine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768.338 1024h-64V704h128V320h-128V0h64q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-704-704v384h576v320h-512q-53 0-90.5-37.5T.338 896V128q0-53 37.5-90.5t90.5-37.5h512v320z"></svg:path>`,
})
export class WhhMoleskineIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMoneyaltIcon],svg[whh-moneyalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.21 822q-38-33-75-43.5t-85-10.5q-62 0-126.5 26t-119.5 63t-108.5 74t-111.5 64t-110 29q-86 3-160-62q-25-22-44.5-64T.21 828V195q0-48 64 7q37 32 75.5 43t84.5 11q44 0 101.5-26t115.5-63.5t117.5-75t123.5-64t118-27.5q88 0 160 62q25 22 44.5 64t19.5 70v633q0 48-64-7m0-506q-32-28-64-43q-61-27-94.5-60t-33.5-82V67q-47 8-101.5 34.5t-104.5 60l-100 67l-104.5 60.5l-101.5 35v63q0 56-39 94.5t-89 16.5q-11-6-32.5-10.5t-31.5-8.5v229q32 28 64 43q61 28 94.5 61t33.5 82v63q47-8 101.5-34.5t104.5-60l100-67l104.5-60l101.5-34.5v-64q0-55 39-94t89-16q32 15 64 42zm-448 426q-80 49-136 9t-56-138q0-92 55.5-185t136.5-145q80-49 136-9t56 139q0 92-55.5 184.5T512.21 742"></svg:path>`,
})
export class WhhMoneyaltIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMoneybagIcon],svg[whh-moneybag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 992q-45 1-224 1t-224-1q-127-3-191.5-17T0 928q0-20 20-80.5t44-127t44-153T128 416q0-192 352-192t352 192q0 65 20 151.5t44 153t44 127t20 80.5q0 33-64.5 47T704 992M480 448q68 0 113.5 16t46.5 47v1q0 13 9.5 22.5T672 544t22.5-9.5T704 512q0-117-192-127v-33q0-13-9.5-22.5T480 320t-22.5 9.5T448 352v33q-192 10-192 127q0 22 6.5 38t21 26.5t31.5 17t45 9.5t54 4t66 1q69 0 114.5 16.5T640 672t-45.5 47.5T480 736q-68 0-113.5-16T320 673v-1q0-13-9.5-22.5T288 640t-22.5 9.5T256 672q0 117 192 127v33q0 13 9.5 22.5T480 864t22.5-9.5T512 832v-33q192-10 192-127q0-128-224-128q-14 0-35 .5t-34 1t-29 0t-26-2.5t-19-5.5t-13-10t-4-15.5q0-31 46-47.5T480 448m0-288q-60 0-110 6q-21-42-35.5-81.5T320 32q0-16 26-32q24 14 61 23t73 9t73-9t61-23q26 16 26 32q0 13-14.5 52.5T590 166q-50-6-110-6"></svg:path>`,
})
export class WhhMoneybagIcon {
  readonly viewBox = input("0 0 960 993")
  readonly width = input("0.97em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMongodbIcon],svg[whh-mongodb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M319 901q1 15 1 27q0 40-9.5 68t-22.5 28t-22.5-28t-9.5-68q0-13 2-27q-16-18-55-53t-69.5-66.5T70 705T18.5 602.5T0 480q0-68 19-131t48-107.5t65-85.5t67-67.5T255.5 38T288 0q7 14 32.5 38T377 88.5t67 67.5t65 85.5T557 349t19 131q0 65-18.5 122.5T506 705t-63.5 76.5T373 848t-54 53"></svg:path>`,
})
export class WhhMongodbIcon {
  readonly viewBox = input("0 0 576 1024")
  readonly width = input("0.57em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMonitorIcon],svg[whh-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.193 768h-384v128h64q53 0 90.5 37.5t37.5 90.5h-512q0-53 37.5-90.5t90.5-37.5h64V768h-384q-27 0-45.5-18.5T.193 704V64q0-26 18.5-45t45.5-19h896q26 0 45 19t19 45v640q0 27-18.5 45.5t-45.5 18.5m-64-640h-768v512h768zm-704 448V191h512z"></svg:path>`,
})
export class WhhMonitorIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMonstersincIcon],svg[whh-monstersinc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m704 768l-43-192l-53 192H416l-53-192l-43 192H0L128 0h320l64 192q-93 0-170.5 52.5T224 384q40 87 117.5 139.5T512 576t170.5-52.5T800 384q-40-87-117.5-139.5T512 192L576 0h320l128 768zM512 512q-53 0-90.5-37.5T384 384t37.5-90.5T512 256t90.5 37.5T640 384t-37.5 90.5T512 512"></svg:path>`,
})
export class WhhMonstersincIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMonstraIcon],svg[whh-monstra-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 544q0 109-52.5 202T638 895q2 18 2 33q0 40-9.5 68t-22.5 28q-15 0-48.5-23.5T515 948q-50 12-99 12t-99-12q-11 29-44.5 52.5T224 1024q-13 0-22.5-28t-9.5-68q0-16 2-33q-89-56-141.5-149T0 544q0-108 51-200t139-149t194-65v-12q-25-14-44.5-43.5T320 32t28-22.5T416 0t68 9.5T512 32t-19.5 42.5T448 118v12q106 8 194 65t139 149t51 200M416 896q60 0 94-16t66-48H256q29 29 65 46.5t95 17.5m0-576q-93 0-158.5 65.5T192 544t65.5 158.5T416 768t158.5-65.5T640 544t-65.5-158.5T416 320m0 320q-40 0-68-28t-28-68t28-68t68-28q21 0 41 10q-9 9-9 22t9.5 22.5T480 512t22-9q10 20 10 41q0 40-28 68t-68 28"></svg:path>`,
})
export class WhhMonstraIcon {
  readonly viewBox = input("0 0 832 1024")
  readonly width = input("0.82em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMoonIcon],svg[whh-moon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M515 1024q-127 0-239.5-59.5T90 802T0 576q57 86 153 139t202 53q113 0 208.5-55.5T714 561t55-209q0-106-53.5-200.5T576 0q123 17 225.5 89T964 273t60 239q0 104-40.5 199T875 874.5t-162.5 109T515 1024"></svg:path>`,
})
export class WhhMoonIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMoonfirstquarterIcon],svg[whh-moonfirstquarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-960q-91 0-174 35.5T195 195T99.5 338T64 512t35.5 174T195 829t143 95.5T512 960z"></svg:path>`,
})
export class WhhMoonfirstquarterIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMoonfullIcon],svg[whh-moonfull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 0Q408 0 313 40.5t-163.5 109T40.5 313T0 512t40.5 199t109 163.5t163.5 109t199 40.5t199-40.5t163.5-109t109-163.5t40.5-199t-40.5-199t-109-163.5T711 40.5T512 0"></svg:path>`,
})
export class WhhMoonfullIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMoonnewIcon],svg[whh-moonnew-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-960q-91 0-174 35.5T195 195T99.5 338T64 512t35.5 174T195 829t143 95.5T512 960t174-35.5T829 829t95.5-143T960 512t-35.5-174T829 195T686 99.5T512 64"></svg:path>`,
})
export class WhhMoonnewIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMoonorbitIcon],svg[whh-moonorbit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-105 0-202-42q28-21 46-51q76 29 156 29q91 0 174-35.5T829 829t95.5-143T960 512t-35.5-174T829 195T686 99.5T512 64T338 99.5T195 195T99.5 338T64 512q0 80 29 156q-30 18-51 46Q0 617 0 512q0-104 40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-768q106 0 181 75t75 181t-75 181t-181 75t-181-75t-75-181t75-181t181-75M192 704q53 0 90.5 37.5T320 832t-37.5 90.5T192 960t-90.5-37.5T64 832t37.5-90.5T192 704"></svg:path>`,
})
export class WhhMoonorbitIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMoonthirdquarterIcon],svg[whh-moonthirdquarter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-960v896q91 0 174-35.5T829 829t95.5-143T960 512t-35.5-174T829 195T686 99.5T512 64"></svg:path>`,
})
export class WhhMoonthirdquarterIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMoonwaningcrescentIcon],svg[whh-moonwaningcrescent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-960q-61 0-122 72t-97.5 176.5T256 512t36.5 199.5T390 888t122 72q91 0 174-35.5T829 829t95.5-143T960 512t-35.5-174T829 195T686 99.5T512 64"></svg:path>`,
})
export class WhhMoonwaningcrescentIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMoonwaninggibbousIcon],svg[whh-moonwaninggibbous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-960q61 0 122 72t97.5 176.5T768 512t-36.5 199.5T634 888t-122 72q91 0 174-35.5T829 829t95.5-143T960 512t-35.5-174T829 195T686 99.5T512 64"></svg:path>`,
})
export class WhhMoonwaninggibbousIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMoonwaxingcrescentIcon],svg[whh-moonwaxingcrescent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512q0-104 40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-960q-91 0-174 35.5T195 195T99.5 338T64 512t35.5 174T195 829t143 95.5T512 960q61 0 122-72t97.5-176.5T768 512t-36.5-199.5T634 136T512 64"></svg:path>`,
})
export class WhhMoonwaxingcrescentIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMoonwaxinggibbousIcon],svg[whh-moonwaxinggibbous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-960q-91 0-174 35.5T195 195T99.5 338T64 512t35.5 174T195 829t143 95.5T512 960q-61 0-122-72t-97.5-176.5T256 512t36.5-199.5T390 136t122-72"></svg:path>`,
})
export class WhhMoonwaxinggibbousIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMootoolsIcon],svg[whh-mootools-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 512v384q0 62-46.5 95T99 1024q-39-1-69-40.5T0 896q0-25 19-100t37-156.5T72 514q-2-43-20-85.5t-35-78T0 288q0-14 16-70t32-105l16-49h32l47 127l3 3l9 7l14.5 7l19 4l22.5-3q17-5 27.5-18t11.5-24l2-10L202 7l26-7q7 4 17 11t36.5 28t47 42.5T366 133t18 56q1 33-19 82t-44 91.5t-44.5 85.5t-20.5 64M128 832q-27 0-45.5 19T64 896.5t18.5 45T128 960t45.5-18.5t18.5-45t-18.5-45.5t-45.5-19"></svg:path>`,
})
export class WhhMootoolsIcon {
  readonly viewBox = input("0 0 384 1024")
  readonly width = input("0.38em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMootoolsthreeIcon],svg[whh-mootoolsthree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M934 372q-23 33-83 63t-121.5 49.5T603 534t-94 61q-39 43-102.5 126.5t-123 167T216 983q-28 36-80 40.5T46 998Q7 966 1 910.5T31 812q18-20 96.5-87.5t156-141t108-120t49-97t31.5-101t25-78.5q4-15 56-62t101-86l50-39h64l-64 192q0 3-.5 7t1.5 15t7.5 19.5t20 15.5t35.5 7t36-4.5t20-8.5l4-4l68-175h32q31 100 32 192q1 76-26 116M128.5 832Q102 832 83 850.5T64 896t19 45.5t45.5 18.5t45-18.5T192 896t-18.5-45.5t-45-18.5"></svg:path>`,
})
export class WhhMootoolsthreeIcon {
  readonly viewBox = input("0 0 961 1025")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMootoolstwoIcon],svg[whh-mootoolstwo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 184h-96l-18 185q-8 71 50 71h64l-32 128h-64q-34 0-65-13t-49-33q-46-53-46-114l32-224h-96l32-128h320zM640 536v32H512l32-320q2-26-17.5-45T480 184q-25 0-42 17.5T416 246l-32 322H256l32-320q2-26-17.5-45T224 184q-25 0-43 19.5T160 248l-32 320H0L32 88h96q1 0 11-5.5t12.5-6.5t12-5.5t14-6l12-4l14-3L216 57q42 0 81 17.5t62 47.5q58-65 138-65q53 0 99.5 27.5T666 157q6 14 6 59q0 56-15.5 180.5T640 536"></svg:path>`,
})
export class WhhMootoolstwoIcon {
  readonly viewBox = input("0 0 1024 614")
  readonly width = input("1.67em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMosqueIcon],svg[whh-mosque-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M991.996 640q13 0 22.5 9.5t9.5 22.5v320q0 13-9.5 22.5t-22.5 9.5h-960q-13 0-22.5-9.5t-9.5-22.5V672q0-13 9.5-22.5t22.5-9.5h32V384h-32q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h32v-65q-32-3-48-16.5t-16-46.5q0-36 18-80.5t49-78t61-33.5t61 33.5t49 78t18 80.5q0 33-16 46.5t-48 16.5v65h32q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-32v256h64V512q0-88 54-157t138-91v-8q0-26 19-45t45.5-19t45 19t18.5 45v8q84 22 138 91t54 157v128h64V384h-32q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h32v-65q-32-3-48-16.5t-16-46.5q0-36 18.5-80.5t49-78t60.5-33.5t61 33.5t49 78t18 80.5q0 33-16 46.5t-48 16.5v65h32q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5h-32v256zm-736 160q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5zm128 0q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5zm320 0q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5zm128 0q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5z"></svg:path>`,
})
export class WhhMosqueIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMountainsIcon],svg[whh-mountains-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1001 895H24q-40-37-13-62L410 15q16-15 38-15t38 15l178 364l34-108q15-15 37.5-15t38.5 15l239 562q27 25-12 62M448 128L321 383q0 7-1.5 20t-1 19t3 13.5t10 10T353 447q21-1 37.5-11.5t26-22t26-21T480 383q18 0 34 13.5t28.5 33t26 38.5t32 31.5T640 511z"></svg:path>`,
})
export class WhhMountainsIcon {
  readonly viewBox = input("0 0 1024 895")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMouseIcon],svg[whh-mouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M385 445v-63q28-9 46-36.5t18-58.5V159q0-32-18-59.5T385 62V0q124 12 213 107t104 229Q560 436 385 445m-32.5-126q-13.5 0-22.5-9.5t-9-22.5V159q0-14 9-23t22.5-9t23 9t9.5 23v128q0 13-9.5 22.5t-23 9.5M321 382v63Q145 436 3 336q15-134 104.5-229T321 0v62q-28 10-46.5 37.5T256 159v128q0 31 18.5 58t46.5 37m384 22v235q0 105-47 193.5t-128.5 140t-177 51.5t-177-51.5T47 832.5T0 639V404q161 107 352.5 107T705 404"></svg:path>`,
})
export class WhhMouseIcon {
  readonly viewBox = input("0 0 705 1024")
  readonly width = input("0.69em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMousealtIcon],svg[whh-mousealt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 1024q-87 0-160.5-43T43 864.5T0 704V320q0-87 43-160.5T159.5 43T320 0t160.5 43T597 159.5T640 320v384q0 87-43 160.5T480.5 981T320 1024m.5-832q-26.5 0-45.5 19t-19 45t19 45t45.5 19t45-19t18.5-45t-18.5-45t-45-19"></svg:path>`,
})
export class WhhMousealtIcon {
  readonly viewBox = input("0 0 640 1024")
  readonly width = input("0.63em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMoustacheIcon],svg[whh-moustache-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M853 440q-50 0-104-8.5t-107-26t-89-50.5t-40-75h-2q-4 42-40 75t-89 50.5t-107 26t-104 8.5q-26 0-46-1.5t-44.5-7t-41-15.5t-28-28.5T0 344q0-96 96-96q20 0 28.5 16t0 32T96 312q-4 1-9 2.5t-14 10t-9 19.5q0 32 96 32q36 0 66-17t30-47q0-58 36.5-93t91.5-35q43 0 77 18.5t46 45.5h10q12-27 46-45.5t77-18.5q55 0 91.5 35t36.5 93q0 30 30 47t66 17q96 0 96-32q0-11-8-19t-16-11l-8-2q-20 0-28.5-16t0-32t28.5-16q96 0 96 96q0 25-11.5 43.5t-28 28.5t-41 15.5t-44.5 7t-46 1.5"></svg:path>`,
})
export class WhhMoustacheIcon {
  readonly viewBox = input("0 0 1024 614")
  readonly width = input("1.67em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMoveIcon],svg[whh-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1013 535L815 699q-11 8-29 5t-18-13V577H575v192h114q10 0 13.5 18t-5.5 29l-164 198q-9 11-21.5 11t-21.5-11L326 816q-9-11-5.5-29t12.5-18h114V577H256v114q0 9-18 12.5t-29-4.5L11 534q-11-9-11-21.5T11 491l198-164q11-9 29-5.5t18 12.5v115h191V256H334q-10 0-13.5-18t5.5-29L490 12q9-12 21.5-12T533 12l164 197q9 11 5.5 29T690 256H575v193h193V335q0-10 18-13.5t29 5.5l198 164q11 9 11 22t-11 22"></svg:path>`,
})
export class WhhMoveIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMovieclapperIcon],svg[whh-movieclapper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M969.057 248h-1l-71-119l-127 17l80 120l-212 33l-81-120l-116 18l81 120l-220 35l-77-127l-122 24l81 121l-95 15h104l-64 127h128l64-127h192l-64 127h128l64-127h192l-64 127h128l64-127q26 0 45 18.5t19 44.5v512q0 27-19 45.5t-45 18.5h-895q-27 0-45.5-18.5T2.057 960V448q0-26 18.5-44.5t45.5-18.5q-5-2-12-5.5t-20.5-17.5t-16.5-31l-16-124q-3-25 13.5-45.5t42.5-23.5l882-137q26-3 46.5 13t23.5 41l16 124q3 25-13.5 45.5t-42.5 23.5m-808 648h704q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-704q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5m0-192h704q13 0 22.5-9t9.5-22.5t-9.5-23t-22.5-9.5h-704q-13 0-22.5 9.5t-9.5 23t9.5 22.5t22.5 9"></svg:path>`,
})
export class WhhMovieclapperIcon {
  readonly viewBox = input("0 0 1026 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMoviereelIcon],svg[whh-moviereel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512q0-104 40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199q0 139-68.5 257T769 955.5T512 1024m192-128q53 0 90.5-37.5T832 768t-37.5-90.5T704 640t-90.5 37.5T576 768t37.5 90.5T704 896M511.5 576q26.5 0 45.5-19t19-45t-19-45t-45-19t-45 19t-19 45.5t18.5 45t45 18.5M320 896q53 0 90.5-37.5T448 768t-37.5-90.5T320 640t-90.5 37.5T192 768t37.5 90.5T320 896m-96-608q-53 0-90.5 37.5T96 416t37.5 90.5T224 544t90.5-37.5T352 416t-37.5-90.5T224 288M512 64q-53 0-90.5 37.5T384 192t37.5 90.5T512 320t90.5-37.5T640 192t-37.5-90.5T512 64m288 224q-53 0-90.5 37.5T672 416t37.5 90.5T800 544t90.5-37.5T928 416t-37.5-90.5T800 288"></svg:path>`,
})
export class WhhMoviereelIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMoviereelaltIcon],svg[whh-moviereelalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 128H850q81 72 127.5 171.5T1024 512q0 104-40.5 199t-109 163.5t-163.5 109t-199 40.5t-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0h448q26 0 45 19t19 45.5t-19 45t-45 18.5M192 384q-53 0-90.5 37.5T64 512t37.5 90.5T192 640t90.5-37.5T320 512t-37.5-90.5T192 384M512 64q-53 0-90.5 37.5T384 192t37.5 90.5T512 320t90.5-37.5T640 192t-37.5-90.5T512 64m-64 448q0 27 18.5 45.5t45 18.5t45.5-18.5t19-45.5t-19-45.5t-45.5-18.5t-45 18.5T448 512m64 192q-53 0-90.5 37.5T384 832t37.5 90.5T512 960t90.5-37.5T640 832t-37.5-90.5T512 704m192-192q0 53 37.5 90.5T832 640t90.5-37.5T960 512t-37.5-90.5T832 384t-90.5 37.5T704 512"></svg:path>`,
})
export class WhhMoviereelaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMuffinIcon],svg[whh-muffin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 384q0 42-9 76t-22 59.5t-40 44.5t-48.5 32t-63.5 21.5t-69.5 13T690 637t-85 2.5t-93 .5t-93-.5t-85-2.5t-81.5-6.5t-69.5-13t-63.5-21.5T71 564t-40-44.5T9 460t-9-76q0-70 39-138.5T147 122l-19-58l184-31Q408 0 512 0q180 0 325 94l59-30l96 192l-1 1q33 64 33 127m-83-94l-45 30l-192-160l68-34Q653 64 512 64q-79 0-156 21l28 43l-192 128l-25-74q-49 41-76 90t-27 99q0 83 46 130l18-53l192 64l-37 56q69 8 229 8q92 0 136-1l24-95l160-32l46 81q82-47 82-158q0-40-19-81m-557 62l64-160l192 64l-32 128zM220 979q-92-36-92-83L64 640q53 27 132 42zm164 38q-52-7-98-18l-26-306q56 7 124 9zm192-313v318q-34 2-64 2t-64-2V704zm162 295q-46 11-98 18V702q68-2 124-9zm222-359l-64 256q0 47-92 83l24-297q79-15 132-42"></svg:path>`,
})
export class WhhMuffinIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMugIcon],svg[whh-mug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832.232 704q-31 0-64-12v12q0 80-56 136t-136 56h-384q-80 0-136-56t-56-136V64q0-27 18.5-45.5T64.232 0h640q27 0 45.5 18.5t18.5 45.5v75q31-11 64-11q80 0 136 56t56 136v192q0 80-56 136t-136 56m64-363q0-35-28-60t-68-25q-16 0-32 5v310q16 5 32 5q40 0 68-25t28-60z"></svg:path>`,
})
export class WhhMugIcon {
  readonly viewBox = input("0 0 1025 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMultiplyIcon],svg[whh-multiply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m701.393 511l303 304q20 20 20 47.5t-20 46.5l-94 94q-19 20-47 20t-47-20l-304-303l-304 303q-19 20-47 20t-47-20l-94-94q-20-19-20-46.5t20-47.5l303-304l-303-303q-20-20-20-47.5t20-47.5l94-94q19-19 47-19t47 19l304 304l304-304q19-19 47-19t47 19l94 94q20 20 20 47.5t-20 47.5z"></svg:path>`,
})
export class WhhMultiplyIcon {
  readonly viewBox = input("0 0 1025 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMushroomIcon],svg[whh-mushroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M897.5 511q-52.5 0-110-16T666 463t-132.5-16t-202 33T141 511q-197-6-117-128q30-46 64.5-89.5T179 194t114.5-96.5t136.5-69T587 0q101 0 184.5 30T910 112t85 122t30 149q0 62-37.5 95t-90 33M534 511q49 0 100 9q-35 177 7 407q8 40-1.5 68t-36.5 28H396q-29 0-51.5-26.5T321 934q-6-213 58-401q93-22 155-22"></svg:path>`,
})
export class WhhMushroomIcon {
  readonly viewBox = input("0 0 1025 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMushroomcloudIcon],svg[whh-mushroomcloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928 384q-18 0-36-7q-8 31-33.5 51T800 448q-28 0-53-17q-36 13-84 16q-36 36-57 72q72 10 117 34.5t45 54.5q0 32-51 57.5T586 700q27 133 130 207q138 15 223 46.5t85 70.5H0q0-39 85-70.5T308 907q103-75 130-207q-80-9-131-34.5T256 608q0-30 45-54.5T418 519q-21-36-57-72q-1 0-4 .5t-5 .5q-37 0-73-18q-26 18-55 18q-33 0-58.5-20T132 377q-18 7-36 7q-40 0-68-28T0 288q0-31 18-55.5T65 198q0-1-.5-3t-.5-3q0-53 37.5-90.5T192 64q8 0 17 1q17-29 46.5-47T320 0q57 0 96 44q39-44 96-44q50 0 87 35q29-35 73-35q31 0 55.5 18T762 65q1 0 3-.5t3-.5q58 0 102 36.5t55 91.5h3q40 0 68 28t28 68t-28 68t-68 28M444 578q-55 4-89.5 12T320 608t35 18.5t91 11.5q2-29 2-30q0-12-4-30m134 60q56-3 91-11.5t35-18.5t-34.5-18t-89.5-12q-4 18-4 30q0 1 2 30"></svg:path>`,
})
export class WhhMushroomcloudIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMusicIcon],svg[whh-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M831.5 896Q752 896 696 858.5T640 768t56-90.5T832 640q31 0 64 8V269L384 371v525q0 53-56 90.5T192 1024T56 986.5T0 896t56-90.5T192 768q31 0 64 8V192q0-26 19-45t45-19L960 0q26 0 45 18.5t19 45.5v704q0 53-56.5 90.5t-136 37.5"></svg:path>`,
})
export class WhhMusicIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMusicaltIcon],svg[whh-musicalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 416q0 60-34.5 129.5t-80 114T576 704q-25 0-44.5-20T512 640q0-26 18.5-45t45.5-19q-1-8-4-21t-14-46t-24-58t-36-46t-50-21q-35 0-49.5 13.5T384 448v448q0 53-56 90.5T192 1024T56 986.5T0 896t56-90.5T192 768q31 0 64 8V64q0-26 19-45t45-19q40 0 224 128q32 21 53 35.5t57 45.5t57.5 59t39 68t17.5 80"></svg:path>`,
})
export class WhhMusicaltIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMusicsheetIcon],svg[whh-musicsheet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 768q13 0 22.5 9.5t9.5 22.5t-9.5 22.5T992 832h-96v32q0 13-9.5 22.5T864 896t-22.5-9.5T832 864v-32H32q-13 0-22.5-9.5T0 800t9.5-22.5T32 768h54q-22-30-22-63.5T86 640H32q-13 0-22.5-9.5T0 608t9.5-22.5T32 576h288V448H32q-13 0-22.5-9.5T0 416t9.5-22.5T32 384h288V256H32q-13 0-22.5-9.5T0 224t9.5-22.5T32 192h288V32q0-13 9.5-22.5T352 0t22.5 9.5T384 32v160h192q0-53 47-90.5T736 64t113 37.5t47 90.5h96q13 0 22.5 9.5t9.5 22.5t-9.5 22.5T992 256h-96v128h96q13 0 22.5 9.5t9.5 22.5t-9.5 22.5T992 448h-96v128h96q13 0 22.5 9.5t9.5 22.5t-9.5 22.5T992 640h-96v128zM832 294q-43 26-96 26q-43 0-80-17.5T598 256H384v128h448zm0 154H384v128h448zm0 192H384v96h-6q-5 17-16 32h470zM32 960h960q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5H32q-13 0-22.5-9.5T0 992t9.5-22.5T32 960"></svg:path>`,
})
export class WhhMusicsheetIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMusicthreeIcon],svg[whh-musicthree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-265-888q-10-6-29.5-6.5t-37.5 5.5q-9-7-20-7q-13 0-22.5 9.5t-9.5 22.5v513q-55-33-128-33q-80 0-136 37.5t-56 90.5t56 90.5t135.5 37.5t136-37.5t56.5-90.5V406q12-22 32-22q33 0 57.5 11t38 27t22 38t11 40t2 38t-1 27t-1.5 11q-32 0-32 32q0 14 8.5 23t23.5 9q13 0 28.5-13t31-37t26-66.5t10.5-94.5q0-37-41-104t-88.5-120.5t-71.5-68.5"></svg:path>`,
})
export class WhhMusicthreeIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMuteIcon],svg[whh-mute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m993 448l-64 64l64 64q1 1 4.5 4t5 5t4.5 5t4.5 5t3.5 5t3 5.5t1.5 5t-.5 5t-3 4.5l-43 43q-2 2-4.5 3t-5 .5t-5-1.5t-5.5-3t-5-3.5t-5-4.5l-5-5l-5-5l-4-4l-64-64l-64 64l-3 3q-31 31-42 20l-43-43q-2-3-3-6t.5-6.5t3-6.5t5-7t6-6t7-6.5l5.5-5.5l64-64l-64-64l-4.5-4.5l-5-5l-4.5-5l-5-5.5l-4-5l-3-5.5l-1.5-5l.5-5l3-4.5l43-43q2-2 4.5-3t5-.5t5 1.5t5.5 3t5.5 4t5.5 5t5 4.5t5 5t4 4.5l64 64l64-64q1-2 5.5-6t6.5-6.5t6-6t7-5t6.5-3t6.5-1t6 3.5l43 43q11 11-20 42zm-428 564L320 768V255L565 12q30-30 76 15v970q-45 45-76 15M0 704V319q0-26 19-45t45-19h192v513H64q-26 0-45-18.5T0 704"></svg:path>`,
})
export class WhhMuteIcon {
  readonly viewBox = input("0 0 1020 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMutealtIcon],svg[whh-mutealt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1014 57L57 1014q-10 10-24 10t-23.5-9.5T0 991t10-24L967 10q10-10 24-10t23.5 9.5T1024 33t-10 24M448 256L693 13q30-30 75 16v54L448 402zM128 704V320q0-26 19-45t45-19h192v210L131 720q-3-8-3-16m640 293q-45 45-75 14L448 768v-18l320-320z"></svg:path>`,
})
export class WhhMutealtIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMutemicIcon],svg[whh-mutemic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1007.81 1007.5q-16.5 16.5-40 16.5t-39.5-17l-911-911q-17-16-17-39.5t16.5-40t40-16.5t39.5 16l911 911q17 17 17 40.5t-16.5 40M732.31 579q36-61 36-131q0-26 19-45t45.5-19t45 19t18.5 45q0 124-71 224zm-409-409q8-72 62-120.5t127-48.5q80 0 136 56t56 135v256q0 43-19 84zm162 467q-63-9-108-53.5t-54-107.5zm-292.5-253q26.5 0 45.5 19t19 45q0 106 74.5 181t180.5 75q17 0 37-3l103 104q-38 15-76 21v70h128q27 0 45.5 19t18.5 45.5t-18.5 45t-45.5 18.5h-383q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45.5-19h127v-70q-137-23-228-129.5t-91-248.5q0-26 18.5-45t45-19"></svg:path>`,
})
export class WhhMutemicIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMxentryIcon],svg[whh-mxentry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.356 384h-896q-26 0-45-19t-19-45V64q0-27 19-45.5t45-18.5h896q26 0 45 18.5t19 45.5v256q0 26-19 45t-45 19m-767.5-256q-26.5 0-45.5 18.5t-19 45t19 45.5t45.5 19t45-19t18.5-45.5t-18.5-45t-45-18.5m639.5 0h-384q-26 0-45 18.5t-19 45t19 45.5t45 19h384q27 0 45.5-19t18.5-45.5t-18.5-45t-45.5-18.5m-383 320l18 18l-72 71q-5 6-8 15.5t-3 16.5v7q-1 26 11 39l72 71l-275 275V448zm348 569q-14 7-29 7h-512q-15 0-29-7l285-286zm-222-569h257v513l-385-385z"></svg:path>`,
})
export class WhhMxentryIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMybbIcon],svg[whh-mybb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 416q0 30 5 57t13 45.5t17 32t16.5 19.5t12.5 6q-74 0-138.5-19T776 505q-37 7-72.5 7t-71.5-7l-2 4l-1 3h11q87 0 160.5 30T917 623.5T960 736t-43 112.5T800.5 930T640 960q-36 0-73-6q-45 33-109.5 51.5T320 1024q9 0 23-16t27-54t14-84q-64-60-64-134q0-14 4-32h-4q-35 0-72-7q-45 33-109.5 52T0 768q5 0 12.5-6T29 742.5t17-32T59 665t5-57q0-1 .5-3t.5-3Q0 533 0 448q0-69 43-128t116.5-93.5T320 192q36 0 72 7q25-86 112-142.5T704 0q87 0 160.5 34.5T981 128t43 128q0 85-65 154q0 1 .5 3t.5 3"></svg:path>`,
})
export class WhhMybbIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMymusicIcon],svg[whh-mymusic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.38 896h-768q-53 0-90.5-37.5T.38 768V256q0-26 19-45t45-19h480l46-84q7-19 28-31.5t44-12.5h240q24 0 45 12.5t29 31.5l48 84v576q0 53-37.5 90.5t-90.5 37.5m-296-515q-1 0-11-7t-16-11t-18-11t-21-12t-19.5-10t-19-7.5t-15.5-2.5q-13 0-22.5 10t-9.5 24v235q-30-13-64-13q-53 0-90.5 28t-37.5 68t37.5 68t90.5 28t90.5-28t37.5-68V512q0-21 9-42.5t23-21.5q20 0 36 32t22 64l6 32q-23 0-23 34q0 11 9 20.5t21 9.5q25 0 43-7.5t27-17t13.5-29t5-31.5t.5-37q0-23-10.5-45.5t-30-40.5t-32-28t-31.5-23m-554-337q7-19 28-31.5t44-12.5h240q24 0 45 12.5t29 31.5l48 84H.38z"></svg:path>`,
})
export class WhhMymusicIcon {
  readonly viewBox = input("0 0 1025 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMypicturesIcon],svg[whh-mypictures-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.38 896h-768q-53 0-90.5-37.5T.38 768V256q0-26 19-45t45-19h480l46-84q7-19 28-31.5t44-12.5h240q24 0 45 12.5t29 31.5l48 84v576q0 53-37.5 90.5t-90.5 37.5m-64-576h-640v394l91-92q15-15 37.5-15t37.5 15l145 146h64l-86-87l154-155q15-15 37.5-15t36.5 15l123 123zm-416 256q-40 0-68-28t-28-68t28-68t68-28t68 28t28 68t-28 68t-68 28m-370-532q7-19 28-31.5t44-12.5h240q24 0 45 12.5t29 31.5l48 84H.38z"></svg:path>`,
})
export class WhhMypicturesIcon {
  readonly viewBox = input("0 0 1025 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMyspaceIcon],svg[whh-myspace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.06 1024h-896q-26 0-45-19t-19-45V832q0-26 19-45t45.5-19t45 19t18.5 45v64h768v-64q0-26 18.5-45t45-19t45.5 19t19 45v128q0 27-19 45.5t-45 18.5m-73-480q-13 23-38.5 30t-48.5-6.5t-30-39.5t7-49l30-107l-111-275q-7-12-11.5-28.5t-5.5-31.5t5-26t20-11q30 0 44.5 5.5t26.5 26.5l79 176l51-176q13-23 38.5-29.5t48.5 6.5t30 39t-7 49zm-311-96q-27 0-45.5-18.5t-18.5-45.5V128q0-26-18.5-45t-45.5-19t-45.5 19t-18.5 45v256q0 27-18.5 45.5t-45.5 18.5t-45.5-18.5t-18.5-45.5V128q0-26-18.5-45t-45.5-19t-45.5 19t-18.5 45v256q0 27-18.5 45.5T64.06 448t-45.5-18.5T.06 384V64q0-26 19-45t45-19q27 0 46 19q40-19 82-19q73 0 128 50q55-50 128-50q79 0 135.5 56.5t56.5 135.5v192q0 27-18.5 45.5t-45.5 18.5"></svg:path>`,
})
export class WhhMyspaceIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMysqlthreeIcon],svg[whh-mysqlthree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-960q-91 0-174 35.5T195 195T99.5 338T64 512t35.5 174T195 829t143 95.5T512 960t174-35.5T829 829t95.5-143T960 512t-35.5-174T829 195T686 99.5T512 64m128 800q64-62 64-160q0-93-56-158.5T512 480q-63 0-95.5-45T384 320q0-47 13-89t43-72.5t72-30.5q104 0 192.5 51.5t140 140T896 512q0 61-25 126t-62.5 114t-83.5 80.5t-85 31.5M512 544q42 0 72 30.5t43 72.5t13 89q0 70-32.5 115T512 896q-104 0-192.5-51.5t-140-140T128 512q0-86 37-168t96.5-133T384 160q-36 35-50 81.5T320 352q0 90 54.5 141T512 544"></svg:path>`,
})
export class WhhMysqlthreeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMysqltwoIcon],svg[whh-mysqltwo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256.06 224q0-13 9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5m768 800q-5-2-14.5-5.5t-36-15.5t-51.5-25.5t-55.5-36t-53.5-47.5q-20-14-59-56q21-14 64.5-23.5t76.5-12.5l33-2q0-16-28.5-33.5t-66.5-32t-82.5-40.5t-69.5-55q-19-22-35-48.5t-37-69t-24-48.5q-20-31-57.5-84t-47.5-69q-31-48-108.5-120t-115.5-72q-25 0-46 10q-102-74-114-74q-13 0-22.5 9.5T64.06 96q0 8 31 56t66 96q2 17 5 34t5.5 29t9 28.5t9.5 24t12.5 24.5t11.5 20.5t13 21.5t12 19q-9-1-15-1q-14 0-23 44.5t-9 115.5q0 16 26 62q31 54 37 18q1-6 1-16q0-82 50-94q59 117 101 191t83 125q-83-64-177-211q-9 34-24.5 59.5t-32.5 25.5q-30 0-61-35t-49-79.5t-18-77.5q0-31 8-74.5t21-74.5q-24-34-37.5-67.5t-19.5-89.5q-5-9-14-26q-86-157-86-180q0-26 19-45t45-19q21 0 78 22t89 44q14-2 25-2q48 0 132.5 69t123.5 123q1 1 23 31.5t27.5 38.5t24.5 35t27 41t21.5 36t22 40t14.5 34q18 44 61 82t91 64t94 51.5t76 56.5t30 66q-14 1-36.5 3t-70 11.5t-68.5 23.5q20 25 64.5 59.5t77.5 59.5t33 35"></svg:path>`,
})
export class WhhMysqltwoIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhMyvideosIcon],svg[whh-myvideos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.38 896h-768q-53 0-90.5-37.5T.38 768V256q0-26 19-45t45-19h480l46-84q7-19 28-31.5t44-12.5h240q24 0 45 12.5t29 31.5l48 84v576q0 53-37.5 90.5t-90.5 37.5m-64-576h-640v448h640zm-448 384V384l320 160zm-338-660q7-19 28-31.5t44-12.5h240q24 0 45 12.5t29 31.5l48 84H.38z"></svg:path>`,
})
export class WhhMyvideosIcon {
  readonly viewBox = input("0 0 1025 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhNIcon],svg[whh-n-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 1024q-31 0-56-32L128 263v697q0 26-18.5 45T64 1024t-45.5-19T0 960V65q0-27 18.5-46T64 0q35 0 55 32l521 730V64q0-26 19-45t45.5-19t45 19T768 64v896q0 26-19 45t-45 19"></svg:path>`,
})
export class WhhNIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhNUpperCaseIcon],svg[whh-n-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 1024q-31 0-56-32L128 263v697q0 26-18.5 45T64 1024t-45.5-19T0 960V65q0-27 18.5-46T64 0q35 0 55 32l521 730V64q0-26 19-45t45.5-19t45 19T768 64v896q0 26-19 45t-45 19"></svg:path>`,
})
export class WhhNUpperCaseIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhNailIcon],svg[whh-nail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1021 1021q-16 16-113.5-53T776 865L249 338Q20 393 10 382q-10-9-10-22.5T10 336L336 10q10-10 23.5-10T382 10q11 10-44 239l527 527q34 34 103 131.5t53 113.5"></svg:path>`,
})
export class WhhNailIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhNavigationIcon],svg[whh-navigation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 1024q-40 0-96-64L576 832q-10-6-35-22t-36-22.5t-28-13t-29-6.5q-16 0-35 8.5T361.5 806T320 832L160 960q-3 3-14 13.5t-15.5 15t-15 13t-17.5 12t-16.5 7T64 1024q-27 0-45.5-19T0 960L384 64q0-26 18.5-45t45-19T493 19t19 45l384 896q0 27-19 45.5t-45 18.5"></svg:path>`,
})
export class WhhNavigationIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhNeofourjIcon],svg[whh-neofourj-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M672.338 640q-93 0-158.5-65.5t-65.5-158.5t65.5-158.5t158.5-65.5t158.5 65.5t65.5 158.5t-65.5 158.5t-158.5 65.5m-192-448q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m-224 832q-80 0-136-56t-56-136t56-136t136-56t136 56t56 136t-56 136t-136 56m96-896q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m-160 480q0 13-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5m-64-352q-53 0-90.5-37.5T.338 128t37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5m-32 192q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5m0-128q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5m448 448q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5m128-64q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5t-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5"></svg:path>`,
})
export class WhhNeofourjIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhNetworkIcon],svg[whh-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 512H832v256h64q26 0 45 19t19 45v128q0 27-19 45.5t-45 18.5H704q-27 0-45.5-18.5T640 960V832q0-26 18.5-45t45.5-19h64V512H320v256h64q26 0 45 19t19 45v128q0 27-19 45.5t-45 18.5H192q-27 0-45.5-18.5T128 960V832q0-26 18.5-45t45.5-19h64V512H32q-13 0-22.5-9.5T0 480t9.5-22.5T32 448h480V256h-64q-27 0-45.5-18.5T384 192V64q0-26 18.5-45T448 0h192q26 0 45 19t19 45v128q0 27-19 45.5T640 256h-64v192h416q13 0 22.5 9.5t9.5 22.5t-9.5 22.5T992 512"></svg:path>`,
})
export class WhhNetworkIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhNetworksignalIcon],svg[whh-networksignal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m897 674l-96-84q95-109 95-253T801 85l96-85q60 69 93.5 155.5T1024 337t-33.5 181.5T897 674M753 548l-97-85q48-55 48-126t-48-126l97-84q79 90 79 210t-79 211m-241-83q-53 0-90.5-37.5T384 337t37.5-90.5T512 209t90.5 37.5T640 337t-37.5 90.5T512 465m-241 83q-79-91-79-211t79-210l97 84q-48 55-48 126t48 126zm-48 42l-96 84q-60-69-93.5-155.5T0 337t33.5-181.5T127 0l96 85q-95 108-95 252t95 253"></svg:path>`,
})
export class WhhNetworksignalIcon {
  readonly viewBox = input("0 0 1024 674")
  readonly width = input("1.52em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhNetworksignalaltIcon],svg[whh-networksignalalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.84 1024q-26.5 0-45.5-18.5t-19-45.5V256q0-26 19-45t45.5-19t45 19t18.5 45v704q0 27-18.5 45.5t-45 18.5m-256 0q-26.5 0-45.5-18.5t-19-45.5V512q0-26 19-45t45.5-19t45 19t18.5 45v448q0 27-18.5 45.5t-45 18.5m-256 0q-26.5 0-45.5-18.5t-19-45.5V768q0-26 19-45t45.5-19t45 19t18.5 45v192q0 27-18.5 45.5t-45 18.5m-192.5-784v752q0 13-9 22.5t-22.5 9.5t-23-9.5t-9.5-22.5V240l-182-183q-10-10-10-23.5t10-23.5t23.5-10t23.5 10l135 135V33q0-14 9.5-23t23-9t22.5 9t9 23v112l136-135q10-10 23.5-10t23.5 10t10 23.5t-10 23.5z"></svg:path>`,
})
export class WhhNetworksignalaltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhNewsIcon],svg[whh-news-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.488 1024h-896q-27 0-45.5-19t-18.5-45V64q0-27 18.5-45.5T64.488 0h896q27 0 45.5 18.5t18.5 45.5v896q0 27-18.5 45.5t-45.5 18.5m-544-128h256q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-256q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5m-256 0h128q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-128q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5m0-192h128q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-128q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5m352-544q0-14-9.5-23t-22.5-9h-320q-13 0-22.5 9t-9.5 23v320q0 13 9.5 22.5t22.5 9.5h320q13 0 22.5-9.5t9.5-22.5zm32 480h-128q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h128q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m320-384h-32v-32q0-14-9.5-23t-22.5-9t-22.5 9t-9.5 23v32h-128v-32q0-14-9.5-23t-22.5-9t-22.5 9t-9.5 23v64q0 13 9.5 22.5t22.5 9.5h256q13 0 22.5-9.5t9.5-23t-9.5-22.5t-22.5-9m0 192h-256q-13 0-22.5 9t-9.5 22.5t9.5 23t22.5 9.5h256q13 0 22.5-9.5t9.5-23t-9.5-22.5t-22.5-9m0 192h-192q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h192q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m0 192h-64q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5"></svg:path>`,
})
export class WhhNewsIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhNewtabIcon],svg[whh-newtab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.214 1024h-768q-53 0-90.5-37.5T.214 896V256l48-156q14-43 58.5-71.5t95.5-28.5h364q51 0 95.5 28.5t58.5 71.5l48 156h128q53 0 90.5 37.5t37.5 90.5v512q0 53-37.5 90.5t-90.5 37.5m0-608q0-13-9.5-22.5t-22.5-9.5h-704q-13 0-22.5 9.5t-9.5 22.5v448q0 13 9.5 22.5t22.5 9.5h704q13 0 22.5-9.5t9.5-22.5zm-256 288h-64v64q0 26-19 45t-45 19t-45-19t-19-45v-64h-64q-27 0-45.5-18.5t-18.5-45.5t18.5-45.5t45.5-18.5h64v-64q0-26 19-45t45-19t45 18.5t19 45.5v64h64q26 0 45 18.5t19 45.5t-19 45.5t-45 18.5"></svg:path>`,
})
export class WhhNewtabIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhNewwindowIcon],svg[whh-newwindow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-640-864q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm192 0q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm448 0q0-13-9.5-22.5t-22.5-9.5h-320q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h320q13 0 22.5-9.5t9.5-22.5zm0 192q0-13-9.5-22.5t-22.5-9.5h-704q-13 0-22.5 9.5t-9.5 22.5v512q0 13 9.5 22.5t22.5 9.5h704q13 0 22.5-9.5t9.5-22.5zm-256 352h-64v64q0 27-19 45.5t-45.5 18.5t-45-18.5t-18.5-45.5v-64h-64q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45.5-19h64v-64q0-26 18.5-45t45-19t45.5 19t19 45v64h64q26 0 45 18.5t19 45.5t-19 45.5t-45 18.5"></svg:path>`,
})
export class WhhNewwindowIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhNextIcon],svg[whh-next-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.62 1024q-53 0-90.5-37.5t-37.5-90.5V128q0-53 37.5-90.5T896.62 0t90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-834-11q-25 27-62-13V24q37-40 62-13l563 463q15 16 15 38.5t-15 37.5z"></svg:path>`,
})
export class WhhNextIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhNexusIcon],svg[whh-nexus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 1024H304q-144 0-224-31.5T0 896V128q0-65 80-96.5T304 0h160q145 0 224.5 31.5T768 128v768q0 65-80 96.5T464 1024m240-896H64v768h640zM128 832V191h384z"></svg:path>`,
})
export class WhhNexusIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhNfcIcon],svg[whh-nfc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-416q-45 0-83.5-33.5t-57.5-77.5t-19-81V302l320 274V448l-448-384v768q0 37 19 81t57.5 77.5t83.5 33.5h-224q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h416q45 0 83.5 33.5t57.5 77.5t19 81v530l-320-274v128l448 384V192q0-37-19-81t-57.5-77.5t-83.5-33.5h224q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5"></svg:path>`,
})
export class WhhNfcIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhNinegagIcon],svg[whh-ninegag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 1024L0 768l192-96l256 160l256-160V448L448 576L0 352v-96L448 0l448 256v512zm192-736l-192-96l-192 96l192 96z"></svg:path>`,
})
export class WhhNinegagIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhNintendodsIcon],svg[whh-nintendods-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024.816 512v320q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45V512q0-26 19-45t45-19q-26 0-45-18.5t-19-45.5V64q0-26 19-45t45-19h896q26 0 45 19t19 45v320q0 27-19 45.5t-45 18.5q27 0 45.5 18.5t18.5 45.5m-160 256q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5m-608-112q0-7-4.5-11.5t-11.5-4.5h-48v-48q0-7-4.5-11.5t-11.5-4.5h-32q-7 0-11.5 4.5t-4.5 11.5v48h-48q-7 0-11.5 4.5t-4.5 11.5v32q0 7 4.5 11.5t11.5 4.5h48v48q0 7 4.5 11.5t11.5 4.5h32q7 0 11.5-4.5t4.5-11.5v-48h48q7 0 11.5-4.5t4.5-11.5zm448-560q0-13-9.5-22.5t-22.5-9.5h-320q-13 0-22.5 9.5t-9.5 22.5v256q0 13 9.5 22.5t22.5 9.5h320q13 0 22.5-9.5t9.5-22.5zm0 448q0-13-9.5-22.5t-22.5-9.5h-320q-13 0-22.5 9.5t-9.5 22.5v256q0 13 9.5 22.5t22.5 9.5h320q13 0 22.5-9.5t9.5-22.5zm96 96q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m64-64q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5m64 64q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5"></svg:path>`,
})
export class WhhNintendodsIcon {
  readonly viewBox = input("0 0 1025 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhNobordersIcon],svg[whh-noborders-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 960v-64h64v64zm0-192h64v64h-64zm0-128h64v64h-64zm0-128h64v64h-64zm-64-64h64v64h-64zm128-64v64h-64v-64zm-64-128h64v64h-64zm0-128h64v64h-64zm0-128h64v64h-64zM768 0h64v64h-64zm0 512h-64v-64h64zM640 0h64v64h-64zm0 512h-64v-64h64zM448 128V64h64v64zM384 0h64v64h-64zm128 0h64v64h-64zM384 512h-64v-64h64zM256 0h64v64h-64zm0 512h-64v-64h64zM128 0h64v64h-64zm0 512H64v-64h64zM0 576v-64h64v64zm0-192h64v64H0zm0-128h64v64H0zm0-128h64v64H0zM0 0h64v64H0zm64 704H0v-64h64zm0 128H0v-64h64zm0 128H0v-64h64zm128 0h-64v-64h64zm128 0h-64v-64h64zm192-192h-64v-64h64zm0-128h-64v-64h64zm0-128h-64v-64h64zm-64-320h64v64h-64zm64 192h-64v-64h64zm0 448v64h-64v-64zm64 128h-64v-64h64zm-128 0h-64v-64h64zm256 0h-64v-64h64zm128 0h-64v-64h64z"></svg:path>`,
})
export class WhhNobordersIcon {
  readonly viewBox = input("0 0 960 960")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhNodejsIcon],svg[whh-nodejs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m321 448l128-64l128 64v128l-128 64l-128-64zm552 3L683 576q-20 0-31-13t-11-32V400L449 288L258 400v224l443 259l-192 127q-25 14-60.5 14t-60.5-14L26 771q-28-16-25-39V292q-3-23 25-38L388 14q25-14 60.5-14T509 14l363 240q25 14 24 34h1v124q4 23-24 39"></svg:path>`,
})
export class WhhNodejsIcon {
  readonly viewBox = input("0 0 898 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhNoflashIcon],svg[whh-noflash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m222-199l-79-79l-173 148q19 2 30 2q122 0 222-71M576 704h37l-25-25zM128 512q0 150 101.5 260T479 894L320 704h128l32-128H256l67-162l-124-124q-71 100-71 222m384-384q-122 0-222 71l87 87l39-94h160l-80 213l43 43h165l-55 110l176 176q71-100 71-222q0-104-51.5-192.5t-140-140T512 128"></svg:path>`,
})
export class WhhNoflashIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhNosqlIcon],svg[whh-nosql-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m384-512q0-115-64-211l-64 64v339h76q52-89 52-192m-98 256h-62q-13 0-22.5-9.5T704 736V429l-64 64v147q0 35-19 66l10 9q9 9 9 22t-9 22t-22 9t-22-9l-9-10q-31 19-66 19q-60 0-99-48L301 832q97 64 211 64q84 0 158-34t128-94M512 320q-27 0-45.5 18.5T448 384v83l118-118q-19-29-54-29m0 384q8 0 18-3l-49-49l-23 23q19 29 54 29m12-95l49 49q3-10 3-18v-83zm-345 94q6 1 13 1q12 0 24-5l35-35q5-12 5-24v-32q0-27-19-45.5T192 544q-33 0-63-18q3 95 50 177m44-443q42 10 69.5 44.5T320 384q0 13-9.5 22.5T288 416t-22.5-9.5T256 384q0-26-18.5-45T192 320q-6 0-13 1q-33 57-45 122q8 17 23.5 27t34.5 10q50 0 86 33.5t40 82.5l66-65V384q0-53 37.5-90.5T512 256q60 0 99 48l112-113q-96-63-211-63q-85 0-160.5 35T222 260zm289 508"></svg:path>`,
})
export class WhhNosqlIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhNotebookIcon],svg[whh-notebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 736v64q0 13 9.5 22.5T736 832t22.5 9.5T768 864t-9.5 22.5T736 896H384v128l-96-64l-96 64V896H64q-26 0-45-18.5T0 832V64q0-26 19-45T64 0h640q27 0 45.5 19T768 64v640h-32q-13 0-22.5 9.5T704 736m-640 0v64q0 13 9.5 22.5T96 832h96v-64h192v64h224q13 0 22.5-9.5T640 800v-64q0-13-9.5-22.5T608 704H96q-13 0-22.5 9.5T64 736M704 96q0-13-9.5-22.5T672 64H160q-13 0-22.5 9.5T128 96v512q0 13 9.5 22.5T160 640h512q13 0 22.5-9.5T704 608zM544 384H288q-13 0-22.5-9.5T256 352t9.5-22.5T288 320h256q13 0 22.5 9.5T576 352t-9.5 22.5T544 384m0-128H288q-13 0-22.5-9.5T256 224t9.5-22.5T288 192h256q13 0 22.5 9.5T576 224t-9.5 22.5T544 256"></svg:path>`,
})
export class WhhNotebookIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhNotesIcon],svg[whh-notes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 1024H128q-53 0-90.5-37.5T0 896V192q0-53 37.5-90.5T128 64v128q0 27 19 45.5t45 18.5h64q27 0 45.5-18.5T320 192V64h320v128q0 27 19 45.5t45 18.5h64q27 0 45.5-18.5T832 192V64q53 0 90.5 37.5T960 192v704q0 53-37.5 90.5T832 1024m-32-640H160q-13 0-22.5 9.5T128 416t9.5 22.5T160 448h640q13 0 22.5-9.5T832 416t-9.5-22.5T800 384m0 192H160q-13 0-22.5 9.5T128 608t9.5 22.5T160 640h640q13 0 22.5-9.5T832 608t-9.5-22.5T800 576m0 192H160q-13 0-22.5 9.5T128 800t9.5 22.5T160 832h640q13 0 22.5-9.5T832 800t-9.5-22.5T800 768m-64-576q-13 0-22.5-9.5T704 160V32q0-13 9.5-22.5T736 0t22.5 9.5T768 32v128q0 13-9.5 22.5T736 192m-512 0q-13 0-22.5-9.5T192 160V32q0-13 9.5-22.5T224 0t22.5 9.5T256 32v128q0 13-9.5 22.5T224 192"></svg:path>`,
})
export class WhhNotesIcon {
  readonly viewBox = input("0 0 960 1024")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhNotesdateIcon],svg[whh-notesdate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 1024H128q-53 0-90.5-37.5T0 896V256q0-53 37.5-90.5T128 128h64V64q0-27 19-45.5T256.5 0t45 18.5T320 64v64h128V64q0-27 19-45.5T512.5 0t45 18.5T576 64v64h128V64q0-27 19-45.5T768.5 0t45 18.5T832 64v64h64q53 0 90.5 37.5T1024 256v640q0 53-37.5 90.5T896 1024m0-768h-64q0 26-18.5 45t-45 19t-45.5-19t-19-45H576q0 26-18.5 45t-45 19t-45.5-19t-19-45H320q0 26-18.5 45t-45 19t-45.5-19t-19-45h-64v640h768zM320 448q-27 0-45.5 18.5T256 512q0 13-9.5 22.5T224 544t-22.5-9.5T192 512q0-53 37.5-90.5T320 384t90.5 37.5T448 512v32q0 53-37.5 90.5T320 672q-27 0-45.5 18.5T256 736v16q0 7 4.5 11.5T272 768h144q13 0 22.5 9.5T448 800t-9.5 22.5T416 832H224q-13 0-22.5-9.5T192 800v-64q0-53 37.5-90.5T320 608q27 0 45.5-18.5T384 544v-32q0-27-18.5-45.5T320 448m384-64q53 0 90.5 37.5T832 512v192q0 53-37.5 90.5T704 832q-58 0-93-23t-35-73q0-13 9.5-22.5T608 704t22.5 9.5T640 736q0 12 3.5 19t13 9.5t16.5 3t23 .5h8q27 0 45.5-19t18.5-45v-49q-30 17-64 17q-53 0-90.5-37.5T576 544v-32q0-53 37.5-90.5T704 384m-64 160q0 26 19 45t45.5 19t45-18.5T768 544v-32q0-27-18.5-45.5t-45-18.5t-45.5 18.5t-19 45.5z"></svg:path>`,
})
export class WhhNotesdateIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhNotesdatealtIcon],svg[whh-notesdatealt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 1024H128q-53 0-90.5-37.5T0 896V256q0-53 37.5-90.5T128 128h64V64q0-27 18.5-45.5T256 0t45.5 18.5T320 64v64h128V64q0-27 18.5-45.5T512 0t45.5 18.5T576 64v64h128V64q0-27 18.5-45.5T768 0t45.5 18.5T832 64v64h64q53 0 90.5 37.5T1024 256v640q0 53-37.5 90.5T896 1024M320 672q53 0 90.5-37.5T448 544v-32q0-53-37.5-90.5T320 384t-90.5 37.5T192 512q0 13 9.5 22.5T224 544t22.5-9.5T256 512q0-27 18.5-45.5T320 448t45.5 18.5T384 512v32q0 26-18.5 45T320 608q-53 0-90.5 37.5T192 736v64q0 13 9.5 22.5T224 832h192q13 0 22.5-9.5T448 800t-9.5-22.5T416 768H272q-7 0-11.5-4.5T256 752v-16q0-27 18.5-45.5T320 672m512-160q0-53-37.5-90.5T704 384t-90.5 37.5T576 512v32q0 53 37.5 90.5T704 672q34 0 64-17v49q0 27-18.5 45.5T704 768h-8q-16 0-23-.5t-16.5-3t-13-9.5t-3.5-19q0-13-9.5-22.5T608 704t-22.5 9.5T576 736q0 50 35 73t93 23q53 0 90.5-37.5T832 704zm-128 96q-27 0-45.5-19T640 544v-32q0-27 18.5-45.5T704 448t45.5 18.5T768 512v32q0 26-18.5 45T704 608"></svg:path>`,
})
export class WhhNotesdatealtIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhNoteslistIcon],svg[whh-noteslist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 1024H128q-53 0-90.5-37.5T0 896V256q0-53 37.5-90.5T128 128h64V64q0-27 18.5-45.5T256 0t45.5 18.5T320 64v64h128V64q0-27 18.5-45.5t45-18.5T557 18.5T576 64v64h128V64q0-27 18.5-45.5t45-18.5T813 18.5T832 64v64h64q53 0 90.5 37.5T1024 256v640q0 53-37.5 90.5T896 1024m0-768h-64q0 26-18.5 45t-45 19t-45.5-19t-19-45H576q0 26-18.5 45t-45 19t-45.5-19t-19-45H320q0 26-18.5 45t-45 19t-45.5-19t-19-45h-64v640h768zM224 384h576q13 0 22.5 9.5T832 416t-9.5 22.5T800 448H224q-13 0-22.5-9.5T192 416t9.5-22.5T224 384m0 192h576q13 0 22.5 9.5T832 608t-9.5 22.5T800 640H224q-13 0-22.5-9.5T192 608t9.5-22.5T224 576m0 192h576q13 0 22.5 9.5T832 800t-9.5 22.5T800 832H224q-13 0-22.5-9.5T192 800t9.5-22.5T224 768"></svg:path>`,
})
export class WhhNoteslistIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhNoteslistaltIcon],svg[whh-noteslistalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 1024H128q-53 0-90.5-37.5T0 896V256q0-53 37.5-90.5T128 128h64V64q0-27 19-45.5T256.5 0t45 18.5T320 64v64h128V64q0-27 19-45.5T512.5 0t45 18.5T576 64v64h128V64q0-27 19-45.5T768.5 0t45 18.5T832 64v64h64q53 0 90.5 37.5T1024 256v640q0 53-37.5 90.5T896 1024m-96-640H224q-13 0-22.5 9.5T192 416t9.5 22.5T224 448h576q13 0 22.5-9.5T832 416t-9.5-22.5T800 384m0 192H224q-13 0-22.5 9.5T192 608t9.5 22.5T224 640h576q13 0 22.5-9.5T832 608t-9.5-22.5T800 576m0 192H224q-13 0-22.5 9.5T192 800t9.5 22.5T224 832h576q13 0 22.5-9.5T832 800t-9.5-22.5T800 768"></svg:path>`,
})
export class WhhNoteslistaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhNoteslocationIcon],svg[whh-noteslocation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 1024H128q-53 0-90.5-37.5T0 896V256q0-53 37.5-90.5T128 128h64V64q0-27 19-45.5T256.5 0t45 18.5T320 64v64h128V64q0-27 19-45.5T512.5 0t45 18.5T576 64v64h128V64q0-27 19-45.5T768.5 0t45 18.5T832 64v64h64q53 0 90.5 37.5T1024 256v640q0 53-37.5 90.5T896 1024m0-768h-64q0 26-18.5 45t-45 19t-45.5-19t-19-45H576q0 26-18.5 45t-45 19t-45.5-19t-19-45H320q0 26-18.5 45t-45 19t-45.5-19t-19-45h-64v640h768zM512.5 384q79.5 0 135.5 56t56 136q0 37-25.5 84T620 744t-64.5 62.5T512 832t-43.5-25.5T404 744t-58.5-84t-25.5-84q0-80 56.5-136t136-56m-.5 320q53 0 90.5-37.5T640 576t-37.5-90.5T512 448t-90.5 37.5T384 576t37.5 90.5T512 704"></svg:path>`,
})
export class WhhNoteslocationIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhNoteslocationaltIcon],svg[whh-noteslocationalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 1024H128q-53 0-90.5-37.5T0 896V256q0-53 37.5-90.5T128 128h64V64q0-27 18.5-45.5T256 0t45.5 18.5T320 64v64h128V64q0-27 18.5-45.5T512 0t45.5 18.5T576 64v64h128V64q0-27 18.5-45.5T768 0t45.5 18.5T832 64v64h64q53 0 90.5 37.5T1024 256v640q0 53-37.5 90.5T896 1024M512 320q-80 0-136 56t-56 136q0 37 25.5 94T404 712t64.5 84.5T512 832t43.5-35.5T620 712t58.5-106t25.5-94q0-80-56-136t-136-56M384 512q0-53 37.5-90.5T512 384t90.5 37.5T640 512t-37.5 90.5T512 640t-90.5-37.5T384 512"></svg:path>`,
})
export class WhhNoteslocationaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhNotestasksIcon],svg[whh-notestasks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 1024H128q-53 0-90.5-37.5T0 896V256q0-53 37.5-90.5T128 128h64V64q0-27 18.5-45.5T256 0t45.5 18.5T320 64v64h128V64q0-27 19-45.5T512.5 0t45 18.5T576 64v64h128V64q0-27 19-45.5T768.5 0t45 18.5T832 64v64h64q53 0 90.5 37.5T1024 256v640q0 53-37.5 90.5T896 1024m0-768h-64q0 26-18.5 45t-45 19t-45.5-19t-19-45H576q0 26-18.5 45t-45 19t-45.5-19t-19-45H320q0 26-18.5 45t-45 19t-45.5-19t-19-45h-64v640h768zM362 529l86 86l213-214q19-18 44.5-18t44 18t18.5 44t-18 44L502 736q-6 11-8 13q-19 19-46 18q-28 1-47-18q-2-2-8-13L273 617q-18-18-18-44t18.5-44t44-18t44.5 18"></svg:path>`,
})
export class WhhNotestasksIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhNotestasksaltIcon],svg[whh-notestasksalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 1024H128q-53 0-90.5-37.5T0 896V256q0-53 37.5-90.5T128 128h64V64q0-27 18.5-45.5T256 0t45.5 18.5T320 64v64h128V64q0-27 18.5-45.5T512 0t45.5 18.5T576 64v64h128V64q0-27 18.5-45.5T768 0t45.5 18.5T832 64v64h64q53 0 90.5 37.5T1024 256v640q0 53-37.5 90.5T896 1024m-82.5-622.5Q795 383 769.5 383T725 401L448 679L298 529q-19-18-44.5-18t-44 18.5t-18.5 44t19 43.5l183 183q6 11 8 14q19 18 47 17q27 1 46-17q2-3 8-14l312-311q18-18 18-43.5t-18.5-44"></svg:path>`,
})
export class WhhNotestasksaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhNotificationIcon],svg[whh-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 512v320q0 80-56 136t-136 56H192q-80 0-136-56T0 832V320q0-80 56-136t136-56h320q0-53 37.5-90.5T640 0h256q53 0 90.5 37.5T1024 128v256q0 53-37.5 90.5T896 512m64-384q0-27-19-45.5T896 64H640q-27 0-45.5 18.5T576 128v256q0 27 18.5 45.5T640 448h256q26 0 45-18.5t19-45.5zM800 384q-13 0-22.5-9.5T768 352v-96h-32q-13 0-22.5-9.5T704 224t9.5-22.5T736 192l32-32q0-13 9.5-22.5T800 128t22.5 9.5T832 160v192q0 13-9.5 22.5T800 384"></svg:path>`,
})
export class WhhNotificationIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhNotificationbottomIcon],svg[whh-notificationbottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M855.048 768h-151l-192 256l-192-256h-151q-57 0-113-57t-56-115V172q0-58 56-115t113-57h686q57 0 113 57t56 115v424q0 58-56 115t-113 57m-23-576h-640q-26 0-45 19t-19 45.5t19 45t45 18.5h640q26 0 45-18.5t19-45t-19-45.5t-45-19m0 256h-640q-26 0-45 19t-19 45.5t19 45t45 18.5h640q26 0 45-18.5t19-45t-19-45.5t-45-19"></svg:path>`,
})
export class WhhNotificationbottomIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhNotificationtopIcon],svg[whh-notificationtop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M855 1024H169q-57 0-113-57T0 852V428q0-58 56-115t113-57h151L512 0l192 256h151q57 0 113 57t56 115v424q0 58-56 115t-113 57m-23-576H192q-26 0-45 19t-19 45t19 45t45 19h640q26 0 45-19t19-45t-19-45t-45-19m0 256H192q-26 0-45 18.5t-19 45t19 45.5t45 19h640q26 0 45-19t19-45.5t-19-45t-45-18.5"></svg:path>`,
})
export class WhhNotificationtopIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhNuclearplantIcon],svg[whh-nuclearplant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M996.413 959h-234q-115-638-122-895h224q13 0 22.5 9.5t9.5 22.5q0 79 12 181.5t26 179t44 231t46 239.5q2 13-6 22.5t-22 9.5m-320 64h-648q-14 0-22-9.5t-5-22.5q127-703 127-959q0-13 9.5-22.5t22.5-9.5h384q13 0 22.5 9.5t9.5 22.5q0 256 128 959q2 13-6 22.5t-22 9.5"></svg:path>`,
})
export class WhhNuclearplantIcon {
  readonly viewBox = input("0 0 1025 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhNucleusIcon],svg[whh-nucleus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M544 320L736 0l160 128l-288 224zM128 128L288 0l192 320l-64 32zm288 352L64 709L0 512l384-96zm160 32l64 512H384l64-512zm64-96l384 96l-64 197l-352-229z"></svg:path>`,
})
export class WhhNucleusIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhNumberlistIcon],svg[whh-numberlist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M959.998 576h-512q-26 0-45-18.5t-19-45.5t19-45.5t45-18.5h512q27 0 45.5 18.5t18.5 45.5t-18.5 45.5t-45.5 18.5m0-384h-512q-26 0-45-18.5t-19-45t19-45.5t45-19h512q27 0 45.5 19t18.5 45.5t-18.5 45t-45.5 18.5m-864 832h-64q-13 0-22.5-9.5t-9.5-22.5q0-14 10-23q-3-7-4-9h90q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5l-1-1q-14 2-23.5-7.5t-7.5-23.5q1-10 8-16l15-16h-55q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h128q13 0 22.5 9.5t9.5 22.5q0 11-6.5 19.5t-17.5 11.5l-19 19q43 44 43 78q0 40-28 68t-68 28m96-416q0 13-9.5 22.5t-22.5 9.5h-128q-13 0-22.5-9.5t-9.5-22.5q0-7 9.5-16.5t27.5-24t27-23.5q11-11 28.5-24.5t27-22t9.5-14.5q0-14-10-24.5t-23-10.5h-64q-32 0-32-32q0-13 9.5-22.5t22.5-9.5h64q40 0 68 28t28 68q0 23-15 45.5t-45 50.5h28q13 0 22.5 9.5t9.5 22.5m-32-352h-128q-13 0-22.5-9.5t-9.5-22.5t9.5-22.5t22.5-9.5h32V64h-32q-13 0-22.5-9.5T-.002 32t9.5-22.5t22.5-9.5h64q13 0 22.5 9.5t9.5 22.5v160h32q13 0 22.5 9.5t9.5 22.5t-9.5 22.5t-22.5 9.5m288 576h512q27 0 45.5 19t18.5 45t-18.5 45t-45.5 19h-512q-26 0-45-18.5t-19-45.5t19-45.5t45-18.5"></svg:path>`,
})
export class WhhNumberlistIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhNutIcon],svg[whh-nut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 1024L0 768V256L448 0l448 256v512zm.5-704q-79.5 0-136 56T256 512t56 136t136 56t136-56t56-136t-56-136t-135.5-56"></svg:path>`,
})
export class WhhNutIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhOIcon],svg[whh-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024H256q-106 0-181-75T0 768V256Q0 150 75 75T256 0h256q106 0 181 75t75 181v512q0 106-75 181t-181 75m128-768q0-53-37.5-90.5T512 128H256q-53 0-90.5 37.5T128 256v512q0 53 37.5 90.5T256 896h256q53 0 90.5-37.5T640 768z"></svg:path>`,
})
export class WhhOIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhOUpperCaseIcon],svg[whh-o-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024H256q-106 0-181-75T0 768V256Q0 150 75 75T256 0h256q106 0 181 75t75 181v512q0 106-75 181t-181 75m128-768q0-53-37.5-90.5T512 128H256q-53 0-90.5 37.5T128 256v512q0 53 37.5 90.5T256 896h256q53 0 90.5-37.5T640 768z"></svg:path>`,
})
export class WhhOUpperCaseIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhObservatoryIcon],svg[whh-observatory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 724v128q0 27-19 45.5T896 916H128q-27 0-45.5-18.5T64 852V724q-27 0-45.5-18.5T0 660t18.5-45.5T64 596V404q0-132 70.5-240.5T320 0v404q0 27 18.5 45.5T384 468V148q0-53 37.5-90.5T512 20t90.5 37.5T640 148v320q27 0 45.5-18.5T704 404V0q115 55 185.5 163.5T960 404v192q27 0 45.5 18.5t18.5 45t-19 45.5t-45 19M512 84q-27 0-45.5 19T448 148.5t18.5 45T512 212t45.5-18.5t18.5-45t-18.5-45.5T512 84"></svg:path>`,
})
export class WhhObservatoryIcon {
  readonly viewBox = input("0 0 1024 916")
  readonly width = input("1.12em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhOctoloaderemptyIcon],svg[whh-octoloaderempty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 583V441l256-106v354zm192-153l-128 53v58l128 53zM643 280L749 25l250 250l-256 106zm128-143l-53 128l41 41l128-53zM441 256L335 0h354L583 256zM430 64l53 128h58l53-128zM280 381L24 275L275 24l106 256zm-27-244L137 253l128 53l41-41zm3 446L0 689V335l256 106zM64 430v164l128-53v-58zm317 313L275 999L24 749l256-106zM253 887l53-128l-41-41l-128 53zm330-119l106 256H335l106-256zm11 192l-53-128h-58l-53 128zm149-317l256 106l-250 250l-106-256zm28 244l116-116l-128-53l-41 41z"></svg:path>`,
})
export class WhhOctoloaderemptyIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhOctoloaderfiveIcon],svg[whh-octoloaderfive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 583V441l256-107v355zM643 280L749 24l251 251l-256 106zm-202-24L335 0h354L583 256zM280 381L24 275L275 24l106 256zm-27-244L137 253l128 53l41-41zm3 446L0 689V334l256 107zM64 430v164l128-53v-58zm317 313L275 999L24 749l256-107zM253 887l53-128l-41-41l-128 53zm330-119l106 256H335l106-256zm160-126l257 107l-251 250l-106-256z"></svg:path>`,
})
export class WhhOctoloaderfiveIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhOctoloaderfourIcon],svg[whh-octoloaderfour-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 583V441l256-107v355zM643 280L749 24l251 251l-256 106zm-202-24L335 0h354L583 256zM280 381L24 275L275 24l106 256zm-27-244L137 253l128 53l41-41zm3 446L0 689V334l256 107zM64 430v164l128-53v-58zm317 313L275 999L24 749l256-107zM253 887l53-128l-41-41l-128 53zm330-119l106 256H335l106-256zm11 192l-53-128h-58l-53 128zm150-318l256 107l-251 250l-106-256z"></svg:path>`,
})
export class WhhOctoloaderfourIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhOctoloaderfullIcon],svg[whh-octoloaderfull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 583V441l256-106v354zM643 280L749 25l250 250l-255 107zm-202-24L335 0h354L583 256zM281 381L25 275L276 25l106 255zm-25 202L0 689V335l256 106zm126 161L276 999L25 749l256-106zm201 24l106 256H335l106-256zm161-125l255 106l-250 250l-106-255z"></svg:path>`,
})
export class WhhOctoloaderfullIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhOctoloaderoneIcon],svg[whh-octoloaderone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 583V441l256-106v354zm192-153l-128 53v58l128 53zM643 280L749 25l251 250l-256 106zm128-143l-53 128l41 41l128-53zM441 256L335 0h354L583 256zM281 381L25 275L275 24l106 256zm-28-244L137 253l128 53l41-41zm3 446L0 689V335l256 106zM64 430v164l128-53v-58zm317 313L275 999L24 749l256-106zM253 887l53-128l-41-41l-128 53zm330-119l106 256H335l106-256zm11 192l-53-128h-58l-53 128zm149-317l256 106l-250 250l-106-256zm28 244l116-116l-128-53l-41 41z"></svg:path>`,
})
export class WhhOctoloaderoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhOctoloadersevenIcon],svg[whh-octoloaderseven-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 583V441l256-106v354zM643 280L749 25l250 250l-255 107zm-202-24L335 0h354L583 256zM281 381L25 275L275 25l106 255zm-28-244L138 253l127 53l41-41zm3 446L0 689V335l256 106zm125 161L275 999L25 749l256-106zm202 24l106 256H335l106-256zm161-125l255 106l-250 250l-106-255z"></svg:path>`,
})
export class WhhOctoloadersevenIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhOctoloadersixIcon],svg[whh-octoloadersix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 583V441l256-106v354zM643 280L749 25l251 250l-256 106zm-202-24L335 0h354L583 256zM281 381L24 275L275 24l106 256zm-28-244L138 253l127 53l41-41zm3 446L0 689V335l256 106zM64 430v164l128-53v-58zm317 313L275 999L24 749l257-106zm202 25l106 256H335l106-256zm161-125l256 106l-251 250l-106-256z"></svg:path>`,
})
export class WhhOctoloadersixIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhOctoloaderthreeIcon],svg[whh-octoloaderthree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 583V441l256-106v354zM643 280L749 25l251 250l-257 106zm-202-24L335 0h354L583 256zM281 381L25 275L275 24l106 256zm-28-244L137 253l128 53l41-41zm3 446L0 689V335l256 106zM64 430v164l128-53v-58zm317 313L275 999L24 749l256-106zM253 887l53-128l-41-41l-128 53zm330-119l106 256H335l106-256zm11 192l-53-128h-58l-53 128zm149-317l256 106l-250 250l-106-256zm28 244l116-116l-128-53l-41 41z"></svg:path>`,
})
export class WhhOctoloaderthreeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhOctoloadertwoIcon],svg[whh-octoloadertwo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 583V441l256-106v354zm192-153l-128 53v58l128 53zM643 280L749 25l251 250l-256 106zm-202-24L335 0h354L583 256zM280 381L24 275L275 24l106 256zm-27-244L137 253l128 53l41-41zm3 446L0 689V335l256 106zM64 430v164l128-53v-58zm317 313L275 999L24 749l257-106zM253 887l53-128l-41-41l-128 53zm330-119l106 256H335l106-256zm11 192l-53-128h-58l-53 128zm150-317l256 106l-251 250l-106-256zm27 244l116-116l-128-53l-41 41z"></svg:path>`,
})
export class WhhOctoloadertwoIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhOffIcon],svg[whh-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512q0-97 34.5-185T132 170q3-3 11.5-12t14-14.5t15-10.5t19.5-5q26 0 45 19t19 45q0 16-3.5 28t-7.5 16l-3 5q-54 53-84 123t-30 148q0 104 51.5 192.5t140 140T512 896t192.5-51.5t140-140T896 512q0-78-30-148.5T783 240q-15-15-15-48q0-26 19-45t45-19q7 0 13.5 2t10.5 4t10.5 8t8.5 8.5t9 10.5t8 9q63 69 97.5 157t34.5 185q0 104-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-512q-27 0-45.5-18.5T448 448V64q0-27 19-45.5T512.5 0t45 18.5T576 64v384q0 27-18.5 45.5T512 512"></svg:path>`,
})
export class WhhOffIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhOfficechairIcon],svg[whh-officechair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M736 640h-96q0 26-19 45t-45 19H448v128h160q13 0 22.5 9.5T640 864t-9.5 22.5T608 896H160q-13 0-22.5-9.5T128 864t9.5-22.5T160 832h160V704H192q-27 0-45.5-19T128 640H32q-13 0-22.5-9.5T0 608V352q0-13 9.5-22.5T32 320t22.5 9.5T64 352v224h256v-65q-37 0-63-3t-52-11.5t-41.5-22t-25.5-36t-10-54.5q0-184 72-284T384 0t184 100t72 284q0 32-10 54.5t-25.5 36t-41.5 22t-52 11.5t-63 3v65h256V352q0-13 9.5-22.5T736 320t22.5 9.5T768 352v256q0 13-9.5 22.5T736 640m-96 319.5q0 26.5-19 45.5t-45.5 19t-45-19t-18.5-45.5t18.5-45t45-18.5t45.5 18.5t19 45m-192 0q0 26.5-19 45.5t-45.5 19t-45-19t-18.5-45.5t18.5-45t45-18.5t45.5 18.5t19 45m-192 0q0 26.5-19 45.5t-45.5 19t-45-19t-18.5-45.5t18.5-45t45-18.5t45.5 18.5t19 45"></svg:path>`,
})
export class WhhOfficechairIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhOkcircleIcon],svg[whh-okcircle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m0-896q-104 0-192.5 51.5t-140 140T128 512t51.5 192.5t140 140T512 896t192.5-51.5t140-140T896 512t-51.5-192.5t-140-140T512 128m-2 531q-5 18-15 28q-20 20-49 16q-28 2-46-16q-10-10-14-27L272 546q-17-17-17-41t17-41t41-17t41 17l93 93l222-221q17-17 41-17t41 17t17 41t-17 41z"></svg:path>`,
})
export class WhhOkcircleIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhOksignIcon],svg[whh-oksign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m311-683l-44-44q-10-9-22.5-9t-22.5 9L432 599L289 457q-9-9-22-9t-22 9l-44 44q-9 9-9 22t9 23l152 151q1 11 8 18l44 44q11 11 27 8q16 3 27-8l44-44q6-7 8-18l312-312q9-9 9-22t-9-22"></svg:path>`,
})
export class WhhOksignIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhOneohsevenIcon],svg[whh-oneohseven-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1002 566l-74 74l-64-64l65-64L512 96L96 512l64 64l-64 64l-73-74Q0 544 0 512t23-54L458 22q22-22 54-22t54 22l436 436q22 22 22 54t-22 54M566 343l330 329l-64 64l-320-320l-320 320l-64-64l330-329q22-23 54-23t54 23m0 192l234 233l-64 64l-224-224l-224 224l-64-64l234-233q22-23 54-23t54 23m-54 394l128-128l64 63l-138 137q-22 23-54 23t-54-23L320 864l64-64z"></svg:path>`,
})
export class WhhOneohsevenIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhOneupIcon],svg[whh-oneup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 768v64q0 84-50 138t-142 54H320q-92 0-142-54t-50-138v-64q-48 0-88-40T0 640V512q0-104 40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199v128q0 48-40 88t-88 40m-704 64q0 53 37.5 90.5T320 960h384q53 0 90.5-37.5T832 832v-70h-2q-7-22-51.5-40T704 704h-64v96q0 13-9.5 22.5T608 832t-22.5-9.5T576 800v-96H448v96q0 13-9.5 22.5T416 832t-22.5-9.5T384 800v-96h-64q-30 0-75 18t-51 40h-2zm-45-574Q64 376 64 512v42q30 22 64 22q53 0 90.5-47T256 416q0-60-31.5-104.5T147 258M446 70Q314 90 213 183q17 34 45.5 53.5T320 256q53 0 90.5-47T448 96q0-11-2-26M320 480q0 66 56 113t136 47t136-47t56-113t-56-113t-136-47t-136 47t-56 113M578 70q-2 15-2 26q0 66 37.5 113t90.5 47q33 0 61.5-19.5T811 183Q710 90 578 70m382 442q0-136-83-254q-46 9-77.5 53.5T768 416q0 66 37.5 113t90.5 47q33 0 64-22z"></svg:path>`,
})
export class WhhOneupIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhOneupaltIcon],svg[whh-oneupalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 704h-32v32q0 13-9.5 22.5T928 768h-32v160q0 13-9.5 22.5T864 960h-32v32q0 13-9.5 22.5T800 1024H224q-13 0-22.5-9.5T192 992v-32h-32q-13 0-22.5-9.5T128 928V768H96q-13 0-22.5-9.5T64 736v-32H32q-13 0-22.5-9.5T0 672V352q0-13 9.5-22.5T32 320h32v-96q0-13 9.5-22.5T96 192h32v-32q0-13 9.5-22.5T160 128h32V96q0-13 9.5-22.5T224 64h96V32q0-13 9.5-22.5T352 0h320q13 0 22.5 9.5T704 32v32h96q13 0 22.5 9.5T832 96v32h32q13 0 22.5 9.5T896 160v32h32q13 0 22.5 9.5T960 224v96h32q13 0 22.5 9.5t9.5 22.5v320q0 13-9.5 22.5T992 704M192 864q0 13 9.5 22.5T224 896h32v32q0 13 9.5 22.5T288 960h448q13 0 22.5-9.5T768 928v-32h32q13 0 22.5-9.5T832 864v-64q0-13-9.5-22.5T800 768h-32v-32q0-13-9.5-22.5T736 704h-96v96q0 13-9.5 22.5T608 832t-22.5-9.5T576 800v-96H448v96q0 13-9.5 22.5T416 832t-22.5-9.5T384 800v-96h-96q-13 0-22.5 9.5T256 736v32h-32q-13 0-22.5 9.5T192 800zm160-480q-13 0-22.5 9.5T320 416v128q0 13 9.5 22.5T352 576h32v32q0 13 9.5 22.5T416 640h192q13 0 22.5-9.5T640 608v-32h32q13 0 22.5-9.5T704 544V416q0-13-9.5-22.5T672 384h-32v-32q0-13-9.5-22.5T608 320H416q-13 0-22.5 9.5T384 352v32zm-128-64h-32v-32q0-13-9.5-22.5T160 256t-22.5 9.5T128 288v96H96q-13 0-22.5 9.5T64 416v128q0 13 9.5 22.5T96 576h64q13 0 22.5-9.5T192 544v-32h32q13 0 22.5-9.5T256 480V352q0-13-9.5-22.5T224 320M448 96q0-13-9.5-22.5T416 64t-22.5 9.5T384 96v32h-96q-13 0-22.5 9.5T256 160v64q0 13 9.5 22.5T288 256h64q13 0 22.5-9.5T384 224v-32h32q13 0 22.5-9.5T448 160zm320 64q0-13-9.5-22.5T736 128h-96V96q0-13-9.5-22.5T608 64t-22.5 9.5T576 96v64q0 13 9.5 22.5T608 192h32v32q0 13 9.5 22.5T672 256h64q13 0 22.5-9.5T768 224zm192 256q0-13-9.5-22.5T928 384h-32v-96q0-13-9.5-22.5T864 256t-22.5 9.5T832 288v32h-32q-13 0-22.5 9.5T768 352v128q0 13 9.5 22.5T800 512h32v32q0 13 9.5 22.5T864 576h64q13 0 22.5-9.5T960 544z"></svg:path>`,
})
export class WhhOneupaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhOnionIcon],svg[whh-onion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-108 0-199.5-24.5t-162-72T40 803.5T0 630q0-57 30-113t80.5-101T220 334.5T343 274q29-28 48-56t25.5-56t8.5-44t2-39q0-33 25-56t60-23v79q35 0 60 23t25 56q0 31 9.5 43.5T681 274q63 24 122.5 60t110 81.5T994 517t30 113q0 97-40 173.5t-110.5 124t-162 72T512 1024M192 640q0 115 50 199t134 123q-55-54-87.5-143.5T256 624q0-140 84-264q-66 50-107 122t-41 158m192 0q0-75 4-123t14.5-74t19-36t26.5-23q-22 8-43 25t-40.5 45t-32 71.5T320 622q0 148 55 236.5T512 960q-55-18-91.5-96.5T384 640m300-280q84 124 84 264q0 105-32.5 194.5T648 962q84-39 134-123t50-199q0-86-41-158T684 360"></svg:path>`,
})
export class WhhOnionIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhOpencartIcon],svg[whh-opencart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768.556 768q23-46 50.5-96t40-73t21.5-45.5t9-38.5q0-52-19.5-89t-47.5-37q-197 0-360-24q-256-37-382-166q-21-24-28-34t-20-33.5t-19.5-54T.556 0q12 33 24.5 58.5t22 40t23.5 27.5t20.5 18t21.5 13t19 11q141 88 765 88q49 0 88.5 40.5t39.5 92.5q0 30-9 61t-30 65t-40 60.5t-55 65.5t-57.5 61.5t-64.5 65.5m-480 64q40 0 68 28t28 68t-28 68t-68 28t-68-28t-28-68t28-68t68-28m384 0q40 0 68 28t28 68t-28 68t-68 28t-68-28t-28-68t28-68t68-28"></svg:path>`,
})
export class WhhOpencartIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhOpenclassifiedsIcon],svg[whh-openclassifieds-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 896q-149 0-269-91q-39 58-84.5 116T160 996q-28 27-66.5 27t-66-27.5t-27.5-66T27 864q17-17 75.5-62.5T218 717q-90-120-90-269q0-91 35.5-174T259 131t143-95.5T576 0t174 35.5T893 131t95.5 143t35.5 174t-35.5 174T893 765t-143 95.5T576 896m0-768q-87 0-160.5 43T299 287.5T256 448t43 160.5T415.5 725T576 768t160.5-43T853 608.5T896 448t-43-160.5T736.5 171T576 128m0 448q53 0 91-38l90 91q-75 75-181 75t-181-75t-75-181t75-181t181-75t181 75l-90 90q-38-37-91-37t-90.5 37.5T448 448t37.5 90.5T576 576"></svg:path>`,
})
export class WhhOpenclassifiedsIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhOpenfolderaltIcon],svg[whh-openfolderalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M.232 576V64q0-27 18.5-45.5T64.232 0h384q27 0 45.5 18.5t18.5 45t18.5 45.5t45.5 19h256q27 0 45.5 18.5t18.5 45.5v64h-768zm1024-256l-192 512q0 26-18.5 45t-45.5 19h-704q-27 0-45.5-19t-18.5-45l192-512z"></svg:path>`,
})
export class WhhOpenfolderaltIcon {
  readonly viewBox = input("0 0 1025 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhOpenidIcon],svg[whh-openid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 640H800q-13 0-22.5-9.5T768 608l61-62q-49-42-125-68V346q128 35 214 112l74-74q13 0 22.5 9.5t9.5 22.5v192q0 13-9.5 22.5T992 640M608 937q-14 9-35 23.5T510.5 999t-53.5 24q-132-4-237-52T57.5 844.5T0 672q0-122 108.5-216.5T384 331v130q-113 23-184.5 81T128 672q0 83 91.5 146.5T448 896V140q0-13 9.5-28.5T480 87L608 6q13-8 22.5-4.5T640 18v866q0 14-9.5 29T608 937"></svg:path>`,
})
export class WhhOpenidIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhOpennewwindowIcon],svg[whh-opennewwindow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 768H384q-53 0-90.5-37.5T256 640V128q0-53 37.5-90.5T384 0h512q53 0 90.5 37.5T1024 128v512q0 53-37.5 90.5T896 768m0-576q0-27-18.5-45.5T832 128H448q-27 0-45.5 18.5t-18.5 45t18.5 45.5t45.5 19h232L401 535q-18 18-18 43.5t18 43.5t43.5 18t43.5-18l280-280v234q0 27 19 45.5t45.5 18.5t45-18.5T896 576zm-64 768.5q0 26.5-18.5 45T768 1024H128q-53 0-90.5-37.5T0 896V256q0-27 18.5-45.5t45-18.5t45.5 18.5t19 45.5v576q0 27 18.5 45.5T192 896h576q26 0 45 19t19 45.5"></svg:path>`,
})
export class WhhOpennewwindowIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhOpenshareIcon],svg[whh-openshare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 448H890q-23 137-129.5 228.5T512 768q-78 0-148-29.5T240 656l91-91q75 75 181 75t181-75t75-181v-32q0-13 9.5-22.5T800 320h192q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5T992 448m-352-64q0 53-37.5 90.5T512 512t-90.5-37.5T384 384t37.5-90.5T512 256t90.5 37.5T640 384M512 128q-106 0-181 75t-75 181v32q0 13-9.5 22.5T224 448H32q-13 0-22.5-9.5T0 416v-64q0-13 9.5-22.5T32 320h102q23-137 129.5-228.5T512 0q78 0 148 29.5T784 112l-91 91q-75-75-181-75"></svg:path>`,
})
export class WhhOpenshareIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhOpensourceIcon],svg[whh-opensource-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M692 991L583 690q54-21 87.5-69.5T704 512q0-80-56-136t-136-56t-136 56t-56 136q0 60 33.5 108.5T441 690L332 991Q185 935 92.5 804.5T0 512q0-104 40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199q0 162-92.5 292.5T692 991"></svg:path>`,
})
export class WhhOpensourceIcon {
  readonly viewBox = input("0 0 1024 991")
  readonly width = input("1.04em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhOpenxIcon],svg[whh-openx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M736 1024q-62 0-112.5-19.5t-90.5-60t-62.5-110T448 672q0-23 2-50l127 27q0 3-.5 10.5T576 672q0 115 44 169.5T736 896t116-54.5T896 672q0-97-31.5-150T778 454l-28-133q59 2 107.5 22.5t86.5 61t59 109t21 158.5q0 93-22.5 162.5t-62.5 110t-90.5 60T736 1024M512 448q0 80-56 136t-136 56t-136-56t-56-136q0-44 19.5-83t52.5-66q-8-22-8-43q0-53 37.5-90.5T320 128q21 0 43 8q27-33 66-52.5T512 64q80 0 136 56.5t56 136T648 392t-136 56M256 64.5Q256 38 275 19t45.5-19t45 19T384 64.5t-19 45t-45 18.5t-45-18.5t-19-45M64.5 384Q38 384 19 365T0 319.5t19-45T64.5 256t45 18.5T128 320t-18.5 45.5t-45 18.5"></svg:path>`,
})
export class WhhOpenxIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhOrangeIcon],svg[whh-orange-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m0-960q-91 0-174 35.5T195 195T99.5 338T64 512t35.5 174T195 829t143 95.5T512 960t174-35.5T829 829t95.5-143T960 512t-35.5-174T829 195T686 99.5T512 64m370 549l-104-26l-182-75l187-77l99-25q14 51 14 102q0 50-14 101M571 453l78-187l53-88q91 52 143 144l-91 55zm-59-25l-77-186l-24-100q51-14 101-14t101 14l-25 104zm-241-51l-92-55q52-92 143-144l54 88l77 187zm158 135l-183 75l-104 26q-14-51-14-101t14-102l100 25zm24 59l-75 182l-56 92q-91-52-143-143l87-54zm59 25l76 182l25 104q-51 14-101 14t-101-14l24-100zm246 52l88 54q-52 91-143 143l-56-92l-76-182z"></svg:path>`,
})
export class WhhOrangeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhOrangehrmIcon],svg[whh-orangehrm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M544 256h-32q0-97 135-167q32-17 57-25q-45 0-92 19.5t-82 48t-57.5 61.5t-24.5 60q-33-5-48.5-18.5T384 192q0-35 45.5-80.5T544 33T672 0q55 0 95 8t53 16l12 8q0 12-32 48.5T724.5 156t-95 69.5T544 256m-32 256q-14-7-39-17.5T380.5 466T256 448q-52 0-90 50.5T128 640q0 62 54.5 122T319 859t161 37q77 0 144.5-37.5T730 762t38-122q0-173-186-270q-57-30-134-50q126 0 226 35t161 108.5T896 640q0 104-60 192.5t-163 140t-225 51.5t-225-51.5t-163-140T0 640q0-69 21.5-120.5t59-80t81-42T256 384q63 0 122.5 18.5T475 451t37 61"></svg:path>`,
})
export class WhhOrangehrmIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhOrigamiIcon],svg[whh-origami-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 384L704 704L256 832l-128-64L0 832l128-192l128 64l77-51l79-185L256 0l256 128l95 237l289-173l128 192z"></svg:path>`,
})
export class WhhOrigamiIcon {
  readonly viewBox = input("0 0 1024 832")
  readonly width = input("1.24em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhOsclassIcon],svg[whh-osclass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 256q-56 0-125-32q61 104 61 224q0 91-35.5 174T765 765t-143 95.5T448 896t-174-35.5T131 765T35.5 622T0 448t35.5-174T131 131t143-95.5T448 0q152 0 274 94q29-26 64-53.5T832 6q16-9 32.5-4.5t25 20.5t4 34T874 83q-30 19-107 50q0 1 .5 1.5t1.5.5q54 10 122 27.5T992 192q32 11 32 32q0 13-19.5 22.5T960 256m-768 0q-64 86-64 192q0 32 6 64h64q-6-17-6-32q0-40 28-68t68-28t68 28t28 68q0 15-6 32h140q-6-17-6-32q0-40 28-68t68-28t68 28t28 68q0 15-6 32h63q7-32 7-64q0-106-65-192z"></svg:path>`,
})
export class WhhOsclassIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhOscommerceIcon],svg[whh-oscommerce-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M703 696q-10 138-111 233t-240 95q-96 0-177-47T47 849T0 672q0-111 63-200.5T227 343q-35-55-35-119q0-93 65.5-158.5T416 0q84 0 146.5 55T637 192h3q106 0 181 75t75 181q0 89-54.5 158T703 696m-95-472h-3q-12-68-65-114T416 64q-80 0-136 56t-56 136q0 56 31 103q-85 43-138 118T64 640q0 87 43 160.5T223.5 917T384 960q73 0 139.5-44.5T634 802t61-148q61-25 99-81t38-125q0-93-65.5-158.5T608 224"></svg:path>`,
})
export class WhhOscommerceIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhOutboxIcon],svg[whh-outbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024.428 896v64q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5zm-128-640q0-53-37.5-90.5t-90.5-37.5h-512q-53 0-90.5 37.5t-37.5 90.5v384q0 27 18.5 45.5t45.5 18.5h32q20 0 38 8.5t26 23.5q5 17 16.5 66t15.5 62q8 20 23.5 26t45.5 6h249q29 0 43.5-6t22.5-26q18-90 32-128q13-32 64-32h32q26 0 45-18.5t19-45.5zm-149 256h-107v128q0 27-18.5 45.5t-45.5 18.5h-128q-27 0-45.5-18.5t-18.5-45.5V512h-108q-15 0-19-6t8-19l214-217q14-14 33-14t32 14l214 217q12 13 8 19t-19 6"></svg:path>`,
})
export class WhhOutboxIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhOuterbordersIcon],svg[whh-outerborders-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 960V0h960v960zm896-448h-64v-64h64V64H512v64h-64V64H64v384h64v64H64v384h384v-64h64v64h384zm-256 0h-64v-64h64zm128 0h-64v-64h64zM448 704h64v64h-64zm0-128h64v64h-64zm0-128h64v64h-64zm0-128h64v64h-64zm0-128h64v64h-64zM320 448h64v64h-64zm-128 0h64v64h-64z"></svg:path>`,
})
export class WhhOuterbordersIcon {
  readonly viewBox = input("0 0 960 960")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhOutgoingcallIcon],svg[whh-outgoingcall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.5 384q-26.5 0-45.5-19t-19-45V216L682 431q-19 18-44.5 18T594 430.5t-18-44t18-43.5l216-215H704q-26 0-45-19t-19-45.5t19-45T704 0h256q27 0 45.5 18.5T1024 64v256q0 26-18.5 45t-45 19M648 804l87-87q15-14 52.5-12t76 12t63.5 22q56 26 82 65.5t3 62.5L906 973q-44 44-117.5 49.5t-159.5-23T447 909T264 760T115 577T24.5 395.5t-23-159T51 119L157 13q21-21 55.5 4T286 98q18 27 29 96.5t-8 95.5l-87 87q18 65 95 160t172 172.5T648 804"></svg:path>`,
})
export class WhhOutgoingcallIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhOutgoingcallaltIcon],svg[whh-outgoingcallalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1018 526L793 700q-10 9-25-6V576H608q-13 0-22.5-9.5T576 544v-64q0-13 9.5-22.5T608 448h160V329q15-15 25-5l225 173q6 6 6 14.5t-6 14.5m-570 498h-64q-80 0-149.5-35.5t-122-100t-82.5-162T0 512t30-214.5t82.5-162t122-100T384 0h64q27 0 45.5 18.5T512 64v192q0 26-18.5 45T448 320h-64q-24 0-42-16t-21-39q-129 40-129 247t129 247q3-24 21-39.5t42-15.5h64q27 0 45.5 18.5T512 768v192q0 26-18.5 45t-45.5 19"></svg:path>`,
})
export class WhhOutgoingcallaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhOxwallIcon],svg[whh-oxwall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m0-832q-87 0-160.5 43T235 351.5T192 512t43 160.5T351.5 789T512 832q85 0 159-42l145 26l-26-145q42-74 42-159q0-87-43-160.5T672.5 235T512 192"></svg:path>`,
})
export class WhhOxwallIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPIcon],svg[whh-p-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 640H128v320q0 27-19 45.5T63.5 1024t-45-18.5T0 960V64q0-26 18.5-45T64 0h448q106 0 181 75t75 181v128q0 106-75 181t-181 75m128-384q0-53-37.5-90.5T512 128H128v384h384q53 0 90.5-37.5T640 384z"></svg:path>`,
})
export class WhhPIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPUpperCaseIcon],svg[whh-p-upper-case-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 640H128v320q0 27-19 45.5T63.5 1024t-45-18.5T0 960V64q0-26 18.5-45T64 0h448q106 0 181 75t75 181v128q0 106-75 181t-181 75m128-384q0-53-37.5-90.5T512 128H128v384h384q53 0 90.5-37.5T640 384z"></svg:path>`,
})
export class WhhPUpperCaseIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPacifierIcon],svg[whh-pacifier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024.695 736q0 119-84.5 203.5t-203.5 84.5q-71 0-132-32t-101-88q-95 47-172 55t-111-27q-40-39-23.5-134.5t82.5-205.5q62 48 137 48q93 0 158.5-65.5t65.5-158.5q0-75-48-137q110-66 205.5-82.5t134.5 23.5q35 34 27 111t-55 172q56 40 88 101t32 132m-187-123q-46 66-102 122t-122 102q49 59 123 59q66 0 113-47t47-113q0-74-59-123m-421-37q-30 0-53.5-10t-36-22t-31-22t-39.5-10q-106 0-181-75t-75-181t75-181t181-75t181 75t75 181q0 21 10 39.5t22 31t22 36t10 53.5q0 66-47 113t-113 47"></svg:path>`,
})
export class WhhPacifierIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPackarchiveIcon],svg[whh-packarchive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 1024H64q-27 0-45.5-19T0 960V448q0-27 18.5-45.5T64 384h320q3-219 63-353q7-13 19.5-22T489 0h54q11 0 23 9t19 22q57 134 56 353h319q27 0 45.5 18.5T1024 448v512q0 26-19 45t-45 19m0-576H639q-1 32-4 64h118q15 13 15 32.5T753 578L546 785q-14 15-34.5 15T477 785L270 578q-14-14-14-33.5t14-32.5h117q-2-32-3-64H64v512h896z"></svg:path>`,
})
export class WhhPackarchiveIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPacmanIcon],svg[whh-pacman-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m512 512l385 337q-72 82-172 128.5T512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0q113 0 213 46.5T897 175z"></svg:path>`,
})
export class WhhPacmanIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPagebackIcon],svg[whh-pageback-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 1024H832q-27 0-45.5-19T768 960V576q0-27-19-45.5T704 512H512v229q0 11-13.5 19t-32 7.5T437 755L18 427Q0 409 0 383.5T18 340L437 13Q448 1 466.5.5t32 7.5T512 28v228h256q106 0 181 75t75 181v448q0 26-19 45t-45 19"></svg:path>`,
})
export class WhhPagebackIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPagebreakIcon],svg[whh-pagebreak-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m816.417 400l-112 112h-32l-112-112l-112 112h-32l-112-112l-112 112h-32l-112-112l-48 48V64q0-26 19-45t45-19h768q27 0 45.5 19t18.5 45v416zm-784 112h32l112 112l112-112h32l112 112l112-112h32l112 112l112-112h32l64 64v384q0 26-18.5 45t-45.5 19h-768q-26 0-45-19t-19-45V544z"></svg:path>`,
})
export class WhhPagebreakIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPagecookeryIcon],svg[whh-pagecookery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m96-832H416q-13 0-22.5 9.5T384 224t9.5 22.5T416 256h192q66 0 113 47t47 113t-47 113t-113 47H384v288q0 13 9.5 22.5T416 896t22.5-9.5T448 864V640h160q93 0 158.5-65.5T832 416t-65.5-158.5T608 192"></svg:path>`,
})
export class WhhPagecookeryIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPageforwardIcon],svg[whh-pageforward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1006 427L587 755q-11 12-29.5 12.5t-32-7.5t-13.5-19V512H320q-26 0-45 18.5T256 576v384q0 26-18.5 45t-45.5 19H64q-26 0-45-19T0 960V512q0-106 75-181t181-75h256V28q0-12 13.5-20t32-7.5T587 13l419 327q18 18 18 43.5t-18 43.5"></svg:path>`,
})
export class WhhPageforwardIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPagesetupIcon],svg[whh-pagesetup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M831.405 1024h-767q-27 0-45.5-18.5T.405 960V65q0-27 18.5-45.5T64.405 1h448v191h-256V96q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v96h-96q-13 0-22.5 9.5t-9.5 22.5t9.5 22.5t22.5 9.5h96v511h-96q-13 0-22.5 9.5t-9.5 23t9.5 22.5t22.5 9h96v96q0 14 9.5 23t22.5 9t22.5-9t9.5-23v-96h384v96q0 14 9 23t22.5 9t23-9t9.5-23v-96h95q14 0 23-9t9-22.5t-9-23t-23-9.5h-95V385h191v575q0 27-18.5 45.5t-45.5 18.5m-255-1024q26 0 44 18l256 257q19 19 19 46h-319zm64 767h-384V256h256v97q0 13 9 22.5t23 9.5h96z"></svg:path>`,
})
export class WhhPagesetupIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPaintbrushIcon],svg[whh-paintbrush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1015 971l-44 44q-10 9-86.5 9t-86.5-9L503 619l-68 63q-25 23-82 21.5T270 678q-16-15-14-36.5t11-39t20-27.5l288-288q10-9 27-17.5t39.5-12T680 269q25 24 23 95t-27 95l-53 48l392 292q9 9 9 85.5t-9 86.5M270 678l.5.5l.5.5zm411-409h-1v-1zM393 54q-9-9-9-22t9-22.5T415 0t22 10l184 184l-44 44zm88 280L297 150q-9-10-9-22.5t9-22t22-9.5t22 10l184 184zm-96 96L201 246q-9-10-9-22.5t9-22t22-9.5t22 9l184 185zm-96 95L105 341q-9-9-9-21.5t9-22t22-9.5t22 9l184 184zm-96 96L9 437q-9-9-9-22t9-22t22-9t22 9l184 184z"></svg:path>`,
})
export class WhhPaintbrushIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPaintingIcon],svg[whh-painting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0q112 0 152 27.5T704 128q0 32-15 61t-33 47t-33 40.5t-15 43.5q0 96 96 96q21 0 43.5-15t40.5-33t47-33t61-15q72 0 100 41t28 151q0 104-40.5 199t-109 163.5t-163.5 109t-199 40.5M288 832q40 0 68-28t28-68t-28-68t-68-28t-68 28t-28 68t28 68t68 28m-64-512q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m192-192q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m192 576q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28m192-192q-40 0-68 28t-28 68t28 68t68 28t68-28t28-68t-28-68t-68-28"></svg:path>`,
})
export class WhhPaintingIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPaintrollIcon],svg[whh-paintroll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.193 448h-480v192q26 0 45 19t19 45v256q0 26-19 45t-45 19h-64q-27 0-45.5-19t-18.5-45V704q0-26 18.5-45t45.5-19V416q0-13 9.5-22.5t22.5-9.5h480V192h-64v64q0 26-19 45t-45 19h-768q-27 0-45.5-18.5T.193 256V64q0-26 18.5-45t45.5-19h768q26 0 45 19t19 45v64h96q13 0 22.5 9.5t9.5 22.5v256q0 13-9.5 22.5t-22.5 9.5"></svg:path>`,
})
export class WhhPaintrollIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPaintrollaltIcon],svg[whh-paintrollalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m954 668l52 51q18 19 18 45t-18 44L872 942q-18 18-44.5 18T783 942L435 633l-79 79l14 13q14 15 14 36t-14 35l-213 213q-15 15-36 15t-35-15l-71-71Q0 924 0 903t15-36l213-213q14-14 35-14t36 14l14 14l51-51l4-4q13-13 20.5-19t23.5-12t36-6q11 0 24 8t22 16l8 8l330 288l128-128l-53-53l-35 35q-18 18-44.5 18T783 750L274 241q-19-19-19-45t19-44L407 18q19-18 45-18t44 18l510 509q18 19 18 45t-18 44z"></svg:path>`,
})
export class WhhPaintrollaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPandaIcon],svg[whh-panda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M958.43 309q66 88 66 204q-.002 162-74.502 264.5T744.43 926q-25 52-80 75.5t-152 23.5t-152-23.5t-80-75.5q-131-46-205.5-148.5T.428 513q0-116 66-204q-33-24-50-52q-32-57-1-113.5t107-99.5q50-29 94.5-38.5t83.5 3t61 50.5q20 34 22 80q64-10 129-10t129 10q2-46 22-80q22-38 61-51t83.5-3t94.5 39q76 43 107.5 99.5t-1.5 113.5q-17 29-50 52zm-445.5-116q-125.5 0-226 37T125.426 341.5t-61 176.5q0 237 196 329q-4-28-4-78q16 84 88 138t168 54t168-54t88-138q0 49-3 78q195-92 195-329q0-102-61-176.5t-161-111.5t-225.5-37zm223.5 512q-45 0-83-38t-57.5-89t-19.5-97q0-66 37.5-113t90.5-47q34 0 80 45.5t79 106.5t33 104q0 42-26 72t-61 43t-73 13m-31.5-256q-26.5 0-45.5 18.5t-19 45.5t19 45.5t45.5 18.5t45-18.5t18.5-45t-18.5-45.5t-45-19m-64.5 288q0 15-51.5 55.5t-76.5 40.5t-76.5-41t-51.502-55q0-20 34-26t94-6t94 6t34 26zm-352-32q-38.002 0-73.002-13t-61-43t-26-72q0-43 33-104t79-106.5t80-45.5q53 0 90.5 47t37.5 113q0 46-19.5 97t-57.5 89t-83 38zm32.498-256q-26.5 0-45.5 18.5t-19 45.5t19 45.5t45.5 18.5t45-18.5t18.5-45t-18.5-45.5t-45-19"></svg:path>`,
})
export class WhhPandaIcon {
  readonly viewBox = input("0 0 1026 1025")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPanoramaIcon],svg[whh-panorama-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M994.69 766q-130-63-239-94t-243-31t-244 31t-238 94q-12 6-21 1t-9-19V21q0-13 9-18.5t21 1.5q128 62 238 93.5t244 31.5t243-31t239-94q12-7 21-1.5t9 18.5v727q0 14-9 19t-21-1m-482-573q-109 0-230-23.5T64.69 97v576q51-26 114-46l160-161q18-18 46.5-18t46.5 18l97 98l162-162q18-18 46.5-18t46.5 18l177 178V97q-98 50-218 73t-230 23m-288 256q-40 0-68-28.5t-28-68t28-67.5t68-28t68 28t28 67.5t-28 68t-68 28.5"></svg:path>`,
})
export class WhhPanoramaIcon {
  readonly viewBox = input("0 0 1025 770")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPanoramaaltIcon],svg[whh-panoramaalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M994.69 766q-129-63-226-91V94q97-28 226-90q12-7 21-1.5t9 18.5v727q0 14-9 19t-21-1m-290-106q-92-19-192-19q-99 0-192 19V109q93 20 192 20q100 0 192-19zm-704 88V21q0-13 9-18.5t21 1.5q129 62 226 90v581q-97 28-226 91q-12 6-21 1t-9-19"></svg:path>`,
})
export class WhhPanoramaaltIcon {
  readonly viewBox = input("0 0 1025 770")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPanoramioIcon],svg[whh-panoramio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-896q-104 0-192.5 51.5t-140 140T128 512t51.5 192.5t140 140T512 896t192.5-51.5t140-140T896 512t-51.5-192.5t-140-140T512 128m64 448L448 832V576L192 448h256l128-256v256l256 128z"></svg:path>`,
})
export class WhhPanoramioIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPantiesIcon],svg[whh-panties-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320.632 959q-18-7-60.5-17t-75-22t-51-30.5t-30.5-51t-22-75t-16-60.5q17-15 40-92.5t23-163.5q0-79-29.5-145T.632 170q0-30 7-58.5t16.5-48t20.5-34.5t19-22t11-7q6 11 18 31t52.5 81t85.5 121.5t115.5 144t144 156.5t155.5 143t147 117t119 83.5t83.5 54.5t29.5 17q0 3-7.5 11.5t-22.5 19t-34 20.5t-47.5 16.5t-57.5 6.5q-124-128-279-128q-85 0-162.5 23t-93.5 41"></svg:path>`,
})
export class WhhPantiesIcon {
  readonly viewBox = input("0 0 1025 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPaperboatIcon],svg[whh-paperboat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1011 337L802 653q-12 21-34 35.5T726 703H300q-20 0-42-14.5T224 653L15 337q-18-33-13-57t32-24h197L469 18q18-18 43.5-18T556 18l238 238h198q27 0 32 24t-13 57"></svg:path>`,
})
export class WhhPaperboatIcon {
  readonly viewBox = input("0 0 1026 703")
  readonly width = input("1.46em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPaperclipIcon],svg[whh-paperclip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M513 832q8-7 160-157t178-177q19-18 45.5-18t45.5 18.5t19 45.5t-19 45q-22 22-173 174T610 922q-68 67-159.5 91t-183-1T107 919T13 760t-1-181.5T104 420L452 76Q528 0 636 0t184.5 75.5T897 258t-76 182L535 723q-47 45-115 45t-115.5-45.5t-47.5-108T304 506q17-17 115-117.5T531 274q19-19 45.5-19t45 19t18.5 45.5t-18 45.5q-11 10-112.5 113T398 591q-9 9-9 22t9.5 22t22.5 9t23-9l285-286q92-91-.5-182.5T544 167L193 512q-69 69-68.5 161.5t68 159t159.5 67T513 832"></svg:path>`,
})
export class WhhPaperclipIcon {
  readonly viewBox = input("0 0 961 1025")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPaperclipaltIcon],svg[whh-paperclipalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M879 368q-3 3-6.5 9.5T864 385L512 737q-32 32-64 32H320q-27 0-45.5-19T256 705V577q0-10 5-20t10-15t15-14t12-12l179-179q17-17 41-17t41 17t17 41t-17 41L384 594v47h46l320-320l-175-175l-447 448v303h302l367-367q17-17 41-17t40.5 17t16.5 40.5t-16 40.5L508 982q-5 5-14 15.5t-14 14.5t-13.5 8.5t-18.5 4.5H64q-27 0-45.5-19T0 961V577q0-10 6-20.5t11.5-17t15-14.5t10.5-9L512 33l16-16q19-19 47-16q29-3 48 16l17 16l224 224q7 9 15 16q18 19 15 48q3 28-15 47"></svg:path>`,
})
export class WhhPaperclipaltIcon {
  readonly viewBox = input("0 0 895 1025")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPaperclipverticalIcon],svg[whh-paperclipvertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M351.5 1024q-95.5 0-176.5-46.5T47 851T0 676V256Q0 150 75 75T256 0t181 75t75 181v352q0 66-47 113t-113 47t-113-47t-47-113V448q0-27 18.5-45.5t45-18.5t45.5 18.5t19 45.5v160q0 13 9.5 22.5T352 640t22.5-9.5T384 608V256q0-128-128-128T128 256v410q0 95 65.5 162.5T352 896t158.5-67.5T576 666V384q0-27 18.5-45.5t45-18.5t45.5 19t19 45v292q0 95-47.5 175T528 977.5T351.5 1024"></svg:path>`,
})
export class WhhPaperclipverticalIcon {
  readonly viewBox = input("0 0 704 1024")
  readonly width = input("0.69em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPapercutterIcon],svg[whh-papercutter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M830 378L505 702q-46 47-110.5 60.5T271 753L0 1024V768l143-143q-24-58-10.5-123T193 390L518 65Q582 0 673.5 0T830 65t65 156.5T830 378M230 598l67 67q7 7 17 7t17-7l86-86l-101-100l-86 86q-6 7-6 16.5t6 16.5m467-332l-67-67q-7-7-17-7t-17 7L479 317l100 100l118-118q7-7 7-17t-7-16"></svg:path>`,
})
export class WhhPapercutterIcon {
  readonly viewBox = input("0 0 895 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPaperplaneIcon],svg[whh-paperplane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 512v352q0 13-9.5 22.5T864 896h-64L656 752l-272 272L0 0l1024 384zm-64 0L128 128l704 704z"></svg:path>`,
})
export class WhhPaperplaneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhParenthesesIcon],svg[whh-parentheses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 1024h-64q128-160 128-512T768 0h64q91 85 141.5 216.5T1024 512t-50.5 295.5T832 1024M192 0h64Q128 160 128 512t128 512h-64q-91-85-141.5-216.5T0 512t50.5-295.5T192 0"></svg:path>`,
})
export class WhhParenthesesIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhParkeddomainIcon],svg[whh-parkeddomain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768.338 1024h-640q-53 0-90.5-37.5T.338 896V128q0-53 37.5-90.5t90.5-37.5h640q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-512-192q0 27 19 45.5t45 18.5h64q26 0 45-18.5t19-45.5v-64q0-26-19-45t-45-19h-64q-26 0-45 19t-19 45zm-96-64q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-32q-27 0-45.5 19t-18.5 45v64q0 27 18.5 45.5t45.5 18.5h32q13 0 22.5-9.5t9.5-22.5t-9.5-22.5t-22.5-9.5h-32v-64zm352-640h-192q-26 0-45 19t-19 45v384q0 27 19 45.5t45.5 18.5t45-18.5t18.5-45.5v-64h128q92 0 142-54t50-138t-50-138t-142-54m320 640q0-26-19-45t-45-19h-64q-17 0-32 9q-15-9-32-9h-64q-26 0-45 19t-19 45v96q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5v-96h64v96q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5v-96h64v96q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5zm-320-384h-128V256h128q27 0 45.5 19t18.5 45.5t-18.5 45t-45.5 18.5m-128 448h-64v-64h64z"></svg:path>`,
})
export class WhhParkeddomainIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhParkingmeterIcon],svg[whh-parkingmeter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m740 787l-54 183q-3 23-23.5 38.5T617 1024H279q-25 0-45.5-15.5T210 970l-54-183Q83 724 41.5 636T0 448q0-91 35.5-174T131 131t143-95.5T448 0t174 35.5T765 131t95.5 143T896 448q0 100-41.5 188T740 787M288 640h320q13 0 22.5-9.5T640 608t-9.5-22.5T608 576H288q-13 0-22.5 9.5T256 608t9.5 22.5T288 640M448 64q-143 0-252 91.5T64 384q152 56 337 63l181-182q16-15 36-7q-73-66-170-66q-82 0-147.5 46.5T208 360q-35-7-63-15q33-96 116-156.5T448 128t187 60.5T751 345q-28 8-63 15q-16-45-51-83q8 20-7 36L495 447q185-7 337-63q-22-137-131.5-228.5T448 64"></svg:path>`,
})
export class WhhParkingmeterIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhParthenonIcon],svg[whh-parthenon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 897q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5T992 1025H32q-13 0-22.5-9.5T0 993v-64q0-13 9.5-22.5T32 897h32V385H32q-13 0-22.5-9.5T0 353v-64q0-13 9.5-22.5T32 257h96L490 6q22-11 44 0l362 251h96q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5T992 385h-32v512zM256 385h-64v512h64zm192 0h-64v512h64zm128 512h64V385h-64zm256-512h-64v512h64z"></svg:path>`,
})
export class WhhParthenonIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPasswordIcon],svg[whh-password-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.356 1024h-896q-26 0-45-19t-19-45V640q0-27 19-45.5t45-18.5h896q26 0 45 18.5t19 45.5v320q0 26-19 45t-45 19m0-352q0-13-9.5-22.5t-22.5-9.5h-832q-13 0-22.5 9.5t-9.5 22.5v256q0 13 9.5 22.5t22.5 9.5h832q13 0 22.5-9.5t9.5-22.5zm-192 224q-27 0-45.5-19t-18.5-45.5t18.5-45t45.5-18.5t45.5 18.5t18.5 45t-18.5 45.5t-45.5 19m-191.5 0q-26.5 0-45.5-19t-19-45.5t19-45t45.5-18.5t45 18.5t18.5 45t-18.5 45.5t-45 19m-192.5 0q-27 0-45.5-19t-18.5-45.5t18.5-45t45.5-18.5t45.5 18.5t18.5 45t-18.5 45.5t-45.5 19m-192 0q-27 0-45.5-19t-18.5-45.5t18.5-45t45.5-18.5t45.5 18.5t18.5 45t-18.5 45.5t-45.5 19m768-448h-896q-26 0-45-19t-19-45V64q0-27 19-45.5t45-18.5h896q26 0 45 18.5t19 45.5v320q0 26-19 45t-45 19m0-352q0-13-9.5-22.5t-22.5-9.5h-832q-13 0-22.5 9.5t-9.5 22.5v256q0 13 9.5 22.5t22.5 9.5h832q13 0 22.5-9.5t9.5-22.5zm-800 224q-13 0-22.5-9.5t-9.5-22.5V160q0-13 9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5v128q0 13-9.5 22.5t-22.5 9.5"></svg:path>`,
})
export class WhhPasswordIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPasswordaltIcon],svg[whh-passwordalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 896H128q-53 0-90.5-37.5T0 768V128q0-53 37.5-90.5T128 0h704q53 0 90.5 37.5T960 128v640q0 53-37.5 90.5T832 896m64-256V192q0-26-18.5-45T832 128H128q-27 0-45.5 19T64 192v512q0 26 18.5 45t45.5 19h704q27 0 45.5-19t18.5-45zm-96 64h-64q-13 0-22.5-9.5T704 672v-32h128v32q0 13-9.5 22.5T800 704m-96-320h128v192H704zm0-160q0-13 9.5-22.5T736 192h64q13 0 22.5 9.5T832 224v96H704zM512 576V384h128v192zm0-352q0-13 9.5-22.5T544 192h64q14 0 23 9.5t9 22.5v96H512zM320 576V384h128v192zm0-352q0-13 9-22.5t23-9.5h64q13 0 22.5 9.5T448 224v96H320zM128 576V384h128v192zm0-352q0-13 9.5-22.5T160 192h64q13 0 22.5 9.5T256 224v96H128zm128 448q0 13-9.5 22.5T224 704h-64q-13 0-22.5-9.5T128 672v-32h128zm192-32v32q0 13-9.5 22.5T416 704h-64q-14 0-23-9.5t-9-22.5v-32zm192 0v32q0 13-9 22.5t-23 9.5h-64q-13 0-22.5-9.5T512 672v-32z"></svg:path>`,
})
export class WhhPasswordaltIcon {
  readonly viewBox = input("0 0 960 896")
  readonly width = input("1.08em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPastaIcon],svg[whh-pasta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m896.59 320l-257-52q-5 49-41 82.5t-86 33.5h-64V64h64q50 0 86 33.5t41 81.5l257-51q128 0 128 95q0 53-36 75t-92 22m-544 128q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5v384q0 13-9.5 22.5t-22.5 9.5m-128 576q-13 0-22.5-9.5t-9.5-22.5V32q0-13 9.5-22.5t22.5-9.5t22.5 9.5t9.5 22.5v960q0 13-9.5 22.5t-22.5 9.5M.59 352q0-13 9.5-22.5t22.5-9.5h96v64h-96q-13 0-22.5-9.5T.59 352m0-128q0-13 9.5-22.5t22.5-9.5h96v64h-96q-13 0-22.5-9.5T.59 224m0-128q0-13 9.5-22.5t22.5-9.5h96v64h-96q-13 0-22.5-9.5T.59 96"></svg:path>`,
})
export class WhhPastaIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPastealtIcon],svg[whh-pastealt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.94 1024h-448q-27 0-45.5-18.5t-18.5-45.5V384q0-26 18.5-45t45.5-19h256v256h256v384q0 27-18.5 45.5t-45.5 18.5m-128-703q20 3 32 15l143 147q11 11 14 29h-189zm-128-193h-64V64h64q27 0 45.5 19t18.5 45v128h-64zm-192 64h-256q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45.5-19q0-26 18.5-45t45.5-19h128q27 0 45.5 19t18.5 45q27 0 45.5 19t18.5 45.5t-18.5 45t-45.5 18.5m-448 704h320v64h-320q-26 0-45-18.5T.94 896V128q0-26 18.5-45t45.5-19h64v64h-64z"></svg:path>`,
})
export class WhhPastealtIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPatchIcon],svg[whh-patch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M962.716 962q-62 62-150 62t-150-62l-84-85q-10-40 19-70l210-209q30-31 72-19l83 83q62 62 62 150t-62 150m-416-215q-21 21-50 21t-50-21l-169-169q-21-21-21-50.5t21-49.5l201-201q21-21 50-21t50 21l169 169q21 20 21 49.5t-21 50.5zm-330-320q-29 29-70 19l-84-84q-62-62-62-150t62-150t150-62t150 62l83 82q12 42-19 73z"></svg:path>`,
})
export class WhhPatchIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPathIcon],svg[whh-path-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640 768q-74 0-128-35v163q0 53-37.5 90.5T384 1024h-64q-53 0-90.5-37.5T192 896q0-3 .5-7t4-15t9.5-19.5t19-15.5t31-7h19l8.5-.5l9-1l7.5-1.5l7-2.5l5-4l4.5-5.5l2.5-7.5l1-9.5V384q0-27 18.5-45.5T384 320h64q27 0 45.5 18.5T512 384v128q0 28 38.5 46t89.5 18q77 0 134.5-52T832 384q0-62-43.5-106t-115-65T512 192q-69 0-125 14t-101 43.5t-69.5 80T192 448q0 36 39 89L80 688Q0 578 0 448q0-93 29-169t77.5-127t115-86t139-50.5T512 0q78 0 151.5 15t139 46.5t115 76.5t78 108t28.5 138q0 81-24.5 150t-71 121.5t-121 82.5T640 768"></svg:path>`,
})
export class WhhPathIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPatternIcon],svg[whh-pattern-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M302.41 0h164l558 558v164zm420 0l302 302v164l-466-466zm174 0q53 0 90.5 37.5t37.5 90.5v82l-210-210zm0 1024h-82L.41 210v-82q0-34 18-64l942 942q-30 18-64 18m-338 0L.41 466V302l722 722zm-256 0L.41 722V558l466 466zm-174 0q-53 0-90.5-37.5T.41 896v-82l210 210zm0-1024h82l814 814v82q0 34-18 64l-942-942q30-18 64-18"></svg:path>`,
})
export class WhhPatternIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPauseIcon],svg[whh-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-128q-53 0-90.5-37.5t-37.5-90.5V128q0-53 37.5-90.5t90.5-37.5h128q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-640 0h-128q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h128q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5"></svg:path>`,
})
export class WhhPauseIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPawIcon],svg[whh-paw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1002 398.5q-26 49.5-66 71t-70 2.5t-32.5-67.5t23.5-98t65.5-71T992 233t33 67.5t-23 98M513 865q-58 0-86.5-.5t-73.5-4t-67.5-11.5t-47.5-22t-35-36.5t-10-53.5q0-42 16-94t46-102.5t68.5-93T412 379t101-26t101 26t88.5 68.5t68.5 93T817 643t16 94q0 31-10 53.5T788 827t-47.5 22t-67.5 11.5t-73.5 4t-86.5.5m124-578.5Q600 276 584.5 227t-.5-108t51.5-93T709 2.5T761.5 62t1 108t-51.5 93t-74 23.5m-248 0Q352 297 315.5 263T264 170t.5-108T317 2.5T390.5 26t51.5 93t-.5 108t-52.5 59.5m-365 112q-26-49.5-23-98T34 233t69.5 2.5t65.5 71t23.5 98T160 472t-70-2.5t-66-71"></svg:path>`,
})
export class WhhPawIcon {
  readonly viewBox = input("0 0 1026 865")
  readonly width = input("1.19em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPawnIcon],svg[whh-pawn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 1024H64q-27 0-45.5-18.5T0 960v-64q0-26 18.5-45T64 832q79 0 135.5-89.5T256 512q-45 0-86.5-22.5T128 448q0-21 52-38q-52-69-52-154q0-106 75-181T384 0t181 75t75 181q0 85-52 154q52 17 52 38q0 19-41.5 41.5T512 512q0 141 56.5 230.5T704 832q26 0 45 19t19 45v64q0 27-18.5 45.5T704 1024"></svg:path>`,
})
export class WhhPawnIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPaypalIcon],svg[whh-paypal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1018 434q-25 121-122 195.5T672 704H480q-38 0-64 32l-61 254q-3 14-15.5 24t-26.5 10H155q-14 0-21.5-10t-4.5-24l7-30h113q14 0 26.5-10t15.5-24l61-254q26-32 64-32h192q127 0 224-74.5T954 370q5-23 6-49V213l2.5 2l3.5 3q36 42 50.5 98t1.5 118M544 576H352q-38 0-64 32l-61 254q-3 14-15.5 24T185 896H27q-14 0-21.5-10T1 862L191 42q3-13 22.5-27.5T248 0q302 3 339 3q64 0 142 25.5T838 90q36 42 50.5 98t1.5 118q-25 121-122 195.5T544 576m0-384h-96q-32 0-42.5 6.5T384 224l-32 122q-4 13 12.5 25.5T395 384q10 0 43-1t41-1q72 0 115-30.5t43-78.5q0-41-21.5-61T544 192"></svg:path>`,
})
export class WhhPaypalIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPeaceIcon],svg[whh-peace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m64-133q98-17 176-80L576 635zm-128 0V635L272 811q78 63 176 80M128 512q0 121 70 221l250-250V134q-137 23-228.5 129.5T128 512m448-378v349l250 250q70-100 70-221q0-142-91.5-248.5T576 134"></svg:path>`,
})
export class WhhPeaceIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPearIcon],svg[whh-pear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1000 66q-92 60-150 133q47 57 44 132t-56 128q-38 38-61 90t-33.5 102.5T723 752t-29.5 98t-51.5 81q-74 73-164 88t-176-21t-163-113T26 721.5T5 545t88-163q34-33 82-53t98-29.5t100.5-20T475 246t89-61q46-46 111-54.5T795 153q24-40 69.5-77T941 22t42-20q13-4 24.5 3t15.5 20q6 22-23 41"></svg:path>`,
})
export class WhhPearIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPebbleIcon],svg[whh-pebble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 640v192h-64v32q0 13-9.5 22.5T672 896h-96v96q0 13-9.5 22.5T544 1024H224q-13 0-22.5-9.5T192 992v-96H96q-13 0-22.5-9.5T64 864V448H0V256h64v-96q0-13 9.5-22.5T96 128h96V32q0-13 9.5-22.5T224 0h320q13 0 22.5 9.5T576 32v96h96q13 0 22.5 9.5T704 160v32h64v192h-64v64h64v128h-64v64zM640 256H128v512h512z"></svg:path>`,
})
export class WhhPebbleIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPenIcon],svg[whh-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1015.085 1015q-9 9-21.5 9t-21.5-9l-67-66q-9-9-9-22t9-22t22-9t22 9l66 67q9 9 9 21.5t-9 21.5m-327-173q-3-3-8-12q8-2 13-7l130-130q5-5 7-13q10 5 12 8l64 155l-63 63zm-13-90q-16 15-39 15t-39-15l-517-518q-14-14-15.5-33.5t9.5-35.5l-65-65q-9-9-9-22.5t9-22.5l46-46q9-9 22.5-9t22.5 9l65 65q16-11 35.5-9.5t33.5 15.5l50 49h157q17-3 28 8l258 259q9 9 9 21.5t-9 21.5t-21.5 9t-21.5-9l-249-248h-90l407 406q16 16 16 38.5t-16 38.5z"></svg:path>`,
})
export class WhhPenIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPencilIcon],svg[whh-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m780 949l-172-53l288-288l53 172q-61 18-106 63t-63 106M32 352Q0 319 0 271.5T33 192L192 33q32-33 79.5-33T352 32l512 512l-320 320zm937 493l55 179l-179-55q16-43 48.5-75.5T969 845"></svg:path>`,
})
export class WhhPencilIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPepperoniIcon],svg[whh-pepperoni-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M943.593 943.5q-49.5 49.5-47.5 80.5q-6 0-11.5-6t-11.5-14.5t-9-11.5q-4-4-9-16.5t-12-32t-13-33.5q-85 58-190 48.5t-180-84.5l-310-310q-75-75-84.5-180t48.5-190q-14-6-33.5-13t-32-12t-16.5-9q-3-3-11.5-9t-14.5-11.5t-6-11.5q32 2 81-47q49-50 47-81q6 0 11.5 6t11.5 14.5t9 11.5q4 4 9 16.5t12 32t13 33.5q85-58 190-48.5t180 84.5l310 310q75 75 84.5 180t-48.5 190q14 6 33.5 13t32 12t16.5 9q3 3 11.5 8.5t14.5 11.5t6 12q-31-2-80.5 47.5"></svg:path>`,
})
export class WhhPepperoniIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPercentIcon],svg[whh-percent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832.02 1024q-80 0-136-56.5t-56-136t56-135.5t136-56t136 56t56 135.5t-56 136t-136 56.5m.5-256q-26.5 0-45.5 18.5t-19 45t19 45.5t45.5 19t45-19t18.5-45.5t-18.5-45t-45-18.5m-436.5 192q-14 27-43.5 45.5t-56.5 18.5h-129q-27 0-35.5-19t5.5-45l491-896q14-27 43.5-45.5T728.02 0h129q27 0 35.5 18.5t-5.5 45.5zm-204-576q-80 0-136-56.5t-56-136t56-135.5t136-56t136 56t56 135.5t-56 136t-136 56.5m-.5-256q-26.5 0-45 18.5t-18.5 45t18.5 45.5t45.5 19t45.5-19t18.5-45.5t-19-45t-45.5-18.5"></svg:path>`,
})
export class WhhPercentIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPerfumeIcon],svg[whh-perfume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1006.86 404q18 18 18 59.5t-18 59.5q-8 9-22 25.5t-51.5 71.5t-68.5 116q-32 63-32 96q1 63 64 192h-767q7-14 17.5-37t28.5-74.5t18-80.5q0-16-5.5-34t-10-27.5t-16.5-34.5q-31-60-67-113.5T39.36 546t-20.5-23q-18-18-18-59.5t18-59.5l431-125v-87q-27 0-45.5-18.5t-18.5-45.5q-86 0-130 21q-8 46-43.5 76.5t-82.5 30.5q-53 0-90.5-37.5T1.86 128t37.5-90.5T129.86 0q39 0 71.5 22.5t46.5 57.5q50-15 135-16l1 .5l2 .5v-1q0-26 18.5-45t45.5-19h127q27 0 45.5 19t18.5 45v64q0 27-18.5 45.5t-45.5 18.5v88z"></svg:path>`,
})
export class WhhPerfumeIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPerlaltIcon],svg[whh-perlalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m126-738q-48-48-55-58.5t-7-35.5q0-27-18.5-45.5T512 128V64q-26 0-45 18.5T448 128q0 19-1 32t-6.5 35.5T421 241t-36 46q-48 19-92 48.5T211 402t-60.5 82.5T128 576q0 118 91.5 207T449 891q-1 1-1 2.5v2.5q0 26 19 45t45.5 19t45-19t18.5-45v-5q137-19 228.5-108T896 576q0-46-22.5-91.5T813 402t-82.5-66.5T638 286m-17 553q38-44 60.5-113.5T704 576q0-75-27.5-142.5T607 318q67 38 114 105.5T768 576q0 93-40 162T621 839M448 576q0 183 51 257q-10 3-20 8q-43-31-69-100.5T384 576q0-62 17-113.5t43-81t52-45.5t48-16q-13 0-28.5 16t-31 45.5t-26 81T448 576m-45 263q-67-32-107-101t-40-162q0-85 47-152.5T417 318q-42 48-69.5 115.5T320 576q0 80 22.5 149.5T403 839"></svg:path>`,
})
export class WhhPerlaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPgsqlIcon],svg[whh-pgsql-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M864.95 544q13-27 22.5-113.5t9.5-142.5q0-73-49.5-147.5T736.95 32q12-4 33-13.5t35-14t28-4.5q25 0 57 12.5t62.5 35t51.5 61t21 83.5q0 51-19 125t-58 143t-83 84m-64-288q9 0 24 9q8 30 8 55q0 78-15 171q-16-32-32.5-91t-16.5-80q0-26 9.5-45t22.5-19m-96 96q0 37 29 96.5t70 111.5q-13 54-32 105q90 69 193 69q-46 34-100 34q-41 0-96-30v158q0 48-40 88t-88 40q-37 0-50.5-17t-13.5-47V768q0-23-21-51q-33 26-79.5 38.5t-91.5 12.5q-9 0-17-1.5t-13.5-3.5t-11-6t-8-6t-8-8t-6.5-7q33 0 83.5-21.5t88.5-53.5q-23-14-44-21q26-77 45-151.5t19-104.5q0-92-27-142t-69-50q-45 0-83 20q20-107 71.5-159.5T544.95 0q67 0 137.5 56.5T794.95 193q-90 5-90 159m-320-96q64 0 64 96q0 43-9 86t-28 105.5t-27 96.5q-64-119-64-256q0-50 3-93q29-35 61-35m-73 368q-80 80-119 80q-26 0-59.5-44t-63-111t-49.5-156t-20-169q0-35 12.5-72.5t35-72t60.5-57t84-22.5q60 0 147 34q-40 40-61.5 121.5T256.95 352q0 182 55 272"></svg:path>`,
})
export class WhhPgsqlIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPhonealtIcon],svg[whh-phonealt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.06 1024h-768q-53 0-90.5-37.5T.06 896v-32q0-13 9.5-22.5t22.5-9.5h224q53 0 90.5-37.5t37.5-90.5V96q0-13 9.5-22.5t22.5-9.5h480q53 0 90.5 37.5t37.5 90.5v704q0 53-37.5 90.5t-90.5 37.5m-256-160q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5v-64q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5zm0-192q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5v-64q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5zm0-192q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5v-64q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5zm-192 384q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5v-64q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5zm0-192q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5v-64q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5zm0-192q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5v-64q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5zm512-256q0-13-9.5-22.5t-22.5-9.5h-448q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h448q13 0 22.5-9.5t9.5-22.5zm0 192q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm0 192q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm0 192q0-13-9.5-22.5t-22.5-9.5h-64q-13 0-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm-704-32h-192q-26 0-45-18.5T.06 704V64q0-26 19-45t45-19h192q26 0 45 19t19 45v640q0 27-18.5 45.5t-45.5 18.5"></svg:path>`,
})
export class WhhPhonealtIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPhonebookIcon],svg[whh-phonebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.242 1024h-768q-26 0-45-19t-19-45h64q53 0 90.5-37.5t37.5-90.5t-37.5-90.5t-90.5-37.5h-64v-64h64q53 0 90.5-37.5t37.5-90.5t-37.5-90.5t-90.5-37.5h-64v-64h64q53 0 90.5-37.5t37.5-90.5t-37.5-90.5t-90.5-37.5h-64q0-26 19-45t45-19h768q26 0 45 19t19 45v896q0 26-19 45t-45 19m-288-410v-18q96-39 96-212q0-63-44.5-95.5t-115-32.5t-115.5 32.5t-45 95.5q0 168 96 211v19q-69 12-114 45t-46 75q0 12 21.5 19.5t63 10.5t68.5 3.5t71 .5t71-.5t68.5-3.5t63-10.5t21.5-19.5q-1-42-46-75t-114-45m-416-421.5q0 26.5-18.5 45t-45.5 18.5h-128q-26 0-45-18.5t-19-45t18.5-45.5t45.5-19h128q27 0 45.5 19t18.5 45.5m-192 255.5h128q27 0 45.5 19t18.5 45.5t-18.5 45t-45.5 18.5h-128q-26 0-45-18.5t-19-45.5t19-45.5t45-18.5m0 320h128q27 0 45.5 19t18.5 45t-18.5 45t-45.5 19h-128q-26 0-45-19t-19-45.5t19-45t45-18.5"></svg:path>`,
})
export class WhhPhonebookIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPhonebookaltIcon],svg[whh-phonebookalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.356 960h-64V704h64q27 0 45.5 18.5t18.5 45.5v128q0 27-18.5 45.5t-45.5 18.5m0-320h-64V384h64q27 0 45.5 18.5t18.5 45.5v128q0 27-18.5 45.5t-45.5 18.5m0-320h-64V64h64q27 0 45.5 18.5t18.5 45.5v128q0 27-18.5 45.5t-45.5 18.5m-128 640q0 26-18.5 45t-45.5 19h-704q-26 0-45-19t-19-45V64q0-27 19-45.5t45-18.5h704q27 0 45.5 18.5t18.5 45.5zm-352-346v-18q96-39 96-212q0-63-44.5-95.5t-115-32.5t-115.5 32.5t-45 95.5q0 168 96 211v19q-69 12-114 45t-46 75q0 12 21.5 19.5t63 10.5t68.5 3.5t71 .5t71-.5t68.5-3.5t63-10.5t21.5-19.5q-1-42-46-75t-114-45"></svg:path>`,
})
export class WhhPhonebookaltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPhonemicIcon],svg[whh-phonemic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M944.5 944.5q-38.5 38.5-165 60T513 1026t-266.5-21.5t-165-60t-60-165T0 513t21.5-266.5t60-165t165-60T513 0t266.5 21.5t165 60t60 165T1026 513t-21.5 266.5t-60 165M641.5 770q26.5 0 45.5-19t19-45.5t-19-45t-45.5-18.5t-45 18.5t-18.5 45t18.5 45.5t45 19m-256 0q26.5 0 45-19t18.5-45.5t-18.5-45t-45-18.5t-45.5 18.5t-19 45t19 45.5t45.5 19m-128-320q-26.5 0-45.5 18.5t-19 45t19 45.5t45.5 19t45-19t18.5-45.5t-18.5-45t-45-18.5m128-193q-26.5 0-45.5 19t-19 45.5t19 45t45.5 18.5t45-18.5t18.5-45t-18.5-45.5t-45-19m128 193q-26.5 0-45.5 18.5t-19 45t19 45.5t45.5 19t45.5-19t19-45.5t-19-45t-45.5-18.5m128-193q-26.5 0-45 19T578 321.5t18.5 45t45 18.5t45.5-18.5t19-45t-19-45.5t-45.5-19m128 193q-26.5 0-45 18.5t-18.5 45t18.5 45.5t45 19t45.5-19t19-45.5t-19-45t-45.5-18.5"></svg:path>`,
})
export class WhhPhonemicIcon {
  readonly viewBox = input("0 0 1026 1026")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPhoneoldIcon],svg[whh-phoneold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 896v32q0 13-9.5 22.5T864 960h-64q-13 0-22.5-9.5T768 928v-32H256v32q0 13-9.5 22.5T224 960h-64q-13 0-22.5-9.5T128 928v-32q-53 0-90.5-37.5T0 768v-64q0-70 36.5-144.5t97-125T256 384q26 0 45-18.5t19-45.5v-64q0-26 18.5-45t45.5-19t45.5 19t18.5 45h128q0-26 18.5-45t45.5-19t45.5 19t18.5 45v64q0 27 18.5 45.5T768 384q62 0 122.5 50.5t97 125T1024 704v64q0 53-37.5 90.5T896 896M512 448q-80 0-136 56.5t-56 136T376 776t136 56t136-56t56-136t-56-136t-136-56m0 320q-53 0-90.5-37.5T384 640t37.5-90.5T512 512t90.5 37.5T640 640t-37.5 90.5T512 768m384-448h-32.5l-28.5-1l-27.5-3l-20-5.5l-15-9L768 288V185q-25-22-100-39.5T512 128t-156 17.5T256 185v103q0 8-4.5 13.5t-15 9t-20 5.5t-27.5 3t-28.5 1H93l-29-1l-27-3l-19-5.5l-14-9L0 288v-87q0-62 69.5-108.5T254 23T512 0t258 23t184.5 69.5T1024 201v87q0 8-4 13.5t-14 9t-19 5.5t-27 3t-29 1z"></svg:path>`,
})
export class WhhPhoneoldIcon {
  readonly viewBox = input("0 0 1024 960")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPhonescreensizeIcon],svg[whh-phonescreensize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 1024H64q-27 0-45.5-18.5T0 960V64q0-26 18.5-45T64 0h640q27 0 45.5 19T768 64v896q0 27-18.5 45.5T704 1024m0-896H64v768h640zM256 256l320 448l64-64v192H448l64-64l-320-448l-64 64V192h192z"></svg:path>`,
})
export class WhhPhonescreensizeIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPhorumIcon],svg[whh-phorum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M448 895v43q0 37-31 64t-74 21q-55-7-110-26q-51-19-78-46t-27-75V761q-61-62-94.5-142.5T0 448q0-91 35.5-174T131 131t143-95.5T448 0t174 35.5T765 131t95 143t35 174t-35 173.5T765 764t-143 95.5T448 895m0-767q-69 0-165 26.5T102 226q-20 11-11 85q8 67 26 73q4 1 7-1q9-3 32-15.5t36-15.5v511q0 19 19 45t44 35q33 12 66 16q26 4 44.5-12.5T384 908V757q55 10 96 10q87 0 168.5-42T781 608t51-160q0-67-24.5-124.5T736 222t-121-69t-167-25m22 448q-29 0-86-8V326q46-6 70-6q89 0 137.5 36t48.5 92q0 52-52.5 90T470 576"></svg:path>`,
})
export class WhhPhorumIcon {
  readonly viewBox = input("0 0 895 1025")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPhotobucketIcon],svg[whh-photobucket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 704H724q-96 64-212 64t-212-64H64q-27 0-45.5-18.5T0 640V128q0-26 18.5-45T64 64h64V32q0-13 9.5-22.5T160 0h128q13 0 22.5 9.5T320 32v21Q410 0 512 0q116 0 212 64h236q27 0 45.5 19t18.5 45v512q0 27-18.5 45.5T960 704M64 640h162q-98-110-98-256t98-256H64zM512 64q-87 0-160.5 43T235 223.5T192 384t43 160.5T351.5 661T512 704t160.5-43T789 544.5T832 384t-43-160.5T672.5 107T512 64m448 64H798q98 110 98 256t-98 256h162zM704 384q0-79-56-135.5T512 192v-64q106 0 181 75t75 181z"></svg:path>`,
})
export class WhhPhotobucketIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPhotonineframesIcon],svg[whh-photonineframes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.356 1024h-896q-26 0-45-19t-19-45V64q0-27 19-45.5t45-18.5h896q27 0 45.5 18.5t18.5 45.5v896q0 26-18.5 45t-45.5 19m0-256h-112q-7 0-11.5-4.5t-4.5-11.5v-32q0-7 4.5-11.5t11.5-4.5h112V320h-112q-7 0-11.5-4.5t-4.5-11.5v-32q0-7 4.5-11.5t11.5-4.5h112V64h-192v112q0 7-4.5 11.5t-11.5 4.5h-32q-7 0-11.5-4.5t-4.5-11.5V64h-384v112q0 7-4.5 11.5t-11.5 4.5h-32q-7 0-11.5-4.5t-4.5-11.5V64h-192v192h112q7 0 11.5 4.5t4.5 11.5v32q0 7-4.5 11.5t-11.5 4.5h-112v384h112q7 0 11.5 4.5t4.5 11.5v32q0 7-4.5 11.5t-11.5 4.5h-112v192h192V848q0-7 4.5-11.5t11.5-4.5h32q7 0 11.5 4.5t4.5 11.5v112h384V848q0-7 4.5-11.5t11.5-4.5h32q7 0 11.5 4.5t4.5 11.5v112h192zm-208 0h-96q-7 0-11.5-4.5t-4.5-11.5v-32q0-7 4.5-11.5t11.5-4.5h48v-48q0-7 4.5-11.5t11.5-4.5h32q7 0 11.5 4.5t4.5 11.5v96q0 7-4.5 11.5t-11.5 4.5m0-192h-32q-7 0-11.5-4.5t-4.5-11.5v-96q0-7 4.5-11.5t11.5-4.5h32q7 0 11.5 4.5t4.5 11.5v96q0 7-4.5 11.5t-11.5 4.5m0-192h-32q-7 0-11.5-4.5t-4.5-11.5v-48h-48q-7 0-11.5-4.5t-4.5-11.5v-32q0-7 4.5-11.5t11.5-4.5h96q7 0 11.5 4.5t4.5 11.5v96q0 7-4.5 11.5t-11.5 4.5m-192 384h-96q-7 0-11.5-4.5t-4.5-11.5v-32q0-7 4.5-11.5t11.5-4.5h96q7 0 11.5 4.5t4.5 11.5v32q0 7-4.5 11.5t-11.5 4.5m0-448h-96q-7 0-11.5-4.5t-4.5-11.5v-32q0-7 4.5-11.5t11.5-4.5h96q7 0 11.5 4.5t4.5 11.5v32q0 7-4.5 11.5t-11.5 4.5m-192 448h-96q-7 0-11.5-4.5t-4.5-11.5v-96q0-7 4.5-11.5t11.5-4.5h32q7 0 11.5 4.5t4.5 11.5v48h48q7 0 11.5 4.5t4.5 11.5v32q0 7-4.5 11.5t-11.5 4.5m0-448h-48v48q0 7-4.5 11.5t-11.5 4.5h-32q-7 0-11.5-4.5t-4.5-11.5v-96q0-7 4.5-11.5t11.5-4.5h96q7 0 11.5 4.5t4.5 11.5v32q0 7-4.5 11.5t-11.5 4.5m-96 128h32q7 0 11.5 4.5t4.5 11.5v96q0 7-4.5 11.5t-11.5 4.5h-32q-7 0-11.5-4.5t-4.5-11.5v-96q0-7 4.5-11.5t11.5-4.5"></svg:path>`,
})
export class WhhPhotonineframesIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPhotoshopIcon],svg[whh-photoshop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-448-640q0-53-37.5-90.5t-90.5-37.5h-160q-13 0-22.5 9.5t-9.5 22.5v448q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5V576h128q53 0 90.5-37.5t37.5-90.5zm320-128h-64q-53 0-90.5 37.5t-37.5 90.5v32q0 50 35 73t93 23h64q25 0 44.5 33t19.5 63v32q0 26-19 45t-45 19h-64q-27 0-45.5-19t-18.5-45q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5q0 53 37.5 90.5t90.5 37.5h64q53 0 90.5-37.5t37.5-90.5v-32q0-56-38.5-108t-89.5-52h-72q-15 0-22.5-.5t-16.5-3t-13-9.5t-4-19v-32q0-27 19-45.5t45-18.5h64q27 0 45.5 19t18.5 45q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5q0-53-37.5-90.5t-90.5-37.5m-448 256h-128V320h128q27 0 45.5 19t18.5 45v64q0 27-18.5 45.5t-45.5 18.5"></svg:path>`,
})
export class WhhPhotoshopIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPhotosphereIcon],svg[whh-photosphere-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M875 710q-62 86-157.5 136T512 896t-205.5-50T149 710Q0 636 0 448t149-262q62-86 157.5-136T512 0t205.5 50T875 186q149 74 149 262T875 710M512 192q-88 0-154 7t-123.5 24.5t-93.5 46T84.5 343T64 448q0 88 41.5 142T229 671l141-141q18-19 46.5-19t46.5 19l97 97l162-161q18-19 46.5-19t46.5 19l112 112q33-52 33-130q0-60-20.5-105T883 269.5t-93.5-46T666 199t-154-7M256 512q-40 0-68-28t-28-68t28-68t68-28t68 28t28 68t-28 68t-68 28"></svg:path>`,
})
export class WhhPhotosphereIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPhpIcon],svg[whh-php-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 768q-139 0-257-51.5t-186.5-140T0 384t68.5-192.5T255 51.5T512 0t257 51.5t186.5 140T1024 384t-68.5 192.5t-186.5 140T512 768M288 256h-80q-7 0-11.5 4.5T192 272l-64 224q0 7 4.5 11.5T144 512h32q7 0 11.5-4.5T192 496l14-48h50q24 0 43-3t40-12t33-29.5t12-51.5q0-40-28-68t-68-28m256 0h-14l14-48q0-7-4.5-11.5T528 192h-32q-7 0-11.5 4.5T480 208l-64 224q0 7 4.5 11.5T432 448h32q7 0 11.5-4.5T480 432l32-112q46 2 58 33l-26 79q0 7 4.5 11.5T560 448h32q7 0 11.5-4.5T608 432l32-96q0-6-5-11q-8-30-33.5-49.5T544 256m256 0h-80q-7 0-11.5 4.5T704 272l-64 224q0 7 4.5 11.5T656 512h32q7 0 11.5-4.5T704 496l14-48h50q24 0 43-3t40-12t33-29.5t12-51.5q0-40-28-68t-68-28m0 128h-64l18-64h46q13 0 22.5 9.5T832 352t-9.5 22.5T800 384m-512 0h-64l18-64h46q13 0 22.5 9.5T320 352t-9.5 22.5T288 384"></svg:path>`,
})
export class WhhPhpIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPhpbbIcon],svg[whh-phpbb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m0-704q0-53-37.5-90.5t-90.5-37.5t-90.5 37.5t-37.5 90.5t37.5 90.5t90.5 37.5q-68 0-116 46.5t-66 127.5q-70-110-202-110q79 0 135.5-56t56.5-135.5t-56.5-136t-136-56.5t-135.5 56.5t-56 136t56 135.5t136 56q-116 0-186 88t-70 232q64 36 116 50t140 14t140-14t116-50q0-44-8-87q53 23 136 23q66 0 105-11.5t87-41.5q0-121-52.5-194t-139.5-73q53 0 90.5-37.5t37.5-90.5"></svg:path>`,
})
export class WhhPhpbbIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPhpbbaltIcon],svg[whh-phpbbalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 512H256L0 320L512 0l512 320zm0 64l224-160l-96 416l-192 192h-64l64-320H320l64 320h-64L128 832L32 416l224 160z"></svg:path>`,
})
export class WhhPhpbbaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPhplistIcon],svg[whh-phplist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 384H704v256l-64 64l-64-64V384H448v256l-64-64l-64 64V384H192q-80 0-136-56T0 192.5t56-136T192 0h256v256h128V0h256q80 0 136 56t56 136t-56.5 136T832 384M320 128H192q-27 0-45.5 19T128 192.5t18.5 45T192 256h128zm512 0H704v128h128q26 0 45-18.5t19-45t-19-45.5t-45-19"></svg:path>`,
})
export class WhhPhplistIcon {
  readonly viewBox = input("0 0 1024 704")
  readonly width = input("1.46em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPhpmyfaqIcon],svg[whh-phpmyfaq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 832V704q58 0 107.5-26.5t81-69.5t49.5-95t18-104q0-90-68.5-153.5T405 192q-72 0-142 36t-107 92L71 167q61-75 155.5-121T416 0q96 0 177 47t128 128t47 177q0 82-33 169t-85.5 155T526 788t-142 44m-64-67v63q-87-10-150-48T70.5 678.5T17 535T0 352q0-26 7-57l121 121q1 92 20 164.5T211 704t109 61m316 67q38 0 57 28t7.5 68t-47 68t-73.5 28t-57-28t-7.5-68t47-68t73.5-28"></svg:path>`,
})
export class WhhPhpmyfaqIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPhpnukeIcon],svg[whh-phpnuke-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 640h-64v128L384 576v-64h384q53 0 90.5-37.5T896 384t-37.5-90.5T768 256h-64V128h64q106 0 181 75t75 181t-75 181t-181 75M256 256q-53 0-90.5 37.5T128 384t37.5 90.5T256 512h64v128h-64q-106 0-181-75T0 384t75-181t181-75h64V0l320 192v64z"></svg:path>`,
})
export class WhhPhpnukeIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPhppearIcon],svg[whh-phppear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1015.476 158l-119 200v603q0 27-18.5 45.5t-45.5 18.5h-640q-27 0-45.5-19t-18.5-45V358l-119-200q-14-22-7-47t30-38t48.5-6t38.5 29l95 160h596l95-160q13-22 38.5-29t48.5 6t30 38t-7 47m-281 226q-68 17-102 78q-27-14-56-14q-35 0-64.5 18t-46.5 48l-6.5-1l-10.5-1q-80 0-136 56.5t-56 136t56 136t136 56.5t136-56.5t56-135.5q0-4-.5-10t-.5-7q29-17 47-46.5t18-64.5q0-39-22-72q11-26 34-43t52-18q-9-35-34-60m-542-320q0-26 18.5-45t45.5-19h512q27 0 45.5 19t18.5 45v128h-640z"></svg:path>`,
})
export class WhhPhppearIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPianoIcon],svg[whh-piano-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.553 1024h-64q-27 0-45.5-19t-18.5-45V512q26 0 45-19t19-45V0h64q26 0 45 19t19 45v896q0 26-19 45t-45 19m-192-512v448q0 26-19 45t-45 19h-64q-27 0-45.5-19t-18.5-45V64q0-26 18.5-45t45.5-19h64v448q0 27 18.5 45.5t45.5 18.5m-320 512h-64q-27 0-45.5-19t-18.5-45V512q26 0 45-19t19-45V0h64q26 0 45 19t19 45v896q0 26-19 45t-45 19m-256 0h-64q-27 0-45.5-19t-18.5-45V64q0-26 18.5-45t45.5-19h64v448q0 26 18.5 45t45.5 19v448q0 26-19 45t-45 19"></svg:path>`,
})
export class WhhPianoIcon {
  readonly viewBox = input("0 0 961 1024")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPicasaIcon],svg[whh-picasa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M986 704H768V69q117 68 186.5 185.5T1024 512q0 99-38 192M704 404L333 33Q421 0 512 0q99 0 192 38zM452 240L24 668Q0 592 0 512q0-144 74-265T271 60zM256 525v430Q118 875 50 731zm64 243h635q-68 117-185.5 186.5T512 1024q-99 0-192-38z"></svg:path>`,
})
export class WhhPicasaIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPickaxeIcon],svg[whh-pickaxe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1014 963l-51 51q-10 10-24.5 10t-25.5-10L169 269Q67 398 32 576Q0 544 0 480q0-158 95-285l-21-21q-10-10-10-24.5T74 124l50-50q11-10 25.5-10T174 74l21 20Q323 0 480 0q64 0 96 32q-178 35-307 137l745 744q10 11 10 25.5t-10 24.5"></svg:path>`,
})
export class WhhPickaxeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPictureframeIcon],svg[whh-pictureframe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 1024H32q-13 0-22.5-9.5T0 992V288q0-13 9.5-22.5T32 256h211L488 11l.5-1l.5-1q10-9 23-9t23 9l.5 1l.5 1l245 245h211q13 0 22.5 9.5t9.5 22.5v704q0 13-9.5 22.5T992 1024M512 77L333 256h358zm384 307H128v512h768z"></svg:path>`,
})
export class WhhPictureframeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPiggybankIcon],svg[whh-piggybank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024.698 512q0 87-34 165.5t-95 139.5l59 143q11 26-.5 45t-39.5 19h-133q-28 0-55-19t-38-45l-8-19q-68 19-136 19q-39 0-77-6l-3 6q-11 26-38 45t-55 19h-133q-28 0-39.5-19t-.5-45l45-110q-95-84-130-210h-49q-26 0-45-37.5t-19-90.5t19-90.5t45-37.5h50q21-75 64-136q-5-19-14-47t-15.5-49t-12.5-46t-7-42.5t2.5-32.5t15.5-23t33-8q51 0 100 27t84 72q84-35 180-35q155 0 281 85q32-21 71-21q53 0 90.5 37.5t37.5 90.5q0 51-35 88q35 81 35 168m-704.5-192q-26.5 0-45 18.5t-18.5 45t18.5 45.5t45 19t45.5-19t19-45.5t-19-45t-45.5-18.5"></svg:path>`,
})
export class WhhPiggybankIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPigpenaIcon],svg[whh-pigpena-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928 1024H96q-40 0-68-28T0 928t28-68t68-28h736V96q0-40 28-68t68-28t68 28t28 68v832q0 40-28 68t-68 28"></svg:path>`,
})
export class WhhPigpenaIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPigpenbIcon],svg[whh-pigpenb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928.784 1024h-832q-40 0-68-28t-28-68V96q0-40 28-68t68-28t68 28t28 68v736h640V96q0-40 28-68t68-28t68 28t28 68v832q0 40-28 68t-68 28"></svg:path>`,
})
export class WhhPigpenbIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPigpencIcon],svg[whh-pigpenc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928.784 1024h-832q-40 0-68-28t-28-68V96q0-40 28-68t68-28t68 28t28 68v736h736q40 0 68 28t28 68t-28 68t-68 28"></svg:path>`,
})
export class WhhPigpencIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPigpendIcon],svg[whh-pigpend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928.784 1024h-832q-40 0-68-28t-28-68t28-68t68-28h736V192h-736q-40 0-68-28t-28-68t28-68t68-28h832q40 0 68 28t28 68v832q0 40-28 68t-68 28"></svg:path>`,
})
export class WhhPigpendIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPigpeneIcon],svg[whh-pigpene-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928.784 1024h-832q-40 0-68-28t-28-68V96q0-40 28-68t68-28h832q40 0 68 28t28 68v832q0 40-28 68t-68 28m-96-832h-640v640h640z"></svg:path>`,
})
export class WhhPigpeneIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPigpenfIcon],svg[whh-pigpenf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928.784 192h-736v640h736q40 0 68 28t28 68t-28 68t-68 28h-832q-40 0-68-28t-28-68V96q0-40 28-68t68-28h832q40 0 68 28t28 68t-28 68t-68 28"></svg:path>`,
})
export class WhhPigpenfIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPigpengIcon],svg[whh-pigpeng-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928.784 1024q-40 0-68-28t-28-68V192h-736q-40 0-68-28t-28-68t28-68t68-28h832q40 0 68 28t28 68v832q0 40-28 68t-68 28"></svg:path>`,
})
export class WhhPigpengIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPigpenhIcon],svg[whh-pigpenh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928.784 1024q-40 0-68-28t-28-68V192h-640v736q0 40-28 68t-68 28t-68-28t-28-68V96q0-40 28-68t68-28h832q40 0 68 28t28 68v832q0 40-28 68t-68 28"></svg:path>`,
})
export class WhhPigpenhIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPigpeniIcon],svg[whh-pigpeni-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928.784 192h-736v736q0 40-28 68t-68 28t-68-28t-28-68V96q0-40 28-68t68-28h832q40 0 68 28t28 68t-28 68t-68 28"></svg:path>`,
})
export class WhhPigpeniIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPigpenjIcon],svg[whh-pigpenj-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928 1024H96q-40 0-68-28T0 928t28-68t68-28h736V96q0-40 28-68t68-28t68 28t28 68v832q0 40-28 68t-68 28M512 640q-53 0-90.5-37.5T384 512t37.5-90.5T512 384t90.5 37.5T640 512t-37.5 90.5T512 640"></svg:path>`,
})
export class WhhPigpenjIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPigpenkIcon],svg[whh-pigpenk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928.784 1024h-832q-40 0-68-28t-28-68V96q0-40 28-68t68-28t68 28t28 68v736h640V96q0-40 28-68t68-28t68 28t28 68v832q0 40-28 68t-68 28m-416-384q-53 0-90.5-37.5t-37.5-90.5t37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5"></svg:path>`,
})
export class WhhPigpenkIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPigpenlIcon],svg[whh-pigpenl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928.784 1024h-832q-40 0-68-28t-28-68V96q0-40 28-68t68-28t68 28t28 68v736h736q40 0 68 28t28 68t-28 68t-68 28m-416-384q-53 0-90.5-37.5t-37.5-90.5t37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5"></svg:path>`,
})
export class WhhPigpenlIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPigpenmIcon],svg[whh-pigpenm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640.784 512q0 53-37.5 90.5t-90.5 37.5t-90.5-37.5t-37.5-90.5t37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5m288 512h-832q-40 0-68-28t-28-68t28-68t68-28h736V192h-736q-40 0-68-28t-28-68t28-68t68-28h832q40 0 68 28t28 68v832q0 40-28 68t-68 28"></svg:path>`,
})
export class WhhPigpenmIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPigpennIcon],svg[whh-pigpenn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928.784 1024h-832q-40 0-68-28t-28-68V96q0-40 28-68t68-28h832q40 0 68 28t28 68v832q0 40-28 68t-68 28m-96-832h-640v640h640zm-320 192q53 0 90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5t-90.5-37.5t-37.5-90.5t37.5-90.5t90.5-37.5"></svg:path>`,
})
export class WhhPigpennIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPigpenoIcon],svg[whh-pigpeno-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384.784 512q0-53 37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5t-90.5-37.5t-37.5-90.5m544-320h-736v640h736q40 0 68 28t28 68t-28 68t-68 28h-832q-40 0-68-28t-28-68V96q0-40 28-68t68-28h832q40 0 68 28t28 68t-28 68t-68 28"></svg:path>`,
})
export class WhhPigpenoIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPigpenpIcon],svg[whh-pigpenp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928.784 1024q-40 0-68-28t-28-68V192h-736q-40 0-68-28t-28-68t28-68t68-28h832q40 0 68 28t28 68v832q0 40-28 68t-68 28m-416-640q53 0 90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5t-90.5-37.5t-37.5-90.5t37.5-90.5t90.5-37.5"></svg:path>`,
})
export class WhhPigpenpIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPigpenqIcon],svg[whh-pigpenq-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928.784 1024q-40 0-68-28t-28-68V192h-640v736q0 40-28 68t-68 28t-68-28t-28-68V96q0-40 28-68t68-28h832q40 0 68 28t28 68v832q0 40-28 68t-68 28m-416-640q53 0 90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5t-90.5-37.5t-37.5-90.5t37.5-90.5t90.5-37.5"></svg:path>`,
})
export class WhhPigpenqIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPigpenrIcon],svg[whh-pigpenr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928.784 192h-736v736q0 40-28 68t-68 28t-68-28t-28-68V96q0-40 28-68t68-28h832q40 0 68 28t28 68t-28 68t-68 28m-416 192q53 0 90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5t-90.5-37.5t-37.5-90.5t37.5-90.5t90.5-37.5"></svg:path>`,
})
export class WhhPigpenrIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPigpensIcon],svg[whh-pigpens-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1011.457 162l-416 807q-20 39-58.5 50.5t-72.5-10.5q-19-13-33-36q0-1-1-2t-1-2l-416-807q-20-39-9.5-82t44.5-65t72.5-10.5t58.5 50.5l333 645l333-645q20-39 58.5-50.5t72.5 10.5t44.5 65t-9.5 82"></svg:path>`,
})
export class WhhPigpensIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPigpentIcon],svg[whh-pigpent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m970.79 597l-808 417q-39 20-82 9.5t-65.5-45t-11-73t50.5-57.5l647-334l-647-333q-39-20-50.5-58.5t11-73t65.5-45t82 9.5l808 417q1 0 2 1t2 1q23 13 36 33q22 35 10.5 73.5t-50.5 57.5"></svg:path>`,
})
export class WhhPigpentIcon {
  readonly viewBox = input("0 0 1026 1028")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPigpenuIcon],svg[whh-pigpenu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M971 181L324 514l647 334q39 19 50.5 57.5t-11 73t-65.5 45t-82-9.5L55 597q-39-19-50.5-57.5T15 466q13-20 36-33q1 0 2-1t2-1L863 14q39-20 82-9.5t65.5 45t11 73T971 181"></svg:path>`,
})
export class WhhPigpenuIcon {
  readonly viewBox = input("0 0 1026 1028")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPigpenvIcon],svg[whh-pigpenv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M977 1008.5q-34 22.5-72.5 11T846 969L513 323L180 969q-20 39-58.5 50.5t-72.5-11T4.5 943t9.5-81L430 54l1-1.5l1-1.5q13-23 33-36q34-22 72.5-10.5T596 54l416 808q20 38 9.5 81t-44.5 65.5"></svg:path>`,
})
export class WhhPigpenvIcon {
  readonly viewBox = input("0 0 1026 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPigpenwIcon],svg[whh-pigpenw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1011.457 162l-416 807q-20 39-58.5 50.5t-72.5-10.5q-20-13-33-36q0-1-1-2t-1-2l-416-807q-20-39-9.5-82t44.5-65t72.5-10.5t58.5 49.5l333 646l333-646q20-38 58.5-49.5t72.5 10.5t44.5 65t-9.5 82m-499 94q-53 0-90.5-37.5t-37.5-90.5t37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5"></svg:path>`,
})
export class WhhPigpenwIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPigpenxIcon],svg[whh-pigpenx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128.79 385q53 0 90.5 37.5t37.5 91t-37.5 91t-90.5 37.5t-90.5-37.5t-37.5-91t37.5-91t90.5-37.5m842 212l-808 416q-38 20-81 9.5t-65.5-45t-11-72.5t50.5-58l646-333l-646-334q-39-19-50.5-57.5t11-73t65.5-45t81 9.5l808 416l2 2l2 1q23 13 36 33q22 34 10.5 72.5t-50.5 58.5"></svg:path>`,
})
export class WhhPigpenxIcon {
  readonly viewBox = input("0 0 1026 1027")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPigpenyIcon],svg[whh-pigpeny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M897 642q-53 0-90.5-37.5t-37.5-91t37.5-91T897 385t90.5 37.5t37.5 91t-37.5 91T897 642m73-462L324 514l646 333q39 20 50.5 58t-11 72.5t-65.5 45t-81-9.5L55 597q-39-20-50.5-58.5T15 466q13-20 36-33q1 0 2-1l2-2L863 14q38-20 81-9.5t65.5 45t11 73T970 180"></svg:path>`,
})
export class WhhPigpenyIcon {
  readonly viewBox = input("0 0 1025 1027")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPigpenzIcon],svg[whh-pigpenz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M977 1008.5q-34 22.5-72.5 11T846 969L513 324L180 969q-20 39-58.5 50.5t-72.5-11T4.5 943t9.5-81L430 55q0-1 1-2.5l1-1.5q13-23 33-36q34-22 72.5-10.5T596 55l416 807q20 38 9.5 81t-44.5 65.5M513 768q53 0 90.5 37.5T641 896t-37.5 90.5T513 1024t-90.5-37.5T385 896t37.5-90.5T513 768"></svg:path>`,
})
export class WhhPigpenzIcon {
  readonly viewBox = input("0 0 1026 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPilcrowIcon],svg[whh-pilcrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 128h-64v832q0 26-19 45t-45.5 19t-45-19t-18.5-45V128H512v832q0 26-19 45t-45.5 19t-45-19t-18.5-45V640h-64q-87 0-160.5-43T43 480.5T0 320t43-160.5T159.5 43T320 0h640q26 0 45 18.5t19 45t-18.5 45.5t-45.5 19"></svg:path>`,
})
export class WhhPilcrowIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPimcoreIcon],svg[whh-pimcore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 576q-57 0-160-39t-168-86q-6 6-17 18q-37 38-57 58t-55 53t-60.5 50.5t-58.5 37t-64.5 28T128 704q-56 0-104-36Q0 592 0 512q0-158 89-288q31 32 103 32q28 0 59-19t94.5-62T480 96q8-4 32-17t37.5-19.5t35-15.5T626 30t39-7q101 32 184.5 103.5t129 157T1024 448q0 128-192 128m-32-320q-71 0-157 65q24-1 125-1q128 0 128-32t-96-32m-576-64q-23 0-43-15t-22-35q70-67 161-104.5T512 0q33 0 74 6q-83 16-170 58q-48 23-89.5 56t-65 52.5T224 192m280 649q49-24 144-81t162.5-88.5T928 640q49 0 72 26q-6 20-15 42q-89 13-162.5 63T704 896q49 0 108-22.5T923 817q-71 96-179 151.5T512 1024q-131 0-243.5-61.5T86 795q61-27 138-27q69 0 151.5 21T504 841"></svg:path>`,
})
export class WhhPimcoreIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPinIcon],svg[whh-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m896 800l128 223l-224-128l-1-6l-168-167l-152 151q-42 42-95-10V684L126 416l-13 12q-19 20-46.5 20t-47-19.5t-19.5-47T19 334L335 19q20-19 47.5-19t47 19T449 65.5T429 113l-13 13l269 258l179 1q52 52 9 94L722 630l168 168z"></svg:path>`,
})
export class WhhPinIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPingpongIcon],svg[whh-pingpong-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M865 1020L602 713q-68 44-145.5 53.5t-157.5-20T152 650Q72 570 31.5 463t-29-211t78-171t171-78.5t211.5 29T649 152q68 67 97.5 147t20 157.5T714 602l308 262q10 10-23.5 55T922 999t-57 21M605 190q-66-66-155-100T274 66t-142.5 65.5T66 274t24 176t100 155q64 64 142 87l360-360q-23-78-87-142"></svg:path>`,
})
export class WhhPingpongIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPinterestIcon],svg[whh-pinterest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 768q-53 0-103.5-30.5T335 653q-23 82-38.5 135.5T261 904t-35 92t-25 28q-22-5 .5-173T262 518q-12-45-1-102q14-66 50-113t73-47t54 47t4 113q-10 47-32 86t-49 58q0 1-2 6q32 60 77 99t76 39q61 0 106-47.5T683.5 538T704 384q0-87-38.5-160.5T560.5 107T416 64t-144.5 43t-105 116.5T128 384q0 51 22 101q4 16 1 41t-18.5 47.5T97 594Q0 495 0 384q0-104 55.5-192.5T207 51.5T416 0t209 51.5t151.5 140T832 384q0 72-23.5 141T744 648t-101.5 87T512 768"></svg:path>`,
})
export class WhhPinterestIcon {
  readonly viewBox = input("0 0 832 1025")
  readonly width = input("0.82em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPipeIcon],svg[whh-pipe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 1024q-51 0-100-21t-94.5-60.5t-81-79.5t-76.5-95q-17-23-42-49.5T309 657t-88-58t-93-23H32q-13 0-22.5-9.5T0 544t9.5-22.5T32 512h96q37 0 55.5.5T236 515t54.5 7t50 14t51 22.5t45 34T480 640q25 34 79.5 81t80.5 47q64 0 64-64V576q0-26 18.5-45t45.5-19h192q26 0 45 19t19 45v192q0 106-75 181t-181 75m128-768q0 36 9 83q1 5 18 40.5t25 68.5h-58q-9-42-26-64q-23-24-27.5-47.5T832 256q0-80 37.5-136T960 64q-38 15-51 64t-13 128m-192-51q0 38 9 89q50 56 54 154h-63q0-64-9-76q-55-62-55-167q0-85 37.5-145T768 0q15 0 32 7q-42 18-69 72.5T704 205"></svg:path>`,
})
export class WhhPipeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPivotxIcon],svg[whh-pivotx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m960 361l-113 35q69 81 97 167.5t6 140.5l-88-36q5 90-17 160.5T782 928l-69-95q-50 87-114 139t-119 52V914q-87 41-166.5 45.5T192 931l75-110q-102-18-175.5-62T0 662l112-35q-68-81-96-167T9 320l89 36q-5-90 17-160.5T177 96l70 95q50-87 114-139T480 0v110q87-41 166.5-45.5T768 93l-75 109q102 18 175.5 62t91.5 97M480 256q-106 0-181 75t-75 181t75 181t181 75t181-75t75-181t-75-181t-181-75"></svg:path>`,
})
export class WhhPivotxIcon {
  readonly viewBox = input("0 0 960 1024")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPiwigoIcon],svg[whh-piwigo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 704H64q-26 0-45-19T0 640V128q0-27 19-45.5T64 64h384q0-27 18.5-45.5T512 0h320q26 0 45 18.5T896 64h64q26 0 45 18.5t19 45.5v512q0 27-18.5 45.5T960 704M320 192q-80 0-136 56t-56 135.5t56 136T320 576t136-56.5t56-136T456 248t-136-56M768 64H576q-13 0-22.5 9.5T544 96t9.5 22.5T576 128h192q13 0 22.5-9.5T800 96t-9.5-22.5T768 64M320 512q-53 0-90.5-37.5T192 384t37.5-90.5T320 256t90.5 37.5T448 384t-37.5 90.5T320 512"></svg:path>`,
})
export class WhhPiwigoIcon {
  readonly viewBox = input("0 0 1024 704")
  readonly width = input("1.46em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPixelarrowIcon],svg[whh-pixelarrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 192V64H832V0h192v192zm-256-64V64h128v64zm64 64v64h64v64h64v64h-64v-64h-64v64h-64v64h-64v64h-64v64h-64v64h-64v64h-64v64h-64v64h-64v128h-64v-64h-64v-64H64v-64h128v-64h64v-64h64v-64h64v-64h64v-64h64v-64h64v-64h64v-64h64v-64h-64v-64h64v64zM128 960H64v-64h64zm832-768v128h-64V192zm-768 832h-64v-64h64zm-192 0v-64h64v64zm0-128v-64h64v64z"></svg:path>`,
})
export class WhhPixelarrowIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPixelaxeIcon],svg[whh-pixelaxe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 320v192h-64v64h-64v-64h64V384h-64v-64H768v64h-64v192h192v64H640V512h-64v64h-64v64h-64v64h-64v64h-64v64h-64v64h-64v128H0V832h128v-64h64v-64h64v-64h64v-64h64v-64h64v-64h64v-64H384V128h64V64h64v64h-64v192h192v-64h64V128h128V64h128v128h-64v128zM128 896H64v64h64zM640 64H512V0h192v128h-64z"></svg:path>`,
})
export class WhhPixelaxeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPixelbastardswordIcon],svg[whh-pixelbastardsword-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 192v64h-64v-64zV64H832v64h-64V64h64V0h192v192zm-192 0h-64v-64h64zm-64 0v64h-64v-64zM576 320v-64h64v64zm-64 64v-64h64v64zm-128 64v-64h128v64zm-128 64v64h-64V448h192v64zm-64 192v-64h64v-64h128v64h64v128h-64v64h-64v64h-64v64h-64v64H64v-64h128v-64h-64v-64H64v128H0V832h64v-64h64v-64zm320-64h64v192H448v-64h64zm128-128v128h-64V512zm64-64v64h-64v-64zm64-64v64h-64v-64zm64-64v64h-64v-64zm64 0h-64v-64h64z"></svg:path>`,
})
export class WhhPixelbastardswordIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPixelbattleaxeIcon],svg[whh-pixelbattleaxe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 576v-64h64v-64H640v-64h64v-64h64v-64h64v-64h64v128h64v-64h64v320zm256-192H832v128h128zm0-256v64h-64v-64zm-64-64V0h128v128h-64V64zm-64 64V64h64v64zm-64 64v64h-64v64h-64v64h-64V256h-64v64h-64V0h320v64h-64v64h128v64zM640 64H512v128h128zM448 512v-64h64v-64h64v64h64v64h-64v64h-64v64h-64v64h-64v64h-64v64h-64v64h-64v128H0V832h128v-64h64v-64h64v-64h64v-64h64v-64zM128 896H64v64h64z"></svg:path>`,
})
export class WhhPixelbattleaxeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPixelbowIcon],svg[whh-pixelbow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 960v64h-64v-64h-64v-64h64V608h-64V448h-64v-64h64v64h64v-64h64v192h64v384zM704 320h64v64h-64zm-64 0v-64h64v64zm-64-128H384v-64H128v64H64v-64H0V64h64V0h384v64h192v64h-64zh64v64h-64zm-384 64h-64v-64h64zm64 64h-64v-64h64zm64 64h-64v-64h64zm64 64h-64v-64h64zm64 64h-64v-64h64zm64 64h-64v-64h64zm64 64h-64v-64h64zm64 64h-64v-64h64zm64 64h-64v-64h64zm64 64h-64v-64h64zm64 64h-64v-64h64zM704 128v64h-64v-64zm0 64h64v64h-64zm128 64v64h-64v-64zm64 64v64h-64v-64z"></svg:path>`,
})
export class WhhPixelbowIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPixelbroadswordIcon],svg[whh-pixelbroadsword-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 256V64H768V0h256v256zM768 128h-64V64h64zm-64 64h-64v-64h64zm-64 0v64h-64v-64zM512 320v-64h64v64zm-64 64v-64h64v64zm-64 64v-64h64v64zm-64 64v-64h64v64zm64 128h-64v-64h64zm64 64h-64v-64h64zm128-64v64h-64v-64zm64-64v64h-64v-64zm64-64v64h-64v-64zm64-64v64h-64v-64zm64-64v64h-64v-64zM512 768h-64v-64h64zm64 128H384v-64h128v-64h64zM256 576v-64h64v64zm-64 0v64h-64V448h128v64h-64zm0 128v64h-64v-64zm0 192h64v64h-64v64H64v-64H0V832h64v-64h64v64H64v64h64v64h64zm64-64h64v64h-64zm64-64h64v64h-64zm-64-64h64v64h-64zm-64-64h64v64h-64zm576-384v-64h64v64zm-64 64v-64h64v64zm-64 64v-64h64v64zm-64 64v-64h64v64zm-64 64v-64h64v64zm-64 64v-64h64v64zm448-448v64h-64v-64zm0 256h-64v-64h64zm64-64h-64v-64h64z"></svg:path>`,
})
export class WhhPixelbroadswordIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPixelchestIcon],svg[whh-pixelchest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 832V448H768v384H192V448H64v384H0V192h64v192h832V192h64v640zM512 448v128h-64V448h-64v192h192V448zM832 64h64v128h-64zM704 192h64v128H192V192h64V64H128V0h704v64H704zm-640 0V64h64v128zm832 704H768v-64h128zm-704 0H64v-64h128z"></svg:path>`,
})
export class WhhPixelchestIcon {
  readonly viewBox = input("0 0 960 896")
  readonly width = input("1.08em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPixeldaggerIcon],svg[whh-pixeldagger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 192v64h-64v-64zV64H832v64h-64V64h64V0h192v192zm-192 0h-64v-64h64zm-64 0v64h-64v-64zM576 320v-64h64v64zm-64 64v-64h64v64zm-128 64v-64h128v64zm64 64v64h64v64h64v64H448v64h-64v64h-64v64h-64v64h-64v64H64v-64h128v-64h-64v-64H64v128H0V832h64v-64h64v-64h64v-64h64v-64h64V448h64v64zm192 0v128h-64V512zm64-64v64h-64v-64zm64-64v64h-64v-64zm64-64v64h-64v-64zm64 0h-64v-64h64z"></svg:path>`,
})
export class WhhPixeldaggerIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPixelelixirIcon],svg[whh-pixelelixir-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 832v64h-64v64h-64v64H192v-64h-64v-64H64v-64h64v64h64v-64h64v64h64v64h64v-64h-64V576h64V384h-64v-64h64v-64h-64v-64h64V64h-64V0h128v64h64v128h-64v64h64v64h-64v64h64v64h64v64h64v64h64v64h64v192zm-64-128h-64v128h-64v64h64v-64h64zM320 576h-64v-64h-64v-64h64v-64h64zm-192 0v64H64v-64zv-64h64v64zm64 256h-64V640h64zm0-192v-64h64v64zM0 832V640h64v192zm256-512v-64h64v64zm-64-128h64v64h-64zm64-128h64v128h-64zm320 128v64h-64v-64z"></svg:path>`,
})
export class WhhPixelelixirIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPixelheartIcon],svg[whh-pixelheart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 448v128h-64v64h-64v-64h-64v64h-64v64h-64v64h-64v64h64v64h-64v64h-64v-64h-64v-64h-64v-64h-64v-64h-64v-64h-64v-64H64V448H0V128h64V64h64V0h192v64h64v64h64v64h64v-64h64V64h64V0h192v64h64v64h64v320zM256 64h-64v64h-64v64H64v64h64v-64h64v-64h64zm512 0h-64v64h-64v64h-64v64h64v-64h64v-64h64zM640 768v64h-64v-64zm64-64v64h-64v-64zm64-64v64h-64v-64z"></svg:path>`,
})
export class WhhPixelheartIcon {
  readonly viewBox = input("0 0 960 960")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPixellanceIcon],svg[whh-pixellance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 128V64h-64V0h128v128zm0 64h-64v-64h64zm-128-64V64h64v64zm-128 0h128v64H704zm0 128h64v64h64v64H704v64h-64v64h-64v64h-64v64h-64v64h-64v64h-64v64h-64v64h-64v128H0V832h128v-64h64v-64h64v-64h64v-64h64v-64h64v-64h64v-64h64v-64h64V192h64zM128 896H64v64h64zm768-704v128h-64V192z"></svg:path>`,
})
export class WhhPixellanceIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPixelpickaxeIcon],svg[whh-pixelpickaxe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 640V384h64v256zm-64-320h64v64h-64zm-64-64h-64v-64h-64v-64h128V64h128v128h-64v128h-64zM640 64h64v64h-64zm-64 128H384v-64h192zm64 64h-64v-64h64zm64 64h64v64h-64v64h-64v64h-64v64h-64v64h-64v64h-64v64h-64v64h-64v64h-64v128H0V832h128v-64h64v-64h64v-64h64v-64h64v-64h64v-64h64v-64h64v-64h64v-64h64zM128 896H64v64h64zm704-448h-64v-64h64zm64 192h-64V448h64zm64 64h-64v-64h64zM320 128V64h64v64zM384 0h256v64H384z"></svg:path>`,
})
export class WhhPixelpickaxeIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPixelpotionIcon],svg[whh-pixelpotion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 896v64h-64v64H128v-64H64v-63H0V577h64v-64h64v-64h64v-64h-64v-63h512v63h-64v64h64v64h64v64h64v320h-64zM128 768h64V640h-64zm512-256H512V384H256v128H128v64h512zm0 256h-64v64h-64v64h64v-64h64zM64 192h64v128H64zm640 0v128h-64V192zm-128 64H192v-64h-64v-64h64V65h64v128h256V65h64v63h64v64h-64zM256 0h256v64H256z"></svg:path>`,
})
export class WhhPixelpotionIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPixelpotionaltIcon],svg[whh-pixelpotionalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M704 896V576h64v320zm-64-384H512V384H256v128H128v64H64v-64h64v-64h64v-64h-64v-64h512v64h-64v64h64zh64v64h-64zM0 896V576h64v320zm64-704h64v128H64zm640 0v128h-64V192zm-128 64H192v-64h-64v-64h64V64h64v128h256V64h64v64h64v64h-64zM256 0h256v64H256zm-64 960h384v-64h128v64h-64v64H128v-64H64v-64h128z"></svg:path>`,
})
export class WhhPixelpotionaltIcon {
  readonly viewBox = input("0 0 768 1024")
  readonly width = input("0.75em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPixelshieldIcon],svg[whh-pixelshield-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 576V192H640v-64h256v448zm-64-320v320h-64v192h-64v64H512v64H384v-64H256v-64h-64V576h-64V256h128v-65h384v65zM64 576H0V128h256v64H64zm64 192H64V576h64zm704-192v192h-64V576zm-64 256h-64v-64h64zm-64 64h-64v-64h64zm-64 64H512v-64h128zm-384 0v-64h128v64zm-64-64v-64h64v64zm0-64h-64v-64h64zM512 64h128v64H512zm-128 64H256V64h128zm0-128h128v64H384zm128 1024H384v-64h128z"></svg:path>`,
})
export class WhhPixelshieldIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPixelshovelIcon],svg[whh-pixelshovel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 256V64h64v192zM640 128V64h128v64zm-64 64v-64h64v64zm64 192h64v64h-64v64h-64v64h-64v64h-64v64h-64v64h-64v64h-64v64h-64v128H0V832h128v-64h64v-64h64v-64h64v-64h64v-64h64v-64h64v-64h64v-64h64zM128 896H64v64h64zm768-512v64h-64v-64zm64-128v128h-64V256zM832 512H704v-64h128zM512 320V192h64v128zM768 0h192v64H768z"></svg:path>`,
})
export class WhhPixelshovelIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPixelsphereIcon],svg[whh-pixelsphere-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 704v128h-64v64h-64v64H704v64H320v-64H192v-64h-64v-64H64V704H0V320h64V192h64v-64h64V64h128V0h384v64h128v64h64v64h64v128h64v384zM576 256h-64v-64H320v64h-64v64h64v64h192v-64h64zm192 128h-64v64h64zm64 320h-64v64h-64v64h64v-64h64z"></svg:path>`,
})
export class WhhPixelsphereIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPixelswordIcon],svg[whh-pixelsword-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 192v64h-64v-64zV64H832v64h-64V64h64V0h192v192zm-192 0h-64v-64h64zm-64 0v64h-64v-64zM576 320v-64h64v64zm-64 64v-64h64v64zm-64 64v-64h64v64zm-64 64v-64h64v64zm-64 128V512h64v128zm0 64h64v64h-64v64h-64v64h-64v128H0V832h128v-64h64v-64h64v-64h64zM128 896H64v64h64zm256-256h128v64H384zm192-64v64h-64v-64zm64-64v64h-64v-64zm64-64v64h-64v-64zm64-64v64h-64v-64zm64-64v64h-64v-64zM576 704v64h-64v-64zm64 192H512v-64h64v-64h64zm-128-64H384v-64h128zM192 640V512h64v128zm64-192h64v64h-64zm-64 64h-64V384h128v64h-64zm704-192h-64v-64h64z"></svg:path>`,
})
export class WhhPixelswordIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPixelwandIcon],svg[whh-pixelwand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 384v64h-64v64h-64v-64h-64v-64h-64v-64h-64v-64h-64v-64h-64v-64h64V64h64V0h256v64h64v64h64v256zM832 64H704v64h128zm64 256h-64v64h64zm-384 0h-64v-64h64zm-64 192h-64V320h64zm0 128h-64v-64h64zm0-128h64v64h-64zm192 64h64v64H512v-64zm0-128h64v64h-64zm-64-64h64v64h-64zm-64-64h64v64h-64zm256 192v64h-64v-64zm192 0v64h-64v-64zm-64 128H768v-64h128zm-384 64h-64v-64h64zm-128 64v-64h64v64zm-64 64v-64h64v64zm0-256v-64h64v64zm-64 64v-64h64v64zm-64 64v-64h64v64zm192-448V128h64v128zm64-192h64v64h-64zM256 832h64v64h-64zm0 64v64h-64v64H64v-64h128v-64zM128 704h64v64h-64zM64 960H0V832h64v-64h64v64H64z"></svg:path>`,
})
export class WhhPixelwandIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPixieIcon],svg[whh-pixie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-128-896h-512v768h192V768h320zm-320 192h128v256h-128z"></svg:path>`,
})
export class WhhPixieIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPizzaIcon],svg[whh-pizza-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m640 64l-.5-.5l-.5-.5q-2 1-5 2t-5 1l395 958L64 639v1q0 13-9.5 22.5T32 672t-22.5-9.5T0 640v-11q62-229 231-398T630 0h10q13 0 22.5 9t9.5 22.5t-9.5 23T640 64m127.5 768q26.5 0 45.5-19t19-45.5t-19-45t-45.5-18.5t-45 18.5t-18.5 45t18.5 45.5t45 19m-512-384q-26.5 0-45 18.5t-18.5 45t18.5 45.5t45 19t45.5-19t19-45.5t-19-45t-45.5-18.5m192-192q-26.5 0-45 18.5t-18.5 45t18.5 45.5t45 19t45.5-19t19-45.5t-19-45t-45.5-18.5m0 320q-26.5 0-45 18.5t-18.5 45t18.5 45.5t45 19t45.5-19t19-45.5t-19-45t-45.5-18.5M576 511.5q0 26.5 18.5 45.5t45.5 19t45.5-19t18.5-45.5t-19-45t-45.5-18.5t-45 18.5t-18.5 45"></svg:path>`,
})
export class WhhPizzaIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPlaceaddIcon],svg[whh-placeadd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m657 680l-272 345l-272-345q-73-76-99.5-178.5t0-205t100-179T286 14t198 0t172.5 103.5t100 179t0 205T657 680M385.5 130Q279 130 204 205t-75 181t75 180.5T385.5 641T567 566.5T642 386t-75-181t-181.5-75M514 449h-64v64q0 26-19 45t-45.5 19t-45-19t-18.5-45v-64h-64q-27 0-45.5-19T194 384.5t18.5-45T258 321h64v-64q0-27 18.5-45.5t45-18.5t45.5 18.5t19 45.5v64h64q26 0 45 18.5t19 45t-19 45.5t-45 19"></svg:path>`,
})
export class WhhPlaceaddIcon {
  readonly viewBox = input("0 0 770 1025")
  readonly width = input("0.76em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPlacealtIcon],svg[whh-placealt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M764 765q-14 20-28 35l-289 224l-287-224q-14-15-28-35q-62-62-97-144T0 448t35.5-174T131 131t143-95.5T448 0t174 35.5T765 131t95.5 143T896 448t-35 173t-97 144M448 128q-87 0-160.5 43T171 287.5T128 448t43 160.5t116.5 116T448 767t160.5-42.5t116.5-116T768 448t-43-160.5T608.5 171T448 128"></svg:path>`,
})
export class WhhPlacealtIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPlacealtaddIcon],svg[whh-placealtadd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M764 765q-14 21-28 35l-289 224l-287-224q-14-14-28-35q-62-62-97-144T0 448t35.5-174T131 131t143-95.5T448 0t174 35.5T765 131t95.5 143T896 448t-35 173t-97 144M448 128q-87 0-160.5 43t-116 116.5T129 448t42.5 160.5t116 116T448 767t160.5-42.5t116.5-116T768 448t-43-160.5T608.5 171T448 128m192 384H512v128q0 26-19 45t-45.5 19t-45-19t-18.5-45V512H256q-27 0-45.5-19T192 447.5t18.5-45T256 384h128V256q0-27 18.5-45.5t45-18.5t45.5 18.5t19 45.5v128h128q26 0 45 18.5t19 45t-19 45.5t-45 19"></svg:path>`,
})
export class WhhPlacealtaddIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPlacealtdeleteIcon],svg[whh-placealtdelete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M764 765q-14 20-28 35l-289 224l-287-224q-14-15-28-35q-62-62-97-144T0 448t35.5-174T131 131t143-95.5T448 0t174 35.5T765 131t95.5 143T896 448t-35 173t-97 144M448 128q-87 0-160.5 43T171 287.5T128 448t43 160.5t116.5 116T448 767t160.5-42.5t116.5-116T768 448t-43-160.5T608.5 171T448 128m192 384H256q-27 0-45.5-19T192 447.5t18.5-45T256 384h384q26 0 45 18.5t19 45t-19 45.5t-45 19"></svg:path>`,
})
export class WhhPlacealtdeleteIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPlacedeleteIcon],svg[whh-placedelete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m657 679l-272 345l-272-345q-73-76-99.5-178.5t0-205T113 116q56-57 127.5-86.5T385 0t144.5 29.5T657 116q73 77 99.5 179.5t0 205T657 679M385.5 129Q279 129 204 204t-75 181t75 180.5T385.5 640T567 565.5T642 385t-75-181t-181.5-75M514 448H258q-27 0-45.5-19T194 383.5t18.5-45T258 320h256q26 0 45 18.5t19 45t-19 45.5t-45 19"></svg:path>`,
})
export class WhhPlacedeleteIcon {
  readonly viewBox = input("0 0 770 1024")
  readonly width = input("0.76em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPlaceiosIcon],svg[whh-placeios-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-25.5t-186.5-70T0 832q0-48 59-90t161.5-68.5T448 642v-66h128v66q125 5 227.5 31.5T965 742t59 90q0 52-68.5 96.5t-186.5 70t-257 25.5m64-319v63q0 33-20 80.5T512 896t-44-47.5t-20-80.5v-63q-164 7-274 43T64 832q0 35 60 64.5T287 943t225 17t225-17t163-46.5t60-64.5q0-48-110-84t-274-43m-64-193q-106 0-181-75t-75-181t75-181T512 0t181 75t75 181t-75 181t-181 75m24-434q-14-13-43-14.5t-64.5 11T368 112t-37.5 60.5t-11 65T335 280q33 34 133.5-67T536 78m161 216q-12-12-37-3.5T611.5 323t-32 49t3 37t37 3.5t49-32t32-49T697 294"></svg:path>`,
})
export class WhhPlaceiosIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPlaneIcon],svg[whh-plane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1013.617 769q5 0 8 4.5t3 11.5v32q0 7-3 11.5t-8 4.5l-129 52l-52 129q0 5-4.5 8t-11.5 3h-32q-7 0-11.5-3t-4.5-8V900l-284-283l-100 376q0 13-9.5 22.5t-22.5 9.5h-64q-14 0-23-9.5t-9-22.5V389l-180-179q-25-26-56.5-104.5T7.117 8t97.5 12.5t104 57.5l180 179h604q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5t-22.5 9.5l-376 100l285 284z"></svg:path>`,
})
export class WhhPlaneIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPlanealtIcon],svg[whh-planealt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 576H608q-1 6-3 19q-35 205-61 269q38 25 67 53t29 43q0 13-5.5 23.5t-13.5 17t-22.5 11.5t-25.5 7t-30.5 3.5t-30.5 1.5h-64l-30.5-1.5l-30.5-3.5l-25.5-7l-22.5-11.5l-13.5-17L320 960q0-15 29-43t67-53q-26-64-60-267q-3-14-4-21H64q-27 0-45.5-19T0 512V384q0-26 19-45t45-19h256v-32q0-57 36.5-101t91.5-55V64q-82-2-137-11t-55-21q0-13 65.5-22.5T480 0t158.5 9.5T704 32q0 12-55 21T512 64v68q55 11 91.5 55T640 288v32h256q26 0 45 19t19 45v128q0 27-18.5 45.5T896 576"></svg:path>`,
})
export class WhhPlanealtIcon {
  readonly viewBox = input("0 0 960 1024")
  readonly width = input("0.94em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPlanetIcon],svg[whh-planet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M830 359q-14 119-104.5 200T513 640q-79 0-149-37q-128 40-224.5 37T13 588q-32-50 19-133.5T196 282q14-120 104.5-200.5T513 1q79 0 149 37Q790-2 886.5 1T1013 52q32 51-19 134T830 359M137 542q15 27 61 33t110-10q-87-72-108-183q-94 106-63 160M889 98q-15-27-61-32.5T718 75q87 73 108 183q94-105 63-160"></svg:path>`,
})
export class WhhPlanetIcon {
  readonly viewBox = input("0 0 1026 641")
  readonly width = input("1.61em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPlantaltIcon],svg[whh-plantalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M867 393q-68 41-145 52t-116-13q-1 0-6.5-4t-11.5-7.5t-12-3.5v280q44-51 100-85q31-19 71.5-27.5T824 577t67.5 4.5T941 590l19 4q-3 6-9.5 16T924 647.5T883 700t-52.5 53.5T768 801q-130 78-192 82v78q0 26-18.5 45t-45.5 19t-45.5-19t-18.5-45v-66q-47 6-109.5-9T223 840q-31-18-59-49.5t-45.5-63T88 666t-18.5-47.5T64 600q8-3 21-6.5t50.5-10t72-7t75.5 9t70 31.5t95 121V481q-6 0-12 3.5t-11.5 7.5t-6.5 5q-39 23-116 12t-145-52q-31-19-59-52t-44.5-63t-30-64.5T6 230t-6-20q7-2 19.5-5t48.5-7.5t69-5t74.5 8T284 228q62 37 107.5 89.5T448 417V256q0-2 1-8q-45-12-81-36q-35-24-63-73.5T267 51l-11-38q5-1 14-3.5t34.5-6t49-3.5T407 6.5T459 28q49 32 83 83.5t34 80.5v161q11-47 56.5-99.5T740 164q31-19 71.5-27.5T888 129t67.5 4.5t49.5 7.5l19 5q-2 7-5.5 19.5T1001 213t-30.5 65t-44.5 63t-59 52"></svg:path>`,
})
export class WhhPlantaltIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPlaqueIcon],svg[whh-plaque-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 1024H192q0-80-56.5-136T0 832V192q80 0 136-56T192 0h640q0 80 56 136t136 56v640q-80 0-136 56t-56 136m64-768q-53 0-90.5-37.5T768 128H256q0 53-37.5 90.5T128 256v512q53 0 90.5 37.5T256 896h512q0-53 37.5-90.5T896 768zM704 832H320q-10-47-45.5-82.5T192 704V320q47-10 82.5-45.5T320 192h384q10 47 45.5 82.5T832 320v384q-47 10-82.5 45.5T704 832"></svg:path>`,
})
export class WhhPlaqueIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPlayIcon],svg[whh-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m62.397 8l819 467q16 9 16 39.5t-16 37.5l-819 467q-12 8-30 5.5t-32-17.5V22q31-34 62-14"></svg:path>`,
})
export class WhhPlayIcon {
  readonly viewBox = input("0 0 898 1026")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPlaycircleIcon],svg[whh-playcircle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m0-896q-159 0-271.5 112.5T128 512t112.5 271.5T512 896t271.5-112.5T896 512T783.5 240.5T512 128M384 288l384 224l-384 224z"></svg:path>`,
})
export class WhhPlaycircleIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPlaystationIcon],svg[whh-playstation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M902 702L577 833v-96l294-108q24-11 25.5-24.5t-21-21.5t-55-6t-57.5 13l-186 51v-96q74-33 224-32q40 0 58 .5t45.5 5T955 533q44 17 60.5 37t6 41.5t-40 43.5t-79.5 47M705 449q-21 0-32-.5t-29-2t-27.5-6t-20-11t-15-18T577 385V160q0-13-9.5-22.5T545 128t-22.5 9.5T513 160v673l-128-64V0l128 49q24 14 64 31q85 37 138.5 99.5T769 321v32q0 14-.5 22.5t-3.5 24t-9.5 25t-19.5 17t-31 7.5M71 717q-44-17-60.5-37t-6-41.5t40-44T124 547l197-79v92l-166 61q-30 19-25 35.5t31 16.5q24 0 64-7.5t68-14.5l28-7v89q-45 4-96 4q-40 0-58-1t-45.5-5.5T71 717"></svg:path>`,
})
export class WhhPlaystationIcon {
  readonly viewBox = input("0 0 1026 833")
  readonly width = input("1.24em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPlaystoreIcon],svg[whh-playstore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 1023H64q-26 0-45-18.5T0 959V319q0-26 19-45t45-19h128V128L320 0v255h384V0l128 128v127h128q27 0 45.5 19t18.5 45v640q0 27-18.5 45.5T960 1023M320 383v512l448-256zM384 0h256v128H384z"></svg:path>`,
})
export class WhhPlaystoreIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPlayvideoIcon],svg[whh-playvideo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 960v-64H192v64H0V0h192v64h640V0h192v960zM128 64H64v64h64zm0 128H64v64h64zm0 128H64v64h64zm0 128H64v64h64zm0 128H64v64h64zm0 128H64v64h64zm0 128H64v64h64zm704-704H192v704h640zm128-64h-64v64h64zm0 128h-64v64h64zm0 128h-64v64h64zm0 128h-64v64h64zm0 128h-64v64h64zm0 128h-64v64h64zm0 128h-64v64h64zM384 640V320l256 160z"></svg:path>`,
})
export class WhhPlayvideoIcon {
  readonly viewBox = input("0 0 1024 960")
  readonly width = input("1.07em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPliggIcon],svg[whh-pligg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 351L0 464Q255 279 384 31zm0 288v320Q232 737 33 543zm320 128l320 128q-139 0-189.5 5.5T640 927q-70 19-95 26t-70.5 25.5T384 1023zm357 7L852 515l172-228q-64 241-27 487M479 0q121 77 237 124.5T960 191l-288 64z"></svg:path>`,
})
export class WhhPliggIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPloggerIcon],svg[whh-plogger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 640q0 44-13.5 79.5T977 775t-43 33.5t-40.5 18.5t-29.5 5q-42 0-83-16t-69-32t-40-16q-18 0-25 7.5t-7 24.5q0 14 8 38t16 41l8 17q-40 0-68-28t-28-68t28-68t68-28q32 0 57 10t39 22t39 22t57 10q30 0 63-35t33-93q0-62-37-101q-57 37-123 37q-93 0-158.5-65.5T576 352q0-55 25.5-103t68.5-79q-6-46-32.5-76T576 64V0q54 0 96.5 39.5T729 140q38-12 71-12q93 0 158.5 65.5T1024 352q0 81-54 145q54 58 54 143M800 192q-66 0-113 47t-47 113t47 113t113 47t113-47t47-113t-47-113t-113-47M160 768q32 0 57-10t39-22t39-22t57-10q40 0 68 28t28 68t-28 68t-68 28q32-64 32-96q0-17-7-24.5t-25-7.5q-12 0-40 16t-69 32t-83 16q-12 0-29.5-5T90 808.5t-43-34T13.5 719T0 640q0-85 54-143Q0 433 0 352q0-93 65.5-158.5T224 128q33 0 71 12q14-61 56.5-100.5T448 0v64q-35 0-61.5 30T354 170q43 31 68.5 79T448 352q0 93-65.5 158.5T224 576q-66 0-123-37q-37 39-37 101q0 58 33 93t63 35m64-256q66 0 113-47t47-113t-47-113t-113-47t-113 47t-47 113t47 113t113 47"></svg:path>`,
})
export class WhhPloggerIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPlugIcon],svg[whh-plug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1004.19 1003q-19 19-45 20t-44-17l-95-95q-86 57-191.5 46t-180.5-86l-16-16l424-423l15 15q75 75 86 180.5t-45 192.5l95 94q18 18 17 44t-20 45m-473-573l-102-101l-100 100l102 101q18 18 17 44t-20 45t-45 20t-44-17l-102-101l-70 70l-15-16q-75-75-86-180.5t45-191.5l-94-94q-18-18-17-44t20-45t45-20t44 17l94 94q86-57 191.5-46t181.5 86l15 16l-70 70l102 101q18 18 17 44t-20 45t-45 20t-44-17"></svg:path>`,
})
export class WhhPlugIcon {
  readonly viewBox = input("0 0 1025 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPluginIcon],svg[whh-plugin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 768q-35 0-64-17.5T786 704h-18v256q0 27-19 45.5t-45 18.5H448v-18q29-17 46.5-46t17.5-64q0-53-37.5-90.5T384 768t-90.5 37.5T256 896q0 35 17.5 64t46.5 46v18H64q-26 0-45-18.5T0 960V704h18q17 29 46 46.5t64 17.5q53 0 90.5-37.5T256 640t-37.5-90.5T128 512q-35 0-64 17.5T18 576H0V320q0-26 19-45t45-19h256v-18q-29-17-46.5-46T256 128q0-53 37.5-90.5T384 0t90.5 37.5T512 128q0 35-17.5 64T448 238v18h256q26 0 45 19t19 45v256h18q17-29 46-46.5t64-17.5q53 0 90.5 37.5T1024 640t-37.5 90.5T896 768"></svg:path>`,
})
export class WhhPluginIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPluginaltIcon],svg[whh-pluginalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 1025H256q-27 0-45.5-18.5T192 961v-1h352q40 0 68-28t28-68V544q0-39-28-67.5T544 448H192V65q0-26 18.5-45T256 1h384v352q0 13 9.5 22.5T672 385h351l1 1v575q0 27-18.5 45.5T960 1025M704 0q26 0 44 19l257 257q19 18 18 45H704zM448 576v256q0 27-19 45.5T384 896H64q-27 0-45.5-18.5T0 832V576q0-26 18.5-45T64 512h320q27 0 45.5 19t18.5 45m-69 117L214 580q-6-5-14-3t-8 7v56H96q-13 0-22.5 9.5T64 672v64q0 14 9.5 23t22.5 9h96v57q0 5 8 6.5t14-2.5l165-113q5-5 5-11.5t-5-11.5"></svg:path>`,
})
export class WhhPluginaltIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPlumbingIcon],svg[whh-plumbing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 768H704q-26 0-45-19t-19-45.5t19-45t45-18.5q0-64-128-64h-64q0 27-18.5 45.5T448 640h-64q-26 0-45-18.5T320 576H128q0 27-18.5 45.5t-45 18.5T19 621.5T0 576V320q0-27 19-45.5T64.5 256t45 18.5T128 320h192q0-27 19-45.5t45-18.5v-70q-26-9-43.5-31.5T321 104q-34 10-73 17t-56 7q-26 0-45-18.5T128 64t19-45.5T192 0q21 0 70 9.5T344 33q29-33 72-33t72 33q33-14 82-23.5T640 0q27 0 45.5 18.5T704 64t-18.5 45.5T640 128q-17 0-56-7t-73-17q-2 28-19.5 50.5T448 186v70q27 0 45.5 18.5T512 320h64q107 0 193.5 38T908 469.5T960 640q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19m0 160q0 40-28 68t-68 28t-68-28t-28-68q0-24 22.5-63.5t46-68T864 768q6 0 29.5 28.5t45 68T960 928"></svg:path>`,
})
export class WhhPlumbingIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPlusIcon],svg[whh-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 640H640v320q0 27-18.5 45.5T576 1024H448q-27 0-45.5-19T384 960V640H64q-27 0-45.5-19T0 576V448q0-27 18.5-45.5T64 384h320V64q0-27 18.5-45.5T448 0h128q27 0 45.5 18.5T640 64v320h320q27 0 45.5 18.5T1024 448v128q0 26-18.5 45T960 640"></svg:path>`,
})
export class WhhPlusIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPluscirclesIcon],svg[whh-pluscircles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M613.428 832q-37 86-116.5 139t-176.5 53q-87 0-160.5-43t-116.5-116.5t-43-160.5q0-97 53-176.5t139-116.5q2-112 57.5-206.5t151-149.5t207.5-55q113 0 209 55.5t151.5 151.5t55.5 209q0 112-55 207.5t-149.5 151t-206.5 57.5m-485-128q0 80 56 136t136 56q49 0 91-23t68-62q-94-30-165-101t-101-165q-39 26-62 68t-23 91m382-17q-6-69-55-118t-118-55q22 60 67.5 105.5t105.5 67.5m98-559q-111 0-192.5 74t-93.5 182q131 1 224 94t94 224q108-12 182-93.5t74-192.5q0-119-84.5-203.5t-203.5-84.5m-480 128q-53 0-90.5-37.5T.428 128t37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5m0-192q-27 0-45.5 19t-18.5 45.5t19 45t45.5 18.5t45-18.5t18.5-45t-18.5-45.5t-45.5-19"></svg:path>`,
})
export class WhhPluscirclesIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPlusgamesIcon],svg[whh-plusgames-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1006.54 241l-135 135q25 67 25 136t-25 136l134 134q18 18 18 44.5t-18 44.5l-134 134q-18 18-44.5 18t-44.5-18l-134-134q-67 25-136 25t-136-25l-135 135q-18 18-44 18t-45-18l-134-134q-18-19-18-45t18-44l135-135q-25-67-25-136t26-136l-135-135q-19-18-19-44.5t19-44.5l133-134q18-18 44.5-18t44.5 18l135 136q67-26 136-26t136 25l135-135q18-18 44-18t45 18l134 134q18 19 18 45t-18 44m-493.5 79q-79.5 0-136 56.5T320.54 512t56.5 135.5t136 56.5t135.5-56.5t56-135.5t-56-135.5t-135.5-56.5"></svg:path>`,
})
export class WhhPlusgamesIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPluspagesIcon],svg[whh-pluspages-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M991.998 1024h-416V720l192 48l-48-192h304v416q0 13-9.5 22.5t-22.5 9.5m-224-768l-192 48V0h416q13 0 22.5 9.5t9.5 22.5v416h-304zm-464 192h-304V32q0-13 9.5-22.5t22.5-9.5h416v304l-192-48zm-48 320l192-48v304h-416q-13 0-22.5-9.5t-9.5-22.5V576h304z"></svg:path>`,
})
export class WhhPluspagesIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPlussignIcon],svg[whh-plussign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-139 0-257-68.5T68.5 769T0 512t68.5-257T255 68.5T512 0t257 68.5T955.5 255t68.5 257t-68.5 257T769 955.5T512 1024m256-544q0-13-9.5-22.5T736 448H576V288q0-13-9.5-22.5T544 256h-64q-13 0-22.5 9.5T448 288v160H288q-13 0-22.5 9.5T256 480v64q0 13 9.5 22.5T288 576h160v160q0 13 9.5 22.5T480 768h64q13 0 22.5-9.5T576 736V576h160q13 0 22.5-9.5T768 544z"></svg:path>`,
})
export class WhhPlussignIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPocketIcon],svg[whh-pocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512.56 896q-88 0-162-16t-140-54t-111.5-96t-72-146T.56 384V128q0-53 37.5-90.5T128.56 0h768q53 0 90.5 37.5t37.5 90.5v256q0 112-26.5 200t-72 146t-111.5 96t-140 54t-162 16m295.5-617.5q-24.5-23.5-59.5-23.5t-59 23l-177 169l-178-169q-24-23-58.5-23t-59 23.5t-24.5 56.5t24 56l237 225q24 24 58.5 24t59.5-24l236-225q25-23 25-56t-24.5-56.5"></svg:path>`,
})
export class WhhPocketIcon {
  readonly viewBox = input("0 0 1025 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPodcastIcon],svg[whh-podcast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 672q-27 0-45.5-19T896 608v-96q0-104-51.5-192.5t-140-140T512 128t-192.5 51.5t-140 140T128 512v96q0 26-18.5 45t-45 19T19 653T0 608v-96q0-104 40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199v96q0 26-18.5 45T960 672M512 192q87 0 160.5 43T789 351.5T832 512v64q0 26-18.5 45t-45 19t-45.5-19t-19-45v-64q0-80-56-136t-136-56t-136 56t-56 136v64q0 26-18.5 45t-45 19t-45.5-19t-19-45v-64q0-87 43-160.5T351.5 235T512 192m0 192q53 0 90.5 37.5T640 512t-37.5 90.5T512 640t-90.5-37.5T384 512t37.5-90.5T512 384m-64 320h128q27 0 45.5 18.5T640 768l-64 192q0 26-18.5 45t-45 19t-45.5-19t-19-45l-64-192q0-27 18.5-45.5T448 704"></svg:path>`,
})
export class WhhPodcastIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPodiumIcon],svg[whh-podium-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m766 328l-61 120q-2 6-14.5 17T673 480l-32 352q27 0 45.5 18.5T705 896v64q0 27-18.5 45.5T641 1024H129q-26 0-45-18.5T65 960v-64q0-27 19-45.5t45-18.5L97 480q0-1-14.5-14.5T65 448L5 328q-10-29 2.5-50.5T48 256h145v-64q0-53 37.5-90.5T321 64h64q0-27 19-45.5T449 0h64q27 0 45.5 18.5T577 64v64q0 27-18.5 45.5T513 192h-64q-26 0-45-18.5T385 128h-64q-26 0-45 19t-19 45v64h465q28 0 41 21.5t3 50.5"></svg:path>`,
})
export class WhhPodiumIcon {
  readonly viewBox = input("0 0 771 1024")
  readonly width = input("0.76em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPokemonIcon],svg[whh-pokemon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-64q111 0 207-50.5T877.5 771T955 576H692q-20 57-69 92.5T512 704t-111-35.5t-69-92.5H69q16 107 78 195t158 138.5T512 960m128-448q0-53-37.5-90.5T512 384t-90.5 37.5T384 512t37.5 90.5T512 640t90.5-37.5T640 512m276-192h-20v-37q-9-15-17-27h-47v-57l-3.5-3.5l-3.5-3.5h-57v-47q-16-11-25-17h-39v-21q-31-14-64-24v45h-64V69q-35-5-64-5v64h-64V69q-34 5-64 14v45h-64v-21q-21 10-39 21h39v64h-64v-47q-30 21-57 47h57v64h-64v-57q-25 26-47 57h47v64h-64v-37q-11 18-20 37h20v64H84q-11 35-15 64h59v-64h64v64h64v-64h64v64h12q12-35 38-64h-50v-64h64v50q29-26 64-39v-11h64q32 0 64 11v-11h64v50q7 6 14 14h50v64h64v-64h64v64h64v-64h44q-9-33-24-64m-84 64v-64h64v64zm-64-64v-64h64v64zm-64-64v-64h64v64zm-64-64v-64h64v64zm-128 0v-64h64v64zm-128 0v-64h64v64zm0 64h-64v-64h64zm-64 64h-64v-64h64zm-64 64h-64v-64h64zm192-128v64h-64v-64zm128 0v64h-64v-64zm128 0v64h-64v-64zm64 64v64h-64v-64zm-192-64v-64h64v64zm-128 0v-64h64v64zm0 256.5q0-26.5 19-45.5t45.5-19t45 18.5T576 512t-18.5 45.5t-45 18.5t-45.5-18.5t-19-45"></svg:path>`,
})
export class WhhPokemonIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPolaroidIcon],svg[whh-polaroid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1024V0h1024v1024zM960 64H64v896h896zm-64 640H128V128h768z"></svg:path>`,
})
export class WhhPolaroidIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPoliceIcon],svg[whh-police-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832.35 256q0 62 32 187t32 197q0 110-60.5 183t-163.5 73q-40 0-77.5 13.5t-63 32t-45 37.5t-29 31.5t-9.5 13.5q-3-5-9.5-13.5t-28.5-31t-46-39t-62-30.5t-78-14q-103 0-163.5-73T.35 640q0-72 32-197t32-187q0-67-14.5-112T.35 64q0-3 .5-7t4-15t9.5-19.5t19-15.5t31-7q0 16 11 37t30.5 42t51 35t67.5 14q100 0 146-35t46-93h64q0 58 46 93t146 35q36 0 67.5-14t51-35t30.5-42t11-37q18 0 31 6.5t19 16t9.5 19t4.5 15.5v7q-35 35-49.5 80t-14.5 112m-307 172l-77-172l-77 172l-179 24l132 130l-34 186l158-92l158 92l-34-186l132-130z"></svg:path>`,
})
export class WhhPoliceIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPolygonlassoIcon],svg[whh-polygonlasso-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1015.308 506l-377 250q-6 29-26.5 49.5t-48.5 25.5l-119 178q-7 12-19.5 15.5t-24-3t-15-20t2.5-25.5l106-157q-46-28-46-82q0-20 9-40l-447-448q-10-10-10-23q0-15 10-25l126-190q16-16 37-7l1 1l497 183l296-177q16-16 37-7q13 5 18 18q2 6 2 14v445q1 15-9 25m-319-258q-16 16-37 7v-1h-1l-487-179l-96 146l429 430q19-10 40-10q53 0 81 46l335-223V91z"></svg:path>`,
})
export class WhhPolygonlassoIcon {
  readonly viewBox = input("0 0 1025 1026")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPommoIcon],svg[whh-pommo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 768V354L608 768H416L192 354v414H0V0h192l320 576L832 0h192v768z"></svg:path>`,
})
export class WhhPommoIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPoopIcon],svg[whh-poop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 736q0 70-21.5 126T945 952.5t-81.5 53T768 1024H192q-80 0-136-56T0 832q0-68 45-111t123-72q-24-27-33-59q-19-62 14-118.5t98-74.5l49-18q-22-7-31-33.5t-9-89.5q0-35 26.5-62.5t64-46.5l75-38l64-46.5L512 0l13.5 13.5l31 33.5l39 47.5l30.5 50l14 47.5q0 38-15 70q65-17 123.5 14.5T825 370q11 39 2.5 76.5T794 513q100 7 165 66.5t65 156.5"></svg:path>`,
})
export class WhhPoopIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPoopaltIcon],svg[whh-poopalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 736q0 70-21.5 126T945 952.5t-81.5 53T768 1024H192q-80 0-136-56T0 832q0-68 45-111t123-72q-24-27-33-59q-19-62 14-118.5t98-74.5l49-18q-22-7-31-33.5t-9-89.5q0-35 26.5-62.5t64-46.5l75-38l64-46.5L512 0l13.5 13.5l31 33.5l39 47.5l30.5 50l14 47.5q0 38-15 70q65-17 123.5 14.5T825 370q11 39 2.5 76.5T794 513q100 7 165 66.5t65 156.5M736 576q-13 0-74-1.5t-80-.5q58-16 122-67.5t64-90.5q0-29-16.5-50.5t-42-31.5t-55-13.5T598 325l-86 34q23-21 37-45t19-48.5t6.5-38.5t1.5-35t-16-45t-32-37l-16-14q0 27-20 50.5T444 187t-56 33t-48 33.5t-20 34.5q0 28 46 62t82 34h1l-161 64q-27 9-40 14.5t-28.5 16T198 505t-6 39q0 34 26 53.5t62 21.5t75-1q-53 21-119.5 59.5t-119 83T64 832q0 49 50 88.5T232 960h504q60 0 109.5-23.5t82-73.5T960 744q0-77-64-122.5T736 576"></svg:path>`,
})
export class WhhPoopaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPopcornIcon],svg[whh-popcorn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 334L920 974q-3 21-25 35.5t-49 14.5H188q-27 0-49-14.5T113 974L2 334q-5-26 6.5-47T44 256q76 34 240 52q-26-19-26-52q0-26 18.5-45t45-19t45.5 19t19 45q0 19-10 34.5T349 314q83 6 165 6q49 0 109-3q-20-6-32.5-22.5T578 256q0-26 18.5-45t45-19t45.5 19t19 45q0 20-11 35.5T667 315q216-15 315-59q23 10 34.5 31t7.5 47m-637 46q-106-6-189-20l64 600h150zm253 0l-22 580h152l61-600q-85 14-191 20m257.5-124q-26.5 0-45.5-18.5t-19-45t19-45.5t45.5-19t45 19t18.5 45.5t-18.5 45t-45 18.5m-192-64q-26.5 0-45-18.5t-18.5-45T660.5 83t45-19t45 19t18.5 45.5t-18.5 45t-45 18.5m-192-64q-26.5 0-45-18.5t-18.5-45T468.5 19t45-19T559 19t19 45.5t-19 45t-45.5 18.5m.5 64.5q0 26.5-19 45T449.5 256t-45-18.5t-18.5-45t18.5-45.5t45-19t45.5 19t19 45.5M321.5 128q-26.5 0-45-18.5t-18.5-45T276.5 19t45-19T367 19t19 45.5t-19 45t-45.5 18.5m-192 128q-26.5 0-45-18.5t-18.5-45T84.5 147t45-19t45.5 19t19 45.5t-19 45t-45.5 18.5"></svg:path>`,
})
export class WhhPopcornIcon {
  readonly viewBox = input("0 0 1026 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPortraitIcon],svg[whh-portrait-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 847V177l128-128v926zM177 128L49 0h926L847 128zm-49 719L0 975V49l128 128zm704-69q0 10-8.5 18t-26 13.5t-36 9.5t-47 6.5t-50 4t-54.5 2t-50.5.5h-95l-50.5-.5l-54.5-2l-50-4l-47-6.5l-36-9.5l-26-13.5l-8.5-18q2-71 72.5-114T448 611v-13q-67-22-97.5-90T320 343q0-74 53.5-112.5T512 192t138.5 38.5T704 343q0 217-128 256v12q113 10 183.5 53T832 778m15 118l128 128H49l128-128z"></svg:path>`,
})
export class WhhPortraitIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPostIcon],svg[whh-post-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M855.048 768h-215l-256 256V768h-215q-57 0-113-57t-56-115V172q0-58 56-115t113-57h686q57 0 113 57t56 115v424q0 58-56 115t-113 57m41-541q0-41-29-70t-69-29h-572q-41 0-69.5 29t-28.5 70v314q0 41 28.5 70t69.5 29h572q40 0 69-29t29-70z"></svg:path>`,
})
export class WhhPostIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPostaltIcon],svg[whh-postalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M855.048 768h-87l-256 256V768h-343q-57 0-113-57t-56-115V172q0-58 56-115t113-57h686q57 0 113 57t56 115v424q0 58-56 115t-113 57m-87-576h-512q-27 0-45.5 19t-18.5 45.5t18.5 45t45.5 18.5h512q26 0 45-18.5t19-45t-19-45.5t-45-19m0 256h-512q-27 0-45.5 19t-18.5 45.5t18.5 45t45.5 18.5h512q26 0 45-18.5t19-45t-19-45.5t-45-19"></svg:path>`,
})
export class WhhPostaltIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPoundIcon],svg[whh-pound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M831.5 448q-26.5 0-45-18.5T768 384q0-106-75-181t-181-75t-181 75t-75 181q0 52 17 128h175q26 0 45 19t19 45.5t-19 45t-45 18.5H303q17 76 17 128q0 64-34 128h546q26 0 45 19t19 45.5t-19 45t-45 18.5H192q-26 0-45-19.5T128 959q0-14 10-33.5t22-38.5t22-51t10-68q0-53-18-128H64q-27 0-45.5-18.5T0 576.5T18.5 531T64 512h79q-15-71-15-128q0-104 51.5-192.5t140-140T512 0t192.5 51.5t140 140T896 384q0 27-19 45.5T831.5 448"></svg:path>`,
})
export class WhhPoundIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPoundaltIcon],svg[whh-poundalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1023q-104 0-199-40.5t-163.5-109T40.5 710T0 511t40.5-198.5t109-163T313 40.5T512 0t199 40.5t163.5 109t109 163T1024 511t-40.5 199t-109 163.5t-163.5 109t-199 40.5m-64-448h64q26 0 45-18.5t19-45t-19-45.5t-45-19H400l-2-6q-14-28-14-58q0-53 37.5-90.5T512 255t90.5 37.5T640 383q0 27 18.5 45.5t45 18.5t45.5-18.5t19-45.5q0-106-75-181t-181-75t-181 75t-75 181q0 29 9 64h-9q-26 0-45 19t-19 45.5t19 45t45 18.5h64q0 35-10 66t-22 49t-22 39t-10 38q0 27 19 45.5t45 18.5h384q26 0 45-18.5t19-45t-19-45.5t-45-19H412q16-15 24.5-47t10.5-57z"></svg:path>`,
})
export class WhhPoundaltIcon {
  readonly viewBox = input("0 0 1024 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPoundsquareIcon],svg[whh-poundsquare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-448-448h64q26 0 45-18.5t19-45t-19-45.5t-45-19h-112l-2-6q-14-28-14-58q0-53 37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5q0 26 18.5 45t45 19t45.5-19t19-45q0-106-75-181t-181-75t-181 75t-75 181q0 29 9 64h-9q-27 0-45.5 19t-18.5 45t18.5 45t45.5 19h64q0 35-10 66t-22 49t-22 39t-10 38q0 26 18.5 45t45.5 19h384q26 0 45-18.5t19-45.5t-19-45.5t-45-18.5h-292q16-15 24.5-47t10.5-57z"></svg:path>`,
})
export class WhhPoundsquareIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPowerjackIcon],svg[whh-powerjack-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 832H128q-53 0-90.5-37.5T0 704V128q0-53 37.5-90.5T128 0h704q53 0 90.5 37.5T960 128v576q0 53-37.5 90.5T832 832m0-512q0-13-9-22L661 136q-10-10-25-8H323q-15-2-25 8L136 298q-10 10-8 25v349q0 13 9.5 22.5T160 704h640q13 0 22.5-9.5T832 672zM672 576q-13 0-22.5-9.5T640 544v-64q0-13 9.5-22.5T672 448t22.5 9.5T704 480v64q0 13-9.5 22.5T672 576M480 384q-13 0-22.5-9.5T448 352v-64q0-13 9.5-22.5T480 256t22.5 9.5T512 288v64q0 13-9.5 22.5T480 384M288 576q-13 0-22.5-9.5T256 544v-64q0-13 9.5-22.5T288 448t22.5 9.5T320 480v64q0 13-9.5 22.5T288 576"></svg:path>`,
})
export class WhhPowerjackIcon {
  readonly viewBox = input("0 0 960 832")
  readonly width = input("1.16em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPowerplugIcon],svg[whh-powerplug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 827v133q0 27-19 45.5t-45.5 18.5t-45-18.5T384 960V827q-107-16-195-78T50.5 591T0 384q0-26 18.5-45T64 320h768q26 0 45 19t19 45q0 111-50.5 207T707 749.5T512 827m128-571V64q0-26 18.5-45t45-19T749 19t19 45v192zm-512 0V64q0-26 18.5-45t45-19T237 19t19 45v192z"></svg:path>`,
})
export class WhhPowerplugIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPowerplugeuIcon],svg[whh-powerplugeu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-767.5-64q26.5 0 45-19t18.5-45.5t-18.5-45t-45-18.5t-45.5 18.5t-19 45t19 45.5t45.5 19m0-896q-26.5 0-45.5 18.5t-19 45t19 45.5t45.5 19t45-19t18.5-45.5t-18.5-45t-45-18.5m383.5 128q-87 0-160.5 43t-116.5 116.5t-43 160.5t43 160.5t116.5 116.5t160.5 43t160.5-43t116.5-116.5t43-160.5t-43-160.5t-116.5-116.5t-160.5-43m383.5-128q-26.5 0-45 18.5t-18.5 45t18.5 45.5t45 19t45.5-19t19-45.5t-19-45t-45.5-18.5m0 768q-26.5 0-45 18.5t-18.5 45t18.5 45.5t45 19t45.5-19t19-45.5t-19-45t-45.5-18.5m-383.5-64q-106 0-181-75t-75-181t75-181t181-75t181 75t75 181t-75 181t-181 75m-127.5-320q-26.5 0-45.5 18.5t-19 45.5t18.5 45.5t45 18.5t45.5-19t19-45.5t-18.5-45t-45-18.5m255.5 0q-27 0-45.5 18.5t-18.5 45.5t18.5 45.5t45 18.5t45.5-19t19-45.5t-18.5-45t-45.5-18.5"></svg:path>`,
})
export class WhhPowerplugeuIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPowerplugusIcon],svg[whh-powerplugus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-767.5-64q26.5 0 45-19t18.5-45.5t-18.5-45t-45-18.5t-45.5 18.5t-19 45t19 45.5t45.5 19m0-896q-26.5 0-45.5 18.5t-19 45t19 45.5t45.5 19t45-19t18.5-45.5t-18.5-45t-45-18.5m595.5 128h-424q-79 53-125.5 137.5t-46.5 183t46.5 182.5t125.5 137h424q79-53 125.5-137t46.5-183t-46.5-183t-125.5-137m172.5-128q-26.5 0-45.5 18.5t-19 45t19 45.5t45.5 19t45-19t18.5-45.5t-18.5-45t-45-18.5m0 768q-26.5 0-45.5 18.5t-19 45t19 45.5t45.5 19t45-19t18.5-45.5t-18.5-45t-45-18.5m-193.5-64h-382q-60-45-94.5-112t-34.5-144t34.5-144t94.5-112h382q60 45 94.5 112t34.5 144t-34.5 144t-94.5 112m-319-352q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5zm192 224q0-27-18.5-45.5t-45.5-18.5t-45.5 18.5t-18.5 45.5v64h128zm128-224q0-13-9.5-22.5t-22.5-9.5t-22.5 9.5t-9.5 22.5v64q0 13 9.5 22.5t22.5 9.5t22.5-9.5t9.5-22.5z"></svg:path>`,
})
export class WhhPowerplugusIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPrecisecursorIcon],svg[whh-precisecursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992 576H672q-13 0-22.5-9.5T640 544v-64q0-13 9.5-22.5T672 448h320q13 0 22.5 9.5t9.5 22.5v64q0 13-9.5 22.5T992 576m-448 448h-64q-13 0-22.5-9.5T448 992V672q0-13 9.5-22.5T480 640h64q13 0 22.5 9.5T576 672v320q0 13-9.5 22.5T544 1024m-32-448q-27 0-45.5-18.5T448 512t18.5-45.5T512 448t45.5 18.5T576 512t-18.5 45.5T512 576m32-192h-64q-13 0-22.5-9.5T448 352V32q0-13 9.5-22.5T480 0h64q13 0 22.5 9.5T576 32v320q0 13-9.5 22.5T544 384M352 576H32q-13 0-22.5-9.5T0 544v-64q0-13 9.5-22.5T32 448h320q13 0 22.5 9.5T384 480v64q0 13-9.5 22.5T352 576"></svg:path>`,
})
export class WhhPrecisecursorIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPresentationIcon],svg[whh-presentation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960.368 639h-896q-26 0-45-18.5t-19-45.5V192q0-27 19-45.5t45-18.5h896q26 0 45 18.5t19 45.5v384q0 26-19 44.5t-45 18.5m32-575h-960q-13 0-22.5-9.5t-9.5-23T9.868 9t22.5-9h960q13 0 22.5 9t9.5 22.5t-9.5 23t-22.5 9.5m-960 639h960q13 0 22.5 9.5t9.5 23t-9.5 22.5t-22.5 9h-326l95 177q11 19 5.5 40.5t-24.5 32.5t-40 5t-32-25l-125-230h-66l-125 230q-11 19-32 25t-40-5t-24.5-32.5t5.5-40.5l95-177h-326q-13 0-22.5-9t-9.5-22.5t9.5-23t22.5-9.5"></svg:path>`,
})
export class WhhPresentationIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPrestashopIcon],svg[whh-prestashop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 960h-64V800q0-32-19-57t-49-34q0-30-31.5-49.5T608 640h-32v-32q0-40-28-68t-68-28t-68 28t-28 68v102q-28 10-46 34.5T320 800v160H64q-26 0-45-18.5T0 896V320q0-26 18.5-45T64 256h64V128L256 0v256h384V0l128 128v128h64q27 0 45.5 19t18.5 45v576q0 27-18.5 45.5T832 960M320 0h256v128H320zm96 768q13 0 22.5 9.5T448 800V608q0-13 9.5-22.5T480 576t22.5 9.5T512 608v128q0-13 9.5-22.5T544 704t22.5 9.5T576 736q0-13 9.5-22.5T608 704t22.5 9.5T640 736v64q0-13 9.5-22.5T672 768t22.5 9.5T704 800v96q0 53-31 90.5t-76 37.5H491q-44 0-75.5-37.5T384 896v-96q0-13 9.5-22.5T416 768"></svg:path>`,
})
export class WhhPrestashopIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPretzelIcon],svg[whh-pretzel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 768q-103 0-198.5-35t-164-92.5t-109-134T0 349q0-62 17.5-123.5t48-112t77.5-82T244 0q113 0 268 116Q667 0 780 0q54 0 101 31.5t77.5 82t48 112T1024 349q0 81-40.5 157.5t-109 134t-164 92.5T512 768m202-172q-26-91-79.5-178.5T511 262q-69 67-122 155t-79 179q94 44 202 44t202-44M128 361q0 82 67 153q32-91 87.5-175.5T410 191q-106-63-154-63q-34 0-59.5 20.5t-40 55.5t-21.5 74.5t-7 82.5m640-233q-48 0-154 63q72 63 127.5 147.5T829 514q67-71 67-153q0-58-13-109t-43-87.5t-72-36.5"></svg:path>`,
})
export class WhhPretzelIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPreviewIcon],svg[whh-preview-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 1025H256q-27 0-45.5-18.5T192 961v-81q-85-31-138.5-105T0 608t53.5-167T192 337V65q0-26 18.5-45T256 1h384v352q0 13 9.5 22.5T672 385h351l1 1v575q0 26-19 45t-45 19M632 870L481 720q31-53 31-112q0-92-65.5-158T288 384t-158.5 65.5T64 608t65.5 158.5T288 832q58 0 112-31l150 151q8 8 20 8t21-8l41-41q8-8 8-20t-8-21M288 768q-66 0-113-46.5t-47-113T175 495t113-47t113 47t47 113.5t-47 113T288 768M704 0q26 1 44 19l257 257q19 19 18 45H704z"></svg:path>`,
})
export class WhhPreviewIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPreviousIcon],svg[whh-previous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m962.428 1013l-563-463q-15-15-15-37.5t15-38.5l563-463q25-27 62 13v976q-37 40-62 13m-834 11q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5"></svg:path>`,
})
export class WhhPreviousIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPriceIcon],svg[whh-price-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1006.914 680l-325 325q-18 18-44.5 18t-44.5-18l-574-574q-18-18-18-79V64q0-27 19-45.5t45-18.5h288q62 0 80 18l574 573q18 19 18 45t-18 44m-750-553q-53 0-90.5 37.5t-37.5 90.5t37.5 90.5t90.5 37.5t90.5-37.5t37.5-90.5t-37.5-90.5t-90.5-37.5"></svg:path>`,
})
export class WhhPriceIcon {
  readonly viewBox = input("0 0 1025 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPricealtIcon],svg[whh-pricealt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1006.914 680l-325 325q-18 18-44.5 18t-44.5-18l-574-574q-18-18-18-79V64q0-27 19-45.5t45-18.5h288q62 0 80 18l574 573q18 19 18 45t-18 44m-750-553q-53 0-90.5 37.5t-37.5 90.5t37.5 90.5t90.5 37.5t90.5-37.5t37.5-90.5t-37.5-90.5t-90.5-37.5m148 425q-9-9-21.5-9t-21.5 9t-9 22t9 22l258 258q9 9 22 9t22-9t9-21.5t-9-21.5zm53-96q-9 9-9 22t9 22l258 258q9 9 22 9t22-9t9-21.5t-9-21.5l-259-259q-9-9-21.5-9t-21.5 9m398 163l-259-259q-9-9-21.5-9t-21.5 9t-9 22t9 22l258 258q9 9 22 9t22-9t9-21.5t-9-21.5"></svg:path>`,
})
export class WhhPricealtIcon {
  readonly viewBox = input("0 0 1025 1023")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPrintIcon],svg[whh-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 896v64q0 27-19 45.5t-45 18.5H192q-27 0-45.5-18.5T128 960v-64q-53 0-90.5-37.5T0 768V512q0-53 37.5-90.5T128 384h768q53 0 90.5 37.5T1024 512v256q0 53-37.5 90.5T896 896m0-320q0-26-19-45t-45-19H192q-27 0-45.5 19T128 576v128q0 27 18.5 45.5T192 768h640q26 0 45-18.5t19-45.5zM256 704q-27 0-45.5-18.5t-18.5-45t18.5-45.5t45-19t45.5 19t19 45.5t-18.5 45T256 704M128 64q0-26 18.5-45T192 0h640q26 0 45 19t19 45v256H128z"></svg:path>`,
})
export class WhhPrintIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhProfileIcon],svg[whh-profile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 958q0 12-13.5 22T969 996.5t-57.5 12t-75.5 8.5t-80 4.5t-87.5 2.5t-81 1h-151l-81-1l-87.5-2.5l-80-4.5l-75.5-8.5l-57.5-12L13.5 980L0 958q2-88 110-155.5T384 713v-33q-52-23-90-65t-60-98.5t-32-121T192 256q0-64 25-114t69-80.5t101-46T512 0t125 15.5t101 46t69 80.5t25 114q0 350-192 426v31q166 22 274 89.5T1024 958"></svg:path>`,
})
export class WhhProfileIcon {
  readonly viewBox = input("0 0 1024 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhProgramcloseIcon],svg[whh-programclose-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-448-960q-27 0-45.5 18.5t-18.5 45t18.5 45.5t45.5 19t45.5-19t18.5-45.5t-18.5-45t-45.5-18.5m192 0q-27 0-45.5 18.5t-18.5 45t18.5 45.5t45.5 19t45.5-19t18.5-45.5t-18.5-45t-45.5-18.5m192.5 0q-26.5 0-45.5 18.5t-19 45t19 45.5t45.5 19t45-19t18.5-45.5t-18.5-45t-45-18.5m63.5 256q0-27-18.5-45.5t-45.5-18.5h-640q-27 0-45.5 18.5t-18.5 45.5v512q0 27 18.5 45.5t45.5 18.5h640q27 0 45.5-18.5t18.5-45.5zm-293 255l155 154q10 10 10 23t-10 23l-45 45q-10 9-23 9t-23-9l-155-154l-155 154q-10 9-23 9t-23-9l-45-45q-10-10-10-23t10-23l155-154l-156-155q-9-9-9-22.5t9-22.5l46-46q9-9 22.5-9t23.5 9l155 155l155-155q10-9 23.5-9t22.5 9l46 46q9 9 9 22.5t-9 22.5z"></svg:path>`,
})
export class WhhProgramcloseIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhProgramokIcon],svg[whh-programok-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 1024h-768q-53 0-90.5-37.5T.428 896V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m-448.5-960q-26.5 0-45 18.5t-18.5 45t18.5 45.5t45.5 19t45.5-19t18.5-45.5t-19-45t-45.5-18.5m192 0q-26.5 0-45 18.5t-18.5 45t18.5 45.5t45 19t45.5-19t19-45.5t-19-45t-45.5-18.5m192.5 0q-27 0-45.5 18.5t-18.5 45t18.5 45.5t45.5 19t45.5-19t18.5-45.5t-18.5-45t-45.5-18.5m64 256q0-27-19-45.5t-45-18.5h-640q-27 0-45.5 18.5t-18.5 45.5v512q0 27 18.5 45.5t45.5 18.5h640q26 0 45-18.5t19-45.5zm-385 437q-2 11-9 18l-45 45q-10 10-25 9q-15 1-25-9l-45-45q-5-5-8-11l-153-152q-9-9-9-22.5t9-22.5l46-46q9-9 22.5-9t22.5 9l137 135l302-327q10-9 23.5-9t22.5 9l46 46q9 9 9 22.5t-9 22.5z"></svg:path>`,
})
export class WhhProgramokIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhProjectcompareIcon],svg[whh-projectcompare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 238v402q0 87-43 160.5T672.5 917T512 960v64L320 896l192-128v64q80 0 136-56t56-136V238q-29-17-46.5-46T640 128q0-53 37.5-90.5T768 0t90.5 37.5T896 128q0 35-17.5 64T832 238M768 64q-27 0-45.5 18.5T704 128t18.5 45.5t45 18.5t45.5-19t19-45.5t-18.5-45T768 64M384 192q-80 0-136 56t-56 136v402q29 17 46.5 46t17.5 64q0 53-37.5 90.5T128 1024t-90.5-37.5T0 896q0-35 17.5-64T64 786V384q0-87 43-160.5T223.5 107T384 64V0l192 128l-192 128zM128.5 832Q102 832 83 850.5T64 896t18.5 45.5T128 960t45.5-19t18.5-45.5t-18.5-45t-45-18.5"></svg:path>`,
})
export class WhhProjectcompareIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhProjectforkIcon],svg[whh-projectfork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768 256q-64 0-103-52q-181 40-309.5 202T199 791q26 17 41.5 45t15.5 60q0 53-37.5 90.5T128 1024t-90.5-37.5T0 896q0-35 17.5-64T64 786V64q0-26 18.5-45t45-19T173 19t19 45v355q80-136 199-225.5T651 76q15-34 46.5-55T768 0q53 0 90.5 37.5T896 128t-37.5 90.5T768 256M128.5 832Q102 832 83 850.5t-19 45T83 941t45.5 19t45-19t18.5-45.5t-18.5-45t-45-18.5m640-768Q742 64 723 83t-19 45.5t19 45t45.5 18.5t45-19t18.5-45t-18.5-45t-45-19"></svg:path>`,
})
export class WhhProjectforkIcon {
  readonly viewBox = input("0 0 896 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhProjectforkdeleteIcon],svg[whh-projectforkdelete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m951.85 161l64 64q9 9 9 21.5t-9 21.5l-43 44q-9 9-21.5 9t-21.5-9l-65-65l-65 66q-9 9-21.5 9t-21.5-9l-44-44q-9-9-9-21.5t9-21.5l66-65l-66-66q-9-8-9-21t9-22l44-43q9-9 21.5-9t21.5 9l65 65l65-64q9-9 21.5-9t21.5 9l43 43q9 9 9 21.5t-9 21.5zm-752 631q57 39 57 105q0 53-37.5 90.5t-90.5 37.5t-90.5-37.5T.85 897q0-35 17.5-64t46.5-46V65q0-27 18.5-45.5T128.85 1t45.5 18.5t18.5 45.5v370q78-122 194-201.5t254-104.5v128q-174 39-294.5 183t-146.5 352m-70.5 41q-26.5 0-45.5 18.5t-19 45t18.5 45.5t45.5 19t45.5-19t18.5-45.5t-18.5-45t-45-18.5"></svg:path>`,
})
export class WhhProjectforkdeleteIcon {
  readonly viewBox = input("0 0 1025 1025")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhProjectforkprivateIcon],svg[whh-projectforkprivate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M992.553 384h-256q-13 0-22.5-9.5t-9.5-22.5V128q0-53 47-90.5t113-37.5t113 37.5t47 90.5v224q0 13-9.5 22.5t-22.5 9.5m-128-320q-40 0-68 18.5t-28 45.5v64h192v-64q0-27-28-45.5t-68-18.5m-665 727q57 39 57 105q0 53-37.5 90.5t-90.5 37.5t-90.5-37.5T.553 896q0-35 17.5-64t46.5-46V64q0-26 18.5-45t45.5-19t45.5 19t18.5 45v370q78-122 194-201.5t254-104.5v128q-174 39-294.5 183t-146.5 352m-70.5 41q-26.5 0-45.5 18.5t-19 45t18.5 45.5t45.5 19t45.5-19t18.5-45.5t-18.5-45t-45-18.5"></svg:path>`,
})
export class WhhProjectforkprivateIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhProjectmergeIcon],svg[whh-projectmerge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768.338 1024q-39 0-70.5-21t-46.5-55q-141-28-260-117.5t-199-225.5v181q29 17 46.5 46t17.5 64q0 53-37.5 90.5t-90.5 37.5t-90.5-37.5T.338 896q0-35 17.5-64t46.5-46V238q-29-17-46.5-46t-17.5-64q0-53 37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5q0 33-15.5 61t-41.5 45q28 223 157 384.5t309 201.5q39-52 103-52q53 0 90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5m-640.5-64q26.5 0 45.5-18.5t19-45t-19-45.5t-45.5-19t-45 19t-18.5 45.5t18.5 45t45 18.5m0-896q-26.5 0-45 18.5t-18.5 45.5t18.5 45.5t45 18.5t45.5-19t19-45.5t-19-45t-45.5-18.5m640 768q-26.5 0-45 18.5t-18.5 45.5t18.5 45.5t45 18.5t45.5-19t19-45.5t-19-45t-45.5-18.5"></svg:path>`,
})
export class WhhProjectmergeIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhProjectorIcon],svg[whh-projector-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896 576h-64q0 26-18.5 45t-45 19t-45.5-19t-19-45H320q0 26-18.5 45t-45 19t-45.5-19t-19-45h-64q-53 0-90.5-37.5T0 448V256q0-53 37.5-90.5T128 128h22q27-58 81.5-93T352 0t120.5 35t81.5 93h342q53 0 90.5 37.5T1024 256v192q0 53-37.5 90.5T896 576M352 64q-66 0-113 47t-47 113t47 113t113 47t113-47t47-113t-47-113t-113-47m384 192q-13 0-22.5 9.5T704 288t9.5 22.5T736 320t22.5-9.5T768 288t-9.5-22.5T736 256m128 0q-13 0-22.5 9.5T832 288t9.5 22.5T864 320t22.5-9.5T896 288t-9.5-22.5T864 256"></svg:path>`,
})
export class WhhProjectorIcon {
  readonly viewBox = input("0 0 1024 640")
  readonly width = input("1.6em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhProjectpierIcon],svg[whh-projectpier-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-960q-91 0-174 35.5T195 195T99.5 338T64 512t35.5 174T195 829t143 95.5T512 960t174-35.5T829 829t95.5-143T960 512t-35.5-174T829 195T686 99.5T512 64m128 576H384v96q0 13-9.5 22.5T352 768h-64q-13 0-22.5-9.5T256 736V288q0-13 9.5-22.5T288 256h352q80 0 136 56t56 136t-56 136t-136 56m0-256H384v128h256q27 0 45.5-18.5t18.5-45t-18.5-45.5t-45.5-19"></svg:path>`,
})
export class WhhProjectpierIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhProjectsendIcon],svg[whh-projectsend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M122 281L592 10q27-15 56.5-7T693 37l321 555q13 23 9 48q-307 0-553-100T122 281m847 422l-538 311q-26 15-55.5 7.5T330 987L0 448q142 115 402.5 184T969 703"></svg:path>`,
})
export class WhhProjectsendIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhProtecteddirectoryIcon],svg[whh-protecteddirectory-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.38 896h-768q-53 0-90.5-37.5T.38 768V256q0-26 18.5-45t45.5-19h480q0-7 11.5-28t22.5-39l12-17q7-19 28-31.5t44-12.5h240q24 0 45 12.5t28 31.5q49 64 49 84v576q0 53-37.5 90.5t-90.5 37.5m-256-448q0-53-37.5-90.5t-90.5-37.5t-90.5 37.5t-37.5 90.5q0 39 22.5 71.5t58.5 46.5l-81 202h256l-81-202q36-14 58.5-46.5t22.5-71.5m-594-404q7-19 28-31.5t44-12.5h240q24 0 45 12.5t29 31.5l48 84H.38z"></svg:path>`,
})
export class WhhProtecteddirectoryIcon {
  readonly viewBox = input("0 0 1025 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPscircleIcon],svg[whh-pscircle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m0-832q-87 0-160.5 42.5T235 351t-43 161t43 160.5T351.5 789T512 832t160.5-43T789 672.5T832 512t-43-161t-116.5-116.5T512 192m0 576q-106 0-181-75t-75-181t75-181t181-75t181 75t75 181t-75 181t-181 75"></svg:path>`,
})
export class WhhPscircleIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPscursorIcon],svg[whh-pscursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 704H800q-13 0-33.5-11T736 672L608 544q-19-19-19-32t19-32l128-128q7-11 29-21.5t35-10.5h160q26 0 45 18.5t19 45.5v256q0 26-19 45t-45 19M672 288L544 416q-19 19-32 19t-32-19L352 288q-10-10-21-30.5T320 224V64q0-27 19-45.5T384 0h256q27 0 45.5 18.5T704 64v160q0 13-10.5 35T672 288M416 544L288 672q-10 10-30.5 21T224 704H64q-26 0-45-19T0 640V384q0-27 19-45.5T64 320h160q13 0 35 10.5t29 21.5l128 128q19 19 19 32t-19 32m64 64q19-19 32-19t32 19l128 128q11 7 21.5 29t10.5 35v160q0 26-19 45t-45 19H384q-27 0-45.5-19T320 960V800q0-13 11-33.5t21-30.5z"></svg:path>`,
})
export class WhhPscursorIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPsdownIcon],svg[whh-psdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m542 52l279 295q23 22 48.5 71t25.5 79v376q0 63-43.5 107T746 1024H149q-62 0-105.5-44T0 873V497q0-30 25-82t50-68L354 52q40-52 94-52t94 52"></svg:path>`,
})
export class WhhPsdownIcon {
  readonly viewBox = input("0 0 895 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPsleftIcon],svg[whh-psleft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m972.38 354l-295-280q-22-23-71-48.5t-79-25.5h-376q-63 0-107 43.5T.38 149v598q0 62 44 105.5t107 43.5h376q30 0 82-25t68-50l295-279q52-40 52-94t-52-94"></svg:path>`,
})
export class WhhPsleftIcon {
  readonly viewBox = input("0 0 1025 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPsloneIcon],svg[whh-pslone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 768H192q-80 0-136-56T0 576V192q0-80 56-136T192 0h640q80 0 136 56t56 136v384q0 80-56 136t-136 56M416 576H256V160q0-13-9.5-22.5T224 128t-22.5 9.5T192 160v448q0 13 9.5 22.5T224 640h192q13 0 22.5-9.5T448 608t-9.5-22.5T416 576m384 0h-32V256q0-53-37.5-90.5T640 128q-14 0-23 9.5t-9 22.5t9 22.5t23 9.5q27 0 45.5 18.5T704 256v320h-64q-13 0-22.5 9.5T608 608t9.5 22.5T640 640h160q13 0 22.5-9.5T832 608t-9.5-22.5T800 576"></svg:path>`,
})
export class WhhPsloneIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPsltwoIcon],svg[whh-psltwo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 768H192q-80 0-136-56T0 576V192q0-80 56-136T192 0h640q80 0 136 56t56 136v384q0 80-56 136t-136 56M416 576H256V160q0-13-9.5-22.5T224 128t-22.5 9.5T192 160v448q0 13 9.5 22.5T224 640h192q13 0 22.5-9.5T448 608t-9.5-22.5T416 576m288-128q53 0 90.5-37.5T832 320v-64q0-53-37.5-90.5T704 128t-90.5 37.5T576 256q0 13 9.5 22.5T608 288t22.5-9.5T640 256q0-27 18.5-45.5T704 192t45.5 19t18.5 45v64q0 26-18.5 45T704 384q-53 0-90.5 37.5T576 512v96q0 13 9.5 22.5T608 640h192q13 0 22.5-9.5T832 608t-9.5-22.5T800 576H656q-7 0-11.5-4.5T640 560v-48q0-27 18.5-45.5T704 448"></svg:path>`,
})
export class WhhPsltwoIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPsrightIcon],svg[whh-psright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M52 354L347 74q22-23 71-48.5T497 0h377q62 0 106 43.5t44 105.5v598q0 61-44 105t-106 44H497q-30 0-82-25t-68-50L52 542Q0 502 0 448t52-94"></svg:path>`,
})
export class WhhPsrightIcon {
  readonly viewBox = input("0 0 1024 896")
  readonly width = input("1.15em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPsroneIcon],svg[whh-psrone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 768H192q-80 0-136-56T0 576V192q0-80 56-136T192 0h640q80 0 136 56t56 136v384q0 80-56 136t-136 56M448 256q0-53-37.5-90.5T320 128h-96q-13 0-22.5 9.5T192 160v448q0 13 9.5 22.5T224 640t22.5-9.5T256 608V448h64q26 0 45 18.5t19 45.5v96q0 13 9.5 22.5T416 640t22.5-9.5T448 608v-96q0-58-44-96q44-38 44-96zm352 320h-32V256q0-53-37.5-90.5T640 128q-14 0-23 9.5t-9 22.5t9 22.5t23 9.5q27 0 45.5 18.5T704 256v320h-64q-13 0-22.5 9.5T608 608t9.5 22.5T640 640h160q13 0 22.5-9.5T832 608t-9.5-22.5T800 576M320 384h-64V192h64q26 0 45 18.5t19 45.5v64q0 26-19 45t-45 19"></svg:path>`,
})
export class WhhPsroneIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPsrtwoIcon],svg[whh-psrtwo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 768H192q-80 0-136-56T0 576V192q0-80 56-136T192 0h640q80 0 136 56t56 136v384q0 80-56 136t-136 56M448 256q0-53-37.5-90.5T320 128h-96q-13 0-22.5 9.5T192 160v448q0 13 9.5 22.5T224 640t22.5-9.5T256 608V448h64q26 0 45 18.5t19 45.5v96q0 13 9.5 22.5T416 640t22.5-9.5T448 608v-96q0-58-44-96q44-38 44-96zm256 192q53 0 90.5-37.5T832 320v-64q0-53-37.5-90.5T704 128t-90.5 37.5T576 256q0 13 9 22.5t22.5 9.5t23-9.5T640 256q0-27 18.5-45.5t45-18.5t45.5 19t19 45v64q0 26-18.5 45T704 384q-53 0-90.5 37.5T576 512v96q0 13 9 22.5t23 9.5h192q13 0 22.5-9.5T832 608t-9.5-22.5T800 576H656q-7 0-11.5-4.5T640 560v-48q0-27 18.5-45.5T704 448m-384-64h-64V192h64q26 0 45 18.5t19 45.5v64q0 26-18.5 45T320 384"></svg:path>`,
})
export class WhhPsrtwoIcon {
  readonly viewBox = input("0 0 1024 768")
  readonly width = input("1.34em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPssquareIcon],svg[whh-pssquare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m256-704q0-27-19-45.5T704 256H320q-26 0-45 18.5T256 320v384q0 26 19 45t45 19h384q27 0 45.5-19t18.5-45zm-448 0h384v384H320z"></svg:path>`,
})
export class WhhPssquareIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[whhPstriangleIcon],svg[whh-pstriangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 1024q-104 0-199-40.5t-163.5-109T40.5 711T0 512t40.5-199t109-163.5T313 40.5T512 0t199 40.5t163.5 109t109 163.5t40.5 199t-40.5 199t-109 163.5t-163.5 109t-199 40.5m32-815q-19-18-32-18t-32 18L192 706q0 22 4.5 35.5t15 18.5t19 6.5T256 768h512q16 0 25.5-1.5t19.5-7t14.5-19T832 706zm-32 79l256 416H256z"></svg:path>`,
})
export class WhhPstriangleIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

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
