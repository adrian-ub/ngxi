import { Component, input } from '@angular/core'

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
  selector: 'svg[lineMdGaugeLoopIcon],svg[line-md-gauge-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M12 12h-5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.2s" values="8;0"></svg:animate><svg:animatetransform attributeName="transform" begin="1.3s" dur="15s" repeatCount="indefinite" type="rotate" values="0 12 12;15 12 12;165 12 12;65 12 12;115 12 12;165 12 12;165 12 12;165 12 12;90 12 12;115 12 12;115 12 12;15 12 12;0 12 12"></svg:animatetransform></svg:path></svg:g><svg:g fill="currentColor"><svg:path fill-opacity="0" d="M12 21C9.41 21 7.15 20.79 5.94 19L12 21L18.06 19C16.85 20.79 14.59 21 12 21Z"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.4s" values="M12 21C9.41 21 7.15 20.79 5.94 19L12 21L18.06 19C16.85 20.79 14.59 21 12 21Z;M12 16C9.41 16 7.15 17.21 5.94 19L12 21L18.06 19C16.85 17.21 14.59 16 12 16Z"></svg:animate><svg:set fill="freeze" attributeName="fill-opacity" begin="0.6s" to="1"></svg:set></svg:path><svg:circle cx="7" cy="12" r="0" transform="rotate(15 12 12)"><svg:animate fill="freeze" attributeName="r" begin="0.9s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="7" cy="12" r="0" transform="rotate(65 12 12)"><svg:animate fill="freeze" attributeName="r" begin="0.95s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="7" cy="12" r="0" transform="rotate(115 12 12)"><svg:animate fill="freeze" attributeName="r" begin="1s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="7" cy="12" r="0" transform="rotate(165 12 12)"><svg:animate fill="freeze" attributeName="r" begin="1.05s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="12" cy="12" r="0"><svg:animate fill="freeze" attributeName="r" begin="1.3s" dur="0.2s" values="0;2"></svg:animate></svg:circle></svg:g>`,
})
export class LineMdGaugeLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdGaugeTwotoneLoopIcon],svg[line-md-gauge-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.6s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate></svg:path><svg:path stroke-dasharray="8" stroke-dashoffset="8" d="M12 12h-5.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.2s" values="8;0"></svg:animate><svg:animatetransform attributeName="transform" begin="1.75s" dur="15s" repeatCount="indefinite" type="rotate" values="0 12 12;15 12 12;165 12 12;65 12 12;115 12 12;165 12 12;165 12 12;165 12 12;90 12 12;115 12 12;115 12 12;15 12 12;0 12 12"></svg:animatetransform></svg:path></svg:g><svg:g fill="currentColor"><svg:path fill-opacity="0" d="M12 21C9.41 21 7.15 20.79 5.94 19L12 21L18.06 19C16.85 20.79 14.59 21 12 21Z"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.4s" values="M12 21C9.41 21 7.15 20.79 5.94 19L12 21L18.06 19C16.85 20.79 14.59 21 12 21Z;M12 16C9.41 16 7.15 17.21 5.94 19L12 21L18.06 19C16.85 17.21 14.59 16 12 16Z"></svg:animate><svg:set fill="freeze" attributeName="fill-opacity" begin="0.6s" to="1"></svg:set></svg:path><svg:circle cx="7" cy="12" r="0" transform="rotate(15 12 12)"><svg:animate fill="freeze" attributeName="r" begin="0.9s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="7" cy="12" r="0" transform="rotate(65 12 12)"><svg:animate fill="freeze" attributeName="r" begin="0.95s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="7" cy="12" r="0" transform="rotate(115 12 12)"><svg:animate fill="freeze" attributeName="r" begin="1s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="7" cy="12" r="0" transform="rotate(165 12 12)"><svg:animate fill="freeze" attributeName="r" begin="1.05s" dur="0.2s" values="0;1"></svg:animate></svg:circle><svg:circle cx="12" cy="12" r="0"><svg:animate fill="freeze" attributeName="r" begin="1.3s" dur="0.2s" values="0;2"></svg:animate></svg:circle></svg:g>`,
})
export class LineMdGaugeTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdGithubLoopIcon],svg[line-md-github-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdGithubLoop0" width="24" height="24" x="0" y="0"><svg:g fill="#fff"><svg:ellipse cx="9.5" cy="9" rx="1.5" ry="1"></svg:ellipse><svg:ellipse cx="14.5" cy="9" rx="1.5" ry="1"></svg:ellipse></svg:g></svg:mask><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="32" stroke-dashoffset="32" d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.7s" values="32;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"><svg:animate attributeName="d" dur="3s" repeatCount="indefinite" values="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="10;0"></svg:animate></svg:path></svg:g><svg:rect width="8" height="4" x="8" y="11" fill="currentColor" mask="url(#lineMdGithubLoop0)"><svg:animate attributeName="y" dur="10s" keyTimes="0;0.45;0.46;0.54;0.55;1" repeatCount="indefinite" values="11;11;7;7;11;11"></svg:animate></svg:rect>`,
})
export class LineMdGithubLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdHazardLightsFilledLoopIcon],svg[line-md-hazard-lights-filled-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="28" stroke-dashoffset="28" d="M12 10l4 7h-8Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path d="M12 10l4 7h-8Z" opacity="0"><svg:animate attributeName="d" begin="0.4s" dur="0.8s" keyTimes="0;0.25;1" repeatCount="indefinite" values="M12 10l4 7h-8Z;M12 4l9.25 16h-18.5Z;M12 4l9.25 16h-18.5Z"></svg:animate><svg:animate attributeName="opacity" begin="0.4s" dur="0.8s" keyTimes="0;0.1;0.75;1" repeatCount="indefinite" values="0;1;1;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdHazardLightsFilledLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdHazardLightsLoopIcon],svg[line-md-hazard-lights-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2"><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M12 10l4 7h-8Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path d="M12 10l4 7h-8Z" opacity="0"><svg:animate attributeName="d" begin="0.4s" dur="0.8s" keyTimes="0;0.25;1" repeatCount="indefinite" values="M12 10l4 7h-8Z;M12 4l9.25 16h-18.5Z;M12 4l9.25 16h-18.5Z"></svg:animate><svg:animate attributeName="opacity" begin="0.4s" dur="0.8s" keyTimes="0;0.1;0.75;1" repeatCount="indefinite" values="0;1;1;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdHazardLightsLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdHazardLightsOffFilledLoopIcon],svg[line-md-hazard-lights-off-filled-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdHazardLightsOffFilledLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="28" stroke-dashoffset="28" d="M12 10l4 7h-8Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path d="M12 10l4 7h-8Z" opacity="0"><svg:animate attributeName="d" begin="0.4s" dur="0.8s" keyTimes="0;0.25;1" repeatCount="indefinite" values="M12 10l4 7h-8Z;M12 4l9.25 16h-18.5Z;M12 4l9.25 16h-18.5Z"></svg:animate><svg:animate attributeName="opacity" begin="0.4s" dur="0.8s" keyTimes="0;0.1;0.75;1" repeatCount="indefinite" values="0;1;1;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M0 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M0 13h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdHazardLightsOffFilledLoop0)"></svg:rect>`,
})
export class LineMdHazardLightsOffFilledLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdHazardLightsOffLoopIcon],svg[line-md-hazard-lights-off-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdHazardLightsOffLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="2"><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M12 10l4 7h-8Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path d="M12 10l4 7h-8Z" opacity="0"><svg:animate attributeName="d" begin="0.4s" dur="0.8s" keyTimes="0;0.25;1" repeatCount="indefinite" values="M12 10l4 7h-8Z;M12 4l9.25 16h-18.5Z;M12 4l9.25 16h-18.5Z"></svg:animate><svg:animate attributeName="opacity" begin="0.4s" dur="0.8s" keyTimes="0;0.1;0.75;1" repeatCount="indefinite" values="0;1;1;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M0 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M0 13h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdHazardLightsOffLoop0)"></svg:rect>`,
})
export class LineMdHazardLightsOffLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdLightDarkLoopIcon],svg[line-md-light-dark-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="lineMdLightDarkLoop0"><svg:circle cx="7.5" cy="7.5" r="5.5" fill="#fff"></svg:circle><svg:circle cx="7.5" cy="7.5" r="5.5"><svg:animate fill="freeze" attributeName="cx" dur="0.4s" values="7.5;11"></svg:animate><svg:animate fill="freeze" attributeName="r" dur="0.4s" values="5.5;6.5"></svg:animate></svg:circle></svg:mask><svg:mask id="lineMdLightDarkLoop1"><svg:g fill="#fff"><svg:circle cx="12" cy="9" r="5.5"><svg:animate fill="freeze" attributeName="cy" begin="1s" dur="0.5s" values="9;15"></svg:animate></svg:circle><svg:g fill-opacity="0"><svg:use href="#lineMdLightDarkLoop2" transform="rotate(-75 12 15)"></svg:use><svg:use href="#lineMdLightDarkLoop2" transform="rotate(-25 12 15)"></svg:use><svg:use href="#lineMdLightDarkLoop2" transform="rotate(25 12 15)"></svg:use><svg:use href="#lineMdLightDarkLoop2" transform="rotate(75 12 15)"></svg:use><svg:set fill="freeze" attributeName="fill-opacity" begin="1.5s" to="1"></svg:set><svg:animatetransform attributeName="transform" dur="5s" repeatCount="indefinite" type="rotate" values="0 12 15;50 12 15"></svg:animatetransform></svg:g></svg:g><svg:path d="M0 10h26v5h-26z"></svg:path><svg:path stroke="#fff" stroke-dasharray="26" stroke-dashoffset="26" stroke-width="2" d="M22 12h-22"><svg:animate attributeName="d" dur="6s" repeatCount="indefinite" values="M22 12h-22;M24 12h-22;M22 12h-22"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="26;0"></svg:animate></svg:path></svg:mask><svg:symbol id="lineMdLightDarkLoop2"><svg:path d="M11 18h2L12 20z" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="1.5s" dur="0.4s" values="M11 18h2L12 20z;M10.5 21.5h3L12 24z"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="1.5s" to="1"></svg:set></svg:path></svg:symbol></svg:defs><svg:g fill="currentColor"><svg:rect width="13" height="13" x="1" y="1" mask="url(#lineMdLightDarkLoop0)"></svg:rect><svg:path d="M-2 11h28v13h-28z" mask="url(#lineMdLightDarkLoop1)" transform="rotate(-45 12 12)"></svg:path></svg:g>`,
})
export class LineMdLightDarkLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdLightbulbOffFilledLoopIcon],svg[line-md-lightbulb-off-filled-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdLightbulbOffFilledLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="48" stroke-dashoffset="48" d="M12 17h-3v-2.8c-1.79 -1.04 -3 -2.98 -3 -5.2c0 -3.31 2.69 -6 6 -6c3.31 0 6 2.69 6 6c0 2.22 -1.21 4.16 -3 5.2v2.8Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"></svg:animate></svg:path><svg:rect width="6" height="0" x="9" y="20" fill="#fff" stroke="none"><svg:animate fill="freeze" attributeName="height" begin="0.6s" dur="0.2s" values="0;2"></svg:animate></svg:rect><svg:path stroke="#000" stroke-dasharray="24" stroke-dashoffset="24" d="M1 11h22" transform="rotate(45 13 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.2s" values="24;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M0 13h22" transform="rotate(45 13 12)"><svg:animate attributeName="d" dur="6s" repeatCount="indefinite" values="M0 13h22;M2 13h22;M0 13h22"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.3s" dur="0.2s" values="24;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdLightbulbOffFilledLoop0)"></svg:rect>`,
})
export class LineMdLightbulbOffFilledLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdLightbulbOffLoopIcon],svg[line-md-lightbulb-off-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdLightbulbOffLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="48" stroke-dashoffset="48" d="M12 17h-3v-2.8c-1.79 -1.04 -3 -2.98 -3 -5.2c0 -3.31 2.69 -6 6 -6c3.31 0 6 2.69 6 6c0 2.22 -1.21 4.16 -3 5.2v2.8Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"></svg:animate></svg:path><svg:rect width="6" height="0" x="9" y="20" fill="#fff" stroke="none"><svg:animate fill="freeze" attributeName="height" begin="0.6s" dur="0.2s" values="0;2"></svg:animate></svg:rect><svg:path stroke="#000" stroke-dasharray="24" stroke-dashoffset="24" d="M1 11h22" transform="rotate(45 13 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="24;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M0 13h22" transform="rotate(45 13 12)"><svg:animate attributeName="d" dur="6s" repeatCount="indefinite" values="M0 13h22;M2 13h22;M0 13h22"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="24;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdLightbulbOffLoop0)"></svg:rect>`,
})
export class LineMdLightbulbOffLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdLightbulbOffTwotoneLoopIcon],svg[line-md-lightbulb-off-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdLightbulbOffTwotoneLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="48" stroke-dashoffset="48" d="M12 17h-3v-2.8c-1.79 -1.04 -3 -2.98 -3 -5.2c0 -3.31 2.69 -6 6 -6c3.31 0 6 2.69 6 6c0 2.22 -1.21 4.16 -3 5.2v2.8Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.8s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"></svg:animate></svg:path><svg:rect width="6" height="0" x="9" y="20" fill="#fff" stroke="none"><svg:animate fill="freeze" attributeName="height" begin="0.6s" dur="0.2s" values="0;2"></svg:animate></svg:rect><svg:path stroke="#000" stroke-dasharray="24" stroke-dashoffset="24" d="M1 11h22" transform="rotate(45 13 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.95s" dur="0.2s" values="24;0"></svg:animate></svg:path><svg:path stroke-dasharray="24" stroke-dashoffset="24" d="M0 13h22" transform="rotate(45 13 12)"><svg:animate attributeName="d" dur="6s" repeatCount="indefinite" values="M0 13h22;M2 13h22;M0 13h22"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.95s" dur="0.2s" values="24;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdLightbulbOffTwotoneLoop0)"></svg:rect>`,
})
export class LineMdLightbulbOffTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdLoadingAltLoopIcon],svg[line-md-loading-alt-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:circle cx="12" cy="3.5" r="1.5"><svg:animatetransform attributeName="transform" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="0 12 12;90 12 12;180 12 12;270 12 12"></svg:animatetransform><svg:animate attributeName="opacity" dur="0.6s" repeatCount="indefinite" values="1;1;0"></svg:animate></svg:circle><svg:circle cx="12" cy="3.5" r="1.5" transform="rotate(30 12 12)"><svg:animatetransform attributeName="transform" begin="0.2s" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="30 12 12;120 12 12;210 12 12;300 12 12"></svg:animatetransform><svg:animate attributeName="opacity" begin="0.2s" dur="0.6s" repeatCount="indefinite" values="1;1;0"></svg:animate></svg:circle><svg:circle cx="12" cy="3.5" r="1.5" transform="rotate(60 12 12)"><svg:animatetransform attributeName="transform" begin="0.4s" calcMode="discrete" dur="2.4s" repeatCount="indefinite" type="rotate" values="60 12 12;150 12 12;240 12 12;330 12 12"></svg:animatetransform><svg:animate attributeName="opacity" begin="0.4s" dur="0.6s" repeatCount="indefinite" values="1;1;0"></svg:animate></svg:circle></svg:g>`,
})
export class LineMdLoadingAltLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdLoadingLoopIcon],svg[line-md-loading-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-dasharray="16" stroke-dashoffset="16" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3c4.97 0 9 4.03 9 9"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.2s" values="16;0"></svg:animate><svg:animatetransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></svg:animatetransform></svg:path>`,
})
export class LineMdLoadingLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdLoadingTwotoneLoopIcon],svg[line-md-loading-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="16" stroke-dashoffset="16" d="M12 3c4.97 0 9 4.03 9 9"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="16;0"></svg:animate><svg:animatetransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></svg:animatetransform></svg:path><svg:path stroke-dasharray="64" stroke-dashoffset="64" stroke-opacity=".3" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="1.2s" values="64;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdLoadingTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdMapMarkerAltFilledLoopIcon],svg[line-md-map-marker-alt-filled-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdMapMarkerAltFilledLoop0"><svg:g fill="none" fill-opacity="0" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" d="M12 20.5C12 20.5 11 19 11 18C11 17.5 11.5 17 12 17C12.5 17 13 17.5 13 18C13 19 12 20.5 12 20.5z"><svg:animate fill="freeze" attributeName="d" dur="0.4s" keyTimes="0;0.7;1" values="M12 20.5C12 20.5 11 19 11 18C11 17.5 11.5 17 12 17C12.5 17 13 17.5 13 18C13 19 12 20.5 12 20.5z;M12 20.5C12 20.5 5 13 5 8C5 4.5 8 1 12 1C16 1 19 4.5 19 8C19 13 12 20.5 12 20.5z;M12 20.5C12 20.5 6 13.5 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9C18 13.5 12 20.5 12 20.5z"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.5s" dur="0.5s" values="0;1"></svg:animate><svg:animatetransform attributeName="transform" dur="3s" keyTimes="0;0.3;0.4;0.54;0.6;0.68;0.7;1" repeatCount="indefinite" type="rotate" values="0 12 20.5;0 12 20.5;-8 12 20.5;0 12 20.5;5 12 20.5;-2 12 20.5;0 12 20.5;0 12 20.5"></svg:animatetransform></svg:path><svg:circle cx="12" cy="9" r="2.5" fill="#000" stroke="none"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.5s" values="0;1"></svg:animate></svg:circle></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdMapMarkerAltFilledLoop0)"></svg:rect>`,
})
export class LineMdMapMarkerAltFilledLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdMapMarkerAltLoopIcon],svg[line-md-map-marker-alt-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="9" r="2.5" fill="currentColor" fill-opacity="0"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.5s" dur="0.15s" values="0;1"></svg:animate></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 20.5C12 20.5 11 19 11 18C11 17.5 11.5 17 12 17C12.5 17 13 17.5 13 18C13 19 12 20.5 12 20.5z"><svg:animate fill="freeze" attributeName="d" dur="0.4s" keyTimes="0;0.7;1" values="M12 20.5C12 20.5 11 19 11 18C11 17.5 11.5 17 12 17C12.5 17 13 17.5 13 18C13 19 12 20.5 12 20.5z;M12 20.5C12 20.5 5 13 5 8C5 4.5 8 1 12 1C16 1 19 4.5 19 8C19 13 12 20.5 12 20.5z;M12 20.5C12 20.5 6 13.5 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9C18 13.5 12 20.5 12 20.5z"></svg:animate><svg:animatetransform attributeName="transform" dur="3s" keyTimes="0;0.3;0.4;0.54;0.6;0.68;0.7;1" repeatCount="indefinite" type="rotate" values="0 12 20.5;0 12 20.5;-8 12 20.5;0 12 20.5;5 12 20.5;-2 12 20.5;0 12 20.5;0 12 20.5"></svg:animatetransform></svg:path>`,
})
export class LineMdMapMarkerAltLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdMapMarkerAltOffFilledLoopIcon],svg[line-md-map-marker-alt-off-filled-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdMapMarkerAltOffFilledLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" d="M12 20.5C12 20.5 11 19 11 18C11 17.5 11.5 17 12 17C12.5 17 13 17.5 13 18C13 19 12 20.5 12 20.5z"><svg:animate fill="freeze" attributeName="d" dur="0.4s" keyTimes="0;0.7;1" values="M12 20.5C12 20.5 11 19 11 18C11 17.5 11.5 17 12 17C12.5 17 13 17.5 13 18C13 19 12 20.5 12 20.5z;M12 20.5C12 20.5 5 13 5 8C5 4.5 8 1 12 1C16 1 19 4.5 19 8C19 13 12 20.5 12 20.5z;M12 20.5C12 20.5 6 13.5 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9C18 13.5 12 20.5 12 20.5z"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.5s" dur="0.5s" values="0;1"></svg:animate><svg:animatetransform attributeName="transform" dur="3s" keyTimes="0;0.3;0.4;0.54;0.6;0.68;0.7;1" repeatCount="indefinite" type="rotate" values="0 12 20.5;0 12 20.5;-8 12 20.5;0 12 20.5;5 12 20.5;-2 12 20.5;0 12 20.5;0 12 20.5"></svg:animatetransform></svg:path><svg:circle cx="12" cy="9" r="2.5" fill="#000" fill-opacity="0" stroke="none"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.5s" values="0;1"></svg:animate></svg:circle><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-2 13h26" transform="rotate(45 12 12)"><svg:animate attributeName="d" dur="6s" repeatCount="indefinite" values="M-2 13h26;M0 13h26;M-2 13h26"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdMapMarkerAltOffFilledLoop0)"></svg:rect>`,
})
export class LineMdMapMarkerAltOffFilledLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdMapMarkerAltOffLoopIcon],svg[line-md-map-marker-alt-off-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdMapMarkerAltOffLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M12 20.5C12 20.5 11 19 11 18C11 17.5 11.5 17 12 17C12.5 17 13 17.5 13 18C13 19 12 20.5 12 20.5z"><svg:animate fill="freeze" attributeName="d" dur="0.4s" keyTimes="0;0.7;1" values="M12 20.5C12 20.5 11 19 11 18C11 17.5 11.5 17 12 17C12.5 17 13 17.5 13 18C13 19 12 20.5 12 20.5z;M12 20.5C12 20.5 5 13 5 8C5 4.5 8 1 12 1C16 1 19 4.5 19 8C19 13 12 20.5 12 20.5z;M12 20.5C12 20.5 6 13.5 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9C18 13.5 12 20.5 12 20.5z"></svg:animate><svg:animatetransform attributeName="transform" dur="3s" keyTimes="0;0.3;0.4;0.54;0.6;0.68;0.7;1" repeatCount="indefinite" type="rotate" values="0 12 20.5;0 12 20.5;-8 12 20.5;0 12 20.5;5 12 20.5;-2 12 20.5;0 12 20.5;0 12 20.5"></svg:animatetransform></svg:path><svg:circle cx="12" cy="9" r="2.5" fill="#fff" fill-opacity="0" stroke="none"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.5s" dur="0.15s" values="0;1"></svg:animate></svg:circle><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.65s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-2 13h26" transform="rotate(45 12 12)"><svg:animate attributeName="d" dur="6s" repeatCount="indefinite" values="M-2 13h26;M0 13h26;M-2 13h26"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.65s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdMapMarkerAltOffLoop0)"></svg:rect>`,
})
export class LineMdMapMarkerAltOffLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdMapMarkerAltOffTwotoneLoopIcon],svg[line-md-map-marker-alt-off-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdMapMarkerAltOffTwotoneLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" d="M12 20.5C12 20.5 11 19 11 18C11 17.5 11.5 17 12 17C12.5 17 13 17.5 13 18C13 19 12 20.5 12 20.5z"><svg:animate fill="freeze" attributeName="d" dur="0.4s" keyTimes="0;0.7;1" values="M12 20.5C12 20.5 11 19 11 18C11 17.5 11.5 17 12 17C12.5 17 13 17.5 13 18C13 19 12 20.5 12 20.5z;M12 20.5C12 20.5 5 13 5 8C5 4.5 8 1 12 1C16 1 19 4.5 19 8C19 13 12 20.5 12 20.5z;M12 20.5C12 20.5 6 13.5 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9C18 13.5 12 20.5 12 20.5z"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.5s" dur="0.15s" values="0;0.3"></svg:animate><svg:animatetransform attributeName="transform" dur="3s" keyTimes="0;0.3;0.4;0.54;0.6;0.68;0.7;1" repeatCount="indefinite" type="rotate" values="0 12 20.5;0 12 20.5;-8 12 20.5;0 12 20.5;5 12 20.5;-2 12 20.5;0 12 20.5;0 12 20.5"></svg:animatetransform></svg:path><svg:circle cx="12" cy="9" r="2.5" fill="#fff" fill-opacity="0" stroke="none"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.65s" dur="0.15s" values="0;1"></svg:animate></svg:circle><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-2 13h26" transform="rotate(45 12 12)"><svg:animate attributeName="d" dur="6s" repeatCount="indefinite" values="M-2 13h26;M0 13h26;M-2 13h26"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdMapMarkerAltOffTwotoneLoop0)"></svg:rect>`,
})
export class LineMdMapMarkerAltOffTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdMapMarkerAltTwotoneLoopIcon],svg[line-md-map-marker-alt-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="9" r="2.5" fill="currentColor" fill-opacity="0"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.65s" dur="0.15s" values="0;1"></svg:animate></svg:circle><svg:path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 20.5C12 20.5 11 19 11 18C11 17.5 11.5 17 12 17C12.5 17 13 17.5 13 18C13 19 12 20.5 12 20.5z"><svg:animate fill="freeze" attributeName="d" dur="0.4s" keyTimes="0;0.7;1" values="M12 20.5C12 20.5 11 19 11 18C11 17.5 11.5 17 12 17C12.5 17 13 17.5 13 18C13 19 12 20.5 12 20.5z;M12 20.5C12 20.5 5 13 5 8C5 4.5 8 1 12 1C16 1 19 4.5 19 8C19 13 12 20.5 12 20.5z;M12 20.5C12 20.5 6 13.5 6 9C6 5.68629 8.68629 3 12 3C15.3137 3 18 5.68629 18 9C18 13.5 12 20.5 12 20.5z"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.5s" dur="0.15s" values="0;0.3"></svg:animate><svg:animatetransform attributeName="transform" dur="3s" keyTimes="0;0.3;0.4;0.54;0.6;0.68;0.7;1" repeatCount="indefinite" type="rotate" values="0 12 20.5;0 12 20.5;-8 12 20.5;0 12 20.5;5 12 20.5;-2 12 20.5;0 12 20.5;0 12 20.5"></svg:animatetransform></svg:path>`,
})
export class LineMdMapMarkerAltTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdMapMarkerFilledLoopIcon],svg[line-md-map-marker-filled-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdMapMarkerFilledLoop0"><svg:g fill="none" fill-opacity="0" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" stroke-dasharray="48" stroke-dashoffset="48" d="M12 20.5c0 0 -6 -7 -6 -11.5c0 -3.31 2.69 -6 6 -6c3.31 0 6 2.69 6 6c0 4.5 -6 11.5 -6 11.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"></svg:animate><svg:animatetransform attributeName="transform" dur="3s" keyTimes="0;0.3;0.4;0.54;0.6;0.68;0.7;1" repeatCount="indefinite" type="rotate" values="0 12 20.5;0 12 20.5;-8 12 20.5;0 12 20.5;5 12 20.5;-2 12 20.5;0 12 20.5;0 12 20.5"></svg:animatetransform></svg:path><svg:circle cx="12" cy="9" r="2.5" fill="#000" stroke="none"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.5s" values="0;1"></svg:animate></svg:circle></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdMapMarkerFilledLoop0)"></svg:rect>`,
})
export class LineMdMapMarkerFilledLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdMapMarkerLoopIcon],svg[line-md-map-marker-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="9" r="2.5" fill="currentColor" fill-opacity="0"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.15s" values="0;1"></svg:animate></svg:circle><svg:path fill="none" stroke="currentColor" stroke-dasharray="48" stroke-dashoffset="48" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 20.5c0 0 -6 -7 -6 -11.5c0 -3.31 2.69 -6 6 -6c3.31 0 6 2.69 6 6c0 4.5 -6 11.5 -6 11.5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"></svg:animate><svg:animatetransform attributeName="transform" dur="3s" keyTimes="0;0.3;0.4;0.54;0.6;0.68;0.7;1" repeatCount="indefinite" type="rotate" values="0 12 20.5;0 12 20.5;-8 12 20.5;0 12 20.5;5 12 20.5;-2 12 20.5;0 12 20.5;0 12 20.5"></svg:animatetransform></svg:path>`,
})
export class LineMdMapMarkerLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdMapMarkerOffFilledLoopIcon],svg[line-md-map-marker-off-filled-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdMapMarkerOffFilledLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="48" stroke-dashoffset="48" d="M12 20.5c0 0 -6 -7 -6 -11.5c0 -3.31 2.69 -6 6 -6c3.31 0 6 2.69 6 6c0 4.5 -6 11.5 -6 11.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"></svg:animate><svg:animatetransform attributeName="transform" dur="3s" keyTimes="0;0.3;0.4;0.54;0.6;0.68;0.7;1" repeatCount="indefinite" type="rotate" values="0 12 20.5;0 12 20.5;-8 12 20.5;0 12 20.5;5 12 20.5;-2 12 20.5;0 12 20.5;0 12 20.5"></svg:animatetransform></svg:path><svg:circle cx="12" cy="9" r="2.5" fill="#000" fill-opacity="0" stroke="none"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.5s" values="0;1"></svg:animate></svg:circle><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.7s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-2 13h26" transform="rotate(45 12 12)"><svg:animate attributeName="d" dur="6s" repeatCount="indefinite" values="M-2 13h26;M0 13h26;M-2 13h26"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.7s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdMapMarkerOffFilledLoop0)"></svg:rect>`,
})
export class LineMdMapMarkerOffFilledLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdMapMarkerOffLoopIcon],svg[line-md-map-marker-off-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdMapMarkerOffLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="48" stroke-dashoffset="48" d="M12 20.5c0 0 -6 -7 -6 -11.5c0 -3.31 2.69 -6 6 -6c3.31 0 6 2.69 6 6c0 4.5 -6 11.5 -6 11.5Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"></svg:animate><svg:animatetransform attributeName="transform" dur="3s" keyTimes="0;0.3;0.4;0.54;0.6;0.68;0.7;1" repeatCount="indefinite" type="rotate" values="0 12 20.5;0 12 20.5;-8 12 20.5;0 12 20.5;5 12 20.5;-2 12 20.5;0 12 20.5;0 12 20.5"></svg:animatetransform></svg:path><svg:circle cx="12" cy="9" r="2.5" fill="#fff" fill-opacity="0" stroke="none"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.15s" values="0;1"></svg:animate></svg:circle><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.85s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-2 13h26" transform="rotate(45 12 12)"><svg:animate attributeName="d" dur="6s" repeatCount="indefinite" values="M-2 13h26;M0 13h26;M-2 13h26"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.85s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdMapMarkerOffLoop0)"></svg:rect>`,
})
export class LineMdMapMarkerOffLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdMapMarkerOffTwotoneLoopIcon],svg[line-md-map-marker-off-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdMapMarkerOffTwotoneLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="48" stroke-dashoffset="48" d="M12 20.5c0 0 -6 -7 -6 -11.5c0 -3.31 2.69 -6 6 -6c3.31 0 6 2.69 6 6c0 4.5 -6 11.5 -6 11.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"></svg:animate><svg:animatetransform attributeName="transform" dur="3s" keyTimes="0;0.3;0.4;0.54;0.6;0.68;0.7;1" repeatCount="indefinite" type="rotate" values="0 12 20.5;0 12 20.5;-8 12 20.5;0 12 20.5;5 12 20.5;-2 12 20.5;0 12 20.5;0 12 20.5"></svg:animatetransform></svg:path><svg:circle cx="12" cy="9" r="2.5" fill="#fff" fill-opacity="0" stroke="none"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.85s" dur="0.15s" values="0;1"></svg:animate></svg:circle><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-2 13h26" transform="rotate(45 12 12)"><svg:animate attributeName="d" dur="6s" repeatCount="indefinite" values="M-2 13h26;M0 13h26;M-2 13h26"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdMapMarkerOffTwotoneLoop0)"></svg:rect>`,
})
export class LineMdMapMarkerOffTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdMapMarkerTwotoneLoopIcon],svg[line-md-map-marker-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="9" r="2.5" fill="currentColor" fill-opacity="0"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.85s" dur="0.15s" values="0;1"></svg:animate></svg:circle><svg:path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-dasharray="48" stroke-dashoffset="48" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 20.5c0 0 -6 -7 -6 -11.5c0 -3.31 2.69 -6 6 -6c3.31 0 6 2.69 6 6c0 4.5 -6 11.5 -6 11.5Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"></svg:animate><svg:animatetransform attributeName="transform" dur="3s" keyTimes="0;0.3;0.4;0.54;0.6;0.68;0.7;1" repeatCount="indefinite" type="rotate" values="0 12 20.5;0 12 20.5;-8 12 20.5;0 12 20.5;5 12 20.5;-2 12 20.5;0 12 20.5;0 12 20.5"></svg:animatetransform></svg:path>`,
})
export class LineMdMapMarkerTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdMoonAltLoopIcon],svg[line-md-moon-alt-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-dasharray="4" stroke-dashoffset="4" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5"><svg:animate id="lineMdMoonAltLoop0" fill="freeze" attributeName="stroke-dashoffset" begin="0.7s;lineMdMoonAltLoop0.begin+6s" dur="0.4s" values="4;0"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonAltLoop0.begin+2s;lineMdMoonAltLoop0.begin+4s" dur="0.4s" values="4;0"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonAltLoop0.begin+1.2s;lineMdMoonAltLoop0.begin+3.2s;lineMdMoonAltLoop0.begin+5.2s" dur="0.4s" values="0;4"></svg:animate><svg:set fill="freeze" attributeName="d" begin="lineMdMoonAltLoop0.begin+1.8s" to="M12 5h1.5M12 5h-1.5M12 5v1.5M12 5v-1.5"></svg:set><svg:set fill="freeze" attributeName="d" begin="lineMdMoonAltLoop0.begin+3.8s" to="M12 4h1.5M12 4h-1.5M12 4v1.5M12 4v-1.5"></svg:set><svg:set fill="freeze" attributeName="d" begin="lineMdMoonAltLoop0.begin+5.8s" to="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5"></svg:set></svg:path><svg:path d="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5"><svg:animate id="lineMdMoonAltLoop1" fill="freeze" attributeName="stroke-dashoffset" begin="1.1s;lineMdMoonAltLoop1.begin+6s" dur="0.4s" values="4;0"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonAltLoop1.begin+2s;lineMdMoonAltLoop1.begin+4s" dur="0.4s" values="4;0"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonAltLoop1.begin+1.2s;lineMdMoonAltLoop1.begin+3.2s;lineMdMoonAltLoop1.begin+5.2s" dur="0.4s" values="0;4"></svg:animate><svg:set fill="freeze" attributeName="d" begin="lineMdMoonAltLoop1.begin+1.8s" to="M17 11h1.5M17 11h-1.5M17 11v1.5M17 11v-1.5"></svg:set><svg:set fill="freeze" attributeName="d" begin="lineMdMoonAltLoop1.begin+3.8s" to="M18 12h1.5M18 12h-1.5M18 12v1.5M18 12v-1.5"></svg:set><svg:set fill="freeze" attributeName="d" begin="lineMdMoonAltLoop1.begin+5.8s" to="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5"></svg:set></svg:path><svg:path d="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5"><svg:animate id="lineMdMoonAltLoop2" fill="freeze" attributeName="stroke-dashoffset" begin="2s;lineMdMoonAltLoop2.begin+6s" dur="0.4s" values="4;0"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonAltLoop2.begin+2s" dur="0.4s" values="4;0"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonAltLoop2.begin+1.2s;lineMdMoonAltLoop2.begin+3.2s" dur="0.4s" values="0;4"></svg:animate><svg:set fill="freeze" attributeName="d" begin="lineMdMoonAltLoop2.begin+1.8s" to="M20 5h1.5M20 5h-1.5M20 5v1.5M20 5v-1.5"></svg:set><svg:set fill="freeze" attributeName="d" begin="lineMdMoonAltLoop2.begin+5.8s" to="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5"></svg:set></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-dasharray="56" stroke-dashoffset="56" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path>`,
})
export class LineMdMoonAltLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdMoonFilledAltLoopIcon],svg[line-md-moon-filled-alt-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-dasharray="4" stroke-dashoffset="4" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5"><svg:animate id="lineMdMoonFilledAltLoop0" fill="freeze" attributeName="stroke-dashoffset" begin="0.7s;lineMdMoonFilledAltLoop0.begin+6s" dur="0.4s" values="4;0"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonFilledAltLoop0.begin+2s;lineMdMoonFilledAltLoop0.begin+4s" dur="0.4s" values="4;0"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonFilledAltLoop0.begin+1.2s;lineMdMoonFilledAltLoop0.begin+3.2s;lineMdMoonFilledAltLoop0.begin+5.2s" dur="0.4s" values="0;4"></svg:animate><svg:set fill="freeze" attributeName="d" begin="lineMdMoonFilledAltLoop0.begin+1.8s" to="M12 5h1.5M12 5h-1.5M12 5v1.5M12 5v-1.5"></svg:set><svg:set fill="freeze" attributeName="d" begin="lineMdMoonFilledAltLoop0.begin+3.8s" to="M12 4h1.5M12 4h-1.5M12 4v1.5M12 4v-1.5"></svg:set><svg:set fill="freeze" attributeName="d" begin="lineMdMoonFilledAltLoop0.begin+5.8s" to="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5"></svg:set></svg:path><svg:path d="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5"><svg:animate id="lineMdMoonFilledAltLoop1" fill="freeze" attributeName="stroke-dashoffset" begin="1.1s;lineMdMoonFilledAltLoop1.begin+6s" dur="0.4s" values="4;0"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonFilledAltLoop1.begin+2s;lineMdMoonFilledAltLoop1.begin+4s" dur="0.4s" values="4;0"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonFilledAltLoop1.begin+1.2s;lineMdMoonFilledAltLoop1.begin+3.2s;lineMdMoonFilledAltLoop1.begin+5.2s" dur="0.4s" values="0;4"></svg:animate><svg:set fill="freeze" attributeName="d" begin="lineMdMoonFilledAltLoop1.begin+1.8s" to="M17 11h1.5M17 11h-1.5M17 11v1.5M17 11v-1.5"></svg:set><svg:set fill="freeze" attributeName="d" begin="lineMdMoonFilledAltLoop1.begin+3.8s" to="M18 12h1.5M18 12h-1.5M18 12v1.5M18 12v-1.5"></svg:set><svg:set fill="freeze" attributeName="d" begin="lineMdMoonFilledAltLoop1.begin+5.8s" to="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5"></svg:set></svg:path><svg:path d="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5"><svg:animate id="lineMdMoonFilledAltLoop2" fill="freeze" attributeName="stroke-dashoffset" begin="2s;lineMdMoonFilledAltLoop2.begin+6s" dur="0.4s" values="4;0"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonFilledAltLoop2.begin+2s" dur="0.4s" values="4;0"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonFilledAltLoop2.begin+1.2s;lineMdMoonFilledAltLoop2.begin+3.2s" dur="0.4s" values="0;4"></svg:animate><svg:set fill="freeze" attributeName="d" begin="lineMdMoonFilledAltLoop2.begin+1.8s" to="M20 5h1.5M20 5h-1.5M20 5v1.5M20 5v-1.5"></svg:set><svg:set fill="freeze" attributeName="d" begin="lineMdMoonFilledAltLoop2.begin+5.8s" to="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5"></svg:set></svg:path></svg:g><svg:path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-dasharray="56" stroke-dashoffset="56" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.5s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path>`,
})
export class LineMdMoonFilledAltLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdMoonFilledLoopIcon],svg[line-md-moon-filled-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-opacity="0"><svg:path d="M15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z"><svg:animate id="lineMdMoonFilledLoop0" fill="freeze" attributeName="fill-opacity" begin="0.7s;lineMdMoonFilledLoop0.begin+6s" dur="0.4s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonFilledLoop0.begin+2.2s" dur="0.4s" values="1;0"></svg:animate></svg:path><svg:path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonFilledLoop0.begin+3s" dur="0.4s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonFilledLoop0.begin+5.2s" dur="0.4s" values="1;0"></svg:animate></svg:path><svg:path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonFilledLoop0.begin+0.4s" dur="0.4s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonFilledLoop0.begin+2.8s" dur="0.4s" values="1;0"></svg:animate></svg:path><svg:path d="M20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonFilledLoop0.begin+3.4s" dur="0.4s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonFilledLoop0.begin+5.6s" dur="0.4s" values="1;0"></svg:animate></svg:path></svg:g><svg:path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-dasharray="56" stroke-dashoffset="56" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.5s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path>`,
})
export class LineMdMoonFilledLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdMoonLoopIcon],svg[line-md-moon-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-opacity="0"><svg:path d="M15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z"><svg:animate id="lineMdMoonLoop0" fill="freeze" attributeName="fill-opacity" begin="0.7s;lineMdMoonLoop0.begin+6s" dur="0.4s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonLoop0.begin+2.2s" dur="0.4s" values="1;0"></svg:animate></svg:path><svg:path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonLoop0.begin+3s" dur="0.4s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonLoop0.begin+5.2s" dur="0.4s" values="1;0"></svg:animate></svg:path><svg:path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonLoop0.begin+0.4s" dur="0.4s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonLoop0.begin+2.8s" dur="0.4s" values="1;0"></svg:animate></svg:path><svg:path d="M20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonLoop0.begin+3.4s" dur="0.4s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonLoop0.begin+5.6s" dur="0.4s" values="1;0"></svg:animate></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-dasharray="56" stroke-dashoffset="56" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path>`,
})
export class LineMdMoonLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdMoonRisingAltLoopIcon],svg[line-md-moon-rising-alt-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-dasharray="4" stroke-dashoffset="4" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5"><svg:animate id="lineMdMoonRisingAltLoop0" fill="freeze" attributeName="stroke-dashoffset" begin="0.7s;lineMdMoonRisingAltLoop0.begin+6s" dur="0.4s" values="4;0"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonRisingAltLoop0.begin+2s;lineMdMoonRisingAltLoop0.begin+4s" dur="0.4s" values="4;0"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonRisingAltLoop0.begin+1.2s;lineMdMoonRisingAltLoop0.begin+3.2s;lineMdMoonRisingAltLoop0.begin+5.2s" dur="0.4s" values="0;4"></svg:animate><svg:set fill="freeze" attributeName="d" begin="lineMdMoonRisingAltLoop0.begin+1.8s" to="M12 5h1.5M12 5h-1.5M12 5v1.5M12 5v-1.5"></svg:set><svg:set fill="freeze" attributeName="d" begin="lineMdMoonRisingAltLoop0.begin+3.8s" to="M12 4h1.5M12 4h-1.5M12 4v1.5M12 4v-1.5"></svg:set><svg:set fill="freeze" attributeName="d" begin="lineMdMoonRisingAltLoop0.begin+5.8s" to="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5"></svg:set></svg:path><svg:path d="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5"><svg:animate id="lineMdMoonRisingAltLoop1" fill="freeze" attributeName="stroke-dashoffset" begin="1.1s;lineMdMoonRisingAltLoop1.begin+6s" dur="0.4s" values="4;0"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonRisingAltLoop1.begin+2s;lineMdMoonRisingAltLoop1.begin+4s" dur="0.4s" values="4;0"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonRisingAltLoop1.begin+1.2s;lineMdMoonRisingAltLoop1.begin+3.2s;lineMdMoonRisingAltLoop1.begin+5.2s" dur="0.4s" values="0;4"></svg:animate><svg:set fill="freeze" attributeName="d" begin="lineMdMoonRisingAltLoop1.begin+1.8s" to="M17 11h1.5M17 11h-1.5M17 11v1.5M17 11v-1.5"></svg:set><svg:set fill="freeze" attributeName="d" begin="lineMdMoonRisingAltLoop1.begin+3.8s" to="M18 12h1.5M18 12h-1.5M18 12v1.5M18 12v-1.5"></svg:set><svg:set fill="freeze" attributeName="d" begin="lineMdMoonRisingAltLoop1.begin+5.8s" to="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5"></svg:set></svg:path><svg:path d="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5"><svg:animate id="lineMdMoonRisingAltLoop2" fill="freeze" attributeName="stroke-dashoffset" begin="2s;lineMdMoonRisingAltLoop2.begin+6s" dur="0.4s" values="4;0"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonRisingAltLoop2.begin+2s" dur="0.4s" values="4;0"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonRisingAltLoop2.begin+1.2s;lineMdMoonRisingAltLoop2.begin+3.2s" dur="0.4s" values="0;4"></svg:animate><svg:set fill="freeze" attributeName="d" begin="lineMdMoonRisingAltLoop2.begin+1.8s" to="M20 5h1.5M20 5h-1.5M20 5v1.5M20 5v-1.5"></svg:set><svg:set fill="freeze" attributeName="d" begin="lineMdMoonRisingAltLoop2.begin+5.8s" to="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5"></svg:set></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" transform="translate(0 22)"><svg:animatemotion fill="freeze" calcMode="linear" dur="0.6s" path="M0 0v-22"></svg:animatemotion></svg:path>`,
})
export class LineMdMoonRisingAltLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdMoonRisingFilledAltLoopIcon],svg[line-md-moon-rising-filled-alt-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-dasharray="4" stroke-dashoffset="4" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5"><svg:animate id="lineMdMoonRisingFilledAltLoop0" fill="freeze" attributeName="stroke-dashoffset" begin="0.7s;lineMdMoonRisingFilledAltLoop0.begin+6s" dur="0.4s" values="4;0"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonRisingFilledAltLoop0.begin+2s;lineMdMoonRisingFilledAltLoop0.begin+4s" dur="0.4s" values="4;0"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonRisingFilledAltLoop0.begin+1.2s;lineMdMoonRisingFilledAltLoop0.begin+3.2s;lineMdMoonRisingFilledAltLoop0.begin+5.2s" dur="0.4s" values="0;4"></svg:animate><svg:set fill="freeze" attributeName="d" begin="lineMdMoonRisingFilledAltLoop0.begin+1.8s" to="M12 5h1.5M12 5h-1.5M12 5v1.5M12 5v-1.5"></svg:set><svg:set fill="freeze" attributeName="d" begin="lineMdMoonRisingFilledAltLoop0.begin+3.8s" to="M12 4h1.5M12 4h-1.5M12 4v1.5M12 4v-1.5"></svg:set><svg:set fill="freeze" attributeName="d" begin="lineMdMoonRisingFilledAltLoop0.begin+5.8s" to="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5"></svg:set></svg:path><svg:path d="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5"><svg:animate id="lineMdMoonRisingFilledAltLoop1" fill="freeze" attributeName="stroke-dashoffset" begin="1.1s;lineMdMoonRisingFilledAltLoop1.begin+6s" dur="0.4s" values="4;0"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonRisingFilledAltLoop1.begin+2s;lineMdMoonRisingFilledAltLoop1.begin+4s" dur="0.4s" values="4;0"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonRisingFilledAltLoop1.begin+1.2s;lineMdMoonRisingFilledAltLoop1.begin+3.2s;lineMdMoonRisingFilledAltLoop1.begin+5.2s" dur="0.4s" values="0;4"></svg:animate><svg:set fill="freeze" attributeName="d" begin="lineMdMoonRisingFilledAltLoop1.begin+1.8s" to="M17 11h1.5M17 11h-1.5M17 11v1.5M17 11v-1.5"></svg:set><svg:set fill="freeze" attributeName="d" begin="lineMdMoonRisingFilledAltLoop1.begin+3.8s" to="M18 12h1.5M18 12h-1.5M18 12v1.5M18 12v-1.5"></svg:set><svg:set fill="freeze" attributeName="d" begin="lineMdMoonRisingFilledAltLoop1.begin+5.8s" to="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5"></svg:set></svg:path><svg:path d="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5"><svg:animate id="lineMdMoonRisingFilledAltLoop2" fill="freeze" attributeName="stroke-dashoffset" begin="2s;lineMdMoonRisingFilledAltLoop2.begin+6s" dur="0.4s" values="4;0"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonRisingFilledAltLoop2.begin+2s" dur="0.4s" values="4;0"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonRisingFilledAltLoop2.begin+1.2s;lineMdMoonRisingFilledAltLoop2.begin+3.2s" dur="0.4s" values="0;4"></svg:animate><svg:set fill="freeze" attributeName="d" begin="lineMdMoonRisingFilledAltLoop2.begin+1.8s" to="M20 5h1.5M20 5h-1.5M20 5v1.5M20 5v-1.5"></svg:set><svg:set fill="freeze" attributeName="d" begin="lineMdMoonRisingFilledAltLoop2.begin+5.8s" to="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5"></svg:set></svg:path></svg:g><svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" transform="translate(0 22)"><svg:animatemotion fill="freeze" calcMode="linear" dur="0.6s" path="M0 0v-22"></svg:animatemotion></svg:path>`,
})
export class LineMdMoonRisingFilledAltLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdMoonRisingFilledLoopIcon],svg[line-md-moon-rising-filled-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-opacity="0"><svg:path d="M15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z"><svg:animate id="lineMdMoonRisingFilledLoop0" fill="freeze" attributeName="fill-opacity" begin="0.7s;lineMdMoonRisingFilledLoop0.begin+6s" dur="0.4s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingFilledLoop0.begin+2.2s" dur="0.4s" values="1;0"></svg:animate></svg:path><svg:path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingFilledLoop0.begin+3s" dur="0.4s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingFilledLoop0.begin+5.2s" dur="0.4s" values="1;0"></svg:animate></svg:path><svg:path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingFilledLoop0.begin+0.4s" dur="0.4s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingFilledLoop0.begin+2.8s" dur="0.4s" values="1;0"></svg:animate></svg:path><svg:path d="M20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingFilledLoop0.begin+3.4s" dur="0.4s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingFilledLoop0.begin+5.6s" dur="0.4s" values="1;0"></svg:animate></svg:path></svg:g><svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" transform="translate(0 22)"><svg:animatemotion fill="freeze" calcMode="linear" dur="0.6s" path="M0 0v-22"></svg:animatemotion></svg:path>`,
})
export class LineMdMoonRisingFilledLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdMoonRisingLoopIcon],svg[line-md-moon-rising-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-opacity="0"><svg:path d="M15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z"><svg:animate id="lineMdMoonRisingLoop0" fill="freeze" attributeName="fill-opacity" begin="0.7s;lineMdMoonRisingLoop0.begin+6s" dur="0.4s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingLoop0.begin+2.2s" dur="0.4s" values="1;0"></svg:animate></svg:path><svg:path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingLoop0.begin+3s" dur="0.4s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingLoop0.begin+5.2s" dur="0.4s" values="1;0"></svg:animate></svg:path><svg:path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingLoop0.begin+0.4s" dur="0.4s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingLoop0.begin+2.8s" dur="0.4s" values="1;0"></svg:animate></svg:path><svg:path d="M20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingLoop0.begin+3.4s" dur="0.4s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingLoop0.begin+5.6s" dur="0.4s" values="1;0"></svg:animate></svg:path></svg:g><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" transform="translate(0 22)"><svg:animatemotion fill="freeze" calcMode="linear" dur="0.6s" path="M0 0v-22"></svg:animatemotion></svg:path>`,
})
export class LineMdMoonRisingLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdMoonRisingTwotoneAltLoopIcon],svg[line-md-moon-rising-twotone-alt-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-dasharray="4" stroke-dashoffset="4" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5"><svg:animate id="lineMdMoonRisingTwotoneAltLoop0" fill="freeze" attributeName="stroke-dashoffset" begin="0.7s;lineMdMoonRisingTwotoneAltLoop0.begin+6s" dur="0.4s" values="4;0"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonRisingTwotoneAltLoop0.begin+2s;lineMdMoonRisingTwotoneAltLoop0.begin+4s" dur="0.4s" values="4;0"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonRisingTwotoneAltLoop0.begin+1.2s;lineMdMoonRisingTwotoneAltLoop0.begin+3.2s;lineMdMoonRisingTwotoneAltLoop0.begin+5.2s" dur="0.4s" values="0;4"></svg:animate><svg:set fill="freeze" attributeName="d" begin="lineMdMoonRisingTwotoneAltLoop0.begin+1.8s" to="M12 5h1.5M12 5h-1.5M12 5v1.5M12 5v-1.5"></svg:set><svg:set fill="freeze" attributeName="d" begin="lineMdMoonRisingTwotoneAltLoop0.begin+3.8s" to="M12 4h1.5M12 4h-1.5M12 4v1.5M12 4v-1.5"></svg:set><svg:set fill="freeze" attributeName="d" begin="lineMdMoonRisingTwotoneAltLoop0.begin+5.8s" to="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5"></svg:set></svg:path><svg:path d="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5"><svg:animate id="lineMdMoonRisingTwotoneAltLoop1" fill="freeze" attributeName="stroke-dashoffset" begin="1.1s;lineMdMoonRisingTwotoneAltLoop1.begin+6s" dur="0.4s" values="4;0"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonRisingTwotoneAltLoop1.begin+2s;lineMdMoonRisingTwotoneAltLoop1.begin+4s" dur="0.4s" values="4;0"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonRisingTwotoneAltLoop1.begin+1.2s;lineMdMoonRisingTwotoneAltLoop1.begin+3.2s;lineMdMoonRisingTwotoneAltLoop1.begin+5.2s" dur="0.4s" values="0;4"></svg:animate><svg:set fill="freeze" attributeName="d" begin="lineMdMoonRisingTwotoneAltLoop1.begin+1.8s" to="M17 11h1.5M17 11h-1.5M17 11v1.5M17 11v-1.5"></svg:set><svg:set fill="freeze" attributeName="d" begin="lineMdMoonRisingTwotoneAltLoop1.begin+3.8s" to="M18 12h1.5M18 12h-1.5M18 12v1.5M18 12v-1.5"></svg:set><svg:set fill="freeze" attributeName="d" begin="lineMdMoonRisingTwotoneAltLoop1.begin+5.8s" to="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5"></svg:set></svg:path><svg:path d="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5"><svg:animate id="lineMdMoonRisingTwotoneAltLoop2" fill="freeze" attributeName="stroke-dashoffset" begin="2s;lineMdMoonRisingTwotoneAltLoop2.begin+6s" dur="0.4s" values="4;0"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonRisingTwotoneAltLoop2.begin+2s" dur="0.4s" values="4;0"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonRisingTwotoneAltLoop2.begin+1.2s;lineMdMoonRisingTwotoneAltLoop2.begin+3.2s" dur="0.4s" values="0;4"></svg:animate><svg:set fill="freeze" attributeName="d" begin="lineMdMoonRisingTwotoneAltLoop2.begin+1.8s" to="M20 5h1.5M20 5h-1.5M20 5v1.5M20 5v-1.5"></svg:set><svg:set fill="freeze" attributeName="d" begin="lineMdMoonRisingTwotoneAltLoop2.begin+5.8s" to="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5"></svg:set></svg:path></svg:g><svg:path fill="currentColor" fill-opacity=".3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" transform="translate(0 22)"><svg:animatemotion fill="freeze" calcMode="linear" dur="0.6s" path="M0 0v-22"></svg:animatemotion></svg:path>`,
})
export class LineMdMoonRisingTwotoneAltLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdMoonRisingTwotoneLoopIcon],svg[line-md-moon-rising-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-opacity="0"><svg:path d="M15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z"><svg:animate id="lineMdMoonRisingTwotoneLoop0" fill="freeze" attributeName="fill-opacity" begin="0.7s;lineMdMoonRisingTwotoneLoop0.begin+6s" dur="0.4s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingTwotoneLoop0.begin+2.2s" dur="0.4s" values="1;0"></svg:animate></svg:path><svg:path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingTwotoneLoop0.begin+3s" dur="0.4s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingTwotoneLoop0.begin+5.2s" dur="0.4s" values="1;0"></svg:animate></svg:path><svg:path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingTwotoneLoop0.begin+0.4s" dur="0.4s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingTwotoneLoop0.begin+2.8s" dur="0.4s" values="1;0"></svg:animate></svg:path><svg:path d="M20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingTwotoneLoop0.begin+3.4s" dur="0.4s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonRisingTwotoneLoop0.begin+5.6s" dur="0.4s" values="1;0"></svg:animate></svg:path></svg:g><svg:path fill="currentColor" fill-opacity=".3" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" transform="translate(0 22)"><svg:animatemotion fill="freeze" calcMode="linear" dur="0.6s" path="M0 0v-22"></svg:animatemotion></svg:path>`,
})
export class LineMdMoonRisingTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdMoonTwotoneAltLoopIcon],svg[line-md-moon-twotone-alt-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-dasharray="4" stroke-dashoffset="4" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5"><svg:animate id="lineMdMoonTwotoneAltLoop0" fill="freeze" attributeName="stroke-dashoffset" begin="0.7s;lineMdMoonTwotoneAltLoop0.begin+6s" dur="0.4s" values="4;0"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonTwotoneAltLoop0.begin+2s;lineMdMoonTwotoneAltLoop0.begin+4s" dur="0.4s" values="4;0"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonTwotoneAltLoop0.begin+1.2s;lineMdMoonTwotoneAltLoop0.begin+3.2s;lineMdMoonTwotoneAltLoop0.begin+5.2s" dur="0.4s" values="0;4"></svg:animate><svg:set fill="freeze" attributeName="d" begin="lineMdMoonTwotoneAltLoop0.begin+1.8s" to="M12 5h1.5M12 5h-1.5M12 5v1.5M12 5v-1.5"></svg:set><svg:set fill="freeze" attributeName="d" begin="lineMdMoonTwotoneAltLoop0.begin+3.8s" to="M12 4h1.5M12 4h-1.5M12 4v1.5M12 4v-1.5"></svg:set><svg:set fill="freeze" attributeName="d" begin="lineMdMoonTwotoneAltLoop0.begin+5.8s" to="M13 4h1.5M13 4h-1.5M13 4v1.5M13 4v-1.5"></svg:set></svg:path><svg:path d="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5"><svg:animate id="lineMdMoonTwotoneAltLoop1" fill="freeze" attributeName="stroke-dashoffset" begin="1.1s;lineMdMoonTwotoneAltLoop1.begin+6s" dur="0.4s" values="4;0"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonTwotoneAltLoop1.begin+2s;lineMdMoonTwotoneAltLoop1.begin+4s" dur="0.4s" values="4;0"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonTwotoneAltLoop1.begin+1.2s;lineMdMoonTwotoneAltLoop1.begin+3.2s;lineMdMoonTwotoneAltLoop1.begin+5.2s" dur="0.4s" values="0;4"></svg:animate><svg:set fill="freeze" attributeName="d" begin="lineMdMoonTwotoneAltLoop1.begin+1.8s" to="M17 11h1.5M17 11h-1.5M17 11v1.5M17 11v-1.5"></svg:set><svg:set fill="freeze" attributeName="d" begin="lineMdMoonTwotoneAltLoop1.begin+3.8s" to="M18 12h1.5M18 12h-1.5M18 12v1.5M18 12v-1.5"></svg:set><svg:set fill="freeze" attributeName="d" begin="lineMdMoonTwotoneAltLoop1.begin+5.8s" to="M19 11h1.5M19 11h-1.5M19 11v1.5M19 11v-1.5"></svg:set></svg:path><svg:path d="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5"><svg:animate id="lineMdMoonTwotoneAltLoop2" fill="freeze" attributeName="stroke-dashoffset" begin="2s;lineMdMoonTwotoneAltLoop2.begin+6s" dur="0.4s" values="4;0"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonTwotoneAltLoop2.begin+2s" dur="0.4s" values="4;0"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdMoonTwotoneAltLoop2.begin+1.2s;lineMdMoonTwotoneAltLoop2.begin+3.2s" dur="0.4s" values="0;4"></svg:animate><svg:set fill="freeze" attributeName="d" begin="lineMdMoonTwotoneAltLoop2.begin+1.8s" to="M20 5h1.5M20 5h-1.5M20 5v1.5M20 5v-1.5"></svg:set><svg:set fill="freeze" attributeName="d" begin="lineMdMoonTwotoneAltLoop2.begin+5.8s" to="M19 4h1.5M19 4h-1.5M19 4v1.5M19 4v-1.5"></svg:set></svg:path></svg:g><svg:path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-dasharray="56" stroke-dashoffset="56" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.5s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path>`,
})
export class LineMdMoonTwotoneAltLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdMoonTwotoneLoopIcon],svg[line-md-moon-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-opacity="0"><svg:path d="M15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z"><svg:animate id="lineMdMoonTwotoneLoop0" fill="freeze" attributeName="fill-opacity" begin="0.7s;lineMdMoonTwotoneLoop0.begin+6s" dur="0.4s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonTwotoneLoop0.begin+2.2s" dur="0.4s" values="1;0"></svg:animate></svg:path><svg:path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonTwotoneLoop0.begin+3s" dur="0.4s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonTwotoneLoop0.begin+5.2s" dur="0.4s" values="1;0"></svg:animate></svg:path><svg:path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonTwotoneLoop0.begin+0.4s" dur="0.4s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonTwotoneLoop0.begin+2.8s" dur="0.4s" values="1;0"></svg:animate></svg:path><svg:path d="M20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonTwotoneLoop0.begin+3.4s" dur="0.4s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="lineMdMoonTwotoneLoop0.begin+5.6s" dur="0.4s" values="1;0"></svg:animate></svg:path></svg:g><svg:path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-dasharray="56" stroke-dashoffset="56" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.5s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path>`,
})
export class LineMdMoonTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdMyLocationLoopIcon],svg[line-md-my-location-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="0" fill="currentColor"><svg:animate fill="freeze" attributeName="r" begin="0.7s" dur="0.2s" values="0;4"></svg:animate></svg:circle><svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="56" stroke-dashoffset="56" d="M12 4c4.42 0 8 3.58 8 8c0 4.42 -3.58 8 -8 8c-4.42 0 -8 -3.58 -8 -8c0 -4.42 3.58 -8 8 -8Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M12 4v0M20 12h0M12 20v0M4 12h0" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="1s" dur="0.2s" values="M12 4v0M20 12h0M12 20v0M4 12h0;M12 4v-2M20 12h2M12 20v2M4 12h-2"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="4;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="1s" to="1"></svg:set><svg:animatetransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></svg:animatetransform></svg:path></svg:g>`,
})
export class LineMdMyLocationLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdMyLocationOffLoopIcon],svg[line-md-my-location-off-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdMyLocationOffLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="56" stroke-dashoffset="56" d="M12 4c4.42 0 8 3.58 8 8c0 4.42 -3.58 8 -8 8c-4.42 0 -8 -3.58 -8 -8c0 -4.42 3.58 -8 8 -8Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:circle cx="12" cy="12" r="0" fill="#fff" stroke="none"><svg:animate fill="freeze" attributeName="r" begin="0.7s" dur="0.2s" values="0;4"></svg:animate></svg:circle><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M12 4v0M20 12h0M12 20v0M4 12h0" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="1s" dur="0.2s" values="M12 4v0M20 12h0M12 20v0M4 12h0;M12 4v-2M20 12h2M12 20v2M4 12h-2"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1s" dur="0.2s" values="4;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="1s" to="1"></svg:set><svg:animatetransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></svg:animatetransform></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-2 13h26" transform="rotate(45 12 12)"><svg:animate attributeName="d" dur="6s" repeatCount="indefinite" values="M-2 13h26;M0 13h26;M-2 13h26"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdMyLocationOffLoop0)"></svg:rect>`,
})
export class LineMdMyLocationOffLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdPersonOffFilledLoopIcon],svg[line-md-person-off-filled-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdPersonOffFilledLoop0"><svg:g fill="#fff" fill-opacity="0" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M12 5c1.66 0 3 1.34 3 3c0 1.66 -1.34 3 -3 3c-1.66 0 -3 -1.34 -3 -3c0 -1.66 1.34 -3 3 -3Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="36" stroke-dashoffset="36" d="M12 14c4 0 7 2 7 3v2h-14v-2c0 -1 3 -3 7 -3Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.5s" values="36;0"></svg:animate></svg:path><svg:g fill="none" stroke-dasharray="28" stroke-dashoffset="28" transform="rotate(45 12 12)"><svg:path stroke="#000" d="M0 11h24"></svg:path><svg:path d="M0 13h22"><svg:animate attributeName="d" dur="6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="M0 13h22;M2 13h22;M0 13h22"></svg:animate></svg:path><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.7s" dur="0.4s" values="28;0"></svg:animate></svg:g><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.5s" values="0;1"></svg:animate></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdPersonOffFilledLoop0)"></svg:rect>`,
})
export class LineMdPersonOffFilledLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdPersonOffLoopIcon],svg[line-md-person-off-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdPersonOffLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M12 5c1.66 0 3 1.34 3 3c0 1.66 -1.34 3 -3 3c-1.66 0 -3 -1.34 -3 -3c0 -1.66 1.34 -3 3 -3Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="36" stroke-dashoffset="36" d="M12 14c4 0 7 2 7 3v2h-14v-2c0 -1 3 -3 7 -3Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.5s" values="36;0"></svg:animate></svg:path><svg:g stroke-dasharray="28" stroke-dashoffset="28" transform="rotate(45 12 12)"><svg:path stroke="#000" d="M0 11h24"></svg:path><svg:path d="M0 13h22"><svg:animate attributeName="d" dur="6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="M0 13h22;M2 13h22;M0 13h22"></svg:animate></svg:path><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.4s" values="28;0"></svg:animate></svg:g></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdPersonOffLoop0)"></svg:rect>`,
})
export class LineMdPersonOffLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdPersonOffTwotoneLoopIcon],svg[line-md-person-off-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdPersonOffTwotoneLoop0"><svg:g fill="#fff" fill-opacity="0" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M12 5c1.66 0 3 1.34 3 3c0 1.66 -1.34 3 -3 3c-1.66 0 -3 -1.34 -3 -3c0 -1.66 1.34 -3 3 -3Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="36" stroke-dashoffset="36" d="M12 14c4 0 7 2 7 3v2h-14v-2c0 -1 3 -3 7 -3Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.5s" values="36;0"></svg:animate></svg:path><svg:g fill="none" stroke-dasharray="28" stroke-dashoffset="28" transform="rotate(45 12 12)"><svg:path stroke="#000" d="M0 11h24"></svg:path><svg:path d="M0 13h22"><svg:animate attributeName="d" dur="6s" keyTimes="0;0.5;1" repeatCount="indefinite" values="M0 13h22;M2 13h22;M0 13h22"></svg:animate></svg:path><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.35s" dur="0.4s" values="28;0"></svg:animate></svg:g><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.15s" values="0;0.3"></svg:animate></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdPersonOffTwotoneLoop0)"></svg:rect>`,
})
export class LineMdPersonOffTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdPhoneCallLoopIcon],svg[line-md-phone-call-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M8 3c0.5 0 2.5 4.5 2.5 5c0 1 -1.5 2 -2 3c-0.5 1 0.5 2 1.5 3c0.39 0.39 2 2 3 1.5c1 -0.5 2 -2 3 -2c0.5 0 5 2 5 2.5c0 2 -1.5 3.5 -3 4c-1.5 0.5 -2.5 0.5 -4.5 0c-2 -0.5 -3.5 -1 -6 -3.5c-2.5 -2.5 -3 -4 -3.5 -6c-0.5 -2 -0.5 -3 0 -4.5c0.5 -1.5 2 -3 4 -3Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:animatetransform id="lineMdPhoneCallLoop0" fill="freeze" attributeName="transform" begin="0.6s;lineMdPhoneCallLoop0.begin+2.7s" dur="0.5s" type="rotate" values="0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;-15 12 12;0 12 12"></svg:animatetransform></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M15.76 8.28c-0.5 -0.51 -1.1 -0.93 -1.76 -1.24M15.76 8.28c0.49 0.49 0.9 1.08 1.2 1.72"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdPhoneCallLoop0.begin+0s" dur="2.7s" keyTimes="0;0.111;0.259;0.37;1" values="4;0;0;4;4"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M18.67 5.35c-1 -1 -2.26 -1.73 -3.67 -2.1M18.67 5.35c0.99 1 1.72 2.25 2.08 3.65"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdPhoneCallLoop0.begin+0.2s" dur="2.7s" keyTimes="0;0.074;0.185;0.333;0.444;1" values="6;6;0;0;6;6"></svg:animate></svg:path></svg:g>`,
})
export class LineMdPhoneCallLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdPhoneCallTwotoneLoopIcon],svg[line-md-phone-call-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M8 3c0.5 0 2.5 4.5 2.5 5c0 1 -1.5 2 -2 3c-0.5 1 0.5 2 1.5 3c0.39 0.39 2 2 3 1.5c1 -0.5 2 -2 3 -2c0.5 0 5 2 5 2.5c0 2 -1.5 3.5 -3 4c-1.5 0.5 -2.5 0.5 -4.5 0c-2 -0.5 -3.5 -1 -6 -3.5c-2.5 -2.5 -3 -4 -3.5 -6c-0.5 -2 -0.5 -3 0 -4.5c0.5 -1.5 2 -3 4 -3Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:animatetransform id="lineMdPhoneCallTwotoneLoop0" fill="freeze" attributeName="transform" begin="0.6s;lineMdPhoneCallTwotoneLoop0.begin+2.7s" dur="0.5s" type="rotate" values="0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;-15 12 12;0 12 12"></svg:animatetransform></svg:path><svg:path stroke-dasharray="4" stroke-dashoffset="4" d="M15.76 8.28c-0.5 -0.51 -1.1 -0.93 -1.76 -1.24M15.76 8.28c0.49 0.49 0.9 1.08 1.2 1.72"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdPhoneCallTwotoneLoop0.begin+0s" dur="2.7s" keyTimes="0;0.111;0.259;0.37;1" values="4;0;0;4;4"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M18.67 5.35c-1 -1 -2.26 -1.73 -3.67 -2.1M18.67 5.35c0.99 1 1.72 2.25 2.08 3.65"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="lineMdPhoneCallTwotoneLoop0.begin+0.2s" dur="2.7s" keyTimes="0;0.074;0.185;0.333;0.444;1" values="6;6;0;0;6;6"></svg:animate></svg:path></svg:g>`,
})
export class LineMdPhoneCallTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdPhoneOffFilledLoopIcon],svg[line-md-phone-off-filled-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdPhoneOffFilledLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M8 3c0.5 0 2.5 4.5 2.5 5c0 1 -1.5 2 -2 3c-0.5 1 0.5 2 1.5 3c0.39 0.39 2 2 3 1.5c1 -0.5 2 -2 3 -2c0.5 0 5 2 5 2.5c0 2 -1.5 3.5 -3 4c-1.5 0.5 -2.5 0.5 -4.5 0c-2 -0.5 -3.5 -1 -6 -3.5c-2.5 -2.5 -3 -4 -3.5 -6c-0.5 -2 -0.5 -3 0 -4.5c0.5 -1.5 2 -3 4 -3Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:animatetransform attributeName="transform" begin="1s" dur="2.7s" keyTimes="0;0.035;0.07;0.105;0.14;0.175;0.21;0.245;0.28;1" repeatCount="indefinite" type="rotate" values="0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;-15 12 12;0 12 12;0 12 12"></svg:animatetransform></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26" transform="rotate(135 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-2 13h26" transform="rotate(135 12 12)"><svg:animate attributeName="d" dur="6s" repeatCount="indefinite" values="M-2 13h26;M0 13h26;M-2 13h26"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdPhoneOffFilledLoop0)"></svg:rect>`,
})
export class LineMdPhoneOffFilledLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdPhoneOffLoopIcon],svg[line-md-phone-off-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdPhoneOffLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="64" stroke-dashoffset="64" d="M8 3c0.5 0 2.5 4.5 2.5 5c0 1 -1.5 2 -2 3c-0.5 1 0.5 2 1.5 3c0.39 0.39 2 2 3 1.5c1 -0.5 2 -2 3 -2c0.5 0 5 2 5 2.5c0 2 -1.5 3.5 -3 4c-1.5 0.5 -2.5 0.5 -4.5 0c-2 -0.5 -3.5 -1 -6 -3.5c-2.5 -2.5 -3 -4 -3.5 -6c-0.5 -2 -0.5 -3 0 -4.5c0.5 -1.5 2 -3 4 -3Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:animatetransform attributeName="transform" begin="1s" dur="2.7s" keyTimes="0;0.035;0.07;0.105;0.14;0.175;0.21;0.245;0.28;1" repeatCount="indefinite" type="rotate" values="0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;-15 12 12;0 12 12;0 12 12"></svg:animatetransform></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26" transform="rotate(135 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-2 13h26" transform="rotate(135 12 12)"><svg:animate attributeName="d" dur="6s" repeatCount="indefinite" values="M-2 13h26;M0 13h26;M-2 13h26"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdPhoneOffLoop0)"></svg:rect>`,
})
export class LineMdPhoneOffLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdPhoneOffTwotoneLoopIcon],svg[line-md-phone-off-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdPhoneOffTwotoneLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="64" stroke-dashoffset="64" d="M8 3c0.5 0 2.5 4.5 2.5 5c0 1 -1.5 2 -2 3c-0.5 1 0.5 2 1.5 3c0.39 0.39 2 2 3 1.5c1 -0.5 2 -2 3 -2c0.5 0 5 2 5 2.5c0 2 -1.5 3.5 -3 4c-1.5 0.5 -2.5 0.5 -4.5 0c-2 -0.5 -3.5 -1 -6 -3.5c-2.5 -2.5 -3 -4 -3.5 -6c-0.5 -2 -0.5 -3 0 -4.5c0.5 -1.5 2 -3 4 -3Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="64;0"></svg:animate><svg:animatetransform attributeName="transform" begin="1s" dur="2.7s" keyTimes="0;0.035;0.07;0.105;0.14;0.175;0.21;0.245;0.28;1" repeatCount="indefinite" type="rotate" values="0 12 12;15 12 12;0 12 12;-12 12 12;0 12 12;12 12 12;0 12 12;-15 12 12;0 12 12;0 12 12"></svg:animatetransform></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M-1 11h26" transform="rotate(135 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.85s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-2 13h26" transform="rotate(135 12 12)"><svg:animate attributeName="d" dur="6s" repeatCount="indefinite" values="M-2 13h26;M0 13h26;M-2 13h26"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.85s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdPhoneOffTwotoneLoop0)"></svg:rect>`,
})
export class LineMdPhoneOffTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdRedditCircleLoopIcon],svg[line-md-reddit-circle-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdRedditCircleLoop0"><svg:path fill="#fff" fill-opacity="0" stroke="#fff" stroke-dasharray="64" stroke-dashoffset="64" stroke-width="2" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="64;0"></svg:animate></svg:path><svg:path fill-opacity="0" d="M12 9.71c3.22 0 5.83 1.82 5.83 4.06c0 2.24 -2.61 4.06 -5.83 4.06c-3.22 0 -5.83 -1.82 -5.83 -4.06c0 -2.24 2.61 -4.06 5.83 -4.06Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.1s" dur="0.4s" values="0;1"></svg:animate></svg:path><svg:circle cx="8.99" cy="11.99" r="1.45" opacity="0"><svg:animate fill="freeze" attributeName="cx" begin="1.5s" dur="0.2s" values="8.99;6.79"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="1.5s" to="1"></svg:set></svg:circle><svg:circle cx="15.01" cy="11.99" r="1.45" opacity="0"><svg:animate fill="freeze" attributeName="cx" begin="1.5s" dur="0.2s" values="15.01;17.21"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="1.5s" to="1"></svg:set></svg:circle><svg:circle cx="16.18" cy="7.01" r="1.04" opacity="0"><svg:animate attributeName="cx" begin="2.9s" dur="6s" repeatCount="indefinite" values="16.18;7.82;16.18"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="3.1s" to="1"></svg:set></svg:circle><svg:path fill="none" stroke="#000" stroke-dasharray="10" stroke-dashoffset="10" stroke-linecap="round" stroke-linejoin="round" stroke-width=".54" d="M12 9.91L12.76 6.27L16 6.98"><svg:animate attributeName="d" begin="2.9s" dur="6s" repeatCount="indefinite" values="M12 9.91L12.76 6.27L16 6.98;M12 9.91L12 5.2L12 6.98;M12 9.91L11.24 6.27L8 6.98;M12 9.91L12 5.2L12 6.98;M12 9.91L12.76 6.27L16 6.98"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="2.9s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:g fill="#fff" fill-opacity="0"><svg:circle cx="9.71" cy="13.04" r="1.04"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.7s" dur="0.4s" values="0;1"></svg:animate></svg:circle><svg:circle cx="14.29" cy="13.04" r="1.04"><svg:animate fill="freeze" attributeName="fill-opacity" begin="2.1s" dur="0.4s" values="0;1"></svg:animate></svg:circle></svg:g><svg:path fill="none" stroke="#fff" stroke-dasharray="6" stroke-dashoffset="6" stroke-linecap="round" stroke-linejoin="round" stroke-width=".54" d="M9.72 15.6c0 0 0.61 0.69 2.28 0.69c1.67 -0 2.28 -0.69 2.28 -0.69"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="2.5s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdRedditCircleLoop0)"></svg:rect>`,
})
export class LineMdRedditCircleLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdRedditLoopIcon],svg[line-md-reddit-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdRedditLoop0"><svg:g fill="#fff"><svg:path fill-opacity="0" stroke="#fff" stroke-dasharray="48" stroke-dashoffset="48" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9.42c4.42 0 8 2.37 8 5.29c0 2.92 -3.58 5.29 -8 5.29c-4.42 0 -8 -2.37 -8 -5.29c0 -2.92 3.58 -5.29 8 -5.29Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.6s" dur="0.4s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"></svg:animate></svg:path><svg:circle cx="7.24" cy="11.97" r="2.24" opacity="0"><svg:animate fill="freeze" attributeName="cx" begin="1s" dur="0.2s" values="7.24;3.94"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="1s" to="1"></svg:set></svg:circle><svg:circle cx="16.76" cy="11.97" r="2.24" opacity="0"><svg:animate fill="freeze" attributeName="cx" begin="1s" dur="0.2s" values="16.76;20.06"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="1s" to="1"></svg:set></svg:circle><svg:circle cx="18.45" cy="4.23" r="1.61" opacity="0"><svg:animate attributeName="cx" begin="2.4s" dur="6s" repeatCount="indefinite" values="18.45;5.75;18.45"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="2.6s" to="1"></svg:set></svg:circle></svg:g><svg:path fill="none" stroke="#fff" stroke-dasharray="12" stroke-dashoffset="12" stroke-linecap="round" stroke-linejoin="round" stroke-width=".8" d="M12 8.75L13.18 3.11L18.21 4.18"><svg:animate attributeName="d" begin="2.4s" dur="6s" repeatCount="indefinite" values="M12 8.75L13.18 3.11L18.21 4.18;M12 8.75L12 2L12 4.18;M12 8.75L10.82 3.11L5.79 4.18;M12 8.75L12 2L12 4.18;M12 8.75L13.18 3.11L18.21 4.18"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="2.4s" dur="0.2s" values="12;0"></svg:animate></svg:path><svg:g fill-opacity="0"><svg:circle cx="8.45" cy="13.59" r="1.61"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.2s" dur="0.4s" values="0;1"></svg:animate></svg:circle><svg:circle cx="15.55" cy="13.59" r="1.61"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1.6s" dur="0.4s" values="0;1"></svg:animate></svg:circle></svg:g><svg:path fill="none" stroke="#000" stroke-dasharray="10" stroke-dashoffset="10" stroke-linecap="round" stroke-linejoin="round" stroke-width=".8" d="M8.47 17.52c0 0 0.94 1.06 3.53 1.06c2.58 0 3.53 -1.06 3.53 -1.06"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="2s" dur="0.2s" values="10;0"></svg:animate></svg:path></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdRedditLoop0)"></svg:rect>`,
})
export class LineMdRedditLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdSpeedLoopIcon],svg[line-md-speed-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdSpeedLoop0"><svg:path fill="none" stroke="#fff" stroke-dasharray="56" stroke-dashoffset="56" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19v0c-0.3 0 -0.59 -0.15 -0.74 -0.41c-0.8 -1.34 -1.26 -2.91 -1.26 -4.59c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 1.68 -0.46 3.25 -1.26 4.59c-0.15 0.26 -0.44 0.41 -0.74 0.41Z"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:g transform="rotate(-100 12 14)"><svg:path d="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z"><svg:animate fill="freeze" attributeName="d" begin="0.4s" dur="0.2s" values="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z;M16 14C16 16.21 14.21 18 12 18C9.79 18 8 16.21 8 14C8 11.79 12 0 12 0C12 0 16 11.79 16 14Z"></svg:animate></svg:path><svg:path fill="#fff" d="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z"><svg:animate fill="freeze" attributeName="d" begin="0.4s" dur="0.2s" values="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z;M14 14C14 15.1 13.1 16 12 16C10.9 16 10 15.1 10 14C10 12.9 12 4 12 4C12 4 14 12.9 14 14Z"></svg:animate></svg:path><svg:animatetransform attributeName="transform" begin="0.4s" dur="6s" repeatCount="indefinite" type="rotate" values="-100 12 14;45 12 14;45 12 14;45 12 14;20 12 14;10 12 14;0 12 14;35 12 14;45 12 14;55 12 14;50 12 14;15 12 14;-20 12 14;-100 12 14"></svg:animatetransform></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdSpeedLoop0)"></svg:rect>`,
})
export class LineMdSpeedLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdSpeedTwotoneLoopIcon],svg[line-md-speed-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdSpeedTwotoneLoop0"><svg:path fill="#fff" fill-opacity="0" stroke="#fff" stroke-dasharray="56" stroke-dashoffset="56" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 19v0c-0.3 0 -0.59 -0.15 -0.74 -0.41c-0.8 -1.34 -1.26 -2.91 -1.26 -4.59c0 -4.97 4.03 -9 9 -9c4.97 0 9 4.03 9 9c0 1.68 -0.46 3.25 -1.26 4.59c-0.15 0.26 -0.44 0.41 -0.74 0.41Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.3s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="56;0"></svg:animate></svg:path><svg:g transform="rotate(-100 12 14)"><svg:path d="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z"><svg:animate fill="freeze" attributeName="d" begin="0.4s" dur="0.2s" values="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z;M16 14C16 16.21 14.21 18 12 18C9.79 18 8 16.21 8 14C8 11.79 12 0 12 0C12 0 16 11.79 16 14Z"></svg:animate></svg:path><svg:path fill="#fff" d="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z"><svg:animate fill="freeze" attributeName="d" begin="0.4s" dur="0.2s" values="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z;M14 14C14 15.1 13.1 16 12 16C10.9 16 10 15.1 10 14C10 12.9 12 4 12 4C12 4 14 12.9 14 14Z"></svg:animate></svg:path><svg:animatetransform attributeName="transform" begin="0.4s" dur="6s" repeatCount="indefinite" type="rotate" values="-100 12 14;45 12 14;45 12 14;45 12 14;20 12 14;10 12 14;0 12 14;35 12 14;45 12 14;55 12 14;50 12 14;15 12 14;-20 12 14;-100 12 14"></svg:animatetransform></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdSpeedTwotoneLoop0)"></svg:rect>`,
})
export class LineMdSpeedTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdSpeedometerLoopIcon],svg[line-md-speedometer-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdSpeedometerLoop0"><svg:path fill="none" stroke="#fff" stroke-dasharray="48" stroke-dashoffset="48" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.64 19.36c-3.52 -3.51 -3.52 -9.21 0 -12.72c3.51 -3.52 9.21 -3.52 12.72 -0c3.52 3.51 3.52 9.21 0 12.72"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"></svg:animate></svg:path><svg:g transform="rotate(-100 12 13)"><svg:path d="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z"><svg:animate fill="freeze" attributeName="d" begin="0.4s" dur="0.2s" values="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z;M17 13C17 15.7614 14.7614 18 12 18C9.23858 18 7 15.7614 7 13C7 10.2386 12 -2 12 -2C12 -2 17 10.2386 17 13Z"></svg:animate></svg:path><svg:path fill="#fff" d="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z"><svg:animate fill="freeze" attributeName="d" begin="0.4s" dur="0.2s" values="M12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14C12 14 12 14 12 14Z;M15 13C15 14.6568 13.6569 16 12 16C10.3431 16 9 14.6568 9 13C9 11.3431 12 2 12 2C12 2 15 11.3431 15 13Z"></svg:animate></svg:path><svg:animatetransform attributeName="transform" begin="0.4s" dur="6s" repeatCount="indefinite" type="rotate" values="-100 12 13;65 12 13;65 12 13;65 12 13;30 12 13;10 12 13;0 12 13;35 12 13;55 12 13;65 12 13;75 12 13;15 12 13;-20 12 13;-100 12 13"></svg:animatetransform></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdSpeedometerLoop0)"></svg:rect>`,
})
export class LineMdSpeedometerLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdStarPulsatingFilledLoopIcon],svg[line-md-star-pulsating-filled-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28l-5.29 3.28l1.49 -6.04l-4.76 -4.02l6.21 -0.46Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.5s" dur="0.5s" values="0;1"></svg:animate></svg:path><svg:path fill="none" stroke="currentColor" stroke-dasharray="36" stroke-dashoffset="36" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3L9.65 8.76L3.44 9.22L8.2 13.24L6.71 19.28L12 16M12 3L14.35 8.76L20.56 9.22L15.8 13.24L17.29 19.28L12 16"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="36;0"></svg:animate><svg:animate attributeName="d" dur="1.5s" repeatCount="indefinite" values="M12 3L9.65 8.76L3.44 9.22L8.2 13.24L6.71 19.28L12 16M12 3L14.35 8.76L20.56 9.22L15.8 13.24L17.29 19.28L12 16;M12 7L10.82 10.38L7.24 10.45L10.1 12.62L9.06 16.05L12 14M12 7L13.18 10.38L16.76 10.45L13.9 12.62L14.94 16.05L12 14;M12 3L9.65 8.76L3.44 9.22L8.2 13.24L6.71 19.28L12 16M12 3L14.35 8.76L20.56 9.22L15.8 13.24L17.29 19.28L12 16"></svg:animate></svg:path>`,
})
export class LineMdStarPulsatingFilledLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdStarPulsatingLoopIcon],svg[line-md-star-pulsating-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-dasharray="36" stroke-dashoffset="36" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3L9.65 8.76L3.44 9.22L8.2 13.24L6.71 19.28L12 16M12 3L14.35 8.76L20.56 9.22L15.8 13.24L17.29 19.28L12 16"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="36;0"></svg:animate><svg:animate attributeName="d" dur="1.5s" repeatCount="indefinite" values="M12 3L9.65 8.76L3.44 9.22L8.2 13.24L6.71 19.28L12 16M12 3L14.35 8.76L20.56 9.22L15.8 13.24L17.29 19.28L12 16;M12 7L10.82 10.38L7.24 10.45L10.1 12.62L9.06 16.05L12 14M12 7L13.18 10.38L16.76 10.45L13.9 12.62L14.94 16.05L12 14;M12 3L9.65 8.76L3.44 9.22L8.2 13.24L6.71 19.28L12 16M12 3L14.35 8.76L20.56 9.22L15.8 13.24L17.29 19.28L12 16"></svg:animate></svg:path>`,
})
export class LineMdStarPulsatingLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdStarPulsatingTwotoneLoopIcon],svg[line-md-star-pulsating-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-opacity="0" d="M12 3l2.35 5.76l6.21 0.46l-4.76 4.02l1.49 6.04l-5.29 -3.28l-5.29 3.28l1.49 -6.04l-4.76 -4.02l6.21 -0.46Z"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.5s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:path fill="none" stroke="currentColor" stroke-dasharray="36" stroke-dashoffset="36" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3L9.65 8.76L3.44 9.22L8.2 13.24L6.71 19.28L12 16M12 3L14.35 8.76L20.56 9.22L15.8 13.24L17.29 19.28L12 16"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="36;0"></svg:animate><svg:animate attributeName="d" dur="1.5s" repeatCount="indefinite" values="M12 3L9.65 8.76L3.44 9.22L8.2 13.24L6.71 19.28L12 16M12 3L14.35 8.76L20.56 9.22L15.8 13.24L17.29 19.28L12 16;M12 7L10.82 10.38L7.24 10.45L10.1 12.62L9.06 16.05L12 14M12 7L13.18 10.38L16.76 10.45L13.9 12.62L14.94 16.05L12 14;M12 3L9.65 8.76L3.44 9.22L8.2 13.24L6.71 19.28L12 16M12 3L14.35 8.76L20.56 9.22L15.8 13.24L17.29 19.28L12 16"></svg:animate></svg:path>`,
})
export class LineMdStarPulsatingTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdSunRisingFilledLoopIcon],svg[line-md-sun-rising-filled-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="32" r="6" fill="currentColor"><svg:animate fill="freeze" attributeName="cy" dur="0.6s" values="32;12"></svg:animate></svg:circle><svg:g><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M12 19v1M19 12h1M12 5v-1M5 12h-1"><svg:animate fill="freeze" attributeName="d" begin="0.7s" dur="0.2s" values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5"><svg:animate fill="freeze" attributeName="d" begin="0.9s" dur="0.2s" values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:animatetransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></svg:animatetransform></svg:g></svg:g>`,
})
export class LineMdSunRisingFilledLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdSunRisingLoopIcon],svg[line-md-sun-rising-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="32" r="6"><svg:animate fill="freeze" attributeName="cy" dur="0.6s" values="32;12"></svg:animate></svg:circle><svg:g><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M12 19v1M19 12h1M12 5v-1M5 12h-1"><svg:animate fill="freeze" attributeName="d" begin="0.7s" dur="0.2s" values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5"><svg:animate fill="freeze" attributeName="d" begin="0.9s" dur="0.2s" values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:animatetransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></svg:animatetransform></svg:g></svg:g>`,
})
export class LineMdSunRisingLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdSunRisingTwotoneLoopIcon],svg[line-md-sun-rising-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="32" r="6" fill="currentColor" fill-opacity=".3"><svg:animate fill="freeze" attributeName="cy" dur="0.6s" values="32;12"></svg:animate></svg:circle><svg:g><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M12 19v1M19 12h1M12 5v-1M5 12h-1"><svg:animate fill="freeze" attributeName="d" begin="0.7s" dur="0.2s" values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5"><svg:animate fill="freeze" attributeName="d" begin="0.9s" dur="0.2s" values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:animatetransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></svg:animatetransform></svg:g></svg:g>`,
})
export class LineMdSunRisingTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdSunnyFilledLoopIcon],svg[line-md-sunny-filled-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="36" stroke-dashoffset="36" d="M12 7c2.76 0 5 2.24 5 5c0 2.76 -2.24 5 -5 5c-2.76 0 -5 -2.24 -5 -5c0 -2.76 2.24 -5 5 -5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="36;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M12 19v1M19 12h1M12 5v-1M5 12h-1" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="2;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.6s" to="1"></svg:set><svg:animatetransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></svg:animatetransform></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="0.8s" dur="0.2s" values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="2;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.8s" to="1"></svg:set><svg:animatetransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></svg:animatetransform></svg:path></svg:g>`,
})
export class LineMdSunnyFilledLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdSunnyLoopIcon],svg[line-md-sunny-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="36" stroke-dashoffset="36" d="M12 7c2.76 0 5 2.24 5 5c0 2.76 -2.24 5 -5 5c-2.76 0 -5 -2.24 -5 -5c0 -2.76 2.24 -5 5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="36;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M12 19v1M19 12h1M12 5v-1M5 12h-1" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="2;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.6s" to="1"></svg:set><svg:animatetransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></svg:animatetransform></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="0.8s" dur="0.2s" values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="2;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.8s" to="1"></svg:set><svg:animatetransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></svg:animatetransform></svg:path></svg:g>`,
})
export class LineMdSunnyLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdSunnyOutlineLoopIcon],svg[line-md-sunny-outline-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="36" stroke-dashoffset="36" d="M12 7c2.76 0 5 2.24 5 5c0 2.76 -2.24 5 -5 5c-2.76 0 -5 -2.24 -5 -5c0 -2.76 2.24 -5 5 -5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="36;0"></svg:animate></svg:path><svg:g><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M12 19v1M19 12h1M12 5v-1M5 12h-1"><svg:animate fill="freeze" attributeName="d" begin="0.5s" dur="0.2s" values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5"><svg:animate fill="freeze" attributeName="d" begin="0.7s" dur="0.2s" values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:animatetransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></svg:animatetransform></svg:g></svg:g>`,
})
export class LineMdSunnyOutlineLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdSunnyOutlineTwotoneLoopIcon],svg[line-md-sunny-outline-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="36" stroke-dashoffset="36" d="M12 7c2.76 0 5 2.24 5 5c0 2.76 -2.24 5 -5 5c-2.76 0 -5 -2.24 -5 -5c0 -2.76 2.24 -5 5 -5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="36;0"></svg:animate></svg:path><svg:g><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M12 19v1M19 12h1M12 5v-1M5 12h-1"><svg:animate fill="freeze" attributeName="d" begin="0.5s" dur="0.2s" values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5"><svg:animate fill="freeze" attributeName="d" begin="0.7s" dur="0.2s" values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="2;0"></svg:animate></svg:path><svg:animatetransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></svg:animatetransform></svg:g></svg:g>`,
})
export class LineMdSunnyOutlineTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdSunnyTwotoneLoopIcon],svg[line-md-sunny-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="36" stroke-dashoffset="36" d="M12 7c2.76 0 5 2.24 5 5c0 2.76 -2.24 5 -5 5c-2.76 0 -5 -2.24 -5 -5c0 -2.76 2.24 -5 5 -5"><svg:animate fill="freeze" attributeName="fill-opacity" begin="1s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.5s" values="36;0"></svg:animate></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M12 19v1M19 12h1M12 5v-1M5 12h-1" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="2;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.6s" to="1"></svg:set><svg:animatetransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></svg:animatetransform></svg:path><svg:path stroke-dasharray="2" stroke-dashoffset="2" d="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5" opacity="0"><svg:animate fill="freeze" attributeName="d" begin="0.8s" dur="0.2s" values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="2;0"></svg:animate><svg:set fill="freeze" attributeName="opacity" begin="0.8s" to="1"></svg:set><svg:animatetransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></svg:animatetransform></svg:path></svg:g>`,
})
export class LineMdSunnyTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdUploadLoopIcon],svg[line-md-upload-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="20" stroke-dashoffset="20" d="M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5"><svg:animate attributeName="d" begin="0.5s" dur="1.5s" repeatCount="indefinite" values="M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5;M12 15h2v-3h2.5l-4.5 -4.5M12 15h-2v-3h-2.5l4.5 -4.5;M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdUploadLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdUploadOffLoopIcon],svg[line-md-upload-off-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdUploadOffLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="20" stroke-dashoffset="20" d="M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5"><svg:animate attributeName="d" begin="0.5s" dur="1.5s" repeatCount="indefinite" values="M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5;M12 15h2v-3h2.5l-4.5 -4.5M12 15h-2v-3h-2.5l4.5 -4.5;M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.5s" values="0;1"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M0 11h24" transform="rotate(45 13 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M0 13h22" transform="rotate(45 13 12)"><svg:animate attributeName="d" dur="6s" repeatCount="indefinite" values="M0 13h22;M2 13h22;M0 13h22"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdUploadOffLoop0)"></svg:rect>`,
})
export class LineMdUploadOffLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdUploadOffOutlineLoopIcon],svg[line-md-upload-off-outline-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdUploadOffOutlineLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5"><svg:animate attributeName="d" begin="0.5s" dur="1.5s" repeatCount="indefinite" values="M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5;M12 15h2v-3h2.5l-4.5 -4.5M12 15h-2v-3h-2.5l4.5 -4.5;M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M0 11h24" transform="rotate(45 13 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M0 13h22" transform="rotate(45 13 12)"><svg:animate attributeName="d" dur="6s" repeatCount="indefinite" values="M0 13h22;M2 13h22;M0 13h22"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdUploadOffOutlineLoop0)"></svg:rect>`,
})
export class LineMdUploadOffOutlineLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdUploadOffTwotoneLoopIcon],svg[line-md-upload-off-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdUploadOffTwotoneLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="#fff" fill-opacity="0" stroke-dasharray="20" stroke-dashoffset="20" d="M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5"><svg:animate attributeName="d" begin="0.5s" dur="1.5s" repeatCount="indefinite" values="M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5;M12 15h2v-3h2.5l-4.5 -4.5M12 15h-2v-3h-2.5l4.5 -4.5;M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M0 11h24" transform="rotate(45 13 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M0 13h22" transform="rotate(45 13 12)"><svg:animate attributeName="d" dur="6s" repeatCount="indefinite" values="M0 13h22;M2 13h22;M0 13h22"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.9s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdUploadOffTwotoneLoop0)"></svg:rect>`,
})
export class LineMdUploadOffTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdUploadOutlineLoopIcon],svg[line-md-upload-outline-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="20" stroke-dashoffset="20" d="M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5"><svg:animate attributeName="d" begin="0.5s" dur="1.5s" repeatCount="indefinite" values="M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5;M12 15h2v-3h2.5l-4.5 -4.5M12 15h-2v-3h-2.5l4.5 -4.5;M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdUploadOutlineLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdUploadTwotoneLoopIcon],svg[line-md-upload-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path fill="currentColor" fill-opacity="0" stroke-dasharray="20" stroke-dashoffset="20" d="M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5"><svg:animate attributeName="d" begin="0.5s" dur="1.5s" repeatCount="indefinite" values="M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5;M12 15h2v-3h2.5l-4.5 -4.5M12 15h-2v-3h-2.5l4.5 -4.5;M12 15h2v-6h2.5l-4.5 -4.5M12 15h-2v-6h-2.5l4.5 -4.5"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.7s" dur="0.15s" values="0;0.3"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"></svg:animate></svg:path><svg:path stroke-dasharray="14" stroke-dashoffset="14" d="M6 19h12"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="14;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdUploadTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdUploadingLoopIcon],svg[line-md-uploading-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke-dasharray="2 4" stroke-dashoffset="6" d="M12 21c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9"><svg:animate attributeName="stroke-dashoffset" dur="0.6s" repeatCount="indefinite" values="6;0"></svg:animate></svg:path><svg:path stroke-dasharray="32" stroke-dashoffset="32" d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.1s" dur="0.4s" values="32;0"></svg:animate></svg:path><svg:path stroke-dasharray="10" stroke-dashoffset="10" d="M12 16v-7.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="10;0"></svg:animate></svg:path><svg:path stroke-dasharray="6" stroke-dashoffset="6" d="M12 8.5l3.5 3.5M12 8.5l-3.5 3.5"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="6;0"></svg:animate></svg:path></svg:g>`,
})
export class LineMdUploadingLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdWatchLoopIcon],svg[line-md-watch-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="0" fill="currentColor"><svg:animate attributeName="r" dur="6s" keyTimes="0;0.03;0.97;1" repeatCount="indefinite" values="0;3;3;0"></svg:animate></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z"><svg:animate attributeName="d" dur="6s" keyTimes="0;0.03;0.97;1" repeatCount="indefinite" values="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z;M2 12c1.72 -3.83 5.53 -6.5 10 -6.5c4.47 0 8.28 2.67 10 6.5c-1.72 3.83 -5.53 6.5 -10 6.5c-4.47 0 -8.28 -2.67 -10 -6.5Z;M2 12c1.72 -3.83 5.53 -6.5 10 -6.5c4.47 0 8.28 2.67 10 6.5c-1.72 3.83 -5.53 6.5 -10 6.5c-4.47 0 -8.28 -2.67 -10 -6.5Z;M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z"></svg:animate></svg:path>`,
})
export class LineMdWatchLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdWatchOffLoopIcon],svg[line-md-watch-off-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdWatchOffLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="0" fill="#fff" stroke="none"><svg:animate attributeName="r" dur="6s" keyTimes="0;0.03;0.97;1" repeatCount="indefinite" values="0;3;3;0"></svg:animate></svg:circle><svg:path d="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z"><svg:animate attributeName="d" dur="6s" keyTimes="0;0.03;0.97;1" repeatCount="indefinite" values="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z;M2 12c1.72 -3.83 5.53 -6.5 10 -6.5c4.47 0 8.28 2.67 10 6.5c-1.72 3.83 -5.53 6.5 -10 6.5c-4.47 0 -8.28 -2.67 -10 -6.5Z;M2 12c1.72 -3.83 5.53 -6.5 10 -6.5c4.47 0 8.28 2.67 10 6.5c-1.72 3.83 -5.53 6.5 -10 6.5c-4.47 0 -8.28 -2.67 -10 -6.5Z;M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M0 11h24" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-1 13h24" transform="rotate(45 12 12)"><svg:animate attributeName="d" dur="6s" repeatCount="indefinite" values="M-1 13h24;M1 13h24;M-1 13h24"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdWatchOffLoop0)"></svg:rect>`,
})
export class LineMdWatchOffLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdWatchOffTwotoneLoopIcon],svg[line-md-watch-off-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdWatchOffTwotoneLoop0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="12" cy="12" r="0" fill="#fff" stroke="none"><svg:animate attributeName="r" dur="6s" keyTimes="0;0.03;0.97;1" repeatCount="indefinite" values="0;3;3;0"></svg:animate></svg:circle><svg:path fill="#fff" fill-opacity="0" d="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z"><svg:animate attributeName="d" dur="6s" keyTimes="0;0.03;0.97;1" repeatCount="indefinite" values="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z;M2 12c1.72 -3.83 5.53 -6.5 10 -6.5c4.47 0 8.28 2.67 10 6.5c-1.72 3.83 -5.53 6.5 -10 6.5c-4.47 0 -8.28 -2.67 -10 -6.5Z;M2 12c1.72 -3.83 5.53 -6.5 10 -6.5c4.47 0 8.28 2.67 10 6.5c-1.72 3.83 -5.53 6.5 -10 6.5c-4.47 0 -8.28 -2.67 -10 -6.5Z;M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.5s" dur="0.15s" values="0;0.3"></svg:animate></svg:path><svg:path stroke="#000" stroke-dasharray="28" stroke-dashoffset="28" d="M0 11h24" transform="rotate(45 12 12)"><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.65s" dur="0.4s" values="28;0"></svg:animate></svg:path><svg:path stroke-dasharray="28" stroke-dashoffset="28" d="M-1 13h24" transform="rotate(45 12 12)"><svg:animate attributeName="d" dur="6s" repeatCount="indefinite" values="M-1 13h24;M1 13h24;M-1 13h24"></svg:animate><svg:animate fill="freeze" attributeName="stroke-dashoffset" begin="0.65s" dur="0.4s" values="28;0"></svg:animate></svg:path></svg:g></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdWatchOffTwotoneLoop0)"></svg:rect>`,
})
export class LineMdWatchOffTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdWatchTwotoneLoopIcon],svg[line-md-watch-twotone-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="12" r="0" fill="currentColor"><svg:animate attributeName="r" dur="6s" keyTimes="0;0.03;0.97;1" repeatCount="indefinite" values="0;3;3;0"></svg:animate></svg:circle><svg:path fill="currentColor" fill-opacity="0" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z"><svg:animate attributeName="d" dur="6s" keyTimes="0;0.03;0.97;1" repeatCount="indefinite" values="M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z;M2 12c1.72 -3.83 5.53 -6.5 10 -6.5c4.47 0 8.28 2.67 10 6.5c-1.72 3.83 -5.53 6.5 -10 6.5c-4.47 0 -8.28 -2.67 -10 -6.5Z;M2 12c1.72 -3.83 5.53 -6.5 10 -6.5c4.47 0 8.28 2.67 10 6.5c-1.72 3.83 -5.53 6.5 -10 6.5c-4.47 0 -8.28 -2.67 -10 -6.5Z;M4 12c1.38 -0.77 4.42 -1.3 8 -1.3c3.58 0 6.62 0.53 8 1.3c-1.38 0.77 -4.42 1.3 -8 1.3c-3.58 0 -6.62 -0.53 -8 -1.3Z"></svg:animate><svg:animate fill="freeze" attributeName="fill-opacity" begin="0.5s" dur="0.15s" values="0;0.3"></svg:animate></svg:path>`,
})
export class LineMdWatchTwotoneLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[lineMdWeatherCloudyLoopIcon],svg[line-md-weather-cloudy-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:mask id="lineMdWeatherCloudyLoop0"><svg:g fill="#fff"><svg:circle cx="12" cy="11" r="6"><svg:animate attributeName="cx" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="10" height="7" x="8" y="12"></svg:rect><svg:rect width="16" height="10" x="1" y="9" rx="5"><svg:animate attributeName="x" dur="19s" repeatCount="indefinite" values="1;0;1;2;1"></svg:animate></svg:rect><svg:rect width="17" height="8" x="6" y="11" rx="4"><svg:animate attributeName="x" dur="23s" repeatCount="indefinite" values="6;5;6;7;6"></svg:animate></svg:rect></svg:g><svg:circle cx="12" cy="11" r="4"><svg:animate attributeName="cx" dur="30s" repeatCount="indefinite" values="12;11;12;13;12"></svg:animate></svg:circle><svg:rect width="8" height="6" x="8" y="11"><svg:animate attributeName="x" dur="30s" repeatCount="indefinite" values="8;7;8;9;8"></svg:animate></svg:rect><svg:rect width="12" height="6" x="3" y="11" rx="3"><svg:animate attributeName="x" dur="19s" repeatCount="indefinite" values="3;2;3;4;3"></svg:animate></svg:rect><svg:rect width="13" height="4" x="8" y="13" rx="2"><svg:animate attributeName="x" dur="23s" repeatCount="indefinite" values="8;7;8;9;8"></svg:animate></svg:rect></svg:mask><svg:rect width="24" height="24" fill="currentColor" mask="url(#lineMdWeatherCloudyLoop0)"></svg:rect>`,
})
export class LineMdWeatherCloudyLoopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
