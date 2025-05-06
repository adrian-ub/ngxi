import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisAlignCenterIcon],svg[uis-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 9c-.6 0-1 .4-1 1s.4 1 1 1h10c.6 0 1-.4 1-1s-.4-1-1-1zM3 7h18c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1m14 10H7c-.6 0-1 .4-1 1s.4 1 1 1h10c.6 0 1-.4 1-1s-.4-1-1-1m4-4H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1"></svg:path>`,
})
export class UisAlignCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisAlignRightJustifyIcon],svg[uis-align-right-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5h18c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1m18 14H11c-.6 0-1 .4-1 1s.4 1 1 1h10c.6 0 1-.4 1-1s-.4-1-1-1m0-8H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1m0 4H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1m0-8H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1"></svg:path>`,
})
export class UisAlignRightJustifyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisAnalysisIcon],svg[uis-analysis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.7 7.3c-.4-.4-1-.4-1.4 0L14 13.6L9.7 9.3C9.5 9.1 9.3 9 9 9s-.5.1-.7.3l-6 6c-.2.2-.3.4-.3.7c0 .6.4 1 1 1c.3 0 .5-.1.7-.3L9 11.4l4.3 4.3c.1.1.2.2.3.2c.1.1.3.1.4.1c.2 0 .5-.1.6-.3h.1l7-7c.4-.4.4-1 0-1.4"></svg:path>`,
})
export class UisAnalysisIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisAnalyticsIcon],svg[uis-analytics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1s1-.4 1-1V3c0-.6-.4-1-1-1M5 12c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1s1-.4 1-1v-8c0-.6-.4-1-1-1m10-4c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1s1-.4 1-1V9c0-.6-.4-1-1-1m5 8c-.6 0-1 .4-1 1v4c0 .6.4 1 1 1s1-.4 1-1v-4c0-.6-.4-1-1-1"></svg:path>`,
})
export class UisAnalyticsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisAnchorIcon],svg[uis-anchor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13h-2c-.6 0-1 .4-1 1s.4 1 1 1h.9c-.4 2.5-2.4 4.5-4.9 4.9V11h1c.6 0 1-.4 1-1s-.4-1-1-1h-1V7.8c1.2-.4 2-1.5 2-2.8c0-1.7-1.3-3-3-3S9 3.3 9 5c0 1.3.8 2.4 2 2.8V9h-1c-.6 0-1 .4-1 1s.4 1 1 1h1v8.9c-2.5-.4-4.5-2.4-4.9-4.9H7c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1 .4-1 1c0 4.4 3.6 8 8 8s8-3.6 8-8c0-.6-.4-1-1-1m-7-9c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1"></svg:path>`,
})
export class UisAnchorIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisAngleDoubleDownIcon],svg[uis-angle-double-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.3 11.5c.2.2.4.3.7.3s.5-.1.7-.3l3-3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L12 9.3L9.7 7c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4zm3 1L12 14.8l-2.3-2.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l3 3c.2.2.4.3.7.3s.5-.1.7-.3l3-3c.4-.4.4-1 0-1.4c-.4-.3-1-.3-1.4 0"></svg:path>`,
})
export class UisAngleDoubleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisAngleDoubleLeftIcon],svg[uis-angle-double-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 14.3L14.7 12L17 9.7c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-3 3c-.4.4-.4 1 0 1.4l3 3c.2.2.4.3.7.3s.5-.1.7-.3c.3-.4.3-1 0-1.4M9.2 12l2.3-2.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-3 3c-.4.4-.4 1 0 1.4l3 3c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4z"></svg:path>`,
})
export class UisAngleDoubleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisAngleDoubleRightIcon],svg[uis-angle-double-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 8.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4L9.3 12L7 14.3c-.2.2-.3.4-.3.7c0 .6.4 1 1 1c.3 0 .5-.1.7-.3l3-3c.4-.4.4-1 0-1.4zm8.5 3l-3-3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2.3 2.3l-2.3 2.3c-.2.2-.3.4-.3.7c0 .6.4 1 1 1c.3 0 .5-.1.7-.3l3-3c.3-.4.3-1 0-1.4"></svg:path>`,
})
export class UisAngleDoubleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisAngleDoubleUpIcon],svg[uis-angle-double-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.7 12.5c-.4-.4-1-.4-1.4 0l-3 3c-.4.4-.4 1 0 1.4s1 .4 1.4 0l2.3-2.3l2.3 2.3c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4zm-3-1L12 9.2l2.3 2.3c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-3-3c-.4-.4-1-.4-1.4 0l-3 3c-.4.4-.4 1 0 1.4c.4.3 1 .3 1.4 0"></svg:path>`,
})
export class UisAngleDoubleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisAngleDownIcon],svg[uis-angle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.9 9.2c-.4-.4-1-.4-1.4 0L12 12.7L8.5 9.2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l4.2 4.2c.2.2.4.3.7.3s.5-.1.7-.3l4.2-4.2c.4-.4.4-1 0-1.4"></svg:path>`,
})
export class UisAngleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisAngleLeftIcon],svg[uis-angle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.3 12l3.5-3.5c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-4.2 4.2c-.4.4-.4 1 0 1.4l4.2 4.2c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4z"></svg:path>`,
})
export class UisAngleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisAngleRightIcon],svg[uis-angle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.9 17.2c-.6 0-1-.4-1-1c0-.3.1-.5.3-.7l3.5-3.5l-3.5-3.5c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l4.2 4.2c.4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3"></svg:path>`,
})
export class UisAngleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisAngleRightBIcon],svg[uis-angle-right-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 11.3L9.9 5.6c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l4.9 4.9l-4.9 4.9c-.2.2-.3.4-.3.7c0 .6.4 1 1 1c.3 0 .5-.1.7-.3l5.7-5.7c.3-.2.3-.8-.1-1.2"></svg:path>`,
})
export class UisAngleRightBIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisAngleUpIcon],svg[uis-angle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.9 13.4l-4.2-4.2c-.4-.4-1-.4-1.4 0l-4.2 4.2c-.4.4-.4 1 0 1.4s1 .4 1.4 0l3.5-3.5l3.5 3.5c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4"></svg:path>`,
})
export class UisAngleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisAppsIcon],svg[uis-apps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 2H3c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1m0 11H3c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1M21 2h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1m0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1"></svg:path>`,
})
export class UisAppsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisArrowCircleDownIcon],svg[uis-arrow-circle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m3.7 10.7l-3 3c-.1.1-.2.2-.3.2c-.2.1-.5.1-.8 0c-.1 0-.2-.1-.3-.2l-3-3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l1.3 1.3V9c0-.6.4-1 1-1s1 .4 1 1v3.6l1.3-1.3c.4-.4 1-.4 1.4 0s.4 1 0 1.4"></svg:path>`,
})
export class UisArrowCircleDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisArrowCircleLeftIcon],svg[uis-arrow-circle-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m3 11h-3.6l1.3 1.3c.4.4.4 1 0 1.4s-1 .4-1.4 0l-3-3c-.4-.4-.4-1 0-1.4l3-3c.4-.4 1-.4 1.4 0s.4 1 0 1.4L11.4 11H15c.6 0 1 .4 1 1s-.4 1-1 1"></svg:path>`,
})
export class UisArrowCircleLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisArrowCircleRightIcon],svg[uis-arrow-circle-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m3.7 10.7l-3 3c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l1.3-1.3H9c-.6 0-1-.4-1-1s.4-1 1-1h3.6l-1.3-1.3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l3 3c.4.4.4 1 0 1.4"></svg:path>`,
})
export class UisArrowCircleRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisArrowCircleUpIcon],svg[uis-arrow-circle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m3.7 10.7c-.4.4-1 .4-1.4 0L13 11.4V15c0 .6-.4 1-1 1s-1-.4-1-1v-3.6l-1.3 1.3c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l3-3c.4-.4 1-.4 1.4 0l3 3c.4.4.4 1 0 1.4"></svg:path>`,
})
export class UisArrowCircleUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisArrowDownLeftIcon],svg[uis-arrow-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 16H9.4l8.3-8.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L8 14.6V7c0-.6-.4-1-1-1s-1 .4-1 1v10c0 .1 0 .3.1.4c.1.2.3.4.5.5c.1.1.3.1.4.1h10c.6 0 1-.4 1-1s-.4-1-1-1"></svg:path>`,
})
export class UisArrowDownLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisArrowDownRightIcon],svg[uis-arrow-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 6c-.6 0-1 .4-1 1v7.6L7.7 6.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l8.3 8.3H7c-.6 0-1 .4-1 1s.4 1 1 1h10c.6 0 1-.4 1-1V7c0-.6-.4-1-1-1"></svg:path>`,
})
export class UisArrowDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisArrowUpLeftIcon],svg[uis-arrow-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.4 8H17c.6 0 1-.4 1-1s-.4-1-1-1H7c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1s1-.4 1-1V9.4l8.3 8.3c.4.4 1 .4 1.4 0s.4-1 0-1.4z"></svg:path>`,
})
export class UisArrowUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisArrowUpRightIcon],svg[uis-arrow-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 6H7c-.6 0-1 .4-1 1s.4 1 1 1h7.6l-8.3 8.3c-.4.4-.4 1 0 1.4s1 .4 1.4 0L16 9.4V17c0 .6.4 1 1 1s1-.4 1-1V7c0-.6-.4-1-1-1"></svg:path>`,
})
export class UisArrowUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisAtIcon],svg[uis-at-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c1.8 0 3.5-.5 5-1.3c.5-.3.6-.9.4-1.4c-.3-.5-.9-.6-1.4-.4c-3.8 2.2-8.7.9-10.9-2.9S4.2 7.3 8 5.1s8.7-.9 10.9 2.9c.7 1.2 1.1 2.6 1.1 4v.8c0 1-.8 1.8-1.8 1.8s-1.8-.8-1.8-1.8V8.5c0-.6-.4-1-1-1c-.5 0-.9.3-1 .8c-2-1.4-4.9-.9-6.3 1.1s-.9 4.9 1.1 6.3c1.9 1.3 4.4 1 5.9-.7c1.3 1.6 3.6 1.9 5.2.7c.9-.7 1.5-1.8 1.5-3V12C22 6.5 17.5 2 12 2m0 12.5c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5"></svg:path>`,
})
export class UisAtIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisBagIcon],svg[uis-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 6h-3V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v1H5C3.3 6 2 7.3 2 9v9c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V9c0-1.7-1.3-3-3-3m-9-1h4v1h-4zm10 13c0 .6-.4 1-1 1H5c-.6 0-1-.4-1-1v-5.6L8.7 14H15c.1 0 .2 0 .3-.1l4.7-1.6z"></svg:path>`,
})
export class UisBagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisBarsIcon],svg[uis-bars-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 11H4c-.6 0-1 .4-1 1s.4 1 1 1h16c.6 0 1-.4 1-1s-.4-1-1-1M4 8h16c.6 0 1-.4 1-1s-.4-1-1-1H4c-.6 0-1 .4-1 1s.4 1 1 1m16 8H4c-.6 0-1 .4-1 1s.4 1 1 1h16c.6 0 1-.4 1-1s-.4-1-1-1"></svg:path>`,
})
export class UisBarsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisBatteryBoltIcon],svg[uis-battery-bolt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 7H4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6.7c-.6 0-1-.4-1-1c0-.2 0-.3.1-.5l1.4-2.5H8c-.1 0-.2 0-.3-.1h-.2l-.1-.1c-.1 0-.1-.1-.2-.1c-.1-.1-.1-.2-.2-.3V12c0-.1.1-.3.1-.4v-.1l2.3-4c.3-.5.9-.6 1.4-.4c.5.3.6.9.4 1.4L9.7 11h3.4c.1 0 .3.1.4.1h.1l.1.1c.1 0 .1.1.2.1c.1.1.1.2.2.3v.4c0 .1-.1.3-.1.4v.1l-2.3 4c-.3.3-.7.5-1 .5H17c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2m4 3c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6-.4-1-1-1"></svg:path>`,
})
export class UisBatteryBoltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisBatteryEmptyIcon],svg[uis-battery-empty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 10c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6-.4-1-1-1m-4-3H4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h13c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2"></svg:path>`,
})
export class UisBatteryEmptyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisBookmarkIcon],svg[uis-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2H8C6.3 2 5 3.3 5 5v16c0 .2 0 .3.1.5c.3.5.9.6 1.4.4l5.5-3.2l5.5 3.2c.2.1.3.1.5.1c.6 0 1-.4 1-1V5c0-1.7-1.3-3-3-3"></svg:path>`,
})
export class UisBookmarkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisBorderAltIcon],svg[uis-border-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 3.5c0-.6-.4-1-1-1h-16c-.6 0-1 .4-1 1v16c0 .6.4 1 1 1s1-.4 1-1v-15h15c.6 0 1-.4 1-1m-1 7c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0-4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0 8c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m-12 4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m4 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m4 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m4 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1"></svg:path>`,
})
export class UisBorderAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisBorderBottomIcon],svg[uis-border-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 9.5c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1m0 4c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1m0 4c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1m0-12c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1m8 0c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1m-12 0c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1m8 0c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1m0 8c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1m-12-4c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1m16 6c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0-4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0-4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0 12H4c-.6 0-1 .4-1 1s.4 1 1 1h16c.6 0 1-.4 1-1s-.4-1-1-1m-16-6c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1m0-8c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1m4 8c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1m-4 4c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1"></svg:path>`,
})
export class UisBorderBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisBorderClearIcon],svg[uis-border-clear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0 4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0-12c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0-4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1M4 15c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0 4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1M4 7c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0-4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m4 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m8 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1M8 19c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m8 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m-8-8c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m8 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m4 4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0 4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0-12c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m-8 4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m-8 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m16 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0-6c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1"></svg:path>`,
})
export class UisBorderClearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisBorderHorizontalIcon],svg[uis-border-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 11H4c-.6 0-1 .4-1 1s.4 1 1 1h16c.6 0 1-.4 1-1s-.4-1-1-1m-8 4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0 4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0-10c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1m0-4c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1M4 15c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0 4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1M4 9c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1m0-4c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1m4 0c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1m8 0c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1M8 19c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m8 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m4-4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0 4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0-12c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0-2c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1"></svg:path>`,
})
export class UisBorderHorizontalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisBorderInnerIcon],svg[uis-border-inner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 12c0-.6-.4-1-1-1h-7V4c0-.6-.4-1-1-1s-1 .4-1 1v7H4c-.6 0-1 .4-1 1s.4 1 1 1h7v7c0 .6.4 1 1 1s1-.4 1-1v-7h7c.5 0 1-.4 1-1M4 15c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.5-1-1-1m0 4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.5-1-1-1M4 9c.6 0 1-.4 1-1s-.5-1-1-1s-1 .4-1 1s.4 1 1 1m0-4c.6 0 1-.4 1-1s-.5-1-1-1s-1 .4-1 1s.4 1 1 1m4 0c.6 0 1-.4 1-1s-.5-1-1-1s-1 .4-1 1s.4 1 1 1m8 0c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1M8 19c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.5-1-1-1m8 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.5-1-1-1m4-4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.5-1-1-1m0 4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.5-1-1-1m0-10c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1m0-4c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1"></svg:path>`,
})
export class UisBorderInnerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisBorderLeftIcon],svg[uis-border-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 3c-.6 0-1 .4-1 1v16c0 .6.4 1 1 1s1-.4 1-1V4c0-.6-.4-1-1-1m4 8c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m4 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m4 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m4 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m-12-8c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m4 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m4 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m4 2c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1m0 2c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0 8c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m-8-8c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0 8c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m-4 4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m4 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m4 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m4 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1"></svg:path>`,
})
export class UisBorderLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisBorderOutIcon],svg[uis-border-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4c-.6 0-1 .4-1 1v16c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1m-1 16H5V5h14zm-7-6c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1m0 4c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1m0-8c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1m-4 4c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1m8 0c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1"></svg:path>`,
})
export class UisBorderOutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisBorderRightIcon],svg[uis-border-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.5 3c-.6 0-1 .4-1 1v16c0 .6.4 1 1 1s1-.4 1-1V4c0-.6-.4-1-1-1m-4 8c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m-4 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m-4 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m-4 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m12 8c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m-4 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m-4 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m-4 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0-4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0-8c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m8 8c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0-8c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m4-4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m-4 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m-4 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m-4 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1"></svg:path>`,
})
export class UisBorderRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisBorderTopIcon],svg[uis-border-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4.5h16c.6 0 1-.4 1-1s-.4-1-1-1H4c-.6 0-1 .4-1 1s.4 1 1 1m8 2c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0 4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0 4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0 4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m8-12c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0 4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0 4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0 4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m-4 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m-8 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m8-8c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m-8 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m-4-4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0 4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0 4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0 4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1"></svg:path>`,
})
export class UisBorderTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisBorderVerticalIcon],svg[uis-border-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3c-.6 0-1 .4-1 1v16c0 .6.4 1 1 1s1-.4 1-1V4c0-.6-.4-1-1-1m-4 8c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m-4 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m12 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m4 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1M7 3c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1M3 3c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m12 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m4 2c.6 0 1-.4 1-1s-.4-1-1-1s-1 .4-1 1s.4 1 1 1m0 2c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0 8c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1M3 7c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m0 8c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m4 4c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m-4 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m12 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m4 0c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1"></svg:path>`,
})
export class UisBorderVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisBriefcaseIcon],svg[uis-briefcase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 15.5V17c0 .6-.4 1-1 1s-1-.4-1-1v-1.5H9V17c0 .6-.4 1-1 1s-1-.4-1-1v-1.5H5c-.7 0-1.4-.2-2-.5v4c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3v-4c-.6.3-1.3.5-2 .5zM21 6h-4V5c0-1.7-1.3-3-3-3h-4C8.3 2 7 3.3 7 5v1H3c-.6 0-1 .4-1 1v4c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V7c0-.6-.4-1-1-1m-6 0H9V5c0-.6.4-1 1-1h4c.6 0 1 .4 1 1z"></svg:path>`,
})
export class UisBriefcaseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisCalendarIcon],svg[uis-calendar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 19c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-8H2zM19 4h-2V3c0-.6-.4-1-1-1s-1 .4-1 1v1H9V3c0-.6-.4-1-1-1s-1 .4-1 1v1H5C3.3 4 2 5.3 2 7v2h20V7c0-1.7-1.3-3-3-3"></svg:path>`,
})
export class UisCalendarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisCalenderIcon],svg[uis-calender-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 19c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-8H2zM19 4h-2V3c0-.6-.4-1-1-1s-1 .4-1 1v1H9V3c0-.6-.4-1-1-1s-1 .4-1 1v1H5C3.3 4 2 5.3 2 7v2h20V7c0-1.7-1.3-3-3-3"></svg:path>`,
})
export class UisCalenderIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisChartIcon],svg[uis-chart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2H5C3.3 2 2 3.3 2 5v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3M8 17c0 .6-.4 1-1 1s-1-.4-1-1v-4c0-.6.4-1 1-1s1 .4 1 1zm5 0c0 .6-.4 1-1 1s-1-.4-1-1V7c0-.6.4-1 1-1s1 .4 1 1zm5 0c0 .6-.4 1-1 1s-1-.4-1-1v-6c0-.6.4-1 1-1s1 .4 1 1z"></svg:path>`,
})
export class UisChartIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisChartPieIcon],svg[uis-chart-pie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 2c4 0 7.4 3 7.9 7H12zm4 14.9L12.6 13H20c-.4 2.5-1.8 4.7-4 5.9"></svg:path>`,
})
export class UisChartPieIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisCheckIcon],svg[uis-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.7 7.2c-.4-.4-1-.4-1.4 0l-7.5 7.5l-3.1-3.1c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l3.8 3.8c.2.2.4.3.7.3s.5-.1.7-.3l8.2-8.2c.4-.4.4-1 0-1.4"></svg:path>`,
})
export class UisCheckIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisCheckCircleIcon],svg[uis-check-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m4.2 8.3l-4.8 4.8c-.4.4-1 .4-1.4 0l-2.2-2.2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l1.5 1.5l4.1-4.1c.4-.4 1-.4 1.4 0s.4 1 0 1.4"></svg:path>`,
})
export class UisCheckCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisCheckSquareIcon],svg[uis-check-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1m-3.3 7.3l-6.8 6.8c-.4.4-1 .4-1.4 0l-3.2-3.2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.5 2.5l6.1-6.1c.4-.4 1-.4 1.4 0s.4 1 0 1.4"></svg:path>`,
})
export class UisCheckSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisCircleLayerIcon],svg[uis-circle-layer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 12c-2.8 0-5 2.2-5 5s2.2 5 5 5s5-2.2 5-5s-2.2-5-5-5m4-5c-2.4 0-4.6 1.5-5.5 3.7c3.5-.9 7 1.3 7.8 4.7c.3 1 .3 2.1 0 3.1c3.1-1.3 4.5-4.8 3.2-7.8C15.6 8.5 13.4 7 11 7m10.2-1.2C20.1 3.5 17.6 2 15 2S9.9 3.5 8.8 5.8c4-1.2 8.2 1 9.4 4.9q.75 2.25 0 4.5c3.4-1.7 4.8-5.9 3-9.4"></svg:path>`,
})
export class UisCircleLayerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisClinicMedicalIcon],svg[uis-clinic-medical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.7 10.3l-9-8c-.4-.3-.9-.3-1.3 0l-9 8c-.4.4-.5 1-.1 1.4s1 .5 1.4.1l.3-.4V21c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-9.6l.3.3c.4.4 1 .3 1.4-.1c.4-.3.4-1 0-1.3M14 15h-1v1c0 .6-.4 1-1 1s-1-.4-1-1v-1h-1c-.6 0-1-.4-1-1s.4-1 1-1h1v-1c0-.6.4-1 1-1s1 .4 1 1v1h1c.6 0 1 .4 1 1s-.4 1-1 1"></svg:path>`,
})
export class UisClinicMedicalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisClockIcon],svg[uis-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m3.5 12c-.3.5-.9.6-1.4.4l-2.6-1.5c-.3-.2-.5-.5-.5-.9V7c0-.6.4-1 1-1s1 .4 1 1v4.4l2.1 1.2c.5.3.6.9.4 1.4"></svg:path>`,
})
export class UisClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisClockEightIcon],svg[uis-clock-eight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m1 10c0 .4-.2.7-.5.9l-2.6 1.5c-.5.3-1.1.1-1.4-.4s-.1-1.1.4-1.4l2.1-1.2V7c0-.6.4-1 1-1s1 .4 1 1z"></svg:path>`,
})
export class UisClockEightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisClockFiveIcon],svg[uis-clock-five-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m2 13.7c-.5.3-1.1.1-1.4-.4l-1.5-2.8c-.1-.2-.1-.3-.1-.5V7c0-.6.4-1 1-1s1 .4 1 1v4.7l1.4 2.6c.2.5.1 1.1-.4 1.4"></svg:path>`,
})
export class UisClockFiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisClockNineIcon],svg[uis-clock-nine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m1 10c0 .6-.4 1-1 1H9c-.6 0-1-.4-1-1s.4-1 1-1h2V7c0-.6.4-1 1-1s1 .4 1 1z"></svg:path>`,
})
export class UisClockNineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisClockSevenIcon],svg[uis-clock-seven-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m1 10c0 .2-.1.3-.1.4l-1.5 2.8c-.3.5-.9.7-1.4.4s-.7-.9-.4-1.4l1.4-2.6V7c0-.6.4-1 1-1s1 .4 1 1z"></svg:path>`,
})
export class UisClockSevenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisClockTenIcon],svg[uis-clock-ten-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m1 10c0 .6-.4 1-1 1c-.2 0-.3 0-.5-.1l-2.6-1.5c-.5-.3-.6-.9-.4-1.4c.3-.5.9-.6 1.4-.4l1.1.6V7c0-.6.4-1 1-1s1 .4 1 1z"></svg:path>`,
})
export class UisClockTenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisClockThreeIcon],svg[uis-clock-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m3 11h-3c-.6 0-1-.4-1-1V7c0-.6.4-1 1-1s1 .4 1 1v4h2c.6 0 1 .4 1 1s-.4 1-1 1"></svg:path>`,
})
export class UisClockThreeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisClockTwoIcon],svg[uis-clock-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m3.1 9.4l-2.6 1.5c-.5.3-1.1.1-1.4-.4c-.1-.2-.1-.3-.1-.5V7c0-.6.4-1 1-1s1 .4 1 1v3.3l1.1-.6c.5-.3 1.1-.1 1.4.4s.1 1-.4 1.3"></svg:path>`,
})
export class UisClockTwoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisColumnsIcon],svg[uis-columns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3v18c0 .6.4 1 1 1h8V2H3c-.6 0-1 .4-1 1m19-1h-8v20h8c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1"></svg:path>`,
})
export class UisColumnsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisCommentDotsIcon],svg[uis-comment-dots-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12c0 2.3.8 4.5 2.3 6.3l-2 2c-.4.4-.4 1 0 1.4c.2.2.4.3.7.3h9c5.5 0 10-4.5 10-10S17.5 2 12 2M8 13c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m4 0c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m4 0c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1"></svg:path>`,
})
export class UisCommentDotsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisCompressIcon],svg[uis-compress-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 15H3c-.6 0-1 .4-1 1s.4 1 1 1h4v4c0 .6.4 1 1 1s1-.4 1-1v-5c0-.6-.4-1-1-1M8 2c-.6 0-1 .4-1 1v4H3c-.6 0-1 .4-1 1s.4 1 1 1h5c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1m8 7h5c.6 0 1-.4 1-1s-.4-1-1-1h-4V3c0-.6-.4-1-1-1s-1 .4-1 1v5c0 .6.4 1 1 1m5 6h-5c-.6 0-1 .4-1 1v5c0 .6.4 1 1 1s1-.4 1-1v-4h4c.6 0 1-.4 1-1s-.4-1-1-1"></svg:path>`,
})
export class UisCompressIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisCornerDownLeftIcon],svg[uis-corner-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.7 2c-.6 0-1 .4-1 1v10.4c0 1.1-.9 2-2 2h-8l2.9-2.9c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-4.6 4.6c-.4.4-.4 1 0 1.4l4.6 4.6c.2.2.5.3.7.3c.3 0 .5-.1.7-.3c.4-.4.4-1 0-1.4l-2.9-2.9h8c2.2 0 4-1.8 4-4V3c0-.6-.5-1-1-1"></svg:path>`,
})
export class UisCornerDownLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisCornerDownRightIcon],svg[uis-corner-down-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.4 15.7L14.8 11c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2.9 2.9h-7c-1.7 0-3-1.3-3-3V3c0-.6-.4-1-1-1s-1 .4-1 1v9.4c0 2.8 2.2 5 5 5h7l-2.9 2.9c-.2.2-.3.4-.3.7c0 .6.4 1 1 1c.3 0 .5-.1.7-.3l4.6-4.6c.4-.4.4-1 0-1.4"></svg:path>`,
})
export class UisCornerDownRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisCornerLeftDownIcon],svg[uis-corner-left-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4.3h-9.4c-2.8 0-5 2.2-5 5v7l-2.9-2.9c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l4.6 4.6c.2.2.4.3.7.3s.5-.1.7-.3l4.6-4.6c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-2.9 2.9v-7c0-1.7 1.3-3 3-3H21c.6 0 1-.4 1-1s-.4-1-1-1"></svg:path>`,
})
export class UisCornerLeftDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisCornerRightDownIcon],svg[uis-corner-right-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.7 13.4c-.4-.4-1-.4-1.4 0l-2.9 2.9v-8c0-2.2-1.8-4-4-4H3c-.6 0-1 .4-1 1s.4 1 1 1h10.4c1.1 0 2 .9 2 2v8l-2.9-2.9c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l4.6 4.6c.2.2.4.3.7.3s.5-.1.7-.3l4.6-4.6c.4-.4.4-1.1 0-1.4"></svg:path>`,
})
export class UisCornerRightDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisCornerUpLeftIcon],svg[uis-corner-up-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.7 6.6h-7l2.9-2.9c.4-.4.4-1 0-1.4s-1-.4-1.4 0L4.6 6.9c-.4.4-.4 1 0 1.4L9.2 13c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-2.9-3h7c1.7 0 3 1.3 3 3V21c0 .6.4 1 1 1s1-.4 1-1v-9.4c0-2.7-2.3-5-5-5"></svg:path>`,
})
export class UisCornerUpLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisCornerUpRightIcon],svg[uis-corner-up-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.4 6.9l-4.6-4.6c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2.9 2.9h-8c-2.2 0-4 1.8-4 4V21c0 .6.4 1 1 1s1-.4 1-1V10.6c0-1.1.9-2 2-2h8l-2.9 2.9c-.2.2-.3.4-.3.7c0 .6.4 1 1 1c.3 0 .5-.1.7-.3l4.6-4.6c.4-.4.4-1 0-1.4"></svg:path>`,
})
export class UisCornerUpRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisCoronavirusIcon],svg[uis-coronavirus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11h-1.1c-.2-1.7-.9-3.3-1.9-4.6l.8-.8c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-.8.8c-1.3-1.1-2.9-1.7-4.6-1.9V2c0-.6-.4-1-1-1s-1 .4-1 1v1.1c-1.7.1-3.3.8-4.6 1.9l-.8-.8c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l.8.8C3.9 7.7 3.2 9.3 3.1 11H2c-.6 0-1 .4-1 1s.4 1 1 1h1.1c.2 1.7.9 3.3 1.9 4.6l-.8.8c-.4.4-.4 1 0 1.4s1 .4 1.4 0l.8-.8c1.3 1.1 2.9 1.7 4.6 1.9V22c0 .6.4 1 1 1s1-.4 1-1v-1.1c1.7-.2 3.3-.9 4.6-1.9l.8.8c.4.4 1 .4 1.4 0s.4-1 0-1.4l-.8-.8c1.1-1.3 1.7-2.9 1.9-4.6H22c.6 0 1-.4 1-1s-.4-1-1-1M9 16c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m.5-4c-.8 0-1.5-.7-1.5-1.5S8.7 9 9.5 9s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5m5 3c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5s-.7 1.5-1.5 1.5m.5-5c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1"></svg:path>`,
})
export class UisCoronavirusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisDialpadIcon],svg[uis-dialpad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 9.2h-4c-.4 0-.8.3-.8.8v4c0 .4.3.8.8.8h4c.4 0 .8-.3.8-.8v-4c0-.4-.4-.8-.8-.8m0 7h-4c-.4 0-.8.3-.8.8v4c0 .4.3.8.8.8h4c.4 0 .8-.3.8-.8v-4c0-.4-.4-.8-.8-.8m-7-14H3c-.4 0-.8.4-.8.8v4c0 .4.3.8.8.8h4c.4 0 .8-.3.8-.8V3c0-.4-.4-.8-.8-.8m0 7H3c-.4 0-.8.3-.8.8v4c0 .4.3.8.8.8h4c.4 0 .8-.3.8-.8v-4c0-.4-.4-.8-.8-.8m14-7h-4c-.4 0-.8.3-.8.8v4c0 .4.3.8.8.8h4c.4 0 .8-.3.8-.8V3c0-.4-.4-.8-.8-.8m-7 0h-4c-.4 0-.8.4-.8.8v4c0 .4.3.8.8.8h4c.4 0 .8-.3.8-.8V3c0-.4-.4-.8-.8-.8m7 7h-4c-.4 0-.8.3-.8.8v4c0 .4.3.8.8.8h4c.4 0 .8-.3.8-.8v-4c0-.4-.4-.8-.8-.8"></svg:path>`,
})
export class UisDialpadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisDirectionIcon],svg[uis-direction-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.3 14.8L12 17.1l-2.3-2.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l3 3c.2.2.4.3.7.3s.5-.1.7-.3l3-3c.4-.4.4-1 0-1.4s-1-.4-1.4 0m-4.6-4.6L12 7.9l2.3 2.3c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-3-3c-.4-.4-1-.4-1.4 0l-3 3c-.4.4-.4 1 0 1.4s1 .4 1.4 0"></svg:path>`,
})
export class UisDirectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisDocumentLayoutCenterIcon],svg[uis-document-layout-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 8h2c.6 0 1-.4 1-1s-.4-1-1-1h-2c-.6 0-1 .4-1 1s.4 1 1 1m2 2h-2c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1M3 8h2c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1m0 4h2c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1m6 0h6c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1H9c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1m12 2H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1m-8 4H3c-.6 0-1 .4-1 1s.4 1 1 1h10c.6 0 1-.4 1-1s-.4-1-1-1"></svg:path>`,
})
export class UisDocumentLayoutCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisDocumentLayoutLeftIcon],svg[uis-document-layout-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 8h8c.6 0 1-.4 1-1s-.4-1-1-1h-8c-.6 0-1 .4-1 1s.4 1 1 1m8 2h-8c-.6 0-1 .4-1 1s.4 1 1 1h8c.6 0 1-.4 1-1s-.4-1-1-1M3 12h6c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1H3c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1m18 2H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1m-8 4H3c-.6 0-1 .4-1 1s.4 1 1 1h10c.6 0 1-.4 1-1s-.4-1-1-1"></svg:path>`,
})
export class UisDocumentLayoutLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisDocumentLayoutRightIcon],svg[uis-document-layout-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 18H3c-.6 0-1 .4-1 1s.4 1 1 1h10c.6 0 1-.4 1-1s-.4-1-1-1M3 8h8c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1m0 4h8c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1m18-8h-6c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V5c0-.6-.4-1-1-1m0 10H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1"></svg:path>`,
})
export class UisDocumentLayoutRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisDownloadAltIcon],svg[uis-download-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 9h-2c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1h2c.6 0 1-.4 1-1s-.4-1-1-1H6c-1.7 0-3 1.3-3 3v7c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3v-7c0-1.7-1.3-3-3-3m-9.7 5.7l3 3c.2.2.4.3.7.3s.5-.1.7-.3l3-3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L13 14.6V3c0-.6-.4-1-1-1s-1 .4-1 1v11.6l-1.3-1.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4"></svg:path>`,
})
export class UisDownloadAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisEllipsisHIcon],svg[uis-ellipsis-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m-7 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m14 0c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"></svg:path>`,
})
export class UisEllipsisHIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisEllipsisVIcon],svg[uis-ellipsis-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2m0-3c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m0 10c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2"></svg:path>`,
})
export class UisEllipsisVIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisExclamationCircleIcon],svg[uis-exclamation-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 15c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m1-5c0 .6-.4 1-1 1s-1-.4-1-1V8c0-.6.4-1 1-1s1 .4 1 1z"></svg:path>`,
})
export class UisExclamationCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisExclamationOctagonIcon],svg[uis-exclamation-octagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.7 7.6l-5.3-5.3c-.2-.2-.4-.3-.7-.3H8.3c-.3 0-.5.1-.7.3L2.3 7.6c-.2.2-.3.4-.3.7v7.5c0 .3.1.5.3.7l5.3 5.3c.2.1.4.2.7.2h7.5c.3 0 .5-.1.7-.3l5.3-5.3c.2-.2.3-.4.3-.7V8.3c-.1-.3-.2-.5-.4-.7M12 17c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m1-5c0 .6-.4 1-1 1s-1-.4-1-1V8c0-.6.4-1 1-1s1 .4 1 1z"></svg:path>`,
})
export class UisExclamationOctagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisExclamationTriangleIcon],svg[uis-exclamation-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.7 17.5l-8.1-14c-.8-1.4-2.7-1.9-4.1-1.1c-.5.3-.9.7-1.1 1.1l-8.1 14c-.8 1.4-.3 3.3 1.1 4.1c.5.3 1 .4 1.5.4H20c1.7 0 3-1.4 3-3c.1-.6-.1-1.1-.3-1.5M12 18c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m1-5c0 .6-.4 1-1 1s-1-.4-1-1V9c0-.6.4-1 1-1s1 .4 1 1z"></svg:path>`,
})
export class UisExclamationTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisFavoriteIcon],svg[uis-favorite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10.1c.1-.5-.3-1.1-.8-1.1l-5.7-.8L12.9 3c-.1-.2-.2-.3-.4-.4c-.5-.3-1.1-.1-1.4.4L8.6 8.2L2.9 9q-.45 0-.6.3c-.4.4-.4 1 0 1.4l4.1 4l-1 5.7c0 .2 0 .4.1.6c.3.5.9.7 1.4.4l5.1-2.7l5.1 2.7c.1.1.3.1.5.1h.2c.5-.1.9-.6.8-1.2l-1-5.7l4.1-4c.2-.1.3-.3.3-.5"></svg:path>`,
})
export class UisFavoriteIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisFlipHIcon],svg[uis-flip-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1m-4 4H7c-.3 0-.5.1-.7.3c-.4.4-.4 1 0 1.4l5 5c.2.2.4.3.7.3s.5-.1.7-.3l5-5c.2-.2.3-.4.3-.7c0-.6-.4-1-1-1m-1.6-7c0 .6.4 1 1 1h.6c.3 0 .5-.1.7-.3c.4-.4.4-1 0-1.4l-.7-.7c-.3-.3-.8-.4-1.2-.2c-.5.2-.7.8-.4 1.3zm-3.8-3.2l.4-.4l.8.8c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-1.1-1.1c-.1-.1-.2-.1-.3-.2c0-.1-.1-.2-.2-.3c-.4-.4-1-.4-1.4 0l-1.1 1.1c-.4.4-.4 1 0 1.4s1.2.5 1.5.1M7.1 9c.3 0 .5-.1.7-.3l1.1-1.1c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-1.2 1c-.1.2-.2.5-.2.7c0 .6.4 1 1 1.1m3.8 0h1.5c.6 0 1-.4 1-1s-.4-1-1-1h-1.5c-.6 0-1 .4-1 1s.5 1 1 1"></svg:path>`,
})
export class UisFlipHIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisFlipHAltIcon],svg[uis-flip-h-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.4 7.2h.2l1.9-.5c.5-.1.9-.7.7-1.2c-.1-.5-.7-.9-1.2-.7l-1.9.4c-.4.1-.8.5-.8 1c.1.5.5 1 1.1 1M9.5 9h-2c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1m3.7-3.3h.2l1.9-.5c.6-.2 1-.7.8-1.2c-.1-.5-.7-.9-1.2-.7l-1.9.4c-.4.1-.8.5-.8 1s.5 1 1 1m.3 3.3c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1zM21 2.8c-.1-.5-.7-.9-1.2-.7l-1 .2c-.4.1-.8.5-.8 1c0 .6.4 1 1 1c.1.4.5.7 1 .7c.6 0 1-.4 1-1zM4 10.5c.6 0 1-.4 1-1v-2c0-.6-.4-1-1-1s-1 .5-1 1v2c0 .6.4 1 1 1M20 7c-.6 0-1 .4-1 1v1.1c-.3.2-.5.5-.5.9c0 .6.4 1 1 1h.5c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1m0 6H4c-.6 0-1 .4-1 1v3c0 .5.3.9.8 1l16 4h.2c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1"></svg:path>`,
})
export class UisFlipHAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisFlipVIcon],svg[uis-flip-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1s1-.4 1-1V3c0-.6-.4-1-1-1m9.7 9.3l-5-5c-.2-.2-.4-.3-.7-.3c-.6 0-1 .4-1 1v10c0 .6.4 1 1 1c.3 0 .5-.1.7-.3l5-5c.4-.4.4-1 0-1.4M3.8 9.8l-1.1 1.1c-.1.1-.1.2-.2.3c-.1 0-.2.1-.3.2c-.4.4-.4 1 0 1.4l1.1 1.1c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-.3-.5l.8-.8c.4-.4.4-1 0-1.4s-1-.4-1.4 0m3.8 5.4c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l1.1 1.1c.1.1.4.3.6.3c.3 0 .5-.1.7-.3c.4-.4.4-1 0-1.4zm-.3-8.9l-.7.7c-.2.1-.3.4-.3.7c0 .6.4 1 1 1c.2 0 .3 0 .5-.1H8c.6 0 1-.4 1-1V7c0-.3-.1-.5-.3-.7c-.4-.4-1-.4-1.4 0m.7 4.3c-.6 0-1 .4-1 1v1.5c0 .6.4 1 1 1s1-.4 1-1v-1.5c0-.6-.4-1-1-1"></svg:path>`,
})
export class UisFlipVIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisFlipVAltIcon],svg[uis-flip-v-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.9 12.2c-.5-.1-1.1.2-1.2.7l-.5 1.9c-.1.6.2 1.2.8 1.3h.2c.5 0 .9-.3 1-.8l.5-1.9c.1-.5-.2-1-.8-1.2M7.5 5h2c.6 0 1-.4 1-1s-.4-1-1-1h-2c-.6 0-1 .4-1 1s.5 1 1 1M4.2 19c0-.5-.3-.9-.8-1s-1.1.2-1.2.7l-.2 1v.2c0 .6.4 1 1 1h1c.5 0 .9-.3 1-.8c.1-.4-.2-.9-.8-1.1M6.4 6.4c-.5-.1-1.1.2-1.2.7l-.5 2v.2c0 .6.4 1 1 1c.5 0 .9-.3 1-.8l.5-1.9c.1-.5-.3-1-.8-1.2m3.6 6.1c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.5-.4-1-1-1m0-6c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.5-.4-1-1-1m.5 12.1c-.5-.2-1.1-.1-1.4.4H8c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1-.4 1-1v-.5c0-.3-.2-.7-.5-.9M22 19.8l-4-16c-.1-.5-.5-.8-1-.8h-3c-.6 0-1 .4-1 1v16c0 .6.4 1 1 1h7.2c.6-.2.9-.7.8-1.2"></svg:path>`,
})
export class UisFlipVAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisGraphBarIcon],svg[uis-graph-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 13H2c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1m16-4h-4c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h4c.6 0 1-.4 1-1V10c0-.6-.4-1-1-1m-8-8h-4c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h4c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1"></svg:path>`,
})
export class UisGraphBarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisGridIcon],svg[uis-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3c-.6 0-1 .4-1 1v4h20V3c0-.6-.4-1-1-1M2 15h9V9H2zm0 6c0 .6.4 1 1 1h8v-5H2zm11-6h9V9h-9zm0 7h8c.6 0 1-.4 1-1v-4h-9z"></svg:path>`,
})
export class UisGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisGridsIcon],svg[uis-grids-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3.9v16.2c0 1 .9 1.9 1.9 1.9H8V2H3.9C2.9 2 2 2.9 2 3.9M20.1 2H16v20h4.1c1 0 1.9-.9 1.9-1.9V3.9c0-1-.9-1.9-1.9-1.9M10 22h4V2h-4z"></svg:path>`,
})
export class UisGridsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisGripHorizontalLineIcon],svg[uis-grip-horizontal-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11h18c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1m18 2H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1"></svg:path>`,
})
export class UisGripHorizontalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisHeadSideIcon],svg[uis-head-side-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.2 2c-2-.1-4 .7-5.5 2.1c-1.4 1.4-2.2 3.4-2.2 5.4l-1.9 4c-.2.5 0 1.1.5 1.3c.1.2.3.2.4.2h1v2c0 1.1.9 2 2 2h1v2c0 .6.4 1 1 1h9.3c.5-.2.8-.7.7-1.2l-.9-3.2l1.9-7.3v-.5c0-4.1-3.2-7.6-7.3-7.8"></svg:path>`,
})
export class UisHeadSideIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisHeadSideCoughIcon],svg[uis-head-side-cough-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 16c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m-4 1c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m3 3c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1M16.2 2c-4-.1-7.2 2.9-7.3 6.9v.2l-1.8 3.8c-.2.5 0 1.1.5 1.3c.1.1.3.1.4.1h.9v1.8c0 1.1.9 1.9 1.9 1.9h.9v1.8c0 .6.4 1 1 1h8.7c.5-.2.8-.7.7-1.2l-.9-3L23 9.8v-.5c0-3.9-3-7.1-6.8-7.3"></svg:path>`,
})
export class UisHeadSideCoughIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisHeadSideMaskIcon],svg[uis-head-side-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.2 2c-2-.1-4 .7-5.5 2.1c-1.4 1.4-2.2 3.3-2.2 5.4l-1.8 3c-.1.2-.2.3-.2.5c0 .1 0 .2.1.3L5 17.2v.1c.5 1 1.5 1.7 2.7 1.7h.8v2c0 .6.4 1 1 1s1-.4 1-1v-2h2c.1 0 .2 0 .3-.1l3.7-1.3v.1l1 3.5c.1.4.5.7 1 .7h.3c.5-.2.8-.7.7-1.2l-.9-3.2l1.9-7.3v-.4c0-4.1-3.2-7.6-7.3-7.8M17 15.4l-3.5 1.2v-2.9l4.3-1.4zm1.4-5.4h-.3l-5.8 2h-6l1.1-1.7c.1-.2.2-.4.1-.6v-.2C7.5 6.5 10 4 13 4h.2c3 .2 5.4 2.7 5.3 5.8z"></svg:path>`,
})
export class UisHeadSideMaskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisHistoryIcon],svg[uis-history-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3.3C13.1 1.1 8.3 1.8 5.1 4.8V3c0-.6-.4-1-1-1s-1 .4-1 1v4.5c0 .6.4 1 1 1h4.5c.6 0 1-.4 1-1s-.4-1-1-1H6.2C7.7 4.9 9.8 4 12 4c4.4 0 8 3.6 8 8s-3.6 8-8 8s-8-3.6-8-8c0-.6-.4-1-1-1s-1 .4-1 1c0 5.5 4.5 10 10 10c3.6 0 6.9-1.9 8.7-5c2.7-4.8 1.1-10.9-3.7-13.7M12 8c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1h-1V9c0-.6-.4-1-1-1"></svg:path>`,
})
export class UisHistoryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisHistoryAltIcon],svg[uis-history-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.4 3.3C12.5 1.1 7.7 1.8 4.6 4.8V3c0-.6-.4-1-1-1s-1 .4-1 1v4.5c0 .6.4 1 1 1h4.5c.6 0 1-.4 1-1s-.4-1-1-1H5.7C7.1 4.9 9.2 4 11.5 4c4.4 0 8 3.6 8 8s-3.6 8-8 8c-.6 0-1 .4-1 1s.4 1 1 1c3.6 0 6.9-1.9 8.7-5c2.7-4.8 1-10.9-3.8-13.7m-5 4.7c-.6 0-1 .4-1 1v3c0 .6.4 1 1 1h2c.6 0 1-.4 1-1s-.4-1-1-1h-1V9c0-.6-.4-1-1-1"></svg:path>`,
})
export class UisHistoryAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisHorizontalAlignLeftIcon],svg[uis-horizontal-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 10h-5V7c0-.6-.4-1-1-1H4V3c0-.6-.4-1-1-1c-.5 0-1 .4-1 1v18c0 .6.4 1 1 1s1-.4 1-1v-3h17c.6 0 1-.4 1-1v-6c0-.6-.4-1-1-1m-7 0H4V8h10z"></svg:path>`,
})
export class UisHorizontalAlignLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisHospitalIcon],svg[uis-hospital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.5 6.5h-3v-4c0-.6-.4-1-1-1h-11c-.6 0-1 .4-1 1v4h-3c-.6 0-1 .4-1 1v14c0 .6.4 1 1 1h19c.6 0 1-.4 1-1v-14c0-.6-.4-1-1-1m-14 12h-1c-.6 0-1-.4-1-1s.4-1 1-1h1c.6 0 1 .4 1 1s-.4 1-1 1m0-4h-1c-.6 0-1-.4-1-1s.4-1 1-1h1c.6 0 1 .4 1 1s-.4 1-1 1m5 4h-1c-.6 0-1-.4-1-1s.4-1 1-1h1c.6 0 1 .4 1 1s-.4 1-1 1m0-4h-1c-.6 0-1-.4-1-1s.4-1 1-1h1c.6 0 1 .4 1 1s-.4 1-1 1m1-5.5H13v.5c0 .6-.4 1-1 1s-1-.4-1-1V9h-.5c-.6 0-1-.4-1-1s.4-1 1-1h.5v-.5c0-.6.4-1 1-1s1 .4 1 1V7h.5c.6 0 1 .4 1 1s-.4 1-1 1m4 9.5h-1c-.6 0-1-.4-1-1s.4-1 1-1h1c.6 0 1 .4 1 1s-.4 1-1 1m0-4h-1c-.6 0-1-.4-1-1s.4-1 1-1h1c.6 0 1 .4 1 1s-.4 1-1 1"></svg:path>`,
})
export class UisHospitalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisHospitalSquareSignIcon],svg[uis-hospital-square-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2H5C3.3 2 2 3.3 2 5v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3m-3 15c0 .6-.4 1-1 1s-1-.4-1-1v-4h-4v4c0 .6-.4 1-1 1s-1-.4-1-1V7c0-.6.4-1 1-1s1 .4 1 1v4h4V7c0-.6.4-1 1-1s1 .4 1 1z"></svg:path>`,
})
export class UisHospitalSquareSignIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisHospitalSymbolIcon],svg[uis-hospital-symbol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m4 14c0 .6-.4 1-1 1s-1-.4-1-1v-3h-4v3c0 .6-.4 1-1 1s-1-.4-1-1V8c0-.6.4-1 1-1s1 .4 1 1v3h4V8c0-.6.4-1 1-1s1 .4 1 1z"></svg:path>`,
})
export class UisHospitalSymbolIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisHouseUserIcon],svg[uis-house-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.7 10.3l-9-8c-.4-.3-.9-.3-1.3 0l-9 8c-.4.4-.5 1-.1 1.4s1 .5 1.4.1l.3-.4V21c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-9.6l.3.3c.4.4 1 .3 1.4-.1c.4-.3.4-1 0-1.3M12 11c1.5 0 2.7 1.2 2.7 2.7s-1.2 2.7-2.7 2.7s-2.7-1.2-2.7-2.7S10.5 11 12 11m-5 9c0-.1 0-.1.1-.2c2.2-2.7 6.2-3.2 8.9-1c.4.3.7.6 1 1c0 0 0 .1.1.2z"></svg:path>`,
})
export class UisHouseUserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisImageVIcon],svg[uis-image-v-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2H5C3.3 2 2 3.3 2 5v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3m1 11.9L18.1 12c-1.2-1.1-3.1-1.1-4.2 0l-.9.9l-2.9-2.9C8.9 8.9 7 8.9 5.9 10L4 11.9V5c0-.6.4-1 1-1h14c.6 0 1 .4 1 1z"></svg:path>`,
})
export class UisImageVIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisKeySkeletonIcon],svg[uis-key-skeleton-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 4.4l.7-.7c.4-.4.4-1 0-1.4s-1-.4-1.4 0L9.8 12.8C9 12.3 8 12 7 12c-2.8 0-5 2.2-5 5s2.2 5 5 5s5-2.2 5-5c0-1-.3-2-.8-2.8l5.6-5.6l2.1 2.1c.4.4 1 .4 1.4 0s.4-1 0-1.4l-2.1-2.1l1.4-1.4l.7.7c.4.4 1 .4 1.4 0s.4-1 0-1.4zM7 20c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3"></svg:path>`,
})
export class UisKeySkeletonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisKeySkeletonAltIcon],svg[uis-key-skeleton-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.3 5.1l1.4-1.4c.4-.4.4-1 0-1.4s-1-.4-1.4 0L9.8 12.8C9 12.3 8 12 7 12c-2.8 0-5 2.2-5 5s2.2 5 5 5s5-2.2 5-5c0-1-.3-2-.8-2.8l4.9-4.9l1.4 1.4c.4.4 1 .4 1.4 0s.4-1 0-1.4l-1.4-1.4l1.4-1.4l1.4 1.4c.4.4 1 .4 1.4 0s.4-1 0-1.4zM7 20c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3"></svg:path>`,
})
export class UisKeySkeletonAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisKeyholeCircleIcon],svg[uis-keyhole-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m1.7 9c-.2.3-.4.6-.7.7V15c0 .6-.4 1-1 1s-1-.4-1-1v-3.3c-1-.6-1.3-1.8-.7-2.7S12 7.7 13 8.3c1 .5 1.3 1.7.7 2.7"></svg:path>`,
})
export class UisKeyholeCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisKeyholeSquareIcon],svg[uis-keyhole-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 2H5C3.3 2 2 3.3 2 5v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3m-5.3 9c-.2.3-.4.6-.7.7V15c0 .6-.4 1-1 1s-1-.4-1-1v-3.3c-1-.6-1.3-1.8-.7-2.7S12 7.7 13 8.3c1 .5 1.3 1.7.7 2.7"></svg:path>`,
})
export class UisKeyholeSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisKeyholeSquareFullIcon],svg[uis-keyhole-square-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1m-7.3 9c-.2.3-.4.6-.7.7V15c0 .6-.4 1-1 1s-1-.4-1-1v-3.3c-1-.6-1.3-1.8-.7-2.7S12 7.7 13 8.3c1 .5 1.3 1.7.7 2.7"></svg:path>`,
})
export class UisKeyholeSquareFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisLayerGroupIcon],svg[uis-layer-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.5 8.9l9 5.2c.2.1.3.1.5.1s.3 0 .5-.1l9-5.2c.2-.1.3-.2.4-.4c.2-.5.1-1.1-.4-1.4l-9-5.2c-.3-.2-.7-.2-1 0l-9 5.2c-.2.1-.3.2-.4.4c-.2.5-.1 1.1.4 1.4m19 2.2l-.2-.1l-8.8 5.1c-.3.2-.7.2-1 0L2.7 11l-.2.1c-.5.3-.6.9-.4 1.4c.1.2.2.3.4.4l9 5.2c.3.2.7.2 1 0l9-5.2c.5-.3.6-.9.4-1.4c-.1-.2-.2-.3-.4-.4m0 4l-.2-.1l-8.8 5.1c-.3.2-.7.2-1 0L2.7 15l-.2.1c-.5.3-.6.9-.4 1.4c.1.2.2.3.4.4l9 5.2c.3.2.7.2 1 0l9-5.2c.5-.3.6-.9.4-1.4c-.1-.2-.2-.3-.4-.4"></svg:path>`,
})
export class UisLayerGroupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisLayersAltIcon],svg[uis-layers-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 7H6c-.6 0-1 .4-1 1v2.5h7.5c.6 0 1 .4 1 1V19H16c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1m-5 5H3c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1M21 2H9c-.6 0-1 .4-1 1v2.5h9.5c.6 0 1 .4 1 1V16H21c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1"></svg:path>`,
})
export class UisLayersAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisLeftIndentIcon],svg[uis-left-indent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7h18c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1m0 4h10c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1m18 6H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1M3 15h10c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1m18.8-5.3c-.4-.4-1-.5-1.4-.1l-2 1.7l-.1.1c-.4.4-.3 1.1.1 1.4l2 1.7c.2.1.4.2.6.2c.3 0 .6-.1.8-.4c.4-.4.3-1.1-.1-1.4l-1.1-.9l1.1-.9c.4-.4.4-1 .1-1.4"></svg:path>`,
})
export class UisLeftIndentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisLeftIndentAltIcon],svg[uis-left-indent-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 17h-8c-.6 0-1 .4-1 1s.4 1 1 1h8c.6 0 1-.4 1-1s-.4-1-1-1m0-4h-8c-.6 0-1 .4-1 1s.4 1 1 1h8c.6 0 1-.4 1-1s-.4-1-1-1m-8-6h8c.6 0 1-.4 1-1s-.4-1-1-1h-8c-.6 0-1 .4-1 1s.4 1 1 1m8 2h-8c-.6 0-1 .4-1 1s.4 1 1 1h8c.6 0 1-.4 1-1s-.4-1-1-1M9 5c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1s1-.4 1-1V6c0-.6-.4-1-1-1m-4.4 7l1.1-.9c.4-.4.5-1 .1-1.4s-1-.5-1.4-.1l-2 1.7l-.1.1c-.4.4-.3 1.1.1 1.4l2 1.7c.2.1.4.2.6.2c.3 0 .6-.1.8-.4c.4-.4.3-1.1-.1-1.4z"></svg:path>`,
})
export class UisLeftIndentAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisLineSpacingIcon],svg[uis-line-spacing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 8h11c.6 0 1-.4 1-1s-.4-1-1-1H10c-.6 0-1 .4-1 1s.4 1 1 1m-4.3 7.3V8.7q.3.3.6.3c.3 0 .5-.1.7-.2c.4-.4.5-1 .1-1.4l-1.7-2C5.2 5.1 5 5 4.7 5s-.6.1-.8.4l-1.7 2c-.3.4-.3 1 .2 1.4c.4.3.9.3 1.3 0v6.6c-.4-.3-.9-.4-1.3 0s-.5 1-.1 1.4l1.7 2c.1.1.4.2.7.2s.6-.1.8-.4l1.7-2c.4-.4.3-1.1-.1-1.4c-.5-.3-1.1-.3-1.4.1M21 11H10c-.6 0-1 .4-1 1s.4 1 1 1h11c.6 0 1-.4 1-1s-.4-1-1-1m0 5H10c-.6 0-1 .4-1 1s.4 1 1 1h11c.6 0 1-.4 1-1s-.4-1-1-1"></svg:path>`,
})
export class UisLineSpacingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisLinkHIcon],svg[uis-link-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 15H7c-1.7 0-3-1.3-3-3s1.3-3 3-3h3c.6 0 1-.4 1-1s-.4-1-1-1H7c-2.8 0-5 2.2-5 5s2.2 5 5 5h3c.6 0 1-.4 1-1s-.4-1-1-1m7-8h-3c-.6 0-1 .4-1 1s.4 1 1 1h3c1.7 0 3 1.3 3 3s-1.3 3-3 3h-3c-.6 0-1 .4-1 1s.4 1 1 1h3c2.8 0 5-2.2 5-5s-2.2-5-5-5m-9 5c0 .6.4 1 1 1h6c.6 0 1-.4 1-1s-.4-1-1-1H9c-.6 0-1 .4-1 1"></svg:path>`,
})
export class UisLinkHIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisListUiAltIcon],svg[uis-list-ui-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 8h14c.6 0 1-.4 1-1s-.4-1-1-1h-14c-.6 0-1 .4-1 1s.4 1 1 1m14 3h-10c-.6 0-1 .4-1 1s.4 1 1 1h10c.6 0 1-.4 1-1s-.4-1-1-1m0 5h-6c-.6 0-1 .4-1 1s.4 1 1 1h6c.6 0 1-.4 1-1s-.4-1-1-1M3.5 6c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m4 5c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1m4 5c-.6 0-1 .4-1 1s.4 1 1 1s1-.4 1-1s-.4-1-1-1"></svg:path>`,
})
export class UisListUiAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisListUlIcon],svg[uis-list-ul-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 8h14c.6 0 1-.4 1-1s-.4-1-1-1H7c-.6 0-1 .4-1 1s.4 1 1 1m14 3H7c-.6 0-1 .4-1 1s.4 1 1 1h14c.6 0 1-.4 1-1s-.4-1-1-1m0 5H7c-.6 0-1 .4-1 1s.4 1 1 1h14c.6 0 1-.4 1-1s-.4-1-1-1M3.7 6.3c-.1-.1-.2-.2-.3-.2c-.4-.2-.8-.1-1.1.2c-.1.1-.2.2-.2.3c-.1.3-.1.5 0 .8c.1.1.1.2.2.3s.2.2.3.2c.1.1.3.1.4.1c.3 0 .5-.1.7-.3c.1-.1.2-.2.2-.3c.1-.3.1-.5 0-.8c0-.1-.1-.2-.2-.3m0 5c-.3-.3-.7-.4-1.1-.2c-.1.1-.2.1-.3.2s-.2.2-.2.3c-.1.2-.1.5 0 .8c.1.1.1.2.2.3s.2.2.3.2c.1.1.3.1.4.1s.3 0 .4-.1s.2-.1.3-.2s.2-.2.2-.3c.1-.2.1-.5 0-.8c0-.1-.1-.2-.2-.3m0 5c-.1-.1-.2-.2-.3-.2c-.2-.1-.5-.1-.8 0c-.1 0-.2.1-.3.2s-.2.2-.2.3c-.2.4-.1.8.2 1.1c.1.1.2.2.3.2c.1.1.3.1.4.1s.3 0 .4-.1s.2-.1.3-.2c.3-.3.4-.7.2-1.1c0-.1-.1-.2-.2-.3"></svg:path>`,
})
export class UisListUlIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisLockIcon],svg[uis-lock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9V7c0-2.8-2.2-5-5-5S7 4.2 7 7v2c-1.7 0-3 1.3-3 3v7c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-7c0-1.7-1.3-3-3-3M9 7c0-1.7 1.3-3 3-3s3 1.3 3 3v2H9z"></svg:path>`,
})
export class UisLockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisLockAccessIcon],svg[uis-lock-access-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2h-6c-.6 0-1 .4-1 1s.4 1 1 1h5v5c0 .6.4 1 1 1s1-.4 1-1V3c0-.6-.4-1-1-1M3 10c.6 0 1-.4 1-1V4h5c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1m6 10H4v-5c0-.6-.4-1-1-1s-1 .4-1 1v6c0 .6.4 1 1 1h6c.6 0 1-.4 1-1s-.4-1-1-1m12-6c-.6 0-1 .4-1 1v5h-5c-.6 0-1 .4-1 1s.4 1 1 1h6c.6 0 1-.4 1-1v-6c0-.6-.4-1-1-1m-9-8c-1.7 0-3 1.3-3 3v1c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2V9c0-1.7-1.3-3-3-3m1 4h-2V9c0-.6.4-1 1-1s1 .4 1 1z"></svg:path>`,
})
export class UisLockAccessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisLockAltIcon],svg[uis-lock-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9V7c0-2.8-2.2-5-5-5S7 4.2 7 7v2c-1.7 0-3 1.3-3 3v7c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-7c0-1.7-1.3-3-3-3M9 7c0-1.7 1.3-3 3-3s3 1.3 3 3v2H9zm4 10c0 .6-.4 1-1 1s-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1z"></svg:path>`,
})
export class UisLockAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisLockOpenAltIcon],svg[uis-lock-open-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9H9V7q0-1.2.9-2.1c1.2-1.2 3.1-1.2 4.2 0c.4.4.6.9.8 1.4c.1.5.7.8 1.2.7s.9-.7.7-1.2c-.2-.9-.7-1.7-1.3-2.3c-.9-1-2.2-1.5-3.5-1.5c-2.8 0-5 2.2-5 5v2c-1.7 0-3 1.3-3 3v7c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-7c0-1.7-1.3-3-3-3m-3.9 6.5l-.1.1V17c0 .6-.4 1-1 1s-1-.4-1-1v-1.4c-.6-.6-.7-1.5-.1-2.1s1.5-.7 2.1-.1c.6.5.7 1.5.1 2.1"></svg:path>`,
})
export class UisLockOpenAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisMicroscopeIcon],svg[uis-microscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 21h-5.2c.1-.2.1-.4.1-.6c3-1.2 5-4.1 5-7.4c0-2-.8-3.9-2.1-5.4l.6-.6c.1-.1.2-.2.2-.4l.7-2.1c.1-.4 0-.8-.2-1L17 1.4c-.3-.3-.7-.4-1-.2l-2 .6c-.1 0-.3.1-.4.2L7.2 8.4c-.4.4-.4 1 0 1.4l-1.4 1.4c-.4.4-.4 1 0 1.4l2.1 2.1c.4.4 1 .4 1.4 0l1.4-1.4c.4.4 1 .4 1.4 0L16.5 9c1 1.1 1.5 2.5 1.5 4c0 2.3-1.4 4.4-3.5 5.4c-.9-1.4-2.7-1.9-4.1-1c-.4.3-.8.6-1 1.1c-.4-.2-.8-.3-1.1-.6c.4-.1.7-.5.7-.9c0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1s.4 1 1 1h1.3c1 1.1 2.3 2 3.7 2.5c0 .2.1.4.1.5H4c-.6 0-1 .4-1 1s.4 1 1 1h16c.6 0 1-.4 1-1c0-.5-.4-1-1-1M8.6 12.6l-.7-.7l.7-.7l.7.7zM12 21c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1"></svg:path>`,
})
export class UisMicroscopeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisMinusSquareFullIcon],svg[uis-minus-square-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1m-6 11H9c-.6 0-1-.4-1-1s.4-1 1-1h6c.6 0 1 .4 1 1s-.4 1-1 1"></svg:path>`,
})
export class UisMinusSquareFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisMultiplyIcon],svg[uis-multiply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.4 12l6.3-6.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L12 10.6L5.7 4.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l6.3 6.3l-6.3 6.3c-.2.2-.3.4-.3.7c0 .6.4 1 1 1c.3 0 .5-.1.7-.3l6.3-6.3l6.3 6.3c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4z"></svg:path>`,
})
export class UisMultiplyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisObjectGroupIcon],svg[uis-object-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 18.3V5.7c.6-.3 1-1 1-1.7c0-1.1-.9-2-2-2c-.7 0-1.4.4-1.7 1H5.7c-.3-.6-1-1-1.7-1c-1.1 0-2 .9-2 2c0 .7.4 1.4 1 1.7v12.6c-.6.3-1 1-1 1.7c0 1.1.9 2 2 2c.7 0 1.4-.4 1.7-1h12.6c.3.6 1 1 1.7 1c1.1 0 2-.9 2-2c0-.7-.4-1.4-1-1.7m-2 0c-.3.2-.5.4-.7.7H5.7c-.2-.3-.4-.5-.7-.7V5.7c.3-.2.5-.4.7-.7h12.6c.2.3.4.5.7.7zM14 9V8c0-.6-.4-1-1-1H8c-.6 0-1 .4-1 1v5c0 .6.4 1 1 1h1v-3c0-1.1.9-2 2-2zm2 1h-5c-.6 0-1 .4-1 1v5c0 .6.4 1 1 1h5c.6 0 1-.4 1-1v-5c0-.6-.4-1-1-1"></svg:path>`,
})
export class UisObjectGroupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisObjectUngroupIcon],svg[uis-object-ungroup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 18.3v-6.6c.6-.3 1-1 1-1.7c0-1.1-.9-2-2-2c-.7 0-1.4.4-1.7 1H15V5.7c.6-.3 1-1 1-1.7c0-1.1-.9-2-2-2c-.7 0-1.4.4-1.7 1H5.7c-.3-.6-1-1-1.7-1c-1.1 0-2 .9-2 2c0 .7.4 1.4 1 1.7v6.6c-.6.3-1 1-1 1.7c0 1.1.9 2 2 2c.7 0 1.4-.4 1.7-1H9v3.3c-.6.3-1 1-1 1.7c0 1.1.9 2 2 2c.7 0 1.4-.4 1.7-1h6.6c.3.6 1 1 1.7 1c1.1 0 2-.9 2-2c0-.7-.4-1.4-1-1.7M5.7 13c-.2-.3-.4-.5-.7-.7V5.7c.3-.2.5-.4.7-.7h6.6c.2.3.4.5.7.7V9h-1.3c-.3-.6-1-1-1.7-1c-1.1 0-2 .9-2 2c0 .7.4 1.4 1 1.7V13zm7.3-.7c-.3.2-.5.4-.7.7H11v-1.3c.3-.2.5-.4.7-.7H13zm-.7 2.7c.3.6 1 1 1.7 1c1.1 0 2-.9 2-2c0-.7-.4-1.4-1-1.7V11h3.3c.2.3.4.5.7.7v6.6c-.3.2-.5.4-.7.7h-6.6c-.2-.3-.4-.5-.7-.7V15z"></svg:path>`,
})
export class UisObjectUngroupIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisPadlockIcon],svg[uis-padlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9V7c0-2.8-2.2-5-5-5S7 4.2 7 7v2c-1.7 0-3 1.3-3 3v7c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-7c0-1.7-1.3-3-3-3M9 7c0-1.7 1.3-3 3-3s3 1.3 3 3v2H9zm4.1 8.5l-.1.1V17c0 .6-.4 1-1 1s-1-.4-1-1v-1.4c-.6-.6-.7-1.5-.1-2.1s1.5-.7 2.1-.1c.6.5.7 1.5.1 2.1"></svg:path>`,
})
export class UisPadlockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisPaperclipIcon],svg[uis-paperclip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.1 12.4l-6.2 6.2c-1.7 1.7-4.4 1.7-6 0c-1.7-1.7-1.7-4.4 0-6l8-8c1-.9 2.5-.9 3.5 0c1 1 1 2.6 0 3.5L10.5 15c-.3.3-.8.3-1.1 0s-.3-.8 0-1.1l5.1-5.1c.4-.4.4-1 0-1.4s-1-.4-1.4 0L8 12.6c-1.1 1.1-1.1 2.8 0 3.9c1.1 1 2.8 1 3.9 0l6.9-6.9c1.8-1.8 1.8-4.6 0-6.4s-4.6-1.8-6.4 0l-8 8c-1.2 1.2-1.8 2.8-1.8 4.4c0 3.5 2.8 6.2 6.3 6.2c1.7 0 3.2-.7 4.4-1.8l6.2-6.2c.4-.4.4-1 0-1.4s-1-.4-1.4 0"></svg:path>`,
})
export class UisPaperclipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisParagraphIcon],svg[uis-paragraph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 13.5H3c-.6 0-1 .4-1 1s.4 1 1 1h10c.6 0 1-.4 1-1s-.4-1-1-1m8-5H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1"></svg:path>`,
})
export class UisParagraphIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisPentagonIcon],svg[uis-pentagon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.6 9.2l-9-6.5q-.6-.45-1.2 0l-9 6.5c-.3.2-.5.7-.4 1.1l3.4 10.6c.1.4.5.7 1 .7h11.1c.4 0 .8-.3 1-.7L22 10.3c.1-.4-.1-.9-.4-1.1"></svg:path>`,
})
export class UisPentagonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisPolygonIcon],svg[uis-polygon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.9 11.5l-4.5-7.8c-.2-.3-.5-.5-.9-.5h-9c-.4 0-.7.2-.9.5l-4.5 7.8c-.2.3-.2.7 0 1l4.5 7.8c.2.3.5.5.9.5h9c.4 0 .7-.2.9-.5l4.5-7.8c.1-.3.1-.7 0-1"></svg:path>`,
})
export class UisPolygonIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisPreviousIcon],svg[uis-previous-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.7 15.3L13.4 12l3.3-3.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-4 4c-.4.4-.4 1 0 1.4l4 4c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4M8 7c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1s1-.4 1-1V8c0-.6-.4-1-1-1"></svg:path>`,
})
export class UisPreviousIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisProcessIcon],svg[uis-process-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 6H6.7C8.2 4.7 10 4 12 4c.3 0 .6 0 .9.1c.5.1 1-.3 1.1-.9c.1-.5-.3-1-.9-1.1c-.4-.1-.7-.1-1.1-.1c-2.4 0-4.7.9-6.5 2.4V3c0-.6-.4-1-1-1s-1 .4-1 1v4c0 .6.4 1 1 1h4c.6 0 1-.4 1-1s-.4-1-1-1M7 14.5c-.6 0-1 .4-1 1v1.8C4.7 15.8 4 14 4 12c0-.3 0-.6.1-.9c.1-.5-.3-1-.9-1.1c-.5-.1-1 .3-1.1.9c-.1.4-.1.7-.1 1.1c0 2.4.9 4.7 2.4 6.5H3c-.6 0-1 .4-1 1s.4 1 1 1h4c.3 0 .6-.2.8-.4c0-.1.1-.2.1-.3v-4.3c.1-.6-.3-1-.9-1m14-9c.6 0 1-.4 1-1s-.4-1-1-1h-4.2c-.1 0-.2.1-.3.1c-.1.1-.2.1-.2.2s-.1.2-.1.2v4.3c0 .6.4 1 1 1s1-.4 1-1V6.7c1.3 1.4 2 3.3 2 5.3c0 .3 0 .6-.1.9c-.1.5.3 1 .9 1.1h.1c.5 0 .9-.4 1-.9c0-.4.1-.7.1-1.1c0-2.4-.9-4.7-2.4-6.5zm-.7 11l-.3-.3c-.1-.1-.2-.1-.3-.1h-4.2c-.6 0-1 .4-1 1s.4 1 1 1h1.8c-1.4 1.3-3.3 2-5.3 2c-.3 0-.6 0-.9-.1c-.5-.1-1 .3-1.1.9s.3 1 .9 1.1c.4 0 .7.1 1.1.1c2.4 0 4.7-.9 6.5-2.4V21c0 .6.4 1 1 1s1-.4 1-1v-4c0-.2-.1-.4-.2-.5"></svg:path>`,
})
export class UisProcessIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisRecordAudioIcon],svg[uis-record-audio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m0 16c-3.3 0-6-2.7-6-6s2.7-6 6-6s6 2.7 6 6s-2.7 6-6 6"></svg:path>`,
})
export class UisRecordAudioIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisRedoIcon],svg[uis-redo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 11c-.6 0-1 .4-1 1c0 2.9-1.5 5.5-4 6.9c-3.8 2.2-8.7.9-10.9-2.9S4.2 7.3 8 5.1c3.3-1.9 7.3-1.2 9.8 1.4h-2.4c-.6 0-1 .4-1 1s.4 1 1 1h4.5c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1s-1 .4-1 1v1.8C17 3 14.6 2 12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10c0-.6-.4-1-1-1"></svg:path>`,
})
export class UisRedoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisRefreshIcon],svg[uis-refresh-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 12c0-1.7-1.3-3-3-3s-3 1.3-3 3s1.3 3 3 3s3-1.3 3-3m2-8.7C13.1 1.1 8.3 1.8 5.1 4.7V3c0-.6-.4-1-1-1s-1 .4-1 1v4.5c0 .6.4 1 1 1h4.5c.6 0 1-.4 1-1s-.4-1-1-1H6.2C7.7 4.9 9.8 4 12 4c4.4 0 8 3.6 8 8c0 .6.4 1 1 1s1-.4 1-1c0-3.6-1.9-6.9-5-8.7m2.9 12.2h-4.5c-.6 0-1 .4-1 1s.4 1 1 1h2.4C16.3 19.1 14.2 20 12 20c-4.4 0-8-3.6-8-8c0-.6-.4-1-1-1s-1 .4-1 1c0 5.5 4.5 10 10 10c2.6 0 5-1 6.9-2.8V21c0 .6.4 1 1 1s1-.4 1-1v-4.5c0-.6-.5-1-1-1"></svg:path>`,
})
export class UisRefreshIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisRepeatIcon],svg[uis-repeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 17.5H4v-11h7.8l-.8.8c-.2.2-.3.4-.3.7c0 .6.4 1 1 1c.3 0 .5-.1.7-.3l2.5-2.5c.4-.4.4-1 0-1.4l-2.5-2.5c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l.8.8H3c-.6 0-1 .4-1 1v13c0 .6.4 1 1 1h2.5c.6 0 1-.4 1-1s-.4-1-1-1M21 4.5h-2.5c-.6 0-1 .4-1 1s.4 1 1 1H20v11h-8.4l.8-.8c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-2.5 2.5c-.4.4-.4 1 0 1.4l2.5 2.5c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-.8-.8H21c.6 0 1-.4 1-1v-13c0-.6-.4-1-1-1"></svg:path>`,
})
export class UisRepeatIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisRightIndentIcon],svg[uis-right-indent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7h18c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1m0 4h10c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1m18 6H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1M3 15h10c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1m15-1.3c0 .6.4 1 1 1c.2 0 .5-.1.6-.2l2-1.7l.1-.1c.4-.4.3-1.1-.1-1.4l-2-1.7c-.4-.4-1.1-.3-1.4.1c-.4.4-.3 1.1.1 1.4l1.1.9l-1.1.9c-.2.2-.3.5-.3.8"></svg:path>`,
})
export class UisRightIndentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisRightIndentAltIcon],svg[uis-right-indent-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 17h-8c-.6 0-1 .4-1 1s.4 1 1 1h8c.6 0 1-.4 1-1s-.4-1-1-1m0-4h-8c-.6 0-1 .4-1 1s.4 1 1 1h8c.6 0 1-.4 1-1s-.4-1-1-1m-8-6h8c.6 0 1-.4 1-1s-.4-1-1-1h-8c-.6 0-1 .4-1 1s.4 1 1 1m8 2h-8c-.6 0-1 .4-1 1s.4 1 1 1h8c.6 0 1-.4 1-1s-.4-1-1-1M9 5c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1s1-.4 1-1V6c0-.6-.4-1-1-1M3.6 9.6c-.4-.4-1-.3-1.4.1s-.3 1.1.1 1.4l1.1.9l-1.1.9c-.2.2-.3.5-.3.8c0 .6.4 1 1 1c.2 0 .5-.1.6-.2l2-1.7l.1-.1c.4-.4.3-1.1-.1-1.4z"></svg:path>`,
})
export class UisRightIndentAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisRocketIcon],svg[uis-rocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.6 2.1c-.1-.3-.4-.6-.7-.7c-4.2-1.1-8.5.2-11.4 3.6L9.4 6.3l-2.7-.6C5.4 5.2 4 5.8 3.4 7l-2.2 3.9q-.3.45 0 .9c.1.3.4.5.7.6l3.1.7c-.3.8-.4 1.6-.6 2.4c0 .3.1.6.3.8l3.1 3.1c.2.2.4.3.7.3h.1c.9-.1 1.7-.2 2.5-.5l.6 3c.1.3.3.6.6.7c.1.1.3.1.4.1c.2 0 .3 0 .5-.1l3.9-2.2c1.1-.6 1.7-2 1.4-3.3l-.7-2.8l1.2-1.1c3.3-2.8 4.7-7.3 3.6-11.4M7.3 8.8c-.6.8-1.2 1.6-1.6 2.4l-2.1-.5L5.1 8c.2-.4.6-.5 1.1-.4l1.7.4zM16 18.9l-2.7 1.5l-.4-2c.9-.4 1.7-1 2.4-1.6l.7-.7l.4 1.7c.2.5-.1 1-.4 1.1m.7-10.1c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5s1.5.7 1.5 1.5s-.6 1.5-1.5 1.5"></svg:path>`,
})
export class UisRocketIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisRulerIcon],svg[uis-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.6 7.1l-5.7-5.7c-.4-.4-1-.4-1.4 0L1.4 15.5c-.4.4-.4 1 0 1.4l5.7 5.7c.4.4 1 .4 1.4 0l2.1-2.1L7.1 17c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l3.5 3.5l1.4-1.4l-2.1-2.1c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.1 2.1l1.4-1.4l-3.5-3.5c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l3.5 3.5l1.4-1.4l-2.1-2.1c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.1 2.1l2.1-2.1c.5-.5.5-1.2.1-1.5"></svg:path>`,
})
export class UisRulerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisRulerCombinedIcon],svg[uis-ruler-combined-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h6c.6 0 1-.4 1-1v-3H7c-.6 0-1-.4-1-1s.4-1 1-1h3v-2H7c-.6 0-1-.4-1-1s.4-1 1-1h3v-2H7c-.6 0-1-.4-1-1s.4-1 1-1h1V7c0-.6.4-1 1-1s1 .4 1 1v3h2V7c0-.6.4-1 1-1s1 .4 1 1v3h2V7c0-.6.4-1 1-1s1 .4 1 1v3h3c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1"></svg:path>`,
})
export class UisRulerCombinedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisSanitizerIcon],svg[uis-sanitizer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.8 7.6L16 5.5V3h1c.6 0 1-.4 1-1s-.4-1-1-1H8.7Q6.6 1 5.1 2.5l-.8.8c-.4.4-.4 1 0 1.4s1 .4 1.4 0l.8-.8c.6-.6 1.4-.9 2.2-.9H10v2.5L7.2 7.6C6.4 8.2 6 9.1 6 10v12c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V10c0-.9-.4-1.8-1.2-2.4M12 3h2v2h-2zm1 14c-1.1 0-2-.9-2-2s.9-2 2-2s2 .9 2 2s-.9 2-2 2"></svg:path>`,
})
export class UisSanitizerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisSanitizerAltIcon],svg[uis-sanitizer-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 8V5c0-.6-.4-1-1-1h-1V3h1c.6 0 1-.4 1-1s-.4-1-1-1h-4.8C8.5 1 6.9 2 6.1 3.6c-.2.4 0 1 .5 1.3c.5.2 1.1 0 1.3-.4c.4-.9 1.3-1.5 2.3-1.5H12v1h-1c-.6 0-1 .4-1 1v3c-1.7 0-3 1.3-3 3v9c0 1.7 1.3 3 3 3h6c1.7 0 3-1.3 3-3v-9c0-1.7-1.3-3-3-3m-4-2h2v2h-2zm2 11h-2c-.6 0-1-.4-1-1s.4-1 1-1h2c.6 0 1 .4 1 1s-.4 1-1 1"></svg:path>`,
})
export class UisSanitizerAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisSceneryIcon],svg[uis-scenery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 6c-.8 0-1.5.7-1.5 1.5S12.7 9 13.5 9S15 8.3 15 7.5S14.3 6 13.5 6M19 2H5C3.3 2 2 3.3 2 5v14c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3m1 11.9L18.1 12c-1.2-1.1-3.1-1.1-4.2 0l-.9.9l-2.9-2.9C8.9 8.9 7 8.9 5.9 10L4 11.9V5c0-.6.4-1 1-1h14c.6 0 1 .4 1 1z"></svg:path>`,
})
export class UisSceneryIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisScheduleIcon],svg[uis-schedule-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4h-1V3c0-.6-.4-1-1-1s-1 .4-1 1v1H8V3c0-.6-.4-1-1-1s-1 .4-1 1v1H5C3.3 4 2 5.3 2 7v1h20V7c0-1.7-1.3-3-3-3M2 19c0 1.7 1.3 3 3 3h14c1.7 0 3-1.3 3-3v-9H2zm15-7c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m0 4c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m-5-4c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m0 4c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m-5-4c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m0 4c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1"></svg:path>`,
})
export class UisScheduleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisShieldPlusIcon],svg[uis-shield-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.6 3.6c-.2-.2-.5-.3-.8-.2c-2.2.5-4.4 0-6.2-1.3c-.3-.2-.8-.2-1.1 0c-1.9 1.3-4.1 1.8-6.3 1.3c-.5-.1-1.1.3-1.2.8v7.7c0 2.9 1.4 5.6 3.8 7.3l3.7 2.6c.3.2.8.2 1.2 0l3.7-2.6c2.4-1.7 3.8-4.4 3.8-7.3V4.4c-.2-.3-.3-.6-.6-.8M14 13h-1v1c0 .6-.4 1-1 1s-1-.4-1-1v-1h-1c-.6 0-1-.4-1-1s.4-1 1-1h1v-1c0-.6.4-1 1-1s1 .4 1 1v1h1c.6 0 1 .4 1 1s-.4 1-1 1"></svg:path>`,
})
export class UisShieldPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisSignalAltIcon],svg[uis-signal-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 18c-.6 0-1 .4-1 1v2c0 .6.4 1 1 1s1-.4 1-1v-2c0-.6-.4-1-1-1m5-4c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1s1-.4 1-1v-6c0-.6-.4-1-1-1M20 2c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1s1-.4 1-1V3c0-.6-.4-1-1-1m-5 7c-.6 0-1 .4-1 1v11c0 .6.4 1 1 1s1-.4 1-1V10c0-.6-.4-1-1-1"></svg:path>`,
})
export class UisSignalAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisSignalAlt3Icon],svg[uis-signal-alt-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 15H2c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-6c0-.6-.4-1-1-1m8-6h-4c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h4c.6 0 1-.4 1-1V10c0-.6-.4-1-1-1m8-8h-4c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h4c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1"></svg:path>`,
})
export class UisSignalAlt3Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisSignoutIcon],svg[uis-signout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 2H7C5.3 2 4 3.3 4 5v6h8.6l-2.3-2.3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l4 4c.4.4.4 1 0 1.4l-4 4c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l2.3-2.3H4v6c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3V5c0-1.7-1.3-3-3-3"></svg:path>`,
})
export class UisSignoutIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisSocialDistancingIcon],svg[uis-social-distancing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.2 17.3l-2-2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l.3.3h-2.6c-.6 0-1 .4-1 1s.4 1 1 1h2.6l-.3.3c-.2.2-.3.4-.3.7c0 .6.4 1 1 1c.3 0 .5-.1.7-.3l2-2c.1-.1.2-.2.2-.3s.1-.2.1-.4c0-.1 0-.3-.1-.4c0-.1-.1-.2-.2-.3M8.5 17H5.9l.3-.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-2 2c-.1.1-.2.2-.2.3s-.1.2-.1.4c0 .1 0 .3.1.4s.1.2.2.3l2 2c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-.3-.3h2.6c.6 0 1-.4 1-1s-.4-1-1-1M18 9.2c1.4 0 2.6-1.2 2.6-2.6S19.4 4 18 4s-2.6 1.2-2.6 2.6s1.2 2.6 2.6 2.6m4.7 3.7c-2.1-2.6-5.9-3-8.5-.9c-.3.3-.7.6-.9.9c-.4.6-.4 1.4.2 1.8c.2.2.5.3.8.3h1.9c.1-.3.3-.5.5-.8c1-1 2.6-1 3.5 0l.8.8h.6c.7 0 1.3-.6 1.3-1.3c.1-.3 0-.6-.2-.8m-20.5-1c-.3.3-.7.6-.9.9c-.4.6-.4 1.4.2 1.8c.2.3.5.4.8.4H3l.8-.8c1-1 2.6-1 3.5 0c.2.2.4.5.5.8h1.9c.7 0 1.3-.6 1.3-1.3c0-.3-.1-.6-.3-.8c-2.1-2.6-5.9-3-8.5-1M6 9.2c1.4 0 2.6-1.2 2.6-2.6S7.4 4 6 4S3.4 5.2 3.4 6.6S4.6 9.2 6 9.2"></svg:path>`,
})
export class UisSocialDistancingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisSortingIcon],svg[uis-sorting-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.7 17.8l-3-3c-.4-.4-1-.4-1.4 0l-3 3c-.4.4-.4 1 0 1.4s1 .4 1.4 0l2.3-2.3l2.3 2.3c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4m-4.4-7.6c.2.2.4.3.7.3s.5-.1.7-.3l3-3c.4-.4.4-1 0-1.4s-1-.4-1.4 0L12 8.1L9.7 5.8c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4z"></svg:path>`,
})
export class UisSortingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisSpaceKeyIcon],svg[uis-space-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 9c-.6 0-1 .4-1 1v3H4v-3c0-.6-.4-1-1-1s-1 .4-1 1v4c0 .6.4 1 1 1h18c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1"></svg:path>`,
})
export class UisSpaceKeyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisSquareFullIcon],svg[uis-square-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1m-1 18H4V4h16z"></svg:path>`,
})
export class UisSquareFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisStarIcon],svg[uis-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10.1c.1-.5-.3-1.1-.8-1.1l-5.7-.8L12.9 3c-.1-.2-.2-.3-.4-.4c-.5-.3-1.1-.1-1.4.4L8.6 8.2L2.9 9q-.45 0-.6.3c-.4.4-.4 1 0 1.4l4.1 4l-1 5.7c0 .2 0 .4.1.6c.3.5.9.7 1.4.4l5.1-2.7l5.1 2.7c.1.1.3.1.5.1h.2c.5-.1.9-.6.8-1.2l-1-5.7l4.1-4c.2-.1.3-.3.3-.5"></svg:path>`,
})
export class UisStarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisStarHalfAltIcon],svg[uis-star-half-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 10.1c.1-.5-.3-1.1-.8-1.1l-5.7-.8L12.9 3c-.1-.2-.2-.3-.4-.4c-.5-.3-1.1-.1-1.4.4L8.6 8.2L2.9 9q-.45 0-.6.3c-.4.4-.4 1 0 1.4l4.1 4l-1 5.7c0 .2 0 .4.1.6c.3.5.9.7 1.4.4l5.1-2.7l5.1 2.7c.1.1.3.1.5.1h.2c.5-.1.9-.6.8-1.2l-1-5.7l4.1-4c.2-.1.3-.3.3-.5m-6.2 3.5c-.2.2-.3.6-.3.9l.7 4.2l-3.8-2c-.1-.1-.3-.1-.5-.1V5.7l1.9 3.8c.1.3.4.5.8.5l4.2.6z"></svg:path>`,
})
export class UisStarHalfAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisStepForwardIcon],svg[uis-step-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.7 7.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l3.3 3.3l-3.3 3.3c-.2.2-.3.4-.3.7c0 .6.4 1 1 1c.3 0 .5-.1.7-.3l4-4c.4-.4.4-1 0-1.4zM16 7c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1s1-.4 1-1V8c0-.6-.4-1-1-1"></svg:path>`,
})
export class UisStepForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisStethoscopeIcon],svg[uis-stethoscope-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.8 10c-.4-1.2-1.6-2-2.8-2c-1.7 0-3 1.3-3 3c0 1.3.8 2.4 2 2.8v1.7c0 2.5-2 4.5-4.5 4.5S9 18 9 15.5v-.6c2.9-.5 5-3 5-5.9V3c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1s.4 1 1 1h1v5c0 2.2-1.8 4-4 4s-4-1.8-4-4V4h1c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1v6c0 2.9 2.1 5.4 5 5.9v.6c0 3.6 2.9 6.5 6.5 6.5s6.5-2.9 6.5-6.5v-1.7c1.6-.5 2.4-2.2 1.8-3.8"></svg:path>`,
})
export class UisStethoscopeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisStethoscopeAltIcon],svg[uis-stethoscope-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.8 10c-.4-1.2-1.6-2-2.8-2c-1.7 0-3 1.3-3 3c0 1.3.8 2.4 2 2.8v1.7c0 2.5-2 4.5-4.5 4.5S9 18 9 15.5v-1l3.1-2.5c1.2-1 1.9-2.4 1.9-3.9V3c0-.6-.4-1-1-1h-2c-.6 0-1 .4-1 1s.4 1 1 1h1v4.1c0 .9-.4 1.8-1.1 2.3L8 12.7l-2.9-2.3C4.4 9.9 4 9 4 8.1V4h1c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1v5.1c0 1.5.7 3 1.9 3.9L7 14.5v1c0 3.6 2.9 6.5 6.5 6.5s6.5-2.9 6.5-6.5v-1.7c1.6-.5 2.4-2.2 1.8-3.8"></svg:path>`,
})
export class UisStethoscopeAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisStopwatchIcon],svg[uis-stopwatch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 4.5h4c.6 0 1-.4 1-1s-.4-1-1-1h-4c-.6 0-1 .4-1 1s.4 1 1 1m8.3 4.1l.9-.9c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-.9.9C14 4.9 10 4.9 7.1 7.2l-.9-.9c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l.9.9C3 12.1 3.6 17.1 7.1 19.8s8.5 2.1 11.2-1.4c2.3-2.9 2.3-6.9 0-9.8m-4.6 5.9c-.4.6-1 1-1.7 1c-1.1 0-2-.9-2-2c0-.7.4-1.4 1-1.7V9.5c0-.6.4-1 1-1s1 .4 1 1v2.3c1 .5 1.3 1.7.7 2.7"></svg:path>`,
})
export class UisStopwatchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisStoreSlashIcon],svg[uis-store-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 10.6c.8.9 1.8 1.4 3 1.4v1.8l2 2v-4.3c1.2-.7 2-2 2-3.4c0-.1 0-.3-.1-.4l-2-5c-.1-.5-.5-.7-.9-.7H6.2zc-.1.1 0 0 0 0m7.7 10.7L20 18.6l-2-2l-4.8-4.8l-9.1-9.2l-1.4-1.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l2 2l-1.2 3c-.1 0-.1.2-.1.3c0 1.4.8 2.7 2 3.4V21c0 .6.4 1 1 1h14c.4 0 .8-.3.9-.7l1.4 1.4c.4.4 1 .4 1.4 0s.4-1 0-1.4M10 14c-.6 0-1 .4-1 1v5H6v-8c1.2 0 2.2-.5 3-1.4c.3.3.6.6 1 .8l2.6 2.6zm8 6h-3v-3.6l3 3z"></svg:path>`,
})
export class UisStoreSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisSubjectIcon],svg[uis-subject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8h18c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1m10 8H3c-.6 0-1 .4-1 1s.4 1 1 1h10c.6 0 1-.4 1-1s-.4-1-1-1m8-5H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1"></svg:path>`,
})
export class UisSubjectIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisSyncExclamationIcon],svg[uis-sync-exclamation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13c.6 0 1-.4 1-1V9c0-.6-.4-1-1-1s-1 .4-1 1v3c0 .6.4 1 1 1m-1 2c0 .5.5 1 1 1s1-.5 1-1c0-.3-.1-.5-.3-.7c-.3-.3-.7-.4-1.1-.2c-.1 0-.2.1-.3.2c-.2.2-.3.4-.3.7m6-11.7C13.1 1.1 8.3 1.8 5.1 4.7V3c0-.6-.4-1-1-1s-1 .4-1 1v4.5c0 .1 0 .2.1.3v.1c.1.2.3.4.5.5s.3.1.4.1h4.5c.6 0 1-.4 1-1s-.4-1-1-1H6.2C7.7 4.9 9.8 4 12 4c4.4 0 8 3.6 8 8c0 .6.4 1 1 1s1-.4 1-1c0-3.6-1.9-6.9-5-8.7m2.9 12.2h-4.5c-.6 0-1 .4-1 1s.4 1 1 1h2.4C16.3 19.1 14.2 20 12 20c-4.4 0-8-3.6-8-8c0-.6-.4-1-1-1s-1 .4-1 1c0 5.5 4.5 10 10 10c2.6 0 5-1 6.9-2.8V21c0 .6.4 1 1 1s1-.4 1-1v-4.5c0-.6-.5-1-1-1"></svg:path>`,
})
export class UisSyncExclamationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisSyncSlashIcon],svg[uis-sync-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.3 7.1l1.4-1.4l2-2c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-2 2c-3.6-3-8.9-3.1-12.6 0c-.2.1-.4.3-.6.5V3c0-.6-.4-1-1-1s-1 .4-1 1v4.5c0 .6.4 1 1 1h4.5c.6 0 1-.4 1-1s-.4-1-1-1H6.2c2.5-2.6 6.5-3.3 9.8-1.4l.9.6L5.7 16.9C4.6 15.5 4 13.8 4 12c0-.6-.4-1-1-1s-1 .4-1 1c0 2.3.8 4.6 2.3 6.3l-2 2c-.2.2-.3.4-.3.7c0 .6.4 1 1 1c.3 0 .5-.1.7-.3l2-2l1.4-1.4zm1.6 8.4h-4.5c-.6 0-1 .4-1 1s.4 1 1 1h2.4c-2.2 2.4-5.8 3.2-8.9 1.9l-1.5 1.5c1.4.7 3 1.1 4.6 1.1c2.6 0 5-1 6.9-2.8V21c0 .6.4 1 1 1s1-.4 1-1v-4.5c0-.6-.5-1-1-1m-.5-6.6c.4 1 .6 2 .6 3.1c0 .6.4 1 1 1s1-.4 1-1c0-1.6-.4-3.2-1.1-4.6z"></svg:path>`,
})
export class UisSyncSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisTableIcon],svg[uis-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1M10 20v-4h4v4zm0-6v-4h4v4zm-6-4h4v4H4zm6-2V4h4v4zm6 2h4v4h-4zm4-2h-4V4h4zM8 4v4H4V4zM4 16h4v4H4zm12 4v-4h4v4z"></svg:path>`,
})
export class UisTableIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisThLargeIcon],svg[uis-th-large-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4c-.6 0-1 .4-1 1v16c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1m-1 8h-6V5h6zm-8-6v6H5V5zm-6 8h6v6H5zm8 6v-6h6v6z"></svg:path>`,
})
export class UisThLargeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisTimesCircleIcon],svg[uis-times-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2m3.7 12.3c.4.4.4 1 0 1.4s-1 .4-1.4 0L12 13.4l-2.3 2.3c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l2.3-2.3l-2.3-2.3c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l2.3 2.3l2.3-2.3c.4-.4 1-.4 1.4 0s.4 1 0 1.4L13.4 12z"></svg:path>`,
})
export class UisTimesCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisToggleOffIcon],svg[uis-toggle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 6.5h-9C4.5 6.5 2 9 2 12s2.5 5.5 5.5 5.5h9c3 0 5.5-2.5 5.5-5.5s-2.5-5.5-5.5-5.5m-9 8C6.1 14.5 5 13.4 5 12s1.1-2.5 2.5-2.5S10 10.6 10 12s-1.1 2.5-2.5 2.5"></svg:path>`,
})
export class UisToggleOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisToggleOnIcon],svg[uis-toggle-on-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 6.5h-9C4.5 6.5 2 9 2 12s2.5 5.5 5.5 5.5h9c3 0 5.5-2.5 5.5-5.5s-2.5-5.5-5.5-5.5m0 8c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5S19 10.6 19 12s-1.1 2.5-2.5 2.5"></svg:path>`,
})
export class UisToggleOnIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisToiletPaperIcon],svg[uis-toilet-paper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.3 20.4c-1.2-1.4-1.8-3.1-1.8-4.9V8c0-3.3-2.2-6-5-6h-9c-2.8 0-5 2.7-5 6s2.2 6 5 6h3v1.5c0 2.3.8 4.5 2.2 6.2c.2.2.5.3.8.3h9c.6 0 1-.4 1-1c0-.2-.1-.5-.2-.6M6.5 9.2c-.6 0-1.1-.6-1-1.2c-.1-.6.4-1.2 1-1.2c.6.1 1.1.6 1 1.2c.1.6-.4 1.2-1 1.2M13 20c-1-1.3-1.5-2.9-1.5-4.6V7.9c0-1.4-.4-2.8-1.3-4h5.3c1.7 0 3 1.8 3 4v7.5c0 1.6.4 3.2 1.1 4.6z"></svg:path>`,
})
export class UisToiletPaperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisTriangleIcon],svg[uis-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.9 19.3l-9-15.6l-.3-.3c-.5-.3-1.1-.2-1.4.3l-9 15.6c-.2.1-.2.3-.2.5c0 .6.4 1 1 1h18c.2 0 .3 0 .5-.1c.5-.3.6-.9.4-1.4"></svg:path>`,
})
export class UisTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisUnlockIcon],svg[uis-unlock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9H9V7q0-1.2.9-2.1c1.2-1.2 3.1-1.2 4.2 0c.4.4.6.9.8 1.4c.1.5.7.8 1.2.7s.9-.7.7-1.2c-.2-.9-.7-1.7-1.3-2.3c-.9-1-2.2-1.5-3.5-1.5c-2.8 0-5 2.2-5 5v2c-1.7 0-3 1.3-3 3v7c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-7c0-1.7-1.3-3-3-3"></svg:path>`,
})
export class UisUnlockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisUnlockAltIcon],svg[uis-unlock-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9H9V7q0-1.2.9-2.1c1.2-1.2 3.1-1.2 4.2 0c.4.4.6.9.8 1.4c.1.5.7.8 1.2.7s.9-.7.7-1.2c-.2-.9-.7-1.7-1.3-2.3c-.9-1-2.2-1.5-3.5-1.5c-2.8 0-5 2.2-5 5v2c-1.7 0-3 1.3-3 3v7c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-7c0-1.7-1.3-3-3-3m-4 8c0 .6-.4 1-1 1s-1-.4-1-1v-3c0-.6.4-1 1-1s1 .4 1 1z"></svg:path>`,
})
export class UisUnlockAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisUploadAltIcon],svg[uis-upload-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 9h-2c-.6 0-1 .4-1 1s.4 1 1 1h2c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-7c0-.6.4-1 1-1h2c.6 0 1-.4 1-1s-.4-1-1-1H6c-1.7 0-3 1.3-3 3v7c0 1.7 1.3 3 3 3h12c1.7 0 3-1.3 3-3v-7c0-1.7-1.3-3-3-3M9.7 6.7L11 5.4V17c0 .6.4 1 1 1s1-.4 1-1V5.4l1.3 1.3c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-3-3c-.4-.4-1-.4-1.4 0l-3 3c-.4.4-.4 1 0 1.4s1 .4 1.4 0"></svg:path>`,
})
export class UisUploadAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisUserArrowsIcon],svg[uis-user-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.6 6.9c0 .1.1.2.2.3l2 2c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4l-.3-.3h4.2l-.3.3c-.2.2-.3.4-.3.7c0 .6.4 1 1 1c.3 0 .5-.1.7-.3l2-2c.1-.1.2-.2.2-.3s.1-.2.1-.4c0-.1 0-.3-.1-.4s-.1-.2-.2-.3l-2-2c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l.3.3H9.9l.3-.3c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-2 2c-.1.1-.2.2-.2.3s-.1.2-.1.4c0 .1 0 .3.1.4M6 14.7c1.4 0 2.6-1.2 2.6-2.6S7.4 9.5 6 9.5s-2.6 1.2-2.6 2.6s1.2 2.6 2.6 2.6m3.8 2.7c-2.6-2.1-6.4-1.7-8.5.9q-.3.45-.3.9c0 .7.6 1.3 1.3 1.3h7.4c.5 0 1-.3 1.2-.7s.2-1-.2-1.4c-.3-.4-.6-.7-.9-1m5.6-5.3c0 1.4 1.2 2.6 2.6 2.6s2.6-1.2 2.6-2.6s-1.2-2.6-2.6-2.6s-2.6 1.2-2.6 2.6m7.3 6.3c-.3-.3-.6-.7-.9-.9c-2.6-2.1-6.4-1.7-8.5.9c-.2.2-.3.5-.3.8c0 .7.6 1.3 1.3 1.3h7.4c.5 0 1-.3 1.2-.7c.2-.5.1-1-.2-1.4"></svg:path>`,
})
export class UisUserArrowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisUserMdIcon],svg[uis-user-md-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.9 13.2c-.1 0-.1-.1-.2-.1C17.2 12 18 10.3 18 8.4v-.7l.3-2.4c.2-1.6-.9-3-2.4-3.3l-.9-.2q-3-.45-6 0l-.8.2c-1.6.3-2.7 1.7-2.5 3.3L6 7.7v.7c0 1.8.8 3.6 2.3 4.7c-.1 0-.1.1-.2.1c-3.3 1.4-5.6 4.5-6 8.1c-.1.5.3 1 .9 1.1s17.5 0 18 0h.1c.5-.1.9-.6.9-1.1c-.5-3.6-2.8-6.7-6.1-8.1M12 16.3l-1.7-1.7q1.65-.3 3.3 0zm0-3.9c-2.2 0-3.9-1.7-4-3.9h8c-.1 2.2-1.8 3.9-4 3.9"></svg:path>`,
})
export class UisUserMdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisUserNurseIcon],svg[uis-user-nurse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.2 12.9s-.1 0 0 0c-.2-.1-.3-.2-.5-.2c2.6-2 3.1-5.8 1-8.4s-5.8-3.1-8.4-1s-3.1 5.8-1 8.4c.3.4.6.7 1 1c-.1.1-.3.1-.4.2h-.1c-3.2 1.5-5.4 4.5-5.8 8c0 .5.4 1 1 1.1h18c.5-.1.9-.6.9-1.1c-.3-3.5-2.5-6.5-5.7-8M8 7.6c.2-2.2 2.2-3.8 4.3-3.6c1.9.2 3.4 1.7 3.6 3.6zm4 8.6l-1.9-1.9q1.95-.45 3.9 0z"></svg:path>`,
})
export class UisUserNurseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisVectorSquareIcon],svg[uis-vector-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 16.2V7.8c1.2-.4 2-1.5 2-2.8c0-1.7-1.3-3-3-3c-1.3 0-2.4.8-2.8 2H7.8C7.4 2.8 6.3 2 5 2C3.3 2 2 3.3 2 5c0 1.3.8 2.4 2 2.8v8.4c-1.2.4-2 1.5-2 2.8c0 1.7 1.3 3 3 3c1.3 0 2.4-.8 2.8-2h8.4c.4 1.2 1.5 2 2.8 2c1.7 0 3-1.3 3-3c0-1.3-.8-2.4-2-2.8M16.2 18H7.8c-.3-.8-1-1.5-1.8-1.8V7.8c.8-.3 1.5-1 1.8-1.8h8.4c.3.8 1 1.5 1.8 1.8v8.4c-.8.3-1.5 1-1.8 1.8M19 4c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1M5 4c.6 0 1 .4 1 1s-.4 1-1 1s-1-.4-1-1s.4-1 1-1m0 16c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m14 0c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1"></svg:path>`,
})
export class UisVectorSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisVectorSquareAltIcon],svg[uis-vector-square-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 18.3V5.7c.6-.3 1-1 1-1.7c0-1.1-.9-2-2-2c-.7 0-1.4.4-1.7 1H5.7c-.3-.6-1-1-1.7-1c-1.1 0-2 .9-2 2c0 .7.4 1.4 1 1.7v12.6c-.6.3-1 1-1 1.7c0 1.1.9 2 2 2c.7 0 1.4-.4 1.7-1h12.6c.3.6 1 1 1.7 1c1.1 0 2-.9 2-2c0-.7-.4-1.4-1-1.7m-2 0c-.3.2-.5.4-.7.7H5.7c-.2-.3-.4-.5-.7-.7V5.7c.3-.2.5-.4.7-.7h12.6c.2.3.4.5.7.7zM16 7H8c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h8c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1"></svg:path>`,
})
export class UisVectorSquareAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisVirusSlashIcon],svg[uis-virus-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.8 18.4l-4-4l-2.1-2.1l-8-8l-3-3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4L5 6.4C3.9 7.7 3.2 9.3 3.1 11H2c-.6 0-1 .4-1 1s.4 1 1 1h1.1c.2 1.7.9 3.3 1.9 4.6l-.8.8c-.4.4-.4 1 0 1.4s1 .4 1.4 0l.8-.8c1.3 1.1 2.9 1.7 4.6 1.9V22c0 .6.4 1 1 1s1-.4 1-1v-1.1c1.7-.2 3.3-.9 4.6-1.9l3.7 3.7c.2.2.4.3.7.3s.5-.1.7-.3c.4-.4.4-1 0-1.4zM9 16c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m.5-4c-.8 0-1.5-.7-1.5-1.5c0-.3.1-.6.3-.8l2.1 2.1c-.3.1-.6.2-.9.2m11.4 1H22c.6 0 1-.4 1-1s-.4-1-1-1h-1.1c-.2-1.7-.9-3.3-1.9-4.6l.8-.8c.4-.4.4-1 0-1.4s-1-.4-1.4 0l-.8.8c-1.3-1.1-2.9-1.7-4.6-1.9V2c0-.6-.4-1-1-1s-1 .4-1 1v1.1c-1 .1-2 .4-2.9.8l12 12c.4-.9.7-1.9.8-2.9M15 10c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1"></svg:path>`,
})
export class UisVirusSlashIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisWebGridIcon],svg[uis-web-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2h-5v20h5c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1M2 21c0 .6.4 1 1 1h11v-9H2zM2 3v8h12V2H3c-.6 0-1 .4-1 1"></svg:path>`,
})
export class UisWebGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisWebGridAltIcon],svg[uis-web-grid-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3c-.6 0-1 .4-1 1v5h20V3c0-.6-.4-1-1-1M2 21c0 .6.4 1 1 1h8V10H2zm11 1h8c.6 0 1-.4 1-1V10h-9z"></svg:path>`,
})
export class UisWebGridAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisWebSectionIcon],svg[uis-web-section-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3v18c0 .6.4 1 1 1h11V2H3c-.6 0-1 .4-1 1m19-1h-5v20h5c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1"></svg:path>`,
})
export class UisWebSectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisWebSectionAltIcon],svg[uis-web-section-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3v18c0 .6.4 1 1 1h5V2H3c-.6 0-1 .4-1 1m19-1H10v20h11c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1"></svg:path>`,
})
export class UisWebSectionAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisWindowGridIcon],svg[uis-window-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3v18c0 .6.4 1 1 1h5V2H3c-.6 0-1 .4-1 1m19-1H10v9h12V3c0-.6-.4-1-1-1M10 22h11c.6 0 1-.4 1-1v-8H10z"></svg:path>`,
})
export class UisWindowGridIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisWindowMaximizeIcon],svg[uis-window-maximize-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2H3c-.6 0-1 .4-1 1v5h20V3c0-.6-.4-1-1-1M2 21c0 .6.4 1 1 1h18c.6 0 1-.4 1-1V10H2z"></svg:path>`,
})
export class UisWindowMaximizeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisWindowSectionIcon],svg[uis-window-section-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 21c0 .6.4 1 1 1h5V10H2zm14 1h5c.6 0 1-.4 1-1V10h-6zm-6 0h4V10h-4zM21 2H3c-.6 0-1 .4-1 1v5h20V3c0-.6-.4-1-1-1"></svg:path>`,
})
export class UisWindowSectionIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisWrapTextIcon],svg[uis-wrap-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7.2h18c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1m6 8H3c-.6 0-1 .4-1 1s.4 1 1 1h6c.6 0 1-.4 1-1s-.4-1-1-1m9.5-5H3c-.6 0-1 .4-1 1s.4 1 1 1h15.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-2.8c.3-.4.4-.9 0-1.3s-1-.5-1.4-.1l-2 1.7l-.1.1c-.4.4-.3 1.1.1 1.4l2 1.7c.2.1.4.2.6.2c.3 0 .6-.1.8-.4c.3-.4.3-.9 0-1.3h2.8c1.9 0 3.5-1.6 3.5-3.5s-1.6-3.5-3.5-3.5"></svg:path>`,
})
export class UisWrapTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisAlignRightIcon],svg[uis-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7h18c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1m18 2H7c-.6 0-1 .4-1 1s.4 1 1 1h14c.6 0 1-.4 1-1s-.4-1-1-1m0 4H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1m0 4H7c-.6 0-1 .4-1 1s.4 1 1 1h14c.6 0 1-.4 1-1s-.4-1-1-1"></svg:path>`,
})
export class UisAlignRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisAirplayIcon],svg[uis-airplay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.8 13.4c-.1-.1-.1-.2-.2-.2c-.5-.3-1.1-.2-1.5.2l-4 6c0 .2-.1.4-.1.6c0 .6.4 1 1 1h8c.2 0 .4-.1.6-.2c.5-.3.6-.9.3-1.4zM19 3H5C3.3 3 2 4.3 2 6v9c0 1.7 1.3 3 3 3h.8c.6 0 1-.4 1-1s-.4-1-1-1H5c-.6 0-1-.4-1-1V6c0-.6.4-1 1-1h14c.6 0 1 .4 1 1v9c0 .6-.4 1-1 1h-.8c-.6 0-1 .4-1 1s.4 1 1 1h.8c1.7 0 3-1.3 3-3V6c0-1.7-1.3-3-3-3"></svg:path>`,
})
export class UisAirplayIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisAlignLetterRightIcon],svg[uis-align-letter-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 20H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1M10 4h11c.6 0 1-.4 1-1s-.4-1-1-1H10c-.6 0-1 .4-1 1s.4 1 1 1m11 12H11c-.6 0-1 .4-1 1s.4 1 1 1h10c.6 0 1-.4 1-1s-.4-1-1-1m0-6H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1m0-4H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1"></svg:path>`,
})
export class UisAlignLetterRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisAlignAltIcon],svg[uis-align-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 15H3c-.6 0-1 .4-1 1s.4 1 1 1h7c.6 0 1-.4 1-1s-.4-1-1-1m0-4H3c-.6 0-1 .4-1 1s.4 1 1 1h7c.6 0 1-.4 1-1s-.4-1-1-1m0-4H3c-.6 0-1 .4-1 1s.4 1 1 1h7c.6 0 1-.4 1-1s-.4-1-1-1m4-2h7c.6 0 1-.4 1-1s-.4-1-1-1h-7c-.6 0-1 .4-1 1s.4 1 1 1m-4 14H3c-.6 0-1 .4-1 1s.4 1 1 1h7c.6 0 1-.4 1-1s-.4-1-1-1m11-4h-7c-.6 0-1 .4-1 1s.4 1 1 1h7c.6 0 1-.4 1-1s-.4-1-1-1m0-8h-7c-.6 0-1 .4-1 1s.4 1 1 1h7c.6 0 1-.4 1-1s-.4-1-1-1M10 3H7c-.6 0-1 .4-1 1s.4 1 1 1h3c.6 0 1-.4 1-1s-.4-1-1-1m11 8h-7c-.6 0-1 .4-1 1s.4 1 1 1h7c.6 0 1-.4 1-1s-.4-1-1-1m-4 8h-3c-.6 0-1 .4-1 1s.4 1 1 1h3c.6 0 1-.4 1-1s-.4-1-1-1"></svg:path>`,
})
export class UisAlignAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisAlignCenterJustifyIcon],svg[uis-align-center-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 19H7c-.6 0-1 .4-1 1s.4 1 1 1h10c.6 0 1-.4 1-1s-.4-1-1-1M3 5h18c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1m18 10H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1m0-4H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1m0-4H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1"></svg:path>`,
})
export class UisAlignCenterJustifyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisAlignLeftJustifyIcon],svg[uis-align-left-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 15H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1m-6 4H3c-.6 0-1 .4-1 1s.4 1 1 1h12c.6 0 1-.4 1-1s-.4-1-1-1M3 5h18c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1m18 2H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1m0 4H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1"></svg:path>`,
})
export class UisAlignLeftJustifyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisAlignJustifyIcon],svg[uis-align-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7h18c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1m18 2H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1m0 4H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1m0 4H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1"></svg:path>`,
})
export class UisAlignJustifyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[uisAlignLeftIcon],svg[uis-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7h18c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1m0 4h14c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1m18 2H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1m-4 4H3c-.6 0-1 .4-1 1s.4 1 1 1h14c.6 0 1-.4 1-1s-.4-1-1-1"></svg:path>`,
})
export class UisAlignLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
