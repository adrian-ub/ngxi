import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonContentViewIcon],svg[carbon-content-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16" cy="19" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M23.777 18.479A8.64 8.64 0 0 0 16 13a8.64 8.64 0 0 0-7.777 5.479L8 19l.223.522A8.64 8.64 0 0 0 16 25a8.64 8.64 0 0 0 7.777-5.478L24 19ZM16 23a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"></svg:path><svg:path fill="currentColor" d="M27 3H5a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M5 5h22v4H5Zm0 22V11h22v16Z"></svg:path>`,
})
export class CarbonContentViewIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonContinueIcon],svg[carbon-continue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 28a1 1 0 0 1-1-1V5a1 1 0 0 1 1.501-.865l19 11a1 1 0 0 1 0 1.73l-19 11A1 1 0 0 1 10 28m1-21.266v18.532L27 16zM4 4h2v24H4z"></svg:path>`,
})
export class CarbonContinueIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonContinueFilledIcon],svg[carbon-continue-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 28a1 1 0 0 1-1-1V5a1 1 0 0 1 1.501-.865l19 11a1 1 0 0 1 0 1.73l-19 11A1 1 0 0 1 10 28M4 4h2v24H4z"></svg:path>`,
})
export class CarbonContinueFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonContinuousDeploymentIcon],svg[carbon-continuous-deployment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24 2l-6 6l1.4 1.4L23 5.8V19c0 5-4 9-9 9c-1.6 0-3.1-.4-4.3-1.1c.4.1.8.1 1.3.1c4.4 0 8-3.6 8-8s-3.6-8-8-8s-8 3.6-8 8c0 6.1 4.9 11 11 11s11-4.9 11-11V5.8l3.6 3.6L30 8zM5 19.6V19c0-3.3 2.7-6 6-6s6 2.7 6 6s-2.7 6-6 6c-3.1 0-5.7-2.4-6-5.4"></svg:path>`,
})
export class CarbonContinuousDeploymentIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonContinuousIntegrationIcon],svg[carbon-continuous-integration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m31.9 15.5l-5.7-10c-.3-.3-.6-.5-.9-.5H6.7c-.3 0-.6.2-.8.5l-5.7 10c-.2.2-.2.3-.2.5s0 .3.1.5l5.7 10c.3.3.6.5.9.5h18.5c.4 0 .7-.2.9-.5l5.7-10c.2-.2.2-.3.2-.5s0-.3-.1-.5M17.8 15h-8l4-7zm-2.3-8h8l-4 7zm2.3 10l-4 7l-4-7zm1.7 1l4 7h-8zm1.7-1h8l-4 7zm0-2l4-7l4 7zM7.3 7H12l-4.6 8H2.7zm0 18l-4.6-8h4.7l4.6 8z"></svg:path>`,
})
export class CarbonContinuousIntegrationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonContourDrawIcon],svg[carbon-contour-draw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs></svg:defs><svg:path d="M7.7 4.7a14.703 14.703 0 0 0-3 3.1L6.3 9a13.263 13.263 0 0 1 2.6-2.7z" fill="currentColor"></svg:path><svg:path d="M4.6 12.3l-1.9-.6A12.511 12.511 0 0 0 2 16h2a11.476 11.476 0 0 1 .6-3.7z" fill="currentColor"></svg:path><svg:path d="M11.7 2.7l.6 1.9A11.476 11.476 0 0 1 16 4V2a12.511 12.511 0 0 0-4.3.7z" fill="currentColor"></svg:path><svg:path d="M24.2 27.3a15.18 15.18 0 0 0 3.1-3.1L25.7 23a11.526 11.526 0 0 1-2.7 2.7z" fill="currentColor"></svg:path><svg:path d="M27.4 19.7l1.9.6A15.475 15.475 0 0 0 30 16h-2a11.476 11.476 0 0 1-.6 3.7z" fill="currentColor"></svg:path><svg:path d="M29.2 11.6a14.403 14.403 0 0 0-2-3.9l-1.6 1.2a12.887 12.887 0 0 1 1.7 3.3z" fill="currentColor"></svg:path><svg:path d="M24.1 4.6a14.403 14.403 0 0 0-3.9-2l-.6 1.9a12.887 12.887 0 0 1 3.3 1.7z" fill="currentColor"></svg:path><svg:path d="M20.3 29.3l-.6-1.9a11.476 11.476 0 0 1-3.7.6v2a21.42 21.42 0 0 0 4.3-.7z" fill="currentColor"></svg:path><svg:path d="M15.402 24.248a11.949 11.949 0 0 0-1.718-3.335l1.613-1.183a13.949 13.949 0 0 1 2.005 3.893z" fill="currentColor"></svg:path><svg:path d="M11.02 18.267a11.921 11.921 0 0 0-3.347-1.694l.612-1.905a13.924 13.924 0 0 1 3.907 1.978z" fill="currentColor"></svg:path>`,
})
export class CarbonContourDrawIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonContourEditIcon],svg[carbon-contour-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs></svg:defs><svg:path d="M16 30v-2a12.002 12.002 0 0 0 3.692-23.421l.616-1.904A14.002 14.002 0 0 1 16 30z" fill="currentColor"></svg:path><svg:path d="M7.7 4.7a14.703 14.703 0 0 0-3 3.1L6.3 9a13.263 13.263 0 0 1 2.6-2.7z" fill="currentColor"></svg:path><svg:path d="M4.6 12.3l-1.9-.6A12.511 12.511 0 0 0 2 16h2a11.476 11.476 0 0 1 .6-3.7z" fill="currentColor"></svg:path><svg:path d="M11.7 2.7l.6 1.9A11.476 11.476 0 0 1 16 4V2a12.511 12.511 0 0 0-4.3.7z" fill="currentColor"></svg:path><svg:path d="M15.402 24.248a11.949 11.949 0 0 0-1.718-3.335l1.613-1.183a13.949 13.949 0 0 1 2.005 3.893z" fill="currentColor"></svg:path><svg:path d="M11.02 18.267a11.921 11.921 0 0 0-3.347-1.694l.612-1.905a13.924 13.924 0 0 1 3.907 1.978z" fill="currentColor"></svg:path>`,
})
export class CarbonContourEditIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonContourFindingIcon],svg[carbon-contour-finding-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs></svg:defs><svg:path d="M7.7 4.7a14.703 14.703 0 0 0-3 3.1L6.3 9a13.263 13.263 0 0 1 2.6-2.7z" fill="currentColor"></svg:path><svg:path d="M4.6 12.3l-1.9-.6A12.511 12.511 0 0 0 2 16h2a11.476 11.476 0 0 1 .6-3.7z" fill="currentColor"></svg:path><svg:path d="M2.7 20.4a14.403 14.403 0 0 0 2 3.9l1.6-1.2a12.887 12.887 0 0 1-1.7-3.3z" fill="currentColor"></svg:path><svg:path d="M7.8 27.3a14.403 14.403 0 0 0 3.9 2l.6-1.9A12.887 12.887 0 0 1 9 25.7z" fill="currentColor"></svg:path><svg:path d="M11.7 2.7l.6 1.9A11.476 11.476 0 0 1 16 4V2a12.511 12.511 0 0 0-4.3.7z" fill="currentColor"></svg:path><svg:path d="M24.2 27.3a15.18 15.18 0 0 0 3.1-3.1L25.7 23a11.526 11.526 0 0 1-2.7 2.7z" fill="currentColor"></svg:path><svg:path d="M27.4 19.7l1.9.6A15.475 15.475 0 0 0 30 16h-2a11.476 11.476 0 0 1-.6 3.7z" fill="currentColor"></svg:path><svg:path d="M29.2 11.6a14.403 14.403 0 0 0-2-3.9l-1.6 1.2a12.887 12.887 0 0 1 1.7 3.3z" fill="currentColor"></svg:path><svg:path d="M24.1 4.6a14.403 14.403 0 0 0-3.9-2l-.6 1.9a12.887 12.887 0 0 1 3.3 1.7z" fill="currentColor"></svg:path><svg:path d="M20.3 29.3l-.6-1.9a11.476 11.476 0 0 1-3.7.6v2a21.42 21.42 0 0 0 4.3-.7z" fill="currentColor"></svg:path><svg:path d="M16 26a10 10 0 1 1 10-10a10.011 10.011 0 0 1-10 10zm0-18a8 8 0 1 0 8 8a8.01 8.01 0 0 0-8-8z" fill="currentColor"></svg:path>`,
})
export class CarbonContourFindingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonContrastIcon],svg[carbon-contrast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.37 11.84a13.6 13.6 0 0 0-1.06-2.51A14.2 14.2 0 0 0 25.9 6.1a14 14 0 1 0 0 19.8a14.2 14.2 0 0 0 2.41-3.23a13.6 13.6 0 0 0 1.06-2.51a14 14 0 0 0 0-8.32M4 16A12 12 0 0 1 16 4v24A12 12 0 0 1 4 16"></svg:path>`,
})
export class CarbonContrastIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonConvertToCloudIcon],svg[carbon-convert-to-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26.5 12H19a4 4 0 0 1 0-8h.084A4.79 4.79 0 0 1 23 2a4.98 4.98 0 0 1 4.654 3.203A3.47 3.47 0 0 1 30 8.5a3.504 3.504 0 0 1-3.5 3.5M19 6a2 2 0 0 0 0 4h7.5A1.5 1.5 0 0 0 28 8.5a1.486 1.486 0 0 0-1.278-1.474l-.661-.099l-.162-.649a2.957 2.957 0 0 0-5.487-.712L20.114 6zm4 8l-5 5l1.414 1.414L22 17.832V24h-6v2h6a2.003 2.003 0 0 0 2-2v-6.167l2.587 2.583L28 19zM2 20h10v2H2zm0 4h10v2H2zm0 4h10v2H2z"></svg:path>`,
})
export class CarbonConvertToCloudIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCookieIcon],svg[carbon-cookie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="10" cy="21" r="2" fill="currentColor"></svg:circle><svg:circle cx="23" cy="20" r="2" fill="currentColor"></svg:circle><svg:circle cx="13" cy="10" r="2" fill="currentColor"></svg:circle><svg:circle cx="14" cy="15" r="1" fill="currentColor"></svg:circle><svg:circle cx="23" cy="5" r="2" fill="currentColor"></svg:circle><svg:circle cx="29" cy="3" r="1" fill="currentColor"></svg:circle><svg:circle cx="16" cy="23" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M16 30C8.3 30 2 23.7 2 16S8.3 2 16 2h.3l1.4.1l-.3 1.2c-.1.4-.2.9-.2 1.3c0 2.8 2.2 5 5 5c1 0 2-.3 2.9-.9l1.3 1.5c-.4.4-.6.9-.6 1.4c0 1.3 1.3 2.4 2.7 1.9l1.2-.5l.2 1.3c.1.6.1 1.2.1 1.7c0 7.7-6.3 14-14 14m-.7-26C9 4.4 4 9.6 4 16c0 6.6 5.4 12 12 12s12-5.4 12-12v-.4c-2.3.1-4.2-1.7-4.2-4v-.2c-.5.1-1 .2-1.6.2c-3.9 0-7-3.1-7-7c0-.2 0-.4.1-.6"></svg:path>`,
})
export class CarbonCookieIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCopyIcon],svg[carbon-copy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 10v18H10V10zm0-2H10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2"></svg:path><svg:path fill="currentColor" d="M4 18H2V4a2 2 0 0 1 2-2h14v2H4Z"></svg:path>`,
})
export class CarbonCopyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCopyFileIcon],svg[carbon-copy-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m27.4 14.7l-6.1-6.1C21 8.2 20.5 8 20 8h-8c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V16.1c0-.5-.2-1-.6-1.4M20 10l5.9 6H20zm-8 18V10h6v6c0 1.1.9 2 2 2h6v10z"></svg:path><svg:path fill="currentColor" d="M6 18H4V4c0-1.1.9-2 2-2h14v2H6z"></svg:path>`,
})
export class CarbonCopyFileIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCopyLinkIcon],svg[carbon-copy-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.947 19a4.948 4.948 0 0 1-3.499-8.446l5.106-5.105a4.948 4.948 0 0 1 6.998 6.998l-.553.552l-1.415-1.413l.557-.557a2.95 2.95 0 0 0-.004-4.166a3.02 3.02 0 0 0-4.17 0l-5.104 5.104a2.947 2.947 0 0 0 0 4.17a3.02 3.02 0 0 0 4.17 0l1.414 1.414a4.92 4.92 0 0 1-3.5 1.449"></svg:path><svg:path fill="currentColor" d="M19.947 17a4.948 4.948 0 0 1-3.499-8.446L17.001 8l1.414 1.415l-.552.552a2.95 2.95 0 0 0 0 4.169a3.02 3.02 0 0 0 4.17 0l5.105-5.105a2.95 2.95 0 0 0 0-4.168a3.02 3.02 0 0 0-4.17 0l-1.414-1.415a4.948 4.948 0 0 1 6.998 6.998l-5.104 5.103a4.92 4.92 0 0 1-3.5 1.45"></svg:path><svg:path fill="currentColor" d="M24 30H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4v2H4v20h20V18h2v10a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonCopyLinkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCornIcon],svg[carbon-corn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 16c-.337 0-.67.02-1 .05V16c0-7.885-2.956-14-5.5-14S11 8.115 11 16v5H6v3a6.007 6.007 0 0 0 6 6h3a11.013 11.013 0 0 0 11-11v-3Zm-10 0h2v-2h-1.927a26 26 0 0 1 .565-4H16V8h-1.8c.81-2.406 1.815-3.771 2.3-3.986c.66.292 2.284 2.703 3.065 6.986H18v2h1.844A29 29 0 0 1 20 16v.426A11.06 11.06 0 0 0 13.79 21H13Zm-1 12a4.005 4.005 0 0 1-4-4v-1h4.764A10.9 10.9 0 0 0 12 27Zm12-9a9.01 9.01 0 0 1-9 9h-1v-1a9.01 9.01 0 0 1 9-9h1Z"></svg:path>`,
})
export class CarbonCornIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCornerIcon],svg[carbon-corner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 9H14V6H6v8h3v14h2V14h3v-3h14Zm-16 3H8V8h4Z"></svg:path>`,
})
export class CarbonCornerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCoronavirusIcon],svg[carbon-coronavirus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="15.5" cy="11.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="20.5" cy="15.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="16" cy="16" r="1" fill="currentColor"></svg:circle><svg:circle cx="16.5" cy="20.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="11.5" cy="16.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M28 13v2h-2.05a9.95 9.95 0 0 0-2.215-5.321l1.437-1.437l1.414 1.415L28 8.243L23.758 4l-1.414 1.414l1.414 1.414l-1.437 1.437A9.95 9.95 0 0 0 17 6.05V4h2V2h-6v2h2v2.05a9.95 9.95 0 0 0-5.32 2.215L8.241 6.828l1.414-1.414L8.242 4L4 8.243l1.414 1.414l1.414-1.415L8.265 9.68A9.95 9.95 0 0 0 6.051 15H4v-2H2v6h2v-2h2.05a9.95 9.95 0 0 0 2.215 5.321l-1.437 1.437l-1.414-1.415L4 23.757L8.242 28l1.414-1.414l-1.414-1.414l1.437-1.437A9.95 9.95 0 0 0 15 25.95V28h-2v2h6v-2h-2v-2.05a9.95 9.95 0 0 0 5.32-2.215l1.438 1.437l-1.414 1.414L23.758 28L28 23.757l-1.414-1.414l-1.414 1.415l-1.437-1.437A9.95 9.95 0 0 0 25.949 17H28v2h2v-6ZM16 24a8 8 0 1 1 8-8a8.01 8.01 0 0 1-8 8"></svg:path>`,
})
export class CarbonCoronavirusIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCostIcon],svg[carbon-cost-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 23a7 7 0 1 1 7-7a7.01 7.01 0 0 1-7 7m0-12a5 5 0 1 0 5 5a5.006 5.006 0 0 0-5-5"></svg:path><svg:path fill="currentColor" d="M30 6.414L28.586 5l-3.35 3.35a12 12 0 0 0-1.586-1.586L27 3.414L25.586 2l-3.61 3.61A11.98 11.98 0 0 0 5.61 21.976L2 25.586L3.414 27l3.35-3.35a12 12 0 0 0 1.586 1.586L5 28.586L6.414 30l3.61-3.61A11.98 11.98 0 0 0 26.39 10.024ZM16 26a10 10 0 1 1 10-10a10.01 10.01 0 0 1-10 10"></svg:path>`,
})
export class CarbonCostIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCostTotalIcon],svg[carbon-cost-total-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 13h12v2H10zm0 5h12v2H10z"></svg:path><svg:path fill="currentColor" d="M30 6.414L28.586 5l-3.35 3.35a12 12 0 0 0-1.586-1.586L27 3.414L25.586 2l-3.61 3.61A11.98 11.98 0 0 0 5.61 21.976L2 25.586L3.414 27l3.35-3.35a12 12 0 0 0 1.586 1.586L5 28.586L6.414 30l3.61-3.61A11.98 11.98 0 0 0 26.39 10.024ZM16 26a10 10 0 1 1 10-10a10.01 10.01 0 0 1-10 10"></svg:path>`,
})
export class CarbonCostTotalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCoughIcon],svg[carbon-cough-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 30h-2v-3h-4a5.006 5.006 0 0 1-5-5v-1.28l-2.316-.771a1 1 0 0 1-.541-1.463L15 13.723V11a9.01 9.01 0 0 1 9-9h5v2h-5a7.01 7.01 0 0 0-7 7v3a1 1 0 0 1-.143.514L14.5 18.446l1.817.605A1 1 0 0 1 17 20v2a3.003 3.003 0 0 0 3 3h5a1 1 0 0 1 1 1Z"></svg:path><svg:circle cx="9" cy="23" r="1" fill="currentColor"></svg:circle><svg:circle cx="6" cy="20" r="1" fill="currentColor"></svg:circle><svg:circle cx="6" cy="26" r="1" fill="currentColor"></svg:circle><svg:circle cx="3" cy="17" r="1" fill="currentColor"></svg:circle><svg:circle cx="3" cy="29" r="1" fill="currentColor"></svg:circle><svg:circle cx="3" cy="23" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M19 12h4v2h-4z"></svg:path>`,
})
export class CarbonCoughIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCourseIcon],svg[carbon-course-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 30H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16.618l-5-2.5l-5 2.5V4H8v24h16v-4h2v4a2.003 2.003 0 0 1-2 2m-3-14.118l3 1.5V4h-6v13.382Z"></svg:path>`,
})
export class CarbonCourseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCovariateIcon],svg[carbon-covariate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="8" cy="16" r="2" fill="currentColor"></svg:circle><svg:circle cx="14" cy="8" r="2" fill="currentColor"></svg:circle><svg:circle cx="28" cy="12" r="2" fill="currentColor"></svg:circle><svg:circle cx="21" cy="18" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M30 3.414L28.586 2L4 26.586V2H2v26a2 2 0 0 0 2 2h26v-2H5.414ZM4 28"></svg:path>`,
})
export class CarbonCovariateIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCreateLinkIcon],svg[carbon-create-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 8v3H5V8H2V6h3V3h2v3h3v2zm15.42 18.01l6.03-6.03c2.06-2.06 2.06-5.39 0-7.44s-5.39-2.06-7.44 0l1.41 1.41a3.277 3.277 0 0 1 4.62 0a3.277 3.277 0 0 1 0 4.62l-6.03 6.03a3.277 3.277 0 0 1-4.62 0a3.277 3.277 0 0 1 0-4.62l-1.41-1.41c-.99.99-1.54 2.33-1.54 3.73c0 2.91 2.36 5.26 5.27 5.26c1.4 0 2.74-.55 3.72-1.54zm-8.43 2.45l-1.41-1.41a3.27 3.27 0 0 1-4.6 0a3.27 3.27 0 0 1-.02-4.62l6.03-6.03l.02-.02c1.28-1.27 3.35-1.26 4.62.02s1.26 3.35-.02 4.62l1.41 1.41l.03-.03a5.26 5.26 0 0 0-.03-7.44a5.26 5.26 0 0 0-7.44.03l-6.03 6.03A5.27 5.27 0 0 0 5 24.74C5 27.65 7.37 30 10.27 30c1.4 0 2.74-.55 3.72-1.54"></svg:path>`,
})
export class CarbonCreateLinkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCredentialsIcon],svg[carbon-credentials-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 22a4 4 0 1 0-4-4a4 4 0 0 0 4 4m0-6a2 2 0 1 1-2 2a2 2 0 0 1 2-2M14 6h4v2h-4z"></svg:path><svg:path fill="currentColor" d="M24 2H8a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h16a2.003 2.003 0 0 0 2-2V4a2 2 0 0 0-2-2m-4 26h-8v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Zm2 0v-2a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3v2H8V4h16v24Z"></svg:path>`,
})
export class CarbonCredentialsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCropIcon],svg[carbon-crop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 20h-2V9H12V7h11a2 2 0 0 1 2 2Z"></svg:path><svg:path fill="currentColor" d="M9 23V2H7v5H2v2h5v14a2 2 0 0 0 2 2h14v5h2v-5h5v-2Z"></svg:path>`,
})
export class CarbonCropIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCropGrowthIcon],svg[carbon-crop-growth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 13a4.005 4.005 0 0 0 4-4V6h-3a3.98 3.98 0 0 0-2.747 1.106A6 6 0 0 0 19 4h-3v3a6.007 6.007 0 0 0 6 6h1v13H11v-5h1a4.005 4.005 0 0 0 4-4v-3h-3a3.98 3.98 0 0 0-2.747 1.106A6 6 0 0 0 5 12H2v3a6.007 6.007 0 0 0 6 6h1v5H2v2h28v-2h-5V13Zm-1-3a2 2 0 0 1 2-2h1v1a2 2 0 0 1-2 2h-1Zm-14 8a2 2 0 0 1 2-2h1v1a2 2 0 0 1-2 2h-1Zm-2 1H8a4.005 4.005 0 0 1-4-4v-1h1a4.005 4.005 0 0 1 4 4Zm14-8h-1a4.005 4.005 0 0 1-4-4V6h1a4.005 4.005 0 0 1 4 4Z"></svg:path>`,
})
export class CarbonCropGrowthIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCropHealthIcon],svg[carbon-crop-health-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 28h8v2H2zm15 1a1 1 0 0 1-.78-.375L12.52 24H2v-2h11a1 1 0 0 1 .78.375l3.147 3.932l5.241-7.862A1 1 0 0 1 23.8 18.4l2.7 3.6H30v2h-4a1 1 0 0 1-.8-.4l-2.152-2.87l-5.216 7.825a1 1 0 0 1-.789.444zm-6-13v-5h1a4.005 4.005 0 0 0 4-4V4h-3a3.98 3.98 0 0 0-2.747 1.107A6 6 0 0 0 5 2H2v3a6.007 6.007 0 0 0 6 6h1v5H2v2h14v-2zm2-10h1v1a2 2 0 0 1-2 2h-1V8a2 2 0 0 1 2-2M8 9a4.005 4.005 0 0 1-4-4V4h1a4.005 4.005 0 0 1 4 4v1z"></svg:path>`,
})
export class CarbonCropHealthIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCrossReferenceIcon],svg[carbon-cross-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M11 24h4v2h-4z" fill="currentColor"></svg:path><svg:path d="M5 24h4v2H5z" fill="currentColor"></svg:path><svg:path d="M23 24h4v2h-4z" fill="currentColor"></svg:path><svg:path d="M17 24h4v2h-4z" fill="currentColor"></svg:path><svg:path d="M9 22a4.92 4.92 0 0 1 4-2h6a5.22 5.22 0 0 1 4 2h2.3a6.87 6.87 0 0 0-6.3-4h-6a6.87 6.87 0 0 0-6.3 4z" fill="currentColor"></svg:path><svg:path d="M24 28h2v2h-2z" fill="currentColor"></svg:path><svg:path d="M6 28h2v2H6z" fill="currentColor"></svg:path><svg:path d="M16 16a7 7 0 1 1 7-7a7 7 0 0 1-7 7zm0-12a5 5 0 0 0-5 5a5 5 0 0 0 10 0a5 5 0 0 0-5-5z" fill="currentColor"></svg:path>`,
})
export class CarbonCrossReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCrossTabIcon],svg[carbon-cross-tab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2H10a2 2 0 0 0-2 2v3H4a2 2 0 0 0-2 2v19a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M10 4h18v3H10Zm18 10h-8V9h8Zm-18 7v-5h8v5Zm8 2v5h-8v-5ZM8 21H4v-5h4ZM18 9v5h-8V9Zm2 7h8v5h-8ZM8 9v5H4V9ZM4 23h4v5H4Zm16 5v-5h8v5Z"></svg:path>`,
})
export class CarbonCrossTabIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCrossroadsIcon],svg[carbon-crossroads-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26.586 6.586A2 2 0 0 0 25.172 6H17V2h-2v10H6.828a2 2 0 0 0-1.414.586L2 16l3.414 3.414A2 2 0 0 0 6.828 20H15v10h2V14h8.172a2 2 0 0 0 1.414-.586L30 10ZM6.828 18l-2-2l2-2H15v4Zm18.344-6H17V8h8.172l2 2Z"></svg:path>`,
})
export class CarbonCrossroadsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCrowdReportIcon],svg[carbon-crowd-report-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.832 19.555l-1.664-1.11L17.465 15H20v-5h-8v5h2v2h-2a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1.465Z"></svg:path><svg:path fill="currentColor" d="m16 30l-8.436-9.949a35 35 0 0 1-.348-.451A10.9 10.9 0 0 1 5 13a11 11 0 0 1 22 0a10.9 10.9 0 0 1-2.215 6.597l-.001.003s-.3.394-.345.447ZM8.813 18.395s.233.308.286.374L16 26.908l6.91-8.15c.044-.055.278-.365.279-.366A8.9 8.9 0 0 0 25 13a9 9 0 0 0-18 0a8.9 8.9 0 0 0 1.813 5.395"></svg:path>`,
})
export class CarbonCrowdReportIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCrowdReportFilledIcon],svg[carbon-crowd-report-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="m16.832 19.555l-1.664-1.11L17.465 15H20v-5h-8v5h2v2h-2a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1.465Z"></svg:path><svg:path fill="currentColor" d="M16 2A11.013 11.013 0 0 0 5 13a10.9 10.9 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.9 10.9 0 0 0 27 13A11.013 11.013 0 0 0 16 2m6 13a2 2 0 0 1-2 2h-1.465l-1.703 2.555l-1.664-1.11L17.465 15H20v-5h-8v5h2v2h-2a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2Z"></svg:path>`,
})
export class CarbonCrowdReportFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCsvIcon],svg[carbon-csv-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m28 9l-2 13l-2-13h-2l2.516 14h2.968L30 9zM18 23h-6v-2h6v-4h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h6v2h-6v4h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m-8 0H4a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h6v2H4v10h6z"></svg:path>`,
})
export class CarbonCsvIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCu1Icon],svg[carbon-cu1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M10 23H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h5v2H5v6h5z" fill="currentColor"></svg:path><svg:path d="M18 23h-4a2 2 0 0 1-2-2V9h2v12h4V9h2v12a2 2 0 0 1-2 2z" fill="currentColor"></svg:path><svg:path d="M27 21V9.01h-5v2h3V21h-3v2h8v-2h-3z" fill="currentColor"></svg:path>`,
})
export class CarbonCu1Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCu3Icon],svg[carbon-cu3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M10 23H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h5v2H5v6h5z" fill="currentColor"></svg:path><svg:path d="M18 23h-4a2 2 0 0 1-2-2V9h2v12h4V9h2v12a2 2 0 0 1-2 2z" fill="currentColor"></svg:path><svg:path d="M28 9h-6v2h6v4h-5v2h5v4h-6v2h6a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2z" fill="currentColor"></svg:path>`,
})
export class CarbonCu3Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCubeIcon],svg[carbon-cube-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m28.504 8.136l-12-7a1 1 0 0 0-1.008 0l-12 7A1 1 0 0 0 3 9v14a1 1 0 0 0 .496.864l12 7a1 1 0 0 0 1.008 0l12-7A1 1 0 0 0 29 23V9a1 1 0 0 0-.496-.864M16 3.158L26.016 9L16 14.842L5.984 9ZM5 10.74l10 5.833V28.26L5 22.426Zm12 17.52V16.574l10-5.833v11.685Z"></svg:path>`,
})
export class CarbonCubeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCubeViewIcon],svg[carbon-cube-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16" cy="16" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M23.777 15.479A8.64 8.64 0 0 0 16 10a8.64 8.64 0 0 0-7.777 5.479L8 16l.223.522A8.64 8.64 0 0 0 16 22a8.64 8.64 0 0 0 7.777-5.478L24 16ZM16 20a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"></svg:path><svg:path fill="currentColor" d="m28.504 8.136l-12-7a1 1 0 0 0-1.008 0l-12 7A1 1 0 0 0 3 9v14a1 1 0 0 0 .496.864l12 7a1 1 0 0 0 1.008 0l12-7A1 1 0 0 0 29 23V9a1 1 0 0 0-.496-.864M27 22.426l-11 6.416l-11-6.416V9.574l11-6.416l11 6.416Z"></svg:path>`,
})
export class CarbonCubeViewIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCurrencyIcon],svg[carbon-currency-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 12v-2h-4V7h-2v3h-2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h6v3h-8v2h4v3h2v-3h2a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2h-6v-3Z"></svg:path><svg:path fill="currentColor" d="M16 4A12 12 0 1 1 4 16A12.035 12.035 0 0 1 16 4m0-2a14 14 0 1 0 14 14A14.04 14.04 0 0 0 16 2"></svg:path>`,
})
export class CarbonCurrencyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCurrencyBahtIcon],svg[carbon-currency-baht-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.402 15.643A4.97 4.97 0 0 0 23 12v-1a5.006 5.006 0 0 0-5-5h-1V3h-2v3h-5v20h5v3h2v-3h2a5.006 5.006 0 0 0 5-5v-1a4.98 4.98 0 0 0-2.598-4.357M12 8h6a3.003 3.003 0 0 1 3 3v1a3.003 3.003 0 0 1-3 3h-6Zm10 13a3.003 3.003 0 0 1-3 3h-7v-7h7a3.003 3.003 0 0 1 3 3Z"></svg:path>`,
})
export class CarbonCurrencyBahtIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCurrencyDollarIcon],svg[carbon-currency-dollar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 20.515c0-4.615-3.78-5.141-6.817-5.563c-3.31-.46-5.183-.86-5.183-3.71C11 8.85 13.507 8 15.654 8a6.75 6.75 0 0 1 5.568 2.628l1.556-1.256A8.65 8.65 0 0 0 17 6.096V3h-2v3.022c-3.615.22-6 2.26-6 5.22c0 4.73 3.83 5.263 6.908 5.69c3.252.453 5.092.842 5.092 3.583C21 23.547 17.867 24 16 24c-3.43 0-4.878-.964-6.222-2.628l-1.556 1.256A8.44 8.44 0 0 0 15 25.965V29h2v-3.045c3.726-.304 6-2.327 6-5.44"></svg:path>`,
})
export class CarbonCurrencyDollarIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCurrencyEuroIcon],svg[carbon-currency-euro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 26c-3.616 0-6.333-2.297-7.446-6H19v-2H9.132A15 15 0 0 1 9 16q.001-.495.026-1H19v-2H9.237C9.845 9.352 11.81 6 17 6c3.853 0 5.532 1.647 7.128 4.49l1.744-.98C24.265 6.649 22.078 4 17 4C10.645 4 7 8.374 7 16c0 7.065 4.112 12 10 12c5.078 0 7.265-2.648 8.872-5.51l-1.744-.98C22.532 24.354 20.853 26 17 26"></svg:path>`,
})
export class CarbonCurrencyEuroIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCurrencyLiraIcon],svg[carbon-currency-lira-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 19a6.007 6.007 0 0 1-6 6h-4v-6.892L21.214 15v-2L13 16.108v-3L21.214 10V8L13 11.108V5h-2v6.865L8 13v2l3-1.135v3L8 18v2l3-1.135V27h6a8.01 8.01 0 0 0 8-8Z"></svg:path>`,
})
export class CarbonCurrencyLiraIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCurrencyPoundIcon],svg[carbon-currency-pound-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.453 25A8.8 8.8 0 0 0 14 20a10.6 10.6 0 0 0-.18-2H22v-2h-8.782q-.127-.316-.256-.624A9.86 9.86 0 0 1 12 11a4.79 4.79 0 0 1 5-5a6.12 6.12 0 0 1 5.222 2.628l1.556-1.256A8.11 8.11 0 0 0 17 4a6.78 6.78 0 0 0-7 7a11.65 11.65 0 0 0 1.056 5H8v2h3.773A8.2 8.2 0 0 1 12 20c0 2.523-1.486 5-3 5v2h15v-2Z"></svg:path>`,
})
export class CarbonCurrencyPoundIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCurrencyRubleIcon],svg[carbon-currency-ruble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 4h-9v11H7v2h3v3H7v2h3v6h2v-6h9v-2h-9v-3h7a6.007 6.007 0 0 0 6-6v-1a6.007 6.007 0 0 0-6-6m4 7a4.005 4.005 0 0 1-4 4h-7V6h7a4.005 4.005 0 0 1 4 4Z"></svg:path>`,
})
export class CarbonCurrencyRubleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCurrencyRupeeIcon],svg[carbon-currency-rupee-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 7V5H8v2h5.5a4.49 4.49 0 0 1 4.45 4H8v2h9.95a4.49 4.49 0 0 1-4.45 4H8v2.345L17.617 28l1.338-1.486L10.606 19H13.5a6.504 6.504 0 0 0 6.475-6H24v-2h-4.025a6.47 6.47 0 0 0-1.795-4Z"></svg:path>`,
})
export class CarbonCurrencyRupeeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCurrencyShekelIcon],svg[carbon-currency-shekel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 27H7V5h8a5.006 5.006 0 0 1 5 5v12h-2V10a3.003 3.003 0 0 0-3-3H9Z"></svg:path><svg:path fill="currentColor" d="M20 27h-8V10h2v15h6a3.003 3.003 0 0 0 3-3V5h2v17a5.006 5.006 0 0 1-5 5"></svg:path>`,
})
export class CarbonCurrencyShekelIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCurrencyWonIcon],svg[carbon-currency-won-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 14v-2h-4.955L24 5h-2l-2 18l-3-15h-2l-3 15l-2-18H8l.955 7H4v2h5.227l.409 3H4v2h5.909L11 27h2l3-15l3 15h2l1.091-8H28v-2h-5.636l.409-3z"></svg:path>`,
})
export class CarbonCurrencyWonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCurrencyYenIcon],svg[carbon-currency-yen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.271 5H22l-6 11l-6-11H7.729l6.065 11H8v2h7v3H8v2h7v4h2v-4h7v-2h-7v-3h7v-2h-5.794z"></svg:path>`,
})
export class CarbonCurrencyYenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCursor1Icon],svg[carbon-cursor-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 28a1 1 0 0 1-.71-.29l-6.13-6.14l-3.33 5a1 1 0 0 1-1 .44a1 1 0 0 1-.81-.7l-6-20A1 1 0 0 1 6.29 5l20 6a1 1 0 0 1 .7.81a1 1 0 0 1-.44 1l-5 3.33l6.14 6.13a1 1 0 0 1 0 1.42l-4 4A1 1 0 0 1 23 28m0-2.41L25.59 23l-7.16-7.15l5.25-3.5L7.49 7.49l4.86 16.19l3.5-5.25Z"></svg:path>`,
})
export class CarbonCursor1Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCursor2Icon],svg[carbon-cursor-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m27.34 12.06l-22-8a1 1 0 0 0-1.28 1.28l8 22A1 1 0 0 0 13 28a1 1 0 0 0 .93-.63l3.84-9.6l9.6-3.84a1 1 0 0 0 0-1.87Zm-10.71 4l-.4.16l-.16.4L13 24.2L6.67 6.67L24.2 13Z"></svg:path>`,
})
export class CarbonCursor2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCustomerIcon],svg[carbon-customer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.755 21.345A1 1 0 0 0 29 21h-2v-2c0-1.102-.897-2-2-2h-4c-1.103 0-2 .898-2 2v2h-2a1 1 0 0 0-.99 1.142l1 7A1 1 0 0 0 18 30h10a1 1 0 0 0 .99-.858l1-7a1 1 0 0 0-.235-.797M21 19h4v2h-4zm6.133 9h-8.266l-.714-5h9.694zM10 20h2v10h-2z"></svg:path><svg:path fill="currentColor" d="m16.78 17.875l-1.906-2.384l-1.442-3.605A2.99 2.99 0 0 0 10.646 10H5c-1.654 0-3 1.346-3 3v7c0 1.103.897 2 2 2h1v8h2V20H4v-7a1 1 0 0 1 1-1h5.646c.411 0 .776.247.928.629l1.645 3.996l2 2.5zM4 5c0-2.206 1.794-4 4-4s4 1.794 4 4s-1.794 4-4 4s-4-1.794-4-4m2 0c0 1.103.897 2 2 2s2-.897 2-2s-.897-2-2-2s-2 .897-2 2"></svg:path>`,
})
export class CarbonCustomerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCustomerServiceIcon],svg[carbon-customer-service-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 30h-2v-5a5.006 5.006 0 0 0-5-5h-6a5.006 5.006 0 0 0-5 5v5H6v-5a7.01 7.01 0 0 1 7-7h6a7.01 7.01 0 0 1 7 7zM22 6v4c0 1.103-.897 2-2 2h-1a1 1 0 0 0 0 2h1c2.206 0 4-1.794 4-4V6zm-6 10c-3.86 0-7-3.14-7-7s3.14-7 7-7c1.989 0 3.89.85 5.217 2.333l-1.49 1.334A5 5 0 0 0 16 4c-2.757 0-5 2.243-5 5s2.243 5 5 5z"></svg:path>`,
})
export class CarbonCustomerServiceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCutIcon],svg[carbon-cut-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26.5 19.63L20.24 16l6.26-3.63a5 5 0 0 0-1.21-9.2A5.2 5.2 0 0 0 24 3a5 5 0 0 0-4.33 7.53a5 5 0 0 0 2.39 2.1l-3.82 2.21L4 6.6L3 8.34L16.24 16L3 23.68l1 1.74l14.24-8.26l3.82 2.21a5 5 0 0 0-2.39 2.1A5 5 0 0 0 24 29a5.2 5.2 0 0 0 1.29-.17a5 5 0 0 0 1.21-9.2m-5.1-10.1a3 3 0 0 1 1.1-4.12a3 3 0 0 1 4.1 1.11a3 3 0 0 1-1.1 4.11a3 3 0 0 1-4.1-1.1m5.2 16a3 3 0 0 1-4.1 1.11a3 3 0 0 1-1.1-4.12a3 3 0 0 1 4.1-1.1a3 3 0 0 1 1.1 4.06Z"></svg:path>`,
})
export class CarbonCutIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCutInHalfIcon],svg[carbon-cut-in-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M28 4H4a2.002 2.002 0 0 0-2 2v20a2.002 2.002 0 0 0 2 2h24a2.002 2.002 0 0 0 2-2V6a2.002 2.002 0 0 0-2-2zM4 6h12v20H4z" fill="currentColor"></svg:path>`,
})
export class CarbonCutInHalfIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCutOutIcon],svg[carbon-cut-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.05 13.733l-1-1.733l-10.122 5.846l-.997-.576a3 3 0 0 0 .667-.769A3 3 0 1 0 3.5 17.599L5.928 19L3.5 20.402a3.034 3.034 0 1 0 3.44.323l.988-.57L14.59 24l1-1.73L9.928 19zM4.034 15.26a1 1 0 1 1 .466.607a1 1 0 0 1-.466-.607M5 22a1 1 0 1 1-.865 1.5A1 1 0 0 1 5 22m12 4h4v2h-4zm-7 0h4v2h-4z"></svg:path><svg:path fill="currentColor" d="M28 28h-4v-2h4V4H7v4H5V4a2 2 0 0 1 2-2h21a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonCutOutIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCyIcon],svg[carbon-cy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M15 23h-5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h5v2h-5v6h5z" fill="currentColor"></svg:path><svg:path d="M24 9h-2l-2 7l-2-7h-2l3 9v5h2v-5l3-9z" fill="currentColor"></svg:path>`,
})
export class CarbonCyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCyclistIcon],svg[carbon-cyclist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 30a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6m0-10a4 4 0 1 0 4 4a4.005 4.005 0 0 0-4-4M7 30a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6m0-10a4 4 0 1 0 4 4a4.005 4.005 0 0 0-4-4"></svg:path><svg:path fill="currentColor" d="M17 27h-2v-6.586L9.585 15a2.003 2.003 0 0 1 0-2.83l4.586-4.585a2 2 0 0 1 2.828 0L21.414 12H27v2h-6.415l-5-5L11 13.585l6 6zm4.5-19A3.5 3.5 0 1 1 25 4.5A3.504 3.504 0 0 1 21.5 8m0-5A1.5 1.5 0 1 0 23 4.5A1.5 1.5 0 0 0 21.5 3"></svg:path>`,
})
export class CarbonCyclistIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonCzIcon],svg[carbon-cz-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M14 23H9a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h5v2H9v6h5z" fill="currentColor"></svg:path><svg:path d="M24 9h-8v2h6l-6 10v2h8v-2h-6l6-10V9z" fill="currentColor"></svg:path>`,
})
export class CarbonCzIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDashboardIcon],svg[carbon-dashboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 21h2v5h-2zm-4-5h2v10h-2zm-9 10a5.006 5.006 0 0 1-5-5h2a3 3 0 1 0 3-3v-2a5 5 0 0 1 0 10"></svg:path><svg:path fill="currentColor" d="M28 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2.003 2.003 0 0 0 2-2V4a2 2 0 0 0-2-2m0 9H14V4h14ZM12 4v7H4V4ZM4 28V13h24l.002 15Z"></svg:path>`,
})
export class CarbonDashboardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDashboardReferenceIcon],svg[carbon-dashboard-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8zm20 1h2v5h-2zm-4-5h2v10h-2zm-4 2h2v8h-2z"></svg:path><svg:path fill="currentColor" d="M28 2H4a2 2 0 0 0-2 2v12h2v-3h24.001l.001 15H16v2h12a2.003 2.003 0 0 0 2-2V4a2 2 0 0 0-2-2m-16 9H4V4h8Zm2 0V4h14v7Z"></svg:path>`,
})
export class CarbonDashboardReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonData1Icon],svg[carbon-data-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 6h13v2H15zm0 18h13v2H15zM4 15h13v2H4zm3-4a4 4 0 1 1 4-4a4 4 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2m0 24a4 4 0 1 1 4-4a4 4 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2m18-3a4 4 0 1 1 4-4a4 4 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonData1Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonData2Icon],svg[carbon-data-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6h11v2H4zm14 0h10v2H18zm3 6h7v2h-7zm-10 0h7v2h-7zm-7 0h4v2H4zm0 6h24v2H4zm0 6h17v2H4zm20 0h4v2h-4z"></svg:path>`,
})
export class CarbonData2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDataAccessorIcon],svg[carbon-data-accessor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 20h-2v2h2v6H4v-6h2v-2H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2"></svg:path><svg:circle cx="7" cy="25" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M21 13a2.96 2.96 0 0 0-1.285.3l-2.3-2.3l2.3-2.3A2.96 2.96 0 0 0 21 9a3 3 0 1 0-3-3a3 3 0 0 0 .3 1.285l-2.3 2.3l-2.3-2.3A3 3 0 0 0 14 6a3 3 0 1 0-3 3a2.96 2.96 0 0 0 1.285-.3l2.3 2.3l-2.3 2.3A2.96 2.96 0 0 0 11 13a3 3 0 1 0 3 3a3 3 0 0 0-.3-1.285l2.3-2.3l2.3 2.3A3 3 0 0 0 18 16a3 3 0 1 0 3-3m0-8a1 1 0 1 1-1 1a1 1 0 0 1 1-1M10 6a1 1 0 1 1 1 1a1 1 0 0 1-1-1m1 11a1 1 0 1 1 1-1a1 1 0 0 1-1 1m10 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class CarbonDataAccessorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDataAnalyticsIcon],svg[carbon-data-analytics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11h2v6h-2zm-5 2h2v4H7zM2 7h2v10H2z"></svg:path><svg:path fill="currentColor" d="m30 28.586l-7.552-7.552A10.95 10.95 0 0 0 25 14c0-6.065-4.935-11-11-11c-2.403 0-4.685.76-6.601 2.2l1.2 1.6A8.92 8.92 0 0 1 14 5c4.963 0 9 4.037 9 9s-4.037 9-9 9a8.93 8.93 0 0 1-7.2-3.6l-1.6 1.202A10.92 10.92 0 0 0 14 25c2.673 0 5.126-.96 7.034-2.552L28.586 30z"></svg:path>`,
})
export class CarbonDataAnalyticsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDataBackupIcon],svg[carbon-data-backup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="7" cy="7" r="1" fill="currentColor"></svg:circle><svg:circle cx="7" cy="15" r="1" fill="currentColor"></svg:circle><svg:circle cx="7" cy="23" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12 26H4v-6h8v-2H4v-6h18V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h8ZM4 4h16v6H4Z"></svg:path><svg:path fill="currentColor" d="M28 17v2.413A6.996 6.996 0 1 0 22 30v-2a5 5 0 1 1 4.576-7H24v2h6v-6Z"></svg:path>`,
})
export class CarbonDataBackupIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDataBaseIcon],svg[carbon-data-base-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 3H8a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 2v6H8V5ZM8 19v-6h16v6Zm0 8v-6h16v6Z"></svg:path><svg:circle cx="11" cy="8" r="1" fill="currentColor"></svg:circle><svg:circle cx="11" cy="16" r="1" fill="currentColor"></svg:circle><svg:circle cx="11" cy="24" r="1" fill="currentColor"></svg:circle>`,
})
export class CarbonDataBaseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDataBaseAltIcon],svg[carbon-data-base-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 8h5v2H7zm0 4h5v2H7zm0 4h5v2H7zm13-8h5v2h-5zm0 4h5v2h-5zm0 4h5v2h-5z"></svg:path><svg:path fill="currentColor" d="M28 4H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M4 6h11v22H4Zm13 22V6h11v22Z"></svg:path>`,
})
export class CarbonDataBaseAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDataBinIcon],svg[carbon-data-bin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2h-8a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 2v7h-8V4zm0 9v6h-8v-6zm-8 15v-7h8v7zm-8-13h-2v-2H8v2H6v2h2v2h2v-2h2z"></svg:path><svg:path fill="currentColor" d="M16 6V4h-6a2 2 0 0 0-2 2v3.08a6.99 6.99 0 0 0 0 13.84V26a2 2 0 0 0 2 2h6v-2h-6v-3.08a6.99 6.99 0 0 0 0-13.84V6Zm-2 10a5 5 0 1 1-5-5a5.006 5.006 0 0 1 5 5"></svg:path>`,
})
export class CarbonDataBinIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDataBlobIcon],svg[carbon-data-blob-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 30H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2M4 4v24h24V4Z"></svg:path><svg:path fill="currentColor" d="M13 7h2v7h-2zM8 7h2v7H8zm14 7h-2a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2m-2-5v3h2V9zm2 9h2v7h-2zM8 18h2v7H8zm9 7h-2a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2m-2-5v3h2v-3z"></svg:path>`,
})
export class CarbonDataBlobIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDataCategoricalIcon],svg[carbon-data-categorical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 30H19a1 1 0 0 1-1-1V19a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1m-9-2h8v-8h-8zM8 30c-3.308 0-6-2.692-6-6s2.692-6 6-6s6 2.692 6 6s-2.692 6-6 6m0-10c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4s-1.794-4-4-4m14-6H10a1 1 0 0 1-.857-1.515l6.002-10.003C15.338 2.16 15.669 2 16 2s.662.16.855.482l6.002 10.003A1 1 0 0 1 22 14m-10.234-2h8.468L16 4.944z"></svg:path>`,
})
export class CarbonDataCategoricalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDataCenterIcon],svg[carbon-data-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 10h-5V6a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2v4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2M4 28V12h5v2H7v2h2v2H7v2h2v2H7v2h2v4Zm17 0H11V6h10Zm7 0h-5v-4h2v-2h-2v-2h2v-2h-2v-2h2v-2h-2v-2h5Z"></svg:path><svg:path fill="currentColor" d="M14 8h4v2h-4zm0 4h4v2h-4zm0 4h4v2h-4z"></svg:path>`,
})
export class CarbonDataCenterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDataCheckIcon],svg[carbon-data-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 27.18l-2.59-2.59L19 26l4 4l7-7l-1.41-1.41z"></svg:path><svg:circle cx="11" cy="8" r="1" fill="currentColor"></svg:circle><svg:circle cx="11" cy="16" r="1" fill="currentColor"></svg:circle><svg:circle cx="11" cy="24" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M24 3H8a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h8v-2H8v-6h18V5a2 2 0 0 0-2-2m0 16H8v-6h16Zm0-8H8V5h16Z"></svg:path>`,
})
export class CarbonDataCheckIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDataClassIcon],svg[carbon-data-class-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 16a3.96 3.96 0 0 0-2.02.566l-2.859-2.859l2.293-2.293a2 2 0 0 0 0-2.828l-6-6a2 2 0 0 0-2.828 0l-6 6a2 2 0 0 0 0 2.828l2.293 2.293l-2.859 2.859a4.043 4.043 0 1 0 1.414 1.414l2.859-2.859l2.293 2.293a2 2 0 0 0 .414.31V22h-3v8h8v-8h-3v-4.277a2 2 0 0 0 .414-.309l2.293-2.293l2.859 2.859A3.989 3.989 0 1 0 26 16M8 20a2 2 0 1 1-2-2a2 2 0 0 1 2 2m10 4v4h-4v-4zm-2-8l-6-6l6-6l6 6Zm10 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonDataClassIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDataCollectionIcon],svg[carbon-data-collection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16" cy="16" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M30 17v-2h-6.17l2.58-2.59L25 11l-5 5l5 5l1.41-1.41L23.83 17zm-15 6.83V30h2v-6.17l2.59 2.58L21 25l-5-5l-5 5l1.41 1.41zM7 11l-1.41 1.41L8.17 15H2v2h6.17l-2.58 2.59L7 21l5-5zm10-2.83V2h-2v6.17l-2.59-2.58L11 7l5 5l5-5l-1.41-1.41z"></svg:path>`,
})
export class CarbonDataCollectionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDataConnectedIcon],svg[carbon-data-connected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 30h-6v-2h4V4h-4V2h6z"></svg:path><svg:path fill="currentColor" d="M24.91 19.59a4.51 4.51 0 0 0-2.66-3.24a4.55 4.55 0 0 0-3.5 0a5 5 0 0 0-.64.35l-2.81-2.81a4.53 4.53 0 1 0-1.41 1.41l2.81 2.81a4.48 4.48 0 0 0-.61 3.3a4.51 4.51 0 0 0 2.66 3.24a4.55 4.55 0 0 0 3.5 0a4.51 4.51 0 0 0 2.66-3.24a4.7 4.7 0 0 0 0-1.82M11.5 14a2.5 2.5 0 1 1 2.5-2.5a2.5 2.5 0 0 1-2.5 2.5"></svg:path><svg:path fill="currentColor" d="M8 30H2V2h6v2H4v24h4z"></svg:path>`,
})
export class CarbonDataConnectedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDataDefinitionIcon],svg[carbon-data-definition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="14" cy="14" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M20 30a1 1 0 0 1-.707-.293L8.586 19A2 2 0 0 1 8 17.586V10a2 2 0 0 1 2-2h7.586A2 2 0 0 1 19 8.586l10.707 10.707a1 1 0 0 1 0 1.414l-9 9A1 1 0 0 1 20 30M10 10v7.586l10 10L27.586 20l-10-10Z"></svg:path><svg:path fill="currentColor" d="M12 30H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v8h-2V4H4v24h8Z"></svg:path>`,
})
export class CarbonDataDefinitionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDataDiodeIcon],svg[carbon-data-diode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 15h-3V7h-2v8h-3V7h-2v7.826L7.524 7.148A1 1 0 0 0 6 8v7H2v2h4v7a1 1 0 0 0 1.524.852L20 17.174V25h2v-8h3v8h2v-8h3ZM8 22.21V9.79L18.092 16Z"></svg:path>`,
})
export class CarbonDataDiodeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDataEnrichmentIcon],svg[carbon-data-enrichment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 13h2v2h-2zm-4.222-8.203l1.414-1.414l1.414 1.414l-1.414 1.414zM15 0h2v2h-2zM6.808 6.233L5.393 4.818l1.415-1.414l1.414 1.414zM2 13h2v2H2zm11 17h6v2h-6zm-2-4h10v2H11zm5-22C10.5 4 6 8.5 6 14c0 4.4 2 6.3 3.5 7.6c1 .9 1.5 1.5 1.5 2.4h2c0-1.8-1.1-2.9-2.2-3.9C9.4 18.9 8 17.5 8 14c0-4.4 3.6-8 8-8s8 3.6 8 8c0 3.5-1.4 4.9-2.8 6.1c-1.1 1-2.2 2-2.2 3.9h2c0-.9.5-1.5 1.5-2.4C24 20.3 26 18.4 26 14c0-5.5-4.5-10-10-10"></svg:path><svg:path fill="none" d="M0 0h32v32H0z"></svg:path>`,
})
export class CarbonDataEnrichmentIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDataEnrichmentAddIcon],svg[carbon-data-enrichment-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 13h2v2h-2zm-4.222-8.203l1.414-1.414l1.414 1.414l-1.414 1.414zM15 0h2v2h-2zM6.808 6.233L5.393 4.818l1.415-1.414l1.414 1.414zM2 13h2v2H2zm18 0h-3v-3h-2v3h-3v2h3v3h2v-3h3zm-7 17h6v2h-6zm-2-4h10v2H11z"></svg:path><svg:path fill="currentColor" d="M16 4C10.5 4 6 8.5 6 14c0 4.4 2 6.3 3.5 7.6c1 .9 1.5 1.5 1.5 2.4h2c0-1.8-1.1-2.9-2.2-3.9C9.4 18.9 8 17.5 8 14c0-4.4 3.6-8 8-8s8 3.6 8 8c0 3.5-1.4 4.9-2.8 6.1c-1.1 1-2.2 2-2.2 3.9h2c0-.9.5-1.5 1.5-2.4C24 20.3 26 18.4 26 14c0-5.5-4.5-10-10-10"></svg:path><svg:path fill="none" d="M0 0h32v32H0z"></svg:path>`,
})
export class CarbonDataEnrichmentAddIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDataErrorIcon],svg[carbon-data-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="11" cy="8" r="1" fill="currentColor"></svg:circle><svg:circle cx="11" cy="16" r="1" fill="currentColor"></svg:circle><svg:circle cx="11" cy="24" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M24 3H8a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h10v-2H8v-6h18V5a2 2 0 0 0-2-2m0 16H8v-6h16Zm0-8H8V5h16Z"></svg:path><svg:path fill="currentColor" d="M29 24.415L27.586 23L25 25.587L22.414 23L21 24.415L23.586 27L21 29.586L22.414 31L25 28.414L27.586 31L29 29.586L26.414 27z"></svg:path>`,
})
export class CarbonDataErrorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDataFormatIcon],svg[carbon-data-format-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 11h8v2h-8zM6 19h8v2H6zm4-3a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2m12 14a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2"></svg:path><svg:path fill="currentColor" d="M28 30H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2M4 4v24h24V4Z"></svg:path>`,
})
export class CarbonDataFormatIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDataPlayerIcon],svg[carbon-data-player-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 24v2H15.816a2.983 2.983 0 0 0-5.632 0H4v-2H2v6h2v-2h6.184a2.983 2.983 0 0 0 5.632 0H28v2h2v-6zM13 7.5v8.999L21 12z"></svg:path><svg:path fill="currentColor" d="M16 22a10 10 0 1 1 10-10a10.01 10.01 0 0 1-10 10m0-18a8 8 0 1 0 8 8a8.01 8.01 0 0 0-8-8"></svg:path>`,
})
export class CarbonDataPlayerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDataQualityDefinitionIcon],svg[carbon-data-quality-definition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24.6 24.4l2.6 2.6l-2.6 2.6L26 31l4-4l-4-4zm-2.2 0L19.8 27l2.6 2.6L21 31l-4-4l4-4z"></svg:path><svg:circle cx="11" cy="8" r="1" fill="currentColor"></svg:circle><svg:circle cx="11" cy="16" r="1" fill="currentColor"></svg:circle><svg:circle cx="11" cy="24" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M24 3H8c-1.1 0-2 .9-2 2v22c0 1.1.9 2 2 2h7v-2H8v-6h18V5c0-1.1-.9-2-2-2m0 16H8v-6h16zm0-8H8V5h16z"></svg:path>`,
})
export class CarbonDataQualityDefinitionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDataReferenceIcon],svg[carbon-data-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 12V3h-2v2h-3v2h3v5h-3v2h8v-2zM8.5 5C10.43 5 12 6.57 12 8.5S10.43 12 8.5 12S5 10.43 5 8.5S6.57 5 8.5 5m0-2a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11m15 17c1.93 0 3.5 1.57 3.5 3.5S25.43 27 23.5 27S20 25.43 20 23.5s1.57-3.5 3.5-3.5m0-2a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11M6 19v2h3.586L4 26.586L5.414 28L11 22.414V26h2v-7z"></svg:path>`,
})
export class CarbonDataReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDataRefineryIcon],svg[carbon-data-refinery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 30a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5m0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3"></svg:path><svg:path fill="currentColor" d="M24 26H14v-2h10v-7H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h10v2H8v7h16a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2"></svg:path><svg:path fill="currentColor" d="M28 12h-6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2m-6-8v6h6V4Z"></svg:path>`,
})
export class CarbonDataRefineryIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDataRefineryReferenceIcon],svg[carbon-data-refinery-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8zm24-8h-6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2m-6-8v6h6V4z"></svg:path><svg:path fill="currentColor" d="M24 26h-8v-2h8v-7H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h10v2H8v7h16a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonDataRefineryReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDataRegularIcon],svg[carbon-data-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 24c-.462 0-.895.113-1.286.3l-4.829-4.83A5.96 5.96 0 0 0 22 16c0-3.309-2.692-6-6-6c-1.294 0-2.49.416-3.471 1.115L7.7 6.286C7.887 5.895 8 5.462 8 5a3 3 0 1 0-3 3c.462 0 .895-.113 1.286-.3l4.829 4.83A5.96 5.96 0 0 0 10 16c0 3.309 2.692 6 6 6c1.294 0 2.49-.416 3.47-1.115l4.83 4.829c-.187.391-.3.824-.3 1.286a3 3 0 1 0 3-3m-11-4c-2.206 0-4-1.794-4-4s1.794-4 4-4s4 1.794 4 4s-1.794 4-4 4"></svg:path>`,
})
export class CarbonDataRegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDataSetIcon],svg[carbon-data-set-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 12V3h-2v2h-3v2h3v5h-3v2h8v-2zM8.5 5C10.43 5 12 6.57 12 8.5S10.43 12 8.5 12S5 10.43 5 8.5S6.57 5 8.5 5m0-2a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11m0 17c1.93 0 3.5 1.57 3.5 3.5S10.43 27 8.5 27S5 25.43 5 23.5S6.57 20 8.5 20m0-2a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11m15 2c1.93 0 3.5 1.57 3.5 3.5S25.43 27 23.5 27S20 25.43 20 23.5s1.57-3.5 3.5-3.5m0-2a5.5 5.5 0 1 0 0 11a5.5 5.5 0 0 0 0-11"></svg:path>`,
})
export class CarbonDataSetIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDataShareIcon],svg[carbon-data-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 25v-9.172l-3.586 3.586L0 18l6-6l6 6l-1.414 1.414L7 15.828V25h12v2H7a2 2 0 0 1-2-2m19-3h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2m4 6v-4h-4.001L24 28zM27 6v9.172l3.586-3.586L32 13l-6 6l-6-6l1.414-1.414L25 15.172V6H13V4h12a2 2 0 0 1 2 2M2 6h6v2H2zm0-4h8v2H2z"></svg:path>`,
})
export class CarbonDataShareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDataStructuredIcon],svg[carbon-data-structured-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="9" cy="7" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M27 22.14V18a2 2 0 0 0-2-2h-8v-4h9a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h9v4H7a2 2 0 0 0-2 2v4.14a4 4 0 1 0 2 0V18h8v4h-3v8h8v-8h-3v-4h8v4.14a4 4 0 1 0 2 0M8 26a2 2 0 1 1-2-2a2 2 0 0 1 2 2m10-2v4h-4v-4ZM6 10V4h20v6Zm20 18a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonDataStructuredIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDataTableIcon],svg[carbon-data-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18h4v2H8zm6 0h4v2h-4zm-6-4h4v2H8zm6 8h4v2h-4zm6-8h4v2h-4zm0 8h4v2h-4z"></svg:path><svg:path fill="currentColor" d="M27 3H5a2.003 2.003 0 0 0-2 2v22a2.003 2.003 0 0 0 2 2h22a2.003 2.003 0 0 0 2-2V5a2.003 2.003 0 0 0-2-2m0 2v4H5V5ZM5 27V11h22v16Z"></svg:path>`,
})
export class CarbonDataTableIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDataTableReferenceIcon],svg[carbon-data-table-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8zm16 2h4v2h-4zm-4-4h4v2h-4zm4-4h4v2h-4zM8 14h4v2H8z"></svg:path><svg:path fill="currentColor" d="M27 3H5a2.003 2.003 0 0 0-2 2v11h2v-5h22v16H16v2h11a2.003 2.003 0 0 0 2-2V5a2.003 2.003 0 0 0-2-2m0 6H5V5h22Z"></svg:path>`,
})
export class CarbonDataTableReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDataUnrealIcon],svg[carbon-data-unreal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.496 18.132l-7-4a1 1 0 0 0-.992 0l-7 4A1 1 0 0 0 1 19v8a1 1 0 0 0 .504.868l7 4a1 1 0 0 0 .992 0l7-4A1 1 0 0 0 17 27v-8a1 1 0 0 0-.504-.868M9 16.152L13.984 19L9 21.848L4.016 19zm-6 4.571l5 2.857v5.697L3 26.42zm7 8.554V23.58l5-2.857v5.697zM28 19v5c0 1.103-.897 2-2 2h-3.172l1.586-1.586L23 23l-4 4l4 4l1.414-1.414L22.828 28H26c2.206 0 4-1.794 4-4v-5zm-10.496-3.989l-2-1.143A1 1 0 0 1 15 13v-2h2v1.42l1.496.855zm8-.593L24 15.277V13h-2v2.277l-1.504-.86l-.992 1.737l3 1.714a1 1 0 0 0 .992 0l3-1.714zm2.992.593l-.992-1.736L29 12.42V11h2v2a1 1 0 0 1-.504.868zm-3-6.285l-.992-1.737l-1.504.86l-1.504-.86l-.992 1.737L22 9.58V11h2V9.58zm5-4.594l-3-1.715l-.992 1.737l1.48.846l-1.48.846l.992 1.736L29 6.723V9h2V5a1 1 0 0 0-.504-.868m-5.992-1.12L23 2.151l-1.504.86l-.992-1.737l2-1.143a1 1 0 0 1 .992 0l2 1.143zm-5.008 1.142l-.992-1.736l-3 1.714A1 1 0 0 0 15 5v4h2V6.723l1.504.86l.992-1.737L18.016 5zM9 1L7.586 2.414L9.172 4H6C3.794 4 2 5.794 2 8v5h2V8c0-1.102.897-2 2-2h3.172L7.586 7.586L9 9l4-4z"></svg:path>`,
})
export class CarbonDataUnrealIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDataUnstructuredIcon],svg[carbon-data-unstructured-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 24a2 2 0 1 1-2 2a2 2 0 0 1 2-2m0-2a4 4 0 1 0 4 4a4 4 0 0 0-4-4M16 4a2 2 0 1 1-2 2a2 2 0 0 1 2-2m0-2a4 4 0 1 0 4 4a4 4 0 0 0-4-4m10 2a2 2 0 1 1-2 2a2 2 0 0 1 2-2m0-2a4 4 0 1 0 4 4a4 4 0 0 0-4-4m-8 22v4h-4v-4zm2-2h-8v8h8z"></svg:path><svg:path fill="currentColor" d="M27 22.14V17a2 2 0 0 0-2-2H7v-5h3V2H2v8h3v5a2 2 0 0 0 2 2h18v5.14a4 4 0 1 0 2 0M4 4h4v4H4Zm22 24a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonDataUnstructuredIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDataViewIcon],svg[carbon-data-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="22" cy="24" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M29.777 23.479A8.64 8.64 0 0 0 22 18a8.64 8.64 0 0 0-7.777 5.479L14 24l.223.522A8.64 8.64 0 0 0 22 30a8.64 8.64 0 0 0 7.777-5.478L30 24ZM22 28a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"></svg:path><svg:circle cx="8" cy="8" r="1" fill="currentColor"></svg:circle><svg:circle cx="8" cy="16" r="1" fill="currentColor"></svg:circle><svg:circle cx="8" cy="24" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M5 21h7v-2H5v-6h16v3h2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h7v-2H5ZM5 5h16v6H5Z"></svg:path>`,
})
export class CarbonDataViewIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDataViewAltIcon],svg[carbon-data-view-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="22" cy="24" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M29.777 23.479A8.64 8.64 0 0 0 22 18a8.64 8.64 0 0 0-7.777 5.479L14 24l.223.522A8.64 8.64 0 0 0 22 30a8.64 8.64 0 0 0 7.777-5.478L30 24zM22 28a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4M7 17h5v2H7zm0-5h12v2H7zm0-5h12v2H7z"></svg:path><svg:path fill="currentColor" d="M22 2H4a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h8v-2H4V4h18v11h2V4a2.006 2.006 0 0 0-2-2"></svg:path>`,
})
export class CarbonDataViewAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDataVis1Icon],svg[carbon-data-vis-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 22a3.96 3.96 0 0 0-2.02.567l-3.813-3.814a4.965 4.965 0 0 0 0-5.506l2.547-2.547A3.028 3.028 0 1 0 21.3 9.286l-2.547 2.547a4.965 4.965 0 0 0-5.506 0L9.433 8.019A3.96 3.96 0 0 0 10 6a4 4 0 1 0-4 4a3.96 3.96 0 0 0 2.02-.567l3.813 3.814a4.965 4.965 0 0 0 0 5.506l-3.814 3.814A3.96 3.96 0 0 0 6 22a4 4 0 1 0 4 4a3.96 3.96 0 0 0-.567-2.02l3.814-3.813a5 5 0 0 0 1.753.732v3.285a3 3 0 1 0 2 0v-3.285a5 5 0 0 0 1.753-.732l3.814 3.814A3.96 3.96 0 0 0 22 26a4 4 0 1 0 4-4m-10-9a3 3 0 1 1-3 3a3.003 3.003 0 0 1 3-3M4 6a2 2 0 1 1 2 2a2 2 0 0 1-2-2m2 22a2 2 0 1 1 2-2a2 2 0 0 1-2 2m20 0a2 2 0 1 1 2-2a2.003 2.003 0 0 1-2 2"></svg:path>`,
})
export class CarbonDataVis1Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDataVis2Icon],svg[carbon-data-vis-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2H17a2 2 0 0 0-2 2v6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-6h11a2.003 2.003 0 0 0 2-2V4a2 2 0 0 0-2-2m0 2v4H17V4ZM15 22H4v-4h11Zm2-12h11l.001 4H17Zm-2 2v4H4v-4ZM4 28v-4h11.001v4Zm13-8v-4h11.002v4Z"></svg:path>`,
})
export class CarbonDataVis2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDataVis3Icon],svg[carbon-data-vis-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 3a2.99 2.99 0 0 0-2.816 2h-3.326a3.98 3.98 0 0 0-7.716 0H9.858A3.992 3.992 0 1 0 5 9.858v4.284a3.98 3.98 0 0 0 0 7.716v3.326a3 3 0 1 0 2 0v-3.326a4 4 0 0 0 1.673-.903l3.364 1.682A3 3 0 0 0 12 23a3.012 3.012 0 1 0 .922-2.157l-3.148-1.574A4 4 0 0 0 10 18a3.996 3.996 0 0 0-3-3.858V9.858A4 4 0 0 0 9.858 7h4.284a3.937 3.937 0 0 0 4.782 2.882l1.811 3.17a3.045 3.045 0 1 0 1.733-.998L20.689 8.94A4 4 0 0 0 21.858 7h3.326A2.995 2.995 0 1 0 28 3M8 18a2 2 0 1 1-2-2a2 2 0 0 1 2 2M6 8a2 2 0 1 1 2-2a2 2 0 0 1-2 2m10-2a2 2 0 1 1 2 2a2 2 0 0 1-2-2"></svg:path>`,
})
export class CarbonDataVis3Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDataVis4Icon],svg[carbon-data-vis-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 3H5a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h22a2.003 2.003 0 0 0 2-2V5a2 2 0 0 0-2-2m0 6H17V5h10ZM15 27h-4v-4h4Zm0-6h-4v-4h4Zm-6 0H5v-4h4Zm2-6v-4h10v4Zm0-6V5h4v4Zm12 2h4v4h-4ZM9 5v10H5V5ZM5 23h4v4H5Zm12 4V17h10.001l.001 10Z"></svg:path>`,
})
export class CarbonDataVis4Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDataVolumeIcon],svg[carbon-data-volume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 20h-4v2h4v2h-3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h5v-8c0-1.103-.897-2-2-2m0 8h-3v-2h3zm-6-6v-2h-3v-2h-2v2h-2v2h2v6c0 1.103.898 2 2 2h3v-2h-3v-6zm-10-2h-4v2h4v2h-3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h5v-8c0-1.103-.897-2-2-2m0 8h-3v-2h3zM5 16v4H2c-1.102 0-2 .897-2 2v6c0 1.103.898 2 2 2h5V16zm-3 6h3v6H2zm2-8V5h7.586l4 4H28v8h2V9a2 2 0 0 0-2-2H16.414L13 3.586A2 2 0 0 0 11.586 3H4a2 2 0 0 0-2 2v9z"></svg:path>`,
})
export class CarbonDataVolumeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDataVolumeAltIcon],svg[carbon-data-volume-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 29c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3m0-4a1.001 1.001 0 0 0 0 2a1.001 1.001 0 0 0 0-2"></svg:path><svg:circle cx="20" cy="21" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M15 19c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3m0-4a1.001 1.001 0 0 0 0 2a1.001 1.001 0 0 0 0-2"></svg:path><svg:path fill="currentColor" d="M13 27H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.586A2 2 0 0 1 13 3.586L16.414 7H28a2 2 0 0 1 2 2v7h-2V9H15.586l-4-4H4v20h9z"></svg:path>`,
})
export class CarbonDataVolumeAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDatabaseDatastaxIcon],svg[carbon-database-datastax-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.868 22.068l1.794-1.747a4.22 4.22 0 0 0 3.288 1.632c1.403 0 2-.528 2-1.38c0-.69-.413-1.126-1.471-1.264l-1.196-.161c-2.575-.322-4-1.449-4-3.633c0-2.323 1.816-3.795 4.552-3.795a5.72 5.72 0 0 1 4.691 1.886l-1.725 1.724a3.97 3.97 0 0 0-2.874-1.287c-1.265 0-1.817.506-1.817 1.242c0 .804.437 1.172 1.564 1.356l1.219.161c2.621.368 3.886 1.541 3.886 3.541c0 2.323-1.955 3.933-4.944 3.933a6.1 6.1 0 0 1-4.967-2.208M4.24 7.95h5.84c4.186 0 6.922 2.69 6.922 8.025S14.266 24 10.082 24H4.24zm5.84 13.36c2.254 0 3.703-1.334 3.703-4.07v-2.53c0-2.736-1.449-4.07-3.702-4.07H7.276v10.67z"></svg:path>`,
})
export class CarbonDatabaseDatastaxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDatabaseElasticIcon],svg[carbon-database-elastic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.828 22.068l1.794-1.747a4.22 4.22 0 0 0 3.288 1.632c1.403 0 2-.528 2-1.38c0-.69-.414-1.126-1.472-1.264l-1.195-.161c-2.576-.322-4.001-1.449-4.001-3.633c0-2.323 1.816-3.795 4.553-3.795a5.72 5.72 0 0 1 4.69 1.886l-1.724 1.724a3.96 3.96 0 0 0-2.874-1.287c-1.265 0-1.817.506-1.817 1.242c0 .804.437 1.172 1.564 1.356l1.218.161c2.622.368 3.886 1.541 3.886 3.542c0 2.322-1.954 3.932-4.943 3.932a6.1 6.1 0 0 1-4.967-2.208M5.248 24V7.95h10.577v2.69H8.283v3.886h6.668v2.69H8.283v4.094h7.542V24z"></svg:path>`,
})
export class CarbonDatabaseElasticIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDatabaseEnterpriseDb2Icon],svg[carbon-database-enterprise-db2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.84 24V11.997h2.943v2h.115a3.31 3.31 0 0 1 3.357-2.277c2.46 0 3.84 1.702 3.84 4.691V24h-2.943v-7.29c0-1.701-.575-2.575-1.978-2.575c-1.218 0-2.391.644-2.391 1.932V24zM4.224 24V7.95h10.578v2.69H7.259v3.886h6.669v2.69H7.259v4.094h7.543V24z"></svg:path>`,
})
export class CarbonDatabaseEnterpriseDb2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDatabaseEnterprisedbIcon],svg[carbon-database-enterprisedb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.84 24V11.997h2.943v2h.115a3.31 3.31 0 0 1 3.357-2.277c2.46 0 3.84 1.702 3.84 4.691V24h-2.943v-7.29c0-1.701-.575-2.575-1.978-2.575c-1.218 0-2.391.644-2.391 1.932V24zM4.224 24V7.95h10.578v2.69H7.259v3.886h6.669v2.69H7.259v4.094h7.543V24z"></svg:path>`,
})
export class CarbonDatabaseEnterprisedbIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDatabaseEtcdIcon],svg[carbon-database-etcd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.944 20.942v-6.6h-1.77v-2.345h.92c.874 0 1.15-.414 1.15-1.242V8.708h2.644v3.289h2.46v2.345h-2.46v7.313h2.277V24h-2.116a2.778 2.778 0 0 1-3.105-3.058M6.684 24V7.95h10.579v2.69H9.72v3.886h6.669v2.69H9.72v4.094h7.543V24z"></svg:path>`,
})
export class CarbonDatabaseEtcdIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDatabaseMessagingIcon],svg[carbon-database-messaging-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 32l-1.755-1L24 27h4v-7H16v7h4v2h-4c-1.102 0-2-.897-2-2v-7c0-1.102.898-2 2-2h12c1.103 0 2 .898 2 2v7c0 1.103-.897 2-2 2h-3z"></svg:path><svg:path fill="currentColor" d="M13 2C7.702 2 2 3.252 2 6v18c0 2.403 4.362 3.663 9 3.94v-2c-4.534-.28-6.867-1.464-7-1.94v-3.571c1.707.856 4.306 1.344 7 1.506V19.94c-4.534-.28-6.867-1.465-7-1.94v-3.571C6.128 15.495 9.643 16 13 16c5.298 0 11-1.252 11-4V6c0-2.749-5.702-4-11-4M3.999 6.015C4.15 5.46 7.149 4 13 4c5.798 0 8.795 1.434 8.997 2c-.202.566-3.2 2-8.997 2c-5.85 0-8.85-1.46-9.001-1.985M22 11.987c-.16.557-3.159 2.013-9 2.013c-5.85 0-8.85-1.46-9-2V8.428C6.128 9.495 9.643 10 13 10s6.872-.505 9-1.572z"></svg:path>`,
})
export class CarbonDatabaseMessagingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDatabaseMongodbIcon],svg[carbon-database-mongodb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.348 28.875c-4.047 0-5.588-1.058-5.588-2.828a2.21 2.21 0 0 1 2.139-2.3v-.253a1.97 1.97 0 0 1-1.54-2c0-1.242 1.057-1.863 2.206-2.116v-.092a3.62 3.62 0 0 1-2.184-3.495c0-2.438 1.725-4.07 4.967-4.07a6.7 6.7 0 0 1 2.092.299v-.39a1.534 1.534 0 0 1 1.702-1.748h1.863v2.253h-2.553v.322a3.59 3.59 0 0 1 1.863 3.334c0 2.415-1.702 4.024-4.967 4.024a7.4 7.4 0 0 1-1.84-.207a1.23 1.23 0 0 0-.85 1.081c0 .598.506.897 1.564.897h3.218c2.943 0 4.208 1.265 4.208 3.426c0 2.506-1.7 3.863-6.3 3.863m1.495-4.737H22.75a1.47 1.47 0 0 0-.621 1.242c0 .92.69 1.471 2.53 1.471h1.471c1.909 0 2.76-.483 2.76-1.494c0-.76-.553-1.22-2.047-1.22m.667-8.163v-.391c0-1.219-.759-1.84-2.162-1.84s-2.161.62-2.161 1.84v.39c0 1.196.758 1.84 2.161 1.84s2.162-.644 2.162-1.84zM2.234 7.95H5.66l4.116 7.841h.092l4.07-7.841h3.29V24h-2.876V12.48h-.091l-1.242 2.552l-3.289 6.07l-3.288-6.07l-1.241-2.552h-.093V24H2.234z"></svg:path>`,
})
export class CarbonDatabaseMongodbIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDatabasePostgresqlIcon],svg[carbon-database-postgresql-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.98 28.875c-4.047 0-5.588-1.058-5.588-2.828a2.21 2.21 0 0 1 2.139-2.3v-.253a1.97 1.97 0 0 1-1.541-2c0-1.242 1.057-1.863 2.207-2.116v-.092a3.62 3.62 0 0 1-2.184-3.495c0-2.438 1.724-4.07 4.967-4.07a6.7 6.7 0 0 1 2.092.299v-.391a1.534 1.534 0 0 1 1.702-1.748h1.862v2.254h-2.552v.321a3.59 3.59 0 0 1 1.862 3.335c0 2.414-1.702 4.024-4.967 4.024a7.4 7.4 0 0 1-1.84-.207a1.23 1.23 0 0 0-.85 1.08c0 .599.506.897 1.563.897h3.22c2.943 0 4.208 1.265 4.208 3.427c0 2.506-1.702 3.863-6.3 3.863m1.494-4.737h-4.093a1.47 1.47 0 0 0-.621 1.242c0 .92.69 1.472 2.53 1.472h1.47c1.91 0 2.76-.483 2.76-1.495c0-.76-.551-1.22-2.046-1.22zm.667-8.163v-.391c0-1.219-.759-1.84-2.161-1.84s-2.162.62-2.162 1.84v.39c0 1.196.759 1.84 2.162 1.84s2.16-.644 2.16-1.84zM4.603 24V7.95h7.22c2.967 0 4.76 2 4.76 4.967c0 2.99-1.793 4.967-4.76 4.967H7.639V24zm3.036-8.738h3.909a1.69 1.69 0 0 0 1.885-1.817v-1.058a1.672 1.672 0 0 0-1.885-1.793h-3.91z"></svg:path>`,
})
export class CarbonDatabasePostgresqlIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDatabaseRabbitIcon],svg[carbon-database-rabbit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.943 20.735c0-2.46 1.863-3.68 5.128-3.68h2.047v-.873c0-1.334-.667-2.116-2.23-2.116a3.13 3.13 0 0 0-2.737 1.518l-1.748-1.564a5.05 5.05 0 0 1 4.691-2.3c3.242 0 4.967 1.54 4.967 4.277v5.657h1.196V24h-1.633a2.184 2.184 0 0 1-2.23-2.07h-.138c-.39 1.54-1.701 2.346-3.495 2.346c-2.438 0-3.818-1.403-3.818-3.541m7.175-.322v-1.587h-1.886c-1.54 0-2.3.529-2.3 1.472v.39c0 .966.667 1.45 1.817 1.45c1.311 0 2.369-.598 2.369-1.725M6.972 24H3.936V7.95h7.244c2.92 0 4.737 1.932 4.737 4.967a4.424 4.424 0 0 1-2.989 4.553L16.216 24h-3.38l-2.99-6.186H6.972zm3.909-8.738a1.69 1.69 0 0 0 1.886-1.817v-1.058a1.672 1.672 0 0 0-1.886-1.793H6.97v4.668z"></svg:path>`,
})
export class CarbonDatabaseRabbitIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDatabaseRedisIcon],svg[carbon-database-redis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.716 22H25.6a3.37 3.37 0 0 1-3.312 2.276c-3.012 0-4.69-2.276-4.69-6.3c0-4.001 1.678-6.255 4.69-6.255a3.305 3.305 0 0 1 3.312 2.254h.115v-6.99h2.943V24h-2.943zm0-2.116v-3.817c0-1.173-1.081-1.932-2.484-1.932a2.556 2.556 0 0 0-2.552 2.829v2.07a2.537 2.537 0 0 0 2.552 2.805c1.403 0 2.484-.713 2.484-1.955M6.558 24H3.522V7.95h7.244c2.92 0 4.737 1.932 4.737 4.967a4.424 4.424 0 0 1-2.99 4.553L15.802 24h-3.38l-2.99-6.186H6.558zm3.909-8.738a1.69 1.69 0 0 0 1.885-1.817v-1.058a1.672 1.672 0 0 0-1.885-1.793h-3.91v4.668z"></svg:path>`,
})
export class CarbonDatabaseRedisIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDatastoreIcon],svg[carbon-datastore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="23" cy="23" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M8 22h12v2H8z"></svg:path><svg:circle cx="23" cy="9" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M8 8h12v2H8z"></svg:path><svg:path fill="currentColor" d="M26 14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2v4H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-2v-4ZM6 6h20v6H6Zm20 20H6v-6h20Zm-4-8H10v-4h12Z"></svg:path>`,
})
export class CarbonDatastoreIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDb2BufferPoolIcon],svg[carbon-db2-buffer-pool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m26.338 31l-1.736-1l2.288-4H23l3.993-7l1.737 1l-2.284 4h3.89zM8 14h4v2H8zm12 0h4v2h-4zM8 18h4v2H8zm6 0h4v2h-4zm0 4h4v2h-4z"></svg:path><svg:path fill="currentColor" d="M5 11h22v5h2V5c0-1.102-.897-2-2-2H5c-1.103 0-2 .898-2 2v22c0 1.103.897 2 2 2h15v-2H5zm22-6v4H5V5z"></svg:path>`,
})
export class CarbonDb2BufferPoolIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDb2DataSharingGroupIcon],svg[carbon-db2-data-sharing-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 28v-6.17l2.59 2.58L12 23l-5-5l-5 5l1.41 1.41L6 21.83V28c0 1.103.897 2 2 2h9v-2zm17-11c-2.85 0-5 1.29-5 3v7c0 1.71 2.15 3 5 3s5-1.29 5-3v-7c0-1.71-2.15-3-5-3m0 2c1.936 0 3 .751 3 1s-1.064 1-3 1s-3-.751-3-1s1.064-1 3-1m0 9c-1.936 0-3-.751-3-1v-4.58c.826.363 1.85.58 3 .58s2.174-.217 3-.58V27c0 .249-1.064 1-3 1m3.59-20.41L26 10.17V4c0-1.102-.897-2-2-2h-9v2h9v6.17l-2.59-2.58L20 9l5 5l5-5zM7 15c2.85 0 5-1.29 5-3V5c0-1.71-2.15-3-5-3S2 3.29 2 5v7c0 1.71 2.15 3 5 3M7 4c1.936 0 3 .751 3 1S8.936 6 7 6s-3-.751-3-1s1.064-1 3-1M4 7.42c.826.363 1.85.58 3 .58s2.174-.217 3-.58V12c0 .249-1.064 1-3 1s-3-.751-3-1z"></svg:path>`,
})
export class CarbonDb2DataSharingGroupIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDb2DatabaseIcon],svg[carbon-db2-database-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 3C10.702 3 5 4.252 5 7v18c0 2.748 5.702 4 11 4s11-1.252 11-4V7c0-2.748-5.702-4-11-4m0 2c5.798 0 8.795 1.434 8.997 2c-.202.566-3.2 2-8.997 2c-5.841 0-8.84-1.456-9-1.982v-.005C7.16 6.456 10.159 5 16 5M7 9.428C9.128 10.495 12.643 11 16 11s6.872-.505 9-1.572v3.56c-.16.556-3.159 2.012-9 2.012c-5.85 0-8.85-1.46-9-2zm0 6C9.128 16.495 12.643 17 16 17s6.872-.505 9-1.572v3.56c-.16.556-3.159 2.012-9 2.012c-5.85 0-8.85-1.46-9-2zM16 27c-5.85 0-8.85-1.46-9-2v-3.572C9.128 22.495 12.643 23 16 23s6.872-.505 9-1.572v3.56c-.16.556-3.159 2.012-9 2.012"></svg:path>`,
})
export class CarbonDb2DatabaseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDebugIcon],svg[carbon-debug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m29.83 20l.34-2l-5.17-.85v-4.38l5.06-1.36l-.51-1.93l-4.83 1.29A9 9 0 0 0 20 5V2h-2v2.23a8.8 8.8 0 0 0-4 0V2h-2v3a9 9 0 0 0-4.71 5.82L2.46 9.48L2 11.41l5 1.36v4.38L1.84 18l.32 2L7 19.18a8.9 8.9 0 0 0 .82 3.57l-4.53 4.54l1.42 1.42l4.19-4.2a9 9 0 0 0 14.2 0l4.19 4.2l1.42-1.42l-4.54-4.54a8.9 8.9 0 0 0 .83-3.57ZM15 25.92A7 7 0 0 1 9 19v-6h6ZM9.29 11a7 7 0 0 1 13.42 0ZM23 19a7 7 0 0 1-6 6.92V13h6Z"></svg:path>`,
})
export class CarbonDebugIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDecisionNodeIcon],svg[carbon-decision-node-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2v8h-4l-8-8l-8 8H4V2H2v8c0 1.103.897 2 2 2h4l7 7v7.172l-2.586-2.586L11 25l5 5l5-5l-1.414-1.414L17 26.172V19l7-7h4c1.103 0 2-.897 2-2V2zM16 17.171L9.829 11L16 4.829L22.171 11z"></svg:path>`,
})
export class CarbonDecisionNodeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDecisionTreeIcon],svg[carbon-decision-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 12V4h-8v3h-4a2 2 0 0 0-2 2v6h-6v-3H2v8h8v-3h6v6a2 2 0 0 0 2 2h4v3h8v-8h-8v3h-4V9h4v3ZM8 18H4v-4h4Zm16 4h4v4h-4Zm0-16h4v4h-4Z"></svg:path>`,
})
export class CarbonDecisionTreeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDeleteIcon],svg[carbon-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 26H12a1 1 0 0 1-.707-.293l-9-9a1 1 0 0 1 0-1.414l9-9A1 1 0 0 1 12 6h17a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1m-16.586-2H28V8H12.414l-8 8z"></svg:path><svg:path fill="currentColor" d="M20.414 16L25 11.414L23.586 10L19 14.586L14.414 10L13 11.414L17.586 16L13 20.586L14.414 22L19 17.414L23.586 22L25 20.586z"></svg:path>`,
})
export class CarbonDeleteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDeliveryIcon],svg[carbon-delivery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 16h12v2H4zm-2-5h10v2H2z"></svg:path><svg:path fill="currentColor" d="m29.919 16.606l-3-7A1 1 0 0 0 26 9h-3V7a1 1 0 0 0-1-1H6v2h15v12.556A4 4 0 0 0 19.142 23h-6.284a4 4 0 1 0 0 2h6.284a3.98 3.98 0 0 0 7.716 0H29a1 1 0 0 0 1-1v-7a1 1 0 0 0-.081-.394M9 26a2 2 0 1 1 2-2a2 2 0 0 1-2 2m14-15h2.34l2.144 5H23Zm0 15a2 2 0 1 1 2-2a2 2 0 0 1-2 2m5-3h-1.142A3.995 3.995 0 0 0 23 20v-2h5Z"></svg:path>`,
})
export class CarbonDeliveryIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDeliveryAddIcon],svg[carbon-delivery-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6H8V2H6v4H2v2h4v4h2V8h4z"></svg:path><svg:path fill="currentColor" d="m29.919 16.606l-3-7A1 1 0 0 0 26 9h-3V7a1 1 0 0 0-1-1h-7v2h6v12.556A4 4 0 0 0 19.142 23h-6.284a3.98 3.98 0 0 0-7.716 0H4v-9H2v10a1 1 0 0 0 1 1h2.142a3.98 3.98 0 0 0 7.716 0h6.284a3.98 3.98 0 0 0 7.716 0H29a1 1 0 0 0 1-1v-7a1 1 0 0 0-.081-.394M9 26a2 2 0 1 1 2-2a2.003 2.003 0 0 1-2 2m14-15h2.34l2.144 5H23Zm0 15a2 2 0 1 1 2-2a2 2 0 0 1-2 2m5-3h-1.142A3.995 3.995 0 0 0 23 20v-2h5Z"></svg:path>`,
})
export class CarbonDeliveryAddIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDeliveryParcelIcon],svg[carbon-delivery-parcel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m29.482 8.624l-10-5.5a1 1 0 0 0-.964 0l-10 5.5a1 1 0 0 0 0 1.752L18 15.591V26.31l-3.036-1.67L14 26.391l4.518 2.485a1 1 0 0 0 .964 0l10-5.5A1 1 0 0 0 30 22.5v-13a1 1 0 0 0-.518-.876M19 5.142L26.925 9.5L19 13.858L11.075 9.5Zm9 16.767l-8 4.4V15.59l8-4.4Z"></svg:path><svg:path fill="currentColor" d="M10 16H2v-2h8zm2 8H4v-2h8zm2-4H6v-2h8z"></svg:path>`,
})
export class CarbonDeliveryParcelIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDeliverySettingsIcon],svg[carbon-delivery-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m29.919 18.606l-3-7A1 1 0 0 0 26 11h-3V9a1 1 0 0 0-1-1h-3v2h2v12.556A4 4 0 0 0 19.142 25h-6.284c-.447-1.72-2-3-3.858-3s-3.41 1.28-3.858 3H4v-8H2v9a1 1 0 0 0 1 1h2.142c.447 1.72 2 3 3.858 3s3.41-1.28 3.858-3h6.284c.447 1.72 2 3 3.858 3s3.41-1.28 3.858-3H29a1 1 0 0 0 1-1v-7c0-.14-.03-.272-.081-.394M9 28c-1.102 0-2-.897-2-2s.898-2 2-2s2 .898 2 2s-.897 2-2 2m14-15h2.34l2.144 5H23zm0 15c-1.103 0-2-.897-2-2s.897-2 2-2s2 .898 2 2s-.897 2-2 2m5-3h-1.142c-.447-1.72-2-3-3.858-3v-2h5zM4.833 11.753l-1.49 1.49l1.414 1.414l1.49-1.49A5 5 0 0 0 8 13.899V16h2v-2.1a5 5 0 0 0 1.753-.732l1.49 1.49l1.414-1.414l-1.49-1.49A5 5 0 0 0 13.899 10H16V8h-2.101a5 5 0 0 0-.732-1.753l1.49-1.49l-1.414-1.414l-1.49 1.49A5 5 0 0 0 10 4.101V2H8v2.101a5 5 0 0 0-1.753.732l-1.49-1.49l-1.414 1.414l1.49 1.49A5 5 0 0 0 4.101 8H2v2h2.101c.129.626.378 1.221.732 1.753M9 6a3 3 0 1 1 0 6a3 3 0 0 1 0-6"></svg:path>`,
})
export class CarbonDeliverySettingsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDeliveryTruckIcon],svg[carbon-delivery-truck-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m29.92 16.61l-3-7A1 1 0 0 0 26 9h-3V7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v17a1 1 0 0 0 1 1h2.14a4 4 0 0 0 7.72 0h6.28a4 4 0 0 0 7.72 0H29a1 1 0 0 0 1-1v-7a1 1 0 0 0-.08-.39M23 11h2.34l2.14 5H23ZM9 26a2 2 0 1 1 2-2a2 2 0 0 1-2 2m10.14-3h-6.28a4 4 0 0 0-7.72 0H4V8h17v12.56A4 4 0 0 0 19.14 23M23 26a2 2 0 1 1 2-2a2 2 0 0 1-2 2m5-3h-1.14A4 4 0 0 0 23 20v-2h5Z"></svg:path>`,
})
export class CarbonDeliveryTruckIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDemoIcon],svg[carbon-demo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 2v12l10-6z"></svg:path><svg:path fill="currentColor" d="M28 14v8H4V6h10V4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v4H8v2h16v-2h-4v-4h8a2 2 0 0 0 2-2v-8zM18 28h-4v-4h4z"></svg:path>`,
})
export class CarbonDemoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDenominateIcon],svg[carbon-denominate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M25 23h-6a3 3 0 0 0-3 3v2h2v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h2v-2a3 3 0 0 0-3-3z" fill="currentColor"></svg:path><svg:path d="M18 18a4 4 0 1 0 4-4a4 4 0 0 0-4 4zm6 0a2 2 0 1 1-2-2a2 2 0 0 1 2 2z" fill="currentColor"></svg:path><svg:path d="M15 15.415L13.586 14L11 16.587L8.414 14L7 15.415L9.586 18L7 20.586L8.414 22L11 19.414L13.586 22L15 20.586L12.414 18L15 15.415z" fill="currentColor"></svg:path><svg:path d="M14 26H4V6h7.172l3.414 3.414l.586.586H28v8h2v-8a2 2 0 0 0-2-2H16l-3.414-3.414A2 2 0 0 0 11.172 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h10z" fill="currentColor"></svg:path>`,
})
export class CarbonDenominateIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDepartureIcon],svg[carbon-departure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 28h28v2H2zM13.48 5.15l5.69 8.14l.8 1.15l1.35-.36l4.52-1.21a2.13 2.13 0 0 1 1.12 0A1.84 1.84 0 0 1 28.23 14A1.87 1.87 0 0 1 27 16.45l-18.71 5a1.8 1.8 0 0 1-1 0A1.87 1.87 0 0 1 6 20.12l-.25-.93L5 16.38l-.74-2.74l1.44-.39l2.3 3.1l.81 1.08l1.31-.35l2.8-.75l1.94-.52l-.52-1.93l-2.26-8.36zM14.16 3a1.06 1.06 0 0 0-.5 0l-3.09.83A1 1 0 0 0 9.89 5l2.5 9.36l-2.81.75l-2.73-3.61a1 1 0 0 0-.52-.36a1.06 1.06 0 0 0-.5 0L2.72 12A1 1 0 0 0 2 13.16l1 3.74l.75 2.8l.25.94a3.87 3.87 0 0 0 2.74 2.74a3.9 3.9 0 0 0 2 0l18.7-5a3.84 3.84 0 0 0 0-7.44a4.27 4.27 0 0 0-2.16 0l-4.51 1.21l-6.07-8.74a1 1 0 0 0-.54-.41"></svg:path>`,
})
export class CarbonDepartureIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDeployIcon],svg[carbon-deploy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 2l-6 6l1.415 1.402L22 5.818V28H6V12H4v16a2.003 2.003 0 0 0 2 2h16a2.003 2.003 0 0 0 2-2V5.815l3.586 3.587L29 8Z"></svg:path><svg:path fill="currentColor" d="M16 24h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m-4-6v4h4v-4Z"></svg:path>`,
})
export class CarbonDeployIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDeployRulesIcon],svg[carbon-deploy-rules-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 4l-6 6l1.41 1.41L17 7.83V20h2V7.83l3.59 3.58L24 10zM8 18h7v2H8zm0 4h16v2H8zm0 4h16v2H8z"></svg:path>`,
})
export class CarbonDeployRulesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDeploymentPatternIcon],svg[carbon-deployment-pattern-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 20H4.73A1.97 1.97 0 0 0 3 19a2 2 0 0 0 0 4a1.97 1.97 0 0 0 1.73-1H8zM29 9a1.97 1.97 0 0 0-1.73 1H24v2h3.27A2 2 0 1 0 29 9"></svg:path><svg:path fill="currentColor" d="M25.414 5L21 .586L16.586 5L20 8.414V18h2V8.414zM21 3.414L22.586 5L21 6.586L19.414 5zm-9 20.172V14h-2v9.586L6.586 27L11 31.414L15.414 27zM9.414 27L11 25.414L12.586 27L11 28.586z"></svg:path><svg:path fill="currentColor" d="M18 10H8.414L5 6.586L.586 11L5 15.414L8.414 12H18ZM5 12.586L3.414 11L5 9.414L6.586 11Z"></svg:path><svg:path fill="currentColor" d="M13 3a2 2 0 0 0-4 0a1.97 1.97 0 0 0 1 1.73V8h2V4.73A1.97 1.97 0 0 0 13 3m9 24.27V24h-2v3.27a2 2 0 1 0 2 0"></svg:path><svg:path fill="currentColor" d="M31.414 21L27 16.586L23.586 20H14v2h9.586L27 25.414ZM27 19.414L28.586 21L27 22.586L25.414 21Z"></svg:path>`,
})
export class CarbonDeploymentPatternIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDeploymentPolicyIcon],svg[carbon-deployment-policy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 16v-2h7.171l-2.293-2.293l1.414-1.414L30 15l-4.708 4.707l-1.414-1.414L26.171 16zm-2-4h-2V5.828l-2.293 2.293l-1.414-1.414L16 2l4.707 4.707l-1.414 1.414L17 5.828zm0 8.101V18a4.005 4.005 0 0 0-4-4H5.828l2.293-2.293l-1.414-1.414L2 15l4.707 4.707l1.414-1.414L5.828 16H13a2.003 2.003 0 0 1 2 2v2.101a5 5 0 1 0 2 0M16 28a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3"></svg:path>`,
})
export class CarbonDeploymentPolicyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDeploymentUnitDataIcon],svg[carbon-deployment-unit-data-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 23h-4V9h4a4.005 4.005 0 0 1 4 4v6a4.004 4.004 0 0 1-4 4m-2-2h2a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-2Z"></svg:path>`,
})
export class CarbonDeploymentUnitDataIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDeploymentUnitExecutionIcon],svg[carbon-deployment-unit-execution-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 11V9h-8v14h8v-2h-6v-4h5v-2h-5v-4z"></svg:path>`,
})
export class CarbonDeploymentUnitExecutionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDeploymentUnitInstallationIcon],svg[carbon-deployment-unit-installation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 11h3v10h-3v2h8v-2h-3V11h3V9h-8z"></svg:path>`,
})
export class CarbonDeploymentUnitInstallationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDeploymentUnitPresentationIcon],svg[carbon-deployment-unit-presentation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 23h-2V9h6a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-4Zm0-7h4v-5h-4Z"></svg:path>`,
})
export class CarbonDeploymentUnitPresentationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDeploymentUnitTechnicalDataIcon],svg[carbon-deployment-unit-technical-data-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 23h-4V9h4a4.005 4.005 0 0 1 4 4v6a4.004 4.004 0 0 1-4 4m-2-2h2a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-2zM7 11h3v12h2V11h3V9H7z"></svg:path>`,
})
export class CarbonDeploymentUnitTechnicalDataIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDeploymentUnitTechnicalExecutionIcon],svg[carbon-deployment-unit-technical-execution-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 11V9h-8v14h8v-2h-6v-4h5v-2h-5v-4zM7 11h3v12h2V11h3V9H7z"></svg:path>`,
})
export class CarbonDeploymentUnitTechnicalExecutionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDeploymentUnitTechnicalInstallationIcon],svg[carbon-deployment-unit-technical-installation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 11h3v10h-3v2h8v-2h-3V11h3V9h-8zM7 11h3v12h2V11h3V9H7z"></svg:path>`,
})
export class CarbonDeploymentUnitTechnicalInstallationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDeploymentUnitTechnicalPresentationIcon],svg[carbon-deployment-unit-technical-presentation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 23h-2V9h6a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-4zm0-7h4v-5.001h-4zM7 11h3v12h2V11h3V9H7z"></svg:path>`,
})
export class CarbonDeploymentUnitTechnicalPresentationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDeskAdjustableIcon],svg[carbon-desk-adjustable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 27.172V22h-2v5.172l-2.586-2.586L11 26l5 5l5-5l-1.414-1.414z"></svg:path><svg:path fill="currentColor" d="M30 12H2v8h2v10h2V20h20v10h2V20h2zm-2 6H4v-4h24zM15 4.828V10h2V4.828l2.586 2.586L21 6l-5-5l-5 5l1.414 1.414z"></svg:path>`,
})
export class CarbonDeskAdjustableIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDevelopmentIcon],svg[carbon-development-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 4v4H4V4zM2 2v8h8V2zm16 5v4h-4V7zm-6-2v8h8V5zM8 16v4H4v-4zm-6-2v8h8v-8z"></svg:path><svg:path fill="currentColor" d="M22 10v6h-6v6h-6v8h20V10Zm-4 8h4v4h-4Zm-2 10h-4v-4h4Zm6 0h-4v-4h4Zm6 0h-4v-4h4Zm0-6h-4v-4h4Zm-4-6v-4h4v4Z"></svg:path>`,
})
export class CarbonDevelopmentIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDevicesIcon],svg[carbon-devices-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 30H4a2 2 0 0 1-2-2V16a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2M4 16v12h6V16Z"></svg:path><svg:path fill="currentColor" d="M28 4H6a2 2 0 0 0-2 2v6h2V6h22v14H14v2h2v4h-2v2h9v-2h-5v-4h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonDevicesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDevicesAppsIcon],svg[carbon-devices-apps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 2h4v4h-4zm0 6h4v4h-4zm-6-6h4v4h-4zm0 6h4v4h-4zm8 12H14v2h2v4h-2v2h9v-2h-5v-4h10a2 2 0 0 0 2-2v-6h-2zM6 6h12V4H6a2 2 0 0 0-2 2v6h2zm4 8H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2m0 14H4V16h6z"></svg:path>`,
})
export class CarbonDevicesAppsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDewPointIcon],svg[carbon-dew-point-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 10a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2m-9.5 26A5.496 5.496 0 0 1 9 24.52c0-3.443 4.344-21.014 4.53-21.76a1 1 0 0 1 1.94 0c.186.746 4.53 18.317 4.53 21.76A5.496 5.496 0 0 1 14.5 30m0-22.756C13.04 13.38 11 22.409 11 24.52a3.5 3.5 0 0 0 7 0c0-2.111-2.04-11.14-3.5-17.276"></svg:path>`,
})
export class CarbonDewPointIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDewPointFilledIcon],svg[carbon-dew-point-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 10a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2m-9.5 26A5.496 5.496 0 0 1 9 24.52c0-3.443 4.344-21.014 4.53-21.76a1 1 0 0 1 1.94 0c.186.746 4.53 18.317 4.53 21.76A5.496 5.496 0 0 1 14.5 30"></svg:path>`,
})
export class CarbonDewPointFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDiagramIcon],svg[carbon-diagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 30a11 11 0 0 1 0-22a1 1 0 0 1 1 1v9h9a1 1 0 0 1 1 1a11 11 0 0 1-11 11m-1-19.94A9 9 0 1 0 21.94 20H14a2 2 0 0 1-2-2Z"></svg:path><svg:path fill="currentColor" d="M28 14h-9a2 2 0 0 1-2-2V3a1 1 0 0 1 1-1a11 11 0 0 1 11 11a1 1 0 0 1-1 1m-9-2h7.94A9 9 0 0 0 19 4.06Z"></svg:path>`,
})
export class CarbonDiagramIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDiagramReferenceIcon],svg[carbon-diagram-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8z"></svg:path><svg:path fill="currentColor" d="M15 28v-2a9.013 9.013 0 0 0 8.945-8H16a2 2 0 0 1-2-2V8.055A9.013 9.013 0 0 0 6 17H4A11.013 11.013 0 0 1 15 6a1 1 0 0 1 1 1v9h9a1 1 0 0 1 1 1a11.013 11.013 0 0 1-11 11"></svg:path><svg:path fill="currentColor" d="M29.006 14h-9.011A1.996 1.996 0 0 1 18 12V3a1.01 1.01 0 0 1 1.02-1A11.013 11.013 0 0 1 30 12.98a1.004 1.004 0 0 1-.994 1.02M20 12h7.945A9.02 9.02 0 0 0 20 4.055Z"></svg:path>`,
})
export class CarbonDiagramReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDiamondOutlineIcon],svg[carbon-diamond-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.39 14.527L17.474 2.609C17.067 2.203 16.533 2 16 2s-1.067.203-1.473.61L2.609 14.526C2.203 14.933 2 15.467 2 16s.203 1.067.61 1.473l11.917 11.918c.406.406.94.609 1.473.609s1.067-.203 1.473-.61l11.918-11.917c.406-.406.609-.94.609-1.473s-.203-1.067-.61-1.473M16 28.036L3.965 16L16 3.964L28.036 16z"></svg:path>`,
})
export class CarbonDiamondOutlineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDiamondSolidIcon],svg[carbon-diamond-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.39 14.527L17.474 2.609C17.067 2.203 16.533 2 16 2s-1.067.203-1.473.61L2.609 14.526C2.203 14.933 2 15.467 2 16s.203 1.067.61 1.473l11.917 11.918c.406.406.94.609 1.473.609s1.067-.203 1.473-.61l11.918-11.917c.406-.406.609-.94.609-1.473s-.203-1.067-.61-1.473"></svg:path>`,
})
export class CarbonDiamondSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDicom6000Icon],svg[carbon-dicom-6000-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M13 11H7a3 3 0 0 0-3 3v2h2v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h2v-2a3 3 0 0 0-3-3z" fill="currentColor"></svg:path><svg:path d="M10 10a4 4 0 1 0-4-4a4 4 0 0 0 4 4zm0-6a2 2 0 1 1-2 2a2 2 0 0 1 2-2z" fill="currentColor"></svg:path><svg:path d="M20 4h10v2H20z" fill="currentColor"></svg:path><svg:path d="M20 8h10v2H20z" fill="currentColor"></svg:path><svg:path d="M20 12h6v2h-6z" fill="currentColor"></svg:path><svg:path d="M5 30H3a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h3v2H3v2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2zm-2-4v2h2v-2z" fill="currentColor"></svg:path><svg:path d="M13 30h-2a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2zm-2-8v6h2v-6z" fill="currentColor"></svg:path><svg:path d="M21 30h-2a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2zm-2-8v6h2v-6z" fill="currentColor"></svg:path><svg:path d="M29 30h-2a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2zm-2-8v6h2v-6z" fill="currentColor"></svg:path>`,
})
export class CarbonDicom6000Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDicomOverlayIcon],svg[carbon-dicom-overlay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M28 6v20H4V6h24m0-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z" fill="currentColor"></svg:path><svg:path d="M6 8h10v2H6z" fill="currentColor"></svg:path><svg:path d="M6 12h10v2H6z" fill="currentColor"></svg:path><svg:path d="M6 16h6v2H6z" fill="currentColor"></svg:path>`,
})
export class CarbonDicomOverlayIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDirectLinkIcon],svg[carbon-direct-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.413 14.584l-7.997-7.997a2 2 0 0 0-2.832 0l-7.997 7.997a2 2 0 0 0 0 2.832l3.291 3.292L3 22.586L4.414 24l1.879-1.878l3.291 3.291a2 2 0 0 0 2.832 0l2.256-2.256l-1.416-1.415l-2.258 2.257l-7.997-7.997l7.997-8.001l8.001 8.001L17.5 17.5l1.415 1.415l1.498-1.499a2 2 0 0 0 0-2.832"></svg:path><svg:path fill="currentColor" d="m30.413 14.584l-3.291-3.291L29 9.414L27.586 8l-1.878 1.878l-3.292-3.291a2 2 0 0 0-2.832 0l-2.256 2.256l1.415 1.414l2.255-2.256l8.001 8.001l-8.001 7.997l-7.997-7.997l1.5-1.501l-1.416-1.416l-1.498 1.499a2 2 0 0 0 0 2.832l7.997 7.997a2 2 0 0 0 2.832 0l7.997-7.997a2 2 0 0 0 0-2.832"></svg:path>`,
})
export class CarbonDirectLinkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionBearRight01Icon],svg[carbon-direction-bear-right-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4v2h6.586l-6.536 6.536a6.95 6.95 0 0 0-2.05 4.95V28h2V17.485a4.97 4.97 0 0 1 1.464-3.535L20 7.414V14h2V4Z"></svg:path>`,
})
export class CarbonDirectionBearRight01Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionBearRight01FilledIcon],svg[carbon-direction-bear-right-01-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-6 14h-2V9.414l-6.536 6.536A4.97 4.97 0 0 0 12 19.485V26h-2v-6.515a6.95 6.95 0 0 1 2.05-4.95L18.586 8H12V6h10Z"></svg:path><svg:path fill="none" d="M22 16h-2V9.414l-6.536 6.536A4.97 4.97 0 0 0 12 19.485V26h-2v-6.515a6.95 6.95 0 0 1 2.05-4.95L18.586 8H12V6h10Z"></svg:path>`,
})
export class CarbonDirectionBearRight01FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionBearRight02Icon],svg[carbon-direction-bear-right-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4v2h6.586l-6.536 6.536a6.95 6.95 0 0 0-2.05 4.95V28h2V17.485a4.97 4.97 0 0 1 1.464-3.535L24 7.414V14h2V4ZM6 7.414L7.414 6L13 11.586L11.586 13z"></svg:path>`,
})
export class CarbonDirectionBearRight02Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionBearRight02FilledIcon],svg[carbon-direction-bear-right-02-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M6 7.414L7.414 6L14 12.586L12.586 14ZM26 16h-2V9.414l-6.536 6.536A4.97 4.97 0 0 0 16 19.485V26h-2v-6.515a6.95 6.95 0 0 1 2.05-4.95L22.586 8H16V6h10Z"></svg:path><svg:path fill="none" d="M26 6v10h-2V9.414l-6.536 6.536A4.97 4.97 0 0 0 16 19.485V26h-2v-6.515a6.95 6.95 0 0 1 2.05-4.95L22.586 8H16V6Zm-12 6.586L7.414 6L6 7.414L12.586 14Z"></svg:path>`,
})
export class CarbonDirectionBearRight02FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionCurveIcon],svg[carbon-direction-curve-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17 4l-7 7l1.414 1.414L16 7.828v6.769a3 3 0 0 1-.657 1.874l-2.247 2.808A5.02 5.02 0 0 0 12 22.403V28h2v-5.597a3 3 0 0 1 .657-1.874l2.247-2.808A5.02 5.02 0 0 0 18 14.597V7.828l4.586 4.586L24 11Z"></svg:path>`,
})
export class CarbonDirectionCurveIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionCurveFilledIcon],svg[carbon-direction-curve-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-5.414 11.414L18 8.828v5.769a5.02 5.02 0 0 1-1.096 3.124l-2.247 2.808A3 3 0 0 0 14 22.403V27h-2v-4.597a5.02 5.02 0 0 1 1.096-3.124l2.247-2.808A3 3 0 0 0 16 14.597V8.828l-4.586 4.586L10 12l7-7l7 7Z"></svg:path><svg:path fill="none" d="M22.586 13.414L18 8.828v5.769a5.02 5.02 0 0 1-1.096 3.124l-2.247 2.808A3 3 0 0 0 14 22.403V27h-2v-4.597a5.02 5.02 0 0 1 1.096-3.124l2.247-2.808A3 3 0 0 0 16 14.597V8.828l-4.586 4.586L10 12l7-7l7 7Z"></svg:path>`,
})
export class CarbonDirectionCurveFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionForkIcon],svg[carbon-direction-fork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 13V7.414l9 9V28h2V16.414l9-9V13h2V4h-9v2h5.586L16 14.586L7.414 6H13V4H4v9z"></svg:path>`,
})
export class CarbonDirectionForkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionForkFilledIcon],svg[carbon-direction-fork-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M8 14V9.414l7 7V26h2v-9.586l7-7V14h2V6h-8v2h4.586L16 14.586L9.414 8H14V6H6v8z"></svg:path><svg:path fill="currentColor" d="M28 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-2 12h-2V9.414l-7 7V26h-2v-9.586l-7-7V14H6V6h8v2H9.414L16 14.586L22.586 8H18V6h8Z"></svg:path>`,
})
export class CarbonDirectionForkFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionLoopLeftIcon],svg[carbon-direction-loop-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 20h2v8h-2z"></svg:path><svg:path fill="currentColor" d="M23 4a7.01 7.01 0 0 0-7 7v3h2v-3a5 5 0 1 1 5 5H5.828l4.586-4.586L9 10l-7 7l7 7l1.414-1.414L5.828 18H23a7 7 0 0 0 0-14"></svg:path>`,
})
export class CarbonDirectionLoopLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionLoopLeftFilledIcon],svg[carbon-direction-loop-left-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M16 18h2v8h-2ZM4 15l7 7l1.414-1.414L7.828 16H21a5 5 0 1 0-5-5v1h2v-1a3 3 0 1 1 3 3H7.828l4.586-4.586L11 8Z"></svg:path><svg:path fill="currentColor" d="M2 4v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2m14 14h2v8h-2ZM4 15l7-7l1.414 1.414L7.828 14H21a3 3 0 1 0-3-3v1h-2v-1a5 5 0 1 1 5 5H7.828l4.586 4.586L11 22Z"></svg:path>`,
})
export class CarbonDirectionLoopLeftFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionLoopRightIcon],svg[carbon-direction-loop-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 20h2v8h-2z"></svg:path><svg:path fill="currentColor" d="M9 4a7.01 7.01 0 0 1 7 7v3h-2v-3a5 5 0 1 0-5 5h17.172l-4.586-4.586L23 10l7 7l-7 7l-1.414-1.414L26.172 18H9A7 7 0 0 1 9 4"></svg:path>`,
})
export class CarbonDirectionLoopRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionLoopRightFilledIcon],svg[carbon-direction-loop-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M16 26h-2v-8h2Zm5-18l-1.414 1.414L24.172 14H11a3 3 0 1 1 3-3v1h2v-1a5 5 0 1 0-5 5h13.172l-4.586 4.586L21 22l7-7Z"></svg:path><svg:path fill="currentColor" d="M28 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M16 26h-2v-8h2Zm5-4l-1.414-1.414L24.172 16H11a5 5 0 1 1 5-5v1h-2v-1a3 3 0 1 0-3 3h13.172l-4.586-4.586L21 8l7 7Z"></svg:path>`,
})
export class CarbonDirectionLoopRightFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionMergeIcon],svg[carbon-direction-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.878 15.465A2.98 2.98 0 0 1 17 13.343V7.828l4.586 4.586L23 11l-7-7l-7 7l1.414 1.414L15 7.828v5.515a2.98 2.98 0 0 1-.878 2.121l-2.658 2.657A4.97 4.97 0 0 0 10 21.657V28h2v-6.343a2.98 2.98 0 0 1 .878-2.121l2.658-2.657a5 5 0 0 0 .464-.566a5 5 0 0 0 .464.566l2.658 2.656A2.98 2.98 0 0 1 20 21.657V28h2v-6.343a4.97 4.97 0 0 0-1.464-3.536Z"></svg:path>`,
})
export class CarbonDirectionMergeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionMergeFilledIcon],svg[carbon-direction-merge-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M17.878 15.465l2.658 2.656A4.97 4.97 0 0 1 22 21.657V26h-2v-4.343a2.98 2.98 0 0 0-.878-2.122l-2.658-2.656a5 5 0 0 1-.464-.566a5 5 0 0 1-.464.566l-2.658 2.657a2.98 2.98 0 0 0-.878 2.12V26h-2v-4.343a4.97 4.97 0 0 1 1.464-3.536l2.658-2.657a2.98 2.98 0 0 0 .878-2.12V8.827l-4.586 4.586L9 12l7-7l7 7l-1.414 1.414L17 8.828v4.515a2.98 2.98 0 0 0 .878 2.122"></svg:path><svg:path fill="none" d="m17.878 15.465l2.658 2.656A4.97 4.97 0 0 1 22 21.657V26h-2v-4.343a2.98 2.98 0 0 0-.878-2.122l-2.658-2.656a5 5 0 0 1-.464-.566a5 5 0 0 1-.464.566l-2.658 2.657a2.98 2.98 0 0 0-.878 2.12V26h-2v-4.343a4.97 4.97 0 0 1 1.464-3.536l2.658-2.657a2.98 2.98 0 0 0 .878-2.12V8.827l-4.586 4.586L9 12l7-7l7 7l-1.414 1.414L17 8.828v4.515a2.98 2.98 0 0 0 .878 2.122"></svg:path>`,
})
export class CarbonDirectionMergeFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionRight01Icon],svg[carbon-direction-right-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 4l-1.414 1.414L22.172 10H10a2 2 0 0 0-2 2v16h2V12h12.172l-4.586 4.586L19 18l7-7Z"></svg:path>`,
})
export class CarbonDirectionRight01Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionRight01FilledIcon],svg[carbon-direction-right-01-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-9 16l-1.414-1.414L22.172 12H10v14H8V12a2 2 0 0 1 2-2h12.172l-4.586-4.586L19 4l7 7Z"></svg:path><svg:path fill="none" d="m19 18l-1.414-1.414L22.172 12H10v14H8V12a2 2 0 0 1 2-2h12.172l-4.586-4.586L19 4l7 7Z"></svg:path>`,
})
export class CarbonDirectionRight01FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionRight02Icon],svg[carbon-direction-right-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 8l-1.414 1.414L22.172 14H10a2 2 0 0 0-2 2v12h2V16h12.172l-4.586 4.586L19 22l7-7zM8 4h2v8H8z"></svg:path>`,
})
export class CarbonDirectionRight02Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionRight02FilledIcon],svg[carbon-direction-right-02-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M8 6h2v8H8Zm11 18l-1.414-1.414L22.172 18H10v8H8v-8a2 2 0 0 1 2-2h12.172l-4.586-4.586L19 10l7 7Z"></svg:path><svg:path fill="none" d="M8 6h2v8H8Zm11 18l-1.414-1.414L22.172 18H10v8H8v-8a2 2 0 0 1 2-2h12.172l-4.586-4.586L19 10l7 7Z"></svg:path>`,
})
export class CarbonDirectionRight02FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionRotaryFirstRightIcon],svg[carbon-direction-rotary-first-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 18v6.586L15.871 14.457A5.92 5.92 0 0 0 17 11a6 6 0 1 0-7 5.91V28h2V16.91a5.96 5.96 0 0 0 2.455-1.04L24.585 26H18v2h10V18Zm-15-3a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"></svg:path>`,
})
export class CarbonDirectionRotaryFirstRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionRotaryFirstRightFilledIcon],svg[carbon-direction-rotary-first-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="11" cy="11" r="3" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M28 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-2 24H16v-2h6.586l-8.833-8.833a5 5 0 0 1-1.753.732V26h-2V15.899a5.011 5.011 0 1 1 5.167-2.146L24 22.586V16h2Z"></svg:path><svg:path fill="none" d="M11 14a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3m13 2v6.586l-8.833-8.833A4.996 4.996 0 1 0 10 15.899V26h2V15.899a5 5 0 0 0 1.753-.732L22.586 24H16v2h10V16Z"></svg:path>`,
})
export class CarbonDirectionRotaryFirstRightFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionRotaryRightIcon],svg[carbon-direction-rotary-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 4l-1.414 1.414L25.172 10H16.91A5.997 5.997 0 1 0 10 16.91V28h2V16.91A6.01 6.01 0 0 0 16.91 12h8.262l-4.586 4.586L22 18l7-7ZM11 15a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"></svg:path>`,
})
export class CarbonDirectionRotaryRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionRotaryRightFilledIcon],svg[carbon-direction-rotary-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="11" cy="11" r="3" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M28 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-8 16l-1.414-1.414L23.172 12h-7.273A5.01 5.01 0 0 1 12 15.899V26h-2V15.899A5 5 0 1 1 15.899 10h7.273l-4.586-4.586L20 4l7 7Z"></svg:path><svg:path fill="none" d="m20 4l-1.414 1.414L23.172 10h-7.273A5 5 0 1 0 10 15.899V26h2V15.899A5.01 5.01 0 0 0 15.899 12h7.273l-4.586 4.586L20 18l7-7Zm-9 10a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3"></svg:path>`,
})
export class CarbonDirectionRotaryRightFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionRotaryStraightIcon],svg[carbon-direction-rotary-straight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 12.09V5.828l4.586 4.586L23 9l-7-7l-7 7l1.414 1.414L15 5.828v6.262a5.993 5.993 0 0 0 0 11.82V28h2v-4.09a5.993 5.993 0 0 0 0-11.82M16 22a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"></svg:path>`,
})
export class CarbonDirectionRotaryStraightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionRotaryStraightFilledIcon],svg[carbon-direction-rotary-straight-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16" cy="19" r="3" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M28 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-6.414 10.414L17 7.828v6.273a5 5 0 0 1 0 9.798V28h-2v-4.101a5 5 0 0 1 0-9.798V7.828l-4.586 4.586L9 11l7-7l7 7Z"></svg:path><svg:path fill="none" d="M21.586 12.414L23 11l-7-7l-7 7l1.414 1.414L15 7.828v6.273a5 5 0 0 0 0 9.798V28h2v-4.101a5 5 0 0 0 0-9.798V7.828ZM19 19a3 3 0 1 1-3-3a3.003 3.003 0 0 1 3 3"></svg:path>`,
})
export class CarbonDirectionRotaryStraightFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionSharpTurnIcon],svg[carbon-direction-sharp-turn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 18v6.586L7.707 6.293A1 1 0 0 0 6 7v21h2V9.414L24.586 26H18v2h10V18Z"></svg:path>`,
})
export class CarbonDirectionSharpTurnIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionSharpTurnFilledIcon],svg[carbon-direction-sharp-turn-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-2 24H16v-2h6.586L8 9.414V26H6V7a1 1 0 0 1 1.707-.707L24 22.586V16h2Z"></svg:path><svg:path fill="none" d="M26 26H16v-2h6.586L8 9.414V26H6V7a1 1 0 0 1 1.707-.707L24 22.586V16h2Z"></svg:path>`,
})
export class CarbonDirectionSharpTurnFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionStraightIcon],svg[carbon-direction-straight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 4l-7 7l1.414 1.414L15 7.828V28h2V7.828l4.586 4.586L23 11z"></svg:path>`,
})
export class CarbonDirectionStraightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionStraightFilledIcon],svg[carbon-direction-straight-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-6.414 11.414L17 8.828V26h-2V8.828l-4.586 4.586L9 12l7-7l7 7Z"></svg:path><svg:path fill="none" d="M21.586 13.414L17 8.828V26h-2V8.828l-4.586 4.586L9 12l7-7l7 7Z"></svg:path>`,
})
export class CarbonDirectionStraightFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionStraightRightIcon],svg[carbon-direction-straight-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m28 16l-7-7l-1.414 1.414L24.172 15H4v2h20.172l-4.586 4.586L21 23z"></svg:path>`,
})
export class CarbonDirectionStraightRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionStraightRightFilledIcon],svg[carbon-direction-straight-right-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-8 21l-1.414-1.414L23.172 17H6v-2h17.172l-4.586-4.586L20 9l7 7Z"></svg:path><svg:path fill="none" d="m20 23l-1.414-1.414L23.172 17H6v-2h17.172l-4.586-4.586L20 9l7 7Z"></svg:path>`,
})
export class CarbonDirectionStraightRightFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionUTurnIcon],svg[carbon-direction-u-turn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26.586 19.586L22 24.172V12a8 8 0 0 0-16 0v16h2V12a6 6 0 0 1 12 0v12.172l-4.586-4.586L14 21l7 7l7-7Z"></svg:path>`,
})
export class CarbonDirectionUTurnIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDirectionUTurnFilledIcon],svg[carbon-direction-u-turn-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M26.586 17.586L22 22.172V14a8 8 0 0 0-16 0v12h2V14a6 6 0 0 1 12 0v8.172l-4.586-4.586L14 19l7 7l7-7Z"></svg:path><svg:path fill="currentColor" d="M28 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m-7 24l-7-7l1.414-1.414L20 22.172V14a6 6 0 0 0-12 0v12H6V14a8 8 0 0 1 16 0v8.172l4.586-4.586L28 19Z"></svg:path>`,
})
export class CarbonDirectionUTurnFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDirectoryDomainIcon],svg[carbon-directory-domain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 26h-9.184A3 3 0 0 0 17 24.184V19h7a2.003 2.003 0 0 0 2-2V4a2.003 2.003 0 0 0-2-2H8a2.003 2.003 0 0 0-2 2v13a2.003 2.003 0 0 0 2 2h7v5.184A3 3 0 0 0 13.184 26H4v2h9.184a2.982 2.982 0 0 0 5.632 0H28Zm-4-14H8V9h16Zm0-8v3H8V4ZM8 14h16v3H8Zm8 14a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class CarbonDirectoryDomainIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDistributeHorizontalCenterIcon],svg[carbon-distribute-horizontal-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 10h-1V2h-2v8h-1a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h1v8h2v-8h1a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2m0 10h-4v-8h4zM12 6h-1V2H9v4H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h1v4h2v-4h1a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m0 18H8V8h4z"></svg:path>`,
})
export class CarbonDistributeHorizontalCenterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDistributeHorizontalLeftIcon],svg[carbon-distribute-horizontal-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 22h-4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2m-4-10v8h4v-8zM18 2h2v28h-2zm-6 24H8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2M8 8v16h4V8zM2 2h2v28H2z"></svg:path>`,
})
export class CarbonDistributeHorizontalLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDistributeHorizontalRightIcon],svg[carbon-distribute-horizontal-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2h2v28h-2zm-4 20h-4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2m-4-10h-.001L20 20h4v-8zM12 2h2v28h-2zM8 26H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2M4 8h-.002L4 24h4V8z"></svg:path>`,
})
export class CarbonDistributeHorizontalRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDistributeVerticalBottomIcon],svg[carbon-distribute-vertical-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 28h28v2H2zm22-2H8a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m0-6.001L8 20v4h16zM2 12h28v2H2zm18-2h-8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m0-6.001L12 4v4h8z"></svg:path>`,
})
export class CarbonDistributeVerticalBottomIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDistributeVerticalCenterIcon],svg[carbon-distribute-vertical-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 21h-4v-1a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v1H2v2h4v1a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-1h4zm-6 3H8v-4l16-.001zm6-15h-8V8a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v1H2v2h8v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1h8zm-10 3h-8V8l8-.001z"></svg:path>`,
})
export class CarbonDistributeVerticalCenterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDistributeVerticalTopIcon],svg[carbon-distribute-vertical-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 30H8a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M8 24v4h16v-4zm-6-6h28v2H2zm18-4h-8a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m-8-6v4h8V8zM2 2h28v2H2z"></svg:path>`,
})
export class CarbonDistributeVerticalTopIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDnaIcon],svg[carbon-dna-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M22 2V1h-2v1a7.04 7.04 0 0 1-.08 1h-7.84A7.04 7.04 0 0 1 12 2V1h-2v1c0 3.755 1.97 5.604 4.1 7c-2.13 1.396-4.1 3.245-4.1 7s1.97 5.604 4.1 7c-2.13 1.396-4.1 3.245-4.1 7v1h2v-1a7.04 7.04 0 0 1 .08-1h7.84a7.04 7.04 0 0 1 .08 1v1h2v-1c0-3.755-1.97-5.604-4.1-7c2.13-1.396 4.1-3.245 4.1-7s-1.97-5.604-4.1-7C20.03 7.604 22 5.755 22 2zm-2 14a7.04 7.04 0 0 1-.08 1h-7.84a6.321 6.321 0 0 1 0-2h7.84a7.04 7.04 0 0 1 .08 1zm-.756 11h-6.488A8.908 8.908 0 0 1 16 24.17A8.908 8.908 0 0 1 19.244 27zM16 21.83A8.908 8.908 0 0 1 12.756 19h6.488A8.908 8.908 0 0 1 16 21.83zM19.244 13h-6.488A8.908 8.908 0 0 1 16 10.17A8.908 8.908 0 0 1 19.244 13zM16 7.83A8.908 8.908 0 0 1 12.756 5h6.488A8.908 8.908 0 0 1 16 7.83z" fill="currentColor"></svg:path>`,
})
export class CarbonDnaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDnsServicesIcon],svg[carbon-dns-services-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 20h10v2H20zm0 4h6v2h-6z"></svg:path><svg:path fill="currentColor" d="M30 17v-1a13.987 13.987 0 1 0-10.77 13.625l-.46-1.946A12 12 0 0 1 16 28c-.19 0-.375-.019-.563-.027A20.3 20.3 0 0 1 12.026 17Zm-2.041-2h-5.984a24.3 24.3 0 0 0-2.774-10.559A12.02 12.02 0 0 1 27.96 15M16.563 4.027A20.3 20.3 0 0 1 19.974 15h-7.948a20.3 20.3 0 0 1 3.411-10.973C15.625 4.02 15.81 4 16 4s.375.019.563.027m-3.764.414A24.3 24.3 0 0 0 10.025 15H4.042a12.02 12.02 0 0 1 8.757-10.559m0 23.118A12.02 12.02 0 0 1 4.042 17h5.983a24.3 24.3 0 0 0 2.774 10.559"></svg:path>`,
})
export class CarbonDnsServicesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDocIcon],svg[carbon-doc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 23h-6a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h6v2h-6v10h6zm-12 0h-4a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2m-4-12v10h4V11zM6 23H2V9h4a4.005 4.005 0 0 1 4 4v6a4.005 4.005 0 0 1-4 4m-2-2h2a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H4z"></svg:path>`,
})
export class CarbonDocIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentIcon],svg[carbon-document-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m25.7 9.3l-7-7c-.2-.2-.4-.3-.7-.3H8c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V10c0-.3-.1-.5-.3-.7M18 4.4l5.6 5.6H18zM24 28H8V4h8v6c0 1.1.9 2 2 2h6z"></svg:path><svg:path fill="currentColor" d="M10 22h12v2H10zm0-6h12v2H10z"></svg:path>`,
})
export class CarbonDocumentIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentAddIcon],svg[carbon-document-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 24h-4v-4h-2v4h-4v2h4v4h2v-4h4z"></svg:path><svg:path fill="currentColor" d="M16 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6v4h2v-6a.91.91 0 0 0-.3-.7l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h8Zm2-23.6l5.6 5.6H18Z"></svg:path>`,
})
export class CarbonDocumentAddIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentAttachmentIcon],svg[carbon-document-attachment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 30H11a2 2 0 0 1-2-2v-6h2v6h15V6h-9V4h9a2 2 0 0 1 2 2v22a2 2 0 0 1-2 2"></svg:path><svg:path fill="currentColor" d="M17 10h7v2h-7zm-1 5h8v2h-8zm-1 5h9v2h-9zm-6-1a5.006 5.006 0 0 1-5-5V3h2v11a3 3 0 0 0 6 0V5a1 1 0 0 0-2 0v10H8V5a3 3 0 0 1 6 0v9a5.006 5.006 0 0 1-5 5"></svg:path>`,
})
export class CarbonDocumentAttachmentIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentAudioIcon],svg[carbon-document-audio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 31a1 1 0 0 1-.624-.22L23.649 27H20a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h3.65l4.726-3.78A1 1 0 0 1 30 17v13a1 1 0 0 1-1 1m-8-6h3a1 1 0 0 1 .625.22L28 27.92v-8.84l-3.375 2.7A1 1 0 0 1 24 22h-3Z"></svg:path><svg:path fill="currentColor" d="M16 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6v3h2v-5a.91.91 0 0 0-.3-.7l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h8Zm2-23.6l5.6 5.6H18Z"></svg:path>`,
})
export class CarbonDocumentAudioIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentBlankIcon],svg[carbon-document-blank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"></svg:path>`,
})
export class CarbonDocumentBlankIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentCommentIcon],svg[carbon-document-comment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 17H16a2.003 2.003 0 0 0-2 2v6a2 2 0 0 0 2 2h4v-2h-4v-6h10v6h-2.535l-2.594 3.89L22.535 30l2-3H26a2 2 0 0 0 2-2v-6a2.003 2.003 0 0 0-2-2"></svg:path><svg:path fill="currentColor" d="M22 14h2v-4c0-.3-.1-.5-.3-.7l-7-7c-.2-.2-.4-.3-.7-.3H6c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h6v-2H6V4h8v6c0 1.1.9 2 2 2h6zm-6-4V4.4l5.6 5.6z"></svg:path>`,
})
export class CarbonDocumentCommentIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentConfigurationIcon],svg[carbon-document-configuration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 24v-2h-2.101a5 5 0 0 0-.732-1.753l1.49-1.49l-1.414-1.414l-1.49 1.49A5 5 0 0 0 24 18.101V16h-2v2.101a5 5 0 0 0-1.753.732l-1.49-1.49l-1.414 1.414l1.49 1.49A5 5 0 0 0 18.101 22H16v2h2.101c.129.626.378 1.221.732 1.753l-1.49 1.49l1.414 1.414l1.49-1.49a5 5 0 0 0 1.753.732V30h2v-2.101a5 5 0 0 0 1.753-.732l1.49 1.49l1.414-1.414l-1.49-1.49A5 5 0 0 0 27.899 24zm-7 2a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path><svg:path fill="currentColor" d="m23.499 9.085l-6.792-6.792A1 1 0 0 0 16 2H6c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h8v-2H6V4h8v6c0 1.103.897 2 2 2h6.292c.693 0 1.312-.414 1.577-1.054c.266-.64.12-1.37-.37-1.861M16 10V4.414L21.585 10z"></svg:path>`,
})
export class CarbonDocumentConfigurationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentDownloadIcon],svg[carbon-document-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m30 25l-1.414-1.414L26 26.172V18h-2v8.172l-2.586-2.586L20 25l5 5z"></svg:path><svg:path fill="currentColor" d="M18 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6v3h2v-5a.91.91 0 0 0-.3-.7l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h10Zm0-23.6l5.6 5.6H18Z"></svg:path>`,
})
export class CarbonDocumentDownloadIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentEpdfIcon],svg[carbon-document-epdf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 26v-4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v6a2.01 2.01 0 0 0 2 2h5v-2h-5v-2Zm-6-4h4v2h-4Z"></svg:path><svg:path fill="currentColor" d="m25.707 9.293l-7-7A1 1 0 0 0 18 2H8a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h8v-2H8V4h8v6a2 2 0 0 0 2 2h6v4h2v-6a1 1 0 0 0-.293-.707M18 4.414L23.586 10H18Z"></svg:path>`,
})
export class CarbonDocumentEpdfIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentExportIcon],svg[carbon-document-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 21h13.17l-2.58 2.59L25 25l5-5l-5-5l-1.41 1.41L26.17 19H13z"></svg:path><svg:path fill="currentColor" d="M22 14v-4a1 1 0 0 0-.29-.71l-7-7A1 1 0 0 0 14 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2h-2v2H4V4h8v6a2 2 0 0 0 2 2h6v2Zm-8-4V4.41L19.59 10Z"></svg:path>`,
})
export class CarbonDocumentExportIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentHorizontalIcon],svg[carbon-document-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-8 18h-8v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Zm8 0h-6v-2a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3v2H4V8h24Z"></svg:path><svg:path fill="currentColor" d="M16 18a4 4 0 1 0-4-4a4 4 0 0 0 4 4m0-6a2 2 0 1 1-2 2a2 2 0 0 1 2-2"></svg:path>`,
})
export class CarbonDocumentHorizontalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentImportIcon],svg[carbon-document-import-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 19H14.83l2.58-2.59L16 15l-5 5l5 5l1.41-1.41L14.83 21H28z"></svg:path><svg:path fill="currentColor" d="M24 14v-4a1 1 0 0 0-.29-.71l-7-7A1 1 0 0 0 16 2H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2h-2v2H6V4h8v6a2 2 0 0 0 2 2h6v2Zm-8-4V4.41L21.59 10Z"></svg:path>`,
})
export class CarbonDocumentImportIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentMultiple01Icon],svg[carbon-document-multiple-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6h2v20H2zm4-2h2v24H6zm8 18h12v2H14zm0-6h12v2H14z"></svg:path><svg:path fill="currentColor" d="m29.7 9.3l-7-7c-.2-.2-.4-.3-.7-.3H12c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V10c0-.3-.1-.5-.3-.7M22 4.4l5.6 5.6H22zM28 28H12V4h8v6c0 1.1.9 2 2 2h6z"></svg:path>`,
})
export class CarbonDocumentMultiple01Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentMultiple02Icon],svg[carbon-document-multiple-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 31H6c-1.1 0-2-.9-2-2V12h2v17h12z"></svg:path><svg:path fill="currentColor" d="M22 27H10c-1.1 0-2-.9-2-2V8h2v17h12z"></svg:path><svg:path fill="currentColor" d="M16 16h8v2h-8z"></svg:path><svg:path fill="currentColor" d="m27.7 9.3l-7-7c-.2-.2-.4-.3-.7-.3h-6c-1.1 0-2 .9-2 2v17c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-.3-.1-.5-.3-.7M20 4.4l5.6 5.6H20zM26 21H14V4h4v6c0 1.1.9 2 2 2h6z"></svg:path>`,
})
export class CarbonDocumentMultiple02Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentPdfIcon],svg[carbon-document-pdf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 18v-2h-6v10h2v-4h3v-2h-3v-2zm-11 8h-4V16h4a3.003 3.003 0 0 1 3 3v4a3.003 3.003 0 0 1-3 3m-2-2h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2zm-6-8H6v10h2v-3h3a2.003 2.003 0 0 0 2-2v-3a2 2 0 0 0-2-2m-3 5v-3h3l.001 3z"></svg:path><svg:path fill="currentColor" d="M22 14v-4a.91.91 0 0 0-.3-.7l-7-7A.9.9 0 0 0 14 2H4a2.006 2.006 0 0 0-2 2v24a2 2 0 0 0 2 2h16v-2H4V4h8v6a2.006 2.006 0 0 0 2 2h6v2Zm-8-4V4.4l5.6 5.6Z"></svg:path>`,
})
export class CarbonDocumentPdfIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentPreliminaryIcon],svg[carbon-document-preliminary-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 30a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6m0-10a4 4 0 1 0 4 4a4.005 4.005 0 0 0-4-4M8 22h8v2H8zm0-6h10v2H8z"></svg:path><svg:path fill="currentColor" d="M16 28H6V4h8v6a2.006 2.006 0 0 0 2 2h6v3h2v-5a.91.91 0 0 0-.3-.7l-7-7A.9.9 0 0 0 16 2H6a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h10Zm0-23.6l5.6 5.6H16Z"></svg:path>`,
})
export class CarbonDocumentPreliminaryIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentProcessorIcon],svg[carbon-document-processor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 28v2h-2c-1.102 0-2-.897-2-2v-2h2v2zm5-2h2v2c0 1.103-.897 2-2 2h-2v-2h2zm-2-5v-2h2c1.103 0 2 .898 2 2v2h-2v-2zm-5 2h-2v-2c0-1.102.898-2 2-2h2v2h-2z"></svg:path><svg:path fill="currentColor" d="M14 28H8V4h8v6c0 1.1.9 2 2 2h6v4h2v-6c0-.3-.1-.5-.3-.7l-7-7c-.2-.2-.4-.3-.7-.3H8c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h6zm4-23.6l5.6 5.6H18z"></svg:path>`,
})
export class CarbonDocumentProcessorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentProtectedIcon],svg[carbon-document-protected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 21v-3a4 4 0 0 0-8 0v3a2.003 2.003 0 0 0-2 2v5a2.003 2.003 0 0 0 2 2h8a2.003 2.003 0 0 0 2-2v-5a2.003 2.003 0 0 0-2-2m-6-3a2 2 0 0 1 4 0v3h-4Zm-2 10v-5h8v5Z"></svg:path><svg:path fill="currentColor" d="m23.499 9.085l-6.792-6.792A1 1 0 0 0 16 2H6a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h8v-2H6V4h8v6a2 2 0 0 0 2 2h6.292a1.708 1.708 0 0 0 1.207-2.915M16 10V4.414L21.585 10Z"></svg:path>`,
})
export class CarbonDocumentProtectedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentRequirementsIcon],svg[carbon-document-requirements-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.59 20.59L22 27.18l-2.59-2.59L18 26l4 4l8-8zM10 20h6v2h-6zm0-4h8v2h-8z"></svg:path><svg:path fill="currentColor" d="M8 4h8v6c0 1.1.9 2 2 2h6v6h2v-8c0-.3-.1-.5-.3-.7l-7-7c-.2-.2-.4-.3-.7-.3H8c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h7v-2H8zm10 .4l5.6 5.6H18z"></svg:path>`,
})
export class CarbonDocumentRequirementsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentSecurityIcon],svg[carbon-document-security-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 30l-2.139-1.013A5.02 5.02 0 0 1 18 24.467V18h10v6.468a5.02 5.02 0 0 1-2.861 4.52Zm-3-10v4.468a3.01 3.01 0 0 0 1.717 2.71l1.283.608l1.283-.607A3.01 3.01 0 0 0 26 24.468V20Z"></svg:path><svg:path fill="currentColor" d="M16 28H6V4h8v6a2.006 2.006 0 0 0 2 2h6v3h2v-5a.91.91 0 0 0-.3-.7l-7-7A.9.9 0 0 0 16 2H6a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h10Zm0-23.6l5.6 5.6H16Z"></svg:path>`,
})
export class CarbonDocumentSecurityIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentSentimentIcon],svg[carbon-document-sentiment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.303 16a2.66 2.66 0 0 0-1.908.806l-.393.405l-.397-.405a2.66 2.66 0 0 0-3.816 0a2.8 2.8 0 0 0 0 3.896L16.002 25l4.209-4.298a2.8 2.8 0 0 0 0-3.896A2.66 2.66 0 0 0 18.303 16"></svg:path><svg:path fill="currentColor" d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"></svg:path>`,
})
export class CarbonDocumentSentimentIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentSignedIcon],svg[carbon-document-signed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.414 30H15v-4.414l5.034-5.034A5 5 0 0 1 20 20a5 5 0 1 1 4.448 4.966ZM17 28h1.586l5.206-5.206l.54.124a3.035 3.035 0 1 0-2.25-2.25l.124.54L17 26.414Z"></svg:path><svg:circle cx="25" cy="20" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M8 6h12v2H8zm0 4h12v2H8zm0 4h6v2H8zm0 10h4v2H8z"></svg:path><svg:path fill="currentColor" d="M12 30H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v9h-2V4H6v24h6Z"></svg:path>`,
})
export class CarbonDocumentSignedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentSketchIcon],svg[carbon-document-sketch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m26 20l1.427 1.903L23 26.963l-4.427-5.06L20 20zm1-2h-8l-3 4l7 8l7-8z"></svg:path><svg:path fill="currentColor" d="M16 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6v3h2v-5a.91.91 0 0 0-.3-.7l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h8Zm2-23.6l5.6 5.6H18Z"></svg:path>`,
})
export class CarbonDocumentSketchIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentSubjectIcon],svg[carbon-document-subject-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 30h-5v-2h5v-2h-3c-1.102 0-2-.897-2-2v-2c0-1.103.898-2 2-2h5v2h-5v2h3c1.103 0 2 .898 2 2v2c0 1.103-.897 2-2 2M10 20h6v2h-6zm0-4h8v2h-8z"></svg:path><svg:path fill="currentColor" d="M24 16.992h2V10c0-.1 0-.3-.1-.4s-.1-.2-.2-.3l-7-7c-.1-.1-.2-.2-.3-.2c-.1-.1-.3-.1-.4-.1H8c-.5 0-1 .2-1.4.6S6 3.5 6 4v24c0 .5.2 1 .6 1.4s.9.6 1.4.6h7.947v-2H8V4h8v6c0 .5.2 1 .6 1.4s.9.6 1.4.6h6zM18 10V4.4l5.6 5.6z"></svg:path>`,
})
export class CarbonDocumentSubjectIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentSubtractIcon],svg[carbon-document-subtract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 24h10v2H20z"></svg:path><svg:path fill="currentColor" d="M16 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6v8h2V10a.91.91 0 0 0-.3-.7l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h8Zm2-23.6l5.6 5.6H18Z"></svg:path>`,
})
export class CarbonDocumentSubtractIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentTasksIcon],svg[carbon-document-tasks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 27.18l-2.59-2.59L18 26l4 4l8-8l-1.41-1.41z"></svg:path><svg:path fill="currentColor" d="M15 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6v6h2v-8a.91.91 0 0 0-.3-.7l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h7Zm3-23.6l5.6 5.6H18Z"></svg:path>`,
})
export class CarbonDocumentTasksIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentUnknownIcon],svg[carbon-document-unknown-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="9" cy="28.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M10 25H8v-4h2a2 2 0 0 0 0-4H8a2 2 0 0 0-2 2v.5H4V19a4.005 4.005 0 0 1 4-4h2a4 4 0 0 1 0 8Z"></svg:path><svg:path fill="currentColor" d="m27.7 9.3l-7-7A.9.9 0 0 0 20 2H10a2.006 2.006 0 0 0-2 2v8h2V4h8v6a2.006 2.006 0 0 0 2 2h6v16H14v2h12a2.006 2.006 0 0 0 2-2V10a.91.91 0 0 0-.3-.7M20 10V4.4l5.6 5.6Z"></svg:path>`,
})
export class CarbonDocumentUnknownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentUnprotectedIcon],svg[carbon-document-unprotected-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23.499 9.085l-6.792-6.792A1 1 0 0 0 16 2H6a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h8v-2H6V4h8v6a2 2 0 0 0 2 2h6.292a1.708 1.708 0 0 0 1.207-2.915M16 10V4.414L21.585 10Z"></svg:path><svg:path fill="currentColor" d="M28 21h-6v-3a2 2 0 0 1 4 0h2a4 4 0 0 0-8 0v3a2.003 2.003 0 0 0-2 2v5a2.003 2.003 0 0 0 2 2h8a2.003 2.003 0 0 0 2-2v-5a2.003 2.003 0 0 0-2-2m-8 7v-5h8v5Z"></svg:path>`,
})
export class CarbonDocumentUnprotectedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentVerticalIcon],svg[carbon-document-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 14a4 4 0 1 1 4-4a4.01 4.01 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2.006 2.006 0 0 0-2-2"></svg:path><svg:path fill="currentColor" d="M24 2H8a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M12 24v-6a.945.945 0 0 1 1-1h6a.945.945 0 0 1 1 1v6h-2v4h-4v-4Zm8 4v-2a2.006 2.006 0 0 0 2-2v-6a2.946 2.946 0 0 0-3-3h-6a2.946 2.946 0 0 0-3 3v6a2.006 2.006 0 0 0 2 2v2H8V4h16v24Z"></svg:path>`,
})
export class CarbonDocumentVerticalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentVideoIcon],svg[carbon-document-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m30 19l-4 3.2V20a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-2.2l4 3.2Zm-14 7v-6h8l.002 6Z"></svg:path><svg:path fill="currentColor" d="M12 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6v3h2v-5a.91.91 0 0 0-.3-.7l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h4Zm6-23.6l5.6 5.6H18Z"></svg:path>`,
})
export class CarbonDocumentVideoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentViewIcon],svg[carbon-document-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="22" cy="24" r="2" fill="currentColor"></svg:circle><svg:path fill="none" d="M22 28a4 4 0 1 1 4-4a4.004 4.004 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2.003 2.003 0 0 0-2-2"></svg:path><svg:path fill="currentColor" d="M29.777 23.479A8.64 8.64 0 0 0 22 18a8.64 8.64 0 0 0-7.777 5.479L14 24l.223.522A8.64 8.64 0 0 0 22 30a8.64 8.64 0 0 0 7.777-5.478L30 24ZM22 28a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"></svg:path><svg:path fill="currentColor" d="M12 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6v4h2v-6a.91.91 0 0 0-.3-.7l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h4Zm6-23.6l5.6 5.6H18Z"></svg:path>`,
})
export class CarbonDocumentViewIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentWordProcessorIcon],svg[carbon-document-word-processor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m28.3 20l-.909 8.611L26 20h-2l-1.391 8.611L21.7 20H20l1.36 10h2.28L25 21.626L26.36 30h2.28L30 20z"></svg:path><svg:path fill="currentColor" d="m25.707 9.293l-7-7A1 1 0 0 0 18 2H8a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h8v-2H8V4h8v6a2 2 0 0 0 2 2h6v4h2v-6a1 1 0 0 0-.293-.707M18 4.414L23.586 10H18Z"></svg:path>`,
})
export class CarbonDocumentWordProcessorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDocumentWordProcessorReferenceIcon],svg[carbon-document-word-processor-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m28.3 20l-.909 8.611L26 20h-2l-1.391 8.611L21.7 20H20l1.36 10h2.28L25 21.626L26.36 30h2.28L30 20zM4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8zM25.707 9.293l-7-7A1 1 0 0 0 18 2H8a2 2 0 0 0-2 2v12h2V4h8v6a2 2 0 0 0 2 2h6v4h2v-6a1 1 0 0 0-.293-.707M18 10V4.414L23.586 10z"></svg:path>`,
})
export class CarbonDocumentWordProcessorReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDogWalkerIcon],svg[carbon-dog-walker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 20h2v10h-2zM4 23h2v7H4z"></svg:path><svg:path fill="currentColor" d="M16 30h-2v-4a1 1 0 0 0-1-1h-2v5H9v-7h4a3.003 3.003 0 0 1 3 3zm-8.5-8A3.504 3.504 0 0 1 4 18.5V17H2v-2h4v3.5a1.5 1.5 0 0 0 3 0V15h4v2h-2v1.5A3.504 3.504 0 0 1 7.5 22M27 10h-5.646a2.99 2.99 0 0 0-2.786 1.886l-1.442 3.605l-3.607 4.51l1.562 1.25l3.7-4.626l1.645-3.996a.995.995 0 0 1 .928-.629H27a1 1 0 0 1 1 1v7h-3v10h2v-8h1a2 2 0 0 0 2-2v-7a3.003 3.003 0 0 0-3-3m-3-1a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonDogWalkerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDotMarkIcon],svg[carbon-dot-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16" cy="16" r="8" fill="currentColor"></svg:circle>`,
})
export class CarbonDotMarkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDoubleIntegerIcon],svg[carbon-double-integer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 8V6h-4V2h-2v4H8V2H6v4H2v2h4v3H2v2h4v4h2v-4h3v4h2v-4h4v-2h-4V8zm-6 3H8V8h3zm19 10v-2h-4v-4h-2v4h-3v-4h-2v4h-4v2h4v3h-4v2h4v4h2v-4h3v4h2v-4h4v-2h-4v-3zm-6 3h-3v-3h3z"></svg:path>`,
})
export class CarbonDoubleIntegerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDownToBottomIcon],svg[carbon-down-to-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 18L6 8l1.4-1.4l8.6 8.6l8.6-8.6L26 8zM4 22h24v2H4z"></svg:path>`,
})
export class CarbonDownToBottomIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDownloadIcon],svg[carbon-download-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 24v4H6v-4H4v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4zm0-10l-1.41-1.41L17 20.17V2h-2v18.17l-7.59-7.58L6 14l10 10z"></svg:path>`,
})
export class CarbonDownloadIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDownloadStudyIcon],svg[carbon-download-study-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M30 25l-1.414-1.414L26 26.172V18h-2v8.172l-2.586-2.586L20 25l5 5l5-5z" fill="currentColor"></svg:path><svg:path d="M19 14h4v2h-4z" fill="currentColor"></svg:path><svg:path d="M19 10h7v2h-7z" fill="currentColor"></svg:path><svg:path d="M9 18h6a3 3 0 0 1 3 3v2h-2v-2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H6v-2a3 3 0 0 1 3-3z" fill="currentColor"></svg:path><svg:path d="M16 13a4 4 0 1 0-4 4a4 4 0 0 0 4-4zm-2 0a2 2 0 1 1-2-2a2 2 0 0 1 2 2z" fill="currentColor"></svg:path><svg:path d="M18 26H4V6h24v10h2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h14z" fill="currentColor"></svg:path>`,
})
export class CarbonDownloadStudyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDownstreamIcon],svg[carbon-downstream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 24a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0 4a1 1 0 1 1 0-2a1 1 0 0 1 0 2m11-4a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0 4a1 1 0 1 1 0-2a1 1 0 0 1 0 2m11-4a3 3 0 1 0 0 6a3 3 0 0 0 0-6m0 4a1 1 0 1 1 0-2a1 1 0 0 1 0 2m2.586-10.414L28 19.172V16c0-3.554-2.665-6.492-6.1-6.936c.062-.345.1-.7.1-1.064a6 6 0 0 0-12 0c0 .364.038.719.1 1.064C6.665 9.508 4 12.446 4 16v3.171l-1.586-1.585L1 19l4 4l4-4l-1.414-1.414L6 19.172V16c0-2.695 2.148-4.885 4.82-4.982A6 6 0 0 0 15 13.91v5.262l-1.586-1.586L12 19l4 4l4-4l-1.414-1.414L17 19.172V13.91a6 6 0 0 0 4.18-2.892C23.852 11.115 26 13.305 26 16v3.171l-1.586-1.585L23 19l4 4l4-4zM16 12c-2.206 0-4-1.794-4-4s1.794-4 4-4s4 1.794 4 4s-1.794 4-4 4"></svg:path>`,
})
export class CarbonDownstreamIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDragHorizontalIcon],svg[carbon-drag-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4v11H5.83l2.58-2.59L7 11l-5 5l5 5l1.41-1.41L5.83 17H12v11h2V4zm13 7l-1.41 1.41L26.17 15H20V4h-2v24h2V17h6.17l-2.58 2.59L25 21l5-5z"></svg:path>`,
})
export class CarbonDragHorizontalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDragVerticalIcon],svg[carbon-drag-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20h11v6.17l-2.59-2.58L11 25l5 5l5-5l-1.41-1.41L17 26.17V20h11v-2H4zm7-13l1.41 1.41L15 5.83V12H4v2h24v-2H17V5.83l2.59 2.58L21 7l-5-5z"></svg:path>`,
})
export class CarbonDragVerticalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDraggableIcon],svg[carbon-draggable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6h4v4h-4zm8 0h4v4h-4zm-8 8h4v4h-4zm8 0h4v4h-4zm-8 8h4v4h-4zm8 0h4v4h-4z"></svg:path>`,
})
export class CarbonDraggableIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDrawIcon],svg[carbon-draw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.14 28a3.42 3.42 0 0 1-2.42-5.85L21.86 17a1.42 1.42 0 1 0-2-2L13 21.85a3.5 3.5 0 0 1-4.85 0a3.43 3.43 0 0 1 0-4.84l8.58-8.58a1.42 1.42 0 1 0-2-2L6.41 14.7L5 13.3L13.29 5a3.43 3.43 0 0 1 4.84 4.85l-8.57 8.57a1.42 1.42 0 0 0 0 2a1.45 1.45 0 0 0 2 0l6.86-6.86a3.43 3.43 0 1 1 4.85 4.84l-5.15 5.15a1.42 1.42 0 0 0 2 2l4.44-4.43L26 22.56L21.56 27a3.38 3.38 0 0 1-2.42 1"></svg:path>`,
})
export class CarbonDrawIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDrillBackIcon],svg[carbon-drill-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6 22l1.414-1.414L3.828 17H12v-2H3.828l3.586-3.586L6 10l-6 6z"></svg:path><svg:path fill="currentColor" d="M16 10a5.98 5.98 0 0 0-4.243 1.757L16 16l-4.243 4.243A6 6 0 1 0 16 10"></svg:path><svg:path fill="currentColor" d="M16 2a13.96 13.96 0 0 0-9.895 4.105l1.414 1.414a12 12 0 1 1 0 16.962l-1.414 1.414A13.997 13.997 0 1 0 16 2"></svg:path>`,
})
export class CarbonDrillBackIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDrillDownIcon],svg[carbon-drill-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 6l1.414-1.414L15 8.172V0h2v8.172l3.586-3.586L22 6l-6 6z"></svg:path><svg:path fill="currentColor" d="M22 16a5.98 5.98 0 0 0-1.757-4.243L16 16l-4.243-4.243A6 6 0 1 0 22 16"></svg:path><svg:path fill="currentColor" d="M30 16a13.96 13.96 0 0 0-4.105-9.895l-1.414 1.414a12 12 0 1 1-16.962 0L6.105 6.105A13.997 13.997 0 1 0 30 16"></svg:path>`,
})
export class CarbonDrillDownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDrillThroughIcon],svg[carbon-drill-through-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 30A14.016 14.016 0 0 1 2 16h2A12 12 0 1 0 16 4V2a14 14 0 0 1 0 28"></svg:path><svg:path fill="currentColor" d="M4 12v-2h4.586L2 3.414L3.414 2L10 8.586V4h2v8zm12-2v6h-6a6 6 0 1 0 6-6"></svg:path>`,
})
export class CarbonDrillThroughIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDrink01Icon],svg[carbon-drink-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 10.414l3-3L24.586 6l-3.293 3.293A1 1 0 0 0 21 10v4h-7.074l1.143 16h8.862l1.143-16H23zM22.07 28h-5.14l-.856-12h6.852z"></svg:path><svg:path fill="currentColor" d="M15 1h-5a1 1 0 0 0-1 1v7.37c-1.067.606-3 2.178-3 5.63v14a1 1 0 0 0 1 1h5v-2H8V15c0-3.754 3-4.28 3-4.28V3h3v7h2V2a1 1 0 0 0-1-1"></svg:path>`,
})
export class CarbonDrink01Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDrink02Icon],svg[carbon-drink-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 10.414l3-3L24.586 6l-3.293 3.293A1 1 0 0 0 21 10v4h-7.074l1.143 16h8.862l1.143-16H23zM22.07 28h-5.14l-.856-12h6.852z"></svg:path><svg:path fill="currentColor" d="M16 7.051V4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3.051A5.93 5.93 0 0 0 6 11.5V29a1 1 0 0 0 1 1h5v-2H8V11.5c0-2.356 2-3.48 2-3.48V5h4v3.02s2 1.124 2 3.48v.5h2v-.5a5.93 5.93 0 0 0-2-4.449"></svg:path>`,
})
export class CarbonDrink02Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDriverAnalysisIcon],svg[carbon-driver-analysis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="22" cy="16" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M30 15h-2.09A6.005 6.005 0 0 0 22 10l-.022.001A9.983 9.983 0 0 0 4.051 15H2v2h2.05a9.983 9.983 0 0 0 17.928 4.999L22 22a6.005 6.005 0 0 0 5.91-5H30ZM14 8a7.98 7.98 0 0 1 5.738 2.446A6.02 6.02 0 0 0 16.09 15H6.07A8.01 8.01 0 0 1 14 8m0 16a8.01 8.01 0 0 1-7.93-7h10.02a6.02 6.02 0 0 0 3.649 4.554A7.98 7.98 0 0 1 14 24m8-4a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"></svg:path>`,
})
export class CarbonDriverAnalysisIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDroneIcon],svg[carbon-drone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 12a5 5 0 1 1 5-5h-2a3 3 0 1 0-3 3zm18 0v-2a3 3 0 1 0-3-3h-2a5 5 0 1 1 5 5M7 30a5 5 0 0 1 0-10v2a3 3 0 1 0 3 3h2a5.006 5.006 0 0 1-5 5m18 0a5.006 5.006 0 0 1-5-5h2a3 3 0 1 0 3-3v-2a5 5 0 0 1 0 10"></svg:path><svg:path fill="currentColor" d="M20 18.586v-5.172l5.707-5.707a1 1 0 1 0-1.414-1.414l-4.5 4.5a3.973 3.973 0 0 0-7.587 0l-4.499-4.5a1 1 0 0 0-1.414 0a1 1 0 0 0 0 1.414L12 13.414v5.172l-5.707 5.707a1 1 0 0 0 0 1.414a1 1 0 0 0 1.414 0l4.5-4.5a3.973 3.973 0 0 0 7.587 0l4.5 4.5a1 1 0 0 0 1.414-1.414ZM18 20a2 2 0 0 1-4 0v-8a2 2 0 0 1 4 0Z"></svg:path>`,
})
export class CarbonDroneIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDroneDeliveryIcon],svg[carbon-drone-delivery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 30h-8v-8h8Zm-6-2h4v-4h-4Z"></svg:path><svg:path fill="currentColor" d="M32 11H22v2h4v3H6v-3h4v-2H0v2h4v5h5.132L6 22.697V27h2v-3.697L11.535 18h8.93L24 23.303V27h2v-4.303L22.868 18H28v-5h4zM16 6a5.98 5.98 0 0 0-4.24 1.76l1.413 1.413a3.994 3.994 0 0 1 5.654 0l1.414-1.414A5.98 5.98 0 0 0 16 6"></svg:path><svg:path fill="currentColor" d="m8.932 4.932l1.414 1.414a7.99 7.99 0 0 1 11.308 0l1.414-1.414a9.984 9.984 0 0 0-14.136 0"></svg:path>`,
})
export class CarbonDroneDeliveryIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDroneFrontIcon],svg[carbon-drone-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 19v-4h-2v2H6v-2H4v4h7v4.412l-4 2.225V30h2v-3.187L12.26 25h7.481L23 26.813V30h2v-4.363l-4-2.225V19zm-9 4h-6v-4h6zM0 11h10v2H0zm22 0h10v2H22zm-6-5a5.98 5.98 0 0 0-4.24 1.76l1.413 1.413a3.994 3.994 0 0 1 5.654 0l1.414-1.414A5.98 5.98 0 0 0 16 6"></svg:path><svg:path fill="currentColor" d="m8.932 4.932l1.414 1.414a7.99 7.99 0 0 1 11.308 0l1.414-1.414a9.984 9.984 0 0 0-14.136 0"></svg:path>`,
})
export class CarbonDroneFrontIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDroneVideoIcon],svg[carbon-drone-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16" cy="21" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M28 19v-4h-2v2H6v-2H4v4h7v4.412l-4 2.225V30h2v-3.187L12.26 25h7.481L23 26.813V30h2v-4.363l-4-2.225V19zm-9 4h-6v-4h6zM0 11h10v2H0zm22 0h10v2H22zm-6-5a5.98 5.98 0 0 0-4.24 1.76l1.413 1.413a3.994 3.994 0 0 1 5.654 0l1.414-1.414A5.98 5.98 0 0 0 16 6"></svg:path><svg:path fill="currentColor" d="m8.932 4.932l1.414 1.414a7.99 7.99 0 0 1 11.308 0l1.414-1.414a9.984 9.984 0 0 0-14.136 0"></svg:path>`,
})
export class CarbonDroneVideoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDropPhotoIcon],svg[carbon-drop-photo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 26a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2"></svg:path><svg:path fill="currentColor" d="M27 29H11a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h3.28l.543-1.632A2 2 0 0 1 16.721 13h4.558a2 2 0 0 1 1.898 1.368L23.72 16H27a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2m-16-2h16v-9h-4.72l-1-3h-4.56l-1 3H11zm16-16h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2zm-4 0h2v2h-2zm-4 0h2v2h-2zm-4 0h2v2h-2zm-4 0h2v2h-2zM7 3h2v2H7zM3 3h2v2H3zm0 4h2v2H3zm0 4h2v2H3zm0 4h2v2H3zm0 4h2v2H3zm0 4h2v2H3zm0 4h2v2H3z"></svg:path>`,
})
export class CarbonDropPhotoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDropPhotoFilledIcon],svg[carbon-drop-photo-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="19" cy="22" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M27 16h-3.28l-.543-1.633A2 2 0 0 0 21.279 13h-4.558a2 2 0 0 0-1.898 1.368L14.28 16H11a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2m-8 10a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4"></svg:path><svg:path fill="none" d="M19 26a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2"></svg:path><svg:path fill="currentColor" d="M27 11h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2zm-4 0h2v2h-2zm-4 0h2v2h-2zm-4 0h2v2h-2zm-4 0h2v2h-2zM7 3h2v2H7zM3 3h2v2H3zm0 4h2v2H3zm0 4h2v2H3zm0 4h2v2H3zm0 4h2v2H3zm0 4h2v2H3zm0 4h2v2H3z"></svg:path>`,
})
export class CarbonDropPhotoFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDroughtIcon],svg[carbon-drought-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 18h3v-3a4.005 4.005 0 0 0-4-4h-1V9.5A3.504 3.504 0 0 0 21.5 6a3.46 3.46 0 0 0-1.5.351V5.41a3.41 3.41 0 0 0-6.545-1.343L11.341 9H9a5.006 5.006 0 0 0-5 5v4h4a5.006 5.006 0 0 0 5-5v-2.795l2.293-5.35A1.41 1.41 0 0 1 18 5.41V22h-3.388L11 25.294L7.388 22H2v2h4.612L11 28l4.388-4H30v-2H20V9.5a1.5 1.5 0 0 1 3 0V14a4.005 4.005 0 0 0 4 4m-2-5h1a2 2 0 0 1 2 2v1h-1a2 2 0 0 1-2-2Zm-14 0a3.003 3.003 0 0 1-3 3H6v-2a3.003 3.003 0 0 1 3-3h2Z"></svg:path>`,
})
export class CarbonDroughtIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonDvrIcon],svg[carbon-dvr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 15v-4a2 2 0 0 0-2-2h-6v14h2v-6h1.48l2.34 6H30l-2.33-6H28a2 2 0 0 0 2-2m-6-4h4v4h-4zm-6-2l-2 13l-2-13h-2l2.52 14h2.96L20 9zM6 23H2V9h4a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4m-2-2h2a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H4z"></svg:path>`,
})
export class CarbonDvrIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEarthIcon],svg[carbon-earth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2m5 3.106a12 12 0 0 1 2.916 1.899L23.503 8H21Zm-7.622 22.597A11.976 11.976 0 0 1 8.116 6.976L9.465 9h3.342l-1.5 4H7.28l-1.382 4.148L8.465 21h5l1.432 2.148ZM16 28c-.203 0-.402-.02-.602-.03l1.396-4.19a1.99 1.99 0 0 0-.233-1.741l-1.432-2.148A2 2 0 0 0 13.465 19h-3.93l-1.432-2.148L8.721 15H11v2h2v-2.819l2.936-7.83l-1.872-.702L13.557 7h-3.022l-.807-1.21A11.8 11.8 0 0 1 19 4.394V8a2.003 2.003 0 0 0 2 2h2.586A2 2 0 0 0 25 9.414l.14-.14l.282-.68A12 12 0 0 1 27.3 12h-4.701a1.99 1.99 0 0 0-1.972 1.665l-.597 3.441a1.99 1.99 0 0 0 .991 2.086l2.165 1.464l1.458 3.646A11.96 11.96 0 0 1 16 28m8.815-8.656L22.1 17.509l-.1-.06l.599-3.449h5.22a11.74 11.74 0 0 1-1.744 8.495Z"></svg:path>`,
})
export class CarbonEarthIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEarthAmericasIcon],svg[carbon-earth-americas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 16a14.031 14.031 0 1 0-7.14 12.191l.117.026l.024-.111A14 14 0 0 0 30 16M4 16a12 12 0 0 1 .395-3h4.243l4.992 4.16l-1.91 2.546a2.01 2.01 0 0 0 .186 2.614L14 24.414v3.405A12.01 12.01 0 0 1 4 16m9.32 4.906l3.05-4.066L9.362 11H5.106a11.962 11.962 0 0 1 17.778-4.813L22.279 8h-5.693l-3.043 3.043l9.354 8.313l-1.649 7.419A11.9 11.9 0 0 1 16 28v-4.414Zm10.315 4.344l1.213-5.46a2 2 0 0 0-.623-1.927l-7.768-6.906l.957-.957h4.865a2 2 0 0 0 1.898-1.368l.353-1.06a11.98 11.98 0 0 1-.895 17.679Z"></svg:path>`,
})
export class CarbonEarthAmericasIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEarthAmericasFilledIcon],svg[carbon-earth-americas-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2M4 16a11.9 11.9 0 0 1 .7-4H10l5 4l-2.8 3.693A1 1 0 0 0 12.293 21L15 24v3.95A12.01 12.01 0 0 1 4 16m17.435 10.685l2.546-7.7a1 1 0 0 0-.367-.985L15 11l2-2h5.28a1 1 0 0 0 .948-.684l.495-1.486a11.974 11.974 0 0 1-2.288 19.855"></svg:path>`,
})
export class CarbonEarthAmericasFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEarthEuropeAfricaIcon],svg[carbon-earth-europe-africa-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2M4 16a11.96 11.96 0 0 1 4-8.919V9a2 2 0 0 0 2 2h3.382a2 2 0 0 0 1.79-1.106L15.617 9H18v4h-4.765a2 2 0 0 0-.893.21l-3.237 1.62A2 2 0 0 0 8 16.617v3.705a2 2 0 0 0 1.257 1.857l3.849 1.54l.678 4.066A12.014 12.014 0 0 1 4 16m11.846 11.992l-.952-5.712L10 20.323v-3.705L13.236 15H20V7h-5.618l-1 2H10V5.624A11.958 11.958 0 0 1 27.3 12H22v4l.922 3.814L21 22.697v4.197A11.9 11.9 0 0 1 16 28c-.052 0-.102-.007-.154-.008M23 25.727v-2.424l1.586-2.38a2 2 0 0 0 .277-1.595L24 15.877V14h3.82A11.84 11.84 0 0 1 23 25.727"></svg:path>`,
})
export class CarbonEarthEuropeAfricaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEarthEuropeAfricaFilledIcon],svg[carbon-earth-europe-africa-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2M4 16a11.98 11.98 0 0 1 5-9.727V9a1 1 0 0 0 1 1h3.382a1 1 0 0 0 .894-.553L15 8h4v6h-5.764a1 1 0 0 0-.447.106l-3.236 1.618a1 1 0 0 0-.553.894v3.705a1 1 0 0 0 .629.929L14 23l.824 4.94A12.015 12.015 0 0 1 4 16m18 10.376V23l1.755-2.632a1 1 0 0 0 .138-.797L23 16v-3h4.605A11.9 11.9 0 0 1 22 26.376"></svg:path>`,
})
export class CarbonEarthEuropeAfricaFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEarthFilledIcon],svg[carbon-earth-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2M4.02 16.394l1.338.446L7 19.303v1.283a1 1 0 0 0 .293.707L10 24v2.377a12 12 0 0 1-5.98-9.983M16 28a12 12 0 0 1-2.572-.285L14 26l1.805-4.512a1 1 0 0 0-.097-.926l-1.411-2.117a1 1 0 0 0-.832-.445h-4.93l-1.248-1.873L9.414 14H11v2h2v-2.734l3.868-6.77l-1.736-.992L14.277 7h-2.742L10.45 5.371A11.86 11.86 0 0 1 20 4.7V8a1 1 0 0 0 1 1h1.465a1 1 0 0 0 .832-.445l.877-1.316A12 12 0 0 1 26.894 11H22.82a1 1 0 0 0-.98.804l-.723 4.47a1 1 0 0 0 .54 1.055L25 19l.685 4.056A11.98 11.98 0 0 1 16 28"></svg:path>`,
})
export class CarbonEarthFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEarthSoutheastAsiaIcon],svg[carbon-earth-southeast-asia-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 24h3v2h-3zm3-2h2v2h-2zm0-4h2v2h-2z"></svg:path><svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2m-.603 2.03l2.507 5.016L16.323 13H10.27l-1.41 4.387l2.852 2.852l-1.007 1.512L6.286 19H4.395A11.936 11.936 0 0 1 15.397 4.03M5.106 21h.608l3.935 2.449a1.99 1.99 0 0 0 2.721-.589l1.008-1.512a2.005 2.005 0 0 0-.25-2.523l-1.989-1.989l.59-1.836h4.594a1.99 1.99 0 0 0 1.857-1.257l1.581-3.953a2 2 0 0 0-.067-1.638l-2.01-4.02A11.96 11.96 0 0 1 26.894 21H23a2 2 0 0 0-2 2v3.895A11.95 11.95 0 0 1 5.106 21M23 25.727V23h2.727A12 12 0 0 1 23 25.727"></svg:path>`,
})
export class CarbonEarthSoutheastAsiaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEarthSoutheastAsiaFilledIcon],svg[carbon-earth-southeast-asia-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 22h2v2h-2zm0-4h2v2h-2zm-3 6h3v2h-3z"></svg:path><svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14.016 14.016 0 0 0 16 2M4.7 20H6l4.177 2.6a1 1 0 0 0 1.36-.294l1.008-1.512a1 1 0 0 0-.125-1.261L10 17.112L11 14h5.323a1 1 0 0 0 .929-.628l1.581-3.955a1 1 0 0 0-.034-.819l-2.286-4.572A11.965 11.965 0 0 1 26.376 22H23a1 1 0 0 0-1 1v3.377A11.958 11.958 0 0 1 4.7 20"></svg:path>`,
})
export class CarbonEarthSoutheastAsiaFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEarthquakeIcon],svg[carbon-earthquake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.612 2.214a1.01 1.01 0 0 0-1.242 0L1 13.419l1.243 1.572L4 13.621V26a2.004 2.004 0 0 0 2 2h20a2.004 2.004 0 0 0 2-2V13.63L29.757 15L31 13.428ZM6 12.062l9-7.012v7.364l3.458 3.458l-6.734 4.81L14.382 26H6ZM26 26h-9.382l-2.342-4.683l7.266-5.19L17 11.587V5.052l9 7.02Z"></svg:path>`,
})
export class CarbonEarthquakeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEdgeClusterIcon],svg[carbon-edge-cluster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 7a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m-5 27a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1M7 11a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m14 23a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m4-15a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1M4 21a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m24 4a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m-12 5a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6m0-10a4 4 0 1 0 4 4a4.005 4.005 0 0 0-4-4"></svg:path>`,
})
export class CarbonEdgeClusterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEdgeDeviceIcon],svg[carbon-edge-device-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 21h14v2H9zm2-7a2 2 0 1 0 2 2a1.98 1.98 0 0 0-2-2m10 0a2 2 0 1 0 2 2a1.98 1.98 0 0 0-2-2"></svg:path><svg:path fill="currentColor" d="M28 8h-9.586l2.072-2.072A2 2 0 0 0 21 6a2 2 0 1 0-2-2a2 2 0 0 0 .072.514L15.586 8H4a2.003 2.003 0 0 0-2 2v16a2.003 2.003 0 0 0 2 2h24a2.003 2.003 0 0 0 2-2V10a2.003 2.003 0 0 0-2-2M4 26V10h24v16Z"></svg:path>`,
})
export class CarbonEdgeDeviceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEdgeEnhancementIcon],svg[carbon-edge-enhancement-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M11.816 4.765l-.683-1.878a13.976 13.976 0 0 0-4.182 2.44L8.236 6.86a11.973 11.973 0 0 1 3.58-2.094z" fill="currentColor"></svg:path><svg:path d="M5.591 10L3.86 9a14.14 14.14 0 0 0-1.638 4.587l1.968.347A12.152 12.152 0 0 1 5.59 10z" fill="currentColor"></svg:path><svg:path d="M16 26a10 10 0 0 0 0-20z" fill="currentColor"></svg:path><svg:path d="M30 16A14 14 0 0 0 16 2v2a11.993 11.993 0 0 1 4.05 23.285c-.169.06-.335.13-.505.182c-.251.077-.51.136-.768.197c-.127.03-.25.07-.378.095c-.29.06-.588.098-.886.135c-.1.013-.198.035-.299.044a12.002 12.002 0 0 1-11.798-6.283c-.066-.127-.133-.254-.195-.384c-.055-.113-.106-.227-.157-.342A13.12 13.12 0 0 1 4.19 18l-1.968.413A13.917 13.917 0 0 0 2.7 20.3l-.025.009A13.961 13.961 0 0 0 16 30q.713 0 1.415-.071c.135-.014.265-.042.4-.06c.328-.043.657-.084.98-.15c.18-.036.354-.09.532-.134c.268-.065.538-.125.802-.206c.247-.076.483-.172.724-.261c.18-.067.363-.121.541-.195v-.003A14.002 14.002 0 0 0 30 16z" fill="currentColor"></svg:path>`,
})
export class CarbonEdgeEnhancementIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEdgeEnhancement01Icon],svg[carbon-edge-enhancement-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M26 28v-8h-2v1h-2v2h2v5h-2v2h6v-2h-2z" fill="currentColor"></svg:path><svg:path d="M28 16h2A14 14 0 0 0 16 2v2a12 12 0 0 1 12 12z" fill="currentColor"></svg:path><svg:path d="M26 16A10 10 0 0 0 16 6v10z" fill="currentColor"></svg:path><svg:path d="M16 28a11.96 11.96 0 0 1-10.584-6.345c-.066-.127-.133-.254-.195-.384c-.055-.113-.106-.227-.157-.342A13.12 13.12 0 0 1 4.19 18l-1.968.413A13.917 13.917 0 0 0 2.7 20.3l-.025.009A13.961 13.961 0 0 0 16 30z" fill="currentColor"></svg:path><svg:path d="M5.591 10L3.86 9a14.14 14.14 0 0 0-1.638 4.587l1.968.347A12.152 12.152 0 0 1 5.59 10z" fill="currentColor"></svg:path><svg:path d="M11.816 4.765l-.683-1.878a13.976 13.976 0 0 0-4.182 2.44L8.236 6.86a11.973 11.973 0 0 1 3.58-2.094z" fill="currentColor"></svg:path>`,
})
export class CarbonEdgeEnhancement01Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEdgeEnhancement02Icon],svg[carbon-edge-enhancement-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M28 30h-6v-4a2.002 2.002 0 0 1 2-2h2v-2h-4v-2h4a2.002 2.002 0 0 1 2 2v2a2.002 2.002 0 0 1-2 2h-2v2h4z" fill="currentColor"></svg:path><svg:path d="M28 16h2A14 14 0 0 0 16 2v2a12 12 0 0 1 12 12z" fill="currentColor"></svg:path><svg:path d="M26 16A10 10 0 0 0 16 6v10z" fill="currentColor"></svg:path><svg:path d="M16 28a11.96 11.96 0 0 1-10.584-6.345c-.066-.127-.133-.254-.195-.384c-.055-.113-.106-.227-.157-.342A13.12 13.12 0 0 1 4.19 18l-1.968.413A13.917 13.917 0 0 0 2.7 20.3l-.025.009A13.961 13.961 0 0 0 16 30z" fill="currentColor"></svg:path><svg:path d="M5.591 10L3.86 9a14.14 14.14 0 0 0-1.638 4.587l1.968.347A12.152 12.152 0 0 1 5.59 10z" fill="currentColor"></svg:path><svg:path d="M11.816 4.765l-.683-1.878a13.976 13.976 0 0 0-4.182 2.44L8.236 6.86a11.973 11.973 0 0 1 3.58-2.094z" fill="currentColor"></svg:path>`,
})
export class CarbonEdgeEnhancement02Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEdgeEnhancement03Icon],svg[carbon-edge-enhancement-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M26 20h-4v2h4v2h-3v2h3v2h-4v2h4a2.003 2.003 0 0 0 2-2v-6a2.002 2.002 0 0 0-2-2z" fill="currentColor"></svg:path><svg:path d="M28 16h2A14 14 0 0 0 16 2v2a12 12 0 0 1 12 12z" fill="currentColor"></svg:path><svg:path d="M26 16A10 10 0 0 0 16 6v10z" fill="currentColor"></svg:path><svg:path d="M16 28a11.96 11.96 0 0 1-10.584-6.345c-.066-.127-.133-.254-.195-.384c-.055-.113-.106-.227-.157-.342A13.12 13.12 0 0 1 4.19 18l-1.968.413A13.917 13.917 0 0 0 2.7 20.3l-.025.009A13.961 13.961 0 0 0 16 30z" fill="currentColor"></svg:path><svg:path d="M5.591 10L3.86 9a14.14 14.14 0 0 0-1.638 4.587l1.968.347A12.152 12.152 0 0 1 5.59 10z" fill="currentColor"></svg:path><svg:path d="M11.816 4.765l-.683-1.878a13.976 13.976 0 0 0-4.182 2.44L8.236 6.86a11.973 11.973 0 0 1 3.58-2.094z" fill="currentColor"></svg:path>`,
})
export class CarbonEdgeEnhancement03Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEdgeNodeIcon],svg[carbon-edge-node-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 6h4v4h-4z"></svg:path><svg:circle cx="7" cy="7" r="1" fill="currentColor"></svg:circle><svg:circle cx="25" cy="25" r="1" fill="currentColor"></svg:circle><svg:circle cx="25" cy="21" r="1" fill="currentColor"></svg:circle><svg:circle cx="25" cy="17" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M22 17v-2h-2v-1a2 2 0 0 0-2-2h-1v-2h-2v2h-2v-2h-2v2h-1a2 2 0 0 0-2 2v1H6v2h2v2H6v2h2v1a2 2 0 0 0 2 2h1v2h2v-2h2v2h2v-2h1a2 2 0 0 0 2-2v-1h2v-2h-2v-2Zm-4 5h-8v-8h8Z"></svg:path><svg:path fill="currentColor" d="M28 30H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2M4 4v24h24V4Z"></svg:path>`,
})
export class CarbonEdgeNodeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEdgeNodeAltIcon],svg[carbon-edge-node-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 22a2.98 2.98 0 0 0-2.037.811l-4.004-2.402a2 2 0 0 0 0-.818l4.004-2.402A2.99 2.99 0 1 0 24 15a3 3 0 0 0 .042.41l-4.004 2.402a3 3 0 1 0 0 4.376l4.003 2.403A3 3 0 0 0 24 25a3 3 0 1 0 3-3m0-8a1 1 0 1 1-1 1a1 1 0 0 1 1-1m-9 7a1 1 0 1 1 1-1a1 1 0 0 1-1 1m9 5a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path><svg:circle cx="7" cy="8" r="1" fill="currentColor"></svg:circle><svg:circle cx="7" cy="16" r="1" fill="currentColor"></svg:circle><svg:circle cx="7" cy="24" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M22 13V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h16v-2H4v-6h8v-2H4v-6ZM4 5h16v6H4Z"></svg:path>`,
})
export class CarbonEdgeNodeAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEdgeServiceIcon],svg[carbon-edge-service-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 11h2v10H7zm4 0h2v10h-2zm4 0h2v10h-2zm4 0h2v10h-2zm4 0h2v10h-2z"></svg:path><svg:path fill="currentColor" d="M28 26H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2M4 8v16h24V8Z"></svg:path>`,
})
export class CarbonEdgeServiceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEditIcon],svg[carbon-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 26h28v2H2zM25.4 9c.8-.8.8-2 0-2.8l-3.6-3.6c-.8-.8-2-.8-2.8 0l-15 15V24h6.4zm-5-5L24 7.6l-3 3L17.4 7zM6 22v-3.6l10-10l3.6 3.6l-10 10z"></svg:path>`,
})
export class CarbonEditIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEditFilterIcon],svg[carbon-edit-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M26 6H4v3.17l7.41 7.42l.59.58V26h4v-2h2v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-8l-7.41-7.41A2 2 0 0 1 2 9.17V6a2 2 0 0 1 2-2h22z" fill="currentColor"></svg:path><svg:path d="M29.71 11.29l-3-3a1 1 0 0 0-1.42 0L16 17.59V22h4.41l9.3-9.29a1 1 0 0 0 0-1.42zM19.59 20H18v-1.59l5-5L24.59 15zM26 13.59L24.41 12L26 10.41L27.59 12z" fill="currentColor"></svg:path>`,
})
export class CarbonEditFilterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEditOffIcon],svg[carbon-edit-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 28.6L3.4 2L2 3.4l10.1 10.1L4 21.6V28h6.4l8.1-8.1L28.6 30zM9.6 26H6v-3.6l7.5-7.5l3.6 3.6zM29.4 6.2l-3.6-3.6c-.8-.8-2-.8-2.8 0l-8 8l1.4 1.4L20 8.4l3.6 3.6l-3.6 3.6l1.4 1.4l8-8c.8-.8.8-2 0-2.8M25 10.6L21.4 7l3-3L28 7.6z"></svg:path>`,
})
export class CarbonEditOffIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEdtLoopIcon],svg[carbon-edt-loop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.625 22.588a6.13 6.13 0 0 1-4.5-1.9l-3.1-3.2l-3.1 3.2a6.46 6.46 0 0 1-9.1 0a7.03 7.03 0 0 1-1.8-4.7a6.66 6.66 0 0 1 1.9-4.7a6.34 6.34 0 0 1 9 0l3.1 3.2l3.1-3.2a6.34 6.34 0 0 1 9 0a6.83 6.83 0 0 1 0 9.4a6.54 6.54 0 0 1-4.5 1.9m-6.2-6.6l3.1 3.3a4.406 4.406 0 0 0 6.2 0a4.91 4.91 0 0 0 0-6.6a4.406 4.406 0 0 0-6.2 0Zm-9-4.6a4.16 4.16 0 0 0-3.1 1.3a4.84 4.84 0 0 0 0 6.6a4.406 4.406 0 0 0 6.2 0l3.1-3.3l-3.1-3.3a4.77 4.77 0 0 0-3.1-1.3"></svg:path>`,
})
export class CarbonEdtLoopIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEducationIcon],svg[carbon-education-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 30h-2v-3a5.006 5.006 0 0 0-5-5h-6a5.006 5.006 0 0 0-5 5v3H6v-3a7.01 7.01 0 0 1 7-7h6a7.01 7.01 0 0 1 7 7zM5 6a1 1 0 0 0-1 1v9h2V7a1 1 0 0 0-1-1"></svg:path><svg:path fill="currentColor" d="M4 2v2h5v7a7 7 0 0 0 14 0V4h5V2Zm7 2h10v3H11Zm5 12a5 5 0 0 1-5-5V9h10v2a5 5 0 0 1-5 5"></svg:path>`,
})
export class CarbonEducationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEmailIcon],svg[carbon-email-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-2.2 2L16 14.78L6.2 8ZM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24Z"></svg:path>`,
})
export class CarbonEmailIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEmailNewIcon],svg[carbon-email-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 24H4L3.997 8.906l11.434 7.916a1 1 0 0 0 1.138 0L28 8.91V18h2V8a2.003 2.003 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2.003 2.003 0 0 0 2 2h15Zm6.799-16L16 14.784L6.201 8Z"></svg:path><svg:circle cx="26" cy="24" r="4" fill="currentColor"></svg:circle>`,
})
export class CarbonEmailNewIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEmissionsManagementIcon],svg[carbon-emissions-management-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2H2v26a2 2 0 0 0 2 2h11v-2H4zm19 2v2h3.586L19 13.586l-4.293-4.293a1 1 0 0 0-1.414 0L6 16.586L7.414 18L14 11.414l4.293 4.293a1 1 0 0 0 1.414 0L28 7.414V11h2V4zm-.52 16.863A3.98 3.98 0 0 0 20 20h-3v3c0 2.206 1.794 4 4 4h1v3h2v-3h1c2.757 0 5-2.243 5-5v-4h-3a5.01 5.01 0 0 0-4.52 2.863M22 25h-1c-1.103 0-2-.897-2-2v-1h1c1.103 0 2 .897 2 2zm6-3c0 1.654-1.346 3-3 3h-1v-2c0-1.654 1.346-3 3-3h1z"></svg:path>`,
})
export class CarbonEmissionsManagementIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEncryptionIcon],svg[carbon-encryption-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 21.278V19a4 4 0 0 0-8 0v2.278A2 2 0 0 0 20 23v5a2.003 2.003 0 0 0 2 2h6a2.003 2.003 0 0 0 2-2v-5a2 2 0 0 0-1-1.722M25 17a2.003 2.003 0 0 1 2 2v2h-4v-2a2.003 2.003 0 0 1 2-2m-3 11v-5h6v5zM2 2h2v4H2zm12 0h2v4h-2zm4 0h2v4h-2zM2 8h2v8H2zm0 10h2v8H2zm12 0h2v8h-2zM6 8h2v8H6zm12 0h2v6h-2zm-8 18H8a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m-2-6v4h2v-4zm6-4h-2a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m-2-6v4h2v-4zm-2-4H8a2 2 0 0 1-2-2V2h2v2h2V2h2v2a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonEncryptionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEnergyRenewableIcon],svg[carbon-energy-renewable-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 14h-1v-4h-2v4h-2v-4h-2v4h-1a1 1 0 0 0-1 1v4a5.01 5.01 0 0 0 4 4.899V27a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h5a3 3 0 0 0 0-6H5a1 1 0 0 1 0-2h5a3.003 3.003 0 0 0 3-3v-4h1a4.005 4.005 0 0 0 4-4V4h-3a3.98 3.98 0 0 0-2.747 1.106A6 6 0 0 0 7 2H4v3a6.007 6.007 0 0 0 6 6h1v4a1 1 0 0 1-1 1H5a3 3 0 0 0 0 6h5a1 1 0 0 1 0 2H5a3 3 0 0 0 0 6h18a3.003 3.003 0 0 0 3-3v-3.101A5.01 5.01 0 0 0 30 19v-4a1 1 0 0 0-1-1M13 8a2 2 0 0 1 2-2h1v1a2 2 0 0 1-2 2h-1Zm-3 1a4.005 4.005 0 0 1-4-4V4h1a4.005 4.005 0 0 1 4 4v1Zm18 10a3 3 0 0 1-6 0v-3h6Z"></svg:path>`,
})
export class CarbonEnergyRenewableIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEnterpriseIcon],svg[carbon-enterprise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 8h2v4H8zm0 6h2v4H8zm6-6h2v4h-2zm0 6h2v4h-2zm-6 6h2v4H8zm6 0h2v4h-2z"></svg:path><svg:path fill="currentColor" d="M30 14a2 2 0 0 0-2-2h-6V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v26h28ZM4 4h16v24H4Zm18 24V14h6v14Z"></svg:path>`,
})
export class CarbonEnterpriseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEnumerationDefinitionIcon],svg[carbon-enumeration-definition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.533 16.07c0-.964.877-1.445 1.788-1.445c1.049 0 1.479.653 1.479 1.925V22H25v-5.673c0-2.235-1.031-3.507-2.871-3.507c-1.392 0-2.149.74-2.51 1.702h-.086v-1.496h-2.2V22h2.2zm-4.625 3.918H9.269v-3.06h4.986v-2.011H9.269v-2.905h5.639V10H7v12h7.908z"></svg:path><svg:path fill="currentColor" d="M2 4v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2m26 24H4V4h24z"></svg:path>`,
})
export class CarbonEnumerationDefinitionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEnumerationUsageIcon],svg[carbon-enumeration-usage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.533 16.07c0-.964.877-1.445 1.788-1.445c1.049 0 1.479.653 1.479 1.925V22H25v-5.673c0-2.235-1.031-3.507-2.871-3.507c-1.392 0-2.149.74-2.51 1.702h-.086v-1.496h-2.2V22h2.2zm-4.625 3.918H9.269v-3.06h4.986v-2.011H9.269v-2.905h5.639V10H7v12h7.908z"></svg:path><svg:path fill="currentColor" d="M21 30H11c-4.963 0-9-4.037-9-9V11c0-4.963 4.037-9 9-9h10c4.963 0 9 4.037 9 9v10c0 4.963-4.037 9-9 9M11 4c-3.86 0-7 3.14-7 7v10c0 3.86 3.14 7 7 7h10c3.86 0 7-3.14 7-7V11c0-3.86-3.14-7-7-7z"></svg:path>`,
})
export class CarbonEnumerationUsageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEqualApproximatelyIcon],svg[carbon-equal-approximately-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 15c-1.777 0-3.231-.873-4.514-1.642C14.322 12.659 13.223 12 12 12c-1.398 0-2.449.863-3.293 1.707l-1.414-1.414C8.36 11.225 9.86 10 12 10c1.777 0 3.231.873 4.514 1.642C17.678 12.341 18.777 13 20 13c1.398 0 2.449-.863 3.293-1.707l1.414 1.414C23.64 13.775 22.14 15 20 15m0 7c-1.777 0-3.231-.873-4.514-1.642C14.322 19.659 13.223 19 12 19c-1.398 0-2.449.863-3.293 1.707l-1.414-1.414C8.36 18.225 9.86 17 12 17c1.777 0 3.231.873 4.514 1.642C17.678 19.341 18.777 20 20 20c1.398 0 2.449-.863 3.293-1.707l1.414 1.414C23.64 20.775 22.14 22 20 22"></svg:path><svg:path fill="currentColor" d="M16 30C8.28 30 2 23.72 2 16S8.28 2 16 2s14 6.28 14 14s-6.28 14-14 14m0-26C9.383 4 4 9.383 4 16s5.383 12 12 12s12-5.383 12-12S22.617 4 16 4"></svg:path>`,
})
export class CarbonEqualApproximatelyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEqualizerIcon],svg[carbon-equalizer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 28h8v2H2zm0-4h8v2H2zm10 4h8v2h-8zm0-4h8v2h-8zM2 20h8v2H2zm10 0h8v2h-8zM2 16h8v2H2zm10 0h8v2h-8zm0-4h8v2h-8zm0-4h8v2h-8zm0-4h8v2h-8zm10 24h8v2h-8zm0-4h8v2h-8z"></svg:path>`,
})
export class CarbonEqualizerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEraseIcon],svg[carbon-erase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 27h23v2H7zm20.38-16.49l-7.93-7.92a2 2 0 0 0-2.83 0l-14 14a2 2 0 0 0 0 2.83L7.13 24h9.59l10.66-10.66a2 2 0 0 0 0-2.83M15.89 22H8l-4-4l6.31-6.31l7.93 7.92zm3.76-3.76l-7.92-7.93L18 4l8 7.93z"></svg:path>`,
})
export class CarbonEraseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonErase3dIcon],svg[carbon-erase-3d-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M30.415 16.513l-7.927-7.927a2.001 2.001 0 0 0-2.83 0L5.622 22.624a2.002 2.002 0 0 0 0 2.83L10.166 30h9.591l10.658-10.659a2.001 2.001 0 0 0 0-2.828zM18.929 28h-7.934l-3.96-3.962l6.312-6.312l7.928 7.928zm3.76-3.76l-7.928-7.928L21.074 10l7.927 7.927z" fill="currentColor"></svg:path><svg:path d="M11 12H8V2h3a3.003 3.003 0 0 1 3 3v4a3.003 3.003 0 0 1-3 3zm-1-2h1a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-1z" fill="currentColor"></svg:path><svg:path d="M4 2H0v2h4v2H1v2h3v2H0v2h4a2.003 2.003 0 0 0 2-2V4a2.002 2.002 0 0 0-2-2z" fill="currentColor"></svg:path>`,
})
export class CarbonErase3dIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonErrorIcon],svg[carbon-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16A14 14 0 1 0 16 2A14 14 0 0 0 2 16m23.15 7.75L8.25 6.85a12 12 0 0 1 16.9 16.9M8.24 25.16a12 12 0 0 1-1.4-16.89l16.89 16.89a12 12 0 0 1-15.49 0"></svg:path>`,
})
export class CarbonErrorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonErrorFilledIcon],svg[carbon-error-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M9 10.555L10.555 9L23 21.444L21.444 23z"></svg:path><svg:path fill="currentColor" d="M16 2A13.914 13.914 0 0 0 2 16a13.914 13.914 0 0 0 14 14a13.914 13.914 0 0 0 14-14A13.914 13.914 0 0 0 16 2m5.445 21L9 10.556L10.556 9L23 21.445Z"></svg:path>`,
})
export class CarbonErrorFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonErrorOutlineIcon],svg[carbon-error-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 10.555L10.555 9L23 21.444L21.444 23z"></svg:path><svg:path fill="currentColor" d="M16 2A13.914 13.914 0 0 0 2 16a13.914 13.914 0 0 0 14 14a13.914 13.914 0 0 0 14-14A13.914 13.914 0 0 0 16 2m0 26a12 12 0 1 1 12-12a12.035 12.035 0 0 1-12 12"></svg:path>`,
})
export class CarbonErrorOutlineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEventIcon],svg[carbon-event-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 6a2 2 0 0 0-2-2h-4V2h-2v2h-8V2h-2v2H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h4v-2H6V6h4v2h2V6h8v2h2V6h4v6h2Z"></svg:path><svg:path fill="currentColor" d="m21 15l2.549 4.938l5.451.791l-4 3.844L26 30l-5-2.562L16 30l1-5.427l-4-3.844l5.6-.791z"></svg:path>`,
})
export class CarbonEventIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEventChangeIcon],svg[carbon-event-change-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 15h2v7h-2z"></svg:path><svg:circle cx="18" cy="25" r="1.25" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M29 30H7a1 1 0 0 1-.886-1.464l11-21c.173-.33.53-.536.886-.536s.713.206.886.536l11 21A1 1 0 0 1 29 30M8.653 28h18.694L18 10.155zM7 23H3a1 1 0 0 1-.894-1.447l2.5-5l1.789.894L4.618 21H7zm-1.394-8.447l2.5-5l1.788.894l-2.5 5zm5.289-6.106l-1.79-.894l2.5-5c.17-.339.532-.553.895-.553s.725.214.894.553l2 4l-1.789.894l-1.105-2.21z"></svg:path>`,
})
export class CarbonEventChangeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEventIncidentIcon],svg[carbon-event-incident-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.018 26.722l.998 1.732l2.978-1.722V30h1.997v-3.268l3.01 1.74L31 26.74L27.99 25l3-1.735l-.998-1.733l-3.001 1.736V20h-1.997v3.267l-2.996-1.732L21 23.268L23.995 25zM16 23a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m-1-11h2v9h-2z"></svg:path><svg:path fill="currentColor" d="M18 30H3a1 1 0 0 1-.887-1.461l13-25c.172-.331.53-.539.887-.539s.715.208.887.539l6.76 13l-1.774.922L16 6.168L4.647 28H18z"></svg:path>`,
})
export class CarbonEventIncidentIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEventScheduleIcon],svg[carbon-event-schedule-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 30a8 8 0 1 1 8-8a8 8 0 0 1-8 8m0-14a6 6 0 1 0 6 6a6 6 0 0 0-6-6"></svg:path><svg:path fill="currentColor" d="M22.59 25L20 22.41V18h2v3.59l2 2z"></svg:path><svg:path fill="currentColor" d="M28 6a2 2 0 0 0-2-2h-4V2h-2v2h-8V2h-2v2H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h4v-2H6V6h4v2h2V6h8v2h2V6h4v6h2Z"></svg:path>`,
})
export class CarbonEventScheduleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEventWarningIcon],svg[carbon-event-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.38 28h-6.762L24 21.236zM24 18a1 1 0 0 0-.895.553l-5 10A1 1 0 0 0 19 30h10a1 1 0 0 0 .921-1.39l-5.027-10.057A1 1 0 0 0 24 18m-8 5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m-1-11h2v9h-2z"></svg:path><svg:path fill="currentColor" d="M15 30H3a1 1 0 0 1-.887-1.461l13-25c.172-.331.53-.539.887-.539s.715.208.887.539l6 11.538l-1.774.923L16 6.168L4.647 28H15z"></svg:path>`,
})
export class CarbonEventWarningIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEventsIcon],svg[carbon-events-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 14h-2v2h2a3.003 3.003 0 0 1 3 3v4h2v-4a5.006 5.006 0 0 0-5-5M24 4a3 3 0 1 1-3 3a3 3 0 0 1 3-3m0-2a5 5 0 1 0 5 5a5 5 0 0 0-5-5m-1 28h-2v-2a3.003 3.003 0 0 0-3-3h-4a3.003 3.003 0 0 0-3 3v2H9v-2a5.006 5.006 0 0 1 5-5h4a5.006 5.006 0 0 1 5 5zm-7-17a3 3 0 1 1-3 3a3 3 0 0 1 3-3m0-2a5 5 0 1 0 5 5a5 5 0 0 0-5-5m-8 3H6a5.006 5.006 0 0 0-5 5v4h2v-4a3.003 3.003 0 0 1 3-3h2zM8 4a3 3 0 1 1-3 3a3 3 0 0 1 3-3m0-2a5 5 0 1 0 5 5a5 5 0 0 0-5-5"></svg:path>`,
})
export class CarbonEventsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEventsAltIcon],svg[carbon-events-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 31h2v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h2v-2a3.003 3.003 0 0 0-3-3h-6a3.003 3.003 0 0 0-3 3zm6-6a4 4 0 1 1 4-4a4.004 4.004 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2.003 2.003 0 0 0-2-2M2 31h2v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h2v-2a3.003 3.003 0 0 0-3-3H5a3.003 3.003 0 0 0-3 3zm6-6a4 4 0 1 1 4-4a4.004 4.004 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2m10-3h2v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h2v-2a3.003 3.003 0 0 0-3-3h-6a3.003 3.003 0 0 0-3 3zm6-6a4 4 0 1 1 4-4a4.004 4.004 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2M2 16h2v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h2v-2a3.003 3.003 0 0 0-3-3H5a3.003 3.003 0 0 0-3 3zm6-6a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonEventsAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonExamModeIcon],svg[carbon-exam-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 23v3H7v-9.17l3.59 3.58L12 19l-6-6l-6 6l1.41 1.41L5 16.83V26a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-3zm2-16v9.17l3.59-3.58L32 14l-6 6l-6-6l1.41-1.41L25 16.17V7H13V5h12a2 2 0 0 1 2 2M8 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M4 4v4h4V4z"></svg:path>`,
})
export class CarbonExamModeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonExecutableProgramIcon],svg[carbon-executable-program-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m25 21l7 5l-7 5z"></svg:path><svg:path fill="currentColor" d="m20.17 19l-2.59 2.59L19 23l4-4l-4-4l-1.42 1.41zm-8.34 0l2.59-2.59L13 15l-4 4l4 4l1.42-1.41z"></svg:path><svg:circle cx="9" cy="8" r="1" fill="currentColor"></svg:circle><svg:circle cx="6" cy="8" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M21 26H4V12h24v7h2V6c0-1.102-.897-2-2-2H4c-1.103 0-2 .898-2 2v20c0 1.103.897 2 2 2h17zM4 6h24v4H4z"></svg:path>`,
})
export class CarbonExecutableProgramIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonExitIcon],svg[carbon-exit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 4h2v24h-2zM11.414 20.586L7.828 17H22v-2H7.828l3.586-3.586L10 10l-6 6l6 6z"></svg:path>`,
})
export class CarbonExitIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonExpandAllIcon],svg[carbon-expand-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10h14a2.003 2.003 0 0 0 2-2V4a2.003 2.003 0 0 0-2-2H12a2.003 2.003 0 0 0-2 2v1H6V2H4v23a2.003 2.003 0 0 0 2 2h4v1a2.003 2.003 0 0 0 2 2h14a2.003 2.003 0 0 0 2-2v-4a2.003 2.003 0 0 0-2-2H12a2.003 2.003 0 0 0-2 2v1H6v-8h4v1a2.003 2.003 0 0 0 2 2h14a2.003 2.003 0 0 0 2-2v-4a2.003 2.003 0 0 0-2-2H12a2.003 2.003 0 0 0-2 2v1H6V7h4v1a2.003 2.003 0 0 0 2 2m0-6h14l.001 4H12Zm0 20h14l.001 4H12Zm0-10h14l.001 4H12Z"></svg:path>`,
})
export class CarbonExpandAllIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonExpandCategoriesIcon],svg[carbon-expand-categories-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 26h6v2h-6zm0-8h8v2h-8zm0-8h10v2H20zm-5-6h2v24h-2zm-4.414-.041L7 7.249L3.412 3.958L2 5.373L7 10l5-4.627z"></svg:path>`,
})
export class CarbonExpandCategoriesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonExploreIcon],svg[carbon-explore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.707 9.293a1 1 0 0 0-1.023-.242l-9 3a1 1 0 0 0-.633.633l-3 9a1 1 0 0 0 1.265 1.265l9-3a1 1 0 0 0 .633-.633l3-9a1 1 0 0 0-.242-1.023M11.581 20.42l2.21-6.628l4.419 4.419Z"></svg:path><svg:path fill="currentColor" d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4"></svg:path>`,
})
export class CarbonExploreIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonExportIcon],svg[carbon-export-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 24v4H6v-4H4v4l.008-.005A2 2 0 0 0 6 30h20a2 2 0 0 0 2-2v-4zM6 12l1.411 1.405L15 5.825V24h2V5.825l7.591 7.58L26 12L16 2z"></svg:path>`,
})
export class CarbonExportIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonEyedropperIcon],svg[carbon-eyedropper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 27h3v3H2zM29.71 7.29l-5-5a1 1 0 0 0-1.41 0L20 5.59l-1.29-1.3l-1.42 1.42L18.59 7L8.29 17.29A1 1 0 0 0 8 18v1.59l-2.71 2.7a1 1 0 0 0 0 1.41l3 3a1 1 0 0 0 1.41 0l2.71-2.7H14a1 1 0 0 0 .71-.29L25 13.41l1.29 1.3l1.42-1.42l-1.3-1.29l3.3-3.29a1 1 0 0 0 0-1.41zM13.59 22h-2L9 24.59L7.41 23L10 20.41v-2l10-10L23.59 12zM25 10.59L21.41 7L24 4.41L27.59 8z"></svg:path>`,
})
export class CarbonEyedropperIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFaceActivatedIcon],svg[carbon-face-activated-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path><svg:path fill="currentColor" d="M11.5 11a2.5 2.5 0 1 0 2.5 2.5a2.48 2.48 0 0 0-2.5-2.5m9 0a2.5 2.5 0 1 0 2.5 2.5a2.48 2.48 0 0 0-2.5-2.5M9 20a8.13 8.13 0 0 0 14 0z"></svg:path>`,
})
export class CarbonFaceActivatedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFaceActivatedAddIcon],svg[carbon-face-activated-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 4h-4V0h-2v4h-4v2h4v4h2V6h4zm-18.5 7a2.5 2.5 0 1 0 2.5 2.5a2.48 2.48 0 0 0-2.5-2.5m9 0a2.5 2.5 0 1 0 2.5 2.5a2.48 2.48 0 0 0-2.5-2.5M9 20a8.13 8.13 0 0 0 14 0z"></svg:path><svg:path fill="currentColor" d="M27.82 14A12 12 0 1 1 16 4V2a14 14 0 1 0 14 14a15 15 0 0 0-.16-2Z"></svg:path>`,
})
export class CarbonFaceActivatedAddIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFaceActivatedFilledIcon],svg[carbon-face-activated-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m-4.5 9A2.5 2.5 0 1 1 9 13.5a2.48 2.48 0 0 1 2.5-2.5M16 24a8.11 8.11 0 0 1-7-4h14a8.11 8.11 0 0 1-7 4m4.5-8a2.5 2.5 0 1 1 2.5-2.5a2.48 2.48 0 0 1-2.5 2.5"></svg:path>`,
})
export class CarbonFaceActivatedFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFaceAddIcon],svg[carbon-face-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 22a6 6 0 0 1-5.14-2.92l-1.71 1a8 8 0 0 0 13.7 0l-1.71-1A6 6 0 0 1 16 22M30 4h-4V0h-2v4h-4v2h4v4h2V6h4zm-18.5 7a2.5 2.5 0 1 0 2.5 2.5a2.48 2.48 0 0 0-2.5-2.5m9 0a2.5 2.5 0 1 0 2.5 2.5a2.48 2.48 0 0 0-2.5-2.5"></svg:path><svg:path fill="currentColor" d="M27.61 13a12.3 12.3 0 0 1 .39 3A12 12 0 1 1 16 4V2a14 14 0 1 0 13.67 11Z"></svg:path>`,
})
export class CarbonFaceAddIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFaceCoolIcon],svg[carbon-face-cool-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 24a8 8 0 0 0 6.85-3.89l-1.71-1a6 6 0 0 1-10.28 0l-1.71 1A8 8 0 0 0 16 24"></svg:path><svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 2a12 12 0 0 1 10.89 7H25a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1H5.11A12 12 0 0 1 16 4m0 24A12 12 0 0 1 4 16a12 12 0 0 1 .4-3H7v2a2 2 0 0 0 2 2h3.31a2 2 0 0 0 2-1.67l.52-3.33h2.34l.55 3.33a2 2 0 0 0 2 1.67H23a2 2 0 0 0 2-2v-2h2.6a12 12 0 0 1 .4 3a12 12 0 0 1-12 12"></svg:path>`,
})
export class CarbonFaceCoolIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFaceDissatisfiedIcon],svg[carbon-face-dissatisfied-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path><svg:path fill="currentColor" d="M11.5 11a2.5 2.5 0 1 0 2.5 2.5a2.5 2.5 0 0 0-2.5-2.5m9 0a2.5 2.5 0 1 0 2.5 2.5a2.5 2.5 0 0 0-2.5-2.5M16 19a8 8 0 0 0-6.85 3.89l1.71 1a6 6 0 0 1 10.28 0l1.71-1A8 8 0 0 0 16 19"></svg:path>`,
})
export class CarbonFaceDissatisfiedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFaceDissatisfiedFilledIcon],svg[carbon-face-dissatisfied-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m-4.5 9A2.5 2.5 0 1 1 9 13.5a2.48 2.48 0 0 1 2.54-2.5Zm9.64 12.92a6 6 0 0 0-10.28 0l-1.71-1a8 8 0 0 1 13.7 0ZM20.5 16a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"></svg:path>`,
})
export class CarbonFaceDissatisfiedFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFaceDizzyIcon],svg[carbon-face-dizzy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path><svg:path fill="currentColor" d="M24.41 11L23 9.59l-2 2l-2-2L17.59 11l2 2l-2 2L19 16.41l2-2l2 2L24.41 15l-2-2zm-10 0L13 9.59l-2 2l-2-2L7.59 11l2 2l-2 2L9 16.41l2-2l2 2L14.41 15l-2-2zM16 19a3 3 0 1 0 3 3a3 3 0 0 0-3-3"></svg:path>`,
})
export class CarbonFaceDizzyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFaceDizzyFilledIcon],svg[carbon-face-dizzy-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2M9 16.41L7.59 15l2-2l-2-2L9 9.59l2 2l2-2L14.41 11l-2 2l2 2L13 16.41l-2-2ZM16 25a3 3 0 1 1 3-3a3 3 0 0 1-3 3m8.41-10L23 16.41l-2-2l-2 2L17.59 15l2-2l-2-2L19 9.59l2 2l2-2L24.41 11l-2 2Z"></svg:path>`,
})
export class CarbonFaceDizzyFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFaceMaskIcon],svg[carbon-face-mask-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 11a2.5 2.5 0 1 0 2.5 2.5a2.5 2.5 0 0 0-2.5-2.5m9 0a2.5 2.5 0 1 0 2.5 2.5a2.5 2.5 0 0 0-2.5-2.5"></svg:path><svg:path fill="currentColor" d="M30 16A14 14 0 1 0 8.9 28.042l.015.156A1.993 1.993 0 0 0 10.905 30h10.19a1.993 1.993 0 0 0 1.99-1.8l.015-.158A13.97 13.97 0 0 0 30 16M16 4a11.99 11.99 0 0 1 11.97 11.397L22.764 18H9.236L4.03 15.397A11.99 11.99 0 0 1 16 4M4.12 17.678l3.94 1.97l.581 5.81a11.97 11.97 0 0 1-4.521-7.78M21.095 28h-10.19l-.8-8h11.79Zm2.264-2.542l.581-5.81l3.94-1.97a11.97 11.97 0 0 1-4.52 7.78"></svg:path>`,
})
export class CarbonFaceMaskIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFaceNeutralIcon],svg[carbon-face-neutral-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path><svg:path fill="currentColor" d="M11.5 11a2.5 2.5 0 1 0 2.5 2.5a2.5 2.5 0 0 0-2.5-2.5m9 0a2.5 2.5 0 1 0 2.5 2.5a2.5 2.5 0 0 0-2.5-2.5M10 20h12v2H10z"></svg:path>`,
})
export class CarbonFaceNeutralIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFaceNeutralFilledIcon],svg[carbon-face-neutral-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2M9 13.5a2.5 2.5 0 1 1 2.5 2.5A2.5 2.5 0 0 1 9 13.5M22 22H10v-2h12Zm-1.5-6a2.5 2.5 0 1 1 2.5-2.5a2.5 2.5 0 0 1-2.5 2.5"></svg:path>`,
})
export class CarbonFaceNeutralFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFacePendingIcon],svg[carbon-face-pending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path><svg:path fill="currentColor" d="M11.5 11a2.5 2.5 0 1 0 2.5 2.5a2.48 2.48 0 0 0-2.5-2.5m9 0a2.5 2.5 0 1 0 2.5 2.5a2.48 2.48 0 0 0-2.5-2.5"></svg:path>`,
})
export class CarbonFacePendingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFacePendingFilledIcon],svg[carbon-face-pending-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m-4.5 14a2.5 2.5 0 1 1 2.5-2.5a2.48 2.48 0 0 1-2.5 2.5m9 0a2.5 2.5 0 1 1 2.5-2.5a2.48 2.48 0 0 1-2.5 2.5"></svg:path>`,
})
export class CarbonFacePendingFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFaceSatisfiedIcon],svg[carbon-face-satisfied-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path><svg:path fill="currentColor" d="M11.5 11a2.5 2.5 0 1 0 2.5 2.5a2.48 2.48 0 0 0-2.5-2.5m9 0a2.5 2.5 0 1 0 2.5 2.5a2.48 2.48 0 0 0-2.5-2.5M16 24a8 8 0 0 0 6.85-3.89l-1.71-1a6 6 0 0 1-10.28 0l-1.71 1A8 8 0 0 0 16 24"></svg:path>`,
})
export class CarbonFaceSatisfiedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFaceSatisfiedFilledIcon],svg[carbon-face-satisfied-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m-4.5 9A2.5 2.5 0 1 1 9 13.5a2.48 2.48 0 0 1 2.5-2.5M16 24a8 8 0 0 1-6.85-3.89l1.71-1a6 6 0 0 0 10.28 0l1.71 1A8 8 0 0 1 16 24m4.5-8a2.5 2.5 0 1 1 2.5-2.5a2.48 2.48 0 0 1-2.5 2.5"></svg:path>`,
})
export class CarbonFaceSatisfiedFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFaceWinkIcon],svg[carbon-face-wink-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path><svg:path fill="currentColor" d="M20.5 11a2.5 2.5 0 1 0 2.5 2.5a2.5 2.5 0 0 0-2.5-2.5M8 13h6v2H8zm8 11a8 8 0 0 0 6.85-3.89l-1.71-1a6 6 0 0 1-10.28 0l-1.71 1A8 8 0 0 0 16 24"></svg:path>`,
})
export class CarbonFaceWinkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFaceWinkFilledIcon],svg[carbon-face-wink-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2M8 13h6v2H8Zm8 11a8 8 0 0 1-6.85-3.89l1.71-1a6 6 0 0 0 10.28 0l1.71 1A8 8 0 0 1 16 24m4.5-8a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5"></svg:path>`,
})
export class CarbonFaceWinkFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFactorIcon],svg[carbon-factor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 28V9h-3V4h2V2h-6v2h2v5h-3v19h-4V16h-3v-5h2V9H8v2h2v5H7v12H4V2H2v26a2 2 0 0 0 2 2h26v-2Zm-14 0H9V18h4Zm8-17h4v17h-4Z"></svg:path>`,
})
export class CarbonFactorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFadeIcon],svg[carbon-fade-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.24 25.14L7 26.67a13.8 13.8 0 0 0 4.18 2.44l.69-1.87a12 12 0 0 1-3.63-2.1M4.19 18l-2 .41A14.1 14.1 0 0 0 3.86 23l1.73-1a12.4 12.4 0 0 1-1.4-4m7.63-13.24l-.69-1.87A13.8 13.8 0 0 0 7 5.33l1.24 1.53a12 12 0 0 1 3.58-2.1M5.59 10L3.86 9a14.4 14.4 0 0 0-1.64 4.59l2 .34A12 12 0 0 1 5.59 10M16 2v2a12 12 0 0 1 0 24v2a14 14 0 0 0 0-28"></svg:path>`,
})
export class CarbonFadeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFavoriteIcon],svg[carbon-favorite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.45 6a5.47 5.47 0 0 1 3.91 1.64a5.7 5.7 0 0 1 0 8L16 26.13L5.64 15.64a5.7 5.7 0 0 1 0-8a5.48 5.48 0 0 1 7.82 0l2.54 2.6l2.53-2.58A5.44 5.44 0 0 1 22.45 6m0-2a7.47 7.47 0 0 0-5.34 2.24L16 7.36l-1.11-1.12a7.49 7.49 0 0 0-10.68 0a7.72 7.72 0 0 0 0 10.82L16 29l11.79-11.94a7.72 7.72 0 0 0 0-10.82A7.5 7.5 0 0 0 22.45 4"></svg:path>`,
})
export class CarbonFavoriteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFavoriteFilledIcon],svg[carbon-favorite-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.5 4c-2 0-3.9.8-5.3 2.2L16 7.4l-1.1-1.1c-2.9-3-7.7-3-10.6-.1l-.1.1c-3 3-3 7.8 0 10.8L16 29l11.8-11.9c3-3 3-7.8 0-10.8C26.4 4.8 24.5 4 22.5 4"></svg:path>`,
})
export class CarbonFavoriteFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFavoriteHalfIcon],svg[carbon-favorite-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.21 17.062L16 29l11.79-11.939a7.73 7.73 0 0 0 0-10.823a7.494 7.494 0 0 0-10.684 0L16 7.364l-1.106-1.126a7.494 7.494 0 0 0-10.684 0a7.73 7.73 0 0 0 0 10.824m22.145-1.417L16 26.125V10.23q1.27-1.288 2.541-2.574a5.477 5.477 0 0 1 7.814 0a5.71 5.71 0 0 1 0 7.989"></svg:path>`,
})
export class CarbonFavoriteHalfIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFeatureMembershipIcon],svg[carbon-feature-membership-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 28v-9l8-8l-9-9l-9 9l8 8v9a2 2 0 0 0 2 2h14v-2zM13 4.828L19.172 11L13 17.172L6.828 11z"></svg:path>`,
})
export class CarbonFeatureMembershipIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFeatureMembershipFilledIcon],svg[carbon-feature-membership-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 28v-9l8-8l-9-9l-9 9l8 8v9a2 2 0 0 0 2 2h14v-2z"></svg:path>`,
})
export class CarbonFeatureMembershipFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFeatureTypingIcon],svg[carbon-feature-typing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="17.5" cy="22.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="6.5" cy="22.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M13 28V18h7a1 1 0 0 0 .868-1.496l-8-14C12.676 2.168 12.338 2 12 2s-.676.168-.868.504l-8 14A1 1 0 0 0 4 18h7v10a2 2 0 0 0 2 2h15v-2zM5.723 16L12 5.016L18.277 16z"></svg:path>`,
})
export class CarbonFeatureTypingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFetchUploadIcon],svg[carbon-fetch-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 7L6 17l1.41 1.41L15 10.83V28H2v2h13a2 2 0 0 0 2-2V10.83l7.59 7.58L26 17Z"></svg:path><svg:path fill="currentColor" d="M6 8V4h20v4h2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4Z"></svg:path>`,
})
export class CarbonFetchUploadIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFetchUploadCloudIcon],svg[carbon-fetch-upload-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 13l-5 5l1.41 1.41L15 16.83V28H6v2h9a2 2 0 0 0 2-2V16.83l2.59 2.58L21 18Z"></svg:path><svg:path fill="currentColor" d="M23.5 22H23v-2h.5a4.498 4.498 0 0 0 .356-8.981l-.815-.064l-.099-.812a6.994 6.994 0 0 0-13.883 0l-.1.812l-.815.064A4.498 4.498 0 0 0 8.5 20H9v2h-.5A6.497 6.497 0 0 1 7.2 9.136a8.994 8.994 0 0 1 17.6 0A6.497 6.497 0 0 1 23.5 22"></svg:path>`,
})
export class CarbonFetchUploadCloudIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFileStorageIcon],svg[carbon-file-storage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 20h-2v2h2v6H4v-6h2v-2H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2"></svg:path><svg:circle cx="7" cy="25" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m22.707 7.293l-5-5A1 1 0 0 0 17 2h-6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8a1 1 0 0 0-.293-.707M20.586 8H17V4.414ZM11 20V4h4v4a2 2 0 0 0 2 2h4v10Z"></svg:path>`,
})
export class CarbonFileStorageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFilterIcon],svg[carbon-filter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 28h-4a2 2 0 0 1-2-2v-7.59L4.59 11A2 2 0 0 1 4 9.59V6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v3.59a2 2 0 0 1-.59 1.41L20 18.41V26a2 2 0 0 1-2 2M6 6v3.59l8 8V26h4v-8.41l8-8V6Z"></svg:path>`,
})
export class CarbonFilterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFilterEditIcon],svg[carbon-filter-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 6H4v3.17l7.41 7.42l.59.58V26h4v-2h2v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-8l-7.41-7.41A2 2 0 0 1 2 9.17V6a2 2 0 0 1 2-2h22Z"></svg:path><svg:path fill="currentColor" d="m29.71 11.29l-3-3a1 1 0 0 0-1.42 0L16 17.59V22h4.41l9.3-9.29a1 1 0 0 0 0-1.42M19.59 20H18v-1.59l5-5L24.59 15ZM26 13.59L24.41 12L26 10.41L27.59 12Z"></svg:path>`,
})
export class CarbonFilterEditIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFilterRemoveIcon],svg[carbon-filter-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 11.414L28.586 10L24 14.586L19.414 10L18 11.414L22.586 16L18 20.585L19.415 22L24 17.414L28.587 22L30 20.587L25.414 16z"></svg:path><svg:path fill="currentColor" d="M4 4a2 2 0 0 0-2 2v3.17a2 2 0 0 0 .586 1.415L10 18v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2h-2v2h-4v-8.83l-.586-.585L4 9.171V6h20v2h2V6a2 2 0 0 0-2-2Z"></svg:path>`,
})
export class CarbonFilterRemoveIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFilterResetIcon],svg[carbon-filter-reset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.5 9a7.45 7.45 0 0 0-6.5 3.792V8h-2v8h8v-2h-4.383a5.494 5.494 0 1 1 4.883 8H22v2h.5a7.5 7.5 0 0 0 0-15"></svg:path><svg:path fill="currentColor" d="M26 6H4v3.171l7.414 7.414l.586.586V26h4v-2h2v2a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-8l-7.414-7.415A2 2 0 0 1 2 9.171V6a2 2 0 0 1 2-2h22Z"></svg:path>`,
})
export class CarbonFilterResetIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFinanceIcon],svg[carbon-finance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 28h28v2H2zm25-17a1 1 0 0 0 1-1V7a1 1 0 0 0-.66-.94l-11-4a1 1 0 0 0-.68 0l-11 4A1 1 0 0 0 4 7v3a1 1 0 0 0 1 1h1v13H4v2h24v-2h-2V11zM6 7.7l10-3.64L26 7.7V9H6zM18 24h-4V11h4zM8 11h4v13H8zm16 13h-4V11h4z"></svg:path>`,
})
export class CarbonFinanceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFinancialAssetsIcon],svg[carbon-financial-assets-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 16h-2v2h-1c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h4v2h-6v2h3v2h2v-2h1c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2h-4v-2h6v-2h-3zm1-8h-6V4c0-1.1-.9-2-2-2h-8c-1.1 0-2 .9-2 2v4H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h15v-2H4V10h24v4h2v-4c0-1.1-.9-2-2-2m-8 0h-8V4h8z"></svg:path>`,
})
export class CarbonFinancialAssetsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFingerprintRecognitionIcon],svg[carbon-fingerprint-recognition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5.21a.77.77 0 0 1-.46-1.38A15.46 15.46 0 0 1 16 1c2.66 0 6.48.45 9.5 2.62a.77.77 0 0 1 .18 1.07a.78.78 0 0 1-1.08.17A15 15 0 0 0 16 2.53a14 14 0 0 0-8.5 2.52a.74.74 0 0 1-.5.16"></svg:path><svg:path fill="currentColor" d="M28.23 12.26a.78.78 0 0 1-.63-.33C25.87 9.49 22.78 6.24 16 6.24a14 14 0 0 0-11.63 5.7a.77.77 0 0 1-1.07.17a.76.76 0 0 1-.15-1.11A15.54 15.54 0 0 1 16 4.71c5.61 0 9.81 2.08 12.84 6.34a.77.77 0 0 1-.19 1.07a.8.8 0 0 1-.42.14"></svg:path><svg:path fill="currentColor" d="M12.28 31a.78.78 0 0 1-.72-.49a.75.75 0 0 1 .44-1c4.37-1.68 7-5.12 7-9.21a2.8 2.8 0 0 0-3-3c-1.86 0-2.76 1-3 3.35a4.27 4.27 0 0 1-4.52 3.83a4.27 4.27 0 0 1-4.32-4.59A11.71 11.71 0 0 1 16 8.39a12 12 0 0 1 12 11.93a18.7 18.7 0 0 1-1.39 6.5a.78.78 0 0 1-1 .41a.76.76 0 0 1-.41-1a17.3 17.3 0 0 0 1.27-5.91A10.45 10.45 0 0 0 16 9.92a10.18 10.18 0 0 0-10.38 10a2.77 2.77 0 0 0 2.79 3.06a2.74 2.74 0 0 0 3-2.48c.36-3.11 1.89-4.69 4.56-4.69a4.31 4.31 0 0 1 4.52 4.56c0 4.74-3 8.72-8 10.63a1 1 0 0 1-.21 0"></svg:path><svg:path fill="currentColor" d="M19.77 30.28a.8.8 0 0 1-.52-.2a.76.76 0 0 1 0-1.08a12.63 12.63 0 0 0 3.54-8.68c0-1.56-.48-6.65-6.7-6.65a6.83 6.83 0 0 0-4.94 1.87A6.17 6.17 0 0 0 9.32 20a.77.77 0 0 1-.77.76a.76.76 0 0 1-.77-.76A7.73 7.73 0 0 1 10 14.46a8.34 8.34 0 0 1 6-2.32c6.08 0 8.24 4.4 8.24 8.18a14.1 14.1 0 0 1-3.9 9.68a.75.75 0 0 1-.57.28"></svg:path><svg:path fill="currentColor" d="M8.66 27.74a14 14 0 0 1-1.56-.09a.76.76 0 1 1 .17-1.52c2.49.28 4.45-.16 5.84-1.32a6.37 6.37 0 0 0 2.12-4.53a.75.75 0 0 1 .82-.71a.78.78 0 0 1 .72.81A7.9 7.9 0 0 1 14.09 26a8.2 8.2 0 0 1-5.43 1.74"></svg:path>`,
})
export class CarbonFingerprintRecognitionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFireIcon],svg[carbon-fire-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.832 16.969c-.272-.647-.581-1.38-.883-2.285c-.79-2.369 1.734-4.953 1.758-4.977l-1.414-1.414c-.14.14-3.423 3.478-2.242 7.023c.326.978.652 1.75.938 2.43A9.4 9.4 0 0 1 24 22a6.24 6.24 0 0 1-4.19 5.293a8.52 8.52 0 0 0-2.103-8l-1.044-1.044l-.582 1.357c-1.836 4.284-4.021 6.154-5.306 6.934A5.84 5.84 0 0 1 8 22a9.6 9.6 0 0 1 .929-3.629A11.3 11.3 0 0 0 10 14v-1.778c.874.36 2 1.303 2 3.778v2.604l1.743-1.935c3.112-3.454 2.463-7.567 1.206-10.308A4.486 4.486 0 0 1 18 11h2c0-5.537-4.579-7-7-7h-2l1.2 1.599c.137.185 2.862 3.927 1.353 7.688A4.94 4.94 0 0 0 9 10H8v4a9.6 9.6 0 0 1-.929 3.629A11.3 11.3 0 0 0 6 22c0 3.848 3.823 8 10 8s10-4.152 10-8a11.4 11.4 0 0 0-1.168-5.031M12.835 27.526a16.5 16.5 0 0 0 4.367-5.598a6.1 6.1 0 0 1 .257 5.971A11 11 0 0 1 16 28a10.3 10.3 0 0 1-3.165-.474"></svg:path>`,
})
export class CarbonFireIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFirewallIcon],svg[carbon-firewall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 20.397v3c-1 0-2-1.5-2-4v-3c-4 5-5 7-5 9A5 5 0 0 0 23.046 30A7.53 7.53 0 0 1 25 26.397A7.53 7.53 0 0 1 26.954 30A5 5 0 0 0 30 25.397c0-2-1.125-3.571-3-5M17 28H4v-4h13v-2H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h13z"></svg:path><svg:path fill="currentColor" d="M28 12H7a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h10v-2H7v-4h21l.001 2H30v-2a2 2 0 0 0-2-2m-3-2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h21a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M4 4v4h21V4z"></svg:path>`,
})
export class CarbonFirewallIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFirewallClassicIcon],svg[carbon-firewall-classic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 20v-3a4 4 0 0 0-8 0v3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2m-6-3a2 2 0 0 1 4 0v3h-4zm6 11h-8v-6h8zm-13-1H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h11v2H4v3h11zm2-9H8a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h11v2H8v3h9zm5-9H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2M4 7h18V4H4z"></svg:path>`,
})
export class CarbonFirewallClassicIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFishIcon],svg[carbon-fish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="24" cy="7" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M26 2a16.02 16.02 0 0 0-16 16v2H3a1 1 0 0 0-.707 1.707l8 8A1 1 0 0 0 12 29v-7h2A16.02 16.02 0 0 0 30 6V2ZM10 26.586L5.414 22H10ZM12 20v-2a13.94 13.94 0 0 1 3.908-9.678l7.77 7.77A13.94 13.94 0 0 1 14 20ZM28 6a13.9 13.9 0 0 1-2.98 8.606L17.395 6.98A13.9 13.9 0 0 1 26 4h2Z"></svg:path>`,
})
export class CarbonFishIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFishMultipleIcon],svg[carbon-fish-multiple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 14a13 13 0 0 0-3.829-9.243L24.414 3L23 4.414l1.757 1.757a11.07 11.07 0 0 1 0 15.657L22 24.586L23.414 26l2.757-2.757A13 13 0 0 0 30 14"></svg:path><svg:circle cx="17" cy="11" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M22 14a13 13 0 0 0-3.829-9.243L16.414 3L15 4.414l1.757 1.757a11.07 11.07 0 0 1 0 15.657L14 24.586L15.414 26l2.757-2.757A13 13 0 0 0 22 14"></svg:path><svg:circle cx="25" cy="11" r="1" fill="currentColor"></svg:circle><svg:circle cx="9" cy="11" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m9.414 24l.757-.757a13.07 13.07 0 0 0 0-18.486L8 2.586L5.829 4.757a13.07 13.07 0 0 0 0 18.486l.757.757l-4.293 4.293A1 1 0 0 0 3 30h10a1 1 0 0 0 .707-1.707ZM4 14a11 11 0 0 1 3.243-7.829L8 5.414l.757.757a11.07 11.07 0 0 1 0 15.657L8 22.586l-.757-.758A11 11 0 0 1 4 14m1.414 14L8 25.414L10.586 28Z"></svg:path>`,
})
export class CarbonFishMultipleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFitToHeightIcon],svg[carbon-fit-to-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 10l1.41 1.41L15 8.83v14.34l-2.59-2.58L11 22l5 5l5-5l-1.41-1.41L17 23.17V8.83l2.59 2.58L21 10l-5-5z"></svg:path><svg:path fill="currentColor" d="M28 30H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2M4 4v24h24V4Z"></svg:path>`,
})
export class CarbonFitToHeightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFitToScreenIcon],svg[carbon-fit-to-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 16h2V8h-8v2h6zM8 24h8v-2h-6v-6H8z"></svg:path><svg:path fill="currentColor" d="M26 28H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v20a2 2 0 0 1-2 2M6 6v20h20.001L26 6Z"></svg:path>`,
})
export class CarbonFitToScreenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFitToWidthIcon],svg[carbon-fit-to-width-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22 11l-1.41 1.41L23.17 15H8.83l2.58-2.59L10 11l-5 5l5 5l1.41-1.41L8.83 17h14.34l-2.58 2.59L22 21l5-5z"></svg:path><svg:path fill="currentColor" d="M28 30H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2M4 4v24h24V4Z"></svg:path>`,
})
export class CarbonFitToWidthIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFlagIcon],svg[carbon-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 30H4V2h24l-5.8 9l5.8 9H6Zm0-12h18.33l-4.53-7l4.53-7H6Z"></svg:path>`,
})
export class CarbonFlagIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFlagFilledIcon],svg[carbon-flag-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 30H4V2h24l-5.8 9l5.8 9H6Z"></svg:path>`,
})
export class CarbonFlagFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFlaggingTaxiIcon],svg[carbon-flagging-taxi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24.798 2l-4.442 6.664A3 3 0 0 1 17.859 10H12a3.003 3.003 0 0 0-3 3v6a2 2 0 0 0 2 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V16h-2v12h-4v-9h-2v-6a1 1 0 0 1 1-1h5.86a4.99 4.99 0 0 0 4.16-2.227l4.442-6.664Z"></svg:path><svg:path fill="currentColor" d="M11 5a4 4 0 1 1 4 4a4.004 4.004 0 0 1-4-4m2 0a2 2 0 1 0 2-2a2 2 0 0 0-2 2"></svg:path>`,
})
export class CarbonFlaggingTaxiIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFlashIcon],svg[carbon-flash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.61 29.92a1 1 0 0 1-.6-1.07L12.83 17H8a1 1 0 0 1-1-1.23l3-13A1 1 0 0 1 11 2h10a1 1 0 0 1 .78.37a1 1 0 0 1 .2.85L20.25 11H25a1 1 0 0 1 .9.56a1 1 0 0 1-.11 1l-13 17A1 1 0 0 1 12 30a1.1 1.1 0 0 1-.39-.08M17.75 13l2-9H11.8L9.26 15h5.91l-1.59 10.28L23 13Z"></svg:path>`,
})
export class CarbonFlashIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFlashFilledIcon],svg[carbon-flash-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.61 29.92a1 1 0 0 1-.6-1.07L12.83 17H8a1 1 0 0 1-1-1.23l3-13A1 1 0 0 1 11 2h10a1 1 0 0 1 .78.37a1 1 0 0 1 .2.85L20.25 11H25a1 1 0 0 1 .9.56a1 1 0 0 1-.11 1l-13 17A1 1 0 0 1 12 30a1.1 1.1 0 0 1-.39-.08"></svg:path>`,
})
export class CarbonFlashFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFlashOffIcon],svg[carbon-flash-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.13 6.89L11.8 4h8l-2 9H23l-2.49 3.25l1.43 1.43l3.87-5.07a1 1 0 0 0 .11-1A1 1 0 0 0 25 11h-4.75L22 3.22a1 1 0 0 0-.2-.85A1 1 0 0 0 21 2H11a1 1 0 0 0-1 .77l-.54 2.45zM30 28.59l-9.31-9.31l-1.42-1.43l-8.67-8.66l-1.67-1.67L3.41 2L2 3.41l6.4 6.41L7 15.77A1 1 0 0 0 8 17h4.83L11 28.85a1 1 0 0 0 .6 1.07a1.1 1.1 0 0 0 .4.08a1 1 0 0 0 .79-.39l6.68-8.73L28.59 30zM9.26 15l.81-3.52L13.59 15zm4.32 10.28L15 16.37l3 3.08z"></svg:path>`,
})
export class CarbonFlashOffIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFlashOffFilledIcon],svg[carbon-flash-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 28.59L3.41 2L2 3.41l6.4 6.41L7 15.77A1 1 0 0 0 8 17h4.83L11 28.85a1 1 0 0 0 .6 1.07a1.1 1.1 0 0 0 .4.08a1 1 0 0 0 .79-.39l6.68-8.73L28.59 30zm-7.47-11.72l3.26-4.26a1 1 0 0 0 .11-1A1 1 0 0 0 25 11h-4.75L22 3.22a1 1 0 0 0-.2-.85A1 1 0 0 0 21 2H11a1 1 0 0 0-1 .77l-.3 1.3z"></svg:path>`,
})
export class CarbonFlashOffFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFlightInternationalIcon],svg[carbon-flight-international-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 28a5 5 0 0 1-.671-.044A21.8 21.8 0 0 1 12.033 17H29.95c.024-.331.05-.663.05-1a14 14 0 1 0-14 14Zm11.95-13h-5.987A24.3 24.3 0 0 0 19.21 4.45A12.01 12.01 0 0 1 27.95 15M16.67 4.044A21.8 21.8 0 0 1 19.967 15h-7.934A21.8 21.8 0 0 1 15.33 4.044a5.2 5.2 0 0 1 1.342 0m-3.881.405A24.3 24.3 0 0 0 10.037 15H4.05a12.01 12.01 0 0 1 8.74-10.55M4.05 17h5.987a24.3 24.3 0 0 0 2.753 10.55A12.01 12.01 0 0 1 4.05 17"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m25 25l5 2v-2l-5-2.5V20a1 1 0 0 0-2 0v2.5L18 25v2l5-2v3.5L21 30v1l3-1l3 1v-1l-2-1.5Z"></svg:path>`,
})
export class CarbonFlightInternationalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFlightRosterIcon],svg[carbon-flight-roster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M26 6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h8v-2H8V6h16v6h2Z"></svg:path><svg:path fill="currentColor" d="M10 18h6v2h-6zm0-4h12v2H10z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M22 10v2H10v-2zm3 13l5 2v-2l-5-2.5V18a1 1 0 0 0-2 0v2.5L18 23v2l5-2v3.5L21 28v1l3-1l3 1v-1l-2-1.5z"></svg:path>`,
})
export class CarbonFlightRosterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFlightScheduleIcon],svg[carbon-flight-schedule-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m25 23l5 2v-2l-5-2.5V18a1 1 0 0 0-2 0v2.5L18 23v2l5-2v3.5L21 28v1l3-1l3 1v-1l-2-1.5Z"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="M26 4h-4V2h-2v2h-8V2h-2v2H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h10v-2H6V6h4v2h2V6h8v2h2V6h4v7h2V6a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonFlightScheduleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFloatingIpIcon],svg[carbon-floating-ip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 11a5.01 5.01 0 0 0-4.899 4H11.9a5 5 0 1 0 0 2h8.2a5 5 0 1 0 4.9-6m0 8a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3"></svg:path>`,
})
export class CarbonFloatingIpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFloodIcon],svg[carbon-flood-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 28a2.9 2.9 0 0 1-1-.182v-.006a3.77 3.77 0 0 1-2.053-2.133A.97.97 0 0 0 25 25a1.01 1.01 0 0 0-.949.684A3.44 3.44 0 0 1 21 28a3.44 3.44 0 0 1-3.053-2.321A.99.99 0 0 0 17 25a1.01 1.01 0 0 0-.949.684A3.44 3.44 0 0 1 13 28a3.44 3.44 0 0 1-3.053-2.321a1 1 0 0 0-1.896.005A3.44 3.44 0 0 1 5 28H2v2h3a4.93 4.93 0 0 0 4-1.987a5.02 5.02 0 0 0 8 0a5.02 5.02 0 0 0 8 0a5.14 5.14 0 0 0 2.138 1.62A4.8 4.8 0 0 0 29 30h1v-2zm-1-14.37L29.757 15L31 13.428L16.612 2.214a1.01 1.01 0 0 0-1.242 0L1 13.419l1.243 1.572L4 13.621v5.188a3.7 3.7 0 0 1-2 2.003v2.084a5 5 0 0 0 3-1.883a5.02 5.02 0 0 0 8 0a5.02 5.02 0 0 0 8 0A4.93 4.93 0 0 0 25 23h5v-2h-2zm-6.051 5.053a1 1 0 0 0-1.896-.005A3.44 3.44 0 0 1 17 21a3.44 3.44 0 0 1-3.051-2.316A1.01 1.01 0 0 0 13 18a.99.99 0 0 0-.947.679A3.44 3.44 0 0 1 9 21a3.37 3.37 0 0 1-3.002-2.19L6 12.062l9.991-7.79L26 12.072L26.002 21H25a3.44 3.44 0 0 1-3.051-2.316z"></svg:path>`,
})
export class CarbonFloodIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFloodWarningIcon],svg[carbon-flood-warning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 28a2.9 2.9 0 0 1-1-.182v-.006a3.77 3.77 0 0 1-2.053-2.133A.97.97 0 0 0 25 25a1.01 1.01 0 0 0-.949.684A3.44 3.44 0 0 1 21 28a3.44 3.44 0 0 1-3.053-2.321A.99.99 0 0 0 17 25a1.01 1.01 0 0 0-.949.684A3.44 3.44 0 0 1 13 28a3.44 3.44 0 0 1-3.053-2.321a1 1 0 0 0-1.896.005A3.44 3.44 0 0 1 5 28H2v2h3a4.93 4.93 0 0 0 4-1.987a5.02 5.02 0 0 0 8 0a5.02 5.02 0 0 0 8 0a5.14 5.14 0 0 0 2.138 1.62A4.8 4.8 0 0 0 29 30h1v-2Z"></svg:path><svg:path fill="none" d="M23.75 11h-1.5V7h1.5ZM23 12a1 1 0 1 0 1 1a1 1 0 0 0-1-1"></svg:path><svg:path fill="currentColor" d="M29.912 14.936L23.628 3.37a.718.718 0 0 0-1.256 0l-6.283 11.564A.72.72 0 0 0 16.72 16h12.56a.72.72 0 0 0 .631-1.065M22.25 7h1.5v4h-1.5Zm.75 7a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path><svg:path fill="currentColor" d="M28 21v-3h-2v3h-1a3.44 3.44 0 0 1-3.051-2.316a1 1 0 0 0-1.896-.005A3.44 3.44 0 0 1 17 21a3.44 3.44 0 0 1-3.051-2.316A1.01 1.01 0 0 0 13 18a.99.99 0 0 0-.947.679A3.44 3.44 0 0 1 9 21a3.37 3.37 0 0 1-3-2.185V12.06l10-7.79l2.533 1.976l.968-1.782l-2.889-2.251a1.01 1.01 0 0 0-1.242 0L1 13.419l1.243 1.572L4 13.621v5.188a3.7 3.7 0 0 1-2 2.003v2.084a5 5 0 0 0 3-1.883a5.02 5.02 0 0 0 8 0a5.02 5.02 0 0 0 8 0A4.93 4.93 0 0 0 25 23h5v-2Z"></svg:path>`,
})
export class CarbonFloodWarningIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFloorplanIcon],svg[carbon-floorplan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2H4c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h15v-2c0-2.8 2.2-5 5-5v-2c-3.9 0-7 3.1-7 7h-3v-4h-2v4H4V4h8v14h2v-5h4v-2h-4V4h14v7h-4v2h4v15h-4v2h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2"></svg:path>`,
})
export class CarbonFloorplanIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFlowIcon],svg[carbon-flow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 22.14V17a2 2 0 0 0-2-2h-8V9.86a4 4 0 1 0-2 0V15H7a2 2 0 0 0-2 2v5.14a4 4 0 1 0 2 0V17h18v5.14a4 4 0 1 0 2 0M8 26a2 2 0 1 1-2-2a2 2 0 0 1 2 2m6-20a2 2 0 1 1 2 2a2 2 0 0 1-2-2m12 22a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonFlowIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFlowConnectionIcon],svg[carbon-flow-connection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 18h-6a2 2 0 0 0-2 2v2h-5.586L10 17.586V12h2a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2v5.586l-4.707 4.707a1 1 0 0 0 0 1.414l5 5a1 1 0 0 0 1.414 0L14.414 24H20v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2M6 4h6v6H6Zm3 22.586L5.414 23L9 19.414L12.586 23ZM22 26v-6h6v6Z"></svg:path>`,
})
export class CarbonFlowConnectionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFlowDataIcon],svg[carbon-flow-data-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 23h-8.14a4.2 4.2 0 0 0-.43-1L22 11.43a3.86 3.86 0 0 0 2 .57a4 4 0 1 0-3.86-5h-8.28a4 4 0 1 0 0 2h8.28a4.2 4.2 0 0 0 .43 1L10 20.57A3.86 3.86 0 0 0 8 20a4 4 0 1 0 3.86 5H20v3h8v-8h-8ZM8 10a2 2 0 1 1 2-2a2 2 0 0 1-2 2m16-4a2 2 0 1 1-2 2a2 2 0 0 1 2-2M8 26a2 2 0 1 1 2-2a2 2 0 0 1-2 2m14-4h4v4h-4Z"></svg:path>`,
})
export class CarbonFlowDataIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFlowLogsVpcIcon],svg[carbon-flow-logs-vpc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 19h12v2H18zm0 4h12v2H18zm0 4h8v2h-8z"></svg:path><svg:path fill="currentColor" d="M24 4a3.996 3.996 0 0 0-3.858 3H12V4H4v8h8V9h8.142a4 4 0 0 0 .425 1.019L10.019 20.567A3.95 3.95 0 0 0 8 20a4 4 0 1 0 3.858 5H16v-2h-4.142a4 4 0 0 0-.425-1.019l10.548-10.548A3.95 3.95 0 0 0 24 12a4 4 0 0 0 0-8m-14 6H6V6h4ZM8 26a2 2 0 1 1 2-2a2 2 0 0 1-2 2m16-16a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonFlowLogsVpcIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFlowModelerIcon],svg[carbon-flow-modeler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 10H2V2h8zM4 8h4V4H4zm26 22h-8v-8h8zm-6-2h4v-4h-4zm-4-1H8a6 6 0 0 1 0-12v2a4 4 0 0 0 0 8h12zm4-10v-2a4 4 0 0 0 0-8H12V5h12a6 6 0 0 1 0 12"></svg:path><svg:path fill="currentColor" d="M19 11h-6l-3 4l6 6l6-6Z"></svg:path>`,
})
export class CarbonFlowModelerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFlowModelerReferenceIcon],svg[carbon-flow-modeler-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 30h-8v-8h8zm-6-2h4v-4h-4zM4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8zm15-9h-6l-3 4l6 6l6-6z"></svg:path><svg:path fill="currentColor" d="M24 17v-2a4 4 0 0 0 0-8H12V5h12a6 6 0 0 1 0 12m-14-7H2V2h8zM4 8h4V4H4z"></svg:path>`,
})
export class CarbonFlowModelerReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFlowStreamIcon],svg[carbon-flow-stream-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 24h-8.137a4 4 0 0 0-.429-1.02L21.98 12.434A3.994 3.994 0 1 0 20.141 8H14v2h6.141a4 4 0 0 0 .425 1.02L10.02 21.566A3.994 3.994 0 1 0 11.859 26H20v3h8v-8h-8zm4-17a2 2 0 1 1-2 2a2 2 0 0 1 2-2M8 27a2 2 0 1 1 2-2a2 2 0 0 1-2 2m14-4h4v4h-4zM9.693 12.75a5 5 0 0 1 0-7.5l1.324 1.5a3 3 0 0 0 0 4.501z"></svg:path><svg:path fill="currentColor" d="M7.047 15.751a9 9 0 0 1 0-13.501l1.324 1.5a7 7 0 0 0 0 10.501Z"></svg:path>`,
})
export class CarbonFlowStreamIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFlowStreamReferenceIcon],svg[carbon-flow-stream-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 24h-4v2h4v3h8v-8h-8zm2-1h4v4h-4zM4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8zM24 5a3.996 3.996 0 0 0-3.858 3H14v2h6.142a4 4 0 0 0 .425 1.019L14 17.586L15.414 19l6.567-6.567A3.95 3.95 0 0 0 24 13a4 4 0 0 0 0-8m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2M9.693 12.75a5 5 0 0 1 0-7.5l1.324 1.5a3 3 0 0 0 0 4.501z"></svg:path><svg:path fill="currentColor" d="M7.047 15.751a9 9 0 0 1 0-13.501l1.324 1.5a7 7 0 0 0 0 10.501Z"></svg:path>`,
})
export class CarbonFlowStreamReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFogIcon],svg[carbon-fog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.8 11.138a8.994 8.994 0 0 0-17.6 0A6.53 6.53 0 0 0 2 17.5V19a1 1 0 0 0 1 1h12a1 1 0 0 0 0-2H4v-.497a4.52 4.52 0 0 1 4.144-4.482l.816-.064l.099-.812a6.994 6.994 0 0 1 13.883 0l.099.813l.815.063A4.496 4.496 0 0 1 23.5 22H7a1 1 0 0 0 0 2h16.5a6.496 6.496 0 0 0 1.3-12.862"></svg:path><svg:rect width="18" height="2" x="2" y="26" fill="currentColor" rx="1"></svg:rect>`,
})
export class CarbonFogIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFolderIcon],svg[carbon-folder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.17 6l3.42 3.41l.58.59H28v16H4V6zm0-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H16l-3.41-3.41A2 2 0 0 0 11.17 4"></svg:path>`,
})
export class CarbonFolderIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFolderAddIcon],svg[carbon-folder-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 20h-2v4h-4v2h4v4h2v-4h4v-2h-4z"></svg:path><svg:path fill="currentColor" d="M28 8H16l-3.4-3.4c-.4-.4-.9-.6-1.4-.6H4c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h14v-2H4V6h7.2l3.4 3.4l.6.6H28v8h2v-8c0-1.1-.9-2-2-2"></svg:path>`,
})
export class CarbonFolderAddIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFolderDetailsIcon],svg[carbon-folder-details-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 20h14v2H16zm0 4h14v2H16zm0 4h7v2h-7z"></svg:path><svg:path fill="currentColor" d="M14 26H4V6h7.17l3.42 3.41l.58.59H28v8h2v-8a2 2 0 0 0-2-2H16l-3.41-3.41A2 2 0 0 0 11.17 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h10Z"></svg:path>`,
})
export class CarbonFolderDetailsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFolderDetailsReferenceIcon],svg[carbon-folder-details-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 28h7v2h-7zm0-4h14v2H16zm0-4h14v2H16zM4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8zM28 8H16l-3.414-3.414A2 2 0 0 0 11.172 4H4a2 2 0 0 0-2 2v12h2V6h7.172l3.414 3.414l.586.586H28v8h2v-8a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonFolderDetailsReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFolderMoveToIcon],svg[carbon-folder-move-to-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 13l-1.41 1.41L19.17 17H10v2h9.17l-2.58 2.59L18 23l5-5z"></svg:path><svg:path fill="currentColor" d="m11.172 6l3.414 3.414l.586.586H28v16H4V6zm0-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2H16l-3.414-3.414A2 2 0 0 0 11.172 4"></svg:path>`,
})
export class CarbonFolderMoveToIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFolderOffIcon],svg[carbon-folder-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 8h-2.586L30 3.414L28.586 2L2 28.586L3.414 30l2-2H28a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2m0 18H7.414l16-16H28zM4 6h7.172l3.414 3.414l.586.586H18V8h-2l-3.414-3.414A2 2 0 0 0 11.172 4H4a2 2 0 0 0-2 2v18h2z"></svg:path>`,
})
export class CarbonFolderOffIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFolderOpenIcon],svg[carbon-folder-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 8h-7.172l-3.414-3.414A2 2 0 0 0 16 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2M8 26V14h8v6.17l-2.59-2.58L12 19l5 5l5-5l-1.41-1.41L18 20.17V14a2.003 2.003 0 0 0-2-2H8a2.003 2.003 0 0 0-2 2v12H4V6h12l4 4h8v2h-6v2h6v12Z"></svg:path>`,
})
export class CarbonFolderOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFolderParentIcon],svg[carbon-folder-parent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 8H16l-3.414-3.414A2 2 0 0 0 11.172 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9.17l2.59 2.58L22 18l-5-5l-5 5l1.41 1.41L16 16.83V26H4V6h7.172l4 4H28v16h-6v2h6a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonFolderParentIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFolderSharedIcon],svg[carbon-folder-shared-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 8H16l-3.41-3.41A2 2 0 0 0 11.17 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2m-6 18h-8v-1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Zm6 0h-4v-1a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3v1H4V6h7.17l3.42 3.41l.58.59H28Z"></svg:path><svg:path fill="currentColor" d="M14 17a4 4 0 1 0 4-4a4 4 0 0 0-4 4m4-2a2 2 0 1 1-2 2a2 2 0 0 1 2-2"></svg:path>`,
})
export class CarbonFolderSharedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFoldersIcon],svg[carbon-folders-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 28H6a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h5.667a2 2 0 0 1 1.2.4l3.467 2.6H26a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2M11.667 11H5.998L6 26h20V14H15.667zM28 9H17.667l-4-3H6V4h7.667a2 2 0 0 1 1.2.4L18.334 7H28z"></svg:path>`,
})
export class CarbonFoldersIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonForecastHailIcon],svg[carbon-forecast-hail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 18A10 10 0 1 1 16 8h4v5l6-6l-6-6v5h-4a12 12 0 1 0 12 12Z"></svg:path><svg:circle cx="14.5" cy="23.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="11.5" cy="19.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="17.5" cy="19.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M13 16.586L16.586 13L18 14.413L14.413 18zm6 0L22.586 13L24 14.413L20.413 18z"></svg:path>`,
})
export class CarbonForecastHailIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonForecastHail30Icon],svg[carbon-forecast-hail-30-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 15.586L12.586 12L14 13.413L10.413 17zm6-.001L16.586 14L18 15.413L16.414 17z"></svg:path><svg:circle cx="10.5" cy="22.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="7.5" cy="18.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="13.5" cy="18.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M14 28a10 10 0 0 1 0-20h4v5l6-6l-6-6v5h-4a12 12 0 0 0 0 24Z"></svg:path><svg:path fill="currentColor" d="M20 20h-4v2h4v2h-3v2h3v2h-4v2h4a2.003 2.003 0 0 0 2-2v-6a2 2 0 0 0-2-2m8 10h-2a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2m-2-8v6h2v-6z"></svg:path>`,
})
export class CarbonForecastHail30Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonForecastLightningIcon],svg[carbon-forecast-lightning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.67 24l-1.736-1l2.287-4h-3.889l3.993-7l1.737 1l-2.284 4h3.89z"></svg:path><svg:path fill="currentColor" d="M26 18A10 10 0 1 1 16 8h4v5l6-6l-6-6v5h-4a12 12 0 1 0 12 12Z"></svg:path>`,
})
export class CarbonForecastLightningIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonForecastLightning30Icon],svg[carbon-forecast-lightning-30-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 28a10 10 0 0 1 0-20h4v5l6-6l-6-6v5h-4a12 12 0 0 0 0 24Z"></svg:path><svg:path fill="currentColor" d="m11.67 24l-1.736-1l2.287-4H8.332l3.993-7l1.737 1l-2.284 4h3.89zM20 20h-4v2h4v2h-3v2h3v2h-4v2h4a2.003 2.003 0 0 0 2-2v-6a2 2 0 0 0-2-2m8 10h-2a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2m-2-8v6h2v-6z"></svg:path>`,
})
export class CarbonForecastLightning30Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonForkIcon],svg[carbon-fork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 6c0 1.858 1.28 3.41 3 3.858V15H9V9.858c1.72-.447 3-2 3-3.858c0-2.206-1.794-4-4-4S4 3.794 4 6c0 1.858 1.28 3.41 3 3.858V15c0 1.103.897 2 2 2h6v5.142c-1.72.447-3 2-3 3.858c0 2.206 1.794 4 4 4s4-1.794 4-4c0-1.858-1.28-3.41-3-3.858V17h6c1.103 0 2-.897 2-2V9.858c1.72-.447 3-2 3-3.858c0-2.206-1.794-4-4-4s-4 1.794-4 4M6 6c0-1.103.897-2 2-2s2 .897 2 2s-.897 2-2 2s-2-.897-2-2m12 20c0 1.103-.897 2-2 2s-2-.897-2-2s.897-2 2-2s2 .897 2 2m8-20c0 1.103-.897 2-2 2s-2-.897-2-2s.897-2 2-2s2 .897 2 2"></svg:path>`,
})
export class CarbonForkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonForkNodeIcon],svg[carbon-fork-node-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 21h4v2h-4zm0-12h4v2h-4zm-2 2V9h-4V4h-6v24h6v-5h4v-2h-4V11zm-13.828 4H2v2h8.172l-2.586 2.586L9 21l5-5l-5-5l-1.414 1.414z"></svg:path>`,
})
export class CarbonForkNodeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonForumIcon],svg[carbon-forum-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 6H8c-1.2 0-2 .8-2 2v14c0 1.2.8 2 2 2h8v-2H8V8h20v14h-7.2L16 28.8l1.6 1.2l4.2-6H28c1.2 0 2-.8 2-2V8c0-1.2-.8-2-2-2"></svg:path><svg:path fill="currentColor" d="M4 18H2V5c0-1.7 1.3-3 3-3h13v2H5c-.6 0-1 .4-1 1z"></svg:path>`,
})
export class CarbonForumIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonForward10Icon],svg[carbon-forward-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 18A10 10 0 1 1 16 8h4v5l6-6l-6-6v5h-4a12 12 0 1 0 12 12Z"></svg:path><svg:path fill="currentColor" d="M19.63 22.13a2.84 2.84 0 0 1-1.28-.27a2.44 2.44 0 0 1-.89-.77a3.6 3.6 0 0 1-.52-1.25a7.7 7.7 0 0 1-.17-1.68a8 8 0 0 1 .17-1.68a3.7 3.7 0 0 1 .52-1.25a2.44 2.44 0 0 1 .89-.77a2.84 2.84 0 0 1 1.28-.27a2.44 2.44 0 0 1 2.16 1a5.23 5.23 0 0 1 .7 2.93a5.23 5.23 0 0 1-.7 2.93a2.44 2.44 0 0 1-2.16 1.08m0-1.22a1.07 1.07 0 0 0 1-.55a3.4 3.4 0 0 0 .37-1.51v-1.38a3.3 3.3 0 0 0-.29-1.5a1.23 1.23 0 0 0-2.06 0a3.3 3.3 0 0 0-.29 1.5v1.38a3.4 3.4 0 0 0 .29 1.51a1.06 1.06 0 0 0 .98.55m-9 1.09v-1.18h2v-5.19l-1.86 1l-.55-1.06l2.32-1.3H14v6.5h1.78V22z"></svg:path>`,
})
export class CarbonForward10Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonForward30Icon],svg[carbon-forward-30-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 18A10 10 0 1 1 16 8h4v5l6-6l-6-6v5h-4a12 12 0 1 0 12 12Z"></svg:path><svg:path fill="currentColor" d="M19.64 22.13a2.8 2.8 0 0 1-1.28-.27a2.36 2.36 0 0 1-.89-.77a3.4 3.4 0 0 1-.47-1.25a7 7 0 0 1-.17-1.68a7.2 7.2 0 0 1 .17-1.68a3.5 3.5 0 0 1 .52-1.25a2.36 2.36 0 0 1 .89-.77a2.8 2.8 0 0 1 1.28-.27a2.44 2.44 0 0 1 2.16 1a5.3 5.3 0 0 1 .7 2.93a5.3 5.3 0 0 1-.7 2.93a2.44 2.44 0 0 1-2.21 1.08m0-1.22a1 1 0 0 0 1-.55a3.24 3.24 0 0 0 .3-1.51v-1.38a3.2 3.2 0 0 0-.3-1.5a1.22 1.22 0 0 0-2.05 0a3.2 3.2 0 0 0-.29 1.5v1.38a3.25 3.25 0 0 0 .29 1.51a1 1 0 0 0 1.05.55m-7.02-3.49a1.46 1.46 0 0 0 1-.27a.84.84 0 0 0 .31-.68v-.08a.94.94 0 0 0-.3-.74a1.2 1.2 0 0 0-.83-.27a1.65 1.65 0 0 0-.89.24a2.1 2.1 0 0 0-.68.68l-.93-.83a5 5 0 0 1 .44-.51a2.7 2.7 0 0 1 .54-.4a2.6 2.6 0 0 1 .7-.27a3.3 3.3 0 0 1 .87-.1a4 4 0 0 1 1.06.14a2.3 2.3 0 0 1 .82.4a1.9 1.9 0 0 1 .54.63a1.9 1.9 0 0 1 .18.83a2 2 0 0 1-.11.67a1.8 1.8 0 0 1-.32.52a1.8 1.8 0 0 1-.47.36a2.3 2.3 0 0 1-.57.2V18a2.3 2.3 0 0 1 .63.21a1.7 1.7 0 0 1 .51.38a1.9 1.9 0 0 1 .34.55a2.1 2.1 0 0 1 .12.73a2 2 0 0 1-.2.92a2 2 0 0 1-.58.72a2.7 2.7 0 0 1-.89.45a3.8 3.8 0 0 1-1.15.16a4 4 0 0 1-1-.11a3 3 0 0 1-.76-.31a2.8 2.8 0 0 1-.56-.45a4 4 0 0 1-.44-.55l1.07-.81a3 3 0 0 0 .28.42a2 2 0 0 0 .36.34a1.6 1.6 0 0 0 .45.22a2 2 0 0 0 .57.07a1.45 1.45 0 0 0 1-.3a1.12 1.12 0 0 0 .34-.85v-.08a1 1 0 0 0-.37-.8a1.78 1.78 0 0 0-1.06-.28h-.76v-1.21z"></svg:path>`,
})
export class CarbonForward30Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonForward5Icon],svg[carbon-forward-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 18A10 10 0 1 1 16 8h4v5l6-6l-6-6v5h-4a12 12 0 1 0 12 12Z"></svg:path><svg:path fill="currentColor" d="M18.58 15.58h-3.45L15 18.15a5 5 0 0 1 .26-.45a1.6 1.6 0 0 1 .33-.35a1.5 1.5 0 0 1 .44-.23a2 2 0 0 1 .6-.08a2.5 2.5 0 0 1 .92.16a2.1 2.1 0 0 1 .74.48a2.3 2.3 0 0 1 .5.77a2.7 2.7 0 0 1 .18 1a2.9 2.9 0 0 1-.19 1.07a2.4 2.4 0 0 1-.55.84a2.4 2.4 0 0 1-.89.55a3.2 3.2 0 0 1-1.21.2a3.8 3.8 0 0 1-.94-.11a3 3 0 0 1-.74-.32a2.5 2.5 0 0 1-.55-.45a4 4 0 0 1-.41-.55l1.06-.81l.27.41a1.8 1.8 0 0 0 .34.34a1.6 1.6 0 0 0 .43.22a1.5 1.5 0 0 0 .55.08a1.3 1.3 0 0 0 1-.36a1.4 1.4 0 0 0 .33-1v-.06a1.18 1.18 0 0 0-1.28-1.27a1.44 1.44 0 0 0-.77.18a2 2 0 0 0-.48.39l-1.19-.17l.29-4.31h4.52Z"></svg:path>`,
})
export class CarbonForward5Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFoundationModelIcon],svg[carbon-foundation-model-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 20c2.206 0 4-1.794 4-4s-1.794-4-4-4c-1.858 0-3.41 1.28-3.858 3h-3.728l5.567-5.567A3.95 3.95 0 0 0 26 10c2.206 0 4-1.794 4-4s-1.794-4-4-4s-4 1.794-4 4c0 .74.215 1.424.567 2.019L16 14.586L9.433 8.019A3.95 3.95 0 0 0 10 6c0-2.206-1.794-4-4-4S2 3.794 2 6s1.794 4 4 4c.74 0 1.424-.215 2.019-.567L13.586 15H9.858c-.447-1.72-2-3-3.858-3c-2.206 0-4 1.794-4 4s1.794 4 4 4c1.858 0 3.41-1.28 3.858-3h3.728l-5.567 5.567A3.952 3.952 0 0 0 6 22c-2.206 0-4 1.794-4 4s1.794 4 4 4c1.858 0 3.41-1.28 3.858-3h12.284c.447 1.72 2 3 3.858 3c2.206 0 4-1.794 4-4s-1.794-4-4-4c-.74 0-1.424.215-2.019.567L18.414 17h3.728c.447 1.72 2 3 3.858 3Zm0-6c1.103 0 2 .898 2 2s-.897 2-2 2s-2-.897-2-2s.897-2 2-2ZM6 18c-1.103 0-2-.897-2-2s.897-2 2-2s2 .898 2 2s-.897 2-2 2ZM26 4c1.103 0 2 .898 2 2s-.897 2-2 2s-2-.897-2-2s.897-2 2-2ZM4 6c0-1.102.897-2 2-2s2 .898 2 2s-.897 2-2 2s-2-.897-2-2Zm5.433 17.981L16 17.414l6.567 6.567A3.95 3.95 0 0 0 22.142 25H9.858a3.94 3.94 0 0 0-.425-1.019ZM6 28c-1.103 0-2-.897-2-2s.897-2 2-2s2 .898 2 2s-.897 2-2 2Zm22-2c0 1.103-.897 2-2 2s-2-.897-2-2s.897-2 2-2s2 .898 2 2Z"></svg:path>`,
})
export class CarbonFoundationModelIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFragileIcon],svg[carbon-fragile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 12V6h-2v6a5 5 0 0 1-10 0V4h5.586l-2.293 2.293a1 1 0 0 0 0 1.414L15.586 9l-2.293 2.293l1.414 1.414l3-3a1 1 0 0 0 0-1.414L16.414 7l3.293-3.293A1 1 0 0 0 19 2h-9a1 1 0 0 0-1 1v9a7.005 7.005 0 0 0 6 6.92V28h-5v2h12v-2h-5v-9.08A7.005 7.005 0 0 0 23 12"></svg:path>`,
})
export class CarbonFragileIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFragmentsIcon],svg[carbon-fragments-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 30a5.01 5.01 0 0 1-4.9-4H6c-1.103 0-2-.897-2-2v-5h1c1.654 0 3-1.346 3-3s-1.346-3-3-3H4V8c0-1.103.897-2 2-2h5.1c.465-2.28 2.485-4 4.9-4s4.435 1.72 4.9 4H26c1.103 0 2 .897 2 2v5h-1c-1.654 0-3 1.346-3 3s1.346 3 3 3h1v5c0 1.103-.897 2-2 2h-5.1a5.01 5.01 0 0 1-4.9 4M6 20.9V24h7v1c0 1.654 1.346 3 3 3s3-1.346 3-3v-1h7v-3.1c-2.28-.465-4-2.485-4-4.9s1.72-4.435 4-4.9V8h-7V7c0-1.654-1.346-3-3-3s-3 1.346-3 3v1H6v3.1c2.28.465 4 2.486 4 4.9s-1.72 4.435-4 4.9"></svg:path>`,
})
export class CarbonFragmentsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFriendshipIcon],svg[carbon-friendship-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 10H7a3.003 3.003 0 0 0-3 3v6a2 2 0 0 0 2 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V16h-2v12H8v-9H6v-6a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v6h-2v9h-4V16h-2v12a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-7a2 2 0 0 0 2-2v-6a3.003 3.003 0 0 0-3-3M10 9a4 4 0 1 1 4-4a4.004 4.004 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2m12 6a4 4 0 1 1 4-4a4.004 4.004 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonFriendshipIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFruitBowlIcon],svg[carbon-fruit-bowl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 15a6 6 0 0 0-3.107-5.253A3.98 3.98 0 0 0 24 7h-2a2 2 0 0 1-2 2a6.004 6.004 0 0 0-5.995 5.892A7 7 0 0 1 12 10a3.996 3.996 0 0 0-3-3.858V4H7v2.142A3.996 3.996 0 0 0 4 10v5H2v1a14 14 0 0 0 28 0v-1Zm-6-4a4.005 4.005 0 0 1 4 4h-8a4.005 4.005 0 0 1 4-4M6 10a2 2 0 1 1 4 0a9 9 0 0 0 1.532 5H6Zm10 18A12.017 12.017 0 0 1 4.042 17h23.917A12.017 12.017 0 0 1 16 28"></svg:path>`,
})
export class CarbonFruitBowlIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFunctionIcon],svg[carbon-function-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.626 29.526l-.516-1.933a12.004 12.004 0 0 0 6.121-19.26l1.538-1.28a14.003 14.003 0 0 1-7.143 22.473"></svg:path><svg:path fill="currentColor" d="M10 29H8v-3.82l.804-.16C10.262 24.727 12 23.62 12 20v-1.382l-4-2v-2.236l4-2V12c0-5.467 3.925-9 10-9h2v3.82l-.804.16C21.738 7.273 20 8.38 20 12v.382l4 2v2.236l-4 2V20c0 5.467-3.925 9-10 9m0-2c4.935 0 8-2.682 8-7v-2.618l3.764-1.882L18 13.618V12c0-4.578 2.385-6.192 4-6.76V5c-4.935 0-8 2.682-8 7v1.618L10.236 15.5L14 17.382V20c0 4.578-2.385 6.192-4 6.76Z"></svg:path><svg:path fill="currentColor" d="M5.231 24.947a14.003 14.003 0 0 1 7.147-22.474l.516 1.932a12.004 12.004 0 0 0-6.125 19.263Z"></svg:path>`,
})
export class CarbonFunctionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFunction2Icon],svg[carbon-function-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.3 13L11 26.2c-.1.993-.9 1.8-1.9 1.8H4v-2h5l1.3-13H6v-2h4.5l.5-5.2c.092-1.002 1-1.8 2-1.8h5v2h-5l-.5 5H17v2zm3.7 6v7c0 1.1.9 2 2 2h2v-2h-2v-7h2v-2h-2c-1.1 0-2 .9-2 2m10-2h-2v2h2v7h-2v2h2c1.1 0 2-.9 2-2v-7c0-1.1-.9-2-2-2"></svg:path>`,
})
export class CarbonFunction2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFunctionMathIcon],svg[carbon-function-math-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 18h-2l-2 3.897L20 18h-2l2.905 5L18 28h2l2-3.799L24 28h2l-2.902-5zM19 6V4h-5.087a1.99 1.99 0 0 0-1.992 1.819L11.27 13H7v2h4.087l-1 11H5v2h5.087a1.99 1.99 0 0 0 1.992-1.819L13.095 15H18v-2h-4.723l.636-7z"></svg:path>`,
})
export class CarbonFunctionMathIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonFusionBlenderIcon],svg[carbon-fusion-blender-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M20 12h-3V4h3V2h-8v2h3v8h-3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h3v8h-3v2h8v-2h-3v-8h3a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2zm-8 6v-4h8v4z" fill="currentColor"></svg:path>`,
})
export class CarbonFusionBlenderIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonGameConsoleIcon],svg[carbon-game-console-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.51 26a5.5 5.5 0 0 1-1.44-.19A5.6 5.6 0 0 1 2.19 19l2.33-8.84a5.54 5.54 0 0 1 2.59-3.43a5.43 5.43 0 0 1 4.15-.54A5.52 5.52 0 0 1 14.7 9h2.6a5.5 5.5 0 0 1 3.44-2.81a5.43 5.43 0 0 1 4.15.54a5.57 5.57 0 0 1 2.59 3.41L29.81 19a5.6 5.6 0 0 1-3.89 6.83a5.43 5.43 0 0 1-4.15-.54a5.54 5.54 0 0 1-2.59-3.41L19 21h-6l-.23.86a5.54 5.54 0 0 1-2.59 3.41a5.46 5.46 0 0 1-2.67.73M9.83 8a3.5 3.5 0 0 0-1.72.46a3.6 3.6 0 0 0-1.66 2.19l-2.33 8.84a3.6 3.6 0 0 0 2.48 4.39a3.43 3.43 0 0 0 2.62-.34a3.54 3.54 0 0 0 1.66-2.19L11.5 19h9l.61 2.35a3.58 3.58 0 0 0 1.66 2.19a3.46 3.46 0 0 0 2.63.34a3.58 3.58 0 0 0 2.47-4.39l-2.33-8.84a3.55 3.55 0 0 0-1.65-2.19a3.46 3.46 0 0 0-2.63-.34a3.55 3.55 0 0 0-2.37 2.22l-.24.66h-5.3l-.24-.66a3.56 3.56 0 0 0-2.38-2.22a3.5 3.5 0 0 0-.9-.12"></svg:path><svg:path fill="currentColor" d="M10 16a2 2 0 1 1 2-2a2 2 0 0 1-2 2m0-2"></svg:path><svg:circle cx="22" cy="12" r="1" fill="currentColor"></svg:circle><svg:circle cx="22" cy="16" r="1" fill="currentColor"></svg:circle><svg:circle cx="20" cy="14" r="1" fill="currentColor"></svg:circle><svg:circle cx="24" cy="14" r="1" fill="currentColor"></svg:circle>`,
})
export class CarbonGameConsoleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonGameWirelessIcon],svg[carbon-game-wireless-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.51 30a5.5 5.5 0 0 1-1.44-.19A5.6 5.6 0 0 1 2.19 23l2.33-8.84a5.54 5.54 0 0 1 2.59-3.41a5.43 5.43 0 0 1 4.15-.54A5.52 5.52 0 0 1 14.7 13h2.6a5.5 5.5 0 0 1 3.44-2.81a5.43 5.43 0 0 1 4.15.54a5.55 5.55 0 0 1 2.59 3.41L29.81 23a5.6 5.6 0 0 1-3.89 6.83a5.43 5.43 0 0 1-4.15-.54a5.54 5.54 0 0 1-2.59-3.41L19 25h-6l-.23.86a5.54 5.54 0 0 1-2.59 3.41a5.46 5.46 0 0 1-2.67.73m2.32-18a3.5 3.5 0 0 0-1.72.46a3.58 3.58 0 0 0-1.66 2.19l-2.33 8.84a3.6 3.6 0 0 0 2.48 4.39a3.43 3.43 0 0 0 2.62-.34a3.57 3.57 0 0 0 1.66-2.19L11.5 23h9l.61 2.35a3.6 3.6 0 0 0 1.66 2.19a3.46 3.46 0 0 0 2.63.34a3.58 3.58 0 0 0 2.47-4.39l-2.33-8.84a3.53 3.53 0 0 0-1.65-2.19a3.46 3.46 0 0 0-2.63-.34a3.55 3.55 0 0 0-2.37 2.22l-.24.66h-5.3l-.24-.66a3.56 3.56 0 0 0-2.38-2.22a3.5 3.5 0 0 0-.9-.12"></svg:path><svg:path fill="currentColor" d="M10 20a2 2 0 1 1 2-2a2 2 0 0 1-2 2m0-2"></svg:path><svg:circle cx="22" cy="16" r="1" fill="currentColor"></svg:circle><svg:circle cx="22" cy="20" r="1" fill="currentColor"></svg:circle><svg:circle cx="20" cy="18" r="1" fill="currentColor"></svg:circle><svg:circle cx="24" cy="18" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m13.75 9l-1.5-1.33a5 5 0 0 1 7.5 0L18.25 9a3 3 0 0 0-4.5 0"></svg:path><svg:path fill="currentColor" d="M21.25 6.37a7 7 0 0 0-10.5 0l-1.5-1.32a9 9 0 0 1 13.5 0Z"></svg:path>`,
})
export class CarbonGameWirelessIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonGamificationIcon],svg[carbon-gamification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 23h-.131l.963-1.445A1 1 0 0 0 24 21v-9c0-9.885-7.92-10-8-10a1 1 0 0 0-1 1v2h-1a1 1 0 0 0-.581.187l-7 5a1 1 0 0 0-.368 1.13l1 3a1 1 0 0 0 1.09.673l4.87-.696l-3.86 6.176a1 1 0 0 0 .017 1.085L10.132 23H10a3.003 3.003 0 0 0-3 3v4h19v-4a3.003 3.003 0 0 0-3-3m-7.152-9.47a1 1 0 0 0-.99-1.52l-6.174.882l-.502-1.508L14.32 7h1.679a1 1 0 0 0 1-.999L17 4.129c1.501.335 4.217 1.541 4.86 5.871H19v2h3v2h-3v2h3v2h-3v2h3v.697L20.465 23h-7.93l-1.345-2.018ZM24 28H9v-2a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1Z"></svg:path>`,
})
export class CarbonGamificationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonGasStationIcon],svg[carbon-gas-station-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 10h7v2H8z"></svg:path><svg:path fill="currentColor" d="m28.414 8l-5-5L22 4.414l3 3V12a2 2 0 0 0 2 2v10.5a1.5 1.5 0 0 1-3 0V16a1 1 0 0 0-1-1h-4V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v21H2v2h19v-2h-2v-9h3v7.4a3.564 3.564 0 0 0 2.765 3.525A3.506 3.506 0 0 0 29 24.5V9.414A2 2 0 0 0 28.414 8M17 26H6V6h11Z"></svg:path>`,
})
export class CarbonGasStationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonGasStationFilledIcon],svg[carbon-gas-station-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M8 10h7v2H8z"></svg:path><svg:path fill="currentColor" d="m28.414 8l-5-5L22 4.414l3 3V12a2 2 0 0 0 2 2v10.5a1.5 1.5 0 0 1-3 0V16a1 1 0 0 0-1-1h-4V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v21H2v2h19v-2h-2v-9h3v7.4a3.565 3.565 0 0 0 2.765 3.525A3.506 3.506 0 0 0 29 24.5V9.415A2 2 0 0 0 28.414 8M15 12H8v-2h7Z"></svg:path>`,
})
export class CarbonGasStationFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonGatewayIcon],svg[carbon-gateway-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31 16a2 2 0 0 0-.586-1.414l-5.793-5.793l2.868-2.868a2 2 0 1 0-1.414-1.414L23.207 7.38l-5.793-5.793a2 2 0 0 0-2.828 0L8.793 7.379L5.925 4.51a2 2 0 1 0-1.414 1.414l2.868 2.868l-5.793 5.793a2 2 0 0 0 0 2.828l5.793 5.793l-2.868 2.868a2 2 0 1 0 1.414 1.414l2.868-2.868l5.793 5.793a2 2 0 0 0 2.828 0l5.793-5.793l2.868 2.868a2 2 0 1 0 1.414-1.414l-2.868-2.868l5.793-5.793A2 2 0 0 0 31 16m-7.793 5.793L20.414 19L19 20.414l2.793 2.793L16 29l-5.793-5.793L13 20.414L11.586 19l-2.793 2.793L3 16l5.793-5.793L11.586 13L13 11.586l-2.793-2.793L16 3l5.794 5.793L19 11.586L20.414 13l2.794-2.793L29 16Z"></svg:path>`,
})
export class CarbonGatewayIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonGatewayApiIcon],svg[carbon-gateway-api-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 18.184v-4.368a3 3 0 1 0-2 0v4.369a3 3 0 1 0 2 0ZM16 10a1 1 0 1 1-1 1a1 1 0 0 1 1-1m0 12a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path><svg:path fill="currentColor" d="M30.414 17.414a2 2 0 0 0 0-2.828l-5.787-5.787l2.9-2.862a2.002 2.002 0 1 0-1.44-1.388l-2.874 2.836l-5.799-5.8a2 2 0 0 0-2.828 0L8.799 7.374L5.937 4.472A2.002 2.002 0 1 0 4.55 5.914l2.835 2.873l-5.8 5.799a2 2 0 0 0 0 2.828l5.8 5.799l-2.835 2.873a1.998 1.998 0 1 0 1.387 1.442l2.862-2.9l5.787 5.786a2 2 0 0 0 2.828 0l5.8-5.799l2.872 2.836a1.998 1.998 0 1 0 1.442-1.387l-2.9-2.863ZM16 29L3 16L16 3l13 13Z"></svg:path>`,
})
export class CarbonGatewayApiIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonGatewayMailIcon],svg[carbon-gateway-mail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.878 12.122a.42.42 0 0 0-.437-.097l-9.167 3.333a.417.417 0 0 0-.012.779l4 1.6l1.6 4a.42.42 0 0 0 .388.263h.007a.42.42 0 0 0 .385-.274l3.333-9.167a.42.42 0 0 0-.097-.437"></svg:path><svg:path fill="currentColor" d="M30.414 17.414a2 2 0 0 0 0-2.828l-5.787-5.787l2.9-2.862a2.002 2.002 0 1 0-1.44-1.388l-2.874 2.836l-5.799-5.8a2 2 0 0 0-2.828 0L8.799 7.374L5.937 4.472A2.002 2.002 0 1 0 4.55 5.914l2.835 2.873l-5.8 5.799a2 2 0 0 0 0 2.828l5.8 5.799l-2.835 2.873a1.998 1.998 0 1 0 1.387 1.442l2.862-2.9l5.787 5.786a2 2 0 0 0 2.828 0l5.8-5.799l2.872 2.836a1.998 1.998 0 1 0 1.442-1.387l-2.9-2.863ZM16 29L3 16L16 3l13 13Z"></svg:path>`,
})
export class CarbonGatewayMailIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonGatewayPublicIcon],svg[carbon-gateway-public-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 14h-5v-2a2 2 0 0 1 4 0h2a4 4 0 0 0-8 0v2.278A1.99 1.99 0 0 0 11 16v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2m0 7h-6v-5h6Z"></svg:path><svg:path fill="currentColor" d="M30.414 17.414a2 2 0 0 0 0-2.828l-5.787-5.787l2.9-2.862a2.002 2.002 0 1 0-1.44-1.388l-2.874 2.836l-5.799-5.8a2 2 0 0 0-2.828 0L8.799 7.374L5.937 4.472A2.002 2.002 0 1 0 4.55 5.914l2.835 2.873l-5.8 5.799a2 2 0 0 0 0 2.828l5.8 5.799l-2.835 2.873a1.998 1.998 0 1 0 1.387 1.442l2.862-2.9l5.787 5.786a2 2 0 0 0 2.828 0l5.8-5.799l2.872 2.836a1.998 1.998 0 1 0 1.442-1.387l-2.9-2.863ZM16 29L3 16L16 3l13 13Z"></svg:path>`,
})
export class CarbonGatewayPublicIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonGatewaySecurityIcon],svg[carbon-gateway-security-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 11v6.468a5.02 5.02 0 0 0 2.861 4.52L16 23l2.139-1.013A5.02 5.02 0 0 0 21 17.467V11Zm8 6.468a3.01 3.01 0 0 1-1.717 2.71L16 20.787l-1.283-.607A3.01 3.01 0 0 1 13 17.468V13h6Z"></svg:path><svg:path fill="currentColor" d="M30.414 17.414a2 2 0 0 0 0-2.828l-5.787-5.787l2.9-2.862a2.002 2.002 0 1 0-1.44-1.388l-2.874 2.836l-5.799-5.8a2 2 0 0 0-2.828 0L8.799 7.374L5.937 4.472A2.002 2.002 0 1 0 4.55 5.914l2.835 2.873l-5.8 5.799a2 2 0 0 0 0 2.828l5.8 5.799l-2.835 2.873a1.998 1.998 0 1 0 1.387 1.442l2.862-2.9l5.787 5.786a2 2 0 0 0 2.828 0l5.8-5.799l2.872 2.836a1.998 1.998 0 1 0 1.442-1.387l-2.9-2.863ZM16 29L3 16L16 3l13 13Z"></svg:path>`,
})
export class CarbonGatewaySecurityIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonGatewayUserAccessIcon],svg[carbon-gateway-user-access-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 22h-2v-2a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2h-2v-2a3.003 3.003 0 0 1 3-3h4a3.003 3.003 0 0 1 3 3zm-5-6a3.5 3.5 0 1 1 3.5-3.5A3.504 3.504 0 0 1 16 16m0-5a1.5 1.5 0 1 0 1.5 1.5A1.5 1.5 0 0 0 16 11"></svg:path><svg:path fill="currentColor" d="M30.414 17.414a2 2 0 0 0 0-2.828l-5.787-5.787l2.9-2.862a2.002 2.002 0 1 0-1.44-1.388l-2.874 2.836l-5.799-5.8a2 2 0 0 0-2.828 0L8.799 7.374L5.937 4.472A2.002 2.002 0 1 0 4.55 5.914l2.835 2.873l-5.8 5.799a2 2 0 0 0 0 2.828l5.8 5.799l-2.835 2.873a1.998 1.998 0 1 0 1.387 1.442l2.862-2.9l5.787 5.786a2 2 0 0 0 2.828 0l5.8-5.799l2.872 2.836a1.998 1.998 0 1 0 1.442-1.387l-2.9-2.863ZM16 29L3 16L16 3l13 13Z"></svg:path>`,
})
export class CarbonGatewayUserAccessIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonGatewayVpnIcon],svg[carbon-gateway-vpn-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 14.278V12a4 4 0 0 0-8 0v2.278A1.99 1.99 0 0 0 11 16v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-5a1.99 1.99 0 0 0-1-1.722M16 10a2 2 0 0 1 2 2v2h-4v-2a2 2 0 0 1 2-2m3 11h-6v-5h6Z"></svg:path><svg:path fill="currentColor" d="M30.414 17.414a2 2 0 0 0 0-2.828l-5.787-5.787l2.9-2.862a2.002 2.002 0 1 0-1.44-1.388l-2.874 2.836l-5.799-5.8a2 2 0 0 0-2.828 0L8.799 7.374L5.937 4.472A2.002 2.002 0 1 0 4.55 5.914l2.835 2.873l-5.8 5.799a2 2 0 0 0 0 2.828l5.8 5.799l-2.835 2.873a1.998 1.998 0 1 0 1.387 1.442l2.862-2.9l5.787 5.786a2 2 0 0 0 2.828 0l5.8-5.799l2.872 2.836a1.998 1.998 0 1 0 1.442-1.387l-2.9-2.863ZM16 29L3 16L16 3l13 13Z"></svg:path>`,
})
export class CarbonGatewayVpnIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonGearsIcon],svg[carbon-gears-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 21.985a6 6 0 0 0-.155-1.336L30 19.822l-.717-1.867l-2.206.847a6 6 0 0 0-1.757-1.81l.97-2.179L24.463 14l-.971 2.18c-.478-.123-.976-.195-1.492-.195s-1.014.072-1.492.195l-.97-2.18l-1.828.814l.97 2.177a6 6 0 0 0-1.757 1.81l-2.206-.846L14 19.822l2.155.827A6 6 0 0 0 16 21.985c0 .44.05.867.14 1.28l-2.14.953l.813 1.827l2.08-.926a6 6 0 0 0 1.72 1.813l-.903 2.351l1.867.717l.856-2.23c.5.136 1.024.215 1.567.215s1.066-.08 1.567-.215l.856 2.23l1.867-.717l-.903-2.35a6 6 0 0 0 1.72-1.814l2.08.926l.813-1.827l-2.14-.953c.09-.413.14-.84.14-1.28m-6 4c-2.206 0-4-1.795-4-4s1.794-4 4-4s4 1.794 4 4s-1.794 4-4 4m-8.529-11.1l1.479 1.479l1.414-1.414l-1.479-1.479a5.96 5.96 0 0 0 1.025-2.47H18V9h-2.09a5.96 5.96 0 0 0-1.025-2.472l1.479-1.479l-1.414-1.414l-1.479 1.479A5.96 5.96 0 0 0 11 4.09V2H9v2.09a5.96 5.96 0 0 0-2.471 1.025L5.05 3.636L3.636 5.05l1.479 1.48A5.96 5.96 0 0 0 4.09 9H2v2h2.09a5.96 5.96 0 0 0 1.025 2.471L3.636 14.95l1.414 1.414l1.479-1.479A5.96 5.96 0 0 0 9 15.91V18h2v-2.09a5.96 5.96 0 0 0 2.471-1.025M6 10c0-2.206 1.794-4 4-4s4 1.794 4 4s-1.794 4-4 4s-4-1.794-4-4"></svg:path>`,
})
export class CarbonGearsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonGemIcon],svg[carbon-gem-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.5 4h-15l-6.784 9.045L16 29.527l14.284-16.482Zm3.5 8h-5.446l-3.75-6H22.5Zm-16.698 2l3.754 10.23L5.19 14Zm2.13 0h7.136l-3.569 9.721Zm.373-2L16 6.887L19.196 12Zm8.893 2h5.112l-8.867 10.231ZM9.5 6h4.696l-3.75 6H5Z"></svg:path>`,
})
export class CarbonGemIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonGemReferenceIcon],svg[carbon-gem-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8z"></svg:path><svg:path fill="currentColor" d="M23.5 4h-15l-6.784 9.045L6.01 18l1.511-1.31L5.19 14h5.255L16 22.887L21.554 14h5.256L15.813 26.692L17.324 28l12.96-14.955ZM5 12l4.5-6h4.696l-3.75 6Zm11-5.113L19.196 12h-6.392Zm0 12.226L12.804 14h6.392ZM21.554 12l-3.75-6H22.5l4.5 6Z"></svg:path>`,
})
export class CarbonGemReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonGenderFemaleIcon],svg[carbon-gender-female-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 19.93a8 8 0 1 0-2 0V22h-5v2h5v4h2v-4h5v-2h-5ZM10 12a6 6 0 1 1 6 6a6.007 6.007 0 0 1-6-6"></svg:path>`,
})
export class CarbonGenderFemaleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonGenderMaleIcon],svg[carbon-gender-male-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 4v2h6.586l-7.688 7.689a8.028 8.028 0 1 0 1.414 1.414L26 7.414V14h2V4Zm-6 22a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6"></svg:path>`,
})
export class CarbonGenderMaleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonGeneratePdfIcon],svg[carbon-generate-pdf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 24v4H8v-4H6v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4Z"></svg:path><svg:path fill="currentColor" d="m21 21l-1.414-1.414L17 22.172V14h-2v8.172l-2.586-2.586L11 21l5 5zm7-17V2h-6v10h2V8h3V6h-3V4zm-11 8h-4V2h4a3.003 3.003 0 0 1 3 3v4a3.003 3.003 0 0 1-3 3m-2-2h2a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-2zM9 2H4v10h2V9h3a2.003 2.003 0 0 0 2-2V4a2 2 0 0 0-2-2M6 7V4h3l.001 3z"></svg:path>`,
})
export class CarbonGeneratePdfIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonGifIcon],svg[carbon-gif-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 12v8a3 3 0 0 0 3 3h5v-8H6v2h2v4H5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h5V9H5a3 3 0 0 0-3 3m28-1V9h-8v14h2v-6h5v-2h-5v-4zM12 9v2h3v10h-3v2h8v-2h-3V11h3V9z"></svg:path>`,
})
export class CarbonGifIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonGiftIcon],svg[carbon-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 10h-2.762A4.487 4.487 0 0 0 16 4.707A4.487 4.487 0 0 0 8.762 10H6a2.003 2.003 0 0 0-2 2v4a2.003 2.003 0 0 0 2 2v10a2.003 2.003 0 0 0 2 2h16a2.003 2.003 0 0 0 2-2V18a2.003 2.003 0 0 0 2-2v-4a2.003 2.003 0 0 0-2-2m-9-2.5a2.5 2.5 0 1 1 2.5 2.5H17ZM12.5 5A2.503 2.503 0 0 1 15 7.5V10h-2.5a2.5 2.5 0 0 1 0-5M6 12h9v4H6Zm2 6h7v10H8Zm16.001 10H17V18h7ZM17 16v-4h9l.001 4Z"></svg:path>`,
})
export class CarbonGiftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonGlobalLoanAndTrialIcon],svg[carbon-global-loan-and-trial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15 22l-1.41 1.41L16.17 26H4V8H2v18c0 1.103.897 2 2 2h12.17l-2.58 2.59L15 32l5-5z"></svg:path><svg:circle cx="11" cy="16" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M24 20H8c-1.103 0-2-.897-2-2v-4c0-1.103.897-2 2-2h16c1.103 0 2 .897 2 2v4c0 1.103-.897 2-2 2M8 14v4h16v-4z"></svg:path><svg:path fill="currentColor" d="M28 4H15.83l2.58-2.59L17 0l-5 5l5 5l1.41-1.41L15.83 6H28v18h2V6c0-1.102-.897-2-2-2"></svg:path>`,
})
export class CarbonGlobalLoanAndTrialIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonGlobeIcon],svg[carbon-globe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 4a7 7 0 1 1-7 7a7 7 0 0 1 7-7m0-2a9 9 0 1 0 9 9a9 9 0 0 0-9-9"></svg:path><svg:path fill="currentColor" d="M28 11a13.96 13.96 0 0 0-4.105-9.895L22.48 2.52a11.994 11.994 0 0 1-16.924 17l-.038-.038l-1.414 1.414A13.96 13.96 0 0 0 14 25v3h-4v2h10v-2h-4v-3.16A14.01 14.01 0 0 0 28 11"></svg:path>`,
})
export class CarbonGlobeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonGradientIcon],svg[carbon-gradient-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m-4 22v-4h-4v4h-4v-4h-4v-4h4v-4h-4v-4h4V6h4v4h4V6h4v20Z"></svg:path><svg:path fill="currentColor" d="M14 10h4v4h-4zm0 8h4v4h-4zm4-4h4v4h-4z"></svg:path>`,
})
export class CarbonGradientIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonGraphicalDataFlowIcon],svg[carbon-graphical-data-flow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 30h-6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2m-6-8h-.001L22 28h6v-6zm-4 4h-6a3.003 3.003 0 0 1-3-3v-4h2v4a1 1 0 0 0 1 1h6zm8-8h-2v-3a1 1 0 0 0-1-1h-5v-2h5a3.003 3.003 0 0 1 3 3zm-11 0a1 1 0 0 1-.497-.132L10 15.288l-4.503 2.58a1 1 0 0 1-1.471-1.094l1.061-4.572l-2.818-3.02a1 1 0 0 1 .566-1.668l4.2-.702l2.066-4.25a1 1 0 0 1 1.788-.02l2.204 4.27l4.077.702a1 1 0 0 1 .561 1.668l-2.818 3.02l1.06 4.572A1 1 0 0 1 15 18m-5-5s.343.18.497.269l3.01 1.724l-.784-3.377l2.282-2.445l-3.233-.557l-1.745-3.382l-1.644 3.382l-3.381.565l2.274 2.437l-.784 3.377l3.01-1.724C9.658 13.18 10 13 10 13"></svg:path>`,
})
export class CarbonGraphicalDataFlowIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonGridIcon],svg[carbon-grid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 8H6V6h6zm14-8h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 8h-6V6h6zm-14 6H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2m0 8H6v-6h6zm14-8h-6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2m0 8h-6v-6h6z"></svg:path>`,
})
export class CarbonGridIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonGroupIcon],svg[carbon-group-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31 30h-2v-3a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3v3h-2v-3a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5zm-7-18a3 3 0 1 1-3 3a3 3 0 0 1 3-3m0-2a5 5 0 1 0 5 5a5 5 0 0 0-5-5m-9 12h-2v-3a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v3H1v-3a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5zM8 4a3 3 0 1 1-3 3a3 3 0 0 1 3-3m0-2a5 5 0 1 0 5 5a5 5 0 0 0-5-5"></svg:path>`,
})
export class CarbonGroupIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonGroupAccessIcon],svg[carbon-group-access-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 19H6v-2a3.003 3.003 0 0 1 3-3h5v2H9a1 1 0 0 0-1 1zm4-6a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2m8 13a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2m6 12h-2v-2a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v2h-2v-2a3.003 3.003 0 0 1 3-3h6a3.003 3.003 0 0 1 3 3z"></svg:path><svg:path fill="currentColor" d="M8 30H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4v2H4v24h4zm20 0h-4v-2h4V4h-4V2h4a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonGroupAccessIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonGroupAccountIcon],svg[carbon-group-account-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 11h-6a3 3 0 0 0-3 3v4h2v-4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v1h2v-1a3 3 0 0 0-3-3m-7-5a4 4 0 1 0 4-4a4 4 0 0 0-4 4m6 0a2 2 0 1 1-2-2a2 2 0 0 1 2 2m6 21h-6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2m-6-8v6h6v-6zM8 30H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4v2H4v24h4zm20 0h-4v-2h4V4h-4V2h4a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonGroupAccountIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonGroupObjectsIcon],svg[carbon-group-objects-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 13V9H9v10h4v4h10V13Zm-8-2h6v6h-6Zm10 10h-6v-2h4v-4h2Z"></svg:path><svg:path fill="currentColor" d="M30 8V2h-6v2H8V2H2v6h2v16H2v6h6v-2h16v2h6v-6h-2V8Zm-4-4h2v2h-2ZM4 4h2v2H4Zm2 24H4v-2h2Zm22 0h-2v-2h2Zm-2-4h-2v2H8v-2H6V8h2V6h16v2h2Z"></svg:path>`,
})
export class CarbonGroupObjectsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonGroupObjectsNewIcon],svg[carbon-group-objects-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 10h-2v5h-5v2h5v5h2v-5h5v-2h-5z"></svg:path><svg:path fill="currentColor" d="M30 8V2h-6v2H8V2H2v6h2v16H2v6h6v-2h16v2h6v-6h-2V8Zm-4-4h2v2h-2ZM4 4h2v2H4Zm2 24H4v-2h2Zm22 0h-2v-2h2Zm-2-4h-2v2H8v-2H6V8h2V6h16v2h2Z"></svg:path>`,
})
export class CarbonGroupObjectsNewIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonGroupObjectsSaveIcon],svg[carbon-group-objects-save-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m14 18.18l-3.59-3.59L9 16l5 5l9-9l-1.41-1.419z"></svg:path><svg:path fill="currentColor" d="M30 8V2h-6v2H8V2H2v6h2v16H2v6h6v-2h16v2h6v-6h-2V8Zm-4-4h2v2h-2ZM4 4h2v2H4Zm2 24H4v-2h2Zm22 0h-2v-2h2Zm-2-4h-2v2H8v-2H6V8h2V6h16v2h2Z"></svg:path>`,
})
export class CarbonGroupObjectsSaveIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonGroupPresentationIcon],svg[carbon-group-presentation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 30H8v-3H4v3H2v-3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2zm20 0h-2v-3h-4v3h-2v-3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2zm-10 0h-2v-3h-4v3h-2v-3a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2z"></svg:path><svg:circle cx="16" cy="22" r="2" fill="currentColor"></svg:circle><svg:circle cx="6" cy="22" r="2" fill="currentColor"></svg:circle><svg:circle cx="26" cy="22" r="2" fill="currentColor"></svg:circle><svg:circle cx="21" cy="18" r="2" fill="currentColor"></svg:circle><svg:circle cx="11" cy="18" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M26 14H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2M6 4v8h20V4Z"></svg:path>`,
})
export class CarbonGroupPresentationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonGroupResourceIcon],svg[carbon-group-resource-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 24H10a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2M10 10v12h12V10zM8 30H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4v2H4v24h4zm20 0h-4v-2h4V4h-4V2h4a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonGroupResourceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonGroupSecurityIcon],svg[carbon-group-security-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21H9v-2a3.003 3.003 0 0 1 3-3h6v2h-6a1 1 0 0 0-1 1zm4-6a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2m9 13a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2m6 12h-2v-2a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v2h-2v-2a3.003 3.003 0 0 1 3-3h6a3.003 3.003 0 0 1 3 3z"></svg:path><svg:path fill="currentColor" d="m14 27.733l-5.234-2.79A8.99 8.99 0 0 1 4 17V4h20v6h2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13a10.98 10.98 0 0 0 5.824 9.707L14 30Z"></svg:path>`,
})
export class CarbonGroupSecurityIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonGrowthIcon],svg[carbon-growth-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 8v2h6.586L18 18.586l-4.293-4.293a1 1 0 0 0-1.414 0L2 24.586L3.414 26L13 16.414l4.293 4.293a1 1 0 0 0 1.414 0L28 11.414V18h2V8Z"></svg:path>`,
})
export class CarbonGrowthIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonGuiIcon],svg[carbon-gui-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="20" cy="8" r="1" fill="currentColor"></svg:circle><svg:circle cx="23" cy="8" r="1" fill="currentColor"></svg:circle><svg:circle cx="26" cy="8" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M28 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 2v4H4V6ZM4 12h6v14H4Zm8 14V12h16v14Z"></svg:path>`,
})
export class CarbonGuiIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonGuiManagementIcon],svg[carbon-gui-management-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 24v-2h-2.101a5 5 0 0 0-.732-1.753l1.49-1.49l-1.414-1.414l-1.49 1.49A5 5 0 0 0 24 18.101V16h-2v2.101a5 5 0 0 0-1.753.732l-1.49-1.49l-1.414 1.414l1.49 1.49A5 5 0 0 0 18.101 22H16v2h2.101a5 5 0 0 0 .732 1.753l-1.49 1.49l1.414 1.414l1.49-1.49a5 5 0 0 0 1.753.732V30h2v-2.101a5 5 0 0 0 1.753-.732l1.49 1.49l1.414-1.414l-1.49-1.49A5 5 0 0 0 27.899 24Zm-7 2a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3"></svg:path><svg:path fill="currentColor" d="M28 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h10v-2H4V12h24v3h2V6a2 2 0 0 0-2-2m0 6H4V6h24Z"></svg:path><svg:circle cx="20" cy="8" r="1" fill="currentColor"></svg:circle><svg:circle cx="23" cy="8" r="1" fill="currentColor"></svg:circle><svg:circle cx="26" cy="8" r="1" fill="currentColor"></svg:circle>`,
})
export class CarbonGuiManagementIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHIcon],svg[carbon-h-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M18 9v6h-4V9h-2v14h2v-6h4v6h2V9h-2z" fill="currentColor"></svg:path>`,
})
export class CarbonHIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHailIcon],svg[carbon-hail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="21.5" cy="29.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="24.5" cy="25.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="7.5" cy="25.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="4.5" cy="29.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="10.499" cy="29.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m15.868 30.496l-1.736-.992L17.276 24h-5.999l4.855-8.496l1.736.992L14.723 22h6.001z"></svg:path><svg:path fill="currentColor" d="M23.5 22H23v-2h.5a4.498 4.498 0 0 0 .356-8.981l-.815-.064l-.099-.812a6.994 6.994 0 0 0-13.883 0l-.1.812l-.815.064A4.498 4.498 0 0 0 8.5 20H9v2h-.5A6.497 6.497 0 0 1 7.2 9.136a8.994 8.994 0 0 1 17.6 0A6.497 6.497 0 0 1 23.5 22"></svg:path>`,
})
export class CarbonHailIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHangingProtocolIcon],svg[carbon-hanging-protocol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M26.37 20.52L17 15.41v-1.55A4 4 0 1 0 12 10h2a2 2 0 1 1 4 .34A2.08 2.08 0 0 1 15.89 12a.89.89 0 0 0-.89.89v2.52l-9.37 5.11A3.1 3.1 0 0 0 4.25 22a2.83 2.83 0 0 0 2.56 4h18.38a2.83 2.83 0 0 0 2.56-4a3.1 3.1 0 0 0-1.38-1.48zM25.19 24H6.81a.81.81 0 0 1-.81-.81a1 1 0 0 1 .52-.88L16 17.14l9.48 5.17a1 1 0 0 1 .52.88a.81.81 0 0 1-.81.81z" fill="currentColor"></svg:path>`,
})
export class CarbonHangingProtocolIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHarborIcon],svg[carbon-harbor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 17a11.01 11.01 0 0 1-10 10.95V14h6v-2h-6V9.858a4 4 0 1 0-2 0V12H9v2h6v13.95A11.01 11.01 0 0 1 5 17H3a13 13 0 0 0 26 0ZM14 6a2 2 0 1 1 2 2a2 2 0 0 1-2-2"></svg:path>`,
})
export class CarbonHarborIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHardwareSecurityModuleIcon],svg[carbon-hardware-security-module-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="21.5" cy="7.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M14.414 20H9v-5.414l6.03-6.03A5 5 0 0 1 15 8a6 6 0 1 1 6 6a5 5 0 0 1-.556-.03zM11 18h2.586l6.17-6.17l.518.095A4 4 0 0 0 21 12a4.05 4.05 0 1 0-3.925-3.273l.095.517l-6.17 6.17zm17 2h-9v2h9v6H4v-6h2v-2H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2"></svg:path><svg:circle cx="7" cy="25" r="1" fill="currentColor"></svg:circle>`,
})
export class CarbonHardwareSecurityModuleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHashtagIcon],svg[carbon-hashtag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 12v-2h-6V4h-2v6h-8V4h-2v6H4v2h6v8H4v2h6v6h2v-6h8v6h2v-6h6v-2h-6v-8Zm-8 8h-8v-8h8Z"></svg:path>`,
})
export class CarbonHashtagIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHazeIcon],svg[carbon-haze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 28H3a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2m-4-8H3a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2m10.793 2.379l2.828 2.828l-1.414 1.414l-2.828-2.828zM28 15h4v2h-4zm-3.621-6.793l2.828-2.828l1.414 1.414l-2.828 2.828zM17 2h2v4h-2zm-6.793 7.621L7.38 6.793l1.414-1.414l2.828 2.828z"></svg:path><svg:path fill="currentColor" d="M18 8a8.01 8.01 0 0 0-8 8h2a6 6 0 1 1 6 6H7a1 1 0 0 0 0 2h11a8 8 0 0 0 0-16"></svg:path>`,
})
export class CarbonHazeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHazeNightIcon],svg[carbon-haze-night-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 22H13a1 1 0 0 0 0 2h9.677a11.1 11.1 0 0 1-7.556 2.998c-.138 0-.278.004-.418 0a11.095 11.095 0 0 1-3.2-21.584a15.15 15.15 0 0 0-.05 6.586H13.5a13.15 13.15 0 0 1 .39-7.62A1.015 1.015 0 0 0 12.98 3a1 1 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0A13.04 13.04 0 0 0 25.379 24H29a1 1 0 0 0 0-2"></svg:path><svg:path fill="currentColor" d="M27 20H17a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2m-2-4H13a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2"></svg:path>`,
})
export class CarbonHazeNightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHdIcon],svg[carbon-hd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M4 24V8h24v16Z"></svg:path><svg:path fill="currentColor" d="M22 11h-4v10h4a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3m1 7a1 1 0 0 1-1 1h-2v-6h2a1 1 0 0 1 1 1zm-10-7v4h-3v-4H8v10h2v-4h3v4h2V11z"></svg:path>`,
})
export class CarbonHdIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHdFilledIcon],svg[carbon-hd-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 13h-2v6h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1"></svg:path><svg:path fill="currentColor" d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M15 21h-2v-4h-3v4H8V11h2v4h3v-4h2Zm10-3a3 3 0 0 1-3 3h-4V11h4a3 3 0 0 1 3 3Z"></svg:path>`,
})
export class CarbonHdFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHdrIcon],svg[carbon-hdr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 15v-4a2 2 0 0 0-2-2h-6v14h2v-6h1.48l2.34 6H30l-2.33-6H28a2 2 0 0 0 2-2m-6-4h4v4h-4zm-8 12h-4V9h4a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4m-2-2h2a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-2zM8 9v6H4V9H2v14h2v-6h4v6h2V9z"></svg:path>`,
})
export class CarbonHdrIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHeadphonesIcon],svg[carbon-headphones-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 16v-1a9 9 0 0 0-18 0v1a5 5 0 0 0 0 10h2V15a7 7 0 0 1 14 0v11h2a5 5 0 0 0 0-10M4 21a3 3 0 0 1 3-3v6a3 3 0 0 1-3-3m21 3v-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class CarbonHeadphonesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHeadsetIcon],svg[carbon-headset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 10h-.06a9 9 0 0 0-17.88 0H7a5 5 0 0 0 0 10h2v-9a7 7 0 0 1 14 0v10a4 4 0 0 1-3.17 3.91a4 4 0 1 0 .05 2A6 6 0 0 0 25 21v-1a5 5 0 0 0 0-10M4 15a3 3 0 0 1 3-3v6a3 3 0 0 1-3-3m12 13a2 2 0 1 1 2-2a2 2 0 0 1-2 2m9-10v-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class CarbonHeadsetIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHealthCrossIcon],svg[carbon-health-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 28h-6a2 2 0 0 1-2-2v-5H6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h5V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v5h5a2 2 0 0 1 2 2v6a2.003 2.003 0 0 1-2 2h-5v5a2.003 2.003 0 0 1-2 2M6 13v6h7v7h6v-7h7v-6h-7V6h-6v7Z"></svg:path>`,
})
export class CarbonHealthCrossIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHearingIcon],svg[carbon-hearing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 30v-2a10.01 10.01 0 0 0 10-10h2a12.013 12.013 0 0 1-12 12"></svg:path><svg:path fill="currentColor" d="M18 26v-2a6.007 6.007 0 0 0 6-6h2a8.01 8.01 0 0 1-8 8"></svg:path><svg:path fill="currentColor" d="M18 22v-2a2 2 0 0 0 2-2h2a4.004 4.004 0 0 1-4 4M10 2a9.01 9.01 0 0 0-9 9h2a7 7 0 0 1 14 0a7.09 7.09 0 0 1-3.501 6.135l-.499.288v3.073a2.94 2.94 0 0 1-.9 2.152a4.18 4.18 0 0 1-4.633 1.03A4.09 4.09 0 0 1 5 20H3a6.12 6.12 0 0 0 3.67 5.512a5.8 5.8 0 0 0 2.314.486a6.6 6.6 0 0 0 4.478-1.888A4.94 4.94 0 0 0 15 20.496v-1.942A9.11 9.11 0 0 0 19 11a9.01 9.01 0 0 0-9-9"></svg:path><svg:path fill="currentColor" d="M9.28 8.083A3.006 3.006 0 0 1 13 11h2a4.98 4.98 0 0 0-1.884-3.911a5.04 5.04 0 0 0-4.281-.957a4.95 4.95 0 0 0-3.703 3.703a5.03 5.03 0 0 0 2.304 5.458A3.08 3.08 0 0 1 9 17.924V20h2v-2.077a5.06 5.06 0 0 0-2.537-4.346a3.002 3.002 0 0 1 .817-5.494"></svg:path>`,
})
export class CarbonHearingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHeatMapIcon],svg[carbon-heat-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18h2v2h-2zm8-2h2v2h-2zM14 6h2v2h-2zm2 16h-4v-6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2M4 22v-6h6v6zm8 6v-4h4v4zm16 2h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m-4-6v4h4v-4zm4-22h-6a2 2 0 0 0-2 2v6h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2h6a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2M18 14v-2h2v2zm4-4V4h6v6zM8 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M4 4v4h4V4z"></svg:path>`,
})
export class CarbonHeatMapIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHeatMap02Icon],svg[carbon-heat-map-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="21" cy="20" r="2" fill="currentColor"></svg:circle><svg:circle cx="14" cy="12" r="2" fill="currentColor"></svg:circle><svg:circle cx="29" cy="19" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M26.5 30a3.5 3.5 0 1 1 3.5-3.5a3.504 3.504 0 0 1-3.5 3.5m0-5a1.5 1.5 0 1 0 1.5 1.5a1.5 1.5 0 0 0-1.5-1.5M14 30a3.96 3.96 0 0 1-2.126-.621a6.998 6.998 0 1 1 4.11-6.838A3.992 3.992 0 0 1 14 30m-1.884-3.028l.539.495a1.992 1.992 0 1 0 2.004-3.343l-.691-.243l.03-.847a5.009 5.009 0 1 0-2.517 4.302zM24 16a6.007 6.007 0 0 1-6-6a5 5 0 0 1 .027-.533A3.96 3.96 0 0 1 16 6a4.005 4.005 0 0 1 4-4a3.96 3.96 0 0 1 3.467 2.027Q23.738 4 24 4a6 6 0 0 1 0 12M20 4a2 2 0 0 0-2 2a1.98 1.98 0 0 0 1.43 1.902l.902.27l-.215.917A3.994 3.994 0 1 0 24 6a4 4 0 0 0-.912.116l-.916.214l-.27-.9A1.98 1.98 0 0 0 20 4M6.5 11A4.5 4.5 0 1 1 11 6.5A4.505 4.505 0 0 1 6.5 11m0-7A2.5 2.5 0 1 0 9 6.5A2.503 2.503 0 0 0 6.5 4"></svg:path>`,
})
export class CarbonHeatMap02Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHeatMap03Icon],svg[carbon-heat-map-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 3H5a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-8 6h-6V5h6Zm0 2v4h-6v-4Zm-8 0v4H5v-4Zm0 6v4H5v-4Zm2 0h6v4h-6Zm8-2v-4h6v4ZM5 23h6v4H5Zm16 4v-4h6v4Z"></svg:path>`,
})
export class CarbonHeatMap03Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHeatMapStocksIcon],svg[carbon-heat-map-stocks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 3H5a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M9 21H5v-4h4Zm2 2h4v4h-4Zm6 0h4v4h-4Zm0-8v-4h4v4Zm4-6h-4V5h4Zm2 2h4v4h-4Zm-8-6v10H5V5Zm8 22V17h4v10Z"></svg:path>`,
})
export class CarbonHeatMapStocksIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHelicopterIcon],svg[carbon-helicopter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 8V6H8v2h10v4H4V8H2v8h2v-2h6.22l2.053 8.213A4.99 4.99 0 0 0 17.123 26H26a4.005 4.005 0 0 0 4-4v-2.638a2 2 0 0 0-.464-1.28l-4.468-5.362a2 2 0 0 0-1.536-.72H20V8Zm-4 16h-8.877a2.995 2.995 0 0 1-2.91-2.272L12.281 14H18v6h10v2a2 2 0 0 1-2 2m-2.468-10l3.333 4H20v-4Z"></svg:path>`,
})
export class CarbonHelicopterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHelpIcon],svg[carbon-help-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path><svg:circle cx="16" cy="23.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M17 8h-1.5a4.49 4.49 0 0 0-4.5 4.5v.5h2v-.5a2.5 2.5 0 0 1 2.5-2.5H17a2.5 2.5 0 0 1 0 5h-2v4.5h2V17a4.5 4.5 0 0 0 0-9"></svg:path>`,
})
export class CarbonHelpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHelpDeskIcon],svg[carbon-help-desk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 10h-6a3.003 3.003 0 0 0-3 3v6a2 2 0 0 0 2 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-7a2 2 0 0 0 2-2v-6a3.003 3.003 0 0 0-3-3m1 9h-2v9h-4v-9h-2v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1zM20 5a4 4 0 1 1 4 4a4.004 4.004 0 0 1-4-4m2 0a2 2 0 1 0 2-2a2 2 0 0 0-2 2m-8 11v-3a3.003 3.003 0 0 0-3-3H5a3.003 3.003 0 0 0-3 3v3H0v2h16v-2zM4 13a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3H4zm0-8a4 4 0 1 1 4 4a4.004 4.004 0 0 1-4-4m2 0a2 2 0 1 0 2-2a2 2 0 0 0-2 2"></svg:path>`,
})
export class CarbonHelpDeskIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHelpFilledIcon],svg[carbon-help-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 23a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 25m1.142-7.754v2.501h-2.25V15h2.125a2.376 2.376 0 0 0 0-4.753h-1.5a2.38 2.38 0 0 0-2.375 2.375v.638h-2.25v-.638A4.63 4.63 0 0 1 15.517 8h1.5a4.624 4.624 0 0 1 .125 9.246"></svg:path><svg:path fill="none" d="M16 25a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 25m1.142-7.754v2.501h-2.25V15h2.125a2.376 2.376 0 0 0 0-4.753h-1.5a2.38 2.38 0 0 0-2.375 2.375v.638h-2.25v-.638A4.63 4.63 0 0 1 15.517 8h1.5a4.624 4.624 0 0 1 .125 9.246"></svg:path>`,
})
export class CarbonHelpFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHexagonOutlineIcon],svg[carbon-hexagon-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 29H9a1 1 0 0 1-.864-.496l-7-12a1 1 0 0 1 0-1.008l7-12A1 1 0 0 1 9 3h14a1 1 0 0 1 .864.496l7 12a1 1 0 0 1 0 1.008l-7 12A1 1 0 0 1 23 29M9.574 27h12.852l6.416-11l-6.416-11H9.574L3.158 16z"></svg:path>`,
})
export class CarbonHexagonOutlineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHexagonSolidIcon],svg[carbon-hexagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30.85 15.449L23.888 3.532A1.07 1.07 0 0 0 22.964 3H9.036c-.38 0-.73.202-.923.532L1.15 15.45c-.199.34-.199.762 0 1.102l6.964 11.917c.193.33.544.532.923.532h13.928c.38 0 .73-.202.923-.532L30.85 16.55c.199-.34.199-.762 0-1.102"></svg:path>`,
})
export class CarbonHexagonSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHexagonVerticalOutlineIcon],svg[carbon-hexagon-vertical-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 23V9a1 1 0 0 1 .496-.864l12-7a1 1 0 0 1 1.008 0l12 7A1 1 0 0 1 29 9v14a1 1 0 0 1-.496.864l-12 7a1 1 0 0 1-1.008 0l-12-7A1 1 0 0 1 3 23M5 9.574v12.852l11 6.416l11-6.416V9.574L16 3.158z"></svg:path>`,
})
export class CarbonHexagonVerticalOutlineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHexagonVerticalSolidIcon],svg[carbon-hexagon-vertical-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.551 30.85l11.917-6.963a1.07 1.07 0 0 0 .532-.923V9.036c0-.38-.202-.73-.532-.923L16.55 1.15a1.09 1.09 0 0 0-1.102 0L3.532 8.113A1.07 1.07 0 0 0 3 9.036v13.928c0 .38.202.73.532.923L15.45 30.85c.34.199.762.199 1.102 0Z"></svg:path>`,
})
export class CarbonHexagonVerticalSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHintonPlotIcon],svg[carbon-hinton-plot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M2 2h4v4H2z" fill="currentColor"></svg:path><svg:path d="M10 2h4v4h-4z" fill="currentColor"></svg:path><svg:path d="M18 2h4v4h-4z" fill="currentColor"></svg:path><svg:path d="M26 2h4v4h-4z" fill="currentColor"></svg:path><svg:path d="M2 10h4v4H2z" fill="currentColor"></svg:path><svg:path d="M10 10h4v4h-4z" fill="currentColor"></svg:path><svg:path d="M18 10h4v4h-4z" fill="currentColor"></svg:path><svg:path d="M26 10h4v4h-4z" fill="currentColor"></svg:path><svg:path d="M2 18h4v4H2z" fill="currentColor"></svg:path><svg:path d="M10 18h4v4h-4z" fill="currentColor"></svg:path><svg:path d="M18 18h4v4h-4z" fill="currentColor"></svg:path><svg:path d="M26 18h4v4h-4z" fill="currentColor"></svg:path><svg:path d="M2 26h4v4H2z" fill="currentColor"></svg:path><svg:path d="M10 26h4v4h-4z" fill="currentColor"></svg:path><svg:path d="M18 26h4v4h-4z" fill="currentColor"></svg:path><svg:path d="M26 26h4v4h-4z" fill="currentColor"></svg:path>`,
})
export class CarbonHintonPlotIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHl7AttributesIcon],svg[carbon-hl7-attributes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M29 9h-8v4h2v-2h3.847L22 23h2.157L29 11V9z" fill="currentColor"></svg:path><svg:path d="M14 21V9h-2v14h8v-2h-6z" fill="currentColor"></svg:path><svg:path d="M8 9v6H4V9H2v14h2v-6h4v6h2V9H8z" fill="currentColor"></svg:path>`,
})
export class CarbonHl7AttributesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHoleFillingIcon],svg[carbon-hole-filling-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16" cy="16" r="5" fill="currentColor"></svg:circle><svg:path d="M26 28H6a2.002 2.002 0 0 1-2-2V6a2.002 2.002 0 0 1 2-2h20a2.002 2.002 0 0 1 2 2v20a2.002 2.002 0 0 1-2 2zM6 6v20h20.001L26 6z" fill="currentColor"></svg:path>`,
})
export class CarbonHoleFillingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHoleFillingCursorIcon],svg[carbon-hole-filling-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="19" cy="19" r="4" fill="currentColor"></svg:circle><svg:path d="M28 30H10a2.002 2.002 0 0 1-2-2V10a2.002 2.002 0 0 1 2-2h18a2.002 2.002 0 0 1 2 2v18a2.002 2.002 0 0 1-2 2zM10 10v18h18V10z" fill="currentColor"></svg:path><svg:path d="M11 2H2v9h2V4h7V2z" fill="currentColor"></svg:path>`,
})
export class CarbonHoleFillingCursorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHomeIcon],svg[carbon-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.612 2.214a1.01 1.01 0 0 0-1.242 0L1 13.419l1.243 1.572L4 13.621V26a2.004 2.004 0 0 0 2 2h20a2.004 2.004 0 0 0 2-2V13.63L29.757 15L31 13.428ZM18 26h-4v-8h4Zm2 0v-8a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v8H6V12.062l10-7.79l10 7.8V26Z"></svg:path>`,
})
export class CarbonHomeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHorizontalViewIcon],svg[carbon-horizontal-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 30H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2M4 20h-.002L4 28h24v-8zm24-6H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2M4 4h-.002L4 12h24V4z"></svg:path>`,
})
export class CarbonHorizontalViewIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHospitalIcon],svg[carbon-hospital-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 10h-4V6h-2v4h-4v2h4v4h2v-4h4z"></svg:path><svg:path fill="currentColor" d="M28 10h-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v6H4a2 2 0 0 0-2 2v18h28V12a2 2 0 0 0-2-2M14 28v-6h4v6Zm6 0v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7H4V12h4V4h16v8h4v16Z"></svg:path>`,
})
export class CarbonHospitalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHospitalBedIcon],svg[carbon-hospital-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 16h-8a2 2 0 0 0-2 2v6H4V14H2v16h2v-4h24v4h2v-9a5.006 5.006 0 0 0-5-5m3 8H17v-6h8a3.003 3.003 0 0 1 3 3Z"></svg:path><svg:path fill="currentColor" d="M9.5 17A1.5 1.5 0 1 1 8 18.5A1.5 1.5 0 0 1 9.5 17m0-2a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 9.5 15M21 6h-4V2h-2v4h-4v2h4v4h2V8h4z"></svg:path>`,
})
export class CarbonHospitalBedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHotelIcon],svg[carbon-hotel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.5 15A1.5 1.5 0 1 1 8 16.5A1.5 1.5 0 0 1 9.5 15m0-2a3.5 3.5 0 1 0 3.5 3.5A3.5 3.5 0 0 0 9.5 13"></svg:path><svg:path fill="currentColor" d="M25 14h-8a2 2 0 0 0-2 2v6H4V10.6l12-6.46l12.53 6.74l.94-1.76l-13-7a1 1 0 0 0-.94 0l-13 7A1 1 0 0 0 2 10v20h2v-6h24v6h2V19a5 5 0 0 0-5-5m-8 8v-6h8a3 3 0 0 1 3 3v3Z"></svg:path>`,
})
export class CarbonHotelIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHourglassIcon],svg[carbon-hourglass-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 19h2v2h-2zm0 4h2v2h-2z"></svg:path><svg:path fill="currentColor" d="M23 11.67V4h3V2H6v2h3v7.67a2 2 0 0 0 .4 1.2L11.75 16L9.4 19.13a2 2 0 0 0-.4 1.2V28H6v2h20v-2h-3v-7.67a2 2 0 0 0-.4-1.2L20.25 16l2.35-3.13a2 2 0 0 0 .4-1.2M21 4v7H11V4Zm0 16.33V28H11v-7.67L14.25 16L12 13h8l-2.25 3Z"></svg:path>`,
})
export class CarbonHourglassIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHtmlIcon],svg[carbon-html-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 19v-8h-2v10h6v-2zm-4-8h-2l-1.5 4l-1.5-4h-2v10h2v-7l1.5 4l1.5-4v7h2zM9 13h2v8h2v-8h2v-2H9zm-4-2v4H2v-4H0v10h2v-4h3v4h2V11z"></svg:path>`,
})
export class CarbonHtmlIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHtmlReferenceIcon],svg[carbon-html-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8zm24-6V6h-2v10h6v-2zm-4-8h-2l-1.5 4L19 6h-2v10h2V9l1.5 4L22 9v7h2zM9 8h2v8h2V8h2V6H9zM5 6v4H2V6H0v10h2v-4h3v4h2V6z"></svg:path>`,
})
export class CarbonHtmlReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHttpIcon],svg[carbon-http-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 11h-5v10h2v-3h3a2.003 2.003 0 0 0 2-2v-3a2 2 0 0 0-2-2m-3 5v-3h3l.001 3zm-17-3h2v8h2v-8h2v-2h-6zm13-2h-6v2h2v8h2v-8h2zM6 11v4H3v-4H1v10h2v-4h3v4h2V11z"></svg:path>`,
})
export class CarbonHttpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHumidityIcon],svg[carbon-humidity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.476 13.993L16.847 3.437a1.04 1.04 0 0 0-1.694 0L8.494 14.044A10 10 0 0 0 7 19a9 9 0 0 0 18 0a10.06 10.06 0 0 0-1.524-5.007M16 26a7.01 7.01 0 0 1-7-7a8 8 0 0 1 1.218-3.943l.935-1.49l10.074 10.074A6.98 6.98 0 0 1 16 26.001"></svg:path>`,
})
export class CarbonHumidityIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHumidityAltIcon],svg[carbon-humidity-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 12a3.9 3.9 0 0 1-4-3.777a3.9 3.9 0 0 1 .653-2.064l2.517-3.745a1.038 1.038 0 0 1 1.66 0l2.485 3.696A3.97 3.97 0 0 1 30 8.223A3.9 3.9 0 0 1 26 12m0-7.237l-1.656 2.463a1.9 1.9 0 0 0-.344.997a2.014 2.014 0 0 0 4 0a2 2 0 0 0-.375-1.047zM23.5 30h-15a6.496 6.496 0 0 1-1.3-12.862a8.994 8.994 0 0 1 17.6 0A6.496 6.496 0 0 1 23.5 30M16 12a7 7 0 0 0-6.941 6.145l-.1.812l-.815.064A4.496 4.496 0 0 0 8.5 28h15a4.496 4.496 0 0 0 .356-8.979l-.815-.064l-.099-.812A7 7 0 0 0 16 12"></svg:path>`,
})
export class CarbonHumidityAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHurricaneIcon],svg[carbon-hurricane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.652 4.182l-2.177 2.514l-1.404 1.621l1.715 1.288A7.94 7.94 0 0 1 23.996 16l.001.058l.002.041c.018.432.241 10.111-14.654 11.722l2.18-2.517l1.404-1.621l-1.715-1.288A7.94 7.94 0 0 1 8.004 16l-.001-.058L8 15.901c-.018-.431-.24-10.094 14.651-11.719M24.998 2l-.05.001C5.254 2.915 6.005 16 6.005 16a9.98 9.98 0 0 0 4.01 7.995l-3.777 4.36A1.004 1.004 0 0 0 7.002 30l.05-.001C26.747 29.085 25.996 16 25.996 16a9.98 9.98 0 0 0-4.009-7.995l3.776-4.36A1.004 1.004 0 0 0 24.998 2"></svg:path>`,
})
export class CarbonHurricaneIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHybridNetworkingIcon],svg[carbon-hybrid-networking-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 24.184V20h-2v4.184a3 3 0 1 0 2 0"></svg:path><svg:path fill="currentColor" d="M26 12a3.996 3.996 0 0 0-3.858 3H9.858a4 4 0 1 0 0 2h12.284A3.993 3.993 0 1 0 26 12M6 18a2 2 0 1 1 2-2a2.003 2.003 0 0 1-2 2m20 0a2 2 0 1 1 2-2a2.003 2.003 0 0 1-2 2"></svg:path><svg:path fill="currentColor" d="M19 5a3 3 0 1 0-4 2.816V12h2V7.816A2.99 2.99 0 0 0 19 5"></svg:path>`,
})
export class CarbonHybridNetworkingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonHybridNetworkingAltIcon],svg[carbon-hybrid-networking-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 22a3.96 3.96 0 0 0-2.02.566L17.414 16l6.567-6.567A3.95 3.95 0 0 0 26 10a4 4 0 1 0-4-4a3.95 3.95 0 0 0 .567 2.019L16 14.586L9.434 8.02A3.96 3.96 0 0 0 10 6a4 4 0 1 0-4 4a3.96 3.96 0 0 0 2.02-.566L14.586 16l-6.567 6.567A3.95 3.95 0 0 0 6 22a4 4 0 1 0 4 4a3.95 3.95 0 0 0-.567-2.019L16 17.414l6.566 6.566A3.96 3.96 0 0 0 22 26a4 4 0 1 0 4-4m0-18a2 2 0 1 1-2 2a2 2 0 0 1 2-2M6 28a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonHybridNetworkingAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonIbmAiOnZIcon],svg[carbon-ibm-ai-on-z-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 26c-.738 0-1.376.405-1.723 1H21l7.8-10.4A.999.999 0 0 0 28 15H17.816A2.995 2.995 0 0 0 15 13c-1.654 0-3 1.346-3 3s1.346 3 3 3a2.995 2.995 0 0 0 2.816-2H26l-7.8 10.4A.999.999 0 0 0 19 29h7.277c.347.595.985 1 1.723 1a2 2 0 1 0 0-4m-13-9a1 1 0 0 1 0-2a1 1 0 0 1 0 2"></svg:path><svg:path fill="currentColor" d="M16 21h-2v4.586L4.414 16L14 6.414V11h2V5h10v8h2V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h12zM4 5h8.586L4 13.586zm0 22v-8.586L12.586 27z"></svg:path>`,
})
export class CarbonIbmAiOnZIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonIbmAiopsInsightsIcon],svg[carbon-ibm-aiops-insights-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 23L2 30h7zM26 15v2c1.103 0 2 .898 2 2v5c0 1.103-.897 2-2 2H10v2h16c2.206 0 4-1.794 4-4v-5c0-2.206-1.794-4-4-4"></svg:path><svg:path fill="currentColor" d="M14 24a1 1 0 0 1-.961-.725L11.246 17H8v-2h4a1 1 0 0 1 .961.725L14 19.36l3.039-10.635a1 1 0 0 1 1.922 0L20.754 15H24v2h-4a1 1 0 0 1-.961-.725L18 12.64l-3.039 10.635A1 1 0 0 1 14 24"></svg:path><svg:path fill="currentColor" d="M4 13V8c0-1.103.897-2 2-2h16V4H6C3.794 4 2 5.794 2 8v5c0 2.206 1.794 4 4 4v-2c-1.103 0-2-.897-2-2"></svg:path><svg:circle cx="27" cy="5" r="3" fill="currentColor"></svg:circle>`,
})
export class CarbonIbmAiopsInsightsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonIbmApiConnectIcon],svg[carbon-ibm-api-connect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12a3.98 3.98 0 0 0-2.891 1.25l-3.16-1.755c.028-.162.05-.325.05-.495c0-1.654-1.345-3-3-3s-3 1.346-3 3a2.99 2.99 0 0 0 1.468 2.565l-.896 4.478A2.995 2.995 0 0 0 8 21c0 1.654 1.346 3 3 3s3-1.346 3-3c0-.087-.018-.168-.026-.253l4.932-2.243C19.64 19.41 20.746 20 22 20c2.206 0 4-1.794 4-4s-1.794-4-4-4m-9.001-2a1 1 0 1 1-.001 2.002a1 1 0 0 1 0-2.002m-2 12a1 1 0 1 1 .92-1.39l.001.002q.077.18.079.388a1 1 0 0 1-1 1m2.156-3.078a3 3 0 0 0-.624-.487l.897-4.478c.59-.086 1.12-.34 1.546-.716L18.143 15A4 4 0 0 0 18 16c0 .235.03.462.07.687zM22.002 18c-1.103 0-2-.897-2-2s.897-2 2-2s2 .898 2 2s-.897 2-2 2m5.089-6.592c.617 1.49.912 3.05.909 4.592a12.1 12.1 0 0 1-.9 4.548l1.792.896A14.1 14.1 0 0 0 30 16a13.9 13.9 0 0 0-1.061-5.357C26.71 5.263 21.492 2.007 16 2a13.9 13.9 0 0 0-5.36 1.066l.766 1.848A11.9 11.9 0 0 1 16 4c4.707.006 9.18 2.797 11.09 7.408m-6.497 15.679c-1.503.622-3.06.915-4.594.913c-4.707-.006-9.18-2.797-11.09-7.408A11.9 11.9 0 0 1 4 16c.003-1.563.313-3.108.9-4.547l-1.793-.897A14.1 14.1 0 0 0 2 16a13.96 13.96 0 0 0 8.643 12.928A14.1 14.1 0 0 0 16 30c1.789.002 3.606-.34 5.36-1.066zM25 23c-1.12 0-2 .88-2 2s.88 2 2 2s2-.88 2-2s-.88-2-2-2M7 5c-1.12 0-2 .88-2 2s.88 2 2 2s2-.88 2-2s-.88-2-2-2"></svg:path>`,
})
export class CarbonIbmApiConnectIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonIbmAppConnectEnterpriseIcon],svg[carbon-ibm-app-connect-enterprise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 19q-.307 0-.597.06l-2.555-4.257A3.98 3.98 0 0 0 20 12c0-2.206-1.794-4-4-4s-4 1.794-4 4c0 1.093.442 2.083 1.155 2.806l-3.11 5.198L10 20c-1.12 0-2 .88-2 2s.88 2 2 2s2-.88 2-2c0-.35-.094-.672-.247-.955l3.127-5.224c.357.105.728.179 1.12.179s.766-.075 1.125-.18l2.57 4.282A2.97 2.97 0 0 0 19 22c0 1.654 1.346 3 3 3s3-1.346 3-3s-1.346-3-3-3m-8-7c0-1.102.898-2 2-2s2 .898 2 2s-.897 2-2 2s-2-.897-2-2m8 11a1 1 0 1 1 .001-2.001A1 1 0 0 1 22 23m8-6c0-7.721-6.28-14-14-14S2 9.28 2 17c0 4.156 2.009 7.644 3.361 8.894C6.391 26.845 7.945 28 10 28a6.007 6.007 0 0 0 5.5-8.4l-1.832.8A4.004 4.004 0 0 1 10 26c-2.206 0-4-1.794-4-4s1.794-4 4-4v-2c-2.574 0-4.769 1.633-5.619 3.915A11 11 0 0 1 4 17C4 10.383 9.383 5 16 5s12 5.383 12 12h.001a12 12 0 0 1-.405 3.109l1.931.515c.315-1.18.474-2.4.473-3.624"></svg:path>`,
})
export class CarbonIbmAppConnectEnterpriseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonIbmApplicationAndDiscoveryDeliveryIntelligenceIcon],svg[carbon-ibm-application-and-discovery-delivery-intelligence-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6H7v10h2zm19.504 2.136l-12-7a1 1 0 0 0-1.008 0l-4 2.334a1 1 0 0 0-.496.863V13h2V4.908l3-1.75l11 6.416V13h2V9a1 1 0 0 0-.496-.864M4.999 22.432V9H3v14.006a1 1 0 0 0 .496.864L13.993 30L15 28.272zM22 27h2V17h-2zm5 0h2v-6h-2zm-10 0h2v-8h-2z"></svg:path>`,
})
export class CarbonIbmApplicationAndDiscoveryDeliveryIntelligenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonIbmAsperaIcon],svg[carbon-ibm-aspera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 11c-.75 0-1.39.4-1.73 1H16c-2.21 0-4 1.79-4 4c0 .73.21 1.41.56 2H5.73c-.34-.6-.98-1-1.73-1c-1.12 0-2 .88-2 2s.88 2 2 2c.75 0 1.39-.4 1.73-1H16c2.21 0 4-1.79 4-4c0-.73-.21-1.41-.56-2h6.83c.34.6.98 1 1.73 1c1.12 0 2-.88 2-2s-.88-2-2-2m-10 5c0 1.1-.9 2-2 2s-2-.9-2-2s.9-2 2-2s2 .9 2 2M5.05 15h-2C3.05 7.71 8.13 3 16 3h10v2H16C9.25 5 5.05 8.83 5.05 15m11 14h-10v-2h10C22.19 27 27 22.61 27 17h2c0 6.73-5.69 12-12.95 12"></svg:path>`,
})
export class CarbonIbmAsperaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonIbmBluepayIcon],svg[carbon-ibm-bluepay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 26V15.828l-3.586 3.586L0 18l6-6l6 6l-1.414 1.414L7 15.828V26h12v2H7a2 2 0 0 1-2-2m26-8h-3v-2h-2v2h-1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4v2h-6v2h3v2h2v-2h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4v-2h6zm-3-6V6a2 2 0 0 0-2-2H12v2h14v6M2 6h5v2H2zm0-4h8v2H2z"></svg:path>`,
})
export class CarbonIbmBluepayIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonIbmCloudIcon],svg[carbon-ibm-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.58 13.65a9.733 9.733 0 0 0-18.294 3.889A6.75 6.75 0 0 0 7 31h16a8.747 8.747 0 0 0 1.58-17.35M23 29.5H7a5.237 5.237 0 0 1-.7-10.43a9.7 9.7 0 0 0 1.104 3.785a.75.75 0 1 0 1.322-.71a8.25 8.25 0 0 1 14.026-8.632a8.75 8.75 0 0 0-6.315 2.95a.75.75 0 1 0 1.124.992A7.25 7.25 0 1 1 23 29.5m8.898-19.245a.76.76 0 0 0-1.036-.278l-3.02 1.744a.759.759 0 1 0 .758 1.314l3.02-1.744a.76.76 0 0 0 .278-1.036M22.676 7.87a.76.76 0 0 0 1.037-.278l1.744-3.02a.759.759 0 0 0-1.314-.758l-1.744 3.02a.76.76 0 0 0 .277 1.036M16 6.081a.76.76 0 0 0 .759-.759V1.835a.759.759 0 1 0-1.518 0v3.487a.76.76 0 0 0 .759.76m-7.713 1.51a.759.759 0 0 0 1.314-.759l-1.744-3.02a.759.759 0 1 0-1.314.76zm-4.129 4.129l-3.02-1.744a.759.759 0 1 0-.758 1.314l3.02 1.744a.759.759 0 1 0 .759-1.314z"></svg:path>`,
})
export class CarbonIbmCloudIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonIbmCloudAppIdIcon],svg[carbon-ibm-cloud-app-id-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 18h-6a3 3 0 0 0-3 3v2h2v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h2v-2a3 3 0 0 0-3-3m-3-1a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0-6a2 2 0 1 1 0 4a2 2 0 0 1 0-4"></svg:path><svg:path fill="currentColor" d="M17 30C9.28 30 3 23.72 3 16h2c0 6.617 5.383 12 12 12c5.226 0 9.816-3.338 11.421-8.307l1.904.614A13.96 13.96 0 0 1 17 30m14-14h-2c0-6.617-5.383-12-12-12V2c7.72 0 14 6.28 14 14M6 14l-2.139-1.013A5.02 5.02 0 0 1 1 8.467V2h10v6.468a5.02 5.02 0 0 1-2.861 4.52zM3 4v4.468a3.01 3.01 0 0 0 1.717 2.71L6 11.787l1.283-.607A3.01 3.01 0 0 0 9 8.468V4z"></svg:path>`,
})
export class CarbonIbmCloudAppIdIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonIbmCloudBackupAndRecoveryIcon],svg[carbon-ibm-cloud-backup-and-recovery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 24v2H7.5C3.3 26 0 22.6 0 18.5c0-3.6 2.6-6.7 6.1-7.4c0 0 .6-.1.9-.1h.2L5.6 9.4L7 8l4 4l-4 4l-1.4-1.4L7.2 13H7c-2.4.2-4.6 2.3-4.9 4.7c-.5 3.4 2.1 6.3 5.4 6.3zm3 0c-.5 0-1 .5-1 1s.5 1 1 1s1-.5 1-1s-.5-1-1-1m7.9-12.9l-.1-.1c-.8-4-3.9-7.1-7.9-7.8C17.3 3 16.6 3 16 3c-2.9 0-5.6 1.3-7.4 3.3l1.5 1.5C11.3 6.4 13 5.3 15 5.1c1-.1 1.9-.1 2.9.1c3.2.7 5.5 3.4 6.1 6.5l.2 1q0 .1.1.1l1.1.2c1.2.2 2.3.7 3.1 1.5c1.3 1.3 1.9 3.1 1.5 4.9c-.5 2.5-2.5 4.3-5 4.5l1.5-1.6L25 21l-4 4l4 4l1.4-1.4l-1.6-1.6c3.5-.2 6.4-2.7 7.1-6.1c.1-.5.1-.9.1-1.3c0-3.7-2.5-6.8-6.1-7.5"></svg:path>`,
})
export class CarbonIbmCloudBackupAndRecoveryIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonIbmCloudBackupServiceVpcIcon],svg[carbon-ibm-cloud-backup-service-vpc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 20h8v-2H6v-6h18V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h8v-2H6zM6 4h16v6H6zm2 19a1 1 0 1 1 2 0a1 1 0 0 1-2 0m0-8a1 1 0 1 1 2 0a1 1 0 0 1-2 0m0-8a1 1 0 1 1 2 0a1 1 0 0 1-2 0m22 10h-3.413C28.627 18.225 30 20.452 30 23c0 3.86-3.14 7-7 7s-7-3.14-7-7c0-1.87.728-3.627 2.05-4.95l1.414 1.414A4.97 4.97 0 0 0 18 23c0 2.757 2.243 5 5 5s5-2.243 5-5a5 5 0 0 0-3-4.576V22h-2v-7h7zM8 23a1 1 0 1 1 2 0a1 1 0 0 1-2 0m0-8a1 1 0 1 1 2 0a1 1 0 0 1-2 0m0-8a1 1 0 1 1 2 0a1 1 0 0 1-2 0m22 10h-3.413C28.627 18.225 30 20.452 30 23c0 3.86-3.14 7-7 7s-7-3.14-7-7c0-1.87.728-3.627 2.05-4.95l1.414 1.414A4.97 4.97 0 0 0 18 23c0 2.757 2.243 5 5 5s5-2.243 5-5a5 5 0 0 0-3-4.576V22h-2v-7h7z"></svg:path>`,
})
export class CarbonIbmCloudBackupServiceVpcIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonIbmCloudBareMetalServerIcon],svg[carbon-ibm-cloud-bare-metal-server-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="9" cy="26" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M26 30H6a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M6 24v4h20v-4z"></svg:path><svg:circle cx="9" cy="16" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M26 20H6a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M6 14v4h20v-4z"></svg:path><svg:circle cx="9" cy="6" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M26 10H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M6 4v4h20V4z"></svg:path>`,
})
export class CarbonIbmCloudBareMetalServerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonIbmCloudBareMetalServersVpcIcon],svg[carbon-ibm-cloud-bare-metal-servers-vpc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="9" cy="26" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M4 24v4c0 1.1.9 2 2 2h12v-2H6v-4h12v-2H6c-1.1 0-2 .9-2 2m0-11v5c0 1.1.9 2 2 2h8v-2H6v-5z"></svg:path><svg:circle cx="9" cy="16" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M28 19v-5c0-1.1-.9-2-2-2h-8v2h8v5zm0-11V4c0-1.1-.9-2-2-2H14v2h12v4H14v2h12c1.1 0 2-.9 2-2"></svg:path><svg:path fill="currentColor" d="M23.41 22L10 8.59V2H2v8h6.59L22 23.41V30h8v-8zM8 8H4V4h4zm20 20h-4v-4h4z"></svg:path>`,
})
export class CarbonIbmCloudBareMetalServersVpcIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonIbmCloudCitrixDaasIcon],svg[carbon-ibm-cloud-citrix-daas-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 23h4v4h-4zm7 0h4v4h-4zm-7-7h4v4h-4zm7 0h4v4h-4z"></svg:path><svg:path fill="currentColor" d="M16 4c-4.3 0-7.9 3-8.8 7.1c-3 .6-5.2 3.3-5.2 6.4C2 21.1 4.9 24 8.5 24H16v-2H8.5C6 22 4 20 4 17.5c0-2.3 1.8-4.3 4.1-4.5H9l.1-.8C9.5 8.6 12.5 6 16 6c3.9 0 7 3.1 7 7h2c0-5-4-9-9-9"></svg:path>`,
})
export class CarbonIbmCloudCitrixDaasIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonIbmCloudCodeEngineIcon],svg[carbon-ibm-cloud-code-engine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 20v7.923c0 .595-.482 1.077-1.077 1.077H9.077A1.077 1.077 0 0 1 8 27.923V23H2v-2h6v-4.923C8 15.482 8.482 15 9.077 15H13v2h-3v10h10v-7zM13 8H2v2h11zm16 9a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H17a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1zM18 5h10v10H18z"></svg:path>`,
})
export class CarbonIbmCloudCodeEngineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonIbmCloudContinuousDeliveryIcon],svg[carbon-ibm-cloud-continuous-delivery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 1l-6 6l1.415 1.402L22 4.818V21H10V10H8v11c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4.815l3.586 3.587L29 7z"></svg:path><svg:path fill="currentColor" d="M18.5 19h-5c-.827 0-1.5-.673-1.5-1.5v-5c0-.827.673-1.5 1.5-1.5h5c.827 0 1.5.673 1.5 1.5v5c0 .827-.673 1.5-1.5 1.5M14 17h4v-4h-4zm2 14v-2c7.168 0 13-5.832 13-13c0-1.265-.181-2.514-.538-3.715l1.917-.57C30.79 13.1 31 14.542 31 16c0 8.271-6.729 15-15 15M1.621 20.285A15 15 0 0 1 1 16C1 7.729 7.729 1 16 1v2C8.832 3 3 8.832 3 16c0 1.265.181 2.515.538 3.715z"></svg:path>`,
})
export class CarbonIbmCloudContinuousDeliveryIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
