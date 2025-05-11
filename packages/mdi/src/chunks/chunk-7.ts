import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFunctionVariantIcon],svg[mdi-function-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.42 5.29c-1.1-.1-2.07.71-2.17 1.82L10 10h2.82v2h-3l-.44 5.07A4.001 4.001 0 0 1 2 18.83l1.5-1.5c.33 1.05 1.46 1.64 2.5 1.3c.78-.24 1.33-.93 1.4-1.74L7.82 12h-3v-2H8l.27-3.07a4.01 4.01 0 0 1 4.33-3.65c1.26.11 2.4.81 3.06 1.89l-1.5 1.5c-.25-.77-.93-1.31-1.74-1.38M22 13.65l-1.41-1.41l-2.83 2.83l-2.83-2.83l-1.43 1.41l2.85 2.85l-2.85 2.81l1.43 1.41l2.83-2.83l2.83 2.83L22 19.31l-2.83-2.81z"></svg:path>`,
})
export class MdiFunctionVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFuriganaHorizontalIcon],svg[mdi-furigana-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 2a2.5 2.5 0 0 0 0 5a2.5 2.5 0 0 0 0-5m7 0a2.5 2.5 0 0 0 0 5a2.5 2.5 0 0 0 0-5M11 8v2H5v2h9.95c-.42 1.13-1.45 2.5-2.79 3.67c-1.04-.93-1.81-1.85-2.34-2.67H7.5c.58 1.25 1.63 2.62 3.12 3.96l-4.07 3.26l-.79.62L7 22.41l.8-.63l4.37-3.5l4.38 3.5l.78.63l1.25-1.57l-.78-.62l-4.07-3.25c1.61-1.47 2.97-3.12 3.34-4.97H19v-2h-6V8z"></svg:path>`,
})
export class MdiFuriganaHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFuriganaVerticalIcon],svg[mdi-furigana-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5v2H2v2h9.95c-.42 1.13-1.45 2.5-2.79 3.67c-1.04-.93-1.81-1.85-2.34-2.67H4.5c.58 1.25 1.63 2.62 3.12 3.96l-4.07 3.26l-.79.62L4 19.41l.8-.63l4.37-3.5l4.38 3.5l.78.63l1.25-1.57l-.78-.62l-4.07-3.25c1.61-1.47 2.97-3.12 3.34-4.97H16V7h-6V5zm11.5 1a2.5 2.5 0 0 0 0 5a2.5 2.5 0 0 0 0-5m-.03 7a2.5 2.5 0 0 0 0 5a2.5 2.5 0 0 0 0-5"></svg:path>`,
})
export class MdiFuriganaVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFuseIcon],svg[mdi-fuse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 7v10h7V7zm3.16 9v-3.13H9.41L11.91 8v3.14h1.68zM16 2v4H7V2a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1m0 16v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4z"></svg:path>`,
})
export class MdiFuseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFuseAlertIcon],svg[mdi-fuse-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7v10h7V7zm3.16 9v-3.13H7.41L9.91 8v3.14h1.68zM14 2v4H5V2c0-.55.45-1 1-1h7c.55 0 1 .45 1 1m0 16v4c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1v-4zm5-5h-2V7h2zm0 4h-2v-2h2z"></svg:path>`,
})
export class MdiFuseAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFuseBladeIcon],svg[mdi-fuse-blade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 21H8l-2-2v-3h4zm8-5h-4v5h2l2-2zM3 3v1a1 1 0 0 0 1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V5a1 1 0 0 0 1-1V3zm8.83 10V9.73H10l2.61-5.07v3.27h1.75z"></svg:path>`,
})
export class MdiFuseBladeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiFuseOffIcon],svg[mdi-fuse-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 11.8L10.2 7H15zM16 6V2c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1v1.8L9.2 6zM2.39 1.73L1.11 3L8 9.89V17h7.11l5.73 5.73l1.27-1.27zM7 22c0 .55.45 1 1 1h7c.55 0 1-.45 1-1v-4H7z"></svg:path>`,
})
export class MdiFuseOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGamepadIcon],svg[mdi-gamepad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.5 9l-3 3l3 3H22V9M9 16.5V22h6v-5.5l-3-3M7.5 9H2v6h5.5l3-3M15 7.5V2H9v5.5l3 3z"></svg:path>`,
})
export class MdiGamepadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGamepadCircleIcon],svg[mdi-gamepad-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m7-7a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 14a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m7-7a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4"></svg:path>`,
})
export class MdiGamepadCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGamepadCircleDownIcon],svg[mdi-gamepad-circle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m7-7a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 14a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m7-7a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m-7-5a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m-7 7a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m14 0a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiGamepadCircleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGamepadCircleLeftIcon],svg[mdi-gamepad-circle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m7-7a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 14a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m7-7a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m-7 7a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0-14a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiGamepadCircleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGamepadCircleOutlineIcon],svg[mdi-gamepad-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m7-9a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 12a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m7-9a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiGamepadCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGamepadCircleRightIcon],svg[mdi-gamepad-circle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m7-7a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 14a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m7-7a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m-7-5a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m-7 7a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m7 7a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiGamepadCircleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGamepadCircleUpIcon],svg[mdi-gamepad-circle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 8a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m7-7a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 14a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m7-7a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4M5 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m14 0a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m-7 7a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiGamepadCircleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGamepadDownIcon],svg[mdi-gamepad-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2v5.5l3 3l3-3V2zM2 9v6h5.5l3-3l-3-3zm14.5 0l-3 3l3 3H22V9zM12 13.5l-3 3V22h6v-5.5zM11 18h2v2h-2z"></svg:path>`,
})
export class MdiGamepadDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGamepadLeftIcon],svg[mdi-gamepad-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2v5.5l3 3l3-3V2zM2 9v6h5.5l3-3l-3-3zm14.5 0l-3 3l3 3H22V9zM4 11h2v2H4zm8 2.5l-3 3V22h6v-5.5z"></svg:path>`,
})
export class MdiGamepadLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGamepadOutlineIcon],svg[mdi-gamepad-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 9H2v6h5.5l3-3zM6 13H4v-2h2zm9-5.5V2H9v5.5l3 3zM11 4h2v2h-2zM9 16.5V22h6v-5.5l-3-3zm4 3.5h-2v-2h2zm3.5-11l-3 3l3 3H22V9zm3.5 4h-2v-2h2z"></svg:path>`,
})
export class MdiGamepadOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGamepadRightIcon],svg[mdi-gamepad-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2v5.5l3 3l3-3V2zM2 9v6h5.5l3-3l-3-3zm14.5 0l-3 3l3 3H22V9zm1.5 2h2v2h-2zm-6 2.5l-3 3V22h6v-5.5z"></svg:path>`,
})
export class MdiGamepadRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGamepadRoundIcon],svg[mdi-gamepad-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8h4V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiGamepadRoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGamepadRoundDownIcon],svg[mdi-gamepad-round-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8h4V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2m6 8v4h4v-4z"></svg:path>`,
})
export class MdiGamepadRoundDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGamepadRoundLeftIcon],svg[mdi-gamepad-round-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8h4V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2m0 2v4h4v-4z"></svg:path>`,
})
export class MdiGamepadRoundLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGamepadRoundOutlineIcon],svg[mdi-gamepad-round-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8h4V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2m0 2v4h6v6h4v-6h6v-4h-6V4h-4v6z"></svg:path>`,
})
export class MdiGamepadRoundOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGamepadRoundRightIcon],svg[mdi-gamepad-round-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8h4V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2m12 2v4h4v-4z"></svg:path>`,
})
export class MdiGamepadRoundRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGamepadRoundUpIcon],svg[mdi-gamepad-round-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8h4V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2m6-4v4h4V4z"></svg:path>`,
})
export class MdiGamepadRoundUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGamepadSquareIcon],svg[mdi-gamepad-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6H3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-10 7H8v3H6v-3H3v-2h3V8h2v3h3m4.5 4a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m4-3a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 19.5 9a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5"></svg:path>`,
})
export class MdiGamepadSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGamepadSquareOutlineIcon],svg[mdi-gamepad-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6H3a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m0 10H3V8h18M6 15h2v-2h2v-2H8V9H6v2H4v2h2m8.5-1a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5m4-3a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 18.5 9"></svg:path>`,
})
export class MdiGamepadSquareOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGamepadUpIcon],svg[mdi-gamepad-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2v5.5l3 3l3-3V2zm2 2h2v2h-2zM2 9v6h5.5l3-3l-3-3zm14.5 0l-3 3l3 3H22V9zM12 13.5l-3 3V22h6v-5.5z"></svg:path>`,
})
export class MdiGamepadUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGamepadVariantIcon],svg[mdi-gamepad-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 6h10a6 6 0 0 1 6 6a6 6 0 0 1-6 6c-1.78 0-3.37-.77-4.47-2h-1.06c-1.1 1.23-2.69 2-4.47 2a6 6 0 0 1-6-6a6 6 0 0 1 6-6M6 9v2H4v2h2v2h2v-2h2v-2H8V9zm9.5 3a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5m3-3a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5A1.5 1.5 0 0 0 18.5 9"></svg:path>`,
})
export class MdiGamepadVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGamepadVariantOutlineIcon],svg[mdi-gamepad-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 9h2v2h2v2H8v2H6v-2H4v-2h2zm12.5 0a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 18.5 9m-3 3a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5M17 5a7 7 0 0 1 7 7a7 7 0 0 1-7 7c-1.96 0-3.73-.8-5-2.1A6.96 6.96 0 0 1 7 19a7 7 0 0 1-7-7a7 7 0 0 1 7-7zM7 7a5 5 0 0 0-5 5a5 5 0 0 0 5 5c1.64 0 3.09-.79 4-2h2c.91 1.21 2.36 2 4 2a5 5 0 0 0 5-5a5 5 0 0 0-5-5z"></svg:path>`,
})
export class MdiGamepadVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGammaIcon],svg[mdi-gamma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.76 19c1.16 0 1.82-1 1.82-2.71c0-1.09-.08-2.41-.28-3.62L18 5h-2.72l-2.57 4.82l-.16-.49C11.83 7.19 10.82 5 8.68 5C8 5 7.45 5.18 7 5.54C6 6.39 6 8 6 8.5h.91c.06-.44.3-1.67 1.34-1.67c1.75 0 2.55 3.17 3.15 5.59c-.9 2.16-1.4 3.72-1.4 4.55c0 .98.56 2.03 1.76 2.03"></svg:path>`,
})
export class MdiGammaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGantryCraneIcon],svg[mdi-gantry-crane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6h1V4h-1V3h-3v1H6V3H3v1H2v2h1v14H2v2h5v-2H6V6h5v1h.5v3.62c-.5.17-.81.63-.81 1.14c0 .44.23.84.61 1.06V14h.62c.34 0 .62.27.63.61c0 .35-.27.63-.62.63a.63.63 0 0 1-.54-.31a.618.618 0 0 0-1.07.62c.33.57.94.92 1.6.92c1.02-.01 1.84-.85 1.83-1.87c-.01-.77-.49-1.46-1.22-1.72v-.06c.59-.32.81-1.04.5-1.62c-.11-.2-.29-.39-.5-.5V7H13V6h5v14h-1v2h5v-2h-1zM5 15.29v1.42l-1 1v-1.42zM4 20v-.76l1-1v1.42l-.34.34zM4 7.29l1-1v1.42l-1 1zm0 3l1-1v1.42l-1 1zm0 3l1-1v1.42l-1 1v-1.47zm16 2v1.42l-1 1v-1.42zM19 20v-.76l1-1v1.42l-.34.34zm0-12.71l1-1v1.42l-1 1zm0 3l1-1v1.42l-1 1zm0 3l1-1v1.42l-1 1v-1.47z"></svg:path>`,
})
export class MdiGantryCraneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGarageIcon],svg[mdi-garage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 20h-2v-9H7v9H5V9l7-4l7 4zM8 12h8v2H8zm0 3h8v2H8zm8 3v2H8v-2z"></svg:path>`,
})
export class MdiGarageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGarageAlertIcon],svg[mdi-garage-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 20h-2v-9H5v9H3V9l7-4l7 4zM6 12h8v2H6zm0 3h8v2H6zm13 0v-5h2v5zm0 4v-2h2v2z"></svg:path>`,
})
export class MdiGarageAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGarageAlertVariantIcon],svg[mdi-garage-alert-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 9v11h-2v-9H2v9H0V9l10-4zm-3 3H3v2h14zm0 3H3v2h14zm5 0v-5h2v5zm0 4v-2h2v2z"></svg:path>`,
})
export class MdiGarageAlertVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGarageLockIcon],svg[mdi-garage-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.8 16v-1.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V16c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3m-1.3 0h-3v-1.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3zM5 12h8v2H5zm0 3h7.95c-.53.54-.87 1.24-.95 2H5zm7 5H5v-2h7zm2-9H4v9H2V9l7-4l7 4v1.44c-.81.36-1.5.92-2 1.62z"></svg:path>`,
})
export class MdiGarageLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGarageOpenIcon],svg[mdi-garage-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 20h-2v-9H7v9H5V9l7-4l7 4zM8 12h8v2H8z"></svg:path>`,
})
export class MdiGarageOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGarageOpenVariantIcon],svg[mdi-garage-open-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9v11h-2v-9H4v9H2V9l10-4zm-3 3H5v2h14z"></svg:path>`,
})
export class MdiGarageOpenVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGarageVariantIcon],svg[mdi-garage-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9v11h-2v-9H4v9H2V9l10-4zm-3 3H5v2h14zm0 6H5v2h14zm0-3H5v2h14z"></svg:path>`,
})
export class MdiGarageVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGarageVariantLockIcon],svg[mdi-garage-variant-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.8 16v-1.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V16c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3m-1.3 0h-3v-1.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3zM5 12h10.04c-.43.59-.69 1.27-.78 2H5zm11.06-1H4v9H2V9l10-4l10 4v2.04A4.9 4.9 0 0 0 19 10c-1.1 0-2.12.39-2.94 1M13 20H5v-2h8zm-8-5h8.95c-.53.54-.87 1.24-.95 2H5z"></svg:path>`,
})
export class MdiGarageVariantLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGasBurnerIcon],svg[mdi-gas-burner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.14 8.79l-.02.01c.23.27.43.59.58.92l.09.19c.71 1.69.21 3.64-1.1 4.86c-1.19 1.09-2.85 1.38-4.39 1.18c-1.46-.18-2.8-1.1-3.57-2.37c-.23-.39-.43-.83-.53-1.28c-.13-.37-.17-.73-.2-1.1c-.09-1.6.55-3.3 1.76-4.3c-.55 1.21-.42 2.72.39 3.77l.11.13c.14.12.31.16.47.09c.15-.06.27-.21.27-.39l-.07-.22c-.88-2.32-.14-5.03 1.73-6.56c.51-.42 1.14-.8 1.8-.97c-.68 1.36-.46 3.14.63 4.21c.46.47 1.01.78 1.49 1.22zm-2.28 4.64l-.01-.01c.45-.39.7-1.06.68-1.66l-.03-.32c-.2-1-1.07-1.33-1.63-2.06c-.17-.22-.32-.5-.43-.78c-.22.5-.24.97-.15 1.51c.1.57.33 1.06.21 1.65c-.16.65-.67 1.3-1.56 1.51c.5.49 1.31.88 2.12.6c.26-.07.59-.26.8-.44M11 18v1c0 .55.45 1 1 1s1-.45 1-1v-1h2v1c0 .55.45 1 1 1s1-.45 1-1v-1c1.11 0 3 .9 3 2v2H4v-2c0-1.1 1.9-2 3-2v1c0 .55.45 1 1 1s1-.45 1-1v-1z"></svg:path>`,
})
export class MdiGasBurnerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGasCylinderIcon],svg[mdi-gas-cylinder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 9v11a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V9c0-1.86 1.27-3.43 3-3.87V4H9V2h6v2h-2v1.13c1.73.44 3 2.01 3 3.87"></svg:path>`,
})
export class MdiGasCylinderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGasStationIcon],svg[mdi-gas-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1a1 1 0 0 1-1 1m-6 0H6V5h6m7.77 2.23l.01-.01l-3.72-3.72L15 4.56l2.11 2.11C16.17 7 15.5 7.93 15.5 9a2.5 2.5 0 0 0 2.5 2.5c.36 0 .69-.08 1-.21v7.21a1 1 0 0 1-1 1a1 1 0 0 1-1-1V14a2 2 0 0 0-2-2h-1V5a2 2 0 0 0-2-2H6c-1.11 0-2 .89-2 2v16h10v-7.5h1.5v5A2.5 2.5 0 0 0 18 21a2.5 2.5 0 0 0 2.5-2.5V9c0-.69-.28-1.32-.73-1.77"></svg:path>`,
})
export class MdiGasStationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGasStationInUseIcon],svg[mdi-gas-station-in-use-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 18.5v-10c0-.69.28-1.32.73-1.77l-.01-.01L21.44 3l1.06 1.06l-2.11 2.11C21.33 6.5 22 7.43 22 8.5c0 .33-.06.65-.19.96c-.13.3-.31.58-.54.81a2.505 2.505 0 0 1-2.77.52v7.71c0 .33-.07.65-.19.96c-.13.3-.31.58-.54.81s-.51.42-.81.54a2.505 2.505 0 0 1-2.73-.54c-.47-.47-.73-1.11-.73-1.77v-5H12V21H2V5c0-1.11.89-2 2-2h6a2 2 0 0 1 2 2v7h1a2 2 0 0 1 2 2v4.5c0 .27.11.5.29.71c.21.19.45.29.71.29c.27 0 .5-.1.71-.29c.19-.21.29-.44.29-.71M10 10V5H4v5zm9.5-.5c.27 0 .5-.1.71-.29c.19-.21.29-.44.29-.71c0-.26-.1-.5-.29-.71c-.21-.18-.44-.29-.71-.29c-.26 0-.5.11-.71.29c-.18.21-.29.45-.29.71c0 .27.11.5.29.71c.21.19.45.29.71.29"></svg:path>`,
})
export class MdiGasStationInUseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGasStationInUseOutlineIcon],svg[mdi-gas-station-in-use-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.73 6.73c-.45.45-.73 1.08-.73 1.77v10a1 1 0 0 1-2 0V14a2 2 0 0 0-2-2h-1V5a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v16h10v-7.5h1.5v5a2.5 2.5 0 0 0 5 0v-7.71c.31.13.64.21 1 .21A2.5 2.5 0 0 0 22 8.5c0-1.07-.67-2-1.61-2.33l2.11-2.11L21.44 3l-3.72 3.72zM4 10V5h6v5zm16.207-.793a1 1 0 1 1-1.414-1.414a1 1 0 0 1 1.414 1.414M10 12v7H4v-7z"></svg:path>`,
})
export class MdiGasStationInUseOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGasStationOffIcon],svg[mdi-gas-station-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4.27L2.28 3L21 21.72L19.73 23l-2.02-2a2.57 2.57 0 0 1-2.21-2.22L14 17.27V21H4V7.27zM18 10c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1m-6 0V5H6.82L5.06 3.23c.28-.15.6-.23.94-.23h6a2 2 0 0 1 2 2v7h1a2 2 0 0 1 2 2v1.18L11.82 10zm-6 0h.73L6 9.27zm13.77-2.77c.45.45.73 1.08.73 1.77v9.67L19 17.18v-5.89c-.31.13-.64.21-1 .21A2.5 2.5 0 0 1 15.5 9c0-1.07.67-1.97 1.61-2.33L15 4.56l1.06-1.06l3.72 3.72z"></svg:path>`,
})
export class MdiGasStationOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGasStationOffOutlineIcon],svg[mdi-gas-station-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4.27L2.28 3L6 6.72l15 15L19.73 23l-2.01-2a2.57 2.57 0 0 1-2.22-2.22L14 17.27V21H4V7.27zm18.77 2.96c.45.45.73 1.08.73 1.77v9.67L19 17.18v-5.89c-.31.13-.64.21-1 .21A2.5 2.5 0 0 1 15.5 9c0-1.07.67-1.97 1.61-2.33L15 4.56l1.06-1.06l3.72 3.72zM11.82 10H12V5H6.82L5.06 3.24c.28-.15.6-.24.94-.24h6c1.1 0 2 .9 2 2v7h1c1.1 0 2 .9 2 2v1.18zM6 10h.73L6 9.27zm0 2v7h6v-3.73L8.73 12zm12-2c.55 0 1-.45 1-1s-.45-1-1-1s-1 .45-1 1s.45 1 1 1"></svg:path>`,
})
export class MdiGasStationOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGasStationOutlineIcon],svg[mdi-gas-station-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.77 7.23l.01-.01l-3.72-3.72L15 4.56l2.11 2.11c-.94.36-1.61 1.26-1.61 2.33a2.5 2.5 0 0 0 2.5 2.5c.36 0 .69-.08 1-.21v7.21a1 1 0 0 1-1 1a1 1 0 0 1-1-1V14a2 2 0 0 0-2-2h-1V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v16h10v-7.5h1.5v5A2.5 2.5 0 0 0 18 21a2.5 2.5 0 0 0 2.5-2.5V9c0-.69-.28-1.32-.73-1.77M12 13.5V19H6v-7h6zm0-3.5H6V5h6zm6 0a1 1 0 0 1-1-1a1 1 0 0 1 1-1a1 1 0 0 1 1 1a1 1 0 0 1-1 1"></svg:path>`,
})
export class MdiGasStationOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGateIcon],svg[mdi-gate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6v5H7V7H5v4H3V9H1v12h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v2h2V9h-2v2h-2V7h-2v4h-2V6h-2v5h-2V6zm-6 7h2v4H3zm4 0h2v4H7zm4 0h2v4h-2zm4 0h2v4h-2zm4 0h2v4h-2z"></svg:path>`,
})
export class MdiGateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGateAlertIcon],svg[mdi-gate-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 17h-2v2h2zm0-8h-2v6h2zm-4 4v-2h-2V6h-2v5h-2V6H9v5H7V7H5v4H3V9H1v12h2v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2v-2h-2v-4zM5 17H3v-4h2zm4 0H7v-4h2zm4 0h-2v-4h2z"></svg:path>`,
})
export class MdiGateAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGateAndIcon],svg[mdi-gate-and-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4v16h12a8 8 0 0 0 8-8a8 8 0 0 0-8-8zm2 2h10a6 6 0 0 1 6 6a6 6 0 0 1-6 6H4z"></svg:path>`,
})
export class MdiGateAndIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGateArrowLeftIcon],svg[mdi-gate-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6H7v5H5V6H3v5H2v2h1v1.81c.62-.36 1.3-.6 2-.72V13h2v1.09c.7.12 1.38.36 2 .72V13h2v3.69c.65.98 1 2.13 1 3.31c0 .34-.03.67-.09 1H13v-2h2v2h2V9h-2v2h-2V7h-2v4H9zm6 7v4h-2v-4zM2 20l3 3v-2h4v-2H5v-2z"></svg:path>`,
})
export class MdiGateArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGateArrowRightIcon],svg[mdi-gate-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 6v5h-2V7h-2v4H9V9H7v12h2v-2h2v2h1.09c-.06-.33-.09-.66-.09-1c0-1.18.35-2.33 1-3.31V13h2v1.81c.62-.36 1.3-.6 2-.72V13h2v1.09c.7.12 1.38.36 2 .72V13h1v-2h-1V6h-2v5h-2V6zm-6 7h2v4H9zm10 4v2h-4v2h4v2l3-3z"></svg:path>`,
})
export class MdiGateArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGateBufferIcon],svg[mdi-gate-buffer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 7.24L15.53 12L6 16.76zM4 4v16l16-8z"></svg:path>`,
})
export class MdiGateBufferIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGateNandIcon],svg[mdi-gate-nand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4v16h8c3.43 0 6.5-2.16 7.6-5.4c.4.2.9.4 1.4.4a3 3 0 0 0 3-3a3 3 0 0 0-3-3c-.5 0-.97.15-1.4.4C16.5 6.16 13.43 4 10 4zm2 2h6a6 6 0 0 1 6 6a6 6 0 0 1-6 6H4zm15 5c.5 0 1 .5 1 1s-.5 1-1 1a1 1 0 0 1-1-1c0-.5.5-1 1-1"></svg:path>`,
})
export class MdiGateNandIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGateNorIcon],svg[mdi-gate-nor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4c3 6 3 10 0 16h3c4.4 0 8-2.3 11.6-6.3c.55.8 1.44 1.3 2.4 1.3a3 3 0 0 0 3-3a3 3 0 0 0-3-3c-.96 0-1.85.5-2.4 1.3C13 6.3 9.4 4 5 4zm3 2c3.8 0 7 2.1 10.3 6C12 15.9 8.8 18 5 18q2.25-6 0-12m14 5c.5 0 1 .5 1 1s-.5 1-1 1a1 1 0 0 1-1-1c0-.5.5-1 1-1"></svg:path>`,
})
export class MdiGateNorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGateNotIcon],svg[mdi-gate-not-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4v16l14.2-7c.42 1.19 1.54 2 2.8 2a3 3 0 0 0 3-3a3 3 0 0 0-3-3c-1.26 0-2.38.81-2.8 2zm2 3.3l9.7 4.7L4 16.7zM19 11c.5 0 1 .5 1 1s-.5 1-1 1a1 1 0 0 1-1-1c0-.5.5-1 1-1"></svg:path>`,
})
export class MdiGateNotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGateOpenIcon],svg[mdi-gate-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 21V7H5v4H3V9H1v12h2v-2h2v2zm-4-4v-4h2v4zm18-8v2h-2V7h-2v14h2v-2h2v2h2V9zm0 8h-2v-4h2z"></svg:path>`,
})
export class MdiGateOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGateOrIcon],svg[mdi-gate-or-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4c3 6 3 10 0 16h6c5 0 11-4 14-8c-3-4-9-8-14-8zm3 2h3c3.5 0 8.3 3 11.3 6c-3 3-7.8 6-11.3 6H5c1.4-4.1 1.4-7.9 0-12"></svg:path>`,
})
export class MdiGateOrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGateXnorIcon],svg[mdi-gate-xnor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4c3 6 3 10 0 16h2c3-6 3-10 .1-16zm4 0c3 6 3 10 0 16h3c3.2 0 5.8-3.2 7.7-6c.58.65 1.42 1 2.3 1a3 3 0 0 0 3-3a3 3 0 0 0-3-3c-.88 0-1.72.35-2.3 1c-2-2.8-4.5-6-7.7-6zm3 2c3 0 5 4 6.5 6C14 14 12 18 9 18q2.4-6 0-12m10 5c.5 0 1 .5 1 1s-.5 1-1 1a1 1 0 0 1-1-1c0-.5.5-1 1-1"></svg:path>`,
})
export class MdiGateXnorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGateXorIcon],svg[mdi-gate-xor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4c3 6 3 10 0 16h2c3-6 3-10 .1-16zm4 0c3 6 3 10 0 16h3c5 0 9-3 13-8c-4-5-8-8-13-8zm3 2c3.8 0 7 2.1 10.3 6c-3.4 3.9-6.5 6-10.3 6q2.25-6 0-12"></svg:path>`,
})
export class MdiGateXorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGatsbyIcon],svg[mdi-gatsby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 0 1-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.96 7.96 0 0 0 12 4m-8 8a8 8 0 0 0 8 8c.04 0 .09 0-8-8"></svg:path>`,
})
export class MdiGatsbyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGaugeIcon],svg[mdi-gauge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8c0 2.4-1 4.5-2.7 6c-1.4-1.3-3.3-2-5.3-2s-3.8.7-5.3 2C5 16.5 4 14.4 4 12a8 8 0 0 1 8-8m2 1.89c-.38.01-.74.26-.9.65l-1.29 3.23l-.1.23c-.71.13-1.3.6-1.57 1.26c-.41 1.03.09 2.19 1.12 2.6s2.19-.09 2.6-1.12c.26-.66.14-1.42-.29-1.98l.1-.26l1.29-3.21l.01-.03c.2-.51-.05-1.09-.56-1.3c-.13-.05-.26-.07-.41-.07M10 6a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M7 9a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m10 0a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiGaugeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGaugeEmptyIcon],svg[mdi-gauge-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 2.4 1 4.5 2.7 6c1.4-1.3 3.3-2 5.3-2s3.8.7 5.3 2c1.7-1.5 2.7-3.6 2.7-6a8 8 0 0 0-8-8m2 2a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m-4 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M6.91 8.94c.13 0 .25.03.39.06l3.2 1.32l.27.11c.56-.43 1.32-.55 1.98-.28c1.02.41 1.52 1.58 1.1 2.6a1.99 1.99 0 0 1-2.6 1.1c-.66-.26-1.13-.85-1.25-1.57l-.23-.1l-3.22-1.3l-.02-.01c-.53-.21-.76-.79-.56-1.31a1 1 0 0 1 .94-.62M17 9a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1"></svg:path>`,
})
export class MdiGaugeEmptyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGaugeFullIcon],svg[mdi-gauge-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8c0 2.4-1 4.5-2.7 6c-1.4-1.3-3.3-2-5.3-2s-3.8.7-5.3 2C5 16.5 4 14.4 4 12a8 8 0 0 1 8-8m-2 2a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m3.09 2.94c-.13 0-.25.03-.39.06l-3.2 1.32l-.27.11c-.56-.43-1.32-.55-1.98-.28a1.99 1.99 0 0 0-1.1 2.6a1.99 1.99 0 0 0 2.6 1.1c.66-.26 1.13-.85 1.25-1.57l.23-.1l3.22-1.3l.02-.01c.53-.21.76-.79.56-1.31a1 1 0 0 0-.94-.62M7 9a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiGaugeFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGaugeLowIcon],svg[mdi-gauge-low-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8c0 2.4 1 4.5 2.7 6c1.4-1.3 3.3-2 5.3-2s3.8.7 5.3 2c1.7-1.5 2.7-3.6 2.7-6a8 8 0 0 0-8-8m-2 1.89c.38.01.74.26.9.65l1.29 3.23l.1.23c.71.13 1.3.6 1.57 1.26c.41 1.03-.09 2.19-1.12 2.6s-2.19-.09-2.6-1.12c-.26-.66-.14-1.42.29-1.98l-.1-.26l-1.29-3.21l-.01-.03c-.2-.51.05-1.09.56-1.3c.13-.05.26-.07.41-.07M14 6a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m3 3a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M7 9a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1"></svg:path>`,
})
export class MdiGaugeLowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGavelIcon],svg[mdi-gavel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.3 20.28l9.6-9.6l-1.4-1.42l-.72.71a.996.996 0 0 1-1.41 0l-.71-.71a.996.996 0 0 1 0-1.41l5.66-5.66a.996.996 0 0 1 1.41 0l.71.71c.39.39.39 1.02 0 1.41l-.71.69l1.42 1.43a.996.996 0 0 1 1.41 0c.39.39.39 1.03 0 1.42l1.41 1.41l.71-.71c.39-.39 1.03-.39 1.42 0l.7.71c.39.39.39 1.03 0 1.42l-5.65 5.65c-.39.39-1.03.39-1.42 0l-.7-.7a.99.99 0 0 1 0-1.42l.7-.71l-1.41-1.41l-9.61 9.61a.996.996 0 0 1-1.41 0c-.39-.39-.39-1.03 0-1.42M20 19a2 2 0 0 1 2 2v1H12v-1a2 2 0 0 1 2-2z"></svg:path>`,
})
export class MdiGavelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGenderFemaleIcon],svg[mdi-gender-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4a6 6 0 0 1 6 6c0 2.97-2.16 5.44-5 5.92V18h2v2h-2v2h-2v-2H9v-2h2v-2.08c-2.84-.48-5-2.95-5-5.92a6 6 0 0 1 6-6m0 2a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4"></svg:path>`,
})
export class MdiGenderFemaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGenderMaleIcon],svg[mdi-gender-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 9c1.29 0 2.5.41 3.47 1.11L17.58 5H13V3h8v8h-2V6.41l-5.11 5.09c.7 1 1.11 2.2 1.11 3.5a6 6 0 0 1-6 6a6 6 0 0 1-6-6a6 6 0 0 1 6-6m0 2a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4"></svg:path>`,
})
export class MdiGenderMaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGenderMaleFemaleIcon],svg[mdi-gender-male-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.58 4H14V2h7v7h-2V5.41l-3.83 3.83A5 5 0 0 1 12 16.9V19h2v2h-2v2h-2v-2H8v-2h2v-2.1A5 5 0 0 1 6 12a5 5 0 0 1 5-5c1 0 1.96.3 2.75.83zM11 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></svg:path>`,
})
export class MdiGenderMaleFemaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGenderMaleFemaleVariantIcon],svg[mdi-gender-male-female-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3a5 5 0 0 0 2 4a5 5 0 0 0-2 4a5 5 0 0 0 4 4.9V18H9v2h2v2h2v-2h2v-2h-2v-2.1a5 5 0 0 0 4-4.9a5 5 0 0 0-2-4a5 5 0 0 0 2-4h-2a3 3 0 0 1-3 3a3 3 0 0 1-3-3m3 5a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3"></svg:path>`,
})
export class MdiGenderMaleFemaleVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGenderNonBinaryIcon],svg[mdi-gender-non-binary-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3h-2v2.27L9.04 4.13l-1 1.74L10 7L8.04 8.13l1 1.74L11 8.73v3.37a5 5 0 1 0 2 0V8.73l1.96 1.14l1-1.74L14 7l1.96-1.13l-1-1.74L13 5.27zm-1 17c-1.65 0-3-1.35-3-3s1.35-3 3-3s3 1.35 3 3s-1.35 3-3 3"></svg:path>`,
})
export class MdiGenderNonBinaryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGenderTransgenderIcon],svg[mdi-gender-transgender-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.58 3H15V1h8v8h-2V4.41l-4.83 4.83A5 5 0 0 1 13 16.9V19h2v2h-2v2h-2v-2H9v-2h2v-2.1a5 5 0 0 1-3.18-7.64L6.64 8.07l-1.4 1.39l-1.41-1.42l1.4-1.39L3 4.42V8H1V1h7v2H4.41l2.23 2.24l1.44-1.43L9.5 5.23L8.06 6.66l1.17 1.18C10 7.31 11 7 12 7s1.96.3 2.75.83zM12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"></svg:path>`,
})
export class MdiGenderTransgenderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGeneratorMobileIcon],svg[mdi-generator-mobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2H2v17a2 2 0 0 0 2 2h8.1c-.07-.32-.1-.66-.1-1s.03-.68.1-1H4zm9 15c.91-1.21 2.36-2 4-2s3.09.79 4 2h1V6c0-1.11-.89-2-2-2H8a2 2 0 0 0-2 2v11zm7-11v2h-6V6zm-6 4h6v2h-6zm-7 1l3-6v4h2l-3 6v-4zm7.17 8a3 3 0 0 0-.17 1a3 3 0 0 0 3 3c1.66 0 3-1.34 3-3s-1.34-3-3-3c-1.31 0-2.42.84-2.83 2"></svg:path>`,
})
export class MdiGeneratorMobileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGeneratorPortableIcon],svg[mdi-generator-portable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12h2v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h10v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h2V8a2 2 0 0 0-2-2h-1V4a2 2 0 0 0-2-2zm7 8V8h6v2zm0 4v-2h6v2zM7 4h10v2H7zm0 4v4h2l-3 6v-4H4z"></svg:path>`,
})
export class MdiGeneratorPortableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGeneratorStationaryIcon],svg[mdi-generator-stationary-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3a2 2 0 0 0-2 2v11h2v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h6v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h2V5a2 2 0 0 0-2-2zm6 4V5h6v2zm0 2h6v2h-6zM8 5v4h2l-3 6v-4H5zm14 15v2H2v-2z"></svg:path>`,
})
export class MdiGeneratorStationaryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGentooIcon],svg[mdi-gentoo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.28 2c-.35 0-.71.03-1.05.1c-3.62.66-6.17 3.79-6.38 5.86c-.11 1.01.44 1.77.74 2.1c.81.91 2.44 1.6 3.48 2.17c-1.51 1.27-2.2 1.91-2.88 2.63c-1.02 1.07-1.74 2.24-1.74 3.09c0 .27-.05 1.14.31 1.82c.13.26.51 1.12 1.65 1.76c.73.41 1.76.56 2.78.42c3.14-.45 7.35-3.12 10.36-5.6c1.91-1.58 3.31-3.12 3.71-3.85c.33-.63.37-1.72.18-2.41c-.54-1.95-4.91-5.94-8.48-7.54c-.82-.37-1.76-.55-2.68-.55m1.06 2.91q.375 0 .66.09c1.15.3 3.08 1.68 2.91 2.94c-.23 1.66-1.68 2.33-3.35 2.09c-.98-.13-2.93-1.23-2.78-3.14c.11-1.49 1.52-1.99 2.56-1.98m-.02 1.74c-.27 0-.48.06-.58.22c-.47.72-.24 1.22.18 1.55c.15-.38 1.79.03 1.83.37c1.42-1.07-.39-2.13-1.43-2.14"></svg:path>`,
})
export class MdiGentooIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGestureIcon],svg[mdi-gesture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.59 6.89C5.29 6.18 6 5.54 6.3 5.67c.5.2 0 1.03-.3 1.52c-.25.42-2.86 3.89-2.86 6.31c0 1.28.48 2.34 1.36 3a3 3 0 0 0 2.62.44c1.07-.31 1.95-1.4 3.06-2.77c1.21-1.49 2.82-3.44 4.08-3.44c1.63 0 1.65 1.01 1.74 1.77c-3.76.66-5.36 3.69-5.36 5.39S12.08 21 13.85 21c1.65 0 4.29-1.35 4.69-6.12H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2c-2.25 0-4.18 1.91-4.94 2.82c-.56.75-2.06 2.5-2.29 2.74c-.27.3-.68.84-1.11.84c-.45 0-.72-.83-.36-1.92c.35-1.09 1.4-2.86 1.85-3.52c.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3C5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93zm9.29 11.66c-.31 0-.74-.26-.74-.72c0-.6.73-2.2 2.86-2.76c-.29 2.69-1.42 3.48-2.12 3.48"></svg:path>`,
})
export class MdiGestureIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGestureDoubleTapIcon],svg[mdi-gesture-double-tap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 9a1 1 0 0 1 1-1a1 1 0 0 1 1 1v4.47l1.21.13l4.94 2.19c.53.24.85.77.85 1.35v4.36c-.03.82-.68 1.47-1.5 1.5H11c-.38 0-.74-.15-1-.43l-4.9-4.2l.74-.77c.19-.21.46-.32.74-.32h.22L10 19zm1-4a4 4 0 0 1 4 4c0 1.5-.8 2.77-2 3.46v-1.22c.61-.55 1-1.35 1-2.24a3 3 0 0 0-3-3a3 3 0 0 0-3 3c0 .89.39 1.69 1 2.24v1.22C7.8 11.77 7 10.5 7 9a4 4 0 0 1 4-4m0-2a6 6 0 0 1 6 6c0 1.7-.71 3.23-1.84 4.33l-1-.45A5.02 5.02 0 0 0 16 9a5 5 0 0 0-5-5a5 5 0 0 0-5 5c0 2.05 1.23 3.81 3 4.58v1.08C6.67 13.83 5 11.61 5 9a6 6 0 0 1 6-6"></svg:path>`,
})
export class MdiGestureDoubleTapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGesturePinchIcon],svg[mdi-gesture-pinch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9a1 1 0 0 1 1-1a1 1 0 0 1 1 1v4.47l1.21.13l4.94 2.2c.52.24.85.76.85 1.34v4.36c-.03.82-.68 1.47-1.5 1.5H14c-.38 0-.74-.15-1-.43l-4.9-4.2l.74-.77c.19-.21.46-.32.74-.32h.22L13 19zm1-4c1.42 0 2.74.76 3.45 2c1.11 1.9.46 4.35-1.45 5.46v-1.23c.64-.56 1-1.38 1-2.23a3 3 0 0 0-3-3a3 3 0 0 0-3 3c0 .85.36 1.67 1 2.23v1.23c-1.23-.71-2-2.03-2-3.46a4 4 0 0 1 4-4M4 9l3 3H5v3H3v-3H1zm0-2L1 4h2V1h2v3h2zm5 7c.73 0 1.41.19 2 .54v1.22c-.53-.47-1.23-.76-2-.76a3 3 0 0 0-3 3c0 1 .5 1.87 1.22 2.42L9.31 22H9a4 4 0 0 1-4-4a4 4 0 0 1 4-4"></svg:path>`,
})
export class MdiGesturePinchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGestureSpreadIcon],svg[mdi-gesture-spread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 1l3 3H5v3H3V4H1zm0 14l-3-3h2V9h2v3h2zm9-6a1 1 0 0 1 1-1a1 1 0 0 1 1 1v4.47l1.21.13l4.94 2.2c.52.24.85.76.85 1.34v4.36c-.03.82-.68 1.47-1.5 1.5H14c-.38 0-.74-.15-1-.43l-4.9-4.2l.74-.77c.19-.21.46-.32.74-.32h.22L13 19zm1-4c1.42 0 2.74.76 3.45 2c1.11 1.9.46 4.35-1.45 5.46v-1.23c.64-.56 1-1.38 1-2.23a3 3 0 0 0-3-3a3 3 0 0 0-3 3c0 .85.36 1.67 1 2.23v1.23c-1.23-.71-2-2.03-2-3.46a4 4 0 0 1 4-4m-5 9c.73 0 1.41.19 2 .54v1.22c-.53-.47-1.23-.76-2-.76a3 3 0 0 0-3 3c0 1 .5 1.87 1.22 2.42L9.31 22H9a4 4 0 0 1-4-4a4 4 0 0 1 4-4"></svg:path>`,
})
export class MdiGestureSpreadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGestureSwipeIcon],svg[mdi-gesture-swipe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.11 3.89L22 2v5h-5l2.08-2.08c-.53-.69-1.44-1.26-2.72-1.73S13.63 2.5 12 2.5c-1.62 0-3.08.22-4.36.69S5.45 4.23 4.92 4.92L7 7H2V2l1.89 1.89C4.64 3 5.74 2.31 7.2 1.78C8.65 1.25 10.25 1 12 1s3.35.25 4.8.78c1.46.53 2.56 1.22 3.31 2.11m-.38 12.38v.18L19 21.7c-.08.38-.24.69-.5.94c-.27.25-.59.36-.97.36h-6.8c-.37 0-.73-.14-1.03-.45l-4.97-4.92l.8-.8c.22-.22.47-.33.8-.33h.23l3.44.75V6.5c0-.39.13-.74.43-1.04S11.08 5 11.5 5c.39 0 .74.16 1.04.46s.46.65.46 1.04v6h.78c.1 0 .27.05.52.11l4.54 2.25c.6.28.89.75.89 1.41"></svg:path>`,
})
export class MdiGestureSwipeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGestureSwipeDownIcon],svg[mdi-gesture-swipe-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 9a1 1 0 0 1 1-1a1 1 0 0 1 1 1v4.47l1.21.13l4.94 2.19c.53.24.85.77.85 1.35v4.36c-.03.82-.68 1.47-1.5 1.5H11c-.38 0-.74-.15-1-.43l-4.9-4.2l.74-.77c.19-.21.46-.32.74-.32h.22L10 19zM1 9l3 3l3-3H5V3H3v6z"></svg:path>`,
})
export class MdiGestureSwipeDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGestureSwipeHorizontalIcon],svg[mdi-gesture-swipe-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1L3 4l3 3V5h3v2l3-3l-3-3v2H6zm5 7a1 1 0 0 0-1 1v10l-3.2-1.72h-.22c-.28 0-.55.11-.74.32l-.74.77l4.9 4.2c.26.28.62.43 1 .43h6.5a1.5 1.5 0 0 0 1.5-1.5v-4.36c0-.58-.32-1.11-.85-1.35l-4.94-2.19l-1.21-.13V9a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiGestureSwipeHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGestureSwipeLeftIcon],svg[mdi-gesture-swipe-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 9a1 1 0 0 1 1-1a1 1 0 0 1 1 1v4.47l1.21.13l4.94 2.19c.53.24.85.77.85 1.35v4.36c-.03.82-.68 1.47-1.5 1.5H11c-.38 0-.74-.15-1-.43l-4.9-4.2l.74-.77c.19-.21.46-.32.74-.32h.22L10 19zM3 4l3 3V5h6V3H6V1z"></svg:path>`,
})
export class MdiGestureSwipeLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGestureSwipeRightIcon],svg[mdi-gesture-swipe-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 9a1 1 0 0 1 1-1a1 1 0 0 1 1 1v4.47l1.21.13l4.94 2.19c.53.24.85.77.85 1.35v4.36c-.03.82-.68 1.47-1.5 1.5H11c-.38 0-.74-.15-1-.43l-4.9-4.2l.74-.77c.19-.21.46-.32.74-.32h.22L10 19zm2-5L9 1v2H3v2h6v2z"></svg:path>`,
})
export class MdiGestureSwipeRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGestureSwipeUpIcon],svg[mdi-gesture-swipe-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 9a1 1 0 0 1 1-1a1 1 0 0 1 1 1v4.47l1.21.13l4.94 2.19c.53.24.85.77.85 1.35v4.36c-.03.82-.68 1.47-1.5 1.5H11c-.38 0-.74-.15-1-.43l-4.9-4.2l.74-.77c.19-.21.46-.32.74-.32h.22L10 19zM7 6L4 3L1 6h2v6h2V6z"></svg:path>`,
})
export class MdiGestureSwipeUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGestureSwipeVerticalIcon],svg[mdi-gesture-swipe-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3L1 6h2v3H1l3 3l3-3H5V6h2zm7 5a1 1 0 0 0-1 1v10l-3.2-1.72h-.22c-.28 0-.55.11-.74.32l-.74.77l4.9 4.2c.26.28.62.43 1 .43h6.5a1.5 1.5 0 0 0 1.5-1.5v-4.36c0-.58-.32-1.11-.85-1.35l-4.94-2.19l-1.21-.13V9a1 1 0 0 0-1-1"></svg:path>`,
})
export class MdiGestureSwipeVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGestureTapIcon],svg[mdi-gesture-tap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 9a1 1 0 0 1 1-1a1 1 0 0 1 1 1v4.47l1.21.13l4.94 2.19c.53.24.85.77.85 1.35v4.36c-.03.82-.68 1.47-1.5 1.5H11c-.38 0-.74-.15-1-.43l-4.9-4.2l.74-.77c.19-.21.46-.32.74-.32h.22L10 19zm1-4a4 4 0 0 1 4 4c0 1.5-.8 2.77-2 3.46v-1.22c.61-.55 1-1.35 1-2.24a3 3 0 0 0-3-3a3 3 0 0 0-3 3c0 .89.39 1.69 1 2.24v1.22C7.8 11.77 7 10.5 7 9a4 4 0 0 1 4-4"></svg:path>`,
})
export class MdiGestureTapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGestureTapBoxIcon],svg[mdi-gesture-tap-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.11 0-2 .89-2 2v16c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2m-9 2c2.21 0 4 1.79 4 4c0 1.5-.8 2.77-2 3.46v-1.22c.61-.55 1-1.35 1-2.24c0-1.66-1.34-3-3-3S8 6.34 8 8c0 .89.39 1.69 1 2.24v1.22C7.8 10.77 7 9.5 7 8c0-2.21 1.79-4 4-4m7 14.5c-.03.82-.68 1.47-1.5 1.5H11c-.38 0-.74-.15-1-.43l-4-4.2l.74-.77c.19-.21.46-.32.76-.32h.2L10 16V8c0-.55.45-1 1-1s1 .45 1 1v4.47l1.21.13l3.94 2.19c.53.24.85.77.85 1.35z"></svg:path>`,
})
export class MdiGestureTapBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGestureTapButtonIcon],svg[mdi-gesture-tap-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 5c2.21 0 4 1.79 4 4c0 1.5-.8 2.77-2 3.46v-1.22c.61-.55 1-1.35 1-2.24c0-1.66-1.34-3-3-3s-3 1.34-3 3c0 .89.39 1.69 1 2.24v1.22C9.8 11.77 9 10.5 9 9c0-2.21 1.79-4 4-4m7 15.5c-.03.82-.68 1.47-1.5 1.5H13c-.38 0-.74-.15-1-.43l-4-4.2l.74-.77c.19-.21.46-.32.76-.32h.2L12 18V9c0-.55.45-1 1-1s1 .45 1 1v4.47l1.21.13l3.94 2.19c.53.24.85.77.85 1.35zM20 2H4c-1.1 0-2 .9-2 2v8a2 2 0 0 0 2 2h4v-2H4V4h16v8h-2v2h2v-.04l.04.04c1.09 0 1.96-.91 1.96-2V4a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiGestureTapButtonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGestureTapHoldIcon],svg[mdi-gesture-tap-hold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 9a1 1 0 0 1 1-1a1 1 0 0 1 1 1v4.47l1.21.13l4.94 2.19c.53.24.85.77.85 1.35v4.36c-.03.82-.68 1.47-1.5 1.5H11c-.38 0-.74-.15-1-.43l-4.9-4.2l.74-.77c.19-.21.46-.32.74-.32h.22L10 19zm-1 3.44V9a2 2 0 0 1 2-2a2 2 0 0 1 2 2v3.44c1.19-.69 2-1.97 2-3.44a4 4 0 0 0-4-4a4 4 0 0 0-4 4c0 1.47.81 2.75 2 3.44"></svg:path>`,
})
export class MdiGestureTapHoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGestureTwoDoubleTapIcon],svg[mdi-gesture-two-double-tap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15.14v6.36c-.03.82-.68 1.47-1.5 1.5H11c-.38 0-.74-.15-1-.43l-4.9-4.2l.74-.77c.19-.21.46-.32.74-.32h.22L10 19V9a1 1 0 0 1 1-1a1 1 0 0 1 1 1V7a1 1 0 0 1 1-1a1 1 0 0 1 1 1v5l4.15 1.84c.51.23.85.74.85 1.3M13 3a4 4 0 0 1 4 4c0 1.5-.8 2.77-2 3.46V9.24c.61-.55 1-1.35 1-2.24a3 3 0 0 0-3-3c-1.35 0-2.5.9-2.87 2.13A3.003 3.003 0 0 0 9 11.24v1.22C7.8 11.77 7 10.5 7 9c0-1.62.97-3 2.35-3.65C10 3.97 11.38 3 13 3m0-2a6 6 0 0 1 6 6c0 2.06-1.04 3.88-2.62 4.96l-1.12-.5A4.98 4.98 0 0 0 18 7a5 5 0 0 0-5-5c-1.89 0-3.54 1.05-4.39 2.61C7.05 5.46 6 7.11 6 9c0 2.05 1.23 3.81 3 4.58v1.08C6.67 13.83 5 11.61 5 9c0-2.17 1.15-4.07 2.88-5.12A5.98 5.98 0 0 1 13 1"></svg:path>`,
})
export class MdiGestureTwoDoubleTapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGestureTwoTapIcon],svg[mdi-gesture-two-tap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 15.14v6.36c-.03.82-.68 1.47-1.5 1.5H11c-.38 0-.74-.15-1-.43l-4.9-4.2l.74-.77c.19-.21.46-.32.74-.32h.22L10 19V9a1 1 0 0 1 1-1a1 1 0 0 1 1 1V7a1 1 0 0 1 1-1a1 1 0 0 1 1 1v5l4.15 1.84c.51.23.85.74.85 1.3m-4-4.69V9.23c.23-.2.42-.44.57-.69c.27-.45.43-.98.43-1.54a3 3 0 0 0-3-3c-.79 0-1.5.31-2.05.81l-.14.14c-.13.14-.25.29-.35.45s-.19.34-.26.52c-.03.08-.05.14-.07.21A3 3 0 0 0 8 9c0 .7.24 1.34.64 1.85c.1.15.23.26.36.38v1.23C7.8 11.77 7 10.5 7 9c0-1.62.97-3 2.35-3.65C10 3.97 11.38 3 13 3a4 4 0 0 1 4 4c0 1.5-.8 2.77-2 3.46z"></svg:path>`,
})
export class MdiGestureTwoTapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGhostIcon],svg[mdi-ghost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a9 9 0 0 0-9 9v11l3-3l3 3l3-3l3 3l3-3l3 3V11a9 9 0 0 0-9-9M9 8a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m6 0a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiGhostIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGhostOffIcon],svg[mdi-ghost-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3.27L3.28 2L22 20.72L20.73 22l-2.86-2.87L15 22l-3-3l-3 3l-3-3l-3 3V11c0-1.91.59-3.67 1.6-5.13zM12 2a9 9 0 0 1 9 9v6.18l-5.3-5.3c.76-.29 1.3-1.02 1.3-1.88a2 2 0 0 0-2-2c-.86 0-1.59.54-1.87 1.3L7.2 3.38A8.95 8.95 0 0 1 12 2m-5 8a2 2 0 0 0 2 2c.5 0 .93-.17 1.27-.46L7.46 8.73C7.17 9.07 7 9.5 7 10"></svg:path>`,
})
export class MdiGhostOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGhostOffOutlineIcon],svg[mdi-ghost-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.29 5.09L6.84 3.64A8.93 8.93 0 0 1 12 2a9 9 0 0 1 9 9v6.8l-2-2V11c0-3.86-3.14-7-7-7c-1.37 0-2.64.4-3.71 1.09m13.82 16.37l-1.27 1.27l-3.28-3.28L15 22l-3-3l-3 3l-3-3l-3 3V11c0-1.74.5-3.37 1.36-4.75L1.11 3l1.28-1.27l4.5 4.5l1.8 1.8l2.28 2.28l6.44 6.45h.01L21 20.34v.01zm-5.97-3.43l-6.25-6.25c-.27.14-.57.22-.89.22a2 2 0 0 1-2-2c0-.32.08-.62.22-.89l-1.4-1.4C5.3 8.69 5 9.81 5 11v6.17l1-1l1.41 1.42L9 19.17l1.59-1.58L12 16.17l1.41 1.42L15 19.17zM15 8c-1.04 0-1.89.8-2 1.82L15.18 12c1.02-.11 1.82-.96 1.82-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiGhostOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGhostOutlineIcon],svg[mdi-ghost-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a9 9 0 0 0-9 9v11l3-3l3 3l3-3l3 3l3-3l3 3V11a9 9 0 0 0-9-9m7 15.17l-1-1l-1.41 1.42L15 19.17l-1.59-1.58L12 16.17l-1.41 1.42L9 19.17l-1.59-1.58L6 16.17l-1 1V11c0-3.86 3.14-7 7-7s7 3.14 7 7zM11 10c0 1.11-.89 2-2 2s-2-.89-2-2s.9-2 2-2s2 .9 2 2m6 0c0 1.11-.89 2-2 2s-2-.89-2-2s.9-2 2-2s2 .9 2 2"></svg:path>`,
})
export class MdiGhostOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGifIcon],svg[mdi-gif-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M11 8h2v8h-2V8M7.67 8H4.33C3.53 8 3 8.67 3 9.33v5.34c0 .66.53 1.33 1.33 1.33h3.34c.8 0 1.33-.67 1.33-1.33V12H7v2H5v-4h4v-.67C9 8.67 8.47 8 7.67 8M21 10V8h-6v8h2v-2h2.5v-2H17v-2h4z" fill="currentColor"></svg:path>`,
})
export class MdiGifIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGiftIcon],svg[mdi-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.06 1.93C7.17 1.92 5.33 3.74 6.17 6H3a2 2 0 0 0-2 2v2a1 1 0 0 0 1 1h9V8h2v3h9a1 1 0 0 0 1-1V8a2 2 0 0 0-2-2h-3.17C19 2.73 14.6.42 12.57 3.24L12 4l-.57-.78c-.63-.89-1.5-1.28-2.37-1.29M9 4c.89 0 1.34 1.08.71 1.71S8 5.89 8 5a1 1 0 0 1 1-1m6 0c.89 0 1.34 1.08.71 1.71S14 5.89 14 5a1 1 0 0 1 1-1M2 12v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8h-9v8h-2v-8z"></svg:path>`,
})
export class MdiGiftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGiftOffIcon],svg[mdi-gift-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1.11 3l3.03 3.04H3a2 2 0 0 0-2 2v2c0 .55.45 1 1 1h7.15l1 1H2v8c0 1.1.9 2 2 2h16c.05 0 .09-.01.13-.04l1.43 1.45l1.27-1.27L2.39 1.73zM11 12.89l2 2v5.15h-2zm11-.85v6.76l-6.76-6.76zm-1-6h-3.17C19 2.77 14.6.455 12.57 3.28l-.57.76l-.57-.78C10.8 2.37 9.93 2 9.06 1.97c-1-.01-1.98.53-2.56 1.33l1.54 1.54c.09-.46.46-.8.96-.8c.89 0 1.34 1.08.71 1.71c-.15.14-.32.25-.5.25l2.03 2.04H13V9.8l1.24 1.24H22c.55 0 1-.45 1-1v-2c0-1.11-.89-2-2-2m-5.29-.29c-.63.63-1.71.18-1.71-.71c0-.54.45-1 1-1c.89 0 1.34 1.08.71 1.71"></svg:path>`,
})
export class MdiGiftOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGiftOffOutlineIcon],svg[mdi-gift-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6h-3.17A3 3 0 0 0 18 5c0-1.66-1.34-3-3-3c-1 0-1.88.5-2.43 1.24v-.01L12 4l-.57-.77v.01A3.03 3.03 0 0 0 9 2c-1.03 0-1.94.5-2.5 1.32l1.53 1.51C8.12 4.36 8.5 4 9 4c.55 0 1 .45 1 1c0 .5-.36.88-.83.97L13 9.8V8h8v2h-7.8l2 2H20v4.8l2 2V12c.55 0 1-.45 1-1V8a2 2 0 0 0-2-2m-6 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1M1.11 3l3 3H3c-1.1 0-2 .9-2 2v3c0 .55.45 1 1 1v8a2 2 0 0 0 2 2h16.1l1.46 1.45l1.27-1.27L2.39 1.73zM13 14.89L18.11 20H13zm-2-2V20H4v-8h6.11zM8.11 10H3V8h3.11z"></svg:path>`,
})
export class MdiGiftOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGiftOpenIcon],svg[mdi-gift-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 10.92l-2.74-1.59c2.64-2.25-.01-6.45-3.18-5.02l-.87.37l-.11-.96c-.1-1.08-.66-1.85-1.4-2.3c-1.64-.953-4.14-.3-4.54 2.08L6.41 1.92c-.96-.56-2.18-.23-2.73.73l-1 1.73c-.28.48-.11 1.09.37 1.37l7.79 4.5l1.5-2.6l1.73 1l-1.5 2.6l7.79 4.5c.48.25 1.1.11 1.37-.37l1-1.73c.55-.96.23-2.18-.73-2.73M12.37 5c-.87.25-1.57-.68-1.13-1.45c.26-.48.89-.64 1.37-.37c.77.45.62 1.61-.24 1.82m5.19 3c-.86.25-1.56-.68-1.12-1.45c.27-.48.89-.64 1.36-.37c.77.45.62 1.61-.24 1.82m3.31 8.88c.41 0 .8-.14 1.13-.38V20c0 1.11-.89 2-2 2H4a2 2 0 0 1-2-2v-9h8.15l.85.5V20h2v-7.35l6.87 3.96c.3.18.63.27 1 .27"></svg:path>`,
})
export class MdiGiftOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGiftOpenOutlineIcon],svg[mdi-gift-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 10.87l-2.74-1.59c.24-.21.47-.48.64-.78c.83-1.43.34-3.27-1.1-4.1c-.86-.5-1.87-.5-2.72-.14l.01-.01l-.88.39l-.11-.96l-.01.01c-.09-.91-.62-1.79-1.48-2.29A3.023 3.023 0 0 0 9.5 2.5c-.17.3-.28.63-.34.95L6.41 1.87c-.96-.55-2.18-.23-2.73.73l-1.5 2.6a.99.99 0 0 0 .37 1.36l1.73 1L8.5 10H2v10a2 2 0 0 0 2 2h16c1.11 0 2-.89 2-2v-5.13l.73-1.27c.55-.96.23-2.18-.73-2.73M16.44 6.5c.27-.5.89-.64 1.36-.37c.48.28.65.87.37 1.37s-.89.64-1.37.37c-.47-.28-.64-.87-.36-1.37m-2.37 2.1l6.93 4l-1 1.73l-6.93-4zM11 20H4v-8h7zm.34-10.67l-6.93-4l1-1.73l6.93 4zm.27-4.46c-.48-.28-.64-.87-.37-1.37c.26-.5.89-.64 1.37-.37c.48.28.64.87.36 1.37c-.27.5-.88.64-1.36.37M13 20v-7.4l7 4.04V20z"></svg:path>`,
})
export class MdiGiftOpenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGiftOutlineIcon],svg[mdi-gift-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a1 1 0 0 1-1-1V8a2 2 0 0 1 2-2h3.17A3 3 0 0 1 6 5a3 3 0 0 1 3-3c1 0 1.88.5 2.43 1.24v-.01L12 4l.57-.77v.01C13.12 2.5 14 2 15 2a3 3 0 0 1 3 3a3 3 0 0 1-.17 1H21a2 2 0 0 1 2 2v3a1 1 0 0 1-1 1M4 20h7v-8H4zm16 0v-8h-7v8zM9 4a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m6 0a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1M3 8v2h8V8zm10 0v2h8V8z"></svg:path>`,
})
export class MdiGiftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGitIcon],svg[mdi-git-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.6 10.59L8.38 4.8l1.69 1.7c-.24.85.15 1.78.93 2.23v5.54c-.6.34-1 .99-1 1.73a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-.74-.4-1.39-1-1.73V9.41l2.07 2.09c-.07.15-.07.32-.07.5a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2c-.18 0-.35 0-.5.07L13.93 7.5a1.98 1.98 0 0 0-1.15-2.34c-.43-.16-.88-.2-1.28-.09L9.8 3.38l.79-.78c.78-.79 2.04-.79 2.82 0l7.99 7.99c.79.78.79 2.04 0 2.82l-7.99 7.99c-.78.79-2.04.79-2.82 0L2.6 13.41c-.79-.78-.79-2.04 0-2.82"></svg:path>`,
})
export class MdiGitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGithubIcon],svg[mdi-github-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></svg:path>`,
})
export class MdiGithubIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGithubBoxIcon],svg[mdi-github-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4.44c-.32-.07-.33-.68-.33-.89l.01-2.47c0-.84-.29-1.39-.61-1.67c2.01-.22 4.11-.97 4.11-4.44c0-.98-.35-1.79-.92-2.42c.09-.22.4-1.14-.09-2.38c0 0-.76-.23-2.48.93c-.72-.2-1.48-.3-2.25-.31c-.76.01-1.54.11-2.25.31c-1.72-1.16-2.48-.93-2.48-.93c-.49 1.24-.18 2.16-.09 2.38c-.57.63-.92 1.44-.92 2.42c0 3.47 2.1 4.22 4.1 4.47c-.26.2-.49.6-.57 1.18c-.52.23-1.82.63-2.62-.75c0 0-.48-.86-1.38-.93c0 0-.88 0-.06.55c0 0 .59.28 1 1.32c0 0 .52 1.75 3.03 1.21l.01 1.53c0 .21-.02.82-.34.89H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" fill="currentColor"></svg:path>`,
})
export class MdiGithubBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGithubFaceIcon],svg[mdi-github-face-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M20.38 8.53c.16-.4.68-1.99-.17-4.14c0 0-1.31-.39-4.3 1.61c-1.25-.33-2.58-.38-3.91-.38c-1.32 0-2.66.05-3.91.38c-2.99-2.03-4.3-1.61-4.3-1.61c-.85 2.15-.33 3.74-.16 4.14C2.61 9.62 2 11 2 12.72c0 6.44 4.16 7.89 10 7.89c5.79 0 10-1.45 10-7.89c0-1.72-.61-3.1-1.62-4.19M12 19.38c-4.12 0-7.47-.19-7.47-4.19c0-.95.47-1.85 1.27-2.58c1.34-1.23 3.63-.58 6.2-.58c2.59 0 4.85-.65 6.2.58c.8.73 1.3 1.62 1.3 2.58c0 3.99-3.37 4.19-7.5 4.19m-3.14-6.26c-.82 0-1.5 1-1.5 2.22c0 1.23.68 2.24 1.5 2.24c.83 0 1.5-1 1.5-2.24c0-1.23-.67-2.22-1.5-2.22m6.28 0c-.83 0-1.5.99-1.5 2.22c0 1.24.67 2.24 1.5 2.24c.82 0 1.5-1 1.5-2.24c0-1.23-.64-2.22-1.5-2.22z" fill="currentColor"></svg:path>`,
})
export class MdiGithubFaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGitlabIcon],svg[mdi-gitlab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.94 13.11l-1.05-3.22c0-.03-.01-.06-.02-.09l-2.11-6.48a.86.86 0 0 0-.8-.57c-.36 0-.68.25-.79.58l-2 6.17H8.84L6.83 3.33a.85.85 0 0 0-.79-.58c-.37 0-.69.25-.8.58L3.13 9.82v.01l-1.07 3.28c-.16.5.01 1.04.44 1.34l9.22 6.71c.17.12.39.12.56-.01l9.22-6.7c.43-.3.6-.84.44-1.34M8.15 10.45l2.57 7.91l-6.17-7.91m8.73 7.92l2.47-7.59l.1-.33h3.61l-5.59 7.16m4.1-13.67l1.81 5.56h-3.62m-1.3.95l-1.79 5.51L12 19.24l-2.86-8.79M6.03 3.94L7.84 9.5H4.23m-1.18 4.19c-.09-.07-.13-.19-.09-.29l.79-2.43l5.82 7.45m11.38-4.73l-6.51 4.73l.02-.03l5.79-7.42l.79 2.43c.04.1 0 .22-.09.29"></svg:path>`,
})
export class MdiGitlabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGlassCocktailIcon],svg[mdi-glass-cocktail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.5 7l-2-2h13l-2 2M11 13v6H6v2h12v-2h-5v-6l8-8V3H3v2z"></svg:path>`,
})
export class MdiGlassCocktailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGlassCocktailOffIcon],svg[mdi-glass-cocktail-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.33 12.67L7.66 7L6.13 5.47L2.39 1.73L1.11 3L3 4.89V5l8 8v6H6v2h12v-1.11l2.84 2.84l1.27-1.27zM13 19v-4.11L17.11 19zM8.2 5l-2-2H21v2l-6.4 6.4L10.2 7h6.3l2-2z"></svg:path>`,
})
export class MdiGlassCocktailOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGlassFluteIcon],svg[mdi-glass-flute-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2h8c-.33 3-.67 6-1.25 7.83c-.58 1.84-1.42 2.5-1.83 4.25c-.42 1.75-.42 4.59.16 5.92c.59 1.33 1.75 1.17 2.34 1.25c.58.08.58.42.58.75H8c0-.33 0-.67.58-.75c.59-.08 1.75.08 2.34-1.25c.58-1.33.58-4.17.16-5.92c-.41-1.75-1.25-2.41-1.83-4.25C8.67 8 8.33 5 8 2m2 2c.07 1.03.15 2.07.24 3h3.52c.09-.93.17-1.97.24-3z"></svg:path>`,
})
export class MdiGlassFluteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGlassFragileIcon],svg[mdi-glass-fragile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 20h5v2H6v-2h5v-6.03c-2.81-.27-5-2.63-5-5.51c0-.31.03-.61.08-.91L7 2h6.54l-1.21 2.41l-.54 1.09h2l-1.46 2.91l-.54 1.09H14l-1 3.25l2.67-3.66l.79-1.09h-2.25l1.46-2.91l.54-1.09h-2l1-2H17l.93 5.55c.07.3.07.6.07.91c0 2.88-2.19 5.24-5 5.51z"></svg:path>`,
})
export class MdiGlassFragileIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGlassMugIcon],svg[mdi-glass-mug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4v3h8V4zM8 2h13v1l-1 1v16l1 1v1H7v-1l1-1v-1.4l-3.8-1.77C3.5 16.5 3 15.82 3 15V8a2 2 0 0 1 2-2h3V4L7 3V2zM5 15l3 1.39V8H5z"></svg:path>`,
})
export class MdiGlassMugIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGlassMugOffIcon],svg[mdi-glass-mug-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 19.35v-.01L6.66 6l-.59-.59l-3.68-3.68L1.11 3l3.15 3.15C3.5 6.44 3 7.16 3 8v7c0 .82.5 1.5 1.2 1.83L8 18.6V20l-1 1v1h13.11l.73.73l1.27-1.27zM8 16.39L5 15V8h1.11L8 9.89zM8 4L7 3V2h14v1l-1 1v12.8L10.2 7H18V4h-8v2.8l-2-2z"></svg:path>`,
})
export class MdiGlassMugOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGlassMugVariantIcon],svg[mdi-glass-mug-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 3C7.56 3 5.85 4.24 5.23 6.08A3.996 3.996 0 0 0 6 14v8h11v-2h3c.55 0 1-.45 1-1v-8c0-.55-.45-1-1-1h-2V8c0-2.21-1.79-4-4-4h-1.68c-.82-.65-1.79-1-2.82-1m0 2c.79 0 1.53.37 2 1H14a2 2 0 0 1 2 2h-4c-2 0-2.68 1.13-3.5 2.63S6 12 6 12c-1.11 0-2-.89-2-2a2 2 0 0 1 2-2h1v-.5A2.5 2.5 0 0 1 9.5 5m7.5 7h2v6h-2Z"></svg:path>`,
})
export class MdiGlassMugVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGlassMugVariantOffIcon],svg[mdi-glass-mug-variant-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.44 5.24L7 3.79C7.71 3.29 8.57 3 9.5 3c1.03 0 2 .35 2.82 1H14c2.21 0 4 1.79 4 4v2h2c.55 0 1 .45 1 1v6.8l-2-2V12h-2v1.8l-5.74-5.74C11.5 8 11.73 8 12 8h4a2 2 0 0 0-2-2h-2.5a2.49 2.49 0 0 0-3.06-.76m13.67 16.22l-1.27 1.27L18.11 20H17v2H6v-8c-2.21 0-4-1.79-4-4a4 4 0 0 1 2.44-3.67L1.11 3l1.28-1.27l4.8 4.81l2.42 2.42L17 16.34v.01L18.65 18h.01l1.84 1.84v.01zM8.59 10.5L6.11 8H6a2 2 0 0 0-2 2c0 1.11.89 2 2 2c0 0 1.68.13 2.5-1.37z"></svg:path>`,
})
export class MdiGlassMugVariantOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGlassPintOutlineIcon],svg[mdi-glass-pint-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4 2l2 20h11l2-20zm2.2 2h10.6l-1.6 16H7.8z"></svg:path>`,
})
export class MdiGlassPintOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGlassStangeIcon],svg[mdi-glass-stange-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2h8v20H8zm2 2v3h4V4z"></svg:path>`,
})
export class MdiGlassStangeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGlassTulipIcon],svg[mdi-glass-tulip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2h8c-.33.67-.67 1.33-.42 3s1.09 4.33.67 5.74c-.42 1.4-2.08 1.54-2.92 3.12c-.83 1.58-.83 4.61-.25 6.04c.59 1.43 1.75 1.27 2.34 1.35c.58.08.58.42.58.75H8c0-.33 0-.67.58-.75c.59-.08 1.75.08 2.34-1.35c.58-1.43.58-4.46-.25-6.04c-.84-1.58-2.5-1.72-2.92-3.12c-.42-1.41.42-4.07.67-5.74S8.33 2.67 8 2m2 2c0 1.19-.17 2.17-.36 3h4.63c-.14-.83-.27-1.81-.27-3z"></svg:path>`,
})
export class MdiGlassTulipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGlassWineIcon],svg[mdi-glass-wine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.5 21.27l-.84-.09c-.76-.07-1.41-.58-1.66-1.31a11.5 11.5 0 0 1 0-6c2.32-.47 4-2.5 4-4.87c0-2-2-7-2-7H9S7 7 7 9a5 5 0 0 0 4 4.9c.53 1.96.53 4.04 0 6c-.24.72-.88 1.23-1.63 1.31l-.87.09s-.5-.02-.5.7h8c0-.72-.5-.73-.5-.73M9.44 7l1-3h3.12l1 3z"></svg:path>`,
})
export class MdiGlassWineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGlassdoorIcon],svg[mdi-glassdoor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M8 2a3 3 0 0 0-3 3v11.5h3V5h11a3 3 0 0 0-3-3H8m8 5.5V19H5a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V7.5h-3z" fill="currentColor"></svg:path>`,
})
export class MdiGlassdoorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGlassesIcon],svg[mdi-glasses-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10c-.24 0-.45.09-.59.25c-.14.15-.2.37-.17.61l.5 2.99C2.82 14.5 3.4 15 4 15h3c.64 0 1.36-.56 1.5-1.18l1.06-3.19c.04-.13.01-.32-.06-.44c-.11-.12-.28-.19-.5-.19zm4 7H4C2.38 17 .96 15.74.76 14.14l-.5-2.99C.15 10.3.39 9.5.91 8.92S2.19 8 3 8h6c.83 0 1.58.35 2.06.96c.11.15.21.31.29.49c.43-.09.87-.09 1.29 0c.08-.18.18-.34.3-.49C13.41 8.35 14.16 8 15 8h6c.81 0 1.57.34 2.09.92c.51.58.75 1.38.65 2.19l-.51 3.07C23.04 15.74 21.61 17 20 17h-3c-1.56 0-3.08-1.19-3.46-2.7l-.9-2.71c-.38-.28-.91-.28-1.29 0l-.92 2.78C10.07 15.82 8.56 17 7 17m8-7c-.22 0-.39.07-.5.19c-.08.12-.1.31-.05.51l1.01 3.05c.18.69.9 1.25 1.54 1.25h3c.59 0 1.18-.5 1.25-1.11l.51-3.07c.03-.2-.03-.42-.17-.57A.77.77 0 0 0 21 10z"></svg:path>`,
})
export class MdiGlassesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGlobeLightIcon],svg[mdi-globe-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.1 10c1-1 2.4-1.7 3.9-1.9V2h2v6.1c1.5.2 2.9.9 3.9 1.9zm-1.8 3c-.2.6-.3 1.3-.3 2c0 3.9 3.1 7 7 7s7-3.1 7-7c0-.7-.1-1.4-.3-2z"></svg:path>`,
})
export class MdiGlobeLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGlobeLightOutlineIcon],svg[mdi-globe-light-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 8.08V2h-2v6.08c-3.39.49-6 3.39-6 6.92c0 3.87 3.13 7 7 7s7-3.13 7-7c0-3.53-2.61-6.43-6-6.92M12 20c-2.76 0-5-2.24-5-5c0-1.13.39-2.16 1.03-3h7.94c.64.84 1.03 1.87 1.03 3c0 2.76-2.24 5-5 5"></svg:path>`,
})
export class MdiGlobeLightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGlobeModelIcon],svg[mdi-globe-model-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.36 2.64l-1.41 1.42A6.98 6.98 0 0 1 18 9a7 7 0 0 1-7 7c-1.85 0-3.63-.74-4.94-2.05l-1.42 1.41A8.95 8.95 0 0 0 10 17.93V20H6v2h10v-2h-4v-2.06c4.55-.51 8-4.36 8-8.94c0-2.38-.95-4.67-2.64-6.36M11 3.5A5.5 5.5 0 0 0 5.5 9a5.5 5.5 0 0 0 5.5 5.5A5.5 5.5 0 0 0 16.5 9A5.5 5.5 0 0 0 11 3.5m0 2c1.94 0 3.5 1.57 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5A3.5 3.5 0 0 1 7.5 9A3.5 3.5 0 0 1 11 5.5"></svg:path>`,
})
export class MdiGlobeModelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGmailIcon],svg[mdi-gmail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18h-2V9.25L12 13L6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiGmailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGnomeIcon],svg[mdi-gnome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.42 2c-4.16 0-4.92 5.93-2.6 5.93c2.34 0 6.76-5.93 2.6-5.93M12 2.73c-.08 0-.15 0-.22.01c-2.34.3-1.52 4.38-.28 4.45c1.22.08 2.54-4.46.5-4.46M7.93 4.34c-.12 0-.26.03-.4.09c-1.88.78-.29 3.98.77 3.77c.97-.2 1.09-3.9-.37-3.86m-3 2.51c-.16-.01-.34.05-.52.18c-1.51 1.04.5 3.55 1.39 3.16c.77-.34.28-3.3-.87-3.34m8.36 1.92c-3.19.03-7.26 1.65-7.97 4.82C4.53 17.11 8.56 22 12.76 22c2.07 0 4.45-1.87 4.9-4.23c.34-1.8-4.01-1.08-3.85.11c.19 1.43-1.05 2.12-2.26 1.22c-3.86-2.94 6.38-4.4 5.7-8.41c-.22-1.3-1.91-1.93-3.96-1.92"></svg:path>`,
})
export class MdiGnomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGoKartIcon],svg[mdi-go-kart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10h-2.47l-1.15-1.72l1.42-.95l-1.1-1.66l-4.5 3l1.1 1.66l1.43-.95l1.15 1.74L13 12h-2.8L5.83 5.45l-1.66 1.1l1.7 2.56A5.99 5.99 0 0 0 1 15v2h2a3 3 0 0 0 3 3a3 3 0 0 0 3-3h6a3 3 0 0 0 3 3a3 3 0 0 0 3-3h2v-2a5 5 0 0 0-5-5M6 18.5A1.5 1.5 0 0 1 4.5 17A1.5 1.5 0 0 1 6 15.5A1.5 1.5 0 0 1 7.5 17A1.5 1.5 0 0 1 6 18.5m12 0a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5"></svg:path>`,
})
export class MdiGoKartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGoKartTrackIcon],svg[mdi-go-kart-track-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 5.5A3.5 3.5 0 0 0 18.5 2A3.5 3.5 0 0 0 15 5.5V6a3 3 0 0 1-3 3c-2 0-3-3-6-3a4 4 0 0 0-4 4v1h2v-1a2 2 0 0 1 2-2c.86 0 1.42.45 2.32 1.24A5.58 5.58 0 0 0 12 11a5 5 0 0 0 5-5v-.5A1.5 1.5 0 0 1 18.5 4A1.5 1.5 0 0 1 20 5.5c-.14.85-.42 1.68-.83 2.44C18.5 9.2 18.11 10.58 18 12c.09 1.37.5 2.71 1.21 3.89c.39.65.66 1.36.79 2.11a2 2 0 0 1-2 2a2 2 0 0 1-2-2a3.75 3.75 0 0 0-3.75-3.75A3.75 3.75 0 0 0 8.5 18v.5A1.5 1.5 0 0 1 7 20a3 3 0 0 1-3-3v-2h2v-2H0v2h2v2a5 5 0 0 0 5 5a3.5 3.5 0 0 0 3.5-3.5V18a1.75 1.75 0 0 1 1.75-1.75A1.75 1.75 0 0 1 14 18a4 4 0 0 0 4 4a4 4 0 0 0 4-4c0-2-2-4-2-6s2-4.5 2-6.5"></svg:path>`,
})
export class MdiGoKartTrackIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGogIcon],svg[mdi-gog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m6.46 2.54c-.51 0-.92.41-.92.92v3.08a.92.92 0 0 0 .92.92h3.08a.92.92 0 0 0 .92-.92V6.46c0-.51-.41-.92-.92-.92zm.62 1.23h1.84a.31.31 0 0 1 .31.31v1.84a.31.31 0 0 1-.31.31h-1.84a.31.31 0 0 1-.31-.31V7.08a.31.31 0 0 1 .31-.31M4.92 5.54a.92.92 0 0 0-.92.92v3.08c0 .51.41.92.92.92h2.16V9.23H5.54c-.17 0-.31-.14-.31-.31V7.08c0-.17.14-.31.31-.31h1.84a.31.31 0 0 1 .31.31v3.69a.31.31 0 0 1-.31.31H4v1.23h4c.5 0 .92-.42.92-.93V6.46A.92.92 0 0 0 8 5.54zm11.08 0c-.5 0-.92.41-.92.92v3.08c0 .51.42.92.92.92h2.15V9.23h-1.53c-.17 0-.31-.14-.31-.31V7.08c0-.17.14-.31.31-.31h1.84c.17 0 .31.14.31.31v3.69c0 .17-.14.31-.31.31h-3.38v1.23h4c.51 0 .92-.42.92-.93V6.46c0-.51-.41-.92-.92-.92zm-6.15 8c-.51 0-.93.41-.93.92v3.08c0 .51.42.92.93.92h3.07c.51 0 .93-.41.93-.92v-3.08c0-.51-.42-.92-.93-.92zm.61 1.23h1.85a.3.3 0 0 1 .31.31v1.84a.31.31 0 0 1-.31.31h-1.85c-.17 0-.31-.14-.31-.31v-1.84a.31.31 0 0 1 .31-.31m-5.54-1.23c-.51 0-.92.41-.92.92v3.08c0 .51.41.92.92.92h3.39v-1.23H5.54c-.17 0-.31-.14-.31-.31v-1.84c0-.17.14-.31.31-.31h2.77v-1.23zm10.46 0c-.51 0-.92.41-.92.92v4h1.23v-3.38a.31.31 0 0 1 .31-.31h.62v3.69h1.23v-3.69h.92v3.69H20v-4.92z"></svg:path>`,
})
export class MdiGogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGoldIcon],svg[mdi-gold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 22l1.5-5h7l1.5 5zm12 0l1.5-5h7l1.5 5zm-7-7l1.5-5h7l1.5 5zm17-8.95l-3.86 1.09L18.05 11l-1.09-3.86l-3.86-1.09l3.86-1.09l1.09-3.86l1.09 3.86z"></svg:path>`,
})
export class MdiGoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGolfIcon],svg[mdi-golf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 18a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5M17 5.92L11 9v9.03c2.84.16 5 .97 5 1.97c0 1.1-2.69 2-6 2s-6-.9-6-2c0-.74 1.21-1.38 3-1.73V20h2V2z"></svg:path>`,
})
export class MdiGolfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGolfCartIcon],svg[mdi-golf-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.89 12.37L18.25 5H19V3H3v4H1v2h2v3.54A6 6 0 0 0 1 17v2h2a3 3 0 0 0 6 0h6a3 3 0 0 0 6 0h2v-2a5 5 0 0 0-3.11-4.63M6 20.5A1.5 1.5 0 1 1 7.5 19A1.5 1.5 0 0 1 6 20.5m9.53-8.5l-1.15-1.72l1.42-.95l-1.1-1.66l-4.5 3l1.1 1.66l1.43-.95l1.15 1.74L13 14h-2.8L5 7V5h11.2l1.55 7m.25 8.5a1.5 1.5 0 1 1 1.5-1.5a1.5 1.5 0 0 1-1.5 1.5"></svg:path>`,
})
export class MdiGolfCartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGolfTeeIcon],svg[mdi-golf-tee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 19v-2h10v2h-2c-.5 0-1 .2-1.4.6s-.6.9-.6 1.4v1h-2v-1c0-.5-.2-1-.6-1.4S9.5 19 9 19zm4-13c0-.3.1-.5.3-.7s.4-.3.7-.3s.5.1.7.3s.3.4.3.7s-.1.5-.3.7s-.4.3-.7.3s-.5-.1-.7-.3s-.3-.4-.3-.7m2 2c0-.3.1-.5.3-.7s.4-.3.7-.3s.5.1.7.3s.3.4.3.7s-.1.5-.3.7s-.4.3-.7.3s-.5-.1-.7-.3s-.3-.4-.3-.7M9 8c0-.3.1-.5.3-.7s.4-.3.7-.3s.5.1.7.3s.3.4.3.7s-.1.5-.3.7s-.4.3-.7.3s-.5-.1-.7-.3S9 8.3 9 8m7.9-3.9c-1.4-1.4-3-2-4.9-2s-3.6.7-4.9 2S5 7.1 5 9s.7 3.6 2 4.9s3 2 4.9 2s3.6-.7 4.9-2s2-3 2-4.9s-.5-3.6-1.9-4.9m-1.4 8.4c-1 1-2.2 1.5-3.5 1.5s-2.6-.5-3.5-1.5S7 10.4 7 9s.5-2.6 1.5-3.5S10.6 4 12 4s2.6.5 3.5 1.5S17 7.6 17 9s-.5 2.6-1.5 3.5"></svg:path>`,
})
export class MdiGolfTeeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGondolaIcon],svg[mdi-gondola-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10h-5V7.59l9.12-1.52l-.24-1.48l-5.47.91c.05-.15.09-.32.09-.5A1.5 1.5 0 0 0 15 3.5A1.5 1.5 0 0 0 13.5 5c0 .35.13.68.34.93l-.84.14V5h-2v1.41l-.59.09c.05-.15.09-.32.09-.5A1.5 1.5 0 0 0 9 4.5A1.5 1.5 0 0 0 7.5 6c0 .36.13.68.33.93l-5.95 1l.24 1.48L11 7.93V10H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2M6 12h2.25v4H6zm3.75 4v-4h4.5v4zM18 16h-2.25v-4H18z"></svg:path>`,
})
export class MdiGondolaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGoodreadsIcon],svg[mdi-goodreads-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 12.77c-1.04 1.65-2.78 2.73-4.75 2.73c-3.18 0-5.75-2.8-5.75-6.25S9.07 3 12.25 3c1.97 0 3.71 1.08 4.75 2.73V3h1v12.25c0 5.46-3.46 5.75-6.5 5.75c-2.5 0-3.95-1.69-4.37-4h1.01c.36 1.75 1.4 3 3.36 3c2.22 0 5.5.05 5.5-4.75zM12.25 4C9.63 4 7.5 6.35 7.5 9.25s2.13 5.25 4.75 5.25S17 12.15 17 9.25S14.87 4 12.25 4"></svg:path>`,
})
export class MdiGoodreadsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGoogleIcon],svg[mdi-google-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27c3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10c5.35 0 9.25-3.67 9.25-9.09c0-1.15-.15-1.81-.15-1.81"></svg:path>`,
})
export class MdiGoogleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGoogleAdsIcon],svg[mdi-google-ads-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.25 1.47c-.7-.05-1.43.11-2.08.49a3.656 3.656 0 0 0-1.35 5l7.34 12.7c1.01 1.76 3.25 2.34 5.01 1.34c1.75-1 2.33-3.25 1.33-5L15.18 3.3a3.7 3.7 0 0 0-2.93-1.83M6.82 6.76L1.5 16a3.67 3.67 0 0 0-.5 1.83a3.67 3.67 0 0 0 3.67 3.67a3.67 3.67 0 0 0 3.17-1.84v.01L11 14.19c-1.35-2.3-2.73-4.59-3.97-6.96c-.08-.15-.15-.31-.2-.47ZL16.4 5Z"></svg:path>`,
})
export class MdiGoogleAdsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGoogleAlloIcon],svg[mdi-google-allo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M22 12v9c0 .5-.24.82-.7.96-.45.14-.8.01-1.1-.4l-1.54-2.11C16.78 21.14 14.56 22 12 22c-2.75 0-5.1-1-7.05-2.95C3 17.1 2 14.75 2 12s1-5.1 2.95-7.05C6.9 3 9.25 2 12 2s5.1 1 7.05 2.95C21 6.9 22 9.25 22 12z" fill="currentColor"></svg:path>`,
})
export class MdiGoogleAlloIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGoogleAnalyticsIcon],svg[mdi-google-analytics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.86 4.39v15c0 1.67 1.14 2.61 2.39 2.61c1.14 0 2.39-.79 2.39-2.61V4.5c0-1.54-1.14-2.5-2.39-2.5s-2.39 1.06-2.39 2.39M9.61 12v7.39C9.61 21.07 10.77 22 12 22c1.14 0 2.39-.79 2.39-2.61v-7.28c0-1.54-1.14-2.5-2.39-2.5S9.61 10.67 9.61 12m-3.86 5.23c1.32 0 2.39 1.07 2.39 2.38a2.39 2.39 0 1 1-4.78 0c0-1.31 1.07-2.38 2.39-2.38"></svg:path>`,
})
export class MdiGoogleAnalyticsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGoogleAssistantIcon],svg[mdi-google-assistant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2a6 6 0 0 0-6 6a6 6 0 0 0 6 6a6 6 0 0 0 6-6a6 6 0 0 0-6-6m14.5 4A1.5 1.5 0 0 0 20 7.5A1.5 1.5 0 0 0 21.5 9A1.5 1.5 0 0 0 23 7.5A1.5 1.5 0 0 0 21.5 6M17 8a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 7a3.5 3.5 0 0 0-3.5 3.5A3.5 3.5 0 0 0 17 22a3.5 3.5 0 0 0 3.5-3.5A3.5 3.5 0 0 0 17 15"></svg:path>`,
})
export class MdiGoogleAssistantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGoogleCardboardIcon],svg[mdi-google-cardboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.74 6H3.2C2.55 6 2 6.57 2 7.27v10.46c0 .7.55 1.27 1.23 1.27H8c.54 0 1-.32 1.16-.79l1.39-3.47c.24-.58.8-.99 1.45-.99s1.21.41 1.45.99l1.39 3.47c.19.47.62.79 1.11.79h4.79c.71 0 1.26-.57 1.26-1.27V7.27c0-.7-.55-1.27-1.26-1.27M7.22 14.58C6 14.58 5 13.55 5 12.29C5 11 6 10 7.22 10s2.21 1 2.21 2.29c0 1.26-.99 2.29-2.21 2.29m9.56 0c-1.22 0-2.21-1.03-2.21-2.29S15.56 10 16.78 10S19 11.03 19 12.29s-1 2.29-2.22 2.29"></svg:path>`,
})
export class MdiGoogleCardboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGoogleChromeIcon],svg[mdi-google-chrome-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 20l3.46-6h-.01c.34-.6.55-1.27.55-2c0-1.2-.54-2.27-1.38-3h4.79c.38.93.59 1.94.59 3a8 8 0 0 1-8 8m-8-8c0-1.46.39-2.82 1.07-4l3.47 6h.01c.69 1.19 1.95 2 3.45 2c.45 0 .88-.09 1.29-.23l-2.4 4.14C7 19.37 4 16.04 4 12m11 0a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3a3 3 0 0 1 3 3m-3-8a7.98 7.98 0 0 1 6.92 4H12c-1.94 0-3.55 1.38-3.92 3.21L5.7 7.08A7.98 7.98 0 0 1 12 4m0-2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2"></svg:path>`,
})
export class MdiGoogleChromeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGoogleCirclesIcon],svg[mdi-google-circles-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.66 15H17c1 0 2-.2 2.87-.54c-.7 4.27-4.4 7.54-8.87 7.54c-5 0-9-4.03-9-9c0-4.47 3.27-8.17 7.54-8.87C9.2 5 9 6 9 7v.34c-2.32.82-4 3.04-4 5.66a6 6 0 0 0 6 6c2.62 0 4.84-1.68 5.66-4m.34-5a3 3 0 0 0 3-3a3 3 0 0 0-3-3a3 3 0 0 0-3 3a3 3 0 0 0 3 3m0-9a6 6 0 0 1 6 6a6 6 0 0 1-6 6a6 6 0 0 1-6-6c0-3.32 2.69-6 6-6"></svg:path>`,
})
export class MdiGoogleCirclesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGoogleCirclesCommunitiesIcon],svg[mdi-google-circles-communities-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 12c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m-3 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8a8 8 0 0 1 8 8a8 8 0 0 1-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m2 7a2 2 0 0 0-2-2c-1.11 0-2 .89-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2m-5 3a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiGoogleCirclesCommunitiesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGoogleCirclesExtendedIcon],svg[mdi-google-circles-extended-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 19a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m0-6a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4m-6-1.9a1.9 1.9 0 0 0-1.9 1.9a1.9 1.9 0 0 0 1.9 1.9a1.9 1.9 0 0 0 1.9-1.9a1.9 1.9 0 0 0-1.9-1.9M6 19a2 2 0 0 1-2-2c0-1.11.89-2 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2m0-6a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4m6-9a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m0 6a4 4 0 0 0 4-4a4 4 0 0 0-4-4a4 4 0 0 0-4 4a4 4 0 0 0 4 4"></svg:path>`,
})
export class MdiGoogleCirclesExtendedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGoogleCirclesGroupIcon],svg[mdi-google-circles-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2c1.11 0 2-.89 2-2a2 2 0 0 0-2-2m0 6a4 4 0 0 1-4-4a4 4 0 0 1 4-4a4 4 0 0 1 4 4a4 4 0 0 1-4 4m5.5-5H14V8l4 4l-4 4v-3h-3.5zM5 6c-.45 0-.89.05-1.31.14C5.63 3.05 9.08 1 13 1c6.08 0 11 4.92 11 11s-4.92 11-11 11c-3.92 0-7.37-2.05-9.31-5.14c.42.09.86.14 1.31.14c.8 0 1.56-.16 2.25-.44A7.96 7.96 0 0 0 13 20a8 8 0 0 0 8-8a8 8 0 0 0-8-8c-2.26 0-4.29.93-5.75 2.44C6.56 6.16 5.8 6 5 6"></svg:path>`,
})
export class MdiGoogleCirclesGroupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGoogleClassroomIcon],svg[mdi-google-classroom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 2H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-1 18h-2v-1h-5v1H2V4h20zM10.29 9.71A1.71 1.71 0 0 1 12 8c.95 0 1.71.77 1.71 1.71c0 .95-.76 1.72-1.71 1.72s-1.71-.77-1.71-1.72m-4.58 1.58c0-.71.58-1.29 1.29-1.29a1.29 1.29 0 0 1 1.29 1.29c0 .71-.58 1.28-1.29 1.28S5.71 12 5.71 11.29m10 0A1.29 1.29 0 0 1 17 10a1.29 1.29 0 0 1 1.29 1.29c0 .71-.58 1.28-1.29 1.28s-1.29-.57-1.29-1.28M20 15.14V16H4v-.86c0-.94 1.55-1.71 3-1.71c.55 0 1.11.11 1.6.3c.75-.69 2.1-1.16 3.4-1.16s2.65.47 3.4 1.16c.49-.19 1.05-.3 1.6-.3c1.45 0 3 .77 3 1.71"></svg:path>`,
})
export class MdiGoogleClassroomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGoogleCloudIcon],svg[mdi-google-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 14.75C23 18.2 20.2 21 16.75 21h-9.5C3.8 21 1 18.2 1 14.75c0-2.14 1.08-4.03 2.71-5.15C4.58 5.82 7.96 3 12 3s7.42 2.82 8.29 6.6A6.22 6.22 0 0 1 23 14.75M16.63 17c1.31 0 2.37-1.06 2.37-2.37c0-1.28-1-2.33-2.28-2.38l.03-.5a4.754 4.754 0 0 0-8.32-3.14c1.5.29 2.8 1.11 3.71 2.25L9.5 13.5c-.42-.73-1.21-1.25-2.12-1.25c-1.32 0-2.38 1.06-2.38 2.38c0 1.27 1 2.3 2.25 2.37z"></svg:path>`,
})
export class MdiGoogleCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGoogleDownasaurIcon],svg[mdi-google-downasaur-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2v1h-1v6h-1v1H9v1H8v1H7v1H5v-1H4v-1H3V9H2v6h1v1h1v1h1v1h1v4h2v-1H7v-1h1v-1h1v-1h1v1h1v3h2v-1h-1v-4h1v-1h1v-1h1v-3h1v1h1v-2h-2V9h5V8h-3V7h5V3h-1V2m-7 1h1v1h-1Z"></svg:path>`,
})
export class MdiGoogleDownasaurIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGoogleDriveIcon],svg[mdi-google-drive-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.71 3.5L1.15 15l3.43 6l6.55-11.5M9.73 15L6.3 21h13.12l3.43-6m-.57-1L15.42 2H8.57l6.86 12z"></svg:path>`,
})
export class MdiGoogleDriveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGoogleEarthIcon],svg[mdi-google-earth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12.14c-.91-1.37-1.86-2.36-2.86-2.95c-1-.6-1.87-.81-2.64-.64c-.73.18-1.36.59-1.86 1.25c-.44.59-.64 1.26-.64 2.01V12c0 .78.11 1.58.36 2.39c.09.25.14.25.19 0c.12-.62.41-1.08.86-1.36c.46-.28 1.06-.27 1.81.02c.75.3 1.48.95 2.2 1.9c1.28 1.72 2.78 2.77 4.5 3.14c2.22.32 3.89-.39 5.02-2.09c.31-.61.56-1.14.7-1.61c.09-.31.05-.34-.14-.09c-.47.62-1.1 1.03-1.9 1.2c-.8.2-1.71 0-2.74-.5c-1.03-.57-1.98-1.5-2.86-2.86m4.97-3.98c-1.56-2.35-3.25-3.66-5.06-3.99c-1.44-.22-3 .28-4.69 1.5c-.22.16-.32.24-.31.26c.02.02.15-.04.4-.16c2.5-1.22 4.91.06 7.22 3.84c.5.84 1.02 1.5 1.57 1.97s1.06.75 1.55.84c.48.08.92.08 1.31-.04c.39-.13.74-.33 1.04-.61c0-.6-.09-1.27-.31-1.97c-.5.12-.95.08-1.34-.12c-.39-.18-.85-.71-1.38-1.52M12 2c2.75 0 5.1 1 7.05 2.95S22 9.25 22 12s-1 5.1-2.95 7.05S14.75 22 12 22s-5.1-1-7.05-2.95S2 14.75 2 12s1-5.1 2.95-7.05S9.25 2 12 2"></svg:path>`,
})
export class MdiGoogleEarthIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGoogleFitIcon],svg[mdi-google-fit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4a5 5 0 0 1 5 5c0 1.38-.56 2.63-1.46 3.54L12 21.07l-8.54-8.53C2.56 11.63 2 10.38 2 9a5 5 0 0 1 5-5c1.38 0 2.63.56 3.54 1.46L12 6.93l1.46-1.47C14.37 4.56 15.62 4 17 4m-1.41 3.59L9.17 14L12 16.83l6.41-6.42c.37-.36.59-.86.59-1.41a2 2 0 0 0-2-2c-.55 0-1.05.22-1.41.59m-7.18 0C8.05 7.22 7.55 7 7 7a2 2 0 0 0-2 2c0 .55.22 1.05.59 1.41l1.46 1.47l2.83-2.83z"></svg:path>`,
})
export class MdiGoogleFitIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGoogleGlassIcon],svg[mdi-google-glass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-3.25 16h-1.5V8.9L6.72 18H4.66L15.45 6.5c.21-.24.55-.31.82-.2c.29.12.48.39.48.7z"></svg:path>`,
})
export class MdiGoogleGlassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGoogleHangoutsIcon],svg[mdi-google-hangouts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 11l-1 2h-1.5l1-2H12V8h3m-4 3l-1 2H8.5l1-2H8V8h3m.5-6A8.5 8.5 0 0 0 3 10.5a8.5 8.5 0 0 0 8.5 8.5h.5v3.5c4.86-2.35 8-7.5 8-12A8.5 8.5 0 0 0 11.5 2"></svg:path>`,
})
export class MdiGoogleHangoutsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGoogleHomeIcon],svg[mdi-google-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.06 7.78c-.56 0-.89-.05-.98-.14l-.42 6.09c.53.32 1.22.57 2.06.77c.84.21 2.06.27 3.66.17c1.59-.09 3.25-.44 4.96-1.03l-.79-9.42c-.88.87-2.17 1.69-3.89 2.44c-1.53.65-2.85 1.03-3.94 1.12h-.66m-.09-2.44c-.69.6-.97 1-.84 1.22c.09.22.57.28 1.45.19c1.09-.09 2.33-.44 3.7-1.03c.94-.41 1.75-.84 2.44-1.31c.69-.47 1.16-.86 1.41-1.18c.25-.31.34-.53.28-.65c-.07-.16-.38-.24-.94-.24c-1.13 0-2.53.36-4.22 1.08c-1.44.63-2.53 1.27-3.28 1.92m9.37-3.14c.07.13.1.27.1.43L18.61 17c0 1.73-.61 3.09-1.78 4.07c-1.19.98-2.8 1.48-4.83 1.48c-2 0-3.6-.51-4.8-1.55c-1.2-1-1.81-2.36-1.81-4.08l.7-10.45c0-.25.11-.53.33-.84c.22-.32.42-.57.61-.75l.33-.29c.97-.81 2.14-1.51 3.52-2.09c.93-.42 1.85-.73 2.74-.93c.88-.2 1.68-.27 2.38-.19c.71.08 1.16.35 1.34.82Z"></svg:path>`,
})
export class MdiGoogleHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGoogleKeepIcon],svg[mdi-google-keep-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16a2 2 0 0 1 2 2v13.33L17.33 22H4a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2m13 15v3.25L20.25 17zm-7 2h4v-1h1v-5a5.002 5.002 0 0 0-3-9a5.002 5.002 0 0 0-3 9v5h1zm4-2h-4v-2h4zM12 5c2.21 0 4 1.79 4 4c0 1.5-.8 2.77-2 3.46V14h-4v-1.54C8.8 11.77 8 10.5 8 9c0-2.21 1.79-4 4-4"></svg:path>`,
})
export class MdiGoogleKeepIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGoogleLensIcon],svg[mdi-google-lens-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12a4 4 0 0 1 4 4v6h-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6v2H6a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4m6 6a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m6 8a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiGoogleLensIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGoogleMapsIcon],svg[mdi-google-maps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.27 6c1.01 2.17.78 4.73-.33 6.81c-.94 1.69-2.29 3.12-3.44 4.69c-.5.7-1 1.45-1.37 2.26c-.13.27-.22.55-.32.83s-.19.56-.28.84c-.09.26-.2.57-.53.57c-.39 0-.5-.44-.58-.74c-.24-.73-.48-1.43-.85-2.1c-.42-.79-.95-1.52-1.49-2.23zM9.12 8.42l-3.3 3.92c.61 1.29 1.52 2.39 2.39 3.49c.21.25.42.51.62.78L13 11.67l-.04.01c-1.46.5-3.08-.24-3.66-1.68c-.08-.17-.14-.37-.18-.57a3 3 0 0 1 0-1zm-2.54-3.8l-.01.01c-1.62 2.05-1.9 4.9-.93 7.31L9.63 7.2l-.05-.05zm7.64-2.26L11 6.17l.04-.01c1.34-.46 2.84.12 3.52 1.34c.15.28.27.58.31.88c.06.38.08.65.01 1.02v.01l3.2-3.8a7 7 0 0 0-3.85-3.24zM9.89 6.89l3.91-4.65l-.04-.01C13.18 2.08 12.59 2 12 2c-1.97 0-3.83.85-5.15 2.31l-.02.01z"></svg:path>`,
})
export class MdiGoogleMapsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGoogleMyBusinessIcon],svg[mdi-google-my-business-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8.5c0 1.37-1.12 2.5-2.5 2.5S17 9.87 17 8.5c0 1.37-1.12 2.5-2.5 2.5S12 9.87 12 8.5c0 1.37-1.12 2.5-2.5 2.5S7 9.87 7 8.5C7 9.87 5.88 11 4.5 11S2 9.87 2 8.5l1.39-5.42S3.68 2 4.7 2h14.6c1.02 0 1.31 1.08 1.31 1.08zm-1 3.7V20c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-7.8a3.96 3.96 0 0 0 4-.58c.69.55 1.56.88 2.5.88c.95 0 1.82-.33 2.5-.88c.69.55 1.56.88 2.5.88c.95 0 1.82-.33 2.5-.88c.68.55 1.56.88 2.5.88c.53 0 1.04-.11 1.5-.3m-2 5.13c0-.2 0-.41-.05-.63l-.03-.16h-2.97v1.17h1.81c-.06.22-.14.44-.31.62c-.33.33-.78.51-1.26.51c-.5 0-.99-.21-1.35-.56c-.69-.71-.69-1.86.02-2.58c.69-.7 1.83-.7 2.55-.03l.14.13l.84-.85l-.16-.14c-.56-.52-1.3-.81-2.08-.81h-.01c-.81 0-1.57.31-2.14.87c-.59.58-.92 1.34-.92 2.13c0 .8.31 1.54.88 2.09a3.2 3.2 0 0 0 2.22.91h.02c.8 0 1.51-.29 2.03-.8c.47-.48.77-1.2.77-1.87"></svg:path>`,
})
export class MdiGoogleMyBusinessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGoogleNearbyIcon],svg[mdi-google-nearby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.36 10.46l-7.82-7.82c-.85-.85-2.23-.85-3.08 0l-7.82 7.82c-.85.85-.85 2.23 0 3.08l7.82 7.82c.85.85 2.23.85 3.08 0l7.82-7.82c.85-.85.85-2.23 0-3.08M12 19l-7-7l7-7l7 7zm4.5-7L12 16.5L7.5 12L12 7.5z"></svg:path>`,
})
export class MdiGoogleNearbyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGooglePagesIcon],svg[mdi-google-pages-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M19 3h-6v5l4-1l-1 4h5V5a2 2 0 0 0-2-2m-2 14l-4-1v5h6a2 2 0 0 0 2-2v-6h-5m-8 0H3v6a2 2 0 0 0 2 2h6v-5l-4 1M3 5v6h5L7 7l4 1V3H5c-1.11 0-2 .89-2 2z" fill="currentColor"></svg:path>`,
})
export class MdiGooglePagesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGooglePhotosIcon],svg[mdi-google-photos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M10 13c.55 0 1 .18 1.41.57c.39.39.59.87.59 1.43v7c0 .17-.09.27-.28.27c-.06 0-.14-.05-.22-.14L7 17.67V13h3m2.5-11.12L17 6.33V11h-3c-.55 0-1-.18-1.41-.57C12.2 10.04 12 9.56 12 9V2c0-.17.09-.27.28-.27c.06 0 .14.05.22.15M22 12c.17 0 .27.09.27.28c0 .06-.05.14-.14.22L17.67 17H13v-3c0-.55.18-1 .57-1.41c.39-.39.87-.59 1.43-.59h7M6.33 7H11v3c0 .55-.18 1-.57 1.41c-.39.39-.87.59-1.43.59H2c-.17 0-.27-.09-.27-.28c0-.06.05-.14.15-.22L6.33 7z" fill="currentColor"></svg:path>`,
})
export class MdiGooglePhotosIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGooglePhysicalWebIcon],svg[mdi-google-physical-web-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 1.5a9 9 0 0 1 9 9c0 2.61-1.11 4.97-2.89 6.61l-1.06-1.06a7.503 7.503 0 0 0 2.45-5.55A7.5 7.5 0 0 0 12 3a7.5 7.5 0 0 0-7.5 7.5c0 2.2.95 4.18 2.45 5.55l-1.06 1.06C4.11 15.47 3 13.11 3 10.5a9 9 0 0 1 9-9m0 3a6 6 0 0 1 6 6c0 1.78-.78 3.39-2 4.5l-1.08-1.08c.97-.82 1.58-2.05 1.58-3.42C16.5 8 14.5 6 12 6s-4.5 2-4.5 4.5c0 1.37.61 2.6 1.58 3.42L8 15c-1.22-1.11-2-2.72-2-4.5a6 6 0 0 1 6-6M8.11 17.65l3.18-3.19c.39-.39 1.03-.39 1.42 0l3.18 3.19c.39.39.39 1.02 0 1.41l-3.18 3.18c-.39.39-1.03.39-1.42 0l-3.18-3.18a.996.996 0 0 1 0-1.41z" fill="currentColor"></svg:path>`,
})
export class MdiGooglePhysicalWebIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGooglePlayIcon],svg[mdi-google-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 20.5v-17c0-.59.34-1.11.84-1.35L13.69 12l-9.85 9.85c-.5-.25-.84-.76-.84-1.35m13.81-5.38L6.05 21.34l8.49-8.49zm3.35-4.31c.34.27.59.69.59 1.19s-.22.9-.57 1.18l-2.29 1.32l-2.5-2.5l2.5-2.5zM6.05 2.66l10.76 6.22l-2.27 2.27z"></svg:path>`,
})
export class MdiGooglePlayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGooglePlusIcon],svg[mdi-google-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 11h-2V9h-2v2h-2v2h2v2h2v-2h2M8 11v2.4h4c-.2 1-1.2 3-4 3c-2.4 0-4.3-2-4.3-4.4S5.6 7.6 8 7.6c1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 5.7 9.9 5 8 5c-3.9 0-7 3.1-7 7s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8c0-.5 0-.8-.1-1.2z"></svg:path>`,
})
export class MdiGooglePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGooglePlusBoxIcon],svg[mdi-google-plus-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m14.5 9H18v-1.5h-1V12h-1.5v1H17v1.5h1V13h1.5v-1m-9.85-.64v1.54h2.57c-.13.64-.77 1.93-2.57 1.93c-1.54 0-2.76-1.29-2.76-2.83s1.22-2.83 2.76-2.83c.9 0 1.48.39 1.8.71l1.22-1.16c-.77-.77-1.8-1.22-3.02-1.22c-2.51 0-4.5 2-4.5 4.5s1.99 4.5 4.5 4.5c2.57 0 4.31-1.8 4.31-4.37c0-.32 0-.52-.07-.77H9.65z" fill="currentColor"></svg:path>`,
})
export class MdiGooglePlusBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGooglePodcastIcon],svg[mdi-google-podcast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.68 7.22v1.4c0 .68-.55 1.24-1.25 1.24c-.69 0-1.25-.56-1.25-1.24v-1.4a1.25 1.25 0 0 1 1.25-1.25c.7 0 1.25.56 1.25 1.25m-4.43 1.14v7.27a1.25 1.25 0 0 1-2.5 0V8.36c0-.68.56-1.25 1.25-1.25s1.25.57 1.25 1.25M22 11.3v1.4c0 .68-.56 1.24-1.25 1.24s-1.25-.56-1.25-1.24v-1.4c0-.69.56-1.24 1.25-1.24S22 10.61 22 11.3m-17.5 0v1.4c0 .68-.56 1.24-1.25 1.24c-.7 0-1.25-.56-1.25-1.24v-1.4c0-.69.55-1.24 1.25-1.24c.69 0 1.25.55 1.25 1.24m4.32 4.08v1.39c0 .68-.56 1.23-1.25 1.23s-1.25-.55-1.25-1.23v-1.39c0-.7.56-1.25 1.25-1.25a1.25 1.25 0 0 1 1.25 1.25m4.43 3.98v1.39A1.25 1.25 0 0 1 12 22a1.25 1.25 0 0 1-1.25-1.25v-1.39A1.25 1.25 0 0 1 12 18.11a1.25 1.25 0 0 1 1.25 1.25m0-16.11v1.39A1.25 1.25 0 0 1 12 5.89a1.25 1.25 0 0 1-1.25-1.25V3.25c0-.7.56-1.25 1.25-1.25a1.25 1.25 0 0 1 1.25 1.25m4.43 9.09v4.43c0 .69-.55 1.23-1.25 1.23c-.69 0-1.25-.54-1.25-1.23v-4.43c0-.7.56-1.25 1.25-1.25c.7 0 1.25.55 1.25 1.25M8.82 7.22v4.43c0 .7-.56 1.25-1.25 1.25a1.25 1.25 0 0 1-1.25-1.25V7.22a1.25 1.25 0 0 1 1.25-1.25a1.25 1.25 0 0 1 1.25 1.25"></svg:path>`,
})
export class MdiGooglePodcastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGoogleSpreadsheetIcon],svg[mdi-google-spreadsheet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 11V9h-8V5H9v4H5v2h4v8h2v-8zm0-8c.5 0 1 .2 1.39.61C20.8 4 21 4.5 21 5v14c0 .5-.2 1-.61 1.39c-.39.41-.89.61-1.39.61H5c-.5 0-1-.2-1.39-.61C3.2 20 3 19.5 3 19V5c0-.5.2-1 .61-1.39C4 3.2 4.5 3 5 3z"></svg:path>`,
})
export class MdiGoogleSpreadsheetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGoogleStreetViewIcon],svg[mdi-google-street-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.95 9.27a3.64 3.64 0 0 0 3.64-3.64c0-2-1.63-3.63-3.64-3.63a3.63 3.63 0 0 0-3.63 3.63c0 2.01 1.62 3.64 3.63 3.64m-2.59 3.7s-1.09 2.97-1.4 3.53c-.11.21-.09.27-.36.27s-.69-.27-.69-.27s-.2-.13-.12-.36c.24-.74 1.33-5.06 1.56-5.89c.25-.89.93-.86.93-.86h.65l2.1 3.65l2.11-3.65h.78s.31.04.54.31c.24.27.29.74.29.74l1.39 5.4s.1.38.07.49c-.04.17-.13.17-.13.17s-.39.12-.61.19c-.4.13-.47-.25-.47-.25l-1.3-3.4l-.15 8.96H12.6l-.33-5.11s-.06-.13-.24-.13a.25.25 0 0 0-.23.13L11.45 22H9.5l-.13-9.03z"></svg:path>`,
})
export class MdiGoogleStreetViewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGoogleTranslateIcon],svg[mdi-google-translate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 5h-9.12L10 2H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h7l1 3h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M7.17 14.59a4.09 4.09 0 0 1-4.09-4.09a4.09 4.09 0 0 1 4.09-4.09c1.04 0 1.99.37 2.74 1.09l.09.04l-1.25 1.18l-.06-.05c-.29-.27-.78-.59-1.52-.59c-1.31 0-2.38 1.09-2.38 2.42s1.07 2.42 2.38 2.42c1.37 0 1.96-.87 2.12-1.46H7.08V9.91h3.95l.01.09c.04.19.05.38.05.59c0 2.35-1.59 4-3.92 4m6.03-1.71c.33.62.74 1.18 1.19 1.7l-.54.53zm.77-.76H13l-.33-1.04h3.99s-.34 1.31-1.56 2.74c-.52-.62-.89-1.23-1.13-1.7M21 20a1 1 0 0 1-1 1h-7l2-2l-.81-2.77l.92-.92L17.79 18l.71-.73l-2.69-2.68c.9-1.03 1.6-2.25 1.92-3.51H19v-1.04h-3.64V9h-1.04v1.04h-1.96L11.18 6H20a1 1 0 0 1 1 1z"></svg:path>`,
})
export class MdiGoogleTranslateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGoogleWalletIcon],svg[mdi-google-wallet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M15.44 2.56h4.8s2.88 8.8 0 18.96h-4.72s-.4-4.72-2.24-8.72c0 0-.8 3.28-1.68 5.2H6.72s-.96-4.56-4.24-8.48h4.8s.88.88 1.6 2.08c0 0 .64-2.48.64-5.6h4.8s1.6 2.32 2.32 3.76c0 0-.24-3.52-1.2-7.2z" fill="currentColor"></svg:path>`,
})
export class MdiGoogleWalletIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGradientHorizontalIcon],svg[mdi-gradient-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 13v-2h2v2m0 2v-2h2v2m-2-4V9h2v2M9 9V7h2v2m-2 8v-2h2v2M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2m15 10v2h-2v-2m2-4v2h-2v-2m2-4v2h-2V7m-5-2v2h2V5h2v2h-2v2h2v2h-2v2h2v2h-2v2h2v2h-2v-2h-2v2H5V5Z"></svg:path>`,
})
export class MdiGradientHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGradientVerticalIcon],svg[mdi-gradient-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9h2v2h-2zm-2 2h2v2H9zm4 0h2v2h-2zm2-2h2v2h-2zM7 9h2v2H7zm12-6H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M9 18H7v-2h2zm4 0h-2v-2h2zm4 0h-2v-2h2zm2-7h-2v2h2v2h-2v-2h-2v2h-2v-2h-2v2H9v-2H7v2H5v-2h2v-2H5V5h14z"></svg:path>`,
})
export class MdiGradientVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGrainIcon],svg[mdi-grain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 12a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2M6 8a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 8a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m12-8a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m-4 8a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m4-4a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m-4-4a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m-4-4a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiGrainIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGraphIcon],svg[mdi-graph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 17c-.13 0-.26 0-.39.04l-1.61-3.25a2.5 2.5 0 0 0-1.75-4.29c-.13 0-.25 0-.39.04l-1.63-3.25c.48-.45.77-1.08.77-1.79a2.5 2.5 0 0 0-5 0c0 .71.29 1.34.76 1.79L8.64 9.54c-.14-.04-.26-.04-.39-.04a2.5 2.5 0 0 0-1.75 4.29l-1.61 3.25C4.76 17 4.63 17 4.5 17a2.5 2.5 0 0 0 0 5A2.5 2.5 0 0 0 7 19.5c0-.7-.29-1.34-.76-1.79l1.62-3.25c.14.04.26.04.39.04s.25 0 .39-.04l1.63 3.25c-.47.45-.77 1.09-.77 1.79a2.5 2.5 0 0 0 5 0A2.5 2.5 0 0 0 12 17c-.13 0-.26 0-.39.04L10 13.79c.46-.45.75-1.08.75-1.79s-.29-1.34-.75-1.79l1.61-3.25c.13.04.26.04.39.04s.26 0 .39-.04L14 10.21c-.45.45-.75 1.09-.75 1.79a2.5 2.5 0 0 0 2.5 2.5c.13 0 .25 0 .39-.04l1.63 3.25c-.47.45-.77 1.09-.77 1.79a2.5 2.5 0 0 0 5 0a2.5 2.5 0 0 0-2.5-2.5"></svg:path>`,
})
export class MdiGraphIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGraphOutlineIcon],svg[mdi-graph-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 17c-.14 0-.26 0-.39.04L17.5 13.8c.45-.45.75-1.09.75-1.8a2.5 2.5 0 0 0-2.5-2.5c-.14 0-.25 0-.4.04L13.74 6.3c.47-.46.76-1.09.76-1.8a2.5 2.5 0 0 0-5 0c0 .7.29 1.34.76 1.79L8.65 9.54c-.15-.04-.26-.04-.4-.04a2.5 2.5 0 0 0-2.5 2.5c0 .71.29 1.34.75 1.79l-1.61 3.25C4.76 17 4.64 17 4.5 17a2.5 2.5 0 0 0 0 5A2.5 2.5 0 0 0 7 19.5c0-.7-.29-1.34-.76-1.79l1.62-3.25c.14.04.26.04.39.04s.25 0 .38-.04l1.63 3.25c-.47.45-.76 1.09-.76 1.79a2.5 2.5 0 0 0 5 0A2.5 2.5 0 0 0 12 17c-.13 0-.26 0-.39.04L10 13.8c.45-.45.75-1.09.75-1.8c0-.7-.29-1.33-.75-1.79l1.61-3.25c.13.04.26.04.39.04s.26 0 .39-.04L14 10.21a2.5 2.5 0 0 0 1.75 4.29c.13 0 .25 0 .38-.04l1.63 3.25c-.47.45-.76 1.09-.76 1.79a2.5 2.5 0 0 0 5 0a2.5 2.5 0 0 0-2.5-2.5m-15 3.5c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m8.5-1c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1M7.25 12c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1M11 4.5c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1m3.75 7.5c0-.55.45-1 1-1s1 .45 1 1s-.45 1-1 1s-1-.45-1-1m4.75 8.5c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class MdiGraphOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGraphqlIcon],svg[mdi-graphql-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 5.37l-.44-.06L6 14.9c.24.21.4.48.47.78h11.06c.07-.3.23-.57.47-.78l-5.56-9.59zM6.6 16.53l4.28 2.53c.29-.27.69-.43 1.12-.43s.83.16 1.12.43l4.28-2.53zM12 22a1.68 1.68 0 0 1-1.68-1.68l.09-.56l-4.3-2.55c-.31.36-.76.58-1.27.58a1.68 1.68 0 0 1-1.68-1.68c0-.79.53-1.45 1.26-1.64V9.36c-.83-.11-1.47-.82-1.47-1.68A1.68 1.68 0 0 1 4.63 6c.55 0 1.03.26 1.34.66l4.41-2.53l-.06-.45c0-.93.75-1.68 1.68-1.68s1.68.75 1.68 1.68l-.06.45l4.41 2.53c.31-.4.79-.66 1.34-.66a1.68 1.68 0 0 1 1.68 1.68c0 .86-.64 1.57-1.47 1.68v5.11c.73.19 1.26.85 1.26 1.64a1.68 1.68 0 0 1-1.68 1.68c-.51 0-.96-.22-1.27-.58l-4.3 2.55l.09.56A1.68 1.68 0 0 1 12 22M10.8 4.86L6.3 7.44l.02.24c0 .71-.44 1.32-1.06 1.57l.03 5.25zm2.4 0l5.51 9.64l.03-5.25c-.62-.25-1.06-.86-1.06-1.57l.02-.24z"></svg:path>`,
})
export class MdiGraphqlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGrassIcon],svg[mdi-grass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20H2v-2h5.75C7 15.19 4.81 13 2 12.26c.64-.16 1.31-.26 2-.26c4.42 0 8 3.58 8 8m10-7.74c-.64-.16-1.31-.26-2-.26c-2.93 0-5.5 1.58-6.88 3.93c.29.66.53 1.35.67 2.07c.13.65.21 1.32.21 2h8v-2h-5.76c.76-2.81 2.95-5 5.76-5.74M15.64 11c.78-2.07 2.23-3.82 4.09-5c-4.29.16-7.73 3.67-7.73 8c.95-1.25 2.2-2.28 3.64-3m-4.22-2.15A8.53 8.53 0 0 0 6.7 4C8.14 5.86 9 8.18 9 10.71c0 .21-.03.41-.04.61c.43.24.83.52 1.22.82a9.9 9.9 0 0 1 1.24-3.29"></svg:path>`,
})
export class MdiGrassIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGraveStoneIcon],svg[mdi-grave-stone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2h4c3.31 0 5 2.69 5 6v10.66C16.88 17.63 15.07 17 12 17s-4.88.63-7 1.66V8c0-3.31 1.69-6 5-6M8 8v1.5h8V8zm1 4v1.5h6V12zM3 22v-.69c2.66-1.69 10.23-5.47 18-.06V22z"></svg:path>`,
})
export class MdiGraveStoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGreasePencilIcon],svg[mdi-grease-pencil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.62 1.5c-.51 0-1.02.19-1.41.59l-6.46 6.46l4.2 4.19l6.46-6.45c.79-.79.79-2.05 0-2.83l-1.37-1.37c-.39-.4-.9-.59-1.42-.59m-8.82 8l-6.57 6.57l.7.7c-.53.47-1.04 1.01-1.55 1.52c-.78.79-.78 2.05 0 2.83s2.04.78 2.83 0c.51-.49 1.04-1.04 1.52-1.54l.7.69L14 13.7"></svg:path>`,
})
export class MdiGreasePencilIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGreaterThanIcon],svg[mdi-greater-than-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.5 4.14l-1 1.72L15 12L4.5 18.14l1 1.72L19 12z"></svg:path>`,
})
export class MdiGreaterThanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGreaterThanOrEqualIcon],svg[mdi-greater-than-or-equal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 2.27L20 10.14L6.5 18l-1-1.73l10.53-6.13L5.5 4zM20 20v2H5v-2z"></svg:path>`,
})
export class MdiGreaterThanOrEqualIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGreenhouseIcon],svg[mdi-greenhouse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3L4 9v12h16V9zm-2 7h4v9h-4zm6 0h2v3h-2zm-.67-2H8.67L12 5.5zM8 10v3H6v-3zm-2 5h2v4H6zm10 4v-4h2v4z"></svg:path>`,
})
export class MdiGreenhouseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGridIcon],svg[mdi-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4v4h4V4zm6 0v4h4V4zm0 6v4h4v-4zm0 6v4h4v-4zm-2 4v-4h-4v4zm-6 0v-4H4v4zm0-6v-4H4v4zm0-6V4H4v4zm2 6h4v-4h-4zM4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4c-1.08 0-2-.9-2-2V4a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGridLargeIcon],svg[mdi-grid-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4c-1.08 0-2-.9-2-2V4a2 2 0 0 1 2-2m0 2v7h7V4zm0 16h7v-7H4zm16 0v-7h-7v7zm0-16h-7v7h7z"></svg:path>`,
})
export class MdiGridLargeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGridOffIcon],svg[mdi-grid-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2.77L1.28 1.5L22.5 22.72L21.23 24l-2-2H4c-1.08 0-2-.9-2-2V4.77zM10 4v3.68l-2-2V4H6.32l-2-2H20a2 2 0 0 1 2 2v15.7l-2-2V16h-1.68l-2-2H20v-4h-4v3.68l-2-2V10h-1.68l-2-2H14V4zm6 0v4h4V4zm0 16h1.23L16 18.77zM4 8h1.23L4 6.77zm6 6h1.23L10 12.77zm4 6v-3.23l-.77-.77H10v4zm-6 0v-4H4v4zm0-6v-3.23L7.23 10H4v4z"></svg:path>`,
})
export class MdiGridOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGrillIcon],svg[mdi-grill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.06 2c-.18 1.17.11 2.16.89 2.97c.5.5.66 1.17.47 2.03h.99c.12-.55.14-1 .04-1.45c-.09-.42-.4-.92-.95-1.52c-.45-.56-.61-1.23-.45-2.03zm2.49 0c-.19 1.17.11 2.16.89 2.97c.5.5.65 1.17.47 2.03h.98c.11-.55.14-1 .05-1.45c-.1-.42-.41-.92-.94-1.52c-.47-.56-.62-1.23-.47-2.03zm2.53 0c-.19 1.17.11 2.16.89 2.97c.5.5.64 1.17.42 2.03h1.03c.13-.55.14-1 .05-1.45c-.09-.42-.41-.92-.94-1.52c-.47-.56-.62-1.23-.47-2.03zM5 8c0 1.42.39 2.7 1.14 3.84a6.9 6.9 0 0 0 3 2.55l-3.98 6.05c-.1.12-.16.31-.16.56c0 .41.16.69.44.84c.12.1.31.16.56.16c.41 0 .69-.16.84-.44l.99-1.59h6.37c.21.58.59 1.08 1.08 1.45c.5.38 1.08.58 1.72.58c.83 0 1.53-.31 2.13-.91c.59-.59.87-1.29.87-2.09c0-.83-.28-1.53-.87-2.12c-.6-.6-1.3-.88-2.13-.88c-.64 0-1.22.17-1.72.55c-.5.37-.86.86-1.08 1.45H9.14l1.97-3.05c.16.05.45.05.89.05s.73 0 .89-.05l.99 1.55c.41-.54.96-.96 1.59-1.22l-.56-.89c1.12-.5 2.09-1.39 2.88-2.62C18.59 10.5 19 9.27 19 8zm12 10c.3 0 .53.09.72.28s.28.44.28.72c0 .27-.09.5-.28.71c-.18.2-.44.29-.72.29c-.26 0-.5-.09-.71-.29A1 1 0 0 1 16 19c0-.3.09-.53.29-.72c.21-.19.44-.28.71-.28"></svg:path>`,
})
export class MdiGrillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGrillOutlineIcon],svg[mdi-grill-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 22a3 3 0 1 0-2.82-4H9.14l1.99-3.06a6.4 6.4 0 0 0 1.74 0l1.02 1.56c.42-.5.96-.94 1.61-1.2l-.61-.93A7 7 0 0 0 19 8H5a7 7 0 0 0 4.12 6.37l-3.95 6.08a1 1 0 0 0 1.67 1.09l1-1.54h6.34A3 3 0 0 0 17 22m0-4a1 1 0 0 1 1 1c0 .55-.45 1-1 1s-1-.45-1-1a1 1 0 0 1 1-1m-9.58-8h9.16a5 5 0 0 1-9.16 0m1.99-3h1c.15-1.15.23-1.64-.91-2.96c-.4-.5-.66-.77-.44-2.04h-.99a3.14 3.14 0 0 0 .89 2.96c.22.24.79.67.45 2.04m2.48 0h1c.15-1.15.23-1.64-.89-2.96c-.42-.5-.68-.78-.46-2.04h-.99a3.14 3.14 0 0 0 .89 2.96c.23.24.8.67.45 2.04m2.52 0h1c.15-1.15.23-1.64-.91-2.96c-.4-.5-.66-.77-.44-2.04h-.99a3.14 3.14 0 0 0 .89 2.96c.22.24.79.67.45 2.04"></svg:path>`,
})
export class MdiGrillOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGroupIcon],svg[mdi-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 1v4h1v14H1v4h4v-1h14v1h4v-4h-1V5h1V1h-4v1H5V1m0 3h14v1h1v14h-1v1H5v-1H4V5h1m1 1v8h3v4h9V9h-4V6M8 8h4v4H8m6-1h2v5h-5v-2h3"></svg:path>`,
})
export class MdiGroupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGuitarAcousticIcon],svg[mdi-guitar-acoustic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.59 3H22v2h-1.59l-4.24 4.24c-.37-.56-.85-1.04-1.41-1.41zM12 8a4 4 0 0 1 4 4a3.99 3.99 0 0 1-3 3.87V16a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5h.13c.45-1.76 2.04-3 3.87-3m0 2.5a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5m-5.06 3.74l-.71.7l2.83 2.83l.71-.71z"></svg:path>`,
})
export class MdiGuitarAcousticIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGuitarElectricIcon],svg[mdi-guitar-electric-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.59 3H22v2h-1.59l-5.29 5.29l-1.41-1.39zM12 9c.26 0 .5.1.71.3l2 2c.18.2.29.43.29.7l-.1.4l-4 8c-.19.35-.54.53-.9.53c-.35 0-.71-.18-.89-.53l-1.86-3.7l-3.7-1.8c-.37-.2-.55-.55-.55-.9s.18-.7.55-.9l8-4c.14-.1.29-.1.45-.1m-2.65 2.82l-.7.68l2.85 2.85l.68-.7zm-1.41 1.41l-.71.71l2.83 2.83l.71-.71z"></svg:path>`,
})
export class MdiGuitarElectricIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGuitarPickIcon],svg[mdi-guitar-pick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4.1c-.9-.8-2-1.3-3.2-1.6c-.3-.1-2.2-.5-3.6-.5h-.4c-1.4 0-3.4.4-3.7.5c-1.1.3-2.2.8-3.1 1.6C3 5.9 3 8.7 4 11c1 2.5 2.1 4.7 3.6 6.9C8.8 19.6 10.1 22 12 22s3.2-2.4 4.5-4.1c1.5-2.1 2.6-4.4 3.6-6.9c.9-2.3.9-5.1-1.1-6.9"></svg:path>`,
})
export class MdiGuitarPickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGuitarPickOutlineIcon],svg[mdi-guitar-pick-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4.1c-.9-.8-2-1.3-3.2-1.6c-.3-.1-2.2-.5-3.6-.5h-.4c-1.4 0-3.4.4-3.7.5c-1.1.3-2.2.8-3.1 1.6C3 5.9 3 8.7 4 11c1 2.5 2.1 4.7 3.6 6.9C8.8 19.6 10.1 22 12 22s3.2-2.4 4.5-4.1c1.5-2.1 2.6-4.4 3.6-6.9c.9-2.3.9-5.1-1.1-6.9m-.8 6.1c-1.1 2.7-2.1 4.7-3.4 6.5c-.2.2-.3.5-.5.7c-.5.8-1.7 2.6-2.3 2.6c-.7 0-1.8-1.7-2.4-2.6c-.2-.2-.3-.5-.5-.7c-1.2-1.8-2.3-3.8-3.4-6.5c-.2-.7-1-3.2.6-4.7c.5-.5 1.3-.8 2.3-1.1c.4 0 2.1-.4 3.2-.4h.3c1.1 0 2.8.3 3.2.4c1 .3 1.8.6 2.3 1.1c1.7 1.5.9 4 .6 4.7"></svg:path>`,
})
export class MdiGuitarPickOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGuyFawkesMaskIcon],svg[mdi-guy-fawkes-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 13a9 9 0 0 1-9 9a9 9 0 0 1-9-9l.03-8.57C5.68 2.88 8.76 2 12.05 2c3.25 0 6.31.87 8.95 2.38zm-8 6.93c3.39-.49 6-3.43 6-6.93V5.59C16.9 4.57 14.54 4 12.05 4c-2.55 0-4.97.6-7.11 1.66L5 13c0 3.5 2.63 6.44 6 6.93V18h2zM11 16H8l-2-3l3 1h1l1-1h2l1 1h1l3-1l-2 3h-3l-1-1zM6 9.03c.64-.63 1.5-.98 2.5-.98c.95 0 1.84.35 2.5.98c-.66.62-1.55.97-2.5.97c-1 0-1.86-.35-2.5-.97m7 0c.64-.63 1.5-.98 2.5-.98c.95 0 1.84.35 2.5.98c-.66.62-1.55.97-2.5.97c-1 0-1.86-.35-2.5-.97"></svg:path>`,
})
export class MdiGuyFawkesMaskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiGymnasticsIcon],svg[mdi-gymnastics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2M1 9h6l7-5l1.31 1.5l-4.17 3H14L21.8 4L23 5.4L14.5 12L14 22h-2l-.5-10L8 11H1z"></svg:path>`,
})
export class MdiGymnasticsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHailIcon],svg[mdi-hail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 16h3v6H4zM19 2.39c-.08 1.47-.45 2.74-1.14 3.82S16.22 8 15 8.39V22h-2v-6h-2v6H9V10.08c-.28.09-.5.2-.61.33C7.45 11.16 7 12.19 7 13.5v.5H5v-.5c0-1.97.72-3.56 2.13-4.78C8.53 7.56 10.16 7 12 7c1.41 0 2.56-.36 3.47-1.05C16.5 5.11 17 3.95 17 2.5V2h2zM12 2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiHailIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHairDryerIcon],svg[mdi-hair-dryer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 9a4.3 4.3 0 0 1-2.22-.55A3.4 3.4 0 0 0 18 8V7a4.3 4.3 0 0 1 2.22.55A3.4 3.4 0 0 0 22 8m0-2a3.4 3.4 0 0 1-1.78-.45A4.3 4.3 0 0 0 18 5v1a3.4 3.4 0 0 1 1.78.45A4.3 4.3 0 0 0 22 7m0 3a3.4 3.4 0 0 1-1.78-.45A4.3 4.3 0 0 0 18 9v1a3.4 3.4 0 0 1 1.78.45A4.3 4.3 0 0 0 22 11m-12 1.73A70 70 0 0 0 17 11V4s-6.5-2-9.5-2a5.5 5.5 0 0 0-1.38 10.82L7 19h1a3 3 0 0 0 1.46 2.33A3.15 3.15 0 0 1 11 24h1a4.12 4.12 0 0 0-1.91-3.45C9.39 20 9 19.63 9 19h1m-2.5-9A2.5 2.5 0 1 1 10 7.5A2.5 2.5 0 0 1 7.5 10"></svg:path>`,
})
export class MdiHairDryerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHairDryerOutlineIcon],svg[mdi-hair-dryer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 12.73A70 70 0 0 0 17 11V4s-6.5-2-9.5-2a5.5 5.5 0 0 0-1.38 10.82L7 19h1a3 3 0 0 0 1.46 2.33A3.15 3.15 0 0 1 11 24h1a4.12 4.12 0 0 0-1.91-3.45C9.39 20 9 19.63 9 19h1M4 7.5A3.5 3.5 0 0 1 7.5 4A37 37 0 0 1 15 5.5v4A37 37 0 0 1 7.5 11A3.5 3.5 0 0 1 4 7.5M22 9a4.3 4.3 0 0 1-2.22-.55A3.4 3.4 0 0 0 18 8V7a4.3 4.3 0 0 1 2.22.55A3.4 3.4 0 0 0 22 8m0-2a3.4 3.4 0 0 1-1.78-.45A4.3 4.3 0 0 0 18 5v1a3.4 3.4 0 0 1 1.78.45A4.3 4.3 0 0 0 22 7m0 3a3.4 3.4 0 0 1-1.78-.45A4.3 4.3 0 0 0 18 9v1a3.4 3.4 0 0 1 1.78.45A4.3 4.3 0 0 0 22 11M9 7.5A1.5 1.5 0 1 1 7.5 6A1.5 1.5 0 0 1 9 7.5"></svg:path>`,
})
export class MdiHairDryerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHalloweenIcon],svg[mdi-halloween-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 6c.97 0 1.87.5 2.61 1.38c.55-.59 1.2-1.02 1.89-1.23V4a2 2 0 0 1 2-2h2v2h-2v2.15c.69.21 1.34.64 1.89 1.23C15.63 6.5 16.53 6 17.5 6C20 6 22 9.36 22 13.5S20 21 17.5 21c-.97 0-1.87-.5-2.61-1.38C14.08 20.5 13.08 21 12 21s-2.08-.5-2.89-1.38C8.37 20.5 7.47 21 6.5 21C4 21 2 17.64 2 13.5S4 6 6.5 6M9 10l-1.25 2.25h2.5zm6 0l-1.25 2.25h2.5zm-7 7h2l1-1l1 1h2l1-1l1 1l1.5-3l-3.58.62L13 16l-1-1h-2l-1 1l-1-1l-2-1z"></svg:path>`,
})
export class MdiHalloweenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHamburgerIcon],svg[mdi-hamburger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13c0 1.11-.89 2-2 2H4a2 2 0 1 1 0-4h9l2.5 2l2.5-2h2a2 2 0 0 1 2 2M12 3C3 3 3 9 3 9h18s0-6-9-6M3 18c0 1.66 1.34 3 3 3h12c1.66 0 3-1.34 3-3v-1H3z"></svg:path>`,
})
export class MdiHamburgerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHamburgerCheckIcon],svg[mdi-hamburger-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 9H3s0-6 9-6s9 6 9 6m-7.65 8H3v1c0 1.66 1.34 3 3 3h7.35c-.22-.63-.35-1.3-.35-2s.13-1.37.35-2m8.51-3.27A2 2 0 0 0 20 11h-9l-2.5 2L6 11H4c-1.1 0-2 .9-2 2s.9 2 2 2h10.54c1.1-1.22 2.69-2 4.46-2c1.04 0 2 .26 2.86.73m-.52 2.11l-3.59 3.59l-1.59-1.59L15 19l2.75 3l4.75-4.75z"></svg:path>`,
})
export class MdiHamburgerCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHamburgerMinusIcon],svg[mdi-hamburger-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 9H3s0-6 9-6s9 6 9 6m-7.65 8H3v1c0 1.66 1.34 3 3 3h7.35c-.22-.63-.35-1.3-.35-2s.13-1.37.35-2m8.51-3.27A2 2 0 0 0 20 11h-9l-2.5 2L6 11H4c-1.1 0-2 .9-2 2s.9 2 2 2h10.54c1.1-1.22 2.69-2 4.46-2c1.04 0 2 .26 2.86.73M15 18v2h8v-2z"></svg:path>`,
})
export class MdiHamburgerMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHamburgerOffIcon],svg[mdi-hamburger-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 11a2 2 0 1 1 0 4h-1.8l-4-4zm.42 8.77v-.01L17.66 17h-.01l-2-2h.01l-4-4l-2-2l-7.27-7.27L1.11 3l3.01 3C3 7.5 3 9 3 9h4.11l2 2H4c-1.1 0-2 .9-2 2s.9 2 2 2h9.11l2 2H3v1c0 1.66 1.34 3 3 3h12c.33 0 .65-.07.94-.17l1.9 1.9l1.27-1.27zM21 9s0-6-9-6c-2.12 0-3.72.34-4.95.85L12.2 9z"></svg:path>`,
})
export class MdiHamburgerOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHamburgerPlusIcon],svg[mdi-hamburger-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 9H3s0-6 9-6s9 6 9 6m-7.65 8H3v1c0 1.66 1.34 3 3 3h7.35c-.22-.63-.35-1.3-.35-2s.13-1.37.35-2m8.51-3.27A2 2 0 0 0 20 11h-9l-2.5 2L6 11H4c-1.1 0-2 .9-2 2s.9 2 2 2h10.54c1.1-1.22 2.69-2 4.46-2c1.04 0 2 .26 2.86.73M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z"></svg:path>`,
})
export class MdiHamburgerPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHamburgerRemoveIcon],svg[mdi-hamburger-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 9H3s0-6 9-6s9 6 9 6m-7.65 8H3v1c0 1.66 1.34 3 3 3h7.35c-.22-.63-.35-1.3-.35-2s.13-1.37.35-2m8.51-3.27A2 2 0 0 0 20 11h-9l-2.5 2L6 11H4c-1.1 0-2 .9-2 2s.9 2 2 2h10.54c1.1-1.22 2.69-2 4.46-2c1.04 0 2 .26 2.86.73m.68 3.15l-1.42-1.41L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19z"></svg:path>`,
})
export class MdiHamburgerRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHammerIcon],svg[mdi-hammer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 19.63L13.43 8.2l-.71-.7l1.42-1.43L12 3.89c1.2-1.19 3.09-1.19 4.27 0l3.6 3.61l-1.42 1.41h2.84l.71.71l-3.55 3.59l-.71-.71V9.62l-1.47 1.42l-.71-.71L4.13 21.76z"></svg:path>`,
})
export class MdiHammerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHammerScrewdriverIcon],svg[mdi-hammer-screwdriver-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.06 13.09l5.63 5.59l-3.32 3.28l-5.59-5.59v-.92l2.36-2.36zm.91-2.53L16 9.6l-4.79 4.8v1.97L5.58 22L2.3 18.68l5.59-5.59h1.97l.78-.78L6.8 8.46H5.5L2.69 5.62L5.31 3l2.8 2.8v1.31L12 10.95l2.66-2.66l-.96-1.01L15 5.97h-2.66l-.65-.65L15 2l.66.66v2.66L16.97 4l3.28 3.28c1.09 1.1 1.09 2.89 0 3.98l-1.97-2.01z"></svg:path>`,
})
export class MdiHammerScrewdriverIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHammerSickleIcon],svg[mdi-hammer-sickle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 20.59L20.59 22l-3.14-3.14c-.56.37-1.15.7-1.79.92c-1.66.58-3.46.62-5.13.1c-1.03-.3-1.97-.83-2.78-1.51l-3.19 3.19c-.56.59-1.53.59-2.12 0c-.58-.56-.58-1.56 0-2.12l3.38-3.38l2.65-.52a6.1 6.1 0 0 0 2.81 1.96c1.16.35 2.44.34 3.59-.04c.29-.09.57-.2.83-.34L7.6 9l-1.77 1.78L3 7.95L7.95 3l4.24 1.41L9 7.6l8.31 8.29c.19-.18.34-.36.49-.56c1.5-1.97 1.62-4.91.29-7.33C16.78 5.57 14.5 3.55 12 2c1.41.5 2.76 1.17 4 2.04s2.43 1.89 3.33 3.21c.9 1.29 1.54 2.87 1.67 4.54c.1 1.68-.34 3.44-1.3 4.86c-.2.35-.46.63-.7.91z"></svg:path>`,
})
export class MdiHammerSickleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHammerWrenchIcon],svg[mdi-hammer-wrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.78 15.3l6 6l2.11-2.16l-6-6zm3.72-5.2c-.39 0-.81-.05-1.14-.19L4.97 21.25l-2.11-2.11l7.41-7.4L8.5 9.96l-.72.7l-1.45-1.41v2.86l-.7.7l-3.52-3.56l.7-.7h2.81l-1.4-1.41l3.56-3.56a2.976 2.976 0 0 1 4.22 0L9.89 5.74l1.41 1.4l-.71.71l1.79 1.78l1.82-1.88c-.14-.33-.2-.75-.2-1.12a3.49 3.49 0 0 1 3.5-3.52c.59 0 1.11.14 1.58.42L16.41 6.2l1.5 1.5l2.67-2.67c.28.47.42.97.42 1.6c0 1.92-1.55 3.47-3.5 3.47"></svg:path>`,
})
export class MdiHammerWrenchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHandBackLeftIcon],svg[mdi-hand-back-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 16V5.75a1.25 1.25 0 0 1 2.5 0V12h1V2.75a1.25 1.25 0 0 1 2.5 0V12h1V1.25a1.25 1.25 0 0 1 2.5 0V12h1V3.25a1.25 1.25 0 0 1 2.5 0V15h.75l1.41-3.53c.22-.55.68-.97 1.24-1.16l.79-.26a1 1 0 0 1 1.24 1.32L18.4 19c-1.21 3-4.14 5-7.4 5c-4.42 0-8-3.58-8-8"></svg:path>`,
})
export class MdiHandBackLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHandBackLeftOffIcon],svg[mdi-hand-back-left-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3l2.1 2.1c-.12.19-.21.4-.21.65V16c0 4.42 3.58 8 8 8c2.93 0 5.58-1.61 6.97-4.14l2.87 2.87zM5.5 12V7.39l1 1V12zm4.5 0H9v-1.11l1 1zm6 .8l-2.5-2.5V3.25a1.25 1.25 0 0 1 2.5 0zm3.5 3.48l-2.34-2.32l1-2.49c.22-.55.68-.97 1.24-1.16l.79-.26a1 1 0 0 1 1.24 1.32zM9 5.8L6.5 3.3v-.55a1.25 1.25 0 0 1 2.5 0zm3.5 3.5L10 6.8V1.25a1.25 1.25 0 0 1 2.5 0z"></svg:path>`,
})
export class MdiHandBackLeftOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHandBackLeftOffOutlineIcon],svg[mdi-hand-back-left-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3l2.45 2.45C3.21 5.87 3 6.41 3 7v9c0 4.42 3.58 8 8 8c2.94 0 5.62-1.55 7.12-4l2.72 2.73zM11 22c-3.31 0-6-2.69-6-6V6.91l1 .98V12h2V9.89l1 1V12h1.11l6.54 6.54A6.35 6.35 0 0 1 11 22M8 4.8L6.21 3c.38-.88 1.26-1.5 2.29-1.5c.23 0 .46.03.67.09C9.54.66 10.44 0 11.5 0c1.23 0 2.25.89 2.46 2.06c.17-.06.35-.06.54-.06A2.5 2.5 0 0 1 17 4.5v5.89c.34-.31.76-.54 1.22-.66L19 9.5c.82-.21 1.69.11 2.18.85c.38.57.4 1.31.15 1.95l-1.66 4.17l-1.54-1.54l1.37-3.48l-.5.14c-.5.12-.85.46-1 .91l-.66 1.64L15 11.8V4.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v6.3l-2-2V2.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v5.3l-2-2V4c0-.28-.22-.5-.5-.5S8 3.72 8 4z"></svg:path>`,
})
export class MdiHandBackLeftOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHandBackLeftOutlineIcon],svg[mdi-hand-back-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 16c0 4.42 3.58 8 8 8c3.43 0 6.5-2.09 7.77-5.27l2.56-6.43c.25-.64.23-1.38-.15-1.95A2 2 0 0 0 19 9.5l-.78.23c-.46.12-.88.35-1.22.66V4.5A2.5 2.5 0 0 0 14.5 2c-.19 0-.37 0-.54.06A2.5 2.5 0 0 0 11.5 0c-1.06 0-1.96.66-2.33 1.59A2.5 2.5 0 0 0 6 4v.55c-.16-.05-.33-.05-.5-.05A2.5 2.5 0 0 0 3 7zm2-9c0-.28.22-.5.5-.5s.5.22.5.5v5h2V4c0-.28.22-.5.5-.5s.5.22.5.5v8h2V2.5c0-.28.22-.5.5-.5s.5.22.5.5V12h2V4.5c0-.28.22-.5.5-.5s.5.22.5.5V15h2l1-2.5c.15-.45.5-.79 1-.91l.5-.14L16.91 18c-.96 2.41-3.3 4-5.91 4c-3.31 0-6-2.69-6-6z"></svg:path>`,
})
export class MdiHandBackLeftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHandBackRightIcon],svg[mdi-hand-back-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 24c-3.26 0-6.19-2-7.4-5l-3.03-7.63a1 1 0 0 1 1.24-1.32l.79.26c.56.19 1.02.61 1.24 1.16L7.25 15H8V3.25a1.25 1.25 0 0 1 2.5 0V12h1V1.25a1.25 1.25 0 0 1 2.5 0V12h1V2.75a1.25 1.25 0 0 1 2.5 0V12h1V5.75a1.25 1.25 0 0 1 2.5 0V16c0 4.42-3.58 8-8 8"></svg:path>`,
})
export class MdiHandBackRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHandBackRightOffIcon],svg[mdi-hand-back-right-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.84 22.73l-1.67-1.67C17.7 22.85 15.5 24 13 24c-3.26 0-6.19-2-7.4-5l-3.03-7.63a1 1 0 0 1 1.24-1.32l.79.26c.56.19 1.02.61 1.24 1.16L7.25 15H8V9.89L1.11 3l1.28-1.27l19.72 19.73zM14 1.25a1.25 1.25 0 0 0-2.5 0V8.3l2.5 2.5zM21 16V5.75a1.25 1.25 0 0 0-2.5 0V12h-1V2.75a1.25 1.25 0 0 0-2.5 0v9.05l5.83 5.83c.11-.52.17-1.07.17-1.63M10.5 3.25a1.25 1.25 0 0 0-2.5 0V4.8l2.5 2.5z"></svg:path>`,
})
export class MdiHandBackRightOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHandBackRightOffOutlineIcon],svg[mdi-hand-back-right-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3L7 8.89v1.5c-.34-.31-.76-.54-1.22-.66L5 9.5c-.82-.21-1.69.11-2.18.85c-.38.57-.4 1.31-.15 1.95l2.56 6.43A8.36 8.36 0 0 0 13 24c2.5 0 4.7-1.15 6.17-2.94l1.67 1.67zM13 22a6.36 6.36 0 0 1-5.91-4L4.5 11.45l.5.14c.5.12.85.46 1 .91L7 15h2v-4.11l8.75 8.75A5.96 5.96 0 0 1 13 22M9 5.8L7.09 3.89A2.48 2.48 0 0 1 9.5 2c.19 0 .37 0 .54.06A2.5 2.5 0 0 1 12.5 0c1.06 0 1.96.66 2.33 1.59A2.5 2.5 0 0 1 18 4v.55c.16-.05.33-.05.5-.05A2.5 2.5 0 0 1 21 7v9c0 .56-.06 1.11-.17 1.63L19 15.8V7c0-.28-.22-.5-.5-.5s-.5.22-.5.5v5h-2V4c0-.28-.22-.5-.5-.5s-.5.22-.5.5v7.8l-2-2V2.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5v6.3l-2-2V4.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5z"></svg:path>`,
})
export class MdiHandBackRightOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHandBackRightOutlineIcon],svg[mdi-hand-back-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7a2.5 2.5 0 0 0-2.5-2.5c-.17 0-.34 0-.5.05V4a2.5 2.5 0 0 0-3.17-2.41A2.51 2.51 0 0 0 12.5 0c-1.23 0-2.25.89-2.46 2.06C9.87 2 9.69 2 9.5 2A2.5 2.5 0 0 0 7 4.5v5.89c-.34-.31-.76-.54-1.22-.66L5 9.5c-.82-.21-1.69.11-2.18.85c-.38.57-.4 1.31-.15 1.95l2.56 6.43A8.36 8.36 0 0 0 13 24c4.42 0 8-3.58 8-8zm-2 9c0 3.31-2.69 6-6 6a6.36 6.36 0 0 1-5.91-4L4.5 11.45l.5.14c.5.12.85.46 1 .91L7 15h2V4.5c0-.28.22-.5.5-.5s.5.22.5.5V12h2V2.5c0-.28.22-.5.5-.5s.5.22.5.5V12h2V4c0-.28.22-.5.5-.5s.5.22.5.5v8h2V7c0-.28.22-.5.5-.5s.5.22.5.5z"></svg:path>`,
})
export class MdiHandBackRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHandClapIcon],svg[mdi-hand-clap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.9 21.47a6.09 6.09 0 0 1-1.72-6.63l2.13-5.93a.765.765 0 0 1 1.38-.13l.31.55c.24.39.29.87.14 1.3l-.98 2.74l.43.38L15.55 7c.35-.4.95-.44 1.36-.09c.39.35.43.96.09 1.35l-4.45 5.03l.58.51l5.45-6.18c.35-.4.96-.44 1.35-.09c.4.35.44.97.07 1.36l-5.44 6.18l.58.51l4.69-5.32c.35-.4.96-.44 1.35-.09s.44.96.09 1.33l-4.69 5.34l.57.51l3.17-3.59c.35-.4.96-.44 1.36-.09s.43.96.08 1.33l-5.2 5.92a6.13 6.13 0 0 1-8.66.55m3.69-12.25L14.43 6c.24-.27.54-.5.87-.63l.38-.78a.947.947 0 0 0-.44-1.28a.964.964 0 0 0-1.28.44l-2.51 5.14c.05.11.11.22.14.33M11 8v.05l2.78-5.67a.965.965 0 0 0-.45-1.28a.95.95 0 0 0-1.28.44L9.41 6.95c.65.11 1.22.48 1.59 1.05m-6.23 6.33L6.9 8.4c.27-.75.9-1.26 1.65-1.43l2.14-4.39a.96.96 0 0 0-.44-1.28a.95.95 0 0 0-1.28.44L5 9.84l-.5-.25l.21-2.91c.04-.45-.14-.9-.46-1.22L3.79 5c-.47-.43-1.24-.14-1.29.5L2 11.79c-.13 2.04.77 3.99 2.35 5.21c-.02-.88.11-1.79.42-2.67"></svg:path>`,
})
export class MdiHandClapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHandClapOffIcon],svg[mdi-hand-clap-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3l1.86 1.86c-.25.1-.47.33-.47.64L2 11.79c-.13 2.04.77 3.99 2.35 5.21c-.02-.88.11-1.79.42-2.67L6.8 8.69l1.17 1.17l-1.79 4.98a6.09 6.09 0 0 0 1.72 6.63a6.13 6.13 0 0 0 8.66-.55l1.16-1.31l3.12 3.12zM5 9.84l-.5-.25l.21-2.91V6.6l1.26 1.26zm4.59 3.91l-.43-.38l.61-1.71l.88.88zm5.35-2.01l3.64-4.12c.35-.4.96-.44 1.35-.09c.4.35.44.97.07 1.36l-3.7 4.21zm4.89-1.48c.35-.4.96-.44 1.35-.09c.39.33.44.96.09 1.33L18.2 15l-1.35-1.35zm1.85 3.41c.4.33.43.96.08 1.33l-1.66 1.9l-1.36-1.36l1.58-1.78c.35-.4.96-.44 1.36-.09M15.55 7c.35-.4.95-.44 1.36-.09c.39.35.43.96.09 1.35l-2.6 2.94l-1.36-1.36zm-3.89 1.46l2.3-4.71c.23-.47.81-.67 1.28-.44c.48.23.68.81.44 1.28l-.38.78c-.33.13-.63.36-.87.63L12 8.78zM9.08 5.88L7.64 4.44l1.33-2.7c.23-.48.8-.67 1.28-.44c.47.23.67.8.44 1.28zm.57.57l2.4-4.91a.95.95 0 0 1 1.28-.44c.48.23.67.8.45 1.28l-2.7 5.5z"></svg:path>`,
})
export class MdiHandClapOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHandCoinIcon],svg[mdi-hand-coin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 12c2.76 0 5-2.24 5-5s-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5m5.45 5.6c-.39-.4-.88-.6-1.45-.6h-7l-2.08-.73l.33-.94L13 16h2.8c.35 0 .63-.14.86-.37s.34-.51.34-.82c0-.54-.26-.91-.78-1.12L8.95 11H7v9l7 2l8.03-3c.01-.53-.19-1-.58-1.4M5 11H.984v11H5z"></svg:path>`,
})
export class MdiHandCoinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHandCoinOutlineIcon],svg[mdi-hand-coin-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5m0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3m3 6h-2c0-1.2-.75-2.28-1.87-2.7L8.97 11H1v11h6v-1.44l7 1.94l8-2.5v-1c0-1.66-1.34-3-3-3M5 20H3v-7h2zm8.97.41L7 18.5V13h1.61l5.82 2.17c.34.13.57.46.57.83c0 0-2-.05-2.3-.15l-2.38-.79l-.63 1.9l2.38.79c.51.17 1.04.25 1.58.25H19c.39 0 .74.24.9.57z"></svg:path>`,
})
export class MdiHandCoinOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHandCycleIcon],svg[mdi-hand-cycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 13c-1.32 0-2.45.74-3.05 1.81l-3.22-2.63l-2.27.82l-1.09-1.68l1.34.37l2.66-2.19l-.94-1.14l-2.03 1.67L7.96 9h-.01c-.41-.15-.87-.11-1.26.14c-.65.42-.86 1.25-.53 1.93c-.21-.04-.43-.07-.66-.07C3 11 1 13 1 15.5S3 20 5.5 20s4.5-2 4.5-4.5c0-.13-.03-.25-.04-.38L13 14l3 2.5c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5m-14 5.5c-1.65 0-3-1.35-3-3s1.35-3 3-3s3 1.35 3 3s-1.35 3-3 3m14 0c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2M6.44 7.57c-.59-.57-.59-1.51 0-2.07c.59-.61 1.53-.61 2.12 0c.59.56.59 1.5 0 2.07c-.59.58-1.53.58-2.12 0"></svg:path>`,
})
export class MdiHandCycleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHandExtendedIcon],svg[mdi-hand-extended-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 13q.9 0 1.5.6c.3.4.5.9.5 1.4l-8 3l-7-2V7h1.9l7.3 2.7c.5.2.8.6.8 1.1c0 .3-.1.6-.3.8s-.6.4-.9.4H13l-1.8-.7l-.3.9l2.1.8zM1 7h4v11H1z"></svg:path>`,
})
export class MdiHandExtendedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHandExtendedOutlineIcon],svg[mdi-hand-extended-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 15v1l-8 2.5l-7-1.9V18H1V7h8l6.2 2.3c1 .4 1.8 1.5 1.8 2.7h2c1.7 0 3 1.3 3 3M5 16V9H3v7zm14.9-1.4q-.3-.6-.9-.6h-5.4c-.5 0-1.1-.1-1.6-.2L9.7 13l.6-1.9l2.4.8c.3 0 2.3.1 2.3.1c0-.4-.2-.7-.6-.8L8.6 9H7v5.5l7 1.9z"></svg:path>`,
})
export class MdiHandExtendedOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHandFrontLeftIcon],svg[mdi-hand-front-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 9.25v6.5C3 20.31 6.69 24 11.25 24s8.25-3.69 8.25-8.25v-10a1.25 1.25 0 0 0-2.5 0V12h-1V2.75a1.25 1.25 0 0 0-2.5 0V11h-1V1.25a1.25 1.25 0 0 0-2.5 0V11H9V3.25a1.25 1.25 0 0 0-2.5 0v10.78c1.97.25 3.5 1.93 3.5 3.97H9c0-1.65-1.35-3-3-3h-.5V9.25a1.25 1.25 0 0 0-2.5 0"></svg:path>`,
})
export class MdiHandFrontLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHandFrontLeftOutlineIcon],svg[mdi-hand-front-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10.5v5c0 4.69 3.81 8.5 8.5 8.5s8.5-3.81 8.5-8.5V7a2.5 2.5 0 0 0-2.5-2.5c-.17 0-.34 0-.5.05V4a2.5 2.5 0 0 0-3.17-2.41A2.51 2.51 0 0 0 11.5 0c-1.23 0-2.25.89-2.46 2.06C8.87 2 8.69 2 8.5 2A2.5 2.5 0 0 0 6 4.5v3.55C5.84 8 5.67 8 5.5 8A2.5 2.5 0 0 0 3 10.5m2 0c0-.28.22-.5.5-.5s.5.22.5.5V15c1.66 0 3 1.34 3 3h2c0-2.05-1.23-3.81-3-4.58V4.5c0-.28.22-.5.5-.5s.5.22.5.5V11h2V2.5c0-.28.22-.5.5-.5s.5.22.5.5V11h2V4c0-.28.22-.5.5-.5s.5.22.5.5v8h2V7c0-.28.22-.5.5-.5s.5.22.5.5v8.5a6.5 6.5 0 1 1-13 0z"></svg:path>`,
})
export class MdiHandFrontLeftOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHandFrontRightIcon],svg[mdi-hand-front-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.75 8c-.69 0-1.25.56-1.25 1.25V15H18c-1.65 0-3 1.35-3 3h-1c0-2.04 1.53-3.72 3.5-3.97V3.25a1.25 1.25 0 0 0-2.5 0V11h-1V1.25a1.25 1.25 0 0 0-2.5 0V11h-1V2.75a1.25 1.25 0 0 0-2.5 0V12H7V5.75a1.25 1.25 0 0 0-2.5 0v10c0 4.56 3.69 8.25 8.25 8.25S21 20.31 21 15.75v-6.5C21 8.56 20.44 8 19.75 8"></svg:path>`,
})
export class MdiHandFrontRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHandFrontRightOutlineIcon],svg[mdi-hand-front-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 8c-.17 0-.34 0-.5.05V4.5A2.5 2.5 0 0 0 15.5 2c-.19 0-.37 0-.54.06A2.5 2.5 0 0 0 12.5 0c-1.06 0-1.96.66-2.33 1.59A2.5 2.5 0 0 0 7 4v.55c-.16-.05-.33-.05-.5-.05A2.5 2.5 0 0 0 4 7v8.5c0 4.69 3.81 8.5 8.5 8.5s8.5-3.81 8.5-8.5v-5A2.5 2.5 0 0 0 18.5 8m.5 7.5a6.5 6.5 0 1 1-13 0V7c0-.28.22-.5.5-.5s.5.22.5.5v5h2V4c0-.28.22-.5.5-.5s.5.22.5.5v7h2V2.5c0-.28.22-.5.5-.5s.5.22.5.5V11h2V4.5c0-.28.22-.5.5-.5s.5.22.5.5v8.92c-1.77.77-3 2.53-3 4.58h2c0-1.66 1.34-3 3-3v-4.5c0-.28.22-.5.5-.5s.5.22.5.5z"></svg:path>`,
})
export class MdiHandFrontRightOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHandHeartIcon],svg[mdi-hand-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 17q.86 0 1.45.6t.58 1.4L14 22l-7-2v-9h1.95l7.27 2.69q.78.31.78 1.12q0 .47-.34.82t-.86.37H13l-1.75-.67l-.33.94L13 17zM16 3.23Q17.06 2 18.7 2q1.36 0 2.3 1t1 2.3q0 1.03-1 2.46t-1.97 2.39T16 13q-2.08-1.89-3.06-2.85t-1.97-2.39T10 5.3q0-1.36.97-2.3t2.34-1q1.6 0 2.69 1.23M.984 11H5v11H.984z"></svg:path>`,
})
export class MdiHandHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHandHeartOutlineIcon],svg[mdi-hand-heart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3.23Q17.065 2 18.7 2c.91 0 1.67.33 2.3 1s.96 1.43 1 2.3c0 .7-.33 1.51-1 2.46s-1.32 1.74-1.97 2.39q-.975.96-3.03 2.85q-2.085-1.89-3.06-2.85c-.975-.96-1.31-1.44-1.97-2.39S10 6 10 5.3c0-.91.32-1.67.97-2.3s1.43-.96 2.34-1c1.07 0 1.96.41 2.69 1.23M22 19v1l-8 2.5l-7-1.94V22H1V11h7.97l6.16 2.3A2.89 2.89 0 0 1 17 16h2c1.66 0 3 1.34 3 3M5 20v-7H3v7zm14.9-1.43c-.16-.33-.51-.57-.9-.57h-5.35c-.54 0-1.07-.08-1.58-.25l-2.38-.79l.63-1.9l2.38.79c.3.1 2.3.15 2.3.15c0-.37-.23-.7-.57-.83L8.61 13H7v5.5l6.97 1.91z"></svg:path>`,
})
export class MdiHandHeartOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHandLeftIcon],svg[mdi-hand-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M3 6.58v12.09C3 20.5 4.5 22 6.33 22h6.09c.9 0 1.75-.36 2.37-1l6.54-6.64s-1.05-1.03-1.08-1.04a.985.985 0 0 0-1.16-.11c-.03.01-3.59 2.05-3.59 2.05V5.33a1.25 1.25 0 0 0-1.25-1.25A1.25 1.25 0 0 0 13 5.33v5.84h-.83V3.25A1.25 1.25 0 0 0 10.92 2a1.25 1.25 0 0 0-1.25 1.25v7.92h-.84V4.08a1.25 1.25 0 0 0-1.25-1.25a1.25 1.25 0 0 0-1.25 1.25v7.09H5.5V6.58a1.25 1.25 0 0 0-1.25-1.25A1.25 1.25 0 0 0 3 6.58z" fill="currentColor"></svg:path>`,
})
export class MdiHandLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHandOkayIcon],svg[mdi-hand-okay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.3 19.26l5.66-5.65l2.12 2.12l-5.66 5.65zm3.2-8.13l-3.1-3.08a1.7 1.7 0 0 0-.4-.29l-1.12-4.29a1.001 1.001 0 0 0-1.94.49L11 8.03L8.67 3.19c-.23-.5-.83-.69-1.33-.48c-.5.24-.71.84-.47 1.34l1.69 3.54l-3.37-3.34c-.39-.39-1.03-.39-1.42 0c-.39.4-.38 1.03.01 1.42l3.72 3.7l-.7.27l-1.08.43l-1.91 1.32s-.81 1.05-.88 1.5c-.08.45.79 2.71.79 2.71h.01c.16.34.5.58.9.58a1 1 0 0 0 1-1c0-.1-.03-.18-.06-.27l.02-.01L5 13.17l1.23-.98c.47.02 1.48.1 1.97.13c2.73 2.45.15 3.41.15 3.41l-3.46 1.06l-.17.14a.94.94 0 0 0-.3.75l.02 1.07l6.43-.5c.38.01.74-.13 1.02-.4l4.61-4.6c.53-.54.55-1.55 0-2.12"></svg:path>`,
})
export class MdiHandOkayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHandPeaceIcon],svg[mdi-hand-peace-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 19h8v3H7zm9.15-7l-3.18-1.66a.5.5 0 0 0-.37.16l-.3.31l.59 2.42l-.98.24l-1.19-4.97l-1.47.68l1.04 4.29l-.97.23l-1-4.11l-.47.21c-.5.2-.85.73-.85 1.34v4.36c0 .8.73 1.5 1.5 1.5H15c.39 0 .74-.16 1-.43l.5-.41s.5-.38.5-.8V13.7s0-1.14-.85-1.7m.79-11c-.54-.09-1.07.25-1.18.8l-1.07 6.17c-.22-.03-.31-.11-.61-.14l-.43.05l-1.24-6.08a1.02 1.02 0 0 0-1.17-.8c-.55.13-.9.66-.79 1.2l1.2 5.91l.35 1.56c.28-.2.61-.33.97-.33h.34l3 1.61l1.41-8.75c.11-.54-.22-1.07-.78-1.2"></svg:path>`,
})
export class MdiHandPeaceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHandPeaceVariantIcon],svg[mdi-hand-peace-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 19h8v3H7zm9.94-18c-.54-.09-1.07.25-1.18.8l-1.01 5.77c-.22-.03-.46-.07-.75-.1l-.43.03l-1.16-5.7c-.1-.54-.63-.89-1.17-.8c-.54.13-.89.66-.79 1.2l1.2 5.91l-3.8 1.69c-.5.2-.85.73-.85 1.34v4.36c0 .8.73 1.5 1.5 1.5H15c.39 0 .74-.16 1-.43l.5-.41s.5-.38.5-.8V13s0-1.14-.87-1.7l1.58-9.1c.12-.54-.21-1.07-.77-1.2"></svg:path>`,
})
export class MdiHandPeaceVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHandPointingDownIcon],svg[mdi-hand-pointing-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.9 21V11l-3.2 1.69l-.2.03c-.31 0-.57-.12-.76-.32L5 11.63l4.9-4.2c.26-.27.6-.43 1-.43h6.5c.77 0 1.5.7 1.5 1.5v4.36c0 .61-.35 1.14-.85 1.34l-4.94 2.2l-1.21.13V21a1 1 0 0 1-1 1a1 1 0 0 1-1-1m9-16h-8V2h8z"></svg:path>`,
})
export class MdiHandPointingDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHandPointingLeftIcon],svg[mdi-hand-pointing-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 9h10l-1.69-3.2l-.03-.22c0-.29.12-.55.32-.74l.77-.74l4.2 4.9c.27.26.43.61.43 1v6.5c0 .77-.7 1.5-1.5 1.5h-4.36c-.61 0-1.14-.35-1.34-.85l-2.2-4.94L7.47 11H3a1 1 0 0 1-1-1a1 1 0 0 1 1-1m16 9v-8h3v8z"></svg:path>`,
})
export class MdiHandPointingLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHandPointingRightIcon],svg[mdi-hand-pointing-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 9a1 1 0 0 1 1 1a1 1 0 0 1-1 1h-4.47l-.13 1.21l-2.2 4.94c-.2.5-.73.85-1.34.85H8.5c-.8 0-1.5-.73-1.5-1.5V10c0-.39.16-.74.43-1l4.2-4.9l.77.74c.2.19.32.45.32.74l-.03.22L11 9zM2 18v-8h3v8z"></svg:path>`,
})
export class MdiHandPointingRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHandPointingUpIcon],svg[mdi-hand-pointing-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3v10l3.2-1.69l.22-.03c.29 0 .55.12.74.32l.74.77l-4.9 4.2c-.26.27-.61.43-1 .43H6.5c-.77 0-1.5-.7-1.5-1.5v-4.36c0-.61.35-1.14.85-1.34l4.94-2.2L12 7.47V3a1 1 0 0 1 1-1a1 1 0 0 1 1 1M5 19h8v3H5z"></svg:path>`,
})
export class MdiHandPointingUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHandRightIcon],svg[mdi-hand-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M21 6.58v12.09A3.33 3.33 0 0 1 17.67 22h-6.09c-.9 0-1.75-.36-2.37-1l-6.54-6.64s1.05-1.03 1.08-1.04a.985.985 0 0 1 1.16-.11c.03.01 3.59 2.05 3.59 2.05V5.33a1.25 1.25 0 0 1 1.25-1.25A1.25 1.25 0 0 1 11 5.33v5.84h.83V3.25A1.25 1.25 0 0 1 13.08 2c.7 0 1.25.56 1.25 1.25v7.92h.84V4.08c0-.69.55-1.25 1.25-1.25a1.25 1.25 0 0 1 1.25 1.25v7.09h.83V6.58a1.25 1.25 0 0 1 1.25-1.25A1.25 1.25 0 0 1 21 6.58z" fill="currentColor"></svg:path>`,
})
export class MdiHandRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHandSawIcon],svg[mdi-hand-saw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.8 17l-3.9-5.4L20 2l2 3v3h-3v3h-3v3h-3v3m-3.3 1.7l-.5 2.8l-1.6 1.2c-.9.6-2.1.4-2.8-.5l-3.5-4.9c-.6-.9-.4-2.1.5-2.8l3.3-2.3zM4.6 15L3 16.1L6.5 21l1.6-1.2z"></svg:path>`,
})
export class MdiHandSawIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHandWashIcon],svg[mdi-hand-wash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 5l.62 1.37L19 7l-1.38.63L17 9l-.64-1.37L15 7l1.36-.63zm-6 1.13V4h2c.57 0 1.1.17 1.55.45L16 3c-.85-.61-1.87-1-3-1H7.5v2H9v2.14A4.99 4.99 0 0 0 5.26 9.5h3.98L15 11.65v-.62a5 5 0 0 0-4-4.9M1 22h4V11H1zm19-5h-7l-2.09-.73l.33-.94L13 16h2.82c.65 0 1.18-.53 1.18-1.18c0-.49-.31-.93-.77-1.11L8.97 11H7v9l7 2l8-3a2 2 0 0 0-2-2m0-3c1.1 0 2-.9 2-2s-2-4-2-4s-2 2.9-2 4s.9 2 2 2"></svg:path>`,
})
export class MdiHandWashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHandWashOutlineIcon],svg[mdi-hand-wash-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 5l.62 1.37L19 7l-1.38.63L17 9l-.64-1.37L15 7l1.36-.63zm3 9c1.1 0 2-.9 2-2s-2-4-2-4s-2 2.9-2 4s.9 2 2 2m-9-7.9V4h2c.57 0 1.1.17 1.55.45L16 3c-.85-.61-1.87-1-3-1H7.5v2H9v2.11A5.06 5.06 0 0 0 5.25 9.5h2.16C7.94 8.61 8.89 8 10 8c1.62 0 2.94 1.29 3 2.9l2 .75V11a5 5 0 0 0-4-4.9M22 19v1l-8 2.5l-7-1.94V22H1V11h7.97l6.16 2.3A2.89 2.89 0 0 1 17 16h2c1.66 0 3 1.34 3 3M5 20v-7H3v7zm14.9-1.43c-.16-.33-.51-.57-.9-.57h-5.35c-.54 0-1.07-.08-1.58-.25l-2.38-.79l.63-1.9l2.38.79c.3.1 2.3.15 2.3.15c0-.37-.23-.7-.57-.83L8.61 13H7v5.5l6.97 1.91z"></svg:path>`,
})
export class MdiHandWashOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHandWaterIcon],svg[mdi-hand-water-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.42 22.5H5.33C3.5 22.5 2 21 2 19.17v-6.09c0-.9.36-1.75 1-2.37l5.63-5.54s1.03 1.05 1.04 1.08a.985.985 0 0 1 .11 1.16C9.77 7.44 8 10 8 10h10.67a1.25 1.25 0 0 1 0 2.5h-5.84v.83h7.92a1.25 1.25 0 0 1 0 2.5h-7.92v.84h7.09a1.25 1.25 0 0 1 0 2.5h-7.09V20h4.59a1.25 1.25 0 0 1 0 2.5M13.5 4.8S12 6.46 12 7.5c0 2 3 2 3 0c0-1.04-1.5-2.7-1.5-2.7m5-3.8S16 3.76 16 5.5c0 3.33 5 3.33 5 0C21 3.76 18.5 1 18.5 1"></svg:path>`,
})
export class MdiHandWaterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHandWaveIcon],svg[mdi-hand-wave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 17c0 3.31-2.69 6-6 6v-1.5c2.5 0 4.5-2 4.5-4.5zM1 7c0-3.31 2.69-6 6-6v1.5c-2.5 0-4.5 2-4.5 4.5zm7-2.68l-4.59 4.6c-3.22 3.22-3.22 8.45 0 11.67s8.45 3.22 11.67 0l7.07-7.09c.49-.47.49-1.26 0-1.75a1.25 1.25 0 0 0-1.77 0l-4.42 4.42l-.71-.71l6.54-6.54c.49-.49.49-1.28 0-1.77s-1.29-.49-1.79 0L14.19 13l-.69-.73l6.87-6.89c.49-.49.49-1.28 0-1.77s-1.28-.49-1.77 0l-6.89 6.89l-.71-.7l5.5-5.48c.5-.49.5-1.28 0-1.77s-1.28-.49-1.77 0l-7.62 7.62a4 4 0 0 1-.33 5.28l-.71-.71a3 3 0 0 0 0-4.24l-.35-.35l4.07-4.07c.49-.49.49-1.28 0-1.77c-.5-.48-1.29-.48-1.79.01"></svg:path>`,
})
export class MdiHandWaveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHandWaveOutlineIcon],svg[mdi-hand-wave-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.03 4.95L3.5 8.5c-3.33 3.31-3.33 8.69 0 12s8.69 3.33 12 0l6-6c1-.97 1-2.56 0-3.54c-.1-.12-.23-.23-.37-.32l.37-.39c1-.97 1-2.56 0-3.54c-.14-.16-.33-.3-.5-.41c.38-.92.21-2.02-.54-2.77c-.87-.87-2.22-.96-3.2-.28a2.517 2.517 0 0 0-3.88-.42l-2.51 2.51c-.09-.14-.2-.27-.32-.39a2.53 2.53 0 0 0-3.52 0m1.41 1.42c.2-.2.51-.2.71 0s.2.51 0 .71l-3.18 3.18a3 3 0 0 1 0 4.24l1.41 1.41a5 5 0 0 0 1.12-5.36l6.3-6.3c.2-.2.51-.2.7 0s.21.51 0 .71l-4.59 4.6l1.41 1.41l6.01-6.01c.2-.2.51-.2.71 0s.2.51 0 .71l-6.01 6.01l1.41 1.41l4.95-4.95c.2-.2.51-.2.71 0s.2.51 0 .71l-5.66 5.65l1.41 1.42l3.54-3.54c.2-.2.51-.2.71 0s.2.51 0 .71l-6 6.01c-2.54 2.54-6.65 2.54-9.19 0s-2.54-6.65 0-9.19zM23 17c0 3.31-2.69 6-6 6v-1.5c2.5 0 4.5-2 4.5-4.5zM1 7c0-3.31 2.69-6 6-6v1.5c-2.5 0-4.5 2-4.5 4.5z"></svg:path>`,
})
export class MdiHandWaveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHandballIcon],svg[mdi-handball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.83 10.43a6.93 6.93 0 0 1 2.56 4.43a6.64 6.64 0 0 1-.89 4.64l-1.72-1a5 5 0 0 0 .66-2.5a5.2 5.2 0 0 0-.98-2.94L9.18 23.93l-1.74-.98l3-5.2l-1.73-.99l-1.5 2.58l-1.71-.98l5.13-8.91A7 7 0 0 1 8.8 5.46a6.9 6.9 0 0 1 .89-4.36l1.74 1.03a4.84 4.84 0 0 0-.52 3.77a4.74 4.74 0 0 0 2.3 3.03M16 5a2 2 0 1 0 2 2a2 2 0 0 0-2-2m-2.5-4A1.5 1.5 0 1 0 15 2.5A1.5 1.5 0 0 0 13.5 1"></svg:path>`,
})
export class MdiHandballIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHandcuffsIcon],svg[mdi-handcuffs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.24 6.76c-1.84-1.85-4.59-2.23-6.82-1.17l-.96-.96a.996.996 0 0 0-1.41 0l-.08.09C10.83 3.75 10 3 9 3c-1.1 0-2 .9-2 2c0 .09 0 .18.03.26C6.42 5.61 6 6.25 6 7c0 .46.16.87.42 1.21A.97.97 0 0 0 6 9v1.35c-2.33.82-4 3.04-4 5.65c0 3.31 2.69 6 6 6s6-2.69 6-6a5.99 5.99 0 0 0-4-5.65V9a.97.97 0 0 0-.42-.79c.26-.34.42-.75.42-1.21c0-.09 0-.18-.03-.26c.18-.1.33-.24.46-.36C11.36 6.88 12 7.86 12 9v.08c.13.07.25.17.38.25c.19-.42.45-.83.79-1.16a4.01 4.01 0 0 1 5.66 0a4.01 4.01 0 0 1 0 5.66c-.8.8-1.83 1.17-2.9 1.17c.07.32.07.66.07 1s-.03.67-.07 1c1.57 0 3.12-.57 4.31-1.76a5.98 5.98 0 0 0 0-8.48M9 4c.55 0 1 .45 1 1c0 .33-.17.61-.42.79C9.22 5.31 8.65 5 8 5c0-.55.45-1 1-1M7.42 6.21c.36.48.93.79 1.58.79c0 .55-.45 1-1 1s-1-.45-1-1c0-.33.17-.61.42-.79M12 16c0 2.21-1.79 4-4 4s-4-1.79-4-4s1.79-4 4-4s4 1.79 4 4"></svg:path>`,
})
export class MdiHandcuffsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHandsPrayIcon],svg[mdi-hands-pray-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.43 9.67c.04.11.07.21.07.33v5.22c0 .5-.19.98-.53 1.35l-2.79 3.05l-3.4-3.4L6 15L8.8 2.86a1.114 1.114 0 0 1 2.2.25v4.96a2 2 0 0 0-.5-.07c-1.1 0-2 .9-2 2v3c0 .28.22.5.5.5s.5-.22.5-.5v-3c0-.55.45-1 1-1c.19 0 .35.07.5.16c.12.07.21.16.3.26c.03.04.06.08.08.13c.02.04.04.08.05.12M2 19l4 3l1.17-1.27l-3.45-3.45zm16-4L15.2 2.86a1.114 1.114 0 0 0-2.2.25v4.96c.16-.04.33-.07.5-.07c1.1 0 2 .9 2 2v3c0 .28-.22.5-.5.5s-.5-.22-.5-.5v-3c0-.55-.45-1-1-1c-.19 0-.35.07-.5.16c-.12.07-.21.16-.29.26c-.03.04-.07.08-.09.13c-.02.04-.04.08-.05.12c-.04.11-.07.21-.07.33v5.22c0 .5.19.98.53 1.35l2.79 3.05l3.4-3.4zm2.28 2.28l-3.45 3.45L18 22l4-3z"></svg:path>`,
})
export class MdiHandsPrayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHandshakeIcon],svg[mdi-handshake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 6h3l3.29-3.3a1 1 0 0 1 1.42 0l2.58 2.59a1 1 0 0 1 0 1.41L19 9h-8v2a1 1 0 0 1-1 1a1 1 0 0 1-1-1V8a2 2 0 0 1 2-2m-6 5v4l-2.29 2.29a1 1 0 0 0 0 1.41l2.58 2.59a1 1 0 0 0 1.42 0L11 17h4a1 1 0 0 0 1-1v-1h1a1 1 0 0 0 1-1v-1h1a1 1 0 0 0 1-1v-1h-7v1a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9Z"></svg:path>`,
})
export class MdiHandshakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHandshakeOutlineIcon],svg[mdi-handshake-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.71 8.71c1.25-1.25.68-2.71 0-3.42l-3-3c-1.26-1.25-2.71-.68-3.42 0L13.59 4H11C9.1 4 8 5 7.44 6.15L3 10.59v4l-.71.7c-1.25 1.26-.68 2.71 0 3.42l3 3c.54.54 1.12.74 1.67.74c.71 0 1.36-.35 1.75-.74l2.7-2.71H15c1.7 0 2.56-1.06 2.87-2.1c1.13-.3 1.75-1.16 2-2C21.42 14.5 22 13.03 22 12V9h-.59zM20 12c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-1v1c0 .45-.19 1-1 1h-4.41l-3.28 3.28c-.31.29-.49.12-.6.01l-2.99-2.98c-.29-.31-.12-.49-.01-.6L5 15.41v-4l2-2V11c0 1.21.8 3 3 3s3-1.79 3-3h7zm.29-4.71L18.59 9H11v2c0 .45-.19 1-1 1s-1-.55-1-1V8c0-.46.17-2 2-2h3.41l2.28-2.28c.31-.29.49-.12.6-.01l2.99 2.98c.29.31.12.49.01.6"></svg:path>`,
})
export class MdiHandshakeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHangerIcon],svg[mdi-hanger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4a3.5 3.5 0 0 0-3.5 3.5h2A1.5 1.5 0 0 1 12 6a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 12 9c-.55 0-1 .45-1 1v1.75L2.4 18.2A1 1 0 0 0 3 20h18a1 1 0 0 0 .6-1.8L13 11.75v-.9a3.5 3.5 0 0 0 2.5-3.35A3.5 3.5 0 0 0 12 4m0 9.5l6 4.5H6Z"></svg:path>`,
})
export class MdiHangerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHangoutsIcon],svg[mdi-hangouts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M15 10.998l-1 2h-1.5l1-2H12v-3h3m-4 3l-1 2H8.5l1-2H8v-3h3m.5-6a8.5 8.5 0 0 0 0 17h.5v3.5c4.858-2.344 8-7.5 8-12a8.5 8.5 0 0 0-8.5-8.5z" fill="currentColor"></svg:path>`,
})
export class MdiHangoutsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHardHatIcon],svg[mdi-hard-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.87 12.15L9 6.46a9.9 9.9 0 0 1 6 0l-.87 5.69c-.07.49-.5.85-1 .85h-2.27a1 1 0 0 1-.99-.85M22 16c0-.79-.47-1.5-1.2-1.83A9.08 9.08 0 0 0 17 8.5l-1.76 4.84c-.14.4-.52.66-.94.66H9.7c-.42 0-.8-.26-.94-.66L7 8.5a9.1 9.1 0 0 0-3.8 5.66C2.47 14.5 2 15.2 2 16l6.45 1.84c.36.1.73.16 1.1.16h4.88c.37 0 .74-.06 1.1-.16z"></svg:path>`,
})
export class MdiHardHatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHarddiskIcon],svg[mdi-harddisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2m6 2a6 6 0 0 0-6 6c0 3.31 2.69 6 6.1 6l-.88-2.23a1.01 1.01 0 0 1 .37-1.37l.86-.5a1.01 1.01 0 0 1 1.37.37l1.92 2.42A5.98 5.98 0 0 0 18 10a6 6 0 0 0-6-6m0 5a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m-5 9a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m5.09-4.73l2.49 6.31l2.59-1.5l-4.22-5.31z"></svg:path>`,
})
export class MdiHarddiskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHarddiskPlusIcon],svg[mdi-harddisk-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0 0a1 1 0 1 0 1 1a1 1 0 0 0-1-1m6-7H6a2 2 0 0 0-2 2v9.09A5.5 5.5 0 0 1 5 13a5.7 5.7 0 0 1 2 .36a6 6 0 1 1 8.71 1.33l-1.92-2.42a1 1 0 0 0-1.37-.37l-.86.5a1 1 0 0 0-.37 1.37L12.1 16a6.1 6.1 0 0 1-2.1-.38a6 6 0 0 1 .19 6.38H18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-3.42 17.58l-2.49-6.31l.86-.5l4.22 5.31M12 11a1 1 0 1 0-1-1a1 1 0 0 0 1 1m-3 9H6v3H4v-3H1v-2h3v-3h2v3h3Z"></svg:path>`,
})
export class MdiHarddiskPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHarddiskRemoveIcon],svg[mdi-harddisk-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9a1 1 0 1 0 1 1a1 1 0 0 0-1-1m0 0a1 1 0 1 0 1 1a1 1 0 0 0-1-1m6-7H6a2 2 0 0 0-2 2v9.09A5.5 5.5 0 0 1 5 13a5.7 5.7 0 0 1 2 .36a6 6 0 1 1 8.71 1.33l-1.92-2.42a1 1 0 0 0-1.37-.37l-.86.5a1 1 0 0 0-.37 1.37L12.1 16a6.1 6.1 0 0 1-2.1-.38a6 6 0 0 1 .19 6.38H18a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-3.42 17.58l-2.49-6.31l.86-.5l4.22 5.31M12 11a1 1 0 1 0-1-1a1 1 0 0 0 1 1M7.12 22.54L5 20.41l-2.12 2.13l-1.42-1.42L3.59 19l-2.13-2.12l1.42-1.42L5 17.59l2.12-2.13l1.42 1.42L6.41 19l2.13 2.12Z"></svg:path>`,
})
export class MdiHarddiskRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHatFedoraIcon],svg[mdi-hat-fedora-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.11 11.92q.03-.315.03-.63c0-3.43-1.43-7.15-2.86-7.15S13.42 5.57 12 5.57c-1.43 0-2.86-1.43-4.29-1.43s-2.85 3.65-2.85 7.15c0 .21 0 .42.02.63c2.34.53 4.72.8 7.12.79c2.45 0 4.83-.27 7.11-.79M3.45 18.18a29.7 29.7 0 0 0 17.09 0A2.14 2.14 0 0 0 22 16.17c0-.45-.14-.88-.39-1.25c-.26-.36-.61-.63-1.05-.78c-2.7.86-5.56 1.31-8.56 1.31S6.13 15 3.43 14.14c-.43.15-.78.43-1.04.79c-.25.36-.39.79-.39 1.24c0 .94.61 1.73 1.45 2.01"></svg:path>`,
})
export class MdiHatFedoraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHazardLightsIcon],svg[mdi-hazard-lights-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 12l2.33 4H9.68zm0-4L6.21 18H17.8zm0-6L1 21h22zm0 4l7.53 13H4.47z"></svg:path>`,
})
export class MdiHazardLightsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHdmiPortIcon],svg[mdi-hdmi-port-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7H3c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h1l1.4 1.4c.4.4.9.6 1.4.6h10.3c.5 0 1-.2 1.4-.6L20 16h1c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2M3 14V9h18v5h-1.8l-2 2H6.8l-2-2zm16-3H5v2h14z"></svg:path>`,
})
export class MdiHdmiPortIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHdrIcon],svg[mdi-hdr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11.5v-1c0-.8-.7-1.5-1.5-1.5H16v6h1.5v-2h1.1l.9 2H21l-.9-2.1c.5-.3.9-.8.9-1.4m-1.5 0h-2v-1h2zm-13-.5h-2V9H3v6h1.5v-2.5h2V15H8V9H6.5zM13 9H9.5v6H13c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5m0 4.5h-2v-3h2z"></svg:path>`,
})
export class MdiHdrIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHdrOffIcon],svg[mdi-hdr-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 15v-2h1.1l.9 2H21l-.9-2.1c.5-.2.9-.8.9-1.4v-1c0-.8-.7-1.5-1.5-1.5H16v4.9l1.1 1.1zm0-4.5h2v1h-2zm-4.5 0v.4l1.5 1.5v-1.9c0-.8-.7-1.5-1.5-1.5h-1.9l1.5 1.5zm-3.5-1l-7-7l-1.1 1L6.9 9h-.4v2h-2V9H3v6h1.5v-2.5h2V15H8v-4.9l1.5 1.5V15h3.4l7.6 7.6l1.1-1.1z"></svg:path>`,
})
export class MdiHdrOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeadIcon],svg[mdi-head-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3C9.2 3 6.2 5.9 6 9.7l-1.9 2.5c-.2.3 0 .8.4.8H6v3c0 1.1.9 2 2 2h1v3h7v-4.7c2.4-1.1 4-3.5 4-6.3c0-3.9-3.1-7-7-7"></svg:path>`,
})
export class MdiHeadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeadAlertIcon],svg[mdi-head-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3C9.2 3 6.2 5.9 6 9.7l-1.9 2.5c-.2.3 0 .8.4.8H6v3c0 1.1.9 2 2 2h1v3h7v-4.7c2.4-1.1 4-3.5 4-6.3c0-3.9-3.1-7-7-7m1 12h-2v-2h2v1m0-3h-2V5h2z"></svg:path>`,
})
export class MdiHeadAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeadAlertOutlineIcon],svg[mdi-head-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3c3.9 0 7 3.1 7 7c0 2.8-1.6 5.2-4 6.3V21H9v-3H8c-1.1 0-2-.9-2-2v-3H4.5c-.4 0-.7-.5-.4-.8L6 9.7C6.2 5.9 9.2 3 13 3m0-2C8.4 1 4.6 4.4 4.1 8.9L2.5 11c-.6.8-.6 1.8-.2 2.6c.4.7 1 1.2 1.7 1.3V16c0 1.9 1.3 3.4 3 3.9V23h11v-5.5c2.5-1.7 4-4.4 4-7.5c0-5-4-9-9-9m1 14h-2v-2h2zm0-4h-2V5h2"></svg:path>`,
})
export class MdiHeadAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeadCheckIcon],svg[mdi-head-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3C9.23 3 6.19 5.95 6 9.66l-1.92 2.53c-.24.31 0 .81.42.81H6v3c0 1.11.89 2 2 2h1v3h7v-4.69c2.37-1.12 4-3.51 4-6.31c0-3.86-3.12-7-7-7m-.53 10L9 9.5l1.4-1.41l2.07 2.08L16.6 6L18 7.41z"></svg:path>`,
})
export class MdiHeadCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeadCheckOutlineIcon],svg[mdi-head-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3c3.88 0 7 3.14 7 7c0 2.8-1.63 5.19-4 6.31V21H9v-3H8c-1.11 0-2-.89-2-2v-3H4.5c-.42 0-.66-.5-.42-.81L6 9.66A7.003 7.003 0 0 1 13 3m0-2C8.42 1 4.61 4.43 4.06 8.91L2.5 11c-.58.72-.68 1.72-.26 2.59c.36.72 1 1.21 1.76 1.36V16c0 1.86 1.28 3.43 3 3.87V23h11v-5.53c2.5-1.64 4-4.41 4-7.47c0-4.96-4.04-9-9-9m-.53 12L9 9.5l1.4-1.41l2.07 2.08L16.6 6L18 7.41z"></svg:path>`,
})
export class MdiHeadCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeadCogIcon],svg[mdi-head-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 8.58c.78 0 1.44.61 1.44 1.42s-.66 1.44-1.44 1.44s-1.42-.66-1.42-1.44s.61-1.42 1.42-1.42M13 3c3.88 0 7 3.14 7 7c0 2.8-1.63 5.19-4 6.31V21H9v-3H8c-1.11 0-2-.89-2-2v-3H4.5c-.42 0-.66-.5-.42-.81L6 9.66A7.003 7.003 0 0 1 13 3m3 7c0-.16 0-.25-.06-.39l.89-.66c.05-.04.09-.18.05-.28l-.8-1.36c-.05-.09-.19-.14-.28-.09l-.99.42c-.18-.19-.42-.33-.65-.42L14 6.19c-.03-.14-.08-.19-.22-.19h-1.59c-.1 0-.19.05-.19.19l-.14 1.03c-.23.09-.47.23-.66.42l-1.03-.42c-.09-.05-.17 0-.23.09l-.8 1.36c-.05.14-.05.24.05.28l.84.66c0 .14-.03.28-.03.39c0 .13.03.27.03.41l-.84.65c-.1.05-.1.14-.05.24l.8 1.4c.06.1.14.1.23.1l.99-.43c.23.19.42.29.7.38l.14 1.08c0 .09.09.17.19.17h1.59c.14 0 .19-.08.22-.17l.16-1.08c.23-.09.47-.19.65-.37l.99.42c.09 0 .23 0 .28-.1l.8-1.4c.04-.1 0-.19-.05-.24l-.83-.65z"></svg:path>`,
})
export class MdiHeadCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeadCogOutlineIcon],svg[mdi-head-cog-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3c3.88 0 7 3.14 7 7c0 2.8-1.63 5.19-4 6.31V21H9v-3H8c-1.11 0-2-.89-2-2v-3H4.5c-.42 0-.66-.5-.42-.81L6 9.66A7.003 7.003 0 0 1 13 3m0-2C8.42 1 4.61 4.43 4.06 8.91L2.5 11c-.58.72-.68 1.72-.26 2.59c.36.72 1 1.21 1.76 1.36V16c0 1.86 1.28 3.43 3 3.87V23h11v-5.53c2.5-1.64 4-4.41 4-7.47c0-4.96-4.04-9-9-9m3.1 8.42V9c0-.15 0-.24-.06-.38l.89-.66c.07-.04.07-.18.07-.28l-.82-1.36c-.05-.09-.18-.14-.28-.09l-.99.42c-.18-.19-.41-.33-.65-.42L14.1 5.2c-.03-.14-.1-.2-.22-.2h-1.59c-.1 0-.19.06-.19.2l-.14 1.03c-.23.09-.46.23-.66.42l-1.03-.42c-.09-.05-.17 0-.23.09l-.8 1.36c-.05.14-.05.24.05.28l.84.66c0 .14-.03.28-.03.38c0 .14.03.28.03.42l-.84.65c-.1.05-.1.14-.05.24l.8 1.4c.06.1.14.1.23.1l.99-.43c.24.19.42.29.7.38l.14 1.08c0 .09.09.16.19.16h1.59c.12 0 .19-.07.22-.16l.16-1.08c.24-.09.47-.19.65-.37l.99.42c.1 0 .23 0 .28-.1l.82-1.4c0-.1 0-.19-.07-.24zm-3 1.03c-.78 0-1.42-.66-1.42-1.45s.61-1.41 1.42-1.41c.78 0 1.44.61 1.44 1.41s-.66 1.45-1.44 1.45"></svg:path>`,
})
export class MdiHeadCogOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeadDotsHorizontalIcon],svg[mdi-head-dots-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3C9.23 3 6.19 5.95 6 9.66l-1.92 2.53c-.24.31 0 .81.42.81H6v3c0 1.11.89 2 2 2h1v3h7v-4.69c2.37-1.12 4-3.51 4-6.31c0-3.86-3.12-7-7-7m-3 8c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m3 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m3 0c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class MdiHeadDotsHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeadDotsHorizontalOutlineIcon],svg[mdi-head-dots-horizontal-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3c3.9 0 7 3.1 7 7c0 2.8-1.6 5.2-4 6.3V21H9v-3H8c-1.1 0-2-.9-2-2v-3H4.5c-.4 0-.7-.5-.4-.8L6 9.7C6.2 5.9 9.2 3 13 3m0-2C8.4 1 4.6 4.4 4.1 8.9L2.5 11c-.6.8-.6 1.8-.2 2.6c.4.7 1 1.2 1.7 1.3V16c0 1.9 1.3 3.4 3 3.9V23h11v-5.5c2.5-1.7 4-4.4 4-7.5c0-5-4-9-9-9m-3 9c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m3 0c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m3 0c-.5 0-1-.4-1-1s.5-1 1-1s1 .4 1 1s-.5 1-1 1"></svg:path>`,
})
export class MdiHeadDotsHorizontalOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeadFlashIcon],svg[mdi-head-flash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3C9.2 3 6.2 6 6 9.7l-1.9 2.5c-.2.3 0 .8.4.8H6v3c0 1.1.9 2 2 2h1v3h7v-4.7c2.4-1.1 4-3.5 4-6.3c0-3.9-3.1-7-7-7m2 6l-3.1 6l.6-4h-2l2-5H15l-1.5 3z"></svg:path>`,
})
export class MdiHeadFlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeadFlashOutlineIcon],svg[mdi-head-flash-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3c3.9 0 7 3.1 7 7c0 2.8-1.6 5.2-4 6.3V21H9v-3H8c-1.1 0-2-.9-2-2v-3H4.5c-.4 0-.7-.5-.4-.8L6 9.7C6.2 5.9 9.2 3 13 3m0-2C8.4 1 4.6 4.4 4.1 8.9L2.5 11c-.6.8-.6 1.8-.2 2.6c.4.7 1 1.2 1.7 1.3V16c0 1.9 1.3 3.4 3 3.9V23h11v-5.5c2.5-1.7 4-4.4 4-7.5c0-5-4-9-9-9m2 8l-3.1 6l.6-4h-2.1l2.1-5H15l-1.5 3z"></svg:path>`,
})
export class MdiHeadFlashOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeadHeartIcon],svg[mdi-head-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3C9.23 3 6.19 5.95 6 9.66l-1.92 2.53c-.24.31 0 .81.42.81H6v3c0 1.11.89 2 2 2h1v3h7v-4.69c2.37-1.12 4-3.51 4-6.31c0-3.86-3.12-7-7-7m4 5.83c0 1.54-1.36 2.77-3.42 4.64L13 14l-.58-.53C10.36 11.6 9 10.37 9 8.83c0-1.2.96-2.19 2.16-2.2h.04c.69 0 1.35.31 1.8.83c.45-.52 1.11-.83 1.8-.83c1.2-.01 2.2.96 2.2 2.16z"></svg:path>`,
})
export class MdiHeadHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeadHeartOutlineIcon],svg[mdi-head-heart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3c3.88 0 7 3.14 7 7c0 2.8-1.63 5.19-4 6.31V21H9v-3H8c-1.11 0-2-.89-2-2v-3H4.5c-.42 0-.66-.5-.42-.81L6 9.66A7.003 7.003 0 0 1 13 3m0-2C8.41 1 4.61 4.42 4.06 8.9L2.5 11h-.03l-.02.03c-.55.76-.62 1.76-.19 2.59c.36.69 1 1.17 1.74 1.32V16c0 1.85 1.28 3.42 3 3.87V23h11v-5.5c2.5-1.67 4-4.44 4-7.5c0-4.97-4.04-9-9-9m4 7.83c0 1.54-1.36 2.77-3.42 4.64L13 14l-.58-.53C10.36 11.6 9 10.37 9 8.83c0-1.2.96-2.19 2.16-2.2h.04c.69 0 1.35.31 1.8.83c.45-.52 1.11-.83 1.8-.83c1.2-.01 2.2.96 2.2 2.16z"></svg:path>`,
})
export class MdiHeadHeartOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeadLightbulbIcon],svg[mdi-head-lightbulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3C9.23 3 6.19 5.95 6 9.66l-1.92 2.53c-.24.31 0 .81.42.81H6v3c0 1.11.89 2 2 2h1v3h7v-4.69c2.37-1.12 4-3.51 4-6.31c0-3.86-3.12-7-7-7m1 11h-2v-1h2zm1.6-4.5a3 3 0 0 1-1.1 1.08V12h-3v-1.42c-1.43-.83-1.93-2.66-1.1-4.08s2.67-1.94 4.1-1.12s1.93 2.67 1.1 4.12"></svg:path>`,
})
export class MdiHeadLightbulbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeadLightbulbOutlineIcon],svg[mdi-head-lightbulb-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3c3.9 0 7 3.1 7 7c0 2.8-1.6 5.2-4 6.3V21H9v-3H8c-1.1 0-2-.9-2-2v-3H4.5c-.4 0-.7-.5-.4-.8L6 9.7C6.2 5.9 9.2 3 13 3m0-2C8.4 1 4.6 4.4 4.1 8.9L2.5 11c-.6.8-.6 1.8-.2 2.6c.4.7 1 1.2 1.7 1.3V16c0 1.9 1.3 3.4 3 3.9V23h11v-5.5c2.5-1.7 4-4.4 4-7.5c0-5-4-9-9-9m1 13h-2v-1h2zm1.6-4.5c-.3.4-.6.8-1.1 1.1V12h-3v-1.4c-1.4-.8-1.9-2.7-1.1-4.1s2.7-1.9 4.1-1.1s1.9 2.7 1.1 4.1"></svg:path>`,
})
export class MdiHeadLightbulbOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeadMinusIcon],svg[mdi-head-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3C9.2 3 6.2 5.9 6 9.7l-1.9 2.5c-.2.3 0 .8.4.8H6v3c0 1.1.9 2 2 2h1v3h7v-4.7c2.4-1.1 4-3.5 4-6.3c0-3.9-3.1-7-7-7m4 7H9V8h8z"></svg:path>`,
})
export class MdiHeadMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeadMinusOutlineIcon],svg[mdi-head-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3c3.9 0 7 3.1 7 7c0 2.8-1.6 5.2-4 6.3V21H9v-3H8c-1.1 0-2-.9-2-2v-3H4.5c-.4 0-.7-.5-.4-.8L6 9.7C6.2 5.9 9.2 3 13 3m0-2C8.4 1 4.6 4.4 4.1 8.9L2.5 11c-.6.7-.7 1.7-.3 2.6c.4.7 1 1.2 1.8 1.4v1c0 1.9 1.3 3.4 3 3.9V23h11v-5.5c2.5-1.6 4-4.4 4-7.5c0-5-4-9-9-9m4 9H9V8h8z"></svg:path>`,
})
export class MdiHeadMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeadOutlineIcon],svg[mdi-head-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 1C8.4 1 4.6 4.4 4.1 8.9L2.5 11c-.5.8-.6 1.8-.2 2.6c.4.7 1 1.2 1.7 1.3V16c0 1.8 1.3 3.4 3 3.9V23h11v-5.5c2.5-1.7 4-4.4 4-7.5c0-5-4-9-9-9m3 15.3V21H9v-3H8c-1.1 0-2-.9-2-2v-3H4.5c-.4 0-.7-.5-.4-.8L6 9.7C6.2 6 9.2 3 13 3c3.9 0 7 3.1 7 7c0 2.8-1.6 5.2-4 6.3"></svg:path>`,
})
export class MdiHeadOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeadPlusIcon],svg[mdi-head-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3C9.2 3 6.2 5.9 6 9.7l-1.9 2.5c-.2.3 0 .8.4.8H6v3c0 1.1.9 2 2 2h1v3h7v-4.7c2.4-1.1 4-3.5 4-6.3c0-3.9-3.1-7-7-7m4 7h-3v3h-2v-3H9V8h3V5h2v3h3z"></svg:path>`,
})
export class MdiHeadPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeadPlusOutlineIcon],svg[mdi-head-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3c3.9 0 7 3.1 7 7c0 2.8-1.6 5.2-4 6.3V21H9v-3H8c-1.1 0-2-.9-2-2v-3H4.5c-.4 0-.7-.5-.4-.8L6 9.7C6.2 5.9 9.2 3 13 3m0-2C8.4 1 4.6 4.4 4.1 8.9L2.5 11c-.6.7-.7 1.7-.3 2.6c.4.7 1 1.2 1.8 1.4v1c0 1.9 1.3 3.4 3 3.9V23h11v-5.5c2.5-1.6 4-4.4 4-7.5c0-5-4-9-9-9m4 9h-3v3h-2v-3H9V8h3V5h2v3h3z"></svg:path>`,
})
export class MdiHeadPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeadQuestionIcon],svg[mdi-head-question-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3C9.23 3 6.19 5.95 6 9.66l-1.92 2.53c-.24.31 0 .81.42.81H6v3c0 1.11.89 2 2 2h1v3h7v-4.69c2.37-1.12 4-3.51 4-6.31c0-3.86-3.12-7-7-7m1 11h-2v-2h2zm1.75-5.19c-.29.4-.66.69-1.11.93c-.25.16-.42.33-.51.52c-.09.18-.13.43-.13.74h-2c0-.5.11-.92.31-1.18c.19-.27.54-.57 1.05-.91c.26-.16.47-.36.61-.59c.16-.23.23-.5.23-.82c0-.3-.08-.56-.26-.75c-.18-.18-.44-.28-.75-.28a1 1 0 0 0-.66.23c-.18.16-.27.39-.28.69h-1.93l-.01-.03c-.01-.79.25-1.36.77-1.77c.54-.39 1.24-.59 2.11-.59c.93 0 1.66.23 2.19.68c.54.45.81 1.06.81 1.82c0 .5-.15.91-.44 1.31"></svg:path>`,
})
export class MdiHeadQuestionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeadQuestionOutlineIcon],svg[mdi-head-question-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3c3.88 0 7 3.14 7 7c0 2.8-1.63 5.19-4 6.31V21H9v-3H8c-1.11 0-2-.89-2-2v-3H4.5c-.42 0-.66-.5-.42-.81L6 9.66A7.003 7.003 0 0 1 13 3m-2.68 4.39h1.93c.01-.3.1-.53.28-.69a1 1 0 0 1 .66-.23c.31 0 .57.1.75.28c.18.19.26.45.26.75c0 .32-.07.59-.23.82c-.14.23-.35.43-.61.59c-.51.34-.86.64-1.05.91c-.2.26-.31.68-.31 1.18h2c0-.31.04-.56.13-.74c.09-.19.26-.36.51-.52c.45-.24.82-.53 1.11-.93s.44-.81.44-1.31c0-.76-.27-1.37-.81-1.82c-.53-.45-1.26-.68-2.19-.68c-.87 0-1.57.2-2.11.59c-.52.41-.78.98-.77 1.77zM12 14h2v-2h-2zm1-13C8.41 1 4.61 4.42 4.06 8.9L2.5 11h-.03l-.02.03c-.55.76-.62 1.76-.19 2.59c.36.69 1 1.17 1.74 1.32V16c0 1.85 1.28 3.42 3 3.87V23h11v-5.5c2.5-1.67 4-4.44 4-7.5c0-4.97-4.04-9-9-9"></svg:path>`,
})
export class MdiHeadQuestionOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeadRemoveIcon],svg[mdi-head-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3C9.2 3 6.2 5.9 6 9.7l-1.9 2.5c-.2.3 0 .8.4.8H6v3c0 1.1.9 2 2 2h1v3h7v-4.7c2.4-1.1 4-3.5 4-6.3c0-3.9-3.1-7-7-7m2.1 9.5L13 10.4l-2.1 2.1l-1.4-1.4L11.6 9L9.5 6.9l1.4-1.4L13 7.6l2.1-2.1l1.4 1.4L14.4 9l2.1 2.1z"></svg:path>`,
})
export class MdiHeadRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeadRemoveOutlineIcon],svg[mdi-head-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3c3.9 0 7 3.1 7 7c0 2.8-1.6 5.2-4 6.3V21H9v-3H8c-1.1 0-2-.9-2-2v-3H4.5c-.4 0-.7-.5-.4-.8L6 9.7C6.2 5.9 9.2 3 13 3m0-2C8.4 1 4.6 4.4 4.1 8.9L2.5 11c-.6.7-.7 1.7-.3 2.6c.4.7 1 1.2 1.8 1.4v1c0 1.9 1.3 3.4 3 3.9V23h11v-5.5c2.5-1.6 4-4.4 4-7.5c0-5-4-9-9-9m3.5 5.9L14.4 9l2.1 2.1l-1.4 1.4l-2.1-2.1l-2.1 2.1l-1.4-1.4L11.6 9L9.5 6.9l1.4-1.4L13 7.6l2.1-2.1z"></svg:path>`,
})
export class MdiHeadRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeadSnowflakeIcon],svg[mdi-head-snowflake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3C9.23 3 6.19 5.95 6 9.66l-1.92 2.53c-.24.31 0 .81.42.81H6v3c0 1.11.89 2 2 2h1v3h7v-4.69c2.37-1.12 4-3.51 4-6.31c0-3.86-3.12-7-7-7m4.06 6.57l-1.96.52l1.44 1.45a.9.9 0 0 1 0 1.27a.9.9 0 0 1-1.27 0l-1.46-1.44l-.51 1.96c-.12.49-.62.77-1.09.64a.89.89 0 0 1-.64-1.1l.53-1.97l-1.97.53a.887.887 0 0 1-1.1-.64c-.13-.47.15-.97.64-1.09l1.96-.51l-1.44-1.46a.9.9 0 0 1 1.27-1.27l1.45 1.44l.52-1.96a.88.88 0 0 1 1.07-.64c.5.13.78.62.66 1.11l-.53 1.96l1.96-.53a.91.91 0 0 1 1.11.66a.88.88 0 0 1-.64 1.07"></svg:path>`,
})
export class MdiHeadSnowflakeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeadSnowflakeOutlineIcon],svg[mdi-head-snowflake-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3c3.88 0 7 3.14 7 7c0 2.8-1.63 5.19-4 6.31V21H9v-3H8c-1.11 0-2-.89-2-2v-3H4.5c-.42 0-.66-.5-.42-.81L6 9.66A7.003 7.003 0 0 1 13 3m0-2C8.41 1 4.61 4.42 4.06 8.9L2.5 11h-.03l-.02.03c-.55.76-.62 1.76-.19 2.59c.36.69 1 1.17 1.74 1.32V16c0 1.85 1.28 3.42 3 3.87V23h11v-5.5c2.5-1.67 4-4.44 4-7.5c0-4.97-4.04-9-9-9m4.33 8.3l-1.96.51l1.44 1.46c.35.34.35.92 0 1.27s-.93.35-1.27 0l-1.45-1.44l-.52 1.96c-.12.49-.61.76-1.07.64a.91.91 0 0 1-.66-1.11l.53-1.96l-1.96.53a.91.91 0 0 1-1.11-.66c-.12-.45.16-.95.64-1.07l1.96-.52l-1.44-1.45a.9.9 0 0 1 1.27-1.27l1.46 1.44l.51-1.96c.12-.49.62-.77 1.09-.64c.49.13.77.62.64 1.1L14.9 8.1l1.97-.53c.48-.13.97.15 1.1.64c.13.47-.15.97-.64 1.09"></svg:path>`,
})
export class MdiHeadSnowflakeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeadSyncIcon],svg[mdi-head-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3C9.23 3 6.19 5.95 6 9.66l-1.92 2.53c-.24.31 0 .81.42.81H6v3c0 1.11.89 2 2 2h1v3h7v-4.69c2.37-1.12 4-3.51 4-6.31c0-3.86-3.12-7-7-7m0 12v-1.5c-2.21 0-4-1.79-4-4c0-.82.25-1.58.67-2.21l1.09 1.09c-.17.34-.26.72-.26 1.12A2.5 2.5 0 0 0 13 12v-1.5l2.25 2.25zm3.33-3.29l-1.09-1.09c.17-.34.26-.72.26-1.12A2.5 2.5 0 0 0 13 7v1.5l-2.25-2.25L13 4v1.5c2.21 0 4 1.79 4 4c0 .82-.25 1.58-.67 2.21"></svg:path>`,
})
export class MdiHeadSyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeadSyncOutlineIcon],svg[mdi-head-sync-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3c3.88 0 7 3.14 7 7c0 2.8-1.63 5.19-4 6.31V21H9v-3H8c-1.11 0-2-.89-2-2v-3H4.5c-.42 0-.66-.5-.42-.81L6 9.66A7.003 7.003 0 0 1 13 3m0-2C8.41 1 4.61 4.42 4.06 8.9L2.5 11h-.03l-.02.03c-.55.76-.62 1.76-.19 2.59c.36.69 1 1.17 1.74 1.32V16c0 1.85 1.28 3.42 3 3.87V23h11v-5.5c2.5-1.67 4-4.44 4-7.5c0-4.97-4.04-9-9-9m1 14v-1.5c-2.21 0-4-1.79-4-4c0-.82.25-1.58.67-2.21l1.09 1.09c-.17.34-.26.72-.26 1.12A2.5 2.5 0 0 0 14 12v-1.5l2.25 2.25zm3.33-3.29l-1.09-1.09c.17-.34.26-.72.26-1.12A2.5 2.5 0 0 0 14 7v1.5l-2.25-2.25L14 4v1.5c2.21 0 4 1.79 4 4c0 .82-.25 1.58-.67 2.21"></svg:path>`,
})
export class MdiHeadSyncOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeadphonesIcon],svg[mdi-headphones-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1c-5 0-9 4-9 9v7a3 3 0 0 0 3 3h3v-8H5v-2a7 7 0 0 1 7-7a7 7 0 0 1 7 7v2h-4v8h3a3 3 0 0 0 3-3v-7c0-5-4.03-9-9-9"></svg:path>`,
})
export class MdiHeadphonesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeadphonesBluetoothIcon],svg[mdi-headphones-bluetooth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6a6 6 0 0 0-6 6v4.8c0 .66.54 1.2 1.2 1.2H6v-4H4v-2a4 4 0 0 1 4-4a4 4 0 0 1 4 4v2h-2v4h2.8a1.2 1.2 0 0 0 1.2-1.2V12a6 6 0 0 0-6-6m11 1v3.79L16.71 8.5l-.71.71L18.79 12L16 14.79l.71.71L19 13.21V17h.5l2.85-2.86L20.21 12l2.14-2.15L19.5 7zm1 1.91l.94.94l-.94.94zm0 4.3l.94.93l-.94.94z"></svg:path>`,
})
export class MdiHeadphonesBluetoothIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeadphonesBoxIcon],svg[mdi-headphones-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.2 18c-.66 0-1.2-.54-1.2-1.2V12a6 6 0 0 1 6-6a6 6 0 0 1 6 6v4.8a1.2 1.2 0 0 1-1.2 1.2H14v-4h2v-2a4 4 0 0 0-4-4a4 4 0 0 0-4 4v2h2v4m9-15H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiHeadphonesBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeadphonesOffIcon],svg[mdi-headphones-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1a9 9 0 0 1 9 9v7c0 .62-.19 1.19-.5 1.67L15 13.18V12h4v-2a7 7 0 0 0-7-7c-2 0-3.77.82-5.04 2.14L5.55 3.72A8.96 8.96 0 0 1 12 1M2.78 3.5L20.5 21.22l-1.27 1.28l-2.5-2.5H15v-1.73l-6-6V20H6a3 3 0 0 1-3-3v-7c0-1.11.2-2.18.57-3.16L1.5 4.77zm2.39 4.94C5.06 8.94 5 9.46 5 10v2h3.73z"></svg:path>`,
})
export class MdiHeadphonesOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeadphonesSettingsIcon],svg[mdi-headphones-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1a9 9 0 0 1 9 9v7a3 3 0 0 1-3 3h-3v-8h4v-2a7 7 0 0 0-7-7a7 7 0 0 0-7 7v2h4v8H6a3 3 0 0 1-3-3v-7a9 9 0 0 1 9-9m3 23v-2h2v2zm-4 0v-2h2v2zm-4 0v-2h2v2z"></svg:path>`,
})
export class MdiHeadphonesSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeadsetIcon],svg[mdi-headset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1c-5 0-9 4-9 9v7a3 3 0 0 0 3 3h3v-8H5v-2a7 7 0 0 1 7-7a7 7 0 0 1 7 7v2h-4v8h4v1h-7v2h6a3 3 0 0 0 3-3V10c0-5-4.03-9-9-9"></svg:path>`,
})
export class MdiHeadsetIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeadsetDockIcon],svg[mdi-headset-dock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 18h7V6.13C7.27 6.57 6 8.14 6 10v1h2v6H6a2 2 0 0 1-2-2v-5a6 6 0 0 1 6-6h1a6 6 0 0 1 6 6v2h1V9h2v3a2 2 0 0 1-2 2h-1v1a2 2 0 0 1-2 2h-2v-6h2v-1c0-1.86-1.27-3.43-3-3.87V18h10v2H2z"></svg:path>`,
})
export class MdiHeadsetDockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeadsetOffIcon],svg[mdi-headset-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1.5 4.77l2.07 2.07C3.2 7.82 3 8.89 3 10v10a3 3 0 0 0 3 3h6v-2H5v-1h4v-7.73l6 6V20h1.73l2.5 2.5l1.27-1.28L2.78 3.5zM12 1a8.96 8.96 0 0 0-6.45 2.72l1.41 1.42A6.94 6.94 0 0 1 12 3a7 7 0 0 1 7 7v2h-4v1.18l5.5 5.49c.31-.48.5-1.05.5-1.67v-7a9 9 0 0 0-9-9M5 12v-2c0-.54.06-1.06.17-1.56L8.73 12z"></svg:path>`,
})
export class MdiHeadsetOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeartIcon],svg[mdi-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"></svg:path>`,
})
export class MdiHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeartBoxIcon],svg[mdi-heart-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m7 14l.72-.66C15.3 14 17 12.46 17 10.57c0-1.54-1.21-2.75-2.75-2.75c-.87 0-1.7.41-2.25 1.05a3 3 0 0 0-2.25-1.05C8.21 7.82 7 9.03 7 10.57c0 1.89 1.7 3.43 4.28 5.77z"></svg:path>`,
})
export class MdiHeartBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeartBoxOutlineIcon],svg[mdi-heart-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 17l-.72-.66C8.7 14 7 12.46 7 10.57c0-1.54 1.21-2.75 2.75-2.75c.87 0 1.7.41 2.25 1.05c.55-.64 1.38-1.05 2.25-1.05c1.54 0 2.75 1.21 2.75 2.75c0 1.89-1.7 3.43-4.28 5.77zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m0 2v14h14V5z"></svg:path>`,
})
export class MdiHeartBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeartBrokenIcon],svg[mdi-heart-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c.67 0 1.32.12 1.94.33L13 9.35l-4 5zM16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35l-1-7l4.5-5l-2.65-5.08C13.87 3.47 15.17 3 16.5 3"></svg:path>`,
})
export class MdiHeartBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeartBrokenOutlineIcon],svg[mdi-heart-broken-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 5c.2 0 .4 0 .6.1l2.4 4.1l-3.7 4.6C5.1 11.8 4 10.2 4 8.5C4 6.5 5.5 5 7.5 5m0-2C4.4 3 2 5.4 2 8.5c0 3.8 3.4 6.9 8.6 11.5l1.4 1.3l-3-7l4-5l-3.6-6C8.8 3.1 8.2 3 7.5 3m9 2c2 0 3.5 1.5 3.5 3.5c0 2.6-2.6 5.2-6.6 8.8l-.3-2.3l4.8-5.3l-2.3-4.5c.3-.2.6-.2.9-.2m0-2c-1.3 0-2.6.5-3.6 1.3l2.6 5.1l-4.5 5l1 7l1.4-1.3c5.2-4.7 8.6-7.8 8.6-11.5C22 5.4 19.6 3 16.5 3"></svg:path>`,
})
export class MdiHeartBrokenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeartCircleIcon],svg[mdi-heart-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.47 2 2 6.5 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2M9.75 7.82c.87 0 1.7.41 2.25 1.05c.55-.64 1.38-1.05 2.25-1.05c1.54 0 2.75 1.21 2.75 2.75c0 1.89-1.7 3.43-4.28 5.77L12 17l-.72-.66C8.7 14 7 12.46 7 10.57c0-1.54 1.21-2.75 2.75-2.75"></svg:path>`,
})
export class MdiHeartCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeartCircleOutlineIcon],svg[mdi-heart-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 2a8 8 0 0 1 8 8a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8M9.75 7.82C8.21 7.82 7 9.03 7 10.57c0 1.89 1.7 3.43 4.28 5.77L12 17l.72-.66C15.3 14 17 12.46 17 10.57c0-1.54-1.21-2.75-2.75-2.75c-.87 0-1.7.41-2.25 1.05a3 3 0 0 0-2.25-1.05"></svg:path>`,
})
export class MdiHeartCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeartCogIcon],svg[mdi-heart-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19c0 .71.12 1.4.32 2.06l-.32.29l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 1.3-.41 2.5-1.16 3.75c-.59-.16-1.21-.25-1.84-.25c-3.86 0-7 3.14-7 7m11.83 1.64l-1 1.73c-.07.13-.2.13-.33.13l-1.23-.5c-.27.18-.54.34-.84.47l-.19 1.32c-.02.12-.13.21-.24.21h-2c-.14 0-.24-.09-.26-.21l-.19-1.32c-.31-.12-.59-.29-.85-.47l-1.24.5c-.12 0-.25 0-.31-.13l-1-1.73a.26.26 0 0 1 .06-.32l1.06-.82a4.2 4.2 0 0 1 0-1l-1.06-.82a.25.25 0 0 1-.06-.32l1-1.73c.07-.13.2-.13.31-.13l1.24.5c.26-.18.55-.34.85-.47l.19-1.32A.26.26 0 0 1 18 14h2c.11 0 .22.09.23.21l.19 1.32c.31.12.58.29.85.47l1.23-.5c.13 0 .26 0 .32.13l1 1.73c.06.11.03.24-.06.32l-1.06.82c.03.17.04.33.04.5s-.02.33-.04.5l1.07.82c.09.08.12.21.06.32M20.5 19c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.66 1.5 1.5 1.5c.83 0 1.5-.67 1.5-1.5"></svg:path>`,
})
export class MdiHeartCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeartCogOutlineIcon],svg[mdi-heart-cog-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 5c-1.54 0-3.04 1-3.57 2.36h-1.86C10.54 6 9.04 5 7.5 5C5.5 5 4 6.5 4 8.5c0 2.89 3.14 5.74 7.89 10.05l.11.1v-.02v.37c0 .71.12 1.4.32 2.06l-.32.29l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 1.3-.41 2.5-1.16 3.75c-.59-.16-1.21-.25-1.84-.25h-.4c.9-1.21 1.4-2.35 1.4-3.5c0-2-1.5-3.5-3.5-3.5m7.33 15.64l-1 1.73c-.07.13-.2.13-.33.13l-1.23-.5c-.27.18-.54.34-.84.47l-.19 1.32c-.02.12-.13.21-.24.21h-2c-.14 0-.24-.09-.26-.21l-.19-1.32c-.31-.12-.59-.29-.85-.47l-1.24.5c-.12 0-.25 0-.31-.13l-1-1.73a.26.26 0 0 1 .06-.32l1.06-.82a4.2 4.2 0 0 1 0-1l-1.06-.82a.25.25 0 0 1-.06-.32l1-1.73c.07-.13.2-.13.31-.13l1.24.5c.26-.18.55-.34.85-.47l.19-1.32A.26.26 0 0 1 18 14h2c.11 0 .22.09.23.21l.19 1.32c.31.12.58.29.85.47l1.23-.5c.13 0 .26 0 .32.13l1 1.73c.06.11.03.24-.06.32l-1.06.82c.03.17.04.33.04.5s-.02.33-.04.5l1.07.82c.09.08.12.21.06.32M20.5 19c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5s.66 1.5 1.5 1.5c.83 0 1.5-.67 1.5-1.5"></svg:path>`,
})
export class MdiHeartCogOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeartFlashIcon],svg[mdi-heart-flash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 2.83c-1.74 0-3.41.81-4.5 2.07c-1.09-1.26-2.76-2.07-4.5-2.07c-3.08 0-5.5 2.41-5.5 5.5c0 3.77 3.4 6.86 8.55 11.53L12 21.17l1.45-1.31C18.6 15.19 22 12.1 22 8.33c0-3.09-2.42-5.5-5.5-5.5m-4.5 15v-4H9l3-7v4h3"></svg:path>`,
})
export class MdiHeartFlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeartHalfIcon],svg[mdi-heart-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7.2v13.24l-1 .91l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C10 3 13 5 13 7.2"></svg:path>`,
})
export class MdiHeartHalfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeartHalfFullIcon],svg[mdi-heart-half-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 5c-1.5 0-2.92.91-3.5 2.2v10.54c4.25-3.87 7-6.54 7-9.24c0-2-1.5-3.5-3.5-3.5m0-2C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3"></svg:path>`,
})
export class MdiHeartHalfFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeartHalfOutlineIcon],svg[mdi-heart-half-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8.5c0 2.7 2.75 5.37 7 9.24V7.2C10.42 5.91 9 5 7.5 5C5.5 5 4 6.5 4 8.5m9-1.3v13.24l-1 .91l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C10 3 13 5 13 7.2"></svg:path>`,
})
export class MdiHeartHalfOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeartMinusIcon],svg[mdi-heart-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18c0 1 .25 1.92.67 2.74l-.67.61l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 1.43-.5 2.76-1.38 4.11c-.79-.38-1.68-.61-2.62-.61c-3.31 0-6 2.69-6 6m2-1v2h8v-2z"></svg:path>`,
})
export class MdiHeartMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeartMinusOutlineIcon],svg[mdi-heart-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.67 20.74l-.67.61l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 1.43-.5 2.76-1.38 4.11c-.62-.3-1.31-.5-2.03-.57C19.5 10.8 20 9.65 20 8.5c0-2-1.5-3.5-3.5-3.5c-1.54 0-3.04 1-3.57 2.36h-1.86C10.54 6 9.04 5 7.5 5C5.5 5 4 6.5 4 8.5c0 2.89 3.14 5.74 7.89 10.05l.11.1l.04-.04c.08.76.3 1.48.63 2.13M14 17v2h8v-2z"></svg:path>`,
})
export class MdiHeartMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeartMultipleIcon],svg[mdi-heart-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 20c-6.6-6.1-10-9.2-10-12.9C3.5 4 5.9 1.6 9 1.6c1.7 0 3.4.8 4.5 2.1c1.1-1.3 2.8-2.1 4.5-2.1c3.1 0 5.5 2.4 5.5 5.5c0 3.8-3.4 6.9-10 12.9M12 21.1C5.4 15.2 1.5 11.7 1.5 7v-.6c-.6.9-1 2-1 3.2c0 3.8 3.4 6.9 10 12.8z"></svg:path>`,
})
export class MdiHeartMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeartMultipleOutlineIcon],svg[mdi-heart-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 21.1l-1.5 1.3c-6.6-5.9-10-9-10-12.8c0-1.2.4-2.3 1-3.2V7c0 4.7 3.9 8.2 10.5 14.1m1.6-4.1c4.7-4.3 7.9-7.1 8-10c0-2-1.5-3.5-3.5-3.5c-1.6 0-3.1 1-3.6 2.4h-1.9C12 4.5 10.5 3.5 9 3.5C7 3.5 5.5 5 5.5 7c0 2.9 3.1 5.7 7.9 10l.1.1M18 1.5c3.1 0 5.5 2.4 5.5 5.5c0 3.7-3.4 6.8-10 12.8c-6.6-5.9-10-9-10-12.8c0-3.1 2.4-5.5 5.5-5.5c1.7 0 3.4.8 4.5 2.1c1.1-1.3 2.8-2.1 4.5-2.1"></svg:path>`,
})
export class MdiHeartMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeartOffIcon],svg[mdi-heart-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 4.27L2.28 3L20 20.72L18.73 22l-3.55-3.56l-1.73 1.59L12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5c0-.95.23-1.83.63-2.6zM7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 2.57-1.58 4.82-4.21 7.47L5.27 3.45C5.95 3.16 6.7 3 7.5 3"></svg:path>`,
})
export class MdiHeartOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeartOffOutlineIcon],svg[mdi-heart-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.39 1.73L1.11 3l2.08 2.08C2.45 6 2 7.19 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32c.87-.79 1.69-1.53 2.45-2.24L20 22l1.27-1.27m-9.17-2.18l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5c0-.76.22-1.44.61-2l9.89 9.87c-.76.69-1.55 1.41-2.4 2.18M8.3 5.1L6.33 3.13C6.7 3.05 7.1 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 2.34-1.31 4.42-3.53 6.77l-1.41-1.41C18.91 11.88 20 10.2 20 8.5c0-2-1.5-3.5-3.5-3.5c-1.4 0-2.76.83-3.39 2h-2.22c-.51-.94-1.5-1.66-2.59-1.9"></svg:path>`,
})
export class MdiHeartOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeartOutlineIcon],svg[mdi-heart-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.1 18.55l-.1.1l-.11-.1C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5c1.54 0 3.04 1 3.57 2.36h1.86C13.46 6 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5c0 2.89-3.14 5.74-7.9 10.05M16.5 3c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3"></svg:path>`,
})
export class MdiHeartOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeartPlusIcon],svg[mdi-heart-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18c0 1 .25 1.92.67 2.74l-.67.61l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 1.43-.5 2.76-1.38 4.11c-.79-.38-1.68-.61-2.62-.61c-3.31 0-6 2.69-6 6m7-4h-2v3h-3v2h3v3h2v-3h3v-2h-3z"></svg:path>`,
})
export class MdiHeartPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeartPlusOutlineIcon],svg[mdi-heart-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.67 20.74l-.67.61l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 1.43-.5 2.76-1.38 4.11c-.62-.3-1.31-.5-2.03-.57C19.5 10.8 20 9.65 20 8.5c0-2-1.5-3.5-3.5-3.5c-1.54 0-3.04 1-3.57 2.36h-1.86C10.54 6 9.04 5 7.5 5C5.5 5 4 6.5 4 8.5c0 2.89 3.14 5.74 7.89 10.05l.11.1l.04-.04c.08.76.3 1.48.63 2.13M17 14v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class MdiHeartPlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeartPulseIcon],svg[mdi-heart-pulse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 4A5.5 5.5 0 0 0 2 9.5c0 .5.09 1 .22 1.5H6.3l1.27-3.37c.3-.8 1.48-.88 1.86 0L11.5 13l.59-1.42c.13-.33.48-.58.91-.58h8.78c.13-.5.22-1 .22-1.5A5.5 5.5 0 0 0 16.5 4c-1.86 0-3.5.93-4.5 2.34C11 4.93 9.36 4 7.5 4M3 12.5a1 1 0 0 0-1 1a1 1 0 0 0 1 1h2.44L11 20c1 .9 1 .9 2 0l5.56-5.5H21a1 1 0 0 0 1-1a1 1 0 0 0-1-1h-7.6l-.93 2.3c-.4 1.01-1.55.87-1.92.03L8.5 9.5l-.96 2.33c-.15.38-.49.67-.94.67z"></svg:path>`,
})
export class MdiHeartPulseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeartRemoveIcon],svg[mdi-heart-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 18c0 1 .25 1.92.67 2.74l-.67.61l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 1.43-.5 2.76-1.38 4.11c-.79-.38-1.68-.61-2.62-.61c-3.31 0-6 2.69-6 6m9.54-2.12l-1.42-1.41L18 16.59l-2.12-2.12l-1.41 1.41L16.59 18l-2.12 2.12l1.41 1.42L18 19.41l2.12 2.13l1.42-1.42L19.41 18z"></svg:path>`,
})
export class MdiHeartRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeartRemoveOutlineIcon],svg[mdi-heart-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.67 20.74l-.67.61l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 1.43-.5 2.76-1.38 4.11c-.62-.3-1.31-.5-2.03-.57C19.5 10.8 20 9.65 20 8.5c0-2-1.5-3.5-3.5-3.5c-1.54 0-3.04 1-3.57 2.36h-1.86C10.54 6 9.04 5 7.5 5C5.5 5 4 6.5 4 8.5c0 2.89 3.14 5.74 7.89 10.05l.11.1l.04-.04c.08.76.3 1.48.63 2.13m7.45-6.28L18 16.59l-2.12-2.12l-1.41 1.41L16.59 18l-2.12 2.12l1.41 1.42L18 19.41l2.12 2.13l1.42-1.42L19.41 18l2.13-2.12z"></svg:path>`,
})
export class MdiHeartRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeartSearchIcon],svg[mdi-heart-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.3 14.9c.4-.7.7-1.5.7-2.4C20 10 18 8 15.5 8S11 10 11 12.5s2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l2.9 2.9l1.4-1.4zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5m-.8 3.9c-.4.4-.8.7-1.2 1.1L12 21.3L10.5 20C5.4 15.4 2 12.3 2 8.5C2 5.4 4.4 3 7.5 3c1.7 0 3.4.8 4.5 2.1C13.1 3.8 14.8 3 16.5 3C19.6 3 22 5.4 22 8.5c0 .7-.1 1.3-.3 2c-.9-2.6-3.3-4.5-6.2-4.5C11.9 6 9 8.9 9 12.5c0 3.3 2.5 6 5.7 6.4"></svg:path>`,
})
export class MdiHeartSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeartSettingsIcon],svg[mdi-heart-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 22h2v2h-2zm-4 2h2v-2h-2zm-4 0h2v-2H7zm9.5-21c-1.74 0-3.41.81-4.5 2.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5c0 3.77 3.4 6.86 8.55 11.53L12 21.35l1.45-1.32C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3"></svg:path>`,
})
export class MdiHeartSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeartSettingsOutlineIcon],svg[mdi-heart-settings-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 22h2v2H7zm4 2h2v-2h-2zm4 0h2v-2h-2zm7-15.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5m-2 0c0-2-1.5-3.5-3.5-3.5c-1.54 0-3.04 1-3.57 2.36h-1.86C10.54 6 9.04 5 7.5 5C5.5 5 4 6.5 4 8.5c0 2.89 3.14 5.74 7.89 10.05l.11.1l.1-.1C16.86 14.24 20 11.39 20 8.5"></svg:path>`,
})
export class MdiHeartSettingsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeatPumpIcon],svg[mdi-heat-pump-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-6.25 4.08c.82.12 1.57.42 2.2.92l-2.2 2.19zm-1.5 0v3.11L9.05 8c.63-.5 1.38-.8 2.2-.92M8 9.05l2.19 2.2H7.08c.12-.82.42-1.57.92-2.2m-.92 3.7h3.11L8 14.95c-.5-.63-.8-1.38-.92-2.2m4.17 4.17c-.82-.12-1.57-.42-2.2-.92l2.2-2.19zM12 13c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m.75 3.92v-3.11l2.2 2.19c-.63.5-1.38.8-2.2.92M16 14.95l-2.19-2.2h3.11c-.12.82-.42 1.57-.92 2.2m-2.19-3.7L16 9.05c.5.64.8 1.39.92 2.2z"></svg:path>`,
})
export class MdiHeatPumpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeatPumpOutlineIcon],svg[mdi-heat-pump-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 16H5V5h14zm-7-1c3.31 0 6-2.69 6-6s-2.69-6-6-6s-6 2.69-6 6s2.69 6 6 6m-.75-2.08c-.55-.1-1.05-.32-1.5-.62l1.5-1.5zm1.5 0v-2.11l1.5 1.5c-.45.3-.95.51-1.5.61m2.56-1.67l-1.5-1.5h2.11c-.1.55-.31 1.05-.61 1.5m.61-3h-2.11l1.5-1.5c.3.45.51.95.61 1.5m-3.17-3.17c.55.1 1.05.32 1.5.62l-1.5 1.5zM12 11c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1m-.75-2.92v2.11l-1.5-1.5c.45-.3.95-.51 1.5-.61M8.69 9.75l1.5 1.5H8.08c.1-.55.31-1.05.61-1.5m1.5 3l-1.5 1.5c-.3-.44-.51-.95-.62-1.5z"></svg:path>`,
})
export class MdiHeatPumpOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeatWaveIcon],svg[mdi-heat-wave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.5 4.5l-3.1 5l3.1 5.2l-3.3 5.8l-1.8-.9l2.7-4.9L3 9.5l3.7-5.9zm6.2-.1l-3.1 5.1l3.1 5l-3.3 5.8l-1.8-.9l2.7-4.9l-3.1-5l3.7-6zm6.3 0l-3.1 5.1l3.1 5l-3.3 5.8l-1.8-.9l2.7-4.9l-3.1-5l3.7-6z"></svg:path>`,
})
export class MdiHeatWaveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHeatingCoilIcon],svg[mdi-heating-coil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 17c1.21 0 3-.8 3-3s-1.79-3-3-3h-2V9h2c2.2 0 3-1.79 3-3c0-2.2-1.79-3-3-3h-2V2h-1v1H8V2H7v1H2v2h5v2H5c-1.21 0-3 .8-3 3s1.79 3 3 3h2v2H5c-1.21 0-3 .8-3 3s1.79 3 3 3h2v1h1v-1h8v1h1v-1h5v-2h-5v-2zm0-4c.45 0 1 .19 1 1s-.55 1-1 1h-2v-2zm-3-2H8V9h8zm3-6c.45 0 1 .2 1 1c0 .45-.19 1-1 1h-2V5zM8 5h8v2H8zm-3 6c-.45 0-1-.19-1-1s.55-1 1-1h2v2zm3 2h8v2H8zm-3 6c-.45 0-1-.19-1-1s.55-1 1-1h2v2zm11 0H8v-2h8z"></svg:path>`,
})
export class MdiHeatingCoilIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHelicopterIcon],svg[mdi-helicopter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h14v2H3zm20 3v4.5l-8.25 1.7A3.5 3.5 0 0 1 13 16.66V19h3v2H4a3 3 0 0 1-3-3v-1h2v1a1 1 0 0 0 1 1h1v-2.26c-1.75-.61-3-2.28-3-4.24C2 10 4 8 6.5 8H9V6h2v2h10V6zM11 19v-2H7v2zm-3.5-9c-1.38 0-2.5.9-2.5 2s1.12 2 2.5 2s2.5-.9 2.5-2s-1.12-2-2.5-2"></svg:path>`,
})
export class MdiHelicopterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHelpIcon],svg[mdi-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 19h3v3h-3zm2-17c5.35.22 7.68 5.62 4.5 9.67c-.83 1-2.17 1.66-2.83 2.5C13 15 13 16 13 17h-3c0-1.67 0-3.08.67-4.08c.66-1 2-1.59 2.83-2.25C15.92 8.43 15.32 5.26 12 5a3 3 0 0 0-3 3H6a6 6 0 0 1 6-6"></svg:path>`,
})
export class MdiHelpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHelpBoxIcon],svg[mdi-help-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 18h2v-2h-2zm1-12a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2a2 2 0 0 1 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5a4 4 0 0 0-4-4M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiHelpBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHelpBoxMultipleIcon],svg[mdi-help-box-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 20v2H4c-1.1 0-2-.9-2-2V7h2v13zm4-18H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-5 12h-2v-2h2zm1.8-5.2c-.3.4-.7.7-1.1.9c-.2.2-.4.3-.5.5c-.2.2-.2.5-.2.8h-2q0-.75.3-1.2c.2-.3.5-.6 1-.9q.45-.3.6-.6c.2-.2.2-.5.2-.8s-.1-.6-.3-.8s-.4-.3-.8-.3c-.3 0-.5.1-.7.2c-.2.2-.3.4-.3.7h-1.9c0-.8.2-1.4.8-1.8c.7-.3 1.4-.5 2.3-.5s1.7.2 2.2.7s.8 1.1.8 1.8c0 .5-.2.9-.4 1.3"></svg:path>`,
})
export class MdiHelpBoxMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHelpBoxMultipleOutlineIcon],svg[mdi-help-box-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 16V4H8v12zm2 0c0 1.1-.9 2-2 2H8c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2zm-6 4v2H4c-1.1 0-2-.9-2-2V7h2v13zM14.2 5q-1.35 0-2.1.6c-.5.4-.8 1-.8 1.8h1.9c0-.3.1-.5.3-.7c.2-.1.4-.2.7-.2s.6.1.8.3s.3.4.3.8c0 .3-.1.6-.2.8s-.4.4-.6.6c-.5.3-.9.6-1 .9c-.4.2-.5.6-.5 1.1h2c0-.3 0-.6.1-.7c.1-.2.3-.4.5-.5c.4-.2.8-.5 1.1-.9c.3-.5.5-.9.5-1.4c0-.8-.3-1.4-.8-1.8c-.5-.5-1.3-.7-2.2-.7M13 12v2h2v-2z"></svg:path>`,
})
export class MdiHelpBoxMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHelpBoxOutlineIcon],svg[mdi-help-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 18h2v-2h-2zm1-12c-2.2 0-4 1.8-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.8-3 5h2c0-2.2 3-2.5 3-5c0-2.2-1.8-4-4-4m7-1v14H5V5zm0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"></svg:path>`,
})
export class MdiHelpBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHelpCircleIcon],svg[mdi-help-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.07 11.25l-.9.92C13.45 12.89 13 13.5 13 15h-2v-.5c0-1.11.45-2.11 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41a2 2 0 0 0-2-2a2 2 0 0 0-2 2H8a4 4 0 0 1 4-4a4 4 0 0 1 4 4a3.2 3.2 0 0 1-.93 2.25M13 19h-2v-2h2M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-5.53-4.5-10-10-10"></svg:path>`,
})
export class MdiHelpCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHelpCircleOutlineIcon],svg[mdi-help-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 18h2v-2h-2zm1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-14a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2a2 2 0 0 1 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5a4 4 0 0 0-4-4"></svg:path>`,
})
export class MdiHelpCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHelpNetworkIcon],svg[mdi-help-network-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4v2h1a1 1 0 0 1 1 1h7v2h-7a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1H2v-2h7a1 1 0 0 1 1-1h1v-2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-4.81 2c-.87 0-1.57.2-2.11.59c-.52.41-.78.98-.77 1.77l.01.03h1.93c.01-.3.1-.53.28-.69a1 1 0 0 1 .66-.23c.31 0 .57.1.75.28c.18.19.26.45.26.75c0 .32-.07.59-.23.82c-.14.23-.35.43-.61.59c-.51.34-.86.64-1.05.91c-.2.26-.31.68-.31 1.18h2c0-.31.04-.56.13-.74c.09-.19.26-.36.51-.52c.45-.24.82-.53 1.11-.93s.44-.81.44-1.31c0-.76-.27-1.37-.81-1.82c-.53-.45-1.26-.68-2.19-.68M11 12v2h2v-2z"></svg:path>`,
})
export class MdiHelpNetworkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHelpNetworkOutlineIcon],svg[mdi-help-network-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 20a1 1 0 0 0-1-1h-1v-2h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4v2h-1a1 1 0 0 0-1 1H2v2h7a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h7v-2zm-8-5V5h10v10zm4.95-9c-.78 0-1.4.18-1.88.5c-.46.39-.69.9-.68 1.6l.01.03h1.71c.01-.27.09-.48.25-.63c.14-.12.36-.19.59-.19c.27 0 .5.09.66.25c.16.17.24.4.24.66c0 .28-.07.53-.21.73c-.14.21-.31.38-.54.55c-.45.28-.76.55-.93.79c-.17.21-.28.6-.28 1.04h1.78c0-.27.03-.49.11-.65c.08-.18.22-.32.46-.47c.4-.21.73-.47.98-.82c.28-.36.4-.72.4-1.17c0-.67-.24-1.22-.72-1.61c-.48-.41-1.13-.61-1.95-.61m-1.06 6.22V14h1.78v-1.78z"></svg:path>`,
})
export class MdiHelpNetworkOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHelpRhombusIcon],svg[mdi-help-rhombus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-.5 0-1 .19-1.41.59l-8 8c-.79.78-.79 2.04 0 2.82l8 8c.78.79 2.04.79 2.82 0l8-8c.79-.78.79-2.04 0-2.82l-8-8C13 2.19 12.5 2 12 2m0 4.95c2.7.11 3.87 2.83 2.28 4.86c-.42.5-1.09.83-1.43 1.26c-.35.43-.35.93-.35 1.43H11c0-.85 0-1.56.35-2.06c.33-.5 1-.8 1.42-1.13c1.23-1.13.91-2.72-.77-2.85c-.82 0-1.5.67-1.5 1.51H9c0-1.67 1.35-3.02 3-3.02m-1 8.55h1.5V17H11z"></svg:path>`,
})
export class MdiHelpRhombusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHelpRhombusOutlineIcon],svg[mdi-help-rhombus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 15.5h1.5V17H11zm1-8.55c2.7.11 3.87 2.83 2.28 4.86c-.42.5-1.09.83-1.43 1.26c-.35.43-.35.93-.35 1.43H11c0-.85 0-1.56.35-2.06c.33-.5 1-.8 1.42-1.13c1.23-1.13.91-2.72-.77-2.85c-.82 0-1.5.67-1.5 1.51H9c0-1.67 1.35-3.02 3-3.02M12 2c-.5 0-1 .19-1.41.59l-8 8c-.79.78-.79 2.04 0 2.82l8 8c.78.79 2.04.79 2.82 0l8-8c.79-.78.79-2.04 0-2.82l-8-8C13 2.19 12.5 2 12 2m0 2l8 8l-8 8l-8-8Z"></svg:path>`,
})
export class MdiHelpRhombusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHexadecimalIcon],svg[mdi-hexadecimal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 7c-1.1 0-2 .9-2 2v6a2 2 0 0 0 2 2h2c1.11 0 2-.89 2-2V9a2 2 0 0 0-2-2zm0 2h2v6H7zm10.6 8l-2.1-2.1l-2.1 2.1l-1.4-1.4l2.1-2.1l-2.1-2.1l1.4-1.4l2.1 2.1l2.1-2.1l1.4 1.4l-2.1 2.1l2.1 2.1z"></svg:path>`,
})
export class MdiHexadecimalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHexagonIcon],svg[mdi-hexagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.99.99 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.32.17.53.5.53.88z"></svg:path>`,
})
export class MdiHexagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHexagonMultipleIcon],svg[mdi-hexagon-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.25 2c.19 0 .36.11.44.26l2.22 3.96l.09.28l-.09.28l-2.22 3.96c-.08.15-.25.26-.44.26h-4.5c-.19 0-.36-.11-.44-.26L3.09 6.78L3 6.5l.09-.28l2.22-3.96c.08-.15.25-.26.44-.26zm0 11c.19 0 .36.11.44.26l2.22 3.96l.09.28l-.09.28l-2.22 3.96c-.08.15-.25.26-.44.26h-4.5c-.19 0-.36-.11-.44-.26l-2.22-3.96L3 17.5l.09-.28l2.22-3.96c.08-.15.25-.26.44-.26zm9.25-5.5c.19 0 .36.11.44.26l2.22 3.96l.09.28l-.09.28l-2.22 3.96c-.08.15-.25.26-.44.26H15c-.19 0-.36-.11-.44-.26l-2.22-3.96l-.09-.28l.09-.28l2.22-3.96c.08-.15.25-.26.44-.26z"></svg:path>`,
})
export class MdiHexagonMultipleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHexagonMultipleOutlineIcon],svg[mdi-hexagon-multiple-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.37 4l1.41 2.5L9.37 9H6.63l-1.4-2.5L6.63 4zm.88-2h-4.5c-.19 0-.36.11-.44.26L3.09 6.22L3 6.5l.09.28l2.22 3.96c.08.15.25.26.44.26h4.5c.19 0 .36-.11.44-.26l2.22-3.96l.09-.28l-.09-.28l-2.22-3.96a.5.5 0 0 0-.44-.26m8.37 7.5L20 12l-1.38 2.5h-2.74L14.5 12l1.38-2.5zm.88-2H15c-.19 0-.36.11-.44.26l-2.22 3.96l-.09.28l.09.28l2.22 3.96c.08.15.25.26.44.26h4.5c.19 0 .36-.11.44-.26l2.22-3.96l.09-.28l-.09-.28l-2.22-3.96a.5.5 0 0 0-.44-.26M9.37 15l1.41 2.5L9.37 20H6.63l-1.4-2.5l1.4-2.5zm.88-2h-4.5c-.19 0-.36.11-.44.26l-2.22 3.96l-.09.28l.09.28l2.22 3.96c.08.15.25.26.44.26h4.5c.19 0 .36-.11.44-.26l2.22-3.96l.09-.28l-.09-.28l-2.22-3.96a.5.5 0 0 0-.44-.26"></svg:path>`,
})
export class MdiHexagonMultipleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHexagonOutlineIcon],svg[mdi-hexagon-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.99.99 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.32.17.53.5.53.88zM12 4.15L5 8.09v7.82l7 3.94l7-3.94V8.09z"></svg:path>`,
})
export class MdiHexagonOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHexagonSlice1Icon],svg[mdi-hexagon-slice-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 16.5c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.99.99 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.32.17.53.5.53.88zM12 4.15L5 8.09v7.82l7 3.94l7-3.94V8.09zM12 12V5.32l5.94 3.34z"></svg:path>`,
})
export class MdiHexagonSlice1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHexagonSlice2Icon],svg[mdi-hexagon-slice-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 15.38L12 12V5.32l6 3.37zm3 1.12c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.99.99 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.32.17.53.5.53.88zM12 4.15L5 8.09v7.82l7 3.94l7-3.94V8.09z"></svg:path>`,
})
export class MdiHexagonSlice2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHexagonSlice3Icon],svg[mdi-hexagon-slice-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 5.32l6 3.37v6.62l-6 3.37zm9 11.18c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.99.99 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.32.17.53.5.53.88zM12 4.15L5 8.09v7.82l7 3.94l7-3.94V8.09z"></svg:path>`,
})
export class MdiHexagonSlice3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHexagonSlice4Icon],svg[mdi-hexagon-slice-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 5.32l6 3.37v6.62l-6 3.37l-5.94-3.34L12 12zm9 11.18c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.99.99 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.32.17.53.5.53.88zM12 4.15L5 8.09v7.82l7 3.94l7-3.94V8.09z"></svg:path>`,
})
export class MdiHexagonSlice4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHexagonSlice5Icon],svg[mdi-hexagon-slice-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 5.32l6 3.37v6.62l-6 3.37l-6-3.37V8.69L12 12zm9 11.18c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.99.99 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.32.17.53.5.53.88zM12 4.15L5 8.09v7.82l7 3.94l7-3.94V8.09z"></svg:path>`,
})
export class MdiHexagonSlice5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHexagonSlice6Icon],svg[mdi-hexagon-slice-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 5.32l6 3.37v6.62l-6 3.37l-6-3.37V8.69zm9 11.18c0 .38-.21.71-.53.88l-7.9 4.44c-.16.12-.36.18-.57.18s-.41-.06-.57-.18l-7.9-4.44A.99.99 0 0 1 3 16.5v-9c0-.38.21-.71.53-.88l7.9-4.44c.16-.12.36-.18.57-.18s.41.06.57.18l7.9 4.44c.32.17.53.5.53.88zM12 4.15L5 8.09v7.82l7 3.94l7-3.94V8.09z"></svg:path>`,
})
export class MdiHexagonSlice6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHexagramIcon],svg[mdi-hexagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.5 7.66l6.14-.69L17 12l3.68 4.97l-6.18-.65L12.03 22L9.5 16.34l-6.14.69L7 12L3.32 7.03l6.18.65L11.97 2z"></svg:path>`,
})
export class MdiHexagramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHexagramOutlineIcon],svg[mdi-hexagram-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 7l1.3 2.8l3.2-.4l-2 2.6l1.9 2.5l-3.2-.4L12 17l-1.3-2.8l-3.2.4l2-2.6l-1.9-2.5l3.2.4zm0-5L9.5 7.7L3.3 7L7 12l-3.6 5l6.2-.7L12 22l2.5-5.7l6.2.6L17 12l3.6-5l-6.2.7z"></svg:path>`,
})
export class MdiHexagramOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHighDefinitionIcon],svg[mdi-high-definition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 7h2v4h2V7h2v10H9v-4H7v4H5zm8 0h3a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3h-3zm3 8a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-1v6z"></svg:path>`,
})
export class MdiHighDefinitionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHighDefinitionBoxIcon],svg[mdi-high-definition-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-8 12H9.5v-2h-2v2H6V9h1.5v2.5h2V9H11zm2-6h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4zm1.5 4.5h2v-3h-2z"></svg:path>`,
})
export class MdiHighDefinitionBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHighwayIcon],svg[mdi-highway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2L8 8h3V2zm3 0v6h3l-2-6zM2 9v1h2v1h2v-1h12l.06 1H20v-1h2V9zm5 2L3.34 22H11V11zm6 0v11h7.66L17 11z"></svg:path>`,
})
export class MdiHighwayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHikingIcon],svg[mdi-hiking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.47 8.67H19V23h-1.53V12.6c-.8-.16-1.55-.46-2.26-.89s-1.31-.93-1.82-1.51l-.62 3.07l2.23 2.2V23h-2v-6l-2.24-2.2L8.89 23H6.73S9.86 7.22 9.89 7.09c.11-.48.33-.85.7-1.09c.37-.27.74-.4 1.12-.4q.585 0 1.08.27c.34.17.6.42.79.74l1.06 1.63c.29.54.68 1.01 1.17 1.39s1.05.67 1.66.87zM8.55 5.89L7.4 5.65c-.57-.15-1.09-.03-1.56.29c-.46.32-.74.76-.84 1.34l-.81 3.98c-.03.29.03.55.19.79s.37.37.62.41l2.21.43zM13 1c-1.1 0-2 .9-2 2s.9 2 2 2s2-.89 2-2s-.89-2-2-2"></svg:path>`,
})
export class MdiHikingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHistoryIcon],svg[mdi-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 8H12v5l4.28 2.54l.72-1.21l-3.5-2.08zM13 3a9 9 0 0 0-9 9H1l3.96 4.03L9 12H6a7 7 0 0 1 7-7a7 7 0 0 1 7 7a7 7 0 0 1-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42A8.9 8.9 0 0 0 13 21a9 9 0 0 0 9-9a9 9 0 0 0-9-9"></svg:path>`,
})
export class MdiHistoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHockeyPuckIcon],svg[mdi-hockey-puck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5C6.5 5 2 6.57 2 8.5S6.5 12 12 12s10-1.57 10-3.5S17.5 5 12 5M2 11.76v4.74C2 18.43 6.5 20 12 20s10-1.57 10-3.5v-4.74c-.67.46-1.42.81-2.27 1.1C17.62 13.6 14.95 14 12 14s-5.62-.4-7.73-1.14c-.85-.29-1.6-.64-2.27-1.1"></svg:path>`,
})
export class MdiHockeyPuckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHockeySticksIcon],svg[mdi-hockey-sticks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.68 4H14.3l-1.74 4c-.03.04-.11.22-.25.5s-.25.54-.31.69L9.7 4H6.32l4.09 8.84c.09.22.32.75.7 1.59c.39.85.67 1.48.89 1.92l1.41 3.09c.19.34.48.51.89.51L19 20v-4h-4l-1.4-3.16zm2.35 12v4H22v-3c0-.27-.09-.5-.28-.72c-.19-.2-.42-.28-.72-.28zM5 16v4l4.7-.05c.41 0 .7-.17.89-.51l.85-1.94l-1.6-3.44L9 16zm-3 4h1.97v-4H3c-.3 0-.53.08-.72.28c-.19.22-.28.45-.28.72z"></svg:path>`,
})
export class MdiHockeySticksIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHololensIcon],svg[mdi-hololens-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8s10 0 10 3c0 0 .09 3.36-.25 3.25C21 11 12 11 12 11s-9 0-9.75 3.25C1.91 14.36 2 11 2 11c0-3 10-3 10-3m0 4c8 0 8.75 2.25 8.75 2.25c-1 3-1.75 3.75-5.75 3.75c-3 0-2-1.5-3-1.5S12 18 9 18c-4 0-4.75-.75-5.75-3.75C3.25 14.25 4 12 12 12"></svg:path>`,
})
export class MdiHololensIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeIcon],svg[mdi-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"></svg:path>`,
})
export class MdiHomeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeAccountIcon],svg[mdi-home-account-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3L2 12h3v8h14v-8h3zm0 5.75A2.25 2.25 0 0 1 14.25 11A2.25 2.25 0 0 1 12 13.25A2.25 2.25 0 0 1 9.75 11A2.25 2.25 0 0 1 12 8.75M12 15c1.5 0 4.5.75 4.5 2.25V18h-9v-.75c0-1.5 3-2.25 4.5-2.25"></svg:path>`,
})
export class MdiHomeAccountIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeAlertIcon],svg[mdi-home-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3L2 12h3v8h14v-8h3zm1 15h-2v-2h2zm0-4h-2V8h2z"></svg:path>`,
})
export class MdiHomeAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeAlertOutlineIcon],svg[mdi-home-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 5.7l5 4.5V18H7v-7.8zM19 20v-8h3L12 3L2 12h3v8m8-12h-2v5h2zm0 7h-2v2h2z"></svg:path>`,
})
export class MdiHomeAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeAnalyticsIcon],svg[mdi-home-analytics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3L2 12h3v8h14v-8h3M9 18H7v-6h2m4 6h-2v-8h2m4 8h-2v-4h2"></svg:path>`,
})
export class MdiHomeAnalyticsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeAssistantIcon],svg[mdi-home-assistant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.8 13H20v8h-7v-3.33l2.79-2.79l.71.12a2.1 2.1 0 1 0 0-4.2a2.1 2.1 0 0 0-2.1 2.1l.1.71l-1.5 1.52V9.65c.66-.36 1.1-1.05 1.1-1.85A2.1 2.1 0 0 0 12 5.7a2.1 2.1 0 0 0-2.1 2.1c0 .8.44 1.49 1.1 1.85v5.48l-1.5-1.52l.1-.71a2.1 2.1 0 0 0-2.1-2.1a2.1 2.1 0 0 0-2.1 2.1A2.1 2.1 0 0 0 7.5 15l.71-.12L11 17.67V21H4v-8H2.25c-.42 0-.83 0-.83-.21c.01-.22.43-.64.86-1.07L11 3c.33-.33.67-.67 1-.67s.67.34 1 .67l4 4V6h2v3l2.78 2.78c.4.4.81.81.82 1.02c0 .2-.4.2-.8.2M7.5 12a.9.9 0 0 1 .9.9a.9.9 0 0 1-.9.9a.9.9 0 0 1-.9-.9a.9.9 0 0 1 .9-.9m9 0c.5 0 .9.4.9.9s-.4.9-.9.9a.9.9 0 0 1-.9-.9a.9.9 0 0 1 .9-.9M12 6.9c.5 0 .9.4.9.9s-.4.9-.9.9s-.9-.4-.9-.9s.4-.9.9-.9"></svg:path>`,
})
export class MdiHomeAssistantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeAutomationIcon],svg[mdi-home-automation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3L2 12h3v8h14v-8h3zm0 5.5c2.34 0 4.46.93 6 2.44l-1.2 1.18a6.8 6.8 0 0 0-4.8-1.95c-1.88 0-3.58.74-4.8 1.95L6 10.94a8.54 8.54 0 0 1 6-2.44m0 3.33c1.4 0 2.67.56 3.6 1.47l-1.2 1.17a3.4 3.4 0 0 0-2.4-.97c-.94 0-1.79.37-2.4.97L8.4 13.3a5.13 5.13 0 0 1 3.6-1.47m0 3.34c.94 0 1.7.74 1.7 1.66s-.76 1.67-1.7 1.67s-1.7-.75-1.7-1.67s.76-1.66 1.7-1.66"></svg:path>`,
})
export class MdiHomeAutomationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeBatteryIcon],svg[mdi-home-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20H5v-8H2l10-9l2.78 2.5H14v1.67c-1.16.41-2 1.53-2 2.83zm3-11h1V7.5h4V9h1c.55 0 1 .45 1 1v11c0 .55-.45 1-1 1h-6c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1m1 2v3h4v-3z"></svg:path>`,
})
export class MdiHomeBatteryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeBatteryOutlineIcon],svg[mdi-home-battery-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 9h1V7.5h4V9h1c.55 0 1 .45 1 1v11c0 .55-.45 1-1 1h-6c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1m1 2v3h4v-3zm-4-5.31l-5 4.5V18h5v2H5v-8H2l10-9l2.78 2.5H14v1.67l-.24.1z"></svg:path>`,
})
export class MdiHomeBatteryOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeCircleIcon],svg[mdi-home-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.07 4.93C17.22 3 14.66 1.96 12 2c-2.66-.04-5.21 1-7.06 2.93C3 6.78 1.96 9.34 2 12c-.04 2.66 1 5.21 2.93 7.06C6.78 21 9.34 22.04 12 22c2.66.04 5.21-1 7.06-2.93C21 17.22 22.04 14.66 22 12c.04-2.66-1-5.22-2.93-7.07M17 12v6h-3.5v-5h-3v5H7v-6H5l7-7l7.5 7z"></svg:path>`,
})
export class MdiHomeCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeCircleOutlineIcon],svg[mdi-home-circle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20c-4.4 0-8-3.6-8-8s3.6-8 8-8s8 3.6 8 8s-3.6 8-8 8m0-18C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m-1 12h2v3h3v-5h2l-6-5l-6 5h2v5h3z"></svg:path>`,
})
export class MdiHomeCircleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeCityIcon],svg[mdi-home-city-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 21V10l7.5-5l7.5 5v11h-5v-7H5v7zM24 2v19h-7V8.93l-1-.66V6h-2v.93l-4-2.66V2zm-3 12h-2v2h2zm0-4h-2v2h2zm0-4h-2v2h2z"></svg:path>`,
})
export class MdiHomeCityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeCityOutlineIcon],svg[mdi-home-city-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2v2.26l2 1.33V4h10v15h-5v2h7V2zM7.5 5L0 10v11h15V10zM14 6v.93L15.61 8H16V6zm4 0v2h2V6zM7.5 7.5L13 11v8h-3v-6H5v6H2v-8zM18 10v2h2v-2zm0 4v2h2v-2z"></svg:path>`,
})
export class MdiHomeCityOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeClockIcon],svg[mdi-home-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.5 16.25l2.86 1.69l-.75 1.22L15 17v-5h1.5zM23 16c0 3.87-3.13 7-7 7c-2.38 0-4.47-1.19-5.74-3H4v-8H1l10-9l7 6.29c2.89.86 5 3.54 5 6.71m-2 0c0-2.76-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5"></svg:path>`,
})
export class MdiHomeClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeClockOutlineIcon],svg[mdi-home-clock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.5 16.25l2.86 1.69l-.75 1.22L15 17v-5h1.5zM23 16c0 3.87-3.13 7-7 7c-2.38 0-4.47-1.19-5.74-3H4v-8H1l10-9l7 6.29c2.89.86 5 3.54 5 6.71M9.29 18c-.18-.63-.29-1.3-.29-2c0-3.46 2.5-6.32 5.8-6.89L11 5.69l-5 4.5V18zM21 16c0-2.76-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5"></svg:path>`,
})
export class MdiHomeClockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeCurrencyUsdIcon],svg[mdi-home-currency-usd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 3l10 9h-3v8H5v-8H2l10-9M9.22 8.93c-.47.47-.72 1.1-.72 1.82c0 1.68 2.04 2.32 3.26 2.71c1.5.47 1.71.75 1.74.79c0 .75-1.35.75-1.5.75c-.63 0-.97-.12-1.14-.22c-.19-.11-.36-.28-.36-.78h-2c0 1.43.74 2.16 1.35 2.5c.33.2.72.34 1.15.42V18h2v-1.09c1.53-.3 2.5-1.29 2.5-2.66c0-1.58-1.62-2.22-3.14-2.7c-1.56-.49-1.83-.78-1.86-.8c0-.25.07-.34.14-.41c.21-.21.72-.34 1.36-.34c.68 0 1.5.13 1.5.75h2c0-1.41-.94-2.38-2.5-2.66V7h-2v1.08c-.74.13-1.35.42-1.78.85z" fill="currentColor"></svg:path>`,
})
export class MdiHomeCurrencyUsdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeEditIcon],svg[mdi-home-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3L2 12h3v8h5v-6h4v1.11l5.43-5.43zm9.04 8.14a.6.6 0 0 0-.39.16l-1 1l2.05 2.05l1-1a.55.55 0 0 0 0-.77l-1.28-1.28c-.1-.1-.24-.16-.38-.16m-1.98 1.74L13 18.94V21h2.06l6.05-6.07z"></svg:path>`,
})
export class MdiHomeEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeEditOutlineIcon],svg[mdi-home-edit-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.041 11.14c.142 0 .276.057.38.163l1.276 1.276a.54.54 0 0 1 0 .77l-1 1l-2.046-2.046l1-1a.57.57 0 0 1 .39-.163m-1.978 1.74l2.046 2.052L15.063 21H13v-2.063zM12 5.688l-5 4.5V18h4v2H5v-8H2l10-9l7.459 6.713L17 12.172v-1.984z"></svg:path>`,
})
export class MdiHomeEditOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeExportOutlineIcon],svg[mdi-home-export-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24 13l-4 4v-3h-9v-2h9V9zM4 20v-8H1l10-9l7 6.3v.7h-2.21L11 5.69l-5 4.5V18h10v-2h2v4z"></svg:path>`,
})
export class MdiHomeExportOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeFloodIcon],svg[mdi-home-flood-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.67 19c-1.95 0-2.09 1-3.33 1c-1.19 0-1.42-1-3.34-1c-1.94 0-2.09 1-3.33 1s-1.38-1-3.33-1s-2.1 1-3.34 1v2c1.95 0 2.11-1 3.34-1c1.24 0 1.38 1 3.33 1s2.1-1 3.33-1s1.41 1 3.34 1s2.1-1 3.33-1c1.22 0 1.4 1 3.33 1v-2c-1.24 0-1.38-1-3.33-1m-9.99-1.5c1.95 0 2.09-1 3.32-1c1.2 0 1.43 1 3.34 1c1.95 0 2.09-1 3.33-1c1.19 0 1.4 1 3.33 1v-2c-.65 0-1-.28-1.5-.55l-2-7.53l2.07.85l.74-1.86L9.78 2L2 11.61l1.57 1.23l1.39-1.78l.93 3.48c-.18-.04-.35-.04-.56-.04c-1.95 0-2.09 1-3.33 1v2c1.9 0 2.17-1 3.35-1c1.19 0 1.42 1 3.33 1m5.36-7.32l1.42 5.32c-1.34.08-1.46-1-3.46-1c-.37 0-.66.04-.92.1l-.91-3.39z"></svg:path>`,
})
export class MdiHomeFloodIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeFloor0Icon],svg[mdi-home-floor-0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 10h2v6h-2zm11 2h-3v8H5v-8H2l10-9zm-7-2a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2z"></svg:path>`,
})
export class MdiHomeFloor0Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeFloor1Icon],svg[mdi-home-floor-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3L2 12h3v8h14v-8h3zm-2 5h4v10h-2v-8h-2z"></svg:path>`,
})
export class MdiHomeFloor1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeFloor2Icon],svg[mdi-home-floor-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3L2 12h3v8h14v-8h3zM9 8h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2v2h4v2H9v-4a2 2 0 0 1 2-2h2v-2H9z"></svg:path>`,
})
export class MdiHomeFloor2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeFloor3Icon],svg[mdi-home-floor-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 3l10 9h-3v8H5v-8H2zm3 8.5V10a2 2 0 0 0-2-2H9v2h4v2h-2v2h2v2H9v2h4a2 2 0 0 0 2-2v-1.5a1.5 1.5 0 0 0-1.5-1.5a1.5 1.5 0 0 0 1.5-1.5"></svg:path>`,
})
export class MdiHomeFloor3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeFloorAIcon],svg[mdi-home-floor-a-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3L2 12h3v8h14v-8h3zm-1 5h2a2 2 0 0 1 2 2v8h-2v-3h-2v3H9v-8a2 2 0 0 1 2-2m0 2v3h2v-3z"></svg:path>`,
})
export class MdiHomeFloorAIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeFloorBIcon],svg[mdi-home-floor-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3L2 12h3v8h14v-8h3zM9 8h4a2 2 0 0 1 2 2v1.5a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1 1.5 1.5V16a2 2 0 0 1-2 2H9zm2 2v2h2v-2zm0 4v2h2v-2z"></svg:path>`,
})
export class MdiHomeFloorBIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeFloorGIcon],svg[mdi-home-floor-g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3L2 12h3v8h14v-8h3zm-1 5h4v2h-4v6h2v-4h2v4a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiHomeFloorGIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeFloorLIcon],svg[mdi-home-floor-l-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3L2 12h3v8h14v-8h3zM9 8h2v8h4v2H9z"></svg:path>`,
})
export class MdiHomeFloorLIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeFloorNegative1Icon],svg[mdi-home-floor-negative-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3L2 12h3v8h14v-8h3zm-1 12H7v-2h4zm4 3h-2v-8h-2V8h4z"></svg:path>`,
})
export class MdiHomeFloorNegative1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeGroupIcon],svg[mdi-home-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 16h-2v6h-3v-5H8v5H5v-6H3l7-6zM6 2l4 4H9v3H7V6H5v3H3V6H2zm12 1l5 5h-1v4h-3V9h-2v3h-1.66L14 10.87V8h-1z"></svg:path>`,
})
export class MdiHomeGroupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeGroupMinusIcon],svg[mdi-home-group-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6H1l4-4l4 4H8v3H6V6H4v3H2zm11 4.9l1.3 1.1H16V9h2v3h3V8h1l-5-5l-5 5h1zm.8 11.1c-.5-.9-.8-1.9-.8-3c0-1.6.6-3.1 1.7-4.1L9 10l-7 6h2v6h3v-5h4v5zm1.2-4v2h8v-2z"></svg:path>`,
})
export class MdiHomeGroupMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeGroupPlusIcon],svg[mdi-home-group-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6H1l4-4l4 4H8v3H6V6H4v3H2zm11 4.9l1.3 1.1H16V9h2v3h3V8h1l-5-5l-5 5h1zm.8 11.1c-.5-.9-.8-1.9-.8-3c0-1.6.6-3.1 1.7-4.1L9 10l-7 6h2v6h3v-5h4v5zm4.2-7v3h-3v2h3v3h2v-3h3v-2h-3v-3z"></svg:path>`,
})
export class MdiHomeGroupPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeGroupRemoveIcon],svg[mdi-home-group-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6H1l4-4l4 4H8v3H6V6H4v3H2zm11 4.9l1.3 1.1H16V9h2v3h3V8h1l-5-5l-5 5h1zm.8 11.1c-.5-.9-.8-1.9-.8-3c0-1.6.6-3.1 1.7-4.1L9 10l-7 6h2v6h3v-5h4v5zm7.3-6.5L19 17.6l-2.1-2.1l-1.4 1.4l2.1 2.1l-2.1 2.1l1.4 1.4l2.1-2.1l2.1 2.1l1.4-1.4l-2.1-2.1l2.1-2.1z"></svg:path>`,
})
export class MdiHomeGroupRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeHeartIcon],svg[mdi-home-heart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2 12l10-9l10 9h-3v8H5v-8zm10 6l.72-.66C15.3 15 17 13.46 17 11.57c0-1.54-1.21-2.75-2.75-2.75c-.87 0-1.7.41-2.25 1.05a3 3 0 0 0-2.25-1.05C8.21 8.82 7 10.03 7 11.57c0 1.89 1.7 3.43 4.28 5.77z"></svg:path>`,
})
export class MdiHomeHeartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeImportOutlineIcon],svg[mdi-home-import-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 13l-4 4v-3H2v-2h9V9zM5 20v-4h2v2h10v-7.81l-5-4.5L7.21 10H4.22L12 3l10 9h-3v8z"></svg:path>`,
})
export class MdiHomeImportOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeLightbulbIcon],svg[mdi-home-lightbulb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3L2 12h3v8h14v-8h3m-9 6h-2v-1h2m.5-2.42V16h-3v-1.42a3 3 0 1 1 3 0"></svg:path>`,
})
export class MdiHomeLightbulbIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeLightbulbOutlineIcon],svg[mdi-home-lightbulb-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20v-8H2l10-9l10 9h-3v8zm7-14.31l-5 4.5V18h10v-7.81zM11 17v-1h2v1zm0-2c-.28 0-.5-.22-.5-.5v-.9C9.6 13.08 9 12.11 9 11c0-1.66 1.34-3 3-3s3 1.34 3 3c0 1.11-.6 2.08-1.5 2.6v.9c0 .28-.22.5-.5.5z"></svg:path>`,
})
export class MdiHomeLightbulbOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeLightningBoltIcon],svg[mdi-home-lightning-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3L2 12h3v8h14v-8h3zm-.5 15v-4H9l3.5-7v4H15z"></svg:path>`,
})
export class MdiHomeLightningBoltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeLightningBoltOutlineIcon],svg[mdi-home-lightning-bolt-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 20v-8H2l10-9l10 9h-3v8zm7-14.31l-5 4.5V18h10v-7.81zM11.5 18v-4H9l3.5-7v4H15z"></svg:path>`,
})
export class MdiHomeLightningBoltOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeLockIcon],svg[mdi-home-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3L2 12h3v8h14v-8h3zm0 6a3 3 0 0 1 3 3v1h1v4H8v-4h1v-1a3 3 0 0 1 3-3m0 2a1 1 0 0 0-1 1v1h2v-1c0-.5-.4-1-1-1"></svg:path>`,
})
export class MdiHomeLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeLockOpenIcon],svg[mdi-home-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3L2 12h3v8h14v-8h3zm0 5a3 3 0 0 1 3 3h-2a1 1 0 0 0-1-1a1 1 0 0 0-1 1v2h5v4H8v-4h1v-2a3 3 0 0 1 3-3"></svg:path>`,
})
export class MdiHomeLockOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeMapMarkerIcon],svg[mdi-home-map-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3L2 12h3v8h14v-8h3zm0 4.7c2.1 0 3.8 1.7 3.8 3.8c0 3-3.8 6.5-3.8 6.5s-3.8-3.5-3.8-6.5c0-2.1 1.7-3.8 3.8-3.8m0 2.3a1.5 1.5 0 0 0-1.5 1.5A1.5 1.5 0 0 0 12 13a1.5 1.5 0 0 0 1.5-1.5A1.5 1.5 0 0 0 12 10"></svg:path>`,
})
export class MdiHomeMapMarkerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeMinusIcon],svg[mdi-home-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 17v2h-8v-2zM12 3l10 9h-4a6.005 6.005 0 0 0-5.66 8H5v-8H2z"></svg:path>`,
})
export class MdiHomeMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeMinusOutlineIcon],svg[mdi-home-minus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 17h8v2h-8zm-9 3v-8H2l10-9l10 9h-5v-1.81l-5-4.5l-5 4.5V18h5c0 .7.12 1.37.34 2z"></svg:path>`,
})
export class MdiHomeMinusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeModernIcon],svg[mdi-home-modern-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 21V8a2 2 0 0 1 2-2l8-3v3a2 2 0 0 1 2 2v13h-6v-5H8v5zm8-2h2v-3h-2zm-6-6h2V9H8zm4 0h4V9h-4z"></svg:path>`,
})
export class MdiHomeModernIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeOffIcon],svg[mdi-home-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.84 22.73L18.11 20H14v-4.11L12.11 14H10v6H5v-8H2l4.27-3.84L1.11 3l1.28-1.27l19.72 19.73zM19 12h3L12 3L8.95 5.75L19 15.8z"></svg:path>`,
})
export class MdiHomeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeOffOutlineIcon],svg[mdi-home-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3l5.16 5.16L2 12h3v8h6v-6h1.11l.89.89V20h5.11l2.73 2.73zM9 12v6H7v-7.81l.68-.62L10.11 12zm6 6v-1.11L16.11 18zM10.36 7.16L8.95 5.75L12 3l10 9h-3v3.8l-2-2v-3.61l-5-4.5z"></svg:path>`,
})
export class MdiHomeOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeOutlineIcon],svg[mdi-home-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81zM12 3L2 12h3v8h6v-6h2v6h6v-8h3"></svg:path>`,
})
export class MdiHomeOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomePercentIcon],svg[mdi-home-percent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 12v8H5v-8H2l10-9l10 9zm-3.47-.97l-1.06-1.06l-6 6l1.06 1.06zm-4.9-.66c-.23-.24-.55-.37-.88-.37s-.65.13-.88.37c-.24.23-.37.55-.37.88s.13.65.37.88c.23.24.55.37.88.37s.65-.13.88-.37c.24-.23.37-.55.37-.88s-.13-.65-.37-.88m4.5 4.5c-.23-.24-.55-.37-.88-.37s-.65.13-.88.37c-.24.23-.37.55-.37.88s.13.65.37.88c.23.24.55.37.88.37s.65-.13.88-.37c.24-.23.37-.55.37-.88s-.13-.65-.37-.88"></svg:path>`,
})
export class MdiHomePercentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomePercentOutlineIcon],svg[mdi-home-percent-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.53 11.03l-1.06-1.06l-6 6l1.06 1.06zm-4.9-.66c-.23-.24-.55-.37-.88-.37s-.65.13-.88.37c-.24.23-.37.55-.37.88s.13.65.37.88c.23.24.55.37.88.37s.65-.13.88-.37c.24-.23.37-.55.37-.88s-.13-.65-.37-.88m4.5 4.5c-.23-.24-.55-.37-.88-.37s-.65.13-.88.37c-.24.23-.37.55-.37.88s.13.65.37.88c.23.24.55.37.88.37s.65-.13.88-.37c.24-.23.37-.55.37-.88s-.13-.65-.37-.88M19 12v8H5v-8H2l10-9l10 9zm-2-1.8l-5-4.5l-5 4.5V18h10z"></svg:path>`,
})
export class MdiHomePercentOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomePlusIcon],svg[mdi-home-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 14h2v3h3v2h-3v3h-2v-3h-3v-2h3zM12 3l10 9h-4a6.005 6.005 0 0 0-5.66 8H5v-8H2z"></svg:path>`,
})
export class MdiHomePlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomePlusOutlineIcon],svg[mdi-home-plus-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 14h2v3h3v2h-3v3h-2v-3h-3v-2h3zM5 20v-8H2l10-9l10 9h-5v-1.81l-5-4.5l-5 4.5V18h5c0 .7.12 1.37.34 2z"></svg:path>`,
})
export class MdiHomePlusOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeRemoveIcon],svg[mdi-home-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.46 15.88l1.42-1.42L18 16.59l2.12-2.12l1.42 1.41L19.41 18l2.13 2.12l-1.42 1.42L18 19.41l-2.12 2.13l-1.42-1.42L16.59 18l-2.12-2.12M12 3l10 9h-4a6.005 6.005 0 0 0-5.66 8H5v-8H2z"></svg:path>`,
})
export class MdiHomeRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeRemoveOutlineIcon],svg[mdi-home-remove-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.46 15.88l1.42-1.42L18 16.59l2.12-2.12l1.42 1.41L19.41 18l2.13 2.12l-1.42 1.42L18 19.41l-2.12 2.13l-1.42-1.42L16.59 18l-2.12-2.12M5 20v-8H2l10-9l10 9h-5v-1.81l-5-4.5l-5 4.5V18h5c0 .7.12 1.37.34 2z"></svg:path>`,
})
export class MdiHomeRemoveOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeRoofIcon],svg[mdi-home-roof-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 16h3L12 7L2 16h3l7-6.31zM7 8.81V7H4v4.5z"></svg:path>`,
})
export class MdiHomeRoofIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeSearchIcon],svg[mdi-home-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.31 18.9c.44-.69.69-1.52.69-2.4c0-2.5-2-4.5-4.5-4.5S11 14 11 16.5s2 4.5 4.5 4.5c.87 0 1.69-.25 2.38-.68L21 23.39L22.39 22zm-3.81.1a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5M5 20v-8H2l10-9l10 9h-1.82c-1.18-1.23-2.84-2-4.68-2c-3.58 0-6.5 2.92-6.5 6.5c0 1.29.38 2.5 1.03 3.5z"></svg:path>`,
})
export class MdiHomeSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeSearchOutlineIcon],svg[mdi-home-search-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.31 18.9c.44-.69.69-1.52.69-2.4c0-2.5-2-4.5-4.5-4.5S11 14 11 16.5s2 4.5 4.5 4.5c.87 0 1.69-.25 2.38-.68L21 23.39L22.39 22zm-3.81.1a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5M5 20v-8H2l10-9l10 9h-1.82A6.44 6.44 0 0 0 17 10.18l-5-4.49l-5 4.5V18h2.18c.17.72.46 1.39.85 2z"></svg:path>`,
})
export class MdiHomeSearchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeSiloIcon],svg[mdi-home-silo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 7.8C23.6 4.5 20.9 2 17.5 2c-1.7 0-3.4.7-4.6 1.9c-.7.7-1.2 1.4-1.5 2.3L17 9.9v.1h3v2h-3v2h3v2h-3v2h3v2h-3v2h7zM13.3 7c.6-1.8 2.3-3 4.2-3s3.6 1.2 4.2 3zM0 11v11h5v-7h5v7h5V11L7.5 6z"></svg:path>`,
})
export class MdiHomeSiloIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeSiloOutlineIcon],svg[mdi-home-silo-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 21h-3v-2h3zm0-4h-3v-2h3zm0-4h-3v-2h3zm4-5.2C23.6 4.5 20.8 2 17.5 2c-1.7 0-3.4.7-4.6 1.9c-.7.7-1.2 1.4-1.5 2.3L15.6 9H22v13h2zM13.3 7c.6-1.8 2.3-3 4.2-3s3.6 1.2 4.2 3zM7.5 6L0 11v11h15V11zM13 20h-3v-6H5v6H2v-8l5.5-3.5L13 12z"></svg:path>`,
})
export class MdiHomeSiloOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeSoundInIcon],svg[mdi-home-sound-in-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.58 2c-.07 2.616-2.05 4.596-4.596 4.596V8.01C5.45 8.081 8.136 5.394 7.994 2zM1.984 3.626v1.415C3.752 4.97 5.024 3.697 5.024 2H3.612a1.95 1.95 0 0 1-1.627 1.626m20.032 2.97c-2.546 0-4.526-1.98-4.596-4.596h-1.415c-.141 3.394 2.546 6.081 6.01 6.01zm0-1.555V3.626A1.95 1.95 0 0 1 20.389 2h-1.414c0 1.697 1.273 2.97 3.04 3.04M19 20v-8h3L12 3L2 12h3v8z"></svg:path>`,
})
export class MdiHomeSoundInIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeSoundInOutlineIcon],svg[mdi-home-sound-in-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.58 2c-.07 2.616-2.05 4.596-4.596 4.596V8.01C5.45 8.081 8.136 5.394 7.994 2zM1.984 3.626v1.415C3.752 4.97 5.024 3.697 5.024 2H3.612a1.95 1.95 0 0 1-1.627 1.626m20.032 2.97c-2.546 0-4.526-1.98-4.596-4.596h-1.415c-.141 3.394 2.546 6.081 6.01 6.01zm0-1.555V3.626A1.95 1.95 0 0 1 20.389 2h-1.414c0 1.697 1.273 2.97 3.04 3.04M19 20v-8h3L12 3L2 12h3v8zM12 5.7l5 4.5V18H7v-7.8z"></svg:path>`,
})
export class MdiHomeSoundInOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeSoundOutIcon],svg[mdi-home-sound-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.404 7.012C2.474 4.395 4.454 2.416 7 2.416V1C3.535.931.848 3.618.99 7.011zM7 5.385V3.971c-1.768.07-3.04 1.344-3.04 3.04h1.414A1.95 1.95 0 0 1 7 5.386m10-2.97c2.546 0 4.526 1.98 4.596 4.597h1.414C23.152 3.618 20.465.93 17 1.002zm0 1.556v1.414a1.95 1.95 0 0 1 1.626 1.627h1.415c0-1.697-1.273-2.97-3.041-3.04M19 20v-8h3L12 3L2 12h3v8z"></svg:path>`,
})
export class MdiHomeSoundOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeSoundOutOutlineIcon],svg[mdi-home-sound-out-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.404 7.012C2.474 4.395 4.454 2.416 7 2.416V1C3.535.931.848 3.618.99 7.011zM7 5.385V3.971c-1.768.07-3.04 1.344-3.04 3.04h1.414A1.95 1.95 0 0 1 7 5.386m10-2.97c2.546 0 4.526 1.98 4.596 4.597h1.414C23.152 3.618 20.465.93 17 1.002zm0 1.556v1.414a1.95 1.95 0 0 1 1.626 1.627h1.415c0-1.697-1.273-2.97-3.041-3.04M19 20v-8h3L12 3L2 12h3v8zM12 5.7l5 4.5V18H7v-7.8z"></svg:path>`,
})
export class MdiHomeSoundOutOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeSwitchIcon],svg[mdi-home-switch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 15v-4h3v4H13V9h2L8 3L1 9h2v6zM9 16v2h6v-2l3 3l-3 3v-2H9v2l-3-3zm14-7h-2v6h-6v-5h4l-5.46-4.89L16 3z"></svg:path>`,
})
export class MdiHomeSwitchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeSwitchOutlineIcon],svg[mdi-home-switch-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3L1 9h2v6h4v-4h2v4h4V9h2zm3.5 6v4.5h-1v-4h-5v4h-1V8L8 5l3.5 3zM9 16v2h6v-2l3 3l-3 3v-2H9v2l-3-3zm14-7h-2v6h-6v-5h4l-5.46-4.89L16 3z"></svg:path>`,
})
export class MdiHomeSwitchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeThermometerIcon],svg[mdi-home-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 8a2 2 0 0 1 2 2v6.76c.61.55 1 1.35 1 2.24c0 1.66-1.34 3-3 3s-3-1.34-3-3c0-.89.39-1.69 1-2.24V10c0-1.1.9-2 2-2m0 1c-.55 0-1 .45-1 1v1h2v-1c0-.55-.45-1-1-1M5 20v-8H2l10-9l4.4 3.96A3.97 3.97 0 0 0 15 10v6c-.63.83-1 1.87-1 3l.1 1z"></svg:path>`,
})
export class MdiHomeThermometerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeThermometerOutlineIcon],svg[mdi-home-thermometer-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 8a2 2 0 0 1 2 2v6.76c.61.55 1 1.35 1 2.24c0 1.66-1.34 3-3 3s-3-1.34-3-3c0-.89.39-1.69 1-2.24V10c0-1.1.9-2 2-2m0 1c-.55 0-1 .45-1 1v1h2v-1c0-.55-.45-1-1-1m-7-3.31l-5 4.5V18h7.1l-.1 1l.1 1H5v-8H2l10-9l4.4 3.96c-.51.44-.9 1.01-1.15 1.65z"></svg:path>`,
})
export class MdiHomeThermometerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeVariantIcon],svg[mdi-home-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 3l8 6v12h-5v-7H9v7H4V9z"></svg:path>`,
})
export class MdiHomeVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHomeVariantOutlineIcon],svg[mdi-home-variant-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 13h6v6h3v-9l-6-4.5L6 10v9h3zm-5 8V9l8-6l8 6v12z"></svg:path>`,
})
export class MdiHomeVariantOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHookIcon],svg[mdi-hook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 6a3.99 3.99 0 0 1-3 3.86V17a5 5 0 0 1-5 5a5 5 0 0 1-5-5v-5l5 5H7a3 3 0 0 0 3 3a3 3 0 0 0 3-3V9.86c-1.77-.46-3-2.06-3-3.89C10 3.76 11.8 2 14 2c2.22 0 4 1.79 4 4m-4 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2"></svg:path>`,
})
export class MdiHookIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHookOffIcon],svg[mdi-hook-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9.86v1.32l2 2V9.86c2.14-.55 3.43-2.73 2.87-4.86A4 4 0 0 0 13 2.11A4.01 4.01 0 0 0 10.13 7c.37 1.4 1.46 2.5 2.87 2.86M14 4a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m4.73 18l-3.87-3.87a5.015 5.015 0 0 1-6.03 3.69C6.6 21.28 5 19.29 5 17v-5l5 5H7a3 3 0 0 0 3 3a3 3 0 0 0 3-3v-.73l-11-11L3.28 4L13 13.72l2 2l5 5z"></svg:path>`,
})
export class MdiHookOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHoopHouseIcon],svg[mdi-hoop-house-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5C6.5 5 2 9.5 2 15v6h20v-6c0-5.5-4.5-10-10-10m0 2c2.53 0 4.78 1.17 6.25 3H5.76C7.22 8.17 9.47 7 12 7M8 19H4v-4c0-1.06.21-2.07.58-3H8zm6 0h-4v-7h4zm6 0h-4v-7h3.42c.37.93.58 1.94.58 3z"></svg:path>`,
})
export class MdiHoopHouseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHopsIcon],svg[mdi-hops-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 12s-8.5-2-8.5-10c0 0 8.5 0 8.5 10M3 12C3 2 11.5 2 11.5 2c0 8-8.5 10-8.5 10m9-5.5s1 2.16 3 4c-.24 3.66-3 5.5-3 5.5s-2.76-1.84-3-5.5c2-1.84 3-4 3-4m8.75 6.75S20 17 18 19c0 0-2.47-1.64-3.67-4.19c.72-1.23 1.17-2.69 1.42-3.68c1.38 1.05 3 1.87 5 2.12m-5.25 5c-1 2-3.5 3.5-3.5 3.5s-2.5-1.5-3.5-3.5c0 0 1.09-.91 1.85-2.45c.47.55 1.01.99 1.65 1.2c.64-.21 1.18-.65 1.65-1.2c.76 1.54 1.85 2.45 1.85 2.45m-12.25-5c2-.25 3.62-1.07 5-2.12c.25.99.7 2.45 1.42 3.68C8.47 17.36 6 19 6 19c-2-2-2.75-5.75-2.75-5.75"></svg:path>`,
})
export class MdiHopsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHorizontalRotateClockwiseIcon],svg[mdi-horizontal-rotate-clockwise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 14l-4-4l-4 4h3.1c.46 4.56 2.48 8 4.9 8s4.44-3.44 4.9-8h-1.99c-.34 3.45-1.51 6-2.91 6s-2.57-2.55-2.91-6zm0-10c1.4 0 2.57 2.55 2.91 6h1.99c-.46-4.56-2.48-8-4.9-8c-2.16 0-4 2.74-4.7 6.58l.7-.7l1.21 1.2C9.64 6.11 10.73 4 12 4m10 9v-2H11l2 2zM2 13h1l2-2H2z"></svg:path>`,
})
export class MdiHorizontalRotateClockwiseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHorizontalRotateCounterclockwiseIcon],svg[mdi-horizontal-rotate-counterclockwise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10H9.09C9.43 6.55 10.6 4 12 4s2.57 2.55 2.91 6h1.99c-.46-4.56-2.48-8-4.9-8s-4.44 3.44-4.9 8H4l4 4zm0 10c-1.27 0-2.36-2.11-2.79-5.08L8 16.12l-.7-.7C8 19.26 9.84 22 12 22c2.42 0 4.44-3.44 4.9-8h-1.99c-.34 3.45-1.51 6-2.91 6m10-9h-9l-2 2h11zM2 13h3l-2-2H2z"></svg:path>`,
})
export class MdiHorizontalRotateCounterclockwiseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHorseIcon],svg[mdi-horse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6v3.5l-1.5.5l-1.54-2.46c-.13-.21-.46-.12-.46.13v3.58c0 .98-.39 1.86-1 2.53V21H15v-6h-.25c-.21 0-.42-.03-.62-.06l-4.44-.74l-1.12 2.01l.96 4.79H7l-1-4.75c-.03-.3 0-.6.16-.86l1.02-1.81a3.27 3.27 0 0 1-1.68-2.77c-.04.15-.06.37-.03.69c.03.44.14 1.09.07 1.81c-.04.72-.37 1.46-.79 1.95c-.43.49-.9.83-1.4 1.09l-.7-.7c.19-.47.38-.89.42-1.28c.06-.37-.01-.67-.12-.94l-.53-1.13c-.21-.51-.47-1.25-.42-2.12c.03-.85.5-1.96 1.39-2.57c.9-.61 1.87-.69 2.66-.53c.5.1 1.01.34 1.45.68c.37-.17.8-.26 1.25-.26h5.75V7c0-2.21 1.79-4 4-4H22l-.89 1.34c.54.36.89.97.89 1.66"></svg:path>`,
})
export class MdiHorseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHorseHumanIcon],svg[mdi-horse-human-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S12.33 5 11.5 5S10 4.33 10 3.5M22 8v3.5l-1.03.35A2.5 2.5 0 0 1 18.5 14h-.08c-.14.68-.47 1.29-.92 1.78V22H15v-5h-.25c-.21 0-.42-.03-.62-.06l-4.44-.74l-1.12 2.01l.75 3.79H6.78L6 18.25c-.03-.3 0-.6.16-.86l1.02-1.81a3.27 3.27 0 0 1-1.68-2.77c-.04.15-.06.37-.03.69c.03.44.14 1.09.07 1.81c-.04.72-.37 1.46-.79 1.95c-.43.49-.9.83-1.4 1.09l-.7-.7c.19-.47.38-.89.42-1.28c.06-.37-.01-.67-.12-.94l-.53-1.13c-.21-.51-.47-1.25-.42-2.12c.03-.85.5-1.96 1.39-2.57c.9-.61 1.87-.7 2.66-.53c.5.1 1.01.34 1.45.68c.37-.17.8-.26 1.25-.26H9V8.11c0-1 .68-1.92 1.66-2.08A2 2 0 0 1 13 8v1.5h1.5V9c0-2.21 1.79-4 4-4H22l-.89 1.34c.54.36.89.97.89 1.66m-2 3.2l-1.04-1.66c-.13-.21-.46-.12-.46.13V13c.83 0 1.5-.67 1.5-1.5z"></svg:path>`,
})
export class MdiHorseHumanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHorseVariantIcon],svg[mdi-horse-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8v8l-3 1l-3.09-5.5c-.26-.46-.99-.23-.91.31L14 21L4 17l1.15-8.06A6.92 6.92 0 0 1 12 3h8l-1.58 2.37C19.36 5.88 20 6.86 20 8"></svg:path>`,
})
export class MdiHorseVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHorseVariantFastIcon],svg[mdi-horse-variant-fast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 8v8l-3 1l-3.09-5.5c-.26-.46-.99-.23-.91.31L17 21L7 17l1.15-8.06A6.92 6.92 0 0 1 15 3h8l-1.58 2.37C22.36 5.88 23 6.86 23 8M4 5h3.58c.5-.76 1.12-1.43 1.83-2H4c-.55 0-1 .45-1 1s.45 1 1 1m1.84 6H2c-.55 0-1 .45-1 1s.45 1 1 1h3.55zM3 9h3.12l.05-.34c.08-.58.22-1.13.41-1.66H3c-.55 0-1 .45-1 1s.45 1 1 1"></svg:path>`,
})
export class MdiHorseVariantFastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHorseshoeIcon],svg[mdi-horseshoe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4h1V1h-4v3s2 4 2 8s-2 7-6 7s-6-3-6-7s2-8 2-8V1H4v3h1S2 8 2 14c0 5 5 9 10 9s10-4 10-9c0-6-3-10-3-10M4 13c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m2 6c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m6 3c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m6-3c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m2-6c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1"></svg:path>`,
})
export class MdiHorseshoeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHospitalIcon],svg[mdi-hospital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 14h-4v4h-4v-4H6v-4h4V6h4v4h4"></svg:path>`,
})
export class MdiHospitalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHospitalBoxIcon],svg[mdi-hospital-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 14h-4v4h-4v-4H6v-4h4V6h4v4h4m1-7H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiHospitalBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHospitalBoxOutlineIcon],svg[mdi-hospital-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 14h-4v4h-4v-4H6v-4h4V6h4v4h4m2-8H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 18H4V4h16z"></svg:path>`,
})
export class MdiHospitalBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHospitalBuildingIcon],svg[mdi-hospital-building-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 22V7a1 1 0 0 1 1-1h4V2h10v4h4a1 1 0 0 1 1 1v15h-8v-5h-4v5zM9 4v6h2V8h2v2h2V4h-2v2h-2V4zM4 20h4v-3H4zm0-5h4v-3H4zm12 5h4v-3h-4zm0-5h4v-3h-4zm-6 0h4v-3h-4z"></svg:path>`,
})
export class MdiHospitalBuildingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHospitalMarkerIcon],svg[mdi-hospital-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c3.86 0 7 3.13 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7M9 6v6h2v-2h2v2h2V6h-2v2h-2V6z"></svg:path>`,
})
export class MdiHospitalMarkerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHotTubIcon],svg[mdi-hot-tub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m4.15 8H22v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8h3v-.75C5 10 6 9 7.25 9h.03c.34 0 .67.09.96.23c.26.12.5.27.69.5l1.4 1.55c.23.26.51.5.82.72M7 20v-6H5v6zm4 0v-6H9v6zm4 0v-6h-2v6zm4 0v-6h-2v6zm-.35-14.14c1.03 1 1.51 2.35 1.3 3.71l-.06.43H18l.09-.59c.15-.79-.09-1.58-.67-2.2l-.07-.06c-1.03-1.01-1.5-2.36-1.3-3.72l.06-.43H18l-.09.59c-.15.79.09 1.58.67 2.2zm-4 0c1.03 1 1.51 2.35 1.3 3.71l-.06.43H14l.09-.59c.15-.79-.09-1.58-.67-2.2l-.07-.06c-1.03-1.01-1.5-2.36-1.3-3.72l.06-.43H14l-.09.59c-.15.79.09 1.58.67 2.2z"></svg:path>`,
})
export class MdiHotTubIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHours12Icon],svg[mdi-hours-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2v2c4 .5 7 3.8 7 7.9c0 3.2-1.9 6-4.7 7.3L13 17v5h5l-1.2-1.2c3.1-1.7 5.2-5 5.2-8.8c0-5.2-4-9.5-9-10m-2 0c-1.9.2-3.8 1-5.3 2.2l1.4 1.4C8.2 4.8 9.6 4.2 11 4zM4.2 5.7C3 7.2 2.2 9.1 2 11h2c.2-1.4.8-2.8 1.6-3.9zM2 13c.2 1.9 1 3.8 2.2 5.3l1.4-1.4C4.8 15.8 4.2 14.4 4 13zm5.1 5.4l-1.4 1.4c1.5 1.2 3.4 2 5.3 2.2v-2c-1.4-.2-2.8-.8-3.9-1.6M12 8v2h3v1h-1c-1.1 0-2 .9-2 2v3h5v-2h-3v-1h1c1.1 0 2-.9 2-2v-1c0-1.1-.9-2-2-2zM7 8v2h1v6h2V8z"></svg:path>`,
})
export class MdiHours12Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHours24Icon],svg[mdi-hours-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2.05v2.02c3.95.49 7 3.85 7 7.93c0 3.21-1.92 6-4.72 7.28L13 17v5h5l-1.22-1.22C19.91 19.07 22 15.76 22 12c0-5.18-3.95-9.45-9-9.95M11 2c-1.95.2-3.8.96-5.32 2.21L7.1 5.63A8.2 8.2 0 0 1 11 4zM4.2 5.68C2.96 7.2 2.2 9.05 2 11h2c.19-1.42.75-2.77 1.63-3.9zM6 8v2h3v1H8c-1.1 0-2 .9-2 2v3h5v-2H8v-1h1c1.11 0 2-.89 2-2v-1a2 2 0 0 0-2-2zm6 0v5h3v3h2v-3h1v-2h-1V8h-2v3h-1V8zM2 13c.2 1.95.97 3.8 2.22 5.32l1.42-1.42A8.2 8.2 0 0 1 4 13zm5.11 5.37l-1.43 1.42A10.04 10.04 0 0 0 11 22v-2a8.06 8.06 0 0 1-3.89-1.63"></svg:path>`,
})
export class MdiHours24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHouzzIcon],svg[mdi-houzz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M14 20.95h6V10.78L8 7.34V3.05H4v17.9h6v-5.64h4v5.64z" fill="currentColor"></svg:path>`,
})
export class MdiHouzzIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHouzzBoxIcon],svg[mdi-houzz-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m8.5 15.71H18v-7.62L9 8.5V5.29H6v13.42h4.5V14.5h3v4.21z" fill="currentColor"></svg:path>`,
})
export class MdiHouzzBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHubIcon],svg[mdi-hub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.4 18.2q.6.75.6 1.8c0 1.7-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3q.6 0 1.2.3l1.4-1.8c-.9-1-1.3-2.4-1.1-3.7l-2-.7c-.5.8-1.4 1.4-2.5 1.4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3v.2l2 .7c.6-1.2 1.8-2.1 3.2-2.3V5.9C10 5.6 9 4.4 9 3c0-1.7 1.3-3 3-3s3 1.3 3 3c0 1.4-1 2.6-2.2 2.9v2.2c1.4.2 2.6 1.1 3.2 2.3l2-.7v-.2c0-1.7 1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3c-1.1 0-2-.6-2.5-1.4l-2 .7c.2 1.3-.2 2.7-1.1 3.7l1.4 1.8q.6-.3 1.2-.3c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3q0-1.05.6-1.8l-1.4-1.8c-1.4.8-3 .8-4.4 0z"></svg:path>`,
})
export class MdiHubIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHubOutlineIcon],svg[mdi-hub-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6.5c-1.7 0-3 1.3-3 3v.2l-2 .7c-.6-1.2-1.8-2.1-3.2-2.3V5.9C14 5.6 15 4.4 15 3c0-1.7-1.3-3-3-3S9 1.3 9 3c0 1.4 1 2.6 2.2 2.9v2.2c-1.3.2-2.5 1.1-3.2 2.3l-2-.7v-.2c0-1.7-1.3-3-3-3s-3 1.3-3 3s1.3 3 3 3c1.1 0 2-.6 2.5-1.4l2 .7c-.2 1.3.2 2.7 1.1 3.7l-1.4 1.8Q6.6 17 6 17c-1.7 0-3 1.3-3 3s1.3 3 3 3s3-1.3 3-3q0-1.05-.6-1.8l1.4-1.8c1.4.8 3 .8 4.4 0l1.4 1.8q-.6.75-.6 1.8c0 1.7 1.3 3 3 3s3-1.3 3-3s-1.3-3-3-3c-.4 0-.9.1-1.2.3l-1.4-1.8c.9-1 1.3-2.4 1.1-3.7l2-.7c.5.8 1.5 1.4 2.5 1.4c1.7 0 3-1.3 3-3s-1.3-3-3-3m-18 4c-.5 0-1-.4-1-1s.5-1 1-1s1 .4 1 1s-.5 1-1 1M6 21c-.6 0-1-.5-1-1s.4-1 1-1s1 .5 1 1s-.4 1-1 1m5-18c0-.5.4-1 1-1s1 .5 1 1s-.4 1-1 1s-1-.5-1-1m1 12c-1.4 0-2.5-1.1-2.5-2.5S10.6 10 12 10s2.5 1.1 2.5 2.5S13.4 15 12 15m6 4c.5 0 1 .5 1 1s-.5 1-1 1s-1-.5-1-1s.5-1 1-1m3-8.5c-.5 0-1-.4-1-1s.5-1 1-1s1 .4 1 1s-.5 1-1 1"></svg:path>`,
})
export class MdiHubOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHubspotIcon],svg[mdi-hubspot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.1 8.6V6.2c.6-.3 1.1-.9 1.1-1.6v-.1c0-1-.8-1.8-1.8-1.8h-.1c-1 0-1.8.8-1.8 1.8v.1c0 .7.4 1.3 1.1 1.6v2.4c-.9.1-1.8.5-2.5 1.1L6.5 4.6c.3-1.1-.4-2.3-1.5-2.5s-2.2.3-2.5 1.4s.4 2.3 1.5 2.6c.5.1 1.1.1 1.6-.2l6.4 5c-1.2 1.8-1.2 4.1.1 5.9l-2 2c-.2 0-.3-.1-.5-.1c-.9 0-1.7.8-1.7 1.7S8.7 22 9.6 22s1.7-.8 1.7-1.7c0-.2 0-.3-.1-.5l1.9-1.9c2.3 1.7 5.6 1.3 7.3-1s1.3-5.6-1-7.3c-.6-.5-1.4-.9-2.3-1m-.8 7.8c-1.5 0-2.7-1.2-2.7-2.7s1.2-2.7 2.7-2.7s2.7 1.2 2.7 2.7s-1.2 2.7-2.7 2.7"></svg:path>`,
})
export class MdiHubspotIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHuluIcon],svg[mdi-hulu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.5 12.8V22h-4.8v-8.1c0-.7-.6-1.3-1.3-1.3h-2.9c-.7 0-1.3.6-1.3 1.3V22H4.5V2h4.8v6.4c.3-.1.6-.2.9-.2H15c2.5 0 4.5 2.1 4.5 4.6"></svg:path>`,
})
export class MdiHuluIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHumanIcon],svg[mdi-human-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 9h-6v13h-2v-6h-2v6H9V9H3V7h18m-9-5a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2"></svg:path>`,
})
export class MdiHumanIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHumanBabyChangingTableIcon],svg[mdi-human-baby-changing-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 6.08c-.78.04-1.5.54-1.78 1.32L3 12.13V22h4v-9.16l1.42-3.9L10.7 10H14V8h-2.85L7.29 6.2a2.2 2.2 0 0 0-.79-.12M9 17h12v2H9m1-15.5a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2m11 11a1.5 1.5 0 0 1-1.5 1.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5M9 11v2h2v1c0 1.11.89 2 2 2h2c1.11 0 2-.89 2-2v-3h-2v2h-2v-1a1 1 0 0 0-1-1Z"></svg:path>`,
})
export class MdiHumanBabyChangingTableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHumanCaneIcon],svg[mdi-human-cane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 12.24V22h-.94v-9.76c0-.15-.06-.24-.13-.35a.42.42 0 0 0-.31-.13a.46.46 0 0 0-.35.13c-.09.11-.13.21-.13.35v.92h-.91v-.66c-.7-.17-1.33-.46-1.88-.87s-1.01-.89-1.39-1.44l-.35 1.2c-.11.42-.11.85-.11 1.29v.65l1.85 2.61V22H11.5v-4.66L9.82 15l-.17 3.25L6.86 22l-1.48-1.13l2.39-3.23v-4.96c0-.53.05-1.05.14-1.57l.34-1.57l-1.39.78v3.31H5v-4.4l5-2.83c.29-.14.59-.22.91-.22s.63.09.92.26c.32.18.56.44.74.79l.74 1.57c.29.58.73 1.07 1.33 1.46c.59.39 1.25.59 1.98.59c.38 0 .7.15.98.39c.28.26.4.59.4 1M12 2a2 2 0 0 1 2 2c0 1.11-.89 2-2 2a2 2 0 1 1 0-4"></svg:path>`,
})
export class MdiHumanCaneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHumanCapacityDecreaseIcon],svg[mdi-human-capacity-decrease-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2m4.78 3.58C19.93 7.21 19 7 18 7c-.67 0-1.31.1-1.92.28c.58.55.92 1.32.92 2.15V10h5v-.57c0-.81-.5-1.53-1.22-1.85M6 6c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m1.92 1.28C7.31 7.1 6.67 7 6 7c-1 0-1.93.21-2.78.58C2.5 7.9 2 8.62 2 9.43V10h5v-.57c0-.83.34-1.6.92-2.15M10 4c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2m6 6H8v-.57c0-.81.5-1.53 1.22-1.85C10.07 7.21 11 7 12 7s1.93.21 2.78.58C15.5 7.9 16 8.62 16 9.43zm-1 6c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2m6 6h-8v-.57c0-.81.5-1.53 1.22-1.85C15.07 19.21 16 19 17 19s1.93.21 2.78.58c.72.32 1.22 1.04 1.22 1.85zM5 16c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2m6 6H3v-.57c0-.81.5-1.53 1.22-1.85C5.07 19.21 6 19 7 19s1.93.21 2.78.58c.72.32 1.22 1.04 1.22 1.85zm1.75-9v-2h-1.5v2H9l3 3l3-3z"></svg:path>`,
})
export class MdiHumanCapacityDecreaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHumanCapacityIncreaseIcon],svg[mdi-human-capacity-increase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2m4.78 3.58C19.93 7.21 19 7 18 7c-.67 0-1.31.1-1.92.28c.58.55.92 1.32.92 2.15V10h5v-.57c0-.81-.5-1.53-1.22-1.85M6 6c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m1.92 1.28C7.31 7.1 6.67 7 6 7c-1 0-1.93.21-2.78.58C2.5 7.9 2 8.62 2 9.43V10h5v-.57c0-.83.34-1.6.92-2.15M10 4c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2m6 6H8v-.57c0-.81.5-1.53 1.22-1.85C10.07 7.21 11 7 12 7s1.93.21 2.78.58C15.5 7.9 16 8.62 16 9.43M15 16c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2m6 6h-8v-.57c0-.81.5-1.53 1.22-1.85C15.07 19.21 16 19 17 19s1.93.21 2.78.58c.72.32 1.22 1.04 1.22 1.85M5 16c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2m6 6H3v-.57c0-.81.5-1.53 1.22-1.85C5.07 19.21 6 19 7 19s1.93.21 2.78.58c.72.32 1.22 1.04 1.22 1.85M12.75 14v2h-1.5v-2H9l3-3l3 3Z"></svg:path>`,
})
export class MdiHumanCapacityIncreaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHumanChildIcon],svg[mdi-human-child-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m-1 20H8v-6H6V9h12v7h-2v6h-3v-4h-2z"></svg:path>`,
})
export class MdiHumanChildIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHumanDollyIcon],svg[mdi-human-dolly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.78 21.84a1.998 1.998 0 1 1-1.56-3.68a1.998 1.998 0 1 1 1.56 3.68M7.62 6c1.11 0 2-.89 2-2a2 2 0 0 0-2-2c-1.12 0-2 .9-2 2c0 1.11.88 2 2 2m14.43 10.34L18.2 18c.22.22.42.5.56.82c.14.33.2.68.24 1l3.83-1.64zM10.16 8.78l.74 1.81c-.24-.09-.46-.21-.64-.33c-.6-.39-1.04-.88-1.33-1.46l-.74-1.57c-.19-.35-.42-.61-.74-.79c-.29-.17-.6-.26-.92-.26s-.62.08-.91.22c-1.4 1.1-1.75 3.14-1.75 3.14l-.34 1.57c-.09.52-.14 1.04-.14 1.57v4.96L1 20.87L2.5 22l2.77-3.75l.17-3.25l1.68 2.34V22h1.85v-6.06l-1.85-2.61v-.65c0-.44 0-.87.11-1.29l.35-1.2c.38.55.84 1.03 1.39 1.44c.45.34 1.71.94 2.9 1.23L14 17.8c.22-.22.5-.42.83-.56c.32-.14.67-.2.99-.24L12 8zm5.2 3.34l1.96 4.6l5.63-2.41L21 9.72"></svg:path>`,
})
export class MdiHumanDollyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHumanEditIcon],svg[mdi-human-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.07 14.88l2.05 2.05L15.06 23H13v-2.06zm1.97-1.75c.14 0 .27.06.38.17l1.28 1.28c.22.21.22.56 0 .77l-1 1l-2.05-2.05l1-1c.11-.11.25-.17.39-.17M21 9h-6v7l-2 2v-2h-2v6H9V9H3V7h18zm-9-7c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2"></svg:path>`,
})
export class MdiHumanEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHumanFemaleIcon],svg[mdi-human-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m-1.5 20v-6h-3l2.59-7.59C10.34 7.59 11.1 7 12 7s1.66.59 1.91 1.41L16.5 16h-3v6z"></svg:path>`,
})
export class MdiHumanFemaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHumanFemaleBoyIcon],svg[mdi-human-female-boy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2M6 22v-6H3l2.6-7.6c.3-.8 1-1.4 1.9-1.4s1.7.6 1.9 1.4L12 16H9v6zm8.5-10a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-1 3h6v4H18v3h-3v-3h-1.5z"></svg:path>`,
})
export class MdiHumanFemaleBoyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHumanFemaleDanceIcon],svg[mdi-human-female-dance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 17h-2v6h-2v-6h-2.12l-1.54 1.93l2.37 2.36l-1.42 1.42l-2.36-2.37c-.35-.34-.55-.81-.58-1.3s.12-.98.43-1.36l.54-.68H7l2-4v-3c-.62.47-1.12 1.07-1.47 1.76c-.35.7-.53 1.46-.53 2.24H5a7 7 0 0 1 7-7c1.33 0 2.6-.53 3.54-1.46C16.47 4.6 17 3.33 17 2h2c0 1.32-.38 2.62-1.09 3.73A7 7 0 0 1 15 8.31V13zM14 4c0 .4-.12.78-.34 1.11s-.53.59-.89.74a2 2 0 0 1-2.18-.44c-.28-.28-.47-.63-.55-1.02s-.04-.79.11-1.15c.15-.37.41-.68.74-.9S11.6 2 12 2c.53 0 1.04.21 1.41.59c.38.37.59.88.59 1.41"></svg:path>`,
})
export class MdiHumanFemaleDanceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHumanFemaleFemaleIcon],svg[mdi-human-female-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2M6 22v-6H3l2.6-7.6c.3-.8 1-1.4 1.9-1.4s1.7.6 1.9 1.4L12 16l2.6-7.6c.3-.8 1-1.4 1.9-1.4s1.7.6 1.9 1.4L21 16h-3v6h-3v-6H9v6zM16.5 2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiHumanFemaleFemaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHumanFemaleFemaleChildIcon],svg[mdi-human-female-female-child-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2m4 12h2.5L20 8.4c-.3-.8-1-1.4-1.9-1.4H18c-.9 0-1.6.6-1.9 1.4l-.9 2.6c1.1.6 1.8 1.7 1.8 3.1V22h3m-7.5-10.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5S11 9.2 11 10s.7 1.5 1.5 1.5M5 6c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m9 16v-4h1v-4c0-.8-.7-1.5-1.5-1.5h-2c-.8 0-1.5.7-1.5 1.5v4h1v4zm-7 0v-6h2.5L7 8.4C6.7 7.6 6 7 5.1 7H5c-.9 0-1.6.6-1.9 1.4L1.5 16H4v6z"></svg:path>`,
})
export class MdiHumanFemaleFemaleChildIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHumanFemaleGirlIcon],svg[mdi-human-female-girl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2M6 22v-6H3l2.6-7.6c.3-.8 1-1.4 1.9-1.4s1.7.6 1.9 1.4L12 16H9v6zm8.5-10a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m.5 3h3l1.5 4H18v3h-3v-3h-1.5z"></svg:path>`,
})
export class MdiHumanFemaleGirlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHumanGreetingIcon],svg[mdi-human-greeting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m3.9 6.1c-.4-.4-1.1-1.1-2.4-1.1H11C8.2 7 6 4.8 6 2H4c0 3.2 2.1 5.8 5 6.7V22h2v-6h2v6h2V10.1l4 3.9l1.4-1.4z"></svg:path>`,
})
export class MdiHumanGreetingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHumanGreetingProximityIcon],svg[mdi-human-greeting-proximity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 14H9a9 9 0 0 1 9-9v2c-3.87 0-7 3.13-7 7m7-3V9c-2.76 0-5 2.24-5 5h2c0-1.66 1.34-3 3-3M7 4c0-1.11-.89-2-2-2s-2 .89-2 2s.89 2 2 2s2-.89 2-2m4.45.5h-2A2.98 2.98 0 0 1 6.5 7h-3C2.67 7 2 7.67 2 8.5V11h6V8.74a4.98 4.98 0 0 0 3.45-4.24M19 17c1.11 0 2-.89 2-2s-.89-2-2-2s-2 .89-2 2s.89 2 2 2m1.5 1h-3c-1.5 0-2.71-1.08-2.95-2.5h-2c.2 2 1.59 3.65 3.45 4.24V22h6v-2.5c0-.83-.67-1.5-1.5-1.5"></svg:path>`,
})
export class MdiHumanGreetingProximityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHumanGreetingVariantIcon],svg[mdi-human-greeting-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 4v1.5c0 4.15 2.21 7.78 5.5 9.8V20h15v-2c0-2.66-5.33-4-8-4h-.25C9 14 5 10 5 5.5V4m9 0a4 4 0 0 0-4 4a4 4 0 0 0 4 4a4 4 0 0 0 4-4a4 4 0 0 0-4-4"></svg:path>`,
})
export class MdiHumanGreetingVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHumanHandsdownIcon],svg[mdi-human-handsdown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 1a2 2 0 0 0-2 2c0 1.11.89 2 2 2s2-.89 2-2a2 2 0 0 0-2-2m-2 5c-.27 0-.5.11-.69.28H9.3L4 11.59L5.42 13L9 9.41V22h2v-7h2v7h2V9.41L18.58 13L20 11.59l-5.3-5.31c-.2-.17-.43-.28-.7-.28"></svg:path>`,
})
export class MdiHumanHandsdownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHumanHandsupIcon],svg[mdi-human-handsup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1c0 2.7 1.56 5.16 4 6.32V22h2v-7h2v7h2V7.31C17.44 6.16 19 3.7 19 1h-2a5 5 0 0 1-5 5a5 5 0 0 1-5-5m5 0c-1.11 0-2 .89-2 2s.89 2 2 2s2-.89 2-2s-.89-2-2-2"></svg:path>`,
})
export class MdiHumanHandsupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHumanMaleIcon],svg[mdi-human-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m-1.5 5h3a2 2 0 0 1 2 2v5.5H14V22h-4v-7.5H8.5V9a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiHumanMaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHumanMaleBoardIcon],svg[mdi-human-male-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 17a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H9.46c.35.61.54 1.3.54 2h10v11h-9v2m4-10v2H9v13H7v-6H5v6H3v-8H1.5V9a2 2 0 0 1 2-2zM8 4a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2"></svg:path>`,
})
export class MdiHumanMaleBoardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHumanMaleBoardPollIcon],svg[mdi-human-male-board-poll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 17c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H9.5c.3.6.5 1.3.5 2h10v11h-9v2m4-10v2H9v13H7v-6H5v6H3v-8H1.5V9c0-1.1.9-2 2-2zM8 4c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2m9 2h2v8h-2zm-3 4h2v4h-2zm-3 0h2v4h-2z"></svg:path>`,
})
export class MdiHumanMaleBoardPollIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHumanMaleBoyIcon],svg[mdi-human-male-boy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2M6 7h3a2 2 0 0 1 2 2v5.5H9.5V22h-4v-7.5H4V9a2 2 0 0 1 2-2m8.5 5a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m-1 3h6v4H18v3h-3v-3h-1.5z"></svg:path>`,
})
export class MdiHumanMaleBoyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHumanMaleChildIcon],svg[mdi-human-male-child-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.89 2-2s-.89-2-2-2M5 7c-1.11 0-2 .89-2 2v6h2v7h5V11.6l2.53 4.4h2.44L16 14.66V22h4v-5h1v-3c0-1.11-.89-2-2-2h-2.5c-.6 0-1.13.26-1.5.68c-.33.42-.68.88-1 1.32h-.31L10 7.66C9.84 7.38 9.22 7 8.5 7zm13 1c-.83 0-1.5.67-1.5 1.5S17.17 11 18 11s1.5-.67 1.5-1.5S18.83 8 18 8"></svg:path>`,
})
export class MdiHumanMaleChildIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHumanMaleFemaleIcon],svg[mdi-human-male-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2M6 7h3a2 2 0 0 1 2 2v5.5H9.5V22h-4v-7.5H4V9a2 2 0 0 1 2-2m10.5-5a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2M15 22v-6h-3l2.59-7.59C14.84 7.59 15.6 7 16.5 7s1.66.59 1.91 1.41L21 16h-3v6z"></svg:path>`,
})
export class MdiHumanMaleFemaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHumanMaleFemaleChildIcon],svg[mdi-human-male-female-child-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4c0-1.1.9-2 2-2s2 .9 2 2s-.9 2-2 2s-2-.9-2-2m4 18v-6h2.5L20 8.4c-.3-.8-1-1.4-1.9-1.4H18c-.9 0-1.6.6-1.9 1.4l-.9 2.6c1.1.6 1.8 1.7 1.8 3.1V22zm-7.5-10.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5S11 9.2 11 10s.7 1.5 1.5 1.5M5.5 6c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m2 16v-7H9V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6h1.5v7zm6.5 0v-4h1v-4c0-.8-.7-1.5-1.5-1.5h-2c-.8 0-1.5.7-1.5 1.5v4h1v4z"></svg:path>`,
})
export class MdiHumanMaleFemaleChildIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHumanMaleGirlIcon],svg[mdi-human-male-girl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2M6 7h3a2 2 0 0 1 2 2v5.5H9.5V22h-4v-7.5H4V9a2 2 0 0 1 2-2m8.5 5a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2m.5 3h3l1.5 4H18v3h-3v-3h-1.5z"></svg:path>`,
})
export class MdiHumanMaleGirlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHumanMaleHeightIcon],svg[mdi-human-male-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2c1.78 0 2.67 2.16 1.42 3.42C7.16 6.67 5 5.78 5 4a2 2 0 0 1 2-2M5.5 7h3a2 2 0 0 1 2 2v5.5H9V22H5v-7.5H3.5V9a2 2 0 0 1 2-2M21 8h-6v2h6m0 1h-3v2h3m0-11h-6v2h6m0 1h-3v2h3m0 7h-6v2h6m0 4h-6v2h6m0-5h-3v2h3"></svg:path>`,
})
export class MdiHumanMaleHeightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHumanMaleHeightVariantIcon],svg[mdi-human-male-height-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2c1.78 0 2.67 2.16 1.42 3.42C7.16 6.67 5 5.78 5 4a2 2 0 0 1 2-2M5.5 7h3a2 2 0 0 1 2 2v5.5H9V22H5v-7.5H3.5V9a2 2 0 0 1 2-2M19 8h2l-3-4l-3 4h2v8h-2l3 4l3-4h-2m3-14h-8v2h8m0 16h-8v2h8"></svg:path>`,
})
export class MdiHumanMaleHeightVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHumanMaleMaleIcon],svg[mdi-human-male-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 2a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2M6 7h3a2 2 0 0 1 2 2v5.5H9.5V22h-4v-7.5H4V9a2 2 0 0 1 2-2m10.5-5a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2M15 7h3a2 2 0 0 1 2 2v5.5h-1.5V22h-4v-7.5H13V9a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiHumanMaleMaleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHumanMaleMaleChildIcon],svg[mdi-human-male-male-child-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.5 11.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5S11 9.2 11 10s.7 1.5 1.5 1.5M5.5 6c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m2 16v-7H9V9c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v6h1.5v7zm6.5 0v-4h1v-4c0-.8-.7-1.5-1.5-1.5h-2c-.8 0-1.5.7-1.5 1.5v4h1v4zm4.5-16c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2M22 9v6h-1.5v7H17v-8c0-1.4-.8-2.6-2-3.1V9c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2"></svg:path>`,
})
export class MdiHumanMaleMaleChildIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHumanNonBinaryIcon],svg[mdi-human-non-binary-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a2 2 0 1 1 0 4c-1.11 0-2-.89-2-2s.9-2 2-2m1.91 6.41A1.99 1.99 0 0 0 12 7h-1.5c-1.1 0-2 .9-2 2v5.5H10V22h3.5v-6h3z"></svg:path>`,
})
export class MdiHumanNonBinaryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHumanPregnantIcon],svg[mdi-human-pregnant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4c0-1.11.89-2 2-2s2 .89 2 2s-.89 2-2 2s-2-.89-2-2m7 9c0-1.34-.83-2.5-2-3a3 3 0 0 0-3-3a3 3 0 0 0-3 3v7h2v5h3v-5h3z"></svg:path>`,
})
export class MdiHumanPregnantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHumanQueueIcon],svg[mdi-human-queue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.89 2-2s-.89-2-2-2m7-2a2 2 0 1 0 2 2c0-1.11-.89-2-2-2m7-2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.89 2-2s-.89-2-2-2M3.5 11c-.83 0-1.5.67-1.5 1.5V17h1v5h4v-5h1v-4.5c0-.83-.67-1.5-1.5-1.5zm7-2C9.67 9 9 9.67 9 10.5V15h1v5h4v-5h1v-4.5c0-.83-.67-1.5-1.5-1.5zm7-2c-.83 0-1.5.67-1.5 1.5V13h1v5h4v-5h1V8.5c0-.83-.67-1.5-1.5-1.5z"></svg:path>`,
})
export class MdiHumanQueueIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHumanScooterIcon],svg[mdi-human-scooter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 2.25c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5M20 18a2 2 0 0 1 2 2c0 1.11-.89 2-2 2c-.74 0-1.39-.4-1.73-1H8.73A2 2 0 1 1 7 18c.74 0 1.39.4 1.73 1H13v-5.5l-3.27-2.27L6.77 14c-.41.37-1.04.34-1.42-.06l-3.07-3.29c-.37-.41-.35-1.04.05-1.42c.41-.37 1.04-.35 1.41.05l2.39 2.56l7.13-6.64l.04-.02a1 1 0 0 1 1.41.12L16.97 8H20c.55 0 1 .45 1 1s-.45 1-1 1h-3.5c-.35 0-.65-.18-.83-.44l-1.5-1.79l-2.53 2.36l2.93 2.05c.26.18.43.48.43.82v6h.61c.43-1.87 2.02-3.3 3.97-3.5l-.77-4.5h1.5l1.08 6.34A3.004 3.004 0 0 0 17.17 19h1.1c.34-.6.99-1 1.73-1"></svg:path>`,
})
export class MdiHumanScooterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHumanWalkerIcon],svg[mdi-human-walker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m7.8 15.7l-.6-6.4c-.1-.8-.7-1.3-1.5-1.3H16c-1.5 0-2.9-.5-3.8-1.4l-2-2c-.1-.2-.6-.6-1.4-.6c-.5 0-1 .2-1.4.6L4.1 9.9c-.5.7-.5 1.6-.2 2.1l1.4 2.8l-3.1 4L3.8 20l3.7-4.7l-.3-1.3l.8.8V20h2v-6.1l-2.1-2.1l2.4-2.4c.9.9 1.7 1.8 3.6 2.3L13 20h1.5l.4-3.5h3.2l.1 1.2c-.4.3-.7.7-.7 1.3c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5c0-.5-.3-1-.7-1.3M15.1 15l.4-3.5h2l.4 3.5z"></svg:path>`,
})
export class MdiHumanWalkerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHumanWheelchairIcon],svg[mdi-human-wheelchair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 4a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2M5 7c-1.11 0-2 .89-2 2v6h2v7h3.61a7 7 0 0 1-2.11-5a7 7 0 0 1 3.5-6.05V9c0-1.11-.89-2-2-2m5 1v8h5.5l2.7 3.6l1.6-1.2l-3.3-4.4H15V8m-3 4.23A5 5 0 0 0 8.5 17a5 5 0 0 0 5 5a5 5 0 0 0 5-5h-2a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 1.5-2.59Z"></svg:path>`,
})
export class MdiHumanWheelchairIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHumanWhiteCaneIcon],svg[mdi-human-white-cane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4a2 2 0 1 1 4 0c0 1.11-.89 2-2 2a2 2 0 0 1-2-2m12.65 17.5L14.5 10.85c-.73 0-1.27-.2-1.86-.59c-.6-.39-1.04-.88-1.33-1.46l-.74-1.57c-.18-.35-.42-.61-.74-.79c-.29-.17-.6-.26-.92-.26s-.62.08-.91.22L3 9.23v4.4h1.86v-3.31l1.39-.78l-.34 1.57c-.09.52-.14 1.04-.14 1.57v4.96l-2.39 3.23L4.86 22l2.79-3.75l.17-3.25l1.68 2.34V22h1.85v-6.06L9.5 13.33v-.65c0-.44 0-.87.11-1.29l.35-1.2c.38.55.85 1.01 1.39 1.44c.85.68 1.65.96 3 .95L19.78 22z"></svg:path>`,
})
export class MdiHumanWhiteCaneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHumbleBundleIcon],svg[mdi-humble-bundle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.91 18.12c-2.82 0 1.52-15.99 1.52-15.99h-2.9s-1.19 3.76-1.98 7.94h-2.5c.06-.86.1-1.73.08-2.57C11 .59 7 1.87 5.18 3.45C3.47 4.95 2.03 7.8 2 10h1.35s.9-4.12 3.72-4.12s-1.53 15.99-1.53 15.99h2.91s1.5-4.28 2.25-9.06l2.39-.01c-.14 1.24-.18 2.6-.16 3.87c.11 6.89 4.13 5.41 5.93 3.83C20.67 18.92 22 15.58 22 14h-1.39c.01.12-.88 4.12-3.7 4.12"></svg:path>`,
})
export class MdiHumbleBundleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHurricaneIcon],svg[mdi-hurricane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M15 6.79A6 6 0 0 1 18 12C18 22 6 22 6 22a17.7 17.7 0 0 0 3.34-3.29a1 1 0 0 0-.34-1.5A6 6 0 0 1 6 12C6 2 18 2 18 2a17.699 17.699 0 0 0-3.34 3.29a1.002 1.002 0 0 0 .34 1.5zM12 14a2 2 0 1 0 0-4a2 2 0 0 0 0 4z" fill="currentColor"></svg:path>`,
})
export class MdiHurricaneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHvacIcon],svg[mdi-hvac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.58 14c-.28-.45-.47-.97-.52-1.5h7.88c-.05.53-.24 1.05-.47 1.5zM12 16c-1.03 0-1.92-.39-2.62-1h5.25c-.71.61-1.6 1-2.63 1m0-8c1.03 0 1.92.39 2.63 1H9.38c.7-.61 1.59-1 2.62-1m-3.42 2h6.84c.28.45.47.97.52 1.5H8.06c.05-.53.24-1.05.52-1.5M3 3v18h18V3zm9 15c-3.33 0-6-2.67-6-6s2.67-6 6-6s6 2.67 6 6s-2.67 6-6 6"></svg:path>`,
})
export class MdiHvacIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiHvacOffIcon],svg[mdi-hvac-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.11 21.46L2.39 1.73L1.11 3L3 4.89V21h16.11l1.73 1.73zM12 18c-3.33 0-6-2.67-6-6c0-1.18.34-2.27.92-3.19l1.51 1.51c-.19.37-.33.77-.37 1.18h1.55l1 1H8.06c.05.53.24 1.05.52 1.5h3.53l1 1H9.38c.7.61 1.59 1 2.62 1c.63 0 1.19-.16 1.7-.41l1.49 1.49c-.92.58-2.01.92-3.19.92m0-10c1.03 0 1.92.39 2.63 1H12.2l-.93-.93c.23-.04.48-.07.73-.07M9.67 6.47L6.2 3H21v14.8l-3.47-3.47c.3-.71.47-1.5.47-2.33c0-3.33-2.67-6-6-6c-.83 0-1.62.17-2.33.47m6.27 5.03H14.7L13.2 10h2.22c.28.45.47.97.52 1.5"></svg:path>`,
})
export class MdiHvacOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
