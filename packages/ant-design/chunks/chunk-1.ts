import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[antDesignMinusOutlinedIcon],svg[ant-design-minus-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8"></svg:path>`,
})
export class AntDesignMinusOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignMinusSquareFilledIcon],svg[ant-design-minus-square-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32M704 536c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8z"></svg:path>`,
})
export class AntDesignMinusSquareFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignMinusSquareOutlinedIcon],svg[ant-design-minus-square-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8"></svg:path><svg:path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32m-40 728H184V184h656z"></svg:path>`,
})
export class AntDesignMinusSquareOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignMinusSquareTwotoneIcon],svg[ant-design-minus-square-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32m-40 728H184V184h656z"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="M184 840h656V184H184zm136-352c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H328c-4.4 0-8-3.6-8-8z"></svg:path><svg:path fill="currentColor" d="M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8"></svg:path>`,
})
export class AntDesignMinusSquareTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignMobileFilledIcon],svg[ant-design-mobile-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64M512 824c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40"></svg:path>`,
})
export class AntDesignMobileFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignMobileOutlinedIcon],svg[ant-design-mobile-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64m-8 824H288V134h448zM472 784a40 40 0 1 0 80 0a40 40 0 1 0-80 0"></svg:path>`,
})
export class AntDesignMobileOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignMobileTwotoneIcon],svg[ant-design-mobile-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M744 64H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64m-8 824H288V136h448z"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="M288 888h448V136H288zm224-142c22.1 0 40 17.9 40 40s-17.9 40-40 40s-40-17.9-40-40s17.9-40 40-40"></svg:path><svg:path fill="currentColor" d="M472 786a40 40 0 1 0 80 0a40 40 0 1 0-80 0"></svg:path>`,
})
export class AntDesignMobileTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignMoneyCollectFilledIcon],svg[ant-design-money-collect-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M911.5 699.7a8 8 0 0 0-10.3-4.8L840 717.2V179c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5c-4.4 0-8 3.6-8 8V762c0 3.3 2.1 6.3 5.3 7.5L501 909.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8m-243.8-377L564 514.3h57.6c4.4 0 8 3.6 8 8v27.1c0 4.4-3.6 8-8 8h-76.3v39h76.3c4.4 0 8 3.6 8 8v27.1c0 4.4-3.6 8-8 8h-76.3V703c0 4.4-3.6 8-8 8h-49.9c-4.4 0-8-3.6-8-8v-63.4h-76c-4.4 0-8-3.6-8-8v-27.1c0-4.4 3.6-8 8-8h76v-39h-76c-4.4 0-8-3.6-8-8v-27.1c0-4.4 3.6-8 8-8h57L356.5 322.8c-2.1-3.8-.7-8.7 3.2-10.8c1.2-.7 2.5-1 3.8-1h55.7a8 8 0 0 1 7.1 4.4L511 484.2h3.3L599 315.4c1.3-2.7 4.1-4.4 7.1-4.4h54.5c4.4 0 8 3.6 8.1 7.9c0 1.3-.4 2.6-1 3.8"></svg:path>`,
})
export class AntDesignMoneyCollectFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignMoneyCollectOutlinedIcon],svg[ant-design-money-collect-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M911.5 700.7a8 8 0 0 0-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5c-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8M512 837.5l-256-93.1V184h512v560.4zM660.6 312h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1c-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8c-.1-4.3-3.7-7.9-8.1-7.9"></svg:path>`,
})
export class AntDesignMoneyCollectOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignMoneyCollectTwotoneIcon],svg[ant-design-money-collect-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".15" d="m256 744.4l256 93.1l256-93.1V184H256zM359.7 313c1.2-.7 2.5-1 3.8-1h55.7a8 8 0 0 1 7.1 4.4L511 485.2h3.3L599 316.4c1.3-2.7 4.1-4.4 7.1-4.4h54.5c4.4 0 8 3.6 8.1 7.9c0 1.3-.4 2.6-1 3.8L564 515.3h57.6c4.4 0 8 3.6 8 8v27.1c0 4.4-3.6 8-8 8h-76.3v39h76.3c4.4 0 8 3.6 8 8v27.1c0 4.4-3.6 8-8 8h-76.3V704c0 4.4-3.6 8-8 8h-49.9c-4.4 0-8-3.6-8-8v-63.4h-76c-4.4 0-8-3.6-8-8v-27.1c0-4.4 3.6-8 8-8h76v-39h-76c-4.4 0-8-3.6-8-8v-27.1c0-4.4 3.6-8 8-8h57L356.5 323.8c-2.1-3.8-.7-8.7 3.2-10.8"></svg:path><svg:path fill="currentColor" d="M911.5 700.7a8 8 0 0 0-10.3-4.8L840 718.2V180c0-37.6-30.4-68-68-68H252c-37.6 0-68 30.4-68 68v538.2l-61.3-22.3c-.9-.3-1.8-.5-2.7-.5c-4.4 0-8 3.6-8 8V763c0 3.3 2.1 6.3 5.3 7.5L501 910.1c7.1 2.6 14.8 2.6 21.9 0l383.8-139.5c3.2-1.2 5.3-4.2 5.3-7.5v-59.6c0-1-.2-1.9-.5-2.8M768 744.4l-256 93.1l-256-93.1V184h512z"></svg:path><svg:path fill="currentColor" d="M460.4 515.4h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.6-1.2 1-2.5 1-3.8c-.1-4.3-3.7-7.9-8.1-7.9h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1c-3.9 2.1-5.3 7-3.2 10.8z"></svg:path>`,
})
export class AntDesignMoneyCollectTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignMonitorOutlinedIcon],svg[ant-design-monitor-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m692.8 412.7l.2-.2l-34.6-44.3a7.97 7.97 0 0 0-11.2-1.4l-50.4 39.3l-70.5-90.1a7.97 7.97 0 0 0-11.2-1.4l-37.9 29.7a7.97 7.97 0 0 0-1.4 11.2l70.5 90.2l-.2.1l34.6 44.3c2.7 3.5 7.7 4.1 11.2 1.4l50.4-39.3l64.1 82c2.7 3.5 7.7 4.1 11.2 1.4l37.9-29.6c3.5-2.7 4.1-7.7 1.4-11.2zM608 112c-167.9 0-304 136.1-304 304c0 70.3 23.9 135 63.9 186.5L114.3 856.1a8.03 8.03 0 0 0 0 11.3l42.3 42.3c3.1 3.1 8.2 3.1 11.3 0l253.6-253.6C473 696.1 537.7 720 608 720c167.9 0 304-136.1 304-304S775.9 112 608 112m161.2 465.2C726.2 620.3 668.9 644 608 644s-118.2-23.7-161.2-66.8C403.7 534.2 380 476.9 380 416s23.7-118.2 66.8-161.2c43-43.1 100.3-66.8 161.2-66.8s118.2 23.7 161.2 66.8c43.1 43 66.8 100.3 66.8 161.2s-23.7 118.2-66.8 161.2"></svg:path>`,
})
export class AntDesignMonitorOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignMoonFilledIcon],svg[ant-design-moon-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M489.493 111.658c30.658-1.792 45.991 36.44 22.59 56.329C457.831 214.095 426 281.423 426 354c0 134.757 109.243 244 244 244c72.577 0 139.905-31.832 186.014-86.084c19.868-23.377 58.064-8.102 56.332 22.53C900.4 745.823 725.141 912 512.5 912C291.31 912 112 732.69 112 511.5c0-211.39 164.287-386.024 374.198-399.649l.206-.013z"></svg:path>`,
})
export class AntDesignMoonFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignMoonOutlinedIcon],svg[ant-design-moon-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M489.493 111.658c30.658-1.792 45.991 36.44 22.59 56.329C457.831 214.095 426 281.423 426 354c0 134.757 109.243 244 244 244c72.577 0 139.905-31.832 186.014-86.084c19.868-23.377 58.064-8.102 56.332 22.53C900.4 745.823 725.141 912 512.5 912C291.31 912 112 732.69 112 511.5c0-211.39 164.287-386.024 374.198-399.649l.206-.013zm-81.143 79.75l-4.112 1.362C271.1 237.943 176 364.092 176 511.5C176 697.344 326.656 848 512.5 848c148.28 0 274.938-96.192 319.453-230.41l.625-1.934l-.11.071c-47.18 29.331-102.126 45.755-159.723 46.26L670 662c-170.104 0-308-137.896-308-308c0-58.595 16.476-114.54 46.273-162.467z"></svg:path>`,
})
export class AntDesignMoonOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignMoreOutlinedIcon],svg[ant-design-more-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M456 231a56 56 0 1 0 112 0a56 56 0 1 0-112 0m0 280a56 56 0 1 0 112 0a56 56 0 1 0-112 0m0 280a56 56 0 1 0 112 0a56 56 0 1 0-112 0"></svg:path>`,
})
export class AntDesignMoreOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignMutedFilledIcon],svg[ant-design-muted-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M771.915 115c-5.863 0-11.877 1.644-17.42 5.267L400 351.966H236c-8.837 0-16 7.165-16 16.003V656.03c0 8.838 7.163 16.003 16 16.003h164l354.495 231.7c5.542 3.621 11.558 5.267 17.42 5.267C788.566 909 804 895.749 804 876.94V147.06c0-18.808-15.436-32.06-32.085-32.06"></svg:path>`,
})
export class AntDesignMutedFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignMutedOutlinedIcon],svg[ant-design-muted-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M771.915 115c-5.863 0-11.877 1.644-17.42 5.267L400 351.966H236c-8.837 0-16 7.165-16 16.003V656.03c0 8.838 7.163 16.003 16 16.003h164l354.495 231.7c5.542 3.621 11.558 5.267 17.42 5.267C788.566 909 804 895.749 804 876.94V147.06c0-18.808-15.436-32.06-32.085-32.06M732 220.997v582.005L439.386 611.75l-17.948-11.73H292V423.98h129.438l17.948-11.73z"></svg:path>`,
})
export class AntDesignMutedOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignNodeCollapseOutlinedIcon],svg[ant-design-node-collapse-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M952 612c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H298c-14.2-35.2-48.7-60-89-60c-53 0-96 43-96 96s43 96 96 96c40.3 0 74.8-24.8 89-60h150.3v152c0 55.2 44.8 100 100 100H952c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H548.3c-15.5 0-28-12.5-28-28V612zM451.7 313.7l172.5 136.2c6.3 5.1 15.8.5 15.8-7.7V344h264c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H640v-98.2c0-8.1-9.4-12.8-15.8-7.7L451.7 298.3c-4.9 3.9-4.9 11.5 0 15.4"></svg:path>`,
})
export class AntDesignNodeCollapseOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignNodeExpandOutlinedIcon],svg[ant-design-node-expand-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M952 612c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H298c-14.2-35.2-48.7-60-89-60c-53 0-96 43-96 96s43 96 96 96c40.3 0 74.8-24.8 89-60h150.3v152c0 55.2 44.8 100 100 100H952c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H548.3c-15.5 0-28-12.5-28-28V612zM456 344h264v98.2c0 8.1 9.5 12.8 15.8 7.7l172.5-136.2c5-3.9 5-11.4 0-15.3L735.8 162.1c-6.4-5.1-15.8-.5-15.8 7.7V268H456c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8"></svg:path>`,
})
export class AntDesignNodeExpandOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignNodeIndexOutlinedIcon],svg[ant-design-node-index-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M843.5 737.4c-12.4-75.2-79.2-129.1-155.3-125.4S550.9 676 546 752c-153.5-4.8-208-40.7-199.1-113.7c3.3-27.3 19.8-41.9 50.1-49c18.4-4.3 38.8-4.9 57.3-3.2c1.7.2 3.5.3 5.2.5c11.3 2.7 22.8 5 34.3 6.8c34.1 5.6 68.8 8.4 101.8 6.6c92.8-5 156-45.9 159.2-132.7c3.1-84.1-54.7-143.7-147.9-183.6c-29.9-12.8-61.6-22.7-93.3-30.2c-14.3-3.4-26.3-5.7-35.2-7.2c-7.9-75.9-71.5-133.8-147.8-134.4S189.7 168 180.5 243.8s40 146.3 114.2 163.9s149.9-23.3 175.7-95.1c9.4 1.7 18.7 3.6 28 5.8c28.2 6.6 56.4 15.4 82.4 26.6c70.7 30.2 109.3 70.1 107.5 119.9c-1.6 44.6-33.6 65.2-96.2 68.6c-27.5 1.5-57.6-.9-87.3-5.8c-8.3-1.4-15.9-2.8-22.6-4.3c-3.9-.8-6.6-1.5-7.8-1.8l-3.1-.6c-2.2-.3-5.9-.8-10.7-1.3c-25-2.3-52.1-1.5-78.5 4.6c-55.2 12.9-93.9 47.2-101.1 105.8c-15.7 126.2 78.6 184.7 276 188.9c29.1 70.4 106.4 107.9 179.6 87c73.3-20.9 119.3-93.4 106.9-168.6M329.1 345.2c-46 0-83.3-37.3-83.3-83.3s37.3-83.3 83.3-83.3s83.3 37.3 83.3 83.3s-37.3 83.3-83.3 83.3M695.6 845c-46 0-83.3-37.3-83.3-83.3s37.3-83.3 83.3-83.3s83.3 37.3 83.3 83.3s-37.3 83.3-83.3 83.3"></svg:path>`,
})
export class AntDesignNodeIndexOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignNotificationFilledIcon],svg[ant-design-notification-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M880 112c-3.8 0-7.7.7-11.6 2.3L292 345.9H128c-8.8 0-16 7.4-16 16.6v299c0 9.2 7.2 16.6 16 16.6h101.6c-3.7 11.6-5.6 23.9-5.6 36.4c0 65.9 53.8 119.5 120 119.5c55.4 0 102.1-37.6 115.9-88.4l408.6 164.2c3.9 1.5 7.8 2.3 11.6 2.3c16.9 0 32-14.2 32-33.2V145.2C912 126.2 897 112 880 112M344 762.3c-26.5 0-48-21.4-48-47.8c0-11.2 3.9-21.9 11-30.4l84.9 34.1c-2 24.6-22.7 44.1-47.9 44.1"></svg:path>`,
})
export class AntDesignNotificationFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignNotificationOutlinedIcon],svg[ant-design-notification-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M880 112c-3.8 0-7.7.7-11.6 2.3L292 345.9H128c-8.8 0-16 7.4-16 16.6v299c0 9.2 7.2 16.6 16 16.6h101.7c-3.7 11.6-5.7 23.9-5.7 36.4c0 65.9 53.8 119.5 120 119.5c55.4 0 102.1-37.6 115.9-88.4l408.6 164.2c3.9 1.5 7.8 2.3 11.6 2.3c16.9 0 32-14.2 32-33.2V145.2C912 126.2 897 112 880 112M344 762.3c-26.5 0-48-21.4-48-47.8c0-11.2 3.9-21.9 11-30.4l84.9 34.1c-2 24.6-22.7 44.1-47.9 44.1m496 58.4L318.8 611.3l-12.9-5.2H184V417.9h121.9l12.9-5.2L840 203.3z"></svg:path>`,
})
export class AntDesignNotificationOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignNotificationTwotoneIcon],svg[ant-design-notification-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".15" d="M229.6 678.1c-3.7 11.6-5.6 23.9-5.6 36.4c0-12.5 2-24.8 5.7-36.4zm76.3-260.2H184v188.2h121.9l12.9 5.2L840 820.7V203.3L318.8 412.7z"></svg:path><svg:path fill="currentColor" d="M880 112c-3.8 0-7.7.7-11.6 2.3L292 345.9H128c-8.8 0-16 7.4-16 16.6v299c0 9.2 7.2 16.6 16 16.6h101.7c-3.7 11.6-5.7 23.9-5.7 36.4c0 65.9 53.8 119.5 120 119.5c55.4 0 102.1-37.6 115.9-88.4l408.6 164.2c3.9 1.5 7.8 2.3 11.6 2.3c16.9 0 32-14.2 32-33.2V145.2C912 126.2 897 112 880 112M344 762.3c-26.5 0-48-21.4-48-47.8c0-11.2 3.9-21.9 11-30.4l84.9 34.1c-2 24.6-22.7 44.1-47.9 44.1m496 58.4L318.8 611.3l-12.9-5.2H184V417.9h121.9l12.9-5.2L840 203.3z"></svg:path>`,
})
export class AntDesignNotificationTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignNumberOutlinedIcon],svg[ant-design-number-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M872 394c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H708V152c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v166H400V152c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v166H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h168v236H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h168v166c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V706h228v166c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V706h164c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H708V394zM628 630H400V394h228z"></svg:path>`,
})
export class AntDesignNumberOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignOneToOneOutlinedIcon],svg[ant-design-one-to-one-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M316 672h60c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8m196-50c22.1 0 40-17.9 40-39c0-23.1-17.9-41-40-41s-40 17.9-40 41c0 21.1 17.9 39 40 39m0-140c22.1 0 40-17.9 40-39c0-23.1-17.9-41-40-41s-40 17.9-40 41c0 21.1 17.9 39 40 39"></svg:path><svg:path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32m-40 728H184V184h656z"></svg:path><svg:path fill="currentColor" d="M648 672h60c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8"></svg:path>`,
})
export class AntDesignOneToOneOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignOpenAIFilledIcon],svg[ant-design-open-a-i-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M475.609 112c-74.042 0-139.727 42.382-172.929 104.575v237.284l92.265 56.484l3.386-235.699l188.997-127.45C555.12 124.695 516.577 112 475.608 112m202.902 62.248c-13.17 0-26.054 1.758-38.8 4.359L453.2 304.363l-1.37 96.146l186.584-125.253l231.22 137.284c3.08-13.888 4.863-28.051 4.863-42.327c0-108.044-87.93-195.965-195.986-195.965m-431.168 91.75C167.343 290.696 109 365.216 109 453.21c0 27.924 5.906 54.829 16.788 79.36l245.487 139.769l90.571-56.124l-214.503-131.376zm392.872 74.676l-72.702 48.848l203.984 128.062l25.795 235.41C867.422 723.115 916 653.971 916 573.095c0-27.555-5.855-54.129-16.572-78.53zM517.22 423.275l-66.362 44.56l-1.045 76.117l64.704 39.662l69.532-43.048l-1.837-76.477zm121.194 76.117l5.872 248.343l-201.282 119.164C477.72 895.635 521.631 912 567.837 912c79.224 0 147.798-46.522 178.621-114.986L719.402 550.22zm-52.852 105.295L372.428 736.676L169.56 621.15c-3.357 14.46-5.224 29.262-5.224 44.164c0 102.935 79.847 187.408 180.819 195.173l243.036-143.876z"></svg:path>`,
})
export class AntDesignOpenAIFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignOpenAIOutlinedIcon],svg[ant-design-open-a-i-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M482.878 128c-84.345 0-156.575 52.808-185.68 126.983c-60.887 8.128-115.29 43.622-146.595 97.837c-42.163 72.994-32.556 161.882 17.137 224.158c-23.38 56.748-19.853 121.597 11.424 175.782c42.18 73.024 124.095 109.152 202.937 97.235C419.585 898.621 477.51 928 540.121 928c84.346 0 156.576-52.808 185.68-126.983c60.888-8.128 115.291-43.622 146.596-97.837c42.163-72.994 32.556-161.882-17.137-224.158c23.38-56.748 19.853-121.597-11.424-175.782c-42.18-73.024-124.095-109.152-202.937-97.235C603.415 157.379 545.49 128 482.879 128m0 61.538c35.593 0 68.972 13.99 94.223 37.74c-1.928 1.031-3.925 1.845-5.832 2.946L434.594 309.13c-14.223 8.184-23.028 23.353-23.09 39.783l-.841 183.594l-65.722-38.341V327.399c0-76 61.895-137.86 137.937-137.86m197.706 75.902c44.186 3.142 86.154 27.435 109.917 68.57c17.794 30.797 22.38 66.692 14.43 100.42c-1.879-1.169-3.6-2.491-5.531-3.605l-136.734-78.907a46.23 46.23 0 0 0-46-.06l-159.463 91.106l.36-76.022l144.492-83.413c24.694-14.25 52.017-19.974 78.53-18.09M283.67 320.849c-.071 2.19-.3 4.343-.3 6.55v157.752a46.19 46.19 0 0 0 22.91 39.904l158.68 92.488l-66.021 37.68l-144.552-83.353c-65.852-38-88.47-122.526-50.448-188.341c17.783-30.78 46.556-52.689 79.731-62.68m340.393 79.927l144.552 83.354c65.852 38 88.47 122.526 50.448 188.341c-17.783 30.78-46.556 52.689-79.731 62.68c.071-2.19.3-4.343.3-6.55V570.849a46.19 46.19 0 0 0-22.91-39.904l-158.68-92.488zM511.801 464.84l54.537 31.79l-.3 63.222l-54.839 31.31l-54.537-31.85l.3-63.162zm100.536 58.654l65.722 38.341v166.767c0 76-61.895 137.86-137.937 137.86c-35.593 0-68.972-13.988-94.223-37.74c1.928-1.03 3.925-1.844 5.832-2.945l136.675-78.906c14.223-8.184 23.028-23.353 23.09-39.783zm-46.54 89.543l-.36 76.022l-144.492 83.413c-65.852 38-150.425 15.335-188.446-50.48c-17.794-30.798-22.38-66.693-14.43-100.421c1.879 1.169 3.6 2.491 5.531 3.605l136.735 78.907a46.23 46.23 0 0 0 45.999.06z"></svg:path>`,
})
export class AntDesignOpenAIOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignOrderedListOutlinedIcon],svg[ant-design-ordered-list-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M920 760H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0-568H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0 284H336c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8M216 712H100c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h72.4v20.5h-35.7c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h35.7V838H100c-2.2 0-4 1.8-4 4v34c0 2.2 1.8 4 4 4h116c2.2 0 4-1.8 4-4V716c0-2.2-1.8-4-4-4M100 188h38v120c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V152c0-4.4-3.6-8-8-8h-78c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4m116 240H100c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4h68.4l-70.3 77.7a8.3 8.3 0 0 0-2.1 5.4V592c0 2.2 1.8 4 4 4h116c2.2 0 4-1.8 4-4v-36c0-2.2-1.8-4-4-4h-68.4l70.3-77.7a8.3 8.3 0 0 0 2.1-5.4V432c0-2.2-1.8-4-4-4"></svg:path>`,
})
export class AntDesignOrderedListOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPaperClipOutlinedIcon],svg[ant-design-paper-clip-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0 0 12.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2c0 45.8-17.8 88.8-50.2 121.2l-266 265.9l-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0c-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3c6.7 6.7 10.3 15.5 10.3 24.9c0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0 0 12.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364L224.8 602.1A172.22 172.22 0 0 0 174 724.8c0 46.3 18.1 89.8 50.8 122.5c33.9 33.8 78.3 50.7 122.7 50.7s88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9"></svg:path>`,
})
export class AntDesignPaperClipOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPartitionOutlinedIcon],svg[ant-design-partition-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M640.6 429.8h257.1c7.9 0 14.3-6.4 14.3-14.3V158.3c0-7.9-6.4-14.3-14.3-14.3H640.6c-7.9 0-14.3 6.4-14.3 14.3v92.9H490.6c-3.9 0-7.1 3.2-7.1 7.1v221.5h-85.7v-96.5c0-7.9-6.4-14.3-14.3-14.3H126.3c-7.9 0-14.3 6.4-14.3 14.3v257.2c0 7.9 6.4 14.3 14.3 14.3h257.1c7.9 0 14.3-6.4 14.3-14.3V544h85.7v221.5c0 3.9 3.2 7.1 7.1 7.1h135.7v92.9c0 7.9 6.4 14.3 14.3 14.3h257.1c7.9 0 14.3-6.4 14.3-14.3v-257c0-7.9-6.4-14.3-14.3-14.3h-257c-7.9 0-14.3 6.4-14.3 14.3v100h-78.6v-393h78.6v100c0 7.9 6.4 14.3 14.3 14.3m53.5-217.9h150V362h-150zM329.9 587h-150V437h150zm364.2 75.1h150v150.1h-150z"></svg:path>`,
})
export class AntDesignPartitionOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPauseCircleFilledIcon],svg[ant-design-pause-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m-80 600c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8zm224 0c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8z"></svg:path>`,
})
export class AntDesignPauseCircleFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPauseCircleOutlinedIcon],svg[ant-design-pause-circle-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372m-88-532h-48c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8m224 0h-48c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8"></svg:path>`,
})
export class AntDesignPauseCircleOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPauseCircleTwotoneIcon],svg[ant-design-pause-circle-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372s372-166.6 372-372s-166.6-372-372-372m-80 524c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8zm224 0c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V360c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8z"></svg:path><svg:path fill="currentColor" d="M424 352h-48c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8m224 0h-48c-4.4 0-8 3.6-8 8v304c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V360c0-4.4-3.6-8-8-8"></svg:path>`,
})
export class AntDesignPauseCircleTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPauseOutlinedIcon],svg[ant-design-pause-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M304 176h80v672h-80zm408 0h-64c-4.4 0-8 3.6-8 8v656c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V184c0-4.4-3.6-8-8-8"></svg:path>`,
})
export class AntDesignPauseOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPayCircleFilledIcon],svg[ant-design-pay-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m166.6 246.8L567.5 515.6h62c4.4 0 8 3.6 8 8v29.9c0 4.4-3.6 8-8 8h-82V603h82c4.4 0 8 3.6 8 8v29.9c0 4.4-3.6 8-8 8h-82V717c0 4.4-3.6 8-8 8h-54.3c-4.4 0-8-3.6-8-8v-68.1h-81.7c-4.4 0-8-3.6-8-8V611c0-4.4 3.6-8 8-8h81.7v-41.5h-81.7c-4.4 0-8-3.6-8-8v-29.9c0-4.4 3.6-8 8-8h61.4L345.4 310.8a8.07 8.07 0 0 1 7-11.9h60.7c3 0 5.8 1.7 7.1 4.4l90.6 180h3.4l90.6-180a8 8 0 0 1 7.1-4.4h59.5c4.4 0 8 3.6 8 8c.2 1.4-.2 2.7-.8 3.9"></svg:path>`,
})
export class AntDesignPayCircleFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPayCircleOutlinedIcon],svg[ant-design-pay-circle-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372m159.6-585h-59.5c-3 0-5.8 1.7-7.1 4.4l-90.6 180H511l-90.6-180a8 8 0 0 0-7.1-4.4h-60.7c-1.3 0-2.6.3-3.8 1c-3.9 2.1-5.3 7-3.2 10.9L457 515.7h-61.4c-4.4 0-8 3.6-8 8v29.9c0 4.4 3.6 8 8 8h81.7V603h-81.7c-4.4 0-8 3.6-8 8v29.9c0 4.4 3.6 8 8 8h81.7V717c0 4.4 3.6 8 8 8h54.3c4.4 0 8-3.6 8-8v-68.1h82c4.4 0 8-3.6 8-8V611c0-4.4-3.6-8-8-8h-82v-41.5h82c4.4 0 8-3.6 8-8v-29.9c0-4.4-3.6-8-8-8h-62l111.1-204.8c.6-1.2 1-2.5 1-3.8c-.1-4.4-3.7-8-8.1-8"></svg:path>`,
})
export class AntDesignPayCircleOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPercentageOutlinedIcon],svg[ant-design-percentage-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m855.7 210.8l-42.4-42.4a8.03 8.03 0 0 0-11.3 0L168.3 801.9a8.03 8.03 0 0 0 0 11.3l42.4 42.4c3.1 3.1 8.2 3.1 11.3 0L855.6 222c3.2-3 3.2-8.1.1-11.2M304 448c79.4 0 144-64.6 144-144s-64.6-144-144-144s-144 64.6-144 144s64.6 144 144 144m0-216c39.7 0 72 32.3 72 72s-32.3 72-72 72s-72-32.3-72-72s32.3-72 72-72m416 344c-79.4 0-144 64.6-144 144s64.6 144 144 144s144-64.6 144-144s-64.6-144-144-144m0 216c-39.7 0-72-32.3-72-72s32.3-72 72-72s72 32.3 72 72s-32.3 72-72 72"></svg:path>`,
})
export class AntDesignPercentageOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPhoneFilledIcon],svg[ant-design-phone-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M885.6 230.2L779.1 123.8a80.83 80.83 0 0 0-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L549.8 238.4a80.83 80.83 0 0 0-23.8 57.3c0 21.7 8.5 42.1 23.8 57.4l83.8 83.8A393.8 393.8 0 0 1 553.1 553A395.3 395.3 0 0 1 437 633.8L353.2 550a80.83 80.83 0 0 0-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L123.8 664.5a80.9 80.9 0 0 0-23.8 57.4c0 21.7 8.5 42.1 23.8 57.4l106.3 106.3c24.4 24.5 58.1 38.4 92.7 38.4c7.3 0 14.3-.6 21.2-1.8c134.8-22.2 268.5-93.9 376.4-201.7C828.2 612.8 899.8 479.2 922.3 344c6.8-41.3-6.9-83.8-36.7-113.8"></svg:path>`,
})
export class AntDesignPhoneFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPhoneOutlinedIcon],svg[ant-design-phone-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9c0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.5 405.5 0 0 1-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 0 0-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9c0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9c6.5 0 12.8-.5 19.2-1.6c132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4m-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9L295.7 611l119.8 120l.9.9l21.6-8a481.29 481.29 0 0 0 285.7-285.8l8-21.6l-120.8-120.7l110.8-110.9l104.5 104.5c10.8 10.8 15.8 26 13.3 40.8"></svg:path>`,
})
export class AntDesignPhoneOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPhoneTwotoneIcon],svg[ant-design-phone-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".15" d="M721.7 184.9L610.9 295.8l120.8 120.7l-8 21.6A481.29 481.29 0 0 1 438 723.9l-21.6 8l-.9-.9l-119.8-120l-110.8 110.9l104.5 104.5c10.8 10.7 26 15.7 40.8 13.2c117.9-19.5 235.4-82.9 330.9-178.4s158.9-213.1 178.4-331c2.5-14.8-2.5-30-13.3-40.8z"></svg:path><svg:path fill="currentColor" d="M877.1 238.7L770.6 132.3c-13-13-30.4-20.3-48.8-20.3s-35.8 7.2-48.8 20.3L558.3 246.8c-13 13-20.3 30.5-20.3 48.9c0 18.5 7.2 35.8 20.3 48.9l89.6 89.7a405.5 405.5 0 0 1-86.4 127.3c-36.7 36.9-79.6 66-127.2 86.6l-89.6-89.7c-13-13-30.4-20.3-48.8-20.3a68.2 68.2 0 0 0-48.8 20.3L132.3 673c-13 13-20.3 30.5-20.3 48.9c0 18.5 7.2 35.8 20.3 48.9l106.4 106.4c22.2 22.2 52.8 34.9 84.2 34.9c6.5 0 12.8-.5 19.2-1.6c132.4-21.8 263.8-92.3 369.9-198.3C818 606 888.4 474.6 910.4 342.1c6.3-37.6-6.3-76.3-33.3-103.4m-37.6 91.5c-19.5 117.9-82.9 235.5-178.4 331s-213 158.9-330.9 178.4c-14.8 2.5-30-2.5-40.8-13.2L184.9 721.9L295.7 611l119.8 120l.9.9l21.6-8a481.29 481.29 0 0 0 285.7-285.8l8-21.6l-120.8-120.7l110.8-110.9l104.5 104.5c10.8 10.8 15.8 26 13.3 40.8"></svg:path>`,
})
export class AntDesignPhoneTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPicCenterOutlinedIcon],svg[ant-design-pic-center-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M952 792H72c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h880c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0-632H72c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h880c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8M848 660c8.8 0 16-7.2 16-16V380c0-8.8-7.2-16-16-16H176c-8.8 0-16 7.2-16 16v264c0 8.8 7.2 16 16 16zM232 436h560v152H232z"></svg:path>`,
})
export class AntDesignPicCenterOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPicLeftOutlinedIcon],svg[ant-design-pic-left-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M952 792H72c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h880c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0-632H72c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h880c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8M608 660c8.8 0 16-7.2 16-16V380c0-8.8-7.2-16-16-16H96c-8.8 0-16 7.2-16 16v264c0 8.8 7.2 16 16 16zM152 436h400v152H152zm552 210c0 4.4 3.6 8 8 8h224c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H712c-4.4 0-8 3.6-8 8zm8-204h224c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H712c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8"></svg:path>`,
})
export class AntDesignPicLeftOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPicRightOutlinedIcon],svg[ant-design-pic-right-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M952 792H72c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h880c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0-632H72c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h880c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m-24 500c8.8 0 16-7.2 16-16V380c0-8.8-7.2-16-16-16H416c-8.8 0-16 7.2-16 16v264c0 8.8 7.2 16 16 16zM472 436h400v152H472zM80 646c0 4.4 3.6 8 8 8h224c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H88c-4.4 0-8 3.6-8 8zm8-204h224c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H88c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8"></svg:path>`,
})
export class AntDesignPicRightOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPictureFilledIcon],svg[ant-design-picture-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32M338 304c35.3 0 64 28.7 64 64s-28.7 64-64 64s-64-28.7-64-64s28.7-64 64-64m513.9 437.1a8.1 8.1 0 0 1-5.2 1.9H177.2c-4.4 0-8-3.6-8-8c0-1.9.7-3.7 1.9-5.2l170.3-202c2.8-3.4 7.9-3.8 11.3-1c.3.3.7.6 1 1l99.4 118l158.1-187.5c2.8-3.4 7.9-3.8 11.3-1c.3.3.7.6 1 1l229.6 271.6c2.6 3.3 2.2 8.4-1.2 11.2"></svg:path>`,
})
export class AntDesignPictureFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPictureOutlinedIcon],svg[ant-design-picture-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32m-40 632H136v-39.9l138.5-164.3l150.1 178L658.1 489L888 761.6zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752zM304 456a88 88 0 1 0 0-176a88 88 0 0 0 0 176m0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28s-28-12.5-28-28s12.5-28 28-28"></svg:path>`,
})
export class AntDesignPictureOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPictureTwotoneIcon],svg[ant-design-picture-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32m-40 632H136v-39.9l138.5-164.3l150.1 178L658.1 489L888 761.6zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752z"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="m424.6 765.8l-150.1-178L136 752.1V792h752v-30.4L658.1 489z"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="m136 652.7l132.4-157c3.2-3.8 9-3.8 12.2 0l144 170.7L652 396.8c3.2-3.8 9-3.8 12.2 0L888 662.2V232H136zM304 280a88 88 0 1 1 0 176a88 88 0 0 1 0-176"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="M276 368a28 28 0 1 0 56 0a28 28 0 1 0-56 0"></svg:path><svg:path fill="currentColor" d="M304 456a88 88 0 1 0 0-176a88 88 0 0 0 0 176m0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28s-28-12.5-28-28s12.5-28 28-28"></svg:path>`,
})
export class AntDesignPictureTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPieChartFilledIcon],svg[ant-design-pie-chart-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M863.1 518.5H505.5V160.9c0-4.4-3.6-8-8-8h-26a398.57 398.57 0 0 0-282.5 117a397.5 397.5 0 0 0-85.6 127C82.6 446.2 72 498.5 72 552.5S82.6 658.7 103.4 708c20.1 47.5 48.9 90.3 85.6 127s79.4 65.5 127 85.6a396.6 396.6 0 0 0 155.6 31.5a398.57 398.57 0 0 0 282.5-117c36.7-36.7 65.5-79.4 85.6-127a396.6 396.6 0 0 0 31.5-155.6v-26c-.1-4.4-3.7-8-8.1-8M951 463l-2.6-28.2c-8.5-92-49.3-178.8-115.1-244.3A398.5 398.5 0 0 0 588.4 75.6L560.1 73c-4.7-.4-8.7 3.2-8.7 7.9v383.7c0 4.4 3.6 8 8 8l383.6-1c4.7-.1 8.4-4 8-8.6"></svg:path>`,
})
export class AntDesignPieChartFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPieChartOutlinedIcon],svg[ant-design-pie-chart-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M864 518H506V160c0-4.4-3.6-8-8-8h-26a398.46 398.46 0 0 0-282.8 117.1a398.2 398.2 0 0 0-85.7 127.1A397.6 397.6 0 0 0 72 552a398.46 398.46 0 0 0 117.1 282.8c36.7 36.7 79.5 65.6 127.1 85.7A397.6 397.6 0 0 0 472 952a398.46 398.46 0 0 0 282.8-117.1c36.7-36.7 65.6-79.5 85.7-127.1A397.6 397.6 0 0 0 872 552v-26c0-4.4-3.6-8-8-8M705.7 787.8A331.6 331.6 0 0 1 470.4 884c-88.1-.4-170.9-34.9-233.2-97.2C174.5 724.1 140 640.7 140 552s34.5-172.1 97.2-234.8c54.6-54.6 124.9-87.9 200.8-95.5V586h364.3c-7.7 76.3-41.3 147-96.6 201.8M952 462.4l-2.6-28.2c-8.5-92.1-49.4-179-115.2-244.6A399.4 399.4 0 0 0 589 74.6L560.7 72c-4.7-.4-8.7 3.2-8.7 7.9V464c0 4.4 3.6 8 8 8l384-1c4.7 0 8.4-4 8-8.6m-332.2-58.2V147.6a332.24 332.24 0 0 1 166.4 89.8c45.7 45.6 77 103.6 90 166.1z"></svg:path>`,
})
export class AntDesignPieChartOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPieChartTwotoneIcon],svg[ant-design-pie-chart-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".15" d="M316.2 920.5c-47.6-20.1-90.4-49-127.1-85.7a398.2 398.2 0 0 1-85.7-127.1A397.1 397.1 0 0 1 72 552.2v.2a398.57 398.57 0 0 0 117 282.5c36.7 36.7 79.4 65.5 127 85.6A396.6 396.6 0 0 0 471.6 952c27 0 53.6-2.7 79.7-7.9c-25.9 5.2-52.4 7.8-79.3 7.8c-54 .1-106.4-10.5-155.8-31.4M560 472c-4.4 0-8-3.6-8-8V79.9q0-1.95.9-3.6c-.9 1.3-1.5 2.9-1.5 4.6v383.7c0 4.4 3.6 8 8 8l383.6-1c1.6 0 3.1-.5 4.4-1.3c-1 .5-2.2.7-3.4.7z"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="M619.8 147.6v256.6l256.4-.7c-13-62.5-44.3-120.5-90-166.1a332.24 332.24 0 0 0-166.4-89.8"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="M438 221.7c-75.9 7.6-146.2 40.9-200.8 95.5C174.5 379.9 140 463.3 140 552s34.5 172.1 97.2 234.8c62.3 62.3 145.1 96.8 233.2 97.2c88.2.4 172.7-34.1 235.3-96.2C761 733 794.6 662.3 802.3 586H438z"></svg:path><svg:path fill="currentColor" d="M864 518H506V160c0-4.4-3.6-8-8-8h-26a398.46 398.46 0 0 0-282.8 117.1a398.2 398.2 0 0 0-85.7 127.1A397.6 397.6 0 0 0 72 552v.2c0 53.9 10.6 106.2 31.4 155.5c20.1 47.6 49 90.4 85.7 127.1s79.5 65.6 127.1 85.7A397.6 397.6 0 0 0 472 952c26.9 0 53.4-2.6 79.3-7.8c26.1-5.3 51.7-13.1 76.4-23.6c47.6-20.1 90.4-49 127.1-85.7s65.6-79.5 85.7-127.1A397.6 397.6 0 0 0 872 552v-26c0-4.4-3.6-8-8-8M705.7 787.8A331.6 331.6 0 0 1 470.4 884c-88.1-.4-170.9-34.9-233.2-97.2C174.5 724.1 140 640.7 140 552s34.5-172.1 97.2-234.8c54.6-54.6 124.9-87.9 200.8-95.5V586h364.3c-7.7 76.3-41.3 147-96.6 201.8"></svg:path><svg:path fill="currentColor" d="m952 462.4l-2.6-28.2c-8.5-92.1-49.4-179-115.2-244.6A399.4 399.4 0 0 0 589 74.6L560.7 72c-3.4-.3-6.4 1.5-7.8 4.3a8.7 8.7 0 0 0-.9 3.6V464c0 4.4 3.6 8 8 8l384-1c1.2 0 2.3-.3 3.4-.7a8.1 8.1 0 0 0 4.6-7.9m-332.2-58.2V147.6a332.24 332.24 0 0 1 166.4 89.8c45.7 45.6 77 103.6 90 166.1z"></svg:path>`,
})
export class AntDesignPieChartTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPinterestFilledIcon],svg[ant-design-pinterest-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M512 64C264.974 64 64 264.974 64 512c0 192.526 122.082 357.042 292.882 420.282c-4.919-43.857-4.147-115.682 3.97-150.457c7.602-32.666 49.11-208.167 49.11-208.167S397.43 548.563 397.43 511.5c0-58.244 33.744-101.7 75.767-101.7c35.742 0 52.977 26.834 52.977 58.984c0 35.951-22.857 89.652-34.696 139.422c-9.873 41.702 20.907 75.703 62.012 75.703c74.431 0 131.644-78.49 131.644-191.77c0-100.266-72.03-170.38-174.906-170.38c-119.144 0-189.081 89.377-189.081 181.752c0 35.983 13.852 74.575 31.167 95.579c3.414 4.155 3.914 7.78 2.9 12c-3.174 13.223-10.228 41.669-11.63 47.499c-1.82 7.683-6.073 9.278-13.998 5.589c-52.314-24.354-85.012-100.813-85.012-162.246c0-132.093 95.965-253.428 276.718-253.428c145.286 0 258.18 103.504 258.18 241.88c0 144.334-91.02 260.482-217.316 260.482c-42.441 0-82.323-22.05-95.965-48.096c0 0-21.003 79.956-26.11 99.558c-8.813 33.9-46.539 104.13-65.477 136.03A446.2 446.2 0 0 0 512 960c247.035 0 448-200.965 448-448c0-247.026-200.965-448-448-448"></svg:path>`,
})
export class AntDesignPinterestFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPinterestOutlinedIcon],svg[ant-design-pinterest-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M512 64C264.807 64 64 264.807 64 512s200.807 448 448 448s448-200.807 448-448S759.193 64 512 64m0 38.957c226.14 0 409.043 182.904 409.043 409.043S738.139 921.043 512 921.043c-41.365 0-81.269-6.19-118.886-17.576c16.756-28.014 38.39-68.058 46.984-101.12c5.106-19.601 26.098-99.559 26.098-99.559c13.642 26.045 53.503 48.087 95.945 48.087c126.295 0 217.343-116.149 217.343-260.484c0-138.375-112.916-241.88-258.201-241.88c-180.753 0-276.69 121.314-276.69 253.407c0 61.433 32.673 137.902 84.989 162.256c7.924 3.688 12.18 2.09 14-5.592c1.4-5.831 8.468-34.255 11.64-47.479c1.016-4.22.524-7.866-2.89-12.021c-17.316-21.004-31.196-59.583-31.196-95.566c0-92.374 69.932-181.771 189.076-181.771c102.875 0 174.924 70.13 174.924 170.396c0 113.281-57.2 191.777-131.63 191.777c-41.106 0-71.885-34.005-62.011-75.706c11.838-49.77 34.695-103.478 34.695-139.43c0-32.149-17.253-58.967-52.994-58.967c-42.024 0-75.783 43.447-75.783 101.69c0 37.063 12.554 62.163 12.554 62.163s-41.511 175.51-49.114 208.174c-7.619 32.642-5.578 76.605-2.435 109.337C208.551 830.518 102.957 683.785 102.957 512c0-226.14 182.903-409.043 409.043-409.043"></svg:path>`,
})
export class AntDesignPinterestOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPlayCircleFilledIcon],svg[ant-design-play-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m144.1 454.9L437.7 677.8a8.02 8.02 0 0 1-12.7-6.5V353.7a8 8 0 0 1 12.7-6.5L656.1 506a7.9 7.9 0 0 1 0 12.9"></svg:path>`,
})
export class AntDesignPlayCircleFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPlayCircleOutlinedIcon],svg[ant-design-play-circle-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372"></svg:path><svg:path fill="currentColor" d="m719.4 499.1l-296.1-215A15.9 15.9 0 0 0 398 297v430c0 13.1 14.8 20.5 25.3 12.9l296.1-215a15.9 15.9 0 0 0 0-25.8m-257.6 134V390.9L628.5 512z"></svg:path>`,
})
export class AntDesignPlayCircleOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPlayCircleTwotoneIcon],svg[ant-design-play-circle-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372s372-166.6 372-372s-166.6-372-372-372m164.1 378.2L457.7 677.1a8.02 8.02 0 0 1-12.7-6.5V353a8 8 0 0 1 12.7-6.5l218.4 158.8a7.9 7.9 0 0 1 0 12.9"></svg:path><svg:path fill="currentColor" d="M676.1 505.3L457.7 346.5A8 8 0 0 0 445 353v317.6a8.02 8.02 0 0 0 12.7 6.5l218.4-158.9a7.9 7.9 0 0 0 0-12.9"></svg:path>`,
})
export class AntDesignPlayCircleTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPlaySquareFilledIcon],svg[ant-design-play-square-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32M641.7 520.8L442.3 677.6c-7.4 5.8-18.3.6-18.3-8.8V355.3c0-9.4 10.9-14.7 18.3-8.8l199.4 156.7a11.2 11.2 0 0 1 0 17.6"></svg:path>`,
})
export class AntDesignPlaySquareFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPlaySquareOutlinedIcon],svg[ant-design-play-square-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m442.3 677.6l199.4-156.7a11.3 11.3 0 0 0 0-17.7L442.3 346.4c-7.4-5.8-18.3-.6-18.3 8.8v313.5c0 9.4 10.9 14.7 18.3 8.9"></svg:path><svg:path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32m-40 728H184V184h656z"></svg:path>`,
})
export class AntDesignPlaySquareOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPlaySquareTwotoneIcon],svg[ant-design-play-square-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32m-40 728H184V184h656z"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="M184 840h656V184H184zm240-484.7c0-9.4 10.9-14.7 18.3-8.8l199.4 156.7a11.2 11.2 0 0 1 0 17.6L442.3 677.6c-7.4 5.8-18.3.6-18.3-8.8z"></svg:path><svg:path fill="currentColor" d="m442.3 677.6l199.4-156.8a11.2 11.2 0 0 0 0-17.6L442.3 346.5c-7.4-5.9-18.3-.6-18.3 8.8v313.5c0 9.4 10.9 14.6 18.3 8.8"></svg:path>`,
})
export class AntDesignPlaySquareTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPlusCircleFilledIcon],svg[ant-design-plus-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m192 472c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8z"></svg:path>`,
})
export class AntDesignPlusCircleFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPlusCircleOutlinedIcon],svg[ant-design-plus-circle-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8"></svg:path><svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372"></svg:path>`,
})
export class AntDesignPlusCircleOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPlusCircleTwotoneIcon],svg[ant-design-plus-circle-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372s372-166.6 372-372s-166.6-372-372-372m192 396c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8z"></svg:path><svg:path fill="currentColor" d="M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8"></svg:path>`,
})
export class AntDesignPlusCircleTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPlusOutlinedIcon],svg[ant-design-plus-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8"></svg:path><svg:path fill="currentColor" d="M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8Z"></svg:path>`,
})
export class AntDesignPlusOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPlusSquareFilledIcon],svg[ant-design-plus-square-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32M704 536c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8z"></svg:path>`,
})
export class AntDesignPlusSquareFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPlusSquareOutlinedIcon],svg[ant-design-plus-square-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8"></svg:path><svg:path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32m-40 728H184V184h656z"></svg:path>`,
})
export class AntDesignPlusSquareOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPlusSquareTwotoneIcon],svg[ant-design-plus-square-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32m-40 728H184V184h656z"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="M184 840h656V184H184zm136-352c0-4.4 3.6-8 8-8h152V328c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v152h152c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H544v152c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V544H328c-4.4 0-8-3.6-8-8z"></svg:path><svg:path fill="currentColor" d="M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8"></svg:path>`,
})
export class AntDesignPlusSquareTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPoundCircleFilledIcon],svg[ant-design-pound-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m146 658c0 4.4-3.6 8-8 8H376.2c-4.4 0-8-3.6-8-8v-38.5c0-3.7 2.5-6.9 6.1-7.8c44-10.9 72.8-49 72.8-94.2c0-14.7-2.5-29.4-5.9-44.2H374c-4.4 0-8-3.6-8-8v-30c0-4.4 3.6-8 8-8h53.7c-7.8-25.1-14.6-50.7-14.6-77.1c0-75.8 58.6-120.3 151.5-120.3c26.5 0 51.4 5.5 70.3 12.7c3.1 1.2 5.2 4.2 5.2 7.5v39.5a8 8 0 0 1-10.6 7.6c-17.9-6.4-39-10.5-60.4-10.5c-53.3 0-87.3 26.6-87.3 70.2c0 24.7 6.2 47.9 13.4 70.5h112c4.4 0 8 3.6 8 8v30c0 4.4-3.6 8-8 8h-98.6c3.1 13.2 5.3 26.9 5.3 41c0 40.7-16.5 73.9-43.9 91.1v4.7h180c4.4 0 8 3.6 8 8z"></svg:path>`,
})
export class AntDesignPoundCircleFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPoundCircleOutlinedIcon],svg[ant-design-pound-circle-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372m138-209.8H469.8v-4.7c27.4-17.2 43.9-50.4 43.9-91.1c0-14.1-2.2-27.9-5.3-41H607c4.4 0 8-3.6 8-8v-30c0-4.4-3.6-8-8-8H495c-7.2-22.6-13.4-45.7-13.4-70.5c0-43.5 34-70.2 87.3-70.2c21.5 0 42.5 4.1 60.4 10.5c5.2 1.9 10.6-2 10.6-7.6v-39.5c0-3.3-2.1-6.3-5.2-7.5c-18.8-7.2-43.8-12.7-70.3-12.7c-92.9 0-151.5 44.5-151.5 120.3c0 26.3 6.9 52 14.6 77.1H374c-4.4 0-8 3.6-8 8v30c0 4.4 3.6 8 8 8h67.1c3.4 14.7 5.9 29.4 5.9 44.2c0 45.2-28.8 83.3-72.8 94.2c-3.6.9-6.1 4.1-6.1 7.8V722c0 4.4 3.6 8 8 8H650c4.4 0 8-3.6 8-8v-39.8c0-4.4-3.6-8-8-8"></svg:path>`,
})
export class AntDesignPoundCircleOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPoundCircleTwotoneIcon],svg[ant-design-pound-circle-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372s372-166.6 372-372s-166.6-372-372-372m146 582.1c0 4.4-3.6 8-8 8H376.2c-4.4 0-8-3.6-8-8v-38.5c0-3.7 2.5-6.9 6.1-7.8c44-10.9 72.8-49 72.8-94.2c0-14.7-2.5-29.4-5.9-44.2H374c-4.4 0-8-3.6-8-8v-30c0-4.4 3.6-8 8-8h53.7c-7.8-25.1-14.6-50.7-14.6-77.1c0-75.8 58.6-120.3 151.5-120.3c26.5 0 51.4 5.5 70.3 12.7c3.1 1.2 5.2 4.2 5.2 7.5v39.5a8 8 0 0 1-10.6 7.6c-17.9-6.4-39-10.5-60.4-10.5c-53.3 0-87.3 26.6-87.3 70.2c0 24.7 6.2 47.9 13.4 70.5h112c4.4 0 8 3.6 8 8v30c0 4.4-3.6 8-8 8h-98.6c3.1 13.2 5.3 26.9 5.3 41c0 40.7-16.5 73.9-43.9 91.1v4.7h180c4.4 0 8 3.6 8 8z"></svg:path><svg:path fill="currentColor" d="M650 674.3H470v-4.7c27.4-17.2 43.9-50.4 43.9-91.1c0-14.1-2.2-27.8-5.3-41h98.6c4.4 0 8-3.6 8-8v-30c0-4.4-3.6-8-8-8h-112c-7.2-22.6-13.4-45.8-13.4-70.5c0-43.6 34-70.2 87.3-70.2c21.4 0 42.5 4.1 60.4 10.5a8 8 0 0 0 10.6-7.6v-39.5c0-3.3-2.1-6.3-5.2-7.5c-18.9-7.2-43.8-12.7-70.3-12.7c-92.9 0-151.5 44.5-151.5 120.3c0 26.4 6.8 52 14.6 77.1H374c-4.4 0-8 3.6-8 8v30c0 4.4 3.6 8 8 8h67.2c3.4 14.8 5.9 29.5 5.9 44.2c0 45.2-28.8 83.3-72.8 94.2c-3.6.9-6.1 4.1-6.1 7.8v38.5c0 4.4 3.6 8 8 8H650c4.4 0 8-3.6 8-8v-39.8c0-4.4-3.6-8-8-8"></svg:path>`,
})
export class AntDesignPoundCircleTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPoundOutlinedIcon],svg[ant-design-pound-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372m138-209.8H469.8v-4.7c27.4-17.2 43.9-50.4 43.9-91.1c0-14.1-2.2-27.9-5.3-41H607c4.4 0 8-3.6 8-8v-30c0-4.4-3.6-8-8-8H495c-7.2-22.6-13.4-45.7-13.4-70.5c0-43.5 34-70.2 87.3-70.2c21.5 0 42.5 4.1 60.4 10.5c5.2 1.9 10.6-2 10.6-7.6v-39.5c0-3.3-2.1-6.3-5.2-7.5c-18.8-7.2-43.8-12.7-70.3-12.7c-92.9 0-151.5 44.5-151.5 120.3c0 26.3 6.9 52 14.6 77.1H374c-4.4 0-8 3.6-8 8v30c0 4.4 3.6 8 8 8h67.1c3.4 14.7 5.9 29.4 5.9 44.2c0 45.2-28.8 83.3-72.8 94.2c-3.6.9-6.1 4.1-6.1 7.8V722c0 4.4 3.6 8 8 8H650c4.4 0 8-3.6 8-8v-39.8c0-4.4-3.6-8-8-8"></svg:path>`,
})
export class AntDesignPoundOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPoweroffOutlinedIcon],svg[ant-design-poweroff-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M705.6 124.9a8 8 0 0 0-11.6 7.2v64.2c0 5.5 2.9 10.6 7.5 13.6a352.2 352.2 0 0 1 62.2 49.8c32.7 32.8 58.4 70.9 76.3 113.3a355 355 0 0 1 27.9 138.7c0 48.1-9.4 94.8-27.9 138.7a355.9 355.9 0 0 1-76.3 113.3a353.1 353.1 0 0 1-113.2 76.4c-43.8 18.6-90.5 28-138.5 28s-94.7-9.4-138.5-28a353.1 353.1 0 0 1-113.2-76.4A355.9 355.9 0 0 1 184 650.4a355 355 0 0 1-27.9-138.7c0-48.1 9.4-94.8 27.9-138.7c17.9-42.4 43.6-80.5 76.3-113.3c19-19 39.8-35.6 62.2-49.8c4.7-2.9 7.5-8.1 7.5-13.6V132c0-6-6.3-9.8-11.6-7.2C178.5 195.2 82 339.3 80 506.3C77.2 745.1 272.5 943.5 511.2 944c239 .5 432.8-193.3 432.8-432.4c0-169.2-97-315.7-238.4-386.7M480 560h64c4.4 0 8-3.6 8-8V88c0-4.4-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8"></svg:path>`,
})
export class AntDesignPoweroffOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPrinterFilledIcon],svg[ant-design-printer-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M732 120c0-4.4-3.6-8-8-8H300c-4.4 0-8 3.6-8 8v148h440zm120 212H172c-44.2 0-80 35.8-80 80v328c0 17.7 14.3 32 32 32h168v132c0 4.4 3.6 8 8 8h424c4.4 0 8-3.6 8-8V772h168c17.7 0 32-14.3 32-32V412c0-44.2-35.8-80-80-80M664 844H360V568h304zm164-360c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8v-40c0-4.4 3.6-8 8-8h40c4.4 0 8 3.6 8 8z"></svg:path>`,
})
export class AntDesignPrinterFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPrinterOutlinedIcon],svg[ant-design-printer-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M820 436h-40c-4.4 0-8 3.6-8 8v40c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-40c0-4.4-3.6-8-8-8m32-104H732V120c0-4.4-3.6-8-8-8H300c-4.4 0-8 3.6-8 8v212H172c-44.2 0-80 35.8-80 80v328c0 17.7 14.3 32 32 32h168v132c0 4.4 3.6 8 8 8h424c4.4 0 8-3.6 8-8V772h168c17.7 0 32-14.3 32-32V412c0-44.2-35.8-80-80-80M360 180h304v152H360zm304 664H360V568h304zm200-140H732V500H292v204H160V412c0-6.6 5.4-12 12-12h680c6.6 0 12 5.4 12 12z"></svg:path>`,
})
export class AntDesignPrinterOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPrinterTwotoneIcon],svg[ant-design-printer-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".15" d="M360 180h304v152H360zm492 220H172c-6.6 0-12 5.4-12 12v292h132V500h440v204h132V412c0-6.6-5.4-12-12-12m-24 84c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8v-40c0-4.4 3.6-8 8-8h40c4.4 0 8 3.6 8 8z"></svg:path><svg:path fill="currentColor" d="M852 332H732V120c0-4.4-3.6-8-8-8H300c-4.4 0-8 3.6-8 8v212H172c-44.2 0-80 35.8-80 80v328c0 17.7 14.3 32 32 32h168v132c0 4.4 3.6 8 8 8h424c4.4 0 8-3.6 8-8V772h168c17.7 0 32-14.3 32-32V412c0-44.2-35.8-80-80-80M360 180h304v152H360zm304 664H360V568h304zm200-140H732V500H292v204H160V412c0-6.6 5.4-12 12-12h680c6.6 0 12 5.4 12 12z"></svg:path><svg:path fill="currentColor" d="M820 436h-40c-4.4 0-8 3.6-8 8v40c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-40c0-4.4-3.6-8-8-8"></svg:path>`,
})
export class AntDesignPrinterTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignProductFilledIcon],svg[ant-design-product-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M160 144h304c8.837 0 16 7.163 16 16v304c0 8.837-7.163 16-16 16H160c-8.837 0-16-7.163-16-16V160c0-8.837 7.163-16 16-16m564.314-25.333l181.019 181.02c6.248 6.248 6.248 16.378 0 22.627l-181.02 181.019c-6.248 6.248-16.378 6.248-22.627 0l-181.019-181.02c-6.248-6.248-6.248-16.378 0-22.627l181.02-181.019c6.248-6.248 16.378-6.248 22.627 0M160 544h304c8.837 0 16 7.163 16 16v304c0 8.837-7.163 16-16 16H160c-8.837 0-16-7.163-16-16V560c0-8.837 7.163-16 16-16m400 0h304c8.837 0 16 7.163 16 16v304c0 8.837-7.163 16-16 16H560c-8.837 0-16-7.163-16-16V560c0-8.837 7.163-16 16-16"></svg:path>`,
})
export class AntDesignProductFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignProductOutlinedIcon],svg[ant-design-product-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M464 144c8.837 0 16 7.163 16 16v304c0 8.836-7.163 16-16 16H160c-8.837 0-16-7.164-16-16V160c0-8.837 7.163-16 16-16zm-52 68H212v200h200zm493.333 87.686c6.248 6.248 6.248 16.379 0 22.627l-181.02 181.02c-6.248 6.248-16.378 6.248-22.627 0l-181.019-181.02c-6.248-6.248-6.248-16.379 0-22.627l181.02-181.02c6.248-6.248 16.378-6.248 22.627 0zm-84.853 11.313L713 203.52L605.52 311L713 418.48zM464 544c8.837 0 16 7.164 16 16v304c0 8.837-7.163 16-16 16H160c-8.837 0-16-7.163-16-16V560c0-8.836 7.163-16 16-16zm-52 68H212v200h200zm452-68c8.837 0 16 7.164 16 16v304c0 8.837-7.163 16-16 16H560c-8.837 0-16-7.163-16-16V560c0-8.836 7.163-16 16-16zm-52 68H612v200h200z"></svg:path>`,
})
export class AntDesignProductOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignProfileFilledIcon],svg[ant-design-profile-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32M380 696c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40m0-144c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40m0-144c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40m304 272c0 4.4-3.6 8-8 8H492c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8zm0-144c0 4.4-3.6 8-8 8H492c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8zm0-144c0 4.4-3.6 8-8 8H492c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8z"></svg:path>`,
})
export class AntDesignProfileFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignProfileOutlinedIcon],svg[ant-design-profile-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32m-40 728H184V184h656zM492 400h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8m0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8m0 144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8M340 368a40 40 0 1 0 80 0a40 40 0 1 0-80 0m0 144a40 40 0 1 0 80 0a40 40 0 1 0-80 0m0 144a40 40 0 1 0 80 0a40 40 0 1 0-80 0"></svg:path>`,
})
export class AntDesignProfileOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignProfileTwotoneIcon],svg[ant-design-profile-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32m-40 728H184V184h656z"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="M184 840h656V184H184zm300-496c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H492c-4.4 0-8-3.6-8-8zm0 144c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H492c-4.4 0-8-3.6-8-8zm0 144c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H492c-4.4 0-8-3.6-8-8zM380 328c22.1 0 40 17.9 40 40s-17.9 40-40 40s-40-17.9-40-40s17.9-40 40-40m0 144c22.1 0 40 17.9 40 40s-17.9 40-40 40s-40-17.9-40-40s17.9-40 40-40m0 144c22.1 0 40 17.9 40 40s-17.9 40-40 40s-40-17.9-40-40s17.9-40 40-40"></svg:path><svg:path fill="currentColor" d="M340 656a40 40 0 1 0 80 0a40 40 0 1 0-80 0m0-144a40 40 0 1 0 80 0a40 40 0 1 0-80 0m0-144a40 40 0 1 0 80 0a40 40 0 1 0-80 0m152 320h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8m0-144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8m0-144h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H492c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8"></svg:path>`,
})
export class AntDesignProfileTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignProjectFilledIcon],svg[ant-design-project-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32M368 744c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8V280c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8zm192-280c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8V280c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8zm192 72c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8V280c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8z"></svg:path>`,
})
export class AntDesignProjectFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignProjectOutlinedIcon],svg[ant-design-project-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M280 752h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8m192-280h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v184c0 4.4 3.6 8 8 8m192 72h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v256c0 4.4 3.6 8 8 8m216-432H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32m-40 728H184V184h656z"></svg:path>`,
})
export class AntDesignProjectOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignProjectTwotoneIcon],svg[ant-design-project-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32m-40 728H184V184h656z"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="M184 840h656V184H184zm472-560c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v256c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8zm-192 0c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v184c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8zm-192 0c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v464c0 4.4-3.6 8-8 8h-80c-4.4 0-8-3.6-8-8z"></svg:path><svg:path fill="currentColor" d="M280 752h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v464c0 4.4 3.6 8 8 8m192-280h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v184c0 4.4 3.6 8 8 8m192 72h80c4.4 0 8-3.6 8-8V280c0-4.4-3.6-8-8-8h-80c-4.4 0-8 3.6-8 8v256c0 4.4 3.6 8 8 8"></svg:path>`,
})
export class AntDesignProjectTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPropertySafetyFilledIcon],svg[ant-design-property-safety-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2M648.3 332.8l-87.7 161.1h45.7c5.5 0 10 4.5 10 10v21.3c0 5.5-4.5 10-10 10h-63.4v29.7h63.4c5.5 0 10 4.5 10 10v21.3c0 5.5-4.5 10-10 10h-63.4V658c0 5.5-4.5 10-10 10h-41.3c-5.5 0-10-4.5-10-10v-51.8h-63.1c-5.5 0-10-4.5-10-10v-21.3c0-5.5 4.5-10 10-10h63.1v-29.7h-63.1c-5.5 0-10-4.5-10-10v-21.3c0-5.5 4.5-10 10-10h45.2l-88-161.1c-2.6-4.8-.9-10.9 4-13.6q2.25-1.2 4.8-1.2h46c3.8 0 7.2 2.1 8.9 5.5l72.9 144.3l73.2-144.3a10 10 0 0 1 8.9-5.5h45c5.5 0 10 4.5 10 10c.1 1.7-.3 3.3-1.1 4.8"></svg:path>`,
})
export class AntDesignPropertySafetyFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPropertySafetyOutlinedIcon],svg[ant-design-property-safety-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2M810 654.3L512 886.5L214 654.3V226.7l298-101.6l298 101.6zM430.5 318h-46q-2.55 0-4.8 1.2a10.1 10.1 0 0 0-4 13.6l88 161.1h-45.2c-5.5 0-10 4.5-10 10v21.3c0 5.5 4.5 10 10 10h63.1v29.7h-63.1c-5.5 0-10 4.5-10 10v21.3c0 5.5 4.5 10 10 10h63.1V658c0 5.5 4.5 10 10 10h41.3c5.5 0 10-4.5 10-10v-51.8h63.4c5.5 0 10-4.5 10-10v-21.3c0-5.5-4.5-10-10-10h-63.4v-29.7h63.4c5.5 0 10-4.5 10-10v-21.3c0-5.5-4.5-10-10-10h-45.7l87.7-161.1a10.05 10.05 0 0 0-8.8-14.8h-45c-3.8 0-7.2 2.1-8.9 5.5l-73.2 144.3l-72.9-144.3c-1.7-3.4-5.2-5.5-9-5.5"></svg:path>`,
})
export class AntDesignPropertySafetyOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPropertySafetyTwotoneIcon],svg[ant-design-property-safety-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2M810 654.3L512 886.5L214 654.3V226.7l298-101.6l298 101.6z"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="M214 226.7v427.6l298 232.2l298-232.2V226.7L512 125.1zM593.9 318h45c5.5 0 10 4.5 10 10c.1 1.7-.3 3.3-1.1 4.8l-87.7 161.1h45.7c5.5 0 10 4.5 10 10v21.3c0 5.5-4.5 10-10 10h-63.4v29.7h63.4c5.5 0 10 4.5 10 10v21.3c0 5.5-4.5 10-10 10h-63.4V658c0 5.5-4.5 10-10 10h-41.3c-5.5 0-10-4.5-10-10v-51.8H418c-5.5 0-10-4.5-10-10v-21.3c0-5.5 4.5-10 10-10h63.1v-29.7H418c-5.5 0-10-4.5-10-10v-21.3c0-5.5 4.5-10 10-10h45.2l-88-161.1c-2.6-4.8-.9-10.9 4-13.6q2.25-1.2 4.8-1.2h46c3.8 0 7.2 2.1 8.9 5.5l72.9 144.3L585 323.5a10 10 0 0 1 8.9-5.5"></svg:path><svg:path fill="currentColor" d="M438.9 323.5a9.88 9.88 0 0 0-8.9-5.5h-46q-2.55 0-4.8 1.2c-4.9 2.7-6.6 8.8-4 13.6l88 161.1H418c-5.5 0-10 4.5-10 10v21.3c0 5.5 4.5 10 10 10h63.1v29.7H418c-5.5 0-10 4.5-10 10v21.3c0 5.5 4.5 10 10 10h63.1V658c0 5.5 4.5 10 10 10h41.3c5.5 0 10-4.5 10-10v-51.8h63.4c5.5 0 10-4.5 10-10v-21.3c0-5.5-4.5-10-10-10h-63.4v-29.7h63.4c5.5 0 10-4.5 10-10v-21.3c0-5.5-4.5-10-10-10h-45.7l87.7-161.1c.8-1.5 1.2-3.1 1.1-4.8c0-5.5-4.5-10-10-10h-45a10 10 0 0 0-8.9 5.5l-73.2 144.3z"></svg:path>`,
})
export class AntDesignPropertySafetyTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPullRequestOutlinedIcon],svg[ant-design-pull-request-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M788 705.9V192c0-8.8-7.2-16-16-16H602v-68.8c0-6-7-9.4-11.7-5.7L462.7 202.3a7.14 7.14 0 0 0 0 11.3l127.5 100.8c4.7 3.7 11.7.4 11.7-5.7V240h114v465.9c-44.2 15-76 56.9-76 106.1c0 61.8 50.2 112 112 112s112-50.2 112-112c.1-49.2-31.7-91-75.9-106.1M752 860a48.01 48.01 0 0 1 0-96a48.01 48.01 0 0 1 0 96M384 212c0-61.8-50.2-112-112-112s-112 50.2-112 112c0 49.2 31.8 91 76 106.1V706c-44.2 15-76 56.9-76 106.1c0 61.8 50.2 112 112 112s112-50.2 112-112c0-49.2-31.8-91-76-106.1V318.1c44.2-15.1 76-56.9 76-106.1m-160 0a48.01 48.01 0 0 1 96 0a48.01 48.01 0 0 1-96 0m96 600a48.01 48.01 0 0 1-96 0a48.01 48.01 0 0 1 96 0"></svg:path>`,
})
export class AntDesignPullRequestOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPushpinFilledIcon],svg[ant-design-pushpin-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M878.3 392.1L631.9 145.7c-6.5-6.5-15-9.7-23.5-9.7s-17 3.2-23.5 9.7L423.8 306.9c-12.2-1.4-24.5-2-36.8-2c-73.2 0-146.4 24.1-206.5 72.3c-15.4 12.3-16.6 35.4-2.7 49.4l181.7 181.7l-215.4 215.2a15.8 15.8 0 0 0-4.6 9.8l-3.4 37.2c-.9 9.4 6.6 17.4 15.9 17.4c.5 0 1 0 1.5-.1l37.2-3.4c3.7-.3 7.2-2 9.8-4.6l215.4-215.4l181.7 181.7c6.5 6.5 15 9.7 23.5 9.7c9.7 0 19.3-4.2 25.9-12.4c56.3-70.3 79.7-158.3 70.2-243.4l161.1-161.1c12.9-12.8 12.9-33.8 0-46.8"></svg:path>`,
})
export class AntDesignPushpinFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPushpinOutlinedIcon],svg[ant-design-pushpin-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M878.3 392.1L631.9 145.7c-6.5-6.5-15-9.7-23.5-9.7s-17 3.2-23.5 9.7L423.8 306.9c-12.2-1.4-24.5-2-36.8-2c-73.2 0-146.4 24.1-206.5 72.3a33.23 33.23 0 0 0-2.7 49.4l181.7 181.7l-215.4 215.2a15.8 15.8 0 0 0-4.6 9.8l-3.4 37.2c-.9 9.4 6.6 17.4 15.9 17.4c.5 0 1 0 1.5-.1l37.2-3.4c3.7-.3 7.2-2 9.8-4.6l215.4-215.4l181.7 181.7c6.5 6.5 15 9.7 23.5 9.7c9.7 0 19.3-4.2 25.9-12.4c56.3-70.3 79.7-158.3 70.2-243.4l161.1-161.1c12.9-12.8 12.9-33.8 0-46.8M666.2 549.3l-24.5 24.5l3.8 34.4a259.9 259.9 0 0 1-30.4 153.9L262 408.8c12.9-7.1 26.3-13.1 40.3-17.9c27.2-9.4 55.7-14.1 84.7-14.1c9.6 0 19.3.5 28.9 1.6l34.4 3.8l24.5-24.5L608.5 224L800 415.5z"></svg:path>`,
})
export class AntDesignPushpinOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPushpinTwotoneIcon],svg[ant-design-pushpin-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".15" d="m474.8 357.7l-24.5 24.5l-34.4-3.8c-9.6-1.1-19.3-1.6-28.9-1.6c-29 0-57.5 4.7-84.7 14.1c-14 4.8-27.4 10.8-40.3 17.9l353.1 353.3a259.9 259.9 0 0 0 30.4-153.9l-3.8-34.4l24.5-24.5L800 415.5L608.5 224z"></svg:path><svg:path fill="currentColor" d="M878.3 392.1L631.9 145.7c-6.5-6.5-15-9.7-23.5-9.7s-17 3.2-23.5 9.7L423.8 306.9c-12.2-1.4-24.5-2-36.8-2c-73.2 0-146.4 24.1-206.5 72.3a33.23 33.23 0 0 0-2.7 49.4l181.7 181.7l-215.4 215.2a15.8 15.8 0 0 0-4.6 9.8l-3.4 37.2c-.9 9.4 6.6 17.4 15.9 17.4c.5 0 1 0 1.5-.1l37.2-3.4c3.7-.3 7.2-2 9.8-4.6l215.4-215.4l181.7 181.7c6.5 6.5 15 9.7 23.5 9.7c9.7 0 19.3-4.2 25.9-12.4c56.3-70.3 79.7-158.3 70.2-243.4l161.1-161.1c12.9-12.8 12.9-33.8 0-46.8M666.2 549.3l-24.5 24.5l3.8 34.4a259.9 259.9 0 0 1-30.4 153.9L262 408.8c12.9-7.1 26.3-13.1 40.3-17.9c27.2-9.4 55.7-14.1 84.7-14.1c9.6 0 19.3.5 28.9 1.6l34.4 3.8l24.5-24.5L608.5 224L800 415.5z"></svg:path>`,
})
export class AntDesignPushpinTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignPythonOutlinedIcon],svg[ant-design-python-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M555 790.5c0 15.74 12.76 28.5 28.5 28.5s28.5-12.76 28.5-28.5s-12.76-28.5-28.5-28.5s-28.5 12.76-28.5 28.5m-143-557c0 15.74 12.76 28.5 28.5 28.5s28.5-12.76 28.5-28.5s-12.76-28.5-28.5-28.5s-28.5 12.76-28.5 28.5"></svg:path><svg:path d="M821.524 297.714h-95.238v-95.238c0-49.905-40.572-90.476-90.476-90.476H388.19c-49.904 0-90.476 40.571-90.476 90.476v95.238h-95.238c-49.905 0-90.476 40.572-90.476 90.476v247.62c0 49.904 40.571 90.476 90.476 90.476h95.238v95.238c0 49.905 40.572 90.476 90.476 90.476h247.62c49.904 0 90.476-40.571 90.476-90.476v-95.238h95.238c49.905 0 90.476-40.572 90.476-90.476V388.19c0-49.904-40.571-90.476-90.476-90.476M202.476 669.143c-18.38 0-33.333-14.953-33.333-33.333V388.19c0-18.38 14.952-33.333 33.333-33.333h278.572c15.81 0 28.571-12.762 28.571-28.571s-12.762-28.572-28.571-28.572h-126.19v-95.238c0-18.38 14.952-33.333 33.332-33.333h247.62c18.38 0 33.333 14.952 33.333 33.333v256.476c0 13.524-10.953 24.477-24.476 24.477H379.333c-45.047 0-81.619 36.666-81.619 81.619v104.095zm652.381-33.333c0 18.38-14.952 33.333-33.333 33.333H542.952c-15.81 0-28.571 12.762-28.571 28.571s12.762 28.572 28.571 28.572h126.19v95.238c0 18.38-14.952 33.333-33.332 33.333H388.19c-18.38 0-33.333-14.952-33.333-33.333V565.048c0-13.524 10.953-24.477 24.476-24.477h265.334c45.047 0 81.619-36.666 81.619-81.619V354.857h95.238c18.38 0 33.333 14.953 33.333 33.333z"></svg:path></svg:g>`,
})
export class AntDesignPythonOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignQqCircleFilledIcon],svg[ant-design-qq-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m210.5 612.4c-11.5 1.4-44.9-52.7-44.9-52.7c0 31.3-16.2 72.2-51.1 101.8c16.9 5.2 54.9 19.2 45.9 34.4c-7.3 12.3-125.6 7.9-159.8 4c-34.2 3.8-152.5 8.3-159.8-4c-9.1-15.2 28.9-29.2 45.8-34.4c-35-29.5-51.1-70.4-51.1-101.8c0 0-33.4 54.1-44.9 52.7c-5.4-.7-12.4-29.6 9.4-99.7c10.3-33 22-60.5 40.2-105.8c-3.1-116.9 45.3-215 160.4-215c113.9 0 163.3 96.1 160.4 215c18.1 45.2 29.9 72.8 40.2 105.8c21.7 70.1 14.6 99.1 9.3 99.7"></svg:path>`,
})
export class AntDesignQqCircleFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignQqOutlinedIcon],svg[ant-design-qq-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112C331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3c-34 109.5-23 154.8-14.6 155.8c18 2.2 70.1-82.4 70.1-82.4c0 49 25.2 112.9 79.8 159c-26.4 8.1-85.7 29.9-71.6 53.8c11.4 19.3 196.2 12.3 249.5 6.3c53.3 6 238.1 13 249.5-6.3c14.1-23.8-45.3-45.7-71.6-53.8c54.6-46.2 79.8-110.1 79.8-159c0 0 52.1 84.6 70.1 82.4c8.5-1.1 19.5-46.4-14.5-155.8"></svg:path>`,
})
export class AntDesignQqOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignQqSquareFilledIcon],svg[ant-design-qq-square-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32M722.5 676.4c-11.5 1.4-44.9-52.7-44.9-52.7c0 31.3-16.2 72.2-51.1 101.8c16.9 5.2 54.9 19.2 45.9 34.4c-7.3 12.3-125.6 7.9-159.8 4c-34.2 3.8-152.5 8.3-159.8-4c-9.1-15.2 28.9-29.2 45.8-34.4c-35-29.5-51.1-70.4-51.1-101.8c0 0-33.4 54.1-44.9 52.7c-5.4-.7-12.4-29.6 9.4-99.7c10.3-33 22-60.5 40.2-105.8c-3.1-116.9 45.3-215 160.4-215c113.9 0 163.3 96.1 160.4 215c18.1 45.2 29.9 72.8 40.2 105.8c21.7 70.1 14.6 99.1 9.3 99.7"></svg:path>`,
})
export class AntDesignQqSquareFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignQrcodeOutlinedIcon],svg[ant-design-qrcode-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M468 128H160c-17.7 0-32 14.3-32 32v308c0 4.4 3.6 8 8 8h332c4.4 0 8-3.6 8-8V136c0-4.4-3.6-8-8-8m-56 284H192V192h220zm-138-74h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8m194 210H136c-4.4 0-8 3.6-8 8v308c0 17.7 14.3 32 32 32h308c4.4 0 8-3.6 8-8V556c0-4.4-3.6-8-8-8m-56 284H192V612h220zm-138-74h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8m590-630H556c-4.4 0-8 3.6-8 8v332c0 4.4 3.6 8 8 8h332c4.4 0 8-3.6 8-8V160c0-17.7-14.3-32-32-32m-32 284H612V192h220zm-138-74h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8m194 210h-48c-4.4 0-8 3.6-8 8v134h-78V556c0-4.4-3.6-8-8-8H556c-4.4 0-8 3.6-8 8v332c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V644h78v102c0 4.4 3.6 8 8 8h190c4.4 0 8-3.6 8-8V556c0-4.4-3.6-8-8-8M746 832h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8m142 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8"></svg:path>`,
})
export class AntDesignQrcodeOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignQuestionCircleFilledIcon],svg[ant-design-question-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m0 708c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40m62.9-219.5a48.3 48.3 0 0 0-30.9 44.8V620c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-21.5c0-23.1 6.7-45.9 19.9-64.9c12.9-18.6 30.9-32.8 52.1-40.9c34-13.1 56-41.6 56-72.7c0-44.1-43.1-80-96-80s-96 35.9-96 80v7.6c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V420c0-39.3 17.2-76 48.4-103.3C430.4 290.4 470 276 512 276s81.6 14.5 111.6 40.7C654.8 344 672 380.7 672 420c0 57.8-38.1 109.8-97.1 132.5"></svg:path>`,
})
export class AntDesignQuestionCircleFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignQuestionCircleOutlinedIcon],svg[ant-design-question-circle-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372"></svg:path><svg:path fill="currentColor" d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7c-21.2 8.1-39.2 22.3-52.1 40.9c-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0 1 30.9-44.8c59-22.7 97.1-74.7 97.1-132.5c.1-39.3-17.1-76-48.3-103.3M472 732a40 40 0 1 0 80 0a40 40 0 1 0-80 0"></svg:path>`,
})
export class AntDesignQuestionCircleOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignQuestionCircleTwotoneIcon],svg[ant-design-question-circle-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372s372-166.6 372-372s-166.6-372-372-372m0 632c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40m62.9-219.5a48.3 48.3 0 0 0-30.9 44.8V620c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-21.5c0-23.1 6.7-45.9 19.9-64.9c12.9-18.6 30.9-32.8 52.1-40.9c34-13.1 56-41.6 56-72.7c0-44.1-43.1-80-96-80s-96 35.9-96 80v7.6c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V420c0-39.3 17.2-76 48.4-103.3C430.4 290.4 470 276 512 276s81.6 14.5 111.6 40.7C654.8 344 672 380.7 672 420c0 57.8-38.1 109.8-97.1 132.5"></svg:path><svg:path fill="currentColor" d="M472 732a40 40 0 1 0 80 0a40 40 0 1 0-80 0m151.6-415.3C593.6 290.5 554 276 512 276s-81.6 14.4-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56 72.7c-21.2 8.1-39.2 22.3-52.1 40.9c-13.2 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0 1 30.9-44.8c59-22.7 97.1-74.7 97.1-132.5c0-39.3-17.2-76-48.4-103.3"></svg:path>`,
})
export class AntDesignQuestionCircleTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignQuestionOutlinedIcon],svg[ant-design-question-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M764 280.9c-14-30.6-33.9-58.1-59.3-81.6C653.1 151.4 584.6 125 512 125s-141.1 26.4-192.7 74.2c-25.4 23.6-45.3 51-59.3 81.7c-14.6 32-22 65.9-22 100.9v27c0 6.2 5 11.2 11.2 11.2h54c6.2 0 11.2-5 11.2-11.2v-27c0-99.5 88.6-180.4 197.6-180.4s197.6 80.9 197.6 180.4c0 40.8-14.5 79.2-42 111.2c-27.2 31.7-65.6 54.4-108.1 64c-24.3 5.5-46.2 19.2-61.7 38.8a110.85 110.85 0 0 0-23.9 68.6v31.4c0 6.2 5 11.2 11.2 11.2h54c6.2 0 11.2-5 11.2-11.2v-31.4c0-15.7 10.9-29.5 26-32.9c58.4-13.2 111.4-44.7 149.3-88.7c19.1-22.3 34-47.1 44.3-74c10.7-27.9 16.1-57.2 16.1-87c0-35-7.4-69-22-100.9M512 787c-30.9 0-56 25.1-56 56s25.1 56 56 56s56-25.1 56-56s-25.1-56-56-56"></svg:path>`,
})
export class AntDesignQuestionOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignRadarChartOutlinedIcon],svg[ant-design-radar-chart-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m926.8 397.1l-396-288a31.81 31.81 0 0 0-37.6 0l-396 288a31.99 31.99 0 0 0-11.6 35.8l151.3 466a32 32 0 0 0 30.4 22.1h489.5c13.9 0 26.1-8.9 30.4-22.1l151.3-466c4.2-13.2-.5-27.6-11.7-35.8M838.6 417l-98.5 32l-200-144.7V199.9zM466 567.2l-89.1 122.3l-55.2-169.2zm-116.3-96.8L484 373.3v140.8zM512 599.2l93.9 128.9H418.1zm28.1-225.9l134.2 97.1L540.1 514zM558 567.2l144.3-46.9l-55.2 169.2zm-74-367.3v104.4L283.9 449l-98.5-32zM169.3 470.8l86.5 28.1l80.4 246.4l-53.8 73.9zM327.1 853l50.3-69h269.3l50.3 69zm414.5-33.8l-53.8-73.9l80.4-246.4l86.5-28.1z"></svg:path>`,
})
export class AntDesignRadarChartOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignRadiusBottomleftOutlinedIcon],svg[ant-design-radius-bottomleft-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M712 824h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m2-696h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8M136 374h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8m0-174h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8m752 624h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m-348 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m-230 72h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8m230 624H358c-87.3 0-158-70.7-158-158V484c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v182c0 127 103 230 230 230h182c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8"></svg:path>`,
})
export class AntDesignRadiusBottomleftOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignRadiusBottomrightOutlinedIcon],svg[ant-design-radius-bottomright-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368 824h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m-58-624h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8m578 102h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8M192 824h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m292 72h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8m174 0h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8m230 276h-56c-4.4 0-8 3.6-8 8v182c0 87.3-70.7 158-158 158H484c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h182c127 0 230-103 230-230V484c0-4.4-3.6-8-8-8"></svg:path>`,
})
export class AntDesignRadiusBottomrightOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignRadiusSettingOutlinedIcon],svg[ant-design-radius-setting-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M396 140h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m-44 684h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m524-204h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8M192 344h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0 160h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0 160h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0 160h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m320 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m160 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m140-284c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V370c0-127-103-230-230-230H484c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h170c87.3 0 158 70.7 158 158zM236 96H92c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8h144c4.4 0 8-3.6 8-8V104c0-4.4-3.6-8-8-8m-48 101.6c0 1.3-1.1 2.4-2.4 2.4h-43.2c-1.3 0-2.4-1.1-2.4-2.4v-43.2c0-1.3 1.1-2.4 2.4-2.4h43.2c1.3 0 2.4 1.1 2.4 2.4zM920 780H776c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8h144c4.4 0 8-3.6 8-8V788c0-4.4-3.6-8-8-8m-48 101.6c0 1.3-1.1 2.4-2.4 2.4h-43.2c-1.3 0-2.4-1.1-2.4-2.4v-43.2c0-1.3 1.1-2.4 2.4-2.4h43.2c1.3 0 2.4 1.1 2.4 2.4z"></svg:path>`,
})
export class AntDesignRadiusSettingOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignRadiusUpleftOutlinedIcon],svg[ant-design-radius-upleft-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M656 200h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8m58 624h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8M192 650h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m696-696h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m-348 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m-174 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m174-696H358c-127 0-230 103-230 230v182c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V358c0-87.3 70.7-158 158-158h182c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8"></svg:path>`,
})
export class AntDesignRadiusUpleftOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignRadiusUprightOutlinedIcon],svg[ant-design-radius-upright-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368 128h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m-2 696h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m522-174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8M192 128h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0 174h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m348 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m174 0h-56c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m-48-696H484c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h182c87.3 0 158 70.7 158 158v182c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V358c0-127-103-230-230-230"></svg:path>`,
})
export class AntDesignRadiusUprightOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignReadFilledIcon],svg[ant-design-read-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928 161H699.2c-49.1 0-97.1 14.1-138.4 40.7L512 233l-48.8-31.3A255.2 255.2 0 0 0 324.8 161H96c-17.7 0-32 14.3-32 32v568c0 17.7 14.3 32 32 32h228.8c49.1 0 97.1 14.1 138.4 40.7l44.4 28.6c1.3.8 2.8 1.3 4.3 1.3s3-.4 4.3-1.3l44.4-28.6C602 807.1 650.1 793 699.2 793H928c17.7 0 32-14.3 32-32V193c0-17.7-14.3-32-32-32M404 553.5c0 4.1-3.2 7.5-7.1 7.5H211.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45zm0-140c0 4.1-3.2 7.5-7.1 7.5H211.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45zm416 140c0 4.1-3.2 7.5-7.1 7.5H627.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45zm0-140c0 4.1-3.2 7.5-7.1 7.5H627.1c-3.9 0-7.1-3.4-7.1-7.5v-45c0-4.1 3.2-7.5 7.1-7.5h185.7c3.9 0 7.1 3.4 7.1 7.5v45z"></svg:path>`,
})
export class AntDesignReadFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignReadOutlinedIcon],svg[ant-design-read-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928 161H699.2c-49.1 0-97.1 14.1-138.4 40.7L512 233l-48.8-31.3A255.2 255.2 0 0 0 324.8 161H96c-17.7 0-32 14.3-32 32v568c0 17.7 14.3 32 32 32h228.8c49.1 0 97.1 14.1 138.4 40.7l44.4 28.6c1.3.8 2.8 1.3 4.3 1.3s3-.4 4.3-1.3l44.4-28.6C602 807.1 650.1 793 699.2 793H928c17.7 0 32-14.3 32-32V193c0-17.7-14.3-32-32-32M324.8 721H136V233h188.8c35.4 0 69.8 10.1 99.5 29.2l48.8 31.3l6.9 4.5v462c-47.6-25.6-100.8-39-155.2-39m563.2 0H699.2c-54.4 0-107.6 13.4-155.2 39V298l6.9-4.5l48.8-31.3c29.7-19.1 64.1-29.2 99.5-29.2H888zM396.9 361H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5m223.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c0-4.1-3.2-7.5-7.1-7.5H627.1c-3.9 0-7.1 3.4-7.1 7.5M396.9 501H211.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5m416 0H627.1c-3.9 0-7.1 3.4-7.1 7.5v45c0 4.1 3.2 7.5 7.1 7.5h185.7c3.9 0 7.1-3.4 7.1-7.5v-45c.1-4.1-3.1-7.5-7-7.5"></svg:path>`,
})
export class AntDesignReadOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignReconciliationFilledIcon],svg[ant-design-reconciliation-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M676 623c-18.8 0-34 15.2-34 34s15.2 34 34 34s34-15.2 34-34s-15.2-34-34-34m204-455H668c0-30.9-25.1-56-56-56h-80c-30.9 0-56 25.1-56 56H264c-17.7 0-32 14.3-32 32v200h-88c-17.7 0-32 14.3-32 32v448c0 17.7 14.3 32 32 32h336c17.7 0 32-14.3 32-32v-16h368c17.7 0 32-14.3 32-32V200c0-17.7-14.3-32-32-32M448 848H176V616h272zm0-296H176v-88h272zm20-272v-48h72v-56h64v56h72v48zm180 168v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-56c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8m28 301c-50.8 0-92-41.2-92-92s41.2-92 92-92s92 41.2 92 92s-41.2 92-92 92m92-245c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-96c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8zm-92 61c-50.8 0-92 41.2-92 92s41.2 92 92 92s92-41.2 92-92s-41.2-92-92-92m0 126c-18.8 0-34-15.2-34-34s15.2-34 34-34s34 15.2 34 34s-15.2 34-34 34"></svg:path>`,
})
export class AntDesignReconciliationFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignReconciliationOutlinedIcon],svg[ant-design-reconciliation-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M676 565c-50.8 0-92 41.2-92 92s41.2 92 92 92s92-41.2 92-92s-41.2-92-92-92m0 126c-18.8 0-34-15.2-34-34s15.2-34 34-34s34 15.2 34 34s-15.2 34-34 34m204-523H668c0-30.9-25.1-56-56-56h-80c-30.9 0-56 25.1-56 56H264c-17.7 0-32 14.3-32 32v200h-88c-17.7 0-32 14.3-32 32v448c0 17.7 14.3 32 32 32h336c17.7 0 32-14.3 32-32v-16h368c17.7 0 32-14.3 32-32V200c0-17.7-14.3-32-32-32m-412 64h72v-56h64v56h72v48H468zm-20 616H176V616h272zm0-296H176v-88h272zm392 240H512V432c0-17.7-14.3-32-32-32H304V240h100v104h336V240h100zM704 408v96c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-96c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8M592 512h48c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8"></svg:path>`,
})
export class AntDesignReconciliationOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignReconciliationTwotoneIcon],svg[ant-design-reconciliation-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".15" d="M740 344H404V240H304v160h176c17.7 0 32 14.3 32 32v360h328V240H740zM584 448c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8zm92 301c-50.8 0-92-41.2-92-92s41.2-92 92-92s92 41.2 92 92s-41.2 92-92 92m92-341v96c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-96c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="M642 657a34 34 0 1 0 68 0a34 34 0 1 0-68 0"></svg:path><svg:path fill="currentColor" d="M592 512h48c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8m112-104v96c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-96c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8"></svg:path><svg:path fill="currentColor" d="M880 168H668c0-30.9-25.1-56-56-56h-80c-30.9 0-56 25.1-56 56H264c-17.7 0-32 14.3-32 32v200h-88c-17.7 0-32 14.3-32 32v448c0 17.7 14.3 32 32 32h336c17.7 0 32-14.3 32-32v-16h368c17.7 0 32-14.3 32-32V200c0-17.7-14.3-32-32-32m-412 64h72v-56h64v56h72v48H468zm-20 616H176V616h272zm0-296H176v-88h272zm392 240H512V432c0-17.7-14.3-32-32-32H304V240h100v104h336V240h100z"></svg:path><svg:path fill="currentColor" d="M676 565c-50.8 0-92 41.2-92 92s41.2 92 92 92s92-41.2 92-92s-41.2-92-92-92m0 126c-18.8 0-34-15.2-34-34s15.2-34 34-34s34 15.2 34 34s-15.2 34-34 34"></svg:path>`,
})
export class AntDesignReconciliationTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignRedEnvelopeFilledIcon],svg[ant-design-red-envelope-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32M647 470.4l-87.2 161h45.9c4.6 0 8.4 3.8 8.4 8.4v25.1c0 4.6-3.8 8.4-8.4 8.4h-63.3v28.6h63.3c4.6 0 8.4 3.8 8.4 8.4v25c.2 4.6-3.6 8.5-8.2 8.5h-63.3v49.9c0 4.6-3.8 8.4-8.4 8.4h-43.7c-4.6 0-8.4-3.8-8.4-8.4v-49.9h-63c-4.6 0-8.4-3.8-8.4-8.4v-25.1c0-4.6 3.8-8.4 8.4-8.4h63v-28.6h-63c-4.6 0-8.4-3.8-8.4-8.4v-25.1c0-4.6 3.8-8.4 8.4-8.4h45.4l-87.5-161c-2.2-4.1-.7-9.1 3.4-11.4c1.3-.6 2.6-1 3.9-1h48.8c3.2 0 6.1 1.8 7.5 4.6l71.9 141.8l71.9-141.9a8.5 8.5 0 0 1 7.5-4.6h47.8c4.6 0 8.4 3.8 8.4 8.4c-.1 1.5-.5 2.9-1.1 4.1M512.6 323L289 148h446z"></svg:path>`,
})
export class AntDesignRedEnvelopeFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignRedEnvelopeOutlinedIcon],svg[ant-design-red-envelope-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M440.6 462.6a8.38 8.38 0 0 0-7.5-4.6h-48.8c-1.3 0-2.6.4-3.9 1a8.4 8.4 0 0 0-3.4 11.4l87.4 161.1H419c-4.6 0-8.4 3.8-8.4 8.4V665c0 4.6 3.8 8.4 8.4 8.4h63V702h-63c-4.6 0-8.4 3.8-8.4 8.4v25.1c0 4.6 3.8 8.4 8.4 8.4h63v49.9c0 4.6 3.8 8.4 8.4 8.4h43.7c4.6 0 8.4-3.8 8.4-8.4v-49.9h63.3c4.7 0 8.4-3.8 8.2-8.5v-25c0-4.6-3.8-8.4-8.4-8.4h-63.3v-28.6h63.3c4.6 0 8.4-3.8 8.4-8.4v-25.1c0-4.6-3.8-8.4-8.4-8.4h-45.9l87.2-161a8.45 8.45 0 0 0-7.4-12.4h-47.8c-3.1 0-6 1.8-7.5 4.6l-71.9 141.9zM832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32m-40 824H232V193.1l260.3 204.1c11.6 9.1 27.9 9.1 39.5 0L792 193.1zm0-751.3h-31.7L512 331.3L263.7 136.7H232v-.7h560z"></svg:path>`,
})
export class AntDesignRedEnvelopeOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignRedEnvelopeTwotoneIcon],svg[ant-design-red-envelope-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32m-40 824H232V193.1l260.3 204.1c11.6 9.1 27.9 9.1 39.5 0L792 193.1zm0-751.3h-31.7L512 331.3L263.7 136.7H232v-.7h560z"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="M492.3 397.2L232 193.1V888h560V193.1L531.8 397.2a31.99 31.99 0 0 1-39.5 0m99.4 60.9h47.8a8.45 8.45 0 0 1 7.4 12.4l-87.2 161h45.9c4.6 0 8.4 3.8 8.4 8.4V665c0 4.6-3.8 8.4-8.4 8.4h-63.3V702h63.3c4.6 0 8.4 3.8 8.4 8.4v25c.2 4.7-3.5 8.5-8.2 8.5h-63.3v49.9c0 4.6-3.8 8.4-8.4 8.4h-43.7c-4.6 0-8.4-3.8-8.4-8.4v-49.9h-63c-4.6 0-8.4-3.8-8.4-8.4v-25.1c0-4.6 3.8-8.4 8.4-8.4h63v-28.6h-63c-4.6 0-8.4-3.8-8.4-8.4v-25.1c0-4.6 3.8-8.4 8.4-8.4h45.4L377 470.4a8.4 8.4 0 0 1 3.4-11.4c1.3-.6 2.6-1 3.9-1h48.8c3.2 0 6.1 1.8 7.5 4.6l71.7 142l71.9-141.9a8.6 8.6 0 0 1 7.5-4.6"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="M232 136.7h31.7L512 331.3l248.3-194.6H792v-.7H232z"></svg:path><svg:path fill="currentColor" d="M440.6 462.6a8.38 8.38 0 0 0-7.5-4.6h-48.8c-1.3 0-2.6.4-3.9 1a8.4 8.4 0 0 0-3.4 11.4l87.4 161.1H419c-4.6 0-8.4 3.8-8.4 8.4V665c0 4.6 3.8 8.4 8.4 8.4h63V702h-63c-4.6 0-8.4 3.8-8.4 8.4v25.1c0 4.6 3.8 8.4 8.4 8.4h63v49.9c0 4.6 3.8 8.4 8.4 8.4h43.7c4.6 0 8.4-3.8 8.4-8.4v-49.9h63.3c4.7 0 8.4-3.8 8.2-8.5v-25c0-4.6-3.8-8.4-8.4-8.4h-63.3v-28.6h63.3c4.6 0 8.4-3.8 8.4-8.4v-25.1c0-4.6-3.8-8.4-8.4-8.4h-45.9l87.2-161a8.45 8.45 0 0 0-7.4-12.4h-47.8c-3.1 0-6 1.8-7.5 4.6l-71.9 141.9z"></svg:path>`,
})
export class AntDesignRedEnvelopeTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignRedditCircleFilledIcon],svg[ant-design-reddit-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M584 548a36 36 0 1 0 72 0a36 36 0 1 0-72 0m144-108a35.9 35.9 0 0 0-32.5 20.6c18.8 14.3 34.4 30.7 45.9 48.8A35.98 35.98 0 0 0 728 440M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m245 477.9c4.6 13.5 7 27.6 7 42.1c0 99.4-112.8 180-252 180s-252-80.6-252-180c0-14.5 2.4-28.6 7-42.1A72.01 72.01 0 0 1 296 404c27.1 0 50.6 14.9 62.9 37c36.2-19.8 80.2-32.8 128.1-36.1l58.4-131.1c4.3-9.8 15.2-14.8 25.5-11.8l91.6 26.5a54.03 54.03 0 0 1 101.6 25.6c0 29.8-24.2 54-54 54c-23.5 0-43.5-15.1-50.9-36.1L577 308.3l-43 96.5c49.1 3 94.2 16.1 131.2 36.3c12.3-22.1 35.8-37 62.9-37c39.8 0 72 32.2 72 72c-.1 29.3-17.8 54.6-43.1 65.8m-171.3 83c-14.9 11.7-44.3 24.3-73.7 24.3s-58.9-12.6-73.7-24.3c-9.3-7.3-22.7-5.7-30 3.6s-5.7 22.7 3.6 30c25.7 20.4 65 33.5 100.1 33.5s74.4-13.1 100.2-33.5c9.3-7.3 10.9-20.8 3.6-30a21.46 21.46 0 0 0-30.1-3.6M296 440a35.98 35.98 0 0 0-13.4 69.4c11.5-18.1 27.1-34.5 45.9-48.8A35.9 35.9 0 0 0 296 440m72 108a36 36 0 1 0 72 0a36 36 0 1 0-72 0"></svg:path>`,
})
export class AntDesignRedditCircleFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignRedditOutlinedIcon],svg[ant-design-reddit-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 568a56 56 0 1 0 112 0a56 56 0 1 0-112 0m338.7 119.7c-23.1 18.2-68.9 37.8-114.7 37.8s-91.6-19.6-114.7-37.8c-14.4-11.3-35.3-8.9-46.7 5.5s-8.9 35.3 5.5 46.7C396.3 771.6 457.5 792 512 792s115.7-20.4 155.9-52.1a33.25 33.25 0 1 0-41.2-52.2M960 456c0-61.9-50.1-112-112-112c-42.1 0-78.7 23.2-97.9 57.6c-57.6-31.5-127.7-51.8-204.1-56.5L612.9 195l127.9 36.9c11.5 32.6 42.6 56.1 79.2 56.1c46.4 0 84-37.6 84-84s-37.6-84-84-84c-32 0-59.8 17.9-74 44.2L603.5 123a33.2 33.2 0 0 0-39.6 18.4l-90.8 203.9c-74.5 5.2-142.9 25.4-199.2 56.2A111.94 111.94 0 0 0 176 344c-61.9 0-112 50.1-112 112c0 45.8 27.5 85.1 66.8 102.5c-7.1 21-10.8 43-10.8 65.5c0 154.6 175.5 280 392 280s392-125.4 392-280c0-22.6-3.8-44.5-10.8-65.5C932.5 541.1 960 501.8 960 456M820 172.5a31.5 31.5 0 1 1 0 63a31.5 31.5 0 0 1 0-63M120 456c0-30.9 25.1-56 56-56a56 56 0 0 1 50.6 32.1c-29.3 22.2-53.5 47.8-71.5 75.9a56.23 56.23 0 0 1-35.1-52m392 381.5c-179.8 0-325.5-95.6-325.5-213.5S332.2 410.5 512 410.5S837.5 506.1 837.5 624S691.8 837.5 512 837.5M868.8 508c-17.9-28.1-42.2-53.7-71.5-75.9c9-18.9 28.3-32.1 50.6-32.1c30.9 0 56 25.1 56 56c.1 23.5-14.5 43.7-35.1 52M624 568a56 56 0 1 0 112 0a56 56 0 1 0-112 0"></svg:path>`,
})
export class AntDesignRedditOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignRedditSquareFilledIcon],svg[ant-design-reddit-square-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M296 440a35.98 35.98 0 0 0-13.4 69.4c11.5-18.1 27.1-34.5 45.9-48.8A35.9 35.9 0 0 0 296 440m289.7 184.9c-14.9 11.7-44.3 24.3-73.7 24.3s-58.9-12.6-73.7-24.3c-9.3-7.3-22.7-5.7-30 3.6s-5.7 22.7 3.6 30c25.7 20.4 65 33.5 100.1 33.5s74.4-13.1 100.2-33.5c9.3-7.3 10.9-20.8 3.6-30a21.46 21.46 0 0 0-30.1-3.6M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32M757 541.9c4.6 13.5 7 27.6 7 42.1c0 99.4-112.8 180-252 180s-252-80.6-252-180c0-14.5 2.4-28.6 7-42.1A72.01 72.01 0 0 1 296 404c27.1 0 50.6 14.9 62.9 37c36.2-19.8 80.2-32.8 128.1-36.1l58.4-131.1c4.3-9.8 15.2-14.8 25.5-11.8l91.6 26.5a54.03 54.03 0 0 1 101.6 25.6c0 29.8-24.2 54-54 54c-23.5 0-43.5-15.1-50.9-36.1L577 308.3l-43 96.5c49.1 3 94.2 16.1 131.2 36.3c12.3-22.1 35.8-37 62.9-37c39.8 0 72 32.2 72 72c-.1 29.3-17.8 54.6-43.1 65.8M584 548a36 36 0 1 0 72 0a36 36 0 1 0-72 0m144-108a35.9 35.9 0 0 0-32.5 20.6c18.8 14.3 34.4 30.7 45.9 48.8A35.98 35.98 0 0 0 728 440M368 548a36 36 0 1 0 72 0a36 36 0 1 0-72 0"></svg:path>`,
})
export class AntDesignRedditSquareFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignRedoOutlinedIcon],svg[ant-design-redo-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M758.2 839.1C851.8 765.9 912 651.9 912 523.9C912 303 733.5 124.3 512.6 124C291.4 123.7 112 302.8 112 523.9c0 125.2 57.5 236.9 147.6 310.2c3.5 2.8 8.6 2.2 11.4-1.3l39.4-50.5c2.7-3.4 2.1-8.3-1.2-11.1c-8.1-6.6-15.9-13.7-23.4-21.2a318.6 318.6 0 0 1-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7s63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6s52.5 63.6 68.6 101.7c16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.6 318.6 0 0 1-68.6 101.7c-9.3 9.3-19.1 18-29.3 26L668.2 724a8 8 0 0 0-14.1 3l-39.6 162.2c-1.2 5 2.6 9.9 7.7 9.9l167 .8c6.7 0 10.5-7.7 6.3-12.9z"></svg:path>`,
})
export class AntDesignRedoOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignReloadOutlinedIcon],svg[ant-design-reload-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92C290 92 102.3 279.5 102 511.5C101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1c1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 0 0-10.1 4.8c-1.8 5-3.8 10-5.9 14.9c-17.3 41-42.1 77.8-73.7 109.4A344.8 344.8 0 0 1 655.9 829c-42.3 17.9-87.4 27-133.8 27c-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 0 1 279 755.2a342.2 342.2 0 0 1-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4s68.4-56.4 109.3-73.8c42.3-17.9 87.4-27 133.8-27c46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 0 1 109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 0 0 3 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2"></svg:path>`,
})
export class AntDesignReloadOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignRestFilledIcon],svg[ant-design-rest-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 256h-28.1l-35.7-120.9c-4-13.7-16.5-23.1-30.7-23.1h-451c-14.3 0-26.8 9.4-30.7 23.1L220.1 256H192c-17.7 0-32 14.3-32 32v28c0 4.4 3.6 8 8 8h45.8l47.7 558.7a32 32 0 0 0 31.9 29.3h429.2a32 32 0 0 0 31.9-29.3L802.2 324H856c4.4 0 8-3.6 8-8v-28c0-17.7-14.3-32-32-32M508 704c-79.5 0-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144s-64.5 144-144 144M291 256l22.4-76h397.2l22.4 76zm137 304a80 80 0 1 0 160 0a80 80 0 1 0-160 0"></svg:path>`,
})
export class AntDesignRestFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignRestOutlinedIcon],svg[ant-design-rest-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M508 704c79.5 0 144-64.5 144-144s-64.5-144-144-144s-144 64.5-144 144s64.5 144 144 144m0-224c44.2 0 80 35.8 80 80s-35.8 80-80 80s-80-35.8-80-80s35.8-80 80-80"></svg:path><svg:path fill="currentColor" d="M832 256h-28.1l-35.7-120.9c-4-13.7-16.5-23.1-30.7-23.1h-451c-14.3 0-26.8 9.4-30.7 23.1L220.1 256H192c-17.7 0-32 14.3-32 32v28c0 4.4 3.6 8 8 8h45.8l47.7 558.7a32 32 0 0 0 31.9 29.3h429.2a32 32 0 0 0 31.9-29.3L802.2 324H856c4.4 0 8-3.6 8-8v-28c0-17.7-14.3-32-32-32m-518.6-76h397.2l22.4 76H291zm376.2 664H326.4L282 324h451.9z"></svg:path>`,
})
export class AntDesignRestOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignRestTwotoneIcon],svg[ant-design-rest-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".15" d="M326.4 844h363.2l44.3-520H282zM508 416c79.5 0 144 64.5 144 144s-64.5 144-144 144s-144-64.5-144-144s64.5-144 144-144"></svg:path><svg:path fill="currentColor" d="M508 704c79.5 0 144-64.5 144-144s-64.5-144-144-144s-144 64.5-144 144s64.5 144 144 144m0-224c44.2 0 80 35.8 80 80s-35.8 80-80 80s-80-35.8-80-80s35.8-80 80-80"></svg:path><svg:path fill="currentColor" d="M832 256h-28.1l-35.7-120.9c-4-13.7-16.5-23.1-30.7-23.1h-451c-14.3 0-26.8 9.4-30.7 23.1L220.1 256H192c-17.7 0-32 14.3-32 32v28c0 4.4 3.6 8 8 8h45.8l47.7 558.7a32 32 0 0 0 31.9 29.3h429.2a32 32 0 0 0 31.9-29.3L802.2 324H856c4.4 0 8-3.6 8-8v-28c0-17.7-14.3-32-32-32m-518.6-76h397.2l22.4 76H291zm376.2 664H326.4L282 324h451.9z"></svg:path>`,
})
export class AntDesignRestTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignRetweetOutlinedIcon],svg[ant-design-retweet-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 552h63.6c4.4 0 8-3.6 8-8V288.7h528.6v72.6c0 1.9.6 3.7 1.8 5.2a8.3 8.3 0 0 0 11.7 1.4L893 255.4c4.3-5 3.6-10.3 0-13.2L749.7 129.8a8.22 8.22 0 0 0-5.2-1.8c-4.6 0-8.4 3.8-8.4 8.4V209H199.7c-39.5 0-71.7 32.2-71.7 71.8V544c0 4.4 3.6 8 8 8m752-80h-63.6c-4.4 0-8 3.6-8 8v255.3H287.8v-72.6c0-1.9-.6-3.7-1.8-5.2a8.3 8.3 0 0 0-11.7-1.4L131 768.6c-4.3 5-3.6 10.3 0 13.2l143.3 112.4c1.5 1.2 3.3 1.8 5.2 1.8c4.6 0 8.4-3.8 8.4-8.4V815h536.6c39.5 0 71.7-32.2 71.7-71.8V480c-.2-4.4-3.8-8-8.2-8"></svg:path>`,
})
export class AntDesignRetweetOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignRightCircleFilledIcon],svg[ant-design-right-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m154.7 454.5l-246 178c-5.3 3.8-12.7 0-12.7-6.5v-46.9c0-10.2 4.9-19.9 13.2-25.9L566.6 512L421.2 406.8c-8.3-6-13.2-15.6-13.2-25.9V334c0-6.5 7.4-10.3 12.7-6.5l246 178c4.4 3.2 4.4 9.8 0 13"></svg:path>`,
})
export class AntDesignRightCircleFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignRightCircleOutlinedIcon],svg[ant-design-right-circle-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m666.7 505.5l-246-178A8 8 0 0 0 408 334v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 512L421.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13"></svg:path><svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372"></svg:path>`,
})
export class AntDesignRightCircleOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignRightCircleTwotoneIcon],svg[ant-design-right-circle-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".15" d="M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372s372-166.6 372-372s-166.6-372-372-372m154.7 378.4l-246 178c-5.3 3.8-12.7 0-12.7-6.5V643c0-10.2 4.9-19.9 13.2-25.9L566.6 512L421.2 406.8c-8.3-6-13.2-15.6-13.2-25.9V334c0-6.5 7.4-10.3 12.7-6.5l246 178c4.4 3.2 4.4 9.7 0 12.9"></svg:path><svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372"></svg:path><svg:path fill="currentColor" d="m666.7 505.5l-246-178c-5.3-3.8-12.7 0-12.7 6.5v46.9c0 10.3 4.9 19.9 13.2 25.9L566.6 512L421.2 617.1c-8.3 6-13.2 15.7-13.2 25.9v46.9c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.7 0-12.9"></svg:path>`,
})
export class AntDesignRightCircleTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignRightOutlinedIcon],svg[ant-design-right-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M765.7 486.8L314.9 134.7A7.97 7.97 0 0 0 302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1l-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 0 0 0-50.4"></svg:path>`,
})
export class AntDesignRightOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignRightSquareFilledIcon],svg[ant-design-right-square-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32M658.7 518.5l-246 178c-5.3 3.8-12.7 0-12.7-6.5v-46.9c0-10.2 4.9-19.9 13.2-25.9L558.6 512L413.2 406.8c-8.3-6-13.2-15.6-13.2-25.9V334c0-6.5 7.4-10.3 12.7-6.5l246 178c4.4 3.2 4.4 9.8 0 13"></svg:path>`,
})
export class AntDesignRightSquareFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignRightSquareOutlinedIcon],svg[ant-design-right-square-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m412.7 696.5l246-178c4.4-3.2 4.4-9.7 0-12.9l-246-178c-5.3-3.8-12.7 0-12.7 6.5V381c0 10.2 4.9 19.9 13.2 25.9L558.6 512L413.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5"></svg:path><svg:path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32m-40 728H184V184h656z"></svg:path>`,
})
export class AntDesignRightSquareOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignRightSquareTwotoneIcon],svg[ant-design-right-square-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32m-40 728H184V184h656z"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="M184 840h656V184H184zm216-196.9c0-10.2 4.9-19.9 13.2-25.9L558.6 512L413.2 406.8c-8.3-6-13.2-15.6-13.2-25.9V334c0-6.5 7.4-10.3 12.7-6.5l246 178c4.4 3.2 4.4 9.7 0 12.9l-246 178c-5.3 3.9-12.7.1-12.7-6.4z"></svg:path><svg:path fill="currentColor" d="m412.7 696.4l246-178c4.4-3.2 4.4-9.7 0-12.9l-246-178c-5.3-3.8-12.7 0-12.7 6.5v46.9c0 10.3 4.9 19.9 13.2 25.9L558.6 512L413.2 617.2c-8.3 6-13.2 15.7-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.4"></svg:path>`,
})
export class AntDesignRightSquareTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignRiseOutlinedIcon],svg[ant-design-rise-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m917 211.1l-199.2 24c-6.6.8-9.4 8.9-4.7 13.6l59.3 59.3l-226 226l-101.8-101.7c-6.3-6.3-16.4-6.2-22.6 0L100.3 754.1a8.03 8.03 0 0 0 0 11.3l45 45.2c3.1 3.1 8.2 3.1 11.3 0L433.3 534L535 635.7c6.3 6.2 16.4 6.2 22.6 0L829 364.5l59.3 59.3a8.01 8.01 0 0 0 13.6-4.7l24-199.2c.7-5.1-3.7-9.5-8.9-8.8"></svg:path>`,
})
export class AntDesignRiseOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignRobotFilledIcon],svg[ant-design-robot-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M852 64H172c-17.7 0-32 14.3-32 32v660c0 17.7 14.3 32 32 32h680c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32M300 328c0-33.1 26.9-60 60-60s60 26.9 60 60s-26.9 60-60 60s-60-26.9-60-60m372 248c0 4.4-3.6 8-8 8H360c-4.4 0-8-3.6-8-8v-60c0-4.4 3.6-8 8-8h304c4.4 0 8 3.6 8 8zm-8-188c-33.1 0-60-26.9-60-60s26.9-60 60-60s60 26.9 60 60s-26.9 60-60 60m135 476H225c-13.8 0-25 14.3-25 32v56c0 4.4 2.8 8 6.2 8h611.5c3.4 0 6.2-3.6 6.2-8v-56c.1-17.7-11.1-32-24.9-32"></svg:path>`,
})
export class AntDesignRobotFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignRobotOutlinedIcon],svg[ant-design-robot-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M300 328a60 60 0 1 0 120 0a60 60 0 1 0-120 0M852 64H172c-17.7 0-32 14.3-32 32v660c0 17.7 14.3 32 32 32h680c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32m-32 660H204V128h616zM604 328a60 60 0 1 0 120 0a60 60 0 1 0-120 0m250.2 556H169.8c-16.5 0-29.8 14.3-29.8 32v36c0 4.4 3.3 8 7.4 8h729.1c4.1 0 7.4-3.6 7.4-8v-36c.1-17.7-13.2-32-29.7-32M664 508H360c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h304c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8"></svg:path>`,
})
export class AntDesignRobotOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignRocketFilledIcon],svg[ant-design-rocket-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M864 736c0-111.6-65.4-208-160-252.9V317.3c0-15.1-5.3-29.7-15.1-41.2L536.5 95.4C530.1 87.8 521 84 512 84s-18.1 3.8-24.5 11.4L335.1 276.1a63.97 63.97 0 0 0-15.1 41.2v165.8C225.4 528 160 624.4 160 736h156.5c-2.3 7.2-3.5 15-3.5 23.8c0 22.1 7.6 43.7 21.4 60.8a97.2 97.2 0 0 0 43.1 30.6c23.1 54 75.6 88.8 134.5 88.8c29.1 0 57.3-8.6 81.4-24.8c23.6-15.8 41.9-37.9 53-64a97 97 0 0 0 43.1-30.5a97.52 97.52 0 0 0 21.4-60.8c0-8.4-1.1-16.4-3.1-23.8zM512 352a48.01 48.01 0 0 1 0 96a48.01 48.01 0 0 1 0-96m116.1 432.2c-5.2 3-11.2 4.2-17.1 3.4l-19.5-2.4l-2.8 19.4c-5.4 37.9-38.4 66.5-76.7 66.5s-71.3-28.6-76.7-66.5l-2.8-19.5l-19.5 2.5a27.7 27.7 0 0 1-17.1-3.5c-8.7-5-14.1-14.3-14.1-24.4c0-10.6 5.9-19.4 14.6-23.8h231.3c8.8 4.5 14.6 13.3 14.6 23.8c-.1 10.2-5.5 19.6-14.2 24.5"></svg:path>`,
})
export class AntDesignRocketFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignRocketOutlinedIcon],svg[ant-design-rocket-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M864 736c0-111.6-65.4-208-160-252.9V317.3c0-15.1-5.3-29.7-15.1-41.2L536.5 95.4C530.1 87.8 521 84 512 84s-18.1 3.8-24.5 11.4L335.1 276.1a63.97 63.97 0 0 0-15.1 41.2v165.8C225.4 528 160 624.4 160 736h156.5c-2.3 7.2-3.5 15-3.5 23.8c0 22.1 7.6 43.7 21.4 60.8a97.2 97.2 0 0 0 43.1 30.6c23.1 54 75.6 88.8 134.5 88.8c29.1 0 57.3-8.6 81.4-24.8c23.6-15.8 41.9-37.9 53-64a97 97 0 0 0 43.1-30.5a97.52 97.52 0 0 0 21.4-60.8c0-8.4-1.1-16.4-3.1-23.8H864zM762.3 621.4c9.4 14.6 17 30.3 22.5 46.6H700V558.7a211.6 211.6 0 0 1 62.3 62.7M388 483.1V318.8l124-147l124 147V668H388zM239.2 668c5.5-16.3 13.1-32 22.5-46.6c16.3-25.2 37.5-46.5 62.3-62.7V668zm388.9 116.2c-5.2 3-11.2 4.2-17.1 3.4l-19.5-2.4l-2.8 19.4c-5.4 37.9-38.4 66.5-76.7 66.5s-71.3-28.6-76.7-66.5l-2.8-19.5l-19.5 2.5a27.7 27.7 0 0 1-17.1-3.5c-8.7-5-14.1-14.3-14.1-24.4c0-10.6 5.9-19.4 14.6-23.8h231.3c8.8 4.5 14.6 13.3 14.6 23.8c-.1 10.2-5.5 19.6-14.2 24.5M464 400a48 48 0 1 0 96 0a48 48 0 1 0-96 0"></svg:path>`,
})
export class AntDesignRocketOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignRocketTwotoneIcon],svg[ant-design-rocket-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".15" d="M261.7 621.4c-9.4 14.6-17 30.3-22.5 46.6H324V558.7c-24.8 16.2-46 37.5-62.3 62.7M700 558.7V668h84.8c-5.5-16.3-13.1-32-22.5-46.6a211.6 211.6 0 0 0-62.3-62.7m-64-239.9l-124-147l-124 147V668h248zM512 448a48.01 48.01 0 0 1 0-96a48.01 48.01 0 0 1 0 96"></svg:path><svg:path fill="currentColor" d="M864 736c0-111.6-65.4-208-160-252.9V317.3c0-15.1-5.3-29.7-15.1-41.2L536.5 95.4C530.1 87.8 521 84 512 84s-18.1 3.8-24.5 11.4L335.1 276.1a63.97 63.97 0 0 0-15.1 41.2v165.8C225.4 528 160 624.4 160 736h156.5c-2.3 7.2-3.5 15-3.5 23.8c0 22.1 7.6 43.7 21.4 60.8a97.2 97.2 0 0 0 43.1 30.6c23.1 54 75.6 88.8 134.5 88.8c29.1 0 57.3-8.6 81.4-24.8c23.6-15.8 41.9-37.9 53-64a97 97 0 0 0 43.1-30.5a97.52 97.52 0 0 0 21.4-60.8c0-8.4-1.1-16.4-3.1-23.8zm-540-68h-84.8c5.5-16.3 13.1-32 22.5-46.6c16.3-25.2 37.5-46.5 62.3-62.7zm64-184.9V318.8l124-147l124 147V668H388zm240.1 301.1c-5.2 3-11.2 4.2-17.1 3.4l-19.5-2.4l-2.8 19.4c-5.4 37.9-38.4 66.5-76.7 66.5s-71.3-28.6-76.7-66.5l-2.8-19.5l-19.5 2.5a27.7 27.7 0 0 1-17.1-3.5c-8.7-5-14.1-14.3-14.1-24.4c0-10.6 5.9-19.4 14.6-23.8h231.3c8.8 4.5 14.6 13.3 14.6 23.8c-.1 10.2-5.5 19.6-14.2 24.5M700 668V558.7a211.6 211.6 0 0 1 62.3 62.7c9.4 14.6 17 30.3 22.5 46.6z"></svg:path><svg:path fill="currentColor" d="M464 400a48 48 0 1 0 96 0a48 48 0 1 0-96 0"></svg:path>`,
})
export class AntDesignRocketTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignRollbackOutlinedIcon],svg[ant-design-rollback-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M793 242H366v-74c0-6.7-7.7-10.4-12.9-6.3l-142 112a8 8 0 0 0 0 12.6l142 112c5.2 4.1 12.9.4 12.9-6.3v-74h415v470H175c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h618c35.3 0 64-28.7 64-64V306c0-35.3-28.7-64-64-64"></svg:path>`,
})
export class AntDesignRollbackOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignRotateLeftOutlinedIcon],svg[ant-design-rotate-left-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M672 418H144c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32m-44 402H188V494h440z"></svg:path><svg:path fill="currentColor" d="M819.3 328.5c-78.8-100.7-196-153.6-314.6-154.2l-.2-64c0-6.5-7.6-10.1-12.6-6.1l-128 101c-4 3.1-3.9 9.1 0 12.3L492 318.6c5.1 4 12.7.4 12.6-6.1v-63.9c12.9.1 25.9.9 38.8 2.5c42.1 5.2 82.1 18.2 119 38.7c38.1 21.2 71.2 49.7 98.4 84.3c27.1 34.7 46.7 73.7 58.1 115.8c11 40.7 14 82.7 8.9 124.8c-.7 5.4-1.4 10.8-2.4 16.1h74.9c14.8-103.6-11.3-213-81-302.3"></svg:path>`,
})
export class AntDesignRotateLeftOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignRotateRightOutlinedIcon],svg[ant-design-rotate-right-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M480.5 251.2c13-1.6 25.9-2.4 38.8-2.5v63.9c0 6.5 7.5 10.1 12.6 6.1L660 217.6c4-3.2 4-9.2 0-12.3l-128-101c-5.1-4-12.6-.4-12.6 6.1l-.2 64c-118.6.5-235.8 53.4-314.6 154.2c-69.6 89.2-95.7 198.6-81.1 302.4h74.9c-.9-5.3-1.7-10.7-2.4-16.1c-5.1-42.1-2.1-84.1 8.9-124.8c11.4-42.2 31-81.1 58.1-115.8c27.2-34.7 60.3-63.2 98.4-84.3c37-20.6 76.9-33.6 119.1-38.8"></svg:path><svg:path fill="currentColor" d="M880 418H352c-17.7 0-32 14.3-32 32v414c0 17.7 14.3 32 32 32h528c17.7 0 32-14.3 32-32V450c0-17.7-14.3-32-32-32m-44 402H396V494h440z"></svg:path>`,
})
export class AntDesignRotateRightOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignRubyOutlinedIcon],svg[ant-design-ruby-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M509.815 112.02q-1.103.074-2.2.213h-4.328l-3.406 1.703a36.3 36.3 0 0 0-8.87 4.4l-145.96 73.013l-153.695 153.692l-72.66 145.247a36.3 36.3 0 0 0-4.897 9.863l-1.561 3.122v3.974a36.3 36.3 0 0 0 0 8.302v298.229l6.883 9.508c5.975 8.28 12.713 16.544 20.578 24.41c37.856 37.854 87.664 57.169 142.625 62.015a36.3 36.3 0 0 0 11.566 1.774h575.753c3.14.534 6.337.654 9.508.355a36 36 0 0 0 2.554-.355h29.803V881.54a36.3 36.3 0 0 0 0-11.92V293.88a36.3 36.3 0 0 0-1.774-11.566c-4.848-54.956-24.165-104.757-62.017-142.622h-.071v-.07c-7.85-7.807-16.071-14.49-24.268-20.436l-9.58-6.954h-298.66a36 36 0 0 0-5.322-.213m133.188 72.872h145.96c2.467 2.081 5.248 4.054 7.451 6.245c26.585 26.63 40.964 64.743 42.291 111.188zm-132.691 5.11l65.707 39.38l-25.474 156.104l-64.359 64.357l-100.69 100.687l-156.107 25.473l-39.381-65.705l61.095-122.258L388.05 251.095zm132.762 79.612l123.183 73.937l-138.084 17.242zm178.814 140.21c-21.21 68.248-62.66 142.573-122.402 211.875l-65.85-188.389zm-252.54 59.603l53.645 153.55l-153.553-53.643l68.12-68.119zm269.499 81.032v236.994L738.44 687.05c40.102-43.738 73.727-89.827 100.406-136.59m-478.044 77.697L343.56 766.238l-73.938-123.18zm72.52 5.464l188.322 65.847c-69.283 59.712-143.574 101.195-211.81 122.4zm-248.424 9.366l117.435 195.698c-46.5-1.327-84.636-15.736-111.262-42.361c-2.161-2.162-4.113-4.939-6.173-7.38zm502.169 95.436l100.405 100.404h-237c46.768-26.68 92.86-60.308 136.595-100.404"></svg:path>`,
})
export class AntDesignRubyOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSafetyCertificateFilledIcon],svg[ant-design-safety-certificate-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2M694.5 340.7L481.9 633.4a16.1 16.1 0 0 1-26 0l-126.4-174c-3.8-5.3 0-12.7 6.5-12.7h55.2c5.1 0 10 2.5 13 6.6l64.7 89l150.9-207.8c3-4.1 7.8-6.6 13-6.6H688c6.5.1 10.3 7.5 6.5 12.8"></svg:path>`,
})
export class AntDesignSafetyCertificateFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSafetyCertificateOutlinedIcon],svg[ant-design-safety-certificate-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2M810 654.3L512 886.5L214 654.3V226.7l298-101.6l298 101.6zm-405.8-201c-3-4.1-7.8-6.6-13-6.6H336c-6.5 0-10.3 7.4-6.5 12.7l126.4 174a16.1 16.1 0 0 0 26 0l212.6-292.7c3.8-5.3 0-12.7-6.5-12.7h-55.2c-5.1 0-10 2.5-13 6.6L468.9 542.4z"></svg:path>`,
})
export class AntDesignSafetyCertificateOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSafetyCertificateTwotoneIcon],svg[ant-design-safety-certificate-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2M810 654.3L512 886.5L214 654.3V226.7l298-101.6l298 101.6z"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="M214 226.7v427.6l298 232.2l298-232.2V226.7L512 125.1zM632.8 328H688c6.5 0 10.3 7.4 6.5 12.7L481.9 633.4a16.1 16.1 0 0 1-26 0l-126.4-174c-3.8-5.3 0-12.7 6.5-12.7h55.2c5.2 0 10 2.5 13 6.6l64.7 89.1l150.9-207.8c3-4.1 7.9-6.6 13-6.6"></svg:path><svg:path fill="currentColor" d="M404.2 453.3c-3-4.1-7.8-6.6-13-6.6H336c-6.5 0-10.3 7.4-6.5 12.7l126.4 174a16.1 16.1 0 0 0 26 0l212.6-292.7c3.8-5.3 0-12.7-6.5-12.7h-55.2c-5.1 0-10 2.5-13 6.6L468.9 542.4z"></svg:path>`,
})
export class AntDesignSafetyCertificateTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSafetyOutlinedIcon],svg[ant-design-safety-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 64L128 192v384c0 212.1 171.9 384 384 384s384-171.9 384-384V192zm312 512c0 172.3-139.7 312-312 312S200 748.3 200 576V246l312-110l312 110z"></svg:path><svg:path fill="currentColor" d="M378.4 475.1a35.91 35.91 0 0 0-50.9 0a35.91 35.91 0 0 0 0 50.9l129.4 129.4l2.1 2.1a33.98 33.98 0 0 0 48.1 0L730.6 434a33.98 33.98 0 0 0 0-48.1l-2.8-2.8a33.98 33.98 0 0 0-48.1 0L483 579.7z"></svg:path>`,
})
export class AntDesignSafetyOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSaveFilledIcon],svg[ant-design-save-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M893.3 293.3L730.7 130.7c-12-12-28.3-18.7-45.3-18.7H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2M384 176h256v112H384zm128 554c-79.5 0-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144s-64.5 144-144 144m0-224c-44.2 0-80 35.8-80 80s35.8 80 80 80s80-35.8 80-80s-35.8-80-80-80"></svg:path>`,
})
export class AntDesignSaveFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSaveOutlinedIcon],svg[ant-design-save-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2M384 184h256v104H384zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144m0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80"></svg:path>`,
})
export class AntDesignSaveOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSaveTwotoneIcon],svg[ant-design-save-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".15" d="M704 320c0 17.7-14.3 32-32 32H352c-17.7 0-32-14.3-32-32V184H184v656h656V341.8l-136-136zM512 730c-79.5 0-144-64.5-144-144s64.5-144 144-144s144 64.5 144 144s-64.5 144-144 144"></svg:path><svg:path fill="currentColor" d="M512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144s144-64.5 144-144s-64.5-144-144-144m0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80s80 35.8 80 80s-35.8 80-80 80"></svg:path><svg:path fill="currentColor" d="M893.3 293.3L730.7 130.7c-.7-.7-1.4-1.3-2.1-2c-.1-.1-.3-.2-.4-.3c-.7-.7-1.5-1.3-2.2-1.9a64 64 0 0 0-22-11.7V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2M384 184h256v104H384zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136z"></svg:path>`,
})
export class AntDesignSaveTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignScanOutlinedIcon],svg[ant-design-scan-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 384h56c4.4 0 8-3.6 8-8V200h176c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H196c-37.6 0-68 30.4-68 68v180c0 4.4 3.6 8 8 8m512-184h176v176c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V196c0-37.6-30.4-68-68-68H648c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8M376 824H200V648c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v180c0 37.6 30.4 68 68 68h180c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m512-184h-56c-4.4 0-8 3.6-8 8v176H648c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h180c37.6 0 68-30.4 68-68V648c0-4.4-3.6-8-8-8m16-164H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8"></svg:path>`,
})
export class AntDesignScanOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignScheduleFilledIcon],svg[ant-design-schedule-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928 224H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32M424 688c0 4.4-3.6 8-8 8H232c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8zm0-136c0 4.4-3.6 8-8 8H232c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8zm374.5-91.3l-165 228.7a15.9 15.9 0 0 1-25.8 0L493.5 531.2c-3.8-5.3 0-12.7 6.5-12.7h54.9c5.1 0 9.9 2.5 12.9 6.6l52.8 73.1l103.7-143.7c3-4.2 7.8-6.6 12.9-6.6H792c6.5.1 10.3 7.5 6.5 12.8"></svg:path>`,
})
export class AntDesignScheduleFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignScheduleOutlinedIcon],svg[ant-design-schedule-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928 224H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32m-40 568H136V296h120v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h120zM416 496H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8m0 136H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8m308.2-177.4L620.6 598.3l-52.8-73.1c-3-4.2-7.8-6.6-12.9-6.6H500c-6.5 0-10.3 7.4-6.5 12.7l114.1 158.2a15.9 15.9 0 0 0 25.8 0l165-228.7c3.8-5.3 0-12.7-6.5-12.7H737c-5-.1-9.8 2.4-12.8 6.5"></svg:path>`,
})
export class AntDesignScheduleOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignScheduleTwotoneIcon],svg[ant-design-schedule-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".15" d="M768 352c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-56H548v56c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-56H328v56c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-56H136v496h752V296H768zM424 688c0 4.4-3.6 8-8 8H232c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8zm0-136c0 4.4-3.6 8-8 8H232c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h184c4.4 0 8 3.6 8 8zm374.4-91.2l-165 228.7a15.9 15.9 0 0 1-25.8 0L493.5 531.3c-3.8-5.3 0-12.7 6.5-12.7h54.9c5.1 0 9.9 2.4 12.9 6.6l52.8 73.1l103.6-143.7c3-4.1 7.8-6.6 12.8-6.5h54.9c6.5 0 10.3 7.4 6.5 12.7"></svg:path><svg:path fill="currentColor" d="M724.2 454.6L620.6 598.3l-52.8-73.1c-3-4.2-7.8-6.6-12.9-6.6H500c-6.5 0-10.3 7.4-6.5 12.7l114.1 158.2a15.9 15.9 0 0 0 25.8 0l165-228.7c3.8-5.3 0-12.7-6.5-12.7H737c-5-.1-9.8 2.4-12.8 6.5M416 496H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8"></svg:path><svg:path fill="currentColor" d="M928 224H768v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H548v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H328v-56c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v56H96c-17.7 0-32 14.3-32 32v576c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V256c0-17.7-14.3-32-32-32m-40 568H136V296h120v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h148v56c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-56h120z"></svg:path><svg:path fill="currentColor" d="M416 632H232c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8"></svg:path>`,
})
export class AntDesignScheduleTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignScissorOutlinedIcon],svg[ant-design-scissor-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m567.1 512l318.5-319.3c5-5 1.5-13.7-5.6-13.7h-90.5c-2.1 0-4.2.8-5.6 2.3l-273.3 274l-90.2-90.5c12.5-22.1 19.7-47.6 19.7-74.8c0-83.9-68.1-152-152-152s-152 68.1-152 152s68.1 152 152 152c27.7 0 53.6-7.4 75.9-20.3l90 90.3l-90.1 90.3A151.04 151.04 0 0 0 288 582c-83.9 0-152 68.1-152 152s68.1 152 152 152s152-68.1 152-152c0-27.2-7.2-52.7-19.7-74.8l90.2-90.5l273.3 274c1.5 1.5 3.5 2.3 5.6 2.3H880c7.1 0 10.7-8.6 5.6-13.7zM288 370c-44.1 0-80-35.9-80-80s35.9-80 80-80s80 35.9 80 80s-35.9 80-80 80m0 444c-44.1 0-80-35.9-80-80s35.9-80 80-80s80 35.9 80 80s-35.9 80-80 80"></svg:path>`,
})
export class AntDesignScissorOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSearchOutlinedIcon],svg[ant-design-search-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1S492.1 112 412 112s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6M570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4"></svg:path>`,
})
export class AntDesignSearchOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSecurityScanFilledIcon],svg[ant-design-security-scan-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2M626.8 554c-48.5 48.5-123 55.2-178.6 20.1l-77.5 77.5a8.03 8.03 0 0 1-11.3 0l-34-34a8.03 8.03 0 0 1 0-11.3l77.5-77.5c-35.1-55.7-28.4-130.1 20.1-178.6c56.3-56.3 147.5-56.3 203.8 0s56.3 147.5 0 203.8m-158.54-45.27a80.1 80.1 0 1 0 113.27-113.28a80.1 80.1 0 1 0-113.27 113.28"></svg:path>`,
})
export class AntDesignSecurityScanFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSecurityScanOutlinedIcon],svg[ant-design-security-scan-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2M810 654.3L512 886.5L214 654.3V226.7l298-101.6l298 101.6zM402.9 528.8l-77.5 77.5a8.03 8.03 0 0 0 0 11.3l34 34c3.1 3.1 8.2 3.1 11.3 0l77.5-77.5c55.7 35.1 130.1 28.4 178.6-20.1c56.3-56.3 56.3-147.5 0-203.8s-147.5-56.3-203.8 0c-48.5 48.5-55.2 123-20.1 178.6m65.4-133.3c31.3-31.3 82-31.3 113.2 0c31.3 31.3 31.3 82 0 113.2c-31.3 31.3-82 31.3-113.2 0s-31.3-81.9 0-113.2"></svg:path>`,
})
export class AntDesignSecurityScanOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSecurityScanTwotoneIcon],svg[ant-design-security-scan-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2M810 654.3L512 886.5L214 654.3V226.7l298-101.6l298 101.6z"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="M460.7 451.1a80.1 80.1 0 1 0 160.2 0a80.1 80.1 0 1 0-160.2 0"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="M214 226.7v427.6l298 232.2l298-232.2V226.7L512 125.1zm428.7 122.5c56.3 56.3 56.3 147.5 0 203.8c-48.5 48.5-123 55.2-178.6 20.1l-77.5 77.5a8.03 8.03 0 0 1-11.3 0l-34-34a8.03 8.03 0 0 1 0-11.3l77.5-77.5c-35.1-55.7-28.4-130.1 20.1-178.6c56.3-56.3 147.5-56.3 203.8 0"></svg:path><svg:path fill="currentColor" d="m418.8 527.8l-77.5 77.5a8.03 8.03 0 0 0 0 11.3l34 34c3.1 3.1 8.2 3.1 11.3 0l77.5-77.5c55.6 35.1 130.1 28.4 178.6-20.1c56.3-56.3 56.3-147.5 0-203.8s-147.5-56.3-203.8 0c-48.5 48.5-55.2 122.9-20.1 178.6m65.4-133.3a80.1 80.1 0 0 1 113.3 0a80.1 80.1 0 0 1 0 113.3c-31.3 31.3-82 31.3-113.3 0s-31.3-82 0-113.3"></svg:path>`,
})
export class AntDesignSecurityScanTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSelectOutlinedIcon],svg[ant-design-select-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h360c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H184V184h656v320c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V144c0-17.7-14.3-32-32-32M653.3 599.4l52.2-52.2a8.01 8.01 0 0 0-4.7-13.6l-179.4-21c-5.1-.6-9.5 3.7-8.9 8.9l21 179.4c.8 6.6 8.9 9.4 13.6 4.7l52.4-52.4l256.2 256.2c3.1 3.1 8.2 3.1 11.3 0l42.4-42.4c3.1-3.1 3.1-8.2 0-11.3z"></svg:path>`,
})
export class AntDesignSelectOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSendOutlinedIcon],svg[ant-design-send-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M931.4 498.9L94.9 79.5c-3.4-1.7-7.3-2.1-11-1.2c-8.5 2.1-13.8 10.7-11.7 19.3l86.2 352.2c1.3 5.3 5.2 9.6 10.4 11.3l147.7 50.7l-147.6 50.7c-5.2 1.8-9.1 6-10.3 11.3L72.2 926.5c-.9 3.7-.5 7.6 1.2 10.9c3.9 7.9 13.5 11.1 21.5 7.2l836.5-417c3.1-1.5 5.6-4.1 7.2-7.1c3.9-8 .7-17.6-7.2-21.6M170.8 826.3l50.3-205.6l295.2-101.3c2.3-.8 4.2-2.6 5-5c1.4-4.2-.8-8.7-5-10.2L221.1 403L171 198.2l628 314.9z"></svg:path>`,
})
export class AntDesignSendOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSettingFilledIcon],svg[ant-design-setting-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512.5 390.6c-29.9 0-57.9 11.6-79.1 32.8c-21.1 21.2-32.8 49.2-32.8 79.1s11.7 57.9 32.8 79.1c21.2 21.1 49.2 32.8 79.1 32.8s57.9-11.7 79.1-32.8c21.1-21.2 32.8-49.2 32.8-79.1s-11.7-57.9-32.8-79.1a110.96 110.96 0 0 0-79.1-32.8m412.3 235.5l-65.4-55.9c3.1-19 4.7-38.4 4.7-57.7s-1.6-38.8-4.7-57.7l65.4-55.9a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a442.5 442.5 0 0 0-79.6-137.7l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.2 28.9c-30-24.6-63.4-44-99.6-57.5l-15.7-84.9a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52-9.4-106.8-9.4-158.8 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.3a353.4 353.4 0 0 0-98.9 57.3l-81.8-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a445.9 445.9 0 0 0-79.6 137.7l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.2 56.5c-3.1 18.8-4.6 38-4.6 57c0 19.2 1.5 38.4 4.6 57l-66 56.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.3 44.8 96.8 79.6 137.7l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.8-29.1c29.8 24.5 63 43.9 98.9 57.3l15.8 85.3a32.05 32.05 0 0 0 25.8 25.7l2.7.5a448.3 448.3 0 0 0 158.8 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-84.9c36.2-13.6 69.6-32.9 99.6-57.5l81.2 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.5-87.4 79.6-137.7l.9-2.6c4.3-12.4.6-26.3-9.5-35m-412.3 52.2c-97.1 0-175.8-78.7-175.8-175.8s78.7-175.8 175.8-175.8s175.8 78.7 175.8 175.8s-78.7 175.8-175.8 175.8"></svg:path>`,
})
export class AntDesignSettingFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSettingOutlinedIcon],svg[ant-design-setting-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a443.7 443.7 0 0 0-79.7-137.9l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.4a351.9 351.9 0 0 0-99 57.4l-81.9-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a446 446 0 0 0-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1c0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0 0 25.8 25.7l2.7.5a449.4 449.4 0 0 0 159 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-85a350 350 0 0 0 99.7-57.6l81.3 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35M788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1l74.7 63.9a370 370 0 0 1-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3l-17.9 97a377.5 377.5 0 0 1-85 0l-17.9-97.2l-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9l-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5l-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5c0-15.3 1.2-30.6 3.7-45.5l6.5-40l-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2l31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3l17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97l38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8l92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176s176-78.8 176-176s-78.8-176-176-176m79.2 255.2A111.6 111.6 0 0 1 512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390s58 11.6 79.2 32.8A111.6 111.6 0 0 1 624 502c0 29.9-11.7 58-32.8 79.2"></svg:path>`,
})
export class AntDesignSettingOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSettingTwotoneIcon],svg[ant-design-setting-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".15" d="m859.3 569.7l.2.1c3.1-18.9 4.6-38.2 4.6-57.3c0-17.1-1.3-34.3-3.7-51.1c2.4 16.7 3.6 33.6 3.6 50.5c0 19.4-1.6 38.8-4.7 57.8M99 398.1c-.5-.4-.9-.8-1.4-1.3c.7.7 1.4 1.4 2.2 2.1l65.5 55.9v-.1zm536.6-216h.1l-15.5-83.8c-.2-1-.4-1.9-.7-2.8c.1.5.3 1.1.4 1.6zm54 546.5l31.4-25.8l92.8 32.9c17-22.9 31.3-47.5 42.6-73.6l-74.7-63.9l6.6-40.1c2.5-15.1 3.8-30.6 3.8-46.1s-1.3-31-3.8-46.1l-6.5-39.9l74.7-63.9c-11.4-26-25.6-50.7-42.6-73.6l-92.8 32.9l-31.4-25.8c-23.9-19.6-50.6-35-79.3-45.8l-38.1-14.3l-17.9-97a377.5 377.5 0 0 0-85 0l-17.9 97.2l-37.9 14.3c-28.5 10.8-55 26.2-78.7 45.7l-31.4 25.9l-93.4-33.2c-17 22.9-31.3 47.5-42.6 73.6l75.5 64.5l-6.5 40c-2.5 14.9-3.7 30.2-3.7 45.5c0 15.2 1.3 30.6 3.7 45.5l6.5 40l-75.5 64.5c11.4 26 25.6 50.7 42.6 73.6l93.4-33.2l31.4 25.9c23.7 19.5 50.2 34.9 78.7 45.7l37.8 14.5l17.9 97.2c28.2 3.2 56.9 3.2 85 0l17.9-97l38.1-14.3c28.8-10.8 55.4-26.2 79.3-45.8m-177.1-50.3c-30.5 0-59.2-7.8-84.3-21.5C373.3 627 336 568.9 336 502c0-97.2 78.8-176 176-176c66.9 0 125 37.3 154.8 92.2c13.7 25 21.5 53.7 21.5 84.3c0 97.1-78.7 175.8-175.8 175.8M207.2 812.8c-5.5 1.9-11.2 2.3-16.6 1.2c5.7 1.2 11.7 1 17.5-1l81.4-29c-.1-.1-.3-.2-.4-.3zm717.6-414.7l-65.5 56c0 .2.1.5.1.7l65.4-55.9c7.1-6.1 11.1-14.9 11.2-24c-.3 8.8-4.3 17.3-11.2 23.2"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="M935.8 646.6c.5 4.7 0 9.5-1.7 14.1l-.9 2.6a446 446 0 0 1-79.7 137.9l-1.8 2.1a32 32 0 0 1-35.1 9.5l-81.3-28.9a350 350 0 0 1-99.7 57.6l-15.7 85a32.05 32.05 0 0 1-25.8 25.7l-2.7.5a445 445 0 0 1-79.2 7.1h.3c26.7 0 53.4-2.4 79.4-7.1l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-84.9c36.2-13.6 69.6-32.9 99.6-57.5l81.2 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.5-87.4 79.6-137.7l.9-2.6c1.6-4.7 2.1-9.7 1.5-14.5"></svg:path><svg:path fill="currentColor" d="M688 502c0-30.3-7.7-58.9-21.2-83.8C637 363.3 578.9 326 512 326c-97.2 0-176 78.8-176 176c0 66.9 37.3 125 92.2 154.8c24.9 13.5 53.4 21.2 83.8 21.2c97.2 0 176-78.8 176-176m-288 0c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390s58 11.6 79.2 32.8A111.6 111.6 0 0 1 624 502c0 29.9-11.7 58-32.8 79.2A111.6 111.6 0 0 1 512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 502"></svg:path><svg:path fill="currentColor" d="M594.1 952.2a32.05 32.05 0 0 0 25.8-25.7l15.7-85a350 350 0 0 0 99.7-57.6l81.3 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c1.7-4.6 2.2-9.4 1.7-14.1c-.9-7.9-4.7-15.4-11-20.9l-65.3-55.9l-.2-.1c3.1-19 4.7-38.4 4.7-57.8c0-16.9-1.2-33.9-3.6-50.5c-.3-2.2-.7-4.4-1-6.6c0-.2-.1-.5-.1-.7l65.5-56c6.9-5.9 10.9-14.4 11.2-23.2c.1-4-.5-8.1-1.9-12l-.9-2.6a443.7 443.7 0 0 0-79.7-137.9l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.3 28.9c-30-24.6-63.4-44-99.6-57.6h-.1l-15.7-85c-.1-.5-.2-1.1-.4-1.6a32.08 32.08 0 0 0-25.4-24.1l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.4a351.9 351.9 0 0 0-99 57.4l-81.9-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a446 446 0 0 0-79.7 137.9l-.9 2.6a32.09 32.09 0 0 0 7.9 33.9c.5.4.9.9 1.4 1.3l66.3 56.6v.1c-3.1 18.8-4.6 37.9-4.6 57c0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1c4.9 5.7 11.4 9.4 18.5 10.7c5.4 1 11.1.7 16.6-1.2l81.9-29.1c.1.1.3.2.4.3c29.7 24.3 62.8 43.6 98.6 57.1l15.8 85.4a32.05 32.05 0 0 0 25.8 25.7l2.7.5c26.1 4.7 52.8 7.1 79.5 7.1h.3c26.6 0 53.3-2.4 79.2-7.1zm-39.8-66.5a377.5 377.5 0 0 1-85 0l-17.9-97.2l-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9l-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5l-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5c0-15.3 1.2-30.6 3.7-45.5l6.5-40l-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2l31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3l17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97l38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8l92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1l74.7 63.9a370 370 0 0 1-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3z"></svg:path>`,
})
export class AntDesignSettingTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignShakeOutlinedIcon],svg[ant-design-shake-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M324 666a48 48 0 1 0 96 0a48 48 0 1 0-96 0m616.7-309.6L667.6 83.2C655.2 70.9 638.7 64 621.1 64s-34.1 6.8-46.5 19.2L83.3 574.5a65.85 65.85 0 0 0 0 93.1l273.2 273.2c12.3 12.3 28.9 19.2 46.5 19.2s34.1-6.8 46.5-19.2l491.3-491.3c25.6-25.7 25.6-67.5-.1-93.1M403 880.1L143.9 621l477.2-477.2l259 259.2zM152.8 373.7a7.9 7.9 0 0 0 11.2 0L373.7 164a7.9 7.9 0 0 0 0-11.2l-38.4-38.4a7.9 7.9 0 0 0-11.2 0L114.3 323.9a7.9 7.9 0 0 0 0 11.2zm718.6 276.6a7.9 7.9 0 0 0-11.2 0L650.3 860.1a7.9 7.9 0 0 0 0 11.2l38.4 38.4a7.9 7.9 0 0 0 11.2 0L909.7 700a7.9 7.9 0 0 0 0-11.2z"></svg:path>`,
})
export class AntDesignShakeOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignShareAltOutlinedIcon],svg[ant-design-share-alt-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M752 664c-28.5 0-54.8 10-75.4 26.7L469.4 540.8a160.7 160.7 0 0 0 0-57.6l207.2-149.9C697.2 350 723.5 360 752 360c66.2 0 120-53.8 120-120s-53.8-120-120-120s-120 53.8-120 120c0 11.6 1.6 22.7 4.7 33.3L439.9 415.8C410.7 377.1 364.3 352 312 352c-88.4 0-160 71.6-160 160s71.6 160 160 160c52.3 0 98.7-25.1 127.9-63.8l196.8 142.5c-3.1 10.6-4.7 21.8-4.7 33.3c0 66.2 53.8 120 120 120s120-53.8 120-120s-53.8-120-120-120m0-476c28.7 0 52 23.3 52 52s-23.3 52-52 52s-52-23.3-52-52s23.3-52 52-52M312 600c-48.5 0-88-39.5-88-88s39.5-88 88-88s88 39.5 88 88s-39.5 88-88 88m440 236c-28.7 0-52-23.3-52-52s23.3-52 52-52s52 23.3 52 52s-23.3 52-52 52"></svg:path>`,
})
export class AntDesignShareAltOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignShopFilledIcon],svg[ant-design-shop-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M882 272.1V144c0-17.7-14.3-32-32-32H174c-17.7 0-32 14.3-32 32v128.1c-16.7 1-30 14.9-30 31.9v131.7a177 177 0 0 0 14.4 70.4c4.3 10.2 9.6 19.8 15.6 28.9v345c0 17.6 14.3 32 32 32h274V736h128v176h274c17.7 0 32-14.3 32-32V535a175 175 0 0 0 15.6-28.9c9.5-22.3 14.4-46 14.4-70.4V304c0-17-13.3-30.9-30-31.9m-72 568H640V704c0-17.7-14.3-32-32-32H416c-17.7 0-32 14.3-32 32v136.1H214V597.9c2.9 1.4 5.9 2.8 9 4c22.3 9.4 46 14.1 70.4 14.1s48-4.7 70.4-14.1c13.8-5.8 26.8-13.2 38.7-22.1q.3-.15.6 0a180.4 180.4 0 0 0 38.7 22.1c22.3 9.4 46 14.1 70.4 14.1s48-4.7 70.4-14.1c13.8-5.8 26.8-13.2 38.7-22.1q.3-.15.6 0a180.4 180.4 0 0 0 38.7 22.1c22.3 9.4 46 14.1 70.4 14.1s48-4.7 70.4-14.1c3-1.3 6-2.6 9-4v242.2zm0-568.1H214v-88h596z"></svg:path>`,
})
export class AntDesignShopFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignShopOutlinedIcon],svg[ant-design-shop-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M882 272.1V144c0-17.7-14.3-32-32-32H174c-17.7 0-32 14.3-32 32v128.1c-16.7 1-30 14.9-30 31.9v131.7a177 177 0 0 0 14.4 70.4c4.3 10.2 9.6 19.8 15.6 28.9v345c0 17.6 14.3 32 32 32h676c17.7 0 32-14.3 32-32V535a175 175 0 0 0 15.6-28.9c9.5-22.3 14.4-46 14.4-70.4V304c0-17-13.3-30.9-30-31.9M214 184h596v88H214zm362 656.1H448V736h128zm234 0H640V704c0-17.7-14.3-32-32-32H416c-17.7 0-32 14.3-32 32v136.1H214V597.9c2.9 1.4 5.9 2.8 9 4c22.3 9.4 46 14.1 70.4 14.1s48-4.7 70.4-14.1c13.8-5.8 26.8-13.2 38.7-22.1q.3-.15.6 0a180.4 180.4 0 0 0 38.7 22.1c22.3 9.4 46 14.1 70.4 14.1s48-4.7 70.4-14.1c13.8-5.8 26.8-13.2 38.7-22.1q.3-.15.6 0a180.4 180.4 0 0 0 38.7 22.1c22.3 9.4 46 14.1 70.4 14.1s48-4.7 70.4-14.1c3-1.3 6-2.6 9-4v242.2zm30-404.4c0 59.8-49 108.3-109.3 108.3c-40.8 0-76.4-22.1-95.2-54.9c-2.9-5-8.1-8.1-13.9-8.1h-.6c-5.7 0-11 3.1-13.9 8.1A109.24 109.24 0 0 1 512 544c-40.7 0-76.2-22-95-54.7c-3-5.1-8.4-8.3-14.3-8.3s-11.4 3.2-14.3 8.3a109.63 109.63 0 0 1-95.1 54.7C233 544 184 495.5 184 435.7v-91.2c0-.3.2-.5.5-.5h655c.3 0 .5.2.5.5z"></svg:path>`,
})
export class AntDesignShopOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignShopTwotoneIcon],svg[ant-design-shop-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".15" d="M839.5 344h-655c-.3 0-.5.2-.5.5v91.2c0 59.8 49 108.3 109.3 108.3c40.7 0 76.2-22 95.1-54.7c2.9-5.1 8.4-8.3 14.3-8.3s11.3 3.2 14.3 8.3c18.8 32.7 54.3 54.7 95 54.7c40.8 0 76.4-22.1 95.1-54.9c2.9-5 8.2-8.1 13.9-8.1h.6c5.8 0 11 3.1 13.9 8.1c18.8 32.8 54.4 54.9 95.2 54.9C791 544 840 495.5 840 435.7v-91.2c0-.3-.2-.5-.5-.5"></svg:path><svg:path fill="currentColor" d="M882 272.1V144c0-17.7-14.3-32-32-32H174c-17.7 0-32 14.3-32 32v128.1c-16.7 1-30 14.9-30 31.9v131.7a177 177 0 0 0 14.4 70.4c4.3 10.2 9.6 19.8 15.6 28.9v345c0 17.6 14.3 32 32 32h676c17.7 0 32-14.3 32-32V535a175 175 0 0 0 15.6-28.9c9.5-22.3 14.4-46 14.4-70.4V304c0-17-13.3-30.9-30-31.9M214 184h596v88H214zm362 656.1H448V736h128zm234.4 0H640V704c0-17.7-14.3-32-32-32H416c-17.7 0-32 14.3-32 32v136.1H214V597.9c2.9 1.4 5.9 2.8 9 4c22.3 9.4 46 14.1 70.4 14.1s48-4.7 70.4-14.1c13.8-5.8 26.8-13.2 38.7-22.1q.3-.15.6 0a180.4 180.4 0 0 0 38.7 22.1c22.3 9.4 46 14.1 70.4 14.1s48-4.7 70.4-14.1c13.8-5.8 26.8-13.2 38.7-22.1q.3-.15.6 0a180.4 180.4 0 0 0 38.7 22.1c22.3 9.4 46 14.1 70.4 14.1s48-4.7 70.4-14.1c3-1.3 6-2.6 9-4zM840 435.7c0 59.8-49 108.3-109.3 108.3c-40.8 0-76.4-22.1-95.2-54.9c-2.9-5-8.1-8.1-13.9-8.1h-.6c-5.7 0-11 3.1-13.9 8.1A109.24 109.24 0 0 1 512 544c-40.7 0-76.2-22-95-54.7c-3-5.1-8.4-8.3-14.3-8.3s-11.4 3.2-14.3 8.3a109.63 109.63 0 0 1-95.1 54.7C233 544 184 495.5 184 435.7v-91.2c0-.3.2-.5.5-.5h655c.3 0 .5.2.5.5z"></svg:path>`,
})
export class AntDesignShopTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignShoppingCartOutlinedIcon],svg[ant-design-shopping-cart-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M922.9 701.9H327.4l29.9-60.9l496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1l-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3l-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2M305.7 253l575.8 1.9l-56.4 315.8l-452.3.8zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6s14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6m325.1 0c-17.4 0-31.6-14.2-31.6-31.6s14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6"></svg:path>`,
})
export class AntDesignShoppingCartOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignShoppingFilledIcon],svg[ant-design-shopping-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32m-208 0H400v-16c0-61.9 50.1-112 112-112s112 50.1 112 112z"></svg:path>`,
})
export class AntDesignShoppingFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignShoppingOutlinedIcon],svg[ant-design-shopping-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32m-432-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16H400zm392 544H232V384h96v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h224v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h96z"></svg:path>`,
})
export class AntDesignShoppingOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignShoppingTwotoneIcon],svg[ant-design-shopping-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".15" d="M696 472c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-88H400v88c0 4.4-3.6 8-8 8h-56c-4.4 0-8-3.6-8-8v-88h-96v456h560V384h-96z"></svg:path><svg:path fill="currentColor" d="M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32m-432-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16H400zm392 544H232V384h96v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h224v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h96z"></svg:path>`,
})
export class AntDesignShoppingTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignShrinkOutlinedIcon],svg[ant-design-shrink-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m881.7 187.4l-45.1-45.1a8.03 8.03 0 0 0-11.3 0L667.8 299.9l-54.7-54.7a7.94 7.94 0 0 0-13.5 4.7L576.1 439c-.6 5.2 3.7 9.5 8.9 8.9l189.2-23.5c6.6-.8 9.3-8.8 4.7-13.5l-54.7-54.7l157.6-157.6c3-3 3-8.1-.1-11.2M439 576.1l-189.2 23.5c-6.6.8-9.3 8.9-4.7 13.5l54.7 54.7l-157.5 157.5a8.03 8.03 0 0 0 0 11.3l45.1 45.1c3.1 3.1 8.2 3.1 11.3 0l157.6-157.6l54.7 54.7a7.94 7.94 0 0 0 13.5-4.7L447.9 585a7.9 7.9 0 0 0-8.9-8.9"></svg:path>`,
})
export class AntDesignShrinkOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSignalFilledIcon],svg[ant-design-signal-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M584 352H440c-17.7 0-32 14.3-32 32v544c0 17.7 14.3 32 32 32h144c17.7 0 32-14.3 32-32V384c0-17.7-14.3-32-32-32M892 64H748c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h144c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32M276 640H132c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32h144c17.7 0 32-14.3 32-32V672c0-17.7-14.3-32-32-32"></svg:path>`,
})
export class AntDesignSignalFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSignatureFilledIcon],svg[ant-design-signature-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M145.713 752c1.994 0 3.988-.2 5.982-.498l168.19-29.508c1.994-.399 3.888-1.296 5.284-2.792l423.915-423.875a9.927 9.927 0 0 0 0-14.056l-166.196-166.38c-1.894-1.894-4.388-2.891-7.079-2.891s-5.184.997-7.078 2.891L144.816 538.766c-1.495 1.496-2.393 3.29-2.791 5.284l-29.511 168.174c-1.894 11.066 1.495 21.932 9.372 29.807c6.58 6.48 14.954 9.969 23.827 9.969m453.113-184.072c27.691-14.812 57.293-20.852 85.545-15.519c32.365 6.11 59.72 26.534 78.96 59.406c29.974 51.211 21.642 102.332-18.484 144.254c-17.577 18.364-41.07 35.013-69.996 50.297l-.293.152l.848.26c13.153 3.956 27.085 6.1 41.54 6.21l1.174.005c61.068 0 100.981-22.104 125.285-67.876c9.325-17.56 31.119-24.237 48.679-14.913c17.56 9.325 24.237 31.119 14.912 48.68c-37.285 70.218-102.092 106.109-188.876 106.109c-47.687 0-91.94-15.03-128.188-41.368l-1.056-.774l-1.36.473c-46.18 15.996-98.732 29.945-155.37 41.932l-2.239.472c-48.571 10.217-97.257 18.377-139.154 23.957c-19.709 2.625-37.813-11.224-40.438-30.932c-2.625-19.709 11.224-37.813 30.932-40.438c40.196-5.353 87.126-13.22 133.84-23.045c42.799-9.002 83.011-19.134 119.357-30.342l.234-.074l-.436-.693c-16.464-26.452-25.857-55.432-26.142-83.24l-.007-1.303c0-49.907 39.555-104.315 90.733-131.69m72.188 55.231c-10.74-2.027-24.099.699-38.228 8.257c-29.546 15.804-52.693 47.643-52.693 68.202c0 18.206 8.889 40.146 24.71 59.736l.238.293l1.223-.514c39.17-16.581 68.483-34.271 85.929-52.186l.64-.663c18.735-19.573 21.386-35.842 8.36-58.1c-9.059-15.475-19.03-22.92-30.18-25.025"></svg:path>`,
})
export class AntDesignSignatureFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSignatureOutlinedIcon],svg[ant-design-signature-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M145.713 752c1.994 0 3.988-.2 5.982-.498l168.19-29.508c1.994-.399 3.888-1.296 5.284-2.792l423.915-423.875a9.927 9.927 0 0 0 0-14.056l-166.196-166.38c-1.894-1.894-4.388-2.891-7.079-2.891s-5.184.997-7.078 2.891L144.816 538.766c-1.495 1.496-2.393 3.29-2.791 5.284l-29.511 168.174c-1.894 11.066 1.495 21.932 9.372 29.807c6.58 6.48 14.954 9.969 23.827 9.969m51.743-85.433l15.653-88.922l362.7-362.667l73.278 73.271l-362.7 362.667zm401.37-98.639c27.691-14.812 57.293-20.852 85.545-15.519c32.365 6.11 59.72 26.534 78.96 59.406c29.974 51.211 21.642 102.332-18.484 144.254c-17.577 18.364-41.07 35.013-69.996 50.297l-.293.152l.848.26c13.153 3.956 27.085 6.1 41.54 6.21l1.174.005c61.068 0 100.981-22.104 125.285-67.876c9.325-17.56 31.119-24.237 48.679-14.913c17.56 9.325 24.237 31.119 14.912 48.68c-37.285 70.218-102.092 106.109-188.876 106.109c-47.687 0-91.94-15.03-128.188-41.368l-1.056-.774l-1.36.473c-46.18 15.996-98.732 29.945-155.37 41.932l-2.239.472c-48.571 10.217-97.257 18.377-139.154 23.957c-19.709 2.625-37.813-11.224-40.438-30.932c-2.625-19.709 11.224-37.813 30.932-40.438c40.196-5.353 87.126-13.22 133.84-23.045c42.799-9.002 83.011-19.134 119.357-30.342l.234-.074l-.436-.693c-16.464-26.452-25.857-55.432-26.142-83.24l-.007-1.303c0-49.907 39.555-104.315 90.733-131.69m72.188 55.231c-10.74-2.027-24.099.699-38.228 8.257c-29.546 15.804-52.693 47.643-52.693 68.202c0 18.206 8.889 40.146 24.71 59.736l.238.293l1.223-.514c39.17-16.581 68.483-34.271 85.929-52.186l.64-.663c18.735-19.573 21.386-35.842 8.36-58.1c-9.059-15.475-19.03-22.92-30.18-25.025"></svg:path>`,
})
export class AntDesignSignatureOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSisternodeOutlinedIcon],svg[ant-design-sisternode-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M672 432c-120.3 0-219.9 88.5-237.3 204H320c-15.5 0-28-12.5-28-28V244h291c14.2 35.2 48.7 60 89 60c53 0 96-43 96-96s-43-96-96-96c-40.3 0-74.8 24.8-89 60H112v72h108v364c0 55.2 44.8 100 100 100h114.7c17.4 115.5 117 204 237.3 204c132.5 0 240-107.5 240-240S804.5 432 672 432m128 266c0 4.4-3.6 8-8 8h-86v86c0 4.4-3.6 8-8 8h-52c-4.4 0-8-3.6-8-8v-86h-86c-4.4 0-8-3.6-8-8v-52c0-4.4 3.6-8 8-8h86v-86c0-4.4 3.6-8 8-8h52c4.4 0 8 3.6 8 8v86h86c4.4 0 8 3.6 8 8z"></svg:path>`,
})
export class AntDesignSisternodeOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSketchCircleFilledIcon],svg[ant-design-sketch-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m582.3 625.6l147.9-166.3h-63.4zm90-202.3h62.5l-92.1-115.1zm-274.7 36L512 684.5l114.4-225.2zM512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m286.7 380.2L515.8 762.3c-1 1.1-2.4 1.7-3.8 1.7s-2.8-.6-3.8-1.7L225.3 444.2a5.14 5.14 0 0 1-.2-6.6L365.6 262c1-1.2 2.4-1.9 4-1.9h284.6c1.6 0 3 .7 4 1.9l140.5 175.6a4.9 4.9 0 0 1 0 6.6m-190.5-20.9L512 326.1l-96.2 97.2zM420.3 301.1l-23.1 89.8l88.8-89.8zm183.4 0H538l88.8 89.8zm-222.4 7.1l-92.1 115.1h62.5zm-87.5 151.1l147.9 166.3l-84.5-166.3z"></svg:path>`,
})
export class AntDesignSketchCircleFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSketchOutlinedIcon],svg[ant-design-sketch-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m925.6 405.1l-203-253.7a6.5 6.5 0 0 0-5-2.4H306.4c-1.9 0-3.8.9-5 2.4l-203 253.7a6.5 6.5 0 0 0 .2 8.3l408.6 459.5c1.2 1.4 3 2.1 4.8 2.1s3.5-.8 4.8-2.1l408.6-459.5a6.5 6.5 0 0 0 .2-8.3M645.2 206.4l34.4 133.9l-132.5-133.9zm8.2 178.5H370.6L512 242zM378.8 206.4h98.1L344.3 340.3zm-53.4 7l-44.1 171.5h-93.1zM194.6 434.9H289l125.8 247.7zM512 763.4L345.1 434.9h333.7zm97.1-80.8L735 434.9h94.4zm133.6-297.7l-44.1-171.5l137.2 171.5z"></svg:path>`,
})
export class AntDesignSketchOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSketchSquareFilledIcon],svg[ant-design-sketch-square-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M608.2 423.3L512 326.1l-96.2 97.2zm-25.9 202.3l147.9-166.3h-63.4zm90-202.3h62.5l-92.1-115.1zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32m-81.3 332.2L515.8 762.3c-1 1.1-2.4 1.7-3.8 1.7s-2.8-.6-3.8-1.7L225.3 444.2a5.14 5.14 0 0 1-.2-6.6L365.6 262c1-1.2 2.4-1.9 4-1.9h284.6c1.6 0 3 .7 4 1.9l140.5 175.6a4.9 4.9 0 0 1 0 6.6m-401.1 15.1L512 684.5l114.4-225.2zm-16.3-151.1l-92.1 115.1h62.5zm-87.5 151.1l147.9 166.3l-84.5-166.3zm126.5-158.2l-23.1 89.8l88.8-89.8zm183.4 0H538l88.8 89.8z"></svg:path>`,
})
export class AntDesignSketchSquareFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSkinFilledIcon],svg[ant-design-skin-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M870 126H663.8c-17.4 0-32.9 11.9-37 29.3C614.3 208.1 567 246 512 246s-102.3-37.9-114.8-90.7a37.93 37.93 0 0 0-37-29.3H154a44 44 0 0 0-44 44v252a44 44 0 0 0 44 44h75v388a44 44 0 0 0 44 44h478a44 44 0 0 0 44-44V466h75a44 44 0 0 0 44-44V170a44 44 0 0 0-44-44"></svg:path>`,
})
export class AntDesignSkinFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSkinOutlinedIcon],svg[ant-design-skin-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M870 126H663.8c-17.4 0-32.9 11.9-37 29.3C614.3 208.1 567 246 512 246s-102.3-37.9-114.8-90.7a37.93 37.93 0 0 0-37-29.3H154a44 44 0 0 0-44 44v252a44 44 0 0 0 44 44h75v388a44 44 0 0 0 44 44h478a44 44 0 0 0 44-44V466h75a44 44 0 0 0 44-44V170a44 44 0 0 0-44-44m-28 268H723v432H301V394H182V198h153.3c28.2 71.2 97.5 120 176.7 120s148.5-48.8 176.7-120H842z"></svg:path>`,
})
export class AntDesignSkinOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSkinTwotoneIcon],svg[ant-design-skin-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".15" d="M512 318c-79.2 0-148.5-48.8-176.7-120H182v196h119v432h422V394h119V198H688.7c-28.2 71.2-97.5 120-176.7 120"></svg:path><svg:path fill="currentColor" d="M870 126H663.8c-17.4 0-32.9 11.9-37 29.3C614.3 208.1 567 246 512 246s-102.3-37.9-114.8-90.7a37.93 37.93 0 0 0-37-29.3H154a44 44 0 0 0-44 44v252a44 44 0 0 0 44 44h75v388a44 44 0 0 0 44 44h478a44 44 0 0 0 44-44V466h75a44 44 0 0 0 44-44V170a44 44 0 0 0-44-44m-28 268H723v432H301V394H182V198h153.3c28.2 71.2 97.5 120 176.7 120s148.5-48.8 176.7-120H842z"></svg:path>`,
})
export class AntDesignSkinTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSkypeFilledIcon],svg[ant-design-skype-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M883.7 578.6c4.1-22.5 6.3-45.5 6.3-68.5c0-51-10-100.5-29.7-147c-19-45-46.3-85.4-81-120.1a375.8 375.8 0 0 0-120.1-80.9c-46.6-19.7-96-29.7-147-29.7c-24 0-48.1 2.3-71.5 6.8A225.1 225.1 0 0 0 335.6 113c-59.7 0-115.9 23.3-158.1 65.5A222.25 222.25 0 0 0 112 336.6c0 38 9.8 75.4 28.1 108.4c-3.7 21.4-5.7 43.3-5.7 65.1c0 51 10 100.5 29.7 147c19 45 46.2 85.4 80.9 120.1s75.1 61.9 120.1 80.9c46.6 19.7 96 29.7 147 29.7c22.2 0 44.4-2 66.2-5.9c33.5 18.9 71.3 29 110 29c59.7 0 115.9-23.2 158.1-65.5c42.3-42.2 65.5-98.4 65.5-158.1c.1-38-9.7-75.5-28.2-108.7m-370 162.9c-134.2 0-194.2-66-194.2-115.4c0-25.4 18.7-43.1 44.5-43.1c57.4 0 42.6 82.5 149.7 82.5c54.9 0 85.2-29.8 85.2-60.3c0-18.3-9-38.7-45.2-47.6l-119.4-29.8c-96.1-24.1-113.6-76.1-113.6-124.9c0-101.4 95.5-139.5 185.2-139.5c82.6 0 180 45.7 180 106.5c0 26.1-22.6 41.2-48.4 41.2c-49 0-40-67.8-138.7-67.8c-49 0-76.1 22.2-76.1 53.9s38.7 41.8 72.3 49.5l88.4 19.6c96.8 21.6 121.3 78.1 121.3 131.3c0 82.3-63.3 143.9-191 143.9"></svg:path>`,
})
export class AntDesignSkypeFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSkypeOutlinedIcon],svg[ant-design-skype-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M883.7 578.6c4.1-22.5 6.3-45.5 6.3-68.5c0-51-10-100.5-29.7-147c-19-45-46.3-85.4-81-120.1a375.8 375.8 0 0 0-120.1-80.9c-46.6-19.7-96-29.7-147-29.7c-24 0-48.1 2.3-71.5 6.8A225.1 225.1 0 0 0 335.6 113c-59.7 0-115.9 23.3-158.1 65.5A222.25 222.25 0 0 0 112 336.6c0 38 9.8 75.4 28.1 108.4c-3.7 21.4-5.7 43.3-5.7 65.1c0 51 10 100.5 29.7 147c19 45 46.2 85.4 80.9 120.1s75.1 61.9 120.1 80.9c46.6 19.7 96 29.7 147 29.7c22.2 0 44.4-2 66.2-5.9c33.5 18.9 71.3 29 110 29c59.7 0 115.9-23.2 158.1-65.5c42.3-42.2 65.5-98.4 65.5-158.1c.1-38-9.7-75.5-28.2-108.7m-88.1 216C766.9 823.4 729 839 688.4 839c-26.1 0-51.8-6.8-74.6-19.7l-22.5-12.7l-25.5 4.5c-17.8 3.2-35.8 4.8-53.6 4.8c-41.4 0-81.3-8.1-119.1-24.1c-36.3-15.3-69-37.3-97.2-65.5a304.3 304.3 0 0 1-65.5-97.1c-16-37.7-24-77.6-24-119c0-17.4 1.6-35.2 4.6-52.8l4.4-25.1L203 410a151 151 0 0 1-19.1-73.4c0-40.6 15.7-78.5 44.4-107.2C257.1 200.7 295 185 335.6 185a153 153 0 0 1 71.4 17.9l22.4 11.8l24.8-4.8c18.9-3.6 38.4-5.5 58-5.5c41.4 0 81.3 8.1 119 24c36.5 15.4 69.1 37.4 97.2 65.5c28.2 28.1 50.2 60.8 65.6 97.2c16 37.7 24 77.6 24 119c0 18.4-1.7 37-5.1 55.5l-4.7 25.5l12.6 22.6c12.6 22.5 19.2 48 19.2 73.7c0 40.7-15.7 78.5-44.4 107.2M583.4 466.2L495 446.6c-33.6-7.7-72.3-17.8-72.3-49.5s27.1-53.9 76.1-53.9c98.7 0 89.7 67.8 138.7 67.8c25.8 0 48.4-15.2 48.4-41.2c0-60.8-97.4-106.5-180-106.5c-89.7 0-185.2 38.1-185.2 139.5c0 48.8 17.4 100.8 113.6 124.9l119.4 29.8c36.1 8.9 45.2 29.2 45.2 47.6c0 30.5-30.3 60.3-85.2 60.3c-107.2 0-92.3-82.5-149.7-82.5c-25.8 0-44.5 17.8-44.5 43.1c0 49.4 60 115.4 194.2 115.4c127.7 0 191-61.5 191-144c0-53.1-24.5-109.6-121.3-131.2"></svg:path>`,
})
export class AntDesignSkypeOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSlackCircleFilledIcon],svg[ant-design-slack-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64M361.5 580.2c0 27.8-22.5 50.4-50.3 50.4c-13.3 0-26.1-5.3-35.6-14.8c-9.4-9.5-14.7-22.3-14.7-35.6c0-27.8 22.5-50.4 50.3-50.4h50.3zm134 134.4c0 27.8-22.5 50.4-50.3 50.4s-50.3-22.6-50.3-50.4V580.2c0-27.8 22.5-50.4 50.3-50.4c13.3 0 26.1 5.3 35.6 14.8s14.7 22.3 14.7 35.6zm-50.2-218.4h-134c-27.8 0-50.3-22.6-50.3-50.4s22.5-50.4 50.3-50.4h134c27.8 0 50.3 22.6 50.3 50.4c-.1 27.9-22.6 50.4-50.3 50.4m0-134.4c-13.3 0-26.1-5.3-35.6-14.8S395 324.8 395 311.4c0-27.8 22.5-50.4 50.3-50.4s50.3 22.6 50.3 50.4v50.4zm83.7-50.4c0-27.8 22.5-50.4 50.3-50.4s50.3 22.6 50.3 50.4v134.4c0 27.8-22.5 50.4-50.3 50.4S529 473.6 529 445.8zM579.3 765c-27.8 0-50.3-22.6-50.3-50.4v-50.4h50.3c27.8 0 50.3 22.6 50.3 50.4S607.1 765 579.3 765m134-134.4h-134c-13.3 0-26.1-5.3-35.6-14.8S529 593.6 529 580.2c0-27.8 22.5-50.4 50.3-50.4h134c27.8 0 50.3 22.6 50.3 50.4s-22.5 50.4-50.3 50.4m0-134.4H663v-50.4c0-27.8 22.5-50.4 50.3-50.4s50.3 22.6 50.3 50.4s-22.5 50.4-50.3 50.4"></svg:path>`,
})
export class AntDesignSlackCircleFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSlackOutlinedIcon],svg[ant-design-slack-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M409.4 128c-42.4 0-76.7 34.4-76.7 76.8c0 20.3 8.1 39.9 22.4 54.3c14.4 14.4 33.9 22.5 54.3 22.5h76.7v-76.8c0-42.3-34.3-76.7-76.7-76.8m0 204.8H204.7c-42.4 0-76.7 34.4-76.7 76.8s34.4 76.8 76.7 76.8h204.6c42.4 0 76.7-34.4 76.7-76.8c.1-42.4-34.3-76.8-76.6-76.8M614 486.4c42.4 0 76.8-34.4 76.7-76.8V204.8c0-42.4-34.3-76.8-76.7-76.8s-76.7 34.4-76.7 76.8v204.8c0 42.5 34.3 76.8 76.7 76.8m281.4-76.8c0-42.4-34.4-76.8-76.7-76.8S742 367.2 742 409.6v76.8h76.7c42.3 0 76.7-34.4 76.7-76.8m-76.8 128H614c-42.4 0-76.7 34.4-76.7 76.8c0 20.3 8.1 39.9 22.4 54.3c14.4 14.4 33.9 22.5 54.3 22.5h204.6c42.4 0 76.7-34.4 76.7-76.8c.1-42.4-34.3-76.7-76.7-76.8M614 742.4h-76.7v76.8c0 42.4 34.4 76.8 76.7 76.8c42.4 0 76.8-34.4 76.7-76.8c.1-42.4-34.3-76.7-76.7-76.8M409.4 537.6c-42.4 0-76.7 34.4-76.7 76.8v204.8c0 42.4 34.4 76.8 76.7 76.8c42.4 0 76.8-34.4 76.7-76.8V614.4c0-20.3-8.1-39.9-22.4-54.3c-14.4-14.4-34-22.5-54.3-22.5M128 614.4c0 20.3 8.1 39.9 22.4 54.3c14.4 14.4 33.9 22.5 54.3 22.5c42.4 0 76.8-34.4 76.7-76.8v-76.8h-76.7c-42.3 0-76.7 34.4-76.7 76.8"></svg:path>`,
})
export class AntDesignSlackOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSlackSquareFilledIcon],svg[ant-design-slack-square-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32M529 311.4c0-27.8 22.5-50.4 50.3-50.4s50.3 22.6 50.3 50.4v134.4c0 27.8-22.5 50.4-50.3 50.4S529 473.6 529 445.8zM361.5 580.2c0 27.8-22.5 50.4-50.3 50.4c-13.3 0-26.1-5.3-35.6-14.8c-9.4-9.5-14.7-22.3-14.7-35.6c0-27.8 22.5-50.4 50.3-50.4h50.3zm134 134.4c0 27.8-22.5 50.4-50.3 50.4s-50.3-22.6-50.3-50.4V580.2c0-27.8 22.5-50.4 50.3-50.4c13.3 0 26.1 5.3 35.6 14.8s14.7 22.3 14.7 35.6zm-50.2-218.4h-134c-27.8 0-50.3-22.6-50.3-50.4s22.5-50.4 50.3-50.4h134c27.8 0 50.3 22.6 50.3 50.4c-.1 27.9-22.6 50.4-50.3 50.4m0-134.4c-13.3 0-26.1-5.3-35.6-14.8S395 324.8 395 311.4c0-27.8 22.5-50.4 50.3-50.4s50.3 22.6 50.3 50.4v50.4zm134 403.2c-27.8 0-50.3-22.6-50.3-50.4v-50.4h50.3c27.8 0 50.3 22.6 50.3 50.4S607.1 765 579.3 765m134-134.4h-134c-13.3 0-26.1-5.3-35.6-14.8c-9.4-9.5-14.7-22.3-14.7-35.6c0-27.8 22.5-50.4 50.3-50.4h134c27.8 0 50.3 22.6 50.3 50.4s-22.5 50.4-50.3 50.4m0-134.4H663v-50.4c0-27.8 22.5-50.4 50.3-50.4s50.3 22.6 50.3 50.4s-22.5 50.4-50.3 50.4"></svg:path>`,
})
export class AntDesignSlackSquareFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSlackSquareOutlinedIcon],svg[ant-design-slack-square-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32M529 311.4c0-27.8 22.5-50.4 50.3-50.4s50.3 22.6 50.3 50.4v134.4c0 27.8-22.5 50.4-50.3 50.4S529 473.6 529 445.8zM361.5 580.2c0 27.8-22.5 50.4-50.3 50.4c-13.3 0-26.1-5.3-35.6-14.8c-9.4-9.5-14.7-22.3-14.7-35.6c0-27.8 22.5-50.4 50.3-50.4h50.3zm134 134.4c0 27.8-22.5 50.4-50.3 50.4s-50.3-22.6-50.3-50.4V580.2c0-27.8 22.5-50.4 50.3-50.4c13.3 0 26.1 5.3 35.6 14.8s14.7 22.3 14.7 35.6zm-50.2-218.4h-134c-27.8 0-50.3-22.6-50.3-50.4s22.5-50.4 50.3-50.4h134c27.8 0 50.3 22.6 50.3 50.4c-.1 27.9-22.6 50.4-50.3 50.4m0-134.4c-13.3 0-26.1-5.3-35.6-14.8S395 324.8 395 311.4c0-27.8 22.5-50.4 50.3-50.4s50.3 22.6 50.3 50.4v50.4zm134 403.2c-27.8 0-50.3-22.6-50.3-50.4v-50.4h50.3c27.8 0 50.3 22.6 50.3 50.4S607.1 765 579.3 765m134-134.4h-134c-13.3 0-26.1-5.3-35.6-14.8c-9.4-9.5-14.7-22.3-14.7-35.6c0-27.8 22.5-50.4 50.3-50.4h134c27.8 0 50.3 22.6 50.3 50.4s-22.5 50.4-50.3 50.4m0-134.4H663v-50.4c0-27.8 22.5-50.4 50.3-50.4s50.3 22.6 50.3 50.4s-22.5 50.4-50.3 50.4"></svg:path>`,
})
export class AntDesignSlackSquareOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSlidersFilledIcon],svg[ant-design-sliders-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M904 296h-66v-96c0-4.4-3.6-8-8-8h-52c-4.4 0-8 3.6-8 8v96h-66c-4.4 0-8 3.6-8 8v416c0 4.4 3.6 8 8 8h66v96c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8v-96h66c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8m-584-72h-66v-56c0-4.4-3.6-8-8-8h-52c-4.4 0-8 3.6-8 8v56h-66c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8h66v56c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8v-56h66c4.4 0 8-3.6 8-8V232c0-4.4-3.6-8-8-8m292 180h-66V232c0-4.4-3.6-8-8-8h-52c-4.4 0-8 3.6-8 8v172h-66c-4.4 0-8 3.6-8 8v200c0 4.4 3.6 8 8 8h66v172c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8V620h66c4.4 0 8-3.6 8-8V412c0-4.4-3.6-8-8-8"></svg:path>`,
})
export class AntDesignSlidersFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSlidersOutlinedIcon],svg[ant-design-sliders-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M320 224h-66v-56c0-4.4-3.6-8-8-8h-52c-4.4 0-8 3.6-8 8v56h-66c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8h66v56c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8v-56h66c4.4 0 8-3.6 8-8V232c0-4.4-3.6-8-8-8m-60 508h-80V292h80zm644-436h-66v-96c0-4.4-3.6-8-8-8h-52c-4.4 0-8 3.6-8 8v96h-66c-4.4 0-8 3.6-8 8v416c0 4.4 3.6 8 8 8h66v96c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8v-96h66c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8m-60 364h-80V364h80zM612 404h-66V232c0-4.4-3.6-8-8-8h-52c-4.4 0-8 3.6-8 8v172h-66c-4.4 0-8 3.6-8 8v200c0 4.4 3.6 8 8 8h66v172c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8V620h66c4.4 0 8-3.6 8-8V412c0-4.4-3.6-8-8-8m-60 145a3 3 0 0 1-3 3h-74a3 3 0 0 1-3-3v-74a3 3 0 0 1 3-3h74a3 3 0 0 1 3 3z"></svg:path>`,
})
export class AntDesignSlidersOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSlidersTwotoneIcon],svg[ant-design-sliders-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".15" d="M180 292h80v440h-80zm369 180h-74a3 3 0 0 0-3 3v74a3 3 0 0 0 3 3h74a3 3 0 0 0 3-3v-74a3 3 0 0 0-3-3m215-108h80v296h-80z"></svg:path><svg:path fill="currentColor" d="M904 296h-66v-96c0-4.4-3.6-8-8-8h-52c-4.4 0-8 3.6-8 8v96h-66c-4.4 0-8 3.6-8 8v416c0 4.4 3.6 8 8 8h66v96c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8v-96h66c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8m-60 364h-80V364h80zM612 404h-66V232c0-4.4-3.6-8-8-8h-52c-4.4 0-8 3.6-8 8v172h-66c-4.4 0-8 3.6-8 8v200c0 4.4 3.6 8 8 8h66v172c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8V620h66c4.4 0 8-3.6 8-8V412c0-4.4-3.6-8-8-8m-60 145a3 3 0 0 1-3 3h-74a3 3 0 0 1-3-3v-74a3 3 0 0 1 3-3h74a3 3 0 0 1 3 3zM320 224h-66v-56c0-4.4-3.6-8-8-8h-52c-4.4 0-8 3.6-8 8v56h-66c-4.4 0-8 3.6-8 8v560c0 4.4 3.6 8 8 8h66v56c0 4.4 3.6 8 8 8h52c4.4 0 8-3.6 8-8v-56h66c4.4 0 8-3.6 8-8V232c0-4.4-3.6-8-8-8m-60 508h-80V292h80z"></svg:path>`,
})
export class AntDesignSlidersTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSmallDashOutlinedIcon],svg[ant-design-small-dash-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 476h72v72h-72zm182 0h72v72h-72zm364 0h72v72h-72zm182 0h72v72h-72zm-364 0h72v72h-72z"></svg:path>`,
})
export class AntDesignSmallDashOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSmileFilledIcon],svg[ant-design-smile-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64M288 421a48.01 48.01 0 0 1 96 0a48.01 48.01 0 0 1-96 0m224 272c-85.5 0-155.6-67.3-160-151.6a8 8 0 0 1 8-8.4h48.1c4.2 0 7.8 3.2 8.1 7.4C420 589.9 461.5 629 512 629s92.1-39.1 95.8-88.6c.3-4.2 3.9-7.4 8.1-7.4H664a8 8 0 0 1 8 8.4C667.6 625.7 597.5 693 512 693m176-224a48.01 48.01 0 0 1 0-96a48.01 48.01 0 0 1 0 96"></svg:path>`,
})
export class AntDesignSmileFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSmileOutlinedIcon],svg[ant-design-smile-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M288 421a48 48 0 1 0 96 0a48 48 0 1 0-96 0m352 0a48 48 0 1 0 96 0a48 48 0 1 0-96 0M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m263 711c-34.2 34.2-74 61-118.3 79.8C611 874.2 562.3 884 512 884s-99-9.8-144.8-29.2A370.4 370.4 0 0 1 248.9 775c-34.2-34.2-61-74-79.8-118.3C149.8 611 140 562.3 140 512s9.8-99 29.2-144.8A370.4 370.4 0 0 1 249 248.9c34.2-34.2 74-61 118.3-79.8C413 149.8 461.7 140 512 140s99 9.8 144.8 29.2A370.4 370.4 0 0 1 775.1 249c34.2 34.2 61 74 79.8 118.3C874.2 413 884 461.7 884 512s-9.8 99-29.2 144.8A368.9 368.9 0 0 1 775 775M664 533h-48.1c-4.2 0-7.8 3.2-8.1 7.4C604 589.9 562.5 629 512 629s-92.1-39.1-95.8-88.6c-.3-4.2-3.9-7.4-8.1-7.4H360a8 8 0 0 0-8 8.4c4.4 84.3 74.5 151.6 160 151.6s155.6-67.3 160-151.6a8 8 0 0 0-8-8.4"></svg:path>`,
})
export class AntDesignSmileOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSmileTwotoneIcon],svg[ant-design-smile-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372s372-166.6 372-372s-166.6-372-372-372M288 421a48.01 48.01 0 0 1 96 0a48.01 48.01 0 0 1-96 0m224 272c-85.5 0-155.6-67.3-160-151.6a8 8 0 0 1 8-8.4h48.1c4.2 0 7.8 3.2 8.1 7.4C420 589.9 461.5 629 512 629s92.1-39.1 95.8-88.6c.3-4.2 3.9-7.4 8.1-7.4H664a8 8 0 0 1 8 8.4C667.6 625.7 597.5 693 512 693m176-224a48.01 48.01 0 0 1 0-96a48.01 48.01 0 0 1 0 96"></svg:path><svg:path fill="currentColor" d="M288 421a48 48 0 1 0 96 0a48 48 0 1 0-96 0m376 112h-48.1c-4.2 0-7.8 3.2-8.1 7.4c-3.7 49.5-45.3 88.6-95.8 88.6s-92-39.1-95.8-88.6c-.3-4.2-3.9-7.4-8.1-7.4H360a8 8 0 0 0-8 8.4c4.4 84.3 74.5 151.6 160 151.6s155.6-67.3 160-151.6a8 8 0 0 0-8-8.4m-24-112a48 48 0 1 0 96 0a48 48 0 1 0-96 0"></svg:path>`,
})
export class AntDesignSmileTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSnippetsFilledIcon],svg[ant-design-snippets-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 112H724V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H500V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H320c-17.7 0-32 14.3-32 32v120h-96c-17.7 0-32 14.3-32 32v632c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32v-96h96c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32M664 486H514V336h.2L664 485.8zm128 274h-56V456L544 264H360v-80h68v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h152v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h68z"></svg:path>`,
})
export class AntDesignSnippetsFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSnippetsOutlinedIcon],svg[ant-design-snippets-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 112H724V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H500V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H320c-17.7 0-32 14.3-32 32v120h-96c-17.7 0-32 14.3-32 32v632c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32v-96h96c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32M664 888H232V336h218v174c0 22.1 17.9 40 40 40h174zm0-402H514V336h.2L664 485.8zm128 274h-56V456L544 264H360v-80h68v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h152v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h68z"></svg:path>`,
})
export class AntDesignSnippetsOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSnippetsTwotoneIcon],svg[ant-design-snippets-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".15" d="M450 510V336H232v552h432V550H490c-22.1 0-40-17.9-40-40"></svg:path><svg:path fill="currentColor" d="M832 112H724V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H500V72c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v40H320c-17.7 0-32 14.3-32 32v120h-96c-17.7 0-32 14.3-32 32v632c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32v-96h96c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32M664 888H232V336h218v174c0 22.1 17.9 40 40 40h174zm0-402H514V336h.2L664 485.8zm128 274h-56V456L544 264H360v-80h68v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h152v32c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-32h68z"></svg:path>`,
})
export class AntDesignSnippetsTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSolutionOutlinedIcon],svg[ant-design-solution-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M688 264c0-4.4-3.6-8-8-8H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8zm-8 136H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8M480 544H296c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8m-48 308H208V148h560v344c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V108c0-17.7-14.3-32-32-32H168c-17.7 0-32 14.3-32 32v784c0 17.7 14.3 32 32 32h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m356.8-74.4c29-26.3 47.2-64.3 47.2-106.6c0-79.5-64.5-144-144-144s-144 64.5-144 144c0 42.3 18.2 80.3 47.2 106.6c-57 32.5-96.2 92.7-99.2 162.1c-.2 4.5 3.5 8.3 8 8.3h48.1c4.2 0 7.7-3.3 8-7.6C564 871.2 621.7 816 692 816s128 55.2 131.9 124.4c.2 4.2 3.7 7.6 8 7.6H880c4.6 0 8.2-3.8 8-8.3c-2.9-69.5-42.2-129.6-99.2-162.1M692 591c44.2 0 80 35.8 80 80s-35.8 80-80 80s-80-35.8-80-80s35.8-80 80-80"></svg:path>`,
})
export class AntDesignSolutionOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSortAscendingOutlinedIcon],svg[ant-design-sort-ascending-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M839.6 433.8L749 150.5a9.24 9.24 0 0 0-8.9-6.5h-77.4c-4.1 0-7.6 2.6-8.9 6.5l-91.3 283.3c-.3.9-.5 1.9-.5 2.9c0 5.1 4.2 9.3 9.3 9.3h56.4c4.2 0 7.8-2.8 9-6.8l17.5-61.6h89l17.3 61.5c1.1 4 4.8 6.8 9 6.8h61.2c1 0 1.9-.1 2.8-.4c2.4-.8 4.3-2.4 5.5-4.6c1.1-2.2 1.3-4.7.6-7.1M663.3 325.5l32.8-116.9h6.3l32.1 116.9zm143.5 492.9H677.2v-.4l132.6-188.9c1.1-1.6 1.7-3.4 1.7-5.4v-36.4c0-5.1-4.2-9.3-9.3-9.3h-204c-5.1 0-9.3 4.2-9.3 9.3v43c0 5.1 4.2 9.3 9.3 9.3h122.6v.4L587.7 828.9a9.35 9.35 0 0 0-1.7 5.4v36.4c0 5.1 4.2 9.3 9.3 9.3h211.4c5.1 0 9.3-4.2 9.3-9.3v-43a9.2 9.2 0 0 0-9.2-9.3M416 702h-76V172c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v530h-76c-6.7 0-10.5 7.8-6.3 13l112 141.9a8 8 0 0 0 12.6 0l112-141.9c4.1-5.2.4-13-6.3-13"></svg:path>`,
})
export class AntDesignSortAscendingOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSortDescendingOutlinedIcon],svg[ant-design-sort-descending-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M839.6 433.8L749 150.5a9.24 9.24 0 0 0-8.9-6.5h-77.4c-4.1 0-7.6 2.6-8.9 6.5l-91.3 283.3c-.3.9-.5 1.9-.5 2.9c0 5.1 4.2 9.3 9.3 9.3h56.4c4.2 0 7.8-2.8 9-6.8l17.5-61.6h89l17.3 61.5c1.1 4 4.8 6.8 9 6.8h61.2c1 0 1.9-.1 2.8-.4c2.4-.8 4.3-2.4 5.5-4.6c1.1-2.2 1.3-4.7.6-7.1M663.3 325.5l32.8-116.9h6.3l32.1 116.9zm143.5 492.9H677.2v-.4l132.6-188.9c1.1-1.6 1.7-3.4 1.7-5.4v-36.4c0-5.1-4.2-9.3-9.3-9.3h-204c-5.1 0-9.3 4.2-9.3 9.3v43c0 5.1 4.2 9.3 9.3 9.3h122.6v.4L587.7 828.9a9.35 9.35 0 0 0-1.7 5.4v36.4c0 5.1 4.2 9.3 9.3 9.3h211.4c5.1 0 9.3-4.2 9.3-9.3v-43a9.2 9.2 0 0 0-9.2-9.3M310.3 167.1a8 8 0 0 0-12.6 0L185.7 309c-4.2 5.3-.4 13 6.3 13h76v530c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V322h76c6.7 0 10.5-7.8 6.3-13z"></svg:path>`,
})
export class AntDesignSortDescendingOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSoundFilledIcon],svg[ant-design-sound-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m892.1 737.8l-110.3-63.7a15.9 15.9 0 0 0-21.7 5.9l-19.9 34.5c-4.4 7.6-1.8 17.4 5.8 21.8L856.3 800a15.9 15.9 0 0 0 21.7-5.9l19.9-34.5c4.4-7.6 1.7-17.4-5.8-21.8M760 344a15.9 15.9 0 0 0 21.7 5.9L892 286.2c7.6-4.4 10.2-14.2 5.8-21.8L878 230a15.9 15.9 0 0 0-21.7-5.9L746 287.8a15.99 15.99 0 0 0-5.8 21.8zm174 132H806c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16M625.9 115c-5.9 0-11.9 1.6-17.4 5.3L254 352H90c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h164l354.5 231.7c5.5 3.6 11.6 5.3 17.4 5.3c16.7 0 32.1-13.3 32.1-32.1V147.1c0-18.8-15.4-32.1-32.1-32.1"></svg:path>`,
})
export class AntDesignSoundFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSoundOutlinedIcon],svg[ant-design-sound-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M625.9 115c-5.9 0-11.9 1.6-17.4 5.3L254 352H90c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h164l354.5 231.7c5.5 3.6 11.6 5.3 17.4 5.3c16.7 0 32.1-13.3 32.1-32.1V147.1c0-18.8-15.4-32.1-32.1-32.1M586 803L293.4 611.7l-18-11.7H146V424h129.4l17.9-11.7L586 221zm348-327H806c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16m-41.9 261.8l-110.3-63.7a15.9 15.9 0 0 0-21.7 5.9l-19.9 34.5c-4.4 7.6-1.8 17.4 5.8 21.8L856.3 800a15.9 15.9 0 0 0 21.7-5.9l19.9-34.5c4.4-7.6 1.7-17.4-5.8-21.8M760 344a15.9 15.9 0 0 0 21.7 5.9L892 286.2c7.6-4.4 10.2-14.2 5.8-21.8L878 230a15.9 15.9 0 0 0-21.7-5.9L746 287.8a15.99 15.99 0 0 0-5.8 21.8z"></svg:path>`,
})
export class AntDesignSoundOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSoundTwotoneIcon],svg[ant-design-sound-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".15" d="M275.4 424H146v176h129.4l18 11.7L586 803V221L293.3 412.3z"></svg:path><svg:path fill="currentColor" d="m892.1 737.8l-110.3-63.7a15.9 15.9 0 0 0-21.7 5.9l-19.9 34.5c-4.4 7.6-1.8 17.4 5.8 21.8L856.3 800a15.9 15.9 0 0 0 21.7-5.9l19.9-34.5c4.4-7.6 1.7-17.4-5.8-21.8M934 476H806c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16M760 344a15.9 15.9 0 0 0 21.7 5.9L892 286.2c7.6-4.4 10.2-14.2 5.8-21.8L878 230a15.9 15.9 0 0 0-21.7-5.9L746 287.8a15.99 15.99 0 0 0-5.8 21.8zM625.9 115c-5.9 0-11.9 1.6-17.4 5.3L254 352H90c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h164l354.5 231.7c5.5 3.6 11.6 5.3 17.4 5.3c16.7 0 32.1-13.3 32.1-32.1V147.1c0-18.8-15.4-32.1-32.1-32.1M586 803L293.4 611.7l-18-11.7H146V424h129.4l17.9-11.7L586 221z"></svg:path>`,
})
export class AntDesignSoundTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSplitCellsOutlinedIcon],svg[ant-design-split-cells-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M938.2 508.4L787.3 389c-3-2.4-7.3-.2-7.3 3.6V478H636V184h204v128c0 2.2 1.8 4 4 4h60c2.2 0 4-1.8 4-4V144c0-15.5-12.5-28-28-28H596c-15.5 0-28 12.5-28 28v736c0 15.5 12.5 28 28 28h284c15.5 0 28-12.5 28-28V712c0-2.2-1.8-4-4-4h-60c-2.2 0-4 1.8-4 4v128H636V546h144v85.4c0 3.8 4.4 6 7.3 3.6l150.9-119.4c2.4-1.8 2.4-5.4 0-7.2M428 116H144c-15.5 0-28 12.5-28 28v168c0 2.2 1.8 4 4 4h60c2.2 0 4-1.8 4-4V184h204v294H244v-85.4c0-3.8-4.3-6-7.3-3.6l-151 119.4c-2.3 1.8-2.3 5.3 0 7.1l151 119.5c2.9 2.3 7.3.2 7.3-3.6V546h144v294H184V712c0-2.2-1.8-4-4-4h-60c-2.2 0-4 1.8-4 4v168c0 15.5 12.5 28 28 28h284c15.5 0 28-12.5 28-28V144c0-15.5-12.5-28-28-28"></svg:path>`,
})
export class AntDesignSplitCellsOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSpotifyFilledIcon],svg[ant-design-spotify-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M721.417 695.167q0-18.667-17.5-29.75q-112.584-67.084-260.75-67.084q-77.584 0-167.417 19.834q-24.5 5.25-24.5 30.333q0 11.667 7.875 20.125t20.708 8.458q2.918 0 21.584-4.666q77-15.75 141.75-15.75q131.833 0 231.583 60.083q11.084 6.417 19.25 6.417q11.084 0 19.25-7.875t8.167-20.125m56-125.417q0-23.334-20.417-35.583q-138.25-82.25-319.667-82.25q-89.25 0-176.75 24.5q-28 7.583-28 37.333q0 14.583 10.209 24.792q10.209 10.208 24.791 10.208q4.084 0 21.584-4.667q71.167-19.25 146.416-19.25q162.75 0 284.667 72.334q14 7.583 22.167 7.583q14.583 0 24.791-10.208t10.209-24.792m63-144.667q0-27.416-23.334-40.833q-73.5-42.584-170.916-64.458q-97.418-21.875-200.084-21.875q-118.999 0-212.333 27.416q-13.416 4.084-22.458 14.875T202.25 368.5q0 18.084 11.958 30.333q11.959 12.25 30.042 12.25q6.417 0 23.333-4.666q77.584-21.584 179.084-21.584q92.75 0 180.541 19.834Q715 424.5 775.083 460.083q12.25 7 23.334 7q16.916 0 29.458-11.958t12.542-30.042M960 512q0 121.917-60.083 224.875q-60.084 102.958-163.042 163.042Q633.917 960 512 960t-224.875-60.083t-163.042-163.042Q64 633.917 64 512t60.083-224.875q60.084-102.958 163.042-163.042Q390.083 64 512 64t224.875 60.083q102.958 60.084 163.042 163.042Q960 390.083 960 512"></svg:path>`,
})
export class AntDesignSpotifyFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSpotifyOutlinedIcon],svg[ant-design-spotify-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M512 64C264.517 64 64 264.517 64 512s200.517 448 448 448s448-200.517 448-448S759.483 64 512 64m0 74.664a371.86 371.86 0 0 1 264.427 108.91A371.86 371.86 0 0 1 885.337 512a371.86 371.86 0 0 1-108.91 264.427A371.86 371.86 0 0 1 512 885.337a371.86 371.86 0 0 1-264.427-108.91A371.86 371.86 0 0 1 138.663 512a371.86 371.86 0 0 1 108.91-264.427A371.86 371.86 0 0 1 512 138.663M452.49 316c-72.613 0-135.893 6.72-196 25.685c-15.903 3.174-29.157 15.158-29.157 37.334c0 22.138 16.352 41.701 38.491 38.453c9.483 0 15.904-3.472 22.176-3.472c50.587-12.693 107.632-18.667 164.49-18.667c110.545 0 224 24.64 299.825 68.843c9.482 3.21 12.693 6.981 22.176 6.981c22.176 0 37.632-16.314 40.842-38.49c0-18.966-9.482-31.062-22.176-37.334C698.368 341.648 572.517 316 452.491 316M442 454.843c-66.341 0-113.605 9.482-161.019 22.176c-15.717 6.234-24.49 16.053-24.49 34.981c0 15.755 12.544 31.51 31.509 31.51c6.421 0 9.184-.3 18.667-3.51c34.72-9.483 82.394-15.157 133.018-15.157c104.235 0 194.955 25.386 261.334 66.49c6.234 3.211 12.693 5.824 22.138 5.824c18.966 0 31.51-16.053 31.51-34.981c0-12.693-5.974-25.237-18.667-31.51c-82.133-50.586-186.517-75.823-294-75.823m10.49 136.49c-53.647 0-104.533 5.974-155.157 18.667c-12.693 3.21-22.176 12.245-22.176 28c0 12.693 9.931 25.685 25.686 25.685c3.21 0 12.394-3.509 18.666-3.509a581.7 581.7 0 0 1 129.51-15.195c78.885 0 151.05 18.966 211.157 53.686c6.421 3.21 13.552 5.824 19.824 5.824c12.693 0 24.79-9.483 28-22.139c0-15.904-6.87-21.765-16.352-28c-69.552-41.141-150.79-63.019-239.157-63.019"></svg:path>`,
})
export class AntDesignSpotifyOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignStarFilledIcon],svg[ant-design-star-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3"></svg:path>`,
})
export class AntDesignStarFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignStarOutlinedIcon],svg[ant-design-star-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1l-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3M664.8 561.6l36.1 210.3L512 672.7L323.1 772l36.1-210.3l-152.8-149L417.6 382L512 190.7L606.4 382l211.2 30.7z"></svg:path>`,
})
export class AntDesignStarOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignStarTwotoneIcon],svg[ant-design-star-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".15" d="m512.5 190.4l-94.4 191.3l-211.2 30.7l152.8 149l-36.1 210.3l188.9-99.3l188.9 99.2l-36.1-210.3l152.8-148.9l-211.2-30.7z"></svg:path><svg:path fill="currentColor" d="m908.6 352.8l-253.9-36.9L541.2 85.8c-3.1-6.3-8.2-11.4-14.5-14.5c-15.8-7.8-35-1.3-42.9 14.5L370.3 315.9l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1L239 839.4a31.95 31.95 0 0 0 46.4 33.7l227.1-119.4l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2c17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9l183.7-179.1c5-4.9 8.3-11.3 9.3-18.3c2.7-17.5-9.5-33.7-27-36.3M665.3 561.3l36.1 210.3l-188.9-99.2l-188.9 99.3l36.1-210.3l-152.8-149l211.2-30.7l94.4-191.3l94.4 191.3l211.2 30.7z"></svg:path>`,
})
export class AntDesignStarTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignStepBackwardFilledIcon],svg[ant-design-step-backward-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m347.6 528.95l383.2 301.02c14.25 11.2 35.2 1.1 35.2-16.95V210.97c0-18.05-20.95-28.14-35.2-16.94L347.6 495.05a21.53 21.53 0 0 0 0 33.9M330 864h-64a8 8 0 0 1-8-8V168a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8v688a8 8 0 0 1-8 8"></svg:path>`,
})
export class AntDesignStepBackwardFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignStepBackwardOutlinedIcon],svg[ant-design-step-backward-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m347.6 528.95l383.2 301.02c14.25 11.2 35.2 1.1 35.2-16.95V210.97c0-18.05-20.95-28.14-35.2-16.94L347.6 495.05a21.53 21.53 0 0 0 0 33.9M330 864h-64a8 8 0 0 1-8-8V168a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8v688a8 8 0 0 1-8 8"></svg:path>`,
})
export class AntDesignStepBackwardOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignStepForwardFilledIcon],svg[ant-design-step-forward-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M676.4 528.95L293.2 829.97c-14.25 11.2-35.2 1.1-35.2-16.95V210.97c0-18.05 20.95-28.14 35.2-16.94l383.2 301.02a21.53 21.53 0 0 1 0 33.9M694 864h64a8 8 0 0 0 8-8V168a8 8 0 0 0-8-8h-64a8 8 0 0 0-8 8v688a8 8 0 0 0 8 8"></svg:path>`,
})
export class AntDesignStepForwardFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignStepForwardOutlinedIcon],svg[ant-design-step-forward-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M676.4 528.95L293.2 829.97c-14.25 11.2-35.2 1.1-35.2-16.95V210.97c0-18.05 20.95-28.14 35.2-16.94l383.2 301.02a21.53 21.53 0 0 1 0 33.9M694 864h64a8 8 0 0 0 8-8V168a8 8 0 0 0-8-8h-64a8 8 0 0 0-8 8v688a8 8 0 0 0 8 8"></svg:path>`,
})
export class AntDesignStepForwardOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignStockOutlinedIcon],svg[ant-design-stock-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M904 747H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8M165.7 621.8l39.7 39.5c3.1 3.1 8.2 3.1 11.3 0l234.7-233.9l97.6 97.3a32.11 32.11 0 0 0 45.2 0l264.2-263.2c3.1-3.1 3.1-8.2 0-11.3l-39.7-39.6a8.03 8.03 0 0 0-11.3 0l-235.7 235l-97.7-97.3a32.11 32.11 0 0 0-45.2 0L165.7 610.5a7.94 7.94 0 0 0 0 11.3"></svg:path>`,
})
export class AntDesignStockOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignStopFilledIcon],svg[ant-design-stop-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m234.8 736.5L223.5 277.2c16-19.7 34-37.7 53.7-53.7l523.3 523.3c-16 19.6-34 37.7-53.7 53.7"></svg:path>`,
})
export class AntDesignStopFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignStopOutlinedIcon],svg[ant-design-stop-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m0 820c-205.4 0-372-166.6-372-372c0-89 31.3-170.8 83.5-234.8l523.3 523.3C682.8 852.7 601 884 512 884m288.5-137.2L277.2 223.5C341.2 171.3 423 140 512 140c205.4 0 372 166.6 372 372c0 89-31.3 170.8-83.5 234.8"></svg:path>`,
})
export class AntDesignStopOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignStopTwotoneIcon],svg[ant-design-stop-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m288.5 682.8L277.7 224C258 240 240 258 224 277.7l522.8 522.8C682.8 852.7 601 884 512 884c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372c0 89-31.3 170.8-83.5 234.8"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372c89 0 170.8-31.3 234.8-83.5L224 277.7c16-19.7 34-37.7 53.7-53.7l522.8 522.8C852.7 682.8 884 601 884 512c0-205.4-166.6-372-372-372"></svg:path>`,
})
export class AntDesignStopTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignStrikethroughOutlinedIcon],svg[ant-design-strikethrough-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M952 474H569.9c-10-2-20.5-4-31.6-6c-15.9-2.9-22.2-4.1-30.8-5.8c-51.3-10-82.2-20-106.8-34.2c-35.1-20.5-52.2-48.3-52.2-85.1c0-37 15.2-67.7 44-89c28.4-21 68.8-32.1 116.8-32.1c54.8 0 97.1 14.4 125.8 42.8c14.6 14.4 25.3 32.1 31.8 52.6c1.3 4.1 2.8 10 4.3 17.8c.9 4.8 5.2 8.2 9.9 8.2h72.8c5.6 0 10.1-4.6 10.1-10.1v-1c-.7-6.8-1.3-12.1-2-16c-7.3-43.5-28-81.7-59.7-110.3c-44.4-40.5-109.7-61.8-188.7-61.8c-72.3 0-137.4 18.1-183.3 50.9c-25.6 18.4-45.4 41.2-58.6 67.7c-13.5 27.1-20.3 58.4-20.3 92.9c0 29.5 5.7 54.5 17.3 76.5c8.3 15.7 19.6 29.5 34.1 42H72c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h433.2c2.1.4 3.9.8 5.9 1.2c30.9 6.2 49.5 10.4 66.6 15.2c23 6.5 40.6 13.3 55.2 21.5c35.8 20.2 53.3 49.2 53.3 89c0 35.3-15.5 66.8-43.6 88.8c-30.5 23.9-75.6 36.4-130.5 36.4c-43.7 0-80.7-8.5-110.2-25c-29.1-16.3-49.1-39.8-59.7-69.5q-1.2-3.3-2.7-9c-1.2-4.4-5.3-7.5-9.7-7.5h-79.7c-5.6 0-10.1 4.6-10.1 10.1v1q.3 3.45.6 5.7c6.5 48.8 30.3 88.8 70.7 118.8c47.1 34.8 113.4 53.2 191.8 53.2c84.2 0 154.8-19.8 204.2-57.3c25-18.9 44.2-42.2 57.1-69c13-27.1 19.7-57.9 19.7-91.5c0-31.8-5.8-58.4-17.8-81.4c-5.8-11.2-13.1-21.5-21.8-30.8H952c4.4 0 8-3.6 8-8v-60a8 8 0 0 0-8-7.9"></svg:path>`,
})
export class AntDesignStrikethroughOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSubnodeOutlinedIcon],svg[ant-design-subnode-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M688 240c-138 0-252 102.8-269.6 236H249c-14.2-35.2-48.7-60-89-60c-53 0-96 43-96 96s43 96 96 96c40.3 0 74.8-24.8 89-60h169.3C436 681.2 550 784 688 784c150.2 0 272-121.8 272-272S838.2 240 688 240m128 298c0 4.4-3.6 8-8 8h-86v86c0 4.4-3.6 8-8 8h-52c-4.4 0-8-3.6-8-8v-86h-86c-4.4 0-8-3.6-8-8v-52c0-4.4 3.6-8 8-8h86v-86c0-4.4 3.6-8 8-8h52c4.4 0 8 3.6 8 8v86h86c4.4 0 8 3.6 8 8z"></svg:path>`,
})
export class AntDesignSubnodeOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSunFilledIcon],svg[ant-design-sun-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M548 818v126c0 8.837-7.163 16-16 16h-40c-8.837 0-16-7.163-16-16V818q23.768 2.464 36 2.464T548 818m205.251-115.66l89.096 89.095c6.248 6.248 6.248 16.38 0 22.627l-28.285 28.285c-6.248 6.248-16.379 6.248-22.627 0L702.34 753.25q18.548-15.064 27.198-23.713q8.649-8.65 23.713-27.198m-482.502 0q15.064 18.548 23.713 27.198q8.65 8.649 27.198 23.713l-89.095 89.096c-6.248 6.248-16.38 6.248-22.627 0l-28.285-28.285c-6.248-6.248-6.248-16.379 0-22.627zM512 278c129.235 0 234 104.765 234 234S641.235 746 512 746S278 641.235 278 512s104.765-234 234-234M206 476q-2.464 23.768-2.464 36T206 548H80c-8.837 0-16-7.163-16-16v-40c0-8.837 7.163-16 16-16zm738 0c8.837 0 16 7.163 16 16v40c0 8.837-7.163 16-16 16H818q2.464-23.768 2.464-36T818 476ZM814.062 180.653l28.285 28.285c6.248 6.248 6.248 16.379 0 22.627L753.25 320.66q-15.064-18.548-23.713-27.198q-8.65-8.649-27.198-23.713l89.095-89.096c6.248-6.248 16.38-6.248 22.627 0m-581.497 0l89.095 89.096q-18.548 15.064-27.198 23.713q-8.649 8.65-23.713 27.198l-89.096-89.095c-6.248-6.248-6.248-16.38 0-22.627l28.285-28.285c6.248-6.248 16.379-6.248 22.627 0M532 64c8.837 0 16 7.163 16 16v126q-23.768-2.464-36-2.464T476 206V80c0-8.837 7.163-16 16-16z"></svg:path>`,
})
export class AntDesignSunFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSunOutlinedIcon],svg[ant-design-sun-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M548 818v126c0 8.837-7.163 16-16 16h-40c-8.837 0-16-7.163-16-16V818q23.768 2.464 36 2.464T548 818m205.251-115.66l89.096 89.095c6.248 6.248 6.248 16.38 0 22.627l-28.285 28.285c-6.248 6.248-16.379 6.248-22.627 0L702.34 753.25q18.548-15.064 27.198-23.713q8.649-8.65 23.713-27.198m-482.502 0q15.064 18.548 23.713 27.198q8.65 8.649 27.198 23.713l-89.095 89.096c-6.248 6.248-16.38 6.248-22.627 0l-28.285-28.285c-6.248-6.248-6.248-16.379 0-22.627zM512 278c129.235 0 234 104.765 234 234S641.235 746 512 746S278 641.235 278 512s104.765-234 234-234m0 72c-89.47 0-162 72.53-162 162s72.53 162 162 162s162-72.53 162-162s-72.53-162-162-162M206 476q-2.464 23.768-2.464 36T206 548H80c-8.837 0-16-7.163-16-16v-40c0-8.837 7.163-16 16-16zm738 0c8.837 0 16 7.163 16 16v40c0 8.837-7.163 16-16 16H818q2.464-23.768 2.464-36T818 476ZM814.062 180.653l28.285 28.285c6.248 6.248 6.248 16.379 0 22.627L753.25 320.66q-15.064-18.548-23.713-27.198q-8.65-8.649-27.198-23.713l89.095-89.096c6.248-6.248 16.38-6.248 22.627 0m-581.497 0l89.095 89.096q-18.548 15.064-27.198 23.713q-8.649 8.65-23.713 27.198l-89.096-89.095c-6.248-6.248-6.248-16.38 0-22.627l28.285-28.285c6.248-6.248 16.379-6.248 22.627 0M532 64c8.837 0 16 7.163 16 16v126q-23.768-2.464-36-2.464T476 206V80c0-8.837 7.163-16 16-16z"></svg:path>`,
})
export class AntDesignSunOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSwapLeftOutlinedIcon],svg[ant-design-swap-left-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M872 572H266.8l144.3-183c4.1-5.2.4-13-6.3-13H340c-9.8 0-19.1 4.5-25.1 12.2l-164 208c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8"></svg:path>`,
})
export class AntDesignSwapLeftOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSwapOutlinedIcon],svg[ant-design-swap-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M847.9 592H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h605.2L612.9 851c-4.1 5.2-.4 13 6.3 13h72.5c4.9 0 9.5-2.2 12.6-6.1l168.8-214.1c16.5-21 1.6-51.8-25.2-51.8M872 356H266.8l144.3-183c4.1-5.2.4-13-6.3-13h-72.5c-4.9 0-9.5 2.2-12.6 6.1L150.9 380.2c-16.5 21-1.6 51.8 25.1 51.8h696c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8"></svg:path>`,
})
export class AntDesignSwapOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSwapRightOutlinedIcon],svg[ant-design-swap-right-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m873.1 596.2l-164-208A32 32 0 0 0 684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8"></svg:path>`,
})
export class AntDesignSwapRightOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSwitcherFilledIcon],svg[ant-design-switcher-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M752 240H144c-17.7 0-32 14.3-32 32v608c0 17.7 14.3 32 32 32h608c17.7 0 32-14.3 32-32V272c0-17.7-14.3-32-32-32M596 606c0 4.4-3.6 8-8 8H308c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h280c4.4 0 8 3.6 8 8zm284-494H264c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h576v576c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V144c0-17.7-14.3-32-32-32"></svg:path>`,
})
export class AntDesignSwitcherFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSwitcherOutlinedIcon],svg[ant-design-switcher-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M752 240H144c-17.7 0-32 14.3-32 32v608c0 17.7 14.3 32 32 32h608c17.7 0 32-14.3 32-32V272c0-17.7-14.3-32-32-32m-40 600H184V312h528zm168-728H264c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h576v576c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V144c0-17.7-14.3-32-32-32M300 550h296v64H300z"></svg:path>`,
})
export class AntDesignSwitcherOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSwitcherTwotoneIcon],svg[ant-design-switcher-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".15" d="M184 840h528V312H184zm116-290h296v64H300z"></svg:path><svg:path fill="currentColor" d="M880 112H264c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h576v576c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V144c0-17.7-14.3-32-32-32"></svg:path><svg:path fill="currentColor" d="M752 240H144c-17.7 0-32 14.3-32 32v608c0 17.7 14.3 32 32 32h608c17.7 0 32-14.3 32-32V272c0-17.7-14.3-32-32-32m-40 600H184V312h528z"></svg:path><svg:path fill="currentColor" d="M300 550h296v64H300z"></svg:path>`,
})
export class AntDesignSwitcherTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignSyncOutlinedIcon],svg[ant-design-sync-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168 504.2c1-43.7 10-86.1 26.9-126c17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 0 1 755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 0 0 3 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92C282.7 92 96.3 275.6 92 503.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8m756 7.8h-60c-4.4 0-7.9 3.5-8 7.8c-1 43.7-10 86.1-26.9 126c-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 0 1 512.1 856a342.24 342.24 0 0 1-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 0 0-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 0 0-8-8.2"></svg:path>`,
})
export class AntDesignSyncOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignTableOutlinedIcon],svg[ant-design-table-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32m-40 208H676V232h212zm0 224H676V432h212zM412 432h200v160H412zm200-64H412V232h200zm-476 64h212v160H136zm0-200h212v136H136zm0 424h212v136H136zm276 0h200v136H412zm476 136H676V656h212z"></svg:path>`,
})
export class AntDesignTableOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignTabletFilledIcon],svg[ant-design-tablet-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M800 64H224c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h576c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64M512 824c-22.1 0-40-17.9-40-40s17.9-40 40-40s40 17.9 40 40s-17.9 40-40 40"></svg:path>`,
})
export class AntDesignTabletFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignTabletOutlinedIcon],svg[ant-design-tablet-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M800 64H224c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h576c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64m-8 824H232V136h560zM472 784a40 40 0 1 0 80 0a40 40 0 1 0-80 0"></svg:path>`,
})
export class AntDesignTabletOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignTabletTwotoneIcon],svg[ant-design-tablet-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M800 64H224c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h576c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64m-8 824H232V136h560z"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="M232 888h560V136H232zm280-144c22.1 0 40 17.9 40 40s-17.9 40-40 40s-40-17.9-40-40s17.9-40 40-40"></svg:path><svg:path fill="currentColor" d="M472 784a40 40 0 1 0 80 0a40 40 0 1 0-80 0"></svg:path>`,
})
export class AntDesignTabletTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignTagFilledIcon],svg[ant-design-tag-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m938 458.8l-29.6-312.6c-1.5-16.2-14.4-29-30.6-30.6L565.2 86h-.4c-3.2 0-5.7 1-7.6 2.9L88.9 557.2a9.96 9.96 0 0 0 0 14.1l363.8 363.8c1.9 1.9 4.4 2.9 7.1 2.9s5.2-1 7.1-2.9l468.3-468.3c2-2.1 3-5 2.8-8M699 387c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64"></svg:path>`,
})
export class AntDesignTagFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignTagOutlinedIcon],svg[ant-design-tag-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m938 458.8l-29.6-312.6c-1.5-16.2-14.4-29-30.6-30.6L565.2 86h-.4c-3.2 0-5.7 1-7.6 2.9L88.9 557.2a9.96 9.96 0 0 0 0 14.1l363.8 363.8c1.9 1.9 4.4 2.9 7.1 2.9s5.2-1 7.1-2.9l468.3-468.3c2-2.1 3-5 2.8-8M459.7 834.7L189.3 564.3L589 164.6L836 188l23.4 247zM680 256c-48.5 0-88 39.5-88 88s39.5 88 88 88s88-39.5 88-88s-39.5-88-88-88m0 120c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32"></svg:path>`,
})
export class AntDesignTagOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignTagTwotoneIcon],svg[ant-design-tag-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".15" d="M589 164.6L189.3 564.3l270.4 270.4L859.4 435L836 188zM680 432c-48.5 0-88-39.5-88-88s39.5-88 88-88s88 39.5 88 88s-39.5 88-88 88"></svg:path><svg:path fill="currentColor" d="M680 256c-48.5 0-88 39.5-88 88s39.5 88 88 88s88-39.5 88-88s-39.5-88-88-88m0 120c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32"></svg:path><svg:path fill="currentColor" d="m938 458.8l-29.6-312.6c-1.5-16.2-14.4-29-30.6-30.6L565.2 86h-.4c-3.2 0-5.7 1-7.6 2.9L88.9 557.2a9.96 9.96 0 0 0 0 14.1l363.8 363.8a9.9 9.9 0 0 0 7.1 2.9c2.7 0 5.2-1 7.1-2.9l468.3-468.3c2-2.1 3-5 2.8-8M459.7 834.7L189.3 564.3L589 164.6L836 188l23.4 247z"></svg:path>`,
})
export class AntDesignTagTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignTagsFilledIcon],svg[ant-design-tags-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M483.2 790.3L861.4 412c1.7-1.7 2.5-4 2.3-6.3l-25.5-301.4c-.7-7.8-6.8-13.9-14.6-14.6L522.2 64.3c-2.3-.2-4.7.6-6.3 2.3L137.7 444.8a8.03 8.03 0 0 0 0 11.3l334.2 334.2c3.1 3.2 8.2 3.2 11.3 0m122.7-533.4c18.7-18.7 49.1-18.7 67.9 0c18.7 18.7 18.7 49.1 0 67.9c-18.7 18.7-49.1 18.7-67.9 0c-18.7-18.7-18.7-49.1 0-67.9m283.8 282.9l-39.6-39.5a8.03 8.03 0 0 0-11.3 0l-362 361.3l-237.6-237a8.03 8.03 0 0 0-11.3 0l-39.6 39.5a8.03 8.03 0 0 0 0 11.3l243.2 242.8l39.6 39.5c3.1 3.1 8.2 3.1 11.3 0l407.3-406.6c3.1-3.1 3.1-8.2 0-11.3"></svg:path>`,
})
export class AntDesignTagsFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignTagsOutlinedIcon],svg[ant-design-tags-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M483.2 790.3L861.4 412c1.7-1.7 2.5-4 2.3-6.3l-25.5-301.4c-.7-7.8-6.8-13.9-14.6-14.6L522.2 64.3c-2.3-.2-4.7.6-6.3 2.3L137.7 444.8a8.03 8.03 0 0 0 0 11.3l334.2 334.2c3.1 3.2 8.2 3.2 11.3 0m62.6-651.7l224.6 19l19 224.6L477.5 694L233.9 450.5zm60.16 186.23a48 48 0 1 0 67.88-67.89a48 48 0 1 0-67.88 67.89M889.7 539.8l-39.6-39.5a8.03 8.03 0 0 0-11.3 0l-362 361.3l-237.6-237a8.03 8.03 0 0 0-11.3 0l-39.6 39.5a8.03 8.03 0 0 0 0 11.3l243.2 242.8l39.6 39.5c3.1 3.1 8.2 3.1 11.3 0l407.3-406.6c3.1-3.1 3.1-8.2 0-11.3"></svg:path>`,
})
export class AntDesignTagsOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignTagsTwotoneIcon],svg[ant-design-tags-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".15" d="m477.5 694l311.9-311.8l-19-224.6l-224.6-19l-311.9 311.9zm116-415.5a47.81 47.81 0 0 1 33.9-33.9c16.6-4.4 34.2.3 46.4 12.4a47.93 47.93 0 0 1 12.4 46.4a47.81 47.81 0 0 1-33.9 33.9c-16.6 4.4-34.2-.3-46.4-12.4a48.3 48.3 0 0 1-12.4-46.4"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="M476.6 792.6c-1.7-.2-3.4-1-4.7-2.3L137.7 456.1a8.03 8.03 0 0 1 0-11.3L515.9 66.6c1.2-1.3 2.9-2.1 4.7-2.3h-.4c-2.3-.2-4.7.6-6.3 2.3L135.7 444.8a8.03 8.03 0 0 0 0 11.3l334.2 334.2c1.8 1.9 4.3 2.6 6.7 2.3"></svg:path><svg:path fill="currentColor" d="m889.7 539.8l-39.6-39.5a8.03 8.03 0 0 0-11.3 0l-362 361.3l-237.6-237a8.03 8.03 0 0 0-11.3 0l-39.6 39.5a8.03 8.03 0 0 0 0 11.3l243.2 242.8l39.6 39.5c3.1 3.1 8.2 3.1 11.3 0l407.3-406.6c3.1-3.1 3.1-8.2 0-11.3M652.3 337.3a47.81 47.81 0 0 0 33.9-33.9c4.4-16.6-.3-34.2-12.4-46.4a47.93 47.93 0 0 0-46.4-12.4a47.81 47.81 0 0 0-33.9 33.9c-4.4 16.6.3 34.2 12.4 46.4a48.3 48.3 0 0 0 46.4 12.4"></svg:path><svg:path fill="currentColor" d="M137.7 444.8a8.03 8.03 0 0 0 0 11.3l334.2 334.2c1.3 1.3 2.9 2.1 4.7 2.3c2.4.3 4.8-.5 6.6-2.3L861.4 412c1.7-1.7 2.5-4 2.3-6.3l-25.5-301.4c-.7-7.8-6.8-13.9-14.6-14.6L522.2 64.3h-1.6c-1.8.2-3.4 1-4.7 2.3zm408.1-306.2l224.6 19l19 224.6L477.5 694L233.9 450.5z"></svg:path>`,
})
export class AntDesignTagsTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignTaobaoCircleFilledIcon],svg[ant-design-taobao-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64M315.7 291.5c27.3 0 49.5 22.1 49.5 49.4s-22.1 49.4-49.5 49.4a49.4 49.4 0 1 1 0-98.8M366.9 578c-13.6 42.3-10.2 26.7-64.4 144.5l-78.5-49s87.7-79.8 105.6-116.2c19.2-38.4-21.1-58.9-21.1-58.9l-60.2-37.5l32.7-50.2c45.4 33.7 48.7 36.6 79.2 67.2c23.8 23.9 20.7 56.8 6.7 100.1m427.2 55c-15.3 143.8-202.4 90.3-202.4 90.3l10.2-41.1l43.3 9.3c80 5 72.3-64.9 72.3-64.9V423c.6-77.3-72.6-85.4-204.2-38.3l30.6 8.3c-2.5 9-12.5 23.2-25.2 38.6h176v35.6h-99.1v44.5h98.7v35.7h-98.7V622c14.9-4.8 28.6-11.5 40.5-20.5l-8.7-32.5l46.5-14.4l38.8 94.9l-57.3 23.9l-10.2-37.8c-25.6 19.5-78.8 48-171.8 45.4c-99.2 2.6-73.7-112-73.7-112l2.5-1.3H472c-.5 14.7-6.6 38.7 1.7 51.8c6.8 10.8 24.2 12.6 35.3 13.1c1.3.1 2.6.1 3.9.1v-85.3h-101v-35.7h101v-44.5H487c-22.7 24.1-43.5 44.1-43.5 44.1l-30.6-26.7c21.7-22.9 43.3-59.1 56.8-83.2c-10.9 4.4-22 9.2-33.6 14.2c-11.2 14.3-24.2 29-38.7 43.5c.5.8-50-28.4-50-28.4c52.2-44.4 81.4-139.9 81.4-139.9l72.5 20.4s-5.9 14-18.4 35.6c290.3-82.3 307.4 50.5 307.4 50.5s19.1 91.8 3.8 235.7"></svg:path>`,
})
export class AntDesignTaobaoCircleFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignTaobaoCircleOutlinedIcon],svg[ant-design-taobao-circle-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64M315.7 291.5c27.3 0 49.5 22.1 49.5 49.4s-22.1 49.4-49.5 49.4a49.4 49.4 0 1 1 0-98.8M366.9 578c-13.6 42.3-10.2 26.7-64.4 144.5l-78.5-49s87.7-79.8 105.6-116.2c19.2-38.4-21.1-58.9-21.1-58.9l-60.2-37.5l32.7-50.2c45.4 33.7 48.7 36.6 79.2 67.2c23.8 23.9 20.7 56.8 6.7 100.1m427.2 55c-15.3 143.8-202.4 90.3-202.4 90.3l10.2-41.1l43.3 9.3c80 5 72.3-64.9 72.3-64.9V423c.6-77.3-72.6-85.4-204.2-38.3l30.6 8.3c-2.5 9-12.5 23.2-25.2 38.6h176v35.6h-99.1v44.5h98.7v35.7h-98.7V622c14.9-4.8 28.6-11.5 40.5-20.5l-8.7-32.5l46.5-14.4l38.8 94.9l-57.3 23.9l-10.2-37.8c-25.6 19.5-78.8 48-171.8 45.4c-99.2 2.6-73.7-112-73.7-112l2.5-1.3H472c-.5 14.7-6.6 38.7 1.7 51.8c6.8 10.8 24.2 12.6 35.3 13.1c1.3.1 2.6.1 3.9.1v-85.3h-101v-35.7h101v-44.5H487c-22.7 24.1-43.5 44.1-43.5 44.1l-30.6-26.7c21.7-22.9 43.3-59.1 56.8-83.2c-10.9 4.4-22 9.2-33.6 14.2c-11.2 14.3-24.2 29-38.7 43.5c.5.8-50-28.4-50-28.4c52.2-44.4 81.4-139.9 81.4-139.9l72.5 20.4s-5.9 14-18.4 35.6c290.3-82.3 307.4 50.5 307.4 50.5s19.1 91.8 3.8 235.7"></svg:path>`,
})
export class AntDesignTaobaoCircleOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignTaobaoOutlinedIcon],svg[ant-design-taobao-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M168.5 273.7a68.7 68.7 0 1 0 137.4 0a68.7 68.7 0 1 0-137.4 0m730 79.2s-23.7-184.4-426.9-70.1c17.3-30 25.6-49.5 25.6-49.5L396.4 205s-40.6 132.6-113 194.4c0 0 70.1 40.6 69.4 39.4c20.1-20.1 38.2-40.6 53.7-60.4c16.1-7 31.5-13.6 46.7-19.8c-18.6 33.5-48.7 83.8-78.8 115.6l42.4 37s28.8-27.7 60.4-61.2h36v61.8H372.9v49.5h140.3v118.5c-1.7 0-3.6 0-5.4-.2c-15.4-.7-39.5-3.3-49-18.2c-11.5-18.1-3-51.5-2.4-71.9h-97l-3.4 1.8s-35.5 159.1 102.3 155.5c129.1 3.6 203-36 238.6-63.1l14.2 52.6l79.6-33.2l-53.9-131.9l-64.6 20.1l12.1 45.2c-16.6 12.4-35.6 21.7-56.2 28.4V561.3h137.1v-49.5H628.1V450h137.6v-49.5H521.3c17.6-21.4 31.5-41.1 35-53.6l-42.5-11.6c182.8-65.5 284.5-54.2 283.6 53.2v282.8s10.8 97.1-100.4 90.1l-60.2-12.9l-14.2 57.1S882.5 880 903.7 680.2c21.3-200-5.2-327.3-5.2-327.3m-707.4 18.3l-45.4 69.7l83.6 52.1s56 28.5 29.4 81.9C233.8 625.5 112 736.3 112 736.3l109 68.1c75.4-163.7 70.5-142 89.5-200.7c19.5-60.1 23.7-105.9-9.4-139.1c-42.4-42.6-47-46.6-110-93.4"></svg:path>`,
})
export class AntDesignTaobaoOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignTaobaoSquareFilledIcon],svg[ant-design-taobao-square-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32M315.7 291.5c27.3 0 49.5 22.1 49.5 49.4s-22.1 49.4-49.5 49.4a49.4 49.4 0 1 1 0-98.8M366.9 578c-13.6 42.3-10.2 26.7-64.4 144.5l-78.5-49s87.7-79.8 105.6-116.2c19.2-38.4-21.1-58.9-21.1-58.9l-60.2-37.5l32.7-50.2c45.4 33.7 48.7 36.6 79.2 67.2c23.8 23.9 20.7 56.8 6.7 100.1m427.2 55c-15.3 143.8-202.4 90.3-202.4 90.3l10.2-41.1l43.3 9.3c80 5 72.3-64.9 72.3-64.9V423c.6-77.3-72.6-85.4-204.2-38.3l30.6 8.3c-2.5 9-12.5 23.2-25.2 38.6h176v35.6h-99.1v44.5h98.7v35.7h-98.7V622c14.9-4.8 28.6-11.5 40.5-20.5l-8.7-32.5l46.5-14.4l38.8 94.9l-57.3 23.9l-10.2-37.8c-25.6 19.5-78.8 48-171.8 45.4c-99.2 2.6-73.7-112-73.7-112l2.5-1.3H472c-.5 14.7-6.6 38.7 1.7 51.8c6.8 10.8 24.2 12.6 35.3 13.1c1.3.1 2.6.1 3.9.1v-85.3h-101v-35.7h101v-44.5H487c-22.7 24.1-43.5 44.1-43.5 44.1l-30.6-26.7c21.7-22.9 43.3-59.1 56.8-83.2c-10.9 4.4-22 9.2-33.6 14.2c-11.2 14.3-24.2 29-38.7 43.5c.5.8-50-28.4-50-28.4c52.2-44.4 81.4-139.9 81.4-139.9l72.5 20.4s-5.9 14-18.4 35.6c290.3-82.3 307.4 50.5 307.4 50.5s19.1 91.8 3.8 235.7"></svg:path>`,
})
export class AntDesignTaobaoSquareFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignTeamOutlinedIcon],svg[ant-design-team-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M824.2 699.9a301.6 301.6 0 0 0-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200c-109.1 1.7-197 90.6-197 200c0 62.8 29 118.8 74.2 155.5a301 301 0 0 0-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 0 0 8 8.2h56c4.3 0 7.9-3.4 8-7.7c1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 0 1 612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 0 0 8-8.2c-2-77-33-149.2-87.8-203.9M612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 0 1-37.5-91.8c.3-32.8 13.4-64.5 36.3-88c24-24.6 56.1-38.3 90.4-38.7c33.9-.3 66.8 12.9 91 36.6c24.8 24.3 38.4 56.8 38.4 91.4c0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 0 1 612 612M361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4c0-15.9 1.5-31.4 4.3-46.5c.7-3.6-1.2-7.3-4.5-8.8c-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 0 1-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6c24.7-25.3 57.9-39.1 93.2-38.7c31.9.3 62.7 12.6 86 34.4c7.9 7.4 14.7 15.6 20.4 24.4c2 3.1 5.9 4.4 9.3 3.2c17.6-6.1 36.2-10.4 55.3-12.4c5.6-.6 8.8-6.6 6.3-11.6c-32.5-64.3-98.9-108.7-175.7-109.9c-110.9-1.7-203.3 89.2-203.3 199.9c0 62.8 28.9 118.8 74.2 155.5c-31.8 14.7-61.1 35-86.5 60.4c-54.8 54.7-85.8 126.9-87.8 204a8 8 0 0 0 8 8.2h56.1c4.3 0 7.9-3.4 8-7.7c1.9-58 25.4-112.3 66.7-153.5c29.4-29.4 65.4-49.8 104.7-59.7c3.9-1 6.5-4.7 6-8.7"></svg:path>`,
})
export class AntDesignTeamOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignThunderboltFilledIcon],svg[ant-design-thunderbolt-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7"></svg:path>`,
})
export class AntDesignThunderboltFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignThunderboltOutlinedIcon],svg[ant-design-thunderbolt-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M848 359.3H627.7L825.8 109c4.1-5.3.4-13-6.3-13H436c-2.8 0-5.5 1.5-6.9 4L170 547.5c-3.1 5.3.7 12 6.9 12h174.4l-89.4 357.6c-1.9 7.8 7.5 13.3 13.3 7.7L853.5 373c5.2-4.9 1.7-13.7-5.5-13.7M378.2 732.5l60.3-241H281.1l189.6-327.4h224.6L487 427.4h211z"></svg:path>`,
})
export class AntDesignThunderboltOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignThunderboltTwotoneIcon],svg[ant-design-thunderbolt-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".15" d="M695.4 164.1H470.8L281.2 491.5h157.4l-60.3 241l319.8-305.1h-211z"></svg:path><svg:path fill="currentColor" d="M848.1 359.3H627.8L825.9 109c4.1-5.3.4-13-6.3-13H436.1c-2.8 0-5.5 1.5-6.9 4L170.1 547.5c-3.1 5.3.7 12 6.9 12h174.4L262 917.1c-1.9 7.8 7.5 13.3 13.3 7.7L853.6 373c5.2-4.9 1.7-13.7-5.5-13.7M378.3 732.5l60.3-241H281.2l189.6-327.4h224.6L487.1 427.4h211z"></svg:path>`,
})
export class AntDesignThunderboltTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignTikTokFilledIcon],svg[ant-design-tik-tok-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M912 224.962C912 162.575 861.425 112 799.038 112H224.962C162.575 112 112 162.575 112 224.962v574.076C112 861.426 162.575 912 224.962 912h574.076C861.425 912 912 861.426 912 799.038zM774.759 460.916c-51.615.577-99.71-15.027-141.938-43.927v202.874c0 90.166-61.72 167.62-148.996 187.848c-119.068 27.165-219.864-58.954-232.577-161.835c-13.294-102.884 52.322-193.051 152.892-213.281c19.651-4.045 49.209-4.045 64.458-.577v108.661c-4.692-1.153-9.086-2.31-13.709-2.888c-39.304-6.937-77.371 12.715-92.977 48.55c-15.605 35.838-5.16 77.451 26.629 101.73c26.586 20.806 56.085 23.694 86.14 9.822c30.057-13.291 46.21-37.567 49.676-70.512c.578-4.622.546-9.826.546-15.028V222.206c0-10.981.086-10.502 11.068-10.502h86.12c6.36 0 8.673.915 9.25 8.433c4.621 67.047 55.526 124.147 120.838 132.818c6.937 1.155 14.369 1.613 22.58 2.19z"></svg:path>`,
})
export class AntDesignTikTokFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignTikTokOutlinedIcon],svg[ant-design-tik-tok-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M530.014 112.667c43.666-.667 86.997-.334 130.328-.667c2.667 51 21 102.999 58.33 138.998c37.332 37 89.997 54 141.328 59.666v134.332c-47.998-1.667-96.33-11.667-139.994-32.333c-19-8.667-36.665-19.667-53.998-31c-.333 97.332.334 194.665-.666 291.663c-2.667 46.666-18 93-44.998 131.332c-43.665 64-119.328 105.665-196.992 106.999c-47.664 2.666-95.329-10.334-135.994-34.333c-67.33-39.666-114.662-112.332-121.661-190.331c-.667-16.667-1-33.333-.334-49.666c6-63.333 37.332-123.999 85.997-165.332c55.33-47.999 132.66-70.999 204.99-57.332c.667 49.333-1.332 98.665-1.332 147.998c-33-10.667-71.664-7.667-100.663 12.333c-20.999 13.667-36.998 34.666-45.331 58.333c-7 17-5 35.666-4.667 53.666c8 54.666 60.664 100.665 116.662 95.665c37.332-.333 72.997-22 92.33-53.666c6.332-11 13.332-22.333 13.665-35.333c3.334-59.666 2-118.998 2.334-178.664c.333-134.332-.334-268.33.666-402.328"></svg:path>`,
})
export class AntDesignTikTokOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignToTopOutlinedIcon],svg[ant-design-to-top-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M885 780H165c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8M400 325.7h73.9V664c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V325.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 171a8 8 0 0 0-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13"></svg:path>`,
})
export class AntDesignToTopOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignToolFilledIcon],svg[ant-design-tool-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M865.3 244.7c-.3-.3-61.1 59.8-182.1 180.6l-84.9-84.9l180.9-180.9c-95.2-57.3-217.5-42.6-296.8 36.7A244.42 244.42 0 0 0 419 432l1.8 6.7l-283.5 283.4c-6.2 6.2-6.2 16.4 0 22.6l141.4 141.4c6.2 6.2 16.4 6.2 22.6 0l283.3-283.3l6.7 1.8c83.7 22.3 173.6-.9 236-63.3c79.4-79.3 94.1-201.6 38-296.6"></svg:path>`,
})
export class AntDesignToolFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignToolOutlinedIcon],svg[ant-design-tool-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M876.6 239.5c-.5-.9-1.2-1.8-2-2.5c-5-5-13.1-5-18.1 0L684.2 409.3l-67.9-67.9L788.7 169c.8-.8 1.4-1.6 2-2.5c3.6-6.1 1.6-13.9-4.5-17.5c-98.2-58-226.8-44.7-311.3 39.7c-67 67-89.2 162-66.5 247.4l-293 293c-3 3-2.8 7.9.3 11l169.7 169.7c3.1 3.1 8.1 3.3 11 .3l292.9-292.9c85.5 22.8 180.5.7 247.6-66.4c84.4-84.5 97.7-213.1 39.7-311.3M786 499.8c-58.1 58.1-145.3 69.3-214.6 33.6l-8.8 8.8l-.1-.1l-274 274.1l-79.2-79.2l230.1-230.1s0 .1.1.1l52.8-52.8c-35.7-69.3-24.5-156.5 33.6-214.6a184.2 184.2 0 0 1 144-53.5L537 318.9a32.05 32.05 0 0 0 0 45.3l124.5 124.5a32.05 32.05 0 0 0 45.3 0l132.8-132.8c3.7 51.8-14.4 104.8-53.6 143.9"></svg:path>`,
})
export class AntDesignToolOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignToolTwotoneIcon],svg[ant-design-tool-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".15" d="M706.8 488.7a32.05 32.05 0 0 1-45.3 0L537 364.2a32.05 32.05 0 0 1 0-45.3l132.9-132.8a184.2 184.2 0 0 0-144 53.5c-58.1 58.1-69.3 145.3-33.6 214.6L439.5 507c-.1 0-.1-.1-.1-.1L209.3 737l79.2 79.2l274-274.1l.1.1l8.8-8.8c69.3 35.7 156.5 24.5 214.6-33.6c39.2-39.1 57.3-92.1 53.6-143.9z"></svg:path><svg:path fill="currentColor" d="M876.6 239.5c-.5-.9-1.2-1.8-2-2.5c-5-5-13.1-5-18.1 0L684.2 409.3l-67.9-67.9L788.7 169c.8-.8 1.4-1.6 2-2.5c3.6-6.1 1.6-13.9-4.5-17.5c-98.2-58-226.8-44.7-311.3 39.7c-67 67-89.2 162-66.5 247.4l-293 293c-3 3-2.8 7.9.3 11l169.7 169.7c3.1 3.1 8.1 3.3 11 .3l292.9-292.9c85.5 22.8 180.5.7 247.6-66.4c84.4-84.5 97.7-213.1 39.7-311.3M786 499.8c-58.1 58.1-145.3 69.3-214.6 33.6l-8.8 8.8l-.1-.1l-274 274.1l-79.2-79.2l230.1-230.1s0 .1.1.1l52.8-52.8c-35.7-69.3-24.5-156.5 33.6-214.6a184.2 184.2 0 0 1 144-53.5L537 318.9a32.05 32.05 0 0 0 0 45.3l124.5 124.5a32.05 32.05 0 0 0 45.3 0l132.8-132.8c3.7 51.8-14.4 104.8-53.6 143.9"></svg:path>`,
})
export class AntDesignToolTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignTrademarkCircleFilledIcon],svg[ant-design-trademark-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m164.7 660.2c-1.1.5-2.3.8-3.5.8h-62c-3.1 0-5.9-1.8-7.2-4.6l-74.6-159.2h-88.7V717c0 4.4-3.6 8-8 8H378c-4.4 0-8-3.6-8-8V307c0-4.4 3.6-8 8-8h155.6c98.8 0 144.2 59.9 144.2 131.1c0 70.2-43.6 106.4-78.4 119.2l80.8 164.2c2.1 3.9.4 8.7-3.5 10.7M523.9 357h-83.4v148H522c53 0 82.8-25.6 82.8-72.4c0-50.3-32.9-75.6-80.9-75.6"></svg:path>`,
})
export class AntDesignTrademarkCircleFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignTrademarkCircleOutlinedIcon],svg[ant-design-trademark-circle-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372m87.5-334.7c34.8-12.8 78.4-49 78.4-119.2c0-71.2-45.5-131.1-144.2-131.1H378c-4.4 0-8 3.6-8 8v410c0 4.4 3.6 8 8 8h54.5c4.4 0 8-3.6 8-8V561.2h88.7l74.6 159.2c1.3 2.8 4.1 4.6 7.2 4.6h62a7.9 7.9 0 0 0 7.1-11.5zM522 505h-81.5V357h83.4c48 0 80.9 25.3 80.9 75.5c0 46.9-29.8 72.5-82.8 72.5"></svg:path>`,
})
export class AntDesignTrademarkCircleOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignTrademarkCircleTwotoneIcon],svg[ant-design-trademark-circle-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372s372-166.6 372-372s-166.6-372-372-372m170.7 584.2c-1.1.5-2.3.8-3.5.8h-62c-3.1 0-5.9-1.8-7.2-4.6l-74.6-159.2h-88.7V717c0 4.4-3.6 8-8 8H384c-4.4 0-8-3.6-8-8V307c0-4.4 3.6-8 8-8h155.6c98.8 0 144.2 59.9 144.2 131.1c0 70.2-43.6 106.4-78.4 119.2l80.8 164.2c2.1 3.9.4 8.7-3.5 10.7"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="M529.9 357h-83.4v148H528c53 0 82.8-25.6 82.8-72.4c0-50.3-32.9-75.6-80.9-75.6"></svg:path><svg:path fill="currentColor" d="M605.4 549.3c34.8-12.8 78.4-49 78.4-119.2c0-71.2-45.4-131.1-144.2-131.1H384c-4.4 0-8 3.6-8 8v410c0 4.4 3.6 8 8 8h54.7c4.4 0 8-3.6 8-8V561.2h88.7L610 720.4c1.3 2.8 4.1 4.6 7.2 4.6h62c1.2 0 2.4-.3 3.5-.8c3.9-2 5.6-6.8 3.5-10.7zM528 505h-81.5V357h83.4c48 0 80.9 25.3 80.9 75.6c0 46.8-29.8 72.4-82.8 72.4"></svg:path>`,
})
export class AntDesignTrademarkCircleTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignTrademarkOutlinedIcon],svg[ant-design-trademark-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372m87.5-334.7c34.8-12.8 78.4-49 78.4-119.2c0-71.2-45.5-131.1-144.2-131.1H378c-4.4 0-8 3.6-8 8v410c0 4.4 3.6 8 8 8h54.5c4.4 0 8-3.6 8-8V561.2h88.7l74.6 159.2c1.3 2.8 4.1 4.6 7.2 4.6h62a7.9 7.9 0 0 0 7.1-11.5zM522 505h-81.5V357h83.4c48 0 80.9 25.3 80.9 75.5c0 46.9-29.8 72.5-82.8 72.5"></svg:path>`,
})
export class AntDesignTrademarkOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignTransactionOutlinedIcon],svg[ant-design-transaction-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M668.6 320c0-4.4-3.6-8-8-8h-54.5c-3 0-5.8 1.7-7.1 4.4l-84.7 168.8H511l-84.7-168.8a8 8 0 0 0-7.1-4.4h-55.7c-1.3 0-2.6.3-3.8 1c-3.9 2.1-5.3 7-3.2 10.8l103.9 191.6h-57c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76v39h-76c-4.4 0-8 3.6-8 8v27.1c0 4.4 3.6 8 8 8h76V704c0 4.4 3.6 8 8 8h49.9c4.4 0 8-3.6 8-8v-63.5h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8h-76.3v-39h76.3c4.4 0 8-3.6 8-8v-27.1c0-4.4-3.6-8-8-8H564l103.7-191.6c.5-1.1.9-2.4.9-3.7M157.9 504.2a352.7 352.7 0 0 1 103.5-242.4c32.5-32.5 70.3-58.1 112.4-75.9c43.6-18.4 89.9-27.8 137.6-27.8c47.8 0 94.1 9.3 137.6 27.8c42.1 17.8 79.9 43.4 112.4 75.9c10 10 19.3 20.5 27.9 31.4l-50 39.1a8 8 0 0 0 3 14.1l156.8 38.3c5 1.2 9.9-2.6 9.9-7.7l.8-161.5c0-6.7-7.7-10.5-12.9-6.3l-47.8 37.4C770.7 146.3 648.6 82 511.5 82C277 82 86.3 270.1 82 503.8a8 8 0 0 0 8 8.2h60c4.3 0 7.8-3.5 7.9-7.8M934 512h-60c-4.3 0-7.9 3.5-8 7.8a352.7 352.7 0 0 1-103.5 242.4a352.6 352.6 0 0 1-112.4 75.9c-43.6 18.4-89.9 27.8-137.6 27.8s-94.1-9.3-137.6-27.8a352.6 352.6 0 0 1-112.4-75.9c-10-10-19.3-20.5-27.9-31.4l49.9-39.1a8 8 0 0 0-3-14.1l-156.8-38.3c-5-1.2-9.9 2.6-9.9 7.7l-.8 161.7c0 6.7 7.7 10.5 12.9 6.3l47.8-37.4C253.3 877.7 375.4 942 512.5 942C747 942 937.7 753.9 942 520.2a8 8 0 0 0-8-8.2"></svg:path>`,
})
export class AntDesignTransactionOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignTranslationOutlinedIcon],svg[ant-design-translation-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 188h584v164h76V144c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h544v-76H140z"></svg:path><svg:path fill="currentColor" d="M414.3 256h-60.6c-3.4 0-6.4 2.2-7.6 5.4L219 629.4c-.3.8-.4 1.7-.4 2.6c0 4.4 3.6 8 8 8h55.1c3.4 0 6.4-2.2 7.6-5.4L322 540h196.2L422 261.4c-1.3-3.2-4.3-5.4-7.7-5.4m12.4 228h-85.5L384 360.2zM936 528H800v-93c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v93H592c-13.3 0-24 10.7-24 24v176c0 13.3 10.7 24 24 24h136v152c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V752h136c13.3 0 24-10.7 24-24V552c0-13.3-10.7-24-24-24M728 680h-88v-80h88zm160 0h-88v-80h88z"></svg:path>`,
})
export class AntDesignTranslationOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignTrophyFilledIcon],svg[ant-design-trophy-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M868 160h-92v-40c0-4.4-3.6-8-8-8H256c-4.4 0-8 3.6-8 8v40h-92a44 44 0 0 0-44 44v148c0 81.7 60 149.6 138.2 162C265.6 630.2 359 721.8 476 734.5v105.2H280c-17.7 0-32 14.3-32 32V904c0 4.4 3.6 8 8 8h512c4.4 0 8-3.6 8-8v-32.3c0-17.7-14.3-32-32-32H548V734.5C665 721.8 758.4 630.2 773.8 514C852 501.6 912 433.7 912 352V204a44 44 0 0 0-44-44M248 439.6c-37.1-11.9-64-46.7-64-87.6V232h64zM840 352c0 41-26.9 75.8-64 87.6V232h64z"></svg:path>`,
})
export class AntDesignTrophyFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignTrophyOutlinedIcon],svg[ant-design-trophy-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M868 160h-92v-40c0-4.4-3.6-8-8-8H256c-4.4 0-8 3.6-8 8v40h-92a44 44 0 0 0-44 44v148c0 81.7 60 149.6 138.2 162C265.7 630.2 359 721.7 476 734.5v105.2H280c-17.7 0-32 14.3-32 32V904c0 4.4 3.6 8 8 8h512c4.4 0 8-3.6 8-8v-32.3c0-17.7-14.3-32-32-32H548V734.5C665 721.7 758.3 630.2 773.8 514C852 501.6 912 433.7 912 352V204a44 44 0 0 0-44-44M184 352V232h64v207.6a91.99 91.99 0 0 1-64-87.6m520 128c0 49.1-19.1 95.4-53.9 130.1c-34.8 34.8-81 53.9-130.1 53.9h-16c-49.1 0-95.4-19.1-130.1-53.9c-34.8-34.8-53.9-81-53.9-130.1V184h384zm136-128c0 41-26.9 75.8-64 87.6V232h64z"></svg:path>`,
})
export class AntDesignTrophyOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignTrophyTwotoneIcon],svg[ant-design-trophy-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".15" d="M320 480c0 49.1 19.1 95.3 53.9 130.1c34.7 34.8 81 53.9 130.1 53.9h16c49.1 0 95.3-19.1 130.1-53.9c34.8-34.7 53.9-81 53.9-130.1V184H320zM184 352c0 41 26.9 75.8 64 87.6c-37.1-11.9-64-46.7-64-87.6m364 382.5C665 721.8 758.4 630.2 773.8 514C758.3 630.2 665 721.7 548 734.5M250.2 514C265.6 630.2 359 721.8 476 734.5C359 721.7 265.7 630.2 250.2 514"></svg:path><svg:path fill="currentColor" d="M868 160h-92v-40c0-4.4-3.6-8-8-8H256c-4.4 0-8 3.6-8 8v40h-92a44 44 0 0 0-44 44v148c0 81.7 60 149.6 138.2 162C265.7 630.2 359 721.7 476 734.5v105.2H280c-17.7 0-32 14.3-32 32V904c0 4.4 3.6 8 8 8h512c4.4 0 8-3.6 8-8v-32.3c0-17.7-14.3-32-32-32H548V734.5C665 721.7 758.3 630.2 773.8 514C852 501.6 912 433.7 912 352V204a44 44 0 0 0-44-44M248 439.6a91.99 91.99 0 0 1-64-87.6V232h64zM704 480c0 49.1-19.1 95.4-53.9 130.1c-34.8 34.8-81 53.9-130.1 53.9h-16c-49.1 0-95.4-19.1-130.1-53.9c-34.8-34.8-53.9-81-53.9-130.1V184h384zm136-128c0 41-26.9 75.8-64 87.6V232h64z"></svg:path>`,
})
export class AntDesignTrophyTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignTruckFilledIcon],svg[ant-design-truck-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M608 192c17.673 0 32 14.327 32 32v160h174.815a32 32 0 0 1 26.676 14.327l113.186 170.846A32 32 0 0 1 960 586.846V672c0 17.673-14.327 32-32 32h-96c0 70.692-57.308 128-128 128s-128-57.308-128-128H384c0 70.692-57.308 128-128 128s-128-57.308-128-128H96c-17.673 0-32-14.327-32-32V224c0-17.673 14.327-32 32-32zM256 640c-35.346 0-64 28.654-64 64s28.654 64 64 64l1.058-.009C291.916 767.426 320 738.993 320 704c0-35.346-28.654-64-64-64m448 0c-35.346 0-64 28.654-64 64s28.654 64 64 64l1.058-.009C739.916 767.426 768 738.993 768 704c0-35.346-28.654-64-64-64m93.629-192H640v145.124C658.829 582.234 680.687 576 704 576c47.378 0 88.745 25.741 110.876 64H896v-43.516zM500 448H332c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h168c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12M308 320H204c-6.627 0-12 5.373-12 12v40c0 6.627 5.373 12 12 12h104c6.627 0 12-5.373 12-12v-40c0-6.627-5.373-12-12-12"></svg:path>`,
})
export class AntDesignTruckFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignTruckOutlinedIcon],svg[ant-design-truck-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M608 192c17.673 0 32 14.327 32 32v160h174.815a32 32 0 0 1 26.676 14.327l113.186 170.846A32 32 0 0 1 960 586.846V672c0 17.673-14.327 32-32 32h-96c0 70.692-57.308 128-128 128s-128-57.308-128-128H384c0 70.692-57.308 128-128 128s-128-57.308-128-128H96c-17.673 0-32-14.327-32-32V224c0-17.673 14.327-32 32-32zM256 640c-35.346 0-64 28.654-64 64s28.654 64 64 64l1.058-.009C291.916 767.426 320 738.993 320 704c0-35.346-28.654-64-64-64m448 0c-35.346 0-64 28.654-64 64s28.654 64 64 64l1.058-.009C739.916 767.426 768 738.993 768 704c0-35.346-28.654-64-64-64M576 256H128v384h17.124c22.131-38.259 63.498-64 110.876-64s88.745 25.741 110.876 64H576zm221.629 192H640v145.124C658.829 582.234 680.687 576 704 576c47.378 0 88.745 25.741 110.876 64H896v-43.516zM500 448c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12H332c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12zM308 320c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12H204c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12z"></svg:path>`,
})
export class AntDesignTruckOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignTwitchOutlinedIcon],svg[ant-design-twitch-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M166.133 112L114 251.167v556.466h191.2V912h104.4l104.233-104.4h156.5L879 599V112zm69.534 69.5H809.5v382.633L687.767 685.867H496.5L392.267 790.1V685.867h-156.6zM427 529.4h69.5V320.733H427zm191.167 0H687.7V320.733h-69.533z"></svg:path>`,
})
export class AntDesignTwitchOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignTwitterCircleFilledIcon],svg[ant-design-twitter-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m215.3 337.7c.3 4.7.3 9.6.3 14.4c0 146.8-111.8 315.9-316.1 315.9c-63 0-121.4-18.3-170.6-49.8c9 1 17.6 1.4 26.8 1.4c52 0 99.8-17.6 137.9-47.4c-48.8-1-89.8-33-103.8-77c17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35c25.1-4.7 49.1-14.1 70.5-26.7c-8.3 25.7-25.7 47.4-48.8 61.1c22.4-2.4 44-8.6 64-17.3c-15.1 22.2-34 41.9-55.7 57.6"></svg:path>`,
})
export class AntDesignTwitterCircleFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignTwitterOutlinedIcon],svg[ant-design-twitter-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M928 254.3c-30.6 13.2-63.9 22.7-98.2 26.4a170.1 170.1 0 0 0 75-94a336.6 336.6 0 0 1-108.2 41.2A170.1 170.1 0 0 0 672 174c-94.5 0-170.5 76.6-170.5 170.6c0 13.2 1.6 26.4 4.2 39.1c-141.5-7.4-267.7-75-351.6-178.5a169.3 169.3 0 0 0-23.2 86.1c0 59.2 30.1 111.4 76 142.1a172 172 0 0 1-77.1-21.7v2.1c0 82.9 58.6 151.6 136.7 167.4a180.6 180.6 0 0 1-44.9 5.8c-11.1 0-21.6-1.1-32.2-2.6C211 652 273.9 701.1 348.8 702.7c-58.6 45.9-132 72.9-211.7 72.9c-14.3 0-27.5-.5-41.2-2.1C171.5 822 261.2 850 357.8 850C671.4 850 843 590.2 843 364.7c0-7.4 0-14.8-.5-22.2c33.2-24.3 62.3-54.4 85.5-88.2"></svg:path>`,
})
export class AntDesignTwitterOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignTwitterSquareFilledIcon],svg[ant-design-twitter-square-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32M727.3 401.7c.3 4.7.3 9.6.3 14.4c0 146.8-111.8 315.9-316.1 315.9c-63 0-121.4-18.3-170.6-49.8c9 1 17.6 1.4 26.8 1.4c52 0 99.8-17.6 137.9-47.4c-48.8-1-89.8-33-103.8-77c17.1 2.5 32.5 2.5 50.1-2a111 111 0 0 1-88.9-109v-1.4c14.7 8.3 32 13.4 50.1 14.1a111.13 111.13 0 0 1-49.5-92.4c0-20.7 5.4-39.6 15.1-56a315.28 315.28 0 0 0 229 116.1C492 353.1 548.4 292 616.2 292c32 0 60.8 13.4 81.1 35c25.1-4.7 49.1-14.1 70.5-26.7c-8.3 25.7-25.7 47.4-48.8 61.1c22.4-2.4 44-8.6 64-17.3c-15.1 22.2-34 41.9-55.7 57.6"></svg:path>`,
})
export class AntDesignTwitterSquareFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignUnderlineOutlinedIcon],svg[ant-design-underline-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M824 804H200c-4.4 0-8 3.4-8 7.6v60.8c0 4.2 3.6 7.6 8 7.6h624c4.4 0 8-3.4 8-7.6v-60.8c0-4.2-3.6-7.6-8-7.6m-312-76c69.4 0 134.6-27.1 183.8-76.2S772 537.4 772 468V156c0-6.6-5.4-12-12-12h-60c-6.6 0-12 5.4-12 12v312c0 97-79 176-176 176s-176-79-176-176V156c0-6.6-5.4-12-12-12h-60c-6.6 0-12 5.4-12 12v312c0 69.4 27.1 134.6 76.2 183.8S442.6 728 512 728"></svg:path>`,
})
export class AntDesignUnderlineOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignUndoOutlinedIcon],svg[ant-design-undo-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M511.4 124C290.5 124.3 112 303 112 523.9c0 128 60.2 242 153.8 315.2l-37.5 48c-4.1 5.3-.3 13 6.3 12.9l167-.8c5.2 0 9-4.9 7.7-9.9L369.8 727a8 8 0 0 0-14.1-3L315 776.1c-10.2-8-20-16.7-29.3-26a318.6 318.6 0 0 1-68.6-101.7C200.4 609 192 567.1 192 523.9s8.4-85.1 25.1-124.5c16.1-38.1 39.2-72.3 68.6-101.7s63.6-52.5 101.7-68.6C426.9 212.4 468.8 204 512 204s85.1 8.4 124.5 25.1c38.1 16.1 72.3 39.2 101.7 68.6s52.5 63.6 68.6 101.7c16.7 39.4 25.1 81.3 25.1 124.5s-8.4 85.1-25.1 124.5a318.6 318.6 0 0 1-68.6 101.7c-7.5 7.5-15.3 14.5-23.4 21.2a7.93 7.93 0 0 0-1.2 11.1l39.4 50.5c2.8 3.5 7.9 4.1 11.4 1.3C854.5 760.8 912 649.1 912 523.9c0-221.1-179.4-400.2-400.6-399.9"></svg:path>`,
})
export class AntDesignUndoOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignUngroupOutlinedIcon],svg[ant-design-ungroup-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M736 550H288c-8.8 0-16 7.2-16 16v176c0 8.8 7.2 16 16 16h448c8.8 0 16-7.2 16-16V566c0-8.8-7.2-16-16-16m-56 136H344v-64h336zm208 130c-39.8 0-72 32.2-72 72s32.2 72 72 72s72-32.2 72-72s-32.2-72-72-72m0 96c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24M736 266H288c-8.8 0-16 7.2-16 16v176c0 8.8 7.2 16 16 16h448c8.8 0 16-7.2 16-16V282c0-8.8-7.2-16-16-16m-56 136H344v-64h336zm208-194c39.8 0 72-32.2 72-72s-32.2-72-72-72s-72 32.2-72 72s32.2 72 72 72m0-96c13.3 0 24 10.7 24 24s-10.7 24-24 24s-24-10.7-24-24s10.7-24 24-24M136 64c-39.8 0-72 32.2-72 72s32.2 72 72 72s72-32.2 72-72s-32.2-72-72-72m0 96c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24m0 656c-39.8 0-72 32.2-72 72s32.2 72 72 72s72-32.2 72-72s-32.2-72-72-72m0 96c-13.3 0-24-10.7-24-24s10.7-24 24-24s24 10.7 24 24s-10.7 24-24 24"></svg:path>`,
})
export class AntDesignUngroupOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignUnlockFilledIcon],svg[ant-design-unlock-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 464H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v68c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-68c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32M540 701v53c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8v-53a48.01 48.01 0 1 1 56 0"></svg:path>`,
})
export class AntDesignUnlockFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignUnlockOutlinedIcon],svg[ant-design-unlock-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M832 464H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v68c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-68c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32m-40 376H232V536h560zM484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 1 0-56 0"></svg:path>`,
})
export class AntDesignUnlockOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignUnlockTwotoneIcon],svg[ant-design-unlock-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".15" d="M232 840h560V536H232zm280-226a48.01 48.01 0 0 1 28 87v53c0 4.4-3.6 8-8 8h-40c-4.4 0-8-3.6-8-8v-53a48.01 48.01 0 0 1 28-87"></svg:path><svg:path fill="currentColor" d="M484 701v53c0 4.4 3.6 8 8 8h40c4.4 0 8-3.6 8-8v-53a48.01 48.01 0 1 0-56 0"></svg:path><svg:path fill="currentColor" d="M832 464H332V240c0-30.9 25.1-56 56-56h248c30.9 0 56 25.1 56 56v68c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-68c0-70.7-57.3-128-128-128H388c-70.7 0-128 57.3-128 128v224h-68c-17.7 0-32 14.3-32 32v384c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V496c0-17.7-14.3-32-32-32m-40 376H232V536h560z"></svg:path>`,
})
export class AntDesignUnlockTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignUnorderedListOutlinedIcon],svg[ant-design-unordered-list-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8m0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8M104 228a56 56 0 1 0 112 0a56 56 0 1 0-112 0m0 284a56 56 0 1 0 112 0a56 56 0 1 0-112 0m0 284a56 56 0 1 0 112 0a56 56 0 1 0-112 0"></svg:path>`,
})
export class AntDesignUnorderedListOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignUpCircleFilledIcon],svg[ant-design-up-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m178 555h-46.9c-10.2 0-19.9-4.9-25.9-13.2L512 460.4L406.8 605.8c-6 8.3-15.6 13.2-25.9 13.2H334c-6.5 0-10.3-7.4-6.5-12.7l178-246c3.2-4.4 9.7-4.4 12.9 0l178 246c3.9 5.3.1 12.7-6.4 12.7"></svg:path>`,
})
export class AntDesignUpCircleFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignUpCircleOutlinedIcon],svg[ant-design-up-circle-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M518.5 360.3a7.95 7.95 0 0 0-12.9 0l-178 246c-3.8 5.3 0 12.7 6.5 12.7H381c10.2 0 19.9-4.9 25.9-13.2L512 460.4l105.2 145.4c6 8.3 15.6 13.2 25.9 13.2H690c6.5 0 10.3-7.4 6.5-12.7z"></svg:path><svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372"></svg:path>`,
})
export class AntDesignUpCircleOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignUpCircleTwotoneIcon],svg[ant-design-up-circle-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".15" d="M512 140c-205.4 0-372 166.6-372 372s166.6 372 372 372s372-166.6 372-372s-166.6-372-372-372m178 479h-46.9c-10.2 0-19.9-4.9-25.9-13.2L512 460.4L406.8 605.8c-6 8.3-15.6 13.2-25.9 13.2H334c-6.5 0-10.3-7.4-6.5-12.7l178-246c3.2-4.4 9.7-4.4 12.9 0l178 246c3.9 5.3.1 12.7-6.4 12.7"></svg:path><svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372"></svg:path><svg:path fill="currentColor" d="M518.4 360.3a7.95 7.95 0 0 0-12.9 0l-178 246c-3.8 5.3 0 12.7 6.5 12.7h46.9c10.3 0 19.9-4.9 25.9-13.2L512 460.4l105.2 145.4c6 8.3 15.7 13.2 25.9 13.2H690c6.5 0 10.3-7.4 6.4-12.7z"></svg:path>`,
})
export class AntDesignUpCircleTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignUpOutlinedIcon],svg[ant-design-up-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M890.5 755.3L537.9 269.2c-12.8-17.6-39-17.6-51.7 0L133.5 755.3A8 8 0 0 0 140 768h75c5.1 0 9.9-2.5 12.9-6.6L512 369.8l284.1 391.6c3 4.1 7.8 6.6 12.9 6.6h75c6.5 0 10.3-7.4 6.5-12.7"></svg:path>`,
})
export class AntDesignUpOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignUpSquareFilledIcon],svg[ant-design-up-square-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32M690 624h-46.9c-10.2 0-19.9-4.9-25.9-13.2L512 465.4L406.8 610.8c-6 8.3-15.6 13.2-25.9 13.2H334c-6.5 0-10.3-7.4-6.5-12.7l178-246c3.2-4.4 9.7-4.4 12.9 0l178 246c3.9 5.3.1 12.7-6.4 12.7"></svg:path>`,
})
export class AntDesignUpSquareFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignUpSquareOutlinedIcon],svg[ant-design-up-square-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M334 624h46.9c10.2 0 19.9-4.9 25.9-13.2L512 465.4l105.2 145.4c6 8.3 15.6 13.2 25.9 13.2H690c6.5 0 10.3-7.4 6.5-12.7l-178-246a7.95 7.95 0 0 0-12.9 0l-178 246A7.96 7.96 0 0 0 334 624"></svg:path><svg:path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32m-40 728H184V184h656z"></svg:path>`,
})
export class AntDesignUpSquareOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignUpSquareTwotoneIcon],svg[ant-design-up-square-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32m-40 728H184V184h656z"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="M184 840h656V184H184zm143.5-228.7l178-246c3.2-4.4 9.7-4.4 12.9 0l178 246c3.9 5.3.1 12.7-6.4 12.7h-46.9c-10.2 0-19.9-4.9-25.9-13.2L512 465.4L406.8 610.8c-6 8.3-15.6 13.2-25.9 13.2H334c-6.5 0-10.3-7.4-6.5-12.7"></svg:path><svg:path fill="currentColor" d="M334 624h46.9c10.3 0 19.9-4.9 25.9-13.2L512 465.4l105.2 145.4c6 8.3 15.7 13.2 25.9 13.2H690c6.5 0 10.3-7.4 6.4-12.7l-178-246a7.95 7.95 0 0 0-12.9 0l-178 246c-3.8 5.3 0 12.7 6.5 12.7"></svg:path>`,
})
export class AntDesignUpSquareTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignUploadOutlinedIcon],svg[ant-design-upload-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 0 0-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13M878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8"></svg:path>`,
})
export class AntDesignUploadOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignUsbFilledIcon],svg[ant-design-usb-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M408 312h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8m352 120V144c0-17.7-14.3-32-32-32H296c-17.7 0-32 14.3-32 32v288c-66.2 0-120 52.1-120 116v356c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8V548c0-63.9-53.8-116-120-116m-72 0H336V184h352zM568 312h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8"></svg:path>`,
})
export class AntDesignUsbFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignUsbOutlinedIcon],svg[ant-design-usb-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M760 432V144c0-17.7-14.3-32-32-32H296c-17.7 0-32 14.3-32 32v288c-66.2 0-120 52.1-120 116v356c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V548c0-24.3 21.6-44 48.1-44h495.8c26.5 0 48.1 19.7 48.1 44v356c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V548c0-63.9-53.8-116-120-116m-424 0V184h352v248zm120-184h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8m160 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8"></svg:path>`,
})
export class AntDesignUsbOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignUsbTwotoneIcon],svg[ant-design-usb-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".15" d="M759.9 504H264.1c-26.5 0-48.1 19.7-48.1 44v292h592V548c0-24.3-21.6-44-48.1-44"></svg:path><svg:path fill="currentColor" d="M456 248h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8m160 0h-48c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8"></svg:path><svg:path fill="currentColor" d="M760 432V144c0-17.7-14.3-32-32-32H296c-17.7 0-32 14.3-32 32v288c-66.2 0-120 52.1-120 116v356c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8V548c0-63.9-53.8-116-120-116M336 184h352v248H336zm472 656H216V548c0-24.3 21.6-44 48.1-44h495.8c26.5 0 48.1 19.7 48.1 44z"></svg:path>`,
})
export class AntDesignUsbTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignUserAddOutlinedIcon],svg[ant-design-user-add-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M678.3 642.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.7 371.7 0 0 0-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 505 759.6 431.7 759.6 349c0-137-110.8-248-247.5-248S264.7 212 264.7 349c0 82.7 40.4 156 102.6 201.1c-.4.2-.8.3-1.2.5c-44.7 18.9-84.8 46-119.3 80.6a373.4 373.4 0 0 0-80.4 119.5A373.6 373.6 0 0 0 137 888.8a8 8 0 0 0 8 8.2h59.9c4.3 0 7.9-3.5 8-7.8c2-77.2 32.9-149.5 87.6-204.3C357 628.2 432.2 597 512.2 597c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 0 0 8.1.3M512.2 521c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 0 1 340.5 349c0-45.9 17.9-89.1 50.3-121.6S466.3 177 512.2 177s88.9 17.9 121.4 50.4A171.2 171.2 0 0 1 683.9 349c0 45.9-17.9 89.1-50.3 121.6C601.1 503.1 558 521 512.2 521M880 759h-84v-84c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v84h-84c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h84v84c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-84h84c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8"></svg:path>`,
})
export class AntDesignUserAddOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignUserDeleteOutlinedIcon],svg[ant-design-user-delete-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M678.3 655.4c24.2-13 51.9-20.4 81.4-20.4h.1c3 0 4.4-3.6 2.2-5.6a371.7 371.7 0 0 0-103.7-65.8c-.4-.2-.8-.3-1.2-.5C719.2 518 759.6 444.7 759.6 362c0-137-110.8-248-247.5-248S264.7 225 264.7 362c0 82.7 40.4 156 102.6 201.1c-.4.2-.8.3-1.2.5c-44.7 18.9-84.8 46-119.3 80.6a373.4 373.4 0 0 0-80.4 119.5A373.6 373.6 0 0 0 137 901.8a8 8 0 0 0 8 8.2h59.9c4.3 0 7.9-3.5 8-7.8c2-77.2 32.9-149.5 87.6-204.3C357 641.2 432.2 610 512.2 610c56.7 0 111.1 15.7 158 45.1a8.1 8.1 0 0 0 8.1.3M512.2 534c-45.8 0-88.9-17.9-121.4-50.4A171.2 171.2 0 0 1 340.5 362c0-45.9 17.9-89.1 50.3-121.6S466.3 190 512.2 190s88.9 17.9 121.4 50.4A171.2 171.2 0 0 1 683.9 362c0 45.9-17.9 89.1-50.3 121.6C601.1 516.1 558 534 512.2 534M880 772H640c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8"></svg:path>`,
})
export class AntDesignUserDeleteOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignUserOutlinedIcon],svg[ant-design-user-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M858.5 763.6a374 374 0 0 0-80.6-119.5a375.6 375.6 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1c-.4.2-.8.3-1.2.5c-44.8 18.9-85 46-119.5 80.6a375.6 375.6 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8c2-77.2 33-149.5 87.8-204.3c56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2M512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362s17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362s-17.9 89.1-50.4 121.6S557.9 534 512 534"></svg:path>`,
})
export class AntDesignUserOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignUserSwitchOutlinedIcon],svg[ant-design-user-switch-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M759 335c0-137-111-248-248-248S263 198 263 335c0 82.8 40.6 156.2 103 201.2c-.4.2-.7.3-.9.4c-44.7 18.9-84.8 46-119.3 80.6c-34.5 34.5-61.5 74.7-80.4 119.5C146.9 780.5 137 827 136 874.8c-.1 4.5 3.5 8.2 8 8.2h59.9c4.3 0 7.9-3.5 8-7.8c2-77.2 32.9-149.5 87.6-204.3C356 614.2 431 583 511 583c137 0 248-111 248-248M511 507c-95 0-172-77-172-172s77-172 172-172s172 77 172 172s-77 172-172 172m105 221h264c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H703.5l47.2-60.1c1.1-1.4 1.7-3.2 1.7-4.9c0-4.4-3.6-8-8-8h-72.6c-4.9 0-9.5 2.3-12.6 6.1l-68.5 87.1c-4.4 5.6-6.8 12.6-6.8 19.8c.1 17.7 14.4 32 32.1 32m240 64H592c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h176.5l-47.2 60.1c-1.1 1.4-1.7 3.2-1.7 4.9c0 4.4 3.6 8 8 8h72.6c4.9 0 9.5-2.3 12.6-6.1l68.5-87.1c4.4-5.6 6.8-12.6 6.8-19.8c-.1-17.7-14.4-32-32.1-32"></svg:path>`,
})
export class AntDesignUserSwitchOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignUsergroupAddOutlinedIcon],svg[ant-design-usergroup-add-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M892 772h-80v-80c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v80h-80c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h80v80c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-80h80c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8M373.5 498.4c-.9-8.7-1.4-17.5-1.4-26.4c0-15.9 1.5-31.4 4.3-46.5c.7-3.6-1.2-7.3-4.5-8.8c-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 0 1-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6c24.7-25.3 57.9-39.1 93.2-38.7c31.9.3 62.7 12.6 86 34.4c7.9 7.4 14.7 15.6 20.4 24.4c2 3.1 5.9 4.4 9.3 3.2c17.6-6.1 36.2-10.4 55.3-12.4c5.6-.6 8.8-6.6 6.3-11.6c-32.5-64.3-98.9-108.7-175.7-109.9c-110.8-1.7-203.2 89.2-203.2 200c0 62.8 28.9 118.8 74.2 155.5c-31.8 14.7-61.1 35-86.5 60.4c-54.8 54.7-85.8 126.9-87.8 204a8 8 0 0 0 8 8.2h56.1c4.3 0 7.9-3.4 8-7.7c1.9-58 25.4-112.3 66.7-153.5c29.4-29.4 65.4-49.8 104.7-59.7c3.8-1.1 6.4-4.8 5.9-8.8M824 472c0-109.4-87.9-198.3-196.9-200C516.3 270.3 424 361.2 424 472c0 62.8 29 118.8 74.2 155.5a301 301 0 0 0-86.4 60.4C357 742.6 326 814.8 324 891.8a8 8 0 0 0 8 8.2h56c4.3 0 7.9-3.4 8-7.7c1.9-58 25.4-112.3 66.7-153.5C505.8 695.7 563 672 624 672c110.4 0 200-89.5 200-200m-109.5 90.5C690.3 586.7 658.2 600 624 600s-66.3-13.3-90.5-37.5a127.26 127.26 0 0 1-37.5-91.8c.3-32.8 13.4-64.5 36.3-88c24-24.6 56.1-38.3 90.4-38.7c33.9-.3 66.8 12.9 91 36.6c24.8 24.3 38.4 56.8 38.4 91.4c-.1 34.2-13.4 66.3-37.6 90.5"></svg:path>`,
})
export class AntDesignUsergroupAddOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignUsergroupDeleteOutlinedIcon],svg[ant-design-usergroup-delete-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M888 784H664c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h224c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8M373.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4c0-15.9 1.5-31.4 4.3-46.5c.7-3.6-1.2-7.3-4.5-8.8c-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 0 1-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6c24.7-25.3 57.9-39.1 93.2-38.7c31.9.3 62.7 12.6 86 34.4c7.9 7.4 14.7 15.6 20.4 24.4c2 3.1 5.9 4.4 9.3 3.2c17.6-6.1 36.2-10.4 55.3-12.4c5.6-.6 8.8-6.6 6.3-11.6c-32.5-64.3-98.9-108.7-175.7-109.9c-110.9-1.7-203.3 89.2-203.3 199.9c0 62.8 28.9 118.8 74.2 155.5c-31.8 14.7-61.1 35-86.5 60.4c-54.8 54.7-85.8 126.9-87.8 204a8 8 0 0 0 8 8.2h56.1c4.3 0 7.9-3.4 8-7.7c1.9-58 25.4-112.3 66.7-153.5c29.4-29.4 65.4-49.8 104.7-59.7c3.9-1 6.5-4.7 6-8.7M824 484c0-109.4-87.9-198.3-196.9-200C516.3 282.3 424 373.2 424 484c0 62.8 29 118.8 74.2 155.5a301 301 0 0 0-86.4 60.4C357 754.6 326 826.8 324 903.8a8 8 0 0 0 8 8.2h56c4.3 0 7.9-3.4 8-7.7c1.9-58 25.4-112.3 66.7-153.5C505.8 707.7 563 684 624 684c110.4 0 200-89.5 200-200m-109.5 90.5C690.3 598.7 658.2 612 624 612s-66.3-13.3-90.5-37.5a127.26 127.26 0 0 1-37.5-91.8c.3-32.8 13.4-64.5 36.3-88c24-24.6 56.1-38.3 90.4-38.7c33.9-.3 66.8 12.9 91 36.6c24.8 24.3 38.4 56.8 38.4 91.4c-.1 34.2-13.4 66.3-37.6 90.5"></svg:path>`,
})
export class AntDesignUsergroupDeleteOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignVerifiedOutlinedIcon],svg[ant-design-verified-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m447.8 588.8l-7.3-32.5c-.2-1-.6-1.9-1.1-2.7c-2.5-3.7-7.4-4.7-11.1-2.2L405 567V411c0-4.4-3.6-8-8-8h-81c-4.4 0-8 3.6-8 8v36c0 4.4 3.6 8 8 8h37v192.4c0 1.7.5 3.3 1.5 4.7c2.6 3.6 7.6 4.4 11.2 1.8l79-56.8c2.6-1.9 3.8-5.1 3.1-8.3m-56.7-216.6l.2.2c3.2 3 8.3 2.8 11.3-.5l24.1-26.2c2.9-3.2 2.8-8.1-.3-11.2l-53.7-52.1c-3.1-3-8.1-3-11.2.1l-24.7 24.7c-3.1 3.1-3.1 8.2.1 11.3z"></svg:path><svg:path fill="currentColor" d="M866.9 169.9L527.1 54.1C523 52.7 517.5 52 512 52s-11 .7-15.1 2.1L157.1 169.9c-8.3 2.8-15.1 12.4-15.1 21.2v482.4c0 8.8 5.7 20.4 12.6 25.9L499.3 968c3.5 2.7 8 4.1 12.6 4.1s9.2-1.4 12.6-4.1l344.7-268.6c6.9-5.4 12.6-17 12.6-25.9V191.1c.2-8.8-6.6-18.3-14.9-21.2M810 654.3L512 886.5L214 654.3V226.7l298-101.6l298 101.6z"></svg:path><svg:path fill="currentColor" d="M452 297v36c0 4.4 3.6 8 8 8h108v274h-38V405c0-4.4-3.6-8-8-8h-35c-4.4 0-8 3.6-8 8v210h-31c-4.4 0-8 3.6-8 8v37c0 4.4 3.6 8 8 8h244c4.4 0 8-3.6 8-8v-37c0-4.4-3.6-8-8-8h-72V493h58c4.4 0 8-3.6 8-8v-35c0-4.4-3.6-8-8-8h-58V341h63c4.4 0 8-3.6 8-8v-36c0-4.4-3.6-8-8-8H460c-4.4 0-8 3.6-8 8"></svg:path>`,
})
export class AntDesignVerifiedOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignVerticalAlignBottomOutlinedIcon],svg[ant-design-vertical-align-bottom-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M859.9 780H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8M505.7 669a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V176c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9z"></svg:path>`,
})
export class AntDesignVerticalAlignBottomOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignVerticalAlignMiddleOutlinedIcon],svg[ant-design-vertical-align-middle-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M859.9 474H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8m-353.6-74.7c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H550V104c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v156h-62.8c-6 0-9.4 7-5.7 11.7zm11.4 225.4a7.14 7.14 0 0 0-11.3 0L405.6 752.3a7.23 7.23 0 0 0 5.7 11.7H474v156c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V764h62.8c6 0 9.4-7 5.7-11.7z"></svg:path>`,
})
export class AntDesignVerticalAlignMiddleOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignVerticalAlignTopOutlinedIcon],svg[ant-design-vertical-align-top-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8M518.3 355a8 8 0 0 0-12.6 0l-112 141.7a7.98 7.98 0 0 0 6.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9z"></svg:path>`,
})
export class AntDesignVerticalAlignTopOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignVerticalLeftOutlinedIcon],svg[ant-design-vertical-left-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M762 164h-64c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V172c0-4.4-3.6-8-8-8m-508 0v72.4c0 9.5 4.2 18.4 11.4 24.5L564.6 512L265.4 763.1c-7.2 6.1-11.4 15-11.4 24.5V860c0 6.8 7.9 10.5 13.1 6.1L689 512L267.1 157.9A7.95 7.95 0 0 0 254 164"></svg:path>`,
})
export class AntDesignVerticalLeftOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignVerticalRightOutlinedIcon],svg[ant-design-vertical-right-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M326 164h-64c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h64c4.4 0 8-3.6 8-8V172c0-4.4-3.6-8-8-8m444 72.4V164c0-6.8-7.9-10.5-13.1-6.1L335 512l421.9 354.1c5.2 4.4 13.1.7 13.1-6.1v-72.4c0-9.4-4.2-18.4-11.4-24.5L459.4 512l299.2-251.1c7.2-6.1 11.4-15.1 11.4-24.5"></svg:path>`,
})
export class AntDesignVerticalRightOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignVideoCameraAddOutlinedIcon],svg[ant-design-video-camera-add-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M368 724H252V608c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v116H72c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h116v116c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V788h116c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8"></svg:path><svg:path fill="currentColor" d="M912 302.3L784 376V224c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v352h72V232h576v560H448v72h272c35.3 0 64-28.7 64-64V648l128 73.7c21.3 12.3 48-3.1 48-27.6V330c0-24.6-26.7-40-48-27.7M888 625l-104-59.8V458.9L888 399z"></svg:path><svg:path fill="currentColor" d="M320 360c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H208c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z"></svg:path>`,
})
export class AntDesignVideoCameraAddOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignVideoCameraFilledIcon],svg[ant-design-video-camera-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M912 302.3L784 376V224c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v576c0 35.3 28.7 64 64 64h592c35.3 0 64-28.7 64-64V648l128 73.7c21.3 12.3 48-3.1 48-27.6V330c0-24.6-26.7-40-48-27.7M328 352c0 4.4-3.6 8-8 8H208c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8h112c4.4 0 8 3.6 8 8zm560 273l-104-59.8V458.9L888 399z"></svg:path>`,
})
export class AntDesignVideoCameraFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignVideoCameraOutlinedIcon],svg[ant-design-video-camera-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M912 302.3L784 376V224c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v576c0 35.3 28.7 64 64 64h592c35.3 0 64-28.7 64-64V648l128 73.7c21.3 12.3 48-3.1 48-27.6V330c0-24.6-26.7-40-48-27.7M712 792H136V232h576zm176-167l-104-59.8V458.9L888 399zM208 360h112c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H208c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8"></svg:path>`,
})
export class AntDesignVideoCameraOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignVideoCameraTwotoneIcon],svg[ant-design-video-camera-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity=".15" d="M136 792h576V232H136zm64-488c0-4.4 3.6-8 8-8h112c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8H208c-4.4 0-8-3.6-8-8z"></svg:path><svg:path fill="currentColor" d="M912 302.3L784 376V224c0-35.3-28.7-64-64-64H128c-35.3 0-64 28.7-64 64v576c0 35.3 28.7 64 64 64h592c35.3 0 64-28.7 64-64V648l128 73.7c21.3 12.3 48-3.1 48-27.6V330c0-24.6-26.7-40-48-27.7M712 792H136V232h576zm176-167l-104-59.8V458.9L888 399z"></svg:path><svg:path fill="currentColor" d="M208 360h112c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H208c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8"></svg:path>`,
})
export class AntDesignVideoCameraTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignWalletFilledIcon],svg[ant-design-wallet-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32m-32 464H528V448h320zm-268-64a40 40 0 1 0 80 0a40 40 0 1 0-80 0"></svg:path>`,
})
export class AntDesignWalletFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignWalletOutlinedIcon],svg[ant-design-wallet-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32m-40 464H528V448h312zm0 264H184V184h656v200H496c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h344zM580 512a40 40 0 1 0 80 0a40 40 0 1 0-80 0"></svg:path>`,
})
export class AntDesignWalletOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignWalletTwotoneIcon],svg[ant-design-wallet-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32m-40 464H528V448h312zm0-192H496c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h344v200H184V184h656z"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="M528 576h312V448H528zm92-104c22.1 0 40 17.9 40 40s-17.9 40-40 40s-40-17.9-40-40s17.9-40 40-40"></svg:path><svg:path fill="currentColor" d="M580 512a40 40 0 1 0 80 0a40 40 0 1 0-80 0"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="M184 840h656V640H496c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32h344V184H184z"></svg:path>`,
})
export class AntDesignWalletTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignWarningFilledIcon],svg[ant-design-warning-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48M480 416c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8zm32 352a48.01 48.01 0 0 1 0-96a48.01 48.01 0 0 1 0 96"></svg:path>`,
})
export class AntDesignWarningFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignWarningOutlinedIcon],svg[ant-design-warning-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M464 720a48 48 0 1 0 96 0a48 48 0 1 0-96 0m16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8m475.7 440l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48m-783.5-27.9L512 239.9l339.8 588.2z"></svg:path>`,
})
export class AntDesignWarningOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignWarningTwotoneIcon],svg[ant-design-warning-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48m-783.5-27.9L512 239.9l339.8 588.2z"></svg:path><svg:path fill="currentColor" fill-opacity=".15" d="M172.2 828.1h679.6L512 239.9zM560 720a48.01 48.01 0 0 1-96 0a48.01 48.01 0 0 1 96 0m-16-304v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V416c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8"></svg:path><svg:path fill="currentColor" d="M464 720a48 48 0 1 0 96 0a48 48 0 1 0-96 0m16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8"></svg:path>`,
})
export class AntDesignWarningTwotoneIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignWechatFilledIcon],svg[ant-design-wechat-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M690.1 377.4c5.9 0 11.8.2 17.6.5c-24.4-128.7-158.3-227.1-319.9-227.1C209 150.8 64 271.4 64 420.2c0 81.1 43.6 154.2 111.9 203.6a21.5 21.5 0 0 1 9.1 17.6c0 2.4-.5 4.6-1.1 6.9c-5.5 20.3-14.2 52.8-14.6 54.3c-.7 2.6-1.7 5.2-1.7 7.9c0 5.9 4.8 10.8 10.8 10.8c2.3 0 4.2-.9 6.2-2l70.9-40.9c5.3-3.1 11-5 17.2-5c3.2 0 6.4.5 9.5 1.4c33.1 9.5 68.8 14.8 105.7 14.8c6 0 11.9-.1 17.8-.4c-7.1-21-10.9-43.1-10.9-66c0-135.8 132.2-245.8 295.3-245.8m-194.3-86.5c23.8 0 43.2 19.3 43.2 43.1s-19.3 43.1-43.2 43.1c-23.8 0-43.2-19.3-43.2-43.1s19.4-43.1 43.2-43.1m-215.9 86.2c-23.8 0-43.2-19.3-43.2-43.1s19.3-43.1 43.2-43.1s43.2 19.3 43.2 43.1s-19.4 43.1-43.2 43.1m586.8 415.6c56.9-41.2 93.2-102 93.2-169.7c0-124-120.8-224.5-269.9-224.5c-149 0-269.9 100.5-269.9 224.5S540.9 847.5 690 847.5c30.8 0 60.6-4.4 88.1-12.3c2.6-.8 5.2-1.2 7.9-1.2c5.2 0 9.9 1.6 14.3 4.1l59.1 34c1.7 1 3.3 1.7 5.2 1.7a9 9 0 0 0 6.4-2.6a9 9 0 0 0 2.6-6.4c0-2.2-.9-4.4-1.4-6.6c-.3-1.2-7.6-28.3-12.2-45.3c-.5-1.9-.9-3.8-.9-5.7c.1-5.9 3.1-11.2 7.6-14.5M600.2 587.2c-19.9 0-36-16.1-36-35.9s16.1-35.9 36-35.9s36 16.1 36 35.9s-16.2 35.9-36 35.9m179.9 0c-19.9 0-36-16.1-36-35.9s16.1-35.9 36-35.9s36 16.1 36 35.9a36.08 36.08 0 0 1-36 35.9"></svg:path>`,
})
export class AntDesignWechatFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignWechatOutlinedIcon],svg[ant-design-wechat-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M690.1 377.4c5.9 0 11.8.2 17.6.5c-24.4-128.7-158.3-227.1-319.9-227.1C209 150.8 64 271.4 64 420.2c0 81.1 43.6 154.2 111.9 203.6a21.5 21.5 0 0 1 9.1 17.6c0 2.4-.5 4.6-1.1 6.9c-5.5 20.3-14.2 52.8-14.6 54.3c-.7 2.6-1.7 5.2-1.7 7.9c0 5.9 4.8 10.8 10.8 10.8c2.3 0 4.2-.9 6.2-2l70.9-40.9c5.3-3.1 11-5 17.2-5c3.2 0 6.4.5 9.5 1.4c33.1 9.5 68.8 14.8 105.7 14.8c6 0 11.9-.1 17.8-.4c-7.1-21-10.9-43.1-10.9-66c0-135.8 132.2-245.8 295.3-245.8m-194.3-86.5c23.8 0 43.2 19.3 43.2 43.1s-19.3 43.1-43.2 43.1c-23.8 0-43.2-19.3-43.2-43.1s19.4-43.1 43.2-43.1m-215.9 86.2c-23.8 0-43.2-19.3-43.2-43.1s19.3-43.1 43.2-43.1s43.2 19.3 43.2 43.1s-19.4 43.1-43.2 43.1m586.8 415.6c56.9-41.2 93.2-102 93.2-169.7c0-124-120.8-224.5-269.9-224.5c-149 0-269.9 100.5-269.9 224.5S540.9 847.5 690 847.5c30.8 0 60.6-4.4 88.1-12.3c2.6-.8 5.2-1.2 7.9-1.2c5.2 0 9.9 1.6 14.3 4.1l59.1 34c1.7 1 3.3 1.7 5.2 1.7a9 9 0 0 0 6.4-2.6a9 9 0 0 0 2.6-6.4c0-2.2-.9-4.4-1.4-6.6c-.3-1.2-7.6-28.3-12.2-45.3c-.5-1.9-.9-3.8-.9-5.7c.1-5.9 3.1-11.2 7.6-14.5M600.2 587.2c-19.9 0-36-16.1-36-35.9s16.1-35.9 36-35.9s36 16.1 36 35.9s-16.2 35.9-36 35.9m179.9 0c-19.9 0-36-16.1-36-35.9s16.1-35.9 36-35.9s36 16.1 36 35.9a36.08 36.08 0 0 1-36 35.9"></svg:path>`,
})
export class AntDesignWechatOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignWechatWorkFilledIcon],svg[ant-design-wechat-work-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M805.333 112H218.667C159.756 112 112 159.756 112 218.667v586.666C112 864.244 159.756 912 218.667 912h586.666C864.244 912 912 864.244 912 805.333V218.667C912 159.756 864.244 112 805.333 112m-98.169 417.862a102.13 102.13 0 0 0 28.09 52.454l2.137 2.062c.409.275.796.573 1.156.902l.555.636l.191.022a7.964 7.964 0 0 1-.969 10.818a7.964 7.964 0 0 1-10.853-.178c-1.102-1.05-2.142-2.142-3.24-3.24a102.5 102.5 0 0 0-53.818-28.356l-2.004-.275c-.658-.116-1.342-.387-1.978-.387c-16.28-3.785-27.224-19.06-25.574-35.692s15.384-29.458 32.09-29.97c16.72-.5 31.213 11.487 33.857 28.004c.165 1.085.36 2.156.36 3.2M494.062 683.684a276.8 276.8 0 0 1-61.706.165a267.3 267.3 0 0 1-44.663-8.605l-68.44 34.405c-.329.244-.769.431-1.15.711h-.276a18.289 18.289 0 0 1-27.516-15.902q.042-.882.191-1.742c.134-1.97.6-3.898 1.378-5.712l2.747-11.155l9.564-39.56a277.6 277.6 0 0 1-49.253-54.671a186 186 0 0 1-31.827-103.516a182.4 182.4 0 0 1 19.076-81.044a204 204 0 0 1 37.19-52.316c38.916-39.938 93.259-65.52 153.094-72.035a278 278 0 0 1 30.182-1.64c10.498.03 20.987.649 31.414 1.866c59.586 6.783 113.653 32.476 152.266 72.36a203 203 0 0 1 37 52.476a182.3 182.3 0 0 1 18.17 94.675c-.52-.577-1.019-1.208-1.57-1.76c-10.873-10.836-27.75-12.823-40.844-4.808c.222-2.254.222-4.538.222-6.783a143.64 143.64 0 0 0-14.76-63.382a164 164 0 0 0-29.684-42.147c-31.774-32.768-76.467-53.955-125.885-59.55a234.4 234.4 0 0 0-51.67-.143c-49.614 5.413-94.605 26.453-126.574 59.262a163.6 163.6 0 0 0-29.818 41.951a143.4 143.4 0 0 0-15.12 63.925a147.16 147.16 0 0 0 25.289 81.515a170.5 170.5 0 0 0 24.929 29.396a172 172 0 0 0 17.564 14.747a17.6 17.6 0 0 1 6.351 19.622l-6.489 24.667l-1.866 7.146l-1.622 6.45a2.85 2.85 0 0 0 2.777 2.88a4 4 0 0 0 1.925-.68l43.866-25.934l1.432-.774a23.2 23.2 0 0 1 18.248-1.84c11.09 3.23 22.41 5.61 33.863 7.12l5.222.685a227.3 227.3 0 0 0 51.671-.138a226.6 226.6 0 0 0 42.747-9.067c-1.498 15.476 7.943 29.919 22.72 34.756a269.3 269.3 0 0 1-60.365 14.124m89.071-24.875a33.33 33.33 0 0 1-33.764-18.747a33.32 33.32 0 0 1 6.644-38.03a33.16 33.16 0 0 1 18.254-9.312c1.07-.142 2.19-.36 3.24-.36a102.37 102.37 0 0 0 52.475-28.053l2.2-2.33a10.2 10.2 0 0 1 1.57-1.68v-.026a7.969 7.969 0 1 1 10.64 11.809l-3.245 3.24a102.44 102.44 0 0 0-28.56 53.738c-.085.635-.276 1.35-.276 2.009l-.387 2.004a33.29 33.29 0 0 1-28.79 25.738m94.431 93.867c-16.405 2.02-31.809-8.303-36.177-24.245a28 28 0 0 1-1.098-6.729a102.4 102.4 0 0 0-28.147-52.39l-2.31-2.25a7 7 0 0 1-1.103-.91l-.542-.6h-.031v.057a7.964 7.964 0 0 1 .964-10.818a7.956 7.956 0 0 1 10.849.178l3.222 3.24a102.3 102.3 0 0 0 53.791 28.355l2.005.272a33.271 33.271 0 1 1-1.423 65.84m113.672-103.338a32.84 32.84 0 0 1-18.276 9.315a26 26 0 0 1-3.24.36a102.3 102.3 0 0 0-52.444 28.103a50 50 0 0 0-3.138 3.408l-.68.552h.022l.084.053a7.938 7.938 0 1 1-10.604-11.809l3.24-3.24a102.05 102.05 0 0 0 28.364-53.707a33.262 33.262 0 1 1 62.405-12.093a33.21 33.21 0 0 1-5.733 39.058"></svg:path>`,
})
export class AntDesignWechatWorkFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignWechatWorkOutlinedIcon],svg[ant-design-wechat-work-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M909.784 729.585a135.9 135.9 0 0 0-47.042 19.049a114.24 114.24 0 0 1-51.41 31.075c2.613-17.554 11.313-33.577 24.455-45.418a169.3 169.3 0 0 0 23.409-55.017c-.061-27.838 22.44-50.459 50.265-50.534c27.827-.076 50.45 22.423 50.539 50.26c.089 27.839-22.39 50.482-50.215 50.585zM817.568 608.83a168.8 168.8 0 0 0-54.808-23.68c-27.836 0-50.402-22.575-50.402-50.423s22.566-50.423 50.402-50.423s50.402 22.575 50.402 50.423a137.5 137.5 0 0 0 18.817 47.211a114.8 114.8 0 0 1 30.764 51.656a76.08 76.08 0 0 1-45.026-24.763h-.186zm-83.033-177.713C719.34 303.789 587.548 204.026 428.09 204.026c-169.874 0-308.088 113.097-308.088 252.19c2.72 78.1 43.941 149.778 110.063 191.385a311 311 0 0 0 33.602 21.588l-13.664 54.569c4.928 2.316 9.706 4.78 14.746 6.91l68.996-34.512c10.08 2.615 20.683 4.295 31.21 6.088c6.721 1.195 13.442 2.428 20.35 3.25a354.8 354.8 0 0 0 128.805-7.396a249 249 0 0 0 10.154 55.055a425.6 425.6 0 0 1-96.175 11.242a418 418 0 0 1-86.392-9.524l-125.186 62.526a27.62 27.62 0 0 1-29.98-3.137a28.02 28.02 0 0 1-9.67-28.611l22.401-90.239C117.176 643.186 66.463 553.506 64 456.216C64 285.973 227.004 148 428.09 148c190.93 0 347.29 124.527 362.521 282.818a245 245 0 0 0-26.47-2.614c-9.893.374-19.787 1.307-29.607 2.876zM618.237 629.934c16.764-3.362 32.706-9.786 47.042-19.049a114.24 114.24 0 0 1 51.447-31.001a76.47 76.47 0 0 1-24.491 45.344c-11.014 16.807-18.929 35.483-23.409 55.054c.041 27.833-22.468 50.435-50.29 50.497s-50.43-22.44-50.514-50.273c-.082-27.833 22.393-50.469 50.215-50.572m90.798 121.314c16.652 11.168 35.17 19.236 54.659 23.904c20.386 0 38.764 12.286 46.565 31.127s3.49 40.53-10.926 54.95a50.38 50.38 0 0 1-54.927 10.931c-18.834-7.804-31.114-26.19-31.114-46.585a136.7 136.7 0 0 0-18.668-47.285a114.7 114.7 0 0 1-30.54-51.805a76 76 0 0 1 44.951 25.062z"></svg:path>`,
})
export class AntDesignWechatWorkOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignWeiboCircleFilledIcon],svg[ant-design-weibo-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m-44.4 672C353.1 736 236 680.4 236 588.9c0-47.8 30.2-103.1 82.3-155.3c69.5-69.6 150.6-101.4 181.1-70.8c13.5 13.5 14.8 36.8 6.1 64.6c-4.5 14 13.1 6.3 13.1 6.3c56.2-23.6 105.2-25 123.1.7c9.6 13.7 8.6 32.8-.2 55.1c-4.1 10.2 1.3 11.8 9 14.1c31.7 9.8 66.9 33.6 66.9 75.5c.2 69.5-99.7 156.9-249.8 156.9m207.3-290.8a34.9 34.9 0 0 0-7.2-34.1a34.68 34.68 0 0 0-33.1-10.7a18.24 18.24 0 0 1-7.6-35.7c24.1-5.1 50.1 2.3 67.7 21.9c17.7 19.6 22.4 46.3 14.9 69.8a18.13 18.13 0 0 1-22.9 11.7a18.18 18.18 0 0 1-11.8-22.9m106 34.3s0 .1 0 0a21.1 21.1 0 0 1-26.6 13.7a21.19 21.19 0 0 1-13.6-26.7c11-34.2 4-73.2-21.7-101.8a104.04 104.04 0 0 0-98.9-32.1a21.14 21.14 0 0 1-25.1-16.3a21.07 21.07 0 0 1 16.2-25.1c49.4-10.5 102.8 4.8 139.1 45.1c36.3 40.2 46.1 95.1 30.6 143.2m-334.5 6.1c-91.4 9-160.7 65.1-154.7 125.2c5.9 60.1 84.8 101.5 176.2 92.5c91.4-9.1 160.7-65.1 154.7-125.3c-5.9-60.1-84.8-101.5-176.2-92.4m80.2 141.7c-18.7 42.3-72.3 64.8-117.8 50.1c-43.9-14.2-62.5-57.7-43.3-96.8c18.9-38.4 68-60.1 111.5-48.8c45 11.7 68 54.2 49.6 95.5m-93-32.2c-14.2-5.9-32.4.2-41.2 13.9c-8.8 13.8-4.7 30.2 9.3 36.6c14.3 6.5 33.2.3 42-13.8c8.8-14.3 4.2-30.6-10.1-36.7m34.9-14.5c-5.4-2.2-12.2.5-15.4 5.8c-3.1 5.4-1.4 11.5 4.1 13.8s12.6-.3 15.8-5.8c3-5.6 1-11.8-4.5-13.8"></svg:path>`,
})
export class AntDesignWeiboCircleFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignWeiboCircleOutlinedIcon],svg[ant-design-weibo-circle-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m-44.4 672C353.1 736 236 680.4 236 588.9c0-47.8 30.2-103.1 82.3-155.3c69.5-69.6 150.6-101.4 181.1-70.8c13.5 13.5 14.8 36.8 6.1 64.6c-4.5 14 13.1 6.3 13.1 6.3c56.2-23.6 105.2-25 123.1.7c9.6 13.7 8.6 32.8-.2 55.1c-4.1 10.2 1.3 11.8 9 14.1c31.7 9.8 66.9 33.6 66.9 75.5c.2 69.5-99.7 156.9-249.8 156.9m207.3-290.8a34.9 34.9 0 0 0-7.2-34.1a34.68 34.68 0 0 0-33.1-10.7a18.24 18.24 0 0 1-7.6-35.7c24.1-5.1 50.1 2.3 67.7 21.9c17.7 19.6 22.4 46.3 14.9 69.8a18.13 18.13 0 0 1-22.9 11.7a18.18 18.18 0 0 1-11.8-22.9m106 34.3s0 .1 0 0a21.1 21.1 0 0 1-26.6 13.7a21.19 21.19 0 0 1-13.6-26.7c11-34.2 4-73.2-21.7-101.8a104.04 104.04 0 0 0-98.9-32.1a21.14 21.14 0 0 1-25.1-16.3a21.07 21.07 0 0 1 16.2-25.1c49.4-10.5 102.8 4.8 139.1 45.1c36.3 40.2 46.1 95.1 30.6 143.2m-334.5 6.1c-91.4 9-160.7 65.1-154.7 125.2c5.9 60.1 84.8 101.5 176.2 92.5c91.4-9.1 160.7-65.1 154.7-125.3c-5.9-60.1-84.8-101.5-176.2-92.4m80.2 141.7c-18.7 42.3-72.3 64.8-117.8 50.1c-43.9-14.2-62.5-57.7-43.3-96.8c18.9-38.4 68-60.1 111.5-48.8c45 11.7 68 54.2 49.6 95.5m-93-32.2c-14.2-5.9-32.4.2-41.2 13.9c-8.8 13.8-4.7 30.2 9.3 36.6c14.3 6.5 33.2.3 42-13.8c8.8-14.3 4.2-30.6-10.1-36.7m34.9-14.5c-5.4-2.2-12.2.5-15.4 5.8c-3.1 5.4-1.4 11.5 4.1 13.8s12.6-.3 15.8-5.8c3-5.6 1-11.8-4.5-13.8"></svg:path>`,
})
export class AntDesignWeiboCircleOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignWeiboOutlinedIcon],svg[ant-design-weibo-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M457.3 543c-68.1-17.7-145 16.2-174.6 76.2c-30.1 61.2-1 129.1 67.8 151.3c71.2 23 155.2-12.2 184.4-78.3c28.7-64.6-7.2-131-77.6-149.2m-52 156.2c-13.8 22.1-43.5 31.7-65.8 21.6c-22-10-28.5-35.7-14.6-57.2c13.7-21.4 42.3-31 64.4-21.7c22.4 9.5 29.6 35 16 57.3m45.5-58.5c-5 8.6-16.1 12.7-24.7 9.1c-8.5-3.5-11.2-13.1-6.4-21.5c5-8.4 15.6-12.4 24.1-9.1c8.7 3.2 11.8 12.9 7 21.5m334.5-197.2c15 4.8 31-3.4 35.9-18.3c11.8-36.6 4.4-78.4-23.2-109a111.39 111.39 0 0 0-106-34.3a28.45 28.45 0 0 0-21.9 33.8a28.39 28.39 0 0 0 33.8 21.8c18.4-3.9 38.3 1.8 51.9 16.7a54.2 54.2 0 0 1 11.3 53.3a28.45 28.45 0 0 0 18.2 36m99.8-206c-56.7-62.9-140.4-86.9-217.7-70.5a32.98 32.98 0 0 0-25.4 39.3a33.12 33.12 0 0 0 39.3 25.5c55-11.7 114.4 5.4 154.8 50.1c40.3 44.7 51.2 105.7 34 159.1c-5.6 17.4 3.9 36 21.3 41.7c17.4 5.6 36-3.9 41.6-21.2v-.1c24.1-75.4 8.9-161.1-47.9-223.9M729 499c-12.2-3.6-20.5-6.1-14.1-22.1c13.8-34.7 15.2-64.7.3-86c-28-40.1-104.8-37.9-192.8-1.1c0 0-27.6 12.1-20.6-9.8c13.5-43.5 11.5-79.9-9.6-101c-47.7-47.8-174.6 1.8-283.5 110.6C127.3 471.1 80 557.5 80 632.2C80 775.1 263.2 862 442.5 862c235 0 391.3-136.5 391.3-245c0-65.5-55.2-102.6-104.8-118M443 810.8c-143 14.1-266.5-50.5-275.8-144.5c-9.3-93.9 99.2-181.5 242.2-195.6c143-14.2 266.5 50.5 275.8 144.4C694.4 709 586 796.6 443 810.8"></svg:path>`,
})
export class AntDesignWeiboOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignWeiboSquareFilledIcon],svg[ant-design-weibo-square-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M433.6 595.1c-14.2-5.9-32.4.2-41.2 13.9c-8.8 13.8-4.7 30.2 9.3 36.6c14.3 6.5 33.2.3 42-13.8c8.8-14.3 4.2-30.6-10.1-36.7M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32M467.6 736C353.1 736 236 680.4 236 588.9c0-47.8 30.2-103.1 82.3-155.3c69.5-69.6 150.6-101.4 181.1-70.8c13.5 13.5 14.8 36.8 6.1 64.6c-4.5 14 13.1 6.3 13.1 6.3c56.2-23.6 105.2-25 123.1.7c9.6 13.7 8.6 32.8-.2 55.1c-4.1 10.2 1.3 11.8 9 14.1c31.7 9.8 66.9 33.6 66.9 75.5c.2 69.5-99.7 156.9-249.8 156.9m207.3-290.8a34.9 34.9 0 0 0-7.2-34.1a34.68 34.68 0 0 0-33.1-10.7a18.24 18.24 0 0 1-7.6-35.7c24.1-5.1 50.1 2.3 67.7 21.9c17.7 19.6 22.4 46.3 14.9 69.8a18.13 18.13 0 0 1-22.9 11.7a18.18 18.18 0 0 1-11.8-22.9m106 34.3s0 .1 0 0a21.1 21.1 0 0 1-26.6 13.7a21.19 21.19 0 0 1-13.6-26.7c11-34.2 4-73.2-21.7-101.8a104.04 104.04 0 0 0-98.9-32.1a21.14 21.14 0 0 1-25.1-16.3a21.07 21.07 0 0 1 16.2-25.1c49.4-10.5 102.8 4.8 139.1 45.1c36.3 40.2 46.1 95.1 30.6 143.2m-334.5 6.1c-91.4 9-160.7 65.1-154.7 125.2c5.9 60.1 84.8 101.5 176.2 92.5c91.4-9.1 160.7-65.1 154.7-125.3c-5.9-60.1-84.8-101.5-176.2-92.4m80.2 141.7c-18.7 42.3-72.3 64.8-117.8 50.1c-43.9-14.2-62.5-57.7-43.3-96.8c18.9-38.4 68-60.1 111.5-48.8c45 11.7 68 54.2 49.6 95.5m-58.1-46.7c-5.4-2.2-12.2.5-15.4 5.8c-3.1 5.4-1.4 11.5 4.1 13.8s12.6-.3 15.8-5.8c3-5.6 1-11.8-4.5-13.8"></svg:path>`,
})
export class AntDesignWeiboSquareFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignWeiboSquareOutlinedIcon],svg[ant-design-weibo-square-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M433.6 595.1c-14.2-5.9-32.4.2-41.2 13.9c-8.8 13.8-4.7 30.2 9.3 36.6c14.3 6.5 33.2.3 42-13.8c8.8-14.3 4.2-30.6-10.1-36.7M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32M467.6 736C353.1 736 236 680.4 236 588.9c0-47.8 30.2-103.1 82.3-155.3c69.5-69.6 150.6-101.4 181.1-70.8c13.5 13.5 14.8 36.8 6.1 64.6c-4.5 14 13.1 6.3 13.1 6.3c56.2-23.6 105.2-25 123.1.7c9.6 13.7 8.6 32.8-.2 55.1c-4.1 10.2 1.3 11.8 9 14.1c31.7 9.8 66.9 33.6 66.9 75.5c.2 69.5-99.7 156.9-249.8 156.9m207.3-290.8a34.9 34.9 0 0 0-7.2-34.1a34.68 34.68 0 0 0-33.1-10.7a18.24 18.24 0 0 1-7.6-35.7c24.1-5.1 50.1 2.3 67.7 21.9c17.7 19.6 22.4 46.3 14.9 69.8a18.13 18.13 0 0 1-22.9 11.7a18.18 18.18 0 0 1-11.8-22.9m106 34.3s0 .1 0 0a21.1 21.1 0 0 1-26.6 13.7a21.19 21.19 0 0 1-13.6-26.7c11-34.2 4-73.2-21.7-101.8a104.04 104.04 0 0 0-98.9-32.1a21.14 21.14 0 0 1-25.1-16.3a21.07 21.07 0 0 1 16.2-25.1c49.4-10.5 102.8 4.8 139.1 45.1c36.3 40.2 46.1 95.1 30.6 143.2m-334.5 6.1c-91.4 9-160.7 65.1-154.7 125.2c5.9 60.1 84.8 101.5 176.2 92.5c91.4-9.1 160.7-65.1 154.7-125.3c-5.9-60.1-84.8-101.5-176.2-92.4m80.2 141.7c-18.7 42.3-72.3 64.8-117.8 50.1c-43.9-14.2-62.5-57.7-43.3-96.8c18.9-38.4 68-60.1 111.5-48.8c45 11.7 68 54.2 49.6 95.5m-58.1-46.7c-5.4-2.2-12.2.5-15.4 5.8c-3.1 5.4-1.4 11.5 4.1 13.8s12.6-.3 15.8-5.8c3-5.6 1-11.8-4.5-13.8"></svg:path>`,
})
export class AntDesignWeiboSquareOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignWhatsAppOutlinedIcon],svg[ant-design-whats-app-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M713.5 599.9c-10.9-5.6-65.2-32.2-75.3-35.8c-10.1-3.8-17.5-5.6-24.8 5.6c-7.4 11.1-28.4 35.8-35 43.3c-6.4 7.4-12.9 8.3-23.8 2.8c-64.8-32.4-107.3-57.8-150-131.1c-11.3-19.5 11.3-18.1 32.4-60.2c3.6-7.4 1.8-13.7-1-19.3s-24.8-59.8-34-81.9c-8.9-21.5-18.1-18.5-24.8-18.9c-6.4-.4-13.7-.4-21.1-.4s-19.3 2.8-29.4 13.7c-10.1 11.1-38.6 37.8-38.6 92s39.5 106.7 44.9 114.1c5.6 7.4 77.7 118.6 188.4 166.5c70 30.2 97.4 32.8 132.4 27.6c21.3-3.2 65.2-26.6 74.3-52.5c9.1-25.8 9.1-47.9 6.4-52.5c-2.7-4.9-10.1-7.7-21-13"></svg:path><svg:path fill="currentColor" d="M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3c-41.3-41.3-89.5-73.8-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6.3-119.3 12.3-174.5 35.9c-53.3 22.8-101.1 55.2-142 96.5s-73 89.3-95.2 142.8c-23 55.4-34.6 114.3-34.3 174.9c.3 69.4 16.9 138.3 48 199.9v152c0 25.4 20.6 46 46 46h152.1c61.6 31.1 130.5 47.7 199.9 48h2.1c59.9 0 118-11.6 172.7-34.3c53.5-22.3 101.6-54.3 142.8-95.2c41.3-40.9 73.8-88.7 96.5-142c23.6-55.2 35.6-113.9 35.9-174.5c.3-60.9-11.5-120-34.8-175.6m-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-.4-99.7 37.7-193.3 107.6-263.8c69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9c44.6 18.7 84.6 45.6 119 80c34.3 34.3 61.3 74.4 80 119c19.4 46.2 29.1 95.2 28.9 145.8c-.6 99.6-39.7 192.9-110.1 262.7"></svg:path>`,
})
export class AntDesignWhatsAppOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignWifiOutlinedIcon],svg[ant-design-wifi-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M723 620.5C666.8 571.6 593.4 542 513 542s-153.8 29.6-210.1 78.6a8.1 8.1 0 0 0-.8 11.2l36 42.9c2.9 3.4 8 3.8 11.4.9C393.1 637.2 450.3 614 513 614s119.9 23.2 163.5 61.5c3.4 2.9 8.5 2.5 11.4-.9l36-42.9c2.8-3.3 2.4-8.3-.9-11.2m117.4-140.1C751.7 406.5 637.6 362 513 362s-238.7 44.5-327.5 118.4a8.05 8.05 0 0 0-1 11.3l36 42.9c2.8 3.4 7.9 3.8 11.2 1C308 472.2 406.1 434 513 434s205 38.2 281.2 101.6c3.4 2.8 8.4 2.4 11.2-1l36-42.9c2.8-3.4 2.4-8.5-1-11.3m116.7-139C835.7 241.8 680.3 182 511 182c-168.2 0-322.6 59-443.7 157.4a8 8 0 0 0-1.1 11.4l36 42.9c2.8 3.3 7.8 3.8 11.1 1.1C222 306.7 360.3 254 511 254c151.8 0 291 53.5 400 142.7c3.4 2.8 8.4 2.3 11.2-1.1l36-42.9c2.9-3.4 2.4-8.5-1.1-11.3M448 778a64 64 0 1 0 128 0a64 64 0 1 0-128 0"></svg:path>`,
})
export class AntDesignWifiOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignWindowsFilledIcon],svg[ant-design-windows-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M523.8 191.4v288.9h382V128.1zm0 642.2l382 62.2v-352h-382zM120.1 480.2H443V201.9l-322.9 53.5zm0 290.4L443 823.2V543.8H120.1z"></svg:path>`,
})
export class AntDesignWindowsFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignWindowsOutlinedIcon],svg[ant-design-windows-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M120.1 770.6L443 823.2V543.8H120.1zm63.4-163.5h196.2v141.6l-196.2-31.9zm340.3 226.5l382 62.2v-352h-382zm63.4-226.5h255.3v214.4l-255.3-41.6zm-63.4-415.7v288.8h382V128.1zm318.7 225.5H587.3V245l255.3-42.3v214.2zm-722.4 63.3H443V201.9l-322.9 53.5zM183.5 309l196.2-32.5v140.4H183.5z"></svg:path>`,
})
export class AntDesignWindowsOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignWomanOutlinedIcon],svg[ant-design-woman-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M712.8 548.8c53.6-53.6 83.2-125 83.2-200.8c0-75.9-29.5-147.2-83.2-200.8C659.2 93.6 587.8 64 512 64s-147.2 29.5-200.8 83.2S228 272.1 228 348c0 63.8 20.9 124.4 59.4 173.9c7.3 9.4 15.2 18.3 23.7 26.9c8.5 8.5 17.5 16.4 26.8 23.7c39.6 30.8 86.3 50.4 136.1 57V736H360c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h114v140c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V812h114c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H550V629.5c61.5-8.2 118.2-36.1 162.8-80.7M512 556c-55.6 0-107.7-21.6-147.1-60.9C325.6 455.8 304 403.6 304 348s21.6-107.7 60.9-147.1S456.4 140 512 140s107.7 21.6 147.1 60.9C698.4 240.2 720 292.4 720 348s-21.6 107.7-60.9 147.1C619.7 534.4 567.6 556 512 556"></svg:path>`,
})
export class AntDesignWomanOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignXFilledIcon],svg[ant-design-x-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd"><svg:path d="M823.111 912H200.89C151.8 912 112 872.2 112 823.111V200.89c0-49.09 39.8-88.89 88.889-88.89H823.11c49.09 0 88.89 39.8 88.89 88.889V823.11c0 49.09-39.8 88.89-88.889 88.89"></svg:path><svg:path fill-opacity=".15" fill-rule="nonzero" d="M740 735H596.942L286 291h143.058zm-126.012-37.651h56.96L412.013 328.65h-56.96z"></svg:path><svg:path fill-opacity=".15" fill-rule="nonzero" d="M331.297 735L491 549.732L470.114 522L286 735zM521 460.387L541.213 489L715 289h-44.67z"></svg:path></svg:g>`,
})
export class AntDesignXFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignXOutlinedIcon],svg[ant-design-x-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M921 912L601.11 445.745l.546.437L890.084 112h-96.385L558.738 384L372.15 112H119.367l298.648 435.31l-.036-.037L103 912h96.385l261.222-302.618L668.217 912zM333.96 184.727l448.827 654.546h-76.38l-449.19-654.546z"></svg:path>`,
})
export class AntDesignXOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignYahooFilledIcon],svg[ant-design-yahoo-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M937.3 231H824.7c-15.5 0-27.7 12.6-27.1 28.1l13.1 366h84.4l65.4-366.4c2.7-15.2-7.8-27.7-23.2-27.7m-77.4 450.4h-14.1c-27.1 0-49.2 22.2-49.2 49.3v14.1c0 27.1 22.2 49.3 49.2 49.3h14.1c27.1 0 49.2-22.2 49.2-49.3v-14.1c0-27.1-22.2-49.3-49.2-49.3M402.6 231C216.2 231 65 357 65 512.5S216.2 794 402.6 794s337.6-126 337.6-281.5S589.1 231 402.6 231m225.2 225.2h-65.3L458.9 559.8v65.3h84.4v56.3H318.2v-56.3h84.4v-65.3L242.9 399.9h-37v-56.3h168.5v56.3h-37l93.4 93.5l28.1-28.1V400h168.8v56.2z"></svg:path>`,
})
export class AntDesignYahooFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignYahooOutlinedIcon],svg[ant-design-yahoo-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M859.9 681.4h-14.1c-27.1 0-49.2 22.2-49.2 49.3v14.1c0 27.1 22.2 49.3 49.2 49.3h14.1c27.1 0 49.2-22.2 49.2-49.3v-14.1c0-27.1-22.2-49.3-49.2-49.3M402.6 231C216.2 231 65 357 65 512.5S216.2 794 402.6 794s337.6-126 337.6-281.5S589.1 231 402.6 231m0 507C245.1 738 121 634.6 121 512.5c0-62.3 32.3-119.7 84.9-161v48.4h37l159.8 159.9v65.3h-84.4v56.3h225.1v-56.3H459v-65.3l103.5-103.6h65.3v-56.3H459v65.3l-28.1 28.1l-93.4-93.5h37v-56.3H216.4c49.4-35 114.3-56.6 186.2-56.6c157.6 0 281.6 103.4 281.6 225.5S560.2 738 402.6 738m534.7-507H824.7c-15.5 0-27.7 12.6-27.1 28.1l13.1 366h84.4l65.4-366.4c2.7-15.2-7.8-27.7-23.2-27.7"></svg:path>`,
})
export class AntDesignYahooOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignYoutubeFilledIcon],svg[ant-design-youtube-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M941.3 296.1a112.3 112.3 0 0 0-79.2-79.3C792.2 198 512 198 512 198s-280.2 0-350.1 18.7A112.12 112.12 0 0 0 82.7 296C64 366 64 512 64 512s0 146 18.7 215.9c10.3 38.6 40.7 69 79.2 79.3C231.8 826 512 826 512 826s280.2 0 350.1-18.8c38.6-10.3 68.9-40.7 79.2-79.3C960 658 960 512 960 512s0-146-18.7-215.9M423 646V378l232 133z"></svg:path>`,
})
export class AntDesignYoutubeFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignYoutubeOutlinedIcon],svg[ant-design-youtube-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M960 509.2c0-2.2 0-4.7-.1-7.6c-.1-8.1-.3-17.2-.5-26.9c-.8-27.9-2.2-55.7-4.4-81.9c-3-36.1-7.4-66.2-13.4-88.8a139.52 139.52 0 0 0-98.3-98.5c-28.3-7.6-83.7-12.3-161.7-15.2c-37.1-1.4-76.8-2.3-116.5-2.8c-13.9-.2-26.8-.3-38.4-.4h-29.4c-11.6.1-24.5.2-38.4.4c-39.7.5-79.4 1.4-116.5 2.8c-78 3-133.5 7.7-161.7 15.2A139.35 139.35 0 0 0 82.4 304C76.3 326.6 72 356.7 69 392.8c-2.2 26.2-3.6 54-4.4 81.9c-.3 9.7-.4 18.8-.5 26.9c0 2.9-.1 5.4-.1 7.6v5.6c0 2.2 0 4.7.1 7.6c.1 8.1.3 17.2.5 26.9c.8 27.9 2.2 55.7 4.4 81.9c3 36.1 7.4 66.2 13.4 88.8c12.8 47.9 50.4 85.7 98.3 98.5c28.2 7.6 83.7 12.3 161.7 15.2c37.1 1.4 76.8 2.3 116.5 2.8c13.9.2 26.8.3 38.4.4h29.4c11.6-.1 24.5-.2 38.4-.4c39.7-.5 79.4-1.4 116.5-2.8c78-3 133.5-7.7 161.7-15.2c47.9-12.8 85.5-50.5 98.3-98.5c6.1-22.6 10.4-52.7 13.4-88.8c2.2-26.2 3.6-54 4.4-81.9c.3-9.7.4-18.8.5-26.9c0-2.9.1-5.4.1-7.6zm-72 5.2c0 2.1 0 4.4-.1 7.1c-.1 7.8-.3 16.4-.5 25.7c-.7 26.6-2.1 53.2-4.2 77.9c-2.7 32.2-6.5 58.6-11.2 76.3c-6.2 23.1-24.4 41.4-47.4 47.5c-21 5.6-73.9 10.1-145.8 12.8c-36.4 1.4-75.6 2.3-114.7 2.8c-13.7.2-26.4.3-37.8.3h-28.6l-37.8-.3c-39.1-.5-78.2-1.4-114.7-2.8c-71.9-2.8-124.9-7.2-145.8-12.8c-23-6.2-41.2-24.4-47.4-47.5c-4.7-17.7-8.5-44.1-11.2-76.3c-2.1-24.7-3.4-51.3-4.2-77.9c-.3-9.3-.4-18-.5-25.7c0-2.7-.1-5.1-.1-7.1v-4.8c0-2.1 0-4.4.1-7.1c.1-7.8.3-16.4.5-25.7c.7-26.6 2.1-53.2 4.2-77.9c2.7-32.2 6.5-58.6 11.2-76.3c6.2-23.1 24.4-41.4 47.4-47.5c21-5.6 73.9-10.1 145.8-12.8c36.4-1.4 75.6-2.3 114.7-2.8c13.7-.2 26.4-.3 37.8-.3h28.6l37.8.3c39.1.5 78.2 1.4 114.7 2.8c71.9 2.8 124.9 7.2 145.8 12.8c23 6.2 41.2 24.4 47.4 47.5c4.7 17.7 8.5 44.1 11.2 76.3c2.1 24.7 3.4 51.3 4.2 77.9c.3 9.3.4 18 .5 25.7c0 2.7.1 5.1.1 7.1zM423 646l232-135l-232-133z"></svg:path>`,
})
export class AntDesignYoutubeOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignYuqueFilledIcon],svg[ant-design-yuque-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M854.6 370.6c-9.9-39.4 9.9-102.2 73.4-124.4l-67.9-3.6s-25.7-90-143.6-98c-117.9-8.1-195-3-195-3s87.4 55.6 52.4 154.7c-25.6 52.5-65.8 95.6-108.8 144.7c-1.3 1.3-2.5 2.6-3.5 3.7C319.4 605 96 860 96 860c245.9 64.4 410.7-6.3 508.2-91.1c20.5-.2 35.9-.3 46.3-.3c135.8 0 250.6-117.6 245.9-248.4c-3.2-89.9-31.9-110.2-41.8-149.6"></svg:path>`,
})
export class AntDesignYuqueFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignYuqueOutlinedIcon],svg[ant-design-yuque-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M854.6 370.6c-9.9-39.4 9.9-102.2 73.4-124.4l-67.9-3.6s-25.7-90-143.6-98c-117.8-8.1-194.9-3-195-3c.1 0 87.4 55.6 52.4 154.7c-25.6 52.5-65.8 95.6-108.8 144.7c-1.3 1.3-2.5 2.6-3.5 3.7C319.4 605 96 860 96 860c245.9 64.4 410.7-6.3 508.2-91.1c20.5-.2 35.9-.3 46.3-.3c135.8 0 250.6-117.6 245.9-248.4c-3.2-89.9-31.9-110.2-41.8-149.6m-204.1 334q-15.9 0-46.8.3l-23.6.2l-17.8 15.5c-47.1 41-104.4 71.5-171.4 87.6c-52.5 12.6-110 16.2-172.7 9.6c18-20.5 36.5-41.6 55.4-63.1c92-104.6 173.8-197.5 236.9-268.5l1.4-1.4l1.3-1.5c4.1-4.6 20.6-23.3 24.7-28.1c9.7-11.1 17.3-19.9 24.5-28.6c30.7-36.7 52.2-67.8 69-102.2l1.6-3.3l1.2-3.4c13.7-38.8 15.4-76.9 6.2-112.8c22.5.7 46.5 1.9 71.7 3.6c33.3 2.3 55.5 12.9 71.1 29.2c5.8 6 10.2 12.5 13.4 18.7c1 2 1.7 3.6 2.3 5l5 17.7c-15.7 34.5-19.9 73.3-11.4 107.2c3 11.8 6.9 22.4 12.3 34.4c2.1 4.7 9.5 20.1 11 23.3c10.3 22.7 15.4 43 16.7 78.7c3.3 94.6-82.7 181.9-182 181.9"></svg:path>`,
})
export class AntDesignYuqueOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignZhihuCircleFilledIcon],svg[ant-design-zhihu-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64m-90.7 477.8l-.1 1.5c-1.5 20.4-6.3 43.9-12.9 67.6l24-18.1l71 80.7c9.2 33-3.3 63.1-3.3 63.1l-95.7-111.9v-.1c-8.9 29-20.1 57.3-33.3 84.7c-22.6 45.7-55.2 54.7-89.5 57.7c-34.4 3-23.3-5.3-23.3-5.3c68-55.5 78-87.8 96.8-123.1c11.9-22.3 20.4-64.3 25.3-96.8H264.1s4.8-31.2 19.2-41.7h101.6c.6-15.3-1.3-102.8-2-131.4h-49.4c-9.2 45-41 56.7-48.1 60.1c-7 3.4-23.6 7.1-21.1 0c2.6-7.1 27-46.2 43.2-110.7c16.3-64.6 63.9-62 63.9-62c-12.8 22.5-22.4 73.6-22.4 73.6h159.7c10.1 0 10.6 39 10.6 39h-90.8c-.7 22.7-2.8 83.8-5 131.4H519s12.2 15.4 12.2 41.7zm346.5 167h-87.6l-69.5 46.6l-16.4-46.6h-40.1V321.5h213.6zM408.2 611s0-.1 0 0m216 94.3l56.8-38.1h45.6h-.1V364.7H596.7v302.5h14.1z"></svg:path>`,
})
export class AntDesignZhihuCircleFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignZhihuOutlinedIcon],svg[ant-design-zhihu-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M564.7 230.1V803h60l25.2 71.4L756.3 803h131.5V230.1zm247.7 497h-59.9l-75.1 50.4l-17.8-50.4h-18V308.3h170.7v418.8zM526.1 486.9H393.3c2.1-44.9 4.3-104.3 6.6-172.9h130.9l-.1-8.1c0-.6-.2-14.7-2.3-29.1c-2.1-15-6.6-34.9-21-34.9H287.8c4.4-20.6 15.7-69.7 29.4-93.8l6.4-11.2l-12.9-.7c-.8 0-19.6-.9-41.4 10.6c-35.7 19-51.7 56.4-58.7 84.4c-18.4 73.1-44.6 123.9-55.7 145.6c-3.3 6.4-5.3 10.2-6.2 12.8c-1.8 4.9-.8 9.8 2.8 13c10.5 9.5 38.2-2.9 38.5-3c.6-.3 1.3-.6 2.2-1c13.9-6.3 55.1-25 69.8-84.5h56.7c.7 32.2 3.1 138.4 2.9 172.9h-141l-2.1 1.5c-23.1 16.9-30.5 63.2-30.8 65.2l-1.4 9.2h167c-12.3 78.3-26.5 113.4-34 127.4c-3.7 7-7.3 14-10.7 20.8c-21.3 42.2-43.4 85.8-126.3 153.6c-3.6 2.8-7 8-4.8 13.7c2.4 6.3 9.3 9.1 24.6 9.1c5.4 0 11.8-.3 19.4-1c49.9-4.4 100.8-18 135.1-87.6c17-35.1 31.7-71.7 43.9-108.9L497 850l5-12c.8-1.9 19-46.3 5.1-95.9l-.5-1.8l-108.1-123l-22 16.6c6.4-26.1 10.6-49.9 12.5-71.1h158.7v-8c0-40.1-18.5-63.9-19.2-64.9z"></svg:path>`,
})
export class AntDesignZhihuOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignZhihuSquareFilledIcon],svg[ant-design-zhihu-square-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32M432.3 592.8l71 80.7c9.2 33-3.3 63.1-3.3 63.1l-95.7-111.9v-.1c-8.9 29-20.1 57.3-33.3 84.7c-22.6 45.7-55.2 54.7-89.5 57.7c-34.4 3-23.3-5.3-23.3-5.3c68-55.5 78-87.8 96.8-123.1c11.9-22.3 20.4-64.3 25.3-96.8H264.1s4.8-31.2 19.2-41.7h101.6c.6-15.3-1.3-102.8-2-131.4h-49.4c-9.2 45-41 56.7-48.1 60.1c-7 3.4-23.6 7.1-21.1 0c2.6-7.1 27-46.2 43.2-110.7c16.3-64.6 63.9-62 63.9-62c-12.8 22.5-22.4 73.6-22.4 73.6h159.7c10.1 0 10.6 39 10.6 39h-90.8c-.7 22.7-2.8 83.8-5 131.4H519s12.2 15.4 12.2 41.7h-110l-.1 1.5c-1.5 20.4-6.3 43.9-12.9 67.6zm335.5 116h-87.6l-69.5 46.6l-16.4-46.6h-40.1V321.5h213.6zM408.2 611s0-.1 0 0m216 94.3l56.8-38.1h45.6h-.1V364.7H596.7v302.5h14.1z"></svg:path>`,
})
export class AntDesignZhihuSquareFilledIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignZoomInOutlinedIcon],svg[ant-design-zoom-in-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8m284 424L775 721c122.1-148.9 113.6-369.5-26-509c-148-148.1-388.4-148.1-537 0c-148.1 148.6-148.1 389 0 537c139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11M696 696c-118.8 118.7-311.2 118.7-430 0c-118.7-118.8-118.7-311.2 0-430c118.8-118.7 311.2-118.7 430 0c118.7 118.8 118.7 311.2 0 430"></svg:path>`,
})
export class AntDesignZoomInOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignZoomOutOutlinedIcon],svg[ant-design-zoom-out-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M637 443H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h312c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8m284 424L775 721c122.1-148.9 113.6-369.5-26-509c-148-148.1-388.4-148.1-537 0c-148.1 148.6-148.1 389 0 537c139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11M696 696c-118.8 118.7-311.2 118.7-430 0c-118.7-118.8-118.7-311.2 0-430c118.8-118.7 311.2-118.7 430 0c118.7 118.8 118.7 311.2 0 430"></svg:path>`,
})
export class AntDesignZoomOutOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[antDesignAlibabaOutlinedIcon],svg[ant-design-alibaba-outlined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M602.9 669.8c-37.2 2.6-33.6-17.3-11.5-46.2c50.4-67.2 143.7-158.5 147.9-225.2c5.8-86.6-81.3-113.4-171-113.4c-62.4 1.6-127 18.9-171 34.6c-151.6 53.5-246.6 137.5-306.9 232c-62.4 93.4-43 183.2 91.8 185.8c101.8-4.2 170.5-32.5 239.7-68.2c.5 0-192.5 55.1-263.9 14.7c-7.9-4.2-15.7-10-17.8-26.2c0-33.1 54.6-67.7 86.6-78.7v-56.7c64.5 22.6 140.6 16.3 205.7-32c2.1 5.8 4.2 13.1 3.7 21h11c2.6-22.6-12.6-44.6-37.8-46.2c7.3 5.8 12.6 10.5 15.2 14.7l-1 1l-.5.5c-83.9 58.8-165.3 31.5-173.1 29.9l46.7-45.7l-13.1-33.1c92.9-32.5 169.5-56.2 296.9-78.7l-28.5-23l14.7-8.9c75.5 21 126.4 36.7 123.8 76.6c-1 6.8-3.7 14.7-7.9 23.1C660.1 466.1 594 538 567.2 569c-17.3 20.5-34.6 39.4-46.7 58.3c-13.6 19.4-20.5 37.3-21 53.5c2.6 131.8 391.4-61.9 468-112.9c-111.7 47.8-232.9 93.5-364.6 101.9m85-302.9c2.8 5.2 4.1 11.6 4.1 19.1c-.1-6.8-1.4-13.3-4.1-19.1"></svg:path>`,
})
export class AntDesignAlibabaOutlinedIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
