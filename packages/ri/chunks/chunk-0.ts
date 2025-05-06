import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ri24HoursFillIcon],svg[ri-24-hours-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.005 13.003a3 3 0 0 1 2.08 5.162l-1.91 1.837h2.83v2h-6l-.001-1.724l3.694-3.555a1 1 0 1 0-1.693-.72h-2a3 3 0 0 1 3-3m6 0v4h2v-4h2v9h-2v-3h-4v-6zm-14-1a7.99 7.99 0 0 0 3 6.246v2.416a10 10 0 0 1-5-8.662zm8-10c5.185 0 9.449 3.946 9.95 9h-2.012A8.001 8.001 0 0 0 5.87 6.868l2.135 2.135h-6v-6L4.45 5.449a9.98 9.98 0 0 1 7.554-3.446"></svg:path>`,
})
export class Ri24HoursFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riABIcon],svg[ri-a-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 15v2c0 1.054.95 2 2 2h3v2H7a4 4 0 0 1-4-4v-2zm13-5l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3h-2.154L16 10zm-1 2.885L15.753 16h2.492zM3 3h6a3 3 0 0 1 2.235 5A3 3 0 0 1 9 13H3zm6 6H5v2h4a1 1 0 1 0 0-2m8-6a4 4 0 0 1 4 4v2h-2V7a2 2 0 0 0-2-2h-3V3zM9 5H5v2h4a1 1 0 0 0 0-2"></svg:path>`,
})
export class RiABIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAccessibilityLineIcon],svg[ri-accessibility-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 12a8 8 0 1 1 16 0a8 8 0 0 1-16 0m8-10C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10S17.523 2 12 2m0 6.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m0 1c-1.557 0-3.178-.357-4.629-.929L6.63 10.43c1.076.429 2.228.718 3.37.901c0 .87.086 1.764-.316 2.567l-1.578 3.156l1.79.894l1.552-3.105a.618.618 0 0 1 1.106 0l1.552 3.105l1.79-.894l-1.578-3.156C13.915 13.094 14 12.2 14 11.33a16.5 16.5 0 0 0 3.359-.897c.025-.01-.73-1.862-.733-1.86c-1.453.566-3.067.927-4.626.927"></svg:path>`,
})
export class RiAccessibilityLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAccessibilityFillIcon],svg[ri-accessibility-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m1.5-15a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-6.871 3.428l.742-1.857c1.45.572 3.072.929 4.629.929c1.56 0 3.173-.361 4.626-.928c.003 0 .758 1.851.733 1.861a16.5 16.5 0 0 1-3.36.897c0 .87-.084 1.764.318 2.567l1.577 3.156l-1.789.894l-1.552-3.105a.618.618 0 0 0-1.106 0l-1.553 3.105l-1.789-.894l1.578-3.156c.402-.803.317-1.697.317-2.567c-1.143-.183-2.295-.472-3.371-.902"></svg:path>`,
})
export class RiAccessibilityFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAccountBox2FillIcon],svg[ri-account-box-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4.995C3 3.893 3.893 3 4.995 3h14.01C20.107 3 21 3.893 21 4.995v14.01A1.995 1.995 0 0 1 19.005 21H4.995A1.995 1.995 0 0 1 3 19.005zM12 8a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0 4a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 3a2 2 0 0 1 2 2h2a4 4 0 0 0-8 0h2a2 2 0 0 1 2-2"></svg:path>`,
})
export class RiAccountBox2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ri4kLineIcon],svg[ri-4k-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v14h16V5zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m8.5 10.5h-1V15H9v-1.5H6V9h1.5v3H9V9h1.5v3h1zM18 15h-1.75l-1.75-2.25V15H13V9h1.5v2.25L16.25 9H18l-2.25 3z"></svg:path>`,
})
export class Ri4kLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[ri24HoursLineIcon],svg[ri-24-hours-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.005 13.003a3 3 0 0 1 2.08 5.162l-1.91 1.837h2.83v2h-6l-.001-1.724l3.694-3.555a1 1 0 1 0-1.693-.72h-2a3 3 0 0 1 3-3m6 0v4h2v-4h2v9h-2v-3h-4v-6zm-14-1a7.99 7.99 0 0 0 3 6.246v2.416a10 10 0 0 1-5-8.662zm8-10c5.185 0 9.449 3.946 9.95 9h-2.012a8.001 8.001 0 0 0-14.554-3.5h2.616v2h-6v-6h2v2.499a9.99 9.99 0 0 1 8-4"></svg:path>`,
})
export class Ri24HoursLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAccountBoxFillIcon],svg[ri-account-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4.995C3 3.893 3.893 3 4.995 3h14.01C20.107 3 21 3.893 21 4.995v14.01A1.995 1.995 0 0 1 19.005 21H4.995A1.995 1.995 0 0 1 3 19.005zM6.357 18h11.49a6.99 6.99 0 0 0-5.745-3a6.99 6.99 0 0 0-5.745 3M12 13a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7"></svg:path>`,
})
export class RiAccountBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAccountBoxLineIcon],svg[ri-account-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4.995C3 3.893 3.893 3 4.995 3h14.01C20.107 3 21 3.893 21 4.995v14.01A1.995 1.995 0 0 1 19.005 21H4.995A1.995 1.995 0 0 1 3 19.005zM5 5v14h14V5zm2.972 13.18a10 10 0 0 1-1.751-.978A7 7 0 0 1 12.102 14c2.4 0 4.517 1.207 5.778 3.047a10 10 0 0 1-1.724 1.025A5 5 0 0 0 12.102 16c-1.716 0-3.23.864-4.13 2.18M12 13a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7m0-2a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path>`,
})
export class RiAccountBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAccountCircle2FillIcon],svg[ri-account-circle-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-14a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0 4a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 3a2 2 0 0 1 2 2h2a4 4 0 0 0-8 0h2a2 2 0 0 1 2-2"></svg:path>`,
})
export class RiAccountCircle2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAccountCircle2LineIcon],svg[ri-account-circle-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0-12a1 1 0 1 1 0 2a1 1 0 0 1 0-2m0 4a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 3a2 2 0 0 0-2 2H8a4 4 0 0 1 8 0h-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class RiAccountCircle2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAccountCircleFillIcon],svg[ri-account-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12S6.48 2 12 2M6.023 15.416C7.491 17.606 9.695 19 12.16 19s4.669-1.393 6.136-3.584A8.97 8.97 0 0 0 12.16 13a8.97 8.97 0 0 0-6.137 2.416M12 11a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path>`,
})
export class RiAccountCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAccountCircleLineIcon],svg[ri-account-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m.16 14a6.98 6.98 0 0 0-5.147 2.256A7.97 7.97 0 0 0 12 20a7.97 7.97 0 0 0 5.167-1.892A6.98 6.98 0 0 0 12.16 16M12 4a8 8 0 0 0-6.384 12.821A8.98 8.98 0 0 1 12.16 14a8.97 8.97 0 0 1 6.362 2.634A8 8 0 0 0 12 4m0 1a4 4 0 1 1 0 8a4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4a2 2 0 0 0 0-4"></svg:path>`,
})
export class RiAccountCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAccountPinBoxFillIcon],svg[ri-account-pin-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 21l-2 2l-2-2H4.995A1.995 1.995 0 0 1 3 19.005V4.995C3 3.893 3.893 3 4.995 3h14.01C20.107 3 21 3.893 21 4.995v14.01A1.995 1.995 0 0 1 19.005 21zm-7.643-3h11.49a6.99 6.99 0 0 0-5.745-3a6.99 6.99 0 0 0-5.745 3M12 13a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7"></svg:path>`,
})
export class RiAccountPinBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAccountPinBoxLineIcon],svg[ri-account-pin-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 21l-2 2l-2-2H4.995A1.995 1.995 0 0 1 3 19.005V4.995C3 3.893 3.893 3 4.995 3h14.01C20.107 3 21 3.893 21 4.995v14.01A1.995 1.995 0 0 1 19.005 21zm5-2V5H5v14h5.828L12 20.172L13.172 19zm-11.028-.82a10 10 0 0 1-1.751-.978A7 7 0 0 1 12.102 14c2.4 0 4.517 1.207 5.778 3.047a10 10 0 0 1-1.724 1.025A5 5 0 0 0 12.102 16c-1.716 0-3.23.864-4.13 2.18M12 13a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7m0-2a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path>`,
})
export class RiAccountPinBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAccountPinCircleFillIcon],svg[ri-account-pin-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.256 21.744L12 24l-2.256-2.256C5.31 20.72 2 16.744 2 12C2 6.48 6.48 2 12 2s10 4.48 10 10c0 4.744-3.31 8.72-7.744 9.744m-8.233-6.328C7.491 17.606 9.695 19 12.16 19s4.669-1.393 6.136-3.584A8.97 8.97 0 0 0 12.16 13a8.97 8.97 0 0 0-6.137 2.416M12 11a3 3 0 1 0 0-6a3 3 0 0 0 0 6"></svg:path>`,
})
export class RiAccountPinCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAccountPinCircleLineIcon],svg[ri-account-pin-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.745 21.745C5.308 20.722 2 16.747 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 4.747-3.308 8.722-7.745 9.745L12 24zm-2.733-3.488a7.95 7.95 0 0 0 3.182 1.539l.56.129L12 21.172l1.247-1.247l.56-.13a7.96 7.96 0 0 0 3.36-1.686A6.98 6.98 0 0 0 12.16 16c-2.036 0-3.87.87-5.148 2.257M5.616 16.82A8.98 8.98 0 0 1 12.16 14a8.97 8.97 0 0 1 6.362 2.634a8 8 0 1 0-12.906.187M12 13a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiAccountPinCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAddBoxFillIcon],svg[ri-add-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m7 8H7v2h4v4h2v-4h4v-2h-4V7h-2z"></svg:path>`,
})
export class RiAddBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAddBoxLineIcon],svg[ri-add-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h14V5zm6 6V7h2v4h4v2h-4v4h-2v-4H7v-2z"></svg:path>`,
})
export class RiAddBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAddCircleFillIcon],svg[ri-add-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-1-11H7v2h4v4h2v-4h4v-2h-4V7h-2z"></svg:path>`,
})
export class RiAddCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAddCircleLineIcon],svg[ri-add-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 11V7h2v4h4v2h-4v4h-2v-4H7v-2zm1 11C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16"></svg:path>`,
})
export class RiAddCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAddFillIcon],svg[ri-add-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></svg:path>`,
})
export class RiAddFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAddLargeFillIcon],svg[ri-add-large-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 11V2h2v9h9v2h-9v9h-2v-9H2v-2z"></svg:path>`,
})
export class RiAddLargeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAddLargeLineIcon],svg[ri-add-large-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 11h9v2h-9v9h-2v-9H2v-2h9V2h2z"></svg:path>`,
})
export class RiAddLargeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAddLineIcon],svg[ri-add-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></svg:path>`,
})
export class RiAddLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAdminFillIcon],svg[ri-admin-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14v8H4a8 8 0 0 1 8-8m0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m9 4h1v5h-8v-5h1v-1a3 3 0 1 1 6 0zm-2 0v-1a1 1 0 1 0-2 0v1z"></svg:path>`,
})
export class RiAdminFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAdminLineIcon],svg[ri-admin-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8m0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4m9 6h1v5h-8v-5h1v-1a3 3 0 1 1 6 0zm-2 0v-1a1 1 0 1 0-2 0v1z"></svg:path>`,
})
export class RiAdminLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAdvertisementFillIcon],svg[ri-advertisement-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.552 13l.847-2.115L9.244 13zM16 12h1v2h-1a1 1 0 1 1 0-2m5-9H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m-8.402 13h-2.155l-.4-1h-3.29l-.4 1H4.199l1.199-2.998l.001-.002l2-5h2zM17 8h2v8h-3a3 3 0 1 1 0-6h1z"></svg:path>`,
})
export class RiAdvertisementFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAdvertisementLineIcon],svg[ri-advertisement-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.598 16l-3.2-8h-2l-2 5v.002L4.199 16h2.154l.4-1h3.29l.4 1zm-5.046-3l.847-2.115L9.244 13zM17 8h2v8h-3a3 3 0 1 1 0-6h1zm-1 4a1 1 0 0 0 0 2h1v-2zm5-9H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M4 19V5h16v14z"></svg:path>`,
})
export class RiAdvertisementLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAedElectrodesFillIcon],svg[ri-aed-electrodes-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3a1 1 0 0 0-1 1v3H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h5v2h2v-2h5a1 1 0 0 0 1-1v-3h3a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm9 12V8a1 1 0 0 0-1-1H9V5h10v10z"></svg:path>`,
})
export class RiAedElectrodesFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAedElectrodesLineIcon],svg[ri-aed-electrodes-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-3v3a1 1 0 0 1-1 1h-5v2H9v-2H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h3zm12 11V5H9v2h7a1 1 0 0 1 1 1v7zM5 9v10h10V9z"></svg:path>`,
})
export class RiAedElectrodesLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAedFillIcon],svg[ri-aed-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3zm10 8l-5 7v-5H8l5-7v5z"></svg:path>`,
})
export class RiAedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAedLineIcon],svg[ri-aed-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zM3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3zm13 5h-3V6l-5 7h3v5z"></svg:path>`,
})
export class RiAedLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAiGenerateIcon],svg[ri-ai-generate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.713 9.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M6 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5h2v5a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h7v2z"></svg:path>`,
})
export class RiAiGenerateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAiGenerate2Icon],svg[ri-ai-generate-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.467 8.694l.246-.566a4.36 4.36 0 0 1 2.22-2.25l.759-.339a.53.53 0 0 0 0-.963l-.717-.319a4.37 4.37 0 0 1-2.251-2.326l-.253-.611a.506.506 0 0 0-.942 0l-.253.61a4.37 4.37 0 0 1-2.25 2.327l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.36 4.36 0 0 1 2.219 2.251l.246.566c.18.414.753.414.934 0M5.8 16h2.154l.6-1.5h2.892l.6 1.5H14.2L11 8H9zm4.2-5.115l.646 1.615H9.354zM15 16V8h2v8zM3 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-9h-2v8H4V5h10V3z"></svg:path>`,
})
export class RiAiGenerate2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAiGenerateTextIcon],svg[ri-ai-generate-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.467 8.694l.246-.566a4.36 4.36 0 0 1 2.22-2.25l.759-.339a.53.53 0 0 0 0-.963l-.717-.319a4.37 4.37 0 0 1-2.251-2.326l-.253-.611a.506.506 0 0 0-.942 0l-.253.61a4.37 4.37 0 0 1-2.25 2.327l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.36 4.36 0 0 1 2.219 2.251l.246.566c.18.414.753.414.934 0M2 4a1 1 0 0 1 1-1h11v2H4v14h16v-8h2v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm5 4h10v3h-2v-1h-2v4h1.5v2h-5v-2H11v-4H9v1H7z"></svg:path>`,
})
export class RiAiGenerateTextIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAirplayFillIcon],svg[ri-airplay-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.4 13.533l5 6.667a.5.5 0 0 1-.4.8H7a.5.5 0 0 1-.4-.8l5-6.667a.5.5 0 0 1 .8 0M18 19v-2h2V5H4v12h2v2H2.992A.994.994 0 0 1 2 18V4c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1z"></svg:path>`,
})
export class RiAirplayFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAirplayLineIcon],svg[ri-airplay-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.4 13.533l5 6.667a.5.5 0 0 1-.4.8H7a.5.5 0 0 1-.4-.8l5-6.667a.5.5 0 0 1 .8 0M12 16.33L10 19h4zM18 19v-2h2V5H4v12h2v2H2.992A.994.994 0 0 1 2 18V4c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1z"></svg:path>`,
})
export class RiAirplayLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAlarmAddFillIcon],svg[ri-alarm-add-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13a9 9 0 1 0 18 0a9 9 0 0 0-18 0M5.283 2.747L1.747 6.283l1.414 1.414L6.697 4.16zm16.97 3.536l-3.535-3.536l-1.415 1.414l3.536 3.536zM11 9h2v3h3v2h-3v3h-2v-3H8v-2h3z"></svg:path>`,
})
export class RiAlarmAddFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAlarmAddLineIcon],svg[ri-alarm-add-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13a9 9 0 1 0 18 0a9 9 0 0 0-18 0m16 0a7 7 0 1 1-14 0a7 7 0 0 1 14 0M5.283 2.747L1.747 6.283l1.414 1.414L6.697 4.16zm16.97 3.536l-3.535-3.536l-1.415 1.414l3.536 3.536zM11 9v3H8v2h3v3h2v-3h3v-2h-3V9z"></svg:path>`,
})
export class RiAlarmAddLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAlarmFillIcon],svg[ri-alarm-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22a9 9 0 1 1 0-18a9 9 0 0 1 0 18m1-9V8h-2v7h5v-2zM1.747 6.283l3.536-3.536l1.414 1.414L3.16 7.697zm16.97-3.536l3.536 3.536l-1.414 1.414l-3.536-3.536z"></svg:path>`,
})
export class RiAlarmFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAlarmLineIcon],svg[ri-alarm-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22a9 9 0 1 1 0-18a9 9 0 0 1 0 18m0-2a7 7 0 1 0 0-14a7 7 0 0 0 0 14m1-7h3v2h-5V8h2zM1.747 6.283l3.536-3.536l1.414 1.414L3.16 7.697zm16.97-3.536l3.536 3.536l-1.414 1.414l-3.536-3.536z"></svg:path>`,
})
export class RiAlarmLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAlarmSnoozeFillIcon],svg[ri-alarm-snooze-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13a9 9 0 1 0 18 0a9 9 0 0 0-18 0M5.283 2.747L1.747 6.283l1.414 1.414L6.697 4.16zm16.97 3.536l-3.535-3.536l-1.415 1.414l3.536 3.536zM9 11V9h6v2.414L11.414 15H15v2H9v-2.414L12.586 11z"></svg:path>`,
})
export class RiAlarmSnoozeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAlarmSnoozeLineIcon],svg[ri-alarm-snooze-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13a9 9 0 1 0 18 0a9 9 0 0 0-18 0m16 0a7 7 0 1 1-14 0a7 7 0 0 1 14 0M5.283 2.747L1.747 6.283l1.414 1.414L6.697 4.16zm16.97 3.536l-3.535-3.536l-1.415 1.414l3.536 3.536zM9 11h3.586L9 14.586V17h6v-2h-3.586L15 11.414V9H9z"></svg:path>`,
})
export class RiAlarmSnoozeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAlarmWarningFillIcon],svg[ri-alarm-warning-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v-6a8 8 0 1 1 16 0v6h1v2H3v-2zm2-6h2a4 4 0 0 1 4-4V8a6 6 0 0 0-6 6m5-12h2v3h-2zm8.778 2.808l1.414 1.414l-2.12 2.121l-1.415-1.414zM2.808 6.222l1.414-1.414l2.121 2.12L4.93 8.344z"></svg:path>`,
})
export class RiAlarmWarningFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAlarmWarningLineIcon],svg[ri-alarm-warning-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v-6a8 8 0 1 1 16 0v6h1v2H3v-2zm2 0h12v-6a6 6 0 0 0-12 0zm5-18h2v3h-2zm8.778 2.808l1.414 1.414l-2.12 2.121l-1.415-1.414zM2.808 6.222l1.414-1.414l2.121 2.12L4.93 8.344zM7 14a5 5 0 0 1 5-5v2a3 3 0 0 0-3 3z"></svg:path>`,
})
export class RiAlarmWarningLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAlbumFillIcon],svg[ri-album-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12S6.48 2 12 2m0 14c2.213 0 4-1.787 4-4s-1.787-4-4-4s-4 1.787-4 4s1.787 4 4 4m0-5c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1"></svg:path>`,
})
export class RiAlbumFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAlbumLineIcon],svg[ri-album-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 20a8 8 0 1 0 0-16a8 8 0 0 0 0 16m0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m0-8a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 2a4 4 0 1 1 0-8a4 4 0 0 1 0 8"></svg:path>`,
})
export class RiAlbumLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAlertFillIcon],svg[ri-alert-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.866 3l9.526 16.5a1 1 0 0 1-.866 1.5H2.474a1 1 0 0 1-.866-1.5L11.134 3a1 1 0 0 1 1.732 0M11 16v2h2v-2zm0-7v5h2V9z"></svg:path>`,
})
export class RiAlertFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAlertLineIcon],svg[ri-alert-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.866 3l9.526 16.5a1 1 0 0 1-.866 1.5H2.474a1 1 0 0 1-.866-1.5L11.134 3a1 1 0 0 1 1.732 0m-8.66 16h15.588L12 5.5zM11 16h2v2h-2zm0-7h2v5h-2z"></svg:path>`,
})
export class RiAlertLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAlibabaCloudFillIcon],svg[ri-alibaba-cloud-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.514 5.14H4.68A3.68 3.68 0 0 0 1 8.82v6.358a3.68 3.68 0 0 0 3.68 3.68h4.85L8.36 17.2l-3.538-1.08a1.54 1.54 0 0 1-1.07-1.472V9.37a1.53 1.53 0 0 1 1.07-1.47l3.536-1.104zm9.825 0h-4.85l1.17 1.656L19.195 7.9a1.53 1.53 0 0 1 1.067 1.471v5.277a1.535 1.535 0 0 1-1.067 1.472L15.66 17.2l-1.17 1.656h4.85a3.66 3.66 0 0 0 3.66-3.68V8.82a3.68 3.68 0 0 0-3.66-3.68m-3.672 5.998h-7.33v1.652h7.33z"></svg:path>`,
})
export class RiAlibabaCloudFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAlibabaCloudLineIcon],svg[ri-alibaba-cloud-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4h4l-1-2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h3l1-2zm11 2h3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-3l-1 2h4a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4h-4zm-8 6h8v-2H8z"></svg:path>`,
})
export class RiAlibabaCloudLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAliensFillIcon],svg[ri-aliens-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a8.5 8.5 0 0 1 8.5 8.5c0 6.5-5.5 12-8.5 12s-8.5-5.5-8.5-12A8.5 8.5 0 0 1 12 2m5.5 10a4.5 4.5 0 0 0-4.475 4.975q.235.025.475.025a4.5 4.5 0 0 0 4.475-4.975A5 5 0 0 0 17.5 12m-11 0q-.24 0-.475.025a4.5 4.5 0 0 0 4.95 4.95Q11 16.74 11 16.5A4.5 4.5 0 0 0 6.5 12"></svg:path>`,
})
export class RiAliensFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAliensLineIcon],svg[ri-aliens-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2a8.5 8.5 0 0 1 8.5 8.5c0 6.5-5.5 12-8.5 12s-8.5-5.5-8.5-12A8.5 8.5 0 0 1 12 2m0 2a6.5 6.5 0 0 0-6.5 6.5c0 4.794 4.165 10 6.5 10s6.5-5.206 6.5-10A6.5 6.5 0 0 0 12 4m5.5 7q.24 0 .475.025q.025.235.025.475a4.5 4.5 0 0 1-4.975 4.475A4.5 4.5 0 0 1 17.5 11m-11 0a4.5 4.5 0 0 1 4.475 4.975a4.5 4.5 0 0 1-4.95-4.95Q6.259 11 6.5 11"></svg:path>`,
})
export class RiAliensLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAlignBottomIcon],svg[ri-align-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19h18v2H3zm5-6h3l-4 4l-4-4h3V3h2zm10 0h3l-4 4l-4-4h3V3h2z"></svg:path>`,
})
export class RiAlignBottomIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAlignCenterIcon],svg[ri-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h18v2H3zm2 15h14v2H5zm-2-5h18v2H3zm2-5h14v2H5z"></svg:path>`,
})
export class RiAlignCenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAlignItemBottomFillIcon],svg[ri-align-item-bottom-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 4a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm10 3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm7 12H3v2h18z"></svg:path>`,
})
export class RiAlignItemBottomFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAlignItemBottomLineIcon],svg[ri-align-item-bottom-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 5v10H6V5zM5 3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm10 6v6h3V9zm-2-1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1zm8 11H3v2h18z"></svg:path>`,
})
export class RiAlignItemBottomLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAlignItemHorizontalCenterFillIcon],svg[ri-align-item-horizontal-center-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4V2h2v2h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-6v2h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-4v2h-2v-2H7a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h4v-2H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"></svg:path>`,
})
export class RiAlignItemHorizontalCenterFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAlignItemHorizontalCenterLineIcon],svg[ri-align-item-horizontal-center-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4V2h2v2h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-6v2h4a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-4v2h-2v-2H7a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h4v-2H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zM8 15v3h8v-3zM6 9h12V6H6z"></svg:path>`,
})
export class RiAlignItemHorizontalCenterLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAlignItemLeftFillIcon],svg[ri-align-item-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h2v18zm4-7a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1zM8 4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"></svg:path>`,
})
export class RiAlignItemLeftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAlignItemLeftLineIcon],svg[ri-align-item-left-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 21V3h2v18zm6-6h6v3H9zm-1-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm1-4h10V6H9zM7 5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1z"></svg:path>`,
})
export class RiAlignItemLeftLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAlignItemRightFillIcon],svg[ri-align-item-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 21V3h2v18zM7 14a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1zM4 4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1z"></svg:path>`,
})
export class RiAlignItemRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAlignItemRightLineIcon],svg[ri-align-item-right-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 21V3h2v18zM9 15h6v3H9zm-1-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zM5 9h10V6H5zM3 5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"></svg:path>`,
})
export class RiAlignItemRightLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAlignItemTopFillIcon],svg[ri-align-item-top-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v2h18zm-7 4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zM4 8a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z"></svg:path>`,
})
export class RiAlignItemTopFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAlignItemTopLineIcon],svg[ri-align-item-top-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H3v2h18zm-6 6v6h3V9zm-2-1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1zM9 9v10H6V9zM5 7a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1z"></svg:path>`,
})
export class RiAlignItemTopLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAlignItemVerticalCenterFillIcon],svg[ri-align-item-vertical-center-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-6h2v4a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-4h2v-2h-2V7a1 1 0 0 0-1-1h-5a1 1 0 0 0-1 1v4h-2V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v6H2v2h2z"></svg:path>`,
})
export class RiAlignItemVerticalCenterFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAlignItemVerticalCenterLineIcon],svg[ri-align-item-vertical-center-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 18V6H6v12zm-4 2a1 1 0 0 1-1-1v-6H2v-2h2V5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v6h2V7a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v4h2v2h-2v4a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-4h-2v6a1 1 0 0 1-1 1zm10-4h3V8h-3z"></svg:path>`,
})
export class RiAlignItemVerticalCenterLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAlignJustifyIcon],svg[ri-align-justify-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h18v2H3zm0 15h18v2H3zm0-5h18v2H3zm0-5h18v2H3z"></svg:path>`,
})
export class RiAlignJustifyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAlignLeftIcon],svg[ri-align-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h18v2H3zm0 15h14v2H3zm0-5h18v2H3zm0-5h14v2H3z"></svg:path>`,
})
export class RiAlignLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAlignRightIcon],svg[ri-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 4h18v2H3zm4 15h14v2H7zm-4-5h18v2H3zm4-5h14v2H7z"></svg:path>`,
})
export class RiAlignRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAlignTopIcon],svg[ri-align-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18v2H3zm5 8v10H6V11H3l4-4l4 4zm10 0v10h-2V11h-3l4-4l4 4z"></svg:path>`,
})
export class RiAlignTopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAlignVerticallyIcon],svg[ri-align-vertically-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 11h18v2H3zm15 7v3h-2v-3h-3l4-4l4 4zM8 18v3H6v-3H3l4-4l4 4zM18 6h3l-4 4l-4-4h3V3h2zM8 6h3l-4 4l-4-4h3V3h2z"></svg:path>`,
})
export class RiAlignVerticallyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAlipayFillIcon],svg[ri-alipay-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.422 15.358q-5.744-1.73-6.678-2.062a12.4 12.4 0 0 0 1.32-3.32H12.8V8.872h4v-.68h-4V6.344h-1.536c-.28 0-.312.248-.312.248v1.592H7.2v.68h3.752v1.104H7.88v.616h6.224a11 11 0 0 1-.888 2.176c-1.408-.464-2.192-.784-3.912-.944c-3.256-.312-4.008 1.48-4.128 2.576C5 16.064 6.48 17.424 8.688 17.424s3.68-1.024 5.08-2.72q1.75.837 6.514 2.902A9.99 9.99 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a10 10 0 0 1-.578 3.358m-12.99 1.01c-2.336 0-2.704-1.48-2.584-2.096s.8-1.416 2.104-1.416c1.496 0 2.832.384 4.44 1.16c-1.136 1.48-2.52 2.352-3.96 2.352"></svg:path>`,
})
export class RiAlipayFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAlipayLineIcon],svg[ri-alipay-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.408 16.79q-3.26-1.425-4.64-2.086c-1.4 1.696-2.872 2.72-5.08 2.72S5 16.064 5.176 14.392c.12-1.096.872-2.888 4.128-2.576c1.72.16 2.504.48 3.912.944c.36-.664.664-1.4.888-2.176H7.88v-.616h3.072V8.864H7.2v-.68h3.752V6.592s.032-.248.312-.248H12.8v1.848h4v.68h-4v1.104h3.264a12.4 12.4 0 0 1-1.32 3.32q.765.273 4.76 1.483a8 8 0 1 0-1.096 2.012M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m-3.568-5.632c1.44 0 2.824-.872 3.96-2.352c-1.608-.776-2.944-1.16-4.44-1.16c-1.304 0-1.984.8-2.104 1.416s.248 2.096 2.584 2.096"></svg:path>`,
})
export class RiAlipayLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAmazonFillIcon],svg[ri-amazon-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.997 18.23c0 .727-.405 2.127-1.315 2.896c-.182.14-.364.061-.284-.143c.265-.648.871-2.147.587-2.492c-.201-.262-1.031-.242-1.739-.182c-.323.041-.607.06-.827.105c-.204.016-.245-.163-.041-.303a3.1 3.1 0 0 1 .87-.428c1.15-.344 2.479-.137 2.67.083c.036.042.079.16.079.463m-1.922 1.294a7 7 0 0 1-.829.55c-2.122 1.275-4.871 1.943-7.258 1.943c-3.843 0-7.28-1.417-9.888-3.788c-.224-.182-.039-.446.223-.303c2.81 1.64 6.288 2.632 9.888 2.632c2.266 0 4.708-.424 7.035-1.336c.163-.061.345-.144.504-.202c.367-.165.69.242.325.504m-6.17-11.03c0-1.041.042-1.654-.303-2.18c-.306-.433-.833-.693-1.569-.652c-.798.044-1.655.567-1.873 1.526c-.043.22-.171.436-.437.483l-2.435-.31c-.174-.04-.439-.173-.352-.521C7.459 4.088 9.81 3.129 12.034 3h.522c1.22 0 2.788.349 3.791 1.264c1.217 1.136 1.087 2.662 1.087 4.32v3.927c0 1.178.478 1.7.958 2.314c.13.219.175.477-.044.655a78 78 0 0 1-1.917 1.654c-.175.133-.489.147-.61.045c-.77-.645-.958-1.003-1.435-1.658c-.83.871-1.527 1.352-2.356 1.613a7 7 0 0 1-1.784.216c-2.09 0-3.745-1.303-3.745-3.88c0-2.049 1.09-3.442 2.7-4.101c1.61-.66 3.95-.87 4.704-.874m-.477 5.192c.52-.872.477-1.586.477-3.185c-.652 0-1.306.045-1.871.178c-1.045.303-1.875.96-1.875 2.355c0 1.09.568 1.832 1.526 1.832q.198 0 .348-.045c.67-.186 1.088-.522 1.395-1.135"></svg:path>`,
})
export class RiAmazonFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAmazonLineIcon],svg[ri-amazon-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.626 14.62c-1.107 1.619-2.728 2.384-4.625 2.384c-2.304 0-4.277-1.773-3.993-4.124c.314-2.608 2.34-3.73 5.708-4.143c.601-.073.85-.094 2.147-.19l.138-.01v-.215C15 6.526 13.933 5.3 12.5 5.3c-1.437 0-2.44.747-3.055 2.526l-1.89-.652C8.442 4.604 10.193 3.3 12.5 3.3c2.602 0 4.5 2.178 4.5 5.022c0 2.649.163 4.756.483 5.557c.356.893.486 1.117.884 1.613l-1.56 1.251c-.524-.652-.753-1.048-1.182-2.122m5.631 5.925c-.27.2-.741.081-.528-.44c.264-.648.547-1.408.262-1.752c-.21-.255-.468-.382-1.027-.382c-.46 0-.69.06-.995.08c-.204.014-.294-.297-.091-.44c.261-.185.544-.33.87-.428c1.15-.344 2.505-.155 2.67.083c.365.53-.2 2.569-1.16 3.28m-1.182-1.084a8 8 0 0 1-.829.695c-2.122 1.616-4.871 2.46-7.258 2.46c-3.843 0-7.28-1.793-9.888-4.795c-.224-.23-.039-.566.223-.384c2.81 2.077 6.288 3.333 9.888 3.333c2.266 0 4.708-.537 7.035-1.692c.163-.077.345-.182.504-.255c.367-.21.69.306.325.638m-5.064-8.92c-1.259.094-1.496.113-2.052.181c-2.553.313-3.797 1.003-3.966 2.398c-.125 1.043.81 1.884 2.008 1.884c2.039 0 3.517-1.228 4.022-4.463z"></svg:path>`,
})
export class RiAmazonLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAnchorFillIcon],svg[ri-anchor-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 9.874v10.054c3.619-.454 6.487-3.336 6.938-6.972H17L20.704 7A10.04 10.04 0 0 1 22 11.95C22 17.5 17.523 22 12 22S2 17.5 2 11.95c0-1.8.471-3.489 1.296-4.95L7 12.956H4.062c.451 3.636 3.32 6.518 6.938 6.972V9.874A4.002 4.002 0 0 1 12 2a4 4 0 0 1 1 7.874M12 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiAnchorFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAnchorLineIcon],svg[ri-anchor-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.05 11H7v2H4.062A8.004 8.004 0 0 0 11 19.938V9.874A4.002 4.002 0 0 1 12 2a4 4 0 0 1 1 7.874v10.064A8.004 8.004 0 0 0 19.938 13H17v-2h4.95q.05.493.05 1c0 5.523-4.477 10-10 10S2 17.523 2 12q0-.507.05-1M12 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiAnchorLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAncientGateFillIcon],svg[ri-ancient-gate-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.964 3h10.072a3.5 3.5 0 0 0 4.445 2.86A3.5 3.5 0 0 1 18 9H6a3.5 3.5 0 0 1-3.481-3.14A3.5 3.5 0 0 0 6.964 3m16.015 8.111a3 3 0 0 1-4.077-1.11H5.098a3 3 0 0 1-4.078 1.11A3.5 3.5 0 0 0 3 14.663V21h6v-2a3 3 0 0 1 6 0v2h6v-6.336a3.5 3.5 0 0 0 1.979-3.553"></svg:path>`,
})
export class RiAncientGateFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAncientGateLineIcon],svg[ri-ancient-gate-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.964 3h10.072a3.5 3.5 0 0 0 4.445 2.86A3.5 3.5 0 0 1 18 9H6a3.5 3.5 0 0 1-3.482-3.14A3.5 3.5 0 0 0 6.964 3M16.9 6.658A5.4 5.4 0 0 1 15.59 5H8.411A5.4 5.4 0 0 1 7.1 6.658A6 6 0 0 1 6.667 7h10.666a6 6 0 0 1-.434-.342M21.5 11.5c.538 0 1.042-.142 1.479-.39q.021.192.021.39a3.5 3.5 0 0 1-2 3.163V21h-7v-2a2 2 0 1 0-4 0v2H3v-6.336a3.5 3.5 0 0 1-1.979-3.553a3 3 0 0 0 4.077-1.11h13.803a3 3 0 0 0 2.599 1.5m-2.537 1.309a5 5 0 0 1-1.038-.81H6.075q-.457.467-1.038.81q-.304.18-.622.312L5 13.4V19h3q0-1.657 1.172-2.828A3.85 3.85 0 0 1 12 15q1.657 0 2.828 1.172A3.85 3.85 0 0 1 16 19h3v-5.6l.585-.278a5 5 0 0 1-.622-.312"></svg:path>`,
})
export class RiAncientGateLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAncientPavilionFillIcon],svg[ri-ancient-pavilion-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.516 7.877A4.5 4.5 0 0 0 5 11.887v7.114H3v2h18v-2h-2v-7.114a4.5 4.5 0 0 0 3.484-4.01A9 9 0 0 1 12.514 2h-1.029a9 9 0 0 1-9.97 5.877M17 19H7v-7h10z"></svg:path>`,
})
export class RiAncientPavilionFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAncientPavilionLineIcon],svg[ri-ancient-pavilion-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.516 7.877A4.5 4.5 0 0 0 5 11.887v7.114H3v2h18v-2h-2v-7.114a4.5 4.5 0 0 0 3.484-4.01A9 9 0 0 1 12.514 2h-1.029a9 9 0 0 1-9.97 5.877M17 19H7v-7h10zm1.556-9.064L18.28 10H5.72l-.274-.063a2.6 2.6 0 0 1-.392-.121Q7.36 9.39 9.351 7.98A10.9 10.9 0 0 0 12 5.346a10.9 10.9 0 0 0 2.648 2.635q1.993 1.41 4.298 1.835a2.6 2.6 0 0 1-.391.121"></svg:path>`,
})
export class RiAncientPavilionLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAndroidFillIcon],svg[ri-android-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.382 3.968A8.96 8.96 0 0 1 12 2c2.125 0 4.078.736 5.618 1.968l1.453-1.453l1.414 1.414l-1.453 1.453A8.96 8.96 0 0 1 21 11v1H3v-1c0-2.125.736-4.078 1.968-5.618L3.515 3.93l1.414-1.414zM3 14h18v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm6-5a1 1 0 1 0 0-2a1 1 0 0 0 0 2m6 0a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class RiAndroidFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAndroidLineIcon],svg[ri-android-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13H5v7h14zm0-2a7 7 0 1 0-14 0zM6.382 3.968A8.96 8.96 0 0 1 12 2c2.125 0 4.078.736 5.618 1.968l1.453-1.453l1.414 1.414l-1.453 1.453A8.96 8.96 0 0 1 21 11v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11c0-2.125.736-4.078 1.968-5.618L3.515 3.93l1.414-1.414zM9 9a1 1 0 1 1 0-2a1 1 0 0 1 0 2m6 0a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class RiAndroidLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAngularjsFillIcon],svg[ri-angularjs-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 2l9.3 3.32l-1.418 12.31L12 22l-7.88-4.37L2.7 5.32zm0 2.21L6.186 17.26h2.168l1.169-2.92h4.935l1.168 2.92h2.168zm1.698 8.33h-3.396L12 8.45z"></svg:path>`,
})
export class RiAngularjsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAngularjsLineIcon],svg[ri-angularjs-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.524 16.65l.489-.27l1.118-9.71l-7.13-2.546l-7.132 2.545l1.119 9.71l.474.263L12 4.21zm-1.1.61h-.798l-1.168-2.92H9.523l-1.169 2.92h-.778L12 19.713zM12 2l9.3 3.32l-1.418 12.31L12 22l-7.88-4.37L2.7 5.32zm1.698 10.54L12 8.45l-1.698 4.09z"></svg:path>`,
})
export class RiAngularjsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAnthropicFillIcon],svg[ri-anthropic-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.765 5h-3.308l5.923 15h3.23zM7.226 5L1.38 20h3.308l1.307-3.154h6.154l1.23 3.077h3.309L10.688 5zm-.308 9.077l2-5.308l2.077 5.308z"></svg:path>`,
})
export class RiAnthropicFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAnthropicLineIcon],svg[ri-anthropic-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.122 5h2.146L22.1 20h-2.146zM7.66 5h2.681l5.77 15h-2.144l-1.538-4H5.572l-1.539 4H1.891zm4 9L9 7.086L6.341 14z"></svg:path>`,
})
export class RiAnthropicLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAnticlockwise2FillIcon],svg[ri-anticlockwise-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4h2a5 5 0 0 1 5 5v4h-2V9a3 3 0 0 0-3-3h-2v3L9 5l5-4zm1 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1"></svg:path>`,
})
export class RiAnticlockwise2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAnticlockwise2LineIcon],svg[ri-anticlockwise-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.414 6l1.829 1.828l-1.415 1.415L9.586 5L13.828.757l1.415 1.415L13.414 4H16a5 5 0 0 1 5 5v4h-2V9a3 3 0 0 0-3-3zM15 11v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1m-2 1H5v8h8z"></svg:path>`,
})
export class RiAnticlockwise2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAnticlockwiseFillIcon],svg[ri-anticlockwise-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 10h3l-4 5l-4-5h3V8a5 5 0 0 1 5-5h4v2H9a3 3 0 0 0-3 3zm5-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1"></svg:path>`,
})
export class RiAnticlockwiseFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAnticlockwiseLineIcon],svg[ri-anticlockwise-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 9h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1m1 2v8h8v-8zm-6-.414l1.828-1.829l1.415 1.415L5 14.414L.757 10.172l1.415-1.415L4 10.586V8a5 5 0 0 1 5-5h4v2H9a3 3 0 0 0-3 3z"></svg:path>`,
})
export class RiAnticlockwiseLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAppStoreFillIcon],svg[ri-app-store-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2M8.823 15.343q-.591-.716-1.479-.509l-.15.041l-.59 1.016a.823.823 0 0 0 1.366.916l.062-.093zM13.21 8.66c-.488.404-.98 1.597-.29 2.787l3.04 5.266a.824.824 0 0 0 1.476-.722l-.049-.1l-.802-1.392h1.19a.82.82 0 0 0 .822-.823a.82.82 0 0 0-.72-.816l-.103-.006h-2.14L13.44 9.057zm.278-3.044a.825.825 0 0 0-1.063.21l-.062.092l-.367.633l-.359-.633a.824.824 0 0 0-1.476.722l.049.1l.838 1.457l-2.685 4.653H6.266a.82.82 0 0 0-.822.822c0 .421.312.766.719.817l.103.006h7.48c.34-.64-.06-1.549-.81-1.638l-.121-.007h-2.553l3.528-6.11a.823.823 0 0 0-.302-1.124"></svg:path>`,
})
export class RiAppStoreFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAppStoreLineIcon],svg[ri-app-store-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16M8.823 15.343l-.79 1.37a.823.823 0 1 1-1.428-.822l.589-1.016q.989-.307 1.629.468M13.21 8.66l2.423 4.194h2.141a.82.82 0 0 1 .823.822a.82.82 0 0 1-.823.823h-1.19l.803 1.391a.824.824 0 0 1-1.427.823l-3.04-5.266c-.69-1.19-.198-2.383.29-2.787m.278-3.044c.395.226.528.73.302 1.125l-3.528 6.109h2.553c.826 0 1.29.972.931 1.645h-7.48a.82.82 0 0 1-.822-.823a.82.82 0 0 1 .822-.822h2.097l2.685-4.653l-.838-1.456a.824.824 0 0 1 1.427-.823l.359.633l.367-.633a.823.823 0 0 1 1.125-.302"></svg:path>`,
})
export class RiAppStoreLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAppleFillIcon],svg[ri-apple-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.673 7.222c-.876 0-2.232-.996-3.66-.96c-1.884.024-3.612 1.092-4.584 2.784c-1.956 3.396-.504 8.412 1.404 11.172c.936 1.344 2.04 2.856 3.504 2.808c1.404-.06 1.932-.912 3.636-.912c1.692 0 2.172.912 3.66.876c1.512-.024 2.472-1.368 3.396-2.724c1.068-1.56 1.512-3.072 1.536-3.156c-.036-.012-2.94-1.128-2.976-4.488c-.024-2.808 2.292-4.152 2.4-4.212c-1.32-1.932-3.348-2.148-4.056-2.196c-1.848-.144-3.396 1.008-4.26 1.008m3.12-2.832c.78-.936 1.296-2.244 1.152-3.54c-1.116.048-2.46.744-3.264 1.68c-.72.828-1.344 2.16-1.176 3.432c1.236.096 2.508-.636 3.288-1.572"></svg:path>`,
})
export class RiAppleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAppleLineIcon],svg[ri-apple-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.778 8.208c-.473-.037-.98.076-1.758.373c.065-.025-.742.29-.969.37c-.502.175-.915.271-1.378.271c-.458 0-.88-.092-1.365-.255a11 11 0 0 1-.505-.186l-.449-.177c-.648-.254-1.012-.35-1.315-.342c-1.153.014-2.243.68-2.877 1.782c-1.292 2.243-.576 6.299 1.313 9.031c1.005 1.444 1.556 1.96 1.777 1.953c.222-.01.386-.057.784-.225l.166-.071c1.006-.429 1.71-.618 2.771-.618c1.021 0 1.703.186 2.669.602l.168.072c.397.17.54.208.792.202c.357-.005.798-.417 1.777-1.854c.268-.391.505-.803.71-1.22a7 7 0 0 1-.391-.347c-1.29-1.228-2.087-2.884-2.109-4.93A6.63 6.63 0 0 1 17 8.458a4.1 4.1 0 0 0-1.221-.25m.155-1.994c.708.048 2.736.264 4.056 2.196c-.108.06-2.424 1.404-2.4 4.212c.036 3.36 2.94 4.476 2.976 4.488c-.024.084-.468 1.596-1.536 3.156c-.924 1.356-1.884 2.7-3.396 2.724c-1.488.036-1.968-.876-3.66-.876c-1.704 0-2.232.852-3.636.912c-1.464.048-2.568-1.464-3.504-2.808c-1.908-2.76-3.36-7.776-1.404-11.172c.972-1.692 2.7-2.76 4.584-2.784c1.428-.036 2.784.96 3.66.96c.864 0 2.412-1.152 4.26-1.008m-1.14-1.824c-.78.936-2.052 1.668-3.288 1.572c-.168-1.272.456-2.604 1.176-3.432c.804-.936 2.148-1.632 3.264-1.68c.144 1.296-.372 2.604-1.152 3.54"></svg:path>`,
})
export class RiAppleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riApps2AddFillIcon],svg[ri-apps-2-add-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 7a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0m0 10a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0m10 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0m3.5-6V8h-3V6h3V3h2v3h3v2h-3v3z"></svg:path>`,
})
export class RiApps2AddFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riApps2AddLineIcon],svg[ri-apps-2-add-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 7a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0m0 10a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0m10 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0m-3-10a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m0 10a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m10 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0M16 11V8h-3V6h3V3h2v3h3v2h-3v3z"></svg:path>`,
})
export class RiApps2AddLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riApps2AiFillIcon],svg[ri-apps-2-ai-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 7a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0m0 10a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0m10 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0m5.025-5.845l.278-.636a4.9 4.9 0 0 1 2.496-2.533l.854-.38c.463-.205.463-.878 0-1.083l-.806-.359a4.9 4.9 0 0 1-2.533-2.617l-.285-.688a.57.57 0 0 0-1.058 0l-.285.688a4.9 4.9 0 0 1-2.533 2.617l-.806.359c-.463.205-.463.878 0 1.083l.854.38a4.9 4.9 0 0 1 2.496 2.533l.278.636a.57.57 0 0 0 1.05 0"></svg:path>`,
})
export class RiApps2AiFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riApps2AiLineIcon],svg[ri-apps-2-ai-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 7a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0m0 10a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0m10 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 0 0-9 0m-3-10a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m0 10a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m10 0a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0m-1.975-5.845l.278-.636a4.9 4.9 0 0 1 2.496-2.533l.854-.38c.463-.205.463-.878 0-1.083l-.806-.359a4.9 4.9 0 0 1-2.533-2.617l-.285-.688a.57.57 0 0 0-1.058 0l-.285.688a4.9 4.9 0 0 1-2.533 2.617l-.806.359c-.463.205-.463.878 0 1.083l.854.38a4.9 4.9 0 0 1 2.496 2.533l.278.636a.57.57 0 0 0 1.05 0"></svg:path>`,
})
export class RiApps2AiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riApps2FillIcon],svg[ri-apps-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 11.5a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m0 10a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m10-10a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m0 10a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9"></svg:path>`,
})
export class RiApps2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riApps2LineIcon],svg[ri-apps-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 11.5a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m0 10a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m10-10a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9m0 10a4.5 4.5 0 1 1 0-9a4.5 4.5 0 0 1 0 9M7 9.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 10a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m10-10a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5m0 10a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></svg:path>`,
})
export class RiApps2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAppsFillIcon],svg[ri-apps-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 2.5A4.25 4.25 0 0 1 11 6.75V11H6.75a4.25 4.25 0 0 1 0-8.5m0 10.5H11v4.25A4.25 4.25 0 1 1 6.75 13m10.5-10.5a4.25 4.25 0 0 1 0 8.5H13V6.75a4.25 4.25 0 0 1 4.25-4.25M13 13h4.25A4.25 4.25 0 1 1 13 17.25z"></svg:path>`,
})
export class RiAppsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAppsLineIcon],svg[ri-apps-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.75 2.5A4.25 4.25 0 0 1 11 6.75V11H6.75a4.25 4.25 0 0 1 0-8.5M9 9V6.75A2.25 2.25 0 1 0 6.75 9zm-2.25 4H11v4.25A4.25 4.25 0 1 1 6.75 13m0 2A2.25 2.25 0 1 0 9 17.25V15zm10.5-12.5a4.25 4.25 0 0 1 0 8.5H13V6.75a4.25 4.25 0 0 1 4.25-4.25m0 6.5A2.25 2.25 0 1 0 15 6.75V9zM13 13h4.25A4.25 4.25 0 1 1 13 17.25zm2 2v2.25A2.25 2.25 0 1 0 17.25 15z"></svg:path>`,
})
export class RiAppsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArchive2FillIcon],svg[ri-archive-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 20V7l-2-4H4L2 7.004V20a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1M5.236 5h13.528l1 2H4.237zM9 11h6v2H9z"></svg:path>`,
})
export class RiArchive2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArchive2LineIcon],svg[ri-archive-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 20V7l-2-4H4L2 7.004V20a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1M4 9h16v10H4zm1.236-4h13.528l1 2H4.237zM15 11H9v2h6z"></svg:path>`,
})
export class RiArchive2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArchiveDrawerFillIcon],svg[ri-archive-drawer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 13h18v8.003c0 .55-.445.997-.993.997H3.993A.995.995 0 0 1 3 21.003zM3 2.998C3 2.447 3.445 2 3.993 2h16.014c.548 0 .993.446.993.998V11H3zM9 5v2h6V5zm0 11v2h6v-2z"></svg:path>`,
})
export class RiArchiveDrawerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArchiveDrawerLineIcon],svg[ri-archive-drawer-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 2.992C3 2.444 3.445 2 3.993 2h16.014a1 1 0 0 1 .993.992v18.016a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008zM19 11V4H5v7zm0 2H5v7h14zM9 6h6v2H9zm0 9h6v2H9z"></svg:path>`,
})
export class RiArchiveDrawerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArchiveFillIcon],svg[ri-archive-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10h18v10.004c0 .55-.445.996-.993.996H3.993A.994.994 0 0 1 3 20.004zm6 2v2h6v-2zM2 4c0-.552.455-1 .992-1h18.016c.548 0 .992.444.992 1v4H2z"></svg:path>`,
})
export class RiArchiveFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArchiveLineIcon],svg[ri-archive-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 10H2V4.003C2 3.449 2.455 3 2.992 3h18.016A.99.99 0 0 1 22 4.003V10h-1v10.002a.996.996 0 0 1-.993.998H3.993A.996.996 0 0 1 3 20.002zm16 0H5v9h14zM4 5v3h16V5zm5 7h6v2H9z"></svg:path>`,
})
export class RiArchiveLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArchiveStackFillIcon],svg[ri-archive-stack-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5h16V3H4zm16 4H4V7h16zM9 13h6v-2h6v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9h6z"></svg:path>`,
})
export class RiArchiveStackFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArchiveStackLineIcon],svg[ri-archive-stack-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5h16V3H4zm16 4H4V7h16zM3 11h7v2h4v-2h7v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm13 2v2H8v-2H5v6h14v-6z"></svg:path>`,
})
export class RiArchiveStackLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArmchairFillIcon],svg[ri-armchair-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3H8a4 4 0 0 0-4 4v1a5 5 0 0 1 5 5h6a5 5 0 0 1 5-5V7a4 4 0 0 0-4-4m4 7a3 3 0 0 0-3 3v3h-2v-1H9v1H7v-3a3 3 0 1 0-4 2.83V21h2v-1h14v1h2v-5.17A3.001 3.001 0 0 0 20 10"></svg:path>`,
})
export class RiArmchairFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArmchairLineIcon],svg[ri-armchair-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3a4 4 0 0 0-4 4v2.126a4.002 4.002 0 0 0-1 7.339V21h2v-1h14v1h2v-4.535a4.002 4.002 0 0 0-1-7.339V7a4 4 0 0 0-4-4zm10 6.126c-1.725.444-3 2.01-3 3.874H9a4 4 0 0 0-3-3.874V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2zM9 15h6v1h2v-3a2 2 0 1 1 2.667 1.886a1 1 0 0 0-.667.943V18H5v-2.17a1 1 0 0 0-.667-.944A2.001 2.001 0 0 1 5 11a2 2 0 0 1 2 2v3h2z"></svg:path>`,
})
export class RiArmchairLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowDownBoxFillIcon],svg[ri-arrow-down-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm8 14.656l-5.95-5.95H11V6.342h2v5.364h4.95z"></svg:path>`,
})
export class RiArrowDownBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowDownBoxLineIcon],svg[ri-arrow-down-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M5 19V5h14v14zm6-12.656v7.485l-3.242-3.243l-1.414 1.415L12 17.657l5.656-5.656l-1.414-1.415L13 13.829V6.344z"></svg:path>`,
})
export class RiArrowDownBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowDownCircleFillIcon],svg[ri-arrow-down-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12S6.48 2 12 2m1 10V8h-2v4H8l4 4l4-4z"></svg:path>`,
})
export class RiArrowDownCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowDownCircleLineIcon],svg[ri-arrow-down-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12S6.48 2 12 2m0 18c4.42 0 8-3.58 8-8s-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8m1-8h3l-4 4l-4-4h3V8h2z"></svg:path>`,
})
export class RiArrowDownCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowDownDoubleFillIcon],svg[ri-arrow-down-double-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 19.164l6.207-6.207l-1.414-1.414L12 16.336l-4.793-4.793l-1.414 1.414zm0-5.65l6.207-6.207l-1.414-1.414L12 10.686L7.207 5.893L5.793 7.307z"></svg:path>`,
})
export class RiArrowDownDoubleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowDownDoubleLineIcon],svg[ri-arrow-down-double-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 19.164l6.207-6.207l-1.414-1.414L12 16.336l-4.793-4.793l-1.414 1.414zm0-5.65l6.207-6.207l-1.414-1.414L12 10.686L7.207 5.893L5.793 7.307z"></svg:path>`,
})
export class RiArrowDownDoubleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowDownFillIcon],svg[ri-arrow-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 12h7l-8 8l-8-8h7V4h2z"></svg:path>`,
})
export class RiArrowDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowDownLineIcon],svg[ri-arrow-down-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13 16.172l5.364-5.364l1.414 1.414L12 20l-7.778-7.778l1.414-1.414L11 16.172V4h2z"></svg:path>`,
})
export class RiArrowDownLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowDownLongFillIcon],svg[ri-arrow-down-long-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2h-2v13.586H5.586L12 22l6.414-6.414H13z"></svg:path>`,
})
export class RiArrowDownLongFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowDownLongLineIcon],svg[ri-arrow-down-long-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 2h-2v16.172l-3.95-3.95l-1.414 1.414L12 22l6.364-6.364l-1.414-1.414l-3.95 3.95z"></svg:path>`,
})
export class RiArrowDownLongLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowDownSFillIcon],svg[ri-arrow-down-s-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 16l-6-6h12z"></svg:path>`,
})
export class RiArrowDownSFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowDownSLineIcon],svg[ri-arrow-down-s-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 13.171l4.95-4.95l1.414 1.415L12 16L5.636 9.636L7.05 8.222z"></svg:path>`,
})
export class RiArrowDownSLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowDownWideFillIcon],svg[ri-arrow-down-wide-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 15.632l8.968-4.748l-.936-1.768L12 13.368L3.968 9.116l-.936 1.768z"></svg:path>`,
})
export class RiArrowDownWideFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowDownWideLineIcon],svg[ri-arrow-down-wide-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 15.632l8.968-4.748l-.936-1.768L12 13.368L3.968 9.116l-.936 1.768z"></svg:path>`,
})
export class RiArrowDownWideLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowDropDownFillIcon],svg[ri-arrow-drop-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 14l-4-4h8z"></svg:path>`,
})
export class RiArrowDropDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowDropDownLineIcon],svg[ri-arrow-drop-down-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 15l-4.243-4.242l1.415-1.414L12 12.172l2.828-2.828l1.415 1.414z"></svg:path>`,
})
export class RiArrowDropDownLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowDropLeftFillIcon],svg[ri-arrow-drop-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 12l4-4v8z"></svg:path>`,
})
export class RiArrowDropLeftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowDropLeftLineIcon],svg[ri-arrow-drop-left-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.828 12l2.829 2.829l-1.414 1.414L9 12.001l4.243-4.243l1.414 1.414z"></svg:path>`,
})
export class RiArrowDropLeftLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowDropRightFillIcon],svg[ri-arrow-drop-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 12l-4 4V8z"></svg:path>`,
})
export class RiArrowDropRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowDropRightLineIcon],svg[ri-arrow-drop-right-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.172 12L9.343 9.173l1.415-1.414L15 12l-4.242 4.242l-1.415-1.414z"></svg:path>`,
})
export class RiArrowDropRightLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowDropUpFillIcon],svg[ri-arrow-drop-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 10l4 4H8z"></svg:path>`,
})
export class RiArrowDropUpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowDropUpLineIcon],svg[ri-arrow-drop-up-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 11.828l-2.828 2.829l-1.415-1.414L12 9l4.243 4.243l-1.415 1.414z"></svg:path>`,
})
export class RiArrowDropUpLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowGoBackFillIcon],svg[ri-arrow-go-back-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 7v4L2 6l6-5v4h5a8 8 0 1 1 0 16H4v-2h9a6 6 0 0 0 0-12z"></svg:path>`,
})
export class RiArrowGoBackFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowGoBackLineIcon],svg[ri-arrow-go-back-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.828 7l2.536 2.535L6.95 10.95L2 6l4.95-4.95l1.414 1.415L5.828 5H13a8 8 0 1 1 0 16H4v-2h9a6 6 0 0 0 0-12z"></svg:path>`,
})
export class RiArrowGoBackLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowGoForwardFillIcon],svg[ri-arrow-go-forward-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 7h-5a6 6 0 1 0 0 12h9v2h-9a8 8 0 1 1 0-16h5V1l6 5l-6 5z"></svg:path>`,
})
export class RiArrowGoForwardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowGoForwardLineIcon],svg[ri-arrow-go-forward-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.172 7H11a6 6 0 0 0 0 12h9v2h-9a8 8 0 0 1 0-16h7.172l-2.536-2.536L17.05 1.05L22 6l-4.95 4.95l-1.414-1.415z"></svg:path>`,
})
export class RiArrowGoForwardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowLeftBoxFillIcon],svg[ri-arrow-left-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm2.343 9l5.95-5.95V11h5.364v2h-5.364v4.95z"></svg:path>`,
})
export class RiArrowLeftBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowLeftBoxLineIcon],svg[ri-arrow-left-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M5 19V5h14v14zm1.344-6.999L12 6.344l1.414 1.414l-3.243 3.243h7.485v2h-7.485l3.243 3.243L12 17.658z"></svg:path>`,
})
export class RiArrowLeftBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowLeftCircleFillIcon],svg[ri-arrow-left-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12S6.48 2 12 2m0 9V8l-4 4l4 4v-3h4v-2z"></svg:path>`,
})
export class RiArrowLeftCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowLeftCircleLineIcon],svg[ri-arrow-left-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12S6.48 2 12 2m0 18c4.42 0 8-3.58 8-8s-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8m0-9h4v2h-4v3l-4-4l4-4z"></svg:path>`,
})
export class RiArrowLeftCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowLeftDoubleFillIcon],svg[ri-arrow-left-double-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.836 12l6.207 6.207l1.414-1.414L7.664 12l4.793-4.793l-1.414-1.414zm5.65 0l6.207 6.207l1.414-1.414L13.314 12l4.793-4.793l-1.414-1.414z"></svg:path>`,
})
export class RiArrowLeftDoubleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowLeftDoubleLineIcon],svg[ri-arrow-left-double-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.836 12l6.207 6.207l1.414-1.414L7.664 12l4.793-4.793l-1.414-1.414zm5.65 0l6.207 6.207l1.414-1.414L13.314 12l4.793-4.793l-1.414-1.414z"></svg:path>`,
})
export class RiArrowLeftDoubleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowLeftDownBoxFillIcon],svg[ri-arrow-left-down-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm4 13V7.584l3.5 3.5l3.793-3.793l1.414 1.414l-3.793 3.793l3.5 3.5z"></svg:path>`,
})
export class RiArrowLeftDownBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowLeftDownBoxLineIcon],svg[ri-arrow-left-down-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M5 19V5h14v14zm3-2.999v-8h2v4.586l5.293-5.293l1.414 1.414l-5.293 5.293H16v2z"></svg:path>`,
})
export class RiArrowLeftDownBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowLeftDownFillIcon],svg[ri-arrow-left-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.36 13.052l4.95 4.95H5.998V6.687l4.95 4.95l5.656-5.658l1.415 1.415z"></svg:path>`,
})
export class RiArrowLeftDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowLeftDownLineIcon],svg[ri-arrow-left-down-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9 13.589l8.607-8.607l1.414 1.415l-8.607 8.606H18v2H7v-11h2z"></svg:path>`,
})
export class RiArrowLeftDownLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowLeftDownLongFillIcon],svg[ri-arrow-left-down-long-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.778 5.636l-1.414-1.414l-9.607 9.606L4.93 10v9.071H14l-3.828-3.828z"></svg:path>`,
})
export class RiArrowLeftDownLongFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowLeftDownLongLineIcon],svg[ri-arrow-left-down-long-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.778 5.636l-1.414-1.414L6.93 15.657V10.07h-2v9h9v-2H8.343z"></svg:path>`,
})
export class RiArrowLeftDownLongLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowLeftFillIcon],svg[ri-arrow-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13v7l-8-8l8-8v7h8v2z"></svg:path>`,
})
export class RiArrowLeftFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowLeftLineIcon],svg[ri-arrow-left-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.828 11H20v2H7.828l5.364 5.364l-1.414 1.414L4 12l7.778-7.778l1.414 1.414z"></svg:path>`,
})
export class RiArrowLeftLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowLeftLongFillIcon],svg[ri-arrow-left-long-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13v-2H8.414V5.586L2 12l6.414 6.414V13z"></svg:path>`,
})
export class RiArrowLeftLongFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowLeftLongLineIcon],svg[ri-arrow-left-long-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13v-2H5.828l3.95-3.95l-1.414-1.414L2 12l6.364 6.364l1.414-1.414L5.828 13z"></svg:path>`,
})
export class RiArrowLeftLongLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowLeftRightFillIcon],svg[ri-arrow-left-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 16v-4l5 5l-5 5v-4H4v-2zM8 2v3.999L20 6v2H8v4L3 7z"></svg:path>`,
})
export class RiArrowLeftRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowLeftRightLineIcon],svg[ri-arrow-left-right-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.05 12.05L21 17l-4.95 4.95l-1.414-1.415L17.172 18H4v-2h13.172l-2.536-2.535zm-8.1-10l1.414 1.414l-2.536 2.535H20v2H6.828l2.536 2.536L7.95 11.95L3 7z"></svg:path>`,
})
export class RiArrowLeftRightLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowLeftSFillIcon],svg[ri-arrow-left-s-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 12l6-6v12z"></svg:path>`,
})
export class RiArrowLeftSFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowLeftSLineIcon],svg[ri-arrow-left-s-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.828 12l4.95 4.95l-1.414 1.415L8 12l6.364-6.364l1.414 1.414z"></svg:path>`,
})
export class RiArrowLeftSLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowLeftUpBoxFillIcon],svg[ri-arrow-left-up-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm4 5h8.414l-3.5 3.5l3.793 3.793l-1.414 1.414l-3.793-3.793l-3.5 3.5z"></svg:path>`,
})
export class RiArrowLeftUpBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowLeftUpBoxLineIcon],svg[ri-arrow-left-up-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M5 19V5h14v14zM8 8v8h2v-4.586l5.293 5.293l1.414-1.414L11.414 10H16V8z"></svg:path>`,
})
export class RiArrowLeftUpBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowLeftUpFillIcon],svg[ri-arrow-left-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.36 10.947l5.658 5.657l-1.415 1.414l-5.656-5.657l-4.95 4.95V5.997H17.31z"></svg:path>`,
})
export class RiArrowLeftUpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowLeftUpLineIcon],svg[ri-arrow-left-up-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.414 8l8.607 8.607l-1.414 1.414L8 9.414V17H6V6h11v2z"></svg:path>`,
})
export class RiArrowLeftUpLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowLeftUpLongFillIcon],svg[ri-arrow-left-up-long-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.364 19.778l1.414-1.414l-9.606-9.607L14 4.93H4.929V14l3.828-3.828z"></svg:path>`,
})
export class RiArrowLeftUpLongFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowLeftUpLongLineIcon],svg[ri-arrow-left-up-long-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.778 18.364l-1.414 1.414L6.93 8.343v5.586h-2v-9h9v2H8.343z"></svg:path>`,
})
export class RiArrowLeftUpLongLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowLeftWideFillIcon],svg[ri-arrow-left-wide-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.369 12l4.747-8.968l1.768.936L10.632 12l4.252 8.032l-1.768.936z"></svg:path>`,
})
export class RiArrowLeftWideFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowLeftWideLineIcon],svg[ri-arrow-left-wide-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8.369 12l4.747-8.968l1.768.936L10.632 12l4.252 8.032l-1.768.936z"></svg:path>`,
})
export class RiArrowLeftWideLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowRightBoxFillIcon],svg[ri-arrow-right-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm13.657 9l-5.95 5.95V13H6.345v-2h5.364V6.05z"></svg:path>`,
})
export class RiArrowRightBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowRightBoxLineIcon],svg[ri-arrow-right-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M5 19V5h14v14zm12.657-7L12 17.657l-1.414-1.414L13.828 13H6.343v-2h7.485l-3.242-3.243L12 6.343z"></svg:path>`,
})
export class RiArrowRightBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowRightCircleFillIcon],svg[ri-arrow-right-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12S6.48 2 12 2m0 9H8v2h4v3l4-4l-4-4z"></svg:path>`,
})
export class RiArrowRightCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowRightCircleLineIcon],svg[ri-arrow-right-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11V8l4 4l-4 4v-3H8v-2zm0-9c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12S6.48 2 12 2m0 18c4.42 0 8-3.58 8-8s-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8"></svg:path>`,
})
export class RiArrowRightCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowRightDoubleFillIcon],svg[ri-arrow-right-double-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.164 12l-6.207-6.207l-1.414 1.414L16.336 12l-4.793 4.793l1.414 1.414zm-5.65 0L7.307 5.793L5.893 7.207L10.686 12l-4.793 4.793l1.414 1.414z"></svg:path>`,
})
export class RiArrowRightDoubleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowRightDoubleLineIcon],svg[ri-arrow-right-double-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.164 12l-6.207-6.207l-1.414 1.414L16.336 12l-4.793 4.793l1.414 1.414zm-5.65 0L7.307 5.793L5.893 7.207L10.686 12l-4.793 4.793l1.414 1.414z"></svg:path>`,
})
export class RiArrowRightDoubleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowRightDownBoxFillIcon],svg[ri-arrow-right-down-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm12 13H7.586l3.5-3.5l-3.793-3.794l1.414-1.414l3.793 3.793l3.5-3.5z"></svg:path>`,
})
export class RiArrowRightDownBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowRightDownBoxLineIcon],svg[ri-arrow-right-down-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M5 19V5h14v14zm11-3H8v-2h4.586L7.293 8.707l1.414-1.414L14 12.586V8h2z"></svg:path>`,
})
export class RiArrowRightDownBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowRightDownFillIcon],svg[ri-arrow-right-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.637 13.052L5.98 7.395L7.394 5.98l5.657 5.657L18 6.687v11.314H6.687z"></svg:path>`,
})
export class RiArrowRightDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowRightDownLineIcon],svg[ri-arrow-right-down-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.59 16.003L5.983 7.397l1.414-1.415l8.607 8.607V7.003h2v11h-11v-2z"></svg:path>`,
})
export class RiArrowRightDownLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowRightDownLongFillIcon],svg[ri-arrow-right-down-long-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.636 4.222L4.222 5.636l9.606 9.607L10 19.07h9.071V10l-3.828 3.829z"></svg:path>`,
})
export class RiArrowRightDownLongFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowRightDownLongLineIcon],svg[ri-arrow-right-down-long-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.222 5.636l1.414-1.414L17.07 15.657V10.07h2v9h-9v-2h5.586z"></svg:path>`,
})
export class RiArrowRightDownLongLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowRightFillIcon],svg[ri-arrow-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13H4v-2h8V4l8 8l-8 8z"></svg:path>`,
})
export class RiArrowRightFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowRightLineIcon],svg[ri-arrow-right-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.172 11l-5.364-5.364l1.414-1.414L20 12l-7.778 7.778l-1.414-1.414L16.172 13H4v-2z"></svg:path>`,
})
export class RiArrowRightLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowRightLongFillIcon],svg[ri-arrow-right-long-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 13v-2h13.586V5.586L22 12l-6.414 6.414V13z"></svg:path>`,
})
export class RiArrowRightLongFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowRightLongLineIcon],svg[ri-arrow-right-long-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 13v-2h16.172l-3.95-3.95l1.414-1.414L22 12l-6.364 6.364l-1.414-1.414l3.95-3.95z"></svg:path>`,
})
export class RiArrowRightLongLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowRightSFillIcon],svg[ri-arrow-right-s-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 12l-6 6V6z"></svg:path>`,
})
export class RiArrowRightSFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowRightSLineIcon],svg[ri-arrow-right-s-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.172 12l-4.95-4.95l1.414-1.413L16 12l-6.364 6.364l-1.414-1.415z"></svg:path>`,
})
export class RiArrowRightSLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowRightUpBoxFillIcon],svg[ri-arrow-right-up-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm12 5v8.414l-3.5-3.5l-3.793 3.793l-1.414-1.414l3.793-3.793l-3.5-3.5z"></svg:path>`,
})
export class RiArrowRightUpBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowRightUpBoxLineIcon],svg[ri-arrow-right-up-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M5 19V5h14v14zM16 8v8h-2v-4.586l-5.293 5.293l-1.414-1.414L12.586 10H8V8z"></svg:path>`,
})
export class RiArrowRightUpBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowRightUpFillIcon],svg[ri-arrow-right-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.05 12.361l-5.656 5.657l-1.414-1.414l5.657-5.657l-4.95-4.95H18v11.314z"></svg:path>`,
})
export class RiArrowRightUpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowRightUpLineIcon],svg[ri-arrow-right-up-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.004 9.414l-8.607 8.607l-1.414-1.414L14.59 8H7.003V6h11v11h-2z"></svg:path>`,
})
export class RiArrowRightUpLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowRightUpLongFillIcon],svg[ri-arrow-right-up-long-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.222 18.364l1.414 1.414l9.607-9.606L19.07 14V4.929H10l3.828 3.828z"></svg:path>`,
})
export class RiArrowRightUpLongFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowRightUpLongLineIcon],svg[ri-arrow-right-up-long-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m5.636 19.778l-1.414-1.414L15.657 6.93h-5.586v-2h9v9h-2V8.343z"></svg:path>`,
})
export class RiArrowRightUpLongLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowRightWideFillIcon],svg[ri-arrow-right-wide-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.632 12l-4.748-8.968l-1.768.936L13.368 12l-4.252 8.032l1.768.936z"></svg:path>`,
})
export class RiArrowRightWideFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowRightWideLineIcon],svg[ri-arrow-right-wide-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.632 12l-4.748-8.968l-1.768.936L13.368 12l-4.252 8.032l1.768.936z"></svg:path>`,
})
export class RiArrowRightWideLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowTurnBackFillIcon],svg[ri-arrow-turn-back-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 16h-4l5 6l5-6h-4v-5a8 8 0 1 0-16 0v9h2v-9a6 6 0 1 1 12 0z"></svg:path>`,
})
export class RiArrowTurnBackFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowTurnBackLineIcon],svg[ri-arrow-turn-back-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 18.172l-2.535-2.536l-1.414 1.414L18 22l4.95-4.95l-1.415-1.414L19 18.172V11a8 8 0 1 0-16 0v9h2v-9a6 6 0 1 1 12 0z"></svg:path>`,
})
export class RiArrowTurnBackLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowTurnForwardFillIcon],svg[ri-arrow-turn-forward-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 8v5a6 6 0 0 1-12 0V4H3v9a8 8 0 1 0 16 0V8h4l-5-6l-5 6z"></svg:path>`,
})
export class RiArrowTurnForwardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowTurnForwardLineIcon],svg[ri-arrow-turn-forward-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 5.828V13a6 6 0 0 1-12 0V4H3v9a8 8 0 1 0 16 0V5.828l2.536 2.536L22.95 6.95L18 2l-4.95 4.95l1.415 1.414z"></svg:path>`,
})
export class RiArrowTurnForwardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowUpBoxFillIcon],svg[ri-arrow-up-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm8 3.343l5.95 5.95H13v5.364h-2v-5.364H6.05z"></svg:path>`,
})
export class RiArrowUpBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowUpBoxLineIcon],svg[ri-arrow-up-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1M5 19V5h14v14zm7-12.657L6.343 12l1.414 1.414L11 10.172v7.485h2v-7.485l3.243 3.242L17.657 12z"></svg:path>`,
})
export class RiArrowUpBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowUpCircleFillIcon],svg[ri-arrow-up-circle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12S6.48 2 12 2m1 10h3l-4-4l-4 4h3v4h2z"></svg:path>`,
})
export class RiArrowUpCircleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowUpCircleLineIcon],svg[ri-arrow-up-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12S6.48 2 12 2m0 18c4.42 0 8-3.58 8-8s-3.58-8-8-8s-8 3.58-8 8s3.58 8 8 8m1-8v4h-2v-4H8l4-4l4 4z"></svg:path>`,
})
export class RiArrowUpCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowUpDoubleFillIcon],svg[ri-arrow-up-double-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 4.836l-6.207 6.207l1.414 1.414L12 7.664l4.793 4.793l1.414-1.414zm0 5.65l-6.207 6.207l1.414 1.414L12 13.314l4.793 4.793l1.414-1.414z"></svg:path>`,
})
export class RiArrowUpDoubleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowUpDoubleLineIcon],svg[ri-arrow-up-double-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 4.836l-6.207 6.207l1.414 1.414L12 7.664l4.793 4.793l1.414-1.414zm0 5.65l-6.207 6.207l1.414 1.414L12 13.314l4.793 4.793l1.414-1.414z"></svg:path>`,
})
export class RiArrowUpDoubleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowUpDownFillIcon],svg[ri-arrow-up-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8H8.001L8 20H6V8H2l5-5zm10 8l-5 5l-5-5h4V4h2v12z"></svg:path>`,
})
export class RiArrowUpDownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowUpDownLineIcon],svg[ri-arrow-up-down-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.95 7.95l-1.414 1.414L8 6.828V20H6V6.828L3.466 9.364L2.05 7.95L7 3zm10 8.1L17 21l-4.95-4.95l1.414-1.414l2.537 2.536L16 4h2v13.172l2.536-2.536z"></svg:path>`,
})
export class RiArrowUpDownLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowUpFillIcon],svg[ri-arrow-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 12v8h-2v-8H4l8-8l8 8z"></svg:path>`,
})
export class RiArrowUpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowUpLineIcon],svg[ri-arrow-up-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7.828V20h-2V7.828l-5.364 5.364l-1.414-1.414L12 4l7.778 7.778l-1.414 1.414z"></svg:path>`,
})
export class RiArrowUpLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowUpLongFillIcon],svg[ri-arrow-up-long-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 22h2V8.414h5.414L12 2L5.586 8.414H11z"></svg:path>`,
})
export class RiArrowUpLongFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowUpLongLineIcon],svg[ri-arrow-up-long-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 22h-2V5.828l-3.95 3.95l-1.414-1.414L12 2l6.364 6.364l-1.414 1.414L13 5.828z"></svg:path>`,
})
export class RiArrowUpLongLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowUpSFillIcon],svg[ri-arrow-up-s-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 8l6 6H6z"></svg:path>`,
})
export class RiArrowUpSFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowUpSLineIcon],svg[ri-arrow-up-s-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 10.828l-4.95 4.95l-1.414-1.414L12 8l6.364 6.364l-1.414 1.414z"></svg:path>`,
})
export class RiArrowUpSLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowUpWideFillIcon],svg[ri-arrow-up-wide-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 8.369l8.968 4.747l-.936 1.768L12 10.632l-8.032 4.252l-.936-1.768z"></svg:path>`,
})
export class RiArrowUpWideFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArrowUpWideLineIcon],svg[ri-arrow-up-wide-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 8.369l8.968 4.747l-.936 1.768L12 10.632l-8.032 4.252l-.936-1.768z"></svg:path>`,
})
export class RiArrowUpWideLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArtboard2FillIcon],svg[ri-artboard-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6h12v12H6zm0-4h2v3H6zm0 17h2v3H6zM2 6h3v2H2zm0 10h3v2H2zM19 6h3v2h-3zm0 10h3v2h-3zM16 2h2v3h-2zm0 17h2v3h-2z"></svg:path>`,
})
export class RiArtboard2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArtboard2LineIcon],svg[ri-artboard-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8v8h8V8zM6 6h12v12H6zm0-4h2v3H6zm0 17h2v3H6zM2 6h3v2H2zm0 10h3v2H2zM19 6h3v2h-3zm0 10h3v2h-3zM16 2h2v3h-2zm0 17h2v3h-2z"></svg:path>`,
})
export class RiArtboard2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArtboardFillIcon],svg[ri-artboard-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.586 17H3v-2h18v2h-5.586l3.243 3.243l-1.414 1.414L13 17.414V20h-2v-2.586l-4.243 4.243l-1.414-1.414zM5 3h14a1 1 0 0 1 1 1v10H4V4a1 1 0 0 1 1-1"></svg:path>`,
})
export class RiArtboardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArtboardLineIcon],svg[ri-artboard-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.586 17H3v-2h18v2h-5.586l3.243 3.243l-1.414 1.414L13 17.414V20h-2v-2.586l-4.243 4.243l-1.414-1.414zM5 3h14a1 1 0 0 1 1 1v10H4V4a1 1 0 0 1 1-1m1 2v7h12V5z"></svg:path>`,
})
export class RiArtboardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArticleFillIcon],svg[ri-article-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1M7 6v4h4V6zm0 6v2h10v-2zm0 4v2h10v-2zm6-9v2h4V7z"></svg:path>`,
})
export class RiArticleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riArticleLineIcon],svg[ri-article-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1m-1-2V4H5v16zM7 6h4v4H7zm0 6h10v2H7zm0 4h10v2H7zm6-9h4v2h-4z"></svg:path>`,
})
export class RiArticleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAspectRatioFillIcon],svg[ri-aspect-ratio-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-3 9h-2v3h-3v2h5zm-7-5H6v5h2V9h3z"></svg:path>`,
})
export class RiAspectRatioFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAspectRatioLineIcon],svg[ri-aspect-ratio-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 2H4v14h16zm-7 12v-2h3v-3h2v5zM11 7v2H8v3H6V7z"></svg:path>`,
})
export class RiAspectRatioLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAsteriskIcon],svg[ri-asterisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 3v7.267l6.294-3.633l1 1.732l-6.293 3.633l6.293 3.635l-1 1.732L13 13.732V21h-2v-7.268l-6.294 3.634l-1-1.732L9.999 12L3.706 8.366l1-1.732L11 10.267V3z"></svg:path>`,
})
export class RiAsteriskIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAtFillIcon],svg[ri-at-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m8-10a8 8 0 1 0-3.968 6.911l-1.008-1.728A6 6 0 1 1 18 12v1a1 1 0 1 1-2 0V9h-1.354a4 4 0 1 0 .066 5.94A3 3 0 0 0 20 13zm-8-2a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></svg:path>`,
})
export class RiAtFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAtLineIcon],svg[ri-at-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12a8 8 0 1 0-3.562 6.657l1.11 1.664A9.95 9.95 0 0 1 12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10v1.5a3.5 3.5 0 0 1-6.396 1.966A5 5 0 1 1 15 8h2v5.5a1.5 1.5 0 0 0 3 0zm-8-3a3 3 0 1 0 0 6a3 3 0 0 0 0-6"></svg:path>`,
})
export class RiAtLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAttachment2Icon],svg[ri-attachment-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.829 7.757l-5.657 5.657a1 1 0 1 0 1.414 1.414l5.657-5.656A3 3 0 0 0 12 4.929l-5.657 5.657a5 5 0 0 0 7.071 7.07L19.071 12l1.414 1.414l-5.656 5.657a7 7 0 0 1-9.9-9.9l5.657-5.656a5 5 0 0 1 7.071 7.07L12 16.244A3 3 0 0 1 7.758 12l5.656-5.657z"></svg:path>`,
})
export class RiAttachment2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAttachmentFillIcon],svg[ri-attachment-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.997 2.992L21 21.008a1 1 0 0 1-.993.992H3.993A.993.993 0 0 1 3 21.008V2.992A1 1 0 0 1 3.993 2h16.01c.549 0 .994.444.994.992M9 13V9a1 1 0 0 1 2 0v4a1 1 0 1 0 2 0V9a3 3 0 1 0-6 0v4a5 5 0 0 0 10 0V8h-2v5a3 3 0 1 1-6 0"></svg:path>`,
})
export class RiAttachmentFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAttachmentLineIcon],svg[ri-attachment-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 13.5V8a4 4 0 0 0-8 0v5.5a6.5 6.5 0 1 0 13 0V4h2v9.5a8.5 8.5 0 0 1-17 0V8a6 6 0 1 1 12 0v5.5a3.5 3.5 0 1 1-7 0V8h2v5.5a1.5 1.5 0 0 0 3 0"></svg:path>`,
})
export class RiAttachmentLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAuctionFillIcon],svg[ri-auction-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.005 20.003v2h-12v-2zM14.59.689l7.778 7.778l-1.414 1.414l-1.061-.353l-2.475 2.475l5.657 5.657l-1.414 1.414l-5.657-5.657l-2.404 2.404l.283 1.132l-1.415 1.414l-7.778-7.778l1.414-1.415l1.132.283l6.293-6.293l-.353-1.06z"></svg:path>`,
})
export class RiAuctionFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAuctionLineIcon],svg[ri-auction-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.005 20.003v2h-12v-2zM14.59.689l7.778 7.778l-1.414 1.414l-1.061-.353l-2.475 2.475l5.657 5.657l-1.414 1.414l-5.657-5.657l-2.404 2.404l.283 1.132l-1.415 1.414l-7.778-7.778l1.414-1.415l1.132.283l6.293-6.293l-.353-1.06zm.707 3.536l-7.071 7.07l3.535 3.536l7.071-7.07z"></svg:path>`,
})
export class RiAuctionLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAwardFillIcon],svg[ri-award-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0M12 15a6 6 0 1 0 0-12a6 6 0 0 0 0 12m0-2a4 4 0 1 1 0-8a4 4 0 0 1 0 8"></svg:path>`,
})
export class RiAwardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riAwardLineIcon],svg[ri-award-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 15.245v6.872a.5.5 0 0 1-.757.429L12 20l-4.243 2.546a.5.5 0 0 1-.757-.43v-6.87a8 8 0 1 1 10 0M9 16.42v3.049l3-1.8l3 1.8v-3.05A8 8 0 0 1 12 17a8 8 0 0 1-3-.581M12 15a6 6 0 1 0 0-12a6 6 0 0 0 0 12"></svg:path>`,
})
export class RiAwardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBaiduFillIcon],svg[ri-baidu-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.926 12.497c2.063-.444 1.782-2.909 1.72-3.448c-.1-.83-1.078-2.282-2.404-2.167c-1.67.15-1.914 2.561-1.914 2.561c-.226 1.115.54 3.497 2.598 3.053m2.191 4.288c-.06.173-.195.616-.079 1.002c.23.866.982.905.982.905h1.08v-2.64H8.944c-.52.154-.77.559-.827.733m1.638-8.422c1.14 0 2.06-1.312 2.06-2.933s-.92-2.93-2.06-2.93c-1.138 0-2.06 1.31-2.06 2.93s.923 2.933 2.06 2.933m4.907.193c1.523.198 2.502-1.427 2.697-2.659c.198-1.23-.784-2.658-1.862-2.904c-1.08-.248-2.43 1.483-2.552 2.61c-.147 1.38.197 2.758 1.717 2.953m0 3.448c-1.865-2.905-4.513-1.723-5.399-.245c-.882 1.477-2.256 2.41-2.452 2.658c-.198.244-2.846 1.673-2.258 4.284c.588 2.609 2.653 2.56 2.653 2.56s1.521.15 3.286-.246c1.766-.391 3.286.098 3.286.098s4.124 1.38 5.253-1.278c1.127-2.66-.638-4.038-.638-4.038s-2.356-1.823-3.731-3.793m-6.007 7.75c-1.158-.231-1.62-1.021-1.677-1.156c-.057-.137-.386-.772-.212-1.853c.5-1.619 1.927-1.735 1.927-1.735h1.427v-1.755l1.216.02v6.479zm4.59-.019c-1.196-.308-1.252-1.158-1.252-1.158v-3.412l1.252-.02v3.066c.076.328.482.387.482.387H15v-3.433h1.331v4.57zm7.453-9.11c0-.59-.49-2.364-2.305-2.364c-1.818 0-2.061 1.675-2.061 2.859c0 1.13.095 2.707 2.354 2.657s2.012-2.56 2.012-3.152"></svg:path>`,
})
export class RiBaiduFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBaiduLineIcon],svg[ri-baidu-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.563 19.28q.257.012.584.006a9.7 9.7 0 0 0 1.912-.223a8.8 8.8 0 0 1 2.98-.131a8 8 0 0 1 1.289.257c1.077.275 2.61.223 3.005-.41c.29-.468.253-.787-.026-1.199c-.06-.09-.126-.17-.188-.235l-.024-.025l-.165-.132q-.265-.215-.579-.486a26 26 0 0 1-1.752-1.66a16 16 0 0 1-1.577-1.893l-.036-.053c-.742-1.139-1.558-1.067-2.002-.318a9.6 9.6 0 0 1-.955 1.332c-.41.482-.83.89-1.306 1.297c-.122.105-.502.42-.411.344c-.004.003-.017.015.05-.071c-.098.12-.95.877-1.2 1.162c-.515.583-.722 1.08-.645 1.48c.073.376.22.587.45.745a1.4 1.4 0 0 0 .48.206zm7.099-7.276c1.375 1.97 3.731 3.793 3.731 3.793s2.064 1.748.638 4.038s-5.253 1.278-5.253 1.278s-1.52-.49-3.286-.098c-1.765.395-3.286.245-3.286.245S5 21.015 4.553 18.701c-.446-2.314 2.06-4.04 2.258-4.284c.196-.247 1.512-1.073 2.452-2.658c.94-1.586 3.584-2.54 5.399.245m5.538-1.42c0 .457.191 2.393-1.552 2.432c-1.743.038-1.816-1.178-1.816-2.05c0-.913.187-2.205 1.59-2.205c1.4 0 1.778 1.369 1.778 1.824m-5.429-2.777c-1.18-.152-1.447-1.222-1.333-2.293c.095-.875 1.142-2.219 1.981-2.026c.837.19 1.6 1.3 1.446 2.254c-.152.957-.912 2.218-2.094 2.065M9.755 7.44c-.861 0-1.56-.993-1.56-2.22S8.892 3 9.754 3s1.56.993 1.56 2.22s-.697 2.22-1.56 2.22m-3.793 4.566c-1.695.365-2.327-1.597-2.14-2.515c0 0 .2-1.987 1.576-2.11c1.093-.095 1.898 1.101 1.98 1.785c.052.444.283 2.475-1.416 2.84"></svg:path>`,
})
export class RiBaiduLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBallPenFillIcon],svg[ri-ball-pen-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.85 11.805l-.708-.707l-9.9 9.9H3v-4.243L14.314 5.44l5.657 5.657a1 1 0 0 1 0 1.414L12.9 19.583l-1.415-1.414zm.706-9.192l2.829 2.828a1 1 0 0 1 0 1.414L19.97 8.27l-4.243-4.242l1.414-1.414a1 1 0 0 1 1.414 0"></svg:path>`,
})
export class RiBallPenFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBallPenLineIcon],svg[ri-ball-pen-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.85 11.698l-.708-.707l-9.9 9.9H3v-4.243L14.314 5.334l5.657 5.657a1 1 0 0 1 0 1.414L12.9 19.477l-1.415-1.415zm-2.122-2.121l-1.414-1.414L5 17.477v1.414h1.414zm2.828-7.071l2.829 2.828a1 1 0 0 1 0 1.415L19.97 8.163L15.728 3.92l1.414-1.414a1 1 0 0 1 1.414 0"></svg:path>`,
})
export class RiBallPenLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBankCard2FillIcon],svg[ri-bank-card-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.005 11v9a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-9zm0-4h-20V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1z"></svg:path>`,
})
export class RiBankCard2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBankCard2LineIcon],svg[ri-bank-card-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.005 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m17 9h-16v7h16zm0-4V5h-16v3z"></svg:path>`,
})
export class RiBankCard2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBankCardFillIcon],svg[ri-bank-card-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.005 10v10a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V10zm0-2h-20V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zm-7 8v2h4v-2z"></svg:path>`,
})
export class RiBankCardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBankCardLineIcon],svg[ri-bank-card-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.005 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m17 8h-16v8h16zm0-2V5h-16v4zm-6 6h4v2h-4z"></svg:path>`,
})
export class RiBankCardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBankFillIcon],svg[ri-bank-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20h20v2H2zm2-8h2v7H4zm5 0h2v7H9zm4 0h2v7h-2zm5 0h2v7h-2zM2 7l10-5l10 5v4H2zm10 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class RiBankFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBankLineIcon],svg[ri-bank-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20h20v2H2zm2-8h2v7H4zm5 0h2v7H9zm4 0h2v7h-2zm5 0h2v7h-2zM2 7l10-5l10 5v4H2zm2 1.236V9h16v-.764l-8-4zM12 8a1 1 0 1 1 0-2a1 1 0 0 1 0 2"></svg:path>`,
})
export class RiBankLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBarChart2FillIcon],svg[ri-bar-chart-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 13h6v8H2zM9 3h6v18H9zm7 5h6v13h-6z"></svg:path>`,
})
export class RiBarChart2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBarChart2LineIcon],svg[ri-bar-chart-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 13h6v8H2zm14-5h6v13h-6zM9 3h6v18H9zM4 15v4h2v-4zm7-10v14h2V5zm7 5v9h2v-9z"></svg:path>`,
})
export class RiBarChart2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBarChartBoxAiFillIcon],svg[ri-bar-chart-box-ai-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M22 20v-9.341A6 6 0 0 1 20 11a6 6 0 0 1-3-.803V17h-2v-7h1.682A6 6 0 0 1 14 5c0-.701.12-1.374.341-2H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1M7 13h2v4H7zm4-6h2v10h-2z"></svg:path>`,
})
export class RiBarChartBoxAiFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBarChartBoxAiLineIcon],svg[ri-bar-chart-box-ai-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M2 4a1 1 0 0 1 1-1h11v2H4v14h16v-8h2v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm5 9h2v4H7zm4-6h2v10h-2zm4 3h2v7h-2z"></svg:path>`,
})
export class RiBarChartBoxAiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBarChartBoxFillIcon],svg[ri-bar-chart-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m4 10v4h2v-4zm4-6v10h2V7zm4 3v7h2v-7z"></svg:path>`,
})
export class RiBarChartBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBarChartBoxLineIcon],svg[ri-bar-chart-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h16V5zm3 8h2v4H7zm4-6h2v10h-2zm4 3h2v7h-2z"></svg:path>`,
})
export class RiBarChartBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBarChartFillIcon],svg[ri-bar-chart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 12h4v9H3zm14-4h4v13h-4zm-7-6h4v19h-4z"></svg:path>`,
})
export class RiBarChartFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBarChartGroupedFillIcon],svg[ri-bar-chart-grouped-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12h2v9H2zm3 2h2v7H5zm11-6h2v13h-2zm3 2h2v11h-2zM9 2h2v19H9zm3 2h2v17h-2z"></svg:path>`,
})
export class RiBarChartGroupedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBarChartGroupedLineIcon],svg[ri-bar-chart-grouped-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12h2v9H2zm3 2h2v7H5zm11-6h2v13h-2zm3 2h2v11h-2zM9 2h2v19H9zm3 2h2v17h-2z"></svg:path>`,
})
export class RiBarChartGroupedLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBarChartHorizontalFillIcon],svg[ri-bar-chart-horizontal-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3v4H3V3zm4 14v4H3v-4zm6-7v4H3v-4z"></svg:path>`,
})
export class RiBarChartHorizontalFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBarChartHorizontalLineIcon],svg[ri-bar-chart-horizontal-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3v2H3V3zm4 16v2H3v-2zm6-8v2H3v-2z"></svg:path>`,
})
export class RiBarChartHorizontalLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBarChartLineIcon],svg[ri-bar-chart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 12h2v9H3zm16-4h2v13h-2zm-8-6h2v19h-2z"></svg:path>`,
})
export class RiBarChartLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBarcodeBoxFillIcon],svg[ri-barcode-box-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m3 4v10h3V7zm4 0v10h2V7zm3 0v10h1V7zm2 0v10h3V7z"></svg:path>`,
})
export class RiBarcodeBoxFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBarcodeBoxLineIcon],svg[ri-barcode-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v14h16V5zM3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m3 4h3v10H6zm4 0h2v10h-2zm3 0h1v10h-1zm2 0h3v10h-3z"></svg:path>`,
})
export class RiBarcodeBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBarcodeFillIcon],svg[ri-barcode-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h2v16H2zm4 0h2v16H6zm3 0h3v16H9zm4 0h2v16h-2zm3 0h2v16h-2zm3 0h3v16h-3z"></svg:path>`,
})
export class RiBarcodeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBarcodeLineIcon],svg[ri-barcode-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4h2v16H2zm4 0h1v16H6zm2 0h2v16H8zm3 0h2v16h-2zm3 0h2v16h-2zm3 0h1v16h-1zm2 0h3v16h-3z"></svg:path>`,
})
export class RiBarcodeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBardFillIcon],svg[ri-bard-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.614 17.796l.878-2.01a7.74 7.74 0 0 1 3.94-3.992l2.416-1.072c.768-.341.768-1.458 0-1.8l-2.34-1.038a7.75 7.75 0 0 1-3.997-4.125l-.89-2.142a.946.946 0 0 0-1.758 0l-.889 2.142a7.75 7.75 0 0 1-3.997 4.125l-2.34 1.039c-.768.34-.768 1.458 0 1.799l2.415 1.072a7.74 7.74 0 0 1 3.94 3.991l.878 2.01a.946.946 0 0 0 1.744 0m8.787 4.894l.247-.566a4.37 4.37 0 0 1 2.221-2.25l.76-.339a.53.53 0 0 0 0-.963l-.717-.319a4.37 4.37 0 0 1-2.253-2.326l-.254-.611a.507.507 0 0 0-.942 0l-.254.61a4.37 4.37 0 0 1-2.253 2.327l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.37 4.37 0 0 1 2.222 2.251l.247.566c.18.414.754.414.934 0"></svg:path>`,
})
export class RiBardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBardLineIcon],svg[ri-bard-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.614 17.796a.946.946 0 0 1-1.744 0l-.877-2.01a7.74 7.74 0 0 0-3.94-3.992l-2.416-1.072c-.768-.341-.768-1.458 0-1.8l2.34-1.038a7.75 7.75 0 0 0 3.997-4.125l.89-2.142a.946.946 0 0 1 1.757 0l.89 2.142a7.75 7.75 0 0 0 3.997 4.125l2.34 1.039c.768.34.768 1.458 0 1.799l-2.415 1.072a7.74 7.74 0 0 0-3.941 3.991zM4.54 9.822c2.285 1.015 4.144 2.683 5.202 4.978c1.059-2.295 2.917-3.963 5.203-4.978c-2.313-1.026-4.177-2.776-5.203-5.111c-1.025 2.335-2.89 4.085-5.202 5.111M19.4 22.69l.247-.566a4.37 4.37 0 0 1 2.221-2.25l.76-.339a.53.53 0 0 0 0-.963l-.717-.319a4.37 4.37 0 0 1-2.253-2.326l-.254-.611a.507.507 0 0 0-.942 0l-.254.61a4.37 4.37 0 0 1-2.253 2.327l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.37 4.37 0 0 1 2.222 2.251l.247.566c.18.414.754.414.934 0m-1.026-3.643l.562-.559l.55.559l-.55.543z"></svg:path>`,
})
export class RiBardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBarricadeFillIcon],svg[ri-barricade-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.556 19H21v2H3v-2h1.444l.89-4h13.333zM17.333 9l.89 4H5.777l.889-4zm-.444-2H7.11l.715-3.217A1 1 0 0 1 8.802 3h6.396a1 1 0 0 1 .976.783z"></svg:path>`,
})
export class RiBarricadeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBarricadeLineIcon],svg[ri-barricade-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.493 19h11.014l-.667-3H7.16zm13.063 0H21v2H3v-2h1.444L7.826 3.783A1 1 0 0 1 8.802 3h6.396a1 1 0 0 1 .976.783zM7.604 14h8.792l-.89-4H8.494zm1.334-6h6.124l-.666-3H9.604z"></svg:path>`,
})
export class RiBarricadeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBaseStationFillIcon],svg[ri-base-station-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 13l6 9H6zm-1.06-2.44a1.5 1.5 0 1 1 2.12-2.12a1.5 1.5 0 0 1-2.12 2.12M5.281 2.783l1.415 1.415a7.5 7.5 0 0 0 0 10.606l-1.415 1.415a9.5 9.5 0 0 1 0-13.436m13.436 0a9.5 9.5 0 0 1 0 13.436l-1.415-1.415a7.5 7.5 0 0 0 0-10.606zM8.11 5.611l1.414 1.414a3.5 3.5 0 0 0 0 4.95L8.11 13.389a5.5 5.5 0 0 1 0-7.778m7.778 0a5.5 5.5 0 0 1 0 7.778l-1.414-1.414a3.5 3.5 0 0 0 0-4.95z"></svg:path>`,
})
export class RiBaseStationFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBaseStationLineIcon],svg[ri-base-station-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 13l6 9H6zm0 3.6L9.74 20h4.52zm-1.06-6.04a1.5 1.5 0 1 1 2.12-2.12a1.5 1.5 0 0 1-2.12 2.12M5.281 2.783l1.415 1.415a7.5 7.5 0 0 0 0 10.606l-1.415 1.415a9.5 9.5 0 0 1 0-13.436m13.436 0a9.5 9.5 0 0 1 0 13.436l-1.415-1.415a7.5 7.5 0 0 0 0-10.606zM8.11 5.611l1.414 1.414a3.5 3.5 0 0 0 0 4.95L8.11 13.389a5.5 5.5 0 0 1 0-7.778m7.778 0a5.5 5.5 0 0 1 0 7.778l-1.414-1.414a3.5 3.5 0 0 0 0-4.95z"></svg:path>`,
})
export class RiBaseStationLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBasketballFillIcon],svg[ri-basketball-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.366 13.366l1.775 1.025a9.98 9.98 0 0 0-.311 7.44A10 10 0 0 1 12 22a10 10 0 0 1-4.11-.88zm3.518 2.032l4.233 2.444a10.03 10.03 0 0 1-4.363 3.43a8 8 0 0 1 .008-5.57zm-7.025-4.056l1.775 1.024l-4.476 7.75a10.03 10.03 0 0 1-3.59-4.785a9.98 9.98 0 0 0 6.085-3.713zm13.046-.726Q22 11.297 22 12a10 10 0 0 1-.88 4.11l-4.236-2.445a8 8 0 0 1 4.866-3.021zM2.881 7.892l4.235 2.445a8 8 0 0 1-5.021 3.05A10 10 0 0 1 2 12a10 10 0 0 1 .88-4.11m14.961-4.008a10.03 10.03 0 0 1 3.59 4.785a9.98 9.98 0 0 0-6.086 3.715l-.205.276l-1.775-1.025zM12 2a10 10 0 0 1 4.11.88l-4.476 7.754L9.859 9.61a9.98 9.98 0 0 0 .311-7.442A10 10 0 0 1 12 2m-3.753.73a8 8 0 0 1-.01 5.57l-.12.303l-4.234-2.445a10.04 10.04 0 0 1 4.164-3.346z"></svg:path>`,
})
export class RiBasketballFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBasketballLineIcon],svg[ri-basketball-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m.366 11.366l-3.469 6.01a8.06 8.06 0 0 0 4.459.51a9.94 9.94 0 0 1 .784-5.494zm3.518 2.031a7.96 7.96 0 0 0-.587 3.894a8 8 0 0 0 3.078-2.456zm-7.025-4.055a9.95 9.95 0 0 1-4.365 3.428a8 8 0 0 0 2.671 3.605l3.469-6.009zm11.103-.13l-.258.12a7.95 7.95 0 0 0-2.82 2.333l2.492 1.439a8 8 0 0 0 .586-3.893M4 12q0 .4.038.789a7.95 7.95 0 0 0 3.078-2.453L4.624 8.897A8 8 0 0 0 4 12m12.835-6.374l-3.469 6.008l1.775 1.025a9.95 9.95 0 0 1 4.366-3.43a8 8 0 0 0-2.419-3.402zM12 4q-.695.001-1.357.115a9.93 9.93 0 0 1-.784 5.494l1.775 1.025l3.469-6.01A8 8 0 0 0 12 4m-3.297.71l-.191.088a8 8 0 0 0-2.886 2.367l2.49 1.438a7.96 7.96 0 0 0 .587-3.893"></svg:path>`,
})
export class RiBasketballLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBattery2ChargeFillIcon],svg[ri-battery-2-charge-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm4 8V7l-5 7h3v5l5-7z"></svg:path>`,
})
export class RiBattery2ChargeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBattery2ChargeLineIcon],svg[ri-battery-2-charge-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 12h3l-5 7v-5H8l5-7zm-2-6H7v14h10V6h-4V4h-2zM9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"></svg:path>`,
})
export class RiBattery2ChargeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBattery2FillIcon],svg[ri-battery-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"></svg:path>`,
})
export class RiBattery2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBattery2LineIcon],svg[ri-battery-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 6H7v14h10V6h-4V4h-2zM9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"></svg:path>`,
})
export class RiBattery2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBatteryChargeFillIcon],svg[ri-battery-charge-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11V5l-5 8h3v6l5-8zM3 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1m18 4h2v6h-2z"></svg:path>`,
})
export class RiBatteryChargeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBatteryChargeLineIcon],svg[ri-battery-charge-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 19H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6.625L8.458 7H4v10h4zm4.375 0l1.167-2H18V7h-4V5h5a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1zM21 9h2v6h-2zm-9 2h3l-5 8v-6H7l5-8z"></svg:path>`,
})
export class RiBatteryChargeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBatteryFillIcon],svg[ri-battery-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1m18 4h2v6h-2z"></svg:path>`,
})
export class RiBatteryFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBatteryLineIcon],svg[ri-battery-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7v10h14V7zM3 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1m18 4h2v6h-2z"></svg:path>`,
})
export class RiBatteryLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBatteryLowFillIcon],svg[ri-battery-low-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1m2 3v8h4V8zm16 1h2v6h-2z"></svg:path>`,
})
export class RiBatteryLowFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBatteryLowLineIcon],svg[ri-battery-low-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7v10h14V7zM3 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1m2 3h4v8H5zm16 1h2v6h-2z"></svg:path>`,
})
export class RiBatteryLowLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBatterySaverFillIcon],svg[ri-battery-saver-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2a1 1 0 0 1 1 1v1h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1zm-1 7h-2v3H8v2h3v3h2v-3h3v-2h-3z"></svg:path>`,
})
export class RiBatterySaverFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBatterySaverLineIcon],svg[ri-battery-saver-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2a1 1 0 0 1 1 1v1h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1zm-1 2h-2v2H7v14h10V6h-4zm0 5v3h3v2h-3v3h-2v-3H8v-2h3V9z"></svg:path>`,
})
export class RiBatterySaverLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBatteryShareFillIcon],svg[ri-battery-share-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2a1 1 0 0 1 1 1v1h3a1 1 0 0 1 1 1v6.2L15 8v3h-1c-2.142 0-4 1.79-4 4v3h2v-3c0-1.05.95-2 2-2h1v3l4-3.2V21a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1z"></svg:path>`,
})
export class RiBatteryShareFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBatteryShareLineIcon],svg[ri-battery-share-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2a1 1 0 0 1 1 1v1h3a1 1 0 0 1 1 1v2h-2V6h-4V4h-2v2H7v14h10v-3h2v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V3a1 1 0 0 1 1-1zm1 6l5 4l-5 4v-3h-1c-1.054 0-2 .95-2 2v3h-2v-3a4 4 0 0 1 4-4h1z"></svg:path>`,
})
export class RiBatteryShareLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBearSmileFillIcon],svg[ri-bear-smile-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 2a4.5 4.5 0 0 1 2.951 7.897A9 9 0 0 1 21 13a9 9 0 1 1-18 0c0-1.09.194-2.136.55-3.103a4.5 4.5 0 1 1 6.791-5.744a9 9 0 0 1 3.32 0A4.5 4.5 0 0 1 17.5 2M10 13H8a4 4 0 0 0 8 0h-2a2 2 0 1 1-4 0"></svg:path>`,
})
export class RiBearSmileFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBearSmileLineIcon],svg[ri-bear-smile-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17a4 4 0 0 0 4-4h-2a2 2 0 1 1-4 0H8a4 4 0 0 0 4 4M6.5 2a4.5 4.5 0 0 0-2.95 7.898a9 9 0 1 0 16.901 0a4.5 4.5 0 1 0-6.79-5.745a9 9 0 0 0-3.321 0A4.5 4.5 0 0 0 6.5 2M4 6.5a2.5 2.5 0 0 1 4.852-.851l.318.878l.898-.257A7 7 0 0 1 12 6c.672 0 1.32.094 1.932.27l.898.257l.318-.878a2.501 2.501 0 1 1 3.58 3.03l-.814.46l.404.842a7 7 0 1 1-12.635 0l.403-.843l-.814-.46A2.5 2.5 0 0 1 4 6.5"></svg:path>`,
})
export class RiBearSmileLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBeerFillIcon],svg[ri-beer-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3a2 2 0 0 1 1.972 2.335l1.973.33a4 4 0 0 0-.005-1.361A2 2 0 0 1 15.733 7H5a1 1 0 1 1 .539-1.843a1 1 0 0 0 1.513-.614A2 2 0 0 1 9 3m1.516-1.703A4 4 0 0 0 5.51 3.043A3 3 0 0 0 3 8.236V20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2h2a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-2v-.354a4 4 0 0 0-4.896-6.169a4 4 0 0 0-1.588-1.18M17 18v-7h2v7zM7 11h2v7H7zm4 0h2v7h-2z"></svg:path>`,
})
export class RiBeerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBeerLineIcon],svg[ri-beer-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3a2 2 0 0 1 1.972 2.335l1.973.33a4 4 0 0 0-.005-1.361A2 2 0 0 1 15.733 7H5a1 1 0 1 1 .539-1.843a1 1 0 0 0 1.513-.614A2 2 0 0 1 9 3m1.516-1.703A4 4 0 0 0 5.51 3.043A3 3 0 0 0 3 8.236V20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2h2a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-2v-.354a4 4 0 0 0-4.896-6.169a4 4 0 0 0-1.588-1.18M17 11h2v7h-2zm-2-2v11H5V9zm-8 2v7h2v-7zm6 0v7h-2v-7z"></svg:path>`,
})
export class RiBeerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBehanceFillIcon],svg[ri-behance-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.443 5.35c.639 0 1.23.05 1.77.198c.541.099.984.297 1.377.544q.591.371.885 1.039c.197.445.296.99.296 1.583c0 .693-.148 1.286-.492 1.731c-.295.446-.787.841-1.377 1.138c.836.248 1.475.693 1.869 1.286s.639 1.336.639 2.177c0 .693-.148 1.286-.394 1.781c-.245.495-.639.94-1.082 1.237a5.1 5.1 0 0 1-1.573.692c-.59.149-1.18.248-1.77.248H1V5.35zm-.394 5.54c.541 0 .984-.148 1.328-.395s.492-.693.492-1.237c0-.297-.05-.594-.148-.791s-.246-.347-.442-.495a2.4 2.4 0 0 0-.64-.247c-.246-.05-.491-.05-.787-.05H4v3.216zm.148 5.838c.295 0 .59-.05.836-.099c.246-.05.492-.148.688-.297a1.8 1.8 0 0 0 .492-.544c.098-.247.197-.544.197-.89c0-.693-.197-1.188-.59-1.534c-.394-.297-.935-.445-1.574-.445H4v3.81zm9.492-.05q.59.594 1.77.594c.541 0 1.033-.148 1.426-.395q.591-.446.738-.891h2.41c-.394 1.187-.984 2.028-1.77 2.572c-.788.495-1.722.792-2.853.792a5.8 5.8 0 0 1-2.115-.396a3.9 3.9 0 0 1-1.574-1.088a3.9 3.9 0 0 1-.983-1.633c-.246-.643-.345-1.335-.345-2.127c0-.742.099-1.434.345-2.078a5.3 5.3 0 0 1 1.033-1.682c.442-.445.983-.84 1.573-1.088a5.5 5.5 0 0 1 2.066-.396c.836 0 1.574.149 2.213.495c.64.346 1.131.742 1.524 1.336c.394.544.69 1.187.886 1.88c.098.692.147 1.385.098 2.176H16c0 .792.295 1.534.689 1.93m3.098-5.194c-.344-.346-.885-.544-1.525-.544a2.34 2.34 0 0 0-1.082.247c-.295.149-.491.347-.688.545a1.3 1.3 0 0 0-.344.692c-.05.248-.099.445-.099.643h4.426c-.098-.742-.344-1.236-.688-1.583M15.459 6.29h5.508v1.336H15.46z"></svg:path>`,
})
export class RiBehanceFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBehanceLineIcon],svg[ri-behance-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 11a2 2 0 1 0 0-4H3v4zm1 2H3v4h5.5a2 2 0 1 0 0-4m2.063-1.428A4 4 0 0 1 8.5 19H1V5h6.5a4 4 0 0 1 3.063 6.573M15.5 6H21v1.5h-5.5zm7.5 8.5h-7.5v.25A2.75 2.75 0 0 0 20.7 16h2.134a4.752 4.752 0 0 1-9.334-1.25v-1.5a4.75 4.75 0 1 1 9.5 0zm-2.104-2a2.751 2.751 0 0 0-5.292 0z"></svg:path>`,
})
export class RiBehanceLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBellFillIcon],svg[ri-bell-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.414 10.586l.48.486l.464.485l.46.492c3.458 3.764 5.472 7.218 4.607 8.083c-.4.4-1.356.184-2.64-.507a9.01 9.01 0 0 1-10.403-.592l2.98-2.98a2 2 0 1 0-1.45-1.569l.035.155l-2.979 2.98a9.01 9.01 0 0 1-.592-10.405c-.692-1.283-.908-2.238-.508-2.639c.977-.976 5.25 1.715 9.546 6.01m6.364-6.364a2 2 0 0 1-.165 2.976a9.02 9.02 0 0 1 .608 8.47c-1.189-1.954-3.07-4.173-5.393-6.496l-.537-.532c-2.128-2.078-4.156-3.764-5.958-4.86a9.02 9.02 0 0 1 8.471.607q.066-.086.146-.165a2 2 0 0 1 2.828 0"></svg:path>`,
})
export class RiBellFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBellLineIcon],svg[ri-bell-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.121 9.879c4.296 4.295 6.829 8.728 5.657 9.9c-.475.474-1.486.34-2.807-.273a9.01 9.01 0 0 1-10.59-.474l-.038.039l-1.414-1.414l.038-.04A9.01 9.01 0 0 1 4.495 7.03c-.614-1.322-.748-2.333-.273-2.808c1.128-1.128 5.277 1.177 9.417 5.182zm-1.414 1.414C10.823 9.409 8.87 7.842 7.236 6.87l-.186.18a7 7 0 0 0-.657 9.142l1.846-1.846a2 2 0 0 1 3.347-1.932a2 2 0 0 1-1.931 3.347l-1.848 1.846a7 7 0 0 0 9.143-.657l.179-.188l-.053-.089c-.976-1.615-2.52-3.53-4.369-5.38m7.071-7.071a2 2 0 0 1-.165 2.976a9.02 9.02 0 0 1 .663 8.345a21 21 0 0 0-1.386-2.306a6.99 6.99 0 0 0-1.94-6.187a6.99 6.99 0 0 0-6.187-1.94a21 21 0 0 0-2.306-1.386a9.02 9.02 0 0 1 8.347.663q.066-.086.146-.165a2 2 0 0 1 2.828 0"></svg:path>`,
})
export class RiBellLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBikeFillIcon],svg[ri-bike-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 12H4V7H2V5h6v2H6v2.795l9.813-2.629L15.233 5H12V3h3.978a1 1 0 0 1 .988.741l1.553 5.796l-1.932.517l-.256-.956zM5 21a4 4 0 1 1 0-8a4 4 0 0 1 0 8m0-3a1 1 0 1 0 0-2a1 1 0 0 0 0 2m13 3a5 5 0 1 1 0-10a5 5 0 0 1 0 10m0-4a1 1 0 1 0 0-2a1 1 0 0 0 0 2"></svg:path>`,
})
export class RiBikeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBikeLineIcon],svg[ri-bike-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 12H4V7H2V5h6v2H6v2.795l9.813-2.629L15.233 5H12V3h3.978a1 1 0 0 1 .988.741l1.553 5.796l-1.932.517l-.256-.956zM5 19a2 2 0 1 0 0-4a2 2 0 0 0 0 4m0 2a4 4 0 1 1 0-8a4 4 0 0 1 0 8m13-2a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 2a5 5 0 1 1 0-10a5 5 0 0 1 0 10"></svg:path>`,
})
export class RiBikeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBilibiliFillIcon],svg[ri-bilibili-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.223 3.086a1.25 1.25 0 0 1 0 1.768L17.08 5.996h1.17A3.75 3.75 0 0 1 22 9.747v7.5a3.75 3.75 0 0 1-3.75 3.75H5.75A3.75 3.75 0 0 1 2 17.247v-7.5a3.75 3.75 0 0 1 3.75-3.75h1.166L5.775 4.855a1.25 1.25 0 0 1 1.767-1.768l2.652 2.652q.119.119.198.257h3.213q.08-.14.199-.258l2.651-2.652a1.25 1.25 0 0 1 1.768 0m.027 5.42H5.75a1.25 1.25 0 0 0-1.247 1.157l-.003.094v7.5c0 .659.51 1.198 1.157 1.246l.093.004h12.5a1.25 1.25 0 0 0 1.247-1.157l.003-.093v-7.5c0-.69-.56-1.25-1.25-1.25m-10 2.5c.69 0 1.25.56 1.25 1.25v1.25a1.25 1.25 0 1 1-2.5 0v-1.25c0-.69.56-1.25 1.25-1.25m7.5 0c.69 0 1.25.56 1.25 1.25v1.25a1.25 1.25 0 1 1-2.5 0v-1.25c0-.69.56-1.25 1.25-1.25"></svg:path>`,
})
export class RiBilibiliFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBilibiliLineIcon],svg[ri-bilibili-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.172 2.757L10.414 6h3.171l3.243-3.242a1 1 0 1 1 1.415 1.415L16.414 6H18.5A3.5 3.5 0 0 1 22 9.5v8a3.5 3.5 0 0 1-3.5 3.5h-13A3.5 3.5 0 0 1 2 17.5v-8A3.5 3.5 0 0 1 5.5 6h2.085L5.757 4.171a1 1 0 0 1 1.415-1.415M18.5 8h-13a1.5 1.5 0 0 0-1.493 1.356L4 9.5v8a1.5 1.5 0 0 0 1.356 1.493L5.5 19h13a1.5 1.5 0 0 0 1.493-1.355L20 17.5v-8A1.5 1.5 0 0 0 18.5 8M8 11a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1m8 0a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"></svg:path>`,
})
export class RiBilibiliLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBillFillIcon],svg[ri-bill-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1M8 9v2h8V9zm0 4v2h8v-2z"></svg:path>`,
})
export class RiBillFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBillLineIcon],svg[ri-bill-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1m-1-2V4H5v16zM8 9h8v2H8zm0 4h8v2H8z"></svg:path>`,
})
export class RiBillLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBilliardsFillIcon],svg[ri-billiards-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 4a6 6 0 1 0 0 12a6 6 0 0 0 0-12m0 1.75a2.5 2.5 0 0 1 1.88 4.148c.565.456.92 1.117.92 1.852c0 1.38-1.254 2.5-2.8 2.5s-2.8-1.12-2.8-2.5c0-.735.355-1.396.92-1.853A2.5 2.5 0 0 1 12 7.75m0 5c-.754 0-1.3.488-1.3 1s.547 1 1.3 1c.754 0 1.3-.488 1.3-1s-.546-1-1.3-1m0-3.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2"></svg:path>`,
})
export class RiBilliardsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBilliardsLineIcon],svg[ri-billiards-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2m0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16m0 2a6 6 0 1 1 0 12a6 6 0 0 1 0-12m0 1.75a2.5 2.5 0 0 0-1.88 4.147c-.565.457-.92 1.118-.92 1.853c0 1.38 1.254 2.5 2.8 2.5s2.8-1.12 2.8-2.5c0-.735-.355-1.396-.92-1.852A2.5 2.5 0 0 0 12 7.75m0 5c.754 0 1.3.488 1.3 1s-.546 1-1.3 1s-1.3-.488-1.3-1s.547-1 1.3-1m0-3.5a1 1 0 1 1 0 2a1 1 0 0 1 0-2"></svg:path>`,
})
export class RiBilliardsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBitCoinFillIcon],svg[ri-bit-coin-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m-1-6v2h2v-2h1a2.5 2.5 0 0 0 2-4a2.5 2.5 0 0 0-2-4h-1v-2h-2v2h-3v8zm-1-3h4a.5.5 0 0 1 0 1h-4zm0-3h4a.5.5 0 0 1 0 1h-4z"></svg:path>`,
})
export class RiBitCoinFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBitCoinLineIcon],svg[ri-bit-coin-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.005 22.003c-5.523 0-10-4.477-10-10s4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10m0-2a8 8 0 1 0 0-16a8 8 0 0 0 0 16m-1-4h-3v-8h3v-2h2v2h1a2.5 2.5 0 0 1 2 4a2.5 2.5 0 0 1-2 4h-1v2h-2zm-1-3v1h4a.5.5 0 0 0 0-1zm0-3v1h4a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class RiBitCoinLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBlazeFillIcon],svg[ri-blaze-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 9q1.5 1.59 1.5 4c0 3.466-3.7 4.276-5.5 9q-1-.862-1-2.5c0-3.482 5-5.29 5-10.5m-4-4q1.8 1.858 1.8 4c0 4.951-6.045 5.692-4.8 13Q9 20.26 9 17c0-3.325 5.5-6 5.5-12M10 1q2 2.5 2 4.5c0 6.25-8.5 8.222-4 16.5c-2.616-.58-4.5-3-4.5-6C3.5 9.5 10 8.5 10 1"></svg:path>`,
})
export class RiBlazeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBlazeLineIcon],svg[ri-blaze-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 9q1 1.59 1 4c0 3-3.5 4-5 9q-1-.862-1-2.5c0-3.482 5-5.29 5-10.5m-4.5-4a8.3 8.3 0 0 1 1 4c0 5-6 6-4 13Q9 20.26 9 17c0-3.325 5.5-6 5.5-12M10 1q1 2 1 4.5c0 6-9 7.5-3 16.5c-2.5-.5-4.5-3-4.5-6C3.5 9.5 10 8.5 10 1"></svg:path>`,
})
export class RiBlazeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBlenderFillIcon],svg[ri-blender-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.79 15.714c-.144-.455-.24-1.039-.245-1.339c-.006-.299.06-.797.06-.797l-4.509 3.69c-.787.636-1.846.635-2.344-.004c-.491-.628-.24-1.62.54-2.217l8.293-6.364l-4.628.006c-.785-.003-1.298-.532-1.15-1.17c.143-.626.869-1.121 1.624-1.122l9.146-.01l-2.995-2.439c-.466-.382-.407-.989.118-1.355c.518-.363 1.31-.364 1.782-.002l7.204 5.531l-.002.001a7.4 7.4 0 0 1 1.775 1.958a6.82 6.82 0 0 1 1.021 4.13a6.7 6.7 0 0 1-.287 1.479a7.1 7.1 0 0 1-1.526 2.647A7.9 7.9 0 0 1 19 20.263a8.6 8.6 0 0 1-3.505.74a8.6 8.6 0 0 1-3.508-.728a7.9 7.9 0 0 1-2.67-1.918a7.1 7.1 0 0 1-1.527-2.643m7.703 1.815c1.408-.003 2.708-.54 3.637-1.486c.454-.462.787-.992.993-1.558c.201-.555.28-1.143.229-1.736a4.1 4.1 0 0 0-.5-1.634a4.5 4.5 0 0 0-1.104-1.31a5.14 5.14 0 0 0-3.257-1.127a5.15 5.15 0 0 0-3.255 1.136c-.46.377-.834.822-1.105 1.314a4.1 4.1 0 0 0-.27 3.373a4.3 4.3 0 0 0 .994 1.554c.929.945 2.23 1.477 3.638 1.474m-2.018-6.625a3.28 3.28 0 0 1 2.12-.759c.815 0 1.564.288 2.12.759c.566.479.942 1.155.985 1.92c.043.79-.274 1.521-.83 2.064a3.25 3.25 0 0 1-2.275.899a3.25 3.25 0 0 1-2.277-.899c-.556-.543-.872-1.275-.828-2.062c.043-.768.418-1.443.985-1.922m0 0c-.567.479-.942 1.155-.985 1.922c-.044.787.272 1.52.829 2.062a3.25 3.25 0 0 0 2.276.899a3.25 3.25 0 0 0 2.276-.899c.555-.543.872-1.275.83-2.063c-.044-.766-.42-1.442-.986-1.921a3.28 3.28 0 0 0-2.12-.759a3.28 3.28 0 0 0-2.12.759m-5.686 4.81c-.143-.455-.239-1.039-.244-1.339c-.006-.299.06-.797.06-.797l-4.509 3.69c-.787.636-1.846.635-2.344-.004c-.491-.628-.24-1.62.54-2.217l8.293-6.364l-4.628.006c-.785-.003-1.298-.532-1.15-1.17c.143-.626.869-1.121 1.624-1.122l9.146-.01l-2.995-2.439c-.466-.382-.407-.989.118-1.355c.518-.363 1.31-.364 1.782-.002l7.204 5.531l-.002.001a7.4 7.4 0 0 1 1.775 1.958a6.82 6.82 0 0 1 1.021 4.13a6.7 6.7 0 0 1-.287 1.479a7.1 7.1 0 0 1-1.526 2.647A7.9 7.9 0 0 1 19 20.263a8.6 8.6 0 0 1-3.505.74a8.6 8.6 0 0 1-3.508-.728a7.9 7.9 0 0 1-2.67-1.918a7.1 7.1 0 0 1-1.527-2.643m7.704 1.815c1.408-.003 2.708-.54 3.637-1.486c.454-.462.787-.992.993-1.558c.201-.555.28-1.143.229-1.736a4.1 4.1 0 0 0-.5-1.634a4.5 4.5 0 0 0-1.104-1.31a5.14 5.14 0 0 0-3.257-1.127a5.15 5.15 0 0 0-3.255 1.136c-.46.377-.834.822-1.105 1.314a4.1 4.1 0 0 0-.27 3.373a4.3 4.3 0 0 0 .994 1.554c.929.945 2.23 1.477 3.638 1.474"></svg:path>`,
})
export class RiBlenderFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBlenderLineIcon],svg[ri-blender-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.122 2.217a1 1 0 1 0-1.244 1.566L15.297 6.5H4.5a1 1 0 1 0 0 2h5.472L.878 15.717a1 1 0 0 0 1.244 1.566l5.423-4.303q-.045.379-.045.77c0 4.108 3.691 7.25 8 7.25s8-3.142 8-7.25c0-2.247-1.124-4.227-2.835-5.539zM11.565 9.79C12.61 8.992 13.983 8.5 15.5 8.5c1.52 0 2.895.494 3.942 1.295c1.284.98 2.058 2.403 2.058 3.955c0 2.796-2.577 5.25-6 5.25s-6-2.454-6-5.25c0-1.48.704-2.842 1.882-3.816zm2.913 4.303c-.277-.26-.399-.566-.381-.882c.032-.565.624-1.21 1.498-1.21c.873 0 1.465.644 1.498 1.209c.018.33-.108.633-.378.887c-.285.27-.697.44-1.12.44a1.66 1.66 0 0 1-1.117-.444M15.595 10c-1.746 0-3.394 1.295-3.495 3.1c-.108 1.945 1.625 3.436 3.495 3.436c1.876 0 3.602-1.477 3.495-3.438C18.988 11.294 17.34 10 15.595 10"></svg:path>`,
})
export class RiBlenderLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBloggerFillIcon],svg[ri-blogger-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.822 9.729H18.73a1.113 1.113 0 0 1-1.093-1.094A5.636 5.636 0 0 0 12 3H8.636A5.636 5.636 0 0 0 3 8.635v6.73A5.636 5.636 0 0 0 8.636 21h6.729A5.636 5.636 0 0 0 21 15.364v-4.458a1.15 1.15 0 0 0-1.178-1.177M8.552 7.542h4.037c.589 0 1.093.504 1.093 1.093S13.178 9.73 12.59 9.73H8.55a1.113 1.113 0 0 1-1.093-1.094c0-.589.505-1.093 1.093-1.093m6.897 8.916H8.636a1.113 1.113 0 0 1-1.094-1.094c0-.589.505-1.093 1.094-1.093h6.813c.588 0 1.093.504 1.093 1.093s-.505 1.094-1.093 1.094"></svg:path>`,
})
export class RiBloggerFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBloggerLineIcon],svg[ri-blogger-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 9.009a6.01 6.01 0 0 1 6.01-6.01H12a6.01 6.01 0 0 1 6.01 5.982h.943c1.15 0 2.047.896 2.047 2.047v3.962A6.01 6.01 0 0 1 14.99 21H9.01A6.01 6.01 0 0 1 3 14.99zm6.01-4.01A4.01 4.01 0 0 0 5 9.01v5.981A4.01 4.01 0 0 0 9.01 19h5.98A4.01 4.01 0 0 0 19 14.99V11h-1c-1.076 0-2-.924-2-2c0-2.214-1.786-4-4-4zM8 9a1 1 0 0 1 1-1h3.5a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m1 5a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2z"></svg:path>`,
})
export class RiBloggerLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBlueskyFillIcon],svg[ri-bluesky-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11.388c-.906-1.761-3.372-5.044-5.665-6.662c-2.197-1.55-3.034-1.283-3.583-1.033C2.116 3.978 2 4.955 2 5.528c0 .575.315 4.709.52 5.4c.68 2.28 3.094 3.05 5.32 2.803c-3.26.483-6.157 1.67-2.36 5.898c4.178 4.325 5.726-.927 6.52-3.59c.794 2.663 1.708 7.726 6.444 3.59c3.556-3.59.977-5.415-2.283-5.898c2.225.247 4.64-.523 5.319-2.803c.205-.69.52-4.825.52-5.399c0-.575-.116-1.55-.752-1.838c-.549-.248-1.386-.517-3.583 1.033c-2.293 1.621-4.76 4.904-5.665 6.664"></svg:path>`,
})
export class RiBlueskyFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBlueskyLineIcon],svg[ri-bluesky-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.907 3.44c.709.12 1.533.501 2.576 1.247C9.28 5.97 10.769 7.739 12 9.564c1.231-1.825 2.72-3.593 4.517-4.877c1.043-.746 1.867-1.127 2.576-1.248c.767-.13 1.29.065 1.615.2C21.717 4.06 22 5.225 22 6.215c0 .201-.086 1.302-.185 2.36c-.052.546-.11 1.108-.166 1.577c-.053.428-.115.88-.19 1.133a4.33 4.33 0 0 1-1.951 2.517c.937.707 1.277 1.856.928 2.984c-.597 1.924-2.737 4.397-4.835 4.618c-1.773.186-2.935-1.325-3.601-2.76c-.666 1.435-1.828 2.946-3.6 2.76c-2.099-.22-4.24-2.694-4.836-4.618c-.35-1.128-.01-2.277.928-2.984a4.33 4.33 0 0 1-1.95-2.517c-.076-.253-.138-.705-.19-1.133a61 61 0 0 1-.167-1.577C2.085 7.517 2 6.416 2 6.215c0-.99.283-2.155 1.292-2.576c.326-.135.847-.33 1.615-.2M4.05 6.916c.064.818.18 2.108.288 2.992c.032.268.055.545.122.807c.397 1.34 1.929 2.082 3.686 1.887a1 1 0 0 1 .257 1.983c-.756.112-3.315.357-2.928 1.607c.357 1.151 1.848 3.087 3.134 3.222c.928.097 1.5-1.394 1.766-2.045c.275-.674.488-1.38.668-1.982a1 1 0 0 1 1.916 0c.18.602.393 1.308.668 1.982c.266.651.838 2.142 1.766 2.045c1.286-.135 2.777-2.07 3.134-3.222c.387-1.25-2.172-1.495-2.928-1.607a1 1 0 0 1 .257-1.983c1.757.195 3.289-.547 3.686-1.887c.069-.266.089-.536.122-.807a80 80 0 0 0 .288-2.992c.037-.468.247-1.637-.522-1.506c-.286.049-.823.241-1.749.903c-1.943 1.389-3.705 3.513-4.789 5.64a1 1 0 0 1-1.782 0c-1.084-2.127-2.846-4.251-4.789-5.64c-.926-.662-1.463-.854-1.749-.903c-.784-.134-.559 1.034-.522 1.506"></svg:path>`,
})
export class RiBlueskyLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBluetoothConnectFillIcon],svg[ri-bluetooth-connect-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.311 12l4.343 4.343L12.998 22h-2v-6.686l-4.364 4.364l-1.415-1.415l5.779-5.778v-.97L5.219 5.737l1.415-1.415l4.364 4.364V2h2l5.656 5.657zm-1.313 1.515v5.657l2.828-2.829zm0-3.03l2.828-2.828l-2.828-2.829zM19.5 13.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m-13 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class RiBluetoothConnectFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBluetoothConnectLineIcon],svg[ri-bluetooth-connect-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.311 12l4.343 4.343L12.998 22h-2v-6.686l-4.364 4.364l-1.415-1.415l5.779-5.778v-.97L5.219 5.737l1.415-1.415l4.364 4.364V2h2l5.656 5.657zm-1.313 1.515v5.657l2.828-2.829zm0-3.03l2.828-2.828l-2.828-2.829zM19.5 13.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m-13 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class RiBluetoothConnectLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBluetoothFillIcon],svg[ri-bluetooth-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.312 12l4.343 4.343L12.998 22h-2v-6.686l-4.364 4.364l-1.414-1.415l5.778-5.778v-.97L5.22 5.737l1.414-1.415l4.364 4.364V2h2l5.657 5.657zm-1.314 1.515v5.657l2.828-2.829zm0-3.03l2.828-2.828l-2.828-2.829z"></svg:path>`,
})
export class RiBluetoothFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBluetoothLineIcon],svg[ri-bluetooth-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14.312 12l4.343 4.343L12.998 22h-2v-6.686l-4.364 4.364l-1.414-1.415l5.778-5.778v-.97L5.22 5.737l1.414-1.415l4.364 4.364V2h2l5.657 5.657zm-1.314 1.515v5.657l2.828-2.829zm0-3.03l2.828-2.828l-2.828-2.829z"></svg:path>`,
})
export class RiBluetoothLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBlurOffFillIcon],svg[ri-blur-off-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.432 6.843L1.394 2.804L2.808 1.39l19.799 19.8l-1.415 1.413l-3.038-3.038A9 9 0 0 1 5.432 6.843m2.811-2.817L12 .269l6.364 6.364a9 9 0 0 1 2.05 9.564z"></svg:path>`,
})
export class RiBlurOffFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBlurOffLineIcon],svg[ri-blur-off-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.154 19.565A9 9 0 0 1 5.432 6.843L1.394 2.804L2.808 1.39l19.799 19.8l-1.415 1.413zM6.848 8.258a7 7 0 0 0 9.89 9.891zm13.566 7.939l-1.598-1.599a7 7 0 0 0-1.866-6.55L12 3.097L9.658 5.44L8.243 4.026L12 .269l6.364 6.364a9 9 0 0 1 2.05 9.564"></svg:path>`,
})
export class RiBlurOffLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBnbFillIcon],svg[ri-bnb-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.167 4.367L12 1l5.833 3.367l-2.144 1.244L12 3.488L8.312 5.61zm11.666 4.246l-2.144-1.244L12 9.492L8.312 7.37L6.167 8.613V11.1l3.689 2.123v4.246L12 18.714l2.145-1.244v-4.246l3.688-2.123zm0 6.734v-2.488l-2.144 1.244v2.487zm1.523.879l-3.689 2.123v2.487L21.5 17.47v-6.734l-2.145 1.244zM17.21 6.49l2.145 1.244v2.487L21.5 8.977V6.49l-2.145-1.244zM9.856 19.25v2.487L12 22.981l2.145-1.244v-2.488L12 20.493zm-3.689-3.903l2.145 1.243v-2.487l-2.145-1.244zM9.856 6.49L12 7.734l2.145-1.244L12 5.246zM4.644 7.734L6.79 6.49L4.644 5.246L2.5 6.49v2.487l2.144 1.244zm0 4.246L2.5 10.736v6.733l5.833 3.367V18.35l-3.689-2.123z"></svg:path>`,
})
export class RiBnbFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBnbLineIcon],svg[ri-bnb-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 20.689l-2.01-1.163l-.002 2.31L12 23l2.011-1.165l-.002-2.309zm4.007-2.32l.003 2.31L21.5 17.5v-6.354l-2 1.151v4.05zm3.493-8.38l2-1.151V6.5l-1.996-1.156L17.508 6.5L19.5 7.653zm-3.988-4.645l1.996-1.155L12 1L6.492 4.189l1.996 1.156L12 3.31zM6.492 6.5L4.496 5.345L2.5 6.5v2.338l2 1.152V7.653zM2.5 11.146l2 1.152v4.049l3.492 2.022l-.003 2.31L2.5 17.5zm15-2.34l-1.988-1.15L12 9.689L8.488 7.656L6.5 8.806v2.335l3.498 2.015l-.004 4.06L12 18.378l2.006-1.161L14 13.155l3.499-2.014zM7.995 16.06l.002-1.748L6.5 13.45v1.745zm2.488-9.56L12 7.378l1.516-.878L12 5.622zm5.52 7.81l1.497-.861v1.745l-1.495.866z"></svg:path>`,
})
export class RiBnbLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBodyScanFillIcon],svg[ri-body-scan-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 16v4h4v2H2v-6zm18 0v6h-6v-2h4v-4zM7.5 7a4.5 4.5 0 0 0 9 0h2a6.5 6.5 0 0 1-3.499 5.767L15 19H9v-6.232A6.5 6.5 0 0 1 5.5 7zM12 5a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5M8 2v2l-4-.001V8H2V2zm14 0v6h-2V4h-4V2z"></svg:path>`,
})
export class RiBodyScanFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBodyScanLineIcon],svg[ri-body-scan-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 16v4h4v2H2v-6zm18 0v6h-6v-2h4v-4zM7.5 7a4.5 4.5 0 0 0 3.5 4.389V17h2l.001-5.612A4.5 4.5 0 0 0 16.5 7h2a6.5 6.5 0 0 1-3.499 5.767L15 19H9v-6.232A6.5 6.5 0 0 1 5.5 7zM12 5a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5M8 2v2l-4-.001V8H2V2zm14 0v6h-2V4h-4V2z"></svg:path>`,
})
export class RiBodyScanLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBoldIcon],svg[ri-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 11h4.5a2.5 2.5 0 0 0 0-5H8zm10 4.5a4.5 4.5 0 0 1-4.5 4.5H6V4h6.5a4.5 4.5 0 0 1 3.256 7.606A4.5 4.5 0 0 1 18 15.5M8 13v5h5.5a2.5 2.5 0 0 0 0-5z"></svg:path>`,
})
export class RiBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBook2FillIcon],svg[ri-book-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 18H6a1 1 0 1 0 0 2h15v2H6a3 3 0 0 1-3-3V4a2 2 0 0 1 2-2h16zm-5-9V7H8v2z"></svg:path>`,
})
export class RiBook2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBook2LineIcon],svg[ri-book-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 18H6a1 1 0 1 0 0 2h15v2H6a3 3 0 0 1-3-3V4a2 2 0 0 1 2-2h16zM5 16.05q.243-.05.5-.05H19V4H5zM16 9H8V7h8z"></svg:path>`,
})
export class RiBook2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBook3FillIcon],svg[ri-book-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4H7a2 2 0 1 0 0 4h14v13a1 1 0 0 1-1 1H7a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h13a1 1 0 0 1 1 1zm-1 3H7a1 1 0 0 1 0-2h13z"></svg:path>`,
})
export class RiBook3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBook3LineIcon],svg[ri-book-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 4H7a2 2 0 1 0 0 4h14v13a1 1 0 0 1-1 1H7a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h13a1 1 0 0 1 1 1zM5 18a2 2 0 0 0 2 2h12V10H7a4 4 0 0 1-2-.535zM20 7H7a1 1 0 0 1 0-2h13z"></svg:path>`,
})
export class RiBook3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBookFillIcon],svg[ri-book-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 22H6.5A3.5 3.5 0 0 1 3 18.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1m-1-2v-3H6.5a1.5 1.5 0 0 0 0 3z"></svg:path>`,
})
export class RiBookFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBookLineIcon],svg[ri-book-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 18.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5A3.5 3.5 0 0 1 3 18.5M19 20v-3H6.5a1.5 1.5 0 0 0 0 3zM5 15.337A3.5 3.5 0 0 1 6.5 15H19V4H6a1 1 0 0 0-1 1z"></svg:path>`,
})
export class RiBookLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBookMarkedFillIcon],svg[ri-book-marked-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 22H6.5A3.5 3.5 0 0 1 3 18.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1m-1-2v-3H6.5a1.5 1.5 0 0 0 0 3zM10 4v8l3.5-2l3.5 2V4z"></svg:path>`,
})
export class RiBookMarkedFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBookMarkedLineIcon],svg[ri-book-marked-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 18.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5A3.5 3.5 0 0 1 3 18.5M19 20v-3H6.5a1.5 1.5 0 0 0 0 3zM10 4H6a1 1 0 0 0-1 1v10.337A3.5 3.5 0 0 1 6.5 15H19V4h-2v8l-3.5-2l-3.5 2z"></svg:path>`,
})
export class RiBookMarkedLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBookOpenFillIcon],svg[ri-book-open-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 21h-8V6a3 3 0 0 1 3-3h5a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1m-10 0H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a3 3 0 0 1 3 3zm0 0h2v2h-2z"></svg:path>`,
})
export class RiBookOpenFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBookOpenLineIcon],svg[ri-book-open-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 21v2h-2v-2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6a4 4 0 0 1 3 1.354A4 4 0 0 1 15 3h6a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1zm7-2V5h-5a2 2 0 0 0-2 2v12zm-9 0V7a2 2 0 0 0-2-2H4v14z"></svg:path>`,
})
export class RiBookOpenLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBookReadFillIcon],svg[ri-book-read-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007zM12 5v14h8V5zm1 2h6v2h-6zm0 3h6v2h-6z"></svg:path>`,
})
export class RiBookReadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBookReadLineIcon],svg[ri-book-read-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007zM11 5H4v14h7zm2 0v14h7V5zm1 2h5v2h-5zm0 3h5v2h-5z"></svg:path>`,
})
export class RiBookReadLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBookShelfFillIcon],svg[ri-book-shelf-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9.303l2.021 9.51a1 1 0 0 0 1.186.77l2.935-.623a1 1 0 0 0 .77-1.186l-2.91-13.694a1 1 0 0 0-1.187-.77L15 5.302V5a1 1 0 0 0-1-1H9a1 1 0 0 0-1-1zm5 3h4v8H9zm4 10v3H9v-3zm-6 1v2H5v-2zm11.77 1.814l-.416-1.956l.978-.208l.416 1.956z"></svg:path>`,
})
export class RiBookShelfFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBookShelfLineIcon],svg[ri-book-shelf-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-4.703L16 20a1 1 0 0 0 1.186.77l3.912-.832a1 1 0 0 0 .77-1.186l-2.91-13.694a1 1 0 0 0-1.186-.77l-2.78.59A1 1 0 0 0 14 4h-4a1 1 0 0 0-1-1zm6 3h3v8h-3zm0 13v-3h3v3zM8 5v10H5V5zm0 12v2H5v-2zm9.332-.35l1.956-.416l.416 1.956l-1.956.416zm-.416-1.957l-1.663-7.825l1.956-.416l1.664 7.826z"></svg:path>`,
})
export class RiBookShelfLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBookletFillIcon],svg[ri-booklet-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2v20H4v-4H2v-2h2v-3H2v-2h2V8H2V6h2V2zm12.005 0C21.107 2 22 2.898 22 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H10V2z"></svg:path>`,
})
export class RiBookletFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBookletLineIcon],svg[ri-booklet-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.005 2C21.107 2 22 2.898 22 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H4v-4H2v-2h2v-3H2v-2h2V8H2V6h2V2zM8 4H6v16h2zm12 0H10v16h10z"></svg:path>`,
})
export class RiBookletLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBookmark2FillIcon],svg[ri-bookmark-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1m3 7v2h8V9z"></svg:path>`,
})
export class RiBookmark2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBookmark2LineIcon],svg[ri-bookmark-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1m13 2H6v15.432l6-3.761l6 3.761zM8 9h8v2H8z"></svg:path>`,
})
export class RiBookmark2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBookmark3FillIcon],svg[ri-bookmark-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16a1 1 0 0 1 1 1v19.276a.5.5 0 0 1-.704.457L12 19.03l-8.296 3.702A.5.5 0 0 1 3 22.276V3a1 1 0 0 1 1-1m8 11.5l2.939 1.545l-.561-3.272l2.377-2.318l-3.285-.478L12 6l-1.47 2.977l-3.285.478l2.377 2.318l-.56 3.272z"></svg:path>`,
})
export class RiBookmark3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBookmark3LineIcon],svg[ri-bookmark-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16a1 1 0 0 1 1 1v19.276a.5.5 0 0 1-.704.457L12 19.03l-8.296 3.702A.5.5 0 0 1 3 22.276V3a1 1 0 0 1 1-1m15 17.965V4H5v15.965l7-3.124zM12 13.5l-2.939 1.545l.561-3.272l-2.377-2.318l3.286-.478L12 6l1.47 2.977l3.285.478l-2.377 2.318l.56 3.272z"></svg:path>`,
})
export class RiBookmark3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBookmarkFillIcon],svg[ri-bookmark-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1"></svg:path>`,
})
export class RiBookmarkFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBookmarkLineIcon],svg[ri-bookmark-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2h14a1 1 0 0 1 1 1v19.143a.5.5 0 0 1-.766.424L12 18.03l-7.234 4.536A.5.5 0 0 1 4 22.143V3a1 1 0 0 1 1-1m13 2H6v15.432l6-3.761l6 3.761z"></svg:path>`,
})
export class RiBookmarkLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBootstrapFillIcon],svg[ri-bootstrap-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.423 3.038c-1.284 0-2.233 1.124-2.19 2.342c.04 1.171-.013 2.688-.395 3.924c-.383 1.24-1.03 2.026-2.088 2.127v1.138c1.058.101 1.705.887 2.088 2.127c.382 1.237.435 2.753.394 3.924c-.042 1.218.907 2.342 2.192 2.342h13.154c1.284 0 2.234-1.124 2.192-2.342c-.041-1.171.012-2.687.393-3.924c.384-1.24 1.03-2.026 2.087-2.127v-1.138c-1.058-.101-1.703-.887-2.087-2.127c-.381-1.236-.434-2.753-.393-3.924c.042-1.218-.908-2.342-2.192-2.342zm10.581 11.033c0 1.678-1.251 2.696-3.328 2.696H9.14a.38.38 0 0 1-.382-.381V7.614a.38.38 0 0 1 .382-.38h3.515c1.732 0 2.869.937 2.869 2.378c0 1.01-.765 1.916-1.739 2.074v.053c1.326.145 2.22 1.064 2.22 2.332M12.29 8.442h-2.016v2.848h1.698c1.313 0 2.036-.529 2.036-1.474c0-.885-.622-1.374-1.718-1.374m-2.016 3.977v3.139h2.09c1.367 0 2.09-.549 2.09-1.58c0-1.03-.743-1.559-2.178-1.559z"></svg:path>`,
})
export class RiBootstrapFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBootstrapLineIcon],svg[ri-bootstrap-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 11v2s2 0 2 4v1a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-1c0-4 2-4 2-4v-2s-2 0-2-4V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v1c0 4-2 4-2 4m19.674 1q-.045.042-.088.086C19.578 13.093 19 14.692 19 17v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1c0-2.308-.578-3.907-1.586-4.914L3.326 12q.045-.042.088-.086C4.422 10.907 5 9.308 5 7V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1c0 2.308.578 3.907 1.586 4.914zM8.5 7v10h5a3 3 0 0 0 1.615-5.529A3 3 0 0 0 12.5 7zm2 4V9h2a1 1 0 1 1 0 2zm0 2h3a1 1 0 1 1 0 2h-3z"></svg:path>`,
})
export class RiBootstrapLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBowlFillIcon],svg[ri-bowl-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1.5a1 1 0 0 0-2 0v1.018c.004.044.005.063-.207.275l-.02.02C5.506 3.079 5 3.583 5 4.5v1a1 1 0 0 0 2 0V4.482c-.004-.044-.005-.063.207-.275l.02-.02C7.494 3.921 8 3.417 8 2.5zM2 9a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v1c0 4.1-2.468 7.625-6 9.168V20a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-.832A10 10 0 0 1 2 10zM18 .5a1 1 0 0 1 1 1v1c0 .916-.506 1.42-.773 1.687l-.02.02c-.212.212-.21.231-.208.275L18 4.5v1a1 1 0 1 1-2 0v-1c0-.916.506-1.42.773-1.687l.02-.02c.212-.212.21-.231.208-.275L17 2.5v-1a1 1 0 0 1 1-1m-4.5 1a1 1 0 1 0-2 0v1.018c.004.044.005.063-.207.275l-.02.02c-.267.266-.773.77-.773 1.687v1a1 1 0 1 0 2 0V4.482c-.004-.044-.005-.063.207-.275l.02-.02c.267-.266.773-.77.773-1.687z"></svg:path>`,
})
export class RiBowlFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBowlLineIcon],svg[ri-bowl-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1.5a1 1 0 0 0-2 0v1.018c.004.044.005.063-.207.275l-.02.02C5.506 3.079 5 3.583 5 4.5v1a1 1 0 0 0 2 0V4.482c-.004-.044-.005-.063.207-.275l.02-.02C7.494 3.921 8 3.417 8 2.5zm11 0a1 1 0 1 0-2 0v1.018c.004.044.005.063-.207.275l-.02.02c-.267.266-.773.77-.773 1.687v1a1 1 0 1 0 2 0V4.482c-.004-.044-.005-.063.207-.275l.02-.02c.267-.266.773-.77.773-1.687zm-6.5-1a1 1 0 0 1 1 1v1c0 .916-.506 1.42-.773 1.687l-.02.02c-.212.212-.21.231-.208.275l.001.018v1a1 1 0 1 1-2 0v-1c0-.916.506-1.42.773-1.687l.02-.02c.212-.212.21-.231.208-.275L11.5 2.5v-1a1 1 0 0 1 1-1M4 10h16a8 8 0 1 1-16 0M3 8a1 1 0 0 0-1 1v1c0 4.1 2.468 7.625 6 9.168V20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-.832c3.532-1.543 6-5.067 6-9.168V9a1 1 0 0 0-1-1z"></svg:path>`,
})
export class RiBowlLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBox1FillIcon],svg[ri-box-1-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1l9.5 5.5v11L13 22.421V11.423l-9.502-5.5zM2.5 7.656V17.5l8.5 4.921v-9.844z"></svg:path>`,
})
export class RiBox1FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBox1LineIcon],svg[ri-box-1-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1l9.5 5.5v11L12 23l-9.5-5.5v-11zM5.494 7.078L13 11.423v8.687l6.5-3.763V7.653L12 3.311zM4.5 8.813v7.534L11 20.11v-7.533z"></svg:path>`,
})
export class RiBox1LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBox2FillIcon],svg[ri-box-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1l9.5 5.5v11L12 23l-9.5-5.5v-11zM4.5 7.658v8.689l7.5 4.342V12z"></svg:path>`,
})
export class RiBox2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBox2LineIcon],svg[ri-box-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1l9.5 5.5v11L12 23l-9.5-5.5v-11zM4.5 7.653v.005L12 12v8.689l7.5-4.342V7.653L12 3.311z"></svg:path>`,
})
export class RiBox2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBox3FillIcon],svg[ri-box-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.502 5.922L12 1L3.498 5.922L12 10.845zM2.5 7.656V17.5l8.5 4.921v-9.844zM13 22.42l8.5-4.921V7.656l-8.5 4.92z"></svg:path>`,
})
export class RiBox3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBox3LineIcon],svg[ri-box-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 1l9.5 5.5v11L12 23l-9.5-5.5v-11zM5.494 7.078L12 10.844l6.506-3.766L12 3.31zM4.5 8.813v7.534L11 20.11v-7.533zM13 20.11l6.5-3.763V8.813L13 12.576z"></svg:path>`,
})
export class RiBox3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBoxingFillIcon],svg[ri-boxing-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.501 11l.144.007a1.5 1.5 0 0 1 1.35 1.348L11 12.5l-.007.145a1.5 1.5 0 0 1-1.349 1.348L9.501 14h-3.5v2h3.5c1.7 0 3.117-1.212 3.434-2.819l.03-.18L19.001 13c.711 0 1.388-.149 2-.416V17a3 3 0 0 1-2 2.829V21a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-1.17a3 3 0 0 1-2-2.83v-4a2 2 0 0 1 2-2zm12.5-3.5V8l-.005.176a3 3 0 0 1-2.819 2.819l-.176.005h-6.337A3.5 3.5 0 0 0 9.71 9.006L9.5 9H5a4 4 0 0 0-2.001.536L3.001 6a4 4 0 0 1 4-4h9.5a5.5 5.5 0 0 1 5.5 5.5"></svg:path>`,
})
export class RiBoxingFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBoxingLineIcon],svg[ri-boxing-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 2A5.5 5.5 0 0 1 22 7.5V10a3 3 0 0 1-1 2.235V17a3 3 0 0 1-2 2.829V21a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-1.17A3 3 0 0 1 3 17V6a4 4 0 0 1 4-4zm-7 9H5v6a1 1 0 0 0 .883.993L6 18h12a1 1 0 0 0 .993-.883L19 17v-4h-6.036A3.5 3.5 0 0 1 9.5 16H6v-2h3.5a1.5 1.5 0 0 0 1.493-1.355L11 12.5a1.5 1.5 0 0 0-1.356-1.493zm7-7H7a2 2 0 0 0-1.995 1.85L5 6v3h4.5a3.5 3.5 0 0 1 3.163 2H19a1 1 0 0 0 .993-.883L20 10V7.5a3.5 3.5 0 0 0-3.308-3.495z"></svg:path>`,
})
export class RiBoxingLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBracesFillIcon],svg[ri-braces-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18v-3.7a1.5 1.5 0 0 0-1.5-1.5H2v-1.6h.5A1.5 1.5 0 0 0 4 9.7V6a3 3 0 0 1 3-3h1v2H7a1 1 0 0 0-1 1v4.1A2 2 0 0 1 4.626 12A2 2 0 0 1 6 13.9V18a1 1 0 0 0 1 1h1v2H7a3 3 0 0 1-3-3m16-3.7V18a3 3 0 0 1-3 3h-1v-2h1a1 1 0 0 0 1-1v-4.1a2 2 0 0 1 1.374-1.9A2 2 0 0 1 18 10.1V6a1 1 0 0 0-1-1h-1V3h1a3 3 0 0 1 3 3v3.7a1.5 1.5 0 0 0 1.5 1.5h.5v1.6h-.5a1.5 1.5 0 0 0-1.5 1.5"></svg:path>`,
})
export class RiBracesFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBracesLineIcon],svg[ri-braces-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18v-3.7a1.5 1.5 0 0 0-1.5-1.5H2v-1.6h.5A1.5 1.5 0 0 0 4 9.7V6a3 3 0 0 1 3-3h1v2H7a1 1 0 0 0-1 1v4.1A2 2 0 0 1 4.626 12A2 2 0 0 1 6 13.9V18a1 1 0 0 0 1 1h1v2H7a3 3 0 0 1-3-3m16-3.7V18a3 3 0 0 1-3 3h-1v-2h1a1 1 0 0 0 1-1v-4.1a2 2 0 0 1 1.374-1.9A2 2 0 0 1 18 10.1V6a1 1 0 0 0-1-1h-1V3h1a3 3 0 0 1 3 3v3.7a1.5 1.5 0 0 0 1.5 1.5h.5v1.6h-.5a1.5 1.5 0 0 0-1.5 1.5"></svg:path>`,
})
export class RiBracesLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBracketsFillIcon],svg[ri-brackets-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3v2H6v14h3v2H4V3zm6 0h5v18h-5v-2h3V5h-3z"></svg:path>`,
})
export class RiBracketsFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBracketsLineIcon],svg[ri-brackets-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3v2H6v14h3v2H4V3zm6 0h5v18h-5v-2h3V5h-3z"></svg:path>`,
})
export class RiBracketsLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBrain2FillIcon],svg[ri-brain-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.5 2a3.5 3.5 0 0 0-3.46 4.03A3.5 3.5 0 0 0 3.05 12a3.5 3.5 0 0 0 .963 5.67Q4 17.832 4 18a4 4 0 0 0 7 2.646V3.05A3.5 3.5 0 0 0 8.5 2M13 3.05v17.596a4 4 0 0 0 6.986-2.977A3.5 3.5 0 0 0 20.95 12a3.5 3.5 0 0 0-1.99-5.97q.04-.26.041-.53a3.5 3.5 0 0 0-6-2.45"></svg:path>`,
})
export class RiBrain2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBrain2LineIcon],svg[ri-brain-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 6q.001.357.115.67a1 1 0 0 1-1 1.333L6 8a2 2 0 0 0-1.491 3.333a1 1 0 0 1 0 1.334a2 2 0 0 0 .864 3.233a1 1 0 0 1 .67 1.135a2.5 2.5 0 1 0 4.932.824q.009-.063.025-.123V6a2 2 0 1 0-4 0m6 11.736q.016.06.025.122a2.5 2.5 0 1 0 4.932-.823a1 1 0 0 1 .67-1.135a2 2 0 0 0 .864-3.233a1 1 0 0 1 0-1.334a2 2 0 0 0-1.607-3.33a1 1 0 0 1-.999-1.333q.113-.313.115-.67a2 2 0 1 0-4 0zM9 2a4 4 0 0 1 3 1.354a4 4 0 0 1 6.998 2.771A4.002 4.002 0 0 1 21.465 12A3.997 3.997 0 0 1 20 17.465v.035a4.5 4.5 0 0 1-8 2.828A4.5 4.5 0 0 1 4 17.5v-.035A3.997 3.997 0 0 1 2.535 12a4.002 4.002 0 0 1 2.467-5.874L5 6a4 4 0 0 1 4-4"></svg:path>`,
})
export class RiBrain2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBrainFillIcon],svg[ri-brain-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2.535A4 4 0 0 0 5 6v1.774c-.851.342-1.549.874-2.059 1.575C2.292 10.242 2 11.335 2 12.5c0 1.561.795 2.936 2 3.742V17.5a4.5 4.5 0 0 0 7 3.742V17.5c0-1.333-.33-2.185-.86-2.76c-.543-.587-1.424-1.024-2.804-1.254l.328-1.972c1.302.216 2.442.623 3.336 1.313zm2 0v10.292c.894-.69 2.034-1.097 3.336-1.313l.328 1.972c-1.38.23-2.261.667-2.804 1.255c-.53.574-.86 1.426-.86 2.759v3.742a4.5 4.5 0 0 0 7-3.742v-1.258c1.205-.806 2-2.18 2-3.742c0-1.165-.292-2.258-.941-3.15c-.51-.702-1.208-1.234-2.059-1.576V6a4 4 0 0 0-6-3.465"></svg:path>`,
})
export class RiBrainFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBrainLineIcon],svg[ri-brain-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4a2 2 0 0 1 2 2v6.827c-.894-.69-2.034-1.097-3.336-1.313l-.328 1.972c1.38.23 2.261.667 2.804 1.255c.53.574.86 1.426.86 2.759a2.5 2.5 0 0 1-5 0v-.35c.43.143.876.26 1.336.336l.328-1.972c-.743-.124-1.489-.4-2.235-.754A2.5 2.5 0 0 1 4 12.5c0-.835.208-1.492.559-1.974c.345-.476.883-.856 1.684-1.056L7 9.28V6a2 2 0 0 1 2-2m3-.646A4 4 0 0 0 5 6v1.774c-.851.342-1.549.874-2.059 1.575C2.292 10.242 2 11.335 2 12.5a4.49 4.49 0 0 0 2 3.742V17.5a4.5 4.5 0 0 0 8 2.829a4.5 4.5 0 0 0 8-2.829v-1.258a4.49 4.49 0 0 0 2-3.742c0-1.165-.292-2.258-.941-3.15c-.51-.702-1.208-1.234-2.059-1.576V6a4 4 0 0 0-7-2.646m6 13.795v.351a2.5 2.5 0 0 1-5 0c0-1.333.33-2.185.86-2.76c.543-.587 1.424-1.024 2.804-1.254l-.328-1.972c-1.302.216-2.442.623-3.336 1.313V6a2 2 0 1 1 4 0v3.28l.758.19c.8.2 1.338.58 1.683 1.056c.351.482.559 1.14.559 1.974c0 .999-.582 1.857-1.43 2.26c-.745.354-1.492.63-2.234.754l.328 1.972A9 9 0 0 0 18 17.149"></svg:path>`,
})
export class RiBrainLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBreadFillIcon],svg[ri-bread-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 7a4 4 0 0 1 4-4h2a4 4 0 0 0-2 7.465V19a3 3 0 0 0 3 3H6a3 3 0 0 1-3-3v-8.535A4 4 0 0 1 1 7m7 15v-2a1 1 0 0 1-1-1V9.122l-.667-.236A2.001 2.001 0 0 1 7 5V3h12a4 4 0 0 1 2 7.465V19a3 3 0 0 1-3 3z"></svg:path>`,
})
export class RiBreadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBreadLineIcon],svg[ri-bread-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 3a4 4 0 0 0-2 7.465V19a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-8.535A4 4 0 0 0 19 3zm2 17a1 1 0 0 1-1-1V9.122l-.667-.236A2.001 2.001 0 0 1 6 5h13a2 2 0 0 1 .667 3.886L19 9.122V19a1 1 0 0 1-1 1z"></svg:path>`,
})
export class RiBreadLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBriefcase2FillIcon],svg[ri-briefcase-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm10 8v-3h-2v3H9v-3H7v3H4v6h16v-6zM9 3v2h6V3z"></svg:path>`,
})
export class RiBriefcase2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBriefcase2LineIcon],svg[ri-briefcase-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm13 8H4v6h16zm0-6H4v4h3V9h2v2h6V9h2v2h3zM9 3v2h6V3z"></svg:path>`,
})
export class RiBriefcase2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBriefcase3FillIcon],svg[ri-briefcase-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm10 2v5h3V7zm-2 0H9v5h6zM7 7H4v5h3zm2-4v2h6V3z"></svg:path>`,
})
export class RiBriefcase3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBriefcase3LineIcon],svg[ri-briefcase-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm8 2H9v12h6zM7 7H4v12h3zm10 0v12h3V7zM9 3v2h6V3z"></svg:path>`,
})
export class RiBriefcase3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBriefcase4FillIcon],svg[ri-briefcase-4-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 13v3h6v-3h7v7a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7zm2-2h2v3h-2zM7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v5h-7V9H9v2H2V6a1 1 0 0 1 1-1zm2-2v2h6V3z"></svg:path>`,
})
export class RiBriefcase4FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBriefcase4LineIcon],svg[ri-briefcase-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm2 8H4v6h16v-6h-5v3H9zm11-6H4v4h5V9h6v2h5zm-9 4v3h2v-3zM9 3v2h6V3z"></svg:path>`,
})
export class RiBriefcase4LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBriefcase5FillIcon],svg[ri-briefcase-5-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm-1 8V7H4v6zm2-6v6h3v-2h2v2h3V7zm10 6h2V7h-2zM9 3v2h6V3z"></svg:path>`,
})
export class RiBriefcase5FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBriefcase5LineIcon],svg[ri-briefcase-5-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 10h-3v1h-2v-1H8v4h8zM8 7v6h3v-1h2v1h3V7zm-2 6V7H4v6zm12 0h2V7h-2zM6 15H4v4h2zm12 0v4h2v-4zM9 3v2h6V3z"></svg:path>`,
})
export class RiBriefcase5LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBriefcaseFillIcon],svg[ri-briefcase-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM4 15v4h16v-4zm7-4v2h2v-2zM9 3v2h6V3z"></svg:path>`,
})
export class RiBriefcaseFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBriefcaseLineIcon],svg[ri-briefcase-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM4 16v3h16v-3zm0-2h16V7H4zM9 3v2h6V3zm2 8h2v2h-2z"></svg:path>`,
})
export class RiBriefcaseLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBringForwardIcon],svg[ri-bring-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3a1 1 0 0 1 1 1v5h5a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1v-5H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm-1 2H5v8h8z"></svg:path>`,
})
export class RiBringForwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBringToFrontIcon],svg[ri-bring-to-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 3a1 1 0 0 1 1 1v2h5a1 1 0 0 1 1 1v5h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-2H7a1 1 0 0 1-1-1v-5H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm5 5H8v8h8z"></svg:path>`,
})
export class RiBringToFrontIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBroadcastFillIcon],svg[ri-broadcast-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.929 2.929l1.414 1.414A7.98 7.98 0 0 0 4 10c0 2.21.895 4.21 2.343 5.657L4.93 17.07A9.97 9.97 0 0 1 2 10a9.97 9.97 0 0 1 2.929-7.071m14.142 0A9.97 9.97 0 0 1 22 10a9.97 9.97 0 0 1-2.929 7.071l-1.414-1.414A7.98 7.98 0 0 0 20 10c0-2.21-.895-4.21-2.343-5.657zM7.757 5.757l1.415 1.415A4 4 0 0 0 8 10c0 1.105.448 2.105 1.172 2.829l-1.415 1.414A5.98 5.98 0 0 1 6 10c0-1.657.672-3.157 1.757-4.243m8.486 0A5.98 5.98 0 0 1 18 10a5.98 5.98 0 0 1-1.757 4.243l-1.415-1.415A4 4 0 0 0 16 10a4 4 0 0 0-1.172-2.828zM12 12a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0 2c.58 0 1.077.413 1.184.983L14.5 22h-5l1.316-7.017c.107-.57.604-.983 1.184-.983"></svg:path>`,
})
export class RiBroadcastFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBroadcastLineIcon],svg[ri-broadcast-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.929 2.929l1.414 1.414A7.98 7.98 0 0 0 4 10c0 2.21.895 4.21 2.343 5.657L4.93 17.07A9.97 9.97 0 0 1 2 10a9.97 9.97 0 0 1 2.929-7.071m14.142 0A9.97 9.97 0 0 1 22 10a9.97 9.97 0 0 1-2.929 7.071l-1.414-1.414A7.98 7.98 0 0 0 20 10c0-2.21-.895-4.21-2.343-5.657zM7.757 5.757l1.415 1.415A4 4 0 0 0 8 10c0 1.105.448 2.105 1.172 2.829l-1.415 1.414A5.98 5.98 0 0 1 6 10c0-1.657.672-3.157 1.757-4.243m8.486 0A5.98 5.98 0 0 1 18 10a5.98 5.98 0 0 1-1.757 4.243l-1.415-1.415A4 4 0 0 0 16 10a4 4 0 0 0-1.172-2.828zM12 12a2 2 0 1 1 0-4a2 2 0 0 1 0 4m-1 2h2v8h-2z"></svg:path>`,
})
export class RiBroadcastLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBrush2FillIcon],svg[ri-brush-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.536 15.947l2.121-2.122l-3.182-3.182l3.536-3.535l-2.122-2.122l-3.535 3.536l-3.182-3.182L8.05 7.46zM13.354 5.693l2.828-2.828a1 1 0 0 1 1.414 0l3.536 3.536a1 1 0 0 1 0 1.414l-2.829 2.828l2.475 2.475a1 1 0 0 1 0 1.414L13 22.311a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414l7.779-7.778a1 1 0 0 1 1.414 0z"></svg:path>`,
})
export class RiBrush2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBrush2LineIcon],svg[ri-brush-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.536 15.947l2.121-2.122l-3.182-3.182l3.536-3.535l-2.122-2.122l-3.535 3.536l-3.182-3.182L8.05 7.46zM15.12 17.36L6.637 8.875l-2.828 2.829l8.485 8.485zM13.355 5.693l2.828-2.828a1 1 0 0 1 1.414 0l3.536 3.536a1 1 0 0 1 0 1.414l-2.829 2.828l2.475 2.475a1 1 0 0 1 0 1.414L13 22.311a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414l7.779-7.778a1 1 0 0 1 1.414 0z"></svg:path>`,
})
export class RiBrush2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBrush3FillIcon],svg[ri-brush-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 10.997v-3h-6v-4h-4v4H4v3zm1 2v8a1 1 0 0 1-1 1H10v-6H8v6H4a1 1 0 0 1-1-1v-8H2v-6a1 1 0 0 1 1-1h5v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3h5a1 1 0 0 1 1 1v6z"></svg:path>`,
})
export class RiBrush3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBrush3LineIcon],svg[ri-brush-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 19.997v-5h2v5h9v-7H5v7zm-4-9h16v-3h-6v-4h-4v4H4zm-1 10v-8H2v-6a1 1 0 0 1 1-1h5v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3h5a1 1 0 0 1 1 1v6h-1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1"></svg:path>`,
})
export class RiBrush3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBrush4FillIcon],svg[ri-brush-4-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15.997H4v2h16zm-17-2v-10a1 1 0 0 1 1-1h3v8.272h2V2.997h11a1 1 0 0 1 1 1v10h1v5a1 1 0 0 1-1 1h-8v3h-2v-3H3a1 1 0 0 1-1-1v-5z"></svg:path>`,
})
export class RiBrush4FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBrush4LineIcon],svg[ri-brush-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 4.997v6.272H7V4.997H5v9h14v-9zm11 11H4v2h16zm-17-2v-10a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v10h1v5a1 1 0 0 1-1 1h-8v3h-2v-3H3a1 1 0 0 1-1-1v-5z"></svg:path>`,
})
export class RiBrush4LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBrushAiFillIcon],svg[ri-brush-ai-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.713 7.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319A4.37 4.37 0 0 0 3.276.931L3.53.32a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251m13.515-4.757l-4.94 3.842c-3.946-.974-7.73 1.333-8.788 5.284c-.102.38-.134.765-.167 1.169c-.115 1.394-.247 3.005-3.333 5.33c2.5 1.5 7 3.002 10.502 3.002a7.505 7.505 0 0 0 7.283-9.291l3.84-4.938a1 1 0 0 0-.082-1.321L19.55 2.454a1 1 0 0 0-1.321-.083m-1.333 5.914a8 8 0 0 0-.194-.194l-1.124-1.124l3.182-2.475l1.746 1.746L18.03 9.42z"></svg:path>`,
})
export class RiBrushAiFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBrushAiLineIcon],svg[ri-brush-ai-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.713 7.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319A4.37 4.37 0 0 0 3.276.931L3.53.32a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251m10.601 2.405l.143.142a5.5 5.5 0 0 1 1.356 5.245a5.505 5.505 0 0 1-5.311 4.078c-2.036 0-4.714-.625-6.973-1.514c1.205-1.414 1.645-2.809 1.8-4.679c.037-.451.06-.63.103-.79c.793-2.962 3.585-4.61 6.492-3.831c.93.25 1.742.724 2.39 1.349m2.914-7.162l-4.94 3.842c-3.946-.974-7.73 1.333-8.788 5.284c-.102.38-.134.765-.167 1.169c-.115 1.394-.247 3.005-3.333 5.33c2.5 1.5 7 3.002 10.502 3.002a7.505 7.505 0 0 0 7.283-9.291l3.84-4.938a1 1 0 0 0-.082-1.321L19.55 2.454a1 1 0 0 0-1.321-.083m-1.333 5.914a8 8 0 0 0-.194-.194l-1.124-1.124l3.182-2.475l1.746 1.746L18.03 9.42z"></svg:path>`,
})
export class RiBrushAiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBrushFillIcon],svg[ri-brush-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.289 6.213l4.939-3.842a1 1 0 0 1 1.32.083l2.995 2.994a1 1 0 0 1 .082 1.32l-3.84 4.939a7.505 7.505 0 0 1-7.283 9.292C8 20.999 3.5 19.497 1 17.997c3.98-3 3.047-4.81 3.5-6.5c1.058-3.95 4.842-6.258 8.789-5.284M16.7 8.092q.098.095.194.193L18.03 9.42l2.475-3.182l-1.746-1.746l-3.182 2.475z"></svg:path>`,
})
export class RiBrushFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBrushLineIcon],svg[ri-brush-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.457 9.675l-.143-.142a5.5 5.5 0 0 0-2.39-1.349c-2.907-.779-5.699.869-6.492 3.83c-.043.16-.066.34-.104.791c-.154 1.87-.594 3.265-1.8 4.68c2.26.888 4.938 1.514 6.974 1.514a5.505 5.505 0 0 0 5.31-4.079a5.5 5.5 0 0 0-1.356-5.245m-2.168-3.462l4.939-3.842a1 1 0 0 1 1.32.083l2.995 2.994a1 1 0 0 1 .082 1.32l-3.84 4.939a7.505 7.505 0 0 1-7.283 9.292C8 20.999 3.5 19.497 1 17.997c3.98-3 3.047-4.81 3.5-6.5c1.058-3.95 4.842-6.258 8.789-5.284M16.7 8.092q.098.095.194.193L18.03 9.42l2.475-3.182l-1.746-1.746l-3.182 2.475z"></svg:path>`,
})
export class RiBrushLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBtcFillIcon],svg[ri-btc-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m4.706-11.436c-.174 1.053-.725 1.567-1.471 1.749c.992.555 1.47 1.398.959 2.877c-.635 1.854-2.057 2.022-3.94 1.663l-.486 1.957l-1.094-.271l.485-1.957q-.186-.049-.373-.091c-.172-.04-.35-.081-.526-.132l-.485 1.957l-1.092-.27l.485-1.958l-2.176-.592l.54-1.384s.822.226.81.212c.304.074.453-.14.514-.288l.776-3.137l.566-2.23c.024-.241-.052-.557-.497-.677c.03-.017-.8-.198-.8-.198l.323-1.312l2.243.556l.475-1.917l1.13.28l-.475 1.917c.291.064.574.14.866.215l.474-1.917l1.1.272l-.488 1.967c1.387.51 2.386 1.263 2.157 2.709m-5.1.39c.657.198 2.605.783 2.933-.52c.306-1.24-1.382-1.618-2.166-1.794q-.14-.03-.235-.055l-.587 2.353zm-1.014 3.82l.095.029c.81.24 3.106.923 3.418-.37c.32-1.246-1.744-1.731-2.669-1.949q-.153-.035-.258-.062z"></svg:path>`,
})
export class RiBtcFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBtcLineIcon],svg[ri-btc-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12a8 8 0 1 0-16 0a8 8 0 0 0 16 0m2 0c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-5.294-1.436c-.174 1.053-.725 1.567-1.471 1.749c.992.555 1.47 1.398.959 2.877c-.635 1.854-2.057 2.022-3.94 1.663l-.486 1.957l-1.094-.271l.485-1.957c-.298-.08-.602-.138-.899-.223l-.485 1.957l-1.092-.27l.485-1.958l-2.176-.592l.54-1.384s.822.226.81.212c.304.074.453-.14.514-.288l.776-3.137l.566-2.23c.024-.241-.052-.557-.497-.677c.03-.017-.8-.198-.8-.198l.323-1.312l2.243.556l.475-1.917l1.13.28l-.475 1.917c.291.064.574.14.866.215l.474-1.917l1.1.272l-.488 1.967c1.387.51 2.386 1.263 2.157 2.709m-5.1.39c.657.198 2.605.783 2.933-.52c.306-1.24-1.382-1.618-2.166-1.794q-.14-.03-.235-.055l-.587 2.353zm-1.014 3.82l.095.029c.81.24 3.106.923 3.418-.37c.32-1.246-1.744-1.731-2.669-1.949q-.153-.035-.258-.062z"></svg:path>`,
})
export class RiBtcLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBubbleChartFillIcon],svg[ri-bubble-chart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 16a3 3 0 1 1 0 6a3 3 0 0 1 0-6M6 12a4 4 0 1 1 0 8a4 4 0 0 1 0-8m8.5-10a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11"></svg:path>`,
})
export class RiBubbleChartFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBubbleChartLineIcon],svg[ri-bubble-chart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 16a3 3 0 1 1 0 6a3 3 0 0 1 0-6M6 12a4 4 0 1 1 0 8a4 4 0 0 1 0-8m10 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2M6 14a2 2 0 1 0 0 4a2 2 0 0 0 0-4m8.5-12a5.5 5.5 0 1 1 0 11a5.5 5.5 0 0 1 0-11m0 2a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7"></svg:path>`,
})
export class RiBubbleChartLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBug2FillIcon],svg[ri-bug-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.07 16A7 7 0 0 1 5 15v-1H3v-2h2v-1q0-.51.07-1H3V8h2.674a7.03 7.03 0 0 1 2.84-3.072l-1.05-1.05L8.88 2.465l1.683 1.684a7 7 0 0 1 2.876 0l1.683-1.684l1.414 1.415l-1.05 1.05A7.03 7.03 0 0 1 18.327 8H21v2h-2.07q.07.49.07 1v1h2v2h-2v1q0 .51-.07 1H21v2h-2.674a7 7 0 0 1-12.652 0H3v-2zM9 10v2h6v-2zm0 4v2h6v-2z"></svg:path>`,
})
export class RiBug2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBug2LineIcon],svg[ri-bug-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.562 4.148a7 7 0 0 1 2.876 0l1.683-1.684l1.414 1.415l-1.05 1.05A7.03 7.03 0 0 1 18.327 8H21v2h-2.07q.07.49.07 1v1h2v2h-2v1q0 .51-.07 1H21v2h-2.674a7 7 0 0 1-12.652 0H3v-2h2.07A7 7 0 0 1 5 15v-1H3v-2h2v-1q0-.51.07-1H3V8h2.674a7.03 7.03 0 0 1 2.84-3.072l-1.05-1.05L8.88 2.465zM12 6a5 5 0 0 0-5 5v4a5 5 0 0 0 10 0v-4a5 5 0 0 0-5-5m-3 8h6v2H9zm0-4h6v2H9z"></svg:path>`,
})
export class RiBug2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBugFillIcon],svg[ri-bug-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.056 8.3a7 7 0 0 1 .199-.3h11.49q.103.148.199.3l2.02-1.166l1 1.732l-2.213 1.278c.162.59.249 1.213.249 1.856v1h3v2h-3a7 7 0 0 1-.536 2.69l2.5 1.444l-1 1.732l-2.526-1.458A7 7 0 0 1 13 21.929V14h-2v7.93a7 7 0 0 1-4.438-2.522l-2.526 1.458l-1-1.732l2.5-1.443A7 7 0 0 1 5 15H2v-2h3v-1c0-.643.087-1.265.249-1.856L3.036 8.866l1-1.732zM8 6a4 4 0 1 1 8 0z"></svg:path>`,
})
export class RiBugFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBugLineIcon],svg[ri-bug-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 19.9a5 5 0 0 0 4-4.9v-3c0-.701-.144-1.378-.415-2h-9.17A5 5 0 0 0 7 12v3a5 5 0 0 0 4 4.9V14h2zm-7.464-2.21A7 7 0 0 1 5 15H2v-2h3v-1c0-.643.087-1.265.249-1.856L3.036 8.866l1-1.732L6.056 8.3a7 7 0 0 1 .199-.3h11.49q.103.148.199.3l2.02-1.166l1 1.732l-2.213 1.278c.162.59.249 1.213.249 1.856v1h3v2h-3a7 7 0 0 1-.536 2.69l2.5 1.444l-1 1.732l-2.526-1.458A6.99 6.99 0 0 1 12 22a6.99 6.99 0 0 1-5.438-2.592l-2.526 1.458l-1-1.732zM8 6a4 4 0 1 1 8 0z"></svg:path>`,
})
export class RiBugLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBuilding2FillIcon],svg[ri-building-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 19h2V6l6.394 2.74a1 1 0 0 1 .606.92V19h2v2H1v-2h2V5.65a1 1 0 0 1 .594-.914l7.703-3.423a.5.5 0 0 1 .703.456z"></svg:path>`,
})
export class RiBuilding2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBuilding2LineIcon],svg[ri-building-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V5.7a1 1 0 0 1 .658-.94l9.671-3.516a.5.5 0 0 1 .671.47v4.953l6.316 2.105a1 1 0 0 1 .684.949V19h2v2H1v-2zm2 0h7V3.855L5 6.401zm14 0v-8.558l-5-1.667V19z"></svg:path>`,
})
export class RiBuilding2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBuilding3FillIcon],svg[ri-building-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 10.111V1l11 6v14H3V7z"></svg:path>`,
})
export class RiBuilding3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBuilding3LineIcon],svg[ri-building-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 10.111V1l11 6v14H3V7zm2-5.742v8.82l-7-3.111V19h14V8.187z"></svg:path>`,
})
export class RiBuilding3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBuilding4FillIcon],svg[ri-building-4-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 20h2v2H1v-2h2V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zM8 11v2h3v-2zm0-4v2h3V7zm0 8v2h3v-2zm5 0v2h3v-2zm0-4v2h3v-2zm0-4v2h3V7z"></svg:path>`,
})
export class RiBuilding4FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBuilding4LineIcon],svg[ri-building-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 20h2v2H1v-2h2V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zm-2 0V4H5v16zM8 11h3v2H8zm0-4h3v2H8zm0 8h3v2H8zm5 0h3v2h-3zm0-4h3v2h-3zm0-4h3v2h-3z"></svg:path>`,
})
export class RiBuilding4LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBuildingFillIcon],svg[ri-building-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 19h2v2H1v-2h2V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v15h2V9h3a1 1 0 0 1 1 1zM7 11v2h4v-2zm0-4v2h4V7z"></svg:path>`,
})
export class RiBuildingFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBuildingLineIcon],svg[ri-building-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 19h2v2H1v-2h2V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v15h4v-8h-2V9h3a1 1 0 0 1 1 1zM5 5v14h8V5zm2 6h4v2H7zm0-4h4v2H7z"></svg:path>`,
})
export class RiBuildingLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBus2FillIcon],svg[ri-bus-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 20H7v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9H2V8h1V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3h1v4h-1v9a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM5 5v7h14V5zm2.5 13a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m9 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path>`,
})
export class RiBus2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBus2LineIcon],svg[ri-bus-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 20H7v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-9H2V8h1V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3h1v4h-1v9a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM5 5v6h14V5zm14 8H5v5h14zM7.5 17a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m9 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class RiBus2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBusFillIcon],svg[ri-bus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 20H7v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1H3v-8H2V8h1V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3h1v4h-1v8h-1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zM5 5v9h14V5zm0 11v2h4v-2zm10 0v2h4v-2z"></svg:path>`,
})
export class RiBusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBusLineIcon],svg[ri-bus-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 20H7v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1H3v-8H2V8h1V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3h1v4h-1v8h-1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm2-8V5H5v7zm0 2H5v4h14zM6 15h4v2H6zm8 0h4v2h-4z"></svg:path>`,
})
export class RiBusLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBusWifiFillIcon],svg[ri-bus-wifi-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3v2H5v9h14v-2h2v8h-1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H7v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1H3v-8H2V8h1V5a2 2 0 0 1 2-2zM9 16H5v2h4zm10 0h-4v2h4zm-.5-15a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9m0 5.167c-.491 0-.94.177-1.289.47l-.125.115L18.5 8.167l1.413-1.415a2 2 0 0 0-1.413-.585m0-2.667a4.65 4.65 0 0 0-3.128 1.203l-.173.165l.944.942a3.32 3.32 0 0 1 2.357-.977a3.32 3.32 0 0 1 2.201.83l.156.147l.943-.943A4.65 4.65 0 0 0 18.5 3.5"></svg:path>`,
})
export class RiBusWifiFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riBusWifiLineIcon],svg[ri-bus-wifi-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 3v2H5v7h16v8h-1v1a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H7v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1H3v-8H2V8h1V5a2 2 0 0 1 2-2zm7 11H5v4h14zm-9 1v2H6v-2zm8 0v2h-4v-2zm.5-14a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9m0 5.167c-.491 0-.94.177-1.289.47l-.125.115L18.5 8.167l1.413-1.415a2 2 0 0 0-1.413-.585m0-2.667a4.65 4.65 0 0 0-3.128 1.203l-.173.165l.944.942a3.32 3.32 0 0 1 2.357-.977a3.32 3.32 0 0 1 2.201.83l.156.147l.943-.943A4.65 4.65 0 0 0 18.5 3.5"></svg:path>`,
})
export class RiBusWifiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCactusFillIcon],svg[ri-cactus-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.998 2a4 4 0 0 1 4 4v9h1c.55 0 1-.45 1-1V8a1 1 0 0 1 2 0v6a3 3 0 0 1-3 3h-1v3h2v2h-12v-2h2v-6h-1a3 3 0 0 1-3-3V9a1 1 0 1 1 2 0v2c0 .55.45 1 1 1h1V6a4 4 0 0 1 4-4"></svg:path>`,
})
export class RiCactusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCactusLineIcon],svg[ri-cactus-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.998 2a4 4 0 0 1 4 4v9h1c.55 0 1-.45 1-1V8a1 1 0 0 1 2 0v6c0 1.66-1.34 3-3 3h-1v3h2v2h-12v-2h2v-6h-1a3 3 0 0 1-3-3V9a1 1 0 1 1 2 0v2c0 .55.45 1 1 1h1V6a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2v14h4V6a2 2 0 0 0-2-2"></svg:path>`,
})
export class RiCactusLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCake2FillIcon],svg[ri-cake-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6v3.999h3V6h2v3.999h3V6h2v3.999L19 10a3 3 0 0 1 2.995 2.824L22 13v1c0 1.014-.377 1.94-.999 2.645L21 21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4.36a4 4 0 0 1-.972-2.182l-.022-.253L2 14v-1a3 3 0 0 1 2.824-2.995L5 10l1-.001V6zm11 6H5a1 1 0 0 0-.993.883L4 13v.971l.003.147A2 2 0 0 0 6 16a2 2 0 0 0 1.98-1.7l.015-.153l.005-.176c.036-1.248 1.827-1.293 1.989-.134l.01.134l.004.147a2 2 0 0 0 3.992.031l.012-.282c.124-1.156 1.862-1.156 1.986 0l.013.282a2 2 0 0 0 3.988 0L20 14v-1a1 1 0 0 0-.883-.993zM7 1c1.32.871 1.663 2.088 1.449 2.888a1.5 1.5 0 0 1-2.898-.776C5.85 2.002 7 2.5 7 1m5 0c1.32.871 1.663 2.088 1.449 2.888a1.5 1.5 0 1 1-2.898-.776C10.85 2.002 12 2.5 12 1m5 0c1.32.871 1.663 2.088 1.449 2.888a1.5 1.5 0 1 1-2.898-.776C15.85 2.002 17 2.5 17 1"></svg:path>`,
})
export class RiCake2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCake2LineIcon],svg[ri-cake-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 6v3.999h3V6h2v3.999h3V6h2v3.999L19 10a3 3 0 0 1 2.995 2.824L22 13v1c0 1.014-.377 1.94-.999 2.645L21 21a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-4.36a4 4 0 0 1-.972-2.182l-.022-.253L2 14v-1a3 3 0 0 1 2.824-2.995L5 10l1-.001V6zm1.002 10.641l-.054.063a4 4 0 0 1-2.514 1.273l-.23.018L6 18q-.519-.002-1-.126V20h14v-2.126a4 4 0 0 1-3.744-.963l-.15-.15l-.106-.117l-.107.118a4 4 0 0 1-2.451 1.214l-.242.02L12 18a3.98 3.98 0 0 1-2.797-1.144l-.15-.157zM19 12H5a1 1 0 0 0-.993.883L4 13v.971l.003.147A2 2 0 0 0 6 16a2 2 0 0 0 1.98-1.7l.015-.153l.005-.176c.036-1.248 1.827-1.293 1.989-.134l.01.134l.004.147a2 2 0 0 0 3.992.031l.012-.282c.124-1.156 1.862-1.156 1.986 0l.013.282a2 2 0 0 0 3.988 0L20 14v-1a1 1 0 0 0-.883-.993zM7 1c1.32.871 1.663 2.088 1.449 2.888a1.5 1.5 0 0 1-2.898-.776C5.85 2.002 7 2.5 7 1m5 0c1.32.871 1.663 2.088 1.449 2.888a1.5 1.5 0 1 1-2.898-.776C10.85 2.002 12 2.5 12 1m5 0c1.32.871 1.663 2.088 1.449 2.888a1.5 1.5 0 1 1-2.898-.776C15.85 2.002 17 2.5 17 1"></svg:path>`,
})
export class RiCake2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCake3FillIcon],svg[ri-cake-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 2a3.5 3.5 0 0 1 3.437 4.163l-.015.066a4.502 4.502 0 0 1 .303 8.428l-1.086 6.507a1 1 0 0 1-.986.836H6.847a1 1 0 0 1-.986-.836l-1.029-6.17a3 3 0 0 1-.829-5.824L4 9a6 6 0 0 1 8.575-5.42A3.5 3.5 0 0 1 15.5 2M11 15H9v5h2zm4 0h-2v5h2zm2.5-2a2.5 2.5 0 1 0-.956-4.81l-.175.081a2 2 0 0 1-2.663-.804l-.07-.137A4 4 0 0 0 10 5C7.858 5 6.109 6.684 6.005 8.767L6 8.964l.003.17a2 2 0 0 1-1.186 1.863l-.15.059A1.001 1.001 0 0 0 5 13z"></svg:path>`,
})
export class RiCake3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCake3LineIcon],svg[ri-cake-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 2a3.5 3.5 0 0 1 3.437 4.163l-.015.066a4.502 4.502 0 0 1 .303 8.428l-1.086 6.507a1 1 0 0 1-.986.836H6.847a1 1 0 0 1-.986-.836l-1.029-6.17a3 3 0 0 1-.829-5.824L4 9a6 6 0 0 1 8.574-5.421A3.5 3.5 0 0 1 15.5 2M9 15H6.86l.834 5H9zm4 0h-2v5h2zm4.139 0H15v5h1.305zM10 5C7.858 5 6.109 6.684 6.005 8.767L6 8.964l.003.17a2 2 0 0 1-1.186 1.863l-.15.059A1.001 1.001 0 0 0 5 13h12.5a2.5 2.5 0 1 0-.956-4.81l-.175.081a2 2 0 0 1-2.663-.804l-.07-.137A4 4 0 0 0 10 5m5.5-1a1.5 1.5 0 0 0-1.287.729a6 6 0 0 1 1.24 1.764a4.5 4.5 0 0 1 1.446-.453A1.5 1.5 0 0 0 15.5 4"></svg:path>`,
})
export class RiCake3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCakeFillIcon],svg[ri-cake-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7v4h7a1 1 0 0 1 1 1v8h2v2H1v-2h2v-8a1 1 0 0 1 1-1h7V7zm.83-6.598A3 3 0 0 1 12.732 4.5L11 5.5a3 3 0 0 1 1.098-4.098z"></svg:path>`,
})
export class RiCakeFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCakeLineIcon],svg[ri-cake-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 7v4h7a1 1 0 0 1 1 1v8h2v2H1v-2h2v-8a1 1 0 0 1 1-1h7V7zm6 6H5v7h14zM13.83.402A3 3 0 0 1 12.732 4.5L11 5.5a3 3 0 0 1 1.098-4.098z"></svg:path>`,
})
export class RiCakeLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCalculatorFillIcon],svg[ri-calculator-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m3 10v2h2v-2zm0 4v2h2v-2zm4-4v2h2v-2zm0 4v2h2v-2zm4-4v6h2v-6zM7 6v4h10V6z"></svg:path>`,
})
export class RiCalculatorFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCalculatorLineIcon],svg[ri-calculator-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1m1 2v16h14V4zm2 2h10v4H7zm0 6h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v6h-2z"></svg:path>`,
})
export class RiCalculatorLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCalendar2FillIcon],svg[ri-calendar-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2zM4 9v10h16V9zm2 2h2v2H6zm5 0h2v2h-2zm5 0h2v2h-2z"></svg:path>`,
})
export class RiCalendar2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCalendar2LineIcon],svg[ri-calendar-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1v2h6V1h2v2h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1zm11 10H4v8h16zM8 13v2H6v-2zm5 0v2h-2v-2zm5 0v2h-2v-2zM7 5H4v4h16V5h-3v2h-2V5H9v2H7z"></svg:path>`,
})
export class RiCalendar2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCalendarCheckFillIcon],svg[ri-calendar-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1v2h6V1h2v2h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1zm11 7H4v11h16zm-4.964 2.136l1.414 1.414l-4.95 4.95l-3.536-3.536L9.38 11.55l2.121 2.122z"></svg:path>`,
})
export class RiCalendarCheckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCalendarCheckLineIcon],svg[ri-calendar-check-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1v2h6V1h2v2h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1zm11 9H4v9h16zm-4.964 1.136l1.414 1.414l-4.95 4.95l-3.536-3.536L9.38 12.55l2.121 2.122zM7 5H4v3h16V5h-3v1h-2V5H9v1H7z"></svg:path>`,
})
export class RiCalendarCheckLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCalendarCloseFillIcon],svg[ri-calendar-close-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3V1H7v2H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4V1h-2v2zM4 8h16v11H4zm5.879 1.964l2.12 2.122l2.122-2.122l1.414 1.415l-2.12 2.121l2.12 2.121l-1.414 1.414L12 14.915l-2.122 2.12l-1.414-1.414l2.122-2.121l-2.122-2.121z"></svg:path>`,
})
export class RiCalendarCloseFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCalendarCloseLineIcon],svg[ri-calendar-close-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3V1H7v2H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4V1h-2v2zm-5 7h16v9H4zm0-5h3v1h2V5h6v1h2V5h3v3H4zm5.879 5.964L12 13.086l2.121-2.122l1.415 1.415l-2.122 2.121l2.121 2.121l-1.414 1.414L12 15.915l-2.121 2.12l-1.415-1.414l2.122-2.12l-2.122-2.122z"></svg:path>`,
})
export class RiCalendarCloseLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCalendarEventFillIcon],svg[ri-calendar-event-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2zM4 9v10h16V9zm2 4h5v4H6z"></svg:path>`,
})
export class RiCalendarEventFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCalendarEventLineIcon],svg[ri-calendar-event-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1v2h6V1h2v2h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1zm11 10H4v8h16zm-9 2v4H6v-4zM7 5H4v4h16V5h-3v2h-2V5H9v2H7z"></svg:path>`,
})
export class RiCalendarEventLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCalendarFillIcon],svg[ri-calendar-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 11h20v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm15-8h4a1 1 0 0 1 1 1v5H2V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2z"></svg:path>`,
})
export class RiCalendarFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCalendarLineIcon],svg[ri-calendar-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1v2h6V1h2v2h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1zm11 10H4v8h16zM7 5H4v4h16V5h-3v2h-2V5H9v2H7z"></svg:path>`,
})
export class RiCalendarLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCalendarScheduleFillIcon],svg[ri-calendar-schedule-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 1v2H3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h7.755A8 8 0 0 1 22 9.755V4a1 1 0 0 0-1-1h-4V1h-2v2H9V1zm16 15a6 6 0 1 1-12 0a6 6 0 0 1 12 0m-7-4v4.414l2.293 2.293l1.414-1.414L18 15.586V12z"></svg:path>`,
})
export class RiCalendarScheduleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCalendarScheduleLineIcon],svg[ri-calendar-schedule-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 3V1h2v2h6V1h2v2h4a1 1 0 0 1 1 1v5h-2V5h-3v2h-2V5H9v2H7V5H4v14h6v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm10 9a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-6 4a6 6 0 1 1 12 0a6 6 0 0 1-12 0m5-3v3.414l2.293 2.293l1.414-1.414L18 15.586V13z"></svg:path>`,
})
export class RiCalendarScheduleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCalendarTodoFillIcon],svg[ri-calendar-todo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1h2v2h6V1h2zM4 9v10h16V9zm2 2h2v2H6zm0 4h2v2H6zm4-4h8v2h-8zm0 4h5v2h-5z"></svg:path>`,
})
export class RiCalendarTodoFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCalendarTodoLineIcon],svg[ri-calendar-todo-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 1v2h6V1h2v2h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1zm11 10H4v8h16zM8 14v2H6v-2zm10 0v2h-8v-2zM7 5H4v4h16V5h-3v2h-2V5H9v2H7z"></svg:path>`,
})
export class RiCalendarTodoLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCalendarViewIcon],svg[ri-calendar-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm2 15h16V9H4zm7-6H6v4h5z"></svg:path>`,
})
export class RiCalendarViewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCamera2FillIcon],svg[ri-camera-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007zM12 15a3 3 0 1 1 0-6a3 3 0 0 1 0 6m0 2a5 5 0 1 0 0-10a5 5 0 0 0 0 10m6-12v2h2V5z"></svg:path>`,
})
export class RiCamera2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCamera2LineIcon],svg[ri-camera-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007zM4 5v14h16V5zm8 10a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 2a5 5 0 1 1 0-10a5 5 0 0 1 0 10m5-11h2v2h-2z"></svg:path>`,
})
export class RiCamera2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCamera3FillIcon],svg[ri-camera-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 20zm12 12a5 5 0 1 0 0-10a5 5 0 0 0 0 10M4 7v2h3V7zm0-5h6v2H4z"></svg:path>`,
})
export class RiCamera3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCamera3LineIcon],svg[ri-camera-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6c0-.552.455-1 .992-1h18.016c.548 0 .992.445.992 1v14c0 .552-.455 1-.992 1H2.992A.994.994 0 0 1 2 20zm2 1v12h16V7zm10 9a3 3 0 1 0 0-6a3 3 0 0 0 0 6m0 2a5 5 0 1 1 0-10a5 5 0 0 1 0 10M4 2h6v2H4z"></svg:path>`,
})
export class RiCamera3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCameraAiFillIcon],svg[ri-camera-ai-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M22 20v-9.341A6 6 0 0 1 20 11c-.925 0-1.8-.21-2.583-.583a6 6 0 1 1-2.834-2.834A6 6 0 0 1 14 5c0-.701.12-1.374.341-2H9L7 5H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1m-10-3a4 4 0 1 1 0-8a4 4 0 0 1 0 8"></svg:path>`,
})
export class RiCameraAiFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCameraAiLineIcon],svg[ri-camera-ai-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M9 3h5v2H9.828l-2 2H4v12h16v-8h2v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4zm3 15a5.5 5.5 0 1 1 0-11a5.5 5.5 0 0 1 0 11m0-2a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7"></svg:path>`,
})
export class RiCameraAiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCameraFillIcon],svg[ri-camera-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3h6l2 2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4zm3 16a6 6 0 1 0 0-12a6 6 0 0 0 0 12m0-2a4 4 0 1 1 0-8a4 4 0 0 1 0 8"></svg:path>`,
})
export class RiCameraFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCameraLensAiFillIcon],svg[ri-camera-lens-ai-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.467 8.694l.246-.566a4.36 4.36 0 0 1 2.22-2.25l.759-.339a.53.53 0 0 0 0-.963l-.717-.319a4.37 4.37 0 0 1-2.251-2.326l-.253-.611a.506.506 0 0 0-.942 0l-.253.61a4.37 4.37 0 0 1-2.25 2.327l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.36 4.36 0 0 1 2.219 2.251l.246.566c.18.414.753.414.934 0M14.309 14l-4.482 7.763c.7.155 1.427.237 2.173.237c2.18 0 4.198-.698 5.841-1.883zM2.458 15a10.03 10.03 0 0 0 5.432 6.119L11.423 15zM2 12q0 .507.05 1h7.063l-4.48-7.761A9.96 9.96 0 0 0 2 12M12 2c-2.18 0-4.198.698-5.841 1.883L9.69 10l4.482-7.763A10 10 0 0 0 12 2m10 10q0-.507-.05-1h-7.063l4.48 7.761A9.96 9.96 0 0 0 22 12"></svg:path>`,
})
export class RiCameraLensAiFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCameraLensAiLineIcon],svg[ri-camera-lens-ai-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.467 8.694l.246-.566a4.36 4.36 0 0 1 2.22-2.25l.759-.339a.53.53 0 0 0 0-.963l-.717-.319a4.37 4.37 0 0 1-2.251-2.326l-.253-.611a.506.506 0 0 0-.942 0l-.253.61a4.37 4.37 0 0 1-2.25 2.327l-.718.32a.53.53 0 0 0 0 .962l.76.338a4.36 4.36 0 0 1 2.219 2.251l.246.566c.18.414.753.414.934 0M12 22c5.523 0 10-4.477 10-10q0-.605-.07-1.19l-1.986.235q.056.47.056.955c0 1.458-.39 2.824-1.071 4.001L15.464 10h2.466l-1.154-2H12l3.169-5.488A10 10 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10m0-18l-3.464 6l-2.141-3.708A7.98 7.98 0 0 1 12 4m-2.31 8l1.156-2h2.309l1.155 2l-1.155 2h-2.31zM12 16l-2.142 3.71A8.02 8.02 0 0 1 5.07 16zm0 4l3.464-6l2.141 3.708A7.97 7.97 0 0 1 12 20M5.071 7.999L8.536 14H4.252A8 8 0 0 1 4 12c0-1.458.39-2.824 1.071-4.001"></svg:path>`,
})
export class RiCameraLensAiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCameraLensFillIcon],svg[ri-camera-lens-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.827 21.763L14.31 14l3.532 6.118A9.96 9.96 0 0 1 12 22c-.746 0-1.473-.082-2.173-.237M7.89 21.12A10.03 10.03 0 0 1 2.458 15h8.965zM2.05 13Q2 12.507 2 12c0-2.607.998-4.981 2.632-6.761L9.113 13zm4.109-9.117A9.96 9.96 0 0 1 12 2c.746 0 1.473.082 2.173.237L9.69 10zM16.11 2.88A10.03 10.03 0 0 1 21.542 9h-8.965zM21.95 11q.05.493.05 1a9.96 9.96 0 0 1-2.632 6.761L14.887 11z"></svg:path>`,
})
export class RiCameraLensFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCameraLensLineIcon],svg[ri-camera-lens-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.858 19.71L12 16H5.07a8.02 8.02 0 0 0 4.788 3.71M4.252 14h4.284L5.07 7.999A7.96 7.96 0 0 0 4 12c0 .69.088 1.36.252 2m2.143-7.708L8.535 10L12 4a7.97 7.97 0 0 0-5.605 2.292m7.747-2.002L12 8h6.93a8.02 8.02 0 0 0-4.788-3.71M19.748 10h-4.284l3.465 6.001A7.96 7.96 0 0 0 20 12a8 8 0 0 0-.252-2m-2.143 7.708L15.465 14L12 20a7.97 7.97 0 0 0 5.605-2.292M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10m1.155-12h-2.31l-1.154 2l1.154 2h2.31l1.154-2z"></svg:path>`,
})
export class RiCameraLensLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCameraLineIcon],svg[ri-camera-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.828 5l-2 2H4v12h16V7h-3.828l-2-2zM9 3h6l2 2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4zm3 15a5.5 5.5 0 1 1 0-11a5.5 5.5 0 0 1 0 11m0-2a3.5 3.5 0 1 0 0-7a3.5 3.5 0 0 0 0 7"></svg:path>`,
})
export class RiCameraLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCameraOffFillIcon],svg[ri-camera-off-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.586 21H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h.586L1.394 2.808l1.414-1.415l19.799 19.8l-1.415 1.414zM7.556 8.97a6 6 0 0 0 8.475 8.475l-1.417-1.417a4 4 0 0 1-5.642-5.642zM22 17.786l-4.045-4.045Q18 13.377 18 13a6 6 0 0 0-6.74-5.955L8.107 3.893L9 3h6l2 2h4a1 1 0 0 1 1 1zm-8.49-8.492a4 4 0 0 1 2.197 2.198z"></svg:path>`,
})
export class RiCameraOffFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCameraOffLineIcon],svg[ri-camera-off-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.586 21H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h.586L1.394 2.808l1.414-1.415l19.799 19.8l-1.415 1.414zm-14-14H4v12h13.586l-2.18-2.18A5.5 5.5 0 0 1 7.68 9.094zm3.525 3.525a3.5 3.5 0 0 0 4.865 4.865zM22 17.785l-2-2V7h-3.83l-2-2H9.83l-.308.307l-1.414-1.414L9 3h6l2 2h4a1 1 0 0 1 1 1zM11.262 7.05a5.5 5.5 0 0 1 6.188 6.188L15.112 10.9A3.5 3.5 0 0 0 13.6 9.388z"></svg:path>`,
})
export class RiCameraOffLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCameraSwitchFillIcon],svg[ri-camera-switch-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 3h6l2 2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4zm5.684 15.368l-.895-1.79A4 4 0 0 1 8 13h2.001L7.839 8.677a6 6 0 0 0 6.845 9.69M9.316 7.632l.895 1.79A4 4 0 0 1 16 13h-2.001l2.161 4.323a6 6 0 0 0-6.845-9.69"></svg:path>`,
})
export class RiCameraSwitchFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCameraSwitchLineIcon],svg[ri-camera-switch-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.828 5l-2 2H4v12h16V7h-3.828l-2-2zM9 3h6l2 2h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4zm.64 4.53a5.5 5.5 0 0 1 6.187 8.92L13.75 12.6h1.749l.001-.1a3.5 3.5 0 0 0-4.928-3.196zm4.678 9.96a5.5 5.5 0 0 1-6.18-8.905L10.25 12.5H8.5a3.5 3.5 0 0 0 4.886 3.215z"></svg:path>`,
})
export class RiCameraSwitchLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCandleFillIcon],svg[ri-candle-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.172 9.331a4 4 0 0 1 0-5.656L12 .846l2.828 2.829A4 4 0 0 1 13 10.377V12h5a1 1 0 0 1 1 1v7h2v2H3v-2h2v-7a1 1 0 0 1 1-1h5v-1.623A4 4 0 0 1 9.172 9.33m1.414-4.242a2 2 0 1 0 2.828 0L12 3.675z"></svg:path>`,
})
export class RiCandleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCandleLineIcon],svg[ri-candle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.172 9.331a4 4 0 0 1 0-5.656L12 .846l2.828 2.829A4 4 0 0 1 13 10.377V12h5a1 1 0 0 1 1 1v7h2v2H3v-2h2v-7a1 1 0 0 1 1-1h5v-1.623A4 4 0 0 1 9.172 9.33m1.414-4.242a2 2 0 1 0 2.828 0L12 3.675zM7 14v6h10v-6z"></svg:path>`,
})
export class RiCandleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCapsuleFillIcon],svg[ri-capsule-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.779 4.222a6 6 0 0 1 0 8.485l-2.122 2.12l-4.95 4.951a6 6 0 0 1-8.485-8.485l7.071-7.071a6 6 0 0 1 8.486 0m-4.95 10.606L9.172 9.172l-3.536 3.535a4 4 0 0 0 5.657 5.657z"></svg:path>`,
})
export class RiCapsuleFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCapsuleLineIcon],svg[ri-capsule-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.779 4.222a6 6 0 0 1 0 8.485l-7.071 7.071a6 6 0 0 1-8.486-8.485l7.071-7.071a6 6 0 0 1 8.486 0m-5.657 11.313L8.466 9.878l-2.83 2.83a4 4 0 0 0 5.657 5.656zm4.242-9.899a4 4 0 0 0-5.657 0L9.88 8.464l5.657 5.657l2.827-2.828a4 4 0 0 0 0-5.657"></svg:path>`,
})
export class RiCapsuleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCarFillIcon],svg[ri-car-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 20H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-9l2.513-6.702A2 2 0 0 1 6.386 4h11.228a2 2 0 0 1 1.873 1.298L22 12v9a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zM4.136 12h15.728l-2.25-6H6.386zM6.5 17a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m11 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3"></svg:path>`,
})
export class RiCarFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCarLineIcon],svg[ri-car-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 20H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V11l2.48-5.788A2 2 0 0 1 6.32 4h11.36a2 2 0 0 1 1.838 1.212L22 11v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm1-7H4v5h16zM4.176 11h15.648l-2.143-5H6.32zM6.5 17a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m11 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class RiCarLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCarWashingFillIcon],svg[ri-car-washing-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 21H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-9l2.417-4.029A2 2 0 0 1 6.132 8h11.736a2 2 0 0 1 1.715.971L22 13v9a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zM4.332 13h15.336l-1.8-3H6.132zM6.5 18a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3m11 0a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M5.44 3.44L6.5 2.378l1.06 1.06a1.5 1.5 0 1 1-2.121 0m5.5 0L12 2.378l1.06 1.06a1.5 1.5 0 1 1-2.121 0m5.5 0l1.06-1.061l1.06 1.06a1.5 1.5 0 1 1-2.121 0"></svg:path>`,
})
export class RiCarWashingFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCarWashingLineIcon],svg[ri-car-washing-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 21H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V12l2.417-4.029A2 2 0 0 1 6.132 7h11.736a2 2 0 0 1 1.715.971L22 12v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1zm1-7H4v5h16zM4.332 12h15.336l-1.8-3H6.132zM5.44 3.44L6.5 2.378l1.06 1.06a1.5 1.5 0 1 1-2.121 0m5.5 0L12 2.378l1.06 1.06a1.5 1.5 0 1 1-2.121 0m5.5 0l1.061-1.06l1.06 1.06a1.5 1.5 0 1 1-2.121 0M6.5 18a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m11 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"></svg:path>`,
})
export class RiCarWashingLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCaravanFillIcon],svg[ri-caravan-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.172 3a2 2 0 0 1 1.414.586l4.828 4.828A2 2 0 0 1 21 9.828V17h2v2h-8.126a4.002 4.002 0 0 1-7.748 0H3a1 1 0 0 1-1-1V5a2 2 0 0 1 2-2zM11 16a2 2 0 1 0 0 4a2 2 0 0 0 0-4m3-9H6v6h8zm-2 2v2H8V9z"></svg:path>`,
})
export class RiCaravanFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCaravanLineIcon],svg[ri-caravan-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.172 3a2 2 0 0 1 1.414.586l4.828 4.828A2 2 0 0 1 21 9.828V17h2v2h-8.126a4.002 4.002 0 0 1-7.748 0H3a1 1 0 0 1-1-1V5a2 2 0 0 1 2-2zM11 16a2 2 0 1 0 0 4a2 2 0 0 0 0-4m3.172-11H4v12h3.126a4.002 4.002 0 0 1 7.748 0H19V9.828zM14 7v6H6V7zm-2 2H8v2h4z"></svg:path>`,
})
export class RiCaravanLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCarouselViewIcon],svg[ri-carousel-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3H1v2h2v14H1v2h3a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m3 1a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1zm2 1v14h6V5zm10-1a1 1 0 0 1 1-1h3v2h-2v14h2v2h-3a1 1 0 0 1-1-1z"></svg:path>`,
})
export class RiCarouselViewIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCashFillIcon],svg[ri-cash-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.005 4.003h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-14a1 1 0 0 1 1-1M6.5 6H4v2.5A2.5 2.5 0 0 0 6.5 6m11 0A2.5 2.5 0 0 0 20 8.5V6zM4 15.5V18h2.5A2.5 2.5 0 0 0 4 15.5M17.5 18H20v-2.5a2.5 2.5 0 0 0-2.5 2.5M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8"></svg:path>`,
})
export class RiCashFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCashLineIcon],svg[ri-cash-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8m9.005-11.997h-18a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-14a1 1 0 0 0-1-1m-17 11.643V8.354a3.51 3.51 0 0 0 2.35-2.351h11.291a3.51 3.51 0 0 0 2.359 2.353v7.288a3.51 3.51 0 0 0-2.36 2.359H6.355a3.51 3.51 0 0 0-2.351-2.357"></svg:path>`,
})
export class RiCashLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCastFillIcon],svg[ri-cast-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-6q0-1.021-.153-2H20V5H4v3.153A13 13 0 0 0 2 8V4a1 1 0 0 1 1-1m10 18h-2a9 9 0 0 0-9-9v-2c6.075 0 11 4.925 11 11m-4 0H7a5 5 0 0 0-5-5v-2a7 7 0 0 1 7 7m-4 0H2v-3a3 3 0 0 1 3 3m9.373-4A13.03 13.03 0 0 0 6 8.627V7h12v10z"></svg:path>`,
})
export class RiCastFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCastLineIcon],svg[ri-cast-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-6q0-1.021-.153-2H20V5H4v3.153A13 13 0 0 0 2 8V4a1 1 0 0 1 1-1m10 18h-2a9 9 0 0 0-9-9v-2c6.075 0 11 4.925 11 11m-4 0H7a5 5 0 0 0-5-5v-2a7 7 0 0 1 7 7m-4 0H2v-3a3 3 0 0 1 3 3"></svg:path>`,
})
export class RiCastLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCellphoneFillIcon],svg[ri-cellphone-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2h11a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V0h2zm0 2v5h10V4z"></svg:path>`,
})
export class RiCellphoneFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCellphoneLineIcon],svg[ri-cellphone-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 2h11a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V0h2zm0 7h10V4H7zm0 2v9h10v-9z"></svg:path>`,
})
export class RiCellphoneLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCelsiusFillIcon],svg[ri-celsius-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 10a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7m0-2a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M22 10h-2a4 4 0 0 0-8 0v5a4 4 0 0 0 8 0h2a6 6 0 0 1-12 0v-5a6 6 0 0 1 12 0"></svg:path>`,
})
export class RiCelsiusFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCelsiusLineIcon],svg[ri-celsius-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 10a3.5 3.5 0 1 1 0-7a3.5 3.5 0 0 1 0 7m0-2a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3M22 10h-2a4 4 0 0 0-8 0v5a4 4 0 0 0 8 0h2a6 6 0 0 1-12 0v-5a6 6 0 0 1 12 0"></svg:path>`,
})
export class RiCelsiusLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCentosFillIcon],svg[ri-centos-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 13.06l4.47 4.471L12 22l-4.47-4.47zm-8 3.06L7.879 20H4zm16 0V20h-3.88zm-2.47-8.59L22 12l-4.469 4.47l-4.47-4.47zm-11.06 0L10.94 12l-4.471 4.469L2 12zM12 2l4.469 4.469L12 10.939L7.53 6.47zM7.879 4l-3.88 3.879L4 4zM20 4v3.879l-3.88-3.88z"></svg:path>`,
})
export class RiCentosFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCentosLineIcon],svg[ri-centos-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 2l4.292 4.292l1.061-1.06L16.121 4H20v3.879l-1.233-1.233l-1.06 1.061L22 12l-4.292 4.293l1.059 1.059L20 16.121V20h-3.88l1.232-1.233l-1.059-1.06L12 22l-4.293-4.293l-1.061 1.06L7.879 20H4v-3.88l1.231 1.232l1.061-1.06L2 12l4.293-4.293l-1.062-1.061L4 7.879V4h3.879L6.646 5.23l1.062 1.062zm0 11.413l-2.88 2.879l2.88 2.88l2.879-2.88zM7.707 9.12L4.828 12l2.878 2.878l2.88-2.88zm8.585 0l-2.877 2.878l2.878 2.879L19.172 12zM12 4.828L9.122 7.707l2.879 2.878l2.877-2.879z"></svg:path>`,
})
export class RiCentosLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCharacterRecognitionFillIcon],svg[ri-character-recognition-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.998 3v18h-18V3zm-8.001 3h-2L6.598 17h2.154l1.199-3h4.09l1.201 3h2.155zm-1 2.885L13.242 12H10.75z"></svg:path>`,
})
export class RiCharacterRecognitionFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riCharacterRecognitionLineIcon],svg[ri-character-recognition-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.998 15v4h4v2h-6v-6zm16 0v6h-6v-2h4v-4zm-8.001-9l4.4 11h-2.155l-1.201-3h-4.09l-1.199 3H6.598l4.399-11zm-1 2.885L10.75 12h2.492zM8.998 3v2h-4v4h-2V3zm12 0v6h-2V5h-4V3z"></svg:path>`,
})
export class RiCharacterRecognitionLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riChargingPile2FillIcon],svg[ri-charging-pile-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 11h-1V7h1V4h2v3h1v4h-1v7a3 3 0 1 1-6 0v-4h-2v5h1v2H2v-2h1V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v8h2a2 2 0 0 1 2 2v4a1 1 0 1 0 2 0zM9 11V7l-4 6h3v4l4-6z"></svg:path>`,
})
export class RiChargingPile2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riChargingPile2LineIcon],svg[ri-charging-pile-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 11h-1V7h1V4h2v3h1v4h-1v7a3 3 0 1 1-6 0v-4h-2v5h1v2H2v-2h1V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v8h2a2 2 0 0 1 2 2v4a1 1 0 1 0 2 0zm-8 8V5H5v14zm-3-8h3l-4 6v-4H5l4-6z"></svg:path>`,
})
export class RiChargingPile2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riChargingPileFillIcon],svg[ri-charging-pile-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 19V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v8h2a2 2 0 0 1 2 2v4a1 1 0 1 0 2 0v-7h-2a1 1 0 0 1-1-1V6.414l-1.657-1.657l1.414-1.414l4.95 4.95A1 1 0 0 1 22 9v9a3 3 0 1 1-6 0v-4h-2v5h1v2H2v-2zm6-8V7l-4 6h3v4l4-6z"></svg:path>`,
})
export class RiChargingPileFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riChargingPileLineIcon],svg[ri-charging-pile-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 19h1v2H2v-2h1V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v8h2a2 2 0 0 1 2 2v4a1 1 0 1 0 2 0v-7h-2a1 1 0 0 1-1-1V6.414l-1.657-1.657l1.414-1.414l4.95 4.95A1 1 0 0 1 22 9v9a3 3 0 1 1-6 0v-4h-2zm-9 0h7V5H5zm4-8h3l-4 6v-4H5l4-6z"></svg:path>`,
})
export class RiChargingPileLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riChat1FillIcon],svg[ri-chat-1-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3h4a8 8 0 1 1 0 16v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8"></svg:path>`,
})
export class RiChat1FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riChat1LineIcon],svg[ri-chat-1-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 3h4a8 8 0 1 1 0 16v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8m2 14h2a6 6 0 0 0 0-12h-4a6 6 0 0 0-6 6c0 3.61 2.462 5.966 8 8.48z"></svg:path>`,
})
export class RiChat1LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riChat2FillIcon],svg[ri-chat-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.45 19L12 22.5L9.55 19H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1z"></svg:path>`,
})
export class RiChat2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riChat2LineIcon],svg[ri-chat-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.45 19L12 22.5L9.55 19H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zm-1.041-2H20V5H4v12h6.591L12 19.012z"></svg:path>`,
})
export class RiChat2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riChat3FillIcon],svg[ri-chat-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.291 20.824L2 22l1.176-5.291A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-4.709-1.176"></svg:path>`,
})
export class RiChat3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riChat3LineIcon],svg[ri-chat-3-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.291 20.824L2 22l1.176-5.291A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-4.709-1.176m.29-2.113l.653.35A7.96 7.96 0 0 0 12 20a8 8 0 1 0-8-8c0 1.335.325 2.617.94 3.766l.349.653l-.655 2.947z"></svg:path>`,
})
export class RiChat3LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riChat4FillIcon],svg[ri-chat-4-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1z"></svg:path>`,
})
export class RiChat4FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riChat4LineIcon],svg[ri-chat-4-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.763 17H20V5H4v13.385zm.692 2L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1z"></svg:path>`,
})
export class RiChat4LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riChatAiFillIcon],svg[ri-chat-ai-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M20 11a6 6 0 0 0 1.993-.339q.007.17.007.339a8 8 0 0 1-8 8v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8h4q.17 0 .339.007A6 6 0 0 0 20 11"></svg:path>`,
})
export class RiChatAiFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riChatAiLineIcon],svg[ri-chat-ai-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.713 8.128l-.246.566a.506.506 0 0 1-.934 0l-.246-.566a4.36 4.36 0 0 0-2.22-2.25l-.759-.339a.53.53 0 0 1 0-.963l.717-.319a4.37 4.37 0 0 0 2.251-2.326l.253-.611a.506.506 0 0 1 .942 0l.253.61a4.37 4.37 0 0 0 2.25 2.327l.718.32a.53.53 0 0 1 0 .962l-.76.338a4.36 4.36 0 0 0-2.219 2.251M10 3h4v2h-4a6 6 0 0 0-6 6c0 3.61 2.462 5.966 8 8.48V17h2a6 6 0 0 0 6-6h2a8 8 0 0 1-8 8v3.5c-5-2-12-5-12-11.5a8 8 0 0 1 8-8"></svg:path>`,
})
export class RiChatAiLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riChatCheckFillIcon],svg[ri-chat-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zm4.838-6.879L8.818 9.646l-1.414 1.415l3.889 3.889l5.657-5.657l-1.414-1.414z"></svg:path>`,
})
export class RiChatCheckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riChatCheckLineIcon],svg[ri-chat-check-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zm-.692-2H20V5H4v13.385zm5.53-4.879l4.243-4.242l1.414 1.414l-5.657 5.657l-3.89-3.89l1.415-1.414z"></svg:path>`,
})
export class RiChatCheckLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riChatDeleteFillIcon],svg[ri-chat-delete-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zm6.96-8l2.474-2.475l-1.414-1.414L12 9.586L9.525 7.11L8.111 8.525L10.586 11L8.11 13.475l1.414 1.414L12 12.414l2.475 2.475l1.414-1.414z"></svg:path>`,
})
export class RiChatDeleteFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riChatDeleteLineIcon],svg[ri-chat-delete-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM4 18.385L5.763 17H20V5H4zM13.414 11l2.475 2.475l-1.414 1.414L12 12.414L9.525 14.89l-1.414-1.414L10.586 11L8.11 8.525l1.414-1.414L12 9.586l2.475-2.475l1.414 1.414z"></svg:path>`,
})
export class RiChatDeleteLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riChatDownloadFillIcon],svg[ri-chat-download-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM13 11V7h-2v4H8l4 4l4-4z"></svg:path>`,
})
export class RiChatDownloadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riChatDownloadLineIcon],svg[ri-chat-download-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM4 18.385L5.763 17H20V5H4zM13 11h3l-4 4l-4-4h3V7h2z"></svg:path>`,
})
export class RiChatDownloadLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riChatFollowUpFillIcon],svg[ri-chat-follow-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455L2 22.5V4a1 1 0 0 1 1-1zm-4 4h-2v8h2zm-6 1H9v1.999L7 10v2l2-.001V14h2v-2.001L13 12v-2l-2-.001z"></svg:path>`,
})
export class RiChatFollowUpFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riChatFollowUpLineIcon],svg[ri-chat-follow-up-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H6.455L2 22.5V4a1 1 0 0 1 1-1zm-1 2H4v13.385L5.763 17H20zm-3 2v8h-2V7zm-6 1v1.999L13 10v2l-2-.001V14H9v-2.001L7 12v-2l2-.001V8z"></svg:path>`,
})
export class RiChatFollowUpLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riChatForwardFillIcon],svg[ri-chat-forward-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM12 10H8v2h4v3l4-4l-4-4z"></svg:path>`,
})
export class RiChatForwardFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riChatForwardLineIcon],svg[ri-chat-forward-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM4 18.385L5.763 17H20V5H4zM12 10V7l4 4l-4 4v-3H8v-2z"></svg:path>`,
})
export class RiChatForwardLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riChatHeartFillIcon],svg[ri-chat-heart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zm5.563-4.3l3.358-3.359a2.25 2.25 0 1 0-3.181-3.182l-.177.177l-.177-.177a2.25 2.25 0 0 0-3.182 3.182z"></svg:path>`,
})
export class RiChatHeartFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riChatHeartLineIcon],svg[ri-chat-heart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM4 18.385L5.763 17H20V5H4zm8.018-3.685l-3.359-3.36a2.25 2.25 0 0 1 3.182-3.182l.177.177l.176-.177a2.25 2.25 0 0 1 3.182 3.182z"></svg:path>`,
})
export class RiChatHeartLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riChatHistoryFillIcon],svg[ri-chat-history-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-4.708-1.175L2 22l1.176-5.29A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2m1 5h-2v7h6v-2h-4z"></svg:path>`,
})
export class RiChatHistoryFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[riChatHistoryLineIcon],svg[ri-chat-history-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-4.708-1.175L2 22l1.176-5.29A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2m0 2a8 8 0 0 0-8 8c0 1.335.326 2.618.94 3.766l.35.654l-.656 2.946l2.948-.654l.653.349A7.96 7.96 0 0 0 12 20a8 8 0 1 0 0-16m1 3v5h4v2h-6V7z"></svg:path>`,
})
export class RiChatHistoryLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
