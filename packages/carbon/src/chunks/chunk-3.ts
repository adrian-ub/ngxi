import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonNetwork2Icon],svg[carbon-network-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 17h5.142a4 4 0 1 0 0-2H17V7h5.142a4 4 0 1 0 0-2H17a2 2 0 0 0-2 2v8H9.858a4 4 0 1 0 0 2H15v8a2 2 0 0 0 2 2h5.142a4 4 0 1 0 0-2H17Zm9-3a2 2 0 1 1-2 2a2 2 0 0 1 2-2m0-10a2 2 0 1 1-2 2a2 2 0 0 1 2-2M6 18a2 2 0 1 1 2-2a2 2 0 0 1-2 2m20 6a2 2 0 1 1-2 2a2 2 0 0 1 2-2"></svg:path>`,
})
export class CarbonNetwork2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNetwork3Icon],svg[carbon-network-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 30h-8v-8h8zm-6-2h4v-4h-4zm-4-1H8a6 6 0 0 1 0-12h2v2H8a4 4 0 0 0 0 8h12z"></svg:path><svg:path fill="currentColor" d="M20 20h-8v-8h8Zm-6-2h4v-4h-4Z"></svg:path><svg:path fill="currentColor" d="M24 17h-2v-2h2a4 4 0 0 0 0-8H12V5h12a6 6 0 0 1 0 12m-14-7H2V2h8zM4 8h4V4H4z"></svg:path>`,
})
export class CarbonNetwork3Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNetwork3ReferenceIcon],svg[carbon-network-3-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8zm26 10h-8v-8h8zm-6-2h4v-4h-4zm-4-8h-8v-8h8zm-6-2h4v-4h-4z"></svg:path><svg:path fill="currentColor" d="M24 17h-2v-2h2a4 4 0 0 0 0-8H12V5h12a6 6 0 0 1 0 12m-14-7H2V2h8zM4 8h4V4H4z"></svg:path>`,
})
export class CarbonNetwork3ReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNetwork4Icon],svg[carbon-network-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="21" cy="26" r="2" fill="currentColor"></svg:circle><svg:circle cx="21" cy="6" r="2" fill="currentColor"></svg:circle><svg:circle cx="4" cy="16" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M28 12a3.996 3.996 0 0 0-3.858 3h-4.284a3.966 3.966 0 0 0-5.491-2.643l-3.177-3.97A3.96 3.96 0 0 0 12 6a4 4 0 1 0-4 4a4 4 0 0 0 1.634-.357l3.176 3.97a3.924 3.924 0 0 0 0 4.774l-3.176 3.97A4 4 0 0 0 8 22a4 4 0 1 0 4 4a3.96 3.96 0 0 0-.81-2.387l3.176-3.97A3.966 3.966 0 0 0 19.858 17h4.284A3.993 3.993 0 1 0 28 12M6 6a2 2 0 1 1 2 2a2 2 0 0 1-2-2m2 22a2 2 0 1 1 2-2a2 2 0 0 1-2 2m8-10a2 2 0 1 1 2-2a2 2 0 0 1-2 2m12 0a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonNetwork4Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNetwork4ReferenceIcon],svg[carbon-network-4-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="21" cy="26" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8z"></svg:path><svg:circle cx="21" cy="6" r="2" fill="currentColor"></svg:circle><svg:circle cx="4" cy="16" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M28 12a3.996 3.996 0 0 0-3.858 3h-4.284a3.966 3.966 0 0 0-5.491-2.643l-3.177-3.97A3.96 3.96 0 0 0 12 6a4 4 0 1 0-4 4a4 4 0 0 0 1.634-.357l3.176 3.97A3.96 3.96 0 0 0 12 16a3.992 3.992 0 0 0 7.858 1h4.284A3.993 3.993 0 1 0 28 12M8 8a2 2 0 1 1 2-2a2 2 0 0 1-2 2m8 10a2 2 0 1 1 2-2a2.003 2.003 0 0 1-2 2m12 0a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonNetwork4ReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNetworkAdminControlIcon],svg[carbon-network-admin-control-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 20.415L25.586 19L23 21.587L20.414 19L19 20.415L21.586 23L19 25.586L20.414 27L23 24.414L25.586 27L27 25.586L24.414 23zM24 4a4.005 4.005 0 0 0-4 4a3.95 3.95 0 0 0 .567 2.019L10.019 20.567A3.95 3.95 0 0 0 8 20a4 4 0 1 0 4 4a3.95 3.95 0 0 0-.567-2.019l10.548-10.548A3.95 3.95 0 0 0 24 12a4 4 0 0 0 0-8M8 26a2 2 0 1 1 2-2a2 2 0 0 1-2 2m16-16a2 2 0 1 1 2-2a2 2 0 0 1-2 2M8 11.18L5.41 8.59L4 10l4 4l7-7l-1.41-1.41z"></svg:path>`,
})
export class CarbonNetworkAdminControlIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNetworkEnterpriseIcon],svg[carbon-network-enterprise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.798 10a10 10 0 0 0-19.62.124A7.496 7.496 0 0 0 7.5 25H8v-2h-.5a5.496 5.496 0 0 1-.377-10.98l.837-.057l.09-.833A7.993 7.993 0 0 1 23.737 10Z"></svg:path><svg:path fill="currentColor" d="M28 12H18a2 2 0 0 0-2 2v4h-4a2 2 0 0 0-2 2v10h20V14a2 2 0 0 0-2-2M12 28v-8h4v8Zm16 0H18V14h10Z"></svg:path><svg:path fill="currentColor" d="M20 16h2v4h-2zm4 0h2v4h-2zm-4 6h2v4h-2zm4 0h2v4h-2z"></svg:path>`,
})
export class CarbonNetworkEnterpriseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNetworkInterfaceIcon],svg[carbon-network-interface-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 18h-2V6H13V4h13c1.103 0 2 .897 2 2zM18 28H6c-1.103 0-2-.897-2-2V13h2v13h12zm8-7l-1.793 1.793l-5.508-5.508c.187-.39.3-.823.3-1.285c0-1.654-1.345-3-3-3a2.96 2.96 0 0 0-1.284.3L9.433 8.02C9.784 7.423 10 6.74 10 6c0-2.205-1.794-4-4-4S2 3.794 2 6s1.794 4 4 4c.74 0 1.424-.215 2.019-.567l5.282 5.282c-.188.39-.301.823-.301 1.285c0 1.654 1.346 3 3 3a2.96 2.96 0 0 0 1.285-.3l5.508 5.507L21 26l5 5l5-5zM4 6c0-1.102.897-2 2-2s2 .898 2 2s-.897 2-2 2s-2-.897-2-2m11 10c0-.551.449-1 1-1s1 .449 1 1s-.448 1-1 1s-1-.449-1-1m8.829 10L26 23.829L28.171 26L26 28.171z"></svg:path>`,
})
export class CarbonNetworkInterfaceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNetworkOverlayIcon],svg[carbon-network-overlay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 23h-8.17l2.58-2.59L15 19l-5 5l5 5l1.41-1.41L13.83 25H22zM11 13h8.17l-2.58-2.59L18 9l5 5l-5 5l-1.41-1.41L19.17 15H11z"></svg:path><svg:path fill="currentColor" d="M24.5 25H24v-2h.5a5.496 5.496 0 0 0 .377-10.98l-.836-.056l-.09-.834a7.998 7.998 0 0 0-15.902 0l-.09.834l-.836.057A5.496 5.496 0 0 0 7.5 23H8v2h-.5a7.496 7.496 0 0 1-1.322-14.876a10 10 0 0 1 19.644 0A7.496 7.496 0 0 1 24.5 25"></svg:path>`,
})
export class CarbonNetworkOverlayIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNetworkPublicIcon],svg[carbon-network-public-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.5 13c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5s8.5-3.8 8.5-8.5s-3.8-8.5-8.5-8.5m6.5 8h-3c0-2-.3-4-.9-5.5c2.1 1 3.7 3 3.9 5.5m-6.5 7c-.4-.2-1.3-1.8-1.5-5h2.9c-.2 3.2-1 4.8-1.4 5M21 21c.1-3.8 1.1-5.8 1.4-6c.4.2 1.4 2.2 1.5 6zm-1.1-5.5c-.6 1.5-.8 3.5-.9 5.5h-3c.2-2.5 1.8-4.5 3.9-5.5M16.2 23H19c.1 1.6.4 3.2.9 4.5c-1.8-.8-3.2-2.5-3.7-4.5m8.9 4.5q.75-1.95.9-4.5h2.9c-.6 2-2 3.7-3.8 4.5"></svg:path><svg:path fill="currentColor" d="M25.8 10c-.9-4.6-5-8-9.8-8s-8.9 3.4-9.8 8.1c-3.5.7-6.2 3.7-6.2 7.4C0 21.6 3.4 25 7.5 25H11v-2H7.5c-3 0-5.5-2.5-5.5-5.5c0-2.9 2.2-5.3 5.1-5.5H8v-.9c.5-4 3.9-7.1 8-7.1c3.7 0 6.8 2.6 7.7 6z"></svg:path>`,
})
export class CarbonNetworkPublicIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNetworkTimeProtocolIcon],svg[carbon-network-time-protocol-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.8 27c-.3-.9-1-1.5-1.8-1.8V22c5-.5 9-4.8 9-9.9s-4.5-10-10-10S6 6.5 6 12s3.9 9.5 9 10v3.2c-.9.3-1.5 1-1.8 1.8H4v2h9.2c.4 1.2 1.5 2 2.8 2s2.4-.8 2.8-2H28v-2zM8 12c0-4.4 3.6-8 8-8s8 3.6 8 8s-3.6 8-8 8s-8-3.6-8-8m8 17c-.6 0-1-.5-1-1s.4-1 1-1s1 .5 1 1s-.5 1-1 1m3.3-12.3L15 12.4V6h2v5.6l3.7 3.7z"></svg:path>`,
})
export class CarbonNetworkTimeProtocolIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNewTabIcon],svg[carbon-new-tab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:path id="carbonNewTab0" fill="currentColor" d="M26 26H6V6h10V4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V16h-2Z"></svg:path></svg:defs><svg:use href="#carbonNewTab0"></svg:use><svg:use href="#carbonNewTab0"></svg:use><svg:path fill="currentColor" d="M26 6V2h-2v4h-4v2h4v4h2V8h4V6z"></svg:path>`,
})
export class CarbonNewTabIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNextFilledIcon],svg[carbon-next-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16A14 14 0 1 0 16 2A14 14 0 0 0 2 16m6-1h12.15l-5.58-5.607L16 8l8 8l-8 8l-1.43-1.427L20.15 17H8Z"></svg:path><svg:path fill="none" d="m16 8l-1.43 1.393L20.15 15H8v2h12.15l-5.58 5.573L16 24l8-8z"></svg:path>`,
})
export class CarbonNextFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNextOutlineIcon],svg[carbon-next-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 8l-1.43 1.393L20.15 15H8v2h12.15l-5.58 5.573L16 24l8-8z"></svg:path><svg:path fill="currentColor" d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4"></svg:path>`,
})
export class CarbonNextOutlineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNoImageIcon],svg[carbon-no-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 3.414L28.586 2L2 28.586L3.414 30l2-2H26a2.003 2.003 0 0 0 2-2V5.414zM26 26H7.414l7.793-7.793l2.379 2.379a2 2 0 0 0 2.828 0L22 19l4 3.997zm0-5.832l-2.586-2.586a2 2 0 0 0-2.828 0L19 19.168l-2.377-2.377L26 7.414zM6 22v-3l5-4.997l1.373 1.374l1.416-1.416l-1.375-1.375a2 2 0 0 0-2.828 0L6 16.172V6h16V4H6a2 2 0 0 0-2 2v16z"></svg:path>`,
})
export class CarbonNoImageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNoTicketIcon],svg[carbon-no-ticket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 6h-.586L30 3.414L28.586 2L2 28.586L3.414 30l4-4H28a2.003 2.003 0 0 0 2-2v-5a1 1 0 0 0-1-1a2 2 0 0 1 0-4a1 1 0 0 0 1-1V8a2 2 0 0 0-2-2m0 6.127a4 4 0 0 0 0 7.746V24h-7v-3h-2v3H9.414L19 14.414V19h2v-6.586L25.414 8H28zm-24 0V8h15V6H4a2 2 0 0 0-2 2v5a1 1 0 0 0 1 1a2 2 0 0 1 0 4a1 1 0 0 0-1 1v5h2v-4.127a4 4 0 0 0 0-7.746"></svg:path>`,
})
export class CarbonNoTicketIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNominalIcon],svg[carbon-nominal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 28a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6m0-10a4 4 0 1 0 4 4a4.005 4.005 0 0 0-4-4M8 28a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6m0-10a4 4 0 1 0 4 4a4.005 4.005 0 0 0-4-4m8-4a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6m0-10a4 4 0 1 0 4 4a4.005 4.005 0 0 0-4-4"></svg:path>`,
})
export class CarbonNominalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNominateIcon],svg[carbon-nominate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M25 23h-6a3 3 0 0 0-3 3v2h2v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h2v-2a3 3 0 0 0-3-3z" fill="currentColor"></svg:path><svg:path d="M18 18a4 4 0 1 0 4-4a4 4 0 0 0-4 4zm6 0a2 2 0 1 1-2-2a2 2 0 0 1 2 2z" fill="currentColor"></svg:path><svg:path d="M10 18.59L7.41 16L6 17.41l4 4l7-7L15.59 13L10 18.59z" fill="currentColor"></svg:path><svg:path d="M14 26H4V6h7.172l3.414 3.414l.586.586H28v8h2v-8a2 2 0 0 0-2-2H16l-3.414-3.414A2 2 0 0 0 11.172 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h10z" fill="currentColor"></svg:path>`,
})
export class CarbonNominateIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNonCertifiedIcon],svg[carbon-non-certified-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8h10v2H6zm0 4h8v2H6zm0 4h4v2H6z"></svg:path><svg:path fill="currentColor" d="M28 26H7.414L30 3.414L28.586 2l-2 2H4a2 2 0 0 0-2 2v16h2V6h20.586L2 28.586L3.414 30l2-2H28a2 2 0 0 0 2-2V10h-2Z"></svg:path>`,
})
export class CarbonNonCertifiedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNoodleBowlIcon],svg[carbon-noodle-bowl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.414 15l-8-8L2 8.414L8.586 15H2v1a14 14 0 0 0 28 0v-1ZM16 28A12.017 12.017 0 0 1 4.042 17h23.917A12.017 12.017 0 0 1 16 28"></svg:path><svg:path fill="currentColor" d="M22 8a5 5 0 0 0-1.57.255A8.02 8.02 0 0 0 14 5a7.94 7.94 0 0 0-4.906 1.68L4.414 2L3 3.414l6.05 6.05l.707-.707A5.96 5.96 0 0 1 14 7a6.02 6.02 0 0 1 4.688 2.264a5 5 0 0 0-.59.61A2.99 2.99 0 0 1 15.754 11H12v2h3.754a4.98 4.98 0 0 0 3.904-1.874A3 3 0 0 1 25 13h2a5.006 5.006 0 0 0-5-5"></svg:path>`,
})
export class CarbonNoodleBowlIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNotAvailableIcon],svg[carbon-not-available-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 15h10v2H4zm14 0h10v2H18z"></svg:path>`,
})
export class CarbonNotAvailableIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNotSentIcon],svg[carbon-not-sent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 28.59L3.41 2L2 3.41l8 8l-7.34 2.65a1 1 0 0 0 0 1.87l9.6 3.84l3.84 9.6a1 1 0 0 0 .9.63a1 1 0 0 0 .92-.66L20.6 22l8 8zM5.8 15l5.74-2l3.05 3l-1.83 1.83zM17 26.2l-2.79-7L16 17.41l3 3.05zm-1.31-14.75l7.64-2.78l-2.78 7.64l1.56 1.56l3.83-10.53a1 1 0 0 0-1.28-1.28L14.13 9.89z"></svg:path>`,
})
export class CarbonNotSentIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNotSentFilledIcon],svg[carbon-not-sent-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 28.59L3.41 2L2 3.41l8 8l-7.34 2.65a1 1 0 0 0 0 1.87l8.59 3.43L14.59 16L16 17.41l-3.37 3.37l3.44 8.59A1 1 0 0 0 17 30a1 1 0 0 0 .92-.66L20.6 22l8 8zm-7.51-11.76l3.45-9.49a1 1 0 0 0-1.28-1.28l-9.49 3.45z"></svg:path>`,
})
export class CarbonNotSentFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNotebookIcon],svg[carbon-notebook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 10h7v2h-7zm0 5h7v2h-7zm0 5h7v2h-7z"></svg:path><svg:path fill="currentColor" d="M28 5H4a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h24a2.003 2.003 0 0 0 2-2V7a2 2 0 0 0-2-2M4 7h11v18H4Zm13 18V7h11l.002 18Z"></svg:path>`,
})
export class CarbonNotebookIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNotebookReferenceIcon],svg[carbon-notebook-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v2h3.586L2 27.586L3.414 29L9 23.414V27h2v-7zm15-10h7v2h-7zm0 5h7v2h-7zm0 5h7v2h-7z"></svg:path><svg:path fill="currentColor" d="M28 5H4a2 2 0 0 0-2 2v10h2V7h11v20h13a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M17 25V7h11l.002 18Z"></svg:path>`,
})
export class CarbonNotebookReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNotificationIcon],svg[carbon-notification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.707 19.293L26 16.586V13a10.014 10.014 0 0 0-9-9.95V1h-2v2.05A10.014 10.014 0 0 0 6 13v3.586l-2.707 2.707A1 1 0 0 0 3 20v3a1 1 0 0 0 1 1h7v.777a5.15 5.15 0 0 0 4.5 5.199A5.006 5.006 0 0 0 21 25v-1h7a1 1 0 0 0 1-1v-3a1 1 0 0 0-.293-.707M19 25a3 3 0 0 1-6 0v-1h6Zm8-3H5v-1.586l2.707-2.707A1 1 0 0 0 8 17v-4a8 8 0 0 1 16 0v4a1 1 0 0 0 .293.707L27 20.414Z"></svg:path>`,
})
export class CarbonNotificationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNotificationCounterIcon],svg[carbon-notification-counter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 12v15H5V5h15V3H5a2 2 0 0 0-2 2v22a2 2 0 0 0 2 2h22a2 2 0 0 0 2-2V12z"></svg:path><svg:circle cx="26.5" cy="5.5" r="3.5" fill="currentColor"></svg:circle>`,
})
export class CarbonNotificationCounterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNotificationFilledIcon],svg[carbon-notification-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.707 19.293L26 16.586V13a10.014 10.014 0 0 0-9-9.95V1h-2v2.05A10.014 10.014 0 0 0 6 13v3.586l-2.707 2.707A1 1 0 0 0 3 20v3a1 1 0 0 0 1 1h7v1a5 5 0 0 0 10 0v-1h7a1 1 0 0 0 1-1v-3a1 1 0 0 0-.293-.707M19 25a3 3 0 0 1-6 0v-1h6Z"></svg:path>`,
})
export class CarbonNotificationFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNotificationNewIcon],svg[carbon-notification-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 16.586V14h-2v3a1 1 0 0 0 .293.707L27 20.414V22H5v-1.586l2.707-2.707A1 1 0 0 0 8 17v-4a7.985 7.985 0 0 1 12-6.917V3.846a9.9 9.9 0 0 0-3-.796V1h-2v2.05A10.014 10.014 0 0 0 6 13v3.586l-2.707 2.707A1 1 0 0 0 3 20v3a1 1 0 0 0 1 1h7v1a5 5 0 0 0 10 0v-1h7a1 1 0 0 0 1-1v-3a1 1 0 0 0-.293-.707ZM19 25a3 3 0 0 1-6 0v-1h6Z"></svg:path><svg:circle cx="26" cy="8" r="4" fill="currentColor"></svg:circle>`,
})
export class CarbonNotificationNewIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNotificationOffIcon],svg[carbon-notification-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 16.586V13a9.9 9.9 0 0 0-1.083-4.502L30 3.414L28.586 2L2 28.586L3.414 30l6-6H11v1a5 5 0 0 0 10 0v-1h7a1 1 0 0 0 1-1v-3a1 1 0 0 0-.293-.707zM19 25a3 3 0 0 1-6 0v-1h6zm8-3H11.414l11.998-11.998A8 8 0 0 1 24 13v4a1 1 0 0 0 .293.707L27 20.414zM7.707 17.707A1 1 0 0 0 8 17v-4a8.01 8.01 0 0 1 8-8a7.93 7.93 0 0 1 4.986 1.768l1.426-1.426A9.93 9.93 0 0 0 17 3.05V1h-2v2.05A10.014 10.014 0 0 0 6 13v3.586l-3 3L4.414 21z"></svg:path>`,
})
export class CarbonNotificationOffIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNotificationOffFilledIcon],svg[carbon-notification-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 16.586V13a9.9 9.9 0 0 0-1.087-4.499L30 3.414L28.586 2L2 28.586L3.414 30l6-6H11v1a5 5 0 0 0 10 0v-1h7a1 1 0 0 0 1-1v-3a1 1 0 0 0-.293-.707zM19 25a3 3 0 0 1-6 0v-1h6zm2.61-20.262A9.9 9.9 0 0 0 17 3.051V1h-2v2.05A10.014 10.014 0 0 0 6 13v3.586l-2.707 2.707A1 1 0 0 0 3 20v3a1 1 0 0 0 .059.29z"></svg:path>`,
})
export class CarbonNotificationOffFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNullSignIcon],svg[carbon-null-sign-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 3.414L28.586 2l-3.432 3.432A13.93 13.93 0 0 0 16 2C8.28 2 2 8.28 2 16c0 3.5 1.3 6.697 3.432 9.154L2 28.586L3.414 30l3.432-3.432A13.93 13.93 0 0 0 16 30c7.72 0 14-6.28 14-14c0-3.5-1.3-6.697-3.432-9.154zM4 16C4 9.383 9.383 4 16 4a11.94 11.94 0 0 1 7.74 2.845L6.846 23.741A11.94 11.94 0 0 1 4 16m24 0c0 6.617-5.383 12-12 12a11.94 11.94 0 0 1-7.74-2.845L25.155 8.259A11.94 11.94 0 0 1 28 16"></svg:path>`,
})
export class CarbonNullSignIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNumber0Icon],svg[carbon-number-0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 23h-4a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2m-4-12v10h4V11Z"></svg:path><svg:path fill="currentColor" d="M15 15h2v2h-2z"></svg:path>`,
})
export class CarbonNumber0Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNumber1Icon],svg[carbon-number-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 10v12zm1-1h-5v2h3v10h-3v2h8v-2h-3z"></svg:path>`,
})
export class CarbonNumber1Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNumber2Icon],svg[carbon-number-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 23h-8v-6a2 2 0 0 1 2-2h4v-4h-6V9h6a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4v4h6Z"></svg:path>`,
})
export class CarbonNumber2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNumber3Icon],svg[carbon-number-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 9h-6v2h6v4h-4v2h4v4h-6v2h6a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonNumber3Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNumber4Icon],svg[carbon-number-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10v8zm1-1h-2v8h-3V9h-2v10h5v4h2v-4h1v-2h-1z"></svg:path>`,
})
export class CarbonNumber4Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNumber5Icon],svg[carbon-number-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 23h-6v-2h6v-4h-6V9h8v2h-6v4h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonNumber5Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNumber6Icon],svg[carbon-number-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 14h-4v-3h5V9h-5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2m-4 7v-5h4v5Z"></svg:path>`,
})
export class CarbonNumber6Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNumber7Icon],svg[carbon-number-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 9h-8v4h2v-2h3.85L13 23h2.16L20 11z"></svg:path>`,
})
export class CarbonNumber7Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNumber8Icon],svg[carbon-number-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 9h-4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2m0 2v4h-4v-4Zm-4 10v-4h4v4Z"></svg:path>`,
})
export class CarbonNumber8Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNumber9Icon],svg[carbon-number-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 9h-4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h4v3h-5v2h5a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2m0 7h-4v-5h4Z"></svg:path>`,
})
export class CarbonNumber9Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNumberSmall0Icon],svg[carbon-number-small-0-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 21h-2a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2m-2-8v6h2v-6Z"></svg:path>`,
})
export class CarbonNumberSmall0Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNumberSmall1Icon],svg[carbon-number-small-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 19v-8h-2v1h-2v2h2v5h-2v2h6v-2z"></svg:path>`,
})
export class CarbonNumberSmall1Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNumberSmall2Icon],svg[carbon-number-small-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 21h-6v-4a2 2 0 0 1 2-2h2v-2h-4v-2h4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2v2h4Z"></svg:path>`,
})
export class CarbonNumberSmall2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNumberSmall3Icon],svg[carbon-number-small-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 11h-4v2h4v2h-3v2h3v2h-4v2h4a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonNumberSmall3Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNumberSmall4Icon],svg[carbon-number-small-4-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 11v4h-2v-4h-2v6h4v4h2V11z"></svg:path>`,
})
export class CarbonNumberSmall4Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNumberSmall5Icon],svg[carbon-number-small-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 21h-4v-2h4v-2h-4v-6h6v2h-4v2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonNumberSmall5Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNumberSmall6Icon],svg[carbon-number-small-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 21h-2a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h3v2h-3v2h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2m-2-4v2h2v-2Z"></svg:path>`,
})
export class CarbonNumberSmall6Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNumberSmall7Icon],svg[carbon-number-small-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.44 21h-2L17 13h-2v1h-2v-3h6v2z"></svg:path>`,
})
export class CarbonNumberSmall7Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNumberSmall8Icon],svg[carbon-number-small-8-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 11h-2a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2m0 2v2h-2v-2Zm-2 6v-2h2v2Z"></svg:path>`,
})
export class CarbonNumberSmall8Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonNumberSmall9Icon],svg[carbon-number-small-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 21h-3v-2h3v-2h-2a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2m-2-8v2h2v-2Z"></svg:path>`,
})
export class CarbonNumberSmall9Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonObjectIcon],svg[carbon-object-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3h4v2H6v8c0 1.2-.542 2.266-1.382 3C5.458 16.734 6 17.8 6 19v8h4v2H6c-1.103 0-2-.897-2-2v-8c0-1.102-.897-2-2-2v-2c1.103 0 2-.897 2-2V5c0-1.102.897-2 2-2m22 10V5c0-1.102-.897-2-2-2h-4v2h4v8c0 1.2.543 2.266 1.382 3A3.98 3.98 0 0 0 26 19v8h-4v2h4c1.103 0 2-.897 2-2v-8c0-1.102.897-2 2-2v-2c-1.103 0-2-.897-2-2"></svg:path>`,
})
export class CarbonObjectIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonObjectStorageIcon],svg[carbon-object-storage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 20h-2v2h2v6H4v-6h10v-2H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2"></svg:path><svg:circle cx="7" cy="25" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M30 8h-8v6h-6v8h8v-6h6zm-8 12h-4v-4h4zm6-6h-4v-4h4zm-10-4h-8V2h8zm-6-2h4V4h-4z"></svg:path>`,
})
export class CarbonObjectStorageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonObjectStorageAltIcon],svg[carbon-object-storage-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 20h-2v2h2v6H4v-6h10v-2H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2"></svg:path><svg:circle cx="7" cy="25" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M21 14a2.98 2.98 0 0 0-2.037.811l-4.004-2.402A3 3 0 0 0 15 12a3 3 0 0 0-.041-.409l4.004-2.402A2.99 2.99 0 1 0 18 7a3 3 0 0 0 .042.41l-4.004 2.402a3 3 0 1 0 0 4.377l4.003 2.402A3 3 0 0 0 18 17a3 3 0 1 0 3-3m0-8a1 1 0 1 1-1 1a1 1 0 0 1 1-1m-9 7a1 1 0 1 1 1-1a1 1 0 0 1-1 1m9 5a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class CarbonObjectStorageAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonObservedHailIcon],svg[carbon-observed-hail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18A12 12 0 1 0 16 6h-4V1L6 7l6 6V8h4A10 10 0 1 1 6 18Z"></svg:path><svg:circle cx="13.5" cy="23.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="10.5" cy="19.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="16.5" cy="19.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12 16.586L15.586 13L17 14.413L13.413 18zm6 0L21.586 13L23 14.413L19.413 18z"></svg:path>`,
})
export class CarbonObservedHailIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonObservedLightningIcon],svg[carbon-observed-lightning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.67 24l-1.736-1l2.287-4h-3.889l3.993-7l1.737 1l-2.284 4h3.89z"></svg:path><svg:path fill="currentColor" d="M4 18A12 12 0 1 0 16 6h-4V1L6 7l6 6V8h4A10 10 0 1 1 6 18Z"></svg:path>`,
})
export class CarbonObservedLightningIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonOmegaIcon],svg[carbon-omega-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.737 25A14.3 14.3 0 0 0 27 15c0-6.58-4.42-11-11-11S5 8.42 5 15a14.3 14.3 0 0 0 4.263 10H4v2h8v-2.238A12.57 12.57 0 0 1 7 15c0-5.467 3.533-9 9-9s9 3.533 9 9a12.57 12.57 0 0 1-5 9.762V27h8v-2Z"></svg:path>`,
})
export class CarbonOmegaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonOpacityIcon],svg[carbon-opacity-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6h4v4H6zm4 4h4v4h-4zm4-4h4v4h-4zm8 0h4v4h-4zM6 14h4v4H6zm8 0h4v4h-4zm8 0h4v4h-4zM6 22h4v4H6zm8 0h4v4h-4zm8 0h4v4h-4zm-4-12h4v4h-4zm-8 8h4v4h-4zm8 0h4v4h-4z"></svg:path>`,
})
export class CarbonOpacityIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonOpenPanelBottomIcon],svg[carbon-open-panel-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 2v12H4V6ZM4 26v-6h24v6Z"></svg:path>`,
})
export class CarbonOpenPanelBottomIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonOpenPanelFilledBottomIcon],svg[carbon-open-panel-filled-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 2v12H4V6Z"></svg:path>`,
})
export class CarbonOpenPanelFilledBottomIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonOpenPanelFilledLeftIcon],svg[carbon-open-panel-filled-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 22H12V6h16Z"></svg:path>`,
})
export class CarbonOpenPanelFilledLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonOpenPanelFilledRightIcon],svg[carbon-open-panel-filled-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M4 6h16v20H4Z"></svg:path>`,
})
export class CarbonOpenPanelFilledRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonOpenPanelFilledTopIcon],svg[carbon-open-panel-filled-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M4 26V14h24v12Z"></svg:path>`,
})
export class CarbonOpenPanelFilledTopIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonOpenPanelLeftIcon],svg[carbon-open-panel-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M4 6h6v20H4Zm24 20H12V6h16Z"></svg:path>`,
})
export class CarbonOpenPanelLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonOpenPanelRightIcon],svg[carbon-open-panel-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M4 6h16v20H4Zm24 20h-6V6h6Z"></svg:path>`,
})
export class CarbonOpenPanelRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonOpenPanelTopIcon],svg[carbon-open-panel-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 4H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 2v6H4V6ZM4 26V14h24v12Z"></svg:path>`,
})
export class CarbonOpenPanelTopIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonOperationIcon],svg[carbon-operation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M23 26h-2l5-10l-5-10h2l5 10l-5 10z" fill="currentColor"></svg:path><svg:path d="M4 6h2v20H4z" fill="currentColor"></svg:path><svg:path d="M16 9h-4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2zm0 12h-4V11h4z" fill="currentColor"></svg:path><svg:path d="M13 15h2v2h-2z" fill="currentColor"></svg:path>`,
})
export class CarbonOperationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonOperationGaugeIcon],svg[carbon-operation-gauge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M30 4h-6v2h3.75L24 10v2h6v-2h-3.62L30 6V4z" fill="currentColor"></svg:path><svg:path d="M20 17.62L22.08 14l-1.73-1l-2.18 3.76A12 12 0 0 0 2 28h2a10 10 0 0 1 13.16-9.48L14 24a2 2 0 1 0 2 2a2 2 0 0 0-.27-1L19 19.35A10 10 0 0 1 24 28h2a12 12 0 0 0-6-10.38z" fill="currentColor"></svg:path>`,
})
export class CarbonOperationGaugeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonOperationIfIcon],svg[carbon-operation-if-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M12 13h2v10h-2z" fill="currentColor"></svg:path><svg:path d="M12 9h2v2h-2z" fill="currentColor"></svg:path><svg:path d="M23 11V9h-3a2 2 0 0 0-2 2v2h-2v2h2v8h2v-8h3v-2h-3v-2z" fill="currentColor"></svg:path>`,
})
export class CarbonOperationIfIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonOperationsFieldIcon],svg[carbon-operations-field-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 12V2h2v10zm4 0V2h2v10zm4 0V2h2v10zm-12 8a3.91 3.91 0 0 1-4-4a3.91 3.91 0 0 1 4-4v-2a6 6 0 1 0 6 6h-2a3.91 3.91 0 0 1-4 4"></svg:path><svg:path fill="currentColor" d="M28.893 18.454L26.098 16l-1.318 1.504l2.792 2.452l-2.36 4.088l-3.427-1.16a9 9 0 0 1-2.714 1.565L18.36 28h-4.72l-.71-3.55a9.1 9.1 0 0 1-2.695-1.572l-3.447 1.166l-2.36-4.088l2.725-2.395a8.9 8.9 0 0 1-.007-3.128l-2.718-2.39l2.36-4.087l3.427 1.16A9 9 0 0 1 12.93 7.55L13.64 4H16V2h-2.36a2 2 0 0 0-1.961 1.608l-.504 2.519a11 11 0 0 0-1.327.753l-2.42-.819a2 2 0 0 0-2.372.895l-2.36 4.088a2 2 0 0 0 .411 2.502l1.931 1.697C5.021 15.495 5 15.745 5 16q0 .387.028.766l-1.92 1.688a2 2 0 0 0-.413 2.502l2.36 4.088a2 2 0 0 0 2.374.895l2.434-.824a11 11 0 0 0 1.312.759l.503 2.518A2 2 0 0 0 13.64 30h4.72a2 2 0 0 0 1.961-1.608l.504-2.519a11 11 0 0 0 1.327-.753l2.419.818a2 2 0 0 0 2.373-.894l2.36-4.088a2 2 0 0 0-.411-2.502"></svg:path>`,
})
export class CarbonOperationsFieldIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonOperationsRecordIcon],svg[carbon-operations-record-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 20h10v2H20zm0 4h10v2H20zm0 4h10v2H20zm-4-8a3.91 3.91 0 0 1-4-4a3.91 3.91 0 0 1 4-4a3.91 3.91 0 0 1 4 4h2a6 6 0 1 0-6 6z"></svg:path><svg:path fill="currentColor" d="m29.305 11.044l-2.36-4.088a2 2 0 0 0-2.374-.895l-2.434.824a11 11 0 0 0-1.312-.758l-.504-2.52A2 2 0 0 0 18.36 2h-4.72a2 2 0 0 0-1.961 1.608l-.504 2.519a11 11 0 0 0-1.327.753l-2.42-.819a2 2 0 0 0-2.372.895l-2.36 4.088a2 2 0 0 0 .411 2.502l1.931 1.697C5.021 15.495 5 15.745 5 16q0 .387.028.766l-1.92 1.688a2 2 0 0 0-.413 2.502l2.36 4.088a2 2 0 0 0 2.374.895l2.434-.824a11 11 0 0 0 1.312.759l.503 2.518A2 2 0 0 0 13.64 30H16v-2h-2.36l-.71-3.55a9.1 9.1 0 0 1-2.695-1.572l-3.447 1.166l-2.36-4.088l2.725-2.395a8.9 8.9 0 0 1-.007-3.128l-2.718-2.39l2.36-4.087l3.427 1.16A9 9 0 0 1 12.93 7.55L13.64 4h4.72l.71 3.55a9.1 9.1 0 0 1 2.695 1.572l3.447-1.166l2.36 4.088l-2.798 2.452L26.092 16l2.8-2.454a2 2 0 0 0 .413-2.502"></svg:path>`,
})
export class CarbonOperationsRecordIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonOrderDetailsIcon],svg[carbon-order-details-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 21h-6a3 3 0 0 0-3 3v2h2v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h2v-2a3 3 0 0 0-3-3m-3-1a4 4 0 1 0-4-4a4 4 0 0 0 4 4m0-6a2 2 0 1 1-2 2a2 2 0 0 1 2-2"></svg:path><svg:path fill="currentColor" d="M25 5h-3V4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v1H7a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M12 4h8v4h-8Zm13 24H7V7h3v3h12V7h3Z"></svg:path>`,
})
export class CarbonOrderDetailsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonOrdinalIcon],svg[carbon-ordinal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 26V4h-8v6h-6v6H6v10H2v2h28v-2ZM8 26v-8h4v8Zm6 0V12h4v14Zm6 0V6h4v20Z"></svg:path>`,
})
export class CarbonOrdinalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonOutageIcon],svg[carbon-outage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 24h9v2h-9zm1 4h6v2h-6z"></svg:path><svg:path fill="currentColor" d="m8.783 18.975l1.418-1.418A6.92 6.92 0 0 1 8 12a7.99 7.99 0 0 1 13.527-5.77l1.414-1.413A9.988 9.988 0 0 0 6 12a8.94 8.94 0 0 0 2.783 6.975M30 3.415L28.586 2L2 28.586L3.414 30L23.661 9.753A7.7 7.7 0 0 1 24 12a7.2 7.2 0 0 1-2.822 6.143C20.107 19.135 19 20.16 19 22h2c0-.92.526-1.45 1.535-2.386A9.2 9.2 0 0 0 26 12a9.9 9.9 0 0 0-.776-3.81z"></svg:path>`,
})
export class CarbonOutageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonOutlookSevereIcon],svg[carbon-outlook-severe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M15.125 19h1.75v5.5h-1.75ZM17 27a1 1 0 1 0-1 1a1 1 0 0 0 1-1"></svg:path><svg:path fill="currentColor" d="m24.908 28.94l-8.076-14.452a.953.953 0 0 0-1.664 0L7.092 28.94A.712.712 0 0 0 7.713 30h16.574a.712.712 0 0 0 .621-1.06M15.125 19h1.75v5.5h-1.75ZM16 28a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path><svg:path fill="currentColor" d="M24.8 9.136a8.994 8.994 0 0 0-17.6 0a6.493 6.493 0 0 0 .915 12.845L9.222 20H8.5a4.48 4.48 0 0 1-3.37-7.456l5.298 5.297l1.013-1.814l-4.66-4.66a4.4 4.4 0 0 1 1.363-.348l.816-.064l.099-.812q.037-.291.097-.573l3.78 3.78l1.014-1.814l-4.014-4.014a7 7 0 0 1 1.975-2.197L25.886 19.3a4.46 4.46 0 0 1-2.386.7h-.724l1.107 1.98a6.493 6.493 0 0 0 .918-12.844Zm2.5 8.75L13.782 4.368a6.974 6.974 0 0 1 9.16 5.775l.099.812l.815.064A4.517 4.517 0 0 1 28 15.5a4.46 4.46 0 0 1-.7 2.386"></svg:path>`,
})
export class CarbonOutlookSevereIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonOverflowMenuHorizontalIcon],svg[carbon-overflow-menu-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="8" cy="16" r="2" fill="currentColor"></svg:circle><svg:circle cx="16" cy="16" r="2" fill="currentColor"></svg:circle><svg:circle cx="24" cy="16" r="2" fill="currentColor"></svg:circle>`,
})
export class CarbonOverflowMenuHorizontalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonOverflowMenuVerticalIcon],svg[carbon-overflow-menu-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16" cy="8" r="2" fill="currentColor"></svg:circle><svg:circle cx="16" cy="16" r="2" fill="currentColor"></svg:circle><svg:circle cx="16" cy="24" r="2" fill="currentColor"></svg:circle>`,
})
export class CarbonOverflowMenuVerticalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonOverlayIcon],svg[carbon-overlay-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 8h-4V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h4v4a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2M4 22V4h18v4H10a2 2 0 0 0-2 2v12Zm18 0h-2.586L10 12.586V10h2.586L22 19.416Zm-12-6.586L16.586 22H10Zm12.001 1.173L15.414 10H22ZM10 28v-4h12a2 2 0 0 0 2-2V10h4v18Z"></svg:path>`,
})
export class CarbonOverlayIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPackageIcon],svg[carbon-package-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 30H6a2 2 0 0 1-2-2V16a2 2 0 0 1 2-2h3v2H6v12h20V16h-3v-2h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2"></svg:path><svg:path fill="currentColor" d="M13 20h6v2h-6zm7.59-11.41L17 12.17V2h-2v10.17l-3.59-3.58L10 10l6 6l6-6z"></svg:path>`,
})
export class CarbonPackageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPackageNodeIcon],svg[carbon-package-node-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 28H4c-1.103 0-2-.897-2-2V6c0-1.103.897-2 2-2h10c1.103 0 2 .897 2 2v4h12c1.103 0 2 .897 2 2v14c0 1.103-.897 2-2 2M4 12v14h24V12zm0-2h10V6H4z"></svg:path>`,
})
export class CarbonPackageNodeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPackageTextAnalysisIcon],svg[carbon-package-text-analysis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 22h6v2h-6z"></svg:path><svg:path fill="currentColor" d="M2 18v2h2v8c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2v-8h2v-2zm24 10H6v-8h20zm3-12h-5c-1.102 0-2-.897-2-2V8c0-1.103.898-2 2-2h5v2h-5v6h5zM18 6h-4V2h-2v14h6c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2m-4 8V8h4v6zM8 6H3v2h5v2H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h6V8c0-1.103-.897-2-2-2m0 8H4v-2h4z"></svg:path>`,
})
export class CarbonPackageTextAnalysisIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPageBreakIcon],svg[carbon-page-break-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 18h4v2H2zm24 0h4v2h-4zm-2 4v6H8v-6H6v6a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2v-6zM8 16V4h8v6a2.006 2.006 0 0 0 2 2h6v4h2v-6a.91.91 0 0 0-.3-.7l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v12zM18 4.4l5.6 5.6H18zM10 18h4v2h-4zm8 0h4v2h-4z"></svg:path>`,
})
export class CarbonPageBreakIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPageFirstIcon],svg[carbon-page-first-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 16L24 6l1.4 1.4l-8.6 8.6l8.6 8.6L24 26zM8 4h2v24H8z"></svg:path>`,
})
export class CarbonPageFirstIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPageLastIcon],svg[carbon-page-last-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 16L8 26l-1.4-1.4l8.6-8.6l-8.6-8.6L8 6zm4-12h2v24h-2z"></svg:path>`,
})
export class CarbonPageLastIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPageNumberIcon],svg[carbon-page-number-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 26h-6v-6h4v-2h-4v-2h6v6h-4v2h4z"></svg:path><svg:path fill="currentColor" d="m25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h16a2.006 2.006 0 0 0 2-2V10a.9.9 0 0 0-.3-.7M18 4.4l5.6 5.6H18ZM24 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6Z"></svg:path>`,
})
export class CarbonPageNumberIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPageScrollIcon],svg[carbon-page-scroll-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M16 28H4a1.89 1.89 0 0 1-2-2V14a1.89 1.89 0 0 1 2-2h12a1.89 1.89 0 0 1 2 2v12a1.89 1.89 0 0 1-2 2zM4 14v12h12V14z" fill="currentColor"></svg:path><svg:path d="M22 19h-2v-9H10V8h10a1.89 1.89 0 0 1 2 2z" fill="currentColor"></svg:path><svg:path d="M26 14h-2V6h-8V4h8a1.89 1.89 0 0 1 2 2z" fill="currentColor"></svg:path><svg:path d="M24 17v2h2.8L22 24.4V22h-2v6h6v-2h-2.8l4.8-5.4V23h2v-6h-6z" fill="currentColor"></svg:path>`,
})
export class CarbonPageScrollIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPaintBrushIcon],svg[carbon-paint-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.83 23.17L23 17.33V13a1 1 0 0 0-.29-.71l-10-10a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0 0 1.42l10 10A1 1 0 0 0 13 23h4.34l5.83 5.84a4 4 0 0 0 5.66-5.66ZM6 10.41l2.29 2.3l1.42-1.42L7.41 9L9 7.41l4.29 4.3l1.42-1.42L10.41 6L12 4.41L18.59 11L11 18.59L4.41 12Zm21.41 17a2 2 0 0 1-2.82 0l-6.13-6.12a1.8 1.8 0 0 0-.71-.29h-4.34l-1-1L20 12.41l1 1v4.34a1 1 0 0 0 .29.7l6.12 6.14a2 2 0 0 1 0 2.82"></svg:path>`,
})
export class CarbonPaintBrushIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPaintBrushAltIcon],svg[carbon-paint-brush-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.828 3.172a4.094 4.094 0 0 0-5.656 0L4.05 22.292A6.95 6.95 0 0 0 2 27.242V30h2.756a6.95 6.95 0 0 0 4.95-2.05L28.828 8.829a4 4 0 0 0 0-5.657M10.91 18.26l2.829 2.829l-2.122 2.121l-2.828-2.828Zm-2.619 8.276A4.97 4.97 0 0 1 4.756 28H4v-.759a4.97 4.97 0 0 1 1.464-3.535l1.91-1.91l2.829 2.828ZM27.415 7.414l-12.261 12.26l-2.829-2.828l12.262-12.26a2.047 2.047 0 0 1 2.828 0a2 2 0 0 1 0 2.828"></svg:path>`,
})
export class CarbonPaintBrushAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPalmTreeIcon],svg[carbon-palm-tree-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.57 28C17.897 26.725 16 22.226 16 12v-.131l1.117.744A6.46 6.46 0 0 1 20 18h2a8.46 8.46 0 0 0-3.773-7.05L16.803 10h1.53a7.04 7.04 0 0 1 4.2 1.4l1.867 1.4l1.2-1.6l-1.867-1.4a9.06 9.06 0 0 0-5.4-1.8h-1.216A7.03 7.03 0 0 1 22 6h2V4h-2a9.04 9.04 0 0 0-7 3.364A9.04 9.04 0 0 0 8 4H6v2h2a7.03 7.03 0 0 1 4.883 2h-1.216a9.06 9.06 0 0 0-5.4 1.8L4.4 11.2l1.2 1.6l1.867-1.4a7.04 7.04 0 0 1 4.2-1.4h1.53l-1.423.95A8.46 8.46 0 0 0 8 18h2a6.46 6.46 0 0 1 2.883-5.387L14 11.87V12c0 8.944 1.412 13.765 2.361 16H2v2h28v-2Z"></svg:path>`,
})
export class CarbonPalmTreeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPanHorizontalIcon],svg[carbon-pan-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24 10l-1.414 1.414L26.172 15H5.828l3.586-3.586L8 10l-6 6l6 6l1.414-1.414L5.828 17h20.344l-3.586 3.586L24 22l6-6z"></svg:path>`,
})
export class CarbonPanHorizontalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPanVerticalIcon],svg[carbon-pan-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 8l1.414 1.414L15 5.828v20.344l-3.586-3.586L10 24l6 6l6-6l-1.414-1.414L17 26.172V5.828l3.586 3.586L22 8l-6-6z"></svg:path>`,
})
export class CarbonPanVerticalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPanelExpansionIcon],svg[carbon-panel-expansion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-6 8V8h6v6zm20-8h-6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m-6 18V8h6v16z"></svg:path>`,
})
export class CarbonPanelExpansionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonParagraphIcon],svg[carbon-paragraph-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 4H13a7 7 0 0 0 0 14v10h2V6h5v22h2V6h5ZM13 16a5 5 0 0 1 0-10Z"></svg:path>`,
})
export class CarbonParagraphIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonParameterIcon],svg[carbon-parameter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 13V8a2 2 0 0 0-2-2h-3v2h3v5a3.98 3.98 0 0 0 1.382 3A3.98 3.98 0 0 0 26 19v5h-3v2h3a2 2 0 0 0 2-2v-5a2 2 0 0 1 2-2v-2a2 2 0 0 1-2-2"></svg:path><svg:path fill="currentColor" fill-rule="evenodd" d="m17 9l-.857 3h2L19 9h2l-.857 3H22v2h-2.428l-1.143 4H21v2h-3.143L17 23h-2l.857-3h-2L13 23h-2l.857-3H10v-2h2.429l1.143-4H11v-2h3.143L15 9Zm.572 5h-2l-1.143 4h2Z"></svg:path><svg:path fill="currentColor" d="M6 13V8h3V6H6a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2v2a2 2 0 0 1 2 2v5a2 2 0 0 0 2 2h3v-2H6v-5a3.98 3.98 0 0 0-1.382-3A3.98 3.98 0 0 0 6 13"></svg:path>`,
})
export class CarbonParameterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonParentChildIcon],svg[carbon-parent-child-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h11v4H9a2 2 0 0 0-2 2v4H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2H9v-4h14v4h-3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-3v-4a2 2 0 0 0-2-2h-6v-4ZM12 28H4v-4h8Zm16 0h-8v-4h8ZM4 4h24v6H4Z"></svg:path>`,
})
export class CarbonParentChildIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPartDefinitionIcon],svg[carbon-part-definition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.834 16.808c-2.441 0-3.834.911-3.834 2.75c0 1.6 1.032 2.648 2.854 2.648c1.34 0 2.321-.601 2.613-1.753h.103c.137.928.722 1.547 1.668 1.547h1.22v-1.753h-.894v-4.23c0-2.046-1.289-3.198-3.713-3.198c-1.805 0-2.854.688-3.507 1.72l1.307 1.169c.43-.62 1.014-1.135 2.045-1.135c1.17 0 1.668.585 1.668 1.582v.653zm1.53 2.51c0 .843-.79 1.29-1.77 1.29c-.86 0-1.36-.361-1.36-1.084v-.292c0-.705.569-1.1 1.72-1.1h1.41zM9.272 17.427h3.129c2.218 0 3.559-1.478 3.559-3.713c0-2.218-1.341-3.714-3.56-3.714H7.004v12h2.269zm0-5.45h2.923c.876 0 1.41.464 1.41 1.341v.791c0 .877-.534 1.358-1.41 1.358H9.272z"></svg:path><svg:path fill="currentColor" d="M2 4v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2m26 24H4V4h24z"></svg:path>`,
})
export class CarbonPartDefinitionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPartUsageIcon],svg[carbon-part-usage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.834 16.808c-2.441 0-3.834.911-3.834 2.75c0 1.6 1.032 2.648 2.854 2.648c1.34 0 2.321-.601 2.613-1.753h.103c.137.928.722 1.547 1.668 1.547h1.22v-1.753h-.894v-4.23c0-2.046-1.289-3.198-3.713-3.198c-1.805 0-2.854.688-3.507 1.72l1.307 1.169c.43-.62 1.014-1.135 2.045-1.135c1.17 0 1.668.585 1.668 1.582v.653zm1.53 2.51c0 .843-.79 1.29-1.77 1.29c-.86 0-1.36-.361-1.36-1.084v-.292c0-.705.569-1.1 1.72-1.1h1.41zM9.272 17.427h3.129c2.218 0 3.559-1.478 3.559-3.713c0-2.218-1.341-3.714-3.56-3.714H7.004v12h2.269zm0-5.45h2.923c.876 0 1.41.464 1.41 1.341v.791c0 .877-.534 1.358-1.41 1.358H9.272z"></svg:path><svg:path fill="currentColor" d="M21 30H11c-4.963 0-9-4.037-9-9V11c0-4.963 4.037-9 9-9h10c4.963 0 9 4.037 9 9v10c0 4.963-4.037 9-9 9M11 4c-3.86 0-7 3.14-7 7v10c0 3.86 3.14 7 7 7h10c3.86 0 7-3.14 7-7V11c0-3.86-3.14-7-7-7z"></svg:path>`,
})
export class CarbonPartUsageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPartitionAutoIcon],svg[carbon-partition-auto-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 19c-2.206 0-4 1.794-4 4c0 .684.188 1.317.492 1.88A11 11 0 0 1 16 27C9.935 27 5 22.065 5 16H3c0 7.168 5.832 13 13 13a12.98 12.98 0 0 0 7.843-2.642A3.97 3.97 0 0 0 26 27c2.206 0 4-1.794 4-4s-1.794-4-4-4m0 6c-1.103 0-2-.897-2-2s.897-2 2-2s2 .898 2 2s-.897 2-2 2M16 3a12.98 12.98 0 0 0-7.843 2.642A3.97 3.97 0 0 0 6 5C3.794 5 2 6.794 2 9s1.794 4 4 4s4-1.794 4-4c0-.684-.188-1.317-.492-1.88A11 11 0 0 1 16 5c6.065 0 11 4.935 11 11h2c0-7.168-5.832-13-13-13M6 11c-1.103 0-2-.897-2-2s.897-2 2-2s2 .898 2 2s-.897 2-2 2"></svg:path>`,
})
export class CarbonPartitionAutoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPartitionCollectionIcon],svg[carbon-partition-collection-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 12c-1.858 0-3.41 1.28-3.858 3h-2.728c-.534 0-1.036.208-1.414.586L12.586 21H2v2h10.586c.534 0 1.036-.208 1.414-.586L19.414 17h2.728c.447 1.72 2 3 3.858 3c2.206 0 4-1.794 4-4s-1.794-4-4-4m0 6c-1.103 0-2-.897-2-2s.897-2 2-2s2 .898 2 2s-.897 2-2 2m-9.828-3.414L12.586 11H2V9h10.586c.534 0 1.036.208 1.414.586l3.586 3.586z"></svg:path>`,
})
export class CarbonPartitionCollectionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPartitionRepartitionIcon],svg[carbon-partition-repartition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 6c-1.858 0-3.41 1.28-3.858 3h-2.728c-.534 0-1.036.208-1.414.586l-3.586 3.586l1.414 1.414L19.414 11h2.728c.447 1.72 2 3 3.858 3c2.206 0 4-1.794 4-4s-1.794-4-4-4m0 6c-1.103 0-2-.897-2-2s.897-2 2-2s2 .898 2 2s-.897 2-2 2m-15.828 5.414L6.586 21H2v2h4.586c.534 0 1.036-.208 1.414-.586l3.586-3.586z"></svg:path><svg:path fill="currentColor" d="M26 18c-1.858 0-3.41 1.28-3.858 3h-2.728L8 9.586A2 2 0 0 0 6.586 9H2v2h4.586L18 22.414c.378.378.88.586 1.414.586h2.728c.447 1.72 2 3 3.858 3c2.206 0 4-1.794 4-4s-1.794-4-4-4m0 6c-1.103 0-2-.897-2-2s.897-2 2-2s2 .898 2 2s-.897 2-2 2"></svg:path>`,
})
export class CarbonPartitionRepartitionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPartitionSameIcon],svg[carbon-partition-same-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 18c-1.858 0-3.41 1.28-3.858 3H2v2h20.142c.447 1.72 2 3 3.858 3c2.206 0 4-1.794 4-4s-1.794-4-4-4m0 6c-1.103 0-2-.897-2-2s.897-2 2-2s2 .898 2 2s-.897 2-2 2m0-18c-1.858 0-3.41 1.28-3.858 3H2v2h20.142c.447 1.72 2 3 3.858 3c2.206 0 4-1.794 4-4s-1.794-4-4-4m0 6c-1.103 0-2-.897-2-2s.897-2 2-2s2 .898 2 2s-.897 2-2 2"></svg:path>`,
})
export class CarbonPartitionSameIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPartitionSpecificIcon],svg[carbon-partition-specific-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 18c-1.858 0-3.41 1.28-3.858 3h-2.728L14 15.586A2 2 0 0 0 12.586 15H2v2h10.586L18 22.414c.378.378.88.586 1.414.586h2.728c.447 1.72 2 3 3.858 3c2.206 0 4-1.794 4-4s-1.794-4-4-4m0 6c-1.103 0-2-.897-2-2s.897-2 2-2s2 .898 2 2s-.897 2-2 2m0-18c-1.858 0-3.41 1.28-3.858 3h-2.728c-.534 0-1.036.208-1.414.586l-3.586 3.586l1.414 1.414L19.414 11h2.728c.447 1.72 2 3 3.858 3c2.206 0 4-1.794 4-4s-1.794-4-4-4m0 6c-1.103 0-2-.897-2-2s.897-2 2-2s2 .898 2 2s-.897 2-2 2"></svg:path>`,
})
export class CarbonPartitionSpecificIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPartlyCloudyIcon],svg[carbon-partly-cloudy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 15h4v2h-4zm-4-7.413l3-3L27.415 6l-3 3zM15 1h2v4h-2zM4.586 26l3-3l1.415 1.415l-3 3zM4.585 6L6 4.587l3 3l-1.414 1.415z"></svg:path><svg:path fill="currentColor" d="M1 15h4v2H1zm25.794 5.342a6.96 6.96 0 0 0-1.868-3.267A9 9 0 0 0 25 16a9 9 0 1 0-14.585 7.033A4.977 4.977 0 0 0 15 30h10a4.995 4.995 0 0 0 1.794-9.658M9 16a6.996 6.996 0 0 1 13.985-.297A6.9 6.9 0 0 0 20 15a7.04 7.04 0 0 0-6.794 5.342a5 5 0 0 0-1.644 1.048A6.97 6.97 0 0 1 9 16m16 12H15a2.995 2.995 0 0 1-.696-5.908l.658-.157l.099-.67a4.992 4.992 0 0 1 9.878 0l.099.67l.658.156A2.995 2.995 0 0 1 25 28"></svg:path>`,
})
export class CarbonPartlyCloudyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPartlyCloudyNightIcon],svg[carbon-partly-cloudy-night-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 19a4.97 4.97 0 0 0-3.206-4.658A6.971 6.971 0 0 0 13.758 12.9a13.14 13.14 0 0 1 .131-8.52A1.015 1.015 0 0 0 12.98 3a1 1 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.04 13.04 0 0 0 10.29-5.038A4.99 4.99 0 0 0 30 19m-15.297 7.998a11.095 11.095 0 0 1-3.2-21.584a15.2 15.2 0 0 0 .844 9.367A4.988 4.988 0 0 0 15 24h7.677a11.1 11.1 0 0 1-7.556 2.998c-.138 0-.278.004-.418 0M25 22H15a2.995 2.995 0 0 1-.696-5.908l.658-.157l.099-.67a4.992 4.992 0 0 1 9.878 0l.099.67l.658.157A2.995 2.995 0 0 1 25 22"></svg:path>`,
})
export class CarbonPartlyCloudyNightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPartnershipIcon],svg[carbon-partnership-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 9a4 4 0 1 1 4-4a4 4 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2m16 6a4 4 0 1 1 4-4a4 4 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2m2 27h-4a2 2 0 0 1-2-2v-7h2v7h4v-9h2v-6a1 1 0 0 0-1-1h-6.42L16 20l-4.58-8H5a1 1 0 0 0-1 1v6h2v9h4v-7h2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a2 2 0 0 1-2-2v-6a3 3 0 0 1 3-3h7.58L16 16l3.42-6H27a3 3 0 0 1 3 3v6a2 2 0 0 1-2 2v7a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonPartnershipIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPassengerDrinksIcon],svg[carbon-passenger-drinks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 4V2h-8v2a3.99 3.99 0 0 0 3 3.859V11h-2v2h6v-2h-2V7.859A3.99 3.99 0 0 0 30 4M10.5 9A3.5 3.5 0 1 1 14 5.5A3.504 3.504 0 0 1 10.5 9m0-5A1.5 1.5 0 1 0 12 5.5A1.5 1.5 0 0 0 10.5 4m11.975 27.313L19.34 24h-7.102a4.01 4.01 0 0 1-3.866-2.97l-1.634-6.127a3.899 3.899 0 0 1 7.534-2.009l.83 3.106H21v2h-7.435l-1.223-4.59a1.9 1.9 0 0 0-3.671.978l1.634 6.126A2.005 2.005 0 0 0 12.239 22h8.42l3.655 8.525z"></svg:path><svg:path fill="currentColor" d="M18 28H7.768a2 2 0 0 1-1.932-1.485L2.034 12.258l1.932-.516L7.768 26H18Z"></svg:path>`,
})
export class CarbonPassengerDrinksIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPassengerPlusIcon],svg[carbon-passenger-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 9A3.5 3.5 0 1 1 14 5.5A3.504 3.504 0 0 1 10.5 9m0-5A1.5 1.5 0 1 0 12 5.5A1.5 1.5 0 0 0 10.5 4m11.974 27.313L19.34 24h-7.101a4.01 4.01 0 0 1-3.867-2.97l-1.634-6.127a3.899 3.899 0 0 1 7.535-2.009L15.1 16H21v2h-7.436l-1.223-4.59a1.9 1.9 0 0 0-3.67.978l1.633 6.126A2.005 2.005 0 0 0 12.239 22h8.42l3.654 8.525zM30 6h-4V2h-2v4h-4v2h4v4h2V8h4z"></svg:path><svg:path fill="currentColor" d="M18 28H7.768a2 2 0 0 1-1.933-1.485L2.033 12.258l1.933-.516L7.768 26H18Z"></svg:path>`,
})
export class CarbonPassengerPlusIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPasswordIcon],svg[carbon-password-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 2a8.998 8.998 0 0 0-8.612 11.612L2 24v6h6l10.388-10.388A9 9 0 1 0 21 2m0 16a7 7 0 0 1-2.032-.302l-1.147-.348l-.847.847l-3.181 3.181L12.414 20L11 21.414l1.379 1.379l-1.586 1.586L9.414 23L8 24.414l1.379 1.379L7.172 28H4v-3.172l9.802-9.802l.848-.847l-.348-1.147A7 7 0 1 1 21 18"></svg:path><svg:circle cx="22" cy="10" r="2" fill="currentColor"></svg:circle>`,
})
export class CarbonPasswordIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPasteIcon],svg[carbon-paste-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 20h-8.17l2.58-2.59L19 16l-5 5l5 5l1.41-1.41L17.83 22H26v8h2v-8a2 2 0 0 0-2-2"></svg:path><svg:path fill="currentColor" d="m23.71 9.29l-7-7A1 1 0 0 0 16 2H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h8v-2H6V4h8v6a2 2 0 0 0 2 2h6v2h2v-4a1 1 0 0 0-.29-.71M16 4.41L21.59 10H16Z"></svg:path>`,
})
export class CarbonPasteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPauseIcon],svg[carbon-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 8v16H8V8zm0-2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m12 2v16h-4V8zm0-2h-4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonPauseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPauseFilledIcon],svg[carbon-pause-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m10 0h-2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonPauseFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPauseFutureIcon],svg[carbon-pause-future-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 11h-2v11h2zm6 0h-2v11h2z"></svg:path><svg:path fill="currentColor" d="M16 2a13.92 13.92 0 0 1 10 4.234V2h2v8h-8V8h4.922A11.982 11.982 0 1 0 28 16h2A14 14 0 1 1 16 2"></svg:path>`,
})
export class CarbonPauseFutureIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPauseOutlineIcon],svg[carbon-pause-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 10h-2v12h2zm6 0h-2v12h2z"></svg:path><svg:path fill="currentColor" d="M16 4A12 12 0 1 1 4 16A12 12 0 0 1 16 4m0-2a14 14 0 1 0 14 14A14 14 0 0 0 16 2"></svg:path>`,
})
export class CarbonPauseOutlineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPauseOutlineFilledIcon],svg[carbon-pause-outline-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m-2 20h-2V10h2Zm6 0h-2V10h2Z"></svg:path>`,
})
export class CarbonPauseOutlineFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPausePastIcon],svg[carbon-pause-past-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 11h-2v11h2zm6 0h-2v11h2z"></svg:path><svg:path fill="currentColor" d="M16 2A13.92 13.92 0 0 0 6 6.234V2H4v8h8V8H7.078A11.982 11.982 0 1 1 4 16H2A14 14 0 1 0 16 2"></svg:path>`,
})
export class CarbonPausePastIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPcnENodeIcon],svg[carbon-pcn-e-node-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 11V9h-8v14h8v-2h-6v-4h5v-2h-5v-4z"></svg:path><svg:path fill="currentColor" d="M30.414 17.414a2 2 0 0 0 0-2.828l-5.787-5.787l2.9-2.862a2.002 2.002 0 1 0-1.44-1.388l-2.874 2.836l-5.799-5.8a2 2 0 0 0-2.828 0L8.799 7.374L5.937 4.472A2.002 2.002 0 1 0 4.55 5.914l2.835 2.873l-5.8 5.799a2 2 0 0 0 0 2.828l5.8 5.799l-2.835 2.873a1.998 1.998 0 1 0 1.387 1.442l2.862-2.9l5.787 5.786a2 2 0 0 0 2.828 0l5.8-5.799l2.872 2.836a1.998 1.998 0 1 0 1.442-1.387l-2.9-2.863ZM16 29L3 16L16 3l13 13Z"></svg:path>`,
})
export class CarbonPcnENodeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPcnMilitaryIcon],svg[carbon-pcn-military-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 16l-1.593 3l-3.407.414l2.5 2.253L13 25l3-1.875L19 25l-.5-3.333l2.5-2.253L17.5 19z"></svg:path><svg:path fill="currentColor" d="M12.414 17.414L16 13.834l3.588 3.582L21 16l-5-5l-5 5z"></svg:path><svg:path fill="currentColor" d="M12.414 12.414L16 8.834l3.588 3.582L21 11l-5-5l-5 5z"></svg:path><svg:path fill="currentColor" d="M30.414 17.414a2 2 0 0 0 0-2.828l-5.787-5.787l2.9-2.862a2.002 2.002 0 1 0-1.44-1.388l-2.874 2.836l-5.799-5.8a2 2 0 0 0-2.828 0L8.799 7.374L5.937 4.472A2.002 2.002 0 1 0 4.55 5.914l2.835 2.873l-5.8 5.799a2 2 0 0 0 0 2.828l5.8 5.799l-2.835 2.873a1.998 1.998 0 1 0 1.387 1.442l2.862-2.9l5.787 5.786a2 2 0 0 0 2.828 0l5.8-5.799l2.872 2.836a1.998 1.998 0 1 0 1.442-1.387l-2.9-2.863ZM16 29L3 16L16 3l13 13Z"></svg:path>`,
})
export class CarbonPcnMilitaryIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPcnPNodeIcon],svg[carbon-pcn-p-node-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 23h-2V9h6a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-4Zm0-7h4v-5.001h-4Z"></svg:path><svg:path fill="currentColor" d="M30.414 17.414a2 2 0 0 0 0-2.828l-5.787-5.787l2.9-2.862a2.002 2.002 0 1 0-1.44-1.388l-2.874 2.836l-5.799-5.8a2 2 0 0 0-2.828 0L8.799 7.374L5.937 4.472A2.002 2.002 0 1 0 4.55 5.914l2.835 2.873l-5.8 5.799a2 2 0 0 0 0 2.828l5.8 5.799l-2.835 2.873a1.998 1.998 0 1 0 1.387 1.442l2.862-2.9l5.787 5.786a2 2 0 0 0 2.828 0l5.8-5.799l2.872 2.836a1.998 1.998 0 1 0 1.442-1.387l-2.9-2.863ZM16 29L3 16L16 3l13 13Z"></svg:path>`,
})
export class CarbonPcnPNodeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPcnZNodeIcon],svg[carbon-pcn-z-node-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 9h-8v2h6l-6 10v2h8v-2h-6l6-10z"></svg:path><svg:path fill="currentColor" d="M30.414 17.414a2 2 0 0 0 0-2.828l-5.787-5.787l2.9-2.862a2.002 2.002 0 1 0-1.44-1.388l-2.874 2.836l-5.799-5.8a2 2 0 0 0-2.828 0L8.799 7.374L5.937 4.472A2.002 2.002 0 1 0 4.55 5.914l2.835 2.873l-5.8 5.799a2 2 0 0 0 0 2.828l5.8 5.799l-2.835 2.873a1.998 1.998 0 1 0 1.387 1.442l2.862-2.9l5.787 5.786a2 2 0 0 0 2.828 0l5.8-5.799l2.872 2.836a1.998 1.998 0 1 0 1.442-1.387l-2.9-2.863ZM16 29L3 16L16 3l13 13Z"></svg:path>`,
})
export class CarbonPcnZNodeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPdfIcon],svg[carbon-pdf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 11V9h-8v14h2v-6h5v-2h-5v-4zM8 9H2v14h2v-5h4a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2m0 7H4v-5h4zm8 7h-4V9h4a4 4 0 0 1 4 4v6a4 4 0 0 1-4 4m-2-2h2a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-2z"></svg:path>`,
})
export class CarbonPdfIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPdfReferenceIcon],svg[carbon-pdf-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8zm18-4h2v-6h5V8h-5V4h6V2h-8zM16 2h-4v14h4a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4m2 10a2 2 0 0 1-2 2h-2V4h2a2 2 0 0 1 2 2zM8 2H2v14h2v-5h4a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 7H4V4h4z"></svg:path>`,
})
export class CarbonPdfReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPedestrianIcon],svg[carbon-pedestrian-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.677 14l-1.245-3.114A2.99 2.99 0 0 0 17.646 9h-4.092a3 3 0 0 0-1.544.428L7 12.434V18h2v-4.434l3-1.8v11.931l-3.462 5.194L10.202 30L14 24.303V11h3.646a.995.995 0 0 1 .928.629L20.323 16H26v-2Z"></svg:path><svg:path fill="currentColor" d="M17.051 18.316L19 24.162V30h2v-6.162l-2.051-6.154zM16.5 8A3.5 3.5 0 1 1 20 4.5A3.504 3.504 0 0 1 16.5 8m0-5A1.5 1.5 0 1 0 18 4.5A1.5 1.5 0 0 0 16.5 3"></svg:path>`,
})
export class CarbonPedestrianIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPedestrianChildIcon],svg[carbon-pedestrian-child-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 16h-8.532l-5-6H5a3.003 3.003 0 0 0-3 3v6a2 2 0 0 0 2 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-7h-2v7H6v-9H4v-6a1 1 0 0 1 1-1h6.532l5 6H26a1 1 0 0 1 1 1v3h-2v6h-3v-6h-2v6a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-4a2 2 0 0 0 2-2v-3a3.003 3.003 0 0 0-3-3"></svg:path><svg:path fill="currentColor" d="M23.5 15a3.5 3.5 0 1 1 3.5-3.5a3.504 3.504 0 0 1-3.5 3.5m0-5a1.5 1.5 0 1 0 1.5 1.5a1.5 1.5 0 0 0-1.5-1.5M8 9a4 4 0 1 1 4-4a4.004 4.004 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonPedestrianChildIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPedestrianFamilyIcon],svg[carbon-pedestrian-family-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 30h-3a2 2 0 0 1-2-2v-5h2v5h3v-5h2v-4a1 1 0 0 0-1-1h-8.72l-2-6H4a1 1 0 0 0-1 1v6h2v9h4v-7h2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1-2-2v-6a3.003 3.003 0 0 1 3-3h6.28a2 2 0 0 1 1.897 1.367L13.72 16H21a3.003 3.003 0 0 1 3 3v4a2 2 0 0 1-2 2v3a2 2 0 0 1-2 2m8 0h-2V19h3v-6a1 1 0 0 0-1-1h-4v-2h4a3.003 3.003 0 0 1 3 3v6a2 2 0 0 1-2 2h-1zM7 9a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2m18 6a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2"></svg:path><svg:path fill="currentColor" d="M18.5 15a3.5 3.5 0 1 1 3.5-3.5a3.504 3.504 0 0 1-3.5 3.5m0-5a1.5 1.5 0 1 0 1.5 1.5a1.5 1.5 0 0 0-1.5-1.5"></svg:path>`,
})
export class CarbonPedestrianFamilyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPenIcon],svg[carbon-pen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.307 6.107L30 3.414L28.586 2l-2.693 2.693L24.8 3.6a1.933 1.933 0 0 0-2.8 0l-18 18V28h6.4l18-18a1.933 1.933 0 0 0 0-2.8ZM9.6 26H6v-3.6L23.4 5L27 8.6ZM9 11.586L16.586 4L18 5.414L10.414 13z"></svg:path>`,
})
export class CarbonPenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPenFountainIcon],svg[carbon-pen-fountain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m29.707 5.293l-3-3a1 1 0 0 0-1.414 0L19.586 8h-2.491a11.01 11.01 0 0 0-10.383 7.366L2.056 28.67a1 1 0 0 0 1.275 1.274l13.303-4.656A11.01 11.01 0 0 0 24 14.905v-2.49l5.707-5.708a1 1 0 0 0 0-1.414m-7.414 6A1 1 0 0 0 22 12v2.905a9.01 9.01 0 0 1-6.027 8.495l-9.168 3.209L16 17.414L14.586 16L5.39 25.195l3.21-9.168A9.01 9.01 0 0 1 17.095 10H20a1 1 0 0 0 .707-.293L26 4.414L27.586 6Z"></svg:path>`,
})
export class CarbonPenFountainIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPendingIcon],svg[carbon-pending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="9" cy="16" r="2" fill="currentColor"></svg:circle><svg:circle cx="23" cy="16" r="2" fill="currentColor"></svg:circle><svg:circle cx="16" cy="16" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4"></svg:path>`,
})
export class CarbonPendingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPendingFilledIcon],svg[carbon-pending-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2M8 18a2 2 0 1 1 2-2a2 2 0 0 1-2 2m8 0a2 2 0 1 1 2-2a2 2 0 0 1-2 2m8 0a2 2 0 1 1 2-2a2 2 0 0 1-2 2"></svg:path><svg:path fill="none" d="M10 16a2 2 0 1 1-2-2a2 2 0 0 1 2 2m6-2a2 2 0 1 0 2 2a2 2 0 0 0-2-2m8 0a2 2 0 1 0 2 2a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonPendingFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPentagonDownOutlineIcon],svg[carbon-pentagon-down-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 27.76L4.173 19.075L8.699 5H23.3l4.526 14.076zM16 30a1 1 0 0 0 .592-.194l13-9.544a1 1 0 0 0 .36-1.112l-4.97-15.456A1 1 0 0 0 24.03 3H7.97a1 1 0 0 0-.952.694L2.048 19.15a1 1 0 0 0 .36 1.112l13 9.544c.176.13.384.194.592.194"></svg:path>`,
})
export class CarbonPentagonDownOutlineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPentagonDownSolidIcon],svg[carbon-pentagon-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 30a1 1 0 0 0 .592-.194l13-9.544a1 1 0 0 0 .36-1.112l-4.97-15.456A1 1 0 0 0 24.03 3H7.97a1 1 0 0 0-.952.694L2.048 19.15a1 1 0 0 0 .36 1.112l13 9.544c.176.13.384.194.592.194"></svg:path>`,
})
export class CarbonPentagonDownSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPentagonLeftOutlineIcon],svg[carbon-pentagon-left-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.24 16l8.684-11.827L27 8.699V23.3l-14.076 4.526zM2 16a1 1 0 0 0 .194.592l9.544 13a1 1 0 0 0 1.112.36l15.456-4.97A1 1 0 0 0 29 24.03V7.97a1 1 0 0 0-.694-.952L12.85 2.048a1 1 0 0 0-1.112.36l-9.544 13A1 1 0 0 0 2 16"></svg:path>`,
})
export class CarbonPentagonLeftOutlineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPentagonLeftSolidIcon],svg[carbon-pentagon-left-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 16a1 1 0 0 0 .194.592l9.544 13a1 1 0 0 0 1.112.36l15.456-4.97A1 1 0 0 0 29 24.03V7.97a1 1 0 0 0-.694-.952L12.85 2.048a1 1 0 0 0-1.112.36l-9.544 13A1 1 0 0 0 2 16"></svg:path>`,
})
export class CarbonPentagonLeftSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPentagonOutlineIcon],svg[carbon-pentagon-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 4.24l11.827 8.684L23.301 27H8.7L4.173 12.924zM16 2a1 1 0 0 0-.592.194l-13 9.544a1 1 0 0 0-.36 1.112l4.97 15.456A1 1 0 0 0 7.97 29h16.06a1 1 0 0 0 .952-.694l4.97-15.456a1 1 0 0 0-.36-1.112l-13-9.544A1 1 0 0 0 16 2"></svg:path>`,
})
export class CarbonPentagonOutlineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPentagonRightOutlineIcon],svg[carbon-pentagon-right-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m27.76 16l-8.684 11.827L5 23.301V8.7l14.076-4.526zM30 16a1 1 0 0 0-.194-.592l-9.544-13a1 1 0 0 0-1.112-.36L3.694 7.018A1 1 0 0 0 3 7.97v16.06a1 1 0 0 0 .694.952l15.456 4.97a1 1 0 0 0 1.112-.36l9.544-13A1 1 0 0 0 30 16"></svg:path>`,
})
export class CarbonPentagonRightOutlineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPentagonRightSolidIcon],svg[carbon-pentagon-right-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 16a1 1 0 0 0-.194-.592l-9.544-13a1 1 0 0 0-1.112-.36L3.694 7.018A1 1 0 0 0 3 7.97v16.06a1 1 0 0 0 .694.952l15.456 4.97a1 1 0 0 0 1.112-.36l9.544-13A1 1 0 0 0 30 16"></svg:path>`,
})
export class CarbonPentagonRightSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPentagonSolidIcon],svg[carbon-pentagon-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a1 1 0 0 0-.592.194l-13 9.544a1 1 0 0 0-.36 1.112l4.97 15.456A1 1 0 0 0 7.97 29h16.06a1 1 0 0 0 .952-.694l4.97-15.456a1 1 0 0 0-.36-1.112l-13-9.544A1 1 0 0 0 16 2"></svg:path>`,
})
export class CarbonPentagonSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPercentageIcon],svg[carbon-percentage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 14a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5m0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3M4 26.586L26.585 4L28 5.415L5.414 28zM23 28a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5m0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3"></svg:path>`,
})
export class CarbonPercentageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPercentageFilledIcon],svg[carbon-percentage-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 14a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5M4 26.586L26.585 4L28 5.415L5.414 28zM23 28a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5"></svg:path>`,
})
export class CarbonPercentageFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPersonIcon],svg[carbon-person-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 30h-4a2 2 0 0 1-2-2v-7a2 2 0 0 1-2-2v-6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a2 2 0 0 1-2 2v7a2 2 0 0 1-2 2m-5-18a.94.94 0 0 0-1 1v6h2v9h4v-9h2v-6a.94.94 0 0 0-1-1zm3-3a4 4 0 1 1 4-4a4 4 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonPersonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPersonFavoriteIcon],svg[carbon-person-favorite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 31H6a2.006 2.006 0 0 1-2-2v-7a2.006 2.006 0 0 1-2-2v-6a2.947 2.947 0 0 1 3-3h6a2.947 2.947 0 0 1 3 3v6a2.006 2.006 0 0 1-2 2v7a2.006 2.006 0 0 1-2 2M5 13a.945.945 0 0 0-1 1v6h2v9h4v-9h2v-6a.945.945 0 0 0-1-1zm3-3a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2m20.766.256A4.21 4.21 0 0 0 23 4.032a4.21 4.21 0 0 0-5.766.224a4.32 4.32 0 0 0 0 6.044l5.764 5.84l.002-.002l.002.001l5.764-5.839a4.32 4.32 0 0 0 0-6.044m-1.424 4.639l-4.34 4.397L23 13.29l-.002.002l-4.34-4.397a2.31 2.31 0 0 1 0-3.234a2.264 2.264 0 0 1 3.156 0l1.181 1.207l.005-.005l.005.005l1.18-1.207a2.264 2.264 0 0 1 3.157 0a2.31 2.31 0 0 1 0 3.234"></svg:path>`,
})
export class CarbonPersonFavoriteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPestIcon],svg[carbon-pest-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="7.5" cy="9.5" r="1.5" fill="currentColor"></svg:circle><svg:circle cx="13" cy="13" r="1" fill="currentColor"></svg:circle><svg:circle cx="22" cy="21" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M25 14a8.98 8.98 0 0 0-7 3.356V13a10.9 10.9 0 0 0-1.01-4.584l-.356-.777l-.823.231A3 3 0 0 1 15 8a3.003 3.003 0 0 1-3-3a3 3 0 0 1 .13-.81l.232-.824l-.777-.357A10.9 10.9 0 0 0 7 2H2v7a10.9 10.9 0 0 0 2.234 6.627l.389.428l.54-.038a5.53 5.53 0 0 1 5.362 3.256l.221.497l.538.084A11 11 0 0 0 13 20h3v10h2v-4h3a9.01 9.01 0 0 0 9-9v-3Zm-12.898 3.947A7.51 7.51 0 0 0 5.528 14A8.9 8.9 0 0 1 4 9V4h3a8.9 8.9 0 0 1 3.026.53A4 4 0 0 0 10 5a4.966 4.966 0 0 0 5.47 4.974A8.9 8.9 0 0 1 16 13v5h-3a8 8 0 0 1-.898-.053M28 17a7.01 7.01 0 0 1-7 7h-3v-1a7.01 7.01 0 0 1 5.021-6.71A1.497 1.497 0 1 0 26 16.5a1.5 1.5 0 0 0-.092-.5H28Z"></svg:path>`,
})
export class CarbonPestIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPetImageBIcon],svg[carbon-pet-image-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs></svg:defs><svg:path d="M19 21h2v3h-2z" fill="currentColor"></svg:path><svg:path d="M19 0h2v3h-2z" fill="currentColor"></svg:path><svg:path d="M8 11h3v2H8z" fill="currentColor"></svg:path><svg:path d="M29 11h3v2h-3z" fill="currentColor"></svg:path><svg:path transform="rotate(-45 12.586 4.577)" d="M11.59 3.07h1.98v3h-1.98z" fill="currentColor"></svg:path><svg:path transform="rotate(-45 27.43 19.408)" d="M26.44 17.92h1.98v3h-1.98z" fill="currentColor"></svg:path><svg:path transform="rotate(-45 12.592 19.414)" d="M11.09 18.42h3v1.98h-3z" fill="currentColor"></svg:path><svg:path transform="rotate(-45 27.423 4.57)" d="M25.93 3.58h3v1.98h-3z" fill="currentColor"></svg:path><svg:path d="M20 5a7 7 0 1 0 7 7a7 7 0 0 0-7-7zm0 12a5 5 0 0 1 0-10z" fill="currentColor"></svg:path><svg:path d="M5 18H0v14h5a3 3 0 0 0 3-3v-2a3 3 0 0 0-.78-2A3 3 0 0 0 8 23v-2a3 3 0 0 0-3-3zm-3 2h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2zm4 9a1 1 0 0 1-1 1H2v-4h3a1 1 0 0 1 1 1z" fill="currentColor"></svg:path><svg:path d="M2 2h7V0H0v9h2V2z" fill="currentColor"></svg:path>`,
})
export class CarbonPetImageBIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPetImageOIcon],svg[carbon-pet-image-o-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M11 29h2v3h-2z" fill="currentColor"></svg:path><svg:path d="M11 8h2v3h-2z" fill="currentColor"></svg:path><svg:path d="M0 19h3v2H0z" fill="currentColor"></svg:path><svg:path d="M21 19h3v2h-3z" fill="currentColor"></svg:path><svg:path d="M2.82 12.233l1.4-1.4l2.122 2.122l-1.4 1.4z" fill="currentColor"></svg:path><svg:path d="M17.674 27.066l1.4-1.4l2.122 2.121l-1.4 1.4z" fill="currentColor"></svg:path><svg:path d="M2.83 27.79l2.122-2.12l1.4 1.4l-2.121 2.121z" fill="currentColor"></svg:path><svg:path d="M17.664 12.937l2.121-2.121l1.4 1.4l-2.121 2.121z" fill="currentColor"></svg:path><svg:path d="M12 13a7 7 0 1 0 7 7a7 7 0 0 0-7-7zm0 12a5 5 0 0 1 0-10z" fill="currentColor"></svg:path><svg:path d="M2 2h7V0H0v9h2V2z" fill="currentColor"></svg:path><svg:path d="M30 0h-4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm-4 12V2h4v10z" fill="currentColor"></svg:path>`,
})
export class CarbonPetImageOIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPhoneIcon],svg[carbon-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 29h-.17C6.18 27.87 3.39 11.29 3 6.23A3 3 0 0 1 5.76 3h5.51a2 2 0 0 1 1.86 1.26L14.65 8a2 2 0 0 1-.44 2.16l-2.13 2.15a9.37 9.37 0 0 0 7.58 7.6l2.17-2.15a2 2 0 0 1 2.17-.41l3.77 1.51A2 2 0 0 1 29 20.72V26a3 3 0 0 1-3 3M6 5a1 1 0 0 0-1 1v.08C5.46 12 8.41 26 25.94 27a1 1 0 0 0 1.06-.94v-5.34l-3.77-1.51l-2.87 2.85l-.48-.06c-8.7-1.09-9.88-9.79-9.88-9.88l-.06-.48l2.84-2.87L11.28 5Z"></svg:path>`,
})
export class CarbonPhoneIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPhoneApplicationIcon],svg[carbon-phone-application-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 2h4v4h-4zm0 6h4v4h-4zm-6-6h4v4h-4zm0 6h4v4h-4zm5 22h-.17C5.18 28.87 2.39 12.29 2 7.23a3 3 0 0 1 2.761-3.221Q4.88 4 5 4h5.27a2 2 0 0 1 1.86 1.26L13.65 9a2 2 0 0 1-.44 2.16l-2.13 2.15a9.36 9.36 0 0 0 7.58 7.6l2.17-2.15a2 2 0 0 1 2.17-.41l3.77 1.51A2 2 0 0 1 28 21.72V27a3 3 0 0 1-3 3M5 6a1 1 0 0 0-1.003.997q0 .041.003.083C4.46 13 7.41 27 24.94 28a1 1 0 0 0 1.058-.938L26 27v-5.28l-3.77-1.51l-2.87 2.85l-.48-.06C10.18 21.91 9 13.21 9 13.12l-.06-.48l2.84-2.87L10.28 6z"></svg:path>`,
})
export class CarbonPhoneApplicationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPhoneBlockIcon],svg[carbon-phone-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 29h-.17C6.18 27.87 3.39 11.29 3 6.23a3 3 0 0 1 2.761-3.221Q5.88 3 6 3h5.27a2 2 0 0 1 1.86 1.26L14.65 8a2 2 0 0 1-.44 2.16l-2.13 2.15a9.36 9.36 0 0 0 7.58 7.6l2.17-2.15a2 2 0 0 1 2.17-.41l3.77 1.51A2 2 0 0 1 29 20.72V26a3 3 0 0 1-3 3M6 5a1 1 0 0 0-1.003.997q0 .042.003.083C5.46 12 8.41 26 25.94 27a1 1 0 0 0 1.058-.938L27 26v-5.28l-3.77-1.51l-2.87 2.85l-.48-.06c-8.7-1.09-9.88-9.79-9.88-9.88l-.06-.48l2.84-2.87L11.28 5Z"></svg:path><svg:path fill="currentColor" d="M24.41 9L28 5.41L26.59 4L23 7.59L19.41 4L18 5.41L21.59 9L18 12.59L19.41 14L23 10.41L26.59 14L28 12.59z"></svg:path>`,
})
export class CarbonPhoneBlockIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPhoneBlockFilledIcon],svg[carbon-phone-block-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.333 21.482l2.24-2.24a2.17 2.17 0 0 1 2.337-.48l2.728 1.092A2.17 2.17 0 0 1 29 21.866v4.961a2.167 2.167 0 0 1-2.284 2.169C7.594 27.806 3.732 11.61 3.015 5.408A2.162 2.162 0 0 1 5.169 3h4.873a2.17 2.17 0 0 1 2.012 1.362l1.091 2.728a2.17 2.17 0 0 1-.48 2.337l-2.24 2.24s1.242 8.732 9.908 9.815"></svg:path><svg:path fill="currentColor" d="M24.41 9L28 5.41L26.59 4L23 7.59L19.41 4L18 5.41L21.59 9L18 12.59L19.41 14L23 10.41L26.59 14L28 12.59z"></svg:path>`,
})
export class CarbonPhoneBlockFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPhoneFilledIcon],svg[carbon-phone-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.33 21.48l2.24-2.24a2.19 2.19 0 0 1 2.34-.48l2.73 1.09a2.18 2.18 0 0 1 1.36 2v5A2.17 2.17 0 0 1 26.72 29C7.59 27.81 3.73 11.61 3 5.41A2.17 2.17 0 0 1 5.17 3H10a2.16 2.16 0 0 1 2 1.36l1.09 2.73a2.16 2.16 0 0 1-.47 2.34l-2.24 2.24s1.29 8.73 9.95 9.81"></svg:path>`,
})
export class CarbonPhoneFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPhoneIncomingIcon],svg[carbon-phone-incoming-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 29h-.17C6.18 27.87 3.39 11.29 3 6.23a3 3 0 0 1 2.761-3.221Q5.88 3 6 3h5.27a2 2 0 0 1 1.86 1.26L14.65 8a2 2 0 0 1-.44 2.16l-2.13 2.15a9.36 9.36 0 0 0 7.58 7.6l2.17-2.15a2 2 0 0 1 2.17-.41l3.77 1.51A2 2 0 0 1 29 20.72V26a3 3 0 0 1-3 3M6 5a1 1 0 0 0-1.003.997q0 .042.003.083C5.46 12 8.41 26 25.94 27a1 1 0 0 0 1.058-.938L27 26v-5.28l-3.77-1.51l-2.87 2.85l-.48-.06c-8.7-1.09-9.88-9.79-9.88-9.88l-.06-.48l2.84-2.87L11.28 5Z"></svg:path><svg:path fill="currentColor" d="M27 13v-2h-4.586L29 4.414L27.586 3L21 9.586V5h-2v8z"></svg:path>`,
})
export class CarbonPhoneIncomingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPhoneIncomingFilledIcon],svg[carbon-phone-incoming-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.333 21.482l2.24-2.24a2.17 2.17 0 0 1 2.337-.48l2.728 1.092A2.17 2.17 0 0 1 29 21.866v4.961a2.167 2.167 0 0 1-2.284 2.169C7.594 27.806 3.732 11.61 3.015 5.408A2.162 2.162 0 0 1 5.169 3h4.873a2.17 2.17 0 0 1 2.012 1.362l1.091 2.728a2.17 2.17 0 0 1-.48 2.337l-2.24 2.24s1.242 8.732 9.908 9.815"></svg:path><svg:path fill="currentColor" d="M27 13v-2h-4.586L29 4.414L27.586 3L21 9.586V5h-2v8z"></svg:path>`,
})
export class CarbonPhoneIncomingFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPhoneIpIcon],svg[carbon-phone-ip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 14h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm-8 4h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm-8 4h2v2h-2zm4 0h2v2h-2zm4 0h2v2h-2zm-8-12h10v2H16z"></svg:path><svg:path fill="currentColor" d="M28 6H14V5a2.003 2.003 0 0 0-2-2H8a2.003 2.003 0 0 0-2 2v1H4a2.003 2.003 0 0 0-2 2v18a2.003 2.003 0 0 0 2 2h24a2.003 2.003 0 0 0 2-2V8a2.003 2.003 0 0 0-2-2M8 5h4v17H8Zm20 21H4V8h2v14a2.003 2.003 0 0 0 2 2h4a2.003 2.003 0 0 0 2-2V8h14Z"></svg:path>`,
})
export class CarbonPhoneIpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPhoneOffIcon],svg[carbon-phone-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.19 18.56A25.66 25.66 0 0 1 5 6.08V6a1 1 0 0 1 1-1h5.28l1.5 3.77l-2.84 2.87l.06.48a13 13 0 0 0 1.46 4.17l1.46-1.46a9.3 9.3 0 0 1-.84-2.52l2.13-2.15A2 2 0 0 0 14.65 8l-1.52-3.74A2 2 0 0 0 11.27 3H5.76A3 3 0 0 0 3 6.23A28 28 0 0 0 7.79 20zm18.58.3L24 17.35a2 2 0 0 0-2.17.41l-2.17 2.15A9.2 9.2 0 0 1 15.45 18L30 3.41L28.59 2L2 28.59L3.41 30l7-7c3.38 3.18 8.28 5.62 15.39 6h.2a3 3 0 0 0 3-3v-5.28a2 2 0 0 0-1.23-1.86M27 26v.06a1 1 0 0 1-1.06.94c-6.51-.37-11-2.54-14.11-5.42L14 19.44A10.77 10.77 0 0 0 19.88 22l.48.06l2.87-2.85L27 20.72z"></svg:path>`,
})
export class CarbonPhoneOffIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPhoneOffFilledIcon],svg[carbon-phone-off-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m26.74 19.56l-2.52-1a2 2 0 0 0-2.15.44L20 21.06a9.93 9.93 0 0 1-5.35-2.29L30 3.41L28.59 2L2 28.59L3.41 30l7.93-7.92c3.24 3.12 7.89 5.5 14.55 5.92A2 2 0 0 0 28 26v-4.59a2 2 0 0 0-1.26-1.85M8.15 18.19l3.52-3.52a11.7 11.7 0 0 1-.82-2.67l2.07-2.07a2 2 0 0 0 .44-2.15l-1-2.52A2 2 0 0 0 10.5 4H6a2 2 0 0 0-2 2.22a29 29 0 0 0 4.15 11.97"></svg:path>`,
})
export class CarbonPhoneOffFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPhoneOutgoingIcon],svg[carbon-phone-outgoing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 29h-.2C6.2 27.9 3.4 11.3 3 6.2C2.9 4.6 4.1 3.1 5.8 3h5.5c.8 0 1.6.5 1.9 1.3L14.6 8c.3.7.1 1.6-.4 2.2l-2.1 2.1c.7 3.9 3.7 6.9 7.6 7.6l2.2-2.1c.6-.6 1.4-.7 2.2-.4l3.8 1.5c.7.3 1.2 1 1.2 1.9V26c-.1 1.7-1.4 3-3.1 3M6 5c-.6 0-1 .4-1 1v.1C5.5 12 8.4 26 25.9 27c.6 0 1-.4 1.1-.9v-5.4l-3.8-1.5l-2.9 2.9l-.4-.1c-8.7-1.1-9.9-9.8-9.9-9.9l-.1-.5l2.8-2.9L11.3 5z"></svg:path><svg:path fill="currentColor" d="M20 4v2h4.6L18 12.6l1.4 1.4L26 7.4V12h2V4z"></svg:path>`,
})
export class CarbonPhoneOutgoingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPhoneOutgoingFilledIcon],svg[carbon-phone-outgoing-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.333 21.482l2.24-2.24a2.17 2.17 0 0 1 2.337-.48l2.728 1.092A2.17 2.17 0 0 1 29 21.866v4.961a2.167 2.167 0 0 1-2.284 2.169C7.594 27.806 3.732 11.61 3.015 5.408A2.162 2.162 0 0 1 5.169 3h4.873a2.17 2.17 0 0 1 2.012 1.362l1.091 2.728a2.17 2.17 0 0 1-.48 2.337l-2.24 2.24s1.242 8.732 9.908 9.815"></svg:path><svg:path fill="currentColor" d="M20 4v2h4.586L18 12.586L19.414 14L26 7.414V12h2V4z"></svg:path>`,
})
export class CarbonPhoneOutgoingFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPhoneSettingsIcon],svg[carbon-phone-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 10V8h-2.101a5 5 0 0 0-.732-1.753l1.49-1.49l-1.414-1.414l-1.49 1.49A5 5 0 0 0 24 4.101V2h-2v2.101a5 5 0 0 0-1.753.732l-1.49-1.49l-1.414 1.414l1.49 1.49A5 5 0 0 0 18.101 8H16v2h2.101a5 5 0 0 0 .732 1.753l-1.49 1.49l1.414 1.414l1.49-1.49a5 5 0 0 0 1.753.732V16h2v-2.101a5 5 0 0 0 1.753-.732l1.49 1.49l1.414-1.414l-1.49-1.49A5 5 0 0 0 27.899 10Zm-7 2a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3"></svg:path><svg:path fill="currentColor" d="M25 30h-.17C5.18 28.87 2.39 12.29 2 7.23a3 3 0 0 1 2.761-3.221Q4.88 4 5 4h5.27a2 2 0 0 1 1.86 1.26L13.65 9a2 2 0 0 1-.44 2.16l-2.13 2.15a9.36 9.36 0 0 0 7.58 7.6l2.17-2.15a2 2 0 0 1 2.17-.41l3.77 1.51A2 2 0 0 1 28 21.72V27a3 3 0 0 1-3 3M5 6a1 1 0 0 0-1.003.997q0 .041.003.083C4.46 13 7.41 27 24.94 28a1 1 0 0 0 1.058-.938L26 27v-5.28l-3.77-1.51l-2.87 2.85l-.48-.06C10.18 21.91 9 13.21 9 13.12l-.06-.48l2.84-2.87L10.28 6Z"></svg:path>`,
})
export class CarbonPhoneSettingsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPhoneVoiceIcon],svg[carbon-phone-voice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 13h-2a3.003 3.003 0 0 0-3-3V8a5.006 5.006 0 0 1 5 5"></svg:path><svg:path fill="currentColor" d="M28 13h-2a7.01 7.01 0 0 0-7-7V4a9.01 9.01 0 0 1 9 9m-2 16h-.17C6.18 27.87 3.39 11.29 3 6.23a3 3 0 0 1 2.761-3.221Q5.88 3 6 3h5.27a2 2 0 0 1 1.86 1.26L14.65 8a2 2 0 0 1-.44 2.16l-2.13 2.15a9.36 9.36 0 0 0 7.58 7.6l2.17-2.15a2 2 0 0 1 2.17-.41l3.77 1.51A2 2 0 0 1 29 20.72V26a3 3 0 0 1-3 3M6 5a1 1 0 0 0-1.003.997q0 .042.003.083C5.46 12 8.41 26 25.94 27a1 1 0 0 0 1.058-.938L27 26v-5.28l-3.77-1.51l-2.87 2.85l-.48-.06c-8.7-1.09-9.88-9.79-9.88-9.88l-.06-.48l2.84-2.87L11.28 5z"></svg:path>`,
})
export class CarbonPhoneVoiceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPhoneVoiceFilledIcon],svg[carbon-phone-voice-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 13h-2a3.003 3.003 0 0 0-3-3V8a5.006 5.006 0 0 1 5 5"></svg:path><svg:path fill="currentColor" d="M28 13h-2a7.01 7.01 0 0 0-7-7V4a9.01 9.01 0 0 1 9 9m-7.667 8.482l2.24-2.24a2.17 2.17 0 0 1 2.337-.48l2.728 1.092A2.17 2.17 0 0 1 29 21.866v4.961a2.167 2.167 0 0 1-2.284 2.169C7.594 27.806 3.732 11.61 3.015 5.408A2.162 2.162 0 0 1 5.169 3h4.873a2.17 2.17 0 0 1 2.012 1.362l1.091 2.728a2.17 2.17 0 0 1-.48 2.337l-2.24 2.24s1.242 8.732 9.908 9.815"></svg:path>`,
})
export class CarbonPhoneVoiceFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPhraseSentimentIcon],svg[carbon-phrase-sentiment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.303 10a2.66 2.66 0 0 0-1.908.806l-.393.405l-.397-.405a2.66 2.66 0 0 0-3.816 0a2.8 2.8 0 0 0 0 3.896L16.002 19l4.209-4.298a2.8 2.8 0 0 0 0-3.896A2.66 2.66 0 0 0 18.303 10"></svg:path><svg:path fill="currentColor" d="M17.736 30L16 29l4-7h6a1.997 1.997 0 0 0 2-2V8a1.997 1.997 0 0 0-2-2H6a1.997 1.997 0 0 0-2 2v12a1.997 1.997 0 0 0 2 2h9v2H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-4.835Z"></svg:path>`,
})
export class CarbonPhraseSentimentIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPicnicAreaIcon],svg[carbon-picnic-area-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 12a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2m2 16h-4.153l-.667-4H24v-2H8v2h2.82l-.667 4H6v2h3.82l-.667 4h2.027l.667-4h8.305l.667 4h2.028l-.667-4H26zm-13.82 0l.667-4h6.306l.666 4z"></svg:path>`,
})
export class CarbonPicnicAreaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPiggyBankIcon],svg[carbon-piggy-bank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.5 14H20v-2h-2v-1h-2v1.05a2.5 2.5 0 0 0 .5 4.95h1a.5.5 0 0 1 0 1H14v2h2v1h2v-1.05a2.5 2.5 0 0 0-.5-4.95h-1a.5.5 0 0 1 0-1"></svg:path><svg:path fill="currentColor" d="M29 13h-2.02A5.78 5.78 0 0 0 25 8.852V5a1 1 0 0 0-1.6-.8L19.667 7H15c-5.51 0-9.463 3.241-9.948 8H5a1 1 0 0 1-1-1v-2H2v2a3.003 3.003 0 0 0 3 3h.07A9.17 9.17 0 0 0 9 23.557V27a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2h3v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3.363A5.1 5.1 0 0 0 26.819 20H29a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1m-1 5h-2.876c-.305 2.753-.823 3.485-3.124 4.315V26h-2v-3h-7v3h-2v-3.622A7.01 7.01 0 0 1 7 16c0-4.835 4.018-7 8-7h5.334L23 7v2.776c2.418 1.86 1.913 3.186 2.018 5.224H28Z"></svg:path>`,
})
export class CarbonPiggyBankIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPiggyBankSlotIcon],svg[carbon-piggy-bank-slot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 11h7v2h-7z"></svg:path><svg:path fill="currentColor" d="M29 13h-2.02A5.78 5.78 0 0 0 25 8.852V5a1 1 0 0 0-1.6-.8L19.667 7H15c-5.51 0-9.463 3.241-9.948 8H5a1 1 0 0 1-1-1v-2H2v2a3.003 3.003 0 0 0 3 3h.07A9.17 9.17 0 0 0 9 23.557V27a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2h3v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3.363A5.1 5.1 0 0 0 26.819 20H29a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1m-1 5h-2.876c-.305 2.753-.823 3.485-3.124 4.315V26h-2v-3h-7v3h-2v-3.622A7.01 7.01 0 0 1 7 16c0-4.835 4.018-7 8-7h5.334L23 7v2.776c2.418 1.86 1.913 3.186 2.018 5.224H28Z"></svg:path>`,
})
export class CarbonPiggyBankSlotIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPillsIcon],svg[carbon-pills-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14a7.94 7.94 0 0 0-4 1.083V9A7 7 0 0 0 4 9v14a6.999 6.999 0 0 0 12.286 4.588A7.997 7.997 0 1 0 22 14m0 2a6.005 6.005 0 0 1 5.91 5H16.09A6.005 6.005 0 0 1 22 16M6 9a5 5 0 0 1 10 0v6H6Zm5 19a5.006 5.006 0 0 1-5-5v-6h9.765a7.96 7.96 0 0 0-.724 8.932A4.99 4.99 0 0 1 11 28m11 0a6.005 6.005 0 0 1-5.91-5h11.82A6.005 6.005 0 0 1 22 28"></svg:path>`,
})
export class CarbonPillsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPillsAddIcon],svg[carbon-pills-add-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14a7.94 7.94 0 0 0-4 1.083V9A7 7 0 0 0 4 9v14a6.986 6.986 0 0 0 12.276 4.577A7.997 7.997 0 1 0 22 14M11 4a5.006 5.006 0 0 1 5 5v6H6V9a5.006 5.006 0 0 1 5-5m0 24a5.006 5.006 0 0 1-5-5v-6h9.765a7.96 7.96 0 0 0-.724 8.932A5.01 5.01 0 0 1 11 28m11 0a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6"></svg:path><svg:path fill="currentColor" d="M25 21h-2v-2h-2v2h-2v2h2v2h2v-2h2z"></svg:path>`,
})
export class CarbonPillsAddIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPillsSubtractIcon],svg[carbon-pills-subtract-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 14a7.94 7.94 0 0 0-4 1.083V9A7 7 0 0 0 4 9v14a6.986 6.986 0 0 0 12.276 4.577A7.997 7.997 0 1 0 22 14M11 4a5.006 5.006 0 0 1 5 5v6H6V9a5.006 5.006 0 0 1 5-5m0 24a5.006 5.006 0 0 1-5-5v-6h9.765a7.96 7.96 0 0 0-.724 8.932A5.01 5.01 0 0 1 11 28m11 0a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6"></svg:path><svg:path fill="currentColor" d="M19 21h6v2h-6z"></svg:path>`,
})
export class CarbonPillsSubtractIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPinIcon],svg[carbon-pin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.59 13.31L30 11.9L20 2l-1.31 1.42l1.18 1.18l-11.49 9.72l-1.72-1.71L5.25 14l5.66 5.68L2 28.58L3.41 30l8.91-8.91L18 26.75l1.39-1.42l-1.71-1.71l9.72-11.49ZM16.26 22.2L9.8 15.74L21.29 6L26 10.71Z"></svg:path>`,
})
export class CarbonPinIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPinFilledIcon],svg[carbon-pin-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.586 13.314L30 11.9L20 2l-1.314 1.415l1.186 1.186L8.38 14.322l-1.716-1.715L5.25 14l5.657 5.677L2 28.583L3.41 30l8.911-8.909L18 26.748l1.393-1.414l-1.716-1.716l9.724-11.49Z"></svg:path>`,
})
export class CarbonPinFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPipelinesIcon],svg[carbon-pipelines-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 12h6c1.103 0 2-.897 2-2V4c0-1.102-.897-2-2-2h-6c-1.103 0-2 .898-2 2v2h-9c-2.757 0-5 2.243-5 5H4c-1.103 0-2 .898-2 2v6c0 1.103.897 2 2 2h2c0 2.757 2.243 5 5 5h9v2c0 1.103.897 2 2 2h6c1.103 0 2-.897 2-2v-6c0-1.102-.897-2-2-2h-6c-1.103 0-2 .898-2 2v2h-9c-1.654 0-3-1.346-3-3h2c1.103 0 2-.897 2-2v-6c0-1.102-.897-2-2-2H8c0-1.654 1.346-3 3-3h9v2c0 1.103.897 2 2 2m0 10h6v6h-6l-.001-6zm-12-9v6H4l-.001-6zm12-9h6v6h-6l-.001-6z"></svg:path>`,
})
export class CarbonPipelinesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPlanIcon],svg[carbon-plan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31 8c0-.4-.2-.7-.5-.9l-7-4c-.2-.1-.3-.1-.5-.1s-.3 0-.5.1L16 6.8L9.5 3.1C9.3 3 9.2 3 9 3s-.3 0-.5.1l-7 4c-.3.2-.5.5-.5.9v20c0 .6.4 1 1 1c.2 0 .3-.1.5-.1L9 25.2l6.5 3.7c.2.1.3.1.5.1s.3 0 .5-.1l6.5-3.7l6.5 3.7c.1.1.3.1.5.1c.6 0 1-.4 1-1zM3 8.6l5-2.9v17.7l-5 2.9zm12 17.7l-5-2.9V5.7l5 2.9zm7-2.9l-5 2.9V8.6l5-2.9zm2 0V5.7l5 2.9v17.7z"></svg:path>`,
})
export class CarbonPlanIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPlaneIcon],svg[carbon-plane-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.37 14.75L20 10V6a4 4 0 0 0-8 0v4l-9.37 4.75a1 1 0 0 0-.63.93v5a1 1 0 0 0 1 1a1 1 0 0 0 .29-.05L12 18v5l-3.45 1.72a1 1 0 0 0-.55.9V29a1 1 0 0 0 1 1a.9.9 0 0 0 .28 0L16 28l6.72 2a.9.9 0 0 0 .28 0a1 1 0 0 0 1-1v-3.38a1 1 0 0 0-.55-.9L20 23v-5l8.71 3.61a1 1 0 0 0 .29.05a1 1 0 0 0 1-1v-5a1 1 0 0 0-.63-.91M28 19.15L18 15v9.24l4 2v1.43l-6-1.75l-6 1.75v-1.43l4-2V15L4 19.15V16.3l10-5.07V6a2 2 0 0 1 4 0v5.23l10 5.07Z"></svg:path>`,
})
export class CarbonPlaneIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPlanePrivateIcon],svg[carbon-plane-private-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m28.585 14.585l-3.12-1.872A5 5 0 0 0 22.891 12H7.781L7.16 9.515A2 2 0 0 0 5.22 8H4a2 2 0 0 0-2 2v7a3.003 3.003 0 0 0 3 3h7v6a2 2 0 0 0 2 2h1.307a2.01 2.01 0 0 0 1.873-1.298L19.693 20h7.392a2.915 2.915 0 0 0 1.5-5.415M27.085 18h-8.778l-3 8H14v-8H5a1 1 0 0 1-1-1v-7h1.22l1 4H10v2h2v-2h3v2h2v-2h3v2h2v-2h.892a3 3 0 0 1 1.543.428l3.12 1.872a.915.915 0 0 1-.47 1.7"></svg:path><svg:path fill="currentColor" d="M14 4h1.323l2.4 6h2.154L17.18 3.257A1.99 1.99 0 0 0 15.323 2H14a2 2 0 0 0-2 2v6h2Z"></svg:path>`,
})
export class CarbonPlanePrivateIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPlaneSeaIcon],svg[carbon-plane-sea-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 30h-2a4.93 4.93 0 0 1-4-1.987a5.02 5.02 0 0 1-8 0a5.02 5.02 0 0 1-8 0A4.93 4.93 0 0 1 4 30H2v-2h2a3.44 3.44 0 0 0 3.053-2.321A.97.97 0 0 1 8 25a1.01 1.01 0 0 1 .949.684A3.44 3.44 0 0 0 12 28a3.44 3.44 0 0 0 3.053-2.321A.99.99 0 0 1 16 25a1.01 1.01 0 0 1 .949.684A3.44 3.44 0 0 0 20 28a3.44 3.44 0 0 0 3.053-2.321a1 1 0 0 1 1.896.005A3.44 3.44 0 0 0 28 28h2zM28 6v4h-2.5l-2.1-2.8A3.01 3.01 0 0 0 21 6h-6a3.003 3.003 0 0 0-3 3v1H8.618l-.724-1.447l-1-2A1 1 0 0 0 6 6H3a1 1 0 0 0-1 1v6a3.003 3.003 0 0 0 3 3h6.82l-.667 4H7a1 1 0 0 0 0 2h20a1 1 0 0 0 0-2h-4.153l-.667-4h.163a4.97 4.97 0 0 0 3.535-1.465L28 12.415V16h2V6zM14 9a1 1 0 0 1 1-1h6a1 1 0 0 1 .8.4L23 10h-9zm6.82 11h-7.64l.667-4h6.306zm1.524-6H5a1 1 0 0 1-1-1V8h1.382l.724 1.447L7.382 12h18.204l-1.122 1.121a2.98 2.98 0 0 1-2.12.879"></svg:path>`,
})
export class CarbonPlaneSeaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPlatformsIcon],svg[carbon-platforms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 28H4c-1.103 0-2-.897-2-2v-6h2v6h24v-6h2v6c0 1.103-.897 2-2 2"></svg:path><svg:path fill="currentColor" d="M17 17v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1m2 1h2v2h-2zM9 17v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1m2 1h2v2h-2zm6-9v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1m2 1h2v2h-2zM5 5v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1m2 1h6v6H7z"></svg:path>`,
})
export class CarbonPlatformsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPlayIcon],svg[carbon-play-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 28a1 1 0 0 1-1-1V5a1 1 0 0 1 1.482-.876l20 11a1 1 0 0 1 0 1.752l-20 11A1 1 0 0 1 7 28M8 6.69v18.62L24.925 16Z"></svg:path>`,
})
export class CarbonPlayIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPlayFilledIcon],svg[carbon-play-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M11 23a1 1 0 0 1-1-1V10a1 1 0 0 1 1.447-.894l12 6a1 1 0 0 1 0 1.788l-12 6A1 1 0 0 1 11 23"></svg:path><svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m7.447 14.895l-12 6A1 1 0 0 1 10 22V10a1 1 0 0 1 1.447-.894l12 6a1 1 0 0 1 0 1.788"></svg:path>`,
})
export class CarbonPlayFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPlayFilledAltIcon],svg[carbon-play-filled-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 28a1 1 0 0 1-1-1V5a1 1 0 0 1 1.482-.876l20 11a1 1 0 0 1 0 1.752l-20 11A1 1 0 0 1 7 28"></svg:path>`,
})
export class CarbonPlayFilledAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPlayOutlineIcon],svg[carbon-play-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 23a1 1 0 0 1-1-1V10a1 1 0 0 1 1.447-.894l12 6a1 1 0 0 1 0 1.788l-12 6A1 1 0 0 1 11 23m1-11.382v8.764L20.764 16Z"></svg:path><svg:path fill="currentColor" d="M16 4A12 12 0 1 1 4 16A12 12 0 0 1 16 4m0-2a14 14 0 1 0 14 14A14 14 0 0 0 16 2"></svg:path>`,
})
export class CarbonPlayOutlineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPlayOutlineFilledIcon],svg[carbon-play-outline-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M11 23a1 1 0 0 1-1-1V10a1 1 0 0 1 1.447-.894l12 6a1 1 0 0 1 0 1.788l-12 6A1 1 0 0 1 11 23m1-11.382v8.764L20.764 16Z"></svg:path><svg:path fill="currentColor" d="M12 20.382L20.764 16L12 11.618z"></svg:path><svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m7.447 14.895l-12 6A1 1 0 0 1 10 22V10a1 1 0 0 1 1.447-.894l12 6a1 1 0 0 1 0 1.788"></svg:path>`,
})
export class CarbonPlayOutlineFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPlaylistIcon],svg[carbon-playlist-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6h18v2H4zm0 6h18v2H4zm0 6h12v2H4zm17 0l7 5l-7 5z"></svg:path>`,
})
export class CarbonPlaylistIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPlugIcon],svg[carbon-plug-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8h-1V2h-2v6h-6V2h-2v6h-1a2 2 0 0 0-2 2v6a8.01 8.01 0 0 0 7 7.93V30h2v-6.07A8.01 8.01 0 0 0 24 16v-6a2 2 0 0 0-2-2m0 8a6 6 0 0 1-12 0v-6h12Z"></svg:path>`,
})
export class CarbonPlugIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPlugFilledIcon],svg[carbon-plug-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8h-1V2h-2v6h-6V2h-2v6h-1a2 2 0 0 0-2 2v6a8.01 8.01 0 0 0 7 7.93V30h2v-6.07A8.01 8.01 0 0 0 24 16v-6a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonPlugFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPngIcon],svg[carbon-png-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 23h-6a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h6v2h-6v10h4v-4h-2v-2h4zm-12-4L14.32 9H12v14h2V13l3.68 10H20V9h-2zM4 23H2V9h6a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4zm0-7h4v-5H4z"></svg:path>`,
})
export class CarbonPngIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPointOfPresenceIcon],svg[carbon-point-of-presence-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 30H18a2 2 0 0 1-2-2V18a2 2 0 0 1 2-2h2v2h-2v10h10V18h-2v-2h2a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2M14 16H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2h-2V4H4v10h10v-2h2v2a2 2 0 0 1-2 2"></svg:path><svg:path fill="currentColor" d="M26 9a2.993 2.993 0 0 0-5.816-1H9v2h11.184A3 3 0 0 0 22 11.815V23h2V11.816A3 3 0 0 0 26 9m-3 1a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class CarbonPointOfPresenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPointerTextIcon],svg[carbon-pointer-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M13.71 12.29L7.41 6H13V4H4v9h2V7.41l6.29 6.3l1.42-1.42z" fill="currentColor"></svg:path><svg:path d="M28 30H12a2 2 0 0 1-2-2V18h2v10h16V12H18v-2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2z" fill="currentColor"></svg:path><svg:path d="M22 15h-5v2h5v2h-4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h6v-8a2 2 0 0 0-2-2zm0 8h-4v-2h4z" fill="currentColor"></svg:path>`,
})
export class CarbonPointerTextIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPoliceIcon],svg[carbon-police-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 24h2v6h-2z"></svg:path><svg:path fill="currentColor" d="M21 20H7a3.003 3.003 0 0 1-3-3V6H2v11a5.006 5.006 0 0 0 5 5h14a4.9 4.9 0 0 1 2.105.481L17 28.586L18.414 30l6.307-6.307A4.96 4.96 0 0 1 26 27v3h2v-3a7.01 7.01 0 0 0-7-7"></svg:path><svg:path fill="currentColor" d="m25.275 4.039l-7-2a1 1 0 0 0-.55 0l-7 2a1 1 0 0 0-.695 1.203L11 9.123V11a7 7 0 1 0 14 0V9.123l.97-3.88a1 1 0 0 0-.695-1.204M18 4.04l5.795 1.656L23.22 8H19V6h-2v2h-4.219l-.576-2.304ZM18 16a5.006 5.006 0 0 1-5-5v-1h10v1a5.006 5.006 0 0 1-5 5"></svg:path>`,
})
export class CarbonPoliceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPolicyIcon],svg[carbon-policy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 18a6 6 0 1 0-10 4.46V30l4-1.893L28 30v-7.54A5.98 5.98 0 0 0 30 18m-4 8.84l-2-.947l-2 .947v-3.19a5.9 5.9 0 0 0 4 0zM24 22a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4M9 14h7v2H9zm0-6h10v2H9z"></svg:path><svg:path fill="currentColor" d="M6 30a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4h-2V4H6v24h10v2Z"></svg:path>`,
})
export class CarbonPolicyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPopupIcon],svg[carbon-popup-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 4H10a2.006 2.006 0 0 0-2 2v14a2.006 2.006 0 0 0 2 2h18a2.006 2.006 0 0 0 2-2V6a2.006 2.006 0 0 0-2-2m0 16H10V6h18Z"></svg:path><svg:path fill="currentColor" d="M18 26H4V16h2v-2H4a2.006 2.006 0 0 0-2 2v10a2.006 2.006 0 0 0 2 2h14a2.006 2.006 0 0 0 2-2v-2h-2Z"></svg:path>`,
})
export class CarbonPopupIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPortDefinitionIcon],svg[carbon-port-definition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 7V3.6A1.6 1.6 0 0 0 17.4 2H4v2h13v3h-6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6v3H4v2h13.4a1.6 1.6 0 0 0 1.6-1.6V25h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm6 16H11V9h14z"></svg:path>`,
})
export class CarbonPortDefinitionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPortInputIcon],svg[carbon-port-input-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 28c-3.593 0-6.967-1.59-9.257-4.363l1.542-1.274A9.98 9.98 0 0 0 18 26c5.514 0 10-4.486 10-10S23.514 6 18 6a9.98 9.98 0 0 0-7.715 3.637L8.743 8.363A11.97 11.97 0 0 1 18 4c6.617 0 12 5.383 12 12s-5.383 12-12 12"></svg:path><svg:path fill="currentColor" d="m23 16l-7-7l-1.414 1.414L19.172 15H2v2h17.172l-4.586 4.586L16 23z"></svg:path>`,
})
export class CarbonPortInputIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPortOutputIcon],svg[carbon-port-output-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m30 16l-7-7l-1.414 1.414L26.172 15H9v2h17.172l-4.586 4.586L23 23z"></svg:path><svg:path fill="currentColor" d="M14 28C7.383 28 2 22.617 2 16S7.383 4 14 4c2.335 0 4.599.671 6.546 1.941l-1.092 1.676A9.96 9.96 0 0 0 14 6C8.486 6 4 10.486 4 16s4.486 10 10 10a9.96 9.96 0 0 0 5.454-1.617l1.092 1.676A11.95 11.95 0 0 1 14 28"></svg:path>`,
})
export class CarbonPortOutputIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPortUsageIcon],svg[carbon-port-usage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7h-2V3.6c0-.9-.7-1.6-1.6-1.6H4v2h13v3h-2c-3.3 0-6 2.7-6 6v6c0 3.3 2.7 6 6 6h2v3H4v2h13.4c.9 0 1.6-.7 1.6-1.6V25h2c3.3 0 6-2.7 6-6v-6c0-3.3-2.7-6-6-6m4 12c0 2.2-1.8 4-4 4h-6c-2.2 0-4-1.8-4-4v-6c0-2.2 1.8-4 4-4h6c2.2 0 4 1.8 4 4z"></svg:path>`,
})
export class CarbonPortUsageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPortfolioIcon],svg[carbon-portfolio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 10h-6V6a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2M12 6h8v4h-8ZM4 26V12h24v14Z"></svg:path>`,
})
export class CarbonPortfolioIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPowerIcon],svg[carbon-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.5 5.74l-1 1.73a11 11 0 1 1-11 0l-1-1.73a13 13 0 1 0 13 0"></svg:path><svg:path fill="currentColor" d="M15 2h2v14h-2z"></svg:path>`,
})
export class CarbonPowerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPowerEnterprisePoolsMeteredCapacityIntegrationIcon],svg[carbon-power-enterprise-pools-metered-capacity-integration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.017 29.994c-7.709 0-13.987-6.265-14-13.976a13.9 13.9 0 0 1 4.086-9.905L7.52 7.525a11.92 11.92 0 0 0-3.503 8.49a11.92 11.92 0 0 0 3.53 8.479a11.92 11.92 0 0 0 8.47 3.5h.02a11.8 11.8 0 0 0 3.88-.652l.662 1.888a13.8 13.8 0 0 1-4.538.764z"></svg:path><svg:path fill="currentColor" d="M15 16h2v4h2a2 2 0 0 1 2 2v3h-2v-3h-2v3h-2v-3h-2v3h-2v-3a2 2 0 0 1 2-2h2zm8 10a1 1 0 1 1 0 2a1 1 0 1 1 0-2M9 4a1 1 0 1 1 0 2a1 1 0 1 1 0-2"></svg:path><svg:path fill="currentColor" d="M20.92 10.106C20.498 7.774 18.452 6 16 6s-4.498 1.774-4.92 4.106A4.01 4.01 0 0 0 8 14c0 2.206 1.794 4 4 4h1v-2h-1c-1.103 0-2-.897-2-2s.897-2 2-2h1v-1c0-1.654 1.346-3 3-3s3 1.346 3 3v1h1c1.103 0 2 .898 2 2s-.897 2-2 2h-1v2h1c2.206 0 4-1.794 4-4a4.01 4.01 0 0 0-3.08-3.894"></svg:path><svg:path fill="currentColor" d="m25.9 25.889l-1.414-1.415a11.92 11.92 0 0 0 3.517-8.483c0-6.616-5.383-12-12-12c-1.35 0-2.655.217-3.881.644l-.658-1.888a13.8 13.8 0 0 1 4.539-.756c7.72 0 14 6.28 14 14c0 3.737-1.457 7.251-4.103 9.897Z"></svg:path>`,
})
export class CarbonPowerEnterprisePoolsMeteredCapacityIntegrationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPowerVirtualServerDisasterRecoveryAutomationIcon],svg[carbon-power-virtual-server-disaster-recovery-automation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 16c0 .337.024.675.071 1.006l-1.98.283A9 9 0 0 1 7 16c0-4.963 4.038-9 9-9c2.043 0 4.044.704 5.635 1.981l-1.253 1.56A6.92 6.92 0 0 0 16 9c-3.86 0-7 3.14-7 7m-1 4a1 1 0 1 0 2 0a1 1 0 0 0-2 0m8-16c6.617 0 12 5.383 12 12h2c0-7.72-6.28-14-14-14c-1.643 0-3.253.282-4.785.839l.684 1.88A12 12 0 0 1 16 4m6 8a1 1 0 1 0 2 0a1 1 0 0 0-2 0M9 6a1 1 0 1 0 0-2a1 1 0 0 0 0 2M4 16c0-3.205 1.248-6.219 3.515-8.485L6.1 6.1A13.9 13.9 0 0 0 2 16c0 7.72 6.28 14 14 14v-2C9.383 28 4 22.617 4 16m24.5 9.5c0 1.654-1.346 3-3 3s-3-1.346-3-3c0-.462.114-.894.3-1.285l-5.515-5.516c-.39.187-.823.301-1.285.301c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3c0 .462-.113.894-.3 1.285l5.515 5.516c.39-.187.823-.301 1.285-.301c1.654 0 3 1.346 3 3M16 17c.551 0 1-.449 1-1s-.449-1-1-1s-1 .449-1 1s.449 1 1 1m10.5 8.5a1 1 0 1 0-2.001.001A1 1 0 0 0 26.5 25.5"></svg:path>`,
})
export class CarbonPowerVirtualServerDisasterRecoveryAutomationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPptIcon],svg[carbon-ppt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 11h3v12h2V11h3V9h-8zm-8 12h-2V9h6a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-4zm0-7h4v-5.001h-4zM4 23H2V9h6a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4zm0-7h4v-5.001H4z"></svg:path>`,
})
export class CarbonPptIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPresentationFileIcon],svg[carbon-presentation-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 10h2v8h-2zm5 4h2v4h-2zm-10-2h2v6h-2z"></svg:path><svg:path fill="currentColor" d="M25 4h-8V2h-2v2H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8v6h-4v2h10v-2h-4v-6h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 16H7V6h18Z"></svg:path>`,
})
export class CarbonPresentationFileIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPressureIcon],svg[carbon-pressure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.505 16l8.16-7.253A1 1 0 0 0 25 7h-3V2h-2v7h2.37L16 14.662L9.63 9H12V2h-2v5H7a1 1 0 0 0-.665 1.747L14.495 16l-8.16 7.253A1 1 0 0 0 7 25h3v5h2v-7H9.63L16 17.338L22.37 23H20v7h2v-5h3a1 1 0 0 0 .665-1.747Z"></svg:path>`,
})
export class CarbonPressureIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPressureFilledIcon],svg[carbon-pressure-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 30H10v-5H6l10-9l10 9h-4zm-6-14L6 7h4V2h12v5h4z"></svg:path>`,
})
export class CarbonPressureFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPreviousFilledIcon],svg[carbon-previous-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m8 15H11.85l5.58 5.573L16 24l-8-8l8-8l1.43 1.393L11.85 15H24Z"></svg:path><svg:path fill="none" d="m16 8l1.43 1.393L11.85 15H24v2H11.85l5.58 5.573L16 24l-8-8z"></svg:path>`,
})
export class CarbonPreviousFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPreviousOutlineIcon],svg[carbon-previous-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 8l1.43 1.393L11.85 15H24v2H11.85l5.58 5.573L16 24l-8-8z"></svg:path><svg:path fill="currentColor" d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4"></svg:path>`,
})
export class CarbonPreviousOutlineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPricingConsumptionIcon],svg[carbon-pricing-consumption-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2v2c6.63 0 12 5.37 12 12s-5.37 12-12 12v2c7.73 0 14-6.27 14-14S23.73 2 16 2M8.24 25.14l-1.29 1.53c1.23 1.04 2.64 1.87 4.18 2.44l.68-1.88c-1.32-.49-2.53-1.2-3.58-2.09zM4.19 18l-1.97.41c.28 1.63.84 3.16 1.64 4.54L5.59 22c-.68-1.18-1.16-2.61-1.4-4m1.4-8L3.86 9c-.79 1.38-1.35 2.96-1.64 4.59l1.97.35c.24-1.39.72-2.75 1.4-3.93zm6.23-5.24l-.68-1.88c-1.54.57-2.95 1.4-4.18 2.44l1.29 1.53c1.05-.89 2.26-1.6 3.58-2.09z"></svg:path><svg:path fill="currentColor" d="M21 12v-2h-4V7h-2v3h-2c-1.103 0-2 .897-2 2v3c0 1.103.897 2 2 2h6v3h-8v2h4v3h2v-3h2c1.103 0 2-.897 2-2v-3c0-1.103-.897-2-2-2h-6v-3z"></svg:path>`,
})
export class CarbonPricingConsumptionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPricingContainerIcon],svg[carbon-pricing-container-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2h-5v2h5v24h-5v2h5c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m-5 18.52c0-4.62-3.78-5.14-6.82-5.56c-3.31-.46-5.18-.86-5.18-3.71c0-2.39 2.51-3.24 4.65-3.24c2.32 0 4.14.86 5.57 2.63l1.56-1.26C21.26 7.5 19.32 6.41 17 6.1V3h-2v3.02c-3.62.22-6 2.26-6 5.22c0 4.73 3.83 5.26 6.91 5.69c3.25.45 5.09.84 5.09 3.58c0 3.03-3.13 3.48-5 3.48c-3.43 0-4.88-.96-6.22-2.63l-1.56 1.26c1.77 2.19 3.73 3.17 6.78 3.34V29h2v-3.04c3.73-.3 6-2.33 6-5.44"></svg:path><svg:path fill="currentColor" d="M4 4h5V2H4c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h5v-2H4z"></svg:path>`,
})
export class CarbonPricingContainerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPricingQuickProposalIcon],svg[carbon-pricing-quick-proposal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 20.52c0-4.62-3.78-5.14-6.82-5.56c-3.31-.46-5.18-.86-5.18-3.71c0-2.39 2.51-3.24 4.65-3.24c2.32 0 4.14.86 5.57 2.63l1.56-1.26C27.26 7.5 25.32 6.41 23 6.1V3h-2v3.02c-3.62.22-6 2.26-6 5.22c0 4.73 3.83 5.26 6.91 5.69c3.25.45 5.09.84 5.09 3.58c0 3.03-3.13 3.48-5 3.48c-3.43 0-4.88-.96-6.22-2.63l-1.56 1.26c1.77 2.19 3.73 3.17 6.78 3.34V29h2v-3.04c3.73-.3 6-2.33 6-5.44M3 11h8v2H3zm0 8h8v2H3zm2-4h8v2H5z"></svg:path>`,
})
export class CarbonPricingQuickProposalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPricingTailoredIcon],svg[carbon-pricing-tailored-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 21h-2c0-2.823 0-7.088-10.09-8.004l.18-1.992C27 12.085 27 17.884 27 21m-10.09-.004C5 19.915 5 14.116 5 11h2c0 2.823 0 7.088 10.09 8.004z"></svg:path><svg:path fill="currentColor" d="M23 20.52c0-4.62-3.78-5.14-6.82-5.56c-3.31-.46-5.18-.86-5.18-3.71c0-2.39 2.51-3.24 4.65-3.24c2.32 0 4.14.86 5.57 2.63l1.56-1.26C21.26 7.5 19.32 6.41 17 6.1V3h-2v3.02c-3.62.22-6 2.26-6 5.22c0 4.73 3.83 5.26 6.91 5.69c3.25.45 5.09.84 5.09 3.58c0 3.03-3.13 3.48-5 3.48c-3.43 0-4.88-.96-6.22-2.63l-1.56 1.26c1.77 2.19 3.73 3.17 6.78 3.34V29h2v-3.04c3.73-.3 6-2.33 6-5.44"></svg:path>`,
})
export class CarbonPricingTailoredIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPricingTraditionalIcon],svg[carbon-pricing-traditional-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 15.07V8.116c1.69.28 3.084 1.102 4.222 2.512l1.556-1.256C21.258 7.49 19.316 6.398 17 6.096V3h-2v3.022c-3.615.22-6 2.26-6 5.22c0 4.274 3.127 5.12 6 5.559v7.161c-2.72-.177-4.019-1.1-5.222-2.59l-1.556 1.256c1.77 2.193 3.733 3.168 6.778 3.337V29h2v-3.045c3.726-.304 6-2.327 6-5.44c0-4.209-3.143-5.015-6-5.445m-6-3.828c0-2.153 2.03-3.054 4-3.213v6.746c-2.57-.423-4-1.043-4-3.533m6 12.71v-6.857c2.567.415 4 1.004 4 3.42c0 2.536-2.19 3.266-4 3.437"></svg:path>`,
})
export class CarbonPricingTraditionalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPrinterIcon],svg[carbon-printer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 9h-3V3H7v6H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h3v6h18v-6h3a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2M9 5h14v4H9Zm14 22H9V17h14Zm5-6h-3v-6H7v6H4V11h24Z"></svg:path>`,
})
export class CarbonPrinterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonProcessIcon],svg[carbon-process-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 25c-.738 0-1.376.405-1.723 1h-5.63l2.648-5.092c.227.055.461.092.705.092c1.654 0 3-1.346 3-3s-1.346-3-3-3s-3 1.346-3 3c0 .679.235 1.298.616 1.801L2.113 26.54A1 1 0 0 0 3 28h7.277c.347.595.985 1 1.723 1a2 2 0 0 0 0-4m-4-8a1.001 1.001 0 0 1 0 2a1 1 0 0 1 0-2m21.887 9.539l-4.04-7.771A2 2 0 1 0 24 20c.075 0 .147-.014.22-.023L27.353 26h-4.537A2.995 2.995 0 0 0 20 24c-1.654 0-3 1.346-3 3s1.346 3 3 3a2.995 2.995 0 0 0 2.816-2H29a1 1 0 0 0 .887-1.462zM20 28a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2m1-20a3 3 0 0 0-.705.092L16.887 1.54C16.715 1.207 16.357 1 16 1s-.715.207-.887.539L11.22 9.023C11.148 9.014 11.076 9 11 9a2 2 0 1 0 1.846 1.232L16 4.168l2.616 5.03A2.97 2.97 0 0 0 18 11c0 1.654 1.346 3 3 3s3-1.346 3-3s-1.346-3-3-3m0 4a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2"></svg:path>`,
})
export class CarbonProcessIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonProcessAutomateIcon],svg[carbon-process-automate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31 17c0-1.654-1.346-3-3-3s-3 1.346-3 3c0 1.302.838 2.401 2 2.815v2.61l-11 6.417L5.985 23L28.504 9.864a1 1 0 0 0 0-1.728l-12-7a1 1 0 0 0-1.008 0l-12 7A1 1 0 0 0 3 9v3.185A2.995 2.995 0 0 0 1 15c0 1.654 1.346 3 3 3s3-1.346 3-3a3 3 0 0 0-2-2.816v-2.61l11-6.416L26.015 9L3.496 22.136a1 1 0 0 0 0 1.728l12 7a1 1 0 0 0 1.008 0l12-7A1 1 0 0 0 29 23v-3.184A3 3 0 0 0 31 17M4 16a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2m24 2a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2"></svg:path>`,
})
export class CarbonProcessAutomateIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonProductIcon],svg[carbon-product-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18h6v2H8zm0 4h10v2H8z"></svg:path><svg:path fill="currentColor" d="M26 4H6a2.003 2.003 0 0 0-2 2v20a2.003 2.003 0 0 0 2 2h20a2.003 2.003 0 0 0 2-2V6a2.003 2.003 0 0 0-2-2m-8 2v4h-4V6ZM6 26V6h6v6h8V6h6l.001 20Z"></svg:path>`,
})
export class CarbonProductIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonProgressBarIcon],svg[carbon-progress-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 21H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2M4 13v6h24v-6Z"></svg:path><svg:path fill="currentColor" d="M6 15h14v2H6z"></svg:path>`,
})
export class CarbonProgressBarIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonProgressBarRoundIcon],svg[carbon-progress-bar-round-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 22a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6m0-10a4 4 0 1 0 4 4a4.005 4.005 0 0 0-4-4"></svg:path><svg:path fill="currentColor" d="M16 26a10.02 10.02 0 0 1-7.453-3.332l1.49-1.334A8 8 0 1 0 16 8V6a10 10 0 0 1 0 20"></svg:path><svg:path fill="currentColor" d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4"></svg:path>`,
})
export class CarbonProgressBarRoundIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPromoteIcon],svg[carbon-promote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 21l1.4 1.4l-2.6 2.6H23v2h-8.2l2.6 2.6L16 31l-5-5zm-8.738 2.323l7.99-7.99l1.415 1.414l-7.99 7.99z"></svg:path><svg:path fill="currentColor" d="M23 22h-2v-5c0-.3.1-.5.3-.7l4.1-4.1c1.7-1.7 2.6-4 2.6-6.4V4h-1.9c-2.4 0-4.7.9-6.4 2.6l-4.1 4.1q-.15.3-.6.3H7.5l-2.6 3.3l5.3.8l-.3 2l-7-1c-.4-.1-.7-.3-.8-.6s-.1-.7.1-1l4-5c.2-.4.5-.5.8-.5h7.6l3.8-3.8c2-2.1 4.8-3.2 7.7-3.2H28c1.1 0 2 .9 2 2v1.9c0 2.9-1.1 5.7-3.2 7.8L23 17.4z"></svg:path>`,
})
export class CarbonPromoteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPromptSessionIcon],svg[carbon-prompt-session-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m27 25.586l-2-2V21h-2v3.414L25.586 27z"></svg:path><svg:path fill="currentColor" d="M24 31c-3.86 0-7-3.14-7-7s3.14-7 7-7s7 3.14 7 7s-3.14 7-7 7m0-12c-2.757 0-5 2.243-5 5s2.243 5 5 5s5-2.243 5-5s-2.243-5-5-5m4-4h2V5c0-1.103-.897-2-2-2h-3v2h3z"></svg:path><svg:circle cx="9" cy="13" r="2" fill="currentColor"></svg:circle><svg:circle cx="16" cy="13" r="2" fill="currentColor"></svg:circle><svg:circle cx="23" cy="13" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M7 23H4c-1.103 0-2-.897-2-2V5c0-1.103.897-2 2-2h3v2H4v16h3z"></svg:path>`,
})
export class CarbonPromptSessionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPromptTemplateIcon],svg[carbon-prompt-template-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M31.5 23c-.827 0-1.5-.673-1.5-1.5V20c0-1.102-.897-2-2-2h-2v2h2v1.5c0 .98.407 1.864 1.058 2.5A3.5 3.5 0 0 0 28 26.5V28h-2v2h2c1.103 0 2-.897 2-2v-1.5c0-.827.673-1.5 1.5-1.5h.5v-2zM16 20v1.5c0 .827-.673 1.5-1.5 1.5H14v2h.5c.827 0 1.5.673 1.5 1.5V28c0 1.103.897 2 2 2h2v-2h-2v-1.5c0-.98-.407-1.864-1.058-2.5A3.5 3.5 0 0 0 18 21.5V20h2v-2h-2c-1.103 0-2 .898-2 2m12-5h2V5c0-1.103-.897-2-2-2h-3v2h3z"></svg:path><svg:circle cx="23" cy="13" r="2" fill="currentColor"></svg:circle><svg:circle cx="16" cy="13" r="2" fill="currentColor"></svg:circle><svg:circle cx="9" cy="13" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M7 23H4c-1.103 0-2-.897-2-2V5c0-1.103.897-2 2-2h3v2H4v16h3z"></svg:path>`,
})
export class CarbonPromptTemplateIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPropertyRelationshipIcon],svg[carbon-property-relationship-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m30 16l-8 8l-1.4-1.4l6.6-6.6l-6.6-6.6L22 8zm-18-1h8v2h-8zM2 16l8-8l1.4 1.4L4.8 16l6.6 6.6L10 24z"></svg:path>`,
})
export class CarbonPropertyRelationshipIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPullRequestIcon],svg[carbon-pull-request-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 22.142V9c0-2.206-1.794-4-4-4h-4.172l2.586-2.586L18 1l-5 5l5 5l1.414-1.414L16.828 7H21c1.103 0 2 .898 2 2v13.142c-1.72.447-3 2-3 3.858c0 2.206 1.794 4 4 4s4-1.794 4-4c0-1.858-1.28-3.41-3-3.858M24 28c-1.103 0-2-.897-2-2s.897-2 2-2s2 .898 2 2s-.897 2-2 2M4 6c0 1.858 1.28 3.41 3 3.858v12.284c-1.72.447-3 2-3 3.858c0 2.206 1.794 4 4 4s4-1.794 4-4c0-1.859-1.28-3.41-3-3.858V9.858c1.72-.447 3-2 3-3.858c0-2.206-1.794-4-4-4S4 3.794 4 6m6 20c0 1.103-.897 2-2 2s-2-.897-2-2s.897-2 2-2s2 .898 2 2m0-20c0 1.103-.897 2-2 2s-2-.897-2-2s.897-2 2-2s2 .897 2 2"></svg:path>`,
})
export class CarbonPullRequestIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPunctuationCheckIcon],svg[carbon-punctuation-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23 27.178l-2.59-2.59L19 26l4 4l7-7l-1.41-1.412zM14 16h-3v-.169a4.02 4.02 0 0 1 1.942-3.43l1.142-.687L13.054 10l-1.14.686A6.03 6.03 0 0 0 9 15.831V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1m8 0h-3v-.169a4.02 4.02 0 0 1 1.942-3.43l1.142-.687L21.054 10l-1.14.686A6.03 6.03 0 0 0 17 15.831V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1M12 28H6c-1.103 0-2-.897-2-2V6c0-1.103.897-2 2-2h20c1.103 0 2 .897 2 2v11h-2V6H6v20h6z"></svg:path>`,
})
export class CarbonPunctuationCheckIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonPurchaseIcon],svg[carbon-purchase-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2m0 2v3H4V8ZM4 24V13h24v11Z"></svg:path><svg:path fill="currentColor" d="M6 20h10v2H6z"></svg:path>`,
})
export class CarbonPurchaseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonQcLaunchIcon],svg[carbon-qc-launch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M25 22h-6a2.002 2.002 0 0 1-2-2V10a2.002 2.002 0 0 1 2-2h6v2h-6v10h6z" fill="currentColor"></svg:path><svg:path d="M13 8H9a2.002 2.002 0 0 0-2 2v10a2.002 2.002 0 0 0 2 2h1v2a2.002 2.002 0 0 0 2 2h2v-2h-2v-2h1a2.002 2.002 0 0 0 2-2V10a2.002 2.002 0 0 0-2-2zM9 20V10h4v10z" fill="currentColor"></svg:path><svg:path d="M28 30H4a2.002 2.002 0 0 1-2-2V4a2.002 2.002 0 0 1 2-2h24a2.002 2.002 0 0 1 2 2v24a2.003 2.003 0 0 1-2 2zM4 4v24h24V4z" fill="currentColor"></svg:path>`,
})
export class CarbonQcLaunchIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonQiskitIcon],svg[carbon-qiskit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 1C7.729 1 1 7.729 1 16s6.729 15 15 15s15-6.729 15-15S24.271 1 16 1m6.583 20.5A2.99 2.99 0 0 0 20 20c-.182 0-.359.023-.532.054l-1.726-3.02C24.53 17.271 27.864 18.858 28 19.5c-.098.462-1.89 1.414-5.416 2M20 22a1.001 1.001 0 0 1 0 2a1 1 0 0 1 0-2M3 16c0-.543.044-1.076.11-1.602c.855.666 2.155 1.197 3.723 1.602c-1.568.405-2.868.937-3.724 1.603A13 13 0 0 1 3 16m6.418-5.5A2.99 2.99 0 0 0 12 12c.182 0 .359-.023.532-.054l1.726 3.02C7.454 14.728 4.119 13.134 4 12.506c.086-.461 1.878-1.416 5.417-2.005ZM12 10a1.001 1.001 0 0 1 0-2a1.001 1.001 0 0 1 0 2m13.167 6c1.568-.405 2.868-.937 3.724-1.603c.065.527.109 1.06.109 1.603s-.044 1.076-.11 1.602c-.855-.666-2.155-1.197-3.723-1.602M16 3c4.902 0 9.176 2.729 11.39 6.745c-2.289-.996-5.8-1.551-9.39-1.7v2c6.61.269 9.866 1.823 10 2.455c-.144.676-3.854 2.406-11.424 2.492l-2.312-4.046c.452-.525.736-1.2.736-1.946c0-1.654-1.346-3-3-3a3 3 0 0 0-2.953 2.537c-1.706.284-3.236.684-4.435 1.205C6.827 5.728 11.1 3 16 3m0 26c-4.902 0-9.176-2.728-11.39-6.745c2.289.996 5.8 1.551 9.39 1.7v-2c-6.628-.27-9.882-1.83-10-2.45c.126-.673 3.836-2.41 11.424-2.497l2.312 4.046A2.97 2.97 0 0 0 17 23c0 1.654 1.346 3 3 3a3 3 0 0 0 2.953-2.537c1.706-.284 3.236-.684 4.435-1.205C25.173 26.272 20.9 29 16 29"></svg:path>`,
})
export class CarbonQiskitIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonQqPlotIcon],svg[carbon-qq-plot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="20" cy="4" r="2" fill="currentColor"></svg:circle><svg:circle cx="8" cy="16" r="2" fill="currentColor"></svg:circle><svg:circle cx="28" cy="12" r="2" fill="currentColor"></svg:circle><svg:circle cx="11" cy="7" r="2" fill="currentColor"></svg:circle><svg:circle cx="16" cy="24" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M30 3.413L28.586 2L4 26.585V2H2v26a2 2 0 0 0 2 2h26v-2H5.413Z"></svg:path>`,
})
export class CarbonQqPlotIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonQrCodeIcon],svg[carbon-qr-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 28v-2h2v2zm-6-4v-2h2v2zm0 6h4v-2h-2v-2h-2zm8-4v-4h2v4zm2 0h2v4h-4v-2h2zm-2-6v-2h4v4h-2v-2zm-2 0h-2v4h-2v2h4zm-6 0v-2h4v2zM6 22h4v4H6z"></svg:path><svg:path fill="currentColor" d="M14 30H2V18h12zM4 28h8v-8H4zM22 6h4v4h-4z"></svg:path><svg:path fill="currentColor" d="M30 14H18V2h12zm-10-2h8V4h-8zM6 6h4v4H6z"></svg:path><svg:path fill="currentColor" d="M14 14H2V2h12ZM4 12h8V4H4Z"></svg:path>`,
})
export class CarbonQrCodeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonQuadrantPlotIcon],svg[carbon-quadrant-plot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 15H17V2h-2v13H2v2h13v13h2V17h13z"></svg:path><svg:path fill="currentColor" d="M5 30a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1M8 8a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1m14 9a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1"></svg:path><svg:circle cx="11" cy="11" r="2" fill="currentColor"></svg:circle><svg:circle cx="11" cy="21" r="2" fill="currentColor"></svg:circle><svg:circle cx="21" cy="21" r="2" fill="currentColor"></svg:circle><svg:circle cx="22" cy="28" r="2" fill="currentColor"></svg:circle><svg:circle cx="28" cy="24" r="2" fill="currentColor"></svg:circle><svg:circle cx="4" cy="11" r="2" fill="currentColor"></svg:circle><svg:circle cx="28" cy="4" r="2" fill="currentColor"></svg:circle>`,
})
export class CarbonQuadrantPlotIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonQueryIcon],svg[carbon-query-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="11" cy="15.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M12 12h-2V8h2a2 2 0 0 0 0-4h-2a2 2 0 0 0-2 2v.5H6V6a4.005 4.005 0 0 1 4-4h2a4 4 0 0 1 0 8Z"></svg:path><svg:path fill="currentColor" d="M22.448 21.034a10.97 10.97 0 0 0-2.527-16.29l-.999 1.73A8.997 8.997 0 1 1 5 14H3a10.992 10.992 0 0 0 18.034 8.448L28.586 30L30 28.586Z"></svg:path>`,
})
export class CarbonQueryIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonQueryQueueIcon],svg[carbon-query-queue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6h18v2H10zm0 6h18v2H10zm5 6h13v2H15zm-5 6h18v2H10zM4 14l7 5l-7 5z"></svg:path>`,
})
export class CarbonQueryQueueIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonQuestionAnsweringIcon],svg[carbon-question-answering-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 15.18l-2.59-2.59L16 14l4 4l6-6l-1.41-1.41zM8 18h2v2H8zm4-9H7v2h4v2H8v3h2v-1h2a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1"></svg:path><svg:path fill="currentColor" d="M17.736 30L16 29l4-7h6c1.107 0 2-.893 2-2V8c0-1.107-.893-2-2-2H6c-1.107 0-2 .893-2 2v12c0 1.107.893 2 2 2h9v2H6a4 4 0 0 1-4-4V8c0-2.21 1.79-4 4-4h20c2.21 0 4 1.79 4 4v12a4 4 0 0 1-4 4h-4.835z"></svg:path>`,
})
export class CarbonQuestionAnsweringIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonQueuedIcon],svg[carbon-queued-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 20h8v2h-8zm0 4h8v2h-8zm0 4h8v2h-8zm-4-4h2v2h-2zm0-4h2v2h-2zm0 8h2v2h-2zM6.815 8.293a12.1 12.1 0 0 1 3.192-2.673l-1-1.73a14.1 14.1 0 0 0-3.723 3.118zm18.37 0l1.53-1.285a14.1 14.1 0 0 0-3.723-3.118l-.999 1.73a12.1 12.1 0 0 1 3.192 2.673M4.737 11.9l-1.878-.683A13.9 13.9 0 0 0 2 16h2a11.9 11.9 0 0 1 .737-4.1m2.078 11.807A12 12 0 0 1 4.737 20.1l-1.878.683a14 14 0 0 0 2.425 4.21zM27.263 11.9A11.9 11.9 0 0 1 28 16h2a13.9 13.9 0 0 0-.86-4.783zM13.918 27.807a11.9 11.9 0 0 1-3.911-1.427l-1 1.73a13.9 13.9 0 0 0 4.564 1.664zm0-23.614a11.3 11.3 0 0 1 4.164 0l.347-1.967a13.2 13.2 0 0 0-4.858 0z"></svg:path>`,
})
export class CarbonQueuedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonQuotesIcon],svg[carbon-quotes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 15H6.11A9 9 0 0 1 10 8.86l1.79-1.2L10.69 6L8.9 7.2A11 11 0 0 0 4 16.35V23a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2m14 0h-5.89A9 9 0 0 1 24 8.86l1.79-1.2L24.7 6l-1.8 1.2a11 11 0 0 0-4.9 9.15V23a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonQuotesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRadarIcon],svg[carbon-radar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 3.414L28.586 2L15.293 15.293a1 1 0 0 0 1.414 1.414l4.18-4.18A5.996 5.996 0 1 1 16 10V8a8.011 8.011 0 1 0 6.316 3.098l2.847-2.847A11.88 11.88 0 0 1 28 16A12 12 0 1 1 16 4V2a14 14 0 1 0 14 14a13.86 13.86 0 0 0-3.422-9.164Z"></svg:path>`,
})
export class CarbonRadarIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRadarEnhancedIcon],svg[carbon-radar-enhanced-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 3.415L28.585 2L17.293 13.293a1 1 0 1 0 1.414 1.414l3.455-3.455A4.982 4.982 0 0 1 18 19a5 5 0 0 1-.607-.05a8.04 8.04 0 0 0-4.342-4.342A4.9 4.9 0 0 1 18 9V7a7.01 7.01 0 0 0-7 7c0 .023.006.047.006.07A8 8 0 0 0 10 14a8 8 0 0 0-1.988.26C8.009 14.173 8 14.088 8 14A10.01 10.01 0 0 1 18 4V2A12.014 12.014 0 0 0 6 14q.001.532.047 1.054a7.994 7.994 0 1 0 10.9 10.898q.525.046 1.053.048a11.985 11.985 0 0 0 9.154-19.74ZM15.91 21h-1.954a12 12 0 0 0-1.218-4.332A6.01 6.01 0 0 1 15.91 21M4.09 23h1.954a12 12 0 0 0 1.218 4.333A6.01 6.01 0 0 1 4.09 23m1.953-2H4.09a6.01 6.01 0 0 1 3.171-4.332A12 12 0 0 0 6.043 21M10 27.986A10 10 0 0 1 8.055 23h3.89A10 10 0 0 1 10 27.986M8.055 21A10 10 0 0 1 10 16.015A10 10 0 0 1 11.945 21Zm4.683 6.333A12 12 0 0 0 13.957 23h1.953a6.01 6.01 0 0 1-3.172 4.333M28 14a10.01 10.01 0 0 1-10 10c-.087 0-.173-.01-.26-.012a7.6 7.6 0 0 0 .19-2.994c.024 0 .047.006.07.006a7 7 0 0 0 5.605-11.191l2.132-2.132A9.95 9.95 0 0 1 28 14"></svg:path>`,
})
export class CarbonRadarEnhancedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRadarWeatherIcon],svg[carbon-radar-weather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 3.415L28.585 2L17.293 13.293a1 1 0 1 0 1.414 1.414l3.455-3.455a4.965 4.965 0 0 1-3.881 7.72a7.05 7.05 0 0 0-5.144-3.873A4.943 4.943 0 0 1 18 9V7a6.955 6.955 0 0 0-6.909 8.08a6.9 6.9 0 0 0-2.852 1.06A9.97 9.97 0 0 1 18 4V2A11.976 11.976 0 0 0 6.573 17.636a6.9 6.9 0 0 0-1.367 2.706A4.995 4.995 0 0 0 7 30h10a4.99 4.99 0 0 0 4.968-4.68A12.04 12.04 0 0 0 30 14a11.87 11.87 0 0 0-2.839-7.747ZM17 28H7a2.995 2.995 0 0 1-.696-5.908l.658-.157l.099-.67a4.992 4.992 0 0 1 9.878 0l.099.67l.658.156A2.995 2.995 0 0 1 17 28m11-14a10.035 10.035 0 0 1-6.312 9.291a4.96 4.96 0 0 0-2.02-2.5a6.992 6.992 0 0 0 3.938-10.982l2.131-2.132A9.9 9.9 0 0 1 28 14"></svg:path>`,
})
export class CarbonRadarWeatherIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRadioIcon],svg[carbon-radio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 10h-4V2h-2v8h-9V8h-2v2H8V8H6v2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2M4 28V12h24v16Z"></svg:path><svg:path fill="currentColor" d="M10 26a4 4 0 1 1 4-4a4 4 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2m-3-6h6v2H7zm10 2h9v2h-9zm0 4h9v2h-9zm0 4h9v2h-9z"></svg:path>`,
})
export class CarbonRadioIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRadioButtonIcon],svg[carbon-radio-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class CarbonRadioButtonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRadioButtonCheckedIcon],svg[carbon-radio-button-checked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m0 26a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path><svg:path fill="currentColor" d="M16 10a6 6 0 1 0 6 6a6 6 0 0 0-6-6"></svg:path>`,
})
export class CarbonRadioButtonCheckedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRadioCombatIcon],svg[carbon-radio-combat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 26a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2m7 0h9v2h-9zm0 4h9v2h-9z"></svg:path><svg:path fill="currentColor" d="M20 12h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v1h-6a4.005 4.005 0 0 0-4 4v3H6V4H4v10a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V16a2 2 0 0 0-2-2H10v-3a2 2 0 0 1 2-2h6v1a2 2 0 0 0 2 2m4-6h4v4h-4Zm-4 0h2v4h-2Zm8 22H4V16h24Z"></svg:path>`,
})
export class CarbonRadioCombatIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRadioPushToTalkIcon],svg[carbon-radio-push-to-talk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 11h6v2h-6zm0 4h6v2h-6z"></svg:path><svg:circle cx="16" cy="23" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M22 7h-1V2h-2v5h-9a2 2 0 0 0-2 2v2H6v2h2v2H6v2h2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M10 28V9h12v19Z"></svg:path>`,
})
export class CarbonRadioPushToTalkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRagIcon],svg[carbon-rag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 28h-2c-3.86 0-7-3.14-7-7v-2h2v2c0 2.757 2.243 5 5 5h2zm16-9h-9a2.003 2.003 0 0 0-2 2v5a2 2 0 0 0 2 2h3v-2h-3v-5h9v5h-2.535l-2.594 3.89L24.535 31l2-3H28a2 2 0 0 0 2-2v-5a2.003 2.003 0 0 0-2-2m1-4v-4c0-3.86-3.14-7-7-7h-3v2h3c2.757 0 5 2.243 5 5v4zM6 10h3v2H6z"></svg:path><svg:path fill="currentColor" d="M12.606 6.436L10.081 2.75A2 2 0 0 0 8.519 2H4c-1.103 0-2 .898-2 2v10c0 1.103.897 2 2 2h7c1.103 0 2-.897 2-2V7.625c0-.453-.156-.896-.394-1.19M4 14V4h4v3a1 1 0 0 0 1 1h2v6z"></svg:path>`,
})
export class CarbonRagIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRainIcon],svg[carbon-rain-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.5 22h-15A6.5 6.5 0 0 1 7.2 9.14a9 9 0 0 1 17.6 0A6.5 6.5 0 0 1 23.5 22M16 4a7 7 0 0 0-6.94 6.14L9 11h-.86a4.5 4.5 0 0 0 .36 9h15a4.5 4.5 0 0 0 .36-9H23l-.1-.82A7 7 0 0 0 16 4m-2 26a.93.93 0 0 1-.45-.11a1 1 0 0 1-.44-1.34l2-4a1 1 0 1 1 1.78.9l-2 4A1 1 0 0 1 14 30m6 0a.93.93 0 0 1-.45-.11a1 1 0 0 1-.44-1.34l2-4a1 1 0 1 1 1.78.9l-2 4A1 1 0 0 1 20 30M8 30a.93.93 0 0 1-.45-.11a1 1 0 0 1-.44-1.34l2-4a1 1 0 1 1 1.78.9l-2 4A1 1 0 0 1 8 30"></svg:path>`,
})
export class CarbonRainIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRainDrizzleIcon],svg[carbon-rain-drizzle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 30a1 1 0 0 1-.894-1.447l2-4a1 1 0 1 1 1.788.894l-2 4A1 1 0 0 1 11 30"></svg:path><svg:path fill="currentColor" d="M24.8 9.136a8.994 8.994 0 0 0-17.6 0A6.497 6.497 0 0 0 8.5 22h10.881l-1.276 2.553a1 1 0 0 0 1.789.894L21.618 22H23.5a6.497 6.497 0 0 0 1.3-12.864M23.5 20h-15a4.498 4.498 0 0 1-.356-8.981l.816-.064l.099-.812a6.994 6.994 0 0 1 13.883 0l.099.812l.815.064A4.498 4.498 0 0 1 23.5 20"></svg:path>`,
})
export class CarbonRainDrizzleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRainDropIcon],svg[carbon-rain-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 24v-2a3.3 3.3 0 0 0 3-3h2a5.267 5.267 0 0 1-5 5"></svg:path><svg:path fill="currentColor" d="M16 28a9.01 9.01 0 0 1-9-9a10 10 0 0 1 1.494-4.955l6.659-10.608a1.04 1.04 0 0 1 1.694 0l6.63 10.556A10.06 10.06 0 0 1 25 19a9.01 9.01 0 0 1-9 9m0-22.152l-5.782 9.208A8 8 0 0 0 9 19a7 7 0 0 0 14 0a8.06 8.06 0 0 0-1.248-3.995Z"></svg:path>`,
})
export class CarbonRainDropIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRainHeavyIcon],svg[carbon-rain-heavy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 30a1 1 0 0 1-.894-1.447l2-4a1 1 0 1 1 1.788.894l-2 4A1 1 0 0 1 17 30m-9 0a1 1 0 0 1-.894-1.447l2-4a1 1 0 1 1 1.788.894l-2 4A1 1 0 0 1 8 30"></svg:path><svg:path fill="currentColor" d="M30 15.5a6.53 6.53 0 0 0-5.2-6.364a8.994 8.994 0 0 0-17.6 0a6.49 6.49 0 0 0-1.497 12.222l-1.597 3.195a1 1 0 1 0 1.789.894L7.617 22h6.765l-1.276 2.553a1 1 0 1 0 1.789.894L16.618 22h6.764l-1.276 2.553a1 1 0 1 0 1.789.894l1.944-3.89A6.51 6.51 0 0 0 30 15.5M23.5 20h-15a4.498 4.498 0 0 1-.356-8.981l.816-.064l.099-.812a6.994 6.994 0 0 1 13.883 0l.099.812l.815.064A4.498 4.498 0 0 1 23.5 20"></svg:path>`,
})
export class CarbonRainHeavyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRainScatteredIcon],svg[carbon-rain-scattered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.508 32a1 1 0 0 1-.448-.105a1 1 0 0 1-.449-1.342l1.494-3a1.003 1.003 0 0 1 1.794.894l-1.493 3a1 1 0 0 1-.898.553m17.956-15.12l1.414-1.415L30 17.586l-1.414 1.415zM29 10h3v2h-3zm-2.536-4.878L28.586 3L30 4.414l-2.122 2.122zM20 0h2v3h-2zm-8 4.414L13.414 3l2.122 2.122l-1.414 1.414zM27 11a5.996 5.996 0 0 0-11.366-2.669A7.4 7.4 0 0 0 13.5 8a7.55 7.55 0 0 0-7.15 5.244A5.993 5.993 0 0 0 8 25h7.382l-1.276 2.553a1 1 0 1 0 1.789.894L17.618 25H19a5.985 5.985 0 0 0 5.216-8.946A6 6 0 0 0 27 11m-8 12H8a3.993 3.993 0 0 1-.673-7.93l.663-.112l.146-.656a5.496 5.496 0 0 1 10.73 0l.145.656l.663.113A3.993 3.993 0 0 1 19 23m3.927-8.51a6 6 0 0 0-2.278-1.246a7.52 7.52 0 0 0-3.185-4.069a3.987 3.987 0 1 1 5.463 5.314"></svg:path>`,
})
export class CarbonRainScatteredIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRainScatteredNightIcon],svg[carbon-rain-scattered-night-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.508 32a1 1 0 0 1-.448-.105a1 1 0 0 1-.449-1.342l1.494-3a1.003 1.003 0 0 1 1.794.894l-1.493 3a1 1 0 0 1-.898.553m21.336-18.965a1.52 1.52 0 0 0-1.23-.866a5.36 5.36 0 0 1-3.41-1.716a6.47 6.47 0 0 1-1.285-6.393a1.6 1.6 0 0 0-.3-1.546a1.45 1.45 0 0 0-1.36-.492l-.019.002a7.855 7.855 0 0 0-6.105 6.48A7.4 7.4 0 0 0 13.5 8a7.55 7.55 0 0 0-7.15 5.244A5.993 5.993 0 0 0 8 25h7.382l-1.276 2.553a1 1 0 1 0 1.789.894L17.618 25H19a5.955 5.955 0 0 0 5.88-7.145a7.5 7.5 0 0 0 4.867-3.3a1.54 1.54 0 0 0 .097-1.52M19 23H8a3.993 3.993 0 0 1-.673-7.93l.663-.112l.145-.656a5.496 5.496 0 0 1 10.73 0l.145.656l.663.113A3.993 3.993 0 0 1 19 23m5.15-7.048a5.96 5.96 0 0 0-3.5-2.708a7.5 7.5 0 0 0-2.621-3.694a6.01 6.01 0 0 1 3.77-5.334a8.46 8.46 0 0 0 1.94 7.597a7.4 7.4 0 0 0 3.901 2.228a5.44 5.44 0 0 1-3.49 1.911"></svg:path>`,
})
export class CarbonRainScatteredNightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRawIcon],svg[carbon-raw-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m29.2 9l-.34 8l-.26 4.54l-.41-3.54l-.68-5.46h-2.02L24.81 18l-.41 3.54l-.26-4.54l-.34-8H22l1 14h2.27l.76-4.93l.46-4.07l.01-.03l.01.03l.46 4.07l.76 4.93H30l1-14zM18 9h-4a2 2 0 0 0-2 2v12h2v-5h4v5h2V11a2 2 0 0 0-2-2m-4 7v-5h4v5zm-4-1v-4a2 2 0 0 0-2-2H2v14h2v-6h1.48l2.34 6H10l-2.37-6H8a2 2 0 0 0 2-2m-6-4h4v4H4z"></svg:path>`,
})
export class CarbonRawIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonReceiptIcon],svg[carbon-receipt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 16h2v2h-2zM9 16h8v2H9zm12-4h2v2h-2zM9 12h8v2H9zm0-4h14v2H9z"></svg:path><svg:path fill="currentColor" d="M25 2H7a2 2 0 0 0-2 2v25a1 1 0 0 0 1 1h1a1 1 0 0 0 .8-.4l2.2-2.933l2.2 2.933a1.035 1.035 0 0 0 1.6 0l2.2-2.933l2.2 2.933a1.035 1.035 0 0 0 1.6 0l2.2-2.933l2.2 2.933a1 1 0 0 0 .8.4h1a1 1 0 0 0 1-1V4a2 2 0 0 0-2-2m0 25.333L22.8 24.4a1.035 1.035 0 0 0-1.6 0L19 27.333L16.8 24.4a1.035 1.035 0 0 0-1.6 0L13 27.333L10.8 24.4a1.035 1.035 0 0 0-1.6 0L7 27.333V4h18Z"></svg:path>`,
})
export class CarbonReceiptIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRecentlyViewedIcon],svg[carbon-recently-viewed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.59 22L15 16.41V7h2v8.58l5 5.01z"></svg:path><svg:path fill="currentColor" d="M16 2A13.94 13.94 0 0 0 6 6.23V2H4v8h8V8H7.08A12 12 0 1 1 4 16H2A14 14 0 1 0 16 2"></svg:path>`,
})
export class CarbonRecentlyViewedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRecommendIcon],svg[carbon-recommend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a9 9 0 0 0-6 15.69V30l6-4l6 4V17.69A9 9 0 0 0 16 2m4 24.26l-2.89-1.92L16 23.6l-1.11.74L12 26.26v-7.21a8.88 8.88 0 0 0 8 0ZM20.89 16A7 7 0 1 1 23 11a7 7 0 0 1-2.11 5"></svg:path>`,
})
export class CarbonRecommendIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRecordingIcon],svg[carbon-recording-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 4A12 12 0 1 1 4 16A12 12 0 0 1 16 4m0-2a14 14 0 1 0 14 14A14 14 0 0 0 16 2"></svg:path><svg:path fill="currentColor" d="M16 12a4 4 0 1 1-4 4a4 4 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6"></svg:path>`,
})
export class CarbonRecordingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRecordingFilledIcon],svg[carbon-recording-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16" cy="16" r="4" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14s14-6.3 14-14S23.7 2 16 2m0 20c-3.3 0-6-2.7-6-6s2.7-6 6-6s6 2.7 6 6s-2.7 6-6 6"></svg:path>`,
})
export class CarbonRecordingFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRecordingFilledAltIcon],svg[carbon-recording-filled-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14s14-6.3 14-14S23.7 2 16 2m0 20c-3.3 0-6-2.7-6-6s2.7-6 6-6s6 2.7 6 6s-2.7 6-6 6"></svg:path>`,
})
export class CarbonRecordingFilledAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRecycleIcon],svg[carbon-recycle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m29.508 22.255l-2.078-3.74l-1.748.97l2.078 3.742a1.85 1.85 0 0 1-.023 1.853c-.34.576-.941.92-1.61.92H18.83l2.58-2.59L20 22l-5 5l5 5l1.41-1.41L18.83 28h7.298a3.83 3.83 0 0 0 3.332-1.906a3.83 3.83 0 0 0 .048-3.84zM5.873 26a1.85 1.85 0 0 1-1.61-.92a1.85 1.85 0 0 1-.022-1.853l4.11-7.4l1.049 3.52l1.912-.567L9.303 12l-6.78 2.008l.567 1.912l3.493-1.03l-4.09 7.365a3.83 3.83 0 0 0 .047 3.84A3.83 3.83 0 0 0 5.873 28H12v-2zM25.51 9.654l-1.048 3.519L19.35 3.97C18.664 2.737 17.412 2 16 2s-2.665.737-3.35 1.971L9.57 9.515l1.749.97l3.08-5.543C14.725 4.352 15.324 4 16 4s1.274.353 1.602.942l5.092 9.167l-3.494-1.03l-.566 1.913L25.414 17l2.008-6.78z"></svg:path>`,
})
export class CarbonRecycleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRedoIcon],svg[carbon-redo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10h12.185l-3.587-3.586L22 5l6 6l-6 6l-1.402-1.415L24.182 12H12a6 6 0 0 0 0 12h8v2h-8a8 8 0 0 1 0-16"></svg:path>`,
})
export class CarbonRedoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRefEvapotranspirationIcon],svg[carbon-ref-evapotranspiration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 12a3.9 3.9 0 0 1-4-3.777a3.9 3.9 0 0 1 .653-2.064l2.517-3.745a1.038 1.038 0 0 1 1.66 0l2.485 3.696A3.97 3.97 0 0 1 18 8.223A3.9 3.9 0 0 1 14 12m0-7.237l-1.656 2.463a1.9 1.9 0 0 0-.344.997A1.9 1.9 0 0 0 14 10a1.9 1.9 0 0 0 2-1.777a2 2 0 0 0-.375-1.047zM7.5 26A5.385 5.385 0 0 1 2 20.751a5.4 5.4 0 0 1 .874-2.831l3.616-5.382a1.217 1.217 0 0 1 2.02 0l3.55 5.277a5.5 5.5 0 0 1 .94 2.936A5.385 5.385 0 0 1 7.5 26m0-11.38l-2.935 4.367A3.36 3.36 0 0 0 4 20.75A3.386 3.386 0 0 0 7.5 24a3.386 3.386 0 0 0 3.5-3.249a3.44 3.44 0 0 0-.63-1.867zM25 2l-5 5l1.414 1.414L24 5.828V16a4.005 4.005 0 0 1-4 4h-4v2h4a6.007 6.007 0 0 0 6-6V5.828l2.586 2.586L30 7zM2 28h28v2H2z"></svg:path>`,
})
export class CarbonRefEvapotranspirationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonReferenceArchitectureIcon],svg[carbon-reference-architecture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="18" cy="26" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M28 20c1.103 0 2-.897 2-2v-4c0-1.102-.897-2-2-2h-1V7c0-1.102-.897-2-2-2h-5V4c0-1.102-.897-2-2-2h-4c-1.103 0-2 .898-2 2v1H7c-1.103 0-2 .898-2 2v5.142c-1.72.447-3 2-3 3.858s1.28 3.41 3 3.858V25c0 1.103.897 2 2 2h7v1c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-4c0-1.102-.897-2-2-2h-1v-2zm0-2h-4v-4h4zM14 4h4v4h-4zm-2 3v1c0 1.103.897 2 2 2h4c1.103 0 2-.897 2-2V7h5v5h-1c-1.103 0-2 .898-2 2v1H9.858A4 4 0 0 0 7 12.142V7zm-8 9c0-1.102.897-2 2-2s2 .898 2 2s-.897 2-2 2s-2-.897-2-2m24 12H16v-4h12zm-3-6h-9c-1.103 0-2 .898-2 2v1H7v-5.142A4 4 0 0 0 9.858 17H22v1c0 1.103.897 2 2 2h1z"></svg:path>`,
})
export class CarbonReferenceArchitectureIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonReflectHorizontalIcon],svg[carbon-reflect-horizontal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.386 15.21l9-7A1 1 0 0 1 30 9v14a1 1 0 0 1-1.614.79l-9-7a1 1 0 0 1 0-1.58M17 30h-2V2h2zm-4-14a1 1 0 0 1-.386.79l-9 7A1 1 0 0 1 2 23V9a1 1 0 0 1 1.614-.79l9 7A1 1 0 0 1 13 16m-9 4.956L10.371 16L4 11.044Z"></svg:path>`,
})
export class CarbonReflectHorizontalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonReflectVerticalIcon],svg[carbon-reflect-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.79 19.386l7 9A1 1 0 0 1 23 30H9a1 1 0 0 1-.79-1.614l7-9a1 1 0 0 1 1.58 0M2 17v-2h28v2zm14-4a1 1 0 0 1-.79-.386l-7-9A1 1 0 0 1 9 2h14a1 1 0 0 1 .79 1.614l-7 9A1 1 0 0 1 16 13m-4.956-9L16 10.371L20.956 4Z"></svg:path>`,
})
export class CarbonReflectVerticalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRegionAnalysisAreaIcon],svg[carbon-region-analysis-area-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs></svg:defs><svg:path d="M30 23v-2h-2v-2h-2v2h-3v-2h-2v2h-2v2h2v3h-2v2h2v2h2v-2h3v2h2v-2h2v-2h-2v-3zm-4 3h-3v-3h3z" fill="currentColor"></svg:path><svg:path d="M16 30a14 14 0 1 1 14-14h-2a12 12 0 1 0-12 12z" fill="currentColor"></svg:path>`,
})
export class CarbonRegionAnalysisAreaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRegionAnalysisVolumeIcon],svg[carbon-region-analysis-volume-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M30 23v-2h-2v-2h-2v2h-3v-2h-2v2h-2v2h2v3h-2v2h2v2h2v-2h3v2h2v-2h2v-2h-2v-3zm-4 3h-3v-3h3z" fill="currentColor"></svg:path><svg:path d="M4.83 20.355A24.953 24.953 0 0 0 15 22.965v-2a22.901 22.901 0 0 1-10.867-3.273A11.979 11.979 0 0 1 4 16a11.985 11.985 0 0 1 .133-1.69a22.928 22.928 0 0 1 23.734 0A11.985 11.985 0 0 1 28 16h2a14 14 0 1 0-14 14v-2a12.01 12.01 0 0 1-11.17-7.645zM16 4a12.01 12.01 0 0 1 11.17 7.646a24.898 24.898 0 0 0-22.34 0A12.01 12.01 0 0 1 16 4z" fill="currentColor"></svg:path>`,
})
export class CarbonRegionAnalysisVolumeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRegistrationIcon],svg[carbon-registration-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M28 25h-8a2.003 2.003 0 0 1-2-2v-3h2v3h8V9h-8v3h-2V9a2.002 2.002 0 0 1 2-2h8a2.002 2.002 0 0 1 2 2v14a2.003 2.003 0 0 1-2 2z" fill="currentColor"></svg:path><svg:path d="M8 15h4v2H8z" fill="currentColor"></svg:path><svg:path d="M20 15h4v2h-4z" fill="currentColor"></svg:path><svg:path d="M14 15h4v2h-4z" fill="currentColor"></svg:path><svg:path d="M12 25H4a2.002 2.002 0 0 1-2-2V9a2.002 2.002 0 0 1 2-2h8a2.002 2.002 0 0 1 2 2v3h-2V9H4v14h8v-3h2v3a2.002 2.002 0 0 1-2 2z" fill="currentColor"></svg:path>`,
})
export class CarbonRegistrationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonReminderIcon],svg[carbon-reminder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m30 23.382l-2-1V20a6.005 6.005 0 0 0-5-5.91V12h-2v2.09A6.005 6.005 0 0 0 16 20v2.382l-2 1V28h6v2h4v-2h6ZM28 26H16v-1.382l2-1V20a4 4 0 0 1 8 0v3.618l2 1Z"></svg:path><svg:path fill="currentColor" d="M28 6a2 2 0 0 0-2-2h-4V2h-2v2h-8V2h-2v2H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h4v-2H6V6h4v2h2V6h8v2h2V6h4v6h2Z"></svg:path>`,
})
export class CarbonReminderIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonReminderMedicalIcon],svg[carbon-reminder-medical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 12v2h1v4a3 3 0 0 1-6 0v-4h1v-2h-3v6a5.01 5.01 0 0 0 4 4.899V24a4 4 0 0 1-8 0v-2.184a3 3 0 1 0-2 0V24a6 6 0 0 0 12 0v-1.101A5.01 5.01 0 0 0 30 18v-6Zm-12 6a1 1 0 1 1-1 1a1 1 0 0 1 1-1"></svg:path><svg:path fill="currentColor" d="M26 4h-4V2h-2v2h-8V2h-2v2H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h4v-2H6V6h4v2h2V6h8v2h2V6h4v4h2V6a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonReminderMedicalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRenewIcon],svg[carbon-renew-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"></svg:path>`,
})
export class CarbonRenewIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRepeatIcon],svg[carbon-repeat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6h20.172l-3.586-3.586L24 1l6 6l-6 6l-1.414-1.414L26.172 8H6v7H4V8a2 2 0 0 1 2-2m3.414 14.414L5.828 24H26v-7h2v7a2 2 0 0 1-2 2H5.828l3.586 3.586L8 31l-6-6l6-6z"></svg:path>`,
})
export class CarbonRepeatIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRepeatOneIcon],svg[carbon-repeat-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6h20.172l-3.586-3.586L24 1l6 6l-6 6l-1.414-1.414L26.172 8H6v7H4V8a2 2 0 0 1 2-2m3.414 14.414L5.828 24H26v-7h2v7a2 2 0 0 1-2 2H5.828l3.586 3.586L8 31l-6-6l6-6z"></svg:path><svg:path fill="currentColor" d="M17 19v-8h-2v1h-2v2h2v5h-2v2h6v-2z"></svg:path>`,
})
export class CarbonRepeatOneIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonReplicateIcon],svg[carbon-replicate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 8h2V4a2 2 0 0 0-2-2h-4v2h4zM17 2h4v2h-4zm11 9h2v4h-2zm0 7v4h-4V10a2 2 0 0 0-2-2H10V4h4V2h-4a2 2 0 0 0-2 2v4H4a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2v-4h4a2 2 0 0 0 2-2v-4zm-6 10H4V10h18z"></svg:path>`,
})
export class CarbonReplicateIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonReplyIcon],svg[carbon-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.88 30a1 1 0 0 1-.88-.5A15.19 15.19 0 0 0 15 22v6a1 1 0 0 1-.62.92a1 1 0 0 1-1.09-.21l-12-12a1 1 0 0 1 0-1.42l12-12a1 1 0 0 1 1.09-.21A1 1 0 0 1 15 4v6.11a17.19 17.19 0 0 1 15 17a16 16 0 0 1-.13 2a1 1 0 0 1-.79.86ZM14.5 20A17.62 17.62 0 0 1 28 26a15.31 15.31 0 0 0-14.09-14a1 1 0 0 1-.91-1V6.41L3.41 16L13 25.59V21a1 1 0 0 1 1-1h.54Z"></svg:path>`,
})
export class CarbonReplyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonReplyAllIcon],svg[carbon-reply-all-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 29a1 1 0 0 1-.768-.36l-10-12a1 1 0 0 1 0-1.28l10-12A1 1 0 0 1 20 4v7.033c7.007.462 11 5.86 11 14.967a1 1 0 0 1-1.8.6c-2.822-3.762-5.391-5.346-9.2-5.571V28a1 1 0 0 1-1 1m-8.698-13L18 25.238V20a1 1 0 0 1 1-1a12.71 12.71 0 0 1 9.841 4.09C28.086 16.556 24.66 13 19 13a1 1 0 0 1-1-1V6.762Z"></svg:path><svg:path fill="currentColor" d="M11.464 28.918L1.232 16.64a1 1 0 0 1 0-1.28L11.464 3.08L13 4.36L3.302 16L13 27.638Z"></svg:path>`,
})
export class CarbonReplyAllIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRepoArtifactIcon],svg[carbon-repo-artifact-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 24v-2h-2.1c-.1-.6-.4-1.2-.7-1.8l1.5-1.5l-1.4-1.4l-1.5 1.5c-.5-.3-1.1-.6-1.8-.7V16h-2v2.1c-.6.1-1.2.4-1.8.7l-1.5-1.5l-1.4 1.4l1.5 1.5c-.3.5-.6 1.1-.7 1.8H16v2h2.1c.1.6.4 1.2.7 1.8l-1.5 1.5l1.4 1.4l1.5-1.5c.5.3 1.1.6 1.8.7V30h2v-2.1c.6-.1 1.2-.4 1.8-.7l1.5 1.5l1.4-1.4l-1.5-1.5c.3-.5.6-1.1.7-1.8zm-7 2c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3"></svg:path><svg:path fill="currentColor" d="M28 8H16l-3.4-3.4c-.4-.4-.9-.6-1.4-.6H4c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h10v-2H4V6h7.2l3.4 3.4l.6.6H28v5h2v-5c0-1.1-.9-2-2-2"></svg:path>`,
})
export class CarbonRepoArtifactIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRepoSourceCodeIcon],svg[carbon-repo-source-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m23.6 21.4l3.6 3.6l-3.6 3.6L25 30l5-5l-5-5zm-3.2 0L16.8 25l3.6 3.6L19 30l-5-5l5-5z"></svg:path><svg:path fill="currentColor" d="M28 8H16l-3.4-3.4c-.4-.4-.9-.6-1.4-.6H4c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h7v-2H4V6h7.2l3.4 3.4l.6.6H28v8h2v-8c0-1.1-.9-2-2-2"></svg:path>`,
})
export class CarbonRepoSourceCodeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonReportIcon],svg[carbon-report-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 18h8v2h-8zm0-5h12v2H10zm0 10h5v2h-5z"></svg:path><svg:path fill="currentColor" d="M25 5h-3V4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v1H7a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M12 4h8v4h-8Zm13 24H7V7h3v3h12V7h3Z"></svg:path>`,
})
export class CarbonReportIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonReportDataIcon],svg[carbon-report-data-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 20h2v4h-2zm5-2h2v6h-2zm-10-4h2v10h-2z"></svg:path><svg:path fill="currentColor" d="M25 5h-3V4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v1H7a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M12 4h8v4h-8Zm13 24H7V7h3v3h12V7h3Z"></svg:path>`,
})
export class CarbonReportDataIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRequestQuoteIcon],svg[carbon-request-quote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 22v6H6V4h10V2H6a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6Z"></svg:path><svg:path fill="currentColor" d="m29.54 5.76l-3.3-3.3a1.6 1.6 0 0 0-2.24 0l-14 14V22h5.53l14-14a1.6 1.6 0 0 0 0-2.24ZM14.7 20H12v-2.7l9.44-9.45l2.71 2.71ZM25.56 9.15l-2.71-2.71l2.27-2.27l2.71 2.71Z"></svg:path>`,
})
export class CarbonRequestQuoteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRequirementDefinitionIcon],svg[carbon-requirement-definition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.179 17.496c0-2.837 1.53-4.676 4.16-4.676c2.803 0 4.092 2.063 4.092 4.521v.722h-5.966v.224c0 1.29.74 2.166 2.184 2.166c1.083 0 1.736-.516 2.287-1.22l1.186 1.323c-.74 1.015-2.046 1.65-3.714 1.65c-2.647 0-4.23-1.839-4.23-4.71m2.287-.928v.137h3.679v-.155c0-1.238-.637-2.08-1.771-2.08c-1.152 0-1.909.86-1.909 2.098zM9.269 22H7V10h5.416c2.183 0 3.541 1.444 3.541 3.714c0 1.65-.756 2.905-2.235 3.403L16.181 22h-2.527l-2.235-4.625h-2.15zm3.122-6.533c.877 0 1.41-.481 1.41-1.358v-.791c0-.877-.533-1.341-1.41-1.341H9.468v3.49z"></svg:path><svg:path fill="currentColor" d="M28 30H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2M4 28h24V4H4z"></svg:path>`,
})
export class CarbonRequirementDefinitionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRequirementUsageIcon],svg[carbon-requirement-usage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.179 17.496c0-2.837 1.53-4.676 4.16-4.676c2.803 0 4.092 2.063 4.092 4.521v.722h-5.966v.224c0 1.29.74 2.166 2.184 2.166c1.083 0 1.736-.516 2.287-1.22l1.186 1.323c-.74 1.015-2.046 1.65-3.714 1.65c-2.647 0-4.23-1.839-4.23-4.71m2.287-.928v.137h3.679v-.155c0-1.238-.637-2.08-1.771-2.08c-1.152 0-1.909.86-1.909 2.098zM9.269 22H7V10h5.416c2.183 0 3.541 1.444 3.541 3.714c0 1.65-.756 2.905-2.235 3.403L16.181 22h-2.527l-2.235-4.625h-2.15zm3.122-6.533c.877 0 1.41-.481 1.41-1.358v-.791c0-.877-.533-1.341-1.41-1.341H9.468v3.49z"></svg:path><svg:path fill="currentColor" d="M21 30H11c-4.963 0-9-4.037-9-9V11c0-4.963 4.037-9 9-9h10c4.963 0 9 4.037 9 9v10c0 4.963-4.037 9-9 9M11 4c-3.86 0-7 3.14-7 7v10c0 3.86 3.14 7 7 7h10c3.86 0 7-3.14 7-7V11c0-3.86-3.14-7-7-7z"></svg:path>`,
})
export class CarbonRequirementUsageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonResearchBlochSphereIcon],svg[carbon-research-bloch-sphere-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.87 7.84l-1.74-1L16 14a2 2 0 1 0 2 2a2 2 0 0 0-.27-1Z"></svg:path><svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2Zm0 2a12 12 0 0 1 11.17 7.65a25.69 25.69 0 0 0-3.69-1.5l-1 1.77a22.7 22.7 0 0 1 5.41 2.39a11.05 11.05 0 0 1 0 3.38A22.92 22.92 0 0 1 16 21a22.92 22.92 0 0 1-11.87-3.31a11.05 11.05 0 0 1 0-3.38A22.8 22.8 0 0 1 15 11V9a25 25 0 0 0-10.17 2.6A12 12 0 0 1 16 4Zm0 24a12 12 0 0 1-11.17-7.65A24.88 24.88 0 0 0 16 23a24.88 24.88 0 0 0 11.17-2.65A12 12 0 0 1 16 28Z"></svg:path>`,
})
export class CarbonResearchBlochSphereIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonResearchHintonPlotIcon],svg[carbon-research-hinton-plot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h4v4H2zm8 0h4v4h-4zm8 0h4v4h-4zm8 0h4v4h-4zM2 10h4v4H2zm8 0h4v4h-4zm8 0h4v4h-4zm8 0h4v4h-4zM2 18h4v4H2zm8 0h4v4h-4zm8 0h4v4h-4zm8 0h4v4h-4zM2 26h4v4H2zm8 0h4v4h-4zm8 0h4v4h-4zm8 0h4v4h-4z"></svg:path>`,
})
export class CarbonResearchHintonPlotIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonResearchMatrixIcon],svg[carbon-research-matrix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 13V4h-2v2h-3v2h3v5h-3v2h8v-2h-3zm-1.5 7a3.5 3.5 0 1 1-3.5 3.5a3.5 3.5 0 0 1 3.5-3.5m0-2a5.5 5.5 0 1 0 5.5 5.5a5.5 5.5 0 0 0-5.5-5.5zM8 30H2V2h6v2H4v24h4v2zm22 0h-6v-2h4V4h-4V2h6v28z"></svg:path>`,
})
export class CarbonResearchMatrixIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonResetIcon],svg[carbon-reset-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 28A12 12 0 1 0 6 16v6.2l-3.6-3.6L1 20l6 6l6-6l-1.4-1.4L8 22.2V16a10 10 0 1 1 10 10Z"></svg:path>`,
})
export class CarbonResetIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonResetAltIcon],svg[carbon-reset-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 8H6.83l3.58-3.59L9 3L3 9l6 6l1.41-1.41L6.83 10H27v16H7v-7H5v7a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonResetAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRestartIcon],svg[carbon-restart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 18A10 10 0 1 1 16 8h6.182l-3.584 3.585L20 13l6-6l-6-6l-1.402 1.414L22.185 6H16a12 12 0 1 0 12 12Z"></svg:path>`,
})
export class CarbonRestartIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRestaurantIcon],svg[carbon-restaurant-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 2h2v10H9z"></svg:path><svg:path fill="currentColor" d="M14 11a4 4 0 0 1-8 0V2H4v9a6 6 0 0 0 5 5.91V30h2V16.91A6 6 0 0 0 16 11V2h-2zm8-9h-1v28h2V20h3a2 2 0 0 0 2-2V8a5.78 5.78 0 0 0-6-6m4 16h-3V4.09c2.88.56 3 3.54 3 3.91z"></svg:path>`,
})
export class CarbonRestaurantIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRestaurantFineIcon],svg[carbon-restaurant-fine-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 11V3a1 1 0 0 0-1-1H19a1 1 0 0 0-1 1v8a6.004 6.004 0 0 0 5 5.91V28h-4v2h10v-2h-4V16.91A6.004 6.004 0 0 0 30 11m-10 0V4h8v7a4 4 0 1 1-8 0m-8-9v9.02a3.964 3.964 0 0 1-3.96 3.96A4.005 4.005 0 0 1 4 11.02V2H2v9.02a5.99 5.99 0 0 0 5 5.865V30h2V16.895a5.965 5.965 0 0 0 5-5.875V2z"></svg:path><svg:path fill="currentColor" d="M7 2h2v9.98H7z"></svg:path>`,
})
export class CarbonRestaurantFineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonResultIcon],svg[carbon-result-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 23h8v2h-8zm-4 0h2v2h-2zm4-5h8v2h-8zm-4 0h2v2h-2zm4-5h8v2h-8zm-4 0h2v2h-2z"></svg:path><svg:path fill="currentColor" d="M25 5h-3V4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v1H7a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M12 4h8v4h-8Zm13 24H7V7h3v3h12V7h3Z"></svg:path>`,
})
export class CarbonResultIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonResultDraftIcon],svg[carbon-result-draft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m29.7 19.3l-3-3c-.4-.4-1-.4-1.4 0L16 25.6V30h4.4l9.3-9.3c.4-.4.4-1 0-1.4M19.6 28H18v-1.6l5-5l1.6 1.6zm6.4-6.4L24.4 20l1.6-1.6l1.6 1.6zM10 23h2v2h-2zm4-5h4v2h-4zm-4 0h2v2h-2zm4-5h8v2h-8zm-4 0h2v2h-2z"></svg:path><svg:path fill="currentColor" d="M7 28V7h3v3h12V7h3v6h2V7c0-1.1-.9-2-2-2h-3V4c0-1.1-.9-2-2-2h-8c-1.1 0-2 .9-2 2v1H7c-1.1 0-2 .9-2 2v21c0 1.1.9 2 2 2h5v-2zm5-24h8v4h-8z"></svg:path>`,
})
export class CarbonResultDraftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonResultNewIcon],svg[carbon-result-new-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="26" cy="26" r="4" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M10 13h2v2h-2zm0 5h2v2h-2zm0 5h2v2h-2zm4-10h8v2h-8zm0 5h8v2h-8zm0 5h4v2h-4z"></svg:path><svg:path fill="currentColor" d="M7 28V7h3v3h12V7h3v11h2V7a2 2 0 0 0-2-2h-3V4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v1H7a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h11v-2Zm5-24h8v4h-8Z"></svg:path>`,
})
export class CarbonResultNewIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonResultOldIcon],svg[carbon-result-old-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 13h2v2h-2zm4 0h8v2h-8zm-4 5h2v2h-2zm0 5h2v2h-2z"></svg:path><svg:path fill="currentColor" d="M7 28V7h3v3h12V7h3v8h2V7a2 2 0 0 0-2-2h-3V4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v1H7a2 2 0 0 0-2 2v21a2 2 0 0 0 2 2h9v-2Zm5-24h8v4h-8Z"></svg:path><svg:path fill="currentColor" d="M18 19v2.413A6.996 6.996 0 1 1 24 32v-2a5 5 0 1 0-4.576-7H22v2h-6v-6Z"></svg:path>`,
})
export class CarbonResultOldIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRetryFailedIcon],svg[carbon-retry-failed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26.41 25L30 21.41L28.59 20L25 23.59L21.41 20L20 21.41L23.59 25L20 28.59L21.41 30L25 26.41L28.59 30L30 28.59zM18 2A12.035 12.035 0 0 0 6 14v6.2l-3.6-3.6L1 18l6 6l6-6l-1.4-1.4L8 20.2V14a10 10 0 0 1 20 0v3h2v-3A12.035 12.035 0 0 0 18 2"></svg:path>`,
})
export class CarbonRetryFailedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonReturnIcon],svg[carbon-return-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8v2c2.206 0 4 1.794 4 4s-1.794 4-4 4H10v-5l-6 6l6 6v-5h12c3.309 0 6-2.691 6-6s-2.691-6-6-6"></svg:path>`,
})
export class CarbonReturnIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonReviewIcon],svg[carbon-review-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 8l1.912 3.703l4.088.594L19 15l1 4l-4-2.25L12 19l1-4l-3-2.703l4.2-.594z"></svg:path><svg:path fill="currentColor" d="M17.736 30L16 29l4-7h6a1.997 1.997 0 0 0 2-2V8a1.997 1.997 0 0 0-2-2H6a1.997 1.997 0 0 0-2 2v12a1.997 1.997 0 0 0 2 2h9v2H6a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-4.835Z"></svg:path>`,
})
export class CarbonReviewIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRewind10Icon],svg[carbon-rewind-10-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18A12 12 0 1 0 16 6h-4V1L6 7l6 6V8h4A10 10 0 1 1 6 18Z"></svg:path><svg:path fill="currentColor" d="M19.63 22.13a2.84 2.84 0 0 1-1.28-.27a2.44 2.44 0 0 1-.89-.77a3.6 3.6 0 0 1-.52-1.25a7.7 7.7 0 0 1-.17-1.68a8 8 0 0 1 .17-1.68a3.7 3.7 0 0 1 .52-1.25a2.44 2.44 0 0 1 .89-.77a2.84 2.84 0 0 1 1.28-.27a2.44 2.44 0 0 1 2.16 1a5.23 5.23 0 0 1 .7 2.93a5.23 5.23 0 0 1-.7 2.93a2.44 2.44 0 0 1-2.16 1.08m0-1.22a1.07 1.07 0 0 0 1-.55a3.4 3.4 0 0 0 .37-1.51v-1.38a3.3 3.3 0 0 0-.29-1.5a1.23 1.23 0 0 0-2.06 0a3.3 3.3 0 0 0-.29 1.5v1.38a3.4 3.4 0 0 0 .29 1.51a1.06 1.06 0 0 0 .98.55m-9 1.09v-1.18h2v-5.19l-1.86 1l-.55-1.06l2.32-1.3H14v6.5h1.78V22z"></svg:path>`,
})
export class CarbonRewind10Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRewind30Icon],svg[carbon-rewind-30-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18A12 12 0 1 0 16 6h-4V1L6 7l6 6V8h4A10 10 0 1 1 6 18Z"></svg:path><svg:path fill="currentColor" d="M19.64 22.13a2.8 2.8 0 0 1-1.28-.27a2.36 2.36 0 0 1-.89-.77a3.4 3.4 0 0 1-.47-1.25a7 7 0 0 1-.17-1.68a7.2 7.2 0 0 1 .17-1.68a3.5 3.5 0 0 1 .52-1.25a2.36 2.36 0 0 1 .89-.77a2.8 2.8 0 0 1 1.28-.27a2.44 2.44 0 0 1 2.16 1a5.3 5.3 0 0 1 .7 2.93a5.3 5.3 0 0 1-.7 2.93a2.44 2.44 0 0 1-2.21 1.08m0-1.22a1 1 0 0 0 1-.55a3.24 3.24 0 0 0 .3-1.51v-1.38a3.2 3.2 0 0 0-.3-1.5a1.22 1.22 0 0 0-2.05 0a3.2 3.2 0 0 0-.29 1.5v1.38a3.25 3.25 0 0 0 .29 1.51a1 1 0 0 0 1.05.55m-7.02-3.49a1.46 1.46 0 0 0 1-.27a.84.84 0 0 0 .31-.68v-.08a.94.94 0 0 0-.3-.74a1.2 1.2 0 0 0-.83-.27a1.65 1.65 0 0 0-.89.24a2.1 2.1 0 0 0-.68.68l-.93-.83a5 5 0 0 1 .44-.51a2.7 2.7 0 0 1 .54-.4a2.6 2.6 0 0 1 .7-.27a3.3 3.3 0 0 1 .87-.1a4 4 0 0 1 1.06.14a2.3 2.3 0 0 1 .82.4a1.9 1.9 0 0 1 .54.63a1.9 1.9 0 0 1 .18.83a2 2 0 0 1-.11.67a1.8 1.8 0 0 1-.32.52a1.8 1.8 0 0 1-.47.36a2.3 2.3 0 0 1-.57.2V18a2.3 2.3 0 0 1 .63.21a1.7 1.7 0 0 1 .51.38a1.9 1.9 0 0 1 .34.55a2.1 2.1 0 0 1 .12.73a2 2 0 0 1-.2.92a2 2 0 0 1-.58.72a2.7 2.7 0 0 1-.89.45a3.8 3.8 0 0 1-1.15.16a4 4 0 0 1-1-.11a3 3 0 0 1-.76-.31a2.8 2.8 0 0 1-.56-.45a4 4 0 0 1-.44-.55l1.07-.81a3 3 0 0 0 .28.42a2 2 0 0 0 .36.34a1.6 1.6 0 0 0 .45.22a2 2 0 0 0 .57.07a1.45 1.45 0 0 0 1-.3a1.12 1.12 0 0 0 .34-.85v-.08a1 1 0 0 0-.37-.8a1.78 1.78 0 0 0-1.06-.28h-.76v-1.21z"></svg:path>`,
})
export class CarbonRewind30Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRewind5Icon],svg[carbon-rewind-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18A12 12 0 1 0 16 6h-4V1L6 7l6 6V8h4A10 10 0 1 1 6 18Z"></svg:path><svg:path fill="currentColor" d="M18.58 15.58h-3.45L15 18.15a5 5 0 0 1 .26-.45a1.6 1.6 0 0 1 .33-.35a1.5 1.5 0 0 1 .44-.23a2 2 0 0 1 .6-.08a2.5 2.5 0 0 1 .92.16a2.1 2.1 0 0 1 .74.48a2.3 2.3 0 0 1 .5.77a2.7 2.7 0 0 1 .18 1a2.9 2.9 0 0 1-.19 1.07a2.4 2.4 0 0 1-.55.84a2.4 2.4 0 0 1-.89.55a3.2 3.2 0 0 1-1.21.2a3.8 3.8 0 0 1-.94-.11a3 3 0 0 1-.74-.32a2.5 2.5 0 0 1-.55-.45a4 4 0 0 1-.41-.55l1.06-.81l.27.41a1.8 1.8 0 0 0 .34.34a1.6 1.6 0 0 0 .43.22a1.5 1.5 0 0 0 .55.08a1.3 1.3 0 0 0 1-.36a1.4 1.4 0 0 0 .33-1v-.06a1.18 1.18 0 0 0-1.28-1.27a1.44 1.44 0 0 0-.77.18a2 2 0 0 0-.48.39l-1.19-.17l.29-4.31h4.52Z"></svg:path>`,
})
export class CarbonRewind5Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRightPanelCloseIcon],svg[carbon-right-panel-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2m20 0h6v20h-6zM4 6h16v20H4v-9h10.17l-3.58 3.59L12 22l6-6l-6-6l-1.41 1.41L14.17 15H4z"></svg:path>`,
})
export class CarbonRightPanelCloseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRightPanelCloseFilledIcon],svg[carbon-right-panel-close-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2m2 0h16v20H4v-9h10.17l-3.58 3.59L12 22l6-6l-6-6l-1.41 1.41L14.17 15H4z"></svg:path>`,
})
export class CarbonRightPanelCloseFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRightPanelOpenIcon],svg[carbon-right-panel-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2m20 0h6v20h-6zM4 6h16v9H9.83l3.58-3.59L12 10l-6 6l6 6l1.41-1.41L9.83 17H20v9H4z"></svg:path>`,
})
export class CarbonRightPanelOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRightPanelOpenFilledIcon],svg[carbon-right-panel-open-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 6v20a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2m2 0h16v9H9.83l3.58-3.59L12 10l-6 6l6 6l1.41-1.41L9.83 17H20v9H4z"></svg:path>`,
})
export class CarbonRightPanelOpenFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRoadIcon],svg[carbon-road-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 13h6v2h-6z"></svg:path><svg:path fill="currentColor" d="m25.44 8l-1.27-4.55A2.01 2.01 0 0 0 22.246 2H9.754a2.01 2.01 0 0 0-1.923 1.45L6.531 8H4v2h2v7a2.003 2.003 0 0 0 2 2v3h2v-3h12v3h2v-3a2.003 2.003 0 0 0 2-2v-7h2V8zM9.755 4h12.492l1.428 5H8.326zM24 13h-2v2h2v2H8v-2h2v-2H8v-2h16zM2 16h2v14H2zm26 0h2v14h-2z"></svg:path><svg:path fill="currentColor" d="M15 21h2v3h-2zm0 5h2v4h-2z"></svg:path>`,
})
export class CarbonRoadIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRoadWeatherIcon],svg[carbon-road-weather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 31h-2v-.228a3.01 3.01 0 0 0-1.947-2.81l-3.532-1.324A3.9 3.9 0 0 1 6 23h2a1.895 1.895 0 0 0 1.224 1.766l3.531 1.324A5.02 5.02 0 0 1 16 30.772zm14 0h-2v-.228a3.01 3.01 0 0 0-1.947-2.81l-3.532-1.324A3.9 3.9 0 0 1 20 23h2a1.895 1.895 0 0 0 1.224 1.766l3.531 1.324A5.02 5.02 0 0 1 30 30.772zM11 13h6v2h-6z"></svg:path><svg:path fill="currentColor" d="m23.44 8l-1.27-4.55A2.01 2.01 0 0 0 20.246 2H7.754a2.01 2.01 0 0 0-1.923 1.45L4.531 8H2v2h2v7a2.003 2.003 0 0 0 2 2v2h2v-2h12v2h2v-2a2.003 2.003 0 0 0 2-2v-7h2V8ZM7.755 4h12.492l1.428 5H6.326ZM22 13h-2v2h2v2H6v-2h2v-2H6v-2h16Z"></svg:path>`,
})
export class CarbonRoadWeatherIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRoadmapIcon],svg[carbon-roadmap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 30H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m-8-6v4h8v-4zm24-4H12a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m-16-6v4h16v-4zm4-4H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M4 4v4h12V4z"></svg:path>`,
})
export class CarbonRoadmapIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRocketIcon],svg[carbon-rocket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7.288 23.292l7.997-7.997l1.414 1.414l-7.997 7.997z"></svg:path><svg:path fill="currentColor" d="M17 30a1 1 0 0 1-.37-.07a1 1 0 0 1-.62-.79l-1-7l2-.28l.75 5.27L21 24.52V17a1 1 0 0 1 .29-.71l4.07-4.07A8.94 8.94 0 0 0 28 5.86V4h-1.86a8.94 8.94 0 0 0-6.36 2.64l-4.07 4.07A1 1 0 0 1 15 11H7.48l-2.61 3.26l5.27.75l-.28 2l-7-1a1 1 0 0 1-.79-.62a1 1 0 0 1 .15-1l4-5A1 1 0 0 1 7 9h7.59l3.77-3.78A10.92 10.92 0 0 1 26.14 2H28a2 2 0 0 1 2 2v1.86a10.92 10.92 0 0 1-3.22 7.78L23 17.41V25a1 1 0 0 1-.38.78l-5 4A1 1 0 0 1 17 30"></svg:path>`,
})
export class CarbonRocketIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRotateIcon],svg[carbon-rotate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m17.91 26.82l.35 2a12.9 12.9 0 0 0 4.24-1.54l-1-1.73a10.9 10.9 0 0 1-3.59 1.27m6.51-3.75L26 24.35a13 13 0 0 0 2.24-3.91l-1.87-.68a11 11 0 0 1-1.95 3.31M9.5 27.25a12.9 12.9 0 0 0 4.24 1.54l.35-2a10.9 10.9 0 0 1-3.59-1.3zm-3.83-7.49l-1.87.68A13 13 0 0 0 6 24.35l.32-.26l1.22-1a11 11 0 0 1-1.91-3.31zM29 16a12.9 12.9 0 0 0-.8-4.44l-1.87.68A11.2 11.2 0 0 1 27 16zm-3-8.35a13 13 0 0 0-20 0V4H4v8h8v-2H6.81a11 11 0 0 1 17.61-1.07z"></svg:path>`,
})
export class CarbonRotateIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRotate180Icon],svg[carbon-rotate-180-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M14.091 26.823l-.346 1.968a12.896 12.896 0 0 1-4.24-1.541l1-1.731a10.909 10.909 0 0 0 3.586 1.305z" fill="currentColor"></svg:path><svg:path d="M7.577 23.068l-1.532 1.285a12.981 12.981 0 0 1-2.25-3.91l1.877-.684a10.98 10.98 0 0 0 1.905 3.31z" fill="currentColor"></svg:path><svg:path d="M22.495 27.25a12.896 12.896 0 0 1-4.24 1.542l-.347-1.968a10.909 10.909 0 0 0 3.587-1.305z" fill="currentColor"></svg:path><svg:path d="M26.327 19.759l1.878.683a12.981 12.981 0 0 1-2.25 3.911l-.311-.261l-1.22-1.024a10.982 10.982 0 0 0 1.903-3.31z" fill="currentColor"></svg:path><svg:path d="M13.662 5.256c-.16.034-.315.08-.472.121a10.96 10.96 0 0 0-.633.183c-.164.054-.325.116-.486.178c-.193.074-.383.15-.57.235c-.161.072-.32.15-.476.23q-.268.136-.526.286c-.153.09-.305.18-.454.276c-.167.11-.33.224-.492.342c-.14.102-.281.203-.417.312c-.161.13-.315.268-.47.406c-.122.11-.248.217-.365.332c-.167.164-.322.338-.478.512A10.944 10.944 0 0 0 5 16H3a12.936 12.936 0 0 1 3.05-8.35l-.005-.004c.092-.11.197-.206.293-.312c.184-.205.367-.41.563-.603c.139-.136.286-.262.43-.391c.183-.165.366-.329.558-.482c.16-.128.325-.247.49-.367c.192-.14.385-.277.585-.406c.175-.113.353-.22.532-.324q.309-.179.626-.341c.184-.094.37-.185.56-.27c.222-.1.449-.191.678-.28c.19-.072.378-.145.571-.208c.246-.082.498-.15.75-.217c.186-.049.368-.102.556-.143c.29-.063.587-.107.884-.15c.159-.023.314-.056.475-.073A12.933 12.933 0 0 1 26 7.703V4h2v8h-8v-2h5.189A10.961 10.961 0 0 0 16 5a11.111 11.111 0 0 0-1.189.067c-.136.015-.268.042-.403.061c-.25.037-.501.075-.746.128z" fill="currentColor"></svg:path>`,
})
export class CarbonRotate180Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRotate360Icon],svg[carbon-rotate-360-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M25.95 7.65l.005-.004c-.092-.11-.197-.206-.293-.312c-.184-.205-.367-.41-.563-.603c-.139-.136-.286-.262-.43-.391c-.183-.165-.366-.329-.558-.482c-.16-.128-.325-.247-.49-.367c-.192-.14-.385-.277-.585-.406a13.513 13.513 0 0 0-.533-.324q-.308-.179-.625-.341c-.184-.094-.37-.185-.56-.27c-.222-.1-.449-.191-.678-.28c-.19-.072-.378-.145-.571-.208c-.246-.082-.498-.15-.75-.217c-.186-.049-.368-.102-.556-.143c-.29-.063-.587-.107-.883-.15c-.16-.023-.315-.056-.476-.073A12.933 12.933 0 0 0 6 7.703V4H4v8h8v-2H6.811A10.961 10.961 0 0 1 16 5a11.111 11.111 0 0 1 1.189.067c.136.015.268.042.403.061c.25.037.501.075.746.128c.16.035.315.08.472.121c.213.057.425.114.633.183c.164.054.325.116.486.178c.193.074.384.15.57.235c.162.072.32.15.477.23q.268.136.526.286c.153.09.305.18.453.276c.168.11.33.224.492.342c.14.102.282.203.417.312c.162.13.316.268.47.406c.123.11.248.217.365.332c.167.164.323.338.479.512A10.993 10.993 0 1 1 5 16H3a13 13 0 1 0 22.95-8.35z" fill="currentColor"></svg:path>`,
})
export class CarbonRotate360Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRotateClockwiseIcon],svg[carbon-rotate-clockwise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 30H16a2 2 0 0 1-2-2V16a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2M16 16v12h12.001L28 16zM15 2l-1.41 1.41L16.17 6H11a7.01 7.01 0 0 0-7 7v5h2v-5a5.006 5.006 0 0 1 5-5h5.17l-2.58 2.59L15 12l5-5z"></svg:path>`,
})
export class CarbonRotateClockwiseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRotateClockwiseAltIcon],svg[carbon-rotate-clockwise-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 30H4a2 2 0 0 1-2-2V16a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2M4 16v12h12.001L16 16zm26-1l-1.41-1.41L26 16.17V11a7.01 7.01 0 0 0-7-7h-5v2h5a5.006 5.006 0 0 1 5 5v5.17l-2.59-2.58L20 15l5 5z"></svg:path>`,
})
export class CarbonRotateClockwiseAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRotateClockwiseAltFilledIcon],svg[carbon-rotate-clockwise-alt-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 30H4a2 2 0 0 1-2-2V16a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2m14-15l-1.41-1.41L26 16.17V11a7.01 7.01 0 0 0-7-7h-5v2h5a5.006 5.006 0 0 1 5 5v5.17l-2.59-2.58L20 15l5 5z"></svg:path>`,
})
export class CarbonRotateClockwiseAltFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRotateClockwiseFilledIcon],svg[carbon-rotate-clockwise-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 30H16a2 2 0 0 1-2-2V16a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2M15 2l-1.41 1.41L16.17 6H11a7.01 7.01 0 0 0-7 7v5h2v-5a5.006 5.006 0 0 1 5-5h5.17l-2.58 2.59L15 12l5-5z"></svg:path>`,
})
export class CarbonRotateClockwiseFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRotateCounterclockwiseIcon],svg[carbon-rotate-counterclockwise-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 28V16a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2m2-12l-.001 12H16V16zM17 2l1.41 1.41L15.83 6H21a7.01 7.01 0 0 1 7 7v5h-2v-5a5.006 5.006 0 0 0-5-5h-5.17l2.58 2.59L17 12l-5-5z"></svg:path>`,
})
export class CarbonRotateCounterclockwiseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRotateCounterclockwiseAltIcon],svg[carbon-rotate-counterclockwise-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 28V16a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2m2-12l-.001 12H28V16zM2 15l1.41-1.41L6 16.17V11a7.01 7.01 0 0 1 7-7h5v2h-5a5.006 5.006 0 0 0-5 5v5.17l2.59-2.58L12 15l-5 5z"></svg:path>`,
})
export class CarbonRotateCounterclockwiseAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRotateCounterclockwiseAltFilledIcon],svg[carbon-rotate-counterclockwise-alt-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 28V16a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2M2 15l1.41-1.41L6 16.17V11a7.01 7.01 0 0 1 7-7h5v2h-5a5.006 5.006 0 0 0-5 5v5.17l2.59-2.58L12 15l-5 5z"></svg:path>`,
})
export class CarbonRotateCounterclockwiseAltFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRotateCounterclockwiseFilledIcon],svg[carbon-rotate-counterclockwise-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 28V16a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2M17 2l1.41 1.41L15.83 6H21a7.01 7.01 0 0 1 7 7v5h-2v-5a5.006 5.006 0 0 0-5-5h-5.17l2.58 2.59L17 12l-5-5z"></svg:path>`,
})
export class CarbonRotateCounterclockwiseFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRouterIcon],svg[carbon-router-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 7l-5-5l-5 5l1.409 1.419L15 5.847V13h2V5.794l2.591 2.625zm0 18l-5 5l-5-5l1.409-1.419L15 26.153V19h2v7.206l2.591-2.625zm3-14l-5 5l5 5l1.419-1.409L22.847 17H30v-2h-7.206l2.625-2.591zM8 11l5 5l-5 5l-1.419-1.409L9.153 17H2v-2h7.206l-2.625-2.591z"></svg:path>`,
})
export class CarbonRouterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRouterVoiceIcon],svg[carbon-router-voice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 25l-5 5l-5-5l1.409-1.419L15 26.153V19h2v7.206l2.591-2.625zm3-14l-5 5l5 5l1.419-1.409L22.847 17H30v-2h-7.206l2.625-2.591zM8 11l5 5l-5 5l-1.419-1.409L9.153 17H2v-2h7.206l-2.625-2.591zm4.429-5.177v1.63a1.13 1.13 0 0 1-.677 1.026l-1.39.596a1.12 1.12 0 0 1-1.222-.233L7.32 7.023a1.117 1.117 0 0 1 .013-1.579l.035-.032c7.393-6.527 14.691-2.038 17.213-.048a1.117 1.117 0 0 1 .174 1.57a1 1 0 0 1-.087.097l-1.757 1.757a1.11 1.11 0 0 1-1.223.233l-1.39-.597a1.11 1.11 0 0 1-.68-1.022v-1.63s-3.645-2.707-7.19.05"></svg:path>`,
})
export class CarbonRouterVoiceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRouterWifiIcon],svg[carbon-router-wifi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="16" cy="13.5" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M19.536 10.465a5 5 0 0 0-7.072 0L11.05 9.05a7 7 0 0 1 9.9 0Z"></svg:path><svg:path fill="currentColor" d="M23.071 6.929a10 10 0 0 0-14.142 0L7.515 5.514a12 12 0 0 1 16.97 0zM21 25l-5 5l-5-5l1.409-1.419L15 26.153V19h2v7.206l2.591-2.625zm3-14l-5 5l5 5l1.419-1.409L22.847 17H30v-2h-7.206l2.625-2.591zM8 11l5 5l-5 5l-1.419-1.409L9.153 17H2v-2h7.206l-2.625-2.591z"></svg:path>`,
})
export class CarbonRouterWifiIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRowIcon],svg[carbon-row-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 24h24v2H4zm22-6H6v-4h20zm2 0v-4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2M4 6h24v2H4z"></svg:path>`,
})
export class CarbonRowIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRowCollapseIcon],svg[carbon-row-collapse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 20H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2m0 6H6v-4h20zM17 7.828l2.586 2.586L21 9l-5-5l-5 5l1.414 1.414L15 7.828V14H4v2h24v-2H17z"></svg:path>`,
})
export class CarbonRowCollapseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRowDeleteIcon],svg[carbon-row-delete-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 30H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2M4 22h-.002L4 28h20v-6zM30 3.41L28.59 2L25 5.59L21.41 2L20 3.41L23.59 7L20 10.59L21.41 12L25 8.41L28.59 12L30 10.59L26.41 7z"></svg:path><svg:path fill="currentColor" d="M4 14V8h14V6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h22v-2Z"></svg:path>`,
})
export class CarbonRowDeleteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRowExpandIcon],svg[carbon-row-expand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 18h11v6.172l-2.586-2.586L11 23l5 5l5-5l-1.414-1.414L17 24.172V18h11v-2H4zM26 4H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2m0 6H6V6h20z"></svg:path>`,
})
export class CarbonRowExpandIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRowInsertIcon],svg[carbon-row-insert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 12H10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2M10 4v6h18V4zm18 26H10a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2m-18-8v6h18v-6zm-1-6l-5.586-5.586L2 11.828L6.172 16L2 20.172l1.414 1.414z"></svg:path>`,
})
export class CarbonRowInsertIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRssIcon],svg[carbon-rss-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18c-3.3 0-6 2.7-6 6s2.7 6 6 6s6-2.7 6-6s-2.7-6-6-6m0 10c-2.2 0-4-1.8-4-4s1.8-4 4-4s4 1.8 4 4s-1.8 4-4 4m22-4h-2C28 13 19 4 8 4V2c12.1 0 22 9.9 22 22"></svg:path><svg:path fill="currentColor" d="M22 24h-2c0-6.6-5.4-12-12-12v-2c7.7 0 14 6.3 14 14"></svg:path>`,
})
export class CarbonRssIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRuleIcon],svg[carbon-rule-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 16h12v2H10zm0-6h12v2H10z"></svg:path><svg:path fill="currentColor" d="m16 30l-6.176-3.293A10.98 10.98 0 0 1 4 17V4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v13a10.98 10.98 0 0 1-5.824 9.707ZM6 4v13a8.99 8.99 0 0 0 4.766 7.942L16 27.733l5.234-2.79A8.99 8.99 0 0 0 26 17V4Z"></svg:path>`,
})
export class CarbonRuleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRuleCancelledIcon],svg[carbon-rule-cancelled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 24a6 6 0 1 0-6 6a6.007 6.007 0 0 0 6-6m-2 0a3.95 3.95 0 0 1-.567 2.019l-5.452-5.452A3.95 3.95 0 0 1 24 20a4.005 4.005 0 0 1 4 4m-8 0a3.95 3.95 0 0 1 .567-2.019l5.452 5.452A3.95 3.95 0 0 1 24 28a4.005 4.005 0 0 1-4-4M8 16h10v2H8zm0-6h12v2H8z"></svg:path><svg:path fill="currentColor" d="m14 27.733l-5.234-2.79A8.99 8.99 0 0 1 4 17V4h20v11h2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13a10.98 10.98 0 0 0 5.824 9.707L14 30Z"></svg:path>`,
})
export class CarbonRuleCancelledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRuleDataQualityIcon],svg[carbon-rule-data-quality-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m30 28.6l-2.8-2.8c.5-.8.8-1.8.8-2.8c0-2.8-2.2-5-5-5s-5 2.2-5 5s2.2 5 5 5c1 0 2-.3 2.8-.8l2.8 2.8zM20 23c0-1.7 1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3M8 16h10v2H8zm0-6h12v2H8z"></svg:path><svg:path fill="currentColor" d="m14 27.7l-5.2-2.8C5.8 23.4 4 20.3 4 17V4h20v11h2V4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v13c0 4.1 2.2 7.8 5.8 9.7L14 30z"></svg:path>`,
})
export class CarbonRuleDataQualityIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRuleDraftIcon],svg[carbon-rule-draft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m29.707 19.293l-3-3a1 1 0 0 0-1.414 0L16 25.586V30h4.414l9.293-9.293a1 1 0 0 0 0-1.414M19.586 28H18v-1.586l5-5L24.586 23zM26 21.586L24.414 20L26 18.414L27.586 20zM8 16h10v2H8zm0-6h12v2H8z"></svg:path><svg:path fill="currentColor" d="M26 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13a10.98 10.98 0 0 0 5.824 9.707L13 29.467V27.2l-4.234-2.258A8.99 8.99 0 0 1 4 17V4h20v9h2Z"></svg:path>`,
})
export class CarbonRuleDraftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRuleFilledIcon],svg[carbon-rule-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" d="M9 16h14v2H9zm0-6h14v2H9z"></svg:path><svg:path fill="currentColor" d="M26 2H6a2 2 0 0 0-2 2v13a10.98 10.98 0 0 0 5.824 9.707L16 30l6.176-3.293A10.98 10.98 0 0 0 28 17V4a2 2 0 0 0-2-2m-3 16H9v-2h14Zm0-6H9v-2h14Z"></svg:path>`,
})
export class CarbonRuleFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRuleLockedIcon],svg[carbon-rule-locked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 22v-3c0-2.2-1.8-4-4-4s-4 1.8-4 4v3c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2m-6-3c0-1.1.9-2 2-2s2 .9 2 2v3h-4zm-2 10v-5h8v5zM8 16h6v2H8zm0-6h12v2H8z"></svg:path><svg:path fill="currentColor" d="M26 4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v13c0 4.1 2.2 7.8 5.8 9.7l5.2 2.8v-2.3l-4.2-2.3C5.8 23.4 4 20.3 4 17V4h20v8h2z"></svg:path>`,
})
export class CarbonRuleLockedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRulePartialIcon],svg[carbon-rule-partial-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 16c-3.9 0-7 3.1-7 7s3.1 7 7 7s7-3.1 7-7s-3.1-7-7-7m0 12V18c2.8 0 5 2.2 5 5s-2.2 5-5 5M8 16h6v2H8zm0-6h12v2H8z"></svg:path><svg:path fill="currentColor" d="M26 4c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v13c0 4.1 2.2 7.8 5.8 9.7l5.2 2.8v-2.3l-4.2-2.3C5.8 23.4 4 20.3 4 17V4h20v9h2z"></svg:path>`,
})
export class CarbonRulePartialIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRuleTestIcon],svg[carbon-rule-test-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 30a7 7 0 1 1 7-7a7.01 7.01 0 0 1-7 7m0-12a5 5 0 1 0 5 5a5.006 5.006 0 0 0-5-5"></svg:path><svg:path fill="currentColor" d="m26 24.586l-2-2V20h-2v3.414L24.586 26zM8 16h6v2H8zm0-6h12v2H8z"></svg:path><svg:path fill="currentColor" d="M26 4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13a10.98 10.98 0 0 0 5.824 9.707L13 29.467V27.2l-4.234-2.258A8.99 8.99 0 0 1 4 17V4h20v9h2Z"></svg:path>`,
})
export class CarbonRuleTestIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRulerIcon],svg[carbon-ruler-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 10H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1m-1 10H4v-8h4v4h2v-4h5v4h2v-4h5v4h2v-4h4Z"></svg:path>`,
})
export class CarbonRulerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRulerAltIcon],svg[carbon-ruler-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.41 21.67L10.34 2.58a2 2 0 0 0-2.83 0L2.59 7.51a2 2 0 0 0 0 2.82l19.07 19.09a2 2 0 0 0 1.42.58a2 2 0 0 0 1.41-.58l4.92-4.93a2 2 0 0 0 0-2.82M23.08 28L4 8.92L8.92 4l3.79 3.79L10.46 10l1.41 1.41l2.25-2.21l4.13 4.13L16 15.58L17.42 17l2.25-2.25l4.13 4.13l-2.25 2.25L23 22.54l2.25-2.25L28 23.08Z"></svg:path>`,
})
export class CarbonRulerAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRunIcon],svg[carbon-run-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 16a6 6 0 1 1-6 6a6 6 0 0 1 6-6m0-2a8 8 0 1 0 8 8a8 8 0 0 0-8-8"></svg:path><svg:path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h4v-2H6V12h22V6a2 2 0 0 0-2-2M6 10V6h20v4Z"></svg:path><svg:path fill="currentColor" d="M19 19v6l5-3z"></svg:path>`,
})
export class CarbonRunIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRunMirrorIcon],svg[carbon-run-mirror-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 19v6l5-3z"></svg:path><svg:path fill="currentColor" d="M11 16c3.3 0 6 2.7 6 6s-2.7 6-6 6s-6-2.7-6-6s2.7-6 6-6m0-2c-4.4 0-8 3.6-8 8s3.6 8 8 8s8-3.6 8-8s-3.6-8-8-8"></svg:path><svg:path fill="currentColor" d="M4 6v6h22v14h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2m2 4V6h20v4z"></svg:path>`,
})
export class CarbonRunMirrorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonRunningIcon],svg[carbon-running-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.707 20.293l-5-5a.996.996 0 0 0-1.414 0L2 28.586L3.414 30L16 17.414L19.586 21L14 26.586L15.414 28l2.292-2.292l4.001-4.001a.997.997 0 0 0 0-1.414"></svg:path><svg:path fill="currentColor" d="M28.586 9L23 14.586l-6.001-6.002A2 2 0 0 0 15.577 8a2 2 0 0 0-1.407.584L8 14.76l1.414 1.414l6.17-6.175l6.71 6.708a.997.997 0 0 0 1.413 0L30 10.414z"></svg:path><svg:path fill="currentColor" d="M22.5 9C20.57 9 19 7.43 19 5.5S20.57 2 22.5 2S26 3.57 26 5.5S24.43 9 22.5 9m0-5c-.827 0-1.5.673-1.5 1.5S21.673 7 22.5 7S24 6.327 24 5.5S23.327 4 22.5 4"></svg:path>`,
})
export class CarbonRunningIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSIcon],svg[carbon-s-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M18 23h-6v-2h6v-4h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h6v2h-6v4h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2z" fill="currentColor"></svg:path>`,
})
export class CarbonSIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSAltIcon],svg[carbon-s-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M24 9h-2V7h-2v2h-2v2h2v6h2v-6h2V9z" fill="currentColor"></svg:path><svg:path d="M14 23H8v-2h6v-4h-4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h6v2h-6v4h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2z" fill="currentColor"></svg:path>`,
})
export class CarbonSAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSailboatCoastalIcon],svg[carbon-sailboat-coastal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24.78 26l1.19-4.758A1 1 0 0 0 25 20h-5v-3h5a1 1 0 0 0 .908-1.419l-6-13a1 1 0 0 0-1.702-.19l-9.998 13A1 1 0 0 0 9 17h9v3H7a1 1 0 0 0-.97 1.242L7.22 26H2v2h28v-2ZM20 7.553L23.437 15H20ZM11.03 15L18 5.94V15Zm11.69 11H9.28l-1-4h15.44Z"></svg:path>`,
})
export class CarbonSailboatCoastalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSailboatOffshoreIcon],svg[carbon-sailboat-offshore-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.97 25h2.06l-.75-3h15.44l-.75 3h2.06l.94-3.758A1 1 0 0 0 25 20h-5v-3h5a1 1 0 0 0 .908-1.419l-6-13a1 1 0 0 0-1.702-.19l-9.998 13A1 1 0 0 0 9 17h9v3H7a1 1 0 0 0-.97 1.242ZM20 7.553L23.437 15H20ZM11.03 15L18 5.94V15Z"></svg:path><svg:path fill="currentColor" d="M26.906 25.751A3 3 0 0 1 24 28a3.44 3.44 0 0 1-3.051-2.316A1.01 1.01 0 0 0 20 25a.99.99 0 0 0-.947.679A3.44 3.44 0 0 1 16 28a3.44 3.44 0 0 1-3.051-2.316A1.01 1.01 0 0 0 12 25a.97.97 0 0 0-.947.679A3.44 3.44 0 0 1 8 28a3 3 0 0 1-2.906-2.249l-1.936.498A5 5 0 0 0 8 30a4.93 4.93 0 0 0 4-1.987a5.02 5.02 0 0 0 8 0A4.93 4.93 0 0 0 24 30a5 5 0 0 0 4.842-3.751Z"></svg:path>`,
})
export class CarbonSailboatOffshoreIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSalesOpsIcon],svg[carbon-sales-ops-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 6V4h-3V2h-2v2h-1c-1.103 0-2 .898-2 2v2c0 1.103.897 2 2 2h4v2h-6v2h3v2h2v-2h1c1.103 0 2-.897 2-2v-2c0-1.102-.897-2-2-2h-4V6zm-6 14v2h2.586L23 25.586l-2.292-2.293a1 1 0 0 0-.706-.293H20a1 1 0 0 0-.706.293L14 28.586L15.414 30l4.587-4.586l2.292 2.293a1 1 0 0 0 1.414 0L28 23.414V26h2v-6zM4 30H2v-5c0-3.86 3.14-7 7-7h6c1.989 0 3.89.85 5.217 2.333l-1.49 1.334A5 5 0 0 0 15 20H9c-2.757 0-5 2.243-5 5zm8-14a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0-12a5 5 0 1 1 0 10a5 5 0 0 1 0-10"></svg:path>`,
})
export class CarbonSalesOpsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSankeyDiagramIcon],svg[carbon-sankey-diagram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 2v6.044c-1.963.197-6.316 1.232-10.564 6.276c-.198-.277-.398-.546-.588-.85C11.974 5.67 6.32 4.276 4 4.042V2H2v28h2v-3.954a14.87 14.87 0 0 0 9.919-3.96c4.551 5.374 11.317 5.952 14.015 5.952H28V30h2V2Zm0 8.055v9.99a12.88 12.88 0 0 1-9.276-4.133c3.78-4.645 7.567-5.652 9.276-5.857M15.152 14.53c.324.519.663.99 1.008 1.44c-.339.475-.676.972-1.008 1.504a16 16 0 0 1-1.031 1.453c-.083-.137-.168-.27-.247-.413C9.328 10.332 5.787 8.444 4 8.068V6.051c1.993.24 6.823 1.553 11.152 8.479M4 24.049V10.14c1.325.464 4.203 2.284 8.126 9.344c.19.342.396.653.6.967A12.88 12.88 0 0 1 4 24.05m11.318-3.421a18 18 0 0 0 1.53-2.094c.221-.354.445-.67.669-.995A14.87 14.87 0 0 0 28 22.042v3.987c-2.33-.01-8.626-.52-12.682-5.401"></svg:path>`,
})
export class CarbonSankeyDiagramIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSankeyDiagramAltIcon],svg[carbon-sankey-diagram-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 2H2v14h6.111a7 7 0 0 1 3.13.74L15.764 19l-4.522 2.26a7 7 0 0 1-3.13.74H2v8h7.223a9.05 9.05 0 0 0 4.025-.95l8.622-4.31A7 7 0 0 1 25 24h5V14h-5a7 7 0 0 1-3.13-.74L15.348 10H30ZM8 4h16v4H8ZM4 4h2v10H4Zm0 20h2v4H4Zm16.975-1.05l-8.622 4.31a7 7 0 0 1-3.13.74H8v-4h.111a9.05 9.05 0 0 0 4.025-.95L18 20.118l1.864.932a9.05 9.05 0 0 0 4.025.95H24v.058a9 9 0 0 0-3.025.892M28 22h-2v-6h2ZM12.354 10.74l8.621 4.31a9 9 0 0 0 3.025.89V20h-.111a7 7 0 0 1-3.13-.74l-8.622-4.31A9.05 9.05 0 0 0 8.11 14H8v-4h1.223a7 7 0 0 1 3.13.74M28 8h-2V4h2Z"></svg:path>`,
})
export class CarbonSankeyDiagramAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSatelliteIcon],svg[carbon-satellite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m22.914 16.5l2.793-2.793a1 1 0 0 0 0-1.414L23.414 10L25.5 7.914L28.586 11L30 9.586L22.414 2L21 3.414L24.086 6.5L22 8.586l-2.293-2.293a1 1 0 0 0-1.414 0L15.5 9.086L8.707 2.293a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 0 1.414L9.086 15.5l-2.793 2.793a1 1 0 0 0 0 1.414L8.586 22L6.5 24.086L3.414 21L2 22.414L9.586 30L11 28.586L7.914 25.5L10 23.414l2.293 2.293a1 1 0 0 0 1.414 0l2.793-2.793l6.793 6.793a1 1 0 0 0 1.414 0l5-5a1 1 0 0 0 0-1.414ZM4.414 8L8 4.414L10.086 6.5L6.5 10.086Zm3.5 3.5L11.5 7.914l2.586 2.586l-3.586 3.586ZM13 23.586L8.414 19L19 8.414L23.586 13Zm4.914-2.086l3.586-3.586l2.586 2.586l-3.586 3.586ZM24 27.586L21.914 25.5l3.586-3.586L27.586 24Z"></svg:path>`,
})
export class CarbonSatelliteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSatelliteRadarIcon],svg[carbon-satellite-radar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 14h-2A10.01 10.01 0 0 0 18 4V2a12.014 12.014 0 0 1 12 12"></svg:path><svg:path fill="currentColor" d="M26 14h-2a6.007 6.007 0 0 0-6-6V6a8.01 8.01 0 0 1 8 8M16 28v-3.04a9.9 9.9 0 0 0 7.318-2.208a1.85 1.85 0 0 0 .678-1.334a1.8 1.8 0 0 0-.524-1.36L18.414 15L21 12.414L19.586 11L17 13.586l-5.058-5.059a1.82 1.82 0 0 0-1.36-.523a1.85 1.85 0 0 0-1.334.679a9.96 9.96 0 0 0-.513 11.95L6.28 28H2v2h28v-2zm-5.32-17.906L21.906 21.32A8.001 8.001 0 0 1 10.68 10.094M14 28H8.387l1.876-5.627A10 10 0 0 0 14 24.543z"></svg:path>`,
})
export class CarbonSatelliteRadarIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSatelliteWeatherIcon],svg[carbon-satellite-weather-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26.5 12H19a4 4 0 0 1 0-8h.084A4.79 4.79 0 0 1 23 2a4.98 4.98 0 0 1 4.654 3.203A3.47 3.47 0 0 1 30 8.5a3.504 3.504 0 0 1-3.5 3.5M19 6a2 2 0 0 0 0 4h7.5A1.5 1.5 0 0 0 28 8.5a1.486 1.486 0 0 0-1.278-1.474l-.661-.099l-.162-.649a2.957 2.957 0 0 0-5.487-.712L20.114 6zm-6 22v-3.112a7.94 7.94 0 0 0 4.707-2.282a1 1 0 0 0 0-1.414l-4.243-4.242L16 14.414L14.586 13l-2.536 2.536l-4.242-4.243a1 1 0 0 0-1.414 0a8 8 0 0 0 0 11.313c.162.163.332.313.505.46L4.432 28H2v2h28v-2zm-2 0H6.669l1.921-3.843a7.9 7.9 0 0 0 2.41.716zm-3.192-6.808a6.004 6.004 0 0 1-.65-7.72l8.37 8.369a6 6 0 0 1-7.72-.649"></svg:path>`,
})
export class CarbonSatelliteWeatherIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSatisfyDefinitionIcon],svg[carbon-satisfy-definition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.395 19.554c0-1.844 1.395-2.757 3.841-2.757h1.533v-.654c0-1-.5-1.585-1.67-1.585c-1.034 0-1.62.517-2.05 1.137l-1.31-1.171c.655-1.034 1.706-1.723 3.515-1.723c2.429 0 3.72 1.154 3.72 3.204v4.238h.896V22h-1.223c-.947 0-1.533-.62-1.67-1.55h-.104c-.293 1.154-1.275 1.757-2.619 1.757c-1.826 0-2.86-1.051-2.86-2.653zm5.362-.241v-1.19h-1.413c-1.154 0-1.722.397-1.722 1.103v.293c0 .724.5 1.085 1.36 1.085c.982 0 1.775-.447 1.775-1.292zm-16.137.895l1.533-1.481c.827.965 1.843 1.481 3.083 1.481c1.396 0 2.12-.671 2.12-1.688c0-.81-.38-1.31-1.637-1.533l-1.137-.172c-2.43-.38-3.6-1.534-3.6-3.497c0-2.154 1.67-3.55 4.358-3.55c1.809 0 3.152.62 4.117 1.775l-1.55 1.465c-.586-.741-1.413-1.24-2.688-1.24c-1.292 0-1.964.516-1.964 1.412c0 .913.517 1.292 1.671 1.499l1.12.206c2.429.431 3.566 1.516 3.566 3.497c0 2.274-1.637 3.825-4.514 3.825c-2.05 0-3.462-.81-4.479-1.998"></svg:path><svg:path fill="currentColor" d="M28 30H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v24a2 2 0 0 1-2 2M4 28h24V4H4z"></svg:path>`,
})
export class CarbonSatisfyDefinitionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSatisfyUsageIcon],svg[carbon-satisfy-usage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.393 19.554c0-1.844 1.396-2.757 3.842-2.757h1.533v-.654c0-1-.5-1.585-1.67-1.585c-1.034 0-1.62.517-2.05 1.137l-1.31-1.171c.655-1.034 1.706-1.723 3.514-1.723c2.43 0 3.721 1.154 3.721 3.204v4.238h.896V22h-1.223c-.947 0-1.533-.62-1.67-1.55h-.104c-.293 1.154-1.275 1.757-2.619 1.757c-1.826 0-2.86-1.051-2.86-2.653m5.363-.241v-1.19h-1.413c-1.154 0-1.723.397-1.723 1.103v.293c0 .724.5 1.085 1.361 1.085c.982 0 1.775-.447 1.775-1.292zm-16.138.895l1.534-1.481c.827.965 1.843 1.481 3.083 1.481c1.396 0 2.12-.671 2.12-1.688c0-.81-.38-1.31-1.637-1.533l-1.137-.172c-2.43-.38-3.6-1.534-3.6-3.497c0-2.154 1.67-3.55 4.358-3.55c1.808 0 3.152.62 4.117 1.775l-1.55 1.465c-.586-.741-1.413-1.24-2.688-1.24c-1.292 0-1.964.516-1.964 1.412c0 .913.517 1.292 1.671 1.499l1.12.206c2.429.431 3.566 1.516 3.566 3.497c0 2.274-1.637 3.825-4.514 3.825c-2.05 0-3.462-.81-4.479-1.998"></svg:path><svg:path fill="currentColor" d="M21 30H11c-4.963 0-9-4.037-9-9V11c0-4.963 4.037-9 9-9h10c4.963 0 9 4.037 9 9v10c0 4.963-4.037 9-9 9M11 4c-3.86 0-7 3.14-7 7v10c0 3.86 3.14 7 7 7h10c3.86 0 7-3.14 7-7V11c0-3.86-3.14-7-7-7z"></svg:path>`,
})
export class CarbonSatisfyUsageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSaveIcon],svg[carbon-save-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m27.71 9.29l-5-5A1 1 0 0 0 22 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V10a1 1 0 0 0-.29-.71M12 6h8v4h-8Zm8 20h-8v-8h8Zm2 0v-8a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v8H6V6h4v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6.41l4 4V26Z"></svg:path>`,
})
export class CarbonSaveIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSaveAnnotationIcon],svg[carbon-save-annotation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M21.56 15.1l-3.48-4.35a2 2 0 0 0-1.56-.75H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V16.35a2 2 0 0 0-.44-1.25zM9 12h6v3H9zm6 16H9v-6h6zm2 0v-6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6H4V12h3v3a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2.4l3 3.75V28z" fill="currentColor"></svg:path><svg:path d="M28 20h-3v-2h3V4H8v3H6V4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z" fill="currentColor"></svg:path><svg:path d="M20 6h6v2h-6z" fill="currentColor"></svg:path><svg:path d="M22 10h4v2h-4z" fill="currentColor"></svg:path>`,
})
export class CarbonSaveAnnotationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSaveImageIcon],svg[carbon-save-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M21.56 15.1l-3.48-4.35a2 2 0 0 0-1.56-.75H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V16.35a2 2 0 0 0-.44-1.25zM9 12h6v3H9zm6 16H9v-6h6zm2 0v-6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6H4V12h3v3a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2.4l3 3.75V28z" fill="currentColor"></svg:path><svg:path d="M28 20h-3v-2h3V4H14v3h-2V4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z" fill="currentColor"></svg:path>`,
})
export class CarbonSaveImageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSaveModelIcon],svg[carbon-save-model-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m26 20l1.427 1.903L23 26.963l-4.427-5.06L20 20zm1-2h-8l-3 4l7 8l7-8z"></svg:path><svg:path fill="currentColor" d="M16 26h-4v-8h2v-2h-2a2 2 0 0 0-2 2v8H6V6h4v4a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6.41l4 4V16h2v-6a1 1 0 0 0-.29-.71l-5-5A1 1 0 0 0 22 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h10ZM12 6h8v4h-8Z"></svg:path>`,
})
export class CarbonSaveModelIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSaveSeriesIcon],svg[carbon-save-series-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M21.56 15.1l-3.48-4.35a2 2 0 0 0-1.56-.75H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V16.35a2 2 0 0 0-.44-1.25zM9 12h6v3H9zm6 16H9v-6h6zm2 0v-6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v6H4V12h3v3a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-2.4l3 3.75V28z" fill="currentColor"></svg:path><svg:path d="M27 21h-2V7H11V5h14a2 2 0 0 1 2 2z" fill="currentColor"></svg:path><svg:path d="M32 14h-2V2H18V0h12a2 2 0 0 1 2 2z" fill="currentColor"></svg:path>`,
})
export class CarbonSaveSeriesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonScaleIcon],svg[carbon-scale-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 17H7a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2m-6 8v-6h6v6Z"></svg:path><svg:path fill="currentColor" d="M19 21v2h6a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H11a2 2 0 0 0-2 2v6h2V7h14v14"></svg:path>`,
})
export class CarbonScaleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonScalesIcon],svg[carbon-scales-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 16a5 5 0 0 0 10 0a1 1 0 0 0-.105-.447l-3.999-7.997a1 1 0 0 0-.045-.081A1 1 0 0 0 25 7h-6.178A3.02 3.02 0 0 0 17 5.184V2h-2v3.184A3.02 3.02 0 0 0 13.178 7H7a1 1 0 0 0-.894.553l-4 8A1 1 0 0 0 2 16a5 5 0 0 0 10 0a1 1 0 0 0-.105-.447L8.618 9h4.56A3.02 3.02 0 0 0 15 10.815V28H6v2h20v-2h-9V10.816A3.02 3.02 0 0 0 18.822 9h4.56l-3.277 6.553A1 1 0 0 0 20 16M7 19a3 3 0 0 1-2.815-2h5.63A3 3 0 0 1 7 19m2.382-4H4.618L7 10.236ZM16 9a1 1 0 1 1 1-1a1 1 0 0 1-1 1m9 10a3 3 0 0 1-2.815-2h5.63A3 3 0 0 1 25 19m0-8.764L27.382 15h-4.764Z"></svg:path>`,
})
export class CarbonScalesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonScalesTippedIcon],svg[carbon-scales-tipped-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 13a5 5 0 0 0 10 0a1 1 0 0 0-.105-.447l-4-8a1 1 0 0 0-1.211-.502l-6.331 2.11A3.03 3.03 0 0 0 17 5.184V2h-2v3.184a2.995 2.995 0 0 0-1.996 2.76l-6.32 2.107a1 1 0 0 0-.578.501l-4 8A1 1 0 0 0 2 19a5 5 0 0 0 10 0a1 1 0 0 0-.105-.447L8.41 11.584l5.237-1.746a3.03 3.03 0 0 0 1.353.977V28H6v2h20v-2h-9V10.816a2.995 2.995 0 0 0 1.996-2.76l4.03-1.344l-2.92 5.84A1 1 0 0 0 20 13M7 22a3 3 0 0 1-2.815-2h5.63A3 3 0 0 1 7 22m2.382-4H4.618L7 13.236ZM16 9a1 1 0 1 1 1-1a1 1 0 0 1-1 1m9 7a3 3 0 0 1-2.815-2h5.63A3 3 0 0 1 25 16m0-8.764L27.382 12h-4.764Z"></svg:path>`,
})
export class CarbonScalesTippedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonScalpelIcon],svg[carbon-scalpel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.83 5.17a4.1 4.1 0 0 0-5.66 0L.34 28h9.25a5 5 0 0 0 3.53-1.46l15.71-15.71a4 4 0 0 0 0-5.66M12.29 18.88l2.09-2.09l2.83 2.83l-2.09 2.09Zm-.58 6.24a3 3 0 0 1-2.12.88H5.17l5.71-5.71l2.83 2.83Zm15.7-15.71l-8.79 8.8l-2.83-2.83l8.8-8.79a2 2 0 0 1 2.82 0a2 2 0 0 1 0 2.82"></svg:path>`,
})
export class CarbonScalpelIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonScalpelCursorIcon],svg[carbon-scalpel-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M28.828 7.134a4.094 4.094 0 0 0-5.656 0L.343 29.962H9.59a4.968 4.968 0 0 0 3.536-1.465L28.828 12.79a3.998 3.998 0 0 0 0-5.656zM12.293 20.84l2.086-2.086l2.83 2.83l-2.087 2.085zm-.583 6.242a2.982 2.982 0 0 1-2.122.879H5.171l5.708-5.707l2.83 2.83zm15.704-15.707l-8.792 8.794l-2.83-2.83l8.794-8.792a2.047 2.047 0 0 1 2.828 0a2 2 0 0 1 0 2.828z" fill="currentColor"></svg:path><svg:path d="M13 4H4v9h2V6h7V4z" fill="currentColor"></svg:path>`,
})
export class CarbonScalpelCursorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonScalpelLassoIcon],svg[carbon-scalpel-lasso-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M28.828 7.134a4.094 4.094 0 0 0-5.656 0L.343 29.962H9.59a4.968 4.968 0 0 0 3.536-1.465L28.828 12.79a3.998 3.998 0 0 0 0-5.656zM12.293 20.84l2.086-2.086l2.83 2.83l-2.087 2.085zm-.583 6.242a2.982 2.982 0 0 1-2.122.879H5.171l5.708-5.707l2.83 2.83zm15.704-15.707l-8.792 8.794l-2.83-2.83l8.794-8.792a2.047 2.047 0 0 1 2.828 0a2 2 0 0 1 0 2.828z" fill="currentColor"></svg:path><svg:path d="M11 2H7a4.984 4.984 0 0 0-3.863 8.153A2.959 2.959 0 0 0 3 11a2.994 2.994 0 0 0 2 2.815V14a2.002 2.002 0 0 1-2 2H2v2h1a4.005 4.005 0 0 0 4-4v-.184A2.996 2.996 0 0 0 8.816 12H11a5 5 0 0 0 0-10zM6 12a1 1 0 1 1 1-1a1 1 0 0 1-1 1zm5-2H8.816a2.974 2.974 0 0 0-4.422-1.525A2.99 2.99 0 0 1 7 4h4a3 3 0 0 1 0 6z" fill="currentColor"></svg:path>`,
})
export class CarbonScalpelLassoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonScalpelSelectIcon],svg[carbon-scalpel-select-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M28.828 7.172a4.094 4.094 0 0 0-5.656 0L.343 30H9.59a4.968 4.968 0 0 0 3.536-1.465l15.703-15.707a3.998 3.998 0 0 0 0-5.656zM12.293 20.879l2.086-2.086l2.83 2.83l-2.087 2.085zm-.583 6.242A2.982 2.982 0 0 1 9.589 28H5.17l5.708-5.707l2.83 2.83zm15.704-15.707l-8.792 8.794l-2.83-2.83l8.793-8.792a2.047 2.047 0 0 1 2.829 0a2 2 0 0 1 0 2.828z" fill="currentColor"></svg:path><svg:path d="M15 2a2.995 2.995 0 0 0-2.816 2H7.816A2.993 2.993 0 1 0 4 7.815v4.37a3 3 0 1 0 2 0v-4.37A2.996 2.996 0 0 0 7.816 6h4.368A2.995 2.995 0 1 0 15 2zM5 16a1 1 0 1 1 1-1a1 1 0 0 1-1 1zM5 6a1 1 0 1 1 1-1a1 1 0 0 1-1 1zm10 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1z" fill="currentColor"></svg:path>`,
})
export class CarbonScalpelSelectIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonScanIcon],svg[carbon-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 29H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16v2H5v22h16Z"></svg:path><svg:path fill="currentColor" d="M15 9h2v14h-2zm12 0h2v14h-2zm-6 0h2v14h-2z"></svg:path>`,
})
export class CarbonScanIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonScanAltIcon],svg[carbon-scan-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 24H10a2 2 0 0 1-2-2v-3h2v3h12v-3h2v3a2 2 0 0 1-2 2M2 15h28v2H2zm22-2h-2v-3H10v3H8v-3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm6-3h-2V4h-6V2h8zM4 10H2V2h8v2H4zm6 20H2v-8h2v6h6zm20 0h-8v-2h6v-6h2z"></svg:path>`,
})
export class CarbonScanAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonScanDisabledIcon],svg[carbon-scan-disabled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.383 2.076a1 1 0 0 0-1.09.217l-26 26A1 1 0 0 0 3 30h8v-2H5.414l4-4H22a2 2 0 0 0 2-2V9.415l4-4V11h2V3a1 1 0 0 0-.617-.924M22 22H11.414L22 11.415zm-12-4.245V10h7.755l2-2H10a2.003 2.003 0 0 0-2 2v9.755zM11 2H2v9h2V4h7zm10 28h9v-9h-2v7h-7zM4 23.755V21H2v4.754zM25.755 2H21v2h2.755z"></svg:path>`,
})
export class CarbonScanDisabledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonScatterMatrixIcon],svg[carbon-scatter-matrix-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="9.5" cy="9.5" r="2.5" fill="currentColor"></svg:circle><svg:circle cx="9.5" cy="22.5" r="2.5" fill="currentColor"></svg:circle><svg:circle cx="22.5" cy="22.5" r="2.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M28 2H4a2 2 0 0 0-2 2v24a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2m0 13H17V4h11ZM15 4v11H4V4ZM4 17h11v11H4Zm13 11V17h11v11Z"></svg:path>`,
})
export class CarbonScatterMatrixIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSchematicsIcon],svg[carbon-schematics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 19.001A4.006 4.006 0 0 0 23 15H9a2.003 2.003 0 0 1-2-2V9.857A4 4 0 0 0 9.858 7h12.284a4 4 0 1 0 0-2H9.858A3.992 3.992 0 1 0 5 9.858v3.141A4.006 4.006 0 0 0 9.001 17H23a2.003 2.003 0 0 1 2 2.001V22h-3v3H9.858a4 4 0 1 0 0 2H22v3h8v-8h-3ZM26 4a2 2 0 1 1-2 2a2 2 0 0 1 2-2M4 6a2 2 0 1 1 2 2a2 2 0 0 1-2-2m2 22a2 2 0 1 1 2-2a2 2 0 0 1-2 2m22-4v4h-4v-4Z"></svg:path>`,
})
export class CarbonSchematicsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonScisControlTowerIcon],svg[carbon-scis-control-tower-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 19c-.3 0-.7.1-1 .2L20.4 12c1-1.1 1.6-2.5 1.6-4c0-3.3-2.7-6-6-6s-6 2.7-6 6c0 1.6.6 3 1.6 4L6 19.2c-.3-.1-.7-.2-1-.2c-1.7 0-3 1.3-3 3s1.3 3 3 3s3-1.3 3-3c0-.6-.2-1.1-.5-1.6l5.6-7.1c.6.3 1.2.5 1.9.6v10.3c-1.2.4-2 1.5-2 2.8c0 1.7 1.3 3 3 3s3-1.3 3-3c0-1.3-.8-2.4-2-2.8V13.9c.7-.1 1.3-.3 1.9-.6l5.6 7.1c-.3.5-.5 1-.5 1.6c0 1.7 1.3 3 3 3s3-1.3 3-3s-1.3-3-3-3M16 4c2.2 0 4 1.8 4 4s-1.8 4-4 4s-4-1.8-4-4s1.8-4 4-4M5 23c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m11 5c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1m11-5c-.6 0-1-.4-1-1s.4-1 1-1s1 .4 1 1s-.4 1-1 1"></svg:path>`,
})
export class CarbonScisControlTowerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonScisTransparentSupplyIcon],svg[carbon-scis-transparent-supply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 23v3H8.5a4.5 4.5 0 0 1 0-9H9v-2h-.5a6.5 6.5 0 0 0 0 13H23v3h8v-8Zm6 6h-4v-4h4Z"></svg:path><svg:path fill="currentColor" d="M21 22h-2v-3h-6v3h-2v-3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2zm-5-6a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3m0-4a1 1 0 1 0 1 1a1 1 0 0 0-1-1"></svg:path><svg:path fill="currentColor" d="M23.5 4H9V1H1v8h8V6h14.5a4.5 4.5 0 0 1 0 9H23v2h.5a6.5 6.5 0 0 0 0-13M7 7H3V3h4Z"></svg:path>`,
})
export class CarbonScisTransparentSupplyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonScooterIcon],svg[carbon-scooter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 28a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2M24 8h-6v2h6a1 1 0 0 1 0 2h-3a1 1 0 0 0-.98 1.196l.924 4.621L18.434 22h-2.69l-2.572-8.575A1.99 1.99 0 0 0 11.256 12H6v2h5.256l.6 2H7a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h1a4 4 0 0 0 8 0h7a1 1 0 0 0 .857-.485l3-5a1 1 0 0 0 .123-.711L22.22 14H24a3 3 0 0 0 0-6M8 26a2.003 2.003 0 0 1-2-2h4a2.003 2.003 0 0 1-2 2m-4-4v-1a3.003 3.003 0 0 1 3-3h5.456l1.2 4z"></svg:path>`,
})
export class CarbonScooterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonScooterFrontIcon],svg[carbon-scooter-front-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 19h2v9h-2z"></svg:path><svg:path fill="currentColor" d="M23 10V8h-3a2.003 2.003 0 0 0-2-2h-4a2.003 2.003 0 0 0-2 2H9v2h3v4.184A3 3 0 0 0 10 17v7h2v-7a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v7h2v-7a3 3 0 0 0-2-2.816V10Zm-5-2v6h-4V8Z"></svg:path>`,
})
export class CarbonScooterFrontIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonScreenIcon],svg[carbon-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 4H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v4H8v2h16v-2h-4v-4h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M18 28h-4v-4h4Zm10-6H4V6h24Z"></svg:path>`,
})
export class CarbonScreenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonScreenMapIcon],svg[carbon-screen-map-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 25h8v2h-8zm0-4h8v2h-8zm-3.586-10H23V9h-8v8h2v-4.586L23.586 19L25 17.586z"></svg:path><svg:path fill="currentColor" d="M28 3H4c-1.103 0-2 .898-2 2v16c0 1.103.897 2 2 2h8v4H8v2h12v-8H4V5h24v14h2V5c0-1.102-.897-2-2-2M18 27h-4v-4h4z"></svg:path>`,
})
export class CarbonScreenMapIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonScreenMapSetIcon],svg[carbon-screen-map-set-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 26h7v2h-7zm0-4h7v2h-7zm-3.586-10H25v-2h-8v8h2v-4.586L25.586 20L27 18.586z"></svg:path><svg:path fill="currentColor" d="M7 7h22v12h2V7c0-1.102-.897-2-2-2H7c-1.103 0-2 .898-2 2v15c0 1.103.897 2 2 2h7v4h-4v2h12v-8H7zm13 21h-4v-4h4z"></svg:path><svg:path fill="currentColor" d="M26 3V1H3c-1.103 0-2 .897-2 2v15h2V3z"></svg:path>`,
})
export class CarbonScreenMapSetIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonScreenOffIcon],svg[carbon-screen-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 22H11.41L30 3.41L28.59 2l-2 2H4a2 2 0 0 0-2 2v16h2V6h20.59L2 28.59L3.41 30l6-6H12v4H8v2h16v-2h-4v-4h8a2 2 0 0 0 2-2V9h-2Zm-10 6h-4v-4h4Z"></svg:path>`,
})
export class CarbonScreenOffIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonScriptIcon],svg[carbon-script-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18.83 26l2.58-2.58L20 22l-4 4l4 4l1.42-1.41zm8.34 0l-2.58 2.58L26 30l4-4l-4-4l-1.42 1.41z"></svg:path><svg:path fill="currentColor" d="M14 28H8V4h8v6a2.006 2.006 0 0 0 2 2h6v6h2v-8a.91.91 0 0 0-.3-.7l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v24a2.006 2.006 0 0 0 2 2h6Zm4-23.6l5.6 5.6H18Z"></svg:path>`,
})
export class CarbonScriptIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonScriptReferenceIcon],svg[carbon-script-reference-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v2h4.586L2 28.586L3.414 30L10 23.414V28h2v-8zm23.17 6l-2.58 2.58L26 30l4-4l-4-4l-1.42 1.41zm-8.34 0l2.58-2.58L20 22l-4 4l4 4l1.42-1.41zM25.7 9.3l-7-7A.9.9 0 0 0 18 2H8a2.006 2.006 0 0 0-2 2v12h2V4h8v6a2.006 2.006 0 0 0 2 2h6v6h2v-8a.91.91 0 0 0-.3-.7M18 10V4.4l5.6 5.6z"></svg:path>`,
})
export class CarbonScriptReferenceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSdkIcon],svg[carbon-sdk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 9h-2.1L24 15.6V9h-2v14h2v-4.3l.9-1.5l3 5.8H30l-3.9-7.6zM16 23h-4V9h4a4.01 4.01 0 0 1 4 4v6a4.01 4.01 0 0 1-4 4m-2-2h2a2.006 2.006 0 0 0 2-2v-6a2.006 2.006 0 0 0-2-2h-2zm-6 2H2v-2h6v-4H4a2.006 2.006 0 0 1-2-2v-4a2.006 2.006 0 0 1 2-2h6v2H4v4h4a2.006 2.006 0 0 1 2 2v4a2.006 2.006 0 0 1-2 2"></svg:path>`,
})
export class CarbonSdkIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSearchIcon],svg[carbon-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m29 27.586l-7.552-7.552a11.018 11.018 0 1 0-1.414 1.414L27.586 29ZM4 13a9 9 0 1 1 9 9a9.01 9.01 0 0 1-9-9"></svg:path>`,
})
export class CarbonSearchIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSearchAdvancedIcon],svg[carbon-search-advanced-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 6h-4V2h-2v4h-4v2h4v4h2V8h4zm-6 22.586l-5.975-5.975a9.023 9.023 0 1 0-1.414 1.414L22.586 30zM4 17a7 7 0 1 1 7 7a7.01 7.01 0 0 1-7-7"></svg:path>`,
})
export class CarbonSearchAdvancedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSearchLocateIcon],svg[carbon-search-locate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m30 28.586l-4.688-4.688a8.028 8.028 0 1 0-1.415 1.414L28.586 30zM19 25a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6M2 12h8v2H2zM2 2h16v2H2zm0 5h16v2H2z"></svg:path>`,
})
export class CarbonSearchLocateIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSearchLocateMirrorIcon],svg[carbon-search-locate-mirror-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21 28.6l-4.7-4.7c1.1-1.4 1.7-3.1 1.7-4.9c0-4.4-3.6-8-8-8s-8 3.6-8 8s3.6 8 8 8c1.8 0 3.5-.6 4.9-1.7l4.7 4.7zM10 25c-3.3 0-6-2.7-6-6s2.7-6 6-6s6 2.7 6 6s-2.7 6-6 6m12-13h8v2h-8zm-8-5h16v2H14zm0-5h16v2H14z"></svg:path>`,
})
export class CarbonSearchLocateMirrorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSecurityIcon],svg[carbon-security-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 16.59L11.41 14L10 15.41l4 4l8-8L20.59 10z"></svg:path><svg:path fill="currentColor" d="m16 30l-6.176-3.293A10.98 10.98 0 0 1 4 17V4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v13a10.98 10.98 0 0 1-5.824 9.707ZM6 4v13a8.99 8.99 0 0 0 4.766 7.942L16 27.733l5.234-2.79A8.99 8.99 0 0 0 26 17V4Z"></svg:path>`,
})
export class CarbonSecurityIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSecurityServicesIcon],svg[carbon-security-services-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 24v-2h-2.101a5 5 0 0 0-.732-1.753l1.49-1.49l-1.414-1.414l-1.49 1.49A5 5 0 0 0 24 18.101V16h-2v2.101a5 5 0 0 0-1.753.732l-1.49-1.49l-1.414 1.414l1.49 1.49A5 5 0 0 0 18.101 22H16v2h2.101a5 5 0 0 0 .732 1.753l-1.49 1.49l1.414 1.414l1.49-1.49a5 5 0 0 0 1.753.732V30h2v-2.101a5 5 0 0 0 1.753-.732l1.49 1.49l1.414-1.414l-1.49-1.49A5 5 0 0 0 27.899 24Zm-7 2a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3"></svg:path><svg:path fill="currentColor" d="m14 26.667l-3.234-1.725A8.99 8.99 0 0 1 6 17V4h20v10h2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v13a10.98 10.98 0 0 0 5.824 9.707L14 28.934Z"></svg:path>`,
})
export class CarbonSecurityServicesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSelect01Icon],svg[carbon-select-01-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6H8V2H6v4H2v2h4v4h2V8h4zm4 0h4v2h-4zm8 0v2h4v4h2V8a2 2 0 0 0-2-2zM6 16h2v4H6zm2 12v-4H6v4a2 2 0 0 0 2 2h4v-2zm20-12h2v4h-2zM16 28h4v2h-4zm12-4v4h-4v2h4a2 2 0 0 0 2-2v-4z"></svg:path>`,
})
export class CarbonSelect01Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSelect02Icon],svg[carbon-select-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 6H8V2H6v4H2v2h4v4h2V8h4zm18 4V4h-6v2h-8v2h8v2h2v14h-2v2H10v-2H8v-8H6v8H4v6h6v-2h14v2h6v-6h-2V10zM8 28H6v-2h2zm20 0h-2v-2h2zM26 6h2v2h-2z"></svg:path>`,
})
export class CarbonSelect02Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSelectWindowIcon],svg[carbon-select-window-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 26H4a2 2 0 0 1-2-2v-4h2v4h4zM2 12h2v4H2zm24-4h-2V4h-4V2h4a2 2 0 0 1 2 2zM12 2h4v2h-4zM4 8H2V4a2 2 0 0 1 2-2h4v2H4zm23 24a1 1 0 0 1-.707-.293l-6.138-6.138l-3.323 4.986a1 1 0 0 1-1.79-.268l-6-20a1 1 0 0 1 1.245-1.245l20 6a1 1 0 0 1 .268 1.79l-4.986 3.323l6.138 6.138a1 1 0 0 1 0 1.414l-4 4A1 1 0 0 1 27 32m0-2.414L29.586 27l-7.155-7.155l5.246-3.498l-16.185-4.855l4.855 16.185l3.498-5.246z"></svg:path>`,
})
export class CarbonSelectWindowIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSendIcon],svg[carbon-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m27.45 15.11l-22-11a1 1 0 0 0-1.08.12a1 1 0 0 0-.33 1L7 16L4 26.74A1 1 0 0 0 5 28a1 1 0 0 0 .45-.11l22-11a1 1 0 0 0 0-1.78m-20.9 10L8.76 17H18v-2H8.76L6.55 6.89L24.76 16Z"></svg:path>`,
})
export class CarbonSendIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSendActionUsageIcon],svg[carbon-send-action-usage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 21a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h11.172a2 2 0 0 1 1.414.586L26 16l-4.414 4.414a2 2 0 0 1-1.414.586z"></svg:path><svg:path fill="currentColor" d="M21 30H11c-4.963 0-9-4.037-9-9V11c0-4.963 4.037-9 9-9h10c4.963 0 9 4.037 9 9v10c0 4.963-4.037 9-9 9M11 4c-3.86 0-7 3.14-7 7v10c0 3.86 3.14 7 7 7h10c3.86 0 7-3.14 7-7V11c0-3.86-3.14-7-7-7z"></svg:path>`,
})
export class CarbonSendActionUsageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSendAltIcon],svg[carbon-send-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.71 4.29a1 1 0 0 0-1.05-.23l-22 8a1 1 0 0 0 0 1.87l9.6 3.84l3.84 9.6a1 1 0 0 0 .9.63a1 1 0 0 0 .92-.66l8-22a1 1 0 0 0-.21-1.05M19 24.2l-2.79-7L21 12.41L19.59 11l-4.83 4.83L7.8 13l17.53-6.33Z"></svg:path>`,
})
export class CarbonSendAltIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSendAltFilledIcon],svg[carbon-send-alt-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.71 4.29a1 1 0 0 0-1.05-.23l-22 8a1 1 0 0 0 0 1.87l8.59 3.43L19.59 11L21 12.41l-6.37 6.37l3.44 8.59A1 1 0 0 0 19 28a1 1 0 0 0 .92-.66l8-22a1 1 0 0 0-.21-1.05"></svg:path>`,
})
export class CarbonSendAltFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSendBackwardIcon],svg[carbon-send-backward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 7H2V4a2 2 0 0 1 2-2h3v2H4zm3 15H4a2 2 0 0 1-2-2v-3h2v3h3zM2 10h2v4H2zm20-3h-2V4h-3V2h3a2 2 0 0 1 2 2zM10 2h4v2h-4zm18 28H12a2 2 0 0 1-2-2V12a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2M12 12v16h16V12z"></svg:path>`,
})
export class CarbonSendBackwardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSendFilledIcon],svg[carbon-send-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m27.45 15.11l-22-11a1 1 0 0 0-1.08.12a1 1 0 0 0-.33 1L6.69 15H18v2H6.69L4 26.74A1 1 0 0 0 5 28a1 1 0 0 0 .45-.11l22-11a1 1 0 0 0 0-1.78"></svg:path>`,
})
export class CarbonSendFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSendToBackIcon],svg[carbon-send-to-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 10h-6V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2M12 28V12h16l.002 16Z"></svg:path>`,
})
export class CarbonSendToBackIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonServerDnsIcon],svg[carbon-server-dns-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a8 8 0 1 0 8 8a8.01 8.01 0 0 0-8-8m5.91 7h-2.438a15.3 15.3 0 0 0-.791-4.36A6.01 6.01 0 0 1 21.91 9m-5.888 6.999h-.008c-.38-.12-1.309-1.821-1.479-4.999h2.93c-.17 3.176-1.094 4.877-1.443 4.999M14.535 9c.17-3.176 1.094-4.877 1.443-4.999h.008c.38.12 1.309 1.821 1.479 4.999zM13.32 4.64A15.3 15.3 0 0 0 12.528 9H10.09a6.01 6.01 0 0 1 3.23-4.36M10.09 11h2.437a15.3 15.3 0 0 0 .792 4.36A6.01 6.01 0 0 1 10.09 11m8.59 4.36a15.3 15.3 0 0 0 .792-4.36h2.438a6.01 6.01 0 0 1-3.23 4.36M28 30H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2M4 22v6h24v-6z"></svg:path><svg:circle cx="7" cy="25" r="1" fill="currentColor"></svg:circle>`,
})
export class CarbonServerDnsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonServerProxyIcon],svg[carbon-server-proxy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 30h20a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2m0-8h20v6H6Z"></svg:path><svg:circle cx="9" cy="25" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m26 2l-1.41 1.41L27.17 6h-4.855A6.984 6.984 0 0 0 9.08 10H4.83l2.58-2.59L6 6l-5 5l5 5l1.41-1.41L4.83 12h4.855A6.984 6.984 0 0 0 22.92 8h4.25l-2.58 2.59L26 12l5-5Zm-5 7a4.983 4.983 0 0 1-8.974 3H16v-2h-4.899a4.985 4.985 0 0 1 8.874-4H16v2h4.899A5 5 0 0 1 21 9"></svg:path>`,
})
export class CarbonServerProxyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonServerTimeIcon],svg[carbon-server-time-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 30H4a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2M4 22v6h24v-6Z"></svg:path><svg:circle cx="7" cy="25" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="m19 11.586l-2-2V6h-2v4.414L17.586 13z"></svg:path><svg:path fill="currentColor" d="M16 18a8 8 0 1 1 8-8a8.01 8.01 0 0 1-8 8m0-14a6 6 0 1 0 6 6a6.007 6.007 0 0 0-6-6"></svg:path>`,
})
export class CarbonServerTimeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonServiceDeskIcon],svg[carbon-service-desk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 24.005v-2a12.01 12.01 0 0 0-11-11.95v-2.05h3v-2h-8v2h3v2.05a12.01 12.01 0 0 0-11 11.95v2H2v2h28v-2Zm-12-12a10.02 10.02 0 0 1 9.798 8H6.202a10.02 10.02 0 0 1 9.798-8m-10 10h20v2H6Z"></svg:path>`,
})
export class CarbonServiceDeskIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonServiceIdIcon],svg[carbon-service-id-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 24v-2h-2.101a5 5 0 0 0-.732-1.753l1.49-1.49l-1.414-1.414l-1.49 1.49A5 5 0 0 0 24 18.101V16h-2v2.101a5 5 0 0 0-1.753.732l-1.49-1.49l-1.414 1.414l1.49 1.49A5 5 0 0 0 18.101 22H16v2h2.101c.13.637.384 1.229.732 1.753l-1.49 1.49l1.414 1.414l1.49-1.49a5 5 0 0 0 1.753.732V30h2v-2.101a5 5 0 0 0 1.753-.732l1.49 1.49l1.414-1.414l-1.49-1.49A5 5 0 0 0 27.899 24zm-7 2c-1.654 0-3-1.346-3-3s1.346-3 3-3s3 1.346 3 3s-1.346 3-3 3M12 6h4v2h-4z"></svg:path><svg:path fill="currentColor" d="M6 28V4h16v9h2V4c0-1.103-.897-2-2-2H6c-1.103 0-2 .897-2 2v24c0 1.103.897 2 2 2h8v-2z"></svg:path>`,
})
export class CarbonServiceIdIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonServiceLevelsIcon],svg[carbon-service-levels-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="7" cy="19" r="1" fill="currentColor"></svg:circle><svg:circle cx="16" cy="11" r="1" fill="currentColor"></svg:circle><svg:circle cx="25" cy="19" r="1" fill="currentColor"></svg:circle><svg:circle cx="10" cy="14" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M30 20h-2c0-1.262-.195-2.504-.579-3.693l1.904-.615C29.773 17.08 30 18.53 30 20m-.15-11.022l-2.436 2.436A2 2 0 0 1 26 12a2.002 2.002 0 0 1-1.414-3.414l2.437-2.437A4 4 0 0 0 26 6c-2.206 0-4 1.795-4 4c0 .74.215 1.425.567 2.02l-4.548 4.548a3.95 3.95 0 0 0-2.02-.567c-2.205 0-4 1.794-4 4s1.795 4 4 4s4-1.795 4-4c0-.74-.214-1.424-.566-2.02l4.548-4.547a3.95 3.95 0 0 0 2.019.567c2.206 0 4-1.795 4-4a4 4 0 0 0-.15-1.023M16 22c-1.103 0-2-.897-2-2s.897-2 2-2s2 .898 2 2s-.897 2-2 2M4 20H2C2 12.28 8.28 6 16 6c1.47 0 2.92.227 4.307.675l-.614 1.904A12 12 0 0 0 16 8C9.383 8 4 13.383 4 20"></svg:path>`,
})
export class CarbonServiceLevelsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSessionBorderControlIcon],svg[carbon-session-border-control-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m26 8l-1.41 1.41L27.17 12H16a5.97 5.97 0 0 0-4 1.54V6.83l2.59 2.58L16 8l-5-5l-5 5l1.41 1.41L10 6.83V18a5.97 5.97 0 0 0 1.54 4H4.83l2.58-2.59L6 18l-5 5l5 5l1.41-1.41L4.83 24H16a5.99 5.99 0 0 0 4.46-10h6.71l-2.58 2.59L26 18l5-5Zm-6 10a4 4 0 1 1-4-4a4.005 4.005 0 0 1 4 4"></svg:path>`,
})
export class CarbonSessionBorderControlIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSettingsIcon],svg[carbon-settings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 16.76v-1.53l1.92-1.68A2 2 0 0 0 29.3 11l-2.36-4a2 2 0 0 0-1.73-1a2 2 0 0 0-.64.1l-2.43.82a11 11 0 0 0-1.31-.75l-.51-2.52a2 2 0 0 0-2-1.61h-4.68a2 2 0 0 0-2 1.61l-.51 2.52a11.5 11.5 0 0 0-1.32.75l-2.38-.86A2 2 0 0 0 6.79 6a2 2 0 0 0-1.73 1L2.7 11a2 2 0 0 0 .41 2.51L5 15.24v1.53l-1.89 1.68A2 2 0 0 0 2.7 21l2.36 4a2 2 0 0 0 1.73 1a2 2 0 0 0 .64-.1l2.43-.82a11 11 0 0 0 1.31.75l.51 2.52a2 2 0 0 0 2 1.61h4.72a2 2 0 0 0 2-1.61l.51-2.52a11.5 11.5 0 0 0 1.32-.75l2.42.82a2 2 0 0 0 .64.1a2 2 0 0 0 1.73-1l2.28-4a2 2 0 0 0-.41-2.51ZM25.21 24l-3.43-1.16a8.9 8.9 0 0 1-2.71 1.57L18.36 28h-4.72l-.71-3.55a9.4 9.4 0 0 1-2.7-1.57L6.79 24l-2.36-4l2.72-2.4a8.9 8.9 0 0 1 0-3.13L4.43 12l2.36-4l3.43 1.16a8.9 8.9 0 0 1 2.71-1.57L13.64 4h4.72l.71 3.55a9.4 9.4 0 0 1 2.7 1.57L25.21 8l2.36 4l-2.72 2.4a8.9 8.9 0 0 1 0 3.13L27.57 20Z"></svg:path><svg:path fill="currentColor" d="M16 22a6 6 0 1 1 6-6a5.94 5.94 0 0 1-6 6m0-10a3.91 3.91 0 0 0-4 4a3.91 3.91 0 0 0 4 4a3.91 3.91 0 0 0 4-4a3.91 3.91 0 0 0-4-4"></svg:path>`,
})
export class CarbonSettingsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSettingsAdjustIcon],svg[carbon-settings-adjust-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 8h-4.1c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2v2h14.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30zm-9 4c-1.7 0-3-1.3-3-3s1.3-3 3-3s3 1.3 3 3s-1.3 3-3 3M2 24h4.1c.5 2.3 2.5 4 4.9 4s4.4-1.7 4.9-4H30v-2H15.9c-.5-2.3-2.5-4-4.9-4s-4.4 1.7-4.9 4H2zm9-4c1.7 0 3 1.3 3 3s-1.3 3-3 3s-3-1.3-3-3s1.3-3 3-3"></svg:path>`,
})
export class CarbonSettingsAdjustIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSettingsCheckIcon],svg[carbon-settings-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 22a6 6 0 1 1 6-6a5.936 5.936 0 0 1-6 6m0-10a3.91 3.91 0 0 0-4 4a3.91 3.91 0 0 0 4 4a3.91 3.91 0 0 0 4-4a3.91 3.91 0 0 0-4-4"></svg:path><svg:path fill="currentColor" d="m29.305 11.044l-2.36-4.088a2 2 0 0 0-2.374-.894l-2.434.823a11 11 0 0 0-1.312-.758l-.503-2.519A2 2 0 0 0 18.36 2h-4.72a2 2 0 0 0-1.962 1.608l-.503 2.519a11 11 0 0 0-1.327.753l-2.42-.818a2 2 0 0 0-2.372.894l-2.36 4.088a2 2 0 0 0 .411 2.503l1.931 1.696C5.021 15.495 5 15.745 5 16q0 .387.028.766l-1.92 1.688a2 2 0 0 0-.413 2.502l2.36 4.088a2 2 0 0 0 2.374.895l2.434-.824a11 11 0 0 0 1.312.759l.503 2.518A2 2 0 0 0 13.64 30H18v-2h-4.36l-.71-3.55a9.1 9.1 0 0 1-2.695-1.572l-3.447 1.166l-2.36-4.088l2.725-2.395a8.9 8.9 0 0 1-.007-3.128l-2.718-2.389l2.36-4.088l3.427 1.16A9 9 0 0 1 12.93 7.55L13.64 4h4.72l.71 3.55a9.1 9.1 0 0 1 2.695 1.572l3.447-1.166l2.36 4.088l-2.798 2.452L26.092 16l2.8-2.454a2 2 0 0 0 .413-2.502"></svg:path><svg:path fill="currentColor" d="m23 26.18l-2.59-2.59L19 25l4 4l7-7l-1.41-1.41z"></svg:path>`,
})
export class CarbonSettingsCheckIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSettingsEditIcon],svg[carbon-settings-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m31.707 19.293l-3-3a1 1 0 0 0-1.414 0L18 25.586V30h4.414l9.293-9.293a1 1 0 0 0 0-1.414M21.586 28H20v-1.586l5-5L26.586 23zM28 21.586L26.414 20L28 18.414L29.586 20zM16 22c-3.364 0-6-2.636-6-6s2.636-6 6-6s6 2.636 6 6s-2.636 6-6 6m0-10c-2.28 0-4 1.72-4 4s1.72 4 4 4s4-1.72 4-4s-1.72-4-4-4"></svg:path><svg:path fill="currentColor" d="m27.547 12l1.733-1l-2.336-4.044a2 2 0 0 0-2.373-.894l-2.434.823a11 11 0 0 0-1.312-.758l-.503-2.52A2 2 0 0 0 18.36 2h-4.72a2 2 0 0 0-1.962 1.608l-.503 2.519c-.46.224-.906.469-1.327.753l-2.42-.818a2 2 0 0 0-2.373.894l-2.36 4.088a2 2 0 0 0 .412 2.502l1.931 1.697C5.021 15.495 5 15.745 5 16q0 .387.028.766l-1.92 1.688a2 2 0 0 0-.413 2.502l2.36 4.088a2 2 0 0 0 2.374.894l2.434-.823q.627.423 1.312.758l.503 2.519A2 2 0 0 0 13.64 30H16v-2h-2.36l-.71-3.55a9.1 9.1 0 0 1-2.695-1.572l-3.447 1.166l-2.36-4.088l2.725-2.395a8.9 8.9 0 0 1-.007-3.128l-2.719-2.39l2.361-4.087l3.427 1.16A9 9 0 0 1 12.93 7.55L13.64 4h4.721l.71 3.55a9.1 9.1 0 0 1 2.695 1.572l3.447-1.166z"></svg:path>`,
})
export class CarbonSettingsEditIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSettingsServicesIcon],svg[carbon-settings-services-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 25h-2v-2h1v-4h-4v1h-2v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1"></svg:path><svg:path fill="currentColor" d="M24 30h-6a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1m-5-2h4v-4h-4zm-4-8.142A3.993 3.993 0 1 1 20 16h2a6 6 0 1 0-7 5.91z"></svg:path><svg:path fill="currentColor" d="m28.89 13.55l-2.31 2.03l-1.42-1.42l2.41-2.12l-2.36-4.08l-3.44 1.16a9.4 9.4 0 0 0-2.7-1.57L18.36 4h-4.72l-.71 3.55a8.9 8.9 0 0 0-2.71 1.57L6.79 7.96l-2.36 4.08l2.72 2.39a8.9 8.9 0 0 0 0 3.13l-2.72 2.4l2.36 4.08l3.44-1.16a9.4 9.4 0 0 0 2.7 1.57l.71 3.55H15v2h-1.36a2 2 0 0 1-1.96-1.61l-.51-2.52a11 11 0 0 1-1.31-.75l-2.43.82a2 2 0 0 1-.64.1a1.97 1.97 0 0 1-1.73-1L2.7 20.96a2 2 0 0 1 .41-2.51l1.92-1.68C5.01 16.51 5 16.26 5 16s.02-.51.04-.76l-1.93-1.69a2 2 0 0 1-.41-2.51l2.36-4.08a1.97 1.97 0 0 1 1.73-1a2 2 0 0 1 .64.1l2.42.82a12 12 0 0 1 1.32-.75l.51-2.52A2 2 0 0 1 13.64 2h4.72a2 2 0 0 1 1.96 1.61l.51 2.52a11 11 0 0 1 1.31.75l2.43-.82a2 2 0 0 1 .64-.1a1.97 1.97 0 0 1 1.73 1l2.36 4.08a2 2 0 0 1-.41 2.51"></svg:path>`,
})
export class CarbonSettingsServicesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSettingsViewIcon],svg[carbon-settings-view-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="23" cy="24" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M30.777 23.479A8.64 8.64 0 0 0 23 18a8.64 8.64 0 0 0-7.777 5.479L15 24l.223.522A8.64 8.64 0 0 0 23 30a8.64 8.64 0 0 0 7.777-5.478L31 24zM23 28a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m-10.601-7.2A6 6 0 1 1 22 16h-2a4 4 0 1 0-6.4 3.2z"></svg:path><svg:path fill="currentColor" d="m29.305 11.044l-2.36-4.088a2 2 0 0 0-2.374-.895l-2.434.824a11 11 0 0 0-1.312-.758l-.504-2.52A2 2 0 0 0 18.36 2h-4.72a2 2 0 0 0-1.961 1.608l-.504 2.519a11 11 0 0 0-1.327.753l-2.42-.819a2 2 0 0 0-2.372.895l-2.36 4.088a2 2 0 0 0 .411 2.502l1.931 1.697C5.021 15.495 5 15.745 5 16q0 .387.028.766l-1.92 1.688a2 2 0 0 0-.413 2.502l2.36 4.088a2 2 0 0 0 2.374.895l2.434-.824a11 11 0 0 0 1.312.759l.503 2.518A2 2 0 0 0 13.64 30H15v-2h-1.36l-.71-3.55a9.1 9.1 0 0 1-2.695-1.572l-3.447 1.166l-2.36-4.088l2.725-2.395a8.9 8.9 0 0 1-.007-3.128l-2.718-2.39l2.36-4.087l3.427 1.16A9 9 0 0 1 12.93 7.55L13.64 4h4.72l.71 3.55a9.1 9.1 0 0 1 2.695 1.572l3.447-1.166l2.36 4.088l-2.798 2.452L26.092 16l2.8-2.454a2 2 0 0 0 .413-2.502"></svg:path>`,
})
export class CarbonSettingsViewIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonShapeExceptIcon],svg[carbon-shape-except-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 10h-6V4a2 2 0 0 0-2-2H4a2.003 2.003 0 0 0-2 2v16a2.003 2.003 0 0 0 2 2h6v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2M12 20v-8h8v8ZM3.999 4H20v6h-8a2 2 0 0 0-2 2v8H4Z"></svg:path>`,
})
export class CarbonShapeExceptIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonShapeExcludeIcon],svg[carbon-shape-exclude-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 10h10V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6V12a2 2 0 0 1 2-2"></svg:path><svg:path fill="currentColor" d="M28 10h-6v10a2 2 0 0 1-2 2H10v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonShapeExcludeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonShapeIntersectIcon],svg[carbon-shape-intersect-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 10h-6V4a2.003 2.003 0 0 0-2-2H4a2.003 2.003 0 0 0-2 2v16a2.003 2.003 0 0 0 2 2h6v6a2.003 2.003 0 0 0 2 2h16a2.003 2.003 0 0 0 2-2V12a2.003 2.003 0 0 0-2-2M4 20V4h16v6h-8a2.003 2.003 0 0 0-2 2v8Zm8 8v-6h8a2.003 2.003 0 0 0 2-2v-8h6v16Z"></svg:path>`,
})
export class CarbonShapeIntersectIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonShapeJoinIcon],svg[carbon-shape-join-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 10h-6V4a2.003 2.003 0 0 0-2-2H4a2.003 2.003 0 0 0-2 2v16a2.003 2.003 0 0 0 2 2h6v6a2.003 2.003 0 0 0 2 2h16a2.003 2.003 0 0 0 2-2V12a2.003 2.003 0 0 0-2-2M4 20V4h6v16Zm18 8V12h6v16Z"></svg:path>`,
})
export class CarbonShapeJoinIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonShapeUniteIcon],svg[carbon-shape-unite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 10h-6V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonShapeUniteIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonShapesIcon],svg[carbon-shapes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 16H3v11a2 2 0 0 0 2 2h8v-2H5zm23 13H17a1 1 0 0 1-.876-1.482l5.5-10A.99.99 0 0 1 22.5 17c.343 0 .686.172.876.518l5.5 10A1 1 0 0 1 28 29m-9.309-2h7.618L22.5 20.075zM27 3H16v2h11v13.992h2V5a2 2 0 0 0-2-2M11 3H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m0 8H5V5h6z"></svg:path>`,
})
export class CarbonShapesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonShareIcon],svg[carbon-share-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 20a5 5 0 0 0-3.89 1.89l-7.31-4.57a4.46 4.46 0 0 0 0-2.64l7.31-4.57A5 5 0 1 0 18 7a4.8 4.8 0 0 0 .2 1.32l-7.31 4.57a5 5 0 1 0 0 6.22l7.31 4.57A4.8 4.8 0 0 0 18 25a5 5 0 1 0 5-5m0-16a3 3 0 1 1-3 3a3 3 0 0 1 3-3M7 19a3 3 0 1 1 3-3a3 3 0 0 1-3 3m16 9a3 3 0 1 1 3-3a3 3 0 0 1-3 3"></svg:path>`,
})
export class CarbonShareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonShareKnowledgeIcon],svg[carbon-share-knowledge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 25h-6a3 3 0 0 0-3 3v2h2v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h2v-2a3 3 0 0 0-3-3m-7-5a4 4 0 1 0 4-4a4 4 0 0 0-4 4m6 0a2 2 0 1 1-2-2a2 2 0 0 1 2 2M6 21v-1H4v1a7 7 0 0 0 7 7h3v-2h-3a5 5 0 0 1-5-5m13-11h7v2h-7zm0-4h10v2H19zm0-4h10v2H19zm-8 9H5a3 3 0 0 0-3 3v2h2v-2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h2v-2a3 3 0 0 0-3-3m-3-1a4 4 0 1 0-4-4a4 4 0 0 0 4 4m0-6a2 2 0 1 1-2 2a2 2 0 0 1 2-2"></svg:path>`,
})
export class CarbonShareKnowledgeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonShoppingBagIcon],svg[carbon-shopping-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28.76 11.35A1 1 0 0 0 28 11h-6V7a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3v4H4a1 1 0 0 0-1 1.15L4.88 24.3a2 2 0 0 0 2 1.7h18.26a2 2 0 0 0 2-1.7L29 12.15a1 1 0 0 0-.24-.8M12 7a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4h-8Zm13.14 17H6.86L5.17 13h21.66Z"></svg:path>`,
})
export class CarbonShoppingBagIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonShoppingCartIcon],svg[carbon-shopping-cart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="10" cy="28" r="2" fill="currentColor"></svg:circle><svg:circle cx="24" cy="28" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M28 7H5.82L5 2.8A1 1 0 0 0 4 2H0v2h3.18L7 23.2a1 1 0 0 0 1 .8h18v-2H8.82L8 18h18a1 1 0 0 0 1-.78l2-9A1 1 0 0 0 28 7m-2.8 9H7.62l-1.4-7h20.53Z"></svg:path>`,
})
export class CarbonShoppingCartIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonShoppingCartArrowDownIcon],svg[carbon-shopping-cart-arrow-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="10" cy="28" r="2" fill="currentColor"></svg:circle><svg:circle cx="24" cy="28" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M4.98 2.804A1 1 0 0 0 4 2H0v2h3.18l3.84 19.196A1 1 0 0 0 8 24h18v-2H8.82l-.8-4H26a1 1 0 0 0 .976-.783L29.244 7h-2.047l-1.999 9H7.62Z"></svg:path><svg:path fill="currentColor" d="M21.586 6.586L18 10.172V2h-2v8.172l-3.586-3.586L11 8l6 6l6-6z"></svg:path>`,
})
export class CarbonShoppingCartArrowDownIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonShoppingCartArrowUpIcon],svg[carbon-shopping-cart-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="10" cy="28" r="2" fill="currentColor"></svg:circle><svg:circle cx="24" cy="28" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M4.98 2.804A1 1 0 0 0 4 2H0v2h3.18l3.84 19.196A1 1 0 0 0 8 24h18v-2H8.82l-.8-4H26a1 1 0 0 0 .976-.783L29.244 7h-2.047l-1.999 9H7.62Z"></svg:path><svg:path fill="currentColor" d="M21.586 9.414L18 5.828V14h-2V5.828l-3.586 3.586L11 8l6-6l6 6z"></svg:path>`,
})
export class CarbonShoppingCartArrowUpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonShoppingCartClearIcon],svg[carbon-shopping-cart-clear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="10" cy="28" r="2" fill="currentColor"></svg:circle><svg:circle cx="24" cy="28" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M4.98 2.804A1 1 0 0 0 4 2H0v2h3.18l3.84 19.196A1 1 0 0 0 8 24h18v-2H8.82l-.8-4H26a1 1 0 0 0 .976-.783L29.244 7h-2.047l-1.999 9H7.62Z"></svg:path><svg:path fill="currentColor" d="M18.41 8L22 4.41L20.59 3L17 6.59L13.41 3L12 4.41L15.59 8L12 11.59L13.41 13L17 9.41L20.59 13L22 11.59z"></svg:path>`,
})
export class CarbonShoppingCartClearIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonShoppingCartErrorIcon],svg[carbon-shopping-cart-error-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="10" cy="28" r="2" fill="currentColor"></svg:circle><svg:circle cx="24" cy="28" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M4.98 2.804A1 1 0 0 0 4 2H0v2h3.18l3.84 19.196A1 1 0 0 0 8 24h18v-2H8.82l-.8-4H26a1 1 0 0 0 .976-.783L29.244 7h-2.047l-1.999 9H7.62Z"></svg:path><svg:path fill="currentColor" d="M17 2a6 6 0 1 0 6 6a6.007 6.007 0 0 0-6-6m0 2a3.95 3.95 0 0 1 2.019.567l-5.452 5.452A3.95 3.95 0 0 1 13 8a4.005 4.005 0 0 1 4-4m0 8a3.95 3.95 0 0 1-2.019-.567l5.452-5.452A3.95 3.95 0 0 1 21 8a4.005 4.005 0 0 1-4 4"></svg:path>`,
})
export class CarbonShoppingCartErrorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonShoppingCartMinusIcon],svg[carbon-shopping-cart-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="10" cy="28" r="2" fill="currentColor"></svg:circle><svg:circle cx="24" cy="28" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M4.98 2.804A1 1 0 0 0 4 2H0v2h3.18l3.84 19.196A1 1 0 0 0 8 24h18v-2H8.82l-.8-4H26a1 1 0 0 0 .976-.783L29.244 7h-2.047l-1.999 9H7.62Z"></svg:path><svg:path fill="currentColor" d="M12 6v2h10V6z"></svg:path>`,
})
export class CarbonShoppingCartMinusIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonShoppingCartPlusIcon],svg[carbon-shopping-cart-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="10" cy="28" r="2" fill="currentColor"></svg:circle><svg:circle cx="24" cy="28" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M4.98 2.804A1 1 0 0 0 4 2H0v2h3.18l3.84 19.196A1 1 0 0 0 8 24h18v-2H8.82l-.8-4H26a1 1 0 0 0 .976-.783L29.244 7h-2.047l-1.999 9H7.62Z"></svg:path><svg:path fill="currentColor" d="M18 6V2h-2v4h-4v2h4v4h2V8h4V6z"></svg:path>`,
})
export class CarbonShoppingCartPlusIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonShoppingCatalogIcon],svg[carbon-shopping-catalog-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 24h4v4h-4zm7 0h4v4h-4zm-7-7h4v4h-4zm7 0h4v4h-4z"></svg:path><svg:path fill="currentColor" d="M28 11h-6V7c0-1.7-1.3-3-3-3h-6c-1.7 0-3 1.3-3 3v4H4c-.6 0-1 .4-1 1v.2l1.9 12.1c.1 1 1 1.7 2 1.7H15v-2H6.9L5.2 13H28zM12 7c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v4h-8z"></svg:path>`,
})
export class CarbonShoppingCatalogIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonShowDataCardsIcon],svg[carbon-show-data-cards-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M4 4v4h24V4zm24 26H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M4 24v4h24v-4zm24-4H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2M4 14v4h24v-4z"></svg:path>`,
})
export class CarbonShowDataCardsIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonShrinkScreenIcon],svg[carbon-shrink-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 28H17a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h11a2.003 2.003 0 0 1 2 2v6a2.003 2.003 0 0 1-2 2m-11-8v6h11.002L28 20zm-5-10v3.586L7.707 9.293l-1.414 1.414L10.586 15H7v2h7v-7z"></svg:path><svg:path fill="currentColor" d="M13 22H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2v9h-2V7H4v13h9Z"></svg:path>`,
})
export class CarbonShrinkScreenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonShrinkScreenFilledIcon],svg[carbon-shrink-screen-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="15" height="10" x="15" y="18" fill="currentColor" rx="2"></svg:rect><svg:path fill="currentColor" d="M12 10v3.586L7.707 9.293l-1.414 1.414L10.586 15H7v2h7v-7z"></svg:path><svg:path fill="currentColor" d="M13 22H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h22a2 2 0 0 1 2 2v9h-2V7H4v13h9Z"></svg:path>`,
})
export class CarbonShrinkScreenFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonShuffleIcon],svg[carbon-shuffle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.59 19.41L26.17 23h-6.62l-4.37-7l4.37-7h6.62l-3.58 3.59L24 14l6-6l-6-6l-1.41 1.41L26.17 7h-6.62a2 2 0 0 0-1.69.94L14 14.11l-3.86-6.17A2 2 0 0 0 8.45 7H2v2h6.45l4.37 7l-4.37 7H2v2h6.45a2 2 0 0 0 1.69-.94L14 17.89l3.86 6.17a2 2 0 0 0 1.69.94h6.62l-3.58 3.59L24 30l6-6l-6-6Z"></svg:path>`,
})
export class CarbonShuffleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonShuttleIcon],svg[carbon-shuttle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m29.81 16l-7-9.56A1 1 0 0 0 22 6H3a1 1 0 0 0-1 1v17a1 1 0 0 0 1 1h2.14a4 4 0 0 0 7.72 0h6.28a4 4 0 0 0 7.72 0H29a1 1 0 0 0 1-1v-7.44a1 1 0 0 0-.19-.56M20 8h1.49l5.13 7H20ZM4 8h14v7H4Zm5 18a2 2 0 1 1 2-2a2 2 0 0 1-2 2m14 0a2 2 0 1 1 2-2a2 2 0 0 1-2 2m5-3h-1.14a4 4 0 0 0-7.72 0h-6.28a4 4 0 0 0-7.72 0H4v-6h24Z"></svg:path>`,
})
export class CarbonShuttleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSidePanelCloseIcon],svg[carbon-side-panel-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 4H4c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M10 26H4V6h6zm18-11H17.8l3.6-3.6L20 10l-6 6l6 6l1.4-1.4l-3.6-3.6H28v9H12V6h16z"></svg:path>`,
})
export class CarbonSidePanelCloseIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSidePanelCloseFilledIcon],svg[carbon-side-panel-close-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 4H4c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 11H17.8l3.6-3.6L20 10l-6 6l6 6l1.4-1.4l-3.6-3.6H28v9H12V6h16z"></svg:path>`,
})
export class CarbonSidePanelCloseFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSidePanelOpenIcon],svg[carbon-side-panel-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 4H4c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2M10 26H4V6h6zm18 0H12v-9h10.2l-3.6 3.6L20 22l6-6l-6-6l-1.4 1.4l3.6 3.6H12V6h16z"></svg:path>`,
})
export class CarbonSidePanelOpenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSidePanelOpenFilledIcon],svg[carbon-side-panel-open-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 4H4c-1.1 0-2 .9-2 2v20c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 22H12v-9h10.2l-3.6 3.6L20 22l6-6l-6-6l-1.4 1.4l3.6 3.6H12V6h16z"></svg:path>`,
})
export class CarbonSidePanelOpenFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSightIcon],svg[carbon-sight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 12h2v2h-2zm-4 0h2v2H6zm-4 0h2v2H2zm24 18h-2v-3h-4a5.006 5.006 0 0 1-5-5v-1.28l-2.316-.771a1 1 0 0 1-.541-1.463L15 13.723V11a9.01 9.01 0 0 1 9-9h5v2h-5a7.01 7.01 0 0 0-7 7v3a1 1 0 0 1-.143.514L14.5 18.446l1.817.605A1 1 0 0 1 17 20v2a3.003 3.003 0 0 0 3 3h5a1 1 0 0 1 1 1z"></svg:path><svg:path fill="currentColor" d="M19 12h4v2h-4z"></svg:path>`,
})
export class CarbonSightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSigmaIcon],svg[carbon-sigma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 5H7v2.414L15.586 16L7 24.586V27h17v-2H9.414l9-9l-9-9H24z"></svg:path>`,
})
export class CarbonSigmaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSignalStrengthIcon],svg[carbon-signal-strength-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 6h2v20h-2zm-8 5h2v15h-2zm-7 5h2v10h-2zm-7 4h2v6H4z"></svg:path>`,
})
export class CarbonSignalStrengthIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSimCardIcon],svg[carbon-sim-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 9H8a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2m0 4h-3v-2h3Zm-3 2h3v2h-3Zm-2-4v10h-3v-7a1 1 0 0 0-1-1H8v-2Zm-5 6H8v-2h3Zm-3 2h3v2H8Zm10 2v-2h3v2Z"></svg:path><svg:path fill="currentColor" d="M23.532 27H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h24a2 2 0 0 1 2 2v12.638a2 2 0 0 1-.464 1.28l-4.468 5.362a2 2 0 0 1-1.536.72M4 7v18h19.532L28 19.638V7Z"></svg:path>`,
})
export class CarbonSimCardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSkillLevelIcon],svg[carbon-skill-level-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 30h-8V4h8zm-6-2h4V6h-4zm-4 2h-8V12h8zm-6-2h4V14h-4zm-4 2H2V18h8zm-6-2h4v-8H4z"></svg:path>`,
})
export class CarbonSkillLevelIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSkillLevelAdvancedIcon],svg[carbon-skill-level-advanced-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 30h-8V4h8zm-10 0h-8V12h8zm-10 0H2V18h8z"></svg:path>`,
})
export class CarbonSkillLevelAdvancedIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSkillLevelBasicIcon],svg[carbon-skill-level-basic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 30h-8V4h8zm-6-2h4V6h-4zm-4 2h-8V12h8zm-6-2h4V14h-4zm-4 2H2V18h8z"></svg:path>`,
})
export class CarbonSkillLevelBasicIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSkillLevelIntermediateIcon],svg[carbon-skill-level-intermediate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 30h-8V4h8zm-6-2h4V6h-4zm-4 2h-8V12h8zm-10 0H2V18h8z"></svg:path>`,
})
export class CarbonSkillLevelIntermediateIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSkipBackIcon],svg[carbon-skip-back-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 28a1 1 0 0 1-.5-.13l-19-11a1 1 0 0 1 0-1.74l19-11a1 1 0 0 1 1 0A1 1 0 0 1 28 5v22a1 1 0 0 1-1 1M10 16l16 9.27V6.73zM2 4h2v24H2z"></svg:path>`,
})
export class CarbonSkipBackIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSkipBackFilledIcon],svg[carbon-skip-back-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 28a1 1 0 0 1-.501-.135l-19-11a1 1 0 0 1 0-1.73l19-11A1 1 0 0 1 28 5v22a1 1 0 0 1-1 1M2 4h2v24H2z"></svg:path>`,
})
export class CarbonSkipBackFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSkipBackOutlineIcon],svg[carbon-skip-back-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 22a1 1 0 0 1-.486-.126l-9-5a1 1 0 0 1 0-1.748l9-5A1 1 0 0 1 24 11v10a1 1 0 0 1-1 1m-6.94-6L22 19.3v-6.6ZM11 22H9V10h2z"></svg:path><svg:path fill="currentColor" d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4"></svg:path>`,
})
export class CarbonSkipBackOutlineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSkipBackOutlineFilledIcon],svg[carbon-skip-back-outline-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m-6 20H8V10h2Zm14-1a1 1 0 0 1-1.486.874l-9-5a1 1 0 0 1 0-1.748l9-5A1 1 0 0 1 24 11Z"></svg:path><svg:path fill="currentColor" d="M22 19.301v-6.602L16.059 16z"></svg:path><svg:path fill="none" d="M23 22a1 1 0 0 1-.486-.126l-9-5a1 1 0 0 1 0-1.748l9-5A1 1 0 0 1 24 11v10a1 1 0 0 1-1 1m-6.94-6L22 19.3v-6.6ZM10 22H8V10h2z"></svg:path>`,
})
export class CarbonSkipBackOutlineFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSkipBackOutlineSolidIcon],svg[carbon-skip-back-outline-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 22a1 1 0 0 1-.486-.126l-9-5a1 1 0 0 1 0-1.748l9-5A1 1 0 0 1 24 11v10a1 1 0 0 1-1 1m-12 0H9V10h2z"></svg:path><svg:path fill="currentColor" d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4"></svg:path>`,
})
export class CarbonSkipBackOutlineSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSkipBackSolidFilledIcon],svg[carbon-skip-back-solid-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m-6 20H8V10h2Zm14-1a1 1 0 0 1-1.486.874l-9-5a1 1 0 0 1 0-1.748l9-5A1 1 0 0 1 24 11Z"></svg:path><svg:path fill="none" d="M23 22a1 1 0 0 1-.486-.126l-9-5a1 1 0 0 1 0-1.748l9-5A1 1 0 0 1 24 11v10a1 1 0 0 1-1 1m-13 0H8V10h2z"></svg:path>`,
})
export class CarbonSkipBackSolidFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSkipForwardIcon],svg[carbon-skip-forward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 28a1 1 0 0 1-1-1V5a1 1 0 0 1 .5-.87a1 1 0 0 1 1 0l19 11a1 1 0 0 1 0 1.74l-19 11A1 1 0 0 1 5 28M6 6.73v18.54L22 16zM28 4h2v24h-2z"></svg:path>`,
})
export class CarbonSkipForwardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSkipForwardFilledIcon],svg[carbon-skip-forward-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 4h2v24h-2zM5 28a1 1 0 0 1-1-1V5a1 1 0 0 1 1.501-.865l19 11a1 1 0 0 1 0 1.73l-19 11A1 1 0 0 1 5 28"></svg:path>`,
})
export class CarbonSkipForwardFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSkipForwardOutlineIcon],svg[carbon-skip-forward-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 10h2v12h-2zM8.493 21.862A1 1 0 0 1 8 21V11a1 1 0 0 1 1.486-.874l9 5a1 1 0 0 1 0 1.748l-9 5a1 1 0 0 1-.993-.012M10 12.7v6.601L15.94 16z"></svg:path><svg:path fill="currentColor" d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4"></svg:path>`,
})
export class CarbonSkipForwardOutlineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSkipForwardOutlineFilledIcon],svg[carbon-skip-forward-outline-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 19.301L15.941 16L10 12.699z"></svg:path><svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m2.486 14.874l-9 5A1 1 0 0 1 8 21V11a1 1 0 0 1 1.486-.874l9 5a1 1 0 0 1 0 1.748M24 22h-2V10h2Z"></svg:path><svg:path fill="none" d="M22 10h2v12h-2zM8.493 21.862A1 1 0 0 1 8 21V11a1 1 0 0 1 1.486-.874l9 5a1 1 0 0 1 0 1.748l-9 5a1 1 0 0 1-.993-.012M10 12.7v6.601L15.94 16z"></svg:path>`,
})
export class CarbonSkipForwardOutlineFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSkipForwardOutlineSolidIcon],svg[carbon-skip-forward-outline-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 10h2v12h-2zM8.493 21.862A1 1 0 0 1 8 21V11a1 1 0 0 1 1.486-.874l9 5a1 1 0 0 1 0 1.748l-9 5a1 1 0 0 1-.993-.012"></svg:path><svg:path fill="currentColor" d="M16 30a14 14 0 1 1 14-14a14.016 14.016 0 0 1-14 14m0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4"></svg:path>`,
})
export class CarbonSkipForwardOutlineSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSkipForwardSolidFilledIcon],svg[carbon-skip-forward-solid-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a14 14 0 1 0 14 14A14 14 0 0 0 16 2m2.486 14.874l-9 5A1 1 0 0 1 8 21V11a1 1 0 0 1 1.486-.874l9 5a1 1 0 0 1 0 1.748M24 22h-2V10h2Z"></svg:path><svg:path fill="none" d="M22 10h2v12h-2zM8.493 21.862A1 1 0 0 1 8 21V11a1 1 0 0 1 1.486-.874l9 5a1 1 0 0 1 0 1.748l-9 5a1 1 0 0 1-.993-.012"></svg:path>`,
})
export class CarbonSkipForwardSolidFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSleetIcon],svg[carbon-sleet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 24h2v2H6zm2 2h2v2H8zm2 2h2v2h-2zm0-4h2v2h-2zm-4 4h2v2H6z"></svg:path><svg:path fill="currentColor" d="M21 30a1 1 0 0 1-.894-1.447l2-4a1 1 0 1 1 1.788.894l-2 4A1 1 0 0 1 21 30m3.8-20.864a8.994 8.994 0 0 0-17.6 0A6.497 6.497 0 0 0 8.5 22h8.882l-1.276 2.553a1 1 0 1 0 1.789.894L19.618 22H23.5a6.497 6.497 0 0 0 1.3-12.864M23.5 20h-15a4.498 4.498 0 0 1-.356-8.981l.816-.064l.099-.812a6.994 6.994 0 0 1 13.883 0l.099.812l.815.064A4.498 4.498 0 0 1 23.5 20"></svg:path>`,
})
export class CarbonSleetIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSlisorIcon],svg[carbon-slisor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 20h-2v2h2v6H4v-6h2v-2H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2"></svg:path><svg:circle cx="7" cy="25" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M16 22a1 1 0 0 1-.447-.105l-10-5l.894-1.79L16 19.883l9.553-4.776l.894 1.789l-10 5A1 1 0 0 1 16 22"></svg:path><svg:path fill="currentColor" d="M16 16a1 1 0 0 1-.447-.105l-10-5a1 1 0 0 1 0-1.79l10-5a1 1 0 0 1 .894 0l10 5a1 1 0 0 1 0 1.79l-10 5A1 1 0 0 1 16 16m-7.764-6L16 13.882L23.764 10L16 6.118Z"></svg:path>`,
})
export class CarbonSlisorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSlmIcon],svg[carbon-slm-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m28 9l-1.5 5l-.5 2l-.5-2L24 9h-2v14h2v-8l-.2-2l.6 2l1.6 4.6l1.6-4.6l.6-2l-.2 2v8h2V9zM14 21V9h-2v14h8v-2zm-6 2H2v-2h6v-4H4c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h6v2H4v4h4c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"></svg:path>`,
})
export class CarbonSlmIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSmellIcon],svg[carbon-smell-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 15v-5h-2v7h2a3 3 0 0 1 0 6h-1v-2h-2v2a3 3 0 0 1-6 0v-2h-2v2h-1a3 3 0 0 1 0-6h2V9a3 3 0 0 1 3-3h1V4h-1a5 5 0 0 0-5 5v6a5 5 0 0 0 0 10h1.42a5 5 0 0 0 9.16 0H22a5 5 0 0 0 0-10"></svg:path>`,
})
export class CarbonSmellIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSmokeIcon],svg[carbon-smoke-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.001 28a1 1 0 0 1-.8-.4l-.815-1.086a9 9 0 0 1-1.6-7.286l1.473-6.876a7 7 0 0 0-1.245-5.667L23.2 5.6a1 1 0 1 1 1.6-1.2l.815 1.086a9 9 0 0 1 1.6 7.285l-1.474 6.876a7 7 0 0 0 1.245 5.667L27.8 26.4a1 1 0 0 1-.799 1.6m-5 0a1 1 0 0 1-.8-.4l-.815-1.086a9 9 0 0 1-1.6-7.286l1.473-6.876a7 7 0 0 0-1.245-5.667L18.2 5.6a1 1 0 1 1 1.6-1.2l.815 1.086a9 9 0 0 1 1.6 7.285l-1.474 6.876a7 7 0 0 0 1.245 5.667L22.8 26.4a1 1 0 0 1-.799 1.6m-5 0a1 1 0 0 1-.8-.4l-.815-1.086a9 9 0 0 1-1.6-7.286l1.473-6.876a7 7 0 0 0-1.245-5.667L13.2 5.6a1 1 0 1 1 1.6-1.2l.814 1.086a9 9 0 0 1 1.601 7.285l-1.474 6.876a7 7 0 0 0 1.245 5.667L17.8 26.4a1 1 0 0 1-.799 1.6m-5 0a1 1 0 0 1-.8-.4l-.815-1.086a9 9 0 0 1-1.6-7.286l1.473-6.876a7 7 0 0 0-1.245-5.666L8.2 5.6a1 1 0 1 1 1.6-1.2l.815 1.086a9 9 0 0 1 1.6 7.285l-1.474 6.876a7 7 0 0 0 1.245 5.667L12.8 26.4a1 1 0 0 1-.799 1.6m-5 0a1 1 0 0 1-.801-.4l-.814-1.086a9 9 0 0 1-1.6-7.286l1.473-6.876a7 7 0 0 0-1.245-5.666L3.2 5.6a1 1 0 1 1 1.6-1.2l.815 1.086a9 9 0 0 1 1.6 7.285l-1.474 6.876a7 7 0 0 0 1.245 5.667L7.8 26.4a1 1 0 0 1-.799 1.6"></svg:path>`,
})
export class CarbonSmokeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSmoothingIcon],svg[carbon-smoothing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs></svg:defs><svg:circle cx="16" cy="16" r="5" fill="currentColor"></svg:circle><svg:path d="M7.7 4.7a14.703 14.703 0 0 0-3 3.1L6.3 9a13.263 13.263 0 0 1 2.6-2.7z" fill="currentColor"></svg:path><svg:path d="M4.6 12.3l-1.9-.6A12.511 12.511 0 0 0 2 16h2a11.476 11.476 0 0 1 .6-3.7z" fill="currentColor"></svg:path><svg:path d="M2.7 20.4a14.403 14.403 0 0 0 2 3.9l1.6-1.2a12.887 12.887 0 0 1-1.7-3.3z" fill="currentColor"></svg:path><svg:path d="M7.8 27.3a14.403 14.403 0 0 0 3.9 2l.6-1.9A12.887 12.887 0 0 1 9 25.7z" fill="currentColor"></svg:path><svg:path d="M11.7 2.7l.6 1.9A11.476 11.476 0 0 1 16 4V2a12.511 12.511 0 0 0-4.3.7z" fill="currentColor"></svg:path><svg:path d="M24.2 27.3a15.18 15.18 0 0 0 3.1-3.1L25.7 23a11.526 11.526 0 0 1-2.7 2.7z" fill="currentColor"></svg:path><svg:path d="M27.4 19.7l1.9.6A15.475 15.475 0 0 0 30 16h-2a11.476 11.476 0 0 1-.6 3.7z" fill="currentColor"></svg:path><svg:path d="M29.2 11.6a14.403 14.403 0 0 0-2-3.9l-1.6 1.2a12.887 12.887 0 0 1 1.7 3.3z" fill="currentColor"></svg:path><svg:path d="M24.1 4.6a14.403 14.403 0 0 0-3.9-2l-.6 1.9a12.887 12.887 0 0 1 3.3 1.7z" fill="currentColor"></svg:path><svg:path d="M20.3 29.3l-.6-1.9a11.476 11.476 0 0 1-3.7.6v2a21.42 21.42 0 0 0 4.3-.7z" fill="currentColor"></svg:path>`,
})
export class CarbonSmoothingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSmoothingCursorIcon],svg[carbon-smoothing-cursor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="18" cy="18" r="4" fill="currentColor"></svg:circle><svg:path d="M18 30a11.893 11.893 0 0 1-4.104-.72l.684-1.88A9.973 9.973 0 0 0 18 28z" fill="currentColor"></svg:path><svg:path d="M22.148 29.264l-.691-1.877a9.956 9.956 0 0 0 2.997-1.748l1.292 1.527a11.953 11.953 0 0 1-3.598 2.098z" fill="currentColor"></svg:path><svg:path d="M10.29 27.195a12.014 12.014 0 0 1-2.68-3.187l1.73-1.003a10.024 10.024 0 0 0 2.235 2.658z" fill="currentColor"></svg:path><svg:path d="M28.413 23.967l-1.734-.996a9.916 9.916 0 0 0 1.176-3.264l1.971.34a11.896 11.896 0 0 1-1.413 3.92z" fill="currentColor"></svg:path><svg:path d="M6.182 20.093a12.128 12.128 0 0 1-.004-4.163l1.97.342a10.121 10.121 0 0 0 .004 3.474z" fill="currentColor"></svg:path><svg:path d="M27.845 16.234a9.902 9.902 0 0 0-1.196-3.257l1.729-1.006a11.903 11.903 0 0 1 1.436 3.912z" fill="currentColor"></svg:path><svg:path d="M9.331 13.01L7.6 12.013a12.01 12.01 0 0 1 2.674-3.193l1.288 1.53a10.01 10.01 0 0 0-2.23 2.662z" fill="currentColor"></svg:path><svg:path d="M24.41 10.324a9.96 9.96 0 0 0-3.01-1.731l.68-1.881a11.95 11.95 0 0 1 3.612 2.077z" fill="currentColor"></svg:path><svg:path d="M14.562 8.606l-.688-1.877A12.103 12.103 0 0 1 18 6v2a10.088 10.088 0 0 0-3.438.606z" fill="currentColor"></svg:path><svg:path d="M11 2H2v9h2V4h7V2z" fill="currentColor"></svg:path>`,
})
export class CarbonSmoothingCursorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSnoozeIcon],svg[carbon-snooze-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 14v-2h-8v2h5.5L12 20v2h8v-2h-5.493zm3.001-8.588L24.416 4L28 7.59l-1.415 1.412z"></svg:path><svg:path fill="currentColor" d="M16 28a11 11 0 1 1 11-11a11.013 11.013 0 0 1-11 11m0-20a9 9 0 1 0 9 9a9.01 9.01 0 0 0-9-9M4.002 7.589l3.583-3.59L9 5.41L5.417 9z"></svg:path>`,
})
export class CarbonSnoozeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSnowIcon],svg[carbon-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.5 22h-15A6.5 6.5 0 0 1 7.2 9.14a9 9 0 0 1 17.6 0A6.5 6.5 0 0 1 23.5 22M16 4a7 7 0 0 0-6.94 6.14L9 11h-.86a4.5 4.5 0 0 0 .36 9h15a4.5 4.5 0 0 0 .36-9H23l-.1-.82A7 7 0 0 0 16 4m-4 21.05L10.95 24L9.5 25.45L8.05 24L7 25.05l1.45 1.45L7 27.95L8.05 29l1.45-1.45L10.95 29L12 27.95l-1.45-1.45zm14 0L24.95 24l-1.45 1.45L22.05 24L21 25.05l1.45 1.45L21 27.95L22.05 29l1.45-1.45L24.95 29L26 27.95l-1.45-1.45zm-7 2L17.95 26l-1.45 1.45L15.05 26L14 27.05l1.45 1.45L14 29.95L15.05 31l1.45-1.45L17.95 31L19 29.95l-1.45-1.45z"></svg:path>`,
})
export class CarbonSnowIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSnowBlizzardIcon],svg[carbon-snow-blizzard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 10h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm0-4h2v2h-2zm-4 4h2v2h-2zM3 26h2v2H3zm2 2h2v2H5zm2 2h2v2H7zm0-4h2v2H7zm-4 4h2v2H3zm20-4h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm0-4h2v2h-2zm-4 4h2v2h-2zM8 18h2v2H8zm2 2h2v2h-2zm2 2h2v2h-2zm0-4h2v2h-2zm-4 4h2v2H8zm10-4h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm0-4h2v2h-2zm-4 4h2v2h-2zm-5 4h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm0-4h2v2h-2zm-4 4h2v2h-2z"></svg:path><svg:path fill="currentColor" d="M24.8 9.136a8.994 8.994 0 0 0-17.6 0A6.496 6.496 0 0 0 6 21.5v-2.26a4.494 4.494 0 0 1 2.144-8.22l.816-.064l.099-.812a6.994 6.994 0 0 1 13.883 0l.099.812l.815.064A4.494 4.494 0 0 1 26 19.239v2.26a6.496 6.496 0 0 0-1.2-12.363"></svg:path>`,
})
export class CarbonSnowBlizzardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSnowDensityIcon],svg[carbon-snow-density-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 28a9.01 9.01 0 0 1-9-9a10 10 0 0 1 1.494-4.955l6.659-10.608a1.04 1.04 0 0 1 1.694 0l6.63 10.556A10.06 10.06 0 0 1 25 19a9.01 9.01 0 0 1-9 9m0-22.152l-5.782 9.208A8 8 0 0 0 9 19a7 7 0 0 0 14 0a8.06 8.06 0 0 0-1.248-3.995Z"></svg:path><svg:path fill="currentColor" d="m20.6 16.8l-1.2-1.6L17 17v-3h-2v3l-2.4-1.8l-1.2 1.6l2.933 2.2l-2.933 2.2l1.2 1.6L15 21v3h2v-3l2.4 1.8l1.2-1.6l-2.933-2.2z"></svg:path>`,
})
export class CarbonSnowDensityIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSnowHeavyIcon],svg[carbon-snow-heavy-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 26h2v2H4zm2 2h2v2H6zm2 2h2v2H8zm0-4h2v2H8zm-4 4h2v2H4zm4-12h2v2H8zm2 2h2v2h-2zm2 2h2v2h-2zm0-4h2v2h-2zm-4 4h2v2H8zm10-4h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm0-4h2v2h-2zm-4 4h2v2h-2zm-4 4h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm0-4h2v2h-2zm-4 4h2v2h-2z"></svg:path><svg:path fill="currentColor" d="M24.8 9.136a8.994 8.994 0 0 0-17.6 0A6.496 6.496 0 0 0 6 21.5v-2.26a4.494 4.494 0 0 1 2.144-8.22l.816-.064l.099-.812a6.994 6.994 0 0 1 13.883 0l.099.812l.815.064A4.494 4.494 0 0 1 26 19.239v2.26a6.496 6.496 0 0 0-1.2-12.363"></svg:path>`,
})
export class CarbonSnowHeavyIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSnowScatteredIcon],svg[carbon-snow-scattered-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 26h2v2H2zm2 2h2v2H4zm2 2h2v2H6zm0-4h2v2H6zm-4 4h2v2H2zm18-4h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm0-4h2v2h-2zm-4 4h2v2h-2zm-9-4h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm0-4h2v2h-2zm-4 4h2v2h-2zm9-30h2v3h-2zm9 10.001h3v2h-3zm-2.536-4.879L28.586 3L30 4.414l-2.122 2.122zM28.586 19l-2.122-2.12l1.414-1.415L30 17.587zM14.122 6.536L12 4.414L13.414 3l2.122 2.122z"></svg:path><svg:path fill="currentColor" d="M27 11a5.985 5.985 0 0 0-10.857-3.492A7.4 7.4 0 0 0 13.5 7a7.55 7.55 0 0 0-7.15 5.244A5.993 5.993 0 0 0 8 24h11a5.967 5.967 0 0 0 5.567-8.2A5.97 5.97 0 0 0 27 11m-8 11H8a3.993 3.993 0 0 1-.673-7.93l.663-.112l.145-.656a5.496 5.496 0 0 1 10.73 0l.145.656l.663.113A3.993 3.993 0 0 1 19 22m4.522-7.913a5.96 5.96 0 0 0-2.873-1.843a7.52 7.52 0 0 0-2.722-3.78a3.987 3.987 0 1 1 5.595 5.623"></svg:path>`,
})
export class CarbonSnowScatteredIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSnowScatteredNightIcon],svg[carbon-snow-scattered-night-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 26h2v2H2zm2 2h2v2H4zm2 2h2v2H6zm0-4h2v2H6zm-4 4h2v2H2zm18-4h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm0-4h2v2h-2zm-4 4h2v2h-2zm-9-4h2v2h-2zm2 2h2v2h-2zm2 2h2v2h-2zm0-4h2v2h-2zm-4 4h2v2h-2zm18.844-16.965a1.52 1.52 0 0 0-1.23-.866a5.36 5.36 0 0 1-3.41-1.716a6.47 6.47 0 0 1-1.286-6.392a1.6 1.6 0 0 0-.299-1.546a1.45 1.45 0 0 0-1.36-.493l-.019.003A7.77 7.77 0 0 0 16.356 7.6A7.4 7.4 0 0 0 13.5 7a7.55 7.55 0 0 0-7.15 5.244A5.993 5.993 0 0 0 8 24h11a6.007 6.007 0 0 0 6-6c0-.057-.012-.111-.014-.168a7.5 7.5 0 0 0 4.761-3.277a1.54 1.54 0 0 0 .097-1.52M19 22H8a3.993 3.993 0 0 1-.673-7.93l.663-.112l.145-.656a5.496 5.496 0 0 1 10.73 0l.145.656l.663.113A3.993 3.993 0 0 1 19 22m5.597-6.129a5.97 5.97 0 0 0-3.948-3.627a7.5 7.5 0 0 0-2.489-3.58a5.9 5.9 0 0 1 3.638-4.447a8.46 8.46 0 0 0 1.94 7.597a7.4 7.4 0 0 0 3.902 2.227a5.45 5.45 0 0 1-3.043 1.83"></svg:path>`,
})
export class CarbonSnowScatteredNightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSnowflakeIcon],svg[carbon-snowflake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.415 12H28v-2h-4.585L28 5.415L26.586 4L22 8.587V4h-2v6.587L18.587 12H17V8h-2v4h-1.587L12 10.587V4h-2v4.587L5.414 4L4 5.415L8.585 10H4v2h6.585L12 13.415V15H8v2h4v1.587L10.587 20H4v2h4.587L4 26.586l1.414 1.415L10 23.415V28h2v-6.585L13.415 20H15v4h2v-4h1.585L20 21.415V28h2v-4.585l4.585 4.586L28 26.586L23.413 22H28v-2h-6.587L20 18.587V17h4v-2h-4v-1.585ZM18 18h-4v-4h4Z"></svg:path>`,
})
export class CarbonSnowflakeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSoccerIcon],svg[carbon-soccer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="17" cy="28" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M8 20.586L13.586 15L15 16.414L9.414 22z"></svg:path><svg:path fill="currentColor" d="M28 16.584L19.414 8H6v2h12.586l3 3L6 28.586L7.414 30L23 14.415L26.584 18L23 21.586L24.414 23L28 19.416a2.004 2.004 0 0 0 0-2.832M24.5 9A3.5 3.5 0 1 1 28 5.5A3.504 3.504 0 0 1 24.5 9m0-5A1.5 1.5 0 1 0 26 5.5A1.5 1.5 0 0 0 24.5 4"></svg:path>`,
})
export class CarbonSoccerIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSoftwareResourceIcon],svg[carbon-software-resource-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.391 14.527L17.473 2.609A2.08 2.08 0 0 0 16 2c-.533 0-1.067.203-1.473.609L2.609 14.527C2.203 14.933 2 15.466 2 16s.203 1.067.609 1.473L14.526 29.39c.407.407.941.61 1.474.61s1.067-.203 1.473-.609L29.39 17.474c.407-.407.61-.94.61-1.474s-.203-1.067-.609-1.473M16 28.036L3.965 16L16 3.964L28.036 16z"></svg:path>`,
})
export class CarbonSoftwareResourceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSoftwareResourceClusterIcon],svg[carbon-software-resource-cluster-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 21c-.5 0-1-.2-1.4-.6l-3-3c-.4-.4-.6-.9-.6-1.4s.2-1 .6-1.4l3-3c.4-.4.9-.6 1.4-.6s1 .2 1.4.6l3 3c.4.4.6.9.6 1.4s-.2 1-.6 1.4l-3 3c-.4.4-.9.6-1.4.6m0-8l-3 3l3 3l3-3zm-8 0c-.5 0-1-.2-1.4-.6l-3-3C11.2 9 11 8.5 11 8s.2-1 .6-1.4l3-3c.4-.4.9-.6 1.4-.6s1 .2 1.4.6l3 3c.4.4.6.9.6 1.4s-.2 1-.6 1.4l-3 3c-.4.4-.9.6-1.4.6m0-8l-3 3l3 3l3-3zm0 24c-.5 0-1-.2-1.4-.6l-3-3c-.4-.4-.6-.9-.6-1.4s.2-1 .6-1.4l3-3c.4-.4.9-.6 1.4-.6s1 .2 1.4.6l3 3c.4.4.6.9.6 1.4s-.2 1-.6 1.4l-3 3c-.4.4-.9.6-1.4.6m0-8l-3 3l3 3l3-3zm-8 0c-.5 0-1-.2-1.4-.6l-3-3C3.2 17 3 16.5 3 16s.2-1 .6-1.4l3-3c.4-.4.9-.6 1.4-.6s1 .2 1.4.6l3 3c.4.4.6.9.6 1.4s-.2 1-.6 1.4l-3 3c-.4.4-.9.6-1.4.6m0-8l-3 3l3 3l3-3z"></svg:path>`,
})
export class CarbonSoftwareResourceClusterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSoftwareResourceResourceIcon],svg[carbon-software-resource-resource-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.899 10.283l3.394-3.394l1.414 1.414l-3.394 3.394zM4.9 19.7l-2.3-2.3C2.2 17 2 16.5 2 16s.2-1 .6-1.4l2.3-2.3l1.4 1.4L4 16l2.3 2.3zm1.989 2.007l1.414-1.414l3.394 3.394l-1.414 1.414zM16 30c-.5 0-1-.2-1.4-.6l-2.3-2.3l1.4-1.4L16 28l2.3-2.3l1.4 1.4l-2.3 2.3c-.4.4-.9.6-1.4.6m4.293-6.303l3.394-3.394l1.414 1.414l-3.394 3.394zM27.1 19.7l-1.4-1.4L28 16l-2.3-2.3l1.4-1.4l2.3 2.3c.4.4.6.9.6 1.4s-.2 1-.6 1.4zM20.303 8.313l1.414-1.414l3.394 3.394l-1.414 1.414zM16 2c-.5 0-1 .2-1.4.6l-2.3 2.3l1.4 1.4L16 4l2.3 2.3l1.4-1.4l-2.3-2.3C17 2.2 16.5 2 16 2"></svg:path>`,
})
export class CarbonSoftwareResourceResourceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSoilMoistureIcon],svg[carbon-soil-moisture-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.5 28a5.385 5.385 0 0 1-5.5-5.249a5.4 5.4 0 0 1 .874-2.83l3.616-5.383a1.217 1.217 0 0 1 2.02 0l3.55 5.277a5.5 5.5 0 0 1 .94 2.936A5.385 5.385 0 0 1 24.5 28m0-11.38l-2.936 4.367A3.36 3.36 0 0 0 21 22.751a3.51 3.51 0 0 0 7 0a3.44 3.44 0 0 0-.63-1.867Z"></svg:path><svg:circle cx="5" cy="13" r="1" fill="currentColor"></svg:circle><svg:circle cx="11" cy="19" r="1" fill="currentColor"></svg:circle><svg:circle cx="15" cy="25" r="1" fill="currentColor"></svg:circle><svg:circle cx="17" cy="15" r="1" fill="currentColor"></svg:circle><svg:circle cx="13" cy="11" r="1" fill="currentColor"></svg:circle><svg:circle cx="27" cy="11" r="1" fill="currentColor"></svg:circle><svg:circle cx="9" cy="27" r="1" fill="currentColor"></svg:circle><svg:circle cx="3" cy="21" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M2 6h28v2H2z"></svg:path>`,
})
export class CarbonSoilMoistureIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSoilMoistureFieldIcon],svg[carbon-soil-moisture-field-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.5 30a5.202 5.202 0 0 1-4.626-8.08l3.616-5.382a1.217 1.217 0 0 1 2.02 0l3.55 5.277a5.5 5.5 0 0 1 .94 2.936A5.385 5.385 0 0 1 24.5 30m0-11.38l-2.936 4.367A3.208 3.208 0 0 0 24.5 28a3.386 3.386 0 0 0 3.5-3.249a3.44 3.44 0 0 0-.63-1.867zM11 16v-5h1a4.005 4.005 0 0 0 4-4V4h-3a3.98 3.98 0 0 0-2.747 1.107A6 6 0 0 0 5 2H2v3a6.007 6.007 0 0 0 6 6h1v5H2v2h14v-2zm2-10h1v1a2 2 0 0 1-2 2h-1V8a2 2 0 0 1 2-2M8 9a4.005 4.005 0 0 1-4-4V4h1a4.005 4.005 0 0 1 4 4v1zM2 21h14v2H2zm0 5h14v2H2z"></svg:path>`,
})
export class CarbonSoilMoistureFieldIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSoilMoistureGlobalIcon],svg[carbon-soil-moisture-global-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 30a4.735 4.735 0 0 1-4.207-7.35l3.368-5.194a1 1 0 0 1 1.678 0l3.315 5.11A4.97 4.97 0 0 1 30 25.223A4.9 4.9 0 0 1 25 30m0-10.163l-2.508 3.866A2.926 2.926 0 1 0 28 25.223a2.96 2.96 0 0 0-.544-1.603zM11 24H9A17.02 17.02 0 0 1 26 7h4v2h-4a15.017 15.017 0 0 0-15 15"></svg:path><svg:path fill="currentColor" d="M16 24h-2a12.014 12.014 0 0 1 12-12h4v2h-4a10.01 10.01 0 0 0-10 10"></svg:path><svg:path fill="currentColor" d="M26 2a21.86 21.86 0 0 0-12 3.576A21.86 21.86 0 0 0 2 2v2a19.9 19.9 0 0 1 10.262 2.835a22 22 0 0 0-2.315 2.144A17 17 0 0 0 2 7v2a15 15 0 0 1 6.62 1.537a22 22 0 0 0-1.702 2.537A12 12 0 0 0 2 12v2a9.9 9.9 0 0 1 4 .85A21.9 21.9 0 0 0 4 24h2A20.023 20.023 0 0 1 26 4h4V2Z"></svg:path>`,
})
export class CarbonSoilMoistureGlobalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSoilTemperatureIcon],svg[carbon-soil-temperature-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="5" cy="13" r="1" fill="currentColor"></svg:circle><svg:circle cx="11" cy="19" r="1" fill="currentColor"></svg:circle><svg:circle cx="15" cy="25" r="1" fill="currentColor"></svg:circle><svg:circle cx="17" cy="15" r="1" fill="currentColor"></svg:circle><svg:circle cx="13" cy="11" r="1" fill="currentColor"></svg:circle><svg:circle cx="9" cy="27" r="1" fill="currentColor"></svg:circle><svg:circle cx="3" cy="21" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M25 30a4.986 4.986 0 0 1-3-8.98V15a3 3 0 0 1 6 0v6.02A4.986 4.986 0 0 1 25 30m0-16a1 1 0 0 0-1 1v7.13l-.497.29A2.97 2.97 0 0 0 22 25a3 3 0 0 0 6 0a2.97 2.97 0 0 0-1.503-2.581L26 22.13V15a1 1 0 0 0-1-1M2 6h28v2H2z"></svg:path>`,
})
export class CarbonSoilTemperatureIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSoilTemperatureFieldIcon],svg[carbon-soil-temperature-field-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 16v-5h1a4.005 4.005 0 0 0 4-4V4h-3a3.98 3.98 0 0 0-2.747 1.107A6 6 0 0 0 5 2H2v3a6.007 6.007 0 0 0 6 6h1v5H2v2h14v-2zm2-10h1v1a2 2 0 0 1-2 2h-1V8a2 2 0 0 1 2-2M8 9a4.005 4.005 0 0 1-4-4V4h1a4.005 4.005 0 0 1 4 4v1zM2 21h14v2H2zm0 5h14v2H2zm23 4a4.986 4.986 0 0 1-3-8.98V15a3 3 0 0 1 6 0v6.02A4.986 4.986 0 0 1 25 30m0-16a1 1 0 0 0-1 1v7.13l-.497.29A2.97 2.97 0 0 0 22 25a3 3 0 0 0 6 0a2.97 2.97 0 0 0-1.503-2.581L26 22.13V15a1 1 0 0 0-1-1"></svg:path>`,
})
export class CarbonSoilTemperatureFieldIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSoilTemperatureGlobalIcon],svg[carbon-soil-temperature-global-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 30a4.986 4.986 0 0 1-3-8.98V15a3 3 0 0 1 6 0v6.02A4.986 4.986 0 0 1 25 30m0-16a1 1 0 0 0-1 1v7.13l-.497.29A2.97 2.97 0 0 0 22 25a3 3 0 0 0 6 0a2.97 2.97 0 0 0-1.503-2.581L26 22.13V15a1 1 0 0 0-1-1m-9 10h-2a11.9 11.9 0 0 1 3.764-8.727l1.373 1.454A9.9 9.9 0 0 0 16 24"></svg:path><svg:path fill="currentColor" d="M11 24H9A17.02 17.02 0 0 1 26 7h4v2h-4a15.017 15.017 0 0 0-15 15"></svg:path><svg:path fill="currentColor" d="M26 2a21.86 21.86 0 0 0-12 3.576A21.86 21.86 0 0 0 2 2v2a19.9 19.9 0 0 1 10.262 2.835a22 22 0 0 0-2.315 2.144A17 17 0 0 0 2 7v2a15 15 0 0 1 6.62 1.537a22 22 0 0 0-1.702 2.537A12 12 0 0 0 2 12v2a9.9 9.9 0 0 1 4 .85A21.9 21.9 0 0 0 4 24h2A20.023 20.023 0 0 1 26 4h4V2Z"></svg:path>`,
})
export class CarbonSoilTemperatureGlobalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSolarPanelIcon],svg[carbon-solar-panel-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 26V14H13v12h5v2H2v2h28v-2h-5v-2zm-5-2v-3h3v3zm-2-3v3h-3v-3zm-3-2v-3h3v3zm8 0h-3v-3h3zm-10-3v3h-3v-3zm-3 8v-3h3v3zm8 4h-3v-2h3zM9.333 14.981A4 4 0 1 1 16 12h-2a2 2 0 1 0-3.333 1.49zM11 2h2v4h-2zm-9 9h4v2H2zm2.222-5.364l1.414-1.414L8.464 7.05L7.05 8.464zM16.95 8.464L15.536 7.05l2.828-2.828l1.414 1.414z"></svg:path>`,
})
export class CarbonSolarPanelIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSortAscendingIcon],svg[carbon-sort-ascending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 22l1.414-1.414L23 24.172V4h2v20.172l3.586-3.586L30 22l-6 6zM2 18h14v2H2zm4-6h10v2H6zm4-6h6v2h-6z"></svg:path>`,
})
export class CarbonSortAscendingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSortDescendingIcon],svg[carbon-sort-descending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m18 22l1.414-1.414L23 24.172V4h2v20.172l3.586-3.586L30 22l-6 6zM2 6h14v2H2zm4 6h10v2H6zm4 6h6v2h-6z"></svg:path>`,
})
export class CarbonSortDescendingIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSortRemoveIcon],svg[carbon-sort-remove-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 19.415L28.586 18L25 21.587L21.414 18L20 19.415L23.586 23L20 26.586L21.414 28L25 24.414L28.586 28L30 26.586L26.414 23zM10 18h6v2h-6zM2 6h14v2H2zm4 6h10v2H6z"></svg:path>`,
})
export class CarbonSortRemoveIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSpellCheckIcon],svg[carbon-spell-check-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 22h2l-5-12h-2l-5 12h2l1.24-3h5.53Zm-5.93-5l1.82-4.42h.25L18 17Z"></svg:path><svg:path fill="currentColor" d="M12 28H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v11h-2V6H6v20h6zm11-.82l-2.59-2.59L19 26l4 4l7-7l-1.41-1.41z"></svg:path>`,
})
export class CarbonSpellCheckIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSpineLabelIcon],svg[carbon-spine-label-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M3 11v2h5.59l-6.3 6.29l1.42 1.42l6.29-6.3V20h2v-9H3z" fill="currentColor"></svg:path><svg:path d="M26 13h-3v-1h-2v1h-3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h3v1h2v-1h3a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm-8 4v-2h8v2z" fill="currentColor"></svg:path><svg:path d="M26 23h-3v-1h-2v1h-3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h3v1h2v-1h3a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm-8 4v-2h8v2z" fill="currentColor"></svg:path><svg:path d="M26 3h-3V2h-2v1h-3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h3v1h2V9h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-8 4V5h8v2z" fill="currentColor"></svg:path>`,
})
export class CarbonSpineLabelIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSplitIcon],svg[carbon-split-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 20h2v4h-2zm0-6h2v4h-2zm0-6h2v4h-2z"></svg:path><svg:path fill="currentColor" d="M28 16A12.01 12.01 0 0 0 17 4.05V2h-2v2.05a11.99 11.99 0 0 0 0 23.9V30h2v-2.05A12.01 12.01 0 0 0 28 16M16 26a10 10 0 1 1 10-10a10.01 10.01 0 0 1-10 10"></svg:path>`,
})
export class CarbonSplitIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSplitDiscardIcon],svg[carbon-split-discard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M28 16A12.01 12.01 0 0 0 17 4.05V2h-2v2.05a11.99 11.99 0 0 0 0 23.9V30h2v-2.05A12.01 12.01 0 0 0 28 16zM16 26V6a10 10 0 0 1 0 20z" fill="currentColor"></svg:path>`,
})
export class CarbonSplitDiscardIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSplitScreenIcon],svg[carbon-split-screen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 4h2v24h-2zm-5 3v18H4V7zm0-2H4a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m18 2v18h-6V7zm0-2h-6a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2"></svg:path>`,
})
export class CarbonSplitScreenIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSprayPaintIcon],svg[carbon-spray-paint-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.5 23a4.5 4.5 0 1 1 4.5-4.5a4.505 4.505 0 0 1-4.5 4.5m0-7a2.5 2.5 0 1 0 2.5 2.5a2.503 2.503 0 0 0-2.5-2.5"></svg:path><svg:path fill="currentColor" d="M28 8h-2V3h-7v5h-2a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h11a2.003 2.003 0 0 0 2-2V10a2 2 0 0 0-2-2m-7-3h3v3h-3zm-4 23V10h11l.002 18zM2 14h3v3H2zm5-5h3v3H7zM2 9h3v3H2zm10-5h3v3h-3zM7 4h3v3H7zM2 4h3v3H2z"></svg:path>`,
})
export class CarbonSprayPaintIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSproutIcon],svg[carbon-sprout-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 2a11.01 11.01 0 0 0-10.245 7.024A7 7 0 0 0 9 6H6v3a7.01 7.01 0 0 0 7 7h1v9.05a9.92 9.92 0 0 0-6.071 2.879l1.414 1.414a8 8 0 0 1 12.309 1.213l1.661-1.113A9.98 9.98 0 0 0 16 25.062V16h1A11.013 11.013 0 0 0 28 5V2ZM13 14a5.006 5.006 0 0 1-5-5V8h1a5.005 5.005 0 0 1 5 5v1Zm13-9a9.01 9.01 0 0 1-9 9h-1v-1a9.01 9.01 0 0 1 9-9h1Z"></svg:path>`,
})
export class CarbonSproutIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSpyreAcceleratorIcon],svg[carbon-spyre-accelerator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 17a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0-4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m6 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0-4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m12 4a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0-4a1 1 0 1 0 0-2a1 1 0 0 0 0 2M2 7v17h6v-3h3v4h16v-4h3V7zm23 16H13v-2h12zm3-4H6v3H4V9h24zm-6-8h-6v6h6zm-2 4h-2v-2h2z"></svg:path>`,
})
export class CarbonSpyreAcceleratorIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSqlIcon],svg[carbon-sql-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 21V9h-2v14h8v-2zM18 9h-4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h1v2a2 2 0 0 0 2 2h2v-2h-2v-2h1a2 2 0 0 0 2-2V11a2 2 0 0 0-2-2m-4 12V11h4v10zm-6 2H2v-2h6v-4H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h6v2H4v4h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2"></svg:path>`,
})
export class CarbonSqlIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonSquareOutlineIcon],svg[carbon-square-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 4H6a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2M6 26V6h20v20z"></svg:path>`,
})
export class CarbonSquareOutlineIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonStackLimitationIcon],svg[carbon-stack-limitation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 22h8v8H8zm16-10h-4v2h4v2h-3v2h3v2h-4v2h4a2.003 2.003 0 0 0 2-2v-6a2 2 0 0 0-2-2m-8 8H8v-8h8zm-6-2h4v-4h-4zm6-14.59L14.59 2L12 4.59L9.41 2L8 3.41L10.59 6L8 8.59L9.41 10L12 7.41L14.59 10L16 8.59L13.41 6z"></svg:path>`,
})
export class CarbonStackLimitationIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonStackedMoveIcon],svg[carbon-stacked-move-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M15 28H4a2 2 0 0 1-2-2V11a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v15a2 2 0 0 1-2 2zM4 11v15h11V11z" fill="currentColor"></svg:path><svg:path d="M26 6l-1.41 1.41L27 10h-5V6a2 2 0 0 0-2-2H10v2h10v14h2v-8h5l-2.41 2.59L26 16l5-5z" fill="currentColor"></svg:path>`,
})
export class CarbonStackedMoveIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonStackedScrolling1Icon],svg[carbon-stacked-scrolling-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M18 30H4a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2zM4 14v14h14V14z" fill="currentColor"></svg:path><svg:path d="M25 23h-2V9H9V7h14a2 2 0 0 1 2 2z" fill="currentColor"></svg:path><svg:path d="M30 16h-2V4H16V2h12a2 2 0 0 1 2 2z" fill="currentColor"></svg:path>`,
})
export class CarbonStackedScrolling1Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonStackedScrolling2Icon],svg[carbon-stacked-scrolling-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M8 30H2a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2zM2 14v14h6V14z" fill="currentColor"></svg:path><svg:path d="M20 30h-6a2 2 0 0 1-2-2V14a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2zm-6-16v14h6V14z" fill="currentColor"></svg:path><svg:path d="M27 21h-2V9h-8V7h8a2 2 0 0 1 2 2z" fill="currentColor"></svg:path><svg:path d="M32 16h-2V4h-8V2h8a2 2 0 0 1 2 2z" fill="currentColor"></svg:path>`,
})
export class CarbonStackedScrolling2Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonStampIcon],svg[carbon-stamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 18h-6v-3.102a7.5 7.5 0 0 1 1.159-3.854a5.975 5.975 0 0 0-1.374-7.7a5.997 5.997 0 0 0-9.683 3.54a5.9 5.9 0 0 0 .748 4.174A7.26 7.26 0 0 1 12 14.794V18H6a2 2 0 0 0-2 2v4a2.003 2.003 0 0 0 2 2v2a2.003 2.003 0 0 0 2 2h16a2.003 2.003 0 0 0 2-2v-2a2.003 2.003 0 0 0 2-2v-4a2 2 0 0 0-2-2M12.07 7.244a4 4 0 1 1 7.373 2.773A9.8 9.8 0 0 0 18.066 14H13.94a9.54 9.54 0 0 0-1.376-3.974a3.94 3.94 0 0 1-.494-2.782M18 16v2h-4v-2Zm6 12H8v-2h16ZM6 24v-4h20v4Z"></svg:path>`,
})
export class CarbonStampIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonStarIcon],svg[carbon-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 6.52l2.76 5.58l.46 1l1 .15l6.16.89l-4.38 4.3l-.75.73l.18 1l1.05 6.13l-5.51-2.89L16 23l-.93.49l-5.51 2.85l1-6.13l.18-1l-.74-.77l-4.42-4.35l6.16-.89l1-.15l.46-1zM16 2l-4.55 9.22l-10.17 1.47l7.36 7.18L6.9 30l9.1-4.78L25.1 30l-1.74-10.13l7.36-7.17l-10.17-1.48Z"></svg:path>`,
})
export class CarbonStarIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonStarFilledIcon],svg[carbon-star-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 2l-4.55 9.22l-10.17 1.47l7.36 7.18L6.9 30l9.1-4.78L25.1 30l-1.74-10.13l7.36-7.17l-10.17-1.48Z"></svg:path>`,
})
export class CarbonStarFilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonStarHalfIcon],svg[carbon-star-half-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.45 11.22L1.28 12.7l7.36 7.17L6.9 30l9.1-4.78V2z"></svg:path>`,
})
export class CarbonStarHalfIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonStarReviewIcon],svg[carbon-star-review-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 26h8v2h-8zm0-4h12v2H18zm0-4h12v2H18z"></svg:path><svg:path fill="currentColor" d="M20.549 11.217L16 2l-4.549 9.217L1.28 12.695l7.36 7.175L6.902 30L14 26.269v-2.26l-4.441 2.335l1.052-6.136l.178-1.037l-.753-.733l-4.458-4.347l6.161-.895l1.04-.151l.466-.943L16 6.519l2.755 5.583l.466.943l1.04.151l7.454 1.085L28 12.3z"></svg:path>`,
})
export class CarbonStarReviewIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonStatusAcknowledgeIcon],svg[carbon-status-acknowledge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M24 30a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6zm0-10a4 4 0 1 0 4 4a4.005 4.005 0 0 0-4-4z" fill="currentColor"></svg:path><svg:path d="M12 15.59L9.41 13L8 14.41l4 4l7-7L17.59 10L12 15.59z" fill="currentColor"></svg:path><svg:path d="M14 24a10 10 0 1 1 10-10h2a12 12 0 1 0-12 12z" fill="currentColor"></svg:path>`,
})
export class CarbonStatusAcknowledgeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}

@Component({
  standalone: true,
  selector: 'svg[carbonStatusChangeIcon],svg[carbon-status-change-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M7 30a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5zm0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3z" fill="currentColor"></svg:path><svg:path d="M23 30a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5zm0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3z" fill="currentColor"></svg:path><svg:path d="M24 7v7l3.586-3.414L29 12l-6 6l-6-6l1.414-1.414L22 14V7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v11H6V7a3.003 3.003 0 0 1 3-3h12a3.003 3.003 0 0 1 3 3z" fill="currentColor"></svg:path>`,
})
export class CarbonStatusChangeIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
