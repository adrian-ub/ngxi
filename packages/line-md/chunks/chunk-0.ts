import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lineMdAccountIcon],svg[line-md-account-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-dasharray="28" stroke-dashoffset="28" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 21v-1c0 -3.31 2.69 -6 6 -6h4c3.31 0 6 2.69 6 6v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path d="M12 11c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdAccountIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdAccountAddIcon],svg[line-md-account-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M3 21v-1c0 -2.21 1.79 -4 4 -4h4c2.21 0 4 1.79 4 4v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M9 13c-1.66 0 -3 -1.34 -3 -3c0 -1.66 1.34 -3 3 -3c1.66 0 3 1.34 3 3c0 1.66 -1.34 3 -3 3Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M15 6h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M18 3v6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdAccountAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdAccountAlertIcon],svg[line-md-account-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M5 21v-1c0 -2.21 1.79 -4 4 -4h4c2.21 0 4 1.79 4 4v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M11 13c-1.66 0 -3 -1.34 -3 -3c0 -1.66 1.34 -3 3 -3c1.66 0 3 1.34 3 3c0 1.66 -1.34 3 -3 3Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M20 3v4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M20 11v0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="2;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdAccountAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdAccountDeleteIcon],svg[line-md-account-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M3 21v-1c0 -2.21 1.79 -4 4 -4h4c2.21 0 4 1.79 4 4v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M9 13c-1.66 0 -3 -1.34 -3 -3c0 -1.66 1.34 -3 3 -3c1.66 0 3 1.34 3 3c0 1.66 -1.34 3 -3 3Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M15 3l6 6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M21 3l-6 6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="10;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdAccountDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdAccountAlertLoopIcon],svg[line-md-account-alert-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M5 21v-1c0 -2.21 1.79 -4 4 -4h4c2.21 0 4 1.79 4 4v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M11 13c-1.66 0 -3 -1.34 -3 -3c0 -1.66 1.34 -3 3 -3c1.66 0 3 1.34 3 3c0 1.66 -1.34 3 -3 3Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M20 3v4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="6;0"></svg:animate><svg:animate attributeName="stroke-width" begin="1s" dur="3s" keyTimes="0;0.1;0.2;0.3;1" repeatCount="indefinite" values="2;3;3;2;2"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M20 11v0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="2;0"></svg:animate><svg:animate attributeName="stroke-width" begin="1.3s" dur="3s" keyTimes="0;0.1;0.2;0.3;1" repeatCount="indefinite" values="2;3;3;2;2"></svg:animate></svg:path></svg:g>`,
})
export class LineMdAccountAlertLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdAccountRemoveIcon],svg[line-md-account-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M3 21v-1c0 -2.21 1.79 -4 4 -4h4c2.21 0 4 1.79 4 4v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M9 13c-1.66 0 -3 -1.34 -3 -3c0 -1.66 1.34 -3 3 -3c1.66 0 3 1.34 3 3c0 1.66 -1.34 3 -3 3Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M15 6h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdAccountRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdAccountSmallIcon],svg[line-md-account-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-dasharray="20" stroke-dashoffset="20" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M6 19v-1c0 -2.21 1.79 -4 4 -4h4c2.21 0 4 1.79 4 4v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path d="M12 11c-1.66 0 -3 -1.34 -3 -3c0 -1.66 1.34 -3 3 -3c1.66 0 3 1.34 3 3c0 1.66 -1.34 3 -3 3Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="20;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdAccountSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdAlertIcon],svg[line-md-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 3l9 17h-18l9 -17Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M12 10v4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M12 17v0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="2;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdAlertCircleLoopIcon],svg[line-md-alert-circle-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M12 7v6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"></svg:animate><svg:animate attributeName="stroke-width" begin="1.8s" dur="3s" keyTimes="0;0.1;0.2;0.3;1" repeatCount="indefinite" values="2;3;3;2;2"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M12 17v0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="2;0"></svg:animate><svg:animate attributeName="stroke-width" begin="2.1s" dur="3s" keyTimes="0;0.1;0.2;0.3;1" repeatCount="indefinite" values="2;3;3;2;2"></svg:animate></svg:path></svg:g>`,
})
export class LineMdAlertCircleLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdAlertCircleTwotoneIcon],svg[line-md-alert-circle-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path fill="none" stroke-dasharray="8" stroke-dashoffset="8" d="M12 7v6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path fill="none" stroke-dasharray="2" stroke-dashoffset="2" d="M12 17v0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.15s" values="0;0.3"></svg:animate></svg:g>`,
})
export class LineMdAlertCircleTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdAlertCircleTwotoneLoopIcon],svg[line-md-alert-circle-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path fill="none" stroke-dasharray="8" stroke-dashoffset="8" d="M12 7v6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"></svg:animate><svg:animate attributeName="stroke-width" begin="1.95s" dur="3s" keyTimes="0;0.1;0.2;0.3;1" repeatCount="indefinite" values="2;3;3;2;2"></svg:animate></svg:path><svg:path fill="none" stroke-dasharray="2" stroke-dashoffset="2" d="M12 17v0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="2;0"></svg:animate><svg:animate attributeName="stroke-width" begin="2.25s" dur="3s" keyTimes="0;0.1;0.2;0.3;1" repeatCount="indefinite" values="2;3;3;2;2"></svg:animate></svg:path><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.15s" values="0;0.3"></svg:animate></svg:g>`,
})
export class LineMdAlertCircleTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdAlertLoopIcon],svg[line-md-alert-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 3l9 17h-18l9 -17Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M12 10v4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="6;0"></svg:animate><svg:animate attributeName="stroke-width" begin="1.8s" dur="3s" keyTimes="0;0.1;0.2;0.3;1" repeatCount="indefinite" values="2;3;3;2;2"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M12 17v0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="2;0"></svg:animate><svg:animate attributeName="stroke-width" begin="2.1s" dur="3s" keyTimes="0;0.1;0.2;0.3;1" repeatCount="indefinite" values="2;3;3;2;2"></svg:animate></svg:path></svg:g>`,
})
export class LineMdAlertLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdAlertSquareIcon],svg[line-md-alert-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 4h7c0.55 0 1 0.45 1 1v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.44 -1 -1v-14c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M12 7v6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M12 17v0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="2;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdAlertSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdAlertSquareLoopIcon],svg[line-md-alert-square-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 4h7c0.55 0 1 0.45 1 1v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.44 -1 -1v-14c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M12 7v6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"></svg:animate><svg:animate attributeName="stroke-width" begin="1.8s" dur="3s" keyTimes="0;0.1;0.2;0.3;1" repeatCount="indefinite" values="2;3;3;2;2"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M12 17v0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="2;0"></svg:animate><svg:animate attributeName="stroke-width" begin="2.1s" dur="3s" keyTimes="0;0.1;0.2;0.3;1" repeatCount="indefinite" values="2;3;3;2;2"></svg:animate></svg:path></svg:g>`,
})
export class LineMdAlertSquareLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdAlertSquareTwotoneIcon],svg[line-md-alert-square-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 4h7c0.55 0 1 0.45 1 1v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.44 -1 -1v-14c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path fill="none" stroke-dasharray="8" stroke-dashoffset="8" d="M12 7v6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path fill="none" stroke-dasharray="2" stroke-dashoffset="2" d="M12 17v0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.15s" values="0;0.3"></svg:animate></svg:g>`,
})
export class LineMdAlertSquareTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdAlertSquareTwotoneLoopIcon],svg[line-md-alert-square-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 4h7c0.55 0 1 0.45 1 1v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.44 -1 -1v-14c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path fill="none" stroke-dasharray="8" stroke-dashoffset="8" d="M12 7v6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"></svg:animate><svg:animate attributeName="stroke-width" begin="1.95s" dur="3s" keyTimes="0;0.1;0.2;0.3;1" repeatCount="indefinite" values="2;3;3;2;2"></svg:animate></svg:path><svg:path fill="none" stroke-dasharray="2" stroke-dashoffset="2" d="M12 17v0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="2;0"></svg:animate><svg:animate attributeName="stroke-width" begin="2.25s" dur="3s" keyTimes="0;0.1;0.2;0.3;1" repeatCount="indefinite" values="2;3;3;2;2"></svg:animate></svg:path><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.15s" values="0;0.3"></svg:animate></svg:g>`,
})
export class LineMdAlertSquareTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdAlertTwotoneIcon],svg[line-md-alert-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 3l9 17h-18l9 -17Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M12 10v4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M12 17v0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.15s" values="0;0.3"></svg:animate></svg:g>`,
})
export class LineMdAlertTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdAlertTwotoneLoopIcon],svg[line-md-alert-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 3l9 17h-18l9 -17Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M12 10v4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="6;0"></svg:animate><svg:animate attributeName="stroke-width" begin="1.95s" dur="3s" keyTimes="0;0.1;0.2;0.3;1" repeatCount="indefinite" values="2;3;3;2;2"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M12 17v0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="2;0"></svg:animate><svg:animate attributeName="stroke-width" begin="2.25s" dur="3s" keyTimes="0;0.1;0.2;0.3;1" repeatCount="indefinite" values="2;3;3;2;2"></svg:animate></svg:path><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.15s" values="0;0.3"></svg:animate></svg:g>`,
})
export class LineMdAlertTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdAlignCenterIcon],svg[line-md-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M12 5h7M12 5h-7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M12 10h5M12 10h-5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M12 15h9M12 15h-9"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M12 20h7M12 20h-7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdAlignCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdAlignJustifyIcon],svg[line-md-align-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-dasharray="8" stroke-dashoffset="8" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 5h6M12 5h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path d="M12 10h6M12 10h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path d="M12 15h6M12 15h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path d="M12 20h6M12 20h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdAlignJustifyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdAlignLeftIcon],svg[line-md-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M4 5h13"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M4 10h10"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M4 15h16"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M4 20h13"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdAlignLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdAlignRightIcon],svg[line-md-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M20 5h-13"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M20 10h-10"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M20 15h-16"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M20 20h-13"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdAlignRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowAlignBottomIcon],svg[line-md-arrow-align-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M3 21l18 0"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M12 3l0 13.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="16;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M12 17l4 -4M12 17l-4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowAlignBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowAlignCenterIcon],svg[line-md-arrow-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M12 3v18"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M22 12h-6.5M2 12h6.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M15 12l3 3M9 12l-3 3M15 12l3 -3M9 12l-3 -3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowAlignCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowAlignLeftIcon],svg[line-md-arrow-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M3 3v18"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M21 12h-13.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="16;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M7 12l4 4M7 12l4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowAlignLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowAlignMiddleIcon],svg[line-md-arrow-align-middle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M3 12l18 0"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M12 2l0 6.5M12 22l0 -6.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M12 9l3 -3M12 15l3 3M12 9l-3 -3M12 15l-3 3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowAlignMiddleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowAlignRightIcon],svg[line-md-arrow-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M21 3v18"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M3 12h13.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="16;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M17 12l-4 4M17 12l-4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowAlignRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowAlignTopIcon],svg[line-md-arrow-align-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M3 3l18 0"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M12 21l0 -13.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="16;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M12 7l4 4M12 7l-4 4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowAlignTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowCloseDownIcon],svg[line-md-arrow-close-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M3 21l18 0"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M12 3l0 13.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="16;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M12 17l7 -7M12 17l-7 -7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="12;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowCloseDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowCloseLeftIcon],svg[line-md-arrow-close-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M3 3v18"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M21 12h-13.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="16;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M7 12l7 7M7 12l7 -7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="12;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowCloseLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowCloseRightIcon],svg[line-md-arrow-close-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M21 3v18"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M3 12h13.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="16;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M17 12l-7 7M17 12l-7 -7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="12;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowCloseRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowCloseUpIcon],svg[line-md-arrow-close-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M3 3l18 0"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M12 21l0 -13.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="16;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M12 7l7 7M12 7l-7 7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="12;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowCloseUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowDownIcon],svg[line-md-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M12 3l0 17.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M12 21l7 -7M12 21l-7 -7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowDownCircleIcon],svg[line-md-arrow-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M12 7l0 9.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M12 17l4 -4M12 17l-4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowDownCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowDownCircleTwotoneIcon],svg[line-md-arrow-down-circle-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M12 7l0 9.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M12 17l4 -4M12 17l-4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowDownCircleTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowDownSquareIcon],svg[line-md-arrow-down-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 4l7 0c0.55 0 1 0.45 1 1l0 14c0 0.55 -0.44 1 -1 1l-14 0c-0.55 0 -1 -0.45 -1 -1l0 -14c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M12 7l0 9.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M12 17l4 -4M12 17l-4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowDownSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowDownSquareTwotoneIcon],svg[line-md-arrow-down-square-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 4l7 0c0.55 0 1 0.45 1 1l0 14c0 0.55 -0.44 1 -1 1l-14 0c-0.55 0 -1 -0.45 -1 -1l0 -14c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M12 7l0 9.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M12 17l4 -4M12 17l-4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowDownSquareTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowLeftIcon],svg[line-md-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M21 12h-17.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M3 12l7 7M3 12l7 -7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowLeftCircleIcon],svg[line-md-arrow-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M21 12c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M17 12h-9.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M7 12l4 4M7 12l4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowLeftCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowLeftCircleTwotoneIcon],svg[line-md-arrow-left-circle-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M21 12c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M17 12h-9.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M7 12l4 4M7 12l4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowLeftCircleTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowLeftSquareIcon],svg[line-md-arrow-left-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M20 12v7c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.44 -1 -1v-14c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M17 12h-9.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M7 12l4 4M7 12l4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowLeftSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowLeftSquareTwotoneIcon],svg[line-md-arrow-left-square-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M20 12v7c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.44 -1 -1v-14c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M17 12h-9.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M7 12l4 4M7 12l4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowLeftSquareTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowOpenDownIcon],svg[line-md-arrow-open-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M3 3l18 0"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M12 7l0 13.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="16;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M12 21l7 -7M12 21l-7 -7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="12;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowOpenDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowOpenLeftIcon],svg[line-md-arrow-open-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M21 3v18"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M17 12h-13.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="16;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M3 12l7 7M3 12l7 -7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="12;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowOpenLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowOpenRightIcon],svg[line-md-arrow-open-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M3 3v18"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M7 12h13.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="16;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M21 12l-7 7M21 12l-7 -7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="12;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowOpenRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowOpenUpIcon],svg[line-md-arrow-open-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M3 21l18 0"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M12 17l0 -13.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="16;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M12 3l7 7M12 3l-7 7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="12;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowOpenUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowRightIcon],svg[line-md-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M3 12h17.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M21 12l-7 7M21 12l-7 -7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowRightCircleIcon],svg[line-md-arrow-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M3 12c0 4.97 4.03 9 9 9c4.97 0 9 -4.03 9 -9c0 -4.97 -4.03 -9 -9 -9c-4.97 0 -9 4.03 -9 9Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M7 12h9.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M17 12l-4 4M17 12l-4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowRightCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowRightCircleTwotoneIcon],svg[line-md-arrow-right-circle-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M3 12c0 4.97 4.03 9 9 9c4.97 0 9 -4.03 9 -9c0 -4.97 -4.03 -9 -9 -9c-4.97 0 -9 4.03 -9 9Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M7 12h9.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M17 12l-4 4M17 12l-4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowRightCircleTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowRightSquareIcon],svg[line-md-arrow-right-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M4 12v7c0 0.55 0.45 1 1 1h14c0.55 0 1 -0.44 1 -1v-14c0 -0.55 -0.45 -1 -1 -1h-14c-0.55 0 -1 0.45 -1 1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M7 12h9.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M17 12l-4 4M17 12l-4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowRightSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowRightSquareTwotoneIcon],svg[line-md-arrow-right-square-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M4 12v7c0 0.55 0.45 1 1 1h14c0.55 0 1 -0.44 1 -1v-14c0 -0.55 -0.45 -1 -1 -1h-14c-0.55 0 -1 0.45 -1 1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M7 12h9.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M17 12l-4 4M17 12l-4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowRightSquareTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowSmallDownIcon],svg[line-md-arrow-small-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M12 5l0 13.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M12 19l5 -5M12 19l-5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="10;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowSmallDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowSmallLeftIcon],svg[line-md-arrow-small-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M19 12h-13.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M5 12l5 5M5 12l5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="10;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowSmallLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowSmallRightIcon],svg[line-md-arrow-small-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M5 12h13.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M19 12l-5 5M19 12l-5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="10;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowSmallRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowSmallUpIcon],svg[line-md-arrow-small-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M12 19l0 -13.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M12 5l5 5M12 5l-5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="10;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowSmallUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowUpIcon],svg[line-md-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M12 21l0 -17.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M12 3l7 7M12 3l-7 7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="12;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowUpCircleIcon],svg[line-md-arrow-up-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 21c4.97 0 9 -4.03 9 -9c0 -4.97 -4.03 -9 -9 -9c-4.97 0 -9 4.03 -9 9c0 4.97 4.03 9 9 9Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M12 17l0 -9.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M12 7l4 4M12 7l-4 4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowUpCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowUpCircleTwotoneIcon],svg[line-md-arrow-up-circle-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 21c4.97 0 9 -4.03 9 -9c0 -4.97 -4.03 -9 -9 -9c-4.97 0 -9 4.03 -9 9c0 4.97 4.03 9 9 9Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M12 17l0 -9.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M12 7l4 4M12 7l-4 4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowUpCircleTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowUpSquareIcon],svg[line-md-arrow-up-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 20l7 0c0.55 0 1 -0.45 1 -1l0 -14c0 -0.55 -0.44 -1 -1 -1l-14 0c-0.55 0 -1 0.45 -1 1l0 14c0 0.55 0.45 1 1 1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M12 17l0 -9.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M12 7l4 4M12 7l-4 4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowUpSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowUpSquareTwotoneIcon],svg[line-md-arrow-up-square-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 20l7 0c0.55 0 1 -0.45 1 -1l0 -14c0 -0.55 -0.44 -1 -1 -1l-14 0c-0.55 0 -1 0.45 -1 1l0 14c0 0.55 0.45 1 1 1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M12 17l0 -9.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M12 7l4 4M12 7l-4 4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowUpSquareTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowsDiagonalIcon],svg[line-md-arrows-diagonal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M10 14l-6.5 6.5M14 10l6.5 -6.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M21 3h-6M3 21v-6M21 3v6M3 21h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowsDiagonalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowsDiagonalRotatedIcon],svg[line-md-arrows-diagonal-rotated-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M14 14l6.5 6.5M10 10l-6.5 -6.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M3 3h6M21 21v-6M3 3v6M21 21h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowsDiagonalRotatedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowsHorizontalIcon],svg[line-md-arrows-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M15 7h-11.5M9 17h11.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="14;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M3 7l4 4M3 7l4 -4M21 17l-4 4M21 17l-4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowsHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowsHorizontalAltIcon],svg[line-md-arrows-horizontal-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M21 7h-10.5M3 17h10.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M10 7l4 4M10 7l4 -4M14 17l-4 4M14 17l-4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowsHorizontalAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowsLongDiagonalIcon],svg[line-md-arrows-long-diagonal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M12 12l-8.5 8.5M12 12l8.5 -8.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="14;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M21 3h-8M3 21v-8M21 3v8M3 21h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="10;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowsLongDiagonalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowsLongDiagonalRotatedIcon],svg[line-md-arrows-long-diagonal-rotated-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M12 12l8.5 8.5M12 12l-8.5 -8.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="14;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M3 3h8M21 21v-8M3 3v8M21 21h-8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="10;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowsLongDiagonalRotatedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowsVerticalIcon],svg[line-md-arrows-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M17 15l0 -11.5M7 9l0 11.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="14;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M17 3l-4 4M17 3l4 4M7 21l-4 -4M7 21l4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowsVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdArrowsVerticalAltIcon],svg[line-md-arrows-vertical-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M17 21l0 -10.5M7 3l0 10.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M17 10l-4 4M17 10l4 4M7 14l-4 -4M7 14l4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdArrowsVerticalAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdAtIcon],svg[line-md-at-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-dasharray="88" stroke-dashoffset="88" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4c2.21 0 4 1.79 4 4v1.5c0 1.38 1.12 2.5 2.5 2.5c1.38 0 2.5 -1.12 2.5 -2.5v-1.5c0 -4.97 -4.03 -9 -9 -9c-4.97 0 -9 4.03 -9 9c0 4.97 4.03 9 9 9h4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="1s" values="88;0"></svg:animate></svg:path>`,
})
export class LineMdAtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBackupRestoreIcon],svg[line-md-backup-restore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="0" fill="currentColor"><svg:animate fill="freeze" attributeName="r" begin="0.8s" dur="0.2s" values="0;2"></svg:animate></svg:circle><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="48" stroke-dashoffset="48" d="M4.25 14c0.89 3.45 4.02 6 7.75 6c4.42 0 8 -3.58 8 -8c0 -4.42 -3.58 -8 -8 -8c-2.39 0 -4.53 1.05 -6 2.71l-2 2.29"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"></svg:animate></svg:path><svg:path fill="currentColor" stroke-width="1" d="M5.63 7.38l0 0l0 0l0 0z" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M5.63 7.38l0 0l0 0l0 0z;M5.63 7.38L3.5 5.25L3.5 9.5L7.75 9.5z"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.6s" to="1"></svg:set></svg:path></svg:g>`,
})
export class LineMdBackupRestoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBeerIcon],svg[line-md-beer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M18 3l-2 18h-9l-2 -18Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M6 7.67c0.6 -0.37 1.22 -0.67 2 -0.67c2 0 3 2 5 2c1.64 0 2.6 -1.34 4 -1.83"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="14;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdBeerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBeerAltIcon],svg[line-md-beer-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdBeerAlt0"><svg:g><svg:path fill="none" stroke="#fff" stroke-width="2" d="M5 23.67h1c0.6 -0.37 1.22 -0.67 2 -0.67c2 0 3 2 5 2c1.64 0 2.6 -1.34 4 -1.83h1"></svg:path><svg:animatemotion fill="freeze" begin="0.7s" calcMode="linear" dur="0.3s" path="M0 0v-16"></svg:animatemotion></svg:g></svg:mask><svg:path fill="none" stroke="currentColor" stroke-dasharray="64" stroke-dashoffset="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 3l-2 18h-9l-2 -18Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path fill="currentColor" d="M18 3l-2 18h-9l-2 -18Z" mask="url(#lineMdBeerAlt0)"></svg:path>`,
})
export class LineMdBeerAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBeerAltFilledIcon],svg[line-md-beer-alt-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdBeerAltFilled0"><svg:g><svg:path fill="none" stroke="#fff" stroke-width="2" d="M5 23.67h1c0.6 -0.37 1.22 -0.67 2 -0.67c2 0 3 2 5 2c1.64 0 2.6 -1.34 4 -1.83h1"></svg:path><svg:path fill="#fff" d="M5 23.67h1c0.6 -0.37 1.22 -0.67 2 -0.67c2 0 3 2 5 2c1.64 0 2.6 -1.34 4 -1.83h1v16.83h-12Z"></svg:path><svg:animatemotion fill="freeze" begin="0.7s" calcMode="linear" dur="0.3s" path="M0 0v-16"></svg:animatemotion></svg:g></svg:mask><svg:path fill="none" stroke="currentColor" stroke-dasharray="64" stroke-dashoffset="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 3l-2 18h-9l-2 -18Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path fill="currentColor" d="M18 3l-2 18h-9l-2 -18Z" mask="url(#lineMdBeerAltFilled0)"></svg:path>`,
})
export class LineMdBeerAltFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBeerAltFilledLoopIcon],svg[line-md-beer-alt-filled-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdBeerAltFilledLoop0"><svg:g><svg:g><svg:path fill="none" stroke="#fff" stroke-width="2" d="M18 23c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2"></svg:path><svg:path fill="#fff" d="M18 23c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2v15h25Z"></svg:path><svg:animatemotion calcMode="linear" dur="3s" path="M0 0h10" repeatCount="indefinite"></svg:animatemotion></svg:g><svg:animatemotion fill="freeze" begin="0.7s" calcMode="linear" dur="0.3s" path="M0 0v-16"></svg:animatemotion></svg:g></svg:mask><svg:path fill="none" stroke="currentColor" stroke-dasharray="64" stroke-dashoffset="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 3l-2 18h-9l-2 -18Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path fill="currentColor" d="M18 3l-2 18h-9l-2 -18Z" mask="url(#lineMdBeerAltFilledLoop0)"></svg:path>`,
})
export class LineMdBeerAltFilledLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBeerAltLoopIcon],svg[line-md-beer-alt-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdBeerAltLoop0"><svg:g><svg:g><svg:path fill="none" stroke="#fff" stroke-width="2" d="M18 23c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2"></svg:path><svg:animatemotion calcMode="linear" dur="3s" path="M0 0h10" repeatCount="indefinite"></svg:animatemotion></svg:g><svg:animatemotion fill="freeze" begin="0.7s" calcMode="linear" dur="0.3s" path="M0 0v-16"></svg:animatemotion></svg:g></svg:mask><svg:path fill="none" stroke="currentColor" stroke-dasharray="64" stroke-dashoffset="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 3l-2 18h-9l-2 -18Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path fill="currentColor" d="M18 3l-2 18h-9l-2 -18Z" mask="url(#lineMdBeerAltLoop0)"></svg:path>`,
})
export class LineMdBeerAltLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBeerAltTwotoneIcon],svg[line-md-beer-alt-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdBeerAltTwotone0"><svg:g><svg:path fill="none" stroke="#fff" stroke-width="2" d="M5 23.67h1c0.6 -0.37 1.22 -0.67 2 -0.67c2 0 3 2 5 2c1.64 0 2.6 -1.34 4 -1.83h1"></svg:path><svg:path fill="#fff" fill-opacity=".3" d="M5 23.67h1c0.6 -0.37 1.22 -0.67 2 -0.67c2 0 3 2 5 2c1.64 0 2.6 -1.34 4 -1.83h1v16.83h-12Z"></svg:path><svg:animatemotion fill="freeze" begin="0.7s" calcMode="linear" dur="0.3s" path="M0 0v-16"></svg:animatemotion></svg:g></svg:mask><svg:path fill="none" stroke="currentColor" stroke-dasharray="64" stroke-dashoffset="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 3l-2 18h-9l-2 -18Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path fill="currentColor" d="M18 3l-2 18h-9l-2 -18Z" mask="url(#lineMdBeerAltTwotone0)"></svg:path>`,
})
export class LineMdBeerAltTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBeerAltTwotoneLoopIcon],svg[line-md-beer-alt-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdBeerAltTwotoneLoop0"><svg:g><svg:g><svg:path fill="none" stroke="#fff" stroke-width="2" d="M18 23c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2"></svg:path><svg:path fill="#fff" fill-opacity=".3" d="M18 23c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2v15h25Z"></svg:path><svg:animatemotion calcMode="linear" dur="3s" path="M0 0h10" repeatCount="indefinite"></svg:animatemotion></svg:g><svg:animatemotion fill="freeze" begin="0.7s" calcMode="linear" dur="0.3s" path="M0 0v-16"></svg:animatemotion></svg:g></svg:mask><svg:path fill="none" stroke="currentColor" stroke-dasharray="64" stroke-dashoffset="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 3l-2 18h-9l-2 -18Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path fill="currentColor" d="M18 3l-2 18h-9l-2 -18Z" mask="url(#lineMdBeerAltTwotoneLoop0)"></svg:path>`,
})
export class LineMdBeerAltTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBeerFilledIcon],svg[line-md-beer-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M17 8L16 21H7L6 8z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.5s" values="0;1"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M18 3l-2 18h-9l-2 -18Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M6 7.67c0.6 -0.37 1.22 -0.67 2 -0.67c2 0 3 2 5 2c1.64 0 2.6 -1.34 4 -1.83"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="14;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdBeerFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBeerFilledLoopIcon],svg[line-md-beer-filled-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdBeerFilledLoop0"><svg:path fill="none" stroke="#fff" stroke-width="2" d="M18 7c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2" opacity="0"><svg:animatemotion calcMode="linear" dur="3s" path="M0 0h10" repeatCount="indefinite"></svg:animatemotion><svg:animate fill="freeze" attributeName="opacity" begin="0.7s" dur="0.4s" values="0;1"></svg:animate></svg:path></svg:mask><svg:path fill="currentColor" fill-opacity="0" d="M17 8L16 21H7L6 8z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.5s" values="0;1"></svg:animate></svg:path><svg:path fill="none" stroke="currentColor" stroke-dasharray="64" stroke-dashoffset="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 3l-2 18h-9l-2 -18Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path fill="currentColor" d="M18 3l-2 18h-9l-2 -18Z" mask="url(#lineMdBeerFilledLoop0)"></svg:path>`,
})
export class LineMdBeerFilledLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBeerLoopIcon],svg[line-md-beer-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdBeerLoop0"><svg:path fill="none" stroke="#fff" stroke-width="2" d="M18 7c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2" opacity="0"><svg:animatemotion calcMode="linear" dur="3s" path="M0 0h10" repeatCount="indefinite"></svg:animatemotion><svg:animate fill="freeze" attributeName="opacity" begin="0.7s" dur="0.4s" values="0;1"></svg:animate></svg:path></svg:mask><svg:path fill="none" stroke="currentColor" stroke-dasharray="64" stroke-dashoffset="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 3l-2 18h-9l-2 -18Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path fill="currentColor" d="M18 3l-2 18h-9l-2 -18Z" mask="url(#lineMdBeerLoop0)"></svg:path>`,
})
export class LineMdBeerLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBeerTwotoneIcon],svg[line-md-beer-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M17 8L16 21H7L6 8z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M18 3l-2 18h-9l-2 -18Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M6 7.67c0.6 -0.37 1.22 -0.67 2 -0.67c2 0 3 2 5 2c1.64 0 2.6 -1.34 4 -1.83"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="14;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdBeerTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBeerTwotoneLoopIcon],svg[line-md-beer-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdBeerTwotoneLoop0"><svg:path fill="none" stroke="#fff" stroke-width="2" d="M18 7c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2c-2 0 -3 -2 -5 -2c-2 0 -3 2 -5 2" opacity="0"><svg:animatemotion calcMode="linear" dur="3s" path="M0 0h10" repeatCount="indefinite"></svg:animatemotion><svg:animate fill="freeze" attributeName="opacity" begin="0.7s" dur="0.4s" values="0;1"></svg:animate></svg:path></svg:mask><svg:path fill="currentColor" fill-opacity="0" d="M17 8L16 21H7L6 8z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:path fill="none" stroke="currentColor" stroke-dasharray="64" stroke-dashoffset="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 3l-2 18h-9l-2 -18Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path fill="currentColor" d="M18 3l-2 18h-9l-2 -18Z" mask="url(#lineMdBeerTwotoneLoop0)"></svg:path>`,
})
export class LineMdBeerTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBellIcon],svg[line-md-bell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M12 3v2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="4;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M12 5c-3.31 0 -6 2.69 -6 6l0 6c-1 0 -2 1 -2 2h8M12 5c3.31 0 6 2.69 6 6l0 6c1 0 2 1 2 2h-8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M10 20c0 1.1 0.9 2 2 2c1.1 0 2 -0.9 2 -2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdBellIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBellAlertIcon],svg[line-md-bell-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M12 3v2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="4;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M12 5c-3.31 0 -6 2.69 -6 6l0 6c-1 0 -2 1 -2 2h8M12 5c3.31 0 6 2.69 6 6l0 6c1 0 2 1 2 2h-8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M10 20c0 1.1 0.9 2 2 2c1.1 0 2 -0.9 2 -2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M22 6v4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M22 14v0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="2;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdBellAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBellAlertFilledIcon],svg[line-md-bell-alert-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M12 3v2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="4;0"></svg:animate></svg:path><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="28" stroke-dashoffset="28" d="M12 5c-3.31 0 -6 2.69 -6 6l0 6c-1 0 -2 1 -2 2h8M12 5c3.31 0 6 2.69 6 6l0 6c1 0 2 1 2 2h-8"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M10 20c0 1.1 0.9 2 2 2c1.1 0 2 -0.9 2 -2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M22 6v4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M22 14v0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.2s" values="2;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdBellAlertFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBellAlertFilledLoopIcon],svg[line-md-bell-alert-filled-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:g><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M12 3v2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="4;0"></svg:animate></svg:path><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="28" stroke-dashoffset="28" d="M12 5c-3.31 0 -6 2.69 -6 6l0 6c-1 0 -2 1 -2 2h8M12 5c3.31 0 6 2.69 6 6l0 6c1 0 2 1 2 2h-8"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:animatetransform fill="freeze" attributeName="transform" begin="0.9s" dur="6s" keyTimes="0;0.05;0.15;0.2;1" type="rotate" values="0 12 3;3 12 3;-3 12 3;0 12 3;0 12 3"></svg:animatetransform></svg:g><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M10 20c0 1.1 0.9 2 2 2c1.1 0 2 -0.9 2 -2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"></svg:animate><svg:animatetransform fill="freeze" attributeName="transform" begin="1.1s" dur="6s" keyTimes="0;0.05;0.15;0.2;1" type="rotate" values="0 12 8;6 12 8;-6 12 8;0 12 8;0 12 8"></svg:animatetransform></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M22 6v4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" values="6;0"></svg:animate><svg:animate attributeName="stroke-width" begin="2.3s" dur="3s" keyTimes="0;0.1;0.2;0.3;1" repeatCount="indefinite" values="2;3;3;2;2"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M22 14v0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.2s" values="2;0"></svg:animate><svg:animate attributeName="stroke-width" begin="2.6s" dur="3s" keyTimes="0;0.1;0.2;0.3;1" repeatCount="indefinite" values="2;3;3;2;2"></svg:animate></svg:path></svg:g>`,
})
export class LineMdBellAlertFilledLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBellAlertLoopIcon],svg[line-md-bell-alert-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:g><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M12 3v2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="4;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M12 5c-3.31 0 -6 2.69 -6 6l0 6c-1 0 -2 1 -2 2h8M12 5c3.31 0 6 2.69 6 6l0 6c1 0 2 1 2 2h-8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:animatetransform fill="freeze" attributeName="transform" begin="0.9s" dur="6s" keyTimes="0;0.05;0.15;0.2;1" type="rotate" values="0 12 3;3 12 3;-3 12 3;0 12 3;0 12 3"></svg:animatetransform></svg:g><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M10 20c0 1.1 0.9 2 2 2c1.1 0 2 -0.9 2 -2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"></svg:animate><svg:animatetransform fill="freeze" attributeName="transform" begin="1.1s" dur="6s" keyTimes="0;0.05;0.15;0.2;1" type="rotate" values="0 12 8;6 12 8;-6 12 8;0 12 8;0 12 8"></svg:animatetransform></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M22 6v4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="6;0"></svg:animate><svg:animate attributeName="stroke-width" begin="1.8s" dur="3s" keyTimes="0;0.1;0.2;0.3;1" repeatCount="indefinite" values="2;3;3;2;2"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M22 14v0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="2;0"></svg:animate><svg:animate attributeName="stroke-width" begin="2.1s" dur="3s" keyTimes="0;0.1;0.2;0.3;1" repeatCount="indefinite" values="2;3;3;2;2"></svg:animate></svg:path></svg:g>`,
})
export class LineMdBellAlertLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBellAlertTwotoneIcon],svg[line-md-bell-alert-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M12 3v2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="4;0"></svg:animate></svg:path><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="28" stroke-dashoffset="28" d="M12 5c-3.31 0 -6 2.69 -6 6l0 6c-1 0 -2 1 -2 2h8M12 5c3.31 0 6 2.69 6 6l0 6c1 0 2 1 2 2h-8"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M10 20c0 1.1 0.9 2 2 2c1.1 0 2 -0.9 2 -2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M22 6v4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.05s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M22 14v0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.25s" dur="0.2s" values="2;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdBellAlertTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBellAlertTwotoneLoopIcon],svg[line-md-bell-alert-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:g><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M12 3v2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="4;0"></svg:animate></svg:path><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="28" stroke-dashoffset="28" d="M12 5c-3.31 0 -6 2.69 -6 6l0 6c-1 0 -2 1 -2 2h8M12 5c3.31 0 6 2.69 6 6l0 6c1 0 2 1 2 2h-8"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:animatetransform fill="freeze" attributeName="transform" begin="0.9s" dur="6s" keyTimes="0;0.05;0.15;0.2;1" type="rotate" values="0 12 3;3 12 3;-3 12 3;0 12 3;0 12 3"></svg:animatetransform></svg:g><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M10 20c0 1.1 0.9 2 2 2c1.1 0 2 -0.9 2 -2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"></svg:animate><svg:animatetransform fill="freeze" attributeName="transform" begin="1.1s" dur="6s" keyTimes="0;0.05;0.15;0.2;1" type="rotate" values="0 12 8;6 12 8;-6 12 8;0 12 8;0 12 8"></svg:animatetransform></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M22 6v4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.05s" dur="0.2s" values="6;0"></svg:animate><svg:animate attributeName="stroke-width" begin="1.95s" dur="3s" keyTimes="0;0.1;0.2;0.3;1" repeatCount="indefinite" values="2;3;3;2;2"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M22 14v0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.25s" dur="0.2s" values="2;0"></svg:animate><svg:animate attributeName="stroke-width" begin="2.25s" dur="3s" keyTimes="0;0.1;0.2;0.3;1" repeatCount="indefinite" values="2;3;3;2;2"></svg:animate></svg:path></svg:g>`,
})
export class LineMdBellAlertTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBellFilledIcon],svg[line-md-bell-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M12 3v2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="4;0"></svg:animate></svg:path><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="28" stroke-dashoffset="28" d="M12 5c-3.31 0 -6 2.69 -6 6l0 6c-1 0 -2 1 -2 2h8M12 5c3.31 0 6 2.69 6 6l0 6c1 0 2 1 2 2h-8"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M10 20c0 1.1 0.9 2 2 2c1.1 0 2 -0.9 2 -2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdBellFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBellFilledLoopIcon],svg[line-md-bell-filled-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:g><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M12 3v2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="4;0"></svg:animate></svg:path><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="28" stroke-dashoffset="28" d="M12 5c-3.31 0 -6 2.69 -6 6l0 6c-1 0 -2 1 -2 2h8M12 5c3.31 0 6 2.69 6 6l0 6c1 0 2 1 2 2h-8"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:animatetransform fill="freeze" attributeName="transform" begin="0.9s" dur="6s" keyTimes="0;0.05;0.15;0.2;1" type="rotate" values="0 12 3;3 12 3;-3 12 3;0 12 3;0 12 3"></svg:animatetransform></svg:g><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M10 20c0 1.1 0.9 2 2 2c1.1 0 2 -0.9 2 -2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"></svg:animate><svg:animatetransform fill="freeze" attributeName="transform" begin="1.1s" dur="6s" keyTimes="0;0.05;0.15;0.2;1" type="rotate" values="0 12 8;6 12 8;-6 12 8;0 12 8;0 12 8"></svg:animatetransform></svg:path></svg:g>`,
})
export class LineMdBellFilledLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBellLoopIcon],svg[line-md-bell-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:g><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M12 3v2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="4;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M12 5c-3.31 0 -6 2.69 -6 6l0 6c-1 0 -2 1 -2 2h8M12 5c3.31 0 6 2.69 6 6l0 6c1 0 2 1 2 2h-8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:animatetransform fill="freeze" attributeName="transform" begin="0.9s" dur="6s" keyTimes="0;0.05;0.15;0.2;1" type="rotate" values="0 12 3;3 12 3;-3 12 3;0 12 3;0 12 3"></svg:animatetransform></svg:g><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M10 20c0 1.1 0.9 2 2 2c1.1 0 2 -0.9 2 -2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"></svg:animate><svg:animatetransform fill="freeze" attributeName="transform" begin="1.1s" dur="6s" keyTimes="0;0.05;0.15;0.2;1" type="rotate" values="0 12 8;6 12 8;-6 12 8;0 12 8;0 12 8"></svg:animatetransform></svg:path></svg:g>`,
})
export class LineMdBellLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBellTwotoneIcon],svg[line-md-bell-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M12 3v2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="4;0"></svg:animate></svg:path><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="28" stroke-dashoffset="28" d="M12 5c-3.31 0 -6 2.69 -6 6l0 6c-1 0 -2 1 -2 2h8M12 5c3.31 0 6 2.69 6 6l0 6c1 0 2 1 2 2h-8"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M10 20c0 1.1 0.9 2 2 2c1.1 0 2 -0.9 2 -2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdBellTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBellTwotoneLoopIcon],svg[line-md-bell-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:g><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M12 3v2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="4;0"></svg:animate></svg:path><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="28" stroke-dashoffset="28" d="M12 5c-3.31 0 -6 2.69 -6 6l0 6c-1 0 -2 1 -2 2h8M12 5c3.31 0 6 2.69 6 6l0 6c1 0 2 1 2 2h-8"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:animatetransform fill="freeze" attributeName="transform" begin="0.9s" dur="6s" keyTimes="0;0.05;0.15;0.2;1" type="rotate" values="0 12 3;3 12 3;-3 12 3;0 12 3;0 12 3"></svg:animatetransform></svg:g><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M10 20c0 1.1 0.9 2 2 2c1.1 0 2 -0.9 2 -2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"></svg:animate><svg:animatetransform fill="freeze" attributeName="transform" begin="1.1s" dur="6s" keyTimes="0;0.05;0.15;0.2;1" type="rotate" values="0 12 8;6 12 8;-6 12 8;0 12 8;0 12 8"></svg:animatetransform></svg:path></svg:g>`,
})
export class LineMdBellTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBrakeIcon],svg[line-md-brake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="56" stroke-dashoffset="56" d="M12 4c4.42 0 8 3.58 8 8c0 4.42 -3.58 8 -8 8c-4.42 0 -8 -3.58 -8 -8c0 -4.42 3.58 -8 8 -8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M4.22 4.22c-4.29 4.3 -4.29 11.26 0 15.56"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M19.78 4.22c4.29 4.3 4.29 11.26 0 15.56"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="20;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdBrakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBrakeAbsIcon],svg[line-md-brake-abs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdBrakeAbs0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="56" stroke-dashoffset="56" d="M12 4c4.42 0 8 3.58 8 8c0 4.42 -3.58 8 -8 8c-4.42 0 -8 -3.58 -8 -8c0 -4.42 3.58 -8 8 -8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M4.22 4.22c-4.29 4.3 -4.29 11.26 0 15.56"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M19.78 4.22c4.29 4.3 4.29 11.26 0 15.56"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M4 6h16c1.26 1.67 2 3.75 2 6c0 2.25 -0.74 4.33 -2 6h-16c-1.26 -1.67 -2 -3.75 -2 -6c0 -2.25 0.74 -4.33 2 -6Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.2s" values="0;1"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" stroke="none" d="M7.2 16v-3.2h-1.6v3.2h-1.6v-6.4c0 -0.42 0.17 -0.83 0.47 -1.13c0.3 -0.3 0.71 -0.47 1.13 -0.47h1.6c0.88 0 1.6 0.72 1.6 1.6v6.4h-1.6ZM7.2 11.2v-1.6h-1.6v1.6h1.6Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.2s" values="0;1"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" stroke="none" d="M13.2 12c0.64 0 1.2 0.56 1.2 1.2v1.2c0 0.21 -0.04 0.42 -0.12 0.61c-0.08 0.19 -0.2 0.37 -0.35 0.52c-0.15 0.15 -0.32 0.27 -0.52 0.35c-0.19 0.08 -0.4 0.12 -0.61 0.12h-3.2v-8h3.2c0.42 0 0.83 0.17 1.13 0.47c0.3 0.3 0.47 0.71 0.47 1.13v1.2c0 0.64 -0.56 1.2 -1.2 1.2ZM12.8 12.8h-1.6v1.6h1.6v-1.6ZM12.8 9.6h-1.6v1.6h1.6v-1.6Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.5s" dur="0.2s" values="0;1"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" stroke="none" d="M20 9.6v-1.6h-3.2c-0.88 0 -1.6 0.72 -1.6 1.6v1.6c0 0.42 0.17 0.83 0.47 1.13c0.3 0.3 0.71 0.47 1.13 0.47h1.6v1.6h-3.2v1.6h3.2c0.88 0 1.6 -0.72 1.6 -1.6v-1.6c0 -0.42 -0.17 -0.83 -0.47 -1.13c-0.3 -0.3 -0.71 -0.47 -1.13 -0.47h-1.6v-1.6h3.2Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.7s" dur="0.2s" values="0;1"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdBrakeAbs0)"></svg:rect>`,
})
export class LineMdBrakeAbsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBrakeAbsFilledIcon],svg[line-md-brake-abs-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdBrakeAbsFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="56" stroke-dashoffset="56" d="M12 4c4.42 0 8 3.58 8 8c0 4.42 -3.58 8 -8 8c-4.42 0 -8 -3.58 -8 -8c0 -4.42 3.58 -8 8 -8"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M4.22 4.22c-4.29 4.3 -4.29 11.26 0 15.56"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M19.78 4.22c4.29 4.3 4.29 11.26 0 15.56"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M4 6h16c1.26 1.67 2 3.75 2 6c0 2.25 -0.74 4.33 -2 6h-16c-1.26 -1.67 -2 -3.75 -2 -6c0 -2.25 0.74 -4.33 2 -6Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.6s" dur="0.2s" values="0;1"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" stroke="none" d="M7.2 16v-3.2h-1.6v3.2h-1.6v-6.4c0 -0.42 0.17 -0.83 0.47 -1.13c0.3 -0.3 0.71 -0.47 1.13 -0.47h1.6c0.88 0 1.6 0.72 1.6 1.6v6.4h-1.6ZM7.2 11.2v-1.6h-1.6v1.6h1.6Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.8s" dur="0.2s" values="0;1"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" stroke="none" d="M13.2 12c0.64 0 1.2 0.56 1.2 1.2v1.2c0 0.21 -0.04 0.42 -0.12 0.61c-0.08 0.19 -0.2 0.37 -0.35 0.52c-0.15 0.15 -0.32 0.27 -0.52 0.35c-0.19 0.08 -0.4 0.12 -0.61 0.12h-3.2v-8h3.2c0.42 0 0.83 0.17 1.13 0.47c0.3 0.3 0.47 0.71 0.47 1.13v1.2c0 0.64 -0.56 1.2 -1.2 1.2ZM12.8 12.8h-1.6v1.6h1.6v-1.6ZM12.8 9.6h-1.6v1.6h1.6v-1.6Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="2s" dur="0.2s" values="0;1"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" stroke="none" d="M20 9.6v-1.6h-3.2c-0.88 0 -1.6 0.72 -1.6 1.6v1.6c0 0.42 0.17 0.83 0.47 1.13c0.3 0.3 0.71 0.47 1.13 0.47h1.6v1.6h-3.2v1.6h3.2c0.88 0 1.6 -0.72 1.6 -1.6v-1.6c0 -0.42 -0.17 -0.83 -0.47 -1.13c-0.3 -0.3 -0.71 -0.47 -1.13 -0.47h-1.6v-1.6h3.2Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="2.2s" dur="0.2s" values="0;1"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdBrakeAbsFilled0)"></svg:rect>`,
})
export class LineMdBrakeAbsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBrakeAbsTwotoneIcon],svg[line-md-brake-abs-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdBrakeAbsTwotone0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="56" stroke-dashoffset="56" d="M12 4c4.42 0 8 3.58 8 8c0 4.42 -3.58 8 -8 8c-4.42 0 -8 -3.58 -8 -8c0 -4.42 3.58 -8 8 -8"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.9s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M4.22 4.22c-4.29 4.3 -4.29 11.26 0 15.56"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M19.78 4.22c4.29 4.3 4.29 11.26 0 15.56"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M4 6h16c1.26 1.67 2 3.75 2 6c0 2.25 -0.74 4.33 -2 6h-16c-1.26 -1.67 -2 -3.75 -2 -6c0 -2.25 0.74 -4.33 2 -6Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.2s" values="0;1"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" stroke="none" d="M7.2 16v-3.2h-1.6v3.2h-1.6v-6.4c0 -0.42 0.17 -0.83 0.47 -1.13c0.3 -0.3 0.71 -0.47 1.13 -0.47h1.6c0.88 0 1.6 0.72 1.6 1.6v6.4h-1.6ZM7.2 11.2v-1.6h-1.6v1.6h1.6Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.2s" values="0;1"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" stroke="none" d="M13.2 12c0.64 0 1.2 0.56 1.2 1.2v1.2c0 0.21 -0.04 0.42 -0.12 0.61c-0.08 0.19 -0.2 0.37 -0.35 0.52c-0.15 0.15 -0.32 0.27 -0.52 0.35c-0.19 0.08 -0.4 0.12 -0.61 0.12h-3.2v-8h3.2c0.42 0 0.83 0.17 1.13 0.47c0.3 0.3 0.47 0.71 0.47 1.13v1.2c0 0.64 -0.56 1.2 -1.2 1.2ZM12.8 12.8h-1.6v1.6h1.6v-1.6ZM12.8 9.6h-1.6v1.6h1.6v-1.6Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.5s" dur="0.2s" values="0;1"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" stroke="none" d="M20 9.6v-1.6h-3.2c-0.88 0 -1.6 0.72 -1.6 1.6v1.6c0 0.42 0.17 0.83 0.47 1.13c0.3 0.3 0.71 0.47 1.13 0.47h1.6v1.6h-3.2v1.6h3.2c0.88 0 1.6 -0.72 1.6 -1.6v-1.6c0 -0.42 -0.17 -0.83 -0.47 -1.13c-0.3 -0.3 -0.71 -0.47 -1.13 -0.47h-1.6v-1.6h3.2Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.7s" dur="0.2s" values="0;1"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdBrakeAbsTwotone0)"></svg:rect>`,
})
export class LineMdBrakeAbsTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBrakeAlertIcon],svg[line-md-brake-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="56" stroke-dashoffset="56" d="M12 4c4.42 0 8 3.58 8 8c0 4.42 -3.58 8 -8 8c-4.42 0 -8 -3.58 -8 -8c0 -4.42 3.58 -8 8 -8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M4.22 4.22c-4.29 4.3 -4.29 11.26 0 15.56"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M19.78 4.22c4.29 4.3 4.29 11.26 0 15.56"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M12 8v4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M12 16v0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.2s" values="2;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdBrakeAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBrakeAlertFilledIcon],svg[line-md-brake-alert-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdBrakeAlertFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="56" stroke-dashoffset="56" d="M12 4c4.42 0 8 3.58 8 8c0 4.42 -3.58 8 -8 8c-4.42 0 -8 -3.58 -8 -8c0 -4.42 3.58 -8 8 -8"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M4.22 4.22c-4.29 4.3 -4.29 11.26 0 15.56"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M19.78 4.22c4.29 4.3 4.29 11.26 0 15.56"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="6" stroke-dashoffset="6" d="M12 8v4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="2" stroke-dashoffset="2" d="M12 16v0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.8s" dur="0.2s" values="2;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdBrakeAlertFilled0)"></svg:rect>`,
})
export class LineMdBrakeAlertFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBrakeAlertTwotoneIcon],svg[line-md-brake-alert-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="56" stroke-dashoffset="56" d="M12 4c4.42 0 8 3.58 8 8c0 4.42 -3.58 8 -8 8c-4.42 0 -8 -3.58 -8 -8c0 -4.42 3.58 -8 8 -8"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.5s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M4.22 4.22c-4.29 4.3 -4.29 11.26 0 15.56"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M19.78 4.22c4.29 4.3 4.29 11.26 0 15.56"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M12 8v4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M12 16v0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.2s" values="2;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdBrakeAlertTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBrakeFilledIcon],svg[line-md-brake-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="56" stroke-dashoffset="56" d="M12 4c4.42 0 8 3.58 8 8c0 4.42 -3.58 8 -8 8c-4.42 0 -8 -3.58 -8 -8c0 -4.42 3.58 -8 8 -8"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M4.22 4.22c-4.29 4.3 -4.29 11.26 0 15.56"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M19.78 4.22c4.29 4.3 4.29 11.26 0 15.56"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="20;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdBrakeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBrakeHoldIcon],svg[line-md-brake-hold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="56" stroke-dashoffset="56" d="M12 4c4.42 0 8 3.58 8 8c0 4.42 -3.58 8 -8 8c-4.42 0 -8 -3.58 -8 -8c0 -4.42 3.58 -8 8 -8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M4.22 4.22c-4.29 4.3 -4.29 11.26 0 15.56"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M19.78 4.22c4.29 4.3 4.29 11.26 0 15.56"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M10 8v8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M14 8v8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M10 12h4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdBrakeHoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBrakeHoldFilledIcon],svg[line-md-brake-hold-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdBrakeHoldFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="56" stroke-dashoffset="56" d="M12 4c4.42 0 8 3.58 8 8c0 4.42 -3.58 8 -8 8c-4.42 0 -8 -3.58 -8 -8c0 -4.42 3.58 -8 8 -8"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M4.22 4.22c-4.29 4.3 -4.29 11.26 0 15.56"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M19.78 4.22c4.29 4.3 4.29 11.26 0 15.56"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="10" stroke-dashoffset="10" d="M10 8v8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="10" stroke-dashoffset="10" d="M14 8v8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.8s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="6" stroke-dashoffset="6" d="M10 12h4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="2s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdBrakeHoldFilled0)"></svg:rect>`,
})
export class LineMdBrakeHoldFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBrakeHoldTwotoneIcon],svg[line-md-brake-hold-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="56" stroke-dashoffset="56" d="M12 4c4.42 0 8 3.58 8 8c0 4.42 -3.58 8 -8 8c-4.42 0 -8 -3.58 -8 -8c0 -4.42 3.58 -8 8 -8"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.7s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M4.22 4.22c-4.29 4.3 -4.29 11.26 0 15.56"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M19.78 4.22c4.29 4.3 4.29 11.26 0 15.56"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M10 8v8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M14 8v8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M10 12h4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdBrakeHoldTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBrakeParkingIcon],svg[line-md-brake-parking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="56" stroke-dashoffset="56" d="M12 4c4.42 0 8 3.58 8 8c0 4.42 -3.58 8 -8 8c-4.42 0 -8 -3.58 -8 -8c0 -4.42 3.58 -8 8 -8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M4.22 4.22c-4.29 4.3 -4.29 11.26 0 15.56"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M19.78 4.22c4.29 4.3 4.29 11.26 0 15.56"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M10.5 16v-8h3c0.55 0 1 0.45 1 1v2c0 0.55 -0.45 1 -1 1h-3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.4s" values="24;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" stroke-width="1.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s" dur="0.2s" values="2;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdBrakeParkingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBrakeParkingFilledIcon],svg[line-md-brake-parking-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdBrakeParkingFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="56" stroke-dashoffset="56" d="M12 4c4.42 0 8 3.58 8 8c0 4.42 -3.58 8 -8 8c-4.42 0 -8 -3.58 -8 -8c0 -4.42 3.58 -8 8 -8"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M4.22 4.22c-4.29 4.3 -4.29 11.26 0 15.56"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M19.78 4.22c4.29 4.3 4.29 11.26 0 15.56"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="24" stroke-dashoffset="24" d="M10.5 16v-8h3c0.55 0 1 0.45 1 1v2c0 0.55 -0.45 1 -1 1h-3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.4s" values="24;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="2" stroke-dashoffset="2" stroke-width="1.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="2s" dur="0.2s" values="2;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdBrakeParkingFilled0)"></svg:rect>`,
})
export class LineMdBrakeParkingFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBrakeParkingTwotoneIcon],svg[line-md-brake-parking-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="56" stroke-dashoffset="56" d="M12 4c4.42 0 8 3.58 8 8c0 4.42 -3.58 8 -8 8c-4.42 0 -8 -3.58 -8 -8c0 -4.42 3.58 -8 8 -8"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.7s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M4.22 4.22c-4.29 4.3 -4.29 11.26 0 15.56"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M19.78 4.22c4.29 4.3 4.29 11.26 0 15.56"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M10.5 16v-8h3c0.55 0 1 0.45 1 1v2c0 0.55 -0.45 1 -1 1h-3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.4s" values="24;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" stroke-width="1.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s" dur="0.2s" values="2;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdBrakeParkingTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBrakeTwotoneIcon],svg[line-md-brake-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="56" stroke-dashoffset="56" d="M12 4c4.42 0 8 3.58 8 8c0 4.42 -3.58 8 -8 8c-4.42 0 -8 -3.58 -8 -8c0 -4.42 3.58 -8 8 -8"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M4.22 4.22c-4.29 4.3 -4.29 11.26 0 15.56"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M19.78 4.22c4.29 4.3 4.29 11.26 0 15.56"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="20;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdBrakeTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBriefcaseIcon],svg[line-md-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M9 7h11c0.55 0 1 0.45 1 1v11c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-11c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M9 7v-3c0 -0.55 0.45 -1 1 -1h4c0.55 0 1 0.45 1 1v3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="16;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdBriefcaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBriefcaseCancelIcon],svg[line-md-briefcase-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdBriefcaseCancel0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M9 7h11c0.55 0 1 0.45 1 1v11c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-11c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M9 7v-3c0 -0.55 0.45 -1 1 -1h4c0.55 0 1 0.45 1 1v3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="16;0"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="#000" stroke-dasharray="32" stroke-dashoffset="32" stroke-width="6" d="M18.5 14c2.48 0 4.5 2.02 4.5 4.5c0 2.48 -2.02 4.5 -4.5 4.5c-2.48 0 -4.5 -2.02 -4.5 -4.5c0 -2.48 2.02 -4.5 4.5 -4.5Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="0.9s" to="1"></svg:set><svg:set fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" to="0"></svg:set></svg:path><svg:path stroke-dasharray="32" stroke-dashoffset="32" d="M18.5 14c2.48 0 4.5 2.02 4.5 4.5c0 2.48 -2.02 4.5 -4.5 4.5c-2.48 0 -4.5 -2.02 -4.5 -4.5c0 -2.48 2.02 -4.5 4.5 -4.5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.4s" values="32;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M16 16l5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.2s" values="10;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdBriefcaseCancel0)"></svg:rect>`,
})
export class LineMdBriefcaseCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBriefcaseCancelFilledIcon],svg[line-md-briefcase-cancel-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdBriefcaseCancelFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M9 7h11c0.55 0 1 0.45 1 1v11c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-11c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M9 7v-3c0 -0.55 0.45 -1 1 -1h4c0.55 0 1 0.45 1 1v3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="16;0"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="#000" stroke-dasharray="32" stroke-dashoffset="32" stroke-width="6" d="M18.5 14c2.48 0 4.5 2.02 4.5 4.5c0 2.48 -2.02 4.5 -4.5 4.5c-2.48 0 -4.5 -2.02 -4.5 -4.5c0 -2.48 2.02 -4.5 4.5 -4.5Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="1.4s" to="1"></svg:set><svg:set fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" to="0"></svg:set></svg:path><svg:path stroke-dasharray="32" stroke-dashoffset="32" d="M18.5 14c2.48 0 4.5 2.02 4.5 4.5c0 2.48 -2.02 4.5 -4.5 4.5c-2.48 0 -4.5 -2.02 -4.5 -4.5c0 -2.48 2.02 -4.5 4.5 -4.5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.4s" values="32;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M16 16l5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.8s" dur="0.2s" values="10;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdBriefcaseCancelFilled0)"></svg:rect>`,
})
export class LineMdBriefcaseCancelFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBriefcaseCancelTwotoneIcon],svg[line-md-briefcase-cancel-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdBriefcaseCancelTwotone0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M9 7h11c0.55 0 1 0.45 1 1v11c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-11c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M9 7v-3c0 -0.55 0.45 -1 1 -1h4c0.55 0 1 0.45 1 1v3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="16;0"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="#000" stroke-dasharray="32" stroke-dashoffset="32" stroke-width="6" d="M18.5 14c2.48 0 4.5 2.02 4.5 4.5c0 2.48 -2.02 4.5 -4.5 4.5c-2.48 0 -4.5 -2.02 -4.5 -4.5c0 -2.48 2.02 -4.5 4.5 -4.5Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="1.05s" to="1"></svg:set><svg:set fill="freeze" attributeName="stroke-dashoffset" begin="1.05s" to="0"></svg:set></svg:path><svg:path stroke-dasharray="32" stroke-dashoffset="32" d="M18.5 14c2.48 0 4.5 2.02 4.5 4.5c0 2.48 -2.02 4.5 -4.5 4.5c-2.48 0 -4.5 -2.02 -4.5 -4.5c0 -2.48 2.02 -4.5 4.5 -4.5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.05s" dur="0.4s" values="32;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M16 16l5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.45s" dur="0.2s" values="10;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdBriefcaseCancelTwotone0)"></svg:rect>`,
})
export class LineMdBriefcaseCancelTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBriefcaseCheckIcon],svg[line-md-briefcase-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdBriefcaseCheck0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M9 7h11c0.55 0 1 0.45 1 1v11c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-11c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M9 7v-3c0 -0.55 0.45 -1 1 -1h4c0.55 0 1 0.45 1 1v3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="16;0"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="0.9s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M16 19l1.75 1.75l3.75 -3.75"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="10;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdBriefcaseCheck0)"></svg:rect>`,
})
export class LineMdBriefcaseCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBriefcaseCheckFilledIcon],svg[line-md-briefcase-check-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdBriefcaseCheckFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M9 7h11c0.55 0 1 0.45 1 1v11c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-11c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M9 7v-3c0 -0.55 0.45 -1 1 -1h4c0.55 0 1 0.45 1 1v3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="16;0"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="1.4s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M16 19l1.75 1.75l3.75 -3.75"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" values="10;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdBriefcaseCheckFilled0)"></svg:rect>`,
})
export class LineMdBriefcaseCheckFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBriefcaseCheckTwotoneIcon],svg[line-md-briefcase-check-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdBriefcaseCheckTwotone0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M9 7h11c0.55 0 1 0.45 1 1v11c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-11c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M9 7v-3c0 -0.55 0.45 -1 1 -1h4c0.55 0 1 0.45 1 1v3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="16;0"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="1.05s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M16 19l1.75 1.75l3.75 -3.75"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.05s" dur="0.2s" values="10;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdBriefcaseCheckTwotone0)"></svg:rect>`,
})
export class LineMdBriefcaseCheckTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBriefcaseFilledIcon],svg[line-md-briefcase-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M9 7h11c0.55 0 1 0.45 1 1v11c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-11c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M9 7v-3c0 -0.55 0.45 -1 1 -1h4c0.55 0 1 0.45 1 1v3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="16;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdBriefcaseFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBriefcaseMinusIcon],svg[line-md-briefcase-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdBriefcaseMinus0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M9 7h11c0.55 0 1 0.45 1 1v11c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-11c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M9 7v-3c0 -0.55 0.45 -1 1 -1h4c0.55 0 1 0.45 1 1v3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="16;0"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="0.9s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M16 19h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdBriefcaseMinus0)"></svg:rect>`,
})
export class LineMdBriefcaseMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBriefcaseMinusFilledIcon],svg[line-md-briefcase-minus-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdBriefcaseMinusFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M9 7h11c0.55 0 1 0.45 1 1v11c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-11c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M9 7v-3c0 -0.55 0.45 -1 1 -1h4c0.55 0 1 0.45 1 1v3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="16;0"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="1.4s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M16 19h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdBriefcaseMinusFilled0)"></svg:rect>`,
})
export class LineMdBriefcaseMinusFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBriefcaseMinusTwotoneIcon],svg[line-md-briefcase-minus-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdBriefcaseMinusTwotone0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M9 7h11c0.55 0 1 0.45 1 1v11c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-11c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M9 7v-3c0 -0.55 0.45 -1 1 -1h4c0.55 0 1 0.45 1 1v3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="16;0"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="1.05s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M16 19h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.05s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdBriefcaseMinusTwotone0)"></svg:rect>`,
})
export class LineMdBriefcaseMinusTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBriefcasePlusIcon],svg[line-md-briefcase-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdBriefcasePlus0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M9 7h11c0.55 0 1 0.45 1 1v11c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-11c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M9 7v-3c0 -0.55 0.45 -1 1 -1h4c0.55 0 1 0.45 1 1v3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="16;0"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="0.9s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M16 19h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M19 16v6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdBriefcasePlus0)"></svg:rect>`,
})
export class LineMdBriefcasePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBriefcasePlusFilledIcon],svg[line-md-briefcase-plus-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdBriefcasePlusFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M9 7h11c0.55 0 1 0.45 1 1v11c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-11c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M9 7v-3c0 -0.55 0.45 -1 1 -1h4c0.55 0 1 0.45 1 1v3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="16;0"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="1.4s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M16 19h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M19 16v6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdBriefcasePlusFilled0)"></svg:rect>`,
})
export class LineMdBriefcasePlusFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBriefcasePlusTwotoneIcon],svg[line-md-briefcase-plus-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdBriefcasePlusTwotone0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M9 7h11c0.55 0 1 0.45 1 1v11c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-11c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M9 7v-3c0 -0.55 0.45 -1 1 -1h4c0.55 0 1 0.45 1 1v3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="16;0"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="1.05s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M16 19h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.05s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M19 16v6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.25s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdBriefcasePlusTwotone0)"></svg:rect>`,
})
export class LineMdBriefcasePlusTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBriefcaseRemoveIcon],svg[line-md-briefcase-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdBriefcaseRemove0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M9 7h11c0.55 0 1 0.45 1 1v11c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-11c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M9 7v-3c0 -0.55 0.45 -1 1 -1h4c0.55 0 1 0.45 1 1v3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="16;0"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="0.9s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M17 17l4 4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M21 17l-4 4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdBriefcaseRemove0)"></svg:rect>`,
})
export class LineMdBriefcaseRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBriefcaseRemoveFilledIcon],svg[line-md-briefcase-remove-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdBriefcaseRemoveFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M9 7h11c0.55 0 1 0.45 1 1v11c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-11c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M9 7v-3c0 -0.55 0.45 -1 1 -1h4c0.55 0 1 0.45 1 1v3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="16;0"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="1.4s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M17 17l4 4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M21 17l-4 4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdBriefcaseRemoveFilled0)"></svg:rect>`,
})
export class LineMdBriefcaseRemoveFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBriefcaseRemoveTwotoneIcon],svg[line-md-briefcase-remove-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdBriefcaseRemoveTwotone0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M9 7h11c0.55 0 1 0.45 1 1v11c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-11c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M9 7v-3c0 -0.55 0.45 -1 1 -1h4c0.55 0 1 0.45 1 1v3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="16;0"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="1.05s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M17 17l4 4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.05s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M21 17l-4 4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.25s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdBriefcaseRemoveTwotone0)"></svg:rect>`,
})
export class LineMdBriefcaseRemoveTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBriefcaseTwotoneIcon],svg[line-md-briefcase-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M9 7h11c0.55 0 1 0.45 1 1v11c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-11c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M9 7v-3c0 -0.55 0.45 -1 1 -1h4c0.55 0 1 0.45 1 1v3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="16;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdBriefcaseTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBuyMeACoffeeIcon],svg[line-md-buy-me-a-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="lineMdBuyMeACoffee0"><svg:path fill="#fff" d="M5 6C5 4 7 6 11.5 6C16 6 19 4 19 6L19 7C19 8.5 17 9 12.5 9C8 9 5 9 5 7L5 6Z"></svg:path></svg:mask></svg:defs><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="32" stroke-dashoffset="32" d="M7.5 10.5c0 0 0.83 6.93 1 8.5c0.17 1.57 1.5 2 2.5 2l2 0c1.5 0 2.88 -1.14 3 -2c0.13 -0.86 1 -12 1 -12"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="32;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M8 4c1.1 -0.57 2 -1 4 -1c2 0 4.5 0.5 4.5 3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="12;0"></svg:animate></svg:path></svg:g><svg:rect width="16" height="5" x="20" y="4" fill="currentColor" mask="url(#lineMdBuyMeACoffee0)"><svg:animate fill="freeze" attributeName="x" begin="0.4s" dur="0.4s" values="20;4"></svg:animate></svg:rect>`,
})
export class LineMdBuyMeACoffeeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBuyMeACoffeeFilledIcon],svg[line-md-buy-me-a-coffee-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="lineMdBuyMeACoffeeFilled0"><svg:path fill="#fff" d="M5 6C5 4 7 6 11.5 6C16 6 19 4 19 6L19 7C19 8.5 17 9 12.5 9C8 9 5 9 5 7L5 6Z"></svg:path></svg:mask><svg:mask id="lineMdBuyMeACoffeeFilled1"><svg:path fill="#fff" d="M10.125 18.15C10.04 17.29 9.4 11.98 9.4 11.98C9.4 11.98 11.34 12.31 12.5 11.73C13.66 11.16 14.98 11 14.98 11C14.98 11 14.4 17.96 14.35 18.46C14.3 18.96 13.45 19.3 12.95 19.3L11.23 19.3C10.73 19.3 10.21 19 10.125 18.15Z"></svg:path></svg:mask></svg:defs><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="32" stroke-dashoffset="32" d="M7.5 10.5c0 0 0.83 6.93 1 8.5c0.17 1.57 1.5 2 2.5 2l2 0c1.5 0 2.88 -1.14 3 -2c0.13 -0.86 1 -12 1 -12"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="32;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M8 4c1.1 -0.57 2 -1 4 -1c2 0 4.5 0.5 4.5 3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="12;0"></svg:animate></svg:path></svg:g><svg:rect width="16" height="5" x="20" y="4" fill="currentColor" mask="url(#lineMdBuyMeACoffeeFilled0)"><svg:animate fill="freeze" attributeName="x" begin="0.4s" dur="0.4s" values="20;4"></svg:animate></svg:rect><svg:rect width="8" height="10" x="8" y="20" fill="currentColor" mask="url(#lineMdBuyMeACoffeeFilled1)"><svg:animate fill="freeze" attributeName="y" begin="1s" dur="0.4s" values="20;10"></svg:animate></svg:rect>`,
})
export class LineMdBuyMeACoffeeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdBuyMeACoffeeTwotoneIcon],svg[line-md-buy-me-a-coffee-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="lineMdBuyMeACoffeeTwotone0"><svg:path fill="#fff" d="M5 6C5 4 7 6 11.5 6C16 6 19 4 19 6L19 7C19 8.5 17 9 12.5 9C8 9 5 9 5 7L5 6Z"></svg:path></svg:mask><svg:mask id="lineMdBuyMeACoffeeTwotone1"><svg:path fill="#fff" d="M10.125 18.15C10.04 17.29 9.4 11.98 9.4 11.98C9.4 11.98 11.34 12.31 12.5 11.73C13.66 11.16 14.98 11 14.98 11C14.98 11 14.4 17.96 14.35 18.46C14.3 18.96 13.45 19.3 12.95 19.3L11.23 19.3C10.73 19.3 10.21 19 10.125 18.15Z"></svg:path></svg:mask></svg:defs><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="32" stroke-dashoffset="32" d="M7.5 10.5c0 0 0.83 6.93 1 8.5c0.17 1.57 1.5 2 2.5 2l2 0c1.5 0 2.88 -1.14 3 -2c0.13 -0.86 1 -12 1 -12"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="32;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M8 4c1.1 -0.57 2 -1 4 -1c2 0 4.5 0.5 4.5 3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="12;0"></svg:animate></svg:path></svg:g><svg:rect width="16" height="5" x="20" y="4" fill="currentColor" mask="url(#lineMdBuyMeACoffeeTwotone0)"><svg:animate fill="freeze" attributeName="x" begin="0.4s" dur="0.4s" values="20;4"></svg:animate></svg:rect><svg:rect width="8" height="10" x="8" y="20" fill="currentColor" fill-opacity=".3" mask="url(#lineMdBuyMeACoffeeTwotone1)"><svg:animate fill="freeze" attributeName="y" begin="1s" dur="0.4s" values="20;10"></svg:animate></svg:rect>`,
})
export class LineMdBuyMeACoffeeTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCakeIcon],svg[line-md-cake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M12 21h8v-9c0 -1.1 -0.9 -2 -2 -2h-6M12 21h-8v-9c0 -1.1 0.9 -2 2 -2h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M12 10v-2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="4;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M4 16h1c2 0 3.5 -2 3.5 -2c0 0 1.5 2 3.5 2c2 0 3.5 -2 3.5 -2c0 0 1.5 2 3.5 2h1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="20;0"></svg:animate></svg:path></svg:g><svg:path fill="currentColor" d="M13 5C13 5.5 12.5 6 12 6C11.5 6 11 5.5 11 5C11 4.5 12 4 12 4C12 4 13 4.5 13 5Z" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M13 5C13 5.5 12.5 6 12 6C11.5 6 11 5.5 11 5C11 4.5 12 4 12 4C12 4 13 4.5 13 5Z;M14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 12 0 12 0C12 0 14 2.89543 14 4Z"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.6s" to="1"></svg:set></svg:path>`,
})
export class LineMdCakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCakeFilledIcon],svg[line-md-cake-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M12 21h8v-9c0 -1.1 -0.9 -2 -2 -2h-6M12 21h-8v-9c0 -1.1 0.9 -2 2 -2h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M12 10v-2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="4;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M4 16h1c2 0 3.5 -2 3.5 -2c0 0 1.5 2 3.5 2c2 0 3.5 -2 3.5 -2c0 0 1.5 2 3.5 2h1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="20;0"></svg:animate></svg:path></svg:g><svg:g fill="currentColor"><svg:path d="M13 5C13 5.5 12.5 6 12 6C11.5 6 11 5.5 11 5C11 4.5 12 4 12 4C12 4 13 4.5 13 5Z" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M13 5C13 5.5 12.5 6 12 6C11.5 6 11 5.5 11 5C11 4.5 12 4 12 4C12 4 13 4.5 13 5Z;M14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 12 0 12 0C12 0 14 2.89543 14 4Z"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.6s" to="1"></svg:set></svg:path><svg:path fill-opacity="0" d="M15.5 14C15.5 14 14 16 12 16C10 16 8.5 14 8.5 14C8.5 14 7 16 5 16H4V21H20V16H19C17 16 15.5 14 15.5 14Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.5s" values="0;1"></svg:animate></svg:path></svg:g>`,
})
export class LineMdCakeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCakeTwotoneIcon],svg[line-md-cake-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M12 21h8v-9c0 -1.1 -0.9 -2 -2 -2h-6M12 21h-8v-9c0 -1.1 0.9 -2 2 -2h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M12 10v-2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="4;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M4 16h1c2 0 3.5 -2 3.5 -2c0 0 1.5 2 3.5 2c2 0 3.5 -2 3.5 -2c0 0 1.5 2 3.5 2h1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="20;0"></svg:animate></svg:path></svg:g><svg:g fill="currentColor"><svg:path d="M13 5C13 5.5 12.5 6 12 6C11.5 6 11 5.5 11 5C11 4.5 12 4 12 4C12 4 13 4.5 13 5Z" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M13 5C13 5.5 12.5 6 12 6C11.5 6 11 5.5 11 5C11 4.5 12 4 12 4C12 4 13 4.5 13 5Z;M14 4C14 5.10457 13.1046 6 12 6C10.8954 6 10 5.10457 10 4C10 2.89543 12 0 12 0C12 0 14 2.89543 14 4Z"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.6s" to="1"></svg:set></svg:path><svg:path fill-opacity="0" d="M15.5 14C15.5 14 14 16 12 16C10 16 8.5 14 8.5 14C8.5 14 7 16 5 16H4V21H20V16H19C17 16 15.5 14 15.5 14Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.15s" values="0;0.3"></svg:animate></svg:path></svg:g>`,
})
export class LineMdCakeTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCalendarIcon],svg[line-md-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="14" height="0" x="5" y="5" fill="currentColor"><svg:animate fill="freeze" attributeName="height" begin="0.6s" dur="0.2s" values="0;3"></svg:animate></svg:rect><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 4h7c0.55 0 1 0.45 1 1v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1v-14c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M7 4v-2M17 4v-2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="4;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M7 11h10"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M7 15h7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdCalendarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCalendarOutIcon],svg[line-md-calendar-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:rect width="16" height="16" x="4" y="4" stroke-dasharray="64" rx="1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.5s" values="0;64"></svg:animate></svg:rect><svg:path stroke-dasharray="6" d="M7 4V2M17 4V2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="0;6"></svg:animate></svg:path><svg:path stroke-dasharray="12" d="M7 11H17"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="0;12"></svg:animate></svg:path><svg:path stroke-dasharray="9" d="M7 15H14"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="0;9"></svg:animate></svg:path></svg:g><svg:rect width="14" height="3" x="5" y="5" fill="currentColor"><svg:animate fill="freeze" attributeName="height" begin="0.5s" dur="0.2s" values="3;0"></svg:animate></svg:rect>`,
})
export class LineMdCalendarOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCancelIcon],svg[line-md-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M5.64 5.64c3.51 -3.51 9.21 -3.51 12.73 0c3.51 3.51 3.51 9.21 0 12.73c-3.51 3.51 -9.21 3.51 -12.73 0c-3.51 -3.51 -3.51 -9.21 -0 -12.73Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M6 6l12 12"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="20;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCancelTwotoneIcon],svg[line-md-cancel-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M5.64 5.64c3.51 -3.51 9.21 -3.51 12.73 0c3.51 3.51 3.51 9.21 0 12.73c-3.51 3.51 -9.21 3.51 -12.73 0c-3.51 -3.51 -3.51 -9.21 -0 -12.73Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M6 6l12 12"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="20;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdCancelTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCarLightIcon],svg[line-md-car-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCarLight0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M11 6h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M11 10h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M11 14h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M11 18h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-width="6" d="M21 12c0 -3.31 -3.5 -6.25 -8.25 -6.25c-0.5 0 -1.75 2.75 -1.75 6.25c0 3.5 1.25 6.25 1.75 6.25c4.75 0 8.25 -2.94 8.25 -6.25Z"></svg:path><svg:path stroke-dasharray="40" stroke-dashoffset="40" d="M21 12c0 -3.31 -3.5 -6.25 -8.25 -6.25c-0.5 0 -1.75 2.75 -1.75 6.25c0 3.5 1.25 6.25 1.75 6.25c4.75 0 8.25 -2.94 8.25 -6.25Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="40;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCarLight0)"></svg:rect>`,
})
export class LineMdCarLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCarLightAlertIcon],svg[line-md-car-light-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCarLightAlert0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M8 6h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M8 10h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M8 14h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M8 18h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-width="6" d="M18 12c0 -3.31 -3.5 -6.25 -8.25 -6.25c-0.5 0 -1.75 2.75 -1.75 6.25c0 3.5 1.25 6.25 1.75 6.25c4.75 0 8.25 -2.94 8.25 -6.25Z"></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M22 8v4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M22 16v0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="40" stroke-dashoffset="40" d="M18 12c0 -3.31 -3.5 -6.25 -8.25 -6.25c-0.5 0 -1.75 2.75 -1.75 6.25c0 3.5 1.25 6.25 1.75 6.25c4.75 0 8.25 -2.94 8.25 -6.25Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="40;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCarLightAlert0)"></svg:rect>`,
})
export class LineMdCarLightAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCarLightAlertFilledIcon],svg[line-md-car-light-alert-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCarLightAlertFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M8 6h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M8 10h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M8 14h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M8 18h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.8s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-width="6" d="M18 12c0 -3.31 -3.5 -6.25 -8.25 -6.25c-0.5 0 -1.75 2.75 -1.75 6.25c0 3.5 1.25 6.25 1.75 6.25c4.75 0 8.25 -2.94 8.25 -6.25Z"></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M22 8v4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="2s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M22 16v0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="2.2s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="40" stroke-dashoffset="40" d="M18 12c0 -3.31 -3.5 -6.25 -8.25 -6.25c-0.5 0 -1.75 2.75 -1.75 6.25c0 3.5 1.25 6.25 1.75 6.25c4.75 0 8.25 -2.94 8.25 -6.25Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="40;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCarLightAlertFilled0)"></svg:rect>`,
})
export class LineMdCarLightAlertFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCarLightAlertOffIcon],svg[line-md-car-light-alert-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCarLightAlertOff0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M8 6h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M8 10h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M8 14h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M8 18h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-width="6" d="M18 12c0 -3.31 -3.5 -6.25 -8.25 -6.25c-0.5 0 -1.75 2.75 -1.75 6.25c0 3.5 1.25 6.25 1.75 6.25c4.75 0 8.25 -2.94 8.25 -6.25Z"></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M22 8v4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M22 16v0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="40" stroke-dashoffset="40" d="M18 12c0 -3.31 -3.5 -6.25 -8.25 -6.25c-0.5 0 -1.75 2.75 -1.75 6.25c0 3.5 1.25 6.25 1.75 6.25c4.75 0 8.25 -2.94 8.25 -6.25Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="40;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.9s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-1 13h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.9s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCarLightAlertOff0)"></svg:rect>`,
})
export class LineMdCarLightAlertOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCarLightAlertOffFilledIcon],svg[line-md-car-light-alert-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCarLightAlertOffFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M8 6h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M8 10h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M8 14h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M8 18h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.8s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-width="6" d="M18 12c0 -3.31 -3.5 -6.25 -8.25 -6.25c-0.5 0 -1.75 2.75 -1.75 6.25c0 3.5 1.25 6.25 1.75 6.25c4.75 0 8.25 -2.94 8.25 -6.25Z"></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M22 8v4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="2s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M22 16v0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="2.2s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="40" stroke-dashoffset="40" d="M18 12c0 -3.31 -3.5 -6.25 -8.25 -6.25c-0.5 0 -1.75 2.75 -1.75 6.25c0 3.5 1.25 6.25 1.75 6.25c4.75 0 8.25 -2.94 8.25 -6.25Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="40;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="2.5s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-1 13h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="2.5s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCarLightAlertOffFilled0)"></svg:rect>`,
})
export class LineMdCarLightAlertOffFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCarLightAlertOffTwotoneIcon],svg[line-md-car-light-alert-off-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCarLightAlertOffTwotone0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M8 6h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.85s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M8 10h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.05s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M8 14h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.25s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M8 18h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.45s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-width="6" d="M18 12c0 -3.31 -3.5 -6.25 -8.25 -6.25c-0.5 0 -1.75 2.75 -1.75 6.25c0 3.5 1.25 6.25 1.75 6.25c4.75 0 8.25 -2.94 8.25 -6.25Z"></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M22 8v4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.65s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M22 16v0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.85s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="40" stroke-dashoffset="40" d="M18 12c0 -3.31 -3.5 -6.25 -8.25 -6.25c-0.5 0 -1.75 2.75 -1.75 6.25c0 3.5 1.25 6.25 1.75 6.25c4.75 0 8.25 -2.94 8.25 -6.25Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="40;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="2.15s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-1 13h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="2.15s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCarLightAlertOffTwotone0)"></svg:rect>`,
})
export class LineMdCarLightAlertOffTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCarLightAlertTwotoneIcon],svg[line-md-car-light-alert-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCarLightAlertTwotone0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M8 6h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.85s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M8 10h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.05s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M8 14h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.25s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M8 18h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.45s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-width="6" d="M18 12c0 -3.31 -3.5 -6.25 -8.25 -6.25c-0.5 0 -1.75 2.75 -1.75 6.25c0 3.5 1.25 6.25 1.75 6.25c4.75 0 8.25 -2.94 8.25 -6.25Z"></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M22 8v4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.65s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M22 16v0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.85s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="40" stroke-dashoffset="40" d="M18 12c0 -3.31 -3.5 -6.25 -8.25 -6.25c-0.5 0 -1.75 2.75 -1.75 6.25c0 3.5 1.25 6.25 1.75 6.25c4.75 0 8.25 -2.94 8.25 -6.25Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="40;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCarLightAlertTwotone0)"></svg:rect>`,
})
export class LineMdCarLightAlertTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCarLightDimmedIcon],svg[line-md-car-light-dimmed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCarLightDimmed0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M12 5.5l-9 2.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M12 10.5l-9 2.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M12 15.5l-9 2.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-width="6" d="M21 12c0 -3.31 -3.5 -6.25 -8.25 -6.25c-0.5 0 -1.75 2.75 -1.75 6.25c0 3.5 1.25 6.25 1.75 6.25c4.75 0 8.25 -2.94 8.25 -6.25Z"></svg:path><svg:path stroke-dasharray="40" stroke-dashoffset="40" d="M21 12c0 -3.31 -3.5 -6.25 -8.25 -6.25c-0.5 0 -1.75 2.75 -1.75 6.25c0 3.5 1.25 6.25 1.75 6.25c4.75 0 8.25 -2.94 8.25 -6.25Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="40;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCarLightDimmed0)"></svg:rect>`,
})
export class LineMdCarLightDimmedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCarLightDimmedFilledIcon],svg[line-md-car-light-dimmed-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCarLightDimmedFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M12 5.5l-9 2.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M12 10.5l-9 2.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M12 15.5l-9 2.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-width="6" d="M21 12c0 -3.31 -3.5 -6.25 -8.25 -6.25c-0.5 0 -1.75 2.75 -1.75 6.25c0 3.5 1.25 6.25 1.75 6.25c4.75 0 8.25 -2.94 8.25 -6.25Z"></svg:path><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="40" stroke-dashoffset="40" d="M21 12c0 -3.31 -3.5 -6.25 -8.25 -6.25c-0.5 0 -1.75 2.75 -1.75 6.25c0 3.5 1.25 6.25 1.75 6.25c4.75 0 8.25 -2.94 8.25 -6.25Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="40;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCarLightDimmedFilled0)"></svg:rect>`,
})
export class LineMdCarLightDimmedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCarLightDimmedOffIcon],svg[line-md-car-light-dimmed-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCarLightDimmedOff0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M12 5.5l-9 2.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M12 10.5l-9 2.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M12 15.5l-9 2.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-width="6" d="M21 12c0 -3.31 -3.5 -6.25 -8.25 -6.25c-0.5 0 -1.75 2.75 -1.75 6.25c0 3.5 1.25 6.25 1.75 6.25c4.75 0 8.25 -2.94 8.25 -6.25Z"></svg:path><svg:path stroke-dasharray="40" stroke-dashoffset="40" d="M21 12c0 -3.31 -3.5 -6.25 -8.25 -6.25c-0.5 0 -1.75 2.75 -1.75 6.25c0 3.5 1.25 6.25 1.75 6.25c4.75 0 8.25 -2.94 8.25 -6.25Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="40;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-1 13h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCarLightDimmedOff0)"></svg:rect>`,
})
export class LineMdCarLightDimmedOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCarLightDimmedOffFilledIcon],svg[line-md-car-light-dimmed-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCarLightDimmedOffFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M12 5.5l-9 2.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M12 10.5l-9 2.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M12 15.5l-9 2.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-width="6" d="M21 12c0 -3.31 -3.5 -6.25 -8.25 -6.25c-0.5 0 -1.75 2.75 -1.75 6.25c0 3.5 1.25 6.25 1.75 6.25c4.75 0 8.25 -2.94 8.25 -6.25Z"></svg:path><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="40" stroke-dashoffset="40" d="M21 12c0 -3.31 -3.5 -6.25 -8.25 -6.25c-0.5 0 -1.75 2.75 -1.75 6.25c0 3.5 1.25 6.25 1.75 6.25c4.75 0 8.25 -2.94 8.25 -6.25Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="40;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.9s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-1 13h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.9s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCarLightDimmedOffFilled0)"></svg:rect>`,
})
export class LineMdCarLightDimmedOffFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCarLightDimmedOffTwotoneIcon],svg[line-md-car-light-dimmed-off-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCarLightDimmedOffTwotone0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M12 5.5l-9 2.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.85s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M12 10.5l-9 2.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.05s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M12 15.5l-9 2.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.25s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-width="6" d="M21 12c0 -3.31 -3.5 -6.25 -8.25 -6.25c-0.5 0 -1.75 2.75 -1.75 6.25c0 3.5 1.25 6.25 1.75 6.25c4.75 0 8.25 -2.94 8.25 -6.25Z"></svg:path><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="40" stroke-dashoffset="40" d="M21 12c0 -3.31 -3.5 -6.25 -8.25 -6.25c-0.5 0 -1.75 2.75 -1.75 6.25c0 3.5 1.25 6.25 1.75 6.25c4.75 0 8.25 -2.94 8.25 -6.25Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="40;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.55s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-1 13h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.55s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCarLightDimmedOffTwotone0)"></svg:rect>`,
})
export class LineMdCarLightDimmedOffTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCarLightDimmedTwotoneIcon],svg[line-md-car-light-dimmed-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCarLightDimmedTwotone0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M12 5.5l-9 2.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.85s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M12 10.5l-9 2.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.05s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M12 15.5l-9 2.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.25s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-width="6" d="M21 12c0 -3.31 -3.5 -6.25 -8.25 -6.25c-0.5 0 -1.75 2.75 -1.75 6.25c0 3.5 1.25 6.25 1.75 6.25c4.75 0 8.25 -2.94 8.25 -6.25Z"></svg:path><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="40" stroke-dashoffset="40" d="M21 12c0 -3.31 -3.5 -6.25 -8.25 -6.25c-0.5 0 -1.75 2.75 -1.75 6.25c0 3.5 1.25 6.25 1.75 6.25c4.75 0 8.25 -2.94 8.25 -6.25Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="40;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCarLightDimmedTwotone0)"></svg:rect>`,
})
export class LineMdCarLightDimmedTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCarLightFilledIcon],svg[line-md-car-light-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCarLightFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M11 6h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M11 10h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M11 14h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M11 18h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.8s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-width="6" d="M21 12c0 -3.31 -3.5 -6.25 -8.25 -6.25c-0.5 0 -1.75 2.75 -1.75 6.25c0 3.5 1.25 6.25 1.75 6.25c4.75 0 8.25 -2.94 8.25 -6.25Z"></svg:path><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="40" stroke-dashoffset="40" d="M21 12c0 -3.31 -3.5 -6.25 -8.25 -6.25c-0.5 0 -1.75 2.75 -1.75 6.25c0 3.5 1.25 6.25 1.75 6.25c4.75 0 8.25 -2.94 8.25 -6.25Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="40;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCarLightFilled0)"></svg:rect>`,
})
export class LineMdCarLightFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCarLightOffIcon],svg[line-md-car-light-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCarLightOff0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M11 6h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M11 10h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M11 14h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M11 18h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-width="6" d="M21 12c0 -3.31 -3.5 -6.25 -8.25 -6.25c-0.5 0 -1.75 2.75 -1.75 6.25c0 3.5 1.25 6.25 1.75 6.25c4.75 0 8.25 -2.94 8.25 -6.25Z"></svg:path><svg:path stroke-dasharray="40" stroke-dashoffset="40" d="M21 12c0 -3.31 -3.5 -6.25 -8.25 -6.25c-0.5 0 -1.75 2.75 -1.75 6.25c0 3.5 1.25 6.25 1.75 6.25c4.75 0 8.25 -2.94 8.25 -6.25Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="40;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-1 13h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCarLightOff0)"></svg:rect>`,
})
export class LineMdCarLightOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCarLightOffFilledIcon],svg[line-md-car-light-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCarLightOffFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M11 6h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M11 10h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M11 14h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M11 18h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.8s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-width="6" d="M21 12c0 -3.31 -3.5 -6.25 -8.25 -6.25c-0.5 0 -1.75 2.75 -1.75 6.25c0 3.5 1.25 6.25 1.75 6.25c4.75 0 8.25 -2.94 8.25 -6.25Z"></svg:path><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="40" stroke-dashoffset="40" d="M21 12c0 -3.31 -3.5 -6.25 -8.25 -6.25c-0.5 0 -1.75 2.75 -1.75 6.25c0 3.5 1.25 6.25 1.75 6.25c4.75 0 8.25 -2.94 8.25 -6.25Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="40;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="2.1s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-1 13h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="2.1s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCarLightOffFilled0)"></svg:rect>`,
})
export class LineMdCarLightOffFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCarLightOffTwotoneIcon],svg[line-md-car-light-off-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCarLightOffTwotone0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M11 6h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.85s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M11 10h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.05s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M11 14h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.25s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M11 18h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.45s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-width="6" d="M21 12c0 -3.31 -3.5 -6.25 -8.25 -6.25c-0.5 0 -1.75 2.75 -1.75 6.25c0 3.5 1.25 6.25 1.75 6.25c4.75 0 8.25 -2.94 8.25 -6.25Z"></svg:path><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="40" stroke-dashoffset="40" d="M21 12c0 -3.31 -3.5 -6.25 -8.25 -6.25c-0.5 0 -1.75 2.75 -1.75 6.25c0 3.5 1.25 6.25 1.75 6.25c4.75 0 8.25 -2.94 8.25 -6.25Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="40;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.75s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-1 13h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.75s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCarLightOffTwotone0)"></svg:rect>`,
})
export class LineMdCarLightOffTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCarLightTwotoneIcon],svg[line-md-car-light-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCarLightTwotone0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M11 6h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.85s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M11 10h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.05s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M11 14h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.25s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M11 18h-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.45s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-width="6" d="M21 12c0 -3.31 -3.5 -6.25 -8.25 -6.25c-0.5 0 -1.75 2.75 -1.75 6.25c0 3.5 1.25 6.25 1.75 6.25c4.75 0 8.25 -2.94 8.25 -6.25Z"></svg:path><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="40" stroke-dashoffset="40" d="M21 12c0 -3.31 -3.5 -6.25 -8.25 -6.25c-0.5 0 -1.75 2.75 -1.75 6.25c0 3.5 1.25 6.25 1.75 6.25c4.75 0 8.25 -2.94 8.25 -6.25Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="40;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCarLightTwotone0)"></svg:rect>`,
})
export class LineMdCarLightTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCellphoneIcon],svg[line-md-cellphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12v0h-12zM6 22h12v0h-12z"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M6 2h12v0h-12zM6 22h12v0h-12z;M6 2h12v3h-12zM6 22h12v-3h-12z"></svg:animate></svg:path><svg:path fill="none" stroke="currentColor" stroke-dasharray="64" stroke-dashoffset="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2h5c0.55 0 1 0.45 1 1v18c0 0.55 -0.45 1 -1 1h-10c-0.55 0 -1 -0.45 -1 -1v-18c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path>`,
})
export class LineMdCellphoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCellphoneArrowDownIcon],svg[line-md-cellphone-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12v0h-12zM6 22h12v0h-12z"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M6 2h12v0h-12zM6 22h12v0h-12z;M6 2h12v3h-12zM6 22h12v-3h-12z"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 2h5c0.55 0 1 0.45 1 1v18c0 0.55 -0.45 1 -1 1h-10c-0.55 0 -1 -0.45 -1 -1v-18c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M12 9v6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M12 15l3 -3M12 15l-3 -3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdCellphoneArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCellphoneArrowDownTwotoneIcon],svg[line-md-cellphone-arrow-down-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12v0h-12zM6 22h12v0h-12z"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M6 2h12v0h-12zM6 22h12v0h-12z;M6 2h12v3h-12zM6 22h12v-3h-12z"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 2h5c0.55 0 1 0.45 1 1v18c0 0.55 -0.45 1 -1 1h-10c-0.55 0 -1 -0.45 -1 -1v-18c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M12 9v6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.05s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M12 15l3 -3M12 15l-3 -3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.25s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdCellphoneArrowDownTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCellphoneArrowUpIcon],svg[line-md-cellphone-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12v0h-12zM6 22h12v0h-12z"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M6 2h12v0h-12zM6 22h12v0h-12z;M6 2h12v3h-12zM6 22h12v-3h-12z"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 2h5c0.55 0 1 0.45 1 1v18c0 0.55 -0.45 1 -1 1h-10c-0.55 0 -1 -0.45 -1 -1v-18c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M12 15v-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M12 9l3 3M12 9l-3 3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdCellphoneArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCellphoneArrowUpTwotoneIcon],svg[line-md-cellphone-arrow-up-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12v0h-12zM6 22h12v0h-12z"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M6 2h12v0h-12zM6 22h12v0h-12z;M6 2h12v3h-12zM6 22h12v-3h-12z"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 2h5c0.55 0 1 0.45 1 1v18c0 0.55 -0.45 1 -1 1h-10c-0.55 0 -1 -0.45 -1 -1v-18c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M12 15v-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.05s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M12 9l3 3M12 9l-3 3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.25s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdCellphoneArrowUpTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCellphoneOffIcon],svg[line-md-cellphone-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCellphoneOff0"><svg:path fill="#fff" d="M6 2h12v0h-12zM6 22h12v0h-12z"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M6 2h12v0h-12zM6 22h12v0h-12z;M6 2h12v3h-12zM6 22h12v-3h-12z"></svg:animate></svg:path><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 2h5c0.55 0 1 0.45 1 1v18c0 0.55 -0.45 1 -1 1h-10c-0.55 0 -1 -0.45 -1 -1v-18c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-1 13h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCellphoneOff0)"></svg:rect>`,
})
export class LineMdCellphoneOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCellphoneOffTwotoneIcon],svg[line-md-cellphone-off-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCellphoneOffTwotone0"><svg:path fill="#fff" d="M6 2h12v0h-12zM6 22h12v0h-12z"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M6 2h12v0h-12zM6 22h12v0h-12z;M6 2h12v3h-12zM6 22h12v-3h-12z"></svg:animate></svg:path><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 2h5c0.55 0 1 0.45 1 1v18c0 0.55 -0.45 1 -1 1h-10c-0.55 0 -1 -0.45 -1 -1v-18c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.05s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-1 13h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.05s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCellphoneOffTwotone0)"></svg:rect>`,
})
export class LineMdCellphoneOffTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCellphoneScreenshotIcon],svg[line-md-cellphone-screenshot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12v0h-12zM6 22h12v0h-12z"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M6 2h12v0h-12zM6 22h12v0h-12z;M6 2h12v3h-12zM6 22h12v-3h-12z"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 2h5c0.55 0 1 0.45 1 1v18c0 0.55 -0.45 1 -1 1h-10c-0.55 0 -1 -0.45 -1 -1v-18c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M10 8h2M10 8v2M14 16h-2M14 16v-2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="4;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdCellphoneScreenshotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCellphoneScreenshotTwotoneIcon],svg[line-md-cellphone-screenshot-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12v0h-12zM6 22h12v0h-12z"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M6 2h12v0h-12zM6 22h12v0h-12z;M6 2h12v3h-12zM6 22h12v-3h-12z"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 2h5c0.55 0 1 0.45 1 1v18c0 0.55 -0.45 1 -1 1h-10c-0.55 0 -1 -0.45 -1 -1v-18c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M10 8h2M10 8v2M14 16h-2M14 16v-2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.05s" dur="0.2s" values="4;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdCellphoneScreenshotTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCellphoneTwotoneIcon],svg[line-md-cellphone-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12v0h-12zM6 22h12v0h-12z"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M6 2h12v0h-12zM6 22h12v0h-12z;M6 2h12v3h-12zM6 22h12v-3h-12z"></svg:animate></svg:path><svg:path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-dasharray="64" stroke-dashoffset="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2h5c0.55 0 1 0.45 1 1v18c0 0.55 -0.45 1 -1 1h-10c-0.55 0 -1 -0.45 -1 -1v-18c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path>`,
})
export class LineMdCellphoneTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChatIcon],svg[line-md-chat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="72" stroke-dashoffset="72" d="M3 19.5v-15.5c0 -0.55 0.45 -1 1 -1h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-14.5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M8 7h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M8 10h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M8 13h4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChatAlertIcon],svg[line-md-chat-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="72" stroke-dashoffset="72" d="M3 19.5v-15.5c0 -0.55 0.45 -1 1 -1h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-14.5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"></svg:animate></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M12 7v2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="4;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M12 13v0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="2;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChatAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChatAlertFilledIcon],svg[line-md-chat-alert-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdChatAlertFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="72" stroke-dashoffset="72" d="M3 19.5v-15.5c0 -0.55 0.45 -1 1 -1h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-14.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="4" stroke-dashoffset="4" d="M12 7v2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="4;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="2" stroke-dashoffset="2" d="M12 13v0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" values="2;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdChatAlertFilled0)"></svg:rect>`,
})
export class LineMdChatAlertFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChatAlertTwotoneIcon],svg[line-md-chat-alert-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="72" stroke-dashoffset="72" d="M3 19.5v-15.5c0 -0.55 0.45 -1 1 -1h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-14.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"></svg:animate></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M12 7v2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.85s" dur="0.2s" values="4;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M12 13v0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.05s" dur="0.2s" values="2;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChatAlertTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChatBubbleIcon],svg[line-md-chat-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-dasharray="72" stroke-dashoffset="72" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19.5v-15.5c0 -0.55 0.45 -1 1 -1h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-14.5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"></svg:animate></svg:path>`,
})
export class LineMdChatBubbleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChatBubbleFilledIcon],svg[line-md-chat-bubble-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-dasharray="72" stroke-dashoffset="72" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19.5v-15.5c0 -0.55 0.45 -1 1 -1h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-14.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"></svg:animate></svg:path>`,
})
export class LineMdChatBubbleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChatBubbleOffIcon],svg[line-md-chat-bubble-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdChatBubbleOff0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="72" stroke-dashoffset="72" d="M3 19.5v-15.5c0 -0.55 0.45 -1 1 -1h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-14.5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-1 13h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdChatBubbleOff0)"></svg:rect>`,
})
export class LineMdChatBubbleOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChatBubbleOffFilledIcon],svg[line-md-chat-bubble-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdChatBubbleOffFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="72" stroke-dashoffset="72" d="M3 19.5v-15.5c0 -0.55 0.45 -1 1 -1h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-14.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-1 13h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdChatBubbleOffFilled0)"></svg:rect>`,
})
export class LineMdChatBubbleOffFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChatBubbleOffTwotoneIcon],svg[line-md-chat-bubble-off-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdChatBubbleOffTwotone0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="72" stroke-dashoffset="72" d="M3 19.5v-15.5c0 -0.55 0.45 -1 1 -1h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-14.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.85s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-1 13h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.85s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdChatBubbleOffTwotone0)"></svg:rect>`,
})
export class LineMdChatBubbleOffTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChatBubbleTwotoneIcon],svg[line-md-chat-bubble-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-dasharray="72" stroke-dashoffset="72" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 19.5v-15.5c0 -0.55 0.45 -1 1 -1h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-14.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"></svg:animate></svg:path>`,
})
export class LineMdChatBubbleTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChatFilledIcon],svg[line-md-chat-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdChatFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="72" stroke-dashoffset="72" d="M3 19.5v-15.5c0 -0.55 0.45 -1 1 -1h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-14.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="10" stroke-dashoffset="10" d="M8 7h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="10" stroke-dashoffset="10" d="M8 10h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="6" stroke-dashoffset="6" d="M8 13h4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.8s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdChatFilled0)"></svg:rect>`,
})
export class LineMdChatFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChatOffIcon],svg[line-md-chat-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdChatOff0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="72" stroke-dashoffset="72" d="M3 19.5v-15.5c0 -0.55 0.45 -1 1 -1h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-14.5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M8 7h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M8 10h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M8 13h4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-1 13h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdChatOff0)"></svg:rect>`,
})
export class LineMdChatOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChatOffFilledIcon],svg[line-md-chat-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdChatOffFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="72" stroke-dashoffset="72" d="M3 19.5v-15.5c0 -0.55 0.45 -1 1 -1h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-14.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="10" stroke-dashoffset="10" d="M8 7h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="10" stroke-dashoffset="10" d="M8 10h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="6" stroke-dashoffset="6" d="M8 13h4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.8s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="2s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-1 13h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="2s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdChatOffFilled0)"></svg:rect>`,
})
export class LineMdChatOffFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChatOffTwotoneIcon],svg[line-md-chat-off-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdChatOffTwotone0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="72" stroke-dashoffset="72" d="M3 19.5v-15.5c0 -0.55 0.45 -1 1 -1h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-14.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M8 7h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.85s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M8 10h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.15s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M8 13h4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.45s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.65s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-1 13h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.65s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdChatOffTwotone0)"></svg:rect>`,
})
export class LineMdChatOffTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChatRoundIcon],svg[line-md-chat-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M5 15.5c1 1 2.5 2 4 2.5c-0.71 -0.24 -1.43 -0.59 -2.09 -1c-0.72 -0.45 -1.39 -0.98 -1.91 -1.5Z"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M5 15.5c1 1 2.5 2 4 2.5c-0.71 -0.24 -1.43 -0.59 -2.09 -1c-0.72 -0.45 -1.39 -0.98 -1.91 -1.5Z;M5 15.5c1 1 2.5 2 4 2.5c-2 2 -5 3 -7 3c2 -2 3 -3.5 3 -5.5Z"></svg:animate><svg:set fill="freeze" attributeName="fill-opacity" begin="0.6s" to="1"></svg:set></svg:path><svg:path fill="none" stroke="currentColor" stroke-dasharray="56" stroke-dashoffset="56" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16.82c-2.41 -1.25 -4 -3.39 -4 -5.82c0 -3.87 4.03 -7 9 -7c4.97 0 9 3.13 9 7c0 3.87 -4.03 7 -9 7c-1.85 0 -3.57 -0.43 -5 -1.18Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path>`,
})
export class LineMdChatRoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChatRoundAlertIcon],svg[line-md-chat-round-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M5 15.5c1 1 2.5 2 4 2.5c-0.71 -0.24 -1.43 -0.59 -2.09 -1c-0.72 -0.45 -1.39 -0.98 -1.91 -1.5Z"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M5 15.5c1 1 2.5 2 4 2.5c-0.71 -0.24 -1.43 -0.59 -2.09 -1c-0.72 -0.45 -1.39 -0.98 -1.91 -1.5Z;M5 15.5c1 1 2.5 2 4 2.5c-2 2 -5 3 -7 3c2 -2 3 -3.5 3 -5.5Z"></svg:animate><svg:set fill="freeze" attributeName="fill-opacity" begin="0.6s" to="1"></svg:set></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="56" stroke-dashoffset="56" d="M7 16.82c-2.41 -1.25 -4 -3.39 -4 -5.82c0 -3.87 4.03 -7 9 -7c4.97 0 9 3.13 9 7c0 3.87 -4.03 7 -9 7c-1.85 0 -3.57 -0.43 -5 -1.18Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M12 8v2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="4;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M12 14v0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="2;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChatRoundAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChatRoundAlertFilledIcon],svg[line-md-chat-round-alert-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdChatRoundAlertFilled0"><svg:path fill="#fff" fill-opacity="0" d="M5 15.5c1 1 2.5 2 4 2.5c-0.71 -0.24 -1.43 -0.59 -2.09 -1c-0.72 -0.45 -1.39 -0.98 -1.91 -1.5Z"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M5 15.5c1 1 2.5 2 4 2.5c-0.71 -0.24 -1.43 -0.59 -2.09 -1c-0.72 -0.45 -1.39 -0.98 -1.91 -1.5Z;M5 15.5c1 1 2.5 2 4 2.5c-2 2 -5 3 -7 3c2 -2 3 -3.5 3 -5.5Z"></svg:animate><svg:set fill="freeze" attributeName="fill-opacity" begin="0.6s" to="1"></svg:set></svg:path><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="56" stroke-dashoffset="56" d="M7 16.82c-2.41 -1.25 -4 -3.39 -4 -5.82c0 -3.87 4.03 -7 9 -7c4.97 0 9 3.13 9 7c0 3.87 -4.03 7 -9 7c-1.85 0 -3.57 -0.43 -5 -1.18Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="4" stroke-dashoffset="4" d="M12 8v2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" values="4;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="2" stroke-dashoffset="2" d="M12 14v0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.2s" values="2;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdChatRoundAlertFilled0)"></svg:rect>`,
})
export class LineMdChatRoundAlertFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChatRoundAlertTwotoneIcon],svg[line-md-chat-round-alert-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M5 15.5c1 1 2.5 2 4 2.5c-0.71 -0.24 -1.43 -0.59 -2.09 -1c-0.72 -0.45 -1.39 -0.98 -1.91 -1.5Z"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M5 15.5c1 1 2.5 2 4 2.5c-0.71 -0.24 -1.43 -0.59 -2.09 -1c-0.72 -0.45 -1.39 -0.98 -1.91 -1.5Z;M5 15.5c1 1 2.5 2 4 2.5c-2 2 -5 3 -7 3c2 -2 3 -3.5 3 -5.5Z"></svg:animate><svg:set fill="freeze" attributeName="fill-opacity" begin="0.6s" to="1"></svg:set></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="56" stroke-dashoffset="56" d="M7 16.82c-2.41 -1.25 -4 -3.39 -4 -5.82c0 -3.87 4.03 -7 9 -7c4.97 0 9 3.13 9 7c0 3.87 -4.03 7 -9 7c-1.85 0 -3.57 -0.43 -5 -1.18Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M12 8v2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.05s" dur="0.2s" values="4;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M12 14v0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.25s" dur="0.2s" values="2;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChatRoundAlertTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChatRoundDotsIcon],svg[line-md-chat-round-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M5 15.5c1 1 2.5 2 4 2.5c-0.71 -0.24 -1.43 -0.59 -2.09 -1c-0.72 -0.45 -1.39 -0.98 -1.91 -1.5Z"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M5 15.5c1 1 2.5 2 4 2.5c-0.71 -0.24 -1.43 -0.59 -2.09 -1c-0.72 -0.45 -1.39 -0.98 -1.91 -1.5Z;M5 15.5c1 1 2.5 2 4 2.5c-2 2 -5 3 -7 3c2 -2 3 -3.5 3 -5.5Z"></svg:animate><svg:set fill="freeze" attributeName="fill-opacity" begin="0.6s" to="1"></svg:set></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="56" stroke-dashoffset="56" d="M7 16.82c-2.41 -1.25 -4 -3.39 -4 -5.82c0 -3.87 4.03 -7 9 -7c4.97 0 9 3.13 9 7c0 3.87 -4.03 7 -9 7c-1.85 0 -3.57 -0.43 -5 -1.18Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M8 11h0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M12 11h0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M16 11h0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s" dur="0.2s" values="2;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChatRoundDotsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChatRoundDotsFilledIcon],svg[line-md-chat-round-dots-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdChatRoundDotsFilled0"><svg:path fill="#fff" fill-opacity="0" d="M5 15.5c1 1 2.5 2 4 2.5c-0.71 -0.24 -1.43 -0.59 -2.09 -1c-0.72 -0.45 -1.39 -0.98 -1.91 -1.5Z"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M5 15.5c1 1 2.5 2 4 2.5c-0.71 -0.24 -1.43 -0.59 -2.09 -1c-0.72 -0.45 -1.39 -0.98 -1.91 -1.5Z;M5 15.5c1 1 2.5 2 4 2.5c-2 2 -5 3 -7 3c2 -2 3 -3.5 3 -5.5Z"></svg:animate><svg:set fill="freeze" attributeName="fill-opacity" begin="0.6s" to="1"></svg:set></svg:path><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="56" stroke-dashoffset="56" d="M7 16.82c-2.41 -1.25 -4 -3.39 -4 -5.82c0 -3.87 4.03 -7 9 -7c4.97 0 9 3.13 9 7c0 3.87 -4.03 7 -9 7c-1.85 0 -3.57 -0.43 -5 -1.18Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="2" stroke-dashoffset="2" d="M8 11h0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="2" stroke-dashoffset="2" d="M12 11h0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.7s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="2" stroke-dashoffset="2" d="M16 11h0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="2s" dur="0.2s" values="2;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdChatRoundDotsFilled0)"></svg:rect>`,
})
export class LineMdChatRoundDotsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChatRoundDotsTwotoneIcon],svg[line-md-chat-round-dots-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M5 15.5c1 1 2.5 2 4 2.5c-0.71 -0.24 -1.43 -0.59 -2.09 -1c-0.72 -0.45 -1.39 -0.98 -1.91 -1.5Z"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M5 15.5c1 1 2.5 2 4 2.5c-0.71 -0.24 -1.43 -0.59 -2.09 -1c-0.72 -0.45 -1.39 -0.98 -1.91 -1.5Z;M5 15.5c1 1 2.5 2 4 2.5c-2 2 -5 3 -7 3c2 -2 3 -3.5 3 -5.5Z"></svg:animate><svg:set fill="freeze" attributeName="fill-opacity" begin="0.6s" to="1"></svg:set></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="56" stroke-dashoffset="56" d="M7 16.82c-2.41 -1.25 -4 -3.39 -4 -5.82c0 -3.87 4.03 -7 9 -7c4.97 0 9 3.13 9 7c0 3.87 -4.03 7 -9 7c-1.85 0 -3.57 -0.43 -5 -1.18Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M8 11h0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.05s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M12 11h0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.35s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M16 11h0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.65s" dur="0.2s" values="2;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChatRoundDotsTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChatRoundFilledIcon],svg[line-md-chat-round-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M5 15.5c1 1 2.5 2 4 2.5c-0.71 -0.24 -1.43 -0.59 -2.09 -1c-0.72 -0.45 -1.39 -0.98 -1.91 -1.5Z"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M5 15.5c1 1 2.5 2 4 2.5c-0.71 -0.24 -1.43 -0.59 -2.09 -1c-0.72 -0.45 -1.39 -0.98 -1.91 -1.5Z;M5 15.5c1 1 2.5 2 4 2.5c-2 2 -5 3 -7 3c2 -2 3 -3.5 3 -5.5Z"></svg:animate><svg:set fill="freeze" attributeName="fill-opacity" begin="0.6s" to="1"></svg:set></svg:path><svg:path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-dasharray="56" stroke-dashoffset="56" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16.82c-2.41 -1.25 -4 -3.39 -4 -5.82c0 -3.87 4.03 -7 9 -7c4.97 0 9 3.13 9 7c0 3.87 -4.03 7 -9 7c-1.85 0 -3.57 -0.43 -5 -1.18Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path>`,
})
export class LineMdChatRoundFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChatRoundOffIcon],svg[line-md-chat-round-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdChatRoundOff0"><svg:path fill="#fff" fill-opacity="0" d="M5 15.5c1 1 2.5 2 4 2.5c-0.71 -0.24 -1.43 -0.59 -2.09 -1c-0.72 -0.45 -1.39 -0.98 -1.91 -1.5Z"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M5 15.5c1 1 2.5 2 4 2.5c-0.71 -0.24 -1.43 -0.59 -2.09 -1c-0.72 -0.45 -1.39 -0.98 -1.91 -1.5Z;M5 15.5c1 1 2.5 2 4 2.5c-2 2 -5 3 -7 3c2 -2 3 -3.5 3 -5.5Z"></svg:animate><svg:set fill="freeze" attributeName="fill-opacity" begin="0.6s" to="1"></svg:set></svg:path><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="56" stroke-dashoffset="56" d="M7 16.82c-2.41 -1.25 -4 -3.39 -4 -5.82c0 -3.87 4.03 -7 9 -7c4.97 0 9 3.13 9 7c0 3.87 -4.03 7 -9 7c-1.85 0 -3.57 -0.43 -5 -1.18Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-1 13h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdChatRoundOff0)"></svg:rect>`,
})
export class LineMdChatRoundOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChatRoundOffFilledIcon],svg[line-md-chat-round-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdChatRoundOffFilled0"><svg:path fill="#fff" fill-opacity="0" d="M5 15.5c1 1 2.5 2 4 2.5c-0.71 -0.24 -1.43 -0.59 -2.09 -1c-0.72 -0.45 -1.39 -0.98 -1.91 -1.5Z"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M5 15.5c1 1 2.5 2 4 2.5c-0.71 -0.24 -1.43 -0.59 -2.09 -1c-0.72 -0.45 -1.39 -0.98 -1.91 -1.5Z;M5 15.5c1 1 2.5 2 4 2.5c-2 2 -5 3 -7 3c2 -2 3 -3.5 3 -5.5Z"></svg:animate><svg:set fill="freeze" attributeName="fill-opacity" begin="0.6s" to="1"></svg:set></svg:path><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="56" stroke-dashoffset="56" d="M7 16.82c-2.41 -1.25 -4 -3.39 -4 -5.82c0 -3.87 4.03 -7 9 -7c4.97 0 9 3.13 9 7c0 3.87 -4.03 7 -9 7c-1.85 0 -3.57 -0.43 -5 -1.18Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-1 13h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdChatRoundOffFilled0)"></svg:rect>`,
})
export class LineMdChatRoundOffFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChatRoundOffTwotoneIcon],svg[line-md-chat-round-off-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdChatRoundOffTwotone0"><svg:path fill="#fff" fill-opacity="0" d="M5 15.5c1 1 2.5 2 4 2.5c-0.71 -0.24 -1.43 -0.59 -2.09 -1c-0.72 -0.45 -1.39 -0.98 -1.91 -1.5Z"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M5 15.5c1 1 2.5 2 4 2.5c-0.71 -0.24 -1.43 -0.59 -2.09 -1c-0.72 -0.45 -1.39 -0.98 -1.91 -1.5Z;M5 15.5c1 1 2.5 2 4 2.5c-2 2 -5 3 -7 3c2 -2 3 -3.5 3 -5.5Z"></svg:animate><svg:set fill="freeze" attributeName="fill-opacity" begin="0.6s" to="1"></svg:set></svg:path><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="56" stroke-dashoffset="56" d="M7 16.82c-2.41 -1.25 -4 -3.39 -4 -5.82c0 -3.87 4.03 -7 9 -7c4.97 0 9 3.13 9 7c0 3.87 -4.03 7 -9 7c-1.85 0 -3.57 -0.43 -5 -1.18Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.05s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-1 13h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.05s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdChatRoundOffTwotone0)"></svg:rect>`,
})
export class LineMdChatRoundOffTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChatRoundTwotoneIcon],svg[line-md-chat-round-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M5 15.5c1 1 2.5 2 4 2.5c-0.71 -0.24 -1.43 -0.59 -2.09 -1c-0.72 -0.45 -1.39 -0.98 -1.91 -1.5Z"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M5 15.5c1 1 2.5 2 4 2.5c-0.71 -0.24 -1.43 -0.59 -2.09 -1c-0.72 -0.45 -1.39 -0.98 -1.91 -1.5Z;M5 15.5c1 1 2.5 2 4 2.5c-2 2 -5 3 -7 3c2 -2 3 -3.5 3 -5.5Z"></svg:animate><svg:set fill="freeze" attributeName="fill-opacity" begin="0.6s" to="1"></svg:set></svg:path><svg:path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-dasharray="56" stroke-dashoffset="56" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16.82c-2.41 -1.25 -4 -3.39 -4 -5.82c0 -3.87 4.03 -7 9 -7c4.97 0 9 3.13 9 7c0 3.87 -4.03 7 -9 7c-1.85 0 -3.57 -0.43 -5 -1.18Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path>`,
})
export class LineMdChatRoundTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChatTwotoneIcon],svg[line-md-chat-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="72" stroke-dashoffset="72" d="M3 19.5v-15.5c0 -0.55 0.45 -1 1 -1h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-14.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M8 7h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.85s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M8 10h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.15s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M8 13h4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.45s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChatTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCheckAllIcon],svg[line-md-check-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCheckAll0"><svg:g fill="none" stroke="#fff" stroke-dasharray="24" stroke-dashoffset="24" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M2 13.5l4 4l10.75 -10.75"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-width="6" d="M7.5 13.5l4 4l10.75 -10.75"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="24;0"></svg:animate></svg:path><svg:path d="M7.5 13.5l4 4l10.75 -10.75"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="24;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCheckAll0)"></svg:rect>`,
})
export class LineMdCheckAllIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCheckList3Icon],svg[line-md-check-list-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M3 5l2 2l4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M3 12l2 2l4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M3 19l2 2l4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:g stroke-dasharray="24" stroke-dashoffset="24" stroke-width="1"><svg:path d="M11.5 5c0 -0.83 0.67 -1.5 1.5 -1.5h6c0.83 0 1.5 0.67 1.5 1.5c0 0.83 -0.67 1.5 -1.5 1.5h-6c-0.83 0 -1.5 -0.67 -1.5 -1.5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="24;0"></svg:animate></svg:path><svg:path d="M11.5 12c0 -0.83 0.67 -1.5 1.5 -1.5h6c0.83 0 1.5 0.67 1.5 1.5c0 0.83 -0.67 1.5 -1.5 1.5h-6c-0.83 0 -1.5 -0.67 -1.5 -1.5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path><svg:path d="M11.5 19c0 -0.83 0.67 -1.5 1.5 -1.5h6c0.83 0 1.5 0.67 1.5 1.5c0 0.83 -0.67 1.5 -1.5 1.5h-6c-0.83 0 -1.5 -0.67 -1.5 -1.5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="24;0"></svg:animate></svg:path></svg:g></svg:g>`,
})
export class LineMdCheckList3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCheckList3FilledIcon],svg[line-md-check-list-3-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M3 5l2 2l4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M3 12l2 2l4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M3 19l2 2l4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:g fill="currentColor" fill-opacity="0" stroke-dasharray="24" stroke-dashoffset="24" stroke-width="1"><svg:path d="M11.5 5c0 -0.83 0.67 -1.5 1.5 -1.5h6c0.83 0 1.5 0.67 1.5 1.5c0 0.83 -0.67 1.5 -1.5 1.5h-6c-0.83 0 -1.5 -0.67 -1.5 -1.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="24;0"></svg:animate></svg:path><svg:path d="M11.5 12c0 -0.83 0.67 -1.5 1.5 -1.5h6c0.83 0 1.5 0.67 1.5 1.5c0 0.83 -0.67 1.5 -1.5 1.5h-6c-0.83 0 -1.5 -0.67 -1.5 -1.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.7s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path><svg:path d="M11.5 19c0 -0.83 0.67 -1.5 1.5 -1.5h6c0.83 0 1.5 0.67 1.5 1.5c0 0.83 -0.67 1.5 -1.5 1.5h-6c-0.83 0 -1.5 -0.67 -1.5 -1.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="2.1s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="24;0"></svg:animate></svg:path></svg:g></svg:g>`,
})
export class LineMdCheckList3FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCheckList3TwotoneIcon],svg[line-md-check-list-3-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M3 5l2 2l4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M3 12l2 2l4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M3 19l2 2l4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:g fill="currentColor" fill-opacity="0" stroke-dasharray="24" stroke-dashoffset="24" stroke-width="1"><svg:path d="M11.5 5c0 -0.83 0.67 -1.5 1.5 -1.5h6c0.83 0 1.5 0.67 1.5 1.5c0 0.83 -0.67 1.5 -1.5 1.5h-6c-0.83 0 -1.5 -0.67 -1.5 -1.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="24;0"></svg:animate></svg:path><svg:path d="M11.5 12c0 -0.83 0.67 -1.5 1.5 -1.5h6c0.83 0 1.5 0.67 1.5 1.5c0 0.83 -0.67 1.5 -1.5 1.5h-6c-0.83 0 -1.5 -0.67 -1.5 -1.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.7s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path><svg:path d="M11.5 19c0 -0.83 0.67 -1.5 1.5 -1.5h6c0.83 0 1.5 0.67 1.5 1.5c0 0.83 -0.67 1.5 -1.5 1.5h-6c-0.83 0 -1.5 -0.67 -1.5 -1.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="2.1s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="24;0"></svg:animate></svg:path></svg:g></svg:g>`,
})
export class LineMdCheckList3TwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronDoubleDownIcon],svg[line-md-chevron-double-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-dasharray="12" stroke-dashoffset="12" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 19l-7 -7M12 19l7 -7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="12;0"></svg:animate></svg:path><svg:path d="M12 13l-7 -7M12 13l7 -7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.3s" values="12;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChevronDoubleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronDoubleLeftIcon],svg[line-md-chevron-double-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-dasharray="12" stroke-dashoffset="12" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 12l7 -7M5 12l7 7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="12;0"></svg:animate></svg:path><svg:path d="M11 12l7 -7M11 12l7 7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.3s" values="12;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChevronDoubleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronDoubleRightIcon],svg[line-md-chevron-double-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-dasharray="12" stroke-dashoffset="12" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M19 12l-7 -7M19 12l-7 7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="12;0"></svg:animate></svg:path><svg:path d="M13 12l-7 -7M13 12l-7 7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.3s" values="12;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChevronDoubleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronDoubleUpIcon],svg[line-md-chevron-double-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-dasharray="12" stroke-dashoffset="12" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 5l-7 7M12 5l7 7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="12;0"></svg:animate></svg:path><svg:path d="M12 11l-7 7M12 11l7 7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.3s" values="12;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChevronDoubleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronDownIcon],svg[line-md-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-dasharray="12" stroke-dashoffset="12" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 16l-7 -7M12 16l7 -7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="12;0"></svg:animate></svg:path>`,
})
export class LineMdChevronDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronDownCircleIcon],svg[line-md-chevron-down-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M12 14l-3 -3M12 14l3 -3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.3s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChevronDownCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronDownCircleTwotoneIcon],svg[line-md-chevron-down-circle-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M12 14l-3 -3M12 14l3 -3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.3s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChevronDownCircleTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronDownSquareIcon],svg[line-md-chevron-down-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 4l7 0c0.55 0 1 0.45 1 1l0 14c0 0.55 -0.44 1 -1 1l-14 0c-0.55 0 -1 -0.45 -1 -1l0 -14c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M12 14l-3 -3M12 14l3 -3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.3s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChevronDownSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronDownSquareTwotoneIcon],svg[line-md-chevron-down-square-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 4l7 0c0.55 0 1 0.45 1 1l0 14c0 0.55 -0.44 1 -1 1l-14 0c-0.55 0 -1 -0.45 -1 -1l0 -14c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M12 14l-3 -3M12 14l3 -3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.3s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChevronDownSquareTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronLeftIcon],svg[line-md-chevron-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-dasharray="12" stroke-dashoffset="12" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12l7 -7M8 12l7 7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="12;0"></svg:animate></svg:path>`,
})
export class LineMdChevronLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronLeftCircleIcon],svg[line-md-chevron-left-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M21 12c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M10 12l3 -3M10 12l3 3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.3s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChevronLeftCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronLeftCircleTwotoneIcon],svg[line-md-chevron-left-circle-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M21 12c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M10 12l3 -3M10 12l3 3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.3s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChevronLeftCircleTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronLeftSquareIcon],svg[line-md-chevron-left-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M20 12v7c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.44 -1 -1v-14c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M10 12l3 -3M10 12l3 3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.3s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChevronLeftSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronLeftSquareTwotoneIcon],svg[line-md-chevron-left-square-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M20 12v7c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.44 -1 -1v-14c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M10 12l3 -3M10 12l3 3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.3s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChevronLeftSquareTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronRightIcon],svg[line-md-chevron-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-dasharray="12" stroke-dashoffset="12" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12l-7 -7M16 12l-7 7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="12;0"></svg:animate></svg:path>`,
})
export class LineMdChevronRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronRightCircleIcon],svg[line-md-chevron-right-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M3 12c0 4.97 4.03 9 9 9c4.97 0 9 -4.03 9 -9c0 -4.97 -4.03 -9 -9 -9c-4.97 0 -9 4.03 -9 9Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M14 12l-3 -3M14 12l-3 3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.3s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChevronRightCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronRightCircleTwotoneIcon],svg[line-md-chevron-right-circle-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M3 12c0 4.97 4.03 9 9 9c4.97 0 9 -4.03 9 -9c0 -4.97 -4.03 -9 -9 -9c-4.97 0 -9 4.03 -9 9Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M14 12l-3 -3M14 12l-3 3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.3s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChevronRightCircleTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronRightSquareIcon],svg[line-md-chevron-right-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M4 12v7c0 0.55 0.45 1 1 1h14c0.55 0 1 -0.44 1 -1v-14c0 -0.55 -0.45 -1 -1 -1h-14c-0.55 0 -1 0.45 -1 1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M14 12l-3 -3M14 12l-3 3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.3s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChevronRightSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronRightSquareTwotoneIcon],svg[line-md-chevron-right-square-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M4 12v7c0 0.55 0.45 1 1 1h14c0.55 0 1 -0.44 1 -1v-14c0 -0.55 -0.45 -1 -1 -1h-14c-0.55 0 -1 0.45 -1 1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M14 12l-3 -3M14 12l-3 3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.3s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChevronRightSquareTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronSmallDoubleDownIcon],svg[line-md-chevron-small-double-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-dasharray="10" stroke-dashoffset="10" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 12l-5 -5M12 12l5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="10;0"></svg:animate></svg:path><svg:path d="M12 18l-5 -5M12 18l5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.3s" values="10;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChevronSmallDoubleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronSmallDoubleLeftIcon],svg[line-md-chevron-small-double-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-dasharray="10" stroke-dashoffset="10" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 12l5 -5M12 12l5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="10;0"></svg:animate></svg:path><svg:path d="M6 12l5 -5M6 12l5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.3s" values="10;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChevronSmallDoubleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronSmallDoubleRightIcon],svg[line-md-chevron-small-double-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-dasharray="10" stroke-dashoffset="10" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 12l-5 -5M12 12l-5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="10;0"></svg:animate></svg:path><svg:path d="M18 12l-5 -5M18 12l-5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.3s" values="10;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChevronSmallDoubleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronSmallDoubleUpIcon],svg[line-md-chevron-small-double-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-dasharray="10" stroke-dashoffset="10" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 12l-5 5M12 12l5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="10;0"></svg:animate></svg:path><svg:path d="M12 6l-5 5M12 6l5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.3s" values="10;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChevronSmallDoubleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronSmallDownIcon],svg[line-md-chevron-small-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-dasharray="10" stroke-dashoffset="10" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15l-5 -5M12 15l5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="10;0"></svg:animate></svg:path>`,
})
export class LineMdChevronSmallDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronSmallLeftIcon],svg[line-md-chevron-small-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-dasharray="10" stroke-dashoffset="10" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l5 -5M9 12l5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="10;0"></svg:animate></svg:path>`,
})
export class LineMdChevronSmallLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronSmallRightIcon],svg[line-md-chevron-small-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-dasharray="10" stroke-dashoffset="10" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12l-5 -5M15 12l-5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="10;0"></svg:animate></svg:path>`,
})
export class LineMdChevronSmallRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronSmallTripleDownIcon],svg[line-md-chevron-small-triple-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-dasharray="10" stroke-dashoffset="10" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 10l-5 -5M12 10l5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="10;0"></svg:animate></svg:path><svg:path d="M12 15l-5 -5M12 15l5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.3s" values="10;0"></svg:animate></svg:path><svg:path d="M12 20l-5 -5M12 20l5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.3s" values="10;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChevronSmallTripleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronSmallTripleLeftIcon],svg[line-md-chevron-small-triple-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-dasharray="10" stroke-dashoffset="10" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M14 12l5 -5M14 12l5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="10;0"></svg:animate></svg:path><svg:path d="M9 12l5 -5M9 12l5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.3s" values="10;0"></svg:animate></svg:path><svg:path d="M4 12l5 -5M4 12l5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.3s" values="10;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChevronSmallTripleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronSmallTripleRightIcon],svg[line-md-chevron-small-triple-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-dasharray="10" stroke-dashoffset="10" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M10 12l-5 -5M10 12l-5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="10;0"></svg:animate></svg:path><svg:path d="M15 12l-5 -5M15 12l-5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.3s" values="10;0"></svg:animate></svg:path><svg:path d="M20 12l-5 -5M20 12l-5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.3s" values="10;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChevronSmallTripleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronSmallTripleUpIcon],svg[line-md-chevron-small-triple-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-dasharray="10" stroke-dashoffset="10" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 14l-5 5M12 14l5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="10;0"></svg:animate></svg:path><svg:path d="M12 9l-5 5M12 9l5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.3s" values="10;0"></svg:animate></svg:path><svg:path d="M12 4l-5 5M12 4l5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.3s" values="10;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChevronSmallTripleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronSmallUpIcon],svg[line-md-chevron-small-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-dasharray="10" stroke-dashoffset="10" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9l-5 5M12 9l5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="10;0"></svg:animate></svg:path>`,
})
export class LineMdChevronSmallUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronTripleDownIcon],svg[line-md-chevron-triple-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-dasharray="12" stroke-dashoffset="12" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 22l-7 -7M12 22l7 -7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="12;0"></svg:animate></svg:path><svg:path d="M12 16l-7 -7M12 16l7 -7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.3s" values="12;0"></svg:animate></svg:path><svg:path d="M12 10l-7 -7M12 10l7 -7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.3s" values="12;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChevronTripleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronTripleLeftIcon],svg[line-md-chevron-triple-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-dasharray="12" stroke-dashoffset="12" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M2 12l7 -7M2 12l7 7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="12;0"></svg:animate></svg:path><svg:path d="M8 12l7 -7M8 12l7 7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.3s" values="12;0"></svg:animate></svg:path><svg:path d="M14 12l7 -7M14 12l7 7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.3s" values="12;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChevronTripleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronTripleRightIcon],svg[line-md-chevron-triple-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-dasharray="12" stroke-dashoffset="12" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M22 12l-7 -7M22 12l-7 7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="12;0"></svg:animate></svg:path><svg:path d="M16 12l-7 -7M16 12l-7 7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.3s" values="12;0"></svg:animate></svg:path><svg:path d="M10 12l-7 -7M10 12l-7 7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.3s" values="12;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChevronTripleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronTripleUpIcon],svg[line-md-chevron-triple-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-dasharray="12" stroke-dashoffset="12" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 2l-7 7M12 2l7 7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="12;0"></svg:animate></svg:path><svg:path d="M12 8l-7 7M12 8l7 7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.3s" values="12;0"></svg:animate></svg:path><svg:path d="M12 14l-7 7M12 14l7 7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.3s" values="12;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChevronTripleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronUpIcon],svg[line-md-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-dasharray="12" stroke-dashoffset="12" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8l-7 7M12 8l7 7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="12;0"></svg:animate></svg:path>`,
})
export class LineMdChevronUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronUpCircleIcon],svg[line-md-chevron-up-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 21c4.97 0 9 -4.03 9 -9c0 -4.97 -4.03 -9 -9 -9c-4.97 0 -9 4.03 -9 9c0 4.97 4.03 9 9 9Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M12 10l-3 3M12 10l3 3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.3s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChevronUpCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronUpCircleTwotoneIcon],svg[line-md-chevron-up-circle-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 21c4.97 0 9 -4.03 9 -9c0 -4.97 -4.03 -9 -9 -9c-4.97 0 -9 4.03 -9 9c0 4.97 4.03 9 9 9Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M12 10l-3 3M12 10l3 3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.3s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChevronUpCircleTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronUpSquareIcon],svg[line-md-chevron-up-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 20l7 0c0.55 0 1 -0.45 1 -1l0 -14c0 -0.55 -0.44 -1 -1 -1l-14 0c-0.55 0 -1 0.45 -1 1l0 14c0 0.55 0.45 1 1 1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M12 10l-3 3M12 10l3 3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.3s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChevronUpSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdChevronUpSquareTwotoneIcon],svg[line-md-chevron-up-square-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 20l7 0c0.55 0 1 -0.45 1 -1l0 -14c0 -0.55 -0.44 -1 -1 -1l-14 0c-0.55 0 -1 0.45 -1 1l0 14c0 0.55 0.45 1 1 1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M12 10l-3 3M12 10l3 3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.3s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdChevronUpSquareTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCircleIcon],svg[line-md-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-dasharray="64" stroke-dashoffset="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path>`,
})
export class LineMdCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCircleFilledToConfirmCircleFilledTransitionIcon],svg[line-md-circle-filled-to-confirm-circle-filled-transition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCircleFilledToConfirmCircleFilledTransition0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" d="M3 12c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9Z"></svg:path><svg:path stroke="#000" stroke-dasharray="14" stroke-dashoffset="14" d="M8 12l3 3l5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="14;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCircleFilledToConfirmCircleFilledTransition0)"></svg:rect>`,
})
export class LineMdCircleFilledToConfirmCircleFilledTransitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCircleToConfirmCircleTransitionIcon],svg[line-md-circle-to-confirm-circle-transition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9Z"></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M8 12l3 3l5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="14;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdCircleToConfirmCircleTransitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCircleToConfirmCircleTwotoneTransitionIcon],svg[line-md-circle-to-confirm-circle-twotone-transition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" d="M3 12c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9Z"><svg:animate fill="freeze" attributeName="fill-opacity" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M8 12l3 3l5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.15s" dur="0.2s" values="14;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdCircleToConfirmCircleTwotoneTransitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCircleTwotoneIcon],svg[line-md-circle-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-dasharray="64" stroke-dashoffset="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path>`,
})
export class LineMdCircleTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCircleTwotoneToConfirmCircleTransitionIcon],svg[line-md-circle-twotone-to-confirm-circle-transition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity=".3" d="M3 12c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9Z"><svg:animate fill="freeze" attributeName="fill-opacity" dur="0.15s" values="0.3;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M8 12l3 3l5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.15s" dur="0.2s" values="14;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdCircleTwotoneToConfirmCircleTransitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCircleTwotoneToConfirmCircleTwotoneTransitionIcon],svg[line-md-circle-twotone-to-confirm-circle-twotone-transition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity=".3" d="M3 12c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9Z"></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M8 12l3 3l5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="14;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdCircleTwotoneToConfirmCircleTwotoneTransitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdClipboardIcon],svg[line-md-clipboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="72" stroke-dashoffset="72" d="M12 3h7v18h-14v-18h7Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" stroke-width="1" d="M14.5 3.5v3h-5v-3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="12;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdClipboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdClipboardArrowIcon],svg[line-md-clipboard-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M12 3h7v8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" stroke-width="1" d="M14.5 3.5v3h-5v-3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="48" stroke-dashoffset="48" d="M19 17v4h-14v-18h7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.6s" values="48;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M21 14h-8.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M12 14l3 3M12 14l3 -3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdClipboardArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdClipboardArrowTwotoneIcon],svg[line-md-clipboard-arrow-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M12 3h7v8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" stroke-width="1" d="M14.5 3.5v3h-5v-3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="48" stroke-dashoffset="48" d="M19 17v4h-14v-18h7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.6s" values="48;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M21 14h-8.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M12 14l3 3M12 14l3 -3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g><svg:path fill="currentColor" fill-opacity="0" d="M6 4H10V6H14V4H18V20H6V4Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.6s" dur="0.15s" values="0;0.3"></svg:animate></svg:path>`,
})
export class LineMdClipboardArrowTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdClipboardCheckIcon],svg[line-md-clipboard-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="72" stroke-dashoffset="72" d="M12 3h7v18h-14v-18h7Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" stroke-width="1" d="M14.5 3.5v3h-5v-3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M9 13l2 2l4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="10;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdClipboardCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdClipboardCheckToClipboardTransitionIcon],svg[line-md-clipboard-check-to-clipboard-transition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 3h7v18h-14v-18h7Z"></svg:path><svg:path d="M14.5 3.5v3h-5v-3"></svg:path><svg:path stroke-dasharray="10" d="M9 13l2 2l4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="0;10"></svg:animate></svg:path></svg:g>`,
})
export class LineMdClipboardCheckToClipboardTransitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdClipboardCheckTwotoneIcon],svg[line-md-clipboard-check-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="72" stroke-dashoffset="72" d="M12 3h7v18h-14v-18h7Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" stroke-width="1" d="M14.5 3.5v3h-5v-3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M9 13l2 2l4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="10;0"></svg:animate></svg:path></svg:g><svg:path fill="currentColor" fill-opacity="0" d="M6 4H10V6H14V4H18V20H6V4Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.15s" values="0;0.3"></svg:animate></svg:path>`,
})
export class LineMdClipboardCheckTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdClipboardCheckTwotoneToClipboardTwotoneTransitionIcon],svg[line-md-clipboard-check-twotone-to-clipboard-twotone-transition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 3h7v18h-14v-18h7Z"></svg:path><svg:path d="M14.5 3.5v3h-5v-3"></svg:path><svg:path stroke-dasharray="10" d="M9 13l2 2l4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="0;10"></svg:animate></svg:path></svg:g><svg:path fill="currentColor" fill-opacity=".3" d="M6 4H10V6H14V4H18V20H6V4Z"></svg:path>`,
})
export class LineMdClipboardCheckTwotoneToClipboardTwotoneTransitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdClipboardListIcon],svg[line-md-clipboard-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="72" stroke-dashoffset="72" d="M12 3h7v18h-14v-18h7Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" stroke-width="1" d="M14.5 3.5v3h-5v-3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M9 10h3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="4;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M9 13h5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M9 16h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdClipboardListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdClipboardListTwotoneIcon],svg[line-md-clipboard-list-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="72" stroke-dashoffset="72" d="M12 3h7v18h-14v-18h7Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" stroke-width="1" d="M14.5 3.5v3h-5v-3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M9 10h3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="4;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M9 13h5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M9 16h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g><svg:path fill="currentColor" fill-opacity="0" d="M6 4H10V6H14V4H18V20H6V4Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.6s" dur="0.15s" values="0;0.3"></svg:animate></svg:path>`,
})
export class LineMdClipboardListTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdClipboardMinusIcon],svg[line-md-clipboard-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="72" stroke-dashoffset="72" d="M12 3h7v18h-14v-18h7Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" stroke-width="1" d="M14.5 3.5v3h-5v-3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M9 13h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdClipboardMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdClipboardMinusTwotoneIcon],svg[line-md-clipboard-minus-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="72" stroke-dashoffset="72" d="M12 3h7v18h-14v-18h7Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" stroke-width="1" d="M14.5 3.5v3h-5v-3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M9 13h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g><svg:path fill="currentColor" fill-opacity="0" d="M6 4H10V6H14V4H18V20H6V4Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.15s" values="0;0.3"></svg:animate></svg:path>`,
})
export class LineMdClipboardMinusTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdClipboardPlusIcon],svg[line-md-clipboard-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="72" stroke-dashoffset="72" d="M12 3h7v18h-14v-18h7Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" stroke-width="1" d="M14.5 3.5v3h-5v-3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M9 13h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M12 10v6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdClipboardPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdClipboardPlusTwotoneIcon],svg[line-md-clipboard-plus-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="72" stroke-dashoffset="72" d="M12 3h7v18h-14v-18h7Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" stroke-width="1" d="M14.5 3.5v3h-5v-3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M9 13h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M12 10v6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g><svg:path fill="currentColor" fill-opacity="0" d="M6 4H10V6H14V4H18V20H6V4Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.4s" dur="0.15s" values="0;0.3"></svg:animate></svg:path>`,
})
export class LineMdClipboardPlusTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdClipboardRemoveIcon],svg[line-md-clipboard-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="72" stroke-dashoffset="72" d="M12 3h7v18h-14v-18h7Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" stroke-width="1" d="M14.5 3.5v3h-5v-3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M9 10l6 6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M15 10l-6 6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="10;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdClipboardRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdClipboardRemoveTwotoneIcon],svg[line-md-clipboard-remove-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="72" stroke-dashoffset="72" d="M12 3h7v18h-14v-18h7Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" stroke-width="1" d="M14.5 3.5v3h-5v-3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M9 10l6 6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M15 10l-6 6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="10;0"></svg:animate></svg:path></svg:g><svg:path fill="currentColor" fill-opacity="0" d="M6 4H10V6H14V4H18V20H6V4Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.4s" dur="0.15s" values="0;0.3"></svg:animate></svg:path>`,
})
export class LineMdClipboardRemoveTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdClipboardToClipboardCheckTransitionIcon],svg[line-md-clipboard-to-clipboard-check-transition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 3h7v18h-14v-18h7Z"></svg:path><svg:path d="M14.5 3.5v3h-5v-3"></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M9 13l2 2l4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="10;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdClipboardToClipboardCheckTransitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdClipboardTwotoneIcon],svg[line-md-clipboard-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="72" stroke-dashoffset="72" d="M12 3h7v18h-14v-18h7Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" stroke-width="1" d="M14.5 3.5v3h-5v-3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="12;0"></svg:animate></svg:path></svg:g><svg:path fill="currentColor" fill-opacity="0" d="M6 4H10V6H14V4H18V20H6V4Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.15s" values="0;0.3"></svg:animate></svg:path>`,
})
export class LineMdClipboardTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdClipboardTwotoneToClipboardCheckTwotoneTransitionIcon],svg[line-md-clipboard-twotone-to-clipboard-check-twotone-transition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 3h7v18h-14v-18h7Z"></svg:path><svg:path d="M14.5 3.5v3h-5v-3"></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M9 13l2 2l4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="10;0"></svg:animate></svg:path></svg:g><svg:path fill="currentColor" fill-opacity=".3" d="M6 4H10V6H14V4H18V20H6V4Z"></svg:path>`,
})
export class LineMdClipboardTwotoneToClipboardCheckTwotoneTransitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloseIcon],svg[line-md-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-dasharray="12" stroke-dashoffset="12" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 12l7 7M12 12l-7 -7M12 12l-7 7M12 12l7 -7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="12;0"></svg:animate></svg:path>`,
})
export class LineMdCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloseCircleIcon],svg[line-md-close-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M12 12l4 4M12 12l-4 -4M12 12l-4 4M12 12l4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdCloseCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloseCircleFilledIcon],svg[line-md-close-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCloseCircleFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="8" stroke-dashoffset="8" d="M12 12l4 4M12 12l-4 -4M12 12l-4 4M12 12l4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCloseCircleFilled0)"></svg:rect>`,
})
export class LineMdCloseCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloseCircleTwotoneIcon],svg[line-md-close-circle-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M12 12l4 4M12 12l-4 -4M12 12l-4 4M12 12l4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.75s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdCloseCircleTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloseSmallIcon],svg[line-md-close-small-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-dasharray="16" stroke-dashoffset="16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7 7l10 10"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="16;0"></svg:animate></svg:path><svg:path d="M17 7l-10 10"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="16;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdCloseSmallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloseToMenuAltTransitionIcon],svg[line-md-close-to-menu-alt-transition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 5L19 19M5 19L19 5"><svg:animate fill="freeze" attributeName="d" dur="0.4s" values="M5 5L19 19M5 19L19 5;M5 5L19 5M5 19L19 19"></svg:animate></svg:path><svg:path d="M12 12H12" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="0.2s" dur="0.4s" values="M12 12H12;M5 12H19"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.2s" to="1"></svg:set></svg:path></svg:g>`,
})
export class LineMdCloseToMenuAltTransitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloseToMenuTransitionIcon],svg[line-md-close-to-menu-transition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5L12 12L19 5M12 12H12M5 19L12 12L19 19"><svg:animate fill="freeze" attributeName="d" dur="0.4s" values="M5 5L12 12L19 5M12 12H12M5 19L12 12L19 19;M5 5L12 5L19 5M5 12H19M5 19L12 19L19 19"></svg:animate></svg:path>`,
})
export class LineMdCloseToMenuTransitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudIcon],svg[line-md-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-dasharray="24" stroke-dashoffset="24" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 19h-5c-2.5 0 -4 -2 -4 -4c0 -2 1.5 -4 4 -4c1 0 1.5 0.5 1.5 0.5M12 19h5c2.5 0 4 -2 4 -4c0 -2 -1.5 -4 -4 -4c-1 0 -1.5 0.5 -1.5 0.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0"></svg:animate></svg:path><svg:path d="M7 11v-1c0 -2.5 2 -5 5 -5M17 11v-1c0 -2.5 -2 -5 -5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.3s" values="24;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudAltIcon],svg[line-md-cloud-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-dasharray="64" stroke-dashoffset="64" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path>`,
})
export class LineMdCloudAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudAltBracesIcon],svg[line-md-cloud-alt-braces-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCloudAltBraces0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="0"></svg:set></svg:path><svg:g fill="#fff" stroke="none" opacity="0"><svg:circle cx="12" cy="10" r="6"></svg:circle><svg:rect width="9" height="8" x="8" y="12"></svg:rect><svg:rect width="15" height="12" x="1" y="8" rx="6"></svg:rect><svg:rect width="13" height="10" x="10" y="10" rx="5"></svg:rect><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="1"></svg:set></svg:g><svg:g fill="#000" fill-opacity="0" stroke="none"><svg:circle cx="12" cy="10" r="4"></svg:circle><svg:rect width="9" height="6" x="8" y="12"></svg:rect><svg:rect width="11" height="8" x="3" y="10" rx="4"></svg:rect><svg:rect width="9" height="6" x="12" y="12" rx="3"></svg:rect><svg:set fill="freeze" attributeName="fill-opacity" begin="0.7s" to="1"></svg:set><svg:animate fill="freeze" attributeName="opacity" begin="0.7s" dur="0.5s" values="1;0"></svg:animate></svg:g><svg:path fill="#000" stroke="none" d="M12 13c0 0 0 -0.9 0 -2v-1h0v-2h0c0 0 0 0.9 0 2v1c0 0.55 0 1 0 1h0v2h0c0 0 0 0.45 0 1v1c0 1.1 0 2 0 2h0v-2h0v-1c0 -1.1 0 -2 0 -2ZM12 13c0 0 0 -0.9 0 -2v-1h0v-2h0c0 0 0 0.9 0 2v1c0 0.55 0 1 0 1h0v2h0c0 0 0 0.45 0 1v1c0 1.1 0 2 0 2h0v-2h0v-1c0 -1.1 0 -2 0 -2Z"><svg:animate fill="freeze" attributeName="d" begin="1.3s" dur="0.2s" values="M12 13c0 0 0 -0.9 0 -2v-1h0v-2h0c0 0 0 0.9 0 2v1c0 0.55 0 1 0 1h0v2h0c0 0 0 0.45 0 1v1c0 1.1 0 2 0 2h0v-2h0v-1c0 -1.1 0 -2 0 -2ZM12 13c0 0 0 -0.9 0 -2v-1h0v-2h0c0 0 0 0.9 0 2v1c0 0.55 0 1 0 1h0v2h0c0 0 0 0.45 0 1v1c0 1.1 0 2 0 2h0v-2h0v-1c0 -1.1 0 -2 0 -2Z;M7 13c1.1 0 2 -0.9 2 -2v-1h1.5v-2h-1.5c-1.1 0 -2 0.9 -2 2v1c0 0.55 -0.45 1 -1 1h-0.5v2h0.5c0.55 0 1 0.45 1 1v1c0 1.1 0.9 2 2 2h1.5v-2h-1.5v-1c0 -1.1 -0.9 -2 -2 -2zM17 13c-1.1 0 -2 -0.9 -2 -2v-1h-1.5v-2h1.5c1.1 0 2 0.9 2 2v1c0 0.55 0.45 1 1 1h0.5v2h-0.5c-0.55 0 -1 0.45 -1 1v1c0 1.1 -0.9 2 -2 2h-1.5v-2h1.5v-1c0 -1.1 0.9 -2 2 -2Z"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCloudAltBraces0)"></svg:rect>`,
})
export class LineMdCloudAltBracesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudAltBracesLoopIcon],svg[line-md-cloud-alt-braces-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCloudAltBracesLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="0"></svg:set></svg:path><svg:g fill="#fff" stroke="none" opacity="0"><svg:circle cx="12" cy="10" r="6"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="8" x="8" y="12"></svg:rect><svg:rect width="15" height="12" x="1" y="8" rx="6"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="1;0;1;2;1"></svg:animate></svg:rect><svg:rect width="13" height="10" x="10" y="10" rx="5"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="10;9;10;11;10"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="1"></svg:set></svg:g><svg:g fill="#000" fill-opacity="0" stroke="none"><svg:circle cx="12" cy="10" r="4"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="6" x="8" y="12"></svg:rect><svg:rect width="11" height="8" x="3" y="10" rx="4"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="3;2;3;4;3"></svg:animate></svg:rect><svg:rect width="9" height="6" x="12" y="12" rx="3"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="fill-opacity" begin="0.7s" to="1"></svg:set><svg:animate fill="freeze" attributeName="opacity" begin="0.7s" dur="0.5s" values="1;0"></svg:animate></svg:g><svg:path fill="#000" stroke="none" d="M12 13c0 0 0 -0.9 0 -2v-1h0v-2h0c0 0 0 0.9 0 2v1c0 0.55 0 1 0 1h0v2h0c0 0 0 0.45 0 1v1c0 1.1 0 2 0 2h0v-2h0v-1c0 -1.1 0 -2 0 -2Z"><svg:animate fill="freeze" attributeName="d" begin="1.3s" dur="0.2s" values="M12 13c0 0 0 -0.9 0 -2v-1h0v-2h0c0 0 0 0.9 0 2v1c0 0.55 0 1 0 1h0v2h0c0 0 0 0.45 0 1v1c0 1.1 0 2 0 2h0v-2h0v-1c0 -1.1 0 -2 0 -2Z;M7 13c1.1 0 2 -0.9 2 -2v-1h1.5v-2h-1.5c-1.1 0 -2 0.9 -2 2v1c0 0.55 -0.45 1 -1 1h-0.5v2h0.5c0.55 0 1 0.45 1 1v1c0 1.1 0.9 2 2 2h1.5v-2h-1.5v-1c0 -1.1 -0.9 -2 -2 -2z"></svg:animate><svg:animatemotion calcMode="linear" dur="6s" path="M0 0h-1h2z" repeatCount="indefinite"></svg:animatemotion></svg:path><svg:path fill="#000" stroke="none" d="M12 13c0 0 0 -0.9 0 -2v-1h0v-2h0c0 0 0 0.9 0 2v1c0 0.55 0 1 0 1h0v2h0c0 0 0 0.45 0 1v1c0 1.1 0 2 0 2h0v-2h0v-1c0 -1.1 0 -2 0 -2Z"><svg:animate fill="freeze" attributeName="d" begin="1.3s" dur="0.2s" values="M12 13c0 0 0 -0.9 0 -2v-1h0v-2h0c0 0 0 0.9 0 2v1c0 0.55 0 1 0 1h0v2h0c0 0 0 0.45 0 1v1c0 1.1 0 2 0 2h0v-2h0v-1c0 -1.1 0 -2 0 -2Z;M17 13c-1.1 0 -2 -0.9 -2 -2v-1h-1.5v-2h1.5c1.1 0 2 0.9 2 2v1c0 0.55 0.45 1 1 1h0.5v2h-0.5c-0.55 0 -1 0.45 -1 1v1c0 1.1 -0.9 2 -2 2h-1.5v-2h1.5v-1c0 -1.1 0.9 -2 2 -2Z"></svg:animate><svg:animatemotion calcMode="linear" dur="6s" path="M0 0h1h-2z" repeatCount="indefinite"></svg:animatemotion></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCloudAltBracesLoop0)"></svg:rect>`,
})
export class LineMdCloudAltBracesLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudAltDownloadIcon],svg[line-md-cloud-alt-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:g fill="currentColor" stroke="none"><svg:path d="M10.5 10h3v0h-3z"><svg:animate fill="freeze" attributeName="d" begin="0.7s" dur="0.2s" values="M10.5 10h3v0h-3z;M10.5 10h3v4h-3z"></svg:animate></svg:path><svg:path d="M8 13h8l-4 0z"><svg:animate fill="freeze" attributeName="d" begin="0.9s" dur="0.1s" values="M8 13h8l-4 0z;M8 13h8l-4 4z"></svg:animate></svg:path></svg:g></svg:g>`,
})
export class LineMdCloudAltDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudAltDownloadFilledIcon],svg[line-md-cloud-alt-download-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCloudAltDownloadFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="0"></svg:set></svg:path><svg:g fill="#fff" stroke="none" opacity="0"><svg:circle cx="12" cy="10" r="6"></svg:circle><svg:rect width="9" height="8" x="8" y="12"></svg:rect><svg:rect width="15" height="12" x="1" y="8" rx="6"></svg:rect><svg:rect width="13" height="10" x="10" y="10" rx="5"></svg:rect><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="1"></svg:set></svg:g><svg:g fill="#000" fill-opacity="0" stroke="none"><svg:circle cx="12" cy="10" r="4"></svg:circle><svg:rect width="9" height="6" x="8" y="12"></svg:rect><svg:rect width="11" height="8" x="3" y="10" rx="4"></svg:rect><svg:rect width="9" height="6" x="12" y="12" rx="3"></svg:rect><svg:set fill="freeze" attributeName="fill-opacity" begin="0.7s" to="1"></svg:set><svg:animate fill="freeze" attributeName="opacity" begin="0.7s" dur="0.5s" values="1;0"></svg:animate></svg:g><svg:g fill="#000" stroke="none"><svg:path d="M10 9h4v0h-4z"><svg:animate fill="freeze" attributeName="d" begin="1.3s" dur="0.2s" values="M10 9h4v0h-4z;M10 9h4v5h-4z"></svg:animate></svg:path><svg:path d="M7 13h10l-5 0z"><svg:animate fill="freeze" attributeName="d" begin="1.5s" dur="0.1s" values="M7 13h10l-5 0z;M7 13h10l-5 5z"></svg:animate></svg:path></svg:g></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCloudAltDownloadFilled0)"></svg:rect>`,
})
export class LineMdCloudAltDownloadFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudAltDownloadFilledLoopIcon],svg[line-md-cloud-alt-download-filled-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCloudAltDownloadFilledLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="0"></svg:set></svg:path><svg:g fill="#fff" stroke="none" opacity="0"><svg:circle cx="12" cy="10" r="6"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="8" x="8" y="12"></svg:rect><svg:rect width="15" height="12" x="1" y="8" rx="6"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="1;0;1;2;1"></svg:animate></svg:rect><svg:rect width="13" height="10" x="10" y="10" rx="5"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="10;9;10;11;10"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="1"></svg:set></svg:g><svg:g fill="#000" fill-opacity="0" stroke="none"><svg:circle cx="12" cy="10" r="4"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="6" x="8" y="12"></svg:rect><svg:rect width="11" height="8" x="3" y="10" rx="4"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="3;2;3;4;3"></svg:animate></svg:rect><svg:rect width="9" height="6" x="12" y="12" rx="3"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="fill-opacity" begin="0.7s" to="1"></svg:set><svg:animate fill="freeze" attributeName="opacity" begin="0.7s" dur="0.5s" values="1;0"></svg:animate></svg:g><svg:g fill="#000" stroke="none"><svg:path d="M10 9h4v0h-4z"><svg:animate fill="freeze" attributeName="d" begin="1.3s" dur="0.2s" values="M10 9h4v0h-4z;M10 9h4v5h-4z"></svg:animate></svg:path><svg:path d="M7 13h10l-5 0z"><svg:animate fill="freeze" attributeName="d" begin="1.5s" dur="0.1s" values="M7 13h10l-5 0z;M7 13h10l-5 5z"></svg:animate><svg:animatemotion begin="1.6s" calcMode="linear" dur="1.5s" keyPoints="0;0.25;0.5;0.75;1" keyTimes="0;0.1;0.5;0.8;1" path="M0 0v1v-2z" repeatCount="indefinite"></svg:animatemotion></svg:path></svg:g></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCloudAltDownloadFilledLoop0)"></svg:rect>`,
})
export class LineMdCloudAltDownloadFilledLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudAltDownloadLoopIcon],svg[line-md-cloud-alt-download-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCloudAltDownloadLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="0"></svg:set></svg:path><svg:g fill="#fff" stroke="none" opacity="0"><svg:circle cx="12" cy="10" r="6"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="8" x="8" y="12"></svg:rect><svg:rect width="15" height="12" x="1" y="8" rx="6"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="1;0;1;2;1"></svg:animate></svg:rect><svg:rect width="13" height="10" x="10" y="10" rx="5"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="10;9;10;11;10"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="1"></svg:set></svg:g><svg:g fill="#000" fill-opacity="0" stroke="none"><svg:circle cx="12" cy="10" r="4"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="6" x="8" y="12"></svg:rect><svg:rect width="11" height="8" x="3" y="10" rx="4"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="3;2;3;4;3"></svg:animate></svg:rect><svg:rect width="9" height="6" x="12" y="12" rx="3"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="fill-opacity" begin="0.7s" to="1"></svg:set></svg:g><svg:g fill="#fff" stroke="none"><svg:path d="M10.5 10h3v0h-3z"><svg:animate fill="freeze" attributeName="d" begin="0.7s" dur="0.2s" values="M10.5 10h3v0h-3z;M10.5 10h3v4h-3z"></svg:animate></svg:path><svg:path d="M8 13h8l-4 0z"><svg:animate fill="freeze" attributeName="d" begin="0.9s" dur="0.1s" values="M8 13h8l-4 0z;M8 13h8l-4 4z"></svg:animate><svg:animatemotion begin="1s" calcMode="linear" dur="1.5s" keyPoints="0;0.25;0.5;0.75;1" keyTimes="0;0.1;0.5;0.8;1" path="M0 0v1v-2z" repeatCount="indefinite"></svg:animatemotion></svg:path></svg:g></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCloudAltDownloadLoop0)"></svg:rect>`,
})
export class LineMdCloudAltDownloadLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudAltDownloadTwotoneIcon],svg[line-md-cloud-alt-download-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCloudAltDownloadTwotone0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="0"></svg:set></svg:path><svg:g fill="#fff" stroke="none" opacity="0"><svg:circle cx="12" cy="10" r="6"></svg:circle><svg:rect width="9" height="8" x="8" y="12"></svg:rect><svg:rect width="15" height="12" x="1" y="8" rx="6"></svg:rect><svg:rect width="13" height="10" x="10" y="10" rx="5"></svg:rect><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="1"></svg:set></svg:g><svg:g fill="#000" fill-opacity="0" stroke="none"><svg:circle cx="12" cy="10" r="4"></svg:circle><svg:rect width="9" height="6" x="8" y="12"></svg:rect><svg:rect width="11" height="8" x="3" y="10" rx="4"></svg:rect><svg:rect width="9" height="6" x="12" y="12" rx="3"></svg:rect><svg:set fill="freeze" attributeName="fill-opacity" begin="0.7s" to="1"></svg:set><svg:animate fill="freeze" attributeName="opacity" begin="0.7s" dur="0.15s" values="1;0.7"></svg:animate></svg:g><svg:g fill="#fff" stroke="none"><svg:path d="M10.5 10h3v0h-3z"><svg:animate fill="freeze" attributeName="d" begin="0.95s" dur="0.2s" values="M10.5 10h3v0h-3z;M10.5 10h3v4h-3z"></svg:animate></svg:path><svg:path d="M8 13h8l-4 0z"><svg:animate fill="freeze" attributeName="d" begin="1.15s" dur="0.1s" values="M8 13h8l-4 0z;M8 13h8l-4 4z"></svg:animate></svg:path></svg:g></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCloudAltDownloadTwotone0)"></svg:rect>`,
})
export class LineMdCloudAltDownloadTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudAltDownloadTwotoneLoopIcon],svg[line-md-cloud-alt-download-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCloudAltDownloadTwotoneLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="0"></svg:set></svg:path><svg:g fill="#fff" stroke="none" opacity="0"><svg:circle cx="12" cy="10" r="6"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="8" x="8" y="12"></svg:rect><svg:rect width="15" height="12" x="1" y="8" rx="6"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="1;0;1;2;1"></svg:animate></svg:rect><svg:rect width="13" height="10" x="10" y="10" rx="5"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="10;9;10;11;10"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="1"></svg:set></svg:g><svg:g fill="#000" fill-opacity="0" stroke="none"><svg:circle cx="12" cy="10" r="4"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="6" x="8" y="12"></svg:rect><svg:rect width="11" height="8" x="3" y="10" rx="4"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="3;2;3;4;3"></svg:animate></svg:rect><svg:rect width="9" height="6" x="12" y="12" rx="3"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="fill-opacity" begin="0.7s" to="1"></svg:set><svg:animate fill="freeze" attributeName="opacity" begin="0.7s" dur="0.15s" values="1;0.7"></svg:animate></svg:g><svg:g fill="#fff" stroke="none"><svg:path d="M10.5 10h3v0h-3z"><svg:animate fill="freeze" attributeName="d" begin="0.95s" dur="0.2s" values="M10.5 10h3v0h-3z;M10.5 10h3v4h-3z"></svg:animate></svg:path><svg:path d="M8 13h8l-4 0z"><svg:animate fill="freeze" attributeName="d" begin="1.15s" dur="0.1s" values="M8 13h8l-4 0z;M8 13h8l-4 4z"></svg:animate><svg:animatemotion begin="1.25s" calcMode="linear" dur="1.5s" keyPoints="0;0.25;0.5;0.75;1" keyTimes="0;0.1;0.5;0.8;1" path="M0 0v1v-2z" repeatCount="indefinite"></svg:animatemotion></svg:path></svg:g></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCloudAltDownloadTwotoneLoop0)"></svg:rect>`,
})
export class LineMdCloudAltDownloadTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudAltFilledIcon],svg[line-md-cloud-alt-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCloudAltFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="0"></svg:set></svg:path><svg:g fill="#fff" stroke="none" opacity="0"><svg:circle cx="12" cy="10" r="6"></svg:circle><svg:rect width="9" height="8" x="8" y="12"></svg:rect><svg:rect width="15" height="12" x="1" y="8" rx="6"></svg:rect><svg:rect width="13" height="10" x="10" y="10" rx="5"></svg:rect><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="1"></svg:set></svg:g><svg:g fill="#000" fill-opacity="0" stroke="none"><svg:circle cx="12" cy="10" r="4"></svg:circle><svg:rect width="9" height="6" x="8" y="12"></svg:rect><svg:rect width="11" height="8" x="3" y="10" rx="4"></svg:rect><svg:rect width="9" height="6" x="12" y="12" rx="3"></svg:rect><svg:set fill="freeze" attributeName="fill-opacity" begin="0.7s" to="1"></svg:set><svg:animate fill="freeze" attributeName="opacity" begin="0.7s" dur="0.5s" values="1;0"></svg:animate></svg:g></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCloudAltFilled0)"></svg:rect>`,
})
export class LineMdCloudAltFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudAltFilledLoopIcon],svg[line-md-cloud-alt-filled-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCloudAltFilledLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="0"></svg:set></svg:path><svg:g fill="#fff" stroke="none" opacity="0"><svg:circle cx="12" cy="10" r="6"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="8" x="8" y="12"></svg:rect><svg:rect width="15" height="12" x="1" y="8" rx="6"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="1;0;1;2;1"></svg:animate></svg:rect><svg:rect width="13" height="10" x="10" y="10" rx="5"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="10;9;10;11;10"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="1"></svg:set></svg:g><svg:g fill="#000" fill-opacity="0" stroke="none"><svg:circle cx="12" cy="10" r="4"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="6" x="8" y="12"></svg:rect><svg:rect width="11" height="8" x="3" y="10" rx="4"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="3;2;3;4;3"></svg:animate></svg:rect><svg:rect width="9" height="6" x="12" y="12" rx="3"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="fill-opacity" begin="0.7s" to="1"></svg:set><svg:animate fill="freeze" attributeName="opacity" begin="0.7s" dur="0.5s" values="1;0"></svg:animate></svg:g></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCloudAltFilledLoop0)"></svg:rect>`,
})
export class LineMdCloudAltFilledLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudAltLoopIcon],svg[line-md-cloud-alt-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCloudAltLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="0"></svg:set></svg:path><svg:g fill="#fff" stroke="none" opacity="0"><svg:circle cx="12" cy="10" r="6"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="8" x="8" y="12"></svg:rect><svg:rect width="15" height="12" x="1" y="8" rx="6"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="1;0;1;2;1"></svg:animate></svg:rect><svg:rect width="13" height="10" x="10" y="10" rx="5"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="10;9;10;11;10"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="1"></svg:set></svg:g><svg:g fill="#000" fill-opacity="0" stroke="none"><svg:circle cx="12" cy="10" r="4"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="6" x="8" y="12"></svg:rect><svg:rect width="11" height="8" x="3" y="10" rx="4"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="3;2;3;4;3"></svg:animate></svg:rect><svg:rect width="9" height="6" x="12" y="12" rx="3"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="fill-opacity" begin="0.7s" to="1"></svg:set></svg:g></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCloudAltLoop0)"></svg:rect>`,
})
export class LineMdCloudAltLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudAltOffIcon],svg[line-md-cloud-alt-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke="currentColor" stroke-dasharray="28" stroke-dashoffset="28" d="M1 11h24" transform="rotate(45 13 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M2 13h22" transform="rotate(45 13 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdCloudAltOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudAltOffFilledIcon],svg[line-md-cloud-alt-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCloudAltOffFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="0"></svg:set></svg:path><svg:g fill="#fff" stroke="none" opacity="0"><svg:circle cx="12" cy="10" r="6"></svg:circle><svg:rect width="9" height="8" x="8" y="12"></svg:rect><svg:rect width="15" height="12" x="1" y="8" rx="6"></svg:rect><svg:rect width="13" height="10" x="10" y="10" rx="5"></svg:rect><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="1"></svg:set></svg:g><svg:g fill="#000" fill-opacity="0" stroke="none"><svg:circle cx="12" cy="10" r="4"></svg:circle><svg:rect width="9" height="6" x="8" y="12"></svg:rect><svg:rect width="11" height="8" x="3" y="10" rx="4"></svg:rect><svg:rect width="9" height="6" x="12" y="12" rx="3"></svg:rect><svg:set fill="freeze" attributeName="fill-opacity" begin="0.7s" to="1"></svg:set><svg:animate fill="freeze" attributeName="opacity" begin="0.7s" dur="0.5s" values="1;0"></svg:animate></svg:g><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M1 11h24" transform="rotate(45 13 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M2 13h22" transform="rotate(45 13 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCloudAltOffFilled0)"></svg:rect>`,
})
export class LineMdCloudAltOffFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudAltOffFilledLoopIcon],svg[line-md-cloud-alt-off-filled-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCloudAltOffFilledLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="0"></svg:set></svg:path><svg:g fill="#fff" stroke="none" opacity="0"><svg:circle cx="12" cy="10" r="6"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="8" x="8" y="12"></svg:rect><svg:rect width="15" height="12" x="1" y="8" rx="6"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="1;0;1;2;1"></svg:animate></svg:rect><svg:rect width="13" height="10" x="10" y="10" rx="5"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="10;9;10;11;10"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="1"></svg:set></svg:g><svg:g fill="#000" fill-opacity="0" stroke="none"><svg:circle cx="12" cy="10" r="4"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="6" x="8" y="12"></svg:rect><svg:rect width="11" height="8" x="3" y="10" rx="4"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="3;2;3;4;3"></svg:animate></svg:rect><svg:rect width="9" height="6" x="12" y="12" rx="3"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="fill-opacity" begin="0.7s" to="1"></svg:set><svg:animate fill="freeze" attributeName="opacity" begin="0.7s" dur="0.5s" values="1;0"></svg:animate></svg:g><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M1 11h24" transform="rotate(45 13 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M1 13h22" transform="rotate(45 13 12)"><svg:animate attributeName="d" begin="1.7s" dur="6s" repeatCount="indefinite" values="M1 13h22;M3 13h22;M1 13h22"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCloudAltOffFilledLoop0)"></svg:rect>`,
})
export class LineMdCloudAltOffFilledLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudAltOffLoopIcon],svg[line-md-cloud-alt-off-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCloudAltOffLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="0"></svg:set></svg:path><svg:g fill="#fff" stroke="none" opacity="0"><svg:circle cx="12" cy="10" r="6"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="8" x="8" y="12"></svg:rect><svg:rect width="15" height="12" x="1" y="8" rx="6"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="1;0;1;2;1"></svg:animate></svg:rect><svg:rect width="13" height="10" x="10" y="10" rx="5"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="10;9;10;11;10"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="1"></svg:set></svg:g><svg:g fill="#000" fill-opacity="0" stroke="none"><svg:circle cx="12" cy="10" r="4"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="6" x="8" y="12"></svg:rect><svg:rect width="11" height="8" x="3" y="10" rx="4"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="3;2;3;4;3"></svg:animate></svg:rect><svg:rect width="9" height="6" x="12" y="12" rx="3"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="fill-opacity" begin="0.7s" to="1"></svg:set></svg:g><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M1 11h24" transform="rotate(45 13 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M1 13h22" transform="rotate(45 13 12)"><svg:animate attributeName="d" begin="1.1s" dur="6s" repeatCount="indefinite" values="M1 13h22;M3 13h22;M1 13h22"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCloudAltOffLoop0)"></svg:rect>`,
})
export class LineMdCloudAltOffLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudAltOffTwotoneIcon],svg[line-md-cloud-alt-off-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCloudAltOffTwotone0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="0"></svg:set></svg:path><svg:g fill="#fff" stroke="none" opacity="0"><svg:circle cx="12" cy="10" r="6"></svg:circle><svg:rect width="9" height="8" x="8" y="12"></svg:rect><svg:rect width="15" height="12" x="1" y="8" rx="6"></svg:rect><svg:rect width="13" height="10" x="10" y="10" rx="5"></svg:rect><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="1"></svg:set></svg:g><svg:g fill="#000" fill-opacity="0" stroke="none"><svg:circle cx="12" cy="10" r="4"></svg:circle><svg:rect width="9" height="6" x="8" y="12"></svg:rect><svg:rect width="11" height="8" x="3" y="10" rx="4"></svg:rect><svg:rect width="9" height="6" x="12" y="12" rx="3"></svg:rect><svg:set fill="freeze" attributeName="fill-opacity" begin="0.7s" to="1"></svg:set><svg:animate fill="freeze" attributeName="opacity" begin="0.7s" dur="0.15s" values="1;0.7"></svg:animate></svg:g><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M1 11h24" transform="rotate(45 13 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.95s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M2 13h22" transform="rotate(45 13 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.95s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCloudAltOffTwotone0)"></svg:rect>`,
})
export class LineMdCloudAltOffTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudAltOffTwotoneLoopIcon],svg[line-md-cloud-alt-off-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCloudAltOffTwotoneLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="0"></svg:set></svg:path><svg:g fill="#fff" stroke="none" opacity="0"><svg:circle cx="12" cy="10" r="6"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="8" x="8" y="12"></svg:rect><svg:rect width="15" height="12" x="1" y="8" rx="6"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="1;0;1;2;1"></svg:animate></svg:rect><svg:rect width="13" height="10" x="10" y="10" rx="5"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="10;9;10;11;10"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="1"></svg:set></svg:g><svg:g fill="#000" fill-opacity="0" stroke="none"><svg:circle cx="12" cy="10" r="4"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="6" x="8" y="12"></svg:rect><svg:rect width="11" height="8" x="3" y="10" rx="4"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="3;2;3;4;3"></svg:animate></svg:rect><svg:rect width="9" height="6" x="12" y="12" rx="3"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="fill-opacity" begin="0.7s" to="1"></svg:set><svg:animate fill="freeze" attributeName="opacity" begin="0.7s" dur="0.15s" values="1;0.7"></svg:animate></svg:g><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M1 11h24" transform="rotate(45 13 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.95s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M1 13h22" transform="rotate(45 13 12)"><svg:animate attributeName="d" begin="1.35s" dur="6s" repeatCount="indefinite" values="M1 13h22;M3 13h22;M1 13h22"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.95s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCloudAltOffTwotoneLoop0)"></svg:rect>`,
})
export class LineMdCloudAltOffTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudAltPrintFilledLoopIcon],svg[line-md-cloud-alt-print-filled-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCloudAltPrintFilledLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="0"></svg:set></svg:path><svg:g fill="#fff" stroke="none" opacity="0"><svg:circle cx="12" cy="10" r="6"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="8" x="8" y="12"></svg:rect><svg:rect width="15" height="12" x="1" y="8" rx="6"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="1;0;1;2;1"></svg:animate></svg:rect><svg:rect width="13" height="10" x="10" y="10" rx="5"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="10;9;10;11;10"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="1"></svg:set></svg:g><svg:g fill="#000" fill-opacity="0" stroke="none"><svg:circle cx="12" cy="10" r="4"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="6" x="8" y="12"></svg:rect><svg:rect width="11" height="8" x="3" y="10" rx="4"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="3;2;3;4;3"></svg:animate></svg:rect><svg:rect width="9" height="6" x="12" y="12" rx="3"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="fill-opacity" begin="0.7s" to="1"></svg:set><svg:animate fill="freeze" attributeName="opacity" begin="0.7s" dur="0.5s" values="1;0"></svg:animate></svg:g><svg:g stroke="none"><svg:path fill="#fff" d="M6 11h12v0h-12z"><svg:animate fill="freeze" attributeName="d" begin="1.3s" dur="0.22s" values="M6 11h12v0h-12z;M6 11h12v11h-12z"></svg:animate></svg:path><svg:path fill="#000" d="M8 13h8v0h-8z"><svg:animate fill="freeze" attributeName="d" begin="1.34s" dur="0.14s" values="M8 13h8v0h-8z;M8 13h8v7h-8z"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" d="M9 12h6v1H9zM9 14h6v1H9zM9 16h6v1H9zM9 18h6v1H9z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.4s" dur="0.1s" values="0;1"></svg:animate><svg:animatemotion begin="1.5s" calcMode="linear" dur="1.5s" path="M0 0v2" repeatCount="indefinite"></svg:animatemotion></svg:path></svg:g></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCloudAltPrintFilledLoop0)"></svg:rect>`,
})
export class LineMdCloudAltPrintFilledLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudAltPrintLoopIcon],svg[line-md-cloud-alt-print-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCloudAltPrintLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="0"></svg:set></svg:path><svg:g fill="#fff" stroke="none" opacity="0"><svg:circle cx="12" cy="10" r="6"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="8" x="8" y="12"></svg:rect><svg:rect width="15" height="12" x="1" y="8" rx="6"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="1;0;1;2;1"></svg:animate></svg:rect><svg:rect width="13" height="10" x="10" y="10" rx="5"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="10;9;10;11;10"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="1"></svg:set></svg:g><svg:g fill="#000" fill-opacity="0" stroke="none"><svg:circle cx="12" cy="10" r="4"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="6" x="8" y="12"></svg:rect><svg:rect width="11" height="8" x="3" y="10" rx="4"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="3;2;3;4;3"></svg:animate></svg:rect><svg:rect width="9" height="6" x="12" y="12" rx="3"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="fill-opacity" begin="0.7s" to="1"></svg:set></svg:g><svg:g stroke="none"><svg:path fill="#fff" d="M6 11h12v0h-12z"><svg:animate fill="freeze" attributeName="d" begin="0.7s" dur="0.22s" values="M6 11h12v0h-12z;M6 11h12v11h-12z"></svg:animate></svg:path><svg:path fill="#000" d="M8 13h8v0h-8z"><svg:animate fill="freeze" attributeName="d" begin="0.74s" dur="0.14s" values="M8 13h8v0h-8z;M8 13h8v7h-8z"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" d="M9 12h6v1H9zM9 14h6v1H9zM9 16h6v1H9zM9 18h6v1H9z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.1s" values="0;1"></svg:animate><svg:animatemotion begin="0.9s" calcMode="linear" dur="1.5s" path="M0 0v2" repeatCount="indefinite"></svg:animatemotion></svg:path></svg:g></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCloudAltPrintLoop0)"></svg:rect>`,
})
export class LineMdCloudAltPrintLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudAltPrintTwotoneLoopIcon],svg[line-md-cloud-alt-print-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCloudAltPrintTwotoneLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="0"></svg:set></svg:path><svg:g fill="#fff" stroke="none" opacity="0"><svg:circle cx="12" cy="10" r="6"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="8" x="8" y="12"></svg:rect><svg:rect width="15" height="12" x="1" y="8" rx="6"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="1;0;1;2;1"></svg:animate></svg:rect><svg:rect width="13" height="10" x="10" y="10" rx="5"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="10;9;10;11;10"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="1"></svg:set></svg:g><svg:g fill="#000" fill-opacity="0" stroke="none"><svg:circle cx="12" cy="10" r="4"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="6" x="8" y="12"></svg:rect><svg:rect width="11" height="8" x="3" y="10" rx="4"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="3;2;3;4;3"></svg:animate></svg:rect><svg:rect width="9" height="6" x="12" y="12" rx="3"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="fill-opacity" begin="0.7s" to="1"></svg:set><svg:animate fill="freeze" attributeName="opacity" begin="0.7s" dur="0.15s" values="1;0.7"></svg:animate></svg:g><svg:g stroke="none"><svg:path fill="#fff" d="M6 11h12v0h-12z"><svg:animate fill="freeze" attributeName="d" begin="0.95s" dur="0.22s" values="M6 11h12v0h-12z;M6 11h12v11h-12z"></svg:animate></svg:path><svg:path fill="#000" d="M8 13h8v0h-8z"><svg:animate fill="freeze" attributeName="d" begin="0.99s" dur="0.14s" values="M8 13h8v0h-8z;M8 13h8v7h-8z"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" d="M9 12h6v1H9zM9 14h6v1H9zM9 16h6v1H9zM9 18h6v1H9z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.05s" dur="0.1s" values="0;1"></svg:animate><svg:animatemotion begin="1.15s" calcMode="linear" dur="1.5s" path="M0 0v2" repeatCount="indefinite"></svg:animatemotion></svg:path></svg:g></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCloudAltPrintTwotoneLoop0)"></svg:rect>`,
})
export class LineMdCloudAltPrintTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudAltTagsIcon],svg[line-md-cloud-alt-tags-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" stroke-linecap="square" stroke-linejoin="miter" d="M7 14l2 2M7 14l2 -2M15 14l-2 2M15 14l-2 -2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.3s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdCloudAltTagsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudAltTagsFilledIcon],svg[line-md-cloud-alt-tags-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCloudAltTagsFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="0"></svg:set></svg:path><svg:g fill="#fff" stroke="none" opacity="0"><svg:circle cx="12" cy="10" r="6"></svg:circle><svg:rect width="9" height="8" x="8" y="12"></svg:rect><svg:rect width="15" height="12" x="1" y="8" rx="6"></svg:rect><svg:rect width="13" height="10" x="10" y="10" rx="5"></svg:rect><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="1"></svg:set></svg:g><svg:g fill="#000" fill-opacity="0" stroke="none"><svg:circle cx="12" cy="10" r="4"></svg:circle><svg:rect width="9" height="6" x="8" y="12"></svg:rect><svg:rect width="11" height="8" x="3" y="10" rx="4"></svg:rect><svg:rect width="9" height="6" x="12" y="12" rx="3"></svg:rect><svg:set fill="freeze" attributeName="fill-opacity" begin="0.7s" to="1"></svg:set><svg:animate fill="freeze" attributeName="opacity" begin="0.7s" dur="0.5s" values="1;0"></svg:animate></svg:g><svg:path stroke="#000" stroke-dasharray="6" stroke-dashoffset="6" stroke-linecap="square" stroke-linejoin="miter" d="M6 13l3 3M6 13l3 -3M17 13l-3 3M17 13l-3 -3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.3s" values="6;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCloudAltTagsFilled0)"></svg:rect>`,
})
export class LineMdCloudAltTagsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudAltTagsFilledLoopIcon],svg[line-md-cloud-alt-tags-filled-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCloudAltTagsFilledLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="0"></svg:set></svg:path><svg:g fill="#fff" stroke="none" opacity="0"><svg:circle cx="12" cy="10" r="6"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="8" x="8" y="12"></svg:rect><svg:rect width="15" height="12" x="1" y="8" rx="6"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="1;0;1;2;1"></svg:animate></svg:rect><svg:rect width="13" height="10" x="10" y="10" rx="5"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="10;9;10;11;10"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="1"></svg:set></svg:g><svg:g fill="#000" fill-opacity="0" stroke="none"><svg:circle cx="12" cy="10" r="4"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="6" x="8" y="12"></svg:rect><svg:rect width="11" height="8" x="3" y="10" rx="4"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="3;2;3;4;3"></svg:animate></svg:rect><svg:rect width="9" height="6" x="12" y="12" rx="3"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="fill-opacity" begin="0.7s" to="1"></svg:set><svg:animate fill="freeze" attributeName="opacity" begin="0.7s" dur="0.5s" values="1;0"></svg:animate></svg:g><svg:g stroke="#000" stroke-dasharray="6" stroke-dashoffset="6" stroke-linecap="square" stroke-linejoin="miter"><svg:path d="M6 13l3 3M6 13l3 -3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.3s" values="6;0"></svg:animate><svg:animatemotion begin="1.6s" calcMode="linear" dur="6s" keyPoints="0;0.25;0.5;0.75;1" keyTimes="0;0.1;0.5;0.8;1" path="M0 0h-1h2z" repeatCount="indefinite"></svg:animatemotion></svg:path><svg:path d="M17 13l-3 3M17 13l-3 -3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.3s" values="6;0"></svg:animate><svg:animatemotion begin="1.6s" calcMode="linear" dur="6s" keyPoints="0;0.25;0.5;0.75;1" keyTimes="0;0.1;0.5;0.8;1" path="M0 0h1h-2z" repeatCount="indefinite"></svg:animatemotion></svg:path></svg:g></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCloudAltTagsFilledLoop0)"></svg:rect>`,
})
export class LineMdCloudAltTagsFilledLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudAltTagsLoopIcon],svg[line-md-cloud-alt-tags-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCloudAltTagsLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="0"></svg:set></svg:path><svg:g fill="#fff" stroke="none" opacity="0"><svg:circle cx="12" cy="10" r="6"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="8" x="8" y="12"></svg:rect><svg:rect width="15" height="12" x="1" y="8" rx="6"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="1;0;1;2;1"></svg:animate></svg:rect><svg:rect width="13" height="10" x="10" y="10" rx="5"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="10;9;10;11;10"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="1"></svg:set></svg:g><svg:g fill="#000" fill-opacity="0" stroke="none"><svg:circle cx="12" cy="10" r="4"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="6" x="8" y="12"></svg:rect><svg:rect width="11" height="8" x="3" y="10" rx="4"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="3;2;3;4;3"></svg:animate></svg:rect><svg:rect width="9" height="6" x="12" y="12" rx="3"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="fill-opacity" begin="0.7s" to="1"></svg:set></svg:g><svg:g stroke-dasharray="6" stroke-dashoffset="6" stroke-linecap="square" stroke-linejoin="miter"><svg:path d="M7 14l2 2M7 14l2 -2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.3s" values="6;0"></svg:animate><svg:animatemotion begin="1s" calcMode="linear" dur="6s" keyPoints="0;0.25;0.5;0.75;1" keyTimes="0;0.1;0.5;0.8;1" path="M0 0h-1h2z" repeatCount="indefinite"></svg:animatemotion></svg:path><svg:path d="M15 14l-2 2M15 14l-2 -2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.3s" values="6;0"></svg:animate><svg:animatemotion begin="1s" calcMode="linear" dur="6s" keyPoints="0;0.25;0.5;0.75;1" keyTimes="0;0.1;0.5;0.8;1" path="M0 0h1h-2z" repeatCount="indefinite"></svg:animatemotion></svg:path></svg:g></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCloudAltTagsLoop0)"></svg:rect>`,
})
export class LineMdCloudAltTagsLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudAltTagsTwotoneIcon],svg[line-md-cloud-alt-tags-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCloudAltTagsTwotone0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="0"></svg:set></svg:path><svg:g fill="#fff" stroke="none" opacity="0"><svg:circle cx="12" cy="10" r="6"></svg:circle><svg:rect width="9" height="8" x="8" y="12"></svg:rect><svg:rect width="15" height="12" x="1" y="8" rx="6"></svg:rect><svg:rect width="13" height="10" x="10" y="10" rx="5"></svg:rect><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="1"></svg:set></svg:g><svg:g fill="#000" fill-opacity="0" stroke="none"><svg:circle cx="12" cy="10" r="4"></svg:circle><svg:rect width="9" height="6" x="8" y="12"></svg:rect><svg:rect width="11" height="8" x="3" y="10" rx="4"></svg:rect><svg:rect width="9" height="6" x="12" y="12" rx="3"></svg:rect><svg:set fill="freeze" attributeName="fill-opacity" begin="0.7s" to="1"></svg:set><svg:animate fill="freeze" attributeName="opacity" begin="0.7s" dur="0.15s" values="1;0.7"></svg:animate></svg:g><svg:path stroke-dasharray="6" stroke-dashoffset="6" stroke-linecap="square" stroke-linejoin="miter" d="M7 14l2 2M7 14l2 -2M15 14l-2 2M15 14l-2 -2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.95s" dur="0.3s" values="6;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCloudAltTagsTwotone0)"></svg:rect>`,
})
export class LineMdCloudAltTagsTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudAltTagsTwotoneLoopIcon],svg[line-md-cloud-alt-tags-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCloudAltTagsTwotoneLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="0"></svg:set></svg:path><svg:g fill="#fff" stroke="none" opacity="0"><svg:circle cx="12" cy="10" r="6"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="8" x="8" y="12"></svg:rect><svg:rect width="15" height="12" x="1" y="8" rx="6"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="1;0;1;2;1"></svg:animate></svg:rect><svg:rect width="13" height="10" x="10" y="10" rx="5"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="10;9;10;11;10"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="1"></svg:set></svg:g><svg:g fill="#000" fill-opacity="0" stroke="none"><svg:circle cx="12" cy="10" r="4"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="6" x="8" y="12"></svg:rect><svg:rect width="11" height="8" x="3" y="10" rx="4"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="3;2;3;4;3"></svg:animate></svg:rect><svg:rect width="9" height="6" x="12" y="12" rx="3"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="fill-opacity" begin="0.7s" to="1"></svg:set><svg:animate fill="freeze" attributeName="opacity" begin="0.7s" dur="0.15s" values="1;0.7"></svg:animate></svg:g><svg:g stroke-dasharray="6" stroke-dashoffset="6" stroke-linecap="square" stroke-linejoin="miter"><svg:path d="M7 14l2 2M7 14l2 -2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.95s" dur="0.3s" values="6;0"></svg:animate><svg:animatemotion begin="1.25s" calcMode="linear" dur="6s" keyPoints="0;0.25;0.5;0.75;1" keyTimes="0;0.1;0.5;0.8;1" path="M0 0h-1h2z" repeatCount="indefinite"></svg:animatemotion></svg:path><svg:path d="M15 14l-2 2M15 14l-2 -2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.95s" dur="0.3s" values="6;0"></svg:animate><svg:animatemotion begin="1.25s" calcMode="linear" dur="6s" keyPoints="0;0.25;0.5;0.75;1" keyTimes="0;0.1;0.5;0.8;1" path="M0 0h1h-2z" repeatCount="indefinite"></svg:animatemotion></svg:path></svg:g></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCloudAltTagsTwotoneLoop0)"></svg:rect>`,
})
export class LineMdCloudAltTagsTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudAltTwotoneIcon],svg[line-md-cloud-alt-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCloudAltTwotone0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="0"></svg:set></svg:path><svg:g fill="#fff" stroke="none" opacity="0"><svg:circle cx="12" cy="10" r="6"></svg:circle><svg:rect width="9" height="8" x="8" y="12"></svg:rect><svg:rect width="15" height="12" x="1" y="8" rx="6"></svg:rect><svg:rect width="13" height="10" x="10" y="10" rx="5"></svg:rect><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="1"></svg:set></svg:g><svg:g fill="#000" fill-opacity="0" stroke="none"><svg:circle cx="12" cy="10" r="4"></svg:circle><svg:rect width="9" height="6" x="8" y="12"></svg:rect><svg:rect width="11" height="8" x="3" y="10" rx="4"></svg:rect><svg:rect width="9" height="6" x="12" y="12" rx="3"></svg:rect><svg:set fill="freeze" attributeName="fill-opacity" begin="0.7s" to="1"></svg:set><svg:animate fill="freeze" attributeName="opacity" begin="0.7s" dur="0.15s" values="1;0.7"></svg:animate></svg:g></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCloudAltTwotone0)"></svg:rect>`,
})
export class LineMdCloudAltTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudAltTwotoneLoopIcon],svg[line-md-cloud-alt-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCloudAltTwotoneLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="0"></svg:set></svg:path><svg:g fill="#fff" stroke="none" opacity="0"><svg:circle cx="12" cy="10" r="6"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="8" x="8" y="12"></svg:rect><svg:rect width="15" height="12" x="1" y="8" rx="6"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="1;0;1;2;1"></svg:animate></svg:rect><svg:rect width="13" height="10" x="10" y="10" rx="5"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="10;9;10;11;10"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="1"></svg:set></svg:g><svg:g fill="#000" fill-opacity="0" stroke="none"><svg:circle cx="12" cy="10" r="4"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="6" x="8" y="12"></svg:rect><svg:rect width="11" height="8" x="3" y="10" rx="4"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="3;2;3;4;3"></svg:animate></svg:rect><svg:rect width="9" height="6" x="12" y="12" rx="3"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="fill-opacity" begin="0.7s" to="1"></svg:set><svg:animate fill="freeze" attributeName="opacity" begin="0.7s" dur="0.15s" values="1;0.7"></svg:animate></svg:g></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCloudAltTwotoneLoop0)"></svg:rect>`,
})
export class LineMdCloudAltTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudAltUploadIcon],svg[line-md-cloud-alt-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:g fill="currentColor" stroke="none"><svg:path d="M10.5 16h3v0h-3z"><svg:animate fill="freeze" attributeName="d" begin="0.7s" dur="0.2s" values="M10.5 16h3v0h-3z;M10.5 16h3v-4h-3z"></svg:animate></svg:path><svg:path d="M8 13h8l-4 0z"><svg:animate fill="freeze" attributeName="d" begin="0.9s" dur="0.1s" values="M8 13h8l-4 0z;M8 13h8l-4 -4z"></svg:animate></svg:path></svg:g></svg:g>`,
})
export class LineMdCloudAltUploadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudAltUploadFilledIcon],svg[line-md-cloud-alt-upload-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCloudAltUploadFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="0"></svg:set></svg:path><svg:g fill="#fff" stroke="none" opacity="0"><svg:circle cx="12" cy="10" r="6"></svg:circle><svg:rect width="9" height="8" x="8" y="12"></svg:rect><svg:rect width="15" height="12" x="1" y="8" rx="6"></svg:rect><svg:rect width="13" height="10" x="10" y="10" rx="5"></svg:rect><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="1"></svg:set></svg:g><svg:g fill="#000" fill-opacity="0" stroke="none"><svg:circle cx="12" cy="10" r="4"></svg:circle><svg:rect width="9" height="6" x="8" y="12"></svg:rect><svg:rect width="11" height="8" x="3" y="10" rx="4"></svg:rect><svg:rect width="9" height="6" x="12" y="12" rx="3"></svg:rect><svg:set fill="freeze" attributeName="fill-opacity" begin="0.7s" to="1"></svg:set><svg:animate fill="freeze" attributeName="opacity" begin="0.7s" dur="0.5s" values="1;0"></svg:animate></svg:g><svg:g fill="#000" stroke="none"><svg:path d="M10 17h4v0h-4z"><svg:animate fill="freeze" attributeName="d" begin="1.3s" dur="0.2s" values="M10 17h4v0h-4z;M10 17h4v-5h-4z"></svg:animate></svg:path><svg:path d="M7 13h10l-5 0z"><svg:animate fill="freeze" attributeName="d" begin="1.5s" dur="0.1s" values="M7 13h10l-5 0z;M7 13h10l-5 -5z"></svg:animate></svg:path></svg:g></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCloudAltUploadFilled0)"></svg:rect>`,
})
export class LineMdCloudAltUploadFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudAltUploadFilledLoopIcon],svg[line-md-cloud-alt-upload-filled-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCloudAltUploadFilledLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="0"></svg:set></svg:path><svg:g fill="#fff" stroke="none" opacity="0"><svg:circle cx="12" cy="10" r="6"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="8" x="8" y="12"></svg:rect><svg:rect width="15" height="12" x="1" y="8" rx="6"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="1;0;1;2;1"></svg:animate></svg:rect><svg:rect width="13" height="10" x="10" y="10" rx="5"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="10;9;10;11;10"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="1"></svg:set></svg:g><svg:g fill="#000" fill-opacity="0" stroke="none"><svg:circle cx="12" cy="10" r="4"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="6" x="8" y="12"></svg:rect><svg:rect width="11" height="8" x="3" y="10" rx="4"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="3;2;3;4;3"></svg:animate></svg:rect><svg:rect width="9" height="6" x="12" y="12" rx="3"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="fill-opacity" begin="0.7s" to="1"></svg:set><svg:animate fill="freeze" attributeName="opacity" begin="0.7s" dur="0.5s" values="1;0"></svg:animate></svg:g><svg:g fill="#000" stroke="none"><svg:path d="M10 17h4v0h-4z"><svg:animate fill="freeze" attributeName="d" begin="1.3s" dur="0.2s" values="M10 17h4v0h-4z;M10 17h4v-5h-4z"></svg:animate></svg:path><svg:path d="M7 13h10l-5 0z"><svg:animate fill="freeze" attributeName="d" begin="1.5s" dur="0.1s" values="M7 13h10l-5 0z;M7 13h10l-5 -5z"></svg:animate><svg:animatemotion begin="1.6s" calcMode="linear" dur="1.5s" keyPoints="0;0.25;0.5;0.75;1" keyTimes="0;0.1;0.5;0.8;1" path="M0 0v-1v2z" repeatCount="indefinite"></svg:animatemotion></svg:path></svg:g></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCloudAltUploadFilledLoop0)"></svg:rect>`,
})
export class LineMdCloudAltUploadFilledLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudAltUploadLoopIcon],svg[line-md-cloud-alt-upload-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCloudAltUploadLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="0"></svg:set></svg:path><svg:g fill="#fff" stroke="none" opacity="0"><svg:circle cx="12" cy="10" r="6"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="8" x="8" y="12"></svg:rect><svg:rect width="15" height="12" x="1" y="8" rx="6"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="1;0;1;2;1"></svg:animate></svg:rect><svg:rect width="13" height="10" x="10" y="10" rx="5"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="10;9;10;11;10"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="1"></svg:set></svg:g><svg:g fill="#000" fill-opacity="0" stroke="none"><svg:circle cx="12" cy="10" r="4"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="6" x="8" y="12"></svg:rect><svg:rect width="11" height="8" x="3" y="10" rx="4"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="3;2;3;4;3"></svg:animate></svg:rect><svg:rect width="9" height="6" x="12" y="12" rx="3"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="fill-opacity" begin="0.7s" to="1"></svg:set></svg:g><svg:g fill="#fff" stroke="none"><svg:path d="M10.5 16h3v0h-3z"><svg:animate fill="freeze" attributeName="d" begin="0.7s" dur="0.2s" values="M10.5 16h3v0h-3z;M10.5 16h3v-4h-3z"></svg:animate></svg:path><svg:path d="M8 13h8l-4 0z"><svg:animate fill="freeze" attributeName="d" begin="0.9s" dur="0.1s" values="M8 13h8l-4 0z;M8 13h8l-4 -4z"></svg:animate><svg:animatemotion begin="1s" calcMode="linear" dur="1.5s" keyPoints="0;0.25;0.5;0.75;1" keyTimes="0;0.1;0.5;0.8;1" path="M0 0v-1v2z" repeatCount="indefinite"></svg:animatemotion></svg:path></svg:g></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCloudAltUploadLoop0)"></svg:rect>`,
})
export class LineMdCloudAltUploadLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudAltUploadTwotoneIcon],svg[line-md-cloud-alt-upload-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCloudAltUploadTwotone0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="0"></svg:set></svg:path><svg:g fill="#fff" stroke="none" opacity="0"><svg:circle cx="12" cy="10" r="6"></svg:circle><svg:rect width="9" height="8" x="8" y="12"></svg:rect><svg:rect width="15" height="12" x="1" y="8" rx="6"></svg:rect><svg:rect width="13" height="10" x="10" y="10" rx="5"></svg:rect><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="1"></svg:set></svg:g><svg:g fill="#000" fill-opacity="0" stroke="none"><svg:circle cx="12" cy="10" r="4"></svg:circle><svg:rect width="9" height="6" x="8" y="12"></svg:rect><svg:rect width="11" height="8" x="3" y="10" rx="4"></svg:rect><svg:rect width="9" height="6" x="12" y="12" rx="3"></svg:rect><svg:set fill="freeze" attributeName="fill-opacity" begin="0.7s" to="1"></svg:set><svg:animate fill="freeze" attributeName="opacity" begin="0.7s" dur="0.15s" values="1;0.7"></svg:animate></svg:g><svg:g fill="#fff" stroke="none"><svg:path d="M10.5 16h3v0h-3z"><svg:animate fill="freeze" attributeName="d" begin="0.95s" dur="0.2s" values="M10.5 16h3v0h-3z;M10.5 16h3v-4h-3z"></svg:animate></svg:path><svg:path d="M8 13h8l-4 0z"><svg:animate fill="freeze" attributeName="d" begin="1.15s" dur="0.1s" values="M8 13h8l-4 0z;M8 13h8l-4 -4z"></svg:animate></svg:path></svg:g></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCloudAltUploadTwotone0)"></svg:rect>`,
})
export class LineMdCloudAltUploadTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudAltUploadTwotoneLoopIcon],svg[line-md-cloud-alt-upload-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCloudAltUploadTwotoneLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M7 19h11c2.21 0 4 -1.79 4 -4c0 -2.21 -1.79 -4 -4 -4h-1v-1c0 -2.76 -2.24 -5 -5 -5c-2.42 0 -4.44 1.72 -4.9 4h-0.1c-2.76 0 -5 2.24 -5 5c0 2.76 2.24 5 5 5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="0"></svg:set></svg:path><svg:g fill="#fff" stroke="none" opacity="0"><svg:circle cx="12" cy="10" r="6"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="8" x="8" y="12"></svg:rect><svg:rect width="15" height="12" x="1" y="8" rx="6"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="1;0;1;2;1"></svg:animate></svg:rect><svg:rect width="13" height="10" x="10" y="10" rx="5"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="10;9;10;11;10"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="opacity" begin="0.7s" to="1"></svg:set></svg:g><svg:g fill="#000" fill-opacity="0" stroke="none"><svg:circle cx="12" cy="10" r="4"><svg:animate attributeName="cx" begin="0.7s" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="9" height="6" x="8" y="12"></svg:rect><svg:rect width="11" height="8" x="3" y="10" rx="4"><svg:animate attributeName="x" begin="0.7s" dur="21s" repeatCount="indefinite" values="3;2;3;4;3"></svg:animate></svg:rect><svg:rect width="9" height="6" x="12" y="12" rx="3"><svg:animate attributeName="x" begin="0.7s" dur="17s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:rect><svg:set fill="freeze" attributeName="fill-opacity" begin="0.7s" to="1"></svg:set><svg:animate fill="freeze" attributeName="opacity" begin="0.7s" dur="0.15s" values="1;0.7"></svg:animate></svg:g><svg:g fill="#fff" stroke="none"><svg:path d="M10.5 16h3v0h-3z"><svg:animate fill="freeze" attributeName="d" begin="0.95s" dur="0.2s" values="M10.5 16h3v0h-3z;M10.5 16h3v-4h-3z"></svg:animate></svg:path><svg:path d="M8 13h8l-4 0z"><svg:animate fill="freeze" attributeName="d" begin="1.15s" dur="0.1s" values="M8 13h8l-4 0z;M8 13h8l-4 -4z"></svg:animate><svg:animatemotion begin="1.25s" calcMode="linear" dur="1.5s" keyPoints="0;0.25;0.5;0.75;1" keyTimes="0;0.1;0.5;0.8;1" path="M0 0v-1v2z" repeatCount="indefinite"></svg:animatemotion></svg:path></svg:g></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCloudAltUploadTwotoneLoop0)"></svg:rect>`,
})
export class LineMdCloudAltUploadTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudDownIcon],svg[line-md-cloud-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M7 19h0c-2.5 0 -4 -2 -4 -4c0 -2 1.5 -4 4 -4c1 0 1.5 0.5 1.5 0.5M17 19h0c2.5 0 4 -2 4 -4c0 -2 -1.5 -4 -4 -4c-1 0 -1.5 0.5 -1.5 0.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="16;0"></svg:animate></svg:path><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M7 11v-1c0 -2.5 2 -5 5 -5M17 11v-1c0 -2.5 -2 -5 -5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.3s" values="16;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M12 15v6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M12 22l2 -2M12 22l-2 -2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="4;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdCloudDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudDownTwotoneIcon],svg[line-md-cloud-down-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M7 19c-2.5 0 -4 -2 -4 -4c0 -2 1.5 -4 4 -4c0 -3.5 2 -6 5 -6c3 0 5 2.5 5 5v1c2.5 0 4 2 4 4c0 2 -1.5 4 -4 4Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M7 19h0c-2.5 0 -4 -2 -4 -4c0 -2 1.5 -4 4 -4c1 0 1.5 0.5 1.5 0.5M17 19h0c2.5 0 4 -2 4 -4c0 -2 -1.5 -4 -4 -4c-1 0 -1.5 0.5 -1.5 0.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="16;0"></svg:animate></svg:path><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M7 11v-1c0 -2.5 2 -5 5 -5M17 11v-1c0 -2.5 -2 -5 -5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.3s" values="16;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M12 15v6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M12 22l2 -2M12 22l-2 -2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="4;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdCloudDownTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudFilledIcon],svg[line-md-cloud-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M7 19c-2.5 0 -4 -2 -4 -4c0 -2 1.5 -4 4 -4c0 -3.5 2 -6 5 -6c3 0 5 2.5 5 5v1c2.5 0 4 2 4 4c0 2 -1.5 4 -4 4Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.5s" values="0;1"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-dasharray="24" stroke-dashoffset="24" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 19h-5c-2.5 0 -4 -2 -4 -4c0 -2 1.5 -4 4 -4c1 0 1.5 0.5 1.5 0.5M12 19h5c2.5 0 4 -2 4 -4c0 -2 -1.5 -4 -4 -4c-1 0 -1.5 0.5 -1.5 0.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0"></svg:animate></svg:path><svg:path d="M7 11v-1c0 -2.5 2 -5 5 -5M17 11v-1c0 -2.5 -2 -5 -5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.3s" values="24;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdCloudFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudTwotoneIcon],svg[line-md-cloud-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M7 19c-2.5 0 -4 -2 -4 -4c0 -2 1.5 -4 4 -4c0 -3.5 2 -6 5 -6c3 0 5 2.5 5 5v1c2.5 0 4 2 4 4c0 2 -1.5 4 -4 4Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-dasharray="24" stroke-dashoffset="24" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 19h-5c-2.5 0 -4 -2 -4 -4c0 -2 1.5 -4 4 -4c1 0 1.5 0.5 1.5 0.5M12 19h5c2.5 0 4 -2 4 -4c0 -2 -1.5 -4 -4 -4c-1 0 -1.5 0.5 -1.5 0.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0"></svg:animate></svg:path><svg:path d="M7 11v-1c0 -2.5 2 -5 5 -5M17 11v-1c0 -2.5 -2 -5 -5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.3s" values="24;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdCloudTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudUpIcon],svg[line-md-cloud-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M8 19h-1c-2.5 0 -4 -2 -4 -4c0 -2 1.5 -4 4 -4c1 0 1.5 0.5 1.5 0.5M16 19h1c2.5 0 4 -2 4 -4c0 -2 -1.5 -4 -4 -4c-1 0 -1.5 0.5 -1.5 0.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M7 11v-1c0 -2.5 2 -5 5 -5M17 11v-1c0 -2.5 -2 -5 -5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.3s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M12 20v-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M12 13l2 2M12 13l-2 2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="4;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdCloudUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCloudUpTwotoneIcon],svg[line-md-cloud-up-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M7 19c-2.5 0 -4 -2 -4 -4c0 -2 1.5 -4 4 -4c0 -3.5 2 -6 5 -6c3 0 5 2.5 5 5v1c2.5 0 4 2 4 4c0 2 -1.5 4 -4 4Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M8 19h-1c-2.5 0 -4 -2 -4 -4c0 -2 1.5 -4 4 -4c1 0 1.5 0.5 1.5 0.5M16 19h1c2.5 0 4 -2 4 -4c0 -2 -1.5 -4 -4 -4c-1 0 -1.5 0.5 -1.5 0.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M7 11v-1c0 -2.5 2 -5 5 -5M17 11v-1c0 -2.5 -2 -5 -5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.3s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M12 20v-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M12 13l2 2M12 13l-2 2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="4;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdCloudUpTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCoffeeIcon],svg[line-md-coffee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="48" stroke-dashoffset="48" d="M17 4v9c0 1.66 -1.34 3 -3 3h-6c-1.66 0 -3 -1.34 -3 -3v-9Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.6s" values="48;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M17 4h3c0.55 0 1 0.45 1 1v3c0 0.55 -0.45 1 -1 1h-3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M11 20h8M11 20h-8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="10;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdCoffeeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCoffeeArrowIcon],svg[line-md-coffee-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="40" stroke-dashoffset="40" d="M14 4v7c0 1.66 -1.34 3 -3 3h-4c-1.66 0 -3 -1.34 -3 -3v-7Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="40;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M14 4h3c0.55 0 1 0.45 1 1v3c0 0.55 -0.45 1 -1 1h-3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M4 18h15.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M19.5 18l-3 -3M19.5 18l-3 3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdCoffeeArrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCoffeeArrowFilledIcon],svg[line-md-coffee-arrow-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="40" stroke-dashoffset="40" d="M14 4v7c0 1.66 -1.34 3 -3 3h-4c-1.66 0 -3 -1.34 -3 -3v-7Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="40;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M14 4h3c0.55 0 1 0.45 1 1v3c0 0.55 -0.45 1 -1 1h-3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M4 18h15.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M19.5 18l-3 -3M19.5 18l-3 3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdCoffeeArrowFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCoffeeArrowTwotoneIcon],svg[line-md-coffee-arrow-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="40" stroke-dashoffset="40" d="M14 4v7c0 1.66 -1.34 3 -3 3h-4c-1.66 0 -3 -1.34 -3 -3v-7Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="40;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M14 4h3c0.55 0 1 0.45 1 1v3c0 0.55 -0.45 1 -1 1h-3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M4 18h15.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M19.5 18l-3 -3M19.5 18l-3 3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdCoffeeArrowTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCoffeeFilledIcon],svg[line-md-coffee-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="48" stroke-dashoffset="48" d="M17 4v9c0 1.66 -1.34 3 -3 3h-6c-1.66 0 -3 -1.34 -3 -3v-9Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.6s" values="48;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M17 4h3c0.55 0 1 0.45 1 1v3c0 0.55 -0.45 1 -1 1h-3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M11 20h8M11 20h-8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="10;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdCoffeeFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCoffeeFilledLoopIcon],svg[line-md-coffee-filled-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="48" stroke-dashoffset="48" d="M17 9v9c0 1.66 -1.34 3 -3 3h-6c-1.66 0 -3 -1.34 -3 -3v-9Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M17 9h3c0.55 0 1 0.45 1 1v3c0 0.55 -0.45 1 -1 1h-3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:mask id="lineMdCoffeeFilledLoop0"><svg:path stroke="#fff" d="M8 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4M12 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4M16 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4"><svg:animatemotion calcMode="linear" dur="3s" path="M0 0v-8" repeatCount="indefinite"></svg:animatemotion></svg:path></svg:mask><svg:rect width="24" height="0" y="7" fill="currentColor" mask="url(#lineMdCoffeeFilledLoop0)"><svg:animate fill="freeze" attributeName="y" begin="0.8s" dur="0.6s" values="7;2"></svg:animate><svg:animate fill="freeze" attributeName="height" begin="0.8s" dur="0.6s" values="0;5"></svg:animate></svg:rect></svg:g>`,
})
export class LineMdCoffeeFilledLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCoffeeHalfEmptyFilledLoopIcon],svg[line-md-coffee-half-empty-filled-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M17 14v4c0 1.66 -1.34 3 -3 3h-6c-1.66 0 -3 -1.34 -3 -3v-4Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.5s" values="0;1"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="48" stroke-dashoffset="48" d="M17 9v9c0 1.66 -1.34 3 -3 3h-6c-1.66 0 -3 -1.34 -3 -3v-9Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M17 9h3c0.55 0 1 0.45 1 1v3c0 0.55 -0.45 1 -1 1h-3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:mask id="lineMdCoffeeHalfEmptyFilledLoop0"><svg:path stroke="#fff" d="M8 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4M12 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4M16 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4"><svg:animatemotion calcMode="linear" dur="3s" path="M0 0v-8" repeatCount="indefinite"></svg:animatemotion></svg:path></svg:mask><svg:rect width="24" height="0" y="7" fill="currentColor" mask="url(#lineMdCoffeeHalfEmptyFilledLoop0)"><svg:animate fill="freeze" attributeName="y" begin="0.8s" dur="0.6s" values="7;2"></svg:animate><svg:animate fill="freeze" attributeName="height" begin="0.8s" dur="0.6s" values="0;5"></svg:animate></svg:rect></svg:g>`,
})
export class LineMdCoffeeHalfEmptyFilledLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCoffeeHalfEmptyTwotoneLoopIcon],svg[line-md-coffee-half-empty-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M17 14v4c0 1.66 -1.34 3 -3 3h-6c-1.66 0 -3 -1.34 -3 -3v-4Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="48" stroke-dashoffset="48" d="M17 9v9c0 1.66 -1.34 3 -3 3h-6c-1.66 0 -3 -1.34 -3 -3v-9Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M17 9h3c0.55 0 1 0.45 1 1v3c0 0.55 -0.45 1 -1 1h-3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:mask id="lineMdCoffeeHalfEmptyTwotoneLoop0"><svg:path stroke="#fff" d="M8 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4M12 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4M16 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4"><svg:animatemotion calcMode="linear" dur="3s" path="M0 0v-8" repeatCount="indefinite"></svg:animatemotion></svg:path></svg:mask><svg:rect width="24" height="0" y="7" fill="currentColor" mask="url(#lineMdCoffeeHalfEmptyTwotoneLoop0)"><svg:animate fill="freeze" attributeName="y" begin="0.8s" dur="0.6s" values="7;2"></svg:animate><svg:animate fill="freeze" attributeName="height" begin="0.8s" dur="0.6s" values="0;5"></svg:animate></svg:rect></svg:g>`,
})
export class LineMdCoffeeHalfEmptyTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCoffeeLoopIcon],svg[line-md-coffee-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="48" stroke-dashoffset="48" d="M17 9v9c0 1.66 -1.34 3 -3 3h-6c-1.66 0 -3 -1.34 -3 -3v-9Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M17 9h3c0.55 0 1 0.45 1 1v3c0 0.55 -0.45 1 -1 1h-3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:mask id="lineMdCoffeeLoop0"><svg:path stroke="#fff" d="M8 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4M12 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4M16 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4"><svg:animatemotion calcMode="linear" dur="3s" path="M0 0v-8" repeatCount="indefinite"></svg:animatemotion></svg:path></svg:mask><svg:rect width="24" height="0" y="7" fill="currentColor" mask="url(#lineMdCoffeeLoop0)"><svg:animate fill="freeze" attributeName="y" begin="0.8s" dur="0.6s" values="7;2"></svg:animate><svg:animate fill="freeze" attributeName="height" begin="0.8s" dur="0.6s" values="0;5"></svg:animate></svg:rect></svg:g>`,
})
export class LineMdCoffeeLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCoffeeTwotoneIcon],svg[line-md-coffee-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="48" stroke-dashoffset="48" d="M17 4v9c0 1.66 -1.34 3 -3 3h-6c-1.66 0 -3 -1.34 -3 -3v-9Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.6s" values="48;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M17 4h3c0.55 0 1 0.45 1 1v3c0 0.55 -0.45 1 -1 1h-3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M11 20h8M11 20h-8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="10;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdCoffeeTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCoffeeTwotoneLoopIcon],svg[line-md-coffee-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="48" stroke-dashoffset="48" d="M17 9v9c0 1.66 -1.34 3 -3 3h-6c-1.66 0 -3 -1.34 -3 -3v-9Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M17 9h3c0.55 0 1 0.45 1 1v3c0 0.55 -0.45 1 -1 1h-3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:mask id="lineMdCoffeeTwotoneLoop0"><svg:path stroke="#fff" d="M8 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4M12 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4M16 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4"><svg:animatemotion calcMode="linear" dur="3s" path="M0 0v-8" repeatCount="indefinite"></svg:animatemotion></svg:path></svg:mask><svg:rect width="24" height="0" y="7" fill="currentColor" mask="url(#lineMdCoffeeTwotoneLoop0)"><svg:animate fill="freeze" attributeName="y" begin="0.8s" dur="0.6s" values="7;2"></svg:animate><svg:animate fill="freeze" attributeName="height" begin="0.8s" dur="0.6s" values="0;5"></svg:animate></svg:rect></svg:g>`,
})
export class LineMdCoffeeTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCogIcon],svg[line-md-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="lineMdCog0"><svg:path d="M15.24 6.37C15.65 6.6 16.04 6.88 16.38 7.2C16.6 7.4 16.8 7.61 16.99 7.83C17.46 8.4 17.85 9.05 18.11 9.77C18.2 10.03 18.28 10.31 18.35 10.59C18.45 11.04 18.5 11.52 18.5 12"><svg:animate fill="freeze" attributeName="d" begin="0.9s" dur="0.2s" values="M15.24 6.37C15.65 6.6 16.04 6.88 16.38 7.2C16.6 7.4 16.8 7.61 16.99 7.83C17.46 8.4 17.85 9.05 18.11 9.77C18.2 10.03 18.28 10.31 18.35 10.59C18.45 11.04 18.5 11.52 18.5 12;M15.24 6.37C15.65 6.6 16.04 6.88 16.38 7.2C16.38 7.2 19 6.12 19.01 6.14C19.01 6.14 20.57 8.84 20.57 8.84C20.58 8.87 18.35 10.59 18.35 10.59C18.45 11.04 18.5 11.52 18.5 12"></svg:animate></svg:path></svg:symbol></svg:defs><svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:g stroke-linecap="round"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M12 9c1.66 0 3 1.34 3 3c0 1.66 -1.34 3 -3 3c-1.66 0 -3 -1.34 -3 -3c0 -1.66 1.34 -3 3 -3Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="48" stroke-dashoffset="48" d="M12 5.5c3.59 0 6.5 2.91 6.5 6.5c0 3.59 -2.91 6.5 -6.5 6.5c-3.59 0 -6.5 -2.91 -6.5 -6.5c0 -3.59 2.91 -6.5 6.5 -6.5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.6s" values="48;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.9s" to="0"></svg:set></svg:path></svg:g><svg:g opacity="0"><svg:use href="#lineMdCog0"></svg:use><svg:use href="#lineMdCog0" transform="rotate(60 12 12)"></svg:use><svg:use href="#lineMdCog0" transform="rotate(120 12 12)"></svg:use><svg:use href="#lineMdCog0" transform="rotate(180 12 12)"></svg:use><svg:use href="#lineMdCog0" transform="rotate(240 12 12)"></svg:use><svg:use href="#lineMdCog0" transform="rotate(300 12 12)"></svg:use><svg:set fill="freeze" attributeName="opacity" begin="0.9s" to="1"></svg:set></svg:g></svg:g>`,
})
export class LineMdCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCogFilledIcon],svg[line-md-cog-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCogFilled0"><svg:defs><svg:symbol id="lineMdCogFilled1"><svg:path d="M11 13L15.74 5.5C16.03 5.67 16.31 5.85 16.57 6.05C16.57 6.05 16.57 6.05 16.57 6.05C16.64 6.1 16.71 6.16 16.77 6.22C18.14 7.34 19.09 8.94 19.4 10.75C19.41 10.84 19.42 10.92 19.43 11C19.43 11 19.43 11 19.43 11C19.48 11.33 19.5 11.66 19.5 12z"><svg:animate fill="freeze" attributeName="d" begin="0.5s" dur="0.2s" values="M11 13L15.74 5.5C16.03 5.67 16.31 5.85 16.57 6.05C16.57 6.05 16.57 6.05 16.57 6.05C16.64 6.1 16.71 6.16 16.77 6.22C18.14 7.34 19.09 8.94 19.4 10.75C19.41 10.84 19.42 10.92 19.43 11C19.43 11 19.43 11 19.43 11C19.48 11.33 19.5 11.66 19.5 12z;M11 13L15.74 5.5C16.03 5.67 16.31 5.85 16.57 6.05C16.57 6.05 19.09 5.04 19.09 5.04C19.25 4.98 19.52 5.01 19.6 5.17C19.6 5.17 21.67 8.75 21.67 8.75C21.77 8.92 21.73 9.2 21.6 9.32C21.6 9.32 19.43 11 19.43 11C19.48 11.33 19.5 11.66 19.5 12z"></svg:animate></svg:path></svg:symbol></svg:defs><svg:g fill="none" stroke="#fff" stroke-width="2"><svg:path stroke-dasharray="36" stroke-dashoffset="36" stroke-width="5" d="M12 7c2.76 0 5 2.24 5 5c0 2.76 -2.24 5 -5 5c-2.76 0 -5 -2.24 -5 -5c0 -2.76 2.24 -5 5 -5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="36;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.5s" to="0"></svg:set></svg:path><svg:g fill="#fff" stroke="none" opacity="0"><svg:use href="#lineMdCogFilled1"></svg:use><svg:use href="#lineMdCogFilled1" transform="rotate(60 12 12)"></svg:use><svg:use href="#lineMdCogFilled1" transform="rotate(120 12 12)"></svg:use><svg:use href="#lineMdCogFilled1" transform="rotate(180 12 12)"></svg:use><svg:use href="#lineMdCogFilled1" transform="rotate(240 12 12)"></svg:use><svg:use href="#lineMdCogFilled1" transform="rotate(300 12 12)"></svg:use><svg:set fill="freeze" attributeName="opacity" begin="0.5s" to="1"></svg:set></svg:g></svg:g><svg:circle cx="12" cy="12" r="3.5"></svg:circle></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCogFilled0)"></svg:rect>`,
})
export class LineMdCogFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCogFilledLoopIcon],svg[line-md-cog-filled-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCogFilledLoop0"><svg:defs><svg:symbol id="lineMdCogFilledLoop1"><svg:path d="M11 13L15.74 5.5C16.03 5.67 16.31 5.85 16.57 6.05C16.57 6.05 16.57 6.05 16.57 6.05C16.64 6.1 16.71 6.16 16.77 6.22C18.14 7.34 19.09 8.94 19.4 10.75C19.41 10.84 19.42 10.92 19.43 11C19.43 11 19.43 11 19.43 11C19.48 11.33 19.5 11.66 19.5 12z"><svg:animate fill="freeze" attributeName="d" begin="0.5s" dur="0.2s" values="M11 13L15.74 5.5C16.03 5.67 16.31 5.85 16.57 6.05C16.57 6.05 16.57 6.05 16.57 6.05C16.64 6.1 16.71 6.16 16.77 6.22C18.14 7.34 19.09 8.94 19.4 10.75C19.41 10.84 19.42 10.92 19.43 11C19.43 11 19.43 11 19.43 11C19.48 11.33 19.5 11.66 19.5 12z;M11 13L15.74 5.5C16.03 5.67 16.31 5.85 16.57 6.05C16.57 6.05 19.09 5.04 19.09 5.04C19.25 4.98 19.52 5.01 19.6 5.17C19.6 5.17 21.67 8.75 21.67 8.75C21.77 8.92 21.73 9.2 21.6 9.32C21.6 9.32 19.43 11 19.43 11C19.48 11.33 19.5 11.66 19.5 12z"></svg:animate></svg:path></svg:symbol></svg:defs><svg:g fill="none" stroke="#fff" stroke-width="2"><svg:path stroke-dasharray="36" stroke-dashoffset="36" stroke-width="5" d="M12 7c2.76 0 5 2.24 5 5c0 2.76 -2.24 5 -5 5c-2.76 0 -5 -2.24 -5 -5c0 -2.76 2.24 -5 5 -5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="36;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.5s" to="0"></svg:set></svg:path><svg:g fill="#fff" stroke="none" opacity="0"><svg:use href="#lineMdCogFilledLoop1"></svg:use><svg:use href="#lineMdCogFilledLoop1" transform="rotate(60 12 12)"></svg:use><svg:use href="#lineMdCogFilledLoop1" transform="rotate(120 12 12)"></svg:use><svg:use href="#lineMdCogFilledLoop1" transform="rotate(180 12 12)"></svg:use><svg:use href="#lineMdCogFilledLoop1" transform="rotate(240 12 12)"></svg:use><svg:use href="#lineMdCogFilledLoop1" transform="rotate(300 12 12)"></svg:use><svg:set fill="freeze" attributeName="opacity" begin="0.5s" to="1"></svg:set><svg:animatetransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></svg:animatetransform></svg:g></svg:g><svg:circle cx="12" cy="12" r="3.5"></svg:circle></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCogFilledLoop0)"></svg:rect>`,
})
export class LineMdCogFilledLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCogLoopIcon],svg[line-md-cog-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:symbol id="lineMdCogLoop0"><svg:path d="M15.24 6.37C15.65 6.6 16.04 6.88 16.38 7.2C16.6 7.4 16.8 7.61 16.99 7.83C17.46 8.4 17.85 9.05 18.11 9.77C18.2 10.03 18.28 10.31 18.35 10.59C18.45 11.04 18.5 11.52 18.5 12"><svg:animate fill="freeze" attributeName="d" begin="0.9s" dur="0.2s" values="M15.24 6.37C15.65 6.6 16.04 6.88 16.38 7.2C16.6 7.4 16.8 7.61 16.99 7.83C17.46 8.4 17.85 9.05 18.11 9.77C18.2 10.03 18.28 10.31 18.35 10.59C18.45 11.04 18.5 11.52 18.5 12;M15.24 6.37C15.65 6.6 16.04 6.88 16.38 7.2C16.38 7.2 19 6.12 19.01 6.14C19.01 6.14 20.57 8.84 20.57 8.84C20.58 8.87 18.35 10.59 18.35 10.59C18.45 11.04 18.5 11.52 18.5 12"></svg:animate></svg:path></svg:symbol></svg:defs><svg:g fill="none" stroke="currentColor" stroke-width="2"><svg:g stroke-linecap="round"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M12 9c1.66 0 3 1.34 3 3c0 1.66 -1.34 3 -3 3c-1.66 0 -3 -1.34 -3 -3c0 -1.66 1.34 -3 3 -3Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="48" stroke-dashoffset="48" d="M12 5.5c3.59 0 6.5 2.91 6.5 6.5c0 3.59 -2.91 6.5 -6.5 6.5c-3.59 0 -6.5 -2.91 -6.5 -6.5c0 -3.59 2.91 -6.5 6.5 -6.5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.6s" values="48;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.9s" to="0"></svg:set></svg:path></svg:g><svg:g opacity="0"><svg:use href="#lineMdCogLoop0"></svg:use><svg:use href="#lineMdCogLoop0" transform="rotate(60 12 12)"></svg:use><svg:use href="#lineMdCogLoop0" transform="rotate(120 12 12)"></svg:use><svg:use href="#lineMdCogLoop0" transform="rotate(180 12 12)"></svg:use><svg:use href="#lineMdCogLoop0" transform="rotate(240 12 12)"></svg:use><svg:use href="#lineMdCogLoop0" transform="rotate(300 12 12)"></svg:use><svg:set fill="freeze" attributeName="opacity" begin="0.9s" to="1"></svg:set><svg:animatetransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></svg:animatetransform></svg:g></svg:g>`,
})
export class LineMdCogLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCogOffIcon],svg[line-md-cog-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCogOff0"><svg:defs><svg:symbol id="lineMdCogOff1"><svg:path d="M15.24 6.37C15.65 6.6 16.04 6.88 16.38 7.2C16.6 7.4 16.8 7.61 16.99 7.83C17.46 8.4 17.85 9.05 18.11 9.77C18.2 10.03 18.28 10.31 18.35 10.59C18.45 11.04 18.5 11.52 18.5 12"><svg:animate fill="freeze" attributeName="d" begin="0.9s" dur="0.2s" values="M15.24 6.37C15.65 6.6 16.04 6.88 16.38 7.2C16.6 7.4 16.8 7.61 16.99 7.83C17.46 8.4 17.85 9.05 18.11 9.77C18.2 10.03 18.28 10.31 18.35 10.59C18.45 11.04 18.5 11.52 18.5 12;M15.24 6.37C15.65 6.6 16.04 6.88 16.38 7.2C16.38 7.2 19 6.12 19.01 6.14C19.01 6.14 20.57 8.84 20.57 8.84C20.58 8.87 18.35 10.59 18.35 10.59C18.45 11.04 18.5 11.52 18.5 12"></svg:animate></svg:path></svg:symbol></svg:defs><svg:g fill="none" stroke="#fff" stroke-width="2"><svg:g stroke-linecap="round"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M12 9c1.66 0 3 1.34 3 3c0 1.66 -1.34 3 -3 3c-1.66 0 -3 -1.34 -3 -3c0 -1.66 1.34 -3 3 -3Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="48" stroke-dashoffset="48" d="M12 5.5c3.59 0 6.5 2.91 6.5 6.5c0 3.59 -2.91 6.5 -6.5 6.5c-3.59 0 -6.5 -2.91 -6.5 -6.5c0 -3.59 2.91 -6.5 6.5 -6.5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.6s" values="48;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.9s" to="0"></svg:set></svg:path></svg:g><svg:g opacity="0"><svg:use href="#lineMdCogOff1"></svg:use><svg:use href="#lineMdCogOff1" transform="rotate(60 12 12)"></svg:use><svg:use href="#lineMdCogOff1" transform="rotate(120 12 12)"></svg:use><svg:use href="#lineMdCogOff1" transform="rotate(180 12 12)"></svg:use><svg:use href="#lineMdCogOff1" transform="rotate(240 12 12)"></svg:use><svg:use href="#lineMdCogOff1" transform="rotate(300 12 12)"></svg:use><svg:set fill="freeze" attributeName="opacity" begin="0.9s" to="1"></svg:set></svg:g></svg:g><svg:g fill="none" stroke="#fff" stroke-dasharray="28" stroke-dashoffset="28" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#000" d="M0 11h24" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path d="M0 13h24" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCogOff0)"></svg:rect>`,
})
export class LineMdCogOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCogOffFilledIcon],svg[line-md-cog-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCogOffFilled0"><svg:defs><svg:symbol id="lineMdCogOffFilled1"><svg:path d="M11 13L15.74 5.5C16.03 5.67 16.31 5.85 16.57 6.05C16.57 6.05 16.57 6.05 16.57 6.05C16.64 6.1 16.71 6.16 16.77 6.22C18.14 7.34 19.09 8.94 19.4 10.75C19.41 10.84 19.42 10.92 19.43 11C19.43 11 19.43 11 19.43 11C19.48 11.33 19.5 11.66 19.5 12z"><svg:animate fill="freeze" attributeName="d" begin="0.5s" dur="0.2s" values="M11 13L15.74 5.5C16.03 5.67 16.31 5.85 16.57 6.05C16.57 6.05 16.57 6.05 16.57 6.05C16.64 6.1 16.71 6.16 16.77 6.22C18.14 7.34 19.09 8.94 19.4 10.75C19.41 10.84 19.42 10.92 19.43 11C19.43 11 19.43 11 19.43 11C19.48 11.33 19.5 11.66 19.5 12z;M11 13L15.74 5.5C16.03 5.67 16.31 5.85 16.57 6.05C16.57 6.05 19.09 5.04 19.09 5.04C19.25 4.98 19.52 5.01 19.6 5.17C19.6 5.17 21.67 8.75 21.67 8.75C21.77 8.92 21.73 9.2 21.6 9.32C21.6 9.32 19.43 11 19.43 11C19.48 11.33 19.5 11.66 19.5 12z"></svg:animate></svg:path></svg:symbol></svg:defs><svg:g fill="none" stroke="#fff" stroke-width="2"><svg:path stroke-dasharray="36" stroke-dashoffset="36" stroke-width="5" d="M12 7c2.76 0 5 2.24 5 5c0 2.76 -2.24 5 -5 5c-2.76 0 -5 -2.24 -5 -5c0 -2.76 2.24 -5 5 -5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="36;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.5s" to="0"></svg:set></svg:path><svg:g fill="#fff" stroke="none" opacity="0"><svg:use href="#lineMdCogOffFilled1"></svg:use><svg:use href="#lineMdCogOffFilled1" transform="rotate(60 12 12)"></svg:use><svg:use href="#lineMdCogOffFilled1" transform="rotate(120 12 12)"></svg:use><svg:use href="#lineMdCogOffFilled1" transform="rotate(180 12 12)"></svg:use><svg:use href="#lineMdCogOffFilled1" transform="rotate(240 12 12)"></svg:use><svg:use href="#lineMdCogOffFilled1" transform="rotate(300 12 12)"></svg:use><svg:set fill="freeze" attributeName="opacity" begin="0.5s" to="1"></svg:set></svg:g></svg:g><svg:circle cx="12" cy="12" r="3.5"></svg:circle><svg:g fill="none" stroke="#fff" stroke-dasharray="28" stroke-dashoffset="28" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#000" d="M0 11h24" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path d="M0 13h24" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCogOffFilled0)"></svg:rect>`,
})
export class LineMdCogOffFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCogOffFilledLoopIcon],svg[line-md-cog-off-filled-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCogOffFilledLoop0"><svg:defs><svg:symbol id="lineMdCogOffFilledLoop1"><svg:path d="M11 13L15.74 5.5C16.03 5.67 16.31 5.85 16.57 6.05C16.57 6.05 16.57 6.05 16.57 6.05C16.64 6.1 16.71 6.16 16.77 6.22C18.14 7.34 19.09 8.94 19.4 10.75C19.41 10.84 19.42 10.92 19.43 11C19.43 11 19.43 11 19.43 11C19.48 11.33 19.5 11.66 19.5 12z"><svg:animate fill="freeze" attributeName="d" begin="0.5s" dur="0.2s" values="M11 13L15.74 5.5C16.03 5.67 16.31 5.85 16.57 6.05C16.57 6.05 16.57 6.05 16.57 6.05C16.64 6.1 16.71 6.16 16.77 6.22C18.14 7.34 19.09 8.94 19.4 10.75C19.41 10.84 19.42 10.92 19.43 11C19.43 11 19.43 11 19.43 11C19.48 11.33 19.5 11.66 19.5 12z;M11 13L15.74 5.5C16.03 5.67 16.31 5.85 16.57 6.05C16.57 6.05 19.09 5.04 19.09 5.04C19.25 4.98 19.52 5.01 19.6 5.17C19.6 5.17 21.67 8.75 21.67 8.75C21.77 8.92 21.73 9.2 21.6 9.32C21.6 9.32 19.43 11 19.43 11C19.48 11.33 19.5 11.66 19.5 12z"></svg:animate></svg:path></svg:symbol></svg:defs><svg:g fill="none" stroke="#fff" stroke-width="2"><svg:path stroke-dasharray="36" stroke-dashoffset="36" stroke-width="5" d="M12 7c2.76 0 5 2.24 5 5c0 2.76 -2.24 5 -5 5c-2.76 0 -5 -2.24 -5 -5c0 -2.76 2.24 -5 5 -5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="36;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.5s" to="0"></svg:set></svg:path><svg:g fill="#fff" stroke="none" opacity="0"><svg:use href="#lineMdCogOffFilledLoop1"></svg:use><svg:use href="#lineMdCogOffFilledLoop1" transform="rotate(60 12 12)"></svg:use><svg:use href="#lineMdCogOffFilledLoop1" transform="rotate(120 12 12)"></svg:use><svg:use href="#lineMdCogOffFilledLoop1" transform="rotate(180 12 12)"></svg:use><svg:use href="#lineMdCogOffFilledLoop1" transform="rotate(240 12 12)"></svg:use><svg:use href="#lineMdCogOffFilledLoop1" transform="rotate(300 12 12)"></svg:use><svg:set fill="freeze" attributeName="opacity" begin="0.5s" to="1"></svg:set><svg:animatetransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></svg:animatetransform></svg:g></svg:g><svg:circle cx="12" cy="12" r="3.5"></svg:circle><svg:g fill="none" stroke="#fff" stroke-dasharray="28" stroke-dashoffset="28" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#000" d="M0 11h24" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path d="M-1 13h24" transform="rotate(45 12 12)"><svg:animate attributeName="d" dur="6s" repeatCount="indefinite" values="M-1 13h24;M1 13h24;M-1 13h24"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCogOffFilledLoop0)"></svg:rect>`,
})
export class LineMdCogOffFilledLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCogOffLoopIcon],svg[line-md-cog-off-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCogOffLoop0"><svg:defs><svg:symbol id="lineMdCogOffLoop1"><svg:path d="M15.24 6.37C15.65 6.6 16.04 6.88 16.38 7.2C16.6 7.4 16.8 7.61 16.99 7.83C17.46 8.4 17.85 9.05 18.11 9.77C18.2 10.03 18.28 10.31 18.35 10.59C18.45 11.04 18.5 11.52 18.5 12"><svg:animate fill="freeze" attributeName="d" begin="0.9s" dur="0.2s" values="M15.24 6.37C15.65 6.6 16.04 6.88 16.38 7.2C16.6 7.4 16.8 7.61 16.99 7.83C17.46 8.4 17.85 9.05 18.11 9.77C18.2 10.03 18.28 10.31 18.35 10.59C18.45 11.04 18.5 11.52 18.5 12;M15.24 6.37C15.65 6.6 16.04 6.88 16.38 7.2C16.38 7.2 19 6.12 19.01 6.14C19.01 6.14 20.57 8.84 20.57 8.84C20.58 8.87 18.35 10.59 18.35 10.59C18.45 11.04 18.5 11.52 18.5 12"></svg:animate></svg:path></svg:symbol></svg:defs><svg:g fill="none" stroke="#fff" stroke-width="2"><svg:g stroke-linecap="round"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M12 9c1.66 0 3 1.34 3 3c0 1.66 -1.34 3 -3 3c-1.66 0 -3 -1.34 -3 -3c0 -1.66 1.34 -3 3 -3Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="48" stroke-dashoffset="48" d="M12 5.5c3.59 0 6.5 2.91 6.5 6.5c0 3.59 -2.91 6.5 -6.5 6.5c-3.59 0 -6.5 -2.91 -6.5 -6.5c0 -3.59 2.91 -6.5 6.5 -6.5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.6s" values="48;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.9s" to="0"></svg:set></svg:path></svg:g><svg:g opacity="0"><svg:use href="#lineMdCogOffLoop1"></svg:use><svg:use href="#lineMdCogOffLoop1" transform="rotate(60 12 12)"></svg:use><svg:use href="#lineMdCogOffLoop1" transform="rotate(120 12 12)"></svg:use><svg:use href="#lineMdCogOffLoop1" transform="rotate(180 12 12)"></svg:use><svg:use href="#lineMdCogOffLoop1" transform="rotate(240 12 12)"></svg:use><svg:use href="#lineMdCogOffLoop1" transform="rotate(300 12 12)"></svg:use><svg:set fill="freeze" attributeName="opacity" begin="0.9s" to="1"></svg:set><svg:animatetransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></svg:animatetransform></svg:g></svg:g><svg:g fill="none" stroke="#fff" stroke-dasharray="28" stroke-dashoffset="28" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#000" d="M0 11h24" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path d="M-1 13h24" transform="rotate(45 12 12)"><svg:animate attributeName="d" dur="6s" repeatCount="indefinite" values="M-1 13h24;M1 13h24;M-1 13h24"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCogOffLoop0)"></svg:rect>`,
})
export class LineMdCogOffLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCompassIcon],svg[line-md-compass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCompass0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path fill="#fff" stroke="none" d="M11 11L12 12L13 13L12 12z" transform="rotate(-180 12 12)"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.3s" values="M11 11L12 12L13 13L12 12z;M10.2 10.2L17 7L13.8 13.8L7 17z"></svg:animate><svg:animatetransform fill="freeze" attributeName="transform" begin="0.6s" dur="0.5s" type="rotate" values="-180 12 12;0 12 12"></svg:animatetransform></svg:path><svg:circle cx="12" cy="12" r="1" fill="#000" fill-opacity="0" stroke="none"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.15s" values="0;1"></svg:animate></svg:circle></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCompass0)"></svg:rect>`,
})
export class LineMdCompassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCompassFilledIcon],svg[line-md-compass-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCompassFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path fill="#000" stroke="none" d="M11 11L12 12L13 13L12 12z" transform="rotate(-180 12 12)"><svg:animate fill="freeze" attributeName="d" begin="1.1s" dur="0.3s" values="M11 11L12 12L13 13L12 12z;M10.2 10.2L17 7L13.8 13.8L7 17z"></svg:animate><svg:animatetransform fill="freeze" attributeName="transform" begin="1.1s" dur="0.5s" type="rotate" values="-180 12 12;0 12 12"></svg:animatetransform></svg:path><svg:circle cx="12" cy="12" r="1" fill="#fff" fill-opacity="0" stroke="none"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.4s" dur="0.5s" values="0;1"></svg:animate></svg:circle></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCompassFilled0)"></svg:rect>`,
})
export class LineMdCompassFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCompassFilledLoopIcon],svg[line-md-compass-filled-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCompassFilledLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path fill="#000" stroke="none" d="M11 11L12 12L13 13L12 12z" transform="rotate(-180 12 12)"><svg:animate fill="freeze" attributeName="d" begin="1.1s" dur="0.3s" values="M11 11L12 12L13 13L12 12z;M10.2 10.2L17 7L13.8 13.8L7 17z"></svg:animate><svg:animatetransform attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="-180 12 12;0 12 12;0 12 12;0 12 12;0 12 12;270 12 12;-90 12 12;0 12 12;-180 12 12;-35 12 12;-40 12 12;-45 12 12;-45 12 12;-110 12 12;-135 12 12;-180 12 12"></svg:animatetransform></svg:path><svg:circle cx="12" cy="12" r="1" fill="#fff" fill-opacity="0" stroke="none"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.4s" dur="0.5s" values="0;1"></svg:animate></svg:circle></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCompassFilledLoop0)"></svg:rect>`,
})
export class LineMdCompassFilledLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCompassLoopIcon],svg[line-md-compass-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCompassLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path fill="#fff" stroke="none" d="M11 11L12 12L13 13L12 12z" transform="rotate(-180 12 12)"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.3s" values="M11 11L12 12L13 13L12 12z;M10.2 10.2L17 7L13.8 13.8L7 17z"></svg:animate><svg:animatetransform attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="-180 12 12;0 12 12;0 12 12;0 12 12;0 12 12;270 12 12;-90 12 12;0 12 12;-180 12 12;-35 12 12;-40 12 12;-45 12 12;-45 12 12;-110 12 12;-135 12 12;-180 12 12"></svg:animatetransform></svg:path><svg:circle cx="12" cy="12" r="1" fill="#000" fill-opacity="0" stroke="none"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.15s" values="0;1"></svg:animate></svg:circle></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCompassLoop0)"></svg:rect>`,
})
export class LineMdCompassLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCompassOffIcon],svg[line-md-compass-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCompassOff0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path fill="#fff" stroke="none" d="M11 11L12 12L13 13L12 12z" transform="rotate(-180 12 12)"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.3s" values="M11 11L12 12L13 13L12 12z;M10.2 10.2L17 7L13.8 13.8L7 17z"></svg:animate><svg:animatetransform fill="freeze" attributeName="transform" begin="0.6s" dur="0.5s" type="rotate" values="-180 12 12;0 12 12"></svg:animatetransform></svg:path><svg:circle cx="12" cy="12" r="1" fill="#000" fill-opacity="0" stroke="none"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.15s" values="0;1"></svg:animate></svg:circle><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.05s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-1 13h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.05s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCompassOff0)"></svg:rect>`,
})
export class LineMdCompassOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCompassOffFilledIcon],svg[line-md-compass-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCompassOffFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path fill="#000" stroke="none" d="M11 11L12 12L13 13L12 12z" transform="rotate(-180 12 12)"><svg:animate fill="freeze" attributeName="d" begin="1.1s" dur="0.3s" values="M11 11L12 12L13 13L12 12z;M10.2 10.2L17 7L13.8 13.8L7 17z"></svg:animate><svg:animatetransform fill="freeze" attributeName="transform" begin="1.1s" dur="0.5s" type="rotate" values="-180 12 12;0 12 12"></svg:animatetransform></svg:path><svg:circle cx="12" cy="12" r="1" fill="#fff" fill-opacity="0" stroke="none"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.4s" dur="0.5s" values="0;1"></svg:animate></svg:circle><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.9s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-1 13h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.9s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCompassOffFilled0)"></svg:rect>`,
})
export class LineMdCompassOffFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCompassOffFilledLoopIcon],svg[line-md-compass-off-filled-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCompassOffFilledLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path fill="#000" stroke="none" d="M11 11L12 12L13 13L12 12z" transform="rotate(-180 12 12)"><svg:animate fill="freeze" attributeName="d" begin="1.1s" dur="0.3s" values="M11 11L12 12L13 13L12 12z;M10.2 10.2L17 7L13.8 13.8L7 17z"></svg:animate><svg:animatetransform attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="-180 12 12;0 12 12;0 12 12;0 12 12;0 12 12;270 12 12;-90 12 12;0 12 12;-180 12 12;-35 12 12;-40 12 12;-45 12 12;-45 12 12;-110 12 12;-135 12 12;-180 12 12"></svg:animatetransform></svg:path><svg:circle cx="12" cy="12" r="1" fill="#fff" fill-opacity="0" stroke="none"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.4s" dur="0.5s" values="0;1"></svg:animate></svg:circle><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.9s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-1 13h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.9s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCompassOffFilledLoop0)"></svg:rect>`,
})
export class LineMdCompassOffFilledLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCompassOffLoopIcon],svg[line-md-compass-off-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCompassOffLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path fill="#fff" stroke="none" d="M11 11L12 12L13 13L12 12z" transform="rotate(-180 12 12)"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.3s" values="M11 11L12 12L13 13L12 12z;M10.2 10.2L17 7L13.8 13.8L7 17z"></svg:animate><svg:animatetransform attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="-180 12 12;0 12 12;0 12 12;0 12 12;0 12 12;270 12 12;-90 12 12;0 12 12;-180 12 12;-35 12 12;-40 12 12;-45 12 12;-45 12 12;-110 12 12;-135 12 12;-180 12 12"></svg:animatetransform></svg:path><svg:circle cx="12" cy="12" r="1" fill="#000" fill-opacity="0" stroke="none"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.15s" values="0;1"></svg:animate></svg:circle><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.05s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-1 13h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.05s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCompassOffLoop0)"></svg:rect>`,
})
export class LineMdCompassOffLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCompassOffTwotoneIcon],svg[line-md-compass-off-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCompassOffTwotone0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path fill="#fff" stroke="none" d="M11 11L12 12L13 13L12 12z" transform="rotate(-180 12 12)"><svg:animate fill="freeze" attributeName="d" begin="0.75s" dur="0.3s" values="M11 11L12 12L13 13L12 12z;M10.2 10.2L17 7L13.8 13.8L7 17z"></svg:animate><svg:animatetransform fill="freeze" attributeName="transform" begin="0.75s" dur="0.5s" type="rotate" values="-180 12 12;0 12 12"></svg:animatetransform></svg:path><svg:circle cx="12" cy="12" r="1" fill="#000" fill-opacity="0" stroke="none"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.05s" dur="0.15s" values="0;1"></svg:animate></svg:circle><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-1 13h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCompassOffTwotone0)"></svg:rect>`,
})
export class LineMdCompassOffTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCompassOffTwotoneLoopIcon],svg[line-md-compass-off-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCompassOffTwotoneLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path fill="#fff" stroke="none" d="M11 11L12 12L13 13L12 12z" transform="rotate(-180 12 12)"><svg:animate fill="freeze" attributeName="d" begin="0.75s" dur="0.3s" values="M11 11L12 12L13 13L12 12z;M10.2 10.2L17 7L13.8 13.8L7 17z"></svg:animate><svg:animatetransform attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="-180 12 12;0 12 12;0 12 12;0 12 12;0 12 12;270 12 12;-90 12 12;0 12 12;-180 12 12;-35 12 12;-40 12 12;-45 12 12;-45 12 12;-110 12 12;-135 12 12;-180 12 12"></svg:animatetransform></svg:path><svg:circle cx="12" cy="12" r="1" fill="#000" fill-opacity="0" stroke="none"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.05s" dur="0.15s" values="0;1"></svg:animate></svg:circle><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-1 13h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCompassOffTwotoneLoop0)"></svg:rect>`,
})
export class LineMdCompassOffTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCompassTwotoneIcon],svg[line-md-compass-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCompassTwotone0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path fill="#fff" stroke="none" d="M11 11L12 12L13 13L12 12z" transform="rotate(-180 12 12)"><svg:animate fill="freeze" attributeName="d" begin="0.75s" dur="0.3s" values="M11 11L12 12L13 13L12 12z;M10.2 10.2L17 7L13.8 13.8L7 17z"></svg:animate><svg:animatetransform fill="freeze" attributeName="transform" begin="0.75s" dur="0.5s" type="rotate" values="-180 12 12;0 12 12"></svg:animatetransform></svg:path><svg:circle cx="12" cy="12" r="1" fill="#000" fill-opacity="0" stroke="none"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.05s" dur="0.15s" values="0;1"></svg:animate></svg:circle></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCompassTwotone0)"></svg:rect>`,
})
export class LineMdCompassTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCompassTwotoneLoopIcon],svg[line-md-compass-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCompassTwotoneLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path fill="#fff" stroke="none" d="M11 11L12 12L13 13L12 12z" transform="rotate(-180 12 12)"><svg:animate fill="freeze" attributeName="d" begin="0.75s" dur="0.3s" values="M11 11L12 12L13 13L12 12z;M10.2 10.2L17 7L13.8 13.8L7 17z"></svg:animate><svg:animatetransform attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="-180 12 12;0 12 12;0 12 12;0 12 12;0 12 12;270 12 12;-90 12 12;0 12 12;-180 12 12;-35 12 12;-40 12 12;-45 12 12;-45 12 12;-110 12 12;-135 12 12;-180 12 12"></svg:animatetransform></svg:path><svg:circle cx="12" cy="12" r="1" fill="#000" fill-opacity="0" stroke="none"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.05s" dur="0.15s" values="0;1"></svg:animate></svg:circle></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCompassTwotoneLoop0)"></svg:rect>`,
})
export class LineMdCompassTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdComputerIcon],svg[line-md-computer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M12 21h5M12 21h-5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M12 21v-4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 17h-9v-12h18v12Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.6s" values="64;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdComputerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdComputerTwotoneIcon],svg[line-md-computer-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M12 21h5M12 21h-5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M12 21v-4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="6;0"></svg:animate></svg:path><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 17h-9v-12h18v12Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.6s" values="64;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdComputerTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdConfirmIcon],svg[line-md-confirm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-dasharray="24" stroke-dashoffset="24" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11l6 6l10 -10"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0"></svg:animate></svg:path>`,
})
export class LineMdConfirmIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdConfirmCircleIcon],svg[line-md-confirm-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M3 12c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M8 12l3 3l5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdConfirmCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdConfirmCircleFilledIcon],svg[line-md-confirm-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdConfirmCircleFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M3 12c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="14" stroke-dashoffset="14" d="M8 12l3 3l5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="14;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdConfirmCircleFilled0)"></svg:rect>`,
})
export class LineMdConfirmCircleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdConfirmCircleFilledToCircleFilledTransitionIcon],svg[line-md-confirm-circle-filled-to-circle-filled-transition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdConfirmCircleFilledToCircleFilledTransition0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" d="M3 12c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9Z"></svg:path><svg:path stroke="#000" stroke-dasharray="14" d="M8 12l3 3l5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="0;14"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdConfirmCircleFilledToCircleFilledTransition0)"></svg:rect>`,
})
export class LineMdConfirmCircleFilledToCircleFilledTransitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdConfirmCircleToCircleTransitionIcon],svg[line-md-confirm-circle-to-circle-transition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M3 12c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9Z"></svg:path><svg:path stroke-dasharray="14" d="M8 12l3 3l5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="0;14"></svg:animate></svg:path></svg:g>`,
})
export class LineMdConfirmCircleToCircleTransitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdConfirmCircleToCircleTwotoneTransitionIcon],svg[line-md-confirm-circle-to-circle-twotone-transition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" d="M3 12c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9Z"><svg:animate fill="freeze" attributeName="fill-opacity" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:path stroke-dasharray="14" d="M8 12l3 3l5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.15s" dur="0.2s" values="0;14"></svg:animate></svg:path></svg:g>`,
})
export class LineMdConfirmCircleToCircleTwotoneTransitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdConfirmCircleTwotoneIcon],svg[line-md-confirm-circle-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M3 12c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M8 12l3 3l5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.75s" dur="0.2s" values="14;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdConfirmCircleTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdConfirmCircleTwotoneToCircleTransitionIcon],svg[line-md-confirm-circle-twotone-to-circle-transition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity=".3" d="M3 12c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9Z"><svg:animate fill="freeze" attributeName="fill-opacity" dur="0.15s" values="0.3;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" d="M8 12l3 3l5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.15s" dur="0.2s" values="0;14"></svg:animate></svg:path></svg:g>`,
})
export class LineMdConfirmCircleTwotoneToCircleTransitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdConfirmCircleTwotoneToCircleTwotoneTransitionIcon],svg[line-md-confirm-circle-twotone-to-circle-twotone-transition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity=".3" d="M3 12c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9Z"></svg:path><svg:path stroke-dasharray="14" d="M8 12l3 3l5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="0;14"></svg:animate></svg:path></svg:g>`,
})
export class LineMdConfirmCircleTwotoneToCircleTwotoneTransitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdConfirmSquareIcon],svg[line-md-confirm-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M4 12v-7c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M8 12l3 3l5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdConfirmSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdConfirmSquareFilledIcon],svg[line-md-confirm-square-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdConfirmSquareFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M4 12v-7c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="14" stroke-dashoffset="14" d="M8 12l3 3l5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="14;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdConfirmSquareFilled0)"></svg:rect>`,
})
export class LineMdConfirmSquareFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdConfirmSquareFilledToSquareFilledTransitionIcon],svg[line-md-confirm-square-filled-to-square-filled-transition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdConfirmSquareFilledToSquareFilledTransition0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" d="M4 12v-7c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1Z"></svg:path><svg:path stroke="#000" stroke-dasharray="14" d="M8 12l3 3l5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="0;14"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdConfirmSquareFilledToSquareFilledTransition0)"></svg:rect>`,
})
export class LineMdConfirmSquareFilledToSquareFilledTransitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdConfirmSquareToSquareTransitionIcon],svg[line-md-confirm-square-to-square-transition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M4 12v-7c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1Z"></svg:path><svg:path stroke-dasharray="14" d="M8 12l3 3l5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="0;14"></svg:animate></svg:path></svg:g>`,
})
export class LineMdConfirmSquareToSquareTransitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdConfirmSquareToSquareTwotoneTransitionIcon],svg[line-md-confirm-square-to-square-twotone-transition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" d="M4 12v-7c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:path stroke-dasharray="14" d="M8 12l3 3l5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.15s" dur="0.2s" values="0;14"></svg:animate></svg:path></svg:g>`,
})
export class LineMdConfirmSquareToSquareTwotoneTransitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdConfirmSquareTwotoneIcon],svg[line-md-confirm-square-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M4 12v-7c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M8 12l3 3l5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.75s" dur="0.2s" values="14;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdConfirmSquareTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdConfirmSquareTwotoneToSquareTransitionIcon],svg[line-md-confirm-square-twotone-to-square-transition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity=".3" d="M4 12v-7c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" dur="0.15s" values="0.3;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" d="M8 12l3 3l5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.15s" dur="0.2s" values="0;14"></svg:animate></svg:path></svg:g>`,
})
export class LineMdConfirmSquareTwotoneToSquareTransitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdConfirmSquareTwotoneToSquareTwotoneTransitionIcon],svg[line-md-confirm-square-twotone-to-square-twotone-transition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity=".3" d="M4 12v-7c0 -0.55 0.45 -1 1 -1h14c0.55 0 1 0.45 1 1v14c0 0.55 -0.45 1 -1 1h-14c-0.55 0 -1 -0.45 -1 -1Z"></svg:path><svg:path stroke-dasharray="14" d="M8 12l3 3l5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="0;14"></svg:animate></svg:path></svg:g>`,
})
export class LineMdConfirmSquareTwotoneToSquareTwotoneTransitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdConstructionIcon],svg[line-md-construction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="48" stroke-dashoffset="48" d="M21 21h-18v-2c0 -1 1 -2 2 -2h14c1 0 2 1 2 2v2Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M6 17l6 -15M18 17l-6 -15"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" stroke-width="1" d="M8 12l4.5 -2.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" stroke-width="1" d="M6 16l7.5 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" stroke-width="1" d="M9.5 17l5 -2.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdConstructionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdConstructionTwotoneIcon],svg[line-md-construction-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="48" stroke-dashoffset="48" d="M21 21h-18v-2c0 -1 1 -2 2 -2h14c1 0 2 1 2 2v2Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.8s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"></svg:animate></svg:path><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M6 17l6 -15M18 17l-6 -15"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" stroke-width="1" d="M8 12l4.5 -2.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" stroke-width="1" d="M6 16l7.5 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" stroke-width="1" d="M9.5 17l5 -2.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdConstructionTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCookieIcon],svg[line-md-cookie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="56" stroke-dashoffset="56" d="M12 4c-4.42 0 -8 3.58 -8 8c0 4.42 3.58 8 8 8c4.42 0 8 -3.58 8 -8v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-1c-0.55 0 -1 -0.45 -1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:g fill="currentColor" fill-opacity="0" stroke="none"><svg:circle cx="9.5" cy="7.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11" cy="17.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="6.5" cy="11.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="16.5" cy="14.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11.5" cy="12.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.2s" values="0;1"></svg:animate></svg:circle></svg:g></svg:g>`,
})
export class LineMdCookieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCookieCheckIcon],svg[line-md-cookie-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCookieCheck0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="56" stroke-dashoffset="56" d="M12 4c-4.42 0 -8 3.58 -8 8c0 4.42 3.58 8 8 8c4.42 0 8 -3.58 8 -8v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-1c-0.55 0 -1 -0.45 -1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:g fill="#fff" fill-opacity="0" stroke="none"><svg:circle cx="9.5" cy="7.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11" cy="17.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="6.5" cy="11.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="16.5" cy="14.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11.5" cy="12.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.2s" values="0;1"></svg:animate></svg:circle></svg:g><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="1.4s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M16 19l1.75 1.75l3.75 -3.75"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" values="10;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCookieCheck0)"></svg:rect>`,
})
export class LineMdCookieCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCookieCheckFilledIcon],svg[line-md-cookie-check-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCookieCheckFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="56" stroke-dashoffset="56" d="M12 4c-4.42 0 -8 3.58 -8 8c0 4.42 3.58 8 8 8c4.42 0 8 -3.58 8 -8v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-1c-0.55 0 -1 -0.45 -1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:g fill="#000" fill-opacity="0" stroke="none"><svg:circle cx="9.5" cy="7.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11" cy="17.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="6.5" cy="11.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.4s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="16.5" cy="14.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.5s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11.5" cy="12.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.6s" dur="0.2s" values="0;1"></svg:animate></svg:circle></svg:g><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="1.9s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M16 19l1.75 1.75l3.75 -3.75"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.9s" dur="0.2s" values="10;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCookieCheckFilled0)"></svg:rect>`,
})
export class LineMdCookieCheckFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCookieCheckTwotoneIcon],svg[line-md-cookie-check-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCookieCheckTwotone0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="56" stroke-dashoffset="56" d="M12 4c-4.42 0 -8 3.58 -8 8c0 4.42 3.58 8 8 8c4.42 0 8 -3.58 8 -8v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-1c-0.55 0 -1 -0.45 -1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:g fill="#fff" fill-opacity="0" stroke="none"><svg:circle cx="9.5" cy="7.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11" cy="17.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="6.5" cy="11.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="16.5" cy="14.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11.5" cy="12.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.2s" values="0;1"></svg:animate></svg:circle></svg:g><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="1.6s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M16 19l1.75 1.75l3.75 -3.75"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.2s" values="10;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCookieCheckTwotone0)"></svg:rect>`,
})
export class LineMdCookieCheckTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCookieFilledIcon],svg[line-md-cookie-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCookieFilled0"><svg:g fill="none" fill-opacity="0" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" stroke-dasharray="56" stroke-dashoffset="56" d="M12 4c-4.42 0 -8 3.58 -8 8c0 4.42 3.58 8 8 8c4.42 0 8 -3.58 8 -8v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-1c-0.55 0 -1 -0.45 -1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:g fill="#000" stroke="none"><svg:circle cx="9.5" cy="7.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11" cy="17.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="6.5" cy="11.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.4s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="16.5" cy="14.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.5s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11.5" cy="12.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.6s" dur="0.2s" values="0;1"></svg:animate></svg:circle></svg:g></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCookieFilled0)"></svg:rect>`,
})
export class LineMdCookieFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCookieMinusIcon],svg[line-md-cookie-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCookieMinus0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="56" stroke-dashoffset="56" d="M12 4c-4.42 0 -8 3.58 -8 8c0 4.42 3.58 8 8 8c4.42 0 8 -3.58 8 -8v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-1c-0.55 0 -1 -0.45 -1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:g fill="#fff" fill-opacity="0" stroke="none"><svg:circle cx="9.5" cy="7.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11" cy="17.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="6.5" cy="11.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="16.5" cy="14.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11.5" cy="12.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.2s" values="0;1"></svg:animate></svg:circle></svg:g><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="1.4s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M16 19h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCookieMinus0)"></svg:rect>`,
})
export class LineMdCookieMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCookieMinusFilledIcon],svg[line-md-cookie-minus-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCookieMinusFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="56" stroke-dashoffset="56" d="M12 4c-4.42 0 -8 3.58 -8 8c0 4.42 3.58 8 8 8c4.42 0 8 -3.58 8 -8v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-1c-0.55 0 -1 -0.45 -1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:g fill="#000" fill-opacity="0" stroke="none"><svg:circle cx="9.5" cy="7.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11" cy="17.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="6.5" cy="11.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.4s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="16.5" cy="14.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.5s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11.5" cy="12.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.6s" dur="0.2s" values="0;1"></svg:animate></svg:circle></svg:g><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="1.9s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M16 19h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.9s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCookieMinusFilled0)"></svg:rect>`,
})
export class LineMdCookieMinusFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCookieMinusTwotoneIcon],svg[line-md-cookie-minus-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCookieMinusTwotone0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="56" stroke-dashoffset="56" d="M12 4c-4.42 0 -8 3.58 -8 8c0 4.42 3.58 8 8 8c4.42 0 8 -3.58 8 -8v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-1c-0.55 0 -1 -0.45 -1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:g fill="#fff" fill-opacity="0" stroke="none"><svg:circle cx="9.5" cy="7.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11" cy="17.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="6.5" cy="11.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="16.5" cy="14.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11.5" cy="12.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.2s" values="0;1"></svg:animate></svg:circle></svg:g><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="1.6s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M16 19h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCookieMinusTwotone0)"></svg:rect>`,
})
export class LineMdCookieMinusTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCookieOffIcon],svg[line-md-cookie-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCookieOff0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="56" stroke-dashoffset="56" d="M12 4c-4.42 0 -8 3.58 -8 8c0 4.42 3.58 8 8 8c4.42 0 8 -3.58 8 -8v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-1c-0.55 0 -1 -0.45 -1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:g fill="#fff" fill-opacity="0" stroke="none"><svg:circle cx="9.5" cy="7.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11" cy="17.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="6.5" cy="11.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="16.5" cy="14.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11.5" cy="12.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.2s" values="0;1"></svg:animate></svg:circle></svg:g><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-1 13h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCookieOff0)"></svg:rect>`,
})
export class LineMdCookieOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCookieOffFilledIcon],svg[line-md-cookie-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCookieOffFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="56" stroke-dashoffset="56" d="M12 4c-4.42 0 -8 3.58 -8 8c0 4.42 3.58 8 8 8c4.42 0 8 -3.58 8 -8v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-1c-0.55 0 -1 -0.45 -1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:g fill="#000" fill-opacity="0" stroke="none"><svg:circle cx="9.5" cy="7.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11" cy="17.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="6.5" cy="11.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.4s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="16.5" cy="14.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.5s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11.5" cy="12.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.6s" dur="0.2s" values="0;1"></svg:animate></svg:circle></svg:g><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.9s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-1 13h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.9s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCookieOffFilled0)"></svg:rect>`,
})
export class LineMdCookieOffFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCookieOffTwotoneIcon],svg[line-md-cookie-off-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCookieOffTwotone0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="56" stroke-dashoffset="56" d="M12 4c-4.42 0 -8 3.58 -8 8c0 4.42 3.58 8 8 8c4.42 0 8 -3.58 8 -8v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-1c-0.55 0 -1 -0.45 -1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:g fill="#fff" fill-opacity="0" stroke="none"><svg:circle cx="9.5" cy="7.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11" cy="17.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="6.5" cy="11.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="16.5" cy="14.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11.5" cy="12.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.2s" values="0;1"></svg:animate></svg:circle></svg:g><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-1 13h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCookieOffTwotone0)"></svg:rect>`,
})
export class LineMdCookieOffTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCookiePlusIcon],svg[line-md-cookie-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCookiePlus0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="56" stroke-dashoffset="56" d="M12 4c-4.42 0 -8 3.58 -8 8c0 4.42 3.58 8 8 8c4.42 0 8 -3.58 8 -8v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-1c-0.55 0 -1 -0.45 -1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:g fill="#fff" fill-opacity="0" stroke="none"><svg:circle cx="9.5" cy="7.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11" cy="17.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="6.5" cy="11.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="16.5" cy="14.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11.5" cy="12.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.2s" values="0;1"></svg:animate></svg:circle></svg:g><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="1.4s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M16 19h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M19 16v6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCookiePlus0)"></svg:rect>`,
})
export class LineMdCookiePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCookiePlusFilledIcon],svg[line-md-cookie-plus-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCookiePlusFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="56" stroke-dashoffset="56" d="M12 4c-4.42 0 -8 3.58 -8 8c0 4.42 3.58 8 8 8c4.42 0 8 -3.58 8 -8v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-1c-0.55 0 -1 -0.45 -1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:g fill="#000" fill-opacity="0" stroke="none"><svg:circle cx="9.5" cy="7.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11" cy="17.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="6.5" cy="11.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.4s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="16.5" cy="14.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.5s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11.5" cy="12.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.6s" dur="0.2s" values="0;1"></svg:animate></svg:circle></svg:g><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="1.9s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M16 19h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.9s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M19 16v6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="2.1s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCookiePlusFilled0)"></svg:rect>`,
})
export class LineMdCookiePlusFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCookiePlusTwotoneIcon],svg[line-md-cookie-plus-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCookiePlusTwotone0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="56" stroke-dashoffset="56" d="M12 4c-4.42 0 -8 3.58 -8 8c0 4.42 3.58 8 8 8c4.42 0 8 -3.58 8 -8v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-1c-0.55 0 -1 -0.45 -1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:g fill="#fff" fill-opacity="0" stroke="none"><svg:circle cx="9.5" cy="7.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11" cy="17.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="6.5" cy="11.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="16.5" cy="14.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11.5" cy="12.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.2s" values="0;1"></svg:animate></svg:circle></svg:g><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="1.6s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M16 19h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M19 16v6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.8s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCookiePlusTwotone0)"></svg:rect>`,
})
export class LineMdCookiePlusTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCookieRemoveIcon],svg[line-md-cookie-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCookieRemove0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="56" stroke-dashoffset="56" d="M12 4c-4.42 0 -8 3.58 -8 8c0 4.42 3.58 8 8 8c4.42 0 8 -3.58 8 -8v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-1c-0.55 0 -1 -0.45 -1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:g fill="#fff" fill-opacity="0" stroke="none"><svg:circle cx="9.5" cy="7.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11" cy="17.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="6.5" cy="11.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="16.5" cy="14.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11.5" cy="12.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.2s" values="0;1"></svg:animate></svg:circle></svg:g><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="1.4s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M17 17l4 4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M21 17l-4 4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCookieRemove0)"></svg:rect>`,
})
export class LineMdCookieRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCookieRemoveFilledIcon],svg[line-md-cookie-remove-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCookieRemoveFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="56" stroke-dashoffset="56" d="M12 4c-4.42 0 -8 3.58 -8 8c0 4.42 3.58 8 8 8c4.42 0 8 -3.58 8 -8v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-1c-0.55 0 -1 -0.45 -1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:g fill="#000" fill-opacity="0" stroke="none"><svg:circle cx="9.5" cy="7.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11" cy="17.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="6.5" cy="11.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.4s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="16.5" cy="14.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.5s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11.5" cy="12.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.6s" dur="0.2s" values="0;1"></svg:animate></svg:circle></svg:g><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="1.9s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M17 17l4 4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.9s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M21 17l-4 4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="2.1s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCookieRemoveFilled0)"></svg:rect>`,
})
export class LineMdCookieRemoveFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCookieRemoveTwotoneIcon],svg[line-md-cookie-remove-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCookieRemoveTwotone0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="56" stroke-dashoffset="56" d="M12 4c-4.42 0 -8 3.58 -8 8c0 4.42 3.58 8 8 8c4.42 0 8 -3.58 8 -8v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-1c-0.55 0 -1 -0.45 -1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:g fill="#fff" fill-opacity="0" stroke="none"><svg:circle cx="9.5" cy="7.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11" cy="17.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="6.5" cy="11.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="16.5" cy="14.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11.5" cy="12.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.2s" values="0;1"></svg:animate></svg:circle></svg:g><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="1.6s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M17 17l4 4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M21 17l-4 4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.8s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCookieRemoveTwotone0)"></svg:rect>`,
})
export class LineMdCookieRemoveTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCookieSettingsIcon],svg[line-md-cookie-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="56" stroke-dashoffset="56" d="M12 3c-4.42 0 -8 3.58 -8 8c0 4.42 3.58 8 8 8c4.42 0 8 -3.58 8 -8v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-1c-0.55 0 -1 -0.45 -1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:g fill="currentColor" fill-opacity="0" stroke="none"><svg:circle cx="9.5" cy="6.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11" cy="16.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="6.5" cy="10.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="16.5" cy="13.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11.5" cy="11.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.2s" values="0;1"></svg:animate></svg:circle></svg:g><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M8 23h0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M12 23h0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M16 23h0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.2s" values="2;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdCookieSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCookieSettingsFilledIcon],svg[line-md-cookie-settings-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdCookieSettingsFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="56" stroke-dashoffset="56" d="M12 3c-4.42 0 -8 3.58 -8 8c0 4.42 3.58 8 8 8c4.42 0 8 -3.58 8 -8v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-1c-0.55 0 -1 -0.45 -1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:g fill="#000" fill-opacity="0" stroke="none"><svg:circle cx="9.5" cy="6.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11" cy="16.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="6.5" cy="10.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.4s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="16.5" cy="13.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.5s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11.5" cy="11.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.6s" dur="0.2s" values="0;1"></svg:animate></svg:circle></svg:g><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M8 23h0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.9s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M12 23h0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="2s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M16 23h0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="2.1s" dur="0.2s" values="2;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdCookieSettingsFilled0)"></svg:rect>`,
})
export class LineMdCookieSettingsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCookieSettingsTwotoneIcon],svg[line-md-cookie-settings-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="56" stroke-dashoffset="56" d="M12 3c-4.42 0 -8 3.58 -8 8c0 4.42 3.58 8 8 8c4.42 0 8 -3.58 8 -8v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-1c-0.55 0 -1 -0.45 -1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:g fill="currentColor" fill-opacity="0" stroke="none"><svg:circle cx="9.5" cy="6.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11" cy="16.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="6.5" cy="10.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="16.5" cy="13.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11.5" cy="11.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.2s" values="0;1"></svg:animate></svg:circle></svg:g><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M8 23h0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M12 23h0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.7s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M16 23h0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.8s" dur="0.2s" values="2;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdCookieSettingsTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdCookieTwotoneIcon],svg[line-md-cookie-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="56" stroke-dashoffset="56" d="M12 4c-4.42 0 -8 3.58 -8 8c0 4.42 3.58 8 8 8c4.42 0 8 -3.58 8 -8v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-2c-0.55 0 -1 -0.45 -1 -1v-1h-1c-0.55 0 -1 -0.45 -1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:g stroke="none"><svg:circle cx="9.5" cy="7.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11" cy="17.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="6.5" cy="11.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="16.5" cy="14.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="11.5" cy="12.5" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.2s" values="0;1"></svg:animate></svg:circle></svg:g></svg:g>`,
})
export class LineMdCookieTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdDiscordIcon],svg[line-md-discord-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-opacity="0"><svg:circle cx="9" cy="12" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.15s" values="0;1"></svg:animate></svg:circle><svg:circle cx="15" cy="12" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.45s" dur="0.15s" values="0;1"></svg:animate></svg:circle></svg:g><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="32" stroke-dashoffset="32" d="M12 6h2l1 -2c0 0 2.5 0.5 4 1.5c3.53 2.35 3 9.5 3 10.5c-1.33 2.17 -5.5 3.5 -5.5 3.5l-1 -2M12 6h-2l-0.97 -2c0 0 -2.5 0.5 -4 1.5c-3.53 2.35 -3 9.5 -3 10.5c1.33 2.17 5.5 3.5 5.5 3.5l1 -2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.7s" values="32;0"></svg:animate></svg:path><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M5.5 16c5 2.5 8 2.5 13 0"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.4s" values="16;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdDiscordIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdDiscordTwotoneIcon],svg[line-md-discord-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-opacity="0"><svg:circle cx="9" cy="12" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.15s" values="0;1"></svg:animate></svg:circle><svg:circle cx="15" cy="12" r="1.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.45s" dur="0.15s" values="0;1"></svg:animate></svg:circle><svg:path d="M5 5l7 0.2l7 -0.2l3 10l-3 3.4h-14l-3.5 -3.4l3.5 -10Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.7s" dur="0.15s" values="0;0.3"></svg:animate></svg:path></svg:g><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="32" stroke-dashoffset="32" d="M12 6h2l1 -2c0 0 2.5 0.5 4 1.5c3.53 2.35 3 9.5 3 10.5c-1.33 2.17 -5.5 3.5 -5.5 3.5l-1 -2M12 6h-2l-0.97 -2c0 0 -2.5 0.5 -4 1.5c-3.53 2.35 -3 9.5 -3 10.5c1.33 2.17 5.5 3.5 5.5 3.5l1 -2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.7s" values="32;0"></svg:animate></svg:path><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M5.5 16c5 2.5 8 2.5 13 0"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.4s" values="16;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdDiscordTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdDocumentIcon],svg[line-md-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M13 3l6 6v12h-14v-18h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" stroke-width="1" d="M12.5 3v5.5h6.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="14;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdDocumentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdDocumentAddIcon],svg[line-md-document-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M13 3l6 6v12h-14v-18h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" stroke-width="1" d="M12.5 3v5.5h6.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M9 14h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M12 11v6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdDocumentAddIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdDocumentAddTwotoneIcon],svg[line-md-document-add-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M13 3l6 6v12h-14v-18h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" stroke-width="1" d="M12.5 3v5.5h6.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M9 14h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M12 11v6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g><svg:path fill="currentColor" fill-opacity="0" d="M5 3H12.5V8.5H19V21H5V3Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.4s" dur="0.15s" values="0;0.3"></svg:animate></svg:path>`,
})
export class LineMdDocumentAddTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdDocumentCodeIcon],svg[line-md-document-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M13 3l6 6v12h-14v-18h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" stroke-width="1" d="M12.5 3v5.5h6.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M10 13l-2 2l2 2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M14 13l2 2l-2 2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdDocumentCodeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdDocumentCodeTwotoneIcon],svg[line-md-document-code-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M13 3l6 6v12h-14v-18h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" stroke-width="1" d="M12.5 3v5.5h6.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M10 13l-2 2l2 2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M14 13l2 2l-2 2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g><svg:path fill="currentColor" fill-opacity="0" d="M5 3H12.5V8.5H19V21H5V3Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.4s" dur="0.15s" values="0;0.3"></svg:animate></svg:path>`,
})
export class LineMdDocumentCodeTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdDocumentDeleteIcon],svg[line-md-document-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M13 3l6 6v12h-14v-18h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" stroke-width="1" d="M12.5 3v5.5h6.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M9 11l6 6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M15 11l-6 6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="10;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdDocumentDeleteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdDocumentDeleteTwotoneIcon],svg[line-md-document-delete-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M13 3l6 6v12h-14v-18h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" stroke-width="1" d="M12.5 3v5.5h6.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M9 11l6 6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M15 11l-6 6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="10;0"></svg:animate></svg:path></svg:g><svg:path fill="currentColor" fill-opacity="0" d="M5 3H12.5V8.5H19V21H5V3Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.4s" dur="0.15s" values="0;0.3"></svg:animate></svg:path>`,
})
export class LineMdDocumentDeleteTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdDocumentListIcon],svg[line-md-document-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M13 3l6 6v12h-14v-18h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" stroke-width="1" d="M12.5 3v5.5h6.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M9 13h4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M9 16h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdDocumentListIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdDocumentListTwotoneIcon],svg[line-md-document-list-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M13 3l6 6v12h-14v-18h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" stroke-width="1" d="M12.5 3v5.5h6.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M9 13h4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M9 16h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g><svg:path fill="currentColor" fill-opacity="0" d="M5 3H12.5V8.5H19V21H5V3Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.4s" dur="0.15s" values="0;0.3"></svg:animate></svg:path>`,
})
export class LineMdDocumentListTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdDocumentRemoveIcon],svg[line-md-document-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M13 3l6 6v12h-14v-18h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" stroke-width="1" d="M12.5 3v5.5h6.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M9 14h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdDocumentRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdDocumentRemoveTwotoneIcon],svg[line-md-document-remove-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M13 3l6 6v12h-14v-18h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" stroke-width="1" d="M12.5 3v5.5h6.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M9 14h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g><svg:path fill="currentColor" fill-opacity="0" d="M5 3H12.5V8.5H19V21H5V3Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.15s" values="0;0.3"></svg:animate></svg:path>`,
})
export class LineMdDocumentRemoveTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdDocumentReportIcon],svg[line-md-document-report-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M13 3l6 6v12h-14v-18h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" stroke-width="1" d="M12.5 3v5.5h6.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M9 17v-3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="4;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M12 17v-4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M15 17v-5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdDocumentReportIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdDocumentReportTwotoneIcon],svg[line-md-document-report-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M13 3l6 6v12h-14v-18h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" stroke-width="1" d="M12.5 3v5.5h6.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M9 17v-3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="4;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M12 17v-4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M15 17v-5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g><svg:path fill="currentColor" fill-opacity="0" d="M5 3H12.5V8.5H19V21H5V3Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.6s" dur="0.15s" values="0;0.3"></svg:animate></svg:path>`,
})
export class LineMdDocumentReportTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdDocumentTwotoneIcon],svg[line-md-document-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M13 3l6 6v12h-14v-18h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" stroke-width="1" d="M12.5 3v5.5h6.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="14;0"></svg:animate></svg:path></svg:g><svg:path fill="currentColor" fill-opacity="0" d="M5 3H12.5V8.5H19V21H5V3Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.15s" values="0;0.3"></svg:animate></svg:path>`,
})
export class LineMdDocumentTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdDoubleArrowHorizontalIcon],svg[line-md-double-arrow-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M12 12h-8.5M12 12h8.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M3 12l4 4M21 12l-4 4M3 12l4 -4M21 12l-4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.3s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdDoubleArrowHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdDoubleArrowVerticalIcon],svg[line-md-double-arrow-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M12 12l0 -8.5M12 12l0 8.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M12 3l-4 4M12 21l-4 -4M12 3l4 4M12 21l4 -4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.3s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdDoubleArrowVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdDownloadIcon],svg[line-md-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="20" stroke-dashoffset="20" d="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdDownloadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdDownloadLoopIcon],svg[line-md-download-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="20" stroke-dashoffset="20" d="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5"><svg:animate attributeName="d" begin="0.5s" dur="1.5s" repeatCount="indefinite" values="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5;M12 4h2v3h2.5l-4.5 4.5M12 4h-2v3h-2.5l4.5 4.5;M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdDownloadLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdDownloadOffIcon],svg[line-md-download-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdDownloadOff0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="20" stroke-dashoffset="20" d="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M0 11h24" transform="rotate(45 13 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M1 13h22" transform="rotate(45 13 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdDownloadOff0)"></svg:rect>`,
})
export class LineMdDownloadOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdDownloadOffLoopIcon],svg[line-md-download-off-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdDownloadOffLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="20" stroke-dashoffset="20" d="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5"><svg:animate attributeName="d" begin="0.5s" dur="1.5s" repeatCount="indefinite" values="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5;M12 4h2v3h2.5l-4.5 4.5M12 4h-2v3h-2.5l4.5 4.5;M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M0 11h24" transform="rotate(45 13 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M0 13h22" transform="rotate(45 13 12)"><svg:animate attributeName="d" dur="6s" repeatCount="indefinite" values="M0 13h22;M2 13h22;M0 13h22"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdDownloadOffLoop0)"></svg:rect>`,
})
export class LineMdDownloadOffLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdDownloadOffOutlineIcon],svg[line-md-download-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdDownloadOffOutline0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M0 11h24" transform="rotate(45 13 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M1 13h22" transform="rotate(45 13 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdDownloadOffOutline0)"></svg:rect>`,
})
export class LineMdDownloadOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdDownloadOffOutlineLoopIcon],svg[line-md-download-off-outline-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdDownloadOffOutlineLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5"><svg:animate attributeName="d" begin="0.5s" dur="1.5s" repeatCount="indefinite" values="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5;M12 4h2v3h2.5l-4.5 4.5M12 4h-2v3h-2.5l4.5 4.5;M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M0 11h24" transform="rotate(45 13 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M0 13h22" transform="rotate(45 13 12)"><svg:animate attributeName="d" dur="6s" repeatCount="indefinite" values="M0 13h22;M2 13h22;M0 13h22"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdDownloadOffOutlineLoop0)"></svg:rect>`,
})
export class LineMdDownloadOffOutlineLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdDownloadOffTwotoneIcon],svg[line-md-download-off-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdDownloadOffTwotone0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="20" stroke-dashoffset="20" d="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M0 11h24" transform="rotate(45 13 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M1 13h22" transform="rotate(45 13 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdDownloadOffTwotone0)"></svg:rect>`,
})
export class LineMdDownloadOffTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdDownloadOffTwotoneLoopIcon],svg[line-md-download-off-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdDownloadOffTwotoneLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="20" stroke-dashoffset="20" d="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5"><svg:animate attributeName="d" begin="0.5s" dur="1.5s" repeatCount="indefinite" values="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5;M12 4h2v3h2.5l-4.5 4.5M12 4h-2v3h-2.5l4.5 4.5;M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M0 11h24" transform="rotate(45 13 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M0 13h22" transform="rotate(45 13 12)"><svg:animate attributeName="d" dur="6s" repeatCount="indefinite" values="M0 13h22;M2 13h22;M0 13h22"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdDownloadOffTwotoneLoop0)"></svg:rect>`,
})
export class LineMdDownloadOffTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdDownloadOutlineIcon],svg[line-md-download-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdDownloadOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdDownloadOutlineLoopIcon],svg[line-md-download-outline-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5"><svg:animate attributeName="d" begin="0.5s" dur="1.5s" repeatCount="indefinite" values="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5;M12 4h2v3h2.5l-4.5 4.5M12 4h-2v3h-2.5l4.5 4.5;M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdDownloadOutlineLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdDownloadTwotoneIcon],svg[line-md-download-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="20" stroke-dashoffset="20" d="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdDownloadTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdDownloadTwotoneLoopIcon],svg[line-md-download-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="20" stroke-dashoffset="20" d="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5"><svg:animate attributeName="d" begin="0.5s" dur="1.5s" repeatCount="indefinite" values="M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5;M12 4h2v3h2.5l-4.5 4.5M12 4h-2v3h-2.5l4.5 4.5;M12 4h2v6h2.5l-4.5 4.5M12 4h-2v6h-2.5l4.5 4.5"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdDownloadTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdDownloadingIcon],svg[line-md-downloading-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="32" stroke-dashoffset="32" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="32;0"></svg:animate><svg:set fill="freeze" attributeName="stroke-dasharray" begin="0.8s" to="2 4"></svg:set></svg:path><svg:path stroke-dasharray="32" stroke-dashoffset="32" d="M12 21c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.4s" values="32;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M12 8v7.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M12 15.5l3.5 -3.5M12 15.5l-3.5 -3.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdDownloadingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdDownloadingLoopIcon],svg[line-md-downloading-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="2 4" stroke-dashoffset="6" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9"><svg:animate attributeName="stroke-dashoffset" dur="0.6s" repeatCount="indefinite" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="32" stroke-dashoffset="32" d="M12 21c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.1s" dur="0.4s" values="32;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M12 8v7.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M12 15.5l3.5 -3.5M12 15.5l-3.5 -3.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdDownloadingLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEditIcon],svg[line-md-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M3 21h18"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="48" stroke-dashoffset="48" d="M7 17v-4l10 -10l4 4l-10 10h-4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.6s" values="48;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M14 6l4 4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEditFilledIcon],svg[line-md-edit-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M3 21h18"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="48" stroke-dashoffset="48" d="M7 17v-4l10 -10l4 4l-10 10h-4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.6s" values="48;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M14 6l4 4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g><svg:path fill="currentColor" fill-opacity="0" d="M14 6l4 4L21 7L17 3Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.5s" values="0;1"></svg:animate></svg:path>`,
})
export class LineMdEditFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEditFullFilledIcon],svg[line-md-edit-full-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M3 21h18"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="48" stroke-dashoffset="48" d="M7 17v-4l10 -10l4 4l-10 10h-4"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.6s" values="48;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M14 6l4 4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdEditFullFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEditFullTwotoneIcon],svg[line-md-edit-full-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M3 21h18"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="48" stroke-dashoffset="48" d="M7 17v-4l10 -10l4 4l-10 10h-4"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.6s" values="48;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M14 6l4 4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdEditFullTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEditTwotoneIcon],svg[line-md-edit-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M3 21h18"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="48" stroke-dashoffset="48" d="M7 17v-4l10 -10l4 4l-10 10h-4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.2s" dur="0.6s" values="48;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M14 6l4 4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g><svg:path fill="currentColor" fill-opacity="0" d="M14 6l4 4L21 7L17 3Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.15s" values="0;0.3"></svg:animate></svg:path>`,
})
export class LineMdEditTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailIcon],svg[line-md-email-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M3 6.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdEmailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailAlertIcon],svg[line-md-email-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M2 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M1 6.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M23 8v4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M23 16v0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="2;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdEmailAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailAlertFilledIcon],svg[line-md-email-alert-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M10 11l-8 -5h16l-8 5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.5s" values="0;1"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M2 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M1 6.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M23 8v4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M23 16v0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s" dur="0.2s" values="2;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdEmailAlertFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailAlertTwotoneIcon],svg[line-md-email-alert-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M10 11l-8 -5h16l-8 5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M2 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M1 6.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M23 8v4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.95s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M23 16v0.01"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.15s" dur="0.2s" values="2;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdEmailAlertTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailAltFilledIcon],svg[line-md-email-alt-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M12 13l-8 -5v10h16v-10l-8 5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.5s" values="0;1"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M3 6.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdEmailAltFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailAltTwotoneIcon],svg[line-md-email-alt-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M12 13l-8 -5v10h16v-10l-8 5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M3 6.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdEmailAltTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailArrowDownIcon],svg[line-md-email-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdEmailArrowDown0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M3 6.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="0.8s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M19 16v5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M19 21l2 -2M19 21l-2 -2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="4;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdEmailArrowDown0)"></svg:rect>`,
})
export class LineMdEmailArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailArrowDownFilledIcon],svg[line-md-email-arrow-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdEmailArrowDownFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M3 6.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" stroke="none" d="M12 11l-8 -5h16l-8 5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.5s" values="0;1"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="0.8s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M19 16v5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M19 21l2 -2M19 21l-2 -2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="4;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdEmailArrowDownFilled0)"></svg:rect>`,
})
export class LineMdEmailArrowDownFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailArrowDownTwotoneIcon],svg[line-md-email-arrow-down-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdEmailArrowDownTwotone0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M3 6.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" stroke="none" d="M12 11l-8 -5h16l-8 5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="0.8s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M19 16v5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M19 21l2 -2M19 21l-2 -2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="4;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdEmailArrowDownTwotone0)"></svg:rect>`,
})
export class LineMdEmailArrowDownTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailArrowLeftIcon],svg[line-md-email-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdEmailArrowLeft0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M3 6.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="0.8s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M21 19h-5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M16 19l2 2M16 19l2 -2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="4;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdEmailArrowLeft0)"></svg:rect>`,
})
export class LineMdEmailArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailArrowLeftFilledIcon],svg[line-md-email-arrow-left-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdEmailArrowLeftFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M3 6.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" stroke="none" d="M12 11l-8 -5h16l-8 5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.5s" values="0;1"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="0.8s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M21 19h-5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M16 19l2 2M16 19l2 -2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="4;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdEmailArrowLeftFilled0)"></svg:rect>`,
})
export class LineMdEmailArrowLeftFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailArrowLeftTwotoneIcon],svg[line-md-email-arrow-left-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdEmailArrowLeftTwotone0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M3 6.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" stroke="none" d="M12 11l-8 -5h16l-8 5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="0.8s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M21 19h-5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M16 19l2 2M16 19l2 -2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="4;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdEmailArrowLeftTwotone0)"></svg:rect>`,
})
export class LineMdEmailArrowLeftTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailArrowRightIcon],svg[line-md-email-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdEmailArrowRight0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M3 6.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="0.8s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M16 19h5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M21 19l-2 2M21 19l-2 -2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="4;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdEmailArrowRight0)"></svg:rect>`,
})
export class LineMdEmailArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailArrowRightFilledIcon],svg[line-md-email-arrow-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdEmailArrowRightFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M3 6.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" stroke="none" d="M12 11l-8 -5h16l-8 5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.5s" values="0;1"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="0.8s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M16 19h5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M21 19l-2 2M21 19l-2 -2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="4;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdEmailArrowRightFilled0)"></svg:rect>`,
})
export class LineMdEmailArrowRightFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailArrowRightTwotoneIcon],svg[line-md-email-arrow-right-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdEmailArrowRightTwotone0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M3 6.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" stroke="none" d="M12 11l-8 -5h16l-8 5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="0.8s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M16 19h5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M21 19l-2 2M21 19l-2 -2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="4;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdEmailArrowRightTwotone0)"></svg:rect>`,
})
export class LineMdEmailArrowRightTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailArrowUpIcon],svg[line-md-email-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdEmailArrowUp0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M3 6.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="0.8s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M19 21v-5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M19 16l2 2M19 16l-2 2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="4;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdEmailArrowUp0)"></svg:rect>`,
})
export class LineMdEmailArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailArrowUpFilledIcon],svg[line-md-email-arrow-up-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdEmailArrowUpFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M3 6.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" stroke="none" d="M12 11l-8 -5h16l-8 5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.5s" values="0;1"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="0.8s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M19 21v-5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M19 16l2 2M19 16l-2 2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="4;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdEmailArrowUpFilled0)"></svg:rect>`,
})
export class LineMdEmailArrowUpFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailArrowUpTwotoneIcon],svg[line-md-email-arrow-up-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdEmailArrowUpTwotone0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M3 6.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" stroke="none" d="M12 11l-8 -5h16l-8 5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="0.8s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M19 21v-5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M19 16l2 2M19 16l-2 2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="4;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdEmailArrowUpTwotone0)"></svg:rect>`,
})
export class LineMdEmailArrowUpTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailCheckIcon],svg[line-md-email-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdEmailCheck0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M3 6.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="0.8s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M16 19l1.75 1.75l3.75 -3.75"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="10;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdEmailCheck0)"></svg:rect>`,
})
export class LineMdEmailCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailCheckFilledIcon],svg[line-md-email-check-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdEmailCheckFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M3 6.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" stroke="none" d="M12 11l-8 -5h16l-8 5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.5s" values="0;1"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="0.8s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M16 19l1.75 1.75l3.75 -3.75"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="10;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdEmailCheckFilled0)"></svg:rect>`,
})
export class LineMdEmailCheckFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailCheckTwotoneIcon],svg[line-md-email-check-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdEmailCheckTwotone0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M3 6.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" stroke="none" d="M12 11l-8 -5h16l-8 5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="0.8s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M16 19l1.75 1.75l3.75 -3.75"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="10;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdEmailCheckTwotone0)"></svg:rect>`,
})
export class LineMdEmailCheckTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailFilledIcon],svg[line-md-email-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M12 11l-8 -5h16l-8 5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.5s" values="0;1"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M3 6.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdEmailFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailMinusIcon],svg[line-md-email-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdEmailMinus0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M3 6.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="0.8s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M16 19h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdEmailMinus0)"></svg:rect>`,
})
export class LineMdEmailMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailMinusFilledIcon],svg[line-md-email-minus-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdEmailMinusFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M3 6.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" stroke="none" d="M12 11l-8 -5h16l-8 5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.5s" values="0;1"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="0.8s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M16 19h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdEmailMinusFilled0)"></svg:rect>`,
})
export class LineMdEmailMinusFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailMinusTwotoneIcon],svg[line-md-email-minus-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdEmailMinusTwotone0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M3 6.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" stroke="none" d="M12 11l-8 -5h16l-8 5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="0.8s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M16 19h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdEmailMinusTwotone0)"></svg:rect>`,
})
export class LineMdEmailMinusTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailMultipleIcon],svg[line-md-email-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M6 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="36" stroke-dashoffset="36" d="M19 23h-17c-0.55 0 -1 -0.45 -1 -1v-13"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.3s" values="36;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M5 6.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdEmailMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailMultipleFilledIcon],svg[line-md-email-multiple-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M14 11l-8 -5h16l-8 5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.5s" values="0;1"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M6 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="36" stroke-dashoffset="36" d="M19 23h-17c-0.55 0 -1 -0.45 -1 -1v-13"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.3s" values="36;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M5 6.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdEmailMultipleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailMultipleTwotoneIcon],svg[line-md-email-multiple-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M14 11l-8 -5h16l-8 5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M6 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="36" stroke-dashoffset="36" d="M19 23h-17c-0.55 0 -1 -0.45 -1 -1v-13"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.3s" values="36;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M5 6.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdEmailMultipleTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailOpenedIcon],svg[line-md-email-opened-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M3 8.06c0 -0.35 0.18 -0.67 0.48 -0.85l8.52 -5.21l8.52 5.21c0.3 0.18 0.48 0.5 0.48 0.85v9.94c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-9.94Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M3 8.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdEmailOpenedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailOpenedAltFilledIcon],svg[line-md-email-opened-alt-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M12 15l-8 -5v8h16v-8l-8 5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.5s" values="0;1"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M3 8.06c0 -0.35 0.18 -0.67 0.48 -0.85l8.52 -5.21l8.52 5.21c0.3 0.18 0.48 0.5 0.48 0.85v9.94c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-9.94Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M3 8.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdEmailOpenedAltFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailOpenedAltTwotoneIcon],svg[line-md-email-opened-alt-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M12 15l-8 -5v8h16v-8l-8 5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M3 8.06c0 -0.35 0.18 -0.67 0.48 -0.85l8.52 -5.21l8.52 5.21c0.3 0.18 0.48 0.5 0.48 0.85v9.94c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-9.94Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M3 8.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdEmailOpenedAltTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailOpenedFilledIcon],svg[line-md-email-opened-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M12 13l-8 -5l8 -5l8 5l-8 5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.5s" values="0;1"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M3 8.06c0 -0.35 0.18 -0.67 0.48 -0.85l8.52 -5.21l8.52 5.21c0.3 0.18 0.48 0.5 0.48 0.85v9.94c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-9.94Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M3 8.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdEmailOpenedFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailOpenedMultipleIcon],svg[line-md-email-opened-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M5 8.06c0 -0.35 0.18 -0.67 0.48 -0.85l8.52 -5.21l8.52 5.21c0.3 0.18 0.48 0.5 0.48 0.85v9.94c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-9.94Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="36" stroke-dashoffset="36" d="M19 23h-17c-0.55 0 -1 -0.45 -1 -1v-13"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.3s" values="36;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M5 8.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdEmailOpenedMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailOpenedMultipleFilledIcon],svg[line-md-email-opened-multiple-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M14 13l-8 -5l8 -5l8 5l-8 5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.5s" values="0;1"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M5 8.06c0 -0.35 0.18 -0.67 0.48 -0.85l8.52 -5.21l8.52 5.21c0.3 0.18 0.48 0.5 0.48 0.85v9.94c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-9.94Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="36" stroke-dashoffset="36" d="M19 23h-17c-0.55 0 -1 -0.45 -1 -1v-13"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.3s" values="36;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M5 8.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdEmailOpenedMultipleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailOpenedMultipleTwotoneIcon],svg[line-md-email-opened-multiple-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M14 13l-8 -5l8 -5l8 5l-8 5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M5 8.06c0 -0.35 0.18 -0.67 0.48 -0.85l8.52 -5.21l8.52 5.21c0.3 0.18 0.48 0.5 0.48 0.85v9.94c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-9.94Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="36" stroke-dashoffset="36" d="M19 23h-17c-0.55 0 -1 -0.45 -1 -1v-13"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.3s" values="36;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M5 8.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdEmailOpenedMultipleTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailOpenedTwotoneIcon],svg[line-md-email-opened-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M12 13l-8 -5l8 -5l8 5l-8 5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M3 8.06c0 -0.35 0.18 -0.67 0.48 -0.85l8.52 -5.21l8.52 5.21c0.3 0.18 0.48 0.5 0.48 0.85v9.94c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-9.94Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M3 8.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdEmailOpenedTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailPlusIcon],svg[line-md-email-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdEmailPlus0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M3 6.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="0.8s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M16 19h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M19 16v6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdEmailPlus0)"></svg:rect>`,
})
export class LineMdEmailPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailPlusFilledIcon],svg[line-md-email-plus-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdEmailPlusFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M3 6.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" stroke="none" d="M12 11l-8 -5h16l-8 5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.5s" values="0;1"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="0.8s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M16 19h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M19 16v6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdEmailPlusFilled0)"></svg:rect>`,
})
export class LineMdEmailPlusFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailPlusTwotoneIcon],svg[line-md-email-plus-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdEmailPlusTwotone0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M3 6.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" stroke="none" d="M12 11l-8 -5h16l-8 5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="0.8s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M16 19h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M19 16v6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdEmailPlusTwotone0)"></svg:rect>`,
})
export class LineMdEmailPlusTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailRemoveIcon],svg[line-md-email-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdEmailRemove0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M3 6.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="0.8s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M17 17l4 4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M21 17l-4 4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdEmailRemove0)"></svg:rect>`,
})
export class LineMdEmailRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailRemoveFilledIcon],svg[line-md-email-remove-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdEmailRemoveFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M3 6.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" stroke="none" d="M12 11l-8 -5h16l-8 5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.5s" values="0;1"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="0.8s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M17 17l4 4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M21 17l-4 4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdEmailRemoveFilled0)"></svg:rect>`,
})
export class LineMdEmailRemoveFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailRemoveTwotoneIcon],svg[line-md-email-remove-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdEmailRemoveTwotone0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M3 6.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" stroke="none" d="M12 11l-8 -5h16l-8 5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="0.8s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M17 17l4 4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M21 17l-4 4"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdEmailRemoveTwotone0)"></svg:rect>`,
})
export class LineMdEmailRemoveTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmailTwotoneIcon],svg[line-md-email-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M12 11l-8 -5h16l-8 5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M3 6.5l9 5.5l9 -5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="24;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdEmailTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmojiAngryIcon],svg[line-md-emoji-angry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M9 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" stroke-width="1" d="M9.5 8.5l-2 -1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="4;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M15 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" stroke-width="1" d="M14.5 8.5l2 -1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="4;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M8 16c0.5 -1 1.79 -2 4 -2c2.21 0 3.5 1 4 2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="12;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdEmojiAngryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmojiAngryFilledIcon],svg[line-md-emoji-angry-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdEmojiAngryFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="2" stroke-dashoffset="2" d="M9 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="4" stroke-dashoffset="4" stroke-width="1" d="M9.5 8.5l-2 -1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="4;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="2" stroke-dashoffset="2" d="M15 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="4" stroke-dashoffset="4" stroke-width="1" d="M14.5 8.5l2 -1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" values="4;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="12" stroke-dashoffset="12" d="M8 16c0.5 -1 1.79 -2 4 -2c2.21 0 3.5 1 4 2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.2s" values="12;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdEmojiAngryFilled0)"></svg:rect>`,
})
export class LineMdEmojiAngryFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmojiAngryTwotoneIcon],svg[line-md-emoji-angry-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M9 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.85s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" stroke-width="1" d="M9.5 8.5l-2 -1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.85s" dur="0.2s" values="4;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M15 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.05s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" stroke-width="1" d="M14.5 8.5l2 -1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.05s" dur="0.2s" values="4;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M8 16c0.5 -1 1.79 -2 4 -2c2.21 0 3.5 1 4 2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.25s" dur="0.2s" values="12;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdEmojiAngryTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmojiCryIcon],svg[line-md-emoji-cry-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdEmojiCry0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M9 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M15 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M8 16c0.5 -1 1.79 -2 4 -2c2.21 0 3.5 1 4 2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M9.55 12c1.19 1.88 2.45 4.18 2.45 5.5c0 2.5 -2 4.5 -4.5 4.5c-2.5 0 -4.5 -2 -4.5 -4.5c0 -1.32 1.26 -3.62 2.45 -5.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.2s" values="0;1"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" stroke="none" d="M7.5 13c0 0 2.5 3.12 2.5 4.5c0 1.38 -1.12 2.5 -2.5 2.5c-1.38 0 -2.5 -1.12 -2.5 -2.5c0 -1.38 2.5 -4.5 2.5 -4.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.2s" values="0;1"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdEmojiCry0)"></svg:rect>`,
})
export class LineMdEmojiCryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmojiCryFilledIcon],svg[line-md-emoji-cry-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdEmojiCryFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="2" stroke-dashoffset="2" d="M9 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="2" stroke-dashoffset="2" d="M15 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="12" stroke-dashoffset="12" d="M8 16c0.5 -1 1.79 -2 4 -2c2.21 0 3.5 1 4 2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" stroke="none" d="M9.55 12c1.19 1.88 2.45 4.18 2.45 5.5c0 2.5 -2 4.5 -4.5 4.5c-2.5 0 -4.5 -2 -4.5 -4.5c0 -1.32 1.26 -3.62 2.45 -5.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.4s" dur="0.2s" values="0;1"></svg:animate></svg:path><svg:path fill="#000" fill-opacity="0" stroke="none" d="M7.5 13c0 0 2.5 3.12 2.5 4.5c0 1.38 -1.12 2.5 -2.5 2.5c-1.38 0 -2.5 -1.12 -2.5 -2.5c0 -1.38 2.5 -4.5 2.5 -4.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.4s" dur="0.2s" values="0;1"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdEmojiCryFilled0)"></svg:rect>`,
})
export class LineMdEmojiCryFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmojiFrownIcon],svg[line-md-emoji-frown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M9 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M15 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M8 16c0.5 -1 1.79 -2 4 -2c2.21 0 3.5 1 4 2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="12;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdEmojiFrownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmojiFrownFilledIcon],svg[line-md-emoji-frown-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdEmojiFrownFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="2" stroke-dashoffset="2" d="M9 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="2" stroke-dashoffset="2" d="M15 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="12" stroke-dashoffset="12" d="M8 16c0.5 -1 1.79 -2 4 -2c2.21 0 3.5 1 4 2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.2s" values="12;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdEmojiFrownFilled0)"></svg:rect>`,
})
export class LineMdEmojiFrownFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmojiFrownOpenIcon],svg[line-md-emoji-frown-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15c-3.25 0 -4.5 0 -4.5 0c0 0 0.45 0 1 0c0.75 0 0.5 0 3.5 0c3 0 2.75 0 3.5 0c0.55 0 1 0 1 0c0 0 -1.25 0 -4.5 0Z"><svg:animate fill="freeze" attributeName="d" begin="1.1s" dur="0.2s" values="M12 15c-3.25 0 -4.5 0 -4.5 0c0 0 0.45 0 1 0c0.75 0 0.5 0 3.5 0c3 0 2.75 0 3.5 0c0.55 0 1 0 1 0c0 0 -1.25 0 -4.5 0Z;M12 13c-3.25 0 -4.5 2.45 -4.5 3c0 0.55 0.45 1 1 1c0.75 0 0.5 -0.5 3.5 -0.5c3 0 2.75 0.5 3.5 0.5c0.55 0 1 -0.45 1 -1c0 -0.55 -1.25 -3 -4.5 -3Z"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M9 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M15 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="2;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdEmojiFrownOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmojiFrownOpenFilledIcon],svg[line-md-emoji-frown-open-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdEmojiFrownOpenFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="2" stroke-dashoffset="2" d="M9 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="2" stroke-dashoffset="2" d="M15 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path fill="#000" stroke="none" d="M12 15c-3.25 0 -4.5 0 -4.5 0c0 0 0.45 0 1 0c0.75 0 0.5 0 3.5 0c3 0 2.75 0 3.5 0c0.55 0 1 0 1 0c0 0 -1.25 0 -4.5 0Z"><svg:animate fill="freeze" attributeName="d" begin="1.6s" dur="0.2s" values="M12 15c-3.25 0 -4.5 0 -4.5 0c0 0 0.45 0 1 0c0.75 0 0.5 0 3.5 0c3 0 2.75 0 3.5 0c0.55 0 1 0 1 0c0 0 -1.25 0 -4.5 0Z;M12 13c-3.25 0 -4.5 2.45 -4.5 3c0 0.55 0.45 1 1 1c0.75 0 0.5 -0.5 3.5 -0.5c3 0 2.75 0.5 3.5 0.5c0.55 0 1 -0.45 1 -1c0 -0.55 -1.25 -3 -4.5 -3Z"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdEmojiFrownOpenFilled0)"></svg:rect>`,
})
export class LineMdEmojiFrownOpenFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmojiFrownOpenTwotoneIcon],svg[line-md-emoji-frown-open-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15c-3.25 0 -4.5 0 -4.5 0c0 0 0.45 0 1 0c0.75 0 0.5 0 3.5 0c3 0 2.75 0 3.5 0c0.55 0 1 0 1 0c0 0 -1.25 0 -4.5 0Z"><svg:animate fill="freeze" attributeName="d" begin="1.25s" dur="0.2s" values="M12 15c-3.25 0 -4.5 0 -4.5 0c0 0 0.45 0 1 0c0.75 0 0.5 0 3.5 0c3 0 2.75 0 3.5 0c0.55 0 1 0 1 0c0 0 -1.25 0 -4.5 0Z;M12 13c-3.25 0 -4.5 2.45 -4.5 3c0 0.55 0.45 1 1 1c0.75 0 0.5 -0.5 3.5 -0.5c3 0 2.75 0.5 3.5 0.5c0.55 0 1 -0.45 1 -1c0 -0.55 -1.25 -3 -4.5 -3Z"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M9 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.85s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M15 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.05s" dur="0.2s" values="2;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdEmojiFrownOpenTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmojiFrownTwotoneIcon],svg[line-md-emoji-frown-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M9 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.85s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M15 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.05s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M8 16c0.5 -1 1.79 -2 4 -2c2.21 0 3.5 1 4 2"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.25s" dur="0.2s" values="12;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdEmojiFrownTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmojiGrinIcon],svg[line-md-emoji-grin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15c-2.5 0 -3.25 0 -4 0c-0.55 0 -1 0 -1 0c0 0 1.5 0 5 0c3.5 0 5 0 5 0c0 0 -0.45 0 -1 0c-0.75 0 -1.5 0 -4 0Z"><svg:animate fill="freeze" attributeName="d" begin="1.1s" dur="0.2s" values="M12 15c-2.5 0 -3.25 0 -4 0c-0.55 0 -1 0 -1 0c0 0 1.5 0 5 0c3.5 0 5 0 5 0c0 0 -0.45 0 -1 0c-0.75 0 -1.5 0 -4 0Z;M12 14c-2.5 0 -3.25 -1 -4 -1c-0.55 0 -1 0.45 -1 1c0 0.75 1.5 4 5 4c3.5 0 5 -3.25 5 -4c0 -0.55 -0.45 -1 -1 -1c-0.75 0 -1.5 1 -4 1Z"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M9 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M15 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="2;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdEmojiGrinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmojiGrinFilledIcon],svg[line-md-emoji-grin-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdEmojiGrinFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="2" stroke-dashoffset="2" d="M9 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="2" stroke-dashoffset="2" d="M15 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path fill="#000" stroke="none" d="M12 15c-2.5 0 -3.25 0 -4 0c-0.55 0 -1 0 -1 0c0 0 1.5 0 5 0c3.5 0 5 0 5 0c0 0 -0.45 0 -1 0c-0.75 0 -1.5 0 -4 0Z"><svg:animate fill="freeze" attributeName="d" begin="1.6s" dur="0.2s" values="M12 15c-2.5 0 -3.25 0 -4 0c-0.55 0 -1 0 -1 0c0 0 1.5 0 5 0c3.5 0 5 0 5 0c0 0 -0.45 0 -1 0c-0.75 0 -1.5 0 -4 0Z;M12 14c-2.5 0 -3.25 -1 -4 -1c-0.55 0 -1 0.45 -1 1c0 0.75 1.5 4 5 4c3.5 0 5 -3.25 5 -4c0 -0.55 -0.45 -1 -1 -1c-0.75 0 -1.5 1 -4 1Z"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdEmojiGrinFilled0)"></svg:rect>`,
})
export class LineMdEmojiGrinFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmojiGrinTwotoneIcon],svg[line-md-emoji-grin-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15c-2.5 0 -3.25 0 -4 0c-0.55 0 -1 0 -1 0c0 0 1.5 0 5 0c3.5 0 5 0 5 0c0 0 -0.45 0 -1 0c-0.75 0 -1.5 0 -4 0Z"><svg:animate fill="freeze" attributeName="d" begin="1.25s" dur="0.2s" values="M12 15c-2.5 0 -3.25 0 -4 0c-0.55 0 -1 0 -1 0c0 0 1.5 0 5 0c3.5 0 5 0 5 0c0 0 -0.45 0 -1 0c-0.75 0 -1.5 0 -4 0Z;M12 14c-2.5 0 -3.25 -1 -4 -1c-0.55 0 -1 0.45 -1 1c0 0.75 1.5 4 5 4c3.5 0 5 -3.25 5 -4c0 -0.55 -0.45 -1 -1 -1c-0.75 0 -1.5 1 -4 1Z"></svg:animate></svg:path><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M9 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.85s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M15 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.05s" dur="0.2s" values="2;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdEmojiGrinTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmojiNeutralIcon],svg[line-md-emoji-neutral-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M9 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M15 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M8 15h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="10;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdEmojiNeutralIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmojiNeutralFilledIcon],svg[line-md-emoji-neutral-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdEmojiNeutralFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="2" stroke-dashoffset="2" d="M9 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="2" stroke-dashoffset="2" d="M15 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="10" stroke-dashoffset="10" d="M8 15h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.2s" values="10;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdEmojiNeutralFilled0)"></svg:rect>`,
})
export class LineMdEmojiNeutralFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmojiNeutralTwotoneIcon],svg[line-md-emoji-neutral-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M9 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.85s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M15 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.05s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M8 15h8"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.25s" dur="0.2s" values="10;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdEmojiNeutralTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmojiSmileIcon],svg[line-md-emoji-smile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M9 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M15 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M8 14c0.5 1.5 1.79 3 4 3c2.21 0 3.5 -1.5 4 -3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="12;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdEmojiSmileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmojiSmileFilledIcon],svg[line-md-emoji-smile-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdEmojiSmileFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="2" stroke-dashoffset="2" d="M9 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="2" stroke-dashoffset="2" d="M15 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="12" stroke-dashoffset="12" d="M8 14c0.5 1.5 1.79 3 4 3c2.21 0 3.5 -1.5 4 -3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.2s" values="12;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdEmojiSmileFilled0)"></svg:rect>`,
})
export class LineMdEmojiSmileFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmojiSmileTwotoneIcon],svg[line-md-emoji-smile-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M9 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.85s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M15 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.05s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M8 14c0.5 1.5 1.79 3 4 3c2.21 0 3.5 -1.5 4 -3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.25s" dur="0.2s" values="12;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdEmojiSmileTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmojiSmileWinkIcon],svg[line-md-emoji-smile-wink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M9 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M14.5 9.5h1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M8 14c0.5 1.5 1.79 3 4 3c2.21 0 3.5 -1.5 4 -3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.2s" values="12;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdEmojiSmileWinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmojiSmileWinkFilledIcon],svg[line-md-emoji-smile-wink-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdEmojiSmileWinkFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="2" stroke-dashoffset="2" d="M9 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="2" stroke-dashoffset="2" d="M14.5 9.5h1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="12" stroke-dashoffset="12" d="M8 14c0.5 1.5 1.79 3 4 3c2.21 0 3.5 -1.5 4 -3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.6s" dur="0.2s" values="12;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdEmojiSmileWinkFilled0)"></svg:rect>`,
})
export class LineMdEmojiSmileWinkFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEmojiSmileWinkTwotoneIcon],svg[line-md-emoji-smile-wink-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M9 9v1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.85s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M14.5 9.5h1"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.05s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M8 14c0.5 1.5 1.79 3 4 3c2.21 0 3.5 -1.5 4 -3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.25s" dur="0.2s" values="12;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdEmojiSmileWinkTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEngineIcon],svg[line-md-engine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="48" stroke-dashoffset="48" d="M11 9h6v10h-6.5l-2 -2h-2.5v-6.5l1.5 -1.5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"></svg:animate></svg:path><svg:path fill="currentColor" fill-opacity="0" d="M17 13h0v-3h0v8h0v-3h0z" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M17 13h0v-3h0v8h0v-3h0z;M17 13h4v-3h1v8h-1v-3h-4z"></svg:animate><svg:set fill="freeze" attributeName="fill-opacity" begin="0.8s" to="1"></svg:set><svg:set fill="freeze" attributeName="opacity" begin="0.6s" to="1"></svg:set></svg:path><svg:path d="M6 14h0M6 11v6" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="0.8s" dur="0.2s" values="M6 14h0M6 11v6;M6 14h-4M2 11v6"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.8s" to="1"></svg:set></svg:path><svg:path d="M11 9v0M8 9h6" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="1s" dur="0.2s" values="M11 9v0M8 9h6;M11 9v-4M8 5h6"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="1s" to="1"></svg:set></svg:path></svg:g>`,
})
export class LineMdEngineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEngineFilledIcon],svg[line-md-engine-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="48" stroke-dashoffset="48" d="M11 9h6v10h-6.5l-2 -2h-2.5v-6.5l1.5 -1.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"></svg:animate></svg:path><svg:path fill="currentColor" fill-opacity="0" d="M17 13h0v-3h0v8h0v-3h0z" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M17 13h0v-3h0v8h0v-3h0z;M17 13h4v-3h1v8h-1v-3h-4z"></svg:animate><svg:set fill="freeze" attributeName="fill-opacity" begin="0.8s" to="1"></svg:set><svg:set fill="freeze" attributeName="opacity" begin="0.6s" to="1"></svg:set></svg:path><svg:path d="M6 14h0M6 11v6" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="0.8s" dur="0.2s" values="M6 14h0M6 11v6;M6 14h-4M2 11v6"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.8s" to="1"></svg:set></svg:path><svg:path d="M11 9v0M8 9h6" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="1s" dur="0.2s" values="M11 9v0M8 9h6;M11 9v-4M8 5h6"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="1s" to="1"></svg:set></svg:path></svg:g>`,
})
export class LineMdEngineFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEngineOffIcon],svg[line-md-engine-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdEngineOff0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="48" stroke-dashoffset="48" d="M11 9h6v10h-6.5l-2 -2h-2.5v-6.5l1.5 -1.5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" d="M17 13h0v-3h0v8h0v-3h0z" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M17 13h0v-3h0v8h0v-3h0z;M17 13h4v-3h1v8h-1v-3h-4z"></svg:animate><svg:set fill="freeze" attributeName="fill-opacity" begin="0.8s" to="1"></svg:set><svg:set fill="freeze" attributeName="opacity" begin="0.6s" to="1"></svg:set></svg:path><svg:path d="M6 14h0M6 11v6" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="0.8s" dur="0.2s" values="M6 14h0M6 11v6;M6 14h-4M2 11v6"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.8s" to="1"></svg:set></svg:path><svg:path d="M11 9v0M8 9h6" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="1s" dur="0.2s" values="M11 9v0M8 9h6;M11 9v-4M8 5h6"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="1s" to="1"></svg:set></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M0 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M0 13h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdEngineOff0)"></svg:rect>`,
})
export class LineMdEngineOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEngineOffFilledIcon],svg[line-md-engine-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdEngineOffFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="48" stroke-dashoffset="48" d="M11 9h6v10h-6.5l-2 -2h-2.5v-6.5l1.5 -1.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" d="M17 13h0v-3h0v8h0v-3h0z" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M17 13h0v-3h0v8h0v-3h0z;M17 13h4v-3h1v8h-1v-3h-4z"></svg:animate><svg:set fill="freeze" attributeName="fill-opacity" begin="0.8s" to="1"></svg:set><svg:set fill="freeze" attributeName="opacity" begin="0.6s" to="1"></svg:set></svg:path><svg:path d="M6 14h0M6 11v6" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="0.8s" dur="0.2s" values="M6 14h0M6 11v6;M6 14h-4M2 11v6"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.8s" to="1"></svg:set></svg:path><svg:path d="M11 9v0M8 9h6" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="1s" dur="0.2s" values="M11 9v0M8 9h6;M11 9v-4M8 5h6"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="1s" to="1"></svg:set></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M0 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.8s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M0 13h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.8s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdEngineOffFilled0)"></svg:rect>`,
})
export class LineMdEngineOffFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEngineOffTwotoneIcon],svg[line-md-engine-off-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdEngineOffTwotone0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="48" stroke-dashoffset="48" d="M11 9h6v10h-6.5l-2 -2h-2.5v-6.5l1.5 -1.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.7s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"></svg:animate></svg:path><svg:path fill="#fff" fill-opacity="0" d="M17 13h0v-3h0v8h0v-3h0z" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M17 13h0v-3h0v8h0v-3h0z;M17 13h4v-3h1v8h-1v-3h-4z"></svg:animate><svg:set fill="freeze" attributeName="fill-opacity" begin="0.8s" to="1"></svg:set><svg:set fill="freeze" attributeName="opacity" begin="0.6s" to="1"></svg:set></svg:path><svg:path d="M6 14h0M6 11v6" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="0.8s" dur="0.2s" values="M6 14h0M6 11v6;M6 14h-4M2 11v6"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.8s" to="1"></svg:set></svg:path><svg:path d="M11 9v0M8 9h6" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="1s" dur="0.2s" values="M11 9v0M8 9h6;M11 9v-4M8 5h6"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="1s" to="1"></svg:set></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M0 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M0 13h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdEngineOffTwotone0)"></svg:rect>`,
})
export class LineMdEngineOffTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdEngineTwotoneIcon],svg[line-md-engine-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="48" stroke-dashoffset="48" d="M11 9h6v10h-6.5l-2 -2h-2.5v-6.5l1.5 -1.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"></svg:animate></svg:path><svg:path fill="currentColor" fill-opacity="0" d="M17 13h0v-3h0v8h0v-3h0z" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M17 13h0v-3h0v8h0v-3h0z;M17 13h4v-3h1v8h-1v-3h-4z"></svg:animate><svg:set fill="freeze" attributeName="fill-opacity" begin="0.8s" to="1"></svg:set><svg:set fill="freeze" attributeName="opacity" begin="0.6s" to="1"></svg:set></svg:path><svg:path d="M6 14h0M6 11v6" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="0.8s" dur="0.2s" values="M6 14h0M6 11v6;M6 14h-4M2 11v6"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.8s" to="1"></svg:set></svg:path><svg:path d="M11 9v0M8 9h6" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="1s" dur="0.2s" values="M11 9v0M8 9h6;M11 9v-4M8 5h6"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="1s" to="1"></svg:set></svg:path></svg:g>`,
})
export class LineMdEngineTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdExternalLinkIcon],svg[line-md-external-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="48" stroke-dashoffset="48" d="M11 5h-6v14h14v-6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M13 11l7 -7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M21 3h-6M21 3v6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdExternalLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdExternalLinkRoundedIcon],svg[line-md-external-link-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="36" stroke-dashoffset="36" d="M12 5c-3.87 0 -7 3.13 -7 7c0 3.87 3.13 7 7 7c3.87 0 7 -3.13 7 -7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="36;0"></svg:animate></svg:path><svg:path stroke-dasharray="12" stroke-dashoffset="12" d="M13 11l7 -7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M21 3h-6M21 3v6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdExternalLinkRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdFacebookIcon],svg[line-md-facebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M17 4l-2 0c-2.5 0 -4 1.5 -4 4v12"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M8 12h7"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="8;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdFacebookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdFileIcon],svg[line-md-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M13.5 3l5.5 5.5v11.5c0 0.55 -0.45 1 -1 1h-12c-0.55 0 -1 -0.45 -1 -1v-16c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path d="M14.5 3.5l2.25 2.25l2.25 2.25z" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M14.5 3.5l2.25 2.25l2.25 2.25z;M14.5 3.5l0 4.5l4.5 0z"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.6s" to="1"></svg:set></svg:path></svg:g>`,
})
export class LineMdFileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdFileCancelIcon],svg[line-md-file-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdFileCancel0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M13.5 3l5.5 5.5v11.5c0 0.55 -0.45 1 -1 1h-12c-0.55 0 -1 -0.45 -1 -1v-16c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path d="M14.5 3.5l2.25 2.25l2.25 2.25z" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M14.5 3.5l2.25 2.25l2.25 2.25z;M14.5 3.5l0 4.5l4.5 0z"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.6s" to="1"></svg:set></svg:path><svg:path fill="#000" fill-opacity="0" stroke="#000" stroke-dasharray="32" stroke-dashoffset="32" stroke-width="6" d="M18.5 14c2.48 0 4.5 2.02 4.5 4.5c0 2.48 -2.02 4.5 -4.5 4.5c-2.48 0 -4.5 -2.02 -4.5 -4.5c0 -2.48 2.02 -4.5 4.5 -4.5Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="0.8s" to="1"></svg:set><svg:set fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" to="0"></svg:set></svg:path><svg:path stroke-dasharray="32" stroke-dashoffset="32" d="M18.5 14c2.48 0 4.5 2.02 4.5 4.5c0 2.48 -2.02 4.5 -4.5 4.5c-2.48 0 -4.5 -2.02 -4.5 -4.5c0 -2.48 2.02 -4.5 4.5 -4.5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.4s" values="32;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M16 16l5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="10;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdFileCancel0)"></svg:rect>`,
})
export class LineMdFileCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdFileCancelFilledIcon],svg[line-md-file-cancel-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdFileCancelFilled0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M13.5 3l5.5 5.5v11.5c0 0.55 -0.45 1 -1 1h-12c-0.55 0 -1 -0.45 -1 -1v-16c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path fill="#000" stroke="#000" d="M14.5 3.5l0 4.5l4.5 0z" opacity="0"><svg:set fill="freeze" attributeName="opacity" begin="0.6s" to="1"></svg:set></svg:path><svg:path d="M13.5 3l5.5 5.5" opacity="0"><svg:set fill="freeze" attributeName="opacity" begin="0.6s" to="1"></svg:set></svg:path><svg:path fill="#000" fill-opacity="0" stroke="#000" stroke-dasharray="32" stroke-dashoffset="32" stroke-width="6" d="M18.5 14c2.48 0 4.5 2.02 4.5 4.5c0 2.48 -2.02 4.5 -4.5 4.5c-2.48 0 -4.5 -2.02 -4.5 -4.5c0 -2.48 2.02 -4.5 4.5 -4.5Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="1.1s" to="1"></svg:set><svg:set fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" to="0"></svg:set></svg:path><svg:path stroke-dasharray="32" stroke-dashoffset="32" d="M18.5 14c2.48 0 4.5 2.02 4.5 4.5c0 2.48 -2.02 4.5 -4.5 4.5c-2.48 0 -4.5 -2.02 -4.5 -4.5c0 -2.48 2.02 -4.5 4.5 -4.5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.1s" dur="0.4s" values="32;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M16 16l5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s" dur="0.2s" values="10;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdFileCancelFilled0)"></svg:rect>`,
})
export class LineMdFileCancelFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdFileCancelTwotoneIcon],svg[line-md-file-cancel-twotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdFileCancelTwotone0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M13.5 3l5.5 5.5v11.5c0 0.55 -0.45 1 -1 1h-12c-0.55 0 -1 -0.45 -1 -1v-16c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path d="M14.5 3.5l2.25 2.25l2.25 2.25z" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M14.5 3.5l2.25 2.25l2.25 2.25z;M14.5 3.5l0 4.5l4.5 0z"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.6s" to="1"></svg:set></svg:path><svg:path fill="#000" fill-opacity="0" stroke="#000" stroke-dasharray="32" stroke-dashoffset="32" stroke-width="6" d="M18.5 14c2.48 0 4.5 2.02 4.5 4.5c0 2.48 -2.02 4.5 -4.5 4.5c-2.48 0 -4.5 -2.02 -4.5 -4.5c0 -2.48 2.02 -4.5 4.5 -4.5Z"><svg:set fill="freeze" attributeName="fill-opacity" begin="1s" to="1"></svg:set><svg:set fill="freeze" attributeName="stroke-dashoffset" begin="1s" to="0"></svg:set></svg:path><svg:path stroke-dasharray="32" stroke-dashoffset="32" d="M18.5 14c2.48 0 4.5 2.02 4.5 4.5c0 2.48 -2.02 4.5 -4.5 4.5c-2.48 0 -4.5 -2.02 -4.5 -4.5c0 -2.48 2.02 -4.5 4.5 -4.5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.4s" values="32;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M16 16l5 5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.4s" dur="0.2s" values="10;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdFileCancelTwotone0)"></svg:rect>`,
})
export class LineMdFileCancelTwotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdFileDocumentIcon],svg[line-md-file-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M13.5 3l5.5 5.5v11.5c0 0.55 -0.45 1 -1 1h-12c-0.55 0 -1 -0.45 -1 -1v-16c0 -0.55 0.45 -1 1 -1Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path d="M14.5 3.5l2.25 2.25l2.25 2.25z" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M14.5 3.5l2.25 2.25l2.25 2.25z;M14.5 3.5l0 4.5l4.5 0z"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.6s" to="1"></svg:set></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M9 13h6"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="8;0"></svg:animate></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M9 17h3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="4;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdFileDocumentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
