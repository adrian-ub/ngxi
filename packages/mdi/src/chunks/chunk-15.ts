import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiWechatIcon],svg[mdi-wechat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 4C5.36 4 2 6.69 2 10c0 1.89 1.08 3.56 2.78 4.66L4 17l2.5-1.5c.89.31 1.87.5 2.91.5A5.2 5.2 0 0 1 9 14c0-3.31 3.13-6 7-6c.19 0 .38 0 .56.03C15.54 5.69 12.78 4 9.5 4m-3 2.5a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m5 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1M16 9c-3.31 0-6 2.24-6 5s2.69 5 6 5c.67 0 1.31-.08 1.91-.25L20 20l-.62-1.87C20.95 17.22 22 15.71 22 14c0-2.76-2.69-5-6-5m-2 2.5a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1a1 1 0 0 1-1 1a1 1 0 0 1-1-1a1 1 0 0 1 1-1"></svg:path>`,
})
export class MdiWechatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWeightIcon],svg[mdi-weight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a4 4 0 0 1 4 4c0 .73-.19 1.41-.54 2H18c.95 0 1.75.67 1.95 1.56C21.96 18.57 22 18.78 22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2c0-.22.04-.43 2.05-8.44C4.25 9.67 5.05 9 6 9h2.54A3.9 3.9 0 0 1 8 7a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiWeightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWeightGramIcon],svg[mdi-weight-gram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.95 10.56C19.75 9.67 18.95 9 18 9h-2.54c.35-.59.54-1.27.54-2a4 4 0 0 0-4-4a4 4 0 0 0-4 4c0 .73.19 1.41.54 2H6c-.95 0-1.75.67-1.95 1.56C2.04 18.57 2 18.78 2 19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2c0-.22-.04-.43-2.05-8.44M12 5a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2a2 2 0 0 1 2-2m3 8h-4v4h2v-3h2v5h-4c-1.11 0-2-.89-2-2v-4c0-1.11.89-2 2-2h4z"></svg:path>`,
})
export class MdiWeightGramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWeightKilogramIcon],svg[mdi-weight-kilogram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a4 4 0 0 1 4 4c0 .73-.19 1.41-.54 2H18c.95 0 1.75.67 1.95 1.56C21.96 18.57 22 18.78 22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2c0-.22.04-.43 2.05-8.44C4.25 9.67 5.05 9 6 9h2.54A3.9 3.9 0 0 1 8 7a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m-6 6v8h2v-2.5l1 1V19h2v-2l-2-2l2-2v-2H9v1.5l-1 1V11zm9 0c-1.11 0-2 .89-2 2v4c0 1.11.89 2 2 2h3v-5h-2v3h-1v-4h3v-2z"></svg:path>`,
})
export class MdiWeightKilogramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWeightLifterIcon],svg[mdi-weight-lifter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5c-1.11 0-2 .89-2 2s.89 2 2 2s2-.89 2-2s-.89-2-2-2m10-4v5h-2V4H4v2H2V1h2v2h16V1zm-7 10.26V23h-2v-5h-2v5H9V11.26C6.93 10.17 5.5 8 5.5 5.5V5h2v.5C7.5 8 9.5 10 12 10s4.5-2 4.5-4.5V5h2v.5c0 2.5-1.43 4.67-3.5 5.76"></svg:path>`,
})
export class MdiWeightLifterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWeightPoundIcon],svg[mdi-weight-pound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3a4 4 0 0 1 4 4c0 .73-.19 1.41-.54 2H18c.95 0 1.75.67 1.95 1.56C21.96 18.57 22 18.78 22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2c0-.22.04-.43 2.05-8.44C4.25 9.67 5.05 9 6 9h2.54A3.9 3.9 0 0 1 8 7a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m-6 6v8h5v-2H8v-6zm7 0v8h3c1.11 0 2-.89 2-2v-.5c0-.57-.25-1.12-.68-1.5c.43-.38.68-.93.68-1.5V13c0-1.11-.89-2-2-2zm2 2h1v1h-1zm0 3h1v1h-1z"></svg:path>`,
})
export class MdiWeightPoundIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWhatsappIcon],svg[mdi-whatsapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23c-1.48 0-2.93-.39-4.19-1.15l-.3-.17l-3.12.82l.83-3.04l-.2-.32a8.2 8.2 0 0 1-1.26-4.38c.01-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.16 0-.43.06-.66.31c-.22.25-.87.86-.87 2.07c0 1.22.89 2.39 1 2.56c.14.17 1.76 2.67 4.25 3.73c.59.27 1.05.42 1.41.53c.59.19 1.13.16 1.56.1c.48-.07 1.46-.6 1.67-1.18s.21-1.07.15-1.18c-.07-.1-.23-.16-.48-.27c-.25-.14-1.47-.74-1.69-.82c-.23-.08-.37-.12-.56.12c-.16.25-.64.81-.78.97c-.15.17-.29.19-.53.07c-.26-.13-1.06-.39-2-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.12-.24-.01-.39.11-.5c.11-.11.27-.29.37-.44c.13-.14.17-.25.25-.41c.08-.17.04-.31-.02-.43c-.06-.11-.56-1.35-.77-1.84c-.2-.48-.4-.42-.56-.43c-.14 0-.3-.01-.47-.01"></svg:path>`,
})
export class MdiWhatsappIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWheelBarrowIcon],svg[mdi-wheel-barrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 15.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5m0-1.5c-1.66 0-3 1.34-3 3s1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3M7 8L5 5H2v2h3.13L8 11.3V20h2l2.57-5h1.98c.7-1.19 1.95-2 3.45-2c.88 0 1.69.29 2.35.78L22 8zm2.39 11H9v-6.2l.87 1.31c.36.53.95.85 1.58.89z"></svg:path>`,
})
export class MdiWheelBarrowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWheelchairIcon],svg[mdi-wheelchair-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 16l1.32 1.76C14.32 19.68 12.31 21 10 21c-3.31 0-6-2.69-6-6c0-2.43 1.46-4.5 3.55-5.45l.21 2.17C6.71 12.44 6 13.63 6 15c0 2.21 1.79 4 4 4c1.86 0 3.41-1.28 3.86-3zm5.55.11l-1.25.62L15.5 13h-4.59l-.2-2H14V9h-3.5l-.3-3c1.01-.12 1.8-.96 1.8-2a2 2 0 1 0-4 0v.1L9.1 15h5.4l3.2 4.27l2.75-1.37z"></svg:path>`,
})
export class MdiWheelchairIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWheelchairAccessibilityIcon],svg[mdi-wheelchair-accessibility-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.4 11.2l-4.1.2l2.3-2.6c.2-.3.3-.8.2-1.3c-.1-.3-.2-.6-.5-.8l-5.4-3.2c-.4-.3-1-.2-1.4.1L6.8 6.1c-.5.5-.6 1.2-.1 1.7c.4.5 1.2.5 1.7.1l2-1.8l1.9 1.1l-4.2 4.3c-.1.1-.1.2-.2.2c-.5.2-1 .4-1.4.7L8 13.9c.5-.2 1-.4 1.5-.4c1.9 0 3.5 1.6 3.5 3.5c0 .6-.1 1.1-.4 1.5l1.5 1.5q.9-1.35.9-3c0-1.2-.4-2.4-1.1-3.3l3.3-.3l-.2 4.8c-.1.7.4 1.2 1.1 1.3h.1c.6 0 1.1-.5 1.2-1.1l.2-5.9c0-.3-.1-.7-.3-.9c-.3-.3-.6-.4-.9-.4M18 5.5a2 2 0 0 0 2-2a2 2 0 0 0-2-2a2 2 0 0 0-2 2a2 2 0 0 0 2 2m-5.5 16.1q-1.35.9-3 .9C6.5 22.5 4 20 4 17q0-1.65.9-3l1.5 1.5c-.2.5-.4 1-.4 1.5c0 1.9 1.6 3.5 3.5 3.5c.6 0 1.1-.1 1.5-.4z"></svg:path>`,
})
export class MdiWheelchairAccessibilityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWhistleIcon],svg[mdi-whistle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 9A6.5 6.5 0 0 0 2 15.5A6.5 6.5 0 0 0 8.5 22a6.5 6.5 0 0 0 6.5-6.5v-1.59L22 12V9H11v2H9V9zM11 2v5H9V2zM6.35 7.28q-1.005.24-1.92.72L2.14 4.88L3.76 3.7zm11.51-2.4L16.32 7h-2.47l2.39-3.3z"></svg:path>`,
})
export class MdiWhistleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWhistleOutlineIcon],svg[mdi-whistle-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.76 3.7L2.14 4.88L4.43 8a8.2 8.2 0 0 1 1.92-.72M11 9v2h7v.29l-5 1.42v2.79A4.5 4.5 0 1 1 8.5 11H9V9h-.5a6.5 6.5 0 1 0 6.5 6.5v-1.59L22 12V9m-5.76-5.3L13.85 7h2.47l1.54-2.12M9 2v5h2V2Z"></svg:path>`,
})
export class MdiWhistleOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWhiteBalanceAutoIcon],svg[mdi-white-balance-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.3 16l-.7-2H6.4l-.7 2H3.8L7 7h2l3.2 9M22 7l-1.2 6.29L19.3 7h-1.6l-1.49 6.29L15 7h-.76C12.77 5.17 10.5 4 8 4a8 8 0 0 0-8 8a8 8 0 0 0 8 8c3.13 0 5.84-1.81 7.15-4.43l.1.43H17l1.5-6.1L20 16h1.75l2.05-9M6.85 12.65h2.3L8 9z"></svg:path>`,
})
export class MdiWhiteBalanceAutoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWhiteBalanceIncandescentIcon],svg[mdi-white-balance-incandescent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.24 18.15l1.8 1.8l1.41-1.42l-1.79-1.79M20 12.5h3v-2h-3m-5-4.19V1.5H9v4.81C7.21 7.35 6 9.28 6 11.5a6 6 0 0 0 6 6a6 6 0 0 0 6-6c0-2.22-1.21-4.15-3-5.19M4 10.5H1v2h3m7 9.95h2V19.5h-2m-7.45-.97l1.41 1.42l1.8-1.8l-1.42-1.41z"></svg:path>`,
})
export class MdiWhiteBalanceIncandescentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWhiteBalanceIridescentIcon],svg[mdi-white-balance-iridescent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.96 19.95l1.8-1.8l-1.42-1.41l-1.79 1.79m0-14.07l1.79 1.8l1.42-1.42l-1.8-1.79m15.49 15.48l-1.79-1.79l-1.42 1.41l1.8 1.8M13 22.45V19.5h-2v2.95zm6.04-19.4l-1.8 1.79l1.42 1.42l1.79-1.8M11 3.5h2V.55h-2M5 14.5h14v-6H5z"></svg:path>`,
})
export class MdiWhiteBalanceIridescentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWhiteBalanceSunnyIcon],svg[mdi-white-balance-sunny-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3.55 19.09l1.41 1.41l1.8-1.79l-1.42-1.42M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6s6-2.69 6-6c0-3.32-2.69-6-6-6m8 7h3v-2h-3m-2.76 7.71l1.8 1.79l1.41-1.41l-1.79-1.8M20.45 5l-1.41-1.4l-1.8 1.79l1.42 1.42M13 1h-2v3h2M6.76 5.39L4.96 3.6L3.55 5l1.79 1.81zM1 13h3v-2H1m12 9h-2v3h2"></svg:path>`,
})
export class MdiWhiteBalanceSunnyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWidgetsIcon],svg[mdi-widgets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h8v4.34l5.66-5.65l5.65 5.65L16.66 13H21v8h-8v-8h3.66L11 7.34V11H3zm0 10h8v8H3z"></svg:path>`,
})
export class MdiWidgetsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWidgetsOutlineIcon],svg[mdi-widgets-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.7 4.5l2.8 2.8l-2.8 2.8l-2.8-2.8zM9 5v4H5V5zm10 10v4h-4v-4zM16.7 1.7L11 7.3l5.7 5.7H13v8h8v-8h-4.3l5.6-5.7zM11 3H3v8h8zM9 15v4H5v-4zm2-2H3v8h8z"></svg:path>`,
})
export class MdiWidgetsOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiIcon],svg[mdi-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 21l3.6-4.8c-1-.75-2.25-1.2-3.6-1.2s-2.6.45-3.6 1.2zm0-18C7.95 3 4.21 4.34 1.2 6.6L3 9c2.5-1.88 5.62-3 9-3s6.5 1.12 9 3l1.8-2.4C19.79 4.34 16.05 3 12 3m0 6c-2.7 0-5.19.89-7.2 2.4l1.8 2.4C8.1 12.67 9.97 12 12 12s3.9.67 5.4 1.8l1.8-2.4C17.19 9.89 14.7 9 12 9"></svg:path>`,
})
export class MdiWifiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiAlertIcon],svg[mdi-wifi-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.24 5H18v2.25A15 15 0 0 0 12 6C8.62 6 5.5 7.12 3 9L1.2 6.6C4.21 4.34 7.95 3 12 3c2.97 0 5.77.73 8.24 2M8.4 16.2L12 21l3.6-4.8c-1-.75-2.25-1.2-3.6-1.2s-2.6.45-3.6 1.2m-3.6-4.8l1.8 2.4C8.1 12.67 9.97 12 12 12s3.9.67 5.4 1.8l.6-.8v-2.38A11.87 11.87 0 0 0 12 9c-2.7 0-5.19.89-7.2 2.4M20 17h2v-2h-2zm0-10v6h2V7z"></svg:path>`,
})
export class MdiWifiAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiArrowDownIcon],svg[mdi-wifi-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6C8.62 6 5.5 7.12 3 9L1.2 6.6C4.21 4.34 7.95 3 12 3s7.79 1.34 10.8 3.6L21 9c-2.5-1.88-5.62-3-9-3m0 9c-1.35 0-2.6.45-3.6 1.2L12 21l1.04-1.39c-.04-.2-.04-.4-.04-.61c0-1.34.44-2.57 1.19-3.57c-.69-.27-1.42-.43-2.19-.43m4.84-1.59c.34-.14.71-.24 1.08-.31l1.28-1.7C17.19 9.89 14.7 9 12 9s-5.19.89-7.2 2.4l1.8 2.4C8.1 12.67 9.97 12 12 12c1.78 0 3.44.5 4.84 1.41M20 16h-2v4h-2l3 3l3-3h-2z"></svg:path>`,
})
export class MdiWifiArrowDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiArrowLeftIcon],svg[mdi-wifi-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12c-2.03 0-3.9.67-5.4 1.8l-1.8-2.4C6.81 9.89 9.3 9 12 9s5.19.89 7.2 2.4l-1.28 1.7c-.37.07-.74.17-1.08.31C15.44 12.5 13.78 12 12 12m9-3l1.8-2.4C19.79 4.34 16.05 3 12 3S4.21 4.34 1.2 6.6L3 9c2.5-1.88 5.62-3 9-3s6.5 1.12 9 3m-9 6c-1.35 0-2.6.45-3.6 1.2L12 21l1.04-1.39c-.04-.2-.04-.4-.04-.61c0-1.34.44-2.57 1.19-3.57c-.69-.27-1.42-.43-2.19-.43m6 1l-3 3l3 3v-2h4v-2h-4z"></svg:path>`,
})
export class MdiWifiArrowLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiArrowLeftRightIcon],svg[mdi-wifi-arrow-left-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12c-2.03 0-3.9.67-5.4 1.8l-1.8-2.4C6.81 9.89 9.3 9 12 9s5.19.89 7.2 2.4l-1.28 1.7c-.37.07-.74.17-1.08.31C15.44 12.5 13.78 12 12 12m9-3l1.8-2.4C19.79 4.34 16.05 3 12 3S4.21 4.34 1.2 6.6L3 9c2.5-1.88 5.62-3 9-3s6.5 1.12 9 3m-9 6c-1.35 0-2.6.45-3.6 1.2L12 21l1.04-1.39c-.04-.2-.04-.4-.04-.61c0-1.34.44-2.57 1.19-3.57c-.69-.27-1.42-.43-2.19-.43m6 3.5L15 21l3 2.5V22h4v-2h-4zm5-1.5l-3-2.5V16h-4v2h4v1.5z"></svg:path>`,
})
export class MdiWifiArrowLeftRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiArrowRightIcon],svg[mdi-wifi-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6C8.62 6 5.5 7.12 3 9L1.2 6.6C4.21 4.34 7.95 3 12 3s7.79 1.34 10.8 3.6L21 9c-2.5-1.88-5.62-3-9-3m4.84 7.41c.34-.14.71-.24 1.08-.31l1.28-1.7C17.19 9.89 14.7 9 12 9s-5.19.89-7.2 2.4l1.8 2.4C8.1 12.67 9.97 12 12 12c1.78 0 3.44.5 4.84 1.41M12 15c-1.35 0-2.6.45-3.6 1.2L12 21l1.04-1.39c-.04-.2-.04-.4-.04-.61c0-1.34.44-2.57 1.19-3.57c-.69-.27-1.42-.43-2.19-.43m11 4l-3-3v2h-4v2h4v2z"></svg:path>`,
})
export class MdiWifiArrowRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiArrowUpIcon],svg[mdi-wifi-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12c-2.03 0-3.9.67-5.4 1.8l-1.8-2.4C6.81 9.89 9.3 9 12 9s5.19.89 7.2 2.4l-1.28 1.7c-.37.07-.74.17-1.08.31C15.44 12.5 13.78 12 12 12m9-3l1.8-2.4C19.79 4.34 16.05 3 12 3S4.21 4.34 1.2 6.6L3 9c2.5-1.88 5.62-3 9-3s6.5 1.12 9 3m-9 6c-1.35 0-2.6.45-3.6 1.2L12 21l1.04-1.39c-.04-.2-.04-.4-.04-.61c0-1.34.44-2.57 1.19-3.57c-.69-.27-1.42-.43-2.19-.43m4 3h2v4h2v-4h2l-3-3z"></svg:path>`,
})
export class MdiWifiArrowUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiArrowUpDownIcon],svg[mdi-wifi-arrow-up-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12c-2.03 0-3.9.67-5.4 1.8l-1.8-2.4C6.81 9.89 9.3 9 12 9s5.19.89 7.2 2.4l-1.28 1.7c-.37.07-.74.17-1.08.31C15.44 12.5 13.78 12 12 12m9-3l1.8-2.4C19.79 4.34 16.05 3 12 3S4.21 4.34 1.2 6.6L3 9c2.5-1.88 5.62-3 9-3s6.5 1.12 9 3m-9 6c-1.35 0-2.6.45-3.6 1.2L12 21l1.04-1.39c-.04-.2-.04-.4-.04-.61c0-1.34.44-2.57 1.19-3.57c-.69-.27-1.42-.43-2.19-.43m5 0l-2.5 3H16v4h2v-4h1.5zm5 5v-4h-2v4h-1.5l2.5 3l2.5-3z"></svg:path>`,
})
export class MdiWifiArrowUpDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiCancelIcon],svg[mdi-wifi-cancel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6C8.62 6 5.5 7.12 3 9L1.2 6.6C4.21 4.34 7.95 3 12 3s7.79 1.34 10.8 3.6L21 9c-2.5-1.88-5.62-3-9-3m3.53 6.72c.89-.46 1.9-.72 2.97-.72h.24l.46-.6C17.19 9.89 14.7 9 12 9s-5.19.89-7.2 2.4l1.8 2.4C8.1 12.67 9.97 12 12 12c1.26 0 2.45.26 3.53.72M12 15c-1.35 0-2.6.45-3.6 1.2L12 21l.34-.46c-.21-.64-.34-1.32-.34-2.04c0-1.26.36-2.42 1-3.42c-.34-.05-.67-.08-1-.08m11 3.5c0 2.5-2 4.5-4.5 4.5S14 21 14 18.5s2-4.5 4.5-4.5s4.5 2 4.5 4.5m-3 2.58L15.92 17c-.27.42-.42.94-.42 1.5c0 1.66 1.34 3 3 3c.56 0 1.08-.15 1.5-.42m1.5-2.58c0-1.66-1.34-3-3-3c-.56 0-1.08.15-1.5.42L21.08 20c.27-.42.42-.94.42-1.5"></svg:path>`,
})
export class MdiWifiCancelIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiCheckIcon],svg[mdi-wifi-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12c-2.03 0-3.9.67-5.4 1.8l-1.8-2.4C6.81 9.89 9.3 9 12 9s5.19.89 7.2 2.4l-1.28 1.7c-.37.07-.74.17-1.08.31C15.44 12.5 13.78 12 12 12m9-3l1.8-2.4C19.79 4.34 16.05 3 12 3S4.21 4.34 1.2 6.6L3 9c2.5-1.88 5.62-3 9-3s6.5 1.12 9 3m-9 6c-1.35 0-2.6.45-3.6 1.2L12 21l1.04-1.39c-.04-.2-.04-.4-.04-.61c0-1.34.44-2.57 1.19-3.57c-.69-.27-1.42-.43-2.19-.43m5.75 4.43l-1.59-1.59L15 19l2.75 3l4.75-4.75l-1.16-1.41z"></svg:path>`,
})
export class MdiWifiCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiCogIcon],svg[mdi-wifi-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12c-2.03 0-3.9.67-5.4 1.8l-1.8-2.4C6.81 9.89 9.3 9 12 9s5.19.89 7.2 2.4l-.46.6c-1.08.05-2.11.33-3.01.81A8.9 8.9 0 0 0 12 12m9-3l1.8-2.4C19.79 4.34 16.05 3 12 3S4.21 4.34 1.2 6.6L3 9c2.5-1.88 5.62-3 9-3s6.5 1.12 9 3m-9 6c-1.35 0-2.6.45-3.6 1.2L12 21l.22-.29a6.9 6.9 0 0 1 .95-5.58c-.38-.08-.77-.13-1.17-.13m11.8 5.4c.1 0 .1.1 0 .2l-1 1.7c-.1.1-.2.1-.3.1l-1.2-.4c-.3.2-.5.3-.8.5l-.2 1.3c0 .1-.1.2-.2.2h-2c-.1 0-.2-.1-.3-.2l-.2-1.3c-.3-.1-.6-.3-.8-.5l-1.2.5c-.1 0-.2 0-.3-.1l-1-1.7c-.1-.1 0-.2.1-.3l1.1-.8v-1l-1.1-.8c-.1-.1-.1-.2-.1-.3l1-1.7c.1-.1.2-.1.3-.1l1.2.5c.3-.2.5-.3.8-.5l.2-1.3c0-.1.1-.2.3-.2h2c.1 0 .2.1.2.2l.2 1.3c.3.1.6.3.9.5l1.2-.5c.1 0 .3 0 .3.1l1 1.7c.1.1 0 .2-.1.3l-1.1.8v1zM20.5 19c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5s.7 1.5 1.5 1.5s1.5-.7 1.5-1.5"></svg:path>`,
})
export class MdiWifiCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiLockIcon],svg[mdi-wifi-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6C8.62 6 5.5 7.12 3 9L1.2 6.6C4.21 4.34 7.95 3 12 3s7.79 1.34 10.8 3.6L21 9c-2.5-1.88-5.62-3-9-3m5.4 4.29A11.98 11.98 0 0 0 4.8 11.4l1.8 2.4C8.1 12.67 9.97 12 12 12c.97 0 1.9.16 2.78.44c.56-.99 1.49-1.76 2.62-2.15m-9 5.91L12 21l1-1.33V17.2c0-.7.27-1.39.7-1.94A6 6 0 0 0 12 15c-1.35 0-2.6.45-3.6 1.2M23 17.3v3.5c0 .6-.6 1.2-1.3 1.2h-5.5c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2v-1.5c0-1.4 1.4-2.5 2.8-2.5s2.8 1.1 2.8 2.5V16c.6 0 1.2.6 1.2 1.3m-2.5-2.8c0-.8-.7-1.3-1.5-1.3s-1.5.5-1.5 1.3V16h3z"></svg:path>`,
})
export class MdiWifiLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiLockOpenIcon],svg[mdi-wifi-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6C8.62 6 5.5 7.12 3 9L1.2 6.6C4.21 4.34 7.95 3 12 3s7.79 1.34 10.8 3.6L21 9c-2.5-1.88-5.62-3-9-3m4.31 3.81A11.96 11.96 0 0 0 4.8 11.4l1.8 2.4a8.94 8.94 0 0 1 7.79-1.47a4.58 4.58 0 0 1 1.92-2.52M8.4 16.2L12 21l1-1.33V17.2c0-.7.27-1.39.7-1.94A6 6 0 0 0 12 15c-1.35 0-2.6.45-3.6 1.2m13.4-.2h-4.3v-2.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3v.5h1.3v-.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V16c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3"></svg:path>`,
})
export class MdiWifiLockOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiMarkerIcon],svg[mdi-wifi-marker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6C8.62 6 5.5 7.12 3 9L1.2 6.6C4.21 4.34 7.95 3 12 3s7.79 1.34 10.8 3.6L21 9c-2.5-1.88-5.62-3-9-3m1 9.09c-.31-.06-.65-.09-1-.09c-1.35 0-2.6.45-3.6 1.2L12 21l1.8-2.4c-.47-1.02-.8-2.1-.8-3.1zM12 9c-2.7 0-5.19.89-7.2 2.4l1.8 2.4C8.1 12.67 9.97 12 12 12c.73 0 1.43.09 2.1.25c.76-1 1.83-1.75 3.07-2.07A11.96 11.96 0 0 0 12 9m10 6.5c0 2.6-3.5 6.5-3.5 6.5S15 18.1 15 15.5c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5m-2.3.1c0-.6-.6-1.2-1.2-1.2s-1.2.5-1.2 1.2c0 .6.5 1.2 1.2 1.2s1.3-.6 1.2-1.2"></svg:path>`,
})
export class MdiWifiMarkerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiMinusIcon],svg[mdi-wifi-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12c-2.03 0-3.9.67-5.4 1.8l-1.8-2.4C6.81 9.89 9.3 9 12 9s5.19.89 7.2 2.4l-1.28 1.7c-.37.07-.74.17-1.08.31C15.44 12.5 13.78 12 12 12m9-3l1.8-2.4C19.79 4.34 16.05 3 12 3S4.21 4.34 1.2 6.6L3 9c2.5-1.88 5.62-3 9-3s6.5 1.12 9 3m-9 6c-1.35 0-2.6.45-3.6 1.2L12 21l1.04-1.39c-.04-.2-.04-.4-.04-.61c0-1.34.44-2.57 1.19-3.57c-.69-.27-1.42-.43-2.19-.43m3 3v2h8v-2z"></svg:path>`,
})
export class MdiWifiMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiOffIcon],svg[mdi-wifi-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.28 3L1 4.27l1.47 1.47c-.43.26-.86.55-1.27.86L3 9c.53-.4 1.08-.75 1.66-1.07l2.23 2.23c-.74.34-1.45.75-2.09 1.24l1.8 2.4c.78-.58 1.66-1.03 2.6-1.33L11.75 15c-1.25.07-2.41.5-3.35 1.2L12 21l2.46-3.27L17.74 21L19 19.72M12 3c-2.15 0-4.2.38-6.1 1.07l2.39 2.4C9.5 6.16 10.72 6 12 6c3.38 0 6.5 1.11 9 3l1.8-2.4C19.79 4.34 16.06 3 12 3m0 6c-.38 0-.75 0-1.12.05l3.19 3.2c1.22.28 2.36.82 3.33 1.55l1.8-2.4C17.2 9.89 14.7 9 12 9"></svg:path>`,
})
export class MdiWifiOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiPlusIcon],svg[mdi-wifi-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6C8.62 6 5.5 7.12 3 9L1.2 6.6C4.21 4.34 7.95 3 12 3s7.79 1.34 10.8 3.6L21 9c-2.5-1.88-5.62-3-9-3m0 9c-1.35 0-2.6.45-3.6 1.2L12 21l1.04-1.39c-.04-.2-.04-.4-.04-.61c0-1.34.44-2.57 1.19-3.57c-.69-.27-1.42-.43-2.19-.43m4.84-1.59c.34-.14.71-.24 1.08-.31l1.28-1.7C17.19 9.89 14.7 9 12 9s-5.19.89-7.2 2.4l1.8 2.4C8.1 12.67 9.97 12 12 12c1.78 0 3.44.5 4.84 1.41M20 18v-3h-2v3h-3v2h3v3h2v-3h3v-2z"></svg:path>`,
})
export class MdiWifiPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiRefreshIcon],svg[mdi-wifi-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12c-2.03 0-3.9.67-5.4 1.8l-1.8-2.4C6.81 9.89 9.3 9 12 9s5.19.89 7.2 2.4l-.46.6h-.24c-1.07 0-2.08.26-2.97.72A9 9 0 0 0 12 12m9-3l1.8-2.4C19.79 4.34 16.05 3 12 3S4.21 4.34 1.2 6.6L3 9c2.5-1.88 5.62-3 9-3s6.5 1.12 9 3m-9 6c-1.35 0-2.6.45-3.6 1.2L12 21l.34-.46c-.21-.64-.34-1.32-.34-2.04c0-1.26.36-2.42 1-3.42c-.34-.05-.67-.08-1-.08m6-.5c-2.21 0-4 1.79-4 4s1.79 4 4 4c1.68 0 3.12-1.03 3.71-2.5H20a2.5 2.5 0 1 1-.23-3.27L18 18.5h4v-4l-1.17 1.17A4 4 0 0 0 18 14.5"></svg:path>`,
})
export class MdiWifiRefreshIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiRemoveIcon],svg[mdi-wifi-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 12c-2.03 0-3.9.67-5.4 1.8l-1.8-2.4C6.81 9.89 9.3 9 12 9s5.19.89 7.2 2.4l-1.28 1.7c-.37.07-.74.17-1.08.31C15.44 12.5 13.78 12 12 12m9-3l1.8-2.4C19.79 4.34 16.05 3 12 3S4.21 4.34 1.2 6.6L3 9c2.5-1.88 5.62-3 9-3s6.5 1.12 9 3m-9 6c-1.35 0-2.6.45-3.6 1.2L12 21l1.04-1.39c-.04-.2-.04-.4-.04-.61c0-1.34.44-2.57 1.19-3.57c-.69-.27-1.42-.43-2.19-.43m9.12.46L19 17.59l-2.12-2.12l-1.41 1.41L17.59 19l-2.12 2.12l1.41 1.42L19 20.41l2.12 2.13l1.42-1.42L20.41 19l2.13-2.12z"></svg:path>`,
})
export class MdiWifiRemoveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiSettingsIcon],svg[mdi-wifi-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 20l-3.6-4.8c1-.75 2.25-1.2 3.6-1.2s2.6.45 3.6 1.2zm-7.2-9.6l1.8 2.4C8.1 11.67 9.97 11 12 11s3.9.67 5.4 1.8l1.8-2.4C17.19 8.89 14.7 8 12 8s-5.19.89-7.2 2.4M12 2C7.95 2 4.21 3.34 1.2 5.6L3 8c2.5-1.88 5.62-3 9-3s6.5 1.12 9 3l1.8-2.4C19.79 3.34 16.05 2 12 2M7 24h2v-2H7zm8 0h2v-2h-2zm-4 0h2v-2h-2z"></svg:path>`,
})
export class MdiWifiSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiStarIcon],svg[mdi-wifi-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6C8.6 6 5.5 7.1 3 9L1.2 6.6C4.2 4.3 8 3 12 3s7.8 1.3 10.8 3.6L21 9c-2.5-1.9-5.6-3-9-3m1 13c0-1.3.4-2.6 1.2-3.6c-.7-.2-1.4-.4-2.2-.4c-1.3 0-2.6.5-3.6 1.2L12 21l1-1.4zm3.8-5.6c.3-.1.7-.2 1.1-.3l1.3-1.7C17.2 9.9 14.7 9 12 9s-5.2.9-7.2 2.4l1.8 2.4C8.1 12.7 10 12 12 12c1.8 0 3.4.5 4.8 1.4m-.3 9.2l.7-2.8l-2.2-1.9l2.9-.2L19 15l1.1 2.6l2.9.2l-2.2 1.9l.7 2.8l-2.5-1.4z"></svg:path>`,
})
export class MdiWifiStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiStrength1Icon],svg[mdi-wifi-strength-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3C7.79 3 3.7 4.41.38 7C4.41 12.06 7.89 16.37 12 21.5c4.08-5.08 8.24-10.26 11.65-14.5C20.32 4.41 16.22 3 12 3m0 2c3.07 0 6.09.86 8.71 2.45l-5.1 6.36A8.4 8.4 0 0 0 12 13c-1.25 0-2.5.28-3.61.8L3.27 7.44C5.91 5.85 8.93 5 12 5"></svg:path>`,
})
export class MdiWifiStrength1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiStrength1AlertIcon],svg[mdi-wifi-strength-1-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3C7.8 3 3.7 4.4.4 7c4 5.1 7.5 9.4 11.6 14.5c2.4-3 4.7-5.8 7-8.7V9.6l-3.4 4.2c-1.1-.5-2.4-.8-3.6-.8s-2.5.3-3.6.8L3.3 7.4C5.9 5.8 8.9 5 12 5s6.1.9 8.7 2.4l-.4.6h2.6c.2-.3.6-.7.8-1c-3.4-2.6-7.5-4-11.7-4m9 7v6h2v-6m-2 8v2h2v-2"></svg:path>`,
})
export class MdiWifiStrength1AlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiStrength1LockIcon],svg[mdi-wifi-strength-1-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13c.8 0 1.61.13 2.38.36c-.1.37-.18.75-.18 1.14v.24c-.7.6-1.2 1.5-1.2 2.46v3.04l-1 1.26C7.88 16.37 4.39 12.06.365 7C3.69 4.41 7.78 3 12 3c4.2 0 8.31 1.41 11.64 4l-2.73 3.39c-.59-.25-1.23-.39-1.91-.39c-.13 0-.25.03-.38.04l2.08-2.59C18.08 5.86 15.06 5 12 5s-6.1.85-8.74 2.44l5.12 6.36c1.12-.52 2.36-.8 3.62-.8m11 4.3v3.5c0 .6-.6 1.2-1.3 1.2h-5.5c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2v-1.5c0-1.4 1.4-2.5 2.8-2.5s2.8 1.1 2.8 2.5V16c.6 0 1.2.6 1.2 1.3m-2.5-2.8c0-.8-.7-1.3-1.5-1.3s-1.5.5-1.5 1.3V16h3z"></svg:path>`,
})
export class MdiWifiStrength1LockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiStrength1LockOpenIcon],svg[mdi-wifi-strength-1-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13c.74 0 1.5.12 2.22.31c0 .07-.02.13-.02.19v1.24c-.7.6-1.2 1.5-1.2 2.46v3.04l-1 1.26C7.88 16.37 4.39 12.06.365 7C3.69 4.41 7.78 3 12 3c4.2 0 8.31 1.41 11.64 4L21.5 9.69a5.2 5.2 0 0 0-2.08-.65l1.28-1.59C18.08 5.86 15.06 5 12 5s-6.1.85-8.74 2.44l5.12 6.36c1.12-.52 2.36-.8 3.62-.8m9.8 3h-4.3v-2.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3v.5h1.3v-.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V16c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3"></svg:path>`,
})
export class MdiWifiStrength1LockOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiStrength2Icon],svg[mdi-wifi-strength-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3C7.79 3 3.7 4.41.38 7C4.41 12.06 7.89 16.37 12 21.5c4.08-5.08 8.24-10.26 11.65-14.5C20.32 4.41 16.22 3 12 3m0 2c3.07 0 6.09.86 8.71 2.45l-3.21 3.98C16.26 10.74 14.37 10 12 10c-2.38 0-4.26.75-5.5 1.43L3.27 7.44C5.91 5.85 8.93 5 12 5"></svg:path>`,
})
export class MdiWifiStrength2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiStrength2AlertIcon],svg[mdi-wifi-strength-2-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3C7.8 3 3.7 4.4.4 7c4 5.1 7.5 9.4 11.6 14.5c2.4-3 4.7-5.8 7-8.7V9.6l-1.5 1.8c-1.2-.7-3.1-1.4-5.5-1.4s-4.3.8-5.5 1.4l-3.2-4C5.9 5.8 8.9 5 12 5s6.1.9 8.7 2.4l-.4.6h2.6c.2-.3.6-.7.8-1c-3.4-2.6-7.5-4-11.7-4m9 7v6h2v-6m-2 8v2h2v-2"></svg:path>`,
})
export class MdiWifiStrength2AlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiStrength2LockIcon],svg[mdi-wifi-strength-2-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.2 14.5v.24c-.7.6-1.2 1.5-1.2 2.46v3.04l-1 1.26C7.88 16.37 4.39 12.06.365 7C3.69 4.41 7.78 3 12 3c4.2 0 8.31 1.41 11.64 4l-2.73 3.39c-.59-.25-1.23-.39-1.91-.39c-.13 0-.26.03-.39.04l2.09-2.59C18.08 5.86 15.06 5 12 5s-6.1.85-8.74 2.44l3.24 3.99C7.73 10.75 9.61 10 12 10c1.68 0 3.12.38 4.26.84c-1.23.83-2.06 2.16-2.06 3.66m8.8 2.8v3.5c0 .6-.6 1.2-1.3 1.2h-5.5c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2v-1.5c0-1.4 1.4-2.5 2.8-2.5s2.8 1.1 2.8 2.5V16c.6 0 1.2.6 1.2 1.3m-2.5-2.8c0-.8-.7-1.3-1.5-1.3s-1.5.5-1.5 1.3V16h3z"></svg:path>`,
})
export class MdiWifiStrength2LockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiStrength2LockOpenIcon],svg[mdi-wifi-strength-2-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.44 10.55c-.76.8-1.24 1.83-1.24 2.95v1.24c-.7.6-1.2 1.5-1.2 2.46v3.04l-1 1.26C7.88 16.37 4.39 12.06.365 7C3.69 4.41 7.78 3 12 3c4.2 0 8.31 1.41 11.64 4L21.5 9.69c-.64-.36-1.34-.59-2.09-.65l1.29-1.59C18.08 5.86 15.06 5 12 5s-6.1.85-8.74 2.44l3.24 3.99C7.73 10.75 9.61 10 12 10c1.29 0 2.45.23 3.44.55M21.8 16h-4.3v-2.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3v.5h1.3v-.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V16c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3"></svg:path>`,
})
export class MdiWifiStrength2LockOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiStrength3Icon],svg[mdi-wifi-strength-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3C7.79 3 3.7 4.41.38 7C4.41 12.06 7.89 16.37 12 21.5c4.08-5.08 8.24-10.26 11.65-14.5C20.32 4.41 16.22 3 12 3m0 2c3.07 0 6.09.86 8.71 2.45l-1.94 2.43C17.26 9 14.88 8 12 8C9 8 6.68 9 5.21 9.84l-1.94-2.4C5.91 5.85 8.93 5 12 5"></svg:path>`,
})
export class MdiWifiStrength3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiStrength3AlertIcon],svg[mdi-wifi-strength-3-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3C7.8 3 3.7 4.4.4 7c4 5.1 7.5 9.4 11.6 14.5c2.4-3 4.7-5.8 7-8.7V9.6l-.2.3C17.3 9 14.9 8 12 8C9 8 6.7 9 5.2 9.8L3.3 7.4C5.9 5.8 8.9 5 12 5s6.1.9 8.7 2.4l-.4.6h2.6c.2-.3.6-.7.8-1c-3.4-2.6-7.5-4-11.7-4m9 7v6h2v-6m-2 8v2h2v-2"></svg:path>`,
})
export class MdiWifiStrength3AlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiStrength3LockIcon],svg[mdi-wifi-strength-3-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 10c.68 0 1.32.14 1.91.39L23.64 7C20.31 4.41 16.2 3 12 3C7.78 3 3.69 4.41.365 7C4.39 12.06 7.88 16.37 12 21.5l1-1.26V17.2c0-.96.5-1.86 1.2-2.46v-.24c0-2.44 2.2-4.5 4.8-4.5m-7-2C9 8 6.67 9 5.2 9.84l-1.94-2.4C5.9 5.85 8.91 5 12 5s6.08.86 8.7 2.45l-1.94 2.43C17.25 9 14.87 8 12 8m9.8 8v-1.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V16c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3m-1.3 0h-3v-1.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3z"></svg:path>`,
})
export class MdiWifiStrength3LockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiStrength3LockOpenIcon],svg[mdi-wifi-strength-3-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.2 13.5v1.24c-.7.6-1.2 1.5-1.2 2.46v3.04l-1 1.26C7.88 16.37 4.39 12.06.365 7C3.69 4.41 7.78 3 12 3c4.2 0 8.31 1.41 11.64 4L21.5 9.69a5.2 5.2 0 0 0-2.08-.65l1.28-1.59C18.08 5.86 15.06 5 12 5s-6.1.85-8.74 2.44l1.94 2.4C6.67 9 9 8 12 8c2.18 0 4.08.58 5.53 1.25c-1.9.6-3.33 2.29-3.33 4.25m7.6 2.5h-4.3v-2.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3v.5h1.3v-.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V16c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3"></svg:path>`,
})
export class MdiWifiStrength3LockOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiStrength4Icon],svg[mdi-wifi-strength-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3C7.79 3 3.7 4.41.38 7C4.41 12.06 7.89 16.37 12 21.5c4.08-5.08 8.24-10.26 11.65-14.5C20.32 4.41 16.22 3 12 3"></svg:path>`,
})
export class MdiWifiStrength4Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiStrength4AlertIcon],svg[mdi-wifi-strength-4-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3C7.8 3 3.7 4.4.4 7c4 5.1 7.5 9.4 11.6 14.5c2.4-3 4.7-5.8 7-8.7V8h3.8c.2-.3.6-.7.8-1c-3.3-2.6-7.4-4-11.6-4m9 7v6h2v-6m-2 8v2h2v-2"></svg:path>`,
})
export class MdiWifiStrength4AlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiStrength4LockIcon],svg[mdi-wifi-strength-4-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.2 14.5v.24c-.7.6-1.2 1.5-1.2 2.46v3.04l-1 1.26C7.88 16.37 4.39 12.06.365 7C3.69 4.41 7.78 3 12 3c4.2 0 8.31 1.41 11.64 4l-2.73 3.39c-.59-.25-1.23-.39-1.91-.39c-2.6 0-4.8 2.06-4.8 4.5m8.8 2.8v3.5c0 .6-.6 1.2-1.3 1.2h-5.5c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2v-1.5c0-1.4 1.4-2.5 2.8-2.5s2.8 1.1 2.8 2.5V16c.6 0 1.2.6 1.2 1.3m-2.5-2.8c0-.8-.7-1.3-1.5-1.3s-1.5.5-1.5 1.3V16h3z"></svg:path>`,
})
export class MdiWifiStrength4LockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiStrength4LockOpenIcon],svg[mdi-wifi-strength-4-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.2 13.5v1.24c-.7.6-1.2 1.5-1.2 2.46v3.04l-1 1.26C7.88 16.37 4.39 12.06.365 7C3.69 4.41 7.78 3 12 3c4.2 0 8.31 1.41 11.64 4L21.5 9.69C20.75 9.26 19.9 9 19 9c-2.6 0-4.8 2.06-4.8 4.5m7.6 2.5h-4.3v-2.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3v.5h1.3v-.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V16c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3"></svg:path>`,
})
export class MdiWifiStrength4LockOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiStrengthAlertOutlineIcon],svg[mdi-wifi-strength-alert-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3C7.8 3 3.7 4.4.4 7c3.9 4.8 7.8 9.7 11.6 14.5c2.3-2.9 4.7-5.8 7-8.7V9.6l-7 8.7L3.3 7.4C5.9 5.8 8.9 5 12 5s6.1.9 8.7 2.4l-.4.6h2.6c.3-.3.5-.7.8-1c-3.4-2.6-7.5-4-11.7-4m9 7v6h2v-6m-2 8v2h2v-2"></svg:path>`,
})
export class MdiWifiStrengthAlertOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiStrengthLockOpenOutlineIcon],svg[mdi-wifi-strength-lock-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.65 7h-.01c-.72.9-1.44 1.79-2.14 2.69c-.63-.36-1.33-.58-2.07-.65l1.28-1.59A16.8 16.8 0 0 0 12 5c-3.09 0-6.1.85-8.73 2.44L12 18.3l1-1.3v3.25l-1 1.25C8.13 16.66 4.24 11.83.355 7h.02A18.92 18.92 0 0 1 12 3c4.22 0 8.32 1.41 11.65 4m-1.85 9h-4.3v-2.5c0-.8.7-1.3 1.5-1.3s1.5.5 1.5 1.3v.5h1.3v-.5c0-1.4-1.4-2.5-2.8-2.5s-2.8 1.1-2.8 2.5V16c-.6 0-1.2.6-1.2 1.2v3.5c0 .7.6 1.3 1.2 1.3h5.5c.7 0 1.3-.6 1.3-1.2v-3.5c0-.7-.6-1.3-1.2-1.3"></svg:path>`,
})
export class MdiWifiStrengthLockOpenOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiStrengthLockOutlineIcon],svg[mdi-wifi-strength-lock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.65 7h-.01l-2.73 3.39c-.59-.25-1.23-.39-1.91-.39c-.13 0-.25.03-.37.04l2.08-2.59A16.8 16.8 0 0 0 12 5c-3.09 0-6.1.85-8.73 2.44L12 18.3l1-1.3v3.25l-1 1.25C8.13 16.66 4.24 11.83.355 7h.02A18.92 18.92 0 0 1 12 3c4.22 0 8.32 1.41 11.65 4M23 17.3v3.5c0 .6-.6 1.2-1.3 1.2h-5.5c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2v-1.5c0-1.4 1.4-2.5 2.8-2.5s2.8 1.1 2.8 2.5V16c.6 0 1.2.6 1.2 1.3m-2.5-2.8c0-.8-.7-1.3-1.5-1.3s-1.5.5-1.5 1.3V16h3z"></svg:path>`,
})
export class MdiWifiStrengthLockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiStrengthOffIcon],svg[mdi-wifi-strength-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.27 1.44L2 2.72l2.05 2.05C2.75 5.37 1.5 6.11.38 7C4.41 12.06 12 21.5 12 21.5l3.91-4.87l3.32 3.32l1.27-1.27M12 3c-1.4 0-2.79.17-4.14.5l10.32 10.31C20 11.5 22.05 9 23.65 7C20.32 4.41 16.22 3 12 3"></svg:path>`,
})
export class MdiWifiStrengthOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiStrengthOffOutlineIcon],svg[mdi-wifi-strength-off-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.27 1.44L2 2.72l2.05 2.05C2.75 5.37 1.5 6.11.38 7C4.2 11.8 8.14 16.67 12 21.5l3.91-4.87l3.32 3.32l1.27-1.27C14.87 13.04 3.27 1.44 3.27 1.44M12 3c-1.4 0-2.79.17-4.14.5l1.7 1.69C10.37 5.07 11.18 5 12 5c3.07 0 6.09.86 8.71 2.45l-3.95 4.93l1.42 1.42C20.08 11.43 22 9 23.65 7C20.32 4.41 16.22 3 12 3M5.57 6.29l8.93 8.92L12 18.3L3.27 7.44C4 7 4.78 6.61 5.57 6.29"></svg:path>`,
})
export class MdiWifiStrengthOffOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiStrengthOutlineIcon],svg[mdi-wifi-strength-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3C7.79 3 3.7 4.41.38 7H.36C4.24 11.83 8.13 16.66 12 21.5c3.89-4.84 7.77-9.67 11.64-14.5h.01C20.32 4.41 16.22 3 12 3m0 2c3.07 0 6.09.86 8.71 2.45L12 18.3L3.27 7.44C5.9 5.85 8.92 5 12 5"></svg:path>`,
})
export class MdiWifiStrengthOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWifiSyncIcon],svg[mdi-wifi-sync-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6C8.62 6 5.5 7.12 3 9L1.2 6.6C4.21 4.34 7.95 3 12 3s7.79 1.34 10.8 3.6L21 9c-2.5-1.88-5.62-3-9-3m0 9c-1.35 0-2.6.45-3.6 1.2L12 21l1.26-1.68A6.8 6.8 0 0 1 13 17.5c0-.81.16-1.59.43-2.31c-.46-.11-.93-.19-1.43-.19m3.23-2.39a6.5 6.5 0 0 1 3.47-1.56A11.9 11.9 0 0 0 12 9c-2.7 0-5.19.89-7.2 2.4l1.8 2.4a8.94 8.94 0 0 1 8.63-1.19M19 20a2.5 2.5 0 0 1-2.5-2.5c0-.4.09-.78.26-1.12l-1.09-1.09c-.42.63-.67 1.39-.67 2.21c0 2.21 1.79 4 4 4V23l2.25-2.25L19 18.5zm0-6.5V12l-2.25 2.25L19 16.5V15a2.5 2.5 0 0 1 2.5 2.5c0 .4-.09.78-.26 1.12l1.09 1.09c.42-.63.67-1.39.67-2.21c0-2.21-1.79-4-4-4"></svg:path>`,
})
export class MdiWifiSyncIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWikipediaIcon],svg[mdi-wikipedia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.97 18.95l-2.56-6.03c-1.02 1.99-2.14 4.08-3.1 6.03c-.01.01-.47 0-.47 0C7.37 15.5 5.85 12.1 4.37 8.68C4.03 7.84 2.83 6.5 2 6.5v-.45h5.06v.45c-.6 0-1.62.4-1.36 1.05c.72 1.54 3.24 7.51 3.93 9.03c.47-.94 1.8-3.42 2.37-4.47c-.45-.88-1.87-4.18-2.29-5c-.32-.54-1.13-.61-1.75-.61c0-.15.01-.25 0-.44l4.46.01v.4c-.61.03-1.18.24-.92.82c.6 1.24.95 2.13 1.5 3.28c.17-.34 1.07-2.19 1.5-3.16c.26-.65-.13-.91-1.21-.91c.01-.12.01-.33.01-.43c1.39-.01 3.48-.01 3.85-.02v.42c-.71.03-1.44.41-1.82.99L13.5 11.3c.18.51 1.96 4.46 2.15 4.9l3.85-8.83c-.3-.72-1.16-.87-1.5-.87v-.45l4 .03v.42c-.88 0-1.43.5-1.75 1.25c-.8 1.79-3.25 7.49-4.85 11.2z"></svg:path>`,
})
export class MdiWikipediaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWindPowerIcon],svg[mdi-wind-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h6v2H4zM1 7h5v2H1zm2 12h5v2H3zm10.73-8.39c.77.23 1.3.78 1.57 1.46l4.27-7.11c.65-1.08.3-2.46-.78-3.13c-.87-.52-1.99-.41-2.73.29l-3.43 3.21c-.4.37-.63.9-.63 1.45v3.93c.36-.15 1-.33 1.73-.1m-3.12 1.66c.16-.52.48-.96.89-1.27H3.28C2 11 1 12 1 13.28c0 1.02.67 1.91 1.65 2.19l4.51 1.29c.53.15 1.1.08 1.58-.21l2.69-1.61a2.49 2.49 0 0 1-.82-2.67m11.6 6.34l-2.28-4.11a2.07 2.07 0 0 0-1.26-.96l-3.17-.8c0 .32 0 .66-.11.99A2.48 2.48 0 0 1 13 15.5c-.61 0-1-.22-1-.22V21c-1.1 0-2 .9-2 2h6c0-1.1-.9-2-2-2v-4.28l4.61 4.61c.89.89 2.33.89 3.22 0c.72-.72.88-1.83.38-2.72m-9.65-4.18c.79.24 1.63-.2 1.87-1c.24-.79-.2-1.63-1-1.87c-.79-.24-1.63.2-1.87 1c-.24.79.21 1.63 1 1.87"></svg:path>`,
})
export class MdiWindPowerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWindPowerOutlineIcon],svg[mdi-wind-power-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h6v2H4zM1 7h5v2H1zm2 12h5v2H3zm19.21-.39l-2.28-4.11a2.07 2.07 0 0 0-1.26-.96L16 12.87c-.04-.47-.16-.92-.39-1.33l3.96-6.59c.65-1.08.3-2.48-.78-3.13a2.29 2.29 0 0 0-2.73.3l-3.43 3.21c-.4.37-.63.9-.63 1.45v3.4c-.47.17-.89.45-1.23.82H3.28C2 11 1 12 1 13.28c0 1.02.67 1.91 1.65 2.19l4.51 1.29c.18.05.37.08.55.08c.36 0 .72-.1 1.03-.29L11 15.21c.27.26.61.47 1 .61V21c-1.1 0-2 .9-2 2h6c0-1.1-.9-2-2-2v-4.28l4.61 4.61c.45.45 1.03.67 1.61.67s1.17-.22 1.61-.67c.72-.72.88-1.83.38-2.72M7.72 14.84L3.2 13.55c-.12-.05-.2-.15-.2-.27c0-.15.13-.28.28-.28H10c0 .15 0 .3.04.44zM13 14c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m1-3.86V6.78l3.43-3.21c.07-.07.19-.12.34-.04c.13.08.18.25.1.38l-3.74 6.24zm6.42 9.78c-.05.05-.24.16-.42 0l-4.83-4.85c.08-.07.16-.18.24-.28l2.78.71l2.28 4.08c.06.11.03.25-.05.34"></svg:path>`,
})
export class MdiWindPowerOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWindTurbineIcon],svg[mdi-wind-turbine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.33 11.67l2.88 2.91c1.41-1.42 0-2.83 0-2.83l-1.49-1.51c.18-.38.28-.8.28-1.24c0-1.05-.54-1.97-1.36-2.5L15 2.11c-1.91-.58-2.5 1.33-2.5 1.33l-.81 2.59c-1.23.13-2.23.97-2.56 2.15L4.67 9.63c.64 1.9 2.53 1.27 2.53 1.27l2.07-.67c.34.74.96 1.31 1.73 1.59V19s-2 0-2 2v1h6v-1s0-2-2-2v-7.18c.12-.04.23-.1.33-.15M10.5 9A1.5 1.5 0 0 1 12 7.5A1.5 1.5 0 0 1 13.5 9a1.5 1.5 0 0 1-1.5 1.5A1.5 1.5 0 0 1 10.5 9"></svg:path>`,
})
export class MdiWindTurbineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWindTurbineAlertIcon],svg[mdi-wind-turbine-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.33 11.67l2.88 2.91c1.41-1.42 0-2.83 0-2.83l-1.49-1.51c.18-.38.28-.8.28-1.24c0-1.05-.54-1.97-1.36-2.5L14 2.11c-1.91-.58-2.5 1.33-2.5 1.33l-.81 2.59c-1.23.13-2.23.97-2.56 2.15L3.67 9.63c.64 1.9 2.53 1.27 2.53 1.27l2.07-.67c.34.74.96 1.31 1.73 1.59V19s-2 0-2 2v1h6v-1s0-2-2-2v-7.18c.12-.04.23-.1.33-.15M9.5 9c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S9.5 9.83 9.5 9m8.5 3V7h2v6h-2m0 4v-2h2v2z"></svg:path>`,
})
export class MdiWindTurbineAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWindTurbineCheckIcon],svg[mdi-wind-turbine-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.33 11.67l2.88 2.91c1.41-1.42 0-2.83 0-2.83l-1.49-1.51c.18-.38.28-.8.28-1.24c0-1.05-.54-1.97-1.36-2.5L13 2.11c-1.91-.58-2.5 1.33-2.5 1.33l-.81 2.59c-1.23.13-2.23.97-2.56 2.15L2.67 9.63c.64 1.9 2.53 1.27 2.53 1.27l2.07-.67c.34.74.96 1.31 1.73 1.59V19s-2 0-2 2v1h6v-1s0-2-2-2v-7.18c.12-.04.23-.1.33-.15M8.5 9c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5S8.5 9.83 8.5 9m8.25 12.16l-2.75-3L15.16 17l1.59 1.59L20.34 15l1.16 1.41z"></svg:path>`,
})
export class MdiWindTurbineCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWindowCloseIcon],svg[mdi-window-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.46 12L19 17.54V19h-1.46L12 13.46L6.46 19H5v-1.46L10.54 12L5 6.46V5h1.46L12 10.54L17.54 5H19v1.46z"></svg:path>`,
})
export class MdiWindowCloseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWindowClosedIcon],svg[mdi-window-closed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 11h4V9h4v2h4V4H6zm12 2H6v7h12zM6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiWindowClosedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWindowClosedVariantIcon],svg[mdi-window-closed-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 20V2H3v18H1v3h22v-3M19 4v7h-6V4M5 4h6v7H5m0 9v-7h6v7m2 0v-7h6v7Z"></svg:path>`,
})
export class MdiWindowClosedVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWindowMaximizeIcon],svg[mdi-window-maximize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4h16v16H4zm2 4v10h12V8z"></svg:path>`,
})
export class MdiWindowMaximizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWindowMinimizeIcon],svg[mdi-window-minimize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 14H4v-4h16"></svg:path>`,
})
export class MdiWindowMinimizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWindowOpenIcon],svg[mdi-window-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8h4V6h4v2h4V4H6zm12 2H6v5h12zM6 20h12v-3H6zM6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiWindowOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWindowOpenVariantIcon],svg[mdi-window-open-variant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 20V2H3v18H1v3h22v-3M19 4v7h-2V4M5 4h2v7H5m0 9v-7h2v7m2 0V4h6v16m2 0v-7h2v7Z"></svg:path>`,
})
export class MdiWindowOpenVariantIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWindowRestoreIcon],svg[mdi-window-restore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8h4V4h12v12h-4v4H4zm12 0v6h2V6h-8v2zM6 12v6h8v-6z"></svg:path>`,
})
export class MdiWindowRestoreIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWindowShutterIcon],svg[mdi-window-shutter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h18v4h-2v12h-2V8H7v12H5V8H3zm5 5h8v2H8zm0 3h8v2H8zm0 3h8v2H8zm0 3h8v2H8z"></svg:path>`,
})
export class MdiWindowShutterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWindowShutterAlertIcon],svg[mdi-window-shutter-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h18v4h-2v12h-2V8H6v12H4V8H2zm5 5h8v2H7zm0 3h8v2H7zm13 7v-2h2v2zm0-4v-5h2v5z"></svg:path>`,
})
export class MdiWindowShutterAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWindowShutterAutoIcon],svg[mdi-window-shutter-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 14h-2l-3.2 9h1.9l.7-2h3.2l.7 2h1.9zm-2.2 5.7L19 16l1.2 3.7zM7 9h8v2H7zm0 3h8v2H7zm0 3h8v1.5l-.2.5H7zm6.7 5H7v-2h7.5zM16 8H6v12H4V8H2V4h18v4h-2v4h-1.4l-.5 1.3l-.1.4z"></svg:path>`,
})
export class MdiWindowShutterAutoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWindowShutterCogIcon],svg[mdi-window-shutter-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.7 18.6v-1l1.1-.8c.1-.1.2-.2.1-.3l-1-1.7c0-.1-.2-.1-.3-.1l-1.2.5c-.3-.2-.6-.4-.9-.5l-.2-1.3c0-.1-.1-.2-.2-.2h-2c-.2 0-.3.1-.3.2l-.2 1.3c-.3.2-.5.3-.8.5l-1.2-.5c-.1 0-.2 0-.3.1l-1 1.7c0 .1 0 .2.1.3l1.1.8v1l-1.1.8c-.1.1-.2.2-.1.3l1 1.7c.1.1.2.1.3.1l1.2-.5c.2.2.5.4.8.5l.2 1.3c.1.1.2.2.3.2h2c.1 0 .2-.1.2-.2l.2-1.3c.3-.2.5-.3.8-.5l1.2.4c.1 0 .2 0 .3-.1l1-1.7c.1-.1.1-.2 0-.2zm-3.7.9c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5M8 9h8v2H8zm9-1H7v12H5V8H3V4h18v4h-2v3.1c-.3 0-.7-.1-1-.1s-.7 0-1 .1zm-5.7 12H8v-2h3c0 .7.1 1.4.3 2M8 12h6.4c-.8.5-1.6 1.2-2.1 2H8zm0 3h3.7c-.3.6-.5 1.3-.6 2H8z"></svg:path>`,
})
export class MdiWindowShutterCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWindowShutterOpenIcon],svg[mdi-window-shutter-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h18v4h-2v12h-2V8H7v12H5V8H3zm5 5h8v2H8z"></svg:path>`,
})
export class MdiWindowShutterOpenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWindowShutterSettingsIcon],svg[mdi-window-shutter-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h18v4h-2v12h-2V8H7v12H5V8H3zm5 5h8v2H8zm0 3h8v2H8zm0 3h8v2H8zm0 3h8v2H8zm5 4h-2v2h2zm4 0h-2v2h2zm-8 0H7v2h2z"></svg:path>`,
})
export class MdiWindowShutterSettingsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWindsockIcon],svg[mdi-windsock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5v8l15-2V7zm3 1.91l3 .4v3.38l-3 .4zm6 .8l3 .4v1.78l-3 .4zM5 10v1h1v1H5v9H3V4c0-.55.45-1 1-1s1 .45 1 1v2h1v1H5z"></svg:path>`,
})
export class MdiWindsockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWiperIcon],svg[mdi-wiper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4C5 4 2 9 2 9l7 7s.5-.9 1.4-1.5l.3 2c-.4.3-.7.9-.7 1.5a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-.9-.5-1.6-1.3-1.9l-.4-2.1c1.8.2 2.7 2 2.7 2l7-7s-3-5-10-5m3.1 9.1c-.8-.6-1.8-1.1-3.1-1.1l-1-5.9c.3-.1.7-.1 1-.1c3.7 0 6.1 1.7 7.3 2.9zm-6.2 0L4.7 8.9C5.5 8 7 7 9 6.4l1 6c-.4.2-.8.4-1.1.7"></svg:path>`,
})
export class MdiWiperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWiperWashIcon],svg[mdi-wiper-wash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 6c0-.3.1-1.4.8-2.2L12 2.4l-1.8 1.5c.7.7.8 1.8.8 2.1c-6.3.4-9 5-9 5l7 7s.7-1.3 2-1.8v2.1c-.6.3-1 1-1 1.7a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-.7-.4-1.4-1-1.7v-2.1c1.3.5 2 1.8 2 1.8l7-7s-2.7-4.5-9-5m-2 8.1c-.8.2-1.5.5-2.1 1l-4.2-4.2C5.8 9.8 7.8 8.3 11 8.1zm4.1 1c-.6-.4-1.3-.8-2.1-1v-6c3.2.3 5.2 1.7 6.3 2.8zM18 1.3l-.7 1.9c-.7-.3-1.8-.3-2.6 0L14 1.3c1.2-.4 2.8-.4 4 0M21 6h-2s0-1.3-.8-2.1l1.5-1.3C21 4 21 5.9 21 6M4.2 2.6l1.5 1.3C5 4.7 5 6 5 6H3c0-.1 0-2 1.2-3.4M10 1.3l-.7 1.9c-.7-.3-1.8-.3-2.6 0L6 1.3c1.2-.4 2.8-.4 4 0"></svg:path>`,
})
export class MdiWiperWashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWiperWashAlertIcon],svg[mdi-wiper-wash-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 6c0-.3.1-1.4.8-2.2L10 2.4L8.2 3.9c.7.7.8 1.8.8 2.1c-6.3.4-9 5-9 5l7 7s.7-1.3 2-1.8v2.1c-.6.3-1 1-1 1.7a2 2 0 1 0 4 0c0-.7-.4-1.4-1-1.7v-2.1c1.3.5 2 1.8 2 1.8l7-7s-2.7-4.5-9-5m-2 8.1c-.8.2-1.5.5-2.1 1l-4.2-4.2C3.8 9.8 5.8 8.3 9 8.1zm4.1 1c-.6-.4-1.3-.8-2.1-1v-6c3.2.3 5.2 1.7 6.3 2.8zM16 1.3l-.7 1.9c-.7-.3-1.8-.3-2.6 0L12 1.3c1.2-.4 2.8-.4 4 0M19 6h-2s0-1.3-.8-2.1l1.5-1.3C19 4 19 5.9 19 6M2.2 2.6l1.5 1.3C3 4.7 3 6 3 6H1c0-.1 0-2 1.2-3.4M8 1.3l-.7 1.9c-.7-.3-1.8-.3-2.6 0L4 1.3c1.2-.4 2.8-.4 4 0M22 12V7h2v6h-2m0 4h2v-2h-2"></svg:path>`,
})
export class MdiWiperWashAlertIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWizardHatIcon],svg[mdi-wizard-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 22H3v-2h18zm-2-3H5l6.1-16.4q.3-.6.9-.6l6 3h-4.1zM10 7.5l1.04.47L11.5 9l.47-1.03L13 7.5l-1.03-.47L11.5 6l-.46 1.03zm3 7.5l-2.06-.93L10 12l-.93 2.07L7 15l2.07.93L10 18l.94-2.07zm.97-3.03L15 11.5l-1.03-.47L13.5 10l-.46 1.03l-1.04.47l1.04.47l.46 1.03zm2 4L17 15.5l-1.03-.47L15.5 14l-.46 1.03l-1.04.47l1.04.47l.46 1.03z"></svg:path>`,
})
export class MdiWizardHatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWordpressIcon],svg[mdi-wordpress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.42 12c0-1.24.27-2.42.74-3.5l4.1 11.22A8.56 8.56 0 0 1 3.42 12m14.37-.43c0 .73-.29 1.58-.65 2.77l-.86 2.86l-3.1-9.2l.98-.1c.47-.06.41-.74-.05-.71c0 0-1.39.11-2.29.11l-2.26-.11c-.46-.03-.51.68-.06.71l.91.1l1.34 3.64l-1.88 5.63L6.74 8l.99-.1c.46-.06.4-.74-.06-.71c0 0-1.39.11-2.29.11l-.55-.01C6.37 4.96 9 3.42 12 3.42c2.23 0 4.27.86 5.79 2.25h-.11c-.84 0-1.44.73-1.44 1.52c0 .71.41 1.31.84 2.01c.33.57.71 1.3.71 2.37m-5.64 1.18l2.64 7.22l.06.12c-.89.32-1.85.49-2.85.49c-.84 0-1.65-.12-2.42-.35zm7.38-4.87A8.55 8.55 0 0 1 20.58 12c0 3.16-1.72 5.93-4.27 7.41l2.62-7.57c.49-1.22.66-2.2.66-3.07zM12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 19.54c5.26 0 9.54-4.28 9.54-9.54S17.26 2.46 12 2.46S2.46 6.74 2.46 12s4.28 9.54 9.54 9.54"></svg:path>`,
})
export class MdiWordpressIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWrapIcon],svg[mdi-wrap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5H3v2h18zM3 19h7v-2H3zm0-6h15c1 0 2 .43 2 2s-1 2-2 2h-2v-2l-4 3l4 3v-2h2c2.95 0 4-1.27 4-4c0-2.72-1-4-4-4H3z"></svg:path>`,
})
export class MdiWrapIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWrapDisabledIcon],svg[mdi-wrap-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 7H3V5h13zM3 19h13v-2H3zm19-7l-4-3v2H3v2h15v2z"></svg:path>`,
})
export class MdiWrapDisabledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWrenchIcon],svg[mdi-wrench-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9c-2-2-5-2.4-7.4-1.3L9 6L6 9L1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4"></svg:path>`,
})
export class MdiWrenchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWrenchCheckIcon],svg[mdi-wrench-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2c1.8.6 3 2.3 3 4.2c0 2-1.2 3.7-3 4.3v11c0 .3-.2.5-.5.5h-2c-.3 0-.5-.2-.5-.6v-11c-1.8-.6-3-2.3-3-4.2S4.2 2.6 6 2v3.7h3zm11.6 11l1.4 1.41L15.47 21L12 17.5l1.4-1.41l2.07 2.08z"></svg:path>`,
})
export class MdiWrenchCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWrenchCheckOutlineIcon],svg[mdi-wrench-check-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1.09V6H7V1.09C4.16 1.57 2 4.03 2 7c0 2.22 1.21 4.15 3 5.19V21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-8.81c1.79-1.04 3-2.97 3-5.19c0-2.97-2.16-5.43-5-5.91m1 9.37l-1 .58V20H7v-8.96l-1-.58C4.77 9.74 4 8.42 4 7c0-1 .37-1.94 1-2.65V8h6V4.35c.63.71 1 1.65 1 2.65c0 1.42-.77 2.74-2 3.46M21.6 13l1.4 1.41L16.47 21L13 17.5l1.4-1.41l2.07 2.08z"></svg:path>`,
})
export class MdiWrenchCheckOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWrenchClockIcon],svg[mdi-wrench-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6.2C10 4.3 8.8 2.6 7 2v3.7H4V2c-1.8.6-3 2.3-3 4.2s1.2 3.6 3 4.2v11c0 .4.2.6.5.6h2c.3 0 .5-.2.5-.5v-11c1.8-.6 3-2.3 3-4.3M16 8s-.1 0 0 0c-3.9.1-7 3.2-7 7c0 3.9 3.1 7 7 7s7-3.1 7-7s-3.1-7-7-7m0 12c-2.8 0-5-2.2-5-5s2.2-5 5-5s5 2.2 5 5s-2.2 5-5 5m-1-9v5l3.6 2.2l.8-1.2l-2.9-1.7V11z"></svg:path>`,
})
export class MdiWrenchClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWrenchClockOutlineIcon],svg[mdi-wrench-clock-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 8a7.3 7.3 0 0 0-3.32.89c.2-.6.32-1.23.32-1.89c0-2.97-2.16-5.43-5-5.91V6H6V1.09C3.16 1.57 1 4.03 1 7c0 2.22 1.21 4.15 3 5.19V21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-2.38A6.96 6.96 0 0 0 16 22c3.9 0 7-3.1 7-7s-3.1-7-7-7m-8 3.04V20H6v-8.96l-1-.58C3.77 9.74 3 8.42 3 7c0-1 .37-1.94 1-2.65V8h6V4.35c.63.71 1 1.65 1 2.65c0 1.42-.77 2.74-2 3.46zM16 20c-2.8 0-5-2.2-5-5s2.2-5 5-5s5 2.2 5 5s-2.2 5-5 5m.5-4.7l2.9 1.7l-.8 1.2L15 16v-5h1.5z"></svg:path>`,
})
export class MdiWrenchClockOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWrenchCogIcon],svg[mdi-wrench-cog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.94 17.94a3.3 3.3 0 0 0 0-.89l.97-.73a.22.22 0 0 0 .06-.29l-.92-1.56c-.05-.1-.19-.14-.29-.1l-1.15.45c-.24-.17-.49-.32-.78-.44l-.17-1.19a.235.235 0 0 0-.23-.19h-1.85c-.12 0-.22.08-.24.19l-.17 1.19c-.29.12-.54.27-.78.44l-1.15-.45c-.1-.04-.24 0-.28.1l-.93 1.56c-.06.1-.03.22.06.29l.97.73c-.01.15-.03.3-.03.45s.02.29.03.44l-.97.74a.22.22 0 0 0-.06.29l.93 1.56c.04.1.18.13.28.1l1.15-.46c.24.18.49.33.78.45l.17 1.19c.02.11.12.19.24.19h1.85c.11 0 .21-.08.23-.19l.17-1.19c.29-.12.54-.27.78-.45l1.15.46c.1.03.24 0 .29-.1l.92-1.56a.22.22 0 0 0-.06-.29zM16.5 19c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5M9 2c1.8.6 3 2.3 3 4.2c0 2-1.2 3.7-3 4.3v11c0 .3-.2.5-.5.5h-2c-.3 0-.5-.2-.5-.6v-11c-1.8-.6-3-2.3-3-4.2S4.2 2.6 6 2v3.7h3z"></svg:path>`,
})
export class MdiWrenchCogIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWrenchCogOutlineIcon],svg[mdi-wrench-cog-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1.09V6H7V1.09C4.16 1.57 2 4.03 2 7c0 2.22 1.21 4.15 3 5.19V21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-8.81c1.79-1.04 3-2.97 3-5.19c0-2.97-2.16-5.43-5-5.91m1 9.37l-1 .58V20H7v-8.96l-1-.58C4.77 9.74 4 8.42 4 7c0-1 .37-1.94 1-2.65V8h6V4.35c.63.71 1 1.65 1 2.65c0 1.42-.77 2.74-2 3.46m10.94 7.48a3.3 3.3 0 0 0 0-.89l.97-.73a.22.22 0 0 0 .06-.29l-.92-1.56c-.05-.1-.18-.14-.29-.1l-1.15.45c-.24-.17-.49-.32-.78-.44l-.17-1.19a.235.235 0 0 0-.23-.19h-1.85c-.12 0-.22.08-.24.19l-.17 1.19c-.29.12-.54.27-.78.44l-1.15-.45c-.1-.04-.24 0-.28.1l-.93 1.56c-.06.1-.03.22.06.29l.97.73c-.01.15-.03.3-.03.45s.02.29.03.44l-.97.74a.22.22 0 0 0-.06.29l.93 1.56c.04.1.18.13.28.1l1.15-.46c.24.18.49.33.78.45l.17 1.19c.02.11.12.19.24.19h1.85c.11 0 .21-.08.23-.19l.17-1.19c.29-.12.54-.27.78-.45l1.15.46c.11.03.24 0 .29-.1l.92-1.56a.22.22 0 0 0-.06-.29zM17.5 19c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5"></svg:path>`,
})
export class MdiWrenchCogOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWrenchOutlineIcon],svg[mdi-wrench-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.61 19l-9.08-9.09c.93-2.34.47-5.1-1.44-7C9.79.61 6.21.4 3.66 2.26L7.5 6.11L6.08 7.5L2.25 3.69C.39 6.23.6 9.82 2.9 12.11c1.86 1.86 4.57 2.35 6.89 1.48l9.11 9.11c.39.39 1.02.39 1.41 0l2.3-2.3c.39-.4.39-1.01 0-1.4m-3 1.59l-9.46-9.46c-.61.45-1.29.72-2 .82c-1.36.2-2.79-.21-3.83-1.25C3.37 9.76 2.93 8.5 3 7.26l3.09 3.09l4.24-4.24L7.24 3c1.26-.05 2.49.39 3.44 1.33a4.47 4.47 0 0 1 1.24 3.96a4.35 4.35 0 0 1-.88 1.96l9.46 9.45z"></svg:path>`,
})
export class MdiWrenchOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiWunderlistIcon],svg[mdi-wunderlist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M17 17.5L12 15l-5 2.5V5H5v14h14V5h-2v12.5m-5-5.08l2.25 1.35l-.6-2.55l1.99-1.72L13 9.27l-1-2.41l-1 2.41l-2.64.23l1.99 1.72l-.6 2.55L12 12.42M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" fill="currentColor"></svg:path>`,
})
export class MdiWunderlistIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiXamarinIcon],svg[mdi-xamarin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.75 11.07c.16.28.25.6.25.93s-.09.65-.25.93L18.08 21c-.36.62-1.02 1-1.73 1h-8.7c-.71 0-1.37-.38-1.73-1l-4.67-8.07c-.16-.28-.25-.6-.25-.93s.09-.65.25-.93L5.92 3c.36-.62 1.02-1 1.73-1h8.7c.71 0 1.37.38 1.73 1zM12 12v-.1L9.42 7.1L9.25 7H7.66l-.16.1v.2L10 12l-2.5 4.7v.2l.16.1h1.59l.17-.1L12 12.1zl.03.1l2.55 4.8l.17.1h1.59l.16-.1v-.2L14 12l2.5-4.7v-.2l-.16-.1h-1.59l-.17.1l-2.55 4.8z"></svg:path>`,
})
export class MdiXamarinIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiXamarinOutlineIcon],svg[mdi-xamarin-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 12l.03-.1l2.55-4.8l.17-.1h1.59l.16.1v.2L14 12l2.5 4.7v.2l-.16.1h-1.59l-.17-.1l-2.55-4.8L12 12v.1l-2.58 4.8l-.17.1H7.66l-.16-.1v-.2L10 12L7.5 7.3v-.2l.16-.1h1.59l.17.1L12 11.9v.1m10.75-.93c.16.28.25.6.25.93c0 .33-.09.65-.25.93L18.08 21c-.36.62-1.02 1-1.73 1h-8.7c-.71 0-1.37-.38-1.73-1l-4.67-8.07c-.16-.28-.25-.6-.25-.93c0-.33.09-.65.25-.93L5.92 3c.36-.62 1.02-1 1.73-1h8.7c.71 0 1.37.38 1.73 1l4.67 8.07m-1.95.18L16.97 4.8c-.29-.5-.83-.8-1.41-.8H8.44c-.58 0-1.12.3-1.41.8L3.2 11.25c-.13.25-.2.49-.2.75s.07.5.2.75l3.83 6.45c.29.5.83.8 1.41.8h7.12c.58 0 1.12-.3 1.41-.8l3.83-6.45c.13-.25.2-.49.2-.75s-.07-.5-.2-.75z" fill="currentColor"></svg:path>`,
})
export class MdiXamarinOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiXdaIcon],svg[mdi-xda-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M0 16.7l3.2-3.8L0 9.1l1.5-1.3l3 3.5l3-3.5L9 9.1l-3.2 3.8L9 16.7L7.5 18l-3-3.6l-3 3.6L0 16.7m24 .2c0 .5-.4 1-1 1h-3c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h2v-2h-4V8h5c.5 0 1 .4 1 1m-2 5h-2v2h2v-2m-6 2.9c0 .5-.4 1-1 1h-3c-1.1 0-2-.9-2-2v-6c0-1.1.9-2 2-2h2V5h2v11.9m-2-1v-6h-2v6h2z" fill="currentColor"></svg:path>`,
})
export class MdiXdaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiXingIcon],svg[mdi-xing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M4.8 3C3.8 3 3 3.8 3 4.8v14.4c0 1 .8 1.8 1.8 1.8h14.4c1 0 1.8-.8 1.8-1.8V4.8c0-1-.8-1.8-1.8-1.8m-3.13 2h2.04c.12 0 .22.04.26.13c.06.09.06.2 0 .31l-4.47 7.92l2.85 5.2c.06.11.06.22 0 .31c-.05.08-.14.13-.25.13h-2.03c-.31 0-.47-.21-.56-.39l-2.87-5.26l4.49-7.96c.11-.2.24-.39.54-.39M7.09 7.76H9.1c.31 0 .47.2.57.39l1.39 2.42c-.09.14-2.18 3.85-2.18 3.85c-.11.19-.25.39-.56.39H6.3c-.12 0-.21-.05-.26-.14a.413.413 0 0 1 0-.31l2.14-3.79L6.82 8.2c-.05-.11-.07-.2-.01-.31c.05-.08.15-.13.28-.13z" fill="currentColor"></svg:path>`,
})
export class MdiXingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiXingCircleIcon],svg[mdi-xing-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m3.85 4h1.89c.12 0 .2.04.26.12c.04.08.04.18 0 .29l-4.16 7.35l2.66 4.83c.03.1.03.21 0 .29c-.07.08-.15.12-.26.12h-1.88c-.29 0-.43-.19-.52-.36l-2.67-4.88c.14-.26 4.18-7.4 4.18-7.4c.1-.18.22-.36.5-.36M7.5 8.57h1.89c.28 0 .42.18.51.35l1.29 2.25c-.07.13-2.02 3.58-2.02 3.58c-.1.17-.23.36-.51.36H6.78c-.11 0-.19-.05-.24-.11c-.04-.1-.04-.2 0-.31l1.99-3.52L7.27 9c-.06-.13-.07-.23-.02-.31c.05-.08.14-.12.25-.12z" fill="currentColor"></svg:path>`,
})
export class MdiXingCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiXmlIcon],svg[mdi-xml-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.89 3l1.96.4L11.11 21l-1.96-.4zm6.7 9L16 8.41V5.58L22.42 12L16 18.41v-2.83zM1.58 12L8 5.58v2.83L4.41 12L8 15.58v2.83z"></svg:path>`,
})
export class MdiXmlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiXmppIcon],svg[mdi-xmpp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15.4C9.75 13.09 8 9.54 8 6L2 4c0 5.65 4.33 10.11 8.55 12.66C9.38 17.5 8.15 18 7 18v1c1.2 0 3.03-.54 5-1.54c1.97 1 3.8 1.54 5 1.54v-1c-1.15 0-2.38-.5-3.55-1.34C17.66 14.11 22 9.65 22 4l-6 2c0 3.54-1.75 7.09-4 9.4"></svg:path>`,
})
export class MdiXmppIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiYCombinatorIcon],svg[mdi-y-combinator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M2 2h20v20H2V2m9.25 15.5h1.5v-4.44L16 7h-1.5L12 11.66L9.5 7H8l3.25 6.06v4.44z" fill="currentColor"></svg:path>`,
})
export class MdiYCombinatorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiYahooIcon],svg[mdi-yahoo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 7.59L8.16 13.2L5.85 7.59H2l4.29 9.64l-1.54 3.47H8.5l5.74-13.11zm4.5 5.14c-1.37 0-2.41 1.04-2.41 2.27c0 1.17 1 2.16 2.34 2.16c1.39 0 2.43-1.03 2.43-2.26c0-1.21-1-2.17-2.36-2.17m2.72-9.43l-3.83 8.59h4.28L22 3.3z"></svg:path>`,
})
export class MdiYahooIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiYammerIcon],svg[mdi-yammer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M13.54 5.93L9.18 17.11c-.02.08-.92 2.54-3.95 2.54a1 1 0 0 1-1-1c0-.56.45-1 1-1c1.56 0 2.03-1.12 2.08-1.24l.37-1.01l-3.86-9.46c-.2-.51.04-1.1.55-1.3a1 1 0 0 1 1.31.55l3.07 7.53l2.93-7.52c.2-.52.78-.77 1.32-.57c.5.2.75.78.54 1.3m4.96.45c-.18 0-.37.07-.5.19c0 0-4.2 2.99-4 3.31c.19.32 4.83-1.85 4.84-1.88c.31-.1.54-.41.54-.77c0-.47-.38-.85-.88-.85m.77 10.46c-.1-.17-.27-.3-.44-.38c0 0-4.66-2.17-4.83-1.85c-.19.33 4 3.31 4 3.31c.25.22.63.26.94.08c.41-.23.56-.75.33-1.16m1.7-5.42c-.18-.1-.37-.13-.57-.1c0 0-5.11.53-5.1.9c.01.37 5.11.78 5.12.78c.34.05.69-.1.87-.42c.21-.41.09-.93-.32-1.16z" fill="currentColor"></svg:path>`,
})
export class MdiYammerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiYeastIcon],svg[mdi-yeast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 14a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4l.09-.85c-.04-.7-.17-1.31-.54-1.65c-.2-.2-.48-.31-.8-.37c-.96.55-2.07.87-3.25.87A6.5 6.5 0 0 1 3 9.5A6.5 6.5 0 0 1 9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.18-.32 2.29-.87 3.25c.06.32.17.6.37.8c.34.37.95.5 1.65.54zM7.5 10A1.5 1.5 0 0 1 9 11.5A1.5 1.5 0 0 1 7.5 13A1.5 1.5 0 0 1 6 11.5A1.5 1.5 0 0 1 7.5 10m2-5C7 5 5 7 5 9.5S7 14 9.5 14S14 12 14 9.5S12 5 9.5 5"></svg:path>`,
})
export class MdiYeastIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiYelpIcon],svg[mdi-yelp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M10.59 2c.64 0 .91.27.99.97l.21 3.17l.24 4.15c.02.35-.03.71-.17 1.03c-.22.45-.72.57-1.13.26c-.23-.19-.42-.44-.58-.71L6.42 4.55c-.36-.61-.25-1.01.35-1.39C7.5 2.68 9.73 2 10.59 2m4.24 12.85l.26.06l3.86 1.4c.66.24.84.61.55 1.26c-.44 1.13-1.16 2.09-2.08 2.88c-.46.4-.92.33-1.21-.17l-2.27-3.96c-.39-.71.09-1.52.89-1.47M4.5 14c0-.74 0-1.45.25-2.13c.22-.67.58-.87 1.25-.6l3.63 1.54c.46.19.72.51.7 1.03c-.03.52-.36.74-.8.89l-3.68 1.21c-.7.23-1.06.02-1.21-.69c-.09-.42-.17-.85-.14-1.25m7.47 7c-.02.81-.37 1.12-1.16 1c-1.04-.2-2-.6-2.85-1.24c-.42-.32-.51-.81-.2-1.23l2.71-3.56c.23-.3.56-.37.92-.23c.38.14.58.44.58.85V21m2.48-7.68c-.72.01-1.22-.82-.81-1.41c.83-1.24 1.71-2.45 2.59-3.65c.27-.41.71-.44 1.08-.1c.93.84 1.6 1.84 1.98 3.06c.14.45-.04.86-.46.98l-3.74.97l-.64.15z" fill="currentColor"></svg:path>`,
})
export class MdiYelpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiYinYangIcon],svg[mdi-yin-yang-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2a8 8 0 0 0-8 8a8 8 0 0 0 8 8a4 4 0 0 1-4-4a4 4 0 0 1 4-4a4 4 0 0 0 4-4a4 4 0 0 0-4-4m0 2.5A1.5 1.5 0 0 1 13.5 8A1.5 1.5 0 0 1 12 9.5A1.5 1.5 0 0 1 10.5 8A1.5 1.5 0 0 1 12 6.5m0 8a1.5 1.5 0 0 0-1.5 1.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 0 1.5-1.5a1.5 1.5 0 0 0-1.5-1.5"></svg:path>`,
})
export class MdiYinYangIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiYogaIcon],svg[mdi-yoga-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2a2 2 0 1 0 0 4c1.11 0 2-.89 2-2a2 2 0 0 0-2-2M4 7v2h6v6l-5.07 5.07l1.41 1.43l6.72-6.73L17 17.13V21h2v-4.43c0-.36-.18-.68-.5-.86L15 13.6V9h6V7z"></svg:path>`,
})
export class MdiYogaIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiYoutubeIcon],svg[mdi-youtube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"></svg:path>`,
})
export class MdiYoutubeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiYoutubeGamingIcon],svg[mdi-youtube-gaming-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13V8l-5-3l-5 3l-5-3l-5 3v5l10 6zM9 11H7v2H6v-2H4v-1h2V8h1v2h2zm6 2c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m3-2c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class MdiYoutubeGamingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiYoutubeStudioIcon],svg[mdi-youtube-studio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 15l5-3l-5-3zm9.45-2l2.11 1.63c.22.15.25.37.1.65l-2.02 3.47c-.14.22-.33.28-.61.19l-2.48-.99c-.66.47-1.22.8-1.69.99l-.36 2.62c-.08.28-.23.44-.5.44h-4c-.27 0-.42-.16-.5-.44l-.36-2.62c-.59-.25-1.14-.58-1.69-.99l-2.48.99c-.28.09-.47.03-.61-.19l-2.02-3.47c-.15-.28-.12-.5.1-.65L4.55 13c-.05-.23-.05-.56-.05-1s0-.77.05-1L2.44 9.38c-.22-.16-.25-.38-.1-.66l2.02-3.47c.14-.22.33-.28.61-.19l2.48.99c.66-.47 1.22-.8 1.69-.99l.36-2.62c.08-.28.23-.44.5-.44h4c.27 0 .42.16.5.44l.36 2.62c.59.25 1.14.58 1.69.99l2.48-.99c.28-.09.47-.03.61.19l2.02 3.47c.15.28.12.5-.1.66L19.45 11c.05.23.05.56.05 1s0 .77-.05 1"></svg:path>`,
})
export class MdiYoutubeStudioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiYoutubeSubscriptionIcon],svg[mdi-youtube-subscription-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8H4V6h16zm-2-6H6v2h12zm4 10v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2m-6 4l-6-3.27v6.53z"></svg:path>`,
})
export class MdiYoutubeSubscriptionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiYoutubeTvIcon],svg[mdi-youtube-tv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 4.5h19c.84 0 1.5.65 1.5 1.5v11.5c0 .85-.66 1.5-1.5 1.5h-19c-.85 0-1.5-.65-1.5-1.5V6c0-.85.65-1.5 1.5-1.5m7.21 4V15l5.71-3.3zM17.25 21H6.65c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h10.7c.3 0 .5.2.5.5s-.3.5-.6.5"></svg:path>`,
})
export class MdiYoutubeTvIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiYurtIcon],svg[mdi-yurt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14.87V22h-8v-6h-4v6H2v-7.13c0-.54.29-1.04.76-1.3l5.9-3.37c.22-.13.48-.2.74-.2h3.1V9H14v1h.59c.26 0 .52.07.74.2l5.9 3.37c.48.27.77.76.77 1.3M7.86 6.25H9.4c1.33 0 2.52.7 3.1 1.75H14c-.4-1.8-2-3.15-3.9-3.15v-1.5c1 0 1.85-.85 1.85-1.85V1H7.86v1.5c-1 0-1.86.73-1.86 1.75s.86 2 1.86 2"></svg:path>`,
})
export class MdiYurtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiZWaveIcon],svg[mdi-z-wave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.3 10.58c-3.16 0-5.7 2.55-5.7 5.7S13.15 22 16.3 22s5.7-2.57 5.7-5.72s-2.55-5.7-5.7-5.7m1.7 8.5h-4.81L15.81 15h-2.5l1.09-1.77h4.78l-2.55 4.05h2.55zM16.3 3.93V2C8.41 2 2 8.42 2 16.31h1.92C3.94 9.46 9.5 3.93 16.3 3.93m0 3.81V5.82c-5.8 0-10.49 4.71-10.49 10.49h1.92c.02-4.73 3.86-8.57 8.57-8.57"></svg:path>`,
})
export class MdiZWaveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiZendIcon],svg[mdi-zend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.28 9.81S11.28 7 14.09 7h8.41s0 2.81-2.79 2.81zm0 3.6s0-2.81 2.81-2.81h4.22s0 2.81-2.81 2.81zm0 3.59s0-2.81 2.81-2.81h1.41s0 2.81-2.82 2.81zm-.82-2.2V17H1.58L7.3 9.21H2.4V7h9.26l-5.7 7.8z"></svg:path>`,
})
export class MdiZendIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiZigbeeIcon],svg[mdi-zigbee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.06 6.15c-.09.02-.18.07-.26.13A9.9 9.9 0 0 0 2 12a10 10 0 0 0 10 10c3 0 5.68-1.32 7.5-3.4l-2.5.25c-2.75.3-5.55.34-8.34.11c-.71-.02-1.42-.2-2.07-.51a2.62 2.62 0 0 1-1.52-2.16c-.01-.16.05-.29.16-.42l2.19-2.27l7.61-7.9v-.1h-4.19c-2.27.04-4.53.22-6.78.55M20.17 17.5c.09-.03.18-.06.26-.11A10 10 0 0 0 22 12A10 10 0 0 0 12 2C9.22 2 6.7 3.13 4.89 4.97h.28c3.11-.4 6.26-.5 9.39-.32c.94-.01 1.89.17 2.77.52A2.67 2.67 0 0 1 19 7.37c0 .16-.07.33-.18.45l-9.11 9.37l-.71.76v.11h4.14c2.36-.06 4.7-.25 7.03-.56"></svg:path>`,
})
export class MdiZigbeeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiZipBoxIcon],svg[mdi-zip-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 17h-2v-2h-2v-2h2v2h2m0-6h-2v2h2v2h-2v-2h-2V9h2V7h-2V5h2v2h2m5-4H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2"></svg:path>`,
})
export class MdiZipBoxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiZipBoxOutlineIcon],svg[mdi-zip-box-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17v-2h2v2zm2-4v-2h-2v2zm0-4V7h-2v2zm-4 2h2V9h-2zm0 4h2v-2h-2zM21 5v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2m-2 0h-7v2h-2V5H5v14h14z"></svg:path>`,
})
export class MdiZipBoxOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiZipDiskIcon],svg[mdi-zip-disk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3L3 5v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5l-4-2v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1V3zm1 7h8a1 1 0 0 1 1 1v8H7v-8a1 1 0 0 1 1-1"></svg:path>`,
})
export class MdiZipDiskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiZodiacAquariusIcon],svg[mdi-zodiac-aquarius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 12.41l-3-3l-3 3l-3-3l-2.29 2.3l-1.42-1.42L6 6.59l3 3l3-3l3 3l3-3l3.71 3.7l-1.42 1.42L18 9.41zm3 3l2.29 2.3l1.42-1.42l-3.71-3.7l-3 3l-3-3l-3 3l-3-3l-3.71 3.7l1.42 1.42L6 15.41l3 3l3-3l3 3z"></svg:path>`,
})
export class MdiZodiacAquariusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiZodiacAriesIcon],svg[mdi-zodiac-aries-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2c-1.05 0-2.09.27-3 .81c-.36.19-.7.45-1 .73c-.3-.28-.64-.54-1-.73C10.09 2.27 9.05 2 8 2a6 6 0 0 0-6 6a6 6 0 0 0 6 6v-2a4 4 0 0 1-4-4a4 4 0 0 1 4-4a4.03 4.03 0 0 1 3 1.36V22h2V5.36c.08-.09.16-.18.25-.26a4 4 0 0 1 5.66.15a3.997 3.997 0 0 1-.15 5.65C18 11.61 17.03 12 16 12v2a6 6 0 0 0 6-6a6 6 0 0 0-6-6"></svg:path>`,
})
export class MdiZodiacAriesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiZodiacCancerIcon],svg[mdi-zodiac-cancer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4C6.5 4 2 7.58 2 12c0 2.12 1.65 3.87 3.76 4H6a4 4 0 0 0 4-4a4 4 0 0 0-4-4h-.24A8.8 8.8 0 0 1 12 5.6c1.77-.02 3.5.47 5 1.4l1.25-1.25A11.5 11.5 0 0 0 12 4m-6 6a2 2 0 0 1 2 2c0 1.11-.92 2-2 2a2 2 0 0 1-2-1.8v-.4A2 2 0 0 1 6 10m12.24-2H18a4 4 0 0 0-4 4a4 4 0 0 0 4 4h.24A8.8 8.8 0 0 1 12 18.4c-1.77.02-3.5-.47-5-1.4l-1.24 1.24C7.63 19.41 9.79 20 12 20c5.5 0 10-3.58 10-8c0-2.12-1.65-3.87-3.76-4M18 14a2 2 0 0 1-2-2c0-1.11.92-2 2-2a2 2 0 0 1 2 1.8v.4a2 2 0 0 1-2 1.8"></svg:path>`,
})
export class MdiZodiacCancerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiZodiacCapricornIcon],svg[mdi-zodiac-capricorn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 13c-.7 0-1.39.19-2 .55V6a3 3 0 0 0-3-3c-.75 0-1.45.29-2 .78C7.45 3.28 6.74 3 6 3v2a1 1 0 0 1 1 1v10h2V6a1 1 0 0 1 1-1a1 1 0 0 1 1 1v11a2 2 0 0 1-2 2v2c1.15 0 2.25-.5 3-1.38a3.974 3.974 0 0 0 5.64.38c1.67-1.42 1.86-3.95.4-5.62A4.01 4.01 0 0 0 15 13m0 6a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2"></svg:path>`,
})
export class MdiZodiacCapricornIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiZodiacGeminiIcon],svg[mdi-zodiac-gemini-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 5.3c1.35-.33 2.66-.76 3.94-1.3l-.76-1.86a23.75 23.75 0 0 1-18.36.03L2.06 4c1.28.54 2.59.97 3.94 1.3v13.4c-1.35.33-2.66.76-3.94 1.3l.76 1.86a23.94 23.94 0 0 1 18.36 0l.76-1.86c-1.28-.54-2.59-.97-3.94-1.3zm-10 13V5.69c1.32.2 2.66.31 4 .31s2.68-.11 4-.31v12.62a26.2 26.2 0 0 0-8 0z"></svg:path>`,
})
export class MdiZodiacGeminiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiZodiacLeoIcon],svg[mdi-zodiac-leo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 17a3 3 0 0 1-3 3a3.163 3.163 0 0 1-3-3c.16-1.61.5-3.2 1-4.74c.54-1.71.87-3.47 1-5.26a5.136 5.136 0 0 0-5-5a5.136 5.136 0 0 0-5 5c.15 1.53.5 3.03 1 4.5l.21.7c-2.11-.67-4.35.5-5.02 2.6c-.69 2.11.49 4.36 2.6 5.03s4.35-.5 5.02-2.61c.13-.39.19-.81.19-1.22c-.16-1.73-.5-3.44-1.09-5.08A18.8 18.8 0 0 1 8 7a3.163 3.163 0 0 1 3-3c1.62.08 2.92 1.38 3 3a22.6 22.6 0 0 1-1 4.74c-.54 1.71-.87 3.47-1 5.26a5.136 5.136 0 0 0 5 5a5 5 0 0 0 5-5zM6 18a2 2 0 0 1-2-2a2 2 0 0 1 2-2a2 2 0 0 1 2 2a2 2 0 0 1-2 2"></svg:path>`,
})
export class MdiZodiacLeoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiZodiacLibraIcon],svg[mdi-zodiac-libra-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 16v2h-7v-2.09c3-.55 4.96-3.41 4.41-6.41S14 4.54 11 5.09C8 5.65 6.04 8.5 6.59 11.5c.41 2.24 2.17 4 4.41 4.41V18H4v-2h2.92a7.43 7.43 0 0 1-2.42-5.5A7.5 7.5 0 0 1 12 3a7.5 7.5 0 0 1 7.5 7.5c0 2.09-.87 4.09-2.42 5.5zm0 3H4v2h16z"></svg:path>`,
})
export class MdiZodiacLibraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiZodiacPiscesIcon],svg[mdi-zodiac-pisces-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 11h-2c.11-2.81.73-5.58 1.81-8.18L18 2.06A26 26 0 0 0 16 11H8c-.13-3.08-.81-6.1-2-8.94l-1.86.76C5.24 5.41 5.87 8.18 6 11H4v2h2a23.8 23.8 0 0 1-1.81 8.18l1.81.76C7.19 19.1 7.87 16.08 8 13h8c.13 3.08.81 6.1 2 8.94l1.86-.76c-1.1-2.59-1.73-5.36-1.86-8.18h2z"></svg:path>`,
})
export class MdiZodiacPiscesIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiZodiacSagittariusIcon],svg[mdi-zodiac-sagittarius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 2v10h-2V5.41L10.41 15l2.3 2.29l-1.42 1.42L9 16.41l-5.29 5.3l-1.42-1.42L7.59 15l-2.3-2.29l1.42-1.42L9 13.59L18.59 4H12V2z"></svg:path>`,
})
export class MdiZodiacSagittariusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiZodiacScorpioIcon],svg[mdi-zodiac-scorpio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.71 15.29l-1.42 1.42l1.3 1.29H16a2 2 0 0 1-2-2V6a3 3 0 0 0-3-3c-.75 0-1.45.29-2 .78a2.997 2.997 0 0 0-4 0C4.45 3.28 3.74 3 3 3v2a1 1 0 0 1 1 1v10h2V6a1 1 0 0 1 1-1a1 1 0 0 1 1 1v10h2V6a1 1 0 0 1 1-1a1 1 0 0 1 1 1v10a4 4 0 0 0 4 4h1.59l-1.3 1.29l1.42 1.42l3.7-3.71z"></svg:path>`,
})
export class MdiZodiacScorpioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiZodiacTaurusIcon],svg[mdi-zodiac-taurus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.59 9A7 7 0 0 0 19 3h-2a5 5 0 0 1-5 5a5 5 0 0 1-5-5H5c0 2.46 1.3 4.74 3.41 6C5.09 11 4 15.28 6 18.6c1.97 3.32 6.27 4.4 9.59 2.4c3.32-1.96 4.41-6.26 2.41-9.58A6.9 6.9 0 0 0 15.59 9M12 20a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5"></svg:path>`,
})
export class MdiZodiacTaurusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiZodiacVirgoIcon],svg[mdi-zodiac-virgo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 19.13C20 17.77 20 15.18 20 14a4 4 0 0 0-4-4c-.7 0-1.4.2-2 .56V6a3 3 0 0 0-3-3c-.75 0-1.45.29-2 .78a2.997 2.997 0 0 0-4 0C4.45 3.28 3.74 3 3 3v2a1 1 0 0 1 1 1v10h2V6a1 1 0 0 1 1-1a1 1 0 0 1 1 1v10h2V6a1 1 0 0 1 1-1a1 1 0 0 1 1 1v8c0 1.18 0 3.77 1.5 5.13c-.78.41-1.62.71-2.5.87v2c1.29 0 3.84-1.26 5-1.87c1.16.61 3.71 1.87 5 1.87v-2c-.88-.16-1.72-.46-2.5-.87M16 12a2 2 0 0 1 2 2c0 2.92-.54 4-2 4s-2-1.08-2-4a2 2 0 0 1 2-2"></svg:path>`,
})
export class MdiZodiacVirgoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[mdiAccountArrowDownOutlineIcon],svg[mdi-account-arrow-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 18v-4h-2v4h-2l3 3l3-3zM11 4C8.8 4 7 5.8 7 8s1.8 4 4 4s4-1.8 4-4s-1.8-4-4-4m0 2c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m0 7c-2.7 0-8 1.3-8 4v3h9.5c-.3-.6-.4-1.2-.5-1.9H4.9V17c0-.6 3.1-2.1 6.1-2.1c.5 0 1 .1 1.5.1c.3-.6.6-1.2 1.1-1.7c-1-.2-1.9-.3-2.6-.3"></svg:path>`,
})
export class MdiAccountArrowDownOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
